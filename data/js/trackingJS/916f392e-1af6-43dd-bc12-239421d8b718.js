!function(e, t, r, i) {
    function n() {
        return "https:" == e.location.protocol
    }
    function f() {
        for (var e, t = 0; t < o.t.length; t++)
            fire=!1, e = o.t[t], "undefined" != typeof e.sf && o.pf[e.sf](e.p, e.v)
    }
    function d() {
        for (var e, t, r = null, i = 0; i < o.t.length; i++)
            if (t=!1, r = o.t[i], "object" == typeof r && r.r && r.r.fire) {
                for (var n = 0; n < r.r.fire.length; n++)
                    e = r.r.fire[n], o.r[e]() && (t=!0);
                    if (r.r && r.r.block)
                        for (var f = 0; f < r.r.block.length; f++)
                            e = r.r.block[f], o.r[e]() && (t=!1);
                            t && o.tf[r.f](o.tp[r.t], r.v)
            }
    }
    var o = {
        id: "916f392e-1af6-43dd-bc12-239421d8b718",
        tp: {
            "ff0e242d-0339-4dea-81d7-6d8b598dfa1e": {
                url: "http://dtm.advertising.com/ids/{{id}}",
                secure_url: "https://dtm.advertising.com/ids/{{id}}"
            }
        },
        m: {
            URL: function() {
                return window.location.href
            },
            "Always true": function() {
                return "true"
            }
        },
        r: [function() {
            for (var e = [function() {
                var e = o.m["Always true"](), t = "true";
                return e == t
            }
            ], t = 0; t < e.length; t++)
                if (e[t] && e[t]())
                    return !0;
            return !1
        }
        ],
        tf: [function(e) {
            if ("undefined" == typeof u.isync) {
                var r = "ids" + (Math.random() + 1).toString(36).substring(7);
                u.isync = r
            }
            var i = t.createElement("IFRAME");
            i.style.height = "1px", i.style.width = "1px", i.style.left = "-10000px", i.style.display = "none", i.style.visibility = "hidden", n() ? i.setAttribute("src", e.secure_url.replace("{{id}}", o.id)) : i.setAttribute("src", e.url.replace("{{id}}", o.id)), t.body.appendChild(i), window[u.isync] = function(e) {
                i.postMessage(e, "//dtm.advertising.com")
            }
        }
        ],
        pf: [],
        t: [{
            t: "ff0e242d-0339-4dea-81d7-6d8b598dfa1e",
            v: {
                enabled: !0,
                excludes: []
            },
            r: {
                fire: [0],
                block: []
            },
            f: 0
        }
        ]
    }, c = {}, u = {};
    "undefined" != typeof e[i] && (c = "object" != typeof e[i] ? {} : e[i]), "undefined" == typeof e.jkmHeyQTkCykbKceeRwX && (f(), d(), e.jkmHeyQTkCykbKceeRwX=!0)
}(window, document, "script", "pageData");
