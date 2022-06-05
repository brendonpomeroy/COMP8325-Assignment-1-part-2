/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function(bd, L) {
    var av = bd.document, bu = bd.navigator, bm = bd.location;
    var b = (function() {
        var bF = function(b0, b1) {
            return new bF.fn.init(b0, b1, bD);
        }, bU = bd.jQuery, bH = bd.$, bD, bY = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, bM = /\S/, bI = /^\s+/, bE = /\s+$/, bA = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bN = /^[\],:{}\s]*$/, bW = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, bP = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, bJ = /(?:^|:|,)(?:\s*\[)+/g, by = /(webkit)[ \/]([\w.]+)/, bR = /(opera)(?:.*version)?[ \/]([\w.]+)/, bQ = /(msie) ([\w.]+)/, bS = /(mozilla)(?:.*? rv:([\w.]+))?/, bB = /-([a-z]|[0-9])/ig, bZ = /^-ms-/, bT = function(b0, b1) {
            return (b1 + "").toUpperCase();
        }, bX = bu.userAgent, bV, bC, e, bL = Object.prototype.toString, bG = Object.prototype.hasOwnProperty, bz = Array.prototype.push, bK = Array.prototype.slice, bO = String.prototype.trim, bv = Array.prototype.indexOf, bx = {};
        bF.fn = bF.prototype = {
            constructor: bF,
            init: function(b0, b4, b3) {
                var b2, b5, b1, b6;
                if (!b0) {
                    return this;
                }
                if (b0.nodeType) {
                    this.context = this[0] = b0;
                    this.length = 1;
                    return this;
                }
                if (b0 === "body"&&!b4 && av.body) {
                    this.context = av;
                    this[0] = av.body;
                    this.selector = b0;
                    this.length = 1;
                    return this;
                }
                if (typeof b0 === "string") {
                    if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">" && b0.length >= 3) {
                        b2 = [null, b0, null];
                    } else {
                        b2 = bY.exec(b0);
                    }
                    if (b2 && (b2[1] ||!b4)) {
                        if (b2[1]) {
                            b4 = b4 instanceof bF ? b4[0] : b4;
                            b6 = (b4 ? b4.ownerDocument || b4 : av);
                            b1 = bA.exec(b0);
                            if (b1) {
                                if (bF.isPlainObject(b4)) {
                                    b0 = [av.createElement(b1[1])];
                                    bF.fn.attr.call(b0, b4, true);
                                } else {
                                    b0 = [b6.createElement(b1[1])];
                                }
                            } else {
                                b1 = bF.buildFragment([b2[1]], [b6]);
                                b0 = (b1.cacheable ? bF.clone(b1.fragment) : b1.fragment).childNodes;
                            }
                            return bF.merge(this, b0);
                        } else {
                            b5 = av.getElementById(b2[2]);
                            if (b5 && b5.parentNode) {
                                if (b5.id !== b2[2]) {
                                    return b3.find(b0);
                                }
                                this.length = 1;
                                this[0] = b5;
                            }
                            this.context = av;
                            this.selector = b0;
                            return this;
                        }
                    } else {
                        if (!b4 || b4.jquery) {
                            return (b4 || b3).find(b0);
                        } else {
                            return this.constructor(b4).find(b0);
                        }
                    }
                } else {
                    if (bF.isFunction(b0)) {
                        return b3.ready(b0);
                    }
                }
                if (b0.selector !== L) {
                    this.selector = b0.selector;
                    this.context = b0.context;
                }
                return bF.makeArray(b0, this);
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return bK.call(this, 0);
            },
            get: function(b0) {
                return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length + b0] : this[b0]);
            },
            pushStack: function(b1, b3, b0) {
                var b2 = this.constructor();
                if (bF.isArray(b1)) {
                    bz.apply(b2, b1);
                } else {
                    bF.merge(b2, b1);
                }
                b2.prevObject = this;
                b2.context = this.context;
                if (b3 === "find") {
                    b2.selector = this.selector + (this.selector ? " " : "") + b0;
                } else {
                    if (b3) {
                        b2.selector = this.selector + "." + b3 + "(" + b0 + ")";
                    }
                }
                return b2;
            },
            each: function(b1, b0) {
                return bF.each(this, b1, b0);
            },
            ready: function(b0) {
                bF.bindReady();
                bC.add(b0);
                return this;
            },
            eq: function(b0) {
                b0 =+ b0;
                return b0===-1 ? this.slice(b0) : this.slice(b0, b0 + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq( - 1);
            },
            slice: function() {
                return this.pushStack(bK.apply(this, arguments), "slice", bK.call(arguments).join(","));
            },
            map: function(b0) {
                return this.pushStack(bF.map(this, function(b2, b1) {
                    return b0.call(b2, b1, b2);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: bz,
            sort: [].sort,
            splice: [].splice
        };
        bF.fn.init.prototype = bF.fn;
        bF.extend = bF.fn.extend = function() {
            var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1, b3 = arguments.length, b8 = false;
            if (typeof b5 === "boolean") {
                b8 = b5;
                b5 = arguments[1] || {};
                b4 = 2;
            }
            if (typeof b5 !== "object"&&!bF.isFunction(b5)) {
                b5 = {};
            }
            if (b3 === b4) {
                b5 = this;
                --b4;
            }
            for (; b4 < b3; b4++) {
                if ((b9 = arguments[b4]) != null) {
                    for (b2 in b9) {
                        b0 = b5[b2];
                        b1 = b9[b2];
                        if (b5 === b1) {
                            continue;
                        }
                        if (b8 && b1 && (bF.isPlainObject(b1) || (b6 = bF.isArray(b1)))) {
                            if (b6) {
                                b6 = false;
                                b7 = b0 && bF.isArray(b0) ? b0 : [];
                            } else {
                                b7 = b0 && bF.isPlainObject(b0) ? b0 : {};
                            }
                            b5[b2] = bF.extend(b8, b7, b1);
                        } else {
                            if (b1 !== L) {
                                b5[b2] = b1;
                            }
                        }
                    }
                }
            }
            return b5;
        };
        bF.extend({
            noConflict: function(b0) {
                if (bd.$ === bF) {
                    bd.$ = bH;
                }
                if (b0 && bd.jQuery === bF) {
                    bd.jQuery = bU;
                }
                return bF;
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(b0) {
                if (b0) {
                    bF.readyWait++;
                } else {
                    bF.ready(true);
                }
            },
            ready: function(b0) {
                if ((b0 === true&&!--bF.readyWait) || (b0 !== true&&!bF.isReady)) {
                    if (!av.body) {
                        return setTimeout(bF.ready, 1);
                    }
                    bF.isReady = true;
                    if (b0 !== true&&--bF.readyWait > 0) {
                        return;
                    }
                    bC.fireWith(av, [bF]);
                    if (bF.fn.trigger) {
                        bF(av).trigger("ready").off("ready");
                    }
                }
            },
            bindReady: function() {
                if (bC) {
                    return;
                }
                bC = bF.Callbacks("once memory");
                if (av.readyState === "complete") {
                    return setTimeout(bF.ready, 1);
                }
                if (av.addEventListener) {
                    av.addEventListener("DOMContentLoaded", e, false);
                    bd.addEventListener("load", bF.ready, false);
                } else {
                    if (av.attachEvent) {
                        av.attachEvent("onreadystatechange", e);
                        bd.attachEvent("onload", bF.ready);
                        var b0 = false;
                        try {
                            b0 = bd.frameElement == null;
                        } catch (b1) {}
                        if (av.documentElement.doScroll && b0) {
                            bw();
                        }
                    }
                }
            },
            isFunction: function(b0) {
                return bF.type(b0) === "function";
            },
            isArray: Array.isArray || function(b0) {
                return bF.type(b0) === "array";
            },
            isWindow: function(b0) {
                return b0 != null && b0 == b0.window;
            },
            isNumeric: function(b0) {
                return !isNaN(parseFloat(b0)) && isFinite(b0);
            },
            type: function(b0) {
                return b0 == null ? String(b0) : bx[bL.call(b0)] || "object";
            },
            isPlainObject: function(b2) {
                if (!b2 || bF.type(b2) !== "object" || b2.nodeType || bF.isWindow(b2)) {
                    return false;
                }
                try {
                    if (b2.constructor&&!bG.call(b2, "constructor")&&!bG.call(b2.constructor.prototype, "isPrototypeOf")) {
                        return false;
                    }
                } catch (b1) {
                    return false;
                }
                var b0;
                for (b0 in b2) {}
                return b0 === L || bG.call(b2, b0);
            },
            isEmptyObject: function(b1) {
                for (var b0 in b1) {
                    return false;
                }
                return true;
            },
            error: function(b0) {
                throw new Error(b0);
            },
            parseJSON: function(b0) {
                if (typeof b0 !== "string" ||!b0) {
                    return null;
                }
                b0 = bF.trim(b0);
                if (bd.JSON && bd.JSON.parse) {
                    return bd.JSON.parse(b0);
                }
                if (bN.test(b0.replace(bW, "@").replace(bP, "]").replace(bJ, ""))) {
                    return (new Function("return " + b0))();
                }
                bF.error("Invalid JSON: " + b0);
            },
            parseXML: function(b2) {
                if (typeof b2 !== "string" ||!b2) {
                    return null;
                }
                var b0, b1;
                try {
                    if (bd.DOMParser) {
                        b1 = new DOMParser();
                        b0 = b1.parseFromString(b2, "text/xml");
                    } else {
                        b0 = new ActiveXObject("Microsoft.XMLDOM");
                        b0.async = "false";
                        b0.loadXML(b2);
                    }
                } catch (b3) {
                    b0 = L;
                }
                if (!b0 ||!b0.documentElement || b0.getElementsByTagName("parsererror").length) {
                    bF.error("Invalid XML: " + b2);
                }
                return b0;
            },
            noop: function() {},
            globalEval: function(b0) {
                if (b0 && bM.test(b0)) {
                    (bd.execScript || function(b1) {
                        bd["eval"].call(bd, b1);
                    })(b0);
                }
            },
            camelCase: function(b0) {
                return b0.replace(bZ, "ms-").replace(bB, bT);
            },
            nodeName: function(b1, b0) {
                return b1.nodeName && b1.nodeName.toUpperCase() === b0.toUpperCase();
            },
            each: function(b3, b6, b2) {
                var b1, b4 = 0, b5 = b3.length, b0 = b5 === L || bF.isFunction(b3);
                if (b2) {
                    if (b0) {
                        for (b1 in b3) {
                            if (b6.apply(b3[b1], b2) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b4 < b5;) {
                            if (b6.apply(b3[b4++], b2) === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (b0) {
                        for (b1 in b3) {
                            if (b6.call(b3[b1], b1, b3[b1]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b4 < b5;) {
                            if (b6.call(b3[b4], b4, b3[b4++]) === false) {
                                break;
                            }
                        }
                    }
                }
                return b3;
            },
            trim: bO ? function(b0) {
                return b0 == null ? "" : bO.call(b0);
            }
            : function(b0) {
                return b0 == null ? "" : b0.toString().replace(bI, "").replace(bE, "");
            },
            makeArray: function(b3, b1) {
                var b0 = b1 || [];
                if (b3 != null) {
                    var b2 = bF.type(b3);
                    if (b3.length == null || b2 === "string" || b2 === "function" || b2 === "regexp" || bF.isWindow(b3)) {
                        bz.call(b0, b3);
                    } else {
                        bF.merge(b0, b3);
                    }
                }
                return b0;
            },
            inArray: function(b2, b3, b1) {
                var b0;
                if (b3) {
                    if (bv) {
                        return bv.call(b3, b2, b1);
                    }
                    b0 = b3.length;
                    b1 = b1 ? b1 < 0 ? Math.max(0, b0 + b1) : b1 : 0;
                    for (; b1 < b0; b1++) {
                        if (b1 in b3 && b3[b1] === b2) {
                            return b1;
                        }
                    }
                }
                return - 1;
            },
            merge: function(b4, b2) {
                var b3 = b4.length, b1 = 0;
                if (typeof b2.length === "number") {
                    for (var b0 = b2.length; b1 < b0; b1++) {
                        b4[b3++] = b2[b1];
                    }
                } else {
                    while (b2[b1] !== L) {
                        b4[b3++] = b2[b1++];
                    }
                }
                b4.length = b3;
                return b4;
            },
            grep: function(b1, b6, b0) {
                var b2 = [], b5;
                b0=!!b0;
                for (var b3 = 0, b4 = b1.length; b3 < b4; b3++) {
                    b5=!!b6(b1[b3], b3);
                    if (b0 !== b5) {
                        b2.push(b1[b3]);
                    }
                }
                return b2;
            },
            map: function(b0, b7, b8) {
                var b5, b6, b4 = [], b2 = 0, b1 = b0.length, b3 = b0 instanceof bF || b1 !== L && typeof b1 === "number" && ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bF.isArray(b0));
                if (b3) {
                    for (; b2 < b1; b2++) {
                        b5 = b7(b0[b2], b2, b8);
                        if (b5 != null) {
                            b4[b4.length] = b5;
                        }
                    }
                } else {
                    for (b6 in b0) {
                        b5 = b7(b0[b6], b6, b8);
                        if (b5 != null) {
                            b4[b4.length] = b5;
                        }
                    }
                }
                return b4.concat.apply([], b4);
            },
            guid: 1,
            proxy: function(b4, b3) {
                if (typeof b3 === "string") {
                    var b2 = b4[b3];
                    b3 = b4;
                    b4 = b2;
                }
                if (!bF.isFunction(b4)) {
                    return L;
                }
                var b0 = bK.call(arguments, 2), b1 = function() {
                    return b4.apply(b3, b0.concat(bK.call(arguments)));
                };
                b1.guid = b4.guid = b4.guid || b1.guid || bF.guid++;
                return b1;
            },
            access: function(b0, b6, b9, b7, b4, ca, b8) {
                var b2, b5 = b9 == null, b3 = 0, b1 = b0.length;
                if (b9 && typeof b9 === "object") {
                    for (b3 in b9) {
                        bF.access(b0, b6, b3, b9[b3], 1, ca, b7);
                    }
                    b4 = 1;
                } else {
                    if (b7 !== L) {
                        b2 = b8 === L && bF.isFunction(b7);
                        if (b5) {
                            if (b2) {
                                b2 = b6;
                                b6 = function(cc, cb, cd) {
                                    return b2.call(bF(cc), cd);
                                };
                            } else {
                                b6.call(b0, b7);
                                b6 = null;
                            }
                        }
                        if (b6) {
                            for (; b3 < b1; b3++) {
                                b6(b0[b3], b9, b2 ? b7.call(b0[b3], b3, b6(b0[b3], b9)) : b7, b8);
                            }
                        }
                        b4 = 1;
                    }
                }
                return b4 ? b0 : b5 ? b6.call(b0) : b1 ? b6(b0[0], b9) : ca;
            },
            now: function() {
                return (new Date()).getTime();
            },
            uaMatch: function(b1) {
                b1 = b1.toLowerCase();
                var b0 = by.exec(b1) || bR.exec(b1) || bQ.exec(b1) || b1.indexOf("compatible") < 0 && bS.exec(b1) || [];
                return {
                    browser: b0[1] || "",
                    version: b0[2] || "0"
                };
            },
            sub: function() {
                function b0(b3, b4) {
                    return new b0.fn.init(b3, b4);
                }
                bF.extend(true, b0, this);
                b0.superclass = this;
                b0.fn = b0.prototype = this ();
                b0.fn.constructor = b0;
                b0.sub = this.sub;
                b0.fn.init = function b2(b3, b4) {
                    if (b4 && b4 instanceof bF&&!(b4 instanceof b0)) {
                        b4 = b0(b4);
                    }
                    return bF.fn.init.call(this, b3, b4, b1);
                };
                b0.fn.init.prototype = b0.fn;
                var b1 = b0(av);
                return b0;
            },
            browser: {}
        });
        bF.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b1, b0) {
            bx["[object " + b0 + "]"] = b0.toLowerCase();
        });
        bV = bF.uaMatch(bX);
        if (bV.browser) {
            bF.browser[bV.browser] = true;
            bF.browser.version = bV.version;
        }
        if (bF.browser.webkit) {
            bF.browser.safari = true;
        }
        if (bM.test("\xA0")) {
            bI = /^[\s\xA0]+/;
            bE = /[\s\xA0]+$/;
        }
        bD = bF(av);
        if (av.addEventListener) {
            e = function() {
                av.removeEventListener("DOMContentLoaded", e, false);
                bF.ready();
            };
        } else {
            if (av.attachEvent) {
                e = function() {
                    if (av.readyState === "complete") {
                        av.detachEvent("onreadystatechange", e);
                        bF.ready();
                    }
                };
            }
        }
        function bw() {
            if (bF.isReady) {
                return;
            }
            try {
                av.documentElement.doScroll("left");
            } catch (b0) {
                setTimeout(bw, 1);
                return;
            }
            bF.ready();
        }
        return bF;
    })();
    var a3 = {};
    function X(e) {
        var bv = a3[e] = {}, bw, bx;
        e = e.split(/\s+/);
        for (bw = 0, bx = e.length; bw < bx; bw++) {
            bv[e[bw]] = true;
        }
        return bv;
    }
    b.Callbacks = function(bx) {
        bx = bx ? (a3[bx] || X(bx)) : {};
        var bC = [], bD = [], by, e, bz, bw, bA, bB, bF = function(bG) {
            var bH, bK, bJ, bI, bL;
            for (bH = 0, bK = bG.length; bH < bK; bH++) {
                bJ = bG[bH];
                bI = b.type(bJ);
                if (bI === "array") {
                    bF(bJ);
                } else {
                    if (bI === "function") {
                        if (!bx.unique ||!bE.has(bJ)) {
                            bC.push(bJ);
                        }
                    }
                }
            }
        }, bv = function(bH, bG) {
            bG = bG || [];
            by=!bx.memory || [bH, bG];
            e = true;
            bz = true;
            bB = bw || 0;
            bw = 0;
            bA = bC.length;
            for (; bC && bB < bA; bB++) {
                if (bC[bB].apply(bH, bG) === false && bx.stopOnFalse) {
                    by = true;
                    break;
                }
            }
            bz = false;
            if (bC) {
                if (!bx.once) {
                    if (bD && bD.length) {
                        by = bD.shift();
                        bE.fireWith(by[0], by[1]);
                    }
                } else {
                    if (by === true) {
                        bE.disable();
                    } else {
                        bC = [];
                    }
                }
            }
        }, bE = {
            add: function() {
                if (bC) {
                    var bG = bC.length;
                    bF(arguments);
                    if (bz) {
                        bA = bC.length;
                    } else {
                        if (by && by !== true) {
                            bw = bG;
                            bv(by[0], by[1]);
                        }
                    }
                }
                return this;
            },
            remove: function() {
                if (bC) {
                    var bG = arguments, bI = 0, bJ = bG.length;
                    for (; bI < bJ; bI++) {
                        for (var bH = 0; bH < bC.length; bH++) {
                            if (bG[bI] === bC[bH]) {
                                if (bz) {
                                    if (bH <= bA) {
                                        bA--;
                                        if (bH <= bB) {
                                            bB--;
                                        }
                                    }
                                }
                                bC.splice(bH--, 1);
                                if (bx.unique) {
                                    break;
                                }
                            }
                        }
                    }
                }
                return this;
            },
            has: function(bH) {
                if (bC) {
                    var bG = 0, bI = bC.length;
                    for (; bG < bI; bG++) {
                        if (bH === bC[bG]) {
                            return true;
                        }
                    }
                }
                return false;
            },
            empty: function() {
                bC = [];
                return this;
            },
            disable: function() {
                bC = bD = by = L;
                return this;
            },
            disabled: function() {
                return !bC;
            },
            lock: function() {
                bD = L;
                if (!by || by === true) {
                    bE.disable();
                }
                return this;
            },
            locked: function() {
                return !bD;
            },
            fireWith: function(bH, bG) {
                if (bD) {
                    if (bz) {
                        if (!bx.once) {
                            bD.push([bH, bG]);
                        }
                    } else {
                        if (!(bx.once && by)) {
                            bv(bH, bG);
                        }
                    }
                }
                return this;
            },
            fire: function() {
                bE.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!e;
            }
        };
        return bE;
    };
    var aK = [].slice;
    b.extend({
        Deferred: function(by) {
            var bx = b.Callbacks("once memory"), bw = b.Callbacks("once memory"), bv = b.Callbacks("memory"), e = "pending", bA = {
                resolve: bx,
                reject: bw,
                notify: bv
            }, bC = {
                done: bx.add,
                fail: bw.add,
                progress: bv.add,
                state: function() {
                    return e;
                },
                isResolved: bx.fired,
                isRejected: bw.fired,
                then: function(bE, bD, bF) {
                    bB.done(bE).fail(bD).progress(bF);
                    return this;
                },
                always: function() {
                    bB.done.apply(bB, arguments).fail.apply(bB, arguments);
                    return this;
                },
                pipe: function(bF, bE, bD) {
                    return b.Deferred(function(bG) {
                        b.each({
                            done: [bF, "resolve"],
                            fail: [bE, "reject"],
                            progress: [bD, "notify"]
                        }, function(bI, bL) {
                            var bH = bL[0], bK = bL[1], bJ;
                            if (b.isFunction(bH)) {
                                bB[bI](function() {
                                    bJ = bH.apply(this, arguments);
                                    if (bJ && b.isFunction(bJ.promise)) {
                                        bJ.promise().then(bG.resolve, bG.reject, bG.notify);
                                    } else {
                                        bG[bK + "With"](this === bB ? bG : this, [bJ]);
                                    }
                                });
                            } else {
                                bB[bI](bG[bK]);
                            }
                        });
                    }).promise();
                },
                promise: function(bE) {
                    if (bE == null) {
                        bE = bC;
                    } else {
                        for (var bD in bC) {
                            bE[bD] = bC[bD];
                        }
                    }
                    return bE;
                }
            }, bB = bC.promise({}), bz;
            for (bz in bA) {
                bB[bz] = bA[bz].fire;
                bB[bz + "With"] = bA[bz].fireWith;
            }
            bB.done(function() {
                e = "resolved";
            }, bw.disable, bv.lock).fail(function() {
                e = "rejected";
            }, bx.disable, bv.lock);
            if (by) {
                by.call(bB, bB);
            }
            return bB;
        },
        when: function(bA) {
            var bx = aK.call(arguments, 0), bv = 0, e = bx.length, bB = new Array(e), bw = e, by = e, bC = e <= 1 && bA && b.isFunction(bA.promise) ? bA: b.Deferred(), bE = bC.promise();
            function bD(bF) {
                return function(bG) {
                    bx[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
                    if (!(--bw)) {
                        bC.resolveWith(bC, bx);
                    }
                };
            }
            function bz(bF) {
                return function(bG) {
                    bB[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
                    bC.notifyWith(bE, bB);
                };
            }
            if (e > 1) {
                for (; bv < e; bv++) {
                    if (bx[bv] && bx[bv].promise && b.isFunction(bx[bv].promise)) {
                        bx[bv].promise().then(bD(bv), bC.reject, bz(bv));
                    } else {
                        --bw;
                    }
                }
                if (!bw) {
                    bC.resolveWith(bC, bx);
                }
            } else {
                if (bC !== bA) {
                    bC.resolveWith(bC, e ? [bA] : []);
                }
            }
            return bE;
        }
    });
    b.support = (function() {
        var bI, bH, bE, bF, bx, bD, bC, bz, bJ, bA, by, bw, bv = av.createElement("div"), bG = av.documentElement;
        bv.setAttribute("className", "t");
        bv.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        bH = bv.getElementsByTagName("*");
        bE = bv.getElementsByTagName("a")[0];
        if (!bH ||!bH.length ||!bE) {
            return {};
        }
        bF = av.createElement("select");
        bx = bF.appendChild(av.createElement("option"));
        bD = bv.getElementsByTagName("input")[0];
        bI = {
            leadingWhitespace: (bv.firstChild.nodeType === 3),
            tbody: !bv.getElementsByTagName("tbody").length,
            htmlSerialize: !!bv.getElementsByTagName("link").length,
            style: /top/.test(bE.getAttribute("style")),
            hrefNormalized: (bE.getAttribute("href") === "/a"),
            opacity: /^0.55/.test(bE.style.opacity),
            cssFloat: !!bE.style.cssFloat,
            checkOn: (bD.value === "on"),
            optSelected: bx.selected,
            getSetAttribute: bv.className !== "t",
            enctype: !!av.createElement("form").enctype,
            html5Clone: av.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            pixelMargin: true
        };
        b.boxModel = bI.boxModel = (av.compatMode === "CSS1Compat");
        bD.checked = true;
        bI.noCloneChecked = bD.cloneNode(true).checked;
        bF.disabled = true;
        bI.optDisabled=!bx.disabled;
        try {
            delete bv.test;
        } catch (bB) {
            bI.deleteExpando = false;
        }
        if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
            bv.attachEvent("onclick", function() {
                bI.noCloneEvent = false;
            });
            bv.cloneNode(true).fireEvent("onclick");
        }
        bD = av.createElement("input");
        bD.value = "t";
        bD.setAttribute("type", "radio");
        bI.radioValue = bD.value === "t";
        bD.setAttribute("checked", "checked");
        bD.setAttribute("name", "t");
        bv.appendChild(bD);
        bC = av.createDocumentFragment();
        bC.appendChild(bv.lastChild);
        bI.checkClone = bC.cloneNode(true).cloneNode(true).lastChild.checked;
        bI.appendChecked = bD.checked;
        bC.removeChild(bD);
        bC.appendChild(bv);
        if (bv.attachEvent) {
            for (by in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                bA = "on" + by;
                bw = (bA in bv);
                if (!bw) {
                    bv.setAttribute(bA, "return;");
                    bw = (typeof bv[bA] === "function");
                }
                bI[by + "Bubbles"] = bw;
            }
        }
        bC.removeChild(bv);
        bC = bF = bx = bv = bD = null;
        b(function() {
            var bM, bV, bW, bU, bO, bP, bR, bL, bK, bQ, bN, e, bT, bS = av.getElementsByTagName("body")[0];
            if (!bS) {
                return;
            }
            bL = 1;
            bT = "padding:0;margin:0;border:";
            bN = "position:absolute;top:0;left:0;width:1px;height:1px;";
            e = bT + "0;visibility:hidden;";
            bK = "style='" + bN + bT + "5px solid #000;";
            bQ = "<div " + bK + "display:block;'><div style='" + bT + "0;display:block;overflow:hidden;'></div></div><table " + bK + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            bM = av.createElement("div");
            bM.style.cssText = e + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
            bS.insertBefore(bM, bS.firstChild);
            bv = av.createElement("div");
            bM.appendChild(bv);
            bv.innerHTML = "<table><tr><td style='" + bT + "0;display:none'></td><td>t</td></tr></table>";
            bz = bv.getElementsByTagName("td");
            bw = (bz[0].offsetHeight === 0);
            bz[0].style.display = "";
            bz[1].style.display = "none";
            bI.reliableHiddenOffsets = bw && (bz[0].offsetHeight === 0);
            if (bd.getComputedStyle) {
                bv.innerHTML = "";
                bR = av.createElement("div");
                bR.style.width = "0";
                bR.style.marginRight = "0";
                bv.style.width = "2px";
                bv.appendChild(bR);
                bI.reliableMarginRight = (parseInt((bd.getComputedStyle(bR, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0) === 0;
            }
            if (typeof bv.style.zoom !== "undefined") {
                bv.innerHTML = "";
                bv.style.width = bv.style.padding = "1px";
                bv.style.border = 0;
                bv.style.overflow = "hidden";
                bv.style.display = "inline";
                bv.style.zoom = 1;
                bI.inlineBlockNeedsLayout = (bv.offsetWidth === 3);
                bv.style.display = "block";
                bv.style.overflow = "visible";
                bv.innerHTML = "<div style='width:5px;'></div>";
                bI.shrinkWrapBlocks = (bv.offsetWidth !== 3);
            }
            bv.style.cssText = bN + e;
            bv.innerHTML = bQ;
            bV = bv.firstChild;
            bW = bV.firstChild;
            bO = bV.nextSibling.firstChild.firstChild;
            bP = {
                doesNotAddBorder: (bW.offsetTop !== 5),
                doesAddBorderForTableAndCells: (bO.offsetTop === 5)
            };
            bW.style.position = "fixed";
            bW.style.top = "20px";
            bP.fixedPosition = (bW.offsetTop === 20 || bW.offsetTop === 15);
            bW.style.position = bW.style.top = "";
            bV.style.overflow = "hidden";
            bV.style.position = "relative";
            bP.subtractsBorderForOverflowNotVisible = (bW.offsetTop===-5);
            bP.doesNotIncludeMarginInBodyOffset = (bS.offsetTop !== bL);
            if (bd.getComputedStyle) {
                bv.style.marginTop = "1%";
                bI.pixelMargin = (bd.getComputedStyle(bv, null) || {
                    marginTop: 0
                }).marginTop !== "1%";
            }
            if (typeof bM.style.zoom !== "undefined") {
                bM.style.zoom = 1;
            }
            bS.removeChild(bM);
            bR = bv = bM = null;
            b.extend(bI, bP);
        });
        return bI;
    })();
    var aT = /^(?:\{.*\}|\[.*\])$/, aA = /([A-Z])/g;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
            return !!e&&!S(e);
        },
        data: function(bx, bv, bz, by) {
            if (!b.acceptData(bx)) {
                return;
            }
            var bG, bA, bD, bE = b.expando, bC = typeof bv === "string", bF = bx.nodeType, e = bF ? b.cache: bx, bw = bF ? bx[bE]: bx[bE] && bE, bB = bv === "events";
            if ((!bw ||!e[bw] || (!bB&&!by&&!e[bw].data)) && bC && bz === L) {
                return;
            }
            if (!bw) {
                if (bF) {
                    bx[bE] = bw=++b.uuid;
                } else {
                    bw = bE;
                }
            }
            if (!e[bw]) {
                e[bw] = {};
                if (!bF) {
                    e[bw].toJSON = b.noop;
                }
            }
            if (typeof bv === "object" || typeof bv === "function") {
                if (by) {
                    e[bw] = b.extend(e[bw], bv);
                } else {
                    e[bw].data = b.extend(e[bw].data, bv);
                }
            }
            bG = bA = e[bw];
            if (!by) {
                if (!bA.data) {
                    bA.data = {};
                }
                bA = bA.data;
            }
            if (bz !== L) {
                bA[b.camelCase(bv)] = bz;
            }
            if (bB&&!bA[bv]) {
                return bG.events;
            }
            if (bC) {
                bD = bA[bv];
                if (bD == null) {
                    bD = bA[b.camelCase(bv)];
                }
            } else {
                bD = bA;
            }
            return bD;
        },
        removeData: function(bx, bv, by) {
            if (!b.acceptData(bx)) {
                return;
            }
            var bB, bA, bz, bC = b.expando, bD = bx.nodeType, e = bD ? b.cache: bx, bw = bD ? bx[bC]: bC;
            if (!e[bw]) {
                return;
            }
            if (bv) {
                bB = by ? e[bw] : e[bw].data;
                if (bB) {
                    if (!b.isArray(bv)) {
                        if (bv in bB) {
                            bv = [bv];
                        } else {
                            bv = b.camelCase(bv);
                            if (bv in bB) {
                                bv = [bv];
                            } else {
                                bv = bv.split(" ");
                            }
                        }
                    }
                    for (bA = 0, bz = bv.length; bA < bz; bA++) {
                        delete bB[bv[bA]];
                    }
                    if (!(by ? S : b.isEmptyObject)(bB)) {
                        return;
                    }
                }
            }
            if (!by) {
                delete e[bw].data;
                if (!S(e[bw])) {
                    return;
                }
            }
            if (b.support.deleteExpando ||!e.setInterval) {
                delete e[bw];
            } else {
                e[bw] = null;
            }
            if (bD) {
                if (b.support.deleteExpando) {
                    delete bx[bC];
                } else {
                    if (bx.removeAttribute) {
                        bx.removeAttribute(bC);
                    } else {
                        bx[bC] = null;
                    }
                }
            }
        },
        _data: function(bv, e, bw) {
            return b.data(bv, e, bw, true);
        },
        acceptData: function(bv) {
            if (bv.nodeName) {
                var e = b.noData[bv.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || bv.getAttribute("classid") !== e);
                }
            }
            return true;
        }
    });
    b.fn.extend({
        data: function(bD, bC) {
            var by, bv, bB, e, bx, bw = this[0], bA = 0, bz = null;
            if (bD === L) {
                if (this.length) {
                    bz = b.data(bw);
                    if (bw.nodeType === 1&&!b._data(bw, "parsedAttrs")) {
                        bB = bw.attributes;
                        for (bx = bB.length; bA < bx; bA++) {
                            e = bB[bA].name;
                            if (e.indexOf("data-") === 0) {
                                e = b.camelCase(e.substring(5));
                                a6(bw, e, bz[e]);
                            }
                        }
                        b._data(bw, "parsedAttrs", true);
                    }
                }
                return bz;
            }
            if (typeof bD === "object") {
                return this.each(function() {
                    b.data(this, bD);
                });
            }
            by = bD.split(".", 2);
            by[1] = by[1] ? "." + by[1] : "";
            bv = by[1] + "!";
            return b.access(this, function(bE) {
                if (bE === L) {
                    bz = this.triggerHandler("getData" + bv, [by[0]]);
                    if (bz === L && bw) {
                        bz = b.data(bw, bD);
                        bz = a6(bw, bD, bz);
                    }
                    return bz === L && by[1] ? this.data(by[0]) : bz;
                }
                by[1] = bE;
                this.each(function() {
                    var bF = b(this);
                    bF.triggerHandler("setData" + bv, by);
                    b.data(this, bD, bE);
                    bF.triggerHandler("changeData" + bv, by);
                });
            }, null, bC, arguments.length > 1, null, false);
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }
    });
    function a6(bx, bw, by) {
        if (by === L && bx.nodeType === 1) {
            var bv = "data-" + bw.replace(aA, "-$1").toLowerCase();
            by = bx.getAttribute(bv);
            if (typeof by === "string") {
                try {
                    by = by === "true" ? true : by === "false" ? false : by === "null" ? null : b.isNumeric(by)?+by : aT.test(by) ? b.parseJSON(by) : by;
                } catch (bz) {}
                b.data(bx, bw, by);
            } else {
                by = L;
            }
        }
        return by;
    }
    function S(bv) {
        for (var e in bv) {
            if (e === "data" && b.isEmptyObject(bv[e])) {
                continue;
            }
            if (e !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    function bj(by, bx, bA) {
        var bw = bx + "defer", bv = bx + "queue", e = bx + "mark", bz = b._data(by, bw);
        if (bz && (bA === "queue" ||!b._data(by, bv)) && (bA === "mark" ||!b._data(by, e))) {
            setTimeout(function() {
                if (!b._data(by, bv)&&!b._data(by, e)) {
                    b.removeData(by, bw, true);
                    bz.fire();
                }
            }, 0);
        }
    }
    b.extend({
        _mark: function(bv, e) {
            if (bv) {
                e = (e || "fx") + "mark";
                b._data(bv, e, (b._data(bv, e) || 0) + 1);
            }
        },
        _unmark: function(by, bx, bv) {
            if (by !== true) {
                bv = bx;
                bx = by;
                by = false;
            }
            if (bx) {
                bv = bv || "fx";
                var e = bv + "mark", bw = by ? 0: ((b._data(bx, e) || 1) - 1);
                if (bw) {
                    b._data(bx, e, bw);
                } else {
                    b.removeData(bx, e, true);
                    bj(bx, bv, "mark");
                }
            }
        },
        queue: function(bv, e, bx) {
            var bw;
            if (bv) {
                e = (e || "fx") + "queue";
                bw = b._data(bv, e);
                if (bx) {
                    if (!bw || b.isArray(bx)) {
                        bw = b._data(bv, e, b.makeArray(bx));
                    } else {
                        bw.push(bx);
                    }
                }
                return bw || [];
            }
        },
        dequeue: function(by, bx) {
            bx = bx || "fx";
            var bv = b.queue(by, bx), bw = bv.shift(), e = {};
            if (bw === "inprogress") {
                bw = bv.shift();
            }
            if (bw) {
                if (bx === "fx") {
                    bv.unshift("inprogress");
                }
                b._data(by, bx + ".run", e);
                bw.call(by, function() {
                    b.dequeue(by, bx);
                }, e);
            }
            if (!bv.length) {
                b.removeData(by, bx + "queue " + bx + ".run", true);
                bj(by, bx, "queue");
            }
        }
    });
    b.fn.extend({
        queue: function(e, bv) {
            var bw = 2;
            if (typeof e !== "string") {
                bv = e;
                e = "fx";
                bw--;
            }
            if (arguments.length < bw) {
                return b.queue(this[0], e);
            }
            return bv === L ? this : this.each(function() {
                var bx = b.queue(this, e, bv);
                if (e === "fx" && bx[0] !== "inprogress") {
                    b.dequeue(this, e);
                }
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },
        delay: function(bv, e) {
            bv = b.fx ? b.fx.speeds[bv] || bv : bv;
            e = e || "fx";
            return this.queue(e, function(bx, bw) {
                var by = setTimeout(bx, bv);
                bw.stop = function() {
                    clearTimeout(by);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(bD, bw) {
            if (typeof bD !== "string") {
                bw = bD;
                bD = L;
            }
            bD = bD || "fx";
            var e = b.Deferred(), bv = this, by = bv.length, bB = 1, bz = bD + "defer", bA = bD + "queue", bC = bD + "mark", bx;
            function bE() {
                if (!(--bB)) {
                    e.resolveWith(bv, [bv]);
                }
            }
            while (by--) {
                if ((bx = b.data(bv[by], bz, L, true) || (b.data(bv[by], bA, L, true) || b.data(bv[by], bC, L, true)) && b.data(bv[by], bz, b.Callbacks("once memory"), true))) {
                    bB++;
                    bx.add(bE);
                }
            }
            bE();
            return e.promise(bw);
        }
    });
    var aQ = /[\n\t\r]/g, ag = /\s+/, aV = /\r/g, g = /^(?:button|input)$/i, C = /^(?:button|input|object|select|textarea)$/i, l = /^a(?:rea)?$/i, ao = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, E = b.support.getSetAttribute, bf, aZ, aG;
    b.fn.extend({
        attr: function(e, bv) {
            return b.access(this, b.attr, e, bv, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },
        prop: function(e, bv) {
            return b.access(this, b.prop, e, bv, arguments.length > 1);
        },
        removeProp: function(e) {
            e = b.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = L;
                    delete this[e];
                } catch (bv) {}
            });
        },
        addClass: function(by) {
            var bA, bw, bv, bx, bz, bB, e;
            if (b.isFunction(by)) {
                return this.each(function(bC) {
                    b(this).addClass(by.call(this, bC, this.className));
                });
            }
            if (by && typeof by === "string") {
                bA = by.split(ag);
                for (bw = 0, bv = this.length; bw < bv; bw++) {
                    bx = this[bw];
                    if (bx.nodeType === 1) {
                        if (!bx.className && bA.length === 1) {
                            bx.className = by;
                        } else {
                            bz = " " + bx.className + " ";
                            for (bB = 0, e = bA.length; bB < e; bB++) {
                                if (!~bz.indexOf(" " + bA[bB] + " ")) {
                                    bz += bA[bB] + " ";
                                }
                            }
                            bx.className = b.trim(bz);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(bz) {
            var bA, bw, bv, by, bx, bB, e;
            if (b.isFunction(bz)) {
                return this.each(function(bC) {
                    b(this).removeClass(bz.call(this, bC, this.className));
                });
            }
            if ((bz && typeof bz === "string") || bz === L) {
                bA = (bz || "").split(ag);
                for (bw = 0, bv = this.length; bw < bv; bw++) {
                    by = this[bw];
                    if (by.nodeType === 1 && by.className) {
                        if (bz) {
                            bx = (" " + by.className + " ").replace(aQ, " ");
                            for (bB = 0, e = bA.length; bB < e; bB++) {
                                bx = bx.replace(" " + bA[bB] + " ", " ");
                            }
                            by.className = b.trim(bx);
                        } else {
                            by.className = "";
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(bx, bv) {
            var bw = typeof bx, e = typeof bv === "boolean";
            if (b.isFunction(bx)) {
                return this.each(function(by) {
                    b(this).toggleClass(bx.call(this, by, this.className, bv), bv);
                });
            }
            return this.each(function() {
                if (bw === "string") {
                    var bA, bz = 0, by = b(this), bB = bv, bC = bx.split(ag);
                    while ((bA = bC[bz++])) {
                        bB = e ? bB : !by.hasClass(bA);
                        by[bB ? "addClass": "removeClass"](bA);
                    }
                } else {
                    if (bw === "undefined" || bw === "boolean") {
                        if (this.className) {
                            b._data(this, "__className__", this.className);
                        }
                        this.className = this.className || bx === false ? "" : b._data(this, "__className__") || "";
                    }
                }
            });
        },
        hasClass: function(e) {
            var bx = " " + e + " ", bw = 0, bv = this.length;
            for (; bw < bv; bw++) {
                if (this[bw].nodeType === 1 && (" " + this[bw].className + " ").replace(aQ, " ").indexOf(bx)>-1) {
                    return true;
                }
            }
            return false;
        },
        val: function(bx) {
            var e, bv, by, bw = this[0];
            if (!arguments.length) {
                if (bw) {
                    e = b.valHooks[bw.type] || b.valHooks[bw.nodeName.toLowerCase()];
                    if (e && "get" in e && (bv = e.get(bw, "value")) !== L) {
                        return bv;
                    }
                    bv = bw.value;
                    return typeof bv === "string" ? bv.replace(aV, "") : bv == null ? "" : bv;
                }
                return;
            }
            by = b.isFunction(bx);
            return this.each(function(bA) {
                var bz = b(this), bB;
                if (this.nodeType !== 1) {
                    return;
                }
                if (by) {
                    bB = bx.call(this, bA, bz.val());
                } else {
                    bB = bx;
                }
                if (bB == null) {
                    bB = "";
                } else {
                    if (typeof bB === "number") {
                        bB += "";
                    } else {
                        if (b.isArray(bB)) {
                            bB = b.map(bB, function(bC) {
                                return bC == null ? "" : bC + "";
                            });
                        }
                    }
                }
                e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
                if (!e ||!("set" in e) || e.set(this, bB, "value") === L) {
                    this.value = bB;
                }
            });
        }
    });
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var bv = e.attributes.value;
                    return !bv || bv.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var bA, bv, bz, bx, by = e.selectedIndex, bB = [], bC = e.options, bw = e.type === "select-one";
                    if (by < 0) {
                        return null;
                    }
                    bv = bw ? by : 0;
                    bz = bw ? by + 1 : bC.length;
                    for (; bv < bz; bv++) {
                        bx = bC[bv];
                        if (bx.selected && (b.support.optDisabled?!bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled ||!b.nodeName(bx.parentNode, "optgroup"))
                            ) {
                            bA = b(bx).val();
                            if (bw) {
                                return bA;
                            }
                            bB.push(bA);
                        }
                    }
                    if (bw&&!bB.length && bC.length) {
                        return b(bC[by]).val();
                    }
                    return bB;
                },
                set: function(bv, bw) {
                    var e = b.makeArray(bw);
                    b(bv).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), e) >= 0;
                    });
                    if (!e.length) {
                        bv.selectedIndex =- 1;
                    }
                    return e;
                }
            }
        },
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(bA, bx, bB, bz) {
            var bw, e, by, bv = bA.nodeType;
            if (!bA || bv === 3 || bv === 8 || bv === 2) {
                return;
            }
            if (bz && bx in b.attrFn) {
                return b(bA)[bx](bB);
            }
            if (typeof bA.getAttribute === "undefined") {
                return b.prop(bA, bx, bB);
            }
            by = bv !== 1 ||!b.isXMLDoc(bA);
            if (by) {
                bx = bx.toLowerCase();
                e = b.attrHooks[bx] || (ao.test(bx) ? aZ : bf);
            }
            if (bB !== L) {
                if (bB === null) {
                    b.removeAttr(bA, bx);
                    return;
                } else {
                    if (e && "set" in e && by && (bw = e.set(bA, bB, bx)) !== L) {
                        return bw;
                    } else {
                        bA.setAttribute(bx, "" + bB);
                        return bB;
                    }
                }
            } else {
                if (e && "get" in e && by && (bw = e.get(bA, bx)) !== null) {
                    return bw;
                } else {
                    bw = bA.getAttribute(bx);
                    return bw === null ? L : bw;
                }
            }
        },
        removeAttr: function(by, bA) {
            var bz, bB, bw, e, bv, bx = 0;
            if (bA && by.nodeType === 1) {
                bB = bA.toLowerCase().split(ag);
                e = bB.length;
                for (; bx < e; bx++) {
                    bw = bB[bx];
                    if (bw) {
                        bz = b.propFix[bw] || bw;
                        bv = ao.test(bw);
                        if (!bv) {
                            b.attr(by, bw, "");
                        }
                        by.removeAttribute(E ? bw : bz);
                        if (bv && bz in by) {
                            by[bz] = false;
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, bv) {
                    if (g.test(e.nodeName) && e.parentNode) {
                        b.error("type property can't be changed");
                    } else {
                        if (!b.support.radioValue && bv === "radio" && b.nodeName(e, "input")) {
                            var bw = e.value;
                            e.setAttribute("type", bv);
                            if (bw) {
                                e.value = bw;
                            }
                            return bv;
                        }
                    }
                }
            },
            value: {
                get: function(bv, e) {
                    if (bf && b.nodeName(bv, "button")) {
                        return bf.get(bv, e);
                    }
                    return e in bv ? bv.value : null;
                },
                set: function(bv, bw, e) {
                    if (bf && b.nodeName(bv, "button")) {
                        return bf.set(bv, bw, e);
                    }
                    bv.value = bw;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(bz, bx, bA) {
            var bw, e, by, bv = bz.nodeType;
            if (!bz || bv === 3 || bv === 8 || bv === 2) {
                return;
            }
            by = bv !== 1 ||!b.isXMLDoc(bz);
            if (by) {
                bx = b.propFix[bx] || bx;
                e = b.propHooks[bx];
            }
            if (bA !== L) {
                if (e && "set" in e && (bw = e.set(bz, bA, bx)) !== L) {
                    return bw;
                } else {
                    return (bz[bx] = bA);
                }
            } else {
                if (e && "get" in e && (bw = e.get(bz, bx)) !== null) {
                    return bw;
                } else {
                    return bz[bx];
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(bv) {
                    var e = bv.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : C.test(bv.nodeName) || l.test(bv.nodeName) && bv.href ? 0 : L;
                }
            }
        }
    });
    b.attrHooks.tabindex = b.propHooks.tabIndex;
    aZ = {
        get: function(bv, e) {
            var bx, bw = b.prop(bv, e);
            return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(e)) && bx.nodeValue !== false ? e.toLowerCase() : L;
        },
        set: function(bv, bx, e) {
            var bw;
            if (bx === false) {
                b.removeAttr(bv, e);
            } else {
                bw = b.propFix[e] || e;
                if (bw in bv) {
                    bv[bw] = true;
                }
                bv.setAttribute(e, e.toLowerCase());
            }
            return e;
        }
    };
    if (!E) {
        aG = {
            name: true,
            id: true,
            coords: true
        };
        bf = b.valHooks.button = {
            get: function(bw, bv) {
                var e;
                e = bw.getAttributeNode(bv);
                return e && (aG[bv] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : L;
            },
            set: function(bw, bx, bv) {
                var e = bw.getAttributeNode(bv);
                if (!e) {
                    e = av.createAttribute(bv);
                    bw.setAttributeNode(e);
                }
                return (e.nodeValue = bx + "");
            }
        };
        b.attrHooks.tabindex.set = bf.set;
        b.each(["width", "height"], function(bv, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                set: function(bw, bx) {
                    if (bx === "") {
                        bw.setAttribute(e, "auto");
                        return bx;
                    }
                }
            });
        });
        b.attrHooks.contenteditable = {
            get: bf.get,
            set: function(bv, bw, e) {
                if (bw === "") {
                    bw = "false";
                }
                bf.set(bv, bw, e);
            }
        };
    }
    if (!b.support.hrefNormalized) {
        b.each(["href", "src", "width", "height"], function(bv, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                get: function(bx) {
                    var bw = bx.getAttribute(e, 2);
                    return bw === null ? L : bw;
                }
            });
        });
    }
    if (!b.support.style) {
        b.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || L;
            },
            set: function(e, bv) {
                return (e.style.cssText = "" + bv);
            }
        };
    }
    if (!b.support.optSelected) {
        b.propHooks.selected = b.extend(b.propHooks.selected, {
            get: function(bv) {
                var e = bv.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }
    if (!b.support.enctype) {
        b.propFix.enctype = "encoding";
    }
    if (!b.support.checkOn) {
        b.each(["radio", "checkbox"], function() {
            b.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                }
            };
        });
    }
    b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, bv) {
                if (b.isArray(bv)) {
                    return (e.checked = b.inArray(b(e).val(), bv) >= 0);
                }
            }
        });
    });
    var be = /^(?:textarea|input|select)$/i, n = /^([^\.]*)?(?:\.(.+))?$/, J = /(?:^|\s)hover(\.\S+)?\b/, aP = /^key/, bg = /^(?:mouse|contextmenu)|click/, T = /^(?:focusinfocus|focusoutblur)$/, U = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, Y = function(e) {
        var bv = U.exec(e);
        if (bv) {
            bv[1] = (bv[1] || "").toLowerCase();
            bv[3] = bv[3] && new RegExp("(?:^|\\s)" + bv[3] + "(?:\\s|$)");
        }
        return bv;
    }, j = function(bw, e) {
        var bv = bw.attributes || {};
        return ((!e[1] || bw.nodeName.toLowerCase() === e[1]) && (!e[2] || (bv.id || {}).value === e[2]) && (!e[3] || e[3].test((bv["class"] || {}).value)));
    }, bt = function(e) {
        return b.event.special.hover ? e : e.replace(J, "mouseenter$1 mouseleave$1");
    };
    b.event = {
        add: function(bx, bC, bJ, bA, by) {
            var bD, bB, bK, bI, bH, bF, e, bG, bv, bz, bw, bE;
            if (bx.nodeType === 3 || bx.nodeType === 8 ||!bC ||!bJ ||!(bD = b._data(bx))) {
                return;
            }
            if (bJ.handler) {
                bv = bJ;
                bJ = bv.handler;
                by = bv.selector;
            }
            if (!bJ.guid) {
                bJ.guid = b.guid++;
            }
            bK = bD.events;
            if (!bK) {
                bD.events = bK = {};
            }
            bB = bD.handle;
            if (!bB) {
                bD.handle = bB = function(bL) {
                    return typeof b !== "undefined" && (!bL || b.event.triggered !== bL.type) ? b.event.dispatch.apply(bB.elem, arguments) : L;
                };
                bB.elem = bx;
            }
            bC = b.trim(bt(bC)).split(" ");
            for (bI = 0; bI < bC.length; bI++) {
                bH = n.exec(bC[bI]) || [];
                bF = bH[1];
                e = (bH[2] || "").split(".").sort();
                bE = b.event.special[bF] || {};
                bF = (by ? bE.delegateType : bE.bindType) || bF;
                bE = b.event.special[bF] || {};
                bG = b.extend({
                    type: bF,
                    origType: bH[1],
                    data: bA,
                    handler: bJ,
                    guid: bJ.guid,
                    selector: by,
                    quick: by && Y(by),
                    namespace: e.join(".")
                }, bv);
                bw = bK[bF];
                if (!bw) {
                    bw = bK[bF] = [];
                    bw.delegateCount = 0;
                    if (!bE.setup || bE.setup.call(bx, bA, e, bB) === false) {
                        if (bx.addEventListener) {
                            bx.addEventListener(bF, bB, false);
                        } else {
                            if (bx.attachEvent) {
                                bx.attachEvent("on" + bF, bB);
                            }
                        }
                    }
                }
                if (bE.add) {
                    bE.add.call(bx, bG);
                    if (!bG.handler.guid) {
                        bG.handler.guid = bJ.guid;
                    }
                }
                if (by) {
                    bw.splice(bw.delegateCount++, 0, bG);
                } else {
                    bw.push(bG);
                }
                b.event.global[bF] = true;
            }
            bx = null;
        },
        global: {},
        remove: function(bJ, bE, bv, bH, bB) {
            var bI = b.hasData(bJ) && b._data(bJ), bF, bx, bz, bL, bC, bA, bG, bw, by, bK, bD, e;
            if (!bI ||!(bw = bI.events)) {
                return;
            }
            bE = b.trim(bt(bE || "")).split(" ");
            for (bF = 0; bF < bE.length; bF++) {
                bx = n.exec(bE[bF]) || [];
                bz = bL = bx[1];
                bC = bx[2];
                if (!bz) {
                    for (bz in bw) {
                        b.event.remove(bJ, bz + bE[bF], bv, bH, true);
                    }
                    continue;
                }
                by = b.event.special[bz] || {};
                bz = (bH ? by.delegateType : by.bindType) || bz;
                bD = bw[bz] || [];
                bA = bD.length;
                bC = bC ? new RegExp("(^|\\.)" + bC.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (bG = 0; bG < bD.length; bG++) {
                    e = bD[bG];
                    if ((bB || bL === e.origType) && (!bv || bv.guid === e.guid) && (!bC || bC.test(e.namespace)) && (!bH || bH === e.selector || bH === "**" && e.selector)) {
                        bD.splice(bG--, 1);
                        if (e.selector) {
                            bD.delegateCount--;
                        }
                        if (by.remove) {
                            by.remove.call(bJ, e);
                        }
                    }
                }
                if (bD.length === 0 && bA !== bD.length) {
                    if (!by.teardown || by.teardown.call(bJ, bC) === false) {
                        b.removeEvent(bJ, bz, bI.handle);
                    }
                    delete bw[bz];
                }
            }
            if (b.isEmptyObject(bw)) {
                bK = bI.handle;
                if (bK) {
                    bK.elem = null;
                }
                b.removeData(bJ, ["events", "handle"], true);
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(bv, bD, bA, bJ) {
            if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
                return;
            }
            var bG = bv.type || bv, bx = [], e, bw, bC, bH, bz, by, bF, bE, bB, bI;
            if (T.test(bG + b.event.triggered)) {
                return;
            }
            if (bG.indexOf("!") >= 0) {
                bG = bG.slice(0, - 1);
                bw = true;
            }
            if (bG.indexOf(".") >= 0) {
                bx = bG.split(".");
                bG = bx.shift();
                bx.sort();
            }
            if ((!bA || b.event.customEvent[bG])&&!b.event.global[bG]) {
                return;
            }
            bv = typeof bv === "object" ? bv[b.expando] ? bv : new b.Event(bG, bv) : new b.Event(bG);
            bv.type = bG;
            bv.isTrigger = true;
            bv.exclusive = bw;
            bv.namespace = bx.join(".");
            bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            by = bG.indexOf(":") < 0 ? "on" + bG : "";
            if (!bA) {
                e = b.cache;
                for (bC in e) {
                    if (e[bC].events && e[bC].events[bG]) {
                        b.event.trigger(bv, bD, e[bC].handle.elem, true);
                    }
                }
                return;
            }
            bv.result = L;
            if (!bv.target) {
                bv.target = bA;
            }
            bD = bD != null ? b.makeArray(bD) : [];
            bD.unshift(bv);
            bF = b.event.special[bG] || {};
            if (bF.trigger && bF.trigger.apply(bA, bD) === false) {
                return;
            }
            bB = [[bA, bF.bindType || bG]];
            if (!bJ&&!bF.noBubble&&!b.isWindow(bA)) {
                bI = bF.delegateType || bG;
                bH = T.test(bI + bG) ? bA : bA.parentNode;
                bz = null;
                for (; bH; bH = bH.parentNode) {
                    bB.push([bH, bI]);
                    bz = bH;
                }
                if (bz && bz === bA.ownerDocument) {
                    bB.push([bz.defaultView || bz.parentWindow || bd, bI]);
                }
            }
            for (bC = 0; bC < bB.length&&!bv.isPropagationStopped(); bC++) {
                bH = bB[bC][0];
                bv.type = bB[bC][1];
                bE = (b._data(bH, "events") || {})[bv.type] && b._data(bH, "handle");
                if (bE) {
                    bE.apply(bH, bD);
                }
                bE = by && bH[by];
                if (bE && b.acceptData(bH) && bE.apply(bH, bD) === false) {
                    bv.preventDefault();
                }
            }
            bv.type = bG;
            if (!bJ&&!bv.isDefaultPrevented()) {
                if ((!bF._default || bF._default.apply(bA.ownerDocument, bD) === false)&&!(bG === "click" && b.nodeName(bA, "a")) && b.acceptData(bA)) {
                    if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0)&&!b.isWindow(bA)) {
                        bz = bA[by];
                        if (bz) {
                            bA[by] = null;
                        }
                        b.event.triggered = bG;
                        bA[bG]();
                        b.event.triggered = L;
                        if (bz) {
                            bA[by] = bz;
                        }
                    }
                }
            }
            return bv.result;
        },
        dispatch: function(bH) {
            bH = b.event.fix(bH || bd.event);
            var bD = ((b._data(this, "events") || {})[bH.type] || []), bC = bD.delegateCount, bx = [].slice.call(arguments, 0), bE=!bH.exclusive&&!bH.namespace, bz = b.event.special[bH.type] || {}, bv = [], bJ, bG, by, bA, bK, bI, bB, bw, e, bF, bL;
            bx[0] = bH;
            bH.delegateTarget = this;
            if (bz.preDispatch && bz.preDispatch.call(this, bH) === false) {
                return;
            }
            if (bC&&!(bH.button && bH.type === "click")) {
                bA = b(this);
                bA.context = this.ownerDocument || this;
                for (by = bH.target; by != this; by = by.parentNode || this) {
                    if (by.disabled !== true) {
                        bI = {};
                        bw = [];
                        bA[0] = by;
                        for (bJ = 0; bJ < bC; bJ++) {
                            e = bD[bJ];
                            bF = e.selector;
                            if (bI[bF] === L) {
                                bI[bF] = (e.quick ? j(by, e.quick) : bA.is(bF));
                            }
                            if (bI[bF]) {
                                bw.push(e);
                            }
                        }
                        if (bw.length) {
                            bv.push({
                                elem: by,
                                matches: bw
                            });
                        }
                    }
                }
            }
            if (bD.length > bC) {
                bv.push({
                    elem: this,
                    matches: bD.slice(bC)
                });
            }
            for (bJ = 0; bJ < bv.length&&!bH.isPropagationStopped(); bJ++) {
                bB = bv[bJ];
                bH.currentTarget = bB.elem;
                for (bG = 0; bG < bB.matches.length&&!bH.isImmediatePropagationStopped(); bG++) {
                    e = bB.matches[bG];
                    if (bE || (!bH.namespace&&!e.namespace) || bH.namespace_re && bH.namespace_re.test(e.namespace)) {
                        bH.data = e.data;
                        bH.handleObj = e;
                        bK = ((b.event.special[e.origType] || {}).handle || e.handler).apply(bB.elem, bx);
                        if (bK !== L) {
                            bH.result = bK;
                            if (bK === false) {
                                bH.preventDefault();
                                bH.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (bz.postDispatch) {
                bz.postDispatch.call(this, bH);
            }
            return bH.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(bv, e) {
                if (bv.which == null) {
                    bv.which = e.charCode != null ? e.charCode : e.keyCode;
                }
                return bv;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(bx, bw) {
                var by, bz, e, bv = bw.button, bA = bw.fromElement;
                if (bx.pageX == null && bw.clientX != null) {
                    by = bx.target.ownerDocument || av;
                    bz = by.documentElement;
                    e = by.body;
                    bx.pageX = bw.clientX + (bz && bz.scrollLeft || e && e.scrollLeft || 0) - (bz && bz.clientLeft || e && e.clientLeft || 0);
                    bx.pageY = bw.clientY + (bz && bz.scrollTop || e && e.scrollTop || 0) - (bz && bz.clientTop || e && e.clientTop || 0);
                }
                if (!bx.relatedTarget && bA) {
                    bx.relatedTarget = bA === bx.target ? bw.toElement : bA;
                }
                if (!bx.which && bv !== L) {
                    bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)));
                }
                return bx;
            }
        },
        fix: function(bw) {
            if (bw[b.expando]) {
                return bw;
            }
            var bv, bz, e = bw, bx = b.event.fixHooks[bw.type] || {}, by = bx.props ? this.props.concat(bx.props): this.props;
            bw = b.Event(e);
            for (bv = by.length; bv;) {
                bz = by[--bv];
                bw[bz] = e[bz];
            }
            if (!bw.target) {
                bw.target = e.srcElement || av;
            }
            if (bw.target.nodeType === 3) {
                bw.target = bw.target.parentNode;
            }
            if (bw.metaKey === L) {
                bw.metaKey = bw.ctrlKey;
            }
            return bx.filter ? bx.filter(bw, e) : bw;
        },
        special: {
            ready: {
                setup: b.bindReady
            },
            load: {
                noBubble: true
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(bw, bv, e) {
                    if (b.isWindow(this)) {
                        this.onbeforeunload = e;
                    }
                },
                teardown: function(bv, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null;
                    }
                }
            }
        },
        simulate: function(bw, by, bx, bv) {
            var bz = b.extend(new b.Event(), bx, {
                type: bw,
                isSimulated: true,
                originalEvent: {}
            });
            if (bv) {
                b.event.trigger(bz, null, by);
            } else {
                b.event.dispatch.call(by, bz);
            }
            if (bz.isDefaultPrevented()) {
                bx.preventDefault();
            }
        }
    };
    b.event.handle = b.event.dispatch;
    b.removeEvent = av.removeEventListener ? function(bv, e, bw) {
        if (bv.removeEventListener) {
            bv.removeEventListener(e, bw, false);
        }
    } : function(bv, e, bw) {
        if (bv.detachEvent) {
            bv.detachEvent("on" + e, bw);
        }
    };
    b.Event = function(bv, e) {
        if (!(this instanceof b.Event)) {
            return new b.Event(bv, e);
        }
        if (bv && bv.type) {
            this.originalEvent = bv;
            this.type = bv.type;
            this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? i : bl;
        } else {
            this.type = bv;
        }
        if (e) {
            b.extend(this, e);
        }
        this.timeStamp = bv && bv.timeStamp || b.now();
        this[b.expando] = true;
    };
    function bl() {
        return false;
    }
    function i() {
        return true;
    }
    b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = i;
            var bv = this.originalEvent;
            if (!bv) {
                return;
            }
            if (bv.preventDefault) {
                bv.preventDefault();
            } else {
                bv.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = i;
            var bv = this.originalEvent;
            if (!bv) {
                return;
            }
            if (bv.stopPropagation) {
                bv.stopPropagation();
            }
            bv.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i;
            this.stopPropagation();
        },
        isDefaultPrevented: bl,
        isPropagationStopped: bl,
        isImmediatePropagationStopped: bl
    };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(bv, e) {
        b.event.special[bv] = {
            delegateType: e,
            bindType: e,
            handle: function(bz) {
                var bB = this, bA = bz.relatedTarget, by = bz.handleObj, bw = by.selector, bx;
                if (!bA || (bA !== bB&&!b.contains(bB, bA))) {
                    bz.type = by.origType;
                    bx = by.handler.apply(this, arguments);
                    bz.type = e;
                }
                return bx;
            }
        };
    });
    if (!b.support.submitBubbles) {
        b.event.special.submit = {
            setup: function() {
                if (b.nodeName(this, "form")) {
                    return false;
                }
                b.event.add(this, "click._submit keypress._submit", function(bx) {
                    var bw = bx.target, bv = b.nodeName(bw, "input") || b.nodeName(bw, "button") ? bw.form: L;
                    if (bv&&!bv._submit_attached) {
                        b.event.add(bv, "submit._submit", function(e) {
                            e._submit_bubble = true;
                        });
                        bv._submit_attached = true;
                    }
                });
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode&&!e.isTrigger) {
                        b.event.simulate("submit", this.parentNode, e, true);
                    }
                }
            },
            teardown: function() {
                if (b.nodeName(this, "form")) {
                    return false;
                }
                b.event.remove(this, "._submit");
            }
        };
    }
    if (!b.support.changeBubbles) {
        b.event.special.change = {
            setup: function() {
                if (be.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        b.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        b.event.add(this, "click._change", function(e) {
                            if (this._just_changed&&!e.isTrigger) {
                                this._just_changed = false;
                                b.event.simulate("change", this, e, true);
                            }
                        });
                    }
                    return false;
                }
                b.event.add(this, "beforeactivate._change", function(bw) {
                    var bv = bw.target;
                    if (be.test(bv.nodeName)&&!bv._change_attached) {
                        b.event.add(bv, "change._change", function(e) {
                            if (this.parentNode&&!e.isSimulated&&!e.isTrigger) {
                                b.event.simulate("change", this.parentNode, e, true);
                            }
                        });
                        bv._change_attached = true;
                    }
                });
            },
            handle: function(bv) {
                var e = bv.target;
                if (this !== e || bv.isSimulated || bv.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return bv.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                b.event.remove(this, "._change");
                return be.test(this.nodeName);
            }
        };
    }
    if (!b.support.focusinBubbles) {
        b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(bx, e) {
            var bv = 0, bw = function(by) {
                b.event.simulate(e, by.target, b.event.fix(by), true);
            };
            b.event.special[e] = {
                setup: function() {
                    if (bv++===0) {
                        av.addEventListener(bx, bw, true);
                    }
                },
                teardown: function() {
                    if (--bv === 0) {
                        av.removeEventListener(bx, bw, true);
                    }
                }
            };
        });
    }
    b.fn.extend({
        on: function(bw, e, bz, by, bv) {
            var bA, bx;
            if (typeof bw === "object") {
                if (typeof e !== "string") {
                    bz = bz || e;
                    e = L;
                }
                for (bx in bw) {
                    this.on(bx, e, bz, bw[bx], bv);
                }
                return this;
            }
            if (bz == null && by == null) {
                by = e;
                bz = e = L;
            } else {
                if (by == null) {
                    if (typeof e === "string") {
                        by = bz;
                        bz = L;
                    } else {
                        by = bz;
                        bz = e;
                        e = L;
                    }
                }
            }
            if (by === false) {
                by = bl;
            } else {
                if (!by) {
                    return this;
                }
            }
            if (bv === 1) {
                bA = by;
                by = function(bB) {
                    b().off(bB);
                    return bA.apply(this, arguments);
                };
                by.guid = bA.guid || (bA.guid = b.guid++);
            }
            return this.each(function() {
                b.event.add(this, bw, by, bz, e);
            });
        },
        one: function(bv, e, bx, bw) {
            return this.on(bv, e, bx, bw, 1);
        },
        off: function(bw, e, by) {
            if (bw && bw.preventDefault && bw.handleObj) {
                var bv = bw.handleObj;
                b(bw.delegateTarget).off(bv.namespace ? bv.origType + "." + bv.namespace : bv.origType, bv.selector, bv.handler);
                return this;
            }
            if (typeof bw === "object") {
                for (var bx in bw) {
                    this.off(bx, e, bw[bx]);
                }
                return this;
            }
            if (e === false || typeof e === "function") {
                by = e;
                e = L;
            }
            if (by === false) {
                by = bl;
            }
            return this.each(function() {
                b.event.remove(this, bw, by, e);
            });
        },
        bind: function(e, bw, bv) {
            return this.on(e, null, bw, bv);
        },
        unbind: function(e, bv) {
            return this.off(e, null, bv);
        },
        live: function(e, bw, bv) {
            b(this.context).on(e, this.selector, bw, bv);
            return this;
        },
        die: function(e, bv) {
            b(this.context).off(e, this.selector || "**", bv);
            return this;
        },
        delegate: function(e, bv, bx, bw) {
            return this.on(bv, e, bx, bw);
        },
        undelegate: function(e, bv, bw) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(bv, e, bw);
        },
        trigger: function(e, bv) {
            return this.each(function() {
                b.event.trigger(e, bv, this);
            });
        },
        triggerHandler: function(e, bv) {
            if (this[0]) {
                return b.event.trigger(e, bv, this[0], true);
            }
        },
        toggle: function(bx) {
            var bv = arguments, e = bx.guid || b.guid++, bw = 0, by = function(bz) {
                var bA = (b._data(this, "lastToggle" + bx.guid) || 0)%bw;
                b._data(this, "lastToggle" + bx.guid, bA + 1);
                bz.preventDefault();
                return bv[bA].apply(this, arguments) || false;
            };
            by.guid = e;
            while (bw < bv.length) {
                bv[bw++].guid = e;
            }
            return this.click(by);
        },
        hover: function(e, bv) {
            return this.mouseenter(e).mouseleave(bv || e);
        }
    });
    b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(bv, e) {
        b.fn[e] = function(bx, bw) {
            if (bw == null) {
                bw = bx;
                bx = null;
            }
            return arguments.length > 0 ? this.on(e, null, bx, bw) : this.trigger(e);
        };
        if (b.attrFn) {
            b.attrFn[e] = true;
        }
        if (aP.test(e)) {
            b.event.fixHooks[e] = b.event.keyHooks;
        }
        if (bg.test(e)) {
            b.event.fixHooks[e] = b.event.mouseHooks;
        }
    });
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
    (function() {
        var bH = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, bC = "sizcache" + (Math.random() + "").replace(".", ""), bI = 0, bL = Object.prototype.toString, bB = false, bA = true, bK = /\\/g, bO = /\r\n/g, bQ = /\W/;
        [0, 0].sort(function() {
            bA = false;
            return 0;
        });
        var by = function(bV, e, bY, bZ) {
            bY = bY || [];
            e = e || av;
            var b1 = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return [];
            }
            if (!bV || typeof bV !== "string") {
                return bY;
            }
            var bS, b3, b6, bR, b2, b5, b4, bX, bU = true, bT = by.isXML(e), bW = [], b0 = bV;
            do {
                bH.exec("");
                bS = bH.exec(b0);
                if (bS) {
                    b0 = bS[3];
                    bW.push(bS[1]);
                    if (bS[2]) {
                        bR = bS[3];
                        break;
                    }
                }
            }
            while (bS);
            if (bW.length > 1 && bD.exec(bV)) {
                if (bW.length === 2 && bE.relative[bW[0]]) {
                    b3 = bM(bW[0] + bW[1], e, bZ);
                } else {
                    b3 = bE.relative[bW[0]] ? [e] : by(bW.shift(), e);
                    while (bW.length) {
                        bV = bW.shift();
                        if (bE.relative[bV]) {
                            bV += bW.shift();
                        }
                        b3 = bM(bV, b3, bZ);
                    }
                }
            } else {
                if (!bZ && bW.length > 1 && e.nodeType === 9&&!bT && bE.match.ID.test(bW[0])&&!bE.match.ID.test(bW[bW.length - 1])) {
                    b2 = by.find(bW.shift(), e, bT);
                    e = b2.expr ? by.filter(b2.expr, b2.set)[0] : b2.set[0];
                }
                if (e) {
                    b2 = bZ ? {
                        expr: bW.pop(),
                        set: bF(bZ)
                    } : by.find(bW.pop(), bW.length === 1 && (bW[0] === "~" || bW[0] === "+") && e.parentNode ? e.parentNode : e, bT);
                    b3 = b2.expr ? by.filter(b2.expr, b2.set) : b2.set;
                    if (bW.length > 0) {
                        b6 = bF(b3);
                    } else {
                        bU = false;
                    }
                    while (bW.length) {
                        b5 = bW.pop();
                        b4 = b5;
                        if (!bE.relative[b5]) {
                            b5 = "";
                        } else {
                            b4 = bW.pop();
                        }
                        if (b4 == null) {
                            b4 = e;
                        }
                        bE.relative[b5](b6, b4, bT);
                    }
                } else {
                    b6 = bW = [];
                }
            }
            if (!b6) {
                b6 = b3;
            }
            if (!b6) {
                by.error(b5 || bV);
            }
            if (bL.call(b6) === "[object Array]") {
                if (!bU) {
                    bY.push.apply(bY, b6);
                } else {
                    if (e && e.nodeType === 1) {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && (b6[bX] === true || b6[bX].nodeType === 1 && by.contains(e, b6[bX]))) {
                                bY.push(b3[bX]);
                            }
                        }
                    } else {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && b6[bX].nodeType === 1) {
                                bY.push(b3[bX]);
                            }
                        }
                    }
                }
            } else {
                bF(b6, bY);
            }
            if (bR) {
                by(bR, b1, bY, bZ);
                by.uniqueSort(bY);
            }
            return bY;
        };
        by.uniqueSort = function(bR) {
            if (bJ) {
                bB = bA;
                bR.sort(bJ);
                if (bB) {
                    for (var e = 1; e < bR.length; e++) {
                        if (bR[e] === bR[e - 1]) {
                            bR.splice(e--, 1);
                        }
                    }
                }
            }
            return bR;
        };
        by.matches = function(e, bR) {
            return by(e, null, null, bR);
        };
        by.matchesSelector = function(e, bR) {
            return by(bR, null, null, [e]).length > 0;
        };
        by.find = function(bX, e, bY) {
            var bW, bS, bU, bT, bV, bR;
            if (!bX) {
                return [];
            }
            for (bS = 0, bU = bE.order.length; bS < bU; bS++) {
                bV = bE.order[bS];
                if ((bT = bE.leftMatch[bV].exec(bX))) {
                    bR = bT[1];
                    bT.splice(1, 1);
                    if (bR.substr(bR.length - 1) !== "\\") {
                        bT[1] = (bT[1] || "").replace(bK, "");
                        bW = bE.find[bV](bT, e, bY);
                        if (bW != null) {
                            bX = bX.replace(bE.match[bV], "");
                            break;
                        }
                    }
                }
            }
            if (!bW) {
                bW = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : [];
            }
            return {
                set: bW,
                expr: bX
            };
        };
        by.filter = function(b1, b0, b4, bU) {
            var bW, e, bZ, b6, b3, bR, bT, bV, b2, bS = b1, b5 = [], bY = b0, bX = b0 && b0[0] && by.isXML(b0[0]);
            while (b1 && b0.length) {
                for (bZ in bE.filter) {
                    if ((bW = bE.leftMatch[bZ].exec(b1)) != null && bW[2]) {
                        bR = bE.filter[bZ];
                        bT = bW[1];
                        e = false;
                        bW.splice(1, 1);
                        if (bT.substr(bT.length - 1) === "\\") {
                            continue;
                        }
                        if (bY === b5) {
                            b5 = [];
                        }
                        if (bE.preFilter[bZ]) {
                            bW = bE.preFilter[bZ](bW, bY, b4, b5, bU, bX);
                            if (!bW) {
                                e = b6 = true;
                            } else {
                                if (bW === true) {
                                    continue;
                                }
                            }
                        }
                        if (bW) {
                            for (bV = 0; (b3 = bY[bV]) != null; bV++) {
                                if (b3) {
                                    b6 = bR(b3, bW, bV, bY);
                                    b2 = bU^b6;
                                    if (b4 && b6 != null) {
                                        if (b2) {
                                            e = true;
                                        } else {
                                            bY[bV] = false;
                                        }
                                    } else {
                                        if (b2) {
                                            b5.push(b3);
                                            e = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (b6 !== L) {
                            if (!b4) {
                                bY = b5;
                            }
                            b1 = b1.replace(bE.match[bZ], "");
                            if (!e) {
                                return [];
                            }
                            break;
                        }
                    }
                }
                if (b1 === bS) {
                    if (e == null) {
                        by.error(b1);
                    } else {
                        break;
                    }
                }
                bS = b1;
            }
            return bY;
        };
        by.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        var bw = by.getText = function(bU) {
            var bS, bT, e = bU.nodeType, bR = "";
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof bU.textContent === "string") {
                        return bU.textContent;
                    } else {
                        if (typeof bU.innerText === "string") {
                            return bU.innerText.replace(bO, "");
                        } else {
                            for (bU = bU.firstChild; bU; bU = bU.nextSibling) {
                                bR += bw(bU);
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return bU.nodeValue;
                    }
                }
            } else {
                for (bS = 0; (bT = bU[bS]); bS++) {
                    if (bT.nodeType !== 8) {
                        bR += bw(bT);
                    }
                }
            }
            return bR;
        };
        var bE = by.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href");
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            relative: {
                "+": function(bW, bR) {
                    var bT = typeof bR === "string", bV = bT&&!bQ.test(bR), bX = bT&&!bV;
                    if (bV) {
                        bR = bR.toLowerCase();
                    }
                    for (var bS = 0, e = bW.length, bU; bS < e; bS++) {
                        if ((bU = bW[bS])) {
                            while ((bU = bU.previousSibling) && bU.nodeType !== 1) {}
                            bW[bS] = bX || bU && bU.nodeName.toLowerCase() === bR ? bU || false : bU === bR;
                        }
                    }
                    if (bX) {
                        by.filter(bR, bW, true);
                    }
                },
                ">": function(bW, bR) {
                    var bV, bU = typeof bR === "string", bS = 0, e = bW.length;
                    if (bU&&!bQ.test(bR)) {
                        bR = bR.toLowerCase();
                        for (; bS < e; bS++) {
                            bV = bW[bS];
                            if (bV) {
                                var bT = bV.parentNode;
                                bW[bS] = bT.nodeName.toLowerCase() === bR ? bT : false;
                            }
                        }
                    } else {
                        for (; bS < e; bS++) {
                            bV = bW[bS];
                            if (bV) {
                                bW[bS] = bU ? bV.parentNode : bV.parentNode === bR;
                            }
                        }
                        if (bU) {
                            by.filter(bR, bW, true);
                        }
                    }
                },
                "": function(bT, bR, bV) {
                    var bU, bS = bI++, e = bN;
                    if (typeof bR === "string"&&!bQ.test(bR)) {
                        bR = bR.toLowerCase();
                        bU = bR;
                        e = bv;
                    }
                    e("parentNode", bR, bS, bT, bU, bV);
                },
                "~": function(bT, bR, bV) {
                    var bU, bS = bI++, e = bN;
                    if (typeof bR === "string"&&!bQ.test(bR)) {
                        bR = bR.toLowerCase();
                        bU = bR;
                        e = bv;
                    }
                    e("previousSibling", bR, bS, bT, bU, bV);
                }
            },
            find: {
                ID: function(bR, bS, bT) {
                    if (typeof bS.getElementById !== "undefined"&&!bT) {
                        var e = bS.getElementById(bR[1]);
                        return e && e.parentNode ? [e] : [];
                    }
                },
                NAME: function(bS, bV) {
                    if (typeof bV.getElementsByName !== "undefined") {
                        var bR = [], bU = bV.getElementsByName(bS[1]);
                        for (var bT = 0, e = bU.length; bT < e; bT++) {
                            if (bU[bT].getAttribute("name") === bS[1]) {
                                bR.push(bU[bT]);
                            }
                        }
                        return bR.length === 0 ? null : bR;
                    }
                },
                TAG: function(e, bR) {
                    if (typeof bR.getElementsByTagName !== "undefined") {
                        return bR.getElementsByTagName(e[1]);
                    }
                }
            },
            preFilter: {
                CLASS: function(bT, bR, bS, e, bW, bX) {
                    bT = " " + bT[1].replace(bK, "") + " ";
                    if (bX) {
                        return bT;
                    }
                    for (var bU = 0, bV; (bV = bR[bU]) != null; bU++) {
                        if (bV) {
                            if (bW^(bV.className && (" " + bV.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bT) >= 0)) {
                                if (!bS) {
                                    e.push(bV);
                                }
                            } else {
                                if (bS) {
                                    bR[bU] = false;
                                }
                            }
                        }
                    }
                    return false;
                },
                ID: function(e) {
                    return e[1].replace(bK, "");
                },
                TAG: function(bR, e) {
                    return bR[1].replace(bK, "").toLowerCase();
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            by.error(e[0]);
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var bR = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" ||!/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (bR[1] + (bR[2] || 1)) - 0;
                        e[3] = bR[3] - 0;
                    } else {
                        if (e[2]) {
                            by.error(e[0]);
                        }
                    }
                    e[0] = bI++;
                    return e;
                },
                ATTR: function(bU, bR, bS, e, bV, bW) {
                    var bT = bU[1] = bU[1].replace(bK, "");
                    if (!bW && bE.attrMap[bT]) {
                        bU[1] = bE.attrMap[bT];
                    }
                    bU[4] = (bU[4] || bU[5] || "").replace(bK, "");
                    if (bU[2] === "~=") {
                        bU[4] = " " + bU[4] + " ";
                    }
                    return bU;
                },
                PSEUDO: function(bU, bR, bS, e, bV) {
                    if (bU[1] === "not") {
                        if ((bH.exec(bU[3]) || "").length > 1 || /^\w/.test(bU[3])) {
                            bU[3] = by(bU[3], null, null, bR);
                        } else {
                            var bT = by.filter(bU[3], bR, bS, true^bV);
                            if (!bS) {
                                e.push.apply(e, bT);
                            }
                            return false;
                        }
                    } else {
                        if (bE.match.POS.test(bU[0]) || bE.match.CHILD.test(bU[0])) {
                            return true;
                        }
                    }
                    return bU;
                },
                POS: function(e) {
                    e.unshift(true);
                    return e;
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === false && e.type !== "hidden";
                },
                disabled: function(e) {
                    return e.disabled === true;
                },
                checked: function(e) {
                    return e.checked === true;
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                    return e.selected === true;
                },
                parent: function(e) {
                    return !!e.firstChild;
                },
                empty: function(e) {
                    return !e.firstChild;
                },
                has: function(bS, bR, e) {
                    return !!by(e[3], bS).length;
                },
                header: function(e) {
                    return (/h\d/i).test(e.nodeName);
                },
                text: function(bS) {
                    var e = bS.getAttribute("type"), bR = bS.type;
                    return bS.nodeName.toLowerCase() === "input" && "text" === bR && (e === bR || e === null);
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type;
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type;
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type;
                },
                submit: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === bR.type;
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type;
                },
                reset: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === bR.type;
                },
                button: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return e === "input" && "button" === bR.type || e === "button";
                },
                input: function(e) {
                    return (/input|select|textarea|button/i).test(e.nodeName);
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function(bR, e) {
                    return e === 0;
                },
                last: function(bS, bR, e, bT) {
                    return bR === bT.length - 1;
                },
                even: function(bR, e) {
                    return e%2 === 0;
                },
                odd: function(bR, e) {
                    return e%2 === 1;
                },
                lt: function(bS, bR, e) {
                    return bR < e[3] - 0;
                },
                gt: function(bS, bR, e) {
                    return bR > e[3] - 0;
                },
                nth: function(bS, bR, e) {
                    return e[3] - 0 === bR;
                },
                eq: function(bS, bR, e) {
                    return e[3] - 0 === bR;
                }
            },
            filter: {
                PSEUDO: function(bS, bX, bW, bY) {
                    var e = bX[1], bR = bE.filters[e];
                    if (bR) {
                        return bR(bS, bW, bX, bY);
                    } else {
                        if (e === "contains") {
                            return (bS.textContent || bS.innerText || bw([bS]) || "").indexOf(bX[3]) >= 0;
                        } else {
                            if (e === "not") {
                                var bT = bX[3];
                                for (var bV = 0, bU = bT.length; bV < bU; bV++) {
                                    if (bT[bV] === bS) {
                                        return false;
                                    }
                                }
                                return true;
                            } else {
                                by.error(e);
                            }
                        }
                    }
                },
                CHILD: function(bS, bU) {
                    var bT, b0, bW, bZ, e, bV, bY, bX = bU[1], bR = bS;
                    switch (bX) {
                    case"only":
                    case"first":
                        while ((bR = bR.previousSibling)) {
                            if (bR.nodeType === 1) {
                                return false;
                            }
                        }
                        if (bX === "first") {
                            return true;
                        }
                        bR = bS;
                    case"last":
                        while ((bR = bR.nextSibling)) {
                            if (bR.nodeType === 1) {
                                return false;
                            }
                        }
                        return true;
                    case"nth":
                        bT = bU[2];
                        b0 = bU[3];
                        if (bT === 1 && b0 === 0) {
                            return true;
                        }
                        bW = bU[0];
                        bZ = bS.parentNode;
                        if (bZ && (bZ[bC] !== bW ||!bS.nodeIndex)) {
                            bV = 0;
                            for (bR = bZ.firstChild; bR; bR = bR.nextSibling) {
                                if (bR.nodeType === 1) {
                                    bR.nodeIndex=++bV;
                                }
                            }
                            bZ[bC] = bW;
                        }
                        bY = bS.nodeIndex - b0;
                        if (bT === 0) {
                            return bY === 0;
                        } else {
                            return (bY%bT === 0 && bY / bT >= 0);
                        }
                    }
                },
                ID: function(bR, e) {
                    return bR.nodeType === 1 && bR.getAttribute("id") === e;
                },
                TAG: function(bR, e) {
                    return (e === "*" && bR.nodeType === 1)||!!bR.nodeName && bR.nodeName.toLowerCase() === e;
                },
                CLASS: function(bR, e) {
                    return (" " + (bR.className || bR.getAttribute("class")) + " ").indexOf(e)>-1;
                },
                ATTR: function(bV, bT) {
                    var bS = bT[1], e = by.attr ? by.attr(bV, bS): bE.attrHandle[bS] ? bE.attrHandle[bS](bV): bV[bS] != null ? bV[bS]: bV.getAttribute(bS), bW = e + "", bU = bT[2], bR = bT[4];
                    return e == null ? bU === "!=" : !bU && by.attr ? e != null : bU === "=" ? bW === bR : bU === "*=" ? bW.indexOf(bR) >= 0 : bU === "~=" ? (" " + bW + " ").indexOf(bR) >= 0 : !bR ? bW && e !== false : bU === "!=" ? bW !== bR : bU === "^=" ? bW.indexOf(bR) === 0 : bU === "$=" ? bW.substr(bW.length - bR.length) === bR : bU === "|=" ? bW === bR || bW.substr(0, bR.length + 1) === bR + "-" : false;
                },
                POS: function(bU, bR, bS, bV) {
                    var e = bR[2], bT = bE.setFilters[e];
                    if (bT) {
                        return bT(bU, bS, bR, bV);
                    }
                }
            }
        };
        var bD = bE.match.POS, bx = function(bR, e) {
            return "\\" + (e - 0 + 1);
        };
        for (var bz in bE.match) {
            bE.match[bz] = new RegExp(bE.match[bz].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bE.leftMatch[bz] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bE.match[bz].source.replace(/\\(\d+)/g, bx));
        }
        bE.match.globalPOS = bD;
        var bF = function(bR, e) {
            bR = Array.prototype.slice.call(bR, 0);
            if (e) {
                e.push.apply(e, bR);
                return e;
            }
            return bR;
        };
        try {
            Array.prototype.slice.call(av.documentElement.childNodes, 0)[0].nodeType;
        } catch (bP) {
            bF = function(bU, bT) {
                var bS = 0, bR = bT || [];
                if (bL.call(bU) === "[object Array]") {
                    Array.prototype.push.apply(bR, bU);
                } else {
                    if (typeof bU.length === "number") {
                        for (var e = bU.length; bS < e; bS++) {
                            bR.push(bU[bS]);
                        }
                    } else {
                        for (; bU[bS]; bS++) {
                            bR.push(bU[bS]);
                        }
                    }
                }
                return bR;
            };
        }
        var bJ, bG;
        if (av.documentElement.compareDocumentPosition) {
            bJ = function(bR, e) {
                if (bR === e) {
                    bB = true;
                    return 0;
                }
                if (!bR.compareDocumentPosition ||!e.compareDocumentPosition) {
                    return bR.compareDocumentPosition?-1 : 1;
                }
                return bR.compareDocumentPosition(e) & 4?-1 : 1;
            };
        } else {
            bJ = function(bY, bX) {
                if (bY === bX) {
                    bB = true;
                    return 0;
                } else {
                    if (bY.sourceIndex && bX.sourceIndex) {
                        return bY.sourceIndex - bX.sourceIndex;
                    }
                }
                var bV, bR, bS = [], e = [], bU = bY.parentNode, bW = bX.parentNode, bZ = bU;
                if (bU === bW) {
                    return bG(bY, bX);
                } else {
                    if (!bU) {
                        return - 1;
                    } else {
                        if (!bW) {
                            return 1;
                        }
                    }
                }
                while (bZ) {
                    bS.unshift(bZ);
                    bZ = bZ.parentNode;
                }
                bZ = bW;
                while (bZ) {
                    e.unshift(bZ);
                    bZ = bZ.parentNode;
                }
                bV = bS.length;
                bR = e.length;
                for (var bT = 0; bT < bV && bT < bR; bT++) {
                    if (bS[bT] !== e[bT]) {
                        return bG(bS[bT], e[bT]);
                    }
                }
                return bT === bV ? bG(bY, e[bT], - 1) : bG(bS[bT], bX, 1);
            };
            bG = function(bR, e, bS) {
                if (bR === e) {
                    return bS;
                }
                var bT = bR.nextSibling;
                while (bT) {
                    if (bT === e) {
                        return - 1;
                    }
                    bT = bT.nextSibling;
                }
                return 1;
            };
        }(function() {
            var bR = av.createElement("div"), bS = "script" + (new Date()).getTime(), e = av.documentElement;
            bR.innerHTML = "<a name='" + bS + "'/>";
            e.insertBefore(bR, e.firstChild);
            if (av.getElementById(bS)) {
                bE.find.ID = function(bU, bV, bW) {
                    if (typeof bV.getElementById !== "undefined"&&!bW) {
                        var bT = bV.getElementById(bU[1]);
                        return bT ? bT.id === bU[1] || typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id").nodeValue === bU[1] ? [bT] : L : [];
                    }
                };
                bE.filter.ID = function(bV, bT) {
                    var bU = typeof bV.getAttributeNode !== "undefined" && bV.getAttributeNode("id");
                    return bV.nodeType === 1 && bU && bU.nodeValue === bT;
                };
            }
            e.removeChild(bR);
            e = bR = null;
        })();
        (function() {
            var e = av.createElement("div");
            e.appendChild(av.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bE.find.TAG = function(bR, bV) {
                    var bU = bV.getElementsByTagName(bR[1]);
                    if (bR[1] === "*") {
                        var bT = [];
                        for (var bS = 0; bU[bS]; bS++) {
                            if (bU[bS].nodeType === 1) {
                                bT.push(bU[bS]);
                            }
                        }
                        bU = bT;
                    }
                    return bU;
                };
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bE.attrHandle.href = function(bR) {
                    return bR.getAttribute("href", 2);
                };
            }
            e = null;
        })();
        if (av.querySelectorAll) {
            (function() {
                var e = by, bT = av.createElement("div"), bS = "__sizzle__";
                bT.innerHTML = "<p class='TEST'></p>";
                if (bT.querySelectorAll && bT.querySelectorAll(".TEST").length === 0) {
                    return;
                }
                by = function(b4, bV, bZ, b3) {
                    bV = bV || av;
                    if (!b3&&!by.isXML(bV)) {
                        var b2 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
                        if (b2 && (bV.nodeType === 1 || bV.nodeType === 9)) {
                            if (b2[1]) {
                                return bF(bV.getElementsByTagName(b4), bZ);
                            } else {
                                if (b2[2] && bE.find.CLASS && bV.getElementsByClassName) {
                                    return bF(bV.getElementsByClassName(b2[2]), bZ);
                                }
                            }
                        }
                        if (bV.nodeType === 9) {
                            if (b4 === "body" && bV.body) {
                                return bF([bV.body], bZ);
                            } else {
                                if (b2 && b2[3]) {
                                    var bY = bV.getElementById(b2[3]);
                                    if (bY && bY.parentNode) {
                                        if (bY.id === b2[3]) {
                                            return bF([bY], bZ);
                                        }
                                    } else {
                                        return bF([], bZ);
                                    }
                                }
                            }
                            try {
                                return bF(bV.querySelectorAll(b4), bZ);
                            } catch (b0) {}
                        } else {
                            if (bV.nodeType === 1 && bV.nodeName.toLowerCase() !== "object") {
                                var bW = bV, bX = bV.getAttribute("id"), bU = bX || bS, b6 = bV.parentNode, b5 = /^\s*[+~]/.test(b4);
                                if (!bX) {
                                    bV.setAttribute("id", bU);
                                } else {
                                    bU = bU.replace(/'/g, "\\$&");
                                }
                                if (b5 && b6) {
                                    bV = bV.parentNode;
                                }
                                try {
                                    if (!b5 || b6) {
                                        return bF(bV.querySelectorAll("[id='" + bU + "'] " + b4), bZ);
                                    }
                                } catch (b1) {} finally {
                                    if (!bX) {
                                        bW.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                    return e(b4, bV, bZ, b3);
                };
                for (var bR in e) {
                    by[bR] = e[bR];
                }
                bT = null;
            })();
        }(function() {
            var e = av.documentElement, bS = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bS) {
                var bU=!bS.call(av.createElement("div"), "div"), bR = false;
                try {
                    bS.call(av.documentElement, "[test!='']:sizzle");
                } catch (bT) {
                    bR = true;
                }
                by.matchesSelector = function(bW, bY) {
                    bY = bY.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!by.isXML(bW)) {
                        try {
                            if (bR ||!bE.match.PSEUDO.test(bY)&&!/!=/.test(bY)) {
                                var bV = bS.call(bW, bY);
                                if (bV ||!bU || bW.document && bW.document.nodeType !== 11) {
                                    return bV;
                                }
                            }
                        } catch (bX) {}
                    }
                    return by(bY, null, null, [bW]).length > 0;
                };
            }
        })();
        (function() {
            var e = av.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return;
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return;
            }
            bE.order.splice(1, 0, "CLASS");
            bE.find.CLASS = function(bR, bS, bT) {
                if (typeof bS.getElementsByClassName !== "undefined"&&!bT) {
                    return bS.getElementsByClassName(bR[1]);
                }
            };
            e = null;
        })();
        function bv(bR, bW, bV, bZ, bX, bY) {
            for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
                var e = bZ[bT];
                if (e) {
                    var bU = false;
                    e = e[bR];
                    while (e) {
                        if (e[bC] === bV) {
                            bU = bZ[e.sizset];
                            break;
                        }
                        if (e.nodeType === 1&&!bY) {
                            e[bC] = bV;
                            e.sizset = bT;
                        }
                        if (e.nodeName.toLowerCase() === bW) {
                            bU = e;
                            break;
                        }
                        e = e[bR];
                    }
                    bZ[bT] = bU;
                }
            }
        }
        function bN(bR, bW, bV, bZ, bX, bY) {
            for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
                var e = bZ[bT];
                if (e) {
                    var bU = false;
                    e = e[bR];
                    while (e) {
                        if (e[bC] === bV) {
                            bU = bZ[e.sizset];
                            break;
                        }
                        if (e.nodeType === 1) {
                            if (!bY) {
                                e[bC] = bV;
                                e.sizset = bT;
                            }
                            if (typeof bW !== "string") {
                                if (e === bW) {
                                    bU = true;
                                    break;
                                }
                            } else {
                                if (by.filter(bW, [e]).length > 0) {
                                    bU = e;
                                    break;
                                }
                            }
                        }
                        e = e[bR];
                    }
                    bZ[bT] = bU;
                }
            }
        }
        if (av.documentElement.contains) {
            by.contains = function(bR, e) {
                return bR !== e && (bR.contains ? bR.contains(e) : true);
            };
        } else {
            if (av.documentElement.compareDocumentPosition) {
                by.contains = function(bR, e) {
                    return !!(bR.compareDocumentPosition(e) & 16);
                };
            } else {
                by.contains = function() {
                    return false;
                };
            }
        }
        by.isXML = function(e) {
            var bR = (e ? e.ownerDocument || e : 0).documentElement;
            return bR ? bR.nodeName !== "HTML" : false;
        };
        var bM = function(bS, e, bW) {
            var bV, bX = [], bU = "", bY = e.nodeType ? [e]: e;
            while ((bV = bE.match.PSEUDO.exec(bS))) {
                bU += bV[0];
                bS = bS.replace(bE.match.PSEUDO, "");
            }
            bS = bE.relative[bS] ? bS + "*" : bS;
            for (var bT = 0, bR = bY.length; bT < bR; bT++) {
                by(bS, bY[bT], bX, bW);
            }
            return by.filter(bU, bX);
        };
        by.attr = b.attr;
        by.selectors.attrMap = {};
        b.find = by;
        b.expr = by.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = by.uniqueSort;
        b.text = by.getText;
        b.isXMLDoc = by.isXML;
        b.contains = by.contains;
    })();
    var ab = /Until$/, aq = /^(?:parents|prevUntil|prevAll)/, bb = /,/, bp = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, H = b.expr.match.globalPOS, ay = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    b.fn.extend({
        find: function(e) {
            var bw = this, by, bv;
            if (typeof e !== "string") {
                return b(e).filter(function() {
                    for (by = 0, bv = bw.length; by < bv; by++) {
                        if (b.contains(bw[by], this)) {
                            return true;
                        }
                    }
                });
            }
            var bx = this.pushStack("", "find", e), bA, bB, bz;
            for (by = 0, bv = this.length; by < bv; by++) {
                bA = bx.length;
                b.find(e, this[by], bx);
                if (by > 0) {
                    for (bB = bA; bB < bx.length; bB++) {
                        for (bz = 0; bz < bA; bz++) {
                            if (bx[bz] === bx[bB]) {
                                bx.splice(bB--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return bx;
        },
        has: function(bv) {
            var e = b(bv);
            return this.filter(function() {
                for (var bx = 0, bw = e.length; bx < bw; bx++) {
                    if (b.contains(this, e[bx])) {
                        return true;
                    }
                }
            });
        },
        not: function(e) {
            return this.pushStack(aH(this, e, false), "not", e);
        },
        filter: function(e) {
            return this.pushStack(aH(this, e, true), "filter", e);
        },
        is: function(e) {
            return !!e && (typeof e === "string" ? H.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(by, bx) {
            var bv = [], bw, e, bz = this[0];
            if (b.isArray(by)) {
                var bB = 1;
                while (bz && bz.ownerDocument && bz !== bx) {
                    for (bw = 0; bw < by.length; bw++) {
                        if (b(bz).is(by[bw])) {
                            bv.push({
                                selector: by[bw],
                                elem: bz,
                                level: bB
                            });
                        }
                    }
                    bz = bz.parentNode;
                    bB++;
                }
                return bv;
            }
            var bA = H.test(by) || typeof by !== "string" ? b(by, bx || this.context): 0;
            for (bw = 0, e = this.length; bw < e; bw++) {
                bz = this[bw];
                while (bz) {
                    if (bA ? bA.index(bz)>-1 : b.find.matchesSelector(bz, by)) {
                        bv.push(bz);
                        break;
                    } else {
                        bz = bz.parentNode;
                        if (!bz ||!bz.ownerDocument || bz === bx || bz.nodeType === 11) {
                            break;
                        }
                    }
                }
            }
            bv = bv.length > 1 ? b.unique(bv) : bv;
            return this.pushStack(bv, "closest", by);
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : - 1;
            }
            if (typeof e === "string") {
                return b.inArray(this[0], b(e));
            }
            return b.inArray(e.jquery ? e[0] : e, this);
        },
        add: function(e, bv) {
            var bx = typeof e === "string" ? b(e, bv): b.makeArray(e && e.nodeType ? [e] : e), bw = b.merge(this.get(), bx);
            return this.pushStack(B(bx[0]) || B(bw[0]) ? bw : b.unique(bw));
        },
        andSelf: function() {
            return this.add(this.prevObject);
        }
    });
    function B(e) {
        return !e ||!e.parentNode || e.parentNode.nodeType === 11;
    }
    b.each({
        parent: function(bv) {
            var e = bv.parentNode;
            return e && e.nodeType !== 11 ? e : null;
        },
        parents: function(e) {
            return b.dir(e, "parentNode");
        },
        parentsUntil: function(bv, e, bw) {
            return b.dir(bv, "parentNode", bw);
        },
        next: function(e) {
            return b.nth(e, 2, "nextSibling");
        },
        prev: function(e) {
            return b.nth(e, 2, "previousSibling");
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },
        nextUntil: function(bv, e, bw) {
            return b.dir(bv, "nextSibling", bw);
        },
        prevUntil: function(bv, e, bw) {
            return b.dir(bv, "previousSibling", bw);
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return b.sibling(e.firstChild);
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes);
        }
    }, function(e, bv) {
        b.fn[e] = function(by, bw) {
            var bx = b.map(this, bv, by);
            if (!ab.test(e)) {
                bw = by;
            }
            if (bw && typeof bw === "string") {
                bx = b.filter(bw, bx);
            }
            bx = this.length > 1&&!ay[e] ? b.unique(bx) : bx;
            if ((this.length > 1 || bb.test(bw)) && aq.test(e)) {
                bx = bx.reverse();
            }
            return this.pushStack(bx, e, P.call(arguments).join(","));
        };
    });
    b.extend({
        filter: function(bw, e, bv) {
            if (bv) {
                bw = ":not(" + bw + ")";
            }
            return e.length === 1 ? b.find.matchesSelector(e[0], bw) ? [e[0]] : [] : b.find.matches(bw, e);
        },
        dir: function(bw, bv, by) {
            var e = [], bx = bw[bv];
            while (bx && bx.nodeType !== 9 && (by === L || bx.nodeType !== 1 ||!b(bx).is(by))) {
                if (bx.nodeType === 1) {
                    e.push(bx);
                }
                bx = bx[bv];
            }
            return e;
        },
        nth: function(by, e, bw, bx) {
            e = e || 1;
            var bv = 0;
            for (; by; by = by[bw]) {
                if (by.nodeType === 1&&++bv === e) {
                    break;
                }
            }
            return by;
        },
        sibling: function(bw, bv) {
            var e = [];
            for (; bw; bw = bw.nextSibling) {
                if (bw.nodeType === 1 && bw !== bv) {
                    e.push(bw);
                }
            }
            return e;
        }
    });
    function aH(bx, bw, e) {
        bw = bw || 0;
        if (b.isFunction(bw)) {
            return b.grep(bx, function(bz, by) {
                var bA=!!bw.call(bz, by, bz);
                return bA === e;
            });
        } else {
            if (bw.nodeType) {
                return b.grep(bx, function(bz, by) {
                    return (bz === bw) === e;
                });
            } else {
                if (typeof bw === "string") {
                    var bv = b.grep(bx, function(by) {
                        return by.nodeType === 1;
                    });
                    if (bp.test(bw)) {
                        return b.filter(bw, bv, !e);
                    } else {
                        bw = b.filter(bw, bv);
                    }
                }
            }
        }
        return b.grep(bx, function(bz, by) {
            return (b.inArray(bz, bw) >= 0) === e;
        });
    }
    function a(e) {
        var bw = aS.split("|"), bv = e.createDocumentFragment();
        if (bv.createElement) {
            while (bw.length) {
                bv.createElement(bw.pop());
            }
        }
        return bv;
    }
    var aS = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ah = / jQuery\d+="(?:\d+|null)"/g, ar = /^\s+/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, d = /<([\w:]+)/, v = /<tbody/i, W = /<|&#?\w+;/, ae = /<(?:script|style)/i, O = /<(?:script|object|embed|option|style)/i, ai = new RegExp("<(?:" + aS + ")[\\s/>]", "i"), o = /checked\s*(?:[^=]|=\s*.checked.)/i, bn = /\/(java|ecma)script/i, aO = /^\s*<!(?:\[CDATA\[|\-\-)/, ax = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, ac = a(av);
    ax.optgroup = ax.option;
    ax.tbody = ax.tfoot = ax.colgroup = ax.caption = ax.thead;
    ax.th = ax.td;
    if (!b.support.htmlSerialize) {
        ax._default = [1, "div<div>", "</div>"];
    }
    b.fn.extend({
        text: function(e) {
            return b.access(this, function(bv) {
                return bv === L ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || av).createTextNode(bv));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(bw) {
                    b(this).wrapAll(e.call(this, bw));
                });
            }
            if (this[0]) {
                var bv = b(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bv.insertBefore(this[0]);
                }
                bv.map(function() {
                    var bw = this;
                    while (bw.firstChild && bw.firstChild.nodeType === 1) {
                        bw = bw.firstChild;
                    }
                    return bw;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(bv) {
                    b(this).wrapInner(e.call(this, bv));
                });
            }
            return this.each(function() {
                var bv = b(this), bw = bv.contents();
                if (bw.length) {
                    bw.wrapAll(e);
                } else {
                    bv.append(e);
                }
            });
        },
        wrap: function(e) {
            var bv = b.isFunction(e);
            return this.each(function(bw) {
                b(this).wrapAll(bv ? e.call(this, bw) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!b.nodeName(this, "body")) {
                    b(this).replaceWith(this.childNodes);
                }
            }).end();
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild);
                }
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(bv) {
                    this.parentNode.insertBefore(bv, this);
                });
            } else {
                if (arguments.length) {
                    var e = b.clean(arguments);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments);
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(bv) {
                    this.parentNode.insertBefore(bv, this.nextSibling);
                });
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, b.clean(arguments));
                    return e;
                }
            }
        },
        remove: function(e, bx) {
            for (var bv = 0, bw; (bw = this[bv]) != null; bv++) {
                if (!e || b.filter(e, [bw]).length) {
                    if (!bx && bw.nodeType === 1) {
                        b.cleanData(bw.getElementsByTagName("*"));
                        b.cleanData([bw]);
                    }
                    if (bw.parentNode) {
                        bw.parentNode.removeChild(bw);
                    }
                }
            }
            return this;
        },
        empty: function() {
            for (var e = 0, bv; (bv = this[e]) != null; e++) {
                if (bv.nodeType === 1) {
                    b.cleanData(bv.getElementsByTagName("*"));
                }
                while (bv.firstChild) {
                    bv.removeChild(bv.firstChild);
                }
            }
            return this;
        },
        clone: function(bv, e) {
            bv = bv == null ? false : bv;
            e = e == null ? bv : e;
            return this.map(function() {
                return b.clone(this, bv, e);
            });
        },
        html: function(e) {
            return b.access(this, function(by) {
                var bx = this[0] || {}, bw = 0, bv = this.length;
                if (by === L) {
                    return bx.nodeType === 1 ? bx.innerHTML.replace(ah, "") : null;
                }
                if (typeof by === "string"&&!ae.test(by) && (b.support.leadingWhitespace ||!ar.test(by))&&!ax[(d.exec(by) || ["", ""])[1].toLowerCase()]) {
                    by = by.replace(R, "<$1></$2>");
                    try {
                        for (; bw < bv; bw++) {
                            bx = this[bw] || {};
                            if (bx.nodeType === 1) {
                                b.cleanData(bx.getElementsByTagName("*"));
                                bx.innerHTML = by;
                            }
                        }
                        bx = 0;
                    } catch (bz) {}
                }
                if (bx) {
                    this.empty().append(by);
                }
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(e)) {
                    return this.each(function(bx) {
                        var bw = b(this), bv = bw.html();
                        bw.replaceWith(e.call(this, bx, bv));
                    });
                }
                if (typeof e !== "string") {
                    e = b(e).detach();
                }
                return this.each(function() {
                    var bw = this.nextSibling, bv = this.parentNode;
                    b(this).remove();
                    if (bw) {
                        b(bw).before(e);
                    } else {
                        b(bv).append(e);
                    }
                });
            } else {
                return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this;
            }
        },
        detach: function(e) {
            return this.remove(e, true);
        },
        domManip: function(bB, bF, bE) {
            var bx, by, bA, bD, bC = bB[0], bv = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof bC === "string" && o.test(bC)) {
                return this.each(function() {
                    b(this).domManip(bB, bF, bE, true);
                });
            }
            if (b.isFunction(bC)) {
                return this.each(function(bH) {
                    var bG = b(this);
                    bB[0] = bC.call(this, bH, bF ? bG.html() : L);
                    bG.domManip(bB, bF, bE);
                });
            }
            if (this[0]) {
                bD = bC && bC.parentNode;
                if (b.support.parentNode && bD && bD.nodeType === 11 && bD.childNodes.length === this.length) {
                    bx = {
                        fragment: bD
                    };
                } else {
                    bx = b.buildFragment(bB, this, bv);
                }
                bA = bx.fragment;
                if (bA.childNodes.length === 1) {
                    by = bA = bA.firstChild;
                } else {
                    by = bA.firstChild;
                }
                if (by) {
                    bF = bF && b.nodeName(by, "tr");
                    for (var bw = 0, e = this.length, bz = e - 1; bw < e; bw++) {
                        bE.call(bF ? bc(this[bw], by) : this[bw], bx.cacheable || (e > 1 && bw < bz) ? b.clone(bA, true, true) : bA);
                    }
                }
                if (bv.length) {
                    b.each(bv, function(bG, bH) {
                        if (bH.src) {
                            b.ajax({
                                type: "GET",
                                global: false,
                                url: bH.src,
                                async: false,
                                dataType: "script"
                            });
                        } else {
                            b.globalEval((bH.text || bH.textContent || bH.innerHTML || "").replace(aO, "/*$0*/"));
                        }
                        if (bH.parentNode) {
                            bH.parentNode.removeChild(bH);
                        }
                    });
                }
            }
            return this;
        }
    });
    function bc(e, bv) {
        return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e;
    }
    function s(bB, bv) {
        if (bv.nodeType !== 1 ||!b.hasData(bB)) {
            return;
        }
        var by, bx, e, bA = b._data(bB), bz = b._data(bv, bA), bw = bA.events;
        if (bw) {
            delete bz.handle;
            bz.events = {};
            for (by in bw) {
                for (bx = 0, e = bw[by].length; bx < e; bx++) {
                    b.event.add(bv, by, bw[by][bx]);
                }
            }
        }
        if (bz.data) {
            bz.data = b.extend({}, bz.data);
        }
    }
    function aj(bv, e) {
        var bw;
        if (e.nodeType !== 1) {
            return;
        }
        if (e.clearAttributes) {
            e.clearAttributes();
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bv);
        }
        bw = e.nodeName.toLowerCase();
        if (bw === "object") {
            e.outerHTML = bv.outerHTML;
        } else {
            if (bw === "input" && (bv.type === "checkbox" || bv.type === "radio")) {
                if (bv.checked) {
                    e.defaultChecked = e.checked = bv.checked;
                }
                if (e.value !== bv.value) {
                    e.value = bv.value;
                }
            } else {
                if (bw === "option") {
                    e.selected = bv.defaultSelected;
                } else {
                    if (bw === "input" || bw === "textarea") {
                        e.defaultValue = bv.defaultValue;
                    } else {
                        if (bw === "script" && e.text !== bv.text) {
                            e.text = bv.text;
                        }
                    }
                }
            }
        }
        e.removeAttribute(b.expando);
        e.removeAttribute("_submit_attached");
        e.removeAttribute("_change_attached");
    }
    b.buildFragment = function(bz, bx, bv) {
        var by, e, bw, bA, bB = bz[0];
        if (bx && bx[0]) {
            bA = bx[0].ownerDocument || bx[0];
        }
        if (!bA.createDocumentFragment) {
            bA = av;
        }
        if (bz.length === 1 && typeof bB === "string" && bB.length < 512 && bA === av && bB.charAt(0) === "<"&&!O.test(bB) && (b.support.checkClone ||!o.test(bB)) && (b.support.html5Clone ||!ai.test(bB))) {
            e = true;
            bw = b.fragments[bB];
            if (bw && bw !== 1) {
                by = bw;
            }
        }
        if (!by) {
            by = bA.createDocumentFragment();
            b.clean(bz, bA, by, bv);
        }
        if (e) {
            b.fragments[bB] = bw ? by : 1;
        }
        return {
            fragment: by,
            cacheable: e
        };
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, bv) {
        b.fn[e] = function(bw) {
            var bz = [], bC = b(bw), bB = this.length === 1 && this[0].parentNode;
            if (bB && bB.nodeType === 11 && bB.childNodes.length === 1 && bC.length === 1) {
                bC[bv](this[0]);
                return this;
            } else {
                for (var bA = 0, bx = bC.length; bA < bx; bA++) {
                    var by = (bA > 0 ? this.clone(true) : this).get();
                    b(bC[bA])[bv](by);
                    bz = bz.concat(by);
                }
                return this.pushStack(bz, e, bC.selector);
            }
        };
    });
    function bh(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*");
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*");
            } else {
                return [];
            }
        }
    }
    function az(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked;
        }
    }
    function D(e) {
        var bv = (e.nodeName || "").toLowerCase();
        if (bv === "input") {
            az(e);
        } else {
            if (bv !== "script" && typeof e.getElementsByTagName !== "undefined") {
                b.grep(e.getElementsByTagName("input"), az);
            }
        }
    }
    function am(e) {
        var bv = av.createElement("div");
        ac.appendChild(bv);
        bv.innerHTML = e.outerHTML;
        return bv.firstChild;
    }
    b.extend({
        clone: function(by, bA, bw) {
            var e, bv, bx, bz = b.support.html5Clone || b.isXMLDoc(by) ||!ai.test("<" + by.nodeName + ">") ? by.cloneNode(true): am(by);
            if ((!b.support.noCloneEvent ||!b.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11)&&!b.isXMLDoc(by)) {
                aj(by, bz);
                e = bh(by);
                bv = bh(bz);
                for (bx = 0; e[bx]; ++bx) {
                    if (bv[bx]) {
                        aj(e[bx], bv[bx]);
                    }
                }
            }
            if (bA) {
                s(by, bz);
                if (bw) {
                    e = bh(by);
                    bv = bh(bz);
                    for (bx = 0; e[bx]; ++bx) {
                        s(e[bx], bv[bx]);
                    }
                }
            }
            e = bv = null;
            return bz;
        },
        clean: function(bI, bw, bv, bx) {
            var bA, bH, bD, bJ = [];
            bw = bw || av;
            if (typeof bw.createElement === "undefined") {
                bw = bw.ownerDocument || bw[0] && bw[0].ownerDocument || av;
            }
            for (var bE = 0, bG; (bG = bI[bE]) != null; bE++) {
                if (typeof bG === "number") {
                    bG += "";
                }
                if (!bG) {
                    continue;
                }
                if (typeof bG === "string") {
                    if (!W.test(bG)) {
                        bG = bw.createTextNode(bG);
                    } else {
                        bG = bG.replace(R, "<$1></$2>");
                        var bN = (d.exec(bG) || ["", ""])[1].toLowerCase(), bz = ax[bN] || ax._default, bK = bz[0], bB = bw.createElement("div"), bL = ac.childNodes, bM;
                        if (bw === av) {
                            ac.appendChild(bB);
                        } else {
                            a(bw).appendChild(bB);
                        }
                        bB.innerHTML = bz[1] + bG + bz[2];
                        while (bK--) {
                            bB = bB.lastChild;
                        }
                        if (!b.support.tbody) {
                            var by = v.test(bG), e = bN === "table"&&!by ? bB.firstChild && bB.firstChild.childNodes: bz[1] === "<table>"&&!by ? bB.childNodes: [];
                            for (bD = e.length - 1; bD >= 0; --bD) {
                                if (b.nodeName(e[bD], "tbody")&&!e[bD].childNodes.length) {
                                    e[bD].parentNode.removeChild(e[bD]);
                                }
                            }
                        }
                        if (!b.support.leadingWhitespace && ar.test(bG)) {
                            bB.insertBefore(bw.createTextNode(ar.exec(bG)[0]), bB.firstChild);
                        }
                        bG = bB.childNodes;
                        if (bB) {
                            bB.parentNode.removeChild(bB);
                            if (bL.length > 0) {
                                bM = bL[bL.length - 1];
                                if (bM && bM.parentNode) {
                                    bM.parentNode.removeChild(bM);
                                }
                            }
                        }
                    }
                }
                var bF;
                if (!b.support.appendChecked) {
                    if (bG[0] && typeof(bF = bG.length) === "number") {
                        for (bD = 0; bD < bF; bD++) {
                            D(bG[bD]);
                        }
                    } else {
                        D(bG);
                    }
                }
                if (bG.nodeType) {
                    bJ.push(bG);
                } else {
                    bJ = b.merge(bJ, bG);
                }
            }
            if (bv) {
                bA = function(bO) {
                    return !bO.type || bn.test(bO.type);
                };
                for (bE = 0; bJ[bE]; bE++) {
                    bH = bJ[bE];
                    if (bx && b.nodeName(bH, "script") && (!bH.type || bn.test(bH.type))) {
                        bx.push(bH.parentNode ? bH.parentNode.removeChild(bH) : bH);
                    } else {
                        if (bH.nodeType === 1) {
                            var bC = b.grep(bH.getElementsByTagName("script"), bA);
                            bJ.splice.apply(bJ, [bE + 1, 0].concat(bC));
                        }
                        bv.appendChild(bH);
                    }
                }
            }
            return bJ;
        },
        cleanData: function(bv) {
            var by, bw, e = b.cache, bB = b.event.special, bA = b.support.deleteExpando;
            for (var bz = 0, bx; (bx = bv[bz]) != null; bz++) {
                if (bx.nodeName && b.noData[bx.nodeName.toLowerCase()]) {
                    continue;
                }
                bw = bx[b.expando];
                if (bw) {
                    by = e[bw];
                    if (by && by.events) {
                        for (var bC in by.events) {
                            if (bB[bC]) {
                                b.event.remove(bx, bC);
                            } else {
                                b.removeEvent(bx, bC, by.handle);
                            }
                        }
                        if (by.handle) {
                            by.handle.elem = null;
                        }
                    }
                    if (bA) {
                        delete bx[b.expando];
                    } else {
                        if (bx.removeAttribute) {
                            bx.removeAttribute(b.expando);
                        }
                    }
                    delete e[bw];
                }
            }
        }
    });
    var al = /alpha\([^)]*\)/i, au = /opacity=([^)]*)/, y = /([A-Z]|^ms)/g, bo = /^[\-+]?(?:\d*\.)?\d+$/i, a1 = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, I = /^([\-+])=([\-+.\de]+)/, aE = /^margin/, a9 = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, G = ["Top", "Right", "Bottom", "Left"], Z, aJ, aY;
    b.fn.css = function(e, bv) {
        return b.access(this, function(bx, bw, by) {
            return by !== L ? b.style(bx, bw, by) : b.css(bx, bw);
        }, e, bv, arguments.length > 1);
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function(bw, bv) {
                    if (bv) {
                        var e = Z(bw, "opacity");
                        return e === "" ? "1" : e;
                    } else {
                        return bw.style.opacity;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(bx, bw, bD, by) {
            if (!bx || bx.nodeType === 3 || bx.nodeType === 8 ||!bx.style) {
                return;
            }
            var bB, bC, bz = b.camelCase(bw), bv = bx.style, bE = b.cssHooks[bz];
            bw = b.cssProps[bz] || bz;
            if (bD !== L) {
                bC = typeof bD;
                if (bC === "string" && (bB = I.exec(bD))) {
                    bD = ( + (bB[1] + 1)*+bB[2]) + parseFloat(b.css(bx, bw));
                    bC = "number";
                }
                if (bD == null || bC === "number" && isNaN(bD)) {
                    return;
                }
                if (bC === "number"&&!b.cssNumber[bz]) {
                    bD += "px";
                }
                if (!bE ||!("set" in bE) || (bD = bE.set(bx, bD)) !== L) {
                    try {
                        bv[bw] = bD;
                    } catch (bA) {}
                }
            } else {
                if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== L) {
                    return bB;
                }
                return bv[bw];
            }
        },
        css: function(by, bx, bv) {
            var bw, e;
            bx = b.camelCase(bx);
            e = b.cssHooks[bx];
            bx = b.cssProps[bx] || bx;
            if (bx === "cssFloat") {
                bx = "float";
            }
            if (e && "get" in e && (bw = e.get(by, true, bv)) !== L) {
                return bw;
            } else {
                if (Z) {
                    return Z(by, bx);
                }
            }
        },
        swap: function(by, bx, bz) {
            var e = {}, bw, bv;
            for (bv in bx) {
                e[bv] = by.style[bv];
                by.style[bv] = bx[bv];
            }
            bw = bz.call(by);
            for (bv in bx) {
                by.style[bv] = e[bv];
            }
            return bw;
        }
    });
    b.curCSS = b.css;
    if (av.defaultView && av.defaultView.getComputedStyle) {
        aJ = function(bA, bw) {
            var bv, bz, e, by, bx = bA.style;
            bw = bw.replace(y, "-$1").toLowerCase();
            if ((bz = bA.ownerDocument.defaultView) && (e = bz.getComputedStyle(bA, null))) {
                bv = e.getPropertyValue(bw);
                if (bv === ""&&!b.contains(bA.ownerDocument.documentElement, bA)) {
                    bv = b.style(bA, bw);
                }
            }
            if (!b.support.pixelMargin && e && aE.test(bw) && a1.test(bv)) {
                by = bx.width;
                bx.width = bv;
                bv = e.width;
                bx.width = by;
            }
            return bv;
        };
    }
    if (av.documentElement.currentStyle) {
        aY = function(bz, bw) {
            var bA, e, by, bv = bz.currentStyle && bz.currentStyle[bw], bx = bz.style;
            if (bv == null && bx && (by = bx[bw])) {
                bv = by;
            }
            if (a1.test(bv)) {
                bA = bx.left;
                e = bz.runtimeStyle && bz.runtimeStyle.left;
                if (e) {
                    bz.runtimeStyle.left = bz.currentStyle.left;
                }
                bx.left = bw === "fontSize" ? "1em" : bv;
                bv = bx.pixelLeft + "px";
                bx.left = bA;
                if (e) {
                    bz.runtimeStyle.left = e;
                }
            }
            return bv === "" ? "auto" : bv;
        };
    }
    Z = aJ || aY;
    function af(by, bw, bv) {
        var bz = bw === "width" ? by.offsetWidth: by.offsetHeight, bx = bw === "width" ? 1: 0, e = 4;
        if (bz > 0) {
            if (bv !== "border") {
                for (; bx < e; bx += 2) {
                    if (!bv) {
                        bz -= parseFloat(b.css(by, "padding" + G[bx])) || 0;
                    }
                    if (bv === "margin") {
                        bz += parseFloat(b.css(by, bv + G[bx])) || 0;
                    } else {
                        bz -= parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0;
                    }
                }
            }
            return bz + "px";
        }
        bz = Z(by, bw);
        if (bz < 0 || bz == null) {
            bz = by.style[bw];
        }
        if (a1.test(bz)) {
            return bz;
        }
        bz = parseFloat(bz) || 0;
        if (bv) {
            for (; bx < e; bx += 2) {
                bz += parseFloat(b.css(by, "padding" + G[bx])) || 0;
                if (bv !== "padding") {
                    bz += parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0;
                }
                if (bv === "margin") {
                    bz += parseFloat(b.css(by, bv + G[bx])) || 0;
                }
            }
        }
        return bz + "px";
    }
    b.each(["height", "width"], function(bv, e) {
        b.cssHooks[e] = {
            get: function(by, bx, bw) {
                if (bx) {
                    if (by.offsetWidth !== 0) {
                        return af(by, e, bw);
                    } else {
                        return b.swap(by, a9, function() {
                            return af(by, e, bw);
                        });
                    }
                }
            },
            set: function(bw, bx) {
                return bo.test(bx) ? bx + "px" : bx;
            }
        };
    });
    if (!b.support.opacity) {
        b.cssHooks.opacity = {
            get: function(bv, e) {
                return au.test((e && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : "";
            },
            set: function(by, bz) {
                var bx = by.style, bv = by.currentStyle, e = b.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")": "", bw = bv && bv.filter || bx.filter || "";
                bx.zoom = 1;
                if (bz >= 1 && b.trim(bw.replace(al, "")) === "") {
                    bx.removeAttribute("filter");
                    if (bv&&!bv.filter) {
                        return;
                    }
                }
                bx.filter = al.test(bw) ? bw.replace(al, e) : bw + " " + e;
            }
        };
    }
    b(function() {
        if (!b.support.reliableMarginRight) {
            b.cssHooks.marginRight = {
                get: function(bv, e) {
                    return b.swap(bv, {
                        display: "inline-block"
                    }, function() {
                        if (e) {
                            return Z(bv, "margin-right");
                        } else {
                            return bv.style.marginRight;
                        }
                    });
                }
            };
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.hidden = function(bw) {
            var bv = bw.offsetWidth, e = bw.offsetHeight;
            return (bv === 0 && e === 0) || (!b.support.reliableHiddenOffsets && ((bw.style && bw.style.display) || b.css(bw, "display")) === "none");
        };
        b.expr.filters.visible = function(e) {
            return !b.expr.filters.hidden(e);
        };
    }
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, bv) {
        b.cssHooks[e + bv] = {
            expand: function(by) {
                var bx, bz = typeof by === "string" ? by.split(" "): [by], bw = {};
                for (bx = 0; bx < 4; bx++) {
                    bw[e + G[bx] + bv] = bz[bx] || bz[bx - 2] || bz[0];
                }
                return bw;
            }
        };
    });
    var k = /%20/g, ap = /\[\]$/, bs = /\r?\n/g, bq = /#.*$/, aD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, a0 = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, aN = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, aR = /^(?:GET|HEAD)$/, c = /^\/\//, M = /\?/, a7 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, p = /^(?:select|textarea)/i, h = /\s+/, br = /([?&])_=[^&]*/, K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, z = b.fn.load, aa = {}, q = {}, aF, r, aW = ["*/"] + ["*"];
    try {
        aF = bm.href;
    } catch (aw) {
        aF = av.createElement("a");
        aF.href = "";
        aF = aF.href;
    }
    r = K.exec(aF.toLowerCase()) || [];
    function f(e) {
        return function(by, bA) {
            if (typeof by !== "string") {
                bA = by;
                by = "*";
            }
            if (b.isFunction(bA)) {
                var bx = by.toLowerCase().split(h), bw = 0, bz = bx.length, bv, bB, bC;
                for (; bw < bz; bw++) {
                    bv = bx[bw];
                    bC = /^\+/.test(bv);
                    if (bC) {
                        bv = bv.substr(1) || "*";
                    }
                    bB = e[bv] = e[bv] || [];
                    bB[bC ? "unshift": "push"](bA);
                }
            }
        };
    }
    function aX(bv, bE, bz, bD, bB, bx) {
        bB = bB || bE.dataTypes[0];
        bx = bx || {};
        bx[bB] = true;
        var bA = bv[bB], bw = 0, e = bA ? bA.length: 0, by = (bv === aa), bC;
        for (; bw < e && (by ||!bC); bw++) {
            bC = bA[bw](bE, bz, bD);
            if (typeof bC === "string") {
                if (!by || bx[bC]) {
                    bC = L;
                } else {
                    bE.dataTypes.unshift(bC);
                    bC = aX(bv, bE, bz, bD, bC, bx);
                }
            }
        }
        if ((by ||!bC)&&!bx["*"]) {
            bC = aX(bv, bE, bz, bD, "*", bx);
        }
        return bC;
    }
    function an(bw, bx) {
        var bv, e, by = b.ajaxSettings.flatOptions || {};
        for (bv in bx) {
            if (bx[bv] !== L) {
                (by[bv] ? bw : (e || (e = {})))[bv] = bx[bv];
            }
        }
        if (e) {
            b.extend(true, bw, e);
        }
    }
    b.fn.extend({
        load: function(bw, bz, bA) {
            if (typeof bw !== "string" && z) {
                return z.apply(this, arguments);
            } else {
                if (!this.length) {
                    return this;
                }
            }
            var by = bw.indexOf(" ");
            if (by >= 0) {
                var e = bw.slice(by, bw.length);
                bw = bw.slice(0, by);
            }
            var bx = "GET";
            if (bz) {
                if (b.isFunction(bz)) {
                    bA = bz;
                    bz = L;
                } else {
                    if (typeof bz === "object") {
                        bz = b.param(bz, b.ajaxSettings.traditional);
                        bx = "POST";
                    }
                }
            }
            var bv = this;
            b.ajax({
                url: bw,
                type: bx,
                dataType: "html",
                data: bz,
                complete: function(bC, bB, bD) {
                    bD = bC.responseText;
                    if (bC.isResolved()) {
                        bC.done(function(bE) {
                            bD = bE;
                        });
                        bv.html(e ? b("<div>").append(bD.replace(a7, "")).find(e) : bD);
                    }
                    if (bA) {
                        bv.each(bA, [bD, bB, bC]);
                    }
                }
            });
            return this;
        },
        serialize: function() {
            return b.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? b.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name&&!this.disabled && (this.checked || p.test(this.nodeName) || a0.test(this.type));
            }).map(function(e, bv) {
                var bw = b(this).val();
                return bw == null ? null : b.isArray(bw) ? b.map(bw, function(by, bx) {
                    return {
                        name: bv.name,
                        value: by.replace(bs, "\r\n")
                    };
                }) : {
                    name: bv.name,
                    value: bw.replace(bs, "\r\n")
                };
            }).get();
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, bv) {
        b.fn[bv] = function(bw) {
            return this.on(bv, bw);
        };
    });
    b.each(["get", "post"], function(e, bv) {
        b[bv] = function(bw, by, bz, bx) {
            if (b.isFunction(by)) {
                bx = bx || bz;
                bz = by;
                by = L;
            }
            return b.ajax({
                type: bv,
                url: bw,
                data: by,
                success: bz,
                dataType: bx
            });
        };
    });
    b.extend({
        getScript: function(e, bv) {
            return b.get(e, L, bv, "script");
        },
        getJSON: function(e, bv, bw) {
            return b.get(e, bv, bw, "json");
        },
        ajaxSetup: function(bv, e) {
            if (e) {
                an(bv, b.ajaxSettings);
            } else {
                e = bv;
                bv = b.ajaxSettings;
            }
            an(bv, e);
            return bv;
        },
        ajaxSettings: {
            url: aF,
            isLocal: aN.test(r[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": aW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": bd.String,
                "text html": true,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: f(aa),
        ajaxTransport: f(q),
        ajax: function(bz, bx) {
            if (typeof bz === "object") {
                bx = bz;
                bz = L;
            }
            bx = bx || {};
            var bD = b.ajaxSetup({}, bx), bS = bD.context || bD, bG = bS !== bD && (bS.nodeType || bS instanceof b) ? b(bS): b.event, bR = b.Deferred(), bN = b.Callbacks("once memory"), bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0, bw, bK, bJ = {
                readyState: 0,
                setRequestHeader: function(bT, bU) {
                    if (!bA) {
                        var e = bT.toLowerCase();
                        bT = bO[e] = bO[e] || bT;
                        bH[bT] = bU;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return bA === 2 ? bQ : null;
                },
                getResponseHeader: function(bT) {
                    var e;
                    if (bA === 2) {
                        if (!by) {
                            by = {};
                            while ((e = aD.exec(bQ))) {
                                by[e[1].toLowerCase()] = e[2];
                            }
                        }
                        e = by[bT.toLowerCase()];
                    }
                    return e === L ? null : e;
                },
                overrideMimeType: function(e) {
                    if (!bA) {
                        bD.mimeType = e;
                    }
                    return this;
                },
                abort: function(e) {
                    e = e || "abort";
                    if (bL) {
                        bL.abort(e);
                    }
                    bF(0, e);
                    return this;
                }
            };
            function bF(bZ, bU, b0, bW) {
                if (bA === 2) {
                    return;
                }
                bA = 2;
                if (bE) {
                    clearTimeout(bE);
                }
                bL = L;
                bQ = bW || "";
                bJ.readyState = bZ > 0 ? 4 : 0;
                var bT, b4, b3, bX = bU, bY = b0 ? bk(bD, bJ, b0): L, bV, b2;
                if (bZ >= 200 && bZ < 300 || bZ === 304) {
                    if (bD.ifModified) {
                        if ((bV = bJ.getResponseHeader("Last-Modified"))) {
                            b.lastModified[bC] = bV;
                        }
                        if ((b2 = bJ.getResponseHeader("Etag"))) {
                            b.etag[bC] = b2;
                        }
                    }
                    if (bZ === 304) {
                        bX = "notmodified";
                        bT = true;
                    } else {
                        try {
                            b4 = F(bD, bY);
                            bX = "success";
                            bT = true;
                        } catch (b1) {
                            bX = "parsererror";
                            b3 = b1;
                        }
                    }
                } else {
                    b3 = bX;
                    if (!bX || bZ) {
                        bX = "error";
                        if (bZ < 0) {
                            bZ = 0;
                        }
                    }
                }
                bJ.status = bZ;
                bJ.statusText = "" + (bU || bX);
                if (bT) {
                    bR.resolveWith(bS, [b4, bX, bJ]);
                } else {
                    bR.rejectWith(bS, [bJ, bX, b3]);
                }
                bJ.statusCode(bB);
                bB = L;
                if (bw) {
                    bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4: b3]);
                }
                bN.fireWith(bS, [bJ, bX]);
                if (bw) {
                    bG.trigger("ajaxComplete", [bJ, bD]);
                    if (!(--b.active)) {
                        b.event.trigger("ajaxStop");
                    }
                }
            }
            bR.promise(bJ);
            bJ.success = bJ.done;
            bJ.error = bJ.fail;
            bJ.complete = bN.add;
            bJ.statusCode = function(bT) {
                if (bT) {
                    var e;
                    if (bA < 2) {
                        for (e in bT) {
                            bB[e] = [bB[e], bT[e]];
                        }
                    } else {
                        e = bT[bJ.status];
                        bJ.then(e, e);
                    }
                }
                return this;
            };
            bD.url = ((bz || bD.url) + "").replace(bq, "").replace(c, r[1] + "//");
            bD.dataTypes = b.trim(bD.dataType || "*").toLowerCase().split(h);
            if (bD.crossDomain == null) {
                bI = K.exec(bD.url.toLowerCase());
                bD.crossDomain=!!(bI && (bI[1] != r[1] || bI[2] != r[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (r[3] || (r[1] === "http:" ? 80 : 443))));
            }
            if (bD.data && bD.processData && typeof bD.data !== "string") {
                bD.data = b.param(bD.data, bD.traditional);
            }
            aX(aa, bD, bx, bJ);
            if (bA === 2) {
                return false;
            }
            bw = bD.global;
            bD.type = bD.type.toUpperCase();
            bD.hasContent=!aR.test(bD.type);
            if (bw && b.active++===0) {
                b.event.trigger("ajaxStart");
            }
            if (!bD.hasContent) {
                if (bD.data) {
                    bD.url += (M.test(bD.url) ? "&" : "?") + bD.data;
                    delete bD.data;
                }
                bC = bD.url;
                if (bD.cache === false) {
                    var bv = b.now(), bP = bD.url.replace(br, "$1_=" + bv);
                    bD.url = bP + ((bP === bD.url) ? (M.test(bD.url) ? "&" : "?") + "_=" + bv : "");
                }
            }
            if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
                bJ.setRequestHeader("Content-Type", bD.contentType);
            }
            if (bD.ifModified) {
                bC = bC || bD.url;
                if (b.lastModified[bC]) {
                    bJ.setRequestHeader("If-Modified-Since", b.lastModified[bC]);
                }
                if (b.etag[bC]) {
                    bJ.setRequestHeader("If-None-Match", b.etag[bC]);
                }
            }
            bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : bD.accepts["*"]);
            for (bK in bD.headers) {
                bJ.setRequestHeader(bK, bD.headers[bK]);
            }
            if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
                bJ.abort();
                return false;
            }
            for (bK in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                bJ[bK](bD[bK]);
            }
            bL = aX(q, bD, bx, bJ);
            if (!bL) {
                bF( - 1, "No Transport");
            } else {
                bJ.readyState = 1;
                if (bw) {
                    bG.trigger("ajaxSend", [bJ, bD]);
                }
                if (bD.async && bD.timeout > 0) {
                    bE = setTimeout(function() {
                        bJ.abort("timeout");
                    }, bD.timeout);
                }
                try {
                    bA = 1;
                    bL.send(bH, bF);
                } catch (bM) {
                    if (bA < 2) {
                        bF( - 1, bM);
                    } else {
                        throw bM;
                    }
                }
            }
            return bJ;
        },
        param: function(e, bw) {
            var bv = [], by = function(bz, bA) {
                bA = b.isFunction(bA) ? bA() : bA;
                bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA);
            };
            if (bw === L) {
                bw = b.ajaxSettings.traditional;
            }
            if (b.isArray(e) || (e.jquery&&!b.isPlainObject(e))) {
                b.each(e, function() {
                    by(this.name, this.value);
                });
            } else {
                for (var bx in e) {
                    u(bx, e[bx], bw, by);
                }
            }
            return bv.join("&").replace(k, "+");
        }
    });
    function u(bw, by, bv, bx) {
        if (b.isArray(by)) {
            b.each(by, function(bA, bz) {
                if (bv || ap.test(bw)) {
                    bx(bw, bz);
                } else {
                    u(bw + "[" + (typeof bz === "object" ? bA : "") + "]", bz, bv, bx);
                }
            });
        } else {
            if (!bv && b.type(by) === "object") {
                for (var e in by) {
                    u(bw + "[" + e + "]", by[e], bv, bx);
                }
            } else {
                bx(bw, by);
            }
        }
    }
    b.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    function bk(bD, bC, bz) {
        var bv = bD.contents, bB = bD.dataTypes, bw = bD.responseFields, by, bA, bx, e;
        for (bA in bw) {
            if (bA in bz) {
                bC[bw[bA]] = bz[bA];
            }
        }
        while (bB[0] === "*") {
            bB.shift();
            if (by === L) {
                by = bD.mimeType || bC.getResponseHeader("content-type");
            }
        }
        if (by) {
            for (bA in bv) {
                if (bv[bA] && bv[bA].test(by)) {
                    bB.unshift(bA);
                    break;
                }
            }
        }
        if (bB[0] in bz) {
            bx = bB[0];
        } else {
            for (bA in bz) {
                if (!bB[0] || bD.converters[bA + " " + bB[0]]) {
                    bx = bA;
                    break;
                }
                if (!e) {
                    e = bA;
                }
            }
            bx = bx || e;
        }
        if (bx) {
            if (bx !== bB[0]) {
                bB.unshift(bx);
            }
            return bz[bx];
        }
    }
    function F(bH, bz) {
        if (bH.dataFilter) {
            bz = bH.dataFilter(bz, bH.dataType);
        }
        var bD = bH.dataTypes, bG = {}, bA, bE, bw = bD.length, bB, bC = bD[0], bx, by, bF, bv, e;
        for (bA = 1; bA < bw; bA++) {
            if (bA === 1) {
                for (bE in bH.converters) {
                    if (typeof bE === "string") {
                        bG[bE.toLowerCase()] = bH.converters[bE];
                    }
                }
            }
            bx = bC;
            bC = bD[bA];
            if (bC === "*") {
                bC = bx;
            } else {
                if (bx !== "*" && bx !== bC) {
                    by = bx + " " + bC;
                    bF = bG[by] || bG["* " + bC];
                    if (!bF) {
                        e = L;
                        for (bv in bG) {
                            bB = bv.split(" ");
                            if (bB[0] === bx || bB[0] === "*") {
                                e = bG[bB[1] + " " + bC];
                                if (e) {
                                    bv = bG[bv];
                                    if (bv === true) {
                                        bF = e;
                                    } else {
                                        if (e === true) {
                                            bF = bv;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (!(bF || e)) {
                        b.error("No conversion from " + by.replace(" ", " to "));
                    }
                    if (bF !== true) {
                        bz = bF ? bF(bz) : e(bv(bz));
                    }
                }
            }
        }
        return bz;
    }
    var aC = b.now(), t = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return b.expando + "_" + (aC++);
        }
    });
    b.ajaxPrefilter("json jsonp", function(bD, bA, bC) {
        var bx = (typeof bD.data === "string") && /^application\/x\-www\-form\-urlencoded/.test(bD.contentType);
        if (bD.dataTypes[0] === "jsonp" || bD.jsonp !== false && (t.test(bD.url) || bx && t.test(bD.data))) {
            var bB, bw = bD.jsonpCallback = b.isFunction(bD.jsonpCallback) ? bD.jsonpCallback(): bD.jsonpCallback, bz = bd[bw], e = bD.url, by = bD.data, bv = "$1" + bw + "$2";
            if (bD.jsonp !== false) {
                e = e.replace(t, bv);
                if (bD.url === e) {
                    if (bx) {
                        by = by.replace(t, bv);
                    }
                    if (bD.data === by) {
                        e += (/\?/.test(e) ? "&" : "?") + bD.jsonp + "=" + bw;
                    }
                }
            }
            bD.url = e;
            bD.data = by;
            bd[bw] = function(bE) {
                bB = [bE];
            };
            bC.always(function() {
                bd[bw] = bz;
                if (bB && b.isFunction(bz)) {
                    bd[bw](bB[0]);
                }
            });
            bD.converters["script json"] = function() {
                if (!bB) {
                    b.error(bw + " was not called");
                }
                return bB[0];
            };
            bD.dataTypes[0] = "json";
            return "script";
        }
    });
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                b.globalEval(e);
                return e;
            }
        }
    });
    b.ajaxPrefilter("script", function(e) {
        if (e.cache === L) {
            e.cache = false;
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false;
        }
    });
    b.ajaxTransport("script", function(bw) {
        if (bw.crossDomain) {
            var e, bv = av.head || av.getElementsByTagName("head")[0] || av.documentElement;
            return {
                send: function(bx, by) {
                    e = av.createElement("script");
                    e.async = "async";
                    if (bw.scriptCharset) {
                        e.charset = bw.scriptCharset;
                    }
                    e.src = bw.url;
                    e.onload = e.onreadystatechange = function(bA, bz) {
                        if (bz ||!e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bv && e.parentNode) {
                                bv.removeChild(e);
                            }
                            e = L;
                            if (!bz) {
                                by(200, "success");
                            }
                        }
                    };
                    bv.insertBefore(e, bv.firstChild);
                },
                abort: function() {
                    if (e) {
                        e.onload(0, 1);
                    }
                }
            };
        }
    });
    var A = bd.ActiveXObject ? function() {
        for (var e in N) {
            N[e](0, 1);
        }
    }
    : false, x = 0, N;
    function aM() {
        try {
            return new bd.XMLHttpRequest();
        } catch (bv) {}
    }
    function ak() {
        try {
            return new bd.ActiveXObject("Microsoft.XMLHTTP");
        } catch (bv) {}
    }
    b.ajaxSettings.xhr = bd.ActiveXObject ? function() {
        return !this.isLocal && aM() || ak();
    } : aM;
    (function(e) {
        b.extend(b.support, {
            ajax: !!e,
            cors: !!e && ("withCredentials" in e)
        });
    })(b.ajaxSettings.xhr());
    if (b.support.ajax) {
        b.ajaxTransport(function(e) {
            if (!e.crossDomain || b.support.cors) {
                var bv;
                return {
                    send: function(bB, bw) {
                        var bA = e.xhr(), bz, by;
                        if (e.username) {
                            bA.open(e.type, e.url, e.async, e.username, e.password);
                        } else {
                            bA.open(e.type, e.url, e.async);
                        }
                        if (e.xhrFields) {
                            for (by in e.xhrFields) {
                                bA[by] = e.xhrFields[by];
                            }
                        }
                        if (e.mimeType && bA.overrideMimeType) {
                            bA.overrideMimeType(e.mimeType);
                        }
                        if (!e.crossDomain&&!bB["X-Requested-With"]) {
                            bB["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (by in bB) {
                                bA.setRequestHeader(by, bB[by]);
                            }
                        } catch (bx) {}
                        bA.send((e.hasContent && e.data) || null);
                        bv = function(bK, bE) {
                            var bF, bD, bC, bI, bH;
                            try {
                                if (bv && (bE || bA.readyState === 4)) {
                                    bv = L;
                                    if (bz) {
                                        bA.onreadystatechange = b.noop;
                                        if (A) {
                                            delete N[bz];
                                        }
                                    }
                                    if (bE) {
                                        if (bA.readyState !== 4) {
                                            bA.abort();
                                        }
                                    } else {
                                        bF = bA.status;
                                        bC = bA.getAllResponseHeaders();
                                        bI = {};
                                        bH = bA.responseXML;
                                        if (bH && bH.documentElement) {
                                            bI.xml = bH;
                                        }
                                        try {
                                            bI.text = bA.responseText;
                                        } catch (bK) {}
                                        try {
                                            bD = bA.statusText;
                                        } catch (bJ) {
                                            bD = "";
                                        }
                                        if (!bF && e.isLocal&&!e.crossDomain) {
                                            bF = bI.text ? 200 : 404;
                                        } else {
                                            if (bF === 1223) {
                                                bF = 204;
                                            }
                                        }
                                    }
                                }
                            } catch (bG) {
                                if (!bE) {
                                    bw( - 1, bG);
                                }
                            }
                            if (bI) {
                                bw(bF, bD, bI, bC);
                            }
                        };
                        if (!e.async || bA.readyState === 4) {
                            bv();
                        } else {
                            bz=++x;
                            if (A) {
                                if (!N) {
                                    N = {};
                                    b(bd).unload(A);
                                }
                                N[bz] = bv;
                            }
                            bA.onreadystatechange = bv;
                        }
                    },
                    abort: function() {
                        if (bv) {
                            bv(0, 1);
                        }
                    }
                };
            }
        });
    }
    var Q = {}, ba, m, aB = /^(?:toggle|show|hide)$/, aU = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, a4, aI = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], a5;
    b.fn.extend({
        show: function(bx, bA, bz) {
            var bw, by;
            if (bx || bx === 0) {
                return this.animate(a2("show", 3), bx, bA, bz);
            } else {
                for (var bv = 0, e = this.length; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = bw.style.display;
                        if (!b._data(bw, "olddisplay") && by === "none") {
                            by = bw.style.display = "";
                        }
                        if ((by === "" && b.css(bw, "display") === "none") ||!b.contains(bw.ownerDocument.documentElement, bw)) {
                            b._data(bw, "olddisplay", w(bw.nodeName));
                        }
                    }
                }
                for (bv = 0; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = bw.style.display;
                        if (by === "" || by === "none") {
                            bw.style.display = b._data(bw, "olddisplay") || "";
                        }
                    }
                }
                return this;
            }
        },
        hide: function(bx, bA, bz) {
            if (bx || bx === 0) {
                return this.animate(a2("hide", 3), bx, bA, bz);
            } else {
                var bw, by, bv = 0, e = this.length;
                for (; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = b.css(bw, "display");
                        if (by !== "none"&&!b._data(bw, "olddisplay")) {
                            b._data(bw, "olddisplay", by);
                        }
                    }
                }
                for (bv = 0; bv < e; bv++) {
                    if (this[bv].style) {
                        this[bv].style.display = "none";
                    }
                }
                return this;
            }
        },
        _toggle: b.fn.toggle,
        toggle: function(bw, bv, bx) {
            var e = typeof bw === "boolean";
            if (b.isFunction(bw) && b.isFunction(bv)) {
                this._toggle.apply(this, arguments);
            } else {
                if (bw == null || e) {
                    this.each(function() {
                        var by = e ? bw: b(this).is(":hidden");
                        b(this)[by ? "show": "hide"]();
                    });
                } else {
                    this.animate(a2("toggle", 3), bw, bv, bx);
                }
            }
            return this;
        },
        fadeTo: function(e, bx, bw, bv) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: bx
            }, e, bw, bv);
        },
        animate: function(bz, bw, by, bx) {
            var e = b.speed(bw, by, bx);
            if (b.isEmptyObject(bz)) {
                return this.each(e.complete, [false]);
            }
            bz = b.extend({}, bz);
            function bv() {
                if (e.queue === false) {
                    b._mark(this);
                }
                var bE = b.extend({}, e), bL = this.nodeType === 1, bJ = bL && b(this).is(":hidden"), bB, bG, bD, bK, bN, bF, bI, bC, bH, bM, bA;
                bE.animatedProperties = {};
                for (bD in bz) {
                    bB = b.camelCase(bD);
                    if (bD !== bB) {
                        bz[bB] = bz[bD];
                        delete bz[bD];
                    }
                    if ((bN = b.cssHooks[bB]) && "expand" in bN) {
                        bF = bN.expand(bz[bB]);
                        delete bz[bB];
                        for (bD in bF) {
                            if (!(bD in bz)) {
                                bz[bD] = bF[bD];
                            }
                        }
                    }
                }
                for (bB in bz) {
                    bG = bz[bB];
                    if (b.isArray(bG)) {
                        bE.animatedProperties[bB] = bG[1];
                        bG = bz[bB] = bG[0];
                    } else {
                        bE.animatedProperties[bB] = bE.specialEasing && bE.specialEasing[bB] || bE.easing || "swing";
                    }
                    if (bG === "hide" && bJ || bG === "show"&&!bJ) {
                        return bE.complete.call(this);
                    }
                    if (bL && (bB === "height" || bB === "width")) {
                        bE.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
                            if (!b.support.inlineBlockNeedsLayout || w(this.nodeName) === "inline") {
                                this.style.display = "inline-block";
                            } else {
                                this.style.zoom = 1;
                            }
                        }
                    }
                }
                if (bE.overflow != null) {
                    this.style.overflow = "hidden";
                }
                for (bD in bz) {
                    bK = new b.fx(this, bE, bD);
                    bG = bz[bD];
                    if (aB.test(bG)) {
                        bA = b._data(this, "toggle" + bD) || (bG === "toggle" ? bJ ? "show" : "hide" : 0);
                        if (bA) {
                            b._data(this, "toggle" + bD, bA === "show" ? "hide" : "show");
                            bK[bA]();
                        } else {
                            bK[bG]();
                        }
                    } else {
                        bI = aU.exec(bG);
                        bC = bK.cur();
                        if (bI) {
                            bH = parseFloat(bI[2]);
                            bM = bI[3] || (b.cssNumber[bD] ? "" : "px");
                            if (bM !== "px") {
                                b.style(this, bD, (bH || 1) + bM);
                                bC = ((bH || 1) / bK.cur()) * bC;
                                b.style(this, bD, bC + bM);
                            }
                            if (bI[1]) {
                                bH = ((bI[1] === "-="?-1 : 1) * bH) + bC;
                            }
                            bK.custom(bC, bH, bM);
                        } else {
                            bK.custom(bC, bG, "");
                        }
                    }
                }
                return true;
            }
            return e.queue === false ? this.each(bv) : this.queue(e.queue, bv);
        },
        stop: function(bw, bv, e) {
            if (typeof bw !== "string") {
                e = bv;
                bv = bw;
                bw = L;
            }
            if (bv && bw !== false) {
                this.queue(bw || "fx", []);
            }
            return this.each(function() {
                var bx, by = false, bA = b.timers, bz = b._data(this);
                if (!e) {
                    b._unmark(true, this);
                }
                function bB(bE, bF, bD) {
                    var bC = bF[bD];
                    b.removeData(bE, bD, true);
                    bC.stop(e);
                }
                if (bw == null) {
                    for (bx in bz) {
                        if (bz[bx] && bz[bx].stop && bx.indexOf(".run") === bx.length - 4) {
                            bB(this, bz, bx);
                        }
                    }
                } else {
                    if (bz[bx = bw + ".run"] && bz[bx].stop) {
                        bB(this, bz, bx);
                    }
                }
                for (bx = bA.length; bx--;) {
                    if (bA[bx].elem === this && (bw == null || bA[bx].queue === bw)) {
                        if (e) {
                            bA[bx](true);
                        } else {
                            bA[bx].saveState();
                        }
                        by = true;
                        bA.splice(bx, 1);
                    }
                }
                if (!(e && by)) {
                    b.dequeue(this, bw);
                }
            });
        }
    });
    function bi() {
        setTimeout(at, 0);
        return (a5 = b.now());
    }
    function at() {
        a5 = L;
    }
    function a2(bv, e) {
        var bw = {};
        b.each(aI.concat.apply([], aI.slice(0, e)), function() {
            bw[this] = bv;
        });
        return bw;
    }
    b.each({
        slideDown: a2("show", 1),
        slideUp: a2("hide", 1),
        slideToggle: a2("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, bv) {
        b.fn[e] = function(bw, by, bx) {
            return this.animate(bv, bw, by, bx);
        };
    });
    b.extend({
        speed: function(bw, bx, bv) {
            var e = bw && typeof bw === "object" ? b.extend({}, bw): {
                complete: bv ||!bv && bx || b.isFunction(bw) && bw,
                duration: bw,
                easing: bv && bx || bx&&!b.isFunction(bx) && bx
            };
            e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
            if (e.queue == null || e.queue === true) {
                e.queue = "fx";
            }
            e.old = e.complete;
            e.complete = function(by) {
                if (b.isFunction(e.old)) {
                    e.old.call(this);
                }
                if (e.queue) {
                    b.dequeue(this, e.queue);
                } else {
                    if (by !== false) {
                        b._unmark(this);
                    }
                }
            };
            return e;
        },
        easing: {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return ( - Math.cos(e * Math.PI) / 2) + 0.5;
            }
        },
        timers: [],
        fx: function(bv, e, bw) {
            this.options = e;
            this.elem = bv;
            this.prop = bw;
            e.orig = e.orig || {};
        }
    });
    b.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }(b.fx.step[this.prop] || b.fx.step._default)(this);
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }
            var e, bv = b.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bv))?!bv || bv === "auto" ? 0 : bv : e;
        },
        custom: function(bz, by, bx) {
            var e = this, bw = b.fx;
            this.startTime = a5 || bi();
            this.end = by;
            this.now = this.start = bz;
            this.pos = this.state = 0;
            this.unit = bx || this.unit || (b.cssNumber[this.prop] ? "" : "px");
            function bv(bA) {
                return e.step(bA);
            }
            bv.queue = this.options.queue;
            bv.elem = this.elem;
            bv.saveState = function() {
                if (b._data(e.elem, "fxshow" + e.prop) === L) {
                    if (e.options.hide) {
                        b._data(e.elem, "fxshow" + e.prop, e.start);
                    } else {
                        if (e.options.show) {
                            b._data(e.elem, "fxshow" + e.prop, e.end);
                        }
                    }
                }
            };
            if (bv() && b.timers.push(bv)&&!a4) {
                a4 = setInterval(bw.tick, bw.interval);
            }
        },
        show: function() {
            var e = b._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || b.style(this.elem, this.prop);
            this.options.show = true;
            if (e !== L) {
                this.custom(this.cur(), e);
            } else {
                this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            }
            b(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] = b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0);
        },
        step: function(by) {
            var bA, bB, bv, bx = a5 || bi(), e = true, bz = this.elem, bw = this.options;
            if (by || bx >= bw.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                bw.animatedProperties[this.prop] = true;
                for (bA in bw.animatedProperties) {
                    if (bw.animatedProperties[bA] !== true) {
                        e = false;
                    }
                }
                if (e) {
                    if (bw.overflow != null&&!b.support.shrinkWrapBlocks) {
                        b.each(["", "X", "Y"], function(bC, bD) {
                            bz.style["overflow" + bD] = bw.overflow[bC];
                        });
                    }
                    if (bw.hide) {
                        b(bz).hide();
                    }
                    if (bw.hide || bw.show) {
                        for (bA in bw.animatedProperties) {
                            b.style(bz, bA, bw.orig[bA]);
                            b.removeData(bz, "fxshow" + bA, true);
                            b.removeData(bz, "toggle" + bA, true);
                        }
                    }
                    bv = bw.complete;
                    if (bv) {
                        bw.complete = false;
                        bv.call(bz);
                    }
                }
                return false;
            } else {
                if (bw.duration == Infinity) {
                    this.now = bx;
                } else {
                    bB = bx - this.startTime;
                    this.state = bB / bw.duration;
                    this.pos = b.easing[bw.animatedProperties[this.prop]](this.state, bB, 0, 1, bw.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos);
                }
                this.update();
            }
            return true;
        }
    };
    b.extend(b.fx, {
        tick: function() {
            var bw, bv = b.timers, e = 0;
            for (; e < bv.length; e++) {
                bw = bv[e];
                if (!bw() && bv[e] === bw) {
                    bv.splice(e--, 1);
                }
            }
            if (!bv.length) {
                b.fx.stop();
            }
        },
        interval: 13,
        stop: function() {
            clearInterval(a4);
            a4 = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                b.style(e.elem, "opacity", e.now);
            },
            _default: function(e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = e.now + e.unit;
                } else {
                    e.elem[e.prop] = e.now;
                }
            }
        }
    });
    b.each(aI.concat.apply([], aI), function(e, bv) {
        if (bv.indexOf("margin")) {
            b.fx.step[bv] = function(bw) {
                b.style(bw.elem, bv, Math.max(0, bw.now) + bw.unit);
            };
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.animated = function(e) {
            return b.grep(b.timers, function(bv) {
                return e === bv.elem;
            }).length;
        };
    }
    function w(bx) {
        if (!Q[bx]) {
            var e = av.body, bv = b("<" + bx + ">").appendTo(e), bw = bv.css("display");
            bv.remove();
            if (bw === "none" || bw === "") {
                if (!ba) {
                    ba = av.createElement("iframe");
                    ba.frameBorder = ba.width = ba.height = 0;
                }
                e.appendChild(ba);
                if (!m ||!ba.createElement) {
                    m = (ba.contentWindow || ba.contentDocument).document;
                    m.write((b.support.boxModel ? "<!doctype html>" : "") + "<html><body>");
                    m.close();
                }
                bv = m.createElement(bx);
                m.body.appendChild(bv);
                bw = b.css(bv, "display");
                e.removeChild(ba);
            }
            Q[bx] = bw;
        }
        return Q[bx];
    }
    var a8, V = /^t(?:able|d|h)$/i, ad = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in av.documentElement) {
        a8 = function(by, bH, bw, bB) {
            try {
                bB = by.getBoundingClientRect();
            } catch (bF) {}
            if (!bB ||!b.contains(bw, by)) {
                return bB ? {
                    top: bB.top,
                    left: bB.left
                } : {
                    top: 0,
                    left: 0
                };
            }
            var bC = bH.body, bD = aL(bH), bA = bw.clientTop || bC.clientTop || 0, bE = bw.clientLeft || bC.clientLeft || 0, bv = bD.pageYOffset || b.support.boxModel && bw.scrollTop || bC.scrollTop, bz = bD.pageXOffset || b.support.boxModel && bw.scrollLeft || bC.scrollLeft, bG = bB.top + bv - bA, bx = bB.left + bz - bE;
            return {
                top: bG,
                left: bx
            };
        };
    } else {
        a8 = function(bz, bE, bx) {
            var bC, bw = bz.offsetParent, bv = bz, bA = bE.body, bB = bE.defaultView, e = bB ? bB.getComputedStyle(bz, null): bz.currentStyle, bD = bz.offsetTop, by = bz.offsetLeft;
            while ((bz = bz.parentNode) && bz !== bA && bz !== bx) {
                if (b.support.fixedPosition && e.position === "fixed") {
                    break;
                }
                bC = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle;
                bD -= bz.scrollTop;
                by -= bz.scrollLeft;
                if (bz === bw) {
                    bD += bz.offsetTop;
                    by += bz.offsetLeft;
                    if (b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells && V.test(bz.nodeName))) {
                        bD += parseFloat(bC.borderTopWidth) || 0;
                        by += parseFloat(bC.borderLeftWidth) || 0;
                    }
                    bv = bw;
                    bw = bz.offsetParent;
                }
                if (b.support.subtractsBorderForOverflowNotVisible && bC.overflow !== "visible") {
                    bD += parseFloat(bC.borderTopWidth) || 0;
                    by += parseFloat(bC.borderLeftWidth) || 0;
                }
                e = bC;
            }
            if (e.position === "relative" || e.position === "static") {
                bD += bA.offsetTop;
                by += bA.offsetLeft;
            }
            if (b.support.fixedPosition && e.position === "fixed") {
                bD += Math.max(bx.scrollTop, bA.scrollTop);
                by += Math.max(bx.scrollLeft, bA.scrollLeft);
            }
            return {
                top: bD,
                left: by
            };
        };
    }
    b.fn.offset = function(e) {
        if (arguments.length) {
            return e === L ? this : this.each(function(bx) {
                b.offset.setOffset(this, e, bx);
            });
        }
        var bv = this[0], bw = bv && bv.ownerDocument;
        if (!bw) {
            return null;
        }
        if (bv === bw.body) {
            return b.offset.bodyOffset(bv);
        }
        return a8(bv, bw, bw.documentElement);
    };
    b.offset = {
        bodyOffset: function(e) {
            var bw = e.offsetTop, bv = e.offsetLeft;
            if (b.support.doesNotIncludeMarginInBodyOffset) {
                bw += parseFloat(b.css(e, "marginTop")) || 0;
                bv += parseFloat(b.css(e, "marginLeft")) || 0;
            }
            return {
                top: bw,
                left: bv
            };
        },
        setOffset: function(bx, bG, bA) {
            var bB = b.css(bx, "position");
            if (bB === "static") {
                bx.style.position = "relative";
            }
            var bz = b(bx), bv = bz.offset(), e = b.css(bx, "top"), bE = b.css(bx, "left"), bF = (bB === "absolute" || bB === "fixed") && b.inArray("auto", [e, bE])>-1, bD = {}, bC = {}, bw, by;
            if (bF) {
                bC = bz.position();
                bw = bC.top;
                by = bC.left;
            } else {
                bw = parseFloat(e) || 0;
                by = parseFloat(bE) || 0;
            }
            if (b.isFunction(bG)) {
                bG = bG.call(bx, bA, bv);
            }
            if (bG.top != null) {
                bD.top = (bG.top - bv.top) + bw;
            }
            if (bG.left != null) {
                bD.left = (bG.left - bv.left) + by;
            }
            if ("using" in bG) {
                bG.using.call(bx, bD);
            } else {
                bz.css(bD);
            }
        }
    };
    b.fn.extend({
        position: function() {
            if (!this[0]) {
                return null;
            }
            var bw = this[0], bv = this.offsetParent(), bx = this.offset(), e = ad.test(bv[0].nodeName) ? {
                top: 0,
                left: 0
            }
            : bv.offset();
            bx.top -= parseFloat(b.css(bw, "marginTop")) || 0;
            bx.left -= parseFloat(b.css(bw, "marginLeft")) || 0;
            e.top += parseFloat(b.css(bv[0], "borderTopWidth")) || 0;
            e.left += parseFloat(b.css(bv[0], "borderLeftWidth")) || 0;
            return {
                top: bx.top - e.top,
                left: bx.left - e.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || av.body;
                while (e && (!ad.test(e.nodeName) && b.css(e, "position") === "static")) {
                    e = e.offsetParent;
                }
                return e;
            });
        }
    });
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(bw, bv) {
        var e = /Y/.test(bv);
        b.fn[bw] = function(bx) {
            return b.access(this, function(by, bB, bA) {
                var bz = aL(by);
                if (bA === L) {
                    return bz ? (bv in bz) ? bz[bv] : b.support.boxModel && bz.document.documentElement[bB] || bz.document.body[bB] : by[bB];
                }
                if (bz) {
                    bz.scrollTo(!e ? bA : b(bz).scrollLeft(), e ? bA : b(bz).scrollTop());
                } else {
                    by[bB] = bA;
                }
            }, bw, bx, arguments.length, null);
        };
    });
    function aL(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function(bw, bx) {
        var bv = "client" + bw, e = "scroll" + bw, by = "offset" + bw;
        b.fn["inner" + bw] = function() {
            var bz = this[0];
            return bz ? bz.style ? parseFloat(b.css(bz, bx, "padding")) : this[bx]() : null;
        };
        b.fn["outer" + bw] = function(bA) {
            var bz = this[0];
            return bz ? bz.style ? parseFloat(b.css(bz, bx, bA ? "margin" : "border")) : this[bx]() : null;
        };
        b.fn[bx] = function(bz) {
            return b.access(this, function(bC, bB, bD) {
                var bF, bE, bG, bA;
                if (b.isWindow(bC)) {
                    bF = bC.document;
                    bE = bF.documentElement[bv];
                    return b.support.boxModel && bE || bF.body && bF.body[bv] || bE;
                }
                if (bC.nodeType === 9) {
                    bF = bC.documentElement;
                    if (bF[bv] >= bF[e]) {
                        return bF[bv];
                    }
                    return Math.max(bC.body[e], bF[e], bC.body[by], bF[by]);
                }
                if (bD === L) {
                    bG = b.css(bC, bB);
                    bA = parseFloat(bG);
                    return b.isNumeric(bA) ? bA : bG;
                }
                b(bC).css(bB, bD);
            }, bx, bz, arguments.length, null);
        };
    });
    bd.jQuery = bd.$ = b;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function() {
            return b;
        });
    }
})(window);
/*! jQuery UI - v1.8.19 - 2012-04-16
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, d) {
    a.ui = a.ui || {};
    if (a.ui.version) {
        return;
    }
    a.extend(a.ui, {
        version: "@VERSION",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    });
    a.fn.extend({
        propAttr: a.fn.prop || a.fn.attr,
        _focus: a.fn.focus,
        focus: function(e, f) {
            return typeof e === "number" ? this.each(function() {
                var g = this;
                setTimeout(function() {
                    a(g).focus();
                    if (f) {
                        f.call(g);
                    }
                }, e);
            }) : this._focus.apply(this, arguments);
        },
        scrollParent: function() {
            var e;
            if ((a.browser.msie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                e = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(a.curCSS(this, "position", 1)) && (/(auto|scroll)/).test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
                }).eq(0);
            } else {
                e = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
                }).eq(0);
            }
            return (/fixed/).test(this.css("position")) ||!e.length ? a(document) : e;
        },
        zIndex: function(h) {
            if (h !== d) {
                return this.css("zIndex", h);
            }
            if (this.length) {
                var f = a(this[0]), e, g;
                while (f.length && f[0] !== document) {
                    e = f.css("position");
                    if (e === "absolute" || e === "relative" || e === "fixed") {
                        g = parseInt(f.css("zIndex"), 10);
                        if (!isNaN(g) && g !== 0) {
                            return g;
                        }
                    }
                    f = f.parent();
                }
            }
            return 0;
        },
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    });
    a.each(["Width", "Height"], function(g, e) {
        var f = e === "Width" ? ["Left", "Right"]: ["Top", "Bottom"], h = e.toLowerCase(), k = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        function j(m, l, i, n) {
            a.each(f, function() {
                l -= parseFloat(a.curCSS(m, "padding" + this, true)) || 0;
                if (i) {
                    l -= parseFloat(a.curCSS(m, "border" + this + "Width", true)) || 0;
                }
                if (n) {
                    l -= parseFloat(a.curCSS(m, "margin" + this, true)) || 0;
                }
            });
            return l;
        }
        a.fn["inner" + e] = function(i) {
            if (i === d) {
                return k["inner" + e].call(this);
            }
            return this.each(function() {
                a(this).css(h, j(this, i) + "px");
            });
        };
        a.fn["outer" + e] = function(i, l) {
            if (typeof i !== "number") {
                return k["outer" + e].call(this, i);
            }
            return this.each(function() {
                a(this).css(h, j(this, i, true, l) + "px");
            });
        };
    });
    function c(g, e) {
        var j = g.nodeName.toLowerCase();
        if ("area" === j) {
            var i = g.parentNode, h = i.name, f;
            if (!g.href ||!h || i.nodeName.toLowerCase() !== "map") {
                return false;
            }
            f = a("img[usemap=#" + h + "]")[0];
            return !!f && b(f);
        }
        return (/input|select|textarea|button|object/.test(j)?!g.disabled : "a" == j ? g.href || e : e) && b(g);
    }
    function b(e) {
        return !a(e).parents().andSelf().filter(function() {
            return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this);
        }).length;
    }
    a.extend(a.expr[":"], {
        data: function(g, f, e) {
            return !!a.data(g, e[3]);
        },
        focusable: function(e) {
            return c(e, !isNaN(a.attr(e, "tabindex")));
        },
        tabbable: function(g) {
            var e = a.attr(g, "tabindex"), f = isNaN(e);
            return (f || e >= 0) && c(g, !f);
        }
    });
    a(function() {
        var e = document.body, f = e.appendChild(f = document.createElement("div"));
        f.offsetHeight;
        a.extend(f.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        a.support.minHeight = f.offsetHeight === 100;
        a.support.selectstart = "onselectstart" in f;
        e.removeChild(f).style.display = "none";
    });
    a.extend(a.ui, {
        plugin: {
            add: function(f, g, j) {
                var h = a.ui[f].prototype;
                for (var e in j) {
                    h.plugins[e] = h.plugins[e] || [];
                    h.plugins[e].push([g, j[e]]);
                }
            },
            call: function(e, g, f) {
                var j = e.plugins[g];
                if (!j ||!e.element[0].parentNode) {
                    return;
                }
                for (var h = 0; h < j.length; h++) {
                    if (e.options[j[h][0]]) {
                        j[h][1].apply(e.element, f);
                    }
                }
            }
        },
        contains: function(f, e) {
            return document.compareDocumentPosition ? f.compareDocumentPosition(e) & 16 : f !== e && f.contains(e);
        },
        hasScroll: function(h, f) {
            if (a(h).css("overflow") === "hidden") {
                return false;
            }
            var e = (f && f === "left") ? "scrollLeft": "scrollTop", g = false;
            if (h[e] > 0) {
                return true;
            }
            h[e] = 1;
            g = (h[e] > 0);
            h[e] = 0;
            return g;
        },
        isOverAxis: function(f, e, g) {
            return (f > e) && (f < (e + g));
        },
        isOver: function(j, f, i, h, e, g) {
            return a.ui.isOverAxis(j, i, e) && a.ui.isOverAxis(f, h, g);
        }
    });
})(jQuery);
(function(b, d) {
    if (b.cleanData) {
        var c = b.cleanData;
        b.cleanData = function(f) {
            for (var g = 0, h; (h = f[g]) != null; g++) {
                try {
                    b(h).triggerHandler("remove");
                } catch (j) {}
            }
            c(f);
        };
    } else {
        var a = b.fn.remove;
        b.fn.remove = function(e, f) {
            return this.each(function() {
                if (!f) {
                    if (!e || b.filter(e, [this]).length) {
                        b("*", this).add([this]).each(function() {
                            try {
                                b(this).triggerHandler("remove");
                            } catch (g) {}
                        });
                    }
                }
                return a.call(b(this), e, f);
            });
        };
    }
    b.widget = function(f, h, e) {
        var g = f.split(".")[0], j;
        f = f.split(".")[1];
        j = g + "-" + f;
        if (!e) {
            e = h;
            h = b.Widget;
        }
        b.expr[":"][j] = function(k) {
            return !!b.data(k, f);
        };
        b[g] = b[g] || {};
        b[g][f] = function(k, l) {
            if (arguments.length) {
                this._createWidget(k, l);
            }
        };
        var i = new h();
        i.options = b.extend(true, {}, i.options);
        b[g][f].prototype = b.extend(true, i, {
            namespace: g,
            widgetName: f,
            widgetEventPrefix: b[g][f].prototype.widgetEventPrefix || f,
            widgetBaseClass: j
        }, e);
        b.widget.bridge(f, b[g][f]);
    };
    b.widget.bridge = function(f, e) {
        b.fn[f] = function(i) {
            var g = typeof i === "string", h = Array.prototype.slice.call(arguments, 1), j = this;
            i=!g && h.length ? b.extend.apply(null, [true, i].concat(h)) : i;
            if (g && i.charAt(0) === "_") {
                return j;
            }
            if (g) {
                this.each(function() {
                    var k = b.data(this, f), l = k && b.isFunction(k[i]) ? k[i].apply(k, h): k;
                    if (l !== k && l !== d) {
                        j = l;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var k = b.data(this, f);
                    if (k) {
                        k.option(i || {})._init();
                    } else {
                        b.data(this, f, new e(i, this));
                    }
                });
            }
            return j;
        };
    };
    b.Widget = function(e, f) {
        if (arguments.length) {
            this._createWidget(e, f);
        }
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function(f, g) {
            b.data(g, this.widgetName, this);
            this.element = b(g);
            this.options = b.extend(true, {}, this.options, this._getCreateOptions(), f);
            var e = this;
            this.element.bind("remove." + this.widgetName, function() {
                e.destroy();
            });
            this._create();
            this._trigger("create");
            this._init();
        },
        _getCreateOptions: function() {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled");
        },
        widget: function() {
            return this.element;
        },
        option: function(f, g) {
            var e = f;
            if (arguments.length === 0) {
                return b.extend({}, this.options);
            }
            if (typeof f === "string") {
                if (g === d) {
                    return this.options[f];
                }
                e = {};
                e[f] = g;
            }
            this._setOptions(e);
            return this;
        },
        _setOptions: function(f) {
            var e = this;
            b.each(f, function(g, h) {
                e._setOption(g, h);
            });
            return this;
        },
        _setOption: function(e, f) {
            this.options[e] = f;
            if (e === "disabled") {
                this.widget()[f ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", f);
            }
            return this;
        },
        enable: function() {
            return this._setOption("disabled", false);
        },
        disable: function() {
            return this._setOption("disabled", true);
        },
        _trigger: function(e, f, g) {
            var j, i, h = this.options[e];
            g = g || {};
            f = b.Event(f);
            f.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase();
            f.target = this.element[0];
            i = f.originalEvent;
            if (i) {
                for (j in i) {
                    if (!(j in f)) {
                        f[j] = i[j];
                    }
                }
            }
            this.element.trigger(f, g);
            return !(b.isFunction(h) && h.call(this.element[0], f, g) === false || f.isDefaultPrevented());
        }
    };
})(jQuery);
(function(b, c) {
    var a = false;
    b(document).mouseup(function(d) {
        a = false;
    });
    b.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return d._mouseDown(e);
            }).bind("click." + this.widgetName, function(e) {
                if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                    b.removeData(e.target, d.widgetName + ".preventClickEvent");
                    e.stopImmediatePropagation();
                    return false;
                }
            });
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(f) {
            if (a) {
                return;
            }(this._mouseStarted && this._mouseUp(f));
            this._mouseDownEvent = f;
            var e = this, g = (f.which == 1), d = (typeof this.options.cancel == "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
            if (!g || d ||!this._mouseCapture(f)) {
                return true;
            }
            this.mouseDelayMet=!this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = true;
                }, this.options.delay);
            }
            if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
                this._mouseStarted = (this._mouseStart(f) !== false);
                if (!this._mouseStarted) {
                    f.preventDefault();
                    return true;
                }
            }
            if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
                b.removeData(f.target, this.widgetName + ".preventClickEvent");
            }
            this._mouseMoveDelegate = function(h) {
                return e._mouseMove(h);
            };
            this._mouseUpDelegate = function(h) {
                return e._mouseUp(h);
            };
            b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            f.preventDefault();
            a = true;
            return true;
        },
        _mouseMove: function(d) {
            if (b.browser.msie&&!(document.documentMode >= 9)&&!d.button) {
                return this._mouseUp(d);
            }
            if (this._mouseStarted) {
                this._mouseDrag(d);
                return d.preventDefault();
            }
            if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
                (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d));
            }
            return !this._mouseStarted;
        },
        _mouseUp: function(d) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (d.target == this._mouseDownEvent.target) {
                    b.data(d.target, this.widgetName + ".preventClickEvent", true);
                }
                this._mouseStop(d);
            }
            return false;
        },
        _mouseDistanceMet: function(d) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance);
        },
        _mouseDelayMet: function(d) {
            return this.mouseDelayMet;
        },
        _mouseStart: function(d) {},
        _mouseDrag: function(d) {},
        _mouseStop: function(d) {},
        _mouseCapture: function(d) {
            return true;
        }
    });
})(jQuery);
(function(a, b) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function() {
            if (this.options.helper == "original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }(this.options.addClasses && this.element.addClass("ui-draggable"));
            (this.options.disabled && this.element.addClass("ui-draggable-disabled"));
            this._mouseInit();
        },
        destroy: function() {
            if (!this.element.data("draggable")) {
                return;
            }
            this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy();
            return this;
        },
        _mouseCapture: function(c) {
            var d = this.options;
            if (this.helper || d.disabled || a(c.target).is(".ui-resizable-handle")) {
                return false;
            }
            this.handle = this._getHandle(c);
            if (!this.handle) {
                return false;
            }
            if (d.iframeFix) {
                a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                    a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1000
                    }).css(a(this).offset()).appendTo("body");
                });
            }
            return true;
        },
        _mouseStart: function(c) {
            var d = this.options;
            this.helper = this._createHelper(c);
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this;
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: c.pageX - this.offset.left,
                    top: c.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(c);
            this.originalPageX = c.pageX;
            this.originalPageY = c.pageY;
            (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
            if (d.containment) {
                this._setContainment();
            }
            if (this._trigger("start", c) === false) {
                this._clear();
                return false;
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager&&!d.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, c);
            }
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(c, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, c);
            }
            return true;
        },
        _mouseDrag: function(c, e) {
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!e) {
                var d = this._uiHash();
                if (this._trigger("drag", c, d) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = d.position;
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px";
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, c);
            }
            return false;
        },
        _mouseStop: function(d) {
            var e = false;
            if (a.ui.ddmanager&&!this.options.dropBehaviour) {
                e = a.ui.ddmanager.drop(this, d);
            }
            if (this.dropped) {
                e = this.dropped;
                this.dropped = false;
            }
            if ((!this.element[0] ||!this.element[0].parentNode) && this.options.helper == "original") {
                return false;
            }
            if ((this.options.revert == "invalid"&&!e) || (this.options.revert == "valid" && e) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, e))) {
                var c = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (c._trigger("stop", d) !== false) {
                        c._clear();
                    }
                });
            } else {
                if (this._trigger("stop", d) !== false) {
                    this._clear();
                }
            }
            return false;
        },
        _mouseUp: function(c) {
            if (this.options.iframeFix === true) {
                a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this);
                });
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, c);
            }
            return a.ui.mouse.prototype._mouseUp.call(this, c);
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }
            return this;
        },
        _getHandle: function(c) {
            var d=!this.options.handle ||!a(this.options.handle, this.element).length ? true : false;
            a(this.options.handle, this.element).find("*").andSelf().each(function() {
                if (this == c.target) {
                    d = true;
                }
            });
            return d;
        },
        _createHelper: function(d) {
            var e = this.options;
            var c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])): (e.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!c.parents("body").length) {
                c.appendTo((e.appendTo == "parent" ? this.element[0].parentNode : e.appendTo));
            }
            if (c[0] != this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))) {
                c.css("position", "absolute");
            }
            return c;
        },
        _adjustOffsetFromHelper: function(c) {
            if (typeof c == "string") {
                c = c.split(" ");
            }
            if (a.isArray(c)) {
                c = {
                    left: + c[0],
                    top: + c[1] || 0
                };
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left;
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left;
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top;
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top;
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop();
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) {
                c = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var c = this.element.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0
                };
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var g = this.options;
            if (g.containment == "parent") {
                g.containment = this.helper[0].parentNode;
            }
            if (g.containment == "document" || g.containment == "window") {
                this.containment = [g.containment == "document" ? 0: a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, g.containment == "document" ? 0: a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (g.containment == "document" ? 0 : a(window).scrollLeft()) + a(g.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (g.containment == "document" ? 0 : a(window).scrollTop()) + (a(g.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            }
            if (!(/^(document|window|parent)$/).test(g.containment) && g.containment.constructor != Array) {
                var h = a(g.containment);
                var e = h[0];
                if (!e) {
                    return;
                }
                var f = h.offset();
                var d = (a(e).css("overflow") != "hidden");
                this.containment = [(parseInt(a(e).css("borderLeftWidth"), 10) || 0) + (parseInt(a(e).css("paddingLeft"), 10) || 0), (parseInt(a(e).css("borderTopWidth"), 10) || 0) + (parseInt(a(e).css("paddingTop"), 10) || 0), (d ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(a(e).css("borderLeftWidth"), 10) || 0) - (parseInt(a(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (d ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(a(e).css("borderTopWidth"), 10) || 0) - (parseInt(a(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = h;
            } else {
                if (g.containment.constructor == Array) {
                    this.containment = g.containment;
                }
            }
        },
        _convertPositionTo: function(g, i) {
            if (!i) {
                i = this.position;
            }
            var e = g == "absolute" ? 1: - 1;
            var f = this.options, c = this.cssPosition == "absolute"&&!(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent, h = (/(html|body)/i).test(c[0].tagName);
            return {
                top: (i.top + this.offset.relative.top * e + this.offset.parent.top * e - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : (h ? 0 : c.scrollTop())) * e)),
                left: (i.left + this.offset.relative.left * e + this.offset.parent.left * e - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): h ? 0: c.scrollLeft()) * e))
            };
        },
        _generatePosition: function(d) {
            var e = this.options, l = this.cssPosition == "absolute"&&!(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent, i = (/(html|body)/i).test(l[0].tagName);
            var h = d.pageX;
            var g = d.pageY;
            if (this.originalPosition) {
                var c;
                if (this.containment) {
                    if (this.relative_container) {
                        var k = this.relative_container.offset();
                        c = [this.containment[0] + k.left, this.containment[1] + k.top, this.containment[2] + k.left, this.containment[3] + k.top];
                    } else {
                        c = this.containment;
                    }
                    if (d.pageX - this.offset.click.left < c[0]) {
                        h = c[0] + this.offset.click.left;
                    }
                    if (d.pageY - this.offset.click.top < c[1]) {
                        g = c[1] + this.offset.click.top;
                    }
                    if (d.pageX - this.offset.click.left > c[2]) {
                        h = c[2] + this.offset.click.left;
                    }
                    if (d.pageY - this.offset.click.top > c[3]) {
                        g = c[3] + this.offset.click.top;
                    }
                }
                if (e.grid) {
                    var j = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1]: this.originalPageY;
                    g = c ? (!(j - this.offset.click.top < c[1] || j - this.offset.click.top > c[3]) ? j : (!(j - this.offset.click.top < c[1]) ? j - e.grid[1] : j + e.grid[1])) : j;
                    var f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0]: this.originalPageX;
                    h = c ? (!(f - this.offset.click.left < c[0] || f - this.offset.click.left > c[2]) ? f : (!(f - this.offset.click.left < c[0]) ? f - e.grid[0] : f + e.grid[0])) : f;
                }
            }
            return {
                top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : (i ? 0 : l.scrollTop())))),
                left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): i ? 0: l.scrollLeft())))
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] != this.element[0]&&!this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
        },
        _trigger: function(c, d, e) {
            e = e || this._uiHash();
            a.ui.plugin.call(this, c, [d, e]);
            if (c == "drag") {
                this.positionAbs = this._convertPositionTo("absolute");
            }
            return a.Widget.prototype._trigger.call(this, c, d, e);
        },
        plugins: {},
        _uiHash: function(c) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    });
    a.extend(a.ui.draggable, {
        version: "@VERSION"
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(d, f) {
            var e = a(this).data("draggable"), g = e.options, c = a.extend({}, f, {
                item: e.element
            });
            e.sortables = [];
            a(g.connectToSortable).each(function() {
                var h = a.data(this, "sortable");
                if (h&&!h.options.disabled) {
                    e.sortables.push({
                        instance: h,
                        shouldRevert: h.options.revert
                    });
                    h.refreshPositions();
                    h._trigger("activate", d, c);
                }
            });
        },
        stop: function(d, f) {
            var e = a(this).data("draggable"), c = a.extend({}, f, {
                item: e.element
            });
            a.each(e.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    e.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = true;
                    }
                    this.instance._mouseStop(d);
                    this.instance.options.helper = this.instance.options._helper;
                    if (e.options.helper == "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        });
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", d, c);
                }
            });
        },
        drag: function(d, g) {
            var f = a(this).data("draggable"), c = this;
            var e = function(j) {
                var p = this.offset.click.top, n = this.offset.click.left;
                var h = this.positionAbs.top, l = this.positionAbs.left;
                var k = j.height, m = j.width;
                var q = j.top, i = j.left;
                return a.ui.isOver(h + p, l + n, q, i, k, m);
            };
            a.each(f.sortables, function(h) {
                this.instance.positionAbs = f.positionAbs;
                this.instance.helperProportions = f.helperProportions;
                this.instance.offset.click = f.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return g.helper[0];
                        };
                        d.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(d, true);
                        this.instance._mouseStart(d, true, true);
                        this.instance.offset.click.top = f.offset.click.top;
                        this.instance.offset.click.left = f.offset.click.left;
                        this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top;
                        f._trigger("toSortable", d);
                        f.dropped = this.instance.element;
                        f.currentItem = f.element;
                        this.instance.fromOutside = f;
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(d);
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(d, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove();
                        }
                        f._trigger("fromSortable", d);
                        f.dropped = false;
                    }
                }
            });
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(d, e) {
            var c = a("body"), f = a(this).data("draggable").options;
            if (c.css("cursor")) {
                f._cursor = c.css("cursor");
            }
            c.css("cursor", f.cursor);
        },
        stop: function(c, d) {
            var e = a(this).data("draggable").options;
            if (e._cursor) {
                a("body").css("cursor", e._cursor);
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(d, e) {
            var c = a(e.helper), f = a(this).data("draggable").options;
            if (c.css("opacity")) {
                f._opacity = c.css("opacity");
            }
            c.css("opacity", f.opacity);
        },
        stop: function(c, d) {
            var e = a(this).data("draggable").options;
            if (e._opacity) {
                a(d.helper).css("opacity", e._opacity);
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(d, e) {
            var c = a(this).data("draggable");
            if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
                c.overflowOffset = c.scrollParent.offset();
            }
        },
        drag: function(e, f) {
            var d = a(this).data("draggable"), g = d.options, c = false;
            if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
                if (!g.axis || g.axis != "x") {
                    if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < g.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + g.scrollSpeed;
                    } else {
                        if (e.pageY - d.overflowOffset.top < g.scrollSensitivity) {
                            d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - g.scrollSpeed;
                        }
                    }
                }
                if (!g.axis || g.axis != "y") {
                    if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < g.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + g.scrollSpeed;
                    } else {
                        if (e.pageX - d.overflowOffset.left < g.scrollSensitivity) {
                            d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - g.scrollSpeed;
                        }
                    }
                }
            } else {
                if (!g.axis || g.axis != "x") {
                    if (e.pageY - a(document).scrollTop() < g.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed);
                    } else {
                        if (a(window).height() - (e.pageY - a(document).scrollTop()) < g.scrollSensitivity) {
                            c = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed);
                        }
                    }
                }
                if (!g.axis || g.axis != "y") {
                    if (e.pageX - a(document).scrollLeft() < g.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed);
                    } else {
                        if (a(window).width() - (e.pageX - a(document).scrollLeft()) < g.scrollSensitivity) {
                            c = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed);
                        }
                    }
                }
            }
            if (c !== false && a.ui.ddmanager&&!g.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(d, e);
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(d, e) {
            var c = a(this).data("draggable"), f = c.options;
            c.snapElements = [];
            a(f.snap.constructor != String ? (f.snap.items || ":data(draggable)") : f.snap).each(function() {
                var h = a(this);
                var g = h.offset();
                if (this != c.element[0]) {
                    c.snapElements.push({
                        item: this,
                        width: h.outerWidth(),
                        height: h.outerHeight(),
                        top: g.top,
                        left: g.left
                    });
                }
            });
        },
        drag: function(u, p) {
            var g = a(this).data("draggable"), q = g.options;
            var y = q.snapTolerance;
            var x = p.offset.left, w = x + g.helperProportions.width, f = p.offset.top, e = f + g.helperProportions.height;
            for (var v = g.snapElements.length - 1; v >= 0; v--) {
                var s = g.snapElements[v].left, n = s + g.snapElements[v].width, m = g.snapElements[v].top, A = m + g.snapElements[v].height;
                if (!((s - y < x && x < n + y && m - y < f && f < A + y) || (s - y < x && x < n + y && m - y < e && e < A + y) || (s - y < w && w < n + y && m - y < f && f < A + y) || (s - y < w && w < n + y && m - y < e && e < A + y))) {
                    if (g.snapElements[v].snapping) {
                        (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {
                            snapItem: g.snapElements[v].item
                        })));
                    }
                    g.snapElements[v].snapping = false;
                    continue;
                }
                if (q.snapMode != "inner") {
                    var c = Math.abs(m - e) <= y;
                    var z = Math.abs(A - f) <= y;
                    var j = Math.abs(s - w) <= y;
                    var k = Math.abs(n - x) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: m - g.helperProportions.height,
                            left: 0
                        }).top - g.margins.top;
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: A,
                            left: 0
                        }).top - g.margins.top;
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: s - g.helperProportions.width
                        }).left - g.margins.left;
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: n
                        }).left - g.margins.left;
                    }
                }
                var h = (c || z || j || k);
                if (q.snapMode != "outer") {
                    var c = Math.abs(m - f) <= y;
                    var z = Math.abs(A - e) <= y;
                    var j = Math.abs(s - x) <= y;
                    var k = Math.abs(n - w) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: m,
                            left: 0
                        }).top - g.margins.top;
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {
                            top: A - g.helperProportions.height,
                            left: 0
                        }).top - g.margins.top;
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: s
                        }).left - g.margins.left;
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {
                            top: 0,
                            left: n - g.helperProportions.width
                        }).left - g.margins.left;
                    }
                }
                if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                    (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {
                        snapItem: g.snapElements[v].item
                    })));
                }
                g.snapElements[v].snapping = (c || z || j || k || h);
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(d, e) {
            var g = a(this).data("draggable").options;
            var f = a.makeArray(a(g.stack)).sort(function(i, h) {
                return (parseInt(a(i).css("zIndex"), 10) || 0) - (parseInt(a(h).css("zIndex"), 10) || 0);
            });
            if (!f.length) {
                return;
            }
            var c = parseInt(f[0].style.zIndex) || 0;
            a(f).each(function(h) {
                this.style.zIndex = c + h;
            });
            this[0].style.zIndex = c + f.length;
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(d, e) {
            var c = a(e.helper), f = a(this).data("draggable").options;
            if (c.css("zIndex")) {
                f._zIndex = c.css("zIndex");
            }
            c.css("zIndex", f.zIndex);
        },
        stop: function(c, d) {
            var e = a(this).data("draggable").options;
            if (e._zIndex) {
                a(d.helper).css("zIndex", e._zIndex);
            }
        }
    });
})(jQuery);
(function(a, b) {
    a.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var d = this.options, c = d.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = a.isFunction(c) ? c : function(e) {
                return e.is(c);
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            a.ui.ddmanager.droppables[d.scope] = a.ui.ddmanager.droppables[d.scope] || [];
            a.ui.ddmanager.droppables[d.scope].push(this);
            (d.addClasses && this.element.addClass("ui-droppable"));
        },
        destroy: function() {
            var c = a.ui.ddmanager.droppables[this.options.scope];
            for (var d = 0; d < c.length; d++) {
                if (c[d] == this) {
                    c.splice(d, 1);
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
            return this;
        },
        _setOption: function(c, d) {
            if (c == "accept") {
                this.accept = a.isFunction(d) ? d : function(e) {
                    return e.is(d);
                };
            }
            a.Widget.prototype._setOption.apply(this, arguments);
        },
        _activate: function(d) {
            var c = a.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass);
            }(c && this._trigger("activate", d, this.ui(c)));
        },
        _deactivate: function(d) {
            var c = a.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass);
            }(c && this._trigger("deactivate", d, this.ui(c)));
        },
        _over: function(d) {
            var c = a.ui.ddmanager.current;
            if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
                this._trigger("over", d, this.ui(c));
            }
        },
        _out: function(d) {
            var c = a.ui.ddmanager.current;
            if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("out", d, this.ui(c));
            }
        },
        _drop: function(d, e) {
            var c = e || a.ui.ddmanager.current;
            if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
                return false;
            }
            var f = false;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var g = a.data(this, "droppable");
                if (g.options.greedy&&!g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], (c.currentItem || c.element)) && a.ui.intersect(c, a.extend(g, {
                    offset: g.element.offset()
                }), g.options.tolerance)) {
                    f = true;
                    return false;
                }
            });
            if (f) {
                return false;
            }
            if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("drop", d, this.ui(c));
                return this.element;
            }
            return false;
        },
        ui: function(d) {
            return {
                draggable: (d.currentItem || d.element),
                helper: d.helper,
                position: d.position,
                offset: d.positionAbs
            };
        }
    });
    a.extend(a.ui.droppable, {
        version: "@VERSION"
    });
    a.ui.intersect = function(q, j, o) {
        if (!j.offset) {
            return false;
        }
        var e = (q.positionAbs || q.position.absolute).left, d = e + q.helperProportions.width, n = (q.positionAbs || q.position.absolute).top, m = n + q.helperProportions.height;
        var g = j.offset.left, c = g + j.proportions.width, p = j.offset.top, k = p + j.proportions.height;
        switch (o) {
        case"fit":
            return (g <= e && d <= c && p <= n && m <= k);
            break;
        case"intersect":
            return (g < e + (q.helperProportions.width / 2) && d - (q.helperProportions.width / 2) < c && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
            break;
        case"pointer":
            var h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left), i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top), f = a.ui.isOver(i, h, p, g, j.proportions.height, j.proportions.width);
            return f;
            break;
        case"touch":
            return ((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((e >= g && e <= c) || (d >= g && d <= c) || (e < g && d > c));
            break;
        default:
            return false;
            break;
        }
    };
    a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(f, h) {
            var c = a.ui.ddmanager.droppables[f.options.scope] || [];
            var g = h ? h.type: null;
            var k = (f.currentItem || f.element).find(":data(droppable)").andSelf();
            droppablesLoop: for (var e = 0; e < c.length; e++) {
                if (c[e].options.disabled || (f&&!c[e].accept.call(c[e].element[0], (f.currentItem || f.element)))) {
                    continue;
                }
                for (var d = 0; d < k.length; d++) {
                    if (k[d] == c[e].element[0]) {
                        c[e].proportions.height = 0;
                        continue droppablesLoop;
                    }
                }
                c[e].visible = c[e].element.css("display") != "none";
                if (!c[e].visible) {
                    continue;
                }
                if (g == "mousedown") {
                    c[e]._activate.call(c[e], h);
                }
                c[e].offset = c[e].element.offset();
                c[e].proportions = {
                    width: c[e].element[0].offsetWidth,
                    height: c[e].element[0].offsetHeight
                };
            }
        },
        drop: function(c, d) {
            var e = false;
            a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && a.ui.intersect(c, this, this.options.tolerance)) {
                    e = this._drop.call(this, d) || e;
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (c.currentItem || c.element))) {
                    this.isout = 1;
                    this.isover = 0;
                    this._deactivate.call(this, d);
                }
            });
            return e;
        },
        dragStart: function(c, d) {
            c.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                if (!c.options.refreshPositions) {
                    a.ui.ddmanager.prepareOffsets(c, d);
                }
            });
        },
        drag: function(c, d) {
            if (c.options.refreshPositions) {
                a.ui.ddmanager.prepareOffsets(c, d);
            }
            a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild ||!this.visible) {
                    return;
                }
                var f = a.ui.intersect(c, this, this.options.tolerance);
                var h=!f && this.isover == 1 ? "isout" : (f && this.isover == 0 ? "isover" : null);
                if (!h) {
                    return;
                }
                var g;
                if (this.options.greedy) {
                    var e = this.element.parents(":data(droppable):eq(0)");
                    if (e.length) {
                        g = a.data(e[0], "droppable");
                        g.greedyChild = (h == "isover" ? 1 : 0);
                    }
                }
                if (g && h == "isover") {
                    g.isover = 0;
                    g.isout = 1;
                    g._out.call(g, d);
                }
                this[h] = 1;
                this[h == "isout" ? "isover": "isout"] = 0;
                this[h == "isover" ? "_over": "_out"].call(this, d);
                if (g && h == "isout") {
                    g.isout = 0;
                    g.isover = 1;
                    g._over.call(g, d);
                }
            });
        },
        dragStop: function(c, d) {
            c.element.parents(":not(body,html)").unbind("scroll.droppable");
            if (!c.options.refreshPositions) {
                a.ui.ddmanager.prepareOffsets(c, d);
            }
        }
    };
})(jQuery);
(function(c, d) {
    c.widget("ui.resizable", c.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1000
        },
        _create: function() {
            var f = this, k = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {
                _aspectRatio: !!(k.aspectRatio),
                aspectRatio: k.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper": null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize();
            }
            this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor == String) {
                if (this.handles == "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }
                var l = this.handles.split(",");
                this.handles = {};
                for (var g = 0; g < l.length; g++) {
                    var j = c.trim(l[g]), e = "ui-resizable-" + j;
                    var h = c('<div class="ui-resizable-handle ' + e + '"></div>');
                    if (/sw|se|ne|nw/.test(j)) {
                        h.css({
                            zIndex: ++k.zIndex
                        });
                    }
                    if ("se" == j) {
                        h.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    }
                    this.handles[j] = ".ui-resizable-" + j;
                    this.element.append(h);
                }
            }
            this._renderAxis = function(q) {
                q = q || this.element;
                for (var n in this.handles) {
                    if (this.handles[n].constructor == String) {
                        this.handles[n] = c(this.handles[n], this.element).show();
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var o = c(this.handles[n], this.element), p = 0;
                        p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
                        var m = ["padding", /ne|nw|n/.test(n) ? "Top": /se|sw|s/.test(n) ? "Bottom": /^e$/.test(n) ? "Right": "Left"].join("");
                        q.css(m, p);
                        this._proportionallyResize();
                    }
                    if (!c(this.handles[n]).length) {
                        continue;
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!f.resizing) {
                    if (this.className) {
                        var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    f.axis = i && i[1] ? i[1] : "se";
                }
            });
            if (k.autoHide) {
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").hover(function() {
                    if (k.disabled) {
                        return;
                    }
                    c(this).removeClass("ui-resizable-autohide");
                    f._handles.show();
                }, function() {
                    if (k.disabled) {
                        return;
                    }
                    if (!f.resizing) {
                        c(this).addClass("ui-resizable-autohide");
                        f._handles.hide();
                    }
                });
            }
            this._mouseInit();
        },
        destroy: function() {
            this._mouseDestroy();
            var e = function(g) {
                c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var f = this.element;
                f.after(this.originalElement.css({
                    position: f.css("position"),
                    width: f.outerWidth(),
                    height: f.outerHeight(),
                    top: f.css("top"),
                    left: f.css("left")
                })).remove();
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            e(this.originalElement);
            return this;
        },
        _mouseCapture: function(f) {
            var g = false;
            for (var e in this.handles) {
                if (c(this.handles[e])[0] == f.target) {
                    g = true;
                }
            }
            return !this.options.disabled && g;
        },
        _mouseStart: function(g) {
            var j = this.options, f = this.element.position(), e = this.element;
            this.resizing = true;
            this.documentScroll = {
                top: c(document).scrollTop(),
                left: c(document).scrollLeft()
            };
            if (e.is(".ui-draggable") || (/absolute/).test(e.css("position"))) {
                e.css({
                    position: "absolute",
                    top: f.top,
                    left: f.left
                });
            }
            this._renderProxy();
            var k = b(this.helper.css("left")), h = b(this.helper.css("top"));
            if (j.containment) {
                k += c(j.containment).scrollLeft() || 0;
                h += c(j.containment).scrollTop() || 0;
            }
            this.offset = this.helper.offset();
            this.position = {
                left: k,
                top: h
            };
            this.size = this._helper ? {
                width: e.outerWidth(),
                height: e.outerHeight()
            } : {
                width: e.width(),
                height: e.height()
            };
            this.originalSize = this._helper ? {
                width: e.outerWidth(),
                height: e.outerHeight()
            } : {
                width: e.width(),
                height: e.height()
            };
            this.originalPosition = {
                left: k,
                top: h
            };
            this.sizeDiff = {
                width: e.outerWidth() - e.width(),
                height: e.outerHeight() - e.height()
            };
            this.originalMousePosition = {
                left: g.pageX,
                top: g.pageY
            };
            this.aspectRatio = (typeof j.aspectRatio == "number") ? j.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            var i = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", i == "auto" ? this.axis + "-resize" : i);
            e.addClass("ui-resizable-resizing");
            this._propagate("start", g);
            return true;
        },
        _mouseDrag: function(e) {
            var h = this.helper, g = this.options, m = {}, q = this, j = this.originalMousePosition, n = this.axis;
            var r = (e.pageX - j.left) || 0, p = (e.pageY - j.top) || 0;
            var i = this._change[n];
            if (!i) {
                return false;
            }
            var l = i.apply(this, [e, r, p]), k = c.browser.msie && c.browser.version < 7, f = this.sizeDiff;
            this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) {
                l = this._updateRatio(l, e);
            }
            l = this._respectSize(l, e);
            this._propagate("resize", e);
            h.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }
            this._updateCache(l);
            this._trigger("resize", e, this.ui());
            return false;
        },
        _mouseStop: function(h) {
            this.resizing = false;
            var i = this.options, m = this;
            if (this._helper) {
                var g = this._proportionallyResizeElements, e = g.length && (/textarea/i).test(g[0].nodeName), f = e && c.ui.hasScroll(g[0], "left") ? 0: m.sizeDiff.height, k = e ? 0: m.sizeDiff.width;
                var n = {
                    width: (m.helper.width() - k),
                    height: (m.helper.height() - f)
                }, j = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null, l = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
                if (!i.animate) {
                    this.element.css(c.extend(n, {
                        top: l,
                        left: j
                    }));
                }
                m.helper.height(m.size.height);
                m.helper.width(m.size.width);
                if (this._helper&&!i.animate) {
                    this._proportionallyResize();
                }
            }
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", h);
            if (this._helper) {
                this.helper.remove();
            }
            return false;
        },
        _updateVirtualBoundaries: function(g) {
            var j = this.options, i, h, f, k, e;
            e = {
                minWidth: a(j.minWidth) ? j.minWidth: 0,
                maxWidth: a(j.maxWidth) ? j.maxWidth: Infinity,
                minHeight: a(j.minHeight) ? j.minHeight: 0,
                maxHeight: a(j.maxHeight) ? j.maxHeight: Infinity
            };
            if (this._aspectRatio || g) {
                i = e.minHeight * this.aspectRatio;
                f = e.minWidth / this.aspectRatio;
                h = e.maxHeight * this.aspectRatio;
                k = e.maxWidth / this.aspectRatio;
                if (i > e.minWidth) {
                    e.minWidth = i;
                }
                if (f > e.minHeight) {
                    e.minHeight = f;
                }
                if (h < e.maxWidth) {
                    e.maxWidth = h;
                }
                if (k < e.maxHeight) {
                    e.maxHeight = k;
                }
            }
            this._vBoundaries = e;
        },
        _updateCache: function(e) {
            var f = this.options;
            this.offset = this.helper.offset();
            if (a(e.left)) {
                this.position.left = e.left;
            }
            if (a(e.top)) {
                this.position.top = e.top;
            }
            if (a(e.height)) {
                this.size.height = e.height;
            }
            if (a(e.width)) {
                this.size.width = e.width;
            }
        },
        _updateRatio: function(h, g) {
            var i = this.options, j = this.position, f = this.size, e = this.axis;
            if (a(h.height)) {
                h.width = (h.height * this.aspectRatio);
            } else {
                if (a(h.width)) {
                    h.height = (h.width / this.aspectRatio);
                }
            }
            if (e == "sw") {
                h.left = j.left + (f.width - h.width);
                h.top = null;
            }
            if (e == "nw") {
                h.top = j.top + (f.height - h.height);
                h.left = j.left + (f.width - h.width);
            }
            return h;
        },
        _respectSize: function(l, g) {
            var j = this.helper, i = this._vBoundaries, r = this._aspectRatio || g.shiftKey, q = this.axis, t = a(l.width) && i.maxWidth && (i.maxWidth < l.width), m = a(l.height) && i.maxHeight && (i.maxHeight < l.height), h = a(l.width) && i.minWidth && (i.minWidth > l.width), s = a(l.height) && i.minHeight && (i.minHeight > l.height);
            if (h) {
                l.width = i.minWidth;
            }
            if (s) {
                l.height = i.minHeight;
            }
            if (t) {
                l.width = i.maxWidth;
            }
            if (m) {
                l.height = i.maxHeight;
            }
            var f = this.originalPosition.left + this.originalSize.width, p = this.position.top + this.size.height;
            var k = /sw|nw|w/.test(q), e = /nw|ne|n/.test(q);
            if (h && k) {
                l.left = f - i.minWidth;
            }
            if (t && k) {
                l.left = f - i.maxWidth;
            }
            if (s && e) {
                l.top = p - i.minHeight;
            }
            if (m && e) {
                l.top = p - i.maxHeight;
            }
            var n=!l.width&&!l.height;
            if (n&&!l.left && l.top) {
                l.top = null;
            } else {
                if (n&&!l.top && l.left) {
                    l.left = null;
                }
            }
            return l;
        },
        _proportionallyResize: function() {
            var k = this.options;
            if (!this._proportionallyResizeElements.length) {
                return;
            }
            var g = this.helper || this.element;
            for (var f = 0; f < this._proportionallyResizeElements.length; f++) {
                var h = this._proportionallyResizeElements[f];
                if (!this.borderDif) {
                    var e = [h.css("borderTopWidth"), h.css("borderRightWidth"), h.css("borderBottomWidth"), h.css("borderLeftWidth")], j = [h.css("paddingTop"), h.css("paddingRight"), h.css("paddingBottom"), h.css("paddingLeft")];
                    this.borderDif = c.map(e, function(l, n) {
                        var m = parseInt(l, 10) || 0, o = parseInt(j[n], 10) || 0;
                        return m + o;
                    });
                }
                if (c.browser.msie&&!(!(c(g).is(":hidden") || c(g).parents(":hidden").length))) {
                    continue;
                }
                h.css({
                    height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0
                });
            }
        },
        _renderProxy: function() {
            var f = this.element, i = this.options;
            this.elementOffset = f.offset();
            if (this._helper) {
                this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
                var e = c.browser.msie && c.browser.version < 7, g = (e ? 1 : 0), h = (e ? 2 : - 1);
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + h,
                    height: this.element.outerHeight() + h,
                    position: "absolute",
                    left: this.elementOffset.left - g + "px",
                    top: this.elementOffset.top - g + "px",
                    zIndex: ++i.zIndex
                });
                this.helper.appendTo("body").disableSelection();
            } else {
                this.helper = this.element;
            }
        },
        _change: {
            e: function(g, f, e) {
                return {
                    width: this.originalSize.width + f
                };
            },
            w: function(h, f, e) {
                var j = this.options, g = this.originalSize, i = this.originalPosition;
                return {
                    left: i.left + f,
                    width: g.width - f
                };
            },
            n: function(h, f, e) {
                var j = this.options, g = this.originalSize, i = this.originalPosition;
                return {
                    top: i.top + e,
                    height: g.height - e
                };
            },
            s: function(g, f, e) {
                return {
                    height: this.originalSize.height + e
                };
            },
            se: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]));
            },
            sw: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]));
            },
            ne: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]));
            },
            nw: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]));
            }
        },
        _propagate: function(f, e) {
            c.ui.plugin.call(this, f, [e, this.ui()]);
            (f != "resize" && this._trigger(f, e, this.ui()));
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    });
    c.extend(c.ui.resizable, {
        version: "@VERSION"
    });
    c.ui.plugin.add("resizable", "alsoResize", {
        start: function(f, g) {
            var e = c(this).data("resizable"), i = e.options;
            var h = function(j) {
                c(j).each(function() {
                    var k = c(this);
                    k.data("resizable-alsoresize", {
                        width: parseInt(k.width(), 10),
                        height: parseInt(k.height(), 10),
                        left: parseInt(k.css("left"), 10),
                        top: parseInt(k.css("top"), 10)
                    });
                });
            };
            if (typeof(i.alsoResize) == "object"&&!i.alsoResize.parentNode) {
                if (i.alsoResize.length) {
                    i.alsoResize = i.alsoResize[0];
                    h(i.alsoResize);
                } else {
                    c.each(i.alsoResize, function(j) {
                        h(j);
                    });
                }
            } else {
                h(i.alsoResize);
            }
        },
        resize: function(g, i) {
            var f = c(this).data("resizable"), j = f.options, h = f.originalSize, l = f.originalPosition;
            var k = {
                height: (f.size.height - h.height) || 0,
                width: (f.size.width - h.width) || 0,
                top: (f.position.top - l.top) || 0,
                left: (f.position.left - l.left) || 0
            }, e = function(m, n) {
                c(m).each(function() {
                    var q = c(this), r = c(this).data("resizable-alsoresize"), p = {}, o = n && n.length ? n: q.parents(i.originalElement[0]).length ? ["width", "height"]: ["width", "height", "top", "left"];
                    c.each(o, function(s, u) {
                        var t = (r[u] || 0) + (k[u] || 0);
                        if (t && t >= 0) {
                            p[u] = t || null;
                        }
                    });
                    q.css(p);
                });
            };
            if (typeof(j.alsoResize) == "object"&&!j.alsoResize.nodeType) {
                c.each(j.alsoResize, function(m, n) {
                    e(m, n);
                });
            } else {
                e(j.alsoResize);
            }
        },
        stop: function(e, f) {
            c(this).removeData("resizable-alsoresize");
        }
    });
    c.ui.plugin.add("resizable", "animate", {
        stop: function(i, n) {
            var p = c(this).data("resizable"), j = p.options;
            var h = p._proportionallyResizeElements, e = h.length && (/textarea/i).test(h[0].nodeName), f = e && c.ui.hasScroll(h[0], "left") ? 0: p.sizeDiff.height, l = e ? 0: p.sizeDiff.width;
            var g = {
                width: (p.size.width - l),
                height: (p.size.height - f)
            }, k = (parseInt(p.element.css("left"), 10) + (p.position.left - p.originalPosition.left)) || null, m = (parseInt(p.element.css("top"), 10) + (p.position.top - p.originalPosition.top)) || null;
            p.element.animate(c.extend(g, m && k ? {
                top: m,
                left: k
            } : {}), {
                duration: j.animateDuration,
                easing: j.animateEasing,
                step: function() {
                    var o = {
                        width: parseInt(p.element.css("width"), 10),
                        height: parseInt(p.element.css("height"), 10),
                        top: parseInt(p.element.css("top"), 10),
                        left: parseInt(p.element.css("left"), 10)
                    };
                    if (h && h.length) {
                        c(h[0]).css({
                            width: o.width,
                            height: o.height
                        });
                    }
                    p._updateCache(o);
                    p._propagate("resize", i);
                }
            });
        }
    });
    c.ui.plugin.add("resizable", "containment", {
        start: function(f, r) {
            var t = c(this).data("resizable"), j = t.options, l = t.element;
            var g = j.containment, k = (g instanceof c) ? g.get(0): (/parent/.test(g)) ? l.parent().get(0): g;
            if (!k) {
                return;
            }
            t.containerElement = c(k);
            if (/document/.test(g) || g == document) {
                t.containerOffset = {
                    left: 0,
                    top: 0
                };
                t.containerPosition = {
                    left: 0,
                    top: 0
                };
                t.parentData = {
                    element: c(document),
                    left: 0,
                    top: 0,
                    width: c(document).width(),
                    height: c(document).height() || document.body.parentNode.scrollHeight
                };
            } else {
                var n = c(k), i = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    i[p] = b(n.css("padding" + o));
                });
                t.containerOffset = n.offset();
                t.containerPosition = n.position();
                t.containerSize = {
                    height: (n.innerHeight() - i[3]),
                    width: (n.innerWidth() - i[1])
                };
                var q = t.containerOffset, e = t.containerSize.height, m = t.containerSize.width, h = (c.ui.hasScroll(k, "left") ? k.scrollWidth : m), s = (c.ui.hasScroll(k) ? k.scrollHeight : e);
                t.parentData = {
                    element: k,
                    left: q.left,
                    top: q.top,
                    width: h,
                    height: s
                };
            }
        },
        resize: function(g, q) {
            var t = c(this).data("resizable"), i = t.options, f = t.containerSize, p = t.containerOffset, m = t.size, n = t.position, r = t._aspectRatio || g.shiftKey, e = {
                top: 0,
                left: 0
            }, h = t.containerElement;
            if (h[0] != document && (/static/).test(h.css("position"))) {
                e = p;
            }
            if (n.left < (t._helper ? p.left : 0)) {
                t.size.width = t.size.width + (t._helper ? (t.position.left - p.left) : (t.position.left - e.left));
                if (r) {
                    t.size.height = t.size.width / t.aspectRatio;
                }
                t.position.left = i.helper ? p.left : 0;
            }
            if (n.top < (t._helper ? p.top : 0)) {
                t.size.height = t.size.height + (t._helper ? (t.position.top - p.top) : t.position.top);
                if (r) {
                    t.size.width = t.size.height * t.aspectRatio;
                }
                t.position.top = t._helper ? p.top : 0;
            }
            t.offset.left = t.parentData.left + t.position.left;
            t.offset.top = t.parentData.top + t.position.top;
            var l = Math.abs((t._helper ? t.offset.left - e.left : (t.offset.left - e.left)) + t.sizeDiff.width), s = Math.abs((t._helper ? t.offset.top - e.top : (t.offset.top - p.top)) + t.sizeDiff.height);
            var k = t.containerElement.get(0) == t.element.parent().get(0), j = /relative|absolute/.test(t.containerElement.css("position"));
            if (k && j) {
                l -= t.parentData.left;
            }
            if (l + t.size.width >= t.parentData.width) {
                t.size.width = t.parentData.width - l;
                if (r) {
                    t.size.height = t.size.width / t.aspectRatio;
                }
            }
            if (s + t.size.height >= t.parentData.height) {
                t.size.height = t.parentData.height - s;
                if (r) {
                    t.size.width = t.size.height * t.aspectRatio;
                }
            }
        },
        stop: function(f, n) {
            var q = c(this).data("resizable"), g = q.options, l = q.position, m = q.containerOffset, e = q.containerPosition, i = q.containerElement;
            var j = c(q.helper), r = j.offset(), p = j.outerWidth() - q.sizeDiff.width, k = j.outerHeight() - q.sizeDiff.height;
            if (q._helper&&!g.animate && (/relative/).test(i.css("position"))) {
                c(this).css({
                    left: r.left - e.left - m.left,
                    width: p,
                    height: k
                });
            }
            if (q._helper&&!g.animate && (/static/).test(i.css("position"))) {
                c(this).css({
                    left: r.left - e.left - m.left,
                    width: p,
                    height: k
                });
            }
        }
    });
    c.ui.plugin.add("resizable", "ghost", {
        start: function(g, h) {
            var e = c(this).data("resizable"), i = e.options, f = e.size;
            e.ghost = e.originalElement.clone();
            e.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            e.ghost.appendTo(e.helper);
        },
        resize: function(f, g) {
            var e = c(this).data("resizable"), h = e.options;
            if (e.ghost) {
                e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                });
            }
        },
        stop: function(f, g) {
            var e = c(this).data("resizable"), h = e.options;
            if (e.ghost && e.helper) {
                e.helper.get(0).removeChild(e.ghost.get(0));
            }
        }
    });
    c.ui.plugin.add("resizable", "grid", {
        resize: function(e, m) {
            var p = c(this).data("resizable"), h = p.options, k = p.size, i = p.originalSize, j = p.originalPosition, n = p.axis, l = h._aspectRatio || e.shiftKey;
            h.grid = typeof h.grid == "number" ? [h.grid, h.grid] : h.grid;
            var g = Math.round((k.width - i.width) / (h.grid[0] || 1)) * (h.grid[0] || 1), f = Math.round((k.height - i.height) / (h.grid[1] || 1)) * (h.grid[1] || 1);
            if (/^(se|s|e)$/.test(n)) {
                p.size.width = i.width + g;
                p.size.height = i.height + f;
            } else {
                if (/^(ne)$/.test(n)) {
                    p.size.width = i.width + g;
                    p.size.height = i.height + f;
                    p.position.top = j.top - f;
                } else {
                    if (/^(sw)$/.test(n)) {
                        p.size.width = i.width + g;
                        p.size.height = i.height + f;
                        p.position.left = j.left - g;
                    } else {
                        p.size.width = i.width + g;
                        p.size.height = i.height + f;
                        p.position.top = j.top - f;
                        p.position.left = j.left - g;
                    }
                }
            }
        }
    });
    var b = function(e) {
        return parseInt(e, 10) || 0;
    };
    var a = function(e) {
        return !isNaN(parseInt(e, 10));
    };
})(jQuery);
(function(a, b) {
    a.widget("ui.selectable", a.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            var d;
            this.refresh = function() {
                d = a(c.options.filter, c.element[0]);
                d.addClass("ui-selectee");
                d.each(function() {
                    var e = a(this);
                    var f = e.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: f.left,
                        top: f.top,
                        right: f.left + e.outerWidth(),
                        bottom: f.top + e.outerHeight(),
                        startselected: false,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();
            this.selectees = d.addClass("ui-selectee");
            this._mouseInit();
            this.helper = a("<div class='ui-selectable-helper'></div>");
        },
        destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
            this._mouseDestroy();
            return this;
        },
        _mouseStart: function(e) {
            var c = this;
            this.opos = [e.pageX, e.pageY];
            if (this.options.disabled) {
                return;
            }
            var d = this.options;
            this.selectees = a(d.filter, this.element[0]);
            this._trigger("start", e);
            a(d.appendTo).append(this.helper);
            this.helper.css({
                left: e.clientX,
                top: e.clientY,
                width: 0,
                height: 0
            });
            if (d.autoRefresh) {
                this.refresh();
            }
            this.selectees.filter(".ui-selected").each(function() {
                var f = a.data(this, "selectable-item");
                f.startselected = true;
                if (!e.metaKey&&!e.ctrlKey) {
                    f.$element.removeClass("ui-selected");
                    f.selected = false;
                    f.$element.addClass("ui-unselecting");
                    f.unselecting = true;
                    c._trigger("unselecting", e, {
                        unselecting: f.element
                    });
                }
            });
            a(e.target).parents().andSelf().each(function() {
                var g = a.data(this, "selectable-item");
                if (g) {
                    var f = (!e.metaKey&&!e.ctrlKey) ||!g.$element.hasClass("ui-selected");
                    g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
                    g.unselecting=!f;
                    g.selecting = f;
                    g.selected = f;
                    if (f) {
                        c._trigger("selecting", e, {
                            selecting: g.element
                        });
                    } else {
                        c._trigger("unselecting", e, {
                            unselecting: g.element
                        });
                    }
                    return false;
                }
            });
        },
        _mouseDrag: function(j) {
            var d = this;
            this.dragged = true;
            if (this.options.disabled) {
                return;
            }
            var f = this.options;
            var e = this.opos[0], i = this.opos[1], c = j.pageX, h = j.pageY;
            if (e > c) {
                var g = c;
                c = e;
                e = g;
            }
            if (i > h) {
                var g = h;
                h = i;
                i = g;
            }
            this.helper.css({
                left: e,
                top: i,
                width: c - e,
                height: h - i
            });
            this.selectees.each(function() {
                var k = a.data(this, "selectable-item");
                if (!k || k.element == d.element[0]) {
                    return;
                }
                var l = false;
                if (f.tolerance == "touch") {
                    l = (!(k.left > c || k.right < e || k.top > h || k.bottom < i));
                } else {
                    if (f.tolerance == "fit") {
                        l = (k.left > e && k.right < c && k.top > i && k.bottom < h);
                    }
                }
                if (l) {
                    if (k.selected) {
                        k.$element.removeClass("ui-selected");
                        k.selected = false;
                    }
                    if (k.unselecting) {
                        k.$element.removeClass("ui-unselecting");
                        k.unselecting = false;
                    }
                    if (!k.selecting) {
                        k.$element.addClass("ui-selecting");
                        k.selecting = true;
                        d._trigger("selecting", j, {
                            selecting: k.element
                        });
                    }
                } else {
                    if (k.selecting) {
                        if ((j.metaKey || j.ctrlKey) && k.startselected) {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            k.$element.addClass("ui-selected");
                            k.selected = true;
                        } else {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            if (k.startselected) {
                                k.$element.addClass("ui-unselecting");
                                k.unselecting = true;
                            }
                            d._trigger("unselecting", j, {
                                unselecting: k.element
                            });
                        }
                    }
                    if (k.selected) {
                        if (!j.metaKey&&!j.ctrlKey&&!k.startselected) {
                            k.$element.removeClass("ui-selected");
                            k.selected = false;
                            k.$element.addClass("ui-unselecting");
                            k.unselecting = true;
                            d._trigger("unselecting", j, {
                                unselecting: k.element
                            });
                        }
                    }
                }
            });
            return false;
        },
        _mouseStop: function(e) {
            var c = this;
            this.dragged = false;
            var d = this.options;
            a(".ui-unselecting", this.element[0]).each(function() {
                var f = a.data(this, "selectable-item");
                f.$element.removeClass("ui-unselecting");
                f.unselecting = false;
                f.startselected = false;
                c._trigger("unselected", e, {
                    unselected: f.element
                });
            });
            a(".ui-selecting", this.element[0]).each(function() {
                var f = a.data(this, "selectable-item");
                f.$element.removeClass("ui-selecting").addClass("ui-selected");
                f.selecting = false;
                f.selected = true;
                f.startselected = true;
                c._trigger("selected", e, {
                    selected: f.element
                });
            });
            this._trigger("stop", e);
            this.helper.remove();
            return false;
        }
    });
    a.extend(a.ui.selectable, {
        version: "@VERSION"
    });
})(jQuery);
(function(a, b) {
    a.widget("ui.sortable", a.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000
        },
        _create: function() {
            var c = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? c.axis === "x" || (/left|right/).test(this.items[0].item.css("float")) || (/inline|table-cell/).test(this.items[0].item.css("display")) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true;
        },
        destroy: function() {
            a.Widget.prototype.destroy.call(this);
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var c = this.items.length - 1; c >= 0; c--) {
                this.items[c].item.removeData(this.widgetName + "-item");
            }
            return this;
        },
        _setOption: function(c, d) {
            if (c === "disabled") {
                this.options[c] = d;
                this.widget()[d ? "addClass": "removeClass"]("ui-sortable-disabled");
            } else {
                a.Widget.prototype._setOption.apply(this, arguments);
            }
        },
        _mouseCapture: function(g, h) {
            var f = this;
            if (this.reverting) {
                return false;
            }
            if (this.options.disabled || this.options.type == "static") {
                return false;
            }
            this._refreshItems(g);
            var e = null, d = this, c = a(g.target).parents().each(function() {
                if (a.data(this, f.widgetName + "-item") == d) {
                    e = a(this);
                    return false;
                }
            });
            if (a.data(g.target, f.widgetName + "-item") == d) {
                e = a(g.target);
            }
            if (!e) {
                return false;
            }
            if (this.options.handle&&!h) {
                var i = false;
                a(this.options.handle, e).find("*").andSelf().each(function() {
                    if (this == g.target) {
                        i = true;
                    }
                });
                if (!i) {
                    return false;
                }
            }
            this.currentItem = e;
            this._removeCurrentsFromItems();
            return true;
        },
        _mouseStart: function(f, g, c) {
            var h = this.options, d = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(f);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            a.extend(this.offset, {
                click: {
                    left: f.pageX - this.offset.left,
                    top: f.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(f);
            this.originalPageX = f.pageX;
            this.originalPageY = f.pageY;
            (h.cursorAt && this._adjustOffsetFromHelper(h.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] != this.currentItem[0]) {
                this.currentItem.hide();
            }
            this._createPlaceholder();
            if (h.containment) {
                this._setContainment();
            }
            if (h.cursor) {
                if (a("body").css("cursor")) {
                    this._storedCursor = a("body").css("cursor");
                }
                a("body").css("cursor", h.cursor);
            }
            if (h.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", h.opacity);
            }
            if (h.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", h.zIndex);
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }
            this._trigger("start", f, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }
            if (!c) {
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("activate", f, d._uiHash(this));
                }
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this;
            }
            if (a.ui.ddmanager&&!h.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, f);
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(f);
            return true;
        },
        _mouseDrag: function(g) {
            this.position = this._generatePosition(g);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }
            if (this.options.scroll) {
                var h = this.options, c = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - g.pageY < h.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + h.scrollSpeed;
                    } else {
                        if (g.pageY - this.overflowOffset.top < h.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - h.scrollSpeed;
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - g.pageX < h.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + h.scrollSpeed;
                    } else {
                        if (g.pageX - this.overflowOffset.left < h.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - h.scrollSpeed;
                        }
                    }
                } else {
                    if (g.pageY - a(document).scrollTop() < h.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() - h.scrollSpeed);
                    } else {
                        if (a(window).height() - (g.pageY - a(document).scrollTop()) < h.scrollSensitivity) {
                            c = a(document).scrollTop(a(document).scrollTop() + h.scrollSpeed);
                        }
                    }
                    if (g.pageX - a(document).scrollLeft() < h.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() - h.scrollSpeed);
                    } else {
                        if (a(window).width() - (g.pageX - a(document).scrollLeft()) < h.scrollSensitivity) {
                            c = a(document).scrollLeft(a(document).scrollLeft() + h.scrollSpeed);
                        }
                    }
                }
                if (c !== false && a.ui.ddmanager&&!h.dropBehaviour) {
                    a.ui.ddmanager.prepareOffsets(this, g);
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px";
            }
            for (var e = this.items.length - 1; e >= 0; e--) {
                var f = this.items[e], d = f.item[0], j = this._intersectsWithPointer(f);
                if (!j) {
                    continue;
                }
                if (d != this.currentItem[0] && this.placeholder[j == 1 ? "next": "prev"]()[0] != d&&!a.ui.contains(this.placeholder[0], d) && (this.options.type == "semi-dynamic"?!a.ui.contains(this.element[0], d) : true)) {
                    this.direction = j == 1 ? "down" : "up";
                    if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) {
                        this._rearrange(g, f);
                    } else {
                        break;
                    }
                    this._trigger("change", g, this._uiHash());
                    break;
                }
            }
            this._contactContainers(g);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, g);
            }
            this._trigger("sort", g, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false;
        },
        _mouseStop: function(d, e) {
            if (!d) {
                return;
            }
            if (a.ui.ddmanager&&!this.options.dropBehaviour) {
                a.ui.ddmanager.drop(this, d);
            }
            if (this.options.revert) {
                var c = this;
                var f = c.placeholder.offset();
                c.reverting = true;
                a(this.helper).animate({
                    left: f.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: f.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    c._clear(d);
                });
            } else {
                this._clear(d, e);
            }
            return false;
        },
        cancel: function() {
            var c = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper == "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }
                for (var d = this.containers.length - 1; d >= 0; d--) {
                    this.containers[d]._trigger("deactivate", null, c._uiHash(this));
                    if (this.containers[d].containerCache.over) {
                        this.containers[d]._trigger("out", null, c._uiHash(this));
                        this.containers[d].containerCache.over = 0;
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }
                a.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    a(this.domPosition.prev).after(this.currentItem);
                } else {
                    a(this.domPosition.parent).prepend(this.currentItem);
                }
            }
            return this;
        },
        serialize: function(e) {
            var c = this._getItemsAsjQuery(e && e.connected);
            var d = [];
            e = e || {};
            a(c).each(function() {
                var f = (a(e.item || this).attr(e.attribute || "id") || "").match(e.expression || (/(.+)[-=_](.+)/));
                if (f) {
                    d.push((e.key || f[1] + "[]") + "=" + (e.key && e.expression ? f[1] : f[2]));
                }
            });
            if (!d.length && e.key) {
                d.push(e.key + "=");
            }
            return d.join("&");
        },
        toArray: function(e) {
            var c = this._getItemsAsjQuery(e && e.connected);
            var d = [];
            e = e || {};
            c.each(function() {
                d.push(a(e.item || this).attr(e.attribute || "id") || "");
            });
            return d;
        },
        _intersectsWith: function(m) {
            var e = this.positionAbs.left, d = e + this.helperProportions.width, k = this.positionAbs.top, j = k + this.helperProportions.height;
            var f = m.left, c = f + m.width, n = m.top, i = n + m.height;
            var o = this.offset.click.top, h = this.offset.click.left;
            var g = (k + o) > n && (k + o) < i && (e + h) > f && (e + h) < c;
            if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width": "height"] > m[this.floating ? "width": "height"])) {
                return g;
            } else {
                return (f < e + (this.helperProportions.width / 2) && d - (this.helperProportions.width / 2) < c && n < k + (this.helperProportions.height / 2) && j - (this.helperProportions.height / 2) < i);
            }
        },
        _intersectsWithPointer: function(e) {
            var f = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), h = f && d, c = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
            if (!h) {
                return false;
            }
            return this.floating ? (((g && g == "right") || c == "down") ? 2 : 1) : (c && (c == "down" ? 2 : 1));
        },
        _intersectsWithSides: function(f) {
            var d = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, f.top + (f.height / 2), f.height), e = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, f.left + (f.width / 2), f.width), c = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
            if (this.floating && g) {
                return ((g == "right" && e) || (g == "left"&&!e));
            } else {
                return c && ((c == "down" && d) || (c == "up"&&!d));
            }
        },
        _getDragVerticalDirection: function() {
            var c = this.positionAbs.top - this.lastPositionAbs.top;
            return c != 0 && (c > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var c = this.positionAbs.left - this.lastPositionAbs.left;
            return c != 0 && (c > 0 ? "right" : "left");
        },
        refresh: function(c) {
            this._refreshItems(c);
            this.refreshPositions();
            return this;
        },
        _connectWith: function() {
            var c = this.options;
            return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith;
        },
        _getItemsAsjQuery: function(c) {
            var m = this;
            var h = [];
            var f = [];
            var k = this._connectWith();
            if (k && c) {
                for (var e = k.length - 1; e >= 0; e--) {
                    var l = a(k[e]);
                    for (var d = l.length - 1; d >= 0; d--) {
                        var g = a.data(l[d], this.widgetName);
                        if (g && g != this&&!g.options.disabled) {
                            f.push([a.isFunction(g.options.items) ? g.options.items.call(g.element): a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
                        }
                    }
                }
            }
            f.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }): a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var e = f.length - 1; e >= 0; e--) {
                f[e][0].each(function() {
                    h.push(this);
                });
            }
            return a(h);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            for (var d = 0; d < this.items.length; d++) {
                for (var c = 0; c < e.length; c++) {
                    if (e[c] == this.items[d].item[0]) {
                        this.items.splice(d, 1);
                    }
                }
            }
        },
        _refreshItems: function(c) {
            this.items = [];
            this.containers = [this];
            var k = this.items;
            var q = this;
            var g = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
                item: this.currentItem
            }): a(this.options.items, this.element), this]];
            var m = this._connectWith();
            if (m && this.ready) {
                for (var f = m.length - 1; f >= 0; f--) {
                    var n = a(m[f]);
                    for (var e = n.length - 1; e >= 0; e--) {
                        var h = a.data(n[e], this.widgetName);
                        if (h && h != this&&!h.options.disabled) {
                            g.push([a.isFunction(h.options.items) ? h.options.items.call(h.element[0], c, {
                                item: this.currentItem
                            }): a(h.options.items, h.element), h]);
                            this.containers.push(h);
                        }
                    }
                }
            }
            for (var f = g.length - 1; f >= 0; f--) {
                var l = g[f][1];
                var d = g[f][0];
                for (var e = 0, o = d.length; e < o; e++) {
                    var p = a(d[e]);
                    p.data(this.widgetName + "-item", l);
                    k.push({
                        item: p,
                        instance: l,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function(c) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }
            for (var e = this.items.length - 1; e >= 0; e--) {
                var f = this.items[e];
                if (f.instance != this.currentContainer && this.currentContainer && f.item[0] != this.currentItem[0]) {
                    continue;
                }
                var d = this.options.toleranceElement ? a(this.options.toleranceElement, f.item): f.item;
                if (!c) {
                    f.width = d.outerWidth();
                    f.height = d.outerHeight();
                }
                var g = d.offset();
                f.left = g.left;
                f.top = g.top;
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    var g = this.containers[e].element.offset();
                    this.containers[e].containerCache.left = g.left;
                    this.containers[e].containerCache.top = g.top;
                    this.containers[e].containerCache.width = this.containers[e].element.outerWidth();
                    this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                }
            }
            return this;
        },
        _createPlaceholder: function(e) {
            var c = e || this, f = c.options;
            if (!f.placeholder || f.placeholder.constructor == String) {
                var d = f.placeholder;
                f.placeholder = {
                    element: function() {
                        var g = a(document.createElement(c.currentItem[0].nodeName)).addClass(d || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper").html("&nbsp;")[0];
                        if (!d) {
                            g.style.visibility = "hidden";
                        }
                        return g;
                    },
                    update: function(g, h) {
                        if (d&&!f.forcePlaceholderSize) {
                            return;
                        }
                        if (!h.height()) {
                            h.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!h.width()) {
                            h.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }
            c.placeholder = a(f.placeholder.element.call(c.element, c.currentItem));
            c.currentItem.after(c.placeholder);
            f.placeholder.update(c, c.placeholder);
        },
        _contactContainers: function(c) {
            var e = null, l = null;
            for (var g = this.containers.length - 1; g >= 0; g--) {
                if (a.ui.contains(this.currentItem[0], this.containers[g].element[0])) {
                    continue;
                }
                if (this._intersectsWith(this.containers[g].containerCache)) {
                    if (e && a.ui.contains(this.containers[g].element[0], e.element[0])) {
                        continue;
                    }
                    e = this.containers[g];
                    l = g;
                } else {
                    if (this.containers[g].containerCache.over) {
                        this.containers[g]._trigger("out", c, this._uiHash(this));
                        this.containers[g].containerCache.over = 0;
                    }
                }
            }
            if (!e) {
                return;
            }
            if (this.containers.length === 1) {
                this.containers[l]._trigger("over", c, this._uiHash(this));
                this.containers[l].containerCache.over = 1;
            } else {
                if (this.currentContainer != this.containers[l]) {
                    var k = 10000;
                    var h = null;
                    var d = this.positionAbs[this.containers[l].floating ? "left": "top"];
                    for (var f = this.items.length - 1; f >= 0; f--) {
                        if (!a.ui.contains(this.containers[l].element[0], this.items[f].item[0])) {
                            continue;
                        }
                        var m = this.items[f][this.containers[l].floating ? "left": "top"];
                        if (Math.abs(m - d) < k) {
                            k = Math.abs(m - d);
                            h = this.items[f];
                        }
                    }
                    if (!h&&!this.options.dropOnEmpty) {
                        return;
                    }
                    this.currentContainer = this.containers[l];
                    h ? this._rearrange(c, h, null, true) : this._rearrange(c, null, this.containers[l].element, true);
                    this._trigger("change", c, this._uiHash());
                    this.containers[l]._trigger("change", c, this._uiHash(this));
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[l]._trigger("over", c, this._uiHash(this));
                    this.containers[l].containerCache.over = 1;
                }
            }
        },
        _createHelper: function(d) {
            var e = this.options;
            var c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d, this.currentItem])): (e.helper == "clone" ? this.currentItem.clone() : this.currentItem);
            if (!c.parents("body").length) {
                a(e.appendTo != "parent" ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0]);
            }
            if (c[0] == this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            }
            if (c[0].style.width == "" || e.forceHelperSize) {
                c.width(this.currentItem.width());
            }
            if (c[0].style.height == "" || e.forceHelperSize) {
                c.height(this.currentItem.height());
            }
            return c;
        },
        _adjustOffsetFromHelper: function(c) {
            if (typeof c == "string") {
                c = c.split(" ");
            }
            if (a.isArray(c)) {
                c = {
                    left: + c[0],
                    top: + c[1] || 0
                };
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left;
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left;
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top;
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top;
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop();
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) {
                c = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var c = this.currentItem.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0
                };
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var f = this.options;
            if (f.containment == "parent") {
                f.containment = this.helper[0].parentNode;
            }
            if (f.containment == "document" || f.containment == "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(f.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(f.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            }
            if (!(/^(document|window|parent)$/).test(f.containment)) {
                var d = a(f.containment)[0];
                var e = a(f.containment).offset();
                var c = (a(d).css("overflow") != "hidden");
                this.containment = [e.left + (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (c ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (c ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
            }
        },
        _convertPositionTo: function(g, i) {
            if (!i) {
                i = this.position;
            }
            var e = g == "absolute" ? 1: - 1;
            var f = this.options, c = this.cssPosition == "absolute"&&!(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent, h = (/(html|body)/i).test(c[0].tagName);
            return {
                top: (i.top + this.offset.relative.top * e + this.offset.parent.top * e - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : (h ? 0 : c.scrollTop())) * e)),
                left: (i.left + this.offset.relative.left * e + this.offset.parent.left * e - (a.browser.safari && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): h ? 0: c.scrollLeft()) * e))
            };
        },
        _generatePosition: function(f) {
            var i = this.options, c = this.cssPosition == "absolute"&&!(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent, j = (/(html|body)/i).test(c[0].tagName);
            if (this.cssPosition == "relative"&&!(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }
            var e = f.pageX;
            var d = f.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (f.pageX - this.offset.click.left < this.containment[0]) {
                        e = this.containment[0] + this.offset.click.left;
                    }
                    if (f.pageY - this.offset.click.top < this.containment[1]) {
                        d = this.containment[1] + this.offset.click.top;
                    }
                    if (f.pageX - this.offset.click.left > this.containment[2]) {
                        e = this.containment[2] + this.offset.click.left;
                    }
                    if (f.pageY - this.offset.click.top > this.containment[3]) {
                        d = this.containment[3] + this.offset.click.top;
                    }
                }
                if (i.grid) {
                    var h = this.originalPageY + Math.round((d - this.originalPageY) / i.grid[1]) * i.grid[1];
                    d = this.containment ? (!(h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3]) ? h : (!(h - this.offset.click.top < this.containment[1]) ? h - i.grid[1] : h + i.grid[1])) : h;
                    var g = this.originalPageX + Math.round((e - this.originalPageX) / i.grid[0]) * i.grid[0];
                    e = this.containment ? (!(g - this.offset.click.left < this.containment[0] || g - this.offset.click.left > this.containment[2]) ? g : (!(g - this.offset.click.left < this.containment[0]) ? g - i.grid[0] : g + i.grid[0])) : g;
                }
            }
            return {
                top: (d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : (j ? 0 : c.scrollTop())))),
                left: (e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): j ? 0: c.scrollLeft())))
            };
        },
        _rearrange: function(h, g, d, f) {
            d ? d[0].appendChild(this.placeholder[0]) : g.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == "down" ? g.item[0] : g.item[0].nextSibling));
            this.counter = this.counter?++this.counter : 1;
            var e = this, c = this.counter;
            window.setTimeout(function() {
                if (c == e.counter) {
                    e.refreshPositions(!f);
                }
            }, 0);
        },
        _clear: function(e, f) {
            this.reverting = false;
            var g = [], c = this;
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var d in this._storedCSS) {
                    if (this._storedCSS[d] == "auto" || this._storedCSS[d] == "static") {
                        this._storedCSS[d] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }
            if (this.fromOutside&&!f) {
                g.push(function(h) {
                    this._trigger("receive", h, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0])&&!f) {
                g.push(function(h) {
                    this._trigger("update", h, this._uiHash());
                });
            }
            if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                if (!f) {
                    g.push(function(h) {
                        this._trigger("remove", h, this._uiHash());
                    });
                }
                for (var d = this.containers.length - 1; d >= 0; d--) {
                    if (a.ui.contains(this.containers[d].element[0], this.currentItem[0])&&!f) {
                        g.push((function(h) {
                            return function(i) {
                                h._trigger("receive", i, this._uiHash(this));
                            };
                        }).call(this, this.containers[d]));
                        g.push((function(h) {
                            return function(i) {
                                h._trigger("update", i, this._uiHash(this));
                            };
                        }).call(this, this.containers[d]));
                    }
                }
            }
            for (var d = this.containers.length - 1; d >= 0; d--) {
                if (!f) {
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("deactivate", i, this._uiHash(this));
                        };
                    }).call(this, this.containers[d]));
                }
                if (this.containers[d].containerCache.over) {
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("out", i, this._uiHash(this));
                        };
                    }).call(this, this.containers[d]));
                    this.containers[d].containerCache.over = 0;
                }
            }
            if (this._storedCursor) {
                a("body").css("cursor", this._storedCursor);
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!f) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var d = 0; d < g.length; d++) {
                        g[d].call(this, e);
                    }
                    this._trigger("stop", e, this._uiHash());
                }
                return false;
            }
            if (!f) {
                this._trigger("beforeStop", e, this._uiHash());
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] != this.currentItem[0]) {
                this.helper.remove();
            }
            this.helper = null;
            if (!f) {
                for (var d = 0; d < g.length; d++) {
                    g[d].call(this, e);
                }
                this._trigger("stop", e, this._uiHash());
            }
            this.fromOutside = false;
            return true;
        },
        _trigger: function() {
            if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },
        _uiHash: function(d) {
            var c = d || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: d ? d.element: null
            };
        }
    });
    a.extend(a.ui.sortable, {
        version: "@VERSION"
    });
})(jQuery);
jQuery.effects || (function(h, e) {
    h.effects = {};
    h.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(n, m) {
        h.fx.step[m] = function(o) {
            if (!o.colorInit) {
                o.start = l(o.elem, m);
                o.end = j(o.end);
                o.colorInit = true;
            }
            o.elem.style[m] = "rgb(" + Math.max(Math.min(parseInt((o.pos * (o.end[0] - o.start[0])) + o.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt((o.pos * (o.end[1] - o.start[1])) + o.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt((o.pos * (o.end[2] - o.start[2])) + o.start[2], 10), 255), 0) + ")";
        };
    });
    function j(n) {
        var m;
        if (n && n.constructor == Array && n.length == 3) {
            return n;
        }
        if (m = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) {
            return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
        }
        if (m = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) {
            return [parseFloat(m[1]) * 2.55, parseFloat(m[2]) * 2.55, parseFloat(m[3]) * 2.55];
        }
        if (m = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) {
            return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
        }
        if (m = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) {
            return [parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16), parseInt(m[3] + m[3], 16)];
        }
        if (m = /rgba\(0, 0, 0, 0\)/.exec(n)) {
            return a.transparent;
        }
        return a[h.trim(n).toLowerCase()];
    }
    function l(o, m) {
        var n;
        do {
            n = h.curCSS(o, m);
            if (n != "" && n != "transparent" || h.nodeName(o, "body")) {
                break;
            }
            m = "backgroundColor";
        }
        while (o = o.parentNode);
        return j(n);
    }
    var a = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    };
    var f = ["add", "remove", "toggle"], c = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    };
    function g() {
        var p = document.defaultView ? document.defaultView.getComputedStyle(this, null): this.currentStyle, q = {}, n, o;
        if (p && p.length && p[0] && p[p[0]]) {
            var m = p.length;
            while (m--) {
                n = p[m];
                if (typeof p[n] == "string") {
                    o = n.replace(/\-(\w)/g, function(r, s) {
                        return s.toUpperCase();
                    });
                    q[o] = p[n];
                }
            }
        } else {
            for (n in p) {
                if (typeof p[n] === "string") {
                    q[n] = p[n];
                }
            }
        }
        return q;
    }
    function b(n) {
        var m, o;
        for (m in n) {
            o = n[m];
            if (o == null || h.isFunction(o) || m in c || (/scrollbar/).test(m) || (!(/color/i).test(m) && isNaN(parseFloat(o)))) {
                delete n[m];
            }
        }
        return n;
    }
    function i(m, o) {
        var p = {
            _: 0
        }, n;
        for (n in o) {
            if (m[n] != o[n]) {
                p[n] = o[n];
            }
        }
        return p;
    }
    h.effects.animateClass = function(m, n, p, o) {
        if (h.isFunction(p)) {
            o = p;
            p = null;
        }
        return this.queue(function() {
            var t = h(this), q = t.attr("style") || " ", u = b(g.call(this)), s, r = t.attr("class") || "";
            h.each(f, function(v, w) {
                if (m[w]) {
                    t[w + "Class"](m[w]);
                }
            });
            s = b(g.call(this));
            t.attr("class", r);
            t.animate(i(u, s), {
                queue: false,
                duration: n,
                easing: p,
                complete: function() {
                    h.each(f, function(v, w) {
                        if (m[w]) {
                            t[w + "Class"](m[w]);
                        }
                    });
                    if (typeof t.attr("style") == "object") {
                        t.attr("style").cssText = "";
                        t.attr("style").cssText = q;
                    } else {
                        t.attr("style", q);
                    }
                    if (o) {
                        o.apply(this, arguments);
                    }
                    h.dequeue(this);
                }
            });
        });
    };
    h.fn.extend({
        _addClass: h.fn.addClass,
        addClass: function(n, m, p, o) {
            return m ? h.effects.animateClass.apply(this, [{
                add: n
            }, m, p, o]) : this._addClass(n);
        },
        _removeClass: h.fn.removeClass,
        removeClass: function(n, m, p, o) {
            return m ? h.effects.animateClass.apply(this, [{
                remove: n
            }, m, p, o]) : this._removeClass(n);
        },
        _toggleClass: h.fn.toggleClass,
        toggleClass: function(o, n, m, q, p) {
            if (typeof n == "boolean" || n === e) {
                if (!m) {
                    return this._toggleClass(o, n);
                } else {
                    return h.effects.animateClass.apply(this, [(n ? {
                        add: o
                    } : {
                        remove: o
                    }), m, q, p]);
                }
            } else {
                return h.effects.animateClass.apply(this, [{
                    toggle: o
                }, n, m, q]);
            }
        },
        switchClass: function(m, o, n, q, p) {
            return h.effects.animateClass.apply(this, [{
                add: o,
                remove: m
            }, n, q, p]);
        }
    });
    h.extend(h.effects, {
        version: "@VERSION",
        save: function(n, o) {
            for (var m = 0; m < o.length; m++) {
                if (o[m] !== null) {
                    n.data("ec.storage." + o[m], n[0].style[o[m]]);
                }
            }
        },
        restore: function(n, o) {
            for (var m = 0; m < o.length; m++) {
                if (o[m] !== null) {
                    n.css(o[m], n.data("ec.storage." + o[m]));
                }
            }
        },
        setMode: function(m, n) {
            if (n == "toggle") {
                n = m.is(":hidden") ? "show" : "hide";
            }
            return n;
        },
        getBaseline: function(n, o) {
            var p, m;
            switch (n[0]) {
            case"top":
                p = 0;
                break;
            case"middle":
                p = 0.5;
                break;
            case"bottom":
                p = 1;
                break;
            default:
                p = n[0] / o.height;
            }
            switch (n[1]) {
            case"left":
                m = 0;
                break;
            case"center":
                m = 0.5;
                break;
            case"right":
                m = 1;
                break;
            default:
                m = n[1] / o.width;
            }
            return {
                x: m,
                y: p
            };
        },
        createWrapper: function(m) {
            if (m.parent().is(".ui-effects-wrapper")) {
                return m.parent();
            }
            var n = {
                width: m.outerWidth(true),
                height: m.outerHeight(true),
                "float": m.css("float")
            }, p = h("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            }), o = document.activeElement;
            m.wrap(p);
            if (m[0] === o || h.contains(m[0], o)) {
                h(o).focus();
            }
            p = m.parent();
            if (m.css("position") == "static") {
                p.css({
                    position: "relative"
                });
                m.css({
                    position: "relative"
                });
            } else {
                h.extend(n, {
                    position: m.css("position"),
                    zIndex: m.css("z-index")
                });
                h.each(["top", "left", "bottom", "right"], function(q, r) {
                    n[r] = m.css(r);
                    if (isNaN(parseInt(n[r], 10))) {
                        n[r] = "auto";
                    }
                });
                m.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                });
            }
            return p.css(n).show();
        },
        removeWrapper: function(m) {
            var n, o = document.activeElement;
            if (m.parent().is(".ui-effects-wrapper")) {
                n = m.parent().replaceWith(m);
                if (m[0] === o || h.contains(m[0], o)) {
                    h(o).focus();
                }
                return n;
            }
            return m;
        },
        setTransition: function(n, p, m, o) {
            o = o || {};
            h.each(p, function(r, q) {
                var s = n.cssUnit(q);
                if (s[0] > 0) {
                    o[q] = s[0] * m + s[1];
                }
            });
            return o;
        }
    });
    function d(n, m, o, p) {
        if (typeof n == "object") {
            p = m;
            o = null;
            m = n;
            n = m.effect;
        }
        if (h.isFunction(m)) {
            p = m;
            o = null;
            m = {};
        }
        if (typeof m == "number" || h.fx.speeds[m]) {
            p = o;
            o = m;
            m = {};
        }
        if (h.isFunction(o)) {
            p = o;
            o = null;
        }
        m = m || {};
        o = o || m.duration;
        o = h.fx.off ? 0 : typeof o == "number" ? o : o in h.fx.speeds ? h.fx.speeds[o] : h.fx.speeds._default;
        p = p || m.complete;
        return [n, m, o, p];
    }
    function k(m) {
        if (!m || typeof m === "number" || h.fx.speeds[m]) {
            return true;
        }
        if (typeof m === "string"&&!h.effects[m]) {
            return true;
        }
        return false;
    }
    h.fn.extend({
        effect: function(p, o, r, t) {
            var n = d.apply(this, arguments), q = {
                options: n[1],
                duration: n[2],
                callback: n[3]
            }, s = q.options.mode, m = h.effects[p];
            if (h.fx.off ||!m) {
                if (s) {
                    return this[s](q.duration, q.callback);
                } else {
                    return this.each(function() {
                        if (q.callback) {
                            q.callback.call(this);
                        }
                    });
                }
            }
            return m.call(this, q);
        },
        _show: h.fn.show,
        show: function(n) {
            if (k(n)) {
                return this._show.apply(this, arguments);
            } else {
                var m = d.apply(this, arguments);
                m[1].mode = "show";
                return this.effect.apply(this, m);
            }
        },
        _hide: h.fn.hide,
        hide: function(n) {
            if (k(n)) {
                return this._hide.apply(this, arguments);
            } else {
                var m = d.apply(this, arguments);
                m[1].mode = "hide";
                return this.effect.apply(this, m);
            }
        },
        __toggle: h.fn.toggle,
        toggle: function(n) {
            if (k(n) || typeof n === "boolean" || h.isFunction(n)) {
                return this.__toggle.apply(this, arguments);
            } else {
                var m = d.apply(this, arguments);
                m[1].mode = "toggle";
                return this.effect.apply(this, m);
            }
        },
        cssUnit: function(m) {
            var n = this.css(m), o = [];
            h.each(["em", "px", "%", "pt"], function(p, q) {
                if (n.indexOf(q) > 0) {
                    o = [parseFloat(n), q];
                }
            });
            return o;
        }
    });
    h.easing.jswing = h.easing.swing;
    h.extend(h.easing, {
        def: "easeOutQuad",
        swing: function(n, o, m, q, p) {
            return h.easing[h.easing.def](n, o, m, q, p);
        },
        easeInQuad: function(n, o, m, q, p) {
            return q * (o/=p) * o + m;
        },
        easeOutQuad: function(n, o, m, q, p) {
            return - q * (o/=p) * (o - 2) + m;
        },
        easeInOutQuad: function(n, o, m, q, p) {
            if ((o/=p / 2) < 1) {
                return q / 2 * o * o + m;
            }
            return - q / 2 * ((--o) * (o - 2) - 1) + m;
        },
        easeInCubic: function(n, o, m, q, p) {
            return q * (o/=p) * o * o + m;
        },
        easeOutCubic: function(n, o, m, q, p) {
            return q * ((o = o / p - 1) * o * o + 1) + m;
        },
        easeInOutCubic: function(n, o, m, q, p) {
            if ((o/=p / 2) < 1) {
                return q / 2 * o * o * o + m;
            }
            return q / 2 * ((o -= 2) * o * o + 2) + m;
        },
        easeInQuart: function(n, o, m, q, p) {
            return q * (o/=p) * o * o * o + m;
        },
        easeOutQuart: function(n, o, m, q, p) {
            return - q * ((o = o / p - 1) * o * o * o - 1) + m;
        },
        easeInOutQuart: function(n, o, m, q, p) {
            if ((o/=p / 2) < 1) {
                return q / 2 * o * o * o * o + m;
            }
            return - q / 2 * ((o -= 2) * o * o * o - 2) + m;
        },
        easeInQuint: function(n, o, m, q, p) {
            return q * (o/=p) * o * o * o * o + m;
        },
        easeOutQuint: function(n, o, m, q, p) {
            return q * ((o = o / p - 1) * o * o * o * o + 1) + m;
        },
        easeInOutQuint: function(n, o, m, q, p) {
            if ((o/=p / 2) < 1) {
                return q / 2 * o * o * o * o * o + m;
            }
            return q / 2 * ((o -= 2) * o * o * o * o + 2) + m;
        },
        easeInSine: function(n, o, m, q, p) {
            return - q * Math.cos(o / p * (Math.PI / 2)) + q + m;
        },
        easeOutSine: function(n, o, m, q, p) {
            return q * Math.sin(o / p * (Math.PI / 2)) + m;
        },
        easeInOutSine: function(n, o, m, q, p) {
            return - q / 2 * (Math.cos(Math.PI * o / p) - 1) + m;
        },
        easeInExpo: function(n, o, m, q, p) {
            return (o == 0) ? m : q * Math.pow(2, 10 * (o / p - 1)) + m;
        },
        easeOutExpo: function(n, o, m, q, p) {
            return (o == p) ? m + q : q * ( - Math.pow(2, - 10 * o / p) + 1) + m;
        },
        easeInOutExpo: function(n, o, m, q, p) {
            if (o == 0) {
                return m;
            }
            if (o == p) {
                return m + q;
            }
            if ((o/=p / 2) < 1) {
                return q / 2 * Math.pow(2, 10 * (o - 1)) + m;
            }
            return q / 2 * ( - Math.pow(2, - 10*--o) + 2) + m;
        },
        easeInCirc: function(n, o, m, q, p) {
            return - q * (Math.sqrt(1 - (o/=p) * o) - 1) + m;
        },
        easeOutCirc: function(n, o, m, q, p) {
            return q * Math.sqrt(1 - (o = o / p - 1) * o) + m;
        },
        easeInOutCirc: function(n, o, m, q, p) {
            if ((o/=p / 2) < 1) {
                return - q / 2 * (Math.sqrt(1 - o * o) - 1) + m;
            }
            return q / 2 * (Math.sqrt(1 - (o -= 2) * o) + 1) + m;
        },
        easeInElastic: function(n, q, m, w, v) {
            var r = 1.70158;
            var u = 0;
            var o = w;
            if (q == 0) {
                return m;
            }
            if ((q/=v) == 1) {
                return m + w;
            }
            if (!u) {
                u = v * 0.3;
            }
            if (o < Math.abs(w)) {
                o = w;
                var r = u / 4;
            } else {
                var r = u / (2 * Math.PI) * Math.asin(w / o);
            }
            return - (o * Math.pow(2, 10 * (q -= 1)) * Math.sin((q * v - r) * (2 * Math.PI) / u)) + m;
        },
        easeOutElastic: function(n, q, m, w, v) {
            var r = 1.70158;
            var u = 0;
            var o = w;
            if (q == 0) {
                return m;
            }
            if ((q/=v) == 1) {
                return m + w;
            }
            if (!u) {
                u = v * 0.3;
            }
            if (o < Math.abs(w)) {
                o = w;
                var r = u / 4;
            } else {
                var r = u / (2 * Math.PI) * Math.asin(w / o);
            }
            return o * Math.pow(2, - 10 * q) * Math.sin((q * v - r) * (2 * Math.PI) / u) + w + m;
        },
        easeInOutElastic: function(n, q, m, w, v) {
            var r = 1.70158;
            var u = 0;
            var o = w;
            if (q == 0) {
                return m;
            }
            if ((q/=v / 2) == 2) {
                return m + w;
            }
            if (!u) {
                u = v * (0.3 * 1.5);
            }
            if (o < Math.abs(w)) {
                o = w;
                var r = u / 4;
            } else {
                var r = u / (2 * Math.PI) * Math.asin(w / o);
            }
            if (q < 1) {
                return - 0.5 * (o * Math.pow(2, 10 * (q -= 1)) * Math.sin((q * v - r) * (2 * Math.PI) / u)) + m;
            }
            return o * Math.pow(2, - 10 * (q -= 1)) * Math.sin((q * v - r) * (2 * Math.PI) / u) * 0.5 + w + m;
        },
        easeInBack: function(n, o, m, r, q, p) {
            if (p == e) {
                p = 1.70158;
            }
            return r * (o/=q) * o * ((p + 1) * o - p) + m;
        },
        easeOutBack: function(n, o, m, r, q, p) {
            if (p == e) {
                p = 1.70158;
            }
            return r * ((o = o / q - 1) * o * ((p + 1) * o + p) + 1) + m;
        },
        easeInOutBack: function(n, o, m, r, q, p) {
            if (p == e) {
                p = 1.70158;
            }
            if ((o/=q / 2) < 1) {
                return r / 2 * (o * o * (((p*=(1.525)) + 1) * o - p)) + m;
            }
            return r / 2 * ((o -= 2) * o * (((p*=(1.525)) + 1) * o + p) + 2) + m;
        },
        easeInBounce: function(n, o, m, q, p) {
            return q - h.easing.easeOutBounce(n, p - o, 0, q, p) + m;
        },
        easeOutBounce: function(n, o, m, q, p) {
            if ((o/=p) < (1 / 2.75)) {
                return q * (7.5625 * o * o) + m;
            } else {
                if (o < (2 / 2.75)) {
                    return q * (7.5625 * (o -= (1.5 / 2.75)) * o + 0.75) + m;
                } else {
                    if (o < (2.5 / 2.75)) {
                        return q * (7.5625 * (o -= (2.25 / 2.75)) * o + 0.9375) + m;
                    } else {
                        return q * (7.5625 * (o -= (2.625 / 2.75)) * o + 0.984375) + m;
                    }
                }
            }
        },
        easeInOutBounce: function(n, o, m, q, p) {
            if (o < p / 2) {
                return h.easing.easeInBounce(n, o * 2, 0, q, p) * 0.5 + m;
            }
            return h.easing.easeOutBounce(n, o * 2 - p, 0, q, p) * 0.5 + q * 0.5 + m;
        }
    });
})(jQuery);
(function(a, b) {
    a.effects.blind = function(c) {
        return this.queue(function() {
            var e = a(this), d = ["position", "top", "bottom", "left", "right"];
            var i = a.effects.setMode(e, c.options.mode || "hide");
            var h = c.options.direction || "vertical";
            a.effects.save(e, d);
            e.show();
            var k = a.effects.createWrapper(e).css({
                overflow: "hidden"
            });
            var f = (h == "vertical") ? "height": "width";
            var j = (h == "vertical") ? k.height(): k.width();
            if (i == "show") {
                k.css(f, 0);
            }
            var g = {};
            g[f] = i == "show" ? j : 0;
            k.animate(g, c.duration, c.options.easing, function() {
                if (i == "hide") {
                    e.hide();
                }
                a.effects.restore(e, d);
                a.effects.removeWrapper(e);
                if (c.callback) {
                    c.callback.apply(e[0], arguments);
                }
                e.dequeue();
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.bounce = function(c) {
        return this.queue(function() {
            var f = a(this), m = ["position", "top", "bottom", "left", "right"];
            var l = a.effects.setMode(f, c.options.mode || "effect");
            var o = c.options.direction || "up";
            var d = c.options.distance || 20;
            var e = c.options.times || 5;
            var h = c.duration || 250;
            if (/show|hide/.test(l)) {
                m.push("opacity");
            }
            a.effects.save(f, m);
            f.show();
            a.effects.createWrapper(f);
            var g = (o == "up" || o == "down") ? "top": "left";
            var q = (o == "up" || o == "left") ? "pos": "neg";
            var d = c.options.distance || (g == "top" ? f.outerHeight({
                margin: true
            }) / 3 : f.outerWidth({
                margin: true
            }) / 3);
            if (l == "show") {
                f.css("opacity", 0).css(g, q == "pos"?-d : d);
            }
            if (l == "hide") {
                d = d / (e * 2);
            }
            if (l != "hide") {
                e--;
            }
            if (l == "show") {
                var j = {
                    opacity: 1
                };
                j[g] = (q == "pos" ? "+=" : "-=") + d;
                f.animate(j, h / 2, c.options.easing);
                d = d / 2;
                e--;
            }
            for (var k = 0; k < e; k++) {
                var p = {}, n = {};
                p[g] = (q == "pos" ? "-=" : "+=") + d;
                n[g] = (q == "pos" ? "+=" : "-=") + d;
                f.animate(p, h / 2, c.options.easing).animate(n, h / 2, c.options.easing);
                d = (l == "hide") ? d * 2 : d / 2;
            }
            if (l == "hide") {
                var j = {
                    opacity: 0
                };
                j[g] = (q == "pos" ? "-=" : "+=") + d;
                f.animate(j, h / 2, c.options.easing, function() {
                    f.hide();
                    a.effects.restore(f, m);
                    a.effects.removeWrapper(f);
                    if (c.callback) {
                        c.callback.apply(this, arguments);
                    }
                });
            } else {
                var p = {}, n = {};
                p[g] = (q == "pos" ? "-=" : "+=") + d;
                n[g] = (q == "pos" ? "+=" : "-=") + d;
                f.animate(p, h / 2, c.options.easing).animate(n, h / 2, c.options.easing, function() {
                    a.effects.restore(f, m);
                    a.effects.removeWrapper(f);
                    if (c.callback) {
                        c.callback.apply(this, arguments);
                    }
                });
            }
            f.queue("fx", function() {
                f.dequeue();
            });
            f.dequeue();
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.clip = function(c) {
        return this.queue(function() {
            var g = a(this), k = ["position", "top", "bottom", "left", "right", "height", "width"];
            var j = a.effects.setMode(g, c.options.mode || "hide");
            var l = c.options.direction || "vertical";
            a.effects.save(g, k);
            g.show();
            var d = a.effects.createWrapper(g).css({
                overflow: "hidden"
            });
            var f = g[0].tagName == "IMG" ? d: g;
            var h = {
                size: (l == "vertical") ? "height": "width",
                position: (l == "vertical") ? "top": "left"
            };
            var e = (l == "vertical") ? f.height(): f.width();
            if (j == "show") {
                f.css(h.size, 0);
                f.css(h.position, e / 2);
            }
            var i = {};
            i[h.size] = j == "show" ? e : 0;
            i[h.position] = j == "show" ? 0 : e / 2;
            f.animate(i, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    if (j == "hide") {
                        g.hide();
                    }
                    a.effects.restore(g, k);
                    a.effects.removeWrapper(g);
                    if (c.callback) {
                        c.callback.apply(g[0], arguments);
                    }
                    g.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.drop = function(c) {
        return this.queue(function() {
            var f = a(this), e = ["position", "top", "bottom", "left", "right", "opacity"];
            var j = a.effects.setMode(f, c.options.mode || "hide");
            var i = c.options.direction || "left";
            a.effects.save(f, e);
            f.show();
            a.effects.createWrapper(f);
            var g = (i == "up" || i == "down") ? "top": "left";
            var d = (i == "up" || i == "left") ? "pos": "neg";
            var k = c.options.distance || (g == "top" ? f.outerHeight({
                margin: true
            }) / 2 : f.outerWidth({
                margin: true
            }) / 2);
            if (j == "show") {
                f.css("opacity", 0).css(g, d == "pos"?-k : k);
            }
            var h = {
                opacity: j == "show" ? 1: 0
            };
            h[g] = (j == "show" ? (d == "pos" ? "+=" : "-=") : (d == "pos" ? "-=" : "+=")) + k;
            f.animate(h, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    if (j == "hide") {
                        f.hide();
                    }
                    a.effects.restore(f, e);
                    a.effects.removeWrapper(f);
                    if (c.callback) {
                        c.callback.apply(this, arguments);
                    }
                    f.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.explode = function(c) {
        return this.queue(function() {
            var l = c.options.pieces ? Math.round(Math.sqrt(c.options.pieces)): 3;
            var f = c.options.pieces ? Math.round(Math.sqrt(c.options.pieces)): 3;
            c.options.mode = c.options.mode == "toggle" ? (a(this).is(":visible") ? "hide" : "show") : c.options.mode;
            var k = a(this).show().css("visibility", "hidden");
            var m = k.offset();
            m.top -= parseInt(k.css("marginTop"), 10) || 0;
            m.left -= parseInt(k.css("marginLeft"), 10) || 0;
            var h = k.outerWidth(true);
            var d = k.outerHeight(true);
            for (var g = 0; g < l; g++) {
                for (var e = 0; e < f; e++) {
                    k.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: - e * (h / f),
                        top: - g * (d / l)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: h / f,
                        height: d / l,
                        left: m.left + e * (h / f) + (c.options.mode == "show" ? (e - Math.floor(f / 2)) * (h / f) : 0),
                        top: m.top + g * (d / l) + (c.options.mode == "show" ? (g - Math.floor(l / 2)) * (d / l) : 0),
                        opacity: c.options.mode == "show" ? 0: 1
                    }).animate({
                        left: m.left + e * (h / f) + (c.options.mode == "show" ? 0 : (e - Math.floor(f / 2)) * (h / f)),
                        top: m.top + g * (d / l) + (c.options.mode == "show" ? 0 : (g - Math.floor(l / 2)) * (d / l)),
                        opacity: c.options.mode == "show" ? 1: 0
                    }, c.duration || 500);
                }
            }
            setTimeout(function() {
                c.options.mode == "show" ? k.css({
                    visibility: "visible"
                }) : k.css({
                    visibility: "visible"
                }).hide();
                if (c.callback) {
                    c.callback.apply(k[0]);
                }
                k.dequeue();
                a("div.ui-effects-explode").remove();
            }, c.duration || 500);
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.fade = function(c) {
        return this.queue(function() {
            var d = a(this), e = a.effects.setMode(d, c.options.mode || "hide");
            d.animate({
                opacity: e
            }, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    (c.callback && c.callback.apply(this, arguments));
                    d.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.fold = function(c) {
        return this.queue(function() {
            var f = a(this), l = ["position", "top", "bottom", "left", "right"];
            var i = a.effects.setMode(f, c.options.mode || "hide");
            var p = c.options.size || 15;
            var o=!(!c.options.horizFirst);
            var h = c.duration ? c.duration / 2: a.fx.speeds._default / 2;
            a.effects.save(f, l);
            f.show();
            var e = a.effects.createWrapper(f).css({
                overflow: "hidden"
            });
            var j = ((i == "show") != o);
            var g = j ? ["width", "height"]: ["height", "width"];
            var d = j ? [e.width(), e.height()]: [e.height(), e.width()];
            var k = /([0-9]+)%/.exec(p);
            if (k) {
                p = parseInt(k[1], 10) / 100 * d[i == "hide" ? 0: 1];
            }
            if (i == "show") {
                e.css(o ? {
                    height: 0,
                    width: p
                } : {
                    height: p,
                    width: 0
                });
            }
            var n = {}, m = {};
            n[g[0]] = i == "show" ? d[0] : p;
            m[g[1]] = i == "show" ? d[1] : 0;
            e.animate(n, h, c.options.easing).animate(m, h, c.options.easing, function() {
                if (i == "hide") {
                    f.hide();
                }
                a.effects.restore(f, l);
                a.effects.removeWrapper(f);
                if (c.callback) {
                    c.callback.apply(f[0], arguments);
                }
                f.dequeue();
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.highlight = function(c) {
        return this.queue(function() {
            var e = a(this), d = ["backgroundImage", "backgroundColor", "opacity"], g = a.effects.setMode(e, c.options.mode || "show"), f = {
                backgroundColor: e.css("backgroundColor")
            };
            if (g == "hide") {
                f.opacity = 0;
            }
            a.effects.save(e, d);
            e.show().css({
                backgroundImage: "none",
                backgroundColor: c.options.color || "#ffff99"
            }).animate(f, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    (g == "hide" && e.hide());
                    a.effects.restore(e, d);
                    (g == "show"&&!a.support.opacity && this.style.removeAttribute("filter"));
                    (c.callback && c.callback.apply(this, arguments));
                    e.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.pulsate = function(c) {
        return this.queue(function() {
            var g = a(this), k = a.effects.setMode(g, c.options.mode || "show"), j = ((c.options.times || 5) * 2) - 1, h = c.duration ? c.duration / 2: a.fx.speeds._default / 2, d = g.is(":visible"), e = 0;
            if (!d) {
                g.css("opacity", 0).show();
                e = 1;
            }
            if ((k == "hide" && d) || (k == "show"&&!d)) {
                j--;
            }
            for (var f = 0; f < j; f++) {
                g.animate({
                    opacity: e
                }, h, c.options.easing);
                e = (e + 1)%2;
            }
            g.animate({
                opacity: e
            }, h, c.options.easing, function() {
                if (e == 0) {
                    g.hide();
                }(c.callback && c.callback.apply(this, arguments));
            });
            g.queue("fx", function() {
                g.dequeue();
            }).dequeue();
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.puff = function(c) {
        return this.queue(function() {
            var g = a(this), h = a.effects.setMode(g, c.options.mode || "hide"), f = parseInt(c.options.percent, 10) || 150, e = f / 100, d = {
                height: g.height(),
                width: g.width()
            };
            a.extend(c.options, {
                fade: true,
                mode: h,
                percent: h == "hide" ? f: 100,
                from: h == "hide" ? d: {
                    height: d.height * e,
                    width: d.width * e
                }
            });
            g.effect("scale", c.options, c.duration, c.callback);
            g.dequeue();
        });
    };
    a.effects.scale = function(c) {
        return this.queue(function() {
            var h = a(this);
            var e = a.extend(true, {}, c.options);
            var k = a.effects.setMode(h, c.options.mode || "effect");
            var i = parseInt(c.options.percent, 10) || (parseInt(c.options.percent, 10) == 0 ? 0 : (k == "hide" ? 0 : 100));
            var j = c.options.direction || "both";
            var d = c.options.origin;
            if (k != "effect") {
                e.origin = d || ["middle", "center"];
                e.restore = true;
            }
            var g = {
                height: h.height(),
                width: h.width()
            };
            h.from = c.options.from || (k == "show" ? {
                height: 0,
                width: 0
            } : g);
            var f = {
                y: j != "horizontal" ? (i / 100): 1,
                x: j != "vertical" ? (i / 100): 1
            };
            h.to = {
                height: g.height * f.y,
                width: g.width * f.x
            };
            if (c.options.fade) {
                if (k == "show") {
                    h.from.opacity = 0;
                    h.to.opacity = 1;
                }
                if (k == "hide") {
                    h.from.opacity = 1;
                    h.to.opacity = 0;
                }
            }
            e.from = h.from;
            e.to = h.to;
            e.mode = k;
            h.effect("size", e, c.duration, c.callback);
            h.dequeue();
        });
    };
    a.effects.size = function(c) {
        return this.queue(function() {
            var d = a(this), o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"];
            var n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"];
            var k = ["width", "height", "overflow"];
            var q = ["fontSize"];
            var l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"];
            var g = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
            var h = a.effects.setMode(d, c.options.mode || "effect");
            var j = c.options.restore || false;
            var f = c.options.scale || "both";
            var p = c.options.origin;
            var e = {
                height: d.height(),
                width: d.width()
            };
            d.from = c.options.from || e;
            d.to = c.options.to || e;
            if (p) {
                var i = a.effects.getBaseline(p, e);
                d.from.top = (e.height - d.from.height) * i.y;
                d.from.left = (e.width - d.from.width) * i.x;
                d.to.top = (e.height - d.to.height) * i.y;
                d.to.left = (e.width - d.to.width) * i.x;
            }
            var m = {
                from: {
                    y: d.from.height / e.height,
                    x: d.from.width / e.width
                },
                to: {
                    y: d.to.height / e.height,
                    x: d.to.width / e.width
                }
            };
            if (f == "box" || f == "both") {
                if (m.from.y != m.to.y) {
                    o = o.concat(l);
                    d.from = a.effects.setTransition(d, l, m.from.y, d.from);
                    d.to = a.effects.setTransition(d, l, m.to.y, d.to);
                }
                if (m.from.x != m.to.x) {
                    o = o.concat(g);
                    d.from = a.effects.setTransition(d, g, m.from.x, d.from);
                    d.to = a.effects.setTransition(d, g, m.to.x, d.to);
                }
            }
            if (f == "content" || f == "both") {
                if (m.from.y != m.to.y) {
                    o = o.concat(q);
                    d.from = a.effects.setTransition(d, q, m.from.y, d.from);
                    d.to = a.effects.setTransition(d, q, m.to.y, d.to);
                }
            }
            a.effects.save(d, j ? o : n);
            d.show();
            a.effects.createWrapper(d);
            d.css("overflow", "hidden").css(d.from);
            if (f == "content" || f == "both") {
                l = l.concat(["marginTop", "marginBottom"]).concat(q);
                g = g.concat(["marginLeft", "marginRight"]);
                k = o.concat(l).concat(g);
                d.find("*[width]").each(function() {
                    var s = a(this);
                    if (j) {
                        a.effects.save(s, k);
                    }
                    var r = {
                        height: s.height(),
                        width: s.width()
                    };
                    s.from = {
                        height: r.height * m.from.y,
                        width: r.width * m.from.x
                    };
                    s.to = {
                        height: r.height * m.to.y,
                        width: r.width * m.to.x
                    };
                    if (m.from.y != m.to.y) {
                        s.from = a.effects.setTransition(s, l, m.from.y, s.from);
                        s.to = a.effects.setTransition(s, l, m.to.y, s.to);
                    }
                    if (m.from.x != m.to.x) {
                        s.from = a.effects.setTransition(s, g, m.from.x, s.from);
                        s.to = a.effects.setTransition(s, g, m.to.x, s.to);
                    }
                    s.css(s.from);
                    s.animate(s.to, c.duration, c.options.easing, function() {
                        if (j) {
                            a.effects.restore(s, k);
                        }
                    });
                });
            }
            d.animate(d.to, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    if (d.to.opacity === 0) {
                        d.css("opacity", d.from.opacity);
                    }
                    if (h == "hide") {
                        d.hide();
                    }
                    a.effects.restore(d, j ? o : n);
                    a.effects.removeWrapper(d);
                    if (c.callback) {
                        c.callback.apply(this, arguments);
                    }
                    d.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.shake = function(c) {
        return this.queue(function() {
            var f = a(this), m = ["position", "top", "bottom", "left", "right"];
            var l = a.effects.setMode(f, c.options.mode || "effect");
            var o = c.options.direction || "left";
            var d = c.options.distance || 20;
            var e = c.options.times || 3;
            var h = c.duration || c.options.duration || 140;
            a.effects.save(f, m);
            f.show();
            a.effects.createWrapper(f);
            var g = (o == "up" || o == "down") ? "top": "left";
            var q = (o == "up" || o == "left") ? "pos": "neg";
            var j = {}, p = {}, n = {};
            j[g] = (q == "pos" ? "-=" : "+=") + d;
            p[g] = (q == "pos" ? "+=" : "-=") + d * 2;
            n[g] = (q == "pos" ? "-=" : "+=") + d * 2;
            f.animate(j, h, c.options.easing);
            for (var k = 1; k < e; k++) {
                f.animate(p, h, c.options.easing).animate(n, h, c.options.easing);
            }
            f.animate(p, h, c.options.easing).animate(j, h / 2, c.options.easing, function() {
                a.effects.restore(f, m);
                a.effects.removeWrapper(f);
                if (c.callback) {
                    c.callback.apply(this, arguments);
                }
            });
            f.queue("fx", function() {
                f.dequeue();
            });
            f.dequeue();
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.slide = function(c) {
        return this.queue(function() {
            var f = a(this), e = ["position", "top", "bottom", "left", "right"];
            var j = a.effects.setMode(f, c.options.mode || "show");
            var i = c.options.direction || "left";
            a.effects.save(f, e);
            f.show();
            a.effects.createWrapper(f).css({
                overflow: "hidden"
            });
            var g = (i == "up" || i == "down") ? "top": "left";
            var d = (i == "up" || i == "left") ? "pos": "neg";
            var k = c.options.distance || (g == "top" ? f.outerHeight({
                margin: true
            }) : f.outerWidth({
                margin: true
            }));
            if (j == "show") {
                f.css(g, d == "pos" ? (isNaN(k) ? "-" + k : - k) : k);
            }
            var h = {};
            h[g] = (j == "show" ? (d == "pos" ? "+=" : "-=") : (d == "pos" ? "-=" : "+=")) + k;
            f.animate(h, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    if (j == "hide") {
                        f.hide();
                    }
                    a.effects.restore(f, e);
                    a.effects.removeWrapper(f);
                    if (c.callback) {
                        c.callback.apply(this, arguments);
                    }
                    f.dequeue();
                }
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.effects.transfer = function(c) {
        return this.queue(function() {
            var g = a(this), i = a(c.options.to), f = i.offset(), h = {
                top: f.top,
                left: f.left,
                height: i.innerHeight(),
                width: i.innerWidth()
            }, e = g.offset(), d = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({
                top: e.top,
                left: e.left,
                height: g.innerHeight(),
                width: g.innerWidth(),
                position: "absolute"
            }).animate(h, c.duration, c.options.easing, function() {
                d.remove();
                (c.callback && c.callback.apply(g[0], arguments));
                g.dequeue();
            });
        });
    };
})(jQuery);
(function(a, b) {
    a.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: true,
            clearStyle: false,
            collapsible: false,
            event: "click",
            fillSpace: false,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: false,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase();
            }
        },
        _create: function() {
            var c = this, d = c.options;
            c.running = 0;
            c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
            c.headers = c.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                if (d.disabled) {
                    return;
                }
                a(this).addClass("ui-state-hover");
            }).bind("mouseleave.accordion", function() {
                if (d.disabled) {
                    return;
                }
                a(this).removeClass("ui-state-hover");
            }).bind("focus.accordion", function() {
                if (d.disabled) {
                    return;
                }
                a(this).addClass("ui-state-focus");
            }).bind("blur.accordion", function() {
                if (d.disabled) {
                    return;
                }
                a(this).removeClass("ui-state-focus");
            });
            c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (d.navigation) {
                var e = c.element.find("a").filter(d.navigationFilter).eq(0);
                if (e.length) {
                    var f = e.closest(".ui-accordion-header");
                    if (f.length) {
                        c.active = f;
                    } else {
                        c.active = e.closest(".ui-accordion-content").prev();
                    }
                }
            }
            c.active = c._findActive(c.active || d.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
            c.active.next().addClass("ui-accordion-content-active");
            c._createIcons();
            c.resize();
            c.element.attr("role", "tablist");
            c.headers.attr("role", "tab").bind("keydown.accordion", function(g) {
                return c._keydown(g);
            }).next().attr("role", "tabpanel");
            c.headers.not(c.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: - 1
            }).next().hide();
            if (!c.active.length) {
                c.headers.eq(0).attr("tabIndex", 0);
            } else {
                c.active.attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                });
            }
            if (!a.browser.safari) {
                c.headers.find("a").attr("tabIndex", - 1);
            }
            if (d.event) {
                c.headers.bind(d.event.split(" ").join(".accordion ") + ".accordion", function(g) {
                    c._clickHandler.call(c, g, this);
                    g.preventDefault();
                });
            }
        },
        _createIcons: function() {
            var c = this.options;
            if (c.icons) {
                a("<span></span>").addClass("ui-icon " + c.icons.header).prependTo(this.headers);
                this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);
                this.element.addClass("ui-accordion-icons");
            }
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove();
            this.element.removeClass("ui-accordion-icons");
        },
        destroy: function() {
            var c = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
            this.headers.find("a").removeAttr("tabIndex");
            this._destroyIcons();
            var d = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            if (c.autoHeight || c.fillHeight) {
                d.css("height", "");
            }
            return a.Widget.prototype.destroy.call(this);
        },
        _setOption: function(c, d) {
            a.Widget.prototype._setOption.apply(this, arguments);
            if (c == "active") {
                this.activate(d);
            }
            if (c == "icons") {
                this._destroyIcons();
                if (d) {
                    this._createIcons();
                }
            }
            if (c == "disabled") {
                this.headers.add(this.headers.next())[d ? "addClass": "removeClass"]("ui-accordion-disabled ui-state-disabled");
            }
        },
        _keydown: function(f) {
            if (this.options.disabled || f.altKey || f.ctrlKey) {
                return;
            }
            var g = a.ui.keyCode, e = this.headers.length, c = this.headers.index(f.target), d = false;
            switch (f.keyCode) {
            case g.RIGHT:
            case g.DOWN:
                d = this.headers[(c + 1)%e];
                break;
            case g.LEFT:
            case g.UP:
                d = this.headers[(c - 1 + e)%e];
                break;
            case g.SPACE:
            case g.ENTER:
                this._clickHandler({
                    target: f.target
                }, f.target);
                f.preventDefault();
            }
            if (d) {
                a(f.target).attr("tabIndex", - 1);
                a(d).attr("tabIndex", 0);
                d.focus();
                return false;
            }
            return true;
        },
        resize: function() {
            var c = this.options, e;
            if (c.fillSpace) {
                if (a.browser.msie) {
                    var d = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden");
                }
                e = this.element.parent().height();
                if (a.browser.msie) {
                    this.element.parent().css("overflow", d);
                }
                this.headers.each(function() {
                    e -= a(this).outerHeight(true);
                });
                this.headers.next().each(function() {
                    a(this).height(Math.max(0, e - a(this).innerHeight() + a(this).height()));
                }).css("overflow", "auto");
            } else {
                if (c.autoHeight) {
                    e = 0;
                    this.headers.next().each(function() {
                        e = Math.max(e, a(this).height("").height());
                    }).height(e);
                }
            }
            return this;
        },
        activate: function(c) {
            this.options.active = c;
            var d = this._findActive(c)[0];
            this._clickHandler({
                target: d
            }, d);
            return this;
        },
        _findActive: function(c) {
            return c ? typeof c === "number" ? this.headers.filter(":eq(" + c + ")") : this.headers.not(this.headers.not(c)) : c === false ? a([]) : this.headers.filter(":eq(0)");
        },
        _clickHandler: function(c, g) {
            var l = this.options;
            if (l.disabled) {
                return;
            }
            if (!c.target) {
                if (!l.collapsible) {
                    return;
                }
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(l.icons.headerSelected).addClass(l.icons.header);
                this.active.next().addClass("ui-accordion-content-active");
                var i = this.active.next(), f = {
                    options: l,
                    newHeader: a([]),
                    oldHeader: l.active,
                    newContent: a([]),
                    oldContent: i
                }, d = (this.active = a([]));
                this._toggle(d, i, f);
                return;
            }
            var h = a(c.currentTarget || g), j = h[0] === this.active[0];
            l.active = l.collapsible && j ? false : this.headers.index(h);
            if (this.running || (!l.collapsible && j)) {
                return;
            }
            var e = this.active, d = h.next(), i = this.active.next(), f = {
                options: l,
                newHeader: j && l.collapsible ? a([]): h,
                oldHeader: this.active,
                newContent: j && l.collapsible ? a([]): d,
                oldContent: i
            }, k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
            this.active = j ? a([]) : h;
            this._toggle(d, i, f, j, k);
            e.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(l.icons.headerSelected).addClass(l.icons.header);
            if (!j) {
                h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(l.icons.header).addClass(l.icons.headerSelected);
                h.next().addClass("ui-accordion-content-active");
            }
            return;
        },
        _toggle: function(c, i, g, j, k) {
            var m = this, n = m.options;
            m.toShow = c;
            m.toHide = i;
            m.data = g;
            var d = function() {
                if (!m) {
                    return;
                }
                return m._completed.apply(m, arguments);
            };
            m._trigger("changestart", null, m.data);
            m.running = i.size() === 0 ? c.size() : i.size();
            if (n.animated) {
                var f = {};
                if (n.collapsible && j) {
                    f = {
                        toShow: a([]),
                        toHide: i,
                        complete: d,
                        down: k,
                        autoHeight: n.autoHeight || n.fillSpace
                    };
                } else {
                    f = {
                        toShow: c,
                        toHide: i,
                        complete: d,
                        down: k,
                        autoHeight: n.autoHeight || n.fillSpace
                    };
                }
                if (!n.proxied) {
                    n.proxied = n.animated;
                }
                if (!n.proxiedDuration) {
                    n.proxiedDuration = n.duration;
                }
                n.animated = a.isFunction(n.proxied) ? n.proxied(f) : n.proxied;
                n.duration = a.isFunction(n.proxiedDuration) ? n.proxiedDuration(f) : n.proxiedDuration;
                var l = a.ui.accordion.animations, e = n.duration, h = n.animated;
                if (h&&!l[h]&&!a.easing[h]) {
                    h = "slide";
                }
                if (!l[h]) {
                    l[h] = function(o) {
                        this.slide(o, {
                            easing: h,
                            duration: e || 700
                        });
                    };
                }
                l[h](f);
            } else {
                if (n.collapsible && j) {
                    c.toggle();
                } else {
                    i.hide();
                    c.show();
                }
                d(true);
            }
            i.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: - 1
            }).blur();
            c.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus();
        },
        _completed: function(c) {
            this.running = c ? 0 : --this.running;
            if (this.running) {
                return;
            }
            if (this.options.clearStyle) {
                this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                });
            }
            this.toHide.removeClass("ui-accordion-content-active");
            if (this.toHide.length) {
                this.toHide.parent()[0].className = this.toHide.parent()[0].className;
            }
            this._trigger("change", null, this.data);
        }
    });
    a.extend(a.ui.accordion, {
        version: "@VERSION",
        animations: {
            slide: function(k, i) {
                k = a.extend({
                    easing: "swing",
                    duration: 300
                }, k, i);
                if (!k.toHide.size()) {
                    k.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, k);
                    return;
                }
                if (!k.toShow.size()) {
                    k.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, k);
                    return;
                }
                var d = k.toShow.css("overflow"), h = 0, e = {}, g = {}, f = ["height", "paddingTop", "paddingBottom"], c;
                var j = k.toShow;
                c = j[0].style.width;
                j.width(j.parent().width() - parseFloat(j.css("paddingLeft")) - parseFloat(j.css("paddingRight")) - (parseFloat(j.css("borderLeftWidth")) || 0) - (parseFloat(j.css("borderRightWidth")) || 0));
                a.each(f, function(l, n) {
                    g[n] = "hide";
                    var m = ("" + a.css(k.toShow[0], n)).match(/^([\d+-.]+)(.*)$/);
                    e[n] = {
                        value: m[1],
                        unit: m[2] || "px"
                    };
                });
                k.toShow.css({
                    height: 0,
                    overflow: "hidden"
                }).show();
                k.toHide.filter(":hidden").each(k.complete).end().filter(":visible").animate(g, {
                    step: function(l, m) {
                        if (m.prop == "height") {
                            h = (m.end - m.start === 0) ? 0 : (m.now - m.start) / (m.end - m.start);
                        }
                        k.toShow[0].style[m.prop] = (h * e[m.prop].value) + e[m.prop].unit;
                    },
                    duration: k.duration,
                    easing: k.easing,
                    complete: function() {
                        if (!k.autoHeight) {
                            k.toShow.css("height", "");
                        }
                        k.toShow.css({
                            width: c,
                            overflow: d
                        });
                        k.complete();
                    }
                });
            },
            bounceslide: function(c) {
                this.slide(c, {
                    easing: c.down ? "easeOutBounce": "swing",
                    duration: c.down ? 1000: 200
                });
            }
        }
    });
})(jQuery);
(function(a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var d = this, f = this.element[0].ownerDocument, e;
            this.isMultiLine = this.element.is("textarea");
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(g) {
                if (d.options.disabled || d.element.propAttr("readOnly")) {
                    return;
                }
                e = false;
                var h = a.ui.keyCode;
                switch (g.keyCode) {
                case h.PAGE_UP:
                    d._move("previousPage", g);
                    break;
                case h.PAGE_DOWN:
                    d._move("nextPage", g);
                    break;
                case h.UP:
                    d._keyEvent("previous", g);
                    break;
                case h.DOWN:
                    d._keyEvent("next", g);
                    break;
                case h.ENTER:
                case h.NUMPAD_ENTER:
                    if (d.menu.active) {
                        e = true;
                        g.preventDefault();
                    }
                case h.TAB:
                    if (!d.menu.active) {
                        return;
                    }
                    d.menu.select(g);
                    break;
                case h.ESCAPE:
                    d.element.val(d.term);
                    d.close(g);
                    break;
                default:
                    clearTimeout(d.searching);
                    d.searching = setTimeout(function() {
                        if (d.term != d.element.val()) {
                            d.selectedItem = null;
                            d.search(null, g);
                        }
                    }, d.options.delay);
                    break;
                }
            }).bind("keypress.autocomplete", function(g) {
                if (e) {
                    e = false;
                    g.preventDefault();
                }
            }).bind("focus.autocomplete", function() {
                if (d.options.disabled) {
                    return;
                }
                d.selectedItem = null;
                d.previous = d.element.val();
            }).bind("blur.autocomplete", function(g) {
                if (d.options.disabled) {
                    return;
                }
                clearTimeout(d.searching);
                d.closing = setTimeout(function() {
                    d.close(g);
                    d._change(g);
                }, 150);
            });
            this._initSource();
            this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", f)[0]).mousedown(function(g) {
                var h = d.menu.element[0];
                if (!a(g.target).closest(".ui-menu-item").length) {
                    setTimeout(function() {
                        a(document).one("mousedown", function(i) {
                            if (i.target !== d.element[0] && i.target !== h&&!a.ui.contains(h, i.target)) {
                                d.close();
                            }
                        });
                    }, 1);
                }
                setTimeout(function() {
                    clearTimeout(d.closing);
                }, 13);
            }).menu({
                focus: function(h, i) {
                    var g = i.item.data("item.autocomplete");
                    if (false !== d._trigger("focus", h, {
                        item: g
                    })) {
                        if (/^key/.test(h.originalEvent.type)) {
                            d.element.val(g.value);
                        }
                    }
                },
                selected: function(i, j) {
                    var h = j.item.data("item.autocomplete"), g = d.previous;
                    if (d.element[0] !== f.activeElement) {
                        d.element.focus();
                        d.previous = g;
                        setTimeout(function() {
                            d.previous = g;
                            d.selectedItem = h;
                        }, 1);
                    }
                    if (false !== d._trigger("select", i, {
                        item: h
                    })) {
                        d.element.val(h.value);
                    }
                    d.term = d.element.val();
                    d.close(i);
                    d.selectedItem = h;
                },
                blur: function(g, h) {
                    if (d.menu.element.is(":visible") && (d.element.val() !== d.term)) {
                        d.element.val(d.term);
                    }
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            if (a.fn.bgiframe) {
                this.menu.element.bgiframe();
            }
            d.beforeunloadHandler = function() {
                d.element.removeAttr("autocomplete");
            };
            a(window).bind("beforeunload", d.beforeunloadHandler);
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            a(window).unbind("beforeunload", this.beforeunloadHandler);
            a.Widget.prototype.destroy.call(this);
        },
        _setOption: function(d, e) {
            a.Widget.prototype._setOption.apply(this, arguments);
            if (d === "source") {
                this._initSource();
            }
            if (d === "appendTo") {
                this.menu.element.appendTo(a(e || "body", this.element[0].ownerDocument)[0]);
            }
            if (d === "disabled" && e && this.xhr) {
                this.xhr.abort();
            }
        },
        _initSource: function() {
            var d = this, f, e;
            if (a.isArray(this.options.source)) {
                f = this.options.source;
                this.source = function(h, g) {
                    g(a.ui.autocomplete.filter(f, h.term));
                };
            } else {
                if (typeof this.options.source === "string") {
                    e = this.options.source;
                    this.source = function(h, g) {
                        if (d.xhr) {
                            d.xhr.abort();
                        }
                        d.xhr = a.ajax({
                            url: e,
                            data: h,
                            dataType: "json",
                            success: function(j, i) {
                                g(j);
                            },
                            error: function() {
                                g([]);
                            }
                        });
                    };
                } else {
                    this.source = this.options.source;
                }
            }
        },
        search: function(e, d) {
            e = e != null ? e : this.element.val();
            this.term = this.element.val();
            if (e.length < this.options.minLength) {
                return this.close(d);
            }
            clearTimeout(this.closing);
            if (this._trigger("search", d) === false) {
                return;
            }
            return this._search(e);
        },
        _search: function(d) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: d
            }, this._response());
        },
        _response: function() {
            var e = this, d=++c;
            return function(f) {
                if (d === c) {
                    e.__response(f);
                }
                e.pending--;
                if (!e.pending) {
                    e.element.removeClass("ui-autocomplete-loading");
                }
            };
        },
        __response: function(d) {
            if (!this.options.disabled && d && d.length) {
                d = this._normalize(d);
                this._suggest(d);
                this._trigger("open");
            } else {
                this.close();
            }
        },
        close: function(d) {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", d);
            }
        },
        _change: function(d) {
            if (this.previous !== this.element.val()) {
                this._trigger("change", d, {
                    item: this.selectedItem
                });
            }
        },
        _normalize: function(d) {
            if (d.length && d[0].label && d[0].value) {
                return d;
            }
            return a.map(d, function(e) {
                if (typeof e === "string") {
                    return {
                        label: e,
                        value: e
                    };
                }
                return a.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e);
            });
        },
        _suggest: function(d) {
            var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(e, d);
            this.menu.deactivate();
            this.menu.refresh();
            e.show();
            this._resizeMenu();
            e.position(a.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next(new a.Event("mouseover"));
            }
        },
        _resizeMenu: function() {
            var d = this.menu.element;
            d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(f, e) {
            var d = this;
            a.each(e, function(g, h) {
                d._renderItem(f, h);
            });
        },
        _renderItem: function(d, e) {
            return a("<li></li>").data("item.autocomplete", e).append(a("<a></a>").text(e.label)).appendTo(d);
        },
        _move: function(e, d) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, d);
                return;
            }
            if (this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e)) {
                this.element.val(this.term);
                this.menu.deactivate();
                return;
            }
            this.menu[e](d);
        },
        widget: function() {
            return this.menu.element;
        },
        _keyEvent: function(e, d) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(e, d);
                d.preventDefault();
            }
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(d) {
            return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },
        filter: function(f, d) {
            var e = new RegExp(a.ui.autocomplete.escapeRegex(d), "i");
            return a.grep(f, function(g) {
                return e.test(g.label || g.value || g);
            });
        }
    });
}(jQuery));
(function(a) {
    a.widget("ui.menu", {
        _create: function() {
            var b = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(c) {
                if (!a(c.target).closest(".ui-menu-item a").length) {
                    return;
                }
                c.preventDefault();
                b.select(c);
            });
            this.refresh();
        },
        refresh: function() {
            var c = this;
            var b = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            b.children("a").addClass("ui-corner-all").attr("tabindex", - 1).mouseenter(function(d) {
                c.activate(d, a(this).parent());
            }).mouseleave(function() {
                c.deactivate();
            });
        },
        activate: function(e, d) {
            this.deactivate();
            if (this.hasScroll()) {
                var f = d.offset().top - this.element.offset().top, b = this.element.scrollTop(), c = this.element.height();
                if (f < 0) {
                    this.element.scrollTop(b + f);
                } else {
                    if (f >= c) {
                        this.element.scrollTop(b + f - c + d.height());
                    }
                }
            }
            this.active = d.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", e, {
                item: d
            });
        },
        deactivate: function() {
            if (!this.active) {
                return;
            }
            this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
            this._trigger("blur");
            this.active = null;
        },
        next: function(b) {
            this.move("next", ".ui-menu-item:first", b);
        },
        previous: function(b) {
            this.move("prev", ".ui-menu-item:last", b);
        },
        first: function() {
            return this.active&&!this.active.prevAll(".ui-menu-item").length;
        },
        last: function() {
            return this.active&&!this.active.nextAll(".ui-menu-item").length;
        },
        move: function(e, d, c) {
            if (!this.active) {
                this.activate(c, this.element.children(d));
                return;
            }
            var b = this.active[e + "All"](".ui-menu-item").eq(0);
            if (b.length) {
                this.activate(c, b);
            } else {
                this.activate(c, this.element.children(d));
            }
        },
        nextPage: function(d) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(d, this.element.children(".ui-menu-item:first"));
                    return;
                }
                var e = this.active.offset().top, c = this.element.height(), b = this.element.children(".ui-menu-item").filter(function() {
                    var f = a(this).offset().top - e - c + a(this).height();
                    return f < 10 && f>-10;
                });
                if (!b.length) {
                    b = this.element.children(".ui-menu-item:last");
                }
                this.activate(d, b);
            } else {
                this.activate(d, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"));
            }
        },
        previousPage: function(d) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(d, this.element.children(".ui-menu-item:last"));
                    return;
                }
                var e = this.active.offset().top, c = this.element.height(), b = this.element.children(".ui-menu-item").filter(function() {
                    var f = a(this).offset().top - e + c - a(this).height();
                    return f < 10 && f>-10;
                });
                if (!b.length) {
                    b = this.element.children(".ui-menu-item:first");
                }
                this.activate(d, b);
            } else {
                this.activate(d, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"));
            }
        },
        hasScroll: function() {
            return this.element.height() < this.element[a.fn.prop ? "prop": "attr"]("scrollHeight");
        },
        select: function(b) {
            this._trigger("selected", b, {
                item: this.active
            });
        }
    });
}(jQuery));
(function(f, b) {
    var k, e, a, h, i = "ui-button ui-widget ui-state-default ui-corner-all", c = "ui-state-hover ui-state-active ", g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function() {
        var l = f(this).find(":ui-button");
        setTimeout(function() {
            l.button("refresh");
        }, 1);
    }, d = function(m) {
        var l = m.name, n = m.form, o = f([]);
        if (l) {
            if (n) {
                o = f(n).find("[name='" + l + "']");
            } else {
                o = f("[name='" + l + "']", m.ownerDocument).filter(function() {
                    return !this.form;
                });
            }
        }
        return o;
    };
    f.widget("ui.button", {
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", j);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled=!!this.element.propAttr("disabled");
            } else {
                this.element.propAttr("disabled", this.options.disabled);
            }
            this._determineButtonType();
            this.hasTitle=!!this.buttonElement.attr("title");
            var l = this, n = this.options, o = this.type === "checkbox" || this.type === "radio", p = "ui-state-hover" + (!o ? " ui-state-active" : ""), m = "ui-state-focus";
            if (n.label === null) {
                n.label = this.buttonElement.html();
            }
            this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter.button", function() {
                if (n.disabled) {
                    return;
                }
                f(this).addClass("ui-state-hover");
                if (this === k) {
                    f(this).addClass("ui-state-active");
                }
            }).bind("mouseleave.button", function() {
                if (n.disabled) {
                    return;
                }
                f(this).removeClass(p);
            }).bind("click.button", function(q) {
                if (n.disabled) {
                    q.preventDefault();
                    q.stopImmediatePropagation();
                }
            });
            this.element.bind("focus.button", function() {
                l.buttonElement.addClass(m);
            }).bind("blur.button", function() {
                l.buttonElement.removeClass(m);
            });
            if (o) {
                this.element.bind("change.button", function() {
                    if (h) {
                        return;
                    }
                    l.refresh();
                });
                this.buttonElement.bind("mousedown.button", function(q) {
                    if (n.disabled) {
                        return;
                    }
                    h = false;
                    e = q.pageX;
                    a = q.pageY;
                }).bind("mouseup.button", function(q) {
                    if (n.disabled) {
                        return;
                    }
                    if (e !== q.pageX || a !== q.pageY) {
                        h = true;
                    }
                });
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click.button", function() {
                    if (n.disabled || h) {
                        return false;
                    }
                    f(this).toggleClass("ui-state-active");
                    l.buttonElement.attr("aria-pressed", l.element[0].checked);
                });
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click.button", function() {
                        if (n.disabled || h) {
                            return false;
                        }
                        f(this).addClass("ui-state-active");
                        l.buttonElement.attr("aria-pressed", "true");
                        var q = l.element[0];
                        d(q).not(q).map(function() {
                            return f(this).button("widget")[0];
                        }).removeClass("ui-state-active").attr("aria-pressed", "false");
                    });
                } else {
                    this.buttonElement.bind("mousedown.button", function() {
                        if (n.disabled) {
                            return false;
                        }
                        f(this).addClass("ui-state-active");
                        k = this;
                        f(document).one("mouseup", function() {
                            k = null;
                        });
                    }).bind("mouseup.button", function() {
                        if (n.disabled) {
                            return false;
                        }
                        f(this).removeClass("ui-state-active");
                    }).bind("keydown.button", function(q) {
                        if (n.disabled) {
                            return false;
                        }
                        if (q.keyCode == f.ui.keyCode.SPACE || q.keyCode == f.ui.keyCode.ENTER) {
                            f(this).addClass("ui-state-active");
                        }
                    }).bind("keyup.button", function() {
                        f(this).removeClass("ui-state-active");
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(q) {
                            if (q.keyCode === f.ui.keyCode.SPACE) {
                                f(this).click();
                            }
                        });
                    }
                }
            }
            this._setOption("disabled", n.disabled);
            this._resetButton();
        },
        _determineButtonType: function() {
            if (this.element.is(":checkbox")) {
                this.type = "checkbox";
            } else {
                if (this.element.is(":radio")) {
                    this.type = "radio";
                } else {
                    if (this.element.is("input")) {
                        this.type = "input";
                    } else {
                        this.type = "button";
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                var l = this.element.parents().filter(":last"), n = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = l.find(n);
                if (!this.buttonElement.length) {
                    l = l.length ? l.siblings() : this.element.siblings();
                    this.buttonElement = l.filter(n);
                    if (!this.buttonElement.length) {
                        this.buttonElement = l.find(n);
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                var m = this.element.is(":checked");
                if (m) {
                    this.buttonElement.addClass("ui-state-active");
                }
                this.buttonElement.attr("aria-pressed", m);
            } else {
                this.buttonElement = this.element;
            }
        },
        widget: function() {
            return this.buttonElement;
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(i + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title");
            }
            f.Widget.prototype.destroy.call(this);
        },
        _setOption: function(l, m) {
            f.Widget.prototype._setOption.apply(this, arguments);
            if (l === "disabled") {
                if (m) {
                    this.element.propAttr("disabled", true);
                } else {
                    this.element.propAttr("disabled", false);
                }
                return;
            }
            this._resetButton();
        },
        refresh: function() {
            var l = this.element.is(":disabled");
            if (l !== this.options.disabled) {
                this._setOption("disabled", l);
            }
            if (this.type === "radio") {
                d(this.element[0]).each(function() {
                    if (f(this).is(":checked")) {
                        f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true");
                    } else {
                        f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
                    }
                });
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true");
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false");
                    }
                }
            }
        },
        _resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label);
                }
                return;
            }
            var p = this.buttonElement.removeClass(g), n = f("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(), m = this.options.icons, l = m.primary && m.secondary, o = [];
            if (m.primary || m.secondary) {
                if (this.options.text) {
                    o.push("ui-button-text-icon" + (l ? "s" : (m.primary ? "-primary" : "-secondary")));
                }
                if (m.primary) {
                    p.prepend("<span class='ui-button-icon-primary ui-icon " + m.primary + "'></span>");
                }
                if (m.secondary) {
                    p.append("<span class='ui-button-icon-secondary ui-icon " + m.secondary + "'></span>");
                }
                if (!this.options.text) {
                    o.push(l ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        p.attr("title", n);
                    }
                }
            } else {
                o.push("ui-button-text-only");
            }
            p.addClass(o.join(" "));
        }
    });
    f.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset");
        },
        _init: function() {
            this.refresh();
        },
        _setOption: function(l, m) {
            if (l === "disabled") {
                this.buttons.button("option", l, m);
            }
            f.Widget.prototype._setOption.apply(this, arguments);
        },
        refresh: function() {
            var l = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return f(this).button("widget")[0];
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(l ? "ui-corner-left" : "ui-corner-right").end().end();
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return f(this).button("widget")[0];
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
            f.Widget.prototype.destroy.call(this);
        }
    });
}(jQuery));
(function($, undefined) {
    $.extend($.ui, {
        datepicker: {
            version: "@VERSION"
        }
    });
    var PROP_NAME = "datepicker";
    var dpuuid = new Date().getTime();
    var instActive;
    function Datepicker() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            if (this.debug) {
                console.log.apply("", arguments);
            }
        },
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == "div" || nodeName == "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == "input") {
                this._connectDatepicker(target, inst);
            } else {
                if (inline) {
                    this._inlineDatepicker(target, inst);
                }
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
            };
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key);
            });
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
        },
        _attachments: function(input, inst) {
            var appendText = this._get(inst, "appendText");
            var isRTL = this._get(inst, "isRTL");
            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
                input[isRTL ? "before": "after"](inst.append);
            }
            input.unbind("focus", this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove();
            }
            var showOn = this._get(inst, "showOn");
            if (showOn == "focus" || showOn == "both") {
                input.focus(this._showDatepicker);
            }
            if (showOn == "button" || showOn == "both") {
                var buttonText = this._get(inst, "buttonText");
                var buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? "before": "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
                        $.datepicker._hideDatepicker();
                    } else {
                        if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
                            $.datepicker._hideDatepicker();
                            $.datepicker._showDatepicker(input[0]);
                        } else {
                            $.datepicker._showDatepicker(input[0]);
                        }
                    }
                    return false;
                });
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize")&&!inst.inline) {
                var date = new Date(2009, 12 - 1, 20);
                var dateFormat = this._get(inst, "dateFormat");
                if (dateFormat.match(/[DM]/)) {
                    var findMax = function(names) {
                        var max = 0;
                        var maxI = 0;
                        for (var i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key);
            });
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
            inst.dpDiv.css("display", "block");
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                var id = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst);
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);
            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this;
        },
        _destroyDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp);
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    $target.removeClass(this.markerClassName).empty();
                }
            }
        },
        _enableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function() {
                    this.disabled = false;
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().removeClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value);
            });
        },
        _disableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function() {
                    this.disabled = true;
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().addClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value);
            });
            this._disabledInputs[this._disabledInputs.length] = target;
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target) {
                    return true;
                }
            }
            return false;
        },
        _getInst: function(target) {
            try {
                return $.data(target, PROP_NAME);
            } catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == "string") {
                return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null));
            }
            var settings = name || {};
            if (typeof name == "string") {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideDatepicker();
                }
                var date = this._getDateDatepicker(target, true);
                var minDate = this._getMinMaxDate(inst, "min");
                var maxDate = this._getMinMaxDate(inst, "max");
                extendRemove(inst.settings, settings);
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst&&!inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return (inst ? this._getDate(inst) : null);
        },
        _doKeyDown: function(event) {
            var inst = $.datepicker._getInst(event.target);
            var handled = true;
            var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break;
                case 13:
                    var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                    }
                    var onSelect = $.datepicker._get(inst, "onSelect");
                    if (onSelect) {
                        var dateStr = $.datepicker._formatDate(inst);
                        onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
                    } else {
                        $.datepicker._hideDatepicker();
                    }
                    return false;
                    break;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey?-$.datepicker._get(inst, "stepBigMonths") : - $.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey?+$.datepicker._get(inst, "stepBigMonths") : + $.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL?+1 : - 1), "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey?-$.datepicker._get(inst, "stepBigMonths") : - $.datepicker._get(inst, "stepMonths")), "M");
                    }
                    break;
                case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, - 7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL?-1 : + 1), "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey?+$.datepicker._get(inst, "stepBigMonths") : + $.datepicker._get(inst, "stepMonths")), "M");
                    }
                    break;
                case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, + 7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                default:
                    handled = false;
                }
            } else {
                if (event.keyCode == 36 && event.ctrlKey) {
                    $.datepicker._showDatepicker(this);
                } else {
                    handled = false;
                }
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        _doKeyPress: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) {
                var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " ||!chars || chars.indexOf(chr)>-1);
            }
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() != inst.lastVal) {
                try {
                    var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (err) {
                    $.datepicker.log(err);
                }
            }
            return true;
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != "input") {
                input = $("input", input.parentNode)[0];
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
                return;
            }
            var inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
                }
            }
            var beforeShow = $.datepicker._get(inst, "beforeShow");
            var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]): {};
            if (beforeShowSettings === false) {
                return;
            }
            extendRemove(inst.settings, beforeShowSettings);
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = "";
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight;
            }
            var isFixed = false;
            $(input).parents().each(function() {
                isFixed|=$(this).css("position") == "fixed";
                return !isFixed;
            });
            if (isFixed && $.browser.opera) {
                $.datepicker._pos[0] -= document.documentElement.scrollLeft;
                $.datepicker._pos[1] -= document.documentElement.scrollTop;
            }
            var offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });
            if (!inst.inline) {
                var showAnim = $.datepicker._get(inst, "showAnim");
                var duration = $.datepicker._get(inst, "duration");
                var postProcess = function() {
                    var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
                    if (!!cover.length) {
                        var borders = $.datepicker._getBorders(inst.dpDiv);
                        cover.css({
                            left: - borders[0],
                            top: - borders[1],
                            width: inst.dpDiv.outerWidth(),
                            height: inst.dpDiv.outerHeight()
                        });
                    }
                };
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess);
                }
                if (!showAnim ||!duration) {
                    postProcess();
                }
                if (inst.input.is(":visible")&&!inst.input.is(":disabled")) {
                    inst.input.focus();
                }
                $.datepicker._curInst = inst;
            }
        },
        _updateDatepicker: function(inst) {
            var self = this;
            self.maxRows = 4;
            var borders = $.datepicker._getBorders(inst.dpDiv);
            instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
            if (!!cover.length) {
                cover.css({
                    left: - borders[0],
                    top: - borders[1],
                    width: inst.dpDiv.outerWidth(),
                    height: inst.dpDiv.outerHeight()
                });
            }
            inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var numMonths = this._getNumberOfMonths(inst);
            var cols = numMonths[1];
            var width = 17;
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
            }
            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible")&&!inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
                inst.input.focus();
            }
            if (inst.yearshtml) {
                var origyearshtml = inst.yearshtml;
                setTimeout(function() {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },
        _getBorders: function(elem) {
            var convert = function(value) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }
                [value] || value;
            };
            return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))];
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth();
            var dpHeight = inst.dpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth(): 0;
            var inputHeight = inst.input ? inst.input.outerHeight(): 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
            return offset;
        },
        _findPos: function(obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, "isRTL");
            while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling": "nextSibling"];
            }
            var position = $(obj).offset();
            return [position.left, position.top];
        },
        _hideDatepicker: function(input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME))) {
                return;
            }
            if (this._datepickerShowing) {
                var showAnim = this._get(inst, "showAnim");
                var duration = this._get(inst, "duration");
                var postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
                }
                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;
                var onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }
            var $target = $(event.target), inst = $.datepicker._getInst($target[0]);
            if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing&&!($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
                $.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
            this._updateDatepicker(inst);
        },
        _gotoToday: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectDay: function(id, month, year, td) {
            var target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }
            var inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },
        _clearDate: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            this._selectDate(target, "");
        },
        _selectDate: function(id, dateStr) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);
            var onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
            } else {
                if (inst.input) {
                    inst.input.trigger("change");
                }
            }
            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) != "object") {
                    inst.input.focus();
                }
                this._lastInput = null;
            }
        },
        _updateAlternate: function(inst) {
            var altField = this._get(inst, "altField");
            if (altField) {
                var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                var date = this._getDate(inst);
                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() {
                    $(this).val(dateStr);
                });
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""];
        },
        iso8601Week: function(date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }
            value = (typeof value == "object" ? value.toString() : value + "");
            if (value == "") {
                return null;
            }
            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear()%100 + parseInt(shortYearCutoff, 10));
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var year =- 1;
            var month =- 1;
            var day =- 1;
            var doy =- 1;
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            };
            var getNumber = function(match) {
                var isDoubled = lookAhead(match);
                var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
                var digits = new RegExp("^\\d{1," + size + "}");
                var num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue;
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            };
            var getName = function(match, shortNames, longNames) {
                var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                    return [[k, v]];
                }).sort(function(a, b) {
                    return - (a[1].length - b[1].length);
                });
                var index =- 1;
                $.each(names, function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                });
                if (index!=-1) {
                    return index + 1;
                } else {
                    throw "Unknown name at position " + iValue;
                }
            };
            var checkLiteral = function() {
                if (value.charAt(iValue) != format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue;
                }
                iValue++;
            };
            var iValue = 0;
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'"&&!lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case"d":
                        day = getNumber("d");
                        break;
                    case"D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case"o":
                        doy = getNumber("o");
                        break;
                    case"m":
                        month = getNumber("m");
                        break;
                    case"M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case"y":
                        year = getNumber("y");
                        break;
                    case"@":
                        var date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case"!":
                        var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case"'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        } else {
                            literal = true;
                        }
                        break;
                    default:
                        checkLiteral();
                    }
                }
            }
            if (iValue < value.length) {
                throw "Extra/unparsed characters found in date: " + value.substring(iValue);
            }
            if (year==-1) {
                year = new Date().getFullYear();
            } else {
                if (year < 100) {
                    year += new Date().getFullYear() - new Date().getFullYear()%100 + (year <= shortYearCutoff ? 0 : - 100);
                }
            }
            if (doy>-1) {
                month = 1;
                day = doy;
                do {
                    var dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                }
                while (true);
            }
            var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
                throw "Invalid date";
            }
            return date;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(format, date, settings) {
            if (!date) {
                return "";
            }
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            };
            var formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            };
            var formatName = function(match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value]);
            };
            var output = "";
            var literal = false;
            if (date) {
                for (var iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) == "'"&&!lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                        case"d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case"D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;
                        case"o":
                            output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case"m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case"M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;
                        case"y":
                            output += (lookAhead("y") ? date.getFullYear() : (date.getYear()%100 < 10 ? "0" : "") + date.getYear()%100);
                            break;
                        case"@":
                            output += date.getTime();
                            break;
                        case"!":
                            output += date.getTime() * 10000 + this._ticksTo1970;
                            break;
                        case"'":
                            if (lookAhead("'")) {
                                output += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },
        _possibleChars: function(format) {
            var chars = "";
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            };
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'"&&!lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        chars += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        if (lookAhead("'")) {
                            chars += "'";
                        } else {
                            literal = true;
                        }
                        break;
                    default:
                        chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() == inst.lastVal) {
                return;
            }
            var dateFormat = this._get(inst, "dateFormat");
            var dates = inst.lastVal = inst.input ? inst.input.val(): null;
            var date, defaultDate;
            date = defaultDate = this._getDefaultDate(inst);
            var settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                this.log(event);
                dates = (noDefault ? "" : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            };
            var offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || "d") {
                    case"d":
                    case"D":
                        day += parseInt(matches[1], 10);
                        break;
                    case"w":
                    case"W":
                        day += parseInt(matches[1], 10) * 7;
                        break;
                    case"m":
                    case"M":
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    case"y":
                    case"Y":
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            };
            var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
            newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },
        _setDate: function(inst, date, noChange) {
            var clear=!date;
            var origMonth = inst.selectedMonth;
            var origYear = inst.selectedYear;
            var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear)&&!noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },
        _generateHTML: function(inst) {
            var today = new Date();
            today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
            var isRTL = this._get(inst, "isRTL");
            var showButtonPanel = this._get(inst, "showButtonPanel");
            var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
            var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
            var numMonths = this._getNumberOfMonths(inst);
            var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
            var stepMonths = this._get(inst, "stepMonths");
            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var drawMonth = inst.drawMonth - showCurrentAtPos;
            var drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            var prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
            var prev = (this._canAdjustMonth(inst, - 1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', -" + stepMonths + ", 'M');\" title=\"" + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
            var nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
            var next = (this._canAdjustMonth(inst, + 1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', +" + stepMonths + ", 'M');\" title=\"" + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
            var currentText = this._get(inst, "currentText");
            var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(inst, "closeText") + "</button>" : "");
            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + inst.id + "');\">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>": "";
            var firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);
            var showWeek = this._get(inst, "showWeek");
            var dayNames = this._get(inst, "dayNames");
            var dayNamesShort = this._get(inst, "dayNamesShort");
            var dayNamesMin = this._get(inst, "dayNamesMin");
            var monthNames = this._get(inst, "monthNames");
            var monthNamesShort = this._get(inst, "monthNamesShort");
            var beforeShowDay = this._get(inst, "beforeShowDay");
            var showOtherMonths = this._get(inst, "showOtherMonths");
            var selectOtherMonths = this._get(inst, "selectOtherMonths");
            var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
            var defaultDate = this._getDefaultDate(inst);
            var html = "";
            for (var row = 0; row < numMonths[0]; row++) {
                var group = "";
                this.maxRows = 4;
                for (var col = 0; col < numMonths[1]; col++) {
                    var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    var cornerClass = " ui-corner-all";
                    var calender = "";
                    if (isMultiMonth) {
                        calender += '<div class="ui-datepicker-group';
                        if (numMonths[1] > 1) {
                            switch (col) {
                            case 0:
                                calender += " ui-datepicker-group-first";
                                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;
                            case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last";
                                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;
                            default:
                                calender += " ui-datepicker-group-middle";
                                cornerClass = "";
                                break;
                            }
                        }
                        calender += '">';
                    }
                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
                    for (var dow = 0; dow < 7; dow++) {
                        var day = (dow + firstDay)%7;
                        thead += "<th" + ((dow + firstDay + 6)%7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7)%7;
                    var curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
                    this.maxRows = numRows;
                    var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (var dRow = 0; dRow < numRows; dRow++) {
                        calender += "<tr>";
                        var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (var dow = 0; dow < 7; dow++) {
                            var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            var otherMonth = (printDate.getMonth() != drawMonth);
                            var unselectable = (otherMonth&&!selectOtherMonths) ||!daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += '<td class="' + ((dow + firstDay + 6)%7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth&&!showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + inst.id + "'," + printDate.getMonth() + "," + printDate.getFullYear() + ', this);return false;"') + ">" + (otherMonth&&!showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7&&!inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            inst._keyEvent = false;
            return html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var changeMonth = this._get(inst, "changeMonth");
            var changeYear = this._get(inst, "changeYear");
            var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
            var html = '<div class="ui-datepicker-title">';
            var monthHtml = "";
            if (secondary ||!changeMonth) {
                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>";
            } else {
                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
                monthHtml += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'M');\" >";
                for (var month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }
            if (!showMonthAfterYear) {
                html += monthHtml + (secondary ||!(changeMonth && changeYear) ? "&#xa0;" : "");
            }
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary ||!changeYear) {
                    html += '<span class="ui-datepicker-year">' + drawYear + "</span>";
                } else {
                    var years = this._get(inst, "yearRange").split(":");
                    var thisYear = new Date().getFullYear();
                    var determineYear = function(value) {
                        var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    var year = determineYear(years[0]);
                    var endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'Y');\" >";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";
                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }
            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary ||!(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>";
            return html;
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period == "Y" ? offset : 0);
            var month = inst.drawMonth + (period == "M" ? offset : 0);
            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
            var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period == "M" || period == "Y") {
                this._notifyChange(inst);
            }
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var newDate = (minDate && date < minDate ? minDate : date);
            newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
            return newDate;
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths));
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst);
            var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()));
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear()%100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            };
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });
    function bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.bind("mouseout", function(event) {
            var elem = $(event.target).closest(selector);
            if (!elem.length) {
                return;
            }
            elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
        }).bind("mouseover", function(event) {
            var elem = $(event.target).closest(selector);
            if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) ||!elem.length) {
                return;
            }
            elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            elem.addClass("ui-state-hover");
            if (elem.hasClass("ui-datepicker-prev")) {
                elem.addClass("ui-datepicker-prev-hover");
            }
            if (elem.hasClass("ui-datepicker-next")) {
                elem.addClass("ui-datepicker-next-hover");
            }
        });
    }
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null || props[name] == undefined) {
                target[name] = props[name];
            }
        }
        return target;
    }
    function isArray(a) {
        return (a && (($.browser.safari && typeof a == "object" && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/))));
    }
    $.fn.datepicker = function(options) {
        if (!this.length) {
            return this;
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
            $.datepicker.initialized = true;
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function() {
            typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        });
    };
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "@VERSION";
    window["DP_jQuery_" + dpuuid] = $;
})(jQuery);
(function(e, f) {
    var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ", b = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    }, d = {
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true
    }, a = e.attrFn || {
        val: true,
        css: true,
        html: true,
        text: true,
        data: true,
        width: true,
        height: true,
        offset: true,
        click: true
    };
    e.widget("ui.dialog", {
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(h) {
                    var g = e(this).css(h).offset().top;
                    if (g < 0) {
                        e(this).css("top", h.top - g);
                    }
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1000
        },
        _create: function() {
            this.originalTitle = this.element.attr("title");
            if (typeof this.originalTitle !== "string") {
                this.originalTitle = "";
            }
            this.options.title = this.options.title || this.originalTitle;
            var o = this, p = o.options, m = p.title || "&#160;", h = e.ui.dialog.getTitleId(o.element), n = (o.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass(c + p.dialogClass).css({
                zIndex: p.zIndex
            }).attr("tabIndex", - 1).css("outline", 0).keydown(function(q) {
                if (p.closeOnEscape&&!q.isDefaultPrevented() && q.keyCode && q.keyCode === e.ui.keyCode.ESCAPE) {
                    o.close(q);
                    q.preventDefault();
                }
            }).attr({
                role: "dialog",
                "aria-labelledby": h
            }).mousedown(function(q) {
                o.moveToTop(false, q);
            }), j = o.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(n), i = (o.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(n), l = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                l.addClass("ui-state-hover");
            }, function() {
                l.removeClass("ui-state-hover");
            }).focus(function() {
                l.addClass("ui-state-focus");
            }).blur(function() {
                l.removeClass("ui-state-focus");
            }).click(function(q) {
                o.close(q);
                return false;
            }).appendTo(i), k = (o.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(p.closeText).appendTo(l), g = e("<span></span>").addClass("ui-dialog-title").attr("id", h).html(m).prependTo(i);
            if (e.isFunction(p.beforeclose)&&!e.isFunction(p.beforeClose)) {
                p.beforeClose = p.beforeclose;
            }
            i.find("*").add(i).disableSelection();
            if (p.draggable && e.fn.draggable) {
                o._makeDraggable();
            }
            if (p.resizable && e.fn.resizable) {
                o._makeResizable();
            }
            o._createButtons(p.buttons);
            o._isOpen = false;
            if (e.fn.bgiframe) {
                n.bgiframe();
            }
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open();
            }
        },
        destroy: function() {
            var g = this;
            if (g.overlay) {
                g.overlay.destroy();
            }
            g.uiDialog.hide();
            g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            g.uiDialog.remove();
            if (g.originalTitle) {
                g.element.attr("title", g.originalTitle);
            }
            return g;
        },
        widget: function() {
            return this.uiDialog;
        },
        close: function(j) {
            var g = this, i, h;
            if (false === g._trigger("beforeClose", j)) {
                return;
            }
            if (g.overlay) {
                g.overlay.destroy();
            }
            g.uiDialog.unbind("keypress.ui-dialog");
            g._isOpen = false;
            if (g.options.hide) {
                g.uiDialog.hide(g.options.hide, function() {
                    g._trigger("close", j);
                });
            } else {
                g.uiDialog.hide();
                g._trigger("close", j);
            }
            e.ui.dialog.overlay.resize();
            if (g.options.modal) {
                i = 0;
                e(".ui-dialog").each(function() {
                    if (this !== g.uiDialog[0]) {
                        h = e(this).css("z-index");
                        if (!isNaN(h)) {
                            i = Math.max(i, h);
                        }
                    }
                });
                e.ui.dialog.maxZ = i;
            }
            return g;
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function(k, j) {
            var g = this, i = g.options, h;
            if ((i.modal&&!k) || (!i.stack&&!i.modal)) {
                return g._trigger("focus", j);
            }
            if (i.zIndex > e.ui.dialog.maxZ) {
                e.ui.dialog.maxZ = i.zIndex;
            }
            if (g.overlay) {
                e.ui.dialog.maxZ += 1;
                g.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ);
            }
            h = {
                scrollTop: g.element.scrollTop(),
                scrollLeft: g.element.scrollLeft()
            };
            e.ui.dialog.maxZ += 1;
            g.uiDialog.css("z-index", e.ui.dialog.maxZ);
            g.element.attr(h);
            g._trigger("focus", j);
            return g;
        },
        open: function() {
            if (this._isOpen) {
                return;
            }
            var h = this, i = h.options, g = h.uiDialog;
            h.overlay = i.modal ? new e.ui.dialog.overlay(h) : null;
            h._size();
            h._position(i.position);
            g.show(i.show);
            h.moveToTop(true);
            if (i.modal) {
                g.bind("keydown.ui-dialog", function(l) {
                    if (l.keyCode !== e.ui.keyCode.TAB) {
                        return;
                    }
                    var k = e(":tabbable", this), m = k.filter(":first"), j = k.filter(":last");
                    if (l.target === j[0]&&!l.shiftKey) {
                        m.focus(1);
                        return false;
                    } else {
                        if (l.target === m[0] && l.shiftKey) {
                            j.focus(1);
                            return false;
                        }
                    }
                });
            }
            e(h.element.find(":tabbable").get().concat(g.find(".ui-dialog-buttonpane :tabbable").get().concat(g.get()))).eq(0).focus();
            h._isOpen = true;
            h._trigger("open");
            return h;
        },
        _createButtons: function(j) {
            var i = this, g = false, h = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), k = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);
            i.uiDialog.find(".ui-dialog-buttonpane").remove();
            if (typeof j === "object" && j !== null) {
                e.each(j, function() {
                    return !(g = true);
                });
            }
            if (g) {
                e.each(j, function(l, n) {
                    n = e.isFunction(n) ? {
                        click: n,
                        text: l
                    } : n;
                    var m = e('<button type="button"></button>').click(function() {
                        n.click.apply(i.element[0], arguments);
                    }).appendTo(k);
                    e.each(n, function(o, p) {
                        if (o === "click") {
                            return;
                        }
                        if (o in a) {
                            m[o](p);
                        } else {
                            m.attr(o, p);
                        }
                    });
                    if (e.fn.button) {
                        m.button();
                    }
                });
                h.appendTo(i.uiDialog);
            }
        },
        _makeDraggable: function() {
            var g = this, j = g.options, k = e(document), i;
            function h(l) {
                return {
                    position: l.position,
                    offset: l.offset
                };
            }
            g.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(l, m) {
                    i = j.height === "auto" ? "auto" : e(this).height();
                    e(this).height(e(this).height()).addClass("ui-dialog-dragging");
                    g._trigger("dragStart", l, h(m));
                },
                drag: function(l, m) {
                    g._trigger("drag", l, h(m));
                },
                stop: function(l, m) {
                    j.position = [m.position.left - k.scrollLeft(), m.position.top - k.scrollTop()];
                    e(this).removeClass("ui-dialog-dragging").height(i);
                    g._trigger("dragStop", l, h(m));
                    e.ui.dialog.overlay.resize();
                }
            });
        },
        _makeResizable: function(l) {
            l = (l === f ? this.options.resizable : l);
            var h = this, k = h.options, g = h.uiDialog.css("position"), j = (typeof l === "string" ? l : "n,e,s,w,se,sw,ne,nw");
            function i(m) {
                return {
                    originalPosition: m.originalPosition,
                    originalSize: m.originalSize,
                    position: m.position,
                    size: m.size
                };
            }
            h.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: h.element,
                maxWidth: k.maxWidth,
                maxHeight: k.maxHeight,
                minWidth: k.minWidth,
                minHeight: h._minHeight(),
                handles: j,
                start: function(m, n) {
                    e(this).addClass("ui-dialog-resizing");
                    h._trigger("resizeStart", m, i(n));
                },
                resize: function(m, n) {
                    h._trigger("resize", m, i(n));
                },
                stop: function(m, n) {
                    e(this).removeClass("ui-dialog-resizing");
                    k.height = e(this).height();
                    k.width = e(this).width();
                    h._trigger("resizeStop", m, i(n));
                    e.ui.dialog.overlay.resize();
                }
            }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
        },
        _minHeight: function() {
            var g = this.options;
            if (g.height === "auto") {
                return g.minHeight;
            } else {
                return Math.min(g.minHeight, g.height);
            }
        },
        _position: function(h) {
            var i = [], j = [0, 0], g;
            if (h) {
                if (typeof h === "string" || (typeof h === "object" && "0" in h)) {
                    i = h.split ? h.split(" ") : [h[0], h[1]];
                    if (i.length === 1) {
                        i[1] = i[0];
                    }
                    e.each(["left", "top"], function(l, k) {
                        if ( + i[l] === i[l]) {
                            j[l] = i[l];
                            i[l] = k;
                        }
                    });
                    h = {
                        my: i.join(" "),
                        at: i.join(" "),
                        offset: j.join(" ")
                    };
                }
                h = e.extend({}, e.ui.dialog.prototype.options.position, h);
            } else {
                h = e.ui.dialog.prototype.options.position;
            }
            g = this.uiDialog.is(":visible");
            if (!g) {
                this.uiDialog.show();
            }
            this.uiDialog.css({
                top: 0,
                left: 0
            }).position(e.extend({
                of: window
            }, h));
            if (!g) {
                this.uiDialog.hide();
            }
        },
        _setOptions: function(j) {
            var h = this, g = {}, i = false;
            e.each(j, function(k, l) {
                h._setOption(k, l);
                if (k in b) {
                    i = true;
                }
                if (k in d) {
                    g[k] = l;
                }
            });
            if (i) {
                this._size();
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", g);
            }
        },
        _setOption: function(j, k) {
            var h = this, g = h.uiDialog;
            switch (j) {
            case"beforeclose":
                j = "beforeClose";
                break;
            case"buttons":
                h._createButtons(k);
                break;
            case"closeText":
                h.uiDialogTitlebarCloseText.text("" + k);
                break;
            case"dialogClass":
                g.removeClass(h.options.dialogClass).addClass(c + k);
                break;
            case"disabled":
                if (k) {
                    g.addClass("ui-dialog-disabled");
                } else {
                    g.removeClass("ui-dialog-disabled");
                }
                break;
            case"draggable":
                var i = g.is(":data(draggable)");
                if (i&&!k) {
                    g.draggable("destroy");
                }
                if (!i && k) {
                    h._makeDraggable();
                }
                break;
            case"position":
                h._position(k);
                break;
            case"resizable":
                var l = g.is(":data(resizable)");
                if (l&&!k) {
                    g.resizable("destroy");
                }
                if (l && typeof k === "string") {
                    g.resizable("option", "handles", k);
                }
                if (!l && k !== false) {
                    h._makeResizable(k);
                }
                break;
            case"title":
                e(".ui-dialog-title", h.uiDialogTitlebar).html("" + (k || "&#160;"));
                break;
            }
            e.Widget.prototype._setOption.apply(h, arguments);
        },
        _size: function() {
            var k = this.options, h, j, g = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            });
            if (k.minWidth > k.width) {
                k.width = k.minWidth;
            }
            h = this.uiDialog.css({
                height: "auto",
                width: k.width
            }).height();
            j = Math.max(0, k.minHeight - h);
            if (k.height === "auto") {
                if (e.support.minHeight) {
                    this.element.css({
                        minHeight: j,
                        height: "auto"
                    });
                } else {
                    this.uiDialog.show();
                    var i = this.element.css("height", "auto").height();
                    if (!g) {
                        this.uiDialog.hide();
                    }
                    this.element.height(Math.max(i, j));
                }
            } else {
                this.element.height(Math.max(k.height - h, 0));
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight());
            }
        }
    });
    e.extend(e.ui.dialog, {
        version: "@VERSION",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(g) {
            var h = g.attr("id");
            if (!h) {
                this.uuid += 1;
                h = this.uuid;
            }
            return "ui-dialog-title-" + h;
        },
        overlay: function(g) {
            this.$el = e.ui.dialog.overlay.create(g);
        }
    });
    e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(g) {
            return g + ".dialog-overlay";
        }).join(" "),
        create: function(h) {
            if (this.instances.length === 0) {
                setTimeout(function() {
                    if (e.ui.dialog.overlay.instances.length) {
                        e(document).bind(e.ui.dialog.overlay.events, function(i) {
                            if (e(i.target).zIndex() < e.ui.dialog.overlay.maxZ) {
                                return false;
                            }
                        });
                    }
                }, 1);
                e(document).bind("keydown.dialog-overlay", function(i) {
                    if (h.options.closeOnEscape&&!i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE) {
                        h.close(i);
                        i.preventDefault();
                    }
                });
                e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize);
            }
            var g = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            if (e.fn.bgiframe) {
                g.bgiframe();
            }
            this.instances.push(g);
            return g;
        },
        destroy: function(g) {
            var h = e.inArray(g, this.instances);
            if (h!=-1) {
                this.oldInstances.push(this.instances.splice(h, 1)[0]);
            }
            if (this.instances.length === 0) {
                e([document, window]).unbind(".dialog-overlay");
            }
            g.remove();
            var i = 0;
            e.each(this.instances, function() {
                i = Math.max(i, this.css("z-index"));
            });
            this.maxZ = i;
        },
        height: function() {
            var h, g;
            if (e.browser.msie && e.browser.version < 7) {
                h = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                g = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (h < g) {
                    return e(window).height() + "px";
                } else {
                    return h + "px";
                }
            } else {
                return e(document).height() + "px";
            }
        },
        width: function() {
            var g, h;
            if (e.browser.msie) {
                g = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                h = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (g < h) {
                    return e(window).width() + "px";
                } else {
                    return g + "px";
                }
            } else {
                return e(document).width() + "px";
            }
        },
        resize: function() {
            var g = e([]);
            e.each(e.ui.dialog.overlay.instances, function() {
                g = g.add(this);
            });
            g.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            });
        }
    });
    e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function() {
            e.ui.dialog.overlay.destroy(this.$el);
        }
    });
}(jQuery));
(function(g, h) {
    g.ui = g.ui || {};
    var d = /left|center|right/, e = /top|center|bottom/, a = "center", f = {}, b = g.fn.position, c = g.fn.offset;
    g.fn.position = function(j) {
        if (!j ||!j.of) {
            return b.apply(this, arguments);
        }
        j = g.extend({}, j);
        var n = g(j.of), m = n[0], p = (j.collision || "flip").split(" "), o = j.offset ? j.offset.split(" "): [0, 0], l, i, k;
        if (m.nodeType === 9) {
            l = n.width();
            i = n.height();
            k = {
                top: 0,
                left: 0
            };
        } else {
            if (m.setTimeout) {
                l = n.width();
                i = n.height();
                k = {
                    top: n.scrollTop(),
                    left: n.scrollLeft()
                };
            } else {
                if (m.preventDefault) {
                    j.at = "left top";
                    l = i = 0;
                    k = {
                        top: j.of.pageY,
                        left: j.of.pageX
                    };
                } else {
                    l = n.outerWidth();
                    i = n.outerHeight();
                    k = n.offset();
                }
            }
        }
        g.each(["my", "at"], function() {
            var q = (j[this] || "").split(" ");
            if (q.length === 1) {
                q = d.test(q[0]) ? q.concat([a]) : e.test(q[0]) ? [a].concat(q) : [a, a];
            }
            q[0] = d.test(q[0]) ? q[0] : a;
            q[1] = e.test(q[1]) ? q[1] : a;
            j[this] = q;
        });
        if (p.length === 1) {
            p[1] = p[0];
        }
        o[0] = parseInt(o[0], 10) || 0;
        if (o.length === 1) {
            o[1] = o[0];
        }
        o[1] = parseInt(o[1], 10) || 0;
        if (j.at[0] === "right") {
            k.left += l;
        } else {
            if (j.at[0] === a) {
                k.left += l / 2;
            }
        }
        if (j.at[1] === "bottom") {
            k.top += i;
        } else {
            if (j.at[1] === a) {
                k.top += i / 2;
            }
        }
        k.left += o[0];
        k.top += o[1];
        return this.each(function() {
            var t = g(this), v = t.outerWidth(), s = t.outerHeight(), u = parseInt(g.curCSS(this, "marginLeft", true)) || 0, r = parseInt(g.curCSS(this, "marginTop", true)) || 0, x = v + u + (parseInt(g.curCSS(this, "marginRight", true)) || 0), y = s + r + (parseInt(g.curCSS(this, "marginBottom", true)) || 0), w = g.extend({}, k), q;
            if (j.my[0] === "right") {
                w.left -= v;
            } else {
                if (j.my[0] === a) {
                    w.left -= v / 2;
                }
            }
            if (j.my[1] === "bottom") {
                w.top -= s;
            } else {
                if (j.my[1] === a) {
                    w.top -= s / 2;
                }
            }
            if (!f.fractions) {
                w.left = Math.round(w.left);
                w.top = Math.round(w.top);
            }
            q = {
                left: w.left - u,
                top: w.top - r
            };
            g.each(["left", "top"], function(A, z) {
                if (g.ui.position[p[A]]) {
                    g.ui.position[p[A]][z](w, {
                        targetWidth: l,
                        targetHeight: i,
                        elemWidth: v,
                        elemHeight: s,
                        collisionPosition: q,
                        collisionWidth: x,
                        collisionHeight: y,
                        offset: o,
                        my: j.my,
                        at: j.at
                    });
                }
            });
            if (g.fn.bgiframe) {
                t.bgiframe();
            }
            t.offset(g.extend(w, {
                using: j.using
            }));
        });
    };
    g.ui.position = {
        fit: {
            left: function(i, j) {
                var l = g(window), k = j.collisionPosition.left + j.collisionWidth - l.width() - l.scrollLeft();
                i.left = k > 0 ? i.left - k : Math.max(i.left - j.collisionPosition.left, i.left);
            },
            top: function(i, j) {
                var l = g(window), k = j.collisionPosition.top + j.collisionHeight - l.height() - l.scrollTop();
                i.top = k > 0 ? i.top - k : Math.max(i.top - j.collisionPosition.top, i.top);
            }
        },
        flip: {
            left: function(j, l) {
                if (l.at[0] === a) {
                    return;
                }
                var n = g(window), m = l.collisionPosition.left + l.collisionWidth - n.width() - n.scrollLeft(), i = l.my[0] === "left"?-l.elemWidth : l.my[0] === "right" ? l.elemWidth : 0, k = l.at[0] === "left" ? l.targetWidth : - l.targetWidth, o =- 2 * l.offset[0];
                j.left += l.collisionPosition.left < 0 ? i + k + o : m > 0 ? i + k + o : 0;
            },
            top: function(j, l) {
                if (l.at[1] === a) {
                    return;
                }
                var n = g(window), m = l.collisionPosition.top + l.collisionHeight - n.height() - n.scrollTop(), i = l.my[1] === "top"?-l.elemHeight : l.my[1] === "bottom" ? l.elemHeight : 0, k = l.at[1] === "top" ? l.targetHeight : - l.targetHeight, o =- 2 * l.offset[1];
                j.top += l.collisionPosition.top < 0 ? i + k + o : m > 0 ? i + k + o : 0;
            }
        }
    };
    if (!g.offset.setOffset) {
        g.offset.setOffset = function(m, j) {
            if (/static/.test(g.curCSS(m, "position"))) {
                m.style.position = "relative";
            }
            var l = g(m), o = l.offset(), i = parseInt(g.curCSS(m, "top", true), 10) || 0, n = parseInt(g.curCSS(m, "left", true), 10) || 0, k = {
                top: (j.top - o.top) + i,
                left: (j.left - o.left) + n
            };
            if ("using" in j) {
                j.using.call(m, k);
            } else {
                l.css(k);
            }
        };
        g.fn.offset = function(i) {
            var j = this[0];
            if (!j ||!j.ownerDocument) {
                return null;
            }
            if (i) {
                return this.each(function() {
                    g.offset.setOffset(this, i);
                });
            }
            return c.call(this);
        };
    }(function() {
        var j = document.getElementsByTagName("body")[0], q = document.createElement("div"), n, p, k, o, m;
        n = document.createElement(j ? "div" : "body");
        k = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (j) {
            g.extend(k, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
        }
        for (var l in k) {
            n.style[l] = k[l];
        }
        n.appendChild(q);
        p = j || document.documentElement;
        p.insertBefore(n, p.firstChild);
        q.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
        o = g(q).offset(function(i, r) {
            return r;
        }).offset();
        n.innerHTML = "";
        p.removeChild(n);
        m = o.top + o.left + (j ? 2000 : 0);
        f.fractions = m > 21 && m < 22;
    })();
}(jQuery));
(function(a, b) {
    a.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue();
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();
            a.Widget.prototype.destroy.apply(this, arguments);
        },
        value: function(c) {
            if (c === b) {
                return this._value();
            }
            this._setOption("value", c);
            return this;
        },
        _setOption: function(c, d) {
            if (c === "value") {
                this.options.value = d;
                this._refreshValue();
                if (this._value() === this.options.max) {
                    this._trigger("complete");
                }
            }
            a.Widget.prototype._setOption.apply(this, arguments);
        },
        _value: function() {
            var c = this.options.value;
            if (typeof c !== "number") {
                c = 0;
            }
            return Math.min(this.options.max, Math.max(this.min, c));
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max;
        },
        _refreshValue: function() {
            var d = this.value();
            var c = this._percentage();
            if (this.oldValue !== d) {
                this.oldValue = d;
                this._trigger("change");
            }
            this.valueDiv.toggle(d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
            this.element.attr("aria-valuenow", d);
        }
    });
    a.extend(a.ui.progressbar, {
        version: "@VERSION"
    });
})(jQuery);
(function(b, c) {
    var a = 5;
    b.widget("ui.slider", b.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var e = this, k = this.options, j = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", d = (k.values && k.values.length) || 1, g = [];
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (k.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = b([]);
            if (k.range) {
                if (k.range === true) {
                    if (!k.values) {
                        k.values = [this._valueMin(), this._valueMin()];
                    }
                    if (k.values.length && k.values.length !== 2) {
                        k.values = [k.values[0], k.values[0]];
                    }
                }
                this.range = b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ((k.range === "min" || k.range === "max") ? " ui-slider-range-" + k.range : ""));
            }
            for (var f = j.length; f < d; f += 1) {
                g.push(h);
            }
            this.handles = j.add(b(g.join("")).appendTo(e.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(i) {
                i.preventDefault();
            }).hover(function() {
                if (!k.disabled) {
                    b(this).addClass("ui-state-hover");
                }
            }, function() {
                b(this).removeClass("ui-state-hover");
            }).focus(function() {
                if (!k.disabled) {
                    b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    b(this).addClass("ui-state-focus");
                } else {
                    b(this).blur();
                }
            }).blur(function() {
                b(this).removeClass("ui-state-focus");
            });
            this.handles.each(function(l) {
                b(this).data("index.ui-slider-handle", l);
            });
            this.handles.keydown(function(o) {
                var l = b(this).data("index.ui-slider-handle"), p, m, i, n;
                if (e.options.disabled) {
                    return;
                }
                switch (o.keyCode) {
                case b.ui.keyCode.HOME:
                case b.ui.keyCode.END:
                case b.ui.keyCode.PAGE_UP:
                case b.ui.keyCode.PAGE_DOWN:
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    o.preventDefault();
                    if (!e._keySliding) {
                        e._keySliding = true;
                        b(this).addClass("ui-state-active");
                        p = e._start(o, l);
                        if (p === false) {
                            return;
                        }
                    }
                    break;
                }
                n = e.options.step;
                if (e.options.values && e.options.values.length) {
                    m = i = e.values(l);
                } else {
                    m = i = e.value();
                }
                switch (o.keyCode) {
                case b.ui.keyCode.HOME:
                    i = e._valueMin();
                    break;
                case b.ui.keyCode.END:
                    i = e._valueMax();
                    break;
                case b.ui.keyCode.PAGE_UP:
                    i = e._trimAlignValue(m + ((e._valueMax() - e._valueMin()) / a));
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    i = e._trimAlignValue(m - ((e._valueMax() - e._valueMin()) / a));
                    break;
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                    if (m === e._valueMax()) {
                        return;
                    }
                    i = e._trimAlignValue(m + n);
                    break;
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    if (m === e._valueMin()) {
                        return;
                    }
                    i = e._trimAlignValue(m - n);
                    break;
                }
                e._slide(o, l, i);
            }).keyup(function(l) {
                var i = b(this).data("index.ui-slider-handle");
                if (e._keySliding) {
                    e._keySliding = false;
                    e._stop(l, i);
                    e._change(l, i);
                    b(this).removeClass("ui-state-active");
                }
            });
            this._refreshValue();
            this._animateOff = false;
        },
        destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this;
        },
        _mouseCapture: function(f) {
            var g = this.options, j, l, e, h, n, k, m, i, d;
            if (g.disabled) {
                return false;
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            j = {
                x: f.pageX,
                y: f.pageY
            };
            l = this._normValueFromMouse(j);
            e = this._valueMax() - this._valueMin() + 1;
            n = this;
            this.handles.each(function(o) {
                var p = Math.abs(l - n.values(o));
                if (e > p) {
                    e = p;
                    h = b(this);
                    k = o;
                }
            });
            if (g.range === true && this.values(1) === g.min) {
                k += 1;
                h = b(this.handles[k]);
            }
            m = this._start(f, k);
            if (m === false) {
                return false;
            }
            this._mouseSliding = true;
            n._handleIndex = k;
            h.addClass("ui-state-active").focus();
            i = h.offset();
            d=!b(f.target).parents().andSelf().is(".ui-slider-handle");
            this._clickOffset = d ? {
                left: 0,
                top: 0
            } : {
                left: f.pageX - i.left - (h.width() / 2),
                top: f.pageY - i.top - (h.height() / 2) - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(f, k, l);
            }
            this._animateOff = true;
            return true;
        },
        _mouseStart: function(d) {
            return true;
        },
        _mouseDrag: function(f) {
            var d = {
                x: f.pageX,
                y: f.pageY
            }, e = this._normValueFromMouse(d);
            this._slide(f, this._handleIndex, e);
            return false;
        },
        _mouseStop: function(d) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(d, this._handleIndex);
            this._change(d, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false;
        },
        _detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(e) {
            var d, h, g, f, i;
            if (this.orientation === "horizontal") {
                d = this.elementSize.width;
                h = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                d = this.elementSize.height;
                h = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }
            g = (h / d);
            if (g > 1) {
                g = 1;
            }
            if (g < 0) {
                g = 0;
            }
            if (this.orientation === "vertical") {
                g = 1 - g;
            }
            f = this._valueMax() - this._valueMin();
            i = this._valueMin() + g * f;
            return this._trimAlignValue(i);
        },
        _start: function(f, e) {
            var d = {
                handle: this.handles[e],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                d.value = this.values(e);
                d.values = this.values();
            }
            return this._trigger("start", f, d);
        },
        _slide: function(h, g, f) {
            var d, e, i;
            if (this.options.values && this.options.values.length) {
                d = this.values(g ? 0 : 1);
                if ((this.options.values.length === 2 && this.options.range === true) && ((g === 0 && f > d) || (g === 1 && f < d))) {
                    f = d;
                }
                if (f !== this.values(g)) {
                    e = this.values();
                    e[g] = f;
                    i = this._trigger("slide", h, {
                        handle: this.handles[g],
                        value: f,
                        values: e
                    });
                    d = this.values(g ? 0 : 1);
                    if (i !== false) {
                        this.values(g, f, true);
                    }
                }
            } else {
                if (f !== this.value()) {
                    i = this._trigger("slide", h, {
                        handle: this.handles[g],
                        value: f
                    });
                    if (i !== false) {
                        this.value(f);
                    }
                }
            }
        },
        _stop: function(f, e) {
            var d = {
                handle: this.handles[e],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                d.value = this.values(e);
                d.values = this.values();
            }
            this._trigger("stop", f, d);
        },
        _change: function(f, e) {
            if (!this._keySliding&&!this._mouseSliding) {
                var d = {
                    handle: this.handles[e],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    d.value = this.values(e);
                    d.values = this.values();
                }
                this._trigger("change", f, d);
            }
        },
        value: function(d) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(d);
                this._refreshValue();
                this._change(null, 0);
                return;
            }
            return this._value();
        },
        values: function(e, h) {
            var g, d, f;
            if (arguments.length > 1) {
                this.options.values[e] = this._trimAlignValue(h);
                this._refreshValue();
                this._change(null, e);
                return;
            }
            if (arguments.length) {
                if (b.isArray(arguments[0])) {
                    g = this.options.values;
                    d = arguments[0];
                    for (f = 0; f < g.length; f += 1) {
                        g[f] = this._trimAlignValue(d[f]);
                        this._change(null, f);
                    }
                    this._refreshValue();
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(e);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },
        _setOption: function(e, f) {
            var d, g = 0;
            if (b.isArray(this.options.values)) {
                g = this.options.values.length;
            }
            b.Widget.prototype._setOption.apply(this, arguments);
            switch (e) {
            case"disabled":
                if (f) {
                    this.handles.filter(".ui-state-focus").blur();
                    this.handles.removeClass("ui-state-hover");
                    this.handles.propAttr("disabled", true);
                    this.element.addClass("ui-disabled");
                } else {
                    this.handles.propAttr("disabled", false);
                    this.element.removeClass("ui-disabled");
                }
                break;
            case"orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case"value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case"values":
                this._animateOff = true;
                this._refreshValue();
                for (d = 0; d < g; d += 1) {
                    this._change(null, d);
                }
                this._animateOff = false;
                break;
            }
        },
        _value: function() {
            var d = this.options.value;
            d = this._trimAlignValue(d);
            return d;
        },
        _values: function(d) {
            var g, f, e;
            if (arguments.length) {
                g = this.options.values[d];
                g = this._trimAlignValue(g);
                return g;
            } else {
                f = this.options.values.slice();
                for (e = 0; e < f.length; e += 1) {
                    f[e] = this._trimAlignValue(f[e]);
                }
                return f;
            }
        },
        _trimAlignValue: function(g) {
            if (g <= this._valueMin()) {
                return this._valueMin();
            }
            if (g >= this._valueMax()) {
                return this._valueMax();
            }
            var d = (this.options.step > 0) ? this.options.step: 1, f = (g - this._valueMin())%d, e = g - f;
            if (Math.abs(f) * 2 >= d) {
                e += (f > 0) ? d : ( - d);
            }
            return parseFloat(e.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var g = this.options.range, f = this.options, m = this, e = (!this._animateOff) ? f.animate: false, h, d = {}, i, k, j, l;
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(o, n) {
                    h = (m.values(o) - m._valueMin()) / (m._valueMax() - m._valueMin()) * 100;
                    d[m.orientation === "horizontal" ? "left": "bottom"] = h + "%";
                    b(this).stop(1, 1)[e ? "animate": "css"](d, f.animate);
                    if (m.options.range === true) {
                        if (m.orientation === "horizontal") {
                            if (o === 0) {
                                m.range.stop(1, 1)[e ? "animate": "css"]({
                                    left: h + "%"
                                }, f.animate);
                            }
                            if (o === 1) {
                                m.range[e ? "animate": "css"]({
                                    width: (h - i) + "%"
                                }, {
                                    queue: false,
                                    duration: f.animate
                                });
                            }
                        } else {
                            if (o === 0) {
                                m.range.stop(1, 1)[e ? "animate": "css"]({
                                    bottom: (h) + "%"
                                }, f.animate);
                            }
                            if (o === 1) {
                                m.range[e ? "animate": "css"]({
                                    height: (h - i) + "%"
                                }, {
                                    queue: false,
                                    duration: f.animate
                                });
                            }
                        }
                    }
                    i = h;
                });
            } else {
                k = this.value();
                j = this._valueMin();
                l = this._valueMax();
                h = (l !== j) ? (k - j) / (l - j) * 100 : 0;
                d[m.orientation === "horizontal" ? "left": "bottom"] = h + "%";
                this.handle.stop(1, 1)[e ? "animate": "css"](d, f.animate);
                if (g === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[e ? "animate": "css"]({
                        width: h + "%"
                    }, f.animate);
                }
                if (g === "max" && this.orientation === "horizontal") {
                    this.range[e ? "animate": "css"]({
                        width: (100 - h) + "%"
                    }, {
                        queue: false,
                        duration: f.animate
                    });
                }
                if (g === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[e ? "animate": "css"]({
                        height: h + "%"
                    }, f.animate);
                }
                if (g === "max" && this.orientation === "vertical") {
                    this.range[e ? "animate": "css"]({
                        height: (100 - h) + "%"
                    }, {
                        queue: false,
                        duration: f.animate
                    });
                }
            }
        }
    });
    b.extend(b.ui.slider, {
        version: "@VERSION"
    });
}(jQuery));
(function(d, f) {
    var c = 0, b = 0;
    function e() {
        return ++c;
    }
    function a() {
        return ++b;
    }
    d.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: false,
            cookie: null,
            collapsible: false,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(true);
        },
        _setOption: function(g, h) {
            if (g == "selected") {
                if (this.options.collapsible && h == this.options.selected) {
                    return;
                }
                this.select(h);
            } else {
                this.options[g] = h;
                this._tabify();
            }
        },
        _tabId: function(g) {
            return g.title && g.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + e();
        },
        _sanitizeSelector: function(g) {
            return g.replace(/:/g, "\\:");
        },
        _cookie: function() {
            var g = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + a());
            return d.cookie.apply(null, [g].concat(d.makeArray(arguments)));
        },
        _ui: function(h, g) {
            return {
                tab: h,
                panel: g,
                index: this.anchors.index(h)
            };
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var g = d(this);
                g.html(g.data("label.tabs")).removeData("label.tabs");
            });
        },
        _tabify: function(t) {
            var u = this, j = this.options, h = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0);
            this.lis = d(" > li:has(a[href])", this.list);
            this.anchors = this.lis.map(function() {
                return d("a", this)[0];
            });
            this.panels = d([]);
            this.anchors.each(function(w, o) {
                var v = d(o).attr("href");
                var x = v.split("#")[0], y;
                if (x && (x === location.toString().split("#")[0] || (y = d("base")[0]) && x === y.href)) {
                    v = o.hash;
                    o.href = v;
                }
                if (h.test(v)) {
                    u.panels = u.panels.add(u.element.find(u._sanitizeSelector(v)));
                } else {
                    if (v && v !== "#") {
                        d.data(o, "href.tabs", v);
                        d.data(o, "load.tabs", v.replace(/#.*$/, ""));
                        var A = u._tabId(o);
                        o.href = "#" + A;
                        var z = u.element.find("#" + A);
                        if (!z.length) {
                            z = d(j.panelTemplate).attr("id", A).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(u.panels[w - 1] || u.list);
                            z.data("destroy.tabs", true);
                        }
                        u.panels = u.panels.add(z);
                    } else {
                        j.disabled.push(w);
                    }
                }
            });
            if (t) {
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
                this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
                this.lis.addClass("ui-state-default ui-corner-top");
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
                if (j.selected === f) {
                    if (location.hash) {
                        this.anchors.each(function(v, o) {
                            if (o.hash == location.hash) {
                                j.selected = v;
                                return false;
                            }
                        });
                    }
                    if (typeof j.selected !== "number" && j.cookie) {
                        j.selected = parseInt(u._cookie(), 10);
                    }
                    if (typeof j.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) {
                        j.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
                    }
                    j.selected = j.selected || (this.lis.length ? 0 : - 1);
                } else {
                    if (j.selected === null) {
                        j.selected =- 1;
                    }
                }
                j.selected = ((j.selected >= 0 && this.anchors[j.selected]) || j.selected < 0) ? j.selected : 0;
                j.disabled = d.unique(j.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function(v, o) {
                    return u.lis.index(v);
                }))).sort();
                if (d.inArray(j.selected, j.disabled)!=-1) {
                    j.disabled.splice(d.inArray(j.selected, j.disabled), 1);
                }
                this.panels.addClass("ui-tabs-hide");
                this.lis.removeClass("ui-tabs-selected ui-state-active");
                if (j.selected >= 0 && this.anchors.length) {
                    u.element.find(u._sanitizeSelector(u.anchors[j.selected].hash)).removeClass("ui-tabs-hide");
                    this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");
                    u.element.queue("tabs", function() {
                        u._trigger("show", null, u._ui(u.anchors[j.selected], u.element.find(u._sanitizeSelector(u.anchors[j.selected].hash))[0]));
                    });
                    this.load(j.selected);
                }
                d(window).bind("unload", function() {
                    u.lis.add(u.anchors).unbind(".tabs");
                    u.lis = u.anchors = u.panels = null;
                });
            } else {
                j.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
            }
            this.element[j.collapsible ? "addClass": "removeClass"]("ui-tabs-collapsible");
            if (j.cookie) {
                this._cookie(j.selected, j.cookie);
            }
            for (var m = 0, s; (s = this.lis[m]); m++) {
                d(s)[d.inArray(m, j.disabled)!=-1&&!d(s).hasClass("ui-tabs-selected") ? "addClass": "removeClass"]("ui-state-disabled");
            }
            if (j.cache === false) {
                this.anchors.removeData("cache.tabs");
            }
            this.lis.add(this.anchors).unbind(".tabs");
            if (j.event !== "mouseover") {
                var l = function(o, i) {
                    if (i.is(":not(.ui-state-disabled)")) {
                        i.addClass("ui-state-" + o);
                    }
                };
                var p = function(o, i) {
                    i.removeClass("ui-state-" + o);
                };
                this.lis.bind("mouseover.tabs", function() {
                    l("hover", d(this));
                });
                this.lis.bind("mouseout.tabs", function() {
                    p("hover", d(this));
                });
                this.anchors.bind("focus.tabs", function() {
                    l("focus", d(this).closest("li"));
                });
                this.anchors.bind("blur.tabs", function() {
                    p("focus", d(this).closest("li"));
                });
            }
            var g, n;
            if (j.fx) {
                if (d.isArray(j.fx)) {
                    g = j.fx[0];
                    n = j.fx[1];
                } else {
                    g = n = j.fx;
                }
            }
            function k(i, o) {
                i.css("display", "");
                if (!d.support.opacity && o.opacity) {
                    i[0].style.removeAttribute("filter");
                }
            }
            var q = n ? function(i, o) {
                d(i).closest("li").addClass("ui-tabs-selected ui-state-active");
                o.hide().removeClass("ui-tabs-hide").animate(n, n.duration || "normal", function() {
                    k(o, n);
                    u._trigger("show", null, u._ui(i, o[0]));
                });
            }
            : function(i, o) {
                d(i).closest("li").addClass("ui-tabs-selected ui-state-active");
                o.removeClass("ui-tabs-hide");
                u._trigger("show", null, u._ui(i, o[0]));
            };
            var r = g ? function(o, i) {
                i.animate(g, g.duration || "normal", function() {
                    u.lis.removeClass("ui-tabs-selected ui-state-active");
                    i.addClass("ui-tabs-hide");
                    k(i, g);
                    u.element.dequeue("tabs");
                });
            }
            : function(o, i, v) {
                u.lis.removeClass("ui-tabs-selected ui-state-active");
                i.addClass("ui-tabs-hide");
                u.element.dequeue("tabs");
            };
            this.anchors.bind(j.event + ".tabs", function() {
                var o = this, w = d(o).closest("li"), i = u.panels.filter(":not(.ui-tabs-hide)"), v = u.element.find(u._sanitizeSelector(o.hash));
                if ((w.hasClass("ui-tabs-selected")&&!j.collapsible) || w.hasClass("ui-state-disabled") || w.hasClass("ui-state-processing") || u.panels.filter(":animated").length || u._trigger("select", null, u._ui(this, v[0])) === false) {
                    this.blur();
                    return false;
                }
                j.selected = u.anchors.index(this);
                u.abort();
                if (j.collapsible) {
                    if (w.hasClass("ui-tabs-selected")) {
                        j.selected =- 1;
                        if (j.cookie) {
                            u._cookie(j.selected, j.cookie);
                        }
                        u.element.queue("tabs", function() {
                            r(o, i);
                        }).dequeue("tabs");
                        this.blur();
                        return false;
                    } else {
                        if (!i.length) {
                            if (j.cookie) {
                                u._cookie(j.selected, j.cookie);
                            }
                            u.element.queue("tabs", function() {
                                q(o, v);
                            });
                            u.load(u.anchors.index(this));
                            this.blur();
                            return false;
                        }
                    }
                }
                if (j.cookie) {
                    u._cookie(j.selected, j.cookie);
                }
                if (v.length) {
                    if (i.length) {
                        u.element.queue("tabs", function() {
                            r(o, i);
                        });
                    }
                    u.element.queue("tabs", function() {
                        q(o, v);
                    });
                    u.load(u.anchors.index(this));
                } else {
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                }
                if (d.browser.msie) {
                    this.blur();
                }
            });
            this.anchors.bind("click.tabs", function() {
                return false;
            });
        },
        _getIndex: function(g) {
            if (typeof g == "string") {
                g = this.anchors.index(this.anchors.filter("[href$='" + g + "']"));
            }
            return g;
        },
        destroy: function() {
            var g = this.options;
            this.abort();
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
            this.anchors.each(function() {
                var h = d.data(this, "href.tabs");
                if (h) {
                    this.href = h;
                }
                var i = d(this).unbind(".tabs");
                d.each(["href", "load", "cache"], function(j, k) {
                    i.removeData(k + ".tabs");
                });
            });
            this.lis.unbind(".tabs").add(this.panels).each(function() {
                if (d.data(this, "destroy.tabs")) {
                    d(this).remove();
                } else {
                    d(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "));
                }
            });
            if (g.cookie) {
                this._cookie(null, g.cookie);
            }
            return this;
        },
        add: function(j, i, h) {
            if (h === f) {
                h = this.anchors.length;
            }
            var g = this, l = this.options, n = d(l.tabTemplate.replace(/#\{href\}/g, j).replace(/#\{label\}/g, i)), m=!j.indexOf("#") ? j.replace("#", "") : this._tabId(d("a", n)[0]);
            n.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
            var k = g.element.find("#" + m);
            if (!k.length) {
                k = d(l.panelTemplate).attr("id", m).data("destroy.tabs", true);
            }
            k.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
            if (h >= this.lis.length) {
                n.appendTo(this.list);
                k.appendTo(this.list[0].parentNode);
            } else {
                n.insertBefore(this.lis[h]);
                k.insertBefore(this.panels[h]);
            }
            l.disabled = d.map(l.disabled, function(p, o) {
                return p >= h?++p: p;
            });
            this._tabify();
            if (this.anchors.length == 1) {
                l.selected = 0;
                n.addClass("ui-tabs-selected ui-state-active");
                k.removeClass("ui-tabs-hide");
                this.element.queue("tabs", function() {
                    g._trigger("show", null, g._ui(g.anchors[0], g.panels[0]));
                });
                this.load(0);
            }
            this._trigger("add", null, this._ui(this.anchors[h], this.panels[h]));
            return this;
        },
        remove: function(g) {
            g = this._getIndex(g);
            var i = this.options, j = this.lis.eq(g).remove(), h = this.panels.eq(g).remove();
            if (j.hasClass("ui-tabs-selected") && this.anchors.length > 1) {
                this.select(g + (g + 1 < this.anchors.length ? 1 : - 1));
            }
            i.disabled = d.map(d.grep(i.disabled, function(l, k) {
                return l != g;
            }), function(l, k) {
                return l >= g?--l: l;
            });
            this._tabify();
            this._trigger("remove", null, this._ui(j.find("a")[0], h[0]));
            return this;
        },
        enable: function(g) {
            g = this._getIndex(g);
            var h = this.options;
            if (d.inArray(g, h.disabled)==-1) {
                return;
            }
            this.lis.eq(g).removeClass("ui-state-disabled");
            h.disabled = d.grep(h.disabled, function(k, j) {
                return k != g;
            });
            this._trigger("enable", null, this._ui(this.anchors[g], this.panels[g]));
            return this;
        },
        disable: function(h) {
            h = this._getIndex(h);
            var g = this, i = this.options;
            if (h != i.selected) {
                this.lis.eq(h).addClass("ui-state-disabled");
                i.disabled.push(h);
                i.disabled.sort();
                this._trigger("disable", null, this._ui(this.anchors[h], this.panels[h]));
            }
            return this;
        },
        select: function(g) {
            g = this._getIndex(g);
            if (g==-1) {
                if (this.options.collapsible && this.options.selected!=-1) {
                    g = this.options.selected;
                } else {
                    return this;
                }
            }
            this.anchors.eq(g).trigger(this.options.event + ".tabs");
            return this;
        },
        load: function(j) {
            j = this._getIndex(j);
            var h = this, l = this.options, g = this.anchors.eq(j)[0], i = d.data(g, "load.tabs");
            this.abort();
            if (!i || this.element.queue("tabs").length !== 0 && d.data(g, "cache.tabs")) {
                this.element.dequeue("tabs");
                return;
            }
            this.lis.eq(j).addClass("ui-state-processing");
            if (l.spinner) {
                var k = d("span", g);
                k.data("label.tabs", k.html()).html(l.spinner);
            }
            this.xhr = d.ajax(d.extend({}, l.ajaxOptions, {
                url: i,
                success: function(n, m) {
                    h.element.find(h._sanitizeSelector(g.hash)).html(n);
                    h._cleanup();
                    if (l.cache) {
                        d.data(g, "cache.tabs", true);
                    }
                    h._trigger("load", null, h._ui(h.anchors[j], h.panels[j]));
                    try {
                        l.ajaxOptions.success(n, m);
                    } catch (o) {}
                },
                error: function(o, m, n) {
                    h._cleanup();
                    h._trigger("load", null, h._ui(h.anchors[j], h.panels[j]));
                    try {
                        l.ajaxOptions.error(o, m, j, g);
                    } catch (n) {}
                }
            }));
            h.element.dequeue("tabs");
            return this;
        },
        abort: function() {
            this.element.queue([]);
            this.panels.stop(false, true);
            this.element.queue("tabs", this.element.queue("tabs").splice( - 2, 2));
            if (this.xhr) {
                this.xhr.abort();
                delete this.xhr;
            }
            this._cleanup();
            return this;
        },
        url: function(h, g) {
            this.anchors.eq(h).removeData("cache.tabs").data("load.tabs", g);
            return this;
        },
        length: function() {
            return this.anchors.length;
        }
    });
    d.extend(d.ui.tabs, {
        version: "@VERSION"
    });
    d.extend(d.ui.tabs.prototype, {
        rotation: null,
        rotate: function(i, k) {
            var g = this, l = this.options;
            var h = g._rotate || (g._rotate = function(m) {
                clearTimeout(g.rotation);
                g.rotation = setTimeout(function() {
                    var n = l.selected;
                    g.select(++n < g.anchors.length ? n : 0);
                }, i);
                if (m) {
                    m.stopPropagation();
                }
            });
            var j = g._unrotate || (g._unrotate=!k ? function(m) {
                if (m.clientX) {
                    g.rotate(null);
                }
            } : function(m) {
                h();
            });
            if (i) {
                this.element.bind("tabsshow", h);
                this.anchors.bind(l.event + ".tabs", j);
                h();
            } else {
                clearTimeout(g.rotation);
                this.element.unbind("tabsshow", h);
                this.anchors.unbind(l.event + ".tabs", j);
                delete this._rotate;
                delete this._unrotate;
            }
            return this;
        }
    });
})(jQuery);
/*!
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
(function(a) {
    a.fn.appear = function(d, b) {
        var c = a.extend({
            data: undefined,
            one: true
        }, b);
        return this.each(function() {
            var g = a(this);
            g.appeared = false;
            if (!d) {
                g.trigger("appear", c.data);
                return;
            }
            var f = a(window);
            var e = function() {
                if (!g.is(":visible")) {
                    g.appeared = false;
                    return;
                }
                var k = f.scrollLeft();
                var j = f.scrollTop();
                var l = g.offset();
                var i = l.left;
                var m = l.top;
                if (m + g.height() >= j && m <= j + f.height() && i + g.width() >= k && i <= k + f.width()) {
                    if (!g.appeared) {
                        g.trigger("appear", c.data);
                    }
                } else {
                    g.appeared = false;
                }
            };
            var h = function() {
                g.appeared = true;
                if (c.one) {
                    f.unbind("scroll", e);
                    var j = a.inArray(e, a.fn.appear.checks);
                    if (j >= 0) {
                        a.fn.appear.checks.splice(j, 1);
                    }
                }
                d.apply(this, arguments);
            };
            if (c.one) {
                g.one("appear", c.data, h);
            } else {
                g.bind("appear", c.data, h);
            }
            f.scroll(e);
            a.fn.appear.checks.push(e);
            (e)();
        });
    };
    a.extend(a.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var b = a.fn.appear.checks.length;
            if (b > 0) {
                while (b--) {
                    (a.fn.appear.checks[b])();
                }
            }
        },
        run: function() {
            if (a.fn.appear.timeout) {
                clearTimeout(a.fn.appear.timeout);
            }
            a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20);
        }
    });
    a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(c, d) {
        var b = a.fn[d];
        if (b) {
            a.fn[d] = function() {
                var e = b.apply(this, arguments);
                a.fn.appear.run();
                return e;
            };
        }
    });
})(jQuery);
(function(a) {
    a(window).bind("bindloadlate", function(b) {
        a("img.loadlate").appear(function() {
            var d = a(this).attr("loadlate"), c = a(this).attr("data-widget");
            if (d) {
                a(this).attr("src", d);
                a(this).removeAttr("loadlate");
            }
            if (c && c[0] === "/") {
                a(this).removeAttr("data-widget").parent().load(c);
            }
        });
        a("img.loadlate.hidden").removeClass("hidden");
    });
    a(window).trigger("bindloadlate");
})(jQuery);
/*! ColorBox v1.3.19 - jQuery lightbox plugin
 * (c) 2011 Jack Moore - jacklmoore.com
 * License: http://www.opensource.org/licenses/mit-license.php
 */
(function(J, l, W) {
    var K = {
        transition: "elastic",
        speed: 300,
        width: false,
        initialWidth: "600",
        innerWidth: false,
        maxWidth: false,
        height: false,
        initialHeight: "450",
        innerHeight: false,
        maxHeight: false,
        scalePhotos: true,
        scrolling: true,
        inline: false,
        html: false,
        iframe: false,
        fastIframe: true,
        photo: false,
        href: false,
        title: false,
        rel: false,
        opacity: 0.9,
        preloading: true,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: false,
        returnFocus: true,
        reposition: true,
        loop: true,
        slideshow: false,
        slideshowAuto: true,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: false,
        onLoad: false,
        onComplete: false,
        onCleanup: false,
        onClosed: false,
        overlayClose: true,
        escKey: true,
        arrowKey: true,
        top: false,
        bottom: false,
        left: false,
        right: false,
        fixed: false,
        data: undefined
    }, x = "colorbox", S = "cbox", r = S + "Element", V = S + "_open", e = S + "_load", U = S + "_complete", u = S + "_cleanup", ac = S + "_closed", i = S + "_purge", v=!J.support.opacity&&!J.support.style, af = v&&!W.XMLHttpRequest, aa = S + "_IE6", Q, ag, ah, d, H, p, b, P, c, Z, N, k, h, o, t, X, s, R, z, B, ae, ai, m, g, a, w, I, n, D, Y, M, A, L, ad = "div", ab;
    function G(aj, am, al) {
        var ak = l.createElement(aj);
        if (am) {
            ak.id = S + am;
        }
        if (al) {
            ak.style.cssText = al;
        }
        return J(ak);
    }
    function E(ak) {
        var aj = c.length, al = (I + ak)%aj;
        return (al < 0) ? aj + al : al;
    }
    function O(aj, ak) {
        return Math.round((/%/.test(aj) ? ((ak === "x" ? Z.width() : Z.height()) / 100) : 1) * parseInt(aj, 10));
    }
    function C(aj) {
        return ae.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(aj);
    }
    function T() {
        var aj;
        ae = J.extend({}, J.data(w, x));
        for (aj in ae) {
            if (J.isFunction(ae[aj]) && aj.slice(0, 2) !== "on") {
                ae[aj] = ae[aj].call(w);
            }
        }
        ae.rel = ae.rel || w.rel || "nofollow";
        ae.href = ae.href || J(w).attr("href");
        ae.title = ae.title || w.title;
        if (typeof ae.href === "string") {
            ae.href = J.trim(ae.href);
        }
    }
    function F(aj, ak) {
        J.event.trigger(aj);
        if (ak) {
            ak.call(w);
        }
    }
    function y() {
        var ak, am = S + "Slideshow_", an = "click." + S, ao, al, aj;
        if (ae.slideshow && c[1]) {
            ao = function() {
                X.text(ae.slideshowStop).unbind(an).bind(U, function() {
                    if (ae.loop || c[I + 1]) {
                        ak = setTimeout(L.next, ae.slideshowSpeed);
                    }
                }).bind(e, function() {
                    clearTimeout(ak);
                }).one(an + " " + u, al);
                ag.removeClass(am + "off").addClass(am + "on");
                ak = setTimeout(L.next, ae.slideshowSpeed);
            };
            al = function() {
                clearTimeout(ak);
                X.text(ae.slideshowStart).unbind([U, e, u, an].join(" ")).one(an, function() {
                    L.next();
                    ao();
                });
                ag.removeClass(am + "on").addClass(am + "off");
            };
            if (ae.slideshowAuto) {
                ao();
            } else {
                al();
            }
        } else {
            ag.removeClass(am + "off " + am + "on");
        }
    }
    function f(aj) {
        if (!M) {
            w = aj;
            T();
            c = J(w);
            I = 0;
            if (ae.rel !== "nofollow") {
                c = J("." + r).filter(function() {
                    var ak = J.data(this, x).rel || this.rel;
                    return (ak === ae.rel);
                });
                I = c.index(w);
                if (I===-1) {
                    c = c.add(w);
                    I = c.length - 1;
                }
            }
            if (!D) {
                D = Y = true;
                ag.show();
                if (ae.returnFocus) {
                    J(w).blur().one(ac, function() {
                        J(this).focus();
                    });
                }
                Q.css({
                    opacity: + ae.opacity,
                    cursor: ae.overlayClose ? "pointer": "auto"
                }).show();
                ae.w = O(ae.initialWidth, "x");
                ae.h = O(ae.initialHeight, "y");
                L.position();
                if (af) {
                    Z.bind("resize." + aa + " scroll." + aa, function() {
                        Q.css({
                            width: Z.width(),
                            height: Z.height(),
                            top: Z.scrollTop(),
                            left: Z.scrollLeft()
                        });
                    }).trigger("resize." + aa);
                }
                F(V, ae.onOpen);
                B.add(o).hide();
                z.html(ae.close).show();
            }
            L.load(true);
        }
    }
    function q() {
        if (!ag && l.body) {
            ab = false;
            Z = J(W);
            ag = G(ad).attr({
                id: x,
                "class": v ? S + (af ? "IE6" : "IE"): ""
            }).hide();
            Q = G(ad, "Overlay", af ? "position:absolute" : "").hide();
            ah = G(ad, "Wrapper");
            d = G(ad, "Content").append(N = G(ad, "LoadedContent", "width:0; height:0; overflow:hidden"), h = G(ad, "LoadingOverlay").add(G(ad, "LoadingGraphic")), o = G(ad, "Title"), t = G(ad, "Current"), s = G(ad, "Next"), R = G(ad, "Previous"), X = G(ad, "Slideshow").bind(V, y), z = G(ad, "Close"));
            ah.append(G(ad).append(G(ad, "TopLeft"), H = G(ad, "TopCenter"), G(ad, "TopRight")), G(ad, false, "clear:left").append(p = G(ad, "MiddleLeft"), d, b = G(ad, "MiddleRight")), G(ad, false, "clear:left").append(G(ad, "BottomLeft"), P = G(ad, "BottomCenter"), G(ad, "BottomRight"))).find("div div").css({
                "float": "left"
            });
            k = G(ad, false, "position:absolute; width:9999px; visibility:hidden; display:none");
            B = s.add(R).add(t).add(X);
            J(l.body).append(Q, ag.append(ah, k));
        }
    }
    function j() {
        if (ag) {
            if (!ab) {
                ab = true;
                ai = H.height() + P.height() + d.outerHeight(true) - d.height();
                m = p.width() + b.width() + d.outerWidth(true) - d.width();
                g = N.outerHeight(true);
                a = N.outerWidth(true);
                ag.css({
                    "padding-bottom": ai,
                    "padding-right": m
                });
                s.click(function() {
                    L.next();
                });
                R.click(function() {
                    L.prev();
                });
                z.click(function() {
                    L.close();
                });
                Q.click(function() {
                    if (ae.overlayClose) {
                        L.close();
                    }
                });
                J(l).bind("keydown." + S, function(ak) {
                    var aj = ak.keyCode;
                    if (D && ae.escKey && aj === 27) {
                        ak.preventDefault();
                        L.close();
                    }
                    if (D && ae.arrowKey && c[1]) {
                        if (aj === 37) {
                            ak.preventDefault();
                            R.click();
                        } else {
                            if (aj === 39) {
                                ak.preventDefault();
                                s.click();
                            }
                        }
                    }
                });
                J("." + r, l).live("click", function(aj) {
                    if (!(aj.which > 1 || aj.shiftKey || aj.altKey || aj.metaKey)) {
                        aj.preventDefault();
                        f(this);
                    }
                });
            }
            return true;
        }
        return false;
    }
    if (J.colorbox) {
        return;
    }
    J(q);
    L = J.fn[x] = J[x] = function(aj, al) {
        var ak = this;
        aj = aj || {};
        q();
        if (j()) {
            if (!ak[0]) {
                if (ak.selector) {
                    return ak;
                }
                ak = J("<a/>");
                aj.open = true;
            }
            if (al) {
                aj.onComplete = al;
            }
            ak.each(function() {
                J.data(this, x, J.extend({}, J.data(this, x) || K, aj));
            }).addClass(r);
            if ((J.isFunction(aj.open) && aj.open.call(ak)) || aj.open) {
                f(ak[0]);
            }
        }
        return ak;
    };
    L.position = function(ak, aj) {
        var an = 0, am = 0, ap = ag.offset(), al = Z.scrollTop(), ao = Z.scrollLeft();
        Z.unbind("resize." + S);
        ag.css({
            top: - 90000,
            left: - 90000
        });
        if (ae.fixed&&!af) {
            ap.top -= al;
            ap.left -= ao;
            ag.css({
                position: "fixed"
            });
        } else {
            an = al;
            am = ao;
            ag.css({
                position: "absolute"
            });
        }
        if (ae.right !== false) {
            am += Math.max(Z.width() - ae.w - a - m - O(ae.right, "x"), 0);
        } else {
            if (ae.left !== false) {
                am += O(ae.left, "x");
            } else {
                am += Math.round(Math.max(Z.width() - ae.w - a - m, 0) / 2);
            }
        }
        if (ae.bottom !== false) {
            an += Math.max(Z.height() - ae.h - g - ai - O(ae.bottom, "y"), 0);
        } else {
            if (ae.top !== false) {
                an += O(ae.top, "y");
            } else {
                an += Math.round(Math.max(Z.height() - ae.h - g - ai, 0) / 2);
            }
        }
        ag.css({
            top: ap.top,
            left: ap.left
        });
        ak = (ag.width() === ae.w + a && ag.height() === ae.h + g) ? 0 : ak || 0;
        ah[0].style.width = ah[0].style.height = "9999px";
        function aq(ar) {
            H[0].style.width = P[0].style.width = d[0].style.width = ar.style.width;
            d[0].style.height = p[0].style.height = b[0].style.height = ar.style.height;
        }
        ag.dequeue().animate({
            width: ae.w + a,
            height: ae.h + g,
            top: an,
            left: am
        }, {
            duration: ak,
            complete: function() {
                aq(this);
                Y = false;
                ah[0].style.width = (ae.w + a + m) + "px";
                ah[0].style.height = (ae.h + g + ai) + "px";
                if (ae.reposition) {
                    setTimeout(function() {
                        Z.bind("resize." + S, L.position);
                    }, 1);
                }
                if (aj) {
                    aj();
                }
            },
            step: function() {
                aq(this);
            }
        });
    };
    L.resize = function(aj) {
        if (D) {
            aj = aj || {};
            if (aj.width) {
                ae.w = O(aj.width, "x") - a - m;
            }
            if (aj.innerWidth) {
                ae.w = O(aj.innerWidth, "x");
            }
            N.css({
                width: ae.w
            });
            if (aj.height) {
                ae.h = O(aj.height, "y") - g - ai;
            }
            if (aj.innerHeight) {
                ae.h = O(aj.innerHeight, "y");
            }
            if (!aj.innerHeight&&!aj.height) {
                N.css({
                    height: "auto"
                });
                ae.h = N.height();
            }
            N.css({
                height: ae.h
            });
            L.position(ae.transition === "none" ? 0 : ae.speed);
        }
    };
    L.prep = function(ak) {
        if (!D) {
            return;
        }
        var an, al = ae.transition === "none" ? 0: ae.speed;
        N.remove();
        N = G(ad, "LoadedContent").append(ak);
        function aj() {
            ae.w = ae.w || N.width();
            ae.w = ae.mw && ae.mw < ae.w ? ae.mw : ae.w;
            return ae.w;
        }
        function am() {
            ae.h = ae.h || N.height();
            ae.h = ae.mh && ae.mh < ae.h ? ae.mh : ae.h;
            return ae.h;
        }
        N.hide().appendTo(k.show()).css({
            width: aj(),
            overflow: ae.scrolling ? "auto": "hidden"
        }).css({
            height: am()
        }).prependTo(d);
        k.hide();
        J(n).css({
            "float": "none"
        });
        if (af) {
            J("select").not(ag.find("select")).filter(function() {
                return this.style.visibility !== "hidden";
            }).css({
                visibility: "hidden"
            }).one(u, function() {
                this.style.visibility = "inherit";
            });
        }
        an = function() {
            var ay, av, aw = c.length, at, ax = "frameBorder", ar = "allowTransparency", ap, ao, au;
            if (!D) {
                return;
            }
            function aq() {
                if (v) {
                    ag[0].style.removeAttribute("filter");
                }
            }
            ap = function() {
                clearTimeout(A);
                h.hide();
                F(U, ae.onComplete);
            };
            if (v) {
                if (n) {
                    N.fadeIn(100);
                }
            }
            o.html(ae.title).add(N).show();
            if (aw > 1) {
                if (typeof ae.current === "string") {
                    t.html(ae.current.replace("{current}", I + 1).replace("{total}", aw)).show();
                }
                s[(ae.loop || I < aw - 1) ? "show": "hide"]().html(ae.next);
                R[(ae.loop || I) ? "show": "hide"]().html(ae.previous);
                if (ae.slideshow) {
                    X.show();
                }
                if (ae.preloading) {
                    ay = [E( - 1), E(1)];
                    while (av = c[ay.pop()]) {
                        ao = J.data(av, x).href || av.href;
                        if (J.isFunction(ao)) {
                            ao = ao.call(av);
                        }
                        if (C(ao)) {
                            au = new Image();
                            au.src = ao;
                        }
                    }
                }
            } else {
                B.hide();
            }
            if (ae.iframe) {
                at = G("iframe")[0];
                if (ax in at) {
                    at[ax] = 0;
                }
                if (ar in at) {
                    at[ar] = "true";
                }
                at.name = S + ( + new Date());
                if (ae.fastIframe) {
                    ap();
                } else {
                    J(at).one("load", ap);
                }
                at.src = ae.href;
                if (!ae.scrolling) {
                    at.scrolling = "no";
                }
                J(at).addClass(S + "Iframe").appendTo(N).one(i, function() {
                    at.src = "//about:blank";
                });
            } else {
                ap();
            }
            if (ae.transition === "fade") {
                ag.fadeTo(al, 1, aq);
            } else {
                aq();
            }
        };
        if (ae.transition === "fade") {
            ag.fadeTo(al, 0, function() {
                L.position(0, an);
            });
        } else {
            L.position(al, an);
        }
    };
    L.load = function(al) {
        var ak, am, aj = L.prep;
        Y = true;
        n = false;
        w = c[I];
        if (!al) {
            T();
        }
        F(i);
        F(e, ae.onLoad);
        ae.h = ae.height ? O(ae.height, "y") - g - ai : ae.innerHeight && O(ae.innerHeight, "y");
        ae.w = ae.width ? O(ae.width, "x") - a - m : ae.innerWidth && O(ae.innerWidth, "x");
        ae.mw = ae.w;
        ae.mh = ae.h;
        if (ae.maxWidth) {
            ae.mw = O(ae.maxWidth, "x") - a - m;
            ae.mw = ae.w && ae.w < ae.mw ? ae.w : ae.mw;
        }
        if (ae.maxHeight) {
            ae.mh = O(ae.maxHeight, "y") - g - ai;
            ae.mh = ae.h && ae.h < ae.mh ? ae.h : ae.mh;
        }
        ak = ae.href;
        A = setTimeout(function() {
            h.show();
        }, 100);
        if (ae.inline) {
            G(ad).hide().insertBefore(J(ak)[0]).one(i, function() {
                J(this).replaceWith(N.children());
            });
            aj(J(ak));
        } else {
            if (ae.iframe) {
                aj(" ");
            } else {
                if (ae.html) {
                    aj(ae.html);
                } else {
                    if (C(ak)) {
                        J(n = new Image()).addClass(S + "Photo").error(function() {
                            ae.title = false;
                            aj(G(ad, "Error").text("This image could not be loaded"));
                        }).load(function() {
                            var an;
                            n.onload = null;
                            if (ae.scalePhotos) {
                                am = function() {
                                    n.height -= n.height * an;
                                    n.width -= n.width * an;
                                };
                                if (ae.mw && n.width > ae.mw) {
                                    an = (n.width - ae.mw) / n.width;
                                    am();
                                }
                                if (ae.mh && n.height > ae.mh) {
                                    an = (n.height - ae.mh) / n.height;
                                    am();
                                }
                            }
                            if (ae.h) {
                                n.style.marginTop = Math.max(ae.h - n.height, 0) / 2 + "px";
                            }
                            if (c[1] && (ae.loop || c[I + 1])) {
                                n.style.cursor = "pointer";
                                n.onclick = function() {
                                    L.next();
                                };
                            }
                            if (v) {
                                n.style.msInterpolationMode = "bicubic";
                            }
                            setTimeout(function() {
                                aj(n);
                            }, 1);
                        });
                        setTimeout(function() {
                            n.src = ak;
                        }, 1);
                    } else {
                        if (ak) {
                            k.load(ak, ae.data, function(ao, an, ap) {
                                aj(an === "error" ? G(ad, "Error").text("Request unsuccessful: " + ap.statusText) : J(this).contents());
                            });
                        }
                    }
                }
            }
        }
    };
    L.next = function() {
        if (!Y && c[1] && (ae.loop || c[I + 1])) {
            I = E(1);
            L.load();
        }
    };
    L.prev = function() {
        if (!Y && c[1] && (ae.loop || I)) {
            I = E( - 1);
            L.load();
        }
    };
    L.close = function() {
        if (D&&!M) {
            M = true;
            D = false;
            F(u, ae.onCleanup);
            Z.unbind("." + S + " ." + aa);
            Q.fadeTo(200, 0);
            ag.stop().fadeTo(300, 0, function() {
                ag.add(Q).css({
                    opacity: 1,
                    cursor: "auto"
                }).hide();
                F(i);
                N.remove();
                setTimeout(function() {
                    M = false;
                    F(ac, ae.onClosed);
                }, 1);
            });
        }
    };
    L.remove = function() {
        J([]).add(ag).add(Q).remove();
        ag = null;
        J("." + r).removeData(x).removeClass(r).die();
    };
    L.element = function() {
        return J(w);
    };
    L.settings = K;
}(jQuery, document, this));
/*!
 * jQuery JSONP Core Plugin 2.3.0 (2012-03-27)
 *
 * http://code.google.com/p/jquery-jsonp/
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
(function(g) {
    function e() {}
    function v(F) {
        d = [F];
    }
    function o(J, G, H, I) {
        try {
            I = J && J.apply(G.context || G, H);
        } catch (F) {
            I=!1;
        }
        return I;
    }
    function n(F) {
        return /\?/.test(F) ? "&" : "?";
    }
    var p = "async", t = "charset", r = "", D = "error", u = "insertBefore", s = "_jqjsp", A = "on", h = A + "click", k = A + D, q = A + "load", y = A + "readystatechange", b = "readyState", C = "removeChild", j = "<script>", z = "success", B = "timeout", f = window, a = g.Deferred, i = g("head")[0] || document.documentElement, c = i.firstChild, x = {}, m = 0, d, l = {
        callback: s,
        url: location.href
    }, w = f.opera;
    function E(J) {
        J = g.extend({}, l, J);
        var H = J.success, O = J.error, G = J.complete, X = J.dataFilter, Z = J.callbackParameter, P = J.callback, Y = J.cache, F = J.pageCache, I = J.charset, K = J.url, ab = J.data, R = J.timeout, N, V = 0, T = e, Q, M, aa, L, U;
        a && a(function(ac) {
            ac.done(H).fail(O);
            H = ac.resolve;
            O = ac.reject;
        }).promise(J);
        J.abort = function() {
            !(V++) && T();
        };
        if (o(J.beforeSend, J, [J])===!1 || V) {
            return J;
        }
        K = K || r;
        ab = ab ? ((typeof ab) == "string" ? ab : g.param(ab, J.traditional)) : r;
        K += ab ? (n(K) + ab) : r;
        Z && (K += n(K) + encodeURIComponent(Z) + "=?");
        !Y&&!F && (K += n(K) + "_" + (new Date()).getTime() + "=");
        K = K.replace(/=\?(&|$)/, "=" + P + "$1");
        function W(ac) {
            if (!(V++)) {
                T();
                F && (x[K] = {
                    s: [ac]
                });
                X && (ac = X.apply(J, [ac]));
                o(H, J, [ac, z]);
                o(G, J, [J, z]);
            }
        }
        function S(ac) {
            if (!(V++)) {
                T();
                F && ac != B && (x[K] = ac);
                o(O, J, [J, ac]);
                o(G, J, [J, ac]);
            }
        }
        if (F && (N = x[K])) {
            N.s ? W(N.s[0]) : S(N);
        } else {
            f[P] = v;
            aa = g(j)[0];
            aa.id = s + m++;
            if (I) {
                aa[t] = I;
            }
            w && w.version() < 11.6 ? ((L = g(j)[0]).text = "document.getElementById('" + aa.id + "')." + k + "()") : (aa[p] = p);
            if (y in aa) {
                aa.htmlFor = aa.id;
                aa.event = h;
            }
            aa[q] = aa[k] = aa[y] = function(ac) {
                if (!aa[b] ||!/i/.test(aa[b])) {
                    try {
                        aa[h] && aa[h]();
                    } catch (ad) {}
                    ac = d;
                    d = 0;
                    ac ? W(ac[0]) : S(D);
                }
            };
            aa.src = K;
            T = function(ac) {
                U && clearTimeout(U);
                aa[y] = aa[q] = aa[k] = null;
                i[C](aa);
                L && i[C](L);
            };
            i[u](aa, c);
            L && i[u](L, c);
            U = R > 0 && setTimeout(function() {
                S(B);
            }, R);
        }
        return J;
    }
    E.setup = function(F) {
        g.extend(l, F);
    };
    g.jsonp = E;
})(jQuery);
(function(b, d, c, e) {
    d.imdb = d.imdb || {};
    function a(f) {
        if (f === null) {
            throw new Error();
        }
        this.$el = f;
    }
    d.imdb.ShovelerContainerView = a;
    b.extend(a.prototype, {
        _firstChild: function() {
            return this.$el.children().first();
        },
        childrenWidth: function() {
            return this._firstChild().width();
        },
        childrenHeight: function() {
            return this._firstChild().height();
        },
        childrenCount: function() {
            return this.$el.children().length;
        }
    });
})(jQuery, window, document);
(function(b, d, c, e) {
    d.imdb = d.imdb || {};
    d.imdb.Shoveler = function(k, o) {
        var w = {
            buttons: {
                background: "rgb(177, 177, 177)",
                "font-size": 14,
                color: "#fff",
                cursor: "pointer",
                height: 20,
                opacity: 0.5,
                padding: "40px 0",
                position: "absolute",
                "text-align": "center",
                top: 50,
                width: 30,
                left: {
                    "border-radius": "0 5px 5px 0",
                    leftPos: - 12,
                    text: "&lt;",
                    url: null
                },
                right: {
                    "border-radius": "5px 0 0 5px",
                    rightPos: - 12,
                    text: "&gt;",
                    url: null
                }
            },
            curPage: 1,
            fetchCallback: null,
            fetchPageNum: null,
            itemsPerShovel: null,
            moveCallback: null,
            paginate: true,
            paginator: {
                "background-color": "#ccc",
                "background-color:selected": "#666",
                "border-radius": 4,
                cursor: "pointer",
                display: "inline-block",
                height: 8,
                margin: 4,
                position: "relative",
                width: 8
            },
            redrawCallback: null,
            scrollSpeed: 250,
            touch: false,
            useExternalCSS: false,
            hammerOptions: {
                stop_browser_behavior: {
                    touchAction: "auto"
                }
            },
            autoScroll: false,
            autoScrollInterval: 8,
            resumeAutoScroll: false
        }, v = k, n = b(v), y = n.data("plugin-options"), p = this, g = {}, m = null, r = false;
        var s = function() {
            g = b.extend(true, {}, w, o, y);
            if (g.buttons || g.paginate) {
                n.wrap('<div class="shovelerControls" style="padding:0;position:relative;text-align:center;" />');
            }
            n.addClass("shovelerContainer");
            m = new d.imdb.ShovelerContainerView(n);
            i();
            h();
            l("left");
            l("right");
            A();
            if (g.autoScroll) {
                u();
            }
        };
        var u = function() {
            C();
            p._autoScrollTimer = setInterval(function() {
                D();
            }, g.autoScrollInterval * 1000);
        };
        var C = function() {
            if (p._autoScrollTimer) {
                clearInterval(p._autoScrollTimer);
            }
        };
        var D = function() {
            if (g.inMotion || r) {
                return;
            }
            if (g.curPage === g.totalPages) {
                p.moveToPage(1);
            } else {
                p.moveLeft();
            }
        };
        var B = function() {
            if (g.inMotion) {
                return;
            }
            var E = b(this).data("page");
            _moveToPage.call(self, E);
        };
        var i = function() {
            g.kidCount = m.childrenCount();
            g.kidH = m.childrenHeight();
            g.kidW = m.childrenWidth();
        };
        var l = function(F) {
            if (!g.buttons) {
                return;
            }
            var H = F.charAt(0).toUpperCase() + F.slice(1), E = "$shove" + H, G = {
                background: g.buttons.background,
                "border-radius": g.buttons[F]["border-radius"],
                color: g.buttons.color,
                cursor: g.buttons.cursor,
                height: g.buttons.height,
                "font-size": g.buttons["font-size"],
                opacity: g.buttons.opacity,
                padding: g.buttons.padding,
                position: g.buttons.position,
                "text-align": g.buttons["text-align"],
                top: g.buttons.top,
                width: g.buttons.width
            };
            G[F] = g.buttons[F][F + "Pos"];
            g[E] = b('<div class="shove' + H + '">' + (g.buttons[F].url || g.buttons[F].text) + "</div>");
            if (!g.useExternalCSS) {
                g[E].css(G);
            }
            if (H === "Left") {
                g[E].addClass("disabled");
            }
            g[E].hover(function() {
                var I = b(this);
                if (I.hasClass("disabled")) {
                    return false;
                }
                I.addClass("hover");
                if (!g.useExternalCSS) {
                    I.css({
                        opacity: 1
                    });
                }
            }, function() {
                var I = b(this);
                I.removeClass("hover");
                I.removeClass("mousedown");
                if (!g.useExternalCSS) {
                    I.css({
                        opacity: g.buttons.opacity
                    });
                }
            }).click(function() {
                if (g.inMotion) {
                    return;
                }
                if (H === "Left") {
                    p.moveRight();
                } else {
                    p.moveLeft();
                }
            }).mousedown(function() {
                var I = b(this);
                if (I.hasClass("disabled")) {
                    return false;
                }
                I.addClass("mousedown");
            }).mouseup(function() {
                b(this).removeClass("mousedown");
            });
            n.parent().append(g[E]);
        };
        var h = function() {
            var E;
            if (g.itemsPerShovel && g.curPage) {
                E = ((g.curPage - 1) * g.itemsPerShovel) + 1;
            }
            n.css({
                height: g.height || g.kidH,
                "line-height": g.lineHeight || "inherit",
                overflow: "hidden",
                position: "relative",
                "white-space": "nowrap",
                width: g.width || n.parent().width(),
                "word-wrap": "normal"
            });
            g.shovW = n.width();
            g.itemsPerShovel = g.itemsPerShovel || Math.floor(g.shovW / g.kidW);
            g.totalPages = Math.ceil(g.kidCount / g.itemsPerShovel);
            var K = g.shovW - (g.kidW * g.itemsPerShovel), H = 1, J = 1, L, G;
            if (K >= g.itemsPerShovel || g.itemsPerShovel <= 1) {
                L = Math.floor(K / g.itemsPerShovel);
                G = K%g.itemsPerShovel;
            }
            n.contents().each(function() {
                var N = b(this);
                if (this.nodeType === 3) {
                    N.remove();
                    return true;
                }
                N.css({
                    display: "inline-block",
                    "vertical-align": "top"
                });
                if (g.itemsPerShovel === 1) {
                    if (K%2 === 0) {
                        N.css({
                            margin: "0 " + (K / 2) + "px"
                        });
                    } else {
                        N.css({
                            margin: "0 " + (Math.floor(K / 2) + (K%2)) + "px 0 " + Math.floor(K / 2) + "px"
                        });
                    }
                } else {
                    if (H === (g.itemsPerShovel * J)) {
                        L += G;
                    }
                    if (L%2 === 0) {
                        N.css({
                            margin: "0 " + (L / 2) + "px"
                        });
                    } else {
                        N.css({
                            margin: "0 " + (Math.floor(L / 2) + (L%2)) + "px 0 " + Math.floor(L / 2) + "px"
                        });
                    }
                }
                N.addClass("shovelerItem");
                if (H%g.itemsPerShovel === 0) {
                    J++;
                }
                H++;
            });
            n.children(".shovelerSpaceHolder").remove();
            var M = (g.itemsPerShovel * g.totalPages) - g.kidCount;
            if (!!M) {
                for (var I = 0; I < M; I++) {
                    var F = b('<span class="shovelerSpaceHolder" />').css({
                        display: "inline-block",
                        height: g.height || g.kidH,
                        margin: "0 " + L + "px",
                        width: g.kidW
                    });
                    n.append(F);
                }
            }
            j();
            f(E);
            b(d).bind("orientationchange", function() {
                a(function() {
                    if (typeof g.redrawCallback === "function") {
                        g.redrawCallback.apply(self);
                    }
                    if (n.parent().width() !== g.shovW) {
                        i();
                        h();
                    }
                }, 500, "orientationchanged");
            });
        };
        var x = function() {
            if (typeof g.fetchCallback !== "function" || (typeof g.fetchPageNum === "number" && g.curPage !== g.fetchPageNum) || (typeof g.fetchPageNum === "function" && g.curPage !== g.fetchPageNum()) || (!g.fetchPageNum && g.curPage !== g.totalPages)) {
                return;
            }
            g.fetchCallback.apply(this);
            z();
        };
        var z = function() {
            i();
            h();
        };
        var j = function() {
            if (g.paginate) {
                n.parent().children(".shovelerPaginator").remove();
                var G = b("<div />").addClass("shovelerPaginator");
                for (var F = 0; F < g.totalPages; F++) {
                    var E = b('<span data-page="' + (F + 1) + '" />').addClass("shovelerBullet");
                    if (!g.useExternalCSS) {
                        E.css(g.paginator);
                    }
                    G.append(E);
                    E.on("click", B);
                }
                n.parent().append(G);
            }
        };
        var f = function(G) {
            var E = Math.ceil(G / g.itemsPerShovel);
            if (g.paginate) {
                var F = n.parent().children(".shovelerPaginator");
                F.children(".shovelerBullet").css("background-color", g.paginator["background-color"]).removeClass("currentPage");
                if (G) {
                    p.moveToPage(E);
                } else {
                    F.children('.shovelerBullet[data-page="' + g.curPage + '"]').css("background-color", g.paginator["background-color:selected"]).addClass("currentPage");
                }
            } else {
                if (G) {
                    p.moveToPage(E);
                }
            }
        };
        var q = function() {
            if (n.css("left") !== 0) {
                n.stop().animate({
                    left: 0
                }, g.scrollSpeed);
            }
        };
        var A = function() {
            if (!g.touch) {
                return;
            }
            if (typeof d.Hammer !== "function") {
                b.error("jQuery.shoveler.js touch capabilities require Hammer.js");
            }
            n.hammer(g.hammerOptions).on("release dragleft dragright swipeleft swiperight", function(E) {
                t.call(self, E);
            });
        };
        var t = function(E) {
            E.gesture.preventDefault();
            var F = g.shovW * (g.curPage - 1);
            C();
            switch (E.type) {
            case"dragright":
                r = true;
                if (g.curPage === 1) {
                    n.stop().animate({
                        left: Math.abs(E.gesture.deltaX)
                    }, 0);
                } else {
                    n.stop().animate({
                        scrollLeft: F - Math.abs(E.gesture.deltaX)
                    }, 0);
                }
                break;
            case"dragleft":
                r = true;
                if (g.curPage === g.totalPages) {
                    n.stop().animate({
                        left: - Math.abs(E.gesture.deltaX)
                    }, 0);
                } else {
                    n.stop().animate({
                        scrollLeft: F + Math.abs(E.gesture.deltaX)
                    }, 0);
                }
                break;
            case"swipeleft":
                q();
                p.moveLeft();
                n.trigger("moveleft");
                E.gesture.stopDetect();
                break;
            case"swiperight":
                q();
                p.moveRight();
                n.trigger("moveright");
                E.gesture.stopDetect();
                break;
            case"release":
                r = false;
                q();
                if (Math.abs(E.gesture.deltaX) >= 30) {
                    if (E.gesture.direction === "right") {
                        n.trigger("moveright");
                        p.moveRight();
                    } else {
                        n.trigger("moveleft");
                        p.moveLeft();
                    }
                } else {
                    p.moveToPage(g.curPage);
                }
                break;
            }
            if (g.autoScroll && g.resumeAutoScroll) {
                u();
            }
        };
        this.moveLeft = function() {
            if (g.curPage === g.totalPages) {
                return;
            }
            p.moveToPage(g.curPage + 1);
        };
        this.moveRight = function() {
            if (g.curPage === 1) {
                return;
            }
            p.moveToPage(g.curPage - 1);
        };
        this.moveToPage = function(F) {
            g.inMotion = true;
            var G = g.shovW * (F - 1);
            n.stop().animate({
                scrollLeft: G
            }, g.scrollSpeed);
            g.curPage = F;
            if (g.itemsPerShovel === 1) {
                n.children().removeClass("curItem");
                n.find(":nth-child(" + F + ")").addClass("curItem");
            }
            f();
            x();
            if (typeof g.moveCallback === "function") {
                g.moveCallback.apply(this);
            }
            g.inMotion = false;
            var E = n.closest(".shovelerControls").find(".shoveRight");
            var H = n.closest(".shovelerControls").find(".shoveLeft");
            if (g.curPage === 1) {
                E.removeClass("disabled");
                H.addClass("disabled").removeClass("hover mousedown");
            } else {
                if (g.curPage === g.totalPages) {
                    E.addClass("disabled").removeClass("hover mousedown");
                    H.removeClass("disabled");
                } else {
                    E.removeClass("disabled");
                    H.removeClass("disabled");
                }
            }
        };
        s();
    };
    b.fn.shoveler = function(f) {
        return this.each(function() {
            var g = new d.imdb.Shoveler(this, f);
            b(this).data("shoveler", g);
        });
    };
    var a = (function() {
        var f = {};
        return function(i, g, h) {
            if (!h) {
                h = new Date().getTime();
            }
            if (f[h]) {
                clearTimeout(f[h]);
            }
            f[h] = setTimeout(i, g);
        };
    })();
})(jQuery, window, document);
(function(b) {
    var a = "waitForImages";
    b.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    };
    b.expr[":"].uncached = function(d) {
        if (!b(d).is('img[src!=""]')) {
            return false;
        }
        var c = document.createElement("img");
        c.src = d.src;
        return !c.complete;
    };
    b.fn.waitForImages = function(f, d, e) {
        var g = 0;
        var c = 0;
        if (b.isPlainObject(arguments[0])) {
            f = f.finished;
            d = f.each;
            e = f.waitForAll;
        }
        f = f || b.noop;
        d = d || b.noop;
        e=!!e;
        if (!b.isFunction(f) ||!b.isFunction(d)) {
            throw new TypeError("An invalid callback was supplied.");
        }
        return this.each(function() {
            var j = b(this);
            var k = [];
            var h = b.waitForImages.hasImageProperties || [];
            var i = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (e) {
                j.find("*").andSelf().each(function() {
                    var l = b(this);
                    if (l.is("img:uncached")) {
                        k.push({
                            src: l.attr("src"),
                            element: l[0]
                        });
                    }
                    b.each(h, function(o, p) {
                        var m = l.css(p);
                        var n;
                        if (!m) {
                            return true;
                        }
                        while (n = i.exec(m)) {
                            k.push({
                                src: n[2],
                                element: l[0]
                            });
                        }
                    });
                });
            } else {
                j.find("img:uncached").each(function() {
                    k.push({
                        src: this.src,
                        element: this
                    });
                });
            }
            g = k.length;
            c = 0;
            if (g == 0) {
                f.call(j[0]);
            }
            b.each(k, function(m, l) {
                var n = new Image;
                b(n).bind("load." + a + " error." + a, function(o) {
                    c++;
                    d.call(l.element, c, g, o.type == "load");
                    if (c == g) {
                        f.call(j[0]);
                        return false;
                    }
                });
                n.src = l.src;
            });
        });
    };
})(jQuery);
(function(c) {
    var a = "D" + ( + new Date()), b = 300;
    c.event.special.scrollstart = {
        setup: function() {
            var e, d = function(h) {
                var f = this, g = arguments;
                if (e) {
                    clearTimeout(e);
                } else {
                    h.type = "scrollstart";
                    jQuery.event.handle.apply(f, g);
                }
                e = setTimeout(function() {
                    e = null;
                }, b);
            };
            c(this).on("scroll", d).data(a, d);
        },
        teardown: function() {
            c(this).off("scroll", c(this).data(a));
        }
    };
})(jQuery);
(function(c) {
    var a = "D" + ( + new Date() + 1), b = 300;
    c.event.special.scrollstop = {
        setup: function() {
            var e, d = function(h) {
                var f = this, g = arguments;
                if (e) {
                    clearTimeout(e);
                }
                e = setTimeout(function() {
                    e = null;
                    h.type = "scrollstop";
                    c.event.handle.apply(f, g);
                }, b);
            };
            c(this).bind("scroll", d).data(a, d);
        },
        teardown: function() {
            c(this).unbind("scroll", c(this).data(a));
        }
    };
})(jQuery);
(function(a) {
    a.Object.keys = a.Object.keys || function(d) {
        var c = [], b;
        for (b in d) {
            if (d.hasOwnProperty(b)) {
                c.push(b);
            }
        }
        return c;
    };
})(window);
(function(a, b) {
    if (!("CS" in window)) {
        window.CS = {};
    }
    CS.rgImage = function(c, e) {
        var d = new Image();
        var c = c;
        var e = e;
        d.src = "/rg/" + c + "/" + e + "/images/b.gif";
    };
    CS.addClickstreamHeadersToAjax = function(d) {
        var c = a("meta[name=request_id]");
        var e = (c && c.attr("content")) ? c.attr("content"): "";
        d.setRequestHeader("x-imdb-parent-id", e);
    };
    CS.hasAccount = function() {
        var c = document.cookie.split(/\;\s*/), d;
        for (d in c) {
            if (c.hasOwnProperty(d)) {
                if (c[d].search(/^id=/) >= 0) {
                    return true;
                }
            }
        }
        return false;
    };
    CS.activate_login_lightbox = function() {
        a(window).trigger("initiate_login");
    };
})(jQuery, window);
(function() {
    $("p.truncated-note a").click(function() {
        var b = this.parentNode;
        var a = b.parentNode.getElementsByClassName("full-note")[0];
        b.style.display = "none";
        a.style.display = "block";
    });
})(jQuery);
jQuery("#rvi-div").appear(function() {
    window.csm.measure("csm_rvi_started");
    var a = jQuery("#rvi-div");
    jQuery.ajax({
        url: "/widget/clickstream/_rvi",
        type: "POST",
        beforeSend: CS.addClickstreamHeadersToAjax,
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        error: function() {
            consoleLog("RVI load failed", "rvi");
            a.html("");
        },
        success: function(b, c) {
            if (c != "success") {
                return this.error();
            }
            a.html(b);
            window.csm.measure("csm_rvi_finished");
        }
    });
});
(function($) {
    try {
        if (!("imdb" in window)) {
            window.imdb = {};
        }
        var $login_button = $("#nblogin,a[rel=login],button[rel=login],input[rel=login]");
        var $nblogin_button = $("#nblogin");
        var isIosDevice = navigator.userAgent.match(/iP(hone|od|ad)/);
        $(window).bind("initiate_login", function() {
            if (isIosDevice) {
                document.location = $nblogin_button.attr("href");
            } else {
                $nblogin_button.colorbox({
                    open: true
                });
            }
        });
        window.imdb.login_lightbox = function(sh, ou) {
            if (isIosDevice) {
                return;
            }
            if (ou && sh) {
                $login_button.colorbox({
                    iframe: true,
                    fastIframe: false,
                    innerWidth: 570,
                    innerHeight: 600,
                    rel: "nofollow",
                    scrolling: false,
                    close: "X",
                    href: "" + sh + "/oauth/login?origurl=" + ou,
                    onLoad: function() {
                        jQuery("#cboxClose").addClass("linkasbutton-secondary");
                        jQuery("#colorbox").addClass("login-colorbox");
                    },
                    onClosed: function() {
                        jQuery("#cboxClose").removeClass("linkasbutton-secondary");
                    }
                });
            }
        };
        if ($("script#login").size() == 0) {
            jQuery(document).ready(function() {
                eval($("script#login").html());
            });
        } else {
            eval($("script#login").html());
        }
    } catch (e) {}
})(jQuery);
if (document.getElementById("quicksearch")) {
    var host_prefix = "";
    if (typeof $("#nb_search").attr("data-hostname") != "undefined") {
        host_prefix = "http://" + $("#nb_search").attr("data-hostname");
    }
    var advancedSearchOption = document.createElement("option");
    advancedSearchOption.className = "advancedSearch";
    advancedSearchOption.setAttribute("value", host_prefix + "/search/");
    advancedSearchOption.innerHTML = "Advanced Search &raquo;";
    document.getElementById("quicksearch").appendChild(advancedSearchOption);
}
function jumpMenu(b) {
    var a = b.selectedIndex;
    var c = b[a];
    if ("advancedSearch" == b[a].className) {
        b.selectedIndex = 0;
        document.location = c.value;
    }
}
var showSuccessfulLoginBanner = function(a) {
    if (window.location.href.indexOf("#loginSuccess")>-1) {
        $('<div class="message_box successfulLogin"><div class="success"><h2>Signed in</h2><p>You are signed in as ' + a + "</p></div></div>").prependTo("#pagecontent");
        setTimeout(function() {
            $("div.message_box.successfulLogin").remove();
        }, 3000);
    }
};
if (jQuery) {
    $(document).ready(function() {
        $("#navbar-query").click(function() {
            var j = new Image();
            j.src = "/rg/search-box/click/images/b.gif?cb=" + Math.random();
            return 1;
        });
        $("#navbar-submit-button").click(function() {
            var j = new Image();
            j.src = "/rg/search-button/click/images/b.gif?cb=" + Math.random();
            return 1;
        });
        $("#consumer_main_nav, #consumer_user_nav, #nb_extra_nav").children().removeClass("css_nav_item").addClass("js_nav_item");
        if ($("#megaMenu").length) {
            window.navMouseEnterTimers = {};
            window.navMouseOutTimers = {};
            $(".js_nav_item, .sub_nav").hover(function() {
                var i = this;
                if ((window.navMouseOutItem && (window.navMouseOutItem.id == i.id)) || window.navMouseOutTimers[i.id]) {
                    clearTimeout(window.navMouseOutTimers[i.id]);
                    window.navMouseOutTimers[i.id] = undefined;
                }
                window.navMouseEnterTimers[i.id] = setTimeout(function() {
                    window.navMouseOutItem = undefined;
                    clearTimeout(window.navMouseOutTimers[i.id]);
                    window.navMouseOutTimers[i.id] = undefined;
                    $(i).children(".sub_nav").css("display", "block");
                }, 350);
            }, function() {
                var i = window.navMouseOutItem = this;
                clearTimeout(window.navMouseEnterTimers[i.id]);
                window.navMouseEnterTimers[i.id] = undefined;
                window.navMouseOutTimers[i.id] = setTimeout(function() {
                    $(i).children(".sub_nav").css("display", "none");
                }, 350);
            });
        } else {
            $(".js_nav_item").hover(function() {
                window.menuItem = this;
                window.displayMenu = setTimeout(function() {
                    $(menuItem).children(".sub_nav").css("display", "block");
                }, 100);
            }, function() {
                try {
                    clearTimeout(displayMenu);
                } catch (i) {}
                $(this).children(".sub_nav").css("display", "none");
            });
        }
        if (!("isTouchDevice" in window)) {
            window.isTouchDevice = function() {
                return (("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.mxMaxTouchPoints > 0));
            };
        }
        if (isTouchDevice()) {
            $(".js_nav_item > a").click(function(i) {
                if ($(this).data("hovered") === "true") {
                    $(this).data("hovered", null);
                    return true;
                } else {
                    $(this).parent().trigger("mouseenter").siblings().trigger("mouseout");
                    $(".js_nav_item > a").each(function() {
                        $(this).data("hovered", null);
                    });
                    $(this).data("hovered", "true");
                    i.preventDefault();
                }
            });
        }
        var d = false, c = {
            impressionEvents: {
                title: {
                    trackers: null
                },
                name: {
                    trackers: null
                }
            },
            clickEvents: {
                title: {
                    trackers: null
                },
                name: {
                    trackers: null
                }
            },
            secondaryClickEvents: {
                title: {
                    trackers: null
                },
                name: {
                    trackers: null
                }
            },
            impressionHandler: function(k) {
                if (!k.fired && k.trackers) {
                    for (var j = 0; j < k.trackers.length; j++) {
                        (new Image()).src = k.trackers[j].url;
                    }
                }
                k.fired = true;
            },
            readTrackersFromData: function(k, j, i, l) {
                if (k[j].clickTrackers) {
                    i.clickEvents[l].trackers = k[j].clickTrackers;
                }
                if (k[j].impressionTrackers) {
                    i.impressionEvents[l].trackers = k[j].impressionTrackers;
                }
                if (k[j].secondaryClickTrackers) {
                    i.secondaryClickEvents[l].trackers = k[j].secondaryClickTrackers;
                }
            }
        };
        if (window.imdb.navbarAdSlots && window.location.protocol !== "https:") {
            c.readTrackersFromData(window.imdb.navbarAdSlots, "titleAd", c, "title");
            c.readTrackersFromData(window.imdb.navbarAdSlots, "nameAd", c, "name");
        }
        var b = function() {
            if (d) {
                return;
            }
            if (window.imdb.navbarAdSlots) {
                var o = window.imdb.navbarAdSlots;
                for (var p in o) {
                    var v = $("#" + p);
                    if ("rank" in o[p]) {
                        if (window.location.protocol === "https:") {
                            o[p].imageUrl = o[p].imageUrl.replace("http://ia.media-imdb.com", "https://images-na.ssl-images-amazon.com");
                        }
                        if (p === "titleAd") {
                            $("#titleAd").css("background", "url(" + o[p].imageUrl + ")");
                            var r = '<a title="' + o[p].headline + ", #" + o[p].rank + ' on IMDb Top 250" href="' + o[p].clickThru + '?ref_=nv_mv_dflt_1" class="fallback"></a><div class="overlay"><p><a href="' + o[p].clickThru + '?ref_=nv_mv_dflt_2" id="titleAdClick"><strong>' + o[p].headline + "</strong> (" + o[p].titleYears + ')</a><br /><a href="/chart/top?ref_=nv_mv_dflt_3" id="titleAdSecondaryClick">#<strong>' + o[p].rank + "</strong> on IMDb Top 250</a> &raquo;</p></div>";
                        } else {
                            $("#nameAd").css("background", "url(" + o[p].imageUrl + ")");
                            var r = '<a title="' + o[p].headline + ", #" + o[p].rank + ' on STARmeter" href="' + o[p].clickThru + '?ref_=nv_cel_dflt_1" class="fallback"></a><div class="overlay"><p><a href="' + o[p].clickThru + '?ref_=nv_cel_dflt_2" id="nameAdClick"><strong>' + o[p].headline + "</strong></a> &raquo;<br />#<strong>" + o[p].rank + "</strong> on STARmeter</p></div>";
                        }
                        l = $(r);
                        v.append(l);
                    } else {
                        if ("coords" in o[p]) {
                            var r = '<img class="sideCar" src="' + o[p].sideCarImageUrl + '" /><img alt="Advertisement" class="mainImage" src="' + o[p].imageUrl + '" useMap="#' + p + 'Map" /><map name="' + p + 'Map"><area target="_blank" shape="' + (o[p].shape || "poly") + '" coords="' + o[p].coords + '" href="' + o[p].clickThru + '" id="' + p + 'Click"></map>', l = $(r);
                            v.append(l);
                        } else {
                            v.css("background", "url(" + o[p].imageUrl + ") #ddd");
                            var r = '<a href="' + o[p].clickThru + '?ref_=nv_cel_fallback_1" class="fallback"></a>';
                            l = $(r);
                            v.append(l);
                        }
                    }
                    if (p === "titleAd") {
                        $("#titleAd > a").one("click", function() {
                            c.impressionHandler(c.clickEvents.title);
                        });
                        $("#titleAdClick").one("click", function() {
                            c.impressionHandler(c.clickEvents.title);
                        });
                        $("#titleAdSecondaryClick").one("click", function() {
                            c.impressionHandler(c.secondaryClickEvents.title);
                        });
                    } else {
                        $("#nameAd > a").one("click", function() {
                            c.impressionHandler(c.clickEvents.name);
                        });
                        $("#nameAdClick").one("click", function() {
                            c.impressionHandler(c.clickEvents.name);
                        });
                    }
                }
            }
            if (window.imdb.watchlistTeaserData) {
                var q = $("#navWatchlist"), o = window.imdb.watchlistTeaserData;
                for (var p = 0; p < 3; p++) {
                    var u = $("<li />"), n = $('<a id="' + (o[p].id || "") + '" href="' + o[p].href + "?ref_=nv_wl_img_" + (p + 1) + '"/>'), w = window.location.protocol === "https:" ? o[p].src.replace("http://ia.media-imdb.com", "https://images-na.ssl-images-amazon.com"): o[p].src, k = (o[p].title ? o[p].title + " (" + o[p].year + ") on your Watchlist" : "Add items to your Watchlist"), s = (o[p].title ? "watchListItem" : ""), j = $('<img alt="' + k + '" class="' + s + '" src="' + w + '" height="209" width="140" title="' + k + '" />');
                    n.append(j);
                    if (w.match("/nopicture/")) {
                        var t = $('<span class="noPosterText">' + k + "</span>");
                        n.append(t);
                    }
                    u.append(n);
                    q.append(u);
                }
                $("#wlLogin").click(function(i) {
                    i.preventDefault();
                    $(window).trigger("initiate_login");
                });
            }
            if (window.imdb.proMenuTeaser) {
                var m = $("#proAd"), o = window.imdb.proMenuTeaser, j = $('<img alt="Go to IMDbPro" src="' + o.imageUrl + '" />');
                m.append(j);
            }
            d = true;
        };
        if ($("#megaMenu").length) {
            $("#consumer_main_nav, #nb_extra_nav").on("mouseenter", b);
            $("#navTitleMenu").one("mouseenter", function() {
                c.impressionHandler(c.impressionEvents.title);
            });
            $("#navNameMenu").one("mouseenter", function() {
                c.impressionHandler(c.impressionEvents.name);
            });
            $(window).load(b);
            $("#nblogout").click(function(j) {
                j.preventDefault();
                if ($("#logoutFrame").length) {
                    return;
                }
                $("#navUserMenu .sub_nav").css("display", "none");
                var i = this.href;
                $('<div class="message_box"><div class="success"><h2>Logging Out...</h2><p>Page will refresh when complete.</p></div></div>').prependTo("#pagecontent");
                $('<iframe id="logoutFrame" src="' + i + '" height="0" width="0" />').appendTo("body").load(function() {
                    location.reload();
                });
            });
            if ($("#supertab > iframe").length) {
                var h = $("#supertab > iframe"), e = parseInt(h.css("margin-top"));
                h.css("margin-top", e + 11);
            }
        }
        var f = false, a = false;
        $("link[rel=stylesheet").each(function() {
            if (this.href.match(/navbar.css$/)) {
                f = true;
            }
            if (this.href.match(/navbar-mega.css$/)) {
                a = true;
            }
        });
        if (f && a && "csm" in window) {
            generic.monitoring.record_event("nav_both_css_error");
        }
        var g = $("#consumer_user_nav p.navCategory.singleLine a").text();
        showSuccessfulLoginBanner(g);
    });
}(function() {
    if (!("imdb" in window)) {
        window.imdb = {};
    }
    if (!("navbar" in imdb)) {
        imdb.navbar = {};
    }
    imdb.navbar.loadUnreadHelpdeskMessageCount = function() {
        $.ajax({
            url: "/widget/helpdesk_messages",
            type: "GET",
            beforeSend: window.addClickstreamHeadersToAjax,
            dataType: "json",
            timeout: this.ajaxTimeout,
            success: function(a, b) {
                imdb.navbar.updateUnreadHelpdeskMessageCount(a);
            }
        });
    };
    imdb.navbar.updateUnreadHelpdeskMessageCount = function(a) {
        if (a.message_count > 0) {
            $("#new_messages a").html("Unread Messages (" + a.message_count + ")").parent().show();
            $("#hd_msg_icon").show();
        }
    };
    $(document).ready(function() {
        if (!window.useNewHelpdeskMessageTreatment) {
            return;
        }
        imdb.navbar.loadUnreadHelpdeskMessageCount();
    });
})($);
var suggestionsearch_enable = function() {
    jQuery("#navbar-query").searchAutocomplete({
        maxResults: 6,
        alwaysScrollIntoView: false,
        resultsDiv: jQuery("#navbar-suggestionsearch"),
        keyboardControl: true
    });
    jQuery("#navbar-query").attr("autocomplete", "off");
    repositionSuggestionSearch();
};
var repositionSuggestionSearch = function() {
    var a = jQuery("#navbar-query");
    var g = a.position();
    var f = a.width();
    var e = a.height();
    var c = 0;
    var b = 11;
    var d = 115;
    jQuery("#navbar-suggestionsearch").css({
        left: ((g.left + c) + "px"),
        top: ((g.top + e + b) + "px"),
        width: ((f + d) + "px")
    });
};
var suggestionsearch_disable = function() {
    jQuery("#navbar-query").stopSearchAutocomplete({
        resultsDiv: jQuery("#navbar-suggestionsearch")
    });
    jQuery("#navbar-query").attr("autocomplete", "on");
};
var suggestionsearch_dropdown_choice = function(a) {
    if ("all" == a.value) {
        suggestionsearch_enable();
    } else {
        suggestionsearch_disable();
    }
};
function trackAndClick(a, d, b) {
    var c = new Image();
    c.src = "/rg/" + a + "/" + d + "/images/b.gif";
    setTimeout(function() {
        document.location = b.href;
    }, 0);
    return false;
}
jQuery(document).ready(function() {
    var b = jQuery('#nb_search select[name="s"]');
    var a;
    if (b.length > 0) {
        a = b[0];
        suggestionsearch_dropdown_choice(a);
    }
});
(function(a) {
    a.fn.searchAutocomplete = function(d) {
        if (typeof(d) == "undefined") {
            d = {};
        }
        var u = jQuery(this), o = "resultsDiv" in d ? d.resultsDiv: jQuery("#autocomplete"), s = "", r = "", c = "", k = "", i, g, v = "maxResults" in d ? d.maxResults: 3, l = "/rg/mobileweb/suggests", q = /[^\wàÀáÁâÂãÃäÄåÅæÆçÇèÈéÉêÊëËìÍíÍîÎïÏðÐñÑòÒóÓôÔõÕöÖøØùÙúÚûÛüÜýÝÿþÞß]/g, C = /[àÀáÁâÂãÃäÄåÅæÆçÇèÈéÉêÊëËìÍíÍîÎïÏðÐñÑòÒóÓôÔõÕöÖøØùÙúÚûÛüÜýÝÿþÞß]/, p = "keyboardControl" in d ? d.keyboardControl: false;
        alwaysScrollIntoView = "alwaysScrollIntoView" in d ? d.alwaysScrollIntoView : true, pageCacheSetting = (a.browser.msie == true) ? false : true;
        a(document).mousedown(function(E) {
            g = a(E.target);
        });
        u.focus(function() {
            if (alwaysScrollIntoView) {
                this.scrollIntoView();
            }
            if (u.val().length > 0) {
                A(u.val());
                y();
            }
        });
        u.blur(function() {
            if (g.parents("#navbar-suggestionsearch").length) {
                i = setTimeout(e, 300);
            } else {
                i = setTimeout(n, 300);
            }
        });
        u.keydown(function(E) {
            if (p) {
                if (E.keyCode == 38) {
                    u.focus();
                    b();
                    return false;
                } else {
                    if (E.keyCode == 40) {
                        u.focus();
                        D();
                        return false;
                    } else {
                        if (E.keyCode == 13) {
                            w();
                            return false;
                        } else {
                            if (E.keyCode == 27) {
                                t();
                                n();
                                return false;
                            }
                        }
                    }
                }
            }
            u.focus();
            i = setTimeout(B, 0);
        });
        function h(E) {
            t();
            jQuery(E).addClass("highlighted");
        }
        function t() {
            var E = o.find("a.highlighted");
            E.removeClass("highlighted");
        }
        function w() {
            var F = o.find("a.highlighted");
            if (F.length > 0) {
                var E = F.first().get(0);
                E.click();
            } else {
                jQuery("#navbar-form").submit();
            }
        }
        function b() {
            var G = o.find("a");
            if (G.length > 0) {
                var F = o.find("a.highlighted");
                if (F.length > 0) {
                    var I = F.first();
                    var H = I.prev("a");
                    if (H.length > 0) {
                        var E = H.first();
                        E.addClass("highlighted");
                    }
                    I.removeClass("highlighted");
                } else {}
            }
        }
        function D() {
            var G = o.find("a");
            if (G.length > 0) {
                var F = o.find("a.highlighted");
                if (F.length > 0) {
                    var H = F.first();
                    var J = H.next("a");
                    if (J.length > 0) {
                        var E = J.first();
                        E.addClass("highlighted");
                        H.removeClass("highlighted");
                    }
                } else {
                    var I = G.first();
                    I.addClass("highlighted");
                }
            }
        }
        function y() {
            repositionSuggestionSearch();
            o.css("display", "block");
        }
        function n() {
            o.css("display", "none");
        }
        function e() {
            o.css({
                opacity: 0,
                filter: "alpha(opacity=0)"
            });
        }
        function x(F) {
            if (F) {
                var E = F.toLowerCase();
                if (E.length > 20) {
                    E = E.substr(0, 20);
                }
                E = E.replace(/^\s*/, "").replace(/[ ]+/g, "_");
                if (C.test(E)) {
                    E = E.replace(/[àÀáÁâÂãÃäÄåÅæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[èÈéÉêÊëË]/g, "e").replace(/[ìÍíÍîÎïÏ]/g, "i").replace(/[ðÐ]/g, "d").replace(/[ñÑ]/g, "n").replace(/[òÒóÓôÔõÕöÖøØ]/g, "o").replace(/[ùÙúÚûÛüÜ]/g, "u").replace(/[ýÝÿ]/g, "y").replace(/[þÞ]/g, "t").replace(/[ß]/g, "ss");
                }
                E = E.replace(/[\W]/g, "");
                return E;
            }
            return "";
        }
        function B() {
            A(u.val());
        }
        function f(E, F) {
            if (E && F && F.length <= E.length && E.substr(0, F.length) === F) {
                return true;
            }
            return false;
        }
        function A(F) {
            var E = x(F);
            if (E.length == 0) {
                n();
                s = "";
                r = "";
                c = "";
            } else {
                if (E !== s) {
                    y();
                    a.jsonp({
                        charset: "UTF-8",
                        dataType: "jsonp",
                        callback: "imdb$" + E,
                        url: "http://sg.media-imdb.com/suggests/" + E.substr(0, 1) + "/" + E + ".json",
                        error: function(H, G) {
                            if (G === "error" && E.length > 1) {
                                c = E;
                                if (f(s, r)) {
                                    m(E);
                                } else {
                                    A(E.substr(0, E.length - 1));
                                }
                            }
                        },
                        success: function(G) {
                            j(G, E);
                            r = E;
                            k = G;
                        },
                        pageCache: pageCacheSetting
                    });
                    s = E;
                }
            }
        }
        function j(K, I) {
            if (s === I) {
                var J = "";
                var H = "";
                if (typeof a("#nb_search").attr("data-hostname") != "undefined") {
                    H = "http://" + a("#nb_search").attr("data-hostname");
                }
                for (var L = 0; L < K.d.length && L < v; L += 1) {
                    var R = K.d[L];
                    var M = "";
                    if (a("#megaMenu").length) {
                        M = "nv_";
                    }
                    var P = M + "sr_" + (L + 1);
                    var G = R.id;
                    var O = "film-40x54.png";
                    var E;
                    if (f(G, "nm")) {
                        E = H + "/name/" + G + "/";
                        O = "people-40x54.png";
                    } else {
                        if (f(G, "tt")) {
                            E = H + "/title/" + G + "/";
                        } else {
                            if (f(G, "http://")) {
                                E = G;
                            }
                        }
                    }
                    if (E) {
                        var S = {
                            url: E,
                            title: R.l,
                            detail: R.s,
                            placeholder: O
                        };
                        if (R.i) {
                            S.img = {
                                url: R.i[0].replace("._V1_.jpg", "._V1._SX40_CR0,0,40,54_.jpg"),
                                width: 40,
                                height: 54
                            };
                        }
                        if (R.y) {
                            S.extra = "(" + R.y + ")";
                        }
                        J += z(S, P);
                    }
                }
                if (J.length > 0) {
                    y();
                    var N = u.val();
                    var Q = N.replace(q, " ");
                    var F = jQuery("<div/>").text(N).html();
                    J += '<a class="moreResults" href="';
                    J += H + "/find?s=all&q=" + Q + "&ref_=" + M + 'sr_sm">';
                    J += '<span class="message">See all results for "<span class="query">' + F + '</span>"</span>&nbsp;<span class="raquo">&raquo;</span>';
                    J += "</a>";
                    o.html(J);
                    o.find("a").hover(function() {
                        h(this);
                    }, function() {});
                }
            }
        }
        function m(I) {
            var F = [];
            var H = [];
            for (var G = 0; G < k.d.length; G += 1) {
                var J = k.d[G];
                var E = J.l;
                if (x(E).match(I)) {
                    F.push(J);
                } else {
                    H.push(J);
                }
            }
            j({
                d: F.concat(H)
            }, I);
        }
        function z(G, E) {
            var F = '<a href="' + G.url + "?ref_=" + E + '" class="poster"';
            F += ">";
            if (G.img) {
                F += '<img src="' + G.img.url + '"';
                F += " style=\"background:url('http://i.media-imdb.com/images/mobile/" + G.placeholder + "')\"";
                if (G.img.width && G.img.height) {
                    F += ' width="' + G.img.width + '" height="' + G.img.height + '"';
                }
                F += ">";
            } else {
                if (G.placeholder) {
                    F += '<img src="http://i.media-imdb.com/images/mobile/' + G.placeholder + '">';
                }
            }
            F += '<div class="suggestionlabel">';
            F += '<span class="title">' + G.title + "</span>";
            if (G.extra) {
                F += ' <span class="extra">' + G.extra + "</span>";
            }
            if (G.detail) {
                F += '<div class="detail">' + G.detail + "</div>";
            }
            F += "</div></a>";
            return F;
        }
    };
    a.fn.stopSearchAutocomplete = function(c) {
        if (typeof(c) == "undefined") {
            c = {};
        }
        var d = jQuery(this), b = "resultsDiv" in c ? c.resultsDiv: jQuery("#autocomplete");
        d.unbind("focus");
        d.unbind("blur");
        d.unbind("keydown");
        b.css("display", "none");
    };
})(jQuery);
function clearFreedonia() {
    var a = window.location.search.substring(1).replace(/_ad_preview=[^&]*&?/, "");
    window.generic.cookie.erase("zo");
    window.generic.cookie.erase("zo2");
    window.location.search = a + (a && a[a.length - 1] !== "&" ? "&" : "") + "cb=" + Math.random();
}
$(function() {
    if (top != self) {
        $.get("/_ajax/isframed", {
            location: document.location.pathname,
            referrer: document.referrer
        });
    }
});
(function(c, e) {
    var b = c("#watch-popover");
    c(".watch-bar").on("click", ".open-options", function(f) {
        f.preventDefault();
        f.stopPropagation();
        var g = c(".watch-bar").position();
        b.css({
            top: g.top - 10,
            right: 0
        }).show();
    });
    b.on("click", ".close-popover", function(f) {
        f.preventDefault();
        f.stopPropagation();
        b.hide();
    });
    c(".watchbar2").on("click", "section[data-href]", function(h) {
        if (!c(this).hasClass("has-watchoptions")) {
            var f = c(this).data("href");
            if (f) {
                var g = c(this).data("optiontype") || "";
                if (c(this).data("offsite")) {
                    window.open(f);
                } else {
                    if (g.indexOf("physical")>-1 || g.indexOf("instant")>-1) {
                        window.open(f);
                    } else {
                        window.location = f;
                    }
                }
            }
        }
    });
    c("body").on("click", ".has-watchoptions", function(g) {
        g.preventDefault();
        g.stopPropagation();
        var f = c(this).attr("href") || c(this).data("href");
        if (f) {
            d(f);
        }
    });
    c(".watchbar2").on("click", "h2 a", function(f) {
        if (!c(this).hasClass("has-watchoptions")) {
            f.stopPropagation();
        }
    });
    c("body").on("click", ".minibar a", function(f) {
        f.stopPropagation();
    });
    c("body").on("click", ".minibar section[data-href]", function(g) {
        if (!c(this).hasClass("has-watchoptions")) {
            var f = c(this).data("href");
            if (f) {
                if (c(this).data("offsite")) {
                    window.open(f);
                } else {
                    window.location = f;
                }
            }
        }
    });
    e.imdb = e.imdb || {};
    e.imdb.watchwidgets = e.imdb.watchwidgets || {};
    var a = function(f) {
        c.colorbox({
            width: 500,
            href: f,
            opacity: 0.5,
            close: '<div class="lightbox-sprite close light-circle"></div>',
            onOpen: function() {
                c("#colorbox").addClass("imdb-closable-colorbox");
            },
            onClosed: function() {
                c("#colorbox").removeClass("imdb-closable-colorbox");
            },
            scrolling: false
        });
    };
    var d = function(f) {
        if (f.indexOf("#watchoptions")>-1) {
            e.imdb.watchwidgets.openWatchOptionsDialog(f);
        }
    };
    e.imdb.watchwidgets.openWatchOptionsDialog = a;
    e.imdb.watchwidgets.autoOpenWatchOptionsDialog = d;
})(jQuery, window);
$(document).ready(function() {
    var a = /tt\d{7,}/.exec(window.location.href);
    if (window.location.href.indexOf("#watchoptions")>-1 && a.length > 0) {
        window.imdb.watchwidgets.openWatchOptionsDialog("/watch/_ajax/box/" + a[0]);
    }
});
$(document).ready(function() {
    var o = function(t, r) {
        var e, s = [];
        for (e in r) {
            if (r.hasOwnProperty(e)) {
                s.push(encodeURIComponent(e) + "=" + encodeURIComponent(r[e]));
            }
        }
        if (s.length > 0) {
            return t + "?" + s.join("&");
        }
        return t;
    };
    var h = function(u) {
        var v = $(u), e = v.attr("href"), t, s = "/b.gif?cb=" + Math.random();
        if (!e) {
            e = "/video" + s;
        } else {
            if (e.match(/\?/)) {
                e = e.replace(/\/?\?/, s + "&");
            } else {
                if (e.match(/#/)) {
                    e = e.replace(/\/?#/, s + "#");
                } else {
                    e = e.replace(/\/?$/, "") + s;
                }
            }
        }
        var r = new Image();
        r.src = e;
    };
    var c = function(y) {
        var e = $(y), w, t, s, B, v, x, r, C, A = e.attr("data-type") || "single", u = e.attr("data-rid") || $(".trailers-data").attr("data-rid"), z = {};
        if (A === "single") {
            t = e.attr("data-context") || "imdb";
            s = e.attr("data-video");
            r = e.attr("data-vioverride");
            C = e.attr("data-tconst");
            B = $("a#related-videos-link").attr("data-vc");
            if (r) {
                s = r;
            }
            w = "/video/" + t + "/" + s + "/imdb/" + A;
            z.feature = "sing";
            z.action = "user";
            z.vc = B;
            if (e.attr("widget-context") != "nameDemoreels") {
                z["const"] = (C || m);
            }
        } else {
            if (A === "playlist") {
                v = e.attr("data-source");
                x = e.attr("data-id");
                w = "/video/playlist/" + v;
                z.id = x;
                if (e.attr("data-video")) {
                    z.videoId = e.attr("data-video");
                }
                if (e.attr("data-start")) {
                    z.start = e.attr("data-start");
                }
            } else {
                if (A === "recommends") {
                    C = e.attr("data-tconst");
                    w = "/video/playlist/title";
                    z.tconst = C;
                }
            }
        }
        z.rid = u;
        if (e.attr("data-refsuffix")) {
            z.refsuffix = e.attr("data-refsuffix");
        }
        if (e.attr("data-ref")) {
            z.ref_ = e.attr("data-ref");
        }
        return o(w, z);
    };
    try {
        var j = $(location).attr("pathname");
        var d = j.split("/")[1];
        var m = j.split("/")[2];
        if (m === undefined || m === "") {
            m = "UNKNOWN";
        }
        $(document).delegate("a.video-colorbox", "click", function(r) {
            r.preventDefault();
            f($(this));
        });
        var a = 1008, b = 500, n = 650;
        var f = function(e) {
            $.colorbox({
                iframe: true,
                fastIframe: false,
                close: "",
                initialWidth: 0,
                initialHeight: 0,
                innerWidth: a,
                innerHeight: function() {
                    if ($(e).attr("data-type") == "playlist" || $(e).attr("data-type") == "recommends") {
                        return n;
                    } else {
                        return b;
                    }
                },
                opacity: 0.75,
                scrolling: false,
                href: function() {
                    return c(e);
                },
                onOpen: function() {
                    $("#colorbox").addClass("video-colorbox");
                    $("#colorbox iframe").attr("allowfullscreen", "");
                    $("#colorbox iframe").attr("mozallowfullscreen", "");
                    $("#colorbox iframe").attr("webkitallowfullscreen", "");
                    h(e);
                },
                onClosed: function() {
                    $("#colorbox").removeClass("video-colorbox");
                },
                onCleanup: function() {
                    $("#colorbox iframe").unbind().each(function() {
                        try {
                            this.contentWindow.jQuery("#imdb-player").remove();
                        } catch (r) {}
                    });
                },
                onComplete: function() {
                    $("#colorbox iframe").bind("video_imdb_videoEnded", function() {
                        $.colorbox.close();
                    });
                }
            });
        };
        $("#playall-button").removeAttr("disabled");
        var p = document.location.hash.split("-");
        if (p[0] == "#lb") {
            if (d == "title" || d == "name") {
                var i = /^vi(\d+)$/;
                if (i.test(p[1])) {
                    f($("<a></a>").attr("data-vioverride", p[1]));
                } else {
                    $("a.title-trailer").click();
                }
            } else {
                var q = $("#playall-button");
                var l = /^\d+$/;
                if (l.test(p[1])) {
                    var g = '.video-colorbox[data-start="' + (p[1] - 1) + '"]';
                    if ($(g).length) {
                        q = $(g).first();
                    }
                }
                if (q.length) {
                    q.click();
                }
            }
        } else {
            if (p[0] == "#play" && p[1] == "all") {
                $("#playall-button").click();
            }
        }
    } catch (k) {
        consoleLog("Lightbox JS error: " + k);
    }
});
(function(a5, a3, a1) {
    function aa(h, f, b) {
        var a = a3.createElement(h);
        return f && (a.id = aW + f), b && (a.style.cssText = b), a5(a);
    }
    function aB(e) {
        var d = aD.length, f = (aj + e)%d;
        return f < 0 ? d + f : f;
    }
    function a8(d, c) {
        return Math.round((/%/.test(d) ? (c === "x" ? aC.width() : aC.height()) / 100 : 1) * parseInt(d, 10));
    }
    function a9(b) {
        return ap.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(b);
    }
    function a7() {
        var a;
        ap = a5.extend({}, a5.data(ak, aX));
        for (a in ap) {
            a5.isFunction(ap[a]) && a.slice(0, 2) !== "on" && (ap[a] = ap[a].call(ak));
        }
        ap.rel = ap.rel || ak.rel || "nofollow", ap.href = ap.href || a5(ak).attr("href"), ap.title = ap.title || ak.title, typeof ap.href == "string" && (ap.href = a5.trim(ap.href));
    }
    function a6(a, d) {
        a5.event.trigger(a), d && d.call(ak);
    }
    function a4() {
        var h, f = aW + "Slideshow_", l = "click." + aW, k, j, i;
        ap.slideshow && aD[1] ? (k = function() {
            av.text(ap.slideshowStop).unbind(l).bind(aS, function() {
                if (ap.loop || aD[aj + 1]) {
                    h = setTimeout(ad.next, ap.slideshowSpeed);
                }
            }).bind(aT, function() {
                clearTimeout(h);
            }).one(l + " " + aR, j), aK.removeClass(f + "off").addClass(f + "on"), h = setTimeout(ad.next, ap.slideshowSpeed);
        }, j = function() {
            clearTimeout(h), av.text(ap.slideshowStart).unbind([aS, aT, aR, l].join(" ")).one(l, function() {
                ad.next(), k();
            }), aK.removeClass(f + "on").addClass(f + "off");
        }, ap.slideshowAuto ? k() : j()) : aK.removeClass(f + "off " + f + "on");
    }
    function a2(a) {
        af || (ak = a, a7(), aD = a5(ak), aj = 0, ap.rel !== "nofollow" && (aD = a5("." + aV).filter(function() {
            var c = a5.data(this, aX).rel || this.rel;
            return c === ap.rel;
        }), aj = aD.index(ak), aj===-1 && (aD = aD.add(ak), aj = aD.length - 1)), ah || (ah = ag=!0, aK.show(), ap.returnFocus && a5(ak).blur().one(aQ, function() {
            a5(this).focus();
        }), aL.css({
            opacity: + ap.opacity,
            cursor: ap.overlayClose ? "pointer": "auto"
        }).show(), ap.w = a8(ap.initialWidth, "x"), ap.h = a8(ap.initialHeight, "y"), ad.position(), aN && aC.bind("resize." + aM + " scroll." + aM, function() {
            aL.css({
                width: aC.width(),
                height: aC.height(),
                top: aC.scrollTop(),
                left: aC.scrollLeft()
            });
        }).trigger("resize." + aM), a6(aU, ap.onOpen), aq.add(ax).hide(), ar.html(ap.close).show()), ad.load(!0));
    }
    function a0() {
        !aK && a3.body && (ab=!1, aC = a5(a1), aK = aa(ac).attr({
            id: aX,
            "class": aO ? aW + (aN ? "IE6" : "IE"): ""
        }).hide(), aL = aa(ac, "Overlay", aN ? "position:absolute" : "").hide(), aJ = aa(ac, "Wrapper"), aI = aa(ac, "Content").append(aA = aa(ac, "LoadedContent", "width:0; height:0; overflow:hidden"), ay = aa(ac, "LoadingOverlay").add(aa(ac, "LoadingGraphic")), ax = aa(ac, "Title"), aw = aa(ac, "Current"), au = aa(ac, "Next"), at = aa(ac, "Previous"), av = aa(ac, "Slideshow").bind(aU, a4), ar = aa(ac, "Close")), aJ.append(aa(ac).append(aa(ac, "TopLeft"), aH = aa(ac, "TopCenter"), aa(ac, "TopRight")), aa(ac, !1, "clear:left").append(aG = aa(ac, "MiddleLeft"), aI, aF = aa(ac, "MiddleRight")), aa(ac, !1, "clear:left").append(aa(ac, "BottomLeft"), aE = aa(ac, "BottomCenter"), aa(ac, "BottomRight"))).find("div div").css({
            "float": "left"
        }), az = aa(ac, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), aq = au.add(at).add(aw).add(av), a5(a3.body).append(aL, aK.append(aJ, az)));
    }
    function aY() {
        return aK ? (ab || (ab=!0, ao = aH.height() + aE.height() + aI.outerHeight(!0) - aI.height(), an = aG.width() + aF.width() + aI.outerWidth(!0) - aI.width(), am = aA.outerHeight(!0), al = aA.outerWidth(!0), aK.css({
            "padding-bottom": ao,
            "padding-right": an
        }), au.click(function() {
            ad.next();
        }), at.click(function() {
            ad.prev();
        }), ar.click(function() {
            ad.close();
        }), aL.click(function() {
            ap.overlayClose && ad.close();
        }), a5(a3).bind("keydown." + aW, function(d) {
            var c = d.keyCode;
            ah && ap.escKey && c === 27 && (d.preventDefault(), ad.close()), ah && ap.arrowKey && aD[1] && (c === 37 ? (d.preventDefault(), at.click()) : c === 39 && (d.preventDefault(), au.click()));
        }), a5("." + aV, a3).live("click", function(b) {
            b.which > 1 || b.shiftKey || b.altKey || b.metaKey || (b.preventDefault(), a2(this));
        })), !0) : !1;
    }
    var aZ = {
        transition: "elastic",
        speed: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        inline: !1,
        html: !1,
        iframe: !1,
        fastIframe: !0,
        photo: !1,
        href: !1,
        title: !1,
        rel: !1,
        opacity: 0.9,
        preloading: !0,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: !1,
        returnFocus: !0,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: undefined
    }, aX = "colorbox", aW = "cbox", aV = aW + "Element", aU = aW + "_open", aT = aW + "_load", aS = aW + "_complete", aR = aW + "_cleanup", aQ = aW + "_closed", aP = aW + "_purge", aO=!a5.support.opacity&&!a5.support.style, aN = aO&&!a1.XMLHttpRequest, aM = aW + "_IE6", aL, aK, aJ, aI, aH, aG, aF, aE, aD, aC, aA, az, ay, ax, aw, av, au, at, ar, aq, ap, ao, an, am, al, ak, aj, ai, ah, ag, af, ae, ad, ac = "div", ab;
    if (a5.colorbox) {
        return;
    }
    a5(a0), ad = a5.fn[aX] = a5[aX] = function(a, e) {
        var d = this;
        a = a || {}, a0();
        if (aY()) {
            if (!d[0]) {
                if (d.selector) {
                    return d;
                }
                d = a5("<a/>"), a.open=!0;
            }
            e && (a.onComplete = e), d.each(function() {
                a5.data(this, aX, a5.extend({}, a5.data(this, aX) || aZ, a));
            }).addClass(aV), (a5.isFunction(a.open) && a.open.call(d) || a.open) && a2(d[0]);
        }
        return d;
    }, ad.position = function(j, f) {
        function k(b) {
            aH[0].style.width = aE[0].style.width = aI[0].style.width = b.style.width, aI[0].style.height = aG[0].style.height = aF[0].style.height = b.style.height;
        }
        var p = 0, o = 0, n = aK.offset(), m = aC.scrollTop(), l = aC.scrollLeft();
        aC.unbind("resize." + aW), aK.css({
            top: - 90000,
            left: - 90000
        }), ap.fixed&&!aN ? (n.top -= m, n.left -= l, aK.css({
            position: "fixed"
        })) : (p = m, o = l, aK.css({
            position: "absolute"
        })), ap.right!==!1 ? o += Math.max(aC.width() - ap.w - al - an - a8(ap.right, "x"), 0) : ap.left!==!1 ? o += a8(ap.left, "x") : o += Math.round(Math.max(aC.width() - ap.w - al - an, 0) / 2), ap.bottom!==!1 ? p += Math.max(aC.height() - ap.h - am - ao - a8(ap.bottom, "y"), 0) : ap.top!==!1 ? p += a8(ap.top, "y") : p += Math.round(Math.max(aC.height() - ap.h - am - ao, 0) / 2), aK.css({
            top: n.top,
            left: n.left
        }), j = aK.width() === ap.w + al && aK.height() === ap.h + am ? 0 : j || 0, aJ[0].style.width = aJ[0].style.height = "9999px", aK.dequeue().animate({
            width: ap.w + al,
            height: ap.h + am,
            top: p,
            left: o
        }, {
            duration: j,
            complete: function() {
                k(this), ag=!1, aJ[0].style.width = ap.w + al + an + "px", aJ[0].style.height = ap.h + am + ao + "px", ap.reposition && setTimeout(function() {
                    aC.bind("resize." + aW, ad.position);
                }, 1), f && f();
            },
            step: function() {
                k(this);
            }
        });
    }, ad.resize = function(b) {
        ah && (b = b || {}, b.width && (ap.w = a8(b.width, "x") - al - an), b.innerWidth && (ap.w = a8(b.innerWidth, "x")), aA.css({
            width: ap.w
        }), b.height && (ap.h = a8(b.height, "y") - am - ao), b.innerHeight && (ap.h = a8(b.innerHeight, "y")), !b.innerHeight&&!b.height && (aA.css({
            height: "auto"
        }), ap.h = aA.height()), aA.css({
            height: ap.h
        }), ad.position(ap.transition === "none" ? 0 : ap.speed));
    }, ad.prep = function(a) {
        function f() {
            return ap.w = ap.w || aA.width(), ap.w = ap.mw && ap.mw < ap.w ? ap.mw : ap.w, ap.w;
        }
        function e() {
            return ap.h = ap.h || aA.height(), ap.h = ap.mh && ap.mh < ap.h ? ap.mh : ap.h, ap.h;
        }
        if (!ah) {
            return;
        }
        var j, i = ap.transition === "none" ? 0: ap.speed;
        aA.remove(), aA = aa(ac, "LoadedContent").append(a), aA.hide().appendTo(az.show()).css({
            width: f(),
            overflow: ap.scrolling ? "auto": "hidden"
        }).css({
            height: e()
        }).prependTo(aI), az.hide(), a5(ai).css({
            "float": "none"
        }), aN && a5("select").not(aK.find("select")).filter(function() {
            return this.style.visibility !== "hidden";
        }).css({
            visibility: "hidden"
        }).one(aR, function() {
            this.style.visibility = "inherit";
        }), j = function() {
            function d() {
                aO && aK[0].style.removeAttribute("filter");
            }
            var x, w, v = aD.length, u, t = "frameBorder", s = "allowTransparency", r, n, m;
            if (!ah) {
                return;
            }
            r = function() {
                clearTimeout(ae), ay.hide(), a6(aS, ap.onComplete);
            }, aO && ai && aA.fadeIn(100), ax.html(ap.title).add(aA).show();
            if (v > 1) {
                typeof ap.current == "string" && aw.html(ap.current.replace("{current}", aj + 1).replace("{total}", v)).show(), au[ap.loop || aj < v - 1 ? "show": "hide"]().html(ap.next), at[ap.loop || aj ? "show": "hide"]().html(ap.previous), ap.slideshow && av.show();
                if (ap.preloading) {
                    x = [aB( - 1), aB(1)];
                    while (w = aD[x.pop()]) {
                        n = a5.data(w, aX).href || w.href, a5.isFunction(n) && (n = n.call(w)), a9(n) && (m = new Image, m.src = n);
                    }
                }
            } else {
                aq.hide();
            }
            ap.iframe ? (u = aa("iframe")[0], t in u && (u[t] = 0), s in u && (u[s] = "true"), u.name = aW + + (new Date), ap.fastIframe ? r() : a5(u).one("load", r), u.src = ap.href, ap.scrolling || (u.scrolling = "no"), a5(u).addClass(aW + "Iframe").appendTo(aA).one(aP, function() {
                u.src = "//about:blank";
            })) : r(), ap.transition === "fade" ? aK.fadeTo(i, 1, d) : d();
        }, ap.transition === "fade" ? aK.fadeTo(i, 0, function() {
            ad.position(0, j);
        }) : ad.position(i, j);
    }, ad.load = function(a) {
        var h, g, f = ad.prep;
        ag=!0, ai=!1, ak = aD[aj], a || a7(), a6(aP), a6(aT, ap.onLoad), ap.h = ap.height ? a8(ap.height, "y") - am - ao : ap.innerHeight && a8(ap.innerHeight, "y"), ap.w = ap.width ? a8(ap.width, "x") - al - an : ap.innerWidth && a8(ap.innerWidth, "x"), ap.mw = ap.w, ap.mh = ap.h, ap.maxWidth && (ap.mw = a8(ap.maxWidth, "x") - al - an, ap.mw = ap.w && ap.w < ap.mw ? ap.w : ap.mw), ap.maxHeight && (ap.mh = a8(ap.maxHeight, "y") - am - ao, ap.mh = ap.h && ap.h < ap.mh ? ap.h : ap.mh), h = ap.href, ae = setTimeout(function() {
            ay.show();
        }, 100), ap.inline ? (aa(ac).hide().insertBefore(a5(h)[0]).one(aP, function() {
            a5(this).replaceWith(aA.children());
        }), f(a5(h))) : ap.iframe ? f(" ") : ap.html ? f(ap.html) : a9(h) ? (a5(ai = new Image).addClass(aW + "Photo").error(function() {
            ap.title=!1, f(aa(ac, "Error").text("This image could not be loaded"));
        }).load(function() {
            var b;
            ai.onload = null, ap.scalePhotos && (g = function() {
                ai.height -= ai.height * b, ai.width -= ai.width * b;
            }, ap.mw && ai.width > ap.mw && (b = (ai.width - ap.mw) / ai.width, g()), ap.mh && ai.height > ap.mh && (b = (ai.height - ap.mh) / ai.height, g())), ap.h && (ai.style.marginTop = Math.max(ap.h - ai.height, 0) / 2 + "px"), aD[1] && (ap.loop || aD[aj + 1]) && (ai.style.cursor = "pointer", ai.onclick = function() {
                ad.next();
            }), aO && (ai.style.msInterpolationMode = "bicubic"), setTimeout(function() {
                f(ai);
            }, 1);
        }), setTimeout(function() {
            ai.src = h;
        }, 1)) : h && az.load(h, ap.data, function(e, j, i) {
            f(j === "error" ? aa(ac, "Error").text("Request unsuccessful: " + i.statusText) : a5(this).contents());
        });
    }, ad.next = function() {
        !ag && aD[1] && (ap.loop || aD[aj + 1]) && (aj = aB(1), ad.load());
    }, ad.prev = function() {
        !ag && aD[1] && (ap.loop || aj) && (aj = aB( - 1), ad.load());
    }, ad.close = function() {
        ah&&!af && (af=!0, ah=!1, a6(aR, ap.onCleanup), aC.unbind("." + aW + " ." + aM), aL.fadeTo(200, 0), aK.stop().fadeTo(300, 0, function() {
            aK.add(aL).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), a6(aP), aA.remove(), setTimeout(function() {
                af=!1, a6(aQ, ap.onClosed);
            }, 1);
        }));
    }, ad.remove = function() {
        a5([]).add(aK).add(aL).remove(), aK = null, a5("." + aV).removeData(aX).removeClass(aV).die();
    }, ad.element = function() {
        return a5(ak);
    }, ad.settings = aZ;
})(jQuery, document, this);
(function(e, d, r) {
    var c = "/watch/_ajax/option", m = ".wtw-option[data-tconst][data-watchtype],.wtw-option-standalone[data-tconst][data-watchtype]", o = "", f = {};
    d.imdb = d.imdb || {};
    var i = {};
    var l = false;
    var n = undefined;
    d.imdb.WatchOption = function() {
        var u = [], s = undefined;
        var t = function(w, v) {
            w.html(v.clone());
        };
        this.set_content = function(w) {
            var v;
            s = e(w);
            for (v = 0; v < u.length; v++) {
                t(u[v], s);
            }
        };
        this.addelement_as_overlay = function(w) {
            var y = e(w), x = e('<div style="display:inline-block;position:relative"></div>'), v = e("<span></span>");
            y.before(x);
            x.append(y);
            x.append(v);
            u.push(v);
            if (s !== undefined) {
                t(v, s);
            }
        };
        this.addelement_as_child = function(w) {
            var x = e(w), v = e("<span></span>");
            x.append(v);
            u.push(v);
            if (s !== undefined) {
                t(v, s);
            }
        };
    };
    d.imdb.WatchTypeInfo = function(u) {
        var t = {}, v = [], s = this;
        this.has_tconst_watchoption = function(w) {
            return t.hasOwnProperty(w);
        };
        this.get_tconst_watchoption = function(w) {
            if (s.has_tconst_watchoption(w)) {
                return t[w];
            } else {
                return undefined;
            }
        };
        this.add_element = function(x) {
            var w = e(x), z = w.data("tconst"), y;
            if (!s.has_tconst_watchoption(z)) {
                t[z] = new d.imdb.WatchOption(z);
            }
            if (!w.is("[watchoption]")) {
                y = t[z];
                v.push(z);
                l = true;
                if (w.is(".wtw-option-standalone")) {
                    y.addelement_as_child(w);
                } else {
                    y.addelement_as_overlay(w);
                }
                w.attr("watchoption", 1);
            }
        };
        this.get_pending_ajax_tconsts = function() {
            return v;
        };
        this.clear_pending_ajax_tconsts = function() {
            v = [];
        };
    };
    var k = function(s) {
        if (!i.hasOwnProperty(s)) {
            i[s] = new d.imdb.WatchTypeInfo(s);
        }
        return i[s];
    };
    var g = function(w) {
        var v, u, s, t, x;
        for (s in w) {
            t = k(s);
            for (v in w[s]) {
                x = t.get_tconst_watchoption(v);
                if (x !== undefined) {
                    u = w[s][v];
                    x.set_content(u);
                }
            }
        }
    };
    var a = function() {
        var v = {}, t, u, s;
        n = undefined;
        if (l) {
            for (t in i) {
                u = k(t);
                s = u.get_pending_ajax_tconsts();
                v[t] = s.join(",");
                u.clear_pending_ajax_tconsts();
            }
            if (o) {
                v.baseref = o;
            }
            e.ajax({
                url: c,
                type: "POST",
                data: v,
                dataType: "json",
                success: function(w) {
                    g(w);
                }
            });
            l = false;
        }
    };
    var q = function() {
        var s = {};
        if (l) {
            if (n) {
                clearTimeout(n);
                n = undefined;
            }
            n = setTimeout(a, 250);
        }
    };
    var h = function(x) {
        var u, v = e(x), t, s, w;
        for (u = 0; u < v.size(); u++) {
            t = e(v.get(u));
            if (!t.attr("watchoption")) {
                s = t.data("watchtype");
                o = t.data("baseref");
                w = k(s);
                w.add_element(t);
            }
        }
        q();
    };
    var b = function(t, s) {
        var u, v = e(window);
        s = s || 20;
        if (!t) {
            return false;
        }
        if (t instanceof jQuery) {
            t = t[0];
        }
        u = t.getBoundingClientRect();
        return (u.bottom >= s && u.top <= v.height() - s && u.right >= s && u.left <= v.width() - s);
    };
    var p = function(s, u) {
        var t = e(s).data("tconst") || "";
        if (f[t] || b(s, 20)) {
            u.push(e(s));
            if (t&&!f[t]) {
                f[t] = 1;
            }
        }
    };
    var j = function() {
        var s = [];
        e(m).each(function() {
            p(e(this), s);
        });
        h(s);
    };
    e.fn.scrollStopped = function(s) {
        e(this).scroll(function() {
            var t = this, u = e(t);
            if (u.data("scrollTimeout")) {
                clearTimeout(u.data("scrollTimeout"));
            }
            u.data("scrollTimeout", setTimeout(s, 300, t));
        });
    };
    e(d).scrollStopped(j);
    e(r).ready(j);
    e(r).ajaxComplete(j);
})(jQuery, window, document);
(function(a) {
    if (!("CS" in window)) {
        window.CS = {};
    }
    if (!("nativeAds" in window.CS)) {
        window.CS.NativeAds = {};
    }
    CS.NativeAds.registerClickTrackers = function() {
        a(".native-ad-link").on("click", function(b) {
            b.preventDefault();
            var f = a(this).data("ct-count");
            if (f && f > 0) {
                for (var e = 0; e < f; e++) {
                    var d = a(this).data("ct-" + e);
                    if (d) {
                        a.ajax({
                            url: d,
                            dataType: "jsonp"
                        });
                    }
                }
            }
            var c = a(this).attr("href");
            if (c) {
                window.open(c);
            }
        });
    };
    a(document).ready(function() {
        CS.NativeAds.registerClickTrackers();
    });
})(jQuery);
(function(b, c, a, d) {
    c.imdb = c.imdb || {};
    c.imdb.Utilities = function() {
        var g = b("#nblogout").length > 0 ? true: false, f = (("ontouchstart" in c) || (a.maxTouchPoints > 0) || (a.msMaxTouchPoints > 0)), e = (c.devicePixelRatio > 1), h = c.location.hostname.substr(0, 2) === "m.";
        this.getIsLoggedIn = function() {
            return g;
        };
        this.getIsMdot = function() {
            return h;
        };
        this.getIsRetina = function() {
            return e;
        };
        this.getIsTouch = function() {
            return f;
        };
        this.getUniqueId = function(k) {
            var i = b(k), j, l;
            if (i.attr("id")) {
                return i.attr("id");
            } else {
                j = i.attr("class") || "";
                l = i.prop("tagName") + "-" + j.replace(" ", "-") + "-" + b.now();
                i.attr("id", l);
                return l;
            }
        };
    };
})(jQuery, window, navigator);
(function(a, b, c) {
    b.imdb = b.imdb || {};
    b.imdb.WatchlistRibbon = function(e, f, d) {
        this._callerName = "";
        this._defaults = {
            Utilities: new b.imdb.Utilities()
        };
        this._$el = a(e);
        this._$elems = [];
        this._extra = {};
        this._listId = null;
        this._settings = null;
        this._$spinner = a('<span class="spinner" />');
        this._tconsts = [];
        this._options = d;
        this._param = f;
        this._init();
    };
    b.imdb.WatchlistRibbon.prototype._logConsoleMessage = function(d) {
        if (b.hasOwnProperty("consoleLog")) {
            consoleLog.apply(this, arguments);
        }
    };
    b.imdb.WatchlistRibbon.prototype._init = function() {
        var f, e, d;
        this._settings = a.extend(true, {}, this._defaults, this._options || {});
        this._callerName = this._$el.data("caller-name") || "watchlist-ribbon";
        if (this._param) {
            f = a(this._param);
        } else {
            f = this._$el;
        }
        for (d = 0; d < f.size(); d++) {
            e = a(f.get(d));
            if (e.attr("data-tconst")) {
                this._tconsts.push(e.data("tconst"));
                this._$elems.push(e);
            } else {
                this._logConsoleMessage("WatchlistRibbon: Cannot find tconst for: ", e);
            }
            e.bind("add-ribbon", a.proxy(this._callbackExternRibbonAdded, this));
            e.bind("remove-ribbon", a.proxy(this._callbackExternRibbonRemoved, this));
            e.bind("undo-remove-ribbon", a.proxy(this._callbackExternUndoRemove, this));
            e.bind("do-remove-ribbon", a.proxy(this._callbackExternDoRemove, this));
        }
        this._checkWatchlist();
    };
    b.imdb.WatchlistRibbon.prototype._callbackRibbonClickError = function(e, d) {
        this._logConsoleMessage("WatchlistRibbon: Error adding/removing item to Watchlist");
        this._setRibbonVisualState(d, c);
    };
    b.imdb.WatchlistRibbon.prototype._callbackRibbonClickSuccess = function(f, d) {
        var e;
        if (f.status === 200) {
            if (f.list_item_id) {
                e = true;
            } else {
                e = false;
            }
            this._setRibbonVisualState(d, e, f.list_id, f.list_item_id);
        } else {
            this._logConsoleMessage("Error adding/removing item to Watchlist");
            this._setRibbonVisualState(d, c);
        }
    };
    b.imdb.WatchlistRibbon.prototype._callbackWatchlistStatus = function(j) {
        var f, h, e, d, g = this;
        if (j.status !== 200) {
            this._logConsoleMessage("WatchlistRibbon: Watchlist lookup returned HTTP " + j.status);
            return;
        }
        this._listId = j.list_id;
        this._extra = {
            name: j.extra.name,
            value: j.extra.value
        };
        for (f = 0; f < this._$elems.length; f++) {
            h = this._$elems[f].data("tconst");
            if (j.has.hasOwnProperty(h)) {
                e = true;
                d = j.has[h][0];
            } else {
                e = false;
                d = c;
            }
            this._$elems[f].css("position", "relative");
            this._constructRibbon(this._$elems[f], h, e, d);
            this._$elems[f].off("click", ".wl-ribbon").on("click", ".wl-ribbon", function(i) {
                g._callbackRibbonClick(i);
            });
        }
    };
    b.imdb.WatchlistRibbon.prototype._callbackCheckWatchlistError = function() {
        a.error("WatchlistRibbon: Error checking watchlist for title presence");
        this._noWatchlist();
    };
    b.imdb.WatchlistRibbon.prototype._callbackRibbonClick = function(i) {
        var d = a(i.target), f = d.data("inWL"), h = {}, g = this;
        if (!d.hasClass("wl-ribbon")) {
            return;
        }
        if (!this._settings.Utilities.getIsLoggedIn()) {
            this._triggerLogin();
            return;
        }
        if (f) {
            h = this._watchlistRemove(d);
        } else {
            if (!f && (!this._listId || this._listId === "none")) {
                h = this._watchlistCreateAndAdd(d);
            } else {
                h = this._watchlistAdd(d);
            }
        }
        if (typeof this._extra.name !== "undefined") {
            h.data[this._extra.name] = this._extra.value;
        }
        a.ajax({
            url: h.url,
            type: "POST",
            data: h.data,
            context: g,
            beforeSend: b.addClickstreamHeadersToAjax,
            error: function(e) {
                g._callbackRibbonClickError(e, d);
            },
            success: function(e) {
                g._callbackRibbonClickSuccess(e, d);
            }
        });
    };
    b.imdb.WatchlistRibbon.prototype._stateInWatchList = function(d) {
        d.removeClass("not-inWL").addClass("inWL");
        d.removeClass("spinner").empty();
    };
    b.imdb.WatchlistRibbon.prototype._stateNotInWatchList = function(d) {
        d.removeClass("inWL").addClass("not-inWL");
        d.removeClass("spinner").empty();
    };
    b.imdb.WatchlistRibbon.prototype._setStateChangingWatchList = function(d) {
        d.removeClass("inWL not-inWL");
        d.addClass("spinner").empty().append(this._$spinner);
    };
    b.imdb.WatchlistRibbon.prototype._setRibbonVisualState = function(k, l, i, d) {
        var f = this._listId, h = k.data("listItemId"), j = k.data("inWL"), g = k.parent(), e;
        if (l === c) {
            if (j) {
                this._stateInWatchList(k);
            } else {
                this._stateNotInWatchList(k);
            }
            return;
        }
        if (!i) {
            i = f;
        }
        if (!d) {
            d = h;
        }
        if (l) {
            if (!(j && (f === i) && (h === d))) {
                this._$el.trigger("added-ribbon", {
                    listId: i,
                    listItemId: d,
                    listerItem: g
                });
                this._stateInWatchList(k);
                k.data("listItemId", d).data("inWL", true);
                if (!this._listId || this._listId === "none") {
                    this._listId = i;
                }
                e = "Click to remove from watchlist";
            }
        } else {
            if (j) {
                this._$el.trigger("removed-ribbon", {
                    listId: this._listId,
                    listItemId: k.data("listItemId"),
                    listerItem: g
                });
                this._stateNotInWatchList(k);
                k.data("listItemId", c).data("inWL", false);
                e = "Click to add to watchlist";
            }
        }
        k.attr("title", e);
    };
    b.imdb.WatchlistRibbon.prototype._callbackExternRibbonAdded = function(j, i) {
        var h = a(j.target), f = h.data("wl-ribbon"), g, d;
        if (i) {
            g = i.listId;
            d = i.listItemId;
        }
        this._setRibbonVisualState(f, true, g, d);
    };
    b.imdb.WatchlistRibbon.prototype._callbackExternUndoRemove = function(g) {
        var f = a(g.target), d = f.data("wl-ribbon");
        if (!d.data("inWL")) {
            this._callbackRibbonClick({
                target: d
            });
        }
    };
    b.imdb.WatchlistRibbon.prototype._callbackExternDoRemove = function(g) {
        var f = a(g.target), d = f.data("wl-ribbon");
        if (d.data("inWL")) {
            this._callbackRibbonClick({
                target: d
            });
        }
    };
    b.imdb.WatchlistRibbon.prototype._callbackExternRibbonRemoved = function(g) {
        var f = a(g.target), d = f.data("wl-ribbon");
        this._setRibbonVisualState(d, false);
    };
    b.imdb.WatchlistRibbon.prototype._checkWatchlist = function() {
        var d = this;
        if (!this._settings.Utilities.getIsLoggedIn()) {
            this._noWatchlist();
            return;
        }
        if (this._tconsts.length === 0) {
            return;
        }
        a.ajax({
            url: "/list/_ajax/watchlist_has",
            type: "POST",
            context: d,
            data: {
                consts: this._tconsts,
                tracking_tag: "watchlistRibbon"
            },
            beforeSend: b.addClickstreamHeadersToAjax,
            error: function() {
                d._callbackCheckWatchlistError();
            },
            success: function(e) {
                d._callbackWatchlistStatus(e);
            }
        });
    };
    b.imdb.WatchlistRibbon.prototype._constructRibbon = function(m, j, l, d) {
        var f, i = m.children(), e = m.width(), k = m.height(), g = "wl-ribbon", h = a('<div class="wl-ribbon"/>').data("tconst", j).data("inWL", l).data("listItemId", d).data("el", m);
        if (i.length === 0 || (i.length === 1 && i.first().attr("class") === "undo-remove")) {
            h.addClass("standalone");
        } else {
            h.addClass("poster");
        }
        if (this._settings.Utilities.getIsTouch()) {
            h.addClass("touch");
        }
        if (this._settings.Utilities.getIsRetina()) {
            h.addClass("retina");
        }
        h.addClass(g);
        m.data("wl-ribbon", h);
        if (l) {
            h.attr("title", "Click to remove from watchlist");
            h.addClass("inWL");
        } else {
            h.attr("title", "Click to add to watchlist");
            h.addClass("not-inWL");
        }
        m.append(h);
    };
    b.imdb.WatchlistRibbon.prototype._noWatchlist = function() {
        var f, h, e, d, g = this;
        this._listId = "none";
        for (f = 0; f < this._$elems.length; f++) {
            h = this._$elems[f].data("tconst");
            e = false;
            d = c;
            this._$elems[f].css("position", "relative");
            this._constructRibbon(this._$elems[f], h, e, d);
            this._$elems[f].off("click", ".wl-ribbon").on("click", ".wl-ribbon", function(i) {
                g._callbackRibbonClick(i);
            });
        }
    };
    b.imdb.WatchlistRibbon.prototype._triggerLogin = function() {
        if (this._settings.Utilities.getIsTouch()) {
            var d = b.location.pathname + encodeURIComponent(b.location.search);
            b.location = b.CS.loginSecureHost + "/oauth/m_login?origpath=" + d + "&ref_=m_wl_lgin";
        } else {
            a(b).trigger("initiate_login");
        }
    };
    b.imdb.WatchlistRibbon.prototype._watchlistAdd = function(d) {
        this._setStateChangingWatchList(d);
        var e = "/list/_ajax/edit";
        var f = {
            "const": d.data("tconst"),
            list_id: this._listId,
            ref_tag: this._callerName,
            list_class: "WATCHLIST"
        };
        return {
            url: e,
            data: f
        };
    };
    b.imdb.WatchlistRibbon.prototype._watchlistCreateAndAdd = function(d) {
        this._setStateChangingWatchList(d);
        var e = "/list/_ajax/watchlist_add";
        var f = {
            tconst: d.data("tconst"),
            lcn: this._callerName
        };
        return {
            url: e,
            data: f
        };
    };
    b.imdb.WatchlistRibbon.prototype._watchlistRemove = function(d) {
        this._setStateChangingWatchList(d);
        var e = "/list/_ajax/edit";
        var f = {
            action: "delete",
            list_id: this._listId,
            list_item_id: d.data("listItemId"),
            ref_tag: this._callerName,
            list_class: "WATCHLIST"
        };
        return {
            url: e,
            data: f
        };
    };
    a.fn.watchlistRibbon = function(j, e) {
        var g, f, h = a(this);
        for (f = 0; f < h.size(); f++) {
            g = a(h.get(f));
            var d = new b.imdb.WatchlistRibbon(this, j, e);
            g.data("watchlistRibbon", d);
        }
        return this;
    };
    a.fn.watchlistRibbon.Constructor = b.imdb.WatchlistRibbon;
    a.fn.undoableRibbon = function(e, f, d) {
        f = (f === c) ? '<div class="removable-wrapper"></div>' : f;
        d = (d === c) ? '<div class="undo-remove">Removed from Watchlist <p><a href="#">Undo</a></p></div>' : d;
        a(e + " > a").wrap(f);
        a(e).prepend(d);
        a(e + " .undo-remove a").on("click", function(g) {
            g.preventDefault();
            g.stopPropagation();
            a(this).parents(e).trigger("undo-remove-ribbon");
        });
        a(this).on("added-ribbon", function(h, g) {
            g.listerItem.removeClass("removed");
        });
        a(this).on("removed-ribbon", function(h, g) {
            g.listerItem.addClass("removed");
        });
        return this;
    };
})(jQuery, window);
