(function() {
    "use strict";
    var e = this;
    typeof e.GOVUK == "undefined" && (e.GOVUK = {}), GOVUK.cookie = function(e, t, n) {
        return typeof t != "undefined" ? t===!1 || t === null ? GOVUK.setCookie(e, "", {
            days: - 1
        }) : GOVUK.setCookie(e, t, n) : GOVUK.getCookie(e)
    }, GOVUK.setCookie = function(e, t, n) {
        typeof n == "undefined" && (n = {});
        var r = e + "=" + t + "; path=/";
        if (n.days) {
            var i = new Date;
            i.setTime(i.getTime() + n.days * 24 * 60 * 60 * 1e3), r = r + "; expires=" + i.toGMTString()
        }
        document.location.protocol == "https:" && (r += "; Secure"), document.cookie = r
    }, GOVUK.getCookie = function(e) {
        var t = e + "=", n = document.cookie.split(";");
        for (var r = 0, i = n.length; r < i; r++) {
            var s = n[r];
            while (s.charAt(0) == " ")
                s = s.substring(1, s.length);
            if (s.indexOf(t) === 0)
                return decodeURIComponent(s.substring(t.length))
        }
        return null
    }
}).call(this), function() {
    "use strict";
    var e = this;
    typeof e.GOVUK == "undefined" && (e.GOVUK = {}), GOVUK.addCookieMessage = function() {
        var e = document.getElementById("global-cookie-message"), t = e && GOVUK.cookie("seen_cookie_message") === null;
        t && (e.style.display = "block", GOVUK.cookie("seen_cookie_message", "yes", {
            days: 28
        }))
    }
}.call(this), function() {
    "use strict";
    var e = window.navigator.userAgent.match(/(\(Windows[\s\w\.]+\))[\/\(\s\w\.\,\)]+(Version\/[\d\.]+)\s(Safari\/[\d\.]+)/) !== null, t;
    e && (t = document.createElement("style"), t.setAttribute("type", "text/css"), t.setAttribute("media", "print"), t.innerHTML = '@font-face { font-family: nta !important; src: local("Arial") !important; }', document.getElementsByTagName("head")[0].appendChild(t)), window.GOVUK && GOVUK.addCookieMessage && GOVUK.addCookieMessage();
    if (document.querySelectorAll && document.addEventListener) {
        var n = document.querySelectorAll(".js-header-toggle"), r, i;
        for (r = 0, i = n.length; r < i; r++)
            n[r].addEventListener("click", function(e) {
                e.preventDefault();
                var t = document.getElementById(this.getAttribute("href").substr(1)), n = t.getAttribute("class") || "", r = this.getAttribute("class") || "";
                n.indexOf("js-visible")!==-1 ? t.setAttribute("class", n.replace(/(^|\s)js-visible(\s|$)/, "")) : t.setAttribute("class", n + " js-visible"), r.indexOf("js-hidden")!==-1 ? this.setAttribute("class", r.replace(/(^|\s)js-hidden(\s|$)/, "")) : this.setAttribute("class", r + " js-hidden")
            })
    }
}.call(this);
