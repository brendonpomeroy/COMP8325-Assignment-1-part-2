$(function() {
    var c = {}, a = false, f;
    $.each(document.cookie.split(";"), function(h, g) {
        var e = $.trim(g.substr(0, g.indexOf("=")));
        var j = $.trim(g.substr(g.indexOf("=") + 1));
        c[e] = j
    });
    if (typeof(c.at_le) != "undefined") {
        a = c.at_le;
        f = "login"
    } else {
        if (typeof(c.at_re) != "undefined") {
            a = c.at_re;
            f = "reg"
        }
    }
    if (a != false) {
        a = unescape(a);
        var d = $.trim(a.substr(0, a.indexOf("?")));
        var b = $.trim(a.substr(a.indexOf("?") + 1));
        if (b != "password" && b != "facebook" && b != "google" && b != "twitter") {
            return 
        }
        if (d != "page" && d != "get-full" && d != "get-simple") {
            return 
        }
        if (typeof _gaq != "undefined") {
            _gaq.push(["_trackEvent", f, d, b]);
            if (document.cookie) {
                document.cookie = "at_le=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"
            }
            if (document.cookie) {
                document.cookie = "at_re=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"
            }
        }
    }
});
