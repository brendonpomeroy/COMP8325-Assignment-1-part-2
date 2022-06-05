window.NYTABTEST = {}, window.NYTABTEST.config = function() {
    "use strict";
    var i, configs, tests = [], configDOMElement = document.getElementById("abtestconfig");
    if (configDOMElement)
        try {
            configs = JSON.parse(configDOMElement.innerHTML)
    } catch (e) {
        configs = [], window.NYTABTEST.configDOMElement = null
    } else 
        configs = [], window.NYTABTEST.configDOMElement = null;
    var Test = function(config) {
        var prop;
        for (prop in config)
            config.hasOwnProperty(prop) && (this[prop] = config[prop])
    };
    for (Test.prototype = {
        STATUS: {
            waiting: "-3",
            excluded: "-2",
            throttle: "-1",
            control: "0",
            variantA: "1",
            variantB: "2",
            variantC: "3"
        },
        userStatus: "-3",
        getTestId: function() {
            return this.testId
        },
        getTestName: function() {
            return this.testName
        },
        getThrottle: function() {
            return this.throttle
        },
        getAllocation: function() {
            return this.allocation
        },
        getUserStatus: function() {
            return this.userStatus
        },
        isUserThrottle: function() {
            return parseInt(this.userStatus, 10) === parseInt(this.STATUS.throttle, 10)
        },
        isUserVariant: function() {
            return parseInt(this.userStatus, 10) >= parseInt(this.STATUS.throttle, 10) ? this.userStatus : ""
        },
        isUserControl: function() {
            return parseInt(this.userStatus, 10) === parseInt(this.STATUS.control, 10)
        },
        getRandomNumber: function() {
            return Math.random()
        },
        determineVariant: function() {
            var min = 1, max = this.variants;
            this.userStatus = Math.floor(Math.random() * (max - min + 1) + min).toString()
        },
        determine: function(force) {
            "undefined" != typeof force ? this.userStatus = force : this.userStatus === this.STATUS.waiting ? this.getRandomNumber() <= this.throttle ? (this.userStatus = this.STATUS.throttle, this.determine()) : this.userStatus = this.STATUS.excluded : this.userStatus === this.STATUS.throttle && (this.getRandomNumber() <= this.allocation ? this.determineVariant() : this.userStatus = this.STATUS.control)
        }
    }, NYTABTEST.TestConstructor = Test, i = 0; i < configs.length; i += 1)
        configs[i].testId.length > 0 && tests.push(new Test(configs[i]));
    return tests
}(), window.NYTABTEST.engine = function() {
    "use strict";
    var engine, tests = window.NYTABTEST.config, cookieName = "NYT-wpAB", readCookie = function() {
        var i, len, cookieParts, name, cookiesList = document.cookie.split("; ");
        for (i = 0, len = cookiesList.length; len > i; i += 1)
            if (cookieParts = cookiesList[i].split("="), name = cookieParts.shift(), name === cookieName)
                return cookieParts.join("=");
        return ""
    }, writeCookie = function(value) {
        var now, options = {
            expires: 365,
            domain: ".nytimes.com",
            path: "/",
            secure: !1
        };
        null === value && (options.expires =- 1), now = new Date, now.setDate(now.getDate() + options.expires), options.expires = now, document.cookie = [cookieName, "=", value, "; expires=" + options.expires.toUTCString(), "; path=" + options.path, "; domain=" + options.domain, options.secure ? "; secure": ""].join("")
    }, cookiesEnabled = function() {
        var result, name = "NYTCookiesEnabled", exp = new Date;
        return exp.setTime(exp.getTime() + 1e4), document.cookie = name + "=test; expires=" + exp.toGMTString(), result =- 1 !== document.cookie.indexOf(name), result && (exp = new Date, exp.setTime(exp.getTime() - 1e4), document.cookie = name + "=test; expires=" + exp.toGMTString()), result
    };
    return engine = {
        getCookieName: function() {
            return cookieName
        },
        eachTest: function(iterator) {
            var i;
            for (i = 0; i < tests.length; i += 1)
                iterator(tests[i], i)
        },
        writeStatusToCookie: function() {
            var cookieValue = [];
            this.eachTest(function(test) {
                cookieValue.push(test.getTestId() + "|" + test.getUserStatus())
            }), writeCookie(cookieValue.length > 0 ? cookieValue.join("&") : null)
        },
        readStatusFromCookie: function() {
            var i, cookieValue, cookieValueArray;
            if (cookiesEnabled())
                for (cookieValue = readCookie(), cookieValueArray = cookieValue.length > 0 ? cookieValue.split("&") : [], i = 0; i < cookieValueArray.length; i += 1)
                    cookieValue = cookieValueArray[i].split("|"), this.eachTest(function(test) {
                        test.getTestId() === cookieValue[0] && test.determine(cookieValue[1])
                    });
            else 
                this.eachTest(function(test) {
                    test.determine(test.STATUS.excluded)
                })
        },
        determineStatus: function() {
            this.eachTest(function(test) {
                test.determine()
            })
        },
        getApplicationName: function() {
            if ("undefined" == typeof this.applicationName) {
                var meta = document.getElementById("applicationName");
                this.applicationName = meta ? meta.getAttribute("content") : ""
            }
            return this.applicationName
        },
        isAppIncludedInTest: function(test) {
            var i, len, applicationName = this.getApplicationName();
            if (this.hasClass(document.getElementsByTagName("html")[0], "template-minimal"))
                return !1;
            if (!test ||!test.applications)
                return !0;
            for (i = 0, len = test.applications.length; len > i; i += 1)
                if (test.applications[i] === applicationName)
                    return !0;
            return !1
        },
        findTest: function(query) {
            var found, that = this;
            return this.eachTest(function(test) {
                found || test.getTestId() !== query && test.getTestName() !== query ||!that.isAppIncludedInTest(test) || (found = test)
            }), found
        },
        getClassNamesForVariants: function() {
            var names = [], that = this;
            return this.eachTest(function(test) {
                test.isUserVariant() && that.isAppIncludedInTest(test) && names.push(test.getTestName() + "-" + test.getUserStatus())
            }), names.join(" ")
        },
        isUserVariant: function(query) {
            var test = this.findTest(query);
            return test ? test.isUserVariant() : !1
        },
        isUserControl: function(query) {
            var test = this.findTest(query);
            return test ? test.isUserControl() : !1
        },
        isUserThrottle: function() {
            var isThrottle=!1;
            return this.eachTest(function(test) {
                !isThrottle && test.isUserThrottle() && (isThrottle=!0)
            }), isThrottle
        },
        toObject: function() {
            var obj = {};
            return this.eachTest(function(test) {
                test.isUserThrottle() && (obj[test.getTestId()] = test.getUserStatus())
            }), obj
        },
        hasClass: function(element, cls) {
            return (" " + element.className + " ").indexOf(" " + cls + " ")>-1
        }
    }, null !== window.NYTABTEST.configDOMElement && (tests.length > 0 && (engine.readStatusFromCookie(), engine.determineStatus()), engine.writeStatusToCookie()), engine
}(), window.magnum = function() {
    "use strict";
    var classLength, device, orientationType, viewportClass, currentHeight, isGlobal, eventQueue = {}, featureFlags = [], rootEl = document.getElementsByTagName("html")[0], prefix = "viewport", breakpointPattern = "(\\b|\\s)" + prefix + "\\-(small|medium|large)(\\-([0-9]|[1-9][0-9]|1[0-9][0-9]))?\\b", breakpointRegex = new RegExp(breakpointPattern, "g"), breakpoints = [{
        key: "small",
        val: 315
    }, {
        key: "small-10",
        val: 450
    }, {
        key: "small-20",
        val: 600
    }, {
        key: "medium",
        val: 720
    }, {
        key: "medium-10",
        val: 765
    }, {
        key: "medium-20",
        val: 855
    }, {
        key: "medium-30",
        val: 960
    }, {
        key: "medium-31",
        val: 975
    }, {
        key: "medium-40",
        val: 1005
    }, {
        key: "medium-50",
        val: 1020
    }, {
        key: "medium-60",
        val: 1050
    }, {
        key: "large",
        val: 1080
    }, {
        key: "large-10",
        val: 1125
    }, {
        key: "large-11",
        val: 1155
    }, {
        key: "large-20",
        val: 1200
    }, {
        key: "large-21",
        val: 1215
    }, {
        key: "large-30",
        val: 1245
    }, {
        key: "large-40",
        val: 1280
    }, {
        key: "large-41",
        val: 1335
    }, {
        key: "large-50",
        val: 1375
    }, {
        key: "large-51",
        val: 1410
    }, {
        key: "large-60",
        val: 1607
    }, {
        key: "large-70",
        val: 1650
    }, {
        key: "large-80",
        val: 2030
    }
    ], init = function() {
        return 0 === getClasses().length && setClasses(""), currentHeight = getHeight(), isGlobal = document.cookie.indexOf("NYT-Edition=edition|GLOBAL") >= 0, document.createElement("main"), detectDevice(), detectMoz(), checkSize(), processFlags(), addAbTestClass(), window.onresize = checkSize, "mobile" === device && (orientationChange(), window.onorientationchange = orientationChange), {
            on: on,
            device: device,
            getWidth: getWidth,
            getHeight: getHeight,
            breakpoints: breakpoints,
            getViewport: getViewport,
            getOrientation: getOrientation,
            getViewportInteger: getViewportInteger,
            getFlags: getFlags,
            processFlags: processFlags,
            writeLogo: writeLogo,
            addNonResponsiveViewportMeta: addNonResponsiveViewportMeta,
            addAbTestClass: addAbTestClass,
            addEditionClass: addEditionClass
        }
    }, getWidth = function() {
        var func;
        if (document.documentElement && document.documentElement.clientWidth)
            func = function() {
                return document.documentElement.clientWidth
            };
        else if (window.self && window.self.innerWidth)
            func = function() {
                return window.self.innerWidth
            };
        else {
            if (!document.body)
                return function() {
                    return 0
                };
            func = function() {
                return document.body.clientWidth
            }
        }
        return func
    }(), getHeight = function() {
        var func;
        if (document.documentElement && document.documentElement.clientHeight)
            func = function() {
                return document.documentElement.clientHeight
            };
        else if (window.self && window.self.innerHeight)
            func = function() {
                return window.self.innerHeight
            };
        else {
            if (!document.body)
                return function() {
                    return 0
                };
            func = function() {
                return document.body.clientHeight
            }
        }
        return func
    }(), on = function(eventName, callback) {
        eventQueue.hasOwnProperty(eventName) ? eventQueue[eventName].callbacks.push(callback) : eventQueue[eventName] = {
            callbacks: [callback],
            trigger: createTrigger(eventName)
        }
    }, createTrigger = function(eventName) {
        return function() {
            var i, callbacks = eventQueue[eventName].callbacks;
            for (i = 0; i < callbacks.length; i += 1)
                callbacks[i].apply({}, arguments)
        }
    }, getViewport = function() {
        return viewportClass
    }, getViewportInteger = function() {
        var numberString = viewportClass.match(/\d+/), number = numberString ? numberString[0]: "00", match = viewportClass.match(/small|medium|large/)[0], sizes = {
            small: 1,
            medium: 10,
            large: 100
        };
        return parseInt(sizes[match] + "" + number, 10)
    }, setClasses = function(newClasses) {
        rootEl.className = newClasses
    }, getClasses = function() {
        return rootEl.className
    }, addClass = function(newClass) {
        setClasses(newClass + " " + getClasses())
    }, changeClass = function(classesArray, regex) {
        var newClasses, classes = getClasses();
        newClasses = classes.replace(regex, ""), newClasses += " " + classesArray.join(" "), setClasses(newClasses)
    }, detectDevice = function() {
        var regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i, touch = regex.test(navigator.userAgent);
        device = touch ? "mobile" : "desktop", addClass(device)
    }, detectMoz = function() {
        var match = navigator.userAgent.match(/Firefox/i);
        match && addClass("moz")
    }, getOrientation = function() {
        return orientationType
    }, orientationChange = function() {
        var regex = new RegExp("(\\b|\\s)" + prefix + "\\-(portrait|landscape)\\b", "g");
        orientationType = prefix, orientationType += 90 === window.orientation||-90 === window.orientation ? "-landscape" : "-portrait", changeClass([orientationType], regex), eventQueue.orientationChange && eventQueue.orientationChange.trigger(orientationType, viewportClass)
    }, checkSize = function() {
        var i, breakpoint, integer, width = getWidth(), newArray = [];
        for (i = 0; i < breakpoints.length && (breakpoint = breakpoints[i], width >= breakpoint.val || breakpoint.key === breakpoints[0].key); i += 1)
            newArray.push(prefix + "-" + breakpoint.key);
        newArray.length !== classLength && (changeClass(newArray, breakpointRegex), classLength = newArray.length, viewportClass = newArray[classLength - 1], integer = getViewportInteger(), eventQueue.breakPoint && eventQueue.breakPoint.trigger(integer, viewportClass))
    }, processFlags = function(flags) {
        var i, len, featureClasses = "";
        for (featureFlags = flags || [], i = 0, len = featureFlags.length; len > i; i += 1)
            featureClasses += " flag-" + featureFlags[i] + "-on";
        addClass(featureClasses)
    }, getFlags = function() {
        return featureFlags
    }, writeLogo = function(size, path, sectionName, mastheadOverrides) {
        var html, w, h, logo, isGlobal = document.cookie.indexOf("NYT-Edition=edition|GLOBAL") >= 0;
        mastheadOverrides = mastheadOverrides || "";
        var isTransparent = mastheadOverrides.indexOf("masthead-theme-transparent")>-1 || mastheadOverrides.indexOf("masthead-theme-transparent-ffffff")>-1, displayColor = mastheadOverrides.indexOf("masthead-theme-transparent-ffffff")>-1 ? "white-": "";
        "large" === size ? (w = isGlobal ? "450" : "370", h = isGlobal ? "44" : "50") : isGlobal ? (w = "236", h = "22") : isTransparent===!0 ? (w = "magazine" === sectionName ? "215" : "163", h = "30") : (w = "185", h = "26"), logo = path + (isGlobal ? "international-logo-" : "nyt-logo-") + displayColor + w + "x" + h, isTransparent===!0 && "magazine" === sectionName && (logo = path + "magazine-logo-" + displayColor + w + "x" + h), html = '<svg class="nyt-logo" width="' + w + '" height="' + h + '" role="img" aria-label="The New York Times"><image width="' + w + '" height="' + h + '" xlink:href="' + logo + '.svg" src="' + logo + '.png" alt="The New York Times" border="0" /></svg><img src="' + logo + '.png" class="nyt-logo-print" alt="The New York Times"/>', document.write(html)
    }, addAbTestClass = function() {
        var i, regex = new RegExp("has-ab-test-[\\w]*-[\\d]", "g"), classNamesToAdd = [], classNames = window.NYTABTEST.engine.getClassNamesForVariants();
        for (classNames = classNames.length > 0 ? classNames.split(" ") : [], i = 0; i < classNames.length; i += 1)
            classNamesToAdd.push("has-ab-test-" + classNames[i]);
        changeClass(classNamesToAdd, regex)
    }, addNonResponsiveViewportMeta = function(width) {
        var browserWidth, viewportTag;
        browserWidth = window.outerWidth ? window.outerWidth : getWidth(), browserWidth > width && (width = browserWidth), viewportTag = document.createElement("meta"), viewportTag.setAttribute("name", "viewport"), viewportTag.setAttribute("content", "width=" + width + ", user-scalable=yes"), document.getElementsByTagName("head")[0].appendChild(viewportTag), checkSize()
    }, addEditionClass = function(edition) {
        var classToAdd = "global" === edition ? "edition-international": "edition-domestic";
        changeClass([classToAdd], new RegExp("edition-[w]*", "g"))
    };
    return init()
}(), window.magnum.responsiveImages = function() {
    var bleedType, coverImage, coverImageHeight, coverImageWidth, coverImageCaption, storyHeader, headline, headlinetxt, headlinetxtCharCount, breakCandidates, storyMeta, storyMetaFooter, storyBody, cover, coverHeight, realImgHeight, realImgWidth, imageAspectRatio, coverWidth = windowWidth, partialBleedBreakpoint = 780, verticalPartialBleedImageBreakpoint = 50, windowWidth = window.magnum.getWidth(), windowHeight = window.magnum.getHeight(), setCoverImage = function(imageId, bleedStyle, imgHeight, imgWidth) {
        cover = document.getElementById("media-" + imageId), coverImage = document.getElementById("media-image-" + imageId), coverImageCaption = document.getElementById("media-caption-" + imageId), storyHeader = document.getElementById("story-header"), headline = document.getElementById("story-heading"), headlinetxt = headline.innerHTML, headlinetxtCharCount = headlinetxt.length, breakCandidates = headlinetxt.match(/[A-Z]+[a-z]*[’,.-:;]?[a-z]? /g), storyMeta = document.getElementById("story-meta"), storyMetaFooter = document.getElementById("story-meta-footer"), storyBody = document.getElementById("story-body"), realImgHeight = imgHeight, realImgWidth = imgWidth, bleedType = bleedStyle, imageAspectRatio = Math.min(realImgWidth / realImgHeight), "full-bleed" === bleedType ? makeFullBleed() : "full-bleed-cover" === bleedType && makePartialBleed()
    }, makeFullBleed = function() {
        getAllDimensions(), setCoverHeight(windowHeight), setStoryBodyTop(windowHeight + 50), fitImage(), makeNiceHeadline()
    }, makePartialBleed = function() {
        console.log("Make pb!");
        var newCoverHeight = windowHeight - headline.clientHeight, percentageOfVerticalImageVisable = newCoverHeight / coverImageHeight * 100, imageHeight = coverImageHeight, storyHeaderHeight = storyHeader.clientHeight;
        getAllDimensions(), coverWidth = windowWidth, windowWidth > partialBleedBreakpoint ? (verticalPartialBleedImageBreakpoint > percentageOfVerticalImageVisable && (newCoverHeight = .01 * verticalPartialBleedImageBreakpoint * coverImageHeight), setHeadlineTopPadding(), setCoverHeight(newCoverHeight), setStoryBelowCover(), fitImage()) : (setHeadlineTopPadding(), setCoverHeight(imageHeight), setStoryBodyTop(storyHeaderHeight)), makeNiceHeadline()
    }, fitImage = function() {
        var imageScaleRatio, coverScaleRatio;
        getAllDimensions(), imageScaleRatio = realImgHeight / realImgWidth, coverScaleRatio = coverHeight / coverWidth, imageScaleRatio > coverScaleRatio ? cropImageHorizontally() : coverScaleRatio > imageScaleRatio && ("full-bleed" === bleedType ? cropImageVertically() : scaleImageHorizontally())
    }, cropImageHorizontally = function() {
        var offsetTop, newHeight = coverImageWidth / imageAspectRatio;
        newHeight > coverHeight && (offsetTop =- Math.abs((newHeight - coverHeight) / 2), coverImage.style.marginTop = offsetTop + "px")
    }, cropImageVertically = function() {
        var newHeight, newWidth, offsetLeft;
        getAllDimensions(), newHeight = coverHeight, newWidth = coverHeight * imageAspectRatio, offsetLeft =- Math.abs((coverWidth - newWidth) / 2), coverImage.style.height = newHeight + "px", coverImage.style.width = newWidth + "px", coverImage.style.maxWidth = "none", coverImage.style.marginLeft = offsetLeft + "px"
    }, scaleImageHorizontally = function() {
        var newHeight = windowWidth / imageAspectRatio;
        setCoverHeight(newHeight), setStoryBelowCover()
    }, makeNiceHeadline = function() {
        var breakCandidatesLength, firstLineBreakPosition, secondLineBreakPosition, candidatePosition, optimalFirstLineEnding, i, optimalSplitPoint, optimalSecondLineEnding, headlineHeight = headline.clientHeight;
        if (headlineHeight > 265) {
            for (optimalSplitPoint = headlinetxtCharCount / 3, firstLineBreakPosition = 0, secondLineBreakPosition = 0, optimalFirstLineEnding = Math.floor(optimalSplitPoint), optimalSecondLineEnding = Math.floor(2 * optimalSplitPoint), breakCandidatesLength = breakCandidates.length, i = 0; breakCandidatesLength > i; i++)
                candidatePosition = headlinetxt.indexOf(breakCandidates[i]), Math.abs(candidatePosition - optimalFirstLineEnding) < Math.abs(firstLineBreakPosition - optimalFirstLineEnding) ? firstLineBreakPosition = candidatePosition : Math.abs(candidatePosition - optimalSecondLineEnding) < Math.abs(secondLineBreakPosition - optimalSecondLineEnding) && (secondLineBreakPosition = candidatePosition);
            headline.innerHTML = headlinetxt.substr(0, firstLineBreakPosition) + " <br />" + headlinetxt.substring(firstLineBreakPosition, secondLineBreakPosition) + "<br />" + headlinetxt.substr(secondLineBreakPosition)
        } else if (headlineHeight >= 120) {
            if (firstLineBreakPosition = 0, optimalFirstLineEnding = Math.round(3 * headlinetxtCharCount / 7), " " === headlinetxt.charAt(optimalFirstLineEnding))
                firstLineBreakPosition = optimalFirstLineEnding;
            else 
                for (breakCandidatesLength = breakCandidates.length, i = 0; breakCandidatesLength > i; i++)
                    candidatePosition = headlinetxt.indexOf(breakCandidates[i]), Math.abs(candidatePosition - optimalFirstLineEnding) < Math.abs(firstLineBreakPosition - optimalFirstLineEnding) && (firstLineBreakPosition = candidatePosition);
            headline.innerHTML = headlinetxt.substr(0, firstLineBreakPosition) + " <br />" + headlinetxt.substr(firstLineBreakPosition)
        }
    }, setStoryBelowCover = function() {
        var storyHeaderHeight = storyHeader.clientHeight;
        setStoryBodyTop(storyHeaderHeight)
    }, getAllDimensions = function() {
        windowHeight = window.magnum.getHeight(), windowWidth = window.magnum.getWidth(), coverHeight = cover.clientHeight, coverWidth = cover.clientWidth, coverImageHeight = coverImage.clientHeight, coverImageWidth = coverImage.clientWidth
    }, setStoryBodyTop = function(top) {
        storyBody.style.marginTop = top + "px"
    }, setCoverHeight = function(height) {
        cover.style.height = height + "px", setCaptionPosition(height)
    }, setHeadlineTopPadding = function() {
        coverImageCaption && (headline.style.paddingTop = coverImageCaption.clientHeight + 30 + "px")
    }, setCaptionPosition = function(top) {
        coverImageCaption && (coverImageCaption.style.top = top + 7 + "px")
    };
    return {
        partialBleedBreakpoint: partialBleedBreakpoint,
        setCoverImage: setCoverImage,
        makePartialBleed: makePartialBleed,
        makeFullBleed: makeFullBleed
    }
}(), window.Modernizr = function(a, b, c) {
    function C(a) {
        j.cssText = a
    }
    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }
    function E(a, b) {
        return typeof a === b
    }
    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c)
                return "pfx" == b ? e : !0
        }
        return !1
    }
    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d===!1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }
    function J() {
        e.input = function(c) {
            for (var d = 0, e = c.length; e > d; d++)
                u[c[d]] = c[d]in k;
            return u.list && (u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement), u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
            for (var e, f, h, d = 0, i = a.length; i > d; d++)
                k.setAttribute("type", f = a[d]), e = "text" !== k.type, e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && "textfield" !== h.getComputedStyle(k, null).WebkitAppearance && 0 !== k.offsetHeight, g.removeChild(k)) : /^(search|tel)$/.test(f) || (e = /^(url|email)$/.test(f) ? k.checkValidity && k.checkValidity()===!1 : k.value != l)), t[a[d]]=!!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var x, B, d = "2.6.2", e = {}, f=!0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            for (; d--;)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, z = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), A = {}.hasOwnProperty;
    B = E(A, "undefined") || E(A.call, "undefined") ? function(a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
        return A.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c)
            throw new TypeError;
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }), s.flexbox = function() {
        return I("flexWrap")
    }, s.flexboxlegacy = function() {
        return I("boxDirection")
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext&&!!a.getContext("2d")
    }, s.canvastext = function() {
        return !!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext
    }, s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = 9 === a.offsetTop
        }), c
    }, s.geolocation = function() {
        return "geolocation"in navigator
    }, s.postmessage = function() {
        return !!a.postMessage
    }, s.websqldatabase = function() {
        return !!a.openDatabase
    }, s.indexedDB = function() {
        return !!I("indexedDB", a)
    }, s.hashchange = function() {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
        return !!a.history&&!!history.pushState
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }, s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }, s.rgba = function() {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, s.hsla = function() {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
        return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
        return I("backgroundSize")
    }, s.borderimage = function() {
        return I("borderImage")
    }, s.borderradius = function() {
        return I("borderRadius")
    }, s.boxshadow = function() {
        return I("boxShadow")
    }, s.textshadow = function() {
        return "" === b.createElement("div").style.textShadow
    }, s.opacity = function() {
        return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return I("animationName")
    }, s.csscolumns = function() {
        return I("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, - a.length)), F(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
        return I("boxReflect")
    }, s.csstransforms = function() {
        return !!I("transform")
    }, s.csstransforms3d = function() {
        var a=!!I("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    }, s.csstransitions = function() {
        return I("transition")
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }), a
    }, s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, s.video = function() {
        var a = b.createElement("video"), c=!1;
        try {
            (c=!!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {}
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"), c=!1;
        try {
            (c=!!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {}
        return c
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.webworkers = function() {
        return !!a.Worker
    }, s.applicationcache = function() {
        return !!a.applicationCache
    }, s.svg = function() {
        return !!b.createElementNS&&!!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var K in s)
        B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
    return e.input || J(), e.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a)
                B(a, d) && e.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), e[a] !== c)
                return e;
            b = "function" == typeof b ? b() : b, "undefined" != typeof f && f && (g.className += " has-" + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, C(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
        return G([a])
    }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " has-js has-" + v.join(" has-") : ""), e
}(this, this.document), function(a, b) {
    function k(a, b) {
        var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }
    function l() {
        var a = r.elements;
        return "string" == typeof a ? a.split(" ") : a
    }
    function m(a) {
        var b = i[a[g]];
        return b || (b = {}, h++, a[g] = h, i[h] = b), b
    }
    function n(a, c, f) {
        if (c || (c = b), j)
            return c.createElement(a);
        f || (f = m(c));
        var g;
        return g = f.cache[a] ? f.cache[a].cloneNode() : e.test(a) ? (f.cache[a] = f.createElem(a)).cloneNode() : f.createElem(a), g.canHaveChildren&&!d.test(a) ? f.frag.appendChild(g) : g
    }
    function o(a, c) {
        if (a || (a = b), j)
            return a.createDocumentFragment();
        c = c || m(a);
        for (var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length; g > e; e++)
            d.createElement(f[e]);
        return d
    }
    function p(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(r, b.frag)
    }
    function q(a) {
        a || (a = b);
        var c = m(a);
        return r.shivCSS&&!f&&!c.hasCSS && (c.hasCSS=!!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
    }
    function v(a) {
        for (var b, c = a.getElementsByTagName("*"), d = c.length, e = RegExp("^(?:" + l().join("|") + ")$", "i"), f = []; d--;)
            b = c[d], e.test(b.nodeName) && f.push(b.applyElement(w(b)));
        return f
    }
    function w(a) {
        for (var b, c = a.attributes, d = c.length, e = a.ownerDocument.createElement(t + ":" + a.nodeName); d--;)
            b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
        return e.style.cssText = a.style.cssText, e
    }
    function x(a) {
        for (var b, c = a.split("{"), d = c.length, e = RegExp("(^|[\\s,>+~])(" + l().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), f = "$1" + t + "\\:$2"; d--;)
            b = c[d] = c[d].split("}"), b[b.length - 1] = b[b.length - 1].replace(e, f), c[d] = b.join("}");
        return c.join("{")
    }
    function y(a) {
        for (var b = a.length; b--;)
            a[b].removeNode()
    }
    function z(a) {
        function g() {
            clearTimeout(d._removeSheetTimer), b && b.removeNode(!0), b = null
        }
        var b, c, d = m(a), e = a.namespaces, f = a.parentWindow;
        return !u || a.printShived ? a : ("undefined" == typeof e[t] && e.add(t), f.attachEvent("onbeforeprint", function() {
            g();
            for (var d, e, f, h = a.styleSheets, i = [], j = h.length, l = Array(j); j--;)
                l[j] = h[j];
            for (; f = l.pop();)
                if (!f.disabled && s.test(f.media)) {
                    try {
                        d = f.imports, e = d.length
                    } catch (m) {
                        e = 0
                    }
                    for (j = 0; e > j; j++)
                        l.push(d[j]);
                        try {
                            i.push(f.cssText)
                        } catch (m) {}
            }
            i = x(i.reverse().join("")), c = v(a), b = k(a, i)
        }), f.attachEvent("onafterprint", function() {
            y(c), clearTimeout(d._removeSheetTimer), d._removeSheetTimer = setTimeout(g, 500)
        }), a.printShived=!0, a)
    }
    var f, j, c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i, g = "_html5shiv", h = 0, i = {};
    !function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden"in a, j = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            f=!0, j=!0
        }
    }();
    var r = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS!==!1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods!==!1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o
    };
    a.html5 = r, q(b);
    var s = /^$|\b(?:all|print)\b/, t = "html5shiv", u=!j && function() {
        var c = b.documentElement;
        return "undefined" != typeof b.namespaces && "undefined" != typeof b.parentWindow && "undefined" != typeof c.applyElement && "undefined" != typeof c.removeNode && "undefined" != typeof a.attachEvent
    }();
    r.type += " print", r.shivPrint = z, z(b)
}(this, document);
var requirejs, require, define;
!function(global) {
    function isFunction(it) {
        return "[object Function]" === ostring.call(it)
    }
    function isArray(it) {
        return "[object Array]" === ostring.call(it)
    }
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length && (!ary[i] ||!func(ary[i], i, ary)); i += 1);
        }
    }
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i>-1 && (!ary[i] ||!func(ary[i], i, ary)); i -= 1);
        }
    }
    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop)
    }
    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop]
    }
    function eachProp(obj, func) {
        var prop;
        for (prop in obj)
            if (hasProp(obj, prop) && func(obj[prop], prop))
                break
    }
    function mixin(target, source, force, deepStringMixin) {
        return source && eachProp(source, function(value, prop) {
            (force ||!hasProp(target, prop)) && (deepStringMixin && "string" != typeof value ? (target[prop] || (target[prop] = {}), mixin(target[prop], value, force, deepStringMixin)) : target[prop] = value)
        }), target
    }
    function bind(obj, fn) {
        return function() {
            return fn.apply(obj, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function getGlobal(value) {
        if (!value)
            return value;
        var g = global;
        return each(value.split("."), function(part) {
            g = g[part]
        }), g
    }
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + "\nhttp://requirejs.org/docs/errors.html#" + id);
        return e.requireType = id, e.requireModules = requireModules, err && (e.originalError = err), e
    }
    function newContext(contextName) {
        function trimDots(ary) {
            var i, part;
            for (i = 0; ary[i]; i += 1)
                if (part = ary[i], "." === part)
                    ary.splice(i, 1), i -= 1;
                else if (".." === part) {
                    if (1 === i && (".." === ary[2] || ".." === ary[0]))
                        break;
                        i > 0 && (ary.splice(i - 1, 2), i -= 2)
                }
        }
        function normalize(name, baseName, applyMap) {
            var pkgName, pkgConfig, mapValue, nameParts, i, j, nameSegment, foundMap, foundI, foundStarMap, starI, baseParts = baseName && baseName.split("/"), normalizedBaseParts = baseParts, map = config.map, starMap = map && map["*"];
            if (name && "." === name.charAt(0) && (baseName ? (normalizedBaseParts = getOwn(config.pkgs, baseName) ? baseParts = [baseName] : baseParts.slice(0, baseParts.length - 1), name = normalizedBaseParts.concat(name.split("/")), trimDots(name), pkgConfig = getOwn(config.pkgs, pkgName = name[0]), name = name.join("/"), pkgConfig && name === pkgName + "/" + pkgConfig.main && (name = pkgName)) : 0 === name.indexOf("./") && (name = name.substring(2))), applyMap && (baseParts || starMap) && map) {
                for (nameParts = name.split("/"), i = nameParts.length; i > 0; i -= 1) {
                    if (nameSegment = nameParts.slice(0, i).join("/"), baseParts)
                        for (j = baseParts.length; j > 0; j -= 1)
                            if (mapValue = getOwn(map, baseParts.slice(0, j).join("/")), mapValue && (mapValue = getOwn(mapValue, nameSegment))) {
                                foundMap = mapValue, foundI = i;
                                break
                            }
                    if (foundMap)
                        break;
                    !foundStarMap && starMap && getOwn(starMap, nameSegment) && (foundStarMap = getOwn(starMap, nameSegment), starI = i)
                }
                !foundMap && foundStarMap && (foundMap = foundStarMap, foundI = starI), foundMap && (nameParts.splice(0, foundI, foundMap), name = nameParts.join("/"))
            }
            return name
        }
        function removeScript(name) {
            isBrowser && each(scripts(), function(scriptNode) {
                return scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName ? (scriptNode.parentNode.removeChild(scriptNode), !0) : void 0
            })
        }
        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            return pathConfig && isArray(pathConfig) && pathConfig.length > 1 ? (removeScript(id), pathConfig.shift(), context.require.undef(id), context.require([id]), !0) : void 0
        }
        function splitPrefix(name) {
            var prefix, index = name ? name.indexOf("!"): - 1;
            return index>-1 && (prefix = name.substring(0, index), name = name.substring(index + 1, name.length)), [prefix, name]
        }
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts, prefix = null, parentName = parentModuleMap ? parentModuleMap.name: null, originalName = name, isDefine=!0, normalizedName = "";
            return name || (isDefine=!1, name = "_@r" + (requireCounter += 1)), nameParts = splitPrefix(name), prefix = nameParts[0], name = nameParts[1], prefix && (prefix = normalize(prefix, parentName, applyMap), pluginModule = getOwn(defined, prefix)), name && (prefix ? normalizedName = pluginModule && pluginModule.normalize ? pluginModule.normalize(name, function(name) {
                return normalize(name, parentName, applyMap)
            }) : normalize(name, parentName, applyMap) : (normalizedName = normalize(name, parentName, applyMap), nameParts = splitPrefix(normalizedName), prefix = nameParts[0], normalizedName = nameParts[1], isNormalized=!0, url = context.nameToUrl(normalizedName))), suffix=!prefix || pluginModule || isNormalized ? "" : "_unnormalized" + (unnormalizedCounter += 1), {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
            }
        }
        function getModule(depMap) {
            var id = depMap.id, mod = getOwn(registry, id);
            return mod || (mod = registry[id] = new context.Module(depMap)), mod
        }
        function on(depMap, name, fn) {
            var id = depMap.id, mod = getOwn(registry, id);
            !hasProp(defined, id) || mod&&!mod.defineEmitComplete ? getModule(depMap).on(name, fn) : "defined" === name && fn(defined[id])
        }
        function onError(err, errback) {
            var ids = err.requireModules, notified=!1;
            errback ? errback(err) : (each(ids, function(id) {
                var mod = getOwn(registry, id);
                mod && (mod.error = err, mod.events.error && (notified=!0, mod.emit("error", err)))
            }), notified || req.onError(err))
        }
        function takeGlobalQueue() {
            globalDefQueue.length && (apsp.apply(defQueue, [defQueue.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }
        function cleanRegistry(id) {
            delete registry[id]
        }
        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;
            mod.error ? mod.emit("error", mod.error) : (traced[id]=!0, each(mod.depMaps, function(depMap, i) {
                var depId = depMap.id, dep = getOwn(registry, depId);
                !dep || mod.depMatched[i] || processed[depId] || (getOwn(traced, depId) ? (mod.defineDep(i, defined[depId]), mod.check()) : breakCycle(dep, traced, processed))
            }), processed[id]=!0)
        }
        function checkLoaded() {
            var map, modId, err, usingPathFallback, waitInterval = 1e3 * config.waitSeconds, expired = waitInterval && context.startTime + waitInterval < (new Date).getTime(), noLoads = [], reqCalls = [], stillLoading=!1, needCycleCheck=!0;
            if (!inCheckLoaded) {
                if (inCheckLoaded=!0, eachProp(registry, function(mod) {
                    if (map = mod.map, modId = map.id, mod.enabled && (map.isDefine || reqCalls.push(mod), !mod.error))
                        if (!mod.inited && expired)
                            hasPathFallback(modId) ? (usingPathFallback=!0, stillLoading=!0) : (noLoads.push(modId), removeScript(modId));
                        else if (!mod.inited && mod.fetched && map.isDefine && (stillLoading=!0, !map.prefix))
                            return needCycleCheck=!1
                }), expired && noLoads.length)
                    return err = makeError("timeout", "Load timeout for modules: " + noLoads, null, noLoads), err.contextName = context.contextName, onError(err);
                needCycleCheck && each(reqCalls, function(mod) {
                    breakCycle(mod, {}, {})
                }), expired&&!usingPathFallback ||!stillLoading ||!isBrowser&&!isWebWorker || checkLoadedTimeoutId || (checkLoadedTimeoutId = setTimeout(function() {
                    checkLoadedTimeoutId = 0, checkLoaded()
                }, 50)), inCheckLoaded=!1
            }
        }
        function callGetModule(args) {
            hasProp(defined, args[0]) || getModule(makeModuleMap(args[0], null, !0)).init(args[1], args[2])
        }
        function removeListener(node, func, name, ieName) {
            node.detachEvent&&!isOpera ? ieName && node.detachEvent(ieName, func) : node.removeEventListener(name, func, !1)
        }
        function getScriptData(evt) {
            var node = evt.currentTarget || evt.srcElement;
            return removeListener(node, context.onScriptLoad, "load", "onreadystatechange"), removeListener(node, context.onScriptError, "error"), {
                node: node,
                id: node && node.getAttribute("data-requiremodule")
            }
        }
        function intakeDefines() {
            var args;
            for (takeGlobalQueue(); defQueue.length;) {
                if (args = defQueue.shift(), null === args[0])
                    return onError(makeError("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]));
                callGetModule(args)
            }
        }
        var inCheckLoaded, Module, context, handlers, checkLoadedTimeoutId, config = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            pkgs: {},
            shim: {},
            map: {},
            config: {}
        }, registry = {}, undefEvents = {}, defQueue = [], defined = {}, urlFetched = {}, requireCounter = 1, unnormalizedCounter = 1;
        return handlers = {
            require: function(mod) {
                return mod.require ? mod.require : mod.require = context.makeRequire(mod.map)
            },
            exports: function(mod) {
                return mod.usingExports=!0, mod.map.isDefine ? mod.exports ? mod.exports : mod.exports = defined[mod.map.id] = {} : void 0
            },
            module: function(mod) {
                return mod.module ? mod.module: mod.module = {
                    id: mod.map.id,
                    uri: mod.map.url,
                    config: function() {
                        return config.config && getOwn(config.config,
                        mod.map.id) || {}
                    }, exports: defined[mod.map.id]
                }
            }
        }, Module = function(map) {
            this.events = getOwn(undefEvents, map.id) || {}, this.map = map, this.shim = getOwn(config.shim, map.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, Module.prototype = {
            init: function(depMaps, factory, errback, options) {
                options = options || {}, this.inited || (this.factory = factory, errback ? this.on("error", errback) : this.events.error && (errback = bind(this, function(err) {
                    this.emit("error", err)
                })), this.depMaps = depMaps && depMaps.slice(0), this.errback = errback, this.inited=!0, this.ignore = options.ignore, options.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(i, depExports) {
                this.depMatched[i] || (this.depMatched[i]=!0, this.depCount -= 1, this.depExports[i] = depExports)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched=!0, context.startTime = (new Date).getTime();
                    var map = this.map;
                    return this.shim ? void context.makeRequire(this.map, {
                        enableBuildCallback : !0
                    })(this.shim.deps || [], bind(this, function() {
                        return map.prefix ? this.callPlugin() : this.load()
                    })) : map.prefix ? this.callPlugin() : this.load()
                }
            }, load : function() {
                var url = this.map.url;
                urlFetched[url] || (urlFetched[url]=!0, context.load(this.map.id, url))
            }, check: function() {
                if (this.enabled&&!this.enabling) {
                    var err, cjsModule, id = this.map.id, depExports = this.depExports, exports = this.exports, factory = this.factory;
                    if (this.inited) {
                        if (this.error)
                            this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining=!0, this.depCount < 1&&!this.defined) {
                                if (isFunction(factory)) {
                                    if (this.events.error)
                                        try {
                                            exports = context.execCb(id, factory, depExports, exports)
                                        } catch (e) {
                                        err = e
                                    } else 
                                        exports = context.execCb(id, factory, depExports, exports);
                                    if (this.map.isDefine && (cjsModule = this.module, cjsModule && void 0 !== cjsModule.exports && cjsModule.exports !== this.exports ? exports = cjsModule.exports : void 0 === exports && this.usingExports && (exports = this.exports)), err)return err.requireMap = this.map, err.requireModules = [this.map.id], err.requireType = "define", onError(this.error = err)
                                } else 
                                    exports = factory;
                                this.exports = exports, this.map.isDefine&&!this.ignore && (defined[id] = exports, req.onResourceLoad && req.onResourceLoad(context, this.map, this.depMaps)), delete registry[id], this.defined=!0
                            }
                            this.defining=!1, this.defined&&!this.defineEmitted && (this.defineEmitted=!0, this.emit("defined", this.exports), this.defineEmitComplete=!0)
                        }
                    } else 
                        this.fetch()
                }
            }, callPlugin: function() {
                var map = this.map, id = map.id, pluginMap = makeModuleMap(map.prefix);
                this.depMaps.push(pluginMap), on(pluginMap, "defined", bind(this, function(plugin) {
                    var load, normalizedMap, normalizedMod, name = this.map.name, parentName = this.map.parentMap ? this.map.parentMap.name: null, localRequire = context.makeRequire(map.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (plugin.normalize && (name = plugin.normalize(name, function(name) {
                        return normalize(name, parentName, !0)
                    }) || ""), normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap), on(normalizedMap, "defined", bind(this, function(value) {
                        this.init([], function() {
                            return value
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), normalizedMod = getOwn(registry, normalizedMap.id), void(normalizedMod && (this.depMaps.push(normalizedMap), this.events.error && normalizedMod.on("error", bind(this, function(err) {
                        this.emit("error", err)
                    })), normalizedMod.enable()))) : (load = bind(this, function(value) {
                        this.init([], function() {
                            return value
                        }, null, {
                            enabled: !0
                        })
                    }), load.error = bind(this, function(err) {
                        this.inited=!0, this.error = err, err.requireModules = [id], eachProp(registry, function(mod) {
                            0 === mod.map.id.indexOf(id + "_unnormalized") && cleanRegistry(mod.map.id)
                        }), onError(err)
                    }), load.fromText = bind(this, function(text, textAlt) {
                        var moduleName = map.name, moduleMap = makeModuleMap(moduleName), hasInteractive = useInteractive;
                        textAlt && (text = textAlt), hasInteractive && (useInteractive=!1), getModule(moduleMap), hasProp(config.config, id) && (config.config[moduleName] = config.config[id]);
                        try {
                            req.exec(text)
                        } catch (e) {
                            return onError(makeError("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]))
                        }
                        hasInteractive && (useInteractive=!0), this.depMaps.push(moduleMap), context.completeLoad(moduleName), localRequire([moduleName], load)
                    }), void plugin.load(map.name, localRequire, load, config))
                })), context.enable(pluginMap, this), this.pluginMaps[pluginMap.id] = pluginMap
            }, enable: function() {
                this.enabled=!0, this.enabling=!0, each(this.depMaps, bind(this, function(depMap, i) {
                    var id, mod, handler;
                    if ("string" == typeof depMap) {
                        if (depMap = makeModuleMap(depMap, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[i] = depMap, handler = getOwn(handlers, depMap.id))
                            return void(this.depExports[i] = handler(this));
                        this.depCount += 1, on(depMap, "defined", bind(this, function(depExports) {
                            this.defineDep(i, depExports), this.check()
                        })), this.errback && on(depMap, "error", this.errback)
                    }
                    id = depMap.id, mod = registry[id], hasProp(handlers, id) ||!mod || mod.enabled || context.enable(depMap, this)
                })), eachProp(this.pluginMaps, bind(this, function(pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    mod&&!mod.enabled && context.enable(pluginMap, this)
                })), this.enabling=!1, this.check()
            }, on: function(name, cb) {
                var cbs = this.events[name];
                cbs || (cbs = this.events[name] = []), cbs.push(cb)
            }, emit: function(name, evt) {
                each(this.events[name], function(cb) {
                    cb(evt)
                }), "error" === name && delete this.events[name]
            }
        }, context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            configure: function(cfg) {
                cfg.baseUrl && "/" !== cfg.baseUrl.charAt(cfg.baseUrl.length - 1) && (cfg.baseUrl += "/");
                var pkgs = config.pkgs, shim = config.shim, objs = {
                    paths: !0,
                    config: !0,
                    map: !0
                };
                eachProp(cfg, function(value, prop) {
                    objs[prop] ? "map" === prop ? mixin(config[prop], value, !0, !0) : mixin(config[prop], value, !0) : config[prop] = value
                }), cfg.shim && (eachProp(cfg.shim, function(value, id) {
                    isArray(value) && (value = {
                        deps: value
                    }), !value.exports&&!value.init || value.exportsFn || (value.exportsFn = context.makeShimExports(value)), shim[id] = value
                }), config.shim = shim), cfg.packages && (each(cfg.packages, function(pkgObj) {
                    var location;
                    pkgObj = "string" == typeof pkgObj ? {
                        name: pkgObj
                    } : pkgObj, location = pkgObj.location, pkgs[pkgObj.name] = {
                        name: pkgObj.name,
                        location: location || pkgObj.name,
                        main: (pkgObj.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), config.pkgs = pkgs), eachProp(registry, function(mod, id) {
                    mod.inited || mod.map.unnormalized || (mod.map = makeModuleMap(id))
                }), (cfg.deps || cfg.callback) && context.require(cfg.deps || [], cfg.callback)
            },
            makeShimExports: function(value) {
                function fn() {
                    var ret;
                    return value.init && (ret = value.init.apply(global, arguments)), ret || value.exports && getGlobal(value.exports)
                }
                return fn
            },
            makeRequire: function(relMap, options) {
                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;
                    return options.enableBuildCallback && callback && isFunction(callback) && (callback.__requireJsBuild=!0), "string" == typeof deps ? isFunction(callback) ? onError(makeError("requireargs", "Invalid require call"), errback) : relMap && hasProp(handlers, deps) ? handlers[deps](registry[relMap.id]) : req.get ? req.get(context, deps, relMap) : (map = makeModuleMap(deps, relMap, !1, !0), id = map.id, hasProp(defined, id) ? defined[id] : onError(makeError("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")))) : (intakeDefines(), context.nextTick(function() {
                        intakeDefines(), requireMod = getModule(makeModuleMap(null, relMap)), requireMod.skipMap = options.skipMap, requireMod.init(deps, callback, errback, {
                            enabled: !0
                        }), checkLoaded()
                    }), localRequire)
                }
                return options = options || {}, mixin(localRequire, {
                    isBrowser: isBrowser,
                    toUrl: function(moduleNamePlusExt) {
                        var ext, url, index = moduleNamePlusExt.lastIndexOf("."), segment = moduleNamePlusExt.split("/")[0], isRelative = "." === segment || ".." === segment;
                        return - 1 !== index && (!isRelative || index > 1) && (ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length), moduleNamePlusExt = moduleNamePlusExt.substring(0, index)), url = context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, !0), ext || ".fake"), ext ? url : url.substring(0, url.length - 5)
                    },
                    defined: function(id) {
                        return hasProp(defined, makeModuleMap(id, relMap, !1, !0).id)
                    },
                    specified: function(id) {
                        return id = makeModuleMap(id, relMap, !1, !0).id, hasProp(defined, id) || hasProp(registry, id)
                    }
                }), relMap || (localRequire.undef = function(id) {
                    takeGlobalQueue();
                    var map = makeModuleMap(id, relMap, !0), mod = getOwn(registry, id);
                    delete defined[id], delete urlFetched[map.url], delete undefEvents[id], mod && (mod.events.defined && (undefEvents[id] = mod.events), cleanRegistry(id))
                }), localRequire
            },
            enable: function(depMap) {
                var mod = getOwn(registry, depMap.id);
                mod && getModule(depMap).enable()
            },
            completeLoad: function(moduleName) {
                var found, args, mod, shim = getOwn(config.shim, moduleName) || {}, shExports = shim.exports;
                for (takeGlobalQueue(); defQueue.length;) {
                    if (args = defQueue.shift(), null === args[0]) {
                        if (args[0] = moduleName, found)
                            break;
                        found=!0
                    } else 
                        args[0] === moduleName && (found=!0);
                    callGetModule(args)
                }
                if (mod = getOwn(registry, moduleName), !found&&!hasProp(defined, moduleName) && mod&&!mod.inited) {
                    if (!(!config.enforceDefine || shExports && getGlobal(shExports)))
                        return hasPathFallback(moduleName) ? void 0 : onError(makeError("nodefine", "No define call for " + moduleName, null, [moduleName]));
                    callGetModule([moduleName, shim.deps || [], shim.exportsFn])
                }
                checkLoaded()
            },
            nameToUrl: function(moduleName, ext) {
                var paths, pkgs, pkg, pkgPath, syms, i, parentModule, url, parentPath;
                if (req.jsExtRegExp.test(moduleName))
                    url = moduleName + (ext || "");
                else {
                    for (paths = config.paths, pkgs = config.pkgs, syms = moduleName.split("/"), i = syms.length; i > 0; i -= 1) {
                        if (parentModule = syms.slice(0, i).join("/"), pkg = getOwn(pkgs, parentModule), parentPath = getOwn(paths, parentModule)) {
                            isArray(parentPath) && (parentPath = parentPath[0]), syms.splice(0, i, parentPath);
                            break
                        }
                        if (pkg) {
                            pkgPath = moduleName === pkg.name ? pkg.location + "/" + pkg.main : pkg.location, syms.splice(0, i, pkgPath);
                            break
                        }
                    }
                    url = syms.join("/"), url += ext || (/\?/.test(url) ? "" : ".js"), url = ("/" === url.charAt(0) || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url
                }
                return config.urlArgs ? url + (( - 1 === url.indexOf("?") ? "?" : "&") + config.urlArgs) : url
            },
            load: function(id, url) {
                req.load(context, id, url)
            },
            execCb: function(name, callback, args, exports) {
                return callback.apply(exports, args)
            },
            onScriptLoad: function(evt) {
                if ("load" === evt.type || readyRegExp.test((evt.currentTarget || evt.srcElement).readyState)) {
                    interactiveScript = null;
                    var data = getScriptData(evt);
                    context.completeLoad(data.id)
                }
            },
            onScriptError: function(evt) {
                var data = getScriptData(evt);
                return hasPathFallback(data.id) ? void 0 : onError(makeError("scripterror", "Script error", evt, [data.id]))
            }
        }, context.require = context.makeRequire(), context
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(script) {
            return "interactive" === script.readyState ? interactiveScript = script : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.4", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser=!("undefined" == typeof window ||!navigator ||!document), isWebWorker=!isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive=!1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs))
                return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(deps, callback, errback, optional) {
            var context, config, contextName = defContextName;
            return isArray(deps) || "string" == typeof deps || (config = deps, isArray(callback) ? (deps = callback, callback = errback, errback = optional) : deps = []), config && config.context && (contextName = config.context), context = getOwn(contexts, contextName), context || (context = contexts[contextName] = req.s.newContext(contextName)), config && context.configure(config), context.require(deps, callback, errback)
        }, req.config = function(config) {
            return req(config)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(fn) {
            setTimeout(fn, 4)
        } : function(fn) {
            fn()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(prop) {
            req[prop] = function() {
                var ctx = contexts[defContextName];
                return ctx.require[prop].apply(ctx, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function(err) {
            throw err
        }, req.load = function(context, moduleName, url) {
            var node, config = context && context.config || {};
            return isBrowser ? (node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), node.type = config.scriptType || "text/javascript", node.charset = "utf-8", node.async=!0, node.setAttribute("data-requirecontext", context.contextName), node.setAttribute("data-requiremodule", moduleName), !node.attachEvent || node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (node.addEventListener("load", context.onScriptLoad, !1), node.addEventListener("error", context.onScriptError, !1)) : (useInteractive=!0, node.attachEvent("onreadystatechange", context.onScriptLoad)), node.src = url, currentlyAddingScript = node, baseElement ? head.insertBefore(node, baseElement) : head.appendChild(node), currentlyAddingScript = null, node) : void(isWebWorker && (importScripts(url), context.completeLoad(moduleName)))
        }, isBrowser && eachReverse(scripts(), function(script) {
            return head || (head = script.parentNode), dataMain = script.getAttribute("data-main"), dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }), define = function(name, deps, callback) {
            var node, context;
            "string" != typeof name && (callback = deps, deps = name, name = null), isArray(deps) || (callback = deps, deps = []), !deps.length && isFunction(callback) && callback.length && (callback.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(match, dep) {
                deps.push(dep)
            }), deps = (1 === callback.length ? ["require"] : ["require", "exports", "module"]).concat(deps)), useInteractive && (node = currentlyAddingScript || getInteractiveScript(), node && (name || (name = node.getAttribute("data-requiremodule")), context = contexts[node.getAttribute("data-requirecontext")])), (context ? context.defQueue : globalDefQueue).push([name, deps, callback])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), function() {
    "use strict";
    function c(a) {
        var g, f = d;
        a: {
            g = f.className.split(/\s+/);
            for (var n = 0, H = g.length; H > n; n += 1)
                if (g[n] === a) {
                    g=!0;
                    break a
                }
            g=!1
        }
        g || (f.className += ("" === f.className ? "" : " ") + a)
    }
    function e(a, f, g) {
        this.b = null != a ? a : null, this.c = null != f ? f : null, this.g = null != g ? g : null
    }
    function k(a, f) {
        return 0 === a.compare(f) || 1 === a.compare(f)
    }
    function l() {
        var a = h.exec(m[1]), f = null, g = null, n = null;
        return a && (null !== a[1] && a[1] && (f = parseInt(a[1], 10)), null !== a[2] && a[2] && (g = parseInt(a[2], 10)), null !== a[3] && a[3] && (n = parseInt(a[3], 10))), new e(f, g, n)
    }
    function p() {
        var a = q;
        return 3 === a.a || 7 === a.a || 6 === a.a || 9 === a.a || 8 === a.a || 5 === a.a ? "grayscale" : 1 === a.a && k(a.d, new e(6, 2)) && 1 === a.e ? "grayscale" : "unknown"
    }
    var b = window, h = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    e.prototype.compare = function(a) {
        return this.b > a.b || this.b === a.b && this.c > a.c || this.b === a.b && this.c === a.c && this.g > a.g ? 1 : this.b < a.b || this.b === a.b && this.c < a.c || this.b === a.b && this.c === a.c && this.g < a.g?-1 : 0
    };
    var q, r = b.navigator.userAgent, s = 0, t = new e, u = 0, v = new e, m = null;
    (m = /(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(r)) ? (u = 3, v = l()) : (m = /(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(r)) ? (u = 9, v = l()) : (m = /Android ([^;)]+)|Android/.exec(r)) ? (u = 5, v = l()) : (m = /Windows Phone(?: OS)? ([^;)]+)/.exec(r)) ? (u = 8, v = l()) : (m = /Linux ([^;)]+)|Linux/.exec(r)) ? (u = 4, v = l()) : (m = /OS X ([^;)]+)/.exec(r)) ? (u = 2, v = l()) : (m = /Windows NT ([^;)]+)/.exec(r)) ? (u = 1, v = l()) : (m = /CrOS ([^;)]+)/.exec(r)) && (u = 6, v = l()), (m = /MSIE ([\d\w\.]+)/.exec(r)) ? (s = 1, t = l()) : (m = /Trident.*rv:([\d\w\.]+)/.exec(r)) ? (s = 1, t = l()) : (m = /OPR\/([\d.]+)/.exec(r)) ? (s = 4, t = l()) : (m = /Opera Mini.*Version\/([\d\.]+)/.exec(r)) ? (s = 4, t = l()) : (m = /Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(r)) ? (s = 4, t = l()) : (m = /Firefox\/([\d\w\.]+)|Firefox/.exec(r)) ? (s = 3, t = l()) : (m = /(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(r)) ? (s = 2, t = l()) : (m = /Silk\/([\d\._]+)/.exec(r)) ? (s = 7, t = l()) : 5 === u || 9 === u ? s = 6 : (m = /Version\/([\d\.\w]+).*Safari/.exec(r)) && (s = 5, t = l()), q = new function(a, f, g, n) {
        this.e = a, this.f = f, this.a = g, this.d = n
    }(s, t, u, v);
    var w, x;
    if (1 === q.a) {
        var y;
        if (2 === q.e)
            y = k(q.f, new e(37)) && k(q.d, new e(6, 1)) ? "directwrite" : "gdi";
        else {
            var z;
            if (4 === q.e)
                z = k(q.f, new e(24)) && k(q.d, new e(6, 1)) ? "directwrite" : "gdi";
            else {
                var A;
                if ( - 1 === q.d.compare(new e(6, 0)))
                    A = "gdi";
                else {
                    var B;
                    if (k(q.d, new e(6, 0))) {
                        var C;
                        if (C = 1 === q.e) {
                            var D = q.f, E = new e(8, 0);
                            C = 0 === D.compare(E)||-1 === D.compare(E)
                        }
                        B = C ? "gdi" : "directwrite"
                    } else 
                        B = "unknown";
                    A = B
                }
                z = A
            }
            y = z
        }
        x = y
    } else 
        x = 8 === q.a ? "directwrite" : 2 === q.a || 3 === q.a ? "coretext" : 5 === q.a || 4 === q.a || 6 === q.a || 7 === q.a || 9 === q.a ? "freetype" : "unknown";
    w = x;
    var G, F = p(), I = p();
    G = "unknown" !== I ? I : 2 === q.a || 4 === q.a ? "subpixel" : 1 === q.a ? k(q.d, new e(6, 0)) ? "subpixel" : 1 === q.e ? k(q.f, new e(7, 0)) ? "subpixel" : "grayscale" : "subpixel" : "unknown";
    var d = b.document.documentElement;
    c("tr-" + w), "unknown" === F && "unknown" !== G && (F += "-" + G), c("tr-aa-" + F)
}();
