try {
    var _tl;
    function tl_init() {
        function parseUri(str) {
            var o = parseUri.options, m = o.parser[o.strictMode ? "strict": "loose"].exec(str), uri = {}, i = 14;
            while (i--)
                uri[o.key[i]] = m[i] || "";
            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1)
                    uri[o.q.name][$1] = $2;
            });
            return uri;
        };
        parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        var fireError = function(msg) {
            var i = document.createElement('IMG');
            i.style.display = "none";
            i.src = "//eb2.3lift.com/sce?block=header&inv_code=digg_main_feed&e=" + encodeURIComponent(msg);
            document.body.appendChild(i);
        };
        _tl = {};
        _tl.fe = fireError;
        _tl.parseUri = parseUri;
        try {
            if (isNaN(top.tlsn)) {
                top.tlsn = 0;
            }
            _tl.updateTlSN = function() {
                try {
                    top.tlsn++;
                } catch (e) {
                    return false;
                }
            };
            _tl.getTlSN = function() {
                try {
                    return top.tlsn;
                } catch (e) {
                    return false;
                }
            };
        } catch (e) {
            _tl.getTlSN = function() {};
            _tl.updateTlSN = function() {};
        }
        try {
            (function determineTlDebug(window, isTop) {
                var winIsTop = (window === top);
                if ((winIsTop && isTop) ||!window) {
                    _tl.debug = false;
                    _tl.tlTest = false;
                    return;
                }
                var document = window.document;
                if (!document) {
                    _tl.debug = false;
                    _tl.tlTest = false;
                    return;
                }
                if ((document.URL.search("tripleliftTest=true") > 0) || (document.referrer.search("tripleliftTest=true") > 0)) {
                    var url = document.URL.search("tripleliftTest=true") > 0 ? document.URL: document.referrer;
                    var parsedUrl = _tl.parseUri(url);
                    var queryKey = parsedUrl.queryKey;
                    try {
                        _tl.tlTest = true;
                        var c = console;
                        _tl.debug = true;
                    } catch (e) {
                        _tl.debug = false;
                    }
                    if (queryKey["third_party"] === "true") {
                        _tl.third_party = true;
                    } else {
                        _tl.third_party = false;
                    }
                    if (queryKey["tl_image_id"]) {
                        _tl.tl_image_id = queryKey["tl_image_id"];
                    }
                    if (queryKey["tlsr"]) {
                        _tl.tlsr = queryKey["tlsr"];
                    }
                    if (queryKey["tlBidParams"]) {
                        _tl.tlBidParams = decodeURIComponent(queryKey["tlBidParams"]);
                    }
                    return;
                }
                determineTlDebug(window.parent, winIsTop);
            })(window);
        } catch (e) {
            _tl.tlTest = false;
            _tl.debug = false;
        }
        _tl.debugMessage = function(m) {
            if (this.debug) {
                var d = new Date().toString();
                console.log(d + ': ' + m);
            }
        };
        _tl.isTopLevel = function(w) {
            var f;
            try {
                if (w && (w == top)) {
                    f = true;
                } else {
                    f = false;
                }
            } catch (e) {
                f = false;
            }
            return f;
        };
        _tl.fireEBPix = function(name, parameters, cb) {
            var base = "//eb.3lift.com/" + name + "?" + parameters;
            var first = true;
            var i, ii;
            var pix = document.createElement('IMG');
            pix.src = base;
            pix.width = 0;
            pix.height = 0;
            pix.style.display = 'none';
            if (cb) {
                pix.onload = cb;
            }
            document.body.appendChild(pix);
            this.fireEB2Pix(name, parameters, cb);
        };
        _tl.fireEB2Pix = function(name, parameters, cb) {
            var base = "//eb2.3lift.com/" + name + "?" + parameters;
            var first = true;
            var i, ii;
            var pix = document.createElement('IMG');
            pix.src = base;
            pix.width = 0;
            pix.height = 0;
            pix.style.display = 'none';
            if (cb) {
                pix.onload = cb;
            }
            document.body.appendChild(pix);
        };
        _tl.offset = function(el) {
            var offset = {};
            offset.top = 0;
            offset.left = 0;
            while (el) {
                if (el.offsetTop) {
                    offset.top += el.offsetTop;
                }
                if (el.offsetLeft) {
                    offset.left += el.offsetLeft;
                }
                el = el.offsetParent;
            }
            return offset;
        };
        _tl.couldBeViewed = function(elem, jquery, useTopWindow) {
            var win;
            if (useTopWindow) {
                win = top;
            } else {
                win = window;
            }
            if (!jquery) {
                try {
                    var $ = jQuery;
                } catch (e) {
                    return couldBeViewedSansJQuery(elem, win);
                }
            } else {
                $ = jquery;
            }
            var docViewTop = $(win).scrollTop();
            var docViewBottom = docViewTop + $(win).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return checkForViewability(elemTop, elemBottom, docViewTop, docViewBottom);
        };
        var couldBeViewedSansJQuery = function(elem, win) {
            var docViewTop = win.pageYOffset;
            var docViewBottom = docViewTop + _tl.getWindowHeight(win);
            var offset = _tl.offset(elem);
            var elemTop = offset.top;
            var elemBottom = elemTop + elem.offsetHeight;
            return checkForViewability(elemTop, elemBottom, docViewTop, docViewBottom);
        };
        var checkForViewability = function(elemTop, elemBottom, docViewTop, docViewBottom) {
            var inView;
            if ((elemTop < docViewTop) && (elemBottom > docViewBottom)) {
                _tl.fe('the ad is bigger than the viewable area');
                inView = true;
            } else if ((elemBottom <= docViewBottom) && (elemBottom > docViewTop)) {
                inView = true;
            } else if ((elemTop <= docViewBottom) && (elemTop > docViewTop)) {
                inView = true;
            } else {
                inView = false;
            }
            var buffer = 50;
            var closeToView = elemTop <= (docViewBottom + buffer);
            return {
                inView: inView,
                closeToView: closeToView
            };
        };
        _tl.getWindowHeight = function(win) {
            if (win.innerHeight === undefined) {
                return win.document.documentElement.clientHeight;
            }
            return win.innerHeight;
        };
        _tl.getTlScript = function(inv_code) {
            var scripts = document.getElementsByTagName('SCRIPT');
            var script;
            var s, i, ii;
            for (i = 0, ii = scripts.length; i < ii; i++) {
                s = scripts[i];
                if ((s.src && s.src.match("ib.3lift.com/ttj")) || (s.getAttribute('data-src') && s.getAttribute('data-src').match("ib.3lift.com/ttj"))) {
                    if (!((s.src && s.src.match(inv_code)) || (s.getAttribute('data-src') && s.getAttribute('data-src').match(inv_code)))) {
                        continue;
                    }
                    if (!s.getAttribute('tl_id')) {
                        script = s;
                        break;
                    }
                }
            }
            script.setAttribute('tl_id', Math.round(Math.random() * 100000));
            this.updateTlSN();
            return script;
        };
        _tl.needHTML5 = (function() {
            var div = document.createElement('DIV');
            div.innerHTML = "<article></article>";
            var flag = div.childNodes.length !== 1 ? true: false;
            return flag;
        })();
        _tl.buildDOMElement = function(str, ct) {
            if (this.debug) {
                console.log('TL MESSAGE');
                console.log('in buildDOMElement');
                console.log('got string');
                console.log(str);
                console.log('Need html5 element support? ' + this.needHTML5);
            }
            var div = document.createElement('DIV');
            if (this.needHTML5) {
                var html5Frag = document.createDocumentFragment();
                var html5 = 'abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video'.split(' ');
                var i = 0, ii = html5.length;
                for (i; i < ii; i++) {
                    html5Frag.createElement(html5[i]);
                }
                html5Frag.appendChild(div);
            }
            div.innerHTML = str;
            if (this.debug) {
                console.log('TL MESSAGE');
                console.log('FINISHING BUILDDOMELEMENT firstchild INNERHTML');
                console.log(div.firstChild.innerHTML);
            }
            return div;
        };
        _tl.checkHook = function(html, hook) {
            var jq, thook;
            try {
                jq = jQuery;
            } catch (e) {
                jq = false;
            }
            if (html.match("tl-escape-type")) {
                var type = html.match(/tl-escape-type=".+"/)[0].split("=")[1].split('"')[1];
                var value = html.match(/tl-escape-value=".+"/)[0].split("=")[1].split('"')[1];
                if (type === "selector") {
                    var selector = value;
                    if (jq) {
                        thook = jq(hook).closest(selector)[0];
                        if (!thook && this.debug) {
                            console.log('**** TL MESSAGE **** jQuery.before returned null on tl-escape');
                            console.log('selector was: ' + selector);
                            console.log('starting point was:');
                            console.log(hook);
                        }
                    }
                    if (!thook) {
                        this._hook = hook;
                        thook = this.closest(hook, new this.Selector(selector), 1);
                    }
                    if (!thook) {
                        var p = document.createElement('IMG');
                        p.src = "http://eb2.3lift.com/sce?block=master&inv_code=digg_main_feed&e=" + encodeURIComponent("Failed to find selector: " + selector);
                        document.body.appendChild(p);
                    }
                    hook = thook;
                }
            }
            return hook;
        };
        _tl.Selector = function(selectorString) {
            var tnString = selectorString.match(/^[A-Za-z0-9]+/);
            var idString = selectorString.match(/#([A-Za-z0-9]|\-|_)+/);
            var cnString = selectorString.match(/\.([A-Za-z0-9]|\-|_)+/g);
            if (tnString) {
                this.tagName = tnString[0];
            }
            if (idString) {
                this.id = idString[0].split('#')[1];
            }
            if (cnString) {
                this.classNames = [];
                var that = this;
                cnString.forEach(function(cn) {
                    that.classNames.push(cn.split('.')[1]);
                });
            }
        };
        _tl.closest = function(start, selector, direction) {
            var RIGHT = 0;
            var LEFT = 1;
            if (!start) {
                if (this.debug) {
                    console.log('**** TL MESSAGE **** TL-SELECTOR Could Not Be Found');
                    console.log('selector was: ')
                    console.log(selector);
                    console.log('starting point was:');
                    console.log(this._hook);
                }
                return false;
            }
            var flag = true;
            if (selector.tagName) {
                if (start.tagName !== selector.tagName) {
                    flag = false;
                }
            }
            if (selector.id) {
                if (start.id !== selector.id) {
                    flag = false;
                }
            }
            if (selector.classNames) {
                if (!start.className) {
                    flag = false;
                } else {
                    var classes_array = start.className.split(' ');
                    var classes = {};
                    classes_array.forEach(function(c) {
                        classes[c] = c;
                    });
                    selector.classNames.forEach(function(cn) {
                        if (!(cn in classes)) {
                            flag = false;
                        }
                    });
                }
            }
            if (flag) {
                return start;
            } else {
                if (direction === LEFT) {
                    if (start.previousSibling) {
                        return this.closest(start.previousSibling, selector, LEFT);
                    }
                    return this.closest(start.nextSibling, selector, RIGHT);
                } else {
                    if (start.nextSibling) {
                        return this.closest(start.nextSibling, selector, RIGHT);
                    }
                    return this.closest(start.parentNode, selector, LEFT);
                }
            }
        };
        _tl.render_inline = function(hook, html, analyticsTag, analyticsText, adID, adDID, serveDefaultID, adImageScripts) {
            var jq, masonryContainer, ad, adUnit;
            var hookDocument = (function(h) {
                var findDoc = function(start) {
                    if (!start) {
                        return false;
                    }
                    if (start.getElementById&&!start.tagName) {
                        return start;
                    }
                    return findDoc(start.parentNode);
                };
                return findDoc(h);
            })(hook);
            hook = this.checkHook(html, hook);
            if (!hook) {
                return;
            }
            html = '<div style="display:inline">' + html + '</div>';
            var fragFirstChild = this.buildDOMElement(html).firstChild;
            var scriptList = fragFirstChild.getElementsByTagName('SCRIPT');
            var ii = scriptList.length;
            var i = 0;
            var to_be_evaled = [];
            var Script = function(node) {
                this.src = node.src;
                this.text = node.text;
                this.id = "tles" + Math.round(Math.random() * 100000);
            };
            var p, scriptInfo;
            if (true) {
                if (this.debug) {
                    console.log('TL MESSAGE: SCRIPTS ENABLED');
                }
                for (; i < ii; i++) {
                    p = document.createElement('P');
                    scriptInfo = new Script(scriptList[0]);
                    p.id = scriptInfo.id;
                    scriptList[0].parentNode.insertBefore(p, scriptList[0]);
                    to_be_evaled.push(scriptInfo);
                    scriptList[0].parentNode.removeChild(scriptList[0]);
                }
            } else {
                if (this.debug) {
                    console.log('TL MESSAGE: SCRIPTS DISABLED');
                }
                for (; i < ii; i++) {
                    scriptList[0].parentNode.removeChild(scriptList[0]);
                }
            }
            try {
                jq = jQuery;
            } catch (e) {
                jq = false;
            }
            if (this.debug) {
                console.log('TL MESSAGE');
                console.log('ABOUT TO APPEND AD (SCRIPTS WILL POSSIBLY BE ADDED LATER)');
                console.log('INNER HTML');
                console.log(fragFirstChild.innerHTML);
            }
            if (!jq) {
                adUnit = this.appendContent(hook, fragFirstChild);
            } else {
                adUnit = jQuery(hook).before(fragFirstChild).prev()[0];
            }
            var adImages = adUnit.getElementsByTagName('IMG');
            var mainAdImage;
            var l = 0, ll = adImages.length;
            for (; l < ll; l++) {
                if (adImages[l].src && adImages[l].src.match("img.3lift.com")) {
                    mainAdImage = adImages[l];
                    break;
                }
            }
            if (mainAdImage) {
                var layout = this.layOut;
                var getLp = function() {
                    var f;
                    var addToParent;
                    try {
                        if (updateLogoZones) {
                            f = true;
                        } else {
                            f = false;
                        }
                    } catch (e) {
                        if (parent && parent.updateLogoZones) {
                            f = true;
                            addToParent = true;
                        } else {
                            f = false;
                        }
                    }
                    if (f) {
                        var s = document.createElement('SCRIPT');
                        s.src = "//img.3lift.com/lp?" + mainAdImage.src.split("?")[1];
                        if (addToParent) {
                            parent.document.body.appendChild(s);
                        } else {
                            document.body.appendChild(s);
                        }
                    } else {
                        setTimeout(getLp, 50);
                    }
                };
                var madload = function(n) {
                    var jquery;
                    try {
                        if (window !== window.top) {
                            jquery = window.top.jQuery;
                            if (!jquery) {
                                throw new Error();
                            }
                        } else {
                            jquery = jQuery;
                        }
                    } catch (e) {
                        if (n > 5) {
                            fireError('no jQuery when mainAdImage loaded');
                            return 
                        }
                        setTimeout(function() {
                            madload(n + 1);
                        }, 200);
                        return;
                    }
                    var $mainAdImage = jquery(mainAdImage);
                    if (adImageScripts && adImageScripts.length) {
                        if (!$mainAdImage.hoverIntent) {
                            fireError('mainAdImage does not have hoverIntent');
                        }
                        var firePix = (function() {
                            var fired = false;
                            return function(e) {
                                if (fired) {
                                    return;
                                } else {
                                    fired = true;
                                }
                                var i, ii;
                                for (i = 0, ii = adImageScripts.length; i < ii; i++) {
                                    (function() {
                                        var scriptSrc = adImageScripts[i];
                                        var s;
                                        s = document.createElement('SCRIPT');
                                        s.src = scriptSrc;
                                        mainAdImage.parentNode.appendChild(s);
                                    })();
                                }
                            };
                        })();
                        var hoverConfig = {};
                        hoverConfig.over = firePix;
                        hoverConfig.sensitivity = 5;
                        hoverConfig.out = function() {};
                        $mainAdImage.hoverIntent(hoverConfig);
                    }
                    getLp();
                    layout(jquery, hook);
                }
                mainAdImage.onload = function() {
                    madload(0);
                };
            } else {
                if (jq) {
                    this.layOut(jq, hook);
                }
                if (this.debug) {
                    console.log('TL MESSAGE');
                    console.log('NO MAIN AD IMAGE');
                    console.log(mainAdImage);
                }
            }
            if (serveDefaultID) {
                this[serveDefaultID].ad();
            }
            if (this.scriptAttributePresent(adUnit) && true) {
                if (this.debug) {
                    console.log('TL MESSAGE: SCRIPT ATTRIBUTE PRESENT');
                }
                this.evalScriptAttribute(adUnit);
            }
            if (to_be_evaled.length && hookDocument) {
                to_be_evaled.forEach(function(script) {
                    if (this.debug) {
                        console.log('TL MESSAGE');
                        console.log('ADDING SCRIPT');
                        console.log('SRC');
                        console.log(script.src);
                        console.log('TEXT');
                        console.log(script.text);
                    }
                    var s = document.createElement('SCRIPT');
                    var stub;
                    stub = hookDocument.getElementById(script.id);
                    stub.parentNode.insertBefore(s, stub);
                    stub.parentNode.removeChild(stub);
                    if (script.text) {
                        s.text = script.text;
                    }
                    if (script.src) {
                        s.src = script.src;
                    }
                });
            }
            if (analyticsTag) {
                this.addAnalytics(adUnit, analyticsTag, analyticsText, adID, adDID);
            }
        };
        _tl.layOut = function(jQuery, hook) {
            var that = _tl;
            masonryContainer = jQuery(".masonry");
            if (!masonryContainer.length) {
                masonryContainer = null;
            }
            if (masonryContainer && masonryContainer.length > 1) {
                masonryContainer = jQuery(masonryContainer[0]);
            }
            if (!masonryContainer) {
                jQuery.each(jQuery.find("*"), function(index, elem) {
                    if (jQuery.data(elem, "masonry")) {
                        masonryContainer = jQuery(elem);
                    }
                });
            }
            if (masonryContainer && masonryContainer.data("masonry")) {
                if (that.debug) {
                    console.log('********* TL RELOADING MASONRY *****************');
                    console.log('masonry container is');
                    console.log(masonryContainer);
                    console.log('masonry data is');
                    console.log(masonryContainer.data("masonry"));
                    console.log('********** /TL MESSAGE *******');
                }
                masonryContainer.masonry("reloadItems");
                masonryContainer.masonry();
            }
            var isoPresent = jQuery.fn.isotope;
            if (isoPresent) {
                var $isoContainer = jQuery(".isotope");
                if ($isoContainer.length !== 1) {
                    var currentEl = hook;
                    while (true) {
                        if (!currentEl.parentNode) {
                            break;
                        }
                        if (!jQuery.data(jQuery(currentEl.parentNode), "isotope")) {
                            currentEl = currentEl.parentNode;
                            continue;
                        }
                        $isoContainer = jQuery(currentEl.parentNode);
                        break;
                    }
                }
                if (!$isoContainer.data("isotope")) {
                    $isoContainer = false;
                }
                $isoContainer && $isoContainer.isotope('reloadItems').isotope({
                    sortBy: 'original-order'
                });
            }
        };
        _tl.addAnalytics = function(adUnit, analytics, analyticsText, adID, adDID) {
            if (adID) {
                adUnit.setAttribute('id', adID);
            }
            if (adDID) {
                adUnit.setAttribute('data-id', adDID);
            }
            adUnit.appendChild(analytics);
            analytics.text = analyticsText;
        };
        _tl.scriptAttributePresent = function(DOMelement) {
            if (DOMelement.getAttribute('tl-eval')) {
                return true;
            }
            var candidates = DOMelement.getElementsByTagName('*');
            var i = 0, ii = candidates.length;
            for (; i < ii; i++) {
                if (candidates[i].getAttribute("tl-eval")) {
                    return true;
                }
            }
        };
        _tl.evalScriptAttribute = function(adUnit) {
            var tlEvalTags = (function(DOMelement) {
                var evalTags = [];
                if (DOMelement.getAttribute('tl-eval')) {
                    evalTags.push(DOMelement);
                }
                var candidates = DOMelement.getElementsByTagName('*');
                var i = 0, ii = candidates.length;
                for (; i < ii; i++) {
                    if (candidates[i].getAttribute("tl-eval")) {
                        evalTags.push(candidates[i]);
                    }
                }
                return evalTags;
            })(adUnit);
            for (i = 0, ii = tlEvalTags.length; i < ii; i++) {
                script = document.createElement('SCRIPT');
                tlEvalTags[i].appendChild(script);
                script.text = tlEvalTags[i].getAttribute('tl-eval');
            }
        };
        _tl.appendContent = function(hook, content) {
            return hook.parentNode.insertBefore(content, hook);
        };
        _tl.cc = 0;
        _tl.count = function() {
            return ++this.cc;
        };
        _tl.init = true;
    };
    if (!_tl ||!_tl.init) {
        tl_init();
    }(function() {
        var tl_script = _tl.getTlScript("digg_main_feed");
        if (false&&!_tl.isTopLevel(window)) {
            var a = document;
            var iframe = a.createElement('iframe');
            var hostname = a.referrer;
            var parsedHostname = _tl.parseUri(hostname);
            hostname = parsedHostname.host;
            var docsrc = encodeURIComponent(document.URL);
            iframe.src = "http://" + hostname + "/doubleclick/TLIframe.html?docsrc=" + docsrc + "&script_src=" + encodeURIComponent(tl_script.src);
            iframe.width = 0;
            iframe.height = 0;
            iframe.frameborder = 0;
            if (a.body == null) {
                var body = document.createElement('body');
                a.firstElementChild.appendChild(body);
            }
            a.body.appendChild(iframe);
            return;
        }
        var scriptNumber = _tl.getTlSN();
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function(callback, thisArg) {
                var T, k;
                if (this == null) {
                    throw new TypeError(' this is null or not defined');
                }
                var O = Object(this);
                var len = O.length>>>0;
                if (typeof callback !== "function") {
                    throw new TypeError(callback + ' is not a function');
                }
                if (arguments.length > 1) {
                    T = thisArg;
                }
                k = 0;
                while (k < len) {
                    var kValue;
                    if (k in O) {
                        kValue = O[k];
                        callback.call(T, kValue, k, O);
                    }
                    k++;
                }
            };
        }
        var serveDefaultController = (function() {
            var default_served = false;
            var abort_default = function() {
                default_served = true;
            };
            var get_default_status = function() {
                return default_served;
            };
            var sd = function(type, an_auction_id, an_user_id) {
                if (default_served) {
                    return;
                } else {
                    default_served = true;
                }
                if (_tl.debug) {
                    console.log('*** TL MESSAGE ***');
                    console.log('*** SERVING DEFAULT OF TYPE : ' + type + ' ***');
                }
                var writeDefTemplate = function() {
                    var def_template = '';
                    if (def_template.match('###TL_IF_ID###')) {
                        def_template = def_template.replace('###TL_IF_ID###', tl_if_id);
                    }
                    if (def_template.length) {
                        try {
                            if (window.frameElement && window.frameElement.id && window.frameElement.id.match && window.frameElement.id.match('tl_iframe_wrap')) {
                                _tl.render_inline(parent.document.getElementById(window.frameElement.id), def_template);
                            } else if (top !== self) {
                                document.open();
                                document.write(def_template);
                                document.close();
                            } else {
                                _tl.render_inline(tl_script, def_template);
                            }
                        } catch (e) {
                            if (top !== self) {
                                document.open();
                                document.write(def_template);
                                document.close();
                            } else {
                                _tl.render_inline(tl_script, def_template);
                            }
                        }
                    }
                };
                (function() {
                    if (Math.ceil(Math.random() * 100) === 1) {
                        var pix = new Image();
                        var base = "//eb.3lift.com/sci?";
                        var ref = encodeURIComponent(document.URL);
                        var query = "inv_code=digg_main_feed&sr=100&ref=" + ref + "&default=true&type=" + type + "&aid=" + an_auction_id + "&uid=" + an_user_id + "&cb=" + Math.floor(89999999 * Math.random() + 10000000);
                        var src = base + query;
                        pix.src = src;
                        pix.width = 0;
                        pix.height = 0;
                        pix.onload = function() {
                            writeDefTemplate();
                        };
                        document.body.appendChild(pix);
                        _tl.fireEB2Pix('sci', query);
                    } else {
                        writeDefTemplate();
                    }
                })();
            };
            return {
                sd: sd,
                ad: abort_default,
                gd: get_default_status
            };
        })();
        var tl_if_id
        var serveSponsoredAd = function(scu_id, type) {
            if ((!scu_id) && (document.URL.search('tl_scu_id') >= 0)) {
                scu_id = document.URL.substring(document.URL.search("tl_scu_id=") + 10, document.URL.search("tl_scu_id=") + 10 + 6);
            } else if ((!scu_id) && (document.referrer.search('tl_scu_id') >= 0)) {
                scu_id = document.referrer.substring(document.referrer.search("tl_scu_id=") + 10, document.referrer.search("tl_scu_id=") + 10 + 6);
            }
            if (!type) {
                type = "tl";
            }
            var ttj_ct = '';
            var ttj_params = _tl.parseUri(tl_script.src).queryKey;
            if (ttj_params.ct) {
                ttj_ct = ttj_params.ct;
            }
            tl_if_id = "tlif_" + Math.round(Math.random() * 100000);
            var tl_if = document.createElement('IFRAME');
            var tl_if_body = 'try{\n/*! JSON v3.3.1 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */\n(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&\'""\'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&\'{"a":[1,true,false,null,"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t"]}\'==c({a:[e,!0,!1,null,"\\x00\\b\\n\\f\\r\\t"]})&&"1"===c(null,e)&&"[\\n 1,\\n 2\\n]"==c([1,2],null,1)&&\'"-271821-04-20T00:00:00.000Z"\'==c(new C(-864E13))&&\'"+275760-09-13T00:00:00.000Z"\'==c(new C(864E13))&&\'"-000001-01-01T00:00:00.000Z"\'==c(new C(-621987552E5))&&\'"1969-12-31T23:59:59.999Z"\'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c(\'{"a":[1,true,false,null,"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t"]}\');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c(\'"\\t"\')}catch(d){}if(n)try{n=1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||(e[f]=1,!v.call(a,f))||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\\\\\",34:\'\\\\"\',8:"\\\\b",12:"\\\\f",10:"\\\\n",13:"\\\\r",9:"\\\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c=\'"\',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+\'"\'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":m);a=q.length?f?"[\\n"+n+q.join(",\\n"+n)+"\\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\\n"+n+q.join(",\\n"+n)+"\\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\\\",34:\'"\',47:"/",98:"\\b",116:"\\t",110:"\\n",102:"\\f",114:"\\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);function parseUri(str){var o=parseUri.options,m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--)uri[o.key[i]]=m[i]||"";uri[o.q.name]={};uri[o.key[12]].replace(o.q.parser,function($0,$1,$2){if($1)uri[o.q.name][$1]=$2;});return uri;};parseUri.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/}};if(!Array.prototype.forEach){Array.prototype.forEach=function(callback,thisArg){var T,k;if(this==null){throw new TypeError(\' this is null or not defined\');}\nvar O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+\' is not a function\');}\nif(arguments.length>1){T=thisArg;}\nk=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O);}\nk++;}};}\nvar serveDefault=function(type,auction_id,user_id){user_id=user_id||0;auction_id=auction_id||0;if(ADNXSstart&&!type&&false){var ADNXSend=new Date().getTime();var diff=ADNXSend-ADNXSstart;(function(){var p=document.createElement(\'IMG\');p.src="//eb.3lift.com/adnxsTime?inv_code=digg_main_feed&time="+diff;document.body.appendChild(p);})();}\nvar s=document.createElement(\'SCRIPT\');var st="setTimeout(function () { _tl.###TL_SD_ID###.sd(\'"+type+"\',\'"+auction_id+"\',\'"+user_id+"\') },100);";parent.document.body.appendChild(s);s.text=st;};var Dytimeout=true;var ADNXSTimeout=true;var has_been_timed_out=false;var ADNXSstart;var adnxs_auction_id,adnxs_user_id;var unitData;var thirdPartyMacros={};var generic_get_unit=function(data,pixel,addr,auction_id,user_id,third_party_macros){if(third_party_macros){thirdPartyMacros=third_party_macros;}\nadnxs_auction_id=auction_id;adnxs_user_id=user_id;if(ADNXSstart&&false){var ADNXSend=new Date().getTime();var diff=ADNXSend-ADNXSstart;(function(){var p=document.createElement(\'IMG\');p.src="//eb.3lift.com/adnxsTime?inv_code=digg_main_feed&time="+diff;document.body.appendChild(p);})();}\nif(has_been_timed_out){return;}\nADNXSTimeout=false;unitData=data;var tlParent=parent.document.getElementById(window.frameElement.id);var version=\'?rsv=703-S118-52\';var a=document.createElement(\'script\');if(!pixel){pixel=false;}\na.setAttribute(\'id\',"tldynamic");a.setAttribute(\'adnxsCt\',pixel);a.setAttribute(\'src\',addr+data+version);document.body.appendChild(a);setTimeout(function(){if(Dytimeout){has_been_timed_out=true;serveDefault("dynamic timeout");}},10000);};var get_unit=function(data,pixel,tag_code,auction_id,user_id,thirdPartyMacros){user_id=user_id||0;auction_id=auction_id||0;var addr=\'//dynamic.3lift.com/sc/advertiser/jsonp/\';generic_get_unit(data,pixel,addr,auction_id,user_id,{});};var get_unit_2=function(payload){var pixel=payload.pixel;var tag_code=payload.tag_code;var auction_id=payload.auction_id;var campaign_code=payload.campaign_code;var user_id=payload.user_id;var data=campaign_code.match(/[0-9]+/)[0];get_unit(data,pixel,tag_code,auction_id,user_id);};var get_3p_unit=function(data,pixel,tag_code,auction_id,user_id,thirdPartyMacros){user_id=user_id||0;auction_id=auction_id||0;var addr=\'//dynamic.3lift.com/sc/bidder/jsonp/\';generic_get_unit(data,pixel,addr,auction_id,user_id,thirdPartyMacros);};var get_ext_unit=function(data,pixel,ext_creative_partner){user_id=0;auction_id=0;var addr=\'//dynamic.3lift.com/sc/bidder/\'+ext_creative_partner+\'/jsonp/\';generic_get_unit(data,pixel,addr,auction_id,user_id,{});};var expandThirdPartyMacros=function(url){url=url.replace("${CACHEBUSTER}",Math.floor(10000000000*Math.random()));url=url.replace("[timestamp]",Math.floor(10000000000*Math.random()));url=url.replace("[CACHEBUSTER]",Math.floor(10000000000*Math.random()));url=url.replace("[PLACEMENT_ID]","218");var tpmacro,tpmacroValue;for(tpmacro in thirdPartyMacros){if(!tpmacro.match(\'%\')){continue;}\ntpmacroValue=thirdPartyMacros[tpmacro];tpmacro=\'$\'+tpmacro.slice(1);url=url.replace(tpmacro,tpmacroValue);}\nreturn url;};var send3rdPartyPix=function(url){var p=document.createElement(\'IMG\');p.setAttribute(\'width\',\'0\');p.setAttribute(\'height\',\'0\');p.src=expandThirdPartyMacros(url);document.body.appendChild(p);};var send3rdPartyJS=function(url){var p=document.createElement(\'SCRIPT\');p.setAttribute(\'type\',\'text/javascript\');p.src=expandThirdPartyMacros(url);var tl_iframe=window.frameElement;var tl_iframe_parent=tl_iframe.parentNode;if(tl_iframe.nextSibling){tl_iframe_parent.insertBefore(p,tl_iframe.nextSibling);}\nelse{tl_iframe_parent.insertBefore(p,tl_iframe);}}\nvar tl_advertiser_json=function(data){if(has_been_timed_out){return;}\nDytimeout=false;var getTrendingItem=function(){if(data.tl_advertiser_data.images.length===0){serveDefault("no images");}\nvar trending_item_index=Math.floor(Math.random()*data.tl_advertiser_data.images.length);var trending_item=data.tl_advertiser_data.images[trending_item_index];if(parent._tl.tl_image_id){for(i=0;i<data.tl_advertiser_data.images.length;i++){if(parent._tl.tl_image_id==data.tl_advertiser_data.images[i].image_id){trending_item=data.tl_advertiser_data.images[i];}}}\ntrending_item.adnxs_auction_id=adnxs_auction_id;trending_item.adnxs_user_id=adnxs_user_id;trending_item.logo_image_url=settings.logo_image_url;return trending_item;};var setClickTracker=function(){if(!settings.impression_discrepancy_rate){settings.impression_discrepancy_rate=1;}\nif(settings.impression_pixels||(settings.impression_pixel_url&&settings.impression_pixel_url.length)){if(!settings.impression_sampling_rate||Math.random()<settings.impression_sampling_rate*settings.impression_discrepancy_rate||parent._tl.third_party){if(settings.impression_pixels){pixels=settings.impression_pixels;if(pixels.length&&pixels.length>0){for(var i=0;i<pixels.length;i++){send3rdPartyPix(pixels[i]);}}}\nelse if(settings.impression_pixel_url){send3rdPartyPix(settings.impression_pixel_url);}}}\ntrending_item.comScoreArr=[];if(!settings.impression_sampling_rate||Math.random()<settings.impression_sampling_rate*settings.impression_discrepancy_rate||parent._tl.third_party){if(settings.js_pixels){pixels=settings.js_pixels;if(pixels.length&&pixels.length>0){for(var i=0;i<pixels.length;i++){send3rdPartyJS(pixels[i]);}}}}\ntrending_item.original_clickthrough_url=trending_item.clickthrough_url;if(settings.click_tracker_url&&settings.click_tracker_url.length){var el;var ct=trending_item.clickthrough_url;var ctracker=expandThirdPartyMacros(settings.click_tracker_url);if(isNaN(parseInt(settings.click_tracker_encoding_level))){el=1;}\nelse{el=parseInt(settings.click_tracker_encoding_level);}\nwhile(el--){ct=encodeURIComponent(ct);}\ntrending_item.clickthrough_url=ctracker+ct;}\nif(\'###TTJ_CT_URL###\'.length){var ct=decodeURIComponent(\'###TTJ_CT_URL###\');var tct=encodeURIComponent(trending_item.clickthrough_url);trending_item.clickthrough_url=ct+tct;}\nvar dynamicTag=document.getElementById(\'tldynamic\');var adnxsPix;if(dynamicTag){adnxsPix=dynamicTag.getAttribute(\'adnxsCt\');}\nelse{adnxsPix="false";}\nif(adnxsPix!=="false"){trending_item.adnxsPix=adnxsPix;}\nelse{trending_item.adnxsPix="";}\nif(settings.adnxs_pixel_event){trending_item.adnxs_pix_event;}\nelse{trending_item.adnxs_pix_event="click";}};var setImageUrl=function(){trending_item.w600_url=\'//img.3lift.com/?inv_code=digg_main_feed&width=600&alt=max&url=\'+encodeURIComponent(trending_item.image_url);trending_item.image_url=\'//img.3lift.com/?inv_code=digg_main_feed&width=312&height=170&alt=tl&url=\'+encodeURIComponent(trending_item.image_url);var exclude_zones=\'NE,SE,S\';if(exclude_zones==\'N,NE,E,SE,S,SW,W,NW,C\'){settings.include_logo=0;trending_item.img_server_params=trending_item.img_server_params.replace(/logo.*\\&/g,\'\');}\nelse{trending_item.image_url+="&logo_exclude="+exclude_zones;}\nif(trending_item.img_server_params){trending_item.image_url+=\'&\'+trending_item.img_server_params;}else{if(!settings.image_version){settings.image_version=\'0\';}\ntrending_item.image_url+=\'&v=\'+settings.image_version;if(settings.include_logo==1){var logoUrl=encodeURIComponent(settings.logo_image_url);if(settings.logo_offset_x){var xlogo=settings.logo_offset_x;}\nelse{xlogo=0;}\nif(settings.logo_offset_y){var ylogo=settings.logo_offset_y;}\nelse{ylogo=0;}\ntrending_item.image_url+="&logo="+logoUrl+"&lox="+xlogo+"&loy="+ylogo;}\nif(settings.logo_placement){trending_item.image_url+=\'&lp=\'+settings.logo_placement;}\nif(trending_item.cv_version){trending_item.image_url+=\'&cv_version=\'+trending_item.cv_version;}\nif(trending_item.ha_version){trending_item.image_url+=\'&ha_version=\'+trending_item.ha_version;}\nif(trending_item.ir_version){trending_item.image_url+=\'&ir_version=\'+trending_item.ir_version;}}};var setShares=function(){if(settings.share_types){try{settings.share_types=settings.share_types.split(",");}catch(e){}\ntrending_item.share_types=[];settings.share_types.forEach(function(st){trending_item.share_types.push(st);});}\ntrending_item.video_share_types=trending_item.share_types||[];};var settings=data.tl_advertiser_data.settings;if(settings.tl_scu_id){unitData=parseInt(settings.tl_scu_id);}\nvar trending_item=getTrendingItem();setImageUrl(trending_item);setClickTracker(trending_item);setShares(trending_item);trending_item.advertiser_name=data.tl_advertiser_data.settings.advertiser_name;create_script(trending_item,settings);};var dynamicCreativeRender=function(data){data={tl_advertiser_data:data};tl_advertiser_json(data);};var create_script=function(trending_item,settings){var scriptText;var tl_rd=\'tl_rd_\'+Math.round(Math.random()*100000);var script=document.createElement(\'SCRIPT\');script.setAttribute(\'id\',tl_rd);var appendScript=function(){parent.document.body.appendChild(script);script.text=scriptText;};var createShareTypesFromPhpJson=function(shareJson){var st={};shareJson.forEach(function(s){st[s.name]={code:s.code,button:s.button_src};});return st;};var addSharing=function(templateCode){var trending_url=trending_item.image_url;var share_types=createShareTypesFromPhpJson([{\"id\":\"1\",\"name\":\"PINTEREST\",\"code\":\"window.open(\\\'http:\\/\\/pinterest.com\\/pin\\/create\\/button\\/?url=\\\' + encodeURIComponent(\\\'%%%ORIGINAL_CLICKTHROUGH_URL%%%\\\') + \\\'&media=\\\'+encodeURIComponent(\\\'%%%IMAGE_URL%%%\\\') + \\\'&description=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\'),\\\'popup\\\',\\\'width=650,height=316\\\');\",\"button_src\":\"http:\\/\\/images.3lift.com\\/2917936.png\"},{\"id\":\"2\",\"name\":\"TWITTER\",\"code\":\"window.open(\\\'http:\\/\\/twitter.com\\/home?status=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\'),\\\'popup\\\',\\\'width=650,height=316\\\');\",\"button_src\":\"http:\\/\\/images.3lift.com\\/2917933.png\"},{\"id\":\"3\",\"name\":\"FACEBOOK\",\"code\":\"window.open(\\\'http:\\/\\/www.facebook.com\\/sharer.php?u=\\\'+encodeURIComponent(\\\'%%%CLICKTHROUGH_URL%%%\\\'),\\\'popup\\\',\\\'width=626,height=436\\\');\",\"button_src\":\"http:\\/\\/images.3lift.com\\/2917935.png\"},{\"id\":\"4\",\"name\":\"PINTEREST_TEST\",\"code\":\"window.open(\\\'http:\\/\\/pinterest.com\\/pin\\/create\\/button\\/?url=\\\' + encodeURIComponent(\\\'%%%CLICKTHROUGH_URL%%%\\\') + \\\'&media=\\\'+encodeURIComponent(\\\'http:%%%IMAGE_URL%%%\\\') + \\\'&description=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\'),\\\'popup\\\',\\\'width=650,height=316\\\');\",\"button_src\":null},{\"id\":\"5\",\"name\":\"PIN\",\"code\":\"window.open(\\\'http:\\/\\/pinterest.com\\/pin\\/create\\/button\\/?url=\\\' + encodeURIComponent(\\\'%%%CLICKTHROUGH_URL%%%\\\') + \\\'&media=\\\'+encodeURIComponent(\\\'http:%%%IMAGE_URL%%%\\\') + \\\'&description=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\'),\\\'popup\\\',\\\'width=650,height=316\\\');\",\"button_src\":null},{\"id\":\"6\",\"name\":\"TUMBLR\",\"code\":\"window.open(\\\'https:\\/\\/tumblr.com\\/share\\/photo?source=\\\'+encodeURIComponent(\\\'http:%%%IMAGE_URL%%%\\\')+\\\'&caption=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\'), \\\'popup\\\', \\\'width=650,height=316\\\');\",\"button_src\":\"http:\\/\\/images.3lift.com\\/2917934.png\"}]);var scu_st=trending_item.share_types;if(scu_st){scu_st.forEach(function(st){st=st.toUpperCase();templateCode+="<div style=\\"display:none\\" class=\\"tl_share\\" onclick=\\"tlobj[\'```ANALYTICS_ID```\'](\'"+st+"\'); "+share_types[st][\'code\']+"\\" data-button=\\""+(share_types[st][\'button\'].replace(/\\//g,"\\\\/"))+"\\"></div>";});}\nreturn templateCode;};var addOptionalVideo=function(templateCode){var vid;var videoOptions=["hover_action","alt_see_more","expose_controls","reset_video","always_show_buttons"];if(settings.type==="youtube"||settings.type==="video"){if(settings.video_data){vid=settings.video_data.video_id||settings.video_data.videoId;templateCode+=\'<div style="display:none" class="tl-vid" tl-vid-type="yt" tl-vid-id="\'+vid+\'"></div>\';videoOptions.forEach(function(videoOption){if(settings.video_data[videoOption]){trending_item[videoOption]=settings.video_data[videoOption];}\nelse{trending_item[videoOption]=\'0\';}});}}\naddVideoPix();return templateCode;};var addVideoPix=function(){var vspixString=\'\';if(settings.video_data&&settings.video_data.vsPixel){vspixString=settings.video_data.vsPixel.join(",");}\nvar vcpixString=\'\';if(settings.video_data&&settings.video_data.vcPixel){vcpixString=settings.video_data.vcPixel.join(",");}\ntrending_item.third_party_start_pix=vspixString;trending_item.third_party_completion_pix=vcpixString;};var addThirdPartyMacros=function(trending_item){if(!thirdPartyMacros){return;}\nvar propt,tpmacro,tpmacrovalue;for(propt in trending_item){if(!trending_item[propt]||!trending_item[propt].replace){continue;}\nfor(tpmacro in thirdPartyMacros){tpmacrovalue=thirdPartyMacros[tpmacro];tpmacro=\'$\'+tpmacro.slice(1);trending_item[propt]=trending_item[propt].replace(tpmacro,tpmacrovalue);}}};var addEscapedMacros=function(trending_item){var propt,esc_types=["SINGLE_ESCAPED_","DOUBLE_ESCAPED_","ALL_ESCAPED_"],additional_macros={};for(propt in trending_item){if((typeof trending_item[propt]).toLowerCase()==="string"){esc_types.forEach(function(et,index){var ept=et+propt;additional_macros[ept]=(function(){if(et===\'SINGLE_ESCAPED_\'){return trending_item[propt].replace(/\'/g,"\\\\\'").replace(/\\n/g,"\\\\n");}\nif(et===\'DOUBLE_ESCAPED_\'){return trending_item[propt].replace(/"/g,\'\\\\"\').replace(/\\n/g,"\\\\n");}\nelse{return trending_item[propt].replace(/\'/g,"\\\\\'").replace(/"/g,\'\\\\"\').replace(/\\n/g,"\\\\n");}})();});}}\nfor(propt in additional_macros){trending_item[propt]=additional_macros[propt];}};var createTemplate=function(html){if(false){html=addSharing(html);}\nhtml=addOptionalVideo(html);for(propt in trending_item){var re=new RegExp(\'%%%\'+propt+\'%%%\',"gi");html=html.replace(re,trending_item[propt]);}\nhtml=html.replace(/\\\\n/g,"\\\\\\\\n");html=html.replace(/\\n/g," \\\\n");return html.replace(/\'/g,"\\\\\'").replace(/\\\\\\\\\'/g,"\\\\\\\\\\\\\'");};var createAnalyticsTemplate=function(html){addOptionalVideo(html);addEscapedMacros(trending_item);addThirdPartyMacros(trending_item);for(propt in trending_item){var re=new RegExp(\'%%%\'+propt+\'%%%\',"gi");html=html.replace(re,trending_item[propt]);}\nhtml=html.replace(/\\\\/g,"\\\\\\\\\\\\");html=html.replace(/\\\\n/g,"\\\\\\\\n");html=html.replace(/\\n/g," \\\\n");html=html.replace(/([^\\\\])(\')(\')/g,"$1\\\\$2\\\\$3");html=html.replace(/([^\\\\])(\')/g,"$1\\\\$2");return html;};var writeScriptText=function(){var scriptBody=\'try{(function(){var tl_iframe=document.getElementById(\\\'###TL_IF_ID###\\\');var render_ad=function(){var adID="tl_"+Math.round(Math.random()*100000);var adDID="@@@IMAGEID@@@";var sdID="###TL_SD_ID###";if(_tl[sdID]&&_tl[sdID].gd&&_tl[sdID].gd()){return;}\\nvar cturl=\\\'@@@CLICKTHROUGH_URL@@@\\\';var analyticsTagID="tlat_"+Math.round(Math.random()*100000);var analyticsTag=document.createElement(\\\'script\\\');analyticsTag.setAttribute(\\\'type\\\',\\\'text/javascript\\\');analyticsTag.setAttribute(\\\'charset\\\',\\\'UTF-8\\\');analyticsTag.setAttribute(\\\'id\\\',analyticsTagID);var analyticsText=\\\'@@@SPONSORED_TAG_BODY@@@\\\'.replace(new RegExp(\\\'```ANALYTICS_ID```\\\',"gi"),analyticsTagID).replace(new RegExp(\\\'```CLICKTHROUGH_URL```\\\',\\\'gi\\\'),cturl);var comscoreArr=@@@COMSCORESRC@@@;var html=\\\'@@@PLACEMENT_HTML@@@\\\'.replace(new RegExp(\\\'```ANALYTICS_ID```\\\',"gi"),analyticsTagID);_tl.render_inline(tl_iframe,html,analyticsTag,analyticsText,adID,adDID,sdID,comscoreArr);};render_ad();})();}catch(e){if(_tl.debug){console.log(\\\'*** TL MESSAGE ***\\\');console.log(\\\'CAUGHT ERROR\\\');console.log(e.stack);}\\nvar p=document.createElement(\\\'IMG\\\');p.src="//eb2.3lift.com/sce?block=render&inv_code=digg_main_feed&e="+encodeURIComponent(e);p.width=0;p.height=0;document.body.appendChild(p);}\'.replace(\'@@@SPONSORED_TAG_BODY@@@\',createAnalyticsTemplate(\'try{var glYTAPI;function onYouTubePlayerAPIReady(){glYTAPI=true;};var isMobile=function(){return(navigator&&navigator.userAgent&&navigator.userAgent.match(/iphone|ipad|android/i));};var safeSetZindex=function(index,el,$el,info){if(el){try{el.style.zIndex=index;}\\ncatch(e){el.style.zIndex=index+\\\'\\\';}}\\nelse{try{$el.style(\\\'z-index\\\',index,info);}\\ncatch(e){$el.style(\\\'z-index\\\',index+\\\'\\\',info);}}};var tlobj;var gaurd=function($el){$el.style("min-width","0","important");$el.style("min-height","0","important");return $el;};var createImportantPlugin=function($){if($.fn.style){return;}\\ntry{var escape=function(text){return text.replace(/[-[\\\\]{}()*+?.,\\\\\\\\^$|#\\\\s]/g,"\\\\\\\\$&");};var isStyleFuncSupported=!!CSSStyleDeclaration.prototype.getPropertyValue;if(!isStyleFuncSupported){CSSStyleDeclaration.prototype.getPropertyValue=function(a){return this.getAttribute(a);};CSSStyleDeclaration.prototype.setProperty=function(styleName,value,priority){this.setAttribute(styleName,value);var priority=typeof priority!=\\\'undefined\\\'?priority:\\\'\\\';if(priority!=\\\'\\\'){var rule=new RegExp(escape(styleName)+\\\'\\\\\\\\s*:\\\\\\\\s*\\\'+escape(value)+\\\'(\\\\\\\\s*;)?\\\',\\\'gmi\\\');this.cssText=this.cssText.replace(rule,styleName+\\\': \\\'+value+\\\' !\\\'+priority+\\\';\\\');}};CSSStyleDeclaration.prototype.removeProperty=function(a){return this.removeAttribute(a);};CSSStyleDeclaration.prototype.getPropertyPriority=function(styleName){var rule=new RegExp(escape(styleName)+\\\'\\\\\\\\s*:\\\\\\\\s*[^\\\\\\\\s]*\\\\\\\\s*!important(\\\\\\\\s*;)?\\\',\\\'gmi\\\');return rule.test(this.cssText)?\\\'important\\\':\\\'\\\';}}\\n$.fn.style=function(styleName,value,priority){var node=this.get(0);if(typeof node==\\\'undefined\\\'){return;}\\nvar style=this.get(0).style;if(typeof styleName!=\\\'undefined\\\'){if(typeof value!=\\\'undefined\\\'){priority=typeof priority!=\\\'undefined\\\'?priority:\\\'\\\';style.setProperty(styleName,value,priority);}else{return style.getPropertyValue(styleName);}}else{return style;}};}\\ncatch(e){$.fn.style=function(styleName,value,priority){if(!styleName){return this.get(0).style;}\\nif(!value){return this.get(0).style&&this.get(0).style[styleName];}\\nvar style=this.get(0).style;style[styleName]=value;};}};if(!tlobj){tlobj={};}\\ntlobj["```ANALYTICS_ID```"]=(function tlprivate(){var ts;var tljQuery;var oldjQuery;var swapCorrectJquery=function(){tljQuery=jQuery;if(oldjQuery){jQuery=oldjQuery;if($.noConflict){$.noConflict();}}};var start_analytics=function(){swapCorrectJquery();if(tljQuery){createImportantPlugin(tljQuery);analytics(tljQuery);}};var correctjQueryVersion=function(){if(!jQuery){return false;}\\nvar version_string=jQuery.fn.jquery;var parsed_vs=version_string.split(".");var jq_version={};jq_version.major=parseInt(parsed_vs[0]);jq_version.minor=parseInt(parsed_vs[1]);jq_version.point=parseInt(parsed_vs[2]);var minMajor=1;var minMinor=9;var minPoint=1;if(jq_version.major<minMajor){return false;}\\nif(jq_version.minor<minMinor){return false;}\\nif(jq_version.minPoint<minPoint){return false;}\\nreturn true;};var check_jq=function(){if((typeof jQuery!=\\\'undefined\\\')&&correctjQueryVersion()){start_analytics();}\\nelse{try{if(jQuery){oldjQuery=jQuery;}}\\ncatch(e){}\\nvar jq=document.createElement(\\\'SCRIPT\\\');jq.src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";if(jq.onload||document.addEventListener){jq.onload=start_analytics;}\\nelse{setTimeout((function(){var looper=function(n){if(n>100||jq.readyState===\\\'complete\\\'||jq.readyState===\\\'loaded\\\'){start_analytics();}\\nelse{setTimeout(function(){looper(n+1);},50);}};return function(){looper(0);}})(),100);}\\ndocument.body.appendChild(jq);}};var analytics=function(tljQuery){var protocol=window.location.protocol+\\\'//\\\';if(!Array.prototype.forEach){Array.prototype.forEach=function(callback,thisArg){var T,k;if(this==null){throw new TypeError(\\\' this is null or not defined\\\');}\\nvar O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+\\\' is not a function\\\');}\\nif(arguments.length>1){T=thisArg;}\\nk=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O);}\\nk++;}};}\\nif(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){if(this==null){throw new TypeError();}\\nvar t=Object(this);var len=t.length>>>0;if(len===0){return-1;}\\nvar n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!=n){n=0;}else if(n!=0&&n!=Infinity&&n!=-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}\\nif(n>=len){return-1;}\\nvar k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k;}}\\nreturn-1;}}\\nObject.keys=Object.keys||function(o){var result=[];for(var name in o){if(o.hasOwnProperty(name))\\nresult.push(name);}\\nreturn result;};function parseUri(str){var o=parseUri.options,m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--)uri[o.key[i]]=m[i]||"";uri[o.q.name]={};uri[o.key[12]].replace(o.q.parser,function($0,$1,$2){if($1)uri[o.q.name][$1]=$2;});return uri;};parseUri.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\\\\/?#]+):)?(?:\\\\/\\\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\\\/?#]*)(?::(\\\\d*))?))?((((?:[^?#\\\\/]*\\\\/)*)([^?#]*))(?:\\\\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\\\\/]*@)([^:\\\\/?#.]+):)?(?:\\\\/\\\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\\\/?#]*)(?::(\\\\d*))?)(((\\\\/(?:[^?#](?![^?#\\\\/]*\\\\.[^?#\\\\/.]+(?:[?#]|$)))*\\\\/?)?([^?#\\\\/]*))(?:\\\\?([^#]*))?(?:#(.*))?)/}};function createUrl(str,options){if(!str.match(/^http/))\\nstr=\\\'//\\\'+str;var keys=Object.keys(options);if(!keys.length)\\nreturn str;if(str.indexOf(\\\'?\\\')===str.length-1){str=str.slice(0,str.length-1);}\\nvar qs="?";var n,nn;for(n=0,nn=keys.length;n<nn;n++){if(n===(nn-1)){qs+=keys[n]+\\\'=\\\'+options[keys[n]];}\\nelse{qs+=keys[n]+\\\'=\\\'+options[keys[n]]+\\\'&\\\';}}\\nreturn str+qs;}\\nvar isPin=function(b){return(b.src&&b.src.match("2917936"));};var isFb=function(b){return(b.src&&b.src.match("2917935"));};var version_string=tljQuery.fn.jquery;var parsed_vs=version_string.split(".");var jq_version={};jq_version.major=parseInt(parsed_vs[0]);jq_version.minor=parseInt(parsed_vs[1]);jq_version.point=parseInt(parsed_vs[2]);if(jq_version.major>=1&&jq_version.minor>=9&&jq_version.point>=1){\\n/*!\\n             * hoverIntent r7 // 2013.03.11 // tljQuery 1.9.1+\\n             * //cherne.net/brian/resources/jquery.hoverIntent.html\\n             *\\n             * You may use hoverIntent under the terms of the MIT license.\\n             * Copyright 2007, 2013 Brian Cherne\\n             */\\n(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=tljQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(tljQuery)}\\nelse if(jq_version.major>=1&&jq_version.minor>=5&&jq_version.point>=1){(function(e){e.fn.hoverIntent=function(t,n){var r={sensitivity:7,interval:100,timeout:0};r=e.extend(r,n?{over:t,out:n}:t);var i,s,o,u;var a=function(e){i=e.pageX;s=e.pageY};var f=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(o-i)+Math.abs(u-s)<r.sensitivity){e(n).unbind("mousemove",a);n.hoverIntent_s=1;return r.over.apply(n,[t])}else{o=i;u=s;n.hoverIntent_t=setTimeout(function(){f(t,n)},r.interval)}};var l=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return r.out.apply(t,[e])};var c=function(t){var n=tljQuery.extend({},t);var i=this;if(i.hoverIntent_t){i.hoverIntent_t=clearTimeout(i.hoverIntent_t)}if(t.type=="mouseenter"){o=n.pageX;u=n.pageY;e(i).bind("mousemove",a);if(i.hoverIntent_s!=1){i.hoverIntent_t=setTimeout(function(){f(n,i)},r.interval)}}else{e(i).unbind("mousemove",a);if(i.hoverIntent_s==1){i.hoverIntent_t=setTimeout(function(){l(n,i)},r.timeout)}}};return this.bind("mouseenter",c).bind("mouseleave",c)}})(tljQuery)}\\nelse{(function(e){e.fn.hoverIntent=function(t,n){var r={sensitivity:7,interval:100,timeout:0};r=e.extend(r,n?{over:t,out:n}:t);var i,s,o,u;var a=function(e){i=e.pageX;s=e.pageY};var f=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(o-i)+Math.abs(u-s)<r.sensitivity){e(n).unbind("mousemove",a);n.hoverIntent_s=1;return r.over.apply(n,[t])}else{o=i;u=s;n.hoverIntent_t=setTimeout(function(){f(t,n)},r.interval)}};var l=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return r.out.apply(t,[e])};var c=function(t){var n=(t.type=="mouseover"?t.fromElement:t.toElement)||t.relatedTarget;while(n&&n!=this){try{n=n.parentNode}catch(t){n=this}}if(n==this){return false}var i=tljQuery.extend({},t);var s=this;if(s.hoverIntent_t){s.hoverIntent_t=clearTimeout(s.hoverIntent_t)}if(t.type=="mouseover"){o=i.pageX;u=i.pageY;e(s).bind("mousemove",a);if(s.hoverIntent_s!=1){s.hoverIntent_t=setTimeout(function(){f(i,s)},r.interval)}}else{e(s).unbind("mousemove",a);if(s.hoverIntent_s==1){s.hoverIntent_t=setTimeout(function(){l(i,s)},r.timeout)}}};return this.mouseover(c).mouseout(c)}})(tljQuery)}\\nvar parsePlacementOptionsJSON=function(){var options=\\\'\\\';var parsedOptions;try{parsedOptions=JSON.parse(options);}\\ncatch(e){parsedOptions={};}\\nreturn parsedOptions;};var placementOptions=parsePlacementOptionsJSON();var currentTag=document.getElementById(\\\'```ANALYTICS_ID```\\\');var unit;if(placementOptions.unwrappedUnit){unit=tljQuery(currentTag).parent().children()[0];}\\nelse{unit=tljQuery(currentTag).parent().get(0);}\\nvar unitNumber=parseInt(\\\'```SCRIPT_NUMBER```\\\');var tag_id=@@@UNIT_ID@@@;var image_id=@@@IMAGEID@@@;var asset_id=@@@ASSET_ID@@@;var third_party_sampling_rate=@@@THIRD_PARTY_SAMPLING_RATE@@@;var third_party_discrepancy_rate=@@@THIRD_PARTY_DISCREPANCY_RATE@@@;var parsePV=function(pv){var parsed=parseInt(pv);if(isNaN(parsed)){return 1;}\\nreturn parsed;};var pipelineVersion=parsePV("@@@PIPE_LINE_VERSION@@@");var tacticID="@@@TACTIC_ID@@@";var lineItemID="@@@LINE_ITEM_ID@@@";var IOID="@@@IO_ID@@@";var creativeLibraryID="@@@CREATIVE_LIBRARY_ID@@@";var additionalData=@@@ADDITIONAL_DATA@@@;var inv_code=\\\'digg_main_feed\\\';var ref=document.URL;var domain=parseUri(ref).host;var removePixel=function(pixel,i){i=i||0;if(pixel.complete||i==1000){document.body.removeChild(pixel);}else{setTimeout(function(){removePixel(pixel,i+1);},100);}};var AnalyticsController=function($unit){var that=this;var adnxs_auction_id="%%%ADNXS_AUCTION_ID%%%";var adnxs_user_id="%%%ADNXS_USER_ID%%%";this.generateQueryObj=function(){var query={};for(var key in additionalData){if(additionalData.hasOwnProperty(key)){query[key]=additionalData[key];}}\\nquery.id=tag_id;query.ii=image_id;query.inv_code=inv_code;query.ref=encodeURIComponent(ref);query.domain=encodeURIComponent(domain);query.cb=Math.floor(89999999*Math.random()+10000000);query.aid=adnxs_auction_id;query.uid=adnxs_user_id;query.pv=pipelineVersion;query.tid=tacticID;query.liid=lineItemID;query.ioid=IOID;query.clid=creativeLibraryID;query.caid=asset_id;return query;};this.firePix=function(endpoint,query){var src=createUrl(protocol+"eb.3lift.com"+endpoint,query);if(isNaN(parseInt(query.pv))||(parseInt(query.pv)<=1)){var pix=document.createElement(\\\'IMG\\\');pix.src=src;pix.width=0;pix.height=0;document.body.appendChild(pix);removePixel(pix);}\\nreturn src.split("eb.3lift.com");};var fireClick=this.fireClick=function(e){var query=that.generateQueryObj();return that.firePix("/scc",query);};var fireDuration=this.fireDuration=function(t){var query=that.generateQueryObj();query.duration=t;return that.firePix("/scvd",query);};var firePlay=this.firePlay=function(e){var query=that.generateQueryObj();return that.firePix("/scvs",query);};var fireCompletion=this.fireCompletion=function(e){var query=that.generateQueryObj();return that.firePix("/scvc",query);}\\nvar fireShare=this.fireShare=function(share_type){if(this.event&&this.event.stopPropagation){this.event.stopPropagation();}\\nvar query=that.generateQueryObj();query.st=share_type;return that.firePix("/scs",query);};ts=fireShare;var fireHover=this.fireHover=function(e){var query=that.generateQueryObj();toggleShareButton(\\\'on\\\');return that.firePix("/scm",query);};var fireImp=this.fireImp=function(sr){var query=that.generateQueryObj();query.sr=sr;query.tpsr=third_party_sampling_rate;query.tpdr=third_party_discrepancy_rate;return that.firePix("/sci",query);};this.click=function(e){if(!this.analyticsOff){if(e.target&&e.target.tagName&&(e.target.tagName.toLowerCase()!=\\\'a\\\')){window.open(\\\'%%%CLICKTHROUGH_URL%%%\\\',\\\'_blank\\\');e.stopPropagation();e.preventDefault();}\\nthis.fireClick(e);}};this.share=function(share_type){if(!this.analyticsOff){this.fireShare(share_type);}};this.hover=function(e){if(!this.analyticsOff){this.fireHover(e);}};this.analyticsOff=false;$unit.click(function(e){that.click(e);});};AnalyticsController.prototype.setAdnxsPix=function(){var adnxsPix="%%%ADNXSPIX%%%";var pixEvent="%%%ADNXS_PIX_EVENT%%%";var that=this;var fireAdnxsPix=function(){var adnxsPixel=document.createElement(\\\'IMG\\\');adnxsPixel.style.display="none";adnxsPixel.width=0;adnxsPixel.height=0;adnxsPixel.src=adnxsPix;document.body.appendChild(adnxsPixel);};var clobber=function(methodName){var oldEvent=that[methodName];that[methodName]=function(e){fireAdnxsPix();oldEvent.call(this,e);};};if(adnxsPix.length){if(pixEvent==="click"){clobber("fireClick");}\\nelse if(pixEvent==="video_start"){clobber("firePlay");}\\nelse if(pixEvent==="video_completion"){clobber("fireCompletion");}\\nthis.adnxsPixData={adnxsPix:adnxsPix,pixEvent:pixEvent};}};AnalyticsController.prototype.getEndPointList=function(){return["fireClick","fireShare","firePlay","fireCompletion","fireHover","fireImp"];};AnalyticsController.prototype.setUpEB2Calls=function(){var endPointList=this.getEndPointList();var that=this;var clobberForEB2=function(callName){var call=that[callName];var newCall=function(e){var pathAndQS=call(e)[1];if(pipelineVersion>1){var i=document.createElement(\\\'IMG\\\');i.src="//eb2.3lift.com"+pathAndQS;i.display="none";i.width=0;i.height=0;document.body.appendChild(i);removePixel(i);}};that[callName]=newCall;};endPointList.forEach(function(callName){clobberForEB2(callName);});};var analyticsController=new AnalyticsController(tljQuery(unit));analyticsController.setUpEB2Calls();analyticsController.setAdnxsPix();var toggleCreator=function(shareButtons){var disabled=false;return function(el){if(el===\\\'disable\\\'){disabled=true;return;}\\nelse if(disabled){return;}\\nelse if(el==\\\'off\\\'&&(navigator.userAgent.match("MSIE 7.0")||(tljQuery(".tl_share_button:hover").length==0))){shareButtons.off();}\\nelse{shareButtons.on();}};};var ShareButtons=function($unit,analyticsController){var parseUrl=function(sUrl){try{var url=sUrl.split(\\\'(\\\')[1].split(\\\')\\\')[0];if(url.match(\\\'"\\\')){url=url.split(\\\'"\\\')[1];}\\nreturn url;}\\ncatch(e){return false;}};var getSafeBackgroundImage=function(el){var cs=window.getComputedStyle(el);if(cs[\\\'background-image\\\']){return cs[\\\'background-image\\\'];}\\nif(cs.backgroundImage){return cs.backgroundImage;}\\nreturn false;};var createLoadListener=function(el){return function(cb){var i=document.createElement(\\\'IMG\\\');i.width=0;i.height=0;i.style.display="none";i.src=parseUrl(getSafeBackgroundImage(el));var $i=tljQuery(i);var that=this;$i.load(function(){cb();});document.body.appendChild(i);};};this.analyticsController=analyticsController;var that=this;this.findReferenceImage=function(){var $ri;var candidates=[];$unit.find(\\\'img\\\').each(function(index,child){var $child=tljQuery(child);if(child.src.match("img.3lift.com")&&!child.className.match("tl_secondary")){candidates.push($child);}});if(candidates.length){$ri=candidates[0];candidates.forEach(function($c){if($c.width()>$ri.width()){$ri=$c;}});}\\nif(!$ri){$unit.find(\\\'*\\\').each(function(){if(getSafeBackgroundImage(this)&&getSafeBackgroundImage(this).match("img.3lift.com")){that.listenForLoad=createLoadListener(this);$ri=tljQuery(this);$ri.isDiv=true;}});}\\nreturn $ri;};this.$referenceImage=this.findReferenceImage();this.share_buttons=[];this.set_share_dimensions=function(){var buttonAssumptions={width:100,height:48,ar:100/48};var shareButtonCount=tljQuery(unit).find(".tl_share").length;if(shareButtonCount<3){shareButtonCount=3;}\\nthis.shareButtonCount=shareButtonCount;var w,h;this.adUrl=parseUri(this.$referenceImage[0].src);var adQs=this.adUrl.queryKey;this.adQs=adQs;if(this.$referenceImage.width()>50&&this.$referenceImage.height()>50){w=this.w=this.$referenceImage.width();h=this.h=this.$referenceImage.height();}\\nelse{w=adQs.width;h=adQs.height;this.w=parseInt(w);this.h=parseInt(h);}\\nvar shareButtonDimensions=(function(){var MaxButtonWidth=70;var MaxButtonHeight=34;var verticalShareHeight=Math.round((h/2)/shareButtonCount);if(verticalShareHeight>MaxButtonHeight){verticalShareHeight=MaxButtonHeight;}\\nvar verticalShareWidth=Math.round(verticalShareHeight*buttonAssumptions.ar);var verticalArea=verticalShareWidth*verticalShareWidth;var horizontalShareWidth=Math.round((w/2)/shareButtonCount);if(horizontalShareWidth>MaxButtonWidth){horizontalShareWidth=MaxButtonWidth;}\\nvar horizontalShareHeight=Math.round((1/buttonAssumptions.ar)*horizontalShareWidth);var horizontalArea=horizontalShareWidth*horizontalShareHeight;if(horizontalArea<=verticalArea){return{width:horizontalShareWidth,height:horizontalShareHeight,alignment:0};}\\nelse{return{width:verticalShareWidth,height:verticalShareHeight,alignment:1};}})();if(shareButtonDimensions.alignment===0){this.horizontalAligment=true;this.shareWidth=shareButtonDimensions.width;}\\nelse{this.verticalAlignment=true;this.shareHeight=shareButtonDimensions.height;}\\nthis.sbh=shareButtonDimensions.height;this.sbw=shareButtonDimensions.width;};if(this.$referenceImage&&!isMobile()){this.set_share_dimensions();this.initShareButtons();}};ShareButtons.prototype.alignPinBeforeFacebook=function(){var that=this;this.share_buttons.sort(function(a,b){if(that.verticalAlignment){if(that.sharingZone.match("S")){if(isFb(a)&&isPin(b)){return 1;}\\nif(isPin(a)&&isFb(b)){return 0;}\\nif(isFb(a)||isPin(a)){return 1;}\\nreturn 0;}\\nelse{if(isPin(a)&&isFb(b)){return 1;}\\nif(isFb(a)&&isPin(b)){return 0;}\\nif(isFb(a)||isPin(a)){return-1;}\\nreturn 0;}}\\nelse{if(that.sharingZone.match("E")){if(isFb(a)&&isPin(b)){return 1;}\\nif(isPin(a)&&isFb(b)){return 0;}\\nif(isFb(a)||isPin(a)){return 1;}\\nreturn 0;}\\nelse{if(isPin(a)&&isFb(b)){return 1;}\\nif(isFb(a)&&isPin(b)){return 0;}\\nif(isFb(a)||isPin(a)){return-1;}\\nreturn 0;}}});};ShareButtons.prototype.getShareZone=function(){if(this.lpSet){return this.sharingZone;}\\nvar logoBlackList=this.adQs.logo_exclude||\\\'\\\';var sharingZones=[];var excludeZones=[];if(this.$referenceImage.attr(\\\'lp\\\')){logoBlackList+=this.$referenceImage.attr(\\\'lp\\\');this.lpSet=true;}\\nvar corners=["NW","NE","SW","SE"];var sharingZone;corners.forEach(function(corner){if(!logoBlackList||(logoBlackList.indexOf(corner)<0)){sharingZones.push(corner);}\\nelse{excludeZones.push(corner);}});if(sharingZones.length){var en=function(k){if(sharingZones.indexOf(k)>=0){return true;}\\nreturn false;};var that=this;var setSZ=function(op1,op2,op3){if(en(op1)){sharingZone=op1;}\\nelse if(en(op2)){sharingZone=op2;}\\nelse if(en(op3)){sharingZone=op3;}};sharingZone=sharingZones[0];excludeZones.forEach(function(ez){switch(ez){case"NW":setSZ("SE","SW","NE");break;case"NE":setSZ("SW","SE","NW");break;case"SW":setSZ("NE","NW","SE");break;case"SE":setSZ("NW","NE","SW");break;}});}\\nelse{sharingZone=\\\'NE\\\';}\\nreturn sharingZone;};ShareButtons.prototype.initShareButtons=function(){this.sharingZone=this.getShareZone();var that=this;tljQuery(unit).find(\\\'.tl_share\\\').each(function(index,$child){var share_button=document.createElement(\\\'IMG\\\');var $share_button=tljQuery(share_button);share_button.className="tl_share_button";$share_button.style("display","none");$share_button.style("position","absolute");$share_button.style("cursor","pointer");$share_button.style("outline","none");var zi;var rzi=that.$referenceImage.css(\\\'zIndex\\\');if(rzi&&rzi!==\\\'auto\\\'&&parseInt(rzi)){zi=rzi;}\\nelse{zi=9999;}\\nsafeSetZindex(zi,null,$share_button,\\\'\\\');share_button.setAttribute(\\\'onclick\\\',$child.getAttribute(\\\'onclick\\\'));if($child.getAttribute(\\\'data-button\\\')){share_button.src="//img.3lift.com/?url="+encodeURIComponent($child.getAttribute(\\\'data-button\\\'))+"&alt=box&color=none&width="+that.shareWidth+"&height="+that.shareHeight;}\\nelse if(share_button.getAttribute(\\\'onclick\\\').match(\\\'facebook\\\')){share_button.src="//images.adpinr.com/shareit.png";}\\nelse{share_button.src="//images.adpinr.com/reserved/pinit.png";}\\nthat.$referenceImage.offsetParent().append(share_button);that.share_buttons.push(share_button);});this.alignPinBeforeFacebook();};var filterForShareButtons=function(jqChildren){var sb=[];jqChildren.each(function(i,e){if(tljQuery(e).hasClass("tl_share_button")){sb.push(e);}});return sb;};ShareButtons.prototype.on=function(){if(this.analyticsController.analyticsOff){return;}\\nthis.set_share_dimensions();this.sharingZone=this.getShareZone();this.alignPinBeforeFacebook();var that=this;var testShareButton=tljQuery(this.share_buttons[0]);var refPos=this.$referenceImage.position();this.w=this.$referenceImage.width();this.h=this.$referenceImage.height();this.xoff=refPos.left;this.yoff=refPos.top;var xoff=this.xoff;var yoff=this.yoff\\nvar pad=this.shareButtonCount-1;var sbc=this.shareButtonCount;if(this.sharingZone===\\\'NW\\\'){xoff+=10;yoff+=10;}\\nelse if(this.sharingZone==="NE"){xoff+=this.w;yoff+=10;}\\nelse if(this.sharingZone===\\\'SE\\\'){xoff+=this.w-10;yoff+=this.h-10;}\\nelse if(this.sharingZone===\\\'SW\\\'){xoff+=10;yoff+=this.h;}\\nthis.share_buttons.forEach(function(share_button){var $share_button=tljQuery(share_button);$share_button.style("width",that.sbw+"px","important");$share_button.style("height",that.sbh+"px","important");$share_button.style("min-width","0","important");$share_button.style("min-height","0","important");if(that.verticalAlignment){if((that.sharingZone===\\\'SW\\\')||(that.sharingZone===\\\'SE\\\')){yoff-=(that.sbh+10);$share_button.style("top",yoff+"px","important");yoff-=10;}\\nelse{$share_button.style("top",yoff+"px","important");yoff+=that.sbh+10;}\\nif((that.sharingZone===\\\'NE\\\')||(that.sharingZone===\\\'SE\\\')){$share_button.style("left",(xoff-that.sbw)+"px","important");}\\nelse{$share_button.style("left",(xoff)+"px","important");}}\\nelse{if((that.sharingZone===\\\'NE\\\')||(that.sharingZone===\\\'SE\\\')){xoff-=that.sbw;$share_button.style("left",xoff+"px","important");xoff-=10;}\\nelse{$share_button.style("left",xoff+"px","important");xoff+=that.sbw+10;}\\nif((that.sharingZone===\\\'SE\\\')||(that.sharingZone==\\\'SW\\\')){$share_button.style("top",(yoff-that.sbh)+"px","important");}\\nelse{$share_button.style("top",yoff+"px","important");}}\\n$share_button.style("display","block","important");});};ShareButtons.prototype.off=function(){this.share_buttons.forEach(function(share_button){tljQuery(share_button).style("display","none","important");});};ShareButtons.prototype.getBox=function(){var $ad=tljQuery(tljQuery(unit).children()[0]);var pos=$ad.offset();return{x1:pos.left,y1:pos.top,x2:pos.left+$ad.width(),y2:pos.top+$ad.height()};};var shareButtons;shareButtons=new ShareButtons(tljQuery(unit),analyticsController);var toggleShareButton,decorateOffChecker,offChecker;if(!isMobile()){toggleShareButton=toggleCreator(shareButtons);decorateOffChecker=function(shareButtons,toggler,video){return function(e){var box;if(shareButtons){box=shareButtons.getBox();}\\nelse{box=video.getBox();}\\nif(((e.pageX)<box.x1)||((e.pageX)>box.x2)||((e.pageY)<box.y1)||((e.pageY)>box.y2)){toggler(\\\'off\\\');return true;}\\nreturn false;};};offChecker=decorateOffChecker(shareButtons,toggleShareButton);}\\nelse{toggleShareButton=function(){};offChecker=function(){};}\\nvar VideoFetcher=function($unit,analyticsController,shareToggler,configuration){this.getAnalyticsController=function(){return analyticsController;};this.getUnit=function(){return $unit;};this.getShareToggler=function(){return shareToggler;};this.getConfiguration=function(){return configuration;};this.disableAnalyticsAndSharing();this.getTlImg=function(){return configuration.$referenceImage[0];};this.isInit=false;this.clickRegistered=false;this.clicked=false;this.inPlay=false;this.playState=false;this.parseThirdPartyPix();this.cursor={notSet:true};};VideoFetcher.prototype.thirdPartyStartPix="%%%THIRD_PARTY_START_PIX%%%";VideoFetcher.prototype.thirdPartyCompletionPix="%%%THIRD_PARTY_COMPLETION_PIX%%%";VideoFetcher.prototype.parsedThirdPartyPix=false;VideoFetcher.prototype.parseThirdPartyPix=function(){if(!this.parsedThirdPartyPix){this.parsedThirdPartyPix=true;this.thirdPartyStartPix=this.parsePixFromString(this.thirdPartyStartPix);this.thirdPartyCompletionPix=this.parsePixFromString(this.thirdPartyCompletionPix);}};VideoFetcher.prototype.parsePixFromString=function(pixString){return pixString.split(",");};VideoFetcher.prototype.fireThirdPartyPix=function(pixArr){pixArr.forEach(function(pixsrc){if(!pixsrc.length){return;}\\nvar i=document.createElement(\\\'IMG\\\');i.src=pixsrc;i.onload=function(){i.parentNode.removeChild(i);};i.width=0;i.height=0;i.style.display="none";document.body.appendChild(i);});};VideoFetcher.prototype.fireThirdPartyPlayPix=function(){this.fireThirdPartyPix(this.thirdPartyStartPix);};VideoFetcher.prototype.fireThirdPartyCompletionPix=function(){this.fireThirdPartyPix(this.thirdPartyCompletionPix);};VideoFetcher.prototype.removeableClasses=["sumome-image-sharer"];VideoFetcher.prototype.hideRemoveableClasses=function(){var that=this;setInterval(function(){if(that.mousedOut){return;}\\nthat.removeableClasses.forEach(function(cl){var el_arr=document.getElementsByClassName(cl);var i=0;var ii=el_arr.length;var el;for(;i<ii;i++){el=el_arr[i];if(el&&el.style){el.style.display="none";}}});},250);};VideoFetcher.prototype.lazyLoadPlayerHookData=function(){var playerHookData=this.findPlayerHook();var playerWidth=playerHookData.width;var playerHeight=playerHookData.height;var playerHook=playerHookData.hook;var outterParent=playerHookData.outterParent;this.getPlayerHookData=function(){return playerHookData;};};VideoFetcher.prototype.lazyLoadWrappedPlayer=function(){var playerHookData=this.getPlayerHookData();var wrappedPlayerInfo=this.createWrappedPlayer(playerHookData.width,playerHookData.height);this.getWrappedPlayerInfo=function(){return wrappedPlayerInfo;};};VideoFetcher.prototype.adjustDimensions=function(w,h){var configuration=this.getConfiguration();if(configuration&&(configuration.playerSettings.buttonBar||configuration.playerSettings.buttonBarMobile)){this.determineButtonBarDimensions();h=h-this.buttonBarDimensions.height;}\\nreturn{h:h,w:w};};VideoFetcher.prototype.lazyLoadVideoInfo=function(){var $videoSpec=this.getVideoSpec();var type=$videoSpec.attr(\\\'tl-vid-type\\\');var id=$videoSpec.attr(\\\'tl-vid-id\\\');this.videoID=id;this.getPlayerType=function(){return type;};this.getVideoId=function(){return id;};};VideoFetcher.prototype.disableAnalyticsAndSharing=function(){var analyticsController=this.getAnalyticsController();var shareToggler=this.getShareToggler();analyticsController.analyticsOff=true;shareToggler(\\\'disable\\\');};VideoFetcher.prototype.getVideoSpec=function(){var $unit=this.getUnit();var videoSpec=$unit.find(\\\'.tl-vid\\\');var $videoSpec;if(videoSpec){$videoSpec=tljQuery(videoSpec);}\\nelse{throw new Error(\\\'could not find video info\\\');}\\nreturn $videoSpec;};VideoFetcher.prototype.setClassProperties=function(){if(!this.styleSet){var x=document.createElement(\\\'STYLE\\\');x.textContent=\\\'.triplelift_progress_element::-webkit-progress-value { background: white; }\\\';x.textContent+=\\\'.triplelift_progress_element::-moz-progress-bar { background: white; }\\\';x.textContent+=\\\'.triplelift_progress_div { width:100%; height:100%; position: relative; background-color:whiteSmoke; }\\\';x.textContent+=\\\'.triplelift_progress_div > span { text-indent: -9999px; background-color:blue; display:block; border-radius:2px;}\\\';document.body.appendChild(x);this.styleSet=true;}};VideoFetcher.prototype.styleProgressBar=function(pb){this.setClassProperties();var tlImg=this.getTlImg();var $tlImg=tljQuery(tlImg);var pos=$tlImg.position();pb.className="triplelift_progress_element";pb.style.position="absolute";pb.style.top=pos.top;pb.style.left=pos.left;pb.style.opacity=0.6;safeSetZindex(this.ZI_LEVEL_0,pb);pb.style.width=Math.round($tlImg.width())+"px";pb.style.height="10px";pb.style[\\\'-webkit-appearance\\\']=\\\'none\\\';};VideoFetcher.prototype.createIESafeProgress=function(pb){var d=document.createElement(\\\'DIV\\\');d.className="triplelift_progress_div";var s=document.createElement(\\\'SPAN\\\');s.className="triplelift_progress_span";d.appendChild(s);s.style.width="0%";s.textContent="1000000";pb.appendChild(d);};VideoFetcher.prototype.setProgressBar=function(cb){var pb=document.createElement(\\\'PROGRESS\\\');this.createIESafeProgress(pb);this.styleProgressBar(pb);tlImg.parentNode.insertBefore(pb,tlImg);this.monitorProgress(pb,cb);};VideoFetcher.prototype.monitorProgress=function(pb,cb){this.progressBar=new ProgressBar(this,pb,cb);this.progressBar.startMonitor();};VideoFetcher.prototype.setCursor=function(e){this.cursor.pageX=e.pageX;this.cursor.pageY=e.pageY;this.cursor.notSet=false;};VideoFetcher.prototype.getBox=function(){var wrappedPlayerInfo=this.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer;var $wrappedPlayer=tljQuery(wrappedPlayer);var wrappedPlayerBox={};var wpo=$wrappedPlayer.offset();wrappedPlayerBox.x1=wpo.left;wrappedPlayerBox.y1=wpo.top;wrappedPlayerBox.x2=wpo.left+$wrappedPlayer.width();wrappedPlayerBox.y2=wpo.top+$wrappedPlayer.height();return wrappedPlayerBox;};var altSeeMore=\\\'%%%ALT_SEE_MORE%%%\\\';if(altSeeMore===\\\'0\\\'){altSeeMore=false;};VideoFetcher.prototype.assets={clickthrough:"http://images.3lift.com/3127258.png",close:"http://images.3lift.com/3127259.png",facebook:"http://images.3lift.com/3127260.png",pinterest:"http://images.3lift.com/3127261.png",play:"http://images.3lift.com/3127262.png",share:"http://images.3lift.com/3127263.png",tumblr:"http://images.3lift.com/3127264.png",twitter:"http://images.3lift.com/3127265.png",safeGradient:"http://img.3lift.com/?width=200&height=100&url=http%3A%2F%2Fimages.3lift.com%2F3129001.png",gradient:"http://images.3lift.com/3129001.png",xbutton:"http://images.3lift.com/3129012.png",seemore:altSeeMore||"http://images.3lift.com/3129101.png",whiteplaybutton:"http://images.3lift.com/3129104.png"};VideoFetcher.prototype.stylePlayButton=function($pb,playButtonInfo){safeSetZindex(this.ZI_LEVEL_0,null,$pb,\\\'\\\');$pb.style("display","none","important");$pb.style("position","absolute","important");$pb.style("width",playButtonInfo.width+"px","important");$pb.style("height",playButtonInfo.height+"px","important");$pb.style("left",playButtonInfo.x+"px","important");$pb.style("top",playButtonInfo.y+"px","important");$pb.style("border","none","important");$pb.style("background","none","important");};VideoFetcher.prototype.setPrePlay=function(){var config=this.getConfiguration();var playerHookData=this.getPlayerHookData();var hook=playerHookData.hook;var $hook=tljQuery(hook);var size=this.getImageSize();var playButton=document.createElement(\\\'IMG\\\');playButton.src=this.assets.whiteplaybutton;var playButtonInfo=this.getPlayButtonInfo(size,$hook);var $pb=this.pb=tljQuery(playButton);gaurd($pb);this.stylePlayButton($pb,playButtonInfo);hook.appendChild(playButton);var toggler=function(msg){if(msg==="on"){$pb.style("display","","important");}\\nelse if(msg=="off"){$pb.style("display","none","important");}\\nelse{throw new Error("setPrePlay Toggler Called with unkown message");}};var offchecker;var that=this;if(config.playButtonSettings.showOnHover){offchecker=decorateOffChecker(null,toggler,this);$hook.on(\\\'mouseover\\\',function(){if(!that.inPlay&&!that.playState){toggler("on");}});$hook.on(\\\'mouseout\\\',function(e){offchecker(e);});}\\nelse{toggler(\\\'on\\\');}\\nthis.preHoverOff=function(){toggler("off");};this.resetPlayButton=function(){if(this.videoToggler&&this.videoToggler.getToggleState()===this.videoToggler.PLAYING){return;}\\ntoggler("on");};};VideoFetcher.prototype.getPlayButtonInfo=function(size,$hook){var info={};var config=this.getConfiguration();var maxWidth=115;var maxHeight=83;var oar=maxWidth/maxHeight;var w=$hook.width();var h=$hook.height();var wpct=config.playButtonSettings.width;info.width=Math.round(wpct*w);if(info.width>maxWidth){info.width=maxWidth;}\\ninfo.height=Math.round((1/oar)*info.width);info.x=(Math.round(w/2)-Math.round(info.width/2));info.y=(Math.round(h/2)-Math.round(info.height/2));return info;};VideoFetcher.prototype.registerClick=function(){var type=this.getPlayerType();if(this.clickRegistered){return;}\\nif(type===\\\'yt\\\'){this.clickRegistered=true;this.registerYTClick();}};VideoFetcher.prototype.determineRenderStrategy=function(){var config=this.getConfiguration();this.CLICK_STRATEGY=0;this.PLAY_STRATEGY=1;this.PROGRESS_STRATEGY=2;this.NONE_STRATEGY=3;this.MOBILE_CLICK_ONCE_STRATEGY=4;if(isMobile()){return this.MOBILE_CLICK_ONCE_STRATEGY}\\nvar strats={};strats.click=0;strats.play=1;strats.progress=2;strats.none=3;return strats[config.render_strategy];};VideoFetcher.prototype.registerVideoAd=function(){this.alterUnit();this.checkForCTConsistency();var videoConfig=this.getConfiguration();var strategy=this.determineRenderStrategy();if(strategy===this.CLICK_STRATEGY){videoConfig.playerSettings.autoPlay=true;this.registerClick();}\\nelse if(strategy===this.PLAY_STRATEGY){videoConfig.playerSettings.autoPlay=true;this.registerHover();}\\nelse if(strategy===this.PROGRESS_STRATEGY){videoConfig.playerSettings.autoPlay=true;videoConfig.playerSettings.hoverProgressBar=true;videoConfig.progressLimit=2000;this.registerClick();this.registerHover();}\\nelse if(strategy===this.MOBILE_CLICK_ONCE_STRATEGY){videoConfig.playerSettings.autoPlay=false;videoConfig.transparentClickThroughDiv=false;this.registerClick();}\\nelse{this.registerHover();}};VideoFetcher.prototype.checkForCTConsistency=function(){var config=this.getConfiguration();if(config.transparentClickThroughDiv&&false){if(!config.playerSettings.autoPlay){config.transparentClickThroughDiv=false;}}};VideoFetcher.prototype.registerHover=function(){var type=this.getPlayerType();if(this.hoverRegistered){return;}\\nif(type===\\\'yt\\\'){this.hoverRegistered=true;this.registerYTHover();}};VideoFetcher.prototype.registerYTHover=function(){var config=this.getConfiguration();var analyticsController=this.getAnalyticsController();if(!this.clickRegistered){this.clicked=true;this.registerYTClick();}\\nvar $unit=this.getUnit();var that=this;var onHover=function(e){if(that.hovered){e.preventDefault();e.stopPropagation();return;}\\nthat.hideRemoveableClasses();that.inPlay=true;that.hovered=true;that.clicked=true;if(that.preHoverOff){that.preHoverOff();}\\ne.preventDefault();e.stopPropagation();var playerHookData=that.getPlayerHookData();var playerHook=playerHookData.hook;var w=playerHookData.width;var h=playerHookData.height;var wrappedPlayerInfo=that.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer\\nplayerHook.appendChild(wrappedPlayer);that.positionWrappedPlayer(wrappedPlayer);that.wrappedPlayer=wrappedPlayer;that.initYTPlayer(wrappedPlayerInfo,w,h);};var stashedHover;if(config.playerSettings.hoverProgressBar){stashedHover=onHover;onHover=function(e){if(!that.progressSet){that.setProgressBar(function(){stashedHover(e);});}};}\\nvar hoverWithAnalytics=function(e){analyticsController.fireHover(e);onHover(e);};var hoverConfig={over:hoverWithAnalytics,out:function(){},sensitivy:8};if(unitNumber&&(unitNumber<3)){$unit.hoverIntent(hoverConfig);}\\nelse{$unit.bind(\\\'mouseover\\\',onHover);}};VideoFetcher.prototype.getVideoControls=function(){return{width:0,height:0};};VideoFetcher.prototype.alterUnit=function(){var that=this;var tlImg=this.getTlImg();var horizontalRecursiveCheck=function(el){if(el.tagName===\\\'A\\\'&&el.href===\\\'%%%CLICKTHROUGH_URL%%%\\\'){el.removeAttribute(\\\'href\\\');el.removeAttribute(\\\'target\\\');var $el=tljQuery(el);$el.click(function(e){e.preventDefault();});return true;}\\nif(el.nextSibling){return horizontalRecursiveCheck(el.nextSibling);}\\nreturn false;};var verticalRecursiveCheck=function(el){if(!el){return;}\\nwhile(el.previousSibling){el=el.previousSibling;}\\nif(horizontalRecursiveCheck(el)){return;}\\nreturn verticalRecursiveCheck(el.parentNode);};verticalRecursiveCheck(tlImg);};VideoFetcher.prototype.registerYTClick=function(){var $unit=this.getUnit();var that=this;$unit.click(function(e){if(that.clicked){return;}\\nthat.hideRemoveableClasses();that.inPlay=true;if(that.preHoverOff){that.preHoverOff();}\\nthat.clicked=true;that.hovered=true;if(that.progressBar){that.progressSet=true;that.progressBar.removeProgressBar();}\\ne.preventDefault();e.stopPropagation();var playerHookData=that.getPlayerHookData();var playerHook=playerHookData.hook;var w=playerHookData.width;var h=playerHookData.height;var wrappedPlayerInfo=that.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer\\nplayerHook.appendChild(wrappedPlayer);that.positionWrappedPlayer(wrappedPlayer);that.wrappedPlayer=wrappedPlayer;that.initYTPlayer(wrappedPlayerInfo,w,h);});};VideoFetcher.prototype.initYTPlayer=function(wrappedPlayerInfo,w,h){var config=this.getConfiguration();var c=config.playerSettings.showControls?1:0;var r=0;var id=this.getVideoId();var that=this;this.player=new YT.Player(wrappedPlayerInfo.playerID,{height:h,width:w,videoId:id,playerVars:{controls:c,showinfo:0,modestbranding:1,rel:r,autohide:0},events:{\\\'onReady\\\':function(){that.onPlayerReady();},\\\'onStateChange\\\':function(e){that.onPlayerStateChange(e);},\\\'onError\\\':function(e){}}});};VideoFetcher.prototype.createWrappedPlayer=function(w,h){var type=this.getPlayerType();if(type==\\\'yt\\\'){var playerDiv=document.createElement("DIV");playerDiv.id="pd_"+Math.round(Math.random()*10000);var wrappedDiv=document.createElement("DIV");wrappedDiv.id="wpd_"+playerDiv.id;wrappedDiv.appendChild(playerDiv);wrappedDiv.style.width=w+"px";wrappedDiv.style.height=h+"px";wrappedDiv.style.position="absolute";safeSetZindex(0,wrappedDiv);var playerID=playerDiv.id;var wrappedDivID=wrappedDiv.id;return{wrappedPlayer:wrappedDiv,playerID:playerDiv.id,wrappedDivID:wrappedDiv.id};}};VideoFetcher.prototype.positionWrappedPlayer=function(wrappedPlayer){var type=this.getPlayerType();var $tlImg=tljQuery(this.getTlImg());if(type==\\\'yt\\\'){var hookTop=$tlImg.position().top;var hookLeft=$tlImg.position().left;wrappedPlayer.style.left=hookLeft+"px";wrappedPlayer.style.top=(hookTop-tljQuery(wrappedPlayer).height())+"px";safeSetZindex(this.ZI_LEVEL_1,wrappedPlayer);}};VideoFetcher.prototype.pauseVideo=function(){var type=this.getPlayerType();if(type==="yt"){this.player.pauseVideo();}};VideoFetcher.prototype.playVideo=function(){var type=this.getPlayerType();if(type==="yt"){this.player.playVideo();}};VideoFetcher.prototype.isFireFox=function(){if(navigator&&navigator.userAgent){return navigator.userAgent.toLowerCase().indexOf(\\\'firefox\\\')>-1;}\\nreturn false;};VideoFetcher.prototype.forceHTML5=function(){var player=document.getElementById(this.getWrappedPlayerInfo().playerID);player.src+=\\\'&html5=1\\\';};VideoFetcher.prototype.checkForFireFoxBug=function(){if(this.isFireFox()&&!this.HTML5FORCED&&inv_code.match(\\\'fansided_main_largefeature\\\')){this.checkedForFireFoxBug=true;return true;}\\nreturn false;};VideoFetcher.prototype.checkAndSetHTML5=function(){if(!this.forcedHTML5){if(this.checkForFireFoxBug()){this.HTML5FORCED=true;this.forceHTML5();return true;}\\nif(this.IEHTML5&&!this.HTML5FORCED){this.HTML5FORCED=true;this.forceHTML5();return true;}}\\nreturn false;};VideoFetcher.prototype.onPlayerReady=function(){if(this.checkAndSetHTML5()){return;}\\nvar $tlImg=tljQuery(this.getTlImg());var type=this.getPlayerType();var configuration=this.getConfiguration();if(type==\\\'yt\\\'){var hookTop=$tlImg.position().top;var hookLeft=$tlImg.position().left;var wrappedPlayerInfo=this.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer;var playerHookData=this.getPlayerHookData();var playerEl=document.getElementById(wrappedPlayerInfo.playerID);if(configuration&&configuration.playerSettings){if(configuration.playerSettings.buttonBar){this.appendButtonBar(wrappedPlayer,playerEl);}\\nelse if(configuration.playerSettings.buttonBarMobile){this.appendButtonBarMobile(wrappedPlayer,playerEl);}}\\nthis.show();}};VideoFetcher.prototype.resetVideo=function(){var that=this;var onPlay=function(){that.player.pauseVideo();var testDuration=250;setTimeout(function(){if(that.player.getPlayerState()!==YT.PlayerState.PAUSED){onPlay();}},testDuration);};this.videoToggler.toggle();this.player.seekTo(0);this.registerOneTimePlayEvent(onPlay);};VideoFetcher.prototype.registerOneTimePlayEvent=function(cb){if(this.oneTimePlayEvent){throw new Error(\\\'event already registered\\\');}\\nthis.oneTimePlayEvent=cb;};VideoFetcher.prototype.YTPlayerStateChange=function(e){var ac=this.getAnalyticsController();if(e.data==YT.PlayerState.PLAYING){this.playState="playing";this.inPlay=true;if(!this.initPlay){this.initPlay=true;ac.firePlay();this.fireThirdPartyPlayPix();this.initPlayMonitor();}\\nelse{this.playMonitor.setStart(new Date().getTime());}\\nif(this.oneTimePlayEvent){this.oneTimePlayEvent();this.oneTimePlayEvent=false;}}\\nelse if(e.data==YT.PlayerState.PAUSED){this.playState="paused";this.inPlay=false;if(this.playMonitor){this.playMonitor.setStop(new Date().getTime());this.playMonitor.setStop(new Date().getTime());}}\\nelse if(e.data===YT.PlayerState.ENDED){var config=this.getConfiguration();if(!this.videoEnded){ac.fireCompletion();this.fireThirdPartyCompletionPix();this.videoEnded=true;}\\nthis.playMonitor.setStop(new Date().getTime());if(config.playerSettings.resetVideo){this.resetVideo();}\\nif(!config.playerSettings.autoPlay){config.playerSettings.autoPlay=true;}}};var PlayMonitor=function(ac,upperLimit){var playing=false;var totalTime=0;var start;var stop;this.setStart=function(d){start=d;stop=undefined;playing=true;};this.setStop=function(d){if(!playing){return;}\\nstop=d;playing=false;totalTime+=(stop-start);};this.getPlayDuration=function(){var t;if(playing){t=totalTime+(new Date().getTime()-start);}\\nelse{t=totalTime;}\\nif(t>upperLimit){t=upperLimit;}\\nreturn t;};this.expDecayMonitor=function(n){var d=this.getPlayDuration();ac.fireDuration(d);var that=this;setTimeout(function(){that.expDecayMonitor(n*1.5);},n);};};VideoFetcher.prototype.initPlayMonitor=function(){this.playMonitor=new PlayMonitor(this.getAnalyticsController(),this.getVideoLengthMS());this.playMonitor.setStart(new Date().getTime());var that=this;setTimeout(function(){that.playMonitor.expDecayMonitor(1000);},1000);};VideoFetcher.prototype.onPlayerStateChange=function(e){var $tlImg=tljQuery(this.getTlImg());var type=this.getPlayerType();if(type==\\\'yt\\\'){this.YTPlayerStateChange(e);}};VideoFetcher.prototype.getYTVideoLength=function(){return this.player.getDuration();};VideoFetcher.prototype.getVideoLengthMS=function(){var type=this.getPlayerType();if(type==\\\'yt\\\'){return this.getYTVideoLength()*1000;}};VideoFetcher.prototype.getCanvass=function(){var size=this.getImageSize();var canvass={};if(size==="small"){canvass.shareButtons={width:0.60,alignment:\\\'bottom right\\\'};canvass.xButton={width:0.04,alignment:\\\'top right\\\'};canvass.seeMoreButton={width:0.20,alignment:\\\'above\\\'};}\\nelse if(size==="large"){canvass.shareButtons={width:0.33,alignment:\\\'bottom right\\\'};canvass.xButton={width:0.04,alignment:\\\'top right\\\'};canvass.seeMoreButton={width:0.20,alignment:\\\'left\\\'};}\\nelse{throw new Error(\\\'no valid image size\\\');}\\nreturn canvass;};VideoFetcher.prototype.positionButton=function(button,$hook){var config=this.getConfiguration();var elType;if(config.isMobile&&(button.type===\\\'xbutton\\\')){return;}\\nelType=button.elementType||"IMG";var i=document.createElement(elType);if(elType=="IMG"){i.src=button.src;}\\nvar $i=tljQuery(i);gaurd($i);$i.style("display","none","important");$hook[0].appendChild(i);$i.style("position","absolute","important");$i.style("width",button.width+"px","important");$i.style("height",button.height+"px","important");$i.style("left",button.x+"px","important");$i.style("top",button.y+"px","important");$i.staticTop=button.y;safeSetZindex(button.zIndex,null,$i,\\\'\\\');this.addClick(button,$i);if(button.type=="ctdiv"){this.addCTDiv($i);}\\nreturn $i;};VideoFetcher.prototype.addCTDiv=function($div){this.transparentClickThroughDiv=$div[0];this.$transparentClickThroughDiv=$div;};VideoFetcher.prototype.addClick=function(buttonInfo,$buttonImg){if(buttonInfo.type==="xButton"){this.addXButtonClick($buttonImg[0]);$buttonImg.type=\\\'xButton\\\';}\\nelse if(buttonInfo.type===\\\'pinterest\\\'){this.addPinButtonClick($buttonImg);}\\nelse if(buttonInfo.type===\\\'tumblr\\\'){this.addTumblrButtonClick($buttonImg);}\\nelse if(buttonInfo.type===\\\'twitter\\\'){this.addTwitterButtonClick($buttonImg);}\\nelse if(buttonInfo.type===\\\'facebook\\\'){this.addFacebookButtonClick($buttonImg);}\\nelse if(buttonInfo.type===\\\'seemore\\\'){this.addSeeMoreButtonClick($buttonImg);}\\nelse if(buttonInfo.type===\\\'ctdiv\\\'){this.addCTDivClick($buttonImg);}};VideoFetcher.prototype.addSeeMoreButtonClick=function($button){var ac=this.getAnalyticsController();$button.click(function(){window.open(\\\'%%%CLICKTHROUGH_URL%%%\\\',\\\'_blank\\\');ac.fireClick();});};VideoFetcher.prototype.addCTDivClick=function($button){var ac=this.getAnalyticsController();var that=this;var playerState;$button.click(function(){playerState=that.player.getPlayerState()\\nif(!that.isPlayerShowing()){that.show();}\\nelse if((playerState==YT.PlayerState.PAUSED)||(playerState==YT.PlayerState.CUED)||(playerState<0)){that.player.playVideo();}\\nelse{that.pauseVideo();window.open(\\\'%%%CLICKTHROUGH_URL%%%\\\',\\\'_blank\\\');ac.fireClick();}});};VideoFetcher.prototype.addXButtonClick=function(button){this.videoToggler=new VideoToggler(button,this);this.addPlayButtonClick();};VideoFetcher.prototype.createYTURL=function(){var id=this.videoID;var url="http://youtube.com/watch?v="+id;return url;};VideoFetcher.prototype.addFacebookButtonClick=function($button){var shareUrl="http://facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.createYTURL());var ac=this.getAnalyticsController();$button.click(function(){ac.fireShare("facebook");window.open(shareUrl,\\\'popup\\\',\\\'width=650,height=316\\\');});};VideoFetcher.prototype.addPinButtonClick=function($button){var shareUrl=\\\'http://pinterest.com/pin/create/button/?is_video=true&url=\\\'+encodeURIComponent(this.createYTURL())+\\\'&media=\\\'+encodeURIComponent(\\\'%%%IMAGE_URL%%%\\\')+\\\'&description=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\');var ac=this.getAnalyticsController();$button.click(function(){ac.fireShare("pinterest");window.open(shareUrl,\\\'popup\\\',\\\'width=650,height=316\\\');});};VideoFetcher.prototype.addTwitterButtonClick=function($button){var shareUrl=\\\'http://twitter.com/intent/tweet?text=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\')+\\\'&url=\\\'+encodeURIComponent(this.createYTURL());var ac=this.getAnalyticsController();$button.click(function(){ac.fireShare("twitter");window.open(shareUrl,\\\'popup\\\',\\\'width=650,height=316\\\');});};VideoFetcher.prototype.createEmbed=function(src){return\\\'<iframe src="\\\'+src+\\\'">\\\';};VideoFetcher.prototype.addTumblrButtonClick=function($button){var wrappedPlayerInfo=this.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer;var i=wrappedPlayer.getElementsByTagName(\\\'IFRAME\\\')[0];var shareUrl=\\\'http://www.tumblr.com/share/video?embed=\\\'+encodeURIComponent(this.createEmbed(i.src))+\\\'&caption=\\\'+encodeURIComponent(\\\'%%%SINGLE_ESCAPED_CAPTION%%%\\\');var ac=this.getAnalyticsController();$button.click(function(){ac.fireShare("tumblr");window.open(shareUrl,\\\'popup\\\',\\\'width=650,height=316\\\');});};VideoFetcher.prototype.constructMouseButtonLayoutCommands=function(){var config=this.getConfiguration();var commands=["getShareButtonsLayout","getXButtonLayout","getBottomTransBar"];if(!config.transparentClickThroughDiv||(this.IEHTML5&&!this.IE11)){commands.push("getSeeMoreButtonLayout");}\\nelse{commands.push("getTransparentClickThroughDiv");}\\nreturn commands;};VideoFetcher.prototype.getLayout=function($hook){var canvass=this.getCanvass();canvass.available={x1:0,y1:0,x2:$hook.width(),y2:$hook.height()};var info=[];canvass.info=info;var commands=this.constructMouseButtonLayoutCommands();var that=this;commands.forEach(function(cmd){that[cmd]($hook,canvass);});return info;};VideoFetcher.prototype.getBottomTransBar=function($hook,canvass){var config=this.getConfiguration();var info={};if(navigator&&navigator.userAgent&&navigator.userAgent.match("Safari")&&!navigator.userAgent.match("Chrome")){info.src=this.getAsset(\\\'safeGradient\\\');}\\nelse{info.src=this.getAsset(\\\'gradient\\\');}\\ninfo.width=$hook.width();var size=this.getImageSize();if(size==="small"){info.height=Math.round(canvass.info[0].height*3.5)+10;}\\nelse{info.height=Math.round(canvass.info[0].height*1.5)+10;}\\ninfo.x=$hook.find("div").position().left;info.y=$hook.height()-info.height;if(config.playerSettings.showControls){info.y-=37;}\\ninfo.zIndex=this.ZI_LEVEL_3;canvass.info.push(info);};VideoFetcher.prototype.seeMoreButtonOriginalWidth=183;VideoFetcher.prototype.seeMoreButtonOriginalHeight=23;VideoFetcher.prototype.getSeeMoreButtonLayout=function($hook,canvass){var sminfo=canvass.seeMoreButton;var oar=this.seeMoreButtonOriginalWidth/this.seeMoreButtonOriginalHeight;var w,h,x,y;var info={};info.type="seemore";if(canvass.shareButtons.alignment===\\\'bottom right\\\'){if(sminfo.alignment===\\\'left\\\'){h=Math.round(this.shareButton.height/4)*3;w=oar*h;if(h>this.seeMoreButtonOriginalHeight){h=this.seeMoreButtonOriginalHeight;w=this.seeMoreButtonOriginalWidth;}\\ny=canvass.available.y2+Math.round(this.shareButton.height/2)-Math.round(h/2);x=canvass.available.x2=canvass.available.x2-w-10;info.type="seemore";info.x=x;info.y=y;info.width=w;info.height=h;info.src=this.getAsset("seemore");info.zIndex=this.ZI_LEVEL_4;canvass.info.push(info);}\\nelse if(sminfo.alignment===\\\'above\\\'){w=Math.round(($hook.width()-canvass.available.x2)/4)*3;h=Math.round((1/oar)*w);if(h>this.originalSeeMoreButtonHeight){h=this.originalSeeMoreButtonHeight;w=this.originalSeeMoreButtonWidth;}\\ny=canvass.available.y2-h-15;x=$hook.width()-(w+Math.round(w/10));info.x=x;info.y=y;info.width=w;info.height=h;info.src=this.getAsset("seemore");info.zIndex=this.ZI_LEVEL_4;canvass.info.push(info);}\\nelse{throw new Error(\\\'getSeeMoreButtonLayout: no valid alignment found\\\');}}\\nelse{throw new Error(\\\'getSeeMoreButtonLayout: no valid alignment found\\\');}};VideoFetcher.prototype.getTransparentClickThroughDiv=function($hook,canvass){var config=this.getConfiguration();var info={};var w=$hook.width();var h=$hook.height();info.type="ctdiv";info.elementType="DIV";info.x=0;info.y=0;if(config.playerSettings.showControls){info.height=h-this.playerControlHeight;}\\nelse{info.height=h;}\\ninfo.width=w;info.zIndex=this.ZI_LEVEL_2;canvass.info.push(info);};VideoFetcher.prototype.getXButtonLayout=function($hook,canvass){var xinfo=canvass.xButton;var $wrappedPlayer=tljQuery(this.getWrappedPlayerInfo().wrappedPlayer);var ow=85;var oh=85;var oar=ow/oh;var w,h,x,y;var w=xinfo.width*$hook.width();h=Math.round((1/oar)*w);if(h>oh){h=oh;w=ow;}\\nif(xinfo.alignment===\\\'top right\\\'){y=canvass.available.y1+$wrappedPlayer.position().top;x=$hook.width()-w;var info={};info.type="xButton";info.x=x;info.y=y;info.width=w;info.height=h;info.src=this.getAsset("xbutton");info.zIndex=this.ZI_LEVEL_4;canvass.info.push(info);}\\nelse{throw new Error(\\\'getXButtonLayout: no valid alignment found\\\');}};VideoFetcher.prototype.shareTypes=(function(){var st="%%%VIDEO_SHARE_TYPES%%%";if(st===""){return[];}\\nreturn st.split(",");})();VideoFetcher.prototype.shareButtonOriginalWidth=80;VideoFetcher.prototype.shareButtonOriginalHeight=60;VideoFetcher.prototype.shareButtonOriginalRatio=80/60;VideoFetcher.prototype.shareButtonOriginalInverseRatio=60/80;VideoFetcher.prototype.shareButtonHeightPct=0.11;VideoFetcher.prototype.aspectRatioGT16=function(){var $tlImg=tljQuery(this.getTlImg());var width=$tlImg.width();var height=$tlImg.height();var ar=width/height;var lowerBound=1.72;var upperBound=1.83;if((lowerBound<=ar)&&(ar<=upperBound)){return true;}\\nreturn false;};VideoFetcher.prototype.playerControlDimensions={width:35,height:27};VideoFetcher.prototype.getAvailablePlayerHeight=function($hook){var config=this.getConfiguration();if(config.playerSettings.showControls){return $hook.height()-this.playerControlDimensions.height;}\\nreturn $hook.height();};VideoFetcher.prototype.checkShareButtonSizeGT=function($hook,canvass){var w,h\\nvar oar=this.shareButtonOriginalWidth/this.shareButtonOriginalHeight;w=this.shareButton.width;h=this.shareButton.height;if(w>this.shareButtonOriginalWidth){w=this.shareButtonOriginalWidth;h=this.shareButtonOriginalHeight;}\\nif(h>Math.round(this.shareButtonHeightPct*this.getAvailablePlayerHeight($hook))){h=Math.round(this.shareButtonHeightPct*this.getAvailablePlayerHeight($hook));w=Math.round(oar*h);}\\nthis.shareButton.width=w;this.shareButton.height=h;};VideoFetcher.prototype.calcShareButtonDimensions=function($hook,canvass){var sbinfo=canvass.shareButtons;var x,y;var w,h;var oar=this.shareButtonOriginalWidth/this.shareButtonOriginalHeight;w=Math.round((this.getAvailablePlayerHeight($hook)*sbinfo.width)/this.shareTypes.length);h=Math.round(w*(1/oar));this.shareButton={height:h,width:w};this.checkShareButtonSizeGT($hook,canvass);};VideoFetcher.prototype.getShareButtonsLayout=function($hook,canvass){var config=this.getConfiguration();var sbinfo=canvass.shareButtons;var that=this;var x,y,w,h;this.calcShareButtonDimensions($hook,canvass);w=this.shareButton.width;h=this.shareButton.height;if(sbinfo.alignment===\\\'bottom right\\\'){y=canvass.available.y2-h-10;if(config.playerSettings.showControls){y-=37;}\\ncanvass.available.y2=y;this.shareTypes.forEach(function(st){var src=that.getAsset(st);x=canvass.available.x2-w;canvass.info.push({src:src,width:w,height:h,x:x,y:y,zIndex:that.ZI_LEVEL_4,type:st});canvass.available.x2-=(w+10);});}\\nelse{throw new Error(\\\'getShareButtonsLayout: no valid alignment found\\\');}};VideoFetcher.prototype.layoutButtons=function(buttons,$hook){var layout=this.getLayout($hook);var that=this;layout.forEach(function(button){var $button=that.positionButton(button,$hook);if($button){that.removeImageStyling($button);buttons.push($button);}});};var buttonToggleEvents={};buttonToggleEvents.MOUSEOVER=1;buttonToggleEvents.MOUSEOUT=2;buttonToggleEvents.PLAY=3;buttonToggleEvents.PAUSE=4;buttonToggleEvents.STOP=5;buttonToggleEvents.TOGGLEOFF=6;buttonToggleEvents.TOGGLEON=7;buttonToggleEvents.SHOWPLAYER=8;VideoFetcher.prototype.buttonToggleEvents=buttonToggleEvents;var basez=VideoFetcher.prototype.BASE_ZINDEX=99999;VideoFetcher.prototype.ZI_LEVEL_0=basez;VideoFetcher.prototype.ZI_LEVEL_1=basez+1;VideoFetcher.prototype.ZI_LEVEL_2=basez+2;VideoFetcher.prototype.ZI_LEVEL_3=basez+3;VideoFetcher.prototype.ZI_LEVEL_4=basez+4;VideoFetcher.prototype.addMouseButtons=function(wrappedPlayer){var config=this.getConfiguration();var $wrappedPlayer=tljQuery(wrappedPlayer);var that=this;var buttons=[];var $hook=tljQuery(this.getPlayerHookData().hook);this.layoutButtons(buttons,$hook);var buttonController=(function(){var controller={};controller.display=function(){buttons.forEach(function($button){$button.style("display","","important");});};controller.hide=function(){buttons.forEach(function($button){if($button.type===\\\'xButton\\\'){return;}\\n$button.style("display","none","important");});};controller.adjustDown=function(){buttons.forEach(function($button){if($button.type===\\\'xButton\\\'){return;}\\n$button.style("top",($button.staticTop+37)+"px","important");});};controller.adjustUp=function(){buttons.forEach(function($button){if($button.type===\\\'xButton\\\'){return;}\\n$button.style("top",($button.staticTop)+"px","important");});};return controller;})();var ButtonStateDispatcher=function(buttonController,video){var OFFSTATE=1,ONSTATE=2,ADJUSTUPSTATE=3,ADJUSTDOWNSTATE=4,FROZENSTATE=5,ERRORSTATE=6;var buttonToggleEvents=video.buttonToggleEvents;var enabled=true;this.enable=function(){enabled=true;};this.disable=function(){enabled=false;};var getPlayerShowingBool=function(){return video.isPlayerShowing();};var getExposeControlsBool=function(){var config=video.getConfiguration();return config.playerSettings.showControls;};var getAlwaysShowButtonsBool=function(){var config=video.getConfiguration();return config.playerSettings.alwaysShowButtons;};var getButtonState=function(event){var playerShowing=getPlayerShowingBool();var alwaysShowButtons=getAlwaysShowButtonsBool();var exposeControls=getExposeControlsBool();var state;if(!enabled){return FROZENSTATE;}\\nif(event===buttonToggleEvents.MOUSEOVER){if(playerShowing&&alwaysShowButtons&&exposeControls){state=ADJUSTUPSTATE;}\\nelse{state=ONSTATE;}}\\nelse if(event===buttonToggleEvents.MOUSEOUT){if(alwaysShowButtons){if(playerShowing&&exposeControls){state=ADJUSTDOWNSTATE;}\\nelse{state=FROZENSTATE;}}\\nelse{state=OFFSTATE;}}\\nelse if(event===buttonToggleEvents.TOGGLEOFF){if(exposeControls){state=ADJUSTDOWNSTATE;}}\\nelse if(event===buttonToggleEvents.TOGGLEON){if(exposeControls){state=ADJUSTUPSTATE;}}\\nelse if(event===buttonToggleEvents.SHOWPLAYER){state=ONSTATE;}\\nelse{state=ERRORSTATE;}\\nreturn state;};this.adjustButtonState=function(event){var state=getButtonState(event);if(state===ADJUSTUPSTATE){buttonController.adjustUp();}\\nelse if(state===ADJUSTDOWNSTATE){buttonController.adjustDown();}\\nelse if(state===ONSTATE){video.mousedOut=false;video.hideRemoveableClasses();buttonController.display();}\\nelse if(state===OFFSTATE){video.mousedOut=true;buttonController.hide();}\\nelse if(state===FROZENSTATE){}\\nelse{throw new Error("ButtonStateDispatcher in ERRORSTATE: "+event);}};};var buttonToggler=new ButtonStateDispatcher(buttonController,this);var dummyOffChecker=function(){};var tlImg=this.getTlImg();var $tlImg=this.fansided_largefeature_check();var playerOffchecker=decorateOffChecker(null,dummyOffChecker,this);var imageOffChecker=decorateOffChecker(null,dummyOffChecker,{getBox:function(){var box={};var pos=$tlImg.offset();box.x1=pos.left;box.x2=pos.left+$tlImg.width();box.y1=pos.top;box.y2=pos.top+$tlImg.height();return box;}});var $transparentClickThroughDiv=config.transparentClickThroughDiv?this.$transparentClickThroughDiv:false;var onMouseOver=function(){buttonToggler.adjustButtonState(that.buttonToggleEvents.MOUSEOVER);var boundEvent=function(e){that.setCursor(e);};tljQuery(document).bind(\\\'mousemove\\\',boundEvent);var recursiveCheck=function(){var cursor=that.cursor;if(!cursor.notSet&&playerOffchecker(cursor)){buttonToggler.adjustButtonState(that.buttonToggleEvents.MOUSEOUT);tljQuery(document).unbind(\\\'mousemove\\\',boundEvent);cursor.notSet=true;}\\nelse{setTimeout(recursiveCheck,100);}};recursiveCheck();};$wrappedPlayer.on(\\\'mouseover\\\',onMouseOver);if($transparentClickThroughDiv){$transparentClickThroughDiv.on(\\\'mouseover\\\',function(e){if(that.isPlayerShowing()){onMouseOver(e)}});}\\n$tlImg.on(\\\'mouseover\\\',function(){buttonToggler.adjustButtonState(that.buttonToggleEvents.MOUSEOVER);var boundEvent=function(e){that.setCursor(e);};tljQuery(document).bind(\\\'mousemove\\\',boundEvent);var recursiveCheck=function(){var cursor=that.cursor;if(!cursor.notSet&&imageOffChecker(cursor)){buttonToggler.adjustButtonState(that.buttonToggleEvents.MOUSEOUT);tljQuery(document).unbind(\\\'mousemove\\\',boundEvent);cursor.notSet=true;}\\nelse{setTimeout(recursiveCheck,100);}};recursiveCheck();});return buttonToggler;};VideoFetcher.prototype.getImageSize=function(){var $hook=tljQuery(this.getTlImg());var w=$hook.width();var h=this.getAvailablePlayerHeight($hook);var wlimit=300;var hlimit=200;var alimit=wlimit*hlimit;var area=w*h;var r;if(area>=alimit){r="large";}\\nelse{r="small";}\\nreturn r;};VideoFetcher.prototype.setPlayerShow=function(bool){this.playerVisible=bool;};VideoFetcher.prototype.isPlayerShowing=function(){return this.playerVisible;};VideoFetcher.prototype.afterShow=function(wrappedPlayer){var config=this.getConfiguration();this.setPlayerShow(true);if(!this.mouseButtonToggler&&!config.playerSettings.buttonBar){this.mouseButtonToggler=this.addMouseButtons(wrappedPlayer);}\\nif(this.mouseButtonToggler){this.mouseButtonToggler.enable();this.mouseButtonToggler.adjustButtonState(this.buttonToggleEvents.SHOWPLAYER);}\\nif(!this.extraTextHidden){this.hideExtraText();}};VideoFetcher.prototype.show=function(playFlag){var type=this.getPlayerType();var config=this.getConfiguration();if(type==\\\'yt\\\'){var wrappedPlayerInfo=this.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer;var playerEl=document.getElementById(wrappedPlayerInfo.playerID);var $tlImg=tljQuery(this.getTlImg());var hookTop=$tlImg.position().top;var that=this;var $wrappedPlayer=tljQuery(wrappedPlayer);if(config.playerSettings.fadeIn){$wrappedPlayer.style("display","none");$wrappedPlayer.style("top",hookTop+"px","important");$wrappedPlayer.fadeIn(1000,function(){that.afterShow(wrappedPlayer);});}\\nelse{$wrappedPlayer.animate({"top":hookTop},800,function(){that.afterShow(wrappedPlayer);});}\\nif(config.playerSettings.autoPlay){this.player.playVideo();}}};VideoFetcher.prototype.supportsHTML5Video=(function(){var videoElement=document.createElement(\\\'video\\\');var videoCompatible=videoElement&&videoElement.canPlayType;return videoCompatible;})();VideoFetcher.prototype.hideExtraText=function(){this.extraTextHidden=true;var $unit=tljQuery(this.getUnit());tljQuery($unit[0].getElementsByClassName(\\\'tl-extra\\\')).style(\\\'display\\\',\\\'none\\\',\\\'important\\\');};VideoFetcher.prototype.hide=function(cb){if(!cb){cb=function(){};}\\nvar type=this.getPlayerType();var config=this.getConfiguration();if(type==\\\'yt\\\'){var $tlImg=tljQuery(this.getTlImg());var wrappedPlayerInfo=this.getWrappedPlayerInfo();var wrappedPlayer=wrappedPlayerInfo.wrappedPlayer\\nvar $wrappedPlayer=tljQuery(wrappedPlayer);this.pauseVideo();var buttonBarExtra=this.buttonBarDimensions?this.buttonBarDimensions.height:0;var hookTop=$tlImg.position().top-($wrappedPlayer.height()+buttonBarExtra);if(config.playerSettings.fadeIn){$wrappedPlayer.fadeOut(1000,cb);}\\nelse{$wrappedPlayer.animate({"top":hookTop},1500,cb);}}};VideoFetcher.prototype.styleAttributes=["float","padding","border","margin"];VideoFetcher.prototype.generateSafeStyle=function(cs){var importantStyleAttributes=this.styleAttributes;var safeStyle=[];importantStyleAttributes.forEach(function(sa){var ss={};ss.name=sa;if(sa==="float"){ss.val=this.getSafeFloat(cs);}\\nelse if(sa==="padding"){ss.val=this.getSafePadding(cs);}\\nelse if(sa==="border"){ss.val=this.getSafeBorder(cs);}\\nelse if(sa==="margin"){ss.val=this.getSafeMargin(cs);}\\nelse{ss.val=cs[sa];}\\nsafeStyle.push(ss);}.bind(this));return safeStyle;};VideoFetcher.prototype.getSafeFloat=function(cs){var test1,test2;test1=cs.float;test2=cs.cssFloat;if(test1&&test1.length){return test1;}\\nreturn test2;};VideoFetcher.prototype.getSafeMargin=function(cs){var test1,test2;test1=cs.margin;test2=cs.marginTop+\\\' \\\'+cs.marginRight+\\\' \\\'+cs.marginBottom+\\\' \\\'+cs.marginLeft;if(test1&&test1.length){return test1;}\\nreturn test2;};VideoFetcher.prototype.getSafePadding=function(cs){var test1,test2;test1=cs.padding;test2=cs.paddingTop+\\\' \\\'+cs.paddingRight+\\\' \\\'+cs.paddingBottom+\\\' \\\'+cs.paddingLeft;if(test1&&test1.length){return test1;}\\nreturn test2;};VideoFetcher.prototype.getSafeBorder=function(cs){var test1,test2;test1=cs.border;test2=cs.borderTop+\\\' \\\'+cs.borderRight+\\\' \\\'+cs.borderBottom+\\\' \\\'+cs.borderLeft;if(test1&&test1.length){return test1;}\\nreturn test2;};VideoFetcher.prototype.setStyleAttributes=function($wppp){var $tlImg=tljQuery(this.getTlImg());var cs=window.getComputedStyle($tlImg[0]);var safeStyle=this.generateSafeStyle(cs);safeStyle.forEach(function(s){$wppp.style(s.name,s.val);});};VideoFetcher.prototype.removeImageStyling=function($img){$img.style("float","none");$img.style("padding","0px 0px 0px 0px");$img.style("border","0px");$img.style("margin","0px");if(!inv_code.match("fansided_main_largefeature")){$img.style("background","none");}};VideoFetcher.prototype.findPlayerHook=function(){var $tlImg=tljQuery(this.getTlImg());var $unit=this.getUnit();var $tlImg=tljQuery(this.getTlImg());var tlImg=$tlImg[0];var w=$tlImg.width();var h=$tlImg.height();var d=document.createElement(\\\'div\\\');var $wppp=tljQuery(d);this.setStyleAttributes($wppp);this.removeImageStyling($tlImg);var cs=window.getComputedStyle(this.getTlImg());var absoluteFlag=false;if(cs.position===\\\'absolute\\\'){absoluteFlag=true;d.style.position="absolute";}\\nelse{d.style.position="relative";}\\nd.style.overflow="hidden";var imageParent=$tlImg[0].parentNode;var $outterParent=tljQuery(imageParent);while(($outterParent.width()<(w-10))||($outterParent.height()<(h-10))){$outterParent=tljQuery($outterParent[0].parentNode);if(!$outterParent[0]){throw new Error(\\\'could not find player hook\\\');}}\\nvar opw=$outterParent.width();var oph=$outterParent.height();if(opw<w){w=opw;}\\nif(oph<h){h=oph;}\\nd.style.width=w+"px"\\nd.style.height=h+"px";imageParent.insertBefore(d,tlImg);if(absoluteFlag){d.style.top=cs[\\\'top\\\'];d.style.left=cs[\\\'left\\\'];}\\nd.appendChild(tlImg);var adjustedDimensions=ad=this.adjustDimensions(w,h);return{width:ad.w,height:ad.h,hook:d,outterParent:$outterParent[0]};};VideoFetcher.prototype.xButtonHeight=36;VideoFetcher.prototype.xButtonWidth=36;VideoFetcher.prototype.playerControlHeight=36;VideoFetcher.prototype.xButtonGap=20;VideoFetcher.prototype.initAPI=function(){var tag=document.createElement(\\\'script\\\');tag.src="https://www.youtube.com/player_api";var firstScriptTag=document.getElementsByTagName(\\\'script\\\')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);};VideoFetcher.prototype.determineButtonBarDimensions=function(){var configuration=this.getConfiguration();var size=this.getImageSize();var width=tljQuery(this.getTlImg()).width();var height=this.xButtonHeight;var ar=width/height;var inverse_ar=height/ar;if(size==="small"){height=Math.round(height/2);this.xButtonWidth=Math.round(this.xButtonWidth/2);this.xButtonHeight=Math.round(this.xButtonHeight/2);this.xButtonGap=10;}\\nelse if(configuration.showControls){height=27;}\\nthis.buttonBarDimensions={width:width,height:height};};VideoFetcher.prototype.appendButtonBar=function(wrappedPlayer,playerEl){var iwidth=this.buttonBarDimensions.width;var iheight=this.buttonBarDimensions.height;var d=document.createElement(\\\'DIV\\\');var $d=tljQuery(d);var i=document.createElement(\\\'IMG\\\');i.src=this.getAsset(\\\'xbutton\\\');$i=tljQuery(i);this.removeImageStyling($i);$i.style("min-width","0","important");$i.style("min-height","0","important");$i.style("position","absolute","important");$i.style("width",this.xButtonWidth+"px","important");$i.style("height",this.xButtonHeight+"px","important");$i.style("top","0px","important");$i.style("left","0px","important");d.style[\\\'background-color\\\']=\\\'black\\\';$d.style("position","absolute","important");$d.style("width",tljQuery(wrappedPlayer).width()+"px","important");$d.style("height",this.buttonBarDimensions.height+"px","important");$d.style("top",tljQuery(playerEl).height()+"px");var xoff=this.addSeeMore(d,$d);this.addShareTypes(d,$d,xoff);this.videoToggler=new VideoToggler(i,this);this.addPlayButtonClick();d.appendChild(i);wrappedPlayer.appendChild(d);};VideoFetcher.prototype.appendButtonBarMobile=function(wrappedPlayer,playerEl){var iwidth=this.buttonBarDimensions.width;var iheight=this.buttonBarDimensions.height;var d=document.createElement(\\\'DIV\\\');var $d=tljQuery(d);d.style[\\\'background-color\\\']=\\\'black\\\';$d.style("position","absolute","important");$d.style("width",tljQuery(wrappedPlayer).width()+"px","important");$d.style("height",this.buttonBarDimensions.height+"px","important");$d.style("top",tljQuery(playerEl).height()+"px");var xoff=this.addSeeMore(d,$d,10);this.addShareTypes(d,$d,xoff);this.addPlayButtonClick();wrappedPlayer.appendChild(d);};VideoFetcher.prototype.addPlayButtonClick=function(){var that=this;this.pb.click(function(){that.videoToggler.toggle()});};VideoFetcher.prototype.styleBarShareButton=function($i,w,h,x,y){$i.style("min-width","0","important");$i.style("min-height","0","important");$i.style("width",w+"px","important");$i.style("height",h+"px","important");$i.style("position","absolute","important");$i.style("top",y+"px","important");$i.style("left",x+"px","important");};VideoFetcher.prototype.determineBarShareButtonXoff=function(xoff,pos){var x;if(xoff){x=xoff;}\\nelse{x=pos.left+(this.xButtonWidth+this.xButtonGap);}\\nreturn x;};VideoFetcher.prototype.addBarHorizontalShareButtons=function(div,$div,xoff){var w=$div.width();var h=34;var pos=$div.position();var x=this.determineBarShareButtonXoff(xoff,pos);var y=pos.top;var that=this;var sbw=45;var sbh=h;var size=this.getImageSize();if(size==="small"){sbw=Math.round(sbw/2);sbh=Math.round(sbh/2);y=(pos.top+$div.height())-sbh;}\\nthis.shareTypes.forEach(function(st){if((x+sbw)>w){return;}\\nvar i=document.createElement(\\\'IMG\\\');var $i=tljQuery(i);that.removeImageStyling($i);i.src=that.getAsset(st);that.styleBarShareButton($i,sbw,sbh,x,y);that.addClick({type:st},$i);div.appendChild(i);x+=(sbw+10);});return x;};VideoFetcher.prototype.determineBarButtonSquare=function(x,y,w,h){var square={};square.x1=x;square.y1=y;square.x2=w;square.y2=h;square.midX=Math.round((square.x2-square.x1)/2)+square.x1;square.midY=Math.round((square.y2-square.y1)/2)+square.y1;return square;};VideoFetcher.prototype.findQuadrantsInSquare=function(square){var quadrants=[];quadrants.push({x1:square.x1,y1:square.y1});quadrants.push({x1:square.midX,y1:square.y1});quadrants.push({x1:square.x1,y1:square.midY});quadrants.push({x1:square.midX,y1:square.midY});return quadrants;};VideoFetcher.prototype.addBarSquareShareButtons=function(div,$div,xoff){var w=this.buttonBarDimensions.width;var h=this.buttonBarDimensions.height;var pos=$div.position();var x=this.determineBarShareButtonXoff(xoff,pos);var y=pos.top;var that=this;var square=this.determineBarButtonSquare(x,y,w,h);var quadrants=this.findQuadrantsInSquare(square);var sbh=Math.round((((square.y2-square.y1)/2)/4)*3);var sbw=Math.round(this.shareButtonOriginalRatio*sbh);this.shareTypes.forEach(function(st,index){var i=document.createElement(\\\'IMG\\\');var $i=tljQuery(i);that.removeImageStyling($i);i.src=that.getAsset(st);var quadrant=quadrants[index];that.styleBarShareButton($i,sbw,sbh,quadrant.x1,quadrant.y1);that.addClick({type:st},$i);div.appendChild(i);});return true;};VideoFetcher.prototype.addShareTypes=function(div,$div,xoff){if(true||(this.shareTypes.length<=2)||this.getImageSize()==="small"){return this.addBarHorizontalShareButtons(div,$div,xoff);}\\nelse{this.addBarSquareShareButtons(div,$div,xoff);}};VideoFetcher.prototype.addSeeMore=function(div,$div,xoff){var pos=$div.position();var y=pos.top;var x;if(!isNaN(xoff)){x=xoff;}\\nelse{x=pos.left+(this.xButtonWidth+20);}\\nvar h=23;var ar=183/23;var w=Math.round(h*ar);var size=this.getImageSize();if(size==="small"){w=Math.round(w/2);h=Math.round(h/2);}\\ny=(pos.top+$div.height())-(h+Math.round(h/3));var i=document.createElement(\\\'IMG\\\');var $i=tljQuery(i);this.removeImageStyling($i);i.src=this.getAsset("seemore");$i.style("min-width","0","important");$i.style("min-height","0","important");$i.style("width",w+"px","important");$i.style("height",h+"px","important");$i.style("position","absolute","important");$i.style("top",y+"px","important");$i.style("left",x+"px","important");this.addClick({type:"seemore"},$i);div.appendChild(i);return x+w+10;};VideoFetcher.prototype.getAsset=function(st){return this.assets[st];};VideoFetcher.prototype.beginWait=function(action){if(glYTAPI){action.call(this);}\\nelse{var that=this;setTimeout(function(){that.beginWait(action);},500);}};var VideoToggler=function(button,video){var toggleState=0;var $button=tljQuery(button);var toggle=function(){if(toggleState===0){video.setPlayerShow(false);toggleState=1;button.src=video.getAsset("whiteplaybutton");video.mouseButtonToggler&&video.mouseButtonToggler.adjustButtonState(video.buttonToggleEvents.TOGGLEOFF);video.hide(function(){video.hideRemoveableClasses();video.resetPlayButton();});}\\nelse{video.setPlayerShow(true);video.mouseButtonToggler&&video.mouseButtonToggler.adjustButtonState(video.buttonToggleEvents.TOGGLEON);toggleState=0;button.src=video.getAsset(\\\'xbutton\\\');video.preHoverOff();video.show();}};tljQuery(button).click(toggle);var $tlImg=video.fansided_largefeature_check();$tlImg.click(function(e){toggle();});this.toggle=toggle;this.getToggleState=function(){return toggleState;};this.PLAYING=0;this.NOT_PLAYING=1;};VideoFetcher.prototype.fansided_largefeature_check=function(){if(inv_code.match("fansided_main_largefeature")){var $a=tljQuery(this.getUnit()[0].getElementsByTagName(\\\'A\\\')[0]);var aheight=$a.height;$a.height=function(){var cs=window.getComputedStyle($a[0]);return aheight.call($a)+parseInt(cs.paddingBottom);};return $a;}\\nreturn tljQuery(this.getTlImg());};VideoFetcher.prototype.init=function(){this.isInit=true;this.lazyLoadVideoInfo();this.initAPI();this.lazyLoadPlayerHookData();this.lazyLoadWrappedPlayer();this.beginWait(function(){this.setPrePlay();this.registerVideoAd();});};optionalStartVideo=function(){var videoConfig={};videoConfig.render_strategy=\\\'%%%HOVER_ACTION%%%\\\';if(videoConfig.render_strategy===\\\'0\\\'){videoConfig.render_strategy=\\\'none\\\';}\\nvideoConfig.transparentClickThroughDiv=true;videoConfig.playButtonSettings={};videoConfig.playButtonSettings.width=0.3;videoConfig.playButtonSettings.alignment=\\\'center\\\';videoConfig.playButtonSettings.showOnHover=false;videoConfig.playerSettings={};videoConfig.playerSettings.showControls=\\\'%%%EXPOSE_CONTROLS%%%\\\';if(videoConfig.playerSettings.showControls===\\\'0\\\'){videoConfig.playerSettings.showControls=false;}\\nelse{videoConfig.playerSettings.showControls=true;}\\nvideoConfig.playerSettings.resetVideo=\\\'%%%RESET_VIDEO%%%\\\';if(videoConfig.playerSettings.resetVideo===\\\'0\\\'){videoConfig.playerSettings.resetVideo=false;}\\nelse{videoConfig.playerSettings.resetVideo=true;}\\nvideoConfig.playerSettings.alwaysShowButtons=\\\'%%%ALWAYS_SHOW_BUTTONS%%%\\\';if(videoConfig.playerSettings.alwaysShowButtons===\\\'0\\\'){videoConfig.playerSettings.alwaysShowButtons=false;}\\nelse{videoConfig.playerSettings.alwaysShowButtons=true;}\\nvideoConfig.playerSettings.showOnHover=true;videoConfig.playerSettings.fadeIn=true;if(navigator&&navigator.userAgent&&(navigator.userAgent.match("MSIE")||navigator.userAgent.match(/trident/i))){if(VideoFetcher.prototype.supportsHTML5Video){VideoFetcher.prototype.IEHTML5=true;videoConfig.playerSettings.buttonBar=false;}\\nelse{videoConfig.playerSettings.buttonBar=true;videoConfig.playerSettings.fadeIn=false;}\\nVideoFetcher.prototype.IE11=navigator.userAgent.match(/trident\\\\/7/i)?true:false;}\\nelse if(isMobile()){videoConfig.playerSettings.buttonBarMobile=true;videoConfig.isMobile=true;}\\nelse{videoConfig.playerSettings.buttonBar=false;}\\nvideoConfig.$referenceImage=shareButtons.$referenceImage;if(unit.getElementsByClassName){if(unit.getElementsByClassName(\\\'tl-vid\\\').length){var vf=new VideoFetcher(tljQuery(unit),analyticsController,toggleShareButton,videoConfig);vf.init();}}\\nelse{if(unit.querySelectorAll&&unit.querySelectorAll(\\\'.tl-vid\\\').length){var vf=new VideoFetcher(tljQuery(unit),analyticsController,toggleShareButton,videoConfig);vf.init();}}};var ProgressBar=function(videoFetcher,pb,cb){var config=videoFetcher.getConfiguration();var maxVal=pb.max=config.progressLimit;var currentVal=pb.value=0;var IESpan=pb.getElementsByTagName(\\\'SPAN\\\')[0];var setIESpanWidth=function(val,max){IESpan.style.width=Math.round(100*(val/max))+"%";};var removed=false;var removeProgressBar=this.removeProgressBar=function(){if(!removed){removed=true;pb.parentNode.removeChild(pb);}};var interval=50;var hovered=true;var toggler=function(msg){if(msg===\\\'off\\\'){hovered=false;}};this.getBox=function(){var $unit=videoFetcher.getUnit();$unit=this.checkUnit($unit);var offset=$unit.offset();var box={};box.x1=offset.left;box.x2=offset.left+$unit.width();box.y1=offset.top;box.y2=offset.top+$unit.height();return box;};this.checkUnit=function($unit){var check=function($unit){var w=$unit.width();var h=$unit.height();var $tlImg=tljQuery(videoFetcher.getTlImg());var tlw=$tlImg.width();var tlh=$tlImg.height();var buffer=10;if((w<(tlw-buffer))||(h<(tlh-buffer))){return false;}\\nreturn true;};var $base=$unit;var $children=$unit.children();var i=0;var ii=$children.length\\nwhile((!check($unit))&&(i<ii)){$unit=tljQuery($children[i]);i++;}\\nreturn $unit;};var offchecker=decorateOffChecker(null,toggler,this);var recursiveMonitor=function(){if(!hovered){stopMonitor();removeProgressBar();}\\nelse{currentVal+=interval;pb.value=currentVal;setIESpanWidth(currentVal,maxVal);if(currentVal>=maxVal){stopMonitor();removeProgressBar();videoFetcher.progressSet=true;cb();}\\nelse{setTimeout(recursiveMonitor,interval);}}};var monitor=function(e){offchecker(e);};this.startMonitor=function(){tljQuery(document).bind(\\\'mousemove\\\',monitor);recursiveMonitor();};var stopMonitor=function(){tljQuery(document).unbind(\\\'mousemove\\\',monitor);};};var Positioner=function(area){};var tlImg=shareButtons.$referenceImage[0];var $tlImg=shareButtons.$referenceImage;if(tlImg.complete){optionalStartVideo();}\\nelse if($tlImg.isDiv){shareButtons.listenForLoad(optionalStartVideo);}\\nelse{tljQuery(tlImg).on(\\\'load\\\',optionalStartVideo);}\\nvar hoverConfig={over:function(){analyticsController.hover()},sensitivity:5,out:offChecker};tljQuery(unit).hoverIntent(hoverConfig);tljQuery(unit).mouseleave(offChecker);(function imptrial(){var tlExplicitSampleRate=parseInt(\\\'```TL_EXPLICIT_SR```\\\',10);var sr;if(!isNaN(tlExplicitSampleRate)){sr=tlExplicitSampleRate;}\\nelse{sr=100;}\\nvar t=Math.ceil(Math.random()*sr);if(t===1){analyticsController.fireImp(sr);}})();};check_jq();return function(st){ts(st);};})();var updateLogoZones=function(json){var qs=json.qs;var lp=json.lp;var images=document.getElementsByTagName(\\\'IMG\\\');var image,$image;var i=0;var ii=images.length;for(;i<ii;i++){image=images[i];if(image.src&&image.src.match(qs)){$image=jQuery(image);break;}}\\n$image.attr("lp",lp);};}catch(e){var p=document.createElement(\\\'IMG\\\');p.src="//eb2.3lift.com/sce?block=analytics&inv_code=digg_main_feed&e="+encodeURIComponent(e);p.width=0;p.height=0;document.body.appendChild(p);}\')).replace(\'@@@PLACEMENT_HTML@@@\',createTemplate(\'<!--digg_main_feed--><div class=\"story-image story-image-thumb\">    <a class=\"story-link\" href=\"%%%CLICKTHROUGH_URL%%%\" target=\"_blank\">        <img class=\"story-image-img\" src=\"%%%IMAGE_URL%%%\" width=\"312\" height=\"170\" alt=\"\">    </a></div><div class=\"story-content\">    <header class=\"story-header\">        <div itemprop=\"alternativeHeadline\" class=\"story-kicker\" style=\"color: #fd9127;\">            SPONSORED        </div>        <h2 itemprop=\"headline\" class=\"story-title entry-title\">            <a class=\"story-title-link story-link\" rel=\"bookmark\" itemprop=\"url\" href=\"%%%CLICKTHROUGH_URL%%%\" target=\"_blank\" style=\"text-transform: capitalize;\">                %%%HEADING%%%            </a>        </h2>        <div class=\"story-meta\">            <span class=\"story-meta-item story-source\" style=\"color:#606060;\">                Sponsored by                 <a itemprop=\"publisher copyrightHolder sourceOrganization provider\" class=\"story-meta-item-link story-source-link\" href=\"%%%CLICKTHROUGH_URL%%%\" target=\"_blank\" style=\"color:#606060;\">                    %%%ADVERTISER_NAME%%%                </a>            </span>        </div>    </header>    <p itemprop=\"description\" class=\"story-description entry-content\">        %%%CAPTION%%%    </p></div><ul class=\"story-actions\">    <li class=\"story-action story-action-share\"><a class=\"target share-facebook\" href=\"\">Facebook</a></li>    <li class=\"story-action story-action-share\"><a class=\"target share-twitter\" href=\"\">Twitter</a></li></ul>\\x3Cscript>    function showTripleLift() {        shareLink = encodeURIComponent(\\\'%%%CLICKTHROUGH_URL%%%\\\');        shareTitle = encodeURIComponent($(\\\'#triple-lift .story-title-link\\\').html().trim()); /* don\\\'t use %HEADING% insertion cause it might have \\\'s */        $(\\\'#triple-lift .share-facebook\\\').attr(\\\'href\\\', \\\'https://www.facebook.com/dialog/feed?redirect_uri=http%3A%2F%2Fdigg.com%2Ffbshare&link=\\\' + shareLink + \\\'&display=popup&app_id=123277257693179\\\');        $(\\\'#triple-lift .share-twitter\\\').attr(\\\'href\\\', \\\'https://twitter.com/intent/tweet?url=\\\' + shareLink + \\\'&text=\\\' + shareTitle + \\\'&via=Digg\\\');        /* remove src to prevent moving ourselves from running the script again, but don\\\'t delete element cause Triple Lift script uses it to locate us */        $(\\\'#triple-lift\\\').find(\\\'script[src*=\"3lift.com/ttj\"]\\\').removeAttr(\\\'src\\\');                /* move ourselves */        $(\\\'#triple-lift\\\').insertBefore($(\\\'#triple-lift-container\\\')).show();        $(\\\'#triple-lift-container\\\').remove();        var advertiserName = $(\\\'#triple-lift .story-meta-item-link\\\').html().trim();        window.ga(\\\'send\\\', \\\'event\\\', \\\'Triple Lift\\\', \\\'Shown\\\', advertiserName);        $(\"#triple-lift .story-link, #triple-lift .story-tag-link\").on(\\\'click\\\', function() {            window.ga(\\\'send\\\', \\\'event\\\', \\\'Triple Lift\\\', \\\'Click\\\', advertiserName);        });        $(\"#triple-lift .share-facebook\").on(\\\'click\\\', function() {            window.ga(\\\'send\\\', \\\'event\\\', \\\'Triple Lift\\\', \\\'Share (Facebook)\\\', advertiserName);        });        $(\"#triple-lift .share-twitter\").on(\\\'click\\\', function() {            window.ga(\\\'send\\\', \\\'event\\\', \\\'Triple Lift\\\', \\\'Share (Twitter)\\\', advertiserName);        });    }    if (window.$) showTripleLift();    else window.addEventListener(\\\'load\\\', showTripleLift);\\x3C/script>\')).replace(\'@@@TL_RD_ID@@@\',tl_rd);scriptBody=scriptBody.replace(/@@@CAPTION@@@/g,trending_item.caption);scriptBody=scriptBody.replace(/@@@UNIT_ID@@@/g,unitData);scriptBody=scriptBody.replace(/@@@IMAGEID@@@/g,trending_item.image_id);scriptBody=scriptBody.replace(/@@@ASSET_ID@@@/g,trending_item.asset_id);scriptBody=scriptBody.replace(/@@@THIRD_PARTY_SAMPLING_RATE@@@/g,settings.impression_sampling_rate);scriptBody=scriptBody.replace(/@@@THIRD_PARTY_DISCREPANCY_RATE@@@/g,settings.impression_discrepancy_rate);scriptBody=scriptBody.replace(/@@@COMSCORESRC@@@/g,JSON.stringify(trending_item.comScoreArr));if(trending_item.share_types){scriptBody=scriptBody.replace(/@@@UNIT_SHARE_ENABLED@@@/g,\'true\');}\nelse{scriptBody=scriptBody.replace(/@@@UNIT_SHARE_ENABLED@@@/g,\'false\');}\nif(settings.tactic_id){settings.pipelineVersion=2;}\nelse{settings.pipelineVersion=1;}\nscriptBody=scriptBody.replace(/@@@PIPE_LINE_VERSION@@@/g,settings.pipelineVersion);scriptBody=scriptBody.replace(/@@@TACTIC_ID@@@/g,settings.tactic_id);scriptBody=scriptBody.replace(/@@@LINE_ITEM_ID@@@/g,settings.line_item_id);scriptBody=scriptBody.replace(/@@@IO_ID@@@/g,settings.insertion_order_id);scriptBody=scriptBody.replace(/@@@CREATIVE_LIBRARY_ID@@@/g,settings.creative_library_id);if(settings.additional_data){try{scriptBody=scriptBody.replace(/@@@ADDITIONAL_DATA@@@/g,JSON.stringify(settings.additional_data));}catch(e){scriptBody=scriptBody.replace(/@@@ADDITIONAL_DATA@@@/g,\'{}\');}}else{scriptBody=scriptBody.replace(/@@@ADDITIONAL_DATA@@@/g,\'{}\');}\nreturn scriptBody;};var captionLimit=parseInt(0);if((trending_item.caption.length>captionLimit)&&(captionLimit>0)){trending_item.caption=trending_item.caption.substr(0,captionLimit-3)+"...";}\nscriptText=writeScriptText();appendScript();};###TL_IFRAME_FOOTER###}catch(e){var p=document.createElement(\'IMG\');p.src="//eb2.3lift.com/sce?block=tl_iframe&inv_code=digg_main_feed&e="+encodeURIComponent(e);p.width=0;p.height=0;document.body.appendChild(p);}'.replace(/###TL_SD_ID###/g, 'tl_sd' + _tl.cc);
            tl_if_body = tl_if_body.replace('###TL_IF_ID###', tl_if_id);
            tl_if_body = tl_if_body.replace(/###TTJ_CT_URL###/g, ttj_ct);
            var call_adnxs = 'var tlt=###TRIPLELIFT_TEST###;var explicitBidParams="###TRIPLELIFT_BID_PARAMS###";var isMobile=function(){return(navigator&&navigator.userAgent&&navigator.userAgent.match(/iphone|android/i));};if(Math.ceil(Math.random()*1)===1){var oldWriter=document.write;document.write=function(str){var d=document.createElement("div");d.style.display="none";document.body.appendChild(d);d.innerHTML=str;var arr=d.getElementsByTagName(\'script\');for(var n=0;n<arr.length;n++){var ext_creative_qs=parseUri(arr[n].src).queryKey;if(ext_creative_qs.aid&&ext_creative_qs.cch&&ext_creative_qs.code&&ext_creative_qs.pub){var ext_creative_id=ext_creative_qs.aid+ext_creative_qs.cch+ext_creative_qs.code+ext_creative_qs.pub;}\nif(ext_creative_id==undefined){continue;}\nvar iframe=document.createElement(\'iframe\');iframe.src="about:blank";iframe.className="tl_ext_iframe";iframe.setAttribute(\'data-ext-creative-id\',ext_creative_id);document.body.appendChild(iframe);iframe.contentWindow.document.write(\'<scr\'+\'ipt type="text/javascript" src="\'+arr[n].src+\'"></sc\'+\'ript>\');}};var onmessage=function(event){if(event.data.match("get_3p")||event.data.match("get_ext")){var scriptBody=event.data;var s=document.createElement(\'SCRIPT\');s.textContent=scriptBody;document.body.appendChild(s);document.write=oldWriter;}};if(window.addEventListener){window.addEventListener("message",onmessage);}\nelse{window.attachEvent(\'onmessage\',onmessage);}\nvar a=document.createElement(\'script\');var adnxsURI;if(tlt&&explicitBidParams!=="undefined"){adnxsURI=\'//mob.adnxs.com/mob\'+explicitBidParams;}\nelse{adnxsURI=\'//mob.adnxs.com/mob?inv_code=digg_main_feed&member=1314&st=\'+(isMobile()?\'mobile_web\':\'web\')+\'&cb=\'+Math.floor(89999999*Math.random()+10000000);}\nif(tlt||false){adnxsURI+="&test=true";}\na.setAttribute(\'src\',adnxsURI);ADNXSstart=new Date().getTime();document.body.appendChild(a);setTimeout(function(){if(ADNXSTimeout){has_been_timed_out=true;serveDefault("adnxs timeout");}},10000);}\nelse{serveDefault("an_sample");}';
            var tlt = _tl.tlTest;
            if (tlt) {
                call_adnxs = call_adnxs.replace('###TRIPLELIFT_TEST###', 'true');
            } else {
                call_adnxs = call_adnxs.replace('###TRIPLELIFT_TEST###', 'false');
            }
            call_adnxs = call_adnxs.replace("###TRIPLELIFT_BID_PARAMS###", _tl.tlBidParams);
            tl_if_body = tl_if_body.replace('```SCRIPT_NUMBER```', scriptNumber);
            tl_if_body = tl_if_body.replace('```TL_EXPLICIT_SR```', _tl.tlsr);
            var get_unit = '(function(){if("###SCU_UNIT_TYPE###"==="tl"){get_unit(###SCU_ID###);}\nelse{get_3p_unit(###SCU_ID###);}})();';
            var tl_iframe_header = '<html><head></head><body>';
            tl_if.setAttribute('src', 'about:blank');
            tl_if.setAttribute('id', tl_if_id);
            tl_if.style.display = "none";
            tl_if.width = 0;
            tl_if.height = 0;
            tl_script.parentNode.insertBefore(tl_if, tl_script);
            tl_if.contentWindow.document.open();
            if (!scu_id) {
                var sc = tl_iframe_header + '<scr' + 'ipt>' + tl_if_body.replace('###TL_IFRAME_FOOTER###', call_adnxs) + ' </scr' + 'ipt></body></html>';
                tl_if.contentWindow.document.write(sc);
            } else {
                tl_if_body = tl_if_body.replace('###TL_IFRAME_FOOTER###', get_unit);
                tl_if.contentWindow.document.write((tl_iframe_header + '<scr' + 'ipt>' + tl_if_body + '</scr' + 'ipt></body></html>').replace(/###SCU_ID###/g, scu_id).replace(/###SCU_UNIT_TYPE###/g, type));
            }
            tl_if.contentWindow.document.close();
            setTimeout(function() {
                serveDefaultController.sd('global timeout');
            }, 10000 + Math.round(10000 / 3));
        };
        var checkForMetaTag = function() {
            var metaTags = document.getElementsByTagName('META');
            var i = 0, ii = metaTags.length;
            var mt;
            for (; i < ii; i++) {
                mt = metaTags[i];
                if (mt.hasAttribute && mt.getAttribute) {
                    if (mt.hasAttribute('name') && (mt.getAttribute('name') === 'triplelift-brand-safe')) {
                        if (mt.hasAttribute('content') && (mt.getAttribute('content') === 'no')) {
                            return true;
                        }
                    }
                } else {
                    if (mt['name'] && (mt['name'] === 'triplelift-brand-safe')) {
                        if (mt['content'] && (mt['content'] === 'no')) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        _tl['tl_sd' + _tl.count()] = serveDefaultController;
        if (checkForMetaTag()) {
            return serveDefaultController.sd('publisher default');
        }
        var AdLoader = function() {
            var loadAd = function() {
                serveSponsoredAd();
            };
            var loaded = false;
            this.load = function() {
                if (!loaded) {
                    loadAd();
                    loaded = true;
                }
            }
        };
        var adLoader = new AdLoader();
        var findClosestPositionedElement = function(el) {
            if (!el) {
                return false;
            }
            var baseEl = el;
            var horizontalLeftCheck = function(el) {
                var o;
                if (!el) {
                    return false;
                }
                o = _tl.offset(el);
                if ((o.top > 0)) {
                    return el;
                }
                return horizontalLeftCheck(el.previousSibling);
            };
            var horizontalRightCheck = function(el) {
                var o;
                if (!el) {
                    return false;
                }
                o = _tl.offset(el);
                if ((o.top > 0)) {
                    return el;
                }
                return horizontalLeftCheck(el.nextSibling);
            };
            if (el = horizontalLeftCheck(el)) {
                return el;
            }
            if (el = horizontalRightCheck(el)) {
                return el;
            }
            return findClosestPositionedElement(baseEl.parentNode);
        };
        var parsePlacementOptionsJSON = function() {
            var options = '';
            var parsedOptions;
            try {
                parsedOptions = JSON.parse(options);
            } catch (e) {
                parsedOptions = {};
            }
            return parsedOptions;
        };
        var getTLStartElement = function() {
            if (_tl.isTopLevel(window)) {
                return tl_script;
            }
            try {
                var p, fe;
                p = parent;
                if (parent !== top) {
                    while (p && (p !== top)) {
                        p && (fe = p.frameElement);
                        p = p.parent;
                    }
                    if (!p) {
                        throw new Error("could not find top level window");
                    }
                    if (!fe) {
                        throw new Error("could not find top level frame");
                    }
                    return fe;
                } else {
                    return window.frameElement;
                }
            } catch (e) {
                return false;
            }
        };
        var tlStartElement = getTLStartElement();
        var viewabilityElement = findClosestPositionedElement(tlStartElement);
        var placementOptions = parsePlacementOptionsJSON();
        var recursiveViewabilityCheck = function() {
            var viewabilityElement = findClosestPositionedElement(tlStartElement);
            var interval = 300;
            var viewData = _tl.couldBeViewed(viewabilityElement, null, true);
            if (viewData.closeToView&&!viewabilityController.viewabilityLoadFired) {
                viewabilityController.viewabilityLoadFired = true;
                viewabilityController.fireViewabilityPix("vbr");
                _tl.debugMessage("viewability view load: only if viewability based adserving is enabled");
                adLoader.load();
            } else if (viewData.inView&&!viewabilityController.viewabilityViewFired) {
                viewabilityController.viewabilityViewFired = true;
                viewabilityController.fireViewabilityPix("vbv");
                _tl.debugMessage("viewability view view");
                return;
            }
            setTimeout(function() {
                recursiveViewabilityCheck(viewabilityElement);
            }, interval);
        };
        var ViewabilityController = function() {
            var sr = _tl.tlsr ? _tl.tlsr: 100;
            if (Math.ceil(Math.random() * sr) === 1) {
                this.enabled = true;
            }
        };
        ViewabilityController.prototype.fireViewabilityPix = function(endpoint) {
            if (this.enabled) {
                var sampleRate = 1;
                var base = "//eb2.3lift.com/" + endpoint + "?inv_code=digg_main_feed&ref=" + encodeURIComponent(document.URL);
                var pix = document.createElement('IMG');
                pix.style.display = 'none';
                pix.width = 0;
                pix.height = 0;
                pix.src = base;
                document.body.appendChild(pix);
            }
        };
        var viewabilityController = new ViewabilityController();
        if (!placementOptions.viewabilityEnabled) {
            adLoader.load();
            _tl.debugMessage("viewability adloading disabled");
        } else {
            _tl.debugMessage("viewability adloading enabled");
        }
        if (!viewabilityElement) {
            _tl.fe('could not find positioned element near tl_script');
            _tl.debugMessage('could not find positioned element near tl_script');
            adLoader.load();
        } else {
            viewabilityController.fireViewabilityPix("vbs");
            _tl.debugMessage("viewability view init");
            recursiveViewabilityCheck();
        }
        var UserSync = function() {
            var nusp = parseInt('0', 10) || 0;
            var start_sync = this.start_sync = function() {
                _tl.fireEB2Pix('cset', 'key=tlcookieable&value=true', function() {
                    var iframe = document.createElement('iframe');
                    iframe.src = '//ib.3lift.com/user_sync?nusp=' + nusp + '&debug=' + _tl.debug;
                    iframe.width = 0;
                    iframe.height = 0;
                    iframe.frameborder = 0;
                    iframe.style.display = "none";
                    document.body.appendChild(iframe);
                });
            }
        };
        var userSync = new UserSync();
        userSync.start_sync();
    })();
} catch (e) {
    if (_tl.debug) {
        console.log('*** TL MESSAGE ***');
        console.log('CAUGHT ERROR');
        if (e.stack) {
            console.log(e.stack);
        } else {
            console.log(e);
        }
    }
    var p = document.createElement('IMG');
    p.src = "//eb2.3lift.com/sce?block=master&inv_code=digg_main_feed&e=" + encodeURIComponent(e);
    p.width = 0;
    p.height = 0;
    document.body.appendChild(p);
}
