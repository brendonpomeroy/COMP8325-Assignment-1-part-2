(function() {
    function l(a) {
        return /(adsafeprotected.com\/(rjss|rjsi|rfw)\/c.betrad.com|(^https?:)?\/\/c.betrad.com)/.test(a)
    }
    function m() {
        try {
            return window.localStorage && window.postMessage
        } catch (a) {
            return !1
        }
    }
    function n(a, d) {
        function b(c) {
            if (l(c.origin)) {
                var e = document.createElement("script");
                e.text = c.data;
                a.parentNode.insertBefore(e, a);
                p();
                BAPStart(d)
            }
        }
        function p() {
            c=!0;
            window.removeEventListener ? window.removeEventListener("message", b, !1) : window.detachEvent("onmessage", b)
        }
        var c=!1;
        window.addEventListener ?
        window.addEventListener("message", b, !1) : window.attachEvent("onmessage", b);
        window.setTimeout(function() {
            c || (p(), q(a, d))
        }, 3E3)
    }
    function q(a, d) {
        var c=!1, b = document.createElement("script");
        b.id = "ba.js";
        b.src = e + "/geo/ba.js?" + h;
        - 1 < navigator.userAgent.indexOf("MSIE ") && (b.onreadystatechange = function() {
            if (!c && ("loaded" == this.readyState || "complete" == this.readyState))
                c=!0, b.onload(), b.onload = null
        });
        var f = function(a) {
            if (!a || "object" != typeof a)
                return a;
            var b = a.constructor(), c;
            for (c in a)
                a.hasOwnProperty(c) &&
                (b[c] = a[c]);
            return b
        }(d);
        b.onload = function() {
            BAPStart(f)
        };
        a.parentNode.insertBefore(b, a)
    }
    var a, c, d = {}, r = document.getElementsByTagName("SCRIPT"), e = "http" + ("https:" == document.location.protocol ? "s" : "") + "://c.betrad.com", h = "78f7264";
    window.BAPStart = function(a) {
        try {
            BAP.start(a)
        } catch (b) {
            var c = window._bab || [], d = {}, e;
            for (e in a)
                d[e] = a[e];
            c.push(d);
            window._bab = c
        }
    };
    for (a = 0; a < r.length; a++) {
        var b = r[a];
        if (b.src&&!b._surly) {
            c = b.src;
            var g = l(c) || /^https?:\/\/a248.e.akamai.net/.test(c);
            if (c.match("surly.js") && g) {
                b._surly =
                1;
                var s=!1, g = Math.floor(1E5 * Math.random()), f = c.split(";");
                d.uqid = g;
                f = f.splice(1, f.length);
                for (c = 0; c < f.length; c++) {
                    if ("r=0" == f[c])
                        return;
                    var k = f[c].split("=");
                    d[k[0]] = unescape(k[1]);
                    "nowrite" == k[0] && (s=!0)
                }
                d.order = a;
                this._bao = d;
                if (s) {
                    a = document.createElement("img");
                    a.style.margin = "0px";
                    a.style.padding = "0px";
                    a.border = a.width = a.height = "0";
                    a.src = e + "/a/4.gif";
                    a.id = "bap-pixel-" + g;
                    b.parentNode.insertBefore(a, b);
                    document.getElementById("ba.js") ? BAPStart(d) : m() ? (n(b, d), d = document.createElement("iframe"), d.style.display =
                    "none", d.id = "ba.html", d.src = e + "/ba.html?" + h, b.parentNode.insertBefore(d, b)) : q(b, d);
                    break
                }
                document.write('<img style="margin:0;padding:0;" border="0" width="0" height="0" src="' + e + '/a/4.gif" id="bap-pixel-' + g + '"/>');
                m()?!document.getElementById("ba.js")&&!document.getElementById("ba.html") ? (n(b, d), document.write("<iframe id='ba.html' style='display: none;' width='0' height='0' frameborder='0' scrolling='no' src='" + e + "/ba.html?" + h + "'></iframe>")) : BAPStart(d) : document.write("<script>(function(){if(document.getElementById('ba.js'))return;document.write('<sc'+'ript id=\"ba.js\" type=\"text/javascript\" src=\"" +
                e + "/geo/ba.js?" + h + "\"></scr'+'ipt>');})();\x3c/script><script>document.write('<sc'+'ript>BAPStart(_bao);</sc'+'ript>');\x3c/script>")
            }
        }
    }
})();

