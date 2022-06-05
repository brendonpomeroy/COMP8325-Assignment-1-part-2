function ebCBrowserDetector(browserType, browserVer, platform) {
    var browserTypes = {
        notsupported: 0,
        ie: 1,
        ff: 2,
        nn: 3,
        safari: 4,
        chrome: 5,
        aol: 6,
        opera: 7
    };
    var platformTypes = {
        notsupported: 0,
        win95: 1,
        win98: 2,
        win2k: 3,
        winXP: 4,
        winME: 5,
        winNT: 6,
        Mac: 7,
        winVista: 8,
        win7: 9
    };
    this.browserType = browserType;
    this.browserVer = browserVer;
    this.platform = platform;
    this.getVersion = function () {
        return this.browserVer;
    };
    this.isIE = function () {
        return this.browserType == browserTypes.ie || this.browserType == browserTypes.aol;
    };
    this.isFF = function () {
        return this.browserType == browserTypes.ff;
    };
    this.isSafari = function () {
        return this.browserType == browserTypes.safari || this.browserType == browserTypes.chrome;
    };
    this.isRealSafari = function () {
        return this.browserType == browserTypes.safari;
    };
    this.isChrome = function () {
        return this.browserType == browserTypes.chrome;
    };
    this.isNN = function () {
        return this.browserType == browserTypes.nn;
    };
    this.isAOL = function () {
        return this.browserType == browserTypes.aol;
    };
    this.isOpera = function () {
        return this.browserType == browserTypes.opera;
    };
    this.isMac = function () {
        return this.platform == platformTypes.Mac;
    };
}
if (typeof (gEbBC) == "undefined")
    gEbBC = new ebCBrowserDetector(ebO.bt, ebO.bv, ebO.plt);
if (!("JSON" in window && window.JSON)) {
    JSON = {}
}(function () {
    function f(n) {
        return n < 10 ? "0" + n : n 
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" 
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf() 
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\" 
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4) 
        }) + '"' : '"' + string + '"' 
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key) 
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value) 
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null" 
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null" 
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v 
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === "string") {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v) 
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v) 
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v 
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " " 
                }
            } else {
                if (typeof space === "string") {
                    indent = space 
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify") 
            }
            return str("", {
                "": value 
            }) 
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v 
                            } else {
                                delete value[k] 
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value) 
            }
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4) 
                }) 
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j 
                }, "") : j 
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
if (typeof(gfEbOnInternalIframe) == "undefined")
    gfEbOnInternalIframe = false;
if (!gfEbOnInternalIframe) {
    if ((typeof(gEbBAd) == "undefined") ||!gEbBAd)
        gEbBAd = new Object();
    gEbBAd.strNClickUrl = ebO.ncu ? unescape(ebO.ncu) : "";
    gEbBAd.nFlightID = ebO.pli;
    gEbBAd.nAdID = ebO.ai;
    gEbBAd.nCampaignID = ebO.ci;
    gEbBAd.fOptOut = gEbFOptOut = typeof(ebO.oo) != "undefined" ? ebO.oo : 0;
    gEbBAd.fShowOnlyImage = ebO.soi ? ebO.soi : 0;
    gEbBAd.strTemplateName = gEbTemplateName = ebO.tn;
    gEbBAd.strAdUrl = ebO.au;
    gEbBAd.newClickTracking = typeof (ebO.nClk) != "undefined" ? ebO.nClk : 1;
    gEbBAd.onStartDnlEvents = new ebCEventHandler();
    gEbBAd.onPlayEvents = new ebCEventHandler();
    if (ebO.osde)
        gEbBAd.onStartDnlEvents.events = ebO.osde;
    if (ebO.ope)
        gEbBAd.onPlayEvents.events = ebO.ope;
    for (var i = 0; i < gEbBAd.onStartDnlEvents.events.length; i++)
        gEbBAd.onStartDnlEvents.events[i].strType = "Object";
    for (var i = 0; i < gEbBAd.onPlayEvents.events.length; i++)
        gEbBAd.onPlayEvents.events[i].strType = "Object";
    gEbBAd.fCollectURL = ebO.cu ? ebO.cu : 0;
    gEbBAd.fullRedirectUrl = ebO.fru ? ebO.fru : "";
    gEbBAd.sPublisherPlacementId = ebO.ppi ? ebO.ppi : "";
    gEbBAd.sAdVersions = ebO.av ? ebO.av : "";
    gEbBAd.sDefaultAdVersion = ebO.avd ? ebO.avd : "";
    gEbBAd.massVersionFolderDivider = ebO.mvfd ? ebO.mvfd : 0;
    gEbBAd.sTAId = (ebO.ta && ebO.ta != "-1") ? ebO.ta : "";
    gEbBAd.sAdBasePath = ebO.abp ? ebO.abp : "";
    gEbBAd.sDGId = (ebO.dg && ebO.dg != "-1") ? ebO.dg : "";
    gEbBAd.sID = (ebO.sid) ? ebO.sid : "";
    gEbBAd.usercookie = ebO.usercookie ? ebO.usercookie : "";
    gEbBAd.nWidth = ebO.w;
    gEbBAd.nHeight = ebO.h;
    gEbBAd.strRand = ebRand;
    gEbBAd.nHistLen = ebO.hl;
    gEbBAd.dctu = ebO.dctu;
    gEbBAd.ditu = ebO.ditu;
    if (typeof (ebO.IABBV) != "undefined" && typeof (ebO.IABEV) != "undefined") {
        gEbBAd.iabMinSurf = ebO.IABMS ? ebO.IABMS : 50;
        gEbBAd.iabMinDur = ebO.IABMD ? ebO.IABMD : 1;
        if (!ebO.IABBV&&!ebO.IABEV) {
            gEbBAd.visibilityMode = "default";
        } else {
            gEbBAd.visibilityMode = "basic";
            gEbBAd.agnMinSurf = ebO.AgMS ? ebO.AgMS : gEbBAd.iabMinSurf;
            gEbBAd.agnMinDur = ebO.AgMD ? ebO.AgMD : gEbBAd.iabMinDur;
            if (ebO.IABEV) {
                gEbBAd.visibilityMode = "enhanced";
                gEbBAd.advMinSurf = ebO.AdMS ? ebO.AdMS : gEbBAd.iabMinSurf;
                gEbBAd.advMinDur = ebO.AdMD ? ebO.AdMD : gEbBAd.iabMinDur;
            }
        }
    }
    gEbBAd.AcCP = ebO.AcCP;
    gEbBAd.CAcURL = ebO.CAcURL;
    gEbBAd.AcImagesDir = ebO.imgv;
    gEbBAd.strPage = ebO.p;
    gEbBAd.fWebPageSource = 1;
    if (ebO.ut)
        gEbURLTokens = ebO.ut;
    if (ebO.dlm)
        gEbBAd.nDownloadMode = ebO.dlm;
    if (ebO.dmn)
        gstrEbDomain = ebO.dmn;
    if (ebO.ifl)
        gstrEbIframeLocation = ebO.ifl;
    if (ebO.z)
        gnEbMinZIndex = ebO.z;
    gEbBAd.fTest = ebO.t ? true : false;
    gEbDbgLvl = ebO.d;
    if (ebO.ifrm===-1) {
        ebAutoDetectServingMode();
    }
    gfEbMSNIframe = (ebIsGlobalDef("inDapIF", true) || ebIsGlobalDef("inFIF", true));
    if (gfEbMSNIframe) {
        ebO.ifrm = 0;
        gfEbInIframe = false;
    }
} else {
    var nIndex = ebSrc.lastIndexOf("/");
    ebBigS = ebSrc.substr(0, nIndex + 1);
}
if (typeof(gnEbLowBWLimit) == "undefined")
    gnEbLowBWLimit = 120;
ebStrProtocol = ebPtcl;
ebSmallS = ebStrProtocol + ebO.sms + "/ebServing.js";
ebBS = ebO.bs;
ebDataCapture = ebBS;
gEbAIE = ebO.aiE || new Object();
if (typeof(gEbfOfflineDemo) == "undefined")
    gEbfOfflineDemo = false;
ebFullPageSkinVer = "";
ebReportPageVer = ebO.rpv;
ebPositionVer = ebO.pv;
ebConduitVer = gEbfOfflineDemo ? "" : "ebV54_";
ebIntTimeVer = gEbfOfflineDemo ? "" : "V62_12";
ebPluID = ebO.pi;
ebWMVDriverVer = ebO.wv;
gfEbInIframe = ebIsGlobalDef("gfEbInIframe", true);
if (ebO.ifrm > 0)
    gfEbInIframe = true;
if (!ebIsGlobalDef("gEbFlyLocal"))
    gEbFlyLocal = false;
ebWMVStreamingPrefix = "mms://a419.v12429d.c12429.g.vm.akamaistream.net/7/419/12429/v0001/";
ebAKAMAIFCS = "rtmp://cp16207.edgefcs.net/ondemand";
ebFCSVirtualPath = ebO.fvp;
ebIntReportTimeout = ebO.irt ? ebO.irt : null;
gEbnMaxTimerTime = 15 * 1000 * 60;
function ebIsPreview() {
    return ((typeof(gfEbPreview) != "undefined") && gfEbPreview);
}
function ebAutoDetectServingMode() {
    try {
        gfEbInIframe = ebIsGlobalDef("gfEbInIframe", true);
        var parentHostName = null;
        try {
            parentHostName = parent.location.hostname;
        } catch (e) {}
        if (window !== parent) {
            if (window.location.hostname === parentHostName) {
                inDapIF = inFIF = true;
                var ref = "";
                while (eval("window" + ref).window !== eval("window" + ref + ".parent").window) {
                    ref += ".parent";
                }
                ref = ref.substring(8);
                if (ref.length > 0) {
                    gstrEbDisplayPos = ref;
                }
            } else {
                gfEbInIframe = ((typeof (gfEbOnInternalIframe) !== "undefined") && gfEbOnInternalIframe) ? false : true;
            }
        }
    } catch (e) {}
}
function ebSetCookie(name, val, fSessionCookie) {
    if (typeof (gEbFOptOut) != "undefined" && gEbFOptOut) {
        return;
    }
    if (typeof (gEbClientInfo) != "undefined" && gEbClientInfo.cookieInfo.fOptOut) {
        return;
    }
    if (typeof (fSessionCookie) == "undefined") {
        fSessionCookie = false;
    }
    var strDomain = ".";
    if (typeof (gstrEbDomain) != "undefined" && (gstrEbDomain != "")) {
        strDomain += gstrEbDomain;
    } else {
        try {
            strDomain = "." + document.location.hostname;
        } catch (e) {
            strDomain = "";
        }
    }
    var cookieStr = name + '_' + strDomain + "=" + escape(val) + "; ";
    if (!fSessionCookie) {
        var dtExpires = new Date();
        dtExpires.setTime(dtExpires.getTime() + 1000 * 60 * 60 * 24 * 365);
        cookieStr += "expires=" + dtExpires.toGMTString() + "; ";
    }
    cookieStr += "path=/; ";
    if (ebIsValidDomain(strDomain)) {
        cookieStr += "domain=" + strDomain;
    }
    document.cookie = cookieStr;
}
function ebIsValidDomain(strDomain) {
    if ((strDomain != null) && (strDomain != 'undefined')) {
        var domainParts = strDomain.split(".");
        if (domainParts.length < 3)
            return false;
        else 
            return true;
    } else 
        return false;
}
function ebReadCookie(name) {
    var strDomain = ".";
    if (typeof(gstrEbDomain) != "undefined" && (gstrEbDomain != ""))
        strDomain += gstrEbDomain;
    else {
        eval('try{strDomain = "." + document.location.hostname;}catch(e){strDomain = "";}');
    }
    var cookie = document.cookie;
    name += '_' + strDomain;
    var start = cookie.indexOf(name + "=");
    if (start==-1)
        return ("");
    start += name.length + 1;
    var end = cookie.indexOf(';', start);
    if (end==-1)
        end = cookie.length;
    var cookieVal = cookie.substring(start, end);
    return (unescape(cookieVal));
}
function ebShouldAddInnerIframe() {
    var fResult = ((typeof(gfEbInIframe) != "undefined") && gfEbInIframe && (gEbTemplateName == "ExpBanner" || gEbTemplateName == "SingleExpBanner"));
    return fResult;
}
function ebAddInnerIframe() {
    var src = ebGetAddineyeLocation();
    if (src == "") {
        return false;
    }
    if (!gEbBAd.nDownloadMode) {
        gEbBAd.nDownloadMode = 1;
    }
    if (!gEbBAd.strWmode) {
        gEbBAd.strWmode = "";
    }
    if (!gEbBAd.nDelayedExpInterval) {
        gEbBAd.nDelayedExpInterval = 0;
    }
    if (!gEbBAd.nDelayedExpMaxV) {
        gEbBAd.nDelayedExpMaxV = 0;
    }
    if (!gEbBAd.panelsWMode) {
        gEbBAd.panelsWMode = "";
    }
    if (typeof (gEbBAd.fFixOperAborted) == "undefined") {
        gEbBAd.fFixOperAborted = false;
    }
    gEbBannerData = gEbBAd.strRand + "::" + gEbBAd.nDownloadMode + "::" + gEbBAd.nWidth + "::" + gEbBAd.nHeight + "::" + gEbBAd.strWmode + "::" + gEbBAd.strPage + "::" + gEbBAd.fWebPageSource + "::" + gEbBAd.fOptOut + "::" + gEbBAd.nHistLen + "::" + "::" + "::" + "::" + gEbBAd.nDelayedExpInterval + "::" + gEbBAd.nDelayedExpMaxV + "::" + "::" + gEbBAd.panelsWMode + "::" + gEbBAd.fFixOperAborted + "::" + gEbBAd.sPublisherPlacementId + "::" + gEbBAd.strNClickUrl + "::" + gEbBAd.AcCP + "::" + gEbBAd.CAcURL + "::" + gEbBAd.AcImagesDir;
    var strAdData = "";
    strAdData += "gEbServerData='" + gEbServerData + "'" + ";gEbBannerData='" + gEbBannerData + "';";
    var scriptFileName = ebSrc.substr(ebSrc.lastIndexOf('/') + 1);
    strAdData += ebFormat("ebBigS='{0}';ebBigSF='{1}';ebResourcePath='{2}';ebPli='{3}';", escape(ebBigS), scriptFileName, escape(ebResourcePath), ebPli);
    strAdData += GetIframeUrlObjStr();
    strAdData += "gEbDbgLvl=" + gEbDbgLvl + ";";
    strAdData += "gnEbLowBWLimit=" + gnEbLowBWLimit + ";";
    if ((typeof (gstrEbPreLoadScripts) != "undefined") && gstrEbPreLoadScripts) {
        strAdData += "gstrEbPreLoadScripts='" + gstrEbPreLoadScripts + "';";
    }
    if ((typeof (gstrEbCustomEventHandlers) != "undefined") && gstrEbCustomEventHandlers) {
        strAdData += "gstrEbCustomEventHandlers='" + gstrEbCustomEventHandlers + "';";
    }
    if (typeof (gfEbInlineBanner) != "undefined") {
        strAdData += "gfEbInlineBanner=" + gfEbInlineBanner + ";";
    }
    if (typeof (gEbEyeDivRefElement) != "undefined") {
        strAdData += "gEbEyeDivRefElement = '" + gEbEyeDivRefElement + "';";
    }
    if (typeof (gstrEbDisplayPos) != "undefined") {
        strAdData += "gstrEbDisplayPos = '" + gstrEbDisplayPos + "';";
    }
    if (typeof (gfEbUseMozHideIframe) != "undefined") {
        strAdData += "gfEbUseMozHideIframe =" + gfEbUseMozHideIframe + ";";
    }
    if (typeof (gnEbMinZIndex) != "undefined") {
        strAdData += "gnEbMinZIndex =" + gnEbMinZIndex + ";";
    }
    if (typeof (gfEbForceStreaming) != "undefined")
        strAdData += "gfEbForceStreaming =" + gfEbForceStreaming + ";";
    if (typeof (gfEbUseHTTPS) != "undefined") {
        strAdData += "gfEbUseHTTPS =" + gfEbUseHTTPS + ";";
    }
    if (typeof (gfEbUseIntFlash) != "undefined") {
        strAdData += "gfEbUseIntFlash =" + gfEbUseIntFlash + ";";
    }
    if (ebIsGlobalDef("gEbfLoadAsAS2")) {
        strAdData += ebFormat("gEbfLoadAsAS2={0};", gEbfLoadAsAS2);
    }
    src = src + "?strBanner=" + escape(strAdData);
    if (typeof (gEbURLTokens) != "undefined") {
        var tokens = unescape(gEbURLTokens);
        gEbURLTokens = tokens.replace("'", "&apos;");
        var bTooLong = false;
        if (gEbBC.isIE()) {
            var fullLen = src.length + escape(gEbURLTokens).length;
            if (gEbBC.getVersion() >= 9.0) {
                bTooLong = (fullLen >= 4096) ? true : false;
            } else {
                bTooLong = (fullLen >= 2048) ? true : false;
            }
        }
        if (!bTooLong) {
            src += "gEbURLTokens = '" + escape(gEbURLTokens) + "';";
        }
    }
    document.write(ebFormat("<iframe frameborder=0 src=\"{0}\" style=width:0px;height:0px;></iframe>", src));
    return true;
}
function ebAddInnerIframeForTest() {
    var src = ebGetAddineyeLocation();
    var strAdData = "";
    if (src != "") {
        strAdData += ebGetAddineyeDomain() + "::" + ebBS + "::" + ebStrProtocol;
        src = src + "?strAie" + escape(strAdData);
        document.write(ebFormat("<iframe frameborder=0 src=\"{0}\" style=width:0px;height:0px;></iframe>", src));
    }
}
function ebGetHostName(url) {
    var i;
    var host = "";
    url = url.toLowerCase();
    if ((url.length >= 7) && (url.substr(0, 7) == "http://"))
        host = url.substr(7);
    else if ((url.length >= 8) && (url.substr(0, 8) == "https://"))
        host = url.substr(8);
    else 
        host = url;
    i = host.indexOf("/");
    if (i > 0)
        host = host.substr(0, i);
    return (host);
}
function ebGetAddineyeLocation() {
    var strSecured = (ebStrProtocol == "https://") ? "-secure" : "";
    var src = "eyeblaster/addineyeV2" + strSecured + ".html";
    if ((typeof(gstrEbIframeLocation) != "undefined") && (gstrEbIframeLocation != ""))
        src = gstrEbIframeLocation;
    if (src.substr(0, 4) != "http") {
        var siteHost = ebGetHostName(document.referrer);
        if (siteHost == "")
            return "";
        src = ebStrProtocol + siteHost + "/" + src;
    }
    return (src);
}
function ebGetAddineyeDomain() {
    var siteHost = "";
    siteHost = ebGetHostName(document.referrer);
    return (siteHost);
}
function ebAddineyePredefined() {
    if ((typeof (gstrEbIframeLocation) != "undefined") && (gstrEbIframeLocation != "")) {
        return true;
    }
    return false;
}
function InitServerData() {
    gEbServerData = "1" + "::" + gEbBAd.nFlightID + "::" + gEbBAd.nAdID + "::" + gEbBAd.strAdUrl + "::" + gEbBAd.strTemplateName + "::" + "0" + "::" + "::" + "::" + gEbBAd.fShowOnlyImage + "::" + "::" + "::" + "::" + "::" + "1" + "::" + gEbBAd.nCampaignID + "::" + gEbBAd.fOptOut + "::" + gEbBAd.fCollectURL + "::" + "::" + "::" + "::" + gEbBAd.sAdVersions + "::" + gEbBAd.sTAId + "::" + gEbBAd.sAdBasePath + "::" + gEbBAd.sDGId + "::";
    var strEvent = "[";
    for (var i = 0; i < gEbBAd.onStartDnlEvents.events.length; i++) {
        if (i > 0)
            strEvent += ",";
        var ev = gEbBAd.onStartDnlEvents.events[i];
        var tmpStr = ebFormat('{url:"{0}", typeId:{1}}', ev.url, ev.typeId);
        strEvent += tmpStr;
    }
    strEvent += "]";
    gEbServerData += escape(strEvent) + "::";
    strEvent = "[";
    for (var i = 0; i < gEbBAd.onPlayEvents.events.length; i++) {
        if (i > 0)
            strEvent += ",";
        var ev = gEbBAd.onPlayEvents.events[i];
        var tmpStr = ebFormat('{url:"{0}", typeId:{1}}', ev.url, ev.typeId);
        strEvent += tmpStr;
    }
    strEvent += "]";
    gEbServerData += escape(strEvent);
    gEbServerData += "::" + gEbBAd.sID;
    gEbServerData += "::" + gEbBAd.usercookie;
    gEbServerData += "::" + gEbBAd.iabMinSurf;
    gEbServerData += "::" + gEbBAd.iabMinDur;
    gEbServerData += "::" + gEbBAd.visibilityMode;
    gEbServerData += "::" + gEbBAd.agnMinSurf;
    gEbServerData += "::" + gEbBAd.agnMinDur;
    gEbServerData += "::" + gEbBAd.advMinSurf;
    gEbServerData += "::" + gEbBAd.advMinDur;
    if (typeof (gEbAIE.iflCheck) != "undefined" && gEbAIE.iflCheck) {
        gEbServerData += "::" + 1;
    } else {
        gEbServerData += "::" + 0;
    }
    gEbServerData += "::" + gEbBAd.newClickTracking;
    gEbServerData += "::" + gEbBAd.massVersionFolderDivider;
}
function GetIframeUrlObjStr() {
    var strEbO = "ebO=new Object();" + "ebO.sms='" + ebO.sms + "';" + "ebO.bs='" + ebO.bs + "';" + "ebO.fvp='" + ebO.fvp + "';" + "ebO.rpv='" + ebO.rpv + "';" + "ebO.pv='" + ebO.pv + "';" + "ebO.pi=" + ebO.pi + ";" + "ebO.wv='" + ebO.wv + "';" + "ebPtcl='" + ebPtcl + "';" + "ebO.bt=" + ebO.bt + ";" + "ebO.bv=" + ebO.bv + ";" + "ebO.plt=" + ebO.plt + ";" + "ebO.irt=" + ebO.irt + ";";
    return strEbO;
}
function ebCEmptyDebug(lvl) {
    this.setDbgLvl = setDbgLvl;
    this.debug2 = setDbgLvl;
    this.debug = setDbgLvl;
    this.info = setDbgLvl;
    this.attention = setDbgLvl;
    this.warning = setDbgLvl;
    this.error = setDbgLvl;
    this.fatal = setDbgLvl;
    this.always = setDbgLvl;
    this.delimiter = setDbgLvl;
    function setDbgLvl(lvl) {}
}
function ebCEmptyCommonDebug() {
    this.debug2 = setDbgLvl;
    this.debug = setDbgLvl;
    this.info = setDbgLvl;
    this.attention = setDbgLvl;
    this.warning = setDbgLvl;
    this.error = setDbgLvl;
    this.fatal = setDbgLvl;
    this.always = setDbgLvl;
    this.delimiter = setDbgLvl;
    function setDbgLvl(lvl) {}
}
function ebCEventHandlerInfo(element, eventName, eventHandler) {
    this.element = element;
    this.eventName = eventName;
    this.eventHandler = eventHandler;
}
function ebCTagInsertorBase() {
    var registeredEvents = new Array();
    this.win = self;
    this.addEventHandler = addEventHandler;
    this.getVisibilityEventName = getVisibilityEventName;
    this.removeEventHandler = removeEventHandler;
    this.clearAllEvents = clearAllEvents;
    this.getDoc = getDoc;
    this.getWin = getWin;
    this.calcClientAreaWidthMozilla = calcClientAreaWidthMozilla;
    this.getCurrentStyleAttr = getCurrentStyleAttr;
    function getCurrentStyleAttr(elem, attr) {
        var AttrVal = null;
        if (gEbBC.isIE())
            AttrVal = elem.currentStyle[attr];
        else {
            if (gEbBC.isSafari() && (elem.tagName.toLowerCase() == "embed") && elem.parentNode && (elem.parentNode.tagName.toLowerCase() == "object")) {
                elem = elem.parentNode;
            }
            AttrVal = this.getDoc().defaultView.getComputedStyle(elem, null).getPropertyValue(attr);
        }
        return AttrVal;
    }
    function addEventHandler(event, handler, obj) {
        try {
            if (typeof(obj) == "undefined")
                obj = this.getWin(this);
            if (obj.addEventListener)
                obj.addEventListener(event, eval(handler), false);
            else 
                obj.attachEvent("on" + event, eval(handler));
            registeredEvents[registeredEvents.length] = new ebCEventHandlerInfo(obj, event, handler);
        } catch (e) {}
    }
    function getVisibilityEventName(docObj) {
        var doc = docObj ? docObj: document;
        var visEvent = null;
        if (typeof (doc.hidden) !== "undefined") {
            visEvent = "visibilitychange";
        } else if (typeof (doc.mozHidden) !== "undefined") {
            visEvent = "mozvisibilitychange";
        } else if (typeof (doc.msHidden) !== "undefined") {
            visEvent = "msvisibilitychange";
        } else if (typeof (doc.webkitHidden) !== "undefined") {
            visEvent = "webkitvisibilitychange";
        }
        return visEvent;
    }
    function removeEventHandler(event, handler, obj) {
        try {
            if (typeof(obj) == "undefined")
                obj = this.getWin(this);
            if (obj.removeEventListener)
                obj.removeEventListener(event, eval(handler), false);
            else 
                obj.detachEvent("on" + event, eval(handler));
        } catch (e) {}
    }
    function clearAllEvents() {
        try {
            for (var index in registeredEvents) {
                var handlerInfo = registeredEvents[index];
                this.removeEventHandler(handlerInfo.eventName, handlerInfo.eventHandler, handlerInfo.element);
            }
        } catch (e) {}
        registeredEvents = new Array();
    }
    function getWin(objRef) {
        try {
            return self;
        } catch (e) {}
    }
    function getDoc() {
        try {
            return this.win.document;
        } catch (e) {}
    }
    function calcClientAreaWidthMozilla(fIsIE) {
        try {
            var fIsFF = gEbBC.isFF();
            if (fIsFF)
                nScroll = 19;
            else 
                nScroll = 16;
            var win = this.getWin();
            var doc = win.document;
            var nHeight = win.innerHeight;
            if (doc.width > win.innerWidth)
                nHeight -= nScroll;
            var nWidth = win.innerWidth;
            if (doc.height > win.innerHeight)
                nWidth -= nScroll;
            return nWidth;
        } catch (e) {}
    }
    function updateWin(objRef) {
        objRef.win = self;
    }
}
function ebCTIObj(name) {
    this.id = "";
    this.name = "";
    this.src = "";
    this.play = true;
    this.width = "0";
    this.height = "0";
    this.wmode = "transparent";
    this.version = 4.0;
    this.style = new Object();
    this.style.border = 0;
    this.style.margin = 0;
    this.style.padding = 0;
    this.style.textAlign = "left";
    this.style.overflow = "visible";
    this.onclick = "";
    this.onload = "";
    this.refElement = null;
    this.bgColor = "";
    this.frameborder = 0;
    this.adId = "";
    this.border = 0;
    this.margin = 0;
    this.padding = 0;
    this.strAdditionalRes = "";
    this.className = "";
    this.dir = "";
    this.containerStyle = new Object();
    this.containerStyle.border = "0px";
    this.containerStyle.margin = "0px";
    this.containerStyle.padding = "0px";
    this.containerStyle.textAlign = "left";
    this.containerStyle.overflow = "visible";
    this.fWindowlessVideo = true;
    this.scale = "";
    this.flashVars = "";
    this.fFixOperAborted = false;
    if (typeof(name) != "undefined") {
        this.id = name;
        this.name = name;
    }
    this.print = printTIObj;
    function printTIObj() {
        var str = "ebCTIObj: <br>" + "id: " + this.id + "<br>" + " name: " + this.name + "<br>" + " src: " + this.src + "<br>" + " play: " + this.play + "<br>" + " width: " + this.width + "<br>" + " height: " + this.height + "<br>" + " wmode: " + this.wmode + "<br>" + " version: " + this.version + "<br>" + " style: " + this.style + "<br>" + " onclick: " + this.onclick + "<br>" + " onload: " + this.onload + "<br>" + " refElement: " + this.refElement + "<br>" + " bgColor: " + this.bgColor;
    }
}
function ebCTagInsertor(win) {
    this.temp = ebCTagInsertorBase;
    this.temp();
    delete this.temp;
    if (typeof(win) == "undefined")
        win = self;
    var registeredEvents = new Array();
    this.tagsContainer = null;
    this.win = win;
    this.eyeDivId = "eyeDiv";
    this.write = write;
    this.addFlash = addFlash;
    this.addWMP = addWMP;
    this.addREAL = addREAL;
    this.addScript = addScript;
    this.addImage = addImage2;
    this.addDiv = addDiv;
    this.addInLineScript = addInLineScript;
    this.addFsCommandHandler = addFsCommandHandler;
    this.addIframe = addIframe;
    this.addRelativeObject = addRelativeObject;
    this.addTable = addTable;
    this.setTagsContainer = setTagsContainer;
    this.addEyeDiv = addEyeDiv;
    this.adjustEyeDivPos = adjustEyeDivPos;
    this.getWin = getWin;
    this.getDoc = getDoc;
    this.getPanelsContainer = getPanelsContainer;
    function addEyeDiv(obj) {
        try {
            if (typeof(obj) == "undefined")
                obj = new ebCTIObj();
            else 
                this.eyeDivId = obj.id;
            var divEl = this.getPanelsContainer();
            if (divEl == null) {
                var currentDoc = this.getDoc();
                if (currentDoc.body == null) {
                    return;
                }
                var eyeDivRefEl = null;
                if (typeof(gEbEyeDivRefElement) != "undefined") {
                    eyeDivRefEl = currentDoc.getElementById(gEbEyeDivRefElement);
                    if (eyeDivRefEl == null) {
                        eyeDivRefEl = currentDoc.body.firstChild;
                    }
                } else {
                    if (obj.refElement != null)
                        eyeDivRefEl = obj.refElement;
                    else 
                        eyeDivRefEl = currentDoc.body.firstChild;
                }
                var minZIndex = (typeof(gnEbMinZIndex) != "undefined") ? gnEbMinZIndex: 10000;
                var divAttr = new ebCTIObj(this.eyeDivId);
                divAttr.style.position = "absolute";
                divAttr.style.zIndex = minZIndex;
                divAttr.style.top = 0;
                divAttr.style.left = 0;
                divAttr.dir = "ltr";
                divAttr.refElement = eyeDivRefEl;
                divEl = this.addDiv("before", divAttr);
            } else {}
            this.adjustEyeDivPos();
            return divEl;
        } catch (e) {}
    }
    function adjustEyeDivPos() {
        try {
            var panelsContainer = this.getPanelsContainer();
            var containerPos = this.getCurrentStyleAttr(panelsContainer.parentNode, "position");
            if (containerPos != "static") {
                var nRealTop = ebGetRealTop(panelsContainer);
                var nNewTop = parseInt(panelsContainer.style.top) - nRealTop;
                var nRealLeft = ebGetRealLeft(panelsContainer);
                var nNewLeft = parseInt(panelsContainer.style.left) - nRealLeft;
                panelsContainer.style.top = nNewTop + "px";
                panelsContainer.style.left = nNewLeft + "px";
            }
        } catch (e) {}
    }
    function addFlash(method, obj) {
        try {
            var str = "addFlash('" + method + "','" + obj.id + "','" + obj.name + "','" + obj.src + "','" + obj.play + "','" + obj.style.width + "','" + obj.style.height + "','" + obj.wmode + "','" + obj.version + "');";
            if (obj.refElement != null)
                str = str + "refObj ID : " + obj.refElement.id;
            if (!isSupportShockwave())
                return (addObject(this, method, obj));
            else 
                return (addEmbed(this, method, obj));
        } catch (e) {}
        return (null);
    }
    function isSupportShockwave() {
        return (gEbBC.isIE() && gEbBC.getVersion() < 11 ? false : true);
    }
    function write(str, refObj) {
        try {
            if (typeof(refObj) == 'undefined')
                refObj = this;
            refObj.getDoc().write(str);
        } catch (e) {}
    }
    function addScript(method, src, id, name) {
        if (typeof(src) == 'undefined') {
            src = "";
            return;
        }
        if (typeof(id) == 'undefined')
            id = "";
        if (typeof(name) == 'undefined')
            name = "";
        if (gEbDocLoaded)
            method = 'append';
        if (method == 'append') {
            try {
                var element = this.getDoc().createElement("script");
                element.setAttribute("id", id);
                element.setAttribute("src", src);
                var container = getTagsContainer(this);
                container.appendChild(element);
            } catch (e) {}
        } else {
            if (method == 'write') {
                var strTag = '<SCR' + 'IPT';
                if (id != "")
                    strTag += (' id="' + id + '"');
                if (name != "")
                    strTag += (' name="' + name + '"');
                if (src != "")
                    strTag += (' src="' + src + '"');
                strTag += '></SCR' + 'IPT>';
                this.write(strTag);
            } else {}
        }
    }
    function addDiv(method, obj) {
        var newObj = null;
        if (method == 'write') {
            var style = getStyleStr(obj.style);
            var strTag = '<div id="' + obj.id + '" style="' + style + '"';
            if (obj.dir != "")
                strTag += ' dir="' + obj.dir + '"';
            if (obj.className != "")
                strTag += ' className="' + obj.className + '"';
            strTag += '></div>';
            this.write(strTag);
            newObj = this.getDoc().getElementById(obj.id);
        } else {
            try {
                var element = this.getDoc().createElement("div");
                element.setAttribute("id", obj.id);
                if (obj.className != "")
                    element.setAttribute("className", obj.className);
                if (obj.dir != "")
                    element.setAttribute("dir", obj.dir);
                copyObj(element.style, obj.style);
                if (method == 'append') {
                    var container = obj.refElement ? obj.refElement: getTagsContainer(this);
                    container.appendChild(element);
                } else {
                    if (method == 'before') {
                        var refEl = obj.refElement;
                        var parentEl = refEl.parentNode;
                        parentEl.insertBefore(element, refEl);
                    } else {}
                }
                newObj = element;
            } catch (e) {}
        }
        return (newObj);
    }
    function addImage2(method, obj) {
        var newObj = null;
        var str = "addImage('" + method + "','" + obj.src + "','" + obj.width + "','" + obj.height + "','" + obj.id + "','" + obj.name + " ','" + obj.onclick + "','" + obj.onload + "');";
        if (obj.refElement != null)
            str = str + "refObj ID : " + obj.refElement.id;
        obj.style.width = obj.width;
        obj.style.height = obj.height;
        var style = getStyleStr(obj.style);
        if (obj.onclick != "")
            style += "cursor:pointer;cursor:hand";
        var strTag = '<img id="' + obj.id + '" src="' + obj.src + '" width=' + obj.width + ' height=' + obj.height + ' onclick="' + obj.onclick + '" border="' + obj.border + '" style="' + style + '"';
        if (obj.onload != "")
            strTag += ' onload="' + obj.onload + '"';
        strTag += '/>';
        if (method == 'write') {
            this.write(strTag);
        } else {
            try {
                var divElement = this.getDoc().createElement("DIV");
                copyObj(divElement.style, obj.containerStyle);
                if (method == 'append') {
                    var container = obj.refElement ? obj.refElement: getTagsContainer(this);
                    container.appendChild(divElement);
                } else if (method == 'before') {
                    var refEl = obj.refElement;
                    var parentEl = refEl.parentNode;
                    parentEl.insertBefore(divElement, refEl);
                }
                divElement.innerHTML = strTag;
                if (obj.id != "") {
                    newObj = this.getDoc().getElementById(obj.id);
                    if (newObj == null) {}
                }
            } catch (e) {}
        }
        return (newObj);
    }
    function addWMP(method, obj) {
        var newObj = null;
        var str = "addWMP('" + method + "','" + obj.id + "');";
        var style = getStyleStr(obj.style);
        var flashsrc = obj.src;
        var strObject = '<obj' + 'ect id="' + obj.id + '" name ="' + obj.name + '" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" ' + ' style="' + style + '" >';
        strObject += '<PARAM name="autoStart" value="False">' + '<PARAM name="mute" value="True">' + '<PARAM name="enableContextMenu" value="False">' + '<PARAM NAME="windowlessVideo" VALUE="' + obj.fWindowlessVideo + '">' + '<PARAM NAME="stretchToFit" VALUE="True">' + '<PARAM NAME="uiMode" VALUE="none">' + '</obj' + 'ect>';
        if (method == 'write')
            this.write(strObject);
        else {
            var aDocument = obj.refElement ? obj.refElement.ownerDocument: this.getDoc();
            var divElement = aDocument.createElement("DIV");
            copyObj(divElement.style, obj.containerStyle);
            if (method == 'append') {
                var container = obj.refElement ? obj.refElement: getTagsContainer(this);
                container.appendChild(divElement);
            }
            divElement.innerHTML = strObject;
            if (obj.id != "") {
                newObj = aDocument.getElementById(obj.id);
                if (newObj == null) {}
            } else {}
        }
        return (newObj);
    }
    function addREAL(method, obj) {
        var newObj = null;
        var str = "addREAL('" + method + "','" + obj.id + "');";
        var style = getStyleStr(obj.style);
        var src = obj.src;
        var strObject = '<obj' + 'ect id="' + obj.id + '" name ="' + obj.name + '" classid="CLSID:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" ' + ' style="' + style + '" >';
        strObject += '<PARAM name="AUTOSTART" value="false">' + '<PARAM name="PREFETCH" value="false">' + '<PARAM name="CONTROLS" value="ImageWindow">' + '<PARAM name="IMAGESTATUS" value="false">' + '<PARAM name="CENTER" value="false">' + '<PARAM name="MAINTAINASPECT" value="-1">' + '</obj' + 'ect>';
        if (method == 'write')
            this.write(strObject);
        else {
            var doc = this.getDoc();
            var divElement = doc.createElement("DIV");
            if (method == 'append') {
                var container = obj.refElement ? obj.refElement: getTagsContainer(this);
                container.appendChild(divElement);
            }
            divElement.innerHTML = strObject;
            if (obj.id != "") {
                newObj = doc.getElementById(obj.id);
                if (newObj == null) {}
            } else {}
        }
        return (newObj);
    }
    function addInLineScript(method, strScript, id, obj, event, lang, fWMPEvent, refElement) {
        try {
            if (typeof (id) == 'undefined')
                id = "";
            if (typeof (obj) == 'undefined')
                obj = "";
            if (typeof (event) == 'undefined')
                event = "";
            if (typeof (lang) == "undefined")
                lang = "";
            if (typeof (fWMPEvent) == "undefined")
                fWMPEvent = false;
            if (typeof (refElement) == "undefined")
                refElement = null;
            if (gEbDocLoaded)
                method = 'append';
            var element = null;
            if (method == 'append') {
                try {
                    if (gEbBC.isIE()) {
                        if (gEbBC.getVersion() >= 9.0 || document.documentMode >= 9) {
                            if (event) {
                                element = (refElement == null) ? this.getDoc().createElement("div") : refElement.ownerDocument.createElement("div");
                                var hiddenObj = "<input type='hidden' />";
                                var fsCmdScript = ebFormat("<script for='{0}' event='{1}'>{2}</script>", obj, event, strScript);
                                element.innerHTML = hiddenObj + fsCmdScript;
                            } else {
                                element = (refElement == null) ? this.getDoc().createElement("script") : refElement.ownerDocument.createElement("script");
                                element.text = strScript;
                                element.setAttribute("id", id);
                                if (lang != "") {
                                    element.setAttribute("language", lang);
                                }
                            }
                        } else {
                            var str;
                            if (event == "") {
                                str = '<scr' + 'ipt></scr' + 'ipt>';
                            } else {
                                str = "<scr" + "ipt for='" + obj + "' event='" + event + "'></scr" + "ipt>";
                            }
                            element = (refElement == null) ? this.getDoc().createElement(str) : refElement.ownerDocument.createElement(str);
                            element.setAttribute("id", id);
                            if (lang != "") {
                                element.setAttribute("language", lang);
                            }
                            element.text = strScript;
                        }
                    } else {
                        element = this.getDoc().createElement("script");
                        element.setAttribute("id", id);
                        if (fWMPEvent) {
                            element.setAttribute("for", obj);
                            element.setAttribute("event", event);
                        }
                        var text = this.getDoc().createTextNode(strScript);
                        element.appendChild(text);
                    }
                    var container = refElement == null ? getTagsContainer(this): refElement;
                    container.appendChild(element);
                } catch (e) {}
            } else {
                if (method == 'write') {
                    var strTag = '<scr' + 'ipt id="' + id + '" ';
                    if (obj != "")
                        strTag += 'for="' + obj + '" ';
                    if (event != "")
                        strTag += 'event="' + event + '" ';
                    strTag += '>' + strScript + '</scr' + 'ipt>';
                    this.write(strTag);
                } else {}
            }
        } catch (e) {}
    }
    function addFsCommandHandler(method, objName, handler) {
        try {
            var strFSCmdHandlerName = objName + '_DoFSCommand(command,args)';
            var strFSCmdHandler = 'function ' + strFSCmdHandlerName + '{' + 'return ' + handler + '}';
            this.addInLineScript(method, strFSCmdHandler);
            strFSCmdHandlerName += ";";
            if (gEbBC.isIE()) {
                this.addInLineScript(method, strFSCmdHandlerName, "", objName, "FSCommand(command,args)");
            }
            strFSCmdHandler = 'function ebIsFlashExtInterfaceExist(){return true;}';
            this.addInLineScript(method, strFSCmdHandler);
        } catch (e) {}
    }
    function addIframe(method, obj) {
        try {
            var style = getStyleStr(obj.style);
            var iframeStr = "<iframe frameborder=" + obj.frameborder + " src='" + obj.src + "' style='" + style + "' id='" + obj.id + "'></iframe>";
            if (method == 'write') {
                this.write(iframeStr);
            } else {
                var divElement = this.getDoc().createElement("DIV");
                if (method == 'append') {
                    divElement.innerHTML = iframeStr;
                    var container = obj.refElement ? obj.refElement: getTagsContainer(this);
                    container.appendChild(divElement);
                } else {}
            }
        } catch (e) {}
    }
    function addTable(object, name, style) {
        ebTable = this.getDoc().createElement("table");
        ebTable.setAttribute("cellPadding", "0");
        ebTable.setAttribute("cellSpacing", "0");
        ebTable.style.display = "inline";
        if (typeof(style) != "undefined")
            copyObj(ebTable.style, style);
        var row = ebTable.insertRow(0);
        var cell = this.getDoc().createElement("TD");
        var TIobj = new ebCTIObj(name);
        copyObj(TIobj.style, style);
        TIobj.refElement = cell;
        var tmpDiv = this.addDiv("append", TIobj);
        row.appendChild(cell);
        object.parentNode.insertBefore(ebTable, object);
        return (tmpDiv);
    }
    function addRelativeObject(object, name, zIndex) {
        ebTable = this.getDoc().createElement("table");
        ebTable.setAttribute("cellPadding", "0");
        ebTable.setAttribute("cellSpacing", "0");
        ebTable.style.display = "inline";
        var row = ebTable.insertRow(0);
        var cell = this.getDoc().createElement("TD");
        var TIobj = new ebCTIObj(name);
        TIobj.style.position = "absolute";
        TIobj.style.width = "0px";
        TIobj.style.height = "0px";
        if (typeof(zIndex) != "undefined")
            TIobj.style.zIndex = zIndex;
        TIobj.refElement = cell;
        var tmpDiv = this.addDiv("append", TIobj);
        row.appendChild(cell);
        var refObj = object;
        var parentNode = refObj.parentNode;
        if (parentNode.tagName.toLowerCase() == "a") {
            refObj = parentNode;
            parentNode = parentNode.parentNode;
        }
        parentNode.insertBefore(ebTable, refObj);
        cell.appendChild(refObj);
        return tmpDiv;
    }
    function setTagsContainer(newTC) {
        this.tagsContainer = newTC;
    }
    function getWin() {
        try {
            if (!ebIsInIframe())
                updateWin(this);
            return this.win;
        } catch (e) {
            return this.win;
        }
    }
    function getDoc() {
        try {
            if (!ebIsInIframe()) {
                updateWin(this);
            }
            return this.win.document;
        } catch (e) {
            return this.win.document;
        }
    }
    function getPanelsContainer() {
        return this.getDoc().getElementById(this.eyeDivId);
    }
    function addEmbed(refObj, method, obj) {
        var newObj = null;
        try {
            if (gEbBC.isChrome())
                adjustAssetSize(obj);
            if (method == 'write') {
                var style = getStyleStr(obj.style);
                var strEmbed = '<EMBED src="' + obj.src + '" play=' + obj.play + ' id= "' + obj.id + '" name="' + obj.name + '" quality=high' + ' wmode=' + obj.wmode + ' allowScriptAccess="always"' + ' allowFullScreen=true' + ' menu=false' + ' TYPE="application/x-shockwave-flash" PLUGINSPAGE="' + ebStrProtocol + 'www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"' + ' style="' + style + '"';
                if (obj.flashVars)
                    strEmbed += ' FlashVars="' + obj.flashVars + '"';
                if (obj.bgColor != "")
                    strEmbed += 'bgcolor="' + obj.bgColor + '"';
                strEmbed += '></EMBED>';
                refObj.write(strEmbed, refObj);
            } else {
                var element = refObj.getDoc().createElement("EMBED");
                element.setAttribute("id", obj.id);
                element.setAttribute("name", obj.name);
                element.setAttribute("src", obj.src);
                element.setAttribute("play", obj.play);
                element.setAttribute("wmode", obj.wmode);
                element.setAttribute("menu", false);
                element.setAttribute("TYPE", "application/x-shockwave-flash");
                element.setAttribute("allowScriptAccess", "always");
                element.setAttribute("allowFullScreen", true);
                element.setAttribute("PLUGINSPAGE", ebStrProtocol + "www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash");
                if (obj.flashVars)
                    element.setAttribute("FlashVars", obj.flashVars);
                if (obj.bgColor != "")
                    element.setAttribute("bgcolor", obj.bgColor);
                copyObj(element.style, obj.style);
                var divElement = refObj.getDoc().createElement("DIV");
                copyObj(divElement.style, obj.containerStyle);
                divElement.appendChild(element);
                if (method == 'append') {
                    var container = obj.refElement ? obj.refElement: getTagsContainer(refObj);
                    container.appendChild(divElement);
                } else if (method == 'before') {
                    var refEl = obj.refElement;
                    var parentEl = refEl.parentNode;
                    parentEl.insertBefore(divElement, refEl);
                } else {}
                newObj = element;
            }
        } catch (e) {}
        return (newObj);
    }
    function addObject(refObj, method, obj) {
        var newObj = null;
        try {
            var style = getStyleStr(obj.style);
            var flashsrc = obj.src;
            var strObject = '<object id="' + obj.id + '" name ="' + obj.name + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' + 'codebase=' + ebStrProtocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + obj.version + ',0,0,0' + ' style="' + style + '" >';
            strObject += '<PARAM NAME="movie" VALUE="' + flashsrc + '">' + '<PARAM NAME="play" VALUE=' + obj.play + '>' + '<PARAM NAME="wmode" VALUE="' + obj.wmode + '">' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value=true />' + '<PARAM NAME="menu" VALUE=false>';
            if (obj.flashVars)
                strObject += '<PARAM NAME="FlashVars" VALUE="' + obj.flashVars + '">';
            if (obj.bgColor != "")
                strObject += '<PARAM NAME="bgcolor" VALUE="' + obj.bgColor + '">';
            if (obj.scale != "")
                strObject += '<PARAM NAME="SCALE" VALUE="' + obj.scale + '">';
            strObject += '</object>';
            if (method == 'write')
                refObj.write(strObject);
            else {
                var divElement = refObj.getDoc().createElement("DIV");
                copyObj(divElement.style, obj.containerStyle);
                if (obj.fFixOperAborted)
                    divElement.innerHTML = strObject;
                if (method == 'append') {
                    var container = obj.refElement ? obj.refElement: getTagsContainer(refObj);
                    container.appendChild(divElement);
                } else if (method == 'before') {
                    var refEl = obj.refElement;
                    var parentEl = refEl.parentNode;
                    parentEl.insertBefore(divElement, refEl);
                }
                if (!obj.fFixOperAborted)
                    divElement.innerHTML = strObject;
                if (obj.id != "") {
                    newObj = refObj.getDoc().getElementById(obj.id);
                    if (newObj == null) {}
                } else {}
            }
        } catch (e) {}
        return (newObj);
    }
    function copyObj(dest, src) {
        try {
            var attr = "";
            for (attr in src) {
                if (typeof(src[attr]) != "function")
                    dest[attr] = src[attr];
            }
        } catch (e) {}
    }
    function getStyleStr(styleObj) {
        var strStyle = "";
        for (var attr in styleObj) {
            try {
                if (typeof(styleObj[attr]) == "function")
                    continue;
                if (attr == "zIndex")
                    strStyle = strStyle + "z-Index:" + styleObj[attr] + ";";
                else 
                    strStyle = strStyle + attr + ":" + styleObj[attr] + ";";
            } catch (e) {}
        }
        return (strStyle);
    }
    function getTagsContainer(objRef) {
        var tagsContainer = objRef.getDoc().getElementById("eyeDiv");
        if (tagsContainer == null) {
            tagsContainer = objRef.getDoc().body;
        }
        return tagsContainer;
    }
    function updateWin(objRef) {
        objRef.win = self;
    }
    function adjustAssetSize(objRef) {
        try {
            if (objRef.id == "ebReportingFlash")
                return;
            var objStyle = objRef.style;
            var objConStyle = objRef.containerStyle;
            if (objStyle.width == "0px" && objStyle.height == "0px")
                objStyle.width = objStyle.height = "1px";
            if (objConStyle.width == "0px" && objConStyle.height == "0px")
                objConStyle.width = objConStyle.height = "1px";
        } catch (e) {}
    }
}
gEbTI = new ebCTagInsertor();
function ebCRemoteServers() {
    this.strNUrl = "";
    this.strAUrl = "";
    this.strAReportUrl = "";
    this.strNReportUrl = "";
    this.aReportingImg = null;
    this.nReportingImg = null;
    this.vReportingImg = null;
    this.set = set;
    this.report = report;
    this.reportVTracking = reportVTracking;
    this.replaceConsts = replaceConsts;
    function set(strRS) {
        try {
            var agencyUrl = "";
            var networkUrl = "";
            var agencyIndex = strRS.indexOf("ebA=");
            var networkIndex = strRS.indexOf("ebN=", agencyIndex);
            if (agencyIndex!=-1) {
                agencyIndex += 4;
                if (networkIndex!=-1)
                    agencyUrl = strRS.substr(agencyIndex, networkIndex - agencyIndex - 1);
                else 
                    agencyUrl = strRS.substr(agencyIndex, strRS.length - agencyIndex - 1);
            }
            if (networkIndex!=-1) {
                networkIndex += 4;
                networkUrl = strRS.substr(networkIndex, strRS.length - networkIndex - 1);
            }
            this.strAUrl = agencyUrl;
            this.strNUrl = networkUrl;
        } catch (e) {}
    }
    function report(adData, interactionNum, interactionName, retVal) {
        if (adData.newClickTracking) {
            var clkURLs = [];
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return clkURLs;
                }
                if ((this.strNUrl == "") && (this.strAUrl == "")) {
                    return clkURLs;
                }
                this.strNReportUrl = ebReplaceURLTokens(this.strNUrl, adData);
                this.strAReportUrl = ebReplaceURLTokens(this.strAUrl, adData);
                var fPlay = true;
                if (typeof (interactionNum) != "undefined") {
                    this.replaceConsts(interactionNum, interactionName);
                    fPlay = false;
                }
                if (this.strNReportUrl != "") {
                    if (retVal) {
                        clkURLs.push(this.strNReportUrl);
                    } else {
                        this.nReportingImg = new Image();
                        try {
                            this.nReportingImg.src = this.strNReportUrl;
                        } catch (e) {}
                    }
                }
                if (this.strAReportUrl != "") {
                    if (retVal) {
                        clkURLs.push(this.strAReportUrl);
                    } else {
                        this.aReportingImg = new Image();
                        try {
                            this.aReportingImg.src = this.strAReportUrl;
                        } catch (e) {}
                    }
                }
            } catch (e) {}
            return clkURLs;
        } else {
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return;
                }
                if ((this.strNUrl == "") && (this.strAUrl == ""))
                    return;
                this.strNReportUrl = ebReplaceURLTokens(this.strNUrl, adData);
                this.strAReportUrl = ebReplaceURLTokens(this.strAUrl, adData);
                var fPlay = true;
                if (typeof (interactionNum) != "undefined") {
                    this.replaceConsts(interactionNum, interactionName);
                    fPlay = false;
                }
                if (this.strNReportUrl != "") {
                    {}
                    this.nReportingImg = new Image();
                    try {
                        this.nReportingImg.src = this.strNReportUrl;
                    } catch (e) {}
                }
                if (this.strAReportUrl != "") {
                    {}
                    this.aReportingImg = new Image();
                    try {
                        this.aReportingImg.src = this.strAReportUrl;
                    } catch (e) {}
                }
            } catch (e) {}
        }
    }
    function reportVTracking(sVersionClickTracking, adData, retVal) {
        if (adData.newClickTracking) {
            var res = [];
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return res;
                }
                if (sVersionClickTracking != "") {
                    sVersionClickTracking = ebReplaceURLTokens(sVersionClickTracking, adData);
                    if (retVal) {
                        if (sVersionClickTracking != "undefined") {
                            var cvurls = sVersionClickTracking.split('|');
                            for (var i = 0; i < cvurls.length; i++) {
                                res.push(cvurls[i]);
                            }
                        }
                    } else {
                        var cvurls = sVersionClickTracking.split('|');
                        for (var i = 0; i < cvurls.length; i++) {
                            this.vReportingImg = new Image();
                            try {
                                this.vReportingImg.src = cvurls[i];
                            } catch (e) {}
                        }
                    }
                }
            } catch (e) {}
            return res;
        } else {
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return;
                }
                if (sVersionClickTracking != "") {
                    sVersionClickTracking = ebReplaceURLTokens(sVersionClickTracking, adData);
                    var cvurls = sVersionClickTracking.split('|');
                    for (var i = 0; i < cvurls.length; i++) {
                        this.vReportingImg = new Image();
                        try {
                            this.vReportingImg.src = cvurls[i];
                        } catch (e) {}
                    }
                }
            } catch (e) {}
        }
    }
    function replaceConsts(interactionNum, name) {
        try {
            if (this.strNReportUrl != "") {
                this.strNReportUrl = this.strNReportUrl.replace(/\[ebInteraction\]/ig, name);
                this.strNReportUrl = this.strNReportUrl.replace(/\[ebInteractionNum\]/ig, interactionNum);
            }
            if (this.strAReportUrl != "") {
                this.strAReportUrl = this.strAReportUrl.replace(/\[ebInteraction\]/ig, name);
                this.strAReportUrl = this.strAReportUrl.replace(/\[ebInteractionNum\]/ig, interactionNum);
            }
        } catch (e) {}
    }
}
function ebCTrackingURLs() {
    this.arrURLs = new Array;
    this.arrReportingImg = new Array;
    this.add = add;
    this.addMultiple = addMultiple;
    this.report = report;
    function add(strURL) {
        if (strURL)
            this.arrURLs.push(strURL);
    }
    function addMultiple(arrURLs) {
        if (arrURLs) {
            for (var i = 0; i < arrURLs.length; i++) {
                this.arrURLs.push(arrURLs[i]);
            }
        }
    }
    function report(adData, retVal) {
        if (adData.newClickTracking) {
            var retValUrls = [];
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return retValUrls;
                }
                for (var i = 0; i < this.arrURLs.length; i++) {
                    var url = ebReplaceURLTokens(this.arrURLs[i], adData);
                    if (retVal) {
                        retValUrls.push(url);
                    } else {
                        if (url != "") {
                            {}
                            this.arrReportingImg[i] = new Image();
                            try {
                                this.arrReportingImg[i].src = url;
                            } catch (e) {}
                        }
                    }
                }
            } catch (e) {}
            return retValUrls;
        } else {
            try {
                if (gEbfOfflineDemo) {
                    {}
                    return;
                }
                for (var i = 0; i < this.arrURLs.length; i++) {
                    var url = ebReplaceURLTokens(this.arrURLs[i], adData);
                    if (url != "") {
                        {}
                        this.arrReportingImg[i] = new Image();
                        try {
                            this.arrReportingImg[i].src = url;
                        } catch (e) {}
                    }
                }
            } catch (e) {}
        }
    }
}
function ebCEventHandler() {
    this.events = new Array;
    this.execute = execute;
    function execute() {
        for (var i = 0; i < this.events.length; i++) {
            var command = "";
            var name;
            switch (this.events[i].typeId) {
            case (3):
                name = "ebPlayScript" + i;
                command = ebFormat("ebLoadScript(\"{0}\",\"{1}\")", name, this.events[i].url);
                break;
            case (5):
                name = "ebDnlScript" + i;
                command = ebFormat("ebLoadScript(\"{0}\",\"{1}\")", name, this.events[i].url);
                break;
            case (4):
            case (6):
                command = ebFormat("ebLoadIframe(\"{0}\")", this.events[i].url);
                break;
            case (7):
            case (8):
                command = this.events[i].url;
                break;
            }
            if (command)
                eval(command);
        }
    }
}
function ebCInteractionsList() {
    this.nNumInteractions = 0;
    this.fClicked = 0;
    this["_eyeblaster"] = new ebCInteraction("_eyeblaster", 0);
}
function ebCInteractionData(nType, fIsClick, sVersion, sJumpURL, sClickTracking) {
    this.nType = nType;
    this.fIsClick = fIsClick;
    this.sVersion = sVersion;
    this.sJumpURL = sJumpURL;
    this.nNumInteractions = 0;
    this.sClickTracking = sClickTracking;
    this.adData = null;
}
function ebCInteraction(strName, nType, objName) {
    var strInteractionPipe = ebStrProtocol + ebBS + "/BurstingPipe/adServer.bs?cn=int&iv=2";
    var charAdFieldsDelimeter = '~';
    var charIntDelimeter = '^';
    var nIntStackLen = 6;
    this.strClassName = "ebCInteraction";
    this.nType = 0;
    if (typeof(nType) != "undefined")
        this.nType = nType;
    this.nValue = 0;
    this.nStartTime = 0;
    this.nUnique = 1;
    this.nInitiated = 0;
    this.nCategory = 0;
    this.nAssetID = 0;
    this.fIsPanel = 0;
    this.strName = strName;
    this.fCloseFlag = 1;
    this.strJumpUrl = "";
    this.strTarget = "_blank";
    this.RS = new ebCRemoteServers();
    this.fCountAsClick = 1;
    this.fAdIsClosing = false;
    this.jumpWin = new ebCJumpWin();
    this.fShouldReport = true;
    this.fReportImmediatly = false;
    this.fAlwaysReportImmediatly = false;
    this.fIsBusy = false;
    this.strReportURL = "";
    this.objName = objName;
    this.adData = null;
    this.reportingImg = null;
    this.numLeftToReport = 10;
    this.strFlashObjID = "";
    this.testStartTime = 0;
    this.testEndTime = 0;
    this.update = update;
    this.print = print;
    this.redirect = redirect;
    this.getReportData = getReportData;
    this.getAdReportData = getAdReportData;
    this.getPipeUrl = function() {
        return strInteractionPipe;
    };
    this.getPipeParams = getPipeParams;
    this.setType = setInteractionType;
    if (this.nType == 0)
        this.handle = handleCounter;
    else 
        this.handle = handleTimer;
    function update(inter) {
        try {
            this.nType = inter.nType;
            this.fCloseFlag = inter.fCloseFlag;
            this.strJumpUrl = inter.strJumpUrl;
            this.strTarget = inter.strTarget;
            this.fCountAsClick = inter.fCountAsClick;
            this.nInitiated = inter.nInitiated;
            this.nCategory = inter.nCategory;
            this.nAssetID = inter.nAssetID;
            this.fIsPanel = inter.fIsPanel;
            this.jumpWin.strPosX = inter.jumpWin.strPosX;
            this.jumpWin.strPosY = inter.jumpWin.strPosY;
            this.jumpWin.strWidth = inter.jumpWin.strWidth;
            this.jumpWin.strHeight = inter.jumpWin.strHeight;
            this.jumpWin.strAddressBar = inter.jumpWin.strAddressBar;
            this.jumpWin.strMenuBar = inter.jumpWin.strMenuBar;
            this.RS.strAUrl = inter.RS.strAUrl;
            this.RS.strNUrl = inter.RS.strNUrl;
            this.fShouldReport = inter.fShouldReport;
            if ((this.strJumpUrl == "") && (this.strName == "_eyeblaster"))
                this.fShouldReport = false;
        } catch (e) {};
    }
    function print() {}
    function handleCounter(intData) {
        try {
            if (this.nType == 1) {
                return;
            }
            if (this.fIsBusy) {
                return;
            }
            this.fIsBusy = true;
            if (typeof(intData.adData) != 'undefined')
                this.adData = intData.adData;
            else {}
            if (typeof(intData.nType) == "undefined")
                intData.nType = 0;
            if (intData.nType > 0)
                handleAutoCounter(this, intData);
            else 
                handleCustomCounter(this, intData);
            this.fIsBusy = false;
        } catch (e) {}
        return (this.fClose);
    }
    function handleTimer(command, adData, nValue) {
        if (this.nType == 0) {
            return;
        }
        if (typeof (adData) != 'undefined') {
            this.adData = adData;
        } else {}
        switch (command) {
        case 1:
            if (this.nStartTime != 0) {
                {}
                return;
            }
            this.testStartTime = new Date();
            this.nStartTime = this.testStartTime.getTime();
            break;
        case 2:
            if (this.nStartTime == 0) {
                if (this.nValue == 0) {
                    {}
                } else {}
                return;
            }
            this.testEndTime = new Date();
            var dtNow = this.testEndTime.getTime();
            this.nValue += (dtNow - this.nStartTime);
            this.nStartTime = 0;
            break;
        case 3:
            if ((typeof(nValue) != "undefined")&&!isNaN(nValue)) {
                this.nValue += nValue;
            } else {}
            break;
        case 4:
            this.nValue = 0;
            break;
            break;
        }
    }
    function redirect(isClick, sVersion, sJumpURL, clkURLs) {
        if (typeof(isClick) == "undefined")
            isClick = true;
        if (typeof(sVersion) == "undefined")
            sVersion = "";
        if (typeof(sJumpURL) == "undefined")
            sJumpURL = "";
        if (ebIsPreview()) {
            this.strTarget = "_blank";
        }
        var prop = "titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1";
        prop += ",location=" + this.jumpWin.strAddressBar;
        prop += ",menubar=" + this.jumpWin.strMenuBar;
        prop += ",left=" + this.jumpWin.strPosX;
        prop += ",top=" + this.jumpWin.strPosY;
        if (this.jumpWin.strWidth != 0)
            prop += ",width=" + this.jumpWin.strWidth;
        if (this.jumpWin.strHeight != 0)
            prop = prop + ",height=" + this.jumpWin.strHeight;
        if (!sJumpURL)
            sJumpURL = this.strJumpUrl;
        if (sJumpURL) {
            sJumpURL = checkUrl(sJumpURL);
            sJumpUrl = ebReplaceURLTokens(sJumpURL, this.adData);
            var fOffline = (typeof(gEbfNewOfflineDemo) != "undefined") || (typeof(gEbFlyLocal) != "undefined" && gEbFlyLocal);
            if (isClick || isEBClick(this)&&!fOffline&&!ebIsPreview()) {
                if (isEBClick(this)&&!sVersion)
                    sJumpUrl = "";
                var isDefaultClick = (this.strName == "ebDefaultClick");
                sJumpUrl = this.adData.getBannerRedirectUrl(sJumpUrl, isClick, isDefaultClick, sVersion);
            }
            if (gEbfOfflineDemo&&!gEbFlyLocal && typeof (gEbfNewOfflineDemo) == "undefined") {
                sJumpUrl = this.adData.strDemoFolder + this.strName + ".htm";
            }
            if (this.adData.newClickTracking) {
                {}
                if (clkURLs && clkURLs.length > 0) {
                    var reportPageScript = _getReportScript(clkURLs, sJumpUrl);
                    var domain = document.domain;
                    var base = document.getElementsByTagName('base') && document.getElementsByTagName('base').length > 0;
                    if (gEbBC.isIE() && ((domain != "undefined") && (domain != "") && (document.location.host != domain) || base)) {
                        var source = _getSourceUrl(domain, sJumpUrl, this.adData.strBannerRef);
                        this.adData.clickReportScript = reportPageScript;
                        var refWin = window.open(source, this.strTarget, prop);
                    } else {
                        var refWin = window.open("", this.strTarget, prop);
                        if (refWin && refWin.document) {
                            refWin.document.write(reportPageScript);
                        }
                    }
                } else {
                    window.open(sJumpUrl, this.strTarget, prop);
                }
            } else {
                if (!useFlashRedirect(this.strFlashObjID, sJumpUrl, this.strTarget)) {
                    window.open(sJumpUrl, this.strTarget, prop);
                }
            }
        }
    }
    function _getReportScript(clkURLs, jumpUrl) {
        var reportPageScript = '<scr' + 'ipt type="text/javascript">' + 'var clkURLs = ["' + clkURLs.join('","') + '"];' + 'var reported = false;' + 'var cntr = 0; for (var i=0;i<' + clkURLs.length + ';i++){' + 'var img = document.createElement("img");' + 'img.onload = img.onerror = function(){' + 'cntr++; if (cntr==' + clkURLs.length + ' && !reported)' + '{reported = true; window.location.replace("' + jumpUrl + '");}' + '};' + 'try{' + 'img.src = clkURLs[i];' + '}catch(e){' + 'cntr++; if (cntr==' + clkURLs.length + ' && !reported)' + '{reported = true;window.location.replace("' + jumpUrl + '");}' + '}' + '}' + 'setTimeout(function(){if (!reported){reported=true;window.location.replace("' + jumpUrl + '");}}, 1000);' + '</scr' + 'ipt><body></body>';
        return reportPageScript;
    }
    function _getSourceUrl(domain, jumpUrl, strRef) {
        var srcUrl = 'javas' + 'cript: ' + 'void((function(y){' + 'try{' + 'document.open();' + 'document.domain="' + domain + '";' + 'var x = window.opener.' + strRef + '.adData.clickReportScript;' + 'if (typeof(x) != "undefined" && x != null && x != ""){' + 'document.write(x);' + '} else {' + 'window.location.replace(y);' + '}' + 'document.close();' + '}catch(e){' + 'window.location.replace(y);' + '}' + '})("' + jumpUrl + '"))';
        return srcUrl;
    }
    function getReportData(isClick) {
        var strReportingName = this.strName;
        strReportingName = strReportingName.replace(/\~/ig, "_");
        strReportingName = strReportingName.replace(/\^/ig, "_");
        strReportingName = strReportingName.replace(/\|/ig, "_");
        var val = parseInt(this.nValue / 1000);
        var parsedVal = val;
        if (isNaN(val))
            val = 0;
        if ((this.nType == 1) && (val <= 0) || (val > (gEbnMaxTimerTime / 1000))) {
            if ((this.strName == "ebAdDuration")) {
                this.adData.fShouldReportTimers = false;
            }
            return ("");
        }
        var nIsClick = (isClick) ? 1: 0;
        var nInitiated = this.nInitiated;
        if (nIsClick && this.strJumpUrl) {
            nIsClick = 0;
            nInitiated = 0;
        }
        var strReportData = charIntDelimeter + escape(strReportingName) + charAdFieldsDelimeter + val + charAdFieldsDelimeter + this.nAssetID + charAdFieldsDelimeter + nIsClick + this.nUnique + nInitiated + this.nCategory + this.fIsPanel;
        this.nUnique = (gEbBC.isOpera() && this.nType == 1) ? 1 : 0;
        return strReportData;
    }
    function getAdReportData(adData) {
        try {
            if (typeof(adData) == "undefined")
                adData = this.adData;
            else 
                this.adData = adData;
            var strPage = this.adData.getReportingPage();
            var strAdReportData = ebFormat("{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}{12}", adData.nAdID, charAdFieldsDelimeter, strPage, charAdFieldsDelimeter, ebPluID, charAdFieldsDelimeter, adData.sTAId, charAdFieldsDelimeter, adData.sDGId, charAdFieldsDelimeter, ebGetVersionToReport(this.adData), charAdFieldsDelimeter, adData.sID);
            return strAdReportData;
        } catch (e) {
            return "";
        }
    }
    function buildUrl(refObj, fIsClick) {
        try {
            refObj.numLeftToReport--;
            var pendingInter = refObj.adData.strPendingInteractions;
            var nIntInStack=++refObj.adData.nIntInStack;
            refObj.fReportImmediatly = (((nIntStackLen == nIntInStack) || fIsClick || refObj.fAlwaysReportImmediatly)&&!refObj.fAdIsClosing);
            if (refObj.strName == "_emptyPipe") {
                var reportData = "";
                nIntInStack--;
                if (nIntInStack > 0) {} else {
                    return;
                }
            } else {
                var reportData = refObj.getReportData(fIsClick);
            }
            if (refObj.fReportImmediatly) {
                var str = refObj.getAdReportData() + reportData + pendingInter;
                refObj.strReportURL = strInteractionPipe + "&int=" + str + refObj.getPipeParams();
                pendingInter = "";
                nIntInStack = 0;
            } else {
                pendingInter += reportData;
            }
            refObj.adData.strPendingInteractions = pendingInter;
            refObj.adData.nIntInStack = nIntInStack;
        } catch (e) {}
    }
    function setInteractionType(nType) {
        this.nType = nType;
        if (this.nType == 0)
            this.handle = handleCounter;
        else 
            this.handle = handleTimer;
    }
    function getPipeParams() {
        var strParams = "";
        if (this.adData.usercookie) {
            strParams += "&usercookie=" + this.adData.usercookie;
        }
        if (typeof (this.adData.fOptOut) != "undefined") {
            strParams += "&OptOut=" + this.adData.fOptOut;
        }
        strParams += "&ebRandom=" + Math.random();
        if (ebIsGlobalDef("gfEbForceReportInt"))
            strParams += "&pr=1";
        var flashVer = 0;
        var wmpVer = 0;
        var resolution = 0;
        if (typeof(gEbClientInfo) != "undefined") {
            var plugins = gEbClientInfo.pluginInfo;
            flashVer = plugins.flFlashVer;
            wmpVer = plugins.flWMPVer;
            resolution = plugins.nResolution;
        } else {
            flashVer = gEbFlashVer;
            wmpVer = gEbWMPVer;
            resolution = gEbResolution;
        }
        strParams += "&flv=" + flashVer + "&wmpv=" + wmpVer + "&res=" + resolution;
        if (this.adData.nBWVal >= 0) {
            strParams += "&bwVal=" + this.adData.nBWVal + "&bwTime=" + this.adData.nBWTime;
        }
        return strParams;
    }
    function checkUrl(strURL) {
        var lowerUrl = strURL.toLowerCase();
        if ((lowerUrl.indexOf("http://")==-1) && (lowerUrl.indexOf("https://")==-1) && (lowerUrl.indexOf("ftp://")==-1) && (lowerUrl.indexOf("aim:")==-1) && (lowerUrl.indexOf("mailto:")==-1)) {
            if (strURL.indexOf("/") == 0)
                try {
                    var strHostname = document.location.hostname;
                    strURL = "http://" + strHostname + strURL;
            } catch (e) {
                strURL = "";
            } else 
                strURL = "http://" + strURL;
        }
        return strURL;
    }
    function reportAll(objRef, intData, retVal) {
        if (gEbfOfflineDemo) {
            return;
        }
        if (objRef.numLeftToReport == 0) {
            return;
        }
        buildUrl(objRef, intData.fIsClick);
        if (objRef.fReportImmediatly) {
            {}
            objRef.reportingImg = new Image();
            objRef.reportingImg.src = objRef.strReportURL;
        } else {}
        if (objRef.adData.newClickTracking) {
            return reportRSIfNeeded(objRef, intData, retVal);
        } else {
            reportRSIfNeeded(objRef, intData);
        }
    }
    function isEBClick(objRef) {
        return ((objRef.strName == "_eyeblaster") || (objRef.strName == "ebDefaultClick"));
    }
    function reportRSIfNeeded(objRef, intData, retVal) {
        if (objRef.adData.newClickTracking) {
            var clkURLs = [];
            try {
                if (ebIsGlobalDef("gfEbForceReportInt")) {
                    return clkURLs;
                }
                if (intData.fIsClick) {
                    var res = objRef.adData.clickTrackingURLs.report(objRef.adData, retVal);
                    clkURLs.push.apply(clkURLs, res);
                }
                var res = objRef.RS.report(objRef.adData, intData.nNumInteractions, objRef.strName, retVal);
                clkURLs.push.apply(clkURLs, res);
                if (intData.sClickTracking) {
                    var res = objRef.RS.reportVTracking(intData.sClickTracking, objRef.adData, retVal);
                    clkURLs.push.apply(clkURLs, res);
                }
            } catch (e) {}
            return clkURLs;
        } else {
            if (ebIsGlobalDef("gfEbForceReportInt"))
                return;
            if (intData.fIsClick) {
                objRef.adData.clickTrackingURLs.report(objRef.adData);
            }
            objRef.RS.report(objRef.adData, intData.nNumInteractions, objRef.strName);
            if (intData.sClickTracking)
                objRef.RS.reportVTracking(intData.sClickTracking, objRef.adData);
        }
    }
    function handleAutoCounter(objRef, intData) {
        try {
            if (!ebIsPreview() || ebIsGlobalDef("gfEbForceReportInt")) {
                reportAll(objRef, intData);
            }
        } catch (e) {}
    }
    function handleCustomCounter(objRef, intData) {
        try {
            if (ebIsPreview()&&!ebIsGlobalDef("gfEbForceReportInt")) {
                objRef.redirect(false, intData.sVersion, intData.sJumpURL);
            } else {
                reportAndRedirect(objRef, intData);
            }
        } catch (e) {}
    }
    function reportAndRedirect(objRef, intData) {
        try {
            if (typeof(gEbAdWindow) != "undefined")
                objRef.strTarget = "_blank";
            if (objRef.strTarget != "_blank") {
                if (!isEBClick(objRef))
                    reportAll(objRef, intData);
                else 
                    reportRSIfNeeded(objRef, intData);
                var strFunc = ebFormat("{0}.redirect({1},'{2}','{3}');", objRef.objName, intData.fIsClick, intData.sVersion, intData.sJumpURL);
                window.setTimeout(strFunc, 1000);
            } else {
                if (objRef.adData.newClickTracking) {
                    var clkURLs = [];
                    try {
                        if (!isEBClick(objRef)) {
                            clkURLs = reportAll(objRef, intData, true);
                        } else {
                            clkURLs = reportRSIfNeeded(objRef, intData, true);
                        }
                    } catch (e) {}
                    objRef.redirect(intData.fIsClick, intData.sVersion, intData.sJumpURL, clkURLs);
                } else {
                    objRef.redirect(intData.fIsClick, intData.sVersion, intData.sJumpURL);
                    if (!isEBClick(objRef))
                        reportAll(objRef, intData);
                    else 
                        reportRSIfNeeded(objRef, intData);
                }
            }
        } catch (e) {}
    }
    function useFlashRedirect(flashObjID, strJumpUrl, strTarget) {
        if (gEbBC.isChrome() && gEbBC.getVersion() > 20&&!gEbBC.isMac()) {
            return false;
        }
        var flashObj = gEbDisplayPage.TI.getDoc().getElementById(flashObjID);
        if (!flashObj)
            return false;
        var redirectFunc = "ebOpenJumpURL";
        var fIsAS3 = (typeof(flashObj[redirectFunc]) != "undefined");
        var fUseFlash = false;
        if ((gEbBC.isSafari()) && fIsAS3) {
            try {
                fUseFlash = flashObj[redirectFunc](strJumpUrl, strTarget);
            } catch (e) {
                fUseFlash = false;
            }
        }
        return fUseFlash;
    }
}
function ebCJumpWin() {
    this.strPosX = "";
    this.strPosY = "";
    this.strWidth = "";
    this.strHeight = "";
    this.strAddressBar = "";
    this.strMenuBar = "";
}
function ebCCustomEventHandler() {
    if ((typeof(gstrEbCustomEventHandlers) != "undefined") && (gstrEbCustomEventHandlers != "")) {
        eval(gstrEbCustomEventHandlers);
    }
    createHandlers(this);
    if (typeof(ebCCustomEventHandlers) != "undefined") {
        this.temp = ebCCustomEventHandlers;
        this.temp();
        delete this.temp;
    }
    function createHandlers(objRef) {
        createHandler(objRef, "ClientScriptsLoaded");
        createHandler(objRef, "BeforeAddRes");
        createHandler(objRef, "AfterAddRes");
        createHandler(objRef, "HandleInteraction");
        createHandler(objRef, "BeforeDefaultBannerShow");
        createHandler(objRef, "AfterDefaultBannerShow");
        createHandler(objRef, "BeforeRichFlashShow");
        createHandler(objRef, "AfterRichFlashShow");
        createHandler(objRef, "BeforeAdClose");
        createHandler(objRef, "AfterAdClose");
        createHandler(objRef, "BeforeIntroShow");
        createHandler(objRef, "AfterIntroShow");
        createHandler(objRef, "BeforeIntroHide");
        createHandler(objRef, "AfterIntroHide");
        createHandler(objRef, "BeforeRemShow");
        createHandler(objRef, "AfterRemShow");
        createHandler(objRef, "BeforeRemHide");
        createHandler(objRef, "AfterRemHide");
        createHandler(objRef, "BeforeMiniSiteShow");
        createHandler(objRef, "AfterMiniSiteShow");
        createHandler(objRef, "BeforeMiniSiteHide");
        createHandler(objRef, "AfterMiniSiteHide");
        createHandler(objRef, "BeforeAddPanelRes");
        createHandler(objRef, "AfterAddPanelRes");
        createHandler(objRef, "BeforePanelShow");
        createHandler(objRef, "AfterPanelShow");
        createHandler(objRef, "BeforePanelHide");
        createHandler(objRef, "AfterPanelHide");
    }
    function createHandler(objRef, strEvent) {
        var gstrHandler = "ebOn" + strEvent;
        var fHandlerDefined = eval("(typeof(" + gstrHandler + ") != 'undefined')");
        if (fHandlerDefined) {
            eval("objRef.on" + strEvent + "=" + gstrHandler);
            eval(gstrHandler + "=new Function()");
        } else 
            eval("objRef.on" + strEvent + "=new Function()");
    }
}
function ebCAdData(nIndex, strBannerRef) {
    this.nIndex = nIndex;
    this.strBannerRef = strBannerRef;
    this.nCampaignID =- 1;
    this.nFlightID =- 1;
    this.nAdID =- 1;
    this.fTest = false;
    this.strLogID = "";
    this.strAdUrl = "";
    this.strTemplateName = "";
    this.strBlankUrl = "";
    this.nDownloadMode =- 1;
    this.strPage = "";
    this.fPromptForPlugins = false;
    this.strRand = "";
    this.nWidth = 0;
    this.nHeight = 0;
    this.strWmode = "";
    this.fWebPageSource = 0;
    this.fShowOnlyImage = false;
    this.playRS = new ebCRemoteServers();
    this.strNImpUrl = "";
    this.strNClickUrl = "";
    this.impTrackingURLs = new ebCTrackingURLs();
    this.clickTrackingURLs = new ebCTrackingURLs();
    this.nImpressions =- 1;
    this.bannerPos = new Object();
    this.bannerPos.nType =- 1;
    this.bannerPos.strBannerName = "";
    this.bannerPos.strAlternateBanner = "";
    this.strAdType = "";
    this.nSiteInterval = 0;
    this.nFlightInterval = 0;
    this.nSiteID = "-1";
    this.strKeyword = "";
    this.fWindowAd = false;
    this.nRightAlignment =- 1;
    this.fCountIntDuration = false;
    this.fShouldReportTimers = false;
    this.strPendingInteractions = "";
    this.nIntInStack = 0;
    this.fVisibleBanner = false;
    this.fCollectWebPages = true;
    this.nBWVal =- 1;
    this.nBWTime =- 1;
    this.onStartDnlEvents = new ebCEventHandler();
    this.onPlayEvents = new ebCEventHandler();
    this.strDemoFolder = "";
    this.fFixOperAborted = false;
    this.nDelayedExpInterval = 0;
    this.nDelayedExpMaxV = 0;
    this.panelsWMode = "";
    this.nHistLen = 30;
    this.fCollectURL = false;
    this.strURLTokens = "";
    this.sAdVersions = "";
    this.sDefaultAdVersion = "";
    this.sTAId = "";
    this.sAdBasePath = "";
    this.sDGId = "";
    this.nDeliverySubGroupID =- 1;
    this.fProductClicked = new Object();
    this.sPublisherPlacementId = "";
    this.sID = "";
    this.usercookie = "";
    init(this);
    this.getReportingPage = getReportingPage;
    this.replaceURLTokens = replaceURLTokens;
    this.getBannerRedirectUrl = getBannerRedirectUrl;
    function init(obj) {
        var strRand = new String(Math.random());
        obj.strRand = strRand.substr(strRand.indexOf(".") + 1);
        strBWCookie = "";
        if (typeof(gEbClientInfo) != "undefined") {
            strBWCookie = gEbClientInfo.cookieInfo.getBandWidth();
            if (strBWCookie.indexOf(":")!=-1) {
                var cookieParts = strBWCookie.split(":");
                obj.nBWVal = cookieParts[0];
                obj.nBWTime = cookieParts[1];
            }
        }
    }
    function getReportingPage() {
        var strPage = this.strPage;
        if (!this.fWebPageSource&&!this.fCollectWebPages)
            strPage = "";
        strPage = strPage.replace(/\~/ig, "_");
        strPage = strPage.replace(/\^/ig, "_");
        strPage = strPage.replace(/\|/ig, "_");
        return escape(strPage);
    }
    function replaceURLTokens() {
        if (this.onPlayEvents) {
            for (var i = 0; i < this.onPlayEvents.events.length; i++) {
                var ev = this.onPlayEvents.events[i];
                ev.url = ebReplaceURLTokens(ev.url, this);
            }
        }
        if (this.onStartDnlEvents) {
            for (var i = 0; i < this.onStartDnlEvents.events.length; i++) {
                var ev = this.onStartDnlEvents.events[i];
                ev.url = ebReplaceURLTokens(ev.url, this);
            }
        }
    }
    function getBannerRedirectUrl(sJumpUrl, fCountAsClick, fIsDefClick, sAdVersion) {
        if (typeof(fCountAsClick) == "undefined")
            fCountAsClick = true;
        if (typeof(fIsDefClick) == "undefined")
            fIsDefClick = false;
        if (typeof(sAdVersion) == "undefined")
            sAdVersion = "";
        var url = ebFormat("{0}{1}/BurstingPipe/adServer.bs?cn=brd&Page={2}&PluID={3}&Pos={4}&EyeblasterID={5}", ebStrProtocol, ebBS, this.getReportingPage(), ebPluID, this.strRand, this.nAdID);
        var fIsMassV = ((this.sAdVersions != "") || (this.sDefaultAdVersions != ""));
        if (fIsMassV) {
            if (sAdVersion) {
                url += ebFormat("&vid={0}", sAdVersion);
                url += "&vcl=1";
            } else 
                url += ebFormat("&vid={0}", ebGetVersionToReport(this));
        }
        if (sJumpUrl) {
            sJumpUrl = sJumpUrl.replace(/#/g, "%23");
            url += ebFormat("&rtu=$${0}$$", sJumpUrl);
        }
        if (!fCountAsClick) {
            var sClick = "0";
            var fFirstClkOnV = (sAdVersion && typeof(this.fProductClicked[sAdVersion]) != "undefined" && this.fProductClicked[sAdVersion]);
            if (fFirstClkOnV)
                sClick = "2";
            url += ebFormat("&clk={0}", sClick);
        }
        url += ebGetTargetingParams(this);
        if (!fIsDefClick)
            url += "&di=0";
        if (this.sPublisherPlacementId != "")
            url += ebFormat("&pc={0}", this.sPublisherPlacementId);
        if (this.sID) {
            url += ebFormat("&sessionid={0}", this.sID);
        }
        if (typeof(this.fOptOut) != "undefined") {
            url += ebFormat("&OptOut={0}", this.fOptOut);
        }
        return url;
    }
}
function ebCTimeIntervalInfo(winObj, id) {
    this.id = id;
    this.winObj = winObj;
}
function ebCDisplayPage() {
    var activeIntervals = new Object();
    this.TI = gEbTI;
    this.fInIframe = false;
    this.fValid = true;
    this.getIframeData = getIframeData;
    this.addInterval = addInterval;
    this.removeInterval = removeInterval;
    this.close = close;
    init(this);
    function getIframeData() {
        try {
            if (!this.fInIframe)
                return null;
            var displayWin = eval(gstrEbDisplayPos);
            var currWindow = self;
            var iframeWindow = null;
            var nFrameIndex =- 1;
            do {
                nFrameIndex =- 1;
                iframeWindow = null;
                var framesArr = currWindow.parent.frames;
                for (var i = 0; i < framesArr.length; i++) {
                    try {
                        if (framesArr[i] == currWindow) {
                            nFrameIndex = i;
                            iframeWindow = currWindow;
                            break;
                        }
                    } catch (e) {}
                }
                currWindow = currWindow.parent;
            }
            while (currWindow != displayWin);
            if (nFrameIndex==-1) {
                this.fValid = false;
                return null;
            }
            try {
                if (typeof(iframeWindow.frameElement) != "undefined")
                    return iframeWindow.frameElement;
            } catch (e) {}
            var framesList = displayWin.document.getElementsByTagName("iframe");
            for (var i = 0; i < framesList.length; i++) {
                if (framesList[i].contentWindow == iframeWindow)
                    nFrameIndex = i;
            }
            if (nFrameIndex >= framesList.length) {
                this.fValid = false;
                return null;
            }
            return framesList[nFrameIndex];
        } catch (e) {
            this.fValid = false;
        }
    }
    function init(myObj) {
        try {
            var fMSNIframe = ((typeof(gfEbMSNIframe) != "undefined") && gfEbMSNIframe);
            if (ebIsInIframe()) {
                if (typeof(gstrEbDisplayPos) == "undefined") {
                    if (fMSNIframe)
                        gstrEbDisplayPos = "window";
                    else 
                        eval("gstrEbDisplayPos = 'parent'");
                }
                gstrEbDisplayPos = "parent." + gstrEbDisplayPos;
                myObj.fInIframe = true;
            } else {
                setEvents(myObj);
                return;
            }
            myObj.getIframeData();
            if (!myObj.fValid) {
                if (fMSNIframe) {
                    myObj.fInIframe = false;
                    myObj.fValid = true;
                    setEvents(myObj);
                }
                return;
            }
            var displayWin = eval(gstrEbDisplayPos);
            myObj.TI = new ebCTagInsertor(displayWin);
            myObj.TI.addEyeDiv();
            var panelsContainer = myObj.TI.getPanelsContainer();
            panelsContainer.dir = "ltr";
            setEvents(myObj);
        } catch (e) {
            myObj.fValid = false;
        }
    }
    function setEvents(myObj) {
        if ((myObj.TI.getDoc().readyState == 'complete') || (!gEbBC.isIE() && myObj.fInIframe)) {
            gEbDocLoaded = true;
            myObj.TI.addEyeDiv();
        } else {
            myObj.TI.addEventHandler("load", "ebOnloadHandler");
        }
        var currWin = typeof (gfEbMSNIframe) != "undefined" && gfEbMSNIframe ? top: myObj.TI.getWin();
        myObj.TI.addEventHandler("scroll", "ebOnScroll", currWin);
        myObj.TI.addEventHandler("resize", "ebOnResize", currWin);
        myObj.TI.addEventHandler("blur", "ebOnBlur", currWin);
        myObj.TI.addEventHandler("focus", "ebOnFocus", currWin);
        var visEvent = myObj.TI.getVisibilityEventName();
        if (typeof (document.addEventListener) === "undefined" || typeof (visEvent) === "undefined") {
            {}
        } else {
            myObj.TI.addEventHandler(visEvent, "ebOnVisibleHidden", document);
        }
        myObj.TI.addEventHandler("keydown", "ebOnKeyDown", myObj.TI.getDoc());
        if (!ebIsPreview() || ebIsGlobalDef("gfEbForceReportInt")) {
            gEbTI.addEventHandler("beforeunload", "ebReportAllInteractions");
            gEbTI.addEventHandler("unload", "ebReportAllInteractions");
        }
        gEbTI.addEventHandler("unload", "ebOnUnloadHandler");
    }
    function addInterval(key, strFunc, interval, winObj) {
        if (typeof(activeIntervals[key]) != "undefined") {
            return;
        }
        if (typeof(winObj) == "undefined")
            winObj = gEbTI.getWin();
        var intervalId = winObj.setInterval(strFunc, interval);
        var info = new ebCTimeIntervalInfo(winObj, intervalId);
        activeIntervals[key] = info;
    }
    function removeInterval(key) {
        if (typeof(activeIntervals[key]) == "undefined") {
            return;
        }
        var info = activeIntervals[key];
        info.winObj.clearInterval(info.id);
        delete activeIntervals[key];
    }
    function close() {
        this.TI.clearAllEvents();
        gEbTI.clearAllEvents();
        for (var key in activeIntervals) {
            var info = activeIntervals[key];
            info.winObj.clearInterval(info.id);
        }
        activeIntervals = new Object();
    }
}
function ebCClientArea(adTI) {
    this.adTI = adTI;
    this.nTop = 0;
    this.nLeft = 0;
    this.nWidth = 0;
    this.nHeight = 0;
    this.nScrollTop = 0;
    this.nScrollLeft = 0;
    this.container = null;
    this.fStrictDocType = false;
    this.fDefaultContainer = true;
    this.nRightAlign =- 1;
    this.nCenteredPage =- 1;
    this.nOffset = 0;
    this.BC = gEbBC;
    this.calc = calc;
    this.print = print;
    this.setValues = setValues;
    this.isVisible = isVisible;
    setDocType(this);
    function calc(container, nRightAlign, nCenteredPage) {
        try {
            this.nOffset = 0;
            if (typeof (nCenteredPage) != "undefined") {
                this.nCenteredPage = nCenteredPage;
            }
            this.container = container;
            if ((typeof(container) == "undefined") || (container == null)) {
                {}
                setDefaultContainer(this);
            } else 
                this.fDefaultContainer = false;
            if (this.fDefaultContainer) {
                if (this.BC.isIE()) {
                    calcIE(this);
                } else {
                    calcMozilla(this);
                }
            } else {}
            if (typeof(nRightAlign) != "undefined")
                this.nRightAlign = nRightAlign;
            if (this.nRightAlign>-1) {
                if (this.nWidth <= this.nRightAlign) {
                    this.nWidth = this.nRightAlign;
                }
            }
            if (this.nCenteredPage>-1) {
                if (this.nWidth > this.nCenteredPage) {
                    this.nOffset = (this.nWidth - this.nCenteredPage) / 2.0;
                    this.nWidth = this.nCenteredPage;
                }
            }
            this.print();
        } catch (e) {}
    }
    function print() {}
    function setValues(nWidth, nHeight) {
        try {
            this.nWidth = nWidth;
            this.nHeight = nHeight;
            this.nScrollLeft = 0;
            this.nScrollTop = 0;
        } catch (e) {}
    }
    function isVisible(resObj) {
        if (!resObj) {
            return false;
        }
        this.calc();
        try {
            var visiblePercentage = 0;
            var resWidth = 0;
            var resHeight = 0;
            var resSize = 0;
            var resFullSize = 0;
            var y0 = this.nTop + this.nScrollTop;
            var y1 = y0 + this.nHeight;
            var x0 = this.nLeft + this.nScrollLeft;
            var x1 = x0 + this.nWidth;
            var y2 = (this.adTI.getWin() != top && ((typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe) && window.frameElement) ? ebGetRealTop(resObj) + ebGetRealTop(window.frameElement): ebGetRealTop(resObj);
            var x2 = (this.adTI.getWin() != top && ((typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe) && window.frameElement) ? ebGetRealLeft(resObj) + ebGetRealLeft(window.frameElement): ebGetRealLeft(resObj);
            var y3 = y2 + resObj.offsetHeight;
            var x3 = x2 + resObj.offsetWidth;
            resFullSize = resObj.clientHeight * resObj.clientWidth;
            if ((y2 == y3) && (x2 == x3) || this.nHeight <= 0 || this.nWidth <= 0 || resFullSize <= 0) {
                return 0;
            }
            if ((x2 <= x0) && (x0 <= x3)) {
                if (x1 <= x3) {
                    resWidth = x1;
                } else {
                    resWidth = x3 - x0;
                }
            } else {
                if ((x0 <= x2) && (x2 <= x1)) {
                    if (x3 >= x1) {
                        resWidth = x1 - x2;
                    } else {
                        resWidth = x3 - x2;
                    }
                }
            }
            if ((y2 <= y0) && (y0 <= y3)) {
                if (y1 <= y3) {
                    resHeight = y1;
                } else {
                    resHeight = y3 - y0;
                }
            } else {
                if ((y0 <= y2) && (y2 <= y1)) {
                    if (y3 >= y1) {
                        resHeight = y1 - y2;
                    } else {
                        resHeight = y3 - y2;
                    }
                }
            }
            resSize = resWidth * resHeight;
            visiblePercentage = (resSize / resFullSize) * 100;
            return (visiblePercentage);
        } catch (e) {}
    }
    function calcIE(clArObj) {
        try {
            clArObj.nScrollLeft = clArObj.container.scrollLeft;
            clArObj.nScrollTop = clArObj.container.scrollTop;
            clArObj.nHeight = clArObj.container.clientHeight;
            clArObj.nWidth = clArObj.container.clientWidth;
            var fRtl = false;
            if (clArObj.container["dir"] == "rtl")
                fRtl = true;
            else if (clArObj.container["dir"] == "") {
                var htmlTag = clArObj.container;
                while (htmlTag.parentNode != null) {
                    htmlTag = htmlTag.parentNode;
                    if (htmlTag.dir == "rtl") {
                        fRtl = true;
                        break;
                    } else if (htmlTag.dir != "") {
                        fRtl = false;
                        break;
                    }
                }
            }
            if (fRtl) {
                var nScrollWidth = clArObj.container.scrollWidth - clArObj.nWidth;
                clArObj.nScrollLeft = clArObj.nScrollLeft - nScrollWidth;
            }
        } catch (e) {}
    }
    function calcMozilla(clArObj) {
        try {
            var nScroll = 17;
            var win = (typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe ? top: clArObj.adTI.getWin();
            var doc = win.document;
            if (clArObj.fDefaultContainer) {
                clArObj.nScrollTop = win.pageYOffset;
                clArObj.nScrollLeft = win.pageXOffset;
                clArObj.nHeight = win.innerHeight;
                clArObj.nWidth = win.innerWidth;
                if (doc.width > win.innerWidth || doc.body.offsetWidth > win.innerWidth || doc.body.scrollWidth > win.innerWidth || win.scrollMaxX > 0) {
                    clArObj.nHeight -= nScroll;
                }
                if (doc.height > win.innerHeight || doc.body.offsetHeight > win.innerHeight || doc.body.scrollHeight > win.innerHeight || win.scrollMaxY > 0) {
                    clArObj.nWidth -= nScroll;
                }
            } else {
                clArObj.nWidth = clArObj.container.offsetWidth;
                clArObj.nHeight = clArObj.container.offsetHeight;
            }
        } catch (e) {}
    }
    function setDefaultContainer(clArObj) {
        try {
            var win = (typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe ? top: clArObj.adTI.getWin();
            var doc = win.document;
            clArObj.fDefaultContainer = true;
            if (clArObj.BC.isIE()) {
                if (clArObj.fStrictDocType) {
                    clArObj.container = doc.documentElement;
                } else {
                    clArObj.container = doc.body;
                }
            } else {
                clArObj.container = clArObj.adTI.getWin();
            }
        } catch (e) {}
    }
    function setDocType(clArObj) {
        try {
            var win = (typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe ? top: clArObj.adTI.getWin();
            var doc = win.document;
            if (clArObj.BC.isIE()) {
                clArObj.fStrictDocType = (doc.compatMode == "CSS1Compat");
            } else {
                var d = doc.doctype;
                if (d) {
                    if (d.systemId) {
                        if ((d.systemId.indexOf("strict")>-1) || (d.systemId.indexOf("Strict")>-1))
                            clArObj.fStrictDocType = true;
                        else if ((d.publicId.indexOf("transitional")>-1) || (d.publicId.indexOf("Transitional")>-1))
                            clArObj.fStrictDocType = true;
                        else 
                            clArObj.fStrictDocType = false;
                    } else {
                        if ((d.publicId.indexOf("transitional")==-1) && (d.publicId.indexOf("Transitional")==-1))
                            clArObj.fStrictDocType = true;
                        else 
                            clArObj.fStrictDocType = false;
                    }
                } else 
                    clArObj.fStrictDocType = false;
            }
        } catch (e) {}
    }
}
function ebCVideoLoaderDriver(strPath, fStreaming, fStretchToFit, nVideoXPos, nVideoYPos, nVideoWidth, nVideoHeight, fHandleClick, resObj, nIndex, displayUnit, fNewComp) {
    if (typeof(ebCWMVVideoLoaderDriver) != "undefined") {
        this.temp = ebCWMVVideoLoaderDriver;
        this.temp(strPath, fStretchToFit, nVideoXPos, nVideoYPos, nVideoWidth, nVideoHeight, fHandleClick);
        delete this.temp;
    }
    this.strVideoLoaderPath = strPath;
    this.strAPIProxyPath = strPath + "/APIProxy";
    this.fStreaming = fStreaming;
    this.resObj = resObj;
    this.displayUnit = displayUnit;
    this.nIndex = nIndex;
    this.strMovieName = "";
    this.fWMPDriver = false;
    this.fClosed = false;
    this.objName = displayUnit.objName + ".arrVideoLoaderDrivers[" + nIndex + "]";
    this.fNewComponent = fNewComp;
    this.fFLVFullScreen = 0;
    this.fActive = true;
    this.fBufferingStarted = false;
    this.fPlayingStarted = false;
    this.fTrackRollOver = false;
    this.trackedDiv = null;
    this.strWindowPrefix = this.displayUnit.scriptWin;
    this.strHandelrPrefix = this.strWindowPrefix + "." + this.objName;
    this.WMPFSDriver = null;
    this.load = load;
    this.setFLVFullScreen = setFLVFullScreen;
    this.doOnResize = doOnResize;
    this.doOnScroll = doOnScroll;
    this.doOnKeyDown = doOnKeyDown;
    this.doOnMouseOutOfVideo = doOnMouseOutOfVideo;
    this.isWmodeWindow = isWmodeWindow;
    this.onMouseActive = onMouseActive;
    this.checkIfActive = checkIfActive;
    this.trackRollOver = trackRollOver;
    this.callAPIProxyFunc = callAPIProxyFunc;
    this.callProxyFunc = callProxyFunc;
    this.getFSMovieNum = getFSMovieNum;
    this.close = close;
    function load(strMovieName, fMute, nVolume, nBuffer, strFSMovieName, fFLVFSComp) {
        try {
            if (gEbfOfflineDemo)
                this.fStreaming = false;
            this.strMovieName = strMovieName;
            var strAssetURL = "";
            var nAssetType =- 1;
            var nFullScreen =- 1;
            var nFLVtoWMVFS = 0;
            var nWMPFullScreen = 0;
            var usedAsset = this.displayUnit.getBestAdditionalAsset(strMovieName, this.fStreaming);
            if (!usedAsset) {
                this.strMovieName = "";
                return;
            }
            if (usedAsset[0] == gEBvideoTypes.WMV && this.fNewComponent) {
                this.strMovieName = "";
                strAssetURL = " ::0::0::0";
                this.callAPIProxyFunc("load", "ebMovie," + strAssetURL + ";ebMovieParams," + nWMPFullScreen + "::" + this.fFLVFullScreen);
                return;
            }
            var additionalAsset = this.displayUnit.getUsedAssetProperties(strMovieName, usedAsset);
            var FSAsset = null;
            if (strFSMovieName == strMovieName) {
                this.WMPFSDriver = null;
                FSAsset = usedAsset[3];
                var fFLVtoWMV = ((usedAsset[0] != gEBvideoTypes.WMV) && (FSAsset[0] == gEBvideoTypes.WMV));
                if (FSAsset[0] == gEBvideoTypes.WMV)
                    nWMPFullScreen = 1;
                if (fFLVtoWMV) {
                    this.initWMPFSDriver(FSAsset, strMovieName);
                    nFLVtoWMVFS = 1;
                }
                if ((FSAsset[0] == gEBvideoTypes.FLV8) || (FSAsset[0] == gEBvideoTypes.FLV7) || (FSAsset[0] == gEBvideoTypes.MP4) || (FSAsset[0] == gEBvideoTypes.F4V)) {
                    if (checkFLVFSLimit(this, fFLVFSComp))
                        this.fFLVFullScreen = 1;
                }
            } else {
                var asset = this.displayUnit.getBestAdditionalAsset(strFSMovieName, this.fStreaming);
                if (asset)
                    FSAsset = asset[3];
            }
            var fFSAsset = false;
            if (FSAsset) {
                this.displayUnit.fsManager.FSAsset = FSAsset;
                this.displayUnit.fsManager.strFSMovieName = strFSMovieName;
                var FSAssetInfo = this.displayUnit.getUsedAssetProperties(strFSMovieName, FSAsset);
                fFSAsset = FSAssetInfo.fEnableFS;
            } else {}
            nAssetType = usedAsset[0];
            if (gEbFlyLocal) {
                strAssetURL = additionalAsset.strURL;
            } else if (gEbfOfflineDemo && (nAssetType > 0)) {
                var nIndex = additionalAsset.strURL.lastIndexOf("/");
                strAssetURL = additionalAsset.strURL.substring(nIndex + 1);
            } else 
                strAssetURL = ebResourcePath + additionalAsset.strURL;
            this.displayUnit.ad.fEnableFS = 1;
            nFullScreen = (fFSAsset && this.displayUnit.ad.fEnableFS) ? 1 : 0;
            this.fFirstPlay = true;
            this.fClosed = false;
            if (this.fWMPDriver) {
                this.setVisibility(false);
                this.setMute(true);
            }
            if (nAssetType == 0) {
                this.fMute = fMute;
                this.nVolume = nVolume;
                this.loadWMV(this, strAssetURL, nBuffer);
                this.fWMPDriver = true;
            } else 
                this.fWMPDriver = false;
            if (nAssetType == gEBvideoTypes.FLV7 || nAssetType == gEBvideoTypes.MP4 || nAssetType == gEBvideoTypes.F4V)
                nAssetType = gEBvideoTypes.FLV8;
            strAssetURL = strAssetURL + "::" + nAssetType + "::" + nFullScreen + "::" + nFLVtoWMVFS;
            this.callAPIProxyFunc("load", "ebMovie," + strAssetURL + ";ebMovieParams," + nWMPFullScreen + "::" + this.fFLVFullScreen);
        } catch (e) {}
    }
    function close() {
        this.fClosed = true;
        if (!this.fWMPDriver)
            return;
        this.stop();
    }
    function setFLVFullScreen(fFullScreen, nPos, fMute, nVolume, nReportedPlayProgress, unmuteHandled) {
        try {
            if (fFullScreen) {
                if (this.fFLVFullScreen) {
                    var nMovieNum = this.getFSMovieNum();
                    this.displayUnit.ebvideointeractionHandler("ebFSStart", nMovieNum);
                }
            }
        } catch (e) {}
    }
    function doOnResize() {
        if (this.fClosed)
            return;
        this.checkIfActive();
        if (!this.fWMPDriver)
            return;
        this.repositionWMV();
    }
    function doOnScroll() {
        if (this.fClosed)
            return;
        this.checkIfActive();
        if (!this.fWMPDriver)
            return;
        this.repositionWMV();
    }
    function doOnKeyDown(nKeyCode) {
        if (this.fClosed)
            return;
        var fEsc = (nKeyCode == 27);
        var fWMPFullScreen = (this.fWMPDriver && this.playerObj && this.playerObj.fullScreen);
        if (fEsc) {
            if (fWMPFullScreen) {
                this.displayUnit.fsManager.close();
                this.callWMVProxyFunc("onWMVFSClose", "", true);
            }
        }
    }
    function doOnMouseOutOfVideo(e) {
        try {
            var WMPDiv = (this.fWMPDriver && this.playerObj) ? this.playerObj.parentNode: null;
            var toElem = gEbBC.isIE() ? e.toElement: e.relatedTarget;
            var fromElem = gEbBC.isIE() ? e.srcElement: eval(e.target);
            var fFromWMP = (fromElem && ((fromElem == this.playerObj) || (fromElem == WMPDiv)));
            var fToWMP = (toElem && ((toElem == this.playerObj) || (toElem == WMPDiv)));
            if (!fToWMP)
                this.fMovingOverWMP = false;
            if ((fromElem != null) && ((fromElem == this.resObj) || (fromElem == this.trackedDiv) || fFromWMP)) {
                if ((toElem != null) && ((toElem == this.resObj) || (toElem == this.trackedDiv) || fToWMP)) {
                    return;
                }
                onRollOut(this);
            } else {}
        } catch (ex) {}
    }
    function onMouseActive(fActive) {
        if (this.fClosed)
            return;
        if (this.fStreaming) {
            if (fActive) {
                activateRes(this);
            } else {
                deactivateRes(this);
            }
        }
    }
    function checkIfActive() {
        if (this.fStreaming) {
            var clientArea = new ebCClientArea(gEbDisplayPage.TI);
            var fVisibleRes = clientArea.isVisible(this.resObj);
            if (fVisibleRes&&!this.fActive) {
                activateRes(this);
            } else if (!fVisibleRes && this.fActive) {
                deactivateRes(this);
            }
        }
    }
    function trackRollOver() {
        this.fTrackRollOver = true;
        if (this.fWMPDriver) {
            var strFunc = this.strHandelrPrefix + ".checkRollOver()";
            gEbDisplayPage.TI.getWin().setInterval(strFunc, 500);
        }
        displayUnit.dwellTimeManager.handleMouseOverAd();
        this.trackedDiv = this.displayUnit.getTrackedDiv(this.resObj);
        if (!this.trackedDiv) {
            return;
        }
        gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnMouseOutOfVideo", this.trackedDiv);
        if (this.fWMPDriver && this.playerObj) {
            var WMPDiv = this.playerObj.parentNode;
            gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnMouseOutOfVideo", WMPDiv);
        }
    }
    function callAPIProxyFunc(strFuncName, strParams) {
        this.callProxyFunc(strFuncName, strParams, false);
    }
    function checkFLVFSLimit(objRef, fFLVFSComp) {
        var fOOB = (typeof(gEbClientInfo) != "undefined");
        var nFlashVer = fOOB ? gEbClientInfo.pluginInfo.flFlashVer: gEbFlashVer;
        return (nFlashVer >= 9.0115) && fFLVFSComp;
    }
    function isWmodeWindow() {
        return this.displayUnit.adData.strWmode.toLowerCase() == "window";
    }
    function callProxyFunc(strFuncName, strParams, fWMVProxy) {
        try {
            if (this.fClosed)
                return;
            if (typeof(strParams) == "undefined")
                strParams = "";
            var flashObj = this.resObj;
            var pathToFunc = fWMVProxy ? this.strWMVProxyPath: this.strAPIProxyPath;
            this.displayUnit.callFlashFunc(flashObj, pathToFunc, strFuncName, strParams);
        } catch (e) {}
    }
    function activateRes(objRef) {
        objRef.fActive = true;
        objRef.callAPIProxyFunc("VideoActivate", "nActive,1");
    }
    function deactivateRes(objRef) {
        objRef.fActive = false;
        objRef.callAPIProxyFunc("VideoActivate", "nActive,0");
    }
    function onRollOut(objRef) {
        objRef.callAPIProxyFunc("onRollout");
    }
    function getFSMovieNum() {
        var fsManager = this.displayUnit.fsManager;
        return fsManager.getMovieNum();
    }
}
function ebCFSManager(displayUnit) {
    this.displayUnit = displayUnit;
    this.objName = displayUnit.objName + ".fsManager";
    this.driverObj = null;
    this.fEnabled = false;
    this.fBusy = false;
    this.strFSMovieName = "";
    this.FSAsset = null;
    this.open = open;
    this.close = close;
    this.doOnEbQuit = doOnEbQuit;
    this.getMovieNum = getMovieNum;
    function open(strPath, nPos, fMute, nVolume, strObjID, nReportedPlayProgress, unmuteHandled) {
        try {
            if (this.fEnabled)
                return;
            var driver = this.displayUnit.getVideoLoaderDriver(strObjID, strPath);
            this.driverObj = driver;
            if (driver.fWMPDriver)
                driver.setFullScreen(true, nPos, fMute, nVolume, nReportedPlayProgress, unmuteHandled);
            else if (driver.WMPFSDriver)
                driver.WMPFSDriver.setFullScreenFLVtoWMV(fMute, nVolume);
            else 
                driver.setFLVFullScreen(true, nPos, fMute, nVolume, nReportedPlayProgress, unmuteHandled);
            this.fEnabled = true;
            displayUnit.dwellTimeManager.handlePanelOpen("FullScreen");
        } catch (e) {}
    }
    function close(fReport) {
        if (this.fBusy)
            return;
        if (!this.fEnabled)
            return;
        if (typeof(fReport) == "undefined")
            fReport = true;
        if (fReport) {
            var nMovieNum = this.getMovieNum();
            this.displayUnit.ebvideointeractionHandler("ebFSEnd", nMovieNum);
        }
        var driver = this.driverObj;
        if (driver && driver.fWMPDriver)
            driver.setFullScreen(false);
        else if (driver && driver.WMPFSDriver)
            driver.WMPFSDriver.setFullScreen(false);
        else 
            driver.setFLVFullScreen(false);
        this.driverObj = null;
        this.fEnabled = false;
        this.fBusy = false;
        displayUnit.dwellTimeManager.handlePanelClose("FullScreen");
    }
    function doOnEbQuit() {
        if (this.fEnabled) {
            var driver = this.driverObj;
            if (driver&&!driver.fClosed) {
                driver.callAPIProxyFunc("VideoSetRS");
            }
            this.close();
        }
    }
    function getMovieNum() {
        var strMoviePrefix = "ebMovie";
        var nMovieNum = this.strFSMovieName.substr(strMoviePrefix.length);
        return nMovieNum;
    }
}
function ebCDwellTimeManager(displayUnit) {
    var state = {
        idle: 0,
        start: 1,
        stop: 2,
        panelOpenMouseOver: 3,
        videoPlay: 4,
        videoPlayMouseOut: 5,
        panelOpenMouseOut: 6,
        idlePanelOpen: 7,
        idleVideoPlay: 8
    };
    var idleTimeLimit = 700;
    this.curState = state.idle;
    this.numOfOpenPanels = 0;
    this.isMouseOverAd = false;
    this.wasMouseOverAd = false;
    this.isUserInteractionOccur = false;
    this.isVideoPlay = false;
    this.isVideoAutoReplay = false;
    this.mouseTimeoutId = 0;
    this.autoShownPanels = new Array();
    this.displayUnit = displayUnit;
    this.handleMouseOverAd = handleMouseOverAd;
    this.handleMouseOutOfAd = handleMouseOutOfAd;
    this.handleVideoPlay = handleVideoPlay;
    this.handleVideoStop = handleVideoStop;
    this.handlePanelOpen = handlePanelOpen;
    this.handlePanelClose = handlePanelClose;
    this.handleUserInteraction = handleUserInteraction;
    this.handleMouseThreshold = handleMouseThreshold;
    function handleMouseThreshold() {
        this.displayUnit.ebupdatetimerHandler("ebdwelltime", idleTimeLimit);
        switch (this.curState) {
        case state.idle:
            this.isMouseOverAd ? Start(this) : Stop(this);
            break;
        case state.idleVideoPlay:
            this.isMouseOverAd ? VideoPlay(this) : VideoPlayMouseOut(this);
            break;
        case state.idlePanelOpen:
            this.isMouseOverAd ? PanelOpenMouseOver(this) : PanelOpenMouseOut(this);
            break;
        }
    }
    function handleUserInteraction() {
        if (!this.wasMouseOverAd) {
            return;
        }
        this.isUserInteractionOccur = true;
        switch (this.curState) {
        case state.idle:
            Start(this);
            break;
        case state.idleVideoPlay:
            VideoPlay(this);
            break;
        case state.idlePanelOpen:
            PanelOpenMouseOver(this);
            break;
        }
    }
    function handleVideoPlay(nMovieNum) {
        if (!this.wasMouseOverAd) {
            return;
        }
        this.isVideoPlay = true;
        if (this.isUserInteractionOccur)
            ReportUserInitatedVideo(this, nMovieNum);
        switch (this.curState) {
        case state.idle:
            IdleVideoPlay(this);
            break;
        case state.idlePanelOpen:
            break;
        case state.idleVideoPlay:
            break;
        case state.start:
            VideoPlay(this);
            ReportUserInitatedVideo(this, nMovieNum);
            break;
        case state.stop:
            if (!this.isVideoAutoReplay) {
                VideoPlayMouseOut(this);
                ReportUserInitatedVideo(this, nMovieNum);
            }
            break;
        case state.videoPlayMouseOut:
            Stop(this);
            this.isVideoAutoReplay = true;
            break;
        default:
            if (!this.isVideoAutoReplay)
                ReportUserInitatedVideo(this, nMovieNum);
        }
    }
    function handleVideoStop() {
        this.isVideoAutoReplay = false;
        this.isVideoPlay = false;
        switch (this.curState) {
        case state.videoPlay:
            if (this.isMouseOverAd) {
                if (this.numOfOpenPanels > 0)
                    PanelOpenMouseOver(this);
                else 
                    Start(this);
            } else {
                if (this.numOfOpenPanels > 0)
                    PanelOpenMouseOut(this);
                else 
                    Stop(this);
            }
            break;
        case state.videoPlayMouseOut:
            if (this.numOfOpenPanels > 0)
                PanelOpenMouseOut(this);
            else 
                Stop(this);
            break;
        case state.idleVideoPlay:
            Idle(this);
            break;
        }
    }
    function handleMouseOverAd() {
        this.isMouseOverAd = true;
        this.wasMouseOverAd = true;
        this.isVideoAutoReplay = false;
        checkRecentAutoPanelOpen(this);
        switch (this.curState) {
        case state.idle:
        case state.idlePanelOpen:
        case state.idleVideoPlay:
            startMouseTimer(this);
            break;
        case state.start:
            break;
        case state.stop:
            if (this.isVideoPlay)
                VideoPlay(this);
            else 
                Start(this);
            break;
        case state.panelOpenMouseOut:
            PanelOpenMouseOver(this);
            break;
        case state.videoPlayMouseOut:
            VideoPlay(this);
            break;
        }
    }
    function checkRecentAutoPanelOpen(objRef) {
        if (objRef.curState == state.idle) {
            var dtNow = (new Date()).getTime();
            for (var i = objRef.autoShownPanels.length - 1; i >= 0; i--) {
                var panel = objRef.autoShownPanels[i];
                var panelOpenTime = panel.showtime;
                if ((dtNow - panelOpenTime) <= 300) {
                    objRef.autoShownPanels.splice(i, 1);
                    objRef.handlePanelOpen(panel.name);
                }
            }
        }
    }
    function handleMouseOutOfAd() {
        this.isMouseOverAd = false;
        switch (this.curState) {
        case state.idle:
        case state.idleVideoPlay:
        case state.idlePanelOpen:
            clearMouseTimer(this);
            break;
        case state.start:
            Stop(this);
            break;
        case state.videoPlay:
            VideoPlayMouseOut(this);
            break;
        case state.panelOpenMouseOver:
            PanelOpenMouseOut(this);
            break;
        }
    }
    function handlePanelOpen(panelName) {
        if (!this.wasMouseOverAd) {
            onAutoShowPanel(this, panelName);
            return;
        }
        this.numOfOpenPanels++;
        switch (this.curState) {
        case state.start:
            PanelOpenMouseOver(this);
            break;
        case state.stop:
            PanelOpenMouseOut(this);
            break;
        case state.idle:
            IdlePanelOpen(this);
        }
    }
    function onAutoShowPanel(objRef, panelName) {
        var autoPanel = new Object();
        autoPanel["name"] = panelName;
        autoPanel["showtime"] = (new Date()).getTime();
        addAutoShownPanel(objRef, autoPanel);
    }
    function addAutoShownPanel(objRef, autoPanel) {
        if (getAutoShownPanelIdx(objRef, autoPanel.name) >= 0) {
            return;
        }
        objRef.autoShownPanels[objRef.autoShownPanels.length] = autoPanel;
    }
    function getAutoShownPanelIdx(objRef, panelName) {
        var idx =- 1;
        for (var i = 0; i < objRef.autoShownPanels.length; i++) {
            var autoPanel = objRef.autoShownPanels[i];
            if (autoPanel.name == panelName) {
                idx = i;
                break;
            }
        }
        return idx;
    }
    function handlePanelClose(panelName) {
        var autoPanelIdx = getAutoShownPanelIdx(this, panelName);
        if (autoPanelIdx >= 0) {
            this.autoShownPanels.splice(autoPanelIdx, 1);
            return;
        }
        this.numOfOpenPanels--;
        if (this.numOfOpenPanels < 0)
            this.numOfOpenPanels = 0;
        if (this.numOfOpenPanels == 0) {
            switch (this.curState) {
            case state.panelOpenMouseOver:
                if (this.isVideoPlay)
                    VideoPlay(this);
                else 
                    Start(this);
                break;
            case state.panelOpenMouseOut:
                if (this.isVideoPlay)
                    VideoPlayMouseOut(this);
                else 
                    Stop(this);
                break;
            case state.idlePanelOpen:
                Idle(this);
                break;
            }
        }
    }
    function startMouseTimer(objRef) {
        if (!objRef.mouseTimeoutId) {
            objRef.mouseTimeoutId = setTimeout(objRef.displayUnit.objName + ".dwellTimeManager.handleMouseThreshold()", idleTimeLimit);
        } else {}
    }
    function clearMouseTimer(objRef) {
        clearTimeout(objRef.mouseTimeoutId);
        objRef.mouseTimeoutId = 0;
    }
    function isIdleMode(objRef) {
        return (objRef.curState == state.idle || objRef.curState == state.idlePanelOpen || objRef.curState == state.idleVideoPlay);
    }
    function Idle(objRef) {
        if (!isIdleMode)
            return;
        objRef.curState = state.idle;
    }
    function Start(objRef) {
        objRef.curState = state.start;
        startTimer(objRef);
    }
    function Stop(objRef) {
        objRef.curState = state.stop;
        endTimer(objRef);
    }
    function IdlePanelOpen(objRef) {
        if (!isIdleMode)
            return;
        objRef.curState = state.idlePanelOpen;
    }
    function PanelOpenMouseOver(objRef) {
        objRef.curState = state.panelOpenMouseOver;
        startTimer(objRef);
    }
    function VideoPlay(objRef) {
        objRef.curState = state.videoPlay;
        startTimer(objRef);
    }
    function VideoPlayMouseOut(objRef) {
        objRef.curState = state.videoPlayMouseOut;
        startTimer(objRef);
    }
    function PanelOpenMouseOut(objRef) {
        objRef.curState = state.panelOpenMouseOut;
        startTimer(objRef);
    }
    function IdleVideoPlay(objRef) {
        if (!isIdleMode)
            return;
        objRef.curState = state.idleVideoPlay;
    }
    function ReportUserInitatedVideo(objRef, movieNum) {
        objRef.displayUnit.handleVideoInteraction("ebUserInitiatedVideo", movieNum);
    }
    function isTimeOverLimit(objRef) {
        if (isTimerStarted(objRef)) {
            endTimer(objRef);
            return (objRef.displayUnit.interactions["ebdwelltime"].nValue > idleTimeLimit);
        }
        return false;
    }
    function isTimerStarted(objRef) {
        var isStarted = false;
        try {
            isStarted = (objRef.displayUnit.interactions["ebdwelltime"].nStartTime > 0);
        } catch (e) {}
        return isStarted;
    }
    function resetTimer(objRef) {
        objRef.displayUnit.interactions["ebdwelltime"].nValue = 0;
    }
    function startTimer(objRef) {
        objRef.displayUnit.handleSystemInteraction("ebUniqueDwell");
        objRef.displayUnit.ebstarttimerHandler("ebDwellTime");
    }
    function endTimer(objRef) {
        objRef.displayUnit.ebendtimerHandler("ebDwellTime");
    }
}
function ebCBannerEye(nID) {
    this.displayUnit = null;
    this.adData = new ebCAdData(nID, "gEbBanners[" + nID + "]");
    this.interactions = new ebCInteractionsList();
    this.objName = "gEbBanners[" + nID + "]";
    this.fDisplayUnitCreated = false;
    this.createDisplayUnit = createDisplayUnit;
    this.run = run;
    this.loadExtraVisibilityAd = loadExtraVisibilityAd;
    this.doOnLoad = doOnLoad;
    this.doOnResize = doOnResize;
    this.doOnUnload = doOnUnload;
    init(this);
    function createDisplayUnit() {
        this.fDisplayUnitCreated = true;
        var tempAd = eval("new ebAd_" + this.adData.nAdID + "()");
        ebAdjustAdObject(tempAd);
        this.displayUnit = eval("new ebCTemplateB" + this.adData.strTemplateName + "('" + this.objName + ".displayUnit')");
        this.displayUnit.ad = tempAd;
        this.displayUnit.adData = this.adData;
        this.displayUnit.interactions = this.interactions;
        if (this.displayUnit.checkifHasWMV(this.displayUnit.ad.additionalAssetsArray)) {
            var nameWMVDriver = "WMVVideoDriver";
            var urlWMVDriver = ebBigS + "WMVVideoDriver" + ebWMVDriverVer + ".js";
            this.displayUnit.loadScriptFile("write", urlWMVDriver, nameWMVDriver);
        }
        this.displayUnit.setBannerType();
        if (this.displayUnit.fImageOnly) {
            if (this.displayUnit.adData.ditu) {
                for (var i = 0; i < this.displayUnit.adData.ditu.length; i++) {
                    var defImpTrackUrl = ebReplaceURLTokens(this.displayUnit.adData.ditu[i], this.displayUnit.adData);
                    var reportingImg = new Image();
                    reportingImg.src = defImpTrackUrl;
                }
            }
            if (this.displayUnit.adData.dctu) {
                this.displayUnit.adData.clickTrackingURLs.addMultiple(this.displayUnit.adData.dctu);
            }
        }
        this.displayUnit.countDefaultImage();
        if (typeof(this.displayUnit.doOnCreateDisplayUnit) == "function") {
            var strCBFun = this.objName + ".run()";
            this.displayUnit.doOnCreateDisplayUnit(strCBFun);
        }
        if ((typeof(this.displayUnit.fIsReady) == "undefined") || this.displayUnit.fIsReady)
            this.run();
        if (typeof (this.displayUnit.ad) != "undefined" && this.displayUnit.ad.UiVz) {
            this.loadExtraVisibilityAd();
        }
    }
    function run() {
        try {
            this.displayUnit.dwellTimeManager = new ebCDwellTimeManager(this.displayUnit);
            this.displayUnit.findMyIframe();
            if (gEbBC.isIE()) {
                if (gEbDisplayPage.TI.getDoc().readyState != 'complete') {
                    var strFunc = this.displayUnit.scriptWin + ".ebOnResize()";
                    gEbDisplayPage.addInterval("resize", strFunc, 100, gEbDisplayPage.TI.getWin());
                }
            }
            this.displayUnit.updateInteractions();
            this.displayUnit.nStartDlTime = new Date().getTime();
            this.displayUnit.adData.fShouldReportTimers = true;
            this.displayUnit.ebstarttimerHandler("ebAdDuration");
            this.displayUnit.adData.customEventHandler.onBeforeAddRes(this.displayUnit.objName);
            this.displayUnit.addResources();
            try {
                this.displayUnit.adData.customEventHandler.onAfterAddRes(this.displayUnit.objName);
            } catch (e) {}
            this.adData.onPlayEvents.execute();
            this.displayUnit.collectURL();
            if ((typeof(gfEbMSNIframe) != "undefined") && gfEbMSNIframe) {
                gfEbDocReady2Close = true;
                setTimeout("document.close();", 100);
            }
        } catch (e) {}
    }
    function loadExtraVisibilityAd() {
        var banner = gEbTemplateName == "Banner";
        var unfriendly = false;
        try {
            unfriendly = ebIsGlobalDef("gfEbInIframe", true);
            var parentHostName = null;
            try {
                parentHostName = parent.location.hostname;
            } catch (e) {}
            if (window !== parent) {
                if (window.location.hostname !== parentHostName) {
                    unfriendly = ((typeof (gfEbOnInternalIframe) !== "undefined") && gfEbOnInternalIframe) ? false : true;
                }
            }
        } catch (e) {}
        if (banner && unfriendly) {
            var viz = "Visibility";
            var newEbSrc = ebBigS + "/Ad" + ebO.scv + "/eb" + viz + "" + ".js";
            window.ebOArr = window.ebOArr || [];
            ebOArr[ebOArr.length] = ebO;
            ebO.tn = viz;
            ebO.rnd = ebRand;
            ebO.ifrm = 2;
            ebO.phid = "ebVizDiv" + ebO.ai;
            ebO.adConfig = {
                tn: viz,
                rnd: ebRand,
                adId: ebO.ai,
                uid: ebO.ai + "_" + ebRand
            };
            var newPlaceholder = document.createElement("DIV");
            newPlaceholder.id = ebO.phid;
            var newScript = document.createElement("SCRIPT");
            newScript.src = newEbSrc;
            var target = document.body;
            if (target) {
                target.appendChild(newPlaceholder);
                target.appendChild(newScript);
            }
        }
    }
    function doOnLoad() {
        if (typeof(this.displayUnit.doOnload) != "undefined")
            this.displayUnit.doOnload();
    }
    function doOnResize() {
        if (typeof(this.displayUnit.doOnResize) != "undefined")
            this.displayUnit.doOnResize();
    }
    function doOnUnload() {
        if (typeof(this.displayUnit.doOnUnload) != "undefined")
            this.displayUnit.doOnUnload();
    }
    function init(eyeObj) {
        try {
            var data = eyeObj.adData;
            setInputObjects();
            if ((typeof (gEbServerData) != "undefined") && (gEbServerData != null)) {
                copyServerData(eyeObj, gEbServerData);
                if (data.ilfCheck) {
                    sendAddInEyeVerificationToServer();
                }
            }
            copy(gEbBAd, data);
            data.dctu = gEbBAd.dctu;
            data.ditu = gEbBAd.ditu;
            if ((typeof(gEbURLTokens) != "undefined") && (gEbURLTokens != null)) {
                gEbURLTokens = gEbURLTokens.replace("&apos;", "'");
                data.strURLTokens = gEbURLTokens;
            }
            data.replaceURLTokens();
            if (gEbFOptOut) {
                deleteCookie("ebNewBandWidth");
                deleteCookie("ebPanelFrequencyPerSession");
                deleteCookie("ebPanelFrequency");
            }
            initCustomScripts(eyeObj);
            resetInputObjects();
            data.onStartDnlEvents.execute();
        } catch (e) {}
    }
    function sendAddInEyeVerificationToServer() {
        var addineyePipe = "";
        var addineyeDomain = ebGetHostName(window.location.href);
        addineyePipe = ebStrProtocol + ebBS + "/BurstingPipe/adServer.bs?cn=dmvld&dm=" + addineyeDomain;
        document.write("<scr" + "ipt src='" + addineyePipe + "'></scr" + "ipt>");
    }
    function setInputObjects() {
        if ((typeof(gEbBAd) == "undefined") || (gEbBAd == null)) {
            if ((typeof(gEbBannerData) != "undefined") && (gEbBannerData != null)) {
                gEbBAd = new Object();
                var arrFields = gEbBannerData.split("::");
                gEbBAd.strRand = arrFields[0];
                gEbBAd.nDownloadMode = parseInt(arrFields[1]);
                gEbBAd.nWidth = parseInt(arrFields[2]);
                gEbBAd.nHeight = parseInt(arrFields[3]);
                gEbBAd.strWmode = arrFields[4];
                gEbBAd.strPage = arrFields[5];
                gEbBAd.fWebPageSource = parseInt(arrFields[6]);
                gEbBAd.fOptOut = parseInt(arrFields[7]);
                gEbBAd.nHistLen = parseInt(arrFields[8]);
                gEbBAd.nDelayedExpInterval = eval(arrFields[12]);
                gEbBAd.nDelayedExpMaxV = eval(arrFields[13]);
                gEbBAd.panelsWMode = arrFields[15];
                gEbBAd.fFixOperAborted = eval(arrFields[16]);
                gEbBAd.sPublisherPlacementId = arrFields[17];
                gEbBAd.strNClickUrl = arrFields[18];
                gEbBAd.AcCP = arrFields[19];
                gEbBAd.CAcURL = arrFields[20];
                gEbBAd.AcImagesDir = arrFields[21];
            }
        }
        if ((typeof(gEbPreRoll) == "undefined") || (gEbPreRoll == null)) {
            if ((typeof(gEbPreRollData) != "undefined") && (gEbPreRollData != null)) {
                gEbPreRoll = new Object();
                var arrFields = gEbPreRollData.split("::");
                gEbPreRoll.adExistCB = arrFields[0];
                gEbPreRoll.adCompleteCB = arrFields[1];
                gEbPreRoll.strName = arrFields[2];
                gEbPreRoll.strRefElem = arrFields[3];
                gEbPreRoll.nOffsetX = arrFields[4];
                gEbPreRoll.nOffsetY = arrFields[5];
            }
        }
    }
    function resetInputObjects() {
        gEbBAd = null;
        gEbServerData = null;
        gEbURLTokens = null;
    }
    function copy(src, dest) {
        for (var attr in src) {
            try {
                if (typeof(src[attr]) == "object") {
                    {}
                    if (typeof(dest[attr]) == "undefined") {
                        if (typeof(src[attr].strType) != "undefined") {
                            dest[attr] = eval("new " + src[attr].strType + "()");
                        }
                    }
                    copy(src[attr], dest[attr]);
                } else {
                    dest[attr] = src[attr];
                }
            } catch (e) {}
        }
    }
    function copyServerData(eyeObj, serverData) {
        try {
            var aD = eyeObj.adData;
            var arrData = serverData.split("::");
            aD.nFlightID = arrData[1];
            aD.nAdID = arrData[2];
            aD.strAdUrl = arrData[3];
            aD.strTemplateName = arrData[4];
            aD.fPromptForPlugins = parseInt(arrData[5]);
            aD.fShowOnlyImage = parseInt(arrData[8]);
            aD.fCollectWebPages = parseInt(arrData[13]);
            aD.nCampaignID = arrData[14];
            aD.fOptOut = parseInt(arrData[15]);
            aD.fCollectURL = parseInt(arrData[16]);
            aD.strURLTokens = arrData[19];
            aD.sAdVersions = arrData[20];
            aD.sTAId = arrData[21];
            aD.sAdBasePath = arrData[22];
            aD.sDGId = arrData[23];
            aD.onStartDnlEvents = new ebCEventHandler();
            aD.onStartDnlEvents.events = eval(unescape(arrData[24]));
            aD.onPlayEvents = new ebCEventHandler();
            aD.onPlayEvents.events = eval(unescape(arrData[25]));
            aD.sID = arrData[26];
            aD.usercookie = arrData[27];
            aD.iabMinSurf = arrData[28];
            aD.iabMinDur = arrData[29];
            aD.visibilityMode = arrData[30];
            aD.agnMinSurf = arrData[31];
            aD.agnMinDur = arrData[32];
            aD.advMinSurf = arrData[33];
            aD.advMinDur = arrData[34];
            aD.ilfCheck = parseInt(arrData[35]);
            aD.newClickTracking = parseInt(arrData[36]);
            aD.massVersionFolderDivider = arrData[37];
            aD.nDownloadMode = 1;
            gEbFOptOut = aD.fOptOut;
        } catch (e) {}
    }
    function initCustomScripts(eyeObj) {
        eyeObj.adData.customEventHandler = new ebCCustomEventHandler();
        eyeObj.adData.strPreLoadScripts = (typeof (gstrEbPreLoadScripts) != "undefined") ? gstrEbPreLoadScripts : "";
        gstrEbPreLoadScripts = undefined;
        eyeObj.adData.strCustomEventHandlers = (typeof(gstrEbCustomEventHandlers) != "undefined") ? gstrEbCustomEventHandlers : "";
        gstrEbCustomEventHandlers = undefined;
    }
    function deleteCookie(name) {
        try {
            var dtNow = new Date();
            var strDomain = ".";
            if (typeof(gstrEbDomain) != "undefined" && (gstrEbDomain != ""))
                strDomain += gstrEbDomain;
            else 
                try {
                    strDomain = "." + document.location.hostname;
            } catch (e) {
                strDomain = "";
            }
            var strCookie = name + '_' + strDomain + '=""';
            strCookie += "; expires=" + dtNow.toGMTString();
            strCookie += "; path=/";
            if (ebIsValidDomain(strDomain))
                strCookie += "; domain=" + strDomain;
            document.cookie = strCookie;
        } catch (e) {}
    }
}
function ebCBannerBase() {
    this.temp = ebCTemplateBaseProto;
    this.temp();
    delete this.temp;
    this.objType = 1;
    this.fImageOnly = false;
    this.setBannerType = setBannerType;
    this.countDefaultImage = countDefaultImage;
    this.stopAddResources = stopAddResources;
    this.addAdChoiceToPage = addAdChoiceToPage;
    function setBannerType() {
        if (typeof (this.adData.aieImageOnly) != "undefined" && this.adData.aieImageOnly) {
            this.objType = 1;
            this.fImageOnly = true;
            return;
        }
        if (gEbFlashVer == 0) {
            this.objType = 1;
            this.fImageOnly = true;
            return;
        }
        if (this.adData.fShowOnlyImage) {
            this.objType = 1;
            this.fImageOnly = true;
            return;
        }
        if ((this.ad.flFlashVer <= gEbFlashVer) || (this.adData.fPromptForPlugins)) {
            if (this.ad.strDefaultFlash == "") {
                this.objType = 1;
            } else {
                this.objType = 2;
            }
        } else {
            this.objType = 1;
            this.fImageOnly = true;
        }
    }
    function countDefaultImage(defaultImageAsset) {
        var isAvd = ((typeof (defaultImageAsset) != "undefined") && (defaultImageAsset != ""));
        if ((this.fImageOnly || isAvd)&&!this.adData.fShowOnlyImage) {
            this.ad.strDefaultImage = ebFormat('{0}{1}/BurstingPipe/adServer.bs?cn=cdi&ai={2}&p={3}&pluid={4}&ru={5}&ord={6}', ebStrProtocol, ebBS, this.adData.nAdID, this.adData.strPage, ebPluID, (isAvd) ? defaultImageAsset : this.ad.strDefaultImage, this.adData.strRand);
            this.ad.strDefaultImage += ebGetTargetingParams(this.adData);
            if (this.adData.sAdVersions) {
                var avIdsNoSuffix = [];
                var avIdsArr = this.adData.sAdVersions.split(",");
                for (avIdIndex in avIdsArr) {
                    var avIdSuffixIndex = avIdsArr[avIdIndex].indexOf("_");
                    avIdsNoSuffix.push((avIdSuffixIndex == ( - 1)) ? avIdsArr[avIdIndex] : avIdsArr[avIdIndex].substring(0, avIdSuffixIndex));
                }
                this.ad.strDefaultImage += ebFormat("&vid={0}", avIdsNoSuffix.join());
            }
            return true;
        }
        return false;
    }
    function stopAddResources() {
        this.adData.fShouldReportTimers = false;
        this.adData.onPlayEvents = new ebCEventHandler();
    }
    function addAdChoiceToPage(retry) {
        function addCommonDivProps(obj) {
            obj.style.visibility = "hidden";
            obj.style.position = "absolute";
            obj.style.overflow = "visible";
            obj.style.margin = obj.style.padding = obj.style.border = obj.style.lineHeight = obj.style.fontSize = "0px";
        }
        if (!this.ad.AcIncludeMarker) {
            return;
        }
        var $this = this;
        var stabilizationPeriod = window.gEbBC && gEbBC.isOpera() ? 9: null;
        var targetDivId = "eyeDiv";
        var cert = this.adData.AcCP ? parseInt(this.adData.AcCP): 0;
        var cornerAlign = this.ad.AcIconPosition ? parseInt(this.ad.AcIconPosition): 0;
        var AcImagesDir = ebBigS && this.adData.AcImagesDir ? unescape(ebBigS) + "Res/Images" + this.adData.AcImagesDir + "/AdChoice/" : "";
        if (AcImagesDir === "") {
            return;
        }
        AcImagesDir += cornerAlign < 2 ? "Top" : "Bottom";
        AcImagesDir += cornerAlign == 0 || cornerAlign == 2 ? "Right/" : "Left/";
        var lang = (navigator.language ? navigator.language : navigator.userLanguage ? navigator.userLanguage : "en-US").toLowerCase().replace("-", "_");
        var lang2 = lang.length > 2 ? lang.split("_")[0] : "en";
        var iabU = "http://www.youronlinechoices.com/";
        var iabDefaultImage = "OBA.png";
        var iabData = {
            en: {
                img: "OBA_DEFAULT.png",
                url: iabU + "uk/"
            },
            de_at: {
                img: "OBA_AUSTRIA.png",
                url: iabU + "at/"
            },
            fr_be: {
                img: "OBA_BELGIUM_FR.png",
                url: iabU + "be-fr/"
            },
            nl_be: {
                img: "OBA_BELGIUM_NL.png",
                url: iabU + "be-nl/"
            },
            bg: {
                img: "OBA_BULGARIA.png",
                url: iabU + "bg/"
            },
            cs: {
                img: "OBA_CZECH.png",
                url: iabU + "cs/"
            },
            da: {
                img: "OBA_DENMARK.png",
                url: iabU + "den/"
            },
            fi: {
                img: "OBA_FINLAND.png",
                url: iabU + "fi/"
            },
            fr: {
                img: "OBA_FRANCE.png",
                url: iabU + "fr/"
            },
            de: {
                img: "OBA_GERMANY.png",
                url: iabU + "de/"
            },
            el: {
                img: "OBA_GREEK.png",
                url: iabU + "gr/"
            },
            hu: {
                img: "OBA_HUNGARY.png",
                url: iabU + "hu/"
            },
            en_ie: {
                img: "OBA_IRELAND.png",
                url: iabU + "ie/"
            },
            it: {
                img: "OBA_ITALY.png",
                url: iabU + "it/"
            },
            nl: {
                img: "OBA_NETHERLANDS.png",
                url: iabU + "nl/"
            },
            no: {
                img: "OBA_NORWAY.png",
                url: iabU + "nor/"
            },
            pl: {
                img: "OBA_POLAND.png",
                url: iabU + "pl/"
            },
            ro: {
                img: "OBA_ROMANIA.png",
                url: iabU + "ro/"
            },
            sl: {
                img: "OBA_SLOVAKIA.png",
                url: iabU + "sl/"
            },
            es: {
                img: "OBA_SPAIN.png",
                url: iabU + "es/"
            },
            sv: {
                img: "OBA_SWEDEN.png",
                url: iabU + "se/"
            },
            de_ch: {
                img: "OBA_SWITZERLAND_DE.png",
                url: iabU + "ch-de/"
            },
            fr_ch: {
                img: "OBA_SWITZERLAND_FR.png",
                url: iabU + "ch-fr/"
            },
            it_ch: {
                img: "OBA_SWITZERLAND_IT.png",
                url: iabU + "ch-it/"
            },
            en_gb: {
                img: "OBA_UK.png",
                url: iabU + "uk/"
            },
            hr: {
                img: "OBA_DEFAULT.png",
                url: iabU + "hr/"
            },
            is: {
                img: "OBA_DEFAULT.png",
                url: iabU + "is/"
            },
            lt: {
                img: "OBA_DEFAULT.png",
                url: iabU + "lt/"
            },
            lv: {
                img: "OBA_DEFAULT.png",
                url: iabU + "lv/"
            },
            pt: {
                img: "OBA_DEFAULT.png",
                url: iabU + "pt/"
            },
            sk: {
                img: "OBA_DEFAULT.png",
                url: iabU + "sk/"
            }
        };
        var iabObject = iabData[lang] ? iabData[lang]: iabData[lang2] ? iabData[lang2]: iabData.en;
        var iabClickURL = iabObject.url;
        var iabExpandedImage = iabObject.img;
        var iabImageBaseURL = AcImagesDir;
        var naiU = "http://www.aboutads.info/consumers";
        var naiDefaultImage = "OBA.png";
        var naiData = {
            en: {
                img: "OBA_DEFAULT.png",
                url: naiU
            }
        };
        var naiObject = naiData[lang] ? naiData[lang]: naiData[lang2] ? naiData[lang2]: naiData.en;
        var naiClickURL = naiObject.url;
        var naiExpandedImage = iabObject.img;
        var naiImageBaseURL = AcImagesDir;
        var imageBaseURL = cert == 1 ? naiImageBaseURL: iabImageBaseURL;
        var defaultImage = imageBaseURL + (cert == 1 ? naiDefaultImage : iabDefaultImage);
        var expandedImage = imageBaseURL + (cert == 1 ? naiExpandedImage : iabExpandedImage);
        var clickURL = cert == 1 ? naiClickURL: iabClickURL;
        if (this.adData.CAcURL != "" && typeof (this.adData.CAcURL) != "undefined" && this.adData.CAcURL != "undefined")
            clickURL = unescape(this.adData.CAcURL);
        var targetDivRef = this.getElementById(targetDivId);
        if (!targetDivRef) {
            {}
            if (retry) {
                window.setTimeout(this.objName + ".addAdChoiceToPage('" + targetDivId + "',false)", 1000);
            }
        } else {
            var targetZ = targetDivRef.style.zIndex ? parseInt(targetDivRef.style.zIndex): 1;
            var targetWidth = parseInt(this.adData.nWidth);
            var targetHeight = parseInt(this.adData.nHeight);
            var defaultDivId = "acDefault_" + targetDivId + "_" + this.adData.strRand;
            var expandedDivId = "acExpanded" + targetDivId + "_" + this.adData.strRand;
            var div1 = this.adTI.getDoc().createElement("DIV");
            var div2 = this.adTI.getDoc().createElement("DIV");
            div1.id = defaultDivId;
            div1.style.zIndex = targetZ + 1;
            div1.onmouseover = function() {
                div2.style.visibility = "visible";
                div1.style.visibility = "hidden";
            };
            div1.onclick = function() {
                div2.style.visibility = "visible";
                div1.style.visibility = "hidden";
            };
            div1.imageOnload = function(img) {
                var w = img.width, h = img.height;
                if (this.parentNode.id && this.parentNode.id == "eyeDiv") {
                    if ($this && $this.repositionAdchoiceLogo)
                        $this.repositionAdchoiceLogo(true);
                }
                if (cornerAlign > 1)
                    this.style.marginTop = (targetHeight - h) + "px";
                if (cornerAlign == 0 || cornerAlign == 2)
                    this.style.marginLeft = (targetWidth - w) + "px";
            };
            addCommonDivProps(div1);
            var div1ih = "<img border='0' onload='this.parentNode.imageOnload(this)' src='" + defaultImage + "'>";
            div1.innerHTML = div1ih;
            div2.id = expandedDivId;
            div2.style.zIndex = targetZ + 2;
            div2.onmouseover = function() {
                div2.style.visibility = "visible";
            };
            div2.onmouseout = function() {
                div2.style.visibility = "hidden";
                div1.style.visibility = "visible";
            };
            div2.onclick = function() {
                div2.style.visibility = "hidden";
                div1.style.visibility = "visible";
            };
            div2.imageOnload = function(img) {
                var w = img.width, h = img.height;
                if (this.parentNode.id && this.parentNode.id == "eyeDiv") {
                    if ($this && $this.repositionAdchoiceLogo)
                        $this.repositionAdchoiceLogo();
                }
                if (cornerAlign > 1)
                    this.style.marginTop = (targetHeight - h) + "px";
                if (cornerAlign == 0 || cornerAlign == 2)
                    this.style.marginLeft = (targetWidth - w) + "px";
            };
            addCommonDivProps(div2);
            var div2ih = "<a target='_blank' mmskipreplace='1' href='" + clickURL + "'><img border='0' onload='this.parentNode.parentNode.imageOnload(this)' src='" + expandedImage + "'></a>";
            div2.innerHTML = div2ih;
            this.hideAdchoice = function() {
                div1.style.visibility = "hidden";
                div2.style.visibility = "hidden";
            };
            this.showAdchoice = function() {
                div1.style.visibility = "visible";
                div2.style.visibility = "hidden";
            };
            this.repositionAdchoiceLogo = function(setDiv1VisibleWhenPositionGood) {
                var banRes = $this.bannerRes;
                if (!banRes && $this.getBannerRes) {
                    banRes = $this.getBannerRes();
                }
                if (stabilizationPeriod || (banRes && setDiv1VisibleWhenPositionGood && (parseInt(banRes.style.width) == 1 && parseInt(banRes.style.height) == 1))) {
                    stabilizationPeriod--;
                    setTimeout(function () {
                        $this.repositionAdchoiceLogo(true);
                    }, 100);
                    return;
                }
                if (banRes) {
                    var bannerLeft = ebGetRealLeft(banRes);
                    var bannerTop = ebGetRealTop(banRes);
                    div1.style.left = div2.style.left = bannerLeft + "px";
                    div1.style.top = div2.style.top = bannerTop + "px";
                }
                var eye = $this.adTI.getDoc().getElementById("eyeDiv");
                var baseZ = eye && eye.style.zIndex ? parseInt(eye.style.zIndex): 1;
                var internalZ = 0;
                if (eye && baseZ && $this.isSEAd && $this.isSEAd()) {
                    for (var eyeChild in eye.childNodes) {
                        var thisChild = eye.childNodes[eyeChild];
                        if ((thisChild && thisChild.tagName && thisChild.tagName.toLowerCase() == "div") && (thisChild.id.indexOf("eb") == 0)) {
                            var thisZ = thisChild.style.zIndex ? parseInt(thisChild.style.zIndex): 0;
                            if (thisZ > internalZ)
                                internalZ = thisZ;
                        }
                    }
                    div1.style.zIndex = internalZ + 1;
                    div2.style.zIndex = internalZ + 2;
                }
                if (setDiv1VisibleWhenPositionGood) {
                    div1.style.visibility = "visible";
                }
            };
            targetDivRef.appendChild(div2);
            targetDivRef.appendChild(div1);
        }
    }
}
function ebCVisibilityManager(objTI, fIsStd) {
    VisibilityInteractions = {
        EB_VIS_RECORDABLE: "VsR",
        EB_VIS_RECORDABLE_BASIC: "VsRAg",
        EB_VIS_RECORDABLE_ENHANCED: "VsRAd",
        EB_VIS_IAB: "VsIAB",
        EB_VIS_AGENCY: "VsAg",
        EB_VIS_ADVERTISER: "VsAd",
        EB_VIS_AGENCY_DURATION: "VsAgDu",
        EB_VIS_ADVERTISER_DURATION: "VsAdDu",
        EB_VIS_AVG_SURFACE: "VsAvSu",
        EB_VIS_AVG_SCREEN_SHARE: "VsAvSc"
    };
    var thresholdType = {
        IAB: "IAB",
        Ag: "Ag",
        Ad: "Ad"
    };
    var VisibilityMode = {
        DEFAULT: "default",
        BASIC: "basic",
        ENHANCED: "enhanced"
    };
    var TimerAction = {
        START: 1,
        END: 2,
        UPDATE: 3,
        RESET: 4
    };
    this.fIsStd = fIsStd;
    this.clientArea=!this.clientArea ? new ebCClientArea(objTI) : this.clientArea;
    this.fIsRecordable = true;
    this.fIsRecordableReported = false;
    this.fAverageInteractionsHandled = false;
    this.currentVisMode = null;
    this.visibilityParamsSet = false;
    this.visibilityDataObj = {};
    this.assetID = null;
    this.isOperaBr = gEbBC.isOpera();
    this.currVisiblePercentage = 0;
    this.adStartTimeSec = 0;
    this.totalAverageVisibilityPercentage = 0;
    this.prevAdDuration = 0;
    this.currViewPortSize = 0;
    this.totalViewPortSizeAverage = 0;
    this.totalAverageScreenOccupation = 0;
    this.fForceMode = false;
    this.setVisibilityParameters = setVisibilityParameters;
    this.reportRecordableInt = reportRecordableInt;
    this.checkIfVisibleByThreshold = checkIfVisibleByThreshold;
    this.checkIfAdIsVisibile = checkIfAdIsVisibile;
    this.reportEbVisibleByThreshold = reportEbVisibleByThreshold;
    this.startEbVisibleByThresholdTimer = startEbVisibleByThresholdTimer;
    this.stopEbVisibleByThresholdTimer = stopEbVisibleByThresholdTimer;
    this.calculateAverage = calculateAverage;
    this.handleAverageInteractions = handleAverageInteractions;
    this.sendSystemInteraction = sendSystemInteraction;
    this.handleTimerInteraction = handleTimerInteraction;
    this.getFlashObj = getFlashObj;
    this.isHiddenValue = isHiddenValue;
    function checkIfAdIsVisibile(assetId, isBlur) {
        this.assetID = assetId;
        this.fForceMode = (typeof (this.assetID) == "undefined" ||!this.assetID);
        if (!this.fIsRecordable) {
            {}
            return;
        }
        if (!this.visibilityParamsSet) {
            this.setVisibilityParameters();
            this.visibilityParamsSet = true;
        }
        this.reportRecordableInt();
        if (!this.isHiddenValue() || isBlur == true) {
            {}
            this.checkIfVisibleByThreshold(isBlur);
        }
    }
    function setVisibilityParameters() {
        try {
            this.currentVisMode = this.visibilityMode ? this.visibilityMode : (this.adData ? this.adData.visibilityMode : null);
            var visObj = this.visibilityDataObj[this.currentVisMode] = {};
            if (!this.fIsStd) {
                visObj[thresholdType.IAB] = {};
                visObj[thresholdType.IAB].minSurf = this.adData ? this.adData.iabMinSurf : 0;
                visObj[thresholdType.IAB].minDur = this.adData ? this.adData.iabMinDur : 0;
                visObj[thresholdType.IAB].timeOut = null;
                visObj[thresholdType.IAB].isVisible = false;
                visObj[thresholdType.IAB].reported = false;
            }
            if ((this.visibilityMode == VisibilityMode.BASIC || this.visibilityMode == VisibilityMode.ENHANCED) || (this.adData && (this.adData.visibilityMode == VisibilityMode.BASIC || this.adData.visibilityMode == VisibilityMode.ENHANCED))) {
                visObj[thresholdType.Ag] = {};
                visObj[thresholdType.Ag].minSurf = this.agnMinSurf ? this.agnMinSurf : (this.adData ? this.adData.agnMinSurf : 0);
                visObj[thresholdType.Ag].minDur = this.agnMinDur ? this.agnMinDur : (this.adData ? this.adData.agnMinDur : 0);
                visObj[thresholdType.Ag].timeOut = null;
                visObj[thresholdType.Ag].isVisible = false;
                visObj[thresholdType.Ag].reported = false;
            }
            if (this.visibilityMode == VisibilityMode.ENHANCED || (this.adData && this.adData.visibilityMode == VisibilityMode.ENHANCED)) {
                visObj[thresholdType.Ad] = {};
                visObj[thresholdType.Ad].minSurf = this.advMinSurf ? this.advMinSurf : (this.adData ? this.adData.advMinSurf : 0);
                visObj[thresholdType.Ad].minDur = this.advMinDur ? this.advMinDur : (this.adData ? this.adData.advMinDur : 0);
                visObj[thresholdType.Ad].timeOut = null;
                visObj[thresholdType.Ad].isVisible = false;
                visObj[thresholdType.Ad].reported = false;
            }
        } catch (e) {}
    }
    function reportRecordableInt() {
        if (this.fIsRecordable) {
            if (!this.fIsRecordableReported) {
                {}
                this.sendSystemInteraction(VisibilityInteractions.EB_VIS_RECORDABLE);
                if (this.currentVisMode != VisibilityMode.DEFAULT) {
                    {}
                    this.sendSystemInteraction(VisibilityInteractions.EB_VIS_RECORDABLE_BASIC);
                    if (this.currentVisMode == VisibilityMode.ENHANCED) {
                        {}
                        this.sendSystemInteraction(VisibilityInteractions.EB_VIS_RECORDABLE_ENHANCED);
                    }
                }
                this.fIsRecordableReported = true;
            }
        }
    }
    function checkIfVisibleByThreshold(isBlur) {
        var flashObj=!this.fForceMode ? this.getFlashObj(this.assetID) : null;
        if (flashObj || this.fForceMode) {
            {}
            isBlur = (typeof (isBlur) == "undefined") ? false : isBlur;
            if (this.currVisiblePercentage > 0) {
                this.adStartTimeSec = this.adStartTimeSec ? this.adStartTimeSec : new Date().getTime() / 1000;
                if (this.currentVisMode == VisibilityMode.ENHANCED) {
                    this.calculateAverage();
                }
            }
            this.currVisiblePercentage = isBlur ? 0 : (this.fForceMode ? 100 : this.clientArea.isVisible(flashObj));
            this.currViewPortSize = isBlur ? 0 : this.clientArea.nHeight * this.clientArea.nWidth;
            var objName = (!this.fIsStd) ? this.objName: this.strRef;
            for (var threshold in thresholdType) {
                var visObj = this.visibilityDataObj[this.currentVisMode][threshold];
                if (visObj) {
                    visObj.isVisible = (this.currVisiblePercentage >= visObj.minSurf);
                    if (visObj.isVisible&&!visObj.timeOut&&!visObj.reported) {
                        {}
                        var strFunc = objName + ".reportEbVisibleByThreshold" + "('" + threshold + "','" + isBlur + "')";
                        visObj.timeOut = window.setTimeout(strFunc, visObj.minDur * 1000);
                    }
                    if (visObj.isVisible && visObj.reported) {
                        if (visObj.timeOut) {
                            clearTimeout(visObj.timeOut);
                            visObj.timeOut = null;
                        }
                        if (threshold != thresholdType.IAB && this.currentVisMode == VisibilityMode.ENHANCED) {
                            this.startEbVisibleByThresholdTimer(threshold);
                        }
                    }
                    if (!visObj.isVisible) {
                        if (visObj.timeOut) {
                            clearTimeout(visObj.timeOut);
                            visObj.timeOut = null;
                        }
                        this.stopEbVisibleByThresholdTimer(threshold);
                    }
                    visObj.isVisible = (this.currVisiblePercentage >= visObj.minSurf);
                } else {}
            }
        } else {}
    }
    function reportEbVisibleByThreshold(threshold, isBlur) {
        isBlur = ((typeof (isBlur) != "undefined") && (isBlur == "false" || isBlur == "undefined")) ? false : (((typeof (isBlur) != "undefined") && (isBlur == "true")) ? true : isBlur);
        var visObj = this.visibilityDataObj[this.currentVisMode][threshold];
        visObj.timeOut = null;
        var flashObj = null;
        if (!this.fForceMode) {
            flashObj = this.getFlashObj(this.assetID);
        }
        this.currVisiblePercentage = isBlur ? 0 : (this.fForceMode ? 100 : this.clientArea.isVisible(flashObj));
        visObj.isVisible = (this.currVisiblePercentage >= visObj.minSurf);
        if (this.fForceMode || flashObj) {
            {}
            if (visObj.isVisible) {
                if (threshold != thresholdType.IAB && this.currentVisMode == VisibilityMode.ENHANCED) {
                    this.startEbVisibleByThresholdTimer(threshold);
                }
                if (!visObj.reported) {
                    var inter = ("Vs" + threshold);
                    this.sendSystemInteraction(inter);
                    visObj.reported = true;
                }
            }
        } else {
            visObj.isVisible = false;
        }
    }
    function startEbVisibleByThresholdTimer(threshold) {
        try {
            var visObj = this.visibilityDataObj[this.currentVisMode][threshold];
            var interTimer = "Vs" + threshold + "Du";
            if (this.interactions[interTimer.toLowerCase()] && this.interactions[interTimer.toLowerCase()].nStartTime == 0&&!visObj.reported) {
                {}
                this.handleTimerInteraction(interTimer, TimerAction.UPDATE, visObj.minDur * 1000);
                this.handleTimerInteraction(interTimer, TimerAction.START);
            } else {
                if (visObj.reported) {
                    {}
                    this.handleTimerInteraction(interTimer, TimerAction.START);
                }
            }
        } catch (e) {}
    }
    function stopEbVisibleByThresholdTimer(threshold) {
        try {
            var interTimer = "Vs" + threshold + "Du";
            this.handleTimerInteraction(interTimer, TimerAction.END);
        } catch (e) {}
    }
    function calculateAverage() {
        try {
            if (this.currentVisMode == VisibilityMode.ENHANCED) {
                if (this.isOperaBr) {
                    this.adStartTimeSec = this.adStartTimeSec ? this.adStartTimeSec : new Date().getTime() / 1000;
                }
                var currAdRunTimeSec = (new Date().getTime()) / 1000 - this.adStartTimeSec;
                var prevAdRunTimeSec = currAdRunTimeSec - this.prevAdDuration;
                if (currAdRunTimeSec >= 1) {
                    if (this.currVisiblePercentage > 0) {
                        this.totalAverageVisibilityPercentage=!this.fForceMode ? (this.totalAverageVisibilityPercentage * this.prevAdDuration + this.currVisiblePercentage * prevAdRunTimeSec) / currAdRunTimeSec : 100;
                    } else {
                        this.totalAverageVisibilityPercentage=!this.fForceMode ? (this.totalAverageVisibilityPercentage * this.prevAdDuration) / this.prevAdDuration : 100;
                    }
                    this.totalViewPortSizeAverage=!this.fForceMode ? (this.totalViewPortSizeAverage * this.prevAdDuration + this.currViewPortSize * prevAdRunTimeSec) / currAdRunTimeSec : 100;
                    this.prevAdDuration = currAdRunTimeSec;
                }
            }
        } catch (e) {}
    }
    function handleAverageInteractions() {
        try {
            if (!this.fAverageInteractionsHandled || this.isOperaBr) {
                if (this.currentVisMode == VisibilityMode.ENHANCED) {
                    {}
                    this.calculateAverage();
                    var flashObj=!this.fForceMode ? this.getFlashObj(this.assetID) : null;
                    var placementSize = 0;
                    if (flashObj) {
                        placementSize = flashObj.offsetHeight * flashObj.offsetWidth;
                    }
                    this.totalAverageScreenOccupation=!this.fForceMode ? (this.totalAverageVisibilityPercentage * placementSize) / this.totalViewPortSizeAverage : 100;
                    this.handleTimerInteraction(VisibilityInteractions.EB_VIS_AVG_SURFACE, TimerAction.RESET);
                    this.handleTimerInteraction(VisibilityInteractions.EB_VIS_AVG_SCREEN_SHARE, TimerAction.RESET);
                    this.handleTimerInteraction(VisibilityInteractions.EB_VIS_AVG_SURFACE, TimerAction.UPDATE, this.totalAverageVisibilityPercentage * 1000);
                    this.handleTimerInteraction(VisibilityInteractions.EB_VIS_AVG_SCREEN_SHARE, TimerAction.UPDATE, this.totalAverageScreenOccupation * 1000);
                    this.fAverageInteractionsHandled = true;
                }
            }
        } catch (e) {}
    }
    function getFlashObj(assetId) {
        try {
            this.assetID = assetId ? assetId : this.assetID;
            var flashObj = (!this.fIsStd) ? this.getElementById(this.assetID): document.getElementById(this.assetID);
            return flashObj;
        } catch (e) {}
    }
    function handleTimerInteraction(interactionName, timerAction, updateValue) {
        try {
            switch (timerAction) {
            case TimerAction.START:
                {
                    if (!this.fIsStd) {
                        this.ebstarttimerHandler(interactionName);
                    } else {
                        this.interactions[interactionName.toLowerCase()].handleTimer(TimerAction.START);
                    }
                    break;
                }
            case TimerAction.END:
                {
                    if (!this.fIsStd) {
                        this.ebendtimerHandler(interactionName);
                    } else {
                        this.interactions[interactionName.toLowerCase()].handleTimer(TimerAction.END);
                    }
                    break;
                }
            case TimerAction.UPDATE:
                {
                    if (!this.fIsStd) {
                        this.ebupdatetimerHandler(interactionName, updateValue);
                    } else {
                        this.interactions[interactionName.toLowerCase()].handleTimer(TimerAction.UPDATE, updateValue);
                    }
                    break;
                }
            case TimerAction.RESET:
                {
                    if (!this.fIsStd) {
                        this.ebresettimerHandler(interactionName);
                    } else {
                        this.interactions[interactionName.toLowerCase()].handleTimer(TimerAction.RESET, 0);
                    }
                    break;
                }
            default:
                break;
            }
        } catch (e) {}
    }
    function sendSystemInteraction(interactionName) {
        try {
            if (!this.fIsStd) {
                this.handleSystemInteraction(interactionName);
            } else {
                this.interactions[interactionName.toLowerCase()].handleCounterInt(this);
            }
        } catch (e) {}
    }
    function isHiddenValue() {
        var isHidden = false;
        if (typeof (document.hidden) !== "undefined") {
            isHidden = document.hidden;
        } else if (typeof (document.mozHidden) !== "undefined") {
            isHidden = document.mozHidden;
        } else if (typeof (document.msHidden) !== "undefined") {
            isHidden = document.msHidden;
        } else if (typeof (document.webkitHidden) !== "undefined") {
            isHidden = document.webkitHidden;
        }
        return isHidden;
    }
}
function ebCTemplateBaseProto() {
    this.ad = null;
    this.adData = null;
    this.interactions = null;
    this.strReportingImg = null;
    this.usedAdditionalAssets = new Object;
    this.flashAssetIndex = new Object;
    this.scriptWin = "self";
    this.adTI = gEbTI;
    this.fObjAreHidden = false;
    this.fCloseable = true;
    this.bwParams = new ebCBWDetectionParams();
    this.arrVideoLoaderDrivers = new Array();
    this.arrMouseTrackerComponent = new Array();
    this.fsManager = null;
    this.strRandFlashVar = "";
    this.arrReportedVideoInter = new Object();
    this.arrVideoProgressInter = null;
    this.pageLoadListeners = new Object();
    var strVideoTimerSuffix = "PlayDuration";
    var strVideoTimerPrefix = "ebMovie";
    var masterOrdinalNumber = null;
    this.updateInteractions = updateInteractions;
    this.handleFSCommand = handleFSCommand;
    this.myName = myName;
    this.findMyIframe = findMyIframe;
    this.showHidePageElements = showHidePageElements;
    this.showPageElements = showPageElements;
    this.hidePageElements = hidePageElements;
    this.hideObject = hideObject;
    this.showObject = showObject;
    this.closeAdResource = closeAdResource;
    this.replaceRes = replaceRes;
    this.replayRes = replayRes;
    this.hideRes = hideRes;
    this.showRes = showRes;
    this.playRes = playRes;
    this.stopRes = stopRes;
    this.showAS2Res = showAS2Res;
    this.reloadRes = reloadRes;
    this.flashResReady = flashResReady;
    this.setBWCookie = setBWCookie;
    this.buildResUrl = buildResUrl;
    this.buildLCName = buildLCName;
    this.getBW = getBW;
    this.createVideoLoaderDriver = createVideoLoaderDriver;
    this.getVideoLoaderDriver = getVideoLoaderDriver;
    this.getTrackedDiv = getTrackedDiv;
    this.buildFlashVars = buildFlashVars;
    this.getUsedAssetProperties = getUsedAssetProperties;
    this.getBestAdditionalAsset = getBestAdditionalAsset;
    this.handleUnload = handleUnload;
    this.handleKeyDown = handleKeyDown;
    this.handleResize = handleResize;
    this.handleScroll = handleScroll;
    this.handleBlur = handleBlur;
    this.handleFocus = handleFocus;
    this.handleVisibleHidden = handleVisibleHidden;
    this.handleMouseActive = handleMouseActive;
    this.handleResMove = handleResMove;
    this.handleMouseOutOfVideo = handleMouseOutOfVideo;
    this.handleMouseTracker = handleMouseTracker;
    this.loadScriptFile = loadScriptFile;
    this.setRandFlashVar = setRandFlashVar;
    this.setProxyParams = setProxyParams;
    this.getElementById = getElementById;
    this.callFlashFunc = callFlashFunc;
    this.callFlashFuncDynamicProxy = callFlashFuncDynamicProxy;
    this.collectURL = collectURL;
    this.collectTimers = collectTimers;
    this.collectCounters = collectCounters;
    this.getTimersReportData = getTimersReportData;
    this.stopTimers = stopTimers;
    this.handleCustomInteraction = handleCustomInteraction;
    this.handleVideoInteraction = handleVideoInteraction;
    this.handleSystemInteraction = handleSystemInteraction;
    this.notifyPageLoad = notifyPageLoad;
    this.getElapsedTime = getElapsedTime;
    this.ebinteractionHandler = ebinteractionHandler;
    this.ebclickthroughHandler = ebinteractionHandler;
    this.ebciuseractioncounterHandler = ebinteractionHandler;
    this.ebciautomaticeventcounterHandler = ebinteractionHandler;
    this.ebvideointeractionHandler = ebVideoInteractionHandler;
    this.ebsysteminteractionHandler = ebSystemInteractionHandler;
    this.ebtstartvideoHandler = ebVideoStrartedHandler;
    this.ebtupdatevideodurationHandler = ebVideoUpdateTimerHandler;
    this.ebtstopvideoHandler = ebVideoStoppedHandler;
    this.ebstarttimerHandler = ebstarttimerHandler;
    this.ebendtimerHandler = ebendtimerHandler;
    this.ebresettimerHandler = ebresettimerHandler;
    this.ebcistoptimerHandler = ebendtimerHandler;
    this.ebcistarttimerHandler = ebstarttimerHandler;
    this.ebupdatetimerHandler = ebupdatetimerHandler;
    this.ebstartvideotimerHandler = ebStartVideoTimerHandler;
    this.ebendvideotimerHandler = ebEndVideoTimerHandler;
    this.ebpageloadHandler = ebPageLoadHandler;
    this.ebgetjsvarHandler = ebGetJSVarHandler;
    this.ebsetjsvarHandler = ebSetJSVarHandler;
    this.ebgetalljsvarsHandler = ebGetAllJSVarsHandler;
    this.ebcommandHandler = ebCommandHandler;
    this.ebquitHandler = ebQuitHandler;
    this.ebcloseHandler = ebQuitHandler;
    this.ebmsgHandler = ebMsgHandler;
    this.ebautocloseHandler = ebAutoCloseHandler;
    this.ebsetstateHandler = ebsetstateHandler;
    this.ebresetstateHandler = ebsetstateHandler;
    this.ebmousetrackerHandler = ebMouseTrackerHandler;
    this.ebmousemoveHandler = ebMouseMoveHandler;
    this.ebtestdcHandler = ebTestDCHandler;
    this.ebversiontrackingimpressionHandler = ebVersionTrackingImpressionHandler;
    this.ebcloseadHandler = ebCloseAdHandler;
    this.ebreplayadHandler = ebReplayAdHandler;
    this.ebreplayexpHandler = ebReplayExpHandler;
    this.ebinitvideoloaderHandler = ebInitVideoLoaderHandler;
    this.ebvideoloadHandler = ebVideoLoadHandler;
    this.ebvideoloadandplayHandler = ebVideoLoadHandler;
    this.ebwmvtrackmouseHandler = ebVideoTrackMouseHandler;
    this.ebvideotrackmouseHandler = ebVideoTrackMouseHandler;
    this.ebwmvplayHandler = ebWMVPlayHandler;
    this.ebwmvpauseHandler = ebWMVPauseHandler;
    this.ebwmvstopHandler = ebWMVStopHandler;
    this.ebwmvsetmuteHandler = ebWMVSetMuteHandler;
    this.ebwmvsetvolumeHandler = ebWMVSetVolumeHandler;
    this.ebwmvseekHandler = ebWMVSeekHandler;
    this.ebwmvsetbufferHandler = ebWMVSetBufferHandler;
    this.ebwmvresizeHandler = ebWMVResizeHandler;
    this.ebfullscreenopenHandler = ebFullScreenOpenHandler;
    this.ebfullscreencloseHandler = ebFullScreenCloseHandler;
    this.ebfullscreenautocloseHandler = ebFullScreenAutoCloseHandler;
    this.ebvideofsopenHandler = ebVideoFSOpenHandler;
    this.ebvideofscloseHandler = ebVideoFSCloseHandler;
    this.ebvideofsautocloseHandler = ebVideoFSAutoCloseHandler;
    this.dwellTimeManager = null;
    this.handleMouseOverAd = handleMouseOverAd;
    this.handleMouseOutOfAd = handleMouseOutOfAd;
    this.addMouseEventsHandler = addMouseEventsHandler;
    this.checkifHasWMV = checkifHasWMV;
    this.refreshElement = refreshElement;
    this.getFixOperationAborted = getFixOperationAborted;
    var TI = (typeof (gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI: gEbTI;
    this.temp = ebCVisibilityManager;
    this.temp(TI, false);
    delete this.temp;
    this._timedReport = ((typeof (ebIntReportTimeout) != "undefined") && (ebIntReportTimeout != null) && (ebIntReportTimeout >= 0)) ? ebIntReportTimeout : 10000;
    var $this = this;
    window.setTimeout(function () {
        try {
            $this.handleSystemInteraction("_emptyPipe");
        } catch (ee) {}
    }, $this._timedReport);
    function checkifHasWMV(assetArray) {
        for (var name in assetArray) {
            if (typeof(assetArray[name][gEBvideoTypes.WMV]) != "undefined")
                if (assetArray[name][gEBvideoTypes.WMV].length != 0)
                    return true;
        }
        return false;
    }
    function refreshElement(resObj) {
        if (resObj == null)
            return resObj;
        var tempObj = this.getElementById(resObj.id);
        if (tempObj != null) {
            tempObj.style.zIndex--;
            tempObj.style.zIndex++;
            return tempObj;
        }
        return resObj;
    }
    function getFixOperationAborted() {
        return (this.adData.fFixOperAborted);
    }
    function addMouseEventsHandler(eventsElem) {
        gEbTI.addEventHandler("mouseover", "ebOnMouseOverAd", eventsElem);
        gEbTI.addEventHandler("mouseout", "ebOnMouseOutOfAd", eventsElem);
    }
    function handleMouseOverAd(e) {
        var toElem = gEbBC.isIE() ? e.toElement: e.currentTarget;
        try {
            if (this.checkElementId(toElem.id)) {
                this.dwellTimeManager.handleMouseOverAd();
            }
        } catch (ee) {}
    }
    function handleMouseOutOfAd(e) {
        var fromElem = gEbBC.isIE() ? e.srcElement: e.currentTarget;
        try {
            if (this.checkElementId(fromElem.id))
                this.dwellTimeManager.handleMouseOutOfAd();
        } catch (ee) {}
    }
    function updateInteractions() {
        var winAdOpener = ((this.adData.strTemplateName == "WindowAd") && (typeof(gEbAdWindow) == "undefined"));
        if (winAdOpener) {
            return;
        }
        updateClicks(this);
        updateAdInteractions(this);
        setAutoInteractions(this);
        setVideoInteractions(this);
        if (typeof(this.updateTemplateInteractions) == "function")
            this.updateTemplateInteractions();
        var interactions = this.interactions;
        for (var attr in interactions) {
            try {
                if (typeof(interactions[attr]) == "object") {
                    interactions[attr].objName = this.objName + ".interactions['" + attr + "']";
                }
            } catch (e) {}
        }
    }
    function ebTestDCHandler(strArgs) {
        try {
            if (ebIsPreview()) {
                if (typeof(window.parent.setDataCaptureFormValues) == "function") {
                    if (typeof(strArgs) != "undefined") {
                        var args = strArgs.split("||");
                        window.parent.setDataCaptureFormValues(args[0], args[1]);
                    }
                }
            }
        } catch (e) {}
    }
    function ebVersionTrackingImpressionHandler(args) {
        try {
            if (!ebIsPreview()) {
                var urls = [];
                var arr = args.split("");
                for (var i = 0; i < arr.length; i++) {
                    var multi = arr[i].split("|");
                    for (var j = 0; j < multi.length; j++) {
                        urls.push(multi[j]);
                    }
                }
                for (var i = 0; i < urls.length; i++) {
                    var url = urls[i];
                    if (url) {
                        url = ebReplaceURLTokens(url, this.adData);
                        this.strReportingImg = new Image();
                        this.strReportingImg.src = url;
                    }
                }
            }
        } catch (e) {}
    }
    function getElapsedTime() {
        var dtNow = new Date().getTime();
        var ellapsedTime = this.interactions.ebadduration.nStartTime > 0 ? dtNow - this.interactions.ebadduration.nStartTime: 0;
        return ellapsedTime;
    }
    function handleFSCommand(strCommand, strArgs, strObjID) {
        try {
            if (!strArgs || strArgs == 'null')
                strArgs = '';
            try {
                if (ebIntMonitorExist()) {
                    if (isStdAdFormat(this) && strCommand == "ebClickthrough") {
                        window.parent.ebHandleFsCommandsPrev("ebClickthrough", strArgs, strObjID);
                    } else if (!filteredInteraction(strCommand)) {
                        window.parent.ebHandleFsCommandsPrev(strCommand, strArgs, strObjID, this.adData.nAdID, this.getElapsedTime());
                    }
                }
            } catch (e) {}
            if (typeof(strObjID) == "undefined")
                strObjID = "";
            if (strArgs == "")
                strArgs = "''";
            var ch = strArgs.charAt(0);
            if ((ch != '"') && (ch != '\''))
                strArgs = "'" + strArgs + "'";
            strCommand = strCommand.replace(/FSCommand:/ig, "");
            var strLowerCmd = strCommand.toLowerCase();
            if (!isFSCmdSupported(this, strLowerCmd)) {
                return;
            }
            var strFunc = "this." + strLowerCmd + "Handler";
            var func = eval(strFunc);
            if (typeof (func) == "function") {
                strFunc = this.objName + "." + strLowerCmd + "Handler(" + strArgs + ",'" + strObjID + "')";
                if (strLowerCmd == "ebgetjsvar" || strLowerCmd == "ebgetalljsvars") {
                    strArgs = eval(strArgs);
                    return this[strLowerCmd + "Handler"](strArgs);
                }
                if (gEbBC.isIE() || gEbBC.isSafari()) {
                    if (gEbBC.isSafari() && ((strLowerCmd == "ebclickthrough") || (strLowerCmd == "ebciuseractioncounter") || (strLowerCmd == "ebciautomaticeventcounter"))) {
                        strArgs = eval(strArgs);
                        this[strLowerCmd + "Handler"](strArgs, strObjID);
                    } else {
                        eval(strFunc);
                    }
                } else {
                    window.setTimeout(function () {
                        try {
                            eval(strFunc);
                        } catch (e) {
                            gEbDbg.error("Exception in ebCTemplateBaseProto.handleFSCommand: " + strFunc + " " + e.description);
                        }
                    }, 100);
                }
            } else {}
        } catch (e) {}
    }
    function filteredInteraction(stdCommand) {
        var isFiltered = false;
        switch (stdCommand.toLowerCase()) {
        case "ebseexpandstarted":
        case "ebseretractstarted":
            isFiltered = true;
            break;
        }
        return isFiltered;
    }
    function myName(name) {
        return (name + this.adData.nIndex + "_" + this.adData.strRand);
    }
    function findMyIframe() {
        try {
            var iframeElem = gEbDisplayPage.getIframeData();
            var name = this.myName("ebScriptWin");
            var scriptWinPointer = self;
            eval("gEbDisplayPage.TI.getWin()." + name + "=scriptWinPointer");
            this.scriptWin = name;
            if ((typeof(gfEbFifEyeDiv) != "undefined") && gfEbFifEyeDiv) {
                this.adTI = new ebCTagInsertor(gEbDisplayPage.TI.getWin());
                var eyeDivId = this.myName("eyeDiv");
                var obj = new ebCTIObj(eyeDivId);
                obj.refElement = iframeElem;
                this.adTI.addEyeDiv(obj);
            } else {
                this.adTI = gEbDisplayPage.TI;
            }
        } catch (e) {}
    }
    function showHidePageElements(fShow, win, adElement) {
        if (typeof(win) == "undefined")
            win = gEbTI.getWin();
        if (fShow)
            this.showPageElements(win, adElement);
        else 
            this.hidePageElements(win, adElement);
    }
    function showPageElements(win, adElement) {
        if (this.ad.fHideDropDowns)
            this.showObject("SELECT", win, adElement);
        if (this.ad.fHideIframes)
            this.showObject("IFRAME", win, adElement);
        if (this.ad.fHideFlash) {
            if (gEbBC.isIE())
                this.showObject("OBJECT", win, adElement);
            else 
                this.showObject("EMBED", win, adElement);
        }
        if (this.ad.fHhideApplet)
            this.showObject("APPLET", win, adElement);
    }
    function hidePageElements(win, adElement) {
        if (this.ad.fHideDropDowns)
            this.hideObject("SELECT", win, adElement);
        if (this.ad.fHideIframes)
            this.hideObject("IFRAME", win, adElement);
        if (this.ad.fHideFlash) {
            if (gEbBC.isIE()) {
                this.hideObject("OBJECT", win, adElement);
                this.hideObject("EMBED", win, adElement);
            } else 
                this.hideObject("EMBED", win, adElement);
        }
        if (this.ad.fHhideApplet)
            this.hideObject("APPLET", win, adElement);
    }
    function hideObject(strType, win, adElement) {
        try {
            if (typeof(win) == "undefined")
                win = gEbTI.getWin();
            var doc = win.document;
            initHiddenElemBuffers(win);
            if (!shouldHidePageElements(strType, this))
                return;
            var buf = setHiddenElemBuffer(strType, win);
            var itemList = doc.getElementsByTagName(strType);
            var bufLen = buf.length;
            searchItemsToHide(doc, strType, itemList, buf, adElement);
            if (bufLen == buf.length)
                return;
            for (var i = buf.length - 1; i >= bufLen; i--) {
                hideElement(this, buf[i], strType, doc);
            }
        } catch (e) {}
    }
    function initHiddenElemBuffers(win) {
        try {
            if (typeof(win.ebHiddenDropDowns) == "undefined")
                eval("win.ebHiddenDropDowns = new Array()");
            if (typeof(win.ebHiddenIframes) == "undefined")
                eval("win.ebHiddenIframes = new Array()");
            if (typeof(win.ebHiddenFlashElements) == "undefined")
                eval("win.ebHiddenFlashElements = new Array()");
            if (typeof(win.ebHiddenApplets) == "undefined")
                eval("win.ebHiddenApplets = new Array()");
        } catch (e) {}
    }
    function shouldHidePageElements(strType, objRef) {
        if (strType == "SELECT") {
            if (!gEbBC.isIE())
                return false;
        } else if (strType == "IFRAME") {
            if ((gEbBC.getVersion() & objRef.ad.nHideIframeIn) == 0)
                return false;
        } else if (strType == "APPLET") {
            if (gEbBC.isSafari()) {
                return false;
            }
        }
        return true;
    }
    function setHiddenElemBuffer(strType, win) {
        try {
            var buf;
            switch (strType) {
            case "SELECT":
                buf = win.ebHiddenDropDowns;
                break;
            case "IFRAME":
                buf = win.ebHiddenIframes;
                break;
            case "EMBED":
            case "OBJECT":
                buf = win.ebHiddenFlashElements;
                break;
            case "APPLET":
                buf = win.ebHiddenApplets;
                break;
            }
            return buf;
        } catch (e) {}
    }
    function searchItemsToHide(doc, strType, itemList, buf, adElement) {
        try {
            for (var i = 0; i < itemList.length; i++) {
                if (shouldHideElem(itemList[i], adElement, strType)) {
                    var item = itemList[i];
                    if (gEbBC.isSafari() && (item.tagName.toLowerCase() == "embed") && item.parentNode && (item.parentNode.tagName.toLowerCase() == "object")) {
                        item = item.parentNode;
                    }
                    var fInBuffer = ((typeof(item.nBufferIndex) != "undefined") && (item.nBufferIndex!=-1));
                    var attObj = calcPageObjAttr(item, buf, doc);
                    if (isObjOverLap(adElement, attObj)) {
                        if (fInBuffer) {
                            buf[item.nBufferIndex].nShowHideCounter++;
                        } else {
                            var newElement = new Object();
                            buf[buf.length] = newElement;
                            item.nBufferIndex = buf.length - 1;
                            newElement.obj = item;
                            newElement.nShowHideCounter = 1;
                            newElement.nTop = attObj.nTop;
                            newElement.nLeft = attObj.nLeft;
                            newElement.nWidth = attObj.nWidth;
                            newElement.nHeight = attObj.nHeight;
                        }
                    }
                }
            }
        } catch (e) {}
    }
    function shouldHideElem(item, adElement, strType) {
        try {
            var vis = item.style.visibility;
            var fInBuffer = ((typeof(item.nBufferIndex) != "undefined") && (item.nBufferIndex!=-1));
            if ((vis != "hidden") || fInBuffer) {
                if ((strType == "EMBED") || (strType == "OBJECT")) {
                    if (!shouldHideFlash(strType, item))
                        return false;
                }
                return true;
            }
            return false;
        } catch (e) {}
    }
    function calcPageObjAttr(item, buf, doc) {
        try {
            var fInBuffer = ((typeof(item.nBufferIndex) != "undefined") && (item.nBufferIndex!=-1));
            var attObj = new Object();
            if (!fInBuffer) {
                attObj.nTop = ebGetRealTop(item);
                attObj.nLeft = ebGetRealLeft(item);
                attObj.nWidth = item.offsetWidth;
                attObj.nHeight = item.offsetHeight;
            } else {
                attObj.nLeft = buf[item.nBufferIndex].nLeft;
                attObj.nTop = buf[item.nBufferIndex].nTop;
                attObj.nWidth = buf[item.nBufferIndex].nWidth;
                attObj.nHeight = buf[item.nBufferIndex].nHeight;
            }
            return attObj;
        } catch (e) {}
    }
    function hideElement(objRef, bufferElem, strType, doc) {
        try {
            var fUseMozHide = ((typeof(gfEbUseMozHideIframe) == "undefined") || gfEbUseMozHideIframe);
            if ((strType == "IFRAME"&&!gEbBC.isIE()) && fUseMozHide) {
                hideIframeForMoz(objRef, bufferElem, doc);
            } else {
                bufferElem.visibility = bufferElem.obj.style.visibility;
                bufferElem.obj.style.visibility = "hidden";
            }
        } catch (e) {}
    }
    function hideIframeForMoz(objRef, bufElem, doc) {
        try {
            var iframeElem = bufElem.obj;
            var index = iframeElem.nDivIndex;
            var iframeDiv = null;
            if (!index) {
                index=++gnEbIframeDivIndex;
                iframeElem.nDivIndex = index;
            } else {
                iframeDiv = doc.getElementById("ebDivForIframe_" + index);
            }
            if (!iframeDiv) {
                TIobj = new ebCTIObj("ebDivForIframe_" + index);
                TIobj.style.width = "0px";
                TIobj.style.height = "0px";
                TIobj.style.padding = "0px";
                TIobj.style.margin = "0px";
                TIobj.style.display = "inline";
                TIobj.style.visibility = "hidden";
                TIobj.refElement = iframeElem;
                iframeDiv = objRef.adTI.addDiv("before", TIobj);
                iframeDiv.padding = 0;
                iframeDiv.margin = 0;
                var src = "";
                var id = "ebDivImage";
                var strTag = '<img id="' + id + '" src="' + src + '" width=0 height=0 padding=0 margins=0/>';
                iframeDiv.innerHTML = strTag;
            }
            bufElem.visibility = iframeElem.style.visibility;
            bufElem.width = iframeElem.width;
            bufElem.height = iframeElem.height;
            bufElem.display = iframeElem.style.display;
            iframeElem.width = 0;
            iframeElem.height = 0;
            iframeDiv.childNodes[0].width = bufElem.width;
            iframeDiv.childNodes[0].height = bufElem.height;
            iframeDiv.style.width = bufElem.width + "px";
            iframeDiv.style.height = bufElem.height + "px";
            iframeDiv.visibility = bufElem.visibility;
        } catch (e) {}
    }
    function shouldHideFlash(strType, obj) {
        try {
            if (strType == "OBJECT") {
                if (obj.classid.toLowerCase() != "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000") {
                    return false;
                }
                if (obj.Wmode.toLowerCase() != "window") {
                    return false;
                }
                if ((obj.Movie.indexOf(ebResourcePath) == 0) || (obj.Movie.indexOf("about:blank") == 0) || (obj.Movie.indexOf(ebBigS) == 0)) {
                    return false;
                }
            }
            if (strType == "EMBED") {
                var objType = "";
                if (gEbBC.isIE()) {
                    objType = obj.attributes.getNamedItem("type").value;
                    objType = objType.toLowerCase();
                } else 
                    objType = obj.type.toLowerCase();
                if (objType != "application/x-shockwave-flash") {
                    return false;
                }
                if ((obj.getAttribute("wmode") != null) && (obj.getAttribute("wmode").toLowerCase() != "window" ) && (obj.getAttribute("wmode") != "")) {
                    return false;
                }
                if ((obj.src.indexOf(ebResourcePath) == 0) || (obj.src.indexOf("about:blank") == 0) || (obj.src.indexOf(ebBigS) == 0)) {
                    return false;
                }
            }
            return true;
        } catch (e) {}
    }
    function showObject(strType, win, adElement) {
        try {
            if (typeof(win) == "undefined")
                win = gEbTI.getWin();
            var doc = win.document;
            if (!isHiddenElemBufferInit(win)) {
                return;
            }
            var buf = setHiddenElemBuffer(strType, win);
            var firstDel =- 1;
            for (var i = 0; i < buf.length; i++) {
                if (shouldShowObject(buf, i, adElement, doc)) {
                    showElement(buf, i, strType, doc);
                    if (firstDel==-1)
                        firstDel = i;
                    buf[i].fDel = true;
                } else {
                    buf[i].fDel = false;
                    if (firstDel!=-1) {
                        var tmp = buf[i];
                        buf[i] = buf[firstDel];
                        buf[firstDel] = tmp;
                        buf[firstDel].obj.nBufferIndex = firstDel;
                        if ((i > firstDel + 1) && (buf[firstDel + 1].fDel))
                            firstDel = firstDel + 1;
                        else 
                            firstDel = i;
                    }
                }
            }
            if (firstDel==-1)
                return;
            buf.splice(firstDel, (buf.length - firstDel));
        } catch (e) {}
    }
    function shouldShowObject(buf, bufIndex, adElement, doc) {
        try {
            var bufferElem = buf[bufIndex];
            var attObj = calcPageObjAttr(bufferElem.obj, buf, doc);
            if (isObjOverLap(adElement, attObj)) {
                bufferElem.nShowHideCounter--;
                if (bufferElem.nShowHideCounter == 0) {
                    return true;
                }
            }
            return false;
        } catch (e) {}
    }
    function showElement(buf, index, strType, doc) {
        try {
            var fUseMozHide = ((typeof(gfEbUseMozHideIframe) == "undefined") || gfEbUseMozHideIframe);
            if ((strType == "IFRAME"&&!gEbBC.isIE()) && fUseMozHide) {
                showIframeForMoz(index, buf, doc);
            } else {
                if (buf[index].nShowHideCounter != 0)
                    return;
                buf[index].obj.nBufferIndex =- 1;
                buf[index].obj.style.visibility = buf[index].visibility;
            }
        } catch (e) {}
    }
    function isHiddenElemBufferInit(win) {
        if ((typeof(win.ebHiddenDropDowns) == "undefined") || (typeof(win.ebHiddenIframes) == "undefined") || (typeof(win.ebHiddenFlashElements) == "undefined") || (typeof(win.ebHiddenApplets) == "undefined")) {
            return false;
        }
        return true;
    }
    function isObjOverLap(adElement, attObj) {
        try {
            if ((adElement == null) || (typeof(adElement) == "undefined")) {
                return true;
            }
            var y0 = adElement.nTop;
            var y1 = adElement.nTop + adElement.nHeight;
            var x0 = adElement.nLeft;
            var x1 = adElement.nLeft + adElement.nWidth;
            var y2 = attObj.nTop;
            var y3 = attObj.nTop + attObj.nHeight;
            var x2 = attObj.nLeft;
            var x3 = attObj.nLeft + attObj.nWidth;
            var fXinRange = (((x2 <= x0) && (x0 <= x3)) || ((x0 <= x2) && (x2 <= x1)));
            var fYinRange = (((y2 <= y0) && (y0 <= y3)) || ((y0 <= y2) && (y2 <= y1)));
            return (fXinRange && fYinRange);
        } catch (e) {}
    }
    function showIframeForMoz(index, buf, doc) {
        try {
            var iframeIndex = buf[index].obj.nDivIndex;
            var iframeDiv = doc.getElementById("ebDivForIframe_" + iframeIndex);
            if (iframeDiv) {
                if (buf[index].nShowHideCounter != 0)
                    return;
                buf[index].obj.nBufferIndex =- 1;
                buf[index].obj.style.visibility = buf[index].visibility;
                buf[index].obj.width = buf[index].width;
                buf[index].obj.height = buf[index].height;
                iframeDiv.style.width = "0px";
                iframeDiv.style.height = "0px";
                iframeDiv.childNodes[0].width = 0;
                iframeDiv.childNodes[0].height = 0;
            }
        } catch (e) {}
    }
    function ebCommandHandler(strArgs, strObjID) {
        try {
            eval(strArgs);
        } catch (e) {}
    }
    function ebMsgHandler(strArgs, strObjID) {}
    function ebQuitHandler(strArgs, strObjID) {
        if (typeof (this.doOnEbQuit) == "function")
            this.doOnEbQuit();
        else if (isStdAdFormat(this)) {
            if (typeof (this.close) == "function")
                this.close();
        } else if (this.adData.strTemplateName != "Banner")
            this.ebsysteminteractionHandler("ebClose");
        if (this.fsManager)
            this.fsManager.doOnEbQuit();
    }
    function ebAutoCloseHandler() {
        if (typeof (this.autoClose) == "function")
            this.autoClose();
        else {}
    }
    function ebCloseAdHandler(type) {
        try {
            type = type.toLowerCase();
            if (type == "auto")
                this.ebautocloseHandler();
            else if (type == "user")
                this.ebquitHandler();
            else {}
        } catch (e) {}
    }
    function ebReplayAdHandler(type) {
        try {
            type = type.toLowerCase();
            if ((type == "auto") && (typeof (this.ebautoreplayHandler) == "function"))
                this.ebautoreplayHandler();
            else if ((type == "user") && (typeof (this.ebreplayHandler) == "function"))
                this.ebreplayHandler();
            else {}
        } catch (e) {}
    }
    function ebReplayExpHandler() {
        try {
            if (typeof(this.replayExp) == "function")
                this.replayExp();
            else if (typeof(this.ebreplayHandler) == "function")
                this.ebreplayHandler();
            else {}
        } catch (e) {}
    }
    function handleCustomInteraction(strName, strObjID, sVersionId, strJURL, sClickTracking) {
        try {
            if (strName == "")
                strName = "_eyeblaster";
            if (this.shouldHandleInteraction) {
                if (!this.shouldHandleInteraction(strObjID)) {
                    return;
                }
            }
            var interactions = this.interactions;
            var inter = getInteractionObj(this, strName);
            if (typeof(inter) == 'undefined') {
                return;
            }
            if (inter.nType == 1) {
                return;
            }
            if (inter.fIsBusy) {
                return;
            }
            if (inter.fShouldReport || (sVersionId && strJURL)) {
                if (typeof(this.adData.customEventHandler) != "undefined") {
                    this.adData.customEventHandler.onHandleInteraction(this.objName, strName, strObjID);
                }
                var fIsClick = (inter.fCountAsClick&&!interactions.fClicked);
                if (fIsClick)
                    interactions.fClicked = true;
                inter.strFlashObjID = strObjID;
                var intData = new ebCInteractionData(0, fIsClick, sVersionId, strJURL, sClickTracking);
                handleInteraction(this, inter, intData);
                var fCustomInt = ((strName != "_eyeblaster") && (strName != "ebDefaultClick"));
                if (fIsClick && fCustomInt) {
                    var defaultInt = getInteractionObj(this, "_eyeblaster");
                    defaultInt.RS.report(this.adData, this.interactions.interactionNum, strName, true);
                }
            } else {}
        } catch (e) {}
    }
    function handleVideoInteraction(strName, nMovieNum, strObjID) {
        if (strName == "ebVideoReplay")
            this.dwellTimeManager.handleVideoStop();
        setInteractionAssetID(this, strName, nMovieNum);
        if (updateVideoReportedInter(this, strName)) {
            handleAutoInteraction(this, strName, strObjID);
        } else {}
    }
    function handleSystemInteraction(strName, strObjID) {
        handleAutoInteraction(this, strName, strObjID);
    }
    function ebinteractionHandler(strName, strObjID) {
        var sJURL = "";
        var sClickedVersion = "";
        var sClickTracking = "";
        var strNameSV2 = "";
        if (this.adData.sAdVersions != "" || this.adData.sDefaultAdVersion != "") {
            if ((strName.indexOf("ebDefaultClick_SV2:") == 0) || strName.indexOf("_eyeblaster_SV2:") == 0) {
                strNameSV2 = strName.substring(strName.indexOf("_SV2") + 1, strName.length);
                strName = strName.substring(0, strName.indexOf("_SV2"));
            } else {
                strNameSV2 = strName;
            }
            if (strNameSV2.indexOf("SV2:") == 0 && strNameSV2.indexOf(String.fromCharCode(127))!=-1) {
                var params = strNameSV2.substring(4, strNameSV2.length);
                params = params.split(String.fromCharCode(127));
                sJURL = params[0];
                sClickedVersion = params[1];
                if (typeof (this.adData.fProductClicked[sClickedVersion]) == "undefined") {
                    this.adData.fProductClicked[String(sClickedVersion)] = true;
                    sClickTracking = (params.length == 3) ? params[2] : "";
                } else {
                    this.adData.fProductClicked[String(sClickedVersion)] = false;
                }
                strName = (strName == strNameSV2) ? "" : strName;
            }
        }
        this.handleCustomInteraction(strName, strObjID, sClickedVersion, sJURL, sClickTracking);
    }
    function ebVideoInteractionHandler(strName, nMovieNum, strObjID) {
        this.handleVideoInteraction(strName, nMovieNum, strObjID);
    }
    function ebSystemInteractionHandler(strName, strObjID) {
        this.handleSystemInteraction(strName, strObjID);
    }
    function ebstarttimerHandler(strName, strObjID) {
        try {
            if (ebMaxTimePassed) {
                return;
            }
            var strLowerCaseName = strName.toLowerCase();
            if ((strLowerCaseName == "ebvideoplayduration") || (strLowerCaseName == "ebfsvideoplayduration")) {
                var nMovieNum = 0;
                startVideoTimers(this, strName, strObjID, nMovieNum);
            } else 
                timerHandler(this, strName, 1);
        } catch (e) {}
    }
    function ebendtimerHandler(strName, strObjID) {
        if (ebMaxTimePassed) {
            return;
        }
        timerHandler(this, strName, 2);
    }
    function ebresettimerHandler(strName, strObjID) {
        if (ebMaxTimePassed) {
            {}
            return;
        }
        timerHandler(this, strName, 4);
    }
    function ebupdatetimerHandler(strName, nValue) {
        if (ebMaxTimePassed) {
            return;
        }
        timerHandler(this, strName, 3, nValue);
    }
    function ebVideoStrartedHandler(strName, nMovieNum, strObjID) {
        try {
            if (ebMaxTimePassed) {
                {}
                return;
            }
            startVideoTimers(this, strName, strObjID, nMovieNum, true);
        } catch (e) {}
    }
    function ebVideoUpdateTimerHandler(strName, strValue, nMovieNum, strObjID) {
        var nValue = parseInt(strValue);
        var strMovieName = "ebMovie" + nMovieNum;
        var assets = this.ad.additionalAssetsArray;
        if (!assets[strMovieName])
            nMovieNum = "0";
        this.flashAssetIndex[strObjID] = nMovieNum;
        if (masterOrdinalNumber == null)
            masterOrdinalNumber = nMovieNum;
        if (masterOrdinalNumber == nMovieNum)
            timerHandler(this, strName, 3, nValue);
        var strFS = "";
        if (strName.indexOf("ebFS")!=-1)
            strFS = "FS";
        strName = strVideoTimerPrefix + nMovieNum + strFS + strVideoTimerSuffix;
        setInteractionAssetID(this, strName, nMovieNum);
        timerHandler(this, strName, 3, nValue);
    }
    function ebVideoStoppedHandler(strName, nMovieNum, strObjID) {
        this.ebendvideotimerHandler(strName, nMovieNum, strObjID, true);
    }
    function ebStartVideoTimerHandler(strName, nMovieNum, strObjID) {
        try {
            if (ebMaxTimePassed) {
                return;
            }
            startVideoTimers(this, strName, strObjID, nMovieNum);
        } catch (e) {}
    }
    function startVideoTimers(objRef, strName, strObjID, nMovieNum, fNotMeasure) {
        try {
            var strMovieName = "ebMovie" + nMovieNum;
            var assets = objRef.ad.additionalAssetsArray;
            if (!assets[strMovieName])
                nMovieNum = "0";
            objRef.flashAssetIndex[strObjID] = nMovieNum;
            if (fNotMeasure) {
                if (masterOrdinalNumber == null) {
                    masterOrdinalNumber = nMovieNum;
                }
            }
            if (typeof (fNotMeasure) == "undefined")
                timerHandler(objRef, strName, 1);
            var strFS = "";
            if (strName.indexOf("ebFS")!=-1)
                strFS = "FS";
            strName = strVideoTimerPrefix + nMovieNum + strFS + strVideoTimerSuffix;
            setInteractionAssetID(objRef, strName, nMovieNum);
            if (typeof (fNotMeasure) == "undefined")
                timerHandler(objRef, strName, 1);
            objRef.dwellTimeManager.handleVideoPlay(nMovieNum);
        } catch (e) {}
    }
    function setAssetVideoTimers(objRef, strName) {
        if (strName.indexOf(strVideoTimerPrefix)!=-1) {
            var strTimerName = strName + strVideoTimerSuffix;
            var strFSTimerName = strName + "FS" + strVideoTimerSuffix;
            setVideoTimer(objRef, strTimerName, "ebVideoAssetDuration");
            setVideoTimer(objRef, strFSTimerName, "ebFSVideoAssetDuration");
        }
    }
    function ebEndVideoTimerHandler(strName, nMovieNum, strObjID, fNotMeasure) {
        try {
            if (ebMaxTimePassed) {
                return;
            }
            var strMovieName = "ebMovie" + nMovieNum;
            var assets = this.ad.additionalAssetsArray;
            if (!assets[strMovieName])
                nMovieNum = "0";
            this.dwellTimeManager.handleVideoStop();
            if (fNotMeasure) {
                masterOrdinalNumber = null;
            }
            if (typeof (fNotMeasure) == "undefined")
                timerHandler(this, strName, 2);
            var strFS = "";
            if (strName.indexOf("ebFS")!=-1)
                strFS = "FS";
            strName = strVideoTimerPrefix + nMovieNum + strFS + strVideoTimerSuffix;
            if (typeof (fNotMeasure) == "undefined")
                timerHandler(this, strName, 2);
        } catch (e) {}
    }
    function ebPageLoadHandler(strCallback, strObjID) {
        this.pageLoadListeners[strObjID] = strCallback;
        if (gEbDocLoaded) {
            var func = ebFormat("{0}.notifyPageLoad()", this.objName);
            setTimeout(func, 50);
        }
    }
    function ebGetJSVarHandler(varName) {
        if (varName) {
            if (this.ad && this.ad[varName] != 'undefined' && this.ad[varName] != null) {
                {}
                return this.ad[varName];
            } else {}
        }
    }
    function ebGetAllJSVarsHandler() {
        if (this.ad && this.ad.customJSVars) {
            var customValues = {};
            for (var prop in this.ad.customJSVars) {
                customValues[prop] = this.ad[prop];
            }
            return customValues;
        }
    }
    function ebSetJSVarHandler(strArgs) {
        if (strArgs) {
            strArgs = strArgs.split(String.fromCharCode(127));
            if (strArgs.length >= 2) {
                var varName = strArgs[0];
                var varValue = strArgs[1];
                var isString = strArgs[2] ? strArgs[2]: null;
                if (this.ad) {
                    {}
                    this.ad[varName] = isString ? varValue : eval(varValue);
                }
            } else {}
        }
    }
    function notifyPageLoad() {
        var reported = false;
        for (var strObjID in this.pageLoadListeners) {
            if (strObjID.indexOf("eb") == 0) {
                var strCallback = this.pageLoadListeners[strObjID];
                this.callFlashFuncDynamicProxy(strObjID, strCallback, "ebPageLoad");
                reported = true;
            }
        }
        if (reported) {
            try {
                if (ebIntMonitorExist()) {
                    window.parent.ebHandleFsCommandsPrev("PageLoaded", "", "", this.adData.nAdID, this.getElapsedTime());
                }
            } catch (e) {}
        }
    }
    function ebsetstateHandler(strValue) {
        try {
            var fOptOut = false;
            if (typeof(gEbFOptOut) != "undefined")
                fOptOut = gEbFOptOut;
            else if (gEbClientInfo.cookieInfo.fOptOut)
                fOptOut = gEbClientInfo.cookieInfo.fOptOut;
            if (fOptOut || this.adData.fOptOut) {
                return;
            }
            if (!strValue)
                strValue = "";
            var strReq = 'http://' + ebBS + '/BurstingPipe/adServer.bs?cn=SetState';
            strReq += '&CampaignID=' + this.adData.nCampaignID;
            strReq += '&StateValue=' + strValue;
            var ebRand = "&ord=" + Math.random();
            var src = strReq + ebRand;
            this.strReportingImg = new Image();
            this.strReportingImg.src = src;
        } catch (e) {}
    }
    function ebMouseTrackerHandler(proxyPath, objName) {
        mouseMoveOnPage(proxyPath, objName, this, true);
    }
    function ebMouseMoveHandler(proxyPath, objName) {
        mouseMoveOnPage(proxyPath, objName, this);
    }
    function mouseMoveOnPage(proxyPath, objName, objRef, oldVer) {
        try {
            oldVer = (typeof(oldVer) == "undefined") ? false : oldVer;
            gEbDisplayPage.addInterval("mouseTracker", "ebMouseMoveInterval()", 100);
            registerMouseMove(objRef);
            var flashObj = objRef.getElementById(objName);
            var nIndex;
            if (objRef.arrMouseTrackerComponent[objName] == null) {
                objRef.arrMouseTrackerComponent[objName] = new Array();
            }
            nIndex = objRef.arrMouseTrackerComponent[objName].length;
            if (oldVer)
                proxyPath = proxyPath.replace(/\./ig, "/");
            for (var i = 0; i < nIndex; i++) {
                if (objRef.arrMouseTrackerComponent[objName][i].proxyPath == proxyPath) {
                    break;
                }
            }
            if (i == nIndex)
                addElementMouseTracker(objRef, objName, flashObj, proxyPath, nIndex, oldVer);
        } catch (e) {}
    }
    function ebInitVideoLoaderHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var fStretchToFit=!(eval(strParams[1]));
        var fStreaming = eval(strParams[2]);
        var fAutoPlay = eval(strParams[3]);
        var nXPos = parseFloat(strParams[4]);
        var nYPos = parseFloat(strParams[5]);
        var nWidth = parseFloat(strParams[6]);
        var nHeight = parseFloat(strParams[7]);
        var fHandleClick = eval(strParams[8]);
        var fNewComp = (strParams.length >= 10) ? eval(strParams[9]): false;
        if (!fHandleClick)
            fHandleClick = false;
        var nIndex = this.arrVideoLoaderDrivers.length;
        this.arrVideoLoaderDrivers[nIndex] = this.createVideoLoaderDriver(strObjID, strPath, fStreaming, fStretchToFit, nXPos, nYPos, nWidth, nHeight, fHandleClick, nIndex, fNewComp);
        if (fStreaming) {
            if (!gEbVideoLoader)
                gEbVideoLoader = true;
            registerMouseMove(this);
        }
        if (!this.fsManager)
            this.fsManager = new ebCFSManager(this);
        if (typeof(ebNotifyAutoPlay) == "function")
            ebNotifyAutoPlay(fAutoPlay);
    }
    function ebVideoLoadHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            var strMovieName = strParams[1];
            var fMute = eval(strParams[2]);
            var nVolume = eval(strParams[3]);
            var nBuffer = eval(strParams[4]);
            var strFSMovieName = (strParams.length >= 6) ? strParams[5]: strMovieName;
            var fFLVFSComp = (strParams.length >= 7) ? strParams[6]: false;
            driver.load(strMovieName, fMute, nVolume, nBuffer, strFSMovieName, fFLVFSComp);
        }
    }
    function ebWMVPlayHandler(strPath, strObjID) {
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver)
            driver.play();
    }
    function ebWMVPauseHandler(strPath, strObjID) {
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            driver.pause();
        }
    }
    function ebWMVStopHandler(strPath, strObjID) {
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            driver.stop();
        }
    }
    function ebWMVSetMuteHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            var fMute = eval(strParams[1]);
            driver.setMute(fMute);
        }
    }
    function ebWMVSetVolumeHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            var nVolume = strParams[1];
            driver.setVolume(nVolume);
        }
    }
    function ebWMVSeekHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            var nSec = strParams[1];
            driver.seek(nSec);
        }
    }
    function ebWMVSetBufferHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            var nBuffer = strParams[1];
            driver.setBuffer(nBuffer);
        }
    }
    function ebWMVResizeHandler(strPath, strObjID) {
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            driver.doOnResize();
        }
    }
    function ebVideoTrackMouseHandler(strPath, strObjID) {
        strPath = strPath.replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver) {
            driver.trackRollOver();
        }
    }
    function ebFullScreenOpenHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver)
            driver.callAPIProxyFunc("VideoFSOpen");
    }
    function ebFullScreenCloseHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver)
            driver.callAPIProxyFunc("VideoFSClose", "nAutoClose,0");
    }
    function ebFullScreenAutoCloseHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var driver = this.getVideoLoaderDriver(strObjID, strPath);
        if (driver)
            driver.callAPIProxyFunc("VideoFSClose", "nAutoClose,1");
    }
    function ebVideoFSOpenHandler(strParams, strObjID) {
        var strParams = strParams.split(",");
        var strPath = strParams[0].replace(/\./ig, "/");
        var nPos = parseFloat(strParams[1]);
        var fMute = eval(strParams[2]);
        var nVolume = parseFloat(strParams[3]);
        var nReportedPlayProgress = strParams[4];
        var fUnmuteHandled = eval(strParams[5]);
        this.fsManager.open(strPath, nPos, fMute, nVolume, strObjID, nReportedPlayProgress, fUnmuteHandled);
    }
    function ebVideoFSCloseHandler() {
        this.fsManager.close();
    }
    function ebVideoFSAutoCloseHandler() {
        this.fsManager.close(false);
    }
    function collectCounters() {
        var pendingInts = this.adData.strPendingInteractions;
        this.adData.strPendingInteractions = "";
        this.adData.nIntInStack = 0;
        return pendingInts;
    }
    function collectTimers(fReport) {
        try {
            if (ebIsPreview()&&!ebIsGlobalDef("gfEbForceReportInt")) {
                return "";
            }
            if (!this.adData.fShouldReportTimers) {
                return "";
            }
            if (!this.adData.fShouldReportTimers) {} else {
                strInteractions = this.getTimersReportData();
            }
            if (strInteractions != "" && fReport) {
                {}
                var defInter = this.interactions["_eyeblaster"];
                strInteractions = defInter.getAdReportData(this.adData) + this.collectCounters() + strInteractions;
                var reportUrl = ebFormat("{0}&int={1}{2}", defInter.getPipeUrl(), strInteractions, defInter.getPipeParams());
                if (gEbBC.isOpera()) {
                    reportUrl += ebFormat("&iseq={0}", gEbnIntSeq);
                    gEbnIntSeq = gEbnIntSeqArray.length;
                }
                defInter.reportingImg = new Image();
                defInter.reportingImg.src = reportUrl;
                this.adData.fShouldReportTimers = false;
            } else {}
            this.adData.fShouldReportTimers = (this.adData.fShouldReportTimers && gEbBC.isOpera());
            return strInteractions;
        } catch (e) {
            return "";
        }
    }
    function getTimersReportData() {
        var strInteractions = "";
        var interactions = this.interactions;
        for (var inter in interactions) {
            try {
                var interObj = interactions[inter];
                if (interObj.nType == 1) {
                    var fTimerRunning = (interObj.nStartTime > 0);
                    var fMSNIframe = ((typeof (gfEbMSNIframe) != "undefined") && gfEbMSNIframe);
                    if (!(!gEbBC.isChrome() && gEbBC.isSafari() && ebIsInIframe()&&!fMSNIframe)) {
                        interObj.handle(2, this.adData);
                    }
                    if (fTimerRunning && gEbBC.isOpera())
                        interObj.handle(1, this.adData);
                    if (interObj.nValue != 0)
                        strInteractions += interObj.getReportData();
                }
            } catch (e) {}
        }
        return strInteractions;
    }
    function stopTimers() {
        try {
            var interactions = this.interactions;
            for (var inter in interactions) {
                if (interactions[inter].nType == 1) {
                    try {
                        interactions[inter].handle(2, this.adData);
                    } catch (e) {
                        break;
                    }
                }
            }
        } catch (e) {
            return "";
        }
    }
    function setBWCookie(bwParams) {
        if (bwParams.nBWVal<=-1)
            return;
        this.adData.nBWVal = bwParams.nBWVal;
        this.adData.nBWTime = bwParams.nStartDlTime;
        if (!this.adData.fOptOut) {
            var strBWCookie = bwParams.nBWVal + ":" + bwParams.nStartDlTime;
            if (typeof(gEbClientInfo) != "undefined")
                gEbClientInfo.cookieInfo.setBandWidth(strBWCookie);
            else 
                ebSetCookie("ebNewBandWidth", strBWCookie);
        }
    }
    function flashResReady(flashObj, nResSize, streamParams, fBwDbgOnly, bwParams) {
        var fIsLoaded = false;
        var nFramesLoaded = 0;
        var nPercentLoaded = 0;
        if (typeof(fBwDbgOnly) == "undefined")
            fBwDbgOnly = false;
        if (typeof(bwParams) == "undefined")
            bwParams = this.bwParams;
        if (flashObj) {
            nFramesLoaded = ebGetFramesLoaded(flashObj);
            nPercentLoaded = ebGetPercentLoaded(flashObj);
        }
        if (!fBwDbgOnly) {}
        var dtNow = new Date().getTime();
        if (nPercentLoaded < 0) {
            return (false);
        }
        var nLoadedSize = nPercentLoaded * nResSize / 100;
        if (nPercentLoaded == 100) {
            if (!fBwDbgOnly) {}
            if (bwParams.nBWVal<=-1)
                detectBW(bwParams, nLoadedSize, dtNow);
            this.setBWCookie(bwParams);
            return (true);
        }
        detectBW(bwParams, nLoadedSize, dtNow);
        if (nLoadedSize > 600 * 1024) {
            if (!fBwDbgOnly) {}
            this.setBWCookie(bwParams);
            return (true);
        }
        if (streamParams == null) {
            if (!fBwDbgOnly) {}
            return (false);
        }
        if (bwParams.nBWVal==-1)
            return false;
        if (streamParams.fAutoBuffer == "1") {
            if (!fBwDbgOnly) {}
            var nDelta = dtNow - bwParams.nStartDlTime;
            var nLeftTimeToDownload = (nResSize - nLoadedSize) * 8 / (bwParams.nBWVal * 1024);
            if (!fBwDbgOnly) {}
            if (nLeftTimeToDownload < streamParams.nMovieDuration) {
                if (!fBwDbgOnly) {}
                this.setBWCookie(bwParams);
                fIsLoaded = true;
            }
        } else {
            if (!fBwDbgOnly) {}
            var fLowBW = true;
            var nLimit = gnEbLowBWLimit;
            if (bwParams.nBWVal!=-1) {
                if (!fBwDbgOnly) {}
                if (bwParams.nBWVal > nLimit)
                    fLowBW = false;
            } else {
                if (!fBwDbgOnly) {}
            }
            if (fLowBW) {
                if (!fBwDbgOnly) {}
                if (nPercentLoaded >= streamParams.nLowBWBuffer) {
                    if (!fBwDbgOnly) {}
                    this.setBWCookie(bwParams);
                    fIsLoaded = true;
                }
            } else {
                if (!fBwDbgOnly) {}
                if (nPercentLoaded >= streamParams.nHighBWBuffer) {
                    if (!fBwDbgOnly) {}
                    this.setBWCookie(bwParams);
                    fIsLoaded = true;
                }
            }
        }
        if (nFramesLoaded < 1) {
            if (!fBwDbgOnly) {
                return (false);
            }
        }
        if (fIsLoaded) {
            return (true);
        }
        if (!fBwDbgOnly) {}
        return (false);
    }
    function buildResUrl(resUrl, strResID, domain, nForcePlayMode) {
        var strDomain;
        try {
            if ((typeof(domain) != "undefined") && (domain != ""))
                strDomain = domain;
            else 
                strDomain = this.adTI.getDoc().location.hostname;
        } catch (e) {
            strDomain = "";
        }
        var conduitPath = ebBigS + "/Res/" + ebConduitVer;
        var interactionTime = ebBigS + "/Res/ebInteractionTime" + ebIntTimeVer + ".swf";
        getRandFlashVar(this);
        setXMLPathFlashVars(this);
        if (ebIsPreview())
            setDataCaptureFlag(this);
        var strUrl = resUrl + "?ebDomain=" + strDomain + "&ebAdID=" + this.adData.nAdID + "&cp=" + conduitPath + "&ebIntTime=" + interactionTime;
        if (!isStdAdFormat(this)) {
            var strDcPipe = (gEbfOfflineDemo || ebIsPreview()) ? '': ebStrProtocol + ebDataCapture + '/BurstingPipe/BurstingDataCapturePipe.asp';
            var typeString = "";
            if ((ebPluID == 42) || (ebPluID == 45))
                ebAKAMAIFCS = "rtmp://cp57388.edgefcs.net/ondemand";
            if (ebPluID == 43)
                ebAKAMAIFCS = "rtmp://eyeblaster.fcod.msecnd.net/vod/a10061/e1";
            if (ebPluID == 9) {
                typeString = "Type-12/";
                ebAKAMAIFCS = "rtmp://flv.stream.atwola.com/flash/flv/mm";
            }
            var nIndex = resUrl.indexOf("/", ebResourcePath.length);
            var virtualPath = ebFCSVirtualPath + resUrl.substring(ebResourcePath.length, nIndex + 1);
            virtualPath += typeString;
            var strAdIdentifier = this.objName + "_" + this.adData.nAdID;
            var sResPath = (gEbFlyLocal) ? "": ebResourcePath;
            strUrl += "&ebDCPipe=" + strDcPipe + "&ebResourcePath=" + ebResourcePath + "&ebCampaignID=" + this.adData.nCampaignID + "&ebStreamingAppURL=" + escape(ebAKAMAIFCS) + "&ebStreamVirtualPath=" + escape(virtualPath) + "&ebAdIdentifier=" + strAdIdentifier + "&ebResPath=" + escape(sResPath) + "&ebLC=" + this.buildLCName(strResID);
        }
        if (gEbfOfflineDemo)
            nForcePlayMode = 0;
        if (typeof(nForcePlayMode) != "undefined")
            strUrl += "&ebForcePlayMode=" + nForcePlayMode;
        else if ((typeof(gfEbForceStreaming) != "undefined") && gfEbForceStreaming)
            strUrl += "&ebForcePlayMode=1";
        if (this.ad.nFSMute != 3) {
            if (this.ad.nFSMute == 1)
                strUrl += "&ebFLVFSMute=1";
            else 
                strUrl += "&ebFLVFSMute=0";
        }
        var pipeParams = (this.adData.fTest) ? "t=1" : "";
        if (pipeParams != "")
            strUrl += "&ebPipeParams=" + escape(pipeParams);
        return strUrl;
    }
    function getRandFlashVar(objRef) {
        var strAdditionalRes = buildAdditionalResStr(objRef);
        var clickTagHandler = setClickTagHandler(objRef);
        var clickTarget = setClickTarget(objRef);
        objRef.strRandFlashVar = ebFormat("&clickTag={0}&clickTAG={1}&clicktag={2}&clickTARGET={3}&{4}{5}", escape(clickTagHandler), escape(clickTagHandler), escape(clickTagHandler), clickTarget, strAdditionalRes, _getAdditionalClickTagParams(objRef));
    }
    function setClickTagHandler(objRef, sJumpUrl) {
        sJumpUrl = ((typeof (sJumpUrl) != "undefined") && sJumpUrl != "") ? sJumpUrl : undefined;
        var clickTagHandler = "";
        var eyeIntObj = objRef.interactions["_eyeblaster"];
        if (gEbfOfflineDemo && typeof (gEbfNewOfflineDemo) == "undefined"&&!gEbFlyLocal) {
            if (eyeIntObj.strJumpUrl != "")
                clickTagHandler = objRef.adData.strDemoFolder + "_eyeblaster.htm";
        } else if (ebIsPreview()) {
            if (gEbFlyLocal) {
                clickTagHandler = "ReportPage_" + HTMLPageVer + ".html";
            } else {
                clickTagHandler = (sJumpUrl) ? sJumpUrl : eyeIntObj.strJumpUrl;
                if ((clickTagHandler.substr(0, 5) != "http:") && (clickTagHandler.substr(0, 6) != "https:"))
                    clickTagHandler = "http://" + clickTagHandler;
            }
            clickTagHandler = ebReplaceURLTokens(clickTagHandler, objRef.adData);
        } else {
            if (typeof (gEbfNewOfflineDemo) != "undefined" && eyeIntObj.strJumpUrl != "")
                clickTagHandler = eyeIntObj.strJumpUrl;
            else {
                if (typeof(sJumpUrl) != "undefined" && (sJumpUrl.substr(0, 5) != "http:") && (sJumpUrl.substr(0, 6) != "https:")) {
                    sJumpUrl = "http://" + sJumpUrl;
                }
                clickTagHandler = objRef.adData.getBannerRedirectUrl(sJumpUrl);
                if ((clickTagHandler.substr(0, 5) != "http:") && (clickTagHandler.substr(0, 6) != "https:")) {
                    clickTagHandler = "http://" + clickTagHandler;
                }
                var paramDelim = "$$";
                clickTagHandler = ebBigS + "/ReportPage" + ebReportPageVer + ".html" + "?ebReportURL=" + escape(clickTagHandler) + paramDelim + "ebImpressionID=" + objRef.adData.strRand;
                var sizeLimit =- 1;
                if (gEbBC.isIE()) {
                    sizeLimit = (gEbBC.getVersion() >= 9.0) ? 4096 : 2048;
                    sizeLimit -= clickTagHandler.length;
                }
                var trackingURLs = getReportPageTrackingURLs(objRef.adData, sizeLimit);
                clickTagHandler += trackingURLs;
            }
        }
        return clickTagHandler;
    }
    function setClickTarget(objRef) {
        var clickTarget = "";
        if (gEbfOfflineDemo && typeof (gEbfNewOfflineDemo) == "undefined"&&!gEbFlyLocal) {
            clickTarget = "_blank";
        } else if (ebIsPreview()) {
            clickTarget = "_blank";
        } else {
            if (typeof (gEbfNewOfflineDemo) != "undefined" && eyeIntObj.strJumpUrl != "")
                clickTarget = "_blank";
            else {
                var eyeIntObj = objRef.interactions["_eyeblaster"];
                clickTarget = eyeIntObj.strTarget;
            }
        }
        return clickTarget;
    }
    function _getAdditionalClickTagParams(objRef) {
        var strAdditionalClickTagParams = "";
        var interactions = objRef.interactions;
        for (var name in interactions) {
            try {
                var regex = new RegExp("clicktag\\d+", "i");
                var match = regex.test(name);
                if (match) {
                    var interaction = interactions[name.toLowerCase()];
                    if (interaction && interaction.strJumpUrl != "") {
                        var interactionName = interaction.strName;
                        var clickTagHandler = setClickTagHandler(objRef, interaction.strJumpUrl);
                        strAdditionalClickTagParams += ebFormat("&{0}={1}", interactionName, escape(clickTagHandler));
                    }
                }
            } catch (e) {}
        }
        return strAdditionalClickTagParams;
    }
    function getReportPageTrackingURLs(adData, sizeLimit) {
        var trackingURLs = "$$ebTURLs=[";
        if (sizeLimit!=-1) {
            if (trackingURLs.length >= sizeLimit)
                return "";
            sizeLimit -= trackingURLs.length;
        }
        for (var i = 0; i < adData.clickTrackingURLs.arrURLs.length; i++) {
            var tmp = "";
            var url = ebReplaceURLTokens(adData.clickTrackingURLs.arrURLs[i], adData);
            if (i != 0) {
                tmp = ",";
            }
            tmp += ('"' + url + '"');
            if (sizeLimit!=-1) {
                if (tmp.length >= sizeLimit) {
                    break;
                }
                sizeLimit -= tmp.length;
            }
            trackingURLs += tmp;
        }
        trackingURLs += "]";
        return (trackingURLs);
    }
    function setXMLPathFlashVars(objRef) {
        var fIsMassV = (objRef.adData.sAdVersions != "");
        var isSVSVP = typeof(objRef.ad.isSVSVP) != "undefined" && objRef.ad.isSVSVP;
        if ((typeof(objRef.ad.strXML) != "undefined") && (objRef.ad.strXML != "") && (!fIsMassV || isSVSVP)) {
            var xmlPath = objRef.ad.strXML;
            if ((typeof(ebAdXmlPath) != "undefined") && (ebAdXmlPath != ""))
                xmlPath = ebAdXmlPath;
            else if (!gEbFlyLocal)
                xmlPath = ebResourcePath + xmlPath;
            objRef.strRandFlashVar += "&ebAdXML=" + xmlPath;
        }
        if (fIsMassV) {
            if ((typeof (objRef.ad.strDisplayMap) == "undefined") ||!objRef.ad.strDisplayMap) {
                {}
                return;
            }
            var displayMap = objRef.ad.strDisplayMap;
            var sResPath = (gEbFlyLocal) ? "": ebResourcePath;
            var versions = ebGetAdVersions(objRef.adData);
            versions = objRef.adData.massVersionFolderDivider > 0 ? fixMVPathString(versions, objRef.adData.massVersionFolderDivider) : versions;
            objRef.strRandFlashVar += ebFormat("&ebAdVersions={0}&ebAdMap={1}&ebResPath={2}&ebAdSVBasePath={3}", versions, displayMap, sResPath, objRef.adData.sAdBasePath);
        }
    }
    function setDataCaptureFlag(objRef) {
        objRef.strRandFlashVar += "&ebNewPreview=";
        objRef.strRandFlashVar += (typeof(window.parent.setDataCaptureFormValues) == "function") ? "1" : "0";
    }
    function getUsedAssetProperties(strMovieName, usedAsset) {
        var nType = usedAsset[0];
        var nIndex = usedAsset[1];
        return this.ad.additionalAssetsArray[strMovieName][nType][nIndex];
    }
    function GetMinSupportedPlayerVersion(assetType) {
        switch (assetType) {
        case gEBvideoTypes.MP4:
        case gEBvideoTypes.F4V:
            {
                return 9.0115;
                break;
            }
        case gEBvideoTypes.FLV8:
            {
                return 8;
                break;
            }
        case gEBvideoTypes.WMV:
            {
                return 9;
                break;
            }
        case gEBvideoTypes.FLV7:
            {
                return 7;
                break;
            }
        }
        return null;
    }
    function getBestAdditionalAsset(strName, fStreaming) {
        var AssetTypeByPriority = {
            "F4V": 0,
            "MP4": 1,
            "FLV8": 2,
            "WMV": 3,
            "FLV7": 4,
            "SWF": 5
        };
        var asset = new Object();
        asset.bitRate =- 1;
        var nBW = this.getBW();
        if (nBW!=-1)
            nBW = Math.round(nBW * 1.1);
        var fOOB = (typeof(gEbClientInfo) != "undefined");
        var nWMPVer = fOOB ? gEbClientInfo.pluginInfo.flWMPVer: gEbWMPVer;
        var nFlashVer = fOOB ? gEbClientInfo.pluginInfo.flFlashVer: gEbFlashVer;
        var origAsset = this.ad.additionalAssetsArray[strName];
        if (!origAsset) {
            return null;
        }
        var assetIndex;
        for (myAsset in AssetTypeByPriority) {
            for (assetType in gEBvideoTypes)
                if (myAsset == assetType) {
                    assetIndex = gEBvideoTypes[assetType];
                    break;
                }
            if (origAsset[assetIndex]) {
                var assetArray = origAsset[assetIndex];
                var versionSupported = GetMinSupportedPlayerVersion(assetIndex);
                if (assetIndex == gEBvideoTypes.WMV) {
                    var fVideoStrip = (typeof(this.ad.fVideoStrip) != "undefined") && (this.ad.fVideoStrip);
                    var fSEAd = (typeof(this.ad.fSExpBanner) != "undefined") && (this.ad.fSExpBanner);
                    if (fVideoStrip || fSEAd) {
                        versionSupported = false;
                    } else 
                        versionSupported = (nWMPVer >= versionSupported);
                } else {
                    versionSupported = (nFlashVer >= versionSupported);
                }
                if (versionSupported) {
                    var nIndex = getBestBitrateAsset(this, nBW, assetArray, fStreaming);
                    if (nIndex >= 0) {
                        asset = new Array(assetIndex, nIndex);
                        break;
                    }
                    if (asset.bitRate==-1 || assetArray[assetArray.length - 1].nBitRate < asset.bitRate) {
                        asset = new Array(assetIndex, assetArray.length - 1);
                        asset.bitRate = assetArray[assetArray.length - 1].nBitRate;
                    }
                }
            }
        }
        var bestAsset = new Array();
        if (!asset) {
            return null;
        } else {
            bestAsset[0] = asset[0];
            bestAsset[1] = asset[1];
            bestAsset[2] = fStreaming;
            bestAsset[3] = asset;
        }
        var info = origAsset[bestAsset[0]][bestAsset[1]];
        this.usedAdditionalAssets[strName] = bestAsset;
        return bestAsset;
    }
    function getBW() {
        var nBW =- 1;
        if (this.adData.nBWVal >= 0)
            nBW = this.adData.nBWVal;
        else {
            var strBWCookie = (typeof(gEbClientInfo) != "undefined") ? gEbClientInfo.cookieInfo.getBandWidth(): ebReadCookie("ebNewBandWidth");
            if (strBWCookie.indexOf(":")!=-1) {
                var cookieParts = strBWCookie.split(":");
                nBW = cookieParts[0];
            }
        }
        return parseInt(nBW);
    }
    function getVideoLoaderDriver(strObjID, strPath) {
        var strPath = strPath.replace(/\./ig, "/");
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
            var driver = this.arrVideoLoaderDrivers[i];
            if ((driver.resObj.id == strObjID) && (driver.strVideoLoaderPath == strPath)) {
                return driver;
            }
        }
        return null;
    }
    function createVideoLoaderDriver(strObjID, strPath, fStreaming, fStretchToFit, nXPos, nYPos, nWidth, nHeight, fHandleClick, nIndex, fNewComp) {
        var flashObj = this.getElementById(strObjID);
        return new ebCVideoLoaderDriver(strPath, fStreaming, fStretchToFit, nXPos, nYPos, nWidth, nHeight, fHandleClick, flashObj, nIndex, this, fNewComp);
    }
    function closeAdResource(resObj, fullClose) {
        try {
            if (this.getElementById(resObj.id) == null)
                return;
            if (typeof(fullClose) == "undefined")
                fullClose = true;
            if (typeof(resObj.LoadMovie) != "undefined") {
                for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
                    var driver = this.arrVideoLoaderDrivers[i];
                    if (driver.resObj == resObj)
                        driver.close();
                }
                var flashId = resObj.name;
                if (typeof (this.flashAssetIndex[flashId]) != "undefined") {
                    var movieIndex = this.flashAssetIndex[flashId];
                    var inter = getInteractionObj(this, 'ebVideoPlayDuration');
                    if (inter.nStartTime == 0)
                        this.ebendvideotimerHandler('ebVideoPlayDuration', movieIndex, flashId, true);
                    else 
                        this.ebendvideotimerHandler('ebVideoPlayDuration', movieIndex, flashId);
                }
            }
            if (fullClose)
                this.hideRes(resObj, true);
        } catch (e) {}
    }
    function replaceRes(newObj, objToRemove, container) {
        var width = objToRemove.width ? objToRemove.width: parseInt(objToRemove.style.width);
        var height = objToRemove.height ? objToRemove.height: parseInt(objToRemove.style.height);
        if ((ebIsAS3(newObj) || ebIsAS3(objToRemove))&&!gEbBC.isSafari() && (!gEbBC.isIE())) {
            resizeAndPlay(this, newObj, width, height);
            while (newObj.parentNode != container)
                newObj = newObj.parentNode;
            while (objToRemove.parentNode != container)
                objToRemove = objToRemove.parentNode;
            container.replaceChild(newObj, objToRemove);
        } else {
            this.hideRes(objToRemove, true);
            resizeAndPlay(this, newObj, width, height);
        }
    }
    function replayRes(resObj, src, fShouldSetSize) {
        try {
            var width = fShouldSetSize ? parseInt(resObj.style.width): width;
            var height = fShouldSetSize ? parseInt(resObj.style.height): height;
            var container = resObj.parentNode;
            container.prevInnerHTML = container.innerHTML;
            this.hideRes(resObj, fShouldSetSize);
            this.showRes(resObj, src, container, width, height);
        } catch (e) {}
    }
    function hideRes(res, fShouldMinimize) {
        try {
            var resObj = null;
            if (this.getElementById(res.id) != null) {
                if (fShouldMinimize) {
                    res.style.width = "0px";
                    res.style.height = "0px";
                    res.parentNode.style.width = "0px";
                    res.parentNode.style.height = "0px";
                }
                if ((res.tagName.toLowerCase() == "img") || ebIsAS3(res) || !ebIsGlobalDef("gEbfLoadAsAS2")) {
                    res.parentNode.innerHTML = "";
                } else {
                    res.LoadMovie(0, "about:blank");
                    res.StopPlay();
                }
            }
            return resObj;
        } catch (e) {
            return null;
        }
    }
    function reloadRes(resObj, src, container, fShouldPlay, width, height) {
        var fShouldReload = (container != null);
        if (fShouldReload) {
            var isOnPage = (this.getElementById(resObj.id) != null);
            if (isOnPage&&!ebIsAS3(resObj) && ebIsGlobalDef("gEbfLoadAsAS2")) {
                var strFunc = this.objName + ".showAS2Res('" + resObj.id + "', '" + src + "', " + fShouldPlay + ", " + width + ", " + height + ")";
                window.setTimeout(strFunc, 50);
                return;
            }
            if (typeof this.id == "undefined") {
                this.id = resObj.id;
            }
            appendAS3Res(this, resObj, container);
        }
        if (fShouldPlay) {
            resizeAndPlay(this, resObj, width, height);
        } else {
            if (gEbBC.isIE())
                this.stopRes(resObj.id);
        }
    }
    function showRes(resObj, src, container, width, height) {
        try {
            this.reloadRes(resObj, src, container, true, width, height);
        } catch (e) {}
    }
    function showAS2Res(resID, src, fShouldPlay, width, height) {
        var resObj = this.getElementById(resID);
        var fOOB = (typeof(gEbClientInfo) != "undefined");
        var nFlashVer = fOOB ? gEbClientInfo.pluginInfo.flFlashVer: gEbFlashVer;
        resObj.LoadMovie(0, src);
        if (nFlashVer >= 6)
            this.setRandFlashVar(resObj);
        if (fShouldPlay)
            resizeAndPlay(this, resObj, width, height);
        else {
            if (gEbBC.isIE()) {
                this.stopRes(resObj.id);
            } else {
                var strFunc = this.objName + ".stopRes('" + resObj.id + "');";
                window.setTimeout(strFunc, 50);
            }
        }
    }
    function resizeAndPlay(objRef, resObj, width, height) {
        if (width && height) {
            width = parseInt(width);
            height = parseInt(height);
            resObj.style.width = width + "px";
            resObj.style.height = height + "px";
            resObj.parentNode.style.width = width + "px";
            resObj.parentNode.style.height = height + "px";
        }
        if (resObj.tagName.toLowerCase() != "img") {
            if (gEbBC.isIE()) {
                objRef.playRes(resObj.id);
            } else {
                var strFunc = objRef.objName + ".playRes('" + resObj.id + "');";
                window.setTimeout(strFunc, 50);
            }
        }
    }
    function playRes(flashID) {
        try {
            var flashObj = this.getElementById(flashID);
            if (!flashObj)
                return;
            if (!ebIsFlashPlaying(flashObj)) {
                flashObj.Play();
                if ((flashObj.TGetPropertyAsNumber("/", 4) > 1) || flashObj["IsPlaying"]()) {
                    this["countingExceptions" + flashID] = 0;
                } else {
                    throw "Flash not playing";
                }
            }
        } catch (e) {
            if (this["countingExceptions" + flashID]) {
                this["countingExceptions" + flashID]++;
            } else {
                this["countingExceptions" + flashID] = 1;
            }
            if (this["countingExceptions" + flashID] < 5) {
                {}
                var strFunc = this.objName + ".playRes('" + flashID + "');";
                window.setTimeout(strFunc, 50);
            } else {
                var parentNode = flashObj ? flashObj.parentNode: null;
                if (parentNode) {
                    var html = parentNode.innerHTML;
                    html = html.replace("play=\"false\"", "play=\"true\"");
                    html = html.replace("param name='play' value='false'", "param name='play' value='true'");
                    parentNode.innerHTML = html;
                    flashObj = this.getElementById(flashID);
                    var elementToAttach = gEbBC.isIE() ? flashObj.parentNode: flashObj;
                    gEbTI.addEventHandler("mouseout", "ebOnmouseOutOfAd", elementToAttach);
                } else {
                    var strFunc = this.objName + ".playRes('" + flashID + "');";
                    window.setTimeout(strFunc, 50);
                }
            }
        }
    }
    function stopRes(flashID) {
        try {
            var flashObj = this.getElementById(flashID);
            if (!flashObj)
                return;
            flashObj.GotoFrame(0);
            flashObj.StopPlay();
        } catch (e) {
            var strFunc = this.objName + ".stopRes('" + flashID + "');";
            window.setTimeout(strFunc, 50);
        }
    }
    function getTrackedDiv(resObj) {
        if (typeof(this.getTemplateTrackedDiv) == "function")
            return this.getTemplateTrackedDiv(resObj);
        return resObj.parentNode;
    }
    function handleUnload() {
        if (typeof(this.doOnUnload) == "function")
            this.doOnUnload();
    }
    function handleResize() {
        if (typeof(this.doOnResize) == "function")
            this.doOnResize();
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++)
            this.arrVideoLoaderDrivers[i].doOnResize();
    }
    function handleScroll() {
        if (typeof(this.doOnScroll) == "function")
            this.doOnScroll();
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++)
            this.arrVideoLoaderDrivers[i].doOnScroll();
    }
    function handleFocus() {
        if (typeof (this.doOnFocus) == "function")
            this.doOnFocus();
    }
    function handleBlur() {
        if (typeof (this.doOnBlur) == "function")
            this.doOnBlur();
    }
    function handleVisibleHidden() {
        var isHidden = this.isHiddenValue();
        if (typeof (this.doOnFocus) == "function") {
            this.doOnFocus(isHidden);
        }
    }
    function handleKeyDown(nKeyCode) {
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++)
            this.arrVideoLoaderDrivers[i].doOnKeyDown(nKeyCode);
    }
    function handleMouseActive(fActive) {
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++)
            this.arrVideoLoaderDrivers[i].onMouseActive(fActive);
    }
    function handleMouseTracker() {
        try {
            var proxyPath;
            var flashObj;
            var nRelYPos;
            var nRelXPos;
            var strParams = "nXPos" + "," + gEbMouseX + ";" + "nYPos" + "," + gEbMouseY;
            var strParamsRel = "";
            for (var i in this.arrMouseTrackerComponent) {
                if (this.getElementById(i) && i.indexOf("eb") == 0) {
                    if (typeof(this.arrMouseTrackerComponent[i]) == "object") {
                        flashObj = this.arrMouseTrackerComponent[i][0].flashObj;
                        if ((flashObj.style.width == "0px") && (flashObj.style.height == "0px")) {
                            continue;
                        }
                        nRelYPos = parseInt(gEbMouseY) - parseInt(ebGetRealTop(flashObj));
                        nRelXPos = parseInt(gEbMouseX) - parseInt(ebGetRealLeft(flashObj));
                        strParamsRel = ";nRelXPos" + "," + nRelXPos + ";" + "nRelYPos" + "," + nRelYPos;
                        for (var j = 0; j < this.arrMouseTrackerComponent[i].length; j++) {
                            proxyPath = this.arrMouseTrackerComponent[i][j].proxyPath;
                            if (this.arrMouseTrackerComponent[i][j].oldVer) {
                                this.callFlashFunc(flashObj, proxyPath, "onMouseMove", strParams + strParamsRel);
                            } else {
                                var params = ebFormat('{0},{1},{2},{3}', gEbMouseX, gEbMouseY, nRelXPos, nRelYPos);
                                this.callFlashFuncDynamicProxy(flashObj.id, proxyPath, "ebMouseMove", params);
                            }
                        }
                    }
                }
            }
        } catch (error) {}
    }
    function handleResMove(resObj) {
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
            var driver = this.arrVideoLoaderDrivers[i];
            if (driver.resObj == resObj)
                driver.doOnResize();
        }
    }
    function handleMouseOutOfVideo(e) {
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
            var driver = this.arrVideoLoaderDrivers[i];
            driver.doOnMouseOutOfVideo(e);
        }
    }
    function buildLCName(strResID) {
        var strLC = this.objName;
        var nIndex = strResID.indexOf("_");
        if (nIndex!=-1)
            strLC += "_" + strResID.substr(0, nIndex) + "_" + this.adData.nAdID;
        return strLC;
    }
    function loadScriptFile(method, src, name) {
        try {
            var scriptEl = document.getElementById(name);
            if (scriptEl != null) {
                return;
            }
            gEbTI.addScript(method, src, name);
        } catch (e) {}
    }
    function setRandFlashVar(flashObj) {
        try {
            var isAS3 = ebIsAS3(flashObj);
            if (isAS3)
                return;
            var strVars = this.buildFlashVars(flashObj.id);
            strVars = strVars.substr(1);
            var varsArr = strVars.split("&");
            for (var i = 0; i < varsArr.length; i++) {
                var varArr = varsArr[i].split("=");
                flashObj.SetVariable(varArr[0], unescape(varArr[1]));
            }
        } catch (e) {}
    }
    function getElementById(strElementId) {
        return this.adTI.getDoc().getElementById(strElementId);
    }
    function setProxyParams(flashObj, strProxyPath, strParams) {
        try {
            var paramsArr = strParams.split(";");
            for (var i = 0; i < paramsArr.length; i++) {
                var paramNvalue = paramsArr[i].split(",");
                flashObj.SetVariable(strProxyPath + ":" + paramNvalue[0], paramNvalue[1]);
            }
        } catch (e) {}
    }
    function callFlashFunc(flashObj, path, innerFunc, params) {
        try {
            if (typeof(params) == "undefined")
                params = "";
            var isAS3 = ebIsAS3(flashObj);
            var strValue = "";
            if (isAS3) {
                var lastPos = path.lastIndexOf("/");
                path = (lastPos!=-1) ? path.substring(0, lastPos) : path;
                if (params != "") {
                    var arrParams = params.split(";");
                    for (var i = 0; i < arrParams.length; i++) {
                        if (arrParams[i] != "") {
                            var arrValue = arrParams[i].split(",");
                            strValue += arrValue[1];
                            if (i < arrParams.length - 1)
                                strValue += ",";
                        }
                    }
                }
                flashObj[path](innerFunc, strValue);
            } else {
                if (params != "")
                    this.setProxyParams(flashObj, path, params);
                flashObj.TCallLabel(path, innerFunc);
            }
        } catch (e) {}
    }
    function callFlashFuncDynamicProxy(strObjID, path, eventName, params) {
        try {
            if (typeof(params) == "undefined")
                params = "";
            var flashObj = this.getElementById(strObjID);
            if (ebIsAS3(flashObj)) {
                flashObj[path](eventName, params);
            } else {
                params = (params != "") ? ebFormat("{0},{1}", eventName, params) : eventName;
                flashObj.SetVariable(path, params);
            }
        } catch (e) {}
    }
    function buildFlashVars(strResID) {
        var strFSCmdHandler = "";
        if (!gEbBC.isIE()) {
            strFSCmdHandler = strResID + "_DoFSCommand";
        }
        var flashVars = ebFormat("{0}&ebFSCmdHandler={1}&ebFlashID={2}", this.strRandFlashVar, strFSCmdHandler, strResID);
        if (gEbBC.isChrome() && gEbBC.getVersion() > 20&&!gEbBC.isMac()) {
            flashVars = ebFormat("{0}&ebFlashID={2}", this.strRandFlashVar, strFSCmdHandler, strResID);
        }
        if (typeof(this.isDefaultPanelSupportedDelayExp) == 'function') {
            var delayExp;
            delayExp = (this.isDefaultPanelSupportedDelayExp() && this.isSEAd()) ? "1" : "0";
            flashVars += ebFormat("&ebDelayExp={0}", delayExp);
        }
        if (typeof(this.shouldAdAutoExpend) == 'function') {
            if (this.isSEAd()) {
                var shouldExpend = this.shouldAdAutoExpend() ? "1" : "0";
                flashVars += ebFormat("&ebShouldAutoExpand={0}", shouldExpend);
            } else {}
        }
        var win = gEbDisplayPage.TI.getWin();
        win.gEbPageGUID = win.gEbPageGUID ? win.gEbPageGUID : this.adData.strRand;
        flashVars += ebFormat("&ebPageGUID={0}", win.gEbPageGUID);
        if (this.ad && this.ad.customFlashVars) {
            var customFlashVars = "";
            for (var prop in this.ad.customFlashVars) {
                customFlashVars += ebFormat("&{0}={1}", prop, this.ad.customFlashVars[prop]);
            }
            flashVars += customFlashVars;
        }
        return flashVars;
    }
    function collectURL() {
        try {
            if (ebIsPreview())
                return;
            if (this.adData.fCollectURL) {
                var adId = this.adData.nAdID;
                var url = ebGetMainPageURL();
                var img = new Image();
                img.src = ebStrProtocol + ebBS + '/BurstingPipe/adServer.bs?cn=curl&ai=' + adId + '&url=$$' + url + '$$';
            }
        } catch (e) {}
    }
    function appendAS3Res(objRef, resObj, container) {
        var flashVars = objRef.buildFlashVars(objRef.id);
        flashVars = "<PARAM NAME=\"FlashVars\" VALUE=\"" + flashVars + "\">";
        container.prevInnerHTML = container.prevInnerHTML.replace("<PARAM NAME=\"FlashVars\" VALUE=\"\">", flashVars);
        container.innerHTML = container.prevInnerHTML;
        if (typeof(objRef.onShowRes) == 'function')
            objRef.onShowRes();
        updateVideoDriversRefs(objRef, resObj);
        updateMouseTrackersRefs(objRef, resObj);
    }
    function updateVideoDriversRefs(objRef, resObj) {
        for (var i = 0; i < objRef.arrVideoLoaderDrivers.length; i++) {
            if (objRef.arrVideoLoaderDrivers[i].resObj.id == resObj.id)
                objRef.arrVideoLoaderDrivers[i].resObj = objRef.getElementById(resObj.id);
        }
    }
    function updateMouseTrackersRefs(objRef, resObj) {
        for (var i in objRef.arrMouseTrackerComponent) {
            if (objRef.getElementById(i) && i.indexOf("eb") == 0) {
                if (typeof(objRef.arrMouseTrackerComponent[i]) == "object") {
                    if (objRef.arrMouseTrackerComponent[i][0].flashObj.id == resObj.id)
                        objRef.arrMouseTrackerComponent[i][0].flashObj = objRef.getElementById(resObj.id);
                }
            }
        }
    }
    function detectBW(bwParams, nLoadedSize, dtNow) {
        var nDLFromCacheLimit = 10000;
        var nDeltaLoaded = (nLoadedSize - bwParams.nInitialLoadedSize) * 8 / 1024;
        if (bwParams.nInitialLoadedSize == 0) {
            bwParams.nStartDlTime = dtNow;
            bwParams.nInitialLoadedSize = nLoadedSize;
        } else {
            var nDeltaTime = (dtNow - bwParams.nStartDlTime) / 1000;
            var nCurrBW = nDeltaLoaded / nDeltaTime;
            if ((nCurrBW < nDLFromCacheLimit) && (nCurrBW > 0))
                bwParams.nBWVal = parseInt(nCurrBW);
            else {
                bwParams.nStartDlTime = dtNow;
                bwParams.nInitialLoadedSize = nLoadedSize;
            }
        }
    }
    function getInteractionObj(templateObj, strName) {
        try {
            while (strName.charAt(0) == " ") {
                strName = strName.subStr(1, strName.length);
            }
            while (strName.charAt(strName.length) == " ") {
                strName = strName.subStr(0, strName.length - 1);
            }
            var interactions = templateObj.interactions;
            var lowerName = strName.toLowerCase();
            return interactions[lowerName];
        } catch (e) {}
    }
    function updateClicks(objRef) {
        objRef.adData.clickTrackingURLs.add(objRef.adData.strNClickUrl);
        if (objRef.ad.clickTrackingURLs) {
            objRef.adData.clickTrackingURLs.addMultiple(objRef.ad.clickTrackingURLs);
        } else {
            var inter = objRef.ad.interactions["_eyeblaster"];
            objRef.adData.clickTrackingURLs.add(inter.RS.strNUrl);
            objRef.adData.clickTrackingURLs.add(inter.RS.strAUrl);
            inter.RS.strNUrl = "";
            inter.RS.strAUrl = "";
        }
    }
    function updateAdInteractions(objRef) {
        try {
            var interactions = objRef.interactions;
            var adminInteractions = objRef.ad.interactions;
            for (var attr in adminInteractions) {
                try {
                    var inter = adminInteractions[attr];
                    if ((typeof(inter) == "object") && (typeof(inter.RS) != "undefined")) {
                        var lowerAttr = attr.toLowerCase();
                        if (typeof(interactions[lowerAttr]) != "object")
                            interactions[lowerAttr] = new ebCInteraction(attr, adminInteractions[attr].nType);
                        interactions[lowerAttr].update(adminInteractions[attr]);
                    }
                } catch (e) {}
            }
        } catch (e) {}
    }
    function setAutoInteractions(objRef) {
        try {
            var interactions = objRef.interactions;
            var eyeInter = interactions["_eyeblaster"];
            eyeInter.nInitiated = 1;
            eyeInter.nCategory = 2;
            interactions["ebdefaultclick"] = new ebCInteraction("ebDefaultClick", 0);
            var defaultClick = interactions["ebdefaultclick"];
            defaultClick.update(eyeInter);
            var inter;
            if (!isStdAdFormat(objRef)) {
                setAutoInteraction(objRef, "ebClose", 0, 2, true);
                setAutoInteraction(objRef, "ebFullPlay", 0, 2);
                setAutoInteraction(objRef, "ebAdDuration", 1, 2);
                setAutoInteraction(objRef, "ebIntDuration", 1, 2);
                setAutoInteraction(objRef, "ebDwellTime", 1, 2);
                inter = setAutoInteraction(objRef, "ebUniqueDwell", 0, 2, false, 0, 1);
                inter.fAlwaysReportImmediatly = true;
                setAutoInteraction(objRef, "ebReplay", 0, 2, false, 1);
                setAutoInteraction(objRef, "ebUserInteraction", 0, 2, false, 0, 1);
            }
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_RECORDABLE, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_RECORDABLE_BASIC, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_RECORDABLE_ENHANCED, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_IAB, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_AGENCY, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_ADVERTISER, 0, 2, false, 0, 1);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_AGENCY_DURATION, 1, 2);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_ADVERTISER_DURATION, 1, 2);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_AVG_SURFACE, 1, 2);
            setAutoInteraction(objRef, VisibilityInteractions.EB_VIS_AVG_SCREEN_SHARE, 1, 2);
            var inter = setAutoInteraction(objRef, "_emptyPipe", 0, 2);
            inter.fAlwaysReportImmediatly = true;
        } catch (e) {}
    }
    function setVideoInteractions(objRef) {
        try {
            if (!isStdAdFormat(objRef)) {
                var interactions = objRef.interactions;
                setAutoInteraction(objRef, "ebVideoStarted", 0, 1);
                setAutoInteraction(objRef, "eb25Per_Played", 0, 1);
                setAutoInteraction(objRef, "eb50Per_Played", 0, 1);
                setAutoInteraction(objRef, "eb75Per_Played", 0, 1);
                setAutoInteraction(objRef, "ebVideoFullPlay", 0, 1);
                setAutoInteraction(objRef, "ebVideoMute", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebVideoUnmute", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebVideoPause", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebVideoReplay", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebSliderDragged", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebVideoUnmuted", 0, 1);
                setAutoInteraction(objRef, "ebVideoPlayDuration", 1, 1);
                setAutoInteraction(objRef, "ebUniqueVideoStarted", 0, 1, false, 0, 1);
                setAutoInteraction(objRef, "ebUserInitiatedVideo", 0, 1, false, 0, 1);
                setAutoInteraction(objRef, "ebFSEnd", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebFSStart", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebFSVideoPause", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebFSVideoMute", 0, 1, false, 1);
                setAutoInteraction(objRef, "ebFSVideoPlayDuration", 1, 1);
                setVideoTimersPerAsset(objRef);
                initVideoProgressInterArr(objRef);
            }
        } catch (e) {}
    }
    function setAutoInteraction(objRef, strName, nType, nCategory, fCloseFlag, nInitiated, nReportLimit) {
        if (typeof(fCloseFlag) == "undefined")
            fCloseFlag = false;
        if (typeof(nInitiated) == "undefined")
            nInitiated = 0;
        var interactions = objRef.interactions;
        var strLowerName = strName.toLowerCase();
        if ((typeof(interactions[strLowerName]) != "object") || (nCategory != 1))
            interactions[strLowerName] = new ebCInteraction(strName, nType);
        else 
            interactions[strLowerName].setType(nType);
        var inter = interactions[strLowerName];
        inter.fCountAsClick = 0;
        inter.fShouldReport = true;
        inter.fCloseFlag = (fCloseFlag == true) ? 1 : 0;
        inter.nInitiated = nInitiated;
        inter.nCategory = nCategory;
        if (typeof(nReportLimit) != "undefined")
            inter.numLeftToReport = nReportLimit;
        return inter;
    }
    function findPositionObj(objRef, resName) {
        var nameParts = resName.split("_");
        var resFormat = nameParts[0] + "_";
        var posObj = null;
        switch (resFormat) {
        case "ebIntro_":
        case "ebIntroFlash_":
        case "ebFloatingAd_":
            posObj = objRef.introPosition;
            break;
        case "ebRem_":
        case "ebRemFlash_":
            posObj = objRef.remPosition;
            break;
        case "ebMiniSite_":
            posObj = objRef.miniSitePosition;
            break;
        }
        return posObj;
    }
    function buildAdditionalResStr(objRef) {
        if (typeof(objRef.ad.additionalAssetsArray) == "undefined")
            return "";
        var strAdditionalRes = "";
        var assets = objRef.ad.additionalAssetsArray;
        for (var strName in assets) {
            try {
                if (!(assets[strName] instanceof Array))
                    continue;
                var asset = assets[strName];
                strAdditionalRes = getNameAsset(strName, strAdditionalRes);
                var nTotalRes = 0;
                for (var i = 0; i < asset.length; i++) {
                    if (asset[i])
                        nTotalRes += asset[i].length;
                }
                if (nTotalRes > 1)
                    continue;
                else {
                    var info = getOldAssetProperties(objRef, strName);
                    strAdditionalRes += getUrlAsset(info.strURL);
                }
            } catch (e) {}
        }
        for (var name in objRef.ad.nonVideoAssets) {
            try {
                if (typeof (objRef.ad.nonVideoAssets[name].url) == "undefined") {
                    continue;
                }
                strAdditionalRes = getNameAsset(name, strAdditionalRes);
                strAdditionalRes += getUrlAsset(objRef.ad.nonVideoAssets[name].url);
            } catch (e) {}
        }
        for (var name in objRef.ad.DynamicContentResources) {
            try {
                if (typeof (objRef.ad.DynamicContentResources[name].url) == "undefined") {
                    continue;
                }
                strAdditionalRes = getNameAsset(name, strAdditionalRes);
                strAdditionalRes += getUrlAsset(objRef.ad.DynamicContentResources[name].url, true);
            } catch (e) {}
        }
        return strAdditionalRes;
    }
    function getNameAsset(name, additionalRes) {
        if (additionalRes != "")
            additionalRes += "&";
        additionalRes += name + "=";
        return additionalRes;
    }
    function getUrlAsset(urlAdditionalAsset, fUseRelativePath) {
        if (typeof(fUseRelativePath) == "undefined")
            fUseRelativePath = false;
        var additionalRes = "";
        if (gEbFlyLocal)
            additionalRes += urlAdditionalAsset;
        else if (gEbfOfflineDemo && (urlAdditionalAsset.substr(urlAdditionalAsset.length - 4).toLowerCase() == ".flv") || (urlAdditionalAsset.substr(urlAdditionalAsset.length - 4).toLowerCase() == ".mp4")) {
            var nIndex = urlAdditionalAsset.lastIndexOf("/");
            additionalRes += urlAdditionalAsset.substring(nIndex + 1);
        } else {
            if (!fUseRelativePath)
                additionalRes += ebResourcePath;
            additionalRes += urlAdditionalAsset;
        }
        return additionalRes;
    }
    function getBestBitrateAsset(objRef, nBW, arrAssets, fStreaming) {
        var nIndex =- 1;
        if ((nBW==-1) || gEbfOfflineDemo) {
            return (arrAssets.length > 0) ? 0 : ( - 1);
        }
        if (fStreaming) {
            for (var i = 0; i < arrAssets.length; i++) {
                if (arrAssets[i].nBitRate <= nBW) {
                    nIndex = i;
                    break;
                }
            }
        } else {
            var nMinDiff =- 1;
            for (var i = 0; i < arrAssets.length; i++) {
                var nDiff = (arrAssets[i].nBitRate - nBW);
                if (nDiff < 0)
                    nDiff =- nDiff;
                if ((nMinDiff==-1) || (nDiff < nMinDiff)) {
                    nMinDiff = nDiff;
                    nIndex = i;
                }
            }
        }
        return nIndex;
    }
    function getLowestBitrateAsset(origAsset, nWMPVer, nFlashVer) {
        var assets = new Array(null, null, null, null);
        var nWMVBitrate = 0, nFLV8Bitrate = 0, nFLV7Bitrate = 0, nH264Bitrate = 0;
        var WMVAsset, FLV8Asset, FLV7Asset, H264Asset;
        if ((nWMPVer >= 9) && (origAsset[0].length > 0)) {
            WMVAsset = new Array(0, origAsset[0].length - 1);
            nWMVBitrate = origAsset[0][origAsset[0].length - 1].nBitRate;
        }
        if ((nFlashVer >= 8) && (origAsset[1].length > 0)) {
            FLV8Asset = new Array(1, origAsset[1].length - 1);
            nFLV8Bitrate = origAsset[1][origAsset[1].length - 1].nBitRate;
        }
        if ((nFlashVer >= 7) && (origAsset[2].length > 0)) {
            FLV7Asset = new Array(2, origAsset[2].length - 1);
            nFLV7Bitrate = origAsset[2][origAsset[2].length - 1].nBitRate;
        }
        if ((nFlashVer >= 9.0115) && (origAsset[4].length > 0)) {
            H264Asset = new Array(4, origAsset[4].length - 1);
            nH264Bitrate = origAsset[4][origAsset[4].length - 1].nBitRate;
        }
        if (H264Asset) {
            if ((!nFLV8Bitrate || (nH264Bitrate <= nFLV8Bitrate)) && (!nWMVBitrate || (nH264Bitrate <= nWMVBitrate)) && (!nFLV7Bitrate || (nH264Bitrate <= nFLV7Bitrate))) {
                assets[4] = H264Asset;
                return assets;
            }
        }
        if (FLV8Asset) {
            if ((!nWMVBitrate || (nFLV8Bitrate <= nWMVBitrate)) && (!nFLV7Bitrate || (nFLV8Bitrate <= nFLV7Bitrate)) && (!nH264Bitrate || (nFLV8Bitrate <= nH264Bitrate))) {
                assets[1] = FLV8Asset;
                return assets;
            }
        }
        if (WMVAsset) {
            if ((!nFLV8Bitrate || (nWMVBitrate <= nFLV8Bitrate)) && (!nFLV7Bitrate || (nWMVBitrate <= nFLV7Bitrate)) && (!nH264Bitrate || (nWMVBitrate <= nH264Bitrate))) {
                assets[0] = WMVAsset;
                return assets;
            }
        }
        if (FLV7Asset) {
            if ((!nFLV8Bitrate || (nFLV7Bitrate <= nFLV8Bitrate)) && (!nWMVBitrate || (nFLV7Bitrate <= nWMVBitrate)) && (!nH264Bitrate || (nFLV7Bitrate <= nH264Bitrate))) {
                assets[2] = FLV7Asset;
                return assets;
            }
        }
        return assets;
    }
    function handleAutoInteraction(objRef, strName, strObjID) {
        try {
            var interactions = objRef.interactions;
            var inter = getInteractionObj(objRef, strName);
            if (typeof(inter) == 'undefined') {
                return;
            }
            if (inter.fIsBusy) {
                return;
            }
            if (typeof(objRef.adData.customEventHandler) != "undefined") {
                objRef.adData.customEventHandler.onHandleInteraction(objRef.objName, strName, strObjID);
            }
            var intData = new ebCInteractionData(1, 0, "", "", "");
            handleInteraction(objRef, inter, intData);
        } catch (e) {}
    }
    function handleInteraction(objRef, inter, intData) {
        var interactions = objRef.interactions;
        interactions.nNumInteractions++;
        if ((inter.fCloseFlag) && objRef.fCloseable)
            inter.fAdIsClosing = true;
        if (inter.nInitiated) {
            objRef.handleSystemInteraction("ebUserInteraction");
            objRef.dwellTimeManager.handleUserInteraction();
        }
        if ((inter.strName == "ebVideoStarted") && inter.nUnique)
            objRef.handleVideoInteraction("ebUniqueVideoStarted");
        intData.nNumInteractions = interactions.nNumInteractions;
        intData.adData = objRef.adData;
        inter.handle(intData);
        if (inter.fCloseFlag) {
            if (typeof (objRef.close) == "function") {
                if (gEbBC.isSafari()) {
                    var strFunc = objRef.objName + ".close();";
                    window.setTimeout(strFunc, 100);
                } else {
                    objRef.close();
                }
            } else {}
            if (objRef.fsManager)
                objRef.fsManager.doOnEbQuit();
        }
    }
    function getOldAssetProperties(objRef, strMovieName) {
        try {
            var asset = objRef.ad.additionalAssetsArray[strMovieName];
            for (var i = 0; i < asset.length; i++) {
                if (asset[i]) {
                    return asset[i][0];
                }
            }
        } catch (e) {}
    }
    function setInteractionAssetID(objRef, strIntName, nMovieNum) {
        try {
            var strMovieName = "ebMovie" + nMovieNum;
            var assets = objRef.ad.additionalAssetsArray;
            var inter = getInteractionObj(objRef, strIntName);
            if (typeof(inter) == 'undefined') {
                return;
            }
            if (assets[strMovieName]) {
                var usedAsset = objRef.usedAdditionalAssets[strMovieName];
                var assetInfo;
                var assetID;
                if (usedAsset) {
                    assetInfo = objRef.getUsedAssetProperties(strMovieName, usedAsset);
                } else {
                    assetInfo = getOldAssetProperties(objRef, strMovieName);
                }
                assetID = assetInfo.nAssetID;
                if (!assetID)
                    assetID = 0;
                inter.nAssetID = assetID;
            } else 
                inter.nAssetID = 0;
        } catch (e) {}
    }
    function setVideoTimersPerAsset(objRef) {
        try {
            var assets = objRef.ad.additionalAssetsArray;
            if (typeof(assets) != "undefined") {
                setAssetVideoTimers(objRef, "ebMovie0");
                for (var strName in assets)
                    setAssetVideoTimers(objRef, strName);
            }
        } catch (e) {}
    }
    function setVideoTimer(objRef, strTimerName, strReportingName) {
        try {
            setAutoInteraction(objRef, strTimerName, 1, 1);
            var inter = getInteractionObj(objRef, strTimerName);
            inter.strName = strReportingName;
            if (typeof(nAssetID) != "undefined")
                inter.nAssetID = nAssetID;
        } catch (e) {}
    }
    function timerHandler(objRef, strName, nType, nValue) {
        var interactions = objRef.interactions;
        var lowerName = strName.toLowerCase();
        var inter = getInteractionObj(objRef, strName);
        if (typeof (inter) == 'undefined') {
            {}
            return;
        }
        if (inter.nType != 1) {
            {}
            return;
        }
        inter.handle(nType, objRef.adData, nValue);
    }
    function updateVideoReportedInter(objRef, strIntName) {
        try {
            var inter = getInteractionObj(objRef, strIntName);
            if (typeof(inter) == 'undefined') {
                return false;
            }
            var assetID = inter.nAssetID;
            var newInter = objRef.arrVideoProgressInter[strIntName];
            if (typeof(newInter) == "undefined")
                return true;
            var oldInter = objRef.arrReportedVideoInter[assetID];
            if (typeof(oldInter) == "undefined")
                oldInter =- 1;
            if (newInter > oldInter) {
                inter.numLeftToReport++;
                objRef.arrReportedVideoInter[assetID] = newInter;
                return true;
            }
            return false;
        } catch (e) {}
    }
    function initVideoProgressInterArr(objRef) {
        objRef.arrVideoProgressInter = new Object();
        objRef.arrVideoProgressInter["ebVideoStarted"] = 0;
        objRef.arrVideoProgressInter["eb25Per_Played"] = 1;
        objRef.arrVideoProgressInter["eb50Per_Played"] = 2;
        objRef.arrVideoProgressInter["eb75Per_Played"] = 3;
        objRef.arrVideoProgressInter["ebVideoFullPlay"] = 4;
    }
    function addElementMouseTracker(objRef, objName, flashObj, proxyPath, nIndex, oldVer) {
        try {
            objRef.arrMouseTrackerComponent[objName][nIndex] = new Object();
            objRef.arrMouseTrackerComponent[objName][nIndex].proxyPath = proxyPath;
            objRef.arrMouseTrackerComponent[objName][nIndex].flashObj = flashObj;
            if (oldVer)
                objRef.arrMouseTrackerComponent[objName][nIndex].oldVer = oldVer;
        } catch (e) {}
    }
    function registerMouseMove(objRef) {
        try {
            if (!gEbMouseMove) {
                objRef.adTI.addEventHandler("mousemove", "ebOnMouseMove", objRef.adTI.getDoc());
                gEbMouseMove = true;
            }
        } catch (e) {}
    }
    function isStdAdFormat(objRef) {
        return ((typeof(objRef.ad.isStdAdFormat) != "undefined") && objRef.ad.isStdAdFormat);
    }
    function isFSCmdSupported(objRef, strLowerCmd) {
        var supported = true;
        if (isStdAdFormat(objRef)) {
            if ((strLowerCmd == "ebcommand") || (strLowerCmd == "ebmsg") || (strLowerCmd == "ebsetstate") || (strLowerCmd == "ebresetstate") || (strLowerCmd == "ebmousetracker") || (strLowerCmd == "ebvideoload") || (strLowerCmd == "ebvideoloadandplay")) {
                supported = false;
            }
        }
        return supported;
    }
}
function ebCBWDetectionParams() {
    this.nStartDlTime = 0;
    this.nInitialLoadedSize = 0;
    this.nBWVal =- 1;
}
function ebDoOnBannerScriptLoad() {
    var eyeIndex = gEbBanners.length - 1;
    var ready = true;
    var strFlagSuf = "WasLoaded";
    var adLoadIndication = "gnEbAd_" + gEbBanners[eyeIndex].adData.nAdID + strFlagSuf;
    try {
        if (typeof(eval(adLoadIndication)) == "undefined") {
            ready = false;
        }
    } catch (e) {
        ready = false;
    }
    if (ready) {
        gEbBanners[eyeIndex].adData.customEventHandler.onClientScriptsLoaded("gEbBanners[" + eyeIndex + "]");
        gEbBanners[eyeIndex].createDisplayUnit();
    }
    return ready;
}
function ebOnScriptLoaded(name) {
    try {
        var fileName = "";
        if (name.indexOf("eb") != 0)
            fileName = "eb" + name;
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++) {
                if (gEbBanners[i].displayUnit != null) {
                    var funcName = "doOn" + name + "Load";
                    if (gEbBanners[i].displayUnit[funcName])
                        gEbBanners[i].displayUnit[funcName]();
                }
            }
        }
    } catch (e) {}
}
function ebOnloadHandler() {
    try {
        gEbDocLoaded = true;
        gEbDisplayPage.TI.addEyeDiv();
        var strFunc = "gEbDisplayPage.removeInterval('resize');";
        window.setTimeout(strFunc, 1000);
        if (typeof(gEbEyes) != "undefined") {
            for (var i = 0; i < gEbEyes.length; i++) {
                gEbEyes[i].doOnLoad();
                if (gEbEyes[i].displayUnit != null)
                    if (typeof(gEbEyes[i].displayUnit.doOnload) == 'function')
                        gEbEyes[i].displayUnit.doOnload();
            }
        }
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++)
                gEbBanners[i].doOnLoad();
        }
        ebGlobalAction("notifyPageLoad()");
    } catch (e) {}
}
gYahoo_adinit = ebOnloadHandler;
var gfEbUnloadHandled = false;
function ebOnUnloadHandler() {
    try {
        if (gfEbUnloadHandled)
            return;
        gfEbUnloadHandled = true;
        if (typeof(gEbEyes) != "undefined") {
            for (var i = 0; i < gEbEyes.length; i++) {
                if (gEbEyes[i].displayUnit != null) {
                    gEbEyes[i].displayUnit.handleUnload();
                    var win = gEbEyes[i].displayUnit.adTI.win;
                    gEbEyes[i].displayUnit.showHidePageElements(true, win);
                }
            }
        }
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++) {
                if (gEbBanners[i].displayUnit != null)
                    gEbBanners[i].displayUnit.handleUnload();
            }
        }
    } catch (e) {}
}
function ebOnResize() {
    try {
        gEbDisplayPage.TI.adjustEyeDivPos();
        ebGlobalAction("handleResize()");
    } catch (e) {}
}
function ebOnScroll() {
    ebGlobalAction("handleScroll()");
}
function ebOnBlur() {
    ebGlobalAction("handleBlur()");
}
function ebOnFocus() {
    ebGlobalAction("handleFocus()");
}
function ebOnVisibleHidden() {
    ebGlobalAction("handleVisibleHidden()");
}
function ebOnResMove(resObj) {
    try {
        if (typeof(gEbEyes) != "undefined") {
            for (var i = 0; i < gEbEyes.length; i++) {
                if (gEbEyes[i].displayUnit != null)
                    gEbEyes[i].displayUnit.handleResMove(resObj);
            }
        }
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++) {
                if (gEbBanners[i].displayUnit != null)
                    gEbBanners[i].displayUnit.handleResMove(resObj);
            }
        }
    } catch (e) {}
}
function ebOnKeyDown(e) {
    try {
        if (typeof(e) == "undefined")
            e = gEbDisplayPage.TI.getWin().event;
        var nKeyCode = e.keyCode;
        ebGlobalAction(ebFormat("handleKeyDown({0})", nKeyCode));
    } catch (e) {}
}
function ebMaxTime() {
    try {
        ebMaxTimePassed = true;
        ebReportAllInteractions(true);
        if (gEbBC.isIE()) {
            window.detachEvent("onunload", ebReportAllInteractions);
            window.detachEvent("onbeforeunload", ebReportAllInteractions);
        } else {
            window.removeEventListener("beforeunload", ebReportAllInteractions, false);
            window.removeEventListener("unload", ebReportAllInteractions, false);
        }
    } catch (e) {}
}
function ebReportAllInteractions(fUseImg) {
    try {
        if (gEbfOfflineDemo) {
            return;
        }
        if (gEbfIntReported) {
            {}
            return;
        }
        if (typeof (gEbBanners) != "undefined" || typeof (gEbEyes) != "undefined") {
            if (typeof (gEbBanners) != "undefined") {
                for (var i = 0; i < gEbBanners.length; i++) {
                    if (gEbBanners[i].displayUnit != null) {
                        gEbBanners[i].displayUnit.handleAverageInteractions();
                    }
                }
            }
            if (typeof (gEbEyes) != "undefined") {
                for (var i = 0; i < gEbEyes.length; i++) {
                    if (gEbEyes[i].displayUnit != null) {
                        gEbEyes[i].displayUnit.handleAverageInteractions();
                    }
                }
            }
        }
        ebMaxTimePassed = true;
        gEbfIntReported = true;
        if (typeof(gEbBanners) != "undefined")
            ebReportInteractions(gEbBanners);
        if (typeof(gEbEyes) != "undefined")
            ebReportInteractions(gEbEyes);
    } catch (e) {}
}
function ebReportInteractions(eyesArray) {
    if (typeof(fUseImg) != "boolean")
        fUseImg = false;
    var defInter = null;
    var sTimers = "";
    var sCounters = "";
    for (var index = 0; index < eyesArray.length; index++) {
        var DU = eyesArray[index].displayUnit;
        if (DU != null) {
            DU.handleAverageInteractions();
            if (sTimers)
                sTimers += '|';
            if (sCounters)
                sCounters += '|';
            defInter = DU.interactions["_eyeblaster"];
            var adReportData = defInter.getAdReportData(DU.adData);
            var adCounters = DU.collectCounters();
            var adTimers = DU.collectTimers(false);
            if (!gEbBC.isOpera()) {
                if (adCounters || adTimers)
                    sTimers += ebFormat("{0}{1}{2}", adReportData, adCounters, adTimers);
            } else {
                if (adCounters)
                    sCounters += ebFormat("{0}{1}", adReportData, adCounters);
                if (adTimers)
                    sTimers += ebFormat("{0}{1}", adReportData, adTimers);
            }
        }
    }
    var intToReport = new Array();
    if (sCounters)
        intToReport[intToReport.length] = sCounters;
    if (sTimers) {
        if (gEbBC.isOpera()) {
            sTimers += ebFormat("&iseq={0}", gEbnIntSeq);
        }
        intToReport[intToReport.length] = sTimers;
    }
    for (var i = 0; i < intToReport.length; i++) {
        var reportUrl = ebFormat("{0}&int={1}{2}", defInter.getPipeUrl(), intToReport[i], defInter.getPipeParams());
        var reportingFlash = document.getElementById("ebReportingFlash");
        var ifFF4AndUpORSafari = (gEbBC.isFF() && gEbBC.getVersion() > 4) || gEbBC.isSafari() || gEbBC.isOpera();
        if (!fUseImg && reportingFlash != null&&!ifFF4AndUpORSafari) {
            reportingFlash.LoadMovie(0, reportUrl);
        } else {
            var fReported = false;
            var fUseXMLHttp = (gEbBC.isSafari() ||!reportingFlash || ifFF4AndUpORSafari);
            if (fUseXMLHttp&&!fUseImg)
                fReported = ebXMLHttpRequest(reportUrl, false);
            if (!fReported) {
                defInter.reportingImg = new Image();
                defInter.reportingImg.src = reportUrl;
            }
        }
    }
}
var gfEbMouseActive = true;
gEbLastMouseMove = new Date().getTime();
if (typeof(gEbMouseX) == "undefined")
    gEbMouseX = 0;
if (typeof(gEbMouseY) == "undefined")
    gEbMouseY = 0;
if (typeof(gEbInMouseMove) == "undefined")
    gEbInMouseMove = false;
function ebOnMouseMove(e) {
    try {
        if (gEbBC.isIE()) {
            gEbMouseX = e.clientX;
            gEbMouseY = e.clientY;
        } else {
            gEbMouseX = e.pageX;
            gEbMouseY = e.pageY;
        }
        gEbInMouseMove = true;
        if (gEbVideoLoader) {
            gEbLastMouseMove = new Date().getTime();
            if (!gfEbMouseActive) {
                gfEbMouseActive = true;
                ebSetMouseActive(true);
            }
        }
    } catch (e) {}
}
function ebCheckMouseActive() {
    if (!gfEbMouseActive)
        return;
    var dtNow = new Date().getTime();
    var nTimeSinceLastMove = dtNow - gEbLastMouseMove;
    if (nTimeSinceLastMove >= 60 * 1000) {
        gfEbMouseActive = false;
        ebSetMouseActive(false);
    }
}
function ebSetMouseActive(fActive) {
    ebGlobalAction(ebFormat("handleMouseActive({0})", fActive));
}
function ebOnMouseOutOfVideo(e) {
    if (typeof(e) == "undefined")
        e = gEbDisplayPage.TI.getWin().event;
    if (typeof(gEbEyes) != "undefined") {
        for (var i = 0; i < gEbEyes.length; i++) {
            if (gEbEyes[i].displayUnit != null)
                gEbEyes[i].displayUnit.handleMouseOutOfVideo(e);
        }
    }
    if (typeof(gEbBanners) != "undefined") {
        for (var i = 0; i < gEbBanners.length; i++) {
            if (gEbBanners[i].displayUnit != null)
                gEbBanners[i].displayUnit.handleMouseOutOfVideo(e);
        }
    }
}
function ebOnMouseOverAd(e) {
    if (typeof(e) == "undefined")
        e = gEbDisplayPage.TI.getWin().event;
    if (typeof(gEbEyes) != "undefined") {
        for (var i = 0; i < gEbEyes.length; i++) {
            if (gEbEyes[i].displayUnit != null)
                gEbEyes[i].displayUnit.handleMouseOverAd(e);
        }
    }
    if (typeof(gEbBanners) != "undefined") {
        for (var i = 0; i < gEbBanners.length; i++) {
            if (gEbBanners[i].displayUnit != null)
                gEbBanners[i].displayUnit.handleMouseOverAd(e);
        }
    }
}
function ebOnMouseOutOfAd(e) {
    if (typeof(e) == "undefined")
        e = gEbDisplayPage.TI.getWin().event;
    var fromElem = gEbBC.isIE() ? e.srcElement: eval(e.target);
    var elementId = (typeof(fromElem.id) != "undefined") ? fromElem.id : "";
    var toElem = gEbBC.isIE() ? e.toElement: e.relatedTarget;
    if (toElem && toElem.id && (typeof(toElem.id) != "undefined") && elementId && ((toElem.id.indexOf(elementId)!=-1) || (elementId.indexOf(toElem.id)!=-1))) {
        return;
    }
    if (typeof(gEbEyes) != "undefined") {
        for (var i = 0; i < gEbEyes.length; i++) {
            if (gEbEyes[i].displayUnit != null)
                gEbEyes[i].displayUnit.handleMouseOutOfAd(e);
        }
    }
    if (typeof(gEbBanners) != "undefined") {
        for (var i = 0; i < gEbBanners.length; i++) {
            if (gEbBanners[i].displayUnit != null)
                gEbBanners[i].displayUnit.handleMouseOutOfAd(e);
        }
    }
}
function ebGetRealLeft(obj) {
    try {
        var xPos = gEbBC.isSafari() ? ebCalcRealOffsetSafari(obj, true): ebCalcRealOffset(obj, true);
        return (xPos);
    } catch (e) {
        return 0;
    }
}
function ebGetRealTop(obj) {
    try {
        var yPos = gEbBC.isSafari() ? ebCalcRealOffsetSafari(obj, false): ebCalcRealOffset(obj, false);
        return yPos;
    } catch (e) {
        return 0;
    }
}
function ebCalcRealOffset(obj, fLeft) {
    try {
        var TI = (typeof(gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI : (typeof(gEbStdGlobals) != "undefined") ? gEbStdGlobals.TIBase: gEbTI;
        var nPos = fLeft ? obj.offsetLeft: obj.offsetTop;
        var tempEl = obj;
        var tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
        while (tempEl.offsetParent != null) {
            tempEl = tempEl.offsetParent;
            tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
            nPos += ebCalcBorderOffset(fLeft, tempEl);
            var nOffset = fLeft ? tempEl.offsetLeft: tempEl.offsetTop;
            nPos += nOffset;
        }
        if (gEbBC.isOpera()) {
            var box = (obj && obj.getBoundingClientRect) ? obj.getBoundingClientRect(): null;
            nPos = fLeft ? box.left : box.top;
        }
        return nPos;
    } catch (e) {
        return 0;
    }
}
function ebCalcBodyOffsetLeft(obj) {
    var TI = (typeof(gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI : (typeof(gEbStdGlobals) != "undefined") ? gEbStdGlobals.TIBase: gEbTI;
    var tempEl = obj;
    var tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
    while (tempEl.offsetParent != null) {
        tempEl = tempEl.offsetParent;
        tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
    }
    var nOffset = 0;
    var fIsBody = (tempEl.tagName.toLowerCase() == "body");
    if (fIsBody && (tempElPos != "static")&&!gEbBC.isIE()) {
        var bodyWidth = TI.getCurrentStyleAttr(tempEl, "width");
        bodyWidth = parseInt(bodyWidth);
        nOffset = parseInt((TI.calcClientAreaWidthMozilla() - bodyWidth) / 2);
        if (nOffset < 0)
            nOffset = 0;
    }
    return nOffset;
}
function ebCalcRealOffsetSafari(obj, fLeft) {
    var TI = (typeof(gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI : (typeof(gEbStdGlobals) != "undefined") ? gEbStdGlobals.TIBase: gEbTI;
    if ((obj.tagName.toLowerCase() == "embed") && obj.parentNode && (obj.parentNode.tagName.toLowerCase() == "object")) {
        obj = obj.parentNode;
    }
    var nPos = fLeft ? obj.offsetLeft: obj.offsetTop;
    var tempEl = obj;
    var tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
    var fFloating = (tempElPos == "absolute");
    var fPrevAbsolute = (tempElPos == "absolute");
    while (tempEl.offsetParent != null) {
        tempEl = tempEl.offsetParent;
        tempElPos = TI.getCurrentStyleAttr(tempEl, "position");
        nPos += ebCalcBorderOffset(fLeft, tempEl);
        var fIsBody = (tempEl.tagName.toLowerCase() == "body");
        if (fIsBody && fFloating && fPrevAbsolute)
            continue;
        fPrevAbsolute = false;
        if (tempElPos == "absolute") {
            fFloating = true;
            fPrevAbsolute = true;
        }
        var nOffset = fLeft ? tempEl.offsetLeft: tempEl.offsetTop;
        nPos += nOffset;
    }
    return nPos;
}
function ebCalcBorderOffset(fLeft, refObj) {
    var nBorderOffset = 0;
    var fIsBody = (refObj.tagName.toLowerCase() == "body");
    var fIsTable = (refObj.tagName.toLowerCase() == "table");
    if ((fIsTable || fIsBody) && (gEbBC.isIE() || gEbBC.isFF()))
        return 0;
    if (refObj.tagName.toLowerCase() == "td" && (gEbBC.isFF() && gEbBC.getVersion() <= 2))
        return 0;
    var TI = (typeof(gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI : (typeof(gEbStdGlobals) != "undefined") ? gEbStdGlobals.TIBase: gEbTI;
    var strBorderLeftWidth = gEbBC.isIE() ? "borderLeftWidth" : "border-left-width";
    var strBorderTopWidth = gEbBC.isIE() ? "borderTopWidth" : "border-top-width";
    var strBorderLeftStyle = gEbBC.isIE() ? "borderLeftStyle" : "border-left-style";
    var strBorderTopStyle = gEbBC.isIE() ? "borderTopStyle" : "border-top-style";
    var borderWidth = fLeft ? TI.getCurrentStyleAttr(refObj, strBorderLeftWidth): TI.getCurrentStyleAttr(refObj, strBorderTopWidth);
    var borderStyle = fLeft ? TI.getCurrentStyleAttr(refObj, strBorderLeftStyle): TI.getCurrentStyleAttr(refObj, strBorderTopStyle);
    if (borderStyle != "none") {
        switch (borderWidth) {
        case "thick":
            nBorderOffset = 5;
            break;
        case "medium":
            nBorderOffset = 3;
            break;
        case "thin":
            nBorderOffset = 1;
            break;
        default:
            if (borderWidth.indexOf("px")!=-1) {
                var nOffset = parseInt(borderWidth, 10);
                if (!isNaN(nOffset))
                    nBorderOffset = nOffset;
            }
            break;
        }
    }
    return nBorderOffset;
}
function ebGetAdVersions(adData) {
    var versionsWRnd = "";
    var versions = adData.sAdVersions.split(",");
    for (var i = 0; i < versions.length; i++) {
        if (versionsWRnd)
            versionsWRnd += ",";
        versionsWRnd += versions[i];
    }
    return versionsWRnd;
}
function fixMVPathString(versionString, divider) {
    if (divider > 0) {
        var versionsArray = versionString.split(",");
        var fixedVersionsString = "";
        var comma = "";
        var suffix;
        var folder;
        var version;
        for (var i = 0; i < versionsArray.length; i++) {
            version = versionsArray[i];
            suffix = "";
            folder = "";
            if (version.match("_") != null) {
                suffix = version.substr(version.indexOf("_"));
            }
            version = parseInt(version);
            folder = parseInt(version / divider);
            version = folder + suffix + '/' + version;
            fixedVersionsString += comma + version;
            if (comma == "") {
                comma = ",";
            }
        }
    }
    return fixedVersionsString;
}
function ebGetVersionToReport(adData) {
    var version = (adData.sAdVersions.indexOf(",") > - 1) ? gEbSV2Constant : ((adData.sAdVersions.indexOf("_") > - 1) ? adData.sAdVersions.substr(0, adData.sAdVersions.indexOf("_")) : adData.sAdVersions);
    return version;
}
function ebGetTargetingParams(adData) {
    var params = "";
    if (adData.sTAId)
        params += ebFormat("&ta={0}", adData.sTAId);
    if (adData.sDGId)
        params += ebFormat("&dg={0}", adData.sDGId);
    return params;
}
function ebFormat(str) {
    for (i = 1; i < arguments.length; i++) {
        str = str.replace('{' + (i - 1) + '}', "" + arguments[i]);
    }
    return str;
}
if (typeof(gEbnIntSeqArray) == "undefined" && gEbBC.isOpera())
    gEbnIntSeqArray = new Array(5, 10, 20, 40, 60, 120, 240);
function ebReportTimersInterval() {
    if (typeof (gEbBanners) != "undefined") {
        ebReportInteractions(gEbBanners);
    }
    if (typeof (gEbEyes) != "undefined") {
        ebReportInteractions(gEbEyes);
    }
    if (typeof (gEbStdBanners) != "undefined") {
        for (var i = 0; i < gEbStdBanners.length; i++) {
            if (gEbStdBanners[i].fVisibilitySupported) {
                gEbStdBanners[i].handleAverageInteractions();
            }
        }
        ebReportInteractionsStd();
    }
    gEbnIntSeq++;
    if (typeof(gEbnIntSeqArray[gEbnIntSeq]) != "undefined")
        window.setTimeout("ebReportTimersInterval()", gEbnIntSeqArray[gEbnIntSeq] * 1000);
}
function ebIsGlobalDef(varName, varValue) {
    var typeofVar = eval("typeof(" + varName + ")");
    var isDefined = (typeofVar != "undefined");
    if ((typeof (varValue) != "undefined") && isDefined) {
        isDefined = eval(varName + "==" + varValue);
    }
    return isDefined;
}
gEbSV2Constant = "m";
function ebLoadIframe(src) {
    var iframeAttr = new ebCTIObj();
    iframeAttr.src = src;
    iframeAttr.style.width = "0px";
    iframeAttr.style.height = "0px";
    iframeAttr.frameborder = 0;
    gEbTI.addIframe("append", iframeAttr);
}
function ebLoadScript(scriptID, scriptSrc) {
    try {
        var method = (!gEbDocLoaded && scriptID == "ebDownloadScript") ? "write" : "append";
        gEbTI.addScript(method, scriptSrc, scriptID, "");
    } catch (e) {}
}
function ebAddInteractionsFlash() {
    if ((typeof(gfEbUseIntFlash) != "undefined")&&!gfEbUseIntFlash)
        return;
    var TIobj = new ebCTIObj("ebReportingFlash");
    TIobj.src = ebBigS + "/Res/Empty_Movie.swf";
    TIobj.style.position = "absolute";
    TIobj.style.width = "0px";
    TIobj.style.height = "0px";
    TIobj.play = false;
    TIobj.wmode = (gEbBC.isFF() && gEbBC.getVersion() > 4) ? "transparent" : "window";
    gEbTI.addFlash("write", TIobj);
}
var gEBvideoTypes = {
    "WMV": 0,
    "FLV8": 1,
    "FLV7": 2,
    "SWF": 3,
    "MP4": 4,
    "F4V": 5
};
function ebAdjustAdObject(tempAd) {
    if (typeof(tempAd.additionalAssetsArray) == "undefined") {
        tempAd.additionalAssetsArray = new Object();
        for (var i in tempAd.additionalAssets) {
            var newAsset = tempAd.additionalAssetsArray[i] = new Array();
            for (asset in tempAd.additionalAssets[i]) {
                var info = tempAd.additionalAssets[i][asset].length > 0 ? tempAd.additionalAssets[i][asset]: null;
                if (info != null)
                    newAsset[asset] = info;
            }
        }
    }
}
function ebGetFramesLoaded(flashObj) {
    var framesLoaded = 0;
    try {
        if (ebGetPercentLoaded(flashObj) == 100) {
            framesLoaded = 1;
        }
    } catch (e) {
        if (typeof (flashObj.TGetProperty) != "undefined") {
            try {
                framesLoaded = flashObj.TGetProperty("/", 12);
            } catch (e) {
                framesLoaded = 0;
            }
        }
    }
    return framesLoaded;
}
function ebGetPercentLoaded(flashObj) {
    var percentLoaded =- 1;
    if (typeof(flashObj.PercentLoaded) != "undefined")
        percentLoaded = flashObj.PercentLoaded();
    else {}
    return percentLoaded;
}
function ebGetCurrentFrame(flashObj) {
    var currFrame = 1;
    if (typeof(flashObj.TCurrentFrame) != "undefined") {
        try {
            currFrame = flashObj.TCurrentFrame("/") + 1;
        } catch (e) {
            currFrame = 1;
        }
    }
    return currFrame;
}
function ebIsFlashPlaying(flashObj) {
    var isPlaying = (typeof(flashObj.IsPlaying) == "undefined") ? false: flashObj.IsPlaying();
    if (!gEbBC.isIE())
        isPlaying = (isPlaying || (ebGetCurrentFrame(flashObj) > 1));
    return isPlaying;
}
function ebInstanceOf(refObj, strClassName) {
    return (refObj && (typeof(refObj.strClassName) != "undefined") && (refObj.strClassName == strClassName));
}
function ebIsInIframe() {
    var fInInnerIframe = ((typeof(gfEbOnInternalIframe) != "undefined") && gfEbOnInternalIframe);
    var fExpBanner = ((typeof(gEbTemplateName) != "undefined") && (gEbTemplateName == "ExpBanner" || gEbTemplateName == "SingleExpBanner"));
    var fRichBanner = ((typeof(gEbTemplateName) != "undefined") && (gEbTemplateName == "Banner"));
    var fMSNIframe = ((typeof(gfEbMSNIframe) != "undefined") && gfEbMSNIframe);
    return (fInInnerIframe || (fMSNIframe&&!fRichBanner))
}
function ebMouseMoveInterval() {
    try {
        if (gEbInMouseMove) {
            gEbInMouseMove = false;
            if (gEbBC.isIE()) {
                var clientArea = new ebCClientArea(gEbDisplayPage.TI);
                clientArea.calc();
                gEbMouseX += clientArea.nScrollLeft;
                gEbMouseY += clientArea.nScrollTop;
            }
            ebSetMouseTracker();
        }
    } catch (e) {}
}
function ebSetMouseTracker() {
    ebGlobalAction("handleMouseTracker();");
}
function ebGetVars(flashObj, param) {
    try {
        var isAS3 = ebIsAS3(flashObj);
        if (isAS3)
            return flashObj.ebGetVars(param);
        else 
            return flashObj.GetVariable(param);
    } catch (e) {
        return null;
    }
}
function ebIsAS3(flashObj) {
    try {
        var indication = "ebGetVars";
        var ASVer = (typeof(flashObj[indication]) != "undefined");
        if (ASVer && gEbBC.isSafari()) {
            var temp = flashObj[indication]("xmouse");
            ASVer = (typeof(temp) != "undefined");
        }
        return ASVer;
    } catch (e) {
        return false;
    }
}
function ebPairsToObj(strURLTokens, strDelimiter) {
    var objURLTokens = new Object();
    var arrPairs = unescape(strURLTokens).split(strDelimiter);
    for (var i = 0; i < arrPairs.length; i++) {
        try {
            var pair = arrPairs[i];
            if (pair) {
                var delimIdx = arrPairs[i].indexOf("=");
                var tokenName = arrPairs[i].substr(0, delimIdx);
                var tokenValue = arrPairs[i].substr(delimIdx + 1);
                objURLTokens[tokenName] = escape(tokenValue);
            }
        } catch (e) {}
    }
    return objURLTokens;
}
function ebReplaceURLTokens(url, adData) {
    if (url) {
        url = url.replace(/\[%random%\]/ig, adData.strRand);
        url = url.replace(/\[ebRandom\]/ig, adData.strRand);
        url = url.replace(/\[timestamp\]/ig, adData.strRand);
        url = url.replace(/\[%tp_adid%\]/ig, adData.nAdID);
        url = url.replace(/\[%tp_flightid%\]/ig, adData.nFlightID);
        url = url.replace(/\[%tp_campaignid%\]/ig, adData.nCampaignID);
    }
    if (!url ||!adData.strURLTokens)
        return url;
    if (typeof(adData.objURLTokens) == "undefined")
        adData.objURLTokens = ebPairsToObj(adData.strURLTokens, "$$");
    for (var token in adData.objURLTokens)
        url = url.replace(new RegExp("\\[%" + token + "%\\]", "ig"), adData.objURLTokens[token]);
    return url;
}
function ebGlobalVideoAction(functionName) {
    try {
        if (typeof(gEbEyes) != "undefined") {
            for (var i = 0; i < gEbEyes.length; i++) {
                if (gEbEyes[i].displayUnit != null)
                    for (var j = 0; j < gEbEyes[i].displayUnit.arrVideoLoaderDrivers.length; j++)
                        eval("try{" + gEbEyes[i].displayUnit.arrVideoLoaderDrivers[j].objName + "." + functionName + "}catch(e){}");
            }
        }
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++) {
                if (gEbBanners[i].displayUnit != null)
                    for (var j = 0; j < gEbBanners[i].displayUnit.arrVideoLoaderDrivers.length; j++)
                        eval("try{" + gEbBanners[i].displayUnit.arrVideoLoaderDrivers[j].objName + "." + functionName + "}catch(e){}");
            }
        }
    } catch (e) {}
}
function ebGlobalAction(functionName) {
    try {
        if (typeof(gEbEyes) != "undefined") {
            for (var i = 0; i < gEbEyes.length; i++) {
                if (gEbEyes[i].displayUnit != null)
                    eval("try{" + gEbEyes[i].objName + ".displayUnit." + functionName + "}catch(e){}");
            }
        }
        if (typeof(gEbBanners) != "undefined") {
            for (var i = 0; i < gEbBanners.length; i++) {
                if (gEbBanners[i].displayUnit != null)
                    eval("try{" + gEbBanners[i].objName + ".displayUnit." + functionName + "}catch(e){}");
            }
        }
    } catch (e) {}
}
function ebIntMonitorExist() {
    var fExist = false;
    if (ebIsPreview()) {
        if (typeof(window.parent.ebHandleFsCommandsPrev) == "function")
            fExist = true;
    }
    return fExist;
}
function ebGetMainPageURL() {
    var url = "";
    try {
        url = top.document.URL;
    } catch (e) {}
    return url;
}
function ebIsFlashExtInterfaceExist() {
    return true;
}
function ebReplayAd() {
    ebGlobalAction("ebreplayadHandler(\"auto\");");
}
function ebReplayExp() {
    ebGlobalAction("ebreplayexpHandler();");
}
function ebClose() {
    ebPauseVideo();
    ebGlobalAction("ebautocloseHandler();");
}
function ebPlayVideo() {
    ebGlobalVideoAction("callAPIProxyFunc(\"VideoPlay\");");
}
function ebPauseVideo() {
    ebGlobalVideoAction("callAPIProxyFunc(\"VideoPause\");");
}
function ebXMLHttpRequest(url, reqType, getResponse) {
    try {
        var xmlhttp = null;
        var response = null;
        if (window.XMLHttpRequest)
            xmlhttp = new XMLHttpRequest();
        if (xmlhttp == null)
            return null;
        if (xmlhttp.withCredentials !== undefined) {
            {}
            xmlhttp.open('GET', url, reqType);
            xmlhttp.send(null);
            if (getResponse) {
                response = xmlhttp.responseXML;
                return response;
            } else {
                return true;
            }
        } else {
            if (getResponse) {
                return response;
            } else {
                return false;
            }
        }
    } catch (e) {
        if (getResponse) {
            return response;
        } else {
            return true;
        }
    }
}
function ebCFlashDetector() {
    this.getIEFlash = getIEFlash;
    this.getMozillaFlash = getMozillaFlash;
    function getIEFlash() {
        var strFlashVersion = getMajorMinorFlashVersion(7);
        var activeX;
        if (!strFlashVersion) {
            try {
                activeX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                strFlashVersion = "WIN 6,0,21,0";
                activeX.AllowScriptAccess = "always";
                strFlashVersion = activeX.GetVariable("$version");
            } catch (e) {
                try {
                    var version = this.getMozillaFlash();
                    if (version > 0)
                        return version;
                } catch (e1) {}
                if (!activeX)
                    strFlashVersion = getMajorMinorFlashVersion(3);
            }
        }
        strFlashVersion = splitFlashMajorMinorVersions(strFlashVersion);
        var nFlashVer = Number(strFlashVersion);
        return isNaN(nFlashVer) ? 0 : nFlashVer;
    }
    function getMajorMinorFlashVersion(nVersion) {
        try {
            var activeX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + nVersion);
            return activeX.GetVariable("$version");
        } catch (e) {
            return "";
        }
    }
    function splitFlashMajorMinorVersions(strFlashVersion) {
        if (strFlashVersion) {
            var tempArray = strFlashVersion.split(" ");
            var tempString = tempArray[1];
            var versionArray = tempString.split(",");
            var versionMajor = versionArray[0];
            var versionMinor = versionArray[1];
            var versionRevision = versionArray[2];
            return versionMajor + "." + versionMinor + versionRevision;
        }
        return 0;
    }
    function getMozillaFlash() {
        var ver = 0;
        var releaseVer = 0;
        var versionMajor = 0;
        var versionMinor = 0;
        var versionRevision = 0;
        if (navigator.plugins != null && navigator.plugins.length > 0) {
            var type = 'application/x-shockwave-flash';
            var mimeTypes = navigator.mimeTypes;
            if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) {
                var flashDescription = mimeTypes[type].enabledPlugin.description;
                var descArray = flashDescription.split(" ");
                var tempArrayMajor = descArray[2].split(".");
                versionMajor = tempArrayMajor[0];
                versionMinor = tempArrayMajor[1];
                versionRevision = descArray[3];
                if (versionRevision == "")
                    versionRevision = descArray[4];
                if (isNaN(versionRevision[0]))
                    versionRevision = versionRevision.substring(1);
                if (versionRevision.indexOf("d") > 0)
                    versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
            }
        }
        var nFlashVer = Number(versionMajor + "." + versionMinor + versionRevision);
        if (isNaN(nFlashVer))
            return 0;
        if (((versionMajor == 6) && (versionRevision >= 40)) || (versionMajor > 6))
            return nFlashVer;
        else 
            return 0;
    }
}
function ebCPlugin(objName) {
    this.objName = objName;
    this.flFlashVer = 0;
    this.flAudioVer = 0;
    this.flWMPVer = 0;
    this.nResolution = 0;
    this.init = initPlugin;
    function initPlugin() {
        this.flFlashVer = gEbFlashVer = getFlashVer();
        this.flWMPVer = gEbWMPVer = getWMPVer();
        this.flAudioVer = getAudioVer();
        this.nResolution = gEbResolution = getResolution();
    }
    function getFlashVer() {
        try {
            var flashDetector = new ebCFlashDetector();
            var flFlashVer = gEbBC.isIE() ? flashDetector.getIEFlash(): flashDetector.getMozillaFlash();
            if (gEbBC.isMac() && (flFlashVer < 8))
                flFlashVer = 0;
            return flFlashVer;
        } catch (e) {
            return 0;
        }
    }
    function getAudioVer() {
        return (gEbBC.isIE() ? 1 : 0);
    }
    function getWMPVer() {
        var nWMPVer = 0;
        var player = null;
        try {
            if (window.ActiveXObject)
                player = new ActiveXObject("WMPlayer.OCX.7");
            else if (window.GeckoActiveXObject)
                player = new GeckoActiveXObject("WMPlayer.OCX.7");
        } catch (e) {
            return 0;
        }
        if (player) {
            var strVersion = player.versionInfo;
            var strVersion = strVersion.split(".");
            nWMPVer = strVersion[0];
        }
        return nWMPVer;
    }
}
function getResolution() {
    var nRes = 0;
    switch (window.screen.width) {
    case 640:
        nRes = 1;
        break;
    case 800:
        nRes = 2;
        break;
    case 1024:
        nRes = 4;
        break;
    case 1152:
        nRes = 8;
        break;
    case 1280:
        nRes = 16;
        break;
    case 1600:
        nRes = 32;
        break;
    case 1400:
        nRes = 64;
        break;
    case 1920:
        nRes = 128;
        break;
    case 1680:
        nRes = 256;
        break;
    case 1366:
        nRes = 512;
        break;
    case 1440:
        nRes = 1024;
        break;
    case 1360:
        nRes = 2048;
        break;
    case 768:
        nRes = 4096;
        break;
    case 1093:
        nRes = 8192;
        break;
    case 960:
        nRes = 16384;
        break;
    case 2560:
        nRes = 32768;
        break;
    }
    return nRes;
}
function ebCExpVideoLoaderDriver(fIMPanel, strPath, fStreaming, fStretchToFit, nVideoXPos, nVideoYPos, nVideoWidth, nVideoHeight, fHandleClick, resObj, nIndex, displayUnit, fNewComp) {
    this.temp = ebCVideoLoaderDriver;
    this.temp(strPath, fStreaming, fStretchToFit, nVideoXPos, nVideoYPos, nVideoWidth, nVideoHeight, fHandleClick, resObj, nIndex, displayUnit, fNewComp);
    delete this.temp;
    this.fIMPanel = fIMPanel;
    if (fIMPanel) {
        this.strWindowPrefix = "document.parentWindow.parent." + this.strWindowPrefix;
        this.strHandelrPrefix = "document.parentWindow.parent." + this.strHandelrPrefix;
        this.WMPRefElement = resObj.ownerDocument.body;
        if (typeof(this.WMPRefElement.ownerDocument) == "undefined")
            this.WMPRefElement.ownerDocument = resObj.ownerDocument;
    }
    this.attachWMPMouseEvents = attachWMPMouseEventsOver;
    this.isWmodeWindow = isWmodeWindow;
    function attachWMPMouseEventsOver() {
        var playerDiv = this.playerObj.parentNode;
        if (this.fIMPanel) {
            gEbDisplayPage.TI.addEventHandler("mouseover", "ebOnmouseOverIMPanel", playerDiv);
            gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnmouseOutIMPanel", playerDiv);
        } else {
            gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnmouseOutOfAd", playerDiv);
            if (this.resObj.id.indexOf("ebBannerFlash_")!=-1&&!this.isSEAd())
                gEbDisplayPage.TI.addEventHandler("mouseover", "ebOnmouseOverBanner", playerDiv);
        }
        if (this.fTrackRollOver)
            gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnMouseOutOfVideo", playerDiv);
    }
    function isWmodeWindow() {
        try {
            if ((typeof(ebgstrPanelObjName) != "undefined") && (this.resObj.id.indexOf(ebgstrPanelObjName)!=-1)) {
                var strPanelName = this.displayUnit.getPanelName(this.resObj.id);
                var panelObj = this.displayUnit.getPanel(this.displayUnit, strPanelName);
                return (typeof(panelObj) != "undefined") && panelObj.strWmode.toLowerCase() == "window";
            } else 
                return this.displayUnit.adData.strWmode.toLowerCase() == "window";
        } catch (e) {}
    }
}
var ebgstrBannerObjName = "ebBannerFlash_";
var ebgstrDelimiter = "_Del_";
var ebgstrPanelObjName = "ebPanel" + ebgstrDelimiter;
var ebgstrPanelDivObjName = "ebPanelDiv" + ebgstrDelimiter;
var ebgstrCharstoReplace = "`~!@#$%^&*()+-=[]{};:'<>/?.";
var gnEbUsingMouseMoveCounter = 0;
var ebWSEvent = {
    noEvent: - 1,
    retractSinglePanel: 0,
    autoRetract: 1,
    autoExpand: 2,
    retractVideoStrip: 3,
    expandVideoStrip: 4,
    uponShow: 5,
    expandSE: 6,
    retractSE: 7
};
function ebCTemplateBSingleExpBanner(objName) {
    this.temp = ebCBannerBase;
    this.temp();
    delete this.temp;
    this.fEbExpBanerIM = this.fEbExpBannerIM = ebIsRunningInMSN();
    this.objName = objName;
    this.bannerRes = null;
    this.WSEventSender = null;
    this.fShouldInitialize = true;
    this.IframeWidth = 0;
    this.IframeHeight = 0;
    this.IframeStyleWidth = "";
    this.IframeStyleHeight = "";
    this.IframeVis = "";
    this.IframeBorder = "";
    this.fPanelIsOpen = false;
    this.fListeningToMouseMove = false;
    this.panelFrequency = null;
    this.fShowedAutoPanel = false;
    this.fReportFullPlay = true;
    this.defaultPanel = null;
    this.bannerDiv = null;
    this.panelObjMouseIsOver = null;
    this.strCBFunc = "";
    this.fIsReady = true;
    this.delayedExpPanels = null;
    this.fCloseable = false;
    this.fLoadDefaultPanelOnPageLoad = false;
    this.addResources = addResources;
    this.BWDetection = BWDetection;
    this.init = init;
    this.addFlashToPage = addFlashToPage;
    this.doOnload = doOnload;
    this.doOnUnload = doOnUnload;
    this.doOnResize = doOnResize;
    this.doOnScroll = doOnScroll;
    this.doOnBlur = doOnBlur;
    this.doOnFocus = doOnFocus;
    this.doOnResizePanels = doOnResizePanels;
    this.updateTemplateInteractions = updateTemplateInteractions;
    this.close = close;
    this.autoClose = ebautohideHandler;
    this.isMouseOverBanner = isMouseOverBanner;
    this.getResOrigSize = getResOrigSize;
    this.getTemplateTrackedDiv = getTemplateTrackedDiv;
    this.getElementById = getElementById;
    this.createVideoLoaderDriver = createVideoLoaderDriver;
    this.replay = replay;
    this.isPanelName = isPanelName;
    this.getPanelName = getPanelName;
    this.getPanel = getPanel;
    this.loadPanels = loadPanels;
    this.loadDefaultPanel = loadDefaultPanel;
    this.showPanel = showPanel;
    this.playWhenReady = playWhenReady;
    this.playWhenFirstFrameLoaded = playWhenFirstFrameLoaded;
    this.openPanel = openPanel;
    this.openSinglePanel = openSinglePanel;
    this.showAutoPanel = showAutoPanel;
    this.isAnyPanelOpen = isAnyPanelOpen;
    this.doOnPanelShow = doOnPanelShow;
    this.hidePanel = hidePanel;
    this.hideAllPanels = hideAllPanels;
    this.reportPanelShow = reportPanelShow;
    this.reportPanelHide = reportPanelHide;
    this.retractPanels = retractPanels;
    this.retractSinglePanel = retractSinglePanel;
    this.isDefaultPanelSupportedDelayExp = isDefaultPanelSupportedDelayExp;
    this.shouldAdAutoExpend = shouldAdAutoExpend;
    this.doOnCreateDisplayUnit = doOnCreateDisplayUnit;
    this.replayExp = replayExp;
    this.fullPlay = fullPlay;
    this.wlxInit = wlxInit;
    this.shouldHandleInteraction = shouldHandleInteraction;
    this.doOnPositionLoad = doOnPositionLoad;
    this.showDelayedExpPanels = showDelayedExpPanels;
    this.resetDelayedExp = resetDelayedExp;
    this.initSE = initSE;
    this.onSEExpandStarted = onSEExpandStarted;
    this.ebshowHandler = ebshowHandler;
    this.ebhideHandler = ebhideHandler;
    this.ebreplayHandler = ebReplayHandler;
    this.ebautoreplayHandler = ebAutoReplayHandler;
    this.ebautoshowHandler = ebautoshowHandler;
    this.ebautohideHandler = ebautohideHandler;
    this.doOnEbQuit = doOnEbQuit;
    this.ebshowwhenreadyHandler = showWhenReady;
    this.showHideElementsFromFlash = showHideElementsFromFlash;
    this.adStripAttr = null;
    this.ebsetseproxyHandler = ebsetseproxyHandler;
    this.ebinitseHandler = ebinitseHandler;
    this.ebseexpandstartedHandler = ebseexpandstartedHandler;
    this.ebseretractstartedHandler = ebseretractstartedHandler;
    this.ebseretractfinishedHandler = ebseretractfinishedHandler;
    this.ebsemouseoverHandler = ebsemouseoverHandler;
    this.ebcollapsepanelHandler = ebCollapsePanelHandler;
    this.ebexpandpanelHandler = ebExpandPanelHandler;
    this.checkElementId = checkElementId;
    this.onShowRes = onShowRes;
    this.getResWMP = getResWMP;
    this.isDefaultPanelPlayingVideo = isDefaultPanelPlayingVideo;
    this.buildPanelAttr = buildPanelAttr;
    this.initDelayedExpPanels = initDelayedExpPanels;
    this.isVideoStripAd = isVideoStripAd;
    this.isSEAd = isSEAd;
    this.updateTimersInterval = updateTimersInterval;
    function onShowRes() {
        this.bannerRes = this.refreshElement(this.bannerRes);
        var panels = this.ad.panels;
        for (var attr in panels) {
            try {
                if (!this.isPanelName(attr))
                    continue;
                var flashObj = panels[attr].flashObj = this.refreshElement(panels[attr].flashObj);
                if (gEbBC.isOpera()) {
                    flashObj.style.width = (parseInt(flashObj.style.width) + 2) + "px";
                }
            } catch (e) {}
        }
    }
    function checkElementId(elemId) {
        if (this.bannerRes.id == elemId)
            return true;
        var panels = this.ad.panels;
        for (var attr in panels) {
            try {
                if (!this.isPanelName(attr))
                    continue;
                if (panels[attr].panelDiv.id == elemId || panels[attr].flashObj.id == elemId)
                    return true;
            } catch (e) {}
        }
        return false;
    }
    function shouldAdAutoExpend() {
        this.panelFrequency = new ebCPanelFrequency();
        this.panelFrequency.init(this.ad.nFreqTimes, this.ad.nFreqPeriod, this.adData.nAdID, this.adData.nHistLen, this.adData.fOptOut);
        return this.panelFrequency.shouldExpand();
    }
    function isDefaultPanelSupportedDelayExp() {
        var defaulPanel;
        for (var i in this.ad.panels) {
            defaulPanel = this.ad.panels[i];
            break;
        }
        return (typeof(defaulPanel) == "undefined") ? false : defaulPanel.fDelayedExpansion;
    }
    function isVideoStripAd() {
        return ((typeof(this.ad.fVideoStrip) != "undefined") && this.ad.fVideoStrip);
    }
    function isSEAd() {
        return ((typeof(this.ad.fSExpBanner) != "undefined") && this.ad.fSExpBanner);
    }
    function addResources() {
        this.adData.customEventHandler.onBeforeDefaultBannerShow(this.objName);
        if (typeof(this.adData.fIsRecordable) != "undefined") {
            this.fIsRecordable = this.adData.fIsRecordable;
        }
        if (gEbBC.isChrome() && ebIsInIframe()) {
            var strFunc = this.objName + ".updateTimersInterval();";
            gEbDisplayPage.addInterval(this.objName + "updateTimersInterval", strFunc, Number(1000), window);
        }
        if (this.objType == 1)
            displayImage(this);
        else {
            setPanelsParams(this);
            displayFlash(this);
        }
        var strDivName = this.myName(ebCTemplateBSingleExpBanner.strBannerDivName);
        window.setTimeout(this.objName + ".addAdChoiceToPage(true)", 500);
    }
    function updateTimersInterval() {
        var interactions = this.interactions;
        for (var interName in interactions) {
            var inter = interactions[interName];
            if (inter.nType == 1) {
                try {
                    if (inter.nStartTime != 0) {
                        inter.handle(2, this.adData);
                        inter.handle(1, this.adData);
                    }
                } catch (e) {}
            }
        }
    }
    function BWDetection() {
        try {
            if (this.bannerRes == null) {
                var strFunc = this.objName + ".BWDetection()";
                window.setTimeout(strFunc, 100);
                return;
            }
            var flashObj = this.bannerRes;
            if (flashObj == null) {
                var strFunc = this.objName + ".BWDetection()";
                window.setTimeout(strFunc, 100);
                return;
            }
            if (!this.flashResReady(flashObj, this.ad.nDefaultFlashWeight, null, true)) {
                var strFunc = this.objName + ".BWDetection()";
                window.setTimeout(strFunc, 100);
                return;
            }
        } catch (e) {}
    }
    function doOnload() {
        try {
            if (this.objType == 1)
                return;
            if (this.ad.fPreLoadPanels)
                this.loadPanels();
            else if (this.fLoadDefaultPanelOnPageLoad)
                this.loadDefaultPanel();
            if (this.defaultPanel)
                this.showAutoPanel();
        } catch (e) {}
    }
    function doOnUnload() {
        try {
            if (this.adTI != gEbTI) {
                this.close();
                if (gfEbMSNAjax) {
                    cleanPanels(this);
                    var bannerTable = this.adTI.getDoc().getElementById(this.myName(ebCTemplateBSingleExpBanner.strBannerTableName));
                    if (bannerTable != null)
                        bannerTable.parentNode.removeChild(bannerTable);
                    gEbDisplayPage.close();
                }
                var strBannerID = "";
                if (this.objType == 1) {
                    strBannerID = this.myName(ebCTemplateBSingleExpBanner.strImageName);
                } else {
                    strBannerID = this.myName(ebCTemplateBSingleExpBanner.strFlashObjName);
                }
                var bannerRes = this.getElementById(strBannerID);
                if (bannerRes != null) {
                    this.hideRes(bannerRes, true);
                } else {}
                var theIframe = gEbDisplayPage.getIframeData();
                if (theIframe != null) {
                    theIframe.width = this.IframeWidth;
                    theIframe.height = this.IframeHeight;
                    theIframe.style.width = this.IframeStyleWidth;
                    theIframe.style.height = this.IframeStyleHeight;
                    theIframe.style.visibility = this.IframeVis;
                    theIframe.style.border = this.IframeBorder;
                } else {}
            }
        } catch (e) {}
    }
    function doOnResize() {
        if (!this.fEbExpBannerIM && this.bannerRes != null) {
            this.checkIfAdIsVisibile(this.bannerRes.id);
        }
        if (this.repositionAdchoiceLogo)
            this.repositionAdchoiceLogo();
        if (ebIsPreview() || (typeof (((window.parent).parent).gfEbPreview) != "undefined")) {
            var strFunc = this.objName + ".doOnResizePanels()";
            window.setTimeout(strFunc, 50);
            return;
        } else 
            this.doOnResizePanels();
    }
    function doOnScroll() {
        if (!this.fEbExpBannerIM && this.bannerRes != null) {
            this.checkIfAdIsVisibile(this.bannerRes.id);
        }
        if (this.repositionAdchoiceLogo)
            this.repositionAdchoiceLogo();
    }
    function doOnFocus(isHidden) {
        if (!this.fEbExpBannerIM && this.bannerRes != null) {
            this.checkIfAdIsVisibile(this.bannerRes.id, isHidden);
        }
    }
    function doOnBlur() {
        if (!this.fEbExpBannerIM && this.bannerRes != null) {
            this.checkIfAdIsVisibile(this.bannerRes.id, true);
        }
    }
    function doOnResizePanels() {
        var ad = this.ad;
        var top = ebGetRealTop(this.bannerRes);
        var left = ebGetRealLeft(this.bannerRes);
        for (var panelName in ad.panels) {
            try {
                if (!this.isPanelName(panelName))
                    continue;
                ad.panels[panelName].doOnResize(top, left);
            } catch (e) {}
        }
    }
    function doOnCreateDisplayUnit(strCBFunc) {
        if ((typeof(this.ad.fShouldLoadPosition) != "undefined") && this.ad.fShouldLoadPosition) {
            loadPosition(this, strCBFunc);
        }
    }
    function init() {
        this.WSEventSender = new ebCWSEventSender(this);
        for (var i in this.ad.panels) {
            if (!this.isPanelName(i))
                continue;
            this.defaultPanel = this.ad.panels[i];
            break;
        }
        if ((this.ad.nUponShow > 1) && (typeof(ebCPanelFrequency) != "undefined")) {
            if (this.panelFrequency == null) {
                this.panelFrequency = new ebCPanelFrequency();
                this.panelFrequency.init(this.ad.nFreqTimes, this.ad.nFreqPeriod, this.adData.nAdID, this.adData.nHistLen, this.adData.fOptOut);
            }
        }
        this.BWDetection();
        var elementToAttach = gEbBC.isIE() ? this.bannerDiv: this.bannerRes;
        if (!this.isSEAd())
            gEbTI.addEventHandler("mouseover", "ebOnmouseOverBanner", elementToAttach);
        gEbTI.addEventHandler("mouseout", "ebOnmouseOutOfAd", elementToAttach);
        var win = this.adTI.getWin();
        if (typeof (win.gnEbZIndex) == "undefined") {
            eval("win.gnEbZIndex = " + gnEbMinZIndex);
        }
        this.wlxInit();
        this.fShouldInitialize = false;
        handlePreShow(this);
    }
    function wlxInit() {
        try {
            var wlxObj = null;
            if (wlxObj = getWlxObj()) {
                {}
                var wlxWidth = parseInt(this.adData.nWidth);
                var wlxHeight = parseInt(this.adData.nHeight);
                var panel = this.defaultPanel;
                var wlxOffsetLeft = panel.nXPos < 0 ? Math.abs(panel.nXPos): 0;
                var wlxOffsetBottom = wlxHeight < (parseInt(panel.nYPos) + parseInt(panel.nHeight)) ? Math.abs((parseInt(panel.nYPos) + parseInt(panel.nHeight)) - wlxHeight): 0;
                var wlxOffsetRight = wlxWidth < (parseInt(panel.nXPos) + parseInt(panel.nWidth)) ? Math.abs((parseInt(panel.nXPos) + parseInt(panel.nWidth)) - wlxWidth): 0;
                var wlxOffsetTop = panel.nYPos < 0 ? Math.abs(panel.nYPos): 0;
                for (var panelName in this.ad.panels) {
                    if (!this.isPanelName(panelName))
                        continue;
                    var panel = this.ad.panels[panelName];
                    wlxOffsetLeft = panel.nXPos < ( - wlxOffsetLeft) ? Math.abs(panel.nXPos) : wlxOffsetLeft;
                    wlxOffsetBottom = (wlxHeight + wlxOffsetBottom) < (parseInt(panel.nYPos) + parseInt(panel.nHeight)) ? Math.abs((parseInt(panel.nYPos) + parseInt(panel.nHeight)) - wlxHeight) : wlxOffsetBottom;
                    wlxOffsetRight = (wlxWidth + wlxOffsetRight) < (parseInt(panel.nXPos) + parseInt(panel.nWidth)) ? Math.abs((parseInt(panel.nXPos) + parseInt(panel.nWidth)) - wlxWidth) : wlxOffsetRight;
                    wlxOffsetTop = panel.nYPos < ( - wlxOffsetTop) ? Math.abs(panel.nYPos) : wlxOffsetTop;
                }
                wlxObj.init({
                    width: wlxWidth,
                    height: wlxHeight,
                    offsetLeft: wlxOffsetLeft,
                    offsetBottom: wlxOffsetBottom,
                    offsetRight: wlxOffsetRight,
                    offsetTop: wlxOffsetTop
                });
            }
        } catch (WLXe) {}
    }
    function getWlxObj() {
        var obj = null;
        try {
            if (!ebIsGlobalDef("gEbDisableSmartServeAPI", true))
                obj = window["$WLXRmAd"] || (window.parent && window.parent["$WLXRmAd"]);
        } catch (e) {}
        return obj;
    }
    function wlxExpand() {
        var wlxObj = getWlxObj();
        if (wlxObj) {
            wlxObj.expand();
        }
    }
    function wlxRetract() {
        var wlxObj = getWlxObj();
        if (wlxObj) {
            wlxObj.collapse();
        }
    }
    function loadPanels() {
        if (this.fShouldInitialize)
            this.init();
        var top = ebGetRealTop(this.bannerRes);
        var left = ebGetRealLeft(this.bannerRes);
        if ((top == 0) && (left == 0)&&!gEbDocLoaded || (this.bannerRes == null)) {
            strFunc = this.objName + ".loadPanels()";
            window.setTimeout(strFunc, 100);
            return;
        }
        for (attr in this.ad.panels) {
            try {
                if (!this.isPanelName(attr))
                    continue;
                this.ad.panels[attr].addToPage(this.objName, top, left);
            } catch (e) {}
        }
    }
    function loadDefaultPanel() {
        if (this.fShouldInitialize)
            this.init();
        if (this.defaultPanel == null) {
            return 
        }
        var top = ebGetRealTop(this.bannerRes);
        var left = ebGetRealLeft(this.bannerRes);
        if ((top == 0) && (left == 0)&&!gEbDocLoaded || (this.bannerRes == null)) {
            strFunc = this.objName + ".pushWhenReady()";
            window.setTimeout(strFunc, 100);
            return;
        }
        this.defaultPanel.addToPage(this.objName, top, left, true);
    }
    function ebshowHandler(name) {
        this.showPanel(name);
    }
    function ebautoshowHandler(name) {
        this.showPanel(name, false, true);
    }
    function ebautohideHandler(name) {
        if (this.objType == 1)
            return;
        if ((this.isVideoStripAd() || this.isSEAd())&&!ebIsPreview())
            return;
        if (this.fShouldInitialize)
            this.init();
        var panels = this.ad.panels;
        if ((typeof(name) == "undefined") || (name == ""))
            this.hideAllPanels(true);
        else 
            this.hidePanel(name, true);
    }
    function doOnEbQuit() {
        this.close();
    }
    function playWhenFirstFrameLoaded(name) {
        name = name.toLowerCase();
        var panel = this.ad.panels[name];
        var frameNotLoaded = true;
        if (panel.oPopupObj)
            frameNotLoaded = ebGetPercentLoaded(panel.flashObj) < 100;
        else 
            frameNotLoaded = ebGetFramesLoaded(panel.flashObj) < 1;
        if (frameNotLoaded) {
            var strFunc = this.objName + ".playWhenFirstFrameLoaded(\"" + name + "\")";
            window.setTimeout(strFunc, 50);
            return;
        }
        playPanel(this, panel);
    }
    function playWhenReady(name) {
        name = name.toLowerCase();
        var panel = this.ad.panels[name];
        panel.checkIfReady();
        if (!panel.fResReady) {
            var strFunc = this.objName + ".playWhenReady(\"" + name + "\")";
            window.setTimeout(strFunc, 50);
            return;
        }
        playPanel(this, panel);
    }
    function playPanel(objRef, panel) {
        if (objRef.ad.fShowSinglePanel) {
            objRef.WSEventSender.eventType = ebWSEvent.retractSinglePanel;
            objRef.hideAllPanels();
            objRef.WSEventSender.resetEvent();
            objRef.openSinglePanel(panel);
        } else {
            objRef.openPanel(panel);
        }
    }
    function showPanel(name, fWhenReady, fReportAutoShow) {
        try {
            if (typeof(fWhenReady) == "undefined")
                fWhenReady = false;
            if (typeof(fReportAutoShow) == "undefined")
                fReportAutoShow = false;
            if (this.fShouldInitialize)
                this.init();
            if ((typeof(name) == "undefined") || (name == "undefined"))
                name = "";
            var panel = getPanel(this, name);
            if (!panel) {
                return;
            }
            if (panel.isOpen() || panel.fIsOpening) {
                return;
            }
            panel.fIsOpening = true;
            panel.fReportAutoShow = fReportAutoShow;
            if (!panel.fOnPage) {
                addPanelToPage(this, panel);
            }
            this.WSEventSender.sendEvent(panel.strPanelName);
            loadAndPlayPanel(this, panel, fWhenReady);
        } catch (e) {}
    }
    function openSinglePanel(panel) {
        if (this.repositionAdchoiceLogo)
            this.repositionAdchoiceLogo();
        if (panel.isOpen()) {
            return;
        }
        if (this.fPanelIsOpen) {
            var strFunc = this.objName + ".openSinglePanel(" + panel.objName + ")";
            window.setTimeout(strFunc, 100);
            return;
        }
        this.openPanel(panel);
    }
    function openPanel(panel) {
        panel.repositionAdchoiceLogo = this.repositionAdchoiceLogo;
        if (panel.isOpen()) {
            return;
        }
        var name = panel.strPanelName.toLowerCase();
        this.doOnPanelShow(name);
        var top = ebGetRealTop(this.bannerRes);
        var left = ebGetRealLeft(this.bannerRes);
        if (panel.fPushDown)
            this.startPushDown(panel.strPanelName, true, top, left);
        else 
            panel.show(top, left);
        this.adData.customEventHandler.onAfterPanelShow(this.objName, panel.strPanelName);
    }
    function isAnyPanelOpen() {
        var anyPanelOpen = false;
        for (var panelName in this.ad.panels) {
            if (!this.isPanelName(panelName))
                continue;
            if (this.ad.panels[panelName].fOpen) {
                anyPanelOpen = true;
                break;
            }
        }
        return anyPanelOpen;
    }
    function doOnPanelShow(name) {
        if ((typeof(name) == "undefined") || (name == "")) {
            return;
        }
        if (this.fShouldInitialize)
            this.init();
        var panels = this.ad.panels;
        name = name.toLowerCase();
        var panel = panels[name];
        if (typeof(panel) == "undefined") {
            return;
        }
        if (this.repositionAdchoiceLogo)
            this.repositionAdchoiceLogo();
        if (panel.isOpen()) {
            return;
        }
        if (!gEbBC.isIE() && (panel.strWmode.toLowerCase() == "window")&&!this.fListeningToMouseMove) {
            if (gnEbUsingMouseMoveCounter == 0) {
                var doc = this.adTI.getDoc();
                this.adTI.addEventHandler("mousemove", "ebOnmouseMove", doc);
                this.adTI.addEventHandler("mouseout", "ebOnmouseOverPanel", doc);
            }
            this.fListeningToMouseMove = true;
            gnEbUsingMouseMoveCounter++;
        }
        wlxExpand();
        this.adData.customEventHandler.onBeforePanelShow(this.objName, panel.strPanelName);
        if (panel.fOnPage) {
            this.reportPanelShow(name);
            var displayWin = this.adTI.getWin();
            if (!panel.fHideElements&&!panel.fPushDown) {
                var panelAttrObj = this.buildPanelAttr(panel);
                this.hidePageElements(displayWin, panelAttrObj);
                panel.fHideElements = true;
            }
        }
    }
    function buildPanelAttr(panelObj) {
        try {
            var panelAttrObj = new Object();
            panelAttrObj.nHeight = parseInt(panelObj.nHeight);
            panelAttrObj.nWidth = parseInt(panelObj.nWidth);
            panelAttrObj.nTop = parseInt(panelObj.nTop);
            panelAttrObj.nLeft = parseInt(panelObj.nLeft);
            return panelAttrObj;
        } catch (e) {}
    }
    function reportPanelShow(name) {
        try {
            if (this.isVideoStripAd())
                return;
            var fSExpBanner = ((typeof(this.ad.fSExpBanner) != "undefined") && this.ad.fSExpBanner);
            if (fSExpBanner)
                return;
            var panel = this.ad.panels[name];
            if (panel.fReportAutoShow)
                this.ebsysteminteractionHandler(name + "_autoshow");
            else {
                this.handleSystemInteraction("ebPanelsViewed");
                var interactionKey = ebCTemplateBSingleExpBanner.strPanelIntKeyPrefix + name;
                this.ebsysteminteractionHandler(interactionKey);
            }
            this.ebstarttimerHandler(name + "_duration");
        } catch (e) {}
    }
    function close() {
        this.adData.customEventHandler.onBeforeAdClose(this.objName);
        if (!this.isVideoStripAd()&&!this.isSEAd())
            this.hideAllPanels();
        else 
            this.retractPanels("");
        this.adData.customEventHandler.onAfterAdClose(this.objName);
    }
    function ebhideHandler(name) {
        if (this.objType == 1)
            return;
        if ((this.isVideoStripAd() || this.isSEAd())&&!ebIsPreview())
            return;
        if (this.fShouldInitialize)
            this.init();
        if ((typeof(name) == "undefined") || (name == ""))
            this.hideAllPanels();
        else 
            this.hidePanel(name, false);
    }
    function hideAllPanels(fReportAutoHide) {
        if (typeof(fReportAutoHide) == "undefined")
            fReportAutoHide = false;
        if (this.objType == 1)
            return;
        if (this.fShouldInitialize)
            this.init();
        var panels = this.ad.panels;
        for (var attr in panels) {
            try {
                if (!this.isPanelName(attr))
                    continue;
                var name = panels[attr].strPanelName;
                this.hidePanel(name, fReportAutoHide);
            } catch (e) {}
        }
    }
    function hidePanel(name, fReportAutoHide) {
        if (typeof(fReportAutoHide) == "undefined")
            fReportAutoHide = false;
        var panels = this.ad.panels;
        name = name.toLowerCase();
        var panel = panels[name];
        if (typeof(panel) == "undefined") {
            return;
        }
        if (!panel.fOnPage ||!panel.isOpen()) {
            return;
        }
        this.adData.customEventHandler.onBeforePanelHide(this.objName, panel.strPanelName);
        if (panel.nTimeoutId!=-1) {
            try {
                window.clearTimeout(panel.nTimeoutId);
                panel.nTimeoutId =- 1;
            } catch (e) {}
        }
        panel.fReportAutoHide = fReportAutoHide;
        this.reportPanelHide(name);
        this.closeAdResource(panel.flashObj, false);
        if (panel.fPushDown)
            this.startPullPageUp();
        else {
            this.WSEventSender.sendEvent(panel.strPanelName);
            panel.hide();
            if (this.ad.fShowSinglePanel)
                this.fPanelIsOpen = false;
        }
        if (panel.fHideElements&&!panel.fPushDown) {
            var panelAttrObj = this.buildPanelAttr(panel);
            this.showPageElements(this.adTI.getWin(), panelAttrObj);
            panel.fHideElements = false;
        }
        if (!this.isAnyPanelOpen()) {
            wlxRetract();
            if (this.repositionAdchoiceLogo)
                this.repositionAdchoiceLogo();
        }
        this.adData.customEventHandler.onAfterPanelHide(this.objName, panel.strPanelName);
        if (!isWindPanelOpen(this) && this.fListeningToMouseMove) {
            gnEbUsingMouseMoveCounter--;
            this.fListeningToMouseMove = false;
            if (gnEbUsingMouseMoveCounter == 0) {
                var doc = this.adTI.getDoc();
                doc.removeEventListener("mousemove", ebOnmouseMove, false);
                doc.removeEventListener("mouseout", ebOnmouseOverPanel, false);
            }
        }
        if (this.panelObjMouseIsOver) {
            this.dwellTimeManager.handleMouseOutOfAd();
            if (this.panelObjMouseIsOver.strPanelName == name)
                this.panelObjMouseIsOver = null;
        }
        this.dwellTimeManager.handlePanelClose(name);
    }
    function cleanPanels(objRef) {
        var panels = objRef.ad.panels;
        for (var attr in panels) {
            try {
                if (!objRef.isPanelName(attr))
                    continue;
                if (panels[attr].panelDiv != null) {
                    var panelId = panels[attr].panelDiv.id;
                    var pannelElement = objRef.getElementById(panelId);
                    pannelElement.parentNode.removeChild(pannelElement);
                    if (pannelElement.removeNode)
                        pannelElement.removeNode(true);
                    else 
                        pannelElement = null;
                }
            } catch (e) {}
        }
        objRef.ad.panels = new Object();
    }
    function isWindPanelOpen(objRef) {
        var panels = objRef.ad.panels;
        for (var i in panels) {
            if (!objRef.isPanelName(i))
                continue;
            if (panels[i].isOpen() && panels[i].strWmode.toLowerCase() == "window")
                return true;
        }
        return false;
    }
    function reportPanelHide(name) {
        try {
            var panel = this.ad.panels[name];
            this.ebendtimerHandler(name + "_duration");
        } catch (e) {}
    }
    function ebReplayHandler() {
        try {
            var strFunc = this.objName + ".replay()";
            window.setTimeout(strFunc, 50);
            this.ebsysteminteractionHandler("ebReplay");
        } catch (e) {}
    }
    function ebAutoReplayHandler() {
        try {
            var strFunc = this.objName + ".replay()";
            window.setTimeout(strFunc, 50);
        } catch (e) {}
    }
    function replayExp() {
        this.hideAllPanels();
        this.replayRes(this.bannerRes, this.ad.strDefaultFlash, false);
        this.ebshowHandler();
        this.ebsysteminteractionHandler("ebReplay");
    }
    function updateTemplateInteractions() {
        var interactions = this.interactions;
        var attr = "ebPanelsViewed";
        var lowerAttr = attr.toLowerCase();
        var inter = new ebCInteraction(attr);
        inter.fCloseFlag = 0;
        inter.fCountAsClick = 0;
        inter.nCategory = 2;
        inter.numLeftToReport = 1;
        interactions[lowerAttr] = inter;
        var panels = this.ad.panels;
        for (var attr in panels) {
            try {
                if (!this.isPanelName(attr))
                    continue;
                var interactionKey = ebCTemplateBSingleExpBanner.strPanelIntKeyPrefix + attr;
                if (typeof(interactions[interactionKey]) != "object") {
                    inter = new ebCInteraction(panels[attr].strPanelName, 0);
                    inter.fCloseFlag = 0;
                    inter.fCountAsClick = 0;
                    inter.nInitiated = 1;
                    inter.fIsPanel = 1;
                    interactions[interactionKey] = inter;
                } else 
                    interactions[interactionKey].setType(0);
                if (typeof(interactions[attr + "_autoshow"]) != "object") {
                    inter = new ebCInteraction(panels[attr].strPanelName + "_autoshow", 0);
                    inter.fCloseFlag = 0;
                    inter.fCountAsClick = 0;
                    inter.fIsPanel = 1;
                    interactions[attr + "_autoshow"] = inter;
                } else 
                    interactions[attr + "_autoshow"].setType(0);
                if (typeof(interactions[attr + "_duration"]) != "object") {
                    inter = new ebCInteraction(panels[attr].strPanelName + "_duration", 1);
                    inter.fCloseFlag = 0;
                    inter.fCountAsClick = 0;
                    inter.fIsPanel = 1;
                    interactions[attr + "_duration"] = inter;
                } else 
                    interactions[attr + "_duration"].setType(1);
            } catch (e) {}
        }
    }
    function isMouseOverBanner(mouseX, mouseY) {
        var x = parseInt(ebGetRealLeft(this.bannerRes));
        var y = parseInt(ebGetRealTop(this.bannerRes));
        var width = parseInt(this.adData.nWidth);
        var height = parseInt(this.adData.nHeight);
        return ((x <= mouseX && mouseX <= x + width) && (y <= mouseY && mouseY <= y + height));
    }
    function retractPanels(strPanelName) {
        try {
            strPanelName = strPanelName.toLowerCase();
            var panels = this.ad.panels;
            for (var attr in panels) {
                try {
                    if (!this.isPanelName(attr))
                        continue;
                    var panel = panels[attr];
                    if (panel.fRetractOffAd || ((strPanelName == attr) && panel.fRetractOffThisPanel)) {
                        this.WSEventSender.eventType = ebWSEvent.autoRetract;
                        this.hidePanel(attr, false);
                    } else {}
                    if ((strPanelName == attr) || (strPanelName == "")) {
                        var path = panel.strProxyPath;
                        if (path != "") {
                            try {
                                this.callFlashFunc(panel.flashObj, path, 'retract', "");
                            } catch (e) {}
                        }
                    }
                } catch (e) {}
            }
            this.WSEventSender.resetEvent();
        } catch (e) {}
    }
    function retractSinglePanel(strPanelName) {
        try {
            strPanelName = strPanelName.toLowerCase();
            var panels = this.ad.panels;
            if (!this.isPanelName(strPanelName)) {
                return;
            }
            var path = panels[strPanelName].strProxyPath;
            if (path != "") {
                try {
                    this.callFlashFunc(panels[strPanelName].flashObj, path, 'retract', "");
                } catch (e) {}
            }
            if (panels[strPanelName].fRetractOffThisPanel) {
                this.WSEventSender.eventType = ebWSEvent.autoRetract;
                this.hidePanel(strPanelName, false);
                this.WSEventSender.resetEvent();
            } else {}
        } catch (e) {}
    }
    function showWhenReady(name) {
        if ((typeof(name) == "undefined") || ( name == "undefined"))
            name = "";
        this.showPanel(name, true);
    }
    function ebCollapsePanelHandler(params) {
        try {
            var paramsArr = params.split(",");
            var panelName = paramsArr[0];
            var type = paramsArr[1];
            type = type.toLowerCase();
            if (type == "auto")
                this.ebautohideHandler(panelName);
            else if (type == "user")
                this.ebhideHandler(panelName);
            else {}
        } catch (e) {}
    }
    function ebExpandPanelHandler(params) {
        try {
            var paramsArr = params.split(",");
            var panelName = paramsArr[0];
            var type = paramsArr[1];
            type = type.toLowerCase();
            if (type == "auto") {
                this.ebautoshowHandler(panelName);
            } else if (type == "user") {
                this.ebshowHandler(panelName);
            } else if (type == "whenready") {
                this.ebshowwhenreadyHandler(panelName);
            } else {}
        } catch (e) {}
    }
    function ebsetseproxyHandler(path, objName) {
        var strPanelName = "";
        if (objName.indexOf(ebgstrPanelObjName)!=-1) {
            var arrParams = objName.split(ebgstrDelimiter);
            strPanelName = arrParams[2];
        }
        strPanelName = strPanelName.toLowerCase();
        if (strPanelName != "")
            this.ad.panels[strPanelName].setStripProxy(path);
        else {}
    }
    function initSE(strParams) {
        try {
            strParams = strParams.split(",");
            this.adStripAttr = new Object();
            this.adStripAttr.nLeft = parseInt(strParams[0]);
            this.adStripAttr.nTop = parseInt(strParams[1]);
            this.adStripAttr.nRight = this.adStripAttr.nLeft + parseInt(strParams[2]);
            this.adStripAttr.nBottom = this.adStripAttr.nTop + parseInt(strParams[3]);
        } catch (e) {}
    }
    function ebinitseHandler(strParams, strObjId) {
        this.initSE(strParams);
        this.showHideElementsFromFlash(true, strObjId);
    }
    function onSEExpandStarted(actionType, strObjId) {
        var strPanelName = "";
        if (strObjId.indexOf(ebgstrPanelObjName)!=-1) {
            var arrParams = strObjId.split(ebgstrDelimiter);
            strPanelName = arrParams[2];
        }
        var panelName = strPanelName.toLowerCase();
        var commandType = actionType.toLowerCase();
        if (commandType == "user") {
            this.handleSystemInteraction("ebPanelsViewed");
            var interactionKey = ebCTemplateBSingleExpBanner.strPanelIntKeyPrefix + panelName;
            this.ebsysteminteractionHandler(interactionKey);
        } else {
            this.ebsysteminteractionHandler(panelName + "_autoshow");
        }
        this.ebstarttimerHandler(panelName + "_duration");
        if (this.isDefaultPanelPlayingVideo(this))
            this.dwellTimeManager.handleVideoPlay(0);
        this.WSEventSender.eventType=!this.isSEAd() ? ebWSEvent.expandVideoStrip : ebWSEvent.expandSE;
        this.WSEventSender.actionType = actionType;
        this.WSEventSender.elementID = strObjId;
        this.WSEventSender.sendEvent(strPanelName);
        this.WSEventSender.resetEvent();
        this.panelFrequency.onExpand();
    }
    function ebseexpandstartedHandler(actionType, strObjId) {
        wlxExpand();
        this.showHideElementsFromFlash(false, strObjId);
        this.onSEExpandStarted(actionType, strObjId);
    }
    function ebseretractstartedHandler(actionType, strObjId) {
        var panelName = this.defaultPanel.strPanelName.toLowerCase();
        this.dwellTimeManager.handlePanelClose(panelName);
        this.ebendtimerHandler(panelName + "_duration");
        this.WSEventSender.eventType=!this.isSEAd() ? ebWSEvent.retractVideoStrip : ebWSEvent.retractSE;
        this.WSEventSender.actionType = actionType;
        this.WSEventSender.elementID = strObjId;
        var strPanelName = "";
        if (strObjId.indexOf(ebgstrPanelObjName)!=-1) {
            var arrParams = strObjId.split(ebgstrDelimiter);
            strPanelName = arrParams[2];
        }
        this.WSEventSender.sendEvent(strPanelName);
        this.WSEventSender.resetEvent();
    }
    function ebseretractfinishedHandler(actionType, strObjId) {
        wlxRetract();
        this.showHideElementsFromFlash(true, strObjId);
    }
    function ebsemouseoverHandler() {
        var delayedExpPanelsArr = null;
        if (this.defaultPanel.fDelayedExpansion) {
            delayedExpPanelsArr = new Array();
            delayedExpPanelsArr[0] = this.defaultPanel.strPanelName;
            if (delayedExpPanelsArr != null)
                this.initDelayedExpPanels(delayedExpPanelsArr);
        }
    }
    function showHideElementsFromFlash(fShow, objName) {
        var strPanelName = "";
        if (objName.indexOf(ebgstrPanelObjName)!=-1) {
            var arrParams = objName.split(ebgstrDelimiter);
            strPanelName = arrParams[2];
        }
        strPanelName = strPanelName.toLowerCase();
        if (strPanelName == "") {
            return;
        }
        var fWMPDriver = false;
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
            var driver = this.arrVideoLoaderDrivers[i];
            if (driver.fWMPDriver) {
                fWMPDriver = true;
                break;
            }
        }
        if (!fWMPDriver) {
            var panelObj = this.ad.panels[strPanelName];
            var panelAttrObj = this.buildPanelAttr(panelObj);
            fShow = eval(fShow);
            if (fShow) {
                if (panelObj.fHideElements) {
                    this.showPageElements(this.adTI.getWin(), panelAttrObj);
                    panelObj.fHideElements = false;
                }
                setPanelClip(this, panelObj, true);
            } else {
                setPanelClip(this, panelObj, false);
                if (!panelObj.fHideElements) {
                    this.hidePageElements(this.adTI.getWin(), panelAttrObj);
                    panelObj.fHideElements = true;
                }
            }
        } else {}
    }
    function fullPlay() {
        if (this.fReportFullPlay) {
            this.ebsysteminteractionHandler("ebFullPlay");
            this.fReportFullPlay = false
        }
    }
    function getResOrigSize(resObj) {
        var arrSize = new Array();
        if (resObj == this.bannerRes) {
            arrSize[0] = this.ad.nDefaultFlashWidth;
            arrSize[1] = this.ad.nDefaultFlashHeight;
            return arrSize;
        } else {
            var panels = this.ad.panels;
            for (var panelName in panels) {
                if (!this.isPanelName(panelName))
                    continue;
                var panel = panels[panelName];
                if (panel.flashObj == resObj) {
                    arrSize[0] = panel.nWidth;
                    arrSize[1] = panel.nHeight;
                    return arrSize;
                }
            }
        }
        return null;
    }
    function getTemplateTrackedDiv(resObj) {
        var trackedDiv = null;
        if (resObj == this.bannerRes)
            trackedDiv = this.bannerRes.parentNode;
        else {
            var panels = this.ad.panels;
            for (var panelName in panels) {
                if (!this.isPanelName(panelName))
                    continue;
                var panel = panels[panelName];
                if (panel.flashObj == resObj) {
                    trackedDiv = panel.panelDiv;
                    break;
                }
            }
        }
        return trackedDiv;
    }
    function getElementById(strElementId) {
        var element = null;
        if (!this.fEbExpBannerIM || strElementId.indexOf("Panel") < 0)
            element = this.adTI.getDoc().getElementById(strElementId);
        else {
            var panels = this.ad.panels;
            for (var panelName in panels) {
                if (!this.isPanelName(panelName))
                    continue;
                var panel = panels[panelName];
                element = panel.oPopupObj.document.getElementById(strElementId);
                if (element != null) {
                    if (typeof(element.ownerDocument) == "undefined")
                        element.ownerDocument = panel.oPopupObj.document;
                    break;
                }
            }
        }
        return element;
    }
    function createVideoLoaderDriver(strObjID, strPath, fStreaming, fStretchToFit, nXPos, nYPos, nWidth, nHeight, fHandleClick, nIndex, fNewComp) {
        var fIMPanel = this.fEbExpBannerIM && strObjID.indexOf("Panel")>-1;
        var flashObj = this.getElementById(strObjID);
        return new ebCExpVideoLoaderDriver(fIMPanel, strPath, fStreaming, fStretchToFit, nXPos, nYPos, nWidth, nHeight, fHandleClick, flashObj, nIndex, this, fNewComp);
    }
    function isPanelName(strName) {
        var panels = this.ad.panels;
        var fIsPanel = ((typeof(panels[strName]) != "undefined") && ebInstanceOf(panels[strName], "ebCPanel"));
        if (!fIsPanel) {}
        return fIsPanel;
    }
    function shouldHandleInteraction(strObjID) {
        var fPanelsClickable = (this.ad.fPanelsClickable || (typeof(this.ad.fPanelsClickable) == "undefined"));
        if (!fPanelsClickable && (strPanelName != ""))
            return false;
        else 
            return true;
    }
    function doOnPositionLoad() {
        if (this.strCBFunc != "")
            try {
                eval(this.strCBFunc);
        } catch (e) {}
        this.strCBFunc = "";
    }
    function informSEComponenttoDelay(objRef) {
        try {
            var defaultPanel = objRef.defaultPanel;
            try {
                var path = defaultPanel.strProxyPath;
                if (path != "") {
                    try {
                        objRef.callFlashFunc(defaultPanel.flashObj, defaultPanel.strProxyPath, 'delayedExp', "");
                    } catch (e) {}
                }
            } catch (e) {}
        } catch (e) {}
    }
    function showDelayedExpPanels() {
        try {
            if (this.delayedExpPanels.shouldExpand()) {
                this.resetDelayedExp();
                if (this.isSEAd()) {
                    informSEComponenttoDelay(this);
                } else {
                    var length = this.delayedExpPanels.getLength();
                    for (var i = 0; i < length; i++) {
                        var panelName = this.delayedExpPanels.getValue(i);
                        this.WSEventSender.eventType = ebWSEvent.autoExpand;
                        this.showPanel(panelName);
                        this.WSEventSender.resetEvent();
                    }
                }
            } else {}
        } catch (e) {}
    }
    function resetDelayedExp() {
        try {
            if (this.delayedExpPanels) {
                gEbDisplayPage.removeInterval(this.objName + "_delayedExp");
                this.delayedExpPanels.reset();
            }
        } catch (e) {}
    }
    function replay() {
        if (this.fShouldInitialize)
            this.init();
        this.hideAllPanels();
        this.replayRes(this.bannerRes, this.ad.strDefaultFlash, false);
        replayAutoPanel(this);
    }
    function getResWMP(resObj) {
        var drivers = new Array;
        for (var i = 0; i < this.arrVideoLoaderDrivers.length; i++) {
            var driver = this.arrVideoLoaderDrivers[i];
            if ((driver.resObj == resObj) && driver.fWMPDriver)
                drivers[drivers.length] = driver;
        }
        return drivers;
    }
    function isDefaultPanelPlayingVideo(objRef) {
        var fShouldHandle = false;
        var drivers = objRef.arrVideoLoaderDrivers;
        for (var i = 0; i < drivers.length; i++) {
            if ((objRef.defaultPanel.flashObj.id == drivers[i].resObj.id) && (drivers[i].strMovieName != "")) {
                fShouldHandle = true;
                break;
            }
        }
        return fShouldHandle;
    }
    function displayImage(objRef) {
        var fIsMassV = (objRef.adData.sDefaultAdVersion != "");
        if (fIsMassV) {
            var massVerInfo = getDefaultImagePerVersionData(objRef);
        }
        var strName = objRef.myName(ebCTemplateBSingleExpBanner.strImageName);
        var TIobj = new ebCTIObj(strName);
        if (fIsMassV && massVerInfo.isValid) {
            if (objRef.countDefaultImage(massVerInfo.defaultImagePath)) {
                TIobj.src = objRef.ad.strDefaultImage;
            } else {
                TIobj.src = massVerInfo.defaultImagePath;
            }
        } else {
            TIobj.src = objRef.ad.strDefaultImage;
        }
        TIobj.width = objRef.adData.nWidth;
        TIobj.height = objRef.adData.nHeight;
        if (fIsMassV && massVerInfo.isValid) {
            if (massVerInfo.jumpUrl) {
                var intName = "ebDefaultClick_SV2:" + massVerInfo.jumpUrl + '' + massVerInfo.selectedVersion;
                TIobj.onclick = objRef.scriptWin + "." + objRef.objName + ".ebinteractionHandler('" + intName + "')";
            }
        } else if (objRef.ad.fLink) {
            TIobj.onclick = objRef.scriptWin + "." + objRef.objName + ".ebinteractionHandler('ebDefaultClick')";
        }
        var method = "write";
        var myIframe = gEbDisplayPage.getIframeData();
        if (myIframe != null) {
            method = "before";
            TIobj.refElement = myIframe;
            TIobj.containerStyle.display = "inline";
        }
        objRef.adTI.addImage(method, TIobj);
        var imageElem = objRef.getElementById(strName);
        gEbTI.addEventHandler("mouseover", "ebOnMouseOverAd", imageElem);
        gEbTI.addEventHandler("mouseout", "ebOnMouseOutOfAd", imageElem);
        if (myIframe != null)
            hideIframe(objRef, myIframe);
        objRef.bannerRes = imageElem;
        if (!objRef.fEbExpBannerIM) {
            objRef.checkIfAdIsVisibile(imageElem.id);
        }
    }
    function getDefaultImagePerVersionData(objRef) {
        var url = "";
        if (objRef.adData.sDefaultAdVersion != "" && objRef.adData.sAdBasePath != "") {
            var defaultAdVersion = objRef.adData.sDefaultAdVersion;
            defaultAdVersion = objRef.adData.massVersionFolderDivider > 0 ? fixMVPathString(defaultAdVersion, objRef.adData.massVersionFolderDivider) : defaultAdVersion;
            url = ebResourcePath + "" + objRef.adData.sAdBasePath + "" + defaultAdVersion + ".xml";
        }
        var xmlResponseData = {
            isValid: false,
            jumpUrl: "",
            defaultImagePath: "",
            selectedVersion: ""
        };
        if (url != "") {
            var xmlDocument = ebXMLHttpRequest(url, false, true);
            if (typeof (xmlDocument) != "undefined" && xmlDocument != null && xmlDocument != "") {
                var clickThroughXmlElem = xmlDocument.documentElement.attributes.getNamedItem("productClickThrough");
                var defaultImageXmlElem = xmlDocument.documentElement.attributes.getNamedItem("DefaultImage");
                var svSuffixIndex = objRef.adData.sDefaultAdVersion.indexOf("_");
                xmlResponseData = {
                    isValid: (defaultImageXmlElem != null && defaultImageXmlElem.value != ""),
                    jumpUrl: (clickThroughXmlElem != null) ? clickThroughXmlElem.value: "",
                    defaultImagePath: (defaultImageXmlElem != null) ? defaultImageXmlElem.value: "",
                    selectedVersion: (svSuffixIndex == ( - 1)) ? objRef.adData.sDefaultAdVersion: objRef.adData.sDefaultAdVersion.substring(0, svSuffixIndex)
                };
                if (xmlResponseData.isValid&&!isNaN(parseFloat(xmlResponseData.defaultImagePath)) && isFinite(xmlResponseData.defaultImagePath)) {
                    xmlResponseData.isValid = false;
                    var assets = objRef.ad.nonVideoAssets;
                    var assetName = "ebMovie" + xmlResponseData.defaultImagePath;
                    if (typeof (assets[assetName].url) != "undefined") {
                        xmlResponseData.defaultImagePath = (gEbFlyLocal) ? assets[assetName].url : ebResourcePath + assets[assetName].url;
                        xmlResponseData.isValid = true;
                    }
                }
            }
        }
        return xmlResponseData;
    }
    function displayFlash(objRef) {
        addBannerDivAndHandler(objRef);
        if (!gEbBC.isIE() && gEbDisplayPage.getIframeData() == null) {
            var strFunc = objRef.objName + ".addFlashToPage()";
            window.setTimeout(strFunc, 100);
        } else 
            objRef.addFlashToPage();
    }
    function addBannerDivAndHandler(objRef) {
        var myIframe = gEbDisplayPage.getIframeData();
        var strName = objRef.myName(ebCTemplateBSingleExpBanner.strFlashObjName);
        var fInlineBanner = ((objRef.ad.fPushdown == false) || ((typeof(gfEbInlineBanner) != "undefined") && (gfEbInlineBanner)));
        var strDivName = objRef.myName(ebCTemplateBSingleExpBanner.strBannerDivName);
        var fsCommandhandler = objRef.scriptWin + "." + objRef.objName + '.handleFSCommand(command,args,"' + strName + '");';
        var width = objRef.adData.nWidth;
        var height = objRef.adData.nHeight;
        if (myIframe == null) {
            objRef.adTI.addFsCommandHandler("write", strName, fsCommandhandler);
            var divTIobj = new ebCTIObj(strDivName);
            if (fInlineBanner)
                divTIobj.style.display = "inline";
            divTIobj.style.width = width + "px";
            divTIobj.style.margin = "0 auto";
            objRef.bannerDiv = objRef.adTI.addDiv("write", divTIobj);
        } else {
            objRef.adTI.addFsCommandHandler("append", strName, fsCommandhandler);
            if (!gEbBC.isIE()) {
                var DivTIobj = new ebCTIObj(strDivName);
                DivTIobj.style.width = width + "px";
                DivTIobj.style.height = height + "px";
                if (fInlineBanner)
                    DivTIobj.style.display = "inline";
                DivTIobj.refElement = myIframe;
                objRef.bannerDiv = objRef.adTI.addDiv("before", DivTIobj);
            }
        }
    }
    function addFlashToPage() {
        var strDivName = this.myName(ebCTemplateBSingleExpBanner.strBannerDivName);
        var myIframe = gEbDisplayPage.getIframeData();
        var tempRefElement = this.getElementById(strDivName);
        var fInIframe = (myIframe != null);
        var fCallMethodInTimeOut = ((tempRefElement == null) && (!gEbBC.isIE() && fInIframe));
        if (fCallMethodInTimeOut) {
            var strFunc = this.objName + ".addFlashToPage()";
            window.setTimeout(strFunc, 100);
            return;
        } else {
            if ((tempRefElement == null) && ((!gEbBC.isIE() && fInIframe) ||!fInIframe)) {
                this.stopAddResources();
                return;
            }
        }
        var strName = this.myName(ebCTemplateBSingleExpBanner.strFlashObjName);
        this.ad.strDefaultFlash = this.buildResUrl(this.ad.strDefaultFlash, strName);
        if (gEbFlashVer < 6)
            this.ad.strDefaultFlash += this.buildFlashVars(strName);
        var TIobj = new ebCTIObj(strName);
        this.ad.strDefaultFlash = (!this.isSEAd()) ? this.ad.strDefaultFlash : ebBigS + "/Res/Empty_Movie.swf";
        TIobj.src = this.ad.strDefaultFlash;
        TIobj.play = true;
        TIobj.fFixOperAborted = this.getFixOperationAborted();
        TIobj.wmode = "opaque";
        if (this.adData.strWmode != "") {
            var wmode = this.adData.strWmode.toLowerCase();
            if ((wmode == "transparent") || (wmode == "window") || (wmode == "opaque"))
                TIobj.wmode = wmode;
        }
        TIobj.version = this.ad.flFlashVer;
        TIobj.style.width = this.adData.nWidth + "px";
        TIobj.style.height = this.adData.nHeight + "px";
        TIobj.containerStyle.margin = "0 auto";
        TIobj.containerStyle.width = this.adData.nWidth + "px";
        if (gEbFlashVer >= 6)
            TIobj.flashVars = this.buildFlashVars(strName);
        var fInlineBanner = ((this.ad.fPushdown == false) || ((typeof(gfEbInlineBanner) != "undefined") && (gfEbInlineBanner)));
        if (fInlineBanner)
            TIobj.containerStyle.display = "inline";
        if (myIframe == null) {
            TIobj.refElement = tempRefElement;
            this.bannerRes = this.adTI.addFlash("append", TIobj);
            if (this.bannerRes != null)
                this.bannerDiv = this.bannerRes.parentNode;
        } else {
            TIobj.refElement = myIframe;
            if (!gEbBC.isIE()) {
                TIobj.refElement = this.bannerDiv;
                this.bannerRes = this.adTI.addFlash("append", TIobj);
            } else {
                this.bannerRes = addRelativeObj(this, myIframe, TIobj, "flash");
                if (this.bannerRes != null) {
                    this.bannerDiv = this.bannerRes.parentNode;
                    this.bannerDiv.id = strDivName;
                    this.bannerDiv.vAlign = "top";
                }
            }
            hideIframe(this, myIframe);
        }
        this.init();
        this.adData.customEventHandler.onAfterDefaultBannerShow(this.objName);
        if (!this.fEbExpBannerIM) {
            this.checkIfAdIsVisibile(this.bannerRes.id);
        }
    }
    function addRelativeObj(objRef, refEl, propObj, objType) {
        ebTable = objRef.adTI.getDoc().createElement("table");
        ebTable.setAttribute("cellPadding", "0");
        ebTable.setAttribute("cellSpacing", "0");
        ebTable.style.display = "inline";
        ebTable.id = objRef.myName(ebCTemplateBSingleExpBanner.strBannerTableName);
        var row = ebTable.insertRow(0);
        var cell = objRef.adTI.getDoc().createElement("TD");
        var TIobj = new ebCTIObj("");
        TIobj.style.width = objRef.adData.nWidth + "px";
        TIobj.style.height = objRef.adData.nHeight + "px";
        TIobj.style.display = "inline";
        TIobj.refElement = cell;
        relContainer = objRef.adTI.addDiv("append", TIobj);
        row.appendChild(cell);
        var parentNode = refEl.parentNode;
        if ((parentNode.tagName.toLowerCase() == "a") || (parentNode.tagName.toLowerCase() == "")) {
            refEl = parentNode;
            parentNode = parentNode.parentNode;
        }
        if (parentNode.tagName.toLowerCase() == "table") {
            var newRow = parentNode.insertRow(0);
            parentNode = newRow;
        }
        if (parentNode.tagName.toLowerCase() == "tr") {
            var newCell = objRef.adTI.getDoc().createElement("TD");
            newCell.appendChild(refEl);
            parentNode.appendChild(newCell);
            newCell.appendChild(ebTable);
        } else {
            parentNode.insertBefore(ebTable, refEl);
        }
        propObj.refElement = relContainer;
        if (objType == "flash")
            return objRef.adTI.addFlash("append", propObj);
        else 
            return objRef.adTI.addImage("append", propObj);
    }
    function handlePreShow(objRef) {
        if ((objRef.adData.nDownloadMode != 1) || gEbDocLoaded) {
            if (objRef.ad.fPreLoadPanels) {
                if (gEbBC.isIE())
                    objRef.loadPanels();
                else {
                    var strFunc = objRef.objName + ".loadPanels()";
                    window.setTimeout(strFunc, 50);
                }
            } else if (gEbDocLoaded && (objRef.ad.nUponShow > 1)) {
                objRef.loadDefaultPanel();
            }
            objRef.showAutoPanel();
        }
        if (objRef.ad.fPushdown && (objRef.ad.nUponShow > 1))
            objRef.handleUponShow();
    }
    function showAutoPanel() {
        var fSExpBanner = this.isSEAd();
        if (this.ad.nUponShow > 1) {
            if (this.panelFrequency == null&&!fSExpBanner) {
                if (!this.fShowedAutoPanel) {
                    if (this.defaultPanel.fAutoShow)
                        this.showPanel(this.defaultPanel.strPanelName, true, true);
                    this.fShowedAutoPanel = true;
                }
            } else {
                var fShouldExpand = this.isSEAd() ? true: this.panelFrequency.shouldExpand();
                if ((!this.ad.fPushdown) && (!this.fShowedAutoPanel) && (fShouldExpand)) {
                    if (!fSExpBanner) {
                        this.WSEventSender.eventType = ebWSEvent.uponShow;
                        this.WSEventSender.sendEvent(this.defaultPanel.strPanelName);
                    }
                    this.showPanel(this.defaultPanel.strPanelName, true, true);
                    if ((this.panelFrequency != null) && (!this.isSEAd()))
                        this.panelFrequency.onExpand();
                    this.fShowedAutoPanel = true;
                }
            }
        }
    }
    function replayAutoPanel(objRef) {
        if (objRef.fShowedAutoPanel) {
            if (objRef.ad.fPushdown)
                objRef.waitForPullUpToEnd();
            else {
                objRef.showPanel(objRef.defaultPanel.strPanelName, true, true);
            }
        }
    }
    function setPanelsParams(objRef) {
        var panelParams = new ebCPanelParams();
        panelParams.adData = objRef.adData;
        panelParams.scriptWin = objRef.scriptWin;
        panelParams.flFlashVer = objRef.ad.flFlashVer;
        panelParams.adTI = objRef.adTI;
        var panels = objRef.ad.panels;
        if (typeof(objRef.ad.fVideoStrip) == "undefined")
            objRef.ad.fVideoStrip = false;
        var fVideoStrip = objRef.isVideoStripAd();
        for (var panelName in panels) {
            var panel = panels[panelName];
            try {
                panel.panelParams = panelParams;
                var strPanelResID = panel.myName(ebgstrPanelObjName);
                if (fVideoStrip) {
                    var nForcePlayMode = 0;
                    if ((typeof(gfEbForceStreaming) != "undefined") && gfEbForceStreaming)
                        nForcePlayMode = 1;
                    panel.src = objRef.buildResUrl(panel.src, strPanelResID, "", nForcePlayMode)
                } else 
                    panel.src = objRef.buildResUrl(panel.src, strPanelResID);
                if (gEbFlashVer < 6)
                    panel.src += objRef.buildFlashVars(strPanelResID);
            } catch (e) {}
        }
    }
    function hideIframe(objRef, myIframe) {
        objRef.IframeWidth = myIframe.width;
        objRef.IframeHeight = myIframe.height;
        if (gEbBC.isIE()) {
            objRef.IframeStyleWidth = myIframe.currentStyle.width;
            objRef.IframeStyleHeight = myIframe.currentStyle.height;
        } else {
            objRef.IframeStyleWidth = myIframe.ownerDocument.defaultView.getComputedStyle(myIframe, null).getPropertyValue("width");
            objRef.IframeStyleHeight = myIframe.ownerDocument.defaultView.getComputedStyle(myIframe, null).getPropertyValue("height");
        }
        objRef.IframeVis = myIframe.style.visibility;
        objRef.IframeBorder = myIframe.style.border;
        myIframe.style.visibility = "hidden";
        myIframe.width = 0;
        myIframe.height = 0;
        myIframe.style.width = "0px";
        myIframe.style.height = "0px";
        myIframe.style.border = "0px";
    }
    function setPanelClip(objRef, panelObj, fClip) {
        try {
            if (panelObj.isClipSupported() || panelObj.isVideoStripSupportedSafari()) {
                var attr = objRef.adStripAttr;
                var strClip = "rect(";
                if (fClip) {
                    strClip += attr.nTop + "px " + attr.nRight + "px " + attr.nBottom + "px " + attr.nLeft + "px)";
                    panelObj.panelDiv.style.clip = strClip;
                } else {
                    strClip += ebFormat("auto {0}px {1}px auto)", panelObj.nWidth, panelObj.nHeight);
                    panelObj.panelDiv.style.clip = strClip;
                    if (panelObj.flashObj && (gEbBC.isSafari() || gEbBC.isChrome())) {
                        panelObj.flashObj.style.width = parseInt(panelObj.flashObj.style.width) + 1 + "px";
                        setTimeout(function () {
                            panelObj.flashObj.style.width = parseInt(panelObj.flashObj.style.width) - 1 + "px";
                        }, 20);
                    }
                    if (gEbBC.isIE() && (gEbBC.getVersion() <= 8.0 || window.document.documentMode <= 8)) {
                        if (gEbBC.getVersion() == 8 || window.document.documentMode == 8) {
                            panelObj.panelDiv.style.clip = null;
                        } else {
                            panelObj.panelDiv.style.clip = "rect(auto, auto, auto, auto)";
                        }
                    } else {
                        if (gEbBC.isSafari()) {
                            panelObj.panelDiv.style.clip = null;
                        } else {
                            panelObj.panelDiv.style.clip = "auto";
                        }
                    }
                }
            }
        } catch (e) {}
    }
    function getPanelName(strObjID) {
        try {
            var strPanelName = "";
            if (strObjID.indexOf(ebgstrPanelObjName)!=-1) {
                var arrParams = strObjID.split(ebgstrDelimiter);
                var nBegin = strObjID.indexOf(arrParams[2]);
                var nEnd = strObjID.lastIndexOf(ebgstrDelimiter);
                strPanelName = strObjID.substring(nBegin, nEnd);
            }
            return strPanelName.toLowerCase();
        } catch (e) {
            return "";
        }
    }
    function loadPosition(objRef, strCBFunc) {
        var scriptEl = document.getElementById("ebPosition");
        if (scriptEl != null) {} else {
            if (objRef.objType == 2) {
                objRef.strCBFunc = strCBFunc;
                var src = ebBigS + "Position" + ebPositionVer + ".js";
                var name = "ebPosition";
                objRef.loadScriptFile("write", src, name);
                objRef.fIsReady = false;
            }
        }
    }
    function addPanelToPage(objRef, panel) {
        var top = ebGetRealTop(objRef.bannerRes);
        var left = ebGetRealLeft(objRef.bannerRes);
        panel.addToPage(objRef.objName, top, left);
    }
    function loadAndPlayPanel(objRef, panel, fWhenReady) {
        if (!panel.fFirstPlay) {
            objRef.reloadRes(panel.flashObj, panel.src, panel.flashContainer, false);
            if (panel.oPopupObj) {
                gEbDisplayPage.TI.addEventHandler("mouseover", "ebOnmouseOverIMPanel", panel.flashObj);
                gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnmouseOutIMPanel", panel.flashObj);
            } else if (!gEbBC.isIE())
                gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnmouseOutOfAd", panel.flashObj);
        } else if (objRef.fEbExpBannerIM) {
            if (gEbFlashVer >= 6)
                objRef.setRandFlashVar(panel.flashObj);
        }
        var panelName = panel.strPanelName;
        objRef.dwellTimeManager.handlePanelOpen(panelName.toLowerCase());
        if (fWhenReady)
            objRef.playWhenReady(panelName);
        else 
            objRef.playWhenFirstFrameLoaded(panelName);
    }
    function getPanel(objRef, name) {
        var panel = null;
        if (name == "") {
            if (objRef.defaultPanel == null) {} else {
                panel = objRef.defaultPanel;
            }
        } else {
            var panels = objRef.ad.panels;
            name = name.toLowerCase();
            panel = panels[name];
            if (typeof(panel) == "undefined") {}
        }
        return panel;
    }
    function initDelayedExpPanels(delayedExpPanelsArr) {
        try {
            var nDelayedExpInterval = this.adData.nDelayedExpInterval ? this.adData.nDelayedExpInterval: this.ad.nDelayedExpInterval;
            if (this.delayedExpPanels == null) {
                this.delayedExpPanels = new ebCDelayedExpPanels();
                var xscale = 1;
                var yscale = 1;
                var nDelayedExpMaxV = this.adData.nDelayedExpMaxV ? this.adData.nDelayedExpMaxV: this.ad.nDelayedExpMaxV;
                var flashObjRef = (!this.isSEAd()) ? this.bannerRes: this.defaultPanel.flashObj;
                this.delayedExpPanels.init(flashObjRef, delayedExpPanelsArr, xscale, yscale, nDelayedExpMaxV, nDelayedExpInterval);
            }
            var strFunc = this.objName + ".showDelayedExpPanels();";
            gEbDisplayPage.addInterval(this.objName + "_delayedExp", strFunc, Number(nDelayedExpInterval), window);
        } catch (e) {}
    }
}
ebCTemplateBSingleExpBanner.strFlashObjName = ebgstrBannerObjName;
ebCTemplateBSingleExpBanner.strImageName = "ebBannerImage_";
ebCTemplateBSingleExpBanner.strBannerDivName = "ebBannerDiv_";
ebCTemplateBSingleExpBanner.strBannerTableName = "ebBannerTable_";
ebCTemplateBSingleExpBanner.strPanelIntKeyPrefix = "ebpanel_";
function ebCSinglePanel(strPanelName) {
    this.strClassName = "ebCPanel";
    this.strPanelName = strPanelName;
    this.objName = "";
    this.src = "";
    this.nPosType = 1;
    this.nXPos = 0;
    this.nYPos = 0;
    this.nBannerXPos = 0;
    this.nBannerYPos = 0;
    this.nTop = 0;
    this.nLeft = 0;
    this.nCorner = 1;
    this.fScroll = false;
    this.strWmode = "transparent";
    this.nMinZIndex = gnEbMinZIndex;
    this.nWidth = 0;
    this.nHeight = 0;
    this.nWeight = 0;
    this.flashObj = null;
    this.panelDiv = null;
    this.flashContainer = null;
    this.fOnPage = false;
    this.fOpen = false;
    this.fIsOpening = false;
    this.nLeftOffset = 0;
    this.nTopOffset = 0;
    this.nDuration =- 1;
    this.nTimeoutId =- 1;
    this.positionObj = null;
    this.posParams = null;
    this.fAutoExpand = false;
    this.fRetractOffAd = false;
    this.fRetractOffThisPanel = false;
    this.panelParams = null;
    this.fFirstPlay = true;
    this.fPushDown = false;
    this.streaming = null;
    this.fResReady = false;
    this.fAutoShow = false;
    this.fReportAutoShow = false;
    this.fReportAutoHide = false;
    this.bannerDU = null;
    this.bwParams = new ebCBWDetectionParams();
    this.strProxyPath = "";
    this.fHideElements = false;
    this.fDelayedExpansion = false;
    this.addToPage = addToPage;
    this.show = show;
    this.hide = hide;
    this.isOpen = isOpen;
    this.isPanelClosedByClick = isPanelClosedByClick;
    this.playFloatingPanel = playFloatingPanel;
    this.doOnResize = doOnResize;
    this.myName = myName;
    this.checkIfReady = checkIfReady;
    this.isClipSupported = isClipSupported;
    this.isVideoStripSupportedSafari = isVideoStripSupportedSafari;
    this.isMouseOverPanel = isMouseOverPanel;
    this.fullPlay = fullPlay;
    this.setPanelOffset = setPanelOffset;
    this.setPanelPosition = setPanelPosition;
    this.setStripProxy = setStripProxy;
    function addToPage(strHandlerName, top, left, fCheckWhenReady) {
        if (typeof(fCheckWhenReady))
            fCheckWhenReady = false;
        this.objName = strHandlerName + ".ad.panels['" + this.strPanelName.toLowerCase() + "']";
        this.bannerDU = eval(strHandlerName);
        if (this.fOnPage) {
            return;
        }
        this.fOnPage = true;
        loadFloatingPanel(this, strHandlerName, top, left, fCheckWhenReady);
    }
    function show(top, left) {
        try {
            if (typeof(top) != "undefined") {
                this.nBannerXPos = left;
                this.nBannerYPos = top;
            }
            this.setPanelOffset();
            if (ebCSinglePanel.fEbExpBannerIM)
                this.showFloatingPanelIM();
            else 
                showFloatingPanel(this);
            this.fOpen = true;
            this.fIsOpening = false;
        } catch (e) {}
    }
    function hide() {
        try {
            this.fOpen=!hideFloatingPanel(this);
        } catch (e) {}
    }
    function myName(name) {
        var adData = this.panelParams.adData;
        var sPanelName = this.strPanelName;
        var illegalChars = /[\W_]/;
        var strCharstoReplace = "`~!@#$%^&*()+-=[]{};:'<>/?.";
        if (illegalChars.test(sPanelName)) {
            for (var nIndex = 0; nIndex < sPanelName.length; nIndex++)
                if (strCharstoReplace.indexOf(sPanelName.charAt(nIndex))>-1)
                    sPanelName = sPanelName.replace(strCharstoReplace.charAt(strCharstoReplace.indexOf(sPanelName.charAt(nIndex))), strCharstoReplace.charCodeAt(strCharstoReplace.indexOf(sPanelName.charAt(nIndex))));
        }
        return (name + adData.nIndex + ebgstrDelimiter + sPanelName + ebgstrDelimiter + adData.strRand);
    }
    function fullPlay() {
        this.nTimeoutId =- 1;
        this.bannerDU.ebautohideHandler(this.strPanelName);
    }
    function loadFloatingPanel(panelObj, strHandlerName, top, left, fCheckWhenReady) {
        try {
            panelObj.panelParams.adData.customEventHandler.onBeforeAddPanelRes(panelObj.bannerDU.objName, panelObj.strPanelName);
        } catch (e) {}
        panelObj.panelParams.adTI.adjustEyeDivPos();
        panelObj.nBannerXPos = left;
        panelObj.nBannerYPos = top;
        var strName = panelObj.myName(ebCSinglePanel.strPanelDivObjName);
        var TIobj = new ebCTIObj(strName);
        TIobj.style.position = "absolute";
        TIobj.style.width = "0px";
        TIobj.style.height = "0px";
        TIobj.style.left = left + "px";
        TIobj.style.top = top + "px";
        if (!(gEbBC.isChrome() && gEbBC.getVersion() > 20)) {
            TIobj.style.zIndex = panelObj.nMinZIndex;
        }
        TIobj.refElement = panelObj.panelParams.adTI.getPanelsContainer();
        panelObj.panelDiv = panelObj.panelParams.adTI.addDiv("append", TIobj);
        var strName = panelObj.myName(ebCSinglePanel.strPanelObjName);
        TIobj = new ebCTIObj(strName);
        TIobj.src = panelObj.src;
        TIobj.play = false;
        TIobj.style.position = "absolute";
        TIobj.style.width = "0px";
        TIobj.style.height = "0px";
        if ((gEbBC.isChrome() && gEbBC.getVersion() > 20)) {
            TIobj.style.zIndex = panelObj.nMinZIndex;
        }
        TIobj.fFixOperAborted = panelObj.bannerDU.getFixOperationAborted();
        var panelWMode = panelObj.panelParams.adData.panelsWMode.toLowerCase();
        if (panelWMode != "") {
            if ((panelWMode == "transparent") || (panelWMode == "window") || (panelWMode == "opaque"))
                panelObj.strWmode = panelWMode;
        } else {
            if (panelObj.oPopupObj)
                panelObj.strWmode = "opaque";
        }
        TIobj.wmode = panelObj.strWmode;
        TIobj.refElement = panelObj.panelDiv;
        TIobj.version = panelObj.panelParams.flFlashVer;
        if (gEbFlashVer >= 6)
            TIobj.flashVars = panelObj.bannerDU.buildFlashVars(strName);
        var fsCommandhandler = panelObj.panelParams.scriptWin + "." + strHandlerName + '.handleFSCommand(command,args,"' + strName + '");';
        panelObj.panelParams.adTI.addFsCommandHandler("append", TIobj.name, fsCommandhandler);
        panelObj.flashObj = panelObj.panelParams.adTI.addFlash("append", TIobj);
        if (gEbBC.isOpera()) {
            panelObj.flashObj.style.width = "2px";
            panelObj.flashObj.style.height = "1px";
        }
        if (gEbBC.isIE()) {
            gEbTI.addEventHandler("mouseout", "ebOnmouseOutOfAd", panelObj.panelDiv);
            gEbTI.addEventHandler("mouseover", "ebOnMouseOverAd", panelObj.panelDiv);
        } else {
            gEbTI.addEventHandler("mouseout", "ebOnmouseOutOfAd", panelObj.flashObj);
            gEbTI.addEventHandler("mouseover", "ebOnMouseOverAd", panelObj.flashObj);
            if (panelObj.strWmode.toLowerCase() == "window") {
                if (!panelObj.bannerDU.isSEAd())
                    gEbTI.addEventHandler("mouseover", "ebOnmouseOverBanner", panelObj.panelDiv);
            }
        }
        if (panelObj.oPopupObj) {
            var oPopup = panelObj.oPopupObj;
            var panelDiv = panelObj.panelDiv;
            panelDiv.parentNode.removeChild(panelDiv);
            var fsCommandhandler = panelObj.panelParams.scriptWin + "." + strHandlerName + '.handleFSCommand(command,args,"' + strName + '");';
            var FSCommandScript = "<scr" + "ipt for=\"" + panelObj.flashObj.id + "\" event=\"FSCommand(command,args)\"> document.parentWindow.parent." + fsCommandhandler + "</scr" + "ipt>";
            var flashVars = panelObj.bannerDU.buildFlashVars(panelObj.flashObj.id);
            flashVars = "<PARAM NAME=\"FlashVars\" VALUE=\"" + flashVars + "\">";
            var divInnerHTML = panelDiv.innerHTML.replace("<PARAM NAME=\"FlashVars\" VALUE=\"\">", flashVars);
            oPopup.document.body.innerHTML = divInnerHTML + FSCommandScript;
            oPopup.document.body.style.backgroundColor = "transparent";
            oPopup.document.body.style.border = "none";
            panelObj.panelDiv = panelObj.bannerDU.getElementById(panelDiv.id);
            panelObj.flashObj = panelObj.bannerDU.getElementById(panelObj.flashObj.id);
            gEbDisplayPage.TI.addEventHandler("mouseover", "ebOnmouseOverIMPanel", panelObj.flashObj);
            gEbDisplayPage.TI.addEventHandler("mouseout", "ebOnmouseOutIMPanel", panelObj.flashObj);
        }
        panelObj.setPanelOffset();
        try {
            panelObj.panelParams.adData.customEventHandler.onAfterAddPanelRes(panelObj.bannerDU.objName, panelObj.strPanelName);
        } catch (e) {}
        if (fCheckWhenReady)
            panelObj.checkIfReady();
    }
    function setPanelOffset() {
        if (this.nPosType == 1)
            setRelativeOffset(this);
        else 
            setAbsolutePos(this);
    }
    function setRelativeOffset(panelObj) {
        panelObj.nLeft = parseInt(panelObj.nXPos) + parseInt(panelObj.nBannerXPos);
        panelObj.nTop = parseInt(panelObj.nYPos) + parseInt(panelObj.nBannerYPos);
        if (panelObj.oPopupObj)
            panelObj.adjustRelativeOffsetIM();
        switch (panelObj.nCorner) {
        case "1":
            break;
        case "2":
            panelObj.nLeft -= panelObj.nWidth;
            break;
        case "3":
            panelObj.nTop -= panelObj.nHeight;
            break;
        case "4":
            panelObj.nLeft -= panelObj.nWidth;
            panelObj.nTop -= panelObj.nHeight;
            break;
        default:
            break;
        }
    }
    function setAbsolutePos(panelObj) {
        if (panelObj.positionObj == null)
            panelObj.positionObj = new ebCPosition(panelObj.objName + ".positionObj", panelObj.bannerDU.adTI);
        if (panelObj.posParams == null) {
            var posParams = new ebCPosParams();
            if (panelObj.nPosType == 0)
                posParams.nType = 0;
            else 
                posParams.nType = 1;
            posParams.nWidthScale = 100;
            posParams.nStartX = panelObj.nXPos;
            posParams.nStartY = panelObj.nYPos;
            posParams.nEndX = panelObj.nXPos;
            posParams.nEndY = panelObj.nYPos;
            var fixRelativePos = ((ebBS.indexOf("sys.com")!=-1) && (panelObj.bannerDU.adData.nAdID < 1220000)) ? true: false;
            if (!fixRelativePos) {
                posParams.nResWidth = panelObj.nWidth;
                posParams.nResHeight = panelObj.nHeight;
            }
            panelObj.posParams = posParams;
        }
        var panelDivWidth = panelObj.panelDiv.style.width;
        var panelDivHeight = panelObj.panelDiv.style.height;
        panelObj.positionObj.set(panelObj.posParams, null, panelObj.panelDiv);
        panelObj.panelDiv.style.width = panelDivWidth;
        panelObj.panelDiv.style.height = panelDivHeight;
        panelObj.nLeft = parseInt(panelObj.panelDiv.style.left);
        panelObj.nTop = parseInt(panelObj.panelDiv.style.top);
    }
    function isOpen() {
        return this.fOpen;
    }
    function showFloatingPanel(panelObj) {
        panelObj.setPanelPosition();
        if (gEbBC.isIE()) {
            panelObj.playFloatingPanel();
        } else {
            var strFunc = panelObj.objName + ".playFloatingPanel()";
            window.setTimeout(strFunc, 50);
        }
    }
    function playFloatingPanel() {
        if (this.nDuration>-1) {
            if (this.nTimeoutId==-1) {
                var strFunc = this.objName + ".fullPlay()";
                this.nTimeoutId = window.setTimeout(strFunc, this.nDuration * 1000);
            }
        }
        this.fFirstPlay = false;
        this.bannerDU.playRes(this.flashObj.id);
    }
    function doOnResize(top, left) {
        if ((this.panelDiv == null) || (this.flashObj.fSyncAdMovement))
            return;
        if (this.nPosType == 1) {
            this.nBannerXPos = left;
            this.nBannerYPos = top;
            this.setPanelOffset();
            this.panelDiv.style.left = this.nLeft + "px";
            this.panelDiv.style.top = this.nTop + "px";
        } else {
            var panelDivWidth = this.panelDiv.style.width;
            var panelDivHeight = this.panelDiv.style.height;
            this.positionObj.reset();
            this.panelDiv.style.width = panelDivWidth;
            this.panelDiv.style.height = panelDivHeight;
        }
        var myIframe = gEbDisplayPage.getIframeData();
        hideIframe(this, myIframe);
    }
    function isPanelClosedByClick() {
        if ((!this.oPopupObj.isOpen) && (this.fOpen)) {
            this.mouseOverPanel = false;
            this.bannerDU.openedIMPanelObj = null;
            this.bannerDU.ebautohideHandler(this.strPanelName);
            this.fOpen = false;
        }
    }
    function hideFloatingPanel(panelObj) {
        if (panelObj.flashObj == null) {
            return false;
        }
        if (panelObj.flashObj && panelObj.flashObj.id) {
            var tempObj = document.getElementById(panelObj.flashObj.id);
            if (tempObj) {
                panelObj.flashObj = tempObj;
            }
        }
        if (panelObj.oPopupObj) {
            gEbDisplayPage.removeInterval(panelObj.strPanelName + "_PanelClosedByClick");
            if (panelObj.oPopupObj.isOpen) {
                panelObj.oPopupObj.hide();
                panelObj.fOpen = panelObj.oPopupObj.isOpen;
            }
        }
        var flashObj = panelObj.flashObj;
        panelObj.flashContainer = flashObj.parentNode;
        panelObj.flashContainer.prevInnerHTML = panelObj.flashContainer.innerHTML;
        panelObj.bannerDU.hideRes(flashObj, true);
        if (gEbBC.isFF()) {
            panelObj.panelDiv.style.width = "0px";
            panelObj.panelDiv.style.height = "0px";
        }
        panelObj.fResReady = false;
        return true;
    }
    function setPanelPosition() {
        var win = this.panelParams.adTI.getWin();
        win.gnEbZIndex += 10;
        var nZIndex = Math.max(win.gnEbZIndex, this.nMinZIndex);
        if (this.flashObj == null) {
            return false;
        }
        var flashObj = this.flashObj;
        flashObj.style.width = this.nWidth + "px";
        flashObj.style.height = this.nHeight + "px";
        if (this.nPosType == 1) {
            this.panelDiv.style.left = this.nLeft + "px";
            this.panelDiv.style.top = this.nTop + "px";
        }
        if (gEbBC.isFF()) {
            this.panelDiv.style.width = this.nWidth + "px";
            this.panelDiv.style.height = this.nHeight + "px";
        }
        if (gEbBC.isChrome() && gEbBC.getVersion() > 20) {
            flashObj.style.zIndex = nZIndex;
        } else {
            this.panelDiv.style.zIndex = nZIndex;
        }
        var WMPDrivers = this.bannerDU.getResWMP(flashObj);
        for (var i = 0; i < WMPDrivers.length; i++)
            WMPDrivers[i].updateZIndex(nZIndex);
        if (this.repositionAdchoiceLogo)
            this.repositionAdchoiceLogo();
    }
    function checkIfReady() {
        try {
            if (this.fResReady)
                return;
            if (this.flashObj == null) {
                return;
            }
            if (this.bannerDU != null) {
                this.fResReady = this.bannerDU.flashResReady(this.flashObj, this.nWeight, this.streaming, false, this.bwParams);
                if (this.fResReady) {
                    return;
                }
            }
            var strFunc = this.objName + ".checkIfReady()";
            window.setTimeout(strFunc, 100);
        } catch (e) {}
    }
    function setStripProxy(path) {
        var arrParts = path.split(".");
        var strPath = arrParts[0];
        for (var i = 1; i < arrParts.length; i++)
            strPath += "/" + arrParts[i];
        this.strProxyPath = strPath;
    }
    function isClipSupported() {
        return (!(gEbBC.isOpera() || (gEbBC.isFF() && gEbBC.isMac() && gEbBC.getVersion() < 20)));
    }
    function isVideoStripSupportedSafari() {
        return gEbBC.isSafari() && this.strWmode.toLowerCase() != "window";
    }
    function isMouseOverPanel(mouseX, mouseY) {
        var x = parseInt(this.nLeft);
        var y = parseInt(this.nTop);
        var width = parseInt(this.nWidth);
        var height = parseInt(this.nHeight);
        return ((x <= mouseX && mouseX <= x + width) && (y <= mouseY && mouseY <= y + height));
    }
}
ebCSinglePanel.strPanelObjName = ebgstrPanelObjName;
ebCSinglePanel.strPanelDivObjName = ebgstrPanelDivObjName;
ebCSinglePanel.fEbExpBannerIM = ebIsRunningInMSN();
ebCSinglePanel.fEbExpBanerIM = ebCSinglePanel.fEbExpBannerIM;
function ebCPanelParams() {
    this.adData = null;
    this.scriptWin = "";
    this.flFlashVer = 0;
    this.adTI = null;
}
function ebCDelayedExpPanels() {
    this.arrPanels = null;
    this.nMouseXPos = 0;
    this.nMouseYPos = 0;
    this.nTime = 0;
    this.nMaxTime = 0;
    this.flashObj = null;
    this.xscale = 1;
    this.yscale = 1;
    this.nMaxVelocity = 0;
    this.nTimeInterval = 0;
    this.init = init;
    this.reset = reset;
    this.getLength = getLength;
    this.getValue = getValue;
    this.shouldExpand = shouldExpand;
    function init(flashObj, arrPanels, xscale, yscale, nMaxVelocity, nTimeInterval) {
        try {
            this.flashObj = flashObj;
            this.xscale = xscale;
            this.yscale = yscale;
            this.nMaxVelocity = nMaxVelocity;
            this.nTimeInterval = nTimeInterval;
            this.arrPanels = arrPanels;
            this.nMouseXPos = getMousePos(flashObj, "xmouse");
            this.nMouseYPos = getMousePos(flashObj, "ymouse");
            this.nMouseXPos*=xscale;
            this.nMouseYPos*=yscale;
            var nWidth = flashObj.offsetWidth;
            var nHeight = flashObj.offsetHeight;
            var nMaxDistance = Math.sqrt(Math.pow(nWidth, 2) + Math.pow(nHeight, 2));
            this.nMaxTime = nMaxDistance / Number(nMaxVelocity);
        } catch (e) {}
    }
    function reset() {
        this.nTime = 0;
    }
    function getLength() {
        return this.arrPanels.length;
    }
    function getValue(index) {
        return this.arrPanels[index];
    }
    function shouldExpand() {
        try {
            var mouseVelocity = calcMouseVelocity(this);
            var fFirstTime = (this.nTime == 0);
            this.nTime += Number(this.nTimeInterval);
            var fTimeWasPassed = (this.nTime > this.nMaxTime);
            if ((this.nMaxVelocity >= mouseVelocity) || fTimeWasPassed) {
                if (fFirstTime && (mouseVelocity == 0)) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    function getMousePos(flashObj, mousePos) {
        var pos = ebGetVars(flashObj, mousePos);
        if (pos == null)
            pos = ebGetVars(flashObj, "/_level99:" + mousePos);
        return pos;
    }
    function calcMouseVelocity(objRef) {
        try {
            var flashObj = objRef.flashObj;
            var currMouseXPos = getMousePos(flashObj, "xmouse");
            var currMouseYPos = getMousePos(flashObj, "ymouse");
            currMouseXPos*=objRef.xscale;
            currMouseYPos*=objRef.yscale;
            var XDiff = (objRef.nMouseXPos - currMouseXPos);
            var YDiff = (objRef.nMouseYPos - currMouseYPos);
            var distance = Math.sqrt(Math.pow(XDiff, 2) + Math.pow(YDiff, 2));
            objRef.nMouseXPos = currMouseXPos;
            objRef.nMouseYPos = currMouseYPos;
            return (distance / Number(objRef.nTimeInterval));
        } catch (e) {}
    }
}
function ebCWSEventSender(objRef) {
    this.adId = objRef.adData.nAdID;
    this.bannerResID = objRef.bannerRes.id;
    this.eventType = ebWSEvent.noEvent;
    this.elementID = objRef.bannerRes.id;
    this.actionType = "user";
    this.adObj = objRef;
    this.sendEvent = sendEvent;
    this.resetEvent = resetEvent;
    function resetEvent() {
        this.eventType = ebWSEvent.noEvent;
        this.elementID = "";
    }
    function sendEvent(strPanelName) {
        if (!ebIntMonitorExist())
            return;
        this.elementID = this.elementID ? this.elementID : this.bannerResID;
        this.actionType = (typeof(this.actionType) != "undefined") ? this.actionType : "user";
        if (this.eventType == ebWSEvent.noEvent) {
            return;
        }
        var strCommand;
        switch (this.eventType) {
        case ebWSEvent.retractSinglePanel:
            strCommand = "ShowSinglePanel";
            break;
        case ebWSEvent.autoRetract:
            strCommand = "AutoRetract";
            break;
        case ebWSEvent.autoExpand:
            strCommand = "AutoExpand";
            break;
        case ebWSEvent.retractVideoStrip:
            strCommand = "RetractVideoStrip";
            break;
        case ebWSEvent.expandVideoStrip:
            strCommand = "ExpandVideoStrip";
            break;
        case ebWSEvent.uponShow:
            strCommand = "UponShow";
            break;
        case ebWSEvent.expandSE:
            strCommand = "ebExpandPanel";
            strPanelName += "," + this.actionType;
            break;
        case ebWSEvent.retractSE:
            strCommand = "ebCollapsePanel";
            strPanelName += "," + this.actionType;
            break;
        }
        try {
            window.parent.ebHandleFsCommandsPrev(strCommand, strPanelName, this.elementID, this.adId, this.adObj.getElapsedTime());
            this.eventType = ebWSEvent.noEvent;
        } catch (e) {}
    }
}
function ebOnmouseOutOfAd(e) {
    try {
        if (typeof(e) == "undefined")
            e = event;
        try {} catch (ex) {}
        var nAdIndex =- 1;
        var strRand = "";
        var strPanelName = "";
        var fromElem = gEbBC.isIE() ? e.srcElement: eval(e.target);
        var elementId = (typeof(fromElem.id) != "undefined") ? fromElem.id : "";
        var toElem = gEbBC.isIE() ? e.toElement: e.relatedTarget;
        var bannerDU;
        if ((elementId.indexOf(ebgstrBannerObjName)!=-1) || (elementId.indexOf(ebgstrPanelObjName)!=-1)) {
            if (toElem && toElem.id && (typeof(toElem.id) != "undefined") && elementId && ((toElem.id.indexOf(elementId)!=-1) || (elementId.indexOf(toElem.id)!=-1))) {
                if ((toElem.id.indexOf("eb") == 0) && (elementId.indexOf("eb") == 0)) {
                    return;
                }
            }
            var delimiter = ebgstrDelimiter;
            if (elementId.indexOf(delimiter)==-1)
                delimiter = "_";
            var arrParams = elementId.split(delimiter);
            nAdIndex = arrParams[1];
            bannerDU = gEbBanners[nAdIndex].displayUnit;
            strRand = arrParams[arrParams.length - 1];
            var fOutOfBanner = false;
            if (elementId.indexOf(ebgstrPanelObjName)!=-1) {
                strPanelName = "";
                var i = 2;
                while (i <= arrParams.length - 2) {
                    if (strPanelName != "")
                        strPanelName += "_";
                    strPanelName += arrParams[i];
                    i++;
                }
                if (bannerDU.isSEAd())
                    fOutOfBanner = true;
            } else {
                fOutOfBanner = true;
            }
        } else {
            return;
        }
        bannerDU = gEbBanners[nAdIndex].displayUnit;
        if (gEbBanners[nAdIndex].adData.strRand != strRand)
            return;
        var fsManager = bannerDU.fsManager;
        if (fsManager && fsManager.fEnabled)
            return;
        if (fOutOfBanner) {
            bannerDU.resetDelayedExp();
        }
        if (!toElem && gEbBC.isIE()) {
            var panelIM = bannerDU.openedIMPanelObj;
            if (panelIM != null && panelIM.mouseOverPanel && fromElem == bannerDU.bannerRes) {
                toElem = panelIM.flashObj;
                panelIM.mouseOverBanner = false;
            }
        }
        if (!toElem&&!gEbBC.isIE()) {
            var panels = bannerDU.ad.panels;
            for (var i in panels) {
                if (!bannerDU.isPanelName(i))
                    continue;
                if (panels[i].isOpen() && panels[i].strWmode.toLowerCase() == "window") {
                    if (panels[i].isMouseOverPanel(e.pageX, e.pageY)) {
                        bannerDU.dwellTimeManager.handleMouseOverAd();
                        bannerDU.panelObjMouseIsOver = panels[i];
                        toElem = panels[i].flashObj;
                        break;
                    }
                }
            }
        }
        var objWSRef = bannerDU.WSEventSender;
        if ((toElem != null) && (typeof(toElem.id) != "undefined")) {
            if ((toElem.id.indexOf(ebgstrBannerObjName)!=-1) || (toElem.id.indexOf(ebgstrPanelObjName)!=-1)) {
                if (strPanelName != "") {
                    objWSRef.elementID = elementId;
                    bannerDU.retractSinglePanel(strPanelName);
                    objWSRef.resetEvent();
                }
                return;
            }
        }
        objWSRef.elementID = elementId;
        bannerDU.retractPanels(strPanelName);
        objWSRef.resetEvent();
        bannerDU.dwellTimeManager.handleMouseOutOfAd();
    } catch (e) {}
}
function ebIsRunningInMSN() {
    if (typeof(gfEbExpBanerIM) != "undefined")
        return (gfEbExpBanerIM&&!ebIsPreview());
    if (typeof(gfEbExpBannerIM) != "undefined")
        return (gfEbExpBannerIM&&!ebIsPreview());
    var strAgt = navigator.userAgent.toLowerCase();
    var isIMAgent = (strAgt.indexOf("msn messenger") != - 1 || strAgt.indexOf("windows live messenger")!=-1);
    var isTodayPage = (window != parent);
    return (isIMAgent&&!isTodayPage);
}
function ebCPanelFrequency() {
    this.strCookieName = "";
    this.arrAdsInfo = new Array();
    this.nAdInfoIdx =- 1;
    this.nFreqTimes =- 1;
    this.nFreqPeriod =- 1;
    this.nAdID =- 1;
    this.nMaxLen =- 1;
    this.fOptOut = 0;
    this.init = init;
    this.shouldExpand = shouldExpand;
    this.onExpand = onExpand;
    function init(nFreqTimes, nFreqPeriod, nAdID, nMaxLen, fOptOut) {
        try {
            this.nFreqTimes = (typeof(nFreqTimes) != "undefined") ? nFreqTimes : 6;
            this.nFreqPeriod = (typeof(nFreqPeriod) != "undefined") ? nFreqPeriod : 4;
            this.nAdID = nAdID;
            this.nMaxLen = (typeof(nMaxLen) != "undefined") ? nMaxLen : 30;
            this.fOptOut = ((typeof(fOptOut) != "undefined") && fOptOut);
            this.strCookieName = (nFreqPeriod == 1) ? "ebPanelFrequencyPerSession" : "ebPanelFrequency";
            var strCookieVal = ebReadCookie(this.strCookieName);
            if (strCookieVal != "")
                this.arrAdsInfo = strCookieVal.split("&");
            if (this.arrAdsInfo.length > 0) {
                for (var i = 0; i < this.arrAdsInfo.length; i++) {
                    this.arrAdsInfo[i] = this.arrAdsInfo[i].split(":");
                    var adInfo = this.arrAdsInfo[i];
                    for (var j = 0; j < adInfo.length; j++)
                        adInfo[j] = parseInt(adInfo[j]);
                    if (adInfo[0] == this.nAdID) {
                        this.nAdInfoIdx = i;
                    }
                }
                deleteOldItems(this);
                if (nFreqTimes == 6) {
                    if (this.nAdInfoIdx!=-1) {
                        deleteItem(this, this.nAdInfoIdx);
                        updateCookie(this);
                    }
                } else 
                    adjustFreqPeriod(this);
            }
        } catch (e) {
            this.nAdInfoIdx =- 1;
        }
    }
    function shouldExpand() {
        var fRes = ((this.nFreqTimes == 6) || (this.nAdInfoIdx==-1) || (this.nFreqTimes > this.arrAdsInfo[this.nAdInfoIdx][2]));
        if (!fRes) {}
        return fRes;
    }
    function onExpand() {
        if ((this.nFreqTimes == 6) || (this.nMaxLen == 0))
            return;
        if (this.nAdInfoIdx!=-1) {
            var adInfo = this.arrAdsInfo[this.nAdInfoIdx];
            adInfo[2]++;
            if (this.nFreqPeriod == 4) {
                adInfo[3] = new Date().getTime();
                deleteItem(this, this.nAdInfoIdx);
                insertItem(this, adInfo);
            }
        } else {
            if (this.arrAdsInfo.length >= this.nMaxLen) {
                deleteItem(this, 0);
            }
            insertNewItem(this);
        }
        updateCookie(this);
    }
    function adjustFreqPeriod(objRef) {
        if ((objRef.nAdInfoIdx==-1) || (objRef.nFreqPeriod == 1))
            return;
        var adInfo = objRef.arrAdsInfo[objRef.nAdInfoIdx];
        if (objRef.nFreqPeriod > adInfo[1]) {
            adInfo[1] = objRef.nFreqPeriod;
            var dtNow = new Date();
            var nExpDate = adInfo[3];
            if (objRef.nFreqPeriod == 3) {
                nDaysTillSun = (dtNow.getDay() == 0) ? 0 : (7 - dtNow.getDay());
                nExpDate = dtNow.getTime() + 1000 * 60 * 60 * 24 * nDaysTillSun;
                var dtExpDate = new Date(nExpDate);
                dtExpDate.setHours(23, 59, 59);
                nExpDate = dtExpDate.getTime();
            } else if (objRef.nFreqPeriod == 4)
                nExpDate = dtNow.getTime();
            adInfo[3] = nExpDate;
            deleteItem(objRef, objRef.nAdInfoIdx);
            insertItem(objRef, adInfo);
            updateCookie(objRef);
        } else if (objRef.nFreqPeriod < adInfo[1]) {
            deleteItem(objRef, objRef.nAdInfoIdx);
        }
    }
    function deleteOldItems(objRef) {
        if (objRef.nFreqPeriod == 1)
            return;
        var deletedItems = new Array();
        for (var i = 0; i < objRef.arrAdsInfo.length; i++) {
            var adInfo = objRef.arrAdsInfo[i];
            if (adInfo[3] >= new Date().getTime())
                break;
            else if (adInfo[1] != 4) {
                deletedItems.push(i);
            }
        }
        for (var i = deletedItems.length - 1; i >= 0; i--) {
            deleteItem(objRef, deletedItems[i]);
        }
    }
    function insertNewItem(objRef) {
        var adInfo = new Array();
        adInfo[0] = objRef.nAdID;
        adInfo[1] = objRef.nFreqPeriod;
        adInfo[2] = 1;
        var dtNow = new Date();
        switch (objRef.nFreqPeriod) {
        case 1:
            break;
        case 2:
            adInfo[3] = dtNow.getTime() + 1000 * 60 * 60 * 24 * 1;
            break;
        case 3:
            nDaysTillSun = (dtNow.getDay() == 0) ? 0 : (7 - dtNow.getDay());
            var nExpDate = dtNow.getTime() + 1000 * 60 * 60 * 24 * nDaysTillSun;
            var dtExpDate = new Date(nExpDate);
            dtExpDate.setHours(23, 59, 59);
            adInfo[3] = dtExpDate.getTime();
            break;
        case 4:
            adInfo[3] = dtNow.getTime();
            break;
        }
        insertItem(objRef, adInfo);
    }
    function insertItem(objRef, item) {
        var nIndex = 0;
        if (objRef.nFreqPeriod == 1)
            nIndex = objRef.arrAdsInfo.length;
        else {
            if (objRef.arrAdsInfo.length != 0) {
                while ((nIndex < objRef.arrAdsInfo.length) && (objRef.arrAdsInfo[nIndex][3] <= item[3]))
                    nIndex++;
                for (var i = objRef.arrAdsInfo.length; i > nIndex; i--)
                    objRef.arrAdsInfo[i] = objRef.arrAdsInfo[i - 1];
            }
        }
        objRef.arrAdsInfo[nIndex] = item;
        objRef.nAdInfoIdx = nIndex;
    }
    function deleteItem(objRef, nIndex) {
        objRef.arrAdsInfo.splice(nIndex, 1);
        if (nIndex == objRef.nAdInfoIdx)
            objRef.nAdInfoIdx =- 1;
        else if (objRef.nAdInfoIdx > nIndex)
            objRef.nAdInfoIdx--;
    }
    function updateCookie(objRef) {
        var adInfosArr = new Array();
        for (var i = 0; i < objRef.arrAdsInfo.length; i++) {
            var adInfo = objRef.arrAdsInfo[i];
            adInfosArr[i] = adInfo.join(":");
        }
        var strCookieVal = adInfosArr.join("&");
        var fSessionCookie = (objRef.nFreqPeriod == 1);
        if (!objRef.fOptOut)
            ebSetCookie(objRef.strCookieName, strCookieVal, fSessionCookie);
    }
}
function ebCTemplateBExpBanner(objName) {
    this.temp = ebCTemplateBSingleExpBanner;
    this.temp(objName);
    delete this.temp;
    this.nPushDownTOID =- 1;
    this.nPushItrNum = 0;
    this.nPushHeight = 0;
    this.nPanelHeightToStartPush = 0;
    this.panelToClip = null;
    this.fPullingPageInProgress = false;
    this.fPushDPanelWasPlayed = false;
    this.panelObjMouseIsOver = null;
    this.openedIMPanelObj = null;
    this.pushPageDown = pushPageDown;
    this.startPushDown = startPushDown;
    this.startPullPageUp = startPullPageUp;
    this.pullPageUp = pullPageUp;
    this.pushWhenReady = pushWhenReady;
    this.waitForPullUpToEnd = waitForPullUpToEnd;
    this.handleUponShow = handleUponShow;
    this.mouseOverBanner = mouseOverBanner;
    this.mouseMove = mouseMove;
    this.ebsetstripproxyHandler = this.ebsetseproxyHandler;
    this.ebvideostripexpandedHandler = this.onSEExpandStarted;
    this.ebvideostripretractedHandler = this.ebseretractstartedHandler;
    this.ebinitvideostripHandler = this.initSE;
    this.ebshowhideelementsfromflashHandler = this.showHideElementsFromFlash;
    function pushPageDown(top, left) {
        try {
            this.nPushDownTOID =- 1;
            var fPushByBanner = (this.nPushHeight > this.panelToClip.nHeight);
            this.nPushItrNum++;
            setItrHeight(this);
            var nPanelHeight = 0;
            var nBannerPushHeight = 0;
            if (fPushByBanner) {
                var nHeightToStartPanelClip = this.nPushHeight - this.panelToClip.nHeight;
                nBannerPushHeight = this.nPushItrNum * this.nItrHeight;
                if (nBannerPushHeight >= nHeightToStartPanelClip)
                    nPanelHeight = nBannerPushHeight - nHeightToStartPanelClip;
            } else {
                nPanelHeight = (this.nPushItrNum * this.nItrHeight);
                nBannerPushHeight = nPanelHeight - this.nPanelHeightToStartPush;
            }
            if (nBannerPushHeight > 0) {
                this.bannerDiv.style.height = parseInt(this.adData.nHeight) + parseInt(nBannerPushHeight) + "px";
            }
            if (this.panelToClip.isClipSupported()) {
                var clipStr = ebFormat("rect(auto {0}px {1}px auto)", this.panelToClip.nWidth, nPanelHeight);
                this.panelToClip.panelDiv.style.clip = clipStr;
            }
            if ((nPanelHeight > 0)&&!this.fPushDPanelWasPlayed) {
                this.fPushDPanelWasPlayed = true;
                if (gEbBC.isIE()) {
                    this.panelToClip.playFloatingPanel();
                } else if (this.panelToClip.isClipSupported()) {
                    var strFunc = this.panelToClip.objName + ".playFloatingPanel()";
                    window.setTimeout(strFunc, 50);
                }
            }
            if (this.nPushItrNum < ebCTemplateBExpBanner.nTotalPushItrNum) {
                var strFunc = this.objName + ".pushPageDown(" + top + "," + left + ")";
                this.nPushDownTOID = window.setTimeout(strFunc, 50);
            } else {
                if (!this.panelToClip.isClipSupported()) {
                    this.panelToClip.showWithMotion(top, left);
                    var strFunc = this.panelToClip.objName + ".playFloatingPanel()";
                    window.setTimeout(strFunc, 50);
                }
            }
        } catch (e) {}
    }
    function startPushDown(panelName, fMotion, top, left) {
        panelName = panelName.toLowerCase();
        var panel = this.ad.panels[panelName];
        if (this.fPanelIsOpen) {
            if (this.panelToClip.strPanelName.toLowerCase() == panelName) {} else {
                strFunc = this.objName + ".startPushDown('" + panelName + "'," + fMotion + "," + top + "," + left + ")";
                window.setTimeout(strFunc, 100);
            }
            return;
        }
        if (this.nPushDownTOID!=-1) {
            try {
                window.clearTimeout(this.nPushDownTOID);
                this.nPushDownTOID =- 1;
            } catch (e) {}
        }
        this.panelToClip = panel;
        this.nPushHeight = calcPushHeight(this);
        if (this.panelToClip.isOpen()) {
            return;
        }
        this.nPanelHeightToStartPush = panel.nHeight - this.nPushHeight;
        if (this.nPanelHeightToStartPush < 0)
            this.nPanelHeightToStartPush = 0;
        if (!this.panelToClip.fHideElements && this.nPanelHeightToStartPush > 0) {
            var displayWin = this.adTI.getWin();
            var panelAttrObj = this.buildPanelAttr(this.panelToClip);
            panelAttrObj.nHeight = parseInt(this.nPanelHeightToStartPush);
            this.hidePageElements(displayWin, panelAttrObj);
            this.panelToClip.fHideElements = true;
        }
        this.fPanelIsOpen = true;
        if (fMotion) {
            if (this.panelToClip.isClipSupported())
                this.panelToClip.showWithMotion(top, left);
            this.pushPageDown(top, left);
        } else {
            this.nPushItrNum = ebCTemplateBExpBanner.nTotalPushItrNum;
            setItrHeight(this);
            this.bannerDiv.style.height = parseInt(this.adData.nHeight) + parseInt(this.nPushHeight) + "px";
            panel.show();
        }
    }
    function handleUponShow() {
        try {
            if (!this.ad.fPushdown)
                return;
            switch (this.ad.nUponShow) {
            case 1:
                break;
            case 2:
            case 3:
                if (this.panelFrequency.shouldExpand()) {
                    this.pushWhenReady();
                    this.panelFrequency.onExpand();
                    this.fShowedAutoPanel = true;
                }
                break;
            }
        } catch (e) {}
    }
    function pushWhenReady() {
        try {
            var defaultPanel = null;
            if (this.fPanelIsOpen) {
                return;
            }
            if (this.fShouldInitialize)
                this.init();
            var top = ebGetRealTop(this.bannerRes);
            var left = ebGetRealLeft(this.bannerRes);
            if (!this.defaultPanel.fOnPage) {
                if (this.adData.nDownloadMode == 3) {
                    if ((top <= 0) && (left <= 0)&&!gEbDocLoaded) {
                        strFunc = this.objName + ".pushWhenReady()";
                        window.setTimeout(strFunc, 100);
                        return;
                    }
                    this.defaultPanel.addToPage(this.objName, top, left, true);
                } else {
                    this.fLoadDefaultPanelOnPageLoad = true;
                }
            }
            this.defaultPanel.checkIfReady();
            if (this.defaultPanel.fResReady) {
                this.defaultPanel.fReportAutoShow = true;
                this.doOnPanelShow(this.defaultPanel.strPanelName);
                if (this.defaultPanel.fPushDown) {
                    if ((this.ad.nUponShow == 2)&&!gEbBC.isSafari())
                        this.startPushDown(this.defaultPanel.strPanelName, true, top, left);
                    else {
                        this.startPushDown(this.defaultPanel.strPanelName, false, top, left);
                    }
                } else {
                    this.defaultPanel.show(top, left);
                }
                this.adData.customEventHandler.onAfterPanelShow(this.objName, this.defaultPanel.strPanelName);
            } else {
                strFunc = this.objName + ".pushWhenReady()";
                window.setTimeout(strFunc, 100);
            }
        } catch (e) {}
    }
    function mouseOverBanner() {
        try {
            if (this.openedIMPanelObj && this.openedIMPanelObj.isOpen()) {
                this.openedIMPanelObj.mouseOverBanner = true;
            }
            var panels = this.ad.panels;
            var delayedExpPanelsArr = null;
            for (var attr in panels) {
                try {
                    if (!this.isPanelName(attr))
                        continue;
                    if (panels[attr].fAutoExpand) {
                        if (panels[attr].fDelayedExpansion) {
                            if (delayedExpPanelsArr == null)
                                delayedExpPanelsArr = new Array();
                            var length = delayedExpPanelsArr.length;
                            delayedExpPanelsArr[length] = attr;
                        } else {
                            this.WSEventSender.eventType = ebWSEvent.autoExpand;
                            this.showPanel(attr);
                            this.WSEventSender.resetEvent();
                        }
                        if (this.ad.fShowSinglePanel)
                            break;
                    } else {}
                } catch (e) {}
            }
            if (delayedExpPanelsArr != null)
                this.initDelayedExpPanels(delayedExpPanelsArr);
        } catch (e) {}
    }
    function startPullPageUp() {
        if (this.fPullingPageInProgress) {
            return;
        }
        this.fPullingPageInProgress = true;
        if (this.nPushDownTOID!=-1) {
            try {
                window.clearTimeout(this.nPushDownTOID);
                this.nPushDownTOID =- 1;
            } catch (e) {}
        }
        if (!this.panelToClip.isOpen()) {
            return;
        }
        if (this.panelToClip.fPushDown)
            this.pullPageUp();
        else {
            this.bannerDiv.style.height = this.adData.nHeight + "px";
            this.panelToClip.hide();
        }
    }
    function pullPageUp() {
        this.nPushDownTOID =- 1;
        this.nPushItrNum--;
        var fPushByBanner = (this.nPushHeight > this.panelToClip.nHeight);
        var nPanelHeight = 0;
        var nBannerPushHeight = 0;
        if (fPushByBanner) {
            var nHeightToStopPanelClip = this.nPushHeight - this.panelToClip.nHeight;
            nBannerPushHeight = this.nPushItrNum * this.nItrHeight;
            nPanelHeight = nBannerPushHeight - nHeightToStopPanelClip;
            if (nPanelHeight <= 0)
                nPanelHeight = 0;
        } else {
            nPanelHeight = (this.nPushItrNum * this.nItrHeight);
            nBannerPushHeight = nPanelHeight - this.nPanelHeightToStartPush;
            if (nBannerPushHeight <= 0)
                nBannerPushHeight = 0;
        }
        if (nBannerPushHeight >= 0) {
            this.bannerDiv.style.height = parseInt(this.adData.nHeight) + parseInt(nBannerPushHeight) + "px";
        }
        if (this.panelToClip.isClipSupported()) {
            var clipStr = ebFormat("rect(auto {0}px {1}px auto)", this.panelToClip.nWidth, nPanelHeight);
            this.panelToClip.panelDiv.style.clip = clipStr;
        }
        if (this.nPushItrNum > 0) {
            if (!this.panelToClip.isClipSupported()) {
                if (this.panelToClip.isOpen())
                    this.panelToClip.hide();
            }
            var strFunc = this.objName + ".pullPageUp()";
            this.nPushDownTOID = window.setTimeout(strFunc, 50);
        } else {
            if (this.panelToClip.isClipSupported())
                this.panelToClip.hide();
            if (this.panelToClip.fHideElements) {
                var panelAttrObj = this.buildPanelAttr(this.panelToClip);
                panelAttrObj.nHeight = (this.panelToClip.nHeight - this.nPushHeight);
                this.showPageElements(this.adTI.getWin(), panelAttrObj);
                this.panelToClip.fHideElements = false;
            }
            this.fPanelIsOpen = false;
            this.fPullingPageInProgress = false;
            this.fPushDPanelWasPlayed = false;
        }
    }
    function waitForPullUpToEnd() {
        if (this.defaultPanel.isOpen()) {
            window.setTimeout(this.objName + ".waitForPullUpToEnd()", 50);
            return;
        }
        window.setTimeout(this.objName + ".showPanel('" + this.defaultPanel.strPanelName + "',true,true)", 50);
    }
    function setItrHeight(objRef) {
        var fPushByBanner = (objRef.nPushHeight > objRef.panelToClip.nHeight);
        if (fPushByBanner)
            objRef.nItrHeight = objRef.nPushHeight / ebCTemplateBExpBanner.nTotalPushItrNum;
        else 
            objRef.nItrHeight = objRef.panelToClip.nHeight / ebCTemplateBExpBanner.nTotalPushItrNum;
    }
    function calcPushHeight(objRef) {
        try {
            var panel = objRef.panelToClip;
            var nBannerTop = parseInt(panel.nBannerYPos);
            var nPannelOffset = panel.nTop - nBannerTop;
            var nPushDownHeight = (panel.nHeight - objRef.adData.nHeight) + nPannelOffset;
            return nPushDownHeight;
        } catch (e) {
            return 0;
        }
    }
    function mouseMove(mouseX, mouseY) {
        try {
            if (!this.panelObjMouseIsOver) {
                mouseOverPanel(mouseX, mouseY, this);
            } else {
                mouseOutOfPanel(mouseX, mouseY, this);
            }
        } catch (e) {}
    }
    function mouseOverPanel(mouseX, mouseY, objRef) {
        try {
            var panels = objRef.ad.panels;
            for (var i in panels) {
                if (!objRef.isPanelName(i))
                    continue;
                if (panels[i].isOpen() && panels[i].strWmode.toLowerCase() == "window") {
                    if (panels[i].isMouseOverPanel(mouseX, mouseY)) {
                        objRef.dwellTimeManager.handleMouseOverAd();
                        objRef.panelObjMouseIsOver = panels[i];
                        break;
                    }
                }
            }
        } catch (e) {}
    }
    function mouseOutOfPanel(mouseX, mouseY, objRef) {
        try {
            if (!objRef.panelObjMouseIsOver)
                return;
            var panelObj = objRef.panelObjMouseIsOver;
            if (!panelObj.isMouseOverPanel(mouseX, mouseY)) {
                var fOverBanner = false;
                var fOverPanel = false;
                var panels = objRef.ad.panels;
                objRef.dwellTimeManager.handleMouseOutOfAd();
                objRef.panelObjMouseIsOver = null;
                for (var i in panels) {
                    if (!objRef.isPanelName(i))
                        continue;
                    if (panels[i].isOpen()) {
                        if (panels[i].isMouseOverPanel(mouseX, mouseY)) {
                            fOverPanel = true;
                            if (panels[i].strWmode.toLowerCase() == "window") {
                                objRef.panelObjMouseIsOver = panels[i];
                                objRef.dwellTimeManager.handleMouseOverAd();
                            }
                            break;
                        }
                    }
                }
                if (!fOverPanel) {
                    if (objRef.isMouseOverBanner(mouseX, mouseY))
                        fOverBanner = true;
                }
                if (!panelObj.flashContainer) {
                    panelObj.flashContainer = panelObj.flashObj.parentNode;
                }
                objRef.WSEventSender.elementID = panelObj.flashContainer.id;
                if (!fOverPanel&&!fOverBanner) {
                    objRef.retractPanels(panelObj.strPanelName);
                } else if (fOverPanel ||!panelObj.fAutoExpand) {
                    objRef.retractSinglePanel(panelObj.strPanelName);
                } else {}
                objRef.WSEventSender.resetEvent();
            }
        } catch (e) {}
    }
}
ebCTemplateBExpBanner.nTotalPushItrNum = 20;
function ebCPanel(strPanelName) {
    this.temp = ebCSinglePanel;
    this.temp(strPanelName);
    delete this.temp;
    this.oPopupObj = getPopup();
    this.showFloatingPanelIM = showFloatingPanelIM;
    this.adjustRelativeOffsetIM = adjustRelativeOffsetIM;
    this.showWithMotion = showWithMotion;
    function getPopup() {
        var popup = null;
        try {
            if (ebCSinglePanel.fEbExpBannerIM)
                popup = window.createPopup();
        } catch (e) {}
        return popup;
    }
    function showFloatingPanelIM() {
        var oPopup = this.oPopupObj;
        var flashObj = this.flashObj;
        flashObj.style.width = this.nWidth + "px";
        flashObj.style.height = this.nHeight + "px";
        this.mouseOverBanner = false;
        this.mouseOverPanel = false;
        this.bannerDU.openedIMPanelObj = this;
        oPopup.show(this.nLeft, this.nTop, this.nWidth, this.nHeight, document.body);
        try {
            oPopup.document.focus();
            if (!oPopup.isOpen)
                oPopup.show(this.nLeft, this.nTop, this.nWidth, this.nHeight, document.body);
        } catch (e) {}
        this.fFirstPlay = false;
        flashObj.Play();
        var strFunc = this.objName + ".isPanelClosedByClick();";
        gEbDisplayPage.addInterval(this.strPanelName + "_PanelClosedByClick", strFunc, 200, window);
    }
    function adjustRelativeOffsetIM() {
        var panelWidth = parseInt(this.nWidth);
        var panelHeight = parseInt(this.nHeight);
        var bannerWidth = parseInt(this.bannerDU.adData.nWidth);
        var bannerHeight = parseInt(this.bannerDU.adData.nHeight);
        var imWinLeft = window.screenLeft;
        var imWinTop = window.screenTop;
        var screenHeight = parseInt(window.screen.availHeight);
        var screenWidth = parseInt(window.screen.availWidth);
        var panelCorner = this.nCorner;
        if (imWinLeft + bannerWidth - panelWidth < 0) {
            if (panelCorner == "1" || panelCorner == "3")
                this.nLeft = 0;
            if (panelCorner == "2" || panelCorner == "4")
                this.nLeft = panelWidth;
            if (imWinLeft < 0)
                this.nLeft += Math.abs(imWinLeft);
        }
        if (imWinLeft + panelWidth > screenWidth) {
            if (panelCorner == "1" || panelCorner == "3")
                this.nLeft = bannerWidth - panelWidth;
            if (panelCorner == "2" || panelCorner == "4")
                this.nLeft = bannerWidth;
            if (imWinLeft + bannerWidth > screenWidth)
                this.nLeft -= imWinLeft + bannerWidth - screenWidth;
        }
        if (imWinTop + panelHeight > screenHeight) {
            if (panelCorner == "1" || panelCorner == "2")
                this.nTop =- (panelHeight - bannerHeight);
            if (panelCorner == "3" || panelCorner == "4")
                this.nTop = bannerHeight;
            if (imWinTop + bannerHeight > screenHeight)
                this.nTop -= imWinTop + bannerHeight - screenHeight;
        }
        if (imWinTop - (panelHeight - bannerHeight) < 0) {
            if (panelCorner == "1" || panelCorner == "2")
                this.nTop = 0;
            if (panelCorner == "3" || panelCorner == "4")
                this.nTop = panelHeight;
        }
    }
    function showWithMotion(top, left) {
        if (typeof(top) != "undefined") {
            this.nBannerXPos = left;
            this.nBannerYPos = top;
        }
        this.setPanelOffset();
        if (this.isClipSupported()) {
            this.panelDiv.style.clip = "rect(0px 0px 0px 0px)";
        }
        this.setPanelPosition();
        this.fOpen = true;
        this.fIsOpening = false;
    }
}
function ebOnmouseMove(e) {
    try {
        var MouseXPos = e.pageX;
        var MouseYPos = e.pageY;
        for (var i = 0; i < gEbBanners.length; i++) {
            if (typeof(gEbBanners[i].displayUnit.mouseMove) == "function") {
                if (gEbBanners[i].displayUnit.fListeningToMouseMove) {
                    gEbBanners[i].displayUnit.mouseMove(MouseXPos, MouseYPos);
                }
            }
        }
    } catch (e) {}
}
function ebOnmouseOverPanel(e) {
    try {
        var MouseXPos = e.pageX;
        var MouseYPos = e.pageY;
        for (var i = 0; i < gEbBanners.length; i++) {
            if (typeof(gEbBanners[i].displayUnit.mouseMove) == "function") {
                if (gEbBanners[i].displayUnit.fListeningToMouseMove)
                    gEbBanners[i].displayUnit.mouseMove(MouseXPos, MouseYPos);
            }
        }
    } catch (e) {}
}
function ebOnmouseOverBanner(e) {
    try {
        if (typeof(e) == "undefined")
            e = event;
        var nAdIndex =- 1;
        var strRand = "";
        var srcElement = gEbBC.isIE() ? e.srcElement: eval(e.target);
        var isPanel = (srcElement.id.indexOf(ebgstrPanelObjName)!=-1);
        if (srcElement.id.indexOf(ebgstrBannerObjName)!=-1 || isPanel) {
            var arrBannerParams = srcElement.id.split("_");
            nAdIndex = isPanel ? 2 : 1;
            strRand = nAdIndex + (isPanel ? 4 : 1);
            if (srcElement.id.indexOf("ebWMP_")!=-1) {
                nAdIndex += 2;
                strRand += 2;
            }
            nAdIndex = arrBannerParams[nAdIndex];
            strRand = arrBannerParams[strRand];
        }
        if (nAdIndex==-1) {
            return;
        }
        if (gEbBanners[nAdIndex].adData.strRand != strRand) {
            return;
        }
        if (!isPanel) {
            gEbBanners[nAdIndex].displayUnit.WSEventSender.elementID = srcElement.id;
            gEbBanners[nAdIndex].displayUnit.mouseOverBanner();
        }
        gEbBanners[nAdIndex].displayUnit.dwellTimeManager.handleMouseOverAd();
    } catch (e) {}
}
function ebOnmouseOverIMPanel(e) {
    var bannerObj = gEbBanners[0].displayUnit;
    var panelObj = gEbBanners[0].displayUnit.openedIMPanelObj;
    bannerObj.panelObjMouseIsOver = panelObj;
    panelObj.mouseOverPanel = true;
    panelObj.mouseOverBanner = false;
    gEbBanners[0].displayUnit.dwellTimeManager.handleMouseOverAd();
}
function ebOnmouseOutIMPanel(e) {
    var bannerObj = gEbBanners[0].displayUnit;
    var panelObj = bannerObj.openedIMPanelObj;
    bannerObj.panelObjMouseIsOver = null;
    if (e.toElement != null) {
        panelObj.mouseOverPanel = true;
        return;
    }
    panelObj.mouseOverPanel = false;
    var newEvent = new Object();
    newEvent.srcElement = e.srcElement;
    newEvent.toElement = null;
    if (panelObj && panelObj.mouseOverBanner) {
        newEvent.toElement = bannerObj.bannerRes;
    }
    ebOnmouseOutOfAd(newEvent);
}
if (!gfEbOnInternalIframe) {
    if (ebShouldAddInnerIframe()) {
        if (!ebAddineyePredefined()) {
            handleAddInEye(gEbAIE.iflExists);
        } else {
            gEbAIE.iflCheck = 0;
            gEbAIE.iflExists = 0;
            InitServerData();
            if (!ebAddInnerIframe()) {
                handleIflNotExists();
            }
        }
    } else {
        gfEbInIframe = false;
        gEbInit();
    }
} else {
    gEbInit();
}
function handleAddInEye(iflExists) {
    if (typeof (iflExists) != "undefined") {
        if (iflExists) {
            InitServerData();
            if (!ebAddInnerIframe()) {
                handleIflNotExists();
            }
        } else {
            handleIflNotExists();
            ebAddInnerIframeForTest();
        }
    } else {
        sendNewAddInEyeRequestToServer();
    }
}
function handleAddInEyeServerResponse(obj) {
    gEbAIE = obj ? obj : gEbAIE;
    if (typeof (gEbAIE.iflExists) == "undefined") {
        gEbAIE.iflExists = false;
    }
    handleAddInEye(gEbAIE.iflExists);
}
function sendNewAddInEyeRequestToServer() {
    var addineyeDomain = ebGetAddineyeDomain();
    if (addineyeDomain != "") {
        var checkDomainCall = ebStrProtocol + ebBS + "/BurstingPipe/adServer.bs?cn=chdm&dm=" + addineyeDomain;
        document.write("<scr" + "ipt src='" + checkDomainCall + "'></scr" + "ipt>");
    } else {
        handleIflNotExists();
    }
}
function handleIflNotExists() {
    gfEbInIframe = false;
    gEbBAd.aieImageOnly = true;
    gEbBAd.fIsRecordable = false;
    gEbInit();
}
function gEbInit() {
    if (!gfEbInIframe) {
        if (typeof(gEbDocLoaded) == "undefined") {
            gEbDocLoaded = false;
        }
        if (typeof(ebMaxTimePassed) == "undefined") {
            ebMaxTimePassed = false;
        }
        if (typeof(gEbfIntReported) == "undefined") {
            gEbfIntReported = false;
        }
        if (typeof(gEbFOptOut) == "undefined") {
            gEbFOptOut = false;
        }
        if (typeof(gnEbMinZIndex) == "undefined") {
            gnEbMinZIndex = 10000;
        }
        if (typeof(gEbDbg) == "undefined") {
            {
                gEbDbg = new ebCEmptyDebug();
            }
        } else {}
        if ((typeof(gfEbDbgChanged) != "undefined") && gfEbDbgChanged) {
            ebSetCookie("DebugLevel", gEbDbgLvl);
        }
        if (typeof(gEbMouseMove) == "undefined") {
            gEbMouseMove = false;
        }
        if (typeof(gEbVideoLoader) == "undefined") {
            gEbVideoLoader = false;
        }
        gfEbMSNAjax = (((typeof(inDapMgrIf) != "undefined") && inDapMgrIf) || ((typeof(isAJAX) != "undefined") && isAJAX));
        if ((typeof(ebCPlugin) != "undefined") && (typeof(gEbPlugin) == "undefined")) {
            gEbPlugin = new ebCPlugin("gEbPlugin");
            gEbPlugin.init();
        }
        if (typeof(gEbDisplayPage) == "undefined") {
            gEbDisplayPage = new ebCDisplayPage();
        }
        gEbTI.addEyeDiv();
        if (typeof(gEbBanners) == "undefined") {
            gEbBanners = new Array();
        }
        if (typeof(gnEbIframeDivIndex) == "undefined") {
            gnEbIframeDivIndex = 0;
        }
        if (!ebIsPreview()&&!gEbfOfflineDemo) {
            window.setTimeout("ebMaxTime()", gEbnMaxTimerTime);
            if (gEbFlashVer >= 6&&!(gEbBC.isFF() && gfEbMSNAjax)) {
                ebAddInteractionsFlash();
            }
            if (gEbBC.isOpera()&&!ebIsGlobalDef("gEbnIntSeq")) {
                gEbnMaxTimerTime += 5000;
                gEbnIntSeq = 0;
                window.setTimeout("ebReportTimersInterval()", gEbnIntSeqArray[gEbnIntSeq] * 1000);
            }
        }
        if (!gEbfOfflineDemo) {
            gEbDisplayPage.addInterval("mouseActive", "ebCheckMouseActive()", 500);
        }
        var newBanner = new ebCBannerEye(gEbBanners.length);
        gEbBanners[gEbBanners.length] = newBanner;
        document.write("<scr" + "ipt src='" + ebResourcePath + newBanner.adData.strAdUrl + "'></scr" + "ipt>");
    }
}
