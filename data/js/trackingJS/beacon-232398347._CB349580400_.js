if (typeof COMSCORE === "undefined") {
    var COMSCORE = {};
}
COMSCORE.beacon = function(o) {
    if (!o) {
        return;
    }
    var j = 1.7, n = document, k = n.location, l = 512, p = function(b, a) {
        if (b == null) {
            return "";
        }
        b = (encodeURIComponent || escape)(b);
        if (a) {
            b = b.substr(0, a);
        }
        return b;
    }, m = [(k.protocol === "https:" ? "https://sb" : "http://b"), ".scorecardresearch.com/b?", "c1=", p(o.c1), "&c2=", p(o.c2), "&rn=", Math.random(), "&c7=", p(k.href, l), "&c3=", p(o.c3), "&c4=", p(o.c4, l), "&c5=", p(o.c5), "&c6=", p(o.c6), "&c10=", p(o.c10), "&c15=", p(o.c15), "&c16=", p(o.c16), "&c8=", p(n.title), "&c9=", p(n.referrer, l), "&cv=", j, o.r ? "&r=" + p(o.r, l): ""].join("");
    m = m.length > 2080 ? m.substr(0, 2075) + "&ct=1" : m;
    var i = new Image();
    i.onload = function() {};
    i.src = m;
    return m;
};
