var getElementsByClassName = function(e, t, n) {
    return getElementsByClassName = document.getElementsByClassName ? function(e, t, n) {
        n = n || document;
        for (var i, r = n.getElementsByClassName(e), o = t ? new RegExp("\\b" + t + "\\b", "i") : null, s = [], a = 0, l = r.length; l > a; a += 1)
            i = r[a], (!o || o.test(i.nodeName)) && s.push(i);
        return s
    } : document.evaluate ? function(e, t, n) {
        t = t || "*", n = n || document;
        for (var i, r, o = e.split(" "), s = "", a = "http://www.w3.org/1999/xhtml", l = document.documentElement.namespaceURI === a ? a : null, c = [], u = 0, h = o.length; h > u; u += 1)
            s += "[contains(concat(' ', @class, ' '), ' " + o[u] + " ')]";
        try {
            i = document.evaluate(".//" + t + s, n, l, 0, null)
        } catch (d) {
            i = document.evaluate(".//" + t + s, n, null, 0, null)
        }
        for (; r = i.iterateNext();)
            c.push(r);
        return c
    } : function(e, t, n) {
        t = t || "*", n = n || document;
        for (var i, r, o = e.split(" "), s = [], a = "*" === t && n.all ? n.all : n.getElementsByTagName(t), l = [], c = 0, u = o.length; u > c; c += 1)
            s.push(new RegExp("(^|\\s)" + o[c] + "(\\s|$)"));
        for (var h = 0, d = a.length; d > h; h += 1) {
            i = a[h], r=!1;
            for (var f = 0, p = s.length; p > f && (r = s[f].test(i.className), r); f += 1);
            r && l.push(i)
        }
        return l
    }, getElementsByClassName(e, t, n)
}, usasearch = {};
if (usasearch.config = "object" == typeof usasearch_config && usasearch_config.constructor == Object ? usasearch_config : {}, void 0 === usasearch.config.host && (usasearch.config.host = "//search.usa.gov"), getElementsByClassName("usagov-search-autocomplete").length > 0) {
    var link = document.createElement("link");
    link.type = "text/css", link.href = usasearch.config.host + "/assets/sayt.css", link.rel = "stylesheet", link.media = "screen", document.getElementsByTagName("head")[0].appendChild(link);
    var script = document.createElement("script");
    script.type = "text/javascript", script.src = usasearch.config.host + "/assets/sayt_loader_libs.js", document.getElementsByTagName("head")[0].appendChild(script)
}
if (usasearch.config.siteHandle && (void 0 === usasearch.config.enableDiscoveryTag && (usasearch.config.enableDiscoveryTag=!0), usasearch.config.enableDiscoveryTag)
    ) {
    var aid = usasearch.config.siteHandle, discoveryScript = document.createElement("script");
    discoveryScript.type = "text/javascript", discoveryScript.src = usasearch.config.host + "/assets/stats.js", document.getElementsByTagName("head")[0].appendChild(discoveryScript)
}
