if ("undefined" == typeof(s_account)) {
    var s_account = "bbcwglobalprod"
}
var scw = s_gi(s_account);
if (navigator && navigator.loadPurpose && navigator.loadPurpose === "preview") {
    scw.t = new Function("return ''")
}
scw.charSet = "ISO-8859-1";
scw.currencyCode = "USD";
scw.trackDownloadLinks = true;
scw.trackExternalLinks = true;
scw.trackInlineStats = true;
scw.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
scw.linkInternalFilters = "javascript:,bbc.com,bbc.co.uk";
scw.linkLeaveQueryString = false;
scw.linkTrackVars = "prop6,eVar6,prop7,eVar7,prop8,eVar8";
scw.linkTrackEvents = "None";
scw.setYear = function() {
    var a = new Date(), b = a.getYear();
    return (b < 1900) ? b + 1900 : b
};
scw.dstStart = "3/28/2010";
scw.dstEnd = "10/31/2010";
scw.currentYear = scw.setYear();
scw._extraSearchEngines = "";
scw._channelDomain = "Facebook|facebook.com>Twitter|twitter.com>YouTube|youtube.com>LinkedIn|linkedin.com>MySpace|myspace.com>Other Social Media|digg.com,flickr.com,stumbleupon.com,del.icio.us,reddit.com,metacafe.com,technorati.com";
scw._channelParameter = "";
scw._channelPattern = "";
scw.page = {
    domain: ("undefined" != typeof(document.domain)) ? document.domain: "",
    title: ("undefined" != typeof(document.title)) ? document.title.replace(/"/g, "'"): "",
    url: ("undefined" != typeof(document.URL)) ? document.URL: "http://www.bbc.com/",
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    hArray: null,
    hLength: null,
    newUrl: "",
    contentIdMatch: null,
    reStandardContentId: new RegExp("([0-9]{7,8})([^0-9]|$)"),
    reNewsContentId: new RegExp("(-)([0-9]{7,8})([^0-9]|$)")
};
var videoOnPage = false;
if (typeof gloader !== "undefined") {
    gloader.load(["glow", "1", "glow.dom"], {
        onLoad: function(a) {
            slot = a.dom.get(".emp");
            if (0 < slot.length) {
                videoOnPage = true
            }
        }
    })
}
var dmn = document.domain;
var search = /\./g;
for (var xyz = 0; search.exec(dmn); ++xyz) {}
scw.cookieDomainPeriods = xyz;
scw.fpCookieDomainPeriods = scw.cookieDomainPeriods;
scw.events = "event2";
scw.usePlugins = true;
function s_doPlugins(c) {
    c.evaluateUrl();
    c.channel = c.prop6;
    if (document.getElementsByName) {
        c.pageName = c.page.title = c.trimHash(c.page.title);
        if (0 == c.page.title.indexOf("BBC iPlayer (Global)")) {
            c.pageName = c.page.title.replace("BBC iPlayer (Global) - ", "bbc gip | ");
            c.channel = "gip"
        } else {
            if (0 == c.page.title.indexOf("BBC - Travel - Search")) {
                c.pageName = "BBC - Travel - Search";
                c.events = c.apl(c.events, "event1", ",", 1);
                c.prop1 = c.page.title.split("BBC - Travel - Search : ")[1];
                c.eVar1 = "D=c1"
            } else {
                if (0 == c.page.title.indexOf("BBC - Future - Search")) {
                    c.pageName = "BBC - Future - Search";
                    c.events = c.apl(c.events, "event1", ",", 1);
                    c.prop1 = c.page.title.split("BBC - Future - Search : ")[1];
                    c.eVar1 = "D=c1"
                } else {
                    if (0 == c.page.title.indexOf("BBC - Culture - Search")) {
                        c.pageName = "BBC - Culture - Search";
                        c.events = c.apl(c.events, "event1", ",", 1);
                        c.prop1 = c.page.title.split("BBC - Culture - Search : ")[1];
                        c.eVar1 = "D=c1"
                    } else {
                        if (0 == c.page.title.indexOf("BBC - Capital - Search")) {
                            c.pageName = "BBC - Capital - Search";
                            c.events = c.apl(c.events, "event1", ",", 1);
                            c.prop1 = c.page.title.split("BBC - Capital - Search : ")[1];
                            c.eVar1 = "D=c1"
                        } else {
                            if (0 == c.page.title.indexOf("BBC - Autos - Search")) {
                                c.pageName = "BBC - Autos - Search";
                                c.events = c.apl(c.events, "event1", ",", 1);
                                c.prop1 = c.page.title.split("BBC - Autos - Search : ")[1];
                                c.eVar1 = "D=c1"
                            } else {
                                if (0 == c.page.title.indexOf("BBC - Search results for ")) {
                                    c.pageName = "BBC - Search";
                                    c.events = c.apl(c.events, "event1", ",", 1);
                                    c.prop1 = c.page.title.split("BBC - Search results for ")[1];
                                    c.eVar1 = "D=c1"
                                } else {
                                    if (0 == c.page.title.indexOf("BBC - Homepage")) {
                                        var b = document.getElementsByTagName("body")[0].className;
                                        if ( - 1 != b.indexOf("nofeeds")) {
                                            c.pageName = c.page.title = "- nofeeds"
                                        } else {
                                            if ( - 1 != b.indexOf("obituary")) {
                                                c.pageName = c.page.title + " - obituary"
                                            } else {
                                                if ( - 1 != b.indexOf("publicservice")) {
                                                    c.pageName = c.page.title = " - public service"
                                                }
                                            }
                                        }
                                    } else {
                                        if (c.pageIsOlderThan365Days()) {
                                            c.pageName = "BBC " + c.channel + " - Archive"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        c.pageName = c.pageName.replace(/ - /g, " | ").toLowerCase();
        c.eVar2 = "D=pageName";
        c.hier1 = c.page.title.replace(/ - /g, "|").toLowerCase();
        if (typeof BBC !== "undefined" && typeof BBC.adverts !== "undefined" && typeof BBC.adverts.getSectionPath !== "undefined") {
            var f = BBC.adverts.getSectionPath();
            if (f !== undefined) {
                f = f.replace(/\//g, "|");
                if (1 === f.indexOf("future")) {
                    c.hier2 = f.replace(/sections|/, "")
                } else {
                    c.hier2 = f
                }
            }
        } else {
            c.sectionPath = window.location.pathname.replace("2/hi", "news");
            c.sectionPath = c.sectionPath.replace("sport2/hi", "sport");
            c.sectionPath = c.sectionPath.replace("sport/0", "sport");
            c.sectionPath = c.sectionPath.replace(/\/+[0-9]*.([a-z])*$/g, "");
            c.hier2 = c.sectionPath.substring(1).replace(/\//g, "|")
        }
        c.bbcwObjectID = c.getCookie("BBCW-OBJECTID");
        if (c.bbcwObjectID) {
            c.hier3 = c.bbcwObjectID
        }
        c.prop5 = "NOT AVAILABLE";
        if ( - 1 !== c.page.url.search(/\/sport\/football\/teams[^\/]?/)||-1 !== c.page.url.search(/^http:\/\/www(.*)bbc.co(m|.uk)$/)||-1 !== c.page.url.search(/^http:\/\/www(.*)bbc.co(m|.uk)\/blogs$/)||-1 !== c.page.url.search(/^http:\/\/www(.*)bbc.co(m|.uk)\/radio$/)||-1 !== c.page.url.search(/^http:\/\/www(.*)bbc.co(m|.uk)\/weather$/)) {
            c.prop5 = "INDEX"
        } else {
            if ("undefined" != typeof bbc && "undefined" != typeof bbc.fmtj && "undefined" != typeof bbc.fmtj.page && "undefined" != typeof bbc.fmtj.page.assetType && "media_asset" == bbc.fmtj.page.assetType) {
                c.prop5 = "VIDEO"
            } else {
                if (videoOnPage) {
                    c.prop5 = "STORY-VIDEO"
                } else {
                    if ( - 1 !== c.page.url.search(/\/sport\/football\/teams\//)) {
                        c.prop5 = "STORY"
                    } else {
                        var e = document.getElementsByName("contentFlavor");
                        for (var d = 0; d < e.length; d++) {
                            if ("" != e[d].content) {
                                c.prop5 = e[d].content.toUpperCase()
                            } else {
                                c.prop5 = "EMPTY"
                            }
                        }
                    }
                }
            }
        }
        c.eVar5 = "D=c5";
        if (c.prop5 !== "NOT AVAILABLE" && c.prop5 !== "INDEX" && c.prop5 !== "SEARCH" && c.prop5 !== "EMPTY") {
            if (document.getElementsByName("Headline").length !== 0 && document.getElementsByName("Headline")[0].getAttribute("content") !== null) {
                c.prop3 = document.getElementsByName("Headline")[0].getAttribute("content");
                c.eVar3 = "D=c3"
            }
            var e = document.getElementsByName("CPS_ID").length > 0 ? document.getElementsByName("CPS_ID"): document.getElementsByName("contentId");
            for (var d = 0; d < e.length; d++) {
                c.prop4 = e[d].content;
                c.eVar4 = "D=c4"
            }
            var a = document.getElementsByName("OriginalPublicationDate");
            if (0 === a.length) {
                a = document.getElementsByName("DCTERMS.created")
            }
            for (var d = 0; d < a.length; d++) {
                c.prop10 = a[d].content.replace("T", " ").replace(/\+00:00$/, "");
                c.eVar10 = "D=c10"
            }
            if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.authors) {
                c.prop12 = bbcdotcom.stats.authors;
                c.eVar12 = "D=c12"
            }
            if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.partners) {
                c.prop13 = bbcdotcom.stats.partners;
                c.eVar13 = "D=c13"
            }
            if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.affiliates) {
                c.prop14 = bbcdotcom.stats.affiliates;
                c.eVar14 = "D=c14"
            }
        }
        c.prop15 = window.location.pathname;
        var e = document.getElementsByName("IFS_URL");
        for (var d = 0; d < e.length; d++) {
            c.prop15 = e[d].content
        }
        c.eVar15 = "D=c15"
    }
    c.prop32 = "Not available";
    if ("undefined" != typeof bbc && "undefined" != typeof bbc.fmtj && "undefined" != typeof bbc.fmtj.page && null != bbc.fmtj.page.adKeyword) {
        c.prop32 = bbc.fmtj.page.adKeyword
    }
    c.eVar32 = "D=c32";
    if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats) {
        if (bbcdotcom.objects("bbcdotcom.config.isAdsEnabled")) {
            c.prop57 = "yes"
        } else {
            c.prop57 = "no"
        }
        c.eVar57 = "D=c57";
        c.prop31 = bbcdotcom.stats.contentType;
        c.eVar31 = "D=c31"
    }
    c.prop16 = (typeof orb !== "undefined" && orb.referrer !== "undefined" && orb.referrer !== "" ? orb.referrer : document.referrer);
    c.eVar16 = "D=c16";
    c.prop17 = c.trackRefresh(c.pageName, "tr_pr1");
    c.eVar17 = "D=c17";
    s_hour = c.getTimeParting("h", "0");
    s_day = c.getTimeParting("d", "0");
    s_timepart = s_day + "|" + s_hour;
    c.prop11 = s_timepart.toLowerCase();
    if (c.visEvent) {
        c.eVar11 = "D=c11"
    }
    c.campaign = c.getQueryParam("ocid");
    c.campaign = c.getValOnce(c.campaign, "s_campaign", 0);
    c.channelManager("cmp,cmpid,cid,rss,ocid,OCID", ":", "s_cm", "0");
    if (c._channel == "Natural Search") {
        c._channel = "Organic";
        c._campaign = c._partner + "-" + c._channel + "-" + c._keywords.toLowerCase()
    }
    if (c._channel == "Referrers") {
        c._channel = "Other Referrers";
        c._campaign = c._channel + "-" + c._referringDomain
    }
    c.campaign = ( - 1 !== c.page.url.indexOf("#sa-ns_mchannel=rss")) ? "global_all_rss" : c.campaign;
    c.campaign = ( - 1 !== c.page.url.indexOf("#sa-ns_mchannel=email")) ? "global_all_email" : c.campaign;
    c.campaign = ( - 1 !== c.page.url.indexOf("utm_medium=twitter")) ? "global_all_socialsite_twitter" : c.campaign;
    c.campaign = ( - 1 !== c.page.url.indexOf("utm_medium=email")) ? "global_all_email" : c.campaign;
    c.campaign = ( - 1 !== c.page.url.indexOf("#tweet")) ? "global_all_socialsite_twitter" : c.campaign;
    c.prop53 = c.page.domain;
    c.eVar53 = "D=c53";
    c.prop54 = c.page.url;
    c.eVar54 = "D=c54";
    c.prop55 = "bbc.com";
    c.eVar55 = "D=c55";
    c.prop56 = "D=pageName";
    c.eVar56 = "D=c56";
    c.adsense_mpu = document.getElementById("bbccom_adsense_mpu");
    c.adsense_middle = document.getElementById("bbccom_adsense_middle");
    if (null != c.adsense_mpu && null != c.adsense_mpu.offsetTop) {
        c.prop61 = c.adsense_mpu.offsetTop;
        c.eVar61 = "D=c61"
    } else {
        if (null != c.adsense_middle && null != c.adsense_middle.offsetTop) {
            c.prop61 = c.adsense_middle.offsetTop;
            c.eVar61 = "D=c61"
        }
    }
    if ("undefined" != typeof BBC && "undefined" != typeof BBC.adverts && "undefined" != typeof BBC.adverts.getAdOids) {
        c.prop62 = BBC.adverts.getAdOids();
        c.eVar62 = "D=c62"
    }
    if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.sections) {
        c.prop63 = bbcdotcom.stats.sections;
        c.eVar63 = "D=c63"
    }
    if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.subsections) {
        c.prop64 = bbcdotcom.stats.subsections;
        c.eVar64 = "D=c64"
    }
    if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.column) {
        c.prop65 = bbcdotcom.stats.column;
        c.eVar65 = "D=c65"
    }
    if ("undefined" != typeof bbcdotcom && "undefined" != typeof bbcdotcom.stats && "undefined" != typeof bbcdotcom.stats.blog) {
        c.prop66 = bbcdotcom.stats.blog;
        c.eVar66 = "D=c66"
    }
    if (!c.eVar59 && c.getQueryParam("from") != "") {
        c.eVar59 = c.getQueryParam("from");
        c.events = c.apl(c.events, "event22", "event23", 1)
    }
    if (typeof scw_local !== "undefined" && typeof scw_local.doPlugins !== "undefined") {
        scw_local.doPlugins(c)
    }
}
scw.doPlugins = s_doPlugins;
if (typeof scw_local !== "undefined" && typeof scw_local.init !== "undefined") {
    scw_local.init(scw)
}
scw.y2k = function(a) {
    return (a < 1000) ? a + 1900 : a
};
scw.pageIsOlderThan365Days = function() {
    var b = document.getElementsByName("OriginalPublicationDate");
    if ("undefined" != typeof b[0]) {
        var c = b[0].getAttribute("content").split(" ")[0];
        var a = new Date();
        var d = Date.UTC(scw.y2k(a.getYear()), a.getMonth() + 1, a.getDate(), 0, 0, 0) - Date.UTC(scw.y2k(c.split("/")[0]), c.split("/")[1], c.split("/")[2], 0, 0, 0);
        return (365 < d / 1000 / 60 / 60 / 24) ? true : false
    }
    return false
};
scw.trackExternalPageLinks = function(a) {
    if (a[0].rev) {
        revValues = a[0].rev.split("|");
        scw.events = "event21";
        scw.prop40 = revValues[0];
        scw.eVar40 = "D=c40";
        scw.pev2 = "bbc: " + revValues[1];
        scw.t()
    }
};
scw.trackSiteLinks = function(a, e) {
    var d = "";
    if ("undefined" != typeof a[0].title && "" != a[0].title) {
        d = a[0].title
    } else {
        if ("undefined" != typeof a[0].text) {
            d = a[0].text
        } else {
            if ("undefined" != typeof a[0].innerText) {
                d = a[0].innerText
            }
        }
    }
    scw.pageReferrer = window.location.pathname.replace(/^http[s]?:\/\/?([^:\/]+)/, "");
    scw.contentType = "story";
    scw.contentID = scw.trim(d);
    scw.linkDestination = a[0].href.replace(/^http[s]?:\/\/?([^:\/]+)/, "");
    var c = false;
    if ("homepage" == scw.channel && a[0].rev&&-1 != a[0].rev.indexOf("|r|t|i|")) {
        scw.bbcwObjectID = a[0].rev;
        c = true
    } else {
        if ("news" == scw.channel && a.isWithin(e.dom.get("#promotional-content"))) {
            var b = ("front-page" == bbc.fmtj.page.section) ? "news": bbc.fmtj.page.section;
            scw.bbcwObjectID = "elsewhere|news|" + b + "|r|t|i|hero|content";
            c = true
        }
    }
    if (c) {
        scw.bbcwObjectID = scw.bbcwObjectID.replace("|r|", "|");
        scw.bbcwObjectID = scw.bbcwObjectID.replace("|t|", "|");
        scw.bbcwObjectID = scw.bbcwObjectID.replace("|i|", "|" + scw.contentID + "|");
        scw.bbcwObjectID = scw.bbcwObjectID + "|" + scw.linkDestination.replace(/.*-(\d{7,8})$/, "$1");
        s_objectID = scw.bbcwObjectID;
        scw.tl(a[0], "o", scw.bbcwObjectID)
    }
};
scw.trackPageInteraction = function(d) {
    var a = s_gi(s_account);
    var c = function(e, f) {
        if ("object" != typeof f) {
            a[e] = f
        } else {
            if ("undefined" != typeof f.variable) {
                a[e] = a[f.variable]
            }
        }
    };
    if ("undefined" != d.events) {
        a.linkTrackVars += "events,";
        a.linkTrackEvents = d.events;
        a.events = a.linkTrackEvents
    }
    for (var b in d.vars) {
        c(b, d.vars[b]);
        a.linkTrackVars += b + ","
    }
    if ("undefined" != d.linkTrackingName) {
        c("linkTrackingName", d.linkTrackingName)
    } else {
        return false
    }
    a.tl(this, "o", a.linkTrackingName)
};
scw.trackAdSenseClicks = function() {
    var a = ("undefined" != typeof scw.eVar61) ? scw.eVar61: "";
    scw.trackPageInteraction(data = {
        events: "event42",
        linkTrackingName: "adSenseClicks"
    })
};
scw.trackShareTools = function(b) {
    scw.linkTrackVars = "prop6,prop7,prop4,prop3,eVar6,eVar7,eVar4,eVar3,eVar35,eVar39,events";
    scw.linkTrackEvents = "event23";
    scw.eVar35 = b + "-share";
    scw.eVar39 = scw.prop7 + "-" + scw.prop3;
    scw.events = "event23";
    var a = scw.prop6;
    scw.tl(this, "o", "share-" + a)
};
scw.trackOutbrain = function(a) {
    scw.linkTrackVars = "prop6,prop7,prop4,prop3,prop52,eVar6,eVar7,eVar4,eVar3,eVar52,events";
    scw.linkTrackEvents = "event22,event35";
    scw.eVar52 = scw.prop6 + "_outbrain-recommends";
    scw.events = "event22,event35";
    scw.tl(this, "o", "outbrain-recommends")
};
scw.trackNavigation = function(a) {
    var b = "menu_" + scw.prop6 + "_" + scw.prop5 + "_topbar_text_" + a;
    b = b.toLowerCase();
    var c = "menu-" + scw.prop6;
    scw.trackPageInteraction(data = {
        events: "event22",
        vars: {
            prop6: scw.prop6,
            prop7: scw.prop7,
            prop52: b,
            eVar6: "D=c6",
            eVar52: "D=c52"
        },
        linkTrackingName: c
    })
};
scw.trackPrintButton = function() {
    scw.linkTrackVars = "prop6,prop7,prop4,prop3,eVar6,eVar7,eVar4,eVar3,eVar35,eVar39,eVar52,events";
    scw.linkTrackEvents = "event22";
    scw.eVar52 = "printer-" + scw.prop6 + "-" + scw.prop5 + "-image";
    scw.events = "event22";
    var a = scw.prop6;
    scw.tl(this, "o", "printer-" + a)
};
scw.trackFutureSeeMoreArticles = function() {
    scw.trackPageInteraction(data = {
        events: "event22",
        vars: {
            prop52: "future:: interaction:: pagination",
            eVar52: {
                variable: "prop52"
            }
        },
        linkTrackingName: {
            variable: "prop52"
        }
    })
};
scw.trackTravelWeatherClicks = function(b, a) {
    scw.trackPageInteraction(data = {
        events: "event22",
        vars: {
            prop52: "weather_" + b + "-travel-module-" + a,
            eVar52: {
                variable: "prop52"
            }
        },
        linkTrackingName: {
            variable: "prop52"
        }
    })
};
scw.trackSportFootballDrownDowns = function(b, a) {
    if (typeof gloader !== "undefined") {
        gloader.load(["glow", "1", "glow.dom", "glow.events"], {
            onLoad: function(k) {
                var j = function(o) {
                    var m = "";
                    for (var n = 0, l = o.length; n < l; n++) {
                        m += "|" + o[n].options[o[n].selectedIndex].label
                    }
                    return m
                };
                var e = function(n, o) {
                    var m = o.get("H1");
                    var l = o.get("H2");
                    if (1 == m.length) {
                        return m.text()
                    } else {
                        if (1 == l.length && "table-header" != l[0].className && "main" != o.attr("role")) {
                            return l.text()
                        } else {
                            if (10 > n) {
                                n++;
                                return e(n, o.parent())
                            }
                        }
                    }
                    return ""
                };
                var d = scw.page.url.split("/");
                var g = d[d.length - 1].toLowerCase();
                var h = {
                    tables: 1,
                    "live-scores": 1,
                    fixtures: 1,
                    results: 1
                };
                var c = k.dom.get("#filter-nav").get("select");
                if (1 <= c.length && 1 === h[g]) {
                    var f = scw.trim(e(0, b).toLowerCase());
                    var i = scw.trim(j(c).toLowerCase());
                    scw.trackPageInteraction(data = {
                        events: "event22",
                        vars: {
                            prop52: a + "|sport|football|" + g + "|" + f + i,
                            eVar52: {
                                variable: "prop52"
                            }
                        },
                        linkTrackingName: {
                            variable: "prop52"
                        }
                    })
                }
            }
        })
    }
};
scw.trackLinks = function() {
    var a = function(b, d, c) {
        if ("undefined" != d.parent() && d.parent().hasClass(c)) {
            return true
        } else {
            if (10 > b) {
                b++;
                return a(b, d.parent(), c)
            }
        }
        return false
    };
    if (typeof gloader !== "undefined") {
        gloader.load(["glow", "1", "glow.dom", "glow.events"], {
            onLoad: function(b) {
                if ("undefined" !== typeof(scw.linkEvent)) {
                    b.events.removeListener(scw.linkEvent)
                }
                scw.linkEvent = b.events.addListener("body", "click", function(g) {
                    if ("undefined" != typeof scw && "undefined" != typeof scw.trackSiteLinks && "undefined" != typeof scw.trackExternalPageLinks) {
                        var f = b.dom.get(g.source);
                        var h = f.parent();
                        if (f.is("img") || f.is("span")) {
                            f = h
                        }
                        if (f.is("a")) {
                            if ("undefined" != typeof document.getElementById("future")&&-1 !== h[0].className.indexOf("see-more-articles")) {
                                scw.trackFutureSeeMoreArticles()
                            } else {
                                if ("undefined" != typeof document.getElementById("travel")&&-1 !== h[0].className.indexOf("forecast")) {
                                    if ("undefined" != typeof document.getElementById("weather")) {
                                        var c = "article";
                                        var d = b.dom.get("#weather .place-name").item(0);
                                        d = d.textContent.toLowerCase();
                                        b.dom.get("meta").each(function() {
                                            if (b.dom.get(this).attr("content") === "INDEX") {
                                                c = "index"
                                            }
                                        });
                                        scw.trackTravelWeatherClicks(d, c)
                                    }
                                } else {
                                    if ("undefined" != typeof document.getElementById("travel") && a(0, f, "navigation") && f.attr("id")) {
                                        scw.trackNavigation(f.attr("id"))
                                    } else {
                                        if (a(0, f, "bbc-st-panel")&&!a(0, f, "bbc-st-explain")&&!f.hasClass("panel-close")) {
                                            scw.trackShareTools(f.html().toLowerCase())
                                        } else {
                                            if (a(0, f, "bbc-st-facebook-cta")) {
                                                scw.trackShareTools(f.html().toLowerCase())
                                            } else {
                                                if (a(0, f, "bbc-st-twitter-cta")) {
                                                    scw.trackShareTools(f.html().toLowerCase())
                                                } else {
                                                    if ((a(0, f, "share-tools") && f.hasClass("print")) || f.is("#print-button")) {
                                                        scw.trackPrintButton()
                                                    } else {
                                                        if (a(0, f, "share-help") && a(0, f, "email")) {
                                                            scw.trackShareTools(f.html().toLowerCase())
                                                        } else {
                                                            if (f.hasClass("pin-it-button")) {
                                                                scw.trackShareTools("pinterest")
                                                            } else {
                                                                if (a(0, f, "bbccom_adsense")) {
                                                                    scw.trackAdSenseClicks()
                                                                } else {
                                                                    if ( - 1 === f[0].className.indexOf("external-link")) {
                                                                        scw.trackSiteLinks(f, b)
                                                                    } else {
                                                                        if (a(0, f, "OUTBRAIN")) {
                                                                            scw.trackOutbrain(f)
                                                                        } else {
                                                                            scw.trackExternalPageLinks(f)
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (a(0, f, "OUTBRAIN")) {
                                scw.trackOutbrain(f)
                            } else {
                                if ( - 1 != g.attachedTo.className.indexOf("sport")) {
                                    if (f.is("input")) {
                                        scw.trackSportFootballDrownDowns(h, "drop-downs")
                                    } else {
                                        if (f.is("button") || (f.is("td")&&-1 !== f[0].className.indexOf("live-scores-show"))) {
                                            scw.trackSportFootballDrownDowns(h, "inpage")
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
        })
    }
}();
scw.trackDrag = function() {
    if (typeof gloader !== "undefined") {
        gloader.load(["glow", "1", "glow.dom", "glow.events"], {
            onLoad: function(a) {
                scw.linkEvent = a.events.addListener("body", "mousedown", function(c) {
                    if ("undefined" != typeof scw && "undefined" != typeof scw.trackIePinDrag) {
                        var b = a.dom.get(c.source);
                        if ("iePinWrap" === b.parent().parent().attr("id")) {
                            scw.trackIePinDrag()
                        }
                    }
                })
            }
        })
    }
}();
scw.trackIePinDrag = function() {
    var a = "ie9_pinned-" + scw.channel;
    if (scw.prop5 != "NOT AVAILABLE") {
        a = "ie9_pinned-" + scw.channel + "-" + scw.prop5.toLowerCase()
    }
    scw.trackPageInteraction(data = {
        events: "event22,event24",
        vars: {
            prop52: a,
            eVar52: {
                variable: "prop52"
            }
        },
        linkTrackingName: "iePinDrag"
    })
};
scw.setCookie = function(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    document.cookie = c + "=" + d + a + "; path=/; domain=bbc.co.uk"
};
scw.getCookie = function(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
    return false
};
scw.deleteCookie = function(a) {
    scw.setCookie(a, "", - 1)
};
scw.evaluateUrl = function() {
    scw.page.h1 = "";
    scw.page.h2 = "";
    scw.page.h3 = "";
    scw.page.h4 = "";
    scw.page.hArray = null;
    scw.page.hLength = null;
    scw.page.newUrl = "";
    scw.page.contentIdMatch = null;
    scw.page.url = scw.page.url.toLowerCase();
    scw.page.url = scw.trimHash(scw.page.url);
    scw.page.url = scw.page.url.replace(/^\s*(.*?)\s*$/, "$1");
    scw.page.url = scw.page.url.replace(/\/$/g, "");
    scw.page.newUrl = scw.page.url.replace(/^(http|https):\/\//g, "");
    if (3 <= scw.page.newUrl.split("-").length) {
        scw.page.newUrl = scw.page.newUrl.replace(/uk-/, "")
    }
    scw.page.newUrl = scw.page.newUrl.replace("/2/hi", "/news").replace(/\/[0-9]{7}.stm/, "/articles");
    scw.page.newUrl = scw.page.newUrl.replace(/sport2/g, "sport").replace("sport/0", "sport");
    scw.page.newUrl = scw.page.newUrl.replace(/\/default.stm/g, "");
    scw.page.newUrl = scw.page.newUrl.replace(/(\?.*)/, "");
    scw.page.newUrl = scw.page.newUrl.replace(/\/$/, "");
    scw.page.hArray = scw.page.newUrl.split("/");
    scw.page.hLength = scw.page.hArray.length;
    if (scw.page.hLength >= 2) {
        siteSection = scw.page.hArray[1];
        switch (siteSection) {
        case"specialfeatures":
            scw.specialFeatures();
            break;
        case"worldnews":
        case"programmes":
            scw.worldNews();
            break;
        case"news":
            scw.newsUrl();
            break;
        case"2012":
        case"torchrelay":
            scw.olympicsUrls();
            break;
        case"sport":
        case"sport2":
            scw.sportUrl();
            break;
        case"weather":
            scw.weatherUrl();
            break;
        case"travel":
            scw.travelUrl();
        case"future":
            scw.futureUrl();
            break;
        case"blogs":
            scw.blogsUrl();
            break;
        case"radio":
            scw.radioUrl();
            break;
        case"tv":
            scw.tvUrl();
            break
        }
    }
    if (scw.page.hLength == 1) {
        scw.page.h1 = "homepage"
    }
    if ("undefined" != typeof bbcdotcom && bbcdotcom.objects("bbcdotcom.stats.section")) {
        sectionArray = bbcdotcom.stats.section.split(">");
        sectionLength = sectionArray.length;
        scw.prop6 = sectionArray[0];
        scw.eVar6 = "D=c6";
        scw.channel = scw.prop6;
        if (sectionLength >= 2) {
            scw.prop7 = sectionArray[0] + ">" + sectionArray[1];
            scw.eVar7 = "D=c7";
            if (sectionLength >= 3) {
                scw.prop8 = sectionArray[0] + ">" + sectionArray[1] + ">" + sectionArray[2];
                scw.eVar8 = "D=c8"
            }
        }
    } else {
        if ("undefined" != typeof scw.page.h1 && "" != scw.page.h1) {
            scw.prop6 = scw.page.h1;
            scw.eVar6 = "D=c6";
            scw.channel = scw.prop6
        }
        if ("undefined" != typeof scw.page.h2 && "" != scw.page.h2) {
            scw.prop7 = scw.page.h2;
            scw.eVar7 = "D=c7"
        }
        if ("undefined" != typeof scw.page.h3 && "" != scw.page.h3) {
            scw.prop8 = scw.page.h3;
            scw.eVar8 = "D=c8"
        }
        if ("undefined" != typeof scw.page.h4 && "" != scw.page.h4) {
            scw.prop9 = scw.page.h4;
            scw.eVar9 = "D=c9"
        }
    }
};
scw.tvUrl = function() {
    scw.page.h1 = scw.page.hArray[1]
};
scw.olympicsUrls = function() {
    scw.page.h1 = "news";
    if (scw.page.hLength >= 2) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[1];
        if (scw.page.hLength >= 3 && scw.page.hArray[2] != "16000000" && scw.page.hArray[2] != "festival") {
            scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[2].replace(/_/, "-")
        }
    }
    scw.prop3 = scw.page.title;
    scw.eVar3 = "D=c3"
};
scw.specialFeatures = function() {
    scw.prop3 = scw.page.title;
    scw.eVar3 = "D=c3";
    scw.page.title = scw.page.title.replace("BBC -", "BBC News -");
    scw.page.h1 = "news";
    if (scw.page.hLength >= 2) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[1];
        if (scw.page.hLength >= 3) {
            scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[2].replace(/_/, "-");
            if (scw.page.hLength >= 4 && scw.page.hArray[3] != "episodes") {
                scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[3].replace(/_/, "-")
            } else {
                if (scw.page.hLength >= 5) {
                    scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[4].replace(/_/, "-")
                }
            }
        }
    }
};
scw.worldNews = function() {
    scw.prop3 = scw.page.title;
    scw.eVar3 = "D=c3";
    scw.page.title = scw.page.title.replace("BBC -", "BBC News -");
    scw.page.h1 = "news";
    if (scw.page.hLength >= 3) {
        var a = ( - 1 !== scw.page.title.indexOf("BBC World News - ")) ? "world-news-programmes": "programmes";
        scw.page.h2 = scw.page.h1 + ">" + a;
        var b = scw.page.title.split(" - ");
        if (scw.page.hLength >= 3 && "" !== scw.page.hArray[2]) {
            scw.page.h3 = scw.page.h2 + ">" + b[1].toLowerCase().replace(/ /g, "");
            if (scw.page.hLength >= 4) {
                scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[3].replace(/_/g, "-")
            }
        }
    }
};
scw.newsUrl = function() {
    scw.page.h1 = scw.page.hArray[1];
    scw.page.contentIdMatch = scw.page.reNewsContentId.test(scw.page.newUrl);
    if (!scw.page.contentIdMatch) {
        if (scw.page.hLength >= 3) {
            scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[2];
            if (scw.page.hLength >= 4) {
                scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3].replace(/_/, "-")
            }
        }
    } else {
        if (scw.page.hLength >= 2) {
            var c = scw.page.newUrl.lastIndexOf("/");
            var b = scw.page.newUrl.substr(c + 1);
            var a = b.indexOf("-");
            if (a > 0) {
                if ("world" == b.substring(0, a)) {
                    scw.page.h2 = scw.page.h1 + ">" + b.substr(a + 1).replace(/_/, "-").replace(/(-[0-9]{8})/, "").replace(/(-[0-9]{7})/, "");
                    scw.page.h3 = scw.page.h2 + ">" + b.substr(a + 1).replace(/_/, "-").replace(/.+(-[0-9]{8})/, "articles").replace(/.+(-[0-9]{7})/, "articles")
                } else {
                    scw.page.h2 = scw.page.h1 + ">" + b.substring(0, a).replace(/_/, "-");
                    scw.page.h3 = scw.page.h2 + ">" + b.substr(a + 1).replace(/_/, "-").replace(/([0-9]{8})/, "articles").replace(/([0-9]{7})/, "articles")
                }
            } else {
                scw.page.h2 = scw.page.h1 + ">" + b.replace(/_/, "-")
            }
        }
    }
};
scw.sportUrl = function() {
    var b = "";
    scw.page.h1 = scw.page.hArray[1];
    scw.page.contentIdMatch = scw.page.reStandardContentId.test(scw.page.newUrl);
    if (!scw.page.contentIdMatch) {
        b = scw.page.newUrl.replace(/\/hi\//g, "/");
        scw.page.hArray = b.split("/");
        scw.page.hLength = scw.page.hArray.length;
        if (scw.page.hLength >= 3) {
            scw.page.h2 = scw.page.hArray[1] + ">" + scw.page.hArray[2];
            if (scw.page.hLength >= 4) {
                scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3];
                b = b.replace(/\/m\//g, "/");
                scw.page.hArray = b.split("/");
                scw.page.hLength = scw.page.hArray.length;
                if (scw.page.hLength >= 5) {
                    scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[4]
                }
            }
        }
    } else {
        var a = 1;
        if ( - 1 != scw.page.newUrl.indexOf("hi")) {
            a = 2
        }
        if (a > 0 && (scw.page.hLength >= (a + 1))) {
            scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[a + 1]
        }
        if (a > 0 && (scw.page.hLength >= (a + 2))) {
            scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[a + 2]
        }
        var c = scw.page.newUrl.indexOf("m");
        if (c > 0 && (scw.page.hLength >= (c + 1))) {
            scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[c + 1]
        }
    }
};
scw.weatherUrl = function() {
    scw.page.h1 = scw.page.hArray[1];
    scw.page.newUrl = scw.page.newUrl.replace(/\/hi\//g, "/");
    scw.page.hArray = scw.page.newUrl.split("/");
    scw.page.hLength = scw.page.hArray.length;
    if (scw.page.hLength >= 3) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[2];
        scw.page.contentIdMatch = scw.page.reStandardContentId.test(scw.page.newUrl);
        if (!scw.page.contentIdMatch) {
            if (scw.page.hLength >= 4) {
                scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3]
            }
        } else {
            scw.page.h3 = scw.page.h2 + ">articles"
        }
    }
};
scw.travelUrl = function() {
    scw.page.h1 = scw.page.hArray[1];
    if (scw.page.hLength >= 3) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[2];
        scw.page.contentIdMatch = scw.page.reStandardContentId.test(scw.page.newUrl);
        if (!scw.page.contentIdMatch) {
            if (scw.page.hLength >= 4) {
                scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3]
            }
        } else {
            scw.page.h3 = scw.page.h2 + ">articles"
        }
    }
};
scw.futureUrl = function() {
    scw.page.h1 = scw.page.hArray[1];
    scw.page.newUrl = scw.page.newUrl.replace(/\/sections\//g, "/");
    scw.page.hArray = scw.page.newUrl.split("/");
    scw.page.hLength = scw.page.hArray.length;
    if (scw.page.hLength >= 3) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[2];
        scw.page.contentIdMatch = scw.page.reStandardContentId.test(scw.page.newUrl);
        if (!scw.page.contentIdMatch) {
            if (scw.page.hLength >= 4) {
                scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3]
            }
        } else {
            scw.page.h3 = scw.page.h2 + ">articles"
        }
    }
};
scw.blogsUrl = function() {
    scw.page.newUrl = scw.page.newUrl.replace(/\.shtml/g, "/");
    scw.page.hArray = scw.page.newUrl.split("/");
    scw.page.hLength = scw.page.hArray.length;
    scw.page.h1 = scw.page.hArray[1];
    if (scw.page.hLength >= 3) {
        scw.page.h2 = scw.page.h1 + ">" + scw.page.hArray[2];
        if (scw.page.hLength >= 4) {
            scw.page.h3 = scw.page.h2 + ">" + scw.page.hArray[3];
            if (scw.page.hLength >= 5) {
                scw.page.h4 = scw.page.h3 + ">" + scw.page.hArray[4]
            }
        }
    }
};
scw.radioUrl = function() {
    scw.page.h1 = scw.page.hArray[1]
};
scw.trim = function(a) {
    return a.trim ? a.trim() : a.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")
};
scw.trimHash = function(a) {
    if ( - 1 !== a.indexOf("#")) {
        return a.substring(0, a.indexOf("#"))
    }
    return a
};
scw.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}");
scw.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
scw.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");
scw.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
scw.p_c = new Function("v", "c", "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.length:x).toLowerCase()?v:0");
scw.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
scw.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
scw.trackRefresh = new Function("v", "c", "var s=this,a,t=new Date,x;t.setTime(t.getTime()+1800000);if(!s.c_r(c)){s.c_w(c,v,t);return v}else{x=unescape(s.c_r(c));if(x==v){x+='~[1]';s.c_w(c,x,0);return x}else{a=s.split(x,'~[');if(a[0]==v){i=parseInt(a[1])+1;x=a[0]+'~['+i+']';s.c_w(c,x,0);return x}else{s.c_w(c,v,0);return v}}}");
scw.getVisitNum = new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");
scw.getTimeToComplete = new Function("v", "cn", "e", "var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s.c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th=3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un='hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='seconds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
scw.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");
scw.getNewRepeat = new Function("var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s.c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cval+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else return 'Repeat';");
scw.getTimeParting = new Function("t", "z", "var s=this,cy;dc=new Date('1/1/2000');if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseFloat(z);var dsts=new Date(s.dstStart);var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}if(t=='d'){return dow};if(t=='w'){return dt}}};");
scw.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
scw.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
scw.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");
scw.channelManager = new Function("a", "b", "c", "V", "var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexOf('//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring(q,r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSearchEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g=s.repl(g,'as_q','*');}A=s.split(v,'>');B=A.length;for(C=0;C<B;C++){D=A[C];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;G<F;G++){H=j.indexOf(E[G]);if(H>-1){I=s.split(D[1],',');J=I.length;for(K=0;K<J;K++){L=s.getQueryParam(I[K],'',g);if(L){L=L.toLowerCase();M=L;if(D[2]){u=D[2];N=D[2]}else{N=t}if(V=='1'){N=s.repl(N,'#',' - ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle');}}}}}}}O=s.getQueryParam(a,b);if(O){u=O;if(M){P='Paid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Search'}f=s._channelDomain;if(f){k=s.split(f,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;if(d){k=s.split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.getQueryParam(R[T]);if(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&&!O){u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.getValOnce(T,U,0);}if(T)M=M?M:'n/a';s._referrer=T&&p?p:'';s._referringDomain=T&&t?t:'';s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campaign=T&&u?u:'';s._keywords=T&&M?M:'';s._channel=T&&P?P:'';");
scw.seList = "altavista.co|q,r|AltaVista>aol.co.uk,search.aol.co.uk|query|AOL - United Kingdom>search.aol.com,search.aol.ca|query,q|AOL.com Search>ask.com,ask.co.uk|ask,q|Ask Jeeves>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>google.co,googlesyndication.com|q,as_q|Google>google.com.ar|q,as_q|Google - Argentina>google.com.au|q,as_q|Google - Australia>google.at|q,as_q|Google - Austria>google.com.bh|q,as_q|Google - Bahrain>google.com.bd|q,as_q|Google - Bangladesh>google.be|q,as_q|Google - Belgium>google.com.bo|q,as_q|Google - Bolivia>google.ba|q,as_q|Google - Bosnia-Hercegovina>google.com.br|q,as_q|Google - Brasil>google.bg|q,as_q|Google - Bulgaria>google.ca|q,as_q|Google - Canada>google.cl|q,as_q|Google - Chile>google.cn|q,as_q|Google - China>google.com.co|q,as_q|Google - Colombia>google.co.cr|q,as_q|Google - Costa Rica>google.hr|q,as_q|Google - Croatia>google.cz|q,as_q|Google - Czech Republic>google.dk|q,as_q|Google - Denmark>google.com.do|q,as_q|Google - Dominican Republic>google.com.ec|q,as_q|Google - Ecuador>google.com.eg|q,as_q|Google - Egypt>google.com.sv|q,as_q|Google - El Salvador>google.ee|q,as_q|Google - Estonia>google.fi|q,as_q|Google - Finland>google.fr|q,as_q|Google - France>google.de|q,as_q|Google - Germany>google.gr|q,as_q|Google - Greece>google.com.gt|q,as_q|Google - Guatemala>google.hn|q,as_q|Google - Honduras>google.com.hk|q,as_q|Google - Hong Kong>google.hu|q,as_q|Google - Hungary>google.co.in|q,as_q|Google - India>google.co.id|q,as_q|Google - Indonesia>google.ie|q,as_q|Google - Ireland>google.is|q,as_q|Google - Island>google.co.il|q,as_q|Google - Israel>google.it|q,as_q|Google - Italy>google.com.jm|q,as_q|Google - Jamaica>google.co.jp|q,as_q|Google - Japan>google.jo|q,as_q|Google - Jordan>google.co.ke|q,as_q|Google - Kenya>google.co.kr|q,as_q|Google - Korea>google.lv|q,as_q|Google - Latvia>google.lt|q,as_q|Google - Lithuania>google.com.my|q,as_q|Google - Malaysia>google.com.mt|q,as_q|Google - Malta>google.mu|q,as_q|Google - Mauritius>google.com.mx|q,as_q|Google - Mexico>google.co.ma|q,as_q|Google - Morocco>google.nl|q,as_q|Google - Netherlands>google.co.nz|q,as_q|Google - New Zealand>google.com.ni|q,as_q|Google - Nicaragua>google.com.ng|q,as_q|Google - Nigeria>google.no|q,as_q|Google - Norway>google.com.pk|q,as_q|Google - Pakistan>google.com.py|q,as_q|Google - Paraguay>google.com.pe|q,as_q|Google - Peru>google.com.ph|q,as_q|Google - Philippines>google.pl|q,as_q|Google - Poland>google.pt|q,as_q|Google - Portugal>google.com.pr|q,as_q|Google - Puerto Rico>google.com.qa|q,as_q|Google - Qatar>google.ro|q,as_q|Google - Romania>google.ru|q,as_q|Google - Russia>google.st|q,as_q|Google - Sao Tome and Principe>google.com.sa|q,as_q|Google - Saudi Arabia>google.com.sg|q,as_q|Google - Singapore>google.sk|q,as_q|Google - Slovakia>google.si|q,as_q|Google - Slovenia>google.co.za|q,as_q|Google - South Africa>google.es|q,as_q|Google - Spain>google.lk|q,as_q|Google - Sri Lanka>google.se|q,as_q|Google - Sweden>google.ch|q,as_q|Google - Switzerland>google.com.tw|q,as_q|Google - Taiwan>google.co.th|q,as_q|Google - Thailand>google.bs|q,as_q|Google - The Bahamas>google.tt|q,as_q|Google - Trinidad and Tobago>google.com.tr|q,as_q|Google - Turkey>google.com.ua|q,as_q|Google - Ukraine>google.ae|q,as_q|Google - United Arab Emirates>google.co.uk|q,as_q|Google - United Kingdom>google.com.uy|q,as_q|Google - Uruguay>google.co.ve|q,as_q|Google - Venezuela>google.com.vn|q,as_q|Google - Viet Nam>google.co.vi|q,as_q|Google - Virgin Islands>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it|key|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,search.yahoo.com|p|Yahoo!>ar.yahoo.com,ar.search.yahoo.com|p|Yahoo! - Argentina>au.yahoo.com,au.search.yahoo.com|p|Yahoo! - Australia>ca.yahoo.com,ca.search.yahoo.com|p|Yahoo! - Canada>fr.yahoo.com,fr.search.yahoo.com|p|Yahoo! - France>de.yahoo.com,de.search.yahoo.com|p|Yahoo! - Germany>hk.yahoo.com,hk.search.yahoo.com|p|Yahoo! - Hong Kong>in.yahoo.com,in.search.yahoo.com|p|Yahoo! - India>yahoo.co.jp,search.yahoo.co.jp|p,va|Yahoo! - Japan>kr.yahoo.com,kr.search.yahoo.com|p|Yahoo! - Korea>mx.yahoo.com,mx.search.yahoo.com|p|Yahoo! - Mexico>ph.yahoo.com,ph.search.yahoo.com|p|Yahoo! - Philippines>sg.yahoo.com,sg.search.yahoo.com|p|Yahoo! - Singapore>es.yahoo.com,es.search.yahoo.com|p|Yahoo! - Spain>telemundo.yahoo.com,espanol.search.yahoo.com|p|Yahoo! - Spanish (US : Telemundo)>tw.yahoo.com,tw.search.yahoo.com|p|Yahoo! - Taiwan>uk.yahoo.com,uk.search.yahoo.com|p|Yahoo! - UK and Ireland>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";
scw.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
scw.loadModule("Survey");
var s_sv_dynamic_root = "survey.112.2o7.net/survey/dynamic";
var s_sv_gather_root = "survey.112.2o7.net/survey/gather";
scw.loadModule("Media");
scw.Media.autoTrack = false;
scw.Media.playerName = "EMP";
scw.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24";
scw.Media.trackWhilePlaying = true;
scw.Media.trackMilestones = "25,50,75";
scw.playUndefinedMovie = 0;
scw.stopUndefinedMovie = 0;
scw.adWasPlayed = false;
scw.eventsTracked = {};
scw.Media.monitor = function(a, b) {
    if (b.mediaEvent == "adPlay"&&!a.eventsTracked[b.mediaName].event4) {
        a.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24,prop55,eVar55";
        a.Media.trackEvents = "event4";
        a.events = "event4";
        a.Media.track(b.mediaName);
        a.eventsTracked[b.mediaName].event4 = true
    } else {
        if (b.mediaEvent == "adStop"&&!a.eventsTracked[b.mediaName].event5) {
            a.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24,prop55,eVar55";
            a.Media.trackEvents = "event5";
            a.events = "event5";
            a.Media.track(b.mediaName);
            a.eventsTracked[b.mediaName].event5 = true
        } else {
            if (b.mediaEvent == "contentPlay"&&!a.eventsTracked[b.mediaName].event6) {
                a.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24,prop55,eVar55";
                a.Media.trackEvents = "event6";
                a.events = "event6";
                a.Media.track(b.mediaName);
                a.eventsTracked[b.mediaName].event6 = true
            } else {
                if (b.mediaEvent == "contentStop"&&!a.eventsTracked[b.mediaName].event7) {
                    a.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24,prop55,eVar55";
                    a.Media.trackEvents = "event7";
                    a.events = "event7";
                    a.Media.track(b.mediaName);
                    a.eventsTracked[b.mediaName].event7 = true
                } else {
                    if (b.mediaEvent == "movieEnd"&&!a.eventsTracked[b.mediaName].event8) {
                        a.Media.trackVars = "events,eVar21,eVar22,eVar23,eVar24,prop55,eVar55";
                        a.Media.trackEvents = "event8";
                        a.events = "event8";
                        a.Media.track(b.mediaName);
                        a.eventsTracked[b.mediaName].event8 = true
                    }
                }
            }
        }
    }
};
scw.setMediaProperties = function(a) {
    scw.prop21 = a.mediaName;
    scw.prop22 = a.mediaType;
    scw.prop23 = a.mediaId;
    scw.prop24 = a.adId;
    scw.eVar21 = scw.prop21;
    scw.eVar22 = scw.prop22;
    scw.eVar23 = scw.prop23;
    scw.eVar24 = scw.prop24
};
scw.playStopAd = function(a) {
    a.mediaEvent = "adPlay";
    scw.Media.monitor(scw, a);
    a.mediaEvent = "adStop";
    scw.Media.monitor(scw, a)
};
scw.startMovie = function(b) {
    if ("undefined" == typeof(scw.eventsTracked[b.mediaName])) {
        scw.eventsTracked[b.mediaName] = {
            event3: false,
            event4: false,
            event5: false,
            event6: false,
            event7: false,
            event8: false
        }
    }
    if ("programme" == b.mediaType&&!scw.eventsTracked[b.mediaName].event3&&-1 !== b.mediaLength) {
        scw.Media.trackVars = "events,eVar6,prop6,eVar7,prop7,eVar8,prop8,eVar21,eVar22,eVar23,eVar24,eVar36,prop55,eVar55,prop57,eVar57";
        scw.Media.trackEvents = "event3";
        scw.events = "event3";
        scw.setMediaProperties(b);
        scw.Media.open(b.mediaName, b.mediaLength, b.mediaPlayerName);
        scw.eventsTracked[b.mediaName].event3 = true
    } else {
        if ("programme" == b.mediaType&&!scw.eventsTracked[b.mediaName].event3&&-1 === b.mediaLength) {
            scw.Media.trackVars = "events,eVar6,prop6,eVar7,prop7,eVar8,prop8,eVar21,eVar22,eVar23,eVar24,prop55,eVar55,prop57,eVar57";
            var a = "event3,event6";
            if (scw.adWasPlayed) {
                a = "event3,event4,event5,event6"
            }
            scw.Media.trackEvents = a;
            scw.events = a;
            scw.setMediaProperties(b);
            scw.Media.open(b.mediaName, b.mediaLength, b.mediaPlayerName);
            scw.setMediaProperties(b);
            scw.Media.play(b.mediaName, b.mediaOffset);
            scw.Media.stop(b.mediaName, b.mediaOffset);
            scw.Media.close(b.mediaName)
        }
    }
};
scw.playMovie = function(a) {
    scw.eVar36 = (typeof a.playType !== "undefined") ? a.playType : "unknown";
    if ("advert" == a.mediaType && 5 < a.mediaLength) {
        scw.adWasPlayed = true
    } else {
        if ("programme" == a.mediaType&&-1 !== a.mediaLength) {
            scw.setMediaProperties(a);
            scw.Media.play(a.mediaName, a.mediaOffset);
            if (scw.adWasPlayed) {
                scw.playStopAd(a)
            }
            a.mediaEvent = "contentPlay";
            scw.Media.monitor(scw, a)
        }
    }
};
scw.stopMovie = function(a) {
    if ("advert" == a.mediaType && 5 < a.mediaLength) {
        scw.adWasPlayed = true
    } else {
        if ("programme" == a.mediaType) {
            a.mediaEvent = "contentStop";
            scw.Media.monitor(scw, a);
            scw.setMediaProperties(a);
            scw.Media.stop(a.mediaName, a.mediaOffset)
        }
    }
};
scw.endMovie = function(a) {
    a.mediaEvent = "movieEnd";
    scw.Media.monitor(scw, a);
    scw.setMediaProperties(a);
    scw.Media.close(a.mediaName)
};
scw.trackingServer = "sa.bbc.com";
scw.trackingServerSecure = "ssa.bbc.com";
scw.visitorMigrationKey = "4F9A739C";
scw.visitorMigrationServer = "bbc.112.2o7.net";
scw.visitorMigrationServerSecure = "bbc.112.2o7.net";
scw.m_Survey_c = 'var m=s.m_i("Survey");m.launch=function(i,e,c,o,f){this._boot();var m=this,g=window.s_sv_globals||{},l,j;if(g.unloaded||m._blocked())return 0;i=i&&i.constructor&&i.constructor==Array?i:[i];l=g.manualTriggers;for(j=0;j<i.length;++j)l[l.length]={l:m._suites,i:i[j],e:e||0,c:c||0,o:o||0,f:f||0};m._execute();return 1;};m.version = 10001;m._t=function(){this._boot();var m=this,s=m.s,g=window.s_sv_globals||{},l,impr,i,k,impr={};if(m._blocked())return;for(i=0;i<s.va_t.length;i++){k=s.va_t[i];if(s[k]) impr[k]=s[k];}impr["l"]=m._suites;impr["n"]=impr["pageName"]||"";impr["u"]=impr["pageURL"]||"";impr["c"]=impr["campaign"]||"";impr["r"]=impr["referrer"]||"";l=g.pageImpressions;if(l.length > 4) l[l.length - 4]=null;l[l.length]=impr;m._execute();};m._rr=function(){var g=window.s_sv_globals||{},f=g.onScQueueEmpty||0;if(f)f();};m._blocked=function(){var m=this,g=window.s_sv_globals||{};return !m._booted||g.stop||!g.pending&&!g.triggerRequested;};m._execute=function(){if(s_sv_globals.execute)setTimeout("s_sv_globals.execute();",0);};m._boot=function(){var m=this,s=m.s,w=window,g,c,d=s.dc,e=s.visitorNamespace,n=navigator.appName.toLowerCase(),a=navigator.userAgent,v=navigator.appVersion,h,i,j,k,l,b;if(w.s_sv_globals)return;if(!((b=v.match(/AppleWebKit\\/([0-9]+)/))?521<b[1]:n=="netscape"?a.match(/gecko\\//i):(b=a.match(/opera[ \\/]?([0-9]+).[0-9]+/i))?7<b[1]:n=="microsoft internet explorer"&&!v.match(/macintosh/i)&&(b=v.match(/msie ([0-9]+).([0-9]+)/i))&&(5<b[1]||b[1]==5&&4<b[2])))return;g=w.s_sv_globals={};g.module=m;g.pending=0;g.incomingLists=[];g.pageImpressions=[];g.manualTriggers=[];e="survey";c=g.config={};m._param(c,"dynamic_root",(e?e+".":"")+d+".2o7.net/survey/dynamic");m._param(c,"gather_root",(e?e+".":"")+d+".2o7.net/survey/gather");g.url=location.protocol+"//"+c.dynamic_root;g.gatherUrl=location.protocol+"//"+c.gather_root;g.dataCenter=d;g.onListLoaded=new Function("r","b","d","i","l","s_sv_globals.module._loaded(r,b,d,i,l);");m._suites=(m.suites||s.un).toLowerCase().split(",");l=m._suites;b={};for(j=0;j<l.length;++j){i=l[j];if(i&&!b[i]){h=i.length;for(k=0;k<i.length;++k)h=(h&0x03ffffff)<<5^h>>26^i.charCodeAt(k);b[i]={url:g.url+"/suites/"+(h%251+100)+"/"+encodeURIComponent(i.replace(/\\|/,"||").replace(/\\//,"|-"))};++g.pending;}}g.suites=b;setTimeout("s_sv_globals.module._load();",0);m._booted=1;};m._param=function(c,n,v){var p="s_sv_",w=window,u="undefined";if(typeof c[n]==u)c[n]=typeof w[p+n]==u?v:w[p+n];};m._load=function(){var m=this,g=s_sv_globals,q=g.suites,r,i,n="s_sv_sid",b=m.s.c_r(n);if(!b){b=parseInt((new Date()).getTime()*Math.random());m.s.c_w(n,b);}for(i in q){r=q[i];if(!r.requested){r.requested=1;m._script(r.url+"/list.js?"+b);}}};m._loaded=function(r,b,d,i,l){var m=this,g=s_sv_globals,n=g.incomingLists;--g.pending;if(!g.commonRevision){g.bulkRevision=b;g.commonRevision=r;g.commonUrl=g.url+"/common/"+b;}else if(g.commonRevision!=r)return;if(!l.length)return;n[n.length]={r:i,l:l};if(g.execute)g.execute();else if(!g.triggerRequested){g.triggerRequested=1;m._script(g.commonUrl+"/trigger.js");}};m._script=function(u){var d=document,e=d.createElement("script");e.type="text/javascript";e.src=u;d.getElementsByTagName("head")[0].appendChild(e);};if(m.onLoad)m.onLoad(s,m)';
scw.m_i("Survey");
scw.m_Media_c = "var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){var m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x==1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.ape(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts;i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m.e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i.e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.pe=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
scw.m_i("Media");
var s_code = "", s_objectID;
function s_gi(h, j, y) {
    var o = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?decodeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=(typeof orb !== 'undefined' && orb.referrer !== 'undefined' && orb.referrer !== '' ? orb.referrer : tfs.document.referrer);if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()", q = window, f = q.s_c_il, b = navigator, t = b.userAgent, r = b.appVersion, k = r.indexOf("MSIE "), d = t.indexOf("Netscape6/"), p, g, x;
    if (h) {
        h = h.toLowerCase();
        if (f) {
            for (g = 0; g < f.length; g++) {
                x = f[g];
                if (!x._c || x._c == "s_c") {
                    if (x.oun == h) {
                        return x
                    } else {
                        if (x.fs && x.sa && x.fs(x.oun, h)) {
                            x.sa(h);
                            return x
                        }
                    }
                }
            }
        }
    }
    q.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    q.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    q.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    q.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    q.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    q.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    q.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
    q.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    o = s_d(o);
    if (k > 0) {
        p = parseInt(g = r.substring(k + 5));
        if (p > 3) {
            p = parseFloat(g)
        }
    } else {
        if (d > 0) {
            p = parseFloat(t.substring(d + 10))
        } else {
            p = parseFloat(r)
        }
    }
    if (p >= 5 && r.indexOf("Opera") < 0 && t.indexOf("Opera") < 0) {
        q.s_c = new Function("un", "pg", "ss", "var s=this;" + o);
        return new s_c(h, j, y)
    } else {
        x = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(o) + ";return s")
    }
    return x(h, j, y)
};
