/*!CK:3514673021!*/
/*1415600269,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["spUxQ"]);
}

__d("XUIGlyphConstants", [], function(a, b, c, d, e, f) {
    e.exports = {
        TWO_DOTS: "2-dots",
        THREE_DOTS: "3-dots",
        ACQUAINTANCES: "acquaintances",
        ADD_FRIEND: "add-friend",
        ALBUM: "album",
        APP: "app",
        ARROW_DOWN: "arrow-down",
        ARROW_LEFT: "arrow-left",
        ARROW_RIGHT: "arrow-right",
        ARROW_UP: "arrow-up",
        ATTACHMENT: "attachment",
        BAR_CHART: "bar-chart",
        BLOCK: "block",
        BOOK: "book",
        BOOKMARKS: "bookmarks",
        CAKE: "cake",
        CALL: "call",
        CAMERA: "camera",
        CHECKMARK: "checkmark",
        CHEVRON_DOWN: "chevron-down",
        CHEVRON_LEFT: "chevron-left",
        CHEVRON_RIGHT: "chevron-right",
        CHEVRON_UP: "chevron-up",
        CITY: "city",
        CLOCK: "clock",
        CLOSE_FRIENDS: "close-friends",
        COMMENT: "comment",
        COMPOSE: "compose",
        CONSTRAIN: "constrain",
        CROP: "crop",
        CROSS: "cross",
        CURSOR_ARROW: "cursor-arrow",
        DESKTOP: "desktop",
        DIRECTIONS: "directions",
        DOUBLE_TRIANGLE_H: "double-triangle-h",
        DOUBLE_TRIANGLE_V: "double-triangle-v",
        EDIT: "edit",
        ENVELOPE: "envelope",
        ERROR_SOLID: "error-solid",
        ERROR: "error",
        EVENTS: "events",
        FACEBOOK: "facebook",
        FEMALE: "female",
        FILTER: "filter",
        FITNESS: "fitness",
        FLASH: "flash",
        FORWARD: "forward",
        FRIEND_ADDED: "friend-added",
        FRIEND_REQUEST: "friend-request",
        FRIENDS_OF_FRIENDS: "friends-of-friends",
        FULLSCREEN: "fullscreen",
        GAMES: "games",
        GRID: "grid",
        GROUP: "group",
        HELP_SOLID: "help-solid",
        HELP: "help",
        HOME: "home",
        INFO_SOLID: "info-solid",
        INFORMATION: "information",
        JOINED_EVENT: "joined-event",
        JOINED_GROUP: "joined-group",
        KEYBOARD: "keyboard",
        LAPTOP: "laptop",
        LEAVE: "leave",
        LIKE: "like",
        LIST_GLYPH: "list",
        LOADING: "loading",
        LOCATION: "location",
        LOCK: "lock",
        LOVE: "love",
        MALE: "male",
        MESSAGES: "messages",
        MOVIE: "movie",
        MUSIC: "music",
        NETWORK: "network",
        NEWSFEED: "newsfeed",
        NOTES: "notes",
        NOTIFICATIONS: "notifications",
        PAGES: "pages",
        PHONE: "phone",
        PHOTOS: "photos",
        PIE_CHART: "pie-chart",
        PIN: "pin",
        PLACE: "place",
        PLUS: "plus",
        POKE: "poke",
        REFRESH_LEFT: "refresh-left",
        REFRESH_RIGHT: "refresh-right",
        REPLY: "reply",
        RESIZE_BIG: "resize-big",
        RESIZE_FREE: "resize-free",
        RESIZE_SMALL: "resize-small",
        RESTAURANT: "restaurant",
        ROTATE: "rotate",
        RSS: "rss",
        SCHOOL: "school",
        SEARCH: "search",
        SETTINGS: "settings",
        SHARE: "share",
        SIMPLE_PHOTOS: "simple-photos",
        STOP: "stop",
        SUBSCRIPTIONS: "subscriptions",
        TABLET: "tablet",
        TAG: "tag",
        TICKETS: "tickets",
        TRIANGLE_DOWN: "triangle-down",
        TRIANGLE_LEFT: "triangle-left",
        TRIANGLE_RIGHT: "triangle-right",
        TRIANGLE_UP: "triangle-up",
        TV: "tv",
        VIDEO: "video",
        VOLUME: "volume",
        WEB_SEARCH: "web-search",
        WI_FI: "wi-fi",
        WORK: "work",
        WWW: "www"
    };
}, null);
__d("InstanceProxy", [], function(a, b, c, d, e, f) {
    function g(h) {
        "use strict";
        this.$InstanceProxy0 = h;
    }
    g.prototype.getInstance = function() {
        "use strict";
        return this.$InstanceProxy0;
    };
    e.exports = g;
}, null);
__d("CensorLogger", ["Event", "Banzai", "DOM", "debounce", "ge", "Keys"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = 10 * 60 * 1000, m = b('Keys').RETURN, n = function(q) {
        var r = (q.target || q.srcElement).id, s = (q.target || q.srcElement).value.trim().length, t = o.tracker(r);
        if (!t)
            return;
        if (s > 5&&!t.submitted) {
            if (t.type == 'comment' && t.parent_fbid == 'unknown') {
                if (!o.syncTrackerWithForm(r))
                    o.snowliftSync(r);
                t = o.tracker(r);
            }
            h.post('censorlogger', {
                impid: t.impid,
                clearcounter: t.clearcounter,
                instrument: t.type,
                elementid: r,
                parent_fbid: (t.parent_fbid == 'unknown' ? null : t.parent_fbid),
                version: "original"
            }, h.VITAL);
            o.setSubmitted(r, true);
        } else if (s === 0 && t.submitted && q.which != m) {
            o.debouncers[r] = p(r);
            o.debouncers[r]();
        } else if (s > 0 && t.submitted)
            if (o.debouncers[r])
                o.debouncers[r].reset();
    }, o = {
        init: function(q) {
            this.impressionID = q;
            for (var r in this.trackedElements)
                if (!k(r))
                    this.stopTracking(r);
            for (var s in this.unmatchedForms)
                if (!k(s))
                    delete this.unmatchedForms[s];
        },
        trackElement: function(q, r, s) {
            var t, u, v;
            this.debouncers = this.debouncers || {};
            this.trackedElements = this.trackedElements || {};
            this.unmatchedForms = this.unmatchedForms || {};
            r = r.toLowerCase();
            if (r == 'composer') {
                t = (s ? i.find(q, 'div.uiMetaComposerMessageBox textarea.input') : i.find(q, 'div.uiComposerMessageBox textarea.input'));
                u = i.find(q, 'form.attachmentForm');
                var w = i.scry(q, 'input[name="xhpc_targetid"]')[0];
                if (w)
                    v = w.value;
            } else if (r == 'comment')
                t = i.find(q, 'div.commentBox textarea.textInput');
            if (t == null)
                return;
            var x = i.getID(t);
            if (u)
                this.addJoinTableInfoToForm(u, i.getID(t));
            g.listen(t, 'keyup', n.bind(this));
            this.trackedElements[x] = {
                submitted: false,
                clearcounter: 0,
                type: r,
                impid: this.impressionID,
                parent_fbid: v || 'unknown',
                formID: (u ? i.getID(u) : null)
            };
            if (r == 'comment')
                this.syncTrackerWithForm(x);
        },
        registerForm: function(q, r) {
            this.unmatchedForms = this.unmatchedForms || {};
            this.unmatchedForms[q] = r;
        },
        syncTrackerWithForm: function(q) {
            for (var r in this.unmatchedForms) {
                var s = k(r);
                if (s) {
                    var t = i.scry(s, 'div.commentBox textarea.textInput')[0];
                    if (t) {
                        var u = i.getID(t);
                        if (u && u == q) {
                            this.trackedElements[q].parent_fbid = this.unmatchedForms[r];
                            this.trackedElements[q].formID = r;
                            this.addJoinTableInfoToForm(s, q);
                            delete this.unmatchedForms[r];
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        snowliftSync: function(q) {
            var r, s = k(q);
            if (s && (r = i.scry(s, '^.fbPhotosSnowboxFeedbackInput')[0])) {
                var t = i.find(r, 'input[name="feedback_params"]'), u = JSON.parse(t.value).target_fbid;
                this.trackedElements[q].parent_fbid = u;
                this.trackedElements[q].formID = r.id;
                this.addJoinTableInfoToForm(r, q);
                return true;
            }
            return false;
        },
        stopTracking: function(q) {
            delete this.trackedElements[q];
            if (this.debouncers[q]) {
                this.debouncers[q].reset();
                delete this.debouncers[q];
            }
        },
        tracker: function(q) {
            return this.trackedElements[q];
        },
        getSubmitted: function(q) {
            return (this.trackedElements[q] ? this.trackedElements[q].submitted : false);
        },
        setSubmitted: function(q, r) {
            if (this.trackedElements[q])
                this.trackedElements[q].submitted = r;
        },
        incrementClearCounter: function(q) {
            if (!this.tracker(q))
                return;
            this.trackedElements[q].clearcounter++;
            this.trackedElements[q].submitted = false;
            var r = i.scry(k(this.trackedElements[q].formID), 'input[name="clp"]')[0];
            if (r)
                r.value = JSON.stringify({
                    censorlogger_impid: this.trackedElements[q].impid,
                    clearcounter: this.trackedElements[q].clearcounter,
                    element_id: q
                });
        },
        addJoinTableInfoToForm: function(q, r) {
            i.prependContent(q, i.create('input', {
                type: 'hidden',
                name: 'clp',
                value: JSON.stringify({
                    censorlogger_impid: this.impressionID,
                    clearcounter: 0,
                    element_id: r,
                    version: "original"
                })
            }));
        }
    }, p = function(q) {
        return j(function() {
            o.incrementClearCounter(q);
        }, l, o);
    };
    e.exports = o;
}, null);
__d("UFIOrderingModeSelector.react", ["InlineBlock.react", "Link.react", "LoadingIndicator.react", "React", "Image.react", "ReactXUIMenu", "PopoverMenu.react", "cx", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = l.SelectableMenu, q = l.SelectableItem, r = j.createClass({
        displayName: "UFIOrderingModeSelector",
        propTypes: {
            currentOrderingMode: j.PropTypes.string,
            onOrderChanged: j.PropTypes.func,
            orderingmodes: j.PropTypes.array.isRequired
        },
        getInitialState: function() {
            var s = null;
            this.props.orderingmodes.map(function(t) {
                if (t.selected)
                    s = t;
            });
            return {
                selectedMode: s
            };
        },
        onMenuItemClick: function(s, t) {
            var u = t.item.getValue();
            this.props.orderingmodes.map(function(v) {
                if (v.value === u)
                    this.setState({
                        selectedMode: v
                    });
            }.bind(this));
            this.props.onOrderChanged(u);
        },
        render: function() {
            var s = null;
            if (this.props.currentOrderingMode != this.state.selectedMode.value)
                s = j.createElement(i, {
                    className: "UFIOrderingModeSelectorLoading",
                    color: "white",
                    size: "small"
                });
            var t = j.createElement(p, {
                onItemClick: this.onMenuItemClick
            }, this.props.orderingmodes.map(function(u) {
                return (j.createElement(q, {
                    key: u.value,
                    value: u.value,
                    selected: u.value === this.state.selectedMode.value
                }, u.name));
            }.bind(this)));
            return (j.createElement("div", {
                className: "UFIOrderingModeSelector"
            }, s, j.createElement(g, null, j.createElement(m, {
                className: "UFIOrderingModeSelectorPopover",
                menu: t,
                alignh: "right"
            }, j.createElement(h, null, this.state.selectedMode.name, j.createElement(k, {
                className: "UFIOrderingModeSelectorDownCaret",
                src: o('/images/ui/xhp/link/more/down_caret.gif')
            }))))));
        }
    });
    e.exports = r;
}, null);
__d("XUIGlyph.react", ["React", "XUIGlyphConstants", "getObjectValues", "merge"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = g.PropTypes, l = g.createClass({
        displayName: "XUIGlyph",
        propTypes: {
            image: k.oneOf(i(h)).isRequired,
            shade: k.oneOf(['light', 'dark', 'white', 'accent']),
            size: k.oneOf(['small', 'medium', 'large'])
        },
        getDefaultProps: function() {
            return {
                size: 'small',
                shade: 'dark'
            };
        },
        render: function() {
            var m = '/images/mobile/glyph/' + this.props.image;
            m += '_' + l.shadeToFileName[this.props.shade];
            m += '_' + l.sizeToFileName[this.props.size];
            m += '.png';
            return g.createElement("img", g.__spread({}, this.props, {
                src: m
            }));
        },
        statics: j(h, {
            sizeToFileName: {
                small: 's',
                medium: 'm',
                large: 'l'
            },
            shadeToFileName: {
                light: 'light-grey',
                dark: 'dark-grey',
                white: 'white',
                accent: 'blue'
            }
        })
    });
    e.exports = l;
}, null);
__d("legacy:ScrollAwareDOM", ["ScrollAwareDOM"], function(a, b, c, d) {
    a.ScrollAwareDOM = b('ScrollAwareDOM');
}, 3);
__d("Layout.react", ["React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "Layout",
        render: function() {
            var k, l, m = this.props.children;
            for (k = 0; k < m.length; k++) {
                l = m[k];
                if (l && l.type === j.FillColumn.type) {
                    var n = m.slice(k + 1).map(function(o) {
                        if (o)
                            o.props.className = i(o.props.className, "_4bl8");
                        return o;
                    });
                    n.reverse();
                    m.splice(k, m.length);
                    Array.prototype.push.apply(m, n);
                    m.push(l);
                    break;
                }
            }
            return (g.createElement("div", g.__spread({}, this.props, {
                className: i(this.props.className, "clearfix")
            }), m));
        }
    });
    j.Column = g.createClass({
        displayName: "Column",
        render: function() {
            return (g.createElement("div", g.__spread({}, this.props, {
                className: i(this.props.className, "_4bl7")
            })));
        }
    });
    j.FillColumn = g.createClass({
        displayName: "FillColumn",
        render: function() {
            return (g.createElement("div", g.__spread({}, this.props, {
                className: i(this.props.className, "_4bl9")
            })));
        }
    });
    e.exports = j;
}, null);
__d("ManagedError", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        Error.prototype.constructor.call(this, h);
        this.message = h;
        this.innerError = i;
    }
    g.prototype = new Error();
    g.prototype.constructor = g;
    e.exports = g;
}, null);
__d("FeedTrackingAsync", ["Arbiter", "collectDataAttributes", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    function j() {
        g.subscribe('AsyncRequest/send', function(k, l) {
            var m = l.request, n = m.getRelativeTo();
            if (n) {
                var o = m.getData(), p = h(n, ['ft']);
                if (Object.keys(p.ft).length)
                    i(o, p);
            }
        });
    }
    e.exports = {
        init: j
    };
}, null);
__d("PopoverAsyncMenu", ["AsyncRequest", "Event", "PopoverMenu", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {}, l = 0;
    for (var m in i)
        if (i.hasOwnProperty(m))
            o[m] = i[m];
    var n = i === null ? null: i.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = i;
    function o(p, q, r, s, t) {
        "use strict";
        this._endpoint = s;
        this._loadingMenu = r;
        this._instanceId = l++;
        k[this._instanceId] = this;
        this._mouseoverListener = h.listen(q, 'mouseover', this.fetchMenu.bind(this));
        i.call(this, p, q, null, t);
    }
    o.prototype._onLayerInit = function() {
        "use strict";
        if (!this._menu && this._loadingMenu)
            this.setMenu(this._loadingMenu);
        this.fetchMenu();
        this._popover.getLayer().subscribe('key', this._handleKeyEvent.bind(this));
    };
    o.prototype.fetchMenu = function() {
        "use strict";
        if (this._fetched)
            return;
        new g().setURI(this._endpoint).setData({
            pmid: this._instanceId
        }).send();
        this._fetched = true;
        if (this._mouseoverListener) {
            this._mouseoverListener.remove();
            this._mouseoverListener = null;
        }
    };
    o.setMenu = function(p, q) {
        "use strict";
        k[p].setMenu(q);
    };
    o.getInstance = function(p) {
        "use strict";
        return k[p];
    };
    j(o.prototype, {
        _fetched: false,
        _mouseoverListener: null
    });
    e.exports = o;
}, null);
__d("AssertionError", ["ManagedError"], function(a, b, c, d, e, f, g) {
    function h(i) {
        g.prototype.constructor.apply(this, arguments);
    }
    h.prototype = new g();
    h.prototype.constructor = h;
    e.exports = h;
}, null);
__d("Assert", ["AssertionError", "sprintf"], function(a, b, c, d, e, f, g, h) {
    function i(n, o) {
        if (typeof n !== 'boolean' ||!n)
            throw new g(o);
        return n;
    }
    function j(n, o, p) {
        var q;
        if (o === undefined) {
            q = 'undefined';
        } else if (o === null) {
            q = 'null';
        } else {
            var r = Object.prototype.toString.call(o);
            q = /\s(\w*)/.exec(r)[1].toLowerCase();
        }
        i(n.indexOf(q)!==-1, p || h('Expression is of type %s, not %s', q, n));
        return o;
    }
    function k(n, o, p) {
        i(o instanceof n, p || 'Expression not instance of type');
        return o;
    }
    function l(n, o) {
        m['is' + n] = o;
        m['maybe' + n] = function(p, q) {
            if (p != null)
                o(p, q);
        };
    }
    var m = {
        isInstanceOf: k,
        isTrue: i,
        isTruthy: function(n, o) {
            return i(!!n, o);
        },
        type: j,
        define: function(n, o) {
            n = n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase();
            l(n, function(p, q) {
                i(o(p), q);
            });
        }
    };
    ['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'].forEach(function(n) {
        l(n, j.bind(null, n.toLowerCase()));
    });
    e.exports = m;
}, null);
__d("FbFeedCommentUFIScroller", ["Arbiter", "DOMScroll", "containsNode", "ge"], function(a, b, c, d, e, f, g, h, i, j) {
    g.subscribe('comment/focus', function(k, l) {
        var m = l.element, n = j('content');
        if (n && i(n, m))
            h.ensureVisible(m, null, 60, 250);
    });
    e.exports = {};
}, null);
__d("Spotlight", ["Arbiter", "ArbiterMixin", "DOM", "JSXDOM", "Layer", "LayerAutoFocus", "LayerTabIsolation", "ModalLayer", "Vector", "classWithMixins", "copyProperties", "csx", "cx", "joinClasses", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = p(k, u(h));
    for (var w in v)
        if (v.hasOwnProperty(w))
            y[w] = v[w];
    var x = v === null ? null: v.prototype;
    y.prototype = Object.create(x);
    y.prototype.constructor = y;
    y.__superConstructor__ = v;
    function y(aa, ba) {
        "use strict";
        v.call(this, aa, ba);
        this.stageMinSize = new o(0, 0);
        this.stagePadding = new o(0, 0);
    }
    y.prototype._buildWrapper = function(aa, ba) {
        "use strict";
        var ca = t("_n8 _3qx", aa.rootClassName);
        return (j.div({
            className: ca
        }, j.div({
            className: "_n9"
        }, ba)));
    };
    y.prototype._getDefaultBehaviors = function() {
        "use strict";
        return x._getDefaultBehaviors.call(this).concat([z, l, m, n]);
    };
    y.prototype.getContentRoot = function() {
        "use strict";
        if (!this._content)
            this._content = i.find(this.getRoot(), "div._n3");
        return this._content;
    };
    y.prototype.configure = function(aa) {
        "use strict";
        if (aa.stageMinSize)
            this.stageMinSize = aa.stageMinSize;
        if (aa.stagePadding)
            this.stagePadding = aa.stagePadding;
    };
    y.prototype.onContentLoaded = function() {
        "use strict";
        this.inform('content-load');
    };
    y.prototype.updatePermalink = function(aa) {
        "use strict";
        this.inform('permalinkchange', aa);
    };
    q(y.prototype, {
        stageMinSize: null,
        stagePadding: null
    });
    function z(aa) {
        "use strict";
        this._layer = aa;
    }
    z.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe(['show', 'hide'], function(aa, ba) {
            if (aa === 'show') {
                g.inform('layer_shown', {
                    type: 'Spotlight'
                });
            } else 
                g.inform('layer_hidden', {
                    type: 'Spotlight'
                });
        });
    };
    z.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    q(z.prototype, {
        _subscription: null
    });
    e.exports = y;
}, null);
__d("ButtonGroupX", ["ArbiterMixin", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i) {
    var j = i(g);
    for (var k in j)
        if (j.hasOwnProperty(k))
            m[k] = j[k];
    var l = j === null ? null: j.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = j;
    function m(n, o) {
        "use strict";
        o = o || {};
        this._root = n;
        this._radioButtons = o.radioButtons || [];
        this._selected = o.selected;
        this.initButtonListeners();
    }
    m.prototype.initButtonListeners = function() {
        "use strict";
        var n = this._radioButtons.length;
        while (n--) {
            var o = this._radioButtons[n];
            o.subscribe('select', this.selectButton.bind(this, o));
        }
    };
    m.prototype.getSelected = function() {
        "use strict";
        return this._selected;
    };
    m.prototype.getSelectedValue = function() {
        "use strict";
        return this._selected ? this._selected.getValue() : null;
    };
    m.prototype.selectButton = function(n) {
        "use strict";
        if (this._selected !== n) {
            this.setSelected(n);
            this.inform('change', {
                selected: n
            });
        }
        return this;
    };
    m.prototype.setSelected = function(n) {
        "use strict";
        if (this._selected !== n) {
            if (this._selected)
                this._selected.setSelected(false);
            n.setSelected(true);
            this._selected = n;
        }
        return this;
    };
    m.prototype.setSelectedValue = function(n) {
        "use strict";
        var o = this._radioButtons.length;
        while (o--) {
            var p = this._radioButtons[o];
            if (p.getValue() === n)
                return this.setSelected(p);
        }
        return this;
    };
    e.exports = m;
}, null);
__d("Hovercard", ["AccessibleLayer", "Arbiter", "AsyncRequest", "ContextualDialog", "ContextualDialogXUITheme", "ContextualThing", "DOM", "Event", "JSXDOM", "LayerAutoFocus", "LayerRefocusOnHide", "Parent", "Style", "Vector", "clickRefAction", "csx", "cx", "getInlineBoundingRect", "tx", "userAction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    var aa = {}, ba = {}, ca = null, da = null, ea = null, fa = null, ga = 150, ha = 700, ia = 1000, ja = 250, ka = 50, la = null, ma = null, na = null, oa = null;
    function pa(event) {
        var fb = r.byTag(event.getTarget(), 'a');
        eb.processNode(fb) && event.stop();
    }
    function qa(fb) {
        da = fb;
        if (!ra(fb)) {
            var gb;
            if (!fb ||!(gb = sa(fb)) || cb(fb)) {
                ba.moveToken && ba.moveToken.remove();
                ba = {};
                return false;
            }
            if (ba.node != fb) {
                ba.moveToken && ba.moveToken.remove();
                ba = {
                    node: fb,
                    endpoint: gb,
                    pos: null
                };
            }
        }
        return true;
    }
    function ra(fb) {
        return fb && ca && ba.node == fb;
    }
    function sa(fb) {
        return fb.getAttribute('data-hovercard');
    }
    function ta(fb) {
        var gb = m.scry(fb, "^._5jmm ._2orz").length;
        if (gb)
            return;
        var hb = n.listen(fb, 'mouseleave', function() {
            clearTimeout(la);
            clearTimeout(ma);
            hb.remove();
            da = null;
            if (!eb.contains(fb))
                eb.hide();
        });
        if (!ba.moveToken)
            ba.moveToken = n.listen(fb, 'mousemove', function(event) {
                ba.pos = t.getEventPosition(event);
            });
        clearTimeout(la);
        clearTimeout(ma);
        clearTimeout(oa);
        var ib = ga, jb = ca ? ja: ha;
        if (fb.getAttribute('data-hovercard-instant'))
            ib = jb = ka;
        la = setTimeout(xa.bind(null, fb), ib);
        ma = setTimeout(ua.bind(null, fb), jb);
    }
    function ua(fb, gb) {
        if (ba.node != fb)
            return;
        var hb = aa[sa(fb)];
        if (hb) {
            wa(hb);
        } else if (gb) {
            wa(ab());
        } else {
            var ib = ca ? ja: ha;
            na = setTimeout(ua.bind(null, fb, true), ia - ib);
        }
    }
    function va() {
        eb.hide(true);
        clearTimeout(ma);
    }
    function wa(fb) {
        var gb = ba.node, hb = ca, ib = hb != gb, jb = gb.getAttribute('data-hovercard-position');
        jb && fb.setPosition(jb);
        if (fa) {
            var kb = fa.getContentRoot();
            if (!l.containsIncludingLayers(kb, gb))
                fa.hide();
        }
        if (!m.contains(document.body, gb)) {
            eb.hide(true);
            return;
        }
        ca = gb;
        fa = fb;
        fb.setContextWithBounds(gb, x(gb, ba.pos)).show();
        if (ib)
            setTimeout(function() {
                u('himp', ca, null, 'FORCE', {
                    ft: {
                        evt: 39
                    }
                });
                z('hovercard', ca).uai('show');
            }, 0);
    }
    function xa(fb) {
        if (fb.id && aa[fb.id] != null)
            return;
        var gb = sa(fb);
        if (aa[gb] != null)
            return;
        ya(gb);
        var hb = function() {
            eb.dirty(gb);
            va();
        };
        new i(gb).setData({
            endpoint: gb
        }).setMethod('GET').setReadOnly(true).setErrorHandler(hb).setTransportErrorHandler(hb).send();
    }
    function ya(fb) {
        aa[fb] = false;
    }
    function za(fb) {
        var gb = ba.node.getAttribute('data-hovercard-offset-x') || 0;
        fb.setOffsetX(parseInt(gb, 10));
        var hb = ba.node.getAttribute('data-hovercard-offset-y') || 0;
        fb.setOffsetY(parseInt(hb, 10));
    }
    var ab = function() {
        if (!ea) {
            ea = new j({
                width: 275,
                theme: k
            }, o.div({
                className: "_7lk"
            }, "Loading..."));
            ea.disableBehavior(g).disableBehavior(p).disableBehavior(q);
            bb(ea);
        }
        var fb = ba.node.getAttribute('data-hovercard-position');
        ea.setPosition(fb);
        za(ea);
        return ea;
    };
    function bb(fb) {
        var gb = [fb.subscribe('mouseenter', function() {
            clearTimeout(oa);
            da = ba.node;
        }), fb.subscribe('mouseleave', function() {
            fb.hide();
            da = null;
        }), fb.subscribe('destroy', function() {
            while (gb.length)
                gb.pop().unsubscribe();
            gb = null;
        })];
    }
    function cb(fb) {
        return (r.byClass(fb, "_7lu") !== null);
    }
    var db = true, eb = {
        hide: function(fb) {
            if (!ca)
                return;
            if (fb) {
                if (fa)
                    fa.hide();
                da = null;
                ca = null;
                fa = null;
            } else {
                var gb = ba.node.getAttribute('data-hovercard-instant') ? ka: ja;
                oa = setTimeout(eb.hide.bind(null, true), gb);
            }
        },
        setDialog: function(fb, gb) {
            gb.disableBehavior(g).disableBehavior(p).disableBehavior(q);
            aa[fb] = gb;
            bb(gb);
            if (ba.endpoint == fb && da == ba.node) {
                ab().hide();
                za(gb);
                wa(gb);
            }
        },
        getDialog: function(fb) {
            return aa[fb];
        },
        contains: function(fb) {
            if (fa)
                return l.containsIncludingLayers(fa.getContentRoot(), fb);
            return false;
        },
        dirty: function(fb) {
            var gb = aa[fb];
            if (gb) {
                gb.destroy();
                delete aa[fb];
            }
        },
        dirtyAll: function() {
            for (var fb in aa) {
                var gb = aa[fb];
                gb && eb.dirty(fb);
            }
            h.inform('Hovercard/dirty');
        },
        processNode: function(fb) {
            if (fb && qa(fb)) {
                ta(fb);
                return true;
            }
            return false;
        },
        setDirtyAllOnPageTransition: function(fb) {
            db = fb;
        },
        getLoadingDelay: function() {
            return ia;
        },
        getHideDelay: function() {
            return ja;
        }
    };
    (function() {
        n.listen(document.documentElement, 'mouseover', pa);
        n.listen(window, 'scroll', function() {
            if (ca && s.isFixed(ca))
                eb.hide(true);
        });
        h.subscribe('page_transition', function() {
            va();
            db && eb.dirtyAll();
        }, h.SUBSCRIBE_NEW);
    })();
    e.exports = eb;
}, null);
