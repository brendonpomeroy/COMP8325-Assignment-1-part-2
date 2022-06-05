/*!
 * $dy JavaScript Library v1.7.1
 * http://$dy.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://$dy.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
(function(bb, L) {
    var au = bb.document, bu = bb.navigator, bl = bb.location;
    var a = (function() {
        var bB = function(b0, b1) {
            return new bB.fn.init(b0, b1, bW)
        }, bG = bb.$dy, bx = bb.$dy, bW, bY = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, bM = /\S/, bI = /^\s+/, bF = /\s+$/, bC = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bN = /^[\],:{}\s]*$/, bV = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, bP = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, bJ = /(?:^|:|,)(?:\s*\[)+/g, bz = /(webkit)[ \/]([\w.]+)/, bR = /(opera)(?:.*version)?[ \/]([\w.]+)/, bQ = /(msie) ([\w.]+)/, bS = /(mozilla)(?:.*? rv:([\w.]+))?/, bD = /-([a-z]|[0-9])/ig, bZ = /^-ms-/, bT = function(b0, b1) {
            return (b1 + "").toUpperCase()
        }, bX = bu.userAgent, bU, bE, e, bL = Object.prototype.toString, bH = Object.prototype.hasOwnProperty, bA = Array.prototype.push, bK = Array.prototype.slice, bO = String.prototype.trim, bv = Array.prototype.indexOf, by = {};
        bB.fn = bB.prototype = {
            constructor: bB,
            init: function(b0, b4, b3) {
                var b2, b5, b1, b6;
                if (!b0) {
                    return this
                }
                if (b0.nodeType) {
                    this.context = this[0] = b0;
                    this.length = 1;
                    return this
                }
                if (b0 === "body"&&!b4 && au.body) {
                    this.context = au;
                    this[0] = au.body;
                    this.selector = b0;
                    this.length = 1;
                    return this
                }
                if (typeof b0 === "string") {
                    if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">" && b0.length >= 3) {
                        b2 = [null, b0, null]
                    } else {
                        b2 = bY.exec(b0)
                    }
                    if (b2 && (b2[1] ||!b4)) {
                        if (b2[1]) {
                            b4 = b4 instanceof bB ? b4[0] : b4;
                            b6 = (b4 ? b4.ownerDocument || b4 : au);
                            b1 = bC.exec(b0);
                            if (b1) {
                                if (bB.isPlainObject(b4)) {
                                    b0 = [au.createElement(b1[1])];
                                    bB.fn.attr.call(b0, b4, true)
                                } else {
                                    b0 = [b6.createElement(b1[1])]
                                }
                            } else {
                                b1 = bB.buildFragment([b2[1]], [b6]);
                                b0 = (b1.cacheable ? bB.clone(b1.fragment) : b1.fragment).childNodes
                            }
                            return bB.merge(this, b0)
                        } else {
                            b5 = au.getElementById(b2[2]);
                            if (b5 && b5.parentNode) {
                                if (b5.id !== b2[2]) {
                                    return b3.find(b0)
                                }
                                this.length = 1;
                                this[0] = b5
                            }
                            this.context = au;
                            this.selector = b0;
                            return this
                        }
                    } else {
                        if (!b4 || b4.$dy) {
                            return (b4 || b3).find(b0)
                        } else {
                            return this.constructor(b4).find(b0)
                        }
                    }
                } else {
                    if (bB.isFunction(b0)) {
                        return b3.ready(b0)
                    }
                }
                if (b0.selector !== L) {
                    this.selector = b0.selector;
                    this.context = b0.context
                }
                return bB.makeArray(b0, this)
            },
            selector: "",
            $dy: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return bK.call(this, 0)
            },
            get: function(b0) {
                return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length + b0] : this[b0])
            },
            pushStack: function(b1, b3, b0) {
                var b2 = this.constructor();
                if (bB.isArray(b1)) {
                    bA.apply(b2, b1)
                } else {
                    bB.merge(b2, b1)
                }
                b2.prevObject = this;
                b2.context = this.context;
                if (b3 === "find") {
                    b2.selector = this.selector + (this.selector ? " " : "") + b0
                } else {
                    if (b3) {
                        b2.selector = this.selector + "." + b3 + "(" + b0 + ")"
                    }
                }
                return b2
            },
            each: function(b1, b0) {
                return bB.each(this, b1, b0)
            },
            ready: function(b0) {
                bB.bindReady();
                bE.add(b0);
                return this
            },
            eq: function(b0) {
                b0 =+ b0;
                return b0===-1 ? this.slice(b0) : this.slice(b0, b0 + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(bK.apply(this, arguments), "slice", bK.call(arguments).join(","))
            },
            map: function(b0) {
                return this.pushStack(bB.map(this, function(b2, b1) {
                    return b0.call(b2, b1, b2)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: bA,
            sort: [].sort,
            splice: [].splice
        };
        bB.fn.init.prototype = bB.fn;
        bB.extend = bB.fn.extend = function() {
            var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1, b3 = arguments.length, b8 = false;
            if (typeof b5 === "boolean") {
                b8 = b5;
                b5 = arguments[1] || {};
                b4 = 2
            }
            if (typeof b5 !== "object"&&!bB.isFunction(b5)) {
                b5 = {}
            }
            if (b3 === b4) {
                b5 = this;
                --b4
            }
            for (; b4 < b3; b4++) {
                if ((b9 = arguments[b4]) != null) {
                    for (b2 in b9) {
                        b0 = b5[b2];
                        b1 = b9[b2];
                        if (b5 === b1) {
                            continue
                        }
                        if (b8 && b1 && (bB.isPlainObject(b1) || (b6 = bB.isArray(b1)))) {
                            if (b6) {
                                b6 = false;
                                b7 = b0 && bB.isArray(b0) ? b0 : []
                            } else {
                                b7 = b0 && bB.isPlainObject(b0) ? b0 : {}
                            }
                            b5[b2] = bB.extend(b8, b7, b1)
                        } else {
                            if (b1 !== L) {
                                b5[b2] = b1
                            }
                        }
                    }
                }
            }
            return b5
        };
        bB.extend({
            noConflict: function(b0) {
                if (bb.$dy === bB) {
                    bb.$dyo = bx
                }
                if (b0 && bb.$dy === bB) {
                    bb.$dy = bG
                }
                return bB
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(b0) {
                if (b0) {
                    bB.readyWait++
                } else {
                    bB.ready(true)
                }
            },
            ready: function(b0) {
                if ((b0 === true&&!--bB.readyWait) || (b0 !== true&&!bB.isReady)) {
                    if (!au.body) {
                        return setTimeout(bB.ready, 1)
                    }
                    bB.isReady = true;
                    if (b0 !== true&&--bB.readyWait > 0) {
                        return 
                    }
                    bE.fireWith(au, [bB]);
                    if (bB.fn.trigger) {
                        bB(au).trigger("ready").off("ready")
                    }
                }
            },
            bindReady: function() {
                if (bE) {
                    return 
                }
                bE = bB.Callbacks("once memory");
                if (au.readyState === "complete") {
                    return setTimeout(bB.ready, 1)
                }
                if (au.addEventListener) {
                    au.addEventListener("DOMContentLoaded", e, false);
                    bb.addEventListener("load", bB.ready, false)
                } else {
                    if (au.attachEvent) {
                        au.attachEvent("onreadystatechange", e);
                        bb.attachEvent("onload", bB.ready);
                        var b0 = false;
                        try {
                            b0 = bb.frameElement == null
                        } catch (b1) {}
                        if (au.documentElement.doScroll && b0) {
                            bw()
                        }
                    }
                }
            },
            isFunction: function(b0) {
                return bB.type(b0) === "function"
            },
            isArray: Array.isArray || function(b0) {
                return bB.type(b0) === "array"
            },
            isWindow: function(b0) {
                return b0 && typeof b0 === "object" && "setInterval" in b0
            },
            isNumeric: function(b0) {
                return !isNaN(parseFloat(b0)) && isFinite(b0)
            },
            type: function(b0) {
                return b0 == null ? String(b0) : by[bL.call(b0)] || "object"
            },
            isPlainObject: function(b2) {
                if (!b2 || bB.type(b2) !== "object" || b2.nodeType || bB.isWindow(b2)) {
                    return false
                }
                try {
                    if (b2.constructor&&!bH.call(b2, "constructor")&&!bH.call(b2.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (b1) {
                    return false
                }
                var b0;
                for (b0 in b2) {}
                return b0 === L || bH.call(b2, b0)
            },
            isEmptyObject: function(b1) {
                for (var b0 in b1) {
                    return false
                }
                return true
            },
            error: function(b0) {
                throw new Error(b0)
            },
            parseJSON: function(b0) {
                if (typeof b0 !== "string" ||!b0) {
                    return null
                }
                b0 = bB.trim(b0);
                if (bb.JSON && bb.JSON.parse) {
                    return bb.JSON.parse(b0)
                }
                if (bN.test(b0.replace(bV, "@").replace(bP, "]").replace(bJ, ""))) {
                    return (new Function("return " + b0))()
                }
                bB.error("Invalid JSON: " + b0)
            },
            parseXML: function(b2) {
                var b0, b1;
                try {
                    if (bb.DOMParser) {
                        b1 = new DOMParser();
                        b0 = b1.parseFromString(b2, "text/xml")
                    } else {
                        b0 = new ActiveXObject("Microsoft.XMLDOM");
                        b0.async = "false";
                        b0.loadXML(b2)
                    }
                } catch (b3) {
                    b0 = L
                }
                if (!b0 ||!b0.documentElement || b0.getElementsByTagName("parsererror").length) {
                    bB.error("Invalid XML: " + b2)
                }
                return b0
            },
            noop: function() {},
            globalEval: function(b0) {
                if (b0 && bM.test(b0)) {
                    (bb.execScript || function(b1) {
                        bb["eval"].call(bb, b1)
                    })(b0)
                }
            },
            camelCase: function(b0) {
                return b0.replace(bZ, "ms-").replace(bD, bT)
            },
            nodeName: function(b1, b0) {
                return b1.nodeName && b1.nodeName.toUpperCase() === b0.toUpperCase()
            },
            each: function(b3, b6, b2) {
                var b1, b4 = 0, b5 = b3.length, b0 = b5 === L || bB.isFunction(b3);
                if (b2) {
                    if (b0) {
                        for (b1 in b3) {
                            if (b6.apply(b3[b1], b2) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b4 < b5;) {
                            if (b6.apply(b3[b4++], b2) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (b0) {
                        for (b1 in b3) {
                            if (b6.call(b3[b1], b1, b3[b1]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b4 < b5;) {
                            if (b6.call(b3[b4], b4, b3[b4++]) === false) {
                                break
                            }
                        }
                    }
                }
                return b3
            },
            trim: bO ? function(b0) {
                return b0 == null ? "" : bO.call(b0)
            }
            : function(b0) {
                return b0 == null ? "" : b0.toString().replace(bI, "").replace(bF, "")
            },
            makeArray: function(b3, b1) {
                var b0 = b1 || [];
                if (b3 != null) {
                    var b2 = bB.type(b3);
                    if (b3.length == null || b2 === "string" || b2 === "function" || b2 === "regexp" || bB.isWindow(b3)) {
                        bA.call(b0, b3)
                    } else {
                        bB.merge(b0, b3)
                    }
                }
                return b0
            },
            inArray: function(b2, b3, b1) {
                var b0;
                if (b3) {
                    if (bv) {
                        return bv.call(b3, b2, b1)
                    }
                    b0 = b3.length;
                    b1 = b1 ? b1 < 0 ? Math.max(0, b0 + b1) : b1 : 0;
                    for (; b1 < b0; b1++) {
                        if (b1 in b3 && b3[b1] === b2) {
                            return b1
                        }
                    }
                }
                return - 1
            },
            merge: function(b4, b2) {
                var b3 = b4.length, b1 = 0;
                if (typeof b2.length === "number") {
                    for (var b0 = b2.length; b1 < b0; b1++) {
                        b4[b3++] = b2[b1]
                    }
                } else {
                    while (b2[b1] !== L) {
                        b4[b3++] = b2[b1++]
                    }
                }
                b4.length = b3;
                return b4
            },
            grep: function(b1, b6, b0) {
                var b2 = [], b5;
                b0=!!b0;
                for (var b3 = 0, b4 = b1.length; b3 < b4; b3++) {
                    b5=!!b6(b1[b3], b3);
                    if (b0 !== b5) {
                        b2.push(b1[b3])
                    }
                }
                return b2
            },
            map: function(b0, b7, b8) {
                var b5, b6, b4 = [], b2 = 0, b1 = b0.length, b3 = b0 instanceof bB || b1 !== L && typeof b1 === "number" && ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bB.isArray(b0));
                if (b3) {
                    for (; b2 < b1; b2++) {
                        b5 = b7(b0[b2], b2, b8);
                        if (b5 != null) {
                            b4[b4.length] = b5
                        }
                    }
                } else {
                    for (b6 in b0) {
                        b5 = b7(b0[b6], b6, b8);
                        if (b5 != null) {
                            b4[b4.length] = b5
                        }
                    }
                }
                return b4.concat.apply([], b4)
            },
            guid: 1,
            proxy: function(b4, b3) {
                if (typeof b3 === "string") {
                    var b2 = b4[b3];
                    b3 = b4;
                    b4 = b2
                }
                if (!bB.isFunction(b4)) {
                    return L
                }
                var b0 = bK.call(arguments, 2), b1 = function() {
                    return b4.apply(b3, b0.concat(bK.call(arguments)))
                };
                b1.guid = b4.guid = b4.guid || b1.guid || bB.guid++;
                return b1
            },
            access: function(b0, b8, b6, b2, b5, b7) {
                var b1 = b0.length;
                if (typeof b8 === "object") {
                    for (var b3 in b8) {
                        bB.access(b0, b3, b8[b3], b2, b5, b6)
                    }
                    return b0
                }
                if (b6 !== L) {
                    b2=!b7 && b2 && bB.isFunction(b6);
                    for (var b4 = 0; b4 < b1; b4++) {
                        b5(b0[b4], b8, b2 ? b6.call(b0[b4], b4, b5(b0[b4], b8)) : b6, b7)
                    }
                    return b0
                }
                return b1 ? b5(b0[0], b8) : L
            },
            now: function() {
                return (new Date()).getTime()
            },
            uaMatch: function(b1) {
                b1 = b1.toLowerCase();
                var b0 = bz.exec(b1) || bR.exec(b1) || bQ.exec(b1) || b1.indexOf("compatible") < 0 && bS.exec(b1) || [];
                return {
                    browser: b0[1] || "",
                    version: b0[2] || "0"
                }
            },
            sub: function() {
                function b0(b3, b4) {
                    return new b0.fn.init(b3, b4)
                }
                bB.extend(true, b0, this);
                b0.superclass = this;
                b0.fn = b0.prototype = this ();
                b0.fn.constructor = b0;
                b0.sub = this.sub;
                b0.fn.init = function b1(b3, b4) {
                    if (b4 && b4 instanceof bB&&!(b4 instanceof b0)) {
                        b4 = b0(b4)
                    }
                    return bB.fn.init.call(this, b3, b4, b2)
                };
                b0.fn.init.prototype = b0.fn;
                var b2 = b0(au);
                return b0
            },
            browser: {}
        });
        bB.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b1, b0) {
            by["[object " + b0 + "]"] = b0.toLowerCase()
        });
        bU = bB.uaMatch(bX);
        if (bU.browser) {
            bB.browser[bU.browser] = true;
            bB.browser.version = bU.version
        }
        if (bB.browser.webkit) {
            bB.browser.safari = true
        }
        if (bM.test("\xA0")) {
            bI = /^[\s\xA0]+/;
            bF = /[\s\xA0]+$/
        }
        bW = bB(au);
        if (au.addEventListener) {
            e = function() {
                au.removeEventListener("DOMContentLoaded", e, false);
                bB.ready()
            }
        } else {
            if (au.attachEvent) {
                e = function() {
                    if (au.readyState === "complete") {
                        au.detachEvent("onreadystatechange", e);
                        bB.ready()
                    }
                }
            }
        }
        function bw() {
            if (bB.isReady) {
                return 
            }
            try {
                au.documentElement.doScroll("left")
            } catch (b0) {
                setTimeout(bw, 1);
                return 
            }
            bB.ready()
        }
        return bB
    })();
    var a1 = {};
    function X(e) {
        var bv = a1[e] = {}, bw, bx;
        e = e.split(/\s+/);
        for (bw = 0, bx = e.length; bw < bx; bw++) {
            bv[e[bw]] = true
        }
        return bv
    }
    a.Callbacks = function(bw) {
        bw = bw ? (a1[bw] || X(bw)) : {};
        var bB = [], bC = [], bx, by, bv, bz, bA, bE = function(bF) {
            var bG, bJ, bI, bH, bK;
            for (bG = 0, bJ = bF.length; bG < bJ; bG++) {
                bI = bF[bG];
                bH = a.type(bI);
                if (bH === "array") {
                    bE(bI)
                } else {
                    if (bH === "function") {
                        if (!bw.unique ||!bD.has(bI)) {
                            bB.push(bI)
                        }
                    }
                }
            }
        }, e = function(bG, bF) {
            bF = bF || [];
            bx=!bw.memory || [bG, bF];
            by = true;
            bA = bv || 0;
            bv = 0;
            bz = bB.length;
            for (; bB && bA < bz; bA++) {
                if (bB[bA].apply(bG, bF) === false && bw.stopOnFalse) {
                    bx = true;
                    break
                }
            }
            by = false;
            if (bB) {
                if (!bw.once) {
                    if (bC && bC.length) {
                        bx = bC.shift();
                        bD.fireWith(bx[0], bx[1])
                    }
                } else {
                    if (bx === true) {
                        bD.disable()
                    } else {
                        bB = []
                    }
                }
            }
        }, bD = {
            add: function() {
                if (bB) {
                    var bF = bB.length;
                    bE(arguments);
                    if (by) {
                        bz = bB.length
                    } else {
                        if (bx && bx !== true) {
                            bv = bF;
                            e(bx[0], bx[1])
                        }
                    }
                }
                return this
            },
            remove: function() {
                if (bB) {
                    var bF = arguments, bH = 0, bI = bF.length;
                    for (; bH < bI; bH++) {
                        for (var bG = 0; bG < bB.length; bG++) {
                            if (bF[bH] === bB[bG]) {
                                if (by) {
                                    if (bG <= bz) {
                                        bz--;
                                        if (bG <= bA) {
                                            bA--
                                        }
                                    }
                                }
                                bB.splice(bG--, 1);
                                if (bw.unique) {
                                    break
                                }
                            }
                        }
                    }
                }
                return this
            },
            has: function(bG) {
                if (bB) {
                    var bF = 0, bH = bB.length;
                    for (; bF < bH; bF++) {
                        if (bG === bB[bF]) {
                            return true
                        }
                    }
                }
                return false
            },
            empty: function() {
                bB = [];
                return this
            },
            disable: function() {
                bB = bC = bx = L;
                return this
            },
            disabled: function() {
                return !bB
            },
            lock: function() {
                bC = L;
                if (!bx || bx === true) {
                    bD.disable()
                }
                return this
            },
            locked: function() {
                return !bC
            },
            fireWith: function(bG, bF) {
                if (bC) {
                    if (by) {
                        if (!bw.once) {
                            bC.push([bG, bF])
                        }
                    } else {
                        if (!(bw.once && bx)) {
                            e(bG, bF)
                        }
                    }
                }
                return this
            },
            fire: function() {
                bD.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!bx
            }
        };
        return bD
    };
    var aI = [].slice;
    a.extend({
        Deferred: function(by) {
            var bx = a.Callbacks("once memory"), bw = a.Callbacks("once memory"), bv = a.Callbacks("memory"), e = "pending", bA = {
                resolve: bx,
                reject: bw,
                notify: bv
            }, bC = {
                done: bx.add,
                fail: bw.add,
                progress: bv.add,
                state: function() {
                    return e
                },
                isResolved: bx.fired,
                isRejected: bw.fired,
                then: function(bE, bD, bF) {
                    bB.done(bE).fail(bD).progress(bF);
                    return this
                },
                always: function() {
                    bB.done.apply(bB, arguments).fail.apply(bB, arguments);
                    return this
                },
                pipe: function(bF, bE, bD) {
                    return a.Deferred(function(bG) {
                        a.each({
                            done: [bF, "resolve"],
                            fail: [bE, "reject"],
                            progress: [bD, "notify"]
                        }, function(bI, bL) {
                            var bH = bL[0], bK = bL[1], bJ;
                            if (a.isFunction(bH)) {
                                bB[bI](function() {
                                    bJ = bH.apply(this, arguments);
                                    if (bJ && a.isFunction(bJ.promise)) {
                                        bJ.promise().then(bG.resolve, bG.reject, bG.notify)
                                    } else {
                                        bG[bK + "With"](this === bB ? bG : this, [bJ])
                                    }
                                })
                            } else {
                                bB[bI](bG[bK])
                            }
                        })
                    }).promise()
                },
                promise: function(bE) {
                    if (bE == null) {
                        bE = bC
                    } else {
                        for (var bD in bC) {
                            bE[bD] = bC[bD]
                        }
                    }
                    return bE
                }
            }, bB = bC.promise({}), bz;
            for (bz in bA) {
                bB[bz] = bA[bz].fire;
                bB[bz + "With"] = bA[bz].fireWith
            }
            bB.done(function() {
                e = "resolved"
            }, bw.disable, bv.lock).fail(function() {
                e = "rejected"
            }, bx.disable, bv.lock);
            if (by) {
                by.call(bB, bB)
            }
            return bB
        },
        when: function(bA) {
            var bx = aI.call(arguments, 0), bv = 0, e = bx.length, bB = new Array(e), bw = e, by = e, bC = e <= 1 && bA && a.isFunction(bA.promise) ? bA: a.Deferred(), bE = bC.promise();
            function bD(bF) {
                return function(bG) {
                    bx[bF] = arguments.length > 1 ? aI.call(arguments, 0) : bG;
                    if (!(--bw)) {
                        bC.resolveWith(bC, bx)
                    }
                }
            }
            function bz(bF) {
                return function(bG) {
                    bB[bF] = arguments.length > 1 ? aI.call(arguments, 0) : bG;
                    bC.notifyWith(bE, bB)
                }
            }
            if (e > 1) {
                for (; bv < e; bv++) {
                    if (bx[bv] && bx[bv].promise && a.isFunction(bx[bv].promise)) {
                        bx[bv].promise().then(bD(bv), bC.reject, bz(bv))
                    } else {
                        --bw
                    }
                }
                if (!bw) {
                    bC.resolveWith(bC, bx)
                }
            } else {
                if (bC !== bA) {
                    bC.resolveWith(bC, e ? [bA] : [])
                }
            }
            return bE
        }
    });
    a.support = (function() {
        var bJ, bI, bF, bG, bx, bE, bA, bD, bz, bK, bB, by, bw, bv = au.createElement("div"), bH = au.documentElement;
        bv.setAttribute("className", "t");
        bv.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        bI = bv.getElementsByTagName("*");
        bF = bv.getElementsByTagName("a")[0];
        if (!bI ||!bI.length ||!bF) {
            return {}
        }
        bG = au.createElement("select");
        bx = bG.appendChild(au.createElement("option"));
        bE = bv.getElementsByTagName("input")[0];
        bJ = {
            leadingWhitespace: (bv.firstChild.nodeType === 3),
            tbody: !bv.getElementsByTagName("tbody").length,
            htmlSerialize: !!bv.getElementsByTagName("link").length,
            style: /top/.test(bF.getAttribute("style")),
            hrefNormalized: (bF.getAttribute("href") === "/a"),
            opacity: /^0.55/.test(bF.style.opacity),
            cssFloat: !!bF.style.cssFloat,
            checkOn: (bE.value === "on"),
            optSelected: bx.selected,
            getSetAttribute: bv.className !== "t",
            enctype: !!au.createElement("form").enctype,
            html5Clone: au.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        bE.checked = true;
        bJ.noCloneChecked = bE.cloneNode(true).checked;
        bG.disabled = true;
        bJ.optDisabled=!bx.disabled;
        try {
            delete bv.test
        } catch (bC) {
            bJ.deleteExpando = false
        }
        if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
            bv.attachEvent("onclick", function() {
                bJ.noCloneEvent = false
            });
            bv.cloneNode(true).fireEvent("onclick")
        }
        bE = au.createElement("input");
        bE.value = "t";
        bE.setAttribute("type", "radio");
        bJ.radioValue = bE.value === "t";
        bE.setAttribute("checked", "checked");
        bv.appendChild(bE);
        bD = au.createDocumentFragment();
        bD.appendChild(bv.lastChild);
        bJ.checkClone = bD.cloneNode(true).cloneNode(true).lastChild.checked;
        bJ.appendChecked = bE.checked;
        bD.removeChild(bE);
        bD.appendChild(bv);
        bv.innerHTML = "";
        if (bb.getComputedStyle) {
            bA = au.createElement("div");
            bA.style.width = "0";
            bA.style.marginRight = "0";
            bv.style.width = "2px";
            bv.appendChild(bA);
            bJ.reliableMarginRight = (parseInt((bb.getComputedStyle(bA, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0
        }
        if (bv.attachEvent) {
            for (by in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                bB = "on" + by;
                bw = (bB in bv);
                if (!bw) {
                    bv.setAttribute(bB, "return;");
                    bw = (typeof bv[bB] === "function")
                }
                bJ[by + "Bubbles"] = bw
            }
        }
        bD.removeChild(bv);
        bD = bG = bx = bA = bv = bE = null;
        a(function() {
            var bM, bU, bV, bT, bN, bO, bL, bS, bR, e, bP, bQ = au.getElementsByTagName("body")[0];
            if (!bQ) {
                return 
            }
            bL = 1;
            bS = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
            bR = "visibility:hidden;border:0;";
            e = "style='" + bS + "border:5px solid #000;padding:0;'";
            bP = "<div " + e + "><div></div></div><table " + e + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            bM = au.createElement("div");
            bM.style.cssText = bR + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
            bQ.insertBefore(bM, bQ.firstChild);
            bv = au.createElement("div");
            bM.appendChild(bv);
            bv.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            bz = bv.getElementsByTagName("td");
            bw = (bz[0].offsetHeight === 0);
            bz[0].style.display = "";
            bz[1].style.display = "none";
            bJ.reliableHiddenOffsets = bw && (bz[0].offsetHeight === 0);
            bv.innerHTML = "";
            bv.style.width = bv.style.paddingLeft = "1px";
            a.boxModel = bJ.boxModel = bv.offsetWidth === 2;
            if (typeof bv.style.zoom !== "undefined") {
                bv.style.display = "inline";
                bv.style.zoom = 1;
                bJ.inlineBlockNeedsLayout = (bv.offsetWidth === 2);
                bv.style.display = "";
                bv.innerHTML = "<div style='width:4px;'></div>";
                bJ.shrinkWrapBlocks = (bv.offsetWidth !== 2)
            }
            bv.style.cssText = bS + bR;
            bv.innerHTML = bP;
            bU = bv.firstChild;
            bV = bU.firstChild;
            bN = bU.nextSibling.firstChild.firstChild;
            bO = {
                doesNotAddBorder: (bV.offsetTop !== 5),
                doesAddBorderForTableAndCells: (bN.offsetTop === 5)
            };
            bV.style.position = "fixed";
            bV.style.top = "20px";
            bO.fixedPosition = (bV.offsetTop === 20 || bV.offsetTop === 15);
            bV.style.position = bV.style.top = "";
            bU.style.overflow = "hidden";
            bU.style.position = "relative";
            bO.subtractsBorderForOverflowNotVisible = (bV.offsetTop===-5);
            bO.doesNotIncludeMarginInBodyOffset = (bQ.offsetTop !== bL);
            bQ.removeChild(bM);
            bv = bM = null;
            a.extend(bJ, bO)
        });
        return bJ
    })();
    var aR = /^(?:\{.*\}|\[.*\])$/, az = /([A-Z])/g;
    a.extend({
        cache: {},
        uuid: 0,
        expando: "$dy" + (a.fn.$dy + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? a.cache[e[a.expando]] : e[a.expando];
            return !!e&&!S(e)
        },
        data: function(bx, bv, bz, by) {
            if (!a.acceptData(bx)) {
                return 
            }
            var bG, bA, bD, bE = a.expando, bC = typeof bv === "string", bF = bx.nodeType, e = bF ? a.cache: bx, bw = bF ? bx[bE]: bx[bE] && bE, bB = bv === "events";
            if ((!bw ||!e[bw] || (!bB&&!by&&!e[bw].data)) && bC && bz === L) {
                return 
            }
            if (!bw) {
                if (bF) {
                    bx[bE] = bw=++a.uuid
                } else {
                    bw = bE
                }
            }
            if (!e[bw]) {
                e[bw] = {};
                if (!bF) {
                    e[bw].toJSON = a.noop
                }
            }
            if (typeof bv === "object" || typeof bv === "function") {
                if (by) {
                    e[bw] = a.extend(e[bw], bv)
                } else {
                    e[bw].data = a.extend(e[bw].data, bv)
                }
            }
            bG = bA = e[bw];
            if (!by) {
                if (!bA.data) {
                    bA.data = {}
                }
                bA = bA.data
            }
            if (bz !== L) {
                bA[a.camelCase(bv)] = bz
            }
            if (bB&&!bA[bv]) {
                return bG.events
            }
            if (bC) {
                bD = bA[bv];
                if (bD == null) {
                    bD = bA[a.camelCase(bv)]
                }
            } else {
                bD = bA
            }
            return bD
        },
        removeData: function(bx, bv, by) {
            if (!a.acceptData(bx)) {
                return 
            }
            var bB, bA, bz, bC = a.expando, bD = bx.nodeType, e = bD ? a.cache: bx, bw = bD ? bx[bC]: bC;
            if (!e[bw]) {
                return 
            }
            if (bv) {
                bB = by ? e[bw] : e[bw].data;
                if (bB) {
                    if (!a.isArray(bv)) {
                        if (bv in bB) {
                            bv = [bv]
                        } else {
                            bv = a.camelCase(bv);
                            if (bv in bB) {
                                bv = [bv]
                            } else {
                                bv = bv.split(" ")
                            }
                        }
                    }
                    for (bA = 0, bz = bv.length; bA < bz; bA++) {
                        delete bB[bv[bA]]
                    }
                    if (!(by ? S : a.isEmptyObject)(bB)) {
                        return 
                    }
                }
            }
            if (!by) {
                delete e[bw].data;
                if (!S(e[bw])) {
                    return 
                }
            }
            if (a.support.deleteExpando ||!e.setInterval) {
                delete e[bw]
            } else {
                e[bw] = null
            }
            if (bD) {
                if (a.support.deleteExpando) {
                    delete bx[bC]
                } else {
                    if (bx.removeAttribute) {
                        bx.removeAttribute(bC)
                    } else {
                        bx[bC] = null
                    }
                }
            }
        },
        _data: function(bv, e, bw) {
            return a.data(bv, e, bw, true)
        },
        acceptData: function(bv) {
            if (bv.nodeName) {
                var e = a.noData[bv.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || bv.getAttribute("classid") !== e)
                }
            }
            return true
        }
    });
    a.fn.extend({
        data: function(by, bA) {
            var bB, e, bw, bz = null;
            if (typeof by === "undefined") {
                if (this.length) {
                    bz = a.data(this[0]);
                    if (this[0].nodeType === 1&&!a._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var bx = 0, bv = e.length; bx < bv; bx++) {
                            bw = e[bx].name;
                            if (bw.indexOf("data-") === 0) {
                                bw = a.camelCase(bw.substring(5));
                                a4(this[0], bw, bz[bw])
                            }
                        }
                        a._data(this[0], "parsedAttrs", true)
                    }
                }
                return bz
            } else {
                if (typeof by === "object") {
                    return this.each(function() {
                        a.data(this, by)
                    })
                }
            }
            bB = by.split(".");
            bB[1] = bB[1] ? "." + bB[1] : "";
            if (bA === L) {
                bz = this.triggerHandler("getData" + bB[1] + "!", [bB[0]]);
                if (bz === L && this.length) {
                    bz = a.data(this[0], by);
                    bz = a4(this[0], by, bz)
                }
                return bz === L && bB[1] ? this.data(bB[0]) : bz
            } else {
                return this.each(function() {
                    var bC = a(this), bD = [bB[0], bA];
                    bC.triggerHandler("setData" + bB[1] + "!", bD);
                    a.data(this, by, bA);
                    bC.triggerHandler("changeData" + bB[1] + "!", bD)
                })
            }
        },
        removeData: function(e) {
            return this.each(function() {
                a.removeData(this, e)
            })
        }
    });
    function a4(bx, bw, by) {
        if (by === L && bx.nodeType === 1) {
            var bv = "data-" + bw.replace(az, "-$1").toLowerCase();
            by = bx.getAttribute(bv);
            if (typeof by === "string") {
                try {
                    by = by === "true" ? true : by === "false" ? false : by === "null" ? null : a.isNumeric(by) ? parseFloat(by) : aR.test(by) ? a.parseJSON(by) : by
                } catch (bz) {}
                a.data(bx, bw, by)
            } else {
                by = L
            }
        }
        return by
    }
    function S(bv) {
        for (var e in bv) {
            if (e === "data" && a.isEmptyObject(bv[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    function bi(by, bx, bA) {
        var bw = bx + "defer", bv = bx + "queue", e = bx + "mark", bz = a._data(by, bw);
        if (bz && (bA === "queue" ||!a._data(by, bv)) && (bA === "mark" ||!a._data(by, e))) {
            setTimeout(function() {
                if (!a._data(by, bv)&&!a._data(by, e)) {
                    a.removeData(by, bw, true);
                    bz.fire()
                }
            }, 0)
        }
    }
    a.extend({
        _mark: function(bv, e) {
            if (bv) {
                e = (e || "fx") + "mark";
                a._data(bv, e, (a._data(bv, e) || 0) + 1)
            }
        },
        _unmark: function(by, bx, bv) {
            if (by !== true) {
                bv = bx;
                bx = by;
                by = false
            }
            if (bx) {
                bv = bv || "fx";
                var e = bv + "mark", bw = by ? 0: ((a._data(bx, e) || 1) - 1);
                if (bw) {
                    a._data(bx, e, bw)
                } else {
                    a.removeData(bx, e, true);
                    bi(bx, bv, "mark")
                }
            }
        },
        queue: function(bv, e, bx) {
            var bw;
            if (bv) {
                e = (e || "fx") + "queue";
                bw = a._data(bv, e);
                if (bx) {
                    if (!bw || a.isArray(bx)) {
                        bw = a._data(bv, e, a.makeArray(bx))
                    } else {
                        bw.push(bx)
                    }
                }
                return bw || []
            }
        },
        dequeue: function(by, bx) {
            bx = bx || "fx";
            var bv = a.queue(by, bx), bw = bv.shift(), e = {};
            if (bw === "inprogress") {
                bw = bv.shift()
            }
            if (bw) {
                if (bx === "fx") {
                    bv.unshift("inprogress")
                }
                a._data(by, bx + ".run", e);
                bw.call(by, function() {
                    a.dequeue(by, bx)
                }, e)
            }
            if (!bv.length) {
                a.removeData(by, bx + "queue " + bx + ".run", true);
                bi(by, bx, "queue")
            }
        }
    });
    a.fn.extend({
        queue: function(e, bv) {
            if (typeof e !== "string") {
                bv = e;
                e = "fx"
            }
            if (bv === L) {
                return a.queue(this[0], e)
            }
            return this.each(function() {
                var bw = a.queue(this, e, bv);
                if (e === "fx" && bw[0] !== "inprogress") {
                    a.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                a.dequeue(this, e)
            })
        },
        delay: function(bv, e) {
            bv = a.fx ? a.fx.speeds[bv] || bv : bv;
            e = e || "fx";
            return this.queue(e, function(bx, bw) {
                var by = setTimeout(bx, bv);
                bw.stop = function() {
                    clearTimeout(by)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(bD, bw) {
            if (typeof bD !== "string") {
                bw = bD;
                bD = L
            }
            bD = bD || "fx";
            var e = a.Deferred(), bv = this, by = bv.length, bB = 1, bz = bD + "defer", bA = bD + "queue", bC = bD + "mark", bx;
            function bE() {
                if (!(--bB)) {
                    e.resolveWith(bv, [bv])
                }
            }
            while (by--) {
                if ((bx = a.data(bv[by], bz, L, true) || (a.data(bv[by], bA, L, true) || a.data(bv[by], bC, L, true)) && a.data(bv[by], bz, a.Callbacks("once memory"), true))) {
                    bB++;
                    bx.add(bE)
                }
            }
            bE();
            return e.promise()
        }
    });
    var aO = /[\n\t\r]/g, af = /\s+/, aT = /\r/g, g = /^(?:button|input)$/i, D = /^(?:button|input|object|select|textarea)$/i, l = /^a(?:rea)?$/i, an = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, F = a.support.getSetAttribute, be, aX, aE;
    a.fn.extend({
        attr: function(e, bv) {
            return a.access(this, e, bv, true, a.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                a.removeAttr(this, e)
            })
        },
        prop: function(e, bv) {
            return a.access(this, e, bv, true, a.prop)
        },
        removeProp: function(e) {
            e = a.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = L;
                    delete this[e]
                } catch (bv) {}
            })
        },
        addClass: function(by) {
            var bA, bw, bv, bx, bz, bB, e;
            if (a.isFunction(by)) {
                return this.each(function(bC) {
                    a(this).addClass(by.call(this, bC, this.className))
                })
            }
            if (by && typeof by === "string") {
                bA = by.split(af);
                for (bw = 0, bv = this.length; bw < bv; bw++) {
                    bx = this[bw];
                    if (bx.nodeType === 1) {
                        if (!bx.className && bA.length === 1) {
                            bx.className = by
                        } else {
                            bz = " " + bx.className + " ";
                            for (bB = 0, e = bA.length; bB < e; bB++) {
                                if (!~bz.indexOf(" " + bA[bB] + " ")) {
                                    bz += bA[bB] + " "
                                }
                            }
                            bx.className = a.trim(bz)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(bz) {
            var bA, bw, bv, by, bx, bB, e;
            if (a.isFunction(bz)) {
                return this.each(function(bC) {
                    a(this).removeClass(bz.call(this, bC, this.className))
                })
            }
            if ((bz && typeof bz === "string") || bz === L) {
                bA = (bz || "").split(af);
                for (bw = 0, bv = this.length; bw < bv; bw++) {
                    by = this[bw];
                    if (by.nodeType === 1 && by.className) {
                        if (bz) {
                            bx = (" " + by.className + " ").replace(aO, " ");
                            for (bB = 0, e = bA.length; bB < e; bB++) {
                                bx = bx.replace(" " + bA[bB] + " ", " ")
                            }
                            by.className = a.trim(bx)
                        } else {
                            by.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(bx, bv) {
            var bw = typeof bx, e = typeof bv === "boolean";
            if (a.isFunction(bx)) {
                return this.each(function(by) {
                    a(this).toggleClass(bx.call(this, by, this.className, bv), bv)
                })
            }
            return this.each(function() {
                if (bw === "string") {
                    var bA, bz = 0, by = a(this), bB = bv, bC = bx.split(af);
                    while ((bA = bC[bz++])) {
                        bB = e ? bB : !by.hasClass(bA);
                        by[bB ? "addClass": "removeClass"](bA)
                    }
                } else {
                    if (bw === "undefined" || bw === "boolean") {
                        if (this.className) {
                            a._data(this, "__className__", this.className)
                        }
                        this.className = this.className || bx === false ? "" : a._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(e) {
            var bx = " " + e + " ", bw = 0, bv = this.length;
            for (; bw < bv; bw++) {
                if (this[bw].nodeType === 1 && (" " + this[bw].className + " ").replace(aO, " ").indexOf(bx)>-1) {
                    return true
                }
            }
            return false
        },
        val: function(bx) {
            var e, bv, by, bw = this[0];
            if (!arguments.length) {
                if (bw) {
                    e = a.valHooks[bw.nodeName.toLowerCase()] || a.valHooks[bw.type];
                    if (e && "get" in e && (bv = e.get(bw, "value")) !== L) {
                        return bv
                    }
                    bv = bw.value;
                    return typeof bv === "string" ? bv.replace(aT, "") : bv == null ? "" : bv
                }
                return 
            }
            by = a.isFunction(bx);
            return this.each(function(bA) {
                var bz = a(this), bB;
                if (this.nodeType !== 1) {
                    return 
                }
                if (by) {
                    bB = bx.call(this, bA, bz.val())
                } else {
                    bB = bx
                }
                if (bB == null) {
                    bB = ""
                } else {
                    if (typeof bB === "number") {
                        bB += ""
                    } else {
                        if (a.isArray(bB)) {
                            bB = a.map(bB, function(bC) {
                                return bC == null ? "" : bC + ""
                            })
                        }
                    }
                }
                e = a.valHooks[this.nodeName.toLowerCase()] || a.valHooks[this.type];
                if (!e ||!("set" in e) || e.set(this, bB, "value") === L) {
                    this.value = bB
                }
            })
        }
    });
    a.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var bv = e.attributes.value;
                    return !bv || bv.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var bA, bv, bz, bx, by = e.selectedIndex, bB = [], bC = e.options, bw = e.type === "select-one";
                    if (by < 0) {
                        return null
                    }
                    bv = bw ? by : 0;
                    bz = bw ? by + 1 : bC.length;
                    for (; bv < bz; bv++) {
                        bx = bC[bv];
                        if (bx.selected && (a.support.optDisabled?!bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled ||!a.nodeName(bx.parentNode, "optgroup"))
                            ) {
                            bA = a(bx).val();
                            if (bw) {
                                return bA
                            }
                            bB.push(bA)
                        }
                    }
                    if (bw&&!bB.length && bC.length) {
                        return a(bC[by]).val()
                    }
                    return bB
                },
                set: function(bv, bw) {
                    var e = a.makeArray(bw);
                    a(bv).find("option").each(function() {
                        this.selected = a.inArray(a(this).val(), e) >= 0
                    });
                    if (!e.length) {
                        bv.selectedIndex =- 1
                    }
                    return e
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
                return 
            }
            if (bz && bx in a.attrFn) {
                return a(bA)[bx](bB)
            }
            if (typeof bA.getAttribute === "undefined") {
                return a.prop(bA, bx, bB)
            }
            by = bv !== 1 ||!a.isXMLDoc(bA);
            if (by) {
                bx = bx.toLowerCase();
                e = a.attrHooks[bx] || (an.test(bx) ? aX : be)
            }
            if (bB !== L) {
                if (bB === null) {
                    a.removeAttr(bA, bx);
                    return 
                } else {
                    if (e && "set" in e && by && (bw = e.set(bA, bB, bx)) !== L) {
                        return bw
                    } else {
                        bA.setAttribute(bx, "" + bB);
                        return bB
                    }
                }
            } else {
                if (e && "get" in e && by && (bw = e.get(bA, bx)) !== null) {
                    return bw
                } else {
                    bw = bA.getAttribute(bx);
                    return bw === null ? L : bw
                }
            }
        },
        removeAttr: function(bx, bz) {
            var by, bA, bv, e, bw = 0;
            if (bz && bx.nodeType === 1) {
                bA = bz.toLowerCase().split(af);
                e = bA.length;
                for (; bw < e; bw++) {
                    bv = bA[bw];
                    if (bv) {
                        by = a.propFix[bv] || bv;
                        a.attr(bx, bv, "");
                        bx.removeAttribute(F ? bv : by);
                        if (an.test(bv) && by in bx) {
                            bx[by] = false
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, bv) {
                    if (g.test(e.nodeName) && e.parentNode) {
                        a.error("type property can't be changed")
                    } else {
                        if (!a.support.radioValue && bv === "radio" && a.nodeName(e, "input")) {
                            var bw = e.value;
                            e.setAttribute("type", bv);
                            if (bw) {
                                e.value = bw
                            }
                            return bv
                        }
                    }
                }
            },
            value: {
                get: function(bv, e) {
                    if (be && a.nodeName(bv, "button")) {
                        return be.get(bv, e)
                    }
                    return e in bv ? bv.value : null
                },
                set: function(bv, bw, e) {
                    if (be && a.nodeName(bv, "button")) {
                        return be.set(bv, bw, e)
                    }
                    bv.value = bw
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
                return 
            }
            by = bv !== 1 ||!a.isXMLDoc(bz);
            if (by) {
                bx = a.propFix[bx] || bx;
                e = a.propHooks[bx]
            }
            if (bA !== L) {
                if (e && "set" in e && (bw = e.set(bz, bA, bx)) !== L) {
                    return bw
                } else {
                    return (bz[bx] = bA)
                }
            } else {
                if (e && "get" in e && (bw = e.get(bz, bx)) !== null) {
                    return bw
                } else {
                    return bz[bx]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(bv) {
                    var e = bv.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : D.test(bv.nodeName) || l.test(bv.nodeName) && bv.href ? 0 : L
                }
            }
        }
    });
    a.attrHooks.tabindex = a.propHooks.tabIndex;
    aX = {
        get: function(bv, e) {
            var bx, bw = a.prop(bv, e);
            return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(e)) && bx.nodeValue !== false ? e.toLowerCase() : L
        },
        set: function(bv, bx, e) {
            var bw;
            if (bx === false) {
                a.removeAttr(bv, e)
            } else {
                bw = a.propFix[e] || e;
                if (bw in bv) {
                    bv[bw] = true
                }
                bv.setAttribute(e, e.toLowerCase())
            }
            return e
        }
    };
    if (!F) {
        aE = {
            name: true,
            id: true
        };
        be = a.valHooks.button = {
            get: function(bw, bv) {
                var e;
                e = bw.getAttributeNode(bv);
                return e && (aE[bv] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : L
            },
            set: function(bw, bx, bv) {
                var e = bw.getAttributeNode(bv);
                if (!e) {
                    e = au.createAttribute(bv);
                    bw.setAttributeNode(e)
                }
                return (e.nodeValue = bx + "")
            }
        };
        a.attrHooks.tabindex.set = be.set;
        a.each(["width", "height"], function(bv, e) {
            a.attrHooks[e] = a.extend(a.attrHooks[e], {
                set: function(bw, bx) {
                    if (bx === "") {
                        bw.setAttribute(e, "auto");
                        return bx
                    }
                }
            })
        });
        a.attrHooks.contenteditable = {
            get: be.get,
            set: function(bv, bw, e) {
                if (bw === "") {
                    bw = "false"
                }
                be.set(bv, bw, e)
            }
        }
    }
    if (!a.support.hrefNormalized) {
        a.each(["href", "src", "width", "height"], function(bv, e) {
            a.attrHooks[e] = a.extend(a.attrHooks[e], {
                get: function(bx) {
                    var bw = bx.getAttribute(e, 2);
                    return bw === null ? L : bw
                }
            })
        })
    }
    if (!a.support.style) {
        a.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || L
            },
            set: function(e, bv) {
                return (e.style.cssText = "" + bv)
            }
        }
    }
    if (!a.support.optSelected) {
        a.propHooks.selected = a.extend(a.propHooks.selected, {
            get: function(bv) {
                var e = bv.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!a.support.enctype) {
        a.propFix.enctype = "encoding"
    }
    if (!a.support.checkOn) {
        a.each(["radio", "checkbox"], function() {
            a.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    a.each(["radio", "checkbox"], function() {
        a.valHooks[this] = a.extend(a.valHooks[this], {
            set: function(e, bv) {
                if (a.isArray(bv)) {
                    return (e.checked = a.inArray(a(e).val(), bv) >= 0)
                }
            }
        })
    });
    var bd = /^(?:textarea|input|select)$/i, n = /^([^\.]*)?(?:\.(.+))?$/, J = /\bhover(\.\S+)?\b/, aN = /^key/, bf = /^(?:mouse|contextmenu)|click/, T = /^(?:focusinfocus|focusoutblur)$/, U = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, Y = function(e) {
        var bv = U.exec(e);
        if (bv) {
            bv[1] = (bv[1] || "").toLowerCase();
            bv[3] = bv[3] && new RegExp("(?:^|\\s)" + bv[3] + "(?:\\s|$)")
        }
        return bv
    }, j = function(bw, e) {
        var bv = bw.attributes || {};
        return ((!e[1] || bw.nodeName.toLowerCase() === e[1]) && (!e[2] || (bv.id || {}).value === e[2]) && (!e[3] || e[3].test((bv["class"] || {}).value)))
    }, bt = function(e) {
        return a.event.special.hover ? e : e.replace(J, "mouseenter$1 mouseleave$1")
    };
    a.event = {
        add: function(bx, bC, bJ, bA, by) {
            var bD, bB, bK, bI, bH, bF, e, bG, bv, bz, bw, bE;
            if (bx.nodeType === 3 || bx.nodeType === 8 ||!bC ||!bJ ||!(bD = a._data(bx))) {
                return 
            }
            if (bJ.handler) {
                bv = bJ;
                bJ = bv.handler
            }
            if (!bJ.guid) {
                bJ.guid = a.guid++
            }
            bK = bD.events;
            if (!bK) {
                bD.events = bK = {}
            }
            bB = bD.handle;
            if (!bB) {
                bD.handle = bB = function(bL) {
                    return typeof a !== "undefined" && (!bL || a.event.triggered !== bL.type) ? a.event.dispatch.apply(bB.elem, arguments) : L
                };
                bB.elem = bx
            }
            bC = a.trim(bt(bC)).split(" ");
            for (bI = 0; bI < bC.length; bI++) {
                bH = n.exec(bC[bI]) || [];
                bF = bH[1];
                e = (bH[2] || "").split(".").sort();
                bE = a.event.special[bF] || {};
                bF = (by ? bE.delegateType : bE.bindType) || bF;
                bE = a.event.special[bF] || {};
                bG = a.extend({
                    type: bF,
                    origType: bH[1],
                    data: bA,
                    handler: bJ,
                    guid: bJ.guid,
                    selector: by,
                    quick: Y(by),
                    namespace: e.join(".")
                }, bv);
                bw = bK[bF];
                if (!bw) {
                    bw = bK[bF] = [];
                    bw.delegateCount = 0;
                    if (!bE.setup || bE.setup.call(bx, bA, e, bB) === false) {
                        if (bx.addEventListener) {
                            bx.addEventListener(bF, bB, false)
                        } else {
                            if (bx.attachEvent) {
                                bx.attachEvent("on" + bF, bB)
                            }
                        }
                    }
                }
                if (bE.add) {
                    bE.add.call(bx, bG);
                    if (!bG.handler.guid) {
                        bG.handler.guid = bJ.guid
                    }
                }
                if (by) {
                    bw.splice(bw.delegateCount++, 0, bG)
                } else {
                    bw.push(bG)
                }
                a.event.global[bF] = true
            }
            bx = null
        },
        global: {},
        remove: function(bJ, bE, bv, bH, bB) {
            var bI = a.hasData(bJ) && a._data(bJ), bF, bx, bz, bL, bC, bA, bG, bw, by, bK, bD, e;
            if (!bI ||!(bw = bI.events)) {
                return 
            }
            bE = a.trim(bt(bE || "")).split(" ");
            for (bF = 0; bF < bE.length; bF++) {
                bx = n.exec(bE[bF]) || [];
                bz = bL = bx[1];
                bC = bx[2];
                if (!bz) {
                    for (bz in bw) {
                        a.event.remove(bJ, bz + bE[bF], bv, bH, true)
                    }
                    continue
                }
                by = a.event.special[bz] || {};
                bz = (bH ? by.delegateType : by.bindType) || bz;
                bD = bw[bz] || [];
                bA = bD.length;
                bC = bC ? new RegExp("(^|\\.)" + bC.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (bG = 0; bG < bD.length; bG++) {
                    e = bD[bG];
                    if ((bB || bL === e.origType) && (!bv || bv.guid === e.guid) && (!bC || bC.test(e.namespace)) && (!bH || bH === e.selector || bH === "**" && e.selector)) {
                        bD.splice(bG--, 1);
                        if (e.selector) {
                            bD.delegateCount--
                        }
                        if (by.remove) {
                            by.remove.call(bJ, e)
                        }
                    }
                }
                if (bD.length === 0 && bA !== bD.length) {
                    if (!by.teardown || by.teardown.call(bJ, bC) === false) {
                        a.removeEvent(bJ, bz, bI.handle)
                    }
                    delete bw[bz]
                }
            }
            if (a.isEmptyObject(bw)) {
                bK = bI.handle;
                if (bK) {
                    bK.elem = null
                }
                a.removeData(bJ, ["events", "handle"], true)
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(bv, bD, bA, bJ) {
            if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
                return 
            }
            var bG = bv.type || bv, bx = [], e, bw, bC, bH, bz, by, bF, bE, bB, bI;
            if (T.test(bG + a.event.triggered)) {
                return 
            }
            if (bG.indexOf("!") >= 0) {
                bG = bG.slice(0, - 1);
                bw = true
            }
            if (bG.indexOf(".") >= 0) {
                bx = bG.split(".");
                bG = bx.shift();
                bx.sort()
            }
            if ((!bA || a.event.customEvent[bG])&&!a.event.global[bG]) {
                return 
            }
            bv = typeof bv === "object" ? bv[a.expando] ? bv : new a.Event(bG, bv) : new a.Event(bG);
            bv.type = bG;
            bv.isTrigger = true;
            bv.exclusive = bw;
            bv.namespace = bx.join(".");
            bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            by = bG.indexOf(":") < 0 ? "on" + bG : "";
            if (!bA) {
                e = a.cache;
                for (bC in e) {
                    if (e[bC].events && e[bC].events[bG]) {
                        a.event.trigger(bv, bD, e[bC].handle.elem, true)
                    }
                }
                return 
            }
            bv.result = L;
            if (!bv.target) {
                bv.target = bA
            }
            bD = bD != null ? a.makeArray(bD) : [];
            bD.unshift(bv);
            bF = a.event.special[bG] || {};
            if (bF.trigger && bF.trigger.apply(bA, bD) === false) {
                return 
            }
            bB = [[bA, bF.bindType || bG]];
            if (!bJ&&!bF.noBubble&&!a.isWindow(bA)) {
                bI = bF.delegateType || bG;
                bH = T.test(bI + bG) ? bA : bA.parentNode;
                bz = null;
                for (; bH; bH = bH.parentNode) {
                    bB.push([bH, bI]);
                    bz = bH
                }
                if (bz && bz === bA.ownerDocument) {
                    bB.push([bz.defaultView || bz.parentWindow || bb, bI])
                }
            }
            for (bC = 0; bC < bB.length&&!bv.isPropagationStopped(); bC++) {
                bH = bB[bC][0];
                bv.type = bB[bC][1];
                bE = (a._data(bH, "events") || {})[bv.type] && a._data(bH, "handle");
                if (bE) {
                    bE.apply(bH, bD)
                }
                bE = by && bH[by];
                if (bE && a.acceptData(bH) && bE.apply(bH, bD) === false) {
                    bv.preventDefault()
                }
            }
            bv.type = bG;
            if (!bJ&&!bv.isDefaultPrevented()) {
                if ((!bF._default || bF._default.apply(bA.ownerDocument, bD) === false)&&!(bG === "click" && a.nodeName(bA, "a")) && a.acceptData(bA)) {
                    if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0)&&!a.isWindow(bA)) {
                        bz = bA[by];
                        if (bz) {
                            bA[by] = null
                        }
                        a.event.triggered = bG;
                        bA[bG]();
                        a.event.triggered = L;
                        if (bz) {
                            bA[by] = bz
                        }
                    }
                }
            }
            return bv.result
        },
        dispatch: function(e) {
            e = a.event.fix(e || bb.event);
            var bz = ((a._data(this, "events") || {})[e.type] || []), bA = bz.delegateCount, bG = [].slice.call(arguments, 0), by=!e.exclusive&&!e.namespace, bH = [], bC, bB, bK, bx, bF, bE, bv, bD, bI, bw, bJ;
            bG[0] = e;
            e.delegateTarget = this;
            if (bA&&!e.target.disabled&&!(e.button && e.type === "click")) {
                bx = a(this);
                bx.context = this.ownerDocument || this;
                for (bK = e.target; bK != this; bK = bK.parentNode || this) {
                    bE = {};
                    bD = [];
                    bx[0] = bK;
                    for (bC = 0; bC < bA; bC++) {
                        bI = bz[bC];
                        bw = bI.selector;
                        if (bE[bw] === L) {
                            bE[bw] = (bI.quick ? j(bK, bI.quick) : bx.is(bw))
                        }
                        if (bE[bw]) {
                            bD.push(bI)
                        }
                    }
                    if (bD.length) {
                        bH.push({
                            elem: bK,
                            matches: bD
                        })
                    }
                }
            }
            if (bz.length > bA) {
                bH.push({
                    elem: this,
                    matches: bz.slice(bA)
                })
            }
            for (bC = 0; bC < bH.length&&!e.isPropagationStopped(); bC++) {
                bv = bH[bC];
                e.currentTarget = bv.elem;
                for (bB = 0; bB < bv.matches.length&&!e.isImmediatePropagationStopped(); bB++) {
                    bI = bv.matches[bB];
                    if (by || (!e.namespace&&!bI.namespace) || e.namespace_re && e.namespace_re.test(bI.namespace)) {
                        e.data = bI.data;
                        e.handleObj = bI;
                        bF = ((a.event.special[bI.origType] || {}).handle || bI.handler).apply(bv.elem, bG);
                        if (bF !== L) {
                            e.result = bF;
                            if (bF === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            return e.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(bv, e) {
                if (bv.which == null) {
                    bv.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return bv
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(bx, bw) {
                var by, bz, e, bv = bw.button, bA = bw.fromElement;
                if (bx.pageX == null && bw.clientX != null) {
                    by = bx.target.ownerDocument || au;
                    bz = by.documentElement;
                    e = by.body;
                    bx.pageX = bw.clientX + (bz && bz.scrollLeft || e && e.scrollLeft || 0) - (bz && bz.clientLeft || e && e.clientLeft || 0);
                    bx.pageY = bw.clientY + (bz && bz.scrollTop || e && e.scrollTop || 0) - (bz && bz.clientTop || e && e.clientTop || 0)
                }
                if (!bx.relatedTarget && bA) {
                    bx.relatedTarget = bA === bx.target ? bw.toElement : bA
                }
                if (!bx.which && bv !== L) {
                    bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)))
                }
                return bx
            }
        },
        fix: function(bw) {
            if (bw[a.expando]) {
                return bw
            }
            var bv, bz, e = bw, bx = a.event.fixHooks[bw.type] || {}, by = bx.props ? this.props.concat(bx.props): this.props;
            bw = a.Event(e);
            for (bv = by.length; bv;) {
                bz = by[--bv];
                bw[bz] = e[bz]
            }
            if (!bw.target) {
                bw.target = e.srcElement || au
            }
            if (bw.target.nodeType === 3) {
                bw.target = bw.target.parentNode
            }
            if (bw.metaKey === L) {
                bw.metaKey = bw.ctrlKey
            }
            return bx.filter ? bx.filter(bw, e) : bw
        },
        special: {
            ready: {
                setup: a.bindReady
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
                    if (a.isWindow(this)) {
                        this.onbeforeunload = e
                    }
                },
                teardown: function(bv, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        },
        simulate: function(bw, by, bx, bv) {
            var bz = a.extend(new a.Event(), bx, {
                type: bw,
                isSimulated: true,
                originalEvent: {}
            });
            if (bv) {
                a.event.trigger(bz, null, by)
            } else {
                a.event.dispatch.call(by, bz)
            }
            if (bz.isDefaultPrevented()) {
                bx.preventDefault()
            }
        }
    };
    a.event.handle = a.event.dispatch;
    a.removeEvent = au.removeEventListener ? function(bv, e, bw) {
        if (bv.removeEventListener) {
            bv.removeEventListener(e, bw, false)
        }
    } : function(bv, e, bw) {
        if (bv.detachEvent) {
            bv.detachEvent("on" + e, bw)
        }
    };
    a.Event = function(bv, e) {
        if (!(this instanceof a.Event)) {
            return new a.Event(bv, e)
        }
        if (bv && bv.type) {
            this.originalEvent = bv;
            this.type = bv.type;
            this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? i : bk
        } else {
            this.type = bv
        }
        if (e) {
            a.extend(this, e)
        }
        this.timeStamp = bv && bv.timeStamp || a.now();
        this[a.expando] = true
    };
    function bk() {
        return false
    }
    function i() {
        return true
    }
    a.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = i;
            var bv = this.originalEvent;
            if (!bv) {
                return 
            }
            if (bv.preventDefault) {
                bv.preventDefault()
            } else {
                bv.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = i;
            var bv = this.originalEvent;
            if (!bv) {
                return 
            }
            if (bv.stopPropagation) {
                bv.stopPropagation()
            }
            bv.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i;
            this.stopPropagation()
        },
        isDefaultPrevented: bk,
        isPropagationStopped: bk,
        isImmediatePropagationStopped: bk
    };
    a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(bv, e) {
        a.event.special[bv] = {
            delegateType: e,
            bindType: e,
            handle: function(bz) {
                var bB = this, bA = bz.relatedTarget, by = bz.handleObj, bw = by.selector, bx;
                if (!bA || (bA !== bB&&!a.contains(bB, bA))) {
                    bz.type = by.origType;
                    bx = by.handler.apply(this, arguments);
                    bz.type = e
                }
                return bx
            }
        }
    });
    if (!a.support.submitBubbles) {
        a.event.special.submit = {
            setup: function() {
                if (a.nodeName(this, "form")) {
                    return false
                }
                a.event.add(this, "click._submit keypress._submit", function(bx) {
                    var bw = bx.target, bv = a.nodeName(bw, "input") || a.nodeName(bw, "button") ? bw.form: L;
                    if (bv&&!bv._submit_attached) {
                        a.event.add(bv, "submit._submit", function(e) {
                            if (this.parentNode&&!e.isTrigger) {
                                a.event.simulate("submit", this.parentNode, e, true)
                            }
                        });
                        bv._submit_attached = true
                    }
                })
            },
            teardown: function() {
                if (a.nodeName(this, "form")) {
                    return false
                }
                a.event.remove(this, "._submit")
            }
        }
    }
    if (!a.support.changeBubbles) {
        a.event.special.change = {
            setup: function() {
                if (bd.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        a.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        a.event.add(this, "click._change", function(e) {
                            if (this._just_changed&&!e.isTrigger) {
                                this._just_changed = false;
                                a.event.simulate("change", this, e, true)
                            }
                        })
                    }
                    return false
                }
                a.event.add(this, "beforeactivate._change", function(bw) {
                    var bv = bw.target;
                    if (bd.test(bv.nodeName)&&!bv._change_attached) {
                        a.event.add(bv, "change._change", function(e) {
                            if (this.parentNode&&!e.isSimulated&&!e.isTrigger) {
                                a.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bv._change_attached = true
                    }
                })
            },
            handle: function(bv) {
                var e = bv.target;
                if (this !== e || bv.isSimulated || bv.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return bv.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                a.event.remove(this, "._change");
                return bd.test(this.nodeName)
            }
        }
    }
    if (!a.support.focusinBubbles) {
        a.each({
            focus: "focusin",
            blur: "focusout"
        }, function(bx, e) {
            var bv = 0, bw = function(by) {
                a.event.simulate(e, by.target, a.event.fix(by), true)
            };
            a.event.special[e] = {
                setup: function() {
                    if (bv++===0) {
                        au.addEventListener(bx, bw, true)
                    }
                },
                teardown: function() {
                    if (--bv === 0) {
                        au.removeEventListener(bx, bw, true)
                    }
                }
            }
        })
    }
    a.fn.extend({
        on: function(bw, e, bz, by, bv) {
            var bA, bx;
            if (typeof bw === "object") {
                if (typeof e !== "string") {
                    bz = e;
                    e = L
                }
                for (bx in bw) {
                    this.on(bx, e, bz, bw[bx], bv)
                }
                return this
            }
            if (bz == null && by == null) {
                by = e;
                bz = e = L
            } else {
                if (by == null) {
                    if (typeof e === "string") {
                        by = bz;
                        bz = L
                    } else {
                        by = bz;
                        bz = e;
                        e = L
                    }
                }
            }
            if (by === false) {
                by = bk
            } else {
                if (!by) {
                    return this
                }
            }
            if (bv === 1) {
                bA = by;
                by = function(bB) {
                    a().off(bB);
                    return bA.apply(this, arguments)
                };
                by.guid = bA.guid || (bA.guid = a.guid++)
            }
            return this.each(function() {
                a.event.add(this, bw, by, bz, e)
            })
        },
        one: function(bv, e, bx, bw) {
            return this.on.call(this, bv, e, bx, bw, 1)
        },
        off: function(bw, e, by) {
            if (bw && bw.preventDefault && bw.handleObj) {
                var bv = bw.handleObj;
                a(bw.delegateTarget).off(bv.namespace ? bv.type + "." + bv.namespace : bv.type, bv.selector, bv.handler);
                return this
            }
            if (typeof bw === "object") {
                for (var bx in bw) {
                    this.off(bx, e, bw[bx])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                by = e;
                e = L
            }
            if (by === false) {
                by = bk
            }
            return this.each(function() {
                a.event.remove(this, bw, by, e)
            })
        },
        bind: function(e, bw, bv) {
            return this.on(e, null, bw, bv)
        },
        unbind: function(e, bv) {
            return this.off(e, null, bv)
        },
        live: function(e, bw, bv) {
            a(this.context).on(e, this.selector, bw, bv);
            return this
        },
        die: function(e, bv) {
            a(this.context).off(e, this.selector || "**", bv);
            return this
        },
        delegate: function(e, bv, bx, bw) {
            return this.on(bv, e, bx, bw)
        },
        undelegate: function(e, bv, bw) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(bv, e, bw)
        },
        trigger: function(e, bv) {
            return this.each(function() {
                a.event.trigger(e, bv, this)
            })
        },
        triggerHandler: function(e, bv) {
            if (this[0]) {
                return a.event.trigger(e, bv, this[0], true)
            }
        },
        toggle: function(bx) {
            var bv = arguments, e = bx.guid || a.guid++, bw = 0, by = function(bz) {
                var bA = (a._data(this, "lastToggle" + bx.guid) || 0)%bw;
                a._data(this, "lastToggle" + bx.guid, bA + 1);
                bz.preventDefault();
                return bv[bA].apply(this, arguments) || false
            };
            by.guid = e;
            while (bw < bv.length) {
                bv[bw++].guid = e
            }
            return this.click(by)
        },
        hover: function(e, bv) {
            return this.mouseenter(e).mouseleave(bv || e)
        }
    });
    a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(bv, e) {
        a.fn[e] = function(bx, bw) {
            if (bw == null) {
                bw = bx;
                bx = null
            }
            return arguments.length > 0 ? this.on(e, null, bx, bw) : this.trigger(e)
        };
        if (a.attrFn) {
            a.attrFn[e] = true
        }
        if (aN.test(e)) {
            a.event.fixHooks[e] = a.event.keyHooks
        }
        if (bf.test(e)) {
            a.event.fixHooks[e] = a.event.mouseHooks
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
            return 0
        });
        var by = function(bV, e, bY, bZ) {
            bY = bY || [];
            e = e || au;
            var b1 = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return []
            }
            if (!bV || typeof bV !== "string") {
                return bY
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
                        break
                    }
                }
            }
            while (bS);
            if (bW.length > 1 && bD.exec(bV)) {
                if (bW.length === 2 && bE.relative[bW[0]]) {
                    b3 = bM(bW[0] + bW[1], e, bZ)
                } else {
                    b3 = bE.relative[bW[0]] ? [e] : by(bW.shift(), e);
                    while (bW.length) {
                        bV = bW.shift();
                        if (bE.relative[bV]) {
                            bV += bW.shift()
                        }
                        b3 = bM(bV, b3, bZ)
                    }
                }
            } else {
                if (!bZ && bW.length > 1 && e.nodeType === 9&&!bT && bE.match.ID.test(bW[0])&&!bE.match.ID.test(bW[bW.length - 1])) {
                    b2 = by.find(bW.shift(), e, bT);
                    e = b2.expr ? by.filter(b2.expr, b2.set)[0] : b2.set[0]
                }
                if (e) {
                    b2 = bZ ? {
                        expr: bW.pop(),
                        set: bF(bZ)
                    } : by.find(bW.pop(), bW.length === 1 && (bW[0] === "~" || bW[0] === "+") && e.parentNode ? e.parentNode : e, bT);
                    b3 = b2.expr ? by.filter(b2.expr, b2.set) : b2.set;
                    if (bW.length > 0) {
                        b6 = bF(b3)
                    } else {
                        bU = false
                    }
                    while (bW.length) {
                        b5 = bW.pop();
                        b4 = b5;
                        if (!bE.relative[b5]) {
                            b5 = ""
                        } else {
                            b4 = bW.pop()
                        }
                        if (b4 == null) {
                            b4 = e
                        }
                        bE.relative[b5](b6, b4, bT)
                    }
                } else {
                    b6 = bW = []
                }
            }
            if (!b6) {
                b6 = b3
            }
            if (!b6) {
                by.error(b5 || bV)
            }
            if (bL.call(b6) === "[object Array]") {
                if (!bU) {
                    bY.push.apply(bY, b6)
                } else {
                    if (e && e.nodeType === 1) {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && (b6[bX] === true || b6[bX].nodeType === 1 && by.contains(e, b6[bX]))) {
                                bY.push(b3[bX])
                            }
                        }
                    } else {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && b6[bX].nodeType === 1) {
                                bY.push(b3[bX])
                            }
                        }
                    }
                }
            } else {
                bF(b6, bY)
            }
            if (bR) {
                by(bR, b1, bY, bZ);
                by.uniqueSort(bY)
            }
            return bY
        };
        by.uniqueSort = function(bR) {
            if (bJ) {
                bB = bA;
                bR.sort(bJ);
                if (bB) {
                    for (var e = 1; e < bR.length; e++) {
                        if (bR[e] === bR[e - 1]) {
                            bR.splice(e--, 1)
                        }
                    }
                }
            }
            return bR
        };
        by.matches = function(e, bR) {
            return by(e, null, null, bR)
        };
        by.matchesSelector = function(e, bR) {
            return by(bR, null, null, [e]).length > 0
        };
        by.find = function(bX, e, bY) {
            var bW, bS, bU, bT, bV, bR;
            if (!bX) {
                return []
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
                            break
                        }
                    }
                }
            }
            if (!bW) {
                bW = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return {
                set: bW,
                expr: bX
            }
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
                            continue
                        }
                        if (bY === b5) {
                            b5 = []
                        }
                        if (bE.preFilter[bZ]) {
                            bW = bE.preFilter[bZ](bW, bY, b4, b5, bU, bX);
                            if (!bW) {
                                e = b6 = true
                            } else {
                                if (bW === true) {
                                    continue
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
                                            e = true
                                        } else {
                                            bY[bV] = false
                                        }
                                    } else {
                                        if (b2) {
                                            b5.push(b3);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (b6 !== L) {
                            if (!b4) {
                                bY = b5
                            }
                            b1 = b1.replace(bE.match[bZ], "");
                            if (!e) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (b1 === bS) {
                    if (e == null) {
                        by.error(b1)
                    } else {
                        break
                    }
                }
                bS = b1
            }
            return bY
        };
        by.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var bw = by.getText = function(bU) {
            var bS, bT, e = bU.nodeType, bR = "";
            if (e) {
                if (e === 1 || e === 9) {
                    if (typeof bU.textContent === "string") {
                        return bU.textContent
                    } else {
                        if (typeof bU.innerText === "string") {
                            return bU.innerText.replace(bO, "")
                        } else {
                            for (bU = bU.firstChild; bU; bU = bU.nextSibling) {
                                bR += bw(bU)
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return bU.nodeValue
                    }
                }
            } else {
                for (bS = 0; (bT = bU[bS]); bS++) {
                    if (bT.nodeType !== 8) {
                        bR += bw(bT)
                    }
                }
            }
            return bR
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
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(bW, bR) {
                    var bT = typeof bR === "string", bV = bT&&!bQ.test(bR), bX = bT&&!bV;
                    if (bV) {
                        bR = bR.toLowerCase()
                    }
                    for (var bS = 0, e = bW.length, bU; bS < e; bS++) {
                        if ((bU = bW[bS])) {
                            while ((bU = bU.previousSibling) && bU.nodeType !== 1) {}
                            bW[bS] = bX || bU && bU.nodeName.toLowerCase() === bR ? bU || false : bU === bR
                        }
                    }
                    if (bX) {
                        by.filter(bR, bW, true)
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
                                bW[bS] = bT.nodeName.toLowerCase() === bR ? bT : false
                            }
                        }
                    } else {
                        for (; bS < e; bS++) {
                            bV = bW[bS];
                            if (bV) {
                                bW[bS] = bU ? bV.parentNode : bV.parentNode === bR
                            }
                        }
                        if (bU) {
                            by.filter(bR, bW, true)
                        }
                    }
                },
                "": function(bT, bR, bV) {
                    var bU, bS = bI++, e = bN;
                    if (typeof bR === "string"&&!bQ.test(bR)) {
                        bR = bR.toLowerCase();
                        bU = bR;
                        e = bv
                    }
                    e("parentNode", bR, bS, bT, bU, bV)
                },
                "~": function(bT, bR, bV) {
                    var bU, bS = bI++, e = bN;
                    if (typeof bR === "string"&&!bQ.test(bR)) {
                        bR = bR.toLowerCase();
                        bU = bR;
                        e = bv
                    }
                    e("previousSibling", bR, bS, bT, bU, bV)
                }
            },
            find: {
                ID: function(bR, bS, bT) {
                    if (typeof bS.getElementById !== "undefined"&&!bT) {
                        var e = bS.getElementById(bR[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function(bS, bV) {
                    if (typeof bV.getElementsByName !== "undefined") {
                        var bR = [], bU = bV.getElementsByName(bS[1]);
                        for (var bT = 0, e = bU.length; bT < e; bT++) {
                            if (bU[bT].getAttribute("name") === bS[1]) {
                                bR.push(bU[bT])
                            }
                        }
                        return bR.length === 0 ? null : bR
                    }
                },
                TAG: function(e, bR) {
                    if (typeof bR.getElementsByTagName !== "undefined") {
                        return bR.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function(bT, bR, bS, e, bW, bX) {
                    bT = " " + bT[1].replace(bK, "") + " ";
                    if (bX) {
                        return bT
                    }
                    for (var bU = 0, bV; (bV = bR[bU]) != null; bU++) {
                        if (bV) {
                            if (bW^(bV.className && (" " + bV.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bT) >= 0)) {
                                if (!bS) {
                                    e.push(bV)
                                }
                            } else {
                                if (bS) {
                                    bR[bU] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function(e) {
                    return e[1].replace(bK, "")
                },
                TAG: function(bR, e) {
                    return bR[1].replace(bK, "").toLowerCase()
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            by.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var bR = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" ||!/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (bR[1] + (bR[2] || 1)) - 0;
                        e[3] = bR[3] - 0
                    } else {
                        if (e[2]) {
                            by.error(e[0])
                        }
                    }
                    e[0] = bI++;
                    return e
                },
                ATTR: function(bU, bR, bS, e, bV, bW) {
                    var bT = bU[1] = bU[1].replace(bK, "");
                    if (!bW && bE.attrMap[bT]) {
                        bU[1] = bE.attrMap[bT]
                    }
                    bU[4] = (bU[4] || bU[5] || "").replace(bK, "");
                    if (bU[2] === "~=") {
                        bU[4] = " " + bU[4] + " "
                    }
                    return bU
                },
                PSEUDO: function(bU, bR, bS, e, bV) {
                    if (bU[1] === "not") {
                        if ((bH.exec(bU[3]) || "").length > 1 || /^\w/.test(bU[3])) {
                            bU[3] = by(bU[3], null, null, bR)
                        } else {
                            var bT = by.filter(bU[3], bR, bS, true^bV);
                            if (!bS) {
                                e.push.apply(e, bT)
                            }
                            return false
                        }
                    } else {
                        if (bE.match.POS.test(bU[0]) || bE.match.CHILD.test(bU[0])) {
                            return true
                        }
                    }
                    return bU
                },
                POS: function(e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === false && e.type !== "hidden"
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    return e.checked === true
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(bS, bR, e) {
                    return !!by(e[3], bS).length
                },
                header: function(e) {
                    return (/h\d/i).test(e.nodeName)
                },
                text: function(bS) {
                    var e = bS.getAttribute("type"), bR = bS.type;
                    return bS.nodeName.toLowerCase() === "input" && "text" === bR && (e === bR || e === null)
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                },
                submit: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === bR.type
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                },
                reset: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === bR.type
                },
                button: function(bR) {
                    var e = bR.nodeName.toLowerCase();
                    return e === "input" && "button" === bR.type || e === "button"
                },
                input: function(e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(bR, e) {
                    return e === 0
                },
                last: function(bS, bR, e, bT) {
                    return bR === bT.length - 1
                },
                even: function(bR, e) {
                    return e%2 === 0
                },
                odd: function(bR, e) {
                    return e%2 === 1
                },
                lt: function(bS, bR, e) {
                    return bR < e[3] - 0
                },
                gt: function(bS, bR, e) {
                    return bR > e[3] - 0
                },
                nth: function(bS, bR, e) {
                    return e[3] - 0 === bR
                },
                eq: function(bS, bR, e) {
                    return e[3] - 0 === bR
                }
            },
            filter: {
                PSEUDO: function(bS, bX, bW, bY) {
                    var e = bX[1], bR = bE.filters[e];
                    if (bR) {
                        return bR(bS, bW, bX, bY)
                    } else {
                        if (e === "contains") {
                            return (bS.textContent || bS.innerText || bw([bS]) || "").indexOf(bX[3]) >= 0
                        } else {
                            if (e === "not") {
                                var bT = bX[3];
                                for (var bV = 0, bU = bT.length; bV < bU; bV++) {
                                    if (bT[bV] === bS) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                by.error(e)
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
                                return false
                            }
                        }
                        if (bX === "first") {
                            return true
                        }
                        bR = bS;
                    case"last":
                        while ((bR = bR.nextSibling)) {
                            if (bR.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case"nth":
                        bT = bU[2];
                        b0 = bU[3];
                        if (bT === 1 && b0 === 0) {
                            return true
                        }
                        bW = bU[0];
                        bZ = bS.parentNode;
                        if (bZ && (bZ[bC] !== bW ||!bS.nodeIndex)) {
                            bV = 0;
                            for (bR = bZ.firstChild; bR; bR = bR.nextSibling) {
                                if (bR.nodeType === 1) {
                                    bR.nodeIndex=++bV
                                }
                            }
                            bZ[bC] = bW
                        }
                        bY = bS.nodeIndex - b0;
                        if (bT === 0) {
                            return bY === 0
                        } else {
                            return (bY%bT === 0 && bY / bT >= 0)
                        }
                    }
                },
                ID: function(bR, e) {
                    return bR.nodeType === 1 && bR.getAttribute("id") === e
                },
                TAG: function(bR, e) {
                    return (e === "*" && bR.nodeType === 1)||!!bR.nodeName && bR.nodeName.toLowerCase() === e
                },
                CLASS: function(bR, e) {
                    return (" " + (bR.className || bR.getAttribute("class")) + " ").indexOf(e)>-1
                },
                ATTR: function(bV, bT) {
                    var bS = bT[1], e = by.attr ? by.attr(bV, bS): bE.attrHandle[bS] ? bE.attrHandle[bS](bV): bV[bS] != null ? bV[bS]: bV.getAttribute(bS), bW = e + "", bU = bT[2], bR = bT[4];
                    return e == null ? bU === "!=" : !bU && by.attr ? e != null : bU === "=" ? bW === bR : bU === "*=" ? bW.indexOf(bR) >= 0 : bU === "~=" ? (" " + bW + " ").indexOf(bR) >= 0 : !bR ? bW && e !== false : bU === "!=" ? bW !== bR : bU === "^=" ? bW.indexOf(bR) === 0 : bU === "$=" ? bW.substr(bW.length - bR.length) === bR : bU === "|=" ? bW === bR || bW.substr(0, bR.length + 1) === bR + "-" : false
                },
                POS: function(bU, bR, bS, bV) {
                    var e = bR[2], bT = bE.setFilters[e];
                    if (bT) {
                        return bT(bU, bS, bR, bV)
                    }
                }
            }
        };
        var bD = bE.match.POS, bx = function(bR, e) {
            return "\\" + (e - 0 + 1)
        };
        for (var bz in bE.match) {
            bE.match[bz] = new RegExp(bE.match[bz].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bE.leftMatch[bz] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bE.match[bz].source.replace(/\\(\d+)/g, bx))
        }
        var bF = function(bR, e) {
            bR = Array.prototype.slice.call(bR, 0);
            if (e) {
                e.push.apply(e, bR);
                return e
            }
            return bR
        };
        try {
            Array.prototype.slice.call(au.documentElement.childNodes, 0)[0].nodeType
        } catch (bP) {
            bF = function(bU, bT) {
                var bS = 0, bR = bT || [];
                if (bL.call(bU) === "[object Array]") {
                    Array.prototype.push.apply(bR, bU)
                } else {
                    if (typeof bU.length === "number") {
                        for (var e = bU.length; bS < e; bS++) {
                            bR.push(bU[bS])
                        }
                    } else {
                        for (; bU[bS]; bS++) {
                            bR.push(bU[bS])
                        }
                    }
                }
                return bR
            }
        }
        var bJ, bG;
        if (au.documentElement.compareDocumentPosition) {
            bJ = function(bR, e) {
                if (bR === e) {
                    bB = true;
                    return 0
                }
                if (!bR.compareDocumentPosition ||!e.compareDocumentPosition) {
                    return bR.compareDocumentPosition?-1 : 1
                }
                return bR.compareDocumentPosition(e) & 4?-1 : 1
            }
        } else {
            bJ = function(bY, bX) {
                if (bY === bX) {
                    bB = true;
                    return 0
                } else {
                    if (bY.sourceIndex && bX.sourceIndex) {
                        return bY.sourceIndex - bX.sourceIndex
                    }
                }
                var bV, bR, bS = [], e = [], bU = bY.parentNode, bW = bX.parentNode, bZ = bU;
                if (bU === bW) {
                    return bG(bY, bX)
                } else {
                    if (!bU) {
                        return - 1
                    } else {
                        if (!bW) {
                            return 1
                        }
                    }
                }
                while (bZ) {
                    bS.unshift(bZ);
                    bZ = bZ.parentNode
                }
                bZ = bW;
                while (bZ) {
                    e.unshift(bZ);
                    bZ = bZ.parentNode
                }
                bV = bS.length;
                bR = e.length;
                for (var bT = 0; bT < bV && bT < bR; bT++) {
                    if (bS[bT] !== e[bT]) {
                        return bG(bS[bT], e[bT])
                    }
                }
                return bT === bV ? bG(bY, e[bT], - 1) : bG(bS[bT], bX, 1)
            };
            bG = function(bR, e, bS) {
                if (bR === e) {
                    return bS
                }
                var bT = bR.nextSibling;
                while (bT) {
                    if (bT === e) {
                        return - 1
                    }
                    bT = bT.nextSibling
                }
                return 1
            }
        }(function() {
            var bR = au.createElement("div"), bS = "script" + (new Date()).getTime(), e = au.documentElement;
            bR.innerHTML = "<a name='" + bS + "'/>";
            e.insertBefore(bR, e.firstChild);
            if (au.getElementById(bS)) {
                bE.find.ID = function(bU, bV, bW) {
                    if (typeof bV.getElementById !== "undefined"&&!bW) {
                        var bT = bV.getElementById(bU[1]);
                        return bT ? bT.id === bU[1] || typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id").nodeValue === bU[1] ? [bT] : L : []
                    }
                };
                bE.filter.ID = function(bV, bT) {
                    var bU = typeof bV.getAttributeNode !== "undefined" && bV.getAttributeNode("id");
                    return bV.nodeType === 1 && bU && bU.nodeValue === bT
                }
            }
            e.removeChild(bR);
            e = bR = null
        })();
        (function() {
            var e = au.createElement("div");
            e.appendChild(au.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bE.find.TAG = function(bR, bV) {
                    var bU = bV.getElementsByTagName(bR[1]);
                    if (bR[1] === "*") {
                        var bT = [];
                        for (var bS = 0; bU[bS]; bS++) {
                            if (bU[bS].nodeType === 1) {
                                bT.push(bU[bS])
                            }
                        }
                        bU = bT
                    }
                    return bU
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bE.attrHandle.href = function(bR) {
                    return bR.getAttribute("href", 2)
                }
            }
            e = null
        })();
        if (au.querySelectorAll) {
            (function() {
                var e = by, bT = au.createElement("div"), bS = "__sizzle__";
                bT.innerHTML = "<p class='TEST'></p>";
                if (bT.querySelectorAll && bT.querySelectorAll(".TEST").length === 0) {
                    return 
                }
                by = function(b4, bV, bZ, b3) {
                    bV = bV || au;
                    if (!b3&&!by.isXML(bV)) {
                        var b2 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
                        if (b2 && (bV.nodeType === 1 || bV.nodeType === 9)) {
                            if (b2[1]) {
                                return bF(bV.getElementsByTagName(b4), bZ)
                            } else {
                                if (b2[2] && bE.find.CLASS && bV.getElementsByClassName) {
                                    return bF(bV.getElementsByClassName(b2[2]), bZ)
                                }
                            }
                        }
                        if (bV.nodeType === 9) {
                            if (b4 === "body" && bV.body) {
                                return bF([bV.body], bZ)
                            } else {
                                if (b2 && b2[3]) {
                                    var bY = bV.getElementById(b2[3]);
                                    if (bY && bY.parentNode) {
                                        if (bY.id === b2[3]) {
                                            return bF([bY], bZ)
                                        }
                                    } else {
                                        return bF([], bZ)
                                    }
                                }
                            }
                            try {
                                return bF(bV.querySelectorAll(b4), bZ)
                            } catch (b0) {}
                        } else {
                            if (bV.nodeType === 1 && bV.nodeName.toLowerCase() !== "object") {
                                var bW = bV, bX = bV.getAttribute("id"), bU = bX || bS, b6 = bV.parentNode, b5 = /^\s*[+~]/.test(b4);
                                if (!bX) {
                                    bV.setAttribute("id", bU)
                                } else {
                                    bU = bU.replace(/'/g, "\\$&")
                                }
                                if (b5 && b6) {
                                    bV = bV.parentNode
                                }
                                try {
                                    if (!b5 || b6) {
                                        return bF(bV.querySelectorAll("[id='" + bU + "'] " + b4), bZ)
                                    }
                                } catch (b1) {} finally {
                                    if (!bX) {
                                        bW.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(b4, bV, bZ, b3)
                };
                for (var bR in e) {
                    by[bR] = e[bR]
                }
                bT = null
            })()
        }(function() {
            var e = au.documentElement, bS = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bS) {
                var bU=!bS.call(au.createElement("div"), "div"), bR = false;
                try {
                    bS.call(au.documentElement, "[test!='']:sizzle")
                } catch (bT) {
                    bR = true
                }
                by.matchesSelector = function(bW, bY) {
                    bY = bY.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!by.isXML(bW)) {
                        try {
                            if (bR ||!bE.match.PSEUDO.test(bY)&&!/!=/.test(bY)) {
                                var bV = bS.call(bW, bY);
                                if (bV ||!bU || bW.document && bW.document.nodeType !== 11) {
                                    return bV
                                }
                            }
                        } catch (bX) {}
                    }
                    return by(bY, null, null, [bW]).length > 0
                }
            }
        })();
        (function() {
            var e = au.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return 
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return 
            }
            bE.order.splice(1, 0, "CLASS");
            bE.find.CLASS = function(bR, bS, bT) {
                if (typeof bS.getElementsByClassName !== "undefined"&&!bT) {
                    return bS.getElementsByClassName(bR[1])
                }
            };
            e = null
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
                            break
                        }
                        if (e.nodeType === 1&&!bY) {
                            e[bC] = bV;
                            e.sizset = bT
                        }
                        if (e.nodeName.toLowerCase() === bW) {
                            bU = e;
                            break
                        }
                        e = e[bR]
                    }
                    bZ[bT] = bU
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
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!bY) {
                                e[bC] = bV;
                                e.sizset = bT
                            }
                            if (typeof bW !== "string") {
                                if (e === bW) {
                                    bU = true;
                                    break
                                }
                            } else {
                                if (by.filter(bW, [e]).length > 0) {
                                    bU = e;
                                    break
                                }
                            }
                        }
                        e = e[bR]
                    }
                    bZ[bT] = bU
                }
            }
        }
        if (au.documentElement.contains) {
            by.contains = function(bR, e) {
                return bR !== e && (bR.contains ? bR.contains(e) : true)
            }
        } else {
            if (au.documentElement.compareDocumentPosition) {
                by.contains = function(bR, e) {
                    return !!(bR.compareDocumentPosition(e) & 16)
                }
            } else {
                by.contains = function() {
                    return false
                }
            }
        }
        by.isXML = function(e) {
            var bR = (e ? e.ownerDocument || e : 0).documentElement;
            return bR ? bR.nodeName !== "HTML" : false
        };
        var bM = function(bS, e, bW) {
            var bV, bX = [], bU = "", bY = e.nodeType ? [e]: e;
            while ((bV = bE.match.PSEUDO.exec(bS))) {
                bU += bV[0];
                bS = bS.replace(bE.match.PSEUDO, "")
            }
            bS = bE.relative[bS] ? bS + "*" : bS;
            for (var bT = 0, bR = bY.length; bT < bR; bT++) {
                by(bS, bY[bT], bX, bW)
            }
            return by.filter(bU, bX)
        };
        by.attr = a.attr;
        by.selectors.attrMap = {};
        a.find = by;
        a.expr = by.selectors;
        a.expr[":"] = a.expr.filters;
        a.unique = by.uniqueSort;
        a.text = by.getText;
        a.isXMLDoc = by.isXML;
        a.contains = by.contains
    })();
    var ab = /Until$/, ap = /^(?:parents|prevUntil|prevAll)/, a9 = /,/, bp = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, H = a.expr.match.POS, ax = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    a.fn.extend({
        find: function(e) {
            var bw = this, by, bv;
            if (typeof e !== "string") {
                return a(e).filter(function() {
                    for (by = 0, bv = bw.length; by < bv; by++) {
                        if (a.contains(bw[by], this)) {
                            return true
                        }
                    }
                })
            }
            var bx = this.pushStack("", "find", e), bA, bB, bz;
            for (by = 0, bv = this.length; by < bv; by++) {
                bA = bx.length;
                a.find(e, this[by], bx);
                if (by > 0) {
                    for (bB = bA; bB < bx.length; bB++) {
                        for (bz = 0; bz < bA; bz++) {
                            if (bx[bz] === bx[bB]) {
                                bx.splice(bB--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return bx
        },
        has: function(bv) {
            var e = a(bv);
            return this.filter(function() {
                for (var bx = 0, bw = e.length; bx < bw; bx++) {
                    if (a.contains(this, e[bx])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aF(this, e, false), "not", e)
        },
        filter: function(e) {
            return this.pushStack(aF(this, e, true), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e === "string" ? H.test(e) ? a(e, this.context).index(this[0]) >= 0 : a.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(by, bx) {
            var bv = [], bw, e, bz = this[0];
            if (a.isArray(by)) {
                var bB = 1;
                while (bz && bz.ownerDocument && bz !== bx) {
                    for (bw = 0; bw < by.length; bw++) {
                        if (a(bz).is(by[bw])) {
                            bv.push({
                                selector: by[bw],
                                elem: bz,
                                level: bB
                            })
                        }
                    }
                    bz = bz.parentNode;
                    bB++
                }
                return bv
            }
            var bA = H.test(by) || typeof by !== "string" ? a(by, bx || this.context): 0;
            for (bw = 0, e = this.length; bw < e; bw++) {
                bz = this[bw];
                while (bz) {
                    if (bA ? bA.index(bz)>-1 : a.find.matchesSelector(bz, by)) {
                        bv.push(bz);
                        break
                    } else {
                        bz = bz.parentNode;
                        if (!bz ||!bz.ownerDocument || bz === bx || bz.nodeType === 11) {
                            break
                        }
                    }
                }
            }
            bv = bv.length > 1 ? a.unique(bv) : bv;
            return this.pushStack(bv, "closest", by)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : - 1
            }
            if (typeof e === "string") {
                return a.inArray(this[0], a(e))
            }
            return a.inArray(e.$dy ? e[0] : e, this)
        },
        add: function(e, bv) {
            var bx = typeof e === "string" ? a(e, bv): a.makeArray(e && e.nodeType ? [e] : e), bw = a.merge(this.get(), bx);
            return this.pushStack(C(bx[0]) || C(bw[0]) ? bw : a.unique(bw))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    function C(e) {
        return !e ||!e.parentNode || e.parentNode.nodeType === 11
    }
    a.each({
        parent: function(bv) {
            var e = bv.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function(e) {
            return a.dir(e, "parentNode")
        },
        parentsUntil: function(bv, e, bw) {
            return a.dir(bv, "parentNode", bw)
        },
        next: function(e) {
            return a.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return a.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return a.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return a.dir(e, "previousSibling")
        },
        nextUntil: function(bv, e, bw) {
            return a.dir(bv, "nextSibling", bw)
        },
        prevUntil: function(bv, e, bw) {
            return a.dir(bv, "previousSibling", bw)
        },
        siblings: function(e) {
            return a.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return a.sibling(e.firstChild)
        },
        contents: function(e) {
            return a.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : a.makeArray(e.childNodes)
        }
    }, function(e, bv) {
        a.fn[e] = function(by, bw) {
            var bx = a.map(this, bv, by);
            if (!ab.test(e)) {
                bw = by
            }
            if (bw && typeof bw === "string") {
                bx = a.filter(bw, bx)
            }
            bx = this.length > 1&&!ax[e] ? a.unique(bx) : bx;
            if ((this.length > 1 || a9.test(bw)) && ap.test(e)) {
                bx = bx.reverse()
            }
            return this.pushStack(bx, e, P.call(arguments).join(","))
        }
    });
    a.extend({
        filter: function(bw, e, bv) {
            if (bv) {
                bw = ":not(" + bw + ")"
            }
            return e.length === 1 ? a.find.matchesSelector(e[0], bw) ? [e[0]] : [] : a.find.matches(bw, e)
        },
        dir: function(bw, bv, by) {
            var e = [], bx = bw[bv];
            while (bx && bx.nodeType !== 9 && (by === L || bx.nodeType !== 1 ||!a(bx).is(by))) {
                if (bx.nodeType === 1) {
                    e.push(bx)
                }
                bx = bx[bv]
            }
            return e
        },
        nth: function(by, e, bw, bx) {
            e = e || 1;
            var bv = 0;
            for (; by; by = by[bw]) {
                if (by.nodeType === 1&&++bv === e) {
                    break
                }
            }
            return by
        },
        sibling: function(bw, bv) {
            var e = [];
            for (; bw; bw = bw.nextSibling) {
                if (bw.nodeType === 1 && bw !== bv) {
                    e.push(bw)
                }
            }
            return e
        }
    });
    function aF(bx, bw, e) {
        bw = bw || 0;
        if (a.isFunction(bw)) {
            return a.grep(bx, function(bz, by) {
                var bA=!!bw.call(bz, by, bz);
                return bA === e
            })
        } else {
            if (bw.nodeType) {
                return a.grep(bx, function(bz, by) {
                    return (bz === bw) === e
                })
            } else {
                if (typeof bw === "string") {
                    var bv = a.grep(bx, function(by) {
                        return by.nodeType === 1
                    });
                    if (bp.test(bw)) {
                        return a.filter(bw, bv, !e)
                    } else {
                        bw = a.filter(bw, bv)
                    }
                }
            }
        }
        return a.grep(bx, function(bz, by) {
            return (a.inArray(bz, bw) >= 0) === e
        })
    }
    function b(e) {
        var bw = aQ.split("|"), bv = e.createDocumentFragment();
        if (bv.createElement) {
            while (bw.length) {
                bv.createElement(bw.pop())
            }
        }
        return bv
    }
    var aQ = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", a8 = / $dy\d+="(?:\d+|null)"/g, aq = /^\s+/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, d = /<([\w:]+)/, w = /<tbody/i, W = /<|&#?\w+;/, ae = /<(?:script|style)/i, O = /<(?:script|object|embed|option|style)/i, ag = new RegExp("<(?:" + aQ + ")", "i"), o = /checked\s*(?:[^=]|=\s*.checked.)/i, bm = /\/(java|ecma)script/i, aM = /^\s*<!(?:\[CDATA\[|\-\-)/, aw = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, ac = b(au);
    aw.optgroup = aw.option;
    aw.tbody = aw.tfoot = aw.colgroup = aw.caption = aw.thead;
    aw.th = aw.td;
    if (!a.support.htmlSerialize) {
        aw._default = [1, "div<div>", "</div>"]
    }
    a.fn.extend({
        text: function(e) {
            if (a.isFunction(e)) {
                return this.each(function(bw) {
                    var bv = a(this);
                    bv.text(e.call(this, bw, bv.text()))
                })
            }
            if (typeof e !== "object" && e !== L) {
                return this.empty().append((this[0] && this[0].ownerDocument || au).createTextNode(e))
            }
            return a.text(this)
        },
        wrapAll: function(e) {
            if (a.isFunction(e)) {
                return this.each(function(bw) {
                    a(this).wrapAll(e.call(this, bw))
                })
            }
            if (this[0]) {
                var bv = a(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bv.insertBefore(this[0])
                }
                bv.map(function() {
                    var bw = this;
                    while (bw.firstChild && bw.firstChild.nodeType === 1) {
                        bw = bw.firstChild
                    }
                    return bw
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (a.isFunction(e)) {
                return this.each(function(bv) {
                    a(this).wrapInner(e.call(this, bv))
                })
            }
            return this.each(function() {
                var bv = a(this), bw = bv.contents();
                if (bw.length) {
                    bw.wrapAll(e)
                } else {
                    bv.append(e)
                }
            })
        },
        wrap: function(e) {
            var bv = a.isFunction(e);
            return this.each(function(bw) {
                a(this).wrapAll(bv ? e.call(this, bw) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!a.nodeName(this, "body")) {
                    a(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(bv) {
                    this.parentNode.insertBefore(bv, this)
                })
            } else {
                if (arguments.length) {
                    var e = a.clean(arguments);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(bv) {
                    this.parentNode.insertBefore(bv, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, a.clean(arguments));
                    return e
                }
            }
        },
        remove: function(e, bx) {
            for (var bv = 0, bw; (bw = this[bv]) != null; bv++) {
                if (!e || a.filter(e, [bw]).length) {
                    if (!bx && bw.nodeType === 1) {
                        a.cleanData(bw.getElementsByTagName("*"));
                        a.cleanData([bw])
                    }
                    if (bw.parentNode) {
                        bw.parentNode.removeChild(bw)
                    }
                }
            }
            return this
        },
        empty: function() {
            for (var e = 0, bv; (bv = this[e]) != null; e++) {
                if (bv.nodeType === 1) {
                    a.cleanData(bv.getElementsByTagName("*"))
                }
                while (bv.firstChild) {
                    bv.removeChild(bv.firstChild)
                }
            }
            return this
        },
        clone: function(bv, e) {
            bv = bv == null ? false : bv;
            e = e == null ? bv : e;
            return this.map(function() {
                return a.clone(this, bv, e)
            })
        },
        html: function(bx) {
            if (bx === L) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(a8, "") : null
            } else {
                if (typeof bx === "string"&&!ae.test(bx) && (a.support.leadingWhitespace ||!aq.test(bx))&&!aw[(d.exec(bx) || ["", ""])[1].toLowerCase()]) {
                    bx = bx.replace(R, "<$1></$2>");
                    try {
                        for (var bw = 0, bv = this.length; bw < bv; bw++) {
                            if (this[bw].nodeType === 1) {
                                a.cleanData(this[bw].getElementsByTagName("*"));
                                this[bw].innerHTML = bx
                            }
                        }
                    } catch (by) {
                        this.empty().append(bx)
                    }
                } else {
                    if (a.isFunction(bx)) {
                        this.each(function(bz) {
                            var e = a(this);
                            e.html(bx.call(this, bz, e.html()))
                        })
                    } else {
                        this.empty().append(bx)
                    }
                }
            }
            return this
        },
        replaceWith: function(e) {
            if (this[0] && this[0].parentNode) {
                if (a.isFunction(e)) {
                    return this.each(function(bx) {
                        var bw = a(this), bv = bw.html();
                        bw.replaceWith(e.call(this, bx, bv))
                    })
                }
                if (typeof e !== "string") {
                    e = a(e).detach()
                }
                return this.each(function() {
                    var bw = this.nextSibling, bv = this.parentNode;
                    a(this).remove();
                    if (bw) {
                        a(bw).before(e)
                    } else {
                        a(bv).append(e)
                    }
                })
            } else {
                return this.length ? this.pushStack(a(a.isFunction(e) ? e() : e), "replaceWith", e) : this
            }
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(bB, bF, bE) {
            var bx, by, bA, bD, bC = bB[0], bv = [];
            if (!a.support.checkClone && arguments.length === 3 && typeof bC === "string" && o.test(bC)) {
                return this.each(function() {
                    a(this).domManip(bB, bF, bE, true)
                })
            }
            if (a.isFunction(bC)) {
                return this.each(function(bH) {
                    var bG = a(this);
                    bB[0] = bC.call(this, bH, bF ? bG.html() : L);
                    bG.domManip(bB, bF, bE)
                })
            }
            if (this[0]) {
                bD = bC && bC.parentNode;
                if (a.support.parentNode && bD && bD.nodeType === 11 && bD.childNodes.length === this.length) {
                    bx = {
                        fragment: bD
                    }
                } else {
                    bx = a.buildFragment(bB, this, bv)
                }
                bA = bx.fragment;
                if (bA.childNodes.length === 1) {
                    by = bA = bA.firstChild
                } else {
                    by = bA.firstChild
                }
                if (by) {
                    bF = bF && a.nodeName(by, "tr");
                    for (var bw = 0, e = this.length, bz = e - 1; bw < e; bw++) {
                        bE.call(bF ? ba(this[bw], by) : this[bw], bx.cacheable || (e > 1 && bw < bz) ? a.clone(bA, true, true) : bA)
                    }
                }
                if (bv.length) {
                    a.each(bv, bo)
                }
            }
            return this
        }
    });
    function ba(e, bv) {
        return a.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
    }
    function t(bB, bv) {
        if (bv.nodeType !== 1 ||!a.hasData(bB)) {
            return 
        }
        var by, bx, e, bA = a._data(bB), bz = a._data(bv, bA), bw = bA.events;
        if (bw) {
            delete bz.handle;
            bz.events = {};
            for (by in bw) {
                for (bx = 0, e = bw[by].length; bx < e; bx++) {
                    a.event.add(bv, by + (bw[by][bx].namespace ? "." : "") + bw[by][bx].namespace, bw[by][bx], bw[by][bx].data)
                }
            }
        }
        if (bz.data) {
            bz.data = a.extend({}, bz.data)
        }
    }
    function ah(bv, e) {
        var bw;
        if (e.nodeType !== 1) {
            return 
        }
        if (e.clearAttributes) {
            e.clearAttributes()
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bv)
        }
        bw = e.nodeName.toLowerCase();
        if (bw === "object") {
            e.outerHTML = bv.outerHTML
        } else {
            if (bw === "input" && (bv.type === "checkbox" || bv.type === "radio")) {
                if (bv.checked) {
                    e.defaultChecked = e.checked = bv.checked
                }
                if (e.value !== bv.value) {
                    e.value = bv.value
                }
            } else {
                if (bw === "option") {
                    e.selected = bv.defaultSelected
                } else {
                    if (bw === "input" || bw === "textarea") {
                        e.defaultValue = bv.defaultValue
                    }
                }
            }
        }
        e.removeAttribute(a.expando)
    }
    a.buildFragment = function(bz, bx, bv) {
        var by, e, bw, bA, bB = bz[0];
        if (bx && bx[0]) {
            bA = bx[0].ownerDocument || bx[0]
        }
        if (!bA.createDocumentFragment) {
            bA = au
        }
        if (bz.length === 1 && typeof bB === "string" && bB.length < 512 && bA === au && bB.charAt(0) === "<"&&!O.test(bB) && (a.support.checkClone ||!o.test(bB)) && (a.support.html5Clone ||!ag.test(bB))) {
            e = true;
            bw = a.fragments[bB];
            if (bw && bw !== 1) {
                by = bw
            }
        }
        if (!by) {
            by = bA.createDocumentFragment();
            a.clean(bz, bA, by, bv)
        }
        if (e) {
            a.fragments[bB] = bw ? by : 1
        }
        return {
            fragment: by,
            cacheable: e
        }
    };
    a.fragments = {};
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, bv) {
        a.fn[e] = function(bw) {
            var bz = [], bC = a(bw), bB = this.length === 1 && this[0].parentNode;
            if (bB && bB.nodeType === 11 && bB.childNodes.length === 1 && bC.length === 1) {
                bC[bv](this[0]);
                return this
            } else {
                for (var bA = 0, bx = bC.length; bA < bx; bA++) {
                    var by = (bA > 0 ? this.clone(true) : this).get();
                    a(bC[bA])[bv](by);
                    bz = bz.concat(by)
                }
                return this.pushStack(bz, e, bC.selector)
            }
        }
    });
    function bg(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }
    function ay(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked
        }
    }
    function E(e) {
        var bv = (e.nodeName || "").toLowerCase();
        if (bv === "input") {
            ay(e)
        } else {
            if (bv !== "script" && typeof e.getElementsByTagName !== "undefined") {
                a.grep(e.getElementsByTagName("input"), ay)
            }
        }
    }
    function ak(e) {
        var bv = au.createElement("div");
        ac.appendChild(bv);
        bv.innerHTML = e.outerHTML;
        return bv.firstChild
    }
    a.extend({
        clone: function(by, bA, bw) {
            var e, bv, bx, bz = a.support.html5Clone ||!ag.test("<" + by.nodeName) ? by.cloneNode(true): ak(by);
            if ((!a.support.noCloneEvent ||!a.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11)&&!a.isXMLDoc(by)) {
                ah(by, bz);
                e = bg(by);
                bv = bg(bz);
                for (bx = 0; e[bx]; ++bx) {
                    if (bv[bx]) {
                        ah(e[bx], bv[bx])
                    }
                }
            }
            if (bA) {
                t(by, bz);
                if (bw) {
                    e = bg(by);
                    bv = bg(bz);
                    for (bx = 0; e[bx]; ++bx) {
                        t(e[bx], bv[bx])
                    }
                }
            }
            e = bv = null;
            return bz
        },
        clean: function(bw, by, bH, bA) {
            var bF;
            by = by || au;
            if (typeof by.createElement === "undefined") {
                by = by.ownerDocument || by[0] && by[0].ownerDocument || au
            }
            var bI = [], bB;
            for (var bE = 0, bz; (bz = bw[bE]) != null; bE++) {
                if (typeof bz === "number") {
                    bz += ""
                }
                if (!bz) {
                    continue
                }
                if (typeof bz === "string") {
                    if (!W.test(bz)) {
                        bz = by.createTextNode(bz)
                    } else {
                        bz = bz.replace(R, "<$1></$2>");
                        var bK = (d.exec(bz) || ["", ""])[1].toLowerCase(), bx = aw[bK] || aw._default, bD = bx[0], bv = by.createElement("div");
                        if (by === au) {
                            ac.appendChild(bv)
                        } else {
                            b(by).appendChild(bv)
                        }
                        bv.innerHTML = bx[1] + bz + bx[2];
                        while (bD--) {
                            bv = bv.lastChild
                        }
                        if (!a.support.tbody) {
                            var e = w.test(bz), bC = bK === "table"&&!e ? bv.firstChild && bv.firstChild.childNodes: bx[1] === "<table>"&&!e ? bv.childNodes: [];
                            for (bB = bC.length - 1; bB >= 0; --bB) {
                                if (a.nodeName(bC[bB], "tbody")&&!bC[bB].childNodes.length) {
                                    bC[bB].parentNode.removeChild(bC[bB])
                                }
                            }
                        }
                        if (!a.support.leadingWhitespace && aq.test(bz)) {
                            bv.insertBefore(by.createTextNode(aq.exec(bz)[0]), bv.firstChild)
                        }
                        bz = bv.childNodes
                    }
                }
                var bG;
                if (!a.support.appendChecked) {
                    if (bz[0] && typeof(bG = bz.length) === "number") {
                        for (bB = 0; bB < bG; bB++) {
                            E(bz[bB])
                        }
                    } else {
                        E(bz)
                    }
                }
                if (bz.nodeType) {
                    bI.push(bz)
                } else {
                    bI = a.merge(bI, bz)
                }
            }
            if (bH) {
                bF = function(bL) {
                    return !bL.type || bm.test(bL.type)
                };
                for (bE = 0; bI[bE]; bE++) {
                    if (bA && a.nodeName(bI[bE], "script") && (!bI[bE].type || bI[bE].type.toLowerCase() === "text/javascript")) {
                        bA.push(bI[bE].parentNode ? bI[bE].parentNode.removeChild(bI[bE]) : bI[bE])
                    } else {
                        if (bI[bE].nodeType === 1) {
                            var bJ = a.grep(bI[bE].getElementsByTagName("script"), bF);
                            bI.splice.apply(bI, [bE + 1, 0].concat(bJ))
                        }
                        bH.appendChild(bI[bE])
                    }
                }
            }
            return bI
        },
        cleanData: function(bv) {
            var by, bw, e = a.cache, bB = a.event.special, bA = a.support.deleteExpando;
            for (var bz = 0, bx; (bx = bv[bz]) != null; bz++) {
                if (bx.nodeName && a.noData[bx.nodeName.toLowerCase()]) {
                    continue
                }
                bw = bx[a.expando];
                if (bw) {
                    by = e[bw];
                    if (by && by.events) {
                        for (var bC in by.events) {
                            if (bB[bC]) {
                                a.event.remove(bx, bC)
                            } else {
                                a.removeEvent(bx, bC, by.handle)
                            }
                        }
                        if (by.handle) {
                            by.handle.elem = null
                        }
                    }
                    if (bA) {
                        delete bx[a.expando]
                    } else {
                        if (bx.removeAttribute) {
                            bx.removeAttribute(a.expando)
                        }
                    }
                    delete e[bw]
                }
            }
        }
    });
    function bo(e, bv) {
        if (bv.src) {
            a.ajax({
                url: bv.src,
                async: false,
                dataType: "script"
            })
        } else {
            a.globalEval((bv.text || bv.textContent || bv.innerHTML || "").replace(aM, "/*$0*/"))
        }
        if (bv.parentNode) {
            bv.parentNode.removeChild(bv)
        }
    }
    var aj = /alpha\([^)]*\)/i, at = /opacity=([^)]*)/, z = /([A-Z]|^ms)/g, bc = /^-?\d+(?:px)?$/i, bn = /^-?\d/, I = /^([\-+])=([\-+.\de]+)/, a6 = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, am = ["Left", "Right"], a0 = ["Top", "Bottom"], Z, aH, aW;
    a.fn.css = function(e, bv) {
        if (arguments.length === 2 && bv === L) {
            return this
        }
        return a.access(this, e, bv, true, function(bx, bw, by) {
            return by !== L ? a.style(bx, bw, by) : a.css(bx, bw)
        })
    };
    a.extend({
        cssHooks: {
            opacity: {
                get: function(bw, bv) {
                    if (bv) {
                        var e = Z(bw, "opacity", "opacity");
                        return e === "" ? "1" : e
                    } else {
                        return bw.style.opacity
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
            "float": a.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(bx, bw, bD, by) {
            if (!bx || bx.nodeType === 3 || bx.nodeType === 8 ||!bx.style) {
                return 
            }
            var bB, bC, bz = a.camelCase(bw), bv = bx.style, bE = a.cssHooks[bz];
            bw = a.cssProps[bz] || bz;
            if (bD !== L) {
                bC = typeof bD;
                if (bC === "string" && (bB = I.exec(bD))) {
                    bD = ( + (bB[1] + 1)*+bB[2]) + parseFloat(a.css(bx, bw));
                    bC = "number"
                }
                if (bD == null || bC === "number" && isNaN(bD)) {
                    return 
                }
                if (bC === "number"&&!a.cssNumber[bz]) {
                    bD += "px"
                }
                if (!bE ||!("set" in bE) || (bD = bE.set(bx, bD)) !== L) {
                    try {
                        bv[bw] = bD
                    } catch (bA) {}
                }
            } else {
                if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== L) {
                    return bB
                }
                return bv[bw]
            }
        },
        css: function(by, bx, bv) {
            var bw, e;
            bx = a.camelCase(bx);
            e = a.cssHooks[bx];
            bx = a.cssProps[bx] || bx;
            if (bx === "cssFloat") {
                bx = "float"
            }
            if (e && "get" in e && (bw = e.get(by, true, bv)) !== L) {
                return bw
            } else {
                if (Z) {
                    return Z(by, bx)
                }
            }
        },
        swap: function(bx, bw, by) {
            var e = {};
            for (var bv in bw) {
                e[bv] = bx.style[bv];
                bx.style[bv] = bw[bv]
            }
            by.call(bx);
            for (bv in bw) {
                bx.style[bv] = e[bv]
            }
        }
    });
    a.curCSS = a.css;
    a.each(["height", "width"], function(bv, e) {
        a.cssHooks[e] = {
            get: function(by, bx, bw) {
                var bz;
                if (bx) {
                    if (by.offsetWidth !== 0) {
                        return p(by, e, bw)
                    } else {
                        a.swap(by, a6, function() {
                            bz = p(by, e, bw)
                        })
                    }
                    return bz
                }
            },
            set: function(bw, bx) {
                if (bc.test(bx)) {
                    bx = parseFloat(bx);
                    if (bx >= 0) {
                        return bx + "px"
                    }
                } else {
                    return bx
                }
            }
        }
    });
    if (!a.support.opacity) {
        a.cssHooks.opacity = {
            get: function(bv, e) {
                return at.test((e && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
            },
            set: function(by, bz) {
                var bx = by.style, bv = by.currentStyle, e = a.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")": "", bw = bv && bv.filter || bx.filter || "";
                bx.zoom = 1;
                if (bz >= 1 && a.trim(bw.replace(aj, "")) === "") {
                    bx.removeAttribute("filter");
                    if (bv&&!bv.filter) {
                        return 
                    }
                }
                bx.filter = aj.test(bw) ? bw.replace(aj, e) : bw + " " + e
            }
        }
    }
    a(function() {
        if (!a.support.reliableMarginRight) {
            a.cssHooks.marginRight = {
                get: function(bw, bv) {
                    var e;
                    a.swap(bw, {
                        display: "inline-block"
                    }, function() {
                        if (bv) {
                            e = Z(bw, "margin-right", "marginRight")
                        } else {
                            e = bw.style.marginRight
                        }
                    });
                    return e
                }
            }
        }
    });
    if (au.defaultView && au.defaultView.getComputedStyle) {
        aH = function(by, bw) {
            var bv, bx, e;
            bw = bw.replace(z, "-$1").toLowerCase();
            if ((bx = by.ownerDocument.defaultView) && (e = bx.getComputedStyle(by, null))) {
                bv = e.getPropertyValue(bw);
                if (bv === ""&&!a.contains(by.ownerDocument.documentElement, by)) {
                    bv = a.style(by, bw)
                }
            }
            return bv
        }
    }
    if (au.documentElement.currentStyle) {
        aW = function(bz, bw) {
            var bA, e, by, bv = bz.currentStyle && bz.currentStyle[bw], bx = bz.style;
            if (bv === null && bx && (by = bx[bw])) {
                bv = by
            }
            if (!bc.test(bv) && bn.test(bv)) {
                bA = bx.left;
                e = bz.runtimeStyle && bz.runtimeStyle.left;
                if (e) {
                    bz.runtimeStyle.left = bz.currentStyle.left
                }
                bx.left = bw === "fontSize" ? "1em" : (bv || 0);
                bv = bx.pixelLeft + "px";
                bx.left = bA;
                if (e) {
                    bz.runtimeStyle.left = e
                }
            }
            return bv === "" ? "auto" : bv
        }
    }
    Z = aH || aW;
    function p(by, bw, bv) {
        var bA = bw === "width" ? by.offsetWidth: by.offsetHeight, bz = bw === "width" ? am: a0, bx = 0, e = bz.length;
        if (bA > 0) {
            if (bv !== "border") {
                for (; bx < e; bx++) {
                    if (!bv) {
                        bA -= parseFloat(a.css(by, "padding" + bz[bx])) || 0
                    }
                    if (bv === "margin") {
                        bA += parseFloat(a.css(by, bv + bz[bx])) || 0
                    } else {
                        bA -= parseFloat(a.css(by, "border" + bz[bx] + "Width")) || 0
                    }
                }
            }
            return bA + "px"
        }
        bA = Z(by, bw, bw);
        if (bA < 0 || bA == null) {
            bA = by.style[bw] || 0
        }
        bA = parseFloat(bA) || 0;
        if (bv) {
            for (; bx < e; bx++) {
                bA += parseFloat(a.css(by, "padding" + bz[bx])) || 0;
                if (bv !== "padding") {
                    bA += parseFloat(a.css(by, "border" + bz[bx] + "Width")) || 0
                }
                if (bv === "margin") {
                    bA += parseFloat(a.css(by, bv + bz[bx])) || 0
                }
            }
        }
        return bA + "px"
    }
    if (a.expr && a.expr.filters) {
        a.expr.filters.hidden = function(bw) {
            var bv = bw.offsetWidth, e = bw.offsetHeight;
            return (bv === 0 && e === 0) || (!a.support.reliableHiddenOffsets && ((bw.style && bw.style.display) || a.css(bw, "display")) === "none")
        };
        a.expr.filters.visible = function(e) {
            return !a.expr.filters.hidden(e)
        }
    }
    var k = /%20/g, ao = /\[\]$/, bs = /\r?\n/g, bq = /#.*$/, aC = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, aY = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, aL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, aP = /^(?:GET|HEAD)$/, c = /^\/\//, M = /\?/, a5 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, q = /^(?:select|textarea)/i, h = /\s+/, br = /([?&])_=[^&]*/, K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, A = a.fn.load, aa = {}, r = {}, aD, s, aU = ["*/"] + ["*"];
    try {
        aD = bl.href
    } catch (av) {
        aD = au.createElement("a");
        aD.href = "";
        aD = aD.href
    }
    s = K.exec(aD.toLowerCase()) || [];
    function f(e) {
        return function(by, bA) {
            if (typeof by !== "string") {
                bA = by;
                by = "*"
            }
            if (a.isFunction(bA)) {
                var bx = by.toLowerCase().split(h), bw = 0, bz = bx.length, bv, bB, bC;
                for (; bw < bz; bw++) {
                    bv = bx[bw];
                    bC = /^\+/.test(bv);
                    if (bC) {
                        bv = bv.substr(1) || "*"
                    }
                    bB = e[bv] = e[bv] || [];
                    bB[bC ? "unshift": "push"](bA)
                }
            }
        }
    }
    function aV(bv, bE, bz, bD, bB, bx) {
        bB = bB || bE.dataTypes[0];
        bx = bx || {};
        bx[bB] = true;
        var bA = bv[bB], bw = 0, e = bA ? bA.length: 0, by = (bv === aa), bC;
        for (; bw < e && (by ||!bC); bw++) {
            bC = bA[bw](bE, bz, bD);
            if (typeof bC === "string") {
                if (!by || bx[bC]) {
                    bC = L
                } else {
                    bE.dataTypes.unshift(bC);
                    bC = aV(bv, bE, bz, bD, bC, bx)
                }
            }
        }
        if ((by ||!bC)&&!bx["*"]) {
            bC = aV(bv, bE, bz, bD, "*", bx)
        }
        return bC
    }
    function al(bw, bx) {
        var bv, e, by = a.ajaxSettings.flatOptions || {};
        for (bv in bx) {
            if (bx[bv] !== L) {
                (by[bv] ? bw : (e || (e = {})))[bv] = bx[bv]
            }
        }
        if (e) {
            a.extend(true, bw, e)
        }
    }
    a.fn.extend({
        load: function(bw, bz, bA) {
            if (typeof bw !== "string" && A) {
                return A.apply(this, arguments)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var by = bw.indexOf(" ");
            if (by >= 0) {
                var e = bw.slice(by, bw.length);
                bw = bw.slice(0, by)
            }
            var bx = "GET";
            if (bz) {
                if (a.isFunction(bz)) {
                    bA = bz;
                    bz = L
                } else {
                    if (typeof bz === "object") {
                        bz = a.param(bz, a.ajaxSettings.traditional);
                        bx = "POST"
                    }
                }
            }
            var bv = this;
            a.ajax({
                url: bw,
                type: bx,
                dataType: "html",
                data: bz,
                complete: function(bC, bB, bD) {
                    bD = bC.responseText;
                    if (bC.isResolved()) {
                        bC.done(function(bE) {
                            bD = bE
                        });
                        bv.html(e ? a("<div>").append(bD.replace(a5, "")).find(e) : bD)
                    }
                    if (bA) {
                        bv.each(bA, [bD, bB, bC])
                    }
                }
            });
            return this
        },
        serialize: function() {
            return a.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? a.makeArray(this.elements) : this
            }).filter(function() {
                return this.name&&!this.disabled && (this.checked || q.test(this.nodeName) || aY.test(this.type))
            }).map(function(e, bv) {
                var bw = a(this).val();
                return bw == null ? null : a.isArray(bw) ? a.map(bw, function(by, bx) {
                    return {
                        name: bv.name,
                        value: by.replace(bs, "\r\n")
                    }
                }) : {
                    name: bv.name,
                    value: bw.replace(bs, "\r\n")
                }
            }).get()
        }
    });
    a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, bv) {
        a.fn[bv] = function(bw) {
            return this.on(bv, bw)
        }
    });
    a.each(["get", "post"], function(e, bv) {
        a[bv] = function(bw, by, bz, bx) {
            if (a.isFunction(by)) {
                bx = bx || bz;
                bz = by;
                by = L
            }
            return a.ajax({
                type: bv,
                url: bw,
                data: by,
                success: bz,
                dataType: bx
            })
        }
    });
    a.extend({
        getScript: function(e, bv) {
            return a.get(e, L, bv, "script")
        },
        getJSON: function(e, bv, bw) {
            return a.get(e, bv, bw, "json")
        },
        ajaxSetup: function(bv, e) {
            if (e) {
                al(bv, a.ajaxSettings)
            } else {
                e = bv;
                bv = a.ajaxSettings
            }
            al(bv, e);
            return bv
        },
        ajaxSettings: {
            url: aD,
            isLocal: aL.test(s[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": aU
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
                "* text": bb.String,
                "text html": true,
                "text json": a.parseJSON,
                "text xml": a.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: f(aa),
        ajaxTransport: f(r),
        ajax: function(bz, bx) {
            if (typeof bz === "object") {
                bx = bz;
                bz = L
            }
            bx = bx || {};
            var bD = a.ajaxSetup({}, bx), bS = bD.context || bD, bG = bS !== bD && (bS.nodeType || bS instanceof a) ? a(bS): a.event, bR = a.Deferred(), bN = a.Callbacks("once memory"), bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0, bw, bK, bJ = {
                readyState: 0,
                setRequestHeader: function(bT, bU) {
                    if (!bA) {
                        var e = bT.toLowerCase();
                        bT = bO[e] = bO[e] || bT;
                        bH[bT] = bU
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return bA === 2 ? bQ : null
                },
                getResponseHeader: function(bT) {
                    var e;
                    if (bA === 2) {
                        if (!by) {
                            by = {};
                            while ((e = aC.exec(bQ))) {
                                by[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = by[bT.toLowerCase()]
                    }
                    return e === L ? null : e
                },
                overrideMimeType: function(e) {
                    if (!bA) {
                        bD.mimeType = e
                    }
                    return this
                },
                abort: function(e) {
                    e = e || "abort";
                    if (bL) {
                        bL.abort(e)
                    }
                    bF(0, e);
                    return this
                }
            };
            function bF(bZ, bU, b0, bW) {
                if (bA === 2) {
                    return 
                }
                bA = 2;
                if (bE) {
                    clearTimeout(bE)
                }
                bL = L;
                bQ = bW || "";
                bJ.readyState = bZ > 0 ? 4 : 0;
                var bT, b4, b3, bX = bU, bY = b0 ? bj(bD, bJ, b0): L, bV, b2;
                if (bZ >= 200 && bZ < 300 || bZ === 304) {
                    if (bD.ifModified) {
                        if ((bV = bJ.getResponseHeader("Last-Modified"))) {
                            a.lastModified[bC] = bV
                        }
                        if ((b2 = bJ.getResponseHeader("Etag"))) {
                            a.etag[bC] = b2
                        }
                    }
                    if (bZ === 304) {
                        bX = "notmodified";
                        bT = true
                    } else {
                        try {
                            b4 = G(bD, bY);
                            bX = "success";
                            bT = true
                        } catch (b1) {
                            bX = "parsererror";
                            b3 = b1
                        }
                    }
                } else {
                    b3 = bX;
                    if (!bX || bZ) {
                        bX = "error";
                        if (bZ < 0) {
                            bZ = 0
                        }
                    }
                }
                bJ.status = bZ;
                bJ.statusText = "" + (bU || bX);
                if (bT) {
                    bR.resolveWith(bS, [b4, bX, bJ])
                } else {
                    bR.rejectWith(bS, [bJ, bX, b3])
                }
                bJ.statusCode(bB);
                bB = L;
                if (bw) {
                    bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4: b3])
                }
                bN.fireWith(bS, [bJ, bX]);
                if (bw) {
                    bG.trigger("ajaxComplete", [bJ, bD]);
                    if (!(--a.active)) {
                        a.event.trigger("ajaxStop")
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
                            bB[e] = [bB[e], bT[e]]
                        }
                    } else {
                        e = bT[bJ.status];
                        bJ.then(e, e)
                    }
                }
                return this
            };
            bD.url = ((bz || bD.url) + "").replace(bq, "").replace(c, s[1] + "//");
            bD.dataTypes = a.trim(bD.dataType || "*").toLowerCase().split(h);
            if (bD.crossDomain == null) {
                bI = K.exec(bD.url.toLowerCase());
                bD.crossDomain=!!(bI && (bI[1] != s[1] || bI[2] != s[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (s[3] || (s[1] === "http:" ? 80 : 443))))
            }
            if (bD.data && bD.processData && typeof bD.data !== "string") {
                bD.data = a.param(bD.data, bD.traditional)
            }
            aV(aa, bD, bx, bJ);
            if (bA === 2) {
                return false
            }
            bw = bD.global;
            bD.type = bD.type.toUpperCase();
            bD.hasContent=!aP.test(bD.type);
            if (bw && a.active++===0) {
                a.event.trigger("ajaxStart")
            }
            if (!bD.hasContent) {
                if (bD.data) {
                    bD.url += (M.test(bD.url) ? "&" : "?") + bD.data;
                    delete bD.data
                }
                bC = bD.url;
                if (bD.cache === false) {
                    var bv = a.now(), bP = bD.url.replace(br, "$1_=" + bv);
                    bD.url = bP + ((bP === bD.url) ? (M.test(bD.url) ? "&" : "?") + "_=" + bv : "")
                }
            }
            if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
                bJ.setRequestHeader("Content-Type", bD.contentType)
            }
            if (bD.ifModified) {
                bC = bC || bD.url;
                if (a.lastModified[bC]) {
                    bJ.setRequestHeader("If-Modified-Since", a.lastModified[bC])
                }
                if (a.etag[bC]) {
                    bJ.setRequestHeader("If-None-Match", a.etag[bC])
                }
            }
            bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aU + "; q=0.01" : "") : bD.accepts["*"]);
            for (bK in bD.headers) {
                bJ.setRequestHeader(bK, bD.headers[bK])
            }
            if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
                bJ.abort();
                return false
            }
            for (bK in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                bJ[bK](bD[bK])
            }
            bL = aV(r, bD, bx, bJ);
            if (!bL) {
                bF( - 1, "No Transport")
            } else {
                bJ.readyState = 1;
                if (bw) {
                    bG.trigger("ajaxSend", [bJ, bD])
                }
                if (bD.async && bD.timeout > 0) {
                    bE = setTimeout(function() {
                        bJ.abort("timeout")
                    }, bD.timeout)
                }
                try {
                    bA = 1;
                    bL.send(bH, bF)
                } catch (bM) {
                    if (bA < 2) {
                        bF( - 1, bM)
                    } else {
                        throw bM
                    }
                }
            }
            return bJ
        },
        param: function(e, bw) {
            var bv = [], by = function(bz, bA) {
                bA = a.isFunction(bA) ? bA() : bA;
                bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA)
            };
            if (bw === L) {
                bw = a.ajaxSettings.traditional
            }
            if (a.isArray(e) || (e.$dy&&!a.isPlainObject(e))) {
                a.each(e, function() {
                    by(this.name, this.value)
                })
            } else {
                for (var bx in e) {
                    v(bx, e[bx], bw, by)
                }
            }
            return bv.join("&").replace(k, "+")
        }
    });
    function v(bw, by, bv, bx) {
        if (a.isArray(by)) {
            a.each(by, function(bA, bz) {
                if (bv || ao.test(bw)) {
                    bx(bw, bz)
                } else {
                    v(bw + "[" + (typeof bz === "object" || a.isArray(bz) ? bA : "") + "]", bz, bv, bx)
                }
            })
        } else {
            if (!bv && by != null && typeof by === "object") {
                for (var e in by) {
                    v(bw + "[" + e + "]", by[e], bv, bx)
                }
            } else {
                bx(bw, by)
            }
        }
    }
    a.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    function bj(bD, bC, bz) {
        var bv = bD.contents, bB = bD.dataTypes, bw = bD.responseFields, by, bA, bx, e;
        for (bA in bw) {
            if (bA in bz) {
                bC[bw[bA]] = bz[bA]
            }
        }
        while (bB[0] === "*") {
            bB.shift();
            if (by === L) {
                by = bD.mimeType || bC.getResponseHeader("content-type")
            }
        }
        if (by) {
            for (bA in bv) {
                if (bv[bA] && bv[bA].test(by)) {
                    bB.unshift(bA);
                    break
                }
            }
        }
        if (bB[0] in bz) {
            bx = bB[0]
        } else {
            for (bA in bz) {
                if (!bB[0] || bD.converters[bA + " " + bB[0]]) {
                    bx = bA;
                    break
                }
                if (!e) {
                    e = bA
                }
            }
            bx = bx || e
        }
        if (bx) {
            if (bx !== bB[0]) {
                bB.unshift(bx)
            }
            return bz[bx]
        }
    }
    function G(bH, bz) {
        if (bH.dataFilter) {
            bz = bH.dataFilter(bz, bH.dataType)
        }
        var bD = bH.dataTypes, bG = {}, bA, bE, bw = bD.length, bB, bC = bD[0], bx, by, bF, bv, e;
        for (bA = 1; bA < bw; bA++) {
            if (bA === 1) {
                for (bE in bH.converters) {
                    if (typeof bE === "string") {
                        bG[bE.toLowerCase()] = bH.converters[bE]
                    }
                }
            }
            bx = bC;
            bC = bD[bA];
            if (bC === "*") {
                bC = bx
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
                                        bF = e
                                    } else {
                                        if (e === true) {
                                            bF = bv
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(bF || e)) {
                        a.error("No conversion from " + by.replace(" ", " to "))
                    }
                    if (bF !== true) {
                        bz = bF ? bF(bz) : e(bv(bz))
                    }
                }
            }
        }
        return bz
    }
    var aB = a.now(), u = /(\=)\?(&|$)|\?\?/i;
    a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return a.expando + "_" + (aB++)
        }
    });
    a.ajaxPrefilter("json jsonp", function(bD, bA, bC) {
        var bx = bD.contentType === "application/x-www-form-urlencoded" && (typeof bD.data === "string");
        if (bD.dataTypes[0] === "jsonp" || bD.jsonp !== false && (u.test(bD.url) || bx && u.test(bD.data))) {
            var bB, bw = bD.jsonpCallback = a.isFunction(bD.jsonpCallback) ? bD.jsonpCallback(): bD.jsonpCallback, bz = bb[bw], e = bD.url, by = bD.data, bv = "$1" + bw + "$2";
            if (bD.jsonp !== false) {
                e = e.replace(u, bv);
                if (bD.url === e) {
                    if (bx) {
                        by = by.replace(u, bv)
                    }
                    if (bD.data === by) {
                        e += (/\?/.test(e) ? "&" : "?") + bD.jsonp + "=" + bw
                    }
                }
            }
            bD.url = e;
            bD.data = by;
            bb[bw] = function(bE) {
                bB = [bE]
            };
            bC.always(function() {
                bb[bw] = bz;
                if (bB && a.isFunction(bz)) {
                    bb[bw](bB[0])
                }
            });
            bD.converters["script json"] = function() {
                if (!bB) {
                    a.error(bw + " was not called")
                }
                return bB[0]
            };
            bD.dataTypes[0] = "json";
            return "script"
        }
    });
    a.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                a.globalEval(e);
                return e
            }
        }
    });
    a.ajaxPrefilter("script", function(e) {
        if (e.cache === L) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    a.ajaxTransport("script", function(bw) {
        if (bw.crossDomain) {
            var e, bv = au.head || au.getElementsByTagName("head")[0] || au.documentElement;
            return {
                send: function(bx, by) {
                    e = au.createElement("script");
                    e.async = "async";
                    if (bw.scriptCharset) {
                        e.charset = bw.scriptCharset
                    }
                    e.src = bw.url;
                    e.onload = e.onreadystatechange = function(bA, bz) {
                        if (bz ||!e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bv && e.parentNode) {
                                bv.removeChild(e)
                            }
                            e = L;
                            if (!bz) {
                                by(200, "success")
                            }
                        }
                    };
                    bv.insertBefore(e, bv.firstChild)
                },
                abort: function() {
                    if (e) {
                        e.onload(0, 1)
                    }
                }
            }
        }
    });
    var B = bb.ActiveXObject ? function() {
        for (var e in N) {
            N[e](0, 1)
        }
    }
    : false, y = 0, N;
    function aK() {
        try {
            return new bb.XMLHttpRequest()
        } catch (bv) {}
    }
    function ai() {
        try {
            return new bb.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bv) {}
    }
    a.ajaxSettings.xhr = bb.ActiveXObject ? function() {
        return !this.isLocal && aK() || ai()
    } : aK;
    (function(e) {
        a.extend(a.support, {
            ajax: !!e,
            cors: !!e && ("withCredentials" in e)
        })
    })(a.ajaxSettings.xhr());
    if (a.support.ajax) {
        a.ajaxTransport(function(e) {
            if (!e.crossDomain || a.support.cors) {
                var bv;
                return {
                    send: function(bB, bw) {
                        var bA = e.xhr(), bz, by;
                        if (e.username) {
                            bA.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            bA.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (by in e.xhrFields) {
                                bA[by] = e.xhrFields[by]
                            }
                        }
                        if (e.mimeType && bA.overrideMimeType) {
                            bA.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain&&!bB["X-Requested-With"]) {
                            bB["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (by in bB) {
                                bA.setRequestHeader(by, bB[by])
                            }
                        } catch (bx) {}
                        bA.send((e.hasContent && e.data) || null);
                        bv = function(bK, bE) {
                            var bF, bD, bC, bI, bH;
                            try {
                                if (bv && (bE || bA.readyState === 4)) {
                                    bv = L;
                                    if (bz) {
                                        bA.onreadystatechange = a.noop;
                                        if (B) {
                                            delete N[bz]
                                        }
                                    }
                                    if (bE) {
                                        if (bA.readyState !== 4) {
                                            bA.abort()
                                        }
                                    } else {
                                        bF = bA.status;
                                        bC = bA.getAllResponseHeaders();
                                        bI = {};
                                        bH = bA.responseXML;
                                        if (bH && bH.documentElement) {
                                            bI.xml = bH
                                        }
                                        bI.text = bA.responseText;
                                        try {
                                            bD = bA.statusText
                                        } catch (bJ) {
                                            bD = ""
                                        }
                                        if (!bF && e.isLocal&&!e.crossDomain) {
                                            bF = bI.text ? 200 : 404
                                        } else {
                                            if (bF === 1223) {
                                                bF = 204
                                            }
                                        }
                                    }
                                }
                            } catch (bG) {
                                if (!bE) {
                                    bw( - 1, bG)
                                }
                            }
                            if (bI) {
                                bw(bF, bD, bI, bC)
                            }
                        };
                        if (!e.async || bA.readyState === 4) {
                            bv()
                        } else {
                            bz=++y;
                            if (B) {
                                if (!N) {
                                    N = {};
                                    a(bb).unload(B)
                                }
                                N[bz] = bv
                            }
                            bA.onreadystatechange = bv
                        }
                    },
                    abort: function() {
                        if (bv) {
                            bv(0, 1)
                        }
                    }
                }
            }
        })
    }
    var Q = {}, a7, m, aA = /^(?:toggle|show|hide)$/, aS = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, a2, aG = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], a3;
    a.fn.extend({
        show: function(bx, bA, bz) {
            var bw, by;
            if (bx || bx === 0) {
                return this.animate(aZ("show", 3), bx, bA, bz)
            } else {
                for (var bv = 0, e = this.length; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = bw.style.display;
                        if (!a._data(bw, "olddisplay") && by === "none") {
                            by = bw.style.display = ""
                        }
                        if (by === "" && a.css(bw, "display") === "none") {
                            a._data(bw, "olddisplay", x(bw.nodeName))
                        }
                    }
                }
                for (bv = 0; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = bw.style.display;
                        if (by === "" || by === "none") {
                            bw.style.display = a._data(bw, "olddisplay") || ""
                        }
                    }
                }
                return this
            }
        },
        hide: function(bx, bA, bz) {
            if (bx || bx === 0) {
                return this.animate(aZ("hide", 3), bx, bA, bz)
            } else {
                var bw, by, bv = 0, e = this.length;
                for (; bv < e; bv++) {
                    bw = this[bv];
                    if (bw.style) {
                        by = a.css(bw, "display");
                        if (by !== "none"&&!a._data(bw, "olddisplay")) {
                            a._data(bw, "olddisplay", by)
                        }
                    }
                }
                for (bv = 0; bv < e; bv++) {
                    if (this[bv].style) {
                        this[bv].style.display = "none"
                    }
                }
                return this
            }
        },
        _toggle: a.fn.toggle,
        toggle: function(bw, bv, bx) {
            var e = typeof bw === "boolean";
            if (a.isFunction(bw) && a.isFunction(bv)) {
                this._toggle.apply(this, arguments)
            } else {
                if (bw == null || e) {
                    this.each(function() {
                        var by = e ? bw: a(this).is(":hidden");
                        a(this)[by ? "show": "hide"]()
                    })
                } else {
                    this.animate(aZ("toggle", 3), bw, bv, bx)
                }
            }
            return this
        },
        fadeTo: function(e, bx, bw, bv) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: bx
            }, e, bw, bv)
        },
        animate: function(bz, bw, by, bx) {
            var e = a.speed(bw, by, bx);
            if (a.isEmptyObject(bz)) {
                return this.each(e.complete, [false])
            }
            bz = a.extend({}, bz);
            function bv() {
                if (e.queue === false) {
                    a._mark(this)
                }
                var bE = a.extend({}, e), bK = this.nodeType === 1, bI = bK && a(this).is(":hidden"), bB, bF, bD, bJ, bH, bC, bG, bL, bA;
                bE.animatedProperties = {};
                for (bD in bz) {
                    bB = a.camelCase(bD);
                    if (bD !== bB) {
                        bz[bB] = bz[bD];
                        delete bz[bD]
                    }
                    bF = bz[bB];
                    if (a.isArray(bF)) {
                        bE.animatedProperties[bB] = bF[1];
                        bF = bz[bB] = bF[0]
                    } else {
                        bE.animatedProperties[bB] = bE.specialEasing && bE.specialEasing[bB] || bE.easing || "swing"
                    }
                    if (bF === "hide" && bI || bF === "show"&&!bI) {
                        return bE.complete.call(this)
                    }
                    if (bK && (bB === "height" || bB === "width")) {
                        bE.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (a.css(this, "display") === "inline" && a.css(this, "float") === "none") {
                            if (!a.support.inlineBlockNeedsLayout || x(this.nodeName) === "inline") {
                                this.style.display = "inline-block"
                            } else {
                                this.style.zoom = 1
                            }
                        }
                    }
                }
                if (bE.overflow != null) {
                    this.style.overflow = "hidden"
                }
                for (bD in bz) {
                    bJ = new a.fx(this, bE, bD);
                    bF = bz[bD];
                    if (aA.test(bF)) {
                        bA = a._data(this, "toggle" + bD) || (bF === "toggle" ? bI ? "show" : "hide" : 0);
                        if (bA) {
                            a._data(this, "toggle" + bD, bA === "show" ? "hide" : "show");
                            bJ[bA]()
                        } else {
                            bJ[bF]()
                        }
                    } else {
                        bH = aS.exec(bF);
                        bC = bJ.cur();
                        if (bH) {
                            bG = parseFloat(bH[2]);
                            bL = bH[3] || (a.cssNumber[bD] ? "" : "px");
                            if (bL !== "px") {
                                a.style(this, bD, (bG || 1) + bL);
                                bC = ((bG || 1) / bJ.cur()) * bC;
                                a.style(this, bD, bC + bL)
                            }
                            if (bH[1]) {
                                bG = ((bH[1] === "-="?-1 : 1) * bG) + bC
                            }
                            bJ.custom(bC, bG, bL)
                        } else {
                            bJ.custom(bC, bF, "")
                        }
                    }
                }
                return true
            }
            return e.queue === false ? this.each(bv) : this.queue(e.queue, bv)
        },
        stop: function(bw, bv, e) {
            if (typeof bw !== "string") {
                e = bv;
                bv = bw;
                bw = L
            }
            if (bv && bw !== false) {
                this.queue(bw || "fx", [])
            }
            return this.each(function() {
                var bx, by = false, bA = a.timers, bz = a._data(this);
                if (!e) {
                    a._unmark(true, this)
                }
                function bB(bE, bF, bD) {
                    var bC = bF[bD];
                    a.removeData(bE, bD, true);
                    bC.stop(e)
                }
                if (bw == null) {
                    for (bx in bz) {
                        if (bz[bx] && bz[bx].stop && bx.indexOf(".run") === bx.length - 4) {
                            bB(this, bz, bx)
                        }
                    }
                } else {
                    if (bz[bx = bw + ".run"] && bz[bx].stop) {
                        bB(this, bz, bx)
                    }
                }
                for (bx = bA.length; bx--;) {
                    if (bA[bx].elem === this && (bw == null || bA[bx].queue === bw)) {
                        if (e) {
                            bA[bx](true)
                        } else {
                            bA[bx].saveState()
                        }
                        by = true;
                        bA.splice(bx, 1)
                    }
                }
                if (!(e && by)) {
                    a.dequeue(this, bw)
                }
            })
        }
    });
    function bh() {
        setTimeout(ar, 0);
        return (a3 = a.now())
    }
    function ar() {
        a3 = L
    }
    function aZ(bv, e) {
        var bw = {};
        a.each(aG.concat.apply([], aG.slice(0, e)), function() {
            bw[this] = bv
        });
        return bw
    }
    a.each({
        slideDown: aZ("show", 1),
        slideUp: aZ("hide", 1),
        slideToggle: aZ("toggle", 1),
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
        a.fn[e] = function(bw, by, bx) {
            return this.animate(bv, bw, by, bx)
        }
    });
    a.extend({
        speed: function(bw, bx, bv) {
            var e = bw && typeof bw === "object" ? a.extend({}, bw): {
                complete: bv ||!bv && bx || a.isFunction(bw) && bw,
                duration: bw,
                easing: bv && bx || bx&&!a.isFunction(bx) && bx
            };
            e.duration = a.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in a.fx.speeds ? a.fx.speeds[e.duration] : a.fx.speeds._default;
            if (e.queue == null || e.queue === true) {
                e.queue = "fx"
            }
            e.old = e.complete;
            e.complete = function(by) {
                if (a.isFunction(e.old)) {
                    e.old.call(this)
                }
                if (e.queue) {
                    a.dequeue(this, e.queue)
                } else {
                    if (by !== false) {
                        a._unmark(this)
                    }
                }
            };
            return e
        },
        easing: {
            linear: function(bw, bx, e, bv) {
                return e + bv * bw
            },
            swing: function(bw, bx, e, bv) {
                return (( - Math.cos(bw * Math.PI) / 2) + 0.5) * bv + e
            }
        },
        timers: [],
        fx: function(bv, e, bw) {
            this.options = e;
            this.elem = bv;
            this.prop = bw;
            e.orig = e.orig || {}
        }
    });
    a.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(a.fx.step[this.prop] || a.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, bv = a.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bv))?!bv || bv === "auto" ? 0 : bv : e
        },
        custom: function(bz, by, bx) {
            var e = this, bw = a.fx;
            this.startTime = a3 || bh();
            this.end = by;
            this.now = this.start = bz;
            this.pos = this.state = 0;
            this.unit = bx || this.unit || (a.cssNumber[this.prop] ? "" : "px");
            function bv(bA) {
                return e.step(bA)
            }
            bv.queue = this.options.queue;
            bv.elem = this.elem;
            bv.saveState = function() {
                if (e.options.hide && a._data(e.elem, "fxshow" + e.prop) === L) {
                    a._data(e.elem, "fxshow" + e.prop, e.start)
                }
            };
            if (bv() && a.timers.push(bv)&&!a2) {
                a2 = setInterval(bw.tick, bw.interval)
            }
        },
        show: function() {
            var e = a._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || a.style(this.elem, this.prop);
            this.options.show = true;
            if (e !== L) {
                this.custom(this.cur(), e)
            } else {
                this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
            }
            a(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = a._data(this.elem, "fxshow" + this.prop) || a.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(by) {
            var bA, bB, bv, bx = a3 || bh(), e = true, bz = this.elem, bw = this.options;
            if (by || bx >= bw.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                bw.animatedProperties[this.prop] = true;
                for (bA in bw.animatedProperties) {
                    if (bw.animatedProperties[bA] !== true) {
                        e = false
                    }
                }
                if (e) {
                    if (bw.overflow != null&&!a.support.shrinkWrapBlocks) {
                        a.each(["", "X", "Y"], function(bC, bD) {
                            bz.style["overflow" + bD] = bw.overflow[bC]
                        })
                    }
                    if (bw.hide) {
                        a(bz).hide()
                    }
                    if (bw.hide || bw.show) {
                        for (bA in bw.animatedProperties) {
                            a.style(bz, bA, bw.orig[bA]);
                            a.removeData(bz, "fxshow" + bA, true);
                            a.removeData(bz, "toggle" + bA, true)
                        }
                    }
                    bv = bw.complete;
                    if (bv) {
                        bw.complete = false;
                        bv.call(bz)
                    }
                }
                return false
            } else {
                if (bw.duration == Infinity) {
                    this.now = bx
                } else {
                    bB = bx - this.startTime;
                    this.state = bB / bw.duration;
                    this.pos = a.easing[bw.animatedProperties[this.prop]](this.state, bB, 0, 1, bw.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos)
                }
                this.update()
            }
            return true
        }
    };
    a.extend(a.fx, {
        tick: function() {
            var bw, bv = a.timers, e = 0;
            for (; e < bv.length; e++) {
                bw = bv[e];
                if (!bw() && bv[e] === bw) {
                    bv.splice(e--, 1)
                }
            }
            if (!bv.length) {
                a.fx.stop()
            }
        },
        interval: 13,
        stop: function() {
            clearInterval(a2);
            a2 = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                a.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = e.now + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    a.each(["width", "height"], function(e, bv) {
        a.fx.step[bv] = function(bw) {
            a.style(bw.elem, bv, Math.max(0, bw.now) + bw.unit)
        }
    });
    if (a.expr && a.expr.filters) {
        a.expr.filters.animated = function(e) {
            return a.grep(a.timers, function(bv) {
                return e === bv.elem
            }).length
        }
    }
    function x(bx) {
        if (!Q[bx]) {
            var e = au.body, bv = a("<" + bx + ">").appendTo(e), bw = bv.css("display");
            bv.remove();
            if (bw === "none" || bw === "") {
                if (!a7) {
                    a7 = au.createElement("iframe");
                    a7.frameBorder = a7.width = a7.height = 0
                }
                e.appendChild(a7);
                if (!m ||!a7.createElement) {
                    m = (a7.contentWindow || a7.contentDocument).document;
                    m.write((au.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    m.close()
                }
                bv = m.createElement(bx);
                m.body.appendChild(bv);
                bw = a.css(bv, "display");
                e.removeChild(a7)
            }
            Q[bx] = bw
        }
        return Q[bx]
    }
    var V = /^t(?:able|d|h)$/i, ad = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in au.documentElement) {
        a.fn.offset = function(bI) {
            var by = this[0], bB;
            if (bI) {
                return this.each(function(e) {
                    a.offset.setOffset(this, bI, e)
                })
            }
            if (!by ||!by.ownerDocument) {
                return null
            }
            if (by === by.ownerDocument.body) {
                return a.offset.bodyOffset(by)
            }
            try {
                bB = by.getBoundingClientRect()
            } catch (bF) {}
            var bH = by.ownerDocument, bw = bH.documentElement;
            if (!bB ||!a.contains(bw, by)) {
                return bB ? {
                    top: bB.top,
                    left: bB.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var bC = bH.body, bD = aJ(bH), bA = bw.clientTop || bC.clientTop || 0, bE = bw.clientLeft || bC.clientLeft || 0, bv = bD.pageYOffset || a.support.boxModel && bw.scrollTop || bC.scrollTop, bz = bD.pageXOffset || a.support.boxModel && bw.scrollLeft || bC.scrollLeft, bG = bB.top + bv - bA, bx = bB.left + bz - bE;
            return {
                top: bG,
                left: bx
            }
        }
    } else {
        a.fn.offset = function(bF) {
            var bz = this[0];
            if (bF) {
                return this.each(function(bG) {
                    a.offset.setOffset(this, bF, bG)
                })
            }
            if (!bz ||!bz.ownerDocument) {
                return null
            }
            if (bz === bz.ownerDocument.body) {
                return a.offset.bodyOffset(bz)
            }
            var bC, bw = bz.offsetParent, bv = bz, bE = bz.ownerDocument, bx = bE.documentElement, bA = bE.body, bB = bE.defaultView, e = bB ? bB.getComputedStyle(bz, null): bz.currentStyle, bD = bz.offsetTop, by = bz.offsetLeft;
            while ((bz = bz.parentNode) && bz !== bA && bz !== bx) {
                if (a.support.fixedPosition && e.position === "fixed") {
                    break
                }
                bC = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle;
                bD -= bz.scrollTop;
                by -= bz.scrollLeft;
                if (bz === bw) {
                    bD += bz.offsetTop;
                    by += bz.offsetLeft;
                    if (a.support.doesNotAddBorder&&!(a.support.doesAddBorderForTableAndCells && V.test(bz.nodeName))) {
                        bD += parseFloat(bC.borderTopWidth) || 0;
                        by += parseFloat(bC.borderLeftWidth) || 0
                    }
                    bv = bw;
                    bw = bz.offsetParent
                }
                if (a.support.subtractsBorderForOverflowNotVisible && bC.overflow !== "visible") {
                    bD += parseFloat(bC.borderTopWidth) || 0;
                    by += parseFloat(bC.borderLeftWidth) || 0
                }
                e = bC
            }
            if (e.position === "relative" || e.position === "static") {
                bD += bA.offsetTop;
                by += bA.offsetLeft
            }
            if (a.support.fixedPosition && e.position === "fixed") {
                bD += Math.max(bx.scrollTop, bA.scrollTop);
                by += Math.max(bx.scrollLeft, bA.scrollLeft)
            }
            return {
                top: bD,
                left: by
            }
        }
    }
    a.offset = {
        bodyOffset: function(e) {
            var bw = e.offsetTop, bv = e.offsetLeft;
            if (a.support.doesNotIncludeMarginInBodyOffset) {
                bw += parseFloat(a.css(e, "marginTop")) || 0;
                bv += parseFloat(a.css(e, "marginLeft")) || 0
            }
            return {
                top: bw,
                left: bv
            }
        },
        setOffset: function(bx, bG, bA) {
            var bB = a.css(bx, "position");
            if (bB === "static") {
                bx.style.position = "relative"
            }
            var bz = a(bx), bv = bz.offset(), e = a.css(bx, "top"), bE = a.css(bx, "left"), bF = (bB === "absolute" || bB === "fixed") && a.inArray("auto", [e, bE])>-1, bD = {}, bC = {}, bw, by;
            if (bF) {
                bC = bz.position();
                bw = bC.top;
                by = bC.left
            } else {
                bw = parseFloat(e) || 0;
                by = parseFloat(bE) || 0
            }
            if (a.isFunction(bG)) {
                bG = bG.call(bx, bA, bv)
            }
            if (bG.top != null) {
                bD.top = (bG.top - bv.top) + bw
            }
            if (bG.left != null) {
                bD.left = (bG.left - bv.left) + by
            }
            if ("using" in bG) {
                bG.using.call(bx, bD)
            } else {
                bz.css(bD)
            }
        }
    };
    a.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var bw = this[0], bv = this.offsetParent(), bx = this.offset(), e = ad.test(bv[0].nodeName) ? {
                top: 0,
                left: 0
            }
            : bv.offset();
            bx.top -= parseFloat(a.css(bw, "marginTop")) || 0;
            bx.left -= parseFloat(a.css(bw, "marginLeft")) || 0;
            e.top += parseFloat(a.css(bv[0], "borderTopWidth")) || 0;
            e.left += parseFloat(a.css(bv[0], "borderLeftWidth")) || 0;
            return {
                top: bx.top - e.top,
                left: bx.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || au.body;
                while (e && (!ad.test(e.nodeName) && a.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    a.each(["Left", "Top"], function(bv, e) {
        var bw = "scroll" + e;
        a.fn[bw] = function(bz) {
            var bx, by;
            if (bz === L) {
                bx = this[0];
                if (!bx) {
                    return null
                }
                by = aJ(bx);
                return by ? ("pageXOffset" in by) ? by[bv ? "pageYOffset": "pageXOffset"] : a.support.boxModel && by.document.documentElement[bw] || by.document.body[bw] : bx[bw]
            }
            return this.each(function() {
                by = aJ(this);
                if (by) {
                    by.scrollTo(!bv ? bz : a(by).scrollLeft(), bv ? bz : a(by).scrollTop())
                } else {
                    this[bw] = bz
                }
            })
        }
    });
    function aJ(e) {
        return a.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    a.each(["Height", "Width"], function(bv, e) {
        var bw = e.toLowerCase();
        a.fn["inner" + e] = function() {
            var bx = this[0];
            return bx ? bx.style ? parseFloat(a.css(bx, bw, "padding")) : this[bw]() : null
        };
        a.fn["outer" + e] = function(by) {
            var bx = this[0];
            return bx ? bx.style ? parseFloat(a.css(bx, bw, by ? "margin" : "border")) : this[bw]() : null
        };
        a.fn[bw] = function(bz) {
            var bA = this[0];
            if (!bA) {
                return bz == null ? null : this
            }
            if (a.isFunction(bz)) {
                return this.each(function(bE) {
                    var bD = a(this);
                    bD[bw](bz.call(this, bE, bD[bw]()))
                })
            }
            if (a.isWindow(bA)) {
                var bB = bA.document.documentElement["client" + e], bx = bA.document.body;
                return bA.document.compatMode === "CSS1Compat" && bB || bx && bx["client" + e] || bB
            } else {
                if (bA.nodeType === 9) {
                    return Math.max(bA.documentElement["client" + e], bA.body["scroll" + e], bA.documentElement["scroll" + e], bA.body["offset" + e], bA.documentElement["offset" + e])
                } else {
                    if (bz === L) {
                        var bC = a.css(bA, bw), by = parseFloat(bC);
                        return a.isNumeric(by) ? by : bC
                    } else {
                        return this.css(bw, typeof bz === "string" ? bz : bz + "px")
                    }
                }
            }
        }
    });
    bb.$dy = a;
    if (typeof define === "function" && define.amd && define.amd.$dy) {
        define("$dy", [], function() {
            return a
        })
    }
})(window);
if (typeof Object.create !== "function") {
    Object.create = function(b) {
        function a() {}
        a.prototype = b;
        return new a()
    }
}(function(a) {
    var b = {
        settings: {
            pagination: true,
            paginationFadeSpeed: 300,
            speed: 1000,
            autoScrollSpeed: 6000,
            firstSlide: 0,
            experimentId: null,
            variationIds: null,
            shadowStyle: {}
        },
        init: function(d, c) {
            this.options = a.extend({}, this.settings, c);
            this.itemIndex = this.options.firstSlide;
            this.container = d;
            this.items = this.container.children();
            this.items.hide();
            this.items.eq(this.options.firstSlide).show();
            this.noOfItems = this.items.length;
            this.insertPagination();
            this.updateBtnStyles();
            this.listenToInView();
            this.listenToClick();
            this.animate();
            this.setScroll()
        },
        insertPagination: function() {
            this.shadow = a("<div>");
            this.shadow.css("display", "block").css("position", "absolute").css("left", "50%").css("bottom", "0").css("z-index", "1").css("height", "40px").css("text-align", "center").css(this.options.shadowStyle).hide();
            this.shadow.appendTo(this.container);
            var j = document.createElement("div");
            j.style.cssText = "width:calc(10px);";
            if (!j.style.length) {
                this.container.height(this.shadow.css("max-height"));
                this.shadow.height(this.shadow.css("max-height"));
                this.shadow.css("top", this.shadow.height() - 70);
                this.shadow.css("bottom", "");
                this.shadow.parents('*[data-dy-exp-id^=""]').height(this.shadow.css("max-height"))
            }
            if (this.noOfItems < 2) {
                this.options.pagination = false
            }
            if (this.options.pagination) {
                var k = this;
                var h = false;
                var d = false;
                var c, g;
                c = function() {
                    d = true;
                    if (!h) {
                        k.shadow.fadeIn(k.options.paginationFadeSpeed, function() {
                            h = true;
                            if (!d) {
                                g()
                            }
                        })
                    }
                };
                g = function() {
                    d = false;
                    if (h) {
                        k.shadow.fadeOut(k.options.paginationFadeSpeed, function() {
                            h = false;
                            if (d) {
                                c()
                            }
                        })
                    }
                };
                if (this.options.autoScrollSpeed > 0) {
                    this.container.mouseenter(c);
                    this.container.mouseleave(g)
                } else {
                    c()
                }
                var f, e = [];
                this.paginationLinks = a("<div>");
                this.paginationLinks.css("display", "inline-block").css("position", "relative").css("z-index", "2").css("top", "calc(100% - 32px)").css("margin-left", "-100%").css("direction", "ltr");
                if ($dy.browser.msie && $dy.browser.version <= 8.5) {
                    this.paginationLinks.css("margin-top", "20px")
                }
                for (f = 0; f < this.noOfItems; f++) {
                    e[f] = a('<a href="#item-' + f + '"><div></div></a>').css("display", "inline-block").css("box-sizing", "content-box").css("padding", "10px 5px").css("overflow", "hidden");
                    if (f == this.noOfItems - 1) {
                        e[f].css("margin-right", "0")
                    }
                    e[f].children("div").css("display", "block").css("width", "10px").css("height", "10px").css("border-radius", "6px").css("border", "1px solid #ffffff").css("background", "#bbbbbb");
                    this.paginationLinks.append(e[f])
                }
                this.paginationLinks.appendTo(this.shadow).find("a").bind("click.carousel", a.proxy(this, "paginationHandler")).bind("mousedown.carousel", function() {
                    return false
                })
            }
        },
        paginationHandler: function(c) {
            this.setItemIndex(parseInt((c.target.hash || c.target.parentElement.hash).substr(1).split("-")[1]));
            this.animate();
            this.setScroll();
            return false
        },
        nextItem: function() {
            this.setItemIndex(this.itemIndex + 1);
            this.animate()
        },
        updateBtnStyles: function() {
            if (this.options.pagination) {
                this.paginationLinks.children().children().removeClass("current").css("background", "#bbbbbb").css("border", "1px solid #ffffff").eq(this.itemIndex).addClass("current").css("background", "#ffffff").css("border", "1px solid #bbbbbb")
            }
        },
        setItemIndex: function(c) {
            this.prevItemIndex = this.itemIndex;
            this.itemIndex = c
        },
        normalizeIndex: function(d) {
            var c = d;
            while (c >= this.noOfItems) {
                c -= this.noOfItems
            }
            while (c < 0) {
                c += this.noOfItems
            }
            return c
        },
        listenToInView: function() {
            this.inView = false;
            var c = this;
            this.container.parent().bind("inview", function(g, f, d, h) {
                if (f && d == "both" && h == "both"&&!c.inView) {
                    c.inView = true;
                    c.animate()
                } else {
                    c.inView = false
                }
            })
        },
        reportClick: function() {
            this.container.trigger("dyexpuclick", [[{
                id: this.items.eq(this.itemIndex).attr("data-dy-var-id"),
                idx: this.itemIndex
            }
            ]])
        },
        listenToClick: function() {
            var d = this;
            this.items.mousedown(a.proxy(this, "reportClick"));
            this.shadow.mousedown(a.proxy(this, "reportClick"));
            var c = false;
            this.container.find("iframe").mouseenter(function() {
                c = true
            }).mouseout(function() {
                c = false
            });
            $dy(window).blur(function() {
                if (c) {
                    d.reportClick()
                }
            })
        },
        animate: function() {
            var c, d, e;
            this.itemIndex = this.normalizeIndex(this.itemIndex);
            this.prevItemIndex = this.normalizeIndex(this.prevItemIndex);
            if (this.inView) {
                this.container.trigger("dyexpurimp", [[{
                    id: this.items.eq(this.itemIndex).attr("data-dy-var-id"),
                    idx: this.itemIndex
                }
                ]])
            }
            if (this.itemIndex != this.prevItemIndex) {
                d = this.items.eq(this.prevItemIndex);
                c = this.items.eq(this.itemIndex);
                d.fadeOut(this.options.speed, function() {
                    d.hide()
                });
                c.fadeIn(this.options.speed);
                this.updateBtnStyles()
            }
        },
        setScroll: function() {
            if (this.options.autoScrollSpeed == 0) {
                return 
            }
            clearTimeout(this.autoScrollTimeoutHandle);
            this.autoScrollTimeoutHandle = null;
            var c = this;
            this.autoScrollTimeoutHandle = setTimeout(function() {
                c.autoScrollTimeoutHandle = null;
                c.nextItem();
                c.setScroll()
            }, this.options.autoScrollSpeed)
        }
    };
    a.fn.dyCarousel = function(c) {
        return this.each(function() {
            var d = Object.create(b);
            d.init(a(this), c);
            a.data(this, "carousel", d)
        })
    }
})($dy);
$dy.extend({
    renderSmartCarousel: function(h, b, d) {
        try {
            var f = document.createElement("div");
            f.setAttribute("style", "position:relative;max-width:" + b.width + "px;height:0;padding-bottom:calc(" + b.height + "% / " + b.width + " * 100);");
            f.setAttribute("data-dy-exp-id", b.expId);
            if (typeof b.versionDataStr !== "undefined") {
                f.setAttribute("data-dy-ver-data", b.versionDataStr)
            }
            h.appendChild(f);
            for (var c = 0; c < d.length; c++) {
                var a = document.createElement("a");
                a.href = d[c].image_click_url;
                a.target = d[c].image_click_url_target || "_top";
                a.setAttribute("style", "display:none;position:absolute;");
                a.setAttribute("data-dy-var-id", d[c].id);
                a.innerHTML = '<img src="' + d[c].image_url + '" style="width:100%;height:100%;max-height:' + b.height + 'px;border:none;" />';
                f.appendChild(a)
            }
            if (f.childNodes.length > 0) {
                $dy(f).dyCarousel({
                    autoScrollSpeed: b.scrollSpeed,
                    shadowStyle: {
                        "max-height": b.height + "px"
                    }
                });
                DY.AdDetection.monitorExpUnit(f)
            }
        } catch (g) {}
    },
    renderSmartTagSlider: function(h, b, d) {
        try {
            var f = document.createElement("div");
            f.setAttribute("style", "position:relative;max-width:" + b.width + "px;height:0;padding-bottom:calc(" + b.height + "% / " + b.width + " * 100);");
            h.setAttribute("data-dy-exp-id", b.expId);
            if (typeof b.versionDataStr !== "undefined") {
                h.setAttribute("data-dy-ver-data", b.versionDataStr)
            }
            h.appendChild(f);
            h.setAttribute("style", "position:relative;max-width:" + b.width + "px;max-height:" + b.height + "px;");
            for (var c = 0; c < d.length; c++) {
                var a = document.createElement("div");
                a.setAttribute("style", "display:none;position:absolute;");
                a.setAttribute("data-dy-var-id", d[c].variation);
                a.appendChild(d[c].element);
                f.appendChild(a)
            }
            if (f.childNodes.length > 0) {
                $dy(f).dyCarousel({
                    autoScrollSpeed: b.scrollSpeed,
                    shadowStyle: {
                        "max-height": b.height + "px"
                    }
                });
                DY.AdDetection.monitorExpUnit(h, b.saveExp)
            }
        } catch (g) {}
    }
});
(function(b) {
    var k = {}, a, l, c = document, i = window, h = c.documentElement, j = b.expando;
    b.event.special.inview = {
        add: function(d) {
            k[d.guid + "-" + this[j]] = {
                data: d,
                $element: b(this)
            }
        },
        remove: function(d) {
            try {
                delete k[d.guid + "-" + this[j]]
            } catch (m) {}
        }
    };
    function g() {
        var n, d, m = {
            height: i.innerHeight,
            width: i.innerWidth
        };
        if (!m.height) {
            n = c.compatMode;
            if (n ||!b.support.boxModel) {
                d = n === "CSS1Compat" ? h : c.body;
                m = {
                    height: d.clientHeight,
                    width: d.clientWidth
                }
            }
        }
        return m
    }
    function e() {
        return {
            top: i.pageYOffset || h.scrollTop || c.body.scrollTop,
            left: i.pageXOffset || h.scrollLeft || c.body.scrollLeft
        }
    }
    function f() {
        var o = b(), n, m = 0;
        b.each(k, function(y, x) {
            var v = x.data.selector, w = x.$element;
            o = o.add(v ? w.find(v) : w)
        });
        n = o.length;
        if (n) {
            a = a || g();
            l = l || e();
            for (; m < n; m++) {
                if (!b.contains(h, o[m])) {
                    continue
                }
                var t = b(o[m]), u = {
                    height: t.height(),
                    width: t.width()
                }, d = t.offset(), p = t.data("inview"), r, q, s;
                if (!l ||!a) {
                    return 
                }
                if (d.top + u.height > l.top && d.top < l.top + a.height && d.left + u.width > l.left && d.left < l.left + a.width) {
                    r = (l.left > d.left ? "right" : (l.left + a.width) < (d.left + u.width) ? "left" : "both");
                    q = (l.top > d.top ? "bottom" : (l.top + a.height) < (d.top + u.height) ? "top" : "both");
                    s = r + "-" + q;
                    if (!p || p !== s) {
                        t.data("inview", s).trigger("inview", [true, r, q])
                    }
                } else {
                    if (p) {
                        t.data("inview", false).trigger("inview", [false])
                    }
                }
            }
        }
    }
    b(i).bind("scroll resize", function() {
        a = l = null
    });
    setInterval(f, 1000)
})($dy);
(function(a) {
    a.fn.lightbox_me = function(b) {
        return this.each(function() {
            var d = a.extend({}, a.fn.lightbox_me.defaults, b), j = a(), i = a(this), k = a('<iframe id="foo" style="z-index: ' + (d.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');
            if (d.showOverlay) {
                var e = a(".js_lb_overlay:visible");
                if (e.length > 0) {
                    j = a('<div class="lb_overlay_clear js_lb_overlay"/>')
                } else {
                    j = a('<div class="' + d.classPrefix + '_overlay js_lb_overlay"/>')
                }
            }
            a("body").append(i.hide()).append(j);
            if (d.showOverlay) {
                f();
                j.css({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: (d.zIndex + 2),
                    display: "none"
                });
                if (!j.hasClass("lb_overlay_clear")) {
                    j.css(d.overlayCSS)
                }
            }
            if (d.showOverlay) {
                j.fadeIn(d.overlaySpeed, function() {
                    c();
                    i[d.appearEffect](d.lightboxSpeed, function() {
                        f();
                        c();
                        d.onLoad()
                    })
                })
            } else {
                c();
                i[d.appearEffect](d.lightboxSpeed, function() {
                    d.onLoad()
                })
            }
            if (d.parentLightbox) {
                d.parentLightbox.fadeOut(200)
            }
            a(window).resize(f).resize(c).scroll(c);
            a(window).bind("keyup.lightbox_me", h);
            if (d.closeClick) {
                j.click(function(l) {
                    g();
                    l.preventDefault
                })
            }
            i.delegate(d.closeSelector, "click", function(l) {
                g();
                l.preventDefault()
            });
            i.bind("close", g);
            i.bind("reposition", c);
            function g() {
                var l = i[0].style;
                if (d.destroyOnClose) {
                    i.add(j).remove()
                } else {
                    i.add(j).hide()
                }
                if (d.parentLightbox) {
                    d.parentLightbox.fadeIn(200)
                }
                if (d.preventScroll) {
                    a("body").css("overflow", "")
                }
                k.remove();
                i.undelegate(d.closeSelector, "click");
                i.unbind("close", g);
                i.unbind("repositon", c);
                a(window).unbind("resize", f);
                a(window).unbind("resize", c);
                a(window).unbind("scroll", c);
                a(window).unbind("keyup.lightbox_me");
                d.onClose()
            }
            function h(l) {
                if ((l.keyCode == 27 || (l.DOM_VK_ESCAPE == 27 && l.which == 0)) && d.closeEsc) {
                    g()
                }
            }
            function f() {
                if (a(window).height() < a(document).height()) {
                    j.css({
                        height: a(document).height() + "px"
                    });
                    k.css({
                        height: a(document).height() + "px"
                    })
                } else {
                    j.css({
                        height: "100%"
                    })
                }
            }
            function c() {
                var m = i[0].style;
                i.css({
                    left: "50%",
                    marginLeft: (i.outerWidth() / 2)*-1,
                    zIndex: (d.zIndex + 3)
                });
                if ((i.height() + 80 >= a(window).height()) && (i.css("position") != "absolute")) {
                    var l = a(document).scrollTop() + 40;
                    i.css({
                        position: "absolute",
                        top: l + "px",
                        marginTop: 0
                    })
                } else {
                    if (i.height() + 80 < a(window).height()) {
                        if (d.centered) {
                            i.css({
                                position: "fixed",
                                top: "50%",
                                marginTop: (i.outerHeight() / 2)*-1
                            })
                        } else {
                            i.css({
                                position: "fixed"
                            }).css(d.modalCSS)
                        }
                        if (d.preventScroll) {
                            a("body").css("overflow", "hidden")
                        }
                    }
                }
            }
        })
    };
    a.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 100,
        lightboxSpeed: 150,
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        preventScroll: false,
        onLoad: function() {},
        onClose: function() {},
        classPrefix: "lb",
        zIndex: 9999,
        centered: false,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: 0.3
        }
    }
})($dy);
if (typeof DYJSON !== "object") {
    DYJSON = {}
}(function() {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toDYJSON !== "function") {
        Date.prototype.toDYJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toDYJSON = Number.prototype.toDYJSON = Boolean.prototype.toDYJSON = function() {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toDYJSON === "function") {
            value = value.toDYJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case"string":
            return quote(value);
        case"number":
            return isFinite(value) ? String(value) : "null";
        case"boolean":
        case"null":
            return String(value);
        case"object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON !== "undefined" && typeof JSON.stringify === "function" && JSON.stringify([1]) === "[1]") {
        DYJSON.stringify = JSON.stringify
    }
    if (typeof DYJSON.stringify !== "function") {
        DYJSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON !== "undefined" && typeof JSON.parse === "function") {
        DYJSON.parse = JSON.parse
    }
    if (typeof DYJSON.parse !== "function") {
        DYJSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
(function(n, v, i, k) {
    var y, A, z, c, e, r, j, t, D, x, h, q, l, B, C, b, f, E, s, u, a, w, m, g, F, o, p, d = [].indexOf || function(I) {
        for (var H = 0, G = this.length; H < G; H++) {
            if (H in this && this[H] === I) {
                return H
            }
        }
        return - 1
    };
    a = "dynotify";
    u = a + "js";
    z = a + "!blank";
    m = {
        t: "top",
        m: "middle",
        b: "bottom",
        l: "left",
        c: "center",
        r: "right"
    };
    l = ["l", "c", "r"];
    p = ["t", "m", "b"];
    f = ["t", "b", "l", "r"];
    E = {
        t: "b",
        m: null,
        b: "t",
        l: "r",
        c: null,
        r: "l"
    };
    s = function(G) {
        var H;
        H = [];
        i.each(G.split(/\W+/), function(J, K) {
            var I;
            I = K.toLowerCase().charAt(0);
            if (m[I]) {
                return H.push(I)
            }
        });
        return H
    };
    o = {};
    c = {
        name: "core",
        html: '<div class="' + u + '-wrapper">\n  <div class="' + u + '-arrow"></div>\n  <div class="' + u + '-container"></div>\n</div>',
        css: "." + u + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + u + "-corner ." + u + "-wrapper,\n." + u + "-corner ." + u + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + u + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + u + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n  cursor: pointer;\n}\n\n[data-dynotify-text],[data-dynotify-html] {\n  position: relative;\n}\n\n." + u + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"
    };
    F = {
        "border-radius": ["-webkit-", "-moz-"]
    };
    h = function(G) {
        return o[G]
    };
    A = function(H, L) {
        var I, J, G, K;
        if (!H) {
            throw "Missing Style name"
        }
        if (!L) {
            throw "Missing Style definition"
        }
        if (!L.html) {
            throw "Missing Style HTML"
        }
        if ((K = o[H]) != null ? K.cssElem : void 0) {
            if (n.console) {
                console.warn("" + a + ": overwriting style '" + H + "'")
            }
            o[H].cssElem.remove()
        }
        L.name = H;
        o[H] = L;
        I = "";
        if (L.classes) {
            i.each(L.classes, function(N, M) {
                I += "." + u + "-" + L.name + "-" + N + " {\n";
                i.each(M, function(O, P) {
                    if (F[O]) {
                        i.each(F[O], function(Q, R) {
                            return I += "  " + R + O + ": " + P + ";\n"
                        })
                    }
                    return I += "  " + O + ": " + P + ";\n"
                });
                return I += "}\n"
            })
        }
        if (L.css) {
            I += "/* styles for " + L.name + " */\n" + L.css
        }
        if (I) {
            L.cssElem = b(I);
            L.cssElem.attr("id", "dynotify-" + L.name)
        }
        G = {};
        J = i(L.html);
        D("html", J, G);
        D("text", J, G);
        return L.fields = G
    };
    b = function(G) {
        var H;
        H = e("style");
        H.attr("type", "text/css");
        i("head").append(H);
        try {
            H.html(G)
        } catch (I) {
            H[0].styleSheet.cssText = G
        }
        return H
    };
    D = function(I, J, H) {
        var G;
        if (I !== "html") {
            I = "text"
        }
        G = "data-dynotify-" + I;
        return t(J, "[" + G + "]").each(function() {
            var K;
            K = i(this).attr(G);
            if (!K) {
                K = z
            }
            return H[K] = I
        })
    };
    t = function(H, G) {
        if (H.is(G)) {
            return H
        } else {
            return H.find(G)
        }
    };
    w = {
        clickToHide: true,
        autoHide: true,
        autoHideDelay: 5000,
        arrowShow: true,
        arrowSize: 5,
        breakNewLines: true,
        elementPosition: "bottom",
        globalPosition: "top right",
        style: "bootstrap",
        className: "error",
        showAnimation: "slideDown",
        showDuration: 400,
        hideAnimation: "slideUp",
        hideDuration: 200,
        gap: 5
    };
    C = function(H, G) {
        var I;
        I = function() {};
        I.prototype = H;
        return i.extend(true, new I(), G)
    };
    r = function(G) {
        return i.extend(w, G)
    };
    e = function(G) {
        return i("<" + G + "></" + G + ">")
    };
    q = {};
    x = function(G) {
        var H;
        if (G.is("[type=radio]")) {
            H = G.parents("form:first").find("[type=radio]").filter(function(I, J) {
                return i(J).attr("name") === G.attr("name")
            });
            G = H.first()
        }
        return G
    };
    B = function(I, K, J) {
        var H, G;
        if (typeof J === "string") {
            J = parseInt(J, 10)
        } else {
            if (typeof J !== "number") {
                return 
            }
        }
        if (isNaN(J)) {
            return 
        }
        H = m[E[K.charAt(0)]];
        G = K;
        if (I[H] !== k) {
            K = m[H.charAt(0)];
            J =- J
        }
        if (I[K] === k) {
            I[K] = J
        } else {
            I[K] += J
        }
        return null
    };
    g = function(I, G, H) {
        if (I === "l" || I === "t") {
            return 0
        } else {
            if (I === "c" || I === "m") {
                return H / 2 - G / 2
            } else {
                if (I === "r" || I === "b") {
                    return H - G
                }
            }
        }
        throw "Invalid alignment"
    };
    j = function(G) {
        j.e = j.e || e("div");
        return j.e.text(G).html()
    };
    y = (function() {
        function G(I, J, H) {
            if (typeof H === "string") {
                H = {
                    className: H
                }
            }
            this.options = C(w, i.isPlainObject(H) ? H : {});
            this.loadHTML();
            this.wrapper = i(c.html);
            this.wrapper.data(u, this);
            this.arrow = this.wrapper.find("." + u + "-arrow");
            this.container = this.wrapper.find("." + u + "-container");
            this.container.append(this.userContainer);
            if (I && I.length) {
                this.elementType = I.attr("type");
                this.originalElement = I;
                this.elem = x(I);
                this.elem.data(u, this);
                this.elem.before(this.wrapper)
            }
            this.container.hide();
            this.run(J)
        }
        G.prototype.loadHTML = function() {
            var H;
            H = this.getStyle();
            this.userContainer = i(H.html);
            return this.userFields = H.fields
        };
        G.prototype.show = function(I, H) {
            var K, O, J, L, M, N = this;
            O = function() {
                if (!I&&!N.elem) {
                    N.destroy()
                }
                if (H) {
                    return H()
                }
            };
            M = this.container.parent().parents(":hidden").length > 0;
            J = this.container.add(this.arrow);
            K = [];
            if (M && I) {
                L = "show"
            } else {
                if (M&&!I) {
                    L = "hide"
                } else {
                    if (!M && I) {
                        L = this.options.showAnimation;
                        K.push(this.options.showDuration)
                    } else {
                        if (!M&&!I) {
                            L = this.options.hideAnimation;
                            K.push(this.options.hideDuration)
                        } else {
                            return O()
                        }
                    }
                }
            }
            K.push(O);
            return J[L].apply(J, K)
        };
        G.prototype.setGlobalPosition = function() {
            var O, J, L, K, I, M, N, H;
            H = this.getPosition();
            N = H[0], M = H[1];
            I = m[N];
            O = m[M];
            K = N + "|" + M;
            J = q[K];
            if (!J) {
                J = q[K] = e("div");
                L = {};
                L[I] = 0;
                if (O === "middle") {
                    L.top = "45%"
                } else {
                    if (O === "center") {
                        L.left = "45%"
                    } else {
                        L[O] = 0
                    }
                }
                J.css(L).addClass("" + u + "-corner");
                i("body").append(J)
            }
            return J.prepend(this.wrapper)
        };
        G.prototype.setElementPosition = function() {
            var ae, U, W, aa, R, K, S, ac, Z, P, ad, T, X, H, V, M, O, ab, L, Y, N, aj, ai, ag, J, I, af, ah, Q;
            ai = this.getPosition();
            Y = ai[0], ab = ai[1], L = ai[2];
            ad = this.elem.position();
            ac = this.elem.outerHeight();
            T = this.elem.outerWidth();
            Z = this.elem.innerHeight();
            P = this.elem.innerWidth();
            ag = this.wrapper.position();
            R = this.container.height();
            K = this.container.width();
            H = m[Y];
            M = E[Y];
            O = m[M];
            S = {};
            S[O] = Y === "b" ? ac : Y === "r" ? T : 0;
            B(S, "top", ad.top - ag.top);
            B(S, "left", ad.left - ag.left);
            Q = ["top", "left"];
            for (J = 0, af = Q.length; J < af; J++) {
                N = Q[J];
                V = parseInt(this.elem.css("margin-" + N), 10);
                if (V) {
                    B(S, N, V)
                }
            }
            X = Math.max(0, this.options.gap - (this.options.arrowShow ? W : 0));
            B(S, O, X);
            if (!this.options.arrowShow) {
                this.arrow.hide()
            } else {
                W = this.options.arrowSize;
                U = i.extend({}, S);
                ae = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white";
                for (I = 0, ah = f.length; I < ah; I++) {
                    N = f[I];
                    aj = m[N];
                    if (N === M) {
                        continue
                    }
                    aa = aj === H ? ae : "transparent";
                    U["border-" + aj] = "" + W + "px solid " + aa
                }
                B(S, m[M], W);
                if (d.call(f, ab) >= 0) {
                    B(U, m[ab], W * 2)
                }
            }
            if (d.call(p, Y) >= 0) {
                B(S, "left", g(ab, K, T));
                if (U) {
                    B(U, "left", g(ab, W, P))
                }
            } else {
                if (d.call(l, Y) >= 0) {
                    B(S, "top", g(ab, R, ac));
                    if (U) {
                        B(U, "top", g(ab, W, Z))
                    }
                }
            }
            if (this.container.is(":visible")) {
                S.display = "block"
            }
            this.container.removeAttr("style").css(S);
            if (U) {
                return this.arrow.removeAttr("style").css(U)
            }
        };
        G.prototype.getPosition = function() {
            var O, M, J, H, N, L, K, I;
            M = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition);
            O = s(M);
            if (O.length === 0) {
                O[0] = "b"
            }
            if (J = O[0], d.call(f, J) < 0) {
                throw "Must be one of [" + f + "]"
            }
            if (O.length === 1 || ((H = O[0], d.call(p, H) >= 0) && (N = O[1], d.call(l, N) < 0)) || ((L = O[0], d.call(l, L) >= 0) && (K = O[1], d.call(p, K) < 0))) {
                O[1] = (I = O[0], d.call(l, I) >= 0) ? "m" : "l"
            }
            if (O.length === 2) {
                O[2] = O[1]
            }
            return O
        };
        G.prototype.getStyle = function(H) {
            var I;
            if (!H) {
                H = this.options.style
            }
            if (!H) {
                H = "default"
            }
            I = o[H];
            if (!I) {
                throw "Missing style: " + H
            }
            return I
        };
        G.prototype.updateClasses = function() {
            var H, I;
            H = ["base"];
            if (i.isArray(this.options.className)) {
                H = H.concat(this.options.className)
            } else {
                if (this.options.className) {
                    H.push(this.options.className)
                }
            }
            I = this.getStyle();
            H = i.map(H, function(J) {
                return "" + u + "-" + I.name + "-" + J
            }).join(" ");
            return this.userContainer.attr("class", H)
        };
        G.prototype.run = function(M, J) {
            var N, H, I, K, L, O = this;
            if (i.isPlainObject(J)) {
                i.extend(this.options, J)
            } else {
                if (i.type(J) === "string") {
                    this.options.color = J
                }
            }
            if (this.container&&!M) {
                this.show(false);
                return 
            } else {
                if (!this.container&&!M) {
                    return 
                }
            }
            H = {};
            if (i.isPlainObject(M)) {
                H = M
            } else {
                H[z] = M
            }
            for (I in H) {
                N = H[I];
                K = this.userFields[I];
                if (!K) {
                    continue
                }
                if (K === "text") {
                    N = j(N);
                    if (this.options.breakNewLines) {
                        N = N.replace(/\n/g, "<br/>")
                    }
                }
                L = I === z ? "" : "=" + I;
                t(this.userContainer, "[data-dynotify-" + K + L + "]").html(N)
            }
            this.updateClasses();
            if (this.elem) {
                this.setElementPosition()
            } else {
                this.setGlobalPosition()
            }
            this.show(true);
            if (this.options.autoHide) {
                clearTimeout(this.autohideTimer);
                return this.autohideTimer = setTimeout(function() {
                    return O.show(false)
                }, this.options.autoHideDelay)
            }
        };
        G.prototype.destroy = function() {
            return this.wrapper.remove()
        };
        return G
    })();
    i[a] = function(H, I, G) {
        if ((H && H.nodeName) || H.jquery) {
            i(H)[a](I, G)
        } else {
            G = I;
            I = H;
            new y(null, I, G)
        }
        return H
    };
    i.fn[a] = function(H, G) {
        i(this).each(function() {
            var I;
            I = x(i(this)).data(u);
            if (I) {
                return I.run(H, G)
            } else {
                return new y(i(this), H, G)
            }
        });
        return this
    };
    i.extend(i[a], {
        defaults: r,
        addStyle: A,
        pluginOptions: w,
        getStyle: h,
        insertCSS: b
    });
    i(function() {
        b(c.css).attr("id", "dy-core-notify");
        return i(v).on("click notify-hide", "." + u + "-wrapper", function(H) {
            var G;
            G = i(this).data(u);
            if (G && (G.options.clickToHide || H.type === "notify-hide")) {
                return G.show(false)
            }
        })
    })
}(window, document, $dy));
$dy.dynotify.addStyle("dy-notify", {
    html: "<div style='-webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);-moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);>'<div class='clearfix'><div class='title' data-dynotify-html='title'/></div></div>"
});

