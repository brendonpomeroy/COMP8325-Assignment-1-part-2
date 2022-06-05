/*!CK:2719123656!*/
/*1415832879,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["kymDO"]);
}

__d("TagExpansionButtonConfig", [], function(a, b, c, d, e, f) {
    e.exports = {
        FRIENDS_OF_TAGGED: "friends_of_tagged",
        TAGGED_ONLY: "tagged_only"
    };
}, null);
__d("XAdPreferencesCategoryInfoControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ads\/preferences\/category_info\/", {
        ad_id: {
            type: "Int",
            required: true
        },
        category_fbid: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("AdsPreferencesInterestListItem.react", ["AsyncRequest", "AdPreferencesDesktopStrings", "Layout.react", "React", "ReactLayeredComponentMixin", "XAdPreferencesCategoryInfoControllerURIBuilder", "XUIContextualDialog.react", "XUIContextualDialogTitle.react", "XUIContextualDialogBody.react", "XUIGlyph.react", "XUIText.react", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = i.Column, u = i.FillColumn, v = j.createClass({
        displayName: "AdsPreferencesInterestListItem",
        mixins: [k],
        propTypes: {
            adID: j.PropTypes.number.isRequired,
            interest: j.PropTypes.object.isRequired,
            isListItem: j.PropTypes.bool.isRequired,
            onInterestClick: j.PropTypes.func.isRequired,
            removed: j.PropTypes.bool.isRequired,
            setDialog: j.PropTypes.func
        },
        getInitialState: function() {
            return {
                xHover: false,
                iHover: false,
                interestHover: false,
                enterTimeout: - 1,
                suggestions: {}
            };
        },
        _xHover: function(event) {
            this.setState({
                xHover: !this.state.xHover
            });
        },
        _xOver: function(event) {
            this.setState({
                xHover: true
            });
        },
        _iHover: function(event) {
            this.setState({
                iHover: !this.state.iHover
            });
        },
        _interestHover: function(w) {
            this.setState({
                interestHover: w
            });
        },
        _interestEnter: function(event, w, x) {
            if (x) {
                this._interestHover(true);
            } else {
                var y = setTimeout(this._interestEnter.bind(this, true, true, true), 250);
                this.setState({
                    enterTimeout: y
                });
            }
        },
        _interestLeave: function(event) {
            this._interestHover(false);
            clearTimeout(this.state.enterTimeout);
        },
        _handleInterestClick: function(event) {
            var w = this.refs['toggle_' + this.props.interest.id];
            this.props.onInterestClick(this.props.interest, this.props.removed, w);
        },
        _onInterestTextClick: function(event) {
            if (this.state.suggestions > 0 && this.props.setDialog) {
                this.props.setDialog(this.props.interest, this.state.suggestions);
            } else {
                var w = new l().setInt('ad_id', this.props.adID).setInt('category_fbid', this.props.interest.id).getURI();
                new g(w).setHandler(function(x) {
                    var y = x.payload, z = y.suggestions, aa = this.props.interest;
                    if (!aa.description)
                        aa.description = "This is a preference you added.";
                    this.setState({
                        suggestions: z
                    });
                    if (this.props.setDialog)
                        this.props.setDialog(aa, y.suggestions);
                }.bind(this)).send();
            }
        },
        render: function() {
            var w = ((this.state.iHover ? "hidden_elem" : '') + (' ' + "_2imo")), x = ((!this.state.iHover ? "hidden_elem" : '') + (' ' + "_2imo")), y = ((this.state.interestHover && this.props.isListItem ? "_2imp" : '') + (!this.state.interestHover && this.props.isListItem ? ' ' + "_2imq" : '') + (this.props.removed ? ' ' + "hidden_elem" : '')), z=!this.props.isListItem ? null : j.createElement("span", {
                className: y,
                ref: this.props.interest.name,
                onMouseEnter: this._iHover,
                onMouseLeave: this._iHover
            }, j.createElement(p, {
                className: w,
                image: p.INFO_SOLID,
                shade: "light",
                size: "large"
            }), j.createElement(p, {
                className: x,
                image: p.INFO_SOLID,
                shade: "dark",
                size: "large"
            })), aa = j.createElement("span", {
                className: y,
                onMouseEnter: this._xHover,
                onMouseLeave: this._xHover,
                onMouseMove: this._xOver
            }, j.createElement(p, {
                className: ((this.state.xHover ? "hidden_elem" : '')),
                image: p.CROSS,
                shade: "dark"
            }), j.createElement(p, {
                className: ((!this.state.xHover ? "hidden_elem" : '')),
                image: p.CROSS,
                shade: "accent"
            })), ba = j.createElement("div", {
                className: "_2imr"
            }, j.createElement("a", {
                href: "#"
            }, "Undo")), ca = j.createElement(q, {
                className: ((this.props.removed ? "_2ims" : '')),
                size: "small",
                weight: "bold",
                "data-fbid": this.props.interest.id
            }, this.props.interest.name), da = (!this.props.isListItem || this.props.removed) ? ca : j.createElement("a", {
                onClick: this._onInterestTextClick
            }, ca), ea = (("_2imt") + (!this.props.isListItem ? ' ' + "_2imu" : ''));
            return (j.createElement("li", {
                className: ea,
                onMouseEnter: this._interestEnter,
                onMouseLeave: this._interestLeave
            }, j.createElement(i, null, j.createElement(u, null, da, j.createElement("span", {
                className: "_2imv"
            }, z)), j.createElement(t, {
                className: "mlm"
            }, j.createElement("div", {
                onClick: this._handleInterestClick,
                className: "_2imw",
                ref: 'toggle_' + this.props.interest.id
            }, !this.props.removed ? aa : ba)))));
        },
        renderLayers: function() {
            var w = this.props.interest.description ? this.props.interest.description: "This is a preference you added.";
            return {
                contextualDialog: j.createElement(m, {
                    contextRef: this.props.interest.name,
                    shown: this.state.iHover,
                    position: "above",
                    focusContextOnHide: false,
                    width: m.WIDTH.NORMAL
                }, j.createElement(n, null, h.about_this_ads_preference), j.createElement(o, null, w))
            };
        }
    });
    e.exports = v;
}, null);
__d("XAdPreferencesInterestsWriteControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ads\/preferences\/edit_interests\/", {
        ad_id: {
            type: "Int",
            required: true
        },
        action: {
            type: "Enum",
            required: true
        },
        type: {
            type: "Enum",
            required: true
        },
        fbids: {
            type: "IntVector",
            required: true
        }
    });
}, null);
__d("XAdPreferencesNUXControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ads\/preferences\/nux\/", {
        type: {
            type: "String",
            required: true
        }
    });
}, null);
__d("XAdsPreferencesFeedbackControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ads\/preferences\/feeedback\/", {
        ad_id: {
            type: "Int",
            required: true
        },
        favorite: {
            type: "Enum",
            required: true
        }
    });
}, null);
__d("AdsPrefs", ["AsyncRequest", "AdsPreferencesInterestListItem.react", "CSS", "DOM", "React", "Event", "tidyEvent", "cx", "csx", "XAdPreferencesInterestsWriteControllerURIBuilder", "XAdPreferencesNUXControllerURIBuilder", "XAdsPreferencesFeedbackControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s(w, x) {
        i.toggleClass(w, "hidden_elem");
        var y = i.hasClass(w, "hidden_elem") ? 'ad_useful': 'ad_neutral', z = new r().setInt('ad_id', x).setEnum('favorite', y).getURI(), aa = new g(z);
        aa.send();
    }
    function t() {
        var w = new q().setString('type', 'interest_nux_ts').getURI();
        new g(w).send();
    }
    function u(w, x, y) {
        var z = x ? 'add': 'del', aa = new p().setInt('ad_id', w.adID).setEnum('action', z).setEnum('type', 'interest').setIntVector('fbids', [w.id]).getURI();
        new g(aa).send();
        k.render(k.createElement(h, {
            className: "_589n",
            adID: w.adID,
            interest: w,
            isListItem: false,
            onInterestClick: u,
            removed: !x
        }), document.getElementById(w.rootID));
        if (w.dialog && y != null) {
            t();
            w.dialog.setContext(y);
            w.dialog.show();
        }
    }
    var v = {
        initRHCFeedback: function(w, x, y) {
            m(l.listen(x, 'click', function(z) {
                s(y, w);
                z.kill();
            }));
        },
        createListElement: function(w, x, y, z, aa, ba) {
            var ca = {
                id: x,
                name: y,
                adID: w,
                rootID: z,
                dialog: ba
            };
            k.render(k.createElement(h, {
                className: "_589n",
                adID: w,
                interest: ca,
                isListItem: false,
                onInterestClick: u,
                removed: false
            }), document.getElementById(z));
        },
        initExpandable: function(w) {
            m(l.listen(w, 'click', function(x) {
                var y = j.scry(w, "div._2fdq")[0], z = j.scry(w, "._4r43")[0], aa = j.scry(w, "._1uhj")[0];
                i.toggleClass(z, 'hidden_elem');
                i.toggleClass(aa, 'hidden_elem');
                i.toggleClass(y, 'hidden_elem');
            }));
        },
        toggleFavorite: function(w) {
            var x = j.find(w.getRoot(), 'img');
            s(x, w.getLabel());
        }
    };
    e.exports = v;
}, null);
__d("EntstreamFeedObject", ["CSS", "Parent", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        getRoot: function(k) {
            return h.byClass(k, "_5jmm");
        },
        getHscrollOuterRootIfAvailable: function(k) {
            var l = k;
            if (g.hasClass(l, "_170y"))
                l = j.getRoot(l.parentNode);
            return l;
        }
    };
    e.exports = j;
}, null);
__d("EntstreamFeedObjectFollowup", ["CSS", "DOM", "EntstreamFeedObject", "Event", "csx", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = {
        getFollowup: function(o) {
            var p = h.scry(o, "._5lum");
            if (!p.length)
                p = h.scry(o.parentNode, "._5lum");
            return p ? p[0] : null;
        },
        initCloseButton: function(o) {
            var p = h.find(o, "._5xsl"), q = j.listen(p, 'click', function() {
                q.remove();
                h.remove(o);
            });
            o.listener = q;
        },
        stopListenCloseButton: function(o) {
            if (o.listener)
                o.listener.remove();
        },
        addFollowup: function(o, p, q) {
            var r = g.hasClass(o, "_5pat"), s = h.create('div', {
                className: "_5lum"
            });
            if (r) {
                g.addClass(s, "_5pau");
            } else 
                g.addClass(s, "_1f84");
            if (q)
                g.addClass(s, q);
            if (p) {
                h.appendContent(s, p);
                this.initCloseButton(s);
                h.insertBefore(o, s);
            } else {
                var t = n.getFollowup(o);
                if (t)
                    this.removeFollowup(t);
                h.prependContent(o, s);
            }
            return s;
        },
        removeFollowup: function(o) {
            var p = n.getFollowup(o);
            this.stopListenCloseButton(p);
            h.remove(p);
        },
        appendToFollowup: function(o, p) {
            var q = i.getRoot(m(o)), r = n.getFollowup(q);
            h.appendContent(r, p);
        },
        getFollowupMessage: function(o) {
            var p = h.find(o, "._1f86");
            return p;
        },
        replaceFollowupMessage: function(o, p) {
            this.stopListenCloseButton(o);
            var q = n.getFollowupMessage(o);
            h.replace(q, p);
            this.initCloseButton(o);
        }
    };
    e.exports = n;
}, null);
__d("EntstreamFeedObjectDigest", ["DOM", "EntstreamFeedObject", "EntstreamFeedObjectFollowup", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {
        toggleDigest: function(m, n, o) {
            var p = m.getValue() === 'digest_on' ? o.digest_off: o.digest_on, q = h.getRoot(k(n)), r = i.getFollowup(q);
            if (r) {
                var s = i.getFollowupMessage(r);
                g.replace(s, p);
            } else 
                i.addFollowup(q, p, "_521o");
        }
    };
    e.exports = l;
}, null);
__d("EntstreamFeedObjectFollow", ["EntstreamFeedObject", "EntstreamFeedObjectFollowup", "Event", "Parent", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        toggleFollow: function(n, o, p) {
            var q = n.getValue() == 'follow_post' ? p.follow_post: p.unfollow_post, r = g.getRoot(l(o)), s = h.getFollowup(r);
            if (s) {
                h.replaceFollowupMessage(s, q);
            } else {
                s = h.addFollowup(r, q, "_521o") || h.getFollowup(r);
                i.listen(s, 'click', function(event) {
                    var t = event.getTarget(), u = "_1f89";
                    if (j.byClass(t, u)) {
                        m.toggleFollow(n, o, p);
                        n.toggleMenuItem();
                    }
                });
            }
        }
    };
    e.exports = m;
}, null);
__d("EntstreamFeedObjectHide", ["Event", "CSS", "EntstreamFeedObject", "EntstreamFeedObjectFollowup", "Focus", "TabbableElements", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = {
        hide: function(p, q) {
            var r = i.getRoot(n(p));
            r = i.getHscrollOuterRootIfAvailable(r);
            j.addFollowup(r, q);
            h.addClass(r, "_i6m");
            o.setFocus(r);
        },
        registerUnhide: function(p, q) {
            g.listen(p, 'click', function() {
                if (q)
                    q.send();
                var r = i.getRoot(p);
                r = i.getHscrollOuterRootIfAvailable(r);
                o.unhide(r);
            });
        },
        setFocus: function(p) {
            var q = l.find(p);
            if (q && q[0])
                k.setWithoutOutline(q[0]);
        },
        unhide: function(p) {
            j.removeFollowup(p);
            h.removeClass(p, "_i6m");
            o.setFocus(p);
        }
    };
    e.exports = o;
}, null);
__d("YouTube", ["CSS", "DOM", "DOMQuery", "Event", "Keys", "LitestandStoryInsertionStatus", "SubscriptionsHandler", "UserAgent_DEPRECATED", "Focus", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    function r(s, t, u) {
        "use strict";
        var v = new m();
        v.addSubscriptions(j.listen(s, 'load', this.listening.bind(this)), l.registerBlocker(function() {
            return this.playerState === r.STATE_PLAYING;
        }.bind(this)));
        p(this, {
            iframe: s,
            autofocus: t,
            autoplay: u,
            playerState: r.STATE_UNSTARTED,
            muted: false,
            volume: 100,
            currentTime: 0,
            timer: null,
            handler: v
        });
        if (t)
            o.set(s);
    }
    r.prototype.id = function() {
        "use strict";
        return this.iframe.id;
    };
    r.prototype.post = function(s) {
        "use strict";
        s.id = this.id();
        this.iframe.contentWindow.postMessage(JSON.stringify(s), '*');
    };
    r.prototype.listening = function() {
        "use strict";
        this.post({
            event: 'listening'
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(this.listening.bind(this), 100);
    };
    r.prototype.update = function(s) {
        "use strict";
        if (s.event == 'initialDelivery') {
            clearTimeout(this.timer);
            if ((n.webkit() || n.firefox()) && s.info && s.info.debugText.match(/flashVersion/)) {
                this.addAccessibleButtons();
                if (n.firefox())
                    this.iframe.tabIndex =- 1;
            }
        }
        if (s.info)
            ['playerState', 'muted', 'volume', 'currentTime'].forEach(function(t) {
            if (s.info.hasOwnProperty(t))
                this[t] = s.info[t];
        }.bind(this));
    };
    r.prototype.togglePlay = function() {
        "use strict";
        this.post({
            event: 'command',
            func: (this.playerState == r.STATE_PLAYING) ? 'pauseVideo': 'playVideo'
        });
    };
    r.prototype.toggleMute = function() {
        "use strict";
        this.post({
            event: 'command',
            func: this.muted ? 'unMute': 'mute'
        });
    };
    r.prototype.addAccessibleButtons = function() {
        "use strict";
        this.addAccessibleButton('Mute', "_505m", this.toggleMute.bind(this));
        this.addAccessibleButton('Play', "_505n", this.togglePlay.bind(this));
    };
    r.prototype.addAccessibleButton = function(s, t, u) {
        "use strict";
        var v = h.create('button', {
            'class': t,
            tabindex: 0
        }, s);
        h.insertAfter(this.iframe, v);
        this.handler.addSubscriptions(j.listen(v, 'click', u), j.listen(v, 'mouseover', g.hide.bind(null, v)), j.listen(this.iframe, 'mouseout', g.show.bind(null, v)), j.listen(v, 'focus', function() {
            if (!this.autoplay && this.playerState == r.STATE_UNSTARTED) {
                this.post({
                    event: 'command',
                    func: 'playVideo'
                });
                this.post({
                    event: 'command',
                    func: 'pauseVideo'
                });
            }
        }.bind(this)), j.listen(v, 'keydown', function(w) {
            switch (w.keyCode) {
            case k.UP:
            case k.DOWN:
                this.post({
                    event: 'command',
                    func: 'setVolume',
                    args: [this.volume + ((w.keyCode == k.UP) ? 10 : - 10)]
                });
                w.prevent();
                break;
            case k.RIGHT:
            case k.LEFT:
                this.post({
                    event: 'command',
                    func: 'seekTo',
                    args: [this.currentTime + ((w.keyCode == k.RIGHT) ? 10 : - 10)]
                });
                w.prevent();
                break;
            }
        }.bind(this)));
        return v;
    };
    r.prototype.destroy = function() {
        "use strict";
        this.handler.release();
        delete r.instances[this.id()];
        if (!Object.keys(r.instances).length)
            r.handler.remove();
    };
    r.register = function(s, t, u) {
        "use strict";
        if (!window.postMessage)
            return;
        if (!Object.keys(r.instances).length)
            r.handler = j.listen(window, 'message', function(w) {
                try {
                    var x = JSON.parse(w.data);
                    if (r.instances[x.id])
                        r.instances[x.id].update(x);
                    } catch (w) {}
                });
        var v = new r(i.find(s, 'iframe'), t, u);
        r.instances[v.id()] = v;
    };
    p(r, {
        STATE_UNSTARTED: - 1,
        STATE_PLAYING: 1,
        instances: {},
        handler: null
    });
    e.exports = r;
}, null);
__d("EntstreamHomeFeedObjectHide", ["AsyncRequest", "CSS", "DOM", "EntstreamFeedObject", "EntstreamFeedObjectHide", "Event", "TrackingNodes", "YouTube", "csx", "cx", "ge", "tx", "$"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = {
        stopVideo: function(u) {
            var v = s(u), w = i.find(v, "^._5jmm"), x = i.scry(w, 'iframe');
            for (var y = 0; y < x.length; y++) {
                var z = n.instances[i.getID(x[y])];
                if (z && (z.playerState === n.STATE_PLAYING))
                    z.togglePlay();
            }
            var aa = i.scry(w, 'video');
            for (var ba = 0; ba < aa.length; ba++)
                if (('paused' in aa[ba])&&!aa[ba].paused)
                    if (typeof aa[ba].pause === 'function')
                        aa[ba].pause();
        },
        hide: function(u, v, w, x) {
            t.stopVideo(u);
            var y = j.getRoot(q(u)), z = h.hasClass(y, "_5pat"), aa;
            if (z && w == 'afrostart') {
                aa = '';
            } else {
                var ba = w == 'hide' || w == 'afrostart' ? "This story is now hidden from your News Feed.": "This story has been marked as spam.", ca = w == 'hide' || w == 'afrostart' ? "Unhide": "Undo", da = m.getTrackingInfo(m.types.UNHIDE_LINK), ea = i.create('a', {
                    href: '#',
                    'data-ft': da
                }, ca), fa = {};
                if (v)
                    fa.token = v;
                if (x)
                    fa.hideable_token = x;
                var ga = new g().setURI('/ajax/entstream/home/story/unhide').setMethod('POST').setData(fa).setRelativeTo(ea);
                k.registerUnhide(ea, ga);
                aa = i.create('div', {
                    'class': "_1f86"
                }, [ba, ' ', ea]);
            }
            k.hide(u, aa);
        },
        registerHide: function(u, v, w, x) {
            l.listen(u, 'click', function() {
                t.hide(u.getAttribute('id'), v, w, x);
            });
        }
    };
    e.exports = t;
}, null);
__d("MenuTogglingItem", ["DOM", "MenuItem"], function(a, b, c, d, e, f, g, h) {
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    function k() {
        "use strict";
        if (h !== null)
            h.apply(this, arguments);
    }
    k.prototype.handleClick = function() {
        "use strict";
        this.toggleMenuItem();
        return j.handleClick.call(this);
    };
    k.prototype.toggleMenuItem = function() {
        "use strict";
        this._swap('ajaxify', 'toggleAjaxify');
        this._swap('value', 'toggleValue');
        this._toggleItemText();
    };
    k.prototype.setValue = function(l) {
        "use strict";
        this._data.value = l;
    };
    k.prototype._toggleItemText = function() {
        "use strict";
        var l = this._anchor;
        this._swap('markup', 'toggleMarkup');
        g.replace(l, this._renderItemContent());
    };
    k.prototype._swap = function(l, m) {
        "use strict";
        var n = this._data[l];
        this._data[l] = this._data[m];
        this._data[m] = n;
    };
    e.exports = k;
}, null);
__d("EntstreamHomeFeedObjectOptionsMenu", ["AdsPrefs", "BanzaiLogger", "CSS", "DOM", "EntstreamFeedObject", "EntstreamFeedObjectDigest", "EntstreamFeedObjectFollow", "EntstreamHomeFeedObjectHide", "MenuTogglingItem", "UFICentralUpdates", "UFIConstants", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    function t(u, v, w, x, y, z, aa, ba, ca, da) {
        u.subscribe('itemclick', function(ea, fa) {
            var ga = fa.item.getRoot(), ha = ga.getAttribute('data-feed-option-name'), ia = i.hasClass(ga, "_50o2") || i.hasClass(ga, "_50o0");
            if (ha)
                h.log('FeedStoryOptionMenuLoggerConfig', {
                    option_name: ha,
                    is_secondary: ia ? 1: 0,
                    event_type: 'clk',
                    feed_location: aa,
                    session_id: ba,
                    is_sponsored: ca,
                    is_self_story: da
                });
            if (typeof fa.item.getValue !== 'function')
                return;
            switch (fa.item.getValue()) {
            case 'hide':
            case 'markspam':
            case 'afrostart':
                n.hide(v, w, fa.item.getValue(), y);
                break;
            case 'afro_direct_action':
                var ja = k.getRoot(s(v));
                ja = k.getHscrollOuterRootIfAvailable(ja);
                var ka = fa.item.getRoot().getAttribute('data-optimistic-hide');
                if (ka) {
                    var la = j.create('div', {
                        className: "_5lum"
                    });
                    j.appendContent(la, fa.item.getRoot().getAttribute('data-action-in-progress-string'));
                    j.insertBefore(ja.firstChild, la);
                    i.addClass(ja, "_i6m");
                }
                break;
            case 'follow_post':
            case 'unfollow_post':
                m.toggleFollow(fa.item, v, x);
                break;
            case 'ad_useful':
            case 'ad_neutral':
                g.toggleFavorite(fa.item);
                ea.kill();
                break;
            case 'digest_on':
            case 'digest_off':
                l.toggleDigest(fa.item, v, x);
                break;
            }
        }.bind(this));
        u.subscribe('show', function() {
            h.log('FeedStoryOptionMenuLoggerConfig', {
                option_name: 'root',
                event_type: 'clk',
                feed_location: aa,
                session_id: ba,
                is_sponsored: ca,
                is_self_story: da
            });
            var ea = i.hasClass(u.getRoot(), "_50o1"), fa = i.hasClass(u.getRoot(), "_50n_");
            u.forEachItem(function(ga) {
                var ha = ga.getRoot(), ia = ha.getAttribute('data-feed-option-name'), ja = i.hasClass(ha, "_50o2"), ka = i.hasClass(ha, "_50o0"), la = i.hasClass(ha, "_50nd"), ma = i.hasClass(ha, "_50ne"), na = (ea && ja) || (fa && ka) || (!ea && la) || (!fa && ma), oa = ja || ka;
                if (ia&&!na)
                    h.log('FeedStoryOptionMenuLoggerConfig', {
                        option_name: ia,
                        is_secondary: oa ? 1: 0,
                        event_type: 'imp',
                        feed_location: aa,
                        session_id: ba,
                        is_sponsored: ca,
                        is_self_story: da
                    });
                ga.onShow();
            });
        });
        p.subscribe('update-actions', function(ea, fa) {
            if (fa.payloadsource === q.UFIPayloadSourceType.USER_ACTION) {
                var ga = fa.actions || [];
                for (var ha = 0; ha < ga.length; ha++)
                    if (ga[ha].actiontype === q.UFIActionType.ADD_COMMENT_ACTION) {
                        if (ga[ha].feedbackfbid != z)
                            return;
                            u.getRoot();
                            u.forEachItem(function(ia) {
                                if (ia instanceof o && ia.getValue() === 'unfollow_post')
                                    ia.handleClick();
                                });
                    }
            }
        });
    }
    e.exports = t;
}, null);
__d("MetaComposerEdDialog", ["ARIA", "Animation", "Arbiter", "AsyncRequest", "DOM", "Ease", "Parent", "SelectorDeprecated", "Vector", "copyProperties", "getElementText"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = null;
    function s(t) {
        this._dialog = t.dialog;
        this.config = t;
        this._init();
    }
    s.init = function(t) {
        if (r) {
            r.config.show_audience = t.show_audience;
            t.dialog.destroy();
            return;
        }
        r = new s(t);
    };
    p(s.prototype, {
        _init: function() {
            i.subscribe('ComposerXStatusAttachment/ready', function() {
                if (this.config.show_audience) {
                    this._sendEducationRequest({}, '/ajax/composer/audience/education', this._handlerCustomDuration.bind(this, 6000));
                    this.config.show_audience = false;
                }
            }.bind(this));
            if (this.config.show_sticky)
                i.subscribe('composer/mutate', function(t, u) {
                    this._sendEducationRequest({
                        sticky_num: this.config.n_sticky_shown
                    }, '/ajax/composer/audience/sticky_education');
                }.bind(this));
            if (this.config.show_tags)
                i.subscribe('SelectedPrivacyOption/changed', function(t, u) {
                    this._sendEducationRequest({
                        ids: u.tags,
                        from: 'WithTagger',
                        hasEvent: u.hasEvent,
                        type: u.privacy,
                        tag_num: this.config.n_tag_shown
                    }, '/ajax/composer/audience/tag_education', this._handler.bind(this));
                }.bind(this));
            n.subscribe('open', this._killAnim.bind(this));
        },
        _sendEducationRequest: function(t, u, v) {
            if (!this._updateDialogContext())
                return;
            this._async && this._async.abort();
            this._async = new j(u);
            this._async.setData(t).setHandler(v).send();
        },
        _updateDialogContext: function() {
            var t = k.scry(document.body, 'div.composerAudienceWrapper'), u, v;
            for (var w = 0; w < t.length; w++) {
                u = t[w];
                v = o.getElementPosition(u);
                if (u && v.x > 0 && v.y > 0) {
                    this._dialog.setContext(u);
                    return true;
                }
            }
            return false;
        },
        _handler: function(t) {
            this._handlerCustomDuration(1500, t);
        },
        _handlerCustomDuration: function(t, u) {
            var v = u.payload;
            if (!v ||!this._updateDialogContext())
                return;
            var w = this._dialog.getContent().firstChild;
            k.setContent(w, v);
            g.announce(q(w));
            this._dialog.show();
            var x = m.byClass(w, 'metaComposerUserEd');
            if (this._anim) {
                this._anim.stop();
                this._anim = new h(x);
            } else 
                this._anim = new h(x).from('opacity', 0);
            this._anim.to('opacity', 1).ease(l.sineOut).checkpoint().duration(t).checkpoint().to('opacity', 0).ease(l.sineOut).checkpoint().ondone(this._killAnim.bind(this)).go();
        },
        _killAnim: function(t, u) {
            if (this._anim) {
                this._dialog.hide();
                this._anim.stop();
                this._anim = null;
            }
        }
    });
    e.exports = s;
}, null);
__d("PrivacySelectorOptionNew", ["CSS", "DOM", "DOMQuery", "JSXDOM", "MenuSelectableItem", "PrivacyConst", "csx", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    for (var p in k)
        if (k.hasOwnProperty(p))
            r[p] = k[p];
    var q = k === null ? null: k.prototype;
    r.prototype = Object.create(q);
    r.prototype.constructor = r;
    r.__superConstructor__ = k;
    function r(s) {
        "use strict";
        k.call(this, s);
        this.updateAfterTagExpansion(this._data.hasTags);
    }
    r.prototype.getTooltip = function() {
        "use strict";
        return this._data.tooltip;
    };
    r.prototype.getPostParam = function() {
        "use strict";
        return this._data.postParam;
    };
    r.prototype.getTriggerIcon = function() {
        "use strict";
        return this._data.triggerIcon;
    };
    r.prototype.isPublic = function() {
        "use strict";
        return this.getPostParam() === l.PostParam.EVERYONE;
    };
    r.prototype.isFriends = function() {
        "use strict";
        return this.getPostParam() === l.PostParam.FRIENDS;
    };
    r.prototype.isOnlyMe = function() {
        "use strict";
        return this.getPostParam() === l.PostParam.ONLY_ME;
    };
    r.prototype.isBasicOption = function() {
        "use strict";
        return true;
    };
    r.prototype.isCustomOption = function() {
        "use strict";
        return false;
    };
    r.prototype.getTagExpansionBehavior = function() {
        "use strict";
        return this._data.tagExpansionBehavior;
    };
    r.prototype.getBaseValue = function() {
        "use strict";
        return this._data.baseValue;
    };
    r.prototype.getIndex = function() {
        "use strict";
        return this._data.value;
    };
    r.prototype.getLoggingEventName = function() {
        "use strict";
        switch (this.getPostParam()) {
        case l.PostParam.FRIENDS:
            return 'click_friends';
        case l.PostParam.EVERYONE:
            return 'click_everyone';
        case l.PostParam.ONLY_ME:
            return 'click_only_me';
        case l.PostParam.FRIENDS_MINUS_ACQUAINTANCES:
            return 'click_friends_except_acquaintances';
        case l.PostParam.FB_ONLY:
            return 'click_fb_only';
        default:
            return 'click_other';
        }
    };
    r.prototype.updateAfterTagExpansion = function(s) {
        "use strict";
        var t = this._data.baseLabel;
        if (s && this._data.showPlusOnTagExpansion)
            t = o._("{privacyLabel} (+)", [o.param("privacyLabel", this._data.baseLabel)]);
        this._setLabel(t);
        if (s) {
            this._setSubtitle(this._data.optionSubtitleWithTags);
        } else 
            this._setSubtitle(this._data.optionSubtitle);
    };
    r.prototype.isBelowFold = function() {
        "use strict";
        var s = g.hasClass(this.getRoot(), "_3ey_");
        return s;
    };
    r.prototype._setLabel = function(s) {
        "use strict";
        if (!s)
            return;
        var t = i.find(this.getRoot(), "._54nh");
        t && h.setContent(t, s);
        this._data.label = s;
    };
    r.prototype._setSubtitle = function(s) {
        "use strict";
        if (!s)
            return;
        var t = i.find(this.getRoot(), "._48u1");
        t && h.setContent(t, s);
    };
    r.prototype.render = function() {
        "use strict";
        var s = q.render.call(this);
        if (!this._data.isPrimaryOption)
            return s;
        var t = i.find(s, "._54nc");
        t && g.addClass(t, "_48t_");
        var u = h.find(s, "._54nh");
        u && g.addClass(u, "_48u0");
        var v = j.div({
            className: "_48u1"
        }, this._data.optionSubtitle);
        h.appendContent(t, v);
        return s;
    };
    e.exports = r;
}, null);
__d("XPrivacySelectorLoggingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/privacy\/selector\/log\/", {
        event: {
            type: "Enum",
            required: true
        },
        render_location: {
            type: "Int",
            required: true
        },
        content_type: {
            type: "String",
            required: true
        }
    });
}, null);
__d("PrivacySelectorCustomOption", ["AsyncDialog", "AsyncRequest", "DataStore", "PrivacySelectorOptionNew", "XPrivacySelectorLoggingControllerURIBuilder", "XPrivacyCustomDialogControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    for (var m in j)
        if (j.hasOwnProperty(m))
            o[m] = j[m];
    var n = j === null ? null: j.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = j;
    function o(p) {
        "use strict";
        j.call(this, p);
    }
    o.prototype.isBasicOption = function() {
        "use strict";
        return false;
    };
    o.prototype.isCustomOption = function() {
        "use strict";
        return true;
    };
    o.prototype.getSelector = function() {
        "use strict";
        return this._selector;
    };
    o.prototype.setPostParam = function(p) {
        "use strict";
        this._data.postParam = p;
    };
    o.prototype.getLoggingEventName = function() {
        "use strict";
        return 'click_custom';
    };
    o.prototype.openDialog = function(p) {
        "use strict";
        if (typeof this._selector === 'undefined')
            this._selector = p;
        i.set(this._data.id, 'PrivacySelectorCustomOption', this);
        var q = new l().setString('option_id', this._data.id).setString('id', this._data.privacyfbid.toString()).setString('post_param', p.getPostParam()).setString('content_type', p.getContentType()).setInt('render_location', p.getRenderLocation()).setIntVector('tags', p.getTags()).setBool('autosave', this._data.autosave).setBool('limit_community', this._data.limitcommunity).setBool('limit_facebook', this._data.limitfacebook).setBool('limit_fof', this._data.limitfof).setBool('limit_tagexpand', this._data.limittagexpand).setBool('is_new_privacy_selector', true).setString('tag_expansion_button', p.getTagExpansionButton()).getURI(), r = new h(q);
        r.setRelativeTo(p.getTriggerButtonElement());
        g.send(r, function(s) {
            var t = function(u) {
                var v = new k().setEnum('event', u).setInt('render_location', document.getElementsByName('render_location')[0].value).setString('content_type', document.getElementsByName('content_type')[0].value).getURI();
                new h().setURI(v).send();
            };
            s.subscribe('hide', function() {
                p.inform('custom/hide');
                p.inform('selectorFinished');
            });
            s.subscribe('success', function() {
                p.inform('custom/success');
                t('custom_save');
            });
            s.subscribe('cancel', function() {
                p.inform('custom/cancel');
                t('custom_cancel');
            });
        });
    };
    o.customPrivacySave = function(p, q, r) {
        "use strict";
        var s = i.get(p, 'PrivacySelectorCustomOption');
        s.getSelector().updateDataForItemIndex(s.getIndex(), q, r);
        s.getSelector().setValue(s.getIndex());
        i.remove(p, 'PrivacySelectorCustomOption');
    };
    e.exports = o;
}, null);
__d("PrivacySelectableMenu", ["AsyncRequest", "CSS", "Ease", "PrivacySelectorCustomOption", "PrivacySelectorOptionNew", "SelectableMenu", "SelectableMenuUtils", "XPrivacySelectorLoggingControllerURIBuilder", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    for (var p in l)
        if (l.hasOwnProperty(p))
            r[p] = l[p];
    var q = l === null ? null: l.prototype;
    r.prototype = Object.create(q);
    r.prototype.constructor = r;
    r.__superConstructor__ = l;
    function r(s, t) {
        "use strict";
        l.call(this, s, t);
    }
    r.prototype.getItemForIndex = function(s) {
        "use strict";
        for (var t = 0; t < this._items.length; t++) {
            var u = this._items[t];
            if (u instanceof k && u.getIndex() == s)
                return u;
        }
        return null;
    };
    r.prototype.selectDefaultOption = function() {
        "use strict";
        this._items.some(function(s) {
            if (s instanceof k && this._isDefaultOption(s)) {
                this.setValue(s.getIndex());
                return true;
            }
            return false;
        }, this);
    };
    r.prototype.selectOption = function(s) {
        "use strict";
        var t = null, u = this._items.some(function(v) {
            if (v instanceof k&&!v.isCustomOption() && v.getPostParam() == s) {
                this.setValue(v.getIndex());
                return true;
            }
            if (v instanceof j) {
                t = v;
                return false;
            }
            if (this._isMoreOption(v)) {
                this.expandMenu();
                return false;
            }
        }, this);
        if (!u && t) {
            t.setPostParam(s);
            this.setValue(t.getIndex());
        }
    };
    r.prototype._isDefaultOption = function(s) {
        "use strict";
        return h.hasClass(s.getRoot(), "_plx");
    };
    r.prototype._isMoreOption = function(s) {
        "use strict";
        return h.hasClass(s.getRoot(), "_po2");
    };
    r.prototype._handleItemClick = function(s, t) {
        "use strict";
        if (!m.doesItemSupportSelect(s))
            return q._handleItemClick.call(this, s, t);
        if (this._isMoreOption(s)) {
            this._logMoreClick();
            this.expandMenu();
            return;
        }
        this._logOptionClick(s);
        var u = this.inform('itemclick', {
            item: s,
            event: t
        });
        if (u)
            return;
        if (!m.isSelected(s)&&!s.isCustomOption() && s.select() !== false) {
            this._items.forEach(function(v) {
                if (m.isSelected(v) && v !== s)
                    v.deselect();
            });
            this.inform('change', this.getSelection());
        }
        this.done();
        return s.handleClick();
    };
    r.prototype._logMoreClick = function() {
        "use strict";
        var s = new n().setEnum('event', 'more_options').setInt('render_location', this._config.renderlocation).setString('content_type', this._config.contenttype).getURI();
        new g().setURI(s).send();
    };
    r.prototype._logOptionClick = function(s) {
        "use strict";
        var t = new n().setEnum('event', s.getLoggingEventName()).setInt('render_location', this._config.renderlocation).setString('content_type', this._config.contenttype).getURI();
        new g().setURI(t).send();
    };
    r.prototype.expandMenu = function() {
        "use strict";
        h.removeClass(this.getRoot(), "_po3");
        h.addClass(this.getRoot(), "_po4");
        this.inform('expandMenu');
    };
    r.prototype.collapseMenu = function() {
        "use strict";
        h.removeClass(this.getRoot(), "_po4");
        h.addClass(this.getRoot(), "_po3");
    };
    r.prototype.updateOptionsAfterTagExpansion = function(s) {
        "use strict";
        this.forEachItem(function(t) {
            if (t instanceof k)
                t.updateAfterTagExpansion(s);
        });
    };
    r.prototype.onPopoverOpen = function(s) {
        "use strict";
        if (this._config.learnMore)
            this._config.learnMore.collapse();
        if (s.isBelowFold()) {
            this.expandMenu();
        } else 
            this.collapseMenu();
        if (this._items.indexOf(s) >= 15)
            setTimeout(function() {
                this._scrollableArea.scrollToBottom(true, {
                    duration: 1000,
                    ease: i.sineOut
                });
            }.bind(this), 250);
    };
    e.exports = r;
}, null);
__d("MenuStaticItem", ["DOM", "MenuItemBase", "React", "copyProperties", "cx", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    for (var m in h)
        if (h.hasOwnProperty(m))
            o[m] = h[m];
    var n = h === null ? null: h.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = h;
    function o(p) {
        "use strict";
        h.call(this);
        this._data = p;
    }
    o.prototype._renderItemContent = function() {
        "use strict";
        var p = g.create('span', {
            className: "_54nc _54ah"
        });
        if (this._data.children) {
            i.render(i.createElement("span", {
                className: "_54nh"
            }, this._data.children), p);
        } else 
            g.setContent(p, g.create('span', {
                className: "_54nh"
            }, this._data.markup));
        return p;
    };
    j(o.prototype, {
        handleClick: l
    });
    e.exports = o;
}, null);
__d("PopoverButton", ["DOM", "DOMQuery", "csx"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        setLabel: function(k, l) {
            var m = h.find(k, "._55pe"), n = m.childNodes;
            for (var o = 0; o < n.length; o++)
                if (h.isTextNode(n[o])) {
                    g.replace(n[o], l);
                    return;
                }
            g.appendContent(m, l);
        }
    };
    e.exports = j;
}, null);
__d("PrivacySelectorNewDispatcher", ["Dispatcher", "copyProperties", "merge"], function(a, b, c, d, e, f, g, h, i) {
    var j = 'selector', k = h(new g(), {
        handleUpdateFromSelector: function(l) {
            this.dispatch(i({
                payloadSource: j
            }, l));
        }
    });
    e.exports = k;
}, null);
__d("PrivacySelectorDataStore", ["ArbiterMixin", "merge", "PrivacySelectorNewDispatcher", "KeyedCallbackManager"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = new j(), l = h(g, {
        get: function(m, n) {
            k.executeOrEnqueue(m, n);
        },
        hasValueChanged: function(m) {
            return !!k.getResource(m);
        }
    });
    i.register(function(m) {
        if (m.selector_type) {
            var n = {};
            n[m.selector_type] = {
                post_param: m.post_param,
                unique_id: m.unique_id
            };
            k.addResourcesAndExecute(n);
            l.inform('change');
        }
    });
    e.exports = l;
}, null);
__d("XPrivacySelectorUpdateControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/privacy\/selector\/update\/", {
        privacy_fbid: {
            type: "Int",
            required: true
        },
        post_param: {
            type: "String",
            required: true
        },
        tags: {
            type: "IntVector"
        },
        render_location: {
            type: "Int",
            required: true
        },
        is_saved_on_select: {
            type: "Bool"
        },
        should_return_tooltip: {
            type: "Bool"
        },
        replace_on_select: {
            type: "Bool"
        },
        prefix_tooltip_with_app_privacy: {
            type: "Bool"
        },
        ent_id: {
            type: "Int",
            required: true
        },
        tag_expansion_button: {
            type: "String"
        }
    });
}, null);
__d("PrivacySelectorBase", ["ArbiterMixin", "AsyncRequest", "Button", "CSS", "CurrentUser", "Input", "MenuStaticItem", "MenuSelectableItem", "PopoverButton", "PopoverLoadingMenu", "DataStore", "PrivacySelectorNewDispatcher", "PrivacySelectorDataStore", "PrivacySelectableMenu", "TagExpansionButtonConfig", "Tooltip", "XPrivacySelectorLoggingControllerURIBuilder", "XPrivacySelectorUpdateControllerURIBuilder", "bind", "cx", "fbt", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba) {
    var ca = 3, da = ba(g);
    for (var ea in da)
        if (da.hasOwnProperty(ea))
            ga[ea] = da[ea];
    var fa = da === null ? null: da.prototype;
    ga.prototype = Object.create(fa);
    ga.prototype.constructor = ga;
    ga.__superConstructor__ = da;
    function ga(ha, ia, ja, ka, la, ma) {
        "use strict";
        q.set(ha, 'selector', this);
        this._root = ha;
        this._button = ia;
        this._config = ma;
        this._menu = ja;
        this._popoverMenu = la;
        this._input = ka;
        this._isSavedOnSelect = ma.is_saved_on_select;
        this._privacyFBID = ma.privacy_fbid;
        this._contentType = ma.content_type;
        this._renderLocation = ma.render_location;
        this._supportsTagExpansion = ma.supports_tag_expansion;
        this._prefixTooltipApps = ma.should_prefix_tooltip_apps;
        this._shouldDisplayLabel = ma.should_display_label;
        this._tags = ma.tagged_uids;
        this._hasTags = this._tags.length > 0;
        this._entID = ma.ent_id;
        this._popover = this._popoverMenu.getPopover();
        this._receivingUpdate = false;
        this._initTagExpansionButtonState();
        if (ma.use_async_menu) {
            this._popoverMenu.subscribe('setMenu', function() {
                this._menu = this._popoverMenu.getMenu();
                if (!(this._menu instanceof t))
                    return;
                this._onMenuLoad();
                this._onPopoverOpen();
                this.inform('asyncMenuLoaded');
            }.bind(this));
        } else 
            this._onMenuLoad();
        if (ma.selector_sync_key) {
            this._selectorSyncKey = ma.selector_sync_key.toString();
            s.subscribe('change', function() {
                s.get(this._selectorSyncKey, function(na) {
                    if (na.unique_id !== this._menu._config.id) {
                        this._receivingUpdate = true;
                        this.selectOption(na.post_param);
                    }
                }.bind(this));
            }.bind(this));
            this._menu.subscribe('change', function() {
                if (!this._receivingUpdate) {
                    var na = this._getSelectedOption();
                    r.handleUpdateFromSelector({
                        selector_type: this._selectorSyncKey,
                        post_param: na.getPostParam().toString(),
                        unique_id: this._menu._config.id
                    });
                } else 
                    this._receivingUpdate = false;
            }.bind(this));
        }
    }
    ga.prototype.getIsPublicSelected = function() {
        "use strict";
        return this._selectedOption.isPublic();
    };
    ga.prototype.getIsFriendsSelected = function() {
        "use strict";
        return this._selectedOption.isFriends();
    };
    ga.prototype.getIsOnlyMeSelected = function() {
        "use strict";
        return this._selectedOption.isOnlyMe();
    };
    ga.prototype.getSelectedBaseValue = function() {
        "use strict";
        return this._selectedOption.getBaseValue();
    };
    ga.prototype.setValue = function(ha) {
        "use strict";
        this._menu.setValue(ha);
    };
    ga.prototype.openSelectorExpanded = function(ha) {
        "use strict";
        this.openSelector(function() {
            this._menu.expandMenu();
            ha && ha();
        }.bind(this));
    };
    ga.prototype.openSelector = function(ha) {
        "use strict";
        if (this._menu instanceof p) {
            this.subscribeOnce('asyncMenuLoaded', function() {
                ha && ha();
            }.bind(this));
            this._popover.showLayer();
        } else {
            this._popover.showLayer();
            ha && ha();
        }
    };
    ga.prototype.closeSelector = function() {
        "use strict";
        this._popover.hideLayer();
    };
    ga.prototype.getPopover = function() {
        "use strict";
        return this._popover;
    };
    ga.prototype.getTriggerButtonElement = function() {
        "use strict";
        return this._button;
    };
    ga.prototype.getMenuElement = function() {
        "use strict";
        return this._menu.getRoot();
    };
    ga.prototype.selectDefaultOption = function() {
        "use strict";
        this._menu.selectDefaultOption();
        this._updateMenu();
    };
    ga.prototype.selectOption = function(ha) {
        "use strict";
        if (!ha)
            return;
        if (this._menu instanceof p) {
            this.subscribeOnce('asyncMenuLoaded', this._selectOptionImpl.bind(this, ha));
            this._fetchAsyncMenu();
        } else 
            this._selectOptionImpl(ha);
    };
    ga.prototype._selectOptionImpl = function(ha) {
        "use strict";
        this._menu.selectOption(ha);
        this._updateMenu();
    };
    ga.prototype._updateMenu = function() {
        "use strict";
        this._selectedOption = this._getSelectedOption();
        this.updateDataForItemIndex(this._selectedOption.getIndex(), this._selectedOption.getPostParam().toString());
    };
    ga.prototype.setTagExpansionButton = function(ha) {
        "use strict";
        this._tagExpansionButton = ha;
        if (this._hasTags) {
            this._menu.updateOptionsAfterTagExpansion(this._showTagExpansion());
            this._updateTriggerButtonLabel();
            this._updateTooltipAfterChange();
        }
    };
    ga.prototype.getTagExpansionButton = function() {
        "use strict";
        return this._tagExpansionButton;
    };
    ga.prototype._initTagExpansionButtonState = function() {
        "use strict";
        this._tagExpansionButton = u.FRIENDS_OF_TAGGED;
        var ha = this._getSelectedOption();
        if (!ha)
            return;
        var ia = JSON.parse(ha.getPostParam());
        if (ia.settings && ia.settings.no_tag_expansion === true) {
            this._tagExpansionButton = u.TAGGED_ONLY;
        } else 
            this._tagExpansionButton = u.FRIENDS_OF_TAGGED;
    };
    ga.prototype._fetchAsyncMenu = function() {
        "use strict";
        if (this._config.use_async_menu)
            this._popoverMenu.fetchMenu();
    };
    ga.prototype._getSelectedOption = function() {
        "use strict";
        if (!(this._menu instanceof t))
            return;
        var ha;
        this._menu.forEachItem(function(ia) {
            if (ia instanceof n && ia.isSelected())
                ha = ia;
        }.bind(this));
        return ha;
    };
    ga.prototype._onItemClick = function(ha, ia) {
        "use strict";
        var ja = ia.item;
        if (ja instanceof m)
            return;
        if (ja.isBasicOption()) {
            this.updateDataForItemIndex(ja.getIndex(), ja.getPostParam().toString());
        } else if (ja.isCustomOption()) {
            this._closeForCustom = true;
            ja.openDialog(this);
        }
        this.inform('click', {
            customSelected: ja.isCustomOption()
        });
    };
    ga.prototype.getContentType = function() {
        "use strict";
        return this._contentType;
    };
    ga.prototype.getRenderLocation = function() {
        "use strict";
        return this._renderLocation;
    };
    ga.prototype.getPostParam = function() {
        "use strict";
        return this._postParam;
    };
    ga.prototype.getTags = function() {
        "use strict";
        return this._tags;
    };
    ga.prototype.updateDataForItemIndex = function(ha, ia, ja) {
        "use strict";
        if (ja) {
            this._tagExpansionButton = ja;
            this.inform('CustomTagExpansion', this._tagExpansionButton);
        }
        var ka = this._menu.getItemForIndex(ha);
        if (ka.isCustomOption())
            ka.setPostParam(ia);
        this._selectedOption = ka;
        this._postParam = ia;
        l.setValue(this._input, ia);
        this._updateTriggerButtonLabel();
        if (this._shouldUpdateTooltips()) {
            this._updateTooltipAfterChange();
        } else {
            if (this._isSavedOnSelect)
                this._savePrivacy();
            this._setTooltipValue(this._selectedOption.getTooltip());
        }
        this.inform('changed', {
            post_param: this._postParam,
            base_value: this.getSelectedBaseValue()
        });
    };
    ga.prototype._shouldUpdateTooltips = function() {
        "use strict";
        return this._prefixTooltipApps || this._supportsTagExpansion;
    };
    ga.prototype._savePrivacy = function() {
        "use strict";
        this._sendUpdateRequest();
    };
    ga.prototype._sendUpdateRequest = function() {
        "use strict";
        var ha = new x().setInt('privacy_fbid', this._privacyFBID).setString('post_param', this._postParam).setIntVector('tags', this._tags).setInt('render_location', this._renderLocation).setBool('is_saved_on_select', this._isSavedOnSelect).setBool('should_return_tooltip', this._shouldUpdateTooltips()).setBool('prefix_tooltip_with_app_privacy', this._prefixTooltipApps).setBool('replace_on_select', this._config.replace_on_select).setInt('ent_id', this._entID).setString('tag_expansion_button', this._tagExpansionButton).getURI();
        new h().setRelativeTo(this._button).setHandler(y(this, function(ia) {
            var ja = ia && ia.payload && ia.payload.tooltip;
            ja && this._setTooltipValue(ia.payload.tooltip);
        })).setURI(ha).send();
    };
    ga.prototype.informTagsChanged = function(ha) {
        "use strict";
        var ia = this._getTags(ha);
        this.informTagsChangedWithIDs(ia);
    };
    ga.prototype.informTagsChangedWithIDs = function(ha) {
        "use strict";
        var ia=!ha.length;
        if (this._hasTags === ia) {
            this._hasTags=!!ha.length;
            this._menu.updateOptionsAfterTagExpansion(this._showTagExpansion());
            this._updateTriggerButtonLabel();
        }
        if (this._tags.length !== ha.length) {
            this._tags = ha;
            this._updateTooltipAfterChange();
        }
    };
    ga.prototype._showTagExpansion = function() {
        "use strict";
        return this._hasTags && (this._tagExpansionButton.valueOf() === u.FRIENDS_OF_TAGGED.valueOf());
    };
    ga.prototype._getTags = function(ha) {
        "use strict";
        var ia = [], ja = k.getID();
        if (ha.withTags)
            for (var ka = 0; ka < ha.withTags.length; ka++) {
                var la = ha.withTags[ka].info;
                if (la.uid != ja)
                    ia.push(la.uid);
            }
        if (ha.mention)
            for (var ma in ha.mention)
                if (ha.mention[ma].type == 'user' && ha.mention[ma].uid != ja)
                    ia.push(ha.mention[ma].uid);
        return ia;
    };
    ga.prototype._updateTriggerButtonLabel = function() {
        "use strict";
        var ha = this._selectedOption.getTriggerIcon();
        i.setIcon(this._button, ha.cloneNode());
        if (!this._shouldDisplayLabel)
            return;
        o.setLabel(this._button, this._selectedOption.getLabel());
        if (this._config.trigger_style === ca) {
            j.conditionClass(this.getTriggerButtonElement(), "_mw-", this.getIsOnlyMeSelected());
            j.conditionClass(this.getTriggerButtonElement(), "_mw_", this.getIsPublicSelected());
        }
    };
    ga.prototype._updateTooltipAfterChange = function() {
        "use strict";
        var ha = "Loading...";
        this._setTooltipValue(ha);
        this._sendUpdateRequest();
    };
    ga.prototype._setTooltipValue = function(ha) {
        "use strict";
        ha && v.set(this._button, ha);
    };
    ga.prototype._onPopoverClose = function() {
        "use strict";
        if (!this._getSelectedOption())
            return;
        if (this._closeForCustom) {
            this._closeForCustom = false;
        } else 
            this.inform('selectorFinished');
        this.inform('close');
    };
    ga.prototype._onPopoverOpen = function() {
        "use strict";
        if (!(this._menu instanceof t))
            return;
        this._menu.onPopoverOpen(this._getSelectedOption());
        var ha = new w().setEnum('event', 'opened').setInt('render_location', this._renderLocation).setString('content_type', this._contentType).getURI();
        new h().setURI(ha).send();
        this.inform('open');
    };
    ga.prototype._onMenuLoad = function() {
        "use strict";
        this._menu.subscribe('itemclick', this._onItemClick.bind(this));
        this._popover.subscribe('hide', this._onPopoverClose.bind(this));
        this._popover.subscribe('show', this._onPopoverOpen.bind(this));
        this._menu.subscribe('expandMenu', function() {
            this._popover.getLayer().updatePosition();
        }.bind(this));
        this._selectedOption = this._getSelectedOption();
        if (this._selectedOption) {
            this._postParam = this._selectedOption.getPostParam().toString();
            this._hasTags && this._updateTriggerButtonLabel();
        }
    };
    e.exports = ga;
}, null);
__d("CurationCaretNux", ["csx", "cx", "ge", "tidyEvent", "AsyncRequest", "DataStore", "DOM", "Event", "Parent", "Rect"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = "a._52c6", r = "_5jmm", s = 'CurationCaretNux_instance', t = 100, u = "caret_nux", v = "save_option_nux", w = "seen", x = "dismissed", y = false;
    function z(aa, ba, ca, da) {
        "use strict";
        var ea = i(da);
        if (ea) {
            this.container = ea;
            this.caret = ca;
            this.caretNux = aa.instance;
            this.caretNuxData = aa;
            this.saveOptionNux = ba.instance;
            this.saveOptionNuxData = ba;
            this.popoverLoaded = false;
            this.popoverTriggered = false;
            var fa = o.byClass(ea, r);
            l.set(fa, s, this);
            this.$CurationCaretNux0();
        }
    }
    z.prototype.$CurationCaretNux0 = function() {
        "use strict";
        var aa = m.scry(this.container, q);
        if (aa.length > 0)
            j([n.listen(aa[0], 'click', function() {
                if (y)
                    return;
                    y = true;
                    this.caretNux.show();
                    this.$CurationCaretNux1();
                }.bind(this))]);
    };
    z.prototype.$CurationCaretNux1 = function() {
        "use strict";
        var aa = n.listen(this.caret, 'click', function() {
            this.caretNux.hide();
            this.$CurationCaretNux2(u, w);
            if (this.saveOptionNux) {
                this.popoverTriggered = true;
                this.$CurationCaretNux3();
            }
            aa.remove();
        }.bind(this)), ba = n.listen(window, 'scroll', function() {
            if (!this.caretNux.isShown()) {
                ba.remove();
                return;
            }
            var ca = p.getViewportWithoutScrollbarsBounds(), da = p.getElementBounds(this.caretNux.getContentRoot());
            da = da.sub(0, t);
            if (ca.contains(da)) {
                this.$CurationCaretNux2(u, w);
                ba.remove();
            }
        }.bind(this));
        this.caretNux.subscribe('hide', function() {
            this.$CurationCaretNux2(u, x);
        }.bind(this));
    };
    z.prototype.$CurationCaretNux4 = function() {
        "use strict";
        this.popoverLoaded = true;
        this.$CurationCaretNux3();
    };
    z.prototype.$CurationCaretNux3 = function() {
        "use strict";
        if (this.popoverLoaded && this.popoverTriggered)
            setTimeout(function() {
                this.saveOptionNux.show();
                this.$CurationCaretNux2(v, w);
                var aa = l.get(this.caret, 'Popover');
                aa && aa.subscribeOnce('hide', function() {
                    this.saveOptionNux.hide();
                }.bind(this));
            }.bind(this), 0);
    };
    z.prototype.$CurationCaretNux2 = function(aa, ba) {
        "use strict";
        var ca;
        if (aa === u) {
            ca = this.caretNuxData;
        } else if (aa === v) {
            ca = this.saveOptionNuxData;
        } else 
            throw "Invalid nux type";
        var da;
        if (ba === w) {
            da = ca.seen_uri;
            ca.seen_uri = null;
        } else if (ba === x) {
            da = ca.dismiss_uri;
            ca.dismiss_uri = null;
        } else 
            throw "Invalid impression type";
        if (da)
            new k(da).send();
    };
    z.saveOptionLoaded = function(aa) {
        "use strict";
        var ba = i(aa);
        if (ba) {
            var ca = o.byClass(ba, r), da = l.get(ca, s);
            da && da.$CurationCaretNux4();
        }
    };
    e.exports = z;
}, null);
__d("SaveState", [], function(a, b, c, d, e, f) {
    var g = {
        SAVING: 'saving',
        SAVED: 'saved',
        UNSAVING: 'unsaving',
        UNSAVED: 'unsaved'
    };
    e.exports = g;
}, null);
__d("SaveStateHandler", ["Run", "SaveState"], function(a, b, c, d, e, f, g, h) {
    var i = null;
    function j() {
        "use strict";
        this.$SaveStateHandler0 = {};
        this.$SaveStateHandler1 = {};
        g.onLeave(function() {
            i = null;
        });
    }
    j.prototype.addListener = function(k, l) {
        "use strict";
        k.forEach(function(m) {
            if (!this.$SaveStateHandler0[m])
                this.$SaveStateHandler0[m] = [];
            this.$SaveStateHandler0[m].push(l);
        }, this);
    };
    j.prototype.setState = function(k, l) {
        "use strict";
        k.forEach(function(m) {
            this.$SaveStateHandler1[m] = l;
            if (!this.$SaveStateHandler0[m])
                return;
            var n = this.$SaveStateHandler0[m];
            n.forEach(function(o) {
                try {
                    o.call(window, l, m);
                } catch (p) {}
            });
        }, this);
    };
    j.prototype.getState = function(k) {
        "use strict";
        var l = {};
        k.forEach(function(m) {
            l[m] = this.$SaveStateHandler1[m];
        }, this);
        return l;
    };
    j.$SaveStateHandler2 = function() {
        "use strict";
        if (!i)
            i = new j();
        return i;
    };
    j.listen = function(k, l) {
        "use strict";
        this.$SaveStateHandler2().addListener(k, l);
    };
    j.getState = function(k) {
        "use strict";
        this.$SaveStateHandler2().getState(k);
    };
    j.saving = function(k) {
        "use strict";
        this.$SaveStateHandler2().setState(k, h.SAVING);
    };
    j.saved = function(k) {
        "use strict";
        this.$SaveStateHandler2().setState(k, h.SAVED);
    };
    j.unsaving = function(k) {
        "use strict";
        this.$SaveStateHandler2().setState(k, h.UNSAVING);
    };
    j.unsaved = function(k) {
        "use strict";
        this.$SaveStateHandler2().setState(k, h.UNSAVED);
    };
    j.isSaveAction = function(k) {
        "use strict";
        var l = this.$SaveStateHandler2().getState(k);
        for (var m in l) {
            var n = l[m];
            if (n == h.UNSAVED || n == h.UNSAVING)
                return true;
        }
        return false;
    };
    e.exports = j;
}, null);
__d("SaveCaretMenuItem", ["Banzai", "CSS", "DOM", "EntstreamFeedObject", "EntstreamFeedObjectFollowup", "Event", "MenuItem", "SaveState", "SaveStateHandler", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = 'saved_for_later:caret_action', s = 'click', t = 'imp';
    for (var u in m)
        if (m.hasOwnProperty(u))
            w[u] = m[u];
    var v = m === null ? null: m.prototype;
    w.prototype = Object.create(v);
    w.prototype.constructor = w;
    w.__superConstructor__ = m;
    function w(x) {
        "use strict";
        m.call(this, x);
        this._updateData();
        this.getRoot();
        l.listen(this._anchor, 'error', this.handleError.bind(this));
        o.listen(x.ogobjectids, function(y) {
            this._updateData();
            this._doRender(y);
        }.bind(this));
    }
    w.prototype.handleClick = function() {
        "use strict";
        var x = v.handleClick.call(this), y = this._data.logdata;
        g.post(r, {
            action: s,
            collection_id: y.collection_id,
            surface: y.surface,
            story_id: y.story_id,
            is_save: this._data.isSaveAction,
            is_multi: y.is_multi
        });
        var z = j.getRoot(q(this._data.storydomid));
        if (this._data.isSaveAction) {
            o.saving(this._data.ogobjectids);
            z && k.addFollowup(z, this._data.savefollowupmarkup, "_521o");
        } else {
            o.unsaving(this._data.ogobjectids);
            var aa = k.getFollowup(z);
            aa && k.removeFollowup(z);
        }
        return x;
    };
    w.prototype.handleError = function() {
        "use strict";
        if (this._data.isSaveAction) {
            o.saved(this._data.ogobjectids);
        } else 
            o.unsaved(this._data.ogobjectids);
    };
    w.prototype._updateData = function() {
        "use strict";
        this._data.isSaveAction = o.isSaveAction(this._data.ogobjectids);
        if (this._data.isSaveAction) {
            this._data.markup = this._data.savemarkup;
            this._data.ajaxify = this._data.saveajaxify;
            this._data.title = this._data.savetitle;
        } else {
            this._data.markup = this._data.unsavemarkup;
            this._data.ajaxify = this._data.unsaveajaxify;
            this._data.title = this._data.unsavetitle;
        }
    };
    w.prototype._doRender = function(x) {
        "use strict";
        if (!this._root)
            return;
        switch (x) {
        case n.SAVING:
        case n.UNSAVING:
            h.addClass(this._root, "_5arm");
            setTimeout(this.disable.bind(this), 10);
            break;
        case n.SAVED:
        case n.UNSAVED:
            h.removeClass(this._root, "_5arm");
            setTimeout(this.enable.bind(this), 10);
            break;
        }
        i.replace(this._anchor, this._renderItemContent());
        l.listen(this._anchor, 'error', this.handleError.bind(this));
    };
    w.prototype.onShow = function() {
        "use strict";
        var x = this._data.logdata;
        g.post(r, {
            action: t,
            collection_id: x.collection_id,
            surface: x.surface,
            story_id: x.story_id,
            is_save: this._data.isSaveAction,
            is_multi: x.is_multi
        });
    };
    e.exports = w;
}, null);
