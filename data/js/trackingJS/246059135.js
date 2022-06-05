
var _gaq = _gaq || [];





(function() {

    geolocation = {};
    geolocation.requestGeo = function(b, a, e) {
        if (e) {
            var d = {};
            document.cookie.replace(/([^\s;]*)=([^;]*)/ig, function(a, b, c) {
                100 >= c.length && 0 !== b.indexOf("optimizely") && (d["c_" + b] = unescape(c))
            });
            d.project = a;
            var a = [], c;
            for (c in d)
                d.hasOwnProperty(c) && a.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[c]));
            b += "?" + a.join("&")
        }
        c = b;
        b = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async=!0;
        a.src = c;
        b.insertBefore(a,
        b.firstChild)
    };

    geolocation.requestGeo("//cdn3.optimizely.com/js/geo2.js", 246059135, false);
})();
optimizelyCode = function() {
    var DATA = {
        "installation_verified": true,
        "log_host": "log.optimizely.com",
        "goal_expressions": {
            "1889040897": ["^32\\_survey\\_cta$"],
            "1970550018": ["^clicks\\_to\\_manually\\_start\\_dl$"],
            "570012550": ["^firefox\\_download\\_btn\\_clicks$"],
            "279137927": ["^(https?://)?(www\\.)?www\\-demo3\\.allizom\\.org\\/en\\-us/?(\\?.*)?(#.*)?$"],
            "856590984": ["^download\\ button\\ click$"],
            "1802411659": ["(https?://)?(www\\.)?\\/installer\\-help/?"],
            "1038422540": ["^users\\_click\\_survey\\_form\\_link$"],
            "430601358": ["^testgoals$"],
            "1995481310": ["^download\\_firefox\\_clicks\\_\\(en\\)$"],
            "695016981": ["^starttourcta$"],
            "279439510": ["^user\\_clicks\\_into\\_search\\_field\\_outside\\_of\\_tabzilla$"],
            "2026441244": ["^setmylanguageyes$"],
            "780061853": ["^download\\_clicks$"],
            "2004230050": ["^sumo\\_osx\\_link$"],
            "270562600": ["^user\\_clicks\\_into\\_search\\_field\\_on\\_mozilla\\.org\\_homepage$"],
            "1765462314": ["(https?://)?(www\\.)?\\/en\\-us\\/firefox\\/all/?"],
            "859230343": ["(https?://)?(www\\.)?\\/firstrun/?"],
            "2096960428": ["^.+/(new|firstrun)/$"],
            "1992101549": ["^download\\_firefox\\_clicks\\_\\(alt\\)$"],
            "2025800238": ["^download\\_english$"],
            "2098710319": [".+/firefox/new/$"],
            "277886344": ["^user\\_clicks\\_tabzilla\\_tab$"],
            "381770933": ["^user\\_interacts\\_with\\_newsletter\\_field$"],
            "2007361336": ["^download\\_alt\\_language$"],
            "1849760444": ["^installerhelpsupportlink$"],
            "1626567229": ["^download\\_firefox\\_clicks$"],
            "1978620171": ["^exits\\_to\\_support$"],
            "670480584": ["^downloadfirefoxbtn$"],
            "245569630": ["^engagement$"],
            "1970460112": [".*\\/en\\-US\\/firefox\\/.*\\/firstrun.*"],
            "1803290323": ["(https?://)?(www\\.)?\\/whatsnew/?"],
            "1994831192": ["^setmylanguageno$"],
            "1796580185": ["^user\\_clicks\\_survey\\_gizmo\\_link$"],
            "1386303066": ["^user\\_clicks\\_download\\_button$"],
            "1378884702": ["^user\\_clicks\\_download\\_button$"],
            "2008300801": ["^download\\_click\\_\\(custom\\)$"],
            "1871180010": ["^surveylink$"],
            "1984530030": ["^updatefxclick$"],
            "1847840496": ["^downloadbuttonclick$"],
            "1795710841": ["^download\\_fresh\\_copy\\_click$"],
            "402081274": ["^whatsnew\\:\\_learn\\_more\\_about\\_fxos$"]
        },
        "experiments": {
            "799420897": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://www-demo3.allizom.org/en-US/firefox/29.0/firstrun/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "First Run Doorhanger CTA Copy",
                "variation_ids": ["799360880", "799350921"],
                "enabled_variation_ids": ["799360880", "799350921"]
            },
            "682263427": {
                "conditions": [{
                    "not": true,
                    "type": "browser",
                    "values": ["mobile"]
                }, {
                    "type": "url",
                    "values": [{
                        "value": "http://www.mozilla.org/en-US/",
                        "match": "exact"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "Homepage Button Placement Test - draft",
                "variation_ids": ["680671500", "683234021", "678811099", "674770874", "672301725", "713450306", "703072713"],
                "ignore": 7500,
                "enabled_variation_ids": ["680671500", "683234021", "678811099", "674770874", "672301725", "713450306", "703072713"],
                "google_analytics": {
                    "slot": 2
                }
            },
            "956110660": {
                "conditions": [{
                    "not": true,
                    "type": "browser",
                    "values": ["mobile"]
                }, {
                    "type": "url",
                    "values": [{
                        "value": "/en/#video",
                        "match": "substring"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "new"
                }
                ],
                "name": "Glow Autoplay Test",
                "variation_ids": ["956060991", "970130755"],
                "enabled_variation_ids": ["956060991", "970130755"]
            },
            "2111720039": {
                "audiences": [2117111050],
                "name": "Windows XP non-SSL Downloads",
                "variation_ids": ["2112140121"],
                "urls": [{
                    "match": "substring",
                    "value": "/en-US/firefox/new/"
                }
                ],
                "enabled_variation_ids": ["2112140121"]
            },
            "591780041": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://www\\.mozilla\\.org\\/en-US\\/.*",
                        "match": "regex"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "Test Demo - allizom.org/en-US/firefox/new/",
                "variation_ids": ["589870028", "591000100", "1007150325"],
                "enabled_variation_ids": ["589870028", "591000100", "1007150325"]
            },
            "2215050254": {
                "audiences": [2103150139],
                "uses_geotargeting": true,
                "name": "Project Slim Fox (2)",
                "variation_ids": ["2230360006", "2219960269"],
                "ignore": 7500,
                "urls": [{
                    "match": "substring",
                    "value": "www.mozilla.org/en-US/firefox/new/"
                }
                ],
                "enabled_variation_ids": ["2230360006", "2219960269"],
                "google_analytics": {
                    "slot": 2
                }
            },
            "788723469": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://www-demo3.allizom.org/en-US/firefox/29.0/firstrun/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "First Run Doorhanger CTA Copy",
                "variation_ids": ["807630408", "787958016"],
                "enabled_variation_ids": ["807630408", "787958016"]
            },
            "277644334": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://www.mozilla.org/en-US/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "[ prod ] homepage search field test",
                "variation_ids": ["277476672", "277946777"],
                "enabled_variation_ids": ["277476672", "277946777"]
            },
            "656580047": {
                "name": "Draft Experiment",
                "variation_ids": ["655090046"],
                "urls": [{
                    "match": "simple",
                    "value": "http://www.mozilla.org/en-US/firefox/os/devices/"
                }
                ],
                "enabled_variation_ids": ["655090046"]
            },
            "2208520593": {
                "name": "whatsnew test",
                "variation_ids": ["2222740815", "2198570564"],
                "urls": [{
                    "match": "simple",
                    "value": "https://www.mozilla.org/en-US/firefox/33.1/whatsnew/?oldversion=33.0"
                }
                ],
                "enabled_variation_ids": ["2222740815", "2198570564"]
            },
            "789584689": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://start.mozilla.org",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "start.mozilla.org surveys",
                "variation_ids": ["794052083", "790754150"],
                "enabled_variation_ids": ["794052083", "790754150"]
            },
            "1997931122": {
                "audiences": [2022770066],
                "name": "Project Start Up - additional data collection",
                "variation_ids": ["1999480366", "2019210628"],
                "urls": [{
                    "match": "simple",
                    "value": "https://www.mozilla.org/en-US/firefox/new/?utm_source=fx36start&utm_medium=banner&utm_campaign=3.6EOLBlue"
                }
                ],
                "enabled_variation_ids": ["1999480366", "2019210628"]
            },
            "810691187": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://www.mozilla.org/en-US/firefox/29.0/firstrun/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "First Run CTA Copy 2",
                "variation_ids": ["810251317", "807731452"],
                "enabled_variation_ids": ["810251317", "807731452"]
            },
            "392680341": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://blog-dev.allizom.org/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "Blog search field test",
                "variation_ids": ["381281923", "381531756"],
                "enabled_variation_ids": ["381281923", "381531756"]
            },
            "2223290519": {
                "audiences": [2103150139],
                "uses_geotargeting": true,
                "name": "Project Slim Fox (1)",
                "variation_ids": ["2202080491", "2223350513"],
                "ignore": 7500,
                "urls": [{
                    "match": "substring",
                    "value": "www.mozilla.org/en-US/firefox/new/"
                }
                ],
                "enabled_variation_ids": ["2202080491", "2223350513"],
                "google_analytics": {
                    "slot": 2
                }
            },
            "395310584": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://www.mozilla.org",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "TEST Mozilla.org Newsletter field",
                "variation_ids": ["383421080", "387080538"],
                "enabled_variation_ids": ["383421080", "387080538"]
            },
            "383432733": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "https://blog-dev.allizom.org/",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "test for blog search",
                "variation_ids": ["383042382", "385251207"],
                "enabled_variation_ids": ["383042382", "385251207"]
            }
        },
        "audiences": {
            "2117111050": {
                "conditions": ["and", ["or", ["not", ["or", {
                    "dimension_id": 678461982,
                    "value": "mobile"
                }, {
                    "dimension_id": 678461982,
                    "value": "ff"
                }
                ]]], ["or", ["or", {
                    "dimension_id": 775744666,
                    "value": "function checkWindows()\n{\n  if (\n      ( navigator.userAgent.match(/Windows NT 5\\.1/) && navigator.userAgent.match(/MSIE/) && navigator.userAgent.match(/SV1/) )\n        || \n       ( navigator.userAgent.match(/Windows NT 5\\.1/) && navigator.userAgent.match(/Chrome/) )\n     )\n {\n    return true;\n }else{\n    return false;\n  }\n}\ncheckWindows();"
                }
                ]]],
                "name": "Windows XP + Non-Firefox + Non-Mobile"
            },
            "2022770066": {
                "conditions": ["and", ["or", ["or", {
                    "dimension_id": 678461982,
                    "value": "ff3"
                }
                ]]],
                "name": "Firefox 3 Users"
            },
            "1622575117": {
                "conditions": ["and", ["or", ["not", ["or", {
                    "dimension_id": 678461982,
                    "value": "mobile"
                }, {
                    "dimension_id": 678461982,
                    "value": "ff"
                }
                ]]], ["or", ["or", {
                    "dimension_id": 775744666,
                    "value": "function checkOSVersion()\n{\nif (navigator.userAgent.match(/Windows/)) {\n\n\nreturn true;\n}else{\n\n \nreturn false;\n}\n}\ncheckOSVersion(); "
                }
                ]]],
                "name": "Not Firefox, Not Mobile, Windows Only",
                "segment_id": 1623833307
            },
            "1855772625": {
                "conditions": ["and", ["or", ["or", {
                    "dimension_id": 1882150250,
                    "value": "US"
                }
                ]]],
                "name": "United States Visitors",
                "segment_id": 1867940538
            },
            "2084280018": {
                "conditions": ["and", ["or", ["or", {
                    "dimension_id": 678461982,
                    "value": "gc"
                }
                ]], ["or", ["or", {
                    "dimension_id": 707662484,
                    "value": "en-us"
                }
                ]]],
                "name": "Chrome + Language = en-US",
                "segment_id": 2083660019
            },
            "869221429": {
                "conditions": ["and", ["or", ["or", {
                    "dimension_id": 707662484,
                    "value": "en-us"
                }
                ]]],
                "name": "en-US lang",
                "segment_id": 869421433
            },
            "2103150139": {
                "conditions": ["and", ["or", ["not", ["or", {
                    "dimension_id": 678461982,
                    "value": "mobile"
                }, {
                    "dimension_id": 678461982,
                    "value": "ff"
                }
                ]]], ["or", ["or", {
                    "dimension_id": 775744666,
                    "value": "function checkOSVersion()\n{\nif (navigator.userAgent.match(/Windows/)) {\nreturn true;\n}else{\nreturn false;\n}\n}\ncheckOSVersion(); "
                }
                ]], ["or", ["or", {
                    "dimension_id": 707662484,
                    "value": "en-us"
                }
                ]], ["or", ["or", {
                    "dimension_id": 775744666,
                    "value": "function checkFirefox()\n{\nif (navigator.userAgent.match(/Firefox/)) {\nreturn false;\n}else{\nreturn true;\n}\n}\ncheckFirefox();"
                }
                ]], ["or", ["or", {
                    "dimension_id": 1758021135,
                    "value": "search"
                }
                ]], ["or", ["not", ["or", {
                    "dimension_id": 1882150250,
                    "value": "US"
                }
                ]]]],
                "name": "Not Firefox, Not Mobile, Windows Only, non US, non campaign source",
                "segment_id": 2104530157
            }
        },
        "www_host": "www.optimizely.com",
        "token_hash": "61f0eb749fd1a05665b9e205a7fc7a8c70ff50e507e629cae3fbf3792125e09e",
        "dimensions": {
            "775744666": {
                "condition_type": "code"
            },
            "707662484": {
                "condition_type": "language"
            },
            "1882150250": {
                "condition_type": "location"
            },
            "678461982": {
                "condition_type": "browser"
            },
            "1758021135": {
                "condition_type": "source_type"
            }
        },
        "summary_revenue_goal_id": 245621902,
        "public_suffixes": {
            "": [""],
            "mozilla.org": ["start.mozilla.org", "www.mozilla.org", "webwewant.mozilla.org"],
            "org\\": ["www\\.mozilla\\.org\\"],
            "allizom.org": ["www.allizom.org", "www-demo3.allizom.org", "blog-dev.allizom.org"]
        },
        "force_variation": true,
        "api_host": "api.optimizely.com",
        "variations": {
            "787958016": {
                "name": "Variation #1"
            },
            "381281923": {
                "name": "Original"
            },
            "2019210628": {
                "name": "Variation #1"
            },
            "385251207": {
                "name": "Variation #1"
            },
            "799350921": {
                "name": "Variation #1"
            },
            "680671500": {
                "name": "Original"
            },
            "383421080": {
                "name": "Original"
            },
            "277946777": {
                "code": "$(\"#nav-main\").css({\"position\":\"relative\", \"left\":\"-171px\", \"top\":0});\n$(\"#masthead\").append(\"<div id=\\\"optimizely_341756544\\\">...</div>\");\n$(\"#optimizely_341756544\").replaceWith(\"<div id=\\\"optimizely_341756544\\\"><li id=\\\"tabzilla-search\\\">          <a href=\\\"https://www.mozilla.org/community/directory.html?icn=tabz\\\">Website Directory</a>          <form title=\\\"Search Mozilla sites\\\" role=\\\"search\\\" action=\\\"//www.google.com/cse\\\">            <input type=\\\"hidden\\\" value=\\\"002443141534113389537:ysdmevkkknw\\\" name=\\\"cx\\\">            <input type=\\\"hidden\\\" value=\\\"FORID:0\\\" name=\\\"cof\\\">            <label for=\\\"q\\\">Search</label>            <input type=\\\"search\\\" placeholder=\\\"Search\\\" id=\\\"q\\\" name=\\\"q\\\">          </form>        </li></div>\");\n$(\"#optimizely_341756544 a\").replaceWith(\"<a href=\\\"https://www.mozilla.org/community/directory.html?icn=tabz\\\"></a>\");\n$(\"#optimizely_341756544\").css({\"position\":\"relative\", \"left\":598, \"top\":6, \"width\":242, \"height\":33, \"z-index\":3172000});",
                "name": "Variation #1"
            },
            "672301725": {
                "code": "$(\".download-content\").css({\"left\":\"7px\"});\n$(\".download-link\").css({\"position\":\"absolute\", \"left\":\"28px\", \"top\":\"12px\"});\n$(\"h3 > .js\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"h4 > strong\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"small.os_linux\").css({\"position\":\"absolute\", \"left\":\"68px\", \"top\":\"78px\"});\n$(\"h3 > .js\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\"});\n$(\"h3 > .js\").css({\"width\":\"151px\", \"position\":\"relative\", \"left\":\"449px\"});\n$(\"h3 > .js\").append(\"<img style=\\\"position: relative; left: 600px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\">\");\n$(\".container > header\").replaceWith(\"<header>\\n        <img class=\\\"fx-logo100p\\\" src=\\\"#\\\" style=\\\"position: relative; z-index=9999px\\\">\\n        <a href=\\\"/en-US/firefox/\\\" id=\\\"firefox-promo-link\\\">\\n          <h3><img style=\\\"position: relative; left: 449px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\"><noscript><img src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" width=\\\"250\\\" alt=\\\"Firefox\\\" height=\\\"100\\\"></noscript></h3>\\n          <h4><strong style=\\\"position: relative; left: 350px; top: 0px;\\\">Different by&nbsp;design</strong></h4>\\n        </a>\\n      </header>\");\n$(\".fx-logo100p\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/1fb713eedeed476f9e9e983c2d64e6f8.png\"});\n$(\".fx-logo100p\").css({\"z-index\":\"9999\", \"position\":\"absolute\", \"left\":\"-10px\",\"top\":\"-7px\"});\n$(\".download-subtitle\").html(\"FREE DOWNLOAD\");\n$(\"h4 > strong\").css({\"left\":\"358px\"});\n$(\"h3 > .js\").css({\"left\":\"457px\"});",
                "name": "V4: Original - Flipped + FxLogo Btn + Free CTA"
            },
            "591000100": {
                "code": "$(\".os_osx .download-title\").replaceWith(\"<strong class=\\\"download-title\\\">Upgrade</strong>\");\n$(\".os_osx .download-subtitle\").replaceWith(\"<span class=\\\"download-subtitle\\\">Download Firefox</span>\");",
                "name": "Variation #1"
            },
            "1999480366": {
                "name": "Original"
            },
            "810251317": {
                "name": "Original"
            },
            "674770874": {
                "code": "$(\".download-content\").css({\"left\":\"7px\"});\n$(\".download-link\").css({\"position\":\"absolute\", \"left\":\"28px\", \"top\":\"12px\"});\n$(\"h3 > .js\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"h4 > strong\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"small.os_linux\").css({\"position\":\"absolute\", \"left\":\"68px\", \"top\":\"78px\"});\n$(\".download-subtitle\").html(\"Download Firefox\");\n$(\"h3 > .js\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\"});\n$(\"h3 > .js\").css({\"width\":\"151px\", \"position\":\"relative\", \"left\":\"449px\"});\n$(\"h3 > .js\").append(\"<img style=\\\"position: relative; left: 600px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\">\");\n$(\".container > header\").replaceWith(\"<header>\\n        <img class=\\\"fx-logo100p\\\" src=\\\"#\\\" style=\\\"position: relative; z-index=9999px\\\">\\n        <a href=\\\"/en-US/firefox/\\\" id=\\\"firefox-promo-link\\\">\\n          <h3><img style=\\\"position: relative; left: 449px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\"><noscript><img src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" width=\\\"250\\\" alt=\\\"Firefox\\\" height=\\\"100\\\"></noscript></h3>\\n          <h4><strong style=\\\"position: relative; left: 350px; top: 0px;\\\">Different by&nbsp;design</strong></h4>\\n        </a>\\n      </header>\");\n$(\".fx-logo100p\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/1fb713eedeed476f9e9e983c2d64e6f8.png\"});\n$(\".fx-logo100p\").css({\"z-index\":\"9999\", \"position\":\"absolute\", \"left\":\"-10px\",\"top\":\"-7px\"});\n$(\"h4 > strong\").css({\"left\":\"358px\"});\n$(\"h3 > .js\").css({\"left\":\"457px\"});",
                "name": "V3: Original - Flipped + FxLogo Btn + DLFx CTA"
            },
            "956060991": {
                "name": "Autoplay Video"
            },
            "277476672": {
                "name": "Original"
            },
            "713450306": {
                "code": "$(\".download-subtitle\").html(\"Download Firefox\");",
                "name": "Original - DLFx CTA"
            },
            "970130755": {
                "code": "$(\"#tubeplayer-player-container-fd77ec7b-95ee-4627-b52b-256ed407a328\").replaceWith(\"<iframe src=\\\"https://www.youtube.com/embed/Xm5i5kbIXzc?autoplay=0&amp;autohide=1&amp;controls=1&amp;loop=0&amp;playlist&amp;rel=0&amp;fs=1&amp;wmode=transparent&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=1&amp;start=0&amp;theme=dark&amp;color=red&amp;playsinline=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.optimizelyedit.com\\\" title=\\\"YouTube video player\\\" allowfullscreen=\\\"1\\\" id=\\\"tubeplayer-player-container-fd77ec7b-95ee-4627-b52b-256ed407a328\\\" frameborder=\\\"0\\\" height=\\\"480\\\" width=\\\"853\\\"></iframe>\");\n$(\"#tubeplayer-player-container-147ad8e9-b13f-4e66-ba25-7740d424639b\").replaceWith(\"<iframe src=\\\"https://www.youtube.com/embed/Xm5i5kbIXzc?autoplay=0&amp;autohide=1&amp;controls=1&amp;loop=0&amp;playlist&amp;rel=0&amp;fs=1&amp;wmode=transparent&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=1&amp;start=0&amp;theme=dark&amp;color=red&amp;playsinline=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.optimizelyedit.com\\\" title=\\\"YouTube video player\\\" allowfullscreen=\\\"1\\\" id=\\\"tubeplayer-player-container-147ad8e9-b13f-4e66-ba25-7740d424639b\\\" frameborder=\\\"0\\\" height=\\\"480\\\" width=\\\"853\\\"></iframe>\");",
                "name": "Click Play Video"
            },
            "2198570564": {
                "name": "Variation #1"
            },
            "2230360006": {
                "code": "$(\".os_windows > .download-link\").attr({\"href\":\"https://download.mozilla.org/?product=firefox-33.0-stub&os=win&lang=en-US\"});",
                "name": "FX 33.0"
            },
            "807630408": {
                "name": "Original"
            },
            "703072713": {
                "code": "$(\".download-content\").css({\"left\":\"7px\"});\n$(\".download-link\").css({\"position\":\"absolute\", \"left\":\"28px\", \"top\":\"12px\"});\n$(\"h3 > .js\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"h4 > strong\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"small.os_linux\").css({\"position\":\"absolute\", \"left\":\"68px\", \"top\":\"78px\"});\n$(\"h3 > .js\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\"});\n$(\"h3 > .js\").css({\"width\":\"151px\", \"position\":\"relative\", \"left\":\"449px\"});\n$(\"h3 > .js\").append(\"<img style=\\\"position: relative; left: 600px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\">\");\n$(\".container > header\").replaceWith(\"<header>\\n        <img class=\\\"fx-logo100p\\\" src=\\\"#\\\" style=\\\"position: relative; z-index=9999px\\\">\\n        <a href=\\\"/en-US/firefox/\\\" id=\\\"firefox-promo-link\\\">\\n          <h3><img style=\\\"position: relative; left: 449px; top: 0px; width: 151px;\\\" class=\\\"js\\\" src=\\\"//cdn.optimizely.com/img/25134714/bd2edd225aa84eb9a755b42bdf87c12a.png\\\" data-src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" data-high-res=\\\"true\\\" alt=\\\"Firefox\\\" height=\\\"100\\\" width=\\\"250\\\"><noscript><img src=\\\"//mozorg.cdn.mozilla.net/media/img/home/firefox-logo-wordmark.png\\\" width=\\\"250\\\" alt=\\\"Firefox\\\" height=\\\"100\\\"></noscript></h3>\\n          <h4><strong style=\\\"position: relative; left: 350px; top: 0px;\\\">Different by&nbsp;design</strong></h4>\\n        </a>\\n      </header>\");\n$(\".fx-logo100p\").attr({\"src\":\"//cdn.optimizely.com/img/25134714/1fb713eedeed476f9e9e983c2d64e6f8.png\"});\n$(\".fx-logo100p\").css({\"z-index\":\"9999\", \"position\":\"absolute\", \"left\":\"-10px\",\"top\":\"-7px\"});\n$(\".download-subtitle\").html(\"FREE DOWNLOAD\");\n$(\"h4 > strong\").css({\"left\":\"358px\"});\n$(\"h3 > .js\").css({\"left\":\"457px\"});\n$(\".fx-logo100p\").append(\"<style type='text/css'>@media all and (max-width: 800px) and (min-width: 520px) {img {position:absolute;left:-9999px;}}</style>\");",
                "name": "testing code"
            },
            "589870028": {
                "name": "Original"
            },
            "2219960269": {
                "code": "$(\".os_windows > .download-link\").attr({\"href\":\"https://download.mozilla.org/?product=firefox-29.0.1-stub&os=win&lang=en-US\"});",
                "name": "FX 29.0.1"
            },
            "383042382": {
                "name": "Original"
            },
            "2222740815": {
                "name": "Original"
            },
            "2112140121": {
                "code": "$(\".os_windows > .download-link\").attr({\"href\":\"http://download.mozilla.org/?product=firefox-33.0&os=win&lang=en-US\"});",
                "name": "Original"
            },
            "387080538": {
                "name": "Variation #1"
            },
            "678811099": {
                "code": "$(\".download-content\").css({\"left\":\"0px\"});\n$(\".download-link\").css({\"position\":\"absolute\", \"left\":\"0px\", \"top\":\"12px\"});\n$(\"h3 > .js\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"h4 > strong\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"small.os_linux\").css({\"position\":\"absolute\", \"left\":\"25px\", \"top\":\"78px\"});\n$(\".download-subtitle\").html(\"Download Firefox\");",
                "name": "V2: Original - Flipped + DLFx CTA"
            },
            "683234021": {
                "code": "$(\".download-content\").css({\"left\":\"0px\"});\n$(\".download-link\").css({\"position\":\"absolute\", \"left\":\"0px\", \"top\":\"12px\"});\n$(\"h3 > .js\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"h4 > strong\").css({\"position\":\"relative\", \"left\":\"358px\", \"top\":0});\n$(\"small.os_linux\").css({\"position\":\"absolute\", \"left\":\"25px\", \"top\":\"78px\"});",
                "name": "V1: Original - Flipped"
            },
            "790754150": {
                "code": "$(\"#frame > tbody > tr:eq(2) > td:eq(0) > table:eq(0) > tbody:eq(0) > tr:eq(0) > td:eq(1) > table:eq(0) > tbody:eq(0) > tr:eq(0) > td:eq(1) > table:eq(1) > tbody:eq(0) > tr:eq(0) > td:eq(0)\").replaceWith(\"<td nowrap=\\\"nowrap\\\" style=\\\"width: 394; overflow: hidden;\\\">\\n                                    <input name=\\\"client\\\" value=\\\"firefox-a\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"rls\\\" value=\\\"org.mozilla:en-US:official\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"channel\\\" value=\\\"s\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"hl\\\" value=\\\"en-US\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"source\\\" value=\\\"hp\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"biw\\\" type=\\\"hidden\\\">\\n                                    <input name=\\\"bih\\\" type=\\\"hidden\\\">\\n                                    <input style=\\\"outline: medium none; width: 374px;\\\" spellcheck=\\\"false\\\" autocomplete=\\\"off\\\" id=\\\"sf\\\" maxlength=\\\"256\\\" name=\\\"q\\\" dir=\\\"ltr\\\">\\n                                    <br>\\n                                    <input value=\\\"Google Search\\\" name=\\\"btnG\\\" type=\\\"submit\\\">\\n  <br><br><a href=\\\"http://www.mozilla.org\\\">test link </a>\\n                                  </td>\");",
                "name": "Variation #1"
            },
            "2202080491": {
                "code": "$(\".os_windows > .download-link\").attr({\"href\":\"https://download.mozilla.org/?product=firefox-33.0-stub&os=win&lang=en-US\"});",
                "name": "FX 33.0"
            },
            "381531756": {
                "name": "Variation #1"
            },
            "799360880": {
                "name": "Original"
            },
            "2223350513": {
                "code": "$(\".os_windows > .download-link\").attr({\"href\":\"https://download.mozilla.org/?product=firefox-29.0.1-stub&os=win&lang=en-US\"});",
                "name": "FX 29.0.1"
            },
            "794052083": {
                "name": "Original"
            },
            "1007150325": {
                "code": "$(\".os_osx .download-title\").html(\"Upgrade\");",
                "name": "Variation #2"
            },
            "807731452": {
                "code": "$(\"#strings\").attr(\"data-start\", \"xxxxxxxxx\");\n$(\"#strings\").attr(\"data-title\", \"xxxxxxxxx\");",
                "name": "Variation #1"
            },
            "655090046": {
                "code": "$(\"#page-alcatel_onetouchfire-features > .logo-colors\").replaceWith(\"<div class=\\\"feature-group logo-colors\\\">\\n                  <img src=\\\"//mozorg.cdn.mozilla.net/media/img/firefox/os/devices/smartphones/alcatel-onetouchfire-logo.png\\\" alt=\\\"One Touch Fire\\\">\\n\\n                  <em>Set your world on fire</em>\\n                  <a style=\\\"display: inline;\\\" id=\\\"purchase-device\\\" href=\\\"#\\\" class=\\\"purchase-button arrow-link button\\\">Get a phone</a>\\n\\n                                  </div>\");",
                "name": "Original"
            }
        },
        "version": "master-1737.380361536492391182",
        "admin_account_id": 25134714,
        "blacklisted_experiments": [2137060612, 1959190447, 1622200580, 1970310409, 1787180811, 1758511116, 1762870041, 1035553166, 1801780113, 2021580697, 1936312216, 2230520416, 699901594, 1999880475, 1936520220, 1627697221, 1898750405, 2113830181, 2100570023, 1687180316, 2000380330, 1382360135, 594291245, 2031930524, 1801660207, 1359970071, 1920350130, 569471256, 1894710580, 780180766, 1764450360, 2105700154, 603950139, 2000760186, 1914330592, 791979716, 2220400837, 1914481238, 2215120072, 2106630220, 759087566, 1773961298, 1852380117, 788411990, 2113250007, 2002940765, 786825054, 1918800096, 1849020004, 2126230918, 590851815, 703764459, 1964450156, 1995420145, 2233440370, 2108940021, 2111340023, 591540344, 2099730016, 1980440058, 1886510334, 794180991],
        "project_id": 246059135,
        "segments": {
            "245875585": {
                "segment_value_type": "source_type",
                "api_name": "optimizely_source_type",
                "id": 245875585,
                "name": "Source Type"
            },
            "2083660019": {
                "audience_id": 2084280018,
                "id": 2083660019,
                "name": "Chrome + Language = en-US"
            },
            "245617832": {
                "segment_value_type": "campaign",
                "api_name": "optimizely_campaign",
                "id": 245617832,
                "name": "Campaign"
            },
            "246048108": {
                "segment_value_type": "mobile",
                "api_name": "optimizely_mobile",
                "id": 246048108,
                "name": "Mobile Visitors"
            },
            "2104530157": {
                "audience_id": 2103150139,
                "id": 2104530157,
                "uses_geotargeting": true,
                "name": "Not Firefox, Not Mobile, Windows Only, en-US"
            },
            "245677587": {
                "segment_value_type": "browser",
                "api_name": "optimizely_browser",
                "id": 245677587,
                "name": "Browser"
            },
            "869421433": {
                "audience_id": 869221429,
                "api_name": "enus_visitors",
                "id": 869421433,
                "name": "en-US visitors"
            },
            "1867940538": {
                "audience_id": 1855772625,
                "id": 1867940538,
                "uses_geotargeting": true,
                "name": "United States Visitors"
            },
            "1623833307": {
                "audience_id": 1622575117,
                "id": 1623833307,
                "name": "Not Firefox, Not Mobile"
            }
        },
        "click_goals": [{
            "event_name": "user_clicks_into_search_field_on_mozilla.org_homepage",
            "experiments": {
                "270570185": true
            },
            "selector": "#q"
        }, {
            "event_name": "user_clicks_tabzilla_tab",
            "experiments": {
                "279421310": true
            },
            "selector": "#tabzilla"
        }, {
            "event_name": "user_clicks_into_search_field_outside_of_tabzilla",
            "experiments": {
                "279421310": true
            },
            "selector": "#optimizely_937113525 input#q"
        }, {
            "event_name": "user_interacts_with_newsletter_field",
            "experiments": {
                "395310584": true
            },
            "selector": "#id_email"
        }, {
            "event_name": "firefox_download_btn_clicks",
            "url_conditions": {
                "values": [{
                    "match": "substring",
                    "value": "/firefox/new/"
                }
                ]
            },
            "selector": ".download-content"
        }, {
            "event_name": "DownloadFirefoxBtn",
            "experiments": {
                "1999880475": true,
                "682263427": true
            },
            "selector": ".download-content"
        }, {
            "event_name": "StartTourCTA",
            "experiments": {
                "703764459": true
            },
            "selector": "#start-tour-btn"
        }, {
            "event_name": "download_clicks",
            "experiments": {
                "2000380330": true,
                "1622200580": true,
                "1997931122": true,
                "780180766": true
            },
            "selector": ".download-content"
        }, {
            "event_name": "Download Button Click",
            "url_conditions": {
                "values": [{
                    "match": "substring",
                    "value": "/firefox/new/"
                }
                ]
            },
            "selector": ".download-content"
        }, {
            "event_name": "users_click_survey_form_link",
            "experiments": {
                "1035553166": true
            },
            "selector": "#optimizely_136490554"
        }, {
            "event_name": "user_clicks_download_button",
            "experiments": {
                "1359970071": true
            },
            "selector": ".os_osx > .download-link"
        }, {
            "event_name": "user_clicks_download_button",
            "experiments": {
                "1382360135": true
            },
            "selector": ".os_osx > .download-link"
        }, {
            "event_name": "download_firefox_clicks",
            "experiments": {
                "2000760186": true,
                "2137060612": true,
                "1627697221": true
            },
            "selector": ".download-content"
        }, {
            "event_name": "download_fresh_copy_click",
            "experiments": {
                "1773961298": true
            },
            "selector": ".download-fresh-copy"
        }, {
            "event_name": "user_clicks_survey_gizmo_link",
            "experiments": {
                "1764450360": true,
                "1914481238": true
            },
            "selector": "div#optimizely_848730741 > a"
        }, {
            "event_name": "downloadbuttonclick",
            "experiments": {
                "1852380117": true
            },
            "selector": ".download-content"
        }, {
            "event_name": "installerhelpsupportlink",
            "experiments": {
                "1852380117": true
            },
            "selector": "#supportLink"
        }, {
            "event_name": "surveylink",
            "experiments": {
                "1852380117": true
            },
            "selector": "#surveyLink"
        }, {
            "event_name": "32_survey_cta",
            "experiments": {
                "1898750405": true
            },
            "selector": ".surveyLink"
        }, {
            "event_name": "clicks_to_manually_start_dl",
            "experiments": {
                "1936312216": true,
                "2031930524": true
            },
            "selector": ".manualstart"
        }, {
            "event_name": "exits_to_support",
            "experiments": {
                "1936312216": true,
                "2031930524": true
            },
            "selector": "#nav-main-support > a, .help a"
        }, {
            "event_name": "updatefxclick",
            "experiments": {
                "1959190447": true
            },
            "selector": ".updateClick, .download-content"
        }, {
            "event_name": "download_firefox_clicks_(alt)",
            "experiments": {
                "2000760186": true
            },
            "selector": ".download-link-alt"
        }, {
            "event_name": "setmylanguageno",
            "experiments": {
                "1999880475": true
            },
            "selector": ".btn-cancel"
        }, {
            "event_name": "download_firefox_clicks_(en)",
            "experiments": {
                "2000760186": true
            },
            "selector": ".download-link-en"
        }, {
            "event_name": "sumo_osx_link",
            "experiments": {
                "2000380330": true
            },
            "selector": ".sumo-osx-link"
        }, {
            "event_name": "download_alt_language",
            "experiments": {
                "2002940765": true
            },
            "selector": ".download-alt"
        }, {
            "event_name": "download_click_(custom)",
            "experiments": {
                "2002940765": true
            },
            "selector": ".download-click"
        }, {
            "event_name": "download_english",
            "experiments": {
                "2002940765": true
            },
            "selector": ".download-en"
        }, {
            "event_name": "setmylanguageyes",
            "experiments": {
                "1999880475": true
            },
            "selector": ".btn-accept"
        }
        ],
        "revision": 1123
    };

    var optly = {
        nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function() {
        var a = document.getElementsByClassName;
        if (!optly.nativity.isNativeFunction(a))
            var a = (window.optimizely || {}).getElementsByClassName, b = (window.optly || {}).getElementsByClassName, a = optly.nativity.isNativeFunction(a) ? a: optly.nativity.isNativeFunction(b) ? b: null;
        return a
    };
    optly.nativity.isNativeFunction = function(a) {
        return a&&-1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function(a, b, d) {
        var h=!!Object.prototype.__lookupGetter__, e=!!Object.prototype.__lookupSetter__, c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = h ? a.__lookupGetter__(c): null, g = e ? a.__lookupSetter__(c): null;
                try {
                    b.call(d, c, !f ? a[c] : null, f, g)
                } catch (i) {}
        }
    };
    optly.Cleanse.finish = function() {
        if (optly.Cleanse.running) {
            optly.Cleanse.running=!1;
            optly.Cleanse.each(optly.Cleanse.types, function(a, d) {
                Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function(c, b) {
                    d.prototype.__defineGetter__(c, b);
                    optly.Cleanse.log("restored getter", a, c)
                });
                Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function(c, b) {
                    d.prototype.__defineSetter__(c, b);
                    optly.Cleanse.log("restored setter", a, c)
                });
                optly.Cleanse.each(optly.Cleanse.properties[a],
                function(b, f) {
                    d.prototype[b] = f;
                    optly.Cleanse.log("restored property", a, b)
                })
            });
            optly.Cleanse.unfixGetElementsByClassName();
            optly.Cleanse.log("finish");
            var a = window.console;
            if (( - 1 !== window.location.hash.indexOf("optimizely_log=true")||-1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
                for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++)
                    a.log(b[d])
        }
    };
    optly.Cleanse.log = function(a, b, d) {
        b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function() {
        var a = window.location.hostname;
        if (!( - 1 !== a.indexOf("optimizely")&&-1 === a.indexOf("edit")&&-1 === a.indexOf("preview")&&-1 === a.indexOf("test")))
            if (optly.Cleanse.running)
                optly.Cleanse.log("already running so didn't start");
            else {
                optly.Cleanse.log("start");
                optly.Cleanse.running=!0;
                for (var b in optly.Cleanse.types)
                    optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
                    optly.Cleanse.each(optly.Cleanse.types, function(a, b) {
                        optly.Cleanse.getters[a] = {};
                        optly.Cleanse.properties[a] =
                        {};
                        optly.Cleanse.setters[a] = {};
                        optly.Cleanse.each(b.prototype, function(e, c, f, g) {
                            optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
                        })
                    });
                    optly.Cleanse.fixGetElementsByClassName();
                    optly.Cleanse.hasRunStart=!0
            }
        };
    optly.Cleanse.fixGetElementsByClassName = function() {
        if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
            var a = optly.nativity.getNativeGetElementsByClassName();
            a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
        }
    };
    optly.Cleanse.unfixGetElementsByClassName = function() {
        optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
        Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
        finish: optly.Cleanse.finish,
        logs: optly.Cleanse.logs,
        start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = function(r, m) {
        function ya(a, b, c) {
            if (c === m && 1 === a.nodeType)
                if (c = "data-" + b.replace(kb, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                    try {
                        c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : !d.isNaN(c) ? parseFloat(c) : lb.test(c) ? d.parseJSON(c) : c
                    } catch (g) {}
                    d.data(a, b, c)
                } else 
                    c = m;
            return c
        }
        function ha(a) {
            for (var b in a)
                if ("toJSON" !== b)
                    return !1;
            return !0
        }
        function za(a, b, c) {
            var g = b + "defer", e = b + "queue", f = b + "mark", h = d.data(a, g, m, !0);
            h && (("queue" === c ||!d.data(a, e, m, !0)) && ("mark" === c ||!d.data(a,
            f, m, !0))) && setTimeout(function() {
                !d.data(a, e, m, !0)&&!d.data(a, f, m, !0) && (d.removeData(a, g, !0), h.resolve())
            }, 0)
        }
        function w() {
            return !1
        }
        function O() {
            return !0
        }
        function Aa(a, b, c) {
            var g = d.extend({}, c[0]);
            g.type = a;
            g.originalEvent = {};
            g.liveFired = m;
            d.event.handle.call(b, g);
            g.isDefaultPrevented() && c[0].preventDefault()
        }
        function mb(a) {
            var b, c, g, e, f, h, i, j, k, m, l, q = [];
            e = [];
            f = d._data(this, "events");
            if (!(a.liveFired === this ||!f ||!f.live || a.target.disabled || a.button && "click" === a.type)) {
                a.namespace && (l = RegExp("(^|\\.)" +
                a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var n = f.live.slice(0);
                for (i = 0; i < n.length; i++)
                    f = n[i], f.origType.replace(ia, "") === a.type ? e.push(f.selector) : n.splice(i--, 1);
                e = d(a.target).closest(e, a.currentTarget);
                j = 0;
                for (k = e.length; j < k; j++) {
                    m = e[j];
                    for (i = 0; i < n.length; i++)
                        if (f = n[i], m.selector === f.selector && (!l || l.test(f.namespace))&&!m.elem.disabled) {
                            h = m.elem;
                            g = null;
                            if ("mouseenter" === f.preType || "mouseleave" === f.preType)
                                a.type = f.preType, (g = d(a.relatedTarget).closest(f.selector)[0]) &&
                                d.contains(h, g) && (g = h);
                                (!g || g !== h) && q.push({
                                    elem: h,
                                    handleObj: f,
                                    level: m.level
                                })
                        }
                }
                j = 0;
                for (k = q.length; j < k; j++) {
                    e = q[j];
                    if (c && e.level > c)
                        break;
                    a.currentTarget = e.elem;
                    a.data = e.handleObj.data;
                    a.handleObj = e.handleObj;
                    l = e.handleObj.origHandler.apply(e.elem, arguments);
                    if (!1 === l || a.isPropagationStopped())
                        if (c = e.level, !1 === l && (b=!1), a.isImmediatePropagationStopped())
                            break
                }
                return b
            }
        }
        function P(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(nb, "`").replace(ob, "&")
        }
        function Ba(a, b, c) {
            b = b || 0;
            if (d.isFunction(b))
                return d.grep(a,
                function(a, g) {
                    return !!b.call(a, g, a) === c
                });
            if (b.nodeType)
                return d.grep(a, function(a) {
                    return a === b === c
                });
            if ("string" === typeof b) {
                var g = d.grep(a, function(a) {
                    return 1 === a.nodeType
                });
                if (pb.test(b))
                    return d.filter(b, g, !c);
                b = d.filter(b, g)
            }
            return d.grep(a, function(a) {
                return 0 <= d.inArray(a, b) === c
            })
        }
        function Ca(a, b) {
            if (1 === b.nodeType && d.hasData(a)) {
                var c = d.expando, g = d.data(a), e = d.data(b, g);
                if (g = g[c]) {
                    var f = g.events, e = e[c] = d.extend({}, g);
                    if (f) {
                        delete e.handle;
                        e.events = {};
                        for (var h in f) {
                            c = 0;
                            for (g = f[h].length; c <
                            g; c++)
                                d.event.add(b, h + (f[h][c].namespace ? "." : "") + f[h][c].namespace, f[h][c], f[h][c].data)
                            }
                    }
                }
            }
        }
        function Da(a, b) {
            var c;
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                c = b.nodeName.toLowerCase();
                if ("object" === c)
                    b.outerHTML = a.outerHTML;
                else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                    if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value)
                        b.value = a.value
                } else if ("option" === c)
                    b.selected = a.defaultSelected;
                else if ("input" === c ||
                "textarea" === c)
                    b.defaultValue = a.defaultValue;
                b.removeAttribute(d.expando)
            }
        }
        function Q(a) {
            return "getElementsByTagName"in a ? a.getElementsByTagName("*") : "querySelectorAll"in a ? a.querySelectorAll("*") : []
        }
        function Ea(a) {
            if ("checkbox" === a.type || "radio" === a.type)
                a.defaultChecked = a.checked
        }
        function Fa(a) {
            d.nodeName(a, "input") ? Ea(a) : "getElementsByTagName"in a && d.grep(a.getElementsByTagName("input"), Ea)
        }
        function qb(a, b) {
            b.src ? d.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : d.globalEval((b.text || b.textContent ||
            b.innerHTML || "").replace(rb, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }
        function Ga(a, b, c) {
            var g = "width" === b ? a.offsetWidth: a.offsetHeight, e = "width" === b ? sb: tb;
            if (0 < g)
                return "border" !== c && d.each(e, function() {
                    c || (g -= parseFloat(d.css(a, "padding" + this)) || 0);
                    g = "margin" === c ? g + (parseFloat(d.css(a, c + this)) || 0) : g - (parseFloat(d.css(a, "border" + this + "Width")) || 0)
                }), g + "px";
            g = A(a, b, b);
            if (0 > g || null == g)
                g = a.style[b] || 0;
            g = parseFloat(g) || 0;
            c && d.each(e, function() {
                g += parseFloat(d.css(a, "padding" + this)) || 0;
                "padding" !==
                c && (g += parseFloat(d.css(a, "border" + this + "Width")) || 0);
                "margin" === c && (g += parseFloat(d.css(a, c + this)) || 0)
            });
            return g + "px"
        }
        var l = r.document, d, Ha = function() {
            if (!k.isReady) {
                try {
                    l.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(Ha, 1);
                    return 
                }
                k.ready()
            }
        }, k = function(a, b) {
            return new k.fn.init(a, b, Ia)
        }, ub = r.jQuery, vb = r.$, Ia, wb = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Ja = /\S/, Ka = /^\s+/, La = /\s+$/, xb = /\d/, yb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, zb = /^[\],:{}\s]*$/, Ab = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, Bb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Cb = /(?:^|:|,)(?:\s*\[)+/g, Db = /(webkit)[ \/]([\w.]+)/, Eb = /(opera)(?:.*version)?[ \/]([\w.]+)/, Fb = /(msie) ([\w.]+)/, Gb = /(mozilla)(?:.*? rv:([\w.]+))?/, Hb = /-([a-z]|[0-9])/ig, Ib = /^-ms-/, Jb = function(a, b) {
            return (b + "").toUpperCase()
        }, Kb = r.navigator.userAgent, R, S, B, Lb = Object.prototype.toString, ja = Object.prototype.hasOwnProperty, ka = Array.prototype.push, I = Array.prototype.slice, Ma = String.prototype.trim, Na = Array.prototype.indexOf, Oa = {};
        k.fn = k.prototype = {
            constructor: k,
            init: function(a, b, c) {
                var g;
                if (!a)
                    return this;
                if (a.nodeType)
                    return this.context = this[0] = a, this.length = 1, this;
                if ("body" === a&&!b && l.body)
                    return this.context = l, this[0] = l.body, this.selector = a, this.length = 1, this;
                if ("string" === typeof a) {
                    if ((g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wb.exec(a)) && (g[1] ||!b)) {
                        if (g[1])
                            return c = (b = b instanceof k ? b[0] : b) ? b.ownerDocument || b : l, (a = yb.exec(a)) ? k.isPlainObject(b) ? (a = [l.createElement(a[1])], k.fn.attr.call(a, b, !0)) : a = [c.createElement(a[1])] : (a = k.buildFragment([g[1]], [c]), a = (a.cacheable ?
                            k.clone(a.fragment) : a.fragment).childNodes), k.merge(this, a);
                        if ((b = l.getElementById(g[2])) && b.parentNode) {
                            if (b.id !== g[2])
                                return c.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = l;
                        this.selector = a;
                        return this
                    }
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (k.isFunction(a))
                    return c.ready(a);
                a.selector !== m && (this.selector = a.selector, this.context = a.context);
                return k.makeArray(a, this)
            },
            selector: "",
            jquery: "1.6.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return I.call(this,
                0)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var g = this.constructor();
                k.isArray(a) ? ka.apply(g, a) : k.merge(g, a);
                g.prevObject = this;
                g.context = this.context;
                "find" === b ? g.selector = this.selector + (this.selector ? " " : "") + c : b && (g.selector = this.selector + "." + b + "(" + c + ")");
                return g
            },
            each: function(a, b) {
                return k.each(this, a, b)
            },
            ready: function(a) {
                k.bindReady();
                S.done(a);
                return this
            },
            eq: function(a) {
                return - 1 === a ? this.slice(a) : this.slice(a, + a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(k.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ka,
            sort: [].sort,
            splice: [].splice
        };
        k.fn.init.prototype = k.fn;
        k.extend = k.fn.extend = function() {
            var a, b, c, g, d, f = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
            "boolean" === typeof f && (j = f, f = arguments[1] || {}, h = 2);
            "object" !==
            typeof f&&!k.isFunction(f) && (f = {});
            i === h && (f = this, --h);
            for (; h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        c = f[b], g = a[b], f !== g && (j && g && (k.isPlainObject(g) || (d = k.isArray(g))) ? (d ? (d=!1, c = c && k.isArray(c) ? c : []) : c = c && k.isPlainObject(c) ? c : {}, f[b] = k.extend(j, c, g)) : g !== m && (f[b] = g));
            return f
        };
        k.extend({
            noConflict: function(a) {
                r.$ === k && (r.$ = vb);
                a && r.jQuery === k && (r.jQuery = ub);
                return k
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? k.readyWait++ : k.ready(!0)
            },
            ready: function(a) {
                if (!0 === a&&!--k.readyWait ||!0 !== a &&
                !k.isReady) {
                    if (!l.body)
                        return setTimeout(k.ready, 1);
                    k.isReady=!0;
                    !0 !== a && 0<--k.readyWait || (S.resolveWith(l, [k]), k.fn.trigger && k(l).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function() {
                if (!S) {
                    S = k._Deferred();
                    if ("complete" === l.readyState)
                        return setTimeout(k.ready, 1);
                    if (l.addEventListener)
                        l.addEventListener("DOMContentLoaded", B, !1), r.addEventListener("load", k.ready, !1);
                    else if (l.attachEvent) {
                        l.attachEvent("onreadystatechange", B);
                        r.attachEvent("onload", k.ready);
                        var a=!1;
                        try {
                            a = null == r.frameElement
                        } catch (b) {}
                        l.documentElement.doScroll &&
                        a && Ha()
                    }
                }
            },
            isFunction: function(a) {
                return "function" === k.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === k.type(a)
            },
            isWindow: function(a) {
                return a && "object" === typeof a && "setInterval"in a
            },
            isNaN: function(a) {
                return null == a ||!xb.test(a) || isNaN(a)
            },
            type: function(a) {
                return null == a ? String(a) : Oa[Lb.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== k.type(a) || a.nodeType || k.isWindow(a))
                    return !1;
                try {
                    if (a.constructor&&!ja.call(a, "constructor")&&!ja.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (b) {
                    return !1
                }
                for (var c in a);
                return c === m || ja.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a)
                    return !1;
                return !0
            },
            error: function(a) {
                throw a;
            },
            parseJSON: function(a) {
                if ("string" !== typeof a ||!a)
                    return null;
                a = k.trim(a);
                if (r.JSON && r.JSON.parse)
                    return r.JSON.parse(a);
                if (zb.test(a.replace(Ab, "@").replace(Bb, "]").replace(Cb, "")))
                    return (new Function("return " + a))();
                k.error("Invalid JSON: " + a)
            },
            parseXML: function(a) {
                var b, c;
                try {
                    r.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async =
                    "false", b.loadXML(a))
                } catch (g) {
                    b = m
                }(!b ||!b.documentElement || b.getElementsByTagName("parsererror").length) && k.error("Invalid XML: " + a);
                return b
            },
            noop: function() {},
            globalEval: function(a) {
                a && Ja.test(a) && (r.execScript || function(a) {
                    r.eval.call(r, a)
                })(a)
            },
            camelCase: function(a) {
                return a.replace(Ib, "ms-").replace(Hb, Jb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, b, c) {
                var g, d = 0, f = a.length, h = f === m || k.isFunction(a);
                if (c)
                    if (h)
                        for (g in a) {
                            if (!1 === b.apply(a[g],
                            c))
                                break
                        } else 
                            for (; d < f&&!1 !== b.apply(a[d++], c););
                        else if (h)
                    for (g in a) {
                        if (!1 === b.call(a[g], g, a[g]))
                            break
                    } else 
                        for (; d < f&&!1 !== b.call(a[d], d, a[d++]););
                return a
            },
            trim: Ma ? function(a) {
                return null == a ? "" : Ma.call(a)
            }
            : function(a) {
                return null == a ? "" : a.toString().replace(Ka, "").replace(La, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (null != a) {
                    var g = k.type(a);
                    null == a.length || "string" === g || "function" === g || "regexp" === g || k.isWindow(a) ? ka.call(c, a) : k.merge(c, a)
                }
                return c
            },
            inArray: function(a, b) {
                if (!b)
                    return - 1;
                if (Na)
                    return Na.call(b,
                    a);
                for (var c = 0, g = b.length; c < g; c++)
                    if (b[c] === a)
                        return c;
                return - 1
            },
            merge: function(a, b) {
                var c = a.length, g = 0;
                if ("number" === typeof b.length)
                    for (var d = b.length; g < d; g++)
                        a[c++] = b[g];
                else 
                    for (; b[g] !== m;)
                        a[c++] = b[g++];
                a.length = c;
                return a
            },
            grep: function(a, b, c) {
                for (var g = [], d, c=!!c, f = 0, h = a.length; f < h; f++)
                    d=!!b(a[f], f), c !== d && g.push(a[f]);
                return g
            },
            map: function(a, b, c) {
                var g, d, f = [], h = 0, i = a.length;
                if (a instanceof k || i !== m && "number" === typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || k.isArray(a)))
                    for (; h < i; h++)
                        g = b(a[h], h, c), null !=
                        g && (f[f.length] = g);
                else 
                    for (d in a)
                        g = b(a[d], d, c), null != g && (f[f.length] = g);
                return f.concat.apply([], f)
            },
            guid: 1,
            proxy: function(a, b) {
                if ("string" === typeof b)
                    var c = a[b], b = a, a = c;
                if (!k.isFunction(a))
                    return m;
                var d = I.call(arguments, 2), c = function() {
                    return a.apply(b, d.concat(I.call(arguments)))
                };
                c.guid = a.guid = a.guid || c.guid || k.guid++;
                return c
            },
            access: function(a, b, c, d, e, f) {
                var h = a.length;
                if ("object" === typeof b) {
                    for (var i in b)
                        k.access(a, i, b[i], d, e, c);
                    return a
                }
                if (c !== m) {
                    d=!f && d && k.isFunction(c);
                    for (i = 0; i < h; i++)
                        e(a[i],
                        b, d ? c.call(a[i], i, e(a[i], b)) : c, f);
                    return a
                }
                return h ? e(a[0], b) : m
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                a = Db.exec(a) || Eb.exec(a) || Fb.exec(a) || 0 > a.indexOf("compatible") && Gb.exec(a) || [];
                return {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            },
            sub: function() {
                function a(b, d) {
                    return new a.fn.init(b, d)
                }
                k.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this ();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function(c, d) {
                    d && (d instanceof k&&!(d instanceof a)) && (d = a(d));
                    return k.fn.init.call(this,
                    c, d, b)
                };
                a.fn.init.prototype = a.fn;
                var b = a(l);
                return a
            },
            browser: {}
        });
        k.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            Oa["[object " + b + "]"] = b.toLowerCase()
        });
        R = k.uaMatch(Kb);
        R.browser && (k.browser[R.browser]=!0, k.browser.version = R.version);
        k.browser.webkit && (k.browser.safari=!0);
        Ja.test("\u00a0") && (Ka = /^[\s\xA0]+/, La = /[\s\xA0]+$/);
        Ia = k(l);
        l.addEventListener ? B = function() {
            l.removeEventListener("DOMContentLoaded", B, false);
            k.ready()
        } : l.attachEvent && (B = function() {
            if (l.readyState ===
            "complete") {
                l.detachEvent("onreadystatechange", B);
                k.ready()
            }
        });
        d = k;
        var la = "done fail isResolved isRejected promise then always pipe".split(" "), Pa = [].slice;
        d.extend({
            _Deferred: function() {
                var a = [], b, c, g, e = {
                    done: function() {
                        if (!g) {
                            var c = arguments, h, i, j, k, m;
                            if (b) {
                                m = b;
                                b = 0
                            }
                            h = 0;
                            for (i = c.length; h < i; h++) {
                                j = c[h];
                                k = d.type(j);
                                k === "array" ? e.done.apply(e, j) : k === "function" && a.push(j)
                            }
                            m && e.resolveWith(m[0], m[1])
                        }
                        return this
                    },
                    resolveWith: function(d, e) {
                        if (!g&&!b&&!c) {
                            e = e || [];
                            c = 1;
                            try {
                                for (; a[0];)
                                    a.shift().apply(d, e)
                                } finally {
                                b =
                                [d, e];
                                c = 0
                            }
                        }
                        return this
                    },
                    resolve: function() {
                        e.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function() {
                        return !(!c&&!b)
                    },
                    cancel: function() {
                        g = 1;
                        a = [];
                        return this
                    }
                };
                return e
            },
            Deferred: function(a) {
                var b = d._Deferred(), c = d._Deferred(), g;
                d.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: c.done,
                    rejectWith: c.resolveWith,
                    reject: c.resolve,
                    isRejected: c.isResolved,
                    pipe: function(a, c) {
                        return d.Deferred(function(g) {
                            d.each({
                                done: [a,
                                "resolve"],
                                fail: [c, "reject"]
                            }, function(a, c) {
                                var f = c[0], e = c[1], k;
                                if (d.isFunction(f))
                                    b[a](function() {
                                        if ((k = f.apply(this, arguments)) && d.isFunction(k.promise))
                                            k.promise().then(g.resolve, g.reject);
                                        else 
                                            g[e + "With"](this === b ? g : this, [k])
                                        });
                                else 
                                    b[a](g[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            if (g)
                                return g;
                            g = a = {}
                        }
                        for (var c = la.length; c--;)
                            a[la[c]] = b[la[c]];
                        return a
                    }
                });
                b.done(c.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        c[a] = arguments.length >
                        1 ? Pa.call(arguments, 0) : b;
                        --f || h.resolveWith(h, Pa.call(c, 0))
                    }
                }
                var c = arguments, g = 0, e = c.length, f = e, h = e <= 1 && a && d.isFunction(a.promise) ? a: d.Deferred();
                if (e > 1) {
                    for (; g < e; g++)
                        c[g] && d.isFunction(c[g].promise) ? c[g].promise().then(b(g), h.reject) : --f;
                    f || h.resolveWith(h, c)
                } else 
                    h !== a && h.resolveWith(h, e ? [a] : []);
                return h.promise()
            }
        });
        var Mb = d, ma;
        var o = l.createElement("div"), Nb = l.documentElement, na, C, T, U, u, D, s, V, J, W, x, X, K, Y, E, F;
        o.setAttribute("className", "t");
        o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        na = o.getElementsByTagName("*");
        C = o.getElementsByTagName("a")[0];
        if (!na ||!na.length ||!C)
            ma = {};
        else {
            T = l.createElement("select");
            U = T.appendChild(l.createElement("option"));
            u = o.getElementsByTagName("input")[0];
            s = {
                leadingWhitespace: 3 === o.firstChild.nodeType,
                tbody: !o.getElementsByTagName("tbody").length,
                htmlSerialize: !!o.getElementsByTagName("link").length,
                style: /top/.test(C.getAttribute("style")),
                hrefNormalized: "/a" === C.getAttribute("href"),
                opacity: /^0.55$/.test(C.style.opacity),
                cssFloat: !!C.style.cssFloat,
                checkOn: "on" === u.value,
                optSelected: U.selected,
                getSetAttribute: "t" !== o.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            u.checked=!0;
            s.noCloneChecked = u.cloneNode(!0).checked;
            T.disabled=!0;
            s.optDisabled=!U.disabled;
            try {
                delete o.test
            } catch (jc) {
                s.deleteExpando=!1
            }
            !o.addEventListener && (o.attachEvent && o.fireEvent) && (o.attachEvent("onclick", function() {
                s.noCloneEvent = false
            }), o.cloneNode(!0).fireEvent("onclick"));
            u = l.createElement("input");
            u.value = "t";
            u.setAttribute("type", "radio");
            s.radioValue = "t" === u.value;
            u.setAttribute("checked", "checked");
            o.appendChild(u);
            V = l.createDocumentFragment();
            V.appendChild(o.firstChild);
            s.checkClone = V.cloneNode(!0).cloneNode(!0).lastChild.checked;
            o.innerHTML = "";
            o.style.width = o.style.paddingLeft = "1px";
            J = l.getElementsByTagName("body")[0];
            x = l.createElement(J ? "div" : "body");
            X = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            J && d.extend(X, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (E in X)
                x.style[E] = X[E];
            x.appendChild(o);
            W = J || Nb;
            W.insertBefore(x, W.firstChild);
            s.appendChecked = u.checked;
            s.boxModel = 2 === o.offsetWidth;
            "zoom"in o.style && (o.style.display = "inline", o.style.zoom = 1, s.inlineBlockNeedsLayout = 2 === o.offsetWidth, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", s.shrinkWrapBlocks = 2 !== o.offsetWidth);
            o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            K = o.getElementsByTagName("td");
            F = 0 === K[0].offsetHeight;
            K[0].style.display = "";
            K[1].style.display = "none";
            s.reliableHiddenOffsets = F && 0 === K[0].offsetHeight;
            o.innerHTML = "";
            l.defaultView && l.defaultView.getComputedStyle && (D = l.createElement("div"), D.style.width = "0", D.style.marginRight = "0", o.appendChild(D), s.reliableMarginRight = 0 === (parseInt((l.defaultView.getComputedStyle(D, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            x.innerHTML = "";
            W.removeChild(x);
            if (o.attachEvent)
                for (E in{
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                    Y = "on" + E, F = Y in o, F || (o.setAttribute(Y,
                    "return;"), F = "function" === typeof o[Y]), s[E + "Bubbles"] = F;
            x = V = T = U = J = D = o = u = null;
            ma = s
        }
        Mb.support = ma;
        d.boxModel = d.support.boxModel;
        var lb = /^(?:\{.*\}|\[.*\])$/, kb = /([A-Z])/g;
        d.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
                return !!a&&!ha(a)
            },
            data: function(a, b, c, g) {
                if (d.acceptData(a)) {
                    var e = d.expando, f = typeof b === "string",
                    h = a.nodeType, i = h ? d.cache: a, j = h ? a[d.expando]: a[d.expando] && d.expando;
                    if (j && (!g ||!j ||!i[j] || i[j][e]) ||!(f && c === m)) {
                        if (!j)
                            h ? a[d.expando] = j=++d.uuid : j = d.expando;
                        if (!i[j]) {
                            i[j] = {};
                            if (!h)
                                i[j].toJSON = d.noop
                        }
                        if (typeof b === "object" || typeof b === "function")
                            g ? i[j][e] = d.extend(i[j][e], b) : i[j] = d.extend(i[j], b);
                        a = i[j];
                        if (g) {
                            a[e] || (a[e] = {});
                            a = a[e]
                        }
                        c !== m && (a[d.camelCase(b)] = c);
                        if (b === "events"&&!a[b])
                            return a[e] && a[e].events;
                        if (f) {
                            c = a[b];
                            c == null && (c = a[d.camelCase(b)])
                        } else 
                            c = a;
                        return c
                    }
                }
            },
            removeData: function(a, b, c) {
                if (d.acceptData(a)) {
                    var g,
                    e = d.expando, f = a.nodeType, h = f ? d.cache: a, i = f ? a[d.expando]: d.expando;
                    if (h[i]) {
                        if (b)
                            if (g = c ? h[i][e] : h[i]) {
                                g[b] || (b = d.camelCase(b));
                                delete g[b];
                                if (!ha(g))
                                    return 
                            }
                        if (c) {
                            delete h[i][e];
                            if (!ha(h[i]))
                                return 
                        }
                        b = h[i][e];
                        d.support.deleteExpando ||!h.setInterval ? delete h[i] : h[i] = null;
                        if (b) {
                            h[i] = {};
                            if (!f)
                                h[i].toJSON = d.noop;
                            h[i][e] = b
                        } else 
                            f && (d.support.deleteExpando ? delete a[d.expando] : a.removeAttribute ? a.removeAttribute(d.expando) : a[d.expando] = null)
                        }
                }
            },
            _data: function(a, b, c) {
                return d.data(a, b, c, true)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b =
                    d.noData[a.nodeName.toLowerCase()];
                    if (b)
                        return !(b === true || a.getAttribute("classid") !== b)
                }
                return true
            }
        });
        d.fn.extend({
            data: function(a, b) {
                var c = null;
                if (typeof a === "undefined") {
                    if (this.length) {
                        c = d.data(this[0]);
                        if (this[0].nodeType === 1)
                            for (var g = this[0].attributes, e, f = 0, h = g.length; f < h; f++) {
                                e = g[f].name;
                                if (e.indexOf("data-") === 0) {
                                    e = d.camelCase(e.substring(5));
                                    ya(this[0], e, c[e])
                                }
                            }
                        }
                    return c
                }
                if (typeof a === "object")
                    return this.each(function() {
                        d.data(this, a)
                    });
                var i = a.split(".");
                i[1] = i[1] ? "." + i[1] : "";
                if (b ===
                m) {
                    c = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
                    if (c === m && this.length) {
                        c = d.data(this[0], a);
                        c = ya(this[0], a, c)
                    }
                    return c === m && i[1] ? this.data(i[0]) : c
                }
                return this.each(function() {
                    var c = d(this), g = [i[0], b];
                    c.triggerHandler("setData" + i[1] + "!", g);
                    d.data(this, a, b);
                    c.triggerHandler("changeData" + i[1] + "!", g)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    d.removeData(this, a)
                })
            }
        });
        d.extend({
            _mark: function(a, b) {
                if (a) {
                    b = (b || "fx") + "mark";
                    d.data(a, b, (d.data(a, b, m, true) || 0) + 1, true)
                }
            },
            _unmark: function(a, b,
            c) {
                if (a !== true) {
                    c = b;
                    b = a;
                    a = false
                }
                if (b) {
                    var c = c || "fx", g = c + "mark";
                    if (a = a ? 0 : (d.data(b, g, m, true) || 1) - 1)
                        d.data(b, g, a, true);
                    else {
                        d.removeData(b, g, true);
                        za(b, c, "mark")
                    }
                }
            },
            queue: function(a, b, c) {
                if (a) {
                    var b = (b || "fx") + "queue", g = d.data(a, b, m, true);
                    c && (!g || d.isArray(c) ? g = d.data(a, b, d.makeArray(c), true) : g.push(c));
                    return g || []
                }
            },
            dequeue: function(a, b) {
                var b = b || "fx", c = d.queue(a, b), g = c.shift();
                g === "inprogress" && (g = c.shift());
                if (g) {
                    b === "fx" && c.unshift("inprogress");
                    g.call(a, function() {
                        d.dequeue(a, b)
                    })
                }
                if (!c.length) {
                    d.removeData(a,
                    b + "queue", true);
                    za(a, b, "queue")
                }
            }
        });
        d.fn.extend({
            queue: function(a, b) {
                if (typeof a !== "string") {
                    b = a;
                    a = "fx"
                }
                return b === m ? d.queue(this[0], a) : this.each(function() {
                    var c = d.queue(this, a, b);
                    a === "fx" && c[0] !== "inprogress" && d.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    d.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = d.fx ? d.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var c = this;
                    setTimeout(function() {
                        d.dequeue(c, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a) {
                function b() {
                    --f ||
                    c.resolveWith(g, [g])
                }
                typeof a !== "string" && (a = m);
                for (var a = a || "fx", c = d.Deferred(), g = this, e = g.length, f = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; e--;)
                    if (j = d.data(g[e], h, m, true) || (d.data(g[e], i, m, true) || d.data(g[e], a, m, true)) && d.data(g[e], h, d._Deferred(), true)) {
                        f++;
                        j.done(b)
                    }
                b();
                return c.promise()
            }
        });
        var Qa = /[\n\t\r]/g, oa = /\s+/, Ob = /\r/g, Pb = /^(?:button|input)$/i, Qb = /^(?:button|input|object|select|textarea)$/i, Rb = /^a(?:rea)?$/i, Ra = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        y, Sa;
        d.fn.extend({
            attr: function(a, b) {
                return d.access(this, a, b, true, d.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    d.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return d.access(this, a, b, true, d.prop)
            },
            removeProp: function(a) {
                a = d.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = m;
                        delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a))
                    return this.each(function(b) {
                        d(this).addClass(a.call(this, b, this.className))
                    });
                if (a && typeof a === "string") {
                    b = a.split(oa);
                    c =
                    0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1)
                                e.className = a;
                            else {
                                f = " " + e.className + " ";
                                h = 0;
                                for (i = b.length; h < i; h++)
                                    ~f.indexOf(" " + b[h] + " ") || (f = f + (b[h] + " "));
                                    e.className = d.trim(f)
                                }
                        }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a))
                    return this.each(function(b) {
                        d(this).removeClass(a.call(this, b, this.className))
                    });
                if (a && typeof a === "string" || a === m) {
                    b = (a || "").split(oa);
                    c = 0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1 && e.className)
                            if (a) {
                                f =
                                (" " + e.className + " ").replace(Qa, " ");
                                h = 0;
                                for (i = b.length; h < i; h++)
                                    f = f.replace(" " + b[h] + " ", " ");
                                    e.className = d.trim(f)
                            } else 
                                e.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a, g = typeof b === "boolean";
                return d.isFunction(a) ? this.each(function(c) {
                    d(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if (c === "string")
                        for (var e, f = 0, h = d(this), i = b, j = a.split(oa); e = j[f++];) {
                            i = g ? i : !h.hasClass(e);
                            h[i ? "addClass": "removeClass"](e)
                        } else if (c === "undefined" || c === "boolean") {
                        this.className &&
                        d._data(this, "__className__", this.className);
                        this.className = this.className || a === false ? "" : d._data(this, "__className__") || ""
                    }
                })
            },
            hasClass: function(a) {
                for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                    if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Qa, " ").indexOf(a)>-1)
                        return true;
                return false
            },
            val: function(a) {
                var b, c, g = this[0];
                if (!arguments.length) {
                    if (g) {
                        if ((b = d.valHooks[g.nodeName.toLowerCase()] || d.valHooks[g.type]) && "get"in b && (c = b.get(g, "value")) !== m)
                            return c;
                        c = g.value;
                        return typeof c ===
                        "string" ? c.replace(Ob, "") : c == null ? "" : c
                    }
                    return m
                }
                var e = d.isFunction(a);
                return this.each(function(c) {
                    var g = d(this);
                    if (this.nodeType === 1) {
                        c = e ? a.call(this, c, g.val()) : a;
                        c == null ? c = "" : typeof c === "number" ? c = c + "" : d.isArray(c) && (c = d.map(c, function(a) {
                            return a == null ? "" : a + ""
                        }));
                        b = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type];
                        if (!b ||!("set"in b) || b.set(this, c, "value") === m)
                            this.value = c
                    }
                })
            }
        });
        d.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c = a.selectedIndex, g = [], e = a.options, a = a.type === "select-one";
                        if (c < 0)
                            return null;
                        for (var f = a ? c : 0, h = a ? c + 1 : e.length; f < h; f++) {
                            b = e[f];
                            if (b.selected && (d.support.optDisabled?!b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled ||!d.nodeName(b.parentNode, "optgroup"))
                                ) {
                                b = d(b).val();
                                if (a)
                                    return b;
                                g.push(b)
                            }
                        }
                        return a&&!g.length && e.length ? d(e[c]).val() : g
                    },
                    set: function(a, b) {
                        var c = d.makeArray(b);
                        d(a).find("option").each(function() {
                            this.selected = d.inArray(d(this).val(),
                            c) >= 0
                        });
                        if (!c.length)
                            a.selectedIndex =- 1;
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, c, g) {
                var e = a.nodeType;
                if (!a || e === 3 || e === 8 || e === 2)
                    return m;
                if (g && b in d.attrFn)
                    return d(a)[b](c);
                if (!("getAttribute"in a))
                    return d.prop(a, b, c);
                var f, h;
                if (g = e !== 1 ||!d.isXMLDoc(a)) {
                    b = d.attrFix[b] || b;
                    (h = d.attrHooks[b]) || (Ra.test(b) ? h = Sa : y && (h = y))
                }
                if (c !== m) {
                    if (c === null) {
                        d.removeAttr(a, b);
                        return m
                    }
                    if (h && "set"in h && g && (f = h.set(a, c,
                    b)) !== m)
                        return f;
                    a.setAttribute(b, "" + c);
                    return c
                }
                if (h && "get"in h && g && (f = h.get(a, b)) !== null)
                    return f;
                f = a.getAttribute(b);
                return f === null ? m : f
            },
            removeAttr: function(a, b) {
                var c;
                if (a.nodeType === 1) {
                    b = d.attrFix[b] || b;
                    d.attr(a, b, "");
                    a.removeAttribute(b);
                    if (Ra.test(b) && (c = d.propFix[b] || b)in a)
                        a[c] = false
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Pb.test(a.nodeName) && a.parentNode)
                            d.error("type property can't be changed");
                        else if (!d.support.radioValue && b === "radio" && d.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type",
                            b);
                            if (c)
                                a.value = c;
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return y && d.nodeName(a, "button") ? y.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (y && d.nodeName(a, "button"))
                            return y.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, c) {
                var g =
                a.nodeType;
                if (!a || g === 3 || g === 8 || g === 2)
                    return m;
                var e, f;
                if (g !== 1 ||!d.isXMLDoc(a)) {
                    b = d.propFix[b] || b;
                    f = d.propHooks[b]
                }
                return c !== m ? f && "set"in f && (e = f.set(a, c, b)) !== m ? e : a[b] = c : f && "get"in f && (e = f.get(a, b)) !== null ? e : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Qb.test(a.nodeName) || Rb.test(a.nodeName) && a.href ? 0 : m
                    }
                }
            }
        });
        d.attrHooks.tabIndex = d.propHooks.tabIndex;
        Sa = {
            get: function(a, b) {
                var c;
                return d.prop(a, b) === true || (c = a.getAttributeNode(b)) &&
                c.nodeValue !== false ? b.toLowerCase() : m
            },
            set: function(a, b, c) {
                if (b === false)
                    d.removeAttr(a, c);
                else {
                    b = d.propFix[c] || c;
                    b in a && (a[b] = true);
                    a.setAttribute(c, c.toLowerCase())
                }
                return c
            }
        };
        d.support.getSetAttribute || (y = d.valHooks.button = {
            get: function(a, b) {
                var c;
                return (c = a.getAttributeNode(b)) && c.nodeValue !== "" ? c.nodeValue : m
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    d = l.createAttribute(c);
                    a.setAttributeNode(d)
                }
                return d.nodeValue = b + ""
            }
        }, d.each(["width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b],
            {
                set: function(a, d) {
                    if (d === "") {
                        a.setAttribute(b, "auto");
                        return d
                    }
                }
            })
        }));
        d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return a === null ? m : a
                }
            })
        });
        d.support.style || (d.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || m
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        });
        d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) {
                    a.selectedIndex;
                    a.parentNode && a.parentNode.selectedIndex
                }
                return null
            }
        }));
        d.support.checkOn || d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        });
        d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = d.extend(d.valHooks[this], {
                set: function(a, b) {
                    if (d.isArray(b))
                        return a.checked = d.inArray(d(a).val(), b) >= 0
                }
            })
        });
        var ia = /\.(.*)$/, pa = /^(?:textarea|input|select)$/i, nb = /\./g, ob = / /g, Sb = /[^\w\s.|`]/g, Tb = function(a) {
            return a.replace(Sb, "\\$&")
        };
        d.event =
        {
            add: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    if (c === false)
                        c = w;
                    else if (!c)
                        return;
                    var e, f;
                    if (c.handler) {
                        e = c;
                        c = e.handler
                    }
                    if (!c.guid)
                        c.guid = d.guid++;
                    if (f = d._data(a)) {
                        var h = f.events, i = f.handle;
                        if (!h)
                            f.events = h = {};
                        if (!i)
                            f.handle = i = function(a) {
                                return typeof d !== "undefined" && (!a || d.event.triggered !== a.type) ? d.event.handle.apply(i.elem, arguments) : m
                            };
                        i.elem = a;
                        for (var b = b.split(" "), j, k = 0, l; j = b[k++];) {
                            f = e ? d.extend({}, e) : {
                                handler: c,
                                data: g
                            };
                            if (j.indexOf(".")>-1) {
                                l = j.split(".");
                                j = l.shift();
                                f.namespace =
                                l.slice(0).sort().join(".")
                            } else {
                                l = [];
                                f.namespace = ""
                            }
                            f.type = j;
                            if (!f.guid)
                                f.guid = c.guid;
                            var n = h[j], q = d.event.special[j] || {};
                            if (!n) {
                                n = h[j] = [];
                                if (!q.setup || q.setup.call(a, g, l, i) === false)
                                    a.addEventListener ? a.addEventListener(j, i, false) : a.attachEvent && a.attachEvent("on" + j, i)
                                }
                            if (q.add) {
                                q.add.call(a, f);
                                if (!f.handler.guid)
                                    f.handler.guid = c.guid
                            }
                            n.push(f);
                            d.event.global[j] = true
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    c === false && (c = w);
                    var e, f, h = 0, i, j, k, l, n, q, p = d.hasData(a) &&
                    d._data(a), o = p && p.events;
                    if (p && o) {
                        if (b && b.type) {
                            c = b.handler;
                            b = b.type
                        }
                        if (!b || typeof b === "string" && b.charAt(0) === ".") {
                            b = b || "";
                            for (e in o)
                                d.event.remove(a, e + b)
                            } else {
                            for (b = b.split(" "); e = b[h++];) {
                                l = e;
                                i = e.indexOf(".") < 0;
                                j = [];
                                if (!i) {
                                    j = e.split(".");
                                    e = j.shift();
                                    k = RegExp("(^|\\.)" + d.map(j.slice(0).sort(), Tb).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (n = o[e])
                                    if (c) {
                                        l = d.event.special[e] || {};
                                        for (f = g || 0; f < n.length; f++) {
                                            q = n[f];
                                            if (c.guid === q.guid) {
                                                if (i || k.test(q.namespace)) {
                                                    g == null && n.splice(f--, 1);
                                                    l.remove && l.remove.call(a,
                                                    q)
                                                }
                                                if (g != null)
                                                    break
                                            }
                                        }
                                        if (n.length === 0 || g != null && n.length === 1) {
                                            (!l.teardown || l.teardown.call(a, j) === false) && d.removeEvent(a, e, p.handle);
                                            delete o[e]
                                        }
                                    } else 
                                        for (f = 0; f < n.length; f++) {
                                            q = n[f];
                                            if (i || k.test(q.namespace)) {
                                                d.event.remove(a, l, q.handler, f);
                                                n.splice(f--, 1)
                                            }
                                        }
                                    }
                            if (d.isEmptyObject(o)) {
                                if (b = p.handle)
                                    b.elem = null;
                                delete p.events;
                                delete p.handle;
                                d.isEmptyObject(p) && d.removeData(a, m, true)
                            }
                        }
                    }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, c, g) {
                var e = a.type || a, f = [], h;
                if (e.indexOf("!") >=
                0) {
                    e = e.slice(0, - 1);
                    h = true
                }
                if (e.indexOf(".") >= 0) {
                    f = e.split(".");
                    e = f.shift();
                    f.sort()
                }
                if (c&&!d.event.customEvent[e] || d.event.global[e]) {
                    a = typeof a === "object" ? a[d.expando] ? a : new d.Event(e, a) : new d.Event(e);
                    a.type = e;
                    a.exclusive = h;
                    a.namespace = f.join(".");
                    a.namespace_re = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (g ||!c) {
                        a.preventDefault();
                        a.stopPropagation()
                    }
                    if (c) {
                        if (!(c.nodeType === 3 || c.nodeType === 8)) {
                            a.result = m;
                            a.target = c;
                            b = b != null ? d.makeArray(b) : [];
                            b.unshift(a);
                            f = c;
                            g = e.indexOf(":") < 0 ? "on" +
                            e : "";
                            do {
                                h = d._data(f, "handle");
                                a.currentTarget = f;
                                h && h.apply(f, b);
                                if (g && d.acceptData(f) && f[g] && f[g].apply(f, b) === false) {
                                    a.result = false;
                                    a.preventDefault()
                                }
                                f = f.parentNode || f.ownerDocument || f === a.target.ownerDocument && r
                            }
                            while (f&&!a.isPropagationStopped());
                            if (!a.isDefaultPrevented()) {
                                var i, f = d.event.special[e] || {};
                                if ((!f._default || f._default.call(c.ownerDocument, a) === false)&&!(e === "click" && d.nodeName(c, "a")) && d.acceptData(c)) {
                                    try {
                                        if (g && c[e]) {
                                            (i = c[g]) && (c[g] = null);
                                            d.event.triggered = e;
                                            c[e]()
                                        }
                                    } catch (j) {}
                                    i &&
                                    (c[g] = i);
                                    d.event.triggered = m
                                }
                            }
                            return a.result
                        }
                    } else 
                        d.each(d.cache, function() {
                            var c = this[d.expando];
                            c && (c.events && c.events[e]) && d.event.trigger(a, b, c.handle.elem)
                        })
                }
            },
            handle: function(a) {
                var a = d.event.fix(a || r.event), b = ((d._data(this, "events") || {})[a.type] || []).slice(0), c=!a.exclusive&&!a.namespace, g = Array.prototype.slice.call(arguments, 0);
                g[0] = a;
                a.currentTarget = this;
                for (var e = 0, f = b.length; e < f; e++) {
                    var h = b[e];
                    if (c || a.namespace_re.test(h.namespace)) {
                        a.handler = h.handler;
                        a.data = h.data;
                        a.handleObj = h;
                        h =
                        h.handler.apply(this, g);
                        if (h !== m) {
                            a.result = h;
                            if (h === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped())
                            break
                    }
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[d.expando])
                    return a;
                for (var b = a, a = d.Event(b), c = this.props.length, g; c;) {
                    g = this.props[--c];
                    a[g] = b[g]
                }
                if (!a.target)
                    a.target = a.srcElement || l;
                if (a.target.nodeType === 3)
                    a.target = a.target.parentNode;
                if (!a.relatedTarget && a.fromElement)
                    a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
                if (a.pageX == null && a.clientX != null) {
                    c = a.target.ownerDocument || l;
                    b = c.documentElement;
                    c = c.body;
                    a.pageX = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b && b.clientLeft || c && c.clientLeft || 0);
                    a.pageY = a.clientY + (b && b.scrollTop || c && c.scrollTop ||
                    0) - (b && b.clientTop || c && c.clientTop || 0)
                }
                if (a.which == null && (a.charCode != null || a.keyCode != null))
                    a.which = a.charCode != null ? a.charCode : a.keyCode;
                if (!a.metaKey && a.ctrlKey)
                    a.metaKey = a.ctrlKey;
                if (!a.which && a.button !== m)
                    a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
                return a
            },
            guid: 1E8,
            proxy: d.proxy,
            special: {
                ready: {
                    setup: d.bindReady,
                    teardown: d.noop
                },
                live: {
                    add: function(a) {
                        d.event.add(this, P(a.origType, a.selector), d.extend({}, a, {
                            handler: mb,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        d.event.remove(this, P(a.origType,
                        a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        if (d.isWindow(this))
                            this.onbeforeunload = c
                    },
                    teardown: function(a, b) {
                        if (this.onbeforeunload === b)
                            this.onbeforeunload = null
                    }
                }
            }
        };
        d.removeEvent = l.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, false)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        d.Event = function(a, b) {
            if (!this.preventDefault)
                return new d.Event(a, b);
            if (a && a.type) {
                this.originalEvent = a;
                this.type = a.type;
                this.isDefaultPrevented = a.defaultPrevented ||
                a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? O : w
            } else 
                this.type = a;
            b && d.extend(this, b);
            this.timeStamp = d.now();
            this[d.expando] = true
        };
        d.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = O;
                var a = this.originalEvent;
                if (a)
                    a.preventDefault ? a.preventDefault() : a.returnValue = false
            },
            stopPropagation: function() {
                this.isPropagationStopped = O;
                var a = this.originalEvent;
                if (a) {
                    a.stopPropagation && a.stopPropagation();
                    a.cancelBubble = true
                }
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped =
                O;
                this.stopPropagation()
            },
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w
        };
        var Ta = function(a) {
            var b = a.relatedTarget, c = false, g = a.type;
            a.type = a.data;
            if (b !== this) {
                b && (c = d.contains(this, b));
                if (!c) {
                    d.event.handle.apply(this, arguments);
                    a.type = g
                }
            }
        }, Ua = function(a) {
            a.type = a.data;
            d.event.handle.apply(this, arguments)
        };
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            d.event.special[a] = {
                setup: function(c) {
                    d.event.add(this, b, c && c.selector ? Ua : Ta, a)
                },
                teardown: function(a) {
                    d.event.remove(this,
                    b, a && a.selector ? Ua : Ta)
                }
            }
        });
        d.support.submitBubbles || (d.event.special.submit = {
            setup: function() {
                if (d.nodeName(this, "form"))
                    return false;
                d.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target, c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type: "";
                    (c === "submit" || c === "image") && d(b).closest("form").length && Aa("submit", this, arguments)
                });
                d.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target, c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type: "";
                    (c === "text" || c === "password") &&
                    (d(b).closest("form").length && a.keyCode === 13) && Aa("submit", this, arguments)
                })
            },
            teardown: function() {
                d.event.remove(this, ".specialSubmit")
            }
        });
        if (!d.support.changeBubbles) {
            var L, Va = function(a) {
                var b = d.nodeName(a, "input") ? a.type: "", c = a.value;
                if (b === "radio" || b === "checkbox")
                    c = a.checked;
                else if (b === "select-multiple")
                    c = a.selectedIndex>-1 ? d.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "";
                else if (d.nodeName(a, "select"))
                    c = a.selectedIndex;
                return c
            }, Z = function(a, b) {
                var c = a.target, g, e;
                if (pa.test(c.nodeName) &&
                !c.readOnly) {
                    g = d._data(c, "_change_data");
                    e = Va(c);
                    (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", e);
                    if (!(g === m || e === g))
                        if (g != null || e) {
                            a.type = "change";
                            a.liveFired = m;
                            d.event.trigger(a, b, c)
                        }
                }
            };
            d.event.special.change = {
                filters: {
                    focusout: Z,
                    beforedeactivate: Z,
                    click: function(a) {
                        var b = a.target, c = d.nodeName(b, "input") ? b.type: "";
                        (c === "radio" || c === "checkbox" || d.nodeName(b, "select")) && Z.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target, c = d.nodeName(b, "input") ? b.type: "";
                        (a.keyCode === 13&&!d.nodeName(b,
                        "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && Z.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a = a.target;
                        d._data(a, "_change_data", Va(a))
                    }
                },
                setup: function() {
                    if (this.type === "file")
                        return false;
                    for (var a in L)
                        d.event.add(this, a + ".specialChange", L[a]);
                    return pa.test(this.nodeName)
                },
                teardown: function() {
                    d.event.remove(this, ".specialChange");
                    return pa.test(this.nodeName)
                }
            };
            L = d.event.special.change.filters;
            L.focus = L.beforeactivate
        }
        d.support.focusinBubbles || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            function c(a) {
                var c = d.event.fix(a);
                c.type = b;
                c.originalEvent = {};
                d.event.trigger(c, null, c.target);
                c.isDefaultPrevented() && a.preventDefault()
            }
            var g = 0;
            d.event.special[b] = {
                setup: function() {
                    g++===0 && l.addEventListener(a, c, true)
                },
                teardown: function() {
                    --g === 0 && l.removeEventListener(a, c, true)
                }
            }
        });
        d.each(["bind", "one"], function(a, b) {
            d.fn[b] = function(a, g, e) {
                var f;
                if (typeof a === "object") {
                    for (var h in a)
                        this[b](h, g, a[h], e);
                    return this
                }
                if (arguments.length === 2 || g === false) {
                    e = g;
                    g = m
                }
                if (b ===
                "one") {
                    f = function(a) {
                        d(this).unbind(a, f);
                        return e.apply(this, arguments)
                    };
                    f.guid = e.guid || d.guid++
                } else 
                    f = e;
                if (a === "unload" && b !== "one")
                    this.one(a, g, e);
                else {
                    h = 0;
                    for (var i = this.length; h < i; h++)
                        d.event.add(this[h], a, f, g)
                }
                return this
            }
        });
        d.fn.extend({
            unbind: function(a, b) {
                if (typeof a === "object"&&!a.preventDefault)
                    for (var c in a)
                        this.unbind(c, a[c]);
                else {
                    c = 0;
                    for (var g = this.length; c < g; c++)
                        d.event.remove(this[c], a, b)
                }
                return this
            },
            delegate: function(a, b, c, d) {
                return this.live(b, c, d, a)
            },
            undelegate: function(a, b, c) {
                return arguments.length ===
                0 ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    d.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0])
                    return d.event.trigger(a, b, this[0], true)
            },
            toggle: function(a) {
                var b = arguments, c = a.guid || d.guid++, g = 0, e = function(c) {
                    var e = (d.data(this, "lastToggle" + a.guid) || 0)%g;
                    d.data(this, "lastToggle" + a.guid, e + 1);
                    c.preventDefault();
                    return b[e].apply(this, arguments) || false
                };
                for (e.guid = c; g < b.length;)
                    b[g++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b ||
                a)
            }
        });
        var qa = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        d.each(["live", "die"], function(a, b) {
            d.fn[b] = function(a, g, e, f) {
                var h = 0, i, j, k = f || this.selector, l = f ? this: d(this.context);
                if (typeof a === "object"&&!a.preventDefault) {
                    for (i in a)
                        l[b](i, g, a[i], k);
                    return this
                }
                if (b === "die"&&!a && f && f.charAt(0) === ".") {
                    l.unbind(f);
                    return this
                }
                if (g === false || d.isFunction(g)) {
                    e = g || w;
                    g = m
                }
                for (a = (a || "").split(" "); (f = a[h++]) != null;) {
                    i = ia.exec(f);
                    j = "";
                    if (i) {
                        j = i[0];
                        f = f.replace(ia, "")
                    }
                    if (f === "hover")
                        a.push("mouseenter" +
                        j, "mouseleave" + j);
                    else {
                        i = f;
                        if (qa[f]) {
                            a.push(qa[f] + j);
                            f = f + j
                        } else 
                            f = (qa[f] || f) + j;
                        if (b === "live") {
                            j = 0;
                            for (var n = l.length; j < n; j++)
                                d.event.add(l[j], "live." + P(f, k), {
                                    data: g,
                                    selector: k,
                                    handler: e,
                                    origType: f,
                                    origHandler: e,
                                    preType: i
                                })
                            } else 
                                l.unbind("live." + P(f, k), e)
                            }
                }
                return this
            }
        });
        d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            d.fn[b] =
            function(a, d) {
                if (d == null) {
                    d = a;
                    a = null
                }
                return arguments.length > 0 ? this.bind(b, a, d) : this.trigger(b)
            };
            d.attrFn && (d.attrFn[b] = true)
        });
        var Wa = function(a, b, c, d, e, f) {
            for (var e = 0, h = d.length; e < h; e++) {
                var i = d[e];
                if (i) {
                    for (var j = false, i = i[a]; i;) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1&&!f) {
                            i.sizcache = c;
                            i.sizset = e
                        }
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[e] = j
                }
            }
        }, Xa = function(a, b, c, d, e, f) {
            for (var e = 0, h = d.length; e < h; e++) {
                var i = d[e];
                if (i) {
                    for (var j = false, i = i[a]; i;) {
                        if (i.sizcache === c) {
                            j =
                            d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            if (!f) {
                                i.sizcache = c;
                                i.sizset = e
                            }
                            if (typeof b !== "string") {
                                if (i === b) {
                                    j = true;
                                    break
                                }
                            } else if (n.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[e] = j
                }
            }
        }, ra = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, sa = 0, Ya = Object.prototype.toString, aa=!1, Za=!0, G = /\\/g, ba = /\W/;
        [0, 0].sort(function() {
            Za = false;
            return 0
        });
        var n = function(a, b, c, d) {
            var c = c || [], e = b = b || l;
            if (b.nodeType !== 1 && b.nodeType !== 9)
                return [];
            if (!a || typeof a !== "string")
                return c;
            var f, h, i, j, k, m = true, o = n.isXML(b), q = [], r = a;
            do {
                ra.exec("");
                if (f = ra.exec(r)) {
                    r = f[3];
                    q.push(f[1]);
                    if (f[2]) {
                        j = f[3];
                        break
                    }
                }
            }
            while (f);
            if (q.length > 1 && Ub.exec(a))
                if (q.length === 2 && p.relative[q[0]])
                    h = $a(q[0] + q[1], b);
                else 
                    for (h = p.relative[q[0]] ? [b] : n(q.shift(), b); q.length;) {
                        a = q.shift();
                        p.relative[a] && (a = a + q.shift());
                        h = $a(a, h)
                    } else {
                if (!d && q.length > 1 && b.nodeType === 9&&!o && p.match.ID.test(q[0])&&!p.match.ID.test(q[q.length - 1])) {
                    f = n.find(q.shift(), b, o);
                    b = f.expr ? n.filter(f.expr,
                    f.set)[0] : f.set[0]
                }
                if (b) {
                    f = d ? {
                        expr: q.pop(),
                        set: v(d)
                    } : n.find(q.pop(), q.length === 1 && (q[0] === "~" || q[0] === "+") && b.parentNode ? b.parentNode : b, o);
                    h = f.expr ? n.filter(f.expr, f.set) : f.set;
                    for (q.length > 0 ? i = v(h) : m = false; q.length;) {
                        f = k = q.pop();
                        p.relative[k] ? f = q.pop() : k = "";
                        f == null && (f = b);
                        p.relative[k](i, f, o)
                    }
                } else 
                    i = []
            }
            i || (i = h);
            i || n.error(k || a);
            if (Ya.call(i) === "[object Array]")
                if (m)
                    if (b && b.nodeType === 1)
                        for (a = 0; i[a] != null; a++)
                            i[a] && (i[a] === true || i[a].nodeType === 1 && n.contains(b, i[a])) && c.push(h[a]);
                    else 
                        for (a = 0; i[a] !=
                        null; a++)
                            i[a] && i[a].nodeType === 1 && c.push(h[a]);
            else 
                c.push.apply(c, i);
            else 
                v(i, c);
            if (j) {
                n(j, e, c, d);
                n.uniqueSort(c)
            }
            return c
        };
        n.uniqueSort = function(a) {
            if (ca) {
                aa = Za;
                a.sort(ca);
                if (aa)
                    for (var b = 1; b < a.length; b++)
                        a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        };
        n.matches = function(a, b) {
            return n(a, null, null, b)
        };
        n.matchesSelector = function(a, b) {
            return n(b, null, null, [a]).length > 0
        };
        n.find = function(a, b, c) {
            var d;
            if (!a)
                return [];
            for (var e = 0, f = p.order.length; e < f; e++) {
                var h, i = p.order[e];
                if (h = p.leftMatch[i].exec(a)) {
                    var j =
                    h[1];
                    h.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        h[1] = (h[1] || "").replace(G, "");
                        d = p.find[i](h, b, c);
                        if (d != null) {
                            a = a.replace(p.match[i], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        n.filter = function(a, b, c, d) {
            for (var e, f, h = a, i = [], j = b, k = b && b[0] && n.isXML(b[0]); a && b.length;) {
                for (var l in p.filter)
                    if ((e = p.leftMatch[l].exec(a)) != null && e[2]) {
                        var o, q, r = p.filter[l];
                        q = e[1];
                        f = false;
                        e.splice(1, 1);
                        if (q.substr(q.length - 1) !== "\\") {
                            j === i && (i =
                            []);
                            if (p.preFilter[l])
                                if (e = p.preFilter[l](e, j, c, i, d, k)) {
                                    if (e === true)
                                        continue
                                } else 
                                    f = o = true;
                                    if (e)
                                        for (var s = 0; (q = j[s]) != null; s++)
                                            if (q) {
                                                o = r(q, e, s, j);
                                                var t = d^!!o;
                                                if (c && o != null)
                                                    t ? f = true : j[s] = false;
                                                else if (t) {
                                                    i.push(q);
                                                    f = true
                                                }
                                            }
                                            if (o !== m) {
                                                c || (j = i);
                                                a = a.replace(p.match[l], "");
                                                if (!f)
                                                    return [];
                                                    break
                                            }
                        }
                    }
                if (a === h)
                    if (f == null)
                        n.error(a);
                    else 
                        break;
                h = a
            }
            return j
        };
        n.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var p = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b === "string", d = c&&!ba.test(b), c = c&&!d;
                    d && (b = b.toLowerCase());
                    for (var d = 0, e = a.length, f; d < e; d++)
                        if (f = a[d]) {
                            for (; (f = f.previousSibling) && f.nodeType !== 1;);
                            a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
                        }
                    c && n.filter(b, a, true)
                },
                ">": function(a, b) {
                    var c, d = typeof b === "string", e = 0, f = a.length;
                    if (d &&
                    !ba.test(b))
                        for (b = b.toLowerCase(); e < f; e++) {
                            if (c = a[e]) {
                                c = c.parentNode;
                                a[e] = c.nodeName.toLowerCase() === b ? c : false
                            }
                        } else {
                        for (; e < f; e++)(c = a[e]) 
                            && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && n.filter(b, a, true)
                    }
                },
                "": function(a, b, c) {
                    var d, e = sa++, f = Xa;
                    if (typeof b === "string"&&!ba.test(b)) {
                        d = b = b.toLowerCase();
                        f = Wa
                    }
                    f("parentNode", b, e, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, e = sa++, f = Xa;
                    if (typeof b === "string"&&!ba.test(b)) {
                        d = b = b.toLowerCase();
                        f = Wa
                    }
                    f("previousSibling", b, e, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById !==
                    "undefined"&&!c)
                        return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName !== "undefined") {
                        for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++)
                            d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName !== "undefined")
                        return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(G, "") + " ";
                    if (f)
                        return a;
                    for (var f = 0, h; (h = b[f]) != null; f++)
                        h && (e^(h.className &&
                        (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[f] = false));
                    return false
                },
                ID: function(a) {
                    return a[1].replace(G, "")
                },
                TAG: function(a) {
                    return a[1].replace(G, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || n.error(a[0]);
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" ||!/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0;
                        a[3] = b[3] - 0
                    } else 
                        a[2] && n.error(a[0]);
                    a[0] = sa++;
                    return a
                },
                ATTR: function(a,
                b, c, d, e, f) {
                    b = a[1] = a[1].replace(G, "");
                    !f && p.attrMap[b] && (a[1] = p.attrMap[b]);
                    a[4] = (a[4] || a[5] || "").replace(G, "");
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(a, b, c, d, e) {
                    if (a[1] === "not")
                        if ((ra.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))
                            a[3] = n(a[3], null, null, b);
                        else {
                            a = n.filter(a[3], b, c, 1^e);
                            c || d.push.apply(d, a);
                            return false
                        } else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0]))
                        return true;
                    return a
                },
                POS: function(a) {
                    a.unshift(true);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled ===
                    false && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === true
                },
                checked: function(a) {
                    return a.checked === true
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === true
                },
                parent: function(a) {
                    return !!a.firstChild
                },
                empty: function(a) {
                    return !a.firstChild
                },
                has: function(a, b, c) {
                    return !!n(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    return "text" === a.getAttribute("type")
                },
                radio: function(a) {
                    return "radio" === a.type
                },
                checkbox: function(a) {
                    return "checkbox" ===
                    a.type
                },
                file: function(a) {
                    return "file" === a.type
                },
                password: function(a) {
                    return "password" === a.type
                },
                submit: function(a) {
                    return "submit" === a.type
                },
                image: function(a) {
                    return "image" === a.type
                },
                reset: function(a) {
                    return "reset" === a.type
                },
                button: function(a) {
                    return "button" === a.type || a.nodeName.toLowerCase() === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b%2 ===
                    0
                },
                odd: function(a, b) {
                    return b%2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1], f = p.filters[e];
                    if (f)
                        return f(a, c, b, d);
                    if (e === "contains")
                        return (a.textContent || a.innerText || n.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        b = b[3];
                        c = 0;
                        for (d = b.length; c < d; c++)
                            if (b[c] === a)
                                return false;
                        return true
                    }
                    n.error(e)
                },
                CHILD: function(a, b) {
                    var c = b[1], d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        for (; d =
                        d.previousSibling;)
                            if (d.nodeType === 1)
                                return false;
                        if (c === "first")
                            return true;
                        d = a;
                    case "last":
                        for (; d = d.nextSibling;)
                            if (d.nodeType === 1)
                                return false;
                        return true;
                    case "nth":
                        var c = b[2], e = b[3];
                        if (c === 1 && e === 0)
                            return true;
                        var f = b[0], h = a.parentNode;
                        if (h && (h.sizcache !== f ||!a.nodeIndex)) {
                            for (var i = 0, d = h.firstChild; d; d = d.nextSibling)
                                if (d.nodeType === 1)
                                    d.nodeIndex=++i;
                            h.sizcache = f
                        }
                        d = a.nodeIndex - e;
                        return c === 0 ? d === 0 : d%c === 0 && d / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a,
                b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)>-1
                },
                ATTR: function(a, b) {
                    var c = b[1], c = p.attrHandle[c] ? p.attrHandle[c](a): a[c] != null ? a[c]: a.getAttribute(c), d = c + "", e = b[2], f = b[4];
                    return c == null ? e === "!=" : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length +
                    1) === f + "-" : false
                },
                POS: function(a, b, c, d) {
                    var e = p.setFilters[b[2]];
                    if (e)
                        return e(a, c, b, d)
                }
            }
        }, Ub = p.match.POS, Vb = function(a, b) {
            return "\\" + (b - 0 + 1)
        }, M;
        for (M in p.match)
            p.match[M] = RegExp(p.match[M].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[M] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[M].source.replace(/\\(\d+)/g, Vb));
        var v = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(l.documentElement.childNodes, 0)[0].nodeType
        } catch (kc) {
            v =
            function(a, b) {
                var c = 0, d = b || [];
                if (Ya.call(a) === "[object Array]")
                    Array.prototype.push.apply(d, a);
                else if (typeof a.length === "number")
                    for (var e = a.length; c < e; c++)
                        d.push(a[c]);
                else 
                    for (; a[c]; c++)
                        d.push(a[c]);
                return d
            }
        }
        var ca, N;
        l.documentElement.compareDocumentPosition ? ca = function(a, b) {
            if (a === b) {
                aa = true;
                return 0
            }
            return !a.compareDocumentPosition ||!b.compareDocumentPosition ? a.compareDocumentPosition?-1 : 1 : a.compareDocumentPosition(b) & 4?-1 : 1
        } : (ca = function(a, b) {
            var c, d, e = [], f = [];
            c = a.parentNode;
            d = b.parentNode;
            var h = c;
            if (a === b) {
                aa = true;
                return 0
            }
            if (c === d)
                return N(a, b);
            if (c) {
                if (!d)
                    return 1
            } else 
                return - 1;
            for (; h;) {
                e.unshift(h);
                h = h.parentNode
            }
            for (h = d; h;) {
                f.unshift(h);
                h = h.parentNode
            }
            c = e.length;
            d = f.length;
            for (h = 0; h < c && h < d; h++)
                if (e[h] !== f[h])
                    return N(e[h], f[h]);
            return h === c ? N(a, f[h], - 1) : N(e[h], b, 1)
        }, N = function(a, b, c) {
            if (a === b)
                return c;
            for (a = a.nextSibling; a;) {
                if (a === b)
                    return - 1;
                a = a.nextSibling
            }
            return 1
        });
        n.getText = function(a) {
            for (var b = "", c, d = 0; a[d]; d++) {
                c = a[d];
                c.nodeType === 3 || c.nodeType === 4 ? b = b + c.nodeValue : c.nodeType !==
                8 && (b = b + n.getText(c.childNodes))
            }
            return b
        };
        var da = l.createElement("div"), ab = "script" + (new Date).getTime(), ea = l.documentElement;
        da.innerHTML = "<a name='" + ab + "'/>";
        ea.insertBefore(da, ea.firstChild);
        l.getElementById(ab) && (p.find.ID = function(a, b, c) {
            if (typeof b.getElementById !== "undefined"&&!c)
                return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
        }, p.filter.ID = function(a, b) {
            var c = typeof a.getAttributeNode !== "undefined" &&
            a.getAttributeNode("id");
            return a.nodeType === 1 && c && c.nodeValue === b
        });
        ea.removeChild(da);
        var ea = da = null, z = l.createElement("div");
        z.appendChild(l.createComment(""));
        0 < z.getElementsByTagName("*").length && (p.find.TAG = function(a, b) {
            var c = b.getElementsByTagName(a[1]);
            if (a[1] === "*") {
                for (var d = [], e = 0; c[e]; e++)
                    c[e].nodeType === 1 && d.push(c[e]);
                c = d
            }
            return c
        });
        z.innerHTML = "<a href='#'></a>";
        z.firstChild && ("undefined" !== typeof z.firstChild.getAttribute && "#" !== z.firstChild.getAttribute("href")) && (p.attrHandle.href =
        function(a) {
            return a.getAttribute("href", 2)
        });
        z = null;
        if (l.querySelectorAll) {
            var ta = n, fa = l.createElement("div");
            fa.innerHTML = "<p class='TEST'></p>";
            if (!(fa.querySelectorAll && 0 === fa.querySelectorAll(".TEST").length)) {
                var n = function(a, b, c, d) {
                    b = b || l;
                    if (!d&&!n.isXML(b)) {
                        var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (e && (b.nodeType === 1 || b.nodeType === 9)) {
                            if (e[1])
                                return v(b.getElementsByTagName(a), c);
                            if (e[2] && p.find.CLASS && b.getElementsByClassName)
                                return v(b.getElementsByClassName(e[2]), c)
                            }
                        if (b.nodeType ===
                        9) {
                            if (a === "body" && b.body)
                                return v([b.body], c);
                            if (e && e[3]) {
                                var f = b.getElementById(e[3]);
                                if (f && f.parentNode) {
                                    if (f.id === e[3])
                                        return v([f], c)
                                    } else 
                                        return v([], c)
                                    }
                            try {
                                return v(b.querySelectorAll(a), c)
                            } catch (h) {}
                        } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                            var e = b, i = (f = b.getAttribute("id")) || "__sizzle__", j = b.parentNode, k = /^\s*[+~]/.test(a);
                            f ? i = i.replace(/'/g, "\\$&") : b.setAttribute("id", i);
                            if (k && j)
                                b = b.parentNode;
                            try {
                                if (!k || j)
                                    return v(b.querySelectorAll("[id='" + i + "'] " + a), c)
                                } catch (m) {} finally {
                                f ||
                                e.removeAttribute("id")
                            }
                        }
                    }
                    return ta(a, b, c, d)
                }, ua;
                for (ua in ta)
                    n[ua] = ta[ua];
                fa = null
            }
        }
        var ga = l.documentElement, va = ga.matchesSelector || ga.mozMatchesSelector || ga.webkitMatchesSelector || ga.msMatchesSelector, bb=!1;
        try {
            va.call(l.documentElement, "[test!='']:sizzle")
        } catch (lc) {
            bb=!0
        }
        va && (n.matchesSelector = function(a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!n.isXML(a))
                try {
                    if (bb ||!p.match.PSEUDO.test(b)&&!/!=/.test(b))
                        return va.call(a, b)
            } catch (c) {}
            return n(b, null, null, [a]).length > 0
        });
        var H = l.createElement("div");
        H.innerHTML = "<div class='test e'></div><div class='test'></div>";
        H.getElementsByClassName && 0 !== H.getElementsByClassName("e").length && (H.lastChild.className = "e", 1 !== H.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(a, b, c) {
            if (typeof b.getElementsByClassName !== "undefined"&&!c)
                return b.getElementsByClassName(a[1])
        }, H = null));
        n.contains = l.documentElement.contains ? function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : true)
        } : l.documentElement.compareDocumentPosition ?
        function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : function() {
            return false
        };
        n.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var $a = function(a, b) {
            for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = p.match.PSEUDO.exec(a);) {
                e = e + c[0];
                a = a.replace(p.match.PSEUDO, "")
            }
            a = p.relative[a] ? a + "*" : a;
            c = 0;
            for (var h = f.length; c < h; c++)
                n(a, f[c], d);
            return n.filter(e, d)
        };
        d.find = n;
        d.expr = n.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = n.uniqueSort;
        d.text = n.getText;
        d.isXMLDoc =
        n.isXML;
        d.contains = n.contains;
        var Wb = /Until$/, Xb = /^(?:parents|prevUntil|prevAll)/, Yb = /,/, pb = /^.[^:#\[\.,]*$/, Zb = Array.prototype.slice, cb = d.expr.match.POS, $b = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        d.fn.extend({
            find: function(a) {
                var b = this, c, g;
                if (typeof a !== "string")
                    return d(a).filter(function() {
                        c = 0;
                        for (g = b.length; c < g; c++)
                            if (d.contains(b[c], this))
                                return true
                            });
                var e = this.pushStack("", "find", a), f, h, i;
                c = 0;
                for (g = this.length; c < g; c++) {
                    f = e.length;
                    d.find(a, this[c], e);
                    if (c > 0)
                        for (h = f; h < e.length; h++)
                            for (i =
                            0; i < f; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = d(a);
                return this.filter(function() {
                    for (var a = 0, g = b.length; a < g; a++)
                        if (d.contains(this, b[a]))
                            return true
                })
            },
            not: function(a) {
                return this.pushStack(Ba(this, a, false), "not", a)
            },
            filter: function(a) {
                return this.pushStack(Ba(this, a, true), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a === "string" ? d.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c = [], g, e, f = this[0];
                if (d.isArray(a)) {
                    var h, i = {}, j = 1;
                    if (f &&
                    a.length) {
                        g = 0;
                        for (e = a.length; g < e; g++) {
                            h = a[g];
                            i[h] || (i[h] = cb.test(h) ? d(h, b || this.context) : h)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (h in i) {
                                g = i[h];
                                (g.jquery ? g.index(f)>-1 : d(f).is(g)) && c.push({
                                    selector: h,
                                    elem: f,
                                    level: j
                                })
                            }
                            f = f.parentNode;
                            j++
                        }
                    }
                    return c
                }
                h = cb.test(a) || typeof a !== "string" ? d(a, b || this.context) : 0;
                g = 0;
                for (e = this.length; g < e; g++)
                    for (f = this[g]; f;)
                        if (h ? h.index(f)>-1 : d.find.matchesSelector(f, a)) {
                            c.push(f);
                            break
                        } else {
                            f = f.parentNode;
                            if (!f ||!f.ownerDocument || f === b || f.nodeType === 11)
                                break
                        }
                c = c.length > 1 ?
                d.unique(c) : c;
                return this.pushStack(c, "closest", a)
            },
            index: function(a) {
                return !a ? this[0] && this[0].parentNode ? this.prevAll().length : - 1 : typeof a === "string" ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this)
            },
            add: function(a, b) {
                var c = typeof a === "string" ? d(a, b): d.makeArray(a && a.nodeType ? [a] : a), g = d.merge(this.get(), c);
                return this.pushStack(!c[0] ||!c[0].parentNode || c[0].parentNode.nodeType === 11 ||!g[0] ||!g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : d.unique(g))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        d.each({
            parent: function(a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            parents: function(a) {
                return d.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return d.dir(a, "parentNode", c)
            },
            next: function(a) {
                return d.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return d.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return d.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return d.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return d.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return d.dir(a, "previousSibling",
                c)
            },
            siblings: function(a) {
                return d.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return d.sibling(a.firstChild)
            },
            contents: function(a) {
                return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
            }
        }, function(a, b) {
            d.fn[a] = function(c, g) {
                var e = d.map(this, b, c), f = Zb.call(arguments);
                Wb.test(a) || (g = c);
                g && typeof g === "string" && (e = d.filter(g, e));
                e = this.length > 1&&!$b[a] ? d.unique(e) : e;
                if ((this.length > 1 || Yb.test(g)) && Xb.test(a))
                    e = e.reverse();
                return this.pushStack(e,
                a, f.join(","))
            }
        });
        d.extend({
            filter: function(a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
            },
            dir: function(a, b, c) {
                for (var g = [], a = a[b]; a && a.nodeType !== 9 && (c === m || a.nodeType !== 1 ||!d(a).is(c));) {
                    a.nodeType === 1 && g.push(a);
                    a = a[b]
                }
                return g
            },
            nth: function(a, b, c) {
                for (var b = b || 1, d = 0; a; a = a[c])
                    if (a.nodeType === 1&&++d === b)
                        break;
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var ac = / jQuery\d+="(?:\d+|null)"/g,
        wa = /^\s+/, db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, eb = /<([\w:]+)/, bc = /<tbody/i, cc = /<|&#?\w+;/, fb = /<(?:script|object|embed|option|style)/i, gb = /checked\s*(?:[^=]|=\s*.checked.)/i, dc = /\/(java|ecma)script/i, rb = /^\s*<!(?:\[CDATA\[|\-\-)/, t = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>",
            "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
        t.optgroup = t.option;
        t.tbody = t.tfoot = t.colgroup = t.caption = t.thead;
        t.th = t.td;
        d.support.htmlSerialize || (t._default = [1, "div<div>", "</div>"]);
        d.fn.extend({
            text: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    var c = d(this);
                    c.text(a.call(this, b, c.text()))
                }) : typeof a !== "object" && a !== m ? this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(a)) : d.text(this)
            },
            wrapAll: function(a) {
                if (d.isFunction(a))
                    return this.each(function(b) {
                        d(this).wrapAll(a.call(this,
                        b))
                    });
                if (this[0]) {
                    var b = d(a, this[0].ownerDocument).eq(0).clone(true);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && a.firstChild.nodeType === 1;)
                            a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    d(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = d(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    d(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    d.nodeName(this,
                    "body") || d(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, false, function(a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = d(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                    "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, false, function(a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, d(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, g; (g = this[c]) != null; c++)
                    if (!a || d.filter(a, [g]).length) {
                        if (!b && g.nodeType === 1) {
                            d.cleanData(g.getElementsByTagName("*"));
                            d.cleanData([g])
                        }
                        g.parentNode && g.parentNode.removeChild(g)
                    }
                return this
            },
            empty: function() {
                for (var a = 0, b; (b = this[a]) != null; a++)
                    for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild;)
                        b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = a == null ? false : a;
                b = b == null ? a : b;
                return this.map(function() {
                    return d.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === m)
                    return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ac, "") : null;
                if (typeof a === "string"&&!fb.test(a) && (d.support.leadingWhitespace ||!wa.test(a))&&!t[(eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a =
                    a.replace(db, "<$1></$2>");
                    try {
                        for (var b = 0, c = this.length; b < c; b++)
                            if (this[b].nodeType === 1) {
                                d.cleanData(this[b].getElementsByTagName("*"));
                                this[b].innerHTML = a
                            }
                    } catch (g) {
                        this.empty().append(a)
                    }
                } else 
                    d.isFunction(a) ? this.each(function(b) {
                        var c = d(this);
                        c.html(a.call(this, b, c.html()))
                    }) : this.empty().append(a);
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (d.isFunction(a))
                        return this.each(function(b) {
                            var c = d(this), g = c.html();
                            c.replaceWith(a.call(this, b, g))
                        });
                    typeof a !== "string" &&
                    (a = d(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling, c = this.parentNode;
                        d(this).remove();
                        b ? d(b).before(a) : d(c).append(a)
                    })
                }
                return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, true)
            },
            domManip: function(a, b, c) {
                var g, e, f, h = a[0], i = [];
                if (!d.support.checkClone && arguments.length === 3 && typeof h === "string" && gb.test(h))
                    return this.each(function() {
                        d(this).domManip(a, b, c, true)
                    });
                if (d.isFunction(h))
                    return this.each(function(e) {
                        var f =
                        d(this);
                        a[0] = h.call(this, e, b ? f.html() : m);
                        f.domManip(a, b, c)
                    });
                if (this[0]) {
                    g = h && h.parentNode;
                    g = d.support.parentNode && g && g.nodeType === 11 && g.childNodes.length === this.length ? {
                        fragment: g
                    } : d.buildFragment(a, this, i);
                    f = g.fragment;
                    if (e = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild) {
                        b = b && d.nodeName(e, "tr");
                        e = 0;
                        for (var j = this.length, k = j - 1; e < j; e++)
                            c.call(b ? d.nodeName(this[e], "table") ? this[e].getElementsByTagName("tbody")[0] || this[e].appendChild(this[e].ownerDocument.createElement("tbody")) : this[e] : this[e],
                            g.cacheable || j > 1 && e < k ? d.clone(f, true, true) : f)
                        }
                    i.length && d.each(i, qb)
                }
                return this
            }
        });
        d.buildFragment = function(a, b, c) {
            var g, e, f, h;
            b && b[0] && (h = b[0].ownerDocument || b[0]);
            h.createDocumentFragment || (h = l);
            if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && h === l && a[0].charAt(0) === "<"&&!fb.test(a[0]) && (d.support.checkClone ||!gb.test(a[0]))) {
                e = true;
                (f = d.fragments[a[0]]) && f !== 1 && (g = f)
            }
            if (!g) {
                g = h.createDocumentFragment();
                d.clean(a, h, g, c)
            }
            e && (d.fragments[a[0]] = f ? g : 1);
            return {
                fragment: g,
                cacheable: e
            }
        };
        d.fragments =
        {};
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            d.fn[a] = function(c) {
                var g = [], c = d(c), e = this.length === 1 && this[0].parentNode;
                if (e && e.nodeType === 11 && e.childNodes.length === 1 && c.length === 1) {
                    c[b](this[0]);
                    return this
                }
                for (var e = 0, f = c.length; e < f; e++) {
                    var h = (e > 0 ? this.clone(true) : this).get();
                    d(c[e])[b](h);
                    g = g.concat(h)
                }
                return this.pushStack(g, a, c.selector)
            }
        });
        d.extend({
            clone: function(a, b, c) {
                var g = a.cloneNode(true), e, f, h;
                if ((!d.support.noCloneEvent ||
                !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11)&&!d.isXMLDoc(a)) {
                    Da(a, g);
                    e = Q(a);
                    f = Q(g);
                    for (h = 0; e[h]; ++h)
                        f[h] && Da(e[h], f[h])
                }
                if (b) {
                    Ca(a, g);
                    if (c) {
                        e = Q(a);
                        f = Q(g);
                        for (h = 0; e[h]; ++h)
                            Ca(e[h], f[h])
                        }
                }
                return g
            },
            clean: function(a, b, c, g) {
                b = b || l;
                typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || l);
                for (var e = [], f, h = 0, i; (i = a[h]) != null; h++) {
                    typeof i === "number" && (i = i + "");
                    if (i) {
                        if (typeof i === "string")
                            if (cc.test(i)) {
                                i = i.replace(db, "<$1></$2>");
                                f = (eb.exec(i) || ["", ""])[1].toLowerCase();
                                var j = t[f] || t._default, k = j[0], m = b.createElement("div");
                                for (m.innerHTML = j[1] + i + j[2]; k--;)
                                    m = m.lastChild;
                                    if (!d.support.tbody) {
                                        k = bc.test(i);
                                        j = f === "table"&&!k ? m.firstChild && m.firstChild.childNodes : j[1] === "<table>"&&!k ? m.childNodes : [];
                                        for (f = j.length - 1; f >= 0; --f)
                                            d.nodeName(j[f], "tbody")&&!j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
                                        }
                                        !d.support.leadingWhitespace && wa.test(i) && m.insertBefore(b.createTextNode(wa.exec(i)[0]), m.firstChild);
                                        i = m.childNodes
                                } else 
                                    i = b.createTextNode(i);
                        var n;
                        if (!d.support.appendChecked)
                            if (i[0] &&
                            typeof(n = i.length) === "number")
                                for (f = 0; f < n; f++)
                                    Fa(i[f]);
                            else 
                                Fa(i);
                        i.nodeType ? e.push(i) : e = d.merge(e, i)
                    }
                }
                if (c) {
                    a = function(a) {
                        return !a.type || dc.test(a.type)
                    };
                    for (h = 0; e[h]; h++)
                        if (g && d.nodeName(e[h], "script") && (!e[h].type || e[h].type.toLowerCase() === "text/javascript"))
                            g.push(e[h].parentNode ? e[h].parentNode.removeChild(e[h]) : e[h]);
                        else {
                            if (e[h].nodeType === 1) {
                                b = d.grep(e[h].getElementsByTagName("script"), a);
                                e.splice.apply(e, [h + 1, 0].concat(b))
                            }
                            c.appendChild(e[h])
                        }
                    }
                return e
            },
            cleanData: function(a) {
                for (var b, c,
                g = d.cache, e = d.expando, f = d.event.special, h = d.support.deleteExpando, i = 0, j; (j = a[i]) != null; i++)
                    if (!j.nodeName ||!d.noData[j.nodeName.toLowerCase()])
                        if (c = j[d.expando]) {
                            if ((b = g[c] && g[c][e]) && b.events) {
                                for (var k in b.events)
                                    f[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                                    if (b.handle)
                                        b.handle.elem = null
                            }
                            h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando);
                            delete g[c]
                        }
                }
        });
        var xa = /alpha\([^)]*\)/i, ec = /opacity=([^)]*)/, fc = /([A-Z]|^ms)/g, hb = /^-?\d+(?:px)?$/i, gc = /^-?\d/, hc = /^([\-+])=([\-+.\de]+)/,
        ic = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, sb = ["Left", "Right"], tb = ["Top", "Bottom"], A, ib, jb;
        d.fn.css = function(a, b) {
            return arguments.length === 2 && b === m ? this : d.access(this, a, b, true, function(a, b, e) {
                return e !== m ? d.style(a, b, e) : d.css(a, b)
            })
        };
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = A(a, "opacity", "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": d.support.cssFloat ?
                "cssFloat": "styleFloat"
            },
            style: function(a, b, c, g) {
                if (a&&!(a.nodeType === 3 || a.nodeType === 8 ||!a.style)) {
                    var e, f = d.camelCase(b), h = a.style, i = d.cssHooks[f], b = d.cssProps[f] || f;
                    if (c !== m) {
                        g = typeof c;
                        if (g === "string" && (e = hc.exec(c))) {
                            c =+ (e[1] + 1)*+e[2] + parseFloat(d.css(a, b));
                            g = "number"
                        }
                        if (!(c == null || g === "number" && isNaN(c))) {
                            g === "number"&&!d.cssNumber[f] && (c = c + "px");
                            if (!i ||!("set"in i) || (c = i.set(a, c)) !== m)
                                try {
                                    h[b] = c
                            } catch (j) {}
                        }
                    } else 
                        return i && "get"in i && (e = i.get(a, false, g)) !== m ? e : h[b]
                }
            },
            css: function(a, b, c) {
                var g,
                e, b = d.camelCase(b);
                e = d.cssHooks[b];
                b = d.cssProps[b] || b;
                b === "cssFloat" && (b = "float");
                if (e && "get"in e && (g = e.get(a, true, c)) !== m)
                    return g;
                if (A)
                    return A(a, b)
            },
            swap: function(a, b, c) {
                var d = {}, e;
                for (e in b) {
                    d[e] = a.style[e];
                    a.style[e] = b[e]
                }
                c.call(a);
                for (e in b)
                    a.style[e] = d[e]
            }
        });
        d.curCSS = d.css;
        d.each(["height", "width"], function(a, b) {
            d.cssHooks[b] = {
                get: function(a, g, e) {
                    var f;
                    if (g) {
                        if (a.offsetWidth !== 0)
                            return Ga(a, b, e);
                        d.swap(a, ic, function() {
                            f = Ga(a, b, e)
                        });
                        return f
                    }
                },
                set: function(a, b) {
                    if (hb.test(b)) {
                        b = parseFloat(b);
                        if (b >= 0)
                            return b + "px"
                    } else 
                        return b
                }
            }
        });
        d.support.opacity || (d.cssHooks.opacity = {
            get: function(a, b) {
                return ec.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style, g = a.currentStyle, e = d.isNaN(b) ? "": "alpha(opacity=" + b * 100 + ")", f = g && g.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && d.trim(f.replace(xa, "")) === "") {
                    c.removeAttribute("filter");
                    if (g&&!g.filter)
                        return 
                }
                c.filter = xa.test(f) ? f.replace(xa, e) : f + " " + e
            }
        });
        d(function() {
            if (!d.support.reliableMarginRight)
                d.cssHooks.marginRight =
                {
                    get: function(a, b) {
                        var c;
                        d.swap(a, {
                            display: "inline-block"
                        }, function() {
                            c = b ? A(a, "margin-right", "marginRight") : a.style.marginRight
                        });
                        return c
                    }
                }
        });
        l.defaultView && l.defaultView.getComputedStyle && (ib = function(a, b) {
            var c, g, b = b.replace(fc, "-$1").toLowerCase();
            if (!(g = a.ownerDocument.defaultView))
                return m;
            if (g = g.getComputedStyle(a, null)) {
                c = g.getPropertyValue(b);
                c === ""&&!d.contains(a.ownerDocument.documentElement, a) && (c = d.style(a, b))
            }
            return c
        });
        l.documentElement.currentStyle && (jb = function(a, b) {
            var c, d = a.currentStyle &&
            a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
            if (!hb.test(d) && gc.test(d)) {
                c = f.left;
                if (e)
                    a.runtimeStyle.left = a.currentStyle.left;
                f.left = b === "fontSize" ? "1em" : d || 0;
                d = f.pixelLeft + "px";
                f.left = c;
                if (e)
                    a.runtimeStyle.left = e
            }
            return d === "" ? "auto" : d
        });
        A = ib || jb;
        d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 ||!d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
        }, d.expr.filters.visible = function(a) {
            return !d.expr.filters.hidden(a)
        });
        return d
    }(window);

    function h(a) {
        throw a;
    }
    var i = void 0, k=!0, l = null, m=!1;
    function aa() {
        return function(a) {
            return a
        }
    }
    function ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ca(a, b, c) {
        a || h(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function n(a, b, c) {
        n = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
        return n.apply(l, arguments)
    }
    function da(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    };
    function fa(a) {
        this.F = a
    }
    fa.prototype.get = function(a) {
        try {
            return ha(this.F.getItem(ia))[a]
        } catch (b) {}
    };
    fa.prototype.set = function(a, b) {
        try {
            var c = ha(this.F.getItem(ia)) || {};
            c[a] = b;
            this.F.setItem(ia, ja(c))
        } catch (d) {}
    };
    var ia = "optimizely_data", ka = new fa(window.localStorage), la = new fa(window.sessionStorage);
    function ma(a, b) {
        var c = {}, c = i, d = q("custom_revenue_goals");
        d && (a in d && na(d[a])) && (c = d[a]);
        var c = b && na(b) ? {
            a: Number(b)
        }
        : b && b.revenue ? {
            a: b.revenue
        }
        : c ? {
            a: c
        }
        : b, d = oa(), e = {};
        r(d, function(a) {
            e[a] = k
        });
        $.extend(c, {
            h: e
        });
        pa(a, "custom", c)
    }
    function pa(a, b, c) {
        c = c || {};
        v && (qa.push({
            name: a,
            type: b,
            options: c
        }), ra ? (sa(), w("Tracker", "Tracking event '" + a + "'")) : w("Tracker", "Queued tracking event '" + a + "'"))
    }
    function ta() {
        ua();
        $("html").bind("mousedown", va);
        $("html").bind("touchstart", wa)
    }
    function ua() {
        $("html").unbind("touchstart", wa);
        $("html").unbind("mousedown touchend", va);
        $("html").unbind("touchmove", ta)
    }
    function wa() {
        $("html").bind("touchend", va);
        $("html").bind("touchmove", ta)
    }
    function xa() {
        var a = document.location.href, b = q("pageview_revenue_goals");
        b && 0 < y(b) ? r(y(b), function(c) {
            pa(a, "pageview", {
                a: c,
                h: b[c]
            })
        }) : pa(a, "pageview")
    }
    function ya(a) {
        var b = q("goal_expressions"), c = [], d;
        for (d in b)
            b.hasOwnProperty(d) && $.each(b[d], function(b, f) {
                try {
                    if (a.match(RegExp(f, "i")))
                        return c.push(d), m
                    } catch (g) {}
                    return k
                });
        return c
    }
    function za() {
        var a = z("optimizelyPendingLogEvents") || "[]", b = [];
        try {
            b = ha(a)
        } catch (c) {}
        if (A(b))
            for (var a = 0, d = b.length; a < d; a++) {
                var e = b[a];
                if ("string" !== typeof e) {
                    b = [];
                    break
                } else 
                    try {
                        ha(e);
                        b = [];
                        break
                    } catch (f) {}
            } else 
                b = [];
        return b
    }
    function Aa(a, b) {
        if (Ca&&-1 !== a.indexOf(Da))
            try {
                var c = new XMLHttpRequest;
                if ("withCredentials"in c) {
                    c.onload = b;
                    c.open("GET", a, k);
                    c.withCredentials = k;
                    c.send();
                    return 
                }
                Ca = m;
                w("Tracker", "Found that XHR with credentials is not supported in this browser.")
        } catch (d) {
            w("Tracker", "XHR not supported"), Ca = m
        }
        var c = a, e = new Image;
        e.onload = b;
        c = c.replace("&" + Da, "");
        e.src = c;
        Ea.push(e)
    }
    function Fa(a) {
        var b = (a = a === k || "true" === a) ? "true": "false";
        a ? (B("optimizelyOptOut", b, Ga), B("optimizelyBuckets", b, Ga), alert("You have successfully opted out of Optimizely for this domain.")) : (B("optimizelyOptOut", b, Ga), alert("You are NOT opted out of Optimizely for this domain."))
    }
    function va() {
        ua();
        pa("engagement")
    }
    var qa = [], ra = m;
    function sa() {
        var a = ["a=" + Ha(), "d=" + Ia(), "y="+!!q("ip_anonymization"), "src=js"];
        Ja && a.push("override=true");
        r(Ka(), function(b) {
            var c = C(b);
            a.push("x" + c + "=" + b)
        });
        r(La(), function(b, c) {
            a.push("s" + b + "=" + c)
        });
        var b = [], c = Ma(), d = Na();
        r(qa, function(a) {
            var e = [], f = [];
            a.name && (e.push("n=" + encodeURIComponent(a.name)), f = f.concat(ya(a.name)));
            if (a.type && "pageview" === a.type) {
                var f = f.concat(D.concat(F)), g = Oa;
                g && (g = C(g), f.push(g))
            }
            a.options.anonymous !== k && (e.push("u=" + c), d && e.push("p=" + encodeURIComponent(d)));
            Ca &&
            e.push(Da);
            e.push("t=" + + new Date);
            Pa && e.push("dtpc=" + Pa);
            var j=!!a.options&&!!a.options.a && a.options.h || {}, g = y(j), o = Qa(oa(), function(a) {
                return !j[a]
            }), f = [{
                v: g,
                Q: f.concat([q("summary_revenue_goal_id") || l]),
                G: ["v=" + encodeURIComponent(a.options.a)]
            }, {
                v: o,
                Q: f,
                G: []
            }
            ];
            r(f, function(a) {
                (a.v.length || Ra) && b.push(e.concat(a.G).concat(["f=" + a.v.join(","), "g=" + a.Q.join(",")]).join("&"))
            });
            if ("custom" === a.type)
                try {
                    var p = a.name, t = Ma(), u = ka.get("customEvents") || {}, S = u[t] || (u[t] = []), S = A(S) ? S: [];
                    - 1 !== $.inArray(p, S) &&
                    S.splice($.inArray(p, S), 1);
                    S.push(p);
                    100 < S.length && S.shift();
                    u[t] = S;
                    ka.set("customEvents", u);
                    Sa("optimizelyCustomEvents", Ta || Ua || G)
            } catch (Sc) {}
        });
        var e = b.concat(za());
        Va(e);
        var f = a.join("&"), e = Wa ? b: e;
        Wa = k;
        for (var g = 0, j = e.length; g < j; g++) {
            var o = e[g], t = f + "&" + o;
            w("Tracker", "Making a log request.");
            var p = Ha(), u = q("log_host");
            p && (u = p.toString() + "." + u);
            p = document.location.protocol;
            "chrome-extension:" === p && (p = "http:");
            Aa(p + "//" + u + "/event?" + t, function() {
                for (var a = o, b = za(), c = 0, d = b.length; c < d; c++)
                    if (b[c] ===
                    a) {
                        b.splice(c, 1);
                        break
                    }
                Va(b);
                w("Tracker", "Removed a pending log event from the pending events cookie.")
            })
        }
        qa = [];
        ra = k
    }
    function Va(a) {
        for (var b = ja(a); 1536 < b.length;)
            a = a.slice(0, - 1), b = ja(a);
        B("optimizelyPendingLogEvents", b, 15)
    }
    var Ea = [], Wa = m, Da = "wxhr=true", Ca = k;
    function Xa(a, b) {
        var c = a.indexOf(b), d = l;
        - 1 !== c && (c += b.length + 1, d = parseFloat(a.substring(c)));
        return d
    }
    function Ya(a, b) {
        return r(a, function(a) {
            var d = a.sa || b;
            if (d&&-1 !== d.indexOf(a.substring) || a.prop)
                return a
        }) || {}
    };
    function Ia() {
        return q("admin_account_id")
    }
    function Za(a) {
        return q("audiences", a)
    }
    function $a(a) {
        a = q("audiences", a, "segment_id");
        return !a ? l : a
    }
    function ab() {
        if (!bb) {
            var a = q("click_goals") || [];
            bb = [];
            for (var b = 0, c = a.length; b < c; b++)
                for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
                    var j = e[f];
                    j && (j = {
                        event_name: d.event_name,
                        selector: j
                    }, "experiments"in d ? j.experiments = d.experiments : "url_conditions"in d && (j.url_conditions = d.url_conditions), "revenue"in d && (j.revenue = d.revenue), bb.push(j))
                }
            }
        return bb
    }
    function cb(a, b) {
        return q("dimensions", a.toString(), b)
    }
    function db(a) {
        a = cb(a, "condition_type");
        return !a ? l : a
    }
    function eb(a) {
        a = cb(a, "name");
        return !a ? l : a
    }
    function oa() {
        var a = Qa(fb(), gb);
        oa = function() {
            return a
        };
        return a
    }
    function hb(a) {
        var b = H(), c;
        for (c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = b[c];
                if (d && d.api_name === a)
                    return String(c)
            }
        return l
    }
    function ib() {
        return q("experiments") || {}
    }
    function fb() {
        return y(q("experiments") || {})
    }
    function jb(a) {
        return "manual" === I(a, "activation_mode")
    }
    function kb(a) {
        return "conditional" === I(a, "activation_mode")
    }
    function lb(a) {
        return I(a, "name") || "Exp " + a
    }
    function J(a) {
        return 'experiment "' + lb(a) + '" (' + a + ")"
    }
    function mb(a) {
        return I(a, "section_ids") || []
    }
    function nb(a) {
        return I(a, "variation_ids") || []
    }
    function Ha() {
        return q("project_id")
    }
    function H() {
        return q("segments") || {}
    }
    function ob(a, b) {
        for (var c = mb(a), d = 0; d < c.length; d++) {
            var e = pb(c[d]);
            if (K(e, b))
                return c[d]
        }
        return ""
    }
    function qb(a) {
        var b = {}, c = q("public_suffixes") || {};
        r(c, function(a, c) {
            r(c, function(c) {
                b[c] = a
            })
        });
        qb = function(a) {
            return b[a] || ""
        };
        return qb.call(l, a)
    }
    function pb(a) {
        return q("sections", a, "variation_ids") || []
    }
    function rb(a) {
        var b = [];
        r(a.split("_"), function(a) {
            (a = q("variations", a, "code")) && b.push(a)
        });
        return b.join("\n")
    }
    function C(a) {
        var b = {};
        r(fb(), function(a) {
            r(mb(a), function(d) {
                r(pb(d), function(d) {
                    b[d] = a
                })
            });
            r(nb(a), function(d) {
                b[d] = a
            })
        });
        C = function(a) {
            return b[a.split("_")[0]] || ""
        };
        return C.call(l, a)
    }
    function sb(a) {
        var b = C(a), c = mb(b);
        if (0 === c.length) {
            c = nb(b);
            for (b = 0; b < c.length; b++)
                if (c[b] === a)
                    return b
        } else {
            for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
                for (var e = pb(c[d]), f = 0; f < e.length; f++)
                    e[f] === a[d] && b.push(f);
            if (b !== [])
                return b
        }
        return - 1
    }
    function tb(a) {
        var b;
        return ub(a).join(b || ", ")
    }
    function ub(a) {
        var b = [];
        r(a.split("_"), function(a) {
            b.push(q("variations", a, "name") || "Var " + a)
        });
        return b
    }
    function gb(a) {
        return !!I(a, "enabled")
    }
    function I(a, b) {
        return q("experiments", a, b)
    }
    function vb(a) {
        return I(a, "google_analytics")
    }
    function wb(a, b) {
        var c = I(a, "universal_analytics");
        return L(c) ? c[b] : l
    }
    function xb(a, b) {
        var c = I(a, "at_internet");
        return L(c) ? c[b] : l
    }
    function q(a) {
        var b = DATA;
        if (r(arguments, function(a) {
            a = b[a];
            if (L(a))
                b = a;
            else 
                return l
        }) !== l)
            return b
    }
    function M(a, b) {
        return q("segments", a, b)
    }
    function yb() {
        var a = q("rum_sampling_rate");
        return L(a) ? a : 0.001
    }
    var bb = l;
    var zb = Math.pow(2, 32);
    function Ab(a, b) {
        function c(a, b) {
            var c = b & 65535;
            return ((b - c) * a | 0) + (c * a | 0) | 0
        }
        for (var d = a.length, e = b || 0, f = d&-4, g, j = 0; j < f; j += 4)
            g = a.charCodeAt(j) & 255 | (a.charCodeAt(j + 1) & 255)<<8 | (a.charCodeAt(j + 2) & 255)<<16 | (a.charCodeAt(j + 3) & 255)<<24, g = c(g, 3432918353), g = (g & 131071)<<15 | g>>>17, g = c(g, 461845907), e^=g, e = (e & 524287)<<13 | e>>>19, e = 5 * e + 3864292196 | 0;
        g = 0;
        switch (d%4) {
        case 3:
            g = (a.charCodeAt(f + 2) & 255)<<16;
        case 2:
            g|=(a.charCodeAt(f + 1) & 255)<<8;
        case 1:
            g|=a.charCodeAt(f) & 255, g = c(g, 3432918353), e^=c((g & 131071)<<15 | g>>>17, 461845907)
        }
        e^=
        d;
        e = c(e^e>>>16, 2246822507);
        e = c(e^e>>>13, 3266489909);
        return ((e^e>>>16)>>>0) / zb
    };
    var Bb = window.OPTIMIZELY_TEST_MODULE, Cb = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "), Db = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
    var Eb, Fb = 0, Ra = m, N = k, Gb = m, Pa = m, Hb = "", Ib = m, Jb = m, O = m, Kb = m, Ja = m, Lb = m, v = k, Ga = 31536E4;
    function Mb() {
        var a;
        if (!(a = Nb)) {
            a = window.navigator;
            var b = a.userAgent, c = Ya([{
                id: "opera",
                substring: "OPR",
                c: "OPR"
            }, {
                id: "gc",
                substring: "Chrome",
                c: "Chrome"
            }, {
                id: "safari",
                sa: a.vendor,
                substring: "Apple",
                c: "Version"
            }, {
                id: "ff",
                substring: "Firefox",
                c: "Firefox"
            }, {
                id: "opera",
                substring: "Opera",
                c: "Version"
            }, {
                id: "opera",
                prop: window.opera,
                c: "Opera"
            }, {
                id: "ie",
                substring: "MSIE",
                c: "MSIE"
            }, {
                id: "ie",
                substring: "Trident",
                c: "rv"
            }
            ], b), d = Ya([{
                id: "android",
                substring: "Android"
            }, {
                id: "blackberry",
                substring: "BlackBerry"
            }, {
                id: "ipad",
                substring: "iPad"
            }, {
                id: "iphone",
                substring: "iPhone"
            }, {
                id: "ipod",
                substring: "iPod"
            }, {
                id: "windows phone",
                substring: "Windows Phone"
            }
            ], b), e = l, f = c.c;
            f && (e = Xa(b, f) || Xa(a.appVersion, f));
            a = {
                V: c.id || "unknown",
                W: e || "unknown",
                qa: d.id || "unknown"
            }
        }
        return Nb = a
    }
    function Ob() {
        return Mb().V
    }
    function Pb() {
        return Mb().W
    }
    function Qb(a) {
        if (!a)
            return "";
        try {
            return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
        } catch (b) {
            return ""
        }
    }
    function Ma() {
        var a = z("optimizelyEndUserId");
        a || (a = "oeu" + + new Date + "r" + Math.random(), B("optimizelyEndUserId", a, Ga));
        return a
    }
    function Na() {
        return z("optimizelyPPID")
    }
    function Rb() {
        var a = "";
        try {
            a = (Sb || l).ip
        } catch (b) {}
        return P(a)
    }
    function Tb() {
        var a = Sb || l, a = a && a.location || {};
        return {
            city: P(a.city),
            continent: P(a.continent),
            country: P(a.country),
            region: P(a.region)
        }
    }
    function P(a) {
        if (!a)
            return "";
        a = a.toUpperCase();
        return "N/A" == a ? "" : a
    }
    function Ub() {
        return Mb().qa
    }
    function Vb() {
        return Wb ? "returning" : "new"
    }
    function Xb() {
        var a = navigator.appVersion || "", b = "";
        - 1 !== a.indexOf("Win") && (b = "Windows");
        - 1 !== a.indexOf("Mac") && (b = "Mac");
        - 1 !== a.indexOf("Linux") && (b = "Linux");
        return b
    }
    function Yb(a) {
        Q("User", "Setting current URL to %s", a);
        Zb = a
    }
    var Zb = i, Nb = i, Wb = i;
    function $b() {
        try {
            return window.performance.now() - (ac || 0)
        } catch (a) {
            return (new Date).getTime() - (ac || 0)
        }
    }
    var ac = $b();
    function bc(a) {
        var b = cc;
        b.u[a] || (b.u[a] = $b())
    }
    var dc;
    try {
        dc=!document.getElementsByTagName("body")[0]
    } catch (ec) {
        dc = l
    }
    var fc = l;
    try {
        window.requestAnimationFrame(function() {
            fc = $b()
        })
    } catch (gc) {}
    var hc = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
    function ic() {
        try {
            var a = Qa(window.performance.getEntries(), function(a) {
                return !!hc.test(a.name)
            })[0];
            if (!a)
                return l;
            var a = T({}, a), b;
            for (b in a) {
                var c = a[b];
                (0 === c || "string" === typeof c) && delete a[b]
            }
            return a
        } catch (d) {
            return l
        }
    }
    var cc = new function() {
        this.u = {};
        this.ma = Math.random() < yb()
    };
    function jc(a) {
        if (0 === $("body").length)
            setTimeout(function() {
                jc(a)
            }, 20);
        else {
            var b;
            b = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>";
            $("#optimizely-loading").remove();
            $("body").append(b)
        }
    };
    function kc(a) {
        a = a || {};
        if (v) {
            a && a.sVariable && (lc = a.sVariable);
            var b = lc || ("undefined" !== typeof window.s ? window.s : l);
            if (b)
                if (mc) {
                    if ((a = nc) && b)
                        try {
                            Q("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
                        } catch (c) {
                            Q("Integrator", "Error setting SiteCatalyst referrer: %s", c)
                        }
                        Q("Integrator", "Tracking with SiteCatalyst");
                        r(oc(), function(a) {
                            var c = C(a), a = pc(c, a, 100, 100, 25, k), f = a.key + ": " + a.value, a = [], g = I(c, "site_catalyst_evar") || l, c = I(c, "site_catalyst_prop") || l;
                            g !== l && a.push("eVar" + g);
                            c !==
                            l && a.push("prop" + c);
                            r(a, function(a) {
                                Q("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                                b[a] = f
                            })
                        })
                    } else 
                        qc = k;
                else 
                    w("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
        }
    }
    function rc(a) {
        a = na(a) ? Number(a) : - 1;
        if ( - 1 !== [1, 2, 3].indexOf(a))
            sc = a;
        else 
            return sc
        }
    function tc() {
        if (v) {
            var a = nc;
            if (a)
                try {
                    Q("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
                } catch (b) {
                Q("Integrator", "Error setting Google Analytics referrer: %s", b)
            }
            r(oc(), function(a) {
                var b = C(a);
                if (I(b, "chartbeat")) {
                    var c = uc;
                    uc = "";
                    var g = pc(b, a, 10, 10, 5, m);
                    uc = c;
                    c = sb(a);
                    vc = g.key + ": " + String(c);
                    try {
                        Q("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", vc])
                    } catch (j) {
                        w("Integrator", "Error sending Chartbeat data for " + J(b))
                    }
                }
                if (I(b, "crazyegg")) {
                    g = pc(b, a, 100,
                    100, 15, m);
                    try {
                        Q("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = g.key + ": " + g.value
                    } catch (o) {
                        w("Integrator", "Error sending CrazyEgg data for " + J(b))
                    }
                }
                if (vb(b)) {
                    g = vb(b);
                    c = 0;
                    L(g) && (c = g.slot || c);
                    var g = c, c = vb(b), t = "";
                    L(c) && (t = c.tracker || t);
                    c = t;
                    t = pc(b, a, 28, 24, 5, k);
                    try {
                        var p = "";
                        "" !== c && (p = c + ".");
                        Q("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", g, sc);
                        _gaq.push([p + "_setCustomVar", g, t.key, t.value, sc])
                    } catch (u) {
                        w("Integrator", "Error sending Google Analytics data for " + J(b))
                    }
                }
                if (q("kissmetrics")) {
                    g =
                    pc(b, a, 100, 100, 15, k);
                    c = {};
                    c[g.key] = g.value;
                    try {
                        Q("Integrator", "Calling _kmq.set"), _kmq.push(["set", c])
                    } catch (E) {
                        w("Integrator", "Error sending KISSmetrics data for " + J(b))
                    }
                }
                if (I(b, "mixpanel")) {
                    g = pc(b, a, 100, 100, 15, m);
                    c = {};
                    c[g.key] = g.value;
                    try {
                        Q("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", c])
                    } catch (ea) {
                        w("Integrator", "Error sending Mixpanel data for " + J(b))
                    }
                }
                if (xb(b, "acct_no")) {
                    g = xb(b, "acct_no");
                    c = xb(b, "url");
                    t = pc(b, a, 28, 24, 5, k);
                    a = c + "/hit.xiti?s=" + g + "&abmvc=" + (b + "[" + encodeURIComponent(t.key) +
                    "]-0-" + a + "[" + encodeURIComponent(t.value) + "]") + "&type=mvt";
                    try {
                        Q("Integrator", "Sending AT Internet log call for account %s", g), Aa(a, l)
                    } catch (Ba) {
                        w("Integrator", "Error sending AT Internet data for " + J(b))
                    }
                }
            });
            a = z("optimizelyChartbeat") || "";
            try {
                if (a && vc != a && (Q("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), vc != a)
                    Q("Integrator", "Set new Chartbeat referral cookie."), B("optimizelyChartbeat", vc)
                } catch (c) {
                w("Integrator", "Error sending Chartbeat referral for " + a)
            }
            mc = k;
            wc && (xc(), wc =
            m);
            qc && (kc(), qc = m)
        }
    }
    function yc() {
        if (window.ClickTaleContext) {
            try {
                window.ClickTaleContext.getAggregationContextAsync("1", function(a) {
                    a.Location && window.optimizely.push(["overrideUrl", a.Location]);
                    for (var b in a.PageEvents) {
                        var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
                        Q("Integrator", "Playback ClickTale Integration - %s", e);
                        for (b = 0; b < e.length; b++) {
                            Q("Integrator", "Playback ClickTale Integration - %s", e[b]);
                            for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), j = 0; j < g.length; j++)
                                zc(g[j]) ? Q("Integrator",
                                "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[j], {
                                    force: k
                                }
                                ])
                            }
                    }
                })
            } catch (a) {
                Q("Integrator", "Playback ClickTale Aggregation Integration failed.")
            }
            try {
                window.ClickTaleContext.getRecordingContextAsync("1.1", function(a) {
                    if (a.inSingleRecordingScope) {
                        a.location && window.optimizely.push(["overrideUrl", a.location]);
                        Q("Integrator", "Playback ClickTale getRecordingContextAsync callback");
                        for (var b in a.fields)
                            Q("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), zc(a.fields[b]) ?
                            Q("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                                force: k
                            }
                            ])
                    }
                })
            } catch (b) {
                Q("Integrator", "Playback ClickTale Recording Integration failed.")
            }
        } else 
            Q("Integrator", "ClickTaleContext not defined.")
    }
    function Ac() {
        Q("Integrator", "Tracking with ClickTale.");
        "function" == typeof window.ClickTaleField ? r(oc(), function(a) {
            var b = C(a), c = pc(b, a, 100, 100, 15, m), c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
            Q("Integrator", "Setting ClickTale - %s", c);
            window.ClickTaleField(b, a);
            window.ClickTaleEvent(c)
        }) : Q("Integrator", "ClickTaleField() not defined.")
    }
    function Bc(a) {
        uc = a
    }
    function Cc(a) {
        lc = a
    }
    function Dc(a, b) {
        return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
    }
    function oc() {
        var a = D.concat(F), b = [];
        r(Ka(), function(c) {
            var e = C(c), f = m;
            if (gb(e)) {
                var g = tb(c);
                K(a, e) && (Q("Integrator", '"%s" relevant because experiment active', g), f = k);
                f && b.push(c)
            }
        });
        var c = Oa;
        c && b.push(c);
        return b
    }
    function zc(a) {
        return (a = Ec(rb(a))) ? a[1] : l
    }
    function xc() {
        if (v)
            if (mc) {
                var a = window[window.GoogleAnalyticsObject || "ga"];
                if (a) {
                    var b = nc;
                    if (b)
                        try {
                            Q("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)
                        } catch (c) {
                            Q("Integrator", "Error setting Universal Analytics referrer: %s", c)
                        }
                        Q("Integrator", "Tracking with Universal Analytics");
                        r(oc(), function(b) {
                            var c = C(b);
                            if (wb(c, "slot")) {
                                var f = wb(c, "slot"), g = wb(c, "tracker"), j = pc(c, b, 100, 100, 25, k), b = j.key + " (" + c + "): " + j.value;
                                150 <
                                b.length && (b = j.key.substring(0, 80) + " (" + c + "): " + j.value, b = b.substring(0, 149));
                                c = g ? g + "." : "";
                                Q("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
                                a(c + "set", "dimension" + f, b)
                            }
                        })
                    } else 
                        w("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
                } else 
                    wc = k
    }
    function pc(a, b, c, d, e, f) {
        a = uc + lb(a);
        b = ub(b);
        1 < b.length ? (b = $.map(b, function(a) {
            return a.substr(0, e - 1)
        }), b = b.join("~")) : b = b[0];
        f ? (a = Dc(a, c), b = Dc(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
        return {
            key: a,
            value: b
        }
    }
    var wc = m, qc = m, vc = "", sc = 2, mc = m, uc = "Optimizely ", lc = l;
    var Fc, Gc;
    function Hc(a, b, c) {
        if (!N)
            return m;
        var d = "number" === typeof b || "string" === typeof b ? String(b): l, e = b === k || b && b.force === k || c && c.force === k, c = ("object" === typeof b ? b : c) || {}, f = c.skip === k, b = c.skipPageview === k, g = c.enabledStatus;
        if (d)
            try {
                Ic(a, d, k)
        } catch (j) {
            w("API", "Error while activating experiment " + a + " for variation " + d + " -- proceeding without bucketing user.")
        }
        var o = l, t = [], p = [];
        na(a) ? t.push(a) : r(fb(), function(a) {
            jb(a) && t.push(a)
        });
        w("API", "Testing experiments to activate");
        r(t, function(a) {
            if (!e&&!Jc(a))
                Kc.push(a);
            else if (e || Lc(a, {
                manualMode: k,
                objectType: "experiment",
                enabledStatus: g,
                visitor: U
            }))(o = Mc(a, f)) && p.push(a)
            });
        Nc(p, t);
        Oc();
        tc();
        N&&!b && pa(document.location.href, "pageview")
    }
    function Pc(a) {
        if (!N)
            return m;
        var b = n(ka.set, ka, "asyncInfo"), c=!!a;
        c && (bc("geoArrive"), b(a));
        if (!Qc)
            if (Qc = k, Sb = a || Sb) {
                w("API", "Testing geodelayed segments");
                r(Rc, function(a) {
                    Tc(a)
                });
                var d = [];
                w("API", "Testing geodelayed experiments");
                r(Kc, function(a) {
                    Lc(a, {
                        manualMode: k,
                        objectType: "experiment",
                        visitor: U
                    }) && Mc(a) && d.push(a)
                });
                Nc(d, Kc);
                Oc();
                tc();
                Lb || pa(document.location.href, "pageview");
                Uc();
                bc(c ? "geoSuccess" : "geoCache")
            } else 
                bc("geoFailed");
        return k
    }
    function Vc(a, b) {
        var c = hb(a) || a, d = H()[c];
        d ? d.audience_id ? U.l(d.audience_id) : d.dimension_id ? U.r(d.dimension_id, b || k, m) : Wc(c, b) : w("API", "Unable to find segment: " + c)
    }
    function Ic(a, b, c) {
        Ja = k;
        N && c !== k && pa(document.location.href);
        var a = String(a), b = String(b), d = l, e = b.split("_"), f = mb(a), b = f && 0 !== f.length;
        if ("-1" === e[0]) {
            c = a;
            Xc[c] && delete Xc[c];
            Yc[c] && delete Yc[c];
            for (e = 0; e < V.length; e++)
                V[e].m === c && V.splice(e, 1);
            Zc()
        } else if (b && e.length == f.length)
            d = [], r(e, function(a, b) {
                256 >= Number(a) ? d.push(pb(f[b])[a]) : d.push(a)
            }), d = d.join("_");
        else if (!b && 1 == e.length && 256 >= Number(e[0])) {
            var c = String, e = e[0], g = nb(a), j = l;
            try {
                j = g[e]
            } catch (o) {}
            d = c(j)
        } else 
            1 == e.length ? d = e[0] : w("API", "Error: could not bucket user. Unknown arguments.");
        d && (b && ob(a, d) ? (b = d, c = ob(a, b), $c[a] = $c[a] || {}, $c[a][c] = b, w("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = ad(a), 1 === a.length && bd(a[0], "api.bucketUser", k)) : bd(d, "api.bucketUser", k));
        Oc()
    }
    function cd(a) {
        a && "tracking" === a || (w("API", "Optimizely disabled"), N = m);
        v = m
    }
    function dd() {
        w("API", "Finalizing API.");
        Uc();
        Fc = k
    }
    function ed(a, b) {
        var c = [], d = b;
        A(b) && (d = b[0], c = fd(b, 1));
        var e = a[d];
        e ? (w("API", 'Called function "' + d + '"'), e.apply(l, c)) : w("API", 'Error for unknown function "' + d + '"');
        gd()
    }
    function hd(a, b) {
        Fc ? w("API", "Error: can't add custom tags after Optimizely loads") : (Gc = Gc || {}, 2 == arguments.length ? Gc[a] = b : 1 == arguments.length && $.extend(k, Gc, a))
    }
    function id(a, b) {
        var c = hb(a) || a, b = L(b) ? b: k, d = H()[c];
        d ? d.audience_id ? U.D(d.audience_id) : d.dimension_id ? U.r(d.dimension_id, l) : jd(c, b) : w("API", "Unable find segment for: " + c)
    }
    function kd() {
        var a = y(H());
        r(a, function(a) {
            id(a, m)
        });
        ld()
    }
    function Uc() {
        md = {};
        nd = {};
        od = {};
        r(Ka(), function(a) {
            var b = C(a);
            md[b] = a.split("_");
            nd[b] = sb(a);
            od[b] = tb(a)
        });
        W = {};
        var a = q("audiences");
        a && (W.audiences = a);
        W.experiments = {};
        W.sections = {};
        W.segments = {};
        W.state = {};
        W.variations = {};
        W.visitor = {};
        W.customTags = Gc;
        for (var b = fb(), a = 0; a < b.length; a++) {
            var c = b[a], d = {};
            d.code = I(c, "code") || "";
            d.name = lb(c);
            d.conditional = kb(c);
            d.manual = jb(c);
            d.section_ids = mb(c);
            d.variation_ids = nb(c);
            W.experiments[c] = d
        }
        b = y(H());
        for (a = 0; a < b.length; a++)
            c = b[a], W.segments[c] = {
                name: M(c, "name") ||
                "Seg " + c
            };
        b = y(q("sections") || {});
        for (a = 0; a < b.length; a++)
            c = b[a], d = {}, d.name = q("sections", c, "name") || "Sec " + c, d.variation_ids = pb(c), W.sections[c] = d;
        b = y(q("variations") || {});
        for (a = 0; a < b.length; a++)
            c = b[a], d = {}, d.name = tb(c), d.code = rb(c), W.variations[c] = d;
        b = {};
        a = Ob();
        b.browser = {
            ff: "Firefox",
            ie: "Internet Explorer",
            safari: "Safari",
            gc: "Google Chrome",
            opera: "Opera"
        }
        [a] || "";
        b.browserVersion = Pb();
        b.location = Tb();
        b.ip = Rb();
        b.params = {};
        c = pd();
        c.reverse();
        a = 0;
        for (d = c.length; a < d; a++)
            try {
                b.params[qd(c[a][0])] = qd(c[a][1])
        } catch (e) {
            w("API",
            "Failed to decode parameter " + c[a][0] + "=" + c[a][1])
        }
        b.referrer = String(document.referrer);
        b.segments = La();
        b.mobile = "unknown" !== Ub();
        b.os = Xb();
        b.dimensions = U.e;
        b.audiences = U.d;
        W.visitor = b;
        a = {};
        a.activeExperiments = D || [];
        a.variationIdsMap = md;
        a.variationMap = nd;
        a.variationNamesMap = od;
        a.enabled = N;
        W.state = a;
        T(window.optimizely, {
            activeExperiments: D,
            allExperiments: ib(),
            all_experiments: ib(),
            data: W,
            variationIdsMap: md,
            variationMap: nd,
            variationNamesMap: od,
            variation_map: nd
        })
    }
    function rd(a) {
        if (!na(a))
            return m;
        Fb = Number(a)
    }
    function sd() {
        Pa = k
    }
    function td(a) {
        var b = "";
        "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
        7776E3 > a && (b = "less then minimum.", a = 7776E3);
        w("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
        Ga = a;
        ud()
    }
    function vd() {
        Lb = k
    }
    function wd() {
        z("optimizelyReportableFix") ? w("API", "skipping because cookie is set") : (r(q("audiences"), function(a) {
            $a(a) && (w("API", "Removing from reportable audience: " + a), U.D(a))
        }), B("optimizelyReportableFix", "1", 7776E3))
    }
    function xd(a) {
        var b = Na();
        a ? B("optimizelyPPID", a, Ga) : Sa("optimizelyPPID", Ta || Ua || G);
        a !== b && (w("Plan", "Resetting visitor buckets"), yd = {}, Xc = {}, Yc = {}, V = [], Oc());
        w("API", "Set PPID to " + a)
    }
    var W = {}, zd = {}, Sb = l, Qc = m, Kc = [], Rc = [], md = {}, nd = {}, od = {}, U = l;
    function Mc(a, b) {
        var b = b === k, c, d = l;
        r(V, function(b) {
            a == b.m && (d = b.id)
        });
        if ((c = d) && 0 < c.length)
            return w("Distributor", "Not distributing experiment " + a + " (already in plan)"), k;
        if (b || a in Xc)
            return w("Distributor", "Not distributing experiment " + a + " (is ignored)"), m;
        c = I(a, "enabled_variation_ids") || [];
        if (0 === c.length)
            return w("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), Ad(a), m;
        var e = I(a, "ignore") || 0, f = Na() || Ma();
        if (e > Math.floor(1E4 * Ab(f + a, 0)))
            return w("Distributor", "Permanently ignoring experiment " +
            a + "(" + e / 100 + "% likelihood)"), Ad(a), m;
        e = c;
        $c[a] !== i && (w("Distributor", "Taking into account bucketUser variations for experiment " + a), e = ad(a));
        var f = e, g = [], j = I(a, "variation_weights") || {};
        r(f, function(a) {
            g.push(j[a])
        });
        f = Bd(a, g);
        e = e[f];
        w("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
        bd(e, "distributor");
        return k
    }
    function Cd(a, b) {
        b = b || {};
        w("Distributor", "Testing conditionally activated experiment for conditions: " + a);
        zd[a] || (Dd(a, b), Fc && Uc())
    }
    function Dd(a, b) {
        function c() {
            Hc(a, b);
            o.isActive = K(D.concat(F), a);
            w("Distributor", "Activating conditionally activated experiment " + a)
        }
        var d = I(a, "conditional_code"), e = k, f;
        try {
            var g = eval("(function() {return " + ("(" + d + ")") + ";})()");
            "function" === typeof g && (e = m, f = g)
        } catch (j) {}
        var o = {
            isActive: m,
            experimentId: a
        };
        if (e) {
            if (e = {
                objectType: "experiment",
                enabledStatus: b.enabledStatus
            }, b.force ||!Jc(a) || Lc(a, e)) {
                var t = function() {
                    Jc(a) && (Ed(0, {
                        value: d
                    }) || g) ? c() : setTimeout(t, 50)
                };
                t();
                w("Distributor", "Set up conditional polling for " +
                a);
                zd[a] = k
            }
        } else 
            try {
                f(c, o), w("Distributor", "Set up conditional callback for " + a), zd[a] = k
        } catch (p) {
            w("Distributor", "Error running conditional callback function for " + a)
        }
    }
    function Bd(a, b) {
        var c = b.length;
        if (0 === c)
            return l;
        if (1 === c)
            return 0;
        for (var d = 0, e = 0; e < c; e++)
            d += b[e];
        e = Na() || Ma();
        d*=Ab(e + a, 1);
        for (e = 0; e < c; e++) {
            if (d < b[e])
                return e;
            d -= b[e]
        }
        d = Na() || Ma();
        return Math.floor(Ab(d + a, 2) * c)
    }
    function ad(a) {
        var b = [];
        r(I(a, "enabled_variation_ids") || [], function(c) {
            var d = k, e;
            for (e in $c[a]) 
                - 1 === c.indexOf($c[a][e]) && (d = m);
            d && b.push(c)
        });
        return b
    }
    var $c = {};
    function pd() {
        var a = window.location.search || "";
        0 === a.indexOf("?") && (a = a.substring(1));
        for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
            var d = "", e = "", f = a[c].split("=");
            0 < f.length && (d = f[0]);
            1 < f.length && (e = f[1]);
            b.push([d, e])
        }
        return b
    }
    function Fd() {
        for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);)
            d[b[1]] = b[2];
        return d
    }
    var Gd = /x(\d+)/;
    function Hd(a) {
        return a&&-1 !== String(a).indexOf("[native code]")
    };
    function Ec(a) {
        return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
    }
    function Id(a) {
        return - 1 !== a.indexOf("_optimizely_redirect_no_cookie")
    }
    function Jd(a) {
        var a = a || "", b = z("optimizelyRedirect");
        return Id(a) ||!b || b && "true" === b.split("|")[1] ? k : m
    }
    var nc = l, Oa = "", Kd = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/, Ld = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href\=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?{.+}[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/, Md = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;
    var ha, ja;
    (function() {
        function a(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = g[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"' : '"' + a + '"'
        }
        function b(c, d) {
            var g, u, E, ea, Ba = e, R, x = d[c];
            "function" === typeof j && (x = j.call(d, c, x));
            switch (typeof x) {
            case "string":
                return a(x);
            case "number":
                return isFinite(x) ? String(x) : "null";
            case "boolean":
            case "null":
                return String(x);
            case "object":
                if (!x)
                    return "null";
                e += f;
                R = [];
                if ("[object Array]" === Object.prototype.toString.apply(x)) {
                    ea = x.length;
                    for (g = 0; g < ea; g += 1)
                        R[g] = b(g, x) || "null";
                    E = 0 === R.length ? "[]" : e ? "[\n" + e + R.join(",\n" + e) + "\n" + Ba + "]" : "[" + R.join(",") + "]";
                    e = Ba;
                    return E
                }
                if (j && "object" === typeof j) {
                    ea = j.length;
                    for (g = 0; g < ea; g += 1)
                        "string" === typeof j[g] && (u = j[g], (E = b(u, x)) && R.push(a(u) + (e ? ": " : ":") + E))
                    } else 
                        for (u in x)
                            Object.prototype.hasOwnProperty.call(x, u) && (E = b(u, x)) && R.push(a(u) + (e ? ": " : ":") + E);
                E = 0 === R.length ? "{}" : e ? "{\n" + e + R.join(",\n" + e) + "\n" + Ba + "}" : "{" + R.join(",") + "}";
                e = Ba;
                return E
            }
        }
        var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, f, g = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, j;
        ja = function(a, c, d) {
            var g;
            f = e = "";
            if ("number" === typeof d)
                for (g = 0; g < d; g += 1)
                    f += " ";
            else 
                "string" === typeof d && (f = d);
            (j = c) && ("function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) && h(Error("JSON.stringify"));
            return b("", {
                "": a
            })
        };
        ha = function(a, b) {
            function d(a, c) {
                var e, f, g = a[c];
                if (g && "object" === typeof g)
                    for (e in g)
                        Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), f !== i ? g[e] = f : delete g[e]);
                return b.call(a, c, g)
            }
            var e, a = String(a);
            c.lastIndex = 0;
            c.test(a) && (a = a.replace(c, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return e = eval("(" + a + ")"), "function" ===
                typeof b ? d({
                    "": e
                }, "") : e;
            h(new SyntaxError("JSON.parse"))
        }
    })();
    function Nd(a, b) {
        var c;
        c = $.trim(b);
        var d = "";
        if (window.optimizely && window.optimizely.data)
            if (d = c.match(Od))
                d = window.optimizely.data.visitor.params[d[1]], d === i && (d = "");
            else {
                for (var d = c.split("."), e = window.optimizely, f = 0, g = d.length; f < g; f++)
                    if (e = e[d[f]], e === i || e === l) {
                        e = "";
                        break
                    }
                    d = "" + e
            }
        w("Template", c + " evaluated to: '" + d + "'");
        return d
    }
    var Pd = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g, Od = /^data\.visitor\.params\.(.*)$/;
    function Qd(a) {
        var b = a || Rd;
        w("Segmenter", "Loading segments cookie.");
        if (a = z("optimizelySegments")) {
            try {
                a = ha(a)
            } catch (c) {
                a = {}
            }
            r(a, function(a, c) {
                var d = H()[a];
                w("Segmenter", "Segments cookie contains segment id: " + a);
                d && d.audience_id ? b.l(d.audience_id) : d && d.dimension_id ? b.r(d.dimension_id, c, m) : X[a] = c
            })
        }
        w("Segmenter", "Evaluating all segments.");
        for (var a = y(H()), d = 0; d < a.length; d++) {
            var e = a[d];
            M(e, "is_api_only") ? w("Segmenter", "Not doing anything since segment " + e + " is api only.") : (w("Segmenter", "Testing whether to add to segment " +
            e), Jc(e) ? Tc(e) : Rc.push(e))
        }
        Sd.push(ud);
        ld();
        w("Integrator", "Loading third-party segments.");
        if (window.bk_results) {
            a = window.bk_results;
            w("Integrator", "Loading BlueKai segments.");
            try {
                r(a.campaigns, function(a) {
                    a = a.seg_id;
                    H()[a] ? Wc(a, k) : Za(a) && b.l(a)
                })
            } catch (f) {
                w("Integrator", "Error loading BlueKai segments.")
            }
        }
    }
    function ud() {
        var a = {};
        r(X, function(b, c) {
            c && (a[b] = c)
        });
        B("optimizelySegments", ja(a), Ga)
    }
    function Wc(a, b) {
        a&&!isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = k), X[a] = b, ld()) : w("Segmenter", "Unable to find segment for ID: " + a)
    }
    function ld() {
        r(Sd, function(a) {
            a()
        })
    }
    function Tc(a) {
        w("Segmenter", "Evaluating Segment " + a);
        if (Lc(a, {
            objectType: "segment"
        })) {
            var b;
            a:
            {
                var c = b = l;
                switch (M(a, "segment_value_type") || "") {
                case "browser":
                    b = Y.I();
                    c = "unknown";
                    break;
                case "campaign":
                    b = Y.ca();
                    c = "none";
                    break;
                case "country":
                    b = Y.o().country;
                    c = "unknown";
                    break;
                case "language":
                    b = Y.w();
                    c = "none";
                    break;
                case "mobile":
                    b = "unknown" !== Y.N();
                    break;
                case "os":
                    b = Y.ga();
                    c = "unknown";
                    break;
                case "referrer":
                    b = Y.ha();
                    c = "none";
                    break;
                case "source_type":
                    b = Y.ia();
                    c = "direct";
                    break;
                default:
                    b = "true";
                    break a
                }
                if (b ===
                l) {
                    if (X.hasOwnProperty(a)) {
                        b = l;
                        break a
                    }
                    b = c
                }
                b = Td(b)
            }
            b !== l && Wc(a, b)
        }
    }
    function Ud() {
        var a = Y.A();
        if (Y.g("utm_source") || Y.g("gclid") || Y.g("otm_source"))
            return "campaign";
        for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"], c = 0; c < b.length; c++)
            if (a.match(b[c]))
                return "search";
        return a && Qb(a) !== Qb(Y.n()) ? "referral" : l
    }
    function Vd() {
        var a = [];
        r(X, function(b, c) {
            c && a.push(b)
        });
        return a
    }
    function La() {
        var a = {};
        r(X, function(b, c) {
            c && (a[String(b)] = c)
        });
        return a
    }
    function Wd(a) {
        return r(X, function(b, c) {
            if ((M(b, "segment_value_type") || "") == a)
                return c
        })
    }
    function jd(a, b) {
        var c = hb(a) || a;
        X[c] ? (X[c] = m, ("undefined" === typeof b || b) && ld()) : w("Segmenter", "Not removing " + a + ", not found")
    }
    function Td(a, b) {
        var c, b = L(b) ? b: k;
        c = c || Xd;
        a = qd(a);
        a = String(a);
        b && (a = a.toLowerCase());
        a = a.substring(0, c);
        return encodeURIComponent(a)
    }
    var Sd = [], X = {}, Xd = 20;
    function Yd(a, b) {
        var c = k;
        r(a, function(a) {
            if (!b(a))
                return c = m
        });
        return c
    }
    function Z(a, b) {
        var c = m;
        r(a, function(a) {
            if (b(a))
                return c = k
        });
        return c
    }
    function K(a, b) {
        for (var c = 0; c < a.length; c++)
            if (b == a[c])
                return k;
        return m
    }
    function Zd(a, b) {
        var c = fd(arguments, 1);
        return function() {
            var b = fd(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    function r(a, b) {
        var c = l;
        if (A(a))
            for (var d = a.length, e = 0; e < d&&!(c = b.call(i, a[e], e), L(c)); ++e);
        else 
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(i, d, a[d]), L(c)))
                    break;
        return c
    }
    function T(a, b) {
        r(b, function(b, d) {
            a[b] = d
        });
        return a
    }
    function Qa(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            b(f) && c.push(f)
        }
        return c
    }
    function $d(a, b) {
        return r(b, function(b) {
            if (b === a)
                return k
        }) || m
    }
    function A(a) {
        return a && "object" === typeof a && a.length && "number" === typeof a.length
    }
    function L(a) {
        return "undefined" !== typeof a
    }
    function na(a) {
        return ("number" === typeof a || "string" === typeof a) && Number(a) == a
    }
    function y(a) {
        y = Object.va || function(a) {
            var c = [];
            r(a, function(a) {
                c.push(a)
            });
            return c
        };
        return y.call(l, a)
    }
    function ae(a, b) {
        function c() {
            var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement, c = document.createElement("script");
            c.src = a;
            c.type = "text/javascript";
            b.appendChild(c)
        }
        if (b)
            try {
                if ("loading" === document.readyState) {
                    var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random());
                    - 1 !== a.indexOf('"') ? w("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && h(Error("Document.write failed to append script")))
                } else 
                    h(Error("Not safe to attempt document.write"))
            } catch (e) {
            try {
                var f =
                new XMLHttpRequest;
                f.open("GET", a, m);
                f.onload = function() {
                    eval(f.responseText)
                };
                f.onerror = function() {
                    h(Error())
                };
                f.send()
            } catch (g) {
                Q("Common", "Failed to load %s synchronously", a), c()
            }
        } else 
            c()
    }
    function Q(a, b, c) {
        var d = window.console;
        if (O && d && d.log) {
            var e = fd(arguments, 1);
            e[0] = "Optimizely / " + a + " / " + b;
            Function.prototype.apply.call(d.log, d, e)
        }
    }
    function qd(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return a
        }
    }
    function fd(a, b) {
        return Array.prototype.slice.call(a, b || 0, a.length)
    };
    function w(a, b, c) {
        be.push({
            Z: new Date,
            X: a,
            message: b,
            R: c || m
        });
        ce && gd()
    }
    function de() {
        O = k
    }
    function ee() {
        Kb = O = k
    }
    function gd() {
        O && (r(be, function(a) {
            if (!a.pa && (!a.R || a.R === Kb)) {
                var b =+ a.Z;
                Q(a.X, a.message + (" [time " + (fe ? b - fe : 0) + " +" + (ge ? b - ge : 0) + "]"));
                ge = b;
                fe || (fe = b);
                a.pa = k
            }
        }), ce = k)
    }
    var ge = l, fe = l, be = [], ce = m;
    var he = /\s*;\s*/, ie = /^([^=]+)=?(.*)$/;
    function z(a) {
        var b = [];
        r(je(), function(c) {
            a === c.name && b.push(qd(c.value))
        });
        if (0 === b.length)
            return l;
        1 < b.length && Q("Cookie", "Values found for %s: %s", a, b.length);
        return b.pop()
    }
    function je() {
        var a, b = [];
        a = a || "";
        r((document.cookie || "").split(he), function(c) {
            var d = c.match(ie);
            d && 0 === d[1].indexOf(a) && b.push({
                name: d[1],
                value: d[2],
                q: c
            })
        });
        return b
    }
    function B(a, b, c) {
        var d = Ta || Ua || G, e = document.location.hostname, b = b || "";
        !Ua && q("remote_public_suffix") && ke.push({
            ua: c,
            name: a,
            value: b
        });
        d && (d === Ua && d !== G) && (Sa(a, e), Sa(a, G));
        le(a, b, d, c);
        var f = z(a);
        f === b ? Q("Cookie", "Successful set %s=%s on %s", a, b, d) : (Q("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), Q("Cookie", "Setting %s on %s", a, e), le(a, b, e, c), f = z(a), f === b ? (Q("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), G = e) : (Q("Cookie", "Could not set cookie %s, disabling event tracking.",
        a), v = m))
    }
    function Sa(a, b) {
        Q("Cookie", "Deleting %s on %s", a, b);
        document.cookie = [a, "=; domain=.", b, "; path=/; expires=", (new Date(0)).toUTCString()].join("")
    }
    function le(a, b, c, d) {
        a = [a, "=", encodeURIComponent(b), "; domain=.", c, "; path=/"];
        d && a.push("; expires=", (new Date( + new Date + 1E3 * d)).toUTCString());
        document.cookie = a.join("")
    }
    function me(a) {
        var b = Ta || Ua || G;
        b !== a && (Ta = String(a) || "", Q("Cookie", "Api public suffix set to: %s", Ta), ud(), Sa("optimizelySegments", b))
    }
    var G = "", Ta = "", Ua = "", ke = [];
    function ne() {}
    T(ne.prototype, {
        I: Ob,
        ba: Pb,
        N: Ub,
        H: function() {
            return {
                id: this.I(),
                version: this.ba(),
                mobileId: this.N()
            }
        },
        ca: function() {
            return this.g("utm_campaign")
        },
        J: z,
        z: Rb,
        w: function() {
            var a = "";
            try {
                a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
            } catch (b) {
                a = ""
            }
            return a
        },
        o: Tb,
        n: function() {
            return Zb || window.location.href
        },
        O: Vb,
        fa: function() {
            return !Wb ? k : !!la.get("first_session")
        },
        aa: pd,
        ga: Xb,
        A: function() {
            return z("optimizelyReferrer") || document.referrer || ""
        },
        ka: function() {
            return Na() !== l
        },
        ha: function() {
            return Qb(this.A())
        },
        P: Vd,
        ia: Ud,
        ea: function() {
            return document.referrer
        },
        g: function(a) {
            a: {
                for (var b = this.aa(), b = b || pd(), c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d[0] === a) {
                        a = d[1];
                        a = a.replace(/\+/g, " ");
                        a = qd(a);
                        break a
                    }
                }
                a = l
            }
            return a
        },
        da: function() {
            return Gc
        },
        K: function(a) {
            return (this.da() || {})[a]
        },
        ja: function() {
            var a = (ka.get("customEvents") || {})[Ma()] || [];
            return A(a) ? a : []
        },
        la: function(a) {
            var b = this.P();
            return K(b, a)
        },
        U: function(a) {
            return K(this.ja(), a)
        },
        getDate: function() {
            return new Date
        },
        M: function() {
            return (Sb || l) && (Sb || l).lists ||
            l
        },
        L: function(a) {
            a = this.M() && this.M()[a];
            L(a) || (a = l);
            return a
        }
    });
    var Y = new ne;
    function oe() {
        this.d = {};
        this.e = {};
        this.i = {};
        this.T = {}
    }
    oe.prototype.oa = function(a) {
        var b = this.i.hasOwnProperty(a) || this.T.hasOwnProperty(a);
        if (!this.d.hasOwnProperty(a) ||!b)
            try {
                var c = this.d, d = Za(a);
                d || h(Error("Unable to find audience for id: " + a));
                var e = pe(this, d.conditions);
                w("Visitor", "Checking if in audience " + a + ": " + e);
                c[a] = e
        } catch (f) {
            w("Visitor", "Error: " + f.message)
        }
        return this.d[a]
    };
    function qe(a, b, c, d) {
        d = T({
            p: k,
            S: k,
            j: k
        }, d);
        if (Za(b)) {
            a.d[b] = c;
            var e = $a(b);
            e ? a.T[b] = c : d.p ? a.i[b] = c : delete a.i[b];
            e && d.j && a.j(e, c);
            if (!e && d.p && d.S) {
                var f = [];
                r(a.i, n(function(a) {
                    this.d[a] && f.push(a)
                }, a));
                f.sort();
                B("optimizelyAudiences", f.join(","), 31536E4)
            }
        } else 
            w("Visitor", "Unable to find audience " + b)
    }
    oe.prototype.l = function(a) {
        qe(this, a, k)
    };
    oe.prototype.D = function(a) {
        qe(this, a, m)
    };
    oe.prototype.ra = function() {
        r(this.d, n(function(a) {
            qe(this, a, m, {
                p: !!this.i.hasOwnProperty(a)
            })
        }, this))
    };
    function re(a, b, c, d) {
        d=!L(d) || d;
        L(c) && c !== l && String(c) ? (d && (c = Td(String(c), m)), a.e[b] = c) : delete a.e[b];
        return a.e[b]
    }
    oe.prototype.r = function(a, b, c) {
        var d;
        a: {
            for (d in q("dimensions") || {}) {
                var e = a, f = cb(d, "api_name");
                if (e === (!f ? l : f))
                    break a
            }
            d = l
        }
        d = d || a;
        q("dimensions", d) ? "custom_dimension" === db(d) ? (b = re(this, d, b, c), a = cb(d, "segment_id"), (a=!a ? l : a) && this.j(a, b), w("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : w("Visitor", 'Unknown dimension "' + d + '"') : w("Visitor", "Unable to find dimension " + a)
    };
    oe.prototype.j = function(a, b) {
        b ? Wc(a, b) : jd(a)
    };
    var Rd = new oe;
    function se(a) {
        X = {};
        Qd(a)
    };
    function te(a, b) {
        if (a && b)
            if (ue)
                w("Evaluator", "Bound event " + b + " to selector " + a), ve(a, b);
            else {
                var c = {
                    f: b,
                    b: a,
                    type: "event '" + b + "' (click goal)",
                    k: k
                };
                w("Evaluator", "Add step to bind event " + c.f + " to selector " + c.b);
                we.push(c)
            }
    }
    function Nc(a, b) {
        if (N) {
            A(a) ? xe(a) : (a = [], xe(b));
            a = a.concat(F);
            F = [];
            for (var c = 0; c < a.length; c++)
                K(D, a[c]) || D.push(a[c]);
            c = a;
            c === i ? c = [] : na(c) && (c = [c]);
            for (var d = Ka(c), e = [], f = [], g = [], j = [], o = Qa(ab(), function(a) {
                return a.experiments ? m : ye(a.url_conditions || [])
            }), t = 0, p = o.length; t < p; t++) {
                var u = {
                    f: o[t].event_name,
                    b: o[t].selector,
                    type: "event '" + o[t].event_name + "' (click goal)",
                    k: k
                };
                "revenue"in o[t] && (u.revenue = o[t].revenue);
                e.push(u)
            }
            r(c, function(a) {
                var b = {}, c = I(a, "events") || {};
                r(c, function(a, c) {
                    b[a] = [c]
                });
                var c =
                Qa(ab(), function(b) {
                    return "experiments"in b ? a in b.experiments : m
                }), d = 0;
                for (; d < c.length; d++) {
                    var x = c[d];
                    b[x.selector] || (b[x.selector] = []);
                    b[x.selector].push({
                        eventName: x.event_name,
                        revenue: x.revenue,
                        experimentIds: x.experiments
                    })
                }
                r(b, function(b, c) {
                    r(c, function(c) {
                        e.push({
                            f: c.eventName,
                            h: c.experimentIds,
                            a: c.revenue,
                            b: b,
                            type: "event '" + c.eventName + "' (experiment " + a + ")",
                            k: k
                        })
                    })
                });
                c = I(a, "css") || "";
                d = I(a, "code") || "";
                c && g.push({
                    code: '$("body").append("<style>' + c.replace(/([\f\n\r\t\\'"])/g, "\\$1") + '</style>");',
                    b: "body",
                    type: "global css (experiment " + a + ")",
                    k: k
                });
                d && ze(d, f, j)
            });
            r(d, function(a) {
                for (var b = rb(a), b = b.split("\n"), c = [], d = k, e = 0, g = b.length; e < g; e++) {
                    var o = $.trim(b[e]);
                    if (o === "/* _optimizely_variation_url_end */")
                        d = k;
                    else if (o !== "") {
                        var p = Db.exec(o);
                        if (p && p.length === 13) {
                            var t = p[2] ? p[2].split(" "): [], o = p[4] ? p[4].split(" "): [], u = p[6] ? p[6]: "substring", Sc = p[8] ? p[8].split(" "): [], p = p[10] ? p[10].split(" "): [];
                            if (t.length > 0) {
                                d = Ae(t, Sc, u);
                                d = ye(d)
                            }
                            if (d && o.length > 0) {
                                d = Ae(o, p, u);
                                d=!ye(d)
                            }
                        } else 
                            d && c.push(o)
                        }
                }
                b =
                c.join("\n");
                ze(b, f, j, a)
            });
            c = [];
            c.push.apply(c, f);
            c.push.apply(c, g);
            c.push.apply(c, j);
            c.push.apply(c, e);
            we.push.apply(we, c);
            Be()
        }
    }
    function Be() {
        var a = m;
        Ce = l;
        for (w("Evaluator", De + " times waited");
        !a && 0 < we.length;
        ) {
            w("Evaluator", we.length + " steps remaining");
            var b = we.shift(), c = b, a = m;
            if (c.ta&&!ue)
                w("Evaluator", "Document not ready yet"), a = k;
            else if (c.k&&!ue && (c = c.b))
                for (var c = A(c) ? c : [c], d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!(e === l || e === i ||!e.length))
                        if (0 === ("document" == e ? $(document) : $(e)).length)
                            w("Evaluator", "'" + e + "' not found"), a = k
                }
            a ? we.unshift(b) : b.f ? (Ee(), w("Evaluator", "Bound event " + b.f + " to selector " + b.b), c = {}, b.a && (c = {
                a: b.a,
                h: b.h
            }), ve(b.b, b.f, c)) : b.code && (w("Evaluator", "Run code: " + b.code), Fe(b.code, b.t))
        }
        a ? (Ce = setTimeout(Be, 0 === De ? 10 : 50), De++) : (w("Evaluator", De + " total times waited"), Ee())
    }
    function Ee() {
        bc("flash");
        0 === Kc.length && bc("flashGeo")
    }
    function Fe(a, b) {
        a = a.replace(Pd, Nd);
        if (Ec(a))
            if (w("Evaluator", "Redirect detected"), Jd(a)) {
                w("Evaluator", "OK to redirect");
                var c = Id(a);
                w("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
                B("optimizelyRedirect", (b || "unknown variation") + "|" + (c ? "true" : "false"), 5);
                B("optimizelyReferrer", document.referrer, 5)
            } else {
                w("Evaluator", "NOT OK to redirect");
                return 
            }
        eval("var $j = $;");
        try {
            if (Ec(a)) {
                $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
                w("Evaluator",
                "Hiding body before redirect");
                var d = Ld.test(a) || Kd.test(a) || Md.test(a), e = /_keep_body_hidden=(\S+)/.test(a);
                d || e ? w("Evaluator", "Standard redirect detected - Will not unhide body.") : setTimeout(function() {
                    document.body && (document.body.style.visibility = "visible", document.body.style.display = "block", w("Evaluator", "Unhiding body -- did not redirect"), bc("bodyUnhidden"))
                }, 1700)
            }
            eval(a)
        } catch (f) {
            c = O, O = k, w("Evaluator", "Error: " + f.message), w("Evaluator", "Code: " + a), O = c, w("Evaluator", "Failed to run code: " +
            f.message)
        }
    }
    function ve(a, b, c) {
        c = c || {};
        if (!Ge[a] ||!Ge[a][b]) {
            var d = function() {
                pa(b, "custom", c)
            }, e = $(a);
            if (0 < e.length) {
                var f = function() {
                    e.unbind("touchend", d);
                    e.unbind("touchmove", f);
                    e.unbind("mousedown", d)
                }, g = function() {
                    f();
                    e.bind("touchmove", f);
                    e.bind("touchend", d)
                };
                e.bind("mousedown", d);
                e.bind("touchstart", g)
            } else 
                e = $("html"), f = function() {
                    e.undelegate(a, "touchend", d);
                    e.undelegate(a, "touchmove", f);
                    e.undelegate(a, "mousedown", d)
                }, e.delegate(a, "touchstart", function() {
                    f();
                    e.delegate(a, "touchend", d);
                    e.delegate(a,
                    "touchmove", f)
                }), e.delegate(a, "mousedown", d);
            Ge[a] || (Ge[a] = {});
            Ge[a][b] = "mousedown touchstart"
        }
    }
    function He(a) {
        Ie = a
    }
    function xe(a) {
        a || (a = fb());
        for (var b = 0; b < a.length; b++)
            J(a[b])
    }
    var Ge = {}, D = [], F = F || [], Ie = 0, ue = m, we = [], Ce = l, De = 0;
    $(function() {
        setTimeout(function() {
            bc("docReady");
            ue = k;
            Ce !== l && (w("Evaluator", "Document is ready"), clearTimeout(Ce), 0 < Ie ? setTimeout(Be, Ie) : Be())
        }, 50)
    });
    function Je(a) {
        var b = a.split(":");
        2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
        return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
    };
    function Lc(a, b) {
        var c = b.manualMode === k, d = b.objectType ? b.objectType: "experiment", e = "experiment" === d, f = b.enabledStatus, g = b.visitor || Rd;
        w("Condition", "Testing " + d + " " + a);
        var f = e && (L(f)?!!f : gb(a)), j = e && jb(a), o;
        a: switch (d) {
        case "experiment":
            o = I(a, "conditions");
            break a;
        case "segment":
            o = M(a, "add_condition");
            break a;
        default:
            o = []
        }
        if (e&&!f)
            return w("Condition", "Failed for " + d + " " + a + " (paused)"), m;
        if (e&&!c && j)
            return w("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), m;
        if (o) {
            var t = "experiment" ===
            (d || "experiment"), p = k;
            r(o, function(b) {
                var c = b.type;
                if (t && b.only_first_time && Ke(a))
                    w("Condition", c + " condition passed because it only gets checked when bucketing", k);
                else {
                    var d=!b.not, b = (0, Le[c])(b), e = b !== d;
                    w("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
                    if (e)
                        return p = m
                }
            });
            if (!p)
                return w("Condition", "Failed for " + d + " " + a + " (condition failed)"), m
        } else {
            a:
            {
                c = [];
                e = [];
                if ("experiment" === d)
                    c = I(a, "audiences") || [], e =
                    I(a, "urls") || [];
                else if ("segment" === d)(f = M(a, "audience_id")) && (c = [f]);
                else {
                    w("Condition", "Not a valid objectType: " + d);
                    d = m;
                    break a
                }
                if (0 < c.length && (w("Condition", "Testing audiences for " + d + " " + a + ": " + c), !Z(c, n(g.oa, g)))) {
                    w("Condition", "Failed to match any audiences for " + d + " " + a);
                    d = m;
                    break a
                }
                if (0 < e.length) {
                    w("Condition", "Testing URLs for " + d + " " + a);
                    var g = e, u = Y.n(), E = [], ea = [];
                    r(g, function(a) {
                        a.negate ? ea.push(a) : E.push(a)
                    });
                    g = function(a) {
                        return Z(a, function(a) {
                            return Me(u, a)
                        })
                    };
                    if (g(ea) ||!(0 === E.length ||
                    g(E))) {
                        w("Condition", "Failed to match any URL for " + d + " " + a);
                        d = m;
                        break a
                    }
                }
                d = k
            }
            if (!d)
                return m
        }
        return k
    }
    function Ne(a, b) {
        var c = b.value, d = a.id, e = a.version, f = a.mobileId;
        return f && "unknown" !== f ? (w("Condition", f, k), "mobile" === c || c === f) : 0 === c.indexOf(d) ? (c = c.substr(d.length), "" === c || c <= e && e < Number(c) + 1) : m
    }
    function Ed(a, b) {
        var c = b.value;
        if (c === i)
            return k;
        try {
            return Boolean(eval(c))
        } catch (d) {
            return m
        }
    }
    function Oe(a, b) {
        return Pe(b.value, b.match, a)
    }
    function Qe(a, b) {
        return Pe(b.value, b.match, a)
    }
    function Re(a, b) {
        var c = b.value;
        switch (b.match) {
        case "exact":
            if (a == c && "" != a)
                return k;
            break;
        case "prefix":
            if (0 == a.indexOf(c))
                return k;
            break;
        case "regex":
            try {
                var d = RegExp(c)
            } catch (e) {
                break
            }
            if (d.test(a))
                return k;
            break;
        case "cidr":
            try {
                var f;
                a:
                {
                    var g = new Se(c), j = Te(a);
                    j === l && h(Error("Invalid ip: " + a));
                    for (c = 0; 4 > c; c++)
                        if ((j[c] & g.B[c]) !== g.C[c]) {
                            f = m;
                            break a
                        }
                    f = k
                }
                return f
            } catch (o) {}
        }
        return m
    }
    function Ue(a, b) {
        var c = b.value;
        return "any" === c || 0 === a.indexOf(c)
    }
    function Ve(a, b) {
        var c = b.value.split("|"), d = $.trim(c[0]), e = $.trim(c[1]), f = $.trim(c[2]), g = $.trim(c[3]);
        switch (c.length) {
        case 1:
            if (P(a.country) === d)
                return k;
            break;
        case 2:
            if (P(a.region) === e && P(a.country) === d)
                return k;
            break;
        case 3:
            if (P(a.city) === f && (P(a.region) === e || "" === e) && P(a.country) === d)
                return k;
            break;
        case 4:
            if (P(a.continent) === g)
                return k
        }
        return m
    }
    function We(a, b) {
        return Pe(b.value, b.match, a)
    }
    function Xe(a, b) {
        var c = b.value, d = b.match;
        w("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", k);
        return Ye(a, c, d)
    }
    function Ze(a) {
        return !!a
    }
    function ye(a) {
        var b = Y.n();
        return Z(a.values, da(Me, b))
    }
    function Me(a, b) {
        var c = b.value, d = b.match;
        w("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", k);
        return Ye(a, c, d)
    }
    function $e(a, b) {
        switch (b.value) {
        case "new":
            if ("returning" === a)
                return m;
            break;
        case "returning":
            return "returning" === a
        }
        return k
    }
    function pe(a, b) {
        var c = {
            and: function(b) {
                return Yd(b, da(pe, a))
            },
            or: function(b) {
                return Z(b, da(pe, a))
            },
            not: function(b) {
                1 !== b.length && h(Error('"not" argument too long: ' + ja(b)));
                return !pe(a, b[0])
            }
        };
        if (A(b)) {
            if (b[0]in c)
                return c[b[0]](b.slice(1));
            h(Error("Not an operator"))
        }
        var c = b.dimension_id, d = db(c), e = b.value;
        d || h(Error("No dimension type for dimension: " + c));
        var f = af[d];
        f || h(Error("Unknown dimension type: " + d));
        d = i;
        if (a.e.hasOwnProperty(c))
            d = a.e[c];
        else 
            try {
                var g = db(c) || "", j, o;
                q("dimensions", c) || h(Error("Unable to find dimension for id: " +
                c));
                "custom_dimension" === g && h(Error("calculateDimensionValue called on custom dimension " + c));
                (j = {
                    browser: n(Y.H, Y),
                    campaign: da(Wd, "campaign"),
                    cookies: n(Y.J, Y),
                    custom_tag: n(Y.K, Y),
                    event: n(Y.U, Y),
                    first_session: n(Y.fa, Y),
                    has_ppid: n(Y.ka, Y),
                    ip: n(Y.z, Y),
                    language: n(Y.w, Y),
                    list: n(Y.L, Y),
                    location: n(Y.o, Y),
                    query: n(Y.g, Y),
                    referrer: n(Y.A, Y),
                    segment: n(Y.la, Y),
                    source_type: da(Wd, "source_type"),
                    time_and_day: n(Y.getDate, Y),
                    url: n(Y.n, Y),
                    visitor: n(Y.O, Y)
                }
                [g]) && (o = j(eb(c)));
                w("Visitor", "Got dimension value " + c + ": " +
                o);
                d = o
        } catch (t) {
            w("Visitor", "Error: " + t.message)
        }
        return f(d, {
            value: e,
            match: b.match || "exact"
        })
    }
    function Jc(a) {
        var b = k;
        !I(a, "conditions")&&!M(a, "add_condition") ? (b = [M(a, "audience_id")], b[0] || (b = I(a, "audiences") || []), b = Yd(b, function(a) {
            a = Za(a);
            return !a.conditions ? k : bf(a.conditions)
        })) : (I(a, "uses_geotargeting") || M(a, "uses_geotargeting")) && (b = cf.ip(l) || cf.location(l));
        b || w("Condition", "Not ready to test (geotargeting): " + a);
        return b
    }
    function bf(a) {
        if (A(a))
            return Yd(a.slice(1), bf);
        var b = db(a.dimension_id) || "";
        return (b = cf[b]) ? b(a) : k
    }
    var Le = {
        browser: function(a) {
            var b = Y.H();
            return Z(a.values, function(a) {
                return Ne(b, {
                    value: a
                })
            })
        },
        code: function(a) {
            return Ed(0, a)
        },
        cookies: function(a) {
            for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
                if (c = b[d], Oe(Y.J(c), {
                    value: a[d] || i
                }))
                    return k;
            return m
        },
        custom_tag: function(a) {
            return Z(a.values, function(a) {
                return Qe(Y.K(a.key), {
                    value: a.value
                })
            })
        },
        event: function(a) {
            return Z(a.values, function(a) {
                return Y.U(a)
            })
        },
        ip: function(a) {
            var b = Y.z();
            return Z(a.values, da(Re, b))
        },
        language: function(a) {
            var b =
            Y.w();
            return Z(a.values, function(a) {
                return Ue(b, {
                    value: a
                })
            })
        },
        location: function(a) {
            var b = Y.o();
            return Z(a.values, function(a) {
                return Ve(b, {
                    value: a
                })
            })
        },
        query: function(a) {
            return 0 === a.values.length ? k : Z(a.values, function(a) {
                return We(Y.g(a.key), {
                    value: a.value
                })
            })
        },
        referrer: function(a) {
            return Z(a.values, da(Xe, Y.ea()))
        },
        segment: function(a) {
            var b = Y.P();
            return Z(a.values, function(a) {
                return Ze($d(a, b))
            })
        },
        url: ye,
        visitor: function(a) {
            var b = Y.O();
            return $e(b, a)
        }
    }, af = {
        browser: Ne,
        campaign: function(a, b) {
            "none" ===
            a && (a = l);
            return Pe(b.value, b.match, a)
        },
        code: Ed,
        cookies: Oe,
        custom_dimension: function(a, b) {
            var c = b.value;
            return !L(c) ? L(a) : c == a
        },
        custom_tag: Qe,
        event: aa(),
        first_session: aa(),
        ip: Re,
        language: Ue,
        list: function(a, b) {
            if (a === l ||!L(a))
                return m;
            var c = b.value;
            return !L(c) ? "" === a || a !== m : a.toString() === c
        },
        location: Ve,
        query: We,
        referrer: Xe,
        segment: Ze,
        source_type: function(a, b) {
            return b.value === a
        },
        time_and_day: function(a, b) {
            var c, d, e;
            c = b.value;
            e = c.split("_");
            3 !== e.length && h(Error("Invalid time and day string " + c));
            c =
            e[0];
            d = e[1];
            e = e[2].split(",");
            c = Je(c);
            d = Je(d);
            var f = 60 * a.getHours() + a.getMinutes(), g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
            return f >= c && f <= d&&-1 !== $.inArray(g, e)
        },
        url: Me,
        visitor: $e,
        has_ppid: aa()
    }, cf = {
        ip: function() {
            return !!Y.z()
        },
        location: function() {
            var a = Y.o();
            return !!(a && a.continent || a.country || a.region || a.city)
        },
        list: function(a) {
            return Y.L(eb(a.dimension_id) || "") !== l
        }
    };
    function Pe(a, b, c) {
        var d = L(c) && c !== l, e = L(a) && a !== l;
        switch (b || (e ? "exact" : "exists")) {
        case "exists":
            return d;
        case "exact":
            return d && String(c) === a;
        case "substring":
            return d&&-1 !== String(c).indexOf(a);
        case "regex":
            try {
                return e && d ? Boolean(String(c).match(RegExp(a))) : m
            } catch (f) {
                return m
            }
        default:
            return m
        }
    };
    function Se(a) {
        this.Y = $.trim(a);
        a = df(this.Y);
        a === l && h(Error("Invalid CIDR specification"));
        this.C = a.C;
        this.B = a.B
    }
    function df(a) {
        a = a.split("/");
        if (2 != a.length)
            return l;
        var b = parseInt(a[1], 10);
        if (isNaN(b) || 0 > b || 32 < b)
            return l;
        a = Te(a[0]);
        if (a === l)
            return l;
        if (0 > b || 32 < b)
            b = l;
        else {
            for (var c = [], d = 0; 4 > d; d++)
                c[d] = 0;
            for (var e = Math.floor(b / 8), d = 0; d < e; d++)
                c[d] = 255;
            4 > e && (c[e] = ef[b%8]);
            b = c
        }
        for (c = 0; 4 > c; c++)
            a[c]&=b[c];
        return {
            C: a,
            B: b
        }
    }
    function Te(a) {
        a = a.split(".");
        if (4 != a.length)
            return l;
        for (var b = [], c = 0; 4 > c; c++) {
            var d;
            d = a[c];
            if (3 < d.length)
                d = l;
            else {
                var e = parseInt(d, 10);
                d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? l : e
            }
            if (d === l)
                return l;
            b[c] = d
        }
        return b
    }
    var ef = [0, 128, 192, 224, 240, 248, 252, 254, 255];
    function Ye(a, b, c) {
        var d = a.split("?");
        if (d[1]) {
            var e = [];
            $.each(d[1].split("&"), function() {
                0 !== this.indexOf(ff) && e.push(this)
            });
            d[1] = e.join("&");
            a = d.join("?")
        }
        switch (c) {
        case "exact":
            return a = gf(a), a === gf(b);
        case "regex":
            try {
                return Boolean(a.match(b))
            } catch (f) {
                return m
            }
        case "simple":
            return a = gf(hf(a)), b = gf(hf(b)), a === b;
        case "substring":
            return a = gf(a, k), b = gf(b, k), - 1 !== a.indexOf(b);
        default:
            return m
        }
    }
    function hf(a) {
        var b = a.indexOf("?");
        - 1 !== b && (a = a.substring(0, b));
        b = a.indexOf("#");
        - 1 !== b && (a = a.substring(0, b));
        return a
    }
    function gf(a, b) {
        var a = a.replace("/?", "?"), a = a.toLowerCase().replace(/[/&?]+$/, ""), c = jf.slice(0);
        b || (c = c.concat(kf));
        for (var d = c.length, e = 0; e < d; e++)
            a = a.replace(RegExp("^" + c[e]), "");
        return a
    }
    var jf = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"], kf = ["www."], ff = "optimizely_";
    function lf(a) {
        return function(b) {
            if ("object" === typeof b && mf()) {
                var c = l, d;
                for (d in b)
                    b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
                return c
            }
            return a.apply(this, arguments)
        }
    }
    function mf() {
        for (var a in{})
            return k;
        return m
    };
    function bd(a, b, c) {
        var d;
        d = m === k;
        var c = c === k, e = m, f = C(a);
        if (f && (c ||!Ke(f))) {
            e = k;
            if (c && Ke(f))
                for (c = 0; c < V.length; c++)
                    V[c].m === f && V.splice(c, 1);
            V.push({
                m: f,
                id: a,
                source: b
            });
            d && (F = F || [], F.push(f));
            Yc[f] = k;
            Zc();
            w("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, k)
        }
        return e
    }
    function Ke(a) {
        return a in Xc || a in Yc
    }
    function Ka(a) {
        var b = [], c=!L(a), a = a || [];
        r(V, function(d) {
            (c || K(a, d.m)) && b.push(d.id)
        });
        return b
    }
    function Ad(a) {
        var b;
        if (b === k ||!Ke(a))
            Xc[a] = k, Zc()
    }
    function Oc() {
        var a = {};
        r(yd, function(b, c) {
            a[b] = c
        });
        r(V, function(b) {
            var c = C(b.id);
            a[c] = b.id
        });
        r(Xc, function(b) {
            a[b] = "0"
        });
        r(q("blacklisted_experiments") || {}, function(b) {
            b in a && delete a[b]
        });
        B("optimizelyBuckets", ja(a), Ga)
    }
    function Zc() {
        r(nf, function(a) {
            a()
        })
    }
    function ze(a, b, c, d) {
        if ( - 1 !== a.indexOf("_optimizely_redirect"))
            b.push({
                code: a,
                type: "code forced (redirect)",
                t: d
            });
        else {
            for (var a = a.split("\n"), e = m, f = m, g = [], j = []; 0 < a.length;) {
                var o;
                o = a.shift().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                var t = 0 < j.length;
                if (o)
                    if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i)))
                        f = k;
                    else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i)))
                        f = m;
                    else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i)))
                        e =
                        k;
                    else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i)))
                        e = m;
                    else if (!of.exec(o)&&!e)
                        if (f)
                            g.push(o);
                        else {
                            if (!t) {
                                var p = pf.exec(o), u = [];
                                p ? (u.push(p[1].replace(/^['"]|['"]$/g, "")), (p = qf.exec(o)) && 4 < p.length && u.push(p[4]), c.push({
                                    code: o,
                                    b: u,
                                    type: "safe jquery",
                                    k: k,
                                    t: d
                                })) : t = k
                            }
                            t && j.push(o)
                        }
            }
            0 < g.length && b.push({
                code: g.join("\n"),
                type: "forced evaluation",
                t: d
            });
            0 < j.length && c.push({
                code: j.join("\n"),
                type: "safe non-jquery",
                ta: k,
                t: d
            })
        }
    }
    function Ae(a, b, c) {
        for (var d = {
            values: []
        }, e = 0, f = a.length; e < f; e++)
            d.values.push({
                value: a[e],
                match: b[e] || c
            });
        return d
    }
    var nf = [], yd = {}, Xc = {}, qf = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, of = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, pf = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, Yc = {}, V = [];
    function rf() {
        if (!Bb) {
            var a = $;
            a.fn.attr = lf(a.fn.attr);
            a.fn.css = lf(a.fn.css);
            a.fn.extend = lf(a.fn.extend);
            var b = a.each;
            a.each = function(c, d, e) {
                if (!(c.length === i || a.isFunction(c)) ||!mf())
                    b.apply(this, arguments);
                else if (e)
                    for (var f in c) {
                        if (c.hasOwnProperty(f) && d.apply(c[f], e) === m)
                            break
                    } else 
                        for (f in c)
                            if (c.hasOwnProperty(f)&&!d.call(c[f], f, c[f]) === m)
                                break;
                return c
            };
            var c = a.fn.na, d = function(a, b, d) {
                return new c(a, b, d)
            }, e, f = document.getElementsByClassName;
            if (!Hd(f))
                var f = (window.optimizely || {}).getElementsByClassName,
                g = (window.optly || {}).getElementsByClassName, f = Hd(f) ? f: Hd(g) ? g: l;
            e = f;
            a.fn.na = function(b, c, f) {
                var g = d, j = document.getElementsByClassName;
                !Hd(j) && e && (g = function(a, b, c) {
                    document.getElementsByClassName = e;
                    a = d(a, b, c);
                    document.getElementsByClassName = j;
                    return a
                });
                if (!("string" === typeof b && c && "object" === a.type(c) && mf()))
                    return g(b, c, f);
                b = g(b, i, f);
                b.attr(c);
                return b
            }
        }
        w("Main", "Started, revision " + q("revision"));
        var f = Fd(), g = m, j;
        for (j in f)
            if (Gd.exec(j)) {
                g = k;
                break
            }("true" === f.opt_out || "false" === f.opt_out) && Fa("true" ===
        f.opt_out);
        Ra = "true" === f.force_tracking;
        if ("true" === f.disable || "true" === f.opt_out || "true" === z("optimizelyOptOut"))
            N = m;
        Gb = "true" === f.editor;
        Jb = "true" === f.show_preview;
        j = f.token;
        /^[0-9a-f]{32}$/.test(j) ? Hb = j : w("Query", "Blocked request to load unsafe script: " + j);
        O = "true" === f.log;
        Kb = "true" === f.verbose;
        v=!(Jb || g) || Ra;
        "false" === f.client && (N = m, Eb = "js/" + Ha() + ".js");
        if (Hb) {
            if (!window.optimizely ||!window.optimizely.unshift)
                window.optimizely = [];
            window.optimizely.unshift(["verifyPreviewProject", Ha()]);
            ae(["//optimizely.s3.amazonaws.com/js/preview/",
            Hb, ".js"].join(""), k);
            Jb && jc('Loading Preview<br /><img alt="loading" src="//www.optimizely.com/static/img/loading-32.gif" style="padding-top:20px" />')
        } else if (Jb&&!Hb)
            jc("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
        else {
            Sb = ka.get("asyncInfo") || l;
            j = document.location.hostname;
            var f = j.split("."), g = j, o = f[f.length - 1];
            2 < f.length && "appspot" === f[f.length - 2] && "com" === o ? g = f[f.length - 3] + ".appspot.com" : 1 < f.length && $d(o, Cb) && (g = f[f.length - 2] + "." + o);
            G = g;
            Q("Cookie",
            "Guessed public suffix: %s", G);
            Ua = qb(j);
            Q("Cookie", "Public suffix (from data): %s", Ua);
            Ta && Q("Cookie", "Api public suffix (from api): %s", Ta);
            j = Ob();
            f = Pb();
            "ie" === j && ("unknown" !== f && 8 > Number(f)) && (N = m);
            if (N) {
                j = z("optimizelyEndUserId");
                Wb = j !== i && j !== l;
                a:
                {
                    j = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider;adsbot-google;mediapartners-google".split(";");
                    f = navigator.userAgent;
                    f = f.toLowerCase();
                    for (g = 0; g < j.length; g++)
                        if ( - 1 !==
                        f.indexOf(j[g])) {
                            j = k;
                            break a
                        }
                    j = m
                }
                j ? v = m : Wb || la.set("first_session", k)
            }
            if (j = z("optimizelyBuckets")) {
                try {
                    j = ha(j)
                } catch (t) {
                    j = {}
                }
                var p = {};
                r(j, function(a, b) {
                    var b = String(b), c = C(b);
                    if (mb(c).length > 1 && b.indexOf("_")===-1) {
                        p[c] = p[c] || {};
                        p[c][a] = b
                    } else 
                        b !== "0" ? bd(b, "cookie") || (yd[a] = b) : Ad(a)
                });
                r(p, function(a, b) {
                    var c;
                    a: {
                        c = [];
                        for (var d = mb(a), e = 0; e < d.length; e++) {
                            var f = b[d[e]];
                            if (f === "0") {
                                c = "";
                                break a
                            }
                            c.push(f)
                        }
                        c = c.join("_")
                    }
                    c.length > 0 ? bd(c, "cookie") : Ad(a)
                })
            }
            Qd();
            Oa = (z("optimizelyRedirect") || "|").split("|")[0];
            if ((j = z("optimizelyReferrer")) && 0 < j.length)
                nc = j, B("optimizelyReferrer", "");
            j = Rd;
            w("Visitor", "Initializing");
            (f = z("optimizelyAudiences")) && 0 < f.length && r(f.split(","), n(function(a) {
                qe(this, a, k, {
                    p: k,
                    S: m
                })
            }, j));
            r(Vd(), n(function(a) {
                w("Visitor", "Found segment " + a);
                var b = H()[a];
                if (b && b.audience_id) {
                    w("Visitor", "Adding to audience " + b.audience_id);
                    qe(this, b.audience_id, k, {
                        j: m
                    })
                } else if (b && b.dimension_id) {
                    w("Visitor", "Setting dimension value " + b.dimension_id);
                    re(this, b.dimension_id, X[a], m)
                }
            }, j));
            U = Rd;
            Fc =
            m;
            Sd.push(Uc);
            nf.push(Uc);
            j = {
                $: $,
                activeExperiments: D || [],
                allExperiments: ib(),
                all_experiments: ib(),
                allVariations: q("variations") || {},
                data: W,
                getElementsByClassName: document.getElementsByClassName,
                revision: q("revision"),
                variationIdsMap: md,
                variation_map: nd,
                variationMap: nd,
                variationNamesMap: od
            };
            var f = {}, u = Zd(ed, f);
            T(f, {
                activate: Hc,
                activateGeoDelayedExperiments: Pc,
                activateSiteCatalyst: kc,
                activateUniversalAnalytics: xc,
                addToAudience: n(U.l, U),
                addToSegment: Vc,
                bindTrackElement: te,
                bucketUser: Ic,
                bucketVisitor: Ic,
                clickTaleRecord: Ac,
                clickTalePlayback: yc,
                customTag: hd,
                delayDomReadyEval: He,
                delayPageviewTracking: rd,
                disable: cd,
                log: de,
                getAccountId: Ia,
                getProjectId: Ha,
                googleAnalyticsCustomVariableScope: rc,
                integrationPrefix: Bc,
                optOut: Fa,
                overrideUrl: Yb,
                push: u,
                removeFromAllAudiences: n(U.ra, U),
                removeFromAllSegments: kd,
                removeFromAudience: n(U.D, U),
                removeFromSegment: id,
                sc_activate: kc,
                sc_svar: Cc,
                setCookieDomain: me,
                skipPageTracking: vd,
                optOutThirdPartyCookies: sd,
                setCookieExpiration: td,
                setDimensionValue: n(U.r, U),
                setUserId: xd,
                timeout: cd,
                trackEvent: ma,
                verbose: ee
            });
            f.removeFromReportableAudiences = wd;
            T(j, f);
            f = window.optimizely;
            A(f) && r(f, function(a) {
                u(a)
            });
            window.optimizely = j;
            window.optimizely.iapi = {
                evaluateSegments: da(se, i)
            };
            var E=!q("force_variation");
            j = Fd();
            r(j, function(a, b) {
                var c = Gd.exec(a);
                if (c)
                    if (E) {
                        Ib = k;
                        Q("Query", "Ignored parameter %s", a)
                    } else {
                        c = c[1];
                        Ic(c, b, k);
                        kb(c) ? Cd(c, {
                            force: k,
                            skipPageviewTracking: k
                        }) : Lc(c, {}) || Hc(c, {
                            force: k,
                            skipPageviewTracking: k
                        })
                    }
            });
            Ib ? jc("Force parameters are disabled for this project. See Project Code Settings.") :
            (rf.log(), Gb && ae("https://" + q("www_host") + "/js/innie.js"), N && (r(fb(), function(a) {
                if (!$d(a, F))
                    if (kb(a) && gb(a))
                        Cd(a);
                    else if (Jc(a)) {
                        if (Lc(a, {
                            objectType: "experiment"
                        })) {
                            w("Distributor", "Going to distribute " + J(a));
                            if (Mc(a)) {
                                F = F || [];
                                F.push(a)
                            }
                        }
                    } else 
                        !jb(a)&&!K(D, a) && Kc.push(a)
                }), Oc(), ta(), Lb || (0 < Fb ? setTimeout(function() {
                xa()
            }, Fb) : xa()), sa(), tc()), O && (r(Xc, function(a) {
                var b = lb(a);
                w("Plan", "Ignore experiment '" + b + "' (" + a + ")")
            }), r(V, function(a) {
                var b = C(a.id), c = tb(a.id);
                w("Plan", J(b) + ' in variation "' + c + '" (' +
                a.id + ")")
            })), Gb ? dd() : N && (Nc(), dd(), gd(), !q("installation_verified") && v && (j = "//" + q("www_host") + "/account/snippet_installed?project_id=" + Ha() + "&wxhr=true", w("Tracker", "Making snippet verification request."), Aa(j, l))), setTimeout(function() {
                window.optimizelyCode = {}
            }, 0), setTimeout(function() {
                Pc()
            }, 2E3), setTimeout(function() {
                if (v) {
                    var a = cc;
                    if (a.ma) {
                        var b = {
                            user: Ma(),
                            ppid: Na(),
                            project: Ha(),
                            sync: dc,
                            timebase: ac,
                            render: fc,
                            sampleRate: yb(),
                            numExps: D.concat(F).length,
                            codeVersion: q("version"),
                            wxhr: k
                        };
                        T(b, ic() ||
                        {});
                        T(b, a.u);
                        var c = ["optimizelyAudiences", "optimizelyBuckets", "optimizelyCustomEvents", "optimizelyPendingLogEvents", "optimizelyReferrer", "optimizelySegments"], d = {}, e = 0, f = 0;
                        r(je(), function(a) {
                            if (a.name.indexOf("optimizely") === 0) {
                                if (K(c, a.name)) {
                                    w("RUM", "Cookie size for " + a.name + ": " + a.q.length);
                                    d[a.name + "Len"] = a.q.length
                                }
                                e = e + a.q.length
                            }
                            f = f + a.q.length
                        });
                        T(d, {
                            allOptimizelyCookiesLen: e,
                            allCookiesLen: f
                        });
                        T(b, d || {});
                        var a = [], g;
                        for (g in b)
                            Object.prototype.hasOwnProperty.call(b, g) && a.push(window.encodeURIComponent(g) +
                            "=" + window.encodeURIComponent(b[g]));
                        Aa("https://rum.optimizely.com/rum?" + a.join("&"), l)
                    }
                }
            }, 3E3), $(function() {
                q("badge_html") && $("body").append(q("badge_html"))
            }), w("Main", "End of main"), bc("mainEnd"))
        }
    }
    rf.log = function() {
        w("Info", "Is enabled: " + N);
        w("Info", "Diagnostic enabled: false");
        w("Info", "Force variation enabled: "+!!q("force_variation"));
        w("Info", "Script to load: " + (Eb || "none"));
        w("Info", "Browser type: " + Ob());
        w("Info", "Browser version: " + Pb());
        var a = Ub();
        "unknown" !== a && w("Info", "Mobile browser type: " + a);
        w("Info", "New vs returning: " + Vb());
        w("Info", "Source type: " + Ud());
        w("Info", "User ID: " + Ma())
    };
    rf();
    optly.Cleanse.finish();
};
optimizelyCode();

