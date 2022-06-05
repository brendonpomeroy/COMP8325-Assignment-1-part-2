/**
	 * jQuery BASE64 functions
	 * 
	 * 	<code>
	 * 		Encodes the given data with base64. 
	 * 		String $.base64Encode ( String str )
	 *		<br />
	 * 		Decodes a base64 encoded data.
	 * 		String $.base64Decode ( String str )
	 * 	</code>
	 * 
	 * Encodes and Decodes the given data in base64.
	 * This encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean, such as mail bodies.
	 * Base64-encoded data takes about 33% more space than the original data. 
	 * This javascript code is used to encode / decode data using base64 (this encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean). Script is fully compatible with UTF-8 encoding. You can use base64 encoded data as simple encryption mechanism.
	 * If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
	 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
	 * 
	 * Example
	 * 	Code
	 * 		<code>
	 * 			$.base64Encode("I'm Persian."); 
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"SSdtIFBlcnNpYW4u"
	 * 		</code>
	 * 	Code
	 * 		<code>
	 * 			$.base64Decode("SSdtIFBlcnNpYW4u");
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"I'm Persian."
	 * 		</code>
	 * 
	 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
	 * @link http://www.semnanweb.com/jquery-plugin/base64.html
	 * @see http://www.webtoolkit.info/
	 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
	 * @param {jQuery} {base64Encode:function(input))
	 * @param {jQuery} {base64Decode:function(input))
	 * @return string
	 */
(function(e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = function(e) {
        e = e.replace(/\x0d\x0a/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r>>6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r>>12 | 224), t += String.fromCharCode(r>>6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
        }
        return t
    }, r = function(e) {
        var t = "", n = 0, r = c1 = c2 = 0;
        while (n < e.length)
            r = e.charCodeAt(n), r < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((r & 31)<<6 | c2 & 63), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((r & 15)<<12 | (c2 & 63)<<6 | c3 & 63), n += 3);
        return t
    };
    e.extend({
        base64Encode: function(e) {
            var r = "", i, s, o, u, a, f, l, c = 0;
            e = n(e);
            while (c < e.length)
                i = e.charCodeAt(c++), s = e.charCodeAt(c++), o = e.charCodeAt(c++), u = i>>2, a = (i & 3)<<4 | s>>4, f = (s & 15)<<2 | o>>6, l = o & 63, isNaN(s) ? f = l = 64 : isNaN(o) && (l = 64), r = r + t.charAt(u) + t.charAt(a) + t.charAt(f) + t.charAt(l);
            return r
        },
        base64Decode: function(e) {
            var n = "", i, s, o, u, a, f, l, c = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (c < e.length)
                u = t.indexOf(e.charAt(c++)), a = t.indexOf(e.charAt(c++)), f = t.indexOf(e.charAt(c++)), l = t.indexOf(e.charAt(c++)), i = u<<2 | a>>4, s = (a & 15)<<4 | f>>2, o = (f & 3)<<6 | l, n += String.fromCharCode(i), f != 64 && (n += String.fromCharCode(s)), l != 64 && (n += String.fromCharCode(o));
            return n = r(n), n
        }
    })
})(jQuery), function() {
    "use strict";
    var e = this, t = e.jQuery;
    typeof e.GOVUK == "undefined" && (e.GOVUK = {});
    var n = {
        TEMPLATE: '<section id="user-satisfaction-survey" class="visible" aria-hidden="false">  <div class="wrapper">    <h1>Tell us what you think of GOV.UK</h1>    <p class="right"><a href="#survey-no-thanks" id="survey-no-thanks">No thanks</a></p>    <p><a href="javascript:void()" id="take-survey" target="_blank">Take the 3 minute survey</a> This will open a short survey on another website</p>  </div></section>',
        cookieNameTakenSurvey: "govuk_takenUserSatisfactionSurvey",
        createEvent: function(e, t) {
            return ["_trackEvent", "user_satisfaction_survey", e, t, 1, !0]
        },
        setCookieTakenSurvey: function() {
            GOVUK.cookie(n.cookieNameTakenSurvey, !0, {
                days: 120
            }), t("#user-satisfaction-survey").removeClass("visible").attr("aria-hidden", "true")
        },
        setEventHandlers: function() {
            var e = t("#survey-no-thanks"), r = t("#take-survey");
            e.click(function(e) {
                return n.setCookieTakenSurvey(), GOVUK.sendToAnalytics(n.createEvent("banner_no_thanks", "No thanks clicked")), e.stopPropagation(), !1
            }), r.click(function() {
                n.setCookieTakenSurvey(), GOVUK.sendToAnalytics(n.createEvent("banner_taken", "User taken survey"))
            })
        },
        showSurveyBar: function() {
            if (GOVUK.cookie(n.cookieNameTakenSurvey) === "true" || n.otherNotificationVisible())
                return;
            t("#user-satisfaction-survey-container").append(n.TEMPLATE), n.setEventHandlers(), n.setSurveyUrl(), GOVUK.sendToAnalytics(n.createEvent("banner_shown", "Banner has been shown"))
        },
        otherNotificationVisible: function() {
            return t("#banner-notification:visible, #global-cookie-message:visible, #global-browser-prompt:visible").length > 0
        },
        randomlyShowSurveyBar: function() {
            if (t("#user-satisfaction-survey-container").length <= 0)
                return;
            Math.floor(Math.random() * 50) === 0 && n.showSurveyBar()
        },
        setSurveyUrl: function(n) {
            var r = t("#take-survey"), i = t("#user-satisfaction-survey-container").data("survey-url");
            i.indexOf("?c=")===-1 && (i += "?c=" + e.location.pathname), r.attr("href", i)
        }
    };
    e.GOVUK.userSatisfaction = n
}.call(this), $(document).ready(function() {
    $(".print-link a").attr("target", "_blank");
    var e = $(".js-search-focus");
    e.each(function(e, t) {
        $(t).val() !== "" && $(t).addClass("focus")
    }), e.on("focus", function(e) {
        $(e.target).addClass("focus")
    }), e.on("blur", function(e) {
        $(e.target).val() === "" && $(e.target).removeClass("focus")
    });
    if (window.GOVUK && GOVUK.userSatisfaction) {
        var t = window.location.pathname;
        function n(e, t) {
            return e.indexOf(t)>-1
        }
        !n(t, "/done")&&!n(t, "/transaction-finished")&&!n(t, "/driving-transaction-finished") && GOVUK.userSatisfaction.randomlyShowSurveyBar()
    }
    var r = $("label.selectable input[type='radio'], label.selectable input[type='checkbox']");
    new GOVUK.SelectionButtons(r)
});
var ReportAProblem = {
    showErrorMessage: function(e) {
        var t = "<h2>Sorry, we're unable to receive your message right now.</h2> <p>We have other ways for you to provide feedback on the <a href='/contact'>contact page</a>.</p>";
        $(".report-a-problem-content").html(t)
    },
    promptUserToEnterValidData: function() {
        ReportAProblem.enableSubmitButton(), $('<p class="error-notification">Please enter details of what you were doing.</p>').insertAfter(".report-a-problem-container h2")
    },
    disableSubmitButton: function() {
        $(".report-a-problem-container .button").attr("disabled", !0)
    },
    enableSubmitButton: function() {
        $(".report-a-problem-container .button").attr("disabled", !1)
    },
    showConfirmation: function(e) {
        $(".report-a-problem-content").html(e.message)
    },
    submit: function() {
        return $(".report-a-problem-container .error-notification").remove(), $("input#url").val(window.location), ReportAProblem.disableSubmitButton(), $.ajax({
            type: "POST",
            url: "/contact/govuk/problem_reports",
            dataType: "json",
            data: $(".report-a-problem-container form").serialize(),
            success: ReportAProblem.showConfirmation,
            error: function(e, t) {
                if (t === "error" ||!e.responseText)
                    e.status == 422 ? ReportAProblem.promptUserToEnterValidData() : ReportAProblem.showErrorMessage()
            },
            statusCode: {
                500: ReportAProblem.showErrorMessage
            }
        }), !1
    }
};
$(document).ready(function() {
    var e = '<div class="report-a-problem-toggle-wrapper js-footer"><p class="report-a-problem-toggle"><a href="">Is there anything wrong with this page?</a></p></div>', t = $(".report-a-problem-container");
    t.before(e), $(".report-a-problem-toggle a").on("click", function() {
        return t.toggle(), !1
    });
    var n = t.find("form");
    n.append('<input type="hidden" name="javascript_enabled" value="true"/>'), n.append($('<input type="hidden" name="referrer">').val(document.referrer || "unknown")), n.submit(ReportAProblem.submit)
}), function() {
    "use strict";
    var e = this;
    e.GOVUK = e.GOVUK || {};
    var t = e.GOVUK;
    t.Analytics = e.GOVUK.Analytics || {}, t.Analytics.internalSiteEvents = function() {
        var e = "GDS_successEvents", n = [], r = function() {
            var r = t.cookie(e);
            r ? r = jQuery.parseJSON(jQuery.base64Decode(r)) : r = [], n = r
        }, i = function() {
            r(), $(n).each(function() {
                t.sendToAnalytics(this)
            }), n = [], t.cookie(e, null)
        }, s = function(r) {
            n.push(r), t.cookie(e, jQuery.base64Encode(JSON.stringify(n)), {
                days: 120
            })
        };
        return {
            push: s,
            sendAll: i
        }
    }(), t.Analytics.entryTokens = function() {
        var e = "GDS_analyticsTokens", n = function(e, t) {
            return $.inArray(e, t)!==-1
        }, r = function() {
            return t.Analytics.getSlug(document.URL, t.Analytics.Trackers[t.Analytics.Format].slugLocation)
        }, i = function() {
            var i = JSON.parse(t.cookie(e));
            i || (i = []), n(r(), i) || (i.push(r()), t.cookie(e, JSON.stringify(i), {
                days: 120
            }))
        }, s = function() {
            var n = JSON.parse(t.cookie(e)), i = $.inArray(r(), n);
            i!==-1 && (n.splice(i, 1), t.cookie(e, JSON.stringify(n), {
                days: 120
            }))
        }, o = function() {
            var i = JSON.parse(t.cookie(e));
            return n(r(), i)
        };
        return {
            assignToken: i,
            revokeToken: s,
            tokenExists: o
        }
    }()
}.call(this), function() {
    "use strict";
    var e = this;
    e.GOVUK = e.GOVUK || {};
    var t = e.GOVUK;
    t.Analytics = t.Analytics || {}, t.Analytics.Trackers = {}, t.Analytics.trackingPrefixes = {
        MAINSTREAM: "MS_",
        INSIDE_GOV: "IG_"
    }, t.Analytics.Tracker = function(e, t, n) {
        var r = n;
        return r.prefix = e, r.slugLocation = t, r
    }, t.Analytics.Trackers.guide = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.MAINSTREAM, 0, function(e) {
        e.trackTimeBasedSuccess(7e3), e.trackInternalLinks($("#content a"))
    }), t.Analytics.Trackers.transaction = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.MAINSTREAM, 0, function(e) {
        e.trackInternalLinks($("#content a")), e.trackLinks($("#get-started a"))
    }), t.Analytics.Trackers.programme = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.MAINSTREAM, 0, function(e) {
        e.trackTimeBasedSuccess(7e3), e.trackInternalLinks($("#content a"))
    }), t.Analytics.Trackers.answer = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.MAINSTREAM, 0, function(e) {
        e.trackTimeBasedSuccess(7e3), e.trackInternalLinks($("#content a"))
    }), t.Analytics.Trackers.smart_answer = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.MAINSTREAM, 0, function(e) {
        t.Analytics.Trackers.smart_answer.isAjaxNavigation() ? $(document).bind("smartanswerOutcome", e.trackSuccessFunc(!1)) : $(function() {
            $("article.outcome").length === 1 && e.trackSuccess(!0)
        })
    });
    var n = n || function() {
        return !!(history && history.replaceState && history.pushState)
    };
    t.Analytics.Trackers.smart_answer.isAjaxNavigation = n, t.Analytics.Trackers.smart_answer.shouldTrackEntry = function() {
        return t.Analytics.isRootOfArtefact(document.URL, t.Analytics.Trackers.smart_answer.slugLocation)
    }, t.Analytics.Trackers.smart_answer.shouldTrackSuccess = function() {
        return t.Analytics.Trackers.smart_answer.isAjaxNavigation() ? t.Analytics.entryTokens.tokenExists()&&!t.Analytics.isRootOfArtefact(document.URL, t.Analytics.Trackers.smart_answer.slugLocation) : t.Analytics.entryTokens.tokenExists() && $("article.outcome").length === 1
    }, t.Analytics.Trackers.policy = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.INSIDE_GOV, 2, function(e) {
        e.trackTimeBasedSuccess(3e4), e.trackInternalLinks($("#page a").filter(function() {
            return !t.Analytics.isLinkToFragmentInCurrentDocument(this)
        }))
    }), t.Analytics.Trackers.detailed_guidance = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.INSIDE_GOV, 0, function(e) {
        e.trackTimeBasedSuccess(3e4), e.trackInternalLinks($("#page a"))
    }), t.Analytics.Trackers.news = new t.Analytics.Tracker(t.Analytics.trackingPrefixes.INSIDE_GOV, 2, function(e) {
        e.trackInternalLinks($("#page a")), e.trackTimeBasedSuccess(3e4)
    })
}.call(this), function() {
    "use strict";
    var e = this;
    e.GOVUK = e.GOVUK || {};
    var t = e.GOVUK;
    t.Analytics = t.Analytics || {}, e._gaq = e._gaq || [], t.sendToAnalytics = function(t) {
        e._gaq.push(t)
    }, t.Analytics.isTheSameArtefact = function(e, t, n) {
        var r = function(e) {
            return e.split("/").slice(0, 4 + n).join("/")
        }, i = r(e).replace(/#.*$/, ""), s = r(t).replace(/#.*$/, "");
        return i === s
    }, t.Analytics.getSlug = function(e, t) {
        return e.split("/")[3 + t].split("#")[0].split("?")[0]
    }, t.Analytics.isRootOfArtefact = function(e, t) {
        return e.replace(/\/$/, "").split("/").slice(3 + t).length === 1
    }, t.Analytics.isLinkToFragmentInCurrentDocument = function(e) {
        var t = e.href.split("#")[0] === document.URL.split("#")[0], n = e.hash !== "";
        return t && n
    }, t.Analytics.startAnalytics = function() {
        var e = 13, n=!1, r = "none", i = t.Analytics.Format, s = t.Analytics.Trackers[i], o = function(e, t) {
            return typeof e == "function" ? e() : t
        }, u = function(e, n) {
            var i = t.Analytics.getSlug(document.URL, s.slugLocation);
            return ["_trackEvent", r + t.Analytics.Format, i, e, 0, n]
        }, a = function() {
            if (n)
                return;
            n=!0;
            var e = u("Success", !1);
            t.Analytics.isLinkToFragmentInCurrentDocument(this) ? t.sendToAnalytics(e) : t.Analytics.internalSiteEvents.push(e)
        }, f = function(t, n) {
            t.each(function() {
                var t = $(this);
                this.hostname === window.location.hostname && (t.click(a), t.keydown(function(t) {
                    t.which === e && a.call(this, t)
                }))
            })
        }, l = {
            trackSuccessFunc: function(e) {
                return e === undefined && (e=!1), function() {
                    l.trackSuccess(e)
                }
            },
            trackSuccess: function(e) {
                e === undefined && (e=!1);
                if (n)
                    return;
                n=!0, t.sendToAnalytics(u("Success", e))
            },
            trackInternalLinks: function(e) {
                f(e, !1)
            },
            trackLinks: function(e) {
                f(e, !0)
            },
            trackTimeBasedSuccess: function(e) {
                setTimeout(l.trackSuccessFunc(!0), e)
            }
        };
        t.Analytics.Trackers[i] !== undefined && (r = t.Analytics.Trackers[i].prefix);
        if (typeof s == "function") {
            var c = t.Analytics.isTheSameArtefact(document.URL, document.referrer, s.slugLocation);
            o(s.shouldTrackEntry, !c) && (t.sendToAnalytics(u("Entry", !0)), t.Analytics.entryTokens.assignToken()), o(s.shouldTrackSuccess, !c) && (s(l), t.Analytics.entryTokens.revokeToken())
        }
        return t.Analytics.internalSiteEvents.sendAll(), l
    }, $(t.Analytics.startAnalytics)
}.call(this), function() {
    var e = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/__utm.gif";
    e += "?utmwv=5.3.9", e += "&utmn=" + Math.floor(Math.random() * parseInt("0x7fffffff", 16)), e += "&utmhn=" + encodeURIComponent(document.location.hostname), e += "&utmp=" + encodeURIComponent("/print" + document.location.pathname), e += "&utmac=UA-26179049-1", e += "&utmcc=__utma%3D999.999.999.999.999.1%3B";
    var t = document.createElement("style");
    t.setAttribute("type", "text/css");
    var n = document.createTextNode("@media print { body:after { content: url(" + e + "); } body { *background: url(" + e + ") no-repeat; }}");
    t.styleSheet ? t.styleSheet.cssText = n.nodeValue : t.appendChild(n);
    var r = document.getElementsByTagName("head")[0];
    r && r.appendChild(t)
}(), function() {
    "use strict";
    var e = function() {
        _gaq.push(["_trackEvent", "Print Intent", document.location.pathname])
    };
    if (window.matchMedia) {
        var t = window.matchMedia("print"), n = 0;
        t.addListener(function(t) {
            !t.matches && n === 0 && (e(), n++, window.setTimeout(function() {
                n = 0
            }, 1e3))
        })
    }
    window.onafterprint && (window.onafterprint = e)
}(), function() {
    "use strict";
    function t(e) {
        this.config = this.getConfigForCurrentPath(e), this.SCROLL_TIMEOUT_DELAY = 500;
        if (!this.config) {
            this.enabled=!1;
            return 
        }
        this.enabled=!0, this.trackedNodes = this.buildNodes(this.config), $(window).scroll($.proxy(this.onScroll, this)), this.trackVisibleNodes()
    }
    window.GOVUK = window.GOVUK || {}, window.GOVUK.Analytics = window.GOVUK.Analytics || {};
    var e = {
        "/": [["Heading", "Services and information"], ["Heading", "More on GOV.UK"], ["Percent", 80]],
        "/bank-holidays": [["Percent", 25], ["Percent", 50], ["Percent", 75]],
        "/jobsearch": [["Heading", "Registration"], ["Heading", "Help"]],
        "/register-to-vote": [["Percent", 25], ["Percent", 50], ["Percent", 75]],
        "/apply-uk-visa": [["Percent", 25], ["Percent", 50], ["Percent", 75]],
        "/student-finance-register-login": [["Heading", "Log in problems"], ["Heading", "Manage your student finance"]],
        "/tax-disc": [["Heading", "Other ways to apply"], ["Heading", "Help with tax discs"]],
        "/government/world": [["Percent", 25], ["Percent", 50], ["Percent", 75]]
    };
    t.prototype.getConfigForCurrentPath = function(t) {
        for (var n in t)
            if (window.location.pathname == n)
                return t[n]
    }, t.prototype.buildNodes = function(n) {
        var r = [], i, s;
        for (var o = 0; o < n.length; o++)
            i = t[n[o][0] + "Node"], s = n[o][1], r.push(new i(s));
        return r
    }, t.prototype.onScroll = function() {
        clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout($.proxy(this.trackVisibleNodes, this), this.SCROLL_TIMEOUT_DELAY)
    }, t.prototype.trackVisibleNodes = function() {
        for (var t = 0; t < this.trackedNodes.length; t++)
            this.trackedNodes[t].isVisible()&&!this.trackedNodes[t].alreadySeen && (this.trackedNodes[t].alreadySeen=!0, GOVUK.sendToAnalytics(["_trackEvent"].concat(this.trackedNodes[t].eventData).concat([0, !0])))
    }, t.PercentNode = function(t) {
        this.percentage = t, this.eventData = ["ScrollTo", "Percent", String(t)]
    }, t.PercentNode.prototype.isVisible = function() {
        return this.currentScrollPercent() >= this.percentage
    }, t.PercentNode.prototype.currentScrollPercent = function() {
        var t = $(document), n = $(window);
        return n.scrollTop() / (t.height() - n.height()) * 100
    }, t.HeadingNode = function(t) {
        function n(e) {
            var t = $("h1, h2, h3, h4, h5, h6");
            for (var n = 0; n < t.length; n++)
                if ($.trim(t.eq(n).text()).replace(/\s/g, " ") == e)
                    return t.eq(n)
        }
        this.$element = n(t), this.eventData = ["ScrollTo", "Heading", t]
    }, t.HeadingNode.prototype.isVisible = function() {
        return this.$element ? this.elementIsVisible(this.$element) : !1
    }, t.HeadingNode.prototype.elementIsVisible = function(t) {
        var n = $(window), r = t.offset().top;
        return r > n.scrollTop() && r < n.scrollTop() + n.height()
    }, $().ready(function() {
        window.GOVUK.Analytics.scrollTracker = new t(e)
    }), window.GOVUK.Analytics.ScrollTracker = t
}(), Function.prototype.bind || (Function.prototype.bind = function(e) {
    if (typeof this != "function")
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1), n = this, r = function() {}, i = function() {
        return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
    };
    return r.prototype = this.prototype, i.prototype = new r, i
}), function() {
    "use strict";
    var e = this, t = e.jQuery;
    typeof GOVUK == "undefined" && (e.GOVUK = {});
    var n = function(e, n) {
        var r;
        this.selectedClass = "selected", this.focusedClass = "focused", n !== undefined && t.each(n, function(e, t) {
            this[e] = t
        }.bind(this)), typeof e == "string" ? (r = t(e), this.selector = e, this.setInitialState(t(this.selector))) : (this.$elms = e, this.setInitialState(this.$elms)), this.addEvents()
    };
    n.prototype.addEvents = function() {
        typeof this.$elms != "undefined" ? this.addElementLevelEvents() : this.addDocumentLevelEvents()
    }, n.prototype.setInitialState = function(e) {
        e.each(function(e, n) {
            var r = t(n);
            r.is(":checked") && this.markSelected(r)
        }.bind(this))
    }, n.prototype.markFocused = function(e, t) {
        t === "focused" ? e.parent("label").addClass(this.focusedClass) : e.parent("label").removeClass(this.focusedClass)
    }, n.prototype.markSelected = function(e) {
        var n;
        e.attr("type") === "radio" ? (n = e.attr("name"), t(e[0].form).find('input[name="' + n + '"]').parent("label").removeClass(this.selectedClass), e.parent("label").addClass(this.selectedClass)) : e.is(":checked") ? e.parent("label").addClass(this.selectedClass) : e.parent("label").removeClass(this.selectedClass)
    }, n.prototype.addElementLevelEvents = function() {
        this.clickHandler = this.getClickHandler(), this.focusHandler = this.getFocusHandler({
            level: "element"
        }), this.$elms.on("click", this.clickHandler).on("focus blur", this.focusHandler)
    }, n.prototype.addDocumentLevelEvents = function() {
        this.clickHandler = this.getClickHandler(), this.focusHandler = this.getFocusHandler({
            level: "document"
        }), t(document).on("click", this.selector, this.clickHandler).on("focus blur", this.selector, this.focusHandler)
    }, n.prototype.getClickHandler = function() {
        return function(e) {
            this.markSelected(t(e.target))
        }.bind(this)
    }, n.prototype.getFocusHandler = function(e) {
        var n = e.level === "document" ? "focusin": "focus";
        return function(e) {
            var r = e.type === n ? "focused": "blurred";
            this.markFocused(t(e.target), r)
        }.bind(this)
    }, n.prototype.destroy = function() {
        typeof this.selector != "undefined" ? t(document).off("click", this.selector, this.clickHandler).off("focus blur", this.selector, this.focusHandler) : this.$elms.off("click", this.clickHandler).off("focus blur", this.focusHandler)
    }, e.GOVUK.SelectionButtons = n
}.call(this), function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href ||!i || r.nodeName.toLowerCase() !== "map"?!1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u)?!t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0, r = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(n, r) {
                return typeof n == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) ||!t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }): function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"), r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"]: ["Top", "Bottom"], s = r.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i ||!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft": "scrollTop", i=!1;
            return t[r] > 0?!0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }
    })
}(jQuery), function(e, t) {
    var n = 0, r = Array.prototype.slice, i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r; (r = t[n]) != null; n++)
            try {
                e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = {}, f = t.split(".")[0];
        t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return 
            }
            a[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }, i = function(e) {
                    return n.prototype[t].apply(this, e)
                };
                return function() {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix: t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)
            for (u in i[s])
                a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string", a = r.call(arguments, 1), f = this;
            return o=!u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i)
                    return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                    return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                    return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n, s, o, u;
            if (arguments.length === 0)
                return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++)
                        o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t)
                        return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t)
                        return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t=!1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled===!0 || e(this).hasClass("ui-state-disabled")))
                        return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s)
                    i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r))===!1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i===!0 || typeof i == "number" ? n: i.effect || n: t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o=!e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    })
}(jQuery), function(e, t) {
    var n=!1;
    e(document).mouseup(function() {
        n=!1
    }), e.widget("ui.mouse", {
        version: "1.10.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started=!1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n)
                return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length: !1;
            if (!i || s ||!this._mouseCapture(t))
                return !0;
            this.mouseDelayMet=!this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet=!0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t)!==!1;
                if (!this._mouseStarted)
                    return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n=!0, !0
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9)&&!t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t)!==!1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted=!1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), function(e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation
            : "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding=!1, this._mouseSliding=!1, this._animateOff=!0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff=!1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, n, r = this.options, i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n));
            for (t = i.length; t < n; t++)
                o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options, n = "";
            t.range ? (t.range===!0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), !this.range ||!this.range.length ? (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }), this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },
        _setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this, c = this.options;
            return c.disabled?!1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min))
                    i = n, s = e(this), o = t
            }), u = this._start(t, o), u===!1?!1 : (this._mouseSliding=!0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f=!e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff=!0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding=!1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff=!1, !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range===!0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s!==!1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s!==!1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding&&!this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },
        value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return 
            }
            return this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return 
            }
            if (!arguments.length)
                return this._values();
            if (!e.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1)
                r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            t === "range" && this.options.range===!0 && (n === "min" ? (this.options.value = this._values(0), this.options.values = null) : n === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff=!0, this._refreshValue(), this._change(null, 0), this._animateOff=!1;
                break;
            case"values":
                this._animateOff=!0, this._refreshValue();
                for (r = 0; r < i; r += 1)
                    this._change(null, r);
                this._animateOff=!1;
                break;
            case"min":
            case"max":
                this._animateOff=!0, this._refreshValue(), this._animateOff=!1;
                break;
            case"range":
                this._animateOff=!0, this._refresh(), this._animateOff=!1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length)
                return t = this.options.values[e], t = this._trimAlignValue(t), t;
            if (this.options.values && this.options.values.length) {
                n = this.options.values.slice();
                for (r = 0; r < n.length; r += 1)
                    n[r] = this._trimAlignValue(n[r]);
                return n
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin())
                return this._valueMin();
            if (e >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step: 1, n = (e - this._valueMin())%t, r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : - t), parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range, u = this.options, a = this, f = this._animateOff?!1 : u.animate, l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left": "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate": "css"](l, u.animate), a.options.range===!0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate": "css"]({
                    left: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate": "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate": "css"]({
                    bottom: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate": "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left": "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate": "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate": "css"]({
                width: n + "%"
            }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate": "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate": "css"]({
                height: n + "%"
            }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate": "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    t.preventDefault();
                    if (!this._keySliding) {
                        this._keySliding=!0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                        if (r===!1)
                            return 
                    }
                }
                o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                    s = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    s = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    s = this._trimAlignValue(i + o);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    s = this._trimAlignValue(i - o)
                }
                this._slide(t, u, s)
            },
            click: function(e) {
                e.preventDefault()
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding=!1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery);
var swfobject = function() {
    function C() {
        if (b)
            return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return 
        }
        b=!0;
        var n = c.length;
        for (var r = 0; r < n; r++)
            c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e)
            u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e)
            a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e)
            z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(), t()
            }
        } else 
            u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0], r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return 
                }
                n.removeChild(r), s = null, M()
            })()
        } else 
            M()
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id, i = h[n].callbackFn, s = {
                    success: !1,
                    id: r
                };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion)&&!(T.wk && T.wk < 312))
                            V(r, !0), i && (s.success=!0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {}, f = o.getElementsByTagName("param"), l = f.length;
                            for (var c = 0; c < l; c++)
                                f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                                P(u, a, r, i)
                        } else 
                            H(o), i && i(s)
                        } else {
                            V(r, !0);
                            if (i) {
                                var p = _(r);
                                p && typeof p.SetVariable != e && (s.success=!0, s.ref = p), i(s)
                            }
                        }
                    }
        }
    function _(n) {
        var r = null, i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e)
                r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac)&&!(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w=!0, g = i || null, y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e ||!/%$/.test(t.width) && parseInt(t.width, 10) < 310)
                t.width = "310";
            if (typeof t.height == e ||!/%$/.test(t.height) && parseInt(t.height, 10) < 137)
                t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX": "PlugIn", l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none", function() {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none", function() {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else 
            e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie)
            n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") 
                        && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                    }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312)
            return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n)
                    n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r)
                    r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n)
                    n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r)
                    r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t)
                typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv, n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]?!0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac)
            return;
        var o = a.getElementsByTagName("head")[0];
        if (!o)
            return;
        var u = i && typeof i == "string" ? i: "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x)
            return;
        var n = t ? "visible": "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }
    function $(t) {
        var n = /[\\\"<>\.;]/, r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l=!1, c = [A], h = [], p = [], d = [], v, m, g, y, b=!1, w=!1, E, S, x=!0, T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e, o = f.userAgent.toLowerCase(), c = f.platform.toLowerCase(), h = c ? /win/.test(c): /win/.test(o), p = c ? /mac/.test(c): /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): !1, v=!1, m = [0, 0, 0], g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t)
            g = f.plugins[n].description, g && (typeof f.mimeTypes == e ||!f.mimeTypes[i]||!!f.mimeTypes[i].enabledPlugin) && (l=!0, v=!1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof u.ActiveXObject != e)
            try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v=!0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
        } catch (b) {}
        return {
            w3: s,
            pv: m,
            wk: d,
            ie: v,
            win: h,
            mac: p
        }
    }(), N = function() {
        if (!T.w3)
            return;
        (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function() {
            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
        }), u == top && function() {
            if (b)
                return;
            try {
                a.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(arguments.callee, 0);
                return 
            }
            C()
        }()), T.wk && function() {
            if (b)
                return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(arguments.callee, 0);
                return 
            }
            C()
        }(), L(C))
    }(), J = function() {
        T.ie && T.win && window.attachEvent("onunload", function() {
            var e = d.length;
            for (var t = 0; t < e; t++)
                d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++)
                I(p[r]);
            for (var i in T)
                T[i] = null;
            T = null;
            for (var s in swfobject)
                swfobject[s] = null;
            swfobject = null
        })
    }();
    return {
        registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else 
                r && r({
                    success: !1,
                    id: e
                })
        },
        getObjectById: function(e) {
            if (T.w3)
                return _(e)
        },
        embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3&&!(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l)
                        p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f)
                        v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a)
                        typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success=!0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return 
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function() {
            x=!1
        },
        ua: T,
        getFlashPlayerVersion: function() {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function(e) {
            T.w3 && I(e)
        },
        createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null)
                    return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e)
                        return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w=!1
            }
        }
    }
}();
window.NOMENSA = window.NOMENSA || {}, window.NOMENSA.player = window.NOMENSA.player || {}, window.NOMENSA.player.YoutubePlayer = function(e) {
    this.config = e, this.config.playerVars = {
        controls: 0,
        showinfo: 0,
        origin: window.location.protocol + "//" + window.location.hostname,
        rel: 0
    }
}, window.NOMENSA.player.YoutubePlayer.apiLoaded=!1, window.NOMENSA.player.YoutubePlayer.prototype = {
    getYTOptions: function() {
        var e = this, t = {
            height: this.config.flashHeight,
            width: this.config.flashWidth,
            videoId: this.config.media,
            events: {
                onReady: function(t) {
                    e.$html.find("iframe").attr({
                        id: e.config.id,
                        role: "presentation"
                    }), e.onPlayerReady(t)
                },
                onStateChange: function(t) {
                    e.onPlayerStateChange(t.data)
                }
            }
        };
        return t.playerVars = this.config.playerVars, this.config.repeat && (t.playerVars.playlist = this.config.media), t
    },
    init: function() {
        return typeof window.postMessage != "undefined" ? function(e) {
            var t = document.createElement("script"), n = document.getElementsByTagName("script")[0], r = this;
            this.$html = this.assembleHTML(), this.config.captions && this.getCaptions(), e.html(this.$html), window.NOMENSA.player.PlayerDaemon.addPlayer(this), window.NOMENSA.player.YoutubePlayer.apiLoaded ? this.player = YT.Player("player-" + player.config.id, getOptions(player)) : typeof window.onYouTubeIframeAPIReady == "undefined" && (window.onYouTubeIframeAPIReady = function() {
                window.NOMENSA.player.PlayerDaemon.map(function(e) {
                    typeof e.getYTOptions != "undefined" && (e.player = new YT.Player("player-" + e.config.id, e.getYTOptions()))
                }), window.NOMENSA.player.YoutubePlayer.apiLoaded=!0
            }, t.src = "//www.youtube.com/iframe_api", n.parentNode.insertBefore(t, n))
        } : function(e) {
            var t = this;
            this.$html = this.assembleHTML(), this.config.captions && this.getCaptions(), e.html(this.$html), window.NOMENSA.player.PlayerDaemon.addPlayer(this), window.NOMENSA.player.stateHandlers[this.config.id] = function(e) {
                var n = window.NOMENSA.player.PlayerDaemon.getPlayer(t.config.id);
                n.onPlayerStateChange(e)
            }, window.onYouTubePlayerReady = function(e) {
                var n = window.NOMENSA.player.PlayerDaemon.getPlayer(e), r = document.getElementById(n.config.id);
                n.player = r, n.cue(), n.getPlayer().addEventListener("onStateChange", "window.NOMENSA.player.stateHandlers." + t.config.id), n.onPlayerReady()
            }
        }
    }(),
    state: {
        ended: 0,
        playing: 1,
        paused: 2,
        unstarted: - 1
    },
    onPlayerReady: function() {
        var e = [], t;
        return function(n) {
            var r = e.length;
            if (typeof n == "function")
                e.push(n);
            else {
                if (r === 0)
                    return !1;
                for (t = 0; t < r; t++)
                    e[t].apply(this, arguments)
            }
        }
    }(),
    onPlayerStateChange: function(e) {
        e == 1 ? (this.play(), this.config.buttons.toggle && this.$html.find(".play").removeClass("play").addClass("pause").text("Pause")) : this.config.repeat && e == 0 && this.play()
    },
    getFlashVars: function() {
        var e = {
            controlbar: "none",
            file: this.config.media
        };
        return this.config.image != "" && (e.image = this.config.image), this.config.repeat && (e.repeat = this.config.repeat), e
    },
    getFlashParams: function() {
        return {
            allowScriptAccess: "always",
            wmode: "transparent"
        }
    },
    generateFlashPlayer: function(e) {
        var t = this, n = this.getFlashVars(), r = this.getFlashParams(), i = {
            id: this.config.id,
            name: this.config.id
        }, s = $("<" + this.config.flashContainer + " />").attr("id", "player-" + this.config.id).addClass("flashReplace").html('This content requires Macromedia Flash Player. You can <a href="http://get.adobe.com/flashplayer/">install or upgrade the Adobe Flash Player here</a>.'), o = $("<span />").addClass("video"), u = this.getURL();
        return setTimeout(function() {
            swfobject.embedSWF(u, s.attr("id"), t.config.flashWidth, t.config.flashHeight, "9.0.115", null, n, r, i, t.config.swfCallback), $.browser.mozilla && parseInt($.browser.version, 10) >= 2 && t.$html.find("object").attr("tabindex", "-1")
        }, 0), e.append(o.append(s)), e
    },
    generateVideoPlayer: function(e) {
        if (typeof window.postMessage == "undefined")
            return this.generateFlashPlayer(e);
        var t = $("<" + this.config.flashContainer + " />").attr("id", "player-" + this.config.id), n = $("<span />").addClass("video");
        return e.append(n.append(t)), e
    },
    getPlayer: function() {
        return this.player
    },
    is_html5: !1,
    play: function() {
        this.player.playVideo(), this.setSliderTimeout(), this.config.captionsOn && this.captions && this.setCaptionTimeout()
    },
    pause: function() {
        this.player.pauseVideo(), this.clearSliderTimeout(), this.config.captionsOn && this.captions && this.clearCaptionTimeout()
    },
    ffwd: function() {
        var e = this.getCurrentTime() + this.config.playerSkip, t = this.getDuration();
        e > t && (e = t), this.seek(e)
    },
    rewd: function() {
        var e = this.getCurrentTime() - this.config.playerSkip;
        e < 0 && (e = 0), this.seek(e)
    },
    mute: function() {
        var e = this.$html.find("button.mute");
        this.player.isMuted() ? (this.player.unMute(), e.hasClass("muted") && e.removeClass("muted")) : (this.player.mute(), e.addClass("muted"))
    },
    volup: function() {
        var e = this.player.getVolume();
        e >= 100 ? e = 100 : e += this.config.volumeStep, this.player.setVolume(e), this.updateVolume(e)
    },
    voldwn: function() {
        var e = this.player.getVolume();
        e <= 0 ? e = 0 : e -= this.config.volumeStep, this.player.setVolume(e), this.updateVolume(e)
    },
    getDuration: function() {
        return this.player.getDuration()
    },
    getCurrentTime: function() {
        return this.player.getCurrentTime()
    },
    getBytesLoaded: function() {
        return this.player.getVideoBytesLoaded()
    },
    getBytesTotal: function() {
        return this.player.getVideoBytesTotal()
    },
    seek: function(e) {
        this.player.seekTo(e, !0), this.config.captionsOn && this.captions && (this.$html.find(".caption").remove(), this.clearCaptionTimeout(), this.setCaptionTimeout(), this.getPreviousCaption())
    },
    cue: function() {
        this.player.cueVideoById(this.config.media)
    },
    toggleCaptions: function() {
        var e = this, t = this.$html.find(".captions");
        t.hasClass("captions-off") ? (t.removeClass("captions-off").addClass("captions-on"), e.getPreviousCaption(), e.setCaptionTimeout(), e.config.captionsOn=!0) : (t.removeClass("captions-on").addClass("captions-off"), e.clearCaptionTimeout(), e.$html.find(".caption").remove(), e.config.captionsOn=!1)
    }
}, window.NOMENSA = window.NOMENSA || {}, window.NOMENSA.player = window.NOMENSA.player || {}, window.NOMENSA.player.MediaplayerDecorator = function(e) {
    var t = e;
    this.config = t.config, this.player = t.player, this.state = t.state;
    for (var n in t)
        typeof t[n] == "function" && (this[n] = function(e) {
            return function() {
                return t[e].apply(this, arguments)
            }
        }(n))
}, window.NOMENSA.player.MediaplayerDecorator.prototype.generatePlayerContainer = function() {
    var e = $("<" + this.config.playerContainer + " />").css(this.config.playerStyles).addClass("player-container");
    return $.browser.msie && e.addClass("player-container-ie player-container-ie-" + $.browser.version.substring(0, 1)), e
}, window.NOMENSA.player.MediaplayerDecorator.prototype.assembleHTML = function() {
    var e = this.generatePlayerContainer(), t = this.generateVideoPlayer(e), n = t.append(this.getControls());
    return n
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getURL = function() {
    return [this.config.url, this.config.id].join("")
}, window.NOMENSA.player.MediaplayerDecorator.prototype.createButton = function(e, t) {
    var n = 0, r = [e, this.config.id].join("-"), i = $("<button />").append(t).addClass(e).attr({
        title: e,
        id: r
    }).addClass("ui-corner-all ui-state-default").hover(function() {
        $(this).addClass("ui-state-hover")
    }, function() {
        $(this).removeClass("ui-state-hover")
    }).focus(function() {
        $(this).addClass("ui-state-focus")
    }).blur(function() {
        $(this).removeClass("ui-state-focus")
    }).click(function(e) {
        e.preventDefault()
    });
    return i
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getFuncControls = function() {
    var e = this, t = $("<div>");
    t[0].className = "player-controls";
    var n = [];
    if (e.config.buttons.toggle) {
        var r = e.createButton("play", "Play").attr({
            "aria-live": "assertive"
        }).click(function() {
            $(this).hasClass("play") ? ($(this).removeClass("play").addClass("pause").attr({
                title: "Pause",
                id: "pause-" + e.config.id
            }).text("Pause"), e.play()) : ($(this).removeClass("pause").addClass("play").attr({
                title: "Play",
                id: "play-" + e.config.id
            }).text("Play"), e.pause())
        });
        n.push(r)
    } else {
        var i = e.createButton("play", "Play").click(function() {
            e.play()
        }), s = e.createButton("pause", "Pause").click(function() {
            e.pause()
        });
        n.push(i), n.push(s)
    }
    if (e.config.buttons.rewind) {
        var o = e.createButton("rewind", "Rewind").click(function() {
            e.rewd()
        });
        n.push(o)
    }
    if (e.config.buttons.forward) {
        var u = e.createButton("forward", "Forward").click(function() {
            e.ffwd()
        });
        n.push(u)
    }
    if (e.config.captions) {
        var a = e.createButton("captions", "Captions").click(function() {
            e.toggleCaptions()
        }), f = e.config.captionsOn == 1 ? "captions-on": "captions-off";
        a.addClass(f), n.push(a)
    }
    for (var l = 0; l < n.length; l += 1)
        t[0].appendChild(n[l][0]);
    return t
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getVolControls = function() {
    var e = this, t = $("<div>").addClass("volume-controls"), n = e.createButton("mute", "Mute").click(function() {
        e.mute()
    }), r = e.createButton("vol-up", '+<span class="ui-helper-hidden-accessible"> Volume Up</span>').click(function() {
        e.volup()
    }), i = e.createButton("vol-down", '-<span class="ui-helper-hidden-accessible"> Volume Down</span>').click(function() {
        e.voldwn()
    }), s = $("<span />").attr({
        id: "vol-" + e.config.id,
        "class": "vol-display"
    }).text("100%"), o = [n, i, r, s];
    for (var u = 0; u < o.length; u += 1)
        t[0].appendChild(o[u][0]);
    return t
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getSliderBar = function() {
    var e = $("<span />").addClass("ui-helper-hidden-accessible").html("<p>The timeline slider below uses WAI ARIA. Please use the documentation for your screen reader to find out more.</p>"), t = $("<span />").addClass("current-time").attr({
        id: "current-" + this.config.id
    }).text("00:00:00"), n = this.getSlider(), r = $("<span />").addClass("duration-time").attr({
        id: "duration-" + this.config.id
    }).text("00:00:00"), i = $("<div />").addClass("timer-bar").append(e), s = [t, n, r];
    for (var o = 0; o < s.length; o += 1)
        i[0].appendChild(s[o][0]);
    return i
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getSlider = function() {
    var e = this, t = $("<span />").attr("id", "slider-" + this.config.id).slider({
        orientation: "horizontal",
        change: function(t, n) {
            var r = n.value, i = r / 100 * e.getDuration();
            e.seek(i)
        }
    });
    t.find("a.ui-slider-handle").attr({
        role: "slider",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": "0",
        "aria-valuetext": "0 percent",
        title: "Slider Control"
    });
    var n = $("<span />").addClass("progress-bar").attr({
        id: "progress-bar-" + this.config.id,
        tabindex: "-1"
    }).addClass("ui-progressbar-value ui-widget-header ui-corner-left").css({
        width: "0%",
        height: "95%"
    }), r = $("<span />").attr({
        id: "loaded-bar-" + this.config.id,
        tabindex: "-1"
    }).addClass("loaded-bar ui-progressbar-value ui-widget-header ui-corner-left").css({
        height: "95%",
        width: "0%"
    });
    return t.append(n, r)
}, window.NOMENSA.player.MediaplayerDecorator.prototype.setSliderTimeout = function() {
    var e = this;
    e.sliderInterval == undefined && (e.sliderInterval = setInterval(function() {
        e.updateSlider()
    }, e.config.sliderTimeout))
}, window.NOMENSA.player.MediaplayerDecorator.prototype.clearSliderTimeout = function() {
    var e = this;
    e.sliderInterval != undefined && (e.sliderInterval = clearInterval(e.sliderInterval))
}, window.NOMENSA.player.MediaplayerDecorator.prototype.updateSlider = function() {
    var e = typeof this.duration != "undefined" ? this.duration: this.getDuration(), t = typeof this.duration_found == "boolean" ? this.duration_found: !1, n = this.getCurrentTime(), r = 0;
    e > 0 ? (r = n / e * 100, r = parseInt(r, 10)) : e = 0, t || ($("#duration-" + this.config.id).html(this.formatTime(parseInt(e, 10))), this.duration_found=!0), $("#slider-" + this.config.id).find("a.ui-slider-handle").attr({
        "aria-valuenow": r,
        "aria-valuetext": r.toString() + " percent"
    }).css("left", r.toString() + "%"), $("#progress-bar-" + this.config.id).attr({
        "aria-valuenow": r,
        "aria-valuetext": r.toString() + " percent"
    }).css("width", r.toString() + "%"), this.updateLoaderBar(), this.updateTime(n)
}, window.NOMENSA.player.MediaplayerDecorator.prototype.updateLoaderBar = function() {
    var e = this.getBytesLoaded() / this.getBytesTotal() * 100;
    e = parseInt(e, 10), isFinite(e) || (e = 0), $("#loaded-bar-" + this.config.id).attr({
        "aria-valuetext": e.toString() + " percent",
        "aria-valuenow": e
    }).css("width", e.toString() + "%")
}, window.NOMENSA.player.MediaplayerDecorator.prototype.formatTime = function(e) {
    var t = 0, n = 0, r = 0;
    e >= 60 ? (n = parseInt(e / 60, 10), r = e - n * 60, n >= 60 && (t = parseInt(n / 60, 10), n -= parseInt(t * 60, 10))) : r = e;
    var i = [t, n, r];
    for (var s = 0; s < i.length; s += 1)
        i[s] = i[s] < 10 ? "0" + i[s].toString() : i[s].toString();
    return i.join(":")
}, window.NOMENSA.player.MediaplayerDecorator.prototype.updateTime = function(e) {
    var t = this.formatTime(parseInt(e, 10));
    this.$html.find("#current-" + this.config.id).html(t)
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getControls = function() {
    var e = $("<span />").addClass("ui-corner-bottom").addClass("control-bar"), t = $("<a />").attr("href", "http://www.nomensa.com?ref=logo").html("Accessible Media Player by Nomensa").addClass("logo");
    e.append(t);
    var n = this.getFuncControls(), r = this.getVolControls(), i = this.getSliderBar(), s = [n, r, i];
    for (var o = 0; o < s.length; o += 1)
        e[0].appendChild(s[o][0]);
    return e
}, window.NOMENSA.player.MediaplayerDecorator.prototype.updateVolume = function(e) {
    $("#vol-" + this.config.id).text(e.toString() + "%");
    var t = this.$html.find("button.mute");
    e == 0 ? t.addClass("muted") : t.hasClass("muted") && t.removeClass("muted")
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getCaptions = function() {
    var e = this;
    if (e.config.captions) {
        var t = [];
        $.ajax({
            url: e.config.captions,
            success: function(t) {
                $(t).find("p").length > 0 && (e.captions = $(t).find("p"))
            }
        })
    }
}, window.NOMENSA.player.MediaplayerDecorator.prototype.toggleCaptions = function() {
    var e = this, t = this.$html.find(".captions");
    t.hasClass("captions-off") ? (t.removeClass("captions-off").addClass("captions-on"), e.getPreviousCaption(), e.setCaptionTimeout(), e.config.captionsOn=!0) : (t.removeClass("captions-on").addClass("captions-off"), e.clearCaptionTimeout(), e.$html.find(".caption").remove(), e.config.captionsOn=!1)
}, window.NOMENSA.player.MediaplayerDecorator.prototype.syncCaptions = function() {
    var e;
    if (this.captions) {
        var t = this.getCurrentTime();
        t = this.formatTime(parseInt(t, 10)), e = this.captions.filter('[begin="' + t + '"]'), e.length == 1 && this.insertCaption(e)
    }
}, window.NOMENSA.player
.MediaplayerDecorator.prototype.insertCaption = function(e) {
    if (this.$html.find(".caption").length == 1)
        this.$html.find(".caption").text(e.text());
    else {
        var t = $("<div>").text(e.text());
        t[0].className = "caption", this.$html.find(".video").prepend(t)
    }
}, window.NOMENSA.player.MediaplayerDecorator.prototype.getPreviousCaption = function(e) {
    var t;
    e == undefined && (e = this.getCurrentTime());
    var n = this.formatTime(parseInt(e, 10));
    if (this.captions) {
        t = this.captions.filter('[begin="' + n + '"]');
        while (t.length != 1 && e > 0)
            e--, n = this.formatTime(parseInt(e, 10)), t = this.captions.filter('[begin="' + n + '"]');
        t.length == 1 && this.insertCaption(t)
    }
}, window.NOMENSA.player.MediaplayerDecorator.prototype.destroyPlayerInstance = function() {
    return !1
}, window.NOMENSA.player.MediaplayerDecorator.prototype.destroy = function() {
    this.clearSliderTimeout(), this.clearCaptionTimeout(), this.destroyPlayerInstance(), this.$html.remove()
}, window.NOMENSA.player.MediaplayerDecorator.prototype.setCaptionTimeout = function() {
    var e = this;
    e.captionInterval == undefined && (e.captionInterval = setInterval(function() {
        e.syncCaptions()
    }, 500))
}, window.NOMENSA.player.MediaplayerDecorator.prototype.clearCaptionTimeout = function() {
    this.captionInterval != undefined && (this.captionInterval = clearInterval(this.captionInterval))
}, window.NOMENSA = window.NOMENSA || {}, window.NOMENSA.player = window.NOMENSA.player || {}, jQuery(function(e) {
    e(window).resize(function() {
        e(".player-container").each(function() {
            e(this).width() > 580 ? e(this).addClass("player-wide") : e(this).removeClass("player-wide")
        })
    })
}), typeof window.postMessage == "undefined" && (window.NOMENSA.player.stateHandlers = {}), window.NOMENSA.player.PlayerManager = function() {
    var e = {};
    this.getPlayer = function(t) {
        return e[t] != undefined ? e[t] : null
    }, this.addPlayer = function(t) {
        return e[t.config.id] = t, !0
    }, this.removePlayer = function(t) {
        e[t] != undefined && (e[t].destroy(), delete e[t])
    }, this.map = function(t) {
        var n;
        for (n in e)
            t(e[n])
    }
}, window.NOMENSA.player.PlayerDaemon = new window.NOMENSA.player.PlayerManager;
var html5_methods = {
    play: function() {
        this.player.play(), this.setSliderTimeout(), this.config.captionsOn && this.captions && this.setCaptionTimeout()
    },
    pause: function() {
        this.player.pause(), this.clearSliderTimeout(), this.config.captionsOn && this.captions && this.clearCaptionTimeout()
    },
    ffwd: function() {
        var e = this.getCurrentTime() + this.config.playerSkip;
        this.seek(e)
    },
    rewd: function() {
        var e = this.getCurrentTime() - this.config.playerSkip;
        e < 0 && (e = 0), this.seek(e)
    },
    mute: function() {
        var e = this.$html.find("button.mute");
        this.player.muted ? (this.player.muted=!1, e.hasClass("muted") && e.removeClass("muted")) : (this.player.muted=!0, e.addClass("muted"))
    },
    volup: function() {
        var e = this.player.volume * 100;
        e < 100 - this.config.volumeStep ? e += this.config.volumeStep : e = 100, this.player.volume = e / 100, this.updateVolume(Math.round(e))
    },
    voldwn: function() {
        var e = this.player.volume * 100;
        e > this.config.volumeStep ? e -= this.config.volumeStep : e = 0, this.player.volume = e / 100, this.updateVolume(Math.round(e))
    },
    getDuration: function() {
        return this.player.duration
    },
    getCurrentTime: function() {
        return this.player.currentTime
    },
    getBytesLoaded: function() {
        return this.player.buffered.end(0)
    },
    getBytesTotal: function() {
        return this.player.duration
    },
    seek: function(e) {
        this.player.currentTime = e
    },
    cue: function() {
        return 
    }
};
(function(e) {
    e.fn.player = function(t, n) {
        function c(t) {
            this.config = i, e.extend(!0, this, l, n), this.is_html5=!1;
            var r = u(this);
            r && s(r.mimetype, r.container) && this.config.useHtml5 ? (this.is_html5=!0, this.$html = this.assembleHTML5(r.container, r.mimetype), e.extend(this, html5_methods)) : this.$html = this.assembleHTML(), this.config.captions && this.getCaptions()
        }
        var r = {
            id: "media_player",
            url: window.location.protocol + "//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=",
            media: "8LiQ-bLJaM4",
            repeat: !1,
            captions: null,
            captionsOn: !0,
            flashWidth: "100%",
            flashHeight: "300px",
            playerStyles: {
                height: "100%",
                width: "100%"
            },
            sliderTimeout: 350,
            flashContainer: "span",
            playerContainer: "span",
            image: "",
            playerSkip: 10,
            volumeStep: 10,
            buttons: {
                forward: !0,
                rewind: !0,
                toggle: !0
            },
            logoURL: "http://www.nomensa.com?ref=logo",
            useHtml5: !0,
            swfCallback: null
        }, i = e.extend(!0, {}, r, t), s = function(e, t) {
            var n = document.createElement(t);
            if (n.canPlayType != undefined) {
                var r = n.canPlayType(e);
                if (r.toLowerCase() == "maybe" || r.toLowerCase() == "probably")
                    return !0
            }
            return !1
        }, o = function(e) {
            var t = "", n = "video";
            switch (e) {
            case"mp4":
                t = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
                break;
            case"m4v":
                t = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
                break;
            case"ogg":
                t = 'video/ogg; codecs="theora, vorbis"';
                break;
            case"ogv":
                t = 'video/ogg; codecs="theora, vorbis"';
                break;
            case"webm":
                t = 'video/webm; codecs="vp8, vorbis"';
                break;
            case"mp3":
                t = "audio/mpeg", n = "audio"
            }
            return {
                mimetype: t,
                container: n
            }
        }, u = function(e) {
            var t = e.config.media, n = t.lastIndexOf(".");
            if (n!=-1) {
                var r = t.substring(n + 1), i = o(r);
                return i
            }
            return null
        }, f = function() {
            return e.browser.mozilla ? parseInt(e.browser.version, 10) >= 2?!0 : !1 : !1
        }, l = {
            generatePlayerContainer: function() {
                var t = e("<" + this.config.playerContainer + " />").css(this.config.playerStyles).addClass("player-container");
                return e.browser.msie && t.addClass("player-container-ie player-container-ie-" + e.browser.version.substring(0, 1)), t
            },
            getFlashVars: function() {
                var e = {
                    controlbar: "none",
                    file: this.config.media
                };
                return this.config.image != "" && (e.image = this.config.image), this.config.repeat && (e.repeat = this.config.repeat), e
            },
            getFlashParams: function() {
                return {
                    allowScriptAccess: "always",
                    wmode: "transparent"
                }
            },
            getURL: function() {
                return [this.config.url, this.config.id].join("")
            },
            generateFlashPlayer: function(t) {
                var n = this, r = this.getFlashVars(), i = this.getFlashParams(), s = {
                    id: this.config.id,
                    name: this.config.id
                }, o = e("<" + this.config.flashContainer + " />").attr("id", "player-" + this.config.id).addClass("flashReplace").html('This content requires Macromedia Flash Player. You can <a href="http://get.adobe.com/flashplayer/">install or upgrade the Adobe Flash Player here</a>.'), u = e("<span />").addClass("video"), l = this.getURL();
                return setTimeout(function() {
                    swfobject.embedSWF(l, o.attr("id"), n.config.flashWidth, n.config.flashHeight, "9.0.115", null, r, i, s, n.config.swfCallback), f() && n.$html.find("object").attr("tabindex", "-1")
                }, 0), t.append(u.append(o)), t
            },
            generateHTML5Player: function(t, n, r) {
                var i = e("<span />");
                i[0].className = "video";
                var s = e("<" + n + " />").attr({
                    id: this.config.id,
                    src: this.config.media,
                    type: r
                }).css({
                    width: "100%",
                    height: "50%"
                });
                return e.trim(this.config.image) != "" && s.attr({
                    poster: e.trim(this.config.image)
                }), t.append(i.append(s))
            },
            createButton: function(t, n) {
                var r = 0, i = [t, this.config.id].join("-"), s = e("<button />").append(n).addClass(t).attr({
                    title: t,
                    id: i
                }).addClass("ui-corner-all ui-state-default").hover(function() {
                    e(this).addClass("ui-state-hover")
                }, function() {
                    e(this).removeClass("ui-state-hover")
                }).focus(function() {
                    e(this).addClass("ui-state-focus")
                }).blur(function() {
                    e(this).removeClass("ui-state-focus")
                }).click(function(e) {
                    e.preventDefault()
                });
                return s
            },
            getFuncControls: function() {
                var t = this, n = e("<div>");
                n[0].className = "player-controls";
                var r = [];
                if (t.config.buttons.toggle) {
                    var i = t.createButton("play", "Play").attr({
                        "aria-live": "assertive"
                    }).click(function() {
                        e(this).hasClass("play") ? (e(this).removeClass("play").addClass("pause").attr({
                            title: "Pause",
                            id: "pause-" + t.config.id
                        }).text("Pause"), t.play()) : (e(this).removeClass("pause").addClass("play").attr({
                            title: "Play",
                            id: "play-" + t.config.id
                        }).text("Play"), t.pause())
                    });
                    r.push(i)
                } else {
                    var s = t.createButton("play", "Play").click(function() {
                        t.play()
                    }), o = t.createButton("pause", "Pause").click(function() {
                        t.pause()
                    });
                    r.push(s), r.push(o)
                }
                if (t.config.buttons.rewind) {
                    var u = t.createButton("rewind", "Rewind").click(function() {
                        t.rewd()
                    });
                    r.push(u)
                }
                if (t.config.buttons.forward) {
                    var f = t.createButton("forward", "Forward").click(function() {
                        t.ffwd()
                    });
                    r.push(f)
                }
                if (t.config.captions) {
                    var l = t.createButton("captions", "Captions").click(function() {
                        t.toggleCaptions()
                    }), c = t.config.captionsOn == 1 ? "captions-on": "captions-off";
                    l.addClass(c), r.push(l)
                }
                var h;
                for (h = 0; h < r.length; h += 1)
                    n[0].appendChild(r[h][0]);
                return n
            },
            getVolControls: function() {
                var t = this, n = e("<div>").addClass("volume-controls"), r = t.createButton("mute", "Mute").click(function() {
                    t.mute()
                }), i = t.createButton("vol-up", '+<span class="ui-helper-hidden-accessible"> Volume Up</span>').click(function() {
                    t.volup()
                }), s = t.createButton("vol-down", '-<span class="ui-helper-hidden-accessible"> Volume Down</span>').click(function() {
                    t.voldwn()
                }), o = e("<span />").attr({
                    id: "vol-" + t.config.id,
                    "class": "vol-display"
                }).text("100%"), u = [r, s, i, o], f;
                for (f = 0; f < u.length; f += 1)
                    n[0].appendChild(u[f][0]);
                return n
            },
            getSliderBar: function() {
                var t = e("<span />").addClass("ui-helper-hidden-accessible").html("<p>The timeline slider below uses WAI ARIA. Please use the documentation for your screen reader to find out more.</p>"), n = e("<span />").addClass("current-time").attr({
                    id: "current-" + this.config.id
                }).text("00:00:00"), r = this.getSlider(), i = e("<span />").addClass("duration-time").attr({
                    id: "duration-" + this.config.id
                }).text("00:00:00"), s = e("<div />").addClass("timer-bar").append(t), o = [n, r, i], u;
                for (u = 0; u < o.length; u += 1)
                    s[0].appendChild(o[u][0]);
                return s
            },
            getSlider: function() {
                var t = this, n = e("<span />").attr("id", "slider-" + this.config.id).slider({
                    orientation: "horizontal",
                    change: function(e, n) {
                        var r = n.value, i = r / 100 * t.getDuration();
                        t.seek(i)
                    }
                });
                n.find("a.ui-slider-handle").attr({
                    role: "slider",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    "aria-valuenow": "0",
                    "aria-valuetext": "0 percent",
                    title: "Slider Control"
                });
                var r = e("<span />").addClass("progress-bar").attr({
                    id: "progress-bar-" + this.config.id,
                    tabindex: "-1"
                }).addClass("ui-progressbar-value ui-widget-header ui-corner-left").css({
                    width: "0%",
                    height: "95%"
                }), i = e("<span />").attr({
                    id: "loaded-bar-" + this.config.id,
                    tabindex: "-1"
                }).addClass("loaded-bar ui-progressbar-value ui-widget-header ui-corner-left").css({
                    height: "95%",
                    width: "0%"
                });
                return n.append(r, i)
            },
            setSliderTimeout: function() {
                var e = this;
                e.sliderInterval == undefined && (e.sliderInterval = setInterval(function() {
                    e.updateSlider()
                }, e.config.sliderTimeout))
            },
            clearSliderTimeout: function() {
                var e = this;
                e.sliderInterval != undefined && (e.sliderInterval = clearInterval(e.sliderInterval))
            },
            updateSlider: function() {
                var t = typeof this.duration != "undefined" ? this.duration: this.getDuration(), n = typeof this.duration_found == "boolean" ? this.duration_found: !1, r = this.getCurrentTime(), i = 0;
                t > 0 ? (i = r / t * 100, i = parseInt(i, 10)) : t = 0, n || (e("#duration-" + this.config.id).html(this.formatTime(parseInt(t, 10))), this.duration_found=!0), e("#slider-" + this.config.id).find("a.ui-slider-handle").attr({
                    "aria-valuenow": i,
                    "aria-valuetext": i.toString() + " percent"
                }).css("left", i.toString() + "%"), e("#progress-bar-" + this.config.id).attr({
                    "aria-valuenow": i,
                    "aria-valuetext": i.toString() + " percent"
                }).css("width", i.toString() + "%"), this.updateLoaderBar(), this.updateTime(r)
            },
            updateLoaderBar: function() {
                var t = this.getBytesLoaded() / this.getBytesTotal() * 100;
                t = parseInt(t, 10), isFinite(t) || (t = 0), e("#loaded-bar-" + this.config.id).attr({
                    "aria-valuetext": t.toString() + " percent",
                    "aria-valuenow": t
                }).css("width", t.toString() + "%")
            },
            formatTime: function(e) {
                var t = 0, n = 0, r = 0;
                e >= 60 ? (n = parseInt(e / 60, 10), r = e - n * 60, n >= 60 && (t = parseInt(n / 60, 10), n -= parseInt(t * 60, 10))) : r = e;
                var i = [t, n, r], s;
                for (s = 0; s < i.length; s += 1)
                    i[s] = i[s] < 10 ? "0" + i[s].toString() : i[s].toString();
                return i.join(":")
            },
            updateTime: function(e) {
                var t = this.formatTime(parseInt(e, 10));
                this.$html.find("#current-" + this.config.id).html(t)
            },
            getControls: function() {
                var t = e("<span />").addClass("ui-corner-bottom").addClass("control-bar"), n = e("<a />").attr("href", "http://www.nomensa.com?ref=logo").html("Accessible Media Player by Nomensa").addClass("logo");
                t.append(n);
                var r = this.getFuncControls(), i = this.getVolControls(), s = this.getSliderBar(), o = [r, i, s], u;
                for (u = 0; u < o.length; u += 1)
                    t[0].appendChild(o[u][0]);
                return t
            },
            assembleHTML: function() {
                var e = this.generatePlayerContainer(), t = this.generateFlashPlayer(e), n = t.append(this.getControls());
                return n
            },
            assembleHTML5: function(e, t) {
                var n = this.generatePlayerContainer(), r = this.generateHTML5Player(n, e, t), i = r.append(this.getControls());
                return i
            },
            updateVolume: function(t) {
                e("#vol-" + this.config.id).text(t.toString() + "%");
                var n = this.$html.find("button.mute");
                t == 0 ? n.addClass("muted") : n.hasClass("muted") && n.removeClass("muted")
            },
            getCaptions: function() {
                var t = this;
                if (t.config.captions) {
                    var n = [];
                    e.ajax({
                        url: t.config.captions,
                        success: function(n) {
                            e(n).find("p").length > 0 && (t.captions = e(n).find("p"))
                        }
                    })
                }
            },
            syncCaptions: function() {
                var e;
                if (this.captions) {
                    var t = this.getCurrentTime();
                    t = this.formatTime(parseInt(t, 10)), e = this.captions.filter('[begin="' + t + '"]'), e.length == 1 && this.insertCaption(e)
                }
            },
            insertCaption: function(t) {
                if (this.$html.find(".caption").length == 1)
                    this.$html.find(".caption").text(t.text());
                else {
                    var n = e("<div>").text(t.text());
                    n[0].className = "caption", this.$html.find(".video").prepend(n)
                }
            },
            getPreviousCaption: function(e) {
                var t;
                e == undefined && (e = this.getCurrentTime());
                var n = this.formatTime(parseInt(e, 10));
                if (this.captions) {
                    t = this.captions.filter('[begin="' + n + '"]');
                    while (t.length != 1 && e > 0)
                        e--, n = this.formatTime(parseInt(e, 10)), t = this.captions.filter('[begin="' + n + '"]');
                    t.length == 1 && this.insertCaption(t)
                }
            },
            destroyPlayerInstance: function() {
                return !1
            },
            destroy: function() {
                this.clearSliderTimeout(), this.clearCaptionTimeout(), this.destroyPlayerInstance(), this.$html.remove()
            },
            setCaptionTimeout: function() {
                var e = this;
                e.captionInterval == undefined && (e.captionInterval = setInterval(function() {
                    e.syncCaptions()
                }, 500))
            },
            clearCaptionTimeout: function() {
                this.captionInterval != undefined && (this.captionInterval = clearInterval(this.captionInterval))
            },
            play: function() {
                this.player.playVideo(), this.setSliderTimeout(), this.config.captionsOn && this.captions && this.setCaptionTimeout()
            },
            pause: function() {
                this.player.pauseVideo(), this.clearSliderTimeout(), this.config.captionsOn && this.captions && this.clearCaptionTimeout()
            },
            ffwd: function() {
                var e = this.getCurrentTime() + this.config.playerSkip;
                this.seek(e)
            },
            rewd: function() {
                var e = this.getCurrentTime() - this.config.playerSkip;
                e < 0 && (e = 0), this.seek(e)
            },
            mute: function() {
                var e = this.$html.find("button.mute");
                this.player.isMuted() ? (this.player.unMute(), e.hasClass("muted") && e.removeClass("muted")) : (this.player.mute(), e.addClass("muted"))
            },
            volup: function() {
                var e = this.player.getVolume();
                e < 100 - this.config.volumeStep ? e += this.config.volumeStep : e = 100, this.player.setVolume(e), this.updateVolume(e)
            },
            voldwn: function() {
                var e = this.player.getVolume();
                e > this.config.volumeStep ? e -= this.config.volumeStep : e = 0, this.player.setVolume(e), this.updateVolume(e)
            },
            getDuration: function() {
                return this.player.getDuration()
            },
            getCurrentTime: function() {
                return this.player.getCurrentTime()
            },
            getBytesLoaded: function() {
                return this.player.getVideoBytesLoaded()
            },
            getBytesTotal: function() {
                return this.player.getVideoBytesTotal()
            },
            seek: function(e) {
                this.player.seekTo(e), this.config.captionsOn && this.captions && (this.$html.find(".caption").remove(), this.clearCaptionTimeout(), this.setCaptionTimeout(), this.getPreviousCaption())
            },
            cue: function() {
                this.player.cueVideoById(this.config.media)
            },
            toggleCaptions: function() {
                var e = this, t = this.$html.find(".captions");
                t.hasClass("captions-off") ? (t.removeClass("captions-off").addClass("captions-on"), e.getPreviousCaption(), e.setCaptionTimeout(), e.config.captionsOn=!0) : (t.removeClass("captions-on").addClass("captions-off"), e.clearCaptionTimeout(), e.$html.find(".caption").remove(), e.config.captionsOn=!1)
            }
        };
        return this.each(function(t) {
            var n = e(this), r, s, o = function(e) {
                e.$html.width() > 580 && e.$html.addClass("player-wide"), e.is_html5 && (e.player = document.getElementById(e.config.id))
            };
            i.url.match(/^(http|https)\:\/\/www\.youtube\.com/) ? (r = new window.NOMENSA.player.YoutubePlayer(i), s = new window.NOMENSA.player.MediaplayerDecorator(r), s.onPlayerReady(function() {
                o(s), this.getPlayer().setLoop(!0)
            }), s.init(n)) : (s = new c(t), n.html(s.$html), o(s), window.NOMENSA.player.PlayerDaemon.addPlayer(s))
        })
    }
})(jQuery), function(e) {
    function t(e) {
        if (e.indexOf("youtube.com")>-1) {
            var t, n, r, i, s = {};
            i = e.split("?");
            if (i.length === 1)
                return;
            i = i[1].split("&");
            for (t = 0, n = i.length; t < n; t++)
                r = i[t].split("="), s[r[0]] = r[1];
            return s.v
        }
        if (e.indexOf("youtu.be")>-1) {
            var i = e.split("/");
            return i.pop()
        }
    }
    function n(n) {
        n.find("a[href*='youtube.com'], a[href*='youtu.be']").each(function(n) {
            var r = e(this), i = t(r.attr("href")), s = e('<span class="media-player" />'), o = r.siblings(".captions");
            typeof i != "undefined" && (r.parent().replaceWith(s), s.player({
                id: "youtube-" + n,
                media: i,
                captions: o.length > 0 ? o.attr("href"): null,
                url: document.location.protocol + "//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid="
            }))
        })
    }
    window.GOVUK = window.GOVUK || {}, GOVUK.enhanceYoutubeVideoLinks = n, e(function() {
        GOVUK.enhanceYoutubeVideoLinks(e(".govuk-govspeak"))
    })
}(jQuery), function(e) {
    var t = e.suchi = e.suchi || {};
    t.laggards = {
        IE6: /^Mozilla\/4\.0 \(compatible; MSIE 6\.0; Windows NT \d\.\d(.*)\)$/g,
        IE7: /^Mozilla\/4\.0 \(compatible; MSIE 7\.0; Windows NT \d\.\d(.*)\)$/g,
        IE8: /^Mozilla\/4\.0 \(compatible; MSIE 8\.0; Windows NT \d\.\d;(.*)? Trident\/4\.0(;)?(.*)\)$/g,
        IE9: /^Mozilla\/5\.0 \(compatible; MSIE 9\.0; Windows NT \d\.\d(.*); Trident\/5\.0(.*)\)$/g,
        FF36: /^Mozilla\/5\.0 \((Windows|Macintosh); U;(.*)rv\:1\.9\.2.(\d{1,2})\)( Gecko\/(\d{8}))? Firefox\/3\.6(\.\d{1,2})?( \(.+\))?$/g,
        CR_recent: /^Mozilla\/5\.0 \((Windows NT|Macintosh|X11|(Linux; Android \d\.\d\.\d))(;)?( .*)\) AppleWebKit\/53\d\.\d{1,2} \(KHTML(,)? like Gecko\) Chrome\/(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33)\.0\.\d{3,4}\.\d{1,3} (Mobile )?Safari\/53\d\.\d{1,2}$/g,
        FF_recent: /^Mozilla\/5\.0 \((Windows NT \d\.\d|Macintosh|Android|X11); (.*)rv\:(9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28)\.0(\.\d{1,2})?\) Gecko\/(\d{8}|(\d{2}\.0)) Firefox\/(9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28)\.0(\.\d{1,2})?$/g,
        SAF51: /^Mozilla\/5\.0 \((Windows NT \d\.\d|Macintosh)(.*)\) AppleWebKit\/534\.\d{2}(\.\d{1,2})? \(KHTML, like Gecko\) Version\/5\.1\.\d Safari\/534\.\d{2}(\.\d{1,2})?$/g,
        SAF60: /^Mozilla\/5\.0 \((iPhone|iPad|Macintosh);(.*)\) AppleWebKit\/536\.\d{2}(\.\d{1,2})? \(KHTML like Gecko\) Version\/6\.0(\.\d)? ((Mobile\/\d{2}\w\d{3} )?)Safari\/\d{2,4}\.\d{2}(\.\d{1,2})?$/g,
        ANDROID_WEBKIT: /^Mozilla\/5\.0 \(Linux;( U;)? Android 4\.(0|1|2|3|4)(\.\d)?; (.*)?\) \w{2}\-\w{2}; (.*)\) AppleWebKit\/5\d{2}.\d{2} \(KHTML like Gecko\) Version\/4\.\d Mobile Safari\/\d{3}\.\d{2}$/g
    }, t.isOld = function(e) {
        if (typeof e != "string")
            return !1;
        for (var t in this.laggards)
            if (e.match(this.laggards[t]))
                return !0;
        return !1
    }
}(this), function() {
    "use strict";
    function t(t) {
        this.$el = e(t.el), this._loadOption(t, "name"), this._loadOption(t, "customVarIndex"), this._loadOption(t, "cohorts"), this._loadOption(t, "runImmediately", !0), this._loadOption(t, "defaultWeight", 1), this.runImmediately && this.run()
    }
    window.GOVUK = window.GOVUK || {};
    var e = window.$;
    t.prototype._loadOption = function(e, t, n) {
        e[t] !== undefined && (this[t] = e[t]);
        if (this[t] === undefined) {
            if (n === undefined)
                throw new Error(t + " option is required for a multivariate test");
            this[t] = n
        }
    }, t.prototype.run = function() {
        var e = this.getCohort();
        e && (this.setCustomVar(e), this.executeCohort(e))
    }, t.prototype.executeCohort = function(e) {
        var t = this.cohorts[e];
        t.callback && (typeof t.callback == "string" ? this[t.callback]() : t.callback()), t.html && (this.$el.html(t.html), this.$el.show())
    }, t.prototype.getCohort = function() {
        var e = GOVUK.cookie(this.cookieName());
        if (!e ||!this.cohorts[e])
            e = this.chooseRandomCohort(), GOVUK.cookie(this.cookieName(), e, {
                days: 30
            });
        return e
    }, t.prototype.setCustomVar = function(e) {
        window._gaq = window._gaq || [], window._gaq.push(["_setCustomVar", this.customVarIndex, this.cookieName(), e, 2]), window._gaq.push(["_trackEvent", this.cookieName(), "run", "-", 0, !0])
    }, t.prototype.weightedCohortNames = function() {
        var t = [], n = this.defaultWeight;
        return e.each(this.cohorts, function(e, r) {
            var i, s;
            typeof r.weight == "undefined" ? i = n : i = r.weight;
            for (s = 0; s < i; s++)
                t.push(e)
        }), t
    }, t.prototype.chooseRandomCohort = function() {
        var e = this.weightedCohortNames();
        return e[Math.floor(Math.random() * e.length)]
    }, t.prototype.cookieName = function() {
        return "multivariatetest_cohort_" + this.name
    }, window.GOVUK.MultivariateTest = t
}(), function() {
    "use strict";
    window.GOVUK = window.GOVUK || {};
    var e = function(e, t) {
        this.$el = $(e), this.$extraLinks = this.$el.find("li:not(" + t + ")"), this.$extraLinks.length > 1 && (this.addToggleLink(), this.hideExtraLinks())
    };
    e.prototype = {
        toggleText: function() {
            return this.$extraLinks.length > 1 ? "+" + this.$extraLinks.length + " others" : "+" + this.$extraLinks.length + " other"
        },
        addToggleLink: function() {
            this.$toggleLink = $('<a href="#">' + this.toggleText() + "</a>"), this.$toggleLink.click($.proxy(this.toggleLinks, this)), this.$toggleLink.insertAfter(this.$el)
        },
        toggleLinks: function(e) {
            e.preventDefault(), this.$toggleLink.remove(), this.showExtraLinks()
        },
        hideExtraLinks: function() {
            this.$extraLinks.addClass("visuallyhidden"), $(window).trigger("govuk.pageSizeChanged")
        },
        showExtraLinks: function() {
            this.$extraLinks.removeClass("visuallyhidden"), $(window).trigger("govuk.pageSizeChanged")
        }
    }, GOVUK.PrimaryList = e, GOVUK.primaryLinks = {
        init: function(e) {
            $(e).parent().each(function(t, n) {
                new GOVUK.PrimaryList(n, e)
            })
        }
    }
}(), function() {
    "use strict";
    var e = this, t = e.jQuery;
    typeof e.GOVUK == "undefined" && (e.GOVUK = {});
    var n = {
        _hasScrolled: !1,
        _scrollTimeout: !1,
        init: function() {
            var r = t(".js-stick-at-top-when-scrolling");
            r.length > 0 && (n.$els = r, n._scrollTimeout===!1 && (t(e).scroll(n.onScroll), n._scrollTimeout = e.setInterval(n.checkScroll, 50)), t(e).resize(n.onResize)), e.GOVUK.stopScrollingAtFooter && r.each(function(n, r) {
                var i = t(r).find("img");
                if (i.length > 0) {
                    var s = new Image;
                    s.onload = function() {
                        e.GOVUK.stopScrollingAtFooter.addEl(t(r), t(r).outerHeight())
                    }, s.src = i.attr("src")
                } else 
                    e.GOVUK.stopScrollingAtFooter.addEl(t(r), t(r).outerHeight())
            })
        },
        onScroll: function() {
            n._hasScrolled=!0
        },
        checkScroll: function() {
            if (n._hasScrolled===!0) {
                n._hasScrolled=!1;
                var r = t(e).scrollTop();
                n.$els.each(function(i, s) {
                    var o = t(s), u = o.data("scrolled-from");
                    u && r < u ? n.release(o) : t(e).width() > 768 && r >= o.offset().top && n.stick(o)
                })
            }
        },
        stick: function(e) {
            if (!e.hasClass("content-fixed")) {
                e.data("scrolled-from", e.offset().top);
                var t = Math.max(e.height(), 1);
                e.before('<div class="shim" style="width: ' + e.width() + "px; height: " + t + 'px">&nbsp;</div>'), e.css("width", e.width() + "px").addClass("content-fixed")
            }
        },
        release: function(e) {
            e.hasClass("content-fixed") && (e.data("scrolled-from", !1), e.removeClass("content-fixed").css("width", ""), e.siblings(".shim").remove())
        }
    };
    e.GOVUK.stickAtTopWhenScrolling = n
}.call(this), function() {
    "use strict";
    var e = this, t = e.jQuery;
    typeof e.GOVUK == "undefined" && (e.GOVUK = {});
    var n = {
        _pollingId: null,
        _isPolling: !1,
        _hasScrollEvt: !1,
        _els: [],
        addEl: function(r, i) {
            var s;
            if (!r.length)
                return;
            s = parseInt(r.css("top"), 10), s = isNaN(s) ? 0 : s, n.updateFooterTop(), t(e).on("govuk.pageSizeChanged", n.updateFooterTop);
            var o = t("<div></div>");
            o.insertBefore(r);
            var u = o.offset().top - o.position().top;
            o.remove();
            var a = {
                $fixedEl: r,
                height: i + s,
                fixedTop: i + u,
                state: "fixed"
            };
            n._els.push(a), n.initTimeout()
        },
        updateFooterTop: function() {
            var e = t(".js-footer:eq(0)");
            if (e.length === 0)
                return 0;
            n.footerTop = e.offset().top - 10
        },
        initTimeout: function() {
            n._hasScrollEvt===!1 && (t(window).scroll(n.onScroll), n._hasScrollEvt=!0)
        },
        onScroll: function() {
            n._isPolling===!1 && n.startPolling()
        },
        startPolling: function() {
            return window.requestAnimationFrame ? function() {
                var e = function() {
                    n.checkScroll(), n._isPolling===!0 && n.startPolling()
                };
                n._pollingId = window.requestAnimationFrame(e), n._isPolling=!0
            } : function() {
                n._pollingId = window.setInterval(n.checkScroll, 16), n._isPolling=!0
            }
        }(),
        stopPolling: function() {
            return window.requestAnimationFrame ? function() {
                window.cancelAnimationFrame(n._pollingId), n._isPolling=!1
            } : function() {
                window.clearInterval(n._pollingId), n._isPolling=!1
            }
        }(),
        checkScroll: function() {
            var e = t(window).scrollTop();
            if (e < n.cachedScrollTop + 2 && e > n.cachedScrollTop - 2) {
                n.stopPolling();
                return 
            }
            n.cachedScrollTop = e, t.each(n._els, function(t, r) {
                var i = e + r.height;
                i > n.footerTop ? n.stick(r) : n.unstick(r)
            })
        },
        stick: function(e) {
            e.state === "fixed" && e.$fixedEl.css("position") === "fixed" && (e.$fixedEl.css({
                position: "absolute",
                top: n.footerTop - e.fixedTop
            }), e.state = "absolute")
        },
        unstick: function(e) {
            e.state === "absolute" && (e.$fixedEl.css({
                position: "",
                top: ""
            }), e.state = "fixed")
        }
    };
    e.GOVUK.stopScrollingAtFooter = n, t(e).load(function() {
        t(e).trigger("govuk.pageSizeChanged")
    })
}.call(this);
var AlphaGeo = {
    location: !1,
    full_location: !1,
    initialize: function() {
        var e = AlphaGeo.read_and_parse_json_cookie("govukgeo");
        e.current_location && (AlphaGeo.location = {
            lat: e.current_location.lat,
            lon: e.current_location.lon
        }, AlphaGeo.full_location = e), AlphaGeo.location && (AlphaGeo.full_location ? $(AlphaGeo).trigger("location-completed", AlphaGeo.full_location) : AlphaGeo.lookup_full_location(function() {
            $(AlphaGeo).trigger("location-completed", AlphaGeo.full_location)
        })), $(AlphaGeo).bind("location-completed", function(e, t) {
            AlphaGeo.save_location_to_cookie(t)
        })
    },
    read_and_parse_json_cookie: function(e) {
        var t = GOVUK.cookie(e);
        if (t) {
            var n = $.base64Decode(t), r = jQuery.parseJSON(n);
            return r
        }
        return !1
    },
    lookup_full_location: function(e) {
        $.ajax({
            url: "/locator.json",
            dataType: "json",
            data: AlphaGeo.location,
            type: "POST",
            success: function(t) {
                if (t.location_error || t.current_location.locality===!1)
                    return $(AlphaGeo).trigger("location-failed"), !1;
                AlphaGeo.full_location = t, e()
            }
        })
    },
    locate: function(e) {
        AlphaGeo.location = {
            postcode: e
        }, AlphaGeo.lookup_full_location(function() {
            $(AlphaGeo).trigger("location-completed", AlphaGeo.full_location)
        })
    },
    notify: function() {
        AlphaGeo.full_location && $(AlphaGeo).trigger("location-completed", AlphaGeo.full_location)
    },
    geolocate: function() {
        navigator.geolocation ? ($(AlphaGeo).trigger("geolocation-started"), AlphaGeo.browser_geolocate(), $(AlphaGeo).bind("geolocation-completed", function(e, t) {
            AlphaGeo.location = t, AlphaGeo.lookup_full_location(function() {
                $(AlphaGeo).trigger("location-completed", AlphaGeo.full_location)
            })
        })) : $(AlphaGeo).trigger("geolocation-failed")
    },
    browser_geolocate: function() {
        navigator.geolocation.getCurrentPosition(function(e) {
            coordinates = {
                lat: e.coords.latitude,
                lon: e.coords.longitude
            }, $(AlphaGeo).trigger("geolocation-completed", coordinates)
        }, function() {
            $(AlphaGeo).trigger("geolocation-failed")
        })
    },
    save_location_to_cookie: function() {
        var e = $.base64Encode(JSON.stringify(AlphaGeo.full_location));
        GOVUK.cookie("govukgeo", e, {
            days: 120
        })
    },
    remove: function() {
        GOVUK.cookie("govukgeo", null), AlphaGeo.location=!1, AlphaGeo.full_location=!1, $(AlphaGeo).trigger("location-removed")
    }
}, AlphaGeoForm = function(e) {
    function o() {
        var e = navigator.userAgent, t = e.match(/Windows/) !== null, n = e.match(/Safari/), r;
        return !t ||!n?!0 : (r = e.match(/Version\/([\d\.]+)/), r === null?!0 : (r = parseFloat(r[1]), r >= 5 && r <= 5.1?!1 : !0))
    }
    function u(e) {
        $(s).each(function(e, t) {
            t.hide().css("visibility", "hidden")
        }), e.show().css("visibility", "visible")
    }
    function a() {
        $('<p class="cookie-container"><span class="sets-cookie"><a href="/help/cookies/#locationcookies" title="This form sets a location cookie">Sets a cookie</a></span></p>').appendTo(n)
    }
    var t = $(e), n = t.find(".ask_location"), r = t.find(".finding_location"), i = t.find(".found_location"), s = [n, r, i];
    t.find(".location_error").addClass("hidden").text(""), AlphaGeo.full_location ? (i.find("strong, a span.friendly-name").text(AlphaGeo.full_location.current_location.locality), u(i)) : u(n), navigator.geolocation && o() ? ($('<p class="geolocate-me">or <a href="#">locate me automatically</a></p>').appendTo(n), a(), $(".geolocate-me a").live("click", function(e) {
        e.preventDefault(), AlphaGeo.geolocate()
    }), $(AlphaGeo).bind("geolocation-started", function() {
        t.find(".location_error").addClass("hidden").text(""), u(r)
    }), $(AlphaGeo).bind("geolocation-failed", function() {
        u(n)
    })) : a(), $("a.change-location").live("click", function(e) {
        e.preventDefault(), AlphaGeo.remove()
    }), $(AlphaGeo).bind("location-completed", function(e, r) {
        t.find(".location_error").addClass("hidden").text(""), i.find("strong, a span.friendly-name").text(r.current_location.locality), n.find("input[type=submit]").removeAttr("disabled"), u(i)
    }), $(AlphaGeo).bind("location-failed", function(e, r) {
        t.find(".location_error").text("Please enter a valid postcode.").removeClass("hidden"), n.find("input[type=submit]").removeAttr("disabled"), u(n)
    }), $(AlphaGeo).bind("location-removed", function(e, t) {
        i.find("strong, a span.friendly-name").text(""), n.find("input.postcode").val(""), u(n)
    }), t.live("submit", function(e) {
        e.preventDefault(), t.find("input[type=submit]").attr("disabled", "disabled"), AlphaGeo.locate(t.find("input.postcode").val())
    })
};
$(document).ready(function() {
    AlphaGeo.initialize()
}), jQuery.extend({
    historyCurrentHash: undefined,
    historyCallback: undefined,
    historyIframeSrc: undefined,
    historyNeedIframe: jQuery.browser.msie && (jQuery.browser.version < 8 || document.documentMode < 8),
    historyInit: function(e, t) {
        jQuery.historyCallback = e, t && (jQuery.historyIframeSrc = t);
        var n = location.hash.replace(/\?.*$/, "");
        jQuery.historyCurrentHash = n;
        if (jQuery.historyNeedIframe) {
            jQuery.historyCurrentHash == "" && (jQuery.historyCurrentHash = "#"), jQuery("body").prepend('<iframe id="jQuery_history" style="display: none;" src="javascript:false;"></iframe>');
            var r = jQuery("#jQuery_history")[0], i = r.contentWindow.document;
            i.open(), i.close(), i.location.hash = n
        } else 
            jQuery.browser.safari && (jQuery.historyBackStack = [], jQuery.historyBackStack.length = history.length, jQuery.historyForwardStack = [], jQuery.lastHistoryLength = history.length, jQuery.isFirst=!0);
        n && jQuery.historyCallback(n.replace(/^#/, "")), setInterval(jQuery.historyCheck, 100)
    },
    historyAddHistory: function(e) {
        jQuery.historyBackStack.push(e), jQuery.historyForwardStack.length = 0, this.isFirst=!0
    },
    historyCheck: function() {
        if (jQuery.historyNeedIframe) {
            var e = jQuery("#jQuery_history")[0], t = e.contentDocument || e.contentWindow.document, n = t.location.hash.replace(/\?.*$/, "");
            n != jQuery.historyCurrentHash && (location.hash = n, jQuery.historyCurrentHash = n, jQuery.historyCallback(n.replace(/^#/, "")))
        } else if (jQuery.browser.safari) {
            jQuery.lastHistoryLength == history.length && jQuery.historyBackStack.length > jQuery.lastHistoryLength && jQuery.historyBackStack.shift();
            if (!jQuery.dontCheck) {
                var r = history.length - jQuery.historyBackStack.length;
                jQuery.lastHistoryLength = history.length;
                if (r) {
                    jQuery.isFirst=!1;
                    if (r < 0)
                        for (var i = 0; i < Math.abs(r); i++)
                            jQuery.historyForwardStack.unshift(jQuery.historyBackStack.pop());
                    else 
                        for (var i = 0; i < r; i++)
                            jQuery.historyBackStack.push(jQuery.historyForwardStack.shift());
                    var s = jQuery.historyBackStack[jQuery.historyBackStack.length - 1];
                    s != undefined && (jQuery.historyCurrentHash = location.hash.replace(/\?.*$/, ""), jQuery.historyCallback(s))
                } else if (jQuery.historyBackStack[jQuery.historyBackStack.length - 1] == undefined&&!jQuery.isFirst) {
                    if (location.hash) {
                        var n = location.hash;
                        jQuery.historyCallback(location.hash.replace(/^#/, ""))
                    } else {
                        var n = "";
                        jQuery.historyCallback("")
                    }
                    jQuery.isFirst=!0
                }
            }
        } else {
            var n = location.hash.replace(/\?.*$/, "");
            n != jQuery.historyCurrentHash && (jQuery.historyCurrentHash = n, jQuery.historyCallback(n.replace(/^#/, "")))
        }
    },
    historyLoad: function(e) {
        var t;
        e = decodeURIComponent(e.replace(/\?.*$/, "")), jQuery.browser.safari ? t = e : (t = "#" + e, location.hash = t), jQuery.historyCurrentHash = t;
        if (jQuery.historyNeedIframe) {
            var n = jQuery("#jQuery_history")[0], r = n.contentWindow.document;
            r.open(), r.close(), r.location.hash = t, jQuery.lastHistoryLength = history.length, jQuery.historyCallback(e)
        } else if (jQuery.browser.safari) {
            jQuery.dontCheck=!0, this.historyAddHistory(e);
            var i = function() {
                jQuery.dontCheck=!1
            };
            window.setTimeout(i, 200), jQuery.historyCallback(e), location.hash = t
        } else 
            jQuery.historyCallback(e)
    }
}), jQuery.fn.tabs = function(e) {
    var t = $.extend({
        trackState: !0,
        srcPath: "jQuery.history.blank.html",
        autoRotate: !1,
        alwaysScrollToTop: !0,
        selected: null,
        wrapperTag: "section",
        defaultTab: null,
        containerTag: "div",
        scrollOnload: !1
    }, e), n = "tabset", r = function(e) {
        var r = n, i = e.closest(t.containerTag);
        return i.hasClass("programme-progression") ? e.closest(t.containerTag).css("float") === "none" && (r = "accordion") : e.find("li").css("float") === "none" && (r = "accordion"), r === "accordion" ? t.defaultTab === null && (t.defaultTab =- 1) : t.defaultTab === null && (t.defaultTab = 0), r
    }, i = function(e, t) {
        return n === "accordion" ? e.find("header.js-heading-tab") : t.find("li")
    }, s = function(e, n, r) {
        var i = n.find("li"), s = n.closest(t.containerTag).parent(), u, a, f;
        $.each(i, function(e) {
            var n = $(this).find("a"), r = n.attr("href").split("#")[1], i = $('<a href="#' + r + '" class="tab-shiftlink">Return to top of section ↑</a>');
            u = s.find("#" + r), a = u.find("header"), a.length ? a = a.remove() : a = $("<header><h1 /></header>"), a.addClass("js-heading-tab").removeClass("visuallyhidden"), a.children().html("").append(n), f = u.find(".inner"), f.length ? f.addClass("js-tab-pane") : f = $('<div class="inner js-tab-pane" />').html(u.html()), f.attr("id", r), u.replaceWith($("<" + t.wrapperTag + " />").append(f)), u = f.parent(), u.prepend(a).attr("id", r), u.addClass("js-tab-container"), f.append(i)
        }), n.closest(t.containerTag).remove()
    };
    return $(this).each(function() {
        function h(r, i) {
            if (t.trackState&&!i) {
                var s = r.attr("href").split("#")[1];
                $.historyLoad(s)
            } else {
                c.find("a").attr("aria-selected", !1).attr("tabindex", - 1), n === "accordion" ? c.find("a").closest(".js-heading-tab").removeClass("active") : c.find("a").parent().filter(".active").removeClass("active"), r.attr("aria-selected", !0).attr("tabindex", 0
                ), n === "accordion" ? r.closest(".js-heading-tab").addClass("active") : r.parent().addClass("active"), a.find(".tabs-panel-selected").attr("aria-hidden", !0).attr("aria-expanded", !1).removeClass("tabs-panel-selected").hide();
                var s = r.attr("href").split("#")[1];
                $("#" + s + l).addClass("tabs-panel-selected").attr("aria-hidden", !1).attr("aria-expanded", !0).show(), t.selected = c.find("a").index(r), e.trigger("tabChanged", s)
            }
        }
        function p(e) {
            c.find("a").attr("aria-selected", !1).attr("tabindex", - 1), c.find("a").closest(".js-heading-tab").removeClass("active"), a.find(".tabs-panel-selected").attr("aria-hidden", !0).attr("aria-expanded", !1).removeClass("tabs-panel-selected").hide()
        }
        function d(e, n) {
            var r = e || window.location.hash;
            r.indexOf("#") == 0 && (r = r.split("#")[1]);
            var i = c.find("a[href$=#" + r + "]");
            return i.size() > 0 ? (h(i, !0), t.scrollOnload && n && window.setTimeout(function() {
                $(document).scrollTop(i.offset().top)
            }, 0)) : t.defaultTab>-1 && h(c.find("a").eq(t.defaultTab), !0), !!i.size()
        }
        var e = $(this), u = e.find(".js-tabs ul, .js-tabs ol");
        if (u.length === 0)
            return e;
        var a = $(".js-tab-content"), f = "tab-", l = "-enhanced";
        a.addClass("tabs-body").attr("aria-live", "polite"), n = r(u), n === "accordion" ? s(e, u) : u.addClass("tabs-nav").attr("role", "tablist"), a.find(".js-tab-pane").each(function() {
            $(this).addClass("tabs-panel").attr("role", "tabpanel").attr("aria-hidden", !0).attr("aria-expanded", !1).attr("aria-labelledby", f + $(this).attr("id")).attr("id", $(this).attr("id") + l).hide()
        });
        var c = i(a, u);
        c.find("a").each(function(e) {
            var t = $(this).attr("href").split("#")[1];
            $(this).attr("role", "tab").attr("id", f + t).attr("aria-controls", t).attr("aria-flowto", t)
        }), e.on("keydown", function(e) {
            if (e.keyCode < $.ui.keyCode.PAGE_UP || e.keyCode > $.ui.keyCode.DOWN)
                return;
            var n, r;
            switch (e.keyCode) {
            case $.ui.keyCode.RIGHT:
                e.preventDefault(), n = t.selected + 1;
                break;
            case $.ui.keyCode.DOWN:
                n = t.selected + 1;
                break;
            case $.ui.keyCode.UP:
                n = t.selected - 1;
                break;
            case $.ui.keyCode.LEFT:
                n = t.selected - 1;
                break;
            case $.ui.keyCode.END:
                n = c.length - 1;
                break;
            case $.ui.keyCode.HOME:
                n = 0;
                break;
            case $.ui.keyCode.PAGE_UP:
                if (!e.ctrlKey)
                    return;
                n = t.selected + 1;
                break;
            case $.ui.keyCode.PAGE_DOWN:
                if (!e.ctrlKey)
                    return;
                n = t.selected + 1;
                if (!e.ctrlKey)
                    return;
                n = t.selected - 1
            }
            return e.preventDefault(), e.stopPropagation(), n !== undefined && (n = n >= c.length ? 0 : n < 0 ? c.length - 1 : n, r = c.find("a").eq(n), r.focus(), t.selected = n), !1
        }), e.bind("click keydown focus", function() {
            t.autoRotate && clearInterval(tabRotator)
        }), t.trackState && $.historyInit(d, t.srcPath), d(null, !0), c.on("click", "a", function() {
            return $(this).closest(".js-heading-tab").hasClass("active") ? p($(this)) : h($(this)), $(this).focus(), !1
        }), t.alwaysScrollToTop && $(window)[0].scrollTo(0, 0), typeof GOVUK.stopScrollingAtFooter != "undefined" && GOVUK.stopScrollingAtFooter.updateFooterTop()
    })
}, $(function() {
    var e = e || {}, t = function() {
        this.$navbar = $("div.article-container aside nav.page-navigation"), this.$navlist = this.$navbar.find("ol"), this.$showAllLink = $('<a href="#" class="show-all-parts">Show all parts of this guide</a>'), this.$pageHeader = $(".multi-page article header h1 span"), this.init()
    };
    t.prototype = {
        init: function() {
            if (this.$navbar.closest("aside").css("float") !== "none")
                return;
            this.setup()
        },
        control: function(e) {
            var t = $(e.target), n = this;
            return t.hasClass("show-all-parts-open") ? (t.removeClass("show-all-parts-open"), t.text(t.text().replace(/Hide/, "Show")), n.$navbar.removeClass("page-navigation-open"), n.$navbar.addClass("page-navigation-closed")) : (t.addClass("show-all-parts-open"), t.text(t.text().replace(/Show/, "Hide")), n.$navbar.removeClass("page-navigation-closed"), n.$navbar.addClass("page-navigation-open")), !1
        },
        setup: function() {
            var e = this, t = this.$navlist.find("li").length, n = this.$navlist.find("li.active").index() + 1;
            this.$showAllLink.insertBefore(this.$navbar), this.$navbar.prepend(this.$navbar.find("ol").remove()), this.$pageHeader.length && this.$pageHeader.html(this.$pageHeader.html().replace(/Part\s(\d+)/, "Part $1 of " + this.$navlist.find("li").length)), this.$showAllLink.on("click", function(t) {
                return e.control(t), !1
            }), this.$navbar.addClass("page-navigation-closed")
        }
    }, e.guideTabs = new t
}), $(function() {
    "use strict";
    function e() {
        var e = $('<div id="global-browser-prompt"></div>'), t = $('<p><a href="/help/browsers">Upgrade your web browser</a> (the software you use to access the internet), it’s out of date</p>'), n = $('<a href="#" class="dismiss" title="Dismiss this message">Close</a>');
        return e.append(t.append(n))
    }
    if (GOVUK.cookie("seen_cookie_message")) {
        if (suchi.isOld(navigator.userAgent) && GOVUK.cookie("govuk_not_first_visit") !== null && GOVUK.cookie("govuk_browser_upgrade_dismissed") === null) {
            var t = e();
            $("#global-cookie-message").after(t), t.show(), window._gaq && _gaq.push(["_trackEvent", "browser-check", "prompt-shown", "", 1, !0]), t.on("click", ".dismiss", function(e) {
                t.hide(), GOVUK.cookie("govuk_browser_upgrade_dismissed", "yes", {
                    days: 28
                })
            })
        }
        GOVUK.cookie("govuk_not_first_visit", "yes", {
            days: 28
        })
    }
});
