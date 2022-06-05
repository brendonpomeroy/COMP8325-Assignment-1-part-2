/*!CK:4046094487!*/
/*1415870566,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Mx6XH"]);
}

__d("LitestandStream", ["Arbiter", "DOM", "LitestandMessages", "LitestandStoryInsertionStatus", "LitestandStreamConfig", "ViewportBounds", "copyProperties", "csx", "ge", "getElementPosition"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q, r, s, t, u, v = {
        init: function(w, x, y) {
            q = x;
            s = y;
            t = w;
            r = u = 0;
            g.subscribe(i.STORIES_INSERTED, function(z, aa) {
                if (!aa ||!aa.substream_id ||!q)
                    return;
                var ba = h.scry(o(aa.substream_id), v.getStoriesSelector());
                ba.forEach(function(ca) {
                    var da = h.scry(ca, "._5pbw"), ea = h.scry(ca, "._5pcp")[0], fa = h.scry(ca, "._5pbx")[0];
                    if (da[0] && ea && fa) {
                        var ga = '';
                        for (var ha = 0; ha < da.length; ha++)
                            ga += h.getID(da[ha]) + ' ';
                        ga.trim();
                        ca.setAttribute('aria-labelledby', ga + ' ' + h.getID(ea) + ' ' + h.getID(fa));
                    }
                    var ia = ca.getAttribute('data-timestamp'), ja = ca.getAttribute('data-ft') && JSON.parse(ca.getAttribute('data-ft')).ei;
                    if (!ja && ia && ia < q)
                        r++;
                    u++;
                });
            });
        },
        getEmptySubstreamsSelector: function() {
            return "._4ikz:empty";
        },
        getStoriesSelector: function() {
            return "._5jmm";
        },
        getStreamConfig: function(w) {
            return m({
                bufferPixels: 1000,
                firstPagerScrollBuffer: 100,
                maxStories: null,
                pagerController: 'LitestandMoreStoriesPagelet',
                pagerSelector: v.getPagerSelector(),
                pollIntervalMS: null,
                newStoryIdleTime: 60000,
                crossPage: k.load_more_units_cross_page
            }, w);
        },
        getPagerSelector: function() {
            return "._2as,._5us6";
        },
        getStreamRoot: function() {
            return t;
        },
        getVisibleStoryCount: function(w) {
            var x = h.scry(w, v.getStoriesSelector());
            return x.length;
        },
        hideOffscreenSubstreams: function() {
            return k.hide_offscreen_substreams;
        },
        getOldStoryCount: function() {
            return r;
        },
        getTotalStoryCount: function() {
            return u;
        },
        getSectionID: function() {
            return s;
        },
        canInsertNewerStories: function() {
            if (l.getTop() > p(v.getStreamRoot()).y)
                return false;
            return j.canInsert();
        },
        getFeedStreamID: function() {
            return parseInt(t.id.split('feed_stream_')[1], 16)%1e+08;
        }
    };
    e.exports = v;
}, null);
__d("ControlledReferer", ["Event", "URI", "UserAgent_DEPRECATED"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        useFacebookReferer: function(k, l, m) {
            var n = false;
            function o() {
                if (n)
                    return;
                var q = k.contentWindow.location.pathname;
                if (q !== '/intern/common/referer_frame.php' && q !== '/common/referer_frame.php')
                    return;
                n = true;
                k.contentWindow.document.body.style.margin = 0;
                l();
            }
            var p;
            if (document.domain !== 'facebook.com') {
                p = '/intern/common/referer_frame.php';
            } else if (i.opera()) {
                p = '/common/referer_frame.php';
            } else if (h().isSecure()) {
                p = 'https://s-static.ak.facebook.com/common/referer_frame.php';
            } else 
                p = 'http://static.ak.facebook.com/common/referer_frame.php';
            if (m)
                p += '?fb_source=' + m;
            g.listen(k, 'load', o);
            k.src = p;
        },
        useFacebookRefererHtml: function(k, l, m) {
            j.useFacebookReferer(k, function() {
                k.contentWindow.document.body.innerHTML = l;
            }, m);
        }
    };
    e.exports = j;
}, null);
__d("TrackingPixel", ["Arbiter", "ControlledReferer"], function(a, b, c, d, e, f, g, h) {
    var i = {
        _iframe: undefined,
        loadWithNoReferrer: function(j) {
            if (!i._iframe) {
                var k = document.createElement('iframe');
                k.frameborder = 0;
                k.width = k.height = 1;
                k.style.position = 'absolute';
                k.style.top = '-10px';
                h.useFacebookReferer(k, function() {
                    g.inform('TrackingPixel/iframeIsLoaded', null, g.BEHAVIOR_PERSISTENT);
                }, null);
                document.body.appendChild(k);
                i._iframe = k;
            }
            g.subscribe('TrackingPixel/iframeIsLoaded', function() {
                var l = i._iframe.contentWindow.document, m = l.createElement('img');
                m.src = j;
            });
        }
    };
    e.exports = i;
}, null);
__d("ExternalTrackingTag", ["AsyncSignal", "TrackingPixel", "Event"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        listenForElementClick: function(k, l, m, n, o) {
            i.listen(k, 'click', function() {
                j.sendRequest(l, m, n, o);
            });
        },
        sendRequest: function(k, l, m, n) {
            if (!k)
                return;
            new g('/ads/external_tracking_tag/', {
                href: k,
                tracking_tag_id: l,
                adgroup_id: m,
                ad_id: n
            }).send();
            h.loadWithNoReferrer(k);
        }
    };
    e.exports = j;
}, null);
__d("FeedAdsClickLogger", ["Arbiter", "AsyncRequest", "Banzai", "collectDataAttributes", "DOM", "ge", "LitestandMessages", "LitestandStream", "Parent", "TrackingNodes", "ExternalTrackingTag", "URI", "isFacebookURI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = 'ssinfeed', u = {}, v = false, w = [];
    function x() {
        "use strict";
    }
    x.prototype.init = function(y) {
        "use strict";
        g.subscribe("ClickRefAction/new", this.onNewUserAction.bind(this));
        if (y.append_tracking_data_to_links) {
            this.appendTrackingDataToLinks();
            g.subscribe(m.STORIES_INSERTED, this.appendTrackingDataToLinks.bind(this));
            g.subscribe('FeedAdsClickLogger/refreshTrackingData', this.appendTrackingDataToLinks.bind(this), g.SUBSCRIBE_NEW);
        }
    };
    x.prototype.getStories = function() {
        "use strict";
        var y = n.getStreamRoot();
        if (y) {
            return k.scry(y, n.getStoriesSelector());
        } else {
            var z = l('home_stream');
            if (z)
                return k.scry(z, '.uiStreamStory');
        }
        return [];
    };
    x.prototype.appendTrackingDataToLinks = function() {
        "use strict";
        var y = this.getStories();
        for (var z = 0; z < y.length; z++) {
            var aa = y[z];
            if (aa in w)
                continue;
            var ba = aa.getAttribute('data-ft');
            if (!ba || (ba.indexOf('ei')===-1) && (ba.indexOf('mei')===-1))
                continue;
            var ca = k.scry(aa, 'a');
            for (var da = 0; da < ca.length; da++) {
                var ea = ca[da];
                if (ea.getAttribute('ajaxify') != null)
                    continue;
                if (ea.getAttribute('rel') != null)
                    continue;
                var fa = ea.getAttribute('href');
                if (!fa || fa.charAt(0) === '#')
                    continue;
                var ga = r(ea);
                if (s(ga) === false)
                    continue;
                if (ga.isLinkshimURI() === true)
                    continue;
                var ha = j(ea, ['ft']).ft, ia = ga.getQueryData();
                ia.ft = ha;
                ia.__md__ = 0;
                ga.setQueryData(ia);
                ea.setAttribute('href', ga.toString());
                ea.setAttribute('onmousedown', "this.href = this.href.replace('__md__=0', '__md__=1');");
            }
            w.push(aa);
        }
    };
    x.prototype.getHref = function(y) {
        "use strict";
        return (y.getAttribute && (y.getAttribute('ajaxify') || y.getAttribute('data-endpoint')) || y.action || y.href);
    };
    x.prototype.sendLogRequest = function(y) {
        "use strict";
        var z = y.ei || y.ai;
        if (!z && y.mei)
            z = y.mf_story_key;
        if (y !== null && typeof(z) === "string") {
            var aa = false;
            if (y.tn) {
                var ba = p.parseTrackingNodeString(y.tn);
                for (var ca = 0; ca < ba.length; ca++) {
                    var da = ba[ca][0];
                    switch (da) {
                    case p.types.LIKE_LINK:
                    case p.types.UNLIKE_LINK:
                    case p.types.COMMENT:
                    case p.types.ADD_COMMENT_BOX:
                        return;
                    case p.types.XBUTTON:
                    case p.types.HIDE_LINK:
                    case p.types.REPORT_SPAM_LINK:
                    case p.types.HIDE_ALL_LINK:
                    case p.types.DROPDOWN_BUTTON:
                    case p.types.UNHIDE_LINK:
                        return;
                    case p.types.RELATED_SHARE_ARTICLE:
                    case p.types.RELATED_SHARE_VIDEO:
                        return;
                    case p.types.ATTACHMENT:
                    case p.types.USER_MESSAGE:
                        aa = true;
                        break;
                    }
                }
            }
            var ea = Date.now(), fa = 500;
            y.duplicate_click=!!u[z] && (ea - u[z] < fa);
            u[z] = ea;
            if (i.isEnabled('ssinfeed')) {
                i.post(t, y, {
                    delay: 0,
                    retry: i.isEnabled('ssinfeed_retry')
                });
            } else {
                var ga = new h('/ajax/ssinfeed/end/').setData(y).setAllowCrossPageTransition(true).setMethod('POST');
                ga.send();
            }
            var ha = y.href;
            if (r(ha).isLinkshimURI() && r(ha).getQueryData())
                ha = r(ha).getQueryData().u;
            if (aa && y.external_tracking_tag&&!y.duplicate_click && ha && s(r(ha)) === false)
                q.sendRequest(y.external_tracking_tag.url, y.external_tracking_tag.tag_id, y.external_tracking_tag.adgroup_id);
        }
    };
    x.prototype.onNewUserAction = function(y, z) {
        "use strict";
        if (!z.node)
            return;
        var aa = this.getHref(z.node), ba = o.byTag(z.node, 'input') || o.byTag(z.node, 'button');
        if (!aa && ba && ba.type == "submit" && ba.getAttribute && ba.getAttribute('data-ft'))
            aa = "#";
        var ca;
        if (aa && z.event && (z.event.type === 'click' || z.event.type === 'contextmenu')) {
            ca = j(z.node, ['ft']);
            ca.ft.href = aa;
            ca.ft.mouse_type = z.event.type;
            this.sendLogRequest(ca.ft);
        }
    };
    e.exports.init = function(y) {
        if (v === false) {
            (new x()).init(y);
            v = true;
        }
    };
}, null);
__d("KeyboardShortcuts", ["KeyEventController", "Layer", "ModalLayer"], function(a, b, c, d, e, f, g, h, i) {
    function j(l, m, n) {
        "use strict";
        this.key = l;
        this.handler = m;
        this.filter = n;
        this.register();
    }
    j.prototype.register = function() {
        "use strict";
        this.token = g.registerKey(this.key, this.handler, this.filter);
    };
    j.prototype.remove = function() {
        "use strict";
        this.token.remove();
    };
    var k = {
        _tokens: [[]],
        register: function(l, m, n) {
            n = n || {};
            var o = n.allowDefault ? m: function(event, s) {
                m.apply(this, arguments);
                event.prevent();
            }, p = n.baseFilters || [g.defaultFilter], q = function(event, s) {
                for (var t = 0, u = p.length; t < u; t++)
                    if (!p[t](event, s))
                        return false;
                return !n.filter || n.filter(event, s);
            }, r = new j(l, o, q);
            this._tokens[this._tokens.length - 1].push(r);
            return r;
        },
        init: function() {
            h.subscribe('show', function(l, m) {
                if (m.hasBehavior(i))
                    this.pushLayer();
            }.bind(this));
            h.subscribe('hide', function(l, m) {
                if (m.hasBehavior(i))
                    this.popLayer();
            }.bind(this));
        },
        pushLayer: function() {
            var l = this._tokens[this._tokens.length - 1];
            l && l.forEach(function(m) {
                m.remove();
            });
            this._tokens.push([]);
        },
        popLayer: function() {
            var l = this._tokens.length - 1;
            if (l < 0)
                return;
            var m = this._tokens[l];
            m.forEach(function(o) {
                o.remove();
            });
            this._tokens.pop();
            var n = this._tokens[l - 1];
            n && n.forEach(function(o) {
                o.register();
            });
        }
    };
    k.init();
    e.exports = k;
}, null);
__d("FeedBaseKeyboardController", ["$", "AccessibilityLogger", "Arbiter", "AsyncDialog", "AsyncRequest", "Banzai", "BanzaiODS", "BanzaiNectar", "CSS", "DOM", "DOMScroll", "DOMQuery", "Event", "Focus", "KeyboardShortcuts", "LikeConfirmer", "NavigationMessage", "Parent", "Run", "SubscriptionsHandler", "Vector", "ViewportBounds", "cx", "emptyFunction", "ge", "getActiveElement", "isAsyncScrollQuery", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha) {
    var ia;
    function ja() {
        ia = o.hasClass(document.documentElement, 'tinyViewport') ? 0 : g('pagelet_bluebar').offsetTop + g('pagelet_bluebar').offsetHeight;
    }
    setTimeout(ja, 0);
    s.listen(window, 'resize', ha(ja));
    function ka(la, ma) {
        "use strict";
        this.root = la;
        this.clicktabscrollgk = ma.feed_click_and_tab_to_scroll;
        this.init();
    }
    ka.prototype.getStories = function() {
        "use strict";
    };
    ka.prototype.getParentStory = function(la) {
        "use strict";
    };
    ka.prototype.isStory = function(la) {
        "use strict";
    };
    ka.prototype.isHoldoutStory = function(la) {
        "use strict";
    };
    ka.prototype.getHeadline = function(la) {
        "use strict";
    };
    ka.prototype.getPreviousStory = function(la) {
        "use strict";
    };
    ka.prototype.getNextStory = function(la) {
        "use strict";
    };
    ka.prototype.setSelected = function(la, ma) {
        "use strict";
    };
    ka.prototype.clickLike = function() {
        "use strict";
    };
    ka.prototype.clickComment = function() {
        "use strict";
    };
    ka.prototype.clickShare = function() {
        "use strict";
    };
    ka.prototype.clickSeeMore = function() {
        "use strict";
    };
    ka.prototype.clickLeft = function() {
        "use strict";
    };
    ka.prototype.clickRight = function() {
        "use strict";
    };
    ka.prototype.openAttachment = function() {
        "use strict";
    };
    ka.prototype.focusComposer = function() {
        "use strict";
        var la = p.scry(ea('pagelet_composer'), 'textarea')[0];
        if (la) {
            t.set(la);
            q.scrollToTop(true);
        }
    };
    ka.prototype.getScrollOffset = function() {
        "use strict";
        return 10;
    };
    ka.prototype.getAnimationLength = function(la) {
        "use strict";
        return Math.min(Math.abs(aa.getElementPosition(la).y - ba.getTop() - document.body.scrollTop), 400);
    };
    ka.prototype.findTop = function() {
        "use strict";
        var la = this.getStories();
        for (var ma = 0; ma < la.length; ma++)
            if (aa.getElementPosition(la[ma]).y > aa.getScrollPosition().y)
                return la[ma];
    };
    ka.prototype.onLeave = function() {
        "use strict";
        this.subscriptions && this.subscriptions.release();
    };
    ka.prototype.getHelpDialogRequest = function() {
        "use strict";
        if (!this.dialogRequest) {
            this.dialogRequest = new k('/ajax/keyboard_shortcuts');
            this.dialogRequest.setReadOnly(true);
        } else if (this.dialogRequest.transport)
            return null;
        return this.dialogRequest;
    };
    ka.prototype.init = function(la) {
        "use strict";
        y.onLeave(this.onLeave.bind(this));
        this.subscriptions = new z();
        this.subscriptions.addSubscriptions(i.subscribe(w.NAVIGATION_BEGIN, this.onLeave.bind(this)), u.register('j', this.vert.bind(this, 1)), u.register('k', this.vert.bind(this, - 1)), u.register('l', function() {
            var ma = this.getParentStory(fa());
            v.like(function() {
                this.setSelected(ma, false);
                this.clickLike();
            }.bind(this), fa());
        }.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), u.register('c', this.clickComment.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), u.register('o', this.openAttachment.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), u.register('p', this.focusComposer.bind(this)), u.register('s', this.clickShare.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), u.register('SLASH', function() {
            var ma = this.getHelpDialogRequest();
            ma && j.send(ma);
        }.bind(this), {
            filter: function(event, ma) {
                return event.getModifiers().shift;
            }
        }), u.register('RETURN', this.clickSeeMore.bind(this), {
            filter: this.hasExpandableStoryInFocus.bind(this)
        }), u.register('LEFT', this.clickLeft.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), u.register('RIGHT', this.clickRight.bind(this), {
            filter: this.hasActiveStory.bind(this)
        }), s.listen(this.root, 'focusin', function(event) {
            var ma = event.getTarget();
            if (!this.isStory(ma)) {
                var na = (ma.nodeName == 'OBJECT' || ma.nodeName == 'EMBED' || ma.nodeName == 'IFRAME'), oa = this.getParentStory(ma);
                if (oa&&!na) {
                    this.setSelected(oa, true);
                    this.selected = oa;
                    if (this.clicktabscrollgk)
                        if ((aa.getElementPosition(ma).y - aa.getElementPosition(oa).y) + 75 < aa.getViewportDimensions().y)
                            this.vert(0);
                }
            }
        }.bind(this)), s.listen(this.root, 'click', function(event) {
            if (this.clicktabscrollgk) {
                var ma = event.getTarget(), na=!!x.byClass(ma, 'uiPopover');
                if (this.selected)
                    o.removeClass(this.selected, "_5qdv");
                var oa = (ma.nodeName == 'OBJECT' || ma.nodeName == 'EMBED' || ma.nodeName == 'IFRAME');
                if (this.isStory(this.getParentStory(ma)))
                    var pa = this.getParentStory(ma);
                if (pa && (this.selected != pa)&&!oa) {
                    this.setSelected(pa, false);
                    if (!this.isInteractive(ma)&&!o.hasClass(ma, 'UFICommentContainer'))
                        this.setFocused(pa);
                }
                this.selected = pa;
                if ((aa.getElementPosition(ma).y - aa.getElementPosition(pa).y) + 75 < aa.getViewportDimensions().y&&!na)
                    this.vert(0);
            }
        }.bind(this)));
    };
    ka.prototype.hasActiveStory = function(event, la) {
        "use strict";
        var ma = fa();
        return !(ma && o.shown(ma))||!!this.getParentStory(ma);
    };
    ka.prototype.hasExpandableStoryInFocus = function(event, la) {
        "use strict";
        var ma = fa();
        return (ma.getElementsByClassName('text_exposed_root').length&&!ma.getElementsByClassName('text_exposed_root text_exposed').length);
    };
    ka.prototype.click = function(la) {
        "use strict";
        if (!this.selected)
            return;
        var ma;
        for (var na = 0, oa = arguments.length; na < oa; na++) {
            ma = p.scry(this.selected, arguments[na])[0];
            if (ma && o.shown(ma)) {
                ma.click();
                return;
            }
        }
    };
    ka.prototype.vert = function(la) {
        "use strict";
        if (!this.scrollInitialized) {
            this.subscriptions.addSubscriptions(s.listen(document, 'scroll', function() {
                if (this.selected&&!this.scrolling)
                    this.setSelected(null, false);
            }.bind(this)));
            this.scrollInitialized = true;
        }
        var ma, na;
        if (this.selected) {
            if (l.isEnabled('kbshortcuts_feed')) {
                na = la > 0 ? 'kbshortcuts.scroll_down' : 'kbshortcuts.scroll_up';
                m.bumpEntityKey('kbshortcuts_feed', na);
                n.log('feed_scroll', na, {});
            }
            h.logJKKey();
            if (this.selected.id == 'pagelet_composer') {
                ma = la > 0 ? this.getStories()[0] : null;
                if (this.isHoldoutStory(ma))
                    ma = this.getPreviousStory(ma);
            } else if (la === 0) {
                ma = this.selected;
            } else 
                ma = la > 0 ? this.getNextStory(this.selected) : (this.getPreviousStory(this.selected) || ea('pagelet_composer'));
            if (!ma) {
                return;
            } else if (!r.isElementNode(ma)) {
                o.removeClass(this.selected, 'selectedStorySimple');
                this.selected = ma;
                return this.vert(la);
            }
        }
        if (!ma || x.byClass(ma, 'hidden_elem') ||!p.contains(document, ma)) {
            ma = this.findTop();
            if (ma && la < 0)
                ma = this.getPreviousStory(ma);
            if (this.isHoldoutStory(ma))
                ma = this.getPreviousStory(ma);
        }
        if (!ma)
            return;
        this.anim && this.anim.stop();
        var oa = (Date.now() - (this.lastScroll || 0) > 30);
        if (la !== 0)
            var pa = this.setFocused.bind(this, ma);
        if (ga()) {
            oa = false;
            pa();
            pa = da;
        }
        this.scrolling = true;
        this.scrollingTimer && window.clearTimeout(this.scrollingTimer);
        this.anim = q.scrollTo(ma, oa ? this.getAnimationLength(ma) : 0, false, aa.getViewportDimensions().y - ia - this.getScrollOffset(), 0, function() {
            this.scrollingTimer = window.setTimeout(function() {
                this.scrolling = false;
            }.bind(this), 300);
            var qa = aa.getScrollPosition();
            pa();
            if (qa.distanceTo(aa.getScrollPosition()) !== 0)
                q.scrollTo(qa, 0);
        }.bind(this));
        this.setSelected(ma, true);
        this.lastScroll = Date.now();
    };
    ka.prototype.isInteractive = function(la) {
        "use strict";
        return ((la.nodeName == 'INPUT') || (la.nodeName == 'BUTTON') || (la.nodeName == 'TEXTAREA') || (la.nodeName == 'A')||!!x.byAttribute(la, 'contenteditable'));
    };
    ka.prototype.setTabindexOnHeadline = function(la, ma) {
        "use strict";
        if (this.isStory(la)) {
            var na = this.getHeadline(la);
            if (na)
                na.tabIndex = ma;
        }
    };
    ka.prototype.setTabindexOnStory = function(la, ma) {
        "use strict";
        if (this.isStory(la))
            la.tabIndex = ma;
    };
    ka.prototype.setFocused = function(la) {
        "use strict";
        if (this.isStory(la))
            t.setWithoutOutline(la);
    };
    e.exports = ka;
}, null);
__d("ViewportTrackingHelper", ["Event", "DOMDimensions", "Vector"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        getScrollListener: function(k) {
            return g.listen(window, 'scroll', k);
        },
        looseIsVisible: function(k, l) {
            if (!k.x&&!k.y&&!k.width&&!k.height)
                return false;
            var m = i.getScrollPosition().y, n = h.getViewportDimensions().height, o = n + l - m;
            return k.y < o;
        },
        isVisible: function(k, l) {
            if (!k.x&&!k.y&&!k.width&&!k.height)
                return false;
            var m = h.getViewportDimensions().height, n = Math.max(k.y, 0), o = Math.min(k.y + k.height, m), p = Math.min(k.height, l);
            return (o - n) >= p;
        },
        isDescendantOf: function(k, l) {
            if (k === l)
                return k;
            while (k && k.parentNode) {
                if (k.parentNode === l)
                    return k;
                k = k.parentNode;
            }
            return false;
        }
    };
    e.exports = j;
}, null);
__d("ViewportTracking", ["Arbiter", "AsyncSignal", "Banzai", "BanzaiScuba", "CSS", "cx", "CurrentUser", "DOM", "DOMDimensions", "Event", "LitestandMessages", "NavigationMessage", "Run", "SubscriptionsHandler", "UserActivity", "Vector", "ViewportTrackingHelper", "clickRefAction", "collectDataAttributes", "copyProperties", "debounce", "getElementPosition", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca) {
    var da = 97, ea = 51, fa = 'vpv', ga = '/feed/feed_tracking/vpv_waterfall_logging', ha = 3, ia = 2, ja = 1, ka = 0, la = 1, ma = 2, na = 3, oa = 4;
    function pa() {
        "use strict";
    }
    pa.prototype.init = function(qa) {
        "use strict";
        this.useBanzai = true;
        this.banzaiNoDelay=!!qa.banzai_no_delay;
        this.banzaiRetry=!!qa.banzai_retry;
        this.viewportHeightRatio = qa.viewport_height_ratio ? qa.viewport_height_ratio : .25;
        this.vpvDebug=!!qa.vpv_debug;
        this.vpvdDebug=!!qa.vpvd_debug;
        this.vpvdAnalysis=!!qa.vpvd_analysis;
        this.trackMouseClick=!!qa.track_mouse_click;
        this.trackMouseMove=!!qa.track_mouse_move;
        this.trackKeyboard=!!qa.track_keyboard;
        this.annotatedVPVLogging=!!qa.annotated_vpv_logging;
        this.useWaterfallLogging=!!qa.waterfall_logging;
        this.loggedStoryIDs = {};
        this.readStoryIDs = {};
        this.annotatedStoryIDs = {};
        this.minSizeToBeVisible = 200;
        this.minFractionToBeVisibleForTimetracking = .5;
        this.scrollThrottlingInterval = 100;
        this.mouseThrottlingInterval = 100;
        this.keyboardThrottlingInterval = 100;
        this.minTimeToReportImmediately = 500;
        this.discardVPVDIntervalThreshold = 90000;
        this.active_state_duration = 1000;
        this.height_diff_to_change_state = 25;
        this.focused_state_duration = 3500;
        this.invalidateAllStoriesCache();
        this.cachedViewportHeight = o.getViewportDimensions().height;
        this.isTimetrackingEnabled = 0;
        this.activeStories = {};
        this.userInactiveLock = false;
        this.userActivityPollerTimeoutID =- 1;
        this._headLoadStoryCount = 0;
        this.getDataFromConfig(qa);
        if (this.isTimetrackingEnabled) {
            this.lastMouseX =- 1;
            this.lastMouseY =- 1;
            this.lastStreamY =- 1;
            this.latestStreamYChangedTimeStamp =- 1;
            this.userFocus = la;
            this.latestUserFocus = la;
            this.latestUserActivity = 'init';
            this.focusedStory = null;
            this.latestFocusedStory = null;
            this.latestActiveStory = null;
            this.totalVPVDuration = {};
        }
        this.isLoose=!!qa.is_loose;
        this.maxScrollPosition = 0;
        if (qa.tracking_duration_config) {
            this.scrollThrottlingInterval = qa.tracking_duration_config.scroll_throttling_interval;
            this.mouseThrottlingInterval = qa.tracking_duration_config.mouse_throttling_interval;
            this.keyboardThrottlingInterval = qa.tracking_duration_config.keyboard_throttling_interval;
            this.userActivityPollingInterval = qa.tracking_duration_config.user_activity_polling_interval;
            this.timeToBeConsideredInactive = qa.tracking_duration_config.time_to_be_considered_inactive;
            this.minFractionToBeVisibleForTimetracking = qa.tracking_duration_config.min_fraction_to_be_visible;
            this.minTimeToReportImmediately = qa.tracking_duration_config.min_time_to_report_immediately;
            this.active_state_duration = qa.tracking_duration_config.active_state_duration;
            this.height_diff_to_change_state = qa.tracking_duration_config.story_height_diff_to_change_state;
            this.focused_state_duration = qa.tracking_duration_config.focused_state_duration;
            this.discardVPVDIntervalThreshold = qa.tracking_duration_config.discard_vpvd_interval_threshold;
        }
        var ra, sa = aa(this.fireTimer, this.getTimeout(), this);
        if (this.isLoose) {
            this.minSizeToBeVisible = 0;
            ra = ca(function() {
                this.maxScrollPosition = Math.max(this.maxScrollPosition, v.getScrollPosition().y);
                sa();
            }.bind(this));
        } else 
            ra = sa;
        this.initialStories = this.getStoriesInView();
        this.initialStoriesLogged = false;
        if (this.annotatedVPVLogging)
            this.initialStories.forEach(this.logAnnotatedVPV, this);
        if (this.useWaterfallLogging)
            this.getStoriesInView().forEach(function(wa) {
                this.waterfallLogStep(wa, '100_all_stories_in_view_ignore_height', true);
            }, this);
        this.vpvHeartBeatInterval = qa.vpv_heartbeat_interval;
        this.passVPVHeartbeatGK = qa.use_vpv_heartbeat;
        if (this.passVPVHeartbeatGK) {
            this.intervalCount = 1;
            this.fireTimerCount = 1;
            this.storiesInView = this.initialStories ? this.initialStories : this.getStoriesInView();
            this.vpvHeartBeatIntervalSignal = setInterval(function() {
                this._sendSignal('interval');
            }.bind(this), this.vpvHeartBeatInterval);
        }
        this.subscriptions = new t();
        this.subscriptions.addSubscriptions(this._getScrollListener(ra), p.listen(window, 'resize', function() {
            this.invalidateVisibleStoriesCache();
            this.cachedViewportHeight = o.getViewportDimensions().height;
            ra();
        }.bind(this)), p.listen(window, 'focus', function() {
            if (this.isTimetrackingEnabled)
                this.updateTimeTrackingData(false, 'window_focus');
        }.bind(this)), p.listen(window, 'blur', function() {
            if (this.isTimetrackingEnabled)
                this.updateTimeTrackingData(true, 'window_blur');
        }.bind(this)), g.subscribe(r.NAVIGATION_BEGIN, this.cleanup.bind(this)), g.subscribe('Stream/totalHeadLoadedStories', function(wa, xa) {
            this._headLoadStoryCount = xa;
        }.bind(this)), g.subscribe(q.STORIES_INSERTED, function() {
            if (this.annotatedVPVLogging&&!this.initialStoriesLogged) {
                var wa = this.getStoriesInView();
                wa.forEach(this.logAnnotatedVPV, this);
            } else 
                ra();
            if (this.isTimetrackingEnabled)
                this.updateTimeTrackingData(false, 'stories_inserted');
        }.bind(this)));
        if (this.isTimetrackingEnabled) {
            this.updateTimeTrackingData(false, 'init');
            var ta = ca(function(event) {
                this.invalidateVisibleStoriesCache();
                this.handleScroll(event);
            }.bind(this), this.scrollThrottlingInterval), ua = ca(function(event) {
                this.handleKeyboard(event);
            }.bind(this), this.keyboardThrottlingInterval), va = ca(function(event) {
                this.handleMouse(event);
            }.bind(this), this.mouseThrottlingInterval);
            this.subscriptions.addSubscriptions(p.listen(window, 'scroll', ta), p.listen(document.documentElement, 'DOMMouseScroll', ta), p.listen(document.documentElement, 'mousewheel', ta));
            if (this.trackKeyboard)
                this.subscriptions.addSubscriptions(p.listen(document.documentElement, 'keydown', ua));
            if (this.trackMouseMove)
                this.subscriptions.addSubscriptions(p.listen(document.documentElement, 'mouseover', va), p.listen(document.documentElement, 'mousemove', va));
            if (this.trackMouseMove && this.trackMouseClick)
                this.subscriptions.addSubscriptions(g.subscribe('Event/stop', function(wa, xa) {
                    this.handleMouse(xa.event);
                }.bind(this)));
            if (this.trackMouseClick)
                this.subscriptions.addSubscriptions(p.listen(document.documentElement, 'click', function(event) {
                    this.handleMouse(event);
                }.bind(this)), g.subscribe('PhotoSnowlift.OPEN', function() {
                    this.userFocus = na;
                    this.handleLayers();
                }.bind(this)), g.subscribe('PhotoSnowlift.CLOSE', function() {
                    this.userFocus = la;
                    this.focusedStory = null;
                    this.updateTimeTrackingData(false, 'snowlift_close');
                }.bind(this)));
            this._userActivityPoller();
        }
        s.onLeave(this.cleanup.bind(this));
        s.onUnload(this.cleanup.bind(this));
    };
    pa.prototype._getScrollListener = function(qa) {
        "use strict";
        return p.listen(window, 'scroll', qa);
    };
    pa.prototype.cleanup = function() {
        "use strict";
        if (this.subscriptions) {
            this.subscriptions.release();
            this.subscriptions = null;
        }
        if (this.isTimetrackingEnabled) {
            clearTimeout(this.userActivityPollerTimeoutID);
            this.updateTimeTrackingData(true, 'cleanup');
        }
        if (this.passVPVHeartbeatGK)
            clearInterval(this.vpvHeartBeatIntervalSignal);
        if (this.annotatedVPVLogging) {
            var qa = this.getStoriesInView();
            qa.forEach(this.logAnnotatedVPV, this);
        }
        this.initialStories = [];
        this._headLoadStoryCount = 0;
    };
    pa.prototype.fireTimer = function() {
        "use strict";
        if (this.useWaterfallLogging) {
            var qa = this.getStoriesInViewIgnoreHeight();
            qa.forEach(function(ra) {
                this.waterfallLogStep(ra, '100_all_stories_in_view_ignore_height');
            }, this);
        }
        if (!this.initialStoriesLogged) {
            this.initialStories.forEach(this.markStoryRead, this);
            this.initialStoriesLogged = true;
        }
        this.storiesInView = this.getStoriesInView();
        this.addSeenClass();
        this.storiesInView.forEach(this.markStoryRead, this);
        if (this.passVPVHeartbeatGK)
            this._sendSignal('fireTimer');
    };
    pa.prototype.heartBeatIsEnabled = function() {
        "use strict";
        return false;
    };
    pa.prototype.getSessionID = function() {
        "use strict";
        return null;
    };
    pa.prototype._sendSignal = function(qa) {
        "use strict";
        if (!this.heartBeatIsEnabled())
            return;
        var ra =- 1;
        if (qa == 'interval') {
            ra = this.intervalCount++;
        } else if (qa == 'fireTimer')
            ra = this.fireTimerCount++;
        var sa =- 1, ta =- 1, ua =- 1;
        if (this.storiesInView.length > 0) {
            sa = this.getStoryID(this.storiesInView[0]);
            ta = this.getQueryID(this.storiesInView[0]);
            ua = this.getFBFeedLocations(this.storiesInView[0]);
        }
        var va = new j('vpv_heartbeat_js');
        va.addInteger('qid', ta);
        va.addInteger('uid', m.getID());
        va.addInteger('firststoryid', sa);
        va.addInteger('time', Math.round(Date.now() / 1000));
        va.addNormal('type', qa);
        va.addInteger('count', ra);
        va.addInteger('fbfeed_location', ua);
        va.post();
    };
    pa.prototype._userActivityPoller = function() {
        "use strict";
        if (!this.userInactiveLock&&!u.isActive(this.timeToBeConsideredInactive)) {
            this.userInactiveLock = true;
            this.userFocus = ma;
            this.updateTimeTrackingData(false, 'user_activity_inactive');
            u.subscribeOnce(function() {
                this.userFocus = la;
                this.updateTimeTrackingData(false, 'user_activity_active');
                this.userInactiveLock = false;
            }.bind(this));
        }
        this.userActivityPollerTimeoutID = setTimeout(this._userActivityPoller.bind(this), this.userActivityPollingInterval);
    };
    pa.prototype.getQueryID = function(qa) {
        "use strict";
        return - 1;
    };
    pa.prototype.getFBFeedLocations = function(qa) {
        "use strict";
        return - 1;
    };
    pa.prototype.getFBFeedInsertionPosition = function(qa) {
        "use strict";
        return - 1;
    };
    pa.prototype.createVPVDTimer = function(qa) {
        "use strict";
        var ra = document.createElement("Label");
        ra.setAttribute("for", qa);
        ra.setAttribute("class", 'vpvd_debug_timer');
        return ra;
    };
    pa.prototype.updateVPVDTimer = function(qa) {
        "use strict";
        var ra = this.activeStories[qa].story, sa = n.scry(ra, '.vpvd_debug_timer');
        if (!sa.length) {
            sa = [this.createVPVDTimer(ra), this.createVPVDTimer(ra)];
            var ta = n.scry(ra, '.UFIRow');
            if (ta.length && ta[ta.length - 1].clientWidth > 0) {
                ta[ta.length - 1].appendChild(sa[0]);
            } else 
                ra.appendChild(sa[0]);
            ra.insertBefore(sa[1], ra.firstChild);
        }
        var ua = this.totalVPVDuration[qa], va = Math.floor(ua / 1000) + '.' + Math.floor((ua%1000) / 100);
        n.setContent(sa[0], va);
        n.setContent(sa[1], va);
    };
    pa.prototype.updateVPVDTimers = function() {
        "use strict";
        for (var qa in this.activeStories)
            if (this.activeStories.hasOwnProperty(qa))
                this.updateVPVDTimer(qa);
    };
    pa.prototype.logVpvdAnalysis = function(qa, ra, sa, ta, ua, va) {
        "use strict";
        var wa = new j('vpv_duration');
        wa.addDenorm('qid', this.getQueryID(this.activeStories[qa].story));
        wa.addDenorm('uid', m.getID());
        wa.addDenorm('vsid', qa);
        wa.addInteger('time', Math.round(Date.now() / 1000));
        wa.addInteger('duration', ta);
        wa.addInteger('total_duration', ua);
        wa.addNormal('story_state', this.activeStories[qa].state);
        wa.addNormal('is_active_state', sa);
        wa.addNormal('num_visible_stories', this.numVisibleStories);
        wa.addInteger('story_height', this.activeStories[qa].story_height);
        wa.addInteger('story_visible_height', this.activeStories[qa].height);
        wa.addInteger('state_visible_height', va);
        wa.addInteger('total_visible_height', this.totalVisibleHeight);
        wa.addInteger('total_height', this.totalHeight);
        wa.addNormal('user_focus', this.latestUserFocus);
        wa.addNormal('next_user_focus', this.userFocus);
        wa.addInteger('vpvd', ra);
        wa.addInteger('accumulated_vpvd', this.activeStories[qa].vpvd);
        wa.addNormal('user_activity', this.latestUserActivity);
        wa.addNormal('next_user_activity', this.userActivity);
        wa.addInteger('story_position_y', this.activeStories[qa].y);
        wa.addInteger('feed_insertion_position', this.getFBFeedInsertionPosition(this.activeStories[qa].story));
        wa.addNormal('visible_position', this.activeStories[qa].visible_position);
        wa.addNormal('is_focused_story', this.activeStories[qa].is_focused);
        wa.post();
    };
    pa.prototype.shouldDiscardStory = function(qa) {
        "use strict";
        return this.activeStories[qa].height != this.activeStories[qa].story_height && this.activeStories[qa].height < this.totalHeight / 2;
    };
    pa.prototype.calculateTotalHeight = function() {
        "use strict";
        this.totalHeight = 0;
        for (var qa in this.activeStories)
            if (this.activeStories.hasOwnProperty(qa))
                this.totalHeight += this.activeStories[qa].height;
    };
    pa.prototype.updateVPVDurations = function(qa) {
        "use strict";
        if (this.latestUserFocus === ma || qa - this.latestTimeTrackingTimestamp > this.discardVPVDIntervalThreshold)
            return;
        var ra = {
            1: 0,
            2: 0,
            3: 0
        }, sa = (qa - this.latestTimeTrackingTimestamp >= this.focused_state_duration);
        this.totalVisibleHeight = 0;
        for (var ta in this.activeStories)
            if (this.activeStories.hasOwnProperty(ta))
                if (!(this.latestUserFocus === la && sa && this.shouldDiscardStory(ta))) {
                    ra[this.activeStories[ta].state] += this.activeStories[ta].height;
                    this.totalVisibleHeight += this.activeStories[ta].height;
                }
        var ua = 0, va = qa - this.latestTimeTrackingTimestamp;
        if (this.latestUserFocus === la) {
            va = ra[ha] > 0 ? this.focused_state_duration : this.active_state_duration;
            va = Math.min(va, qa - this.latestTimeTrackingTimestamp);
            ua = (qa - this.latestTimeTrackingTimestamp) - va;
        }
        var wa = 0, xa = ha;
        for (var ya = ha; ya >= ja; ya--)
            if (ra[ya] > 0) {
                wa = ra[ya];
                xa = ya;
                break;
            }
        var za = ra[ha] + ra[ia] + ra[ja], ab = 0;
        for (ta in this.activeStories)
            if (this.activeStories.hasOwnProperty(ta)) {
                if (this.latestUserFocus === la && sa && this.shouldDiscardStory(ta))
                    continue;
                    if (wa > 0 && this.activeStories[ta].state >= xa) {
                        ab = va * (this.activeStories[ta].height / wa);
                        if (this.vpvdAnalysis && va > 0)
                            this.logVpvdAnalysis(ta, ab, true, va, va + ua, wa);
                            this.activeStories[ta].vpvd += ab;
                            this.totalVPVDuration[ta] += ab;
                    }
                    if (za > 0) {
                        ab = ua * (this.activeStories[ta].height / za);
                        if (this.vpvdAnalysis && ua > 0)
                            this.logVpvdAnalysis(ta, ab, false, ua, va + ua, za);
                            this.activeStories[ta].vpvd += ab;
                            this.totalVPVDuration[ta] += ab;
                    }
            }
    };
    pa.prototype.updateActiveStory = function(qa, ra, sa, ta) {
        "use strict";
        this.activeStories[qa].state = ra;
        this.activeStories[qa].ts = sa;
        this.activeStories[qa].height_snapshot = ta[qa].height;
        this.activeStories[qa].is_focused = this.focusedStory === ta[qa].story;
        this.activeStories[qa].story_height = ta[qa].story_height;
        if (this.vpvdAnalysis) {
            this.activeStories[qa].visible_position = ta[qa].visible_position;
            this.activeStories[qa].y = ta[qa].y;
        }
    };
    pa.prototype.updateActiveStories = function(qa, ra) {
        "use strict";
        for (var sa in qa)
            if (qa.hasOwnProperty(sa))
                if (sa in this.activeStories) {
                    this.activeStories[sa].height = qa[sa].height;
                    var ta = qa[sa].height - this.activeStories[sa].height_snapshot;
                    if (this.focusedStory === qa[sa].story) {
                        this.updateActiveStory(sa, ha, ra, qa);
                    } else if (ta<=-this.height_diff_to_change_state) {
                        this.updateActiveStory(sa, this.shouldDiscardStory(sa) ? ka : ja, ra, qa);
                    } else if (ta >= this.height_diff_to_change_state || this.activeStories[sa].is_focused || this.activeStories[sa].height === this.activeStories[sa].story_height)
                        this.updateActiveStory(sa, ia, ra, qa);
                } else {
                    this.activeStories[sa] = {
                        evp_ts: ra,
                        story: qa[sa].story,
                        height: qa[sa].height,
                        vpvd: 0
                    };
                    if (!this.totalVPVDuration[sa])
                        this.totalVPVDuration[sa] = 0;
                        this.updateActiveStory(sa, ia, ra, qa);
                }
    };
    pa.prototype.recordVPVDurations = function(qa, ra) {
        "use strict";
        for (var sa in this.activeStories)
            if (this.activeStories.hasOwnProperty(sa))
                if (ra ||!(sa in qa)) {
                    if (this.activeStories[sa].vpvd > this.focused_state_duration || this.activeStories[sa].vpvd === this.totalVPVDuration[sa])
                        this.recordTimeStoryWasInView(this.activeStories[sa]);
                        delete this.activeStories[sa];
                }
    };
    pa.prototype.updateTimeTrackingData = function(qa, ra) {
        "use strict";
        this.userActivity = ra;
        if (!this.activeStories)
            this.activeStories = {};
        var sa = Date.now();
        if (!this.latestTimeTrackingTimestamp)
            this.latestTimeTrackingTimestamp = sa;
        var ta = this.getVisibleStoriesFromCache();
        this.calculateTotalHeight();
        this.updateVPVDurations(sa);
        this.updateActiveStories(ta, sa);
        if (this.vpvdDebug)
            this.updateVPVDTimers();
        this.recordVPVDurations(ta, qa);
        if (qa) {
            this.latestTimeTrackingTimestamp = 0;
        } else 
            this.latestTimeTrackingTimestamp = sa;
        this.latestUserActivity = this.userActivity;
        this.latestUserFocus = this.userFocus;
        if (this.focusedStory)
            this.latestActiveStory = this.focusedStory;
        this.latestFocusedStory = this.focusedStory;
        this.focusedStory = null;
    };
    pa.prototype.needsToUpdateTimeTrackingData = function() {
        "use strict";
        return !(this.latestUserFocus === this.userFocus && (this.userFocus === ma || (this.userFocus === la&&!this.latestFocusedStory&&!this.focusedStory)));
    };
    pa.prototype.getfocusedStory = function(qa) {
        "use strict";
        var ra = this.getVisibleStoriesFromCache();
        for (var sa in ra)
            if (ra.hasOwnProperty(sa))
                if (w.isDescendantOf(qa, ra[sa].story))
                    return ra[sa].story;
        return null;
    };
    pa.prototype.handleLayers = function() {
        "use strict";
        if (this.userFocus === na || this.userFocus === oa) {
            this.focusedStory = this.latestActiveStory;
            this.updateTimeTrackingData(false, 'media_layer');
            return true;
        }
        return false;
    };
    pa.prototype.didInteractWithStream = function(qa) {
        "use strict";
        return w.isDescendantOf(qa, this.getStream()) || w.isDescendantOf(this.getStream(), qa);
    };
    pa.prototype.handleScroll = function(event) {
        "use strict";
        if (this.handleLayers())
            return;
        var qa = Date.now(), ra = ba(this.getStream()).y;
        if (ra != this.lastStreamY || qa - this.latestStreamYChangedTimeStamp < 2.5 * this.scrollThrottlingInterval || this.didInteractWithStream(event.target)) {
            this.latestStreamYChangedTimeStamp = qa;
            this.userFocus = la;
        } else 
            this.userFocus = ma;
        this.lastStreamY = ra;
        if (this.userFocus === la || this.needsToUpdateTimeTrackingData())
            this.updateTimeTrackingData(false, 'scroll');
    };
    pa.prototype.handleKeyboard = function(event) {
        "use strict";
        if (this.handleLayers())
            return;
        if (this.didInteractWithStream(event.target)) {
            this.userFocus = la;
            this.focusedStory = this.getfocusedStory(event.target);
        } else if (k.hasClass(event.target, 'shareInput')) {
            this.userFocus = la;
            this.focusedStory = this.latestActiveStory;
        } else 
            this.userFocus = ma;
        if (this.userFocus === la || this.needsToUpdateTimeTrackingData())
            this.updateTimeTrackingData(false, 'keyboard');
    };
    pa.prototype.handleMouse = function(event) {
        "use strict";
        if (this.handleLayers())
            return;
        if (event.type != 'click' && event.clientX === this.lastMouseX && event.clientY === this.lastMouseY)
            return;
        if (event.type === 'click')
            this.invalidateVisibleStoriesCache();
        if (this.didInteractWithStream(event.target)) {
            this.userFocus = la;
            this.focusedStory = this.getfocusedStory(event.target);
        } else 
            this.userFocus = ma;
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
        if (this.needsToUpdateTimeTrackingData())
            this.updateTimeTrackingData(false, event.type);
    };
    pa.prototype.getStoriesInView = function() {
        "use strict";
        var qa = this.getAllStories(), ra = [], sa = false;
        for (var ta = 0; ta < qa.length; ta++) {
            var ua = qa[ta], va = this.getStoryID(ua);
            if (this.hasBeenVisible(va))
                continue;
            if (this.isVisible(ua)) {
                if (ua.getAttribute('data-insertion-position') === null)
                    ua.setAttribute('data-insertion-position', ta - this._headLoadStoryCount);
                ra.push(ua);
                sa = true;
            } else if (sa)
                break;
        }
        return ra;
    };
    pa.prototype.getStoriesInViewIgnoreHeight = function() {
        "use strict";
        var qa = this.getAllStories(), ra = false, sa = [];
        for (var ta = 0; ta < qa.length; ta++) {
            var ua = qa[ta];
            if (this.isVisible(ua, false, 0)) {
                sa.push(ua);
                ra = true;
            } else if (ra)
                break;
        }
        return sa;
    };
    pa.prototype.getAllStoriesFromCache = function() {
        "use strict";
        if (this.cachedAllStories === null)
            this.cachedAllStories = this.getAllStories();
        return this.cachedAllStories;
    };
    pa.prototype.invalidateAllStoriesCache = function() {
        "use strict";
        this.cachedAllStories = null;
        this.invalidateVisibleStoriesCache();
    };
    pa.prototype.getVisibleStoriesFromCache = function() {
        "use strict";
        if (this.cachedVisibleStories === null)
            this.cachedVisibleStories = this.getAllStoriesInView();
        return this.cachedVisibleStories;
    };
    pa.prototype.invalidateVisibleStoriesCache = function() {
        "use strict";
        this.cachedVisibleStories = null;
    };
    pa.prototype.getAllStoriesInView = function() {
        "use strict";
        var qa = this.getAllStoriesFromCache(), ra = {}, sa = false, ta = 0, ua = qa.length, va = 1, wa = qa.length;
        if (this._indexOfLastVisibleStoryOnPreviousPass > ua / 2) {
            ta = ua - 1;
            ua =- 1;
            va =- va;
        }
        for (var xa = ta; xa != ua; xa += va) {
            var ya = qa[xa], za = this.getHeightIfVisible(ya, false, Math.min(this.minSizeToBeVisible, this.minFractionToBeVisibleForTimetracking * o.getElementDimensions(ya).height));
            if (za > 0 || ya === this.focusedStory) {
                if (ya.getAttribute('data-insertion-position') === null)
                    ya.setAttribute('data-insertion-position', xa - this._headLoadStoryCount);
                var ab = this.getStoryID(ya);
                ra[ab] = {
                    story: ya,
                    height: za,
                    story_height: o.getElementDimensions(ya).height
                };
                sa = true;
                if (this.vpvdAnalysis) {
                    ra[ab].y = ba(ya).y;
                    ra[ab].visible_position = xa;
                    wa = Math.min(wa, xa);
                }
            } else if (sa) {
                this._indexOfLastVisibleStoryOnPreviousPass = xa - va;
                break;
            }
        }
        if (this.vpvdAnalysis) {
            this.numVisibleStories = 0;
            for (ab in ra)
                if (ra.hasOwnProperty(ab)) {
                    ra[ab].visible_position -= wa;
                    this.numVisibleStories++;
                }
        }
        return ra;
    };
    pa.prototype.getTimetrackingDataToLog = function(qa) {
        "use strict";
        var ra = {
            evt: da,
            vpvd_start_timestamp: qa.evp_ts,
            vpvd_time_delta: Math.round(qa.vpvd),
            story_height: o.getElementDimensions(qa.story).height,
            viewport_height: this.cachedViewportHeight
        };
        return {
            ft: ra
        };
    };
    pa.prototype.recordTimeStoryWasInView = function(qa) {
        "use strict";
        if (this.isTimetrackingEnabled && qa.vpvd > 0) {
            var ra = this.getTimetrackingDataToLog(qa), sa = y(qa.story, ['ft']);
            z(ra.ft, sa.ft);
            var ta=!!sa.ft.ei && (ra.ft.vpvd_time_delta > this.minTimeToReportImmediately);
            delete ra.ei;
            this.sendDataToLog(qa.story, ra, ta, false);
        }
    };
    pa.prototype.hasBeenVisible = function(qa) {
        "use strict";
        return qa in this.readStoryIDs;
    };
    pa.prototype.isVisible = function(qa, ra, sa) {
        "use strict";
        return this.getHeightIfVisible(qa, ra, sa) > 0;
    };
    pa.prototype.getHeightIfVisible = function(qa, ra, sa) {
        "use strict";
        if (ra === undefined)
            ra = this.isLoose;
        if (sa === undefined)
            sa = this.minSizeToBeVisible;
        var ta = v.getScrollPosition().y, ua = o.getViewportDimensions().height, va = ba(qa), wa = o.getElementDimensions(qa), xa = ua + this.maxScrollPosition - ta;
        if (!va.x&&!va.y&&!wa.x&&!wa.y)
            return false;
        if (ra && va.y < xa)
            return true;
        var ya = Math.max(va.y, 0), za = Math.min(va.y + wa.height, ua), ab = Math.min(wa.height, sa);
        return (za - ya) >= ab ? (za - ya) : 0;
    };
    pa.prototype.getHeightInViewport = function(qa) {
        "use strict";
        var ra = o.getViewportDimensions().height, sa = ba(qa), ta = o.getElementDimensions(qa);
        if (!sa.x&&!sa.y&&!ta.x&&!ta.y)
            return false;
        var ua = Math.max(sa.y, 0), va = Math.min(sa.y + ta.height, ra);
        return va - ua;
    };
    pa.prototype.sendDataToLog = function(qa, ra, sa, ta) {
        "use strict";
        if (this.useBanzai) {
            var ua = {};
            if (sa)
                ua.delay = 3000;
            if (ta)
                ua.retry = true;
            var va = this.getSessionID();
            if (va)
                ra.ft.session_id = va;
            if (this.useWaterfallLogging && ra.ft.evt == ea) {
                ra.ft.should_waterfall_logging = 1;
                ra.ft["interface"] = 'www';
                var wa=!this.initialStoriesLogged;
                this.waterfallLogStep(qa, '200_sent_to_banzai', wa);
            }
            i.post('feed_tracking', ra, ua);
        } else 
            x(fa, qa, null, 'FORCE', ra);
    };
    pa.prototype.waterfallLogStep = function(qa, ra, sa) {
        "use strict";
        var ta = this.getStoryID(qa);
        if (this.loggedStoryIDs[ra] && this.loggedStoryIDs[ra][ta])
            return;
        var ua = this.getWaterfallData(qa, ra, sa);
        new h(ga, ua).send();
        if (!this.loggedStoryIDs[ra])
            this.loggedStoryIDs[ra] = {};
        this.loggedStoryIDs[ra][ta] = true;
    };
    pa.prototype.getWaterfallData = function(qa, ra, sa) {
        "use strict";
        var ta = this.getDataToLog(qa), ua = y(qa, ['ft']);
        z(ta.ft, ua.ft);
        var va = ta.ft;
        va.height_in_viewport = this.getHeightInViewport(qa);
        va.step = ra;
        va.is_initial_story = sa ? 1 : 0;
        va["interface"] = 'www';
        return va;
    };
    pa.prototype.addSeenClass = function() {
        "use strict";
        var qa = this.getAllStories(), ra = o.getViewportDimensions().height * this.viewportHeightRatio;
        for (var sa = 0; sa < qa.length; sa++) {
            var ta = qa[sa], ua = this.getStoryID(ta), va = ba(ta);
            if (ua && va.y + va.height < ra && this.hasBeenVisible(ua) && (k.hasClass(ta, "_50mx") || k.hasClass(ta, "_2z-5"))) {
                k.addClass(ta, "_50nb");
                k.removeClass(ta, "_50mx");
                k.removeClass(ta, "_2z-5");
            }
        }
    };
    pa.prototype.markStoryRead = function(qa) {
        "use strict";
        var ra = this.getStoryID(qa);
        if (!ra || this.hasBeenVisible(ra))
            return;
        this.readStoryIDs[ra] = true;
        this.annotatedStoryIDs[ra] = true;
        var sa = this.getDataToLog(qa), ta = y(qa, ['ft']);
        z(sa.ft, ta.ft);
        delete sa.ei;
        this.sendDataToLog(qa, sa, this.banzaiNoDelay, this.banzaiRetry);
        k.addClass(qa, "_x72");
        if (this.vpvDebug)
            k.addClass(qa, "_5m7s");
    };
    pa.prototype.logAnnotatedVPV = function(qa) {
        "use strict";
        var ra = this.getStoryID(qa);
        if (!ra || ra in this.annotatedStoryIDs)
            return;
        this.annotatedStoryIDs[ra] = true;
        var sa = this.getDataToLog(qa), ta = y(qa, ['ft']);
        z(sa.ft, ta.ft);
        delete sa.ei;
        sa.ft.vpv_ft_only = 1;
        this.sendDataToLog(qa, sa, this.banzaiNoDelay, this.banzaiRetry);
    };
    e.exports = pa;
}, null);
__d("GroupViewportTracking", ["DOM", "csx", "ViewportTracking", "Banzai", "$"], function(a, b, c, d, e, f, g, h, i, j, k) {
    for (var l in i)
        if (i.hasOwnProperty(l))
            n[l] = i[l];
    var m = i === null ? null: i.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = i;
    function n() {
        "use strict";
        if (i !== null)
            i.apply(this, arguments);
    }
    n.prototype.getDataFromConfig = function(o) {
        "use strict";
        this.timeout = o.record_delay;
    };
    n.prototype.getTimeout = function() {
        "use strict";
        return this.timeout;
    };
    n.prototype.getAllStories = function() {
        "use strict";
        return g.scry(k('pagelet_group_mall'), "._5pat");
    };
    n.prototype.getStoryID = function(o) {
        "use strict";
        var p = JSON.parse(o.getAttribute('data-ft'));
        return p.id;
    };
    n.prototype.getDataToLog = function(o) {
        "use strict";
        return JSON.parse(o.getAttribute('data-ft'));
    };
    n.prototype.sendDataToLog = function(o, p) {
        "use strict";
        if (this.useBanzai)
            j.post('group_feed_tracking', p);
    };
    e.exports.init = function(o) {
        n.instance = new n();
        n.instance.init(o);
    };
    e.exports.getInstance = function() {
        return n.instance;
    };
}, null);
__d("BookmarkFeedSorter", ["Run"], function(a, b, c, d, e, f, g) {
    var h, i = {
        init: function(j) {
            h = j;
            g.onLeave(function() {
                h = null;
            });
        },
        setChecked: function(j) {
            if (h)
                h.setValue(j);
        }
    };
    e.exports = i;
}, null);
__d("LitestandComposer", ["Animation", "Arbiter", "ComposerXController", "ComposerXMarauderLogger", "DOM", "Run", "SubscriptionsHandler", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = null;
    n(['LitestandStream'], function(s) {
        return o = s;
    });
    var p = 600;
    function q(s, t) {
        s && i.reset(s);
        if (!o ||!t)
            return;
        k.prependContent(o.getStreamRoot(), t);
        new g(t).from('opacity', 0).to('opacity', 1).duration(p).go();
        j.logCompleted(s);
    }
    var r = {
        initComposer: function(s) {
            var t = new m();
            t.addSubscriptions(h.subscribe('LitestandComposer/publish', function(u, v) {
                if (v.composer_id === s)
                    q(s, v.markup);
            }.bind(this)));
            l.onLeave(function() {
                t.release();
            });
        }
    };
    e.exports = r;
}, null);
__d("MercuryLeftNav", ["Arbiter", "MessagingTag", "NavigationMessage", "MercuryThreadInformer", "MercuryUnreadState"], function(a, b, c, d, e, f, g, h, i) {
    var j = b('MercuryThreadInformer').get(), k = b('MercuryUnreadState').get(), l = false;
    function m() {
        var o = k.getUnreadCount(h.INBOX);
        g.inform(i.NAVIGATION_COUNT_UPDATE, {
            key: 'inbox',
            hide: true
        });
        g.inform(i.NAVIGATION_COUNT_UPDATE, {
            key: 'inbox',
            count: o
        });
    }
    var n = {
        bootstrap: function() {
            if (l)
                return;
            j.subscribe('unread-updated', m);
            l = true;
        }
    };
    e.exports = n;
}, null);
__d("FbFeedKeyboardController", ["CSS", "DOM", "DOMQuery", "FeedBaseKeyboardController", "Focus", "JSXDOM", "Parent", "FbFeedHighlight", "csx", "cx", "ge", "getActiveElement"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s(x) {
        if (x.previousElementSibling)
            return x.previousElementSibling;
        x = x.previousSibling;
        while (x&&!h.isElementNode(x))
            x = x.previousSibling;
        return x || null;
    }
    function t(x) {
        if (x.nextElementSibling)
            return x.nextElementSibling;
        x = x.nextSibling;
        while (x&&!h.isElementNode(x))
            x = x.nextSibling;
        return x || null;
    }
    for (var u in j)
        if (j.hasOwnProperty(u))
            w[u] = j[u];
    var v = j === null ? null: j.prototype;
    w.prototype = Object.create(v);
    w.prototype.constructor = w;
    w.__superConstructor__ = j;
    function w() {
        "use strict";
        if (j !== null)
            j.apply(this, arguments);
    }
    w.prototype.getStories = function(x) {
        "use strict";
        return h.scry(x || this.root, "._5jmm");
    };
    w.prototype.isHoldoutStory = function(x) {
        "use strict";
        return !!x && g.hasClass(x, 'holdoutAdStory');
    };
    w.prototype.isRelevantStory = function(x) {
        "use strict";
        return i.isElementNode(x)&&!this.isHoldoutStory(x);
    };
    w.prototype.isStory = function(x) {
        "use strict";
        return g.hasClass(x, "_5jmm");
    };
    w.prototype.clickLike = function() {
        "use strict";
        this.click('.UFILikeLink');
        var x = this.getParentStory(r());
        if (x) {
            var y = h.scry(x, '.UFILikeLink');
            for (var z = 0; z < y.length; z++)
                if (!g.hasClass(y[z], 'accessible_elem'))
                    k.setWithoutOutline(y[z]);
        }
    };
    w.prototype.clickComment = function() {
        "use strict";
        this.click('.comment_link');
    };
    w.prototype.clickShare = function() {
        "use strict";
        this.click('.share_action_link');
    };
    w.prototype.clickSeeMore = function() {
        "use strict";
        this.click('.see_more_link');
    };
    w.prototype.clickLeft = function() {
        "use strict";
        this.click("._1mri");
    };
    w.prototype.clickRight = function() {
        "use strict";
        this.click("._2fu-");
    };
    w.prototype.openAttachment = function() {
        "use strict";
        this.click("._5dec", "a._52c6", "._4-eo", '.uiVideoThumb');
    };
    w.prototype.getHeadline = function(x) {
        "use strict";
        return i.scry(x, "h5._5pbw")[0];
    };
    w.prototype.getPreviousSibling = function(x) {
        "use strict";
        var y = s(x);
        if (y && this.getParentStory(y))
            return y;
        y = null;
        var z = m.byClass(x, "_5pcb");
        if (z) {
            var aa = h.scry(z, "._5jmm"), ba = aa.indexOf(x);
            while (ba>-1) {
                if (ba === 0) {
                    y = q('pagelet_composer');
                    y = y && m.byClass(y, "_5jmm");
                } else if (ba > 0) {
                    y = aa[ba - 1];
                    if (y.offsetHeight > 0)
                        break;
                }
                ba--;
            }
        }
        return y || this.selected;
    };
    w.prototype.getPreviousStory = function(x) {
        "use strict";
        var y = this.getPreviousSibling(x);
        while (y&&!this.isStory(y))
            y = this.getPreviousSibling(y);
        return y;
    };
    w.prototype.getParentStory = function(x) {
        "use strict";
        return m.byClass(x, "_5jmm");
    };
    w.prototype.getNextSibling = function(x) {
        "use strict";
        var y = t(x);
        if (y && this.getParentStory(y))
            return y;
        y = null;
        var z = m.byClass(x, "_5pcb");
        if (z) {
            var aa = h.scry(z, "._5jmm"), ba = aa.indexOf(x);
            if (ba>-1) {
                y = aa[++ba];
                while (y && y.offsetHeight === 0)
                    y = aa[++ba];
            }
        } else if (q('pagelet_composer', x))
            y = h.scry(document, "div._5pcb ._5jmm")[0];
        return y || this.selected;
    };
    w.prototype.getNextStory = function(x) {
        "use strict";
        var y = this.getNextSibling(x);
        while (y&&!this.isStory(y))
            y = this.getNextSibling(y);
        return y;
    };
    w.prototype.setSelected = function(x, y) {
        "use strict";
        if (x) {
            var z = "_5qdu", aa = i.scry(x, "._5qdu");
            if (!aa.length && y)
                h.prependContent(x, l.div({
                    className: z
                }));
        }
        if (y) {
            this.selected && this.setTabindexOnStory(this.selected, '-1');
            this.selected && g.removeClass(this.selected, "_5qdv");
            this.selected = x;
            x && this.setTabindexOnStory(x, '0');
            x && g.addClass(x, "_5qdv");
            n.highlightSingle(x);
        }
    };
    w.init = function(x, y) {
        "use strict";
        new w(x, y);
    };
    e.exports = w;
}, null);
