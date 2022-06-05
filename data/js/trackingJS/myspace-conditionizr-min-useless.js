/*
	conditionizr v2.2.0
	conditionizr.com
	by Todd Motto & Mark Goodyear
	@toddmotto    & @markgdyr
	Latest version: https://github.com/conditionizr/conditionizr

	Conditionizr, the conditional free legacy, retina, touch, script and style loader.
*/
;
var conditionizr = function(a) {
    function e(a, b) {
        for (var c in b)
            try {
                a[c] = b[c].constructor == Object ? e(a[c], b[c]) : b[c]
        } catch (d) {
            a[c] = b[c]
        }
        return a
    }
    function f() {
        for (var a in k) {
            var e = k[a], f = b.getElementsByTagName('head')[0];
            if ('classes' === a && e && (c.className += ' ' + l), 'scripts' === a && e) {
                var g = b.createElement('script');
                g.src = d.scriptSrc + l + '.js', f.appendChild(g)
            }
            if ('styles' === a && e) {
                var h = b.createElement('link');
                h.rel = 'stylesheet', h.href = d.styleSrc + l + '.css', f.appendChild(h)
            }
            if ('customScript' === a && e)
                for (var i = k.customScript.replace(/\s/g, ''), j = i.split(','), m = 0; j.length > m; m++) {
                    var n = b.createElement('script');
                    n.src = j[m], f.appendChild(n)
                }
            }
    }
    function m() {
        var a =- 1;
        if ('Microsoft Internet Explorer' == navigator.appName) {
            var b = navigator.userAgent, c = RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
            null != c.exec(b) && (a = parseFloat(RegExp.$1))
        }
        return a
    }
    var b = document, c = b.documentElement;
    c.id = 'conditionizr';
    var d = {
        debug: !1,
        scriptSrc: 'js/conditionizr/',
        styleSrc: 'css/conditionizr/',
        ieLessThan: {
            active: !1,
            version: '9',
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        chrome: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        safari: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        opera: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        firefox: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        ie10: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        ie9: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        ie8: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        ie7: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        ie6: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        retina: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        touch: {
            scripts: !1,
            styles: !1,
            classes: !0,
            customScript: !1
        },
        mac: !0,
        win: !0,
        x11: !0,
        linux: !0
    };
    a && e(d, a);
    for (var g = '', h = [{
        testWith: 'chrome',
        testSettings: d.chrome
    }, {
        testWith: 'safari',
        testSettings: d.safari
    }, {
        testWith: 'firefox',
        testSettings: d.firefox
    }, {
        testWith: 'opera',
        testSettings: d.opera
    }
    ], i = 0; h.length > i; i++) {
        var j = h[i];
        if (navigator.userAgent.toLowerCase().indexOf(j.testWith)>-1) {
            var k = j.testSettings, l = j.testWith;
            f(), g = l;
            break
        }
    }
    var n = m();
    if (n>-1) {
        if (d.ieLessThan.version + '.0' > n) {
            var l = 'lt-ie' + d.ieLessThan.version, k = d.ieLessThan;
            f()
        }
        if (10 === n)
            var k = d.ie10;
        else if (9 === n)
            var k = d.ie9;
        else if (8 === n)
            var k = d.ie8;
        else if (7 === n)
            var k = d.ie7;
        else if (6 === n)
            var k = d.ie6;
        var l = 'ie' + n;
        f(), g = l
    }
    var o = '';
    if (window.devicePixelRatio >= 2) {
        var k = d.retina, l = 'retina';
        f(), o += ' ' + l, l = g
    } else 
        c.className += ' no-retina';
    if ('ontouchstart'in window) {
        var k = d.touch, l = 'touch';
        f(), o += ' ' + l, l = g
    } else 
        c.className += ' no-touch';
    for (var p = [{
        testWith: 'Win',
        testSettings: d.win
    }, {
        testWith: 'Mac',
        testSettings: d.mac
    }, {
        testWith: 'X11',
        testSettings: d.x11
    }, {
        testWith: 'Linux',
        testSettings: d.linux
    }
    ], i = 0; p.length > i; i++) {
        var q = p[i];
        if (navigator.appVersion.indexOf(q.testWith)>-1) {
            var r = q.testSettings, s = q.testWith;
            r && (c.className += ' ' + q.testWith.toLowerCase());
            break
        }
    }
    d.debug && (console.log('Start Conditionizr Debug\n'), console.log('Script location: ' + d.scriptSrc), console.log('Style location: ' + d.styleSrc), console.log('Browser: ' + l), o && console.log('Browser Extras: ' + o), console.log('OS: ' + s), console.log('End Conditionizr Debug\n'))
};
