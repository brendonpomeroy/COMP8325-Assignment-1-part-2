(function() {
    var _UDS_CONST_LOCALE = 'en';
    var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY';
    var _UDS_MSG_SEARCHER_IMAGE = ('Image');
    var _UDS_MSG_SEARCHER_WEB = ('Web');
    var _UDS_MSG_SEARCHER_BLOG = ('Blog');
    var _UDS_MSG_SEARCHER_VIDEO = ('Video');
    var _UDS_MSG_SEARCHER_LOCAL = ('Local');
    var _UDS_MSG_SEARCHCONTROL_SAVE = ('save');
    var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep');
    var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include');
    var _UDS_MSG_SEARCHCONTROL_COPY = ('copy');
    var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close');
    var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links');
    var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...');
    var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google');
    var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location');
    var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup');
    var _UDS_MSG_SEARCHER_NEWS = ('News');
    function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {
        return ('' + AGE_MINUTES_AGO + ' minutes ago');
    }
    var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago');
    function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {
        return ('' + AGE_HOURS_AGO + ' hours ago');
    }
    function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {
        return ('all ' + NUMBER + ' related');
    }
    var _UDS_MSG_NEWS_RELATED = ('Related Articles');
    var _UDS_MSG_BRANDING_STRING = ('powered by Google');
    var _UDS_MSG_SORT_BY_DATE = ('Sort by date');
    var _UDS_MSG_MONTH_ABBR_JAN = ('Jan');
    var _UDS_MSG_MONTH_ABBR_FEB = ('Feb');
    var _UDS_MSG_MONTH_ABBR_MAR = ('Mar');
    var _UDS_MSG_MONTH_ABBR_APR = ('Apr');
    var _UDS_MSG_MONTH_ABBR_MAY = ('May');
    var _UDS_MSG_MONTH_ABBR_JUN = ('Jun');
    var _UDS_MSG_MONTH_ABBR_JUL = ('Jul');
    var _UDS_MSG_MONTH_ABBR_AUG = ('Aug');
    var _UDS_MSG_MONTH_ABBR_SEP = ('Sep');
    var _UDS_MSG_MONTH_ABBR_OCT = ('Oct');
    var _UDS_MSG_MONTH_ABBR_NOV = ('Nov');
    var _UDS_MSG_MONTH_ABBR_DEC = ('Dec');
    var _UDS_MSG_DIRECTIONS = ('directions');
    var _UDS_MSG_CLEAR_RESULTS = ('clear results');
    var _UDS_MSG_SHOW_ONE_RESULT = ('show one result');
    var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results');
    var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results');
    var _UDS_MSG_SETTINGS = ('settings');
    var _UDS_MSG_SEARCH = ('search');
    var _UDS_MSG_SEARCH_UC = ('Search');
    var _UDS_MSG_POWERED_BY = ('powered by');
    function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {
        return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');
    }
    var _UDS_MSG_SEARCHER_BOOK = ('Book');
    function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {
        return ('Page ' + FOUND_ON_PAGE + '');
    }
    function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {
        return ('' + PAGE_COUNT + ' pages');
    }
    var _UDS_MSG_SEARCHER_BY = ('by');
    var _UDS_MSG_SEARCHER_CODE = ('Code');
    var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License');
    var _UDS_MSG_SEARCHER_GSA = ('Search Appliance');
    var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results');
    var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous');
    var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next');
    var _UDS_MSG_GET_DIRECTIONS = ('Get directions');
    var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here');
    var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here');
    var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results');
    var _UDS_MSG_SEARCH_THE_MAP = ('search the map');
    var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results');
    var _UDS_MSG_EDIT_TAGS = ('edit tags');
    var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search');
    var _UDS_MSG_SEARCH_STRING = ('search string');
    var _UDS_MSG_OPTIONAL_LABEL = ('optional label');
    var _UDS_MSG_DELETE = ('delete');
    var _UDS_MSG_DELETED = ('deleted');
    var _UDS_MSG_CANCEL = ('cancel');
    var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video');
    var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this');
    var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player');
    var _UDS_MSG_NO_RESULTS = ('No Results');
    var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.');
    var _UDS_MSG_COUPONS = ('Coupons');
    var _UDS_MSG_BACK = ('back');
    var _UDS_MSG_SUBSCRIBE = ('Subscribe');
    var _UDS_MSG_SEARCHER_PATENT = ('Patent');
    var _UDS_MSG_USPAT = ('US Pat.');
    var _UDS_MSG_USPAT_APP = ('US Pat. App');
    var _UDS_MSG_PATENT_FILED = ('Filed');
    var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google');
    var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location');
    var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories');
    var _UDS_MSG_NEWSCAT_WORLD = ('World');
    var _UDS_MSG_NEWSCAT_NATION = ('Nation');
    var _UDS_MSG_NEWSCAT_BUSINESS = ('Business');
    var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech');
    var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment');
    var _UDS_MSG_NEWSCAT_HEALTH = ('Health');
    var _UDS_MSG_NEWSCAT_SPORTS = ('Sports');
    var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
    var _UDS_MSG_SEARCH_RESULTS = ('Search results');
    var _UDS_MSG_DID_YOU_MEAN = ('Did you mean:');
    var _UDS_MSG_CUSTOM_SEARCH = ('Custom Search');
    var _UDS_MSG_LABELED = ('Labeled');
    var _UDS_MSG_LOADING = ('Loading...');
    var _UDS_MSG_ALL_RESULTS_SHORT = ('All');
    var _UDS_MSG_ALL_RESULTS_LONG = ('All results');
    var _UDS_MSG_REFINE_RESULTS = ('Refine results:');
    function _UDS_MSG_REVIEWS(REVIEW_COUNT) {
        return ('' + REVIEW_COUNT + ' reviews');
    }
    function _UDS_MSG_CALORIES(CALORIES) {
        return ('' + CALORIES + ' cal');
    }
    function _UDS_MSG_PRICE_RANGE(RANGE) {
        return ('Price range: ' + RANGE + '.');
    }
    function _UDS_MSG_PRICE(PRICE) {
        return ('Price: ' + PRICE + '.');
    }
    function _UDS_MSG_AVAILABILITY(AVAILABILITY) {
        return ('Availability: ' + AVAILABILITY + '.');
    }
    function _UDS_MSG_TELEPHONE(TELEPHONE) {
        return ('Tel: ' + TELEPHONE + '');
    }
    function _UDS_MSG_RESULT_INFO(NUMBER_OF_RESULTS, SEARCH_TIME) {
        return ('About ' + NUMBER_OF_RESULTS + ' results (' + SEARCH_TIME + ' seconds)');
    }
    var _UDS_MSG_FILE_FORMAT = ('File Format:');
    var _UDS_MSG_SHOWING_RESULTS_FOR = ('Showing results for');
    var _UDS_MSG_SEARCH_INSTEAD_FOR = ('Search instead for');
    function _UDS_MSG_FILTERED_RESULTS(NUM) {
        return ('In order to show you the most relevant results, we have omitted some entries very similar to the ' + NUM + ' already displayed. If you like, you can ' + '<a>repeat the search with the omitted results included' + '</a>.');
    }
    var _UDS_MSG_ORDER_BY = ('Sort by:');
    var _UDS_MSG_ORDER_BY_RELEVANCE = ('Relevance');
    var _UDS_MSG_ORDER_BY_DATE = ('Date');
    var _UDS_MSG_ORDER_BY_GET_LINK = ('Share this page:');
    var _UDS_MSG_ADD_LABEL = ('Add Label');
    var _UDS_MSG_NO_REFINEMENT =
    ('Refinements should be present before adding label');
    var _UDS_MSG_LABEL_PAGE = ('This particular page');
    var _UDS_MSG_LABEL_SITE = ('Entire site');
    var _UDS_MSG_LABEL_PREFIX = ('Specific page prefix');
    var _UDS_MSG_INVALID_URL_PREFIX = ('Invalid url prefix');
    var _UDS_MSG_ERROR_ADDING_LABEL = ('Error adding label.');
    var _UDS_MSG_SAVING = ('Saving...');
    var _UDS_MSG_ADD_LABEL_SAVE = ('Save');
    var _UDS_MSG_ADD_LABEL_CANCEL = ('Cancel');

    var c = encodeURIComponent, ba = google_exportSymbol, da = _UDS_CONST_SHORT_DATE_PATTERN, ga = Object, h = document, ha = isNaN, oa = Math, pa = Array, qa = navigator, ra = Error, ta = parseInt, ua = parseFloat, va = String, wa = _UDS_CONST_LOCALE, xa = decodeURIComponent;
    function za(a, b) {
        return a.onload = b
    }
    function Aa(a, b) {
        return a.width = b
    }
    function Ba(a, b) {
        return a.padding = b
    }
    function Ca(a, b) {
        return a.cancelBubble = b
    }
    function Da(a, b) {
        return a.toString = b
    }
    function Fa(a, b) {
        return a.checked = b
    }
    function Ga(a, b) {
        return a.clone = b
    }
    function Ka(a, b) {
        return a.total = b
    }
    function Na(a, b) {
        return a.enabled = b
    }
    function Oa(a, b) {
        return a.href = b
    }
    function Pa(a, b) {
        return a.display = b
    }
    function Qa(a, b) {
        return a.height = b
    }
    function Sa(a, b) {
        return a.root = b
    }
    function Ta(a, b) {
        return a.onreadystatechange = b
    }
    function Ua(a, b) {
        return a.input = b
    }
    function Xa(a, b) {
        return a.innerHTML = b
    }
    function Ya(a, b) {
        return a.value = b
    }
    function $a(a, b) {
        return a.left = b
    }
    function ab(a, b) {
        return a.type = b
    }
    function cb(a, b) {
        return a.name = b
    }
    function db(a, b) {
        return a.zIndex = b
    }
    function gb(a, b) {
        return a.visibility = b
    }
    function ib(a, b) {
        return a.textContent = b
    }
    function jb(a, b) {
        return a.title = b
    }
    function lb(a, b) {
        return a.prototype = b
    }
    function m(a, b) {
        return a.className = b
    }
    function mb(a, b) {
        return a.disabled = b
    }
    function nb(a, b) {
        return a.target = b
    }
    function ob(a, b) {
        return a.onclick = b
    }
    var p = "appendChild", tb = "getBoundingClientRect", ub = "shift", vb = "pushState", wb = "clearTimeout", yb = "exec", zb = "width", r = "replace", Ab = "floor", Cb = "content", Db = "offsetWidth", Eb = "concat", Fb = "charAt", Gb = "createTextNode", Hb = "insertBefore", Ib = "match", Jb = "focus", s = "createElement", Kb = "keyCode", Lb = "firstChild", Mb = "select", Nb = "setAttribute", Ob = "cloneNode", Rb = "clear", Sb = "childNodes", Tb = "refresh", Ub = "attachEvent", Vb = "nextSibling", Wb = "getTime", Xb = "register", ac = "getElementsByTagName", bc = "host", cc = "substr", dc = "propertyIsEnumerable",
    ec = "cursor", fc = "checked", gc = "setTimeout", hc = "split", ic = "constructor", jc = "stopPropagation", kc = "userAgent", lc = "buffer", mc = "location", nc = "count", oc = "hasOwnProperty", pc = "getComputedStyle", u = "style", qc = "hostname", rc = "close", sc = "hasChildNodes", tc = "clone", v = "search", uc = "state", vc = "isEnabled", wc = "random", xc = "protocol", yc = "enabled", A = "addRule", zc = "href", Ac = "console", Bc = "apply", Cc = "tagName", Dc = "reset", Ec = "removeAttribute", Fc = "label", Gc = "display", Hc = "height", Ic = "root", Nc = "offsetHeight", B = "push", Oc = "page", Pc =
    "open", Qc = "test", Rc = "replaceChild", Sc = "input", Tc = "styleSheet", Uc = "submit", Vc = "text", Wc = "round", Xc = "slice", Yc = "nodeType", Zc = "getElementById", $c = "innerHTML", ad = "srcElement", bd = "RENDERER", cd = "value", dd = "indexOf", D = "History", ed = "insertRow", fd = "getElementsByClassName", gd = "setRequestHeader", hd = "readyState", id = "addEventListener", jd = "type", kd = "defaultView", ld = "ServiceBase", md = "name", nd = "insertCell", od = "parse", G = "length", pd = "title", qd = "google", H = "prototype", rd = "className", sd = "clientWidth", td = "Version", ud =
    "document", vd = "body", wd = "history", xd = "removeChild", yd = "target", zd = "call", Ad = "anchor", Bd = "getAttribute", Cd = "charCodeAt", Dd = "sort", Ed = "loader", Fd = "currentStyle", Gd = "substring", Hd = "themes", Id = "shiftKey", I = "element", Jd = "parentNode", Kd = "CurrentLocale", Ld = "toUpperCase", Md = "splice", Nd = "join", Od = "toLowerCase", Pd = "event", M;
    var Qd = this, Rd = function(a, b, d) {
        a = a[hc](".");
        d = d || Qd;
        a[0]in d ||!d.execScript || d.execScript("var " + a[0]);
        for (var e; a[G] && (e = a[ub]());)
            a[G] || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }, Sd = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof pa)
                    return "array";
                    if (a instanceof ga)
                        return b;
                        var d = ga[H].toString[zd](a);
                        if ("[object Window]" == d)
                            return "object";
                            if ("[object Array]" == d || "number" == typeof a[G] && "undefined" != typeof a[Md] && "undefined" != typeof a[dc]&&!a[dc]("splice"))
                                return "array";
                                if ("[object Function]" ==
                                d || "undefined" != typeof a[zd] && "undefined" != typeof a[dc]&&!a[dc]("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a[zd])
    return "object";
return b
}, Td = function(a, b) {
    function d() {}
    lb(d, b[H]);
    a.EA = b[H];
    lb(a, new d);
    a[H].constructor = a;
    a.DA = function(a, d, f) {
        return b[H][d][Bc](a, pa[H][Xc][zd](arguments, 2))
    }
};
var Ud = function(a) {
    if (ra.captureStackTrace)
        ra.captureStackTrace(this, Ud);
    else {
        var b = ra().stack;
        b && (this.stack = b)
    }
    a && (this.message = va(a))
};
Td(Ud, ra);
cb(Ud[H], "CustomError");
var Vd = function(a, b) {
    for (var d = a[hc]("%s"), e = "", g = pa[H][Xc][zd](arguments, 1); g[G] && 1 < d[G];)
        e += d[ub]() + g[ub]();
    return e + d[Nd]("%s")
}, ce = function(a, b) {
    if (b)
        a = a[r](Wd, "&amp;")[r](Xd, "&lt;")[r](Yd, "&gt;")[r](Zd, "&quot;")[r]($d, "&#39;")[r](ae, "&#0;");
    else {
        if (!be[Qc](a))
            return a;
        - 1 != a[dd]("&") && (a = a[r](Wd, "&amp;"));
        - 1 != a[dd]("<") && (a = a[r](Xd, "&lt;"));
        - 1 != a[dd](">") && (a = a[r](Yd, "&gt;"));
        - 1 != a[dd]('"') && (a = a[r](Zd, "&quot;"));
        - 1 != a[dd]("'") && (a = a[r]($d, "&#39;"));
        - 1 != a[dd]("\x00") && (a = a[r](ae, "&#0;"))
    }
    return a
},
Wd = /&/g, Xd = /</g, Yd = />/g, Zd = /"/g, $d = /'/g, ae = /\x00/g, be = /[\x00&<>"']/;
var de = function(a, b) {
    b.unshift(a);
    Ud[zd](this, Vd[Bc](null, b));
    b[ub]()
};
Td(de, Ud);
cb(de[H], "AssertionError");
var ee = function(a, b, d) {
    if (!a) {
        var e = "Assertion failed";
        if (b)
            var e = e + (": " + b), g = pa[H][Xc][zd](arguments, 2);
        throw new de("" + e, g || []);
    }
    return a
}, fe = function(a, b) {
    throw new de("Failure" + (a ? ": " + a : ""), pa[H][Xc][zd](arguments, 1));
};
var ge = pa[H], he = ge.forEach ? function(a, b, d) {
    ee(null != a[G]);
    ge.forEach[zd](a, b, d)
}
: function(a, b, d) {
    for (var e = a[G], g = "string" == typeof a ? a[hc]("") : a, f = 0; f < e; f++)
        f in g && b[zd](d, g[f], f, a)
}, ie = function(a, b, d) {
    ee(null != a[G]);
    return 2 >= arguments[G] ? ge[Xc][zd](a, b) : ge[Xc][zd](a, b, d)
};
var je = function(a) {
    var b = arguments[G];
    if (1 == b && "array" == Sd(arguments[0]))
        return je[Bc](null, arguments[0]);
    for (var d = {}, e = 0; e < b; e++)
        d[arguments[e]]=!0;
    return d
};
var ke = je("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var le = /<[^>]*>|&[^;]+;/g, me = function(a, b) {
    return b ? a[r](le, "") : a
}, ne = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), oe = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), pe = /^http:\/\/.*/, qe = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*$"),
re = RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"), ue = /\s+/, ve = /\d/;
var xe = function() {
    this.ym = "";
    this.dy = we
};
xe[H].Bf=!0;
xe[H].Af = function() {
    return this.ym
};
Da(xe[H], function() {
    return "Const{" + this.ym + "}"
});
var ye = function(a) {
    if (a instanceof xe && a[ic] === xe && a.dy === we)
        return a.ym;
    fe("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}, we = {};
var Ae = function() {
    this.Cj = "";
    this.ux = ze
};
Ae[H].Bf=!0;
var ze = {};
Ae[H].Af = function() {
    return this.Cj
};
Da(Ae[H], function() {
    return "SafeStyle{" + this.Cj + "}"
});
var Be = function(a) {
    var b = new Ae;
    b.Cj = a;
    return b
}, Ce = Be(""), De = /^[-.%_!# a-zA-Z0-9]+$/;
var Fe = function() {
    this.Od = "";
    this.vx = Ee
};
M = Fe[H];
M.Bf=!0;
M.Af = function() {
    return this.Od
};
M.tm=!0;
M.Jh = function() {
    return 1
};
Da(M, function() {
    return "SafeUrl{" + this.Od + "}"
});
var Ee = {};
var He = function() {
    this.rm = "";
    this.wx = Ge
};
M = He[H];
M.Bf=!0;
M.Af = function() {
    return this.rm
};
M.tm=!0;
M.Jh = function() {
    return 1
};
Da(M, function() {
    return "TrustedResourceUrl{" + this.rm + "}"
});
var Ge = {};
var Je = function() {
    this.Od = "";
    this.Vx = Ie;
    this.vm = null
};
M = Je[H];
M.tm=!0;
M.Jh = function() {
    return this.vm
};
M.Bf=!0;
M.Af = function() {
    return this.Od
};
Da(M, function() {
    return "SafeHtml{" + this.Od + "}"
});
var Ke = function(a) {
    if (a instanceof Je && a[ic] === Je && a.Vx === Ie)
        return a.Od;
    fe("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml"
}, Me = function(a) {
    if (a instanceof Je)
        return a;
    var b = null;
    a.tm && (b = a.Jh());
    return Le(ce(a.Bf ? a.Af() : va(a)), b)
}, Ne = /^[a-zA-Z0-9-]+$/, Oe = je("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), Pe = je("link", "script", "style"), Qe = function(a) {
    var b = 0, d = "", e = function(a) {
        "array" == Sd(a) ? he(a, e) : (a = Me(a), d += Ke(a), a = a.Jh(), 0 == b ? b = a : 0 != a && b != a &&
        (b = null))
    };
    he(arguments, e);
    return Le(d, b)
}, Re = function(a, b) {
    var d = Qe(ie(arguments, 1));
    d.vm = a;
    return d
}, Ie = {}, Le = function(a, b) {
    var d = new Je;
    d.Od = a;
    d.vm = b;
    return d
};
Le("", 0);
var Se = function(a, b) {
    this.Pd = "number" == typeof a ? 0 < a ? 1 : 0 > a?-1 : null : null == a ? null : a?-1 : 1;
    this.xx=!!b
};
M = Se[H];
M.wm = function(a, b) {
    for (var d = 0, e = 0, g=!1, f = me(a, b)[hc](ue), k = 0; k < f[G]; k++) {
        var l = f[k];
        oe[Qc](me(l, void 0)) ? (d++, e++) : pe[Qc](l) ? g=!0 : ne[Qc](me(l, void 0)) ? e++ : ve[Qc](l) && (g=!0)
    }
    return 0 == e ? g ? 1 : 0 : .4 < d / e?-1 : 1
};
M.Yx = function(a, b) {
    return 0 > a * b
};
M.Wq = function(a, b, d, e) {
    return e && (this.Yx(b, this.Pd) || 1 == this.Pd && re[Qc](me(a, d))||-1 == this.Pd && qe[Qc](me(a, d))) ? 1 == this.Pd ? "\u200e" : "\u200f" : ""
};
M.Vq = function(a, b) {
    return this.rr(this.wm(a, b))
};
M.rr = function(a) {
    return - 1 == (0 == a ? this.Pd : a) ? "rtl" : "ltr"
};
M.br = function(a, b, d) {
    return this.Zy(null, a, b, d)
};
M.Yy = function(a, b, d) {
    null == a && (a = this.wm(Ke(b), !0));
    return this.fy(a, b, d)
};
M.Zy = function(a, b, d, e) {
    b = d ? Le(b, null) : Me(b);
    return Ke(this.Yy(a, b, e))
};
M.fy = function(a, b, d) {
    d = d || void 0 == d;
    var e;
    e = 0 != a && a != this.Pd;
    if (this.xx || e) {
        var g;
        e && (g =- 1 == a ? "rtl" : "ltr");
        e = {
            dir: g
        };
        if (!Ne[Qc]("span"))
            throw ra("Invalid tag name <span>.");
        if ("span"in Pe)
            throw ra("Tag name <span> is not allowed for SafeHtml.");
        g = null;
        var f = "<span";
        if (e)
            for (var k in e) {
                if (!Ne[Qc](k))
                    throw ra('Invalid attribute name "' + k + '".');
                    var l = e[k];
                    if (null != l) {
                        var n;
                        n = k;
                        if (l instanceof xe)
                            l = ye(l);
                        else if ("style" == n[Od]()) {
                            var q = typeof l;
                            if (("object" != q || null == l) && "function" != q)
                                throw ra('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                                typeof l + " given: " + l);
                                if (!(l instanceof Ae)) {
                                    var q = "", t = void 0;
                                    for (t in l) {
                                        if (!/^[-_a-zA-Z0-9]+$/[Qc](t))
                                            throw ra("Name allows only [-_a-zA-Z0-9], got: " + t);
                                            var w = l[t];
                                            null != w && (w instanceof xe ? (w = ye(w), ee(!/[{;}]/[Qc](w), "Value does not allow [{;}].")) : De[Qc](w) || (fe("String value allows only [-.%_!# a-zA-Z0-9], got: " + w), w = "zClosurez"), q += t + ":" + w + ";")
                                        }
                                        q ? (ee(!/[<>]/[Qc](q), "Forbidden characters in style string: " + q), l = Be(q)) : l = Ce
                                }
                                q = void 0;
                                l instanceof Ae && l[ic] === Ae && l.ux === ze ? q = l.Cj : (fe("expected object of type SafeStyle, got '" +
                                l + "'"), q = "type_error:SafeStyle");
                                l = q
                            } else {
                                if (/^on/i[Qc](n))
                                    throw ra('Attribute "' + n + '" requires goog.string.Const value, "' + l + '" given.');
                                    if (n[Od]()in Oe)
                                        if (l instanceof He)
                                            l instanceof He && l[ic] === He && l.wx === Ge ? l = l.rm : (fe("expected object of type TrustedResourceUrl, got '" + l + "'"), l = "type_error:TrustedResourceUrl");
                                        else if (l instanceof Fe)
                                            l instanceof Fe && l[ic] === Fe && l.vx === Ee ? l = l.Od : (fe("expected object of type SafeUrl, got '" + l + "'"), l = "type_error:SafeUrl");
                                        else 
                                            throw ra('Attribute "' + n + '" on tag "span" requires goog.html.SafeUrl or goog.string.Const value, "' +
                                            l + '" given.');
                            }
                            l.Bf && (l = l.Af());
                            ee("string" == typeof l || "number" == typeof l, "String or number value expected, got " + typeof l + " with value: " + l);
                            n = n + '="' + ce(va(l)) + '"';
                            f += " " + n
                    }
                }
        k = b;
        void 0 !== k ? "array" == Sd(k) || (k = [k]) : k = [];
        !0 === ke.span ? (ee(!k[G], "Void tag <span> does not allow content."), f += ">") : (g = Qe(k), f += ">" + Ke(g) + "</span>", g = g.Jh());
        (e = e && e.dir) && (g = /^(ltr|rtl|auto)$/i[Qc](e) ? 0 : null);
        e = Le(f, g)
    } else 
        e = b;
    b = Ke(b);
    return e = Re(0, e, this.Wq(b, a, !0, d))
};
M.$q = function(a, b) {
    return this.Iy(null, a, b)
};
M.Iy = function(a, b, d) {
    null == a && (a = this.wm(b, d));
    return this.Wq(b, a, d, !0)
};
M.$y = function() {
    return - 1 == this.Pd ? "right" : "left"
};
M.zy = function() {
    return - 1 == this.Pd ? "left" : "right"
};
var Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, xf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, Vf, Zf, $f, ag, bg, cg, dg, eg, fg, gg, hg, ig, jg, kg, lg, mg, ng, og, pg = /^[6-9]$/, qg = {
    nw: 0,
    $p: 1,
    mw: 2,
    pj: 3
}, rg = {
    EMPTY: 0,
    Kt: 1,
    Bo: 2
}, sg = {
    Bt: 1,
    Ct: 2,
    yB: 3,
    At: 4,
    Dt: 5,
    PB: 6,
    fB: 7,
    gg: 8
}, tg = {
    DONT_CARE: 1,
    zt: 2,
    vo: 3
}, ug = {
    Zp: 0,
    ow: 1,
    pj: 2
}, vg = [23, 24], O = {
    Qu: 0,
    QA: 114,
    yd: 115,
    Yg: 116,
    rb: 117,
    Xg: 494,
    Ta: 118,
    Ge: 119,
    xd: 374,
    Bd: 120,
    ud: 121,
    yi: 122,
    gc: 123,
    Re: 124,
    Ai: 125,
    Yu: 230,
    GB: 553,
    Cc: 126,
    $e: 127,
    Nb: 128,
    Go: 343,
    bg: 129,
    PA: 231,
    ze: 130,
    Lu: 131,
    TA: 237,
    cB: 570,
    BB: 132,
    Nu: 134,
    Eu: 189,
    Fu: 246,
    DB: 264,
    CB: 256,
    Fi: 133,
    Lt: 184,
    Qg: 419,
    QB: 503,
    RB: 578,
    SB: 579,
    TB: 505,
    WB: 516,
    UB: 509,
    VB: 512,
    Ke: 173,
    rB: 568,
    sB: 569,
    Qn: 135,
    Bk: 136,
    Ck: 137,
    Un: 138,
    Qf: 139,
    Mu: 140,
    Rn: 141,
    Sn: 142,
    Tn: 240,
    Ou: 143,
    Pu: 144,
    Pi: 347,
    Il: 191,
    hj: 150,
    Tf: 145,
    Aq: 146,
    Sg: 147,
    XB: 148,
    NB: 245,
    cp: 155,
    hh: 149,
    hi: 154,
    vi: 311,
    fe: 153,
    RENDERER: 152,
    Wc: 156,
    Ye: 151,
    yl: 158,
    Fo: 294,
    ll: 157,
    Pe: 160,
    uB: 328,
    YB: 580,
    Fd: 159
}, wg = {
    dp: 161,
    ep: 162
};
var xg = function(a) {
    return {
        vj: function() {
            return a.vj()
        },
        Jb: function() {
            return a.Jb()
        },
        Eb: function() {
            return a.Eb()
        }
    }
};
(function() {
    function a(a) {
        for (var b = [], g = 0, f; f = a[g++];)
            b[B](f.api || {
                a: f.nh,
                b: f.pb,
                c: f.ge,
                d: f.L,
                e: f.nf,
                f: f.vq,
                g: f.uq,
                i: f.li,
                j: f.Aa,
                k: f.Ri,
                l: f.tq
            });
        return b
    }
    function b(a) {
        for (var b = [], g = 0, f; f = a[g++];)
            f = f.api || f, b[B]({
                api: f,
                nh: f.a,
                pb: f.b,
                ge: f.c,
                L: f.d,
                nf: f.e,
                vq: f.f,
                uq: f.g,
                li: f.i,
                Aa: f.j,
                Ri: f.k,
                tq: f.l
            });
        return b
    }
    Te = function(a) {
        var b = {};
        if (a)
            for (var g = 0; g < a[G]; ++g)
                b[a[g]]=!0;
        return b
    };
    Ue = function(b) {
        var e = a(b.Eb());
        return b.api || {
            a: b.Jb,
            b: function() {
                return e
            },
            c: b.vj
        }
    };
    Ve = function(a) {
        a = a.api || a;
        var e = b(a.b());
        return {
            api: a,
            Jb: a.a,
            Eb: function() {
                return e
            },
            vj: a.c
        }
    };
    We = function(a) {
        return a ? (a = a[Od](), "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : !1
    };
    Xe = function() {
        return (new Date)[Wb]()
    };
    Ye = function(a) {
        return "string" == typeof a
    };
    Ze = function(a) {
        return "number" == typeof a
    }
})();
var yg = function() {
    return {
        Vf: function() {
            return {
                rk: "hp",
                sk: "hp",
                No: "google.com",
                Du: "",
                Fe: "en",
                yn: "",
                Ys: "",
                Ms: "",
                bp: 0,
                rt: "",
                tk: "",
                Qo: !1,
                Cu: "",
                tl: "",
                sl: 0,
                aA: null,
                Ro: !1,
                Uz: !1,
                ri: !1,
                Zf: Te([19, 5, 0]),
                Fz: !1,
                Vs: !0,
                Ez: 10,
                qt: !0,
                Yn: !0,
                Cz: !1,
                Ws: !1,
                Zu: !1,
                dn: !1,
                Lz: !1,
                mu: !1,
                xz: !0,
                Xz: "en",
                Oj: !0,
                Nr: !1,
                Yr: 500,
                Wj: !1,
                Ni: !0,
                Co: !0,
                Ks: !1,
                bo: "",
                Mz: "//www.google.com/textinputassistant",
                Nz: "",
                Pz: 7,
                Gz: !1,
                Hz: !1,
                Xr: !1,
                Os: !0,
                Ps: !1,
                en: !1,
                Rr: !1,
                Qr: !1,
                ci: 1,
                Pr: !0,
                Rj: !1,
                ek: !1,
                vs: !1,
                As: 10,
                Gk: !1,
                Az: 0,
                Iz: !1,
                Bs: !0,
                Or: !1,
                $g: h[vd],
                Ls: !0,
                co: null,
                Je: {},
                Dz: {},
                Qz: 0,
                ws: !1,
                Xs: !0,
                ce: !1,
                Wz: null,
                Js: !1,
                Hu: null,
                Ao: null,
                Ht: !1,
                Qs: !0,
                us: !1,
                $z: 1,
                yz: 1,
                spellcheck: !1,
                zs: !1,
                Ss: "Search",
                Dk: "I'm  Feeling Lucky",
                Ts: "",
                Rs: "Learn more",
                Tz: "Remove",
                Rz: "This search was removed from your Web History",
                Jz: "",
                Bz: "Did you mean:",
                Oz: "",
                Vz: "",
                Yz: "Search by voice",
                on: !1,
                xs: null,
                mn: 0,
                ys: 0,
                ik: "",
                ho: "",
                Kz: !1,
                Ug: "absolute",
                Ns: !1,
                Gt: !1,
                qn: null,
                pn: !0,
                Zz: 0,
                df: [0, 0, 0],
                Xn: null,
                fn: null,
                Ft: [0],
                fo: 0,
                Sz: 1,
                Xj: "",
                xn: "",
                wn: "",
                dl: null,
                fl: "",
                el: "",
                zz: 1,
                lk: {},
                Cs: !0
            }
        }
    }
};
var zg = /<\/?(?:b|em)>/gi, Ag = {
    pu: 8,
    gg: 9,
    Oo: 13,
    Ti: 27,
    OB: 32,
    nu: 37,
    Eo: 38,
    ou: 39,
    Do: 40,
    qu: 46,
    AB: 190
};
var Bg = function() {
    function a(a, b, d) {
        f[a] = d;
        n[a] = [b]
    }
    function b(a, b, e) {
        var f = l[a];
        f ? f != d && (l[a] = d) : l[a] = e;
        (f = n[a]) ? f[B](b) : n[a] = [b];
        k[b] = e
    }
    var d = $e, e = 0, g = {}, f = {}, k = {}, l = {}, n = {}, q = 1E4;
    return {
        AA: function() {
            return e++
        },
        zA: function() {
            return q++
        },
        mr: a,
        BA: function(b, d) {
            var e = q++;
            a(b, e, d);
            return e
        },
        register: b,
        CA: function(a, d) {
            var e = q++;
            b(a, e, d);
            return e
        },
        Gu: function() {
            return n
        },
        Vf: function(a, b) {
            var e = g[a];
            return e ? e : (e = f[a]) ? g[a] = e() : b ? (e = k[b]) ? e() : null : (e = l[a]) && e != d ? e() : null
        }
    }
}();
var Cg = function(a, b, d, e, g, f) {
    function k() {
        if (C) {
            for (var a = 0, b; b = L[a++];)
                b.Bb && b.Bb();
            C=!1
        }
    }
    function l(a) {
        for (var b in a) {
            var d = b, e = a[d];
            if (e != w.dp)
                if (y[d]) {
                    for (var f = z[d] || [], g = 0, k = void 0; g < e[G]; ++g)(k = n(d, e[g])
                        ) && f[B](k);
                        z[d] = f
                } else (e = n(d, e)
                    ) && (N[d] = e)
        }
    }
    function n(a, b) {
        var d;
        if (b && b instanceof ga)
            d = b;
        else if (d = E.Vf(a, b), !d)
            return null;
        if (d.dg) {
            var e = d.dg();
            if (e)
                for (var f = 0, g, k, l; g = e[f++];) {
                    l=!1;
                    k = g.L();
                    if (y[k]) {
                        if (l = J[k]) {
                            l[B](g);
                            continue
                        }
                        l=!0
                    }
                    J[k] = l ? [g] : g
                }
        }
        K[B]([d, a]);
        L[B](d);
        return d
    }
    function q(a) {
        for (var b =
        O.Qu, d = 0, e; e = K[d++];)
            e[0] == a && (b = e[1]);
        return b
    }
    function t(a, b) {
        var d = af(a.L(), x), e = af(b.L(), x);
        return 0 > d ? 1 : 0 > e?-1 : d - e
    }
    var w = wg, y = Te([O.Fd, O.cp, O.hh, O.fe, O.hi, O.vi, O[bd], O.Wc, O.yi, O.Ye, O.yl, O.Fo, O.Pe]), F = [O.Tf, O.rb, O.Ta, O.Ge, O.xd, O.Cc, O.yd, O.Yg, O.Bd, O.Sg, O.ud, O.Fi, O.gc, O.Re, O.Ai, O.$e, O.Nb, O.Go, O.bg], x = [O.$e, O.hh, O.Nu, O.gc, O.ud, O.Cc, O.Ta, O.yd, O.Nb, O.Pe, O.Ke, O.Ge, O.Yg, O[bd], O.fe, O.bg, O.Bd, O.xd, O.Re, O.yl, O.cp, O.Lu, O.ze, O.Sg, O.Rn, O.Sn, O.Ck, O.Tn, O.Ou, O.Un, O.Pu, O.Qf, O.Mu, O.Qn, O.Bk], N = {}, z = {}, J = {}, K = [],
    L = [], C=!1, E = Bg, Z = {
        da: function(a) {
            k();
            for (var b = 0, d; d = L[b++];)
                d.da && d.da(a);
            C=!0
        },
        Bb: k,
        vn: function() {
            return C
        },
        get: function(a, b) {
            var d = N[a];
            if (d)
                return d.V ? d.V(q(b)) : {}
        },
        Ab: function(a, b) {
            var d = z[a];
            if (d) {
                for (var e = [], f = q(b), g = 0, k; k = d[g++];)
                    e[B](k.V ? k.V(f) : {});
                return e
            }
            return []
        },
        ye: function() {
            return a
        },
        Vh: function() {
            return g
        },
        Po: function(a, b) {
            var d = z[O.Fd];
            if (d)
                for (var e = 0, f; f = d[e++];)
                    if (f.W() == a)
                        return f.V ? f.V(q(b)) : {};
            return null
        }
    };
    (function() {
        if (f.Cs) {
            var g = E.Gu(), k, q, x, z;
            for (z in g) {
                var K = z;
                k = g[K];
                q = y[K];
                if (x = b[K]) {
                    if (x != w.dp && q && x[G]) {
                        q = K;
                        x = x[Xc](0);
                        for (var K = [], ca = {}, sa = 0, na = void 0, Ha = void 0; Ha = x[sa++];)
                            Ha instanceof ga && (na = Ha.W(), ca[na] || (K[B](Ha), ca[na] = 1), x[Md](--sa, 1));
                        sa = Te(x);
                        sa[w.ep] && (sa = Te(x[Eb](k)), delete sa[w.ep]);
                        for (na in sa)
                            ca[na] || K[B](ta(na, 10));
                        b[q] = K
                    }
                } else 
                    b[K] = q ? k : k[0]
            }
        }
        l(b);
        for (g = 0; z = F[g++];)
            b[z] || (q = n(z, void 0)) && (N[z] = q);
        l(J);
        L[Dd](t);
        for (g = 0; z = L[g++];)
            z.hb && z.hb(d, e);
        a.rl(e, d.$h());
        e.Ru();
        for (g = 0; z = L[g++];)
            z.ha && z.ha(Z);
        for (g = 0; z = L[g++];)
            z.sb && z.sb(f);
        for (g = 0; z = L[g++];)
            z.da &&
            z.da(f);
        C=!0
    })();
    return Z
};
var Dg = function(a, b, d) {
    function e() {
        return a
    }
    function g() {
        return x
    }
    function f() {
        return N
    }
    function k() {
        return b
    }
    function l() {
        return d || ""
    }
    function n(a, b) {
        y(a, b)
    }
    function q(a, b) {
        y(a, b, !0)
    }
    function t() {
        C || (E = Z=!0)
    }
    function w() {
        U=!0
    }
    function y(a, b, d) {
        C || (E=!0, z[a] = b, d && (J[a] = b))
    }
    var F = df(), x, N, z = {}, J = {}, K, L, C=!1, E=!1, Z=!1, ea=!1, U=!1, la = {
        ub: function() {
            return F
        },
        Uo: function() {
            var a = ta(F, 36);
            return ha(a)?-1 : a
        },
        Jb: e,
        rp: g,
        ke: f,
        Of: k,
        Aa: function() {
            return z
        },
        tp: function() {
            return K
        },
        ij: l,
        wl: function() {
            return L
        },
        gn: function() {
            return {
                Jb: e,
                rp: g,
                ke: f,
                Of: k,
                ij: l,
                setParameter: n,
                Xi: q,
                bx: t,
                $w: w
            }
        },
        setParameter: n,
        Xi: q,
        bx: t,
        $w: w,
        xu: function() {
            return Z
        },
        wu: function() {
            E = ea=!0
        },
        Us: function(e, f, g) {
            return !E && a == e && b.Iw(f) && d == g
        },
        Xo: function() {
            return ea
        },
        up: function() {
            return U
        },
        vu: function() {
            C || (L = Xe(), "cp"in J || q("cp", b.fi()), y("gs_id", F), K = bf(J) + ":" + a, E = C=!0)
        }
    };
    x = a[Od]();
    N = cf(x);
    return la
};
var Fg = function(a, b, d, e, g, f) {
    function k() {
        return !!b&&!!b[0]
    }
    var l, n=!0, q, t = {
        fd: function() {
            return a
        },
        Jb: function() {
            return a.Jb()
        },
        Pj: function() {
            return k() ? b[0] : null
        },
        Eb: function() {
            return b
        },
        td: k,
        Aa: function() {
            return d
        },
        ol: function() {
            return e
        },
        ej: function() {
            return g
        },
        Nv: function() {
            return f
        },
        L: function() {
            return n
        },
        Lo: function() {
            q || (q = xg(t));
            return q
        },
        vj: function() {
            return l
        }
    };
    b ? b[G] && 33 == b[0].L() && (g = n=!1) : b = [];
    d ? l = d.Pw("t") : d = Eg;
    return t
};
var Gg = function(a, b, d, e, g, f) {
    function k(a) {
        if (g)
            for (var b = 0, d; d = a[b++];)
                if ( - 1 != af(d, g))
                    return !0;
        return !1
    }
    var l=!1, n = {
        nh: function() {
            return a
        },
        pb: function() {
            return b
        },
        ge: function() {
            return d
        },
        L: function() {
            return e
        },
        Ri: function() {
            return f.ob("za")
        },
        tq: function() {
            return f.ob("zb")
        },
        nf: function() {
            return g || []
        },
        vq: function(a) {
            return !!g && k([a])
        },
        uq: k,
        Aa: function() {
            return f
        },
        li: function() {
            return l
        }
    };
    switch (e) {
    case 0:
    case 32:
    case 38:
    case 39:
    case 400:
    case 407:
    case 35:
    case 33:
    case 41:
    case 34:
    case 44:
    case 45:
    case 40:
    case 46:
    case 56:
    case 30:
        l =
        !0
    }
    f || (f = Eg);
    return n
};
(function() {
    var a = /\s/g, b = /\u3000/g, d = /^\s/, e = /\s+/, g = /\s+/g, f = /^\s+|\s+$/g, k = /^\s+$/, l = /<[^>]*>/g, n = /&nbsp;/g, q = /&#x3000;/g, t = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g], w = h[ac]("head")[0], y = 0;
    ff = function(a, b) {
        void 0 === b && (b = a);
        var d = function() {
            return b
        };
        return {
            fi: d,
            qo: function() {
                return a
            },
            Tw: d,
            wA: function() {
                return a < b
            },
            Iw: function(d) {
                return d && a == d.qo() && b == d.Tw()
            }
        }
    };
    ef = function(a, b, d, e) {
        if (null == b || "" === b) {
            if (!e)
                return;
            b = ""
        }
        d[B](a + "=" + c(va(b)))
    };
    bf = function(a) {
        var b =
        [], d;
        for (d in a)
            ef(d, a[d], b);
        return b[Nd]("&")
    };
    gf = function(a) {
        return !!a&&!k[Qc](a)
    };
    hf = function(a) {
        for (var b = t[G], d = 0; d < b; d += 2)
            a = a[r](t[d], t[d + 1].source);
        return a
    };
    jf = function(a) {
        for (var b = t[G], d = 0; d < b; d += 2)
            a = a[r](t[d + 1], t[d].source);
        a = a[r](n, " ");
        return a[r](q, "\u3000")
    };
    kf = function(a) {
        return a[r](zg, "")
    };
    lf = function(a) {
        return a[r](l, "")
    };
    mf = function(d) {
        return d && ( - 1 < d[dd](" ") || e[Qc](d)) ? (d = d[r](b, "&#x3000;"), d[r](a, "&nbsp;")) : d
    };
    cf = function(a, b) {
        return a && ( - 1 < a[dd](" ") || e[Qc](a)) ? (a = a[r](g, " "),
        a[r](b ? f : d, "")) : a
    };
    nf = function(a, b, d) {
        d && (a = a[Od](), b = b[Od]());
        return b[G] <= a[G] && a[Gd](0, b[G]) == b
    };
    of = function(a, b) {
        return a || b?!!a&&!!b && a[Od]() == b[Od]() : !0
    };
    pf = function(a) {
        window[wb](a)
    };
    $e = function() {};
    qf = function() {
        return w
    };
    df = function() {
        return (y++).toString(36)
    };
    rf = function(a) {
        return pg[Qc](a)
    };
    sf = function(a, b) {
        return Gg(a.nh(), a.pb(), b, a.L(), a.nf(), a.Aa())
    };
    af = function(a, b) {
        if (b[dd])
            return b[dd](a);
        for (var d = 0, e = b[G]; d < e; ++d)
            if (b[d] === a)
                return d;
        return - 1
    };
    tf = function(a, b) {
        return a.kb() - b.kb()
    };
    uf = function(a, b) {
        return b.kb() - a.kb()
    };
    vf = function(a) {
        var b = {}, d;
        for (d in a)
            b[d] = a[d];
        return b
    };
    wf = function(a, b, d) {
        b in a || (a[b] = [162]);
        a[b][B](d)
    }
})();
var Hg = function(a) {
    return {
        contains: function(b) {
            return b in a
        },
        pw: function(b) {
            return !!a[b]
        },
        Ho: function(b) {
            return a[b] || 0
        },
        ob: function(b) {
            return a[b] || ""
        },
        Pw: function(b) {
            return a[b] || null
        }
    }
}, Eg = Hg({});
(function() {
    function a(a, b, d) {
        a = h[s](a);
        b && m(a, b);
        d && (a.id = d);
        return a
    }
    function b(b) {
        return a("div", b)
    }
    function d(a, b) {
        var d = a[ac]("input");
        if (d)
            for (var e = 0, f; f = d[e++];)
                if (f[md] == b && "submit" != f[jd][Od]())
                    return f;
        return null
    }
    function e(a) {
        a && (a.preventDefault && a.preventDefault(), a.returnValue=!1);
        return !1
    }
    function g(a) {
        return a ? a.ownerDocument || a[ud] : window[ud]
    }
    function f(a) {
        return a ? (a = g(a), a[kd] || a.parentWindow) : window
    }
    var k = void 0 != h.documentElement[u].opacity, l = {
        rtl: "right",
        ltr: "left"
    };
    Ef = function(a,
    b) {
        try {
            if (a.setSelectionRange)
                a.setSelectionRange(b, b);
            else if (a.createTextRange) {
                var d = a.createTextRange();
                d.collapse(!0);
                d.moveStart("character", b);
                d[Mb]()
            }
        } catch (e) {}
    };
    Ff = function(a) {
        try {
            var b, d;
            if ("selectionStart"in a)
                b = a.selectionStart, d = a.selectionEnd;
            else {
                var e = a.createTextRange(), f = g(a).selection.createRange();
                e.inRange(f) && (e.setEndPoint("EndToStart", f), b = e[Vc][G], e.setEndPoint("EndToEnd", f), d = e[Vc][G])
            }
            if (void 0 !== b)
                return ff(b, d)
        } catch (k) {}
        return null
    };
    Gf = function(a, b) {
        for (var d = 0, e = 0; a &&
        (!b || a != b);) {
            d += a.offsetTop;
            e += a.offsetLeft;
            try {
                a = a.offsetParent
            } catch (f) {
                a = null
            }
        }
        return {
            Kl: d,
            ne: e
        }
    };
    Hf = function(a) {
        try {
            return g(a).activeElement == a
        } catch (b) {}
        return !1
    };
    If = function(a) {
        return 38 == a || 40 == a
    };
    Bf = a;
    Jf = function() {
        var b = a("table");
        b.cellPadding = b.cellSpacing = 0;
        Aa(b[u], "100%");
        return b
    };
    Kf = b;
    Lf = function(a, d) {
        var e = b(a), f = e[u];
        f.background = "transparent";
        f.color = "#000";
        Ba(f, 0);
        f.position = "absolute";
        d && db(f, d);
        f.whiteSpace = "pre";
        return e
    };
    Mf = function(a, b) {
        a[$c] != b && (b && (xf ? b = mf(b) : Af && (b = '<pre style="font:inherit;margin:0">' +
        b + "</pre>")), Xa(a, b))
    };
    Nf = function(a, b, d) {
        var e = a[u];
        "INPUT" != a.nodeName && (d += 1);
        $a(e, e.right = "");
        e[b] = d + "px"
    };
    Of = function(a) {
        return "rtl" == a ? "right" : "left"
    };
    Pf = function(a, b) {
        a.dir != b && (a.dir = b, a[u].textAlign = l[b])
    };
    Qf = function(b, e, f) {
        if (d(b, e))
            return null;
        var g = a("input");
        ab(g, "hidden");
        cb(g, e);
        f && Ya(g, f);
        return b[p](g)
    };
    Rf = d;
    Sf = function(a) {
        var b = h.createEvent("KeyboardEvent");
        b.initKeyEvent && (b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0), a.dispatchEvent(b))
    };
    Tf = e;
    Uf = function(a) {
        if (a = a ||
        window[Pd])
            a[jc] && a[jc](), Ca(a, a.cancel=!0);
        return e(a)
    };
    Vf = function(a, b) {
        b[Jd][Hb](a, b[Vb])
    };
    Zf = function(a) {
        a = a[nd]( - 1);
        var b = Bf("a");
        Oa(b, "#ifl");
        m(b, "gssb_j gss_ifl");
        a[p](b);
        return b
    };
    $f = function(a, b) {
        var d = f(a);
        return (d = d[pc] ? d[pc](a, "") : a[Fd]) ? d[b] : null
    };
    ag = function(a) {
        var b = a || window;
        a = b[ud];
        var d = b.innerWidth, b = b.innerHeight;
        if (!d) {
            var e = a.documentElement;
            e && (d = e[sd], b = e.clientHeight);
            d || (d = a[vd][sd], b = a[vd].clientHeight)
        }
        return {
            Zo: d,
            Vo: b
        }
    };
    bg = function(a) {
        return (a || window)[ud].documentElement[sd]
    };
    cg = function(a) {
        a = a[u];
        a.border = "none";
        Ba(a, Cf || Df ? "0 1px" : "0");
        a.margin = "0";
        Qa(a, "auto");
        Aa(a, "100%")
    };
    dg = function(a) {
        return (k ? "opacity" : "filter") + ":" + (k ? a + "" : (xf ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(") + "opacity=" + oa[Ab](100 * a) + ")") + ";"
    };
    eg = function(a) {
        var b = {};
        if (a)
            for (var d = 0, e; e = a[d++];)
                b[e.oh()] = e;
        return b
    };
    fg = g;
    gg = f;
    hg = function(a) {
        Cf && (a.tabIndex = 0)
    }
})();
Bg.mr(O.Il, 192, function() {
    function a(a) {
        Ye(a) && (a = e(a));
        var b = "";
        if (a) {
            for (var d = a[G], f = 0, g = 0, k = 0; d--;)
                for (g<<=8, g|=a[k++], f += 8; 6 <= f;)
                    var l = g>>f - 6 & 63, b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[Fb](l), f = f - 6;
            f && (l = g<<8>>f + 8 - 6 & 63, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[Fb](l))
        }
        return b
    }
    function b(a) {
        var b = [];
        if (a)
            for (var d = 0, e = 0, f = 0; f < a[G]; ++f) {
                var g = a[Cd](f);
                if (32 > g || 127 < g ||!n[g - 32])
                    return [];
                    d<<=6;
                    d|=n[g - 32] - 1;
                    e += 6;
                    8 <= e && (b[B](d>>e - 8 & 255), e -=
                    8)
            }
        return b
    }
    function d(a, b) {
        var d = {};
        d.qb = pa(4);
        d.buffer = pa(4);
        d.Ow = pa(4);
        Ba(d, pa(64));
        d.padding[0] = 128;
        for (var q = 1; 64 > q; ++q)
            d.padding[q] = 0;
        g(d);
        var q = pa(64), n;
        64 < b[G] ? (g(d), k(d, b), n = l(d)) : n = b;
        for (var t = 0; t < n[G]; ++t)
            q[t] = n[t]^92;
        for (t = n[G]; 64 > t; ++t)
            q[t] = 92;
        g(d);
        for (t = 0; 64 > t; ++t)
            d[lc][t] = q[t]^106;
        f(d, d[lc]);
        Ka(d, 64);
        k(d, e(a));
        n = l(d);
        g(d);
        f(d, q);
        Ka(d, 64);
        k(d, n);
        return l(d)
    }
    function e(a) {
        for (var b = [], d = 0, e = 0; e < a[G]; ++e) {
            var f = a[Cd](e);
            128 > f ? b[d++] = f : (2048 > f ? b[d++] = f>>6 | 192 : (b[d++] = f>>12 | 224, b[d++] = f>>
            6 & 63 | 128), b[d++] = f & 63 | 128)
        }
        return b
    }
    function g(a) {
        a.qb[0] = 1732584193;
        a.qb[1] = 4023233417;
        a.qb[2] = 2562383102;
        a.qb[3] = 271733878;
        a.wj = Ka(a, 0)
    }
    function f(a, b) {
        for (var d = a.Ow, e = 0; 64 > e; e += 4)
            d[e / 4] = b[e] | b[e + 1]<<8 | b[e + 2]<<16 | b[e + 3]<<24;
        for (var f = a.qb[0], e = a.qb[1], g = a.qb[2], k = a.qb[3], l, n, C, E = 0; 64 > E; ++E)
            16 > E ? (l = k^e & (g^k), n = E) : 32 > E ? (l = g^k & (e^g), n = 5 * E + 1 & 15) : 48 > E ? (l = e^g^k, n = 3 * E + 5 & 15) : (l = g^(e|~k), n = 7 * E & 15), C = k, k = g, g = e, f = f + l + t[E] + d[n] & 4294967295, l = q[E], e = e + ((f<<l | f>>>32 - l) & 4294967295) & 4294967295, f = C;
        a.qb[0] = a.qb[0] +
        f & 4294967295;
        a.qb[1] = a.qb[1] + e & 4294967295;
        a.qb[2] = a.qb[2] + g & 4294967295;
        a.qb[3] = a.qb[3] + k & 4294967295
    }
    function k(a, b, d) {
        d || (d = b[G]);
        Ka(a, a.total + d);
        for (var e = 0; e < d; ++e)
            a[lc][a.wj++] = b[e], 64 == a.wj && (f(a, a[lc]), a.wj = 0)
    }
    function l(a) {
        var b = pa(16), d = 8 * a.total, e = a.wj;
        k(a, a.padding, 56 > e ? 56 - e : 64 - (e - 56));
        for (var g = 56; 64 > g; ++g)
            a[lc][g] = d & 255, d>>>=8;
        f(a, a[lc]);
        for (g = e = 0; 4 > g; ++g)
            for (d = 0; 32 > d; d += 8)
                b[e++] = a.qb[g]>>d & 255;
        return b
    }
    var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0], q = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], t = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195,
    2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226,
    3174756917, 718787259, 3951481745];
    return {
        L: function() {
            return O.Il
        },
        W: function() {
            return 192
        },
        V: function() {
            return {
                kv: a,
                jv: b,
                lv: d
            }
        }
    }
});
Bg.mr(O.hj, 95, function() {
    function a(a, d) {
        d = hf(kf(d));
        a = hf(cf(a, !0));
        if (nf(d, a))
            return a + "<b>" + d[cc](a[G]) + "</b>";
        for (var e = "", g = [], f = d[G] - 1, k = 0, l =- 1, n; n = d[Fb](k); ++k)
            " " == n || "\t" == n ? e[G] && (g[B]({
                zq: e,
                Hh: l,
                Gh: k + 1
            }), e = "", l =- 1) : (e += n, - 1 == l ? l = k : k == f && g[B]({
                zq: e,
                Hh: l,
                Gh: k + 1
            }));
        e = a[hc](/\s+/);
        k = {};
        for (f = 0; l = e[f++];)
            k[l] = 1;
        n =- 1;
        for (var e = [], q = g[G] - 1, f = 0; l = g[f]; ++f)
            k[l.zq] ? (l =- 1 == n, f == q ? e[B]({
                Hh: l ? f: n,
                Gh: f
            }) : l && (n = f)) : - 1 < n && (e[B]({
                Hh: n,
                Gh: f - 1
            }), n =- 1);
        if (!e[G])
            return "<b>" + d + "</b>";
        f = "";
        for (k = l = 0; n = e[k]; ++k)(q =
        g[n.Hh].Hh) 
            && (f += "<b>" + d[Gd](l, q - 1) + "</b> "), l = g[n.Gh].Gh, f += d[Gd](q, l);
        l < d[G] && (f += "<b>" + d[Gd](l) + "</b> ");
        return f
    }
    return {
        L: function() {
            return O.hj
        },
        W: function() {
            return 95
        },
        V: function() {
            return {
                bold: a
            }
        }
    }
});
Bg[Xb](O.Aq, 12, function() {
    function a(a) {
        a = b(a, w, d);
        a = b(a, y, e);
        return b(a, x, g)
    }
    function b(a, b, d) {
        for (var e, f = "", g = 0; null != (e = b[yb](a));)
            g < e.index && (f += a[Gd](g, e.index)), f += d(e[0]), g = b.lastIndex;
        if (!f)
            return a;
        g < a[G] && (f += a[Gd](g));
        return f
    }
    function d(a) {
        return va.fromCharCode(a[Cd](0) - 65248)
    }
    function e(a) {
        var b = a[Cd](0);
        return 1 == a[G] ? k[Fb](b - 65377) : 65438 == a[Cd](1) ? l[Fb](b - 65395) : n[Fb](b - 65418)
    }
    function g(a) {
        var b = a[Cd](0);
        return 12443 == a[Cd](1) ? q[Fb](b - 12454) : t[Fb](b - 12495)
    }
    function f(a) {
        return eval('"\\u30' +
        a[hc](",")[Nd]("\\u30") + '"')
    }
    var k = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"), l = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"), n = f("D1,D4,D7,DA,DD"), q = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"), t = f("D1__,D4__,D7__,DA__,DD"), w = /[\uFF01-\uFF5E]/g, y = RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])",
    "g"), F = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)", x = new RegExp(F, "g");
    return {
        L: function() {
            return O.Aq
        },
        W: function() {
            return 12
        },
        V: function() {
            return {
                vA: a
            }
        }
    }
});
var Ig = function(a, b, d, e, g) {
    var f = ig ? "-moz-": Df ? "-ms-": Cf ? "-o-": jg ? "-webkit-": "", k = ".gstl_" + e, l = new RegExp("(\\.(" + g[Nd]("|") + ")\\b)"), n = [];
    return {
        addRule: function(a, e) {
            if (b) {
                if (d) {
                    for (var f = a[hc](","), g = [], F = 0, x; x = f[F++];)
                        x = l[Qc](x) ? x[r](l, k + "$1") : k + " " + x, g[B](x);
                    a = g[Nd](",")
                }
                n[B](a, "{", e, "}")
            }
        },
        Ru: function() {
            if (b && n[G]) {
                b=!1;
                var d = Bf("style");
                d[Nb]("type", "text/css");
                (a || qf())[p](d);
                var e = n[Nd]("");
                n = null;
                d[Tc] ? d[Tc].cssText = e : d[p](h[Gb](e))
            }
        },
        prefix: function(a, b) {
            var d = a + (b || "");
            f && (d += b ? a + f + b :
            f + a);
            return d
        }
    }
};
Bg[Xb](O.Sg, 10, function() {
    function a(a) {
        var b = 0;
        a && (k || d(), e(), a in l ? b = l[a] : (Mf(k, hf(a)), l[a] = b = k[Db], Mf(k, "")));
        return b
    }
    function b() {
        k || d();
        e();
        n || (Mf(k, "|"), n = k[Nc]);
        return n
    }
    function d() {
        k = Lf(g.ik);
        gb(k[u], "hidden");
        f[p](k)
    }
    function e() {
        var a = Xe();
        if (!t || t + 3E3 < a)
            t = a, a = $f(k, "fontSize"), q && a == q || (l = {}, n = null, q = a)
    }
    var g, f, k, l, n, q, t;
    return {
        hb: function(a) {
            f = a.uo() || h[vd]
        },
        sb: function(a) {
            g = a
        },
        L: function() {
            return O.Sg
        },
        W: function() {
            return 10
        },
        V: function() {
            return {
                Ee: a,
                zd: b
            }
        }
    }
});
var Jg = function(a) {
    var b;
    (function() {
        var d = function() {};
        a || (a = {});
        var e = function(b) {
            return a[b] || d
        };
        b = {
            nl: e("a"),
            search: e("b"),
            pf: e("c"),
            cj: e("d"),
            bj: e("e"),
            Mi: e("f"),
            Sk: e("g"),
            Tk: e("h"),
            Ok: e("i"),
            Jl: e("j"),
            Oi: e("k"),
            ul: e("l"),
            Rk: e("m"),
            Eq: e("n"),
            Wk: e("o"),
            Xk: e("p"),
            aj: e("q"),
            rl: e("r"),
            Cq: e("s"),
            Dq: e("t"),
            Qk: e("u"),
            Yk: e("w"),
            Lk: e("x"),
            Pk: e("y"),
            Nk: e("z"),
            Mk: e("aa"),
            Uk: e("ab"),
            zl: e("ac")
        }
    })();
    return {
        nl: function() {
            return b.nl()
        },
        search: function(a, e) {
            b[v](a, e)
        },
        pf: function(a) {
            b.pf(a)
        },
        cj: function(a) {
            b.cj(a)
        },
        bj: function(a) {
            return b.bj(a)
        },
        Mi: function(a) {
            b.Mi(a)
        },
        Sk: function(a) {
            b.Sk(a)
        },
        Tk: function(a) {
            b.Tk(a)
        },
        Ok: function(a) {
            b.Ok(a)
        },
        Jl: function(a, e) {
            b.Jl(a, e)
        },
        Oi: function(a, e) {
            b.Oi(a, e)
        },
        ul: function() {
            b.ul()
        },
        Rk: function(a) {
            b.Rk(a)
        },
        Eq: function(a) {
            b.Eq(a)
        },
        Wk: function() {
            b.Wk()
        },
        Xk: function() {
            b.Xk()
        },
        aj: function(a) {
            b.aj(a)
        },
        rl: function(a, e) {
            b.rl(a, e)
        },
        Cq: function(a) {
            b.Cq(a)
        },
        Dq: function() {
            b.Dq()
        },
        Qk: function() {
            b.Qk()
        },
        Pk: function() {
            b.Pk()
        },
        Yk: function(a) {
            b.Yk(a)
        },
        Lk: function() {
            b.Lk()
        },
        Nk: function() {
            b.Nk()
        },
        Mk: function() {
            b.Mk()
        },
        Uk: function() {
            b.Uk()
        },
        zl: function(a, e) {
            return b.zl(a, e)
        }
    }
};
Bg[Xb](O.hh, 6, function() {
    function a(a, b, d, e) {
        var f = a.ub(), k = a.Jb();
        N.Qo || g();
        b = t + w + y + "?" + (F ? F + "&" : "") + (b ? b + "&" : "");
        var n = ef;
        a = [];
        n("q", k, a, !0);
        N.Ro || n("callback", "google.sbox.p" + q, a);
        if (x) {
            for (var k = "", K = 4 + oa[Ab](32 * oa[wc]()), ja = 0, W; ja < K; ++ja)
                W = .3 > oa[wc]() ? 48 + oa[Ab](10 * oa[wc]()) : (.5 < oa[wc]() ? 65 : 97) + oa[Ab](26 * oa[wc]()), k += va.fromCharCode(W);
            n("gs_gbg", k, a)
        }
        n = Bf("script");
        n.src = b + a[Nd]("&");
        n.charset = "utf-8";
        z[f] = n;
        J = N.Qo ? e : d;
        l[p](n);
        return !0
    }
    function b() {
        return 0
    }
    function d() {
        return 0
    }
    function e(a) {
        var b =
        z[a];
        b && (l[xd](b), delete z[a])
    }
    function g() {
        for (var a in z)
            l[xd](z[a]);
        z = {};
        J = null
    }
    function f(a) {
        J && J(a)
    }
    function k(a) {
        a || (a = $e);
        var b = window[qd];
        N.Ro ? b.ac.h = a : b.sbox["p" + q] = a
    }
    var l = qf(), n, q, t, w, y, F, x, N, z = {}, J, K = {
        ha: function(a) {
            n = a.get(O.$e, K);
            q = a.Vh().ub()
        },
        da: function(a) {
            N = a;
            0 == a.sl && (a = n.Ov(), t = a[xc], w = a[bc], y = a.tl, F = a.Pv, x = "https:" == h[mc][xc], k(f), (new Image).src = t + w + "/generate_204")
        },
        L: function() {
            return O.hh
        },
        W: function() {
            return 6
        },
        V: function() {
            return {
                Bu: a,
                Au: e,
                ni: $e,
                Gp: b,
                $o: d
            }
        },
        Bb: function() {
            k(null);
            g()
        }
    };
    return K
});
Bg[Xb](O.Tf, 1, function() {
    function a(a) {
        if (!l)
            return !0;
        for (var b=!1, d=!1, f = 0, k; f < a[G]; ++f)
            if (k = a[Fb](f), !e[Qc](k) && (g[Qc](k) ? d=!0 : b=!0, d && b))
                return !0;
        return !1
    }
    function b(a, b, d) {
        if (!l)
            return !0;
        var g = f[Qc](d), n = k[Qc](b);
        return "ltr" == a ? g || n || e[Qc](d) || e[Qc](b) : !g ||!n
    }
    function d(a) {
        var b = n;
        l && (g[Qc](a) ? b = "ltr" : e[Qc](a) || (b = "rtl"));
        return b
    }
    var e = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"), g = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
    f = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"), k = RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"), l = g[Qc]("x"), n;
    return {
        hb: function(a) {
            n = a.Ie()
        },
        L: function() {
            return O.Tf
        },
        W: function() {
            return 1
        },
        V: function() {
            return {
                It: a,
                tt: b,
                dk: d
            }
        }
    }
});
Bg[Xb](O.rb, 2, function() {
    function a(a, b, d, e, f) {
        var g = t(a);
        g || (g = {}, x[B]({
            element: a,
            sw: g
        }));
        var k = g[b];
        k || (k = g[b] = [], g = a.qw ? window : gg(a), g = q(b, g, k), Ye(b) ? a[id] ? a[id](b, g, !1) : a["on" + b] = g : a[b] = g);
        k[B]({
            uw: !!f,
            Tl: !1,
            bq: e || 0,
            kf: d
        });
        k[Dd](y);
        d.rw = b
    }
    function b(a, b) {
        var d = t(a);
        if (d && (d = d[b.rw]))
            for (var e = 0, f; f = d[e++];)
                if (f.kf == b) {
                    f.Tl=!0;
                    break
                }
    }
    function d(b, d, e, f) {
        a(N, b, d, e, f)
    }
    function e(a) {
        b(N, a)
    }
    function g(a, b) {
        var d = b || {}, e = N[a];
        e && e(d, d.fg)
    }
    function f(a, b, d) {
        a[id] ? a[id](b, d, !1) : a[Ub]("on" + b, d)
    }
    function k(a,
    b, d) {
        a.removeEventListener ? a.removeEventListener(b, d, !1) : a.detachEvent("on" + b, d)
    }
    function l(a) {
        if (F)
            z || (z = [], f(window, "message", n)), z[B](a), a = window[mc][zc], window.postMessage("sbox.df", /HTTPS?:\/\//i[Qc](a) ? a : "*");
        else 
            window[gc](a, 0)
    }
    function n(a) {
        z && a && a.source == window && "sbox.df" == a.data && z[G] && (z[ub]()(), z && z[G] && window.postMessage("sbox.df", window[mc][zc]))
    }
    function q(a, b, d) {
        return function(e, f) {
            if (d[G]) {
                var g;
                if (!(g = e)) {
                    g = {};
                    var k = b[Pd];
                    k && (k[Kb] && (g.keyCode = k[Kb]), g.tw=!0)
                }
                g.fg = f || a;
                for (var k =
                g, l, n, q = 0, t; t = d[q++];)
                    t.Tl ? n=!0 : l || (t.uw ? w(t, k) : l = t.kf(k));
                if (n)
                    for (q = 0; t = d[q];)
                        t.Tl ? d[Md](q, 1) : ++q;
                if (g.Vi)
                    return delete g.Vi, g.tw && (g = b[Pd] || g), Uf(g), g.returnValue=!1
            }
        }
    }
    function t(a) {
        for (var b = 0, d; b < x[G]; ++b)
            if (d = x[b], d[I] == a)
                return d.sw;
        return null
    }
    function w(a, b) {
        l(function() {
            a.kf(b)
        })
    }
    function y(a, b) {
        return b.bq - a.bq
    }
    var F = window.postMessage&&!(Df || kg || Cf), x = [], N = {
        qw: 1
    }, z;
    return {
        L: function() {
            return O.rb
        },
        W: function() {
            return 2
        },
        V: function() {
            return {
                xb: a,
                ql: b,
                Sb: d,
                fA: e,
                vb: g,
                eg: f,
                eA: k,
                defer: l
            }
        },
        Bb: function() {
            z = null
        }
    }
});
Bg[Xb](O.Xg, 495, function() {
    function a(a) {
        k[a.ub()]=!0
    }
    function b(a) {
        var b = a.fd();
        a = b.ub();
        a in k && (b = b.wl(), b = Xe() - b, n += b, ++l, delete k[a])
    }
    function d() {
        var a = 0, b;
        for (b in k)
            a++;
        return a
    }
    function e() {
        return l
    }
    function g() {
        return n
    }
    function f() {
        k = {};
        n = l = 0
    }
    var k, l, n;
    return {
        da: function() {
            f()
        },
        L: function() {
            return O.Xg
        },
        W: function() {
            return 495
        },
        V: function() {
            return {
                Ku: a,
                uv: b,
                dv: d,
                ev: e,
                fv: g,
                reset: f
            }
        }
    }
});
Bg[Xb](O.xd, 375, function() {
    function a(a) {
        g[a]=!0;
        f = a
    }
    function b() {
        var a = [], b;
        for (b in g)
            a[B](ta(b, 10));
        return a
    }
    function d() {
        return f
    }
    function e() {
        g = {};
        f = null
    }
    var g, f;
    return {
        da: function() {
            e()
        },
        L: function() {
            return O.xd
        },
        W: function() {
            return 375
        },
        V: function() {
            return {
                add: a,
                ov: b,
                hu: d,
                reset: e
            }
        }
    }
});
Bg[Xb](O.Bd, 9, function() {
    function a(a) {
        var b = t.Dc(), d;
        d = [];
        d[27] = 25;
        d[0] = e(z.rk);
        d[28] = e(z.sk);
        d[1] = void 0 == a ? "" : a + "";
        d[26] = w.ov()[Nd]("j");
        a = "";
        F.kl() ? a = "o" : x.De() && (a = x.dt() + "");
        d[2] = a;
        a = "";
        var k = x.Eb();
        if (k) {
            for (var C, Y = 0, ja = 0, W; W = k[ja++];) {
                var ca = W;
                W = ca.L() + "";
                ca = ca.nf();
                ca[G] && (W += "i" + ca[Nd]("i"));
                W != C && (1 < Y && (a += "l" + Y), a += (C ? "j" : "") + W, Y = 0, C = W);
                ++Y
            }
            1 < Y && (a += "l" + Y)
        }
        d[3] = a;
        d[4] = g(t.qs());
        d[5] = g(t.rs());
        d[6] = J;
        d[7] = Xe() - K;
        d[18] = g(t.ss());
        d[8] = q.St();
        if (C = q.Mt())
            d[25] = C.Vt ? "1" + (z.qt ? "a" : "") + (z.Yn ?
            "c" : "") : "", d[10] = C.Ut;
        d[11] = q.cl();
        d[12] = q.Pt();
        if (C = q.Ot())
            d[9] = C.Xt, d[22] = C.Wt, d[17] = C.Yt;
        d[13] = q.Rt();
        d[14] = q.Qt();
        d[15] = q.Tt();
        d[16] = q.Nt();
        d[30] = y.dv();
        d[31] = y.ev();
        d[32] = y.fv();
        d[19] = e(z.tk);
        C = (C = F.sd()) ? C.Aa().ob("e") ? "1" : "" : "";
        d[20] = C;
        for (C = 0; a = N[C++];)
            k = a.ge(), l[k] && (d[k] = void 0 == d[k] ? e(a.mv()) : "");
        d = d[Nd](".")[r](f, "");
        n && L ? (C = b + d, a = n.jv(L), C = n.lv(C, a), C = C[Xc](0, 8), C = n.kv(C)) : C = "";
        return {
            oq: b,
            gs_l: d + "." + C
        }
    }
    function b() {
        K = Xe();
        ++J;
        t.Ad();
        w[Dc]();
        q.Ad();
        for (var a = 0, b; b = N[a++];)
            b[Dc]()
    }
    function d(a) {
        L =
        a
    }
    function e(a) {
        return a ? a[r](k, "-") : ""
    }
    function g(a) {
        return oa.max(a - K, 0)
    }
    var f = /\.+$/, k = /\./g, l = Te(vg), n, q, t, w, y, F, x, N, z, J =- 1, K, L, C = {
        ha: function(a) {
            n = a.get(O.Il, C);
            q = a.get(O.gc, C);
            t = a.get(O.Ta, C);
            w = a.get(O.xd, C);
            y = a.get(O.Xg, C);
            F = a.get(O.Cc, C);
            x = a.get(O.Nb, C);
            N = a.Ab(O.vi, C);
            eg(a.Ab(O[bd], C))
        },
        sb: function(a) {
            L = a.rt
        },
        da: function(a) {
            z = a;
            b()
        },
        L: function() {
            return O.Bd
        },
        W: function() {
            return 9
        },
        V: function() {
            return {
                Aa: a,
                reset: b,
                Zt: d
            }
        }
    };
    return C
});
Bg[Xb](O.ud, 11, function() {
    function a(a, b) {
        if (F) {
            for (var d=!1, e = 0, g; g = F[e++];)
                2 == g.Uf(a, b) && (d=!0);
            if (d)
                return 
        }
        if (gf(a) || C.ce || n && n.ce())
            rf(b) ? L&&!K && (K = Qf(L, "btnI", "1")) : K && (L[xd](K), K = null), k(b), J[v](a, b), f(), q.vb(14, {
                di: a
            })
    }
    function b(a) {
        k();
        J.pf(a);
        f()
    }
    function d(a) {
        k();
        J.cj(a);
        f()
    }
    function e(a) {
        k(1);
        J.aj(a);
        f()
    }
    function g(a) {
        return J.bj(a)
    }
    function f() {
        t.Qj();
        t.gu();
        y[Dc]();
        N ? N[Rb]() : x[Rb]();
        w.Dc() != w.cb() && w.bt();
        z && z[Rb]()
    }
    function k(a) {
        l && C.Ht && l.pi(a)
    }
    var l, n, q, t, w, y, F, x, N, z, J, K, L, C, E = {
        hb: function(a) {
            L =
            a.uo()
        },
        ha: function(a) {
            l = a.get(O.Pi, E);
            n = a.get(O.ze, E);
            q = a.get(O.rb, E);
            t = a.get(O.gc, E);
            w = a.get(O.Ta, E);
            y = a.get(O.Bd, E);
            x = a.get(O.Nb, E);
            N = a.get(O.Go, E);
            z = a.get(O.Qf, E);
            J = a.ye();
            F = a.Ab(O.Fo, E)
        },
        da: function(a) {
            C = a
        },
        L: function() {
            return O.ud
        },
        W: function() {
            return 11
        },
        V: function() {
            return {
                search: a,
                pf: b,
                cj: d,
                aj: e,
                bj: g
            }
        }
    };
    return E
});
Bg[Xb](O.Re, 14, function() {
    function a(a) {
        return (a[g.pj] || {}).j
    }
    function b(a) {
        return a[g.Zp]
    }
    function d(a, b) {
        var d = a[g.Zp], t = a[g.ow];
        b || (b = Dg(d, ff(d[G])));
        var N = {}, z = a[g.pj];
        if (z)
            for (var J in z) {
                var K = z[J];
                J in q && (K = q[J][od](K));
                N[J] = K
            }
        var z = b, L=!1, C=!1;
        J=!1;
        for (var K = 0, E; E = t[K++];)
            if (33 == (E[f.$p] || 0) ? C=!0 : L=!0, C && L) {
                J=!0;
                break
            }
        L = 0;
        C = [];
        for (K = 0; E = t[K++];) {
            var Z = E[f.$p] || 0;
            if (k[Z] && (!J || 33 != Z)) {
                var ea;
                ea = E[f.nw];
                n && (ea = l.bold(d[Od](), lf(jf(ea))));
                C[B](Gg(ea, lf(jf(ea)), L++, Z, E[f.mw] || [], e(E)))
            }
        }
        return Fg(z,
        C, Hg(N), !1, !0, !1)
    }
    function e(a) {
        return (a = a[f.pj]) ? Hg(a) : Eg
    }
    var g = ug, f = qg, k, l, n, q = {}, t = {
        ha: function(a) {
            l = a.get(O.hj, t);
            if (a = a.Ab(O.yl, t))
                for (var b = 0, d; d = a[b++];)
                    q[d.cA()] = d
        },
        da: function(a) {
            k = a.Zf;
            n = a.Gk
        },
        L: function() {
            return O.Re
        },
        W: function() {
            return 14
        },
        V: function() {
            return {
                zu: a,
                dA: b,
                Ak: d
            }
        }
    };
    return t
});
Bg[Xb](O.Ai, 15, function() {
    function a(a) {
        var d = b(a);
        if (d) {
            if (k)
                for (var g = 0, t; t = k[g++];)
                    a = t.vv(a);
            l.wv(a);
            g = a;
            t = g.fd().Jb();
            var N = g.Eb();
            if (n[vc]())
                if (N[G]) {
                    var z = 0 == g.L();
                    n.Yj(t, N, z) && f.uv(g)
                } else 
                    n[Rb]();
            e.vb(3, {
                input: t,
                $s: N
            })
        }
        q.Jl(a, d);
        return d
    }
    function b(a) {
        var b = g.cb(), d = l.sd(), b = b[Od](), e = a.Jb()[Od]();
        b == e ? d=!0 : (b = cf(b), a = (e = a.fd()) ? e.ke() : cf(a.Jb()[Od]()), d = d ? d.fd().ke() : "", d = 0 == b[dd](a) ? 0 == b[dd](d) ? a[G] >= d[G] : !0 : !1);
        return d
    }
    function d(a, b) {
        return a.kb() - b.kb()
    }
    var e, g, f, k, l, n, q, t = {
        ha: function(a) {
            e =
            a.get(O.rb, t);
            g = a.get(O.Ta, t);
            f = a.get(O.Xg, t);
            k = a.Ab(O.yi, t);
            l = a.get(O.Cc, t);
            n = a.get(O.Nb, t);
            q = a.ye();
            k[Dd](d)
        },
        L: function() {
            return O.Ai
        },
        W: function() {
            return 15
        },
        V: function() {
            return {
                kf: a,
                oi: b
            }
        }
    };
    return t
});
Bg[Xb](O.gc, 13, function() {
    function a(a, b) {
        if (!(!La || Ra || ja && ja.pz())) {
            a.Xi("ds", eb.yn);
            a.Xi("pq", pb);
            a.vu();
            var d=!0, e = a.Uo();
            e > fa && (fa = e);
            ++P;
            na.Ku(a);
            var e = Xe(), f;
            for (f in bb) {
                var g = bb[f].wl();
                2500 < e - g && E(f)
            }
            Ia && (f = Y.get(a)) && ((d = ia || a.xu()) && eb.Xs && a.wu(), ya.kf(f), f.ol()&&++ma, aa = null);
            d && (aa = a, S&&!b || C())
        }
    }
    function b() {
        return 10 <= qb || 3 <= W.$o()?!0 : !1
    }
    function d() {
        Ma = fa
    }
    function e() {
        return fa <= Ma
    }
    function g() {
        aa = null
    }
    function f() {
        return P
    }
    function k() {
        return {
            Vt: Ia,
            Ut: Ia ? Y.tu(): 0
        }
    }
    function l() {
        return Ia ?
        Y.cl() : 0
    }
    function n() {
        return ma
    }
    function q() {
        return {
            Xt: rb,
            Wt: fb,
            Yt: Bb
        }
    }
    function t() {
        return Yb
    }
    function w() {
        return sb
    }
    function y(a) {
        a = Ha.Ak(a);
        return ya.oi(a)
    }
    function F() {
        return hb
    }
    function x() {
        for (var a = [], b = 0, d, e = 0; e <= U; ++e)
            d = kb[e], 0 == d ? b++ : (b = 1 == b ? "0j" : 1 < b ? e + "-" : "", a[B](b + d), b = 0);
        return a[Nd]("j")
    }
    function N() {
        Ia && Y.ru()
    }
    function z(a) {
        Ia && Y.su(a)
    }
    function J() {
        Ia && Y.Ad();
        hb = sb = Yb = Bb = fb = rb = ma = qb = P = 0;
        kb = [];
        for (var a = 0; a <= U; ++a)
            kb[a] = 0
    }
    function K(a) {
        pb = a
    }
    function L(a) {
        return function(b) {
            Z(b, a)
        }
    }
    function C() {
        null !=
        S && (pf(S), S = null);
        if (!(2 < W.$o()) && aa) {
            var a = [], b = aa.Aa();
            if (b)
                for (var d in b)
                    ef(d, b[d], a);
            T.ul();
            a = W.Bu(aa, a[Nd]("&"), L(aa), Z);
            aa.Xo() || (++rb, a ? (a = aa, bb[a.ub()] = a, ++qb) : ++fb);
            aa = null;
            a = 100;
            b = (qb - 2) / 2;
            for (d = 1; d++<=b;)
                a*=2;
            a < Ja && (a = Ja);
            S = window[gc](C, a)
        }
    }
    function E(a) {
        W.Au(a);
        delete bb[a];
        qb&&--qb
    }
    function Z(a, b) {
        if (La) {
            if (!b) {
                var d = Ha.zu(a);
                b = bb[d];
                if (!b)
                    return 
            }
            if (!b.Xo()) {
                d = Ha.Ak(a, b);
                if (Va)
                    var e = ca.cb(), d = Va.rz(d, e);
                Ia && Y.put(d);
                b.Uo() <= Ma || (++Bb, ya.kf(d)||++Yb, e = b, Ja = d.Aa().Ho("d"), e && (E(e.ub()),
                e = e.wl(), e = Xe() - e, hb += e, sb = oa.max(e, sb), ++kb[e > la ? U: ea[oa[Ab](e / 100)]]));
                d && (d = d.Aa().ob("q")) && sa.Zt(d)
            }
        }
    }
    var ea = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8], U = ea[ea[G] - 1] + 1, la = 100 * ea[G] - 1, Y, ja, W, ca, sa, na, Ha, ya, Va, Ea, T, La=!1, aa, fa =- 1, bb, P, qb, ma, rb, fb, Bb, Yb, sb, hb, kb, Ja, S, ia, Ra, Ma, Ia, eb, pb, Wa = {
        ha: function(a) {
            Y = a.get(O.Fi, Wa);
            ja = a.get(O.ze, Wa);
            a.get(O.rb, Wa);
            ca = a.get(O.Ta, Wa);
            sa = a.get(O.Bd, Wa);
            na = a.get(O.Xg, Wa);
            Ha = a.get(O.Re, Wa);
            ya = a.get(O.Ai, Wa);
            Va = a.get(O.Yu, Wa);
            a.get(O.Cc, Wa);
            Ea = a.get(O.$e, Wa);
            a.get(O.Nb,
            Wa);
            T = a.ye()
        },
        da: function(a) {
            W = Ea.uu();
            eb = a;
            La=!0;
            bb = {};
            Ja = 0;
            ia = a.Ws;
            Ra = a.ri;
            Ma =- 1;
            Ia = eb.Vs&&!!Y;
            pb = a.Ys
        },
        L: function() {
            return O.gc
        },
        W: function() {
            return 13
        },
        V: function() {
            return {
                cn: a,
                kl: b,
                Qj: d,
                Cn: e,
                gu: g,
                St: f,
                Mt: k,
                cl: l,
                Pt: n,
                Ot: q,
                Rt: t,
                Qt: w,
                oi: y,
                Tt: F,
                Nt: x,
                ni: N,
                qz: z,
                Ad: J,
                Dn: K
            }
        },
        Bb: function() {
            La=!1;
            null != S && (pf(S), S = null);
            bb = aa = null;
            d()
        }
    };
    return Wa
});
Bg[Xb](O.Cc, 5, function() {
    function a() {
        return g.kl()
    }
    function b(a) {
        f = a
    }
    function d() {
        return f
    }
    function e() {
        f = null
    }
    var g, f, k = {
        ha: function(a) {
            g = a.get(O.gc, k)
        },
        da: function() {
            f = null
        },
        L: function() {
            return O.Cc
        },
        W: function() {
            return 5
        },
        V: function() {
            return {
                kl: a,
                wv: b,
                sd: d,
                uA: e
            }
        }
    };
    return k
});
Bg[Xb](O.$e, 16, function() {
    function a() {
        return g
    }
    function b() {
        return f
    }
    function d() {
        g && g.ni()
    }
    var e = {}, g, f, k = {
        ha: function(a) {
            a = a.Ab(O.hh, k);
            for (var b = 0, d; d = a[b++];)
                e[d.Gp()] = d
        },
        da: function(a) {
            var b = "https:" == h[mc][xc], d = ef, k = [];
            d("client", a.rk, k);
            d("hl", a.Fe, k);
            d("gl", a.Du, k);
            d("sugexp", a.tk, k);
            d("gs_rn", 25, k);
            d("gs_ri", a.sk, k);
            a.bp && d("authuser", a.bp, k);
            f = {
                protocol: "http" + (b ? "s" : "") + "://",
                host: a.Cu || "clients1." + a.No,
                tl: a.tl || "/complete/search",
                Pv: k[G] ? k[Nd]("&"): ""
            };
            g && g.Gp() == a.sl || (g = e[a.sl])
        },
        L: function() {
            return O.$e
        },
        W: function() {
            return 16
        },
        V: function(e) {
            return {
                uu: e == O.gc ? a: $e,
                Ov: b,
                bA: d
            }
        }
    };
    return k
});
Bg[Xb](O.yd, 7, function() {
    function a(a) {
        n.ui(a)
    }
    function b() {
        return q
    }
    function d(a) {
        if (a in t) {
            if (w) {
                if (a == w.Ek())
                    return;
                f();
                w.Wn()
            }
            w = t[a];
            n.ti(w)
        }
    }
    function e() {
        return q ? n.zd() : 0
    }
    function g() {
        q || (n.show(k()), q=!0)
    }
    function f() {
        q && (n.Rg(), q=!1)
    }
    function k() {
        var a = vf(l);
        w.Vn(a);
        return a
    }
    var l = {
        nv: !1,
        uk: "left",
        So: !0,
        Oe: null,
        marginWidth: 0
    }, n, q, t = {}, w, y = {
        ha: function(a) {
            n = a.get(O.Yg, y);
            if (a = a.Ab(O.hi, y))
                for (var b = 0, d; d = a[b++];)
                    t[d.Ek()] = d
        },
        da: function() {
            q=!1
        },
        L: function() {
            return O.yd
        },
        W: function() {
            return 7
        },
        V: function() {
            return {
                Lf: b,
                ti: d,
                zd: e,
                show: g,
                Rg: f,
                ui: a
            }
        },
        Bb: function() {
            f()
        }
    };
    return y
});
Bg[Xb](O.Ta, 3, function() {
    function a() {
        var a = {};
        Ia.vb(13, a);
        !a.cancel && Zb.Oj && Ia.defer(ka.Sj);
        $b.Pk()
    }
    function b() {
        Ia.vb(12);
        $b.Qk()
    }
    function d() {
        fb("rtl")
    }
    function e() {
        fb("ltr")
    }
    function g() {
        ka.Ur()
    }
    function f(a) {
        ka.td() ? ka.Tr() : ka.Sh(a)
    }
    function k() {
        if (0 == Zb.ci)
            return !1;
        if (4 == Zb.ci)
            return $b.Uk(), !1;
        var a = Bb();
        if (a)
            switch (Zb.ci) {
            case 1:
                if (Yb(a, !0))
                    return pb.add(S.gg), !0;
                    break;
                case 3:
                    return ka.Nf(a)
            }
        return !1
    }
    function l() {
        Zb.Rr ? bb(5) : (ka.Lf() ? ka.Sj() : N(), Z())
    }
    function n(a) {
        Za && a.qo() == Za[G] && (Jc &&
        Jc[Rb](), Zb.Qr && bb(2), $b.Ok(Za))
    }
    function q(a) {
        Ra && 0 == a.fi() && Ra.Et()
    }
    function t(a, b, d, e) {
        Zb.Or&&!a && ka.Ym(!0);
        Zb.Nr&&!ka.Lf() && "mousedown" == d && ka.Sh(b);
        var f;
        te && te.Us(a, b, d) ? f = te : te = f = Dg(a, b, d);
        var g = b=!1;
        if (a != Za || "onremovechip" == d)
            nf(d, "key") ? pb.add(S.Bt) : "paste" == d && pb.add(S.Ct), b=!0, kb(a), Ia.vb(1, {
                fg: d,
                Oe: Lc
            }), $b.Mi(a), g = Xe(), yf || (yf = g), Wf = g, gf(a) && (e=!0), g=!0;
        a = Ja.DONT_CARE;
        var k = f.gn(), l = xb.sd();
        if (Pb)
            for (var n = 0, q; q = Pb[n++];)
                q = q.Uf(k, l), q > a && (a = q);
        switch (a) {
        case Ja.zt:
            e=!0;
            break;
        case Ja.vo:
            e =
            !1
        }
        e ? (b && ka.Vr(), zf && f.setParameter("gs_is", 1), $b.Rk(zf), eb.cn(f), te = null) : g && (ka[Rb](), eb.Qj());
        Ia.vb(2, {
            fg: d
        })
    }
    function w(a) {
        (zf = a) && pb.add(S.At)
    }
    function y(a) {
        Xf != a && ((Xf = a) ? $b.Nk() : $b.Mk())
    }
    function F(a) {
        sb(a)
    }
    function x() {
        ia[Jb]()
    }
    function N() {
        ia.blur()
    }
    function z() {
        return ia.Uh()
    }
    function J(a, b, d) {
        nf(a, Za, !0) && (a = Za + a[cc](Za[G]));
        d = d || ff(a[G]);
        t(a, d, "", b);
        sb(a, !0)
    }
    function K(a) {
        J(a, !0);
        Yf = Xe();
        pb.add(S.Dt)
    }
    function L() {
        t(Za, W(), "onremovechip")
    }
    function C(a) {
        kb(a);
        ia[Tb]();
        Ia.vb(4, {
            Oe: Lc,
            input: a
        })
    }
    function E() {
        ia[Mb]()
    }
    function Z() {
        Za != Mc && kb(Mc);
        Ia.vb(5, {
            input: Mc,
            $s: ka.Eb(),
            Oe: Lc
        });
        ia[Tb]();
        $b.Tk(Mc)
    }
    function ea() {
        Mc = Za
    }
    function U() {
        return ia.rn()
    }
    function la() {
        return Mc
    }
    function Y() {
        return Za
    }
    function ja() {
        return Lc
    }
    function W() {
        return ia.Of()
    }
    function ca() {
        return ia.ck()
    }
    function sa() {
        return ia.zd()
    }
    function na() {
        return ia.Ee()
    }
    function Ha() {
        return ia.sn()
    }
    function ya() {
        return yf
    }
    function Va() {
        return Wf
    }
    function Ea() {
        return Yf
    }
    function T() {
        return 0 != hh
    }
    function La() {
        if (se) {
            if (Zb.Wj)
                return !0;
            for (var a = 0, b; b = Kc[a++];)
                if (b[vc]())
                    return !0
        }
        return !1
    }
    function aa(a) {
        if (a == Za)
            return !0;
        var b = Za[G];
        return a[cc](0, b) == Za ? Ma.tt(Lc, Za, a[cc](b)) : !1
    }
    function fa() {
        ia.Zj()
    }
    function bb(a) {
        Wa[v](Za, a)
    }
    function P(a) {
        Za && (kb(""), ia[Rb](), Ia.vb(1), ka[Rb](), $b.Mi(Za));
        a && $b.Lk()
    }
    function qb() {
        Yf = Wf = yf = 0
    }
    function ma(a) {
        ia.qi(a)
    }
    function rb() {
        var a = Bb();
        a && Yb(a)
    }
    function fb(a) {
        var b = W().fi();
        Lc == a ? ka.td() && b == Za[G] && (ka.De() ? Zb.Rj && (a = ka.Ce(), Wa[v](a.pb(), 6)) : Zb.Pr && k()) : Ra && 0 == b && Ra.Et()
    }
    function Bb() {
        if (ka.td()) {
            var a =
            ka.De() ? ka.Ce(): ka.Pj();
            if (a.li())
                return a
        }
        return null
    }
    function Yb(a, b) {
        var d = a.pb();
        return of(Mc, d)?!1 : (ea(), b ? J(d, !0) : C(d), !0)
    }
    function sb(a, b) {
        Za = a || "";
        hb();
        ia[Tb]();
        b || (Ia.vb(4, {
            Oe: Lc,
            input: Za
        }), $b.Sk(Za))
    }
    function hb() {
        var a = Ma.dk(Za);
        a != Lc && (ia.$j(a), Lc = a)
    }
    function kb(a) {
        Za = Mc = a || "";
        hb()
    }
    var Ja = tg, S = sg, ia, Ra, Ma, Ia, eb, pb, Wa, Pb, xb, ka, Jc, se, Kc, $b, Mc, Za, Lc, hh, yf, Wf, Yf, zf, Xf, te, Zb, Qb = {
        ha: function(a) {
            ia = a.get(O.Ge, Qb);
            Ra = a.get(O.ze, Qb);
            Ma = a.get(O.Tf, Qb);
            Ia = a.get(O.rb, Qb);
            eb = a.get(O.gc, Qb);
            pb = a.get(O.xd,
            Qb);
            Wa = a.get(O.ud, Qb);
            Pb = a.Ab(O.Wc, Qb);
            xb = a.get(O.Cc, Qb);
            ka = a.get(O.Nb, Qb);
            Jc = a.get(O.Qf, Qb);
            se = a.get(O.Ke, Qb);
            Kc = a.Ab(O.Pe, Qb);
            $b = a.ye();
            hh = a.Vh().Vj()
        },
        sb: function(a) {
            Zb = a;
            Pb[Dd](tf);
            Za = Mc = ia.Zr() || ""
        },
        da: function(a) {
            Zb = a;
            Xf = zf=!1;
            hb()
        },
        L: function() {
            return O.Ta
        },
        W: function() {
            return 3
        },
        V: function() {
            return {
                tn: a,
                es: b,
                gs: d,
                hs: e,
                js: g,
                cs: f,
                Nf: k,
                ds: l,
                bs: n,
                $r: q,
                fs: t,
                ls: w,
                un: y,
                bi: F,
                ms: x,
                pk: N,
                eo: z,
                kn: J,
                cz: K,
                dz: L,
                Sc: C,
                jn: E,
                Sr: Z,
                bt: ea,
                rn: U,
                Dc: la,
                cb: Y,
                dk: ja,
                Of: W,
                ck: ca,
                zd: sa,
                Ee: na,
                sn: Ha,
                qs: ya,
                rs: Va,
                ss: Ea,
                ks: T,
                ok: La,
                ez: aa,
                Zj: fa,
                search: bb,
                clear: P,
                Ad: qb,
                qi: ma,
                hn: rb
            }
        }
    };
    return Qb
});
Bg[Xb](O.Nb, 17, function() {
    function a(a) {
        a.Oe = Pb;
        a.marginWidth = Wa;
        var b = xb.fn;
        b || (b = "rtl" == Pb ? "right" : "left");
        a.uk = b
    }
    function b(a, b, e) {
        var f=!1;
        a = sb && sb.jz(b);
        Z();
        (Ja = b) && b[G] && (f = b[0].pb(), bb.It(f) && (f = ma.Dc()), Pb = bb.dk(f), e ? (Ra = aa.Kt, f = fa.Fs(b, Pb), b = b[0].Aa().ob("a"), b = jf(b), Wa = rb.Ee(b)) : (Ra = aa.Bo, f = fa.ka(ya(), Pb), Wa = 0), a && (ia = sb.iz(), d(sb.gz())), f ? C() : Z());
        return f
    }
    function d(a) {
        La();
        if (S != a) {
            var b = S;
            S = a;
            T(b)
        }
    }
    function e() {
        if (J())
            if (Ma) {
                var a = S;
                S == Ja[G] - 1 ? ia = S = null : null == S ? S = 0 : ++S;
                ia = S;
                Ea(a, e)
            } else 
                C()
    }
    function g() {
        if (J())
            if (Ma) {
                var a = S;
                Ja && 0 != S ? null == S ? S = Ja[G] - 1 : --S : ia = S = null;
                ia = S;
                Ea(a, g)
            } else 
                C()
    }
    function f(a) {
        var b = a ? 4: 3;
        if (K())
            a = N(), fa.ei(a) || ma[v](b), b = ma.Dc(), kb.Oi(b, a);
        else 
            ma[v](b)
    }
    function k(a) {
        return fa.Nf(a)
    }
    function l(a) {
        ia = S = a;
        a = Ja[a];
        var b = ma.Dc();
        kb.Oi(b, a)
    }
    function n() {
        return Ma
    }
    function q() {
        return Ia
    }
    function t(a) {
        Ia&&!a && Z();
        Ia = a
    }
    function w() {
        return Ra
    }
    function y() {
        return Ja
    }
    function F() {
        return J() ? Ja[0] : null
    }
    function x() {
        return S
    }
    function N() {
        return K() ? Ja[ia] : null
    }
    function z() {
        return ia
    }
    function J() {
        return !(!Ja ||!Ja[G])
    }
    function K() {
        return null != ia
    }
    function L() {
        Ma&&!eb && (eb = window[gc](Z, xb.Yr))
    }
    function C() {
        Ma || (P.ti(17), P.show(), Ma=!0, kb.Wk())
    }
    function E() {
        Ma && (eb && (pf(eb), eb = null), P.Rg(), Ma=!1, kb.Xk())
    }
    function Z() {
        E();
        Ja = null;
        Ra = aa.EMPTY;
        null != S && fa.Ci(S);
        ia = S = null;
        fa[Rb]()
    }
    function ea() {
        qb.Qj();
        E()
    }
    function U() {
        null != S && fa.Ci(S);
        ia = S = null
    }
    function la() {
        La();
        pb = window[gc](U, 0)
    }
    function Y() {
        La()
    }
    function ja(a) {
        if (J())
            C();
        else {
            var b = ma.Dc();
            if (b) {
                a = a || ma.Of();
                b = Dg(b, a);
                if (Bb) {
                    a =
                    b.gn();
                    for (var d = Yb.sd(), e = 0, f; f = Bb[e++];)
                        f.Uf(a, d)
                    }
                qb.cn(b)
            }
        }
    }
    function W() {
        return fa.Pa()
    }
    function ca() {
        return fa.ii()
    }
    function sa() {
        Ma=!1
    }
    function na() {
        fa.cg()
    }
    function Ha() {
        return 17
    }
    function ya() {
        if (J() && Ra == aa.Bo) {
            for (var a = [], b = [], d = 0, e; (e = fb[d++])&&!e.zo(ma.Dc(), Ja, b););
            (d = b ? b[G] : 0) && (d -= Va(b, a, 0));
            for (e = 0; e < Ja[G]; ++e)
                a[B](Ja[e]);
            d && (d -= Va(b, a, 1));
            xb.Xr && a[B](1);
            d && Va(b, a, 2);
            xb.en && a[B](2);
            hb && hb.Jt(a);
            return a
        }
        return null
    }
    function Va(a, b, d) {
        for (var e = 0, f = 0, g; f < a[G]; ++f)(g = a[f]) 
            && g.position ==
            d && (b[B](g), ++e);
        return e
    }
    function Ea(a, b) {
        if (null == S || fa.cf(S))
            if (T(a), null == S)
                ma.Sr();
            else {
                var d = fa.Bi(Ja[S]);
                ma.bi(d);
                kb.Yk(d)
            } else 
                fa.Ci(a), b()
    }
    function T(a) {
        La();
        null != a && fa.Ci(a);
        null != S && fa.Es(S)
    }
    function La() {
        pb && (pf(pb), pb = null)
    }
    var aa = rg, fa, bb, P, qb, ma, rb, fb, Bb, Yb, sb, hb, kb, Ja, S, ia, Ra, Ma, Ia, eb, pb, Wa, Pb, xb, ka = {
        ha: function(a) {
            fa = a.get(O.bg, ka);
            bb = a.get(O.Tf, ka);
            P = a.get(O.yd, ka);
            qb = a.get(O.gc, ka);
            ma = a.get(O.Ta, ka);
            rb = a.get(O.Sg, ka);
            fb = a.Ab(O.fe, ka);
            Bb = a.Ab(O.Wc, ka);
            Yb = a.get(O.Cc, ka);
            sb = a.get(O.Lt,
            ka);
            hb = a.get(O.ll, ka);
            kb = a.ye()
        },
        sb: function() {
            Bb[Dd](tf);
            fb[Dd](uf)
        },
        da: function(a) {
            xb = a;
            ia = S = null;
            Ra = aa.EMPTY;
            Ma=!1;
            Ia=!0;
            Pb = "";
            Wa = 0
        },
        L: function() {
            return O.Nb
        },
        W: function() {
            return 17
        },
        V: function() {
            return {
                Yj: b,
                Is: d,
                Tr: e,
                Ur: g,
                ei: f,
                Nf: k,
                Ds: l,
                Lf: n,
                isEnabled: q,
                Ym: t,
                Wr: w,
                Eb: y,
                Pj: F,
                hz: x,
                Ce: N,
                dt: z,
                td: J,
                De: K,
                Vr: L,
                show: C,
                Rg: E,
                clear: Z,
                Sj: ea,
                Gs: U,
                Hs: la,
                fz: Y,
                Sh: ja
            }
        },
        dg: function() {
            var b = {
                Vn: a,
                Pa: W,
                ii: ca,
                Wn: sa,
                cg: na,
                Ek: Ha
            };
            return [{
                hb: $e,
                ha: $e,
                sb: $e,
                da: $e,
                L: function() {
                    return O.hi
                },
                W: function() {
                    return 17
                },
                V: function() {
                    return b
                },
                dg: $e,
                Bb: $e
            }
            ]
        },
        Bb: function() {
            eb && (pf(eb), eb = null);
            Ja = null;
            E()
        }
    };
    return ka
});
Bg[Xb](O.Yg, 8, function() {
    function a(a) {
        a != E && (E = a, a = a.Pa(), Z ? a != Z && L[Rc](a, Z) : L[p](a), Z = a)
    }
    function b() {
        C || (C = L ? oa.max(L[Nc], 0) : 0);
        return C
    }
    function d(a) {
        m(L, a.nv ? "gssb_e gsdd_a" : "gssb_e");
        var b = a.Oe || ja;
        N != b && (N = b, Pf(x, b));
        b = a.marginWidth;
        if (K != b) {
            var d = J[u];
            b ? (z[sc]() || z[p](J), Aa(d, b + "px"), ig && (d.paddingLeft = "1px")) : (z[sc]() && z[xd](J), d.paddingLeft = "");
            K = b
        }
        ca = a.So;
        sa = a.uk;
        n(ea, !0);
        n(Y, !0);
        w.vb(16);
        g()
    }
    function e() {
        C = 0;
        n(ea, !1);
        n(Y, !1);
        var a = ja;
        N != a && (N = a, Pf(x, a));
        w.vb(11)
    }
    function g() {
        C = 0;
        k();
        if (Y) {
            var a =
            y.Ft[0], d = Y[u];
            "relative" != y.Ug && (d.top = x[u].top, $a(d, x.offsetLeft + z[Db] + "px"));
            a = b() + a;
            Qa(Y[u], oa.max(a, 0) + "px");
            l(Y, L[Db])
        }
        E && E.cg()
    }
    function f(a) {
        if (U)
            la != a && U[Rc](a, la);
        else {
            var b = x[ed]( - 1);
            Qa(b[u], "0");
            b[nd]( - 1);
            U = b[nd]( - 1);
            q.Lf() || (n(L, !1), n(x, !0), g());
            ea = L;
            U[p](a)
        }
        la = a
    }
    function k() {
        var a, b, d;
        a = (b = E && E.ii()) ? b[Db] : t.Ee();
        (d = W) ? Ye(d) && (d = null) : K ||!ca ? (Aa(L[u], ""), Aa(x[u], "")) : (Aa(L[u], "100%"), d = a + y.df[2], l(x, d));
        if ("relative" != y.Ug) {
            var e = t.ck();
            b && (e.ne = Gf(b).ne);
            b = y.df;
            var f = b[1];
            b = b[0];
            b =
            e.Kl + t.zd() + b;
            "right" == sa ? (d = gg(x), a = bg(d) - (e.ne - f + a), d = void 0) : (e = e.ne + f, "center" == sa && d && (e += (a - d) / 2), d = e, a = void 0);
            f = {
                ne: 0,
                Kl: 0
            };
            "absolute" == y.Ug && y.$g && y.$g != h[vd] && (f = Gf(y.$g));
            e = x[u];
            e.top = b - f.Kl + "px";
            $a(e, e.right = "");
            void 0 != d ? $a(e, d - f.ne + "px") : e.right = a + f.ne + "px"
        }
        xf && (e.zoom = "normal", e.zoom = 1)
    }
    function l(a, b) {
        Ze(b) ? 0 < b && Aa(a[u], b + "px") : Aa(a[u], b)
    }
    function n(a, b) {
        a && Pa(a[u], b ? "" : "none")
    }
    var q, t, w, y, F, x, N, z, J, K, L, C, E, Z, ea, U, la, Y, ja, W, ca=!0, sa, na = {
        hb: function(a, b) {
            ja = a.Ie();
            b[A](".gssb_c", "border:0;position:absolute;z-index:989");
            b[A](".gssb_e", "border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "cursor:default");
            b[A](".gssb_f", "visibility:hidden;white-space:nowrap");
            b[A](".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
            b[A](".gsdd_a", "border:none!important")
        },
        ha: function(a) {
            q = a.get(O.yd, na);
            t = a.get(O.Ta, na);
            w = a.get(O.rb, na);
            F = a.Vh().ub()
        },
        sb: function(a) {
            y = a;
            x = Jf();
            m(x, "gstl_" + F + " gssb_c");
            n(x, !1);
            ea = x;
            var b = x[ed]( - 1);
            z = b[nd]( - 1);
            m(z, "gssb_f");
            J = Kf();
            L =
            b[nd]( - 1);
            m(L, "gssb_e");
            Aa(L[u], "100%");
            y.Gt && (Y = Bf("iframe", "gstl_" + F + " gssb_k"), n(Y, !1), (y.$g || h[vd])[p](Y));
            if (W = y.Xn)
                Ze(W) && (W += y.df[2]), l(x, W);
            k();
            (a.$g || h[vd])[p](x);
            w.Sb(8, g)
        },
        da: function(a) {
            y = a;
            x[u].position = a.Ug
        },
        L: function() {
            return O.Yg
        },
        W: function() {
            return 8
        },
        V: function() {
            return {
                ti: a,
                zd: b,
                ui: f,
                show: d,
                Rg: e,
                cg: g
            }
        }
    };
    return na
});
Bg[Xb](O.Ge, 4, function() {
    function a(a, b) {
        Bb && (Bb=!1, aa.ql(P, Y), aa.ql(P, ja));
        b || (b = a);
        P[Jd][Rc](a, P);
        b[p](P);
        fb && rb.Bs && (Df || ig ? aa.defer(function() {
            P[Jb]();
            Ef(P, hb.fi())
        }) : P[Jb]());
        W()
    }
    function b() {
        return Ra
    }
    function d(a) {
        var b = "rtl" == a == ("rtl" == Pb);
        P.dir = a;
        if (Ma) {
            fa.$j(a);
            var d = S[Jd];
            d[xd](Ma);
            b ? Vf(Ma, S) : d[Hb](Ma, S)
        }
        Ra && (Ra.dir = a, d = Ra[Jd], d[xd](Ra), b ? d[Hb](Ra, S) : Vf(Ra, S));
        0 != qb && (a = Of(a), Nf(P, a, 0))
    }
    function e() {
        return hb
    }
    function g() {
        return Gf(ia)
    }
    function f() {
        var a = ia ? ia[Nc]: 0;
        ka > a && (a = ka);
        return a
    }
    function k() {
        return Jc ? Jc : ia ? ia[Db] : 0
    }
    function l() {
        var a = P[Db];
        rb.dn && (a -= P[Nc]);
        return a
    }
    function n() {
        return P[cd]
    }
    function q(a) {
        (rb.on ? P : S || se || P)[u].background = a || "transparent"
    }
    function t() {
        Ja=!0
    }
    function w() {
        P[Mb]();
        ya()
    }
    function y() {
        lg && Ya(P, "");
        Ya(P, T.cb());
        lg && Ya(P, P[cd]);
        K()
    }
    function F() {
        if (!fb)
            try {
                P[Jb](), fb=!0, K()
        } catch (a) {}
    }
    function x() {
        fb && (P.blur(), fb=!1)
    }
    function N() {
        return fb
    }
    function z() {
        Ya(P, "")
    }
    function J() {
        var b = xb.get("gs_id");
        if (b)
            Ra = xb.get("gs_ttc"), S = xb.get("gs_tti"), T.ok() &&
            fa && (Ia = fa.Pa(), Ma = Ia[Jd]);
        else {
            b = Jf();
            b.id = xb.ub("gs_id");
            m(b, "gstl_" + ma + " " + (rb.Xj || P[rd]));
            var d = b[ed]( - 1), e = b[u], f = P[u];
            Aa(e, Jc ? Jc + "px" : f[zb]);
            Qa(e, ka ? ka + "px" : f[Hc]);
            Ba(e, "0");
            cg(P);
            m(P, rb.ik);
            Wa && (Ra = d[nd]( - 1), Ra.id = xb.ub("gs_ttc"), Ra[u].whiteSpace = "nowrap");
            S = d[nd]( - 1);
            S.id = xb.ub("gs_tti");
            m(S, "gsib_a");
            T.ok() && fa && (Ia = fa.Pa(), Ma = d[nd]( - 1), m(Ma, "gsib_b"), Ma[p](Ia));
            a(b, S)
        }
        mg && jg && (Qa(P[u], "1.25em"), P[u].marginTop = "-0.0625em");
        L(b);
        ia = b
    }
    function K() {
        if (fb) {
            var a = P[cd][G];
            hb = ff(a);
            Ef(P, a)
        }
    }
    function L(a) {
        aa.xb(a,
        "mouseup", function() {
            P[Jb]()
        })
    }
    function C() {
        aa.xb(P, "keydown", Z);
        (Cf || rb.us) && aa.xb(P, "keypress", U);
        aa.xb(P, "select", ya, 10);
        var a=!1, b = function(b) {
            aa.xb(P, b, la, 10, a)
        };
        b("mousedown");
        b("keyup");
        b("keypress");
        a=!0;
        b("mouseup");
        b("keydown");
        b("focus");
        b("blur");
        b("cut");
        b("paste");
        b("input");
        aa.xb(P, "compositionstart", E);
        aa.xb(P, "compositionend", E)
    }
    function E(a) {
        a = a[jd];
        "compositionstart" == a ? T.un(!0) : "compositionend" == a && T.un(!1)
    }
    function Z(a) {
        var b = a[Kb];
        kb = b;
        var d = (jg || ig) && If(b) && La.td(), e = b == Ea.Oo,
        f = b == Ea.Ti;
        eb=!1;
        b == Ea.gg && (eb = T.Nf());
        e && ((b = La.Ce()) && ea(b) ? La.ei(a[Id]) : aa.defer(function() {
            La.ei(a[Id])
        }));
        if (d || e || f || eb)
            a.Vi=!0
    }
    function ea(a) {
        return (a = bb[a.L()].kz) && a()
    }
    function U(a) {
        var b = a[Kb], d = b == Ea.Ti, e = b == Ea.gg && eb;
        if (b == Ea.Oo || d || e)
            a.Vi=!0
    }
    function la(a) {
        if (!pb) {
            var b = a.fg;
            if (!(b[dd]("key") || a.ctrlKey || a.altKey || a[Id] || a.metaKey))
                t: if (a = a[Kb], "keypress" != b) {
                var d = If(a), e;
                if ("keydown" == b) {
                    if (T.ls(229 == a), d)
                        break t
                } else if (e = a != kb, kb =- 1, !d || e)
                    break t;
                    switch (a) {
                    case Ea.Ti:
                        T.ds();
                        break;
                    case Ea.nu:
                        T.gs();
                        break;
                    case Ea.ou:
                        T.hs();
                        break;
                    case Ea.Eo:
                        T.js();
                        break;
                    case Ea.Do:
                        T.cs(hb);
                        break;
                    case Ea.qu:
                        T.bs(hb);
                        break;
                    case Ea.pu:
                        T.$r(hb)
                    }
                }
            ya();
            T.fs(P[cd], hb, b)
        }
    }
    function Y() {
        fb=!0;
        T.es()
    }
    function ja() {
        fb=!1;
        T.tn()
    }
    function W() {
        Bb || (Bb=!0, aa.xb(P, "focus", Y, 99), aa.xb(P, "blur", ja, 99))
    }
    function ca() {
        sb || (sb = window.setInterval(na, rb.As || 50))
    }
    function sa() {
        sb && (pf(sb), sb = null)
    }
    function na() {
        la({
            fg: "polling"
        })
    }
    function Ha() {
        ig && Sf(P)
    }
    function ya() {
        if (fb) {
            var a = Ff(P);
            a && (hb = a)
        }
    }
    function Va() {
        var a;
        aa.eg(window, "pagehide", function() {
            pb=!0;
            a = P[cd]
        });
        aa.eg(window, "pageshow", function(b) {
            pb=!1;
            b.persisted && T.Sc(a)
        })
    }
    var Ea = Ag, T, La, aa, fa, bb, P, qb, ma, rb, fb, Bb=!1, Yb, sb, hb = ff(0), kb =- 1, Ja=!1, S, ia, Ra, Ma, Ia, eb, pb, Wa, Pb, xb, ka, Jc, se, Kc = {
        hb: function(a, b) {
            xb = a;
            P = a.jk();
            Pb = a.Ie();
            a.$h() || (b[A](".gsib_a", "width:100%;padding:4px 6px 0"), b[A](".gsib_a,.gsib_b", "vertical-align:top"))
        },
        ha: function(a) {
            T = a.get(O.Ta, Kc);
            aa = a.get(O.rb, Kc);
            La = a.get(O.Nb, Kc);
            fa = a.get(O.Ke, Kc);
            bb = eg(a.Ab(O[bd], Kc));
            a = a.Vh();
            qb = a.Vj();
            ma =
            a.ub()
        },
        sb: function(a) {
            rb = a;
            ka = a.mn;
            Jc = a.ys;
            fb = Hf(P);
            ya();
            Df && aa.xb(P, "beforedeactivate", function(a) {
                Ja && (Ja=!1, a.Vi=!0)
            }, 10);
            ig && Va();
            ia = P;
            Wa=!!a.Je[O.ze];
            (T.ks() || T.ok() || Wa || a.ws) && J();
            a.vs && (aa.xb(P, "blur", sa, 10), aa.xb(P, "focus", ca, 10), Yb=!0);
            aa.Sb(8, Ha);
            C();
            W()
        },
        da: function(a) {
            rb = a;
            var b = a.xs;
            b && (se = xb.Wh(b));
            P[Nb]("autocomplete", "off");
            P[Nb]("spellcheck", a.spellcheck);
            P[u].outline = a.zs ? "" : "none";
            Yb && ca()
        },
        L: function() {
            return O.Ge
        },
        W: function() {
            return 4
        },
        V: function() {
            return {
                lz: a,
                rn: b,
                $j: d,
                Of: e,
                ck: g,
                zd: f,
                Ee: k,
                sn: l,
                Zr: n,
                qi: q,
                Zj: t,
                select: w,
                refresh: y,
                focus: F,
                blur: x,
                Uh: N,
                clear: z
            }
        },
        Bb: function() {
            Yb && sa();
            rb.Oj && aa.ql(P, T.tn)
        }
    };
    return Kc
});
Bg[Xb](O.bg, 18, function() {
    function a(a, b) {
        if (!ya)
            return !1;
        na = b;
        J();
        for (var d=!1, e = 0, f; f = a[e++];)
            y(f) && (d=!0);
        return d
    }
    function b(a) {
        var b = E[a.L()];
        return b && b.Iu ? b.Iu(a) : !1
    }
    function d(a) {
        return E[a.L()].jh(null, a, Z)
    }
    function e(a) {
        var b = E[a.L()];
        if (b && b.Bi) {
            var d = C.Dc();
            return b.Bi(a, d)
        }
        return a.pb()
    }
    function g(a, b) {
        if (!ya)
            return !1;
        na = b;
        J();
        for (var d=!1, e = 0, f; f = a[e++];)
            if (1 == f)
                if (Ea)
                    Va[p](Ea);
                else {
                    f = x();
                    var g = f[u];
                    g.textAlign = "center";
                    g.whiteSpace = "nowrap";
                    f.dir = Ha;
                    g = Kf();
                    g[u].position = "relative";
                    T = Kf();
                    m(T, "gssb_g");
                    U.en && (T[u].paddingBottom = "1px");
                    F(U.Ss, T, 13);
                    U.Os ? F(U.Dk, T, 8) : U.Ps && F(U.Ts, T, 14);
                    g[p](T);
                    f[p](g);
                    Ea = f[Jd]
                } else if (2 == f)
                    if (La)
                        Va[p](La);
                    else 
                        f = x(), g = f[u], Ba(g, "1px 4px 2px 0"), g.fontSize = "11px", g.textAlign = "right", g = Bf("a"), g.id = "gssb_b", Oa(g, "http://www.google.com/support/websearch/bin/answer.py?hl=" + U.Fe + "&answer=106230"), Xa(g, U.Rs), f[p](g), La = f[Jd];
        else if (3 == f)
            if (f = W.pop())
                Va[p](f);
            else 
                f = ya[ed]( - 1), f.Ju=!0, f = f[nd]( - 1), g = Bf("div", "gssb_l"), f[p](g);
        else 
            y(f) && (d=!0);
        return d
    }
    function f(a) {
        N(a, aa);
        var b = K.Eb();
        b && L.vb(9, {
            index: a,
            nz: b[a],
            oz: ca[a]
        })
    }
    function k(a) {
        N(a, "");
        L.vb(10)
    }
    function l() {
        for (var a, b, d; d = Y.pop();)
            a = d.L(), (b = la[a]) || (b = la[a] = []), b[B](d), a = d.Pa(), a[Jd][xd](a);
        for (; a = Va[Lb];)
            a = Va[xd](a), a.Ju ? W[B](a) : a != Ea && a != La && ja[B](a);
        ca = []
    }
    function n(a) {
        return (a = ca[a]) ? a.cf() : !1
    }
    function q() {
        J()
    }
    function t() {
        return ya
    }
    function w() {
        return U.pn || Ha == na ? sa : null
    }
    function y(a) {
        var b = a.L(), d = E[b];
        if (!d)
            return !1;
        var e = (b = la[b]) && b.pop();
        e || (e = d.ih(Z));
        d.ka(a, e);
        Y[B](e);
        var f =
        e.Pa(), b = x();
        m(b, "gssb_a " + U.ho);
        b[p](f);
        if (void 0 !== a.ge) {
            ca[B](e);
            var e = na, g = a.ge();
            U.Qs && (f.onmouseover = function() {
                K.Is(g)
            }, f.onmouseout = function() {
                K.Hs()
            });
            ob(f, function(b) {
                C.pk();
                a.li() && C.bi(a.pb());
                K.Gs();
                K.Ds(g);
                b = b || gg(f)[Pd];
                d.Gd(b, a, Z)
            })
        } else 
            e = Ha;
        Pf(b, e);
        return !0
    }
    function F(a, b, d) {
        var e = Bf("input");
        ab(e, "button");
        Ya(e, jf(a));
        ob(e, function() {
            Z[v](C.cb(), d)
        });
        var f;
        if (U.Ns) {
            a = "lsb";
            f = Bf("span");
            var g = Bf("span");
            m(f, "ds");
            m(g, "lsbb");
            f[p](g);
            g[p](e)
        } else 
            a = "gssb_h", f = e;
        m(e, a);
        b[p](f)
    }
    function x() {
        var a =
        ja.pop();
        if (a)
            return Va[p](a), a[Lb];
        a = ya[ed]( - 1);
        a = a[nd]( - 1);
        m(a, U.ho);
        a.onmousedown = z;
        return a
    }
    function N(a, b) {
        var d = ca[a];
        d && d.cf() && m(d.Pa()[Jd][Jd], b)
    }
    function z(a) {
        a = a || gg(ya)[Pd];
        a[jc] ? a[jc]() : Cf || Df && C.Zj();
        return !1
    }
    function J() {
        if (T) {
            var a = U.fo ? U.fo: C.Ee() - 3;
            0 < a && Aa(T[u], a + "px")
        }
    }
    var K, L, C, E, Z, ea, U, la = {}, Y = [], ja = [], W = [], ca = [], sa, na, Ha, ya, Va, Ea, T, La, aa, fa = {
        hb: function(a, b) {
            ea = a;
            Ha = a.Ie();
            b[A](".gssb_a", "padding:0 7px");
            b[A](".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
            b[A]("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
            b[A]("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
            b[A](".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
            b[A](".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (jg ? ";-webkit-appearance:button" : ""));
            b[A](".gssb_i", "background:#eee");
            b[A](".gss_ifl", "visibility:hidden;padding-left:5px");
            b[A](".gssb_i .gss_ifl", "visibility:visible");
            b[A]("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
            b[A]("a.gssb_j:hover", "text-decoration:underline");
            b[A](".gssb_l", "height:1px;background-color:#e5e5e5");
            b[A](".gssb_m", "color:#000;background:#fff")
        },
        ha: function(a) {
            K = a.get(O.Nb, fa);
            L = a.get(O.rb, fa);
            C = a.get(O.Ta, fa);
            Z = a.get(O.ud, fa);
            E = eg(a.Ab(O[bd], fa))
        },
        sb: function(a) {
            U = a;
            ya = Jf();
            a = Bf("tbody");
            ya[p](a);
            Va = ya[ac]("tbody")[0]
        },
        da: function(a) {
            U = a;
            var b = a.qn;
            b && (sa = ea.Wh(b));
            m(ya, a.xn || "gssb_m");
            aa = a.wn || "gssb_i"
        },
        L: function() {
            return O.bg
        },
        W: function() {
            return 18
        },
        V: function() {
            return {
                Fs: a,
                Bi: e,
                ei: d,
                Nf: b,
                ka: g,
                Es: f,
                Ci: k,
                clear: l,
                cf: n,
                cg: q,
                Pa: t,
                ii: w
            }
        }
    };
    return fa
});
Bg[Xb](O.Pi, 346, function() {
    function a(a) {
        a = d.Aa(a);
        for (var f in k)
            f in a || (a[f] = k[f]);
        b(e + bf(a))
    }
    function b(a) {
        var b = new Image, d = f;
        b.onerror = za(b, b.onabort = function() {
            try {
                delete g[d]
            } catch (a) {}
        });
        g[f] = b;
        b.src = a;
        f++
    }
    var d, e, g = [], f = 0, k, l = {
        ha: function(a) {
            d = a.get(O.Bd, l)
        },
        da: function(a) {
            e = "//" + (a.Hu || "www." + a.No) + "/gen_204?";
            k = a.Ao || {}
        },
        L: function() {
            return O.Pi
        },
        W: function() {
            return 346
        },
        V: function() {
            return {
                pi: a
            }
        }
    };
    return l
});
Bg[Xb](O.Fi, 21, function() {
    function a(a) {
        l(a);
        var b = a.fd();
        if ((!b ||!b.up()) && w)
            for (b = 0; b < w[G]; ++b)
                w[b].update(a)
    }
    function b(a) {
        var b = t[a.tp()] || null;
        if (b)++y;
        else if (w&&!a.up())
            for (var d = 0; d < w[G]; ++d)
                if (b = w[d].get(a)) {
                    l(b);
                    ++F;
                    break
                }
        return b ? Fg(a, b.Eb(), b.Aa(), b.ol(), b.ej(), b.Nv()) : null
    }
    function d() {
        return y
    }
    function e() {
        return F
    }
    function g() {
        F = y = 0
    }
    function f(a) {
        var b, d, e, f;
        for (f in t)
            for (b = t[f], b = b.Eb(), e = 0; d = b[e++];)
                if (d.L() == a) {
                    delete t[f];
                    break
                }
        n()
    }
    function k() {
        t = {};
        n()
    }
    function l(a) {
        a && a.ej() &&
        (t[a.fd().tp()] = a)
    }
    function n() {
        if (w)
            for (var a = 0; a < w[G]; ++a)
                w[a][Dc]()
    }
    function q(a, b) {
        return b.kb() - a.kb()
    }
    var t = {}, w, y, F, x = {
        ha: function(a) {
            w = a.Ab(O.Ye, x);
            w[Dd](q)
        },
        da: function() {
            g()
        },
        L: function() {
            return O.Fi
        },
        W: function() {
            return 21
        },
        V: function() {
            return {
                put: a,
                get: b,
                tu: d,
                cl: e,
                Ad: g,
                su: f,
                ru: k
            }
        }
    };
    return x
});
Bg[Xb](O.Fd, 190, function() {
    function a() {
        t && n.Pl(l)
    }
    function b() {
        t && n.mj(l)
    }
    function d() {
        t && q.Pl(l)
    }
    function e() {
        t && q.mj(l)
    }
    var g, f, k, l, n, q, t=!1, w = {
        hb: function(a, b) {
            k = a;
            var d = function(a) {
                return "box-shadow:" + a + "-moz-box-shadow:" + a + "-webkit-box-shadow:" + a
            };
            b[A](".gsfe_a", "border:1px solid #b9b9b9;border-top-color:#a0a0a0;" + d("inset 0px 1px 2px rgba(0,0,0,0.1);"));
            b[A](".gsfe_b", "border:1px solid #4d90fe;outline:none;" + d("inset 0px 1px 2px rgba(0,0,0,0.3);"))
        },
        ha: function(a) {
            g = a.get(O.rb, w);
            f = a.get(O.Ta,
            w)
        },
        sb: function(f) {
            var t = f.dl;
            if (l = t ? k.Wh(t) : null)
                g.Sb(12, d), g.Sb(13, e), g.xb(l, "mouseover", a), g.xb(l, "mouseout", b), n = Kg(f.fl || "gsfe_a"), q = Kg(f.el || "gsfe_b")
        },
        da: function() {
            t=!0;
            l && f.eo() && q.Pl(l)
        },
        L: function() {
            return O.Fd
        },
        W: function() {
            return 190
        },
        Bb: function() {
            t=!1;
            l && (n.mj(l), q.mj(l))
        }
    };
    return w
});
var Kg = function(a) {
    var b = new RegExp("(?:^|\\s+)" + a + "(?:$|\\s+)");
    return {
        Pl: function(d) {
            d&&!b[Qc](d[rd]) && m(d, d[rd] + (" " + a))
        },
        mj: function(a) {
            a && m(a, a[rd][r](b, " "))
        }
    }
};
var Lg = function() {
    function a(a) {
        if ("keyup" == a.ij()) {
            var b = Xe();
            if (n) {
                var d = b - n;
                e += d;
                g += d * d
            }
            a = a.Jb()[G];
            a < l&&++f;
            ++k;
            l = a;
            n = b
        }
    }
    function b() {
        return [e, g, k, f]
    }
    function d() {
        n = l = k = f = g = e = 0
    }
    var e, g, f, k, l, n;
    return {
        L: function() {
            return O.Fd
        },
        W: function() {
            return 325
        },
        V: function() {
            return {
                zw: a,
                vl: b,
                Ad: d
            }
        }
    }
};
var Mg = function() {
    function a() {
        return 23
    }
    function b() {
        return f.vl()[Nd]("j")[r](e, "j")[r](g, "")
    }
    function d() {
        f.Ad()
    }
    var e = /j0/g, g = /j+$/, f, k = {
        ha: function(a) {
            f = a.Po(325, k)
        },
        L: function() {
            return O.vi
        },
        W: function() {
            return 337
        },
        V: function() {
            return {
                ge: a,
                mv: b,
                reset: d
            }
        }
    };
    return k
};
var Ng = function() {
    function a(a) {
        d.zw(a);
        return 1
    }
    function b() {
        return 17
    }
    var d, e = {
        ha: function(a) {
            d = a.Po(325, e)
        },
        L: function() {
            return O.Wc
        },
        W: function() {
            return 331
        },
        V: function() {
            return {
                Uf: a,
                kb: b
            }
        }
    };
    return e
};
var Og = function() {
    function a(a) {
        return F && y == a.Jb() ? Fg(a, F, Eg, !0, !1, !1) : null
    }
    function b(a) {
        return !!a && 0 <= a[dd]("**")
    }
    function d() {
        return J
    }
    function e() {
        J = ""
    }
    function g() {
        var a=!x ||!q.cb();
        a != N && (N ? z[Ec]("x-webkit-speech") : z[Nb]("x-webkit-speech", ""), N = a)
    }
    function f(a, b) {
        b = hf(b);
        a = hf(cf(a, !0));
        for (var d = a[hc](" "), e = b[hc](" "), f, g = 0; g < e[G]; ++g)
            f = e[g], 0 > d[dd](f) && (e[g] = f.bold());
        return e[Nd](" ")[r](l, " ")
    }
    function k(a) {
        a = a && a.Tv ? a.Tv : [];
        var d = oa.min(a[G], 3);
        y = a[0].Uv;
        t.add(6);
        if (b(y)) {
            F = [];
            for (var e =
            0; e < d; ++e) {
                var g = a[e].Uv;
                b(g) || F[B](Gg(f(y, g), g, e, 40, null))
            }
        } else 
            F = null, J = y, w[v](y, 15)
    }
    var l = /<\/b> <b>/gi, n, q, t, w, y, F, x, N, z, J = "", K = {
        hb: function(a) {
            z = a.jk()
        },
        ha: function(a) {
            n = a.get(O.rb, K);
            q = a.get(O.Ta, K);
            t = a.get(O.xd, K);
            w = a.get(O.ud, K)
        },
        sb: function(a) {
            x = a.mu;
            g();
            z[Nb]("x-webkit-grammar", "builtin:search");
            "" != a.Fe && z[Nb]("lang", a.Fe);
            n.eg(z, "webkitspeechchange", k);
            x && (n.Sb(4, g), n.Sb(5, g), n.Sb(1, g))
        },
        L: function() {
            return O.Qg
        },
        W: function() {
            return 90
        },
        V: function() {
            return {
                Lv: e,
                Mv: d,
                Qv: a,
                jo: b
            }
        }
    };
    return K
};
var Qg = function() {
    function a(a) {
        return Pg(g, a)
    }
    function b(a, b) {
        b.ka(a.nh(), a.pb(), f)
    }
    function d(a, b, d) {
        d[v](b.pb(), 1)
    }
    function e() {
        return 40
    }
    var g, f, k = {
        hb: function(a, b) {
            b[A](".gsq_a", "padding:0")
        },
        ha: function(a) {
            g = a.get(O.Ta, k)
        },
        da: function(a) {
            f = a.ek ? a.Dk : ""
        },
        L: function() {
            return O[bd]
        },
        W: function() {
            return 30
        },
        V: function() {
            return {
                ih: a,
                ka: b,
                Gd: d,
                jh: $e,
                oh: e
            }
        }
    };
    return k
};
var Pg = function(a, b) {
    var d, e, g, f, k;
    (function() {
        d = Kf();
        m(d, "gsq_a");
        var a = Jf();
        d[p](a);
        e = a[ed]( - 1);
        a = e[nd]( - 1);
        Aa(a[u], "100%");
        g = Bf("span");
        a[p](g)
    })();
    return {
        Pa: function() {
            return d
        },
        L: function() {
            return 40
        },
        cf: function() {
            return !0
        },
        ka: function(d, n, q) {
            Xa(g, d);
            k = n;
            q&&!f && (f = Zf(e), ob(f, function(d) {
                a.pk();
                a.bi(k);
                b[v](k, 9);
                return Uf(d)
            }));
            q ? (Xa(f, q + " &raquo;"), Pa(f[u], "")) : f && Pa(f[u], "none")
        }
    }
};
var Rg = function() {
    function a(a) {
        var b = a.ij();
        return d && "input" == b && d.Mv() == a.Jb() ? (d.Lv(), 3) : 1
    }
    function b() {
        return 22
    }
    var d, e = {
        ha: function(a) {
            d = a.get(O.Qg, e)
        },
        L: function() {
            return O.Wc
        },
        W: function() {
            return 465
        },
        V: function() {
            return {
                Uf: a,
                kb: b
            }
        }
    };
    return e
};
var Sg = function() {
    function a() {
        return 1
    }
    function b(a) {
        var b = null;
        d && (b = d.Qv(a));
        return b
    }
    var d, e = {
        L: function() {
            return O.Ye
        },
        ha: function(a) {
            d = a.get(O.Qg, e)
        },
        W: function() {
            return 100
        },
        V: function() {
            return {
                kb: a,
                update: $e,
                get: b,
                reset: $e
            }
        }
    };
    return e
};
var Tg = function(a) {
    function b() {
        g.eo() || g.cb() ? d() : a&&!f && (g.qi(a), f=!0)
    }
    function d() {
        if (f || void 0 == f)
            g.qi("#fff"), f=!1
    }
    var e, g, f, k, l = {
        hb: function(a) {
            k = a.jk()
        },
        ha: function(a) {
            e = a.get(O.rb, l);
            g = a.get(O.Ta, l)
        },
        sb: function() {
            e.xb(k, "focus", d);
            e.xb(k, "blur", b);
            e.Sb(4, b);
            e.Sb(5, b)
        },
        da: function() {
            b()
        },
        L: function() {
            return O.Fd
        },
        W: function() {
            return 166
        },
        Bb: function() {
            d()
        }
    };
    return l
};
var Ug = function(a) {
    function b(b) {
        var d = e.DONT_CARE;
        if (g) {
            var l = b.ij();
            "focus" == l || "blur" == l || "mousedown" == l ? d = e.vo : (b.Xi("partnerid", a), b.setParameter("types", "t"))
        }
        return d
    }
    function d() {
        return 10
    }
    var e = tg, g;
    return {
        da: function(a) {
            g=!!a.Je[66]
        },
        L: function() {
            return O.Wc
        },
        W: function() {
            return 66
        },
        V: function() {
            return {
                Uf: b,
                kb: d
            }
        }
    }
};
var Wg = function(a) {
    function b() {
        return Vg(a, g)
    }
    function d(a, b) {
        b.ka(a)
    }
    function e() {
        return 505
    }
    var g;
    return {
        hb: function(a) {
            g = a.Ie()
        },
        L: function() {
            return O[bd]
        },
        W: function() {
            return 182
        },
        V: function() {
            return {
                ih: b,
                ka: d,
                Gd: $e,
                jh: $e,
                oh: e
            }
        }
    }
}, Vg = function(a, b) {
    var d, e = {
        L: function() {
            return 505
        },
        Pa: function() {
            return d
        },
        ka: $e
    };
    (function() {
        d = Kf();
        var e = d[u];
        e.backgroundImage = "url(" + a + ")";
        e.backgroundRepeat = "no-repeat";
        Qa(e, "18px");
        e.marginBottom = "2px";
        e.backgroundPosition = "bottom " + ("ltr" == b ? "right" : "left")
    })();
    return e
};
Bg[Xb](O.fe, 181, function() {
    function a() {
        return 5
    }
    function b(a, b, g) {
        g[B]({
            L: function() {
                return 505
            },
            position: 1
        })
    }
    return {
        L: function() {
            return O.fe
        },
        W: function() {
            return 181
        },
        V: function() {
            return {
                kb: a,
                zo: b
            }
        }
    }
});
var Yg = function(a, b) {
    function d() {
        F = null;
        t && Xa(t.Pa(), "")
    }
    function e(a, b) {
        var d = J[G];
        switch (a[Kb]) {
        case L.Do:
            var e = k(b);
            if (0 > e)
                break;
            Tf(a);
            J[(e + 1)%d][Jb]();
            break;
        case L.Eo:
            e = k(b);
            if (0 > e)
                break;
            Tf(a);
            J[(e - 1 + d)%d][Jb]();
            break;
        case L.Ti:
            z=!1;
            q[Jb]();
            break;
        case L.gg:
            if (Tf(a), z=!1, a[Id])
                q[Jb]();
            else 
                q.Ml(), K && K[Jb]()
        }
    }
    function g() {
        window[gc](function() {
            z && 0 > k(h.activeElement) && (z=!1, q.Uh() || q.Ml())
        }, 10)
    }
    function f() {
        var a = t.Pa();
        if (a[fd])
            return a[fd]("cse-sayt-accessibility");
        for (var a = a[ac]("a"), b = /\bcse-sayt-accessibility\b/,
        d = [], e = 0; e < a[G]; e++)
            b[Qc](a[e][rd]) && d[B](a[e]);
        return d
    }
    function k(a) {
        for (var b = 0; b < J[G]; b++)
            if (J[b] == a)
                return b;
        return - 1
    }
    function l(a, b, d, e) {
        b = null;
        a && (b = a[0], x.put(e ? d + e : d, b));
        d != w || e && e != y || (F = b, n())
    }
    function n() {
        t && F ? Xa(t.Pa(), F) : d();
        b && b()
    }
    var q, t, w, y, F, x, N, z=!1, J, K, L = Ag, C = {
        ha: function(a) {
            q = a
        },
        Rv: function(a) {
            t = a;
            n()
        },
        vp: function() {
            var b;
            t: {
                if (q) {
                    b = null;
                    if (q.De())
                        b = q.Ce();
                    else if (q.td()) {
                        var e = q.sd();
                        e && (b = Ve(e).Eb()[0])
                    }
                    if (b) {
                        b = b.pb();
                        break t
                    }
                }
                b = null
            }
            e = N && N.restrictBy ? N.restrictBy : "";
            if (w !=
            b || e != y)
                if (w = b, y = e, b) {
                    var f = x.get(e ? b + e : b);
                    f ? b != w || e && e != y || (F = f, n()) : (d(), a(b, l, C))
                } else 
                    d()
        },
        ml: d,
        Bv: function() {
            var a = f();
            J = [];
            for (var b = 0; b < a[G]; b++) {
                var d = a[b];
                d[id] ? (J[B](d), d[id]("keydown", function(a) {
                    e(a, a[ad] ? a[ad] : this)
                }, !0), d[id]("blur", function() {
                    g()
                }, !0)) : d[Ub] && (J[B](d), d[Ub]("onkeydown", function(a) {
                    e(a, a[ad] ? a[ad] : this)
                }), d[Ub]("onblur", function() {
                    g()
                }))
            }
            J[G] && (z=!0, window[gc](function() {
                K = h.activeElement;
                J[0][Jb]()
            }, 10))
        },
        zv: function() {
            window[gc](function() {
                z || q.Ml()
            }, 20)
        },
        Av: function(a) {
            N =
            a
        }
    };
    x = Xg(36E5);
    return C
};
var $g = function(a) {
    function b() {
        return Zg(g)
    }
    function d(b, d) {
        a.Rv(d)
    }
    function e() {
        return 503
    }
    var g, f = {
        ha: function(a) {
            g = a.get(O.Nb, f)
        },
        L: function() {
            return O[bd]
        },
        W: function() {
            return 68
        },
        V: function() {
            return {
                ih: b,
                ka: d,
                Gd: $e,
                jh: $e,
                oh: e
            }
        }
    };
    return f
}, Zg = function() {
    var a, b = {
        L: function() {
            return 503
        },
        Pa: function() {
            return a
        },
        ka: $e
    };
    a = Kf("cse-sayt-container");
    return b
};
Bg[Xb](O.fe, 67, function() {
    function a() {
        return 4
    }
    function b(a, b, g) {
        g[B]({
            L: function() {
                return 503
            },
            position: 1
        })
    }
    return {
        L: function() {
            return O.fe
        },
        W: function() {
            return 67
        },
        V: function() {
            return {
                kb: a,
                zo: b
            }
        }
    }
});
var ah = function(a, b) {
    function d() {
        return 2
    }
    function e(d) {
        for (var e = [], k = [], l = d.Eb(), n=!1, q = 0, t; t = l[q++];)
            34 == t.L() ? k[G] < b && (k[B](t), t.Aa().ob("c") && (n=!0)) : e[G] < a && e[B](sf(t, e[G]));
        for (q = 0; l = k[q++];) {
            t = l.Aa();
            var w = {};
            w.a = t.ob("a");
            w.b = t.ob("b");
            w.c = t.ob("c");
            w.d = t.ob("d");
            w.e = n;
            e[B](Gg("", "", e[G], l.L(), l.nf(), Hg(w)))
        }
        return Fg(d.fd(), e, d.Aa(), d.ol(), d.ej(), !0)
    }
    return {
        L: function() {
            return O.yi
        },
        W: function() {
            return 171
        },
        V: function() {
            return {
                kb: d,
                vv: e
            }
        }
    }
};
Bg[Xb](O.Ye, 98, function() {
    function a() {
        return 3
    }
    function b(a) {
        if (g) {
            var b = a.fd(), d = a.Eb();
            if (d[G]) {
                var e = b.ke();
                t:
                for (var b = Number.MAX_VALUE, l, n = 0; l = d[n++];) {
                    if (!f[l.L()]) {
                        b =- 1;
                        break t
                    }
                    l = l.pb();
                    b = oa.min(l[G], b)
                }
                if ( - 1 != b) {
                    var q = d[0].pb();
                    if (nf(q, e, !0))
                        for (n = e[G] + 1; n <= b;) {
                            e = null;
                            for (l = 0; q = d[l++];) {
                                q = q.pb();
                                if (n > q[G])
                                    return;
                                    q = q[cc](0, n);
                                    if (!e)
                                        e = q;
                                    else if (e != q)
                                        return 
                            }
                            k[e] = a;
                            ++n
                        }
                }
            }
        }
    }
    function d(a) {
        if (g) {
            var b = k[a.ke()];
            if (b) {
                var d = a.rp(), e = a.ke();
                b.fd().ke();
                for (var f = b.Aa(), q = n ||!f.Ho("k"), z = [], J, K, L =
                b.Eb(), C = 0, E; E = L[C++];)
                    K = E.pb(), J = q ? l.bold(d, K) : hf(K), z[B](Gg(J, K, E.ge(), E.L(), E.nf(), E.Aa()));
                delete k[e];
                return Fg(a, z, f, !0, b.ej(), !1)
            }
        }
        return null
    }
    function e() {
        k = {}
    }
    var g=!0, f, k = {}, l, n, q = {
        ha: function(a) {
            l = a.get(O.hj, q)
        },
        sb: function() {
            f = Te([0])
        },
        da: function(a) {
            n = a.Gk;
            g = a.Yn
        },
        L: function() {
            return O.Ye
        },
        W: function() {
            return 98
        },
        V: function() {
            return {
                kb: a,
                update: b,
                get: d,
                reset: e
            }
        },
        Bb: function() {
            g=!1
        }
    };
    return q
});
Bg[Xb](O[bd], 169, function() {
    function a() {
        return bh()
    }
    function b(a, b) {
        var d = a.Aa();
        b.ka(d.ob("a"), d.ob("c"), d.ob("d"), d.pw("e"))
    }
    function d(a, b) {
        return b
    }
    function e(a, b, d) {
        a = b.Aa().ob("b");
        (nf(a, "http://") || nf(a, "https://")) && d.pf(a)
    }
    function g(a, b, d) {
        a = b.Aa().ob("b");
        (nf(a, "http://") || nf(a, "https://")) && d.pf(a);
        return !0
    }
    function f() {
        return 34
    }
    return {
        hb: function(a, b) {
            b[A](".gscsep_a", "display:none")
        },
        L: function() {
            return O[bd]
        },
        W: function() {
            return 169
        },
        V: function() {
            return {
                ih: a,
                ka: b,
                Bi: d,
                Gd: e,
                jh: g,
                oh: f
            }
        }
    }
});
var bh = function() {
    var a, b, d, e, g;
    (function() {
        a = Kf();
        var f = Jf();
        m(f, "gsc-completion-promotion-table");
        a[p](f);
        var k = f[ed]( - 1), f = function() {
            var a = k[nd]( - 1);
            a[Nb]("valign", "top");
            return a
        };
        d = f();
        e = Bf("img");
        m(e, "gsc-completion-icon");
        b = Kf();
        m(b, "gsc-completion-title");
        g = Kf();
        m(g, "gsc-completion-snippet");
        f = f();
        f[p](b);
        f[p](g)
    })();
    return {
        Pa: function() {
            return a
        },
        L: function() {
            return 34
        },
        cf: function() {
            return !0
        },
        ka: function(a, k, l, n) {
            k && (nf(k, "http://") || nf(k, "https://") || nf(k, "//")) ? (e.src = k, d[sc]() || d[p](e)) :
            d[sc]() && d[xd](e);
            m(d, n ? "gsc-completion-icon-cell" : "gscsep_a");
            Xa(b, a);
            Xa(g, l)
        }
    }
};
Bg[Xb](O[bd], 20, function() {
    function a(a) {
        return ch(g, a)
    }
    function b(a, b) {
        b.ka(a.nh(), a.pb(), f)
    }
    function d(a, b, d) {
        d[v](b.pb(), 1)
    }
    function e() {
        return 0
    }
    var g, f, k = {
        hb: function(a, b) {
            b[A](".gsq_a", "padding:0")
        },
        ha: function(a) {
            g = a.get(O.Ta, k)
        },
        da: function(a) {
            f = a.ek ? a.Dk : ""
        },
        L: function() {
            return O[bd]
        },
        W: function() {
            return 20
        },
        V: function() {
            return {
                ih: a,
                ka: b,
                Gd: d,
                jh: $e,
                oh: e
            }
        }
    };
    return k
});
var ch = function(a, b) {
    var d, e, g, f, k;
    (function() {
        d = Kf();
        m(d, "gsq_a");
        var a = Jf();
        d[p](a);
        e = a[ed]( - 1);
        a = e[nd]( - 1);
        Aa(a[u], "100%");
        g = Bf("span");
        a[p](g)
    })();
    return {
        Pa: function() {
            return d
        },
        L: function() {
            return 0
        },
        cf: function() {
            return !0
        },
        ka: function(d, n, q) {
            Xa(g, d);
            k = n;
            q&&!f && (f = Zf(e), ob(f, function(d) {
                a.pk();
                a.bi(k);
                b[v](k, 9);
                return Uf(d)
            }));
            q ? (Xa(f, q + " &raquo;"), Pa(f[u], "")) : f && Pa(f[u], "none")
        }
    }
};
Bg[Xb](O.Pe, 77, function() {
    function a() {
        return t
    }
    function b() {
        return 77
    }
    function d() {
        return 5
    }
    function e() {
        return F
    }
    function g() {
        return {
            bv: !w
        }
    }
    function f() {
        l[Rb](!0)
    }
    function k() {
        y && ((w=!!l.cb()) && t ? q.cv(77) : q.$u(77))
    }
    var l, n, q, t, w, y, F, x, N = {
        hb: function(a, b) {
            x = a;
            a.$h() || (b[A](".gscb_a", "display:inline-block;font:27px/13px arial,sans-serif"), b[A](".gsst_a .gscb_a", "color:#a1b9ed;cursor:pointer"), b[A](".gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a", "color:#36c"))
        },
        ha: function(a) {
            l = a.get(O.Ta, N);
            n = a.get(O.rb,
            N);
            q = a.get(O.Ke, N)
        },
        sb: function(a) {
            t=!!a.Ni;
            y = a.Co;
            w=!y||!!l.cb();
            F = x.get("gs_cb");
            F || (F = Bf("span", "gscb_a"), F.id = x.ub("gs_cb"), Xa(F, "&times;"));
            n.Sb(4, k);
            n.Sb(5, k);
            n.Sb(1, k)
        },
        da: function(a) {
            a.Wj && (t=!!a.Ni);
            y = a.Co;
            w=!y||!!l.cb()
        },
        L: function() {
            return O.Pe
        },
        W: function() {
            return 77
        },
        V: function() {
            return {
                isEnabled: a,
                gp: b,
                kb: d,
                Pa: e,
                fp: g,
                Gd: f
            }
        }
    };
    return N
});
Bg[Xb](O.Ke, 174, function() {
    function a() {
        return 174
    }
    function b(a) {
        ya != a && (la.dir = ya = a, f())
    }
    function d() {
        return la
    }
    function e(a) {
        (a = ja[a]) && a[u] && Pa(a[u], "")
    }
    function g(a) {
        (a = ja[a]) && a[u] && Pa(a[u], "none")
    }
    function f() {
        W && (m(ja[W], "gsst_a"), L.Rg(), W = null)
    }
    function k(a, b) {
        W = a;
        var d = ja[a];
        m(d, "gsst_a gsst_g");
        var e = ca.lastChild;
        e != b && (e == sa ? ca[p](b) : ca[Rc](b, e));
        L.ti(174);
        L.show();
        d = d[sd];
        Aa(sa[u], d + "px");
        $a(sa[u], "rtl" == ya ? "0" : ca[sd] - d + "px")
    }
    function l(a, b) {
        W == a ? f() : k(a, b)
    }
    function n(a) {
        a.uk = "rtl" == ya ?
        "left" : "right";
        a.So=!1
    }
    function q() {
        return ca
    }
    function t() {
        return U.pn || Ha == ya ? Va : null
    }
    function w() {
        f()
    }
    function y() {
        return 174
    }
    function F(a, b) {
        return b.kb() - a.kb()
    }
    function x() {
        na != W && f()
    }
    function N() {
        for (var a, b = 0, d; d = Z[b++];)
            if (d[vc]()) {
                a=!0;
                var e = Bf("a", "gsst_a");
                K(e, d);
                e[p](d.Pa());
                la[p](e)
            }
        Pa(la[u], a ? "" : "none")
    }
    function z() {
        na = null
    }
    function J() {
        ja = {};
        for (var a = 0, b; b = Z[a++];)
            if (b[vc]()) {
                var d = b.gp(), e = b.Pa()[Jd];
                ob(e, b.Gd);
                e.onmouseover = function() {
                    na = d
                };
                e.onmouseout = z;
                ja[d] = e;
                b.fp && (b = b.fp(),
                b.bv && g(d), (b = b.wz)&&!ea.zl(e, b) && jb(e, b))
            }
    }
    function K(a, b) {
        Oa(a, "javascript:void(0)");
        hg(a);
        a.onkeydown = function(a) {
            a = a || window[Pd];
            var d = a[Kb];
            if (13 == d || 32 == d)
                b.Gd(a), E.ms(), Uf(a)
        }
    }
    var L, C, E, Z, ea, U, la, Y, ja = {}, W, ca, sa, na, Ha, ya, Va, Ea, T = {
        hb: function(a, b) {
            Y = a;
            Ha = a.Ie();
            a.$h() || (b[A](".gsst_a", "display:inline-block"), b[A](".gsst_a", "cursor:pointer;padding:0 4px"), b[A](".gsst_a:hover", "text-decoration:none!important"), b[A](".gsst_b", "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") +
            "white-space:nowrap"), b[A](".gsst_e", dg(.55)), b[A](".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", dg(.72)), b[A](".gsst_a:active .gsst_e", dg(1)), b[A](".gsst_f", "background:white;text-align:left"), b[A](".gsst_g", "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "margin:-1px -3px;padding:0 6px"), b[A](".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
        },
        ha: function(a) {
            L = a.get(O.yd, T);
            C = a.get(O.rb,
            T);
            E = a.get(O.Ta, T);
            Z = a.Ab(O.Pe, T);
            ea = a.ye()
        },
        sb: function(a) {
            Ea = a.Wj;
            Z[Dd](F);
            la = Y.get("gs_st");
            if (!la) {
                la = Kf("gsst_b");
                la.id = Y.ub("gs_st");
                if (a = a.mn)
                    la[u].lineHeight = a + "px";
                N()
            }
            J()
        },
        da: function(a) {
            U = a;
            (a = a.qn) && (Va = Y.Wh(a));
            if (Ea) {
                a = 0;
                for (var b; b = Z[a++];) {
                    var d=!!ja[b.gp()];
                    if (b[vc]() != d) {
                        for (; la[sc]();)
                            la[xd](la.lastChild);
                        N();
                        J();
                        break
                    }
                }
            }
            sa = Kf("gsst_h");
            ca = Kf("gsst_f");
            ca.dir = "ltr";
            ca[p](sa);
            C.Sb(13, x)
        },
        L: function() {
            return O.Ke
        },
        W: a,
        V: function() {
            return {
                $j: b,
                Pa: d,
                cv: e,
                $u: g,
                sz: f,
                uz: k,
                vz: l
            }
        },
        dg: function() {
            var b =
            {
                Vn: n,
                Pa: q,
                ii: t,
                Wn: w,
                cg: $e,
                Ek: y
            };
            return [{
                hb: $e,
                ha: $e,
                sb: $e,
                da: $e,
                L: function() {
                    return O.hi
                },
                W: a,
                V: function() {
                    return b
                },
                dg: $e,
                Bb: $e
            }
            ]
        }
    };
    return T
});
ng = function() {
    var a = window.navigator[kc], b = function(b) {
        return 0 <= a[dd](b)
    }, d = {};
    window.opera ? d[2]=!0 : b("MSIE") || b("Trident") ? d[0]=!0 : b("WebKit") ? (d[5]=!0, b("Chrome") ? d[3]=!0 : b("Android") ? d[7]=!0 : b("Safari") && (d[4]=!0), b("iPad") && (d[6]=!0)) : b("Gecko") && (d[1]=!0);
    return d
};
var Xg = function(a) {
    function b(a) {
        delete e[a];
        delete g[a]
    }
    function d(d) {
        if (a) {
            var e = Xe(), l = g[d];
            l && l < e && b(d)
        }
    }
    var e = {}, g = {};
    return {
        put: function(b, d) {
            e[b] = d;
            if (null != a) {
                var l = Xe() + a;
                g[b] = l
            }
        },
        get: function(a) {
            d(a);
            return e[a] || null
        },
        contains: function(a) {
            d(a);
            return a in e
        },
        remove: b,
        reset: function() {
            e = {};
            g = {}
        }
    }
};
var dh = function() {
    function a(a) {
        return {
            api: a,
            jl: a.a,
            da: a.b,
            Bb: a.c,
            jA: a.d,
            pv: a.e,
            Dc: a.f,
            cb: a.g,
            td: a.h,
            De: a.i,
            vl: a.j,
            rv: a.k,
            sv: a.l,
            nA: a.m,
            qv: a.n,
            ni: a.o,
            Ml: a.p,
            kn: a.q,
            iA: a.r,
            gA: a.s,
            oi: a.t,
            jn: a.u,
            focus: a.v,
            blur: a.w,
            Cn: a.x,
            sd: a.y,
            Sc: a.z,
            oA: a.aa,
            Ad: a.ab,
            search: a.ad,
            pA: a.ae,
            sA: a.af,
            Sh: a.ag,
            Ce: a.ah,
            tA: a.ai,
            hn: a.al,
            vn: a.am,
            ku: a.an,
            ce: a.ao,
            iu: a.ap,
            kA: a.aq,
            Vj: a.ar,
            ub: a.as,
            hA: a.at,
            Yj: a.au,
            rA: a.av,
            Uh: a.aw,
            Dn: a.ax,
            ui: a.ay,
            ju: a.az,
            Ri: a.ba,
            qA: a.bb,
            mA: a.bc,
            pi: a.bd,
            lA: a.be,
            jo: a.bf
        }
    }
    return {
        Vf: function(b, d, e, g) {
            try {
                var f =
                window[qd].sbox(b, d, e, g);
                return a(f)
            } catch (k) {
                return null
            }
        },
        translate: function(b) {
            return a(b.api || b)
        }
    }
};
Bg[Xb](O.ll, 170, function() {
    function a(a) {
        if (1 < a[G] && 34 != a[0].L())
            for (var d = 1, e; e = a[d]; ++d)
                if (34 == e.L()) {
                    a[Md](d, 0, 3);
                    break
                }
    }
    return {
        L: function() {
            return O.ll
        },
        W: function() {
            return 170
        },
        V: function() {
            return {
                Jt: a
            }
        }
    }
});
window[qd] || (window.google = {});
window[qd].sbox = function(a, b, d, e) {
    function g() {
        E.Bb()
    }
    function f(a) {
        ja.Sc(a || "")
    }
    function k() {
        return bb
    }
    function l() {
        return fa
    }
    function n() {
        return ja.cb()
    }
    function q() {
        return T.Ce()
    }
    function t() {
        la.vb(8)
    }
    function w(a) {
        return sa.Aa(a)
    }
    function y() {
        return qb||!!ea && ea.ce()
    }
    function F() {
        return ca.hu()
    }
    function x(a) {
        a = a.co || qf();
        a = gg(a);
        void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
        return a.nextSearchboxId++
    }
    function N() {
        if (a)
            for (var b = a; b = b[Jd];) {
                var d = b.dir;
                if (d)
                    return d
            }
        return "ltr"
    }
    function z(a) {
        a =
        vf(a);
        a.Zf[35] || (a.Ms = "");
        var b = a.bo;
        b ? a.bo = b[Od]() : a.Ks=!1;
        a.Rj&&!a.ek && (a.Rj=!1);
        og || (a.dn=!1);
        return a
    }
    function J(a, b) {
        var d = b[yb](a);
        return d && d[1] ? ta(d[1], 10) || 0 : 0
    }
    function K() {
        var b = gg(a), d = ag(b);
        la.eg(b, "resize", function() {
            var a = ag(b);
            if (a.Zo != d.Zo || a.Vo != d.Vo)
                d = a, t()
        })
    }
    function L(a) {
        var b = a.Je, d = b[O.Qn], e = b[O.Ck], f = b[O.Tn], g = b[O.Un], k = b[O.Qf], f = e || g || f;
        b[O.Bk] || k || d || f ? (a.Je[O.Bk]=!0, a.Je[O.Rn]=!0, f ? (a = We(a.Fe), !e || ig && (mg || a) || Df && a ? (bb = 3, b[O.Ck]=!1, b[O.Sn]=!1) : bb = 2) : bb = 1) : bb = 0
    }
    var C, E, Z,
    ea, U, la, Y, ja, W, ca, sa, na, Ha, ya, Va, Ea, T, La, aa, fa, bb, P=!1, qb, ma = {
        a: function(d) {
            if (!P) {
                d = z(d);
                fa = null == e ? x(d) : e;
                var f = fg(a), g = N(), k=!!f[Zc]("gs_id" + fa), l = ["gssb_c", "gssb_k"];
                d.Xj && l[B](d.Xj);
                l = Ig(d.co, d.Ls, d.Js, fa, l);
                L(d);
                qb = d.ce;
                E = Cg(C, d.lk || {}, {
                    $h: function() {
                        return k
                    },
                    get: function(a) {
                        return f[Zc](a + fa)
                    },
                    Wh: function(a) {
                        return f[Zc](a)
                    },
                    uo: function() {
                        return b
                    },
                    Ie: function() {
                        return g
                    },
                    ub: function(a) {
                        return a + fa
                    },
                    jk: function() {
                        return a
                    }
                }, l, ma, d);
                Z = E.get(O.Pi, ma);
                ea = E.get(O.ze, ma);
                U = E.get(O.yd, ma);
                la = E.get(O.rb,
                ma);
                Y = E.get(O.gc, ma);
                ja = E.get(O.Ta, ma);
                W = E.get(O.Ge, ma);
                ca = E.get(O.xd, ma);
                sa = E.get(O.Bd, ma);
                na = E.get(O.Eu, ma);
                Ha = E.get(O.Fu, ma);
                ya = E.get(O.Re, ma);
                Va = E.get(O.Qg, ma);
                Ea = E.get(O.Cc, ma);
                T = E.get(O.Nb, ma);
                La = E.get(O.Qf, ma);
                aa = E.get(O.ud, ma);
                K();
                P=!0
            }
        },
        b: function(a) {
            g();
            a = z(a);
            L(a);
            qb = a.ce;
            E.da(a)
        },
        c: g,
        d: function() {
            return b
        },
        e: function(a, b) {
            return Qf(a, b)
        },
        f: function() {
            return ja.Dc()
        },
        g: n,
        h: function() {
            return T.td()
        },
        i: function() {
            return T.De()
        },
        j: w,
        k: function(a, b) {
            a || (a = sa.Aa(b));
            return bf(a)
        },
        l: function() {
            return T.Lf()
        },
        m: function() {
            return T.Wr()
        },
        n: function(a, b) {
            la.eg(a, "click", function(a) {
                aa[v](n(), b);
                return Tf(a)
            })
        },
        o: function() {
            Y.ni()
        },
        p: function() {
            T.Sj()
        },
        q: function(a) {
            ja.kn(a || "")
        },
        r: function() {
            return U.zd()
        },
        s: function() {
            ja[Rb]()
        },
        t: function(a) {
            return Y.oi(a)
        },
        u: function() {
            ja.jn()
        },
        v: function() {
            W[Jb]()
        },
        w: function() {
            W.blur()
        },
        x: function() {
            return Y.Cn()
        },
        y: function() {
            var a = Ea.sd();
            return a ? Ue(a.Lo()) : null
        },
        z: f,
        aa: function(a) {
            a = ya.Ak(a);
            return Ue(a.Lo())
        },
        ab: function() {
            sa[Dc]()
        },
        ad: function(a, b) {
            aa[v](a, b)
        },
        ae: function() {
            La && La[Tb]()
        },
        af: function(a) {
            T.Ym(a)
        },
        ag: function() {
            T.Sh()
        },
        ah: q,
        ai: t,
        al: function() {
            ja.hn()
        },
        am: function() {
            return E && E.vn()
        },
        an: function(a) {
            ea && ea.ku(a)
        },
        ao: y,
        ap: function() {
            return y() && ea ? ea.iu() : ""
        },
        aq: function(a, b) {
            return Rf(a, b)
        },
        ar: k,
        as: l,
        at: function() {
            La && La[Rb]()
        },
        au: function(a, b) {
            f(a);
            T[vc]() && T.Yj(a, b, !1)
        },
        av: function(a) {
            la.vb(15, {
                di: a
            })
        },
        aw: function() {
            return W.Uh()
        },
        ax: function(a) {
            Y.Dn(a)
        },
        ay: function(a) {
            U.ui(a)
        },
        az: function(a) {
            return !!Ha && Ha.ju(a)
        },
        ba: function() {
            var a, b = Ea.sd();
            if (b) {
                var d = b.Pj();
                d && ((a = d.Ri()) || (a = b.Aa().ob("o")))
            }
            return a || ""
        },
        bb: function(a, b) {
            return na ? (na.mz(a, b), !0) : !1
        },
        bc: function(a, b) {
            switch (a) {
            case "oq":
            case "gs_l":
                return w(b)[a] || null;
            case "gs_ssp":
                var d;
                t:
                {
                    if ((d = q()) && 46 == d.L() && (d = d.Aa().ob("g")))
                        break t;
                    d = null
                }
                return d;
            default:
                return null
            }
        },
        bd: function(a) {
            Z && Z.pi(a)
        },
        be: F,
        bf: function(a) {
            return 6 == F()&&!!Va && Va.jo(a)
        },
        ub: l,
        Vj: k
    };
    C = Jg(d);
    (function(a) {
        var b = C.nl(), d = J(a, /Version\/(\d+)/);
        d || (d = J(a, /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));
        d || (d = J(a, /Trident[^)]*rv:(\d+)/));
        a = d;
        Af = (Df = b[0]) && 8 >= a;
        xf = Df && 7 >= a;
        ig = b[1];
        Cf = b[2];
        jg = b[5];
        kg = b[4];
        og = b[3];
        lg = b[7]
    })(window.navigator[kc]);
    mg = /Mac/[Qc](qa && (qa.platform || qa.appVersion) || "");
    return ma
};
var eh = function() {
    function a(a) {
        var b=!0;
        void 0 != a && (b = a == y.ri, y.ri = a);
        t ? b || t.da(y) : (t = dh().Vf(z, x, ya), t.jl(y), L && L.ha(t))
    }
    function b(a) {
        t.Sc(a)
    }
    function d(a) {
        return a + (0 <= a[dd]("?") ? "&" : "?") + t.rv()
    }
    function e() {
        ca && ca()
    }
    function g(b, d, e, g) {
        x = b;
        z = d;
        sa = e;
        var n = g.onRenderCallback;
        n && (ca = function() {
            try {
                n()
            } catch (a) {}
        });
        y = f();
        l(y, g);
        k(e, y);
        a();
        g.searchButton && t.qv(g.searchButton, 12)
    }
    function f() {
        var a = w.Vf();
        a.rk = "partner";
        a.sk = "partner";
        a.yn = "cse";
        a.Zu=!0;
        a.Ao = {
            partnerid: sa
        };
        a.on=!0;
        a.ik = "gsc-input";
        a.xn = "gsc-completion-container";
        a.wn = "gsc-completion-selected";
        U && (a.dl = z.id, a.fl = "gsc-input-hover", a.el = "gsc-input-focus");
        a.df = [ - 1, 0, 0];
        a.Gk=!0;
        a.ce=!0;
        a.Ni=!1;
        a.spellcheck=!1;
        a.Zf = Te([0, 34]);
        a.Je[66]=!0;
        return a
    }
    function k(a, b) {
        var d = {}, e = d[O.Fd] = [162];
        if (K || C)
            d[O[bd]] = [K ? $g(L): Wg(C), 162];
        wf(d, O.Wc, Ug(a));
        wf(d, O.Fd, Lg());
        wf(d, O.Wc, Ng());
        wf(d, O.vi, Mg());
        E && e[B](Tg(E));
        wf(d, O.yi, ah(Z, ea));
        b.lk = d;
        Y && (d = b.lk, d[O.Qg] = Og(), wf(d, O.Wc, Rg()), wf(d, O.Ye, Sg()), wf(d, O[bd], Qg()))
    }
    function l(a, b) {
        if (la=!!b.useKennedyLookAndFeel)
            U &&
            (a.dl = z[Jd].id, a.fl = "gsc-input-box-hover", a.el = "gsc-input-box-focus"), a.df = [3, - 1, 2], a.Ni=!0;
        b.interfaceLanguage && (a.Fe = b.interfaceLanguage);
        b.disableAutoCompletions && (a.ri=!0);
        Z = ta(b.maxSuggestions, 10);
        var d = b.saytSubmit;
        d && (L = Yg(d, ca), b.saytExtraParameters && L.Av(b.saytExtraParameters), a.Zf[503]=!0, a.Zf[34]=!1, b.saytKeyboardNavigationEnabled && (a.ci = 4, a.Oj=!1, Ha=!0), K=!0);
        0 <= Z || (Z = d ? 5 : 10);
        ea = ta(b.maxPromotions, 10);
        0 <= ea || (ea = 3);
        a.tk = "gsnos,n=" + (Z + 3);
        (C = b.brandingImageUrl) && (E = b.brandingImageStyle +
        " url(" + C + ")");
        if (d = b.styleOptions) {
            var e = d.xOffset || 0, f = d.yOffset || 0, g = d.widthOffset || 0, k = d.fixedWidth;
            ja=!!d.allowWordWrapping;
            var l = a.df;
            l[0] += f;
            l[1] += e;
            l[2] += g;
            a.Xn = k;
            a.fn = d.xAlign;
            d.positionFixed && (a.Ug = "fixed")
        }
        Y=!!b.enableSpeech
    }
    function n() {
        t.pi(W)
    }
    var q = {
        Zv: "oq",
        $v: "gs_l"
    }, t, w, y, F, x, N, z, J, K=!1, L, C, E, Z, ea, U, la, Y, ja=!1, W, ca, sa, na=!1, Ha=!1, ya = {
        da: a,
        jl: function(a, b, d, e) {
            g(a, b, d, e);
            if (e.isLoggingWithHiddenFormFields) {
                J = {};
                for (var f in q)
                    a = q[f], J[a] = t.pv(x, a)
            } else 
                na=!0, x && (x[id] ? x[id]("submit",
                n, !1) : x[Ub] && x[Ub]("onsubmit", n))
        },
        Lr: function(a, b, d, e) {
            U = d;
            g(a, b, U.lj() || "", e);
            e.enableAsynchronousLogging && (na=!0)
        },
        Su: function(a, b, d, e) {
            g(null, b, d, e);
            na=!0;
            N = a
        },
        Sc: b,
        cb: function() {
            return t.cb()
        },
        a: function() {
            return F
        },
        b: function(a, d) {
            a != z[cd] && (U && window[Ac] && window[Ac].log && window[Ac].log("Programmatically setting input.value? Please consider using prefillQuery() or execute() from google.search.SearchControl instead."), a = z[cd], b(a));
            if (gf(a)) {
                W = d;
                na && (U || N) && n();
                var e = t.vl(W);
                if (J) {
                    var f = q.Zv;
                    J[f] && Ya(J[f], e[f]);
                    f = q.$v;
                    J[f] && Ya(J[f], e[f])
                }
                U ? (a != t.cb() && t.Sc(a), na ? U[Uc]() : U.bw(e)) : N ? N(e) : x && (x.fireEvent && h.createEventObject ? (e = h.createEventObject(), x.fireEvent("onsubmit", e) && x[Uc]()) : x.dispatchEvent && h.createEvent ? (e = h.createEvent("HTMLEvents"), e.initEvent("submit", !0, !0), x.dispatchEvent(e) && x[Uc]()) : x.onsubmit && 0 == x.onsubmit() || x[Uc]());
                W = null
            }
        },
        c: function(a) {
            window.location = a
        },
        d: function(a) {
            window.location = d(a)
        },
        e: d,
        j: function() {
            L && L.vp()
        },
        o: e,
        p: e,
        r: function(a) {
            if (U)
                if (la)
                    a[A](".gssb_a",
                    "padding:0 9px"), a[A](".gsib_a", "padding-right:8px;padding-left:8px"), a[A](".gsst_a", "padding-top:3px");
                else 
                    a[A](".gssb_a", "padding:0 7px");
            else 
                a[A](".gssb_a", "padding:0 2px");
            a[A](".gssb_e", "border:0");
            a[A](".gssb_l", "margin:5px 0");
            a[A](".gssb_c .gsc-completion-container", "position:static");
            a[A](".gssb_c", "z-index:5000");
            a[A](".gsc-completion-container table", "background:transparent;font-size:inherit;font-family:inherit");
            a[A](".gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td",
            "padding:0;margin:0;border:0");
            a[A](".gssb_a table,.gssb_a table tr,.gssb_a table tr td", "padding:0;margin:0;border:0");
            K && a[A](".cse-sayt div", "white-space:normal");
            ja && a[A](".gssb_a,.gssb_a td", "white-space:normal")
        },
        w: function() {
            L && L.vp()
        },
        x: function() {
            U && U.Yc()
        },
        y: function() {
            L && Ha && L.zv()
        },
        ab: function() {
            L && Ha && t.sv() && L.Bv()
        }
    };
    F = ng();
    w = yg();
    return ya
};
google[v].U = {};
google[v].U.ky = "ar" == wa || "iw" == wa || "fa" == wa;
google[v].U.tr = google[v].U.ky?-1 : 1;
google[v].U.od = new Se(google[v].U.tr);
google[v].U.Hi = google[v].U.od.rr(google[v].U.tr);
google[v].U.Tq = google[v].U.od.$y();
google[v].U.bB = google[v].U.od.zy();
google[v].U.Vd = function(a, b) {
    return google[v].U.od.br(a, !1, b)
};
google[v].U.Cf = function(a, b) {
    return google[v].U.od.br(a, !0, b)
};
google[v].U.Xw = function(a) {
    return a ? google[v].U.od.Vq(a, !1) : google[v].U.Hi
};
google[v].U.rh = function(a) {
    return a ? google[v].U.od.Vq(a, !0) : google[v].U.Hi
};
google[v].U.Zw = function(a) {
    return a ? google[v].U.od.$q(a, !1) : ""
};
google[v].U.Yw = function(a) {
    return a ? google[v].U.od.$q(a, !0) : ""
};
google[v].NoOldNames || (ba("UDS_ServiceBase", google[Ed][ld]), ba("UDS_ApiKey", google[Ed].ApiKey), ba("UDS_KeyVerified", google[Ed].KeyVerified), ba("UDS_LoadFailure", google[Ed].LoadFailure), ba("UDS_CurrentLocale", wa), ba("UDS_ShortDatePattern", da), ba("UDS_Version", google[v][td]), ba("UDS_JSHash", google[v].JSHash));
var Q = {
    blank: "&nbsp;"
};
Q.image = _UDS_MSG_SEARCHER_IMAGE;
Q.web = _UDS_MSG_SEARCHER_WEB;
Q.blog = _UDS_MSG_SEARCHER_BLOG;
Q.video = _UDS_MSG_SEARCHER_VIDEO;
Q.local = _UDS_MSG_SEARCHER_LOCAL;
Q.news = _UDS_MSG_SEARCHER_NEWS;
Q.book = _UDS_MSG_SEARCHER_BOOK;
Q.patent = _UDS_MSG_SEARCHER_PATENT;
Q["ads-by-google"] = _UDS_MSG_ADS_BY_GOOGLE;
Q.save = _UDS_MSG_SEARCHCONTROL_SAVE;
Q.keep = _UDS_MSG_SEARCHCONTROL_KEEP;
Q.include = _UDS_MSG_SEARCHCONTROL_INCLUDE;
Q.copy = _UDS_MSG_SEARCHCONTROL_COPY;
Q.close = _UDS_MSG_SEARCHCONTROL_CLOSE;
Q["sponsored-links"] = _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;
Q["see-more"] = _UDS_MSG_SEARCHCONTROL_SEE_MORE;
Q.watermark = _UDS_MSG_SEARCHCONTROL_WATERMARK;
Q["search-location"] = _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;
Q["disable-address-lookup"] = _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;
Q["sort-by-date"] = _UDS_MSG_SORT_BY_DATE;
Q.pbg = _UDS_MSG_BRANDING_STRING;
Q["n-minutes-ago"] = _UDS_MSG_MINUTES_AGO;
Q["n-hours-ago"] = _UDS_MSG_HOURS_AGO;
Q["one-hour-ago"] = _UDS_MSG_ONE_HOUR_AGO;
Q["all-n-related"] = _UDS_MSG_NEWS_ALL_N_RELATED;
Q["related-articles"] = _UDS_MSG_NEWS_RELATED;
Q["page-count"] = _UDS_MSG_TOTAL_PAGE_COUNT;
var fh = [];
fh[0] = _UDS_MSG_MONTH_ABBR_JAN;
fh[1] = _UDS_MSG_MONTH_ABBR_FEB;
fh[2] = _UDS_MSG_MONTH_ABBR_MAR;
fh[3] = _UDS_MSG_MONTH_ABBR_APR;
fh[4] = _UDS_MSG_MONTH_ABBR_MAY;
fh[5] = _UDS_MSG_MONTH_ABBR_JUN;
fh[6] = _UDS_MSG_MONTH_ABBR_JUL;
fh[7] = _UDS_MSG_MONTH_ABBR_AUG;
fh[8] = _UDS_MSG_MONTH_ABBR_SEP;
fh[9] = _UDS_MSG_MONTH_ABBR_OCT;
fh[10] = _UDS_MSG_MONTH_ABBR_NOV;
fh[11] = _UDS_MSG_MONTH_ABBR_DEC;
Q["month-abbr"] = fh;
Q.directions = _UDS_MSG_DIRECTIONS;
Q["clear-results"] = _UDS_MSG_CLEAR_RESULTS;
Q["show-one-result"] = _UDS_MSG_SHOW_ONE_RESULT;
Q["show-more-results"] = _UDS_MSG_SHOW_MORE_RESULTS;
Q["show-all-results"] = _UDS_MSG_SHOW_ALL_RESULTS;
Q.settings = _UDS_MSG_SETTINGS;
Q.search = _UDS_MSG_SEARCH;
Q["search-uc"] = _UDS_MSG_SEARCH_UC;
Q["powered-by"] = _UDS_MSG_POWERED_BY;
Q.sa = _UDS_MSG_SEARCHER_GSA;
Q.by = _UDS_MSG_SEARCHER_BY;
Q.code = _UDS_MSG_SEARCHER_CODE;
Q["unknown-license"] = _UDS_MSG_UNKNOWN_LICENSE;
Q["more-results"] = _UDS_MSG_SEARCHCONTROL_MORERESULTS;
Q.previous = _UDS_MSG_SEARCHCONTROL_PREVIOUS;
Q.next = _UDS_MSG_SEARCHCONTROL_NEXT;
Q["get-directions"] = _UDS_MSG_GET_DIRECTIONS;
Q["to-here"] = _UDS_MSG_GET_DIRECTIONS_TO_HERE;
Q["from-here"] = _UDS_MSG_GET_DIRECTIONS_FROM_HERE;
Q["clear-results-uc"] = _UDS_MSG_CLEAR_RESULTS_UC;
Q["search-the-map"] = _UDS_MSG_SEARCH_THE_MAP;
Q["scroll-results"] = _UDS_MSG_SCROLL_THROUGH_RESULTS;
Q["edit-tags"] = _UDS_MSG_EDIT_TAGS;
Q["tag-search"] = _UDS_MSG_TAG_THIS_SEARCH;
Q["search-string"] = _UDS_MSG_SEARCH_STRING;
Q["optional-label"] = _UDS_MSG_OPTIONAL_LABEL;
Q["delete"] = _UDS_MSG_DELETE;
Q.deleted = _UDS_MSG_DELETED;
Q.cancel = _UDS_MSG_CANCEL;
Q["upload-video"] = _UDS_MSG_UPLOAD_YOUR_VIDEOS;
Q["im-done"] = _UDS_MSG_IM_DONE_WATCHING;
Q["close-player"] = _UDS_MSG_CLOSE_VIDEO_PLAYER;
Q["no-results"] = _UDS_MSG_NO_RESULTS;
Q["linked-cse-error-results"] = _UDS_MSG_LINKEDCSE_ERROR_RESULTS;
Q.back = _UDS_MSG_BACK;
Q.subscribe = _UDS_MSG_SUBSCRIBE;
Q["us-pat"] = _UDS_MSG_USPAT;
Q["us-pat-app"] = _UDS_MSG_USPAT_APP;
Q["us-pat-filed"] = _UDS_MSG_PATENT_FILED;
Q.dym = _UDS_MSG_DID_YOU_MEAN;
Q["showing-results-for"] = _UDS_MSG_SHOWING_RESULTS_FOR;
Q["search-instead-for"] = _UDS_MSG_SEARCH_INSTEAD_FOR;
Q["custom-search"] = _UDS_MSG_CUSTOM_SEARCH;
Q.labeled = _UDS_MSG_LABELED;
Q.loading = _UDS_MSG_LOADING;
Q["all-results-short"] = _UDS_MSG_ALL_RESULTS_SHORT;
Q["all-results-long"] = _UDS_MSG_ALL_RESULTS_LONG;
Q["refine-results"] = _UDS_MSG_REFINE_RESULTS;
Q["result-info"] = _UDS_MSG_RESULT_INFO;
Q["file-format"] = _UDS_MSG_FILE_FORMAT;
Q["order-results-by"] = _UDS_MSG_ORDER_BY;
Q["order-by-relevance"] = _UDS_MSG_ORDER_BY_RELEVANCE;
Q["order-by-date"] = _UDS_MSG_ORDER_BY_DATE;
Q["get-link"] = _UDS_MSG_ORDER_BY_GET_LINK;
Q["add-label"] = "Add Label";
Q["no-refinement"] = "Refinements should be present before adding label";
Q["label-page"] = "This particular page";
Q["label-site"] = "Entire site";
Q["label-prefix"] = "Specific page prefix";
Q["invalid-url-prefix"] = "Invalid url prefix";
Q["error-adding-label"] = "Error adding label.";
Q.saving = "Saving...";
Q.Save = "Save";
Q.Cancel = "Cancel";
Q["structured-data"] = "Structured data";
function gh(a, b) {
    var d = function() {};
    lb(d, b[H]);
    lb(a, new d);
    a[H].kC = function(b, d, f, k) {
        var l = pa[H][Md][Bc](arguments, [1, arguments[G]]);
        return b[Bc](a, l)
    }
}
var _json_cache_defeater_ = (new Date)[Wb](), _json_request_require_prep=!0;
function ih(a, b) {
    var d;
    if (d = jh("msie"))
        d = "msie 6.0"in kh ? kh["msie 6.0"] : kh["msie 6.0"] =- 1 != qa.appVersion[Od]()[dd]("msie 6.0");
    d ? window[gc](lh(this, mh, [a, b]), 0) : mh(a, b)
}
function nh(a) {
    _json_request_require_prep=!1;
    ih(a, null);
    _json_request_require_prep=!0
}
function mh(a, b) {
    var d = h[ac]("head")[0];
    d || (d = h[vd][Jd][p](h[s]("head")));
    var e = h[s]("script");
    ab(e, "text/javascript");
    e.charset = "utf-8";
    var g = _json_request_require_prep ? a + "&key=" + google[Ed].ApiKey + "&v=" + b: a;
    if (oh() || jh("safari") || jh("konqueror"))
        g = g + "&nocache=" + _json_cache_defeater_++;
    e.src = g;
    var f = function() {
        za(e, null);
        e[Jd][xd](e)
    }, g = function(a) {
        a = a ? a : window[Pd];
        a = a[yd] ? a[yd] : a[ad];
        if ("loaded" == a[hd] || "complete" == a[hd])
            Ta(a, null), f()
    };
    "Gecko" == qa.product ? za(e, f) : Ta(e, g);
    d[p](e)
}
function ph(a, b) {
    return function() {
        return b[Bc](a, arguments)
    }
}
function lh(a, b, d) {
    return function() {
        return b[Bc](a, d || [])
    }
}
function qh(a) {
    for (; a[Lb];)
        a[xd](a[Lb])
}
function rh(a, b) {
    if (a)
        try {
            qh(a), a[p](b)
    } catch (d) {}
    return b
}
function R(a, b) {
    try {
        a[p](b)
    } catch (d) {}
    return b
}
function sh(a, b) {
    void 0 != a.textContent ? ib(a, b) : a.innerText = b
}
function th(a) {
    return h[Gb](a ? a : "")
}
function V(a, b) {
    var d = h[s]("div");
    a && Xa(d, a);
    b && m(d, b);
    return d
}
function uh(a, b) {
    var d = h[s]("div");
    a && R(d, th(a));
    b && m(d, b);
    return d
}
function X(a) {
    var b = h[s]("div");
    a && m(b, a);
    return b
}
function vh(a, b) {
    var d = h[s]("span");
    a && R(d, th(a));
    b && m(d, b);
    return d
}
function wh(a, b, d) {
    var e = h[s]("table");
    e[Nb]("cellSpacing", a ? a : 0);
    e[Nb]("cellPadding", b ? b : 0);
    d && m(e, d);
    return e
}
function xh(a, b, d) {
    (a = a[ed]( - 1)) || alert(a);
    for (var e = 0; e < b; e++)
        yh(a, d);
    return a
}
function yh(a, b) {
    var d = a[nd]( - 1);
    b && m(d, b);
    return d
}
function zh(a, b, d, e) {
    var g = h[s]("img");
    g.src = a;
    b && Aa(g, b);
    d && Qa(g, d);
    e && m(g, e);
    return g
}
function Ah(a, b, d, e, g) {
    var f = h[s]("a");
    Oa(f, a);
    b && (e ? R(f, vh(b, e)) : R(f, th(b)));
    d && nb(f, d);
    g && jb(f, g);
    return f
}
function Bh(a, b, d, e, g, f) {
    var k = V(null, e), l = h[s]("a");
    Oa(l, a);
    Xa(l, b);
    e && m(l, e);
    d && nb(l, d);
    g && jb(l, g);
    if (f)
        for (var n in f)
            l[Nb](n, f[n]);
    k[p](l);
    return k
}
function Ch(a, b) {
    var d = h[s]("label");
    b && m(d, b);
    a && ib(d, a);
    return d
}
function Dh(a) {
    var b = h[s]("form");
    a && m(b, a);
    return b
}
function Eh(a, b) {
    var d = h[s]("input");
    ab(d, "submit");
    Ya(d, a);
    b && m(d, b);
    return d
}
function Fh(a, b, d) {
    var e = h[s]("input");
    ab(e, "button");
    Ya(e, a);
    b && m(e, b);
    d && ob(e, d);
    return e
}
function Gh(a, b, d) {
    var e = h[s]("input");
    e[Nb]("autoComplete", "off");
    ab(e, "text");
    - 1 == a ? $(e, "util-css-expand") : e.size = 0 < a ? a : 10;
    b && $(e, b);
    d && Ya(e, d);
    return e
}
function Hh(a, b, d, e) {
    var g = h[s]("input");
    ab(g, "checkbox");
    cb(g, a);
    Ya(g, b);
    e && m(g, e);
    d && Fa(g, d);
    return g
}
function Ih(a, b, d, e) {
    var g = h[s]("input");
    ab(g, "radio");
    a && cb(g, a);
    b && Ya(g, b);
    e && m(g, e);
    d && Fa(g, d);
    return g
}
function Jh(a, b) {
    b ? (a.tabIndex = 0, ob(a, b), a.onkeypress = function(d) {
        d = d || window[Pd];
        d[Kb] && 13 == d[Kb] && b[zd](a, d)
    }) : (a.tabIndex =- 1, a[Ec]("tabIndex"), ob(a, null), a.onkeypress = null)
}
function Kh() {
    var a = window[mc][qc];
    return "/cse/labelurl" == window[mc].pathname&&-1 !== a[dd]("google.com", a[G] - 10)?!0 : !1
}
function Lh(a, b) {
    if (null == a || null == a[rd])
        return !1;
    for (var d = a[rd][hc](" "), e = 0; e < d[G]; e++)
        if (d[e] == b)
            return !0;
    return !1
}
function $(a, b) {
    Lh(a, b) || m(a, a[rd] + (" " + b))
}
function Mh(a, b) {
    if (null != a[rd]) {
        for (var d = a[rd][hc](" "), e = [], g=!1, f = 0; f < d[G]; f++)
            d[f] != b ? d[f] && e[B](d[f]) : g=!0;
        g && m(a, e[Nd](" "))
    }
}
var Nh = "", Oh = {
    sy: {
        sC: 1,
        uC: 1,
        CC: 1,
        id: 1,
        DC: 1,
        "in": 1,
        EC: 1,
        GC: 1,
        HC: 1,
        IC: 1,
        JC: 1,
        SC: 1,
        cD: 1,
        gD: 1,
        hD: 1,
        kD: 1,
        lD: 1,
        nD: 1
    },
    tC: {
        lC: 1,
        nC: 1,
        oC: 1,
        pC: 1,
        qC: 1,
        rC: 1,
        sy: 1,
        vC: 1,
        "do": 1,
        wC: 1,
        xC: 1,
        yC: 1,
        zC: 1,
        AC: 1,
        BC: 1,
        FC: 1,
        KC: 1,
        LC: 1,
        MC: 1,
        NC: 1,
        OC: 1,
        PC: 1,
        QC: 1,
        RC: 1,
        UC: 1,
        VC: 1,
        WC: 1,
        XC: 1,
        YC: 1,
        ZC: 1,
        $C: 1,
        aD: 1,
        bD: 1,
        dD: 1,
        eD: 1,
        fD: 1,
        iD: 1,
        jD: 1,
        mD: 1
    },
    TC: {
        mC: 1
    }
};
function jh(a) {
    return a in Ph ? Ph[a] : Ph[a] =- 1 != qa[kc][Od]()[dd](a)
}
var Ph = {}, kh = {};
function oh() {
    return jh("msie")
}
var Qh, Rh;
window.ActiveXObject && (Qh=!0, window.XMLHttpRequest && (Rh=!0));
function Sh(a) {
    this.um = a + "branding";
    this.Fj = a + "branding-vertical";
    this.hr = a + "branding-img-noclear";
    this.Rx = a + "branding-clickable";
    this.text = a + "branding-text";
    this.Sx = a + "branding-text-name"
}
function Th(a, b, d, e, g) {
    var f = new Sh(a);
    a = X(f.um);
    var k = wh(null, null, f.um);
    R(a, k);
    var l=!d;
    l || ($(a, f.Fj), $(k, f.Fj));
    var n = xh(k, 0), q;
    l ? q = n : (q = n, n = xh(k, 0));
    var t = "/css/small-logo.png", w = 51, y = 15;
    e && "string" == typeof e && e[Ib](/^http:\/\/www\.youtube\.com/) && (t = "/css/youtube-logo-55x24.png", w = 55, y = 24, $(a, f.um + "-youtube"), l || ($(a, f.Fj + "-youtube"), $(k, f.Fj + "-youtube")));
    q = yh(q, f[Vc]);
    var l = yh(n, f.hr), F = V(Q["powered-by"], f[Vc]), t = google[Ed][ld] + t, x = f.hr;
    Qh&&!Rh ? (x = X(x), x[u].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
    t + '")', Aa(x[u], w + "px"), Qa(x[u], y + "px")) : x = zh(t, null, null, x);
    y = x;
    R(q, F);
    e ? (q = "http://www.google.com", "string" == typeof e && (e[Ib](/^http:\/\/[a-z]*\.google\.com/) || e[Ib](/^http:\/\/www\.youtube\.com/)) && (q = e), e = Ah(q, null, "_BLANK"), m(e, f.Rx), R(e, y), R(l, e)) : R(l, y);
    g && (e = n, d && (e = xh(k, 0)), d = f[Vc] + " " + f.Sx, f = yh(e, d), R(f, uh(g, d)));
    b && (b = "string" == typeof b ? h[Zc](b) : b, qh(b), R(b, a));
    return a
}
var Uh = function(a, b, d) {
    b = b && "*" != b ? b[Ld]() : "";
    if (d && a[fd]) {
        a = a[fd](d);
        if (b) {
            for (var e = {}, g = 0, f = 0, k; k = a[f]; f++)
                b == k.nodeName && (e[g++] = k);
            e.length = g;
            return e
        }
        return a
    }
    a = a[ac](b || "*");
    if (d) {
        e = {};
        for (f = g = 0; k = a[f]; f++)
            Lh(k, d) && (e[g++] = k);
        e.length = g;
        return e
    }
    return a
};
function Vh(a) {
    return a[r](/\s+$/, "")[r](/^\s+/, "")
}
function Wh(a) {
    var b = [];
    if (a)
        for (var d in a)
            null != a[d] && b[B](c(d) + "=" + c(a[d]));
    return b[Nd]("&")
}
function Xh(a, b) {
    for (var d = a[hc]("?"), e = d[1][hc]("&"), g = b + "=", f = e[G]; 0 < f--;) 
        - 1 != e[f].lastIndexOf(g, 0) && e[Md](f, 1);
    return 0 < e[G] ? d[0] + "?" + e[Nd]("&") : d[0]
}
function Yh(a) {
    for (var b = window[mc][v][Gd](1)[hc]("&"), d = 0; d < b[G]; d++) {
        var e = b[d][hc]("=");
        if (e[0] == a)
            return xa(e[1])
    }
}
function Zh(a, b) {
    b || (b = h[ac]("body")[0]);
    for (var d = 0; a != b;)
        d += a.offsetLeft, a = a.offsetParent;
    return d
}
function $h(a, b) {
    b || (b = h[vd]);
    for (var d = 0; a != b;)
        d += a.offsetTop, a = a.offsetParent;
    return d
}
function ai(a) {
    try {
        return a instanceof HTMLFormElement
    } catch (b) {
        return !!a && "object" === typeof a && 1 === a[Yc] && "object" === typeof a[u] && "object" === typeof a.ownerDocument && "form" === a[Cc][Od]()
    }
}
function bi(a) {
    "string" == typeof a && (a = h[Zc](a));
    return a
}
function ci(a) {
    if (a) {
        var b = h[s]("div"), d = h[s]("a");
        Oa(d, a);
        b[p](d);
        Xa(b, b[$c]);
        return b[Lb][zc]
    }
    return null
}
function di(a) {
    var b = h[s]("a");
    Oa(b, a);
    return b[bc]
}
function ei(a) {
    return !!a && /https?:\/\/([^/.:]+\.)*google(\.[^/.:]+)*(\:[0-9]+)?\/cse/[Qc](a)
}
function fi(a, b) {
    for (; b && b != a;)
        b = b[Jd];
    return b == a
}
function gi(a) {
    window[Ac] && window[Ac].warn(a)
};
google[v].Na = {};
google[v].Na.Lx = function(a, b, d) {
    var e = new XMLHttpRequest;
    Ta(e, function() {
        e[hd] == XMLHttpRequest.DONE && d(e.responseText)
    });
    e[Pc]("POST", a, !0);
    e[gd]("Content-type", "application/json");
    e[gd]("Accept", "application/json");
    e.send(b)
};
google[v].Na.ox = function(a, b) {
    var d = new XMLHttpRequest;
    Ta(d, function() {
        d[hd] == XMLHttpRequest.DONE && b(d.responseText)
    });
    d[Pc]("GET", a, !0);
    d[gd]("Content-type", "application/json");
    d[gd]("Accept", "application/json");
    d.send()
};
google[v].Na.Px = function(a) {
    var b = new XMLHttpRequest;
    b[Pc]("GET", a, !1);
    b[gd]("Content-type", "application/json");
    b[gd]("Accept", "application/json");
    b.send();
    return b.responseText
};
google[v].Na.Qq = function() {
    var a = Yh("cx")[hc](":");
    return window[mc][xc] + "//" + window[mc][bc] + "/cse/api/" + a[0] + "/annotations/" + a[1] + "?xsrf=" + google[v].Na.gr()
};
google[v].Na.gr = function() {
    return h[Zc]("xsrf")[$c]
};
google[v].Na.Ox = function() {
    var a = Yh("cx")[hc](":");
    return window[mc][xc] + "//" + window[mc][bc] + "/cse/api/" + a[0] + "/cse/" + a[1] + "?xsrf=" + google[v].Na.gr()
};
google[v].Na.sx = function() {
    var a = JSON[od](google[v].Na.Px(google[v].Na.Ox()));
    if (!a.Context ||!a.Context.Facet)
        return null;
    for (var b = [], d = 0; d < a.Context.Facet[G]; d++)
        for (var e = a.Context.Facet[d].FacetItem, g = 0; e && g < e[G]; g++)
            b[B](e[g]);
    return b
};
google[v].Na.Jx = function(a, b) {
    var d = JSON[od](b);
    if (d.Annotation)
        for (var e = 0; e < d.Annotation[G]; e++)
            if (d.Annotation[e].AdditionalData[0][cd] == a)
                return d.Annotation[e][zc]
};
google[v].Na.Kx = function(a, b, d) {
    a = {
        Add: {
            Annotations: {
                Annotation: [{
                    about: a,
                    label: [{
                        name: "_cse_" + Yh("cx")[hc](":")[1]
                    }
                    ]
                }
                ]
            }
        }
    };
    for (var e = a.Add.Annotations.Annotation[0][Fc], g = 0; g < b[G]; g++)
        e[B]({
            name: b[g]
        });
    d && (a.Remove = {
        Annotations: {
            Annotation: [{
                href: d
            }
            ]
        }
    });
    return JSON.stringify(a)
};
google[v].Na.Cx = function(a) {
    var b = JSON[od](a);
    a = [];
    if (!(b.Add && b.Add.Annotations && b.Add.Annotations.Annotation && b.Add.Annotations.Annotation[0].Label))
        return a;
    for (var b = b.Add.Annotations.Annotation[0].Label, d = 1; d < b[G]; d++)
        a[B](b[d][md]);
    return a
};
google[v].History = function(a, b) {
    this.hm = google[v][D].Yq();
    this.im = google[v][D].Zq();
    this.om = this.hm || this.im;
    var d = window[mc][zc];
    this.kx = 0 <= d[dd]("#") ? d[Gd](0, d[dd]("#")) : d;
    this.lm=!1;
    this.rx = b;
    d = google[v][D].jm(google[v][D].km());
    this.fm = d.Sq;
    this.we = d[uc];
    if (this.om) {
        d = ph(this, google[v][D][H].tx);
        this.hm && window[id] ? (window[id]("popstate", d, !1), window[id]("hashchange", d, !1)) : this.im && (window[id] ? window[id]("hashchange", d, !1) : window[Ub] && window[Ub]("onhashchange", d));
        var d=!1, e;
        for (e in this.we) {
            d =
            !0;
            break
        }
        d ? this.Uq() : this.Xq(a, !0)
    }
};
google[v][D].Mh = "gsc.";
google[v][D].Zg = google[v][D].Mh + "q";
google[v][D].uj = google[v][D].Mh + "tab";
google[v][D].tj = google[v][D].Mh + "ref";
google[v][D].Zc = google[v][D].Mh + "page";
google[v][D].Yi = google[v][D].Mh + "sort";
var hi = {};
hi[google[v][D].Zg]=!0;
hi[google[v][D].uj]=!0;
hi[google[v][D].Zc]=!0;
hi[google[v][D].tj]=!0;
hi[google[v][D].Yi]=!0;
google[v][D].hy = hi;
var ii = {};
ii[google[v][D].uj]=!0;
ii[google[v][D].Zc]=!0;
google[v][D].Zx = ii;
google[v][D].Yq = function() {
    return !(!window[wd] ||!window[wd][vb])
};
google[v][D].Zq = function() {
    return "onhashchange"in window && (!oh() || 8 <= h.documentMode)
};
google[v][D].isSupported = function() {
    return google[v][D].Yq() || google[v][D].Zq()
};
google[v][D].Wv = function() {
    var a = google[v][D].jm(google[v][D].km())[uc], b;
    for (b in a)
        return !0;
    return !1
};
M = google[v][D][H];
M.isEnabled = function() {
    return this.om
};
M.pushState = function(a) {
    this.om&&!this.lm && this.Xq(a, !1)
};
M.Xq = function(a, b) {
    a = google[v][D].Mx(a);
    if (!google[v][D].er(this.we, a)) {
        this.we = a;
        var d = google[v][D].Nx(a);
        this.fm && (d = this.fm + "&" + d);
        if (this.hm) {
            var e = h[pd] || "", d = "#" + d;
            b ? window[wd].replaceState(null, e, d) : window[wd][vb](null, e, d)
        } else 
            this.im && (d = this.kx + "#" + d, b ? window[mc][r](d) : Oa(window[mc], d))
    }
};
M.Tg = function() {
    var a = {}, b;
    for (b in this.we)
        a[b] = this.we[b];
    return a
};
M.tx = function() {
    var a = google[v][D].jm(google[v][D].km());
    this.fm = a.Sq;
    google[v][D].er(this.we, a[uc]) || (this.we = a[uc], this.Uq())
};
M.Uq = function() {
    this.lm=!0;
    this.rx(this.Tg());
    this.lm=!1
};
google[v][D].km = function() {
    var a = window[mc][zc], b = a[dd]("#");
    return 0 > b ? "" : a[Gd](b + 1)
};
google[v][D].xm = function(a) {
    return !!google[v][D].hy[a]
};
google[v][D].er = function(a, b) {
    for (var d in a)
        if (a[d] !== b[d])
            return !1;
    for (d in b)
        if (!a[oc](d))
            return !1;
    return !0
};
google[v][D].Mx = function(a) {
    var b = {}, d;
    for (d in a)
        google[v][D].xm(d) && (b[d] = a[d]);
    return b
};
google[v][D].Nx = function(a) {
    var b = [], d;
    for (d in a)
        null != a[d] && google[v][D].xm(d) && b[B](c(d) + "=" + c(a[d]));
    return b[Nd]("&")
};
google[v][D].jm = function(a) {
    var b = {};
    a = a[hc]("&");
    for (var d = [], e = 0; e < a[G]; e++) {
        var g = a[e], f = g[dd]("="), k=!1;
        if ( - 1 != f) {
            var l = xa(g[cc](0, f));
            google[v][D].xm(l) && (f = xa(g[cc](f + 1)), google[v][D].Zx[l] ? (f = ta(f, 10), ha(f) || (b[l] = f)) : b[l] = f, k=!0)
        }
        k || d[B](g)
    }
    return {
        state: b,
        Sq: d[Nd]("&")
    }
};
google[v].Lh = function(a, b) {
    this.size = b || google[v].Lh.cy;
    this[Dc]()
};
google[v].Lh.cy = 20;
google[v].Lh[H].reset = function() {
    this.Ej = null;
    for (var a = 0; a < this.size; a++)
        this.Ux(new google[v].nr);
    this.jr = {};
    this.kr = null
};
google[v].Lh[H].Ux = function(a) {
    a.next = this.Ej;
    a.pr = null;
    null == this.Ej || (this.Ej.pr = a);
    this.Ej = a
};
google[v].Lh[H].put = function(a, b) {
    var d;
    a in this.jr && (d = this.jr[a], d.set(a, b), this.kr == d && (this.kr = null))
};
google[v].nr = function() {
    this.pr = this.next = null
};
google[v].nr[H].set = function() {};
google[v].A = function() {
    this.st = google[v].A.Dl;
    google[v].A.Dl += 1;
    this.Fc = null;
    this.Wi=!0;
    this.va = {
        width: 100,
        height: 75
    };
    this.Uc = google[v].A.Mf;
    this.Hj = 1;
    this.Da(google[v].A.Zb);
    this.ml();
    this.gwsUrl = this.ta = this.Ma = this.oa = this.Hf = this.Xb = this.Bl = this.Qi = this.Cl = this.je = null;
    this.ed = [];
    this.gh = {};
    this.Kd = this.Ze = "";
    var a;
    if ("object" === typeof window && window[mc] && window[mc][qc] && "" != window[mc][qc]) {
        if ("" == Nh) {
            var b = window[mc][qc][Od]()[hc](".");
            2 > b[G] && (Nh = ".com");
            a = b.pop();
            b = b.pop();
            Nh = 2 == a[G] ? Oh[b] &&
            1 == Oh[b][a] ? "." + b + "." + a : "." + a : ".com"
        }
        a = Nh
    } else 
        a = ".com";
    this.Mo = a;
    this.Rd = this.rd = null;
    this.N=!1
};
Rd("google.search.Search", google[v].A, void 0);
google[v].A.Dl = 0;
google[v].A.sp = google[Ed][ld];
google[v].A.BASE = google[v].A.sp;
google[v].A.cw = /style=([^&]*)/;
google[v].A.tc = "large";
google[v].A.LARGE_RESULTSET = google[v].A.tc;
google[v].A.Zb = "small";
google[v].A.SMALL_RESULTSET = google[v].A.Zb;
google[v].A.Hc = "filtered_cse";
google[v].A.FILTERED_CSE_RESULTSET = google[v].A.Hc;
google[v].A.Ip = 8;
google[v].A.LARGE_RESULTS = google[v].A.Ip;
google[v].A.Nl = 4;
google[v].A.SMALL_RESULTS = google[v].A.Nl;
google[v].A.Hp = 10;
google[v].A.FILTERED_CSE_RESULTS = google[v].A.Hp;
google[v].A.my = "_top";
google[v].A.LINK_TARGET_TOP = google[v].A.my;
google[v].A.Gn = "_self";
google[v].A.LINK_TARGET_SELF = google[v].A.Gn;
google[v].A.ly = "_parent";
google[v].A.LINK_TARGET_PARENT = google[v].A.ly;
google[v].A.Mf = "_blank";
google[v].A.LINK_TARGET_BLANK = google[v].A.Mf;
google[v].A.qh = "order-by-relevance";
google[v].A.ORDER_BY_RELEVANCE = google[v].A.qh;
google[v].A.kd = "order-by-date";
google[v].A.ORDER_BY_DATE = google[v].A.kd;
google[v].A.Sp = "order-by-ascending-date";
google[v].A.ORDER_BY_ASCENDING_DATE = google[v].A.Sp;
google[v].A.dj = "restrict-type";
google[v].A.RESTRICT_TYPE = google[v].A.dj;
google[v].A.Xa = "restrict-safesearch";
google[v].A.RESTRICT_SAFESEARCH = google[v].A.Xa;
google[v].A.Xf = "active";
google[v].A.SAFESEARCH_STRICT = google[v].A.Xf;
google[v].A.Wf = "off";
google[v].A.SAFESEARCH_OFF = google[v].A.Wf;
google[v].A.Fl = "moderate";
google[v].A.SAFESEARCH_MODERATE = google[v].A.Fl;
google[v].A.Ja = "restrict-extended";
google[v].A.RESTRICT_EXTENDED_ARGS = google[v].A.Ja;
google[v].A.tv = 5E3;
google[v].A.xv = google[Ed].ApiaryBase ? google[Ed].ApiaryBase : "https://www.googleapis.com/customsearch/v1element";
google[v].A.yv = "AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY";
google[v].A.np=!1;
google[v].A.bz = Q;
google[v].A.strings = google[v].A.bz;
google[v].A[H].Kh = function() {};
google[v].A.Jk = function() {
    if (google[v].LoadArgs) {
        var a = xa(google[v].LoadArgs)[Ib](google[v].A.cw);
        if (a && a[1])
            return a[1]
    }
    return null
};
google[v].A.xt = function(a) {
    a=!!a || /\/v2\/default\.css$/[Qc](google[v].A.Jk() || "");
    return {
        rf: a,
        Zi: a,
        Yf: a,
        Um: a,
        Op: a
    }
};
google[v].A[H].Si = function(a) {
    a.Ma = this.Ma;
    a.jf = this.jf;
    a.Uc = this.Uc;
    a.Ka = this.Ka;
    a.Xb = this.Xb;
    a.Wi = this.Wi;
    this.va && (a.va = {}, Aa(a.va, this.va[zb]), Qa(a.va, this.va[Hc]));
    a.Qh = this.Qh;
    a.eb = this.eb
};
google[v].A[H].Dv = function() {
    var a = this.sc + "?hl=" + google[v][Kd] + "&source=uds", a = this.ta ? a + this.ta: a + "&q=";
    return this.gd && "" != this.gd ? this.gd : a
};
google[v].A[H].Fb = function(a) {
    this.Ma = null == a || "" == a ? null : a
};
google[v].A[H].setQueryAddition = google[v].A[H].Fb;
google[v].A[H].Pc = function(a, b) {
    var d = google[v].A.sp + this.Gc + "?callback=" + a + "&rsz=" + this.Ka + "&hl=" + google[v][Kd];
    this.eb && this.N && (d = google[v].A.xv + "?key=" + google[v].A.yv + "&rsz=" + this.Ka + "&num=" + this.jd() + "&hl=" + google[v][Kd] + "&prettyPrint=false");
    this.jf && (d += "&source=" + c(this.jf));
    this.Mo && (d += "&gss=" + this.Mo);
    google[v].JSHash && (d += "&sig=" + google[v].JSHash);
    b && (d += "&start=" + b);
    return d
};
google[v].A[H].Uy = function(a) {
    this.jf = a
};
google[v].A[H].setSearcherSrc = google[v].A[H].Uy;
google[v].A[H].Oa = function(a) {
    this.Uc = a
};
google[v].A[H].setLinkTarget = google[v].A[H].Oa;
google[v].A[H].ya = function() {
    return this.Uc && "" != this.Uc ? this.Uc : null
};
google[v].A[H].$d = function() {
    null == this.je && (this.je = "gsc-" + this.oa + "Result");
    return this.je
};
google[v].A[H].Ld = function() {
    null == this.Cl && (this.Cl = "gs-" + this.oa + "Result");
    return this.Cl
};
google[v].A[H].Hl = function() {
    null == this.Qi && (this.Qi = Q[this.oa]);
    return this.Xb ? this.Xb : this.Qi
};
google[v].A[H].getTabLabel = google[v].A[H].Hl;
google[v].A[H].iv = function() {
    null == this.Bl && (this.Bl = Q[this.oa]);
    return this.Xb ? this.Xb : this.Bl
};
google[v].A[H].Fy = function() {
    return this.Ka
};
google[v].A[H].getResultSetSize = google[v].A[H].Fy;
google[v].A[H].Da = function(a) {
    ha(ta(a, 10)) || (a = ta(a, 10));
    if (0 < a && 8 >= a)
        this.Ka = a;
    else 
        switch (a) {
        case google[v].A.tc:
            this.Ka = google[v].A.tc;
            break;
        default:
        case google[v].A.Zb:
            this.Ka = google[v].A.Zb
        }
};
google[v].A[H].setResultSetSize = google[v].A[H].Da;
google[v].A[H].qa = function(a, b, d) {
    var e = void 0;
    if (d && 0 < d)
        if (this[ec] && this[ec].pages && this[ec].pages[d - 1] && this[ec].pages[d - 1].start)
            e = this[ec].pages[d - 1].start;
        else {
            var g = this.jd();
            g && (e = g * (d - 1))
        }
    d = this.dc(a, void 0, e);
    (b = Wh(b)) && (d += "&" + b);
    window._googleudsextrastuff && (d += window._googleudsextrastuff);
    b = this.gh[oc](d);
    if (d == this.Kd&&!b)
        return this.kp(), !1;
    e = (new Date)[Wb]();
    if (b && e - this.gh[d] < google[v].A.tv)
        return !1;
    b && (e =- 1);
    this.gh[d] = e;
    this.cursor = null;
    this.Ze = a;
    this.Kd = d;
    this.Yd = this.qp ? this.qp() :
    null;
    this.eb && this.N ? nh(google[v].A.op(this, d)) : ih(this.pp(a, d), google[v][td]);
    if (this.ed && 0 < this.ed[G])
        for (b = 0; b < this.ed[G]; b++)
            this.ed[b].qa(a);
    return !0
};
google[v].A[H].execute = google[v].A[H].qa;
google[v].A.op = function(a, b) {
    var d = "apiary" + oa[Ab](2E4 * oa[wc]());
    google[v].A[d] = function(e) {
        var g = 200, f = null;
        e.error && (g = e.error.code, f = e.error.message);
        a.nb(e, g, f, g, b);
        delete google[v].A[d]
    };
    return b + "&callback=google.search.Search." + d
};
google[v].A[H].pp = function(a, b) {
    var d;
    d = b + (this.Yd ? "&" + this.Yd : "");
    var e = this.Ac(a, b);
    return d += "&context=" + e
};
google[v].A[H].xp = function(a) {
    this[ec] && a < this[ec].pages[G] && (a = this.dc(this.Ze, void 0, this[ec].pages[a].start), this.cursor = null, this.Kd = a, this.eb && this.N ? nh(google[v].A.op(this, a)) : ih(this.pp(this.Ze, a), google[v][td]))
};
google[v].A[H].gotoPage = google[v].A[H].xp;
google[v].A[H].oj = function() {
    return this[ec] && null != this[ec].currentPageIndex ? this[ec].currentPageIndex + 1 : null
};
google[v].A[H].jd = function() {
    return ha(ta(this.Ka, 10)) ? this.Ka == google[v].A.Zb ? google[v].A.Nl : this.Ka == google[v].A.tc ? google[v].A.Ip : this.Ka == google[v].A.Hc ? google[v].A.Hp : google[v].A.Nl : this.Ka
};
google[v].A[H].getNumResultsPerPage = google[v].A[H].jd;
google[v].A[H].py = function(a) {
    this.ed && this.ed[B](a)
};
google[v].A[H].addRelatedSearcher = google[v].A[H].py;
google[v].A[H].By = function(a, b, d) {
    b = this.dc(a, b);
    if (null == d || void 0 == d)
        d = this.Ac(a, b);
    return b + ("&context=" + d) + "&key=" + google[Ed].ApiKey + "&v=" + google[v][td]
};
google[v].A[H].getExecuteUrl = google[v].A[H].By;
google[v].A[H].Mc = function(a) {
    var b = Bh("http://code.google.com/apis/ajaxsearch/faq.html", Q.watermark + " - " + this.ty(), "_blank", "gs-watermark");
    R(a, b)
};
google[v].A[H].ty = function() {
    var a = new Date;
    return a.getMonth() + 1 + "/" + a.getFullYear()
};
google[v].A[H].vf = function(a) {
    var b;
    b = a.getFullYear();
    var d = a.getMonth(), e = Q["month-abbr"][d];
    a = a.getDate();
    10 > a && (a = "0" + a);
    switch (google[v].ShortDatePattern) {
    case "MDY":
        b = e + " " + a + ", " + b;
        break;
    case "YMD":
        "zh-CN" == google[v][Kd] || "zh-TW" == google[v][Kd] || "ja" == google[v][Kd] || "ko" == google[v][Kd] ? (e = ji[google[v][Kd]], b = b + e.year + (d + 1) + e.month + a + e.day) : b = b + " " + e + " " + a;
        break;
    default:
    case "DMY":
        b = a + " " + e + " " + b
    }
    return b
};
google[v].A[H].formatToShortDate = google[v].A[H].vf;
var ji = {
    "zh-CN": {
        month: " \u6708 ",
        year: " \u5e74 ",
        day: " \u65e5 "
    },
    "zh-TW": {
        month: " \u6708 ",
        year: " \u5e74 ",
        day: " \u65e5 "
    },
    ja: {
        month: "\u6708",
        year: "\u5e74",
        day: "\u65e5"
    },
    ko: {
        month: " \uc6d4 ",
        year: " \ub144 ",
        day: " \uc77c "
    }
};
google[v].A.Vp = 36E5;
google[v].A.Yv = 6E4;
google[v].A.Xv = 864E5;
google[v].A[H].cm = function(a) {
    var b = (new Date)[Wb](), d = a[Wb]();
    if (b < d)
        return Q["n-minutes-ago"](2);
    b -= d;
    return b < google[v].A.Vp ? (a = oa[Ab](b / google[v].A.Yv), Q["n-minutes-ago"](1 >= a ? 2 : a)) : b < google[v].A.Xv ? (a = oa[Ab](b / google[v].A.Vp), 1 >= a ? Q["one-hour-ago"] : Q["n-hours-ago"](a)) : this.vf(a)
};
google[v].A[H].formatToRelativeDate = google[v].A[H].cm;
google[v].A[H].ml = function() {
    this.gwsUrl = null;
    this.results = []
};
google[v].A[H].clearResults = google[v].A[H].ml;
google[v].A[H].kp = function() {
    this.vr && this.vr()
};
google[v].A[H].Ev = function(a, b) {
    if (a && 0 <= a) {
        var d = (new Date)[Wb](), e = d - a, g = b - a, f = [];
        if (1 == d%100)
            if (this.N)
                f[B]("asa_" + this.oa + "_cse"), this.eb && (google[v].A.np ? f[B]("asa_" + this.oa + "_cse_apiary_sub") : f[B]("asa_" + this.oa + "_cse_apiary_first"));
            else 
                f[B]("asa_" + this.oa);
        0 < f[G] && google[Ed].recordCsiStat(f, ["req." + e, "req2." + g])
    }
};
google[v].A[H].nb = function(a, b, d, e, g) {
    d = (new Date)[Wb]();
    var f;
    g && (f = this.gh[g], delete this.gh[g]);
    if (!g ||!this.Kd || g == this.Kd) {
        this.gwsUrl = null;
        if (this.results && 0 < this.results[G])
            for (g = 0; g < this.results[G]; g++)
                this.results[g].html && ki(this.results[g].html);
        a && a.results && 0 < a.results[G] ? (this.results = a.results, a[ec] && a[ec].moreResultsUrl ? this.gwsUrl = this.gd && "" != this.gd ? this.gd : a[ec].moreResultsUrl : this.ta && this.sc && (this.gwsUrl = this.Dv())) : this.results = [];
        this.completionStatus = b;
        this.hashStatus = e;
        this.Bp = a && a.resultAttribution && null != a.resultAttribution && "" != a.resultAttribution ? a.resultAttribution : null;
        a && a[ec] && a[ec].pages && 0 < a[ec].pages[G] ? this.cursor = a[ec] : "undefined" != typeof this[ec] && delete this[ec];
        if (a && a.context) {
            this.context = a.context;
            b = [];
            if (a.context.facets && 0 < ta(a.context.total_results, 10)) {
                for (g = 0; g < a.context.facets[G]; g++)
                    if (a.context.facets[g].facet_search_label) {
                        e = a.context.facets[g];
                        var k = ta(e[nc], 10);
                        0 < k && (e.count = k, Aa(e, oa.ceil(100 * k / ta(a.context.total_results, 10))), b[B](e))
                    }
                0 <
                b[G] && b[Dd](function(a, b) {
                    return b[nc] - a[nc]
                })
            }
            this.context.display_facets = b
        } else 
            "undefined" != typeof this.context && delete this.context;
        a && a.promotions ? this.promotions = a.promotions : "undefined" != typeof this.promotions && delete this.promotions;
        a && a.omittedResults ? this.omittedResults = a.omittedResults : "undefined" != typeof this.omittedResults && delete this.omittedResults;
        a && a.spelling ? this.spelling = a.spelling : "undefined" != typeof this.spelling && delete this.spelling;
        this.Wi && this.Cv();
        this.kp();
        this.Ev(f, d);
        this.eb && (google[v].A.np=!0)
    }
};
google[v].A[H].onSearchComplete = google[v].A[H].nb;
google[v].A[H].$m = function() {
    var a = null;
    this.Bp && (a = V(this.Bp, "gs-results-attribution"));
    return a
};
google[v].A[H].getAttribution = google[v].A[H].$m;
google[v].A[H].Bq = function(a) {
    this.Qh = a
};
google[v].A[H].Cv = function() {
    var a, b;
    for (a = 0; a < this.results[G]; a++)
        b = this.results[a], this.Qa(b);
    (a = this.context) && this.Kh(a)
};
google[v].A[H].eh = function(a, b, d) {
    d || (d = [null]);
    this.vr = lh(a, b, d)
};
google[v].A[H].setSearchCompleteCallback = google[v].A[H].eh;
google[v].A[H].Xu = function(a, b) {
    this.qp = lh(a, b)
};
google[v].A.Kc = function(a, b, d) {
    return 3 == a[b][G] ? new google[v].ur(a[b][1] || d && d.prefetchQuery, a[b][2], a[b][0], d) : new google[v].ur("", "", a[b], d)
};
google[v].A.Rb = function(a, b) {
    var d;
    if (a[G])
        for (var e = 0; e < a[G]; e++)
            if (null == a[e]) {
                a[e] = b;
                d = e;
                break
            }
    d || (d = a[G], a[B](b));
    return d
};
google[v].A.AllocateCompletionMapContext = google[v].A.Rb;
google[v].A[H].hc = function(a) {
    this.Xb = a
};
google[v].A[H].setUserDefinedLabel = google[v].A[H].hc;
google[v].A[H].Wy = function(a) {
    this.Hf = a
};
google[v].A[H].setUserDefinedClassSuffix = google[v].A[H].Wy;
google[v].A[H].Py = function() {
    this.Wi=!1
};
google[v].A[H].setNoHtmlGeneration = google[v].A[H].Py;
google[v].A.Yb = function(a, b, d, e, g) {
    var f = oa.min(d[zb] / a, d[Hc] / b), f = oa.min(f, 1), k = {};
    Aa(k, oa[Wc](a * f));
    Qa(k, oa[Wc](b * f));
    e && (Aa(e, k[zb]), Qa(e, k[Hc]), g && $a(e[u], (d[zb] - k[zb]) / 2 + "px"));
    return k
};
google[v].A.scaleImage = google[v].A.Yb;
google[v].A.Xp = 1;
google[v].A.VERTICAL_BRANDING = google[v].A.Xp;
google[v].A.jy = 2;
google[v].A.HORIZONTAL_BRANDING = google[v].A.jy;
google[v].A.Ay = function(a, b, d) {
    return Th("gsc-", a, b && b == google[v].A.Xp, d)
};
google[v].A.getBranding = google[v].A.Ay;
google[v].A.setOnLoadCallback = function(a, b) {
    google.setOnLoadCallback(a, b)
};
google[v].A.setOnLoadCallback = google[v].A.setOnLoadCallback;
var li;
function ki(a) {
    li || (li = h[s]("DIV"));
    li[p](a);
    Xa(li, "")
}
google[v].A[H].Er = function(a) {
    var b = this.rd;
    a && (b = a);
    a = {};
    var d = X(this.Ld());
    $(d, "gs-result");
    $(d, "gs-error-result");
    b = V(b, "gs-snippet");
    R(d, b);
    a.html = d;
    return a
};
google[v].A[H].Fr = function(a) {
    var b = this.Rd;
    a && (b = a);
    a = {};
    var d = X(this.Ld());
    $(d, "gs-result");
    $(d, "gs-no-results-result");
    b = V(b, "gs-snippet");
    R(d, b);
    a.html = d;
    return a
};
google[v].A[H].Jp = function(a) {
    this.va = a
};
google[v].A[H].Dy = function() {
    return this.Kd
};
google[v].A[H].getLastQueryUrl = google[v].A[H].Dy;
google[v].ur = function(a, b, d) {
    this.di = a;
    this.Ic = b;
    this.Jc = d
};
ba("google.search.CurrentLocale", wa);
ba("google.search.ShortDatePattern", da);
google[v].za = function() {
    google[v].A[zd](this);
    this.oa = "blog";
    this.Gc = "/GblogSearch";
    this.sc = "http://blogsearch.google.com/blogsearch";
    this.Kb = null;
    this.Lb=!1;
    this.of=!0;
    this.Fc = ph(this, google[v].za[H].hd);
    this.Se = "gsc-blogConfig";
    this.ma = null
};
Rd("google.search.BlogSearch", google[v].za, void 0);
gh(google[v].za, google[v].A);
google[v].za.Va = "GblogSearch";
google[v].za.RESULT_CLASS = google[v].za.Va;
google[v].za.Z = [];
google[v].za.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].za.Z, f, b);
    google[v].za.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].za.RawCompletion = google[v].za.Sa;
google[v].za[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].za.Z, [this, a, b])
};
google[v].za[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.BlogSearch.RawCompletion" : b, d);
    this.Ma && (a = a + " " + this.Ma);
    this.Kb && (a = a + " blogurl:" + this.Kb);
    a = "&q=" + c(a);
    this.Lb && (a += "&scoring=d");
    this.ta = a;
    return b + a
};
google[v].za[H].Qa = function(a) {
    a.html && delete a.html;
    var b = X(this.Ld());
    $(b, "gs-result");
    var d;
    d = Bh(a.postUrl, a[pd], this.ya(), "gs-title");
    R(b, d);
    d = new Date(a.publishedDate);
    d = V(this.vf(d), "gs-publishedDate");
    R(b, d);
    d = new Date(a.publishedDate);
    d = V(this.cm(d), "gs-relativePublishedDate");
    R(b, d);
    d = V(a[Cb], "gs-snippet");
    R(b, d);
    d = Bh(a.blogUrl, a.blogUrl, this.ya(), "gs-visibleUrl");
    R(b, d);
    a.html = b;
    this.Mc(a.html)
};
google[v].za[H].createResultHtml = google[v].za[H].Qa;
google[v].za[H].Ub = function(a) {
    this.Kb = null == a || "" == a ? null : a
};
google[v].za[H].setSiteRestriction = google[v].za[H].Ub;
google[v].za[H].Gb = function(a) {
    this.Lb = a == google[v].A.kd?!0 : !1
};
google[v].za[H].setResultOrder = google[v].za[H].Gb;
google[v].za[H].hd = function(a, b) {
    if (b) {
        if (null == this.ma) {
            var d = X("gsc-configSetting");
            this.ma = Hh(null, "0", this.Lb, "gsc-configSettingCheckbox");
            R(d, this.ma);
            R(d, V(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
            var e = X("gsc-configSettingSubmit");
            R(e, Eh(Q[rc], "gsc-configSettingSubmit"));
            R(d, e);
            R(a, d)
        } else 
            Fa(this.ma, this.Lb);
        this.ma[Jb]()
    } else 
        this.ma && (this.ma[fc] ? this.Gb(google[v].A.kd) : this.Gb(google[v].A.qh))
};
google[v].ia = function() {
    google[v].A[zd](this);
    this.oa = "book";
    this.Gc = "/GbookSearch";
    this.sc = "http://books.google.com/books";
    this.fj=!1;
    this.gj = null
};
Rd("google.search.BookSearch", google[v].ia, void 0);
gh(google[v].ia, google[v].A);
google[v].ia.Va = "GbookSearch";
google[v].ia.RESULT_CLASS = google[v].ia.Va;
google[v].ia.Fp = "user-list";
google[v].ia.USER_LIST = google[v].ia.Fp;
google[v].ia.Dp = 1;
google[v].ia.TYPE_ALL_BOOKS = google[v].ia.Dp;
google[v].ia.Ep = 2;
google[v].ia.TYPE_FULL_VIEW_BOOKS = google[v].ia.Ep;
google[v].ia.Z = [];
google[v].ia.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].ia.Z, f, b);
    google[v].ia.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].ia.RawCompletion = google[v].ia.Sa;
google[v].ia[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].ia.Z, [this, a, b])
};
google[v].ia[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.BookSearch.RawCompletion" : b, d);
    this.Ma && (a = a + " " + this.Ma);
    a = "&q=" + c(a);
    this.fj && (a += "&as_brr=1");
    this.gj && (a = a + "&as_list=" + this.gj);
    this.ta = a;
    return b + a
};
google[v].ia[H].Qa = function(a) {
    a.html && delete a.html;
    a.thumbnailHtml = this.sm(a);
    var b = X(this.Ld());
    $(b, "gs-result");
    var d = X("gs-text-box"), e = wh(), g = xh(e, 0), f = yh(g, "gs-image-box"), g = yh(g, "gs-text-box");
    R(f, a.thumbnailHtml[Ob](!0));
    R(g, d);
    R(b, e);
    e = Bh(a.unescapedUrl, a[pd], this.ya(), "gs-title");
    R(d, e);
    e = V(Q.by + "&nbsp;" + a.authors, "gs-author");
    R(d, e);
    e = X("gs-spacer");
    R(d, e);
    a.publishedYear && (e = V(a.publishedYear, "gs-publishedDate"), R(d, e));
    0 < ta(a.pageCount, 10) && (e = V("-&nbsp;" + Q["page-count"](a.pageCount),
    "gs-pageCount"), R(d, e));
    e = Bh("http://books.google.com", "books.google.com", this.ya(), "gs-visibleUrl");
    R(d, e);
    a.html = b;
    this.Mc(a.html)
};
google[v].ia[H].createResultHtml = google[v].ia[H].Qa;
google[v].ia[H].sm = function(a) {
    var b = X("gs-image-box gs-book-image-box"), d = X("gs-row-1"), e = zh("http://books.google.com/googlebooks/pages-trans.gif", null, null, "gs-pages");
    R(d, e);
    e = zh("http://books.google.com/googlebooks/p_edge-trans.gif", null, null, "gs-page-edge");
    R(d, e);
    R(b, d);
    d = X("gs-row-2");
    e = google[v].A.Yb(a.tbWidth, a.tbHeight, this.va);
    e = zh(a.tbUrl, e[zb], e[Hc], "gs-image");
    a = Ah(a.unescapedUrl, null, this.ya(), "gs-image");
    m(a, "gs-image");
    R(a, e);
    R(d, a);
    R(b, d);
    return b
};
google[v].ia[H].Ra = function(a, b) {
    a == google[v].A.dj ? b ? b == google[v].ia.Dp ? this.fj=!1 : b == google[v].ia.Ep ? this.fj=!0 : this.Ra(a, null) : this.fj=!1 : a == google[v].ia.Fp && (b && b[Ib](/^[a-zA-Z0-9\-_]*$/) ? this.gj = b : this.gj = null)
};
google[v].ia[H].setRestriction = google[v].ia[H].Ra;
google[v].D = function() {
    google[v].A[zd](this);
    this.Hj = 2;
    this.oa = "image";
    this.Gc = "/GimageSearch";
    this.sc = "http://images.google.com/images";
    this.Ia = null;
    this.fa = {};
    this.rc = this.mc = this.qc = this.oc = this.nc = this.pc = null;
    this.Qb = google[v].D.cd;
    this.P = new google[v].uc;
    this.va = {
        width: 112,
        height: 84
    }
};
Rd("google.search.ImageSearch", google[v].D, void 0);
gh(google[v].D, google[v].A);
google[v].D.Va = "GimageSearch";
google[v].D.RESULT_CLASS = google[v].D.Va;
google[v].D.Ig = "restrict-imagesize";
google[v].D.RESTRICT_IMAGESIZE = google[v].D.Ig;
google[v].D.Cm = ["icon"];
google[v].D.IMAGESIZE_SMALL = google[v].D.Cm;
google[v].D.Bm = ["small", "medium", "large", "xlarge"];
google[v].D.IMAGESIZE_MEDIUM = google[v].D.Bm;
google[v].D.Am = ["xxlarge"];
google[v].D.IMAGESIZE_LARGE = google[v].D.Am;
google[v].D.zm = ["huge"];
google[v].D.IMAGESIZE_EXTRA_LARGE = google[v].D.zm;
google[v].D.Gg = "restrict-coloration";
google[v].D.RESTRICT_COLORIZATION = google[v].D.Gg;
google[v].D.hg = "mono";
google[v].D.COLORIZATION_BLACK_AND_WHITE = google[v].D.hg;
google[v].D.jg = "gray";
google[v].D.COLORIZATION_GRAYSCALE = google[v].D.jg;
google[v].D.ig = "color";
google[v].D.COLORIZATION_COLOR = google[v].D.ig;
google[v].D.Fg = "restrict-colorfilter";
google[v].D.RESTRICT_COLORFILTER = google[v].D.Fg;
google[v].D.sg = "red";
google[v].D.COLOR_RED = google[v].D.sg;
google[v].D.pg = "orange";
google[v].D.COLOR_ORANGE = google[v].D.pg;
google[v].D.vg = "yellow";
google[v].D.COLOR_YELLOW = google[v].D.vg;
google[v].D.og = "green";
google[v].D.COLOR_GREEN = google[v].D.og;
google[v].D.tg = "teal";
google[v].D.COLOR_TEAL = google[v].D.tg;
google[v].D.lg = "blue";
google[v].D.COLOR_BLUE = google[v].D.lg;
google[v].D.rg = "purple";
google[v].D.COLOR_PURPLE = google[v].D.rg;
google[v].D.qg = "pink";
google[v].D.COLOR_PINK = google[v].D.qg;
google[v].D.ug = "white";
google[v].D.COLOR_WHITE = google[v].D.ug;
google[v].D.ng = "gray";
google[v].D.COLOR_GRAY = google[v].D.ng;
google[v].D.kg = "black";
google[v].D.COLOR_BLACK = google[v].D.kg;
google[v].D.mg = "brown";
google[v].D.COLOR_BROWN = google[v].D.mg;
google[v].D.Hg = "restrict-filetype";
google[v].D.RESTRICT_FILETYPE = google[v].D.Hg;
google[v].D.yg = "jpg";
google[v].D.FILETYPE_JPG = google[v].D.yg;
google[v].D.zg = "png";
google[v].D.FILETYPE_PNG = google[v].D.zg;
google[v].D.xg = "gif";
google[v].D.FILETYPE_GIF = google[v].D.xg;
google[v].D.wg = "bmp";
google[v].D.FILETYPE_BMP = google[v].D.wg;
google[v].D.Jg = "restrict-imagetype";
google[v].D.RESTRICT_IMAGETYPE = google[v].D.Jg;
google[v].D.Bg = "face";
google[v].D.IMAGETYPE_FACES = google[v].D.Bg;
google[v].D.Ag = "clipart";
google[v].D.IMAGETYPE_CLIPART = google[v].D.Ag;
google[v].D.Cg = "lineart";
google[v].D.IMAGETYPE_LINEART = google[v].D.Cg;
google[v].D.Dg = "news";
google[v].D.IMAGETYPE_NEWS = google[v].D.Dg;
google[v].D.Eg = "photo";
google[v].D.IMAGETYPE_PHOTO = google[v].D.Eg;
google[v].D.Kg = "restrict-rights";
google[v].D.RESTRICT_RIGHTS = google[v].D.Kg;
google[v].D.Og = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)";
google[v].D.RIGHTS_REUSE = google[v].D.Og;
google[v].D.Mg = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)";
google[v].D.RIGHTS_COMMERCIAL_REUSE = google[v].D.Mg;
google[v].D.Ng = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)";
google[v].D.RIGHTS_MODIFICATION = google[v].D.Ng;
google[v].D.Lg = "(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)";
google[v].D.RIGHTS_COMMERCIAL_MODIFICATION = google[v].D.Lg;
google[v].D.dh = 20;
google[v].D.CSE_LARGE_RESULTSET = google[v].D.dh;
google[v].D.Hd = "popup";
google[v].D.LAYOUT_POPUP = google[v].D.Hd;
google[v].D.oe = "column";
google[v].D.LAYOUT_COLUMN = google[v].D.oe;
google[v].D.cd = "classic";
google[v].D.LAYOUT_CLASSIC = google[v].D.cd;
google[v].D.Z = [];
google[v].D.de = {
    as_dt: !0,
    as_epq: !0,
    as_eq: !0,
    as_lq: !0,
    as_nlo: !0,
    as_nhi: !0,
    as_oq: !0,
    as_q: !0,
    as_qdr: !0,
    as_rq: !0,
    as_sitesearch: !0,
    cr: !0,
    c2coff: !0,
    filter: !0,
    gl: !0,
    hq: !0,
    lr: !0,
    query: !0,
    sort: !0
};
M = google[v].D[H];
M.rj = function() {
    var a = new google[v].D;
    this.Si(a);
    a.Ia = this.Ia;
    a.fa = this.fa;
    a.pc = this.pc;
    a.nc = this.nc;
    a.oc = this.oc;
    a.qc = this.qc;
    a.mc = this.mc;
    a.rc = this.rc;
    a.Te(this.Qb);
    a.P = this.P[tc]();
    a.N = this.N;
    return a
};
M.nd = function(a) {
    a = Vh(a);
    return a[r](/\s+/g, "_")[Od]()
};
M.Xd = function(a) {
    return this.N ? this.P.Ga == this.nd(a) : !1
};
M.zc = function(a) {
    return this.N && this.P.Ga ? a[r](new RegExp(" more:" + this.P.Ga + "$"), "") : a
};
M.$d = function() {
    return this.je = ["gsc-" + this.oa + "Result", "gsc-" + this.oa + "Result-" + this.Qb][Nd](" ")
};
google[v].D.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].D.Z, f, b);
    google[v].D.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].D.RawCompletion = google[v].D.Sa;
google[v].D[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].D.Z, [this, a, b])
};
google[v].D[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.ImageSearch.RawCompletion" : b, d);
    this.eb && this.N && (b += "&searchtype=image");
    a = [a];
    this.Ma && a[B](this.Ma);
    a = a[Eb](this.P.qe())[Nd](" ");
    var e = this.P.pe(), g = [], f;
    for (f in e)
        g[B](f + "=" + e[f]);
    f = "&" + g[Nd]("&");
    f = f + "&q=" + c(a);
    this.Ia && (f = f + "&safe=" + this.Ia);
    this.pc && (f = f + "&imgsz=" + c(this.pc));
    this.nc && (f = f + "&imgc=" + c(this.nc));
    this.oc && (f = f + "&imgcolor=" + c(this.oc));
    this.qc && (f = f + "&imgtype=" + c(this.qc));
    this.mc && (f = f + "&as_filetype=" + c(this.mc));
    this.rc && (f = f + "&as_rights=" + c(this.rc));
    this.Kb && (f = f + "&as_sitesearch=" + c(this.Kb));
    this.fa && (a = Wh(this.fa)) && (f += "&" + a);
    b += f;
    this.ta = f;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    window[qd][Ed].GoogleLocale && this.eb && this.N && (b += "&googlehost=" + c(window[qd][Ed].GoogleLocale));
    return b
};
google[v].D[H].Qa = function(a) {
    a.html && delete a.html;
    nb(a, this.ya() || void 0);
    a.html = google[v].ga.ka("imageResult_" + this.Qb, a);
    for (var b = google[v].D.Yb(a.tbWidth, a.tbHeight, this.va), d = a.html[Lb]; d; d = d[Vb])
        if (1 == d[Yc]) {
            for (var e = d[ac]("img"), g = [], f = 0, k = e[0]; k = e[f]; ++f)
                g[f] = k;
                "IMG" == d[Cc][Ld]() && g[B](d);
                for (e = 0; k = g[e]; ++e)
                    Lh(k, "gs-image-scalable") && (Aa(k[u], b[zb] + "px"), Qa(k[u], b[Hc] + "px"))
        }
    this.Mc(a.html)
};
google[v].D[H].createResultHtml = google[v].D[H].Qa;
google[v].D[H].Fm = function() {
    return this.Qb
};
google[v].D[H].getLayout = google[v].D[H].Fm;
google[v].D[H].Te = function(a) {
    if (a == google[v].D.cd || a == google[v].D.oe || a == google[v].D.Hd) {
        var b = this.results;
        if (this.Qb != a && b)
            for (var d = 0; d < b[G]; d++) {
                var e = b[d];
                e.html && delete e.html
            }
        this.Qb = a;
        a == google[v].D.cd ? this.va = {
            width: 112,
            height: 84
        } : a == google[v].D.oe ? this.va = {
            width: 112,
            height: 168
        } : a == google[v].D.Hd && (this.va = {
            width: 224,
            height: 84
        })
    }
};
google[v].D[H].setLayout = google[v].D[H].Te;
google[v].D[H].Ub = function(a, b) {
    this.P = google[v].yc.kj(a, b);
    this.P instanceof google[v].Rc && (this.N=!0, this.P[jd]() == google[v].K.Qc && (this.rd = Q["linked-cse-error-results"]))
};
google[v].D[H].setSiteRestriction = google[v].D[H].Ub;
M = google[v].D[H];
M.vh = function() {
    return this.N ? this.P[jd]() : null
};
M.wh = function() {
    return this.N ? this.P.yf : null
};
M.lc = function() {
    return this.N ? this.P.Ga : null
};
M.sj = function(a) {
    this.N && a && this.P.zj(a)
};
M.Da = function(a) {
    ha(ta(a, 10)) || (a = ta(a, 10));
    this.N && (0 < a && a <= google[v].D.dh || google[v].A.Hc == a) ? this.Ka = a : google[v].A[H].Da[zd](this, a)
};
google[v].D[H].setResultSetSize = google[v].D[H].Da;
google[v].D[H].jd = function() {
    var a = google[v].A[H].jd[zd](this);
    return this.N && a && "number" != typeof this.Ka ? 2 * a : a
};
google[v].D[H].getNumResultsPerPage = google[v].D[H].jd;
google[v].D[H].Ra = function(a, b) {
    a == google[v].A.Xa ? this.Ia = b ? b == google[v].A.Xf || b == google[v].A.Wf ? b : null : null : a == google[v].D.Ig ? this.pc = b ? b[Nd]("|") : null : a == google[v].D.Gg ? this.nc = b ? b == google[v].D.hg || b == google[v].D.jg || b == google[v].D.ig ? b : null : null : a == google[v].D.Fg ? this.oc = b ? b == google[v].D.sg || b == google[v].D.pg || b == google[v].D.vg || b == google[v].D.og || b == google[v].D.tg || b == google[v].D.lg || b == google[v].D.rg || b == google[v].D.qg || b == google[v].D.ug || b == google[v].D.ng || b == google[v].D.kg || b == google[v].D.mg ?
    b : null : null : a == google[v].D.Hg ? this.mc = b ? b == google[v].D.yg || b == google[v].D.zg || b == google[v].D.xg || b == google[v].D.wg ? b : null : null : a == google[v].D.Jg ? this.qc = b ? b == google[v].D.Bg || b == google[v].D.Ag || b == google[v].D.Cg || b == google[v].D.Dg || b == google[v].D.Eg ? b : null : null : a == google[v].D.Kg && (this.rc = b ? b == google[v].D.Og || b == google[v].D.Mg || b == google[v].D.Ng || b == google[v].D.Lg ? b : null : null);
    if (a == google[v].A.Ja)
        if (b)
            for (var d in b) {
                var e = b[d];
                google[v].D.de[d] && (this.fa[d] = e)
            } else 
                this.fa = {}
};
google[v].D[H].setRestriction = google[v].D[H].Ra;
google[v].D.Yb = function(a, b, d, e, g) {
    var f = oa.min(d[zb] / a, d[Hc] / b), k = {};
    Aa(k, oa[Wc](a * f));
    Qa(k, oa[Wc](b * f));
    e && (Aa(e, k[zb]), Qa(e, k[Hc]), g && $a(e[u], (d[zb] - k[zb]) / 2 + "px"));
    return k
};
google[v].D.scaleImage = google[v].D.Yb;
google[v].D.Jm = function(a) {
    var b = a[Sb][0], d = a[Sb][1];
    if ("block" == d[u][Gc])
        return !1;
    Pa(d[u], "block");
    db(a[u], 4E3);
    var e = d[Sb][0], g = d[Sb][1], f = b[ac]("img")[0], k = d[ac]("img")[0], l = {
        width: k[Db],
        height: k[Nc]
    };
    k[Db] < f[Db] ? l = {
        width: f[Db],
        height: 2 * f[Nc]
    } : k[Nc] < f[Nc] && (l = {
        width: f[Db],
        height: f[Nc]
    });
    google[v].D.Yb(k[Db], k[Nc], l, k);
    Aa(d[u], d[Db] > 2 * b[Db] ? 2 * b[Db] + "px" : oa.max(e[Db], g[Db]));
    b = Zh(f, a) + f[Db] / 2;
    a = $h(f, a) + f[Nc] / 2;
    f = Zh(k, d) + k[Db] / 2;
    k = $h(k, d) + k[Nc] / 2;
    0 === qa.appName[dd]("Microsoft") ? ($a(d[tb](), b - f + "px"),
    d[tb]().top = a - k + "px") : (d.offsetLeft = b - f + "px", d.offsetTop = a - k + "px");
    return !1
};
google[v].D.showPopup = google[v].D.Jm;
google[v].D.Gm = function(a) {
    a = a[Sb][1];
    if ("none" == a[u][Gc])
        return !1;
    Pa(a[u], "none");
    db(a[Jd][u], 0);
    return !1
};
google[v].D.hidePopup = google[v].D.Gm;
google[v].D[H].Oa = function(a) {
    google[v].A[H].Oa[zd](this, a)
};
google[v].D[H].setLinkTarget = google[v].D[H].Oa;
google[v].D[H].Fb = function(a) {
    google[v].A[H].Fb[zd](this, a)
};
google[v].D[H].setQueryAddition = google[v].D[H].Fb;
google[v].C = function() {
    google[v].A[zd](this);
    this.Hj = 2;
    this.oa = "image";
    this.Gc = "/GcustomimageSearch";
    this.sc = "http://images.google.com/images";
    this.Ia = null;
    this.fa = {};
    this.rc = this.mc = this.qc = this.oc = this.nc = this.pc = null;
    this.Qb = google[v].C.cd;
    this.P = new google[v].uc;
    this.va = {
        width: 112,
        height: 84
    }
};
Rd("google.search.CustomImageSearch", google[v].C, void 0);
gh(google[v].C, google[v].A);
google[v].C.Va = "GcustomimageSearch";
google[v].C.RESULT_CLASS = google[v].C.Va;
google[v].C.Ig = "restrict-imagesize";
google[v].C.RESTRICT_IMAGESIZE = google[v].C.Ig;
google[v].C.Cm = ["icon"];
google[v].C.IMAGESIZE_SMALL = google[v].C.Cm;
google[v].C.Bm = ["small", "medium", "large", "xlarge"];
google[v].C.IMAGESIZE_MEDIUM = google[v].C.Bm;
google[v].C.Am = ["xxlarge"];
google[v].C.IMAGESIZE_LARGE = google[v].C.Am;
google[v].C.zm = ["huge"];
google[v].C.IMAGESIZE_EXTRA_LARGE = google[v].C.zm;
google[v].C.Gg = "restrict-coloration";
google[v].C.RESTRICT_COLORIZATION = google[v].C.Gg;
google[v].C.hg = "mono";
google[v].C.COLORIZATION_BLACK_AND_WHITE = google[v].C.hg;
google[v].C.jg = "gray";
google[v].C.COLORIZATION_GRAYSCALE = google[v].C.jg;
google[v].C.ig = "color";
google[v].C.COLORIZATION_COLOR = google[v].C.ig;
google[v].C.Fg = "restrict-colorfilter";
google[v].C.RESTRICT_COLORFILTER = google[v].C.Fg;
google[v].C.sg = "red";
google[v].C.COLOR_RED = google[v].C.sg;
google[v].C.pg = "orange";
google[v].C.COLOR_ORANGE = google[v].C.pg;
google[v].C.vg = "yellow";
google[v].C.COLOR_YELLOW = google[v].C.vg;
google[v].C.og = "green";
google[v].C.COLOR_GREEN = google[v].C.og;
google[v].C.tg = "teal";
google[v].C.COLOR_TEAL = google[v].C.tg;
google[v].C.lg = "blue";
google[v].C.COLOR_BLUE = google[v].C.lg;
google[v].C.rg = "purple";
google[v].C.COLOR_PURPLE = google[v].C.rg;
google[v].C.qg = "pink";
google[v].C.COLOR_PINK = google[v].C.qg;
google[v].C.ug = "white";
google[v].C.COLOR_WHITE = google[v].C.ug;
google[v].C.ng = "gray";
google[v].C.COLOR_GRAY = google[v].C.ng;
google[v].C.kg = "black";
google[v].C.COLOR_BLACK = google[v].C.kg;
google[v].C.mg = "brown";
google[v].C.COLOR_BROWN = google[v].C.mg;
google[v].C.Hg = "restrict-filetype";
google[v].C.RESTRICT_FILETYPE = google[v].C.Hg;
google[v].C.yg = "jpg";
google[v].C.FILETYPE_JPG = google[v].C.yg;
google[v].C.zg = "png";
google[v].C.FILETYPE_PNG = google[v].C.zg;
google[v].C.xg = "gif";
google[v].C.FILETYPE_GIF = google[v].C.xg;
google[v].C.wg = "bmp";
google[v].C.FILETYPE_BMP = google[v].C.wg;
google[v].C.Jg = "restrict-imagetype";
google[v].C.RESTRICT_IMAGETYPE = google[v].C.Jg;
google[v].C.Bg = "face";
google[v].C.IMAGETYPE_FACES = google[v].C.Bg;
google[v].C.Ag = "clipart";
google[v].C.IMAGETYPE_CLIPART = google[v].C.Ag;
google[v].C.Cg = "lineart";
google[v].C.IMAGETYPE_LINEART = google[v].C.Cg;
google[v].C.Dg = "news";
google[v].C.IMAGETYPE_NEWS = google[v].C.Dg;
google[v].C.Eg = "photo";
google[v].C.IMAGETYPE_PHOTO = google[v].C.Eg;
google[v].C.Kg = "restrict-rights";
google[v].C.RESTRICT_RIGHTS = google[v].C.Kg;
google[v].C.Og = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)";
google[v].C.RIGHTS_REUSE = google[v].C.Og;
google[v].C.Mg = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)";
google[v].C.RIGHTS_COMMERCIAL_REUSE = google[v].C.Mg;
google[v].C.Ng = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)";
google[v].C.RIGHTS_MODIFICATION = google[v].C.Ng;
google[v].C.Lg = "(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)";
google[v].C.RIGHTS_COMMERCIAL_MODIFICATION = google[v].C.Lg;
google[v].C.dh = 20;
google[v].C.CSE_LARGE_RESULTSET = google[v].C.dh;
google[v].C.Hd = "popup";
google[v].C.LAYOUT_POPUP = google[v].C.Hd;
google[v].C.oe = "column";
google[v].C.LAYOUT_COLUMN = google[v].C.oe;
google[v].C.cd = "classic";
google[v].C.LAYOUT_CLASSIC = google[v].C.cd;
google[v].C.Z = [];
google[v].C.de = {
    as_dt: !0,
    as_epq: !0,
    as_eq: !0,
    as_lq: !0,
    as_nlo: !0,
    as_nhi: !0,
    as_oq: !0,
    as_q: !0,
    as_qdr: !0,
    as_rq: !0,
    as_sitesearch: !0,
    cr: !0,
    c2coff: !0,
    filter: !0,
    gl: !0,
    hq: !0,
    lr: !0,
    query: !0,
    sort: !0
};
M = google[v].C[H];
M.rj = function() {
    var a = new google[v].C;
    this.Si(a);
    a.Ia = this.Ia;
    a.fa = this.fa;
    a.pc = this.pc;
    a.nc = this.nc;
    a.oc = this.oc;
    a.qc = this.qc;
    a.mc = this.mc;
    a.rc = this.rc;
    a.Te(this.Qb);
    a.P = this.P[tc]();
    a.N = this.N;
    return a
};
M.nd = function(a) {
    a = Vh(a);
    return a[r](/\s+/g, "_")[Od]()
};
M.Xd = function(a) {
    return this.N ? this.P.Ga == this.nd(a) : !1
};
M.zc = function(a) {
    return this.N && this.P.Ga ? a[r](new RegExp(" more:" + this.P.Ga + "$"), "") : a
};
M.$d = function() {
    return this.je = ["gsc-" + this.oa + "Result", "gsc-" + this.oa + "Result-" + this.Qb][Nd](" ")
};
google[v].C.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].C.Z, f, b);
    google[v].C.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].C.RawCompletion = google[v].C.Sa;
google[v].C[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].C.Z, [this, a, b])
};
google[v].C[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.CustomImageSearch.RawCompletion" : b, d);
    this.eb && this.N && (b += "&searchtype=image");
    a = [a];
    this.Ma && a[B](this.Ma);
    a = a[Eb](this.P.qe())[Nd](" ");
    var e = this.P.pe(), g = [], f;
    for (f in e)
        g[B](f + "=" + e[f]);
    f = "&" + g[Nd]("&");
    f = f + "&q=" + c(a);
    this.Ia && (f = f + "&safe=" + this.Ia);
    this.pc && (f = f + "&imgsz=" + c(this.pc));
    this.nc && (f = f + "&imgc=" + c(this.nc));
    this.oc && (f = f + "&imgcolor=" + c(this.oc));
    this.qc && (f = f + "&imgtype=" + c(this.qc));
    this.mc && (f = f + "&as_filetype=" +
    c(this.mc));
    this.rc && (f = f + "&as_rights=" + c(this.rc));
    this.Kb && (f = f + "&as_sitesearch=" + c(this.Kb));
    this.fa && (a = Wh(this.fa)) && (f += "&" + a);
    b += f;
    this.ta = f;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    window[qd][Ed].GoogleLocale && this.eb && this.N && (b += "&googlehost=" + c(window[qd][Ed].GoogleLocale));
    return b
};
google[v].C[H].Qa = function(a) {
    a.html && delete a.html;
    nb(a, this.ya() || void 0);
    a.html = google[v].ga.ka("imageResult_" + this.Qb, a);
    for (var b = google[v].C.Yb(a.tbWidth, a.tbHeight, this.va), d = a.html[Lb]; d; d = d[Vb])
        if (1 == d[Yc]) {
            for (var e = d[ac]("img"), g = [], f = 0, k = e[0]; k = e[f]; ++f)
                g[f] = k;
                "IMG" == d[Cc][Ld]() && g[B](d);
                for (e = 0; k = g[e]; ++e)
                    Lh(k, "gs-image-scalable") && (Aa(k[u], b[zb] + "px"), Qa(k[u], b[Hc] + "px"))
        }
    this.Mc(a.html)
};
google[v].C[H].createResultHtml = google[v].C[H].Qa;
google[v].C[H].Fm = function() {
    return this.Qb
};
google[v].C[H].getLayout = google[v].C[H].Fm;
google[v].C[H].Te = function(a) {
    if (a == google[v].C.cd || a == google[v].C.oe || a == google[v].C.Hd) {
        var b = this.results;
        if (this.Qb != a && b)
            for (var d = 0; d < b[G]; d++) {
                var e = b[d];
                e.html && delete e.html
            }
        this.Qb = a;
        a == google[v].C.cd ? this.va = {
            width: 112,
            height: 84
        } : a == google[v].C.oe ? this.va = {
            width: 112,
            height: 168
        } : a == google[v].C.Hd && (this.va = {
            width: 224,
            height: 84
        })
    }
};
google[v].C[H].setLayout = google[v].C[H].Te;
google[v].C[H].Ub = function(a, b) {
    this.P = google[v].yc.kj(a, b);
    this.P instanceof google[v].Rc && (this.N=!0, this.P[jd]() == google[v].G.Qc && (this.rd = Q["linked-cse-error-results"]))
};
google[v].C[H].setSiteRestriction = google[v].C[H].Ub;
M = google[v].C[H];
M.vh = function() {
    return this.N ? this.P[jd]() : null
};
M.wh = function() {
    return this.N ? this.P.yf : null
};
M.lc = function() {
    return this.N ? this.P.Ga : null
};
M.sj = function(a) {
    this.N && a && this.P.zj(a)
};
M.Da = function(a) {
    ha(ta(a, 10)) || (a = ta(a, 10));
    this.N && (0 < a && a <= google[v].C.dh || google[v].A.Hc == a) ? this.Ka = a : google[v].A[H].Da[zd](this, a)
};
google[v].C[H].setResultSetSize = google[v].C[H].Da;
google[v].C[H].jd = function() {
    var a = google[v].A[H].jd[zd](this);
    return this.N && a && "number" != typeof this.Ka ? 2 * a : a
};
google[v].C[H].getNumResultsPerPage = google[v].C[H].jd;
google[v].C[H].Ra = function(a, b) {
    a == google[v].A.Xa ? this.Ia = b ? b == google[v].A.Xf || b == google[v].A.Wf ? b : null : null : a == google[v].C.Ig ? this.pc = b ? b[Nd]("|") : null : a == google[v].C.Gg ? this.nc = b ? b == google[v].C.hg || b == google[v].C.jg || b == google[v].C.ig ? b : null : null : a == google[v].C.Fg ? this.oc = b ? b == google[v].C.sg || b == google[v].C.pg || b == google[v].C.vg || b == google[v].C.og || b == google[v].C.tg || b == google[v].C.lg || b == google[v].C.rg || b == google[v].C.qg || b == google[v].C.ug || b == google[v].C.ng || b == google[v].C.kg || b == google[v].C.mg ?
    b : null : null : a == google[v].C.Hg ? this.mc = b ? b == google[v].C.yg || b == google[v].C.zg || b == google[v].C.xg || b == google[v].C.wg ? b : null : null : a == google[v].C.Jg ? this.qc = b ? b == google[v].C.Bg || b == google[v].C.Ag || b == google[v].C.Cg || b == google[v].C.Dg || b == google[v].C.Eg ? b : null : null : a == google[v].C.Kg && (this.rc = b ? b == google[v].C.Og || b == google[v].C.Mg || b == google[v].C.Ng || b == google[v].C.Lg ? b : null : null);
    if (a == google[v].A.Ja)
        if (b)
            for (var d in b) {
                var e = b[d];
                google[v].C.de[d] && (this.fa[d] = e)
            } else 
                this.fa = {}
};
google[v].C[H].setRestriction = google[v].C[H].Ra;
google[v].C.Yb = function(a, b, d, e, g) {
    var f = oa.min(d[zb] / a, d[Hc] / b), k = {};
    Aa(k, oa[Wc](a * f));
    Qa(k, oa[Wc](b * f));
    e && (Aa(e, k[zb]), Qa(e, k[Hc]), g && $a(e[u], (d[zb] - k[zb]) / 2 + "px"));
    return k
};
google[v].C.scaleImage = google[v].C.Yb;
google[v].C.Jm = function(a) {
    var b = a[Sb][0], d = a[Sb][1];
    if ("block" == d[u][Gc])
        return !1;
    Pa(d[u], "block");
    db(a[u], 4E3);
    var e = d[Sb][0], g = d[Sb][1], f = b[ac]("img")[0], k = d[ac]("img")[0], l = {
        width: k[Db],
        height: k[Nc]
    };
    k[Db] < f[Db] ? l = {
        width: f[Db],
        height: 2 * f[Nc]
    } : k[Nc] < f[Nc] && (l = {
        width: f[Db],
        height: f[Nc]
    });
    google[v].C.Yb(k[Db], k[Nc], l, k);
    Aa(d[u], d[Db] > 2 * b[Db] ? 2 * b[Db] + "px" : oa.max(e[Db], g[Db]));
    b = Zh(f, a) + f[Db] / 2;
    a = $h(f, a) + f[Nc] / 2;
    f = Zh(k, d) + k[Db] / 2;
    k = $h(k, d) + k[Nc] / 2;
    0 === qa.appName[dd]("Microsoft") ? ($a(d[tb](), b - f + "px"),
    d[tb]().top = a - k + "px") : (d.offsetLeft = b - f + "px", d.offsetTop = a - k + "px");
    return !1
};
google[v].C.showPopup = google[v].C.Jm;
google[v].C.Gm = function(a) {
    a = a[Sb][1];
    if ("none" == a[u][Gc])
        return !1;
    Pa(a[u], "none");
    db(a[Jd][u], 0);
    return !1
};
google[v].C.hidePopup = google[v].C.Gm;
google[v].C[H].Oa = function(a) {
    google[v].A[H].Oa[zd](this, a)
};
google[v].C[H].setLinkTarget = google[v].C[H].Oa;
google[v].C[H].Fb = function(a) {
    google[v].A[H].Fb[zd](this, a)
};
google[v].C[H].setQueryAddition = google[v].C[H].Fb;
google[v].H = function() {
    google[v].A[zd](this);
    this.xc = null;
    this.wc = "San Francisco, CA";
    this.Oc = {
        y: 37.77916,
        x: - 122.42009
    };
    this.qf = null;
    this.kh=!0;
    this.lh=!1;
    this.sf = null;
    this.of=!0;
    this.Fc = ph(this, this.hd);
    this.Se = "gsc-locationConfig";
    this.oa = "local";
    this.Gc = "/GlocalSearch";
    this.sc = "http://www.google.com/local";
    this.uf = this.yb = null
};
Rd("google.search.LocalSearch", google[v].H, void 0);
gh(google[v].H, google[v].A);
google[v].H.Va = "GlocalSearch";
google[v].H.RESULT_CLASS = google[v].H.Va;
google[v].H.yp = "blended";
google[v].H.TYPE_BLENDED_RESULTS = google[v].H.yp;
google[v].H.zp = "kmlonly";
google[v].H.TYPE_KMLONLY_RESULTS = google[v].H.zp;
google[v].H.Ap = "localonly";
google[v].H.TYPE_LOCALONLY_RESULTS = google[v].H.Ap;
google[v].H.Jq = "disabled";
google[v].H.ADDRESS_LOOKUP_DISABLED = google[v].H.Jq;
google[v].H.Kq = "enabled";
google[v].H.ADDRESS_LOOKUP_ENABLED = google[v].H.Kq;
google[v].H.Pq = 0;
google[v].H.STATIC_MAP_ZOOM_FARTHEST = google[v].H.Pq;
google[v].H.ny = 13;
google[v].H.STATIC_MAP_ZOOM_DEFAULT = google[v].H.ny;
google[v].H.Oq = 21;
google[v].H.STATIC_MAP_ZOOM_CLOSEST = google[v].H.Oq;
google[v].H.dm = 8;
google[v].H.STATIC_MAP_MAX_POINTS = google[v].H.dm;
google[v].H.gx = 3.141592653589;
google[v].H.fx = 6367E3;
google[v].H.hx = 16093;
google[v].H.Z = [];
google[v].H.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].H.Z, f, b);
    google[v].H.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].H.RawCompletion = google[v].H.Sa;
google[v].H[H].nb = function(a, b, d, e, g) {
    g && this.Kd && g != this.Kd || (this.resultViewport = a && a.viewport ? a.viewport : null, google[v].A[H].nb[zd](this, a, b, d, e, g))
};
google[v].H[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].H.Z, [this, a, b])
};
google[v].H[H].qa = function(a, b, d) {
    window[Ac] && window[Ac].log && window[Ac].log("The Google Local Search API is deprecated. Please migrate to the Google Places API (https://developers.google.com/places)");
    return google[v].A[H].qa[zd](this, a, b, d)
};
google[v].H[H].execute = google[v].H[H].qa;
google[v].H[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.LocalSearch.RawCompletion" : b, d);
    d = "";
    d = "&q=" + c(a);
    b += d;
    this.viewport = null;
    if (this.xc) {
        var e, g;
        this.kh ? (e = this.xc.getCenterLatLng(), g = this.xc.getSpanLatLng(), a = "&sll=" + e.y + "," + e.x, a += "&sspn=" + g[Hc] + "," + g[zb]) : (e = this.xc.getCenter(), g = this.xc.getBounds().toSpan().toUrlValue(), a = "&sll=" + e.y + "," + e.x, a += "&sspn=" + g);
        a += google[v].H.Zl(e.y, e.x);
        b += a;
        d += a
    } else 
        this.Oc ? (a = "&sll=" + this.Oc.y + "," + this.Oc.x, this.qf && (a = a + "&sspn=" + this.qf.lat + "," +
        this.qf.lng), a += google[v].H.Zl(this.Oc.y, this.Oc.x), b += a, d += a) : this.wc && (a = "&near=" + c(this.wc), b += a, d += a);
    this.lh && (b += "&nogeocode=t", d += "&nogeocode=t");
    this.sf && (b += "&mrt=" + c(this.sf), d += "&mrt=" + c(this.sf));
    d && (this.ta = d);
    return b
};
google[v].H.Zl = function(a, b) {
    var d = google[v].H.hx / google[v].H.fx * 4 * google[v].H.gx;
    return "&gll=" + oa[Ab](1E6 * (a - d)) + "," + oa[Ab](1E6 * (b - d)) + "," + oa[Ab](1E6 * (a + d)) + "," + oa[Ab](1E6 * (b + d)) + "&llsep=500,500"
};
google[v].H.centerToGll = google[v].H.Zl;
google[v].H[H].Qa = function(a) {
    a.html && delete a.html;
    var b = X(this.Ld());
    $(b, "gs-result");
    var d;
    d = Bh(a.url, a[pd], this.ya(), "gs-title");
    R(b, d);
    "kml" == a.listingType && a[Cb] && "" != a[Cb] && (d = V(a[Cb], "gs-snippet"), R(b, d));
    var e = X("gs-address");
    if (a.addressLines && 0 < a.addressLines[G])
        for (var g = 0; g < a.addressLines[G]; g++) {
            d = a.addressLines[g];
            var f = "gs-addressLine";
            0 == g ? f = "gs-street gs-addressLine" : 1 == g && (f = "gs-city gs-addressLine");
            d = V(d, f);
            R(e, d)
        } else 
            d = V(a.streetAddress, "gs-street"), R(e, d), g = "", "" != a.city &&
            (g = a.city, "" != a.region && (g += ", ")), d = V(g, "gs-city"), R(e, d), d = V(a.region, "gs-region"), R(e, d);
    d = V(a.country, "gs-country");
    R(e, d);
    R(b, e);
    if (a.phoneNumbers && a.phoneNumbers[G]) {
        g = e = null;
        d = a.phoneNumbers[0];
        for (var k = 0; k < a.phoneNumbers[G]; k++) {
            f = a.phoneNumbers[k];
            if ("main" == f[jd]) {
                e = f;
                break
            }
            if ("" == f[jd] || "mobile" == f[jd] && null == g)
                g = f
        }
        d = V((e ? e : g ? g : d).number, "gs-phone");
        R(b, d)
    }
    a.ddUrl && "" != a.ddUrl && (d = Bh(a.ddUrl, Q.directions, this.ya(), "gs-directions"), R(b, d));
    a.ddUrlToHere && "" != a.ddUrlToHere && a.ddUrlFromHere &&
    "" != a.ddUrlFromHere && (d = X("gs-directions-to-from"), e = V(Q["get-directions"] + ":", "gs-label"), d[p](e), e = Bh(a.ddUrlToHere, Q["to-here"], this.ya(), "gs-secondary-link"), d[p](e), e = V("-", "gs-spacer"), d[p](e), e = Bh(a.ddUrlFromHere, Q["from-here"], this.ya(), "gs-secondary-link"), d[p](e), R(b, d));
    a.html = b;
    this.Mc(a.html)
};
google[v].H[H].createResultHtml = google[v].H[H].Qa;
google[v].H[H].dr = function(a) {
    if (a.centerAndZoom)
        this.kh=!0, this.xc = a, this.Oc = null, this.wc = "", this.yb && (this.yb = null);
    else if (a.setCenter)
        this.kh=!1, this.xc = a, this.qf = this.Oc = null, this.wc = "", this.yb && (this.yb = null);
    else if (a.x && a.y)
        this.kh=!0, this.Oc = a, this.xc = this.qf = null, this.wc = "", this.yb && (this.yb = null);
    else if (null != a && "" != a) {
        this.kh=!0;
        this.xc = null;
        this.wc = a;
        this.Oc = null;
        this.yb && (this.yb = null);
        var b = new google[v].H;
        b.eh(this, this.Sw, [b, a]);
        b.qa(a)
    }
};
google[v].H[H].setCenterPoint = google[v].H[H].dr;
google[v].H[H].Sw = function(a, b) {
    if (a.results && a.results[G]) {
        var d = {};
        d.y = ua(a.results[0].lat);
        d.x = ua(a.results[0].lng);
        this.Oc = d;
        this.wc = b;
        this.of=!0;
        this.xc = null;
        a.resultViewport && (d = {}, d.xA = ua(a.resultViewport.span.lat) / 2, d.yA = ua(a.resultViewport.span.lng) / 2, this.qf = d)
    }
};
google[v].H[H].hd = function(a, b) {
    if (b) {
        if (null == this.yb) {
            var d = null;
            if (null == this.xc) {
                var e = X("gsc-configSetting");
                this.yb = Gh(null, "gsc-configSettingInput", "" == this.wc ? null : this.wc);
                R(e, V(Q["search-location"], "gsc-configSettingInputLabel"));
                R(e, this.yb);
                R(a, e);
                d = this.yb
            }
            e = X("gsc-configSetting");
            this.uf = Hh(null, "0", this.lh, "gsc-configSettingCheckbox");
            R(e, this.uf);
            R(e, V(Q["disable-address-lookup"], "gsc-configSettingCheckboxLabel"));
            null == d && (d = this.uf);
            var g = V(null, "gsc-configSettingSubmit");
            R(g, Eh(Q[rc],
            "gsc-configSettingSubmit"));
            R(e, g);
            R(a, e);
            d[Jb]()
        }
    } else 
        this.yb && (this.yb[cd] && (this.wc = this.yb[cd], this.dr(this.wc)), this.yb = null), this.uf && (this.lh = this.uf[fc], this.uf = null), qh(a)
};
google[v].H[H].Ky = function(a) {
    a == google[v].H.Jq ? this.lh=!0 : a == google[v].H.Kq && (this.lh=!1)
};
google[v].H[H].setAddressLookupMode = google[v].H[H].Ky;
google[v].H.Nq = function(a, b, d, e) {
    var g = a.staticMapUrl, g = g[r](/&size=\d*x\d*/, "&size=" + d + "x" + b);
    e && e <= google[v].H.Oq && e >= google[v].H.Pq && (g = g[r](/&zoom=\d*/, "&zoom=" + e));
    return a.staticMapUrl = g
};
google[v].H.resizeStaticMapUrl = google[v].H.Nq;
google[v].H.uy = function(a, b, d, e) {
    var g = "", f = {
        staticMapUrl: "http://maps.google.com/maps/api/staticmap?maptype=roadmap&size=150x100&zoom=13&format=gif&sensor=false"
    };
    b = google[v].H.Nq(f, b, d, e);
    null == e && (b = b[r](/&zoom=\d*/, ""));
    e = a[G];
    e > google[v].H.dm && (e = google[v].H.dm);
    for (d = 0; d < e; d++) {
        var k;
        k = a[d];
        if (k.lat && k.lng)
            "string" == typeof k.lat ? (f = ua(k.lat), k = ua(k.lng)) : (f = k.lat, k = k.lng);
        else if (k.x && k.y)
            f = k.y, k = k.x;
        else 
            return null;
        f = "&markers=__ICONID____LAT__,__LNG__"[r](/__LAT__/, f);
        f = f[r](/__LNG__/, k);
        k = 65 + d;
        f = 1 < e ? f[r](/__ICONID__/, "label:" + va.fromCharCode(k) + "|") : f[r](/__ICONID__/, "");
        g += f
    }
    return b + g
};
google[v].H.computeStaticMapUrl = google[v].H.uy;
google[v].H[H].Ra = function(a, b) {
    a == google[v].A.dj && (b ? (this.sf = null, this.sf = b == google[v].H.yp || b == google[v].H.zp || b == google[v].H.Ap ? b : null) : this.sf = null)
};
google[v].H[H].setRestriction = google[v].H[H].Ra;
google[v].la = function() {
    google[v].A[zd](this);
    this.oa = "news";
    this.Gc = "/GnewsSearch";
    this.sc = "http://news.google.com/nwshp";
    this.tf = "site:";
    this.Lb=!1;
    this.of=!0;
    this.Fc = ph(this, this.hd);
    this.Se = "gsc-newsConfig";
    this.fa = this.ma = null
};
Rd("google.search.NewsSearch", google[v].la, void 0);
gh(google[v].la, google[v].A);
google[v].la.Va = "GnewsSearch";
google[v].la.RESULT_CLASS = google[v].la.Va;
google[v].la.Lq = "GnewsSearch.quote";
google[v].la.QUOTE_RESULT_CLASS = google[v].la.Lq;
google[v].la.Z = [];
google[v].la.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].la.Z, f, b);
    google[v].la.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].la.RawCompletion = google[v].la.Sa;
google[v].la[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].la.Z, [this, a, b])
};
google[v].la[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.NewsSearch.RawCompletion" : b, d);
    var e = null;
    a && (e = a);
    this.Ma && (e = null == e ? this.Ma : e + " " + this.Ma);
    this.Kb && (e = null == e ? this.tf + this.Kb : e + " " + this.tf + this.Kb);
    a = e ? "&q=" + c(e) : "";
    this.Lb && (a += "&scoring=d");
    if (this.fa) {
        var e = "", g;
        for (g in this.fa)
            ":" == g[Fb](0) && (e += "&" + this.fa[g]);
        a += e
    }
    this.Kb && "source:" == this.tf && (b = b[r](/&hl=.*&/, "&hl=en&"));
    this.ta = a;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    return b + a
};
google[v].la[H].Qa = function(a) {
    a.html && delete a.html;
    if (a.GsearchResultClass != google[v].la.Lq) {
        var b = X(this.Ld());
        $(b, "gs-result");
        var d;
        d = Bh(a.unescapedUrl, a[pd], this.ya(), "gs-title");
        R(b, d);
        d = V(a.publisher, "gs-publisher");
        R(b, d);
        d = a[mc][hc](",");
        1 < d[G] && (d = V(", " + d[d[G] - 1], "gs-location"), R(b, d));
        d = new Date(a.publishedDate);
        d = V(" - " + this.vf(d), "gs-publishedDate");
        R(b, d);
        d = new Date(a.publishedDate);
        d = V(" - " + this.cm(d), "gs-relativePublishedDate");
        R(b, d);
        d = V(a[Cb], "gs-snippet");
        R(b, d);
        a.clusterUrl &&
        "" != a.clusterUrl && (d = Bh(a.clusterUrl, Q["related-articles"] + "&nbsp;&raquo;", this.ya(), "gs-clusterUrl"), R(b, d));
        a.html = b;
        this.Mc(a.html)
    }
};
google[v].la[H].createResultHtml = google[v].la[H].Qa;
google[v].la[H].Ub = function(a) {
    null == a || "" == a ? (this.Kb = null, this.tf = "site:") : a[Ib]("[./:]") ? (this.tf = "site:", this.Kb = a) : (this.tf = "source:", this.Kb = a[r](/\s/g, "_"))
};
google[v].la[H].setSiteRestriction = google[v].la[H].Ub;
google[v].la[H].Gb = function(a) {
    this.Lb = a == google[v].A.kd?!0 : !1
};
google[v].la[H].setResultOrder = google[v].la[H].Gb;
google[v].la[H].hd = function(a, b) {
    if (b) {
        if (null == this.ma) {
            var d = X("gsc-configSetting");
            this.ma = Hh(null, "0", this.Lb, "gsc-configSettingCheckbox");
            R(d, this.ma);
            R(d, V(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
            var e = X("gsc-configSettingSubmit");
            R(e, Eh(Q[rc], "gsc-configSettingSubmit"));
            R(d, e);
            R(a, d)
        } else 
            Fa(this.ma, this.Lb);
        this.ma[Jb]()
    } else 
        this.ma && (this.ma[fc] ? this.Gb(google[v].A.kd) : this.Gb(google[v].A.qh))
};
google[v].la[H].Sv = {
    geo: !0,
    qsid: !0,
    quotesearch: !0,
    topic: !0,
    ned: !0,
    scoring: !0,
    as_mind: !0,
    as_minm: !0,
    as_miny: !0,
    as_maxd: !0,
    as_maxm: !0,
    as_maxy: !0
};
google[v].la[H].Ra = function(a, b) {
    if (a == google[v].A.Ja)
        if (b)
            for (var d in b) {
                var e = b[d];
                "undefined" != typeof this.Sv[d] && (this.fa = this.fa || {}, this.fa[":" + d] = d + "=" + c(e))
            } else 
                this.fa = null
};
google[v].la[H].setRestriction = google[v].la[H].Ra;
google[v].ca = function() {
    google[v].A[zd](this);
    this.oa = "patent";
    this.Gc = "/GpatentSearch";
    this.sc = "http://www.google.com/patents";
    this.mp = "";
    this.mh = null;
    this.of=!0;
    this.Fc = ph(this, this.hd);
    this.Se = "gsc-patentConfig";
    this.ma = null
};
Rd("google.search.PatentSearch", google[v].ca, void 0);
gh(google[v].ca, google[v].A);
google[v].ca.Va = "GpatentSearch";
google[v].ca.RESULT_CLASS = google[v].ca.Va;
google[v].ca.Kp = 1;
google[v].ca.TYPE_ANY_STATUS = google[v].ca.Kp;
google[v].ca.Mp = 2;
google[v].ca.TYPE_ISSUED_PATENTS = google[v].ca.Mp;
google[v].ca.Lp = 3;
google[v].ca.TYPE_APPLICATIONS = google[v].ca.Lp;
google[v].ca.Z = [];
google[v].ca.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].ca.Z, f, b);
    google[v].ca.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].ca.RawCompletion = google[v].ca.Sa;
google[v].ca[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].ca.Z, [this, a, b])
};
google[v].ca[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.PatentSearch.RawCompletion" : b, d);
    this.Ma && (a = a + " " + this.Ma);
    a = "&q=" + c(a) + this.mp;
    this.mh && (a += this.mh);
    this.ta = a;
    return b + a
};
google[v].ca[H].Qa = function(a) {
    a.html && delete a.html;
    a.thumbnailHtml = this.sm(a);
    var b = X(this.Ld());
    $(b, "gs-result");
    var d = X("gs-text-box"), e = wh(), g = xh(e, 0), f = yh(g, "gs-image-box"), g = yh(g, "gs-text-box");
    R(f, a.thumbnailHtml[Ob](!0));
    R(g, d);
    R(b, e);
    f = Bh(a.unescapedUrl, a[pd], this.ya(), "gs-title");
    R(d, f);
    e = X("gs-patent-info gs-metadata");
    R(d, e);
    f = null;
    f = a.patentNumber ? "issued" == a.patentStatus ? Q["us-pat"] + "&nbsp;" + a.patentNumber : Q["us-pat-app"] + "&nbsp;" + a.patentNumber : Q["us-pat-app"] + "&nbsp; N/A";
    f = V(f, "gs-patent-number");
    R(e, f);
    a.applicationDate && (f = V(" - " + this.vf(new Date(a.applicationDate)), "gs-publishedDate"), R(e, f));
    a.assignee && (f = V(" - " + a.assignee, "gs-author"), R(e, f));
    f = V(a[Cb], "gs-snippet");
    R(d, f);
    R(d, f);
    a.html = b;
    this.Mc(a.html)
};
google[v].ca[H].createResultHtml = google[v].ca[H].Qa;
google[v].ca[H].sm = function(a) {
    var b = X("gs-patent-image"), d = zh(a.tbUrl, 75, 100, "gs-image");
    a = Ah(a.unescapedUrl, null, this.ya(), "gs-image");
    m(a, "gs-image");
    R(a, d);
    R(b, a);
    return b
};
google[v].ca[H].Gb = function(a) {
    this.mh = a == google[v].A.kd ? "&scoring=d" : a == google[v].A.Sp ? "&scoring=ad" : null
};
google[v].ca[H].setResultOrder = google[v].ca[H].Gb;
google[v].ca[H].Ra = function(a, b) {
    a == google[v].A.dj && (this.mp = b ? b == google[v].ca.Kp ? "" : b == google[v].ca.Mp ? "&as_psrg=1" : b == google[v].ca.Lp ? "&as_psra=1" : "" : "")
};
google[v].ca[H].setRestriction = google[v].ca[H].Ra;
google[v].ca[H].hd = function(a, b) {
    if (b) {
        var d=!1;
        this.mh && "&scoring=d" == this.mh && (d=!0);
        if (null == this.ma) {
            var e = X("gsc-configSetting");
            this.ma = Hh(null, "0", d, "gsc-configSettingCheckbox");
            R(e, this.ma);
            R(e, V(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
            d = X("gsc-configSettingSubmit");
            R(d, Eh(Q[rc], "gsc-configSettingSubmit"));
            R(e, d);
            R(a, e)
        } else 
            Fa(this.ma, d);
        this.ma[Jb]()
    } else 
        this.ma && (this.ma[fc] ? this.Gb(google[v].A.kd) : this.Gb(google[v].A.qh))
};
google[v].$a = function() {
    this.Tm = this.jc = google[v].B.Wd;
    Sa(this, null);
    this.va = {
        width: 112,
        height: 84
    };
    this.Th = {
        width: 100,
        height: 75
    };
    this.Rd = null
};
Rd("google.search.SearcherOptions", google[v].$a, void 0);
google[v].$a[H].lp = function(a) {
    switch (a) {
    case google[v].B.fq:
    case google[v].B.Be:
    case google[v].B.Wd:
        this.jc = a;
        break;
    default:
        this.jc = google[v].B.Wd
    }
    this.Tm = this.jc
};
google[v].$a[H].setExpandMode = google[v].$a[H].lp;
google[v].$a[H].Sy = function(a) {
    qh(a);
    Sa(this, a)
};
google[v].$a[H].setRoot = google[v].$a[H].Sy;
google[v].$a[H].Ne = function(a) {
    this.Rd = a
};
google[v].$a[H].setNoResultsString = google[v].$a[H].Ne;
google[v].$a[H].My = function(a) {
    100 < a && (a = 100);
    Qa(this.va, a);
    Aa(this.va, oa[Wc](1.33 * a))
};
google[v].$a[H].setImageResultsTbHeight = google[v].$a[H].My;
google[v].$a[H].Xy = function(a) {
    100 < a && (a = 100);
    Qa(this.Th, a);
    Aa(this.Th, oa[Wc](1.33 * a))
};
google[v].$a[H].setVideoResultsTbHeight = google[v].$a[H].Xy;
google[v].pa = function() {
    Ua(this, null);
    this.io = null;
    this.gb = google[v].B.Ec;
    this.Ii=!1;
    this.La = null;
    this.ec = google[v].B.qk;
    this.Ji=!1;
    this.xe =- 1
};
Rd("google.search.DrawOptions", google[v].pa, void 0);
google[v].pa[H].Ny = function(a) {
    Ua(this, a)
};
google[v].pa[H].setInput = google[v].pa[H].Ny;
google[v].pa[H].Mn = function(a) {
    this.io = bi(a)
};
google[v].pa[H].setSearchFormRoot = google[v].pa[H].Mn;
google[v].pa[H].Yo = function(a) {
    this.gb = a == google[v].B.Ec || a == google[v].B.fc ? a : google[v].B.Ec
};
google[v].pa[H].setDrawMode = google[v].pa[H].Yo;
google[v].pa[H].Ln = function(a) {
    this.Ii = a
};
google[v].pa[H].setAutoComplete = google[v].pa[H].Ln;
google[v].pa[H].Nn = function(a) {
    this.Ji = a
};
google[v].pa[H].setSpeech = google[v].pa[H].Nn;
google[v].pa[H].On = function(a) {
    this.xe = a
};
google[v].pa[H].setTopRefinementsWanted = google[v].pa[H].On;
google[v].pa[H].Jn = function(a, b, d, e) {
    this.ec = google[v].B.Sf;
    this.La = {};
    this.La.Hk = a;
    this.La.xw = b || "q";
    this.La.vw = d ||!1;
    this.La.ww = e || "?"
};
google[v].pa[H].enableSearchboxOnly = google[v].pa[H].Jn;
google[v].pa[H].In = function() {
    this.ec = google[v].B.Gf
};
google[v].pa[H].enableSearchResultsOnly = google[v].pa[H].In;
google[v].fb = function(a, b, d) {
    this.mb = d;
    this.xl = this.Al=!1;
    this.J = a;
    this.wa = null;
    this.cu = lh(b, google[v].B[H].Wu, [this]);
    this.fu = lh(b, google[v].B[H].El, [this, google[v].fb.xk]);
    this.eu = lh(b, google[v].B[H].El, [this, google[v].fb.wk]);
    this.du = lh(b, google[v].B[H].El, [this, google[v].fb.En]);
    this.bu = lh(b, google[v].B[H].Vu, [this]);
    this.$t = lh(b, google[v].B[H].Uu, [this]);
    this.J.eh(b, b.nb, [this]);
    this.J.Xu(b, google[v].B[H].Tu);
    this.J.Da(b.Me);
    this.J.Oa(b.Uc);
    Sa(this, null);
    this.ib = this.lf = this.Jd = this.kk = this.Jf =
    this.Ui = null;
    this.il=!0;
    this.Ya = [];
    this.fh = this.bh = this.Lc = this.Ha = null;
    this.Ob = 0;
    this.Ae=!1
};
google[v].fb.Mj = 0;
google[v].fb.xk = 1;
google[v].fb.wk = 2;
google[v].fb.En = 3;
google[v].fb[H].Kj = function(a) {
    var b = "gsc-results-selector ", b = a == google[v].fb.Mj ? this.mb.jc == google[v].B.Wd ? b + "gsc-one-result-active": this.J.Ka == google[v].A.Zb ? b + "gsc-more-results-active": b + "gsc-all-results-active": a == google[v].fb.xk ? b + "gsc-one-result-active": a == google[v].fb.wk ? b + "gsc-more-results-active": b + "gsc-all-results-active";
    m(this.kk, b)
};
google[v].B = function(a) {
    if (!google[Ed].KeyVerified)
        if (google[v].B.Fn())
            google[Ed].KeyVerified=!0;
        else 
            return;
    this.fk = this.Me = google[v].A.Zb;
    this.gb = google[v].B.Ec;
    Sa(this, null);
    Ua(this, null);
    this.He = null;
    this.si = google[v].B.xi;
    this.yr = lh(this, google[v].B[H].os, [null]);
    this.zr = lh(this, google[v].B[H].ps, [null]);
    this.If = this.gk = this.hk = this.Oh = null;
    this.We = 0;
    this.Ff=!1;
    this.Uc = google[v].A.Mf;
    this.ec = google[v].B.qk;
    this.Jj = Q.copy;
    this.Td = this.jb = null;
    this.Vm = 0;
    this.pd = {};
    this.Ib = this.Ed = this.wi = this.Wb =
    this.Ef = null;
    this.Lm=!1;
    this.Tc = null;
    this.Qd = this.Sd = 0;
    this.Wm=!1;
    this.qd = null;
    this.Df=!1;
    this.na = this.Xc = null;
    this.Bn=!1;
    this.Ua = {};
    this.Ua[google[v].Ea.ic] = {
        enabled: !0,
        className: "gsc-adBlock",
        $b: "",
        mi: {
            lines: 2
        }
    };
    this.Ua[google[v].Ea.Pb] = {
        enabled: !1,
        className: "gsc-adBlockVertical",
        $b: "gsc-thinWrapper",
        mi: {}
    };
    this.Ua[google[v].Ea.Cb] = {
        enabled: !1,
        className: "gsc-adBlockBottom",
        $b: "",
        mi: {}
    };
    this.Y = [];
    var b;
    if (a)
        for (var d = 0; d < a[G]; d++)
            b = new google[v].fb(a[d], this, !1), this.Y[B](b);
    this.Nh(google[v].B.vk);
    this.ln = {};
    this.Kf=!1;
    this.Ud=!0;
    this.Hb = null
};
Rd("google.search.SearchControl", google[v].B, void 0);
google[v].B[H].Vk=!1;
google[v].Ea = {
    ic: "top",
    Pb: "right",
    Cb: "bottom"
};
google[v].B.To = Q["no-results"];
google[v].B.NO_RESULTS_DEFAULT_STRING = google[v].B.To;
google[v].B.pq = 350;
google[v].B.TIMEOUT_SHORT = google[v].B.pq;
google[v].B.xi = 500;
google[v].B.TIMEOUT_MEDIUM = google[v].B.xi;
google[v].B.nq = 700;
google[v].B.TIMEOUT_LONG = google[v].B.nq;
google[v].B.fq = 1;
google[v].B.EXPAND_MODE_CLOSED = google[v].B.fq;
google[v].B.Be = 2;
google[v].B.EXPAND_MODE_OPEN = google[v].B.Be;
google[v].B.Wd = 3;
google[v].B.EXPAND_MODE_PARTIAL = google[v].B.Wd;
google[v].B.Ec = 1;
google[v].B.DRAW_MODE_LINEAR = google[v].B.Ec;
google[v].B.fc = 2;
google[v].B.DRAW_MODE_TABBED = google[v].B.fc;
google[v].B.lq = "save";
google[v].B.KEEP_LABEL_SAVE = google[v].B.lq;
google[v].B.kq = "keep";
google[v].B.KEEP_LABEL_KEEP = google[v].B.kq;
google[v].B.jq = "include";
google[v].B.KEEP_LABEL_INCLUDE = google[v].B.jq;
google[v].B.iq = "copy";
google[v].B.KEEP_LABEL_COPY = google[v].B.iq;
google[v].B.gq = "blank";
google[v].B.KEEP_LABEL_BLANK = google[v].B.gq;
google[v].B.vk = "tab";
google[v].B.REFINEMENT_AS_TAB = google[v].B.vk;
google[v].B.Fk = "link";
google[v].B.REFINEMENT_AS_LINK = google[v].B.Fk;
google[v].B.qk = "standard";
google[v].B.MODE_STANDARD = google[v].B.qk;
google[v].B.Sf = "searchbox-only";
google[v].B.MODE_SEARCHBOX_ONLY = google[v].B.Sf;
google[v].B.Gf = "searchresults-only";
google[v].B.MODE_RESULTS_ONLY = google[v].B.Gf;
var mi = google[Ed][Hd].BUBBLEGUM, ni = google[Ed][Hd].GREENSKY, oi = google[Ed][Hd].ESPRESSO, pi = google[Ed][Hd].SHINY, qi = google[Ed][Hd].MINIMALIST, ri = google[Ed][Hd].V2_DEFAULT;
google[v].B.Id = {};
google[v].B.Id[mi] = {
    colorBackground: "#FDE5FF",
    colorTitleLink: "#0568CD",
    colorText: "#000",
    colorDomainLink: "#CC7A9F",
    fontFamily: "Arial"
};
google[v].B.Id[ni] = {
    colorBackground: "#EEFFE5",
    colorBorder: "#A9DA92",
    colorTitleLink: "#06C",
    colorText: "#454545",
    colorDomainLink: "#8D5FA7",
    fontFamily: "Trebuchet MS",
    fontSizeDescription: "14"
};
google[v].B.Id[oi] = {
    colorBackground: "#F2F0E6",
    colorTitleLink: "#950000",
    colorText: "#333",
    colorDomainLink: "#A25B08",
    fontFamily: "Georgia",
    fontSizeDescription: "14",
    fontSizeDomainLink: "12"
};
google[v].B.Id[pi] = {
    colorBackground: "#F0F0F6",
    colorBorder: "#CCC",
    colorTitleLink: "#06C",
    colorDomainLink: "#008000",
    fontFamily: "Verdana"
};
google[v].B.Id[qi] = {
    colorBackground: "#EEE",
    colorBorder: "#CCC",
    colorTitleLink: "#000",
    colorText: "#444",
    colorDomainLink: "#333",
    fontSizeDescription: "14",
    fontFamily: "Arial"
};
google[v].B.Id[ri] = {
    colorBackground: "#fff",
    colorBorder: "#ddd",
    colorTitleLink: "#1155CC",
    colorText: "#222",
    colorDomainLink: "#093",
    fontSizeDescription: "13",
    fontFamily: "Arial, sans-serif"
};
google[v].B.so = "13";
google[v].B.lt = "16";
try {
    google[v].B.appPath = window[mc][zc]
} catch (si) {
    google[v].B.appPath = null
}
google[v].B.Fn = function() {
    var a;
    a = window[mc][bc][Od]()[hc](".");
    if (2 > a[G])
        a=!1;
    else {
        var b = a.pop(), d = a.pop();
        "igoogle" != d && "gmodules" != d && "googlesyndication" != d || "com" != b ? (2 == b[G] && 0 < a[G] && Oh[d] && 1 == Oh[d][b] && (d = a.pop()), a = "google" == d) : a=!0
    }
    if (a)
        return !0;
    google[Ed].KeyVerified=!0;
    google[Ed].LoadFailure=!1;
    return !0
};
google[v].B.keyCheck = google[v].B.Fn;
google[v].B[H].Ww = function() {
    var a = this;
    return function() {
        a.Vk && (a.ro(), a.Vk=!1)
    }
};
google[v].B[H].Vg = function(a, b) {
    this.wd=!0;
    this.Dd = a;
    if (b) {
        var d = this.Ua[google[v].Ea.ic], e = this.Ua[google[v].Ea.Pb], g = this.Ua[google[v].Ea.Cb];
        void 0 != b.includeVerticalAds && Na(e, b.includeVerticalAds);
        void 0 != b.includeSideAds && Na(e, b.includeSideAds);
        void 0 != b._includeBottomAds_ && Na(g, b._includeBottomAds_);
        void 0 != b.iframes && (this.po = b.iframes);
        b.channel && (this.Ki = b.channel);
        b.clientIP && (this.no = b.clientIP);
        b.safe && (this.Kk = b.safe);
        b[kc] && (this.oo = b[kc]);
        b.adStyle && (this.mo = b.adStyle);
        b.cseGoogleHosting &&
        (this.Li = b.cseGoogleHosting);
        if (g = b.adtest || b.debug)
            this.nk = g;
        void 0 != b.numTopAds && (d.dd = oa.max(0, oa.min(4, b.numTopAds)), Na(d, d.dd?!0 : !1));
        void 0 != b.numSideAds && (e.dd = oa.max(0, oa.min(8, b.numSideAds)), Na(e, e.dd?!0 : !1));
        "noTop" == b.layout && (Na(d, !1), Na(e, !0));
        this.Ko = b.enableSearchCompleteCallback?!0 : !1
    }(function(a, b, d, e) {
        a[e] = a[e] || function() {
            (a[e].q = a[e].q || [])[B](arguments)
        };
        a[e].t = 1 * new Date;
        var g = b[s](d);
        b = b[ac](d)[0];
        g.async = 1;
        g.src = "//www.google.com/adsense/search/async-ads.js";
        b[Jd][Hb](g, b)
    })(window,
    h, "script", "_googCsa");
    window._googCsa("jsLoadedCallback", this.Ww())
};
google[v].B[H].enableAds = google[v].B[H].Vg;
google[v].B[H].Zd = function(a, b, d) {
    b || (b = new google[v].$a);
    b && b.va && a.Jp(b.va);
    a.ed = null;
    b = new google[v].fb(a, this, b);
    d ? (d.Ya[B](b), b.fh = d, b.Ob = d.Ob + 1) : (this.Y[B](b), b.Ob = 0);
    this.$f(a) && (this.ns=!0);
    a.jf = "gsc"
};
google[v].B[H].addSearcher = google[v].B[H].Zd;
google[v].B[H].nn = function(a) {
    a.mb[Ic] ? (a.il=!1, Sa(a, a.mb[Ic]), $(a[Ic], "gsc-resultsRoot"), Mh(a[Ic], "gsc-resultsbox-visible"), $(a[Ic], "gsc-resultsbox-invisible")) : Sa(a, X("gsc-resultsRoot"));
    a.J.Hf && $(a[Ic], "gsc-resultsRoot-" + a.J.Hf);
    this.gb == google[v].B.fc && (a.Ha.Db = a[Ic]);
    var b = wh(null, null, "gsc-resultsHeader"), d = xh(b, 0);
    a.le = yh(d, "gsc-twiddleRegionCell");
    d = yh(d, "gsc-configLabelCell");
    a.Ui = V("", "gsc-twiddle");
    R(a.le, a.Ui);
    var e = uh(a.J.iv(), "gsc-title");
    R(a.Ui, e);
    a.Jf = V("", "gsc-stats");
    R(a.le, a.Jf);
    var e = V(), g = V(Q.blank, "gsc-result-selector gsc-one-result"), f = V(Q.blank, "gsc-result-selector gsc-more-results"), k = V(Q.blank, "gsc-result-selector gsc-all-results");
    jb(g, Q["show-one-result"]);
    jb(f, Q["show-more-results"]);
    jb(k, Q["show-all-results"]);
    R(e, g);
    R(e, f);
    R(e, k);
    ob(g, a.fu);
    ob(f, a.eu);
    ob(k, a.du);
    a.kk = e;
    a.Kj(google[v].fb.Mj);
    R(a.le, a.kk);
    ob(a.Ui, a.cu);
    a.J.Fc && (a.Vb = vh("", "gsc-configLabel"), Xa(a.Vb, Q.blank), $(a.Vb, "gsc-twiddle-closed"), R(d, a.Vb), ob(a.Vb, a.bu), jb(a.Vb, Q.settings), a.Jd = X("gsc-config"),
    $(a.Jd, a.J.Se), a.lf = Dh("gsc-config"), $(a.lf, a.J.Se), a.lf.onsubmit = a.$t, R(a.Jd, a.lf), Pa(a.Jd[u], "none"));
    a.ib = X();
    this.zb && (a.ib.onmousedown = ph(this, google[v].B[H].hv), ob(a.ib, ph(this, google[v].B[H].gv)));
    a.wa = X("gsc-expansionArea");
    R(a.ib, a.wa);
    a.il && R(this.Cd, a[Ic]);
    R(a[Ic], b);
    a.Jd && R(a[Ic], a.Jd);
    R(a[Ic], a.ib)
};
google[v].B.hw = /^https?:\/\/www\.google\.com\/url\?/;
M = google[v].B[H];
M.hv = function(a) {
    this.Kf && this.Gq(this.Fq(a));
    return !0
};
M.gv = function(a) {
    var b = this.Fq(a);
    this.Kf || this.Gq(b);
    b && window[gc](function() {
        var a = b[Bd](google[v].G.se);
        a && Oa(b, a)
    }, 0);
    return !0
};
M.Fq = function(a) {
    a = a || window[Pd];
    for (a = a[yd] || a[ad]; a&&!(a[zc] && a[Bd](google[v].G.me) && a[Bd](google[v].G.se));)
        a = a[Jd];
    return a
};
M.Gq = function(a) {
    if (a) {
        var b = a[Bd](google[v].G.me);
        b && google[v].B.hw[Qc](b) && Oa(a, b)
    }
};
M.Qm = function(a) {
    var b = uh();
    $(b, "gsc-refinementBlockInvisible");
    R(this.Nc, b);
    a.Lc = b;
    this.Qx(a)
};
M.ex = function(a) {
    return this.pd.Op ? vh(a) : th(a)
};
M.Xm = function(a) {
    if (this.pd.Op) {
        var b = h.createDocumentFragment();
        b[p](vh());
        Xa(b[Lb], a);
        return b
    }
    var b = h.createDocumentFragment(), d = h[s]("div");
    for (Xa(d, a);
    d[Lb];
    )b[p](d[Lb]);
    return b
};
M.Qx = function(a) {
    var b = a.Ha, d = this.bk(a, a);
    d.Ob += 1;
    "tab" == this.Rp ? rh(d.ra, th(Q["all-results-short"])) : rh(d.ra, this.ex(Q["all-results-long"]));
    a.Ha = b;
    a.bh = d;
    a.bh.Db = a.Ha.Db
};
M.Nh = function(a) {
    a == google[v].B.Fk ? (this.jp = "gsc-refinementHeader", this.$i = "gsc-refinementhInactive", this.Sl = "gsc-refinementhActive", this.Rp = a, this.yk = "gsc-refinementsAreaInvisible", this.Qp = "gsc-refinementsArea") : a == google[v].B.vk && (this.jp = "gsc-tabHeader", this.$i = "gsc-tabhInactive", this.Sl = "gsc-tabhActive", this.Rp = a, this.yk = "gsc-tabsAreaInvisible", this.Qp = "gsc-tabsArea")
};
google[v].B[H].setRefinementStyle = google[v].B[H].Nh;
M = google[v].B[H];
M.bk = function(a, b) {
    var d = {}, e = a.J.Hl();
    a.Ha = d;
    d.Ob = a.Ob;
    d.ra = V(google[v].U.Vd(e));
    d.Db = null;
    d.lb = a.J;
    d.oa = a.J.oa;
    Jh(d.ra, lh(this, this.mf, [d]));
    d.Hb = a;
    var g = "gs-spacer";
    jh("opera") && (g += " gs-spacer-opera");
    b ? (e = b.Lc, $(d.ra, this.jp), $(d.ra, this.$i)) : (e = this.Bc, $(d.ra, "gsc-tabHeader"), $(d.ra, "gsc-tabhInactive"));
    $(d.ra, "gsc-inline-block");
    R(e, d.ra);
    g = vh(" ", g);
    R(e, g);
    a.mb.lp(google[v].B.Be);
    return d
};
M.bn = function(a) {
    if (1 != a.Ya[G]) {
        var b = a.Ya[ub]();
        if (b) {
            a.Ya[B](b);
            a = b.Ha.ra;
            var d = a[Vb];
            R(a[Jd], a);
            R(a[Jd], d);
            b = b.Ha.Db;
            R(b[Jd], b)
        }
    }
};
M.ak = function(a) {
    for (var b = 0; b < this.Tc[G]; ++b)
        if (this.Tc[b].key == a)
            return b;
    return null
};
M.Cw = function(a) {
    m(this.Ib, "gsc-option-menu-invisible");
    this.Sd != a && (this.zk(a), this.gi(a, this.X.lb), this.qa())
};
M.Dw = function(a) {
    a = a || window[Pd];
    m(this.Ib, "gsc-option-menu");
    this.Ib[u].top = $h(this.Ib, this.Ed) + $h(this.wi, this.Ed) - $h(Uh(this.Ib, "div", "gsc-option-menu-item-highlighted")[0], this.Ed) + "px";
    Ca(a, !0);
    a[jc] && a[jc]()
};
M.Aw = function(a) {
    a = a || window[Pd];
    this.Ib&&!fi(this.Ib, a[yd] || a[ad]) && m(this.Ib, "gsc-option-menu-invisible")
};
google[v].B.Bw = function(a) {
    a = a || window[Pd];
    Ca(a, !0);
    a[jc] && a[jc]()
};
M = google[v].B[H];
M.ht = function() {
    var a = X("gsc-orderby-invisible"), b = uh(Q["order-results-by"], "gsc-orderby-label");
    $(b, "gsc-inline-block");
    R(a, b);
    this.Ed = X("gsc-option-menu-container");
    $(this.Ed, "gsc-inline-block");
    R(a, this.Ed);
    b = X("gsc-selected-option-container");
    $(b, "gsc-inline-block");
    this.wi = X("gsc-selected-option");
    var d = X("gsc-option-selector");
    R(b, this.wi);
    R(b, d);
    ob(b, ph(this, this.Dw));
    R(this.Ed, b);
    this.Ib = X("gsc-option-menu-invisible");
    for (b = 0; b < this.Tc[G]; ++b) {
        var e = this.Tc[b][Fc], d = X("gsc-option-menu-item"),
        e = uh(e, "gsc-option");
        R(d, e);
        R(this.Ib, d);
        ob(e, lh(this, google[v].B[H].Cw, [b]))
    }
    R(this.Ed, this.Ib);
    ob(this.Ib, google[v].B.Bw);
    b = ph(this, this.Aw);
    this[Ic][Ub] ? (this[Ic][Ub]("onmousedown", b), h[Ub]("onmousedown", b)) : h[id] && h[id]("mousedown", b, !0);
    return a
};
M.Xx = function(a) {
    a = a || window[Pd];
    this.qd&&!fi(this.qd, a[yd] || a[ad]) && m(this.Xc, "gsc-getlink-text-invisible")
};
M.Wx = function(a) {
    a = a || window[Pd];
    this.Xc && fi(this.Xc, a[yd] || a[ad]) || (m(this.Xc, Lh(this.Xc, "gsc-getlink-text-visible") ? "gsc-getlink-text-invisible" : "gsc-getlink-text-visible"), Ca(a, !0), a[jc] && a[jc]())
};
M.it = function() {
    var a = X("gsc-richsnippet-popup-box");
    $(a, "gsc-richsnippet-popup-box-invisible");
    return a
};
M.Gx = function() {
    var a = Dh(), b = Ih("label", "page", !0), d = Ch(Q["label-page"], "gsc-label-result-form-label");
    R(a, b);
    R(a, d);
    Jh(b, ph(this, this.sr));
    b = Ih("label", "site");
    d = Ch(Q["label-site"], "gsc-label-result-form-label");
    R(a, b);
    R(a, d);
    Jh(b, ph(this, this.sr));
    b = Ih("label", "prefix");
    d = Ch(Q["label-prefix"], "gsc-label-result-form-label");
    R(a, b);
    R(a, d);
    Jh(b, ph(this, this.gy));
    return a
};
M.yx = function(a) {
    var b = h[s]("a"), d = "more:" + a;
    m(b, "gs-label");
    ib(b, a);
    b[Nb]("data-refinementlabel", a);
    b[Nb]("label-with-op", d);
    b[Nb]("dir", "ltr");
    Jh(b, lh(this, this.Tj, [this.Vc(this.Hb), d]));
    return b
};
M.gt = function() {
    this.Nd = X("gsc-modal-background-image");
    Jh(this.Nd, lh(this, this.zf));
    R(this.Cd, this.Nd);
    var a = X("gsc-label-result-main-box-invisible"), b = X("gsc-label-result-saving-popup");
    $(b, "gsc-label-result-saving-popup-invisible");
    sh(b, Q.saving);
    R(a, b);
    b = X("gsc-results-close-btn");
    $(b, "gsc-label-results-close-btn-visible");
    R(a, b);
    Jh(b, lh(this, this.zf));
    var b = Q["add-label"], d = h[s]("h");
    m(d, "gsc-label-result-heading");
    b && ib(d, b);
    R(a, d);
    b = X("gsc-labels-label-div-visible");
    R(a, b);
    this.Iq = b;
    this.Aj =
    X("gsc-labels-no-label-div-invisible");
    sh(this.Aj, Q["no-refinement"]);
    R(a, this.Aj);
    d = X("gsc-label-result-url-heading");
    R(b, d);
    d = h[s]("a");
    nb(d, "_blank");
    m(d, "gsc-label-result-url-title");
    R(b, d);
    d = X("gsc-label-result-url");
    R(b, d);
    d = X("gsc-label-result-form-div");
    R(b, d);
    R(d, this.Gx());
    d = Gh(null, "gsc-label-result-label-prefix-invisible");
    $(d, "gsc-label-result-label-prefix-visible");
    R(b, d);
    d = X("gsc-label-result-label-prefix-error");
    sh(d, Q["invalid-url-prefix"]);
    $(d, "gsc-label-result-label-prefix-error-invisible");
    R(b, d);
    d = X("gsc-labels-box");
    R(b, d);
    d = X("gsc-add-label-error");
    $(d, "gsc-add-label-error-invisible");
    sh(d, Q["error-adding-label"]);
    R(b, d);
    d = X("gsc-label-result-buttons");
    R(b, d);
    b = Fh(Q.Save, "gsc-result-label-button");
    $(b, "gsc-result-label-save-button");
    R(d, b);
    Jh(b, ph(this, this.Hx));
    b = Fh(Q.Cancel, "gsc-result-label-button");
    R(d, b);
    Jh(b, ph(this, this.zf));
    return a
};
M.ft = function() {
    var a = X("gsc-getlink-invisible"), b = X("gsc-getlink-box");
    $(b, "gsc-inline-block");
    var d = zh(google[Ed][ld] + "/css/link.png", null, null, "gsc-getlink-image");
    this.Xc = X("gsc-getlink-text-invisible");
    var e = X("gsc-getlink-textbox"), g = V(Q["get-link"], "gsc-getlink-label"), f = Gh(null, "gsc-getlink-inputbox");
    f.readOnly=!0;
    ob(f, f[Mb]);
    R(b, d);
    R(a, b);
    R(a, this.Xc);
    R(this.Xc, e);
    R(e, g);
    R(e, f);
    Jh(a, ph(this, this.Wx));
    b = ph(this, this.Xx);
    this[Ic][Ub] ? (this[Ic][Ub]("onclick", b), h[Ub]("onclick", b)) : h[id] && h[id]("click",
    b, !0);
    return a
};
M.Rf = function(a, b) {
    var d = null, e = null;
    b ? b.gb ? (this.gb = b.gb, d = b[Sc], e = b.io, this.ec = b.ec, this.Ii = b.Ii, this.Ji = b.Ji, this.xe = b.xe, this.ec == google[v].B.Sf && (this.La = b.La)) : this.gb = google[v].B.Ec : this.gb = google[v].B.Ec;
    Sa(this, X(this.La ? "gsc-control-searchbox-only" : "gsc-control"));
    this[Ic].dir = google[v].U.Hi;
    (a = bi(a)) && rh(a, this[Ic]);
    this.zb && this.kt();
    if (null != d)
        Ua(this, d), this[Sc].onkeyup = this.yr, this[Sc].onpaste = this.zr, this.Ud=!1;
    else {
        this.Ud=!0;
        null == e ? e = this[Ic] : e.dir = google[v].U.Hi;
        this.He = new google[v].Ca(!0,
        e, {
            Gi: !0,
            Zs: this.Kf,
            Yf: this.pd.Yf
        });
        this.He.lo(this, this.Yc);
        Ua(this, this.He[Sc]);
        var e = this.He.Ei, g = this.He.Di, f = {
            interfaceLanguage: google[v][Kd]
        };
        this.Kf && (f.brandingImageUrl = google[v].Ca.Ik, f.brandingImageStyle = google[v].Ca.et);
        this.Ii ? this.Rh && (f.maxSuggestions = this.Rh.maxCompletions, f.maxPromotions = this.Rh.maxPromotions) : f.disableAutoCompletions=!0;
        this.La && (f.enableAsynchronousLogging=!ei(ci(this.La.Hk)));
        f.useKennedyLookAndFeel = this.pd.Yf;
        f.searchButton = e;
        f.enableSpeech = b ? b.Ji : !1;
        this.Td = eh();
        this.Td.Lr(g, this[Sc], this, f);
        f.useKennedyLookAndFeel && $(g, "gsc-search-box-tools")
    }
    d || this.ec != google[v].B.Gf || (Pa(this.He.Di[u], "none"), gb(this[Ic][u], "hidden"));
    if (!this.La) {
        this.Cd = X("gsc-resultsbox-invisible");
        this.Km && (this.hf = this.it(), R(this.Cd, this.hf));
        Kh() && (this.na = this.gt(), R(this.Cd, this.na));
        this.tb = this.Sm ? X("gsc-results-wrapper-overlay") : X("gsc-results-wrapper-nooverlay");
        R(this[Ic], this.tb);
        this.Sm && (this.ef = X("gsc-modal-background-image"), R(this[Ic], this.ef), Jh(this.ef, lh(this, google[v].B[H].Yc)),
        this.ff = X("gsc-results-close-btn"), R(this.tb, this.ff), Jh(this.ff, lh(this, google[v].B[H].Yc)));
        if (this.gb == google[v].B.fc)
            for (this.Bc = X("gsc-tabsAreaInvisible"), R(this.tb, this.Bc), this.zb && (1 < this.Y[G] && this.Nh(google[v].B.Fk), this.Nc = X(this.yk), R(this.tb, this.Nc)), d = 0; d < this.Y[G]; d++)
                this.bk(this.Y[d]);
        this.Ef = X("gsc-above-wrapper-area-invisible");
        R(this.tb, this.Ef);
        d = wh(0, 0, "gsc-above-wrapper-area-container");
        R(this.Ef, d);
        d = xh(d, 0);
        e = yh(d, "gsc-result-info-container");
        this.gf = X("gsc-result-info-invisible");
        R(e, this.gf);
        this.zb && this.Lm && this.gb == google[v].B.fc && (e = yh(d, "gsc-orderby-container"), this.Wb = this.ht(), R(e, this.Wb), m(this.Wb, "gsc-orderby-invisible"));
        this.Df && (d = yh(d, "gsc-getlink-container"), this.qd = this.ft(), R(d, this.qd), m(this.qd, "gsc-getlink-invisible"));
        this.kc = this.tb;
        this.wd && (this.kc = X("gsc-wrapper"), this.vd(function(a, b) {
            b.ua = X("gsc-adBlockInvisible");
            a == google[v].Ea.ic ? R(this.kc, b.ua) : a == google[v].Ea.Pb && R(this.tb, b.ua)
        }), R(this.tb, this.kc));
        R(this.kc, this.Cd);
        for (d = 0; d < this.Y[G]; d++)
            this.nn(this.Y[d]),
            this.gb == google[v].B.fc && ($(this.Y[d].Ha.Db, "gsc-tabData"), $(this.Y[d].Ha.Db, "gsc-tabdInactive"));
        this.gb == google[v].B.fc && 0 < this.Y[G] && (this.X = this.Y[0].Ha, this.Ue(this.X), Mh(this.Y[0].Ha.Db, "gsc-tabdInactive"), $(this.Y[0].Ha.Db, "gsc-tabdActive"), this.Wb && (this.zk(this.Qd), this.gi(this.Qd, this.X.lb)))
    }
    a && (d = this.jt()) && 300 > d && $(this[Ic], "gsc-narrow")
};
google[v].B[H].draw = google[v].B[H].Rf;
google[v].B[H].zk = function(a) {
    if (this.Wb) {
        var b = Uh(this.Ib, "div", "gsc-option-menu-item-highlighted")[0];
        b && Mh(b, "gsc-option-menu-item-highlighted");
        this.Sd = a;
        $(Uh(this.Ib, "div", "gsc-option")[this.Sd][Jd], "gsc-option-menu-item-highlighted");
        sh(this.wi, this.Tc[this.Sd][Fc])
    }
};
google[v].B[H].gi = function(a, b) {
    b instanceof google[v].G && b.Ra(google[v].A.Ja, {
        sort: this.Tc[a].key
    })
};
google[v].B[H].bl = function(a) {
    var b = Uh(Uh(this.Xc, "div", "gsc-getlink-textbox")[0], "input", null)[0], d = {}, e = window[mc][zc];
    var g = e[hc]("#");
    if (1 != g[G]) {
        for (var e = g[1][hc]("&"), f = e[G]; 0 < f--;) 
            - 1 != e[f].lastIndexOf("gsc.", 0) && e[Md](f, 1);
        e = 0 < e[G] ? g[0] + "#" + e[Nd]("&") : g[0]
    }
    if ( - 1 != e[dd]("?gcse-bookmark=")||-1 != e[dd]("&gcse-bookmark="))
        g = e[hc]("#"), e = 1 == g[G] ? Xh(g[0], "gcse-bookmark") : Xh(g[0], "gcse-bookmark") + "#" + g[1];
    d.query = this.Qe;
    this.X.lb.Xb != Q.web && this.X.lb.Xb != Q.image && (d.refine = this.X.lb.Xb);
    this.X.lb instanceof
    google[v].C && (d.image = "1");
    this.Wb && this.X.lb instanceof google[v].G && (d.sortBy = this.Tc[this.Sd].key);
    a && (d.page = a);
    a = e;
    g = [];
    if (d)
        for (var k in d)
            null != d[k] && g[B]("gcse-bookmark=" + c(k + ":" + d[k]));
    d = g[Nd]("&");
    k =- 1 !== a[dd]("?") ? "&" : "?";
    g = "";
    - 1 !== a[dd]("#") && (g = a[r](/.*#/, "#"), a = a[r](/#.*/, ""));
    e = a + k + d + g;
    Ya(b, e);
    sh(b, e)
};
google[v].B[H].Vy = function(a) {
    switch (a) {
    case google[v].B.pq:
    case google[v].B.xi:
    case google[v].B.nq:
        this.si = a;
        break;
    default:
        this.si = google[v].B.xi
    }
};
google[v].B[H].setTimeoutInterval = google[v].B[H].Vy;
google[v].B[H].Qy = function(a, b, d) {
    if (d)
        switch (d) {
        case google[v].B.lq:
        case google[v].B.kq:
        case google[v].B.jq:
        case google[v].B.iq:
        case google[v].B.gq:
            this.Jj = Q[d];
            break;
        default:
            this.Jj = d
        }
    this.Oh = ph(a, b)
};
google[v].B[H].setOnKeepCallback = google[v].B[H].Qy;
M = google[v].B[H];
M.$f = function(a) {
    var b = a.oa;
    return this.zb ? "web" == b && a.N?!1 : !0 : "blog" == b || "image" == b?!0 : !1
};
M.Ue = function(a) {
    1 == a.Ob ? a.ra.onclick ? (Jh(a.ra, null), Mh(a.ra, this.$i), $(a.ra, this.Sl)) : (Jh(a.ra, lh(this, this.mf, [a])), Mh(a.ra, this.Sl), $(a.ra, this.$i)) : a.ra.onclick ? (Jh(a.ra, null), Mh(a.ra, "gsc-tabhInactive"), $(a.ra, "gsc-tabhActive")) : (Jh(a.ra, lh(this, this.mf, [a])), Mh(a.ra, "gsc-tabhActive"), $(a.ra, "gsc-tabhInactive"))
};
M.mf = function(a, b) {
    if (this.X != a) {
        this.Lj(!0);
        Mh(this.X.Db, "gsc-tabdActive");
        $(this.X.Db, "gsc-tabdInactive");
        this.Ue(this.X);
        var d = this.Vc(this.X.Hb), e = this.Vc(a.Hb);
        1 == this.X.Ob && d != e && ($(d.Lc, "gsc-refinementBlockInvisible"), this.Ue(d.Ha));
        this.X = a;
        d = this.X.lb;
        this.Ue(this.X);
        this.Wb && this.gi(this.Sd, this.X.lb);
        this.Df && this.bl();
        1 == this.X.Ob && e.Ha.ra.onclick && this.Ue(e.Ha);
        this.Io();
        e = null;
        !b && this.jb && this.jb[vc]() && (e = this.jb.Tg(), this.hp(a, e));
        $(this.X.Db, "gsc-tabdActive");
        Mh(this.X.Db, "gsc-tabdInactive");
        var g = b ? b.di: this.Qe, f = g && g == d.Ze;
        b && (f = f && b[Oc] == d.oj());
        this.qd && this.Om();
        if (f) {
            e && (e[google[v][D].Zc] = d.oj(), this.jb[vb](e));
            if (!this.Jo(d.Ze, d.oj()) || jh("opera") && b)
                this.Yd = d.Yd, this.$k(d.Ze, d.oj());
            this.X.Hb.Pp || (this.Nm(this.X.Hb), this.Mm(d), this.Wb && this.Pm())
        } else 
            g && this.Np(g, b && b[Oc], null, e)
    }
};
M.Jo = function(a, b) {
    var d = this.Ua[google[v].Ea.Cb];
    return !!this.Fa && this.Fa.query == a && (this.Fa.adPage || 1) == (b || 1)&&!(d[yc] && this.X && this.X.Hb.wa != d.ua[Jd])
};
M.Mm = function(a) {
    var b = a.results, d = a[ec];
    this.gb != google[v].B.Ec && (this.gf.id = "resInfo-" + a.st);
    this.gb != google[v].B.Ec && 0 < b[G] && d && d.resultCount && d.searchResultTime ? (a = th(Q["result-info"](d.resultCount, d.searchResultTime)), rh(this.gf, a), m(this.gf, "gsc-result-info")) : (m(this.gf, "gsc-result-info-invisible"), qh(this.gf))
};
M.Dr = function() {
    if (this.na&&!this.Bn) {
        var a = google[v].Na.sx();
        this.Bn=!0;
        if (a && a[G])
            for (var b = Uh(this.na, null, "gsc-labels-box")[0], d = 0; d < a[G]; d++) {
                var e = Hh(a[d].Title, a[d].Label[md], null, "gsc-label-checkbox"), g = vh(a[d].Title, "gsc-label-result-labels"), f = X("gsc-label-box");
                R(f, e);
                R(f, g);
                R(b, f)
            } else 
                Mh(this.Aj, "gsc-labels-no-label-div-invisible"), $(this.Aj, "gsc-labels-no-label-div-visible"), Mh(this.Iq, "gsc-labels-label-div-visible"), $(this.Iq, "gsc-labels-label-div-invisible")
        }
};
M.eq = function(a, b) {
    if (a.J.N)
        for (var d = 0; d < a.Ya[G]; d++) {
            var e = a.Ya[d];
            if (e.J.Xd(b))
                return e.Ha
        }
    return null
};
M.Tj = function(a, b) {
    var d = this.eq(a, b), e=!0;
    d || (d = a.Ha, e=!1);
    this.mf(d);
    return e
};
M.Kr = function(a, b) {
    Xa(this.hf, "");
    var d = X("gsc-richsnippet-popup-close-button");
    Jh(d, lh(this, function() {
        $(this.hf, "gsc-richsnippet-popup-box-invisible")
    }));
    var e = th(Q["structured-data"] + " : "), g = X("gsc-richsnippet-popup-box-title-text");
    R(g, e);
    var f = th(xa(a)), e = X("gsc-richsnippet-popup-box-title-url");
    R(e, f);
    f = X("gsc-richsnippet-popup-box-title");
    R(f, g);
    R(f, e);
    R(f, d);
    R(this.hf, f);
    var d = X("gsc-richsnippet-popup-box-contents"), k;
    for (k in b)
        this.$x(k, b[k], d);
    R(this.hf, d);
    Mh(this.hf, "gsc-richsnippet-popup-box-invisible")
};
M.$x = function(a, b, d) {
    var e = X("gsc-richsnippet-individual-snippet-box"), g = X("gsc-richsnippet-individual-snippet-key");
    a = a[Fb](0)[Ld]() + a[Xc](1);
    R(g, th(a));
    a = X("gsc-richsnippet-individual-snippet-data");
    for (var f in b)
        this.wr(f, b[f], a);
    R(e, g);
    R(e, a);
    R(d, e)
};
M.wr = function(a, b, d) {
    var e = th(a + "  :  ");
    a = X("gsc-richsnippet-individual-snippet-valueelem");
    if ("string" == typeof b) {
        var g = X("gsc-richsnippet-individual-snippet-keyelem");
        R(g, e);
        R(a, th(b))
    }
    if ("object" == typeof b)
        for (var f in b)
            this.wr(f, b[f], a);
    b = X("gsc-richsnippet-individual-snippet-keyvalue");
    R(b, g);
    R(b, a);
    R(d, b)
};
M.Jr = function(a, b, d) {
    var e = Uh(this.na, "input", "gsc-label-checkbox");
    d = Uh(d, "a", "gs-label");
    for (var g = 0; g < e[G]; g++) {
        Fa(e[g], !1);
        mb(e[g], !1);
        for (var f = 1; d && f < d[G]; f++)
            e[g][cd] == d[f][Bd]("data-refinementlabel") && (Fa(e[g], !0), mb(e[g], !0))
    }(e = Uh(this.na, null, "gsc-label-result-form-div")[0]) && (e = Uh(e, "input", null)[0]) && e.click();
    $(this.Nd, "gsc-modal-background-image-visible");
    Mh(this.na, "gsc-label-result-main-box-invisible");
    m(this.na, "gsc-label-result-main-box-visible");
    sh(Uh(this.na, null, "gsc-label-result-url")[0],
    unescape(a));
    e = Uh(this.na, null, "gsc-label-result-url-title")[0];
    Oa(e, a);
    sh(e, b);
    Ya(Uh(this.na, null, "gsc-label-result-label-prefix-visible")[0], unescape(a))
};
M.zf = function() {
    Mh(this.na, "gsc-label-result-main-box-visible");
    m(this.na, "gsc-label-result-main-box-invisible");
    Mh(this.Nd, "gsc-modal-background-image-visible");
    this.em();
    this.Ax()
};
M.Ax = function() {
    $(Uh(this.na, null, "gsc-add-label-error")[0], "gsc-add-label-error-invisible")
};
M.Ex = function() {
    Mh(Uh(this.na, null, "gsc-add-label-error")[0], "gsc-add-label-error-invisible")
};
M.Dx = function() {
    $(Uh(this.na, null, "gsc-label-result-saving-popup")[0], "gsc-label-result-saving-popup-invisible")
};
M.qx = function() {
    Mh(Uh(this.na, null, "gsc-label-result-saving-popup")[0], "gsc-label-result-saving-popup-invisible")
};
M.em = function() {
    $(Uh(this.na, null, "gsc-label-result-label-prefix-error")[0], "gsc-label-result-label-prefix-error-invisible")
};
M.px = function() {
    Mh(Uh(this.na, null, "gsc-label-result-label-prefix-error")[0], "gsc-label-result-label-prefix-error-invisible")
};
M.gy = function() {
    var a = Uh(this.na, null, "gsc-label-result-label-prefix-invisible")[0];
    a && Mh(a, "gsc-label-result-label-prefix-invisible")
};
M.sr = function() {
    this.em();
    var a = Uh(this.na, null, "gsc-label-result-label-prefix-visible")[0];
    a && $(a, "gsc-label-result-label-prefix-invisible")
};
M.Fx = function(a, b) {
    for (var d = Uh(this.X.Hb[Ic], null, "gs-per-result-labels"), e = null, g = 0; g < d[G]; g++)
        if (d[g][Bd]("url") == a) {
            e = d[g];
            break
        }
    if (e) {
        for (; 1 < e[Sb][G];)
            e[xd](e[Sb][1]);
        for (g = 0; g < b[G]; g++)
            e[p](this.yx(b[g]))
    }
};
M.Hx = function() {
    for (var a = Uh(this.na, null, "gsc-label-checkbox"), b = [], d=!1, e = 0; e < a[G]; e++)
        a[e][fc] && b[B](a[e][cd]), a[e][fc]&&!a[e].disabled && (d=!0);
    if (d) {
        var g = Uh(this.na, null, "gsc-label-result-url")[0].innerText, f = this.nx(g);
        if (f) {
            this.em();
            this.lx();
            this.qx();
            var k = this;
            google[v].Na.ox(google[v].Na.Qq() + "&num=5000", function(a) {
                k.mx(g, f, b, a)
            })
        } else 
            this.px()
    }
};
M.lx = function() {
    var a = Uh(this.na, null, "gsc-label-results-close-btn-visible")[0];
    a && Jh(a, null);
    this.Nd && Jh(this.Nd, null);
    this.fr(!0)
};
M.Bx = function() {
    var a = Uh(this.na, null, "gsc-label-results-close-btn-visible")[0];
    a && Jh(a, lh(this, this.zf));
    this.Nd && Jh(this.Nd, lh(this, this.zf));
    this.fr(!1)
};
M.fr = function(a) {
    for (var b = Uh(this.na, null, "gsc-result-label-button"), d = 0; b && d < b[G]; d++)
        mb(b[d], a);
    if (d = Uh(this.na, null, "gsc-label-result-form-div")[0])
        for (b = Uh(d, "input", null), d = 0; b && d < b[G]; d++)
            mb(b[d], a)
};
M.mx = function(a, b, d, e) {
    e = google[v].Na.Jx(b, e);
    b = google[v].Na.Kx(b, d, e);
    var g = this;
    google[v].Na.Lx(google[v].Na.Qq(), b, function(b) {
        g.Ix(a, b)
    })
};
M.Ix = function(a, b) {
    var d = google[v].Na.Cx(b);
    this.Dx();
    this.Bx();
    d && d[G] ? (this.Fx(a, d), this.zf()) : this.Ex()
};
M.nx = function(a) {
    var b = "", d = di(a), e = Uh(Uh(this.na, "div", "gsc-label-result-form-div")[0], "input");
    e[0][fc] ? b = a : e[1][fc] ? b = d : e[2][fc] && (e = Uh(this.na, "input", "gsc-label-result-label-prefix-visible")[0][cd], d == di(e) && 0 == a[dd](e) && (b = e));
    return b
};
M.Ph = function(a, b) {
    b ? ($(this[Ic], "gsc-loading-fade"), a.Pp=!0, $(a.ib, "gsc-loading-resultsRoot"), 0 == a.Ob && this.Nc && $(this.Nc, "gsc-loading-refinementsArea")) : (Mh(this[Ic], "gsc-loading-fade"), a.Pp=!1, Mh(a.ib, "gsc-loading-resultsRoot"), this.Nc && Mh(this.Nc, "gsc-loading-refinementsArea"))
};
M.Io = function() {
    this.wd && (this.$f(this.X.lb) ? this.Pg() : this.bm())
};
M.Rw = function(a) {
    var b = this.Ua[google[v].Ea.Cb];
    if (b.ua[Jd] != a.wa) {
        var d = Uh(a.wa, "div", "gsc-cursor-box")[0];
        d && d[Jd] == a.wa ? a.wa[Hb](b.ua, d) : R(a.wa, b.ua)
    }
};
M.Pg = function() {
    this.wd && this.vd(function(a, b) {
        m(b.ua, "gsc-adBlockInvisible");
        b[yc] && b.$b && Mh(this.kc, b.$b)
    })
};
M.bm = function() {
    this.wd && this.vd(function(a, b) {
        0 < b.ie ? (m(b.ua, b[rd]), b.$b && $(this.kc, b.$b)) : (m(b.ua, "gsc-adBlockInvisible"), b.$b && Mh(this.kc, b.$b))
    })
};
M.submit = function() {
    return this.xr(null)
};
google[v].B[H].submit = google[v].B[H][Uc];
M = google[v].B[H];
M.xr = function(a, b) {
    this[Sc][cd][G] ? this.La ? this.wp(b) : this.qa(void 0, void 0, b) : this.Yc();
    return !1
};
M.bw = function(a) {
    return this.xr(null, a)
};
M.wp = function(a) {
    var b = this.La.ww, b = this.La.Hk + (0 <= this.La.Hk[dd](b) ? "&" : b) + c(this.La.xw) + "=" + c(this[Sc][cd]);
    (a = Wh(a)) && (b += "&" + a);
    this.La.vw ? window[Pc](b) : window.location = b
};
M.Nj = function() {
    this.Bc&&!this.lu && (!this.zb || 1 < this.Y[G]) && m(this.Bc, "gsc-tabsArea");
    !this.Nc || 1 == this.Y[G] && 0 == this.Y[0].Ya[G] || m(this.Nc, this.Qp)
};
M.Qw = function(a) {
    var b = this;
    return function(d, e) {
        if (e) {
            b.Ua[a].ie = 1;
            var g = 0, f = 0;
            b.vd(function(a, b) {
                b[yc] && b.sq && (g++, b.ie && f++)
            });
            g == f ? (window[wb](b.zx), b.bm()) : 1 == f && (b.zx = window[gc](function() {
                b.bm()
            }, 200))
        }
    }
};
M.lj = function() {
    return null
};
google[v].B[H].getPartnerId = google[v].B[H].lj;
google[v].B[H].kt = function() {
    var a = uh("", "gsc-input"), b = Gh(null, "gsc-input", null);
    Pa(b[u], "none");
    b[u].background = google[v].Ca.Vw();
    R(a, b);
    R(this[Ic], a);
    var d = "";
    h[kd] && h[kd][pc] ? (b = h[kd][pc](b, null)) && (d = b.backgroundImage || "") : b[Fd] && (d = b[Fd].backgroundImage || "");
    - 1 != d[v](google[v].I.Uw) && (this.Kf=!0, this.Wa && this.Wa.Bq(Th("gcsc-", void 0, !1, "http://www.google.com/cse/?hl=" + google[v][Kd], Q["custom-search"])), this.Za && this.Za.Bq(Th("gcsc-", void 0, !1, "http://www.google.com/cse/?hl=" + google[v][Kd], Q["custom-search"])));
    this[Ic][xd](a)
};
google[v].B[H].jj = function(a) {
    if (this.Ud)
        this.Td.Sc(a);
    else if (Ya(this[Sc], a), this[Sc].onfocus)
        this[Sc].onfocus(null)
};
google[v].B[H].prefillQuery = google[v].B[H].jj;
google[v].B[H].ey = function(a) {
    a ? this.jj(a) : a = this.Ud ? this.Td.cb() : this[Sc][cd];
    return a
};
google[v].B[H].Hq = function() {
    return this.Ud ? this.Td.cb() : this[Sc][cd]
};
google[v].B[H].getInputQuery = google[v].B[H].Hq;
google[v].B[H].qa = function(a, b, d) {
    if (!this.La) {
        var e = this.wq(this.mk, this.Ij);
        e && this.mf(e)
    }
    this.Np(a, b, d)
};
google[v].B[H].execute = google[v].B[H].qa;
M = google[v].B[H];
M.Np = function(a, b, d, e, g) {
    a = this.ey(a);
    this.Ll(a, b, d, e, g)
};
M.Ll = function(a, b, d, e, g) {
    if (a[G]) {
        this.Ff=!1;
        this.Qe = a;
        this.Wg = b || 1;
        this.Df && this.bl();
        this.jb && this.jb[vc]() && (e = e || this.jb.Tg(), e[google[v][D].Zg] = a, null == b ? delete e[google[v][D].Zc] : e[google[v][D].Zc] = b, this.Wb && this.X.lb instanceof google[v].G && (e[google[v][D].Yi] = this.Tc[this.Sd].key), this.jb[vb](e));
        this.Yd = google[Ed].createGuidArg_();
        e=!1;
        if (this.gb == google[v].B.fc)
            e = this.ip(this.X.Hb, this.X.Db, a, g, b, d) || e;
        else 
            for (var f = 0; f < this.Y[G]; f++)
                e = this.ip(this.Y[f], this.Y[f][Ic], a, g, b, d) || e;
        g = this.Jo(a,
        b);
        e ||!g ? (g = "", d && d.gs_l && 23 < d.gs_l[hc](".")[G] && (g = d.gs_l[hc](".")[23]), this.$k(a, b, g)) : this.Io()
    }
};
M.Tu = function() {
    return this.Yd
};
M.$k = function(a, b, d) {
    var e = this.wd;
    e && (this.ns && this.gb == google[v].B.Ec || this.gb == google[v].B.fc && this.$f(this.X.lb)) && (e=!1);
    var g = this.nt(), f = this.mt();
    void 0 != g || this.Dd || this.po || (e=!1);
    this.gb != google[v].B.fc && Na(this.Ua[google[v].Ea.Cb], !1);
    if (e)
        if (this.pt(), this.po) {
            this.Pg();
            this.vd(function(a, b) {
                Xa(b.ua, "")
            });
            this.Fa = {};
            this.Fa.pubId = this.Dd || "google-coop";
            this.Fa.gcsc=!0;
            g ? this.Fa.cx = g : f && (this.Fa.cref = f);
            this.Fa.hl = google[v][Kd] ? c(google[v][Kd]) : null;
            this.Fa.adtest = this.nk ? "on" : null;
            this.Fa.channel =
            this.Ki ? this.Ki : null;
            this.Fa.adsafe = this.Kk || null;
            this.Fa.query = a;
            this.Fa.adstyle = this.mo ? this.mo : null;
            b && (this.Fa.adPage = b);
            this.Fa.containerWidth = this.Vm || this.tb[Db];
            this.zb && (this.Fa.cseGoogleHosting = "full" == this.Li || "iframe" == this.Li || "partner" == this.Li ? this.Li : "partner", this.Fa.fontSizeDescription = google[v].B.so, this.Fa.fontSizeDomainLink = google[v].B.so, this.Fa.fontSizeTitle = google[v].B.lt);
            window.___bg_ && h[Zc]("bgresponse") && window.___bg_[yb] && (window.___bg_[yb](function(a) {
                Ya(h[Zc]("bgresponse"),
                a)
            }), this.Fa.bgresponse = h[Zc]("bgresponse")[cd], d && (this.Fa.sbsignals = d), window.___gcse_nc_ && (this.Fa.gcse_nc = window.___gcse_nc_));
            if ((b = google[v].A.Jk()) && b in google[v].B.Id) {
                b = google[v].B.Id[b];
                for (var k in b)
                    this.Fa[k] = b[k]
            }
            google && google.ads && google.ads[v] && google.ads[v].Ads ? this.ro() : this.Vk=!0
        } else {
            k = "";
            this.Ua[google[v].Ea.ic][yc] && (k = k + "w" + this.Ua[google[v].Ea.ic].dd);
            this.Ua[google[v].Ea.Pb][yc] && (k = k + "n" + this.Ua[google[v].Ea.Pb].dd);
            k = "http://www.google.com/" + (g ? "cse" : "search") + "?output=js&num=0&ie=utf8&oe=utf8&q=" +
            c(a) + "&hl=" + c(google[v][Kd]) + "&ad=" + c(k) + "&js=uds&" + this.Yd;
            g && (k += "&cx=" + g);
            this.Dd && (k += "&client=" + c(this.Dd));
            this.Ki && (k += "&channel=" + c(this.Ki));
            this.nk && (k += "&adtest=on");
            this.no && (k += "&ip=" + c(this.no));
            this.Kk && (k += "&adsafe=" + c(this.Kk));
            this.oo && (k += "&useragent=" + c(this.oo));
            b && (k += "&adpage=" + c(b + ""));
            var l = this;
            window.google_afs_request_done = function(a) {
                l.ot(a)
            };
            nh(k)
        }
};
M.vd = function(a) {
    for (var b in google[v].Ea)
        if (google[v].Ea[oc](b)) {
            var d = google[v].Ea[b];
            a[zd](this, d, this.Ua[d])
        }
};
M.ro = function() {
    var a = [];
    this.vd(function(b, d) {
        d.ie = 0;
        if (d[yc] && 0 < d.dd) {
            d.sq=!0;
            d.Yl = {
                container: d.ua,
                number: d.dd,
                callback: this.Qw(b),
                position: b
            };
            for (var e in d.mi)
                null != d.Yl[e] && (d.Yl[e] = d.mi);
            a[B](d.Yl)
        } else 
            d.sq=!1;
        b == google[v].Ea.Cb && this.Rw(this.X.Hb);
        m(d.ua, "gsc-adBlockNoHeight");
        Qa(d.ua[u], "0px")
    });
    0 < a[G] && new google.ads[v].Ads(this.Fa, a)
};
M.ip = function(a, b, d, e, g, f) {
    b = a.J;
    this.hk && this.hk(this, b, d);
    this.gk && this.gk(this, b, d);
    b.ed && (b.ed = null);
    var k=!1;
    if (e)
        b.xj(e);
    else {
        e = {};
        if (f)
            for (var l in f)
                e[l] = f[l];
        for (l in this.ln)
            e[l] || (e[l] = this.ln[l]);
        this.zb && this.Dd && (e.cseclient = this.Dd);
        k = b.qa(d, e, g)
    }
    this.Ph(a, k);
    return k
};
M.nt = function() {
    for (var a = 0; a < this.Y[G]; a++) {
        var b = this.Y[a].J;
        if ("web" == b.oa && b.N && b.vh() == google[v].G.xf)
            return b.wh()
    }
    return null
};
M.mt = function() {
    for (var a = 0; a < this.Y[G]; a++) {
        var b = this.Y[a].J;
        if ("web" == b.oa && b.N && b.vh() == google[v].G.Qc)
            return b.wh()
    }
    return null
};
M.ot = function(a) {
    window.google_afs_request_done = null;
    var b = this.Ua[google[v].Ea.ic], d = this.Ua[google[v].Ea.Pb];
    if (b.ua)
        if (Xa(b.ua, ""), Xa(d.ua, ""), b.ie = d.ie = 0, !a || 1 > a[G])
            this.Pg();
        else {
            if (!this.Bc)
                for (var e = 0; e < this.Y[G]; e++) {
                    var g = this.Y[e].J;
                    if (this.$f(g)) {
                        this.Pg();
                        return 
                    }
                }
                m(b.ua, b[rd]);
                var g=!1, f = h[s]("h2"), e = "";
                this.nk && (e = "*DEBUG* ");
                e += Q["ads-by-google"];
                Xa(f, e);
                R(b.ua, f);
                for (var k = a[G], e = 0; e < k; e++) {
                    var l = a[e];
                    if ("text/wide" == l[jd]) {
                        b.ie++;
                        var n = X("gsc-ad"), q = Bh(l.url, l.line1, google[v].A.Mf);
                        R(n, q);
                        q = h[s]("cite");
                        Xa(q, l.visible_url);
                        R(n, q);
                        q = vh();
                        Xa(q, l.line2);
                        R(n, q);
                        R(b.ua, n)
                    } else 
                        d[yc] && (d.ie++, g || (g=!0, $(this.kc, d.$b), R(d.ua, f[Ob](!0)), m(d.ua, d[rd])), n = X("gsc-ad"), q = Bh(l.url, l.line1, google[v].A.Mf), R(n, q), q = vh(), Xa(q, l.line2 + "<br/>" + l.line3), R(n, q), q = h[s]("cite"), Xa(q, l.visible_url), R(n, q), R(d.ua, n))
                    }
                    d[yc]&&!g && Mh(this.kc, d.$b);
                    this.Bc && (g = this.X.lb, this.$f(g) && this.Pg());
                    this.If && this.Ko && this.If(this, "ads")
            }
        };
M.os = function() {
    var a = this[Sc][cd];
    a && "" != a && (this.We && window[wb](this.We), this.We = window[gc](lh(this, google[v].B[H].qa, [null]), this.si))
};
M.ps = function() {
    this.We && window[wb](this.We);
    this.We = window[gc](lh(this, google[v].B[H].qa, [null]), this.si)
};
M.pt = function() {
    var a = google[v].Ea, b = {};
    if (this.Ua[a.ic][yc])
        switch (this.fk) {
        case google[v].A.Hc:
            b[a.ic] = 3;
            b[a.Pb] = 5;
            b[a.Cb] = 3;
            break;
        case google[v].A.tc:
            b[a.ic] = 2;
            b[a.Pb] = 4;
            b[a.Cb] = 2;
            break;
        default:
            b[a.ic] = 1, b[a.Pb] = 2, b[a.Cb] = 1
        } else 
            switch (b[a.ic] = 0, this.fk) {
            case google[v].A.Hc:
                b[a.Pb] = 8;
                b[a.Cb] = 3;
                break;
            case google[v].A.tc:
                b[a.Pb] = 6;
                b[a.Cb] = 2;
                break;
            case google[v].A.Zb:
                b[a.Pb] = 3;
                b[a.Cb] = 1;
                break;
            default:
                b[a.Pb] = 6, b[a.Cb] = 2
            }
    this.vd(function(a, e) {
        void 0 == e.dd && (e.dd = b[a])
    })
};
M.Da = function(a) {
    if (0 < a && 8 >= a)
        this.Me = a;
    else 
        switch (a) {
        case google[v].A.tc:
            this.Me = google[v].A.tc;
            break;
        case google[v].A.Hc:
            this.Me = google[v].A.Hc;
            break;
        default:
        case google[v].A.Zb:
            this.Me = google[v].A.Zb
        }
    for (var b = 0; b < this.Y[G]; b++)
        this.Y[b].J.Da(a);
    this.fk = a
};
google[v].B[H].setResultSetSize = google[v].B[H].Da;
google[v].B[H].Oa = function(a) {
    this.Uc = a;
    for (var b = 0; b < this.Y[G]; b++)
        this.Y[b].J.Oa(a)
    };
google[v].B[H].setLinkTarget = google[v].B[H].Oa;
google[v].B[H].Ne = function(a) {
    for (var b = 0; b < this.Y[G]; b++)
        this.Y[b].mb.Ne(a)
};
google[v].B[H].setNoResultsString = google[v].B[H].Ne;
M = google[v].B[H];
M.Wu = function(a) {
    a.Al ? this.Le(a, !1) : this.Le(a, !0)
};
M.Le = function(a, b, d) {
    b ? (Mh(a.le, "gsc-twiddle-closed"), $(a.le, "gsc-twiddle-opened"), a.Al=!0, Pa(a.ib[u], "block")) : (Mh(a.le, "gsc-twiddle-opened"), $(a.le, "gsc-twiddle-closed"), a.Al=!1, Pa(a.ib[u], "none"), rh(a.Jf, d ? th("(0)") : th("(" + a.J.results[G] + ")")))
};
M.Uu = function(a) {
    this.Xh(a, !1, !0);
    return !1
};
M.Vu = function(a) {
    a.J.of && (a.xl ? this.Xh(a, !1, !0) : this.Xh(a, !0, !0))
};
M.Xh = function(a, b, d) {
    b ? a.Vb && a.J.Fc && ($(a.Vb, "gsc-twiddle-opened"), Mh(a.Vb, "gsc-twiddle-closed"), Xa(a.Vb, Q[rc]), a.xl=!0, Pa(a.Jd[u], "block"), a.J.Fc(a.lf, !0)) : a.Vb && a.J.Fc && (Mh(a.Vb, "gsc-twiddle-opened"), $(a.Vb, "gsc-twiddle-closed"), Xa(a.Vb, Q.blank), a.xl=!1, a.J.Fc(a.lf, !1), Pa(a.Jd[u], "none"), d && this.qa())
};
M.Hr = function(a) {
    this.Oh && this.Oh(a)
};
M.ry = function() {
    this.Ff=!0
};
google[v].B[H].cancelSearch = google[v].B[H].ry;
google[v].B[H].Lj = function(a) {
    if (a) {
        if (m(this.Cd, "gsc-resultsbox-visible"), $(this.tb, "gsc-results-wrapper-visible"), this.ff && $(this.ff, "gsc-results-close-btn-visible"), this.ef) {
            $(this.ef, "gsc-modal-background-image-visible");
            var b = h[ac]("body")[0];
            $(b, "gsc-overflow-hidden")
        }
    } else 
        m(this.Cd, "gsc-resultsbox-invisible"), Mh(this.tb, "gsc-results-wrapper-visible"), this.ff && Mh(this.ff, "gsc-results-close-btn-visible"), this.ef && (Mh(this.ef, "gsc-modal-background-image-visible"), b = h[ac]("body")[0], Mh(b, "gsc-overflow-hidden"));
    for (b = 0; b < this.Y[G]; b++)
        this.Y[b].il || (a ? (Mh(this.Y[b][Ic], "gsc-resultsbox-invisible"), $(this.Y[b][Ic], "gsc-resultsbox-visible")) : (Mh(this.Y[b][Ic], "gsc-resultsbox-visible"), $(this.Y[b][Ic], "gsc-resultsbox-invisible")))
};
google[v].B[H].Yc = function() {
    this.Ud ? this.Td.Sc("") : Ya(this[Sc], "");
    this.Wg = this.Qe = null;
    if (this.ec != google[v].B.Sf && (this.ec == google[v].B.Gf && gb(this[Ic][u], "hidden"), this.Lj(!1), this.Bc && m(this.Bc, "gsc-tabsAreaInvisible"), this.Nc && m(this.Nc, this.yk), this.vd(function(a, d) {
        d.ua && (m(d.ua, "gsc-adBlockInvisible"), d.$b && Mh(this.kc, d.$b))
    }), m(this.Ef, "gsc-above-wrapper-area-invisible"), this.jb && this.jb[vc]())) {
        var a = this.jb.Tg();
        delete a[google[v][D].Zc];
        delete a[google[v][D].Zg];
        this.jb[vb](a)
    }
};
google[v].B[H].clearAllResults = google[v].B[H].Yc;
google[v].B[H].yy = function() {
    var a = google[v].F[I].pl(window[mc][v]) || {};
    if (!a.query)
        return !1;
    a.refine && (this.Ij = a.refine);
    a.image && (this.mk = 1 == a.image ? google[v].I.zn : google[v].I.An);
    a.sortBy && (this.Qd = this.ak(a.sortBy) || 0);
    return this.Wm=!0
};
google[v].B[H].enableBookmark = google[v].B[H].yy;
M = google[v].B[H];
M.Uj = function(a, b, d, e, g) {
    a = a.zc ? a.zc(b) : b;
    e ? (b = {}, b[e] = g, e = lh(this, this.qa, [a, void 0, b])) : e = lh(this, this.qa, [a]);
    Jh(d, e)
};
M.Pm = function() {
    m(this.Wb, this.zb && this.X.Hb.J instanceof google[v].G ? "gsc-orderby" : "gsc-orderby-invisible")
};
M.Om = function() {
    m(this.qd, this.zb ? "gsc-getlink" : "gsc-getlink-invisible")
};
M.Zm = function(a) {
    var b = function(a, b) {
        for (var g = a[Lb]; g;) {
            var f = g[Vb];
            g != b && a[xd](g);
            g = f
        }
    };
    b(a.wa, this.Ua[google[v].Ea.Cb].ua);
    b(a.ib, a.wa)
};
M.nb = function(a) {
    this.ec == google[v].B.Gf && gb(this[Ic][u], "visible");
    this.Ph(a, !1);
    this.Lj(!0);
    var b, d, e=!1, g;
    if (!this.Ff) {
        this.Zm(a);
        var f = ["gsc-results", a.J.$d()][Nd](" ");
        m(a.ib, f);
        this.Le(a, !1, !0);
        this.Xh(a, !1, !1);
        a.Kj(google[v].fb.Mj);
        this.pd.Um && (d = a.J.Qh) && a.ib[Hb](d[Ob](!0), a.wa);
        if (f = a.J.spelling)
            if (!f.html && a.J.Pf && a.J.Pf(f), f.html) {
                var k = f.html[Ob](!0), l = k[ac]("a");
                f[jd] && "SPELL_CORRECTED_RESULTS" == f[jd] ? l && 1 < l[G] && (this.Uj(a.J, f.correctedQuery, l[0], f.correctedParamName, f.correctedParamValue),
                this.Uj(a.J, f.originalQuery, l[1], f.originalParamName, f.originalParamValue)) : l && 0 < l[G] && this.Uj(a.J, f.correctedQuery, l[0]);
                g = X(a.J.$d());
                $(g, "gsc-result");
                R(g, k);
                a.ib[Hb](g, a.wa)
            }
        f = a.J.context || {};
        l = this.Bc && f;
        this.zb&&!this.Ar && l && (d = f[pd], g = this.Vc(a), d&&!g.J.Xb && rh(g.Ha.ra, this.Xm(google[v].U.Vd(d))), this.Ar=!0);
        var n = a.J.promotions;
        if (n && 0 < n[G])
            for (d = 0; d < n[G]; d++)
                b = n[d], b.html || a.J.Zh(b, this.pd), b.html && (g = X(a.J.$d()), $(g, "gsc-result"), $(g, "gsc-promotion"), k = b.html[Ob](!0), R(g, k), a.ib[Hb](g, a.wa));
        n = a.J.results;
        a.J.rd && 400 <= a.J.completionStatus ? (n = [], n[B](a.J.Er())) : 0 == n[G] && a.mb.Rd && 200 == a.J.completionStatus && (n = [], n[B](a.J.Fr(a.mb.Rd)));
        m(this.Ef, "gsc-above-wrapper-area");
        this.Mm(a.J);
        this.na && this.Dr();
        this.Wb && this.Pm();
        this.qd && this.Om();
        d = this.X && this.X.lb && "Web" == this.X.lb.Xb && 0 < a.J.results[G] && 0 === a.J[ec].currentPageIndex;
        if (f.html && d) {
            g = X(a.J.$d());
            $(g, "gsc-result");
            k = f.html[Ob](!0);
            R(g, k);
            d = Uh(g, "div", "gsc-facet-label");
            for (var q = 0; q < d[G]; q++)
                if (b = d[q]) {
                    var t = b[ac]("a"), k = this.Vc(a);
                    b = 0;
                    for (var w; w = t[b]; b++) {
                        var y = w[Bd]("data-refinementLabel");
                        if (y != a.J.lc()) {
                            var F = w[Bd]("label-with-op");
                            F || (F = y);
                            Jh(w, lh(this, this.Tj, [k, F]))
                        } else 
                            $(w, "gs-labelActive")
                        }
                }
            a.ib[Hb](g, a.wa)
        }
        Kh() && (this.Hb = a);
        for (d = 0; d < n[G]; d++)
            if (b = n[d], b.html || a.J.Qa(b), b.html) {
                e=!0;
                g = X(a.J.$d());
                $(g, "gsc-result");
                a.J.Hf && $(g, "gsc-result-" + a.J.Hf);
                k = b.html[Ob](!0);
                if (b.GsearchResultClass == google[v].xa.Va && a.mb.Th)
                    for (q = k[ac]("img"), t = 0; t < q[G]; t++)
                        google[v].A.Yb(b.tbWidth, b.tbHeight, a.mb.Th, q[t]);
                        R(g, k);
                        this.Km &&
                        (k = Uh(g, "div", "gs-richsnippet-box")[0]) && (Pa(k[u], "block"), q = vh(Q["structured-data"], "gsc-richsnippet-showsnippet-label"), R(k, q), Jh(q, lh(this, this.Kr, [b.url, b.richSnippet])));
                        (k = Uh(g, "div", "gs-per-result-labels")[0]) && (q = Uh(k, null, "gs-add-label")[0]) && Jh(q, lh(this, this.Jr, [b.url, b.titleNoFormatting, k]));
                        if (b.perResultLabels && this.zb && (k = Uh(g, "div", "gs-per-result-labels")[0]))
                            for (t = k[ac]("a"), k = this.Vc(a), q = Kh() ? 1 : 0; w = t[q]; q++)
                                y = w[Bd]("data-refinementLabel"), y != a.J.lc() ? ((F = w[Bd]("label-with-op")) ||
                                (F = y), Jh(w, lh(this, this.Tj, [k, F]))) : $(w, "gs-labelActive");
                                this.Oh && (k = this.Jj, q = V("", "gsc-keeper"), Xa(q, k), R(g, q), ob(q, lh(this, google[v].B[H].Hr, [b, a])));
                                if (d >= a.J.Hj)
                                    0 == d && a.mb.jc == google[v].B.Wd && Pa(a.wa[u], "none"), (b = this.Ua[google[v].Ea.Cb].ua) && b[Jd] == a.wa ? a.wa[Hb](g, b) : R(a.wa, g);
                                else 
                                    a.ib[Hb](g, a.wa)
            }
        a.J.ta && a.J.gwsUrl && a.J[ec] && (d = X("gsc-cursor-box gs-bidi-start-align"), d.dir = "ltr", g = this.Cr(a), d[p](g), R(a.wa, d));
        e ? (rh(a.Jf, th("(" + a.J.results[G] + ")")), a.mb.jc == google[v].B.Wd || a.mb.jc == google[v].B.Be ?
        this.Le(a, !0) : this.Le(a, !1), (e = a.J.$m()) && R(a.ib, e)) : (rh(a.Jf, th("(0)")), this.Zm(a), this.Le(a, !1));
        a.mb.jc = a.mb.Tm;
        this.pd.Um || (d = a.J.Qh) && R(a.ib, d[Ob](!0));
        if (this.zb && l && (0 == a.Ob || a.Ae)) {
            k = this.Vc(a);
            e = 0 == a.Ob && this.Gr(a);
            l = a.Ae && 1 == k.Ya[G];
            if (e || l) {
                if (e && this.Br(a), f.facets && 0 < f.facets[G]) {
                    e && this.Qm(a);
                    g=!1;
                    n = f.facets;
                    if (n[G] > this.xe && 0 < f.display_facets[G]&&-1 !== this.xe)
                        for (n[Dd](function(a, b) {
                            return b[nc] - a[nc]
                        }), d = n[G];
                    d > this.xe;
                    d--)n.pop();
                    for (d = 0; d < n[G]; d++) {
                        f = n[d];
                        b = f.label_with_op;
                        if (!b ||
                        this.Ij)
                            b = f[Fc];
                        e || l&&!a.J.Xd(b) ? this.Rm(k, b, f[Ad]) : (a.J.hc(f[Ad]), this.bn(k), g=!0)
                    }
                    l&&!g && this.bn(k)
                }
            } else if (a.Ae && f.facets && 0 < f.facets[G])
                for (n = f.facets, d = 0; d < n[G]; d++)
                    f = n[d], a.J.Xd(f[Fc]) && a.J.hc(f[Ad]);
            a.Ae && (a.Ae=!1)
        }
        this.zb && this.Bc && this.X && a == this.X.Hb && this.Nm(a);
        this.zb && this.Ir(a);
        this.Nj();
        this.If && this.If(this, a.J)
    }
};
google[v].B[H].onSearchComplete = google[v].B[H].nb;
M = google[v].B[H];
M.Rm = function(a, b, d) {
    var e = a.J, g = e.rj();
    g.sj(b);
    g.hc(d);
    b = new google[v].$a;
    b.Rd = a.mb.Rd;
    this.Zd(g, b, a);
    g.Da(e.Ka);
    e.va && g.Jp(e.va);
    e = a.Ya[a.Ya[G] - 1];
    this.bk(e, a);
    this.nn(e);
    $(e.Ha.Db, "gsc-tabData");
    $(e.Ha.Db, "gsc-tabdInactive");
    return e
};
M.Ir = function(a) {
    var b = this[Sc][cd];
    a = this.Vc(a);
    if (a.Ya)
        for (var d = 0; d < a.Ya[G]; d++) {
            var e = a.Ya[d];
            rh(e.Ha.ra, this.Xm(google[v].U.Vd(e.J.Hl()[r](/\$q/g, b))))
        }
};
M.Vc = function(a) {
    return a.fh || a
};
M.Nm = function(a) {
    a.Lc ? (Mh(a.Lc, "gsc-refinementBlockInvisible"), this.X != a.bh && (this.X = a.bh, this.Ue(this.X))) : a.fh && a.fh.Lc && Mh(a.fh.Lc, "gsc-refinementBlockInvisible")
};
M.Gr = function(a) {
    var b = a.J.context ? a.J.context.facets: null;
    if (!b)
        return 0 < a.Ya[G];
    if (b[G] != a.Ya[G])
        return !0;
    for (var d = 0; d < b[G]; d++) {
        var e = b[d].label_with_op;
        e || (e = b[d][Fc]);
        if (!a.Ya[d].J.Xd(e))
            return !0
    }
    return !1
};
M.Br = function(a) {
    if (0 != a.Ya[G]) {
        var b = a.Lc;
        qh(b);
        b[Jd][xd](b);
        for (a.Lc = null; 0 < a.Ya[G];)
            b = a.Ya.pop(), qh(b[Ic]), this.Cd[xd](b[Ic])
    }
};
M.Cr = function(a) {
    for (var b = X("gsc-cursor"), d = a.J[ec], e = 0; e < d.pages[G]; e++) {
        var g = "gsc-cursor-page";
        e == d.currentPageIndex && (g += " gsc-cursor-current-page");
        g = V(d.pages[e][Fc], g);
        Jh(g, lh(this, google[v].B[H].iw, [a, e]));
        b[p](g)
    }
    return b
};
google[v].B.qq = {
    border: "border",
    borderColor: "border-color",
    borderStyle: "border-style",
    borderWidth: "border-width",
    borderTop: "border-top",
    borderTopColor: "border-top-color",
    borderTopStyle: "border-top-style",
    borderTopWidth: "border-top-width",
    borderRight: "border-right",
    borderRightColor: "border-right-color",
    borderRightStyle: "border-right-style",
    borderRightWidth: "border-right-width",
    borderBottom: "border-bottom",
    borderBottomColor: "border-bottom-color",
    borderBottomStyle: "border-bottom-style",
    borderBottomWidth: "border-bottom-width",
    borderLeft: "border-left",
    borderLeftColor: "border-left-color",
    borderLeftStyle: "border-left-style",
    borderLeftWidth: "border-left-width",
    color: "color",
    cssFloat: "float",
    styleFloat: "float",
    clear: "clear",
    cursor: "cursor",
    display: "display",
    font: "font",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontStyle: "font-style",
    fontWeight: "font-weight",
    height: "height",
    margin: "margin",
    marginTop: "margin-top",
    marginRight: "margin-right",
    marginBottom: "margin-bottom",
    marginLeft: "margin-left",
    overflow: "overflow",
    padding: "padding",
    paddingTop: "padding-top",
    paddingRight: "padding-right",
    paddingBottom: "padding-bottom",
    paddingLeft: "padding-left",
    textAlign: "text-align",
    textDecoration: "text-decoration",
    textTransform: "text-transform",
    verticalAlign: "vertical-align",
    visibility: "visibility",
    width: "width"
};
google[v].B.rq = function(a, b) {
    if (jh("safari") || jh("konqueror"))
        alert("google.search.SearchControl.inlineCurrentStyle is not supported on Safari");
    else {
        var d=!0;
        b && (d = b);
        if (d)
            for (d = 0; d < a[Sb][G]; d++)
                google[v].B.rq(a[Sb][d], !0);
        if (1 == a[Yc]) {
            var e, g, f=!1, d=!1;
            window[pc] ? (e = window[pc](a, null), f = g=!0) : a[Fd] && (e = a[Fd], g=!1, f=!0);
            if (f) {
                for (var k in e)
                    if (google[v].B.qq[k]) {
                        var f = google[v].B.qq[k], l = e[k];
                        "display" == k && "none" == l && (Xa(a, ""), d=!0);
                        "" != e[k] && (g ? a[u].setProperty(f, l) : a[u][Nb](f, l))
                    }
                d&&!g && (a.outerHTML =
                '<div style="display:none"/>')
            }
        }
    }
};
google[v].B.inlineCurrentStyle = google[v].B.rq;
google[v].B[H].jt = function(a) {
    a = a ? a : this[Ic];
    var b = null;
    window[pc] ? b = window[pc](a, null) : a[Fd] ? b = a[Fd] : h[kd][pc] && (b = h[kd][pc](a, null));
    return b ? ta(b[zb], 10) : 300
};
google[v].B[H].eh = function(a, b) {
    this.If = ph(a, b)
};
google[v].B[H].setSearchCompleteCallback = google[v].B[H].eh;
google[v].B[H].Ty = function(a, b) {
    this.gk = ph(a, b)
};
google[v].B[H].setSearchStartingCallback = google[v].B[H].Ty;
google[v].B[H].yo = function(a, b) {
    this.hk = ph(a, b)
};
google[v].B[H].setTrackingCallback = google[v].B[H].yo;
google[v].B[H].El = function(a, b) {
    a.Kj(b);
    var d=!1;
    switch (b) {
    default:
    case google[v].fb.xk:
        a.wa && Pa(a.wa[u], "none");
        break;
    case google[v].fb.wk:
        a.wa && Pa(a.wa[u], "block");
        a.J.Ka != google[v].A.Zb && (d=!0);
        a.J.Da(google[v].A.Zb);
        break;
    case google[v].fb.En:
        a.wa && Pa(a.wa[u], "block"), a.J.Ka != google[v].A.tc && (d=!0), a.J.Da(google[v].A.tc)
    }
    d && (d = this[Sc][cd], d[G] && (this.Ff=!1, this.Nj(), a.mb.jc = google[v].B.Be, this.Ph(a, !0), a.J.qa(d)))
};
google[v].B[H].iw = function(a, b) {
    this.Ff=!1;
    this.Nj();
    this.Ph(a, !0);
    a.mb.jc = google[v].B.Be;
    this.Wg = b + 1;
    if (this.jb && this.jb[vc]()) {
        var d = this.jb.Tg();
        d[google[v][D].Zc] = b + 1;
        this.jb[vb](d)
    }
    this.$k(this.Qe, b + 1);
    a.J.xp(b);
    this.Df && this.bl(this.Wg);
    this.tb.scrollIntoView()
};
google[v].B[H].Pn = function(a) {
    !a || google[v][D].isSupported() && google[v][D].Wv() || a(this);
    a = {};
    this.La || this.hp(this.X, a);
    this.Qe && (a[google[v][D].Zg] = this.Qe);
    this.Wg && (a[google[v][D].Zc] = this.Wg);
    this.jb = new google[v][D](a, ph(this, google[v].B[H].Vv));
    return this.jb[vc]()
};
google[v].B[H].startHistoryManagement = google[v].B[H].Pn;
google[v].B[H].wq = function(a, b) {
    var d = null;
    if (null == a || 0 > a || a >= this.Y[G])
        d = this.X;
    else {
        var e = this.Y[a];
        if (e.J.N && b) {
            var g = b;
            e.J.nd && (g = e.J.nd(b));
            d = this.eq(e, g);
            d || (e.Lc || this.Qm(e), d = this.Rm(e, g, b), d.Ae=!0, d = d.Ha)
        } else 
            d = e.bh || e.Ha
    }
    return d
};
google[v].B[H].Vv = function(a) {
    var b = this.wq(a[google[v][D].uj], a[google[v][D].tj]);
    if (b) {
        if (this.Wb) {
            var d;
            null != a[google[v][D].Yi] && (d = this.ak(a[google[v][D].Yi]));
            null == d && (d = this.Qd);
            this.zk(d);
            this.gi(d, b.lb)
        }
        d = a[google[v][D].Zg] || "";
        a = a[google[v][D].Zc];
        if (null == a || 0 >= a)
            a = 1;
        this.X == b ? d ? this.qa(d, a) : this.Yc() : (this.mf(b, {
            di: d,
            page: a
        }), d || this.Yc())
    }
};
google[v].B[H].hp = function(a, b) {
    for (var d = this.Vc(a.Hb), e = 0; e < this.Y[G]; e++)
        if (this.Y[e] == d) {
            b[google[v][D].uj] = e;
            break
        }
    d = a.lb;
    d.lc && null != d.lc() ? b[google[v][D].tj] = d.lc() : delete b[google[v][D].tj]
};
google[v].Ca = function(a, b, d) {
    google[v].Ca.qm++;
    var e = Dh("gsc-search-box");
    e.acceptCharset = "utf-8";
    var g = null, f = Q["search-uc"], k = Q[v];
    d && d.Gi && d.Yf && (f = "");
    d && (d.buttonText && (k = f = d.buttonText), d.clickableBrandingUrl && (g = "http://www.google.com", "string" == typeof d.clickableBrandingUrl && d.clickableBrandingUrl[Ib](/^http:\/\/[a-z]*\.google\.com/) && (g = d.clickableBrandingUrl), g = Ah(g, null, "_BLANK"), m(g, "gsc-branding-clickable")));
    if (d && d.Gi)
        if ("" == f) {
            var f = google[Ed][ld] + "/css/v2/search_box_icon.png", l = h[s]("input");
            ab(l, "image");
            l.src = f;
            m(l, "gsc-search-button gsc-search-button-v2");
            f = l
        } else 
            f = Fh(f, "gsc-search-button");
    else 
        f = Eh(f, "gsc-search-button");
    this.Ei = f;
    jb(this.Ei, k);
    Ua(this, Gh(null, "gsc-input", null));
    cb(this[Sc], "search");
    jb(this[Sc], k);
    f = this[Sc];
    d && d.Gi && d.Yf && (m(this[Sc], ""), Aa(this[Sc][u], "100%"), Ba(this[Sc][u], "0 2px 0 0"), this.pm = X("gsc-input-box"), this.pm.id = "gsc-iw-id" + google[v].Ca.qm, R(this.pm, this[Sc]), f = this.pm);
    d && d.Gi && (this[Sc].id = "gsc-i-id" + google[v].Ca.qm);
    l = h[s]("input");
    ab(l, "hidden");
    cb(l, "bgresponse");
    l.id = "bgresponse";
    k = wh(null, null, "gsc-search-box");
    R(e, k);
    k = xh(k, 0);
    this.mm = yh(k, "gsc-input");
    var n = yh(k, "gsc-search-button");
    R(this.mm, f);
    R(this.mm, l);
    R(n, this.Ei);
    f = wh(null, null, "gsc-branding");
    R(e, f);
    l = "gsc-branding-img-noclear";
    n = xh(f, 0);
    this.userDefinedCell = yh(n, "gsc-branding-user-defined");
    var q = yh(n, "gsc-branding-text"), f = yh(n, l), t = V(Q["powered-by"], "gsc-branding-text"), w;
    w = google[Ed][ld] + "/css/small-logo.png";
    oh() ? (l = X(l), l[u].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
    w + '")', Aa(l[u], "51px"), Qa(l[u], "15px")) : l = zh(w, null, null, l);
    w = l;
    R(q, t);
    g ? (R(g, w), R(f, g)) : R(f, w);
    d && d.Zs || Pa(n[u], "none");
    this.Di = e;
    qh(b);
    R(b, this.Di);
    a && (l = "gsc-branding-img", this.nm = V(Q.blank, "gsc-clear-button"), jb(this.nm, Q["clear-results"]), a = yh(k, "gsc-clear-button"), R(a, this.nm), m(f, l), m(w, l))
};
Rd("google.search.SearchForm", google[v].Ca, void 0);
google[v].Ca.Ik = ("https:" == h[mc][xc] ? "https:" : "http:") + "//www.google.com/cse/intl/" + google[v][Kd] + "/images/google_custom_search_watermark.gif";
google[v].Ca.et = "#FFFFFF " + google[v].U.Tq + " no-repeat";
google[v].Ca.Vw = function() {
    return "#FFFFFF url(" + google[v].Ca.Ik + ") " + google[v].U.Tq + " no-repeat"
};
google[v].Ca.qm = 0;
google[v].Ca[H].Ry = function(a, b) {
    this.ir = lh(this, this.Tx, [this]);
    this.Dj = lh(a, b, [this]);
    this.Di.onsubmit = this.ir;
    ob(this.Ei, this.ir)
};
google[v].Ca[H].setOnSubmitCallback = google[v].Ca[H].Ry;
google[v].Ca[H].lo = function(a, b) {
    ob(this.nm, lh(a, b, [this]))
};
google[v].Ca[H].setOnClearCallback = google[v].Ca[H].lo;
google[v].Ca[H].Tx = function() {
    var a = this.mm[Db], b = this[Sc][cd];
    this.Dj && this.Dj();
    if (oh()) {
        var d = this, e;
        e = 8 * b[G] >= a ? a - 6 : "99%";
        window[gc](function() {
            Aa(d[Sc][u], e)
        }, 1)
    }
    return !1
};
google[v].Ca[H].qa = function(a) {
    a && Ya(this[Sc], a);
    this.Dj && this.Dj()
};
google[v].Ca[H].execute = google[v].Ca[H].qa;
google[v].I = function(a, b) {
    this.Zn = (new Date)[Wb]();
    google[v].B[zd](this);
    b = b || {};
    this.pd = google[v].A.xt(b.forceV2LookAndFeel);
    this.zb=!0;
    this.eb = null != b._enableApiary_?!!b._enableApiary_ : !0;
    this.Da(b.resultSetSize || google[v].A.tc);
    var d = {};
    if (b.adoptions)
        for (var e in b.adoptions)
            b.adoptions[oc](e) && (d[e] = b.adoptions[e]);
    d.iframes=!0;
    d.adtest = b.adtest || null;
    d.channel = b.adchannel || null;
    b.enableMobileLayout && (d.includeSideAds=!1, d.numTopAds = 2);
    window.innerWidth < google[v].I.ut && (d.includeSideAds=!1, d.numTopAds =
    2);
    this.Vg(b.adclient || "", d);
    this.Rh = b.autoCompleteOptions;
    this.xo = google[v].I.to(a, this.Rh);
    this.Yh = a;
    this.Yh || (this.Yh = {
        crefUrl: "http://www.google.com/coop/tools/autocse?referer=" + window[mc]
    }, this.Mr=!0);
    this.mk = google[v].I.An;
    this.Ij = b.defaultToRefinement;
    this.Df = (this.wo = b.bookmarkOptions) ? this.wo.showBookmarkLink ||!1 : !1;
    this.Wa = null;
    if (!b.disableWebSearch ||!b.enableImageSearch) {
        var g = {};
        b[google[v].A.Ja] && (g[google[v].A.Ja] = b[google[v].A.Ja]);
        b[google[v].A.Xa] && (g[google[v].A.Xa] = b[google[v].A.Xa]);
        if (b.webSearchOptions)
            for (e in b.webSearchOptions)
                g[e] = b.webSearchOptions[e];
        this.wt(g)
    }
    this.Za = null;
    if (b.enableImageSearch) {
        d = {};
        b[google[v].A.Xa] && (d[google[v].A.Xa] = b[google[v].A.Xa]);
        if (b.imageSearchOptions)
            for (e in b.imageSearchOptions)
                d[e] = b.imageSearchOptions[e];
        this.vt(d);
        b.defaultToImageSearch && this.Wa && (this.mk = google[v].I.zn)
    }
    this.Wa && this.Za && this.hc({
        web: Q.web,
        image: Q.image
    });
    b.googleAnalyticsOptions && b.googleAnalyticsOptions.queryParameter && (this.Zk = b.googleAnalyticsOptions, this.yo(null,
    google[v].I.yt));
    b.enableOrderBy && (this.Lm=!0, this.Tc = b.orderByOptions && b.orderByOptions.keys && 0 < b.orderByOptions.keys[G] ? b.orderByOptions.keys : [{
        key: "",
        label: Q["order-by-relevance"]
    }, {
        key: "date",
        label: Q["order-by-date"]
    }
    ], void 0 !== g && b.orderByOptions && g["restrict-extended"] && void 0 !== g["restrict-extended"][Dd] && (this.Qd = this.ak(g["restrict-extended"][Dd]) || 0), void 0 == this.Qd && (this.Qd = 0));
    this.Sm = b.overlayResults?!0 : !1;
    this.Km = b.enableRichSnippets?!0 : !1;
    this.$n=!0
};
Rd("google.search.CustomSearchControl", google[v].I, void 0);
gh(google[v].I, google[v].B);
google[v].I.Ul = (new Date)[Wb]();
google[v].I.ve = null;
google[v].I.Mq=!1;
google[v].I.Wo = function() {
    var a = google[v].I;
    a.Mq || (a.ve = new Image, za(a.ve, a.ve.onerror = a.ve.onabort = a.ve.ontimeout = function() {
        a.ve = null
    }), a.ve.src = "https://www.googleapis.com/generate_204", a.Mq=!0)
};
google[v].A.Jk() && google[v].I.Wo();
google[v].I[H].wt = function(a) {
    this.Wa || (this.Wa = new google[v].G, this.Wa.Ub(this.Yh), this.Wa.Qi = Q["custom-search"], this.Wa.eb = this.eb, this.Zd(this.Wa), a && (a.resultSetSize && this.Wa.Da(a.resultSetSize), a[google[v].A.Ja] && this.Wa.Ra(google[v].A.Ja, a[google[v].A.Ja]), a[google[v].A.Xa] && this.Wa.Ra(google[v].A.Xa, a[google[v].A.Xa]), a.linkTarget && this.Wa.Oa(a.linkTarget), a.queryAddition && this.Wa.Fb(a.queryAddition)))
};
google[v].I[H].vt = function(a) {
    this.Za || (this.Za = new google[v].C, this.Za.Ub(this.Yh), this.Za.eb = this.eb, this.Zd(this.Za), a && (a.resultSetSize && this.Za.Da(a.resultSetSize), this.Za.Te(a.layout || google[v].D.Hd), a[google[v].A.Xa] && this.Za.Ra(google[v].A.Xa, a[google[v].A.Xa]), a[google[v].A.Ja] && this.Za.Ra(google[v].A.Ja, a[google[v].A.Ja]), a.linkTarget && this.Za.Oa(a.linkTarget), a.queryAddition && this.Za.Fb(a.queryAddition)))
};
google[v].I[H].Ly = function(a) {
    this.xo = "string" == typeof a ? a : null
};
google[v].I[H].setAutoCompletionId = google[v].I[H].Ly;
google[v].I.to = function(a, b) {
    var d = "string" == typeof a ? a: null;
    if (b) {
        var e = {
            prefix: 0,
            ordered: 3,
            any: 1
        }, g = b.matchType;
        g && e[g] && (d = d + "+qptype:" + e[g]);
        if (e = b.validLanguages)
            for (e = e[hc](","), g = 0; g < e[G]; ++g)
                e[g] && (d = d + "+lang:" + e[g])
    }
    return d
};
google[v].I[H].lj = function() {
    return this.xo
};
google[v].I[H].getPartnerId = google[v].I[H].lj;
google[v].I.qy = function(a, b, d, e, g, f, k, l) {
    return google[v].I.Rq(a, b, d, {
        saytActor: e,
        callback: g,
        maxCompletions: f,
        styleOptions: l
    })
};
google[v].I.attachAutoCompletion = google[v].I.qy;
google[v].I.Rq = function(a, b, d, e) {
    if (d instanceof google[v].B && window[Ac])
        return window[Ac].log("We no longer support attachAutoCompletionWithOptions for SearchControl object"), {};
    a = google[v].I.to(a, e);
    e = e || {};
    var g = "string" == typeof d ? bi(d): d;
    b = bi(b);
    if (!g)
        for (var f = b; f;)
            f = f[Jd], ai(f) && (g = f);
    var f = eh(), k = {
        interfaceLanguage: google[v][Kd],
        saytSubmit: e.saytActor,
        maxSuggestions: e.maxCompletions,
        maxPromotions: e.maxPromotions,
        styleOptions: e.styleOptions,
        isLoggingWithHiddenFormFields: e.isLoggingWithHiddenFormFields,
        saytKeyboardNavigationEnabled: e.saytKeyboardNavigationEnabled,
        saytExtraParameters: e.saytExtraParameters
    };
    (e = e.searchButton ? bi(e.searchButton) : null) && ("submit" != e[jd] ? k.searchButton = e : window[Ac] && window[Ac].warn("Cannot associate searchButton with a button of type submit."));
    if (k.isLoggingWithHiddenFormFields&&!k.searchButton)
        return window[Ac] && window[Ac].warn('The "searchButton" option is required when "isLoggingWithHiddenFormFields" is true.'), {};
    e = d && (d.execute || d[Uc]);
    ai(g) ? (k.isLoggingWithHiddenFormFields = k.isLoggingWithHiddenFormFields || ei(ci(g.action)),
    f.jl(g, b, a, k)) : f.Su(e ? ph(d, e) : function() {}, b, a, k);
    return {
        getInputQuery: f.cb,
        prefillQuery: f.Sc
    }
};
google[v].I.attachAutoCompletionWithOptions = google[v].I.Rq;
google[v].I[H].xy = function(a) {
    if (this.Ud) {
        if (a)
            throw "Please use constructor of CustomSearchControl to pass in additional options.";
        this.Td.da(!1)
    }
};
google[v].I[H].enableAutoCompletion = google[v].I[H].xy;
google[v].I[H].yu = function() {
    var a = (new Date)[Wb]();
    if (window.googleLT_ && 1 == window.googleLT_%100) {
        var b = google[v].I.Ul - window.googleLT_, d = this.Zn - window.googleLT_, a = a - window.googleLT_;
        0 < b && 0 < d && 0 < a && google[Ed].recordCsiStat(["asa_cse"], ["cl." + b, "cc." + d, "cd." + a])
    }
};
google[v].I[H].Rf = function(a, b) {
    var d = b;
    d || (d = new google[v].pa);
    d.Yo(google[v].B.fc);
    this.Mr && 1 == this.Y[G] && (this.lu=!0);
    this.Ne(google[v].B.To);
    d.ec != google[v].B.Sf && this.eb && google[v].I.Wo();
    google[v].B[H].Rf[zd](this, a, d);
    var d = this.La ? "gsc-control-searchbox-only": "gsc-control-cse", e = this[Ic];
    this.La || (e = X(), this[Ic][Jd] && this[Ic][Jd][Hb](e, this[Ic]), R(e, this[Ic]), m(this[Ic], "gsc-control-wrapper-cse"));
    m(e, d);
    $(e, d + "-" + google[v][Kd]);
    this.yu();
    if (this.Wm) {
        d = google[v].F[I].pl(window[mc][v]) || {};
        e = ta(d[Oc], 10);
        if (ha(e) || 0 >= e)
            e = 1;
        this.qa(d.query, e, {
            bm_req: "1"
        })
    }
};
google[v].I[H].draw = google[v].I[H].Rf;
google[v].I[H].Ll = function(a, b, d, e, g) {
    if (this.La)
        this.wp();
    else {
        var f = this.tb[Db];
        Mh(this.kc, "gsc-thinWrapper");
        this.$n && (f = this.Kv(), this.$n=!1);
        this.Vm = f;
        f < google[v].I.Gv ? this.wd=!1 : f < google[v].I.Iv ? this.Vg(this.Dd, {
            includeVerticalAds: !1
        }) : (f = {
            includeVerticalAds: f >= google[v].I.Hv
        }, this.Cp && (f.numTopAds = google[v].I.Jv), this.Vg(this.Dd, f));
        if ((new Date)[Wb]() - this.Zn < google[v].I.Fv && this.wd)
            try {
                var k = xa(window[mc][zc])[r](/\+/g, " "), l = xa(a)[r](/\+/g, " ");
                this.wd =- 1 != k[dd](l)
            } catch (n) {}
        google[v].B[H].Ll[zd](this,
        a, b, d, e, g)
    }
};
google[v].I[H].Kv = function() {
    var a = uh(google[v].I.dx());
    a[u].fontFamily = "arial";
    a[u].fontSize = "16px";
    gb(a[u], "hidden");
    R(this.tb, a);
    var b = this.tb[Db];
    this.tb[xd](a);
    return b
};
google[v].I.dx = function() {
    for (var a = "", a = "a a a a a ", b = 5; 80 > b; b*=2)
        a += a;
    return a
};
google[v].I[H].hc = function(a) {
    "string" == typeof a ? this.Wa ? this.Wa.hc(a) : this.Za && this.Za.hc(a) : (a.web && this.Wa && this.Wa.hc(a.web), a.image && this.Za && this.Za.hc(a.image))
};
google[v].I[H].setUserDefinedLabel = google[v].I[H].hc;
google[v].I[H].Zd = function(a, b, d) {
    google[v].B[H].Zd[zd](this, a, b, d);
    a.jf = "gcsc"
};
google[v].I[H].addSearcher = google[v].I[H].Zd;
google[v].I[H].wy = function() {
    this.Vg("", {
        numTopAds: 0,
        numSideAds: 0,
        _includeBottomAds_: !1
    });
    this.Ko=!1
};
google[v].I[H].disableAds = google[v].I[H].wy;
google[v].I[H].Oy = function() {
    this.Cp=!0
};
google[v].I[H].setMoreAds = google[v].I[H].Oy;
google[v].I[H].Cy = function() {
    return this.Za
};
google[v].I[H].getImageSearcher = google[v].I[H].Cy;
google[v].I[H].Gy = function() {
    return this.Wa
};
google[v].I[H].getWebSearcher = google[v].I[H].Gy;
google[v].I[H].qr = function(a) {
    var b = a.oa;
    "web" == b && (b = "");
    a.N && a.lc() && (b = b ? b + ":" + a.lc() : a.lc());
    return b
};
google[v].I[H].getTrackingCategory = google[v].I[H].qr;
google[v].I.yt = function(a, b, d) {
    var e = h[mc];
    d = [e.pathname, e[v], e[v] ? "&": "?", c(a.Zk.queryParameter), "=", c(d)];
    a.Zk.categoryParameter && (b = a.qr(b)) && d[B]("&", c(a.Zk.categoryParameter), "=", c(b));
    window._gaq && "function" == typeof window._gaq[B] ? window._gaq[B](["_trackPageview", d[Nd]("")]) : window[Ac] && window[Ac].log("Google Analytics tracking was not correctly setup.")
};
google[v].I.iy = "";
google[v].I.AUTO_PUBID = google[v].I.iy;
google[v].I.An = 0;
google[v].I.zn = 1;
google[v].I.Gv = 250;
google[v].I.Iv = 500;
google[v].I.Hv = 795;
google[v].I.Fv = 500;
google[v].I.ut = 480;
google[v].I[H].Cp=!1;
google[v].I.Jv = 4;
google[v].I.Uw = new RegExp('^url\\("?' + google[v].Ca.Ik + '"?\\)$');
google[v].xa = function() {
    google[v].A[zd](this);
    this.oa = "video";
    this.Gc = "/GvideoSearch";
    this.sc = "http://video.google.com/videosearch";
    this.Lb=!1;
    this.of=!0;
    this.Fc = ph(this, this.hd);
    this.Se = "gsc-videoConfig";
    this.ma = null
};
Rd("google.search.VideoSearch", google[v].xa, void 0);
gh(google[v].xa, google[v].A);
google[v].xa.Va = "GvideoSearch";
google[v].xa.RESULT_CLASS = google[v].xa.Va;
google[v].xa.Z = [];
google[v].xa.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].xa.Z, f, b);
    google[v].xa.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].xa.RawCompletion = google[v].xa.Sa;
google[v].xa[H].Ac = function(a, b) {
    return google[v].A.Rb(google[v].xa.Z, [this, a, b])
};
google[v].xa[H].dc = function(a, b, d) {
    b = this.Pc(null == b ? "google.search.VideoSearch.RawCompletion" : b, d);
    this.Ma && (a = a + " " + this.Ma);
    a = "&q=" + c(a);
    this.Lb && (a += "&scoring=d");
    this.ta = a;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    return b + a
};
google[v].xa[H].Qa = function(a) {
    a.html && delete a.html;
    var b = X(this.Ld());
    $(b, "gs-result");
    var d = X("gs-image-box"), e = X("gs-text-box"), g = wh(), f = xh(g, 0), k = yh(f, "gs-image-box"), f = yh(f, "gs-text-box");
    R(k, d);
    R(f, e);
    R(b, g);
    g = google[v].A.Yb(a.tbWidth, a.tbHeight, this.va);
    g = zh(a.tbUrl, g[zb], g[Hc], "gs-image");
    k = Ah(a.url, null, this.ya(), "gs-image");
    m(k, "gs-image");
    R(k, g);
    R(d, k);
    d = Bh(a.url, a[pd], this.ya(), "gs-title");
    R(e, d);
    d = V(a[Cb], "gs-snippet");
    oh() && Qa(d[u], "2.6em");
    R(e, d);
    d = V(this.vf(new Date(a.published)),
    "gs-publishedDate");
    R(e, d);
    d = Bh("http://" + a.publisher, a.publisher, this.ya(), "gs-publisher");
    R(e, d);
    a.html = b;
    this.Mc(a.html)
};
google[v].xa[H].createResultHtml = google[v].xa[H].Qa;
google[v].xa.vy = function(a, b) {
    var d = null;
    if (a.playUrl && "" != a.playUrl) {
        var d = a.playUrl, e = "gsc-video-player";
        b && (e = b);
        if (jh("opera")) {
            var g = h[s]("object");
            m(g, e);
            g[Nb]("type", "application/x-shockwave-flash");
            g[Nb]("data", d)
        } else 
            g = h[s]("embed"), m(g, e), g[Nb]("type", "application/x-shockwave-flash"), g[Nb]("src", d), a.videoType ? "Google" == a.videoType ? g[Nb]("bgcolor", "#000000") : g[Nb]("wmode", "transparent") : g[Nb]("bgcolor", "#000000");
        d = X(b);
        d[p](g)
    }
    return d
};
google[v].xa.createPlayer = google[v].xa.vy;
google[v].xa[H].Gb = function(a) {
    this.Lb = a == google[v].A.kd?!0 : !1
};
google[v].xa[H].setResultOrder = google[v].xa[H].Gb;
google[v].xa[H].hd = function(a, b) {
    if (b) {
        if (null == this.ma) {
            var d = X("gsc-configSetting");
            this.ma = Hh(null, "0", this.Lb, "gsc-configSettingCheckbox");
            R(d, this.ma);
            R(d, V(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
            var e = X("gsc-configSettingSubmit");
            R(e, Eh(Q[rc], "gsc-configSettingSubmit"));
            R(d, e);
            R(a, d)
        } else 
            Fa(this.ma, this.Lb);
        this.ma[Jb]()
    } else 
        this.ma && (this.ma[fc] ? this.Gb(google[v].A.kd) : this.Gb(google[v].A.qh))
};
google[v].K = function() {
    google[v].A[zd](this);
    this.oa = "web";
    this.Gc = "/GwebSearch";
    this.sc = "http://www.google.com/search";
    this.Ia = this.gd = this.he = null;
    this.fa = {};
    this.P = new google[v].uc
};
Rd("google.search.WebSearch", google[v].K, void 0);
gh(google[v].K, google[v].A);
google[v].K.Va = "GwebSearch";
google[v].K.RESULT_CLASS = google[v].K.Va;
google[v].K.xf = "cx";
google[v].K.cxRestriction_CX = google[v].K.xf;
google[v].K.Qc = "cref";
google[v].K.cxRestriction_CREF = google[v].K.Qc;
google[v].K.Em = "none";
google[v].K.cxRestriction_NONE = google[v].K.Em;
google[v].K.Z = [];
google[v].K.de = {
    as_dt: !0,
    as_epq: !0,
    as_eq: !0,
    as_lq: !0,
    as_nlo: !0,
    as_nhi: !0,
    as_oq: !0,
    as_q: !0,
    as_qdr: !0,
    as_rq: !0,
    as_sitesearch: !0,
    cr: !0,
    c2coff: !0,
    filter: !0,
    gl: !0,
    hq: !0,
    lr: !0,
    query: !0,
    richsnippet: !0,
    sort: !0,
    usg: !0
};
google[v].K.Gl = 20;
google[v].K.me = "data-cturl";
google[v].K.se = "data-ctorig";
google[v].K.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].K.Z, f, b);
    google[v].K.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].K.RawCompletion = google[v].K.Sa;
google[v].K[H].rj = function() {
    var a = new google[v].K;
    this.Si(a);
    a.Ia = this.Ia;
    a.fa = this.fa;
    a.P = this.P[tc]();
    a.N = this.N;
    return a
};
google[v].K[H].xj = function(a) {
    var b = google[v].A.Rb(google[v].K.Z, [this, null, null]);
    google[v].K.Sa(b, a, 200, void 0, 200)
};
google[v].K[H].renderJson = google[v].K[H].xj;
M = google[v].K[H];
M.nd = function(a) {
    a = Vh(a);
    return a[r](/\s+/g, "_")[Od]()
};
M.Xd = function(a) {
    return this.N ? this.P.Ga == this.nd(a) : !1
};
M.zc = function(a) {
    return this.N && this.P.Ga ? a[r](new RegExp(" more:" + this.P.Ga + "$"), "") : a
};
M.Ac = function(a, b) {
    return google[v].A.Rb(google[v].K.Z, [this, a, b])
};
M.qa = function(a, b, d) {
    window[Ac] && window[Ac].log && window[Ac].log("The Google Web Search API has been officially deprecated. For more information on its deprecation, see https://developers.google.com/web-search/. We suggest you migrate to the Google Custom Search API. (see https://developers.google.com/custom-search/)");
    return google[v].A[H].qa[zd](this, a, b, d)
};
google[v].K[H].execute = google[v].K[H].qa;
google[v].K[H].dc = function(a, b, d) {
    b = null == b ? "google.search.WebSearch.RawCompletion" : b;
    a = [a];
    this.Ma && a[B](this.Ma);
    a = a[Eb](this.P.qe())[Nd](" ");
    if (this.N && this.he) {
        var e = this.he, e = e[r](/__HL__/, google[v][Kd]);
        this.gd = e = e[r](/__QUERY__/, c(a))
    }
    var e = this.P.pe(), g = [], f;
    for (f in e)
        g[B](f + "=" + e[f]);
    f = "&" + g[Nd]("&");
    f += "&q=" + c(a);
    this.Ia && (f += "&safe=" + this.Ia);
    this.fa && (a = Wh(this.fa)) && (f += "&" + a);
    b = this.Pc(b, d);
    b += f;
    this.ta = f;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    window[qd][Ed].GoogleLocale && (b = this.eb &&
    this.N ? b + ("&googlehost=" + c(window[qd][Ed].GoogleLocale)) : b + ("&gl=" + c(window[qd][Ed].GoogleLocale)));
    return b
};
google[v].K[H].Pf = function(a) {
    a.html && delete a.html;
    var b;
    if (a[jd] && "SPELL_CORRECTED_RESULTS" == a[jd]) {
        b = X("gs-result");
        var d = uh(Q["showing-results-for"] + " ", "gs-spelling"), e = h[s]("a");
        Xa(e, google[v].U.Cf(this.zc(a.correctedAnchor)));
        d[p](e);
        b[p](d);
        d = uh(Q["search-instead-for"] + " ", "gs-spelling");
        $(d, "gs-spelling-original");
        e = h[s]("a");
        Xa(e, google[v].U.Cf(this.zc(a.originalAnchor)));
        d[p](e)
    } else 
        b = uh(Q.dym + " ", "gs-spelling"), $(b, "gs-result"), d = h[s]("a"), Xa(d, google[v].U.Cf(this.zc(a[Ad])));
    b[p](d);
    a.html = b
};
google[v].K[H].createSpellingHtml = google[v].K[H].Pf;
google[v].K[H].Ah = function(a, b) {
    var d = V(google[v].U.Vd(a.visibleUrl), "gs-visibleUrl");
    R(b, d);
    $(d, "gs-visibleUrl-short");
    d = V(google[v].U.Vd(a.url), "gs-visibleUrl");
    R(b, d);
    $(d, "gs-visibleUrl-long")
};
google[v].K[H].zh = function(a, b) {
    var d = yh(a, "gs-promotion-image-cell"), e = X("gs-promotion-image-box");
    R(e, b);
    R(d, e)
};
google[v].K[H].Zh = function(a, b) {
    a.html && delete a.html;
    var d = X("gs-promotion");
    $(d, "gs-result");
    var e = wh(0, 1, "gs-promotion-table"), g = xh(e, 0), f;
    R(d, e);
    var k;
    a.image && (e = a.image.url[r]("resize_w=40", "resize_w=60"), e = e[r]("resize_h=40", "resize_h=60"), e = zh(e, null, null, "gs-promotion-image"), a.url && (f = Ah(a.url, "", this.ya()), a.clicktrackUrl && google[v].K.md(f, a.clicktrackUrl, a.url), R(f, e), e = f), k = e, b.rf || google[v].K[H].zh(g, k));
    e = null;
    a.clicktrackUrl && (e = {}, e[google[v].K.me] = a.clicktrackUrl, e[google[v].K.se] =
    a.url);
    e = Bh(a.url, a[pd], this.ya(), "gs-title", void 0, e);
    a.titleRight && (f = vh("", "gs-promotion-title-right"), Xa(f, " " + a.titleRight), R(e, f));
    e.dir = google[v].U.rh(e[$c]);
    $(e, "gs-bidi-start-align");
    f = yh(g, b.rf && a.image ? "" : "gs-promotion-text-cell");
    R(f, e);
    b.Zi && google[v].K[H].Ah(a, f);
    var l;
    b.rf && a.image ? (e = wh(0, 0, "gs-promotion-table-snippet-with-image"), g = xh(e, 0), R(f, e), google[v].K[H].zh(g, k), l = yh(g, "gs-promotion-text-cell-with-image")) : a.bodyLines && (l = X(), R(f, l));
    if (a.bodyLines) {
        g = a.bodyLines;
        k = "right" ==
        a.bodyLinkAlignment;
        for (var n = 0; n < g[G]; n++) {
            var q = g[n], t = q[pd], w = q.url, y = q.visibleUrl, e = X("gs-snippet"), F;
            t && (F = vh(""), Xa(F, t));
            var x;
            w && y && (x = Ah(w, "", this.ya()), q.clicktrackUrl && google[v].K.md(x, q.clicktrackUrl, w), q = vh("", "gs-title"), Xa(q, y), R(x, q));
            F && k && (R(e, F), x && R(e, th(" ")));
            x && R(e, x);
            F&&!k && (x && R(e, th(" ")), R(e, F));
            e.dir = google[v].U.rh(e[$c]);
            $(e, "gs-bidi-start-align");
            R(l, e)
        }
    }
    b.Zi || google[v].K[H].Ah(a, f);
    a.html = d
};
google[v].K[H].createPromotionHtml = google[v].K[H].Zh;
google[v].K[H].Kh = function(a) {
    delete a.html;
    0 < a.display_facets[G] && (a.html = google[v].ga.ka("facets", a))
};
google[v].K[H].createFacetResultHtml = google[v].K[H].Kh;
google[v].K[H].Qa = function(a) {
    a.html && delete a.html;
    nb(a, this.ya() || void 0);
    jb(a, a[pd] || a.visibleUrl);
    a.html = google[v].ga.ka("webResult", a, {
        isLabelUrl: Kh()
    });
    if (a.clicktrackUrl)
        for (var b = a.html[Lb]; b; b = b[Vb])
            if (1 == b[Yc]) {
                "a" == b[Cc][Od]() && b[zc] == a.unescapedUrl && google[v].K.md(b, a.clicktrackUrl, a.unescapedUrl);
                for (var d = b[ac]("a"), e = 0, g; g = d[e]; e++)
                    g[zc] == a.unescapedUrl && google[v].K.md(g, a.clicktrackUrl, a.unescapedUrl)
            }
    this.Mc(a.html)
};
google[v].K[H].createResultHtml = google[v].K[H].Qa;
google[v].K.md = function(a, b, d) {
    a[Nb](google[v].K.me, b);
    a[Nb](google[v].K.se, d)
};
google[v].K[H].Ub = function(a, b, d) {
    this.rd = null;
    this.P = google[v].yc.kj(a, b);
    this.P instanceof google[v].Rc && (this.N=!0, this.P[jd]() == google[v].K.Qc && (this.rd = Q["linked-cse-error-results"]), d && d[Ib](/__HL__/) && d[Ib](/__QUERY__/) && (this.he = d))
};
google[v].K[H].setSiteRestriction = google[v].K[H].Ub;
M = google[v].K[H];
M.vh = function() {
    return this.N ? this.P[jd]() : null
};
M.wh = function() {
    return this.N ? this.P.yf : null
};
M.lc = function() {
    return this.N ? this.P.Ga : null
};
M.sj = function(a) {
    this.N && a && this.P.zj(a)
};
M.Ra = function(a, b) {
    a == google[v].A.Xa && (this.Ia = b ? b == google[v].A.Xf || b == google[v].A.Wf || b == google[v].A.Fl ? b : null : null);
    if (a == google[v].A.Ja)
        if (b)
            for (var d in b) {
                var e = b[d];
                google[v].K.de[d] && (this.fa[d] = e)
            } else 
                this.fa = {}
};
google[v].K[H].setRestriction = google[v].K[H].Ra;
google[v].K[H].Da = function(a) {
    ha(ta(a, 10)) || (a = ta(a, 10));
    this.N && (0 < a && a <= google[v].K.Gl || google[v].A.Hc == a) ? this.Ka = a : google[v].A[H].Da[zd](this, a)
};
google[v].K[H].setResultSetSize = google[v].K[H].Da;
google[v].K[H].Oa = function(a) {
    google[v].A[H].Oa[zd](this, a)
};
google[v].K[H].setLinkTarget = google[v].K[H].Oa;
google[v].K[H].Fb = function(a) {
    google[v].A[H].Fb[zd](this, a)
};
google[v].K[H].setQueryAddition = google[v].K[H].Fb;
google[v].G = function() {
    google[v].A[zd](this);
    this.oa = "web";
    this.Gc = "/GcustomwebSearch";
    this.sc = "http://www.google.com/search";
    this.Ia = this.gd = this.he = null;
    this.fa = {};
    this.P = new google[v].uc
};
Rd("google.search.CustomWebSearch", google[v].G, void 0);
gh(google[v].G, google[v].A);
google[v].G.Va = "GcustomwebSearch";
google[v].G.RESULT_CLASS = google[v].G.Va;
google[v].G.xf = "cx";
google[v].G.cxRestriction_CX = google[v].G.xf;
google[v].G.Qc = "cref";
google[v].G.cxRestriction_CREF = google[v].G.Qc;
google[v].G.Em = "none";
google[v].G.cxRestriction_NONE = google[v].G.Em;
google[v].G.Z = [];
google[v].G.de = {
    as_dt: !0,
    as_epq: !0,
    as_eq: !0,
    as_lq: !0,
    as_nlo: !0,
    as_nhi: !0,
    as_oq: !0,
    as_q: !0,
    as_qdr: !0,
    as_rq: !0,
    as_sitesearch: !0,
    cr: !0,
    c2coff: !0,
    filter: !0,
    gl: !0,
    hq: !0,
    lr: !0,
    query: !0,
    richsnippet: !0,
    sort: !0,
    usg: !0
};
google[v].G.Gl = 20;
google[v].G.me = "data-cturl";
google[v].G.se = "data-ctorig";
google[v].G.Sa = function(a, b, d, e, g) {
    var f = 0;
    a && (f = ta(a, 10));
    a = google[v].A.Kc(google[v].G.Z, f, b);
    google[v].G.Z[f] = null;
    a.Jc.nb(b, d, e, g, a.Ic)
};
google[v].G.RawCompletion = google[v].G.Sa;
google[v].G[H].rj = function() {
    var a = new google[v].G;
    this.Si(a);
    a.Ia = this.Ia;
    a.fa = this.fa;
    a.P = this.P[tc]();
    a.N = this.N;
    return a
};
google[v].G[H].xj = function(a) {
    var b = google[v].A.Rb(google[v].G.Z, [this, null, null]);
    google[v].G.Sa(b, a, 200, void 0, 200)
};
google[v].G[H].renderJson = google[v].G[H].xj;
M = google[v].G[H];
M.nd = function(a) {
    a = Vh(a);
    return a[r](/\s+/g, "_")[Od]()
};
M.Xd = function(a) {
    return this.N ? this.P.Ga == this.nd(a) : !1
};
M.zc = function(a) {
    return this.N && this.P.Ga ? a[r](new RegExp(" more:" + this.P.Ga + "$"), "") : a
};
M.Ac = function(a, b) {
    return google[v].A.Rb(google[v].G.Z, [this, a, b])
};
M.dc = function(a, b, d) {
    b = null == b ? "google.search.CustomWebSearch.RawCompletion" : b;
    a = [a];
    this.Ma && a[B](this.Ma);
    a = a[Eb](this.P.qe())[Nd](" ");
    if (this.N && this.he) {
        var e = this.he, e = e[r](/__HL__/, google[v][Kd]);
        this.gd = e = e[r](/__QUERY__/, c(a))
    }
    var e = this.P.pe(), g = [], f;
    for (f in e)
        g[B](f + "=" + e[f]);
    f = "&" + g[Nd]("&");
    f += "&q=" + c(a);
    this.Ia && (f += "&safe=" + this.Ia);
    this.fa && (a = Wh(this.fa)) && (f += "&" + a);
    b = this.Pc(b, d);
    b += f;
    this.ta = f;
    d && 0 != d && (this.ta = this.ta + "&start=" + d);
    window[qd][Ed].GoogleLocale && (b = this.eb && this.N ?
    b + ("&googlehost=" + c(window[qd][Ed].GoogleLocale)) : b + ("&gl=" + c(window[qd][Ed].GoogleLocale)));
    return b
};
M.Pf = function(a) {
    a.html && delete a.html;
    var b;
    if (a[jd] && "SPELL_CORRECTED_RESULTS" == a[jd]) {
        b = X("gs-result");
        var d = uh(Q["showing-results-for"] + " ", "gs-spelling"), e = h[s]("a");
        Xa(e, google[v].U.Cf(this.zc(a.correctedAnchor)));
        d[p](e);
        b[p](d);
        d = uh(Q["search-instead-for"] + " ", "gs-spelling");
        $(d, "gs-spelling-original");
        e = h[s]("a");
        Xa(e, google[v].U.Cf(this.zc(a.originalAnchor)));
        d[p](e)
    } else 
        b = uh(Q.dym + " ", "gs-spelling"), $(b, "gs-result"), d = h[s]("a"), Xa(d, google[v].U.Cf(this.zc(a[Ad])));
    b[p](d);
    a.html = b
};
google[v].G[H].createSpellingHtml = google[v].G[H].Pf;
google[v].G[H].Ah = function(a, b) {
    var d = V(google[v].U.Vd(a.visibleUrl), "gs-visibleUrl");
    R(b, d);
    $(d, "gs-visibleUrl-short");
    d = V(google[v].U.Vd(a.url), "gs-visibleUrl");
    R(b, d);
    $(d, "gs-visibleUrl-long")
};
google[v].G[H].zh = function(a, b) {
    var d = yh(a, "gs-promotion-image-cell"), e = X("gs-promotion-image-box");
    R(e, b);
    R(d, e)
};
google[v].G[H].Zh = function(a, b) {
    a.html && delete a.html;
    var d = X("gs-promotion");
    $(d, "gs-result");
    var e = wh(0, 1, "gs-promotion-table"), g = xh(e, 0), f;
    R(d, e);
    var k;
    a.image && (e = a.image.url[r]("resize_w=40", "resize_w=60"), e = e[r]("resize_h=40", "resize_h=60"), e = zh(e, null, null, "gs-promotion-image"), a.url && (f = Ah(a.url, "", this.ya()), a.clicktrackUrl && google[v].G.md(f, a.clicktrackUrl, a.url), R(f, e), e = f), k = e, b.rf || google[v].G[H].zh(g, k));
    e = null;
    a.clicktrackUrl && (e = {}, e[google[v].G.me] = a.clicktrackUrl, e[google[v].G.se] =
    a.url);
    e = Bh(a.url, a[pd], this.ya(), "gs-title", void 0, e);
    a.titleRight && (f = vh("", "gs-promotion-title-right"), Xa(f, " " + a.titleRight), R(e, f));
    e.dir = google[v].U.rh(e[$c]);
    $(e, "gs-bidi-start-align");
    f = yh(g, b.rf && a.image ? "" : "gs-promotion-text-cell");
    R(f, e);
    b.Zi && google[v].G[H].Ah(a, f);
    var l;
    b.rf && a.image ? (e = wh(0, 0, "gs-promotion-table-snippet-with-image"), g = xh(e, 0), R(f, e), google[v].G[H].zh(g, k), l = yh(g, "gs-promotion-text-cell-with-image")) : a.bodyLines && (l = X(), R(f, l));
    if (a.bodyLines) {
        g = a.bodyLines;
        k = "right" ==
        a.bodyLinkAlignment;
        for (var n = 0; n < g[G]; n++) {
            var q = g[n], t = q[pd], w = q.url, y = q.visibleUrl, e = X("gs-snippet"), F;
            t && (F = vh(""), Xa(F, t));
            var x;
            w && y && (x = Ah(w, "", this.ya()), q.clicktrackUrl && google[v].G.md(x, q.clicktrackUrl, w), q = vh("", "gs-title"), Xa(q, y), R(x, q));
            F && k && (R(e, F), x && R(e, th(" ")));
            x && R(e, x);
            F&&!k && (x && R(e, th(" ")), R(e, F));
            e.dir = google[v].U.rh(e[$c]);
            $(e, "gs-bidi-start-align");
            R(l, e)
        }
    }
    b.Zi || google[v].G[H].Ah(a, f);
    a.html = d
};
google[v].G[H].createPromotionHtml = google[v].G[H].Zh;
google[v].G[H].Kh = function(a) {
    delete a.html;
    0 < a.display_facets[G] && (a.html = google[v].ga.ka("facets", a))
};
google[v].G[H].createFacetResultHtml = google[v].G[H].Kh;
google[v].G[H].Qa = function(a) {
    a.html && delete a.html;
    nb(a, this.ya() || void 0);
    jb(a, a[pd] || a.visibleUrl);
    a.html = google[v].ga.ka("webResult", a, {
        isLabelUrl: Kh()
    });
    if (a.clicktrackUrl)
        for (var b = a.html[Lb]; b; b = b[Vb])
            if (1 == b[Yc]) {
                "a" == b[Cc][Od]() && b[zc] == a.unescapedUrl && google[v].G.md(b, a.clicktrackUrl, a.unescapedUrl);
                for (var d = b[ac]("a"), e = 0, g; g = d[e]; e++)
                    g[zc] == a.unescapedUrl && google[v].G.md(g, a.clicktrackUrl, a.unescapedUrl)
            }
    this.Mc(a.html)
};
google[v].G[H].createResultHtml = google[v].G[H].Qa;
google[v].G.md = function(a, b, d) {
    a[Nb](google[v].G.me, b);
    a[Nb](google[v].G.se, d)
};
google[v].G[H].Ub = function(a, b, d) {
    this.rd = null;
    this.P = google[v].yc.kj(a, b);
    this.P instanceof google[v].Rc && (this.N=!0, this.P[jd]() == google[v].G.Qc && (this.rd = Q["linked-cse-error-results"]), d && d[Ib](/__HL__/) && d[Ib](/__QUERY__/) && (this.he = d))
};
google[v].G[H].setSiteRestriction = google[v].G[H].Ub;
M = google[v].G[H];
M.vh = function() {
    return this.N ? this.P[jd]() : null
};
M.wh = function() {
    return this.N ? this.P.yf : null
};
M.lc = function() {
    return this.N ? this.P.Ga : null
};
M.sj = function(a) {
    this.N && a && this.P.zj(a)
};
M.Ra = function(a, b) {
    a == google[v].A.Xa && (this.Ia = b ? b == google[v].A.Xf || b == google[v].A.Wf || b == google[v].A.Fl ? b : null : null);
    if (a == google[v].A.Ja)
        if (b)
            for (var d in b) {
                var e = b[d];
                google[v].G.de[d] && (this.fa[d] = e)
            } else 
                this.fa = {}
};
google[v].G[H].setRestriction = google[v].G[H].Ra;
google[v].G[H].Da = function(a) {
    ha(ta(a, 10)) || (a = ta(a, 10));
    this.N && (0 < a && a <= google[v].G.Gl || google[v].A.Hc == a) ? this.Ka = a : google[v].A[H].Da[zd](this, a)
};
google[v].G[H].setResultSetSize = google[v].G[H].Da;
google[v].G[H].Oa = function(a) {
    google[v].A[H].Oa[zd](this, a)
};
google[v].G[H].setLinkTarget = google[v].G[H].Oa;
google[v].G[H].Fb = function(a) {
    google[v].A[H].Fb[zd](this, a)
};
google[v].G[H].setQueryAddition = google[v].G[H].Fb;
google[v].yc = function() {};
google[v].yc[H].qe = function() {};
google[v].yc[H].pe = function() {};
Ga(google[v].yc[H], function() {});
google[v].yc.kj = function(a, b) {
    var d;
    null == a || "string" == typeof a && "" == a ? d = new google[v].uc : "string" == typeof a ? d = a[Ib](/(^partner-pub-\d*:.*)|(^\d{21}:.*)/) ? new google[v].Rc(google[v].G.xf, a, b) : new google[v].ue(a) : a.siteUrl ? d = new google[v].ue(a.siteUrl) : a.cseId ? d = new google[v].Rc(google[v].G.xf, a.cseId, b) : a.crefUrl && (d = new google[v].Rc(google[v].G.Qc, a.crefUrl, b));
    return d || new google[v].uc
};
google[v].uc = function() {};
gh(google[v].uc, google[v].yc);
google[v].uc[H].qe = function() {
    return []
};
google[v].uc[H].pe = function() {
    return {}
};
Ga(google[v].uc[H], function() {
    return new google[v].uc
});
google[v].Rc = function(a, b, d) {
    this.yj = a;
    this.yf = b;
    this.Ga = null;
    d && (this.Ga = d)
};
gh(google[v].Rc, google[v].yc);
M = google[v].Rc[H];
ab(M, function() {
    return this.yj
});
M.zj = function(a) {
    this.Ga = a
};
M.qe = function() {
    var a = [];
    this.Ga && (0 == this.Ga[dd]("more:") || 0 == this.Ga[dd]("less:") ? a[B](this.Ga) : a[B]("more:" + this.Ga));
    return a
};
M.pe = function() {
    var a = this.yf;
    this.yj == google[v].G.Qc && (a = c(a));
    var b = {};
    b[this.yj] = a;
    return b
};
Ga(M, function() {
    return new google[v].Rc(this.yj, this.yf, this.Ga)
});
google[v].ue = function(a) {
    this.or = a
};
gh(google[v].ue, google[v].yc);
google[v].ue[H].qe = function() {
    var a = [];
    a[B]("site:" + this.or);
    return a
};
google[v].ue[H].pe = function() {
    return {}
};
Ga(google[v].ue[H], function() {
    return new google[v].ue(this.or)
});
google[v].NoOldNames || (ba("GwebSearch", google[v].K), ba("GcustomwebSearch", google[v].G), ba("GbookSearch", google[v].ia), ba("GblogSearch", google[v].za), ba("GvideoSearch", google[v].xa), ba("GnewsSearch", google[v].la), ba("GlocalSearch", google[v].H), ba("GimageSearch", google[v].D), ba("GcustomimageSearch", google[v].C), ba("GpatentSearch", google[v].ca), ba("GSearch", google[v].A), ba("GSearchControl", google[v].B), ba("GSearchForm", google[v].Ca), ba("GsearcherOptions", google[v].$a), ba("GdrawOptions", google[v].pa));
google[v].ga = {};
google[v].ga.Hn = function(a) {
    google[v].ga.Bj.unshift(a);
    return google[v].ga.Bj
};
Rd("google.search.Csedr.addOverride", google[v].ga.Hn, void 0);
google[v].ga.Bj = ["base_", ""];
google[v].ga.ix = function(a, b) {
    google[v].ga.$l[a] || (google[v].ga.$l[a] = eval("[function(Vars,render,html,bidiTextDir,bidiHtmlDir,bidiTextMarkAfter,bidiHtmlMarkAfter, localizedMessages){with(Vars)return(" + a + ")}][0]"));
    return google[v].ga.$l[a](b, google[v].ga.ka, google[v].ga.Ih, google[v].U.Xw, google[v].U.rh, google[v].U.Zw, google[v].U.Yw, Q)
};
google[v].ga.$l = {};
google[v].ga.Ih = function(a) {
    var b = h.createDocumentFragment(), d = h[s]("div");
    for (Xa(d, a);
    d[Lb];
    )b[p](d[Lb]);
    return b
};
google[v].ga.ka = function(a, b) {
    google[v].ga.gm && (h[vd][p](google[v].ga.Ih(google[v].ga.gm)), google[v].ga.gm = 0);
    for (var d = 0; !a[p];) {
        if (d >= google[v].ga.Bj[G])
            return google[v].ga.Ih(a + " not found");
        a = h[Zc](google[v].ga.Bj[d++] + a) || a
    }
    for (var e = {}, g = 1; g < arguments[G]; g++)
        for (d in arguments[g])
            e[d] = arguments[g][d];
    try {
        for (var f = google[v].ga.Ih(""), k, l, n = 0, q, t, w = function(a) {
            a = "data-" + a;
            t = (q = y[Bd](a)) ? google[v].ga.ix(q, e) : "";
            k[Ec] && k[Ec](a);
            return q
        }, y = a[Lb]; y; y = l ? y : y[Vb])
            if (k = y[Ob](!1), 1 != y[Yc])(3 != y[Yc] ||
            y.nodeValue[Ib](/\S/)) && f[p](k);
        else {
            w("foreach");
            !l && q && (e.Foreach = t && "function" == typeof t[Nd] ? t : [t], d = 0, l = 1);
            if (l)
                if (d < e.Foreach[G])
                    e.Cur = e.Foreach[e.Index = d++];
                else {
                    l = 0;
                    continue
                }
                w("if") && (n = 0);
                if (q || w("elif"))
                    if (n ||!t)
                        continue;
                    else 
                        n = 1;
                        if (!w("attr") || t) {
                            if (f[p](k), q)
                                for (var F in t)
                                    void 0 != t[F] && ("class" == F ? m(k, t[F]) : "style" == F && oh() ? k[u].cssText = t[F] : k[Nb](F, t[F]))
                                } else 
                                    k = f;
                                    if (w("facetgroup"))
                                        for (g = 0; g < e.display_facets[G]; g++) {
                                            var x = {
                                                index: ""
                                            };
                                            1 == e.display_facets[G] ? x = {
                                                index: "sizeone"
                                            } : 0 == g ? x =
                                            {
                                                index: "first"
                                            } : g == e.display_facets[G] - 1 && (x = {
                                                index: "last"
                                            });
                                            k[p](google[v].ga.ka("facetGroupEntry", e.display_facets[g], x))
                                        }
                                        var N = w("body") ? t && t[p] ? t: h[Gb](t): google[v].ga.ka(y, e, w("vars") ? t : {});
                                        try {
                                            N && k[p](N)
                                        } catch (z) {}
        }
        return f
    } catch (J) {
        return google[v].ga.Ih(J.toString() + ": " + q)
    }
};
Rd("google.search.Csedr.render", google[v].ga.ka, void 0);
google[v].Gj = {};
google[v].Gj.Jy = function(a) {
    if (!(a && a instanceof pa))
        return a;
    for (var b = {}, d = 0; d < a[G]; d++)
        for (var e in a[d])
            b[e] = a[d][e];
    return b
};
Rd("google.search.richsnippets.merge", google[v].Gj.Jy, void 0);
google[v].Gj.Hy = function(a) {
    if (!(a instanceof pa))
        return !(!a.description&&!a.summary);
    for (var b = 0; b < a[G]; b++)
        if (a[b].description || a[b].summary)
            return !0;
    return !1
};
Rd("google.search.richsnippets.hreviewNonEmpty", google[v].Gj.Hy, void 0);
google[v].F = {};
google[v].F.element = {};
google[v].F[I].Ba = {
    ki: "searchbox+results",
    wb: "searchbox",
    Tb: "results"
};
google[v].F[I].$c = {
    Dm: "standard",
    Xe: "two-column",
    Ve: "searchbox-only",
    zi: "searchresults-only"
};
google[v].F[I].Mb = function(a) {
    return "string" == typeof a ? "" != a && "0" != a && "false" != a[Od]() : !!a
};
google[v].F[I].Hm = function(a) {
    a = ta(a, 10);
    return ha(a) ? void 0 : a
};
google[v].F[I].$ = function(a) {
    return function(b) {
        for (var d = 0; d < a[G]; d++)
            if (typeof b == a[d])
                return b
    }
};
google[v].F[I].oy = function(a) {
    if ("string" == typeof a && (a = ci(a)) && (0 == a[dd]("http://") || 0 == a[dd]("https://")))
        return a
        };
google[v].F[I].Mw = function(a) {
    var b = {};
    if (1 < a[G]) {
        a = a[cc](1)[hc]("&");
        for (var d = 0; d < a[G]; d++) {
            var e = a[d][hc]("=");
            try {
                var g = xa(e[0])
            } catch (f) {
                continue
            }
            if (g) {
                try {
                    var k = e[1] ? xa(e[1][r](/\+/g, " ")): e[1]
                } catch (l) {}
                b[g] = k
            }
        }
    }
    return b
};
google[v].F[I].pl = function(a) {
    var b = {};
    if (1 < a[G]) {
        a = a[cc](1)[hc]("&");
        for (var d = 0; d < a[G]; d++) {
            var e = a[d][hc]("=");
            try {
                var g = xa(e[0])
            } catch (f) {
                continue
            }
            if ("gcse-bookmark" === g)
                try {
                    var k = xa(e[1]);
                    b[k[hc](":")[0]] = k[Gd](k[dd](":") + 1)
                } catch (l) {}
        }
    }
    return b
};
google[v].F[I].Up = function(a, b) {
    for (var d = {}, e = 0; e < b[G]; e++)
        a[oc](b[e]) && (d[b[e]] = a[b[e]]);
    return d
};
google[v].F[I].T = {};
google[v].F[I].T.Eh = "gcse";
google[v].F[I].T.dw = "data-";
google[v].F[I].T.Rl = "div";
google[v].F[I].T.ew = "gname";
google[v].F[I].T.fw = google[v].F[I].T.Eh + ":";
google[v].F[I].T.Ql = google[v].F[I].T.Eh + "-";
google[v].F[I].T.nj = {
    REPLACE: 0,
    Wp: 1
};
google[v].F[I].T.Ew = function() {
    var a = 0, b = "___" + google[v].F[I].T.Eh + "_";
    return function() {
        return b + a++
    }
}();
google[v].F[I].T.Ey = function(a) {
    var b = 0;
    return function(d) {
        return a == google[v].F[I].$c.Xe ? d || a : d || a + b++
    }
};
var ti = google[v].F[I].T, ui = google[v].F[I].$c, vi = google[v].F[I].Ba, wi = google[v].F[I].T.Ey, xi = {};
xi[ui.Dm] = {
    xh: [vi.ki],
    getName: wi(ui.Dm)
};
xi[ui.Xe] = {
    xh: [vi.wb, vi.Tb],
    getName: wi(ui.Xe)
};
xi[ui.Ve] = {
    xh: [vi.wb],
    getName: wi(ui.Ve)
};
xi[ui.zi] = {
    xh: [vi.Tb],
    getName: wi(ui.zi)
};
ti.Ol = xi;
google[v].F[I].T.th = {
    search: {
        Md: google[v].F[I].$c.Dm,
        uh: google[v].F[I].Ba.ki
    },
    searchbox: {
        Md: google[v].F[I].$c.Xe,
        uh: google[v].F[I].Ba.wb
    },
    searchresults: {
        Md: google[v].F[I].$c.Xe,
        uh: google[v].F[I].Ba.Tb
    },
    "searchbox-only": {
        Md: google[v].F[I].$c.Ve,
        uh: google[v].F[I].Ba.wb
    },
    "searchresults-only": {
        Md: google[v].F[I].$c.zi,
        uh: google[v].F[I].Ba.Tb
    }
};
var yi = google[v].F[I].T, zi = [], Ai = google[v].F[I].T.Eh + "\\:", Bi;
for (Bi in google[v].F[I].T.th)
    zi[B](Ai + Bi), zi[B](google[v].F[I].T.Rl + "." + google[v].F[I].T.Ql + Bi);
yi.Fw = zi[Nd](", ");
google[v].F[I].T.Hw = function(a) {
    var b = [], d = google[v].F[I].T.Eh + ":", e;
    for (e in google[v].F[I].T.th) {
        for (var g = a[ac](d + e), f = 0; f < g[G]; f++)
            b[B](g[f]);
        g = Uh(a, google[v].F[I].T.Rl, google[v].F[I].T.Ql + e);
        for (f = 0; f < g[G]; f++)
            b[B](g[f])
    }
    return b
};
google[v].F[I].T.Option = {
    IB: {
        name: "resultsUrl",
        Q: google[v].F[I].oy,
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.wb
    },
    vB: {
        name: "newWindow",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.wb
    },
    EB: {
        name: "queryParameterName",
        Q: google[v].F[I].$(["string"]),
        defaultValue: "q",
        S: !0,
        O: void 0,
        M: void 0,
        R: void 0
    },
    OA: {
        name: "autoSearchOnLoad",
        Q: google[v].F[I].Mb,
        defaultValue: !0,
        S: !0,
        O: void 0,
        M: void 0,
        R: void 0
    },
    SA: {
        name: "defaultToRefinement",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "defaultToRefinement",
        M: void 0,
        R: void 0
    },
    ZA: {
        name: "enableOrderBy",
        Q: google[v].F[I].Mb,
        defaultValue: void 0,
        S: !0,
        O: "enableOrderBy",
        M: void 0,
        R: void 0
    },
    zB: {
        name: "orderByOptions",
        Q: google[v].F[I].$(["object"]),
        defaultValue: void 0,
        S: !1,
        O: "keys",
        M: "orderByOptions",
        R: void 0
    },
    JB: {
        name: "resultSetSize",
        Q: google[v].F[I].$(["string", "number"]),
        defaultValue: void 0,
        S: !0,
        O: "resultSetSize",
        M: void 0,
        R: void 0
    },
    HB: {
        name: "extendedRestricts",
        Q: google[v].F[I].$(["object"]),
        defaultValue: void 0,
        S: !1,
        O: google[v].A.Ja,
        M: void 0,
        R: void 0
    },
    KB: {
        name: "safeSearch",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: google[v].A.Xa,
        M: void 0,
        R: void 0
    },
    FB: {
        name: "refinementStyle",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.Tb
    },
    WA: {
        name: "enableHistory",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !0,
        O: void 0,
        M: void 0,
        R: void 0
    },
    tB: {
        name: "linkTarget",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.Tb
    },
    aB: {
        name: "enableSpeech",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.wb
    },
    VA: {
        name: "enableAutoComplete",
        Q: google[v].F[I].Mb,
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.wb
    },
    KA: {
        name: "autoCompleteMatchType",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "matchType",
        M: "autoCompleteOptions",
        R: google[v].F[I].Ba.wb
    },
    NA: {
        name: "autoCompleteValidLanguages",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "validLanguages",
        M: "autoCompleteOptions",
        R: google[v].F[I].Ba.wb
    },
    LA: {
        name: "autoCompleteMaxCompletions",
        Q: google[v].F[I].Hm,
        defaultValue: void 0,
        S: !0,
        O: "maxCompletions",
        M: "autoCompleteOptions",
        R: google[v].F[I].Ba.wb
    },
    MA: {
        name: "autoCompleteMaxPromotions",
        Q: google[v].F[I].Hm,
        defaultValue: void 0,
        S: !0,
        O: "maxPromotions",
        M: "autoCompleteOptions",
        R: google[v].F[I].Ba.wb
    },
    wB: {
        name: "noResultsString",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.Tb
    },
    HA: {
        name: "addOverride",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: void 0,
        M: void 0,
        R: void 0
    },
    xB: {
        name: "numTopRefinements",
        Q: google[v].F[I].Hm,
        defaultValue: void 0,
        S: !1,
        O: void 0,
        M: void 0,
        R: void 0
    },
    hC: {
        name: "webSearchResultSetSize",
        Q: google[v].F[I].$(["number", "string"]),
        defaultValue: void 0,
        S: !0,
        O: "resultSetSize",
        M: "webSearchOptions",
        R: void 0
    },
    gC: {
        name: "webSearchExtendedRestricts",
        Q: google[v].F[I].$(["object"]),
        defaultValue: void 0,
        S: !1,
        O: google[v].A.Ja,
        M: "webSearchOptions",
        R: void 0
    },
    eC: {
        name: "lr",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "lr",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    aC: {
        name: "cr",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "cr",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    cC: {
        name: "gl",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "gl",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    bC: {
        name: "filter",
        Q: google[v].F[I].$(["number"]),
        defaultValue: void 0,
        S: !0,
        O: "filter",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    $B: {
        name: "as_sitesearch",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "as_sitesearch",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    ZB: {
        name: "as_oq",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "as_oq",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    jC: {
        name: "sort_by",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "sort_by",
        M: "webSearchExtendedRestricts",
        R: void 0
    },
    iC: {
        name: "webSearchSafesearch",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: google[v].A.Xa,
        M: "webSearchOptions",
        R: void 0
    },
    dC: {
        name: "webSearchLinkTarget",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "linkTarget",
        M: "webSearchOptions",
        R: google[v].F[I].Ba.Tb
    },
    fC: {
        name: "webSearchQueryAddition",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "queryAddition",
        M: "webSearchOptions",
        R: void 0
    },
    XA: {
        name: "enableImageSearch",
        Q: google[v].F[I].Mb,
        defaultValue: void 0,
        S: !0,
        O: "enableImageSearch",
        M: void 0,
        R: google[v].F[I].Ba.Tb
    },
    UA: {
        name: "disableWebSearch",
        Q: google[v].F[I].Mb,
        defaultValue: void 0,
        S: !0,
        O: "disableWebSearch",
        M: void 0,
        R: void 0
    },
    RA: {
        name: "defaultToImageSearch",
        Q: google[v].F[I].Mb,
        defaultValue: void 0,
        S: !0,
        O: "defaultToImageSearch",
        M: void 0,
        R: void 0
    },
    lB: {
        name: "imageSearchLayout",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "layout",
        M: "imageSearchOptions",
        R: google[v].F[I].Ba.Tb
    },
    nB: {
        name: "imageSearchExtendedRestricts",
        Q: google[v].F[I].$(["object"]),
        defaultValue: void 0,
        S: !1,
        O: google[v].A.Ja,
        M: "imageSearchOptions",
        R: void 0
    },
    mB: {
        name: "image_lr",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "lr",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    iB: {
        name: "image_cr",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "cr",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    kB: {
        name: "image_gl",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "gl",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    jB: {
        name: "image_filter",
        Q: google[v].F[I].$(["number"]),
        defaultValue: void 0,
        S: !0,
        O: "filter",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    hB: {
        name: "image_as_sitesearch",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "as_sitesearch",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    gB: {
        name: "image_as_oq",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "as_oq",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    pB: {
        name: "image_sort_by",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "sort_by",
        M: "imageSearchExtendedRestricts",
        R: void 0
    },
    oB: {
        name: "imageSearchResultSetSize",
        Q: google[v].F[I].$(["number", "string"]),
        defaultValue: void 0,
        S: !0,
        O: "resultSetSize",
        M: "imageSearchOptions",
        R: void 0
    },
    eB: {
        name: "gaQueryParameter",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "queryParameter",
        M: "googleAnalyticsOptions",
        R: google[v].F[I].Ba.wb
    },
    dB: {
        name: "gaCategoryParameter",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "categoryParameter",
        M: "googleAnalyticsOptions",
        R: google[v].F[I].Ba.wb
    },
    FA: {
        name: "adchannel",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "adchannel",
        M: void 0,
        R: void 0
    },
    GA: {
        name: "adclient",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "adclient",
        M: void 0,
        R: void 0
    },
    JA: {
        name: "adtest",
        Q: google[v].F[I].$(["string"]),
        defaultValue: void 0,
        S: !0,
        O: "adtest",
        M: void 0,
        R: void 0
    },
    IA: {
        name: "adoptions",
        Q: google[v].F[I].$(["object"]),
        defaultValue: void 0,
        S: !1,
        O: "adoptions",
        M: void 0,
        R: void 0
    },
    MB: {
        name: "overlayResults",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !0,
        O: "overlayResults",
        M: void 0,
        R: void 0
    },
    LB: {
        name: "showBookmarkLink",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !1,
        O: "showBookmarkLink",
        M: "bookmarkOptions",
        R: void 0
    },
    qB: {
        name: "isSitesearch",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !1,
        O: "isSiteSearch",
        M: "bookmarkOptions",
        R: void 0
    },
    YA: {
        name: "enableMobileLayout",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !1,
        O: "enableMobileLayout",
        M: void 0,
        R: void 0
    },
    $A: {
        name: "enableRichSnippets",
        Q: google[v].F[I].Mb,
        defaultValue: !1,
        S: !1,
        O: void 0,
        M: void 0,
        R: google[v].F[I].Ba.Tb
    }
};
google[v].F[I].T.ji = function(a, b) {
    var d = google[v].F[I].T.Option, e;
    for (e in d)
        d[oc](e) && a[zd](b, d[e])
};
google[v].F[I].T.Tp = ["oq", "gs_204"];
google[v].F[I].sh = function(a, b) {
    this.re = a;
    this.Yp = b ? google[v].F[I].T.nj.Wp : google[v].F[I].T.nj.REPLACE;
    var d, e;
    if (b)
        d = b.tag || "search", e = b.attributes || {};
    else {
        d = a.nodeName[Od]();
        var g = "";
        d == google[v].F[I].T.Rl ? (g = google[v].F[I].T.dw, d = (a[rd] || a[Bd]("class"))[cc](google[v].F[I].T.Ql[G])) : d = d[cc](google[v].F[I].T.fw[G]);
        e = google[v].F[I].sh.gw(a, g)
    }
    this.attributes = e;
    this.Md = google[v].F[I].T.th[d].Md;
    ab(this, google[v].F[I].T.th[d].uh);
    g = b ? b.gname : a[Bd](g + google[v].F[I].T.ew);
    this.cc = google[v].F[I].T.Ol[this.Md].getName(g)
};
google[v].F[I].sh.gw = function(a, b) {
    var d = {};
    google[v].F[I].T.ji(function(e) {
        var g = a[Bd](b + e[md]);
        null != g && (d[e[md]] = g)
    }, this);
    return d
};
google[v].F[I].sh[H].jw = function() {
    var a = this.re, b;
    if (this.Yp == google[v].F[I].T.nj.REPLACE) {
        b = h[s]("div");
        var d = a[Jd];
        d[Hb](b, a);
        d[xd](a);
        b.id = a.id;
        this.re = b
    } else 
        this.Yp == google[v].F[I].T.nj.Wp && (b = h[s]("div"), a[p](b), this.re = b);
    this.re.id && 0 !== this.re.id[G] || (this.re.id = google[v].F[I].T.Ew())
};
google[v].F[I].Element = function(a, b, d, e, g, f) {
    this.ee = a;
    this.cc = b;
    ab(this, d);
    this.wf = {};
    this.ea = this.jx(e);
    this.ph = g;
    this.vc = f
};
M = google[v].F[I].Element[H];
M.yh = 0;
M.ld = null;
M.ts=!1;
M.Jw = function(a) {
    if (a.cc != this.cc)
        return gi("Name of the component, " + a.cc + ", should match name of the element, " + this.cc + "."), this.yh;
    var b=!1;
    this.wf[a[jd]] && (gi("Multiple components of the same type " + a[jd] + " for Element named " + this.cc + " are detected. Only the last is used."), b=!0);
    for (var d = google[v].F[I].T.Ol[this[jd]].xh, e = 0; e < d[G]; e++)
        if (d[e] == a[jd])
            return this.wf[a[jd]] = a, b || this.yh++, this.yh;
    gi("Component of type " + a[jd] + " is not allowed for Element named " + this.cc + " of type " + this[jd] +
    ".");
    return this.yh
};
M.ka = function() {
    var a = google[v].F[I].T.Ol[this[jd]].xh;
    if (a[G] != this.yh)
        for (var b = 0; b < a[G]; b++)
            if (!this.wf[a[b]])
                return gi("Component of type " + a[b] + " is missing for Element named " + this.cc + "."), !1;
    var a = {}, d;
    for (d in this.wf)
        this.wf[oc](d) && (b = this.wf[d], b.jw(), a[d] = b.re, this.lw(b.attributes, d));
    this.ld = this.kw(a);
    return !0
};
M.jx = function(a) {
    var b = {}, d;
    for (d in a)
        a[oc](d) && (b[d] = a[d]);
    return b
};
M.lw = function(a, b) {
    var d = google[v].F[I].Ba;
    google[v].F[I].T.ji(function(e) {
        if (a[oc](e[md]) && e.S && (b == d.ki || void 0 == e.R || e.R == b)) {
            var g = e.Q(a[e[md]]);
            null != g && ("webSearchExtendedRestricts" === e.M ? (this.ea.webSearchExtendedRestricts || (this.ea.webSearchExtendedRestricts = {}), this.ea.webSearchExtendedRestricts[e[md]] = g) : "imageSearchExtendedRestricts" === e.M ? (this.ea.imageSearchExtendedRestricts || (this.ea.imageSearchExtendedRestricts = {}), this.ea.imageSearchExtendedRestricts[e.O] = g) : this.ea[e[md]] = g)
        }
    }, this)
};
M.kw = function(a) {
    var b = {
        imageSearchOptions: {},
        webSearchOptions: {},
        autoCompleteOptions: {},
        googleAnalyticsOptions: {},
        orderByOptions: {},
        bookmarkOptions: {}
    };
    google[v].F[I].T.ji(function(a) {
        if (a.O && void 0 != this.ea[a[md]]) {
            var d = b;
            a.M && (d = b[a.M]);
            d[a.O] = this.ea[a[md]]
        }
    }, this);
    this.ea.isSitesearch && void 0 !== this.vc.sortBy && (b.webSearchOptions || (b.webSearchOptions = {}), b.webSearchOptions[google[v].A.Ja] || (b.webSearchOptions[google[v].A.Ja] = {}), b.webSearchOptions[google[v].A.Ja].sort = this.vc.sortBy);
    this.ea.isSitesearch &&
    this.vc.refine && (b.defaultToRefinement = this.vc.refine);
    this.ea.isSitesearch && this.vc.image && (b.defaultToImageSearch = "0" != this.vc.image?!0 : !1);
    this.ea.enableRichSnippets && (b.enableRichSnippets=!0);
    var d = new google[v].I(this.ee, b);
    void 0 != this.ea.refinementStyle && d.Nh(this.ea.refinementStyle);
    void 0 != this.ea.addOverride && google[v].ga.Hn(this.ea.addOverride);
    void 0 != this.ea.linkTarget && d.Oa(this.ea.linkTarget);
    var e = new google[v].pa;
    void 0 != this.ea.enableAutoComplete && e.Ln(this.ea.enableAutoComplete);
    void 0 != this.ea.enableSpeech && e.Nn(this.ea.enableSpeech);
    void 0 != this.ea.numTopRefinements && e.On(this.ea.numTopRefinements);
    var g = null, f = google[v].F[I].$c, g = google[v].F[I].Ba;
    this[jd] == f.Ve ? (f = this.ea.resultsUrl, !f && this.ee ? f = "http://www.google.com/cse?" + ("string" == typeof this.ee ? "cx=" + c(this.ee) : "cref=" + c(this.ee.crefUrl)) : void 0 == f && (f = window[mc][zc]), e.Jn(f, this.ea.queryParameterName, this.ea.newWindow), g = a[g.wb]) : this[jd] == f.zi ? (e.In(), g = a[g.Tb]) : this[jd] == f.Xe ? (e.Mn(a[g.wb]), g = a[g.Tb]) : g = a[g.ki];
    this.ts && this.cc === this[jd] + "0" && (a = h[s]("script"), ab(a, "text/javascript"), a.src = "//www.google.com/cse/btguard.js?gcse_nc=" + window.___gcse_nc_, h.head[p](a));
    d.Rf(g, e);
    this.ea.noResultsString && (e = this.ea.noResultsString, e = ce(e), d.Ne(e));
    this.ea.enableHistory ? d.Pn(ph(this, this.Kn)) && void 0 == this.ea.linkTarget && d.Oa(google[v].A.Gn) : this.Kn(d);
    return d
};
M.Kn = function(a) {
    var b = google[v].F[I].$c, d = this.ph[this.ea.queryParameterName];
    if (this.ea.isSitesearch && this.vc.query && this[jd] != b.Ve) {
        d = this.vc.query;
        b = ta(this.vc[Oc], 10);
        ha(b) && (b = 1);
        var e = google[v].F[I].Up(this.ph, google[v].F[I].T.Tp);
        a.qa(d, b, e)
    } else 
        d && this.ea.autoSearchOnLoad && (this[jd] == b.Ve ? a.jj(d) : (e = google[v].F[I].Up(this.ph, google[v].F[I].T.Tp), a.qa(d, void 0, e)))
};
google[v].F[I].xq = function(a) {
    a = a || {};
    this.ee = a.cx || (a.cref ? {
        crefUrl: a.cref
    } : null);
    this.yw = this.Lw(a.uiOptions);
    this.te = {};
    this.Bh = {};
    this.ph = google[v].F[I].Mw(window[mc][v]);
    this.vc = google[v].F[I].pl(window[mc][v]);
    this.Vl = a.rawCss;
    this.Kw()
};
M = google[v].F[I].xq[H];
M.Lw = function(a) {
    a = a || {};
    var b = {};
    google[v].F[I].T.ji(function(d) {
        var e = d[md], g = null;
        a[oc](e) && (g = d.Q(a[e]));
        null != g ? b[e] = g : void 0 != d.defaultValue && (b[e] = d.defaultValue)
    }, this);
    return b
};
M.Gw = function() {
    if ("boolean" == typeof this.Im)
        return this.Im;
    var a = h[s]("div"), b = h[s]("G:TEST");
    a[p](b);
    return this.Im=!!(a.querySelectorAll && 0 < a.querySelectorAll("G\\:TEST")[G])
};
M.go = function(a) {
    a = (a ? bi(a) : null) || h[vd];
    a = this.Gw() ? a.querySelectorAll(google[v].F[I].T.Fw) : google[v].F[I].T.Hw(a);
    window || (window = {});
    window.___gcse_nc_ = a[G] || 0;
    for (var b = 0; b < a[G]; ++b)
        this.dq(new google[v].F[I].sh(a[b]));
    this.cq()
};
M.ka = function(a, b) {
    if (b && "searchbox" != a.tag && "searchresults" != b.tag)
        return gi('First and second components must be of tag "searchbox"  and "searchresults" separately.'), null;
    if (b && a.gname != b.gname)
        return gi("First and second components must be of the same gname."), null;
    var d = [a];
    b && d[B](b);
    for (var e, g = [], f = 0; f < d[G]; f++) {
        if (!d[f].div)
            return gi("div required for component."), null;
        d[f].tag || (d[f].tag = "search");
        if (!google[v].F[I].T.th[d[f].tag])
            return gi("tag named " + d[f].tag + " is not recognized"), null;
        var k = bi(d[f].div);
        k && 1 === k[Yc] && (k = new google[v].F[I].sh(k, d[f]), e = k.cc, g[B](k))
    }
    for (f = 0; f < g[G]; f++)
        this.dq(g[f]);
    this.cq();
    return e ? this.qj(e) : null
};
M.qj = function(a) {
    return this.Bh[a] ? new google[v].F[I].Xl(this.Bh[a]) : null
};
M.Wl = function() {
    var a = {}, b;
    for (b in this.Bh)
        a[b] = new google[v].F[I].Xl(this.Bh[b]);
    return a
};
M.dq = function(a) {
    var b = a.cc;
    this.te[b] || (this.te[b] = new google[v].F[I].Element(this.ee, b, a.Md, this.yw, this.ph, this.vc));
    this.te[b].Jw(a)
};
M.Kw = function() {
    if (this.Vl) {
        var a = h[ac]("head")[0];
        a || (a = h[vd][Jd][p](h[s]("head")));
        var b = h[s]("style");
        ab(b, "text/css");
        b[Tc] ? b[Tc].cssText = this.Vl : b[p](h[Gb](this.Vl));
        a[p](b)
    }
};
M.cq = function() {
    for (var a in this.te)
        if (this.te[oc](a)) {
            var b = this.te[a];
            b.ka() && (this.Bh[a] = b);
            delete this.te[a]
        }
};
google[v].F[I].Xl = function(a) {
    this.gname = a.cc;
    ab(this, a[jd]);
    this.uiOptions = a.ea;
    this.execute = ph(a.ld, a.ld.qa);
    this.prefillQuery = ph(a.ld, a.ld.jj);
    this.getInputQuery = ph(a.ld, a.ld.Hq);
    this.clearAllResults = ph(a.ld, a.ld.Yc)
};
Rd("google.search.cse.element.ElementInterface", google[v].F[I].Xl, void 0);
google[v].F[I].Dh = function() {
    return (new Date)[Wb]()
};
google[v].F[I].Ul = google[v].F[I].Dh();
google[v].F[I].mq = function(a, b) {
    if (!google[v].F[I].yq && (google[v].F[I].yq = google[v].F[I].Dh(), window.googleLT_ && 1 == window.googleLT_%100)) {
        var d = "e", e = window.googleLT_;
        window.__gcse && window.__gcse.ct && (e = window.__gcse.ct, d = "c");
        var g = window.googleLT_ - e, f = google[v].F[I].Ul - e, k = google[v].F[I].Nw - e, l = b - e, e = google[v].F[I].yq - e;
        if (0 < f && 0 < k && 0 < l) {
            var n = "ex";
            "c" == d && "explicit" != window.__gcse.parsetags && (n = "ol");
            var q = "render" == a ? "r": "g", t = [];
            "c" == d && t[B]("gl." + g);
            t = t[Eb](["el." + f, "mc." + k, q + "s." + l, q + "e." +
            e]);
            google[Ed].recordCsiStat(["element_" + (d + n)], t)
        }
    }
};
google[v].F[I].Fh = function(a) {
    return google[v].F[I].Ch?!1 : (google[v].F[I].Ch = new google[v].F[I].xq(a), google[v].F[I].Nw = google[v].F[I].Dh(), !0)
};
Rd("google.search.cse.element.init", google[v].F[I].Fh, void 0);
google[v].F[I].go = function(a) {
    google[v].F[I].Fh();
    var b = google[v].F[I].Dh();
    google[v].F[I].Ch.go(a);
    google[v].F[I].mq("go", b)
};
Rd("google.search.cse.element.go", google[v].F[I].go, void 0);
google[v].F[I].ka = function(a, b) {
    google[v].F[I].Fh();
    var d = google[v].F[I].Dh(), e = google[v].F[I].Ch.ka(a, b);
    google[v].F[I].mq("render", d);
    return e
};
Rd("google.search.cse.element.render", google[v].F[I].ka, void 0);
google[v].F[I].qj = function(a) {
    google[v].F[I].Fh();
    return google[v].F[I].Ch.qj(a)
};
Rd("google.search.cse.element.getElement", google[v].F[I].qj, void 0);
google[v].F[I].Wl = function() {
    google[v].F[I].Fh();
    return google[v].F[I].Ch.Wl()
};
Rd("google.search.cse.element.getAllElements", google[v].F[I].Wl, void 0);
google[v].ga.gm = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hreview_icon"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)"> <span class="gsc-zippy"></span> </span> </span> <span id="private_hreview_content"> <span data-if="google.search.richsnippets.hreviewNonEmpty(Vars.hreview)" class="gsc-preview-reviews"> <ul> <span data-foreach="Vars.hreview" data-attr="0"> <li data-if="(Cur.description || Cur.summary) && Index == 0" class = "gsc-review-agregate-first-line"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> <li data-elif="(Cur.description || Cur.summary) && Index < 10" data-attr="{\'class\': Index % 2 == 0 ? \'gsc-review-agregate-even-lines\' : \'gsc-review-agregate-odd-lines\'}"> <span data-if="Cur.description" data-body="Cur.description"></span> <span data-elif="Cur.summary" data-body="Cur.summary"></span> </li> </span> </ul> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="html(anchor)"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <table class="gsc-table-result"> <tbody> <tr> <td class="gsc-table-cell-thumbnail gsc-thumbnail" style="display:none"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> </td> <td data-attr="{\'class\': \'gsc-table-cell-snippet-close\' + ((google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview && google.search.richsnippets.hreviewNonEmpty(Vars.richSnippet.hreview)) ? \' gsc-collapsable\' : \'\')}" onclick="if (this.className == \'gsc-table-cell-snippet-close gsc-collapsable\') { this.className = \'gsc-table-cell-snippet-open gsc-collapsable\'; } else if (this.className == \'gsc-table-cell-snippet-open gsc-collapsable\') { this.className = \'gsc-table-cell-snippet-close gsc-collapsable\'; };"> <span data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview" data-attr="0" data-body="render(\'private_hreview_icon\',richSnippet)"> </span> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <span data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet && Vars.richSnippet.hreview" data-attr="0" data-body="render(\'private_hreview_content\',richSnippet)"> </span> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="!Vars.isLabelUrl && Vars.perResultLabels"></span> <a class=\'gs-label gs-add-label\' data-if="Vars.isLabelUrl" data-body="localizedMessages[\'add-label\']"></a> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </td> </tr> </tbody> </table> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'href\':originalContextUrl, \'target\':target, \'class\':imageClass }" ><img data-attr="{ \'src\':tbUrl, \'title\':titleNoFormatting, \'class\':imageClass }"/ ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \' \u00d7 \' + height" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box" ></div ></div> <div id="base_imageResult_classic" ><div class="gs-result gs-imageResult gs-imageResult-classic" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_column" ><div class="gs-result gs-imageResult gs-imageResult-column" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" onmouseover="google.search.ImageSearch.showPopup(this)" onmouseout="google.search.ImageSearch.hidePopup(this)" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div data-if="tn.src"> <a class="gs-image" data-attr="{href:url,target:target}"> <img data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-landscape\'; } "/> <img data-elif="true" class="gs-image" data-attr="{src:tn.src}" onload="if (this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode) { this.parentNode.parentNode.parentNode.style.display = \'\'; this.parentNode.parentNode.className = \'gs-image-box gs-web-image-box gs-web-image-box-portrait\'; } "/> </a> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
google.loader.loaded({
    "module": "search",
    "version": "1.0",
    "components": ["default"]
});
google.loader.eval.search = function() {
    eval(arguments[0]);
};
if (google.loader.eval.scripts && google.loader.eval.scripts['search']) {
    (function() {
        var scripts = google.loader.eval.scripts['search'];
        for (var i = 0; i < scripts.length; i++) {
            google.loader.eval.search(scripts[i]);
        }
    })();
    google.loader.eval.scripts['search'] = null;
}
})();

