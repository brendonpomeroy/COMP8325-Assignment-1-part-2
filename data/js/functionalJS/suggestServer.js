var SuggestServer = function() {
    this._stringOriginalUrl = "http://suggest3.sinajs.cn/suggest/type=@TYPE@&key=@KEY@&name=@NAME@";
    this._stringUrl = "";
    this._elementScriptLoader = null;
    this._elementContainer = null;
    this._stringOriginalValue = "";
    this._stringLastValue = "";
    this._functionCallback = null;
    this._elementLineCurrent = null;
    this._objectHtml = {};
    this._objectData = {};
    this._booleanHideDelay=!1;
    this._stringBrowserType = "";
    this._objectType = {
        11: "A 股",
        12: "B 股",
        13: "权证",
        14: "期货",
        15: "债券",
        21: "开基",
        22: "ETF",
        23: "LOF",
        24: "货基",
        25: "QDII",
        26: "封基",
        31: "港股",
        32: "窝轮",
        33: "港指数",
        41: "美股",
        42: "外期",
        81: "债券",
        82: "债券"
    };
    this._objectConfig = {
        input: null,
        loader: null,
        value: null,
        "default": null,
        type: 0,
        max: 10,
        width: 220,
        link: null,
        target: "_blank",
        head: ["选项", "代码", "名称"],
        body: [ - 1, 2, 4],
        fix: {
            firefox: [1, 1]
        },
        onshow: function() {},
        onhide: function() {},
        hideSelectForIE6: !1,
        callback: null
    };
    this._getElement = function(a) {
        return document.getElementById(a)
    };
    this._getRandom = function() {
        return (new Date).getTime()
    };
    this._bind = function(a, b) {
        var c = this;
        return function() {
            var e, d = null;
            if ("undefined" != typeof b) {
                for (e = 0; e < arguments.length; e++)
                    b.push(arguments[e]);
                d = b
            } else 
                d = arguments;
            return a.apply(c, d)
        }
    };
    this._aevent = function(a, b, c) {
        window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent && a.attachEvent("on" + b, c)
    };
    this._position = function() {
        var d, e, f, g, a = 0, b = 0, c = this._elementInput;
        do {
            a += c.offsetTop || 0;
            b += c.offsetLeft || 0;
            if ("relative" != c.style.position)
                break;
            c = c.offsetParent
        }
        while (c);
        d = [1 * this._elementInput.parentNode.style.borderTopWidth.replace("px", ""), 1 * this._elementInput.parentNode.style.borderLeftWidth.replace("px", "")];
        __arrayPositionFix = [0, 0];
        this._elementContainer.style.top != a + "px" && (this._elementContainer.style.top = a - d[0] + __arrayPositionFix[0] + "px");
        this._elementContainer.style.left != b + "px" && (this._elementContainer.style.left = b - d[1] + __arrayPositionFix[1] + "px");
        e = this._elementInput.style.borderTopWidth;
        f = this._elementInput.style.borderBottomWidth;
        g = this._elementInput.clientHeight;
        g += "" != e ? 1 * e.replace("px", "") : 2;
        g += "" != f ? 1 * f.replace("px", "") : 2;
        this._elementContainer.style.marginTop != g + "px" && (this._elementContainer.style.marginTop = g + "px")
    };
    this._getType = function(a) {
        return {
            1: "stock",
            2: "fund",
            3: "hk",
            4: "us"
        }
        [a.substr(0, 1)]
    };
    this._fill = function() {
        var b, c, d, e, f, g, h, i, j, a = this._elementInput.value;
        if ("key_" + a in this._objectData && "" != this._objectData["key_" + a]) {
            if (null == this._elementContainer) {
                this._elementContainer = document.createElement("div");
                this._elementContainer.style.cssText += "display:none; filter:alpha(opacity=95); opacity:0.95; position:absolute; width:" + this._objectConfig.width + "px; z-index:999;";
                this._elementInput.parentNode.insertBefore(this._elementContainer, this._elementInput);
                this._elementContainer.suggest = this
            }
            this._position();
            b = "";
            b += '<table style="border-collapse:collapse; line-height:18px; border:2px solid #EEE; background-color:#FFF; font-size:12px; text-align:center; color:#999; width:' + (this._objectConfig.width - 2) + 'px;">';
            if (null != this._objectConfig.head) {
                b += '<tr style="background-color:#F3F3F3;">';
                for (c in this._objectConfig.head)
                    this._objectConfig.head.hasOwnProperty(c) && (b += "<td>" + this._objectConfig.head[c] + "</td>");
                b += "</tr>"
            }
            d = (this._objectData["key_" + a] || "").replace(/&amp;/g, "&").replace(/;$/, "").split(";");
            e = d.length > this._objectConfig.max ? this._objectConfig.max : d.length;
            f = "parentNode.parentNode.parentNode['suggest']";
            for (c = 0; e > c; c++) {
                g = d[c].split(",");
                g[ - 1] = g[0].replace(new RegExp(a.toLowerCase().replace(/(^\s*)|(\s*$)/g, "").replace(/\./g, function(a) {
                    return "\\" + a
                }), "gi"), function(a) {
                    return '<span style="color:#F00;">' + a + "</span>"
                });
                g[ - 2] = g[1]in this._objectType ? this._objectType[g[1]] : "——";
                if (null == this._objectConfig.link || "" == this._objectConfig.link)
                    h = ['<td style="padding:0px;"><span style="display:block; padding:1px;">', "</span></td>"];
                else {
                    i = this._objectConfig.link.replace(/@type@/g, this._getType(g[1]) || g[1]).replace(/@code@/g, this._getFullCode(g));
                    for (j in g)
                        g.hasOwnProperty(j) && (i = i.replace(new RegExp("@" + j + "@", "g"), g[j]));
                    h = ['<td style="padding:0px;"><a href="' + i + '" hidefocus="true" onmousedown="return this.parentNode.parentNode.' + f + "['hidepause'](this);\" onclick=\"return this.parentNode.parentNode." + f + '[\'hideresume\'](this);" style="color:#999; display:block; outline:none; padding:1px; text-decoration:none; width:100%;" target="' + this._objectConfig.target + '">', "</a></td>"]
                }
                b += '<tr id="' + d[c] + '" style="cursor:pointer;" onmouseover="this.' + f + "['mouseoverLine'](this);\" onmouseout=\"this." + f + "['mouseoutLine'](this);\" onmousedown=\"this." + f + "['setLineMouse'](this);\">";
                for (j in this._objectConfig.body)
                    this._objectConfig.body.hasOwnProperty(j) && (b += h[0] + g[this._objectConfig.body[j]] + h[1]);
                b += "</tr>"
            }
            b += "</table>";
            this._objectHtml["key_" + a] = b;
            this._elementLineCurrent = null;
            document.createElement("div");
            this._elementContainer.innerHTML = this._objectHtml["key_" + a];
            this._show()
        } else 
            this._hide()
    };
    this._color = function(a) {
        var b = "";
        a._booleanArrow && a._booleanMouse ? b = "#F8FBDF" : a._booleanArrow ? b = "#F1F5FC" : a._booleanMouse && (b = "#FCFEDF");
        a.style.backgroundColor != b && (a.style.backgroundColor = b)
    };
    this.mouseoverLine = function(a) {
        a._booleanMouse=!0;
        this._color(a)
    };
    this.mouseoutLine = function(a) {
        a._booleanMouse=!1;
        this._color(a)
    };
    this.setLineMouse = function(a) {
        this.setLine(a);
        null != this._functionCallback && this._functionCallback(this._elementInput.value, a.id.split(","))
    };
    this._getFullCode = function(a) {
        switch (a[1]) {
        case"11":
            return a[3];
        case"12":
            return a[3];
        case"13":
            return a[3];
        case"14":
            return a[3];
        case"15":
            return a[3];
        case"21":
            return a[3];
        case"22":
            return a[3];
        case"23":
            return a[3];
        case"24":
            return a[3];
        case"25":
            return a[3];
        case"26":
            return a[3];
        default:
            return a[2]
        }
    };
    this.setLine = function(a) {
        var d, e, f, b = a.id.split(","), c = this._objectConfig.value;
        if (null != c && "" != c) {
            for (d = 0; d < b.length; d++)
                c = c.replace(new RegExp("@" + d + "@", "g"), b[d]);
            e = c
        } else 
            e = this._getFullCode(b);
        f = a.id;
        for (d = 2; 5 > d; d++)
            this._objectData["key_" + b[d]] = f + ";";
        this._stringLastValue = e;
        this._elementInput.value = e;
        if (null != this._elementLineCurrent) {
            this._elementLineCurrent._booleanArrow=!1;
            this._color(this._elementLineCurrent)
        }
        a._booleanArrow=!0;
        this._color(a);
        this._elementLineCurrent = a
    };
    this._show = function() {
        var a, b;
        if (null != this._elementContainer) {
            this._elementContainer.style.display = "";
            this._objectConfig.onshow();
            if (this._objectConfig.hideSelectForIE6 && "ie6" == this._stringBrowserType) {
                a = document.getElementsByTagName("select");
                for (b = 0; b < a.length; b++)
                    a[b].style.visibility = "hidden"
            }
        }
    };
    this.hidepause = function() {
        this._booleanHideDelay=!0
    };
    this.hideresume = function() {
        this._booleanHideDelay=!1;
        this._hideNow()
    };
    this._hide = function() {
        0 == this._booleanHideDelay && this._hideNow()
    };
    this._hideNow = function() {
        var a, b;
        if (null != this._elementContainer) {
            this._elementContainer.style.display = "none";
            this._objectConfig.onhide();
            if (this._objectConfig.hideSelectForIE6 && "ie6" == this._stringBrowserType) {
                a = document.getElementsByTagName("select");
                for (b = 0; b < a.length; b++)
                    a[b].style.visibility = "visible"
            }
        }
    };
    this._load = function(a, b, c) {
        var d, e;
        if (null == this._elementScriptLoader) {
            this._elementScriptLoader = document.createElement("div");
            this._elementScriptLoader.style.display = "none";
            this._elementInput.parentNode.insertBefore(this._elementScriptLoader, this._elementInput)
        }
        d = "suggestdata_" + this._getRandom();
        e = document.createElement("script");
        e.type = "text/javascript";
        e.charset = "gb2312";
        e.src = this._stringUrl.replace("@NAME@", d).replace("@KEY@", encodeURIComponent(a.toLowerCase()));
        e._object = this;
        b && (e._functionCallbackTrue = b);
        c && (e._functionCallbackFalse = c);
        e._stringValue = a;
        e._stringName = d;
        e[document.all ? "onreadystatechange": "onload"] = function() {
            if (!document.all || "loaded" == this.readyState || "complete" == this.readyState) {
                var a = window[this._stringName];
                if ("undefined" != typeof a) {
                    this._object._objectData["key_" + this._stringValue] = a;
                    this._functionCallbackTrue(a);
                    window[this._stringName] = null
                } else 
                    this._functionCallbackFasle && this._functionCallbackFasle("");
                this._object = null;
                this._stringValue = null;
                this._stringName = null;
                this[document.all ? "onreadystatechange": "onload"] = null;
                this.parentNode.removeChild(this)
            }
        };
        this._elementScriptLoader.appendChild(e)
    };
    this._check = function() {
        var a = this._elementInput.value;
        if (this._stringLastValue != a) {
            this._stringLastValue = a;
            if ("" != a)
                "key_" + a in this._objectData ? this._fill() : this._load(a, this._bind(this._fill), this._bind(this._hide));
            else {
                if (null != this._elementContainer) {
                    this._elementLineCurrent = null;
                    this._elementContainer.innerHTML = ""
                }
                this._hide()
            }
        } else 
            this._show()
    };
    this._eventFocus = function() {
        this._elementInput.value == this._stringOriginalValue && (this._elementInput.value = "");
        this._stringLastValue = "";
        this._check()
    };
    this._eventBlur = function() {
        "" == this._elementInput.value && (this._elementInput.value = this._stringOriginalValue);
        this._stringLastValue = "";
        this._hide()
    };
    this._eventButtonUp = function() {
        var a = arguments[0] || window.event, b = null == this._objectConfig.head ? 0: 1;
        switch (a.keyCode) {
        case 38:
            null != this._elementContainer && null != this._elementContainer.firstChild && this.setLine(this._elementContainer.firstChild.rows[this._elementLineCurrent && this._elementLineCurrent.rowIndex != b ? this._elementLineCurrent.rowIndex - 1: this._elementContainer.firstChild.rows.length - 1]);
            break;
        case 40:
            null != this._elementContainer && null != this._elementContainer.firstChild && this.setLine(this._elementContainer.firstChild.rows[this._elementLineCurrent && this._elementLineCurrent.rowIndex != this._elementContainer.firstChild.rows.length - 1 ? this._elementLineCurrent.rowIndex + 1: b]);
            break;
        case 13:
            if (null != this._elementContainer) {
                null != this._elementLineCurrent && this.setLine(this._elementLineCurrent);
                null != this._functionCallback && this._functionCallback(this._elementInput.value, this._elementLineCurrent ? this._elementLineCurrent.id.split(",") : [])
            }
            this._hide();
            break;
        default:
            this._check()
        }
    };
    this.getCodeFromCache = function(a) {
        return "key_" + a in this._objectData ? this._objectData["key_" + a] : void 0
    };
    this.getCode = function(a, b) {
        "key_" + a in this._objectData ? b(this._objectData["key_" + a]) : this._load(a, b, b)
    };
    this.changeType = function(a) {
        this._objectHtml = {};
        this._objectData = {};
        this._elementInput.value = this._stringOriginalValue;
        if ("undefined" != typeof a) {
            var b = "";
            switch (a.toLowerCase()) {
            case"stock":
                b = "11,12,13,14,15";
                break;
            case"fund":
                b = "21,22,23,24,25,26";
                break;
            case"hkstock":
                b = "31";
                break;
            case"hk":
                b = "31,33,32";
                break;
            case"usstock":
                b = "41";
                break;
            case"us":
                b = "41,42";
                break;
            default:
                b = a
            }
            this._stringUrl = this._stringOriginalUrl.replace("@TYPE@", b)
        } else 
            this._stringUrl = this._stringOriginalUrl.replace("type=@TYPE@&", "");
        this._objectConfig.type = a
    };
    this.changeLink = function(a) {
        this._objectConfig.link = a;
        this._fill();
        this._hide()
    };
    this.clear = function() {
        this._stringLastValue = null;
        this._elementInput.value = "";
        this._check();
        this._elementInput.value = this._stringOriginalValue
    };
    this.bind = function(a) {
        if ("undefined" != typeof a)
            for (var b in a)
                this._objectConfig[b] = a[b];
        this._elementInput = "string" == typeof this._objectConfig.input ? document.getElementById(this._objectConfig.input) : this._objectConfig.input;
        null != this._objectConfig.loader && (this._elementScriptLoader = "string" == typeof this._objectConfig.loader ? document.getElementById(this._objectConfig.loader) : this._objectConfig.loader);
        if (this._elementInput) {
            this._stringOriginalValue = null == this._objectConfig["default"] || "" == this._objectConfig["default"] ? this._elementInput.value : this._objectConfig["default"];
            this.changeType(this._objectConfig.type);
            this._elementInput.value = this._stringOriginalValue;
            this._elementInput.setAttribute("autocomplete", "off");
            this._elementInput.autoComplete = "off";
            this._aevent(this._elementInput, "focus", this._bind(this._eventFocus));
            this._aevent(this._elementInput, "blur", this._bind(this._eventBlur));
            this._aevent(this._elementInput, "keyup", this._bind(this._eventButtonUp));
            this._aevent(this._elementInput, "mouseup", this._bind(this._eventButtonUp));
            this._functionCallback = this._objectConfig.callback
        }
    }
};
