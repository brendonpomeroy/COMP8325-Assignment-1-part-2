jQuery(document).ready(function() {
    jQuery("a").each(function() {
        var e = jQuery(this);
        var t = e.attr("href");
        if (t == undefined || t == "")
            return;
        var n = t.replace("http://", "").replace("https://", "");
        var r = t.split(".").reverse();
        var i = r[0].toLowerCase();
        var r = t.split("/").reverse();
        var s = r[2];
        var o = false;
        if (typeof analyticsFileTypes != "undefined") {
            if (jQuery.inArray(i, analyticsFileTypes)!=-1) {
                o = true;
                e.click(function() {
                    if (analyticsEventTracking == "enabled") {
                        if (analyticsSnippet == "enabled") {
                            _gaq.push(["_trackEvent", "Downloads", i.toUpperCase(), t])
                        } else {
                            ga("send", "event", "Downloads", i.toUpperCase(), t)
                        }
                    } else {
                        if (analyticsSnippet == "enabled") {
                            _gaq.push(["_trackPageview", analyticsDownloadsPrefix + n])
                        } else {
                            ga("send", "pageview", analyticsDownloadsPrefix + n)
                        }
                    }
                })
            }
        }
        if (t.match(/^http/)&&!t.match(document.domain) && o == false) {
            e.click(function() {
                if (analyticsEventTracking == "enabled") {
                    if (analyticsSnippet == "enabled") {
                        _gaq.push(["_trackEvent", "Outbound Traffic", t.match(/:\/\/(.[^/]+)/)[1], t])
                    } else {
                        ga("send", "event", "Outbound Traffic", t.match(/:\/\/(.[^/]+)/)[1], t)
                    }
                } else if (analyticsSnippet == "enabled") {
                    _gaq.push(["_trackPageview", analyticsOutboundPrefix + n])
                } else {
                    ga("send", "pageview", analyticsOutboundPrefix + n)
                }
            })
        }
    })
})
