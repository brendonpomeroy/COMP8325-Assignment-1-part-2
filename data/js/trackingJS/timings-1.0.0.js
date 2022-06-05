function MGPerformance(a) {
    var b = this;
    var c = performance.timing;
    b.interval = 1000;
    if (a != null) {
        b.interval = a
    }
    b.callbacks = [];
    b.listen = function(d) {
        if (c.loadEventEnd > 0) {
            b.callback(d)
        } else {
            b.callbacks.push(d)
        }
    };
    b.setInterval = function(d) {
        b.interval(d)
    };
    b.callback = function(g) {
        var h = c.domainLookupEnd - c.domainLookupStart;
        var d = c.connectEnd - c.connectStart;
        var e = c.responseStart - c.navigationStart;
        var f = c.redirectEnd - c.redirectStart;
        var i = c.domComplete - c.navigationStart;
        var l = c.domInteractive - c.navigationStart;
        var k = c.domContentLoadedEventEnd - c.navigationStart;
        var j = c.loadEventEnd - c.navigationStart;
        g(h, d, e, f, l, i, k, j)
    };
    b.test = function() {
        if (c.loadEventEnd > 0) {
            for (var d in b.callbacks) {
                if (b.callbacks.hasOwnProperty(d)) {
                    b.callback(b.callbacks[d])
                }
            }
        } else {
            b.interval -= 150;
            if (b.interval < 100) {
                b.interval = 100
            }
            setTimeout(function() {
                b.test()
            }, b.interval)
        }
    };
    setTimeout(function() {
        b.test()
    }, b.interval)
}
function MGPerformanceTiming(a, c) {
    var b = this;
    b.settings = c;
    b.ajax = function(f) {
        try {
            var d = new XMLHttpRequest();
            d.open("GET", f, true);
            d.send()
        } catch (g) {}
    };
    b.send = function(g, d, e, f, l, h, k, j) {
        var i = "";
        if (typeof b.settings.label != "undefined") {
            i = b.settings.label
        } else {
            i = b.getUtm()
        }
        b.createUrl("domainLookup", g, i);
        b.createUrl("connectTime", d, i);
        b.createUrl("ttfb", e, i);
        b.createUrl("redirectTime", f, i);
        b.createUrl("domInteractive", l, i);
        b.createUrl("domComplete", h, i);
        b.createUrl("domContentLoadedEventEnd", k, i);
        b.createUrl("loadEventEnd", j, i)
    };
    b.createUrl = function(g, f, e) {
        f = b.cleanData(f);
        if (f > 0 || g == "redirectTime") {
            var d = "http://www.etahub.com/trackn?app_id=" + b.settings.appid + "&product_name=" + b.settings.productid + "&category=" + g + "&action=" + b.settings.action + "&label=" + e + "&value=" + f;
            b.ajax(d)
        }
    };
    b.getUtm = function() {
        var f = "";
        try {
            var e = location.search.toString().match(/utm_campaign=([^&]+)/);
            if (e) {
                f = e[1]
            }
        } catch (d) {}
        try {
            if (!f) {
                var e = document.cookie.toString().match(/utmccn=([^&|]+)/);
                if (e) {
                    f = e[1]
                }
            }
        } catch (d) {}
        return f
    };
    b.cleanData = function(d) {
        d = parseInt(d) || 0;
        if (d > 3 * 60 * 1000 || d <= 0.01 * 1000) {
            d = 0
        }
        return d
    };
    a.listen(b.send)
}
var mgBrowserPerformance = null;
if (typeof performance != "undefined") {
    var interval = 1000;
    if (typeof mgPerformanceTimingSettings != "undefined" && mgPerformanceTimingSettings !== null && "interval" in mgPerformanceTimingSettings) {
        interval = parseInt(mgPerformanceTimingSettings.interval)
    }
    mgBrowserPerformance = new MGPerformance(interval)
}
function mgHandleAddingCallbacks() {
    if (typeof mgPerformanceCallbacks != "undefined") {
        if (mgBrowserPerformance == null) {
            for (var a in mgHandleAddingCallbacks) {
                if (mgHandleAddingCallbacks.hasOwnProperty(a)) {
                    a(0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
        } else {
            for (var a in mgPerformanceCallbacks) {
                if (mgPerformanceCallbacks.hasOwnProperty(a)) {
                    mgBrowserPerformance.listen(mgPerformanceCallbacks[a])
                }
            }
            mgPerformanceCallbacks = []
        }
    }
}
mgHandleAddingCallbacks();
setInterval(mgHandleAddingCallbacks, 250);
var mgPerformanceTiming = null;
if ((typeof mgBrowserPerformance != "undefined" && typeof XMLHttpRequest != "undefined" && typeof mgPerformanceTimingSettings != "undefined" && mgPerformanceTimingSettings !== null) && "sampling" in mgPerformanceTimingSettings) {
    if (Math.floor((Math.random() * 100) + 1) < parseInt(mgPerformanceTimingSettings.sampling)) {
        mgPerformanceTiming = new MGPerformanceTiming(mgBrowserPerformance, mgPerformanceTimingSettings)
    }
};
