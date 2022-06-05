var bind = truste.eu.bindMap;
bind.box_overlay = bind.box_overlay || {
    padding: "10px"
};
bind.closebtn = bind.closebtn || {
    top: "-20px",
    right: "-20px"
};
unloadScript = function(a) {
    return "Please allow optouts to finish before navigating out of the page!"
};
truste.eu.showSeal = truste.eu.showSeal || function() {
    var c = truste.eu.bindMap;
    var d = document.getElementById(truste.eu.iconid);
    if (!d) {
        d = document.createElement("a");
        d.id = truste.eu.iconid;
        truste.eu.addEvent(d, "click", truste.eu.clickListener);
        if (c.text == "true" && c.icon) {
            d.style.cursor = "pointer";
            d.innerHTML = c.icon;
            (truste.eu.caIcon && truste.eu.caIcon.appendChild(d)) || (truste.eu.jsNode1 && truste.eu.jsNode1.parentNode.insertBefore(d, truste.eu.jsNode1.nextSibling));
            return 
        }
        d.innerHTML = '<img style="border: none; cursor:pointer;" onerror="truste.eu.showSeal()" alt="TRUSTe Icon">';
        (truste.eu.caIcon && truste.eu.caIcon.appendChild(d)) || (truste.eu.jsNode1 && truste.eu.jsNode1.parentNode.insertBefore(d, truste.eu.jsNode1.nextSibling))
    }
    var e = truste.eu.assetServerURL + (c.cookiePreferenceIcon || c.language + "-cookiepreferencestext.png");
    if (!d.firstChild.src) {
        d.firstChild.src = e
    } else {
        if (c.language != "en" && d.firstChild.src == e) {
            d.firstChild.src = truste.eu.assetServerURL + c.cookiePreferenceIcon.substring(3)
        } else {
            d.style.cursor = "pointer";
            d.innerHTML = c.icon
        }
    }
};
truste.eu.clickListener = truste.eu.clickListener || function(a) {
    var b = truste.eu.bindMap;
    truste.eu.logMessage("click", b, b.messageBaseUrl);
    switch (truste.eu.getPrefValue(b)) {
    case null:
        truste.eu.logMessage("consent", b, b.messageBaseUrl);
    case - 1:
        if (a != 1) {
            truste.eu.prefview(b, "notice");
            break
        }
    default:
        truste.eu.prefview(b, "prefmgr")
    }
};
truste.eu.actmessage = truste.eu.actmessage || function(f) {
    var a = truste.eu.bindMap;
    if (f && f.source == "preference_manager") {
        switch (f.message) {
        case"submit_preferences":
            if (f.data) {
                truste.eu.trace("changing preference to: " + f.data.value);
                a.prefCookie = (typeof f.data == "object") ? f.data.value : f.data;
                var l = a.prefCookie + ":" + a.daxSignature;
                truste.eu.createCookie(truste.eu.COOKIE_PREF_NAME, l, f.data.expires);
                truste.eu.sendclosereport = false
            }
            break;
        case"change_panel":
            var g = f.data.split("x");
            a.height = parseInt(g[0]);
            truste.eu.resizeFrame(a.width + "px", a.height + "px");
            break;
        case"remove_iframe":
            if (f.data == "true"&&!truste.eu.prefclose()) {
                setTimeout(truste.eu.prefclose, 500)
            }
            break;
        case"toggle_close_button":
            truste.eu.toggleCloseButton(a, f.data);
            break;
        case"send_tracker_list":
            if (f.data && window.postMessage && window.localStorage) {
                var b = f.data;
                for (var d in b) {
                    var h = b[d];
                    var k = h.domains;
                    if (k instanceof Array) {
                        var e = {};
                        for (var c = k.length; c-->0;) {
                            e[k[c]] = "1"
                        }
                        h.domains = e
                    }
                }
                if (!window.JSON) {
                    b = truste.util.getJSON(b)
                }
                truste.eu.setStorage(truste.eu.COOKIE_CATEGORY_NAME, b, false)
            }
            break;
        case"show_throbber":
            if (f.data == "true") {
                truste.eu.showThrobber()
            } else {
                truste.eu.hideThrobber()
            }
            break;
        case"show_cm":
            truste.eu.showCM(f.data);
            break
        }
    }
};
truste.util = truste.util || {};
truste.util.getJSON = truste.util.getJSON || function(b) {
    if (b instanceof Array) {
        var d = "[";
        if (b.length) {
            d += truste.util.getJSON(b[0]);
            for (var c = 0; c < b.length; c++) {
                d += "," + truste.util.getJSON(b[c])
            }
        }
        return d + "]"
    } else {
        if (typeof b == "string") {
            return '"' + b + '"'
        } else {
            if ((b) instanceof Object) {
                var a = false, d = "{";
                for (var e in b) {
                    d += (a ? "," : "") + '"' + e + '":' + truste.util.getJSON(b[e]);
                    a = true
                }
                return d + "}"
            } else {
                return b
            }
        }
    }
};
truste.eu.generateId = truste.eu.generateId || function(a) {
    return (a + Math.random()).replace(".", "")
};
truste.eu.addCloseButton = truste.eu.addCloseButton || function(e) {
    if (e.autoDisplayCloseButton || e.behavior == "implied" || e.behaviorManager == "us" || (e.behavior == "expressed" && (truste.eu.getPrefValue(e) != null && truste.eu.getPrefValue(e)>-1))) {
        e.closebtnid = truste.eu.generateId("closebtn-id");
        var b = document.getElementById(truste.eu.popdiv3);
        var d = document.createElement("div");
        d.id = e.closebtnid;
        var a = (e.closeButtonUrl || e.assetServerURL + "close_btn.png");
        d.innerHTML = '<a href="javascript:void(0);" onclick="truste.eu.prefclosebutton()" style="cursor:pointer;"><img src="' + a + '" border="0" /></a>';
        d.style.position = "absolute";
        d.style.top = e.closebtn.top;
        d.style.right = e.closebtn.right;
        b.appendChild(d)
    }
};
truste.eu.toggleCloseButton = truste.eu.toggelCloseButton || function(c, b) {
    if (c.closebtnid) {
        var a = document.getElementById(c.closebtnid);
        if (a) {
            a.style.visibility = (b != null && b == "true" ? "visible" : "hidden")
        }
    }
};
truste.eu.postMessage = truste.eu.postMessage || function(b, c, a) {
    if (window.postMessage) {
        (c || window).postMessage(b, a || "*")
    } else {}
};
truste.eu.msgListenerIE7 = truste.eu.msgListenerIE7 || function(data) {
    var prefData=!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(data.replace(/"(\\.|[^"\\])*"/g, ""))) && eval("(" + data + ")");
    truste.eu.actmessage(prefData)
};
truste.eu.msgListener = truste.eu.msgListener || function(e) {
    var urls = [(truste.eu.bindMap.prefmgrUrl.match(/^.{3,5}:\/\/[^\/]*/) || ["*"])[0], window.location.protocol + "//consent-pref.truste.com", window.location.protocol + "//consent2-pref.truste.com"];
    if (e.data) {
        for (var i = urls.length; i-->0;) {
            if (urls[i] == e.origin) {
                var prefData = null;
                try {
                    if (typeof e.data == "string") {
                        prefData = JSON.parse(e.data)
                    } else {
                        if (typeof e.data == "object") {
                            prefData = e.data
                        }
                    }
                } catch (f) {
                    prefData=!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(e.data.replace(/"(\\.|[^"\\])*"/g, ""))) && eval("(" + e.data + ")")
                }
                truste.eu.actmessage(prefData);
                return 
            }
        }
    }
};
truste.eu.resizeFrame = truste.eu.resizeFrame || function(a, c) {
    var b = document.getElementById(truste.eu.popframe);
    if (b && b.style) {
        b.style.width = a;
        b.style.height = c
    }
};
truste.eu.adjustLeftMargin = truste.eu.adjustLeftMargin || function(a) {
    var b = document.getElementById(truste.eu.popdiv2);
    if (b && b.style) {
        b.style.marginLeft = a
    }
};
truste.eu.prefclosebutton = truste.eu.prefclosebutton || function() {
    if (truste.eu.sendclosereport) {
        var a = truste.eu.bindMap.messageBaseUrl.replace("noticemsg", "consentmsg");
        truste.eu.logMessage("close_button", truste.eu.bindMap, a)
    }
    truste.eu.prefclose()
};
truste.eu.prefclose = truste.eu.prefclose || function() {
    try {
        if (pop2 = (pop = document.getElementById(truste.eu.popdiv)) && document.getElementById(truste.eu.popdiv2)) {
            pop.parentNode.removeChild(pop);
            pop2.parentNode.removeChild(pop2);
            truste.eu.poller.stop();
            truste.eu.mobile.removeMetaTag();
            try {
                var b = document.getElementsByTagName("object");
                for (var a = 0; a < b.length; ++a) {
                    var d = b[a];
                    d && (d.className = d.className.replace(/\btruste_hidden\b/g, ""))
                }
            } catch (c) {}
            return true
        }
    } catch (c) {
        window.console && console.log && console.log(c.message)
    }
    return false
};
truste.eu.logMessage = truste.eu.logMessage || function(b, c, a) {
    truste.eu.sendnotice("action=" + b + "&domain=" + c.domain + "&behavior=" + c.behavior + "&country=au&language=en", a)
};
truste.eu.prefview = truste.eu.prefview || function(x, p) {
    truste.eu.popdiv = ("pop-div" + Math.random()).replace(".", "");
    truste.eu.popdiv2 = ("pop-div2" + Math.random()).replace(".", "");
    truste.eu.popdiv3 = ("pop-div3" + Math.random()).replace(".", "");
    truste.eu.popframe = ("pop-frame" + Math.random()).replace(".", "");
    truste.eu.sendclosereport = true;
    truste.eu.mobile.setup();
    var q = x.width;
    q =- q / 2;
    var w = (x.prefmgrUrl && x.prefmgrUrl.indexOf("?") > 0) ? "&site=": "?site=";
    var j = "&action=";
    var k = "&preferences=";
    var d = "&locale=";
    var m = "&country=";
    var h = "&behavior=";
    var y = truste.eu.getParam(truste.eu.jsNode1, "ostype");
    var g = truste.eu.getParam(truste.eu.jsNode1, "gtm");
    var c = x.prefmgrUrl + w + x.domain + j + p + m + x.country;
    if (x.locale) {
        c += d + x.locale
    }
    if (x.prefCookie != null) {
        c += k + truste.eu.getPrefValue(x)
    }
    if (x.behavior) {
        c += h + x.behavior
    }
    if (y || truste.eu.mobile.isMobile) {
        c += "&ostype=mobile"
    }
    if (x.behaviorManager == "eu") {
        c += "&layout=default_eu"
    }
    if (g && g != "false") {
        c += "&gtm=true"
    }
    c += "&from=http://consent.truste.com/";
    var s = truste.eu.utility.findHighestZIndex("div") * 2;
    var n = document.createElement("div");
    n.setAttribute("id", truste.eu.popdiv);
    n.className = "overlay";
    n.style.backgroundColor = "#000";
    n.style.opacity = "0.4";
    n.style.position = "fixed";
    n.style._position = "absolute";
    n.style.zIndex = s + 1000000;
    n.style.width = "100%";
    n.style.height = "100%";
    n.style.top = "0";
    n.style.left = "0";
    n.style.overflow = "hidden";
    n.style.filter = "Alpha(Opacity: 80)";
    var v = document.createElement("div");
    v.setAttribute("id", truste.eu.popdiv2);
    v.className = "box_overlay";
    v.style.position = "absolute";
    v.style.zIndex = s + 2000000;
    v.style.top = "150px";
    v.style.borderRadius = "5px";
    v.style.padding = x.box_overlay.padding;
    v.style.background = x.backgroundImage;
    v.style.left = "50%";
    v.style.marginLeft = q + "px";
    var r = document.createElement("div");
    r.setAttribute("id", truste.eu.popdiv3);
    r.className = "box_overlay_inner";
    r.style.position = "relative";
    var t = document.createElement("iframe");
    t.src = c;
    t.id = truste.eu.popframe;
    t.style.width = x.width + "px";
    t.style.height = x.height + "px";
    t.frameBorder = "0";
    t.scrolling = "no";
    t.style.border = "0";
    t.style.borderRadius = "2px";
    t.style.overflow = "hidden";
    t.style.background = "#fff";
    t.style.display = "block";
    t.style.position = "static";
    truste.eu.iframe = t;
    document.body.appendChild(n);
    document.body.appendChild(v);
    v.appendChild(r);
    r.appendChild(t);
    try {
        var a = document.getElementsByTagName("object");
        for (var r = a.length; r-->0;) {
            var l = a[r];
            l && (l.className += " truste_hidden")
        }
    } catch (u) {}
    truste.eu.addCloseButton(x);
    scrollTo(0, 0);
    truste.eu.poller.start();
    if (truste.eu.mobile.isMobile) {
        truste.eu.mobile.onresize();
        truste.eu.mobile.addMobileHandler()
    }
};
truste.eu.utility = truste.eu.utility || {
    getStyle: function getStyle(a, b) {
        if (a.currentStyle) {
            return a.currentStyle[b]
        } else {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                return document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
            } else {
                return a.style[b]
            }
        }
    },
    findHighestZIndex: function(d) {
        var a = document.getElementsByTagName(d);
        var e = 0;
        for (var c = 0; c < a.length; c++) {
            var b = this.getStyle(a[c], "z-index");
            if ((b > e) && (b != "auto")) {
                e = b
            }
        }
        return parseFloat(e)
    }
};
truste.eu.mobile = truste.eu.mobile || {
    isMobile: false,
    setup: function() {
        if (this.checkIfMobile()&&!this.checkMetaTag()) {
            this.addMetaTag()
        }
    },
    destroy: function() {
        this.removeMetaTag()
    },
    checkIfMobile: function() {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var d = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|nexus (7|s|one)|galaxy.*nexus|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
        var c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        this.isMobile = (d.test(b) || c.test(b.substr(0, 4)));
        return this.isMobile
    },
    checkMetaTag: function() {
        var a = document.getElementsByTagName("meta");
        for (var b = 0; b < a.length; b++) {
            if (a[b].getAttribute("id") == "viewport" || a[b].getAttribute("name") == "viewport") {
                return true
            }
        }
        return false
    },
    addMetaTag: function() {
        document.getElementsByTagName("head")[0].appendChild(this.getMetaTag())
    },
    getMetaTag: function() {
        var a = document.createElement("meta");
        a.id = "trusteviewport";
        a.name = "viewport";
        a.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
        return a
    },
    removeMetaTag: function() {
        var a = document.getElementById("trusteviewport");
        if (a) {
            a.parentNode.removeChild(a)
        }
    },
    addMobileHandler: function() {
        var a = document.getElementById(truste.eu.popdiv2);
        if ((a && a.style) && (screen.width > 320)) {
            a.style.top = "20px"
        }
        if (window.orientation) {
            window.addEventListener("orientationchange", this.onresize, false)
        } else {
            window.addEventListener("resize", this.onresize, false)
        }
    },
    onresize: function() {
        var c, b;
        var f = truste.eu.bindMap;
        if (screen.width) {
            var d = screen.width;
            if (f.behaviorManager == "eu") {
                if (d > 720 && d <= 1280) {
                    c = "420px";
                    b = "-220px"
                }
                if (d > 320 && d <= 720) {
                    c = "280px";
                    b = "-150px"
                }
                if (d <= 320) {
                    c = "260px";
                    b = "-140px"
                }
                if (d > 1280) {
                    c = "600px";
                    b = "-320px"
                }
            } else {
                if (d > 720 && d <= 1280) {
                    c = "520px";
                    b = "-270px"
                }
                if (d > 320 && d <= 720) {
                    c = "320px";
                    b = "-185px"
                }
                if (d <= 320) {
                    c = "320px";
                    b = "-160px";
                    var e = document.getElementById(truste.eu.popdiv2);
                    e.style.padding = "0px";
                    e.style.top = "0px";
                    var a = document.getElementById(f.closebtnid);
                    a.style.top = "0px";
                    a.style.right = "0px";
                    a.style.opacity = "0.5"
                }
                if (d > 1280) {
                    c = "960px";
                    b = "-480px"
                }
            }
        } else {
            var d = window.innerWidth;
            if (d > 480 && d <= 768) {
                c = "420px";
                b = "-220px"
            }
            if (d > 320 && d <= 480) {
                c = "280px";
                b = "-150px"
            }
            if (d <= 320) {
                c = "260px";
                b = "-140px"
            }
            if (d > 768) {
                c = "600px";
                b = "-320px"
            }
        }
        f.width = c;
        scrollTo(0, 0);
        truste.eu.resizeFrame(c, f.height + "px");
        truste.eu.adjustLeftMargin(b)
    }
};
truste.eu.poller = truste.eu.poller || {
    lastHash: document.location.hash,
    active: false,
    _intervalId: 0,
    start: function() {
        if (!this.active || this._intervalId) {
            return
        }
        this._intervalId = setInterval(this._action, 200);
        this.lastHash = document.location.hash
    },
    stop: function() {
        clearInterval(this._intervalId);
        this._intervalId = 0
    },
    _action: function(b) {
        if (!truste.eu.poller.active || truste.eu.poller._intervalId == 0) {
            return
        }
        var a = document.location.hash;
        if (a && truste.eu.poller.lastHash != a) {
            document.location.hash = truste.eu.poller.lastHash;
            truste.eu.msgListenerIE7(a.substring(1));
            truste.eu.poller.lastHash = document.location.hash
        }
    }
};
if (window.postMessage) {
    truste.eu.addEvent(window, "message", truste.eu.msgListener)
} else {
    truste.eu.poller.active = true
}
setTimeout(function() {
    try {
        var c = document.createElement("style"), b = "truste_hidden", f = "visibility:hidden;";
        c.type = "text/css";
        if (!(c.sheet || {}).insertRule) {
            (c.styleSheet || c.sheet).addRule(b, f)
        } else {
            c.sheet.insertRule(b + "{" + f + "}", 0)
        }
        document.getElementsByTagName("head")[0].appendChild(c)
    } catch (d) {}
    var h = truste.eu.bindMap;
    truste.eu.iconid = ("icon-id" + Math.random()).replace(".", "");
    truste.eu.caIcon = document.getElementById(h.containerId);
    var g = h.containerId == decodeURI("%5F%4C%42c%4C%42%5F") ? null: h.containerId;
    if (truste.eu.caIcon || (!g && truste.eu.jsNode1 && truste.eu.jsNode1.parentNode.nodeName != "HEAD" && (truste.eu.caIcon = truste.eu.jsNode1.parentNode))) {
        truste.eu.showSeal()
    } else {
        if (g) {
            var a = setInterval(function() {
                truste.eu.caIcon = truste.eu.caIcon || document.getElementById(truste.eu.bindMap.containerId);
                if (truste.eu.caIcon) {
                    clearInterval(a);
                    truste.eu.showSeal()
                }
            }, 100)
        }
    }
    if (truste.eu.getPrefValue(h) != null) {
        truste.eu.logMessage("returns", h, h.messageBaseUrl)
    } else {
        if (h.behavior == "expressed") {
            truste.eu.prefview(h, "notice");
            truste.eu.logMessage("consent", h, h.messageBaseUrl)
        }
    }
}, 500);
truste.eu.showThrobber = truste.eu.showThrobber || function() {
    var b = document.createElement("div");
    var a = (truste.eu.assetServerURL + "throbber.gif");
    b.innerHTML = '<img src="' + a + '" border="0" style="opacity:0.5;width:16px; height:16px; vertical-align: middle;margin-right:5px;" /> Processing Opt-outs';
    b.id = "truste.eu.throbber";
    document.getElementsByTagName("body")[0].appendChild(b);
    b.setAttribute("style", "position: fixed;bottom: 0;right: 20px; background: white;  border:1px solid #dddddd; border-bottom:none; font:10px Arial,sans-serif; color:#676767; padding:5px 10px;");
    window.onbeforeunload = window.onbeforeunload || unloadScript
};
truste.eu.hideThrobber = truste.eu.hideThrobber || function() {
    var a = document.getElementById("truste.eu.throbber");
    if (a) {
        a.parentNode.removeChild(a)
    }
    if (window.onbeforeunload == unloadScript) {
        window.onbeforeunload = null
    }
};
truste.eu.showCM = truste.eu.showCM || function(a) {
    try {
        if (pop2 = (pop = document.getElementById(truste.eu.popdiv)) && document.getElementById(truste.eu.popdiv2)) {
            pop3 = document.getElementById(truste.eu.popdiv3);
            if (a == "false") {
                pop.style.visibility = "hidden";
                pop2.style.visibility = "hidden"
            } else {
                pop.style.visibility = "block";
                pop2.style.visibility = "block"
            }
            return true
        }
    } catch (b) {
        window.console && console.log && console.log(b.message)
    }
    return false
};
