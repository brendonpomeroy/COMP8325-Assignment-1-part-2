/*!CK:1630505986!*/
/*1415664762,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["shAfv"]);
}

__d("PUWErrorCodes", [], function(a, b, c, d, e, f) {
    e.exports = {
        BAD_JPEG: 9901,
        WORKER_TERMINATED: 9902,
        UNKNOWN_RESIZE_ERROR: 9903,
        WORKER_ABORT: 9904
    };
}, null);
__d("StickerAssetType", [], function(a, b, c, d, e, f) {
    e.exports = {
        IMAGE: "BestEffortImage",
        SPRITE: "SpriteImage",
        PADDED_SPRITE: "PaddedSpriteImage"
    };
}, null);
__d("TypingDetector", ["ArbiterMixin", "Event", "Input", "Run", "TypingStates", "copyProperties", "createObjectFrom", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    function o(p, q) {
        this._input = p;
        this._ignoreKeys = {};
        this._getValueFn = q;
    }
    l(o.prototype, g, {
        _timeout: 7000,
        _currentState: k.INACTIVE,
        init: function() {
            this.init = n;
            this.reset();
            h.listen(this._input, 'keyup', this._update.bind(this));
            j.onUnload(this._onunload.bind(this));
        },
        reset: function() {
            clearTimeout(this._checkTimer);
            this._checkTimer = null;
            this._lastKeystrokeAt = null;
            this._currentState = k.INACTIVE;
        },
        setIgnoreKeys: function(p) {
            this._ignoreKeys = m(p);
        },
        _onunload: function() {
            if (this._currentState == k.TYPING)
                this._transition(k.QUITTING);
        },
        _update: function(event) {
            var p = h.getKeyCode(event), q = this._currentState;
            if (!this._ignoreKeys[p]) {
                var r = this._getValueFn ? this._getValueFn(): i.getValue(this._input);
                if (r.trim().length === 0) {
                    if (q == k.TYPING)
                        this._transition(k.INACTIVE);
                } else if (q == k.TYPING) {
                    this._recordKeystroke();
                } else if (q == k.INACTIVE) {
                    this._transition(k.TYPING);
                    this._recordKeystroke();
                }
            }
        },
        _transition: function(p) {
            this.reset();
            this._currentState = p;
            this.inform('change', p);
        },
        _recordKeystroke: function() {
            this._lastKeystrokeTime = Date.now();
            if (!this._checkTimer)
                this._checkTimer = setTimeout(this._checkTyping.bind(this), this._timeout);
        },
        _checkTyping: function() {
            var p = this._lastKeystrokeTime + this._timeout, q = Date.now();
            if (q > p) {
                this._transition(k.INACTIVE);
            } else {
                clearTimeout(this._checkTimer);
                this._checkTimer = setTimeout(this._checkTyping.bind(this), p - q + 10);
            }
        }
    });
    e.exports = o;
}, null);
__d("TypingDetectorController", ["AsyncRequest", "AvailableList", "AvailableListConstants", "ChannelConnection", "ChatVisibility", "Keys", "PresencePrivacy", "ShortProfiles", "TypingDetector", "TypingStates", "copyProperties", "emptyFunction", "setTimeoutAcrossTransitions", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    function u(w) {
        if (!k.isOnline())
            return false;
        if (w) {
            var x = n.getNow(w);
            return x && x.type == "friend" && m.allows(w);
        }
        return true;
    }
    function v(w, x, y, z, aa, ba) {
        "use strict";
        this.userID = w;
        this.input = x;
        this.source = y;
        this.threadID = aa;
        this.remoteState = p.INACTIVE;
        this.notifyTimer = null;
        z = z || {};
        this.notifyDelay = z.notifyDelay || this.notifyDelay;
        this._typingDetector = new o(x, ba);
        this._typingDetector.init(z);
        this._typingDetector.subscribe('change', this._stateChange.bind(this));
    }
    v.prototype.setUserAndThread = function(w, x) {
        "use strict";
        if (this.userID !== w || this.threadID !== x) {
            this.resetState();
            this.userID = w;
            this.threadID = x;
        }
    };
    v.prototype.setIgnoreEnter = function(w) {
        "use strict";
        var x = w ? [l.RETURN]: [];
        this._typingDetector.setIgnoreKeys(x);
    };
    v.prototype.resetState = function() {
        "use strict";
        this._notifyState(p.INACTIVE);
        this.remoteState = p.INACTIVE;
        this._typingDetector.reset();
        clearTimeout(this.notifyTimer);
        this.notifyTimer = null;
    };
    v.prototype._stateChange = function(w, x) {
        "use strict";
        if (x != p.QUITTING) {
            clearTimeout(this.notifyTimer);
            this.notifyTimer = s(t(this._notifyState, this, x), this.notifyDelay);
        } else 
            this._notifyState(x, true);
    };
    v.prototype._notifyState = function(w, x) {
        "use strict";
        if (!this.userID&&!this.threadID)
            return;
        var y = this.userID, z = u(y);
        if (z && w != this.remoteState) {
            this.remoteState = w;
            if (j.disconnected())
                return;
            var aa = {
                typ: w,
                to: y,
                source: this.source,
                thread: this.threadID
            };
            new g().setHandler(this._onTypResponse.bind(this, y)).setErrorHandler(r).setData(aa).setURI('/ajax/messaging/typ.php').setAllowCrossPageTransition(true).setOption('asynchronous', !x).send();
        }
    };
    v.prototype._onTypResponse = function(w, x) {
        "use strict";
        var y = x.getPayload() || {};
        if (y.offline)
            h.set(w, i.OFFLINE, 'typing_response');
    };
    q(v.prototype, {
        notifyDelay: 1000
    });
    e.exports = v;
}, null);
__d("VideoCallingTour", ["Arbiter", "ArbiterMixin", "Chat", "ChatSidebar", "ChatVisibility", "CSS", "DOM", "PresencePrivacy", "Run", "Toggler", "Vector", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s, t, u, v, w = [], x = function() {};
    function y() {
        if (j.isVisible()) {
            z();
        } else if (u)
            aa();
    }
    function z() {
        s.setContext(t.getBody());
        ba();
        s.show();
        ca();
    }
    function aa() {
        if (!v)
            v = p.createInstance(u.getRoot());
        var fa = m.scry(u.getRoot(), 'div.fbNubFlyout')[0];
        if (fa) {
            s.setContext(fa);
            ba();
            s.show();
            ca();
        }
    }
    function ba() {
        var fa = q.getElementDimensions(s.getContext()).y;
        s.setOffsetY(fa * .6);
        s.updatePosition();
    }
    function ca() {
        if (u)
            w.push(u.subscribe('hide', function() {
                da();
                if (!j.isVisible())
                    s.hide();
                }), u.subscribe('show', function() {
                    s.show();
                }), u.subscribe('resize', function() {
                    ba();
                    s.updatePosition();
                }));
        w.push(g.subscribe('sidebar/show', z), g.subscribe('sidebar/hide', aa), g.subscribe('sidebar/resized', ba));
    }
    function da() {
        if (v) {
            v.setSticky(false);
            v = null;
        }
    }
    function ea() {
        while (w.length)
            w.pop().unsubscribe();
        if (u)
            da();
        s.hide();
        l.show('fbVideoCallingGetStarted');
    }
    r(x, h, {
        start: function(fa) {
            s = fa;
            l.hide('fbVideoCallingGetStarted');
            k.goOnline(function() {
                w.push(n.subscribe('privacy-user-presence-changed', ea));
                o.onLeave(ea);
                i.openBuddyList();
                var ga = null;
                w.push(j.subscribe('sidebar/initialized', function(ha, ia) {
                    t = ia;
                    clearTimeout(ga);
                    ga = setTimeout(y, 0);
                }), x.subscribe('videocallingtour/end', ea));
                w.push(g.subscribe('buddylist-nub/initialized', function(ha, ia) {
                    u = ia;
                    clearTimeout(ga);
                    ga = setTimeout(y, 0);
                }));
            });
            x.inform('videocallingtour/start');
        }
    });
    e.exports = x;
}, null);
__d("ContentRollTypeaheadView.react", ["BackgroundImage.react", "ImageBlock.react", "LegacyScrollableArea.react", "React", "TypeaheadViewItem", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = j.createClass({
        displayName: "ContentRollTypeaheadViewItem",
        mixins: [k.Mixin],
        propTypes: k.propTypes,
        render: function() {
            var p = this.props.entry, q = p.getSubtitle() ? j.createElement("div", {
                className: "_599q"
            }, p.getSubtitle()): null;
            if (q && p.getAuxiliaryData() && p.getAuxiliaryData().icon)
                q = j.createElement(h, {
                    spacing: "small"
                }, j.createElement(g, {
                    width: 16,
                    height: 16,
                    src: p.getAuxiliaryData().icon
                }), q);
            var r = p.getPhoto() ? j.createElement(g, {
                width: 32,
                height: 32,
                backgroundSize: "cover",
                src: p.getPhoto()
            }): j.createElement("span", null), s = (("_5yww") + (!q ? ' ' + "_5mne" : '') + (this.props.highlighted ? ' ' + "_599n" : ''));
            return (j.createElement("li", {
                className: s,
                onMouseDown: this._onSelect,
                onMouseEnter: this._onHighlight
            }, j.createElement(h, {
                spacing: "medium"
            }, r, j.createElement("div", null, j.createElement("div", {
                className: "_599p"
            }, p.getTitle()), q))));
        }
    }), o = j.createClass({
        displayName: "ContentRollTypeaheadView",
        propTypes: {
            highlightedEntry: j.PropTypes.object,
            entries: j.PropTypes.array.isRequired,
            onSelect: j.PropTypes.func.isRequired,
            onHighlight: j.PropTypes.func,
            onRenderHighlight: j.PropTypes.func,
            scrollableAreaHeight: j.PropTypes.number.isRequired,
            scrollableAreaWidth: j.PropTypes.number.isRequired
        },
        _renderItem: function(p) {
            var q = p === this.props.highlightedEntry;
            return (j.createElement(n, {
                key: p.getUniqueID(),
                entry: p,
                highlighted: q,
                onSelect: this.props.onSelect,
                onHighlight: this.props.onHighlight,
                onRenderHighlight: this.props.onRenderHighlight
            }));
        },
        render: function() {
            var p = (("_2072") + (!this.props.entries.length ? ' ' + "_599s" : '')), q = this.props.entries, r = {};
            q.forEach(function(v) {
                r[v.getType()] = r[v.getType()] || [];
                r[v.getType()].push(v);
            });
            var s = [];
            for (var t in r) {
                var u = null;
                switch (t) {
                case 'recent':
                    u = "Recently Viewed Links";
                    break;
                case 'saved':
                    u = "Saved Links";
                    break;
                case 'bing':
                    u = "Bing Results";
                    break;
                }
                if (u)
                    s.push(j.createElement("div", {
                        className: "_1opo"
                    }, u));
                r[t].forEach(function(v) {
                    s.push(this._renderItem(v));
                }, this);
            }
            return (j.createElement("div", {
                className: p
            }, j.createElement(i, {
                height: this.props.scrollableAreaHeight,
                width: this.props.scrollableAreaWidth
            }, j.createElement("ul", null, s))));
        }
    });
    e.exports = o;
}, null);
__d("ContentRollTypeahead.react", ["AbstractTypeahead.react", "React", "ReactPropTypes", "WebAsyncSearchSource", "ContentRollTypeaheadView.react", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = 20, o = '/ajax/metacomposer/attachment/og/typeahead/content_roll', p = h.createClass({
        displayName: "ContentRollTypeahead",
        propTypes: {
            className: i.string,
            onSelection: i.func.isRequired,
            scrollableAreaHeight: h.PropTypes.number.isRequired,
            scrollableAreaWidth: h.PropTypes.number.isRequired,
            userID: i.string.isRequired,
            useLayer: i.bool
        },
        getInitialState: function() {
            return {
                query: ''
            };
        },
        _handleChange: function(event) {
            this.setState({
                query: event.target.value
            });
        },
        _handleSelectAttempt: function(q) {
            this.setState({
                query: ''
            });
            var r = {
                object_id: q.getUniqueID(),
                url: q.getURI(),
                source: q.getType(),
                query: q.getAuxiliaryData().query,
                subindex: q.getAuxiliaryData().subindex,
                subtotal: q.getAuxiliaryData().subtotal,
                index: q.getAuxiliaryData().index,
                total: q.getAuxiliaryData().total
            };
            this.props.onSelection(r);
        },
        _getSearchSource: function() {
            if (!this._searchSource)
                this._searchSource = new j({
                    bootstrapRequests: [{
                        uri: o,
                        data: {
                            viewer: this.props.userID
                        }
                    }
                    ],
                    queryRequests: [{
                        uri: o,
                        data: {
                            viewer: this.props.userID
                        }
                    }
                    ],
                    getAllForEmptyQuery: true
                });
            return this._searchSource;
        },
        _getPlaceholder: function() {
            if (!this._placeholder)
                this._placeholder = "Search for articles, videos, music, and more";
            return this._placeholder;
        },
        focusInput: function() {
            this.refs.typeahead.focusInput();
        },
        render: function() {
            var q = {
                ViewRenderer: k,
                maxEntries: n,
                useLayer: this.props.useLayer,
                extraRendererProps: {
                    scrollableAreaHeight: this.props.scrollableAreaHeight,
                    scrollableAreaWidth: this.props.scrollableAreaWidth
                }
            };
            return (h.createElement(g, {
                autoHighlight: true,
                className: this.props.className,
                focusedOnInit: true,
                inputClassName: "_55r1",
                onChange: this._handleChange,
                onSelectAttempt: this._handleSelectAttempt,
                placeholder: this._getPlaceholder(),
                presenter: q,
                queryString: this.state.query,
                ref: "typeahead",
                searchSource: this._getSearchSource(),
                showEntriesOnFocus: true
            }));
        }
    });
    e.exports = p;
}, null);
__d("ContentRollFlyout.react", ["ContentRollTypeahead.react", "Parent", "React", "ReactPropTypes", "Toggler", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = i.createClass({
        displayName: "ContentRollFlyout",
        propTypes: {
            onSelection: j.func.isRequired,
            userID: j.string.isRequired
        },
        getInitialState: function() {
            return {
                showFlyout: false
            };
        },
        componentDidMount: function() {
            var n = this._getParentToggler();
            if (n)
                k.listen('show', n, function() {
                    this.setState({
                        showFlyout: true
                    });
                }.bind(this));
        },
        _getParentToggler: function() {
            return h.byClass(this.getDOMNode(), 'uiToggle');
        },
        _hideParentToggler: function() {
            var n = this._getParentToggler();
            if (n)
                k.hide(n);
        },
        _handleSelection: function(n) {
            this._hideParentToggler();
            this.props.onSelection(n);
        },
        render: function() {
            if (!this.state.showFlyout)
                return i.createElement("div", null);
            return (i.createElement(g, {
                className: "_5j11",
                onSelection: this._handleSelection,
                scrollableAreaHeight: 288,
                scrollableAreaWidth: 256,
                userID: this.props.userID,
                useLayer: false
            }));
        }
    });
    e.exports = m;
}, null);
__d("CroppedImage.react", ["Image.react", "React", "ReactPropTypes", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = h.createClass({
        displayName: "CroppedImage",
        propTypes: {
            center: i.shape({
                x: i.number.isRequired,
                y: i.number.isRequired
            }),
            crop: i.shape({
                height: i.number.isRequired,
                width: i.number.isRequired
            }).isRequired,
            size: i.shape({
                height: i.number.isRequired,
                width: i.number.isRequired
            }).isRequired,
            src: i.string.isRequired
        },
        getDefaultProps: function() {
            return {
                center: {
                    x: .5,
                    y: .5
                }
            };
        },
        _calculateMargin: function(l, m, n) {
            return - 1 * Math.max(Math.min(((n * m) - (.5 * l)), m - l), 0);
        },
        render: function() {
            var l = this._calculateMargin(this.props.crop.width, this.props.size.width, this.props.center.x), m = this._calculateMargin(this.props.crop.height, this.props.size.height, this.props.center.y), n = {
                left: l,
                height: this.props.size.height,
                top: m,
                width: this.props.size.width
            };
            return (h.createElement("div", {
                className: "_46-h",
                style: this.props.crop
            }, h.createElement(g, {
                alt: this.props.alt || '',
                className: "_46-i",
                src: this.props.src,
                style: n
            })));
        }
    });
    e.exports = k;
}, null);
__d("URLScraper", ["ArbiterMixin", "DataStore", "Event", "URLMatcher", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 'scraperLastPermissiveMatch', n = l(g);
    for (var o in n)
        if (n.hasOwnProperty(o))
            q[o] = n[o];
    var p = n === null ? null: n.prototype;
    q.prototype = Object.create(p);
    q.prototype.constructor = q;
    q.__superConstructor__ = n;
    function q(r, s) {
        "use strict";
        this.input = r;
        this.enable();
        this.getValueFn = s;
    }
    q.prototype.reset = function() {
        "use strict";
        h.set(this.input, m, null);
    };
    q.prototype.enable = function() {
        "use strict";
        if (this.events)
            return;
        var r = function(s) {
            setTimeout(this.check.bind(this, s), 30);
        };
        this.events = i.listen(this.input, {
            paste: r.bind(this, false),
            keydown: r.bind(this, true)
        });
    };
    q.prototype.disable = function() {
        "use strict";
        if (!this.events)
            return;
        for (var event in this.events)
            this.events[event].remove();
        this.events = null;
    };
    q.prototype.check = function(r) {
        "use strict";
        var s = this.getValueFn ? this.getValueFn(): this.input.value;
        if (r && q.trigger(s))
            return;
        var t = q.match(s), u = j.permissiveMatch(s);
        if (u && (u != h.get(this.input, m))) {
            h.set(this.input, m, u);
            this.inform('match', {
                url: t || u,
                alt_url: u
            });
        }
    };
    k(q, j);
    e.exports = q;
}, null);
__d("getURLRanges", ["URI", "URLScraper"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i(j, k) {
        k = k || 0;
        var l = h.match(j);
        if (!l)
            return [];
        var m = l;
        if (!(/^[a-z][a-z0-9\-+.]+:\/\//i.test(l)))
            m = 'http://' + l;
        if (!g.isValidURI(m))
            return [];
        k += j.indexOf(l);
        var n = l.length, o = [{
            offset: k,
            length: l.length,
            entity: {
                url: m
            }
        }
        ];
        return o.concat(i(j.substr(k + n), k + n));
    }
    e.exports = i;
}, null);
__d("MercuryMessageBody.react", ["React", "Link.react", "ReactComponentWithPureRenderMixin", "TextWithEntities.react", "cx", "fbt", "getURLRanges"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = function(p, q) {
        return (g.createElement(h, {
            target: "_blank",
            href: q.entity
        }, p));
    }, o = g.createClass({
        displayName: "MercuryMessageBody",
        mixins: [i],
        propTypes: {
            body: g.PropTypes.string,
            ranges: g.PropTypes.array
        },
        render: function() {
            var p = this.props.body || '';
            if (p.startsWith('?OTR'))
                return (g.createElement("span", {
                    className: "_89h"
                }, "[encrypted message]"));
            p = p.replace(/\s+$/, '');
            if (p.length === 0)
                return null;
            var q = this.props.ranges;
            if (q === undefined)
                q = m(p);
            return (g.createElement(j, {
                interpolator: n,
                text: p,
                ranges: q,
                renderEmoticons: true,
                renderEmoji: true
            }));
        }
    });
    e.exports = o;
}, null);
__d("MercuryMessageError.react", ["CurrentUser", "ImmutableObject", "MercuryErrorInfo", "MercuryMessages", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    'use strict';
    var n = k.PropTypes, o = k.createClass({
        displayName: "MercuryMessageError",
        propTypes: {
            authorFBID: n.string,
            message: n.instanceOf(h).isRequired
        },
        getDefaultProps: function() {
            return {
                authorFBID: g.getID()
            };
        },
        render: function() {
            var p = this.props.message, q = p.error_data;
            return (k.createElement("div", k.__spread({}, this.props, {
                className: m(this.props.className, this._getClassNameFromStatus(p)),
                tabIndex: i.isTransient(q) ? 0: null,
                onClick: i.isTransient(q) ? this.messageResend: null
            }), k.createElement("div", {
                className: "_2fs1"
            }), k.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: this._getTextFromStatus(p)
                }
            })));
        },
        messageResend: function() {
            j.getForFBID(this.props.authorFBID).resendMessage(this.props.message);
        },
        _getClassNameFromStatus: function(p) {
            if (i.hasErrorStatus(p)) {
                return (("_2fs2") + (' ' + "_2fs3") + (i.isTransient(p.error_data) ? ' ' + "_2fs4" : '') + (i.isPermanent(p.error_data) ? ' ' + "_2fs5" : ''));
            } else 
                return "_2fs6 _2fs2";
        },
        _getTextFromStatus: function(p) {
            var q = '', r = p.error_data;
            if (i.hasErrorStatus(p))
                q = i.getMessage(r);
            if (typeof q === 'object' && q.__html)
                q = q.__html;
            return q;
        }
    });
    e.exports = o;
}, null);
__d("MercuryAudioPlayer", ["Event", "Arbiter", "DOM", "Flash", "UserAgent_DEPRECATED", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 200;
    function n() {
        if (k.webkit()&&!k.chrome())
            return false;
        var w = i.create('audio'), x = false;
        try {
            if (!!w.canPlayType)
                if (w.canPlayType('video/mp4;').replace(/^no$/, ''))
                    x = true;
        } finally {
            return x;
        }
    }
    function o() {
        return j.isAvailable();
    }
    var p = function() {
        this.interval = null;
        this.arbiterInstance = null;
        this.audio = i.create('audio');
        g.listen(this.audio, 'playing', function() {
            this.informAttachment('playing', this.audio.currentTime);
            this.interval = setInterval(function() {
                this.informAttachment('playing', this.audio.currentTime);
            }.bind(this), m);
        }.bind(this));
        g.listen(this.audio, 'ended', function() {
            clearInterval(this.interval);
            this.informAttachment('finished');
        }.bind(this));
    };
    l(p.prototype, {
        setAudio: function(w, x) {
            this.audio.setAttribute('src', w);
            this.arbiterInstance = x;
        },
        informAttachment: function(w, x) {
            if (this.arbiterInstance)
                this.arbiterInstance.inform(w, x);
        },
        play: function() {
            this.audio.play();
            this.informAttachment('played');
        },
        resume: function() {
            this.audio.play();
            this.informAttachment('played');
        },
        pause: function() {
            this.audio.pause();
            clearInterval(this.interval);
            this.informAttachment('paused');
        },
        getType: function() {
            return 'html5';
        }
    });
    var q = function() {
        this.src = null;
        this.arbiterInstance = null;
        var w = i.create('div');
        document.body.appendChild(w);
        this.swf = j.embed('/swf/SoundStreamPlayer.swf', w, null, {});
        this.interval = null;
        h.subscribe('soundstream/finished', function() {
            clearInterval(this.interval);
            this.informAttachment('finished');
        }.bind(this));
    };
    l(q.prototype, {
        setAudio: function(w, x) {
            this.src = w;
            this.arbiterInstance = x;
        },
        informAttachment: function(w, x) {
            if (this.arbiterInstance)
                this.arbiterInstance.inform(w, x);
        },
        play: function() {
            this.swf.playSound(this.src);
            this.interval = setInterval(function() {
                var w = this.swf.getCurrentTime();
                this.informAttachment('playing', w);
            }.bind(this), m);
            this.informAttachment('played');
        },
        resume: function() {
            this.swf.resume();
            this.informAttachment('played');
        },
        pause: function() {
            clearInterval(this.interval);
            this.swf.pause();
            this.informAttachment('paused');
        },
        getType: function() {
            return 'flash';
        }
    });
    function r() {
        if (n()) {
            return new p();
        } else if (o())
            return new q();
        return false;
    }
    var s = null, t = null, u = 0;
    function v(w, x) {
        this.src = w;
        this.arbiterInstance = x;
        this.audio_id=++u;
        s !== null || (s = r());
        if (!s)
            return false;
    }
    l(v.prototype, {
        getType: function() {
            if (!s) {
                return false;
            } else 
                return s.getType();
        },
        play: function(w) {
            if (w && t == this.audio_id) {
                s.resume();
            } else {
                this.pause();
                t = this.audio_id;
                s.setAudio(this.src, this.arbiterInstance);
                s.play();
            }
        },
        pause: function() {
            s.pause();
        }
    });
    e.exports = v;
}, null);
__d("MercuryAttachmentAudioClip.react", ["Arbiter", "ArbiterMixin", "MercuryAudioPlayer", "CurrentUser", "JSLogger", "LeftRight.react", "React", "cx", "shield", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = 'MercuryAttachmentAudioClip/play', r = k.create('mercury_audio_clip'), s = m.createClass({
        displayName: "AudioClip",
        mixins: [h],
        getInitialState: function() {
            this.subscribe('playing', this.updateTime);
            this.subscribe('played', o(this.setState, this, {
                playing: true,
                started: true
            }));
            this.subscribe('paused', o(this.setState, this, {
                playing: false
            }));
            this.subscribe('finished', o(this.setState, this, {
                playing: false,
                started: false,
                time: this.props.duration
            }));
            this.logged = false;
            var t = this.props.downloadOnly ? false: new i(this.props.src, this);
            g.subscribe(q, function(u, v) {
                if (this.props.src != v)
                    this.setState({
                        time: 0
                    });
            }.bind(this));
            return {
                time: 0,
                playing: false,
                started: false,
                duration: this.props.duration,
                audioPlayer: t
            };
        },
        updateTime: function(t, u) {
            this.setState({
                time: u
            });
        },
        play: function() {
            if (this.state.playing) {
                this.state.audioPlayer.pause();
            } else {
                this.state.audioPlayer.play(this.state.started);
                g.inform(q, this.props.src);
                if (!this.logged) {
                    this.logged = true;
                    r.log('play', {
                        uid: j.getID(),
                        duration: this.props.duration
                    });
                }
            }
        },
        _formatSeconds: function(t) {
            if (t) {
                t = Math.ceil(t);
                var u = t%60;
                if (u < 10)
                    u = '0' + u;
                var v = Math.floor(t / 60);
                return v + ':' + u;
            } else 
                return null;
        },
        _renderPlayer: function(t, u) {
            return (m.createElement("a", {
                className: "_1miz",
                href: "#",
                style: {
                    width: t
                },
                onClick: this.play
            }, m.createElement("span", {
                className: "_1mi-"
            }, m.createElement("i", {
                className: "_1mi_"
            })), m.createElement("span", {
                className: "_1mj0"
            }, u), m.createElement("div", {
                className: "_1mj1"
            })));
        },
        render: function() {
            var t = this.state.time, u = this.state.playing, v = this._formatSeconds(this.state.duration), w = this.props.width || 170, x = null, y = Math.ceil((t * (w + 2)) / this.state.duration);
            if (this.state.audioPlayer && this.state.audioPlayer.getType()) {
                var z = this._renderPlayer(w, v), aa = this._renderPlayer(w, v), ba = (("_1mj2") + (u && (t !== 0) ? ' ' + "_1mj3" : '') + (u && (t === 0) ? ' ' + "_4g4x" : ''));
                x = (m.createElement("div", {
                    className: ba
                }, z, m.createElement("div", {
                    className: "_1mj4",
                    style: {
                        width: y
                    }
                }, aa)));
            } else 
                x = (m.createElement("div", {
                    className: "_1mj2"
                }, m.createElement("div", {
                    className: "_1miz"
                }, m.createElement(l, null, m.createElement("a", {
                    className: "_1mj5",
                    href: this.props.src
                }, m.createElement("span", {
                    className: "_3qi6"
                }, m.createElement("i", {
                    className: "_1mj6"
                })), m.createElement("span", {
                    className: "_1mj7"
                }, "Voice Message"), m.createElement("span", {
                    className: "_1mj8"
                }, v)), m.createElement("a", {
                    href: this.props.src,
                    className: "_1mj9"
                }, m.createElement("i", {
                    className: "_1mja"
                }))))));
            return (m.createElement("div", {
                className: "_1mjb"
            }, x));
        }
    });
    e.exports = s;
}, null);
__d("XMessagingVideoAttachmentControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/mercury\/attachments\/video\/", {
        video_id: {
            type: "Int",
            required: true
        },
        window_width: {
            type: "Int",
            required: true
        },
        window_height: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("MercuryAttachmentVideo.react", ["ActorURI", "CroppedImage.react", "Image.react", "React", "ReactPropTypes", "XMessagingVideoAttachmentControllerURIBuilder", "cx", "getViewportDimensions", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = j.createClass({
        displayName: "MercuryAttachmentVideo",
        propTypes: {
            duration: k.number.isRequired,
            name: k.string.isRequired,
            pageID: k.number,
            size: k.shape({
                height: k.number,
                width: k.number
            }),
            thumbnailSize: k.shape({
                height: k.number,
                width: k.number
            }),
            thumbnail: k.string,
            videoID: k.string
        },
        _formatDuration: function() {
            var q = this.props.duration, r = Math.floor(q / 60), s = q%60;
            if (s < 10)
                return r + ':0' + s;
            return r + ':' + s;
        },
        render: function() {
            var q=!!this.props.thumbnail, r = (("_zow") + (' ' + "_59go") + (!q ? ' ' + "_59gq" : '')), s = ((!q ? "_3l6h" : '') + (!q ? ' ' + "uiIconText" : '')), t = n(), u = new l().setInt('video_id', this.props.videoID).setInt('window_width', t.width).setInt('window_height', t.height).getURI();
            if (this.props.pageID)
                u = g.create(u, this.props.pageID);
            if (this.props.thumbnail)
                return (j.createElement("div", {
                    className: r,
                    style: this.props.size
                }, j.createElement("a", {
                    className: s,
                    href: u,
                    role: "button",
                    rel: "async"
                }, j.createElement(h, {
                    crop: this.props.size,
                    size: this.props.thumbnailSize,
                    src: this.props.thumbnail
                }), j.createElement("div", {
                    className: "_zox"
                }), j.createElement("div", {
                    className: "_zoy"
                }, j.createElement(i, {
                    src: o('/images/chat/chat_play_icon.png')
                })), j.createElement("span", {
                    className: "_zoz"
                }, this._formatDuration()))));
            return (j.createElement("div", {
                className: r
            }, j.createElement("a", {
                className: s,
                href: u,
                role: "button",
                rel: "async"
            }, j.createElement(i, {
                src: o('/images/icons/video.gif')
            }), j.createElement("span", {
                className: "_59gp"
            }, this.props.name))));
        }
    });
    e.exports = p;
}, null);
__d("XUIAmbientNUX.react", ["HasLayerContextMixin", "React", "ReactLayer", "ReactAbstractContextualDialog", "XUIAmbientNUXTheme", "XUICloseButton.react", "XUIContextualDialogBody.react", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = h.PropTypes, p = 300, q = 380, r = i.createClass(j.createSpec({
        displayName: 'XUIAmbientNUX',
        theme: k
    })), s = h.createClass({
        displayName: "XUIAmbientNUX",
        mixins: [g],
        propTypes: {
            alignment: o.oneOf(['left', 'center', 'right']),
            behaviors: o.object,
            context: o.object,
            contextRef: o.string,
            customwidth: o.number,
            offsetX: o.number,
            offsetY: o.number,
            onCloseButtonClick: o.func,
            position: o.oneOf(['above', 'below', 'left', 'right']),
            shown: o.bool,
            width: o.oneOf(['wide', 'normal', 'auto', 'custom'])
        },
        _getWidth: function() {
            switch (this.props.width) {
            case 'wide':
                return q;
            case 'custom':
                return this.props.customwidth;
            case 'auto':
                return null;
            default:
                return p;
            }
        },
        render: function() {
            return (h.createElement(r, {
                alignment: this.props.alignment,
                autoFocus: false,
                behaviors: this.props.behaviors,
                context: this.getContextNode(),
                focusContextOnHide: false,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                position: this.props.position,
                shown: this.props.shown,
                width: this._getWidth(this.props)
            }, h.createElement("div", {
                className: "_53iv"
            }, h.createElement(m, null, h.createElement(l, {
                shade: "light",
                className: "_36gl",
                onClick: this.props.onCloseButtonClick
            }), h.createElement("div", {
                className: "_36gn"
            }, this.props.children)))));
        }
    });
    e.exports = s;
}, null);
__d("updatePhotoProgressBar", [], function(a, b, c, d, e, f) {
    'use strict';
    function g(h, event) {
        if (event.loaded != event.total) {
            h.setPosition(50 * event.loaded / event.total);
        } else {
            h.setPosition(50);
            h.setTarget(100, 2000);
        }
    }
    e.exports = g;
}, null);
__d("md5", ["str2rstr"], function(a, b, c, d, e, f, g) {
    function h(u, v) {
        var w = u[0], x = u[1], y = u[2], z = u[3];
        w = j(w, x, y, z, v[0], 7, - 680876936);
        z = j(z, w, x, y, v[1], 12, - 389564586);
        y = j(y, z, w, x, v[2], 17, 606105819);
        x = j(x, y, z, w, v[3], 22, - 1044525330);
        w = j(w, x, y, z, v[4], 7, - 176418897);
        z = j(z, w, x, y, v[5], 12, 1200080426);
        y = j(y, z, w, x, v[6], 17, - 1473231341);
        x = j(x, y, z, w, v[7], 22, - 45705983);
        w = j(w, x, y, z, v[8], 7, 1770035416);
        z = j(z, w, x, y, v[9], 12, - 1958414417);
        y = j(y, z, w, x, v[10], 17, - 42063);
        x = j(x, y, z, w, v[11], 22, - 1990404162);
        w = j(w, x, y, z, v[12], 7, 1804603682);
        z = j(z, w, x, y, v[13], 12, - 40341101);
        y = j(y, z, w, x, v[14], 17, - 1502002290);
        x = j(x, y, z, w, v[15], 22, 1236535329);
        w = k(w, x, y, z, v[1], 5, - 165796510);
        z = k(z, w, x, y, v[6], 9, - 1069501632);
        y = k(y, z, w, x, v[11], 14, 643717713);
        x = k(x, y, z, w, v[0], 20, - 373897302);
        w = k(w, x, y, z, v[5], 5, - 701558691);
        z = k(z, w, x, y, v[10], 9, 38016083);
        y = k(y, z, w, x, v[15], 14, - 660478335);
        x = k(x, y, z, w, v[4], 20, - 405537848);
        w = k(w, x, y, z, v[9], 5, 568446438);
        z = k(z, w, x, y, v[14], 9, - 1019803690);
        y = k(y, z, w, x, v[3], 14, - 187363961);
        x = k(x, y, z, w, v[8], 20, 1163531501);
        w = k(w, x, y, z, v[13], 5, - 1444681467);
        z = k(z, w, x, y, v[2], 9, - 51403784);
        y = k(y, z, w, x, v[7], 14, 1735328473);
        x = k(x, y, z, w, v[12], 20, - 1926607734);
        w = l(w, x, y, z, v[5], 4, - 378558);
        z = l(z, w, x, y, v[8], 11, - 2022574463);
        y = l(y, z, w, x, v[11], 16, 1839030562);
        x = l(x, y, z, w, v[14], 23, - 35309556);
        w = l(w, x, y, z, v[1], 4, - 1530992060);
        z = l(z, w, x, y, v[4], 11, 1272893353);
        y = l(y, z, w, x, v[7], 16, - 155497632);
        x = l(x, y, z, w, v[10], 23, - 1094730640);
        w = l(w, x, y, z, v[13], 4, 681279174);
        z = l(z, w, x, y, v[0], 11, - 358537222);
        y = l(y, z, w, x, v[3], 16, - 722521979);
        x = l(x, y, z, w, v[6], 23, 76029189);
        w = l(w, x, y, z, v[9], 4, - 640364487);
        z = l(z, w, x, y, v[12], 11, - 421815835);
        y = l(y, z, w, x, v[15], 16, 530742520);
        x = l(x, y, z, w, v[2], 23, - 995338651);
        w = m(w, x, y, z, v[0], 6, - 198630844);
        z = m(z, w, x, y, v[7], 10, 1126891415);
        y = m(y, z, w, x, v[14], 15, - 1416354905);
        x = m(x, y, z, w, v[5], 21, - 57434055);
        w = m(w, x, y, z, v[12], 6, 1700485571);
        z = m(z, w, x, y, v[3], 10, - 1894986606);
        y = m(y, z, w, x, v[10], 15, - 1051523);
        x = m(x, y, z, w, v[1], 21, - 2054922799);
        w = m(w, x, y, z, v[8], 6, 1873313359);
        z = m(z, w, x, y, v[15], 10, - 30611744);
        y = m(y, z, w, x, v[6], 15, - 1560198380);
        x = m(x, y, z, w, v[13], 21, 1309151649);
        w = m(w, x, y, z, v[4], 6, - 145523070);
        z = m(z, w, x, y, v[11], 10, - 1120210379);
        y = m(y, z, w, x, v[2], 15, 718787259);
        x = m(x, y, z, w, v[9], 21, - 343485551);
        u[0] = s(w, u[0]);
        u[1] = s(x, u[1]);
        u[2] = s(y, u[2]);
        u[3] = s(z, u[3]);
    }
    function i(u, v, w, x, y, z) {
        v = s(s(v, u), s(x, z));
        return s((v<<y) | (v>>>(32 - y)), w);
    }
    function j(u, v, w, x, y, z, aa) {
        return i((v & w) | ((~v) & x), u, v, y, z, aa);
    }
    function k(u, v, w, x, y, z, aa) {
        return i((v & x) | (w & (~x)), u, v, y, z, aa);
    }
    function l(u, v, w, x, y, z, aa) {
        return i(v^w^x, u, v, y, z, aa);
    }
    function m(u, v, w, x, y, z, aa) {
        return i(w^(v | (~x)), u, v, y, z, aa);
    }
    function n(u) {
        var v = u.length, w = [1732584193, - 271733879, - 1732584194, 271733878], x;
        for (x = 64; x <= u.length; x += 64)
            h(w, o(u.substring(x - 64, x)));
        u = u.substring(x - 64);
        var y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (x = 0; x < u.length; x++)
            y[x>>2]|=u.charCodeAt(x)<<((x & 3)<<3);
        y[x>>2]|=128<<((x & 3)<<3);
        if (x > 55) {
            h(w, y);
            for (x = 0; x < 16; x++)
                y[x] = 0;
        }
        y[14] = v * 8;
        h(w, y);
        return w;
    }
    function o(u) {
        var v = [], w = 0;
        while (w < 64)
            v[w>>2] = u.charCodeAt(w++) | (u.charCodeAt(w++)<<8) | (u.charCodeAt(w++)<<16) | (u.charCodeAt(w++)<<24);
        return v;
    }
    var p = '0123456789abcdef'.split('');
    function q(u) {
        var v = '', w = 0;
        for (; w < 4; w++)
            v += p[(u>>((w<<3) + 4)) & 15] + p[(u>>(w<<3)) & 15];
        return v;
    }
    function r(u) {
        for (var v = 0; v < u.length; v++)
            u[v] = q(u[v]);
        return u.join('');
    }
    var s = function(u, v) {
        return (u + v) & 4294967295;
    };
    function t(u) {
        if (null === u || undefined === u) {
            return null;
        } else {
            for (var v = 0; v < u.length; v++)
                if (u[v] > "\u007F") {
                    u = g(u);
                    break;
                }
            return r(n(u));
        }
    }
    if (t('hello') != '5d41402abc4b2a76b9719d911017c592')
        s = function(u, v) {
            var w = (u & 65535) + (v & 65535), x = (u>>16) + (v>>16) + (w>>16);
            return (x<<16) | (w & 65535);
        };
    e.exports = t;
}, null);
__d("NubController", ["ArbiterMixin", "Dock", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    function j() {}
    i(j.prototype, g, {
        init: function(k) {
            this.el = k;
            h.registerNubController(k, this);
            return this;
        },
        buttonContentChanged: function() {
            this.inform('nub/button/content-changed');
        },
        flyoutContentChanged: function() {
            this.inform('nub/flyout/content-changed');
        },
        hide: function() {
            h.hide(this.el);
        },
        show: function() {
            h.show(this.el);
        }
    });
    e.exports = j;
}, null);
__d("DataViewPolyfill", [], function(a, b, c, d, e, f) {
    "use strict";
    function g(h, i, j) {
        if (i === undefined) {
            this.$DataViewPolyfill0 = new Uint8Array(h);
        } else if (j === undefined) {
            this.$DataViewPolyfill0 = new Uint8Array(h, i);
        } else 
            this.$DataViewPolyfill0 = new Uint8Array(h, i, j);
        this.byteLength = this.$DataViewPolyfill0.byteLength;
    }
    g.prototype.getUint8 = function(h) {
        if (h >= this.$DataViewPolyfill0.length)
            throw new Error('Trying to read beyond bounds of DataViewPolyfill');
        return this.$DataViewPolyfill0[h];
    };
    g.prototype.getUint16 = function(h, i) {
        var j = this.getUint8(h), k = this.getUint8(h + 1);
        return i ? (k * 256) + j : (j * 256) + k;
    };
    g.prototype.getUint32 = function(h, i) {
        var j = this.getUint8(h), k = this.getUint8(h + 1), l = this.getUint8(h + 2), m = this.getUint8(h + 3);
        return i ? (((m * 256 + l) * 256 + k) * 256) + j : (((j * 256 + k) * 256 + l) * 256) + m;
    };
    g.isSupported = function() {
        return !!a.Uint8Array;
    };
    e.exports = g;
}, null);
__d("Emscripten", [], function(a, b, c, d, e, f) {
    e.exports = {
        isSupported: function() {
            return (typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);
        }
    };
}, null);
__d("XHRHttpError", [], function(a, b, c, d, e, f) {
    var g = 'HTTP_CLIENT_ERROR', h = 'HTTP_PROXY_ERROR', i = 'HTTP_SERVER_ERROR', j = 'HTTP_TRANSPORT_ERROR', k = 'HTTP_UNKNOWN_ERROR';
    function l(m, n) {
        if (n === 0) {
            var o = m.getProtocol();
            if (o === 'file' || o === 'ftp')
                return null;
            return j;
        } else if (n >= 100 && n < 200) {
            return h;
        } else if (n >= 200 && n < 300) {
            return null;
        } else if (n >= 400 && n < 500) {
            return g;
        } else if (n >= 500 && n < 600) {
            return i;
        } else if (n >= 12001 && n < 12156) {
            return j;
        } else 
            return k;
    }
    e.exports = {
        getErrorCode: l,
        HTTP_CLIENT_ERROR: g,
        HTTP_PROXY_ERROR: h,
        HTTP_SERVER_ERROR: i,
        HTTP_TRANSPORT_ERROR: j,
        HTTP_UNKNOWN_ERROR: k
    };
}, null);
__d("XHRRequest", ["ErrorUtils", "URI", "XHRHttpError", "getSameOriginTransport", "invariant", "xhrSimpleDataSerializer"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        errorCode: null,
        errorMsg: null,
        errorType: null
    }, n = {
        loadedBytes: null,
        totalBytes: null
    };
    function o(p) {
        "use strict";
        this.setURI(p);
        this.setMethod('POST');
        this.setIsAsynchronous(true);
        this.setTransportBuilder(j);
        this.setDataSerializer(l);
        this.$XHRRequest0 = this.$XHRRequest0.bind(this);
    }
    o.prototype.setURI = function(p) {
        "use strict";
        this.$XHRRequest1 = new h(p);
        return this;
    };
    o.prototype.getURI = function() {
        "use strict";
        return this.$XHRRequest1;
    };
    o.prototype.setMethod = function(p) {
        "use strict";
        this.$XHRRequest2 = p;
        return this;
    };
    o.prototype.getMethod = function() {
        "use strict";
        return this.$XHRRequest2;
    };
    o.prototype.setData = function(p) {
        "use strict";
        this.$XHRRequest3 = p;
        return this;
    };
    o.prototype.getData = function() {
        "use strict";
        return this.$XHRRequest3;
    };
    o.prototype.setRawData = function(p) {
        "use strict";
        this.$XHRRequest4 = p;
        return this;
    };
    o.prototype.setRequestHeader = function(p, q) {
        "use strict";
        if (!this.$XHRRequest5)
            this.$XHRRequest5 = {};
        this.$XHRRequest5[p] = q;
        return this;
    };
    o.prototype.setTimeout = function(p) {
        "use strict";
        this.$XHRRequest6 = p;
        return this;
    };
    o.prototype.setResponseHandler = function(p) {
        "use strict";
        this.$XHRRequest7 = p;
        return this;
    };
    o.prototype.setErrorHandler = function(p) {
        "use strict";
        this.$XHRRequest8 = p;
        return this;
    };
    o.prototype.setAbortHandler = function(p) {
        "use strict";
        this.$XHRRequest9 = p;
        return this;
    };
    o.prototype.setTimeoutHandler = function(p) {
        "use strict";
        this.$XHRRequesta = p;
        return this;
    };
    o.prototype.setUploadProgressHandler = function(p) {
        "use strict";
        this.$XHRRequestb = p;
        return this;
    };
    o.prototype.setIsAsynchronous = function(p) {
        "use strict";
        this.$XHRRequestc = p;
        return this;
    };
    o.prototype.setTransportBuilder = function(p) {
        "use strict";
        this.$XHRRequestd = p;
        return this;
    };
    o.prototype.setDataSerializer = function(p) {
        "use strict";
        this.$XHRRequeste = p;
        return this;
    };
    o.prototype.send = function() {
        "use strict";
        var p = this.$XHRRequest6, q = this.$XHRRequestd(), r = this.getURI();
        this.$XHRRequestf = q;
        var s;
        k(this.$XHRRequest2 === 'POST' ||!this.$XHRRequest4);
        if (this.$XHRRequest2 === 'GET' || this.$XHRRequest4) {
            r.addQueryData(this.$XHRRequest3);
            s = this.$XHRRequest4;
        } else 
            s = this.$XHRRequeste(this.$XHRRequest3);
        q.onreadystatechange = this.$XHRRequest0;
        if (q.upload && this.$XHRRequestb)
            q.upload.onprogress = this.$XHRRequestg.bind(this);
        if (p)
            this.$XHRRequesth = setTimeout(this.$XHRRequesti.bind(this), p);
        q.open(this.$XHRRequest2, r.toString(), this.$XHRRequestc);
        if (this.$XHRRequest5)
            for (var t in this.$XHRRequest5)
                q.setRequestHeader(t, this.$XHRRequest5[t]);
        q.send(s);
        if (!this.$XHRRequestc)
            q.onreadystatechange(null, true);
    };
    o.prototype.abort = function() {
        "use strict";
        this.$XHRRequestj();
        if (this.$XHRRequest9)
            g.applyWithGuard(this.$XHRRequest9, null, null, null, 'XHRRequest:_abortHandler');
    };
    o.prototype.$XHRRequestj = function() {
        "use strict";
        var p = this.$XHRRequestf;
        if (p) {
            p.onreadystatechange = null;
            p.abort();
        }
        this.$XHRRequestk();
    };
    o.prototype.$XHRRequesti = function() {
        "use strict";
        this.$XHRRequestj();
        if (this.$XHRRequesta)
            g.applyWithGuard(this.$XHRRequesta, null, null, null, 'XHRRequest:_abortHandler');
    };
    o.prototype.$XHRRequest0 = function(p, q) {
        "use strict";
        if (!this.$XHRRequestc && q !== true)
            return;
        var r = this.$XHRRequestf, s = r, t = s.readyState;
        if (t >= 2) {
            var u = t === 4, v = this.getURI(), w = i.getErrorCode(v, r.status), x = this.$XHRRequest7;
            if (w !== null) {
                if (u) {
                    m.errorCode = w;
                    m.errorMsg = r.responseText;
                    m.errorType = 'HTTP';
                    if (this.$XHRRequest8)
                        g.applyWithGuard(this.$XHRRequest8, null, [m], null, 'XHRRequest:_errorHandler');
                }
            } else if (x) {
                var y = null;
                if (x.includeHeaders)
                    y = r.getAllResponseHeaders();
                if (u || (x.parseStreaming && t === 3))
                    g.applyWithGuard(x, null, [r.responseText, y, u], null, 'XHRRequest:handler');
            }
            if (u)
                this.$XHRRequestk();
        }
    };
    o.prototype.$XHRRequestg = function(p) {
        "use strict";
        n.loadedBytes = p.loaded;
        n.totalBytes = p.total;
        if (this.$XHRRequestb)
            g.applyWithGuard(this.$XHRRequestb, null, [n], null, 'XHRRequest:_uploadProgressHandler');
    };
    o.prototype.$XHRRequestk = function() {
        "use strict";
        clearTimeout(this.$XHRRequesth);
        delete this.$XHRRequestf;
    };
    e.exports = o;
}, null);
__d("getCrossOriginTransport", ["ex", "invariant"], function(a, b, c, d, e, f, g, h) {
    function i() {
        try {
            var k = new XMLHttpRequest();
            if (!('withCredentials' in k) && typeof XDomainRequest !== 'undefined')
                k = new XDomainRequest();
            return k;
        } catch (j) {
            throw new Error(g('getCrossOriginTransport: %s', j.message));
        }
    }
    i.withCredentials = function() {
        var j = i();
        h('withCredentials' in j);
        var k = j.open;
        j.open = function() {
            k.apply(this, arguments);
            this.withCredentials = true;
        };
        return j;
    };
    e.exports = i;
}, null);
__d("WebWorker", ["BanzaiLogger", "WebWorkerConfig", "BlobFactory", "EventListener", "URI", "areSameOrigin", "destroyOnUnload", "SubscriptionsHandler", "XHRRequest", "arrayContains", "emptyFunction", "getCrossOriginTransport", "performanceNow", "invariant", "memoize", "merge", "filterObject"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    var x = a.URL || a.webkitURL;
    function y(ea) {
        "use strict";
        this.$WebWorker0 = false;
        this.$WebWorker1 = null;
        this.$WebWorker2 = ea;
        this.$WebWorker3 = null;
        this.$WebWorker4 = q;
        this.$WebWorker5 = q;
        this.$WebWorker6 = [];
        this.$WebWorker7 = false;
        this.$WebWorker8 = new n();
        m(function() {
            if (!this.$WebWorker7)
                this.terminate();
        }.bind(this));
        this.$WebWorker9('constructed');
    }
    y.prototype.setMessageHandler = function(ea) {
        "use strict";
        this.$WebWorker4 = ea || q;
        return this;
    };
    y.prototype.setErrorHandler = function(ea) {
        "use strict";
        this.$WebWorker5 = ea || q;
        return this;
    };
    y.prototype.postMessage = function(ea, fa) {
        "use strict";
        t(!this.isCurrentState('constructed'));
        t(!this.isCurrentState('terminated'));
        if (this.isCurrentState('preparing')) {
            this.$WebWorker6.push(this.postMessage.bind(this, ea, fa));
            return this;
        }
        var ga = {
            type: 'message',
            message: ea
        };
        if (fa) {
            this.$WebWorker3.postMessage(ga, fa);
        } else 
            this.$WebWorker3.postMessage(ga);
        return this;
    };
    y.prototype.terminate = function() {
        "use strict";
        if (this.isCurrentState('executing'))
            this.$WebWorker3.terminate();
        if (!this.isCurrentState('terminated')) {
            this.$WebWorker9('terminated');
            this.$WebWorker3 = null;
            this.$WebWorkera();
            this.$WebWorker6 = [];
        }
        return this;
    };
    y.prototype.execute = function() {
        "use strict";
        t(!this.isCurrentState('terminated'));
        if (['preparing', 'executing'].some(this.isCurrentState, this))
            return this;
        this.$WebWorker9('preparing');
        y.prepareResource(this.$WebWorker2, this.$WebWorkerb.bind(this));
        return this;
    };
    y.prototype.setAllowCrossPageTransition = function(ea) {
        "use strict";
        this.$WebWorker7 = ea;
        return this;
    };
    y.prototype.isCurrentState = function(ea) {
        "use strict";
        t(p(y.states, ea));
        return ea === this.$WebWorker1;
    };
    y.prototype.$WebWorkerb = function() {
        "use strict";
        t(!this.isCurrentState('executing'));
        if (this.isCurrentState('terminated'))
            return;
        t(this.$WebWorker2.sameOriginURL || this.$WebWorker2.source);
        if (this.$WebWorker2.sameOriginURL) {
            this.$WebWorker3 = new a.Worker(this.$WebWorker2.sameOriginURL);
        } else {
            this.$WebWorker3 = new a.Worker(y.evalWorkerURL);
            this.$WebWorker3.postMessage(this.$WebWorker2.source);
        }
        this.$WebWorkerc('ping', Date.now());
        this.$WebWorkerd();
        this.$WebWorker9('executing');
        this.$WebWorker6.forEach(function(ea) {
            return ea();
        });
        this.$WebWorker6 = null;
    };
    y.prototype.$WebWorkera = function() {
        "use strict";
        this.$WebWorker8.release();
    };
    y.prototype.$WebWorkerc = function(ea) {
        "use strict";
        for (var fa = [], ga = 1, ha = arguments.length; ga < ha; ga++)
            fa.push(arguments[ga]);
        this.$WebWorker3.postMessage({
            type: ea,
            args: fa
        });
    };
    y.prototype.$WebWorkere = function(event, ea) {
        "use strict";
        y.$WebWorkere(event, this.$WebWorker2.name, v(ea, {
            cross_page_transition: !!this.$WebWorker7,
            state: this.$WebWorker1
        }));
    };
    y.$WebWorkerf = function() {
        "use strict";
        return Object.keys(w({
            object_url: y.$WebWorkerg(),
            eval_url: ca(),
            data_url: y.$WebWorkerh(),
            worker: y.isSupported(),
            transferables: y.areTransferablesSupported()
        }, function(ea) {
            return !!ea;
        }));
    };
    y.prototype.$WebWorkerd = function() {
        "use strict";
        this.$WebWorker8.addSubscriptions(j.listen(this.$WebWorker3, 'message', this.$WebWorkeri.bind(this)), j.listen(this.$WebWorker3, 'error', this.$WebWorkerj.bind(this)));
    };
    y.prototype.$WebWorkerj = function(ea) {
        "use strict";
        var fa = this.$WebWorker5(ea);
        if (!fa&&!ea.defaultPrevented)
            this.$WebWorkere('exception', {
                message: ea.message
            });
    };
    y.prototype.$WebWorkeri = function(event) {
        "use strict";
        var ea = event.data;
        switch (ea.type) {
        case 'message':
            this.$WebWorker4(ea.message);
            break;
        case 'pong':
            this.$WebWorker0 = true;
            this.$WebWorkere('executed', {
                dt: Math.floor(ea.args[1] - ea.args[0]),
                bytes: this.$WebWorker2.source.length
            });
            break;
        case 'terminate':
            this.terminate();
            break;
        case 'haste-error':
            this.terminate();
            this.$WebWorkere('haste_error', {
                message: ea.message
            });
            break;
        case 'console':
            var fa = ea.args.shift();
            t(p(['log', 'error', 'info', 'debug', 'warn'], fa));
            a.console[fa].apply(a.console, ea.args);
            break;
        }
    };
    y.prototype.$WebWorker9 = function(ea) {
        "use strict";
        t(p(y.states, ea));
        this.$WebWorkere('transition', {
            next_state: ea
        });
        this.$WebWorker1 = ea;
    };
    y.prepareResource = function(ea, fa) {
        "use strict";
        fa = fa || q;
        t(ea.sameOriginURL || ea.url || ea.source);
        t(!!y.isSupported());
        if (ea.sameOriginURL) {
            fa();
        } else if (ea.url && l(new k(ea.url), new k(a.location.href))) {
            ea.sameOriginURL = ea.url;
            fa();
        } else if (ea.source) {
            if (y.$WebWorkerk())
                ea.sameOriginURL = y.$WebWorkerl(ea.source);
            fa();
        } else if (!ea.loading) {
            var ga = s();
            ea.loading = [fa];
            y.$WebWorkerm(ea.url, function(ha) {
                if (ha) {
                    ea.source = ha;
                    if (y.$WebWorkerk())
                        ea.sameOriginURL = y.$WebWorkerl(ha);
                }
                y.$WebWorkere('prepared', ea.name, {
                    dt: Math.floor(s() - ga),
                    bytes: ha.length
                });
                ea.loading.forEach(function(ia) {
                    return ia();
                });
                ea.loading = false;
            });
        } else 
            ea.loading.push(fa);
        return ea;
    };
    y.releaseResource = function(ea) {
        "use strict";
        if (ea.sameOriginURL.indexOf('blob:') === 0) {
            if (x.revokeObjectURL)
                x.revokeObjectURL(ea.sameOriginURL);
            ea.sameOriginURL = null;
        }
        return ea;
    };
    y.isSupported = function() {
        "use strict";
        return ba && (y.$WebWorkerk() || ca());
    };
    y.areTransferablesSupported = function() {
        "use strict";
        return y.isSupported() && da();
    };
    y.$WebWorkerm = function(ea, fa) {
        "use strict";
        new o(ea).setTransportBuilder(r).setMethod('GET').setResponseHandler(function(ga) {
            fa(ga);
        }).setErrorHandler(fa.bind(null, null)).send();
    };
    y.$WebWorkerl = function(ea) {
        "use strict";
        t(y.$WebWorkerk());
        if (y.$WebWorkerg()) {
            var fa = i.getBlob([ea], {
                type: 'application/javascript'
            });
            return x.createObjectURL(fa);
        }
        if (y.$WebWorkerh())
            return 'data:application/javascript,' + encodeURIComponent(ea);
    };
    y.$WebWorkerg = function() {
        "use strict";
        return i.isSupported() && z();
    };
    y.$WebWorkerh = function() {
        "use strict";
        return aa();
    };
    y.$WebWorkerk = function() {
        "use strict";
        return y.$WebWorkerg() || y.$WebWorkerh();
    };
    y.$WebWorkere = function(event, ea, fa) {
        "use strict";
        if (!h.logging.enabled)
            return;
        g.log(h.logging.config, v(fa, {
            features_array: y.$WebWorkerf(),
            event: event,
            resource: ea
        }));
    };
    var z = u(function() {
        var ea, fa;
        if (!x ||!x.createObjectURL)
            return false;
        try {
            ea = x.createObjectURL(i.getBlob([''], {
                type: 'application/javascript'
            }));
            var ha = new a.Worker(ea);
            ha.terminate();
            fa = true;
        } catch (ga) {
            fa = false;
        } finally {
            if (x.revokeObjectURL)
                x.revokeObjectURL(ea);
        }
        return fa;
    }), aa = u(function() {
        var ea;
        try {
            var ga = new a.Worker('data:application/javascript,');
            ga.terminate();
            ea = true;
        } catch (fa) {
            ea = false;
        }
        return ea;
    }), ba=!!a.Worker, ca = u(function() {
        var ea;
        try {
            var ga = new a.Worker(y.evalWorkerURL);
            ga.terminate();
            ea = true;
        } catch (fa) {
            ea = false;
        }
        return ea;
    }), da = u(function() {
        var ea;
        try {
            var ga = new a.Worker(y.evalWorkerURL), ha = new ArrayBuffer(0);
            ga.postMessage({
                buffer: ha
            }, [ha]);
            ga.terminate();
            ea = true;
        } catch (fa) {
            ea = false;
        }
        return ea;
    });
    y.states = ['constructed', 'preparing', 'executing', 'terminated'];
    y.evalWorkerURL = h.evalWorkerURL;
    e.exports = y;
}, null);
__d("WebWorkerPool", ["PooledWebWorker", "emptyFunction"], function(a, b, c, d, e, f, g, h) {
    i.isSupported = function() {
        "use strict";
        return g.isSupported();
    };
    function i(j, k) {
        "use strict";
        this.$WebWorkerPool0 = [];
        for (var l = 0; l < k; l++)
            this.$WebWorkerPool0.push(new g(this, l, j).setErrorHandler(this.$WebWorkerPool1).setMessageHandler(this.$WebWorkerPool2).execute());
        this.$WebWorkerPool3 = 0;
    }
    i.prototype.setMessageHandler = function(j) {
        "use strict";
        this.$WebWorkerPool4 = j || h;
        return this;
    };
    i.prototype.setAllowCrossPageTransition = function(j) {
        "use strict";
        this.$WebWorkerPool0.forEach(function(k) {
            return k.setAllowCrossPageTransition(j);
        });
        return this;
    };
    i.prototype.setErrorHandler = function(j) {
        "use strict";
        this.$WebWorkerPool5 = j || h;
        return this;
    };
    i.prototype.postMessage = function() {
        "use strict";
        for (var j = [], k = 0, l = arguments.length; k < l; k++)
            j.push(arguments[k]);
        var m = this.getWorker();
        m.postMessage.apply(m, j);
        return m;
    };
    i.prototype.$WebWorkerPool2 = function() {
        "use strict";
        for (var j = [], k = 0, l = arguments.length; k < l; k++)
            j.push(arguments[k]);
        j.unshift(this);
        this.getPool().$WebWorkerPool4.apply(this.getPool(), j);
    };
    i.prototype.$WebWorkerPool1 = function() {
        "use strict";
        for (var j = [], k = 0, l = arguments.length; k < l; k++)
            j.push(arguments[k]);
        j.unshift(this);
        return this.getPool().$WebWorkerPool5.apply(this.getPool(), j);
    };
    i.prototype.getWorker = function() {
        "use strict";
        var j = this.$WebWorkerPool0[this.$WebWorkerPool3];
        this.$WebWorkerPool3 = (this.$WebWorkerPool3 + 1)%this.$WebWorkerPool0.length;
        return j;
    };
    e.exports = i;
}, null);
__d("JpegResizer", ["Emscripten", "JpegResizerConfig", "JpegResizeWorkerResource", "WebWorker", "WebWorkerPool", "PUWErrorCodes"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = null;
    n.isSupported = function() {
        "use strict";
        return k.isSupported() && g.isSupported()&&!h.isGKBlacklisted;
    };
    n.getSingleton = function() {
        "use strict";
        if (!m)
            m = new n(n.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);
        return m;
    };
    n.prepareResource = function(o) {
        "use strict";
        j.prepareResource(i, o);
    };
    function n(o) {
        "use strict";
        o = o || n.DEFAULT_POOL_SIZE;
        j.prepareResource(i);
        this.$JpegResizer0 = (new k(i, o)).setErrorHandler(this.$JpegResizer1.bind(this)).setMessageHandler(this.$JpegResizer2.bind(this));
        this.$JpegResizer3 = {};
        this.$JpegResizer4 = n.DEFAULT_RESIZE_HEIGHT;
        this.$JpegResizer5 = n.DEFAULT_RESIZE_WIDTH;
    }
    n.prototype.setHighQuality = function(o) {
        "use strict";
        if (o) {
            this.$JpegResizer4 = n.DEFAULT_RESIZE_HEIGHT;
            this.$JpegResizer5 = n.DEFAULT_RESIZE_WIDTH;
        } else {
            this.$JpegResizer4 = n.LOW_QUALITY_RESIZE_HEIGHT;
            this.$JpegResizer5 = n.LOW_QUALITY_RESIZE_WIDTH;
        }
        return this;
    };
    n.prototype.setAllowCrossPageTransition = function(o) {
        "use strict";
        this.$JpegResizer0.setAllowCrossPageTransition(o);
        return this;
    };
    n.prototype.resizeBlob = function(o, p, q) {
        "use strict";
        var r = this.$JpegResizer0.getWorker();
        if (r.isCurrentState('terminated')) {
            var s = new Error('Worker terminated');
            s.code = l.WORKER_TERMINATED;
            p(s);
            return this;
        }
        var t = r.postMessage({
            blob: o,
            height: this.$JpegResizer4,
            width: this.$JpegResizer5
        }).getIndex();
        this.$JpegResizer6(t).unshift({
            done: p,
            progress: q
        });
        return this;
    };
    n.prototype.$JpegResizer6 = function(o) {
        "use strict";
        if (!this.$JpegResizer3.hasOwnProperty(o))
            this.$JpegResizer3[o] = [];
        return this.$JpegResizer3[o];
    };
    n.prototype.$JpegResizer1 = function(o, p) {
        "use strict";
        o.terminate();
        var q = this.$JpegResizer6(o.getIndex());
        this.$JpegResizer7(p);
        q.forEach(function(r) {
            return r.done(p);
        });
        q.length = 0;
    };
    n.prototype.$JpegResizer2 = function(o, p) {
        "use strict";
        if (p.error)
            this.$JpegResizer7(p.error);
        if (p.done) {
            this.$JpegResizer6(o.getIndex()).pop().done(p.error, p.blob, p.skipped);
        } else {
            var q = this.$JpegResizer6(o.getIndex()), r = q[q.length - 1].progress;
            if (r)
                r({
                    written: p.written,
                    total: p.total
                });
        }
    };
    n.prototype.$JpegResizer7 = function(o) {
        "use strict";
        var p = o.message;
        if (p.indexOf('Not a JPEG file')!==-1) {
            o.code = l.BAD_JPEG;
        } else if (p.indexOf('abort()')!==-1) {
            o.code = l.WORKER_ABORT;
        } else 
            o.code = l.UNKNOWN_RESIZE_ERROR;
    };
    n.DEFAULT_POOL_SIZE = 3;
    n.DEFAULT_RESIZE_HEIGHT = 2048;
    n.DEFAULT_RESIZE_WIDTH = 2048;
    n.LOW_QUALITY_RESIZE_HEIGHT = 960;
    n.LOW_QUALITY_RESIZE_WIDTH = 960;
    e.exports = n;
}, null);
__d("MercuryFileUploader", ["ArbiterMixin", "CSS", "Dialog", "DOM", "Event", "FileForm", "FileFormResetOnSubmit", "FileInput", "FormSubmitOnChange", "MercuryAttachment", "MercuryAttachmentTemplates", "MercuryConstants", "PhotosUploadID", "SubscriptionsHandler", "csx", "fbt", "getObjectValues", "mixin", "shield", "startsWith", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
    var ba = x(g);
    for (var ca in ba)
        if (ba.hasOwnProperty(ca))
            ea[ca] = ba[ca];
    var da = ba === null ? null: ba.prototype;
    ea.prototype = Object.create(da);
    ea.prototype.constructor = ea;
    ea.__superConstructor__ = ba;
    function ea(ga, ha, ia, ja) {
        "use strict";
        this.$MercuryFileUploader0 = ga;
        this.$MercuryFileUploader1 = {};
        this.$MercuryFileUploader2 = {};
        this.$MercuryFileUploader3 = {};
        this.$MercuryFileUploader4 = {};
        this.$MercuryFileUploader5 = {};
        this.$MercuryFileUploader6 = {};
        this.$MercuryFileUploader7 = {};
        this.$MercuryFileUploader8 = {};
        this.updateElements(ha, ia, ja);
    }
    ea.prototype.updateElements = function(ga, ha, ia) {
        "use strict";
        this.$MercuryFileUploader9 && this.$MercuryFileUploader9.release();
        this.$MercuryFileUploader9 = new t();
        this.$MercuryFileUploadera && this.$MercuryFileUploadera.destroy();
        this.$MercuryFileUploadera = new l(ga, [o, m]);
        this.$MercuryFileUploadera.setAllowCrossOrigin(true);
        this.$MercuryFileUploadera.setUploadInParallel(true);
        var ja = j.find(ga, "._4q60"), ka = j.find(ja, "._4q61");
        new n(ja, ka, ha);
        this.$MercuryFileUploader9.addSubscriptions(this.$MercuryFileUploadera.subscribe('submit', function() {
            var la = {
                count: 0,
                file_sizes: []
            };
            if (ha.files) {
                for (var ma = 0; ma < ha.files.length; ma++)
                    if (ha.files[ma].size > r.AttachmentMaxSize) {
                        this.showAttachmentSizeErrorDialog();
                        return false;
                    }
                var na = {};
                for (var oa = 0; oa < ha.files.length; oa++) {
                    var pa = this.$MercuryFileUploaderb();
                    this.$MercuryFileUploaderc(pa, ha.files[oa].name);
                    la.count++;
                    la.file_sizes.push(ha.files[oa].size);
                    na[pa] = ha.files[oa];
                }
                this.$MercuryFileUploadera.setFiles(na);
            } else {
                ia.value = this.$MercuryFileUploaderb();
                this.$MercuryFileUploaderc(ia.value, ha.value);
                la.count = 1;
            }
            this.inform('submit', la);
        }.bind(this)), this.$MercuryFileUploadera.subscribe('success', this.$MercuryFileUploaderd.bind(this)), this.$MercuryFileUploadera.subscribe('failure', this.$MercuryFileUploadere.bind(this)), k.listen(ka, 'click', y(this.inform, this, 'open')));
    };
    ea.prototype.showAttachmentSizeErrorDialog = function() {
        "use strict";
        this.$MercuryFileUploadera.abort();
        this.$MercuryFileUploadera.clear();
        new i().setTitle("The file you have selected is too large").setBody("The file you have selected is too large. The maximum size is 25MB.").setButtons(i.OK).setSemiModal(true).show();
    };
    ea.prototype.addDroppedFiles = function(ga) {
        "use strict";
        if (!this.$MercuryFileUploadera ||!this.$MercuryFileUploadera.canUseXHR())
            return;
        var ha = {}, ia = {
            count: 0,
            file_sizes: []
        };
        for (var ja = 0; ja < ga.length; ja++) {
            var ka = ga[ja];
            if (ka.size > r.AttachmentMaxSize) {
                this.showAttachmentSizeErrorDialog();
                return false;
            }
            var la = this.$MercuryFileUploaderb();
            this.$MercuryFileUploaderc(la, ka.name);
            ha[la] = ka;
            ia.file_sizes.push(ka.size);
            ia.count++;
        }
        this.$MercuryFileUploadera.setFiles(ha);
        this.$MercuryFileUploadera.forceSendViaXHR();
        this.inform('submit', ia);
    };
    ea.prototype.isUploading = function() {
        "use strict";
        return !!Object.keys(this.$MercuryFileUploader6).length;
    };
    ea.prototype.addCachedAttachments = function(ga) {
        "use strict";
        ga.forEach(function(ha) {
            var ia = this.$MercuryFileUploaderb();
            this.$MercuryFileUploaderc(ia, ha.filename);
            this.$MercuryFileUploaderf(ia, ha);
        }.bind(this));
    };
    ea.prototype.addCachedImageFiles = function(ga) {
        "use strict";
        var ha = "Photo";
        ga.forEach(function(ia) {
            var ja = this.$MercuryFileUploaderb();
            this.$MercuryFileUploaderc(ja, ha);
            this.$MercuryFileUploaderf(ja, {
                filename: ia,
                image_id: ia,
                filetype: 'image/jpeg'
            });
        }.bind(this));
    };
    ea.prototype.getAttachments = function() {
        "use strict";
        return w(this.$MercuryFileUploader1);
    };
    ea.prototype.getImageFiles = function() {
        "use strict";
        var ga = Object.keys(this.$MercuryFileUploader2).sort(), ha = [];
        ga.forEach(function(ia) {
            return ha.push(this.$MercuryFileUploader2[ia]);
        }.bind(this));
        return ha;
    };
    ea.prototype.getVideoFiles = function() {
        "use strict";
        return w(this.$MercuryFileUploader3);
    };
    ea.prototype.getAudioFiles = function() {
        "use strict";
        return w(this.$MercuryFileUploader4);
    };
    ea.prototype.getFiles = function() {
        "use strict";
        return w(this.$MercuryFileUploader5);
    };
    ea.prototype.removeAttachments = function() {
        "use strict";
        j.empty(this.$MercuryFileUploader0);
        this.$MercuryFileUploader1 = {};
        this.$MercuryFileUploader2 = {};
        this.$MercuryFileUploader3 = {};
        this.$MercuryFileUploader4 = {};
        this.$MercuryFileUploader5 = {};
        this.$MercuryFileUploader7 = {};
        this.$MercuryFileUploader6 = {};
        this.$MercuryFileUploader8 = {};
        h.hide(this.$MercuryFileUploader0);
        this.inform('dom-updated');
    };
    ea.prototype.destroy = function() {
        "use strict";
        this.$MercuryFileUploader9 && this.$MercuryFileUploader9.release();
        this.$MercuryFileUploadera && this.$MercuryFileUploadera.destroy();
        this.removeAttachments();
    };
    ea.prototype.$MercuryFileUploaderc = function(ga, ha) {
        "use strict";
        var ia = q[':fb:mercury:upload-file-row'].build();
        this.$MercuryFileUploader7[ga] = ia;
        this.$MercuryFileUploader6[ga] = true;
        this.$MercuryFileUploader8[ga] = Date.now();
        j.appendContent(ia.getNode('iconText'), fa(ha));
        k.listen(ia.getNode('closeFileUpload'), 'click', this.$MercuryFileUploaderg.bind(this, ga));
        j.appendContent(this.$MercuryFileUploader0, ia.getRoot());
        h.show(this.$MercuryFileUploader0);
        this.inform('dom-updated');
    };
    ea.prototype.$MercuryFileUploaderg = function(ga, event) {
        "use strict";
        if (this.$MercuryFileUploader6[ga]) {
            this.inform('upload-canceled-during-upload');
        } else if (this.$MercuryFileUploader1[ga] || this.$MercuryFileUploader2[ga] || this.$MercuryFileUploader3[ga] || this.$MercuryFileUploader4[ga] || this.$MercuryFileUploader5[ga])
            this.inform('upload-canceled-after-uploaded');
        delete this.$MercuryFileUploader1[ga];
        delete this.$MercuryFileUploader2[ga];
        delete this.$MercuryFileUploader3[ga];
        delete this.$MercuryFileUploader4[ga];
        delete this.$MercuryFileUploader5[ga];
        delete this.$MercuryFileUploader6[ga];
        delete this.$MercuryFileUploader8[ga];
        var ha = this.$MercuryFileUploader7[ga];
        delete this.$MercuryFileUploader7[ga];
        if (ha) {
            j.remove(ha.getRoot());
            this.inform('dom-updated');
        }
        this.inform('upload-canceled');
        return false;
    };
    ea.prototype.$MercuryFileUploaderh = function(ga, ha) {
        "use strict";
        var ia = this.$MercuryFileUploader7[ga], ja = p.getAttachIconClassByMime(ha);
        h.addClass(ia.getNode('iconText'), ja);
        h.addClass(ia.getRoot(), 'done');
    };
    ea.prototype.$MercuryFileUploaderf = function(ga, ha) {
        "use strict";
        if (this.$MercuryFileUploader6[ga]) {
            delete this.$MercuryFileUploader6[ga];
            if (ha.image_id) {
                this.$MercuryFileUploader2[ga] = ha.image_id;
            } else if (ha.video_id) {
                this.$MercuryFileUploader3[ga] = ha.video_id;
            } else if (ha.audio_id) {
                this.$MercuryFileUploader4[ga] = ha.audio_id;
            } else if (ha.file_id) {
                this.$MercuryFileUploader5[ga] = ha.file_id;
            } else 
                this.$MercuryFileUploader1[ga] = ha;
            this.$MercuryFileUploaderh(ga, ha.filetype);
            this.inform('one-upload-completed', {
                upload_time_ms: Date.now() - this.$MercuryFileUploader8[ga]
            });
        }
        if (!this.isUploading())
            this.inform('all-uploads-completed', {
                count: this.getAttachments().length
            });
    };
    ea.prototype.$MercuryFileUploaderd = function(event, ga) {
        "use strict";
        var ha = ga.response.getPayload();
        this.$MercuryFileUploaderf(this.$MercuryFileUploaderi(ga), ha.metadata[0]);
    };
    ea.prototype.$MercuryFileUploadere = function(event, ga) {
        "use strict";
        this.inform('one-upload-failed');
        this.$MercuryFileUploaderg(this.$MercuryFileUploaderi(ga), event);
    };
    ea.prototype.$MercuryFileUploaderb = function() {
        "use strict";
        return 'upload_' + s.getNewID();
    };
    ea.prototype.$MercuryFileUploaderi = function(ga) {
        "use strict";
        var ha = ga.response.getPayload();
        if (ga.upload) {
            return ga.upload.getName();
        } else 
            return ha.uploadID;
    };
    function fa(ga) {
        if (ga && z(ga, 'C:\\fakepath\\'))
            return ga.substring(12);
        return ga;
    }
    e.exports = ea;
}, null);
__d("MercuryShareLinkUploader", ["ArbiterMixin", "AsyncRequest", "CSS", "DOM", "Event", "Form", "URLScraper", "WebMessengerEvents", "mixin", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = o(g);
    for (var r in q)
        if (q.hasOwnProperty(r))
            t[r] = q[r];
    var s = q === null ? null: q.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = q;
    function t(u, v, w, x, y) {
        "use strict";
        this.$MercuryShareLinkUploader0 = u;
        this.$MercuryShareLinkUploader1 = v;
        this.$MercuryShareLinkUploader2 = w;
        this.$MercuryShareLinkUploader3 = y;
        this.$MercuryShareLinkUploader4 = false;
        this.$MercuryShareLinkUploader5 = null;
        this.$MercuryShareLinkUploader6 = null;
        k.listen(x, 'click', this.close.bind(this));
        k.listen(y, 'keyup', function() {
            !y.value.length && this.$MercuryShareLinkUploader7.enable();
        }.bind(this));
        this.$MercuryShareLinkUploader7 = new m(y);
        this.$MercuryShareLinkUploader7.subscribe('match', function(z, aa) {
            this.loadShare(aa && aa.url);
        }.bind(this));
    }
    t.prototype.getAttachData = function() {
        "use strict";
        return this.loadAttachData(this.$MercuryShareLinkUploader4, this.$MercuryShareLinkUploader0, this.$MercuryShareLinkUploader3);
    };
    t.prototype.loadAttachData = function(u, v, w, x) {
        "use strict";
        if (u) {
            var y = l.serialize(v), z = y.attachment && y.attachment.params, aa = y.link_metrics ? y.link_metrics.no_image: true;
            if (!z || p(z))
                return null;
            var ba = x ? x(): w.value;
            if (ba.indexOf(z.url)===-1)
                return y;
            if (!z.summary&&!z.favicon && aa && z.title && z.url && z.url.substr(0, z.title.length) === z.title)
                return null;
            return y;
        }
        return null;
    };
    t.prototype.check = function() {
        "use strict";
        this.$MercuryShareLinkUploader7.check();
    };
    t.prototype.close = function() {
        "use strict";
        this.$MercuryShareLinkUploader8();
        this.$MercuryShareLinkUploader7.disable();
        this.inform('closed');
    };
    t.prototype.clear = function() {
        "use strict";
        this.$MercuryShareLinkUploader8();
        this.$MercuryShareLinkUploader7.enable();
    };
    t.prototype.enable = function() {
        "use strict";
        this.$MercuryShareLinkUploader7.enable();
    };
    t.prototype.disable = function() {
        "use strict";
        this.$MercuryShareLinkUploader7.disable();
    };
    t.prototype.loadShare = function(u) {
        "use strict";
        this.$MercuryShareLinkUploader5 = u;
        this.$MercuryShareLinkUploader6 && this.$MercuryShareLinkUploader6.abort();
        this.$MercuryShareLinkUploader6 = new h().setMethod('POST').setURI('/ajax/share_scrape.php').setData({
            u: u
        }).setHandler(this.$MercuryShareLinkUploader9.bind(this).bind(null, u)).setStatusElement(this.$MercuryShareLinkUploader2);
        this.$MercuryShareLinkUploader6.send();
        this.inform('link-detected');
    };
    t.prototype.$MercuryShareLinkUploader9 = function(u, v) {
        "use strict";
        if (this.$MercuryShareLinkUploader5 !== u)
            return;
        this.$MercuryShareLinkUploader5 = null;
        this.$MercuryShareLinkUploader6 = null;
        i.show(this.$MercuryShareLinkUploader0);
        j.empty(this.$MercuryShareLinkUploader1);
        j.setContent(this.$MercuryShareLinkUploader1, v.payload);
        this.$MercuryShareLinkUploader4 = true;
        if (!this.getAttachData()) {
            this.close();
            return;
        }
        n.detailDOMChanged();
    };
    t.prototype.$MercuryShareLinkUploader8 = function() {
        "use strict";
        i.hide(this.$MercuryShareLinkUploader0);
        this.$MercuryShareLinkUploader4 = false;
        this.$MercuryShareLinkUploader5 = null;
        this.$MercuryShareLinkUploader6 && this.$MercuryShareLinkUploader6.abort();
        this.$MercuryShareLinkUploader6 = null;
        this.$MercuryShareLinkUploader7.reset();
        n.detailDOMChanged();
    };
    e.exports = t;
}, null);
__d("VideoCallRecordMessageDialog", ["AsyncDialog", "AsyncRequest", "Dialog", "URI", "tx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {
        get: function(m, n) {
            var o = "Would you like to leave a message?", p = "New Message";
            return new i().setTitle(k._("{firstname} is Unavailable", {
                firstname: n
            })).setBody(o).setButtons([{
                name: 'record-message',
                label: p
            }, i.CANCEL]).setHandler(function() {
                var q = j('/ajax/messaging/composer.php').setQueryData({
                    ids: [m],
                    autoloadvideo: true
                }).toString();
                g.send(new h(q));
            });
        }
    };
    e.exports = l;
}, null);
__d("XSkypeDeprecationWarningDialogControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/videocall\/skype_deprecation_warning\/", {
        __asyncDialog: {
            type: "Int"
        }
    });
}, null);
__d("VideoCallSkypeDeprecationWarning", ["AsyncDialog", "AsyncRequest", "CacheStorage", "VideoCallSupport", "XSkypeDeprecationWarningDialogControllerURIBuilder", "FBRTCLogger"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 'localstorage', n = 'RTC_', o = 'SKYPE_DEPRECATION_STATE', p = 1000 * 60 * 60 * 24;
    function q(r) {
        "use strict";
        this.$VideoCallSkypeDeprecationWarning0 = new i(m, n);
        this.$VideoCallSkypeDeprecationWarning1 = r;
        this.$VideoCallSkypeDeprecationWarning2 = l.getInstance();
    }
    q.prototype.showWarningOrStartCall = function(r, s) {
        "use strict";
        if (this.$VideoCallSkypeDeprecationWarning3(r)) {
            this.$VideoCallSkypeDeprecationWarning4(r);
        } else if (this.$VideoCallSkypeDeprecationWarning5(r)) {
            this.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(r, s || l.Trigger.CHAT_TAB_ICON);
        } else 
            this.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(r);
    };
    q.prototype.$VideoCallSkypeDeprecationWarning5 = function(r) {
        "use strict";
        if (!this.$VideoCallSkypeDeprecationWarning1.canCallByWebrtc(r))
            return false;
        if (!j.isPluginInstalled(false))
            return true;
        return this.$VideoCallSkypeDeprecationWarning6().optedInToWebRTC;
    };
    q.prototype.$VideoCallSkypeDeprecationWarning3 = function(r) {
        "use strict";
        if (!this.$VideoCallSkypeDeprecationWarning1.canCallByWebrtc(r))
            return false;
        if (!j.isPluginInstalled(false))
            return false;
        var s = this.$VideoCallSkypeDeprecationWarning6();
        return !s.optedInToWebRTC && (Date.now() - s.updatedAt) > p;
    };
    q.prototype.$VideoCallSkypeDeprecationWarning4 = function(r) {
        "use strict";
        this.$VideoCallSkypeDeprecationWarning2.logInfo(r, null, 'Show Deprecation Dialog');
        var s = new k().getURI(), t = new h(s), u = this;
        this.$VideoCallSkypeDeprecationWarning7();
        g.send(t, function(v) {
            v.subscribe('confirm', function() {
                v.hide();
                u.$VideoCallSkypeDeprecationWarning8();
                u.$VideoCallSkypeDeprecationWarning1.makeWebRTCCall(r, l.Trigger.SKYPE_DEPRECATION_DIALOG);
                u.$VideoCallSkypeDeprecationWarning2.logCallAction(r, null, l.CallAction.TRY_NEW);
            });
            v.subscribe('cancel', function() {
                u.$VideoCallSkypeDeprecationWarning1.makeSkypeCall(r);
                u.$VideoCallSkypeDeprecationWarning2.logCallAction(r, null, l.CallAction.START_SKYPE);
            });
        });
    };
    q.prototype.$VideoCallSkypeDeprecationWarning7 = function() {
        "use strict";
        this.$VideoCallSkypeDeprecationWarning0.set(o, {
            optedInToWebRTC: false,
            updatedAt: Date.now()
        });
    };
    q.prototype.$VideoCallSkypeDeprecationWarning8 = function() {
        "use strict";
        this.$VideoCallSkypeDeprecationWarning0.set(o, {
            optedInToWebRTC: true,
            updatedAt: Date.now()
        });
    };
    q.prototype.$VideoCallSkypeDeprecationWarning6 = function() {
        "use strict";
        var r = this.$VideoCallSkypeDeprecationWarning0.get(o);
        if (r)
            return r;
        return {
            optedInToWebRTC: false,
            updatedAt: 0
        };
    };
    q.prototype.ut_setStorage = function(r) {
        "use strict";
        this.$VideoCallSkypeDeprecationWarning0 = r;
    };
    e.exports = q;
}, null);
__d("ChatActivity", ["Event", "Arbiter", "AvailableList", "AvailableListConstants", "JSLogger", "MercuryConfig", "PresenceState", "UserActivity", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = l.activity_limit || 60000, q = l.idle_limit || 1800000, r = l.idle_poll_interval || 300000, s = k.create('chat_activity'), t = Date.now(), u = t, v = true;
    function w() {
        var aa = Date.now();
        return !!(v && (aa - t < p));
    }
    var x = o(new h(), {
        isActive: w
    });
    function y() {
        var aa = t;
        t = Date.now();
        if (t - aa > q) {
            s.debug('idle_to_active', aa);
            m.doSync();
        }
        x.inform('activity');
    }
    i.subscribe(j.ON_AVAILABILITY_CHANGED, function() {
        if (!i.isUserIdle())
            u = Date.now();
    });
    g.listen(window, 'focus', function() {
        v = true;
        y();
    });
    g.listen(window, 'blur', function() {
        v = false;
    });
    n.subscribe(function() {
        y();
    });
    function z(aa) {
        var ba = aa && aa.at && m.verifyNumber(aa.at);
        if (typeof ba !== 'number')
            ba = null;
        return ba || 0;
    }
    setInterval(function() {
        var aa = Date.now(), ba = z(m.get()), ca = Math.max(t, ba, u);
        if (aa - ca > q) {
            s.debug('idle', {
                cookie: ba,
                local: t,
                presence: u
            });
            x.inform('idle', aa - ca);
        }
    }, r);
    m.registerStateStorer(function(aa) {
        var ba = z(aa);
        if (ba < t)
            aa.at = t;
        return aa;
    });
    h.subscribe(k.DUMP_EVENT, function(aa, ba) {
        ba.chat_activity = {
            activity_limit: p,
            idle_limit: q,
            idle_poll_interval: r,
            last_active_time: t,
            last_global_active_time: u
        };
    });
    e.exports = x;
}, null);
__d("ChatAnimatedGifs", ["URI"], function(a, b, c, d, e, f, g) {
    var h = {
        shouldHideBody: function(i) {
            if (!i.has_attachment)
                return false;
            for (var j = 0; j < i.attachments.length; j++) {
                var k = i.attachments[j];
                if (k.preview_url) {
                    var l = h.getRawUrlFromSafeUrl(k.preview_url);
                    if (i.body == l)
                        return true;
                }
            }
            return false;
        },
        getRawUrlFromSafeUrl: function(i) {
            return g(i).getQueryData().url;
        }
    };
    e.exports = h;
}, null);
__d("MercuryTimestampTracker", ["MercuryActionTypeConstants", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryServerRequests", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        this._fbid = m;
        this._serverRequests = j.getForFBID(this._fbid);
        this._lastTimestamp = 0;
        this._serverRequests.subscribe('update-messages', function(n, o) {
            if (!o.actions ||!o.actions.length)
                return;
            if (o.payload_source == h.CLIENT_SEND_MESSAGE || o.payload_source == h.UNKNOWN)
                return;
            for (var p = 0; p < o.actions.length; p++) {
                var q = o.actions[p], r = q.action_type;
                if (r == g.USER_GENERATED_MESSAGE && q.thread_id && q.timestamp > this._lastTimestamp)
                    this._lastTimestamp = q.timestamp;
            }
        }.bind(this));
    }
    k(l.prototype, {
        getLastUserMessageTimestamp: function() {
            return this._lastTimestamp;
        }
    });
    k(l, i);
    e.exports = l;
}, null);
__d("ChatTabModel", ["Arbiter", "ArbiterMixin", "ChatBehavior", "ChatConfig", "LogHistory", "JSLogger", "MercuryAssert", "MercuryLocalIDs", "PresenceInitialData", "PresenceState", "PresenceUtil", "areJSONRepresentationsEqual", "arrayContains", "copyProperties", "MercuryServerRequests", "MercuryThreads", "MercuryTimestampTracker"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = b('MercuryServerRequests').get(), v = b('MercuryThreads').get(), w = b('MercuryTimestampTracker').get(), x = [], y = null, z = null, aa = null;
    function ba() {
        return parseInt(o.serverTime, 10);
    }
    var ca = j.get('tab_max_load_age') || 3600000, da = ba() - ca, ea = 0, fa = 20, ga = k.getInstance('chat_tab_model'), ha = false;
    function ia(bb) {
        var cb = p.verifyNumber(bb.uct2);
        if (!cb || typeof cb !== 'number') {
            ga.warn('bad_cookie_version', bb);
            return null;
        }
        if (cb < ea || cb < da)
            return null;
        return cb;
    }
    function ja(bb) {
        if (bb.uct2 == ea)
            return;
        var cb = ia(bb), db = {};
        if (!cb) {
            db.old_tabs = bb && bb.t2 && JSON.stringify(bb.t2);
            db.old_promoted = bb && bb.lm2;
            db.old_time = bb && bb.uct2;
            db.old_reason = bb && bb.tr;
            db.old_window = bb && bb.tw;
            var eb = [];
            x.forEach(function(fb) {
                if (!fb.fragile) {
                    var gb = {
                        i: fb.id,
                        si: fb.server_id
                    };
                    if (fb.raised)
                        gb.r = 1;
                    eb.push(gb);
                }
            });
            bb.t2 = eb;
            bb.lm2 = y;
            bb.uct2 = ea;
            bb.tr = aa;
            bb.tw = q.getSessionID();
            db.new_tabs = JSON.stringify(bb.t2);
            db.new_promoted = bb.lm2;
            db.new_time = bb.uct2;
            db.new_reason = bb.tr;
            db.new_window = bb.tw;
            ga.debug('store', db);
        } else {
            db.tabs = bb && bb.t2 && JSON.stringify(bb.t2);
            db.promoted = bb && bb.lm2;
            db.time = bb && bb.uct2;
            db.reason = bb && bb.tr;
            db.window = bb && bb.tw;
            db.last_change_time = ea;
            db.last_change_reason = aa;
            db.min_change_time = da;
            ga.warn('store_bad_state', db);
        }
        return bb;
    }
    function ka(bb) {
        if (bb) {
            var cb = ia(bb);
            if (cb && cb !== ea) {
                var db = {};
                db.old_tabs = JSON.stringify(x);
                db.old_promoted = y;
                db.old_time = ea;
                db.old_reason = aa;
                db.window_id = q.getSessionID();
                db.cookie_tabs = bb && bb.t2 && JSON.stringify(bb.t2);
                db.cookie_promoted = bb && bb.lm2;
                db.cookie_time = bb && bb.uct2;
                db.cookie_reason = bb && bb.tr;
                db.cookie_window = bb && bb.tw;
                ea = cb;
                aa = 'load';
                var eb = la(bb.t2, bb.lm2 || null);
                db.load_result = eb;
                db.new_tabs = JSON.stringify(x);
                db.new_promoted = y;
                db.new_time = ea;
                db.new_reason = aa;
                var event = 'load';
                if (!ha)
                    event += '_init';
                ga.log(event, db);
                return eb;
            }
        } else 
            ga.warn('load_bad_state', bb);
        return false;
    }
    function la(bb, cb) {
        if (ma(bb, cb)) {
            var db = x.filter(function(gb) {
                return gb.fragile;
            }), eb = {};
            y = null;
            x = bb.map(function(gb) {
                var hb = {
                    id: gb.i,
                    server_id: gb.si
                };
                if (hb.id == cb)
                    y = hb.id;
                if (gb.r)
                    hb.raised = true;
                eb[hb.id] = hb;
                return hb;
            });
            x = x.filter(function(gb) {
                return gb != null;
            });
            if (z)
                for (var fb in z)
                    if (!eb[fb] ||!eb[fb].raised)
                        delete z[fb];
            db = db.filter(function(gb) {
                return !eb[gb.id];
            });
            x = x.concat(db);
            qa();
            return true;
        }
        return false;
    }
    function ma(bb, cb) {
        if (cb != y)
            return true;
        var db = x.filter(function(gb) {
            return !gb.fragile;
        });
        if (bb.length != db.length)
            return true;
        for (var eb = 0, fb = bb.length; eb < fb; eb++)
            if (!r(bb[eb], db[eb]))
                return true;
        return false;
    }
    function na(bb, cb, db) {
        var eb = ka(p.get());
        if (cb === undefined || cb > ea) {
            if (bb()) {
                eb = true;
                aa = db || null;
                pa(cb);
            }
        } else 
            ga.error('rejected', {
                change_time: cb,
                state_time: ea
            });
        eb && oa();
    }
    function oa() {
        if (ha)
            za.inform('chat/tabs-changed', za.get());
    }
    function pa(bb) {
        if (bb === undefined)
            bb = Math.max(w.getLastUserMessageTimestamp() || 1, ea + 1);
        ea = bb;
        p.doSync();
    }
    function qa(bb) {
        var cb = x.length - fa;
        if (cb > 0)
            x = x.filter(function(db) {
                return db.raised || db.id == bb || cb--<=0;
            });
        if (cb > 0)
            x = x.filter(function(db) {
                return db.id == y || db.id == bb || cb--<=0;
            });
    }
    function ra(bb) {
        for (var cb = 0; cb < x.length; cb++)
            if (x[cb].id == bb)
                return cb;
        return - 1;
    }
    function sa(bb, cb) {
        var db = v.getThreadMetaNow(bb);
        if (!db)
            return false;
        if (db.is_canonical_user) {
            return va(bb, cb);
        } else {
            var eb = ta(bb);
            if (eb)
                u.getServerThreadID(bb, function(fb) {
                    if (xa(bb, fb)) {
                        pa();
                        oa();
                    }
                });
            return eb;
        }
    }
    function ta(bb) {
        if (ra(bb)===-1) {
            x.push({
                id: bb,
                fragile: true
            });
            ga.log('open_fragile_tab', {
                tabs: JSON.stringify(x),
                opened: bb,
                window_id: q.getSessionID()
            });
            return true;
        }
        return false;
    }
    function ua(bb) {
        var cb = [];
        bb.forEach(function(db) {
            var eb = ra(db);
            if (eb!==-1)
                cb.push(x[eb]);
        });
        x.forEach(function(db) {
            if (!s(bb, db.id))
                cb.push(db);
        });
        na(function() {
            if (ma(cb, y)) {
                x = cb;
                return true;
            }
            return false;
        });
    }
    function va(bb, cb) {
        var db = ra(bb);
        if (db!=-1)
            if (x[db].fragile) {
                x.splice(db, 1);
            } else {
                cb && (x[db].signatureID = cb);
                return true;
            }
        for (var eb = 0; eb <= x.length; eb++)
            if (eb == x.length || x[eb].fragile) {
                x.splice(eb, 0, {
                    id: bb,
                    signatureID: cb
                });
                qa(bb);
                ga.log('open_tab', {
                    tabs: JSON.stringify(x),
                    opened: bb,
                    window_id: q.getSessionID()
                });
                return true;
            }
    }
    function wa(bb) {
        var cb = ra(bb);
        if (cb!=-1 && (!x[cb].raised || y !== bb)) {
            x[cb].raised = true;
            y = bb;
            return true;
        }
        return false;
    }
    function xa(bb, cb) {
        var db = ra(bb);
        if (db!=-1 && x[db].fragile) {
            var eb = x[db];
            eb.fragile = false;
            eb.server_id = cb;
            var fb = [];
            x.forEach(function(gb) {
                if (gb.id != bb) {
                    if (eb && gb.fragile) {
                        fb.push(eb);
                        eb = null;
                    }
                    fb.push(gb);
                }
            });
            if (eb)
                fb.push(eb);
            x = fb;
            ga.log('make_permanent', {
                tabs: JSON.stringify(x),
                tab_id: bb,
                window_id: q.getSessionID()
            });
            return true;
        }
        return false;
    }
    function ya(bb) {
        var cb = ra(bb);
        if (bb == y)
            y = null;
        if (cb!=-1) {
            x.splice(cb, 1);
            ga.log('close_tab', {
                tabs: JSON.stringify(x),
                closed: bb,
                window_id: q.getSessionID()
            });
            return true;
        }
        return false;
    }
    p.registerStateStorer(ja);
    p.registerStateLoader(function(bb) {
        if (ka(bb))
            oa();
    });
    function za() {}
    t(za, h, {
        isTabPromoted: function(bb) {
            if (bb)
                return bb == y;
            return false;
        },
        indexOf: function(bb) {
            return ra(bb);
        },
        getTab: function(bb) {
            m.isThreadID(bb);
            var cb = this.indexOf(bb);
            if (cb>-1) {
                var db = x[cb];
                return t({}, db);
            }
            return null;
        },
        getEmptyTab: function() {
            var bb;
            for (var cb = 0; cb < x.length; cb++) {
                bb = x[cb].id;
                if (v.isNewEmptyLocalThread(bb))
                    return bb;
            }
            bb = n.generateThreadID();
            v.createNewLocalThread(bb, []);
            return bb;
        },
        getServerTime: function() {
            return ba();
        },
        changeShowingTabs: function(bb) {
            return ua(bb);
        },
        closeAllTabs: function() {
            if (x.length) {
                ga.log('close_all_tabs', {
                    closed_tabs: JSON.stringify(x),
                    window_id: q.getSessionID()
                });
                x = [];
                y = null;
                if (z)
                    z = {};
                pa();
                oa();
            }
        },
        closeFragileTabs: function() {
            var bb = [];
            for (var cb = 0; cb < x.length; cb++)
                if (x[cb].fragile&&!v.isNewEmptyLocalThread(x[cb].id)) {
                    bb.push(x[cb]);
                    x.splice(cb);
                    oa();
                    break;
                }
            ga.log('close_fragile_tabs', {
                tabs: JSON.stringify(x),
                fragile_closed: bb,
                window_id: q.getSessionID()
            });
        },
        closeTab: function(bb, cb) {
            m.isThreadID(bb);
            var db = false;
            if (z) {
                delete z[bb];
                db = true;
            }
            na(function() {
                if (ya(bb))
                    db = true;
                return db;
            }, undefined, cb);
        },
        raiseTab: function(bb, cb, db) {
            m.isThreadID(bb);
            var eb = false;
            if (z && cb) {
                z[bb] = true;
                eb = true;
            }
            na(function() {
                if (sa(bb, db))
                    eb = true;
                var fb = ra(bb);
                if (fb!=-1&&!x[fb].raised) {
                    x[fb].raised = true;
                    eb = true;
                    ga.log('raise_tab', {
                        tabs: JSON.stringify(x),
                        raised: bb,
                        window_id: q.getSessionID()
                    });
                }
                return eb;
            });
        },
        get: function() {
            var bb = x.map(function(cb) {
                var db = t({}, cb);
                delete db.fragile;
                if (z)
                    db.raised = z[db.id];
                return db;
            });
            return {
                tabs: bb,
                promoted: y
            };
        },
        openFragileTab: function(bb) {
            m.isThreadID(bb);
            if (ta(bb))
                oa();
        },
        openTab: function(bb) {
            m.isThreadID(bb);
            na(sa.bind(null, bb));
        },
        lowerTab: function(bb) {
            m.isThreadID(bb);
            var cb = false;
            if (z) {
                delete z[bb];
                cb = true;
            }
            na(function() {
                var db = ra(bb);
                if (db!=-1 && x[db].raised) {
                    delete x[db].raised;
                    ga.log('lower_tab', {
                        tabs: JSON.stringify(x),
                        lowered: bb,
                        window_id: q.getSessionID()
                    });
                    cb = true;
                }
                return cb;
            });
        },
        raiseAndPromoteTab: function(bb, cb, db, eb, fb) {
            m.isThreadID(bb);
            var gb = false;
            if (z && cb) {
                z[bb] = true;
                gb = true;
            }
            na(function() {
                if (sa(bb, db))
                    gb = true;
                if (wa(bb)) {
                    gb = true;
                    ga.log('raise_and_promote_tab', {
                        tabs: JSON.stringify(x),
                        promoted: bb,
                        window_id: q.getSessionID()
                    });
                }
                return gb;
            }, eb, fb);
        },
        setPromotedTab: function(bb) {
            m.isThreadID(bb);
            na(wa.bind(null, bb));
        },
        promoteThreadInPlaceOfThread: function(bb, cb, db, eb) {
            m.isThreadID(bb);
            m.isThreadID(cb);
            na(function() {
                var fb = ra(bb), gb = ra(cb);
                if (eb) {
                    y = bb;
                } else if (y === cb)
                    return true;
                var hb = x[fb];
                if (db) {
                    m.isThreadID(db);
                    var ib = ra(db), jb = x[gb];
                    x[gb] = hb;
                    x.splice(fb, 1);
                    x.splice(ib, 0, jb);
                } else {
                    x[fb] = x[gb];
                    x[gb] = hb;
                }
                return true;
            });
        },
        persistLocalRaised: function() {
            if (z) {
                na(function() {
                    var bb = false;
                    x.forEach(function(cb) {
                        if (cb.raised != z[cb.id]) {
                            bb = true;
                            if (z[cb.id]) {
                                cb.raised = true;
                            } else 
                                delete cb.raised;
                        }
                    });
                    return bb;
                });
                ga.log('persist_local_raise', {
                    tabs: JSON.stringify(x),
                    window_id: q.getSessionID()
                });
            }
        }
    });
    g.subscribe(l.DUMP_EVENT, function(bb, cb) {
        cb.chat_tabs = {
            promoted: y,
            tabs: x.map(function(db) {
                return t({}, db);
            }),
            time: ea,
            max_load_age: ca
        };
    });
    function ab() {
        var bb = i.ignoresRemoteTabRaise();
        if (bb&&!z) {
            ga.log('start_ignore_remote_raise');
            z = {};
            oa();
        } else if (!bb && z) {
            ga.log('stop_ignore_remote_raise');
            z = null;
            oa();
        }
    }
    i.subscribe(i.ON_CHANGED, ab);
    ab();
    ka(p.getInitial(), true);
    if (ea === 0)
        ea = ba() - 600000;
    ha = true;
    e.exports = za;
}, null);
__d("TabsViewport", ["Arbiter", "ArbiterMixin", "ChatTabModel", "Dock", "DOM", "DOMDimensions", "Event", "Parent", "Vector", "ViewportBounds", "areJSONRepresentationsEqual", "copyProperties", "csx", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = 175, v = 269, w = 0;
    function x() {
        return u;
    }
    function y() {
        return v;
    }
    function z(aa) {
        this._root = aa;
        var ba = this._recalculateWidth.bind(this);
        m.listen(window, 'resize', ba);
        j.subscribe('resize', ba);
        g.subscribeOnce('sidebar/initialized', ba, g.SUBSCRIBE_NEW);
        i.subscribe('chat/tabs-changed', t(this._recalculateTabs, this, true));
        this._recalculateWidth();
        this._initialized = true;
    }
    r(z.prototype, h, {
        _root: null,
        _initialized: false,
        _availableWidth: 0,
        _maxShown: 1,
        _viewState: null,
        _recalculateWidth: function() {
            var aa = z._getAvailableDockWidth(this._root), ba = Math.max(1, Math.floor(aa / y())), ca = ba != this._maxShown;
            if (!this._viewState || ca || aa <= this._viewState.usedWidth || aa > this._viewState.widthToShowNext) {
                this._availableWidth = aa;
                this._maxShown = ba;
                this._viewState = null;
                this._recalculateTabs(ca);
            }
        },
        _onTabsChanged: function() {
            if (this._initialized) {
                this.inform('tabs-changed');
                this.inform('max-to-show-changed', this._maxShown);
                this.inform('max-to-show-change-completed');
            }
        },
        _recalculateTabs: function(aa) {
            var ba = z._getTabsToShow(i.get(), this._availableWidth);
            if (aa ||!q(this._viewState, ba)) {
                this._viewState = ba;
                this._onTabsChanged();
            }
        },
        getMaxTabsToShow: function() {
            return this._maxShown;
        },
        checkWidth: function() {
            this._recalculateWidth();
        },
        hasRoomForRaisedTab: function() {
            return this._availableWidth - this._viewState.usedWidth > y();
        },
        getTabsToShow: function() {
            return JSON.parse(JSON.stringify(this._viewState.tabsToShow));
        },
        getShowingTabsOrder: function() {
            var aa = i.get(), ba = this._viewState.tabsToShow;
            return aa.tabs.filter(function(ca) {
                return ba[ca.id];
            });
        },
        getRightmostHiddenTab: function() {
            var aa = i.get(), ba = this._viewState.tabsToShow, ca = aa.tabs.filter(function(ea) {
                return !ba[ea.id];
            }), da = ca.shift();
            return da ? da.id : null;
        },
        getLeftmostVisibleTab: function() {
            var aa = this.getShowingTabsOrder(), ba = aa.pop();
            return ba ? ba.id : null;
        },
        getRightmostRaisedTab: function() {
            var aa = this.getShowingTabsOrder(), ba = aa.length;
            for (var ca = 0; ca < ba; ca++)
                if (i.getTab(aa[ca].id).raised)
                    return aa[ca].id;
            return null;
        },
        getRaisedVisibleTabs: function() {
            var aa = [], ba = this.getShowingTabsOrder(), ca = ba.length;
            for (var da = 0; da < ca; da++)
                if (i.getTab(ba[da].id).raised)
                    aa.push(ba[da].id);
            return aa;
        },
        shouldPromoteOnRaise: function(aa) {
            if (!this._viewState.tabsToShow[aa])
                return true;
            if (this._viewState.nextToHide != aa)
                return false;
            var ba = i.getTab(aa), ca = ba && ba.raised;
            return !ca && (this._availableWidth - this._viewState.usedWidth < y() - x());
        }
    });
    r(z, {
        _getAvailableDockWidth: function(aa) {
            var ba = l.getViewportWithoutScrollbarDimensions().width;
            ba -= p.getLeft() + p.getRight();
            ba -= 50;
            var ca = n.byClass(aa, 'fbDock'), da = k.find(ca, "._56ox"), ea = o.getElementDimensions(da).x;
            ba -= ea;
            var fa = k.scry(ca, "._56oy");
            ea += o.getElementDimensions(fa.pop()).x;
            var ga = o.getElementDimensions(ca), ha = ga.x - ea;
            if (ha > w)
                w = ha;
            ba -= w;
            ba -= 15;
            return Math.max(ba, 0);
        },
        _getTabsToShow: function(aa, ba) {
            ba = Math.max(ba, y() + 1);
            function ca(sa, ta) {
                return (sa.raised ||!ta) ? y() : x();
            }
            var da = JSON.parse(JSON.stringify(aa.tabs)), ea =- 1, fa = null;
            if (aa.promoted)
                da.forEach(function(sa, ta) {
                    if (sa.id === aa.promoted) {
                        ea = ta;
                        fa = sa;
                    }
                });
            var ga = 0, ha = false, ia = 0, ja=!fa;
            da.forEach(function(sa, ta) {
                var ua = ca(sa, ha);
                ha = ha ||!sa.raised;
                sa.leftmostOffset = ga + ua;
                ga += ua;
                if (sa.leftmostOffset < ba)
                    ia++;
                ja|=ta == ea;
                sa.alreadyPlacedPromoted = ja;
            });
            function ka(sa, ta, ua) {
                var va = {};
                for (var wa = 0; wa < ta; wa++) {
                    var xa = sa[wa];
                    if (!xa.alreadyPlacedPromoted && wa == ta - 1) {
                        va[ua] = true;
                    } else 
                        va[xa.id] = true;
                }
                return va;
            }
            var la = ka(da, ia, aa.promoted), ma = ka(da, ia - 1, aa.promoted), na = null;
            for (var oa in la)
                if (!ma[oa])
                    na = oa;
            var pa = da[ia - 1], qa = pa ? pa.leftmostOffset: 0, ra = Infinity;
            if (ia < da.length)
                ra = da[ia].leftmostOffset;
            return {
                nextToHide: na,
                tabsToShow: la,
                usedWidth: qa,
                widthToShowNext: ra
            };
        }
    });
    e.exports = z;
}, null);
__d("ChatMentionsNotifications", ["fbt", "CurrentUser", "MercuryParticipants"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        notifyIfMessageToMe: function(k) {
            var l = 'fbid:' + h.getID(), m = k.body;
            i.get(l, function(n) {
                var o = new RegExp(n.short_name, "i");
                if (o.test(m))
                    j._notify(k);
            });
        },
        _notify: function(k) {
            var l = 48, m = k.body;
            if (m.length > l)
                m = m.substr(0, l - 3) + "...";
            new Notification("\"You were tagged in a message!\"", {
                body: m,
                icon: "http://facebook.com//images/icons-large/fb-xl.png"
            });
        }
    };
    e.exports = j;
}, null);
__d("ChatAddToThreadButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = i.createClass({
        displayName: "ChatAddToThreadButton",
        mixins: [h],
        propTypes: {
            onClick: i.PropTypes.func,
            shown: i.PropTypes.bool
        },
        render: function() {
            var n = "Add more friends to chat", o = j.getTrackingInfo(j.types.ADD_TO_THREAD);
            return (i.createElement(g, {
                "aria-label": n,
                className: (("addToThread") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
                "data-ft": o,
                "data-hover": "tooltip",
                "data-tooltip-alignv": "top",
                onClick: this.props.onClick
            }));
        }
    });
    e.exports = m;
}, null);
__d("ChatArchiveWarning.react", ["Image.react", "ReactComponentWithPureRenderMixin", "React", "cx", "ix"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = i.createClass({
        displayName: "ChatArchiveWarning",
        mixins: [h],
        propTypes: {
            isFBAtWork: i.PropTypes.bool,
            shown: i.PropTypes.bool
        },
        render: function() {
            var m = this.props.isFBAtWork ? k('images/chat/tab/archive-grey.png'): k('images/chat/tab/archive.png');
            return (i.createElement(g, {
                src: m,
                className: (("titanArchiveWarning") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                "aria-label": "All employee-to-employee conversations will be archived"
            }));
        }
    });
    e.exports = l;
}, null);
__d("ChatCloseButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = i.createClass({
        displayName: "ChatCloseButton",
        mixins: [h],
        propTypes: {
            onClick: i.PropTypes.func,
            onKeyUp: i.PropTypes.func,
            onMouseDown: i.PropTypes.func,
            active: i.PropTypes.bool
        },
        getDefaultProps: function() {
            return {
                active: false
            };
        },
        render: function() {
            var m = j.getTrackingInfo(j.types.CLOSE_BUTTON), n = "Press Esc to close", o = "Close tab";
            return (i.createElement(g, {
                "aria-label": this.props.active ? n: o,
                className: "close button",
                "data-ft": m,
                "data-hover": "tooltip",
                "data-tooltip-position": "above",
                onClick: this.props.onClick,
                onKeyUp: this.props.onKeyUp,
                onMouseDown: this.props.onMouseDown
            }));
        }
    });
    e.exports = l;
}, null);
__d("VideoCallTourDialog", ["ArbiterMixin", "LegacyContextualDialog", "CSS", "MercuryIDs", "ChatTabTemplates", "VideoCallCore", "VideoCallingTour", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    function o() {
        this._dialog = null;
    }
    n(o.prototype, g);
    n(o.prototype, {
        render: function(p, q) {
            var r = j.getUserIDFromThreadID(q);
            if (!r ||!l.availableForCall(r))
                return;
            var s = k[':fb:mercury:call:tour'].build();
            this._dialog = new h();
            this._dialog.init(s.getRoot()).setWidth(250).setAlignH('center').setContext(p).show();
            i.addClass(this._dialog.getRoot(), 'uiContextualDialogWithFooterArrowBottom');
            i.addClass(p, 'video_call_tour');
            this.inform('chat/dialog-rendered', {
                dialog: this,
                thread_id: q
            });
            m.inform('videocallingtour/end');
        },
        updatePosition: function() {
            if (this._dialog && this._dialog.isShown())
                this._dialog.updatePosition();
        },
        hide: function() {
            if (this._dialog && this._dialog.isShown()) {
                this._dialog.hide();
                this._dialog = null;
            }
        }
    });
    e.exports = o;
}, null);
__d("ChatContextualDialogController", ["Event", "ArbiterMixin", "ChatTabModel", "VideoCallingTour", "VideoCallTourDialog", "copyProperties", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = 60000, o = false, p = function(w, x) {
        this._videoCallTour = new k();
        this._threadID = w;
        this._tabMainElement = x;
        this._openDialog = null;
        this._subscriptionTokens = [];
        this._scrollListener = null;
        this._timeout = null;
    };
    function q(w, event, x) {
        if (w._openDialog)
            w._openDialog.updatePosition();
    }
    function r(w) {
        if (w._openDialog)
            w._openDialog.updatePosition();
    }
    function s(w) {
        if (w._openDialog) {
            w._openDialog.hide();
            w._openDialog = null;
        }
        if (w._timeout) {
            clearTimeout(w._timeout);
            w._timeout = null;
        }
        while (w._subscriptionTokens.length)
            w._subscriptionTokens.pop().unsubscribe();
        if (w._scrollListener) {
            w._scrollListener.remove();
            w._scrollListener = null;
        }
    }
    function t(w, event, x) {
        if (x.thread_id === w._threadID) {
            w._openDialog = x.dialog;
            v(w);
            w._timeout = m(w.destroy.bind(w, w._threadID), n);
            w._scrollListener = g.listen(window, 'scroll', r.bind(null, w));
        }
    }
    function u(w, x) {
        if (!w._openDialog) {
            w._subscriptionTokens.push(x.subscribe('chat/dialog-rendered', t.bind(null, w)));
            x.render(w._tabMainElement, w._threadID);
        }
    }
    function v(w) {
        w._subscriptionTokens.push(i.subscribe('chat/tabs-changed', q.bind(null, w)), p.subscribe('dialog/close-all', s.bind(null, w)));
    }
    l(p, h);
    l(p.prototype, {
        destroy: function() {
            s(this);
        },
        tabFocused: function() {
            if (o) {
                u(this, this._videoCallTour);
                return;
            }
        },
        tabNotActive: function() {
            s(this);
        },
        hideVideoCallouts: function() {
            s(this);
        }
    });
    j.subscribe('videocallingtour/start', function() {
        o = true;
        p.inform('dialog/close-all');
    });
    j.subscribe('videocallingtour/end', function() {
        o = false;
    });
    e.exports = p;
}, null);
__d("ChatEmployeeAwayWarning", ["MercuryIDs", "MercuryParticipants", "MercuryViewer"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        updateEmployeeAwayWarning: function(k, l, m) {
            h.get(i.getID(), function(n) {
                var o = n.employee;
                if (o)
                    h.getMulti(k.participants, function(p) {
                        var q = false, r = g.getUserIDFromThreadID(k.thread_id);
                        if (!r)
                            return;
                            var s = 'fbid:' + r;
                            for (var t in p)
                                if (s == p[t].id && p[t].is_employee_away)
                                    q = true;
                                    if (q) {
                                        l();
                                    } else 
                                        m();
                                    });
            });
        }
    };
    e.exports = j;
}, null);
__d("getImageSize", ["DataViewPolyfill"], function(a, b, c, d, e, f, g) {
    var h = a.DataView || g;
    function i(m) {
        return {
            width: m.getUint16(6, true),
            height: m.getUint16(8, true)
        };
    }
    function j(m) {
        return {
            width: m.getUint32(16, false),
            height: m.getUint32(20, false)
        };
    }
    function k(m) {
        var n = m.byteLength, o = 2;
        while (o < n) {
            var p = m.getUint16(o, false);
            o += 2;
            if (p == 65472 || p == 65474) {
                return {
                    width: m.getUint16(o + 5, false),
                    height: m.getUint16(o + 3, false)
                };
            } else 
                o += m.getUint16(o, false);
        }
        return null;
    }
    function l(m) {
        var n = new h(m);
        if (n.getUint8(0) == 255 && n.getUint8(1) == 216)
            return k(n);
        if (n.getUint8(0) == 71 && n.getUint8(1) == 73 && n.getUint8(2) == 70)
            return i(n);
        if (n.getUint8(0) == 137 && n.getUint8(1) == 80 && n.getUint8(2) == 78 && n.getUint8(3) == 71)
            return j(n);
        return null;
    }
    e.exports = l;
    l.gif = i;
    l.png = j;
    l.jpeg = k;
}, null);
__d("ChatPhotoUploader.react", ["ChatAutoSendPhotoUploader", "Image.react", "InlineBlock.react", "Link.react", "MercuryConfig", "React", "SubscriptionsHandler", "cx", "emptyFunction", "fbt", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    'use strict';
    var r = l.createClass({
        displayName: "ChatPhotoUploader",
        propTypes: {
            actionURI: l.PropTypes.string,
            onSubmit: l.PropTypes.func,
            onAllUploadsComplete: l.PropTypes.func,
            onLastUploadFail: l.PropTypes.func,
            onLastUploadCancel: l.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                actionURI: k.upload_url,
                onSubmit: o,
                onAllUploadsComplete: o,
                onLastUploadFail: o,
                onLastUploadCancel: o
            };
        },
        componentDidMount: function() {
            this._uploader = new g(this.refs.form.getDOMNode(), this.refs.input.getDOMNode(), this.refs.attachID.getDOMNode());
            this._subscriptions = new m();
            this._subscriptions.addSubscriptions(this._uploader.subscribe('submit', this._handleSubmit), this._uploader.subscribe('all-uploads-completed', this._handleAllUploadsCompleted), this._uploader.subscribe('last-upload-failed', this._handleLastUploadFailed), this._uploader.subscribe('last-upload-canceled', this._handleLastUploadCanceled));
        },
        shouldComponentUpdate: function(s, t) {
            return s.actionURI != this.props.actionURI;
        },
        componentWillUnmount: function() {
            this._subscriptions && this._subscriptions.release();
            this._uploader && this._uploader.destroy();
        },
        render: function() {
            return (l.createElement("form", {
                action: this.props.actionURI,
                method: "post",
                ref: "form"
            }, l.createElement("input", {
                type: "hidden",
                name: "attach_id",
                ref: "attachID"
            }), l.createElement("input", {
                type: "hidden",
                name: "images_only",
                value: true
            }), l.createElement(i, {
                className: "_m _4q60 _3rzn"
            }, l.createElement(j, {
                className: "_4q61 _509v"
            }, l.createElement(h, {
                className: "_509w",
                src: q('/images/chat/chat_camera_icon.png'),
                alt: "Camera"
            })), l.createElement("input", {
                type: "file",
                className: "_n",
                name: "attachment[]",
                multiple: "true",
                accept: "image/*",
                ref: "input"
            }))));
        },
        _handleSubmit: function(s, t) {
            this.props.onSubmit(s, t);
        },
        _handleAllUploadsCompleted: function(s, t) {
            this.props.onAllUploadsComplete(s, t);
        },
        _handleLastUploadFailed: function(s, t) {
            this.props.onLastUploadFail(s, t);
        },
        _handleLastUploadCanceled: function(s, t) {
            this.props.onLastUploadCancel(s, t);
        },
        isUploading: function() {
            return this._uploader && this._uploader.isUploading();
        },
        uploadFile: function(s) {
            this._uploader.uploadFile(s);
        }
    });
    e.exports = r;
}, null);
__d("ChatShareLinkUploader", ["AsyncRequest", "CSS", "DOM", "URLScraper", "MercuryShareLinkUploader", "MercuryAttachmentTemplates", "Event"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    for (var n in k)
        if (k.hasOwnProperty(n))
            p[n] = k[n];
    var o = k === null ? null: k.prototype;
    p.prototype = Object.create(o);
    p.prototype.constructor = p;
    p.__superConstructor__ = k;
    function p(q, r, s, t) {
        "use strict";
        this.$ChatShareLinkUploader0 = q;
        this.$ChatShareLinkUploader1 = r;
        this.$ChatShareLinkUploader2 = s;
        this.$ChatShareLinkUploader3 = false;
        this.$ChatShareLinkUploader4 = null;
        this.$ChatShareLinkUploader5 = t;
        m.listen(r, 'keyup', function() {
            var u = t ? t(): r.value;
            !u.length && this.$ChatShareLinkUploader6.enable();
        }.bind(this));
        this.$ChatShareLinkUploader6 = new j(r, t);
        this.$ChatShareLinkUploader6.subscribe('match', function(u, v) {
            this.loadShare(v && v.url);
        }.bind(this));
        this.$ChatShareLinkUploader7 = 1337;
        this.$ChatShareLinkUploader8 = null;
    }
    p.prototype.getAttachData = function() {
        "use strict";
        return this.loadAttachData(this.$ChatShareLinkUploader3, this.$ChatShareLinkUploader0, this.$ChatShareLinkUploader1, this.$ChatShareLinkUploader5);
    };
    p.prototype.close = function() {
        "use strict";
        this.$ChatShareLinkUploader9();
        this.$ChatShareLinkUploader6.disable();
        this.inform('closed');
    };
    p.prototype.clear = function() {
        "use strict";
        this.$ChatShareLinkUploader9();
        this.$ChatShareLinkUploader6.enable();
    };
    p.prototype.$ChatShareLinkUploader9 = function() {
        "use strict";
        var q = this.$ChatShareLinkUploader8;
        delete this.$ChatShareLinkUploader8;
        if (q) {
            i.remove(q);
            this.inform('dom-updated');
        }
        this.$ChatShareLinkUploadera();
        this.$ChatShareLinkUploader3 = false;
        this.$ChatShareLinkUploader4 && this.$ChatShareLinkUploader4.abort();
        this.$ChatShareLinkUploader4 = null;
        this.$ChatShareLinkUploader6 && this.$ChatShareLinkUploader6.reset();
    };
    p.prototype.loadShareFromParams = function(q, r) {
        "use strict";
        this.$ChatShareLinkUploaderb(new g().setMethod('POST').setURI('/ajax/share_params.php').setData({
            chat: true,
            share_type: q,
            share_params: r
        }));
    };
    p.prototype.loadShare = function(q, r) {
        "use strict";
        this.$ChatShareLinkUploaderb(new g().setMethod('POST').setURI('/ajax/share_scrape.php').setData({
            chat: true,
            extra_params: JSON.stringify(r),
            u: q
        }));
    };
    p.prototype.$ChatShareLinkUploadera = function() {
        "use strict";
        return (++this.$ChatShareLinkUploader7);
    };
    p.prototype.$ChatShareLinkUploaderc = function() {
        "use strict";
        return this.$ChatShareLinkUploader7;
    };
    p.prototype.$ChatShareLinkUploaderb = function(q) {
        "use strict";
        this.$ChatShareLinkUploader4 && this.$ChatShareLinkUploader4.abort();
        var r = l[':fb:mercury:share-link-row'].build();
        if (this.$ChatShareLinkUploader8)
            i.remove(this.$ChatShareLinkUploader8);
        this.$ChatShareLinkUploader8 = r.getRoot();
        m.listen(r.getNode('closeFileUpload'), 'click', function(event) {
            this.close();
            event.kill();
        }.bind(this));
        i.appendContent(this.$ChatShareLinkUploader0, this.$ChatShareLinkUploader8);
        h.show(this.$ChatShareLinkUploader0);
        this.inform('dom-updated');
        this.$ChatShareLinkUploader4 = q.setHandler(this.$ChatShareLinkUploaderd.bind(this, this.$ChatShareLinkUploadera()));
        this.$ChatShareLinkUploader4.send();
        this.inform('link-detected');
    };
    p.prototype.$ChatShareLinkUploaderd = function(q, r) {
        "use strict";
        if (this.$ChatShareLinkUploaderc() !== q)
            return;
        this.$ChatShareLinkUploader4 = null;
        i.appendContent(this.$ChatShareLinkUploader8, r.payload);
        this.$ChatShareLinkUploader2();
        this.$ChatShareLinkUploader3 = true;
        if (!this.getAttachData()) {
            this.close();
            return;
        }
        h.addClass(this.$ChatShareLinkUploader8, 'done');
    };
    e.exports = p;
}, null);
__d("MercurySharePreview.react", ["AsyncRequest", "Image.react", "ImageBlock.react", "LeftRight.react", "LoadingIndicator.react", "React", "XUICloseButton.react", "cx", "invariant", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = l.createClass({
        displayName: "MercurySharePreview",
        propTypes: {
            imageSize: l.PropTypes.shape({
                width: l.PropTypes.number.isRequired,
                height: l.PropTypes.number.isRequired
            }).isRequired,
            share: l.PropTypes.shape({
                params: l.PropTypes.array,
                type: l.PropTypes.number
            }),
            uri: l.PropTypes.string,
            onClose: l.PropTypes.func,
            onUpdate: l.PropTypes.func
        },
        getInitialState: function() {
            return {
                attachmentData: null,
                loading: false
            };
        },
        componentWillMount: function() {
            this._requestID = 1337;
            this._currentRequest = null;
        },
        componentWillUnmount: function() {
            this._reset();
        },
        componentWillReceiveProps: function(r) {
            o(!(r.share && r.uri));
            if (!r.share&&!r.uri)
                return this._reset();
            var s = this.state.attachmentData || this.state.loading;
            if (r.share&&!s) {
                this._loadFromShare(r.share);
            } else if (r.uri&&!(s && this.props.uri == r.uri))
                this._loadFromURI(r.uri);
        },
        componentDidUpdate: function(r, s) {
            this.props.onUpdate && this.props.onUpdate(this);
        },
        getShareID: function() {
            return this.state.attachmentData && this.state.attachmentData.share_id;
        },
        isLoading: function() {
            return this.state.loading;
        },
        _loadFromShare: function(r) {
            this._currentRequest = new g().setURI('/message_share_attachment/fromParams/').setData({
                image_height: this.props.imageSize.height,
                image_width: this.props.imageSize.width,
                share_params: r.params,
                share_type: r.type
            }).setHandler(this._onShareLoaded.bind(this, this._getNextRequestID()));
            this._currentRequest.send();
            this.setState({
                loading: true,
                attachmentData: null
            });
        },
        _loadFromURI: function(r) {
            this._currentRequest = new g().setURI('/message_share_attachment/fromURI/').setData({
                image_height: this.props.imageSize.height,
                image_width: this.props.imageSize.width,
                uri: r
            }).setHandler(this._onShareLoaded.bind(this, this._getNextRequestID()));
            this._currentRequest.send();
            this.setState({
                loading: true,
                attachmentData: null
            });
        },
        _getNextRequestID: function() {
            return (++this._requestID);
        },
        _getCurrentRequestID: function() {
            return this._requestID;
        },
        _onShareLoaded: function(r, s) {
            if (this._getCurrentRequestID() !== r)
                return;
            this.setState({
                loading: false,
                attachmentData: s.payload
            });
        },
        _close: function() {
            this._reset();
            this.props.onClose && this.props.onClose();
        },
        _reset: function() {
            this._getNextRequestID();
            this._currentRequest && this._currentRequest.abort();
            this._currentRequest = null;
            this.setState({
                loading: false,
                attachmentData: null
            });
        },
        render: function() {
            var r = (("_4zwk") + (!(this.state.attachmentData && this.state.attachmentData.media.image) ? ' ' + "_4zwl" : ''));
            if (this.state.loading)
                return (l.createElement(j, {
                    direction: j.DIRECTION.right,
                    className: p(this.props.className, r)
                }, l.createElement(k, {
                    className: "_4zwm",
                    size: "large",
                    color: "white"
                }), l.createElement(m, {
                    className: "_4zwn",
                    shade: "dark",
                    size: "small",
                    onClick: this._close
                })));
            var s = this.state.attachmentData;
            if (!s)
                return l.createElement("div", null);
            if (s.media && s.media.image)
                return (l.createElement(i, {
                    className: p(this.props.className, r)
                }, l.createElement(h, {
                    src: s.media.image
                }), l.createElement("div", null, l.createElement("div", {
                    className: "_4zwo"
                }, s.title), l.createElement("div", {
                    className: "_4zwp"
                }, s.description), l.createElement("div", {
                    className: "_4zwq"
                }, s.source)), l.createElement(m, {
                    className: "_4zwn",
                    shade: "dark",
                    size: "small",
                    onClick: this._close
                })));
            return (l.createElement(j, {
                direction: j.DIRECTION.right,
                className: p(this.props.className, r)
            }, l.createElement("div", null, l.createElement("div", {
                className: "_4zwo"
            }, s.title), l.createElement("div", {
                className: "_4zwp"
            }, s.description), l.createElement("div", {
                className: "_4zwq"
            }, s.source)), l.createElement(m, {
                className: "_4zwn",
                shade: "dark",
                size: "small",
                onClick: this._close
            })));
        }
    });
    e.exports = q;
}, null);
__d("StickerContextualDialog.react", ["ReactAbstractContextualDialog", "ReactLayer", "cx"], function(a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = 47, k = h.createClass(g.createSpec({
        displayName: 'StickerXUIContextualDialog',
        theme: {
            wrapperClassName: "_53ii",
            arrowDimensions: {
                offset: j,
                length: 16
            }
        }
    }));
    k.WIDTH = {
        NORMAL: 312,
        WIDE: 400
    };
    e.exports = k;
}, null);
__d("MessagesEmoticons.react", ["Grid.react", "React", "cx", "emptyFunction", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.GridItem, m = 8, n = {
        smile: "smile",
        frown: "frown",
        tongue: "tongue",
        grin: "grin",
        gasp: "gasp",
        wink: "wink",
        pacman: "pacman",
        grumpy: "grumpy",
        unsure: "unsure",
        cry: "cry",
        kiki: "kiki",
        glasses: "glasses",
        sunglasses: "sunglasses",
        heart: "heart",
        devil: "devil",
        angel: "angel",
        squint: "squint",
        confused: "confused",
        upset: "upset",
        colonthree: "colonthree",
        like: "like"
    }, o = h.createClass({
        displayName: "MessagesEmoticons",
        propTypes: {
            onEmoticonSelect: h.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                onEmoticonSelect: j
            };
        },
        getEmoticons: function() {
            return Object.keys(n).map(function(p) {
                return (h.createElement(l, {
                    key: p
                }, h.createElement("div", {
                    className: "panelCell"
                }, h.createElement("a", {
                    "aria-label": n[p],
                    className: 'emoticon emoticon_' + p,
                    onClick: function() {
                        return this.props.onEmoticonSelect(p);
                    }.bind(this)
                }))));
            }.bind(this));
        },
        render: function() {
            return (h.createElement("div", {
                className: "emoticonsTable"
            }, h.createElement(g, {
                cols: m,
                alignv: "middle",
                alignh: "center",
                spacing: "pam"
            }, this.getEmoticons())));
        }
    });
    e.exports = o;
}, null);
__d("StickerActions", ["BanzaiLogger", "StickerConstants", "StickersDispatcher"], function(a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = {
        addPack: function(k) {
            i.handleUpdateFromViewActions({
                actions: [{
                    actionType: h.ActionTypes.ADD_PACK,
                    packID: k
                }
                ]
            });
        },
        removePack: function(k) {
            i.handleUpdateFromViewActions({
                actions: [{
                    actionType: h.ActionTypes.REMOVE_PACK,
                    packID: k
                }
                ]
            });
        },
        selectPack: function(k, l) {
            if (!l)
                g.log('StickersLoggerConfig', {
                    event: 'select_pack',
                    packid: k
                });
            i.handleUpdateFromViewActions({
                actions: [{
                    actionType: h.ActionTypes.SELECT_PACK,
                    packID: k
                }
                ]
            });
        },
        resetNumNewPacks: function() {
            i.handleUpdateFromViewActions({
                actions: [{
                    actionType: h.ActionTypes.RESET_NUM_NEW_PACKS
                }
                ]
            });
        }
    };
    e.exports = j;
}, null);
__d("XStickerPackImagesControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/{pack_id}\/images\/", {
        pack_id: {
            type: "Int",
            required: true
        },
        sticker_size: {
            type: "Int"
        }
    });
}, null);
__d("XStickersAddPackControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/addpack\/", {
        pack_id: {
            type: "Int"
        },
        size: {
            type: "String"
        },
        redirect_uri: {
            type: "String"
        },
        is_promoted: {
            type: "Bool"
        }
    });
}, null);
__d("XStickersRemovePackControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/removepack\/", {
        pack_id: {
            type: "Int"
        },
        size: {
            type: "String"
        },
        redirect_uri: {
            type: "String"
        }
    });
}, null);
__d("XStickerStateInitialDataControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/state\/", {});
}, null);
__d("XStickerStatePackDataControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/state\/pack\/", {
        pack_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("XStickerStateStoreDataControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/state\/store\/", {});
}, null);
__d("XStickerSearchPromotePackControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/search\/promotePack\/", {
        sticker_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("XStickerSearchNUXSeenControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/searchNUX\/seen\/", {
        tooltip_only: {
            type: "Bool"
        }
    });
}, null);
__d("XStickerTagImagesControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/tag\/images\/", {
        tag_ids: {
            type: "IntVector",
            required: true
        }
    });
}, null);
__d("XStickerTagDataControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/tag\/data\/", {});
}, null);
__d("XStickerQueryImagesControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/query\/images\/", {
        query: {
            type: "String",
            required: true
        }
    });
}, null);
__d("StickerServerRequests", ["AsyncRequest", "Promise", "XStickerPackImagesControllerURIBuilder", "XStickersAddPackControllerURIBuilder", "XStickersRemovePackControllerURIBuilder", "XStickerStateInitialDataControllerURIBuilder", "XStickerStatePackDataControllerURIBuilder", "XStickerStateStoreDataControllerURIBuilder", "XStickerSearchPromotePackControllerURIBuilder", "XStickerSearchNUXSeenControllerURIBuilder", "XStickerTagImagesControllerURIBuilder", "XStickerTagDataControllerURIBuilder", "XStickerQueryImagesControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    'use strict';
    var t = {
        addPack: function(v, w, x) {
            var y = new j().setInt('pack_id', v).setBool('is_promoted', w).getURI();
            new g(y).setHandler(function(z) {
                return x(z.payload);
            }).send();
        },
        removePack: function(v, w) {
            var x = new k().setInt('pack_id', v).getURI();
            new g(x).setHandler(function(y) {
                return w(y.payload);
            }).send();
        },
        getStickersForPack: function(v, w) {
            var x = new i().setInt('pack_id', v).setInt('sticker_size', w).getURI();
            return new h(function(y, z) {
                return new g().setURI(x).setMethod("POST").setHandler(function(aa) {
                    return y(aa.payload);
                }).send();
            });
        },
        getStickersForTags: function(v, w) {
            new g().setURI(new q().setIntVector('tag_ids', v).getURI()).setMethod("POST").setHandler(function(x) {
                return w(x);
            }).send();
        },
        getStickersForQuery: function(v, w) {
            new g().setURI(new s().setString('query', v).getURI()).setMethod("POST").setHandler(function(x) {
                return w(x);
            }).send();
        },
        fetchTrayData: function(v) {
            return u(new l().getURI(), v, true);
        },
        fetchStoreData: function(v) {
            return u(new n().getURI(), v);
        },
        fetchPackData: function(v, w) {
            return u(new m().setInt('pack_id', v).getURI(), w);
        },
        fetchTagData: function(v) {
            return u(new r().getURI(), v, true);
        },
        markSeenSearchNUX: function() {
            new g(new p().setBool('tooltip_only', false).getURI().toString()).send();
        },
        markSeenSearchTooltipNUX: function() {
            new g(new p().setBool('tooltip_only', true).getURI().toString()).send();
        },
        promotePackSentFromSearch: function(v, w) {
            var x = new o().setInt('sticker_id', v).getURI();
            u(x, w, true);
        }
    };
    function u(v, w, x) {
        return new h(function(y, z) {
            return new g(v).setHandler(function(aa) {
                return y(aa.getPayload());
            }).setAllowCrossPageTransition(x).send();
        }).then(w);
    }
    e.exports = t;
}, null);
__d("StickerImages", ["StickerServerRequests"], function(a, b, c, d, e, f, g) {
    'use strict';
    var h = {}, i = {}, j = {}, k = {
        requestStickersForTags: function(l, m) {
            var n = l.filter(function(o) {
                return !j[o.id];
            }).map(function(o) {
                return o.id;
            });
            if (n.length > 0) {
                g.getStickersForTags(n, function(o) {
                    for (var p in o.payload)
                        j[p] = o.payload[p];
                    m();
                });
            } else 
                m();
        },
        getStickerTagsData: function() {
            return j;
        },
        requestStickersForPack: function(l, m, n) {
            if (!l)
                return;
            if (!i[l]) {
                i[l] = g.getStickersForPack(l, m);
                i[l].then(function(o) {
                    o.forEach(function(p) {
                        return this.cacheSticker(p);
                    }.bind(this));
                }.bind(this));
            }
            i[l].then(function(o) {
                return n(o);
            });
        },
        cacheSticker: function(l) {
            h[l.id] = l;
        },
        getSticker: function(l) {
            return h[l];
        }
    };
    e.exports = k;
}, null);
__d("DialogFitHeight", ["CSS", "DOM", "Event", "Style", "SubscriptionsHandler", "Vector", "csx", "cx", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = 450, q = 100, r = 67, s = 67;
    function t(u) {
        "use strict";
        this.$DialogFitHeight0 = u;
    }
    t.prototype.enable = function() {
        "use strict";
        this.$DialogFitHeight1 = new k();
        this.$DialogFitHeight1.addSubscriptions(this.$DialogFitHeight0.subscribe('beforeshow', this.$DialogFitHeight2.bind(this)), i.listen(window, 'resize', o(this.$DialogFitHeight2.bind(this))));
        this.$DialogFitHeight3 = h.find(this.$DialogFitHeight0.getRoot(), "._4-i2");
        g.addClass(this.$DialogFitHeight3, "_5pfh");
        this.$DialogFitHeight4 = q;
        if (h.scry(this.$DialogFitHeight0.getRoot(), "._4-i0").length)
            this.$DialogFitHeight4 += r;
        if (h.scry(this.$DialogFitHeight0.getRoot(), "._5a8u").length)
            this.$DialogFitHeight4 += s;
    };
    t.prototype.disable = function() {
        "use strict";
        this.$DialogFitHeight1.release();
        this.$DialogFitHeight1 = null;
        g.removeClass(this.$DialogFitHeight3, "_5pfh");
    };
    t.prototype.$DialogFitHeight2 = function() {
        "use strict";
        var u = l.getViewportDimensions().y, v = u - this.$DialogFitHeight4;
        j.set(this.$DialogFitHeight3, 'height', Math.max(p, v) + 'px');
        this.$DialogFitHeight0.updatePosition();
    };
    e.exports = t;
}, null);
__d("StickerStoreController", ["Bootloader", "DialogFitHeight", "DOM", "LayerAutoFocus", "LayerFadeOnHide", "LayerHideOnEscape", "React", "XUIDialog.react", "XUIDialogBody.react", "XUISpinner.react", "cx", "requestAnimationFrame"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    'use strict';
    var s = 688, t = null, u = m.createClass({
        displayName: "StoreLayer",
        getInitialState: function() {
            return {
                renderStore: function() {
                    return (m.createElement("div", {
                        className: "_5r5e"
                    }, m.createElement(p, {
                        background: "light",
                        size: "large"
                    })));
                }
            };
        },
        componentDidMount: function() {
            g.loadModules(["StickerStore.react"], function(x) {
                this.setState({
                    renderStore: function() {
                        return (m.createElement(x, {
                            currentPackID: this.props.packID,
                            onPackSelect: this._packSelected,
                            shown: this.props.shown
                        }));
                    }.bind(this)
                });
            }.bind(this));
        },
        _packSelected: function(x) {
            this.setProps({
                packID: x
            });
        },
        _onToggle: function(x) {
            r(this.setProps.bind(this, {
                shown: x
            }, null));
        },
        render: function() {
            return (m.createElement(n, {
                behaviors: {
                    DialogFitHeight: h,
                    LayerAutoFocus: j,
                    LayerFadeOnHide: k,
                    LayerHideOnEscape: l
                },
                onToggle: this._onToggle,
                shown: this.props.shown,
                width: s
            }, m.createElement(o, {
                className: "_5rq- autofocus"
            }, this.state.renderStore())));
        }
    });
    function v(x) {
        var y = i.create('div');
        i.appendContent(document.body, y);
        t = m.render(m.createElement(u, {
            packID: x,
            shown: true
        }), y);
    }
    var w = {
        showStore: function(x) {
            if (!t) {
                v(x);
            } else 
                t.setProps({
                    shown: true,
                    packID: x
                });
        }
    };
    e.exports = w;
}, null);
__d("StickersFlyoutPackSelector.react", ["Animation", "ImmutableObject", "Locale", "React", "Image.react", "StickerActions", "StickerConfig", "StickerConstants", "StickerState", "StickerStoreController", "XUIBadge.react", "cx", "emptyFunction", "fbt", "ix"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    'use strict';
    var v = 4, w = 200, x = "Sticker Store", y = j.createClass({
        displayName: "StickersFlyoutPackSelector",
        propTypes: {
            isComments: j.PropTypes.bool,
            numNewPacks: j.PropTypes.number,
            packs: j.PropTypes.arrayOf(j.PropTypes.instanceOf(h)).isRequired,
            onPackClick: j.PropTypes.func,
            selectedPackID: j.PropTypes.string,
            resetTagSelectorFunc: j.PropTypes.func
        },
        getInitialState: function() {
            return {
                animating: false,
                page: 0
            };
        },
        getDefaultProps: function() {
            return {
                isComments: false,
                numNewPacks: 0
            };
        },
        shouldComponentUpdate: function(aa, ba) {
            return !ba.animating;
        },
        onFlyoutShown: function() {
            if (this.props.packs.length > 0) {
                var aa = this._calculatePageForPack(this.props.selectedPackID);
                if (this.state.page !== aa)
                    this._setPage(aa, 0);
            }
        },
        _calculatePageForPack: function(aa) {
            for (var ba = 0; ba < this.props.packs.length; ba++)
                if (this.props.packs[ba].id == aa)
                    return ba <= v ? 0 : Math.floor((ba - 1) / v);
            return 0;
        },
        _setPage: function(aa, ba) {
            if (this.state.animating)
                return;
            this.setState({
                animating: true,
                page: aa
            }, function() {
                var ca = this.refs.positioner.getDOMNode(), da = this._calculatePosition(aa);
                new g(ca).to(da.reference, da.offset + 'px').ondone(function() {
                    return this.setState({
                        animating: false
                    });
                }.bind(this)).duration(ba).go();
            });
        },
        _calculatePosition: function(aa) {
            var ba = this.refs.positioner.getDOMNode(), ca = ba.childNodes[aa].offsetLeft;
            if (i.isRTL()) {
                var da = ba.offsetWidth, ea = ba.childNodes[aa].offsetWidth;
                return {
                    reference: 'right',
                    offset: ca + ea - da
                };
            }
            return {
                reference: 'left',
                offset: - ca
            };
        },
        _numPages: function() {
            return Math.max(1, Math.ceil((this.props.packs.length - 1) / v));
        },
        _canGoPrev: function() {
            return this.state.page > 0;
        },
        _canGoNext: function() {
            return this.state.page + 1 < this._numPages();
        },
        _goPrev: function() {
            this._canGoPrev() && this._setPage(this.state.page - 1, w);
        },
        _goNext: function() {
            this._canGoNext() && this._setPage(this.state.page + 1, w);
        },
        _openStore: function() {
            l.resetNumNewPacks();
            p.showStore();
        },
        render: function() {
            return (j.createElement("div", {
                className: "_5r85"
            }, this._renderStoreButton(), this._renderPrevArrow(), this._renderNextArrow(), j.createElement("div", {
                className: "_5r88"
            }, j.createElement("div", {
                className: "_5r89",
                ref: "positioner"
            }, this._renderPages()))));
        },
        _selectPack: function(aa) {
            var ba = o.getPack(aa);
            if (ba && ba.isPromoted)
                l.addPack(aa);
            if (aa === n.SEARCH_PACK_ID)
                this.props.resetTagSelectorFunc();
            if (this.props.onPackClick) {
                this.props.onPackClick(aa);
            } else 
                l.selectPack(aa);
        },
        _renderPages: function() {
            var aa = this.props.packs.map(function(ea, fa) {
                return j.createElement(z, {
                    key: ea.id,
                    onClick: function() {
                        return this._selectPack(ea.id);
                    }.bind(this),
                    pack: ea,
                    selected: this.props.selectedPackID === ea.id,
                    index: fa,
                    isComments: this.props.isComments
                });
            }.bind(this)), ba = [];
            for (var ca = 0; ca < aa.length; ca += v) {
                var da = ca;
                ca === 0 && ca++;
                ba.push(j.createElement("div", {
                    className: "_5r81",
                    key: ca
                }, aa.slice(da, ca + v)));
            }
            return ba;
        },
        _renderStoreButton: function() {
            return (j.createElement("a", {
                "aria-label": x,
                className: "_5r86 rfloat",
                "data-hover": "tooltip",
                onClick: this._openStore
            }, j.createElement(k, {
                className: "_5r87",
                src: u('/images/messaging/stickers/selector/sticker_store.png')
            }), this._renderJewel()));
        },
        _renderJewel: function() {
            var aa = this.props.numNewPacks;
            if (!aa)
                return null;
            return (j.createElement(q, {
                className: "rfloat _3fhs",
                count: aa,
                maxcount: 9,
                type: "special"
            }));
        },
        _renderPrevArrow: function() {
            if (!this._canGoPrev())
                return null;
            var aa = i.isRTL() ? u('/images/messaging/stickers/selector/right.png'): u('/images/messaging/stickers/selector/left.png');
            return (j.createElement("a", {
                className: (("_37wu") + (' ' + "lfloat")),
                onClick: this._goPrev
            }, j.createElement(k, {
                className: "_5r84",
                src: aa
            })));
        },
        _renderNextArrow: function() {
            if (!this._canGoNext())
                return null;
            var aa = i.isRTL() ? u('/images/messaging/stickers/selector/left.png'): u('/images/messaging/stickers/selector/right.png');
            return (j.createElement("a", {
                className: (("_37wv") + (' ' + "rfloat")),
                onClick: this._goNext
            }, j.createElement(k, {
                className: "_5r84",
                src: aa
            })));
        }
    }), z = j.createClass({
        displayName: "PackIcon",
        propTypes: {
            index: j.PropTypes.number,
            isComments: j.PropTypes.bool,
            onClick: j.PropTypes.func,
            pack: j.PropTypes.instanceOf(h).isRequired,
            selected: j.PropTypes.bool
        },
        getDefaultProps: function() {
            return {
                isComments: false,
                onClick: s
            };
        },
        _getPackIcon: function(aa) {
            if (aa.id == n.SEARCH_PACK_ID)
                return u('/images/messaging/stickers/icons/search.png');
            if (aa.id == n.MRU_STICKER_PACK)
                return u('/images/messaging/stickers/icons/recent.png');
            if (aa.id == n.EMOTICON_PACK_ID)
                return u('/images/messaging/stickers/icons/emoji.png');
            return aa.icon;
        },
        render: function() {
            var aa = this.props.pack, ba = m.WebStickerSearch&&!m.StickerSearchInRecent ? this.props.index === 1 || this.props.index === 2: this.props.index === 1, ca = (("_5r8a") + (this.props.selected ? ' ' + "_5r8b" : '') + (aa.id == n.MRU_STICKER_PACK ? ' ' + "_5qcj" : '') + (aa.id == n.SEARCH_PACK_ID ? ' ' + "_5qck" : '') + (ba ? ' ' + "_eb3" : '')), da = this.props.isComments && aa.isMessengerOnly, ea = "This pack is only available in messages", fa = da ? s: function() {
                return this.props.onClick(aa.id);
            }.bind(this);
            return (j.createElement("a", {
                "aria-label": da ? ea: aa.name,
                className: ca,
                "data-id": aa.id,
                "data-hover": "tooltip",
                ref: "search_icon",
                onClick: fa,
                tabIndex: "0"
            }, j.createElement(k, {
                className: ((da ? "_2ji6" : '') + (' ' + "_5r8c") + (m.WebStickerSearch ? ' ' + "_1viy" : '')),
                src: this._getPackIcon(aa)
            })));
        }
    });
    e.exports = y;
}, null);
__d("StickerSearch", ["StickerImages", "StickerServerRequests", "StickerState", "createObjectFrom", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k) {
    'use strict';
    var l = 100, m = 1000, n = 10000, o, p, q, r = null, s = {}, t = {
        requestStickersForTags: function(u, v, w, x) {
            p = w;
            var y = u, z = v.length > 1;
            if (z)
                y = y.concat(v);
            g.requestStickersForTags(y, function() {
                if (p === w)
                    x(this._getSortedStickersForTags(u, v, w, z));
            }.bind(this));
        },
        requestStickersForQuery: function(u, v) {
            p = u;
            h.getStickersForQuery(u, function(w) {
                return p === u && v(w.payload);
            });
        },
        _getSortedStickersForTags: function(u, v, w, x) {
            var y = {}, z = this._getTypeaheadStickers(u, w, y), aa = k(z);
            if (x) {
                var ba = this._getIntersectionStickers(v, y);
                aa = aa.concat(ba.filter(function(ca) {
                    return !z.hasOwnProperty(ca.id);
                }));
            }
            aa.map(function(ca) {
                return g.cacheSticker(ca);
            });
            aa.sort(function(ca, da) {
                return y[da.id] - y[ca.id];
            });
            return aa;
        },
        _getTypeaheadStickers: function(u, v, w) {
            var x = {}, y = g.getStickerTagsData();
            o = j(i.getPackIDsInTray());
            u.forEach(function(z) {
                y[z.id].forEach(function(aa) {
                    var ba = aa.score + l;
                    if (o[aa.packID])
                        ba += m;
                    if (z.name === v)
                        ba += n;
                    if (!x[aa.id] || ba > w[aa.id]) {
                        x[aa.id] = aa;
                        w[aa.id] = ba;
                    }
                });
            });
            return x;
        },
        _getIntersectionStickers: function(u, v) {
            var w = g.getStickerTagsData(), x = u.map(function(z) {
                return w[z.id].map(function(aa) {
                    return aa.id;
                });
            }), y = w[u[0].id].filter(function(z) {
                v[z.id] = z.score;
                for (var aa = 1; aa < x.length; aa++)
                    if (x[aa].indexOf(z.id)===-1) {
                        return false;
                    } else 
                        v[z.id] += w[u[aa].id].score;
                return true;
            });
            return y;
        },
        prepareTagsData: function() {
            if (!q)
                q = h.fetchTagData(function(u) {
                    r = u;
                    r.map(function(v) {
                        return s[v.name] = v;
                    });
                });
            return q;
        },
        getTagByName: function(u) {
            return s[u];
        },
        getTags: function() {
            return r;
        },
        getTagsIndex: function() {
            return s;
        }
    };
    e.exports = t;
}, null);
__d("StickerUtils", [], function(a, b, c, d, e, f) {
    var g = 64, h = {
        getScaledDimensions: function(i, j) {
            var k, l, m;
            if (j > i) {
                m = g / j;
                k = i * m;
                l = j * m;
            } else {
                m = g / i;
                k = i * m;
                l = j * m;
            }
            return {
                height: Math.round(k),
                width: Math.round(l)
            };
        },
        capitalizeWords: function(i) {
            var j = i.split(" ");
            for (var k = 0; k < j.length; k++) {
                var l = j[k].charAt(0).toUpperCase();
                j[k] = l + j[k].substr(1);
            }
            return j.join(" ");
        }
    };
    e.exports = h;
}, null);
__d("StickersFlyoutStickerSelector.react", ["BanzaiLogger", "Grid.react", "Image.react", "LegacyScrollableArea.react", "React", "Sticker.react", "StickerConstants", "StickerConfig", "StickerImages", "StickerSearch", "StickerState", "StickerUtils", "XUISpinner.react", "areEqual", "cx", "debounce", "emptyFunction", "fbt", "ix", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    'use strict';
    var aa = h.GridItem, ba = 320, ca = 278, da = m.MRU_STICKER_PACK, ea = 64, fa = 44, ga = 112, ha = n.AutoAnimateStickerTray ? 'load_and_hover': 'hover', ia = v(function(ka, la) {
        if (!ka)
            return;
        g.log('StickersLoggerConfig', {
            event: 'search_sticker',
            searchtoken: ka,
            numsearchresults: la.length
        });
    }, 1000), ja = k.createClass({
        displayName: "StickersFlyoutStickerSelector",
        propTypes: {
            height: k.PropTypes.number,
            onScroll: k.PropTypes.func,
            packID: k.PropTypes.string,
            userInput: k.PropTypes.string,
            typeaheadTags: k.PropTypes.array,
            singleWordTags: k.PropTypes.array,
            onQueryResultsFound: k.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                isComments: false,
                onScroll: w,
                shown: false
            };
        },
        getInitialState: function() {
            return {
                loading: false,
                stickers: []
            };
        },
        componentDidMount: function() {
            if (this.props.packID) {
                this.requestStickersForPack(this.props.packID);
                return;
            }
            if ((this.props.typeaheadTags && this.props.typeaheadTags.length > 0) || (this.props.singleWordTags && this.props.singleWordTags.length > 0)) {
                this.requestStickersForTags(this.props.typeaheadTags, this.props.singleWordTags, this.props.userInput);
                return;
            }
            if (this.props.userInput)
                this.requestStickersForQuery(this.props.userInput);
        },
        componentWillReceiveProps: function(ka) {
            if (ka.packID && ka.packID !== this.props.packID) {
                this.requestStickersForPack(ka.packID);
            } else if (!t(ka.typeaheadTags, this.props.typeaheadTags) ||!t(ka.singleWordTags, this.props.singleWordTags)) {
                this.requestStickersForTags(ka.typeaheadTags, ka.singleWordTags, ka.userInput);
            } else if (!p.getTags() && ka.userInput !== this.props.userInput)
                this.requestStickersForQuery(ka.userInput);
        },
        requestStickersForTags: function(ka, la, ma) {
            this.setState({
                loading: true
            });
            p.requestStickersForTags(ka, la, ma, function(na) {
                if (!this.props.tagChosen)
                    ia(ma, na);
                if (this.props.isComments)
                    na = na.filter(function(oa) {
                        return !oa.isMessengerOnly;
                    });
                this.isMounted() && this.setState({
                    loading: false,
                    stickers: na.slice(0, 40)
                });
            }.bind(this));
        },
        requestStickersForQuery: function(ka) {
            this.setState({
                loading: true
            });
            p.requestStickersForQuery(ka, function(la) {
                la.map(function(ma) {
                    return o.cacheSticker(ma);
                });
                if (!this.props.tagChosen)
                    ia(ka, la);
                if (this.props.isComments)
                    la = la.filter(function(ma) {
                        return !ma.isMessengerOnly;
                    });
                if (this.isMounted()) {
                    this.setState({
                        loading: false,
                        stickers: la
                    });
                    if (n.EnterToSendSticker)
                        this.props.onQueryResultsFound && this.props.onQueryResultsFound(la);
                }
            }.bind(this));
        },
        requestStickersForPack: function(ka) {
            this.setState({
                loading: true
            });
            o.requestStickersForPack(ka, ea, function(la) {
                if (ka == da) {
                    la = q.getMRUStickerPack(la);
                    if (this.props.isComments)
                        la = la.filter(function(ma) {
                            return !ma.isMessengerOnly;
                        });
                }
                this.setState({
                    loading: false,
                    stickers: la
                });
            }.bind(this));
        },
        renderStickers: function() {
            return this.state.stickers.map(function(ka) {
                var la = r.getScaledDimensions(ka.height, ka.width);
                return (k.createElement(aa, {
                    key: ka.id
                }, k.createElement("div", {
                    className: "_5r8h",
                    "data-id": ka.id
                }, k.createElement(l, {
                    animationTrigger: ha,
                    className: "_5r8i",
                    frameCount: ka.frameCount,
                    frameRate: ka.frameRate || 83,
                    framesPerCol: ka.framesPerCol,
                    framesPerRow: ka.framesPerRow,
                    shown: this.props.shown,
                    sourceHeight: la.height,
                    sourceURI: ka.sourceURI,
                    sourceWidth: la.width,
                    spriteURI: ka.spriteURI,
                    paddedSpriteURI: ka.paddedSpriteURI,
                    stickerID: ka.id,
                    style: {
                        cursor: 'pointer'
                    }
                }))));
            }.bind(this));
        },
        _onScroll: function() {
            var ka = this.refs.stickerScrollable;
            if (ka) {
                var la = ka.getArea().getScrollTop();
                this.props.onScroll(la);
            }
        },
        render: function() {
            if (this.state.loading) {
                return (k.createElement("div", {
                    className: "_e0r"
                }, k.createElement(s, {
                    size: "large"
                })));
            } else if (this.state.stickers.length === 0) {
                var ka = (ba - fa * 2 - ga) / 2 + "px";
                return (k.createElement("div", {
                    className: "_5jdt",
                    style: {
                        marginTop: ka
                    }
                }, k.createElement(i, {
                    src: y("/images/messaging/stickers/icons/sad_face.png")
                }), k.createElement("p", null, "No Stickers to Show")));
            }
            return (k.createElement(j, {
                ref: "stickerScrollable",
                height: this.props.height || ba,
                onScroll: z(this._onScroll, 200),
                width: ca,
                fade: true
            }, k.createElement("div", {
                className: "_5r8k"
            }, k.createElement(h, {
                cols: 4,
                fixed: true
            }, this.renderStickers()))));
        }
    });
    e.exports = ja;
}, null);
__d("StickersFlyoutTagSelector.react", ["BanzaiLogger", "Grid.react", "LegacyScrollableArea.react", "Parent", "React", "Image.react", "StickerConfig", "StickerConstants", "StickersFlyoutStickerSelector.react", "StickerSearch", "StickerState", "StickerUtils", "Toggler", "XUIButton.react", "XUICloseButton.react", "XUITextInput.react", "cx", "emptyFunction", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    'use strict';
    var z = h.GridItem, aa = 320, ba = 278, ca = 44, da = k.createClass({
        displayName: "StickersFlyoutTagSelector",
        propTypes: {
            trigger: k.PropTypes.string,
            isComments: k.PropTypes.bool,
            resetTrigger: k.PropTypes.func,
            shown: k.PropTypes.bool,
            onSelectSticker: k.PropTypes.func
        },
        getInitialState: function() {
            return {
                input: '',
                isScrolling: false,
                tagChosen: false,
                typeaheadTags: [],
                singleWordTags: [],
                matchedStickers: []
            };
        },
        getDefaultProps: function() {
            return {
                trigger: null,
                isComments: false,
                resetTrigger: x,
                shown: false,
                onSelectSticker: x
            };
        },
        componentDidMount: function() {
            var ea = j.byClass(this.getDOMNode(), 'uiToggle');
            if (ea)
                this._togglerSub = s.listen('show', ea, function() {
                    this.isMounted() && this.focusInput();
                }.bind(this));
            this.focusInput();
            this.selectTrigger(this.props.trigger);
        },
        componentWillUnmount: function() {
            this._togglerSub && this._togglerSub.unsubscribe();
        },
        componentWillReceiveProps: function(ea) {
            this.selectTrigger(ea.trigger);
        },
        focusInput: function() {
            this.refs.inputField.focusInput && this.refs.inputField.focusInput();
        },
        _setMatchedStickers: function(ea) {
            this.setState({
                matchedStickers: ea ? ea: []
            });
        },
        _onEnter: function(ea) {
            ea.preventDefault();
            ea.stopPropagation();
            if (!m.EnterToSendSticker)
                return;
            var fa = this.state.matchedStickers;
            if (fa && fa.length === 1) {
                this.props.onSelectSticker(fa[0].id, ea);
                this.setState({
                    matchedStickers: []
                });
            }
        },
        _inputChanged: function(ea) {
            var fa = this._normalizeInput(ea.target.value), ga = p.getTags();
            if (ga) {
                var ha = ga.filter(function(ka) {
                    return ka.name.indexOf(fa) === 0;
                }), ia = fa.split(/\s+/), ja = ia.map(function(ka) {
                    return p.getTagByName(ka);
                }).filter(function(ka) {
                    return ka !== undefined;
                });
                if (ja.length !== ia.length)
                    ja = [];
                this.setState({
                    input: ea.target.value,
                    tagChosen: false,
                    typeaheadTags: ha,
                    singleWordTags: ja,
                    isScrolling: false
                });
            } else 
                this.setState({
                    input: ea.target.value,
                    tagChosen: false,
                    isScrolling: false
                });
        },
        _normalizeInput: function(ea) {
            return ea.trim().replace(/\s+/, ' ').toLowerCase();
        },
        _handleResetButtonClick: function(ea) {
            ea.preventDefault();
            this.reset();
        },
        reset: function() {
            this.setState(this.getInitialState());
        },
        renderContentArea: function() {
            if (this.state.tagChosen || this._normalizeInput(this.state.input).length > 1) {
                return this.renderStickers();
            } else 
                return m.StickerSearchInRecent ? this.renderRecentStickers() : this.renderTags();
        },
        render: function() {
            return (k.createElement("div", {
                className: (("_217a") + (this.state.isScrolling ? ' ' + "_1hg1" : ''))
            }, k.createElement("div", {
                className: "_5jdr"
            }, k.createElement("span", {
                className: "_5jds"
            }), k.createElement(v, {
                onEnter: this._onEnter,
                onChange: this._inputChanged,
                ref: "inputField",
                placeholder: "Search stickers",
                value: this.state.input
            }), k.createElement(u, {
                size: "small",
                onClick: this._handleResetButtonClick,
                className: ((this.state.input.length === 0 ? "hidden_elem" : ''))
            })), this.renderContentArea()));
        },
        selectTag: function(ea) {
            g.log('StickersLoggerConfig', {
                event: 'select_tag',
                tagid: ea.id
            });
            this.setState({
                tagChosen: true,
                typeaheadTags: [ea],
                singleWordTags: [],
                input: r.capitalizeWords(ea.name)
            });
            this.focusInput();
        },
        selectTrigger: function(ea) {
            if (ea !== null) {
                var fa = p.getTagByName(ea);
                this.setState({
                    tagChosen: true,
                    typeaheadTags: [fa],
                    singleWordTags: [],
                    input: r.capitalizeWords(fa.name)
                });
                this.props.resetTrigger();
            }
        },
        _onScroll: function(ea) {
            this.setState({
                isScrolling: !!ea
            });
        },
        renderStickers: function() {
            var ea = this._normalizeInput(this.state.input);
            return (k.createElement(o, {
                ref: "selector",
                height: aa - ca,
                userInput: ea,
                typeaheadTags: this.state.typeaheadTags,
                singleWordTags: this.state.singleWordTags,
                onScroll: this._onScroll,
                isComments: this.props.isComments,
                tagChosen: this.state.tagChosen,
                shown: this.props.shown,
                onQueryResultsFound: this._setMatchedStickers
            }));
        },
        renderRecentStickers: function() {
            if (this._normalizeInput(this.state.input).length === 1)
                return k.createElement("div", null);
            return (k.createElement(o, {
                ref: "selector",
                height: aa - ca,
                packID: n.MRU_STICKER_PACK,
                onScroll: this._onScroll,
                isComments: this.props.isComments,
                shown: this.props.shown
            }));
        },
        renderTags: function() {
            var ea = q.getFeaturedTags().filter(function(fa) {
                return fa.sourceURI !== null;
            }).sort(function(fa, ga) {
                return fa.order - ga.order;
            }).map(function(fa, ga) {
                return k.createElement(z, {
                    key: ga
                }, k.createElement("div", {
                    className: (("_t5c") + (ga < 2 ? ' ' + "_1b27" : '') + (ga%2 === 0 ? ' ' + "_t5d" : '') + (ga%2 !== 0 ? ' ' + "_t5e" : ''))
                }, k.createElement(t, {
                    image: k.createElement(l, {
                        src: fa.sourceURI
                    }),
                    label: fa.name,
                    onClick: this.selectTag.bind(this, fa),
                    className: "_5jdu",
                    style: {
                        background: '#' + fa.color_code
                    },
                    disabled: this._normalizeInput(this.state.input).length === 1
                })));
            }.bind(this));
            return (k.createElement(i, {
                height: aa - ca,
                width: ba - 16,
                shadow: true,
                fade: true,
                className: "_5jei"
            }, k.createElement(h, {
                spacing: "pas",
                cols: 2,
                fixed: true,
                ref: "grid"
            }, ea)));
        }
    });
    e.exports = da;
}, null);
__d("StickersFlyout.react", ["BanzaiLogger", "Event", "Keys", "MessagesEmoticons.react", "Parent", "ReactComponentWithPureRenderMixin", "React", "StickersFlyoutPackSelector.react", "StickersFlyoutStickerSelector.react", "StickerActions", "StickerConstants", "StickerConfig", "StickersFlyoutTagSelector.react", "StickerSearch", "StickerState", "SubscriptionsHandler", "Toggler", "XUISpinner.react", "arrayContains", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    'use strict';
    var aa = q.SEARCH_PACK_ID, ba = m.createClass({
        displayName: "StickersFlyout",
        mixins: [l],
        propTypes: {
            isComments: m.PropTypes.bool,
            onStickerSelect: m.PropTypes.func.isRequired,
            onEmoticonSelect: m.PropTypes.func,
            onShown: m.PropTypes.func,
            onHidden: m.PropTypes.func,
            onEscKeyDown: m.PropTypes.func,
            onPackSelect: m.PropTypes.func,
            packID: m.PropTypes.string,
            shown: m.PropTypes.bool,
            trigger: m.PropTypes.string
        },
        getDefaultProps: function() {
            return {
                isComments: false,
                packID: u.getTrayPackID(),
                shown: false,
                trigger: null
            };
        },
        getInitialState: function() {
            return {
                dataReady: false,
                numNewPacks: 0,
                shown: false
            };
        },
        componentDidMount: function() {
            if (r.LoadStickerEarly&&!this.state.dataReady)
                this.loadTrayData();
            this._toggle = k.byClass(this.getDOMNode(), 'uiToggle');
            this._subscriptions = new v();
            if (this._toggle) {
                this._subscriptions.addSubscriptions(w.listen('show', this._toggle, this._onShownWrapper), w.listen('hide', this._toggle, this._onHidden));
            } else if (!r.LoadStickerEarly && this.props.shown&&!this.state.dataReady)
                this.loadTrayData();
            this._subscriptions.addSubscriptions(h.listen(this.getDOMNode(), 'keydown', this._onKeyDown), u.addListener(u.PACKS_CHANGED, this.packsUpdated), u.addListener(u.NUM_NEW_PACKS_CHANGED, function(ca) {
                this.setState({
                    numNewPacks: ca
                });
            }.bind(this)));
        },
        _onShownWrapper: function() {
            if (this.props.onShown) {
                this.props.onShown(this._onShown);
            } else 
                this._onShown();
        },
        _onShown: function() {
            g.log('StickersLoggerConfig', {
                event: 'open_tray'
            });
            if (!r.LoadStickerEarly&&!this.state.dataReady)
                this.loadTrayData();
            if (this.props.packID === aa)
                this.refs.tagSelector && this.refs.tagSelector.focusInput();
            this.refs.packSelector.onFlyoutShown();
            this.setState({
                shown: true
            });
        },
        _onHidden: function() {
            this.resetTagSelector();
            this.props.onHidden && this.props.onHidden();
            this.setState({
                shown: false
            });
        },
        componentWillUnmount: function() {
            this._subscriptions.release();
        },
        componentWillReceiveProps: function(ca) {
            if (!this.state.dataReady && ca.shown)
                this.loadTrayData();
        },
        componentDidUpdate: function(ca) {
            if (!ca.shown && this.props.shown) {
                this._onShown();
            } else if (ca.shown&&!this.props.shown)
                this._onHidden();
        },
        _onKeyDown: function(event) {
            if (event.keyCode === i.ESC && this.props.onEscKeyDown) {
                this.props.onEscKeyDown();
                event.kill();
            }
        },
        resetTagSelector: function() {
            this.refs.tagSelector && this.refs.tagSelector.reset();
        },
        loadTrayData: function() {
            u.onTrayDataReady(function() {
                var ca = u.getNumNewPacks();
                this.setState({
                    dataReady: true,
                    numNewPacks: ca
                });
                var da = u.getPacksInTray()[0].id, ea = this.props.packID;
                if (!ea ||!y(u.getPackIDsInTray(), ea))
                    p.selectPack(da, true);
            }.bind(this));
            if (r.WebStickerSearch&&!r.StickerSearchOnServer)
                t.prepareTagsData();
        },
        _isShown: function() {
            return this._toggle ? this.state.shown : this.props.shown;
        },
        loadPack: function() {
            if (!this.state.dataReady)
                return (m.createElement("div", {
                    className: "_e0r"
                }, m.createElement(x, {
                    size: "large"
                })));
            if (this.props.packID === q.EMOTICON_PACK_ID)
                return (m.createElement("div", {
                    className: "_5r8l",
                    "data-id": this.props.packID
                }, m.createElement(j, {
                    onEmoticonSelect: this.props.onEmoticonSelect
                })));
            if (this.props.packID === aa && r.WebStickerSearch)
                return (m.createElement("div", {
                    className: "_5r8l"
                }, m.createElement(s, {
                    ref: "tagSelector",
                    className: "fbStickersFlyoutTagSelector",
                    trigger: this.props.trigger,
                    resetTrigger: function() {
                        return this.setProps({
                            trigger: null
                        });
                    }.bind(this),
                    isComments: this.props.isComments,
                    shown: this._isShown(),
                    onSelectSticker: this.onSelectSticker
                })));
            return (m.createElement("div", {
                className: "_5r8l",
                "data-id": this.props.packID
            }, m.createElement(o, {
                ref: "selector",
                packID: this.props.packID,
                isComments: this.props.isComments,
                shown: this._isShown()
            })));
        },
        packsUpdated: function() {
            var ca = u.getPackIDsInTray();
            if (!y(ca, this.props.packID)) {
                p.selectPack(ca[0]);
                return;
            }
            this.forceUpdate(null);
        },
        onSelectSticker: function(ca, event) {
            if (ca) {
                u.updateRecentlyUsed(ca);
                this.props.onStickerSelect(ca, event);
                if (r.PromotePackFromSearch && this.props.packID === q.SEARCH_PACK_ID)
                    u.promotePackSentFromSearch(ca);
                u.clearShowStickerReplyNUX();
            }
        },
        selectedSticker: function(event) {
            var ca = k.byClass(event.target, "_5r8h");
            if (ca) {
                var da = ca.getAttribute('data-id');
                this.onSelectSticker(da, event);
            }
        },
        render: function() {
            var ca = this.props.isComments ? u.getPacksInCommentsTray(): u.getPacksInTray();
            return (m.createElement("div", {
                className: "_5r8f"
            }, m.createElement("div", {
                className: "_5r8e"
            }, m.createElement(n, {
                ref: "packSelector",
                numNewPacks: this.state.numNewPacks,
                onPackClick: this.props.onPackSelect,
                selectedPackID: this.props.packID,
                packs: ca,
                isComments: this.props.isComments,
                resetTagSelectorFunc: this.resetTagSelector
            })), m.createElement("div", {
                className: "_5r8m",
                onClick: this.selectedSticker
            }, this.loadPack())));
        }
    });
    e.exports = ba;
}, null);
__d("ChatStickerButton.react", ["BanzaiODS", "React", "ReactLayeredComponentMixin", "StickerContextualDialog.react", "StickersFlyout.react", "StickerState", "cx", "emptyFunction", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    'use strict';
    var p = 278, q = h.createClass({
        displayName: "ChatStickerButton",
        propTypes: {
            onStickerSelect: h.PropTypes.func,
            onEmoticonSelect: h.PropTypes.func,
            onFlyoutShown: h.PropTypes.func,
            onFlyoutHidden: h.PropTypes.func,
            packID: h.PropTypes.string
        },
        getInitialState: function() {
            return {
                shown: false
            };
        },
        mixins: [i],
        getDefaultProps: function() {
            return {
                onStickerSelect: n,
                onEmoticonSelect: n
            };
        },
        componentDidMount: function() {
            g.bumpEntityKey('chat.web', 'sticker_button.mounted');
            this._subscription = l.addListener(l.PACK_SELECTED, function(r) {
                return this.setProps({
                    packID: r
                });
            }.bind(this));
        },
        shouldComponentUpdate: function(r, s) {
            return (r.packID != this.props.packID || s.shown != this.state.shown);
        },
        componentWillUnmount: function() {
            this._subscription && this._subscription.remove();
        },
        render: function() {
            return (h.createElement("a", {
                className: "_4vuh",
                onClick: this.showFlyout,
                onMouseDown: this._prepareForClick,
                title: "Choose a sticker or emoticon",
                ref: "link"
            }, h.createElement("div", {
                className: (("_4vui") + (this.state.shown ? ' ' + "open" : ''))
            })));
        },
        renderLayers: function() {
            return {
                contextualDialog: h.createElement(j, {
                    alignment: "left",
                    className: "_5e-r",
                    contextRef: "link",
                    onBlur: this._hideFlyout,
                    position: "above",
                    shown: this.state.shown,
                    width: p
                }, h.createElement("div", null, h.createElement(k, {
                    onShown: function(r) {
                        return this.props.onFlyoutShown && this.props.onFlyoutShown(r);
                    }.bind(this),
                    onHidden: function() {
                        return this.props.onFlyoutHidden && this.props.onFlyoutHidden();
                    }.bind(this),
                    onEscKeyDown: this._hideFlyout,
                    onStickerSelect: this._handleStickerSelected,
                    onEmoticonSelect: this._handleEmoticonSelected,
                    packID: this.props.packID,
                    shown: this.state.shown
                })))
            };
        },
        _prepareForClick: function() {
            this._clickGuard = this.state.shown;
        },
        showFlyout: function() {
            !this._clickGuard && this.setState({
                shown: true
            });
        },
        _hideFlyout: function() {
            this.setState({
                shown: false
            });
        },
        _handleStickerSelected: function(r) {
            this.props.onStickerSelect(r);
        },
        _handleEmoticonSelected: function(r) {
            this._hideFlyout();
            this.props.onEmoticonSelect(r);
        }
    });
    e.exports = q;
}, null);
__d("StickerTrigger", ["EmoticonsList", "Map", "StickerConfig", "StickerSearch", "StickerServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k) {
    'use strict';
    var l = i.StickerTriggerThreshold, m = new h(), n = {
        findTriggerForInput: function(o, p) {
            if (o === null) {
                p([], null);
                return;
            }
            j.prepareTagsData().then(function() {
                return this.findTagForInput(o, function(q, r) {
                    return p(q, r);
                });
            }.bind(this));
        },
        findTagForInput: function(o, p) {
            var q = this.findTriggeredWord(o);
            if (q) {
                if (m.has(q)) {
                    p(m.get(q), q);
                } else 
                    k.getStickersForQuery(q, function(r) {
                        var s = r.getPayload();
                        m.set(q, s);
                        p(s, q);
                    });
            } else 
                p([], null);
        },
        _getRegex: function() {
            if (i.TriggerConfidence === 'emoji_only') {
                return g.noncapturingRegexp;
            } else if (i.TriggerConfidence === 'high')
                return (/^(?:\w+\s?){1,4}$/);
            return null;
        },
        findTriggeredWord: function(o) {
            var p = j.getTagsIndex();
            if (!p)
                return null;
            o = o.toLowerCase();
            var q = o.match(this._getRegex()), r = l, s = null;
            for (var t = 0; q !== null && t < q.length; t++)
                if (p[q[t]] && p[q[t]].sticker_count > r) {
                    r = p[q[t]].sticker_count;
                    s = q[t];
                }
            return s;
        }
    };
    e.exports = n;
}, null);
__d("StickerTriggerIndicator.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    'use strict';
    var i = g.createClass({
        displayName: "StickerTriggerIndicator",
        getDefaultProps: function() {
            return {
                stickers: []
            };
        },
        propTypes: {
            stickers: g.PropTypes.array
        },
        shouldComponentUpdate: function(j) {
            var k = this.props.stickers.length > 0, l = j.stickers.length > 0;
            return k !== l;
        },
        render: function() {
            var j = this.props.stickers && this.props.stickers.length > 0;
            return g.createElement("span", {
                className: ((j ? "emoticonIndicator" : ''))
            });
        }
    });
    e.exports = i;
}, null);
__d("ChatStickerTriggerController", ["BanzaiLogger", "React", "StickerConfig", "StickersFlyoutTriggerSelector.react", "StickerTrigger", "StickerTriggerIndicator.react"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    function m(n, o, p, q, r) {
        this.$ChatStickerTriggerController0 = null;
        this.$ChatStickerTriggerController1 = null;
        this.$ChatStickerTriggerController2 = null;
        this.$ChatStickerTriggerController3 = r;
        this.$ChatStickerTriggerController4 = q;
        this.$ChatStickerTriggerController5 = null;
        if (i.TriggerInterface === 'one_tap') {
            this.$ChatStickerTriggerController1 = h.render(h.createElement(j, {
                context: p,
                onStickerSelect: this.$ChatStickerTriggerController6.bind(this),
                onDismissTrigger: this.$ChatStickerTriggerController7.bind(this)
            }), n);
            this.$ChatStickerTriggerController2 = n;
        } else if (i.TriggerInterface === 'hyperlink') {
            this.$ChatStickerTriggerController1 = h.render(h.createElement(l, null), o);
            this.$ChatStickerTriggerController2 = o;
        }
    }
    m.prototype.setInput = function(n) {
        this.$ChatStickerTriggerController8 = n;
    };
    m.prototype.activateAfterparty = function() {
        this.$ChatStickerTriggerController9 = true;
        clearTimeout(this.$ChatStickerTriggerControllera);
        this.$ChatStickerTriggerControllera = setTimeout(this.$ChatStickerTriggerControllerb.bind(this), 5000);
    };
    m.prototype.updateInput = function(n) {
        if (this.$ChatStickerTriggerController9)
            this.$ChatStickerTriggerControllerb();
        this.$ChatStickerTriggerControllerc(n);
    };
    m.prototype.onFlyoutShown = function(n) {
        if (this.$ChatStickerTriggerController0&&!this.$ChatStickerTriggerControllerd) {
            this.$ChatStickerTriggerControllerd = true;
            this.$ChatStickerTriggerController3(this.$ChatStickerTriggerController0, n);
            this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
                stickers: []
            });
        } else 
            n();
    };
    m.prototype.getTriggeredWord = function() {
        return this.$ChatStickerTriggerController0;
    };
    m.prototype.$ChatStickerTriggerController6 = function(n) {
        this.$ChatStickerTriggerController4(n);
        this.$ChatStickerTriggerController7();
    };
    m.prototype.$ChatStickerTriggerController7 = function() {
        this.$ChatStickerTriggerControllerd = true;
        this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
            stickers: []
        });
    };
    m.prototype.$ChatStickerTriggerControllere = function(n, o) {
        if (this.$ChatStickerTriggerController5 === null || this.$ChatStickerTriggerController5 && this.$ChatStickerTriggerController5.toLowerCase().indexOf(o)===-1) {
            this.$ChatStickerTriggerController8.isMounted() && this.$ChatStickerTriggerController8.setProps({
                triggeredWord: null
            });
            this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
                stickers: []
            });
            return;
        }
        if (o)
            g.log('StickersLoggerConfig', {
                event: 'sticker_trigger_activated',
                numsearchresults: n.length,
                triggeredword: o,
                triggerused: false
            });
        this.$ChatStickerTriggerController0 = o;
        this.$ChatStickerTriggerController8.isMounted() && this.$ChatStickerTriggerController8.setProps({
            triggeredWord: o
        });
        if (!this.$ChatStickerTriggerControllerd)
            this.$ChatStickerTriggerController1.isMounted() && this.$ChatStickerTriggerController1.setProps({
                stickers: n
            });
    };
    m.prototype.$ChatStickerTriggerControllerb = function() {
        clearTimeout(this.$ChatStickerTriggerControllera);
        this.$ChatStickerTriggerController9 = false;
        this.$ChatStickerTriggerControllerd = false;
        this.$ChatStickerTriggerController0 = null;
        this.$ChatStickerTriggerControllerc(null);
    };
    m.prototype.$ChatStickerTriggerControllerc = function(n) {
        if (this.$ChatStickerTriggerController5 !== n) {
            this.$ChatStickerTriggerController5 = n;
            k.findTriggerForInput(this.$ChatStickerTriggerController5, this.$ChatStickerTriggerControllere.bind(this));
        }
    };
    m.prototype.destroy = function() {
        h.unmountComponentAtNode(this.$ChatStickerTriggerController2);
        clearTimeout(this.$ChatStickerTriggerControllera);
    };
    e.exports = m;
}, null);
__d("ChatFileUploaderMixin", ["SubscriptionsHandler", "React"], function(a, b, c, d, e, f, g, h) {
    var i = {
        propTypes: {
            attachmentsShelf: h.PropTypes.object,
            onFileUploaderMounted: h.PropTypes.func,
            onUploadFinished: h.PropTypes.func,
            onUpdateAttachmentsShelf: h.PropTypes.func,
            onSubmit: h.PropTypes.func
        },
        setUpSubscriptionsHandler: function(j) {
            this._uploader = j;
            this._subscriptions = new g();
            this._subscriptions.addSubscriptions(this._uploader.subscribe(['all-uploads-completed', 'upload-canceled'], this._handleUploadFinished), this._uploader.subscribe('dom-updated', this._handleUpdateAttachmentsShelf), this._uploader.subscribe('submit', this._handleSubmit));
            this.props.onFileUploaderMounted(this._uploader);
        },
        componentWillUnmount: function() {
            this._subscriptions && this._subscriptions.release();
            if (!this.props.uploaderIsFromHigherLevel)
                this._uploader && this._uploader.destroy();
        },
        isUploading: function() {
            return this._uploader.isUploading();
        },
        getAttachments: function() {
            return this._uploader.getAttachments();
        },
        getImageFiles: function() {
            return this._uploader.getImageFiles();
        },
        getVideoFiles: function() {
            return this._uploader.getVideoFiles();
        },
        getAudioFiles: function() {
            return this._uploader.getAudioFiles();
        },
        getFiles: function() {
            return this._uploader.getFiles();
        },
        removeAttachments: function() {
            return this._uploader.removeAttachments();
        },
        _handleUploadFinished: function() {
            if (this.props.onUploadFinished)
                this.props.onUploadFinished();
        },
        _handleUpdateAttachmentsShelf: function() {
            if (this.props.onUpdateAttachmentsShelf)
                this.props.onUpdateAttachmentsShelf();
        },
        _handleSubmit: function() {
            if (this.props.onSubmit)
                this.props.onSubmit();
        }
    };
    e.exports = i;
}, null);
__d("ChatFileUploader.react", ["ChatFileUploaderMixin", "InlineBlock.react", "MercuryConfig", "React", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = j.createClass({
        displayName: "ChatFileUploader",
        mixins: [g],
        getDefaultProps: function() {
            return {
                uploaderIsFromHigherLevel: true
            };
        },
        shouldComponentUpdate: function() {
            return false;
        },
        componentDidMount: function() {
            var n = this.props.initFileUploaderFn(this.refs.form.getDOMNode(), this.refs.input.getDOMNode(), this.refs.attachID.getDOMNode());
            this.setUpSubscriptionsHandler(n);
        },
        render: function() {
            return (j.createElement("form", {
                ref: "form",
                action: i.upload_url,
                method: "post"
            }, j.createElement("input", {
                type: "hidden",
                ref: "attachID",
                name: "attach_id"
            }), j.createElement(h, {
                className: "_m _4q60 itemLabel"
            }, j.createElement("input", {
                type: "file",
                className: "_n",
                name: "attachment[]",
                multiple: "true",
                ref: "input"
            }), j.createElement("span", {
                className: "_4q61 itemAnchor"
            }, "Add Files..."))));
        }
    });
    e.exports = m;
}, null);
__d("ChatTabMenu.react", ["ChatFileUploader.react", "ChatPrivacyActionController", "ChatConfig", "MercuryConfig", "MercuryIDs", "MercuryFileUploader", "MercuryThreadMuter", "ReactComponentWithPureRenderMixin", "React", "PopoverMenu.react", "ReactMenu", "MenuSeparator.react", "Toggler", "TrackingNodes", "WebMessengerThreadPermalinks", "cx", "fbt", "goURI", "MercuryThreadActions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    'use strict';
    var y = b('MercuryThreadActions').get(), z = q.Item, aa = o.createClass({
        displayName: "ChatTabMenu",
        mixins: [n],
        propTypes: {
            onFileUploaderMounted: o.PropTypes.func,
            updatePrivacyLinkFunc: o.PropTypes.func,
            nameConversationFunc: o.PropTypes.func,
            leaveConversationFunc: o.PropTypes.func,
            showParticipantsFunc: o.PropTypes.func,
            clearHistoryFunc: o.PropTypes.func,
            reportSpamFunc: o.PropTypes.func,
            createGroupFunc: o.PropTypes.func,
            switchToWorkFunc: o.PropTypes.func,
            isMultichat: o.PropTypes.bool,
            isEmptyChat: o.PropTypes.bool,
            hasSwitchToWork: o.PropTypes.bool,
            showAddFriend: o.PropTypes.func,
            threadID: o.PropTypes.string,
            attachmentsShelf: o.PropTypes.object,
            onUploadFinished: o.PropTypes.func,
            onUpdateAttachmentsShelf: o.PropTypes.func,
            onSubmit: o.PropTypes.func,
            enableDesktopNotif: o.PropTypes.func
        },
        getInitialState: function() {
            return {
                url: null
            };
        },
        getDefaultProps: function() {
            return {
                show: true
            };
        },
        componentDidMount: function() {
            u.getThreadURI(this.props.threadID, function(ba) {
                this.isMounted() && this.setState({
                    url: ba
                });
            }.bind(this));
            if (!this.props.isMultiChat)
                this._privacyActionController = new h(k.getUserIDFromThreadID(this.props.threadID), this.props.updatePrivacyLinkFunc);
        },
        _initFileUploader: function(ba, ca, da) {
            if (this._fileUploader) {
                this._fileUploader.updateElements(ba, ca, da);
            } else 
                this._fileUploader = new l(this.props.attachmentsShelf, ba, ca, da);
            return this._fileUploader;
        },
        componentWillUnmount: function() {
            this._privacyActionController && this._privacyActionController.destroy();
            this._fileUploader && this._fileUploader.destroy();
        },
        _unmuteThread: function() {
            y.unmute(this.props.threadID);
            s.hide();
        },
        _togglePrivacyFunc: function() {
            this._privacyActionController.togglePrivacy();
        },
        getURL: function() {
            return this.state.url;
        },
        _renderFileUploader: function() {
            return (o.createElement(z, {
                className: "_37_x"
            }, o.createElement(g, {
                onFileUploaderMounted: this.props.onFileUploaderMounted,
                attachmentsShelf: this.props.attachmentsShelf,
                initFileUploaderFn: this._initFileUploader,
                onUploadFinished: this.props.onUploadFinished,
                onUpdateAttachmentsShelf: this.props.onUpdateAttachmentsShelf,
                onSubmit: this.props.onSubmit
            })));
        },
        _renderOpenFullConversation: function() {
            if (this.state.url)
                return (o.createElement(z, {
                    onclick: function() {
                        return x(this.state.url);
                    }.bind(this)
                }, "See Full Conversation"));
            return null;
        },
        _renderAddFriend: function() {
            if (!this.props.showAddFriend)
                return null;
            return (o.createElement(z, {
                onclick: this.props.showAddFriend
            }, "Add Friends to Chat..."));
        },
        _renderTogglePrivacy: function() {
            if (!this.props.isMultichat)
                return (o.createElement(z, {
                    onclick: this._togglePrivacyFunc
                }, this.props.privacyText));
            return null;
        },
        _renderMuteConversation: function() {
            if (!this.props.isMuted) {
                var ba = m.showMuteChangeDialog.bind(null, this.props.threadID);
                return (o.createElement(z, {
                    onclick: ba
                }, "Mute Conversation..."));
            } else 
                return (o.createElement(z, {
                    onclick: this._unmuteThread
                }, "Unmute Conversation"));
        },
        _renderClearConversation: function() {
            if (!this.props.isMultichat)
                return (o.createElement(z, {
                    onclick: this.props.clearHistoryFunc
                }, "Clear Window"));
            return null;
        },
        _renderReportSpam: function() {
            if (!this.props.isMultichat)
                return (o.createElement(z, {
                    onclick: this.props.reportSpamFunc
                }, "Report as Spam or Abuse..."));
            return null;
        },
        _renderCreateGroup: function() {
            if (this.props.isMultichat)
                return (o.createElement(z, {
                    onclick: this.props.createGroupFunc
                }, "Create Group"));
            return null;
        },
        _renderSwitchToWork: function() {
            if (this.props.isMultichat && i.get('has_switch_to_work') && this.props.hasSwitchToWork)
                return (o.createElement(z, {
                    onclick: this.props.switchToWorkFunc
                }, "Move to Work Account"));
        },
        _renderConversationName: function() {
            if (this.props.isMultichat && this.state.url)
                return (o.createElement(z, {
                    onclick: this.props.nameConversationFunc
                }, "Edit Conversation Name"));
            return null;
        },
        _renderLeaveConversation: function() {
            if (this.props.isMultichat)
                return (o.createElement(z, {
                    onclick: this.props.leaveConversationFunc
                }, "Leave Conversation..."));
            return null;
        },
        _renderEnableDesktopNotifications: function() {
            if (j.DesktopNotificationsGK && "Notification" in window && Notification.permission !== "granted")
                return (o.createElement(z, {
                    onclick: this.props.enableDesktopNotif
                }, "Enable Desktop Notifications"));
            return null;
        },
        _renderPeopleList: function() {
            if (this.props.isMultichat && this.state.url)
                return (o.createElement(z, {
                    onclick: this.props.showParticipantsFunc
                }, "Edit Participants..."));
            return null;
        },
        render: function() {
            var ba = this._renderReportSpam(), ca = this._renderCreateGroup(), da = o.createElement(q, {
                className: (("chatReact") + (!this.props.show ? ' ' + "hidden_elem" : ''))
            }, this._renderOpenFullConversation(), this._renderFileUploader(), this._renderAddFriend(), this._renderTogglePrivacy(), this._renderConversationName(), this._renderPeopleList(), o.createElement(r, null), this._renderSwitchToWork(), this._renderMuteConversation(), this._renderClearConversation(), this._renderLeaveConversation(), ba ? (o.createElement(r, null)) : null, ba, ca ? (o.createElement(r, null)) : null, ca, this._renderEnableDesktopNotifications()), ea = "Options", fa = t.getTrackingInfo(t.types.DROPDOWN_BUTTON);
            return (o.createElement(p, {
                menu: da
            }, o.createElement("a", {
                "data-ft": fa,
                "data-hover": "tooltip",
                "aria-label": ea,
                "data-tooltip-alignh": "center",
                className: (("button") + (this.props.isEmptyChat ? ' ' + "hidden_elem" : ''))
            })));
        }
    });
    e.exports = aa;
}, null);
__d("ChatDateBreak.react", ["React", "ReactPropTypes", "Timestamp.react", "cx", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.createClass({
        displayName: "ChatDateBreak",
        propTypes: {
            date: h.instanceOf(Date).isRequired
        },
        shouldComponentUpdate: function(n) {
            return this.props.date.getTime() !== n.date.getTime();
        },
        render: function() {
            var n = this.props.date, o = k(n, {
                today: 'g:ia',
                withinWeek: 'l g:ia',
                thisYear: 'F jS, g:ia',
                older: 'F j, Y g:i a'
            }), p = Math.round(n.getTime() / 1000);
            return (g.createElement("div", g.__spread({}, this.props, {
                className: l(this.props.className, "_5w-5")
            }), g.createElement("div", {
                className: "_5w-6"
            }, g.createElement(i, {
                time: p,
                verbose: o,
                text: o
            }))));
        }
    });
    e.exports = m;
}, null);
__d("ChatAuthorPhotoBlock.react", ["MercuryParticipants", "ReactPropTypes", "React", "cx", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 86400000, n = i.createClass({
        displayName: "ChatAuthorPhotoBlock",
        propTypes: {
            authorID: h.string.isRequired,
            hideName: h.bool,
            hidePhoto: h.bool,
            timestamp: h.number
        },
        getInitialState: function() {
            return {
                author: {
                    id: null,
                    name: '',
                    href: '#',
                    image_src: ''
                }
            };
        },
        componentDidMount: function() {
            this.updateAuthor(this.props.authorID);
        },
        componentWillReceiveProps: function(o) {
            if (o.authorID != this.state.author.id)
                this.updateAuthor(o.authorID);
        },
        render: function() {
            return (i.createElement("div", i.__spread({}, this.props, {
                className: l(this.props.className, "_5yt9")
            }), this.renderAuthorName(), this.renderAuthorPhoto(), this.props.children));
        },
        renderAuthorName: function() {
            if (!this.props.hideName)
                return (i.createElement("div", {
                    className: "_5ys-",
                    ref: "name"
                }, this.state.author.name));
        },
        renderAuthorPhoto: function() {
            if (!this.props.hidePhoto) {
                var o = null;
                if (this.props.timestamp) {
                    var p = (Date.now() - this.props.timestamp > m) ? 'M jS, g:ia': 'g:ia';
                    o = k(new Date(this.props.timestamp), p);
                }
                return (i.createElement("a", {
                    "aria-label": o,
                    className: "_5ys_",
                    "data-hover": "tooltip",
                    "data-tooltip-position": "left",
                    href: this.state.author.href,
                    ref: "link"
                }, i.createElement("img", {
                    src: this.state.author.image_src,
                    ref: "image"
                })));
            }
        },
        updateAuthor: function(o) {
            g.get(o, function(p) {
                this.isMounted() && this.setState({
                    author: p
                });
            }.bind(this));
        }
    });
    e.exports = n;
}, null);
__d("MessageBubbleMixin", ["DOMDimensions"], function(a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        getInitialState: function() {
            return {
                bubbleWidth: this.props.maxWidth
            };
        },
        componentDidMount: function() {
            this.shrinkBubble();
        },
        componentWillReceiveProps: function(i) {
            if (i.body != this.props.body)
                this.setState({
                    bubbleWidth: this.props.maxWidth
                });
        },
        componentDidUpdate: function(i, j) {
            if (i.body != this.props.body)
                this.shrinkBubble();
        },
        shrinkBubble: function() {
            var i = this.refs.bubble.getDOMNode(), j = this.refs.content.getDOMNode(), k = g.getElementDimensions(i).width, l = g.getElementDimensions(j).width;
            if (this.contentWraps() && l > 0 && l < this.props.maxWidth && k - l - this.getBoxWidth() > 0 && l != this.state.bubbleWidth)
                this.setState({
                    bubbleWidth: l
                });
        },
        contentWraps: function() {
            var i = this.refs.content.getDOMNode(), j = i.getClientRects(), k = g.getElementDimensions(i).height;
            return (j && j.length > 1 && j[0].height < k);
        }
    };
    e.exports = h;
}, null);
__d("ChatBubble.react", ["DOMDimensions", "MercuryMessageBody.react", "MessageBubbleMixin", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = null, n = j.createClass({
        displayName: "ChatBubble",
        mixins: [i],
        propTypes: {
            attachments: j.PropTypes.node,
            body: j.PropTypes.string,
            maxWidth: j.PropTypes.number.isRequired
        },
        render: function() {
            return (j.createElement("div", j.__spread({}, this.props, {
                className: l(this.props.className, "_5w1r"),
                ref: "bubble",
                style: Object.assign({}, (this.props.style || {}), {
                    maxWidth: this.state.bubbleWidth
                })
            }), j.createElement("div", null, j.createElement("span", {
                className: "_5yl5",
                ref: "content"
            }, j.createElement(h, {
                body: this.props.body,
                ranges: this.props.ranges
            }))), this.props.attachments));
        },
        getBoxWidth: function() {
            if (!m)
                m = g.measureElementBox(this.refs.bubble.getDOMNode(), 'width', true, true, false);
            return m;
        }
    });
    e.exports = n;
}, null);
__d("XStickerAssetControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/asset\/", {
        sticker_id: {
            type: "Int",
            required: true
        },
        image_type: {
            type: "Enum"
        }
    });
}, null);
__d("XLinkshimLogControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/si\/ajax\/l\/render_linkshim_log\/", {
        u: {
            type: "String",
            required: true
        },
        h: {
            type: "String",
            required: true
        },
        render_verification: {
            type: "Bool"
        },
        enc: {
            type: "String"
        },
        d: {
            type: "String"
        }
    });
}, null);
__d("MercuryAttachmentRenderer", ["MercuryAttachmentTemplates", "MercuryAttachmentAudioClip.react", "Bootloader", "ChatAnimatedGifs", "SyncRequest.react", "CSS", "MercuryConstants", "DOM", "Event", "MercuryAttachment", "MercuryAttachmentType", "MercuryAttachmentVideo.react", "MercuryIDs", "MercuryParticipants", "MercuryViewer", "ProgressBar", "React", "Sticker.react", "StickerAssetType", "StickerImages", "Style", "URI", "UserAgent_DEPRECATED", "cx", "invariant", "tx", "updatePhotoProgressBar", "XStickerAssetControllerURIBuilder", "OrionMercuryAttachment", "MercuryMessages"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha) {
    'use strict';
    var ia = b('OrionMercuryAttachment').module, ja = b('MercuryMessages').get(), ka = ca.ie() <= 8, la = 120;
    function ma(pa, qa) {
        var ra = g[qa].build().setNodeContent('filename', pa.name), sa = ra.getNode('link');
        sa.setAttribute('href', pa.url);
        pa.rel && sa.setAttribute('rel', pa.rel);
        l.addClass(ra.getRoot(), p.getAttachIconClass(pa.icon_type));
        return ra;
    }
    function na(pa, qa) {
        var ra = g[qa].build().setNodeContent('filename', pa.name);
        l.addClass(ra.getRoot(), p.getAttachIconClass(pa.icon_type));
        return ra;
    }
    var oa = {
        renderAttachment: function(pa, qa, ra, sa, ta, ua) {
            var va = 100, wa = pa ? 160: 400, xa = null, ya = null, za = m.MercurySupportedShareType;
            if (this.isErrorAttachment(qa))
                xa = oa.renderError(qa);
            if (this.isShareAttachment(qa) && qa.share_xhp)
                if (qa.share_data_type === za.FB_BROWSE_QUERY ||!pa)
                    ya = oa.renderShareXHP(qa, ra.id);
            if (this.isStickerAttachment(qa))
                ya = oa.renderSticker(qa, ra, pa, ua);
            if (!ya && this.isShareAttachment(qa)) {
                var ab = qa.share_data_type;
                switch (ab) {
                case za.FB_PHOTO:
                    ya = oa.renderPreview(qa, ra, sa, ta);
                    break;
                case za.FB_VIDEO:
                    ya = oa.renderVideoThumb(qa);
                    break;
                case za.FB_MUSIC_ALBUM:
                case za.FB_SONG:
                case za.FB_PLAYLIST:
                case za.FB_MUSICIAN:
                case za.FB_RADIO_STATION:
                    ya = oa.renderMusic(qa);
                    break;
                case za.EXTERNAL:
                case za.FB_TEMPLATE:
                case za.FB_SOCIAL_REPORT_PHOTO:
                    ya = oa.renderExternalLink(qa);
                    break;
                case za.FB_COUPON:
                case za.FB_EVENT:
                case za.FB_SHOERACK_INVITATION:
                    ya = oa.renderChatXHP(qa);
                    break;
                case za.FB_SOCIAL_RESOLUTION:
                case za.FB_STATUS:
                    ya = oa.renderSocialResolution(qa);
                    break;
                case za.FB_SYNC_REQUEST:
                    ya = oa.renderSyncRequest(qa);
                    break;
                case za.FB_OPEN_GRAPH:
                    ya = oa.renderOpenGraph(qa);
                    break;
                case za.FB_ORION:
                    if (ia)
                        ya = oa.renderOrionMercuryAttachment(qa);
                    break;
                default:
                    if (qa.name)
                        ya = oa.renderShareLink(qa, ra && ra.id, pa);
                    break;
                }
            }
            if (!ya && qa.preview_loading)
                ya = oa.renderPreview(qa, ra, sa, ta);
            if (!ya && this.isVideoAttachment(qa)) {
                ya = n.create('div');
                w.render(oa.renderVideo(qa, pa), ya);
            }
            if (!ya && qa.preview_url)
                ya = oa.renderPreview(qa, ra, sa, ta);
            if (!ya && this.isFileAttachment(qa))
                if (qa.metadata && qa.metadata.type == m.MercuryAttachmentAudioClip) {
                    ya = n.create('div');
                    var bb = oa.renderAudioClip(qa, ra.message_id, va, wa);
                    w.render(bb, ya);
                } else 
                    ya = pa ? oa.renderFileLink(qa) : oa.renderExtendedFileLink(qa);
            return {
                error: xa,
                content: ya,
                bubblePreferred: this.isBubblePreferred(qa)
            };
        },
        isBubblePreferred: function(pa) {
            return !this.isStickerAttachment(pa)&&!this.isSyncRequestAttachment(pa);
        },
        renderError: function(pa) {
            var qa = g[':fb:mercury:attachment:error'].build();
            n.appendContent(qa.getNode('error'), pa.error_msg);
            return qa.getRoot();
        },
        renderSocialResolution: function(pa) {
            var qa = g[':fb:mercury:attachment:social-resolution'].build();
            qa.setNodeContent('post', pa.share_xhp);
            return qa.getRoot();
        },
        renderChatXHP: function(pa) {
            var qa = g[':fb:mercury:attachment:social-resolution'].build();
            qa.setNodeContent('post', pa.chat_xhp);
            return qa.getRoot();
        },
        renderOpenGraph: function(pa) {
            var qa = pa.share_xhp.cloneNode(true);
            if (ca.firefox())
                aa.set(qa, 'minWidth', '180px');
            return qa;
        },
        renderExternalLink: function(pa) {
            var qa = g[':fb:mercury:attachment:external-link'].build().setNodeContent('name', pa.name);
            pa.base_url && qa.setNodeContent('shortLink', pa.base_url);
            var ra = qa.getNode('preview'), sa = qa.getNode('image-link');
            sa.setAttribute('href', pa.url);
            pa.rel && sa.setAttribute('rel', pa.rel);
            if (pa.preview_url) {
                var ta = qa.getNode('preview-image'), ua = pa.preview_url, va = ba(j.getRawUrlFromSafeUrl(ua));
                if (pa.animated_gif_uri) {
                    ua = ba(pa.animated_gif_uri);
                    l.addClass(ra, "_dri");
                    if (pa.name && pa.name.__html == va.toString())
                        qa.setNodeContent('name', '');
                }
                ta.setAttribute('src', ua);
                l.addClass(ra, pa.preview_class);
                l.show(ta);
            } else {
                l.addClass(qa.getRoot(), 'noMedia');
                l.hide(ra);
            }
            qa.getNode('name').setAttribute('href', pa.url);
            d(['LinkshimHandler'], function(wa) {
                wa.setUpLinkshimHandling(qa.getNode('name'));
                wa.setUpLinkshimHandling(qa.getNode('image-link'));
            });
            if (pa.rel)
                qa.getNode('name').setAttribute('rel', pa.rel);
            return qa.getRoot();
        },
        renderFileLink: function(pa) {
            var qa = null;
            if (pa.url === '') {
                qa = ':fb:mercury:attachment:file-name';
                return na(pa, qa).getRoot();
            } else {
                qa = ':fb:mercury:attachment:file-link';
                return ma(pa, qa).getRoot();
            }
        },
        renderAudioClip: function(pa, qa, ra, sa) {
            var ta = pa.metadata.duration / 1000, ua = 200;
            if (ra && sa)
                if (ta < 5) {
                    ua = ra;
                } else 
                    ua = (1 - Math.pow(10, (ta - 5)/-30)) * (sa - ra) + ra;
            return w.createElement(h, {
                src: pa.url,
                duration: pa.metadata.duration / 1000,
                showHelp: false,
                width: ua
            });
        },
        renderVideo: function(pa, qa) {
            var ra = {
                height: pa.preview_height,
                width: pa.preview_width
            }, sa = qa ? {
                width: 160,
                height: 120
            }
            : {
                width: 266,
                height: 200
            };
            return w.createElement(r, {
                duration: pa.metadata.duration,
                name: pa.name,
                pageID: pa.metadata.pageid,
                size: sa,
                thumbnailSize: ra,
                thumbnail: pa.thumbnail_url,
                videoID: pa.metadata.fbid
            });
        },
        renderExtendedFileLink: function(pa) {
            var qa = null;
            if (pa.url === '') {
                qa = ':fb:mercury:attachment:file-name';
                return na(pa, qa).getRoot();
            }
            qa = ':fb:mercury:attachment:extended-file-link';
            var ra = ma(pa, qa);
            if (pa.open_url) {
                var sa = ra.getNode('openLinkContainer');
                l.show(sa);
                var ta = ra.getNode('openFile');
                ta.setAttribute('href', pa.open_url);
            }
            var ua = ra.getNode('downloadFile');
            ua.setAttribute('href', pa.url);
            pa.rel && ua.setAttribute('rel', pa.rel);
            return ra.getRoot();
        },
        renderMusic: function(pa) {
            var qa = g[':fb:mercury:attachment:music'].build().setNodeContent('filename', pa.name), ra = qa.getNode('link');
            ra.setAttribute('href', pa.url);
            ra.setAttribute('target', '_blank');
            pa.rel && ra.setAttribute('rel', pa.rel);
            var sa = qa.getNode('image-link');
            sa.setAttribute('href', pa.url);
            pa.rel && sa.setAttribute('rel', pa.rel);
            var ta = qa.getNode('preview-image');
            ta.setAttribute('src', pa.preview_url);
            l.show(ta);
            l.addClass(qa.getNode('icon_link'), 'MercuryMusicIcon');
            return qa.getRoot();
        },
        renderSyncRequest: function(pa) {
            var qa = k(pa.metadata), ra = n.create('div');
            w.render(qa, ra);
            return ra;
        },
        renderOrionMercuryAttachment: function(pa) {
            var qa = w.createElement(ia, w.__spread({}, pa.metadata)), ra = n.create('div');
            w.render(qa, ra);
            return ra;
        },
        resizeContain: function(pa, qa) {
            var ra = pa.width / pa.height, sa = qa.width / qa.height;
            if (sa < ra) {
                return {
                    width: Math.min(pa.height * sa, qa.width),
                    height: Math.min(pa.height, qa.height)
                };
            } else 
                return {
                    width: Math.min(pa.width, qa.width),
                    height: Math.min(pa.width / sa, qa.height)
                };
        },
        renderPreview: function(pa, qa, ra, sa) {
            var ta = g[':fb:mercury:attachment:preview'].build(), ua = ta.getNode('image-link');
            if (pa) {
                if (pa.url) {
                    var va = new ba(pa.url).getQueryData().uri;
                    if (va && pa.rel === 'async') {
                        ua.setAttribute('href', va);
                        ua.setAttribute('ajaxify', pa.url);
                    } else 
                        ua.setAttribute('href', pa.url);
                }
                pa.rel && ua.setAttribute('rel', pa.rel);
                var wa;
                if (pa.preview_uploading) {
                    var xa = ta.getNode('cancel-button-container');
                    l.show(xa);
                    var ya = ta.getNode('cancel-button'), za = o.listen(ya, 'click', function() {
                        pa.upload_canceled(pa.upload_id);
                        l.hide(ta.getRoot());
                        za.remove();
                    });
                    pa.on_success(function(event, hb) {
                        if (hb.upload_id == pa.upload_id) {
                            l.hide(xa);
                            za.remove();
                        }
                    });
                    var ab = ta.getNode('progress-bar'), bb = new v(ab), cb = ta.getNode('progress-bar-container');
                    ea(pa.upload_id);
                    pa.on_progress(function(event, hb) {
                        if (hb.upload_id == pa.upload_id) {
                            l.removeClass(cb, "_395w");
                            l.show(cb);
                            ga(bb, hb.event);
                        }
                    });
                    if (pa.on_resizing_progress)
                        pa.on_resizing_progress(function(event, hb) {
                            if (hb.upload_id == pa.upload_id) {
                                l.addClass(cb, "_395w");
                                l.show(cb);
                                bb.setPosition(100 * hb.event.written / hb.event.total);
                            }
                        });
                    l.addClass(ua, "_57jm");
                    if (ra >= 176) {
                        wa = '/images/photos/dots_large.png';
                    } else if (ra >= 86) {
                        wa = '/images/photos/dots_medium.png';
                    } else 
                        wa = '/images/photos/dots_small.png';
                    aa.set(ua, 'width', ra + 'px');
                    aa.set(ua, 'max-width', ra + 'px');
                    if (pa.preview_width && pa.preview_height)
                        aa.set(ua, 'padding-bottom', ((pa.preview_height / pa.preview_width) * 100) + '%');
                } else if (pa.preview_loading) {
                    l.addClass(ua, "_5xdv");
                    if (sa === 'contain' && pa.preview_width && pa.preview_height) {
                        aa.set(ua, 'width', pa.preview_width + 'px');
                        aa.set(ua, 'height', pa.preview_height + 'px');
                    }
                    if (sa === 'cover'&&!ka)
                        l.addClass(ua, "_55pj");
                } else if (pa.metadata && pa.metadata.fbid) {
                    wa = ba('/ajax/mercury/attachments/photo.php').addQueryData({
                        fbid: pa.metadata.fbid,
                        request_user_id: pa.metadata.pageid,
                        mode: sa,
                        width: ra,
                        height: ra
                    }).toString();
                    var db = ua.getAttribute('ajaxify');
                    ua.removeAttribute('ajaxify');
                    ua.removeAttribute('rel');
                    o.listen(ua, 'click', function(event) {
                        event.prevent();
                        i.loadModules(["MessagesViewer"], function(hb) {
                            hb.bootstrapWithConfig({
                                src: wa,
                                endpoint: db,
                                fbid: pa.metadata.fbid,
                                dimensions: pa.metadata.dimensions,
                                disablePaging: qa && qa.attachments.length == 1
                            }, ua);
                        });
                    });
                } else {
                    var eb = ba(pa.preview_url);
                    sa && eb.addQueryData({
                        mode: sa
                    });
                    ra && eb.addQueryData({
                        width: ra,
                        height: ra
                    });
                    wa = eb.toString();
                }
                var fb = ta.getNode('preview-image');
                if (wa) {
                    if (sa === 'contain' && pa.preview_width && pa.preview_height) {
                        var gb = oa.resizeContain({
                            width: ra,
                            height: ra
                        }, {
                            width: pa.preview_width,
                            height: pa.preview_height
                        });
                        fb.setAttribute('width', gb.width);
                        fb.setAttribute('height', gb.height);
                    }
                    if (pa.preview_uploading || (sa === 'cover'&&!ka)) {
                        l.addClass(ua, "_55pj");
                        aa.set(ua, 'backgroundImage', 'url(' + wa + ')');
                    } else {
                        fb.onload = function() {
                            fb.removeAttribute('width');
                            fb.removeAttribute('height');
                        };
                        fb.setAttribute('src', wa);
                    }
                }
                if (qa)
                    this.renderReportRespondLink(ta.getRoot(), pa, qa.message_id);
            }
            return ta.getRoot();
        },
        renderShareLink: function(pa, qa, ra) {
            var sa = g[':fb:mercury:attachment:share-link'].build().setNodeContent('name', pa.name), ta = sa.getNode('link');
            ta.setAttribute('href', pa.url);
            pa.rel && ta.setAttribute('rel', pa.rel);
            return sa.getRoot();
        },
        renderVideoThumb: function(pa) {
            var qa = g[':fb:mercury:attachment:video-thumb'].build(), ra = qa.getNode('thumb');
            ra.setAttribute('href', pa.url);
            ra.setAttribute('rel', pa.rel);
            var sa = n.find(qa.getRoot(), 'img');
            sa.src = pa.preview_url;
            return qa.getRoot();
        },
        renderShareXHP: function(pa, qa) {
            var ra = n.create('div');
            if (pa) {
                n.appendContent(ra, pa.share_xhp);
                this.renderReportRespondLink(ra, pa, qa);
            }
            return ra;
        },
        renderSticker: function(pa, qa, ra, sa) {
            var ta = ra ? 'chatScrolled/': 'messengerScrolled/';
            ta += qa.thread_id;
            var ua = n.create('div');
            l.addClass(ua, 'stickerContainer');
            if (!pa.metadata) {
                var va = z.getSticker(qa.sticker_id), wa = Object.assign({}, va);
                if (va.height > va.width) {
                    wa.height = la;
                    wa.width = va.width * la / va.height;
                } else {
                    wa.width = la;
                    wa.height = va.height * la / va.width;
                }
                wa.stickerID = qa.sticker_id;
                wa.spriteURI = '';
                wa.spriteURI2x = '';
                wa.paddedSpriteURI = '';
                wa.paddedSpriteURI2x = '';
                pa.metadata = wa;
            }
            var xa = null;
            if (pa.metadata.stickerID)
                xa = pa.metadata.stickerID.toString();
            var ya = null;
            if (pa.metadata.packID)
                ya = pa.metadata.packID.toString();
            var za = new ha().setInt('sticker_id', xa), ab = null, bb = null;
            if (window.devicePixelRatio && window.devicePixelRatio > 1) {
                bb = pa.metadata.paddedSpriteURI2x;
                ab = pa.metadata.spriteURI2x;
            } else {
                bb = pa.metadata.paddedSpriteURI;
                ab = pa.metadata.spriteURI;
            }
            var cb = w.createElement(x, {
                animationTrigger: "hover",
                className: "mvs",
                frameCount: pa.metadata.frameCount || 1,
                frameRate: pa.metadata.frameRate || 83,
                framesPerCol: pa.metadata.framesPerCol || 1,
                framesPerRow: pa.metadata.framesPerRow || 1,
                onStickerClick: sa,
                packID: ya,
                paddedSpriteURI: bb,
                sourceHeight: pa.metadata.height,
                sourceURI: za.setEnum('image_type', y.IMAGE).getURI().toString(),
                sourceWidth: pa.metadata.width,
                spriteURI: ab,
                stickerID: xa,
                subscribedThreadID: ta
            });
            w.render(cb, ua);
            return ua;
        },
        renderReportRespondLink: function(pa, qa, ra) {
            if (!qa.is_social_report_attachment)
                return null;
            switch (qa.share_data_type) {
            case m.MercurySupportedShareType.FB_PHOTO:
                break;
            case m.MercurySupportedShareType.FB_SOCIAL_REPORT_PHOTO:
                return null;
            default:
                return null;
            }
            var sa = null;
            if (ra)
                sa = ja.getMessagesFromIDs([ra])[0];
            if (!sa)
                return null;
            if (sa.author === u.getID())
                return null;
            var ta = null;
            t.get(sa.author, function(ua) {
                ta = n.create('a', {
                    rel: 'dialog-post',
                    className: "_z6l",
                    id: 'respond-link',
                    ajaxify: ba('/ajax/report/social_resolution/post/').setQueryData({
                        attachment_fbid: qa.attach_id,
                        post_fbid: qa.shared_object_id,
                        sender_id: s.getUserIDFromParticipantID(ua.id)
                    }).toString()
                });
                n.setContent(ta, fa._("Respond to {name}'s request", {
                    name: ua.name
                }));
                n.appendContent(pa, ta);
            });
        },
        renderPhotoAttachments: function(pa, qa, ra, sa) {
            var ta = pa.length;
            if (!ta)
                return null;
            var ua = n.create('div', {
                className: "_55pk"
            });
            if (ta === 1) {
                var va = oa.renderPreview(pa[0], qa, ra, 'contain');
                n.appendContent(ua, va);
                return ua;
            }
            var wa = (ta == 2 || ta == 4) ? 2: 3, xa = (ra - (wa - 1) * sa) / wa, ya = Math.ceil(ta / wa), za = ya * xa + (ya - 1) * sa, ab = n.create('div', {
                className: "_55pm",
                style: 'padding-bottom: ' + (za / ra * 100) + '%;'
            });
            n.appendContent(ua, ab);
            for (var bb = 0; bb < ta; ++bb) {
                var cb = oa.renderPreview(pa[bb], qa, xa, 'cover'), db = bb%wa, eb = Math.floor(bb / wa);
                l.addClass(cb, "_55pn");
                aa.apply(cb, {
                    width: (xa / ra * 100) + '%',
                    left: ((db * (xa + sa)) / ra * 100) + '%',
                    top: ((eb * (xa + sa)) / za * 100) + '%'
                });
                n.appendContent(ab, cb);
            }
            return ua;
        },
        isPhotoAttachment: function(pa) {
            return pa.attach_type == q.PHOTO || (pa.attach_type == q.FILE && pa.preview_url);
        },
        isVideoAttachment: function(pa) {
            return pa.attach_type == q.VIDEO;
        },
        isShareAttachment: function(pa) {
            return pa.attach_type == q.SHARE;
        },
        isFileAttachment: function(pa) {
            return pa.attach_type == q.FILE;
        },
        isErrorAttachment: function(pa) {
            return pa.attach_type == q.ERROR;
        },
        isStickerAttachment: function(pa) {
            return pa.attach_type == q.STICKER;
        },
        isSyncRequestAttachment: function(pa) {
            var qa = m.MercurySupportedShareType;
            return this.isShareAttachment(pa) && pa.share_data_type == qa.FB_SYNC_REQUEST;
        },
        sortAttachmentsStablyByType: function(pa) {
            var qa = [oa.isPhotoAttachment, oa.isShareAttachment, oa.isFileAttachment, oa.isErrorAttachment];
            qa.push(function(sa) {
                return true;
            });
            var ra = qa.map(function(sa) {
                return [];
            });
            pa.forEach(function(sa) {
                for (var ta = 0; ta < qa.length; ta++)
                    if (qa[ta](sa)) {
                        ra[ta].push(sa);
                        break;
                    }
            });
            return Array.prototype.concat.apply([], ra);
        }
    };
    e.exports = oa;
}, null);
__d("MercuryAttachments.react", ["MercuryAttachmentRenderer", "DOM", "Event", "ImmutableObject", "React", "SubscriptionsHandler", "cx", "emptyFunction", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    'use strict';
    var p = 176, q = 4, r = k.createClass({
        displayName: "MercuryAttachments",
        propTypes: {
            message: k.PropTypes.instanceOf(j).isRequired,
            attachments: k.PropTypes.array.isRequired,
            isChat: k.PropTypes.bool,
            onImageLoad: k.PropTypes.func,
            onStickerClick: k.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                isChat: false,
                onImageLoad: n,
                onStickerClick: n
            };
        },
        componentDidMount: function() {
            this._subscriptionsHandler = new l();
            this.renderAttachments();
        },
        componentDidUpdate: function() {
            this.renderAttachments();
        },
        componentWillUnmount: function() {
            this._subscriptionsHandler.release();
        },
        render: function() {
            var s = this.props.attachments.filter(g.isPhotoAttachment).length > 0;
            return (k.createElement("div", k.__spread({}, this.props, {
                className: o(this.props.className, (("_5h9y") + (s ? ' ' + "_zl6" : '')))
            })));
        },
        renderAttachments: function() {
            var s = this.getDOMNode();
            h.empty(s);
            var t = this.props.message, u = g.sortAttachmentsStablyByType(this.props.attachments), v = g.renderPhotoAttachments(u.filter(g.isPhotoAttachment), t, p, q);
            v && h.appendContent(s, v);
            for (var w = 0; w < u.length; w++) {
                var x = u[w];
                if (g.isPhotoAttachment(x))
                    continue;
                var y = g.renderAttachment(this.props.isChat, x, t, null, null, this.props.onStickerClick);
                y.error && h.appendContent(s, y.error);
                y.content && h.appendContent(s, y.content);
            }
            h.scry(s, 'img').forEach(function(z) {
                this._subscriptionsHandler.addSubscriptions(i.listen(z, 'load', function() {
                    this.props.onImageLoad(z);
                }.bind(this)));
            }.bind(this));
        }
    });
    e.exports = r;
}, null);
__d("MercurySpoofWarning.react", ["MercuryParticipants", "ReactPropTypes", "React", "fbt"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i.createClass({
        displayName: "MercurySpoofWarning",
        propTypes: {
            authorID: h.string.isRequired
        },
        getInitialState: function() {
            return {
                author: {
                    name: ''
                }
            };
        },
        componentWillMount: function() {
            this.componentWillReceiveProps(this.props);
        },
        componentWillReceiveProps: function(l) {
            g.get(l.authorID, function(m) {
                return this.setState({
                    author: m
                });
            }.bind(this));
        },
        render: function() {
            return (i.createElement("div", i.__spread({}, this.props), j._("Unable to confirm {name_or_email} as the sender.", [j.param("name_or_email", this.state.author.name)])));
        }
    });
    e.exports = k;
}, null);
__d("ChatMessage.react", ["ChatAnimatedGifs", "ChatAuthorPhotoBlock.react", "ChatBubble.react", "ChatConfig", "CSS", "ImmutableObject", "MercuryAttachment", "MercuryAttachments.react", "MercuryAttachmentRenderer", "MercuryErrorInfo", "MercuryIDs", "MercuryMessageError.react", "MercurySpoofWarning.react", "React", "ReactPropTypes", "cx", "fbt", "formatDate", "isRTL", "joinClasses", "MercuryMessages"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    'use strict';
    var aa = b('MercuryMessages').get(), ba = t.createClass({
        displayName: "ChatMessage",
        propTypes: {
            message: u.instanceOf(l).isRequired,
            maxBubbleWidth: u.number.isRequired,
            onImageLoad: u.func,
            onStickerClick: u.func
        },
        componentDidMount: function() {
            k.conditionClass(this.getDOMNode(), "_2cnu", this.isOneLine());
        },
        isOneLine: function() {
            var ca = this.props.message;
            return aa.isInbound(ca)&&!this.refs.attachmentsInside && this.refs.bubble&&!this.refs.bubble.contentWraps();
        },
        shouldComponentUpdate: function(ca, da) {
            return ca.message !== this.props.message;
        },
        render: function() {
            var ca = this.props.message, da = aa.isInbound(ca), ea = q.isMultichat(ca.thread_id), fa = y(ca.body), ga = j.get('chat_fading_bubbles')&&!da && aa.isSending(ca), ha = p.hasErrorStatus(ca), ia = (("_5wd4") + (da ? ' ' + "_1nc7" : '') + (!da ? ' ' + "_1nc6" : '') + (da && ea ? ' ' + "_5ysy" : '') + (ga ? ' ' + "_4oe5" : '') + (ha ? ' ' + "_1zcs" : '') + (fa ? ' ' + "direction_rtl" : '') + (!fa ? ' ' + "direction_ltr" : '')), ja = new Date(ca.timestamp);
            return (t.createElement(h, t.__spread({}, this.props, {
                authorID: ca.author,
                className: z(this.props.className, ia),
                hideName: !da ||!ea,
                hidePhoto: !da,
                timestamp: ca.timestamp,
                title: da ? null: x(ja, 'g:ia')
            }), this._renderInner(), this._renderUndertext()));
        },
        _renderInner: function() {
            if (this.props.message.is_filtered_content)
                return (t.createElement("div", {
                    className: "_5wd9",
                    ref: "inner"
                }, this._renderFilteredContent()));
            return (t.createElement("div", {
                className: "_5wd9",
                ref: "inner"
            }, this._renderBubble(), this._renderAttachments('outside')));
        },
        _renderUndertext: function() {
            if (this.props.message.is_filtered_content)
                return null;
            return (t.createElement("div", {
                className: "_3ry4",
                ref: "undertext"
            }, t.createElement(r, {
                className: "_5wda clearfix",
                message: this.props.message,
                ref: "status"
            }), this._renderSpoofWarning()));
        },
        _renderSpoofWarning: function() {
            return (this.props.message.is_spoof_warning ? t.createElement(s, {
                authorID: this.props.message.author,
                className: "_5wdb"
            }) : null);
        },
        _renderFilteredContent: function() {
            return t.createElement("div", {
                className: "_5wdc uiBoxYellow clearfix"
            }, "This message is no longer available because it was identified as abusive or marked as spam.");
        },
        _renderAttachments: function(ca) {
            var da = this.props.message, ea = ca == 'inside' ? 'attachmentsInside': 'attachmentsOutside', fa = m.get(da).filter(function(ga) {
                var ha = o.isBubblePreferred(ga);
                return (ha && ca === 'inside') || (!ha && ca === 'outside');
            });
            if (fa.length > 0)
                return t.createElement(n, {
                    className: "_5wdd clearfix",
                    isChat: true,
                    message: da,
                    attachments: fa,
                    ref: ea,
                    onImageLoad: this.props.onImageLoad,
                    onStickerClick: this.props.onStickerClick
                });
        },
        _renderBubble: function() {
            var ca = this.props.message, da = ca.body, ea = this._renderAttachments('inside');
            if (g.shouldHideBody(ca))
                da = '';
            if (da || ea)
                return (t.createElement("div", {
                    className: "_5wde"
                }, t.createElement(i, {
                    attachments: ea,
                    body: da,
                    className: "_5wdf",
                    maxWidth: this.props.maxBubbleWidth,
                    ranges: ca.ranges,
                    ref: "bubble"
                })));
        }
    });
    e.exports = ba;
}, null);
__d("ChatVideoCallLink.react", ["Arbiter", "ChatVisibility", "MercuryViewer", "PresencePrivacy", "React", "ReactPropTypes", "SubscriptionsHandler", "VideoCallCore", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = k.createClass({
        displayName: "ChatVideoCallLink",
        propTypes: {
            message: l.object.isRequired,
            onClick: l.func.isRequired
        },
        componentDidMount: function() {
            this._subscriptions = new m();
            this._subscriptions.addSubscriptions(g.subscribe(['buddylist/availability-changed'], this.availabilityChanged), j.subscribe(['privacy-changed', 'privacy-availability-changed'], this.availabilityChanged));
        },
        componentWillUnmount: function() {
            this._subscriptions.release();
        },
        render: function() {
            return (k.createElement("a", {
                className: (("callBackLink") + (this.shouldHideLink() ? ' ' + "hidden_elem" : '')),
                "data-gt": JSON.stringify({
                    videochat: 'clicked_callback_link'
                }),
                href: "#",
                onClick: this.linkClicked
            }, this.renderLinkText()));
        },
        renderLinkText: function() {
            if (this.props.message.log_message_data.event_name == 'install_canceled') {
                return ("Retry setup and call back.");
            } else if (!this.props.message.log_message_data.event_name && this.props.message.log_message_data.callee == i.getID()&&!this.props.message.log_message_data.answered)
                return ("Call back.");
        },
        shouldHideLink: function() {
            return !h.isOnline() ||!n.availableForCall(this.props.message.log_message_data.to);
        },
        linkClicked: function() {
            var r;
            if (this.props.message.log_message_data.event_name == 'install_canceled') {
                r = 'callback_cancelinstall_link';
            } else if (!this.props.message.log_message_data.event_name && this.props.message.log_message_data.callee == i.getID()&&!this.props.message.log_message_data.answered)
                r = 'callback_link';
            this.props.onClick(this.props.message.log_message_data.to, this.props.message.thread_id, r);
        },
        availabilityChanged: function() {
            this.forceUpdate();
        }
    });
    e.exports = q;
}, null);
__d("MercuryLogMessageRenderer", ["MercuryAttachmentRenderer", "CSS", "DOM", "HovercardLink", "MercuryViewer", "MercuryLogMessageType", "MercuryParticipants", "React", "Image.react", "TooltipLink.react", "cx", "fbt", "ix", "OrionMercuryLogMessage"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = b('OrionMercuryLogMessage').module, u = {
        renderText: function(oa, pa) {
            switch (oa.log_message_type) {
            case l.SUBSCRIBE:
                w(oa, pa);
                break;
            case l.UNSUBSCRIBE:
                ba(oa, pa);
                break;
            case l.VIDEO_CALL:
                ca(oa, pa);
                break;
            case l.PHONE_CALL:
                ea(oa, pa);
                break;
            case l.THREAD_NAME:
                fa(oa, pa);
                break;
            case l.THREAD_IMAGE:
                ga(oa, pa);
                break;
            case l.WALLPAPER:
                ha(oa, pa);
                break;
            case l.SERVER_ERROR:
                ia(oa, pa);
                break;
            case l.ORION:
                if (t)
                    ja(oa, pa);
                break;
            }
        },
        renderIcon: function(oa) {
            return (n.createElement(o, {
                className: v(oa),
                src: s('images/spacer.gif')
            }));
        },
        renderLegacy: function(oa, pa, qa, ra) {
            v(ra).split(' ').forEach(function(sa) {
                return sa && h.addClass(oa, sa);
            });
            this.renderText(ra, function(sa) {
                n.render(n.createElement("span", null, sa), pa);
            });
            this.renderAttachmentLegacy(qa, ra);
        },
        renderAttachmentLegacy: function(oa, pa) {
            if (pa.log_message_type == l.THREAD_IMAGE) {
                var qa = pa.log_message_data.image;
                if (qa) {
                    var ra = g.renderPreview(qa.preview_url ? qa : null);
                    i.setContent(oa, ra);
                    h.addClass(ra, "_z6a");
                    h.show(oa);
                }
            }
        }
    };
    e.exports = u;
    function v(oa) {
        var pa = oa.log_message_type, qa = oa.log_message_data;
        return (("_5wzu") + (pa == l.SUBSCRIBE ? ' ' + "_5wzj" : '') + (pa == l.UNSUBSCRIBE ? ' ' + "_5wzk" : '') + (pa == l.THREAD_NAME ? ' ' + "_5wzl" : '') + (pa == l.THREAD_IMAGE ? ' ' + "_5wzm" : '') + (pa == l.VIDEO_CALL && (qa.answered || na(oa)) ? ' ' + "_5wzn" : '') + (pa == l.VIDEO_CALL&&!(qa.answered || na(oa)) ? ' ' + "_5wzo" : '') + (pa == l.PHONE_CALL && qa.answered ? ' ' + "_5wzp" : '') + (pa == l.PHONE_CALL&&!qa.answered ? ' ' + "_5wzq" : '') + (pa == l.SERVER_ERROR ? ' ' + "_5wzr" : ''));
    }
    function w(oa, pa) {
        var qa = ma(oa.log_message_data.added_participants);
        switch (qa.length) {
        case 1:
            x(oa, pa, qa);
            break;
        case 2:
            y(oa, pa, qa);
            break;
        case 3:
            z(oa, pa, qa);
            break;
        default:
            aa(oa, pa, qa);
            break;
        }
    }
    function x(oa, pa, qa) {
        var ra = [oa.author, qa[0]];
        m.getMulti(ra, function(sa) {
            if (oa.author == k.getID()) {
                pa(r._("You added {subscriber1}.", [r.param("subscriber1", la(sa[qa[0]]))]));
            } else if (qa[0] == k.getID()) {
                pa(r._("{actor} added you.", [r.param("actor", la(sa[oa.author]))]));
            } else 
                pa(r._("{actor} added {subscriber1}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber1", la(sa[qa[0]]))]));
        });
    }
    function y(oa, pa, qa) {
        var ra = [oa.author].concat(qa);
        m.getMulti(ra, function(sa) {
            if (oa.author == k.getID()) {
                pa(r._("You added {subscriber1} and {subscriber2}.", [r.param("subscriber1", la(sa[qa[0]])), r.param("subscriber2", la(sa[qa[1]]))]));
            } else if (qa[0] == k.getID()) {
                pa(r._("{actor} added you and {subscriber2}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber2", la(sa[qa[1]]))]));
            } else 
                pa(r._("{actor} added {subscriber1} and {subscriber2}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber1", la(sa[qa[0]])), r.param("subscriber2", la(sa[qa[1]]))]));
        });
    }
    function z(oa, pa, qa) {
        var ra = [oa.author].concat(qa);
        m.getMulti(ra, function(sa) {
            if (oa.author == k.getID()) {
                pa(r._("You added {subscriber1}, {subscriber2} and {subscriber3}.", [r.param("subscriber1", la(sa[qa[0]])), r.param("subscriber2", la(sa[qa[1]])), r.param("subscriber3", la(sa[qa[2]]))]));
            } else if (qa[0] == k.getID()) {
                pa(r._("{actor} added you, {subscriber2} and {subscriber3}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber2", la(sa[qa[1]])), r.param("subscriber3", la(sa[qa[2]]))]));
            } else 
                pa(r._("{actor} added {subscriber1}, {subscriber2} and {subscriber3}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber1", la(sa[qa[0]])), r.param("subscriber2", la(sa[qa[1]])), r.param("subscriber3", la(sa[qa[2]]))]));
        });
    }
    function aa(oa, pa, qa) {
        var ra = [oa.author].concat(qa);
        m.getMulti(ra, function(sa) {
            function ta(va) {
                var wa = n.createElement("div", null, va.map(function(xa) {
                    return n.createElement("div", null, xa.name);
                }));
                return (n.createElement(p, {
                    alignH: "center",
                    position: "above",
                    tooltip: wa
                }, r._("{num} more", [r.param("num", va.length)])));
            }
            var ua = qa.map(function(va) {
                return sa[va];
            });
            if (oa.author == k.getID()) {
                pa(r._("You added {subscriber1}, {subscriber2} and {more_people}.", [r.param("subscriber1", la(ua[0])), r.param("subscriber2", la(ua[1])), r.param("more_people", ta(ua.slice(2)))]));
            } else if (qa[0] == k.getID()) {
                pa(r._("{actor} added you, {subscriber2} and {more_people}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber2", la(ua[1])), r.param("more_people", ta(ua.slice(2)))]));
            } else 
                pa(r._("{actor} added {subscriber1}, {subscriber2} and {more_people}.", [r.param("actor", la(sa[oa.author])), r.param("subscriber1", la(ua[0])), r.param("subscriber2", la(ua[1])), r.param("more_people", ta(ua.slice(2)))]));
        });
    }
    function ba(oa, pa) {
        var qa = [oa.author], ra = oa.log_message_data.removed_participants, sa;
        if (ra.length === 1) {
            sa = ra[0];
            qa.push(sa);
        }
        m.getMulti(qa, function(ta) {
            var ua = ta[oa.author], va = ta[sa];
            if (oa.author == k.getID()) {
                if (!sa || sa == oa.author) {
                    pa("You left the conversation.");
                } else 
                    pa(r._("You removed {name} from the conversation.", [r.param("name", la(va))]));
            } else if (!sa || sa == oa.author) {
                pa(r._("{actor} left the conversation.", [r.param("actor", la(ua))]));
            } else if (sa == k.getID()) {
                pa(r._("{actor} removed you from the conversation.", [r.param("actor", la(ua))]));
            } else 
                pa(r._("{actor} removed {name} from the conversation.", [r.param("actor", la(ua)), r.param("name", la(va))]));
        });
    }
    function ca(oa, pa) {
        if (na(oa)) {
            da(oa, pa);
            return;
        }
        var qa = oa.log_message_data.caller, ra = oa.log_message_data.callee, sa = [qa, ra];
        m.getMulti(sa, function(ta) {
            var ua = ka(ta[ra]);
            if (qa == k.getID()) {
                if (oa.log_message_data.answered) {
                    pa(r._("You called {firstname}.", [r.param("firstname", ua)]));
                } else 
                    pa(r._("{firstname} missed a call from you.", [r.param("firstname", ua)]));
            } else {
                var va = ka(ta[qa]);
                if (oa.log_message_data.answered) {
                    pa(r._("{firstname} called you.", [r.param("firstname", va)]));
                } else 
                    pa(r._("You missed a call from {firstname}.", [r.param("firstname", va)]));
            }
        });
    }
    function da(oa, pa) {
        m.get(oa.log_message_data.callee, function(qa) {
            var ra = ka(qa);
            switch (oa.log_message_data.event_name) {
            case 'installing':
                pa(r._("{firstname} is setting up video calling...", [r.param("firstname", ra)]));
                break;
            case 'installed':
                pa(r._("{firstname} finished setting up video calling.", [r.param("firstname", ra)]));
                break;
            case 'install_canceled':
                pa("You canceled the video calling installation.");
                break;
            }
        });
    }
    function ea(oa, pa) {
        var qa = oa.log_message_data.caller, ra = oa.log_message_data.callee, sa = [qa, ra];
        m.getMulti(sa, function(ta) {
            if (qa == k.getID()) {
                var ua = ka(ta[ra]);
                if (oa.log_message_data.answered) {
                    pa(r._("You called {firstname}.", [r.param("firstname", ua)]));
                } else 
                    pa(r._("{firstname} missed a call from you.", [r.param("firstname", ua)]));
            } else {
                var va = ka(ta[qa]);
                if (oa.log_message_data.answered) {
                    pa(r._("{firstname} called you.", [r.param("firstname", va)]));
                } else 
                    pa(r._("You missed a call from {firstname}.", [r.param("firstname", va)]));
            }
        });
    }
    function fa(oa, pa) {
        var qa = oa.log_message_data.name;
        if (oa.author == k.getID()) {
            if (qa) {
                pa(r._("You named the conversation: {name}.", [r.param("name", n.createElement("span", {
                    className: "_5wzs"
                }, qa))]));
            } else 
                pa("You removed the conversation name.");
        } else 
            m.get(oa.author, function(ra) {
                var sa = la(ra);
                if (qa) {
                    pa(r._("{actor} named the conversation: {name}.", [r.param("actor", sa), r.param("name", n.createElement("span", {
                        className: "_5wzs"
                    }, qa))]));
                } else 
                    pa(r._("{actor} removed the conversation name.", [r.param("actor", sa)]));
                });
    }
    function ga(oa, pa) {
        if (oa.author == k.getID()) {
            if (oa.log_message_data.image) {
                pa("You changed the conversation picture.");
            } else 
                pa("You removed the conversation picture.");
        } else 
            m.get(oa.author, function(qa) {
                var ra = la(qa);
                if (oa.log_message_data.image) {
                    pa(r._("{actor} changed the conversation picture.", [r.param("actor", ra)]));
                } else 
                    pa(r._("{actor} removed the conversation picture.", [r.param("actor", ra)]));
                });
    }
    function ha(oa, pa) {
        if (oa.author == k.getID()) {
            pa("You changed the wallpaper.");
        } else 
            m.get(oa.author, function(qa) {
                var ra = la(qa);
                pa(r._("{actor} changed the wallpaper.", [r.param("actor", ra)]));
            });
    }
    function ia(oa, pa) {
        pa("Couldn't find previous messages.");
    }
    function ja(oa, pa) {
        var qa = oa.log_message_data, ra = qa.senderId, sa = qa.receiverId, ta = ra === k.getID();
        m.getMulti([ra, sa], function(ua) {
            pa(n.createElement(t, n.__spread({}, qa, {
                receiverParticipant: ua[sa],
                senderParticipant: ua[ra],
                viewerIsSender: ta
            })));
        });
    }
    function ka(oa) {
        return la(oa, true);
    }
    function la(oa, pa) {
        var qa = oa.fbid, ra = j.constructEndpoint({
            id: qa
        });
        if (oa.href)
            return (n.createElement("a", {
                className: "_5wzt",
                href: oa.href,
                "data-hovercard": ra
            }, pa ? oa.short_name : oa.name));
        return oa.name;
    }
    function ma(oa) {
        var pa = oa.indexOf(k.getID());
        if (pa > 0) {
            var qa = oa.filter(function(ra) {
                return ra !== k.getID();
            });
            return [k.getID()].concat(qa);
        }
        return oa;
    }
    function na(oa) {
        return oa.log_message_data.event_name === 'installing' || oa.log_message_data.event_name === 'installed' || oa.log_message_data.event_name === 'install_canceled';
    }
}, null);
__d("MercuryLogMessage.react", ["DOM", "Event", "ChatVideoCallLink.react", "ImmutableObject", "MercuryLogMessageRenderer", "MercuryLogMessageType", "React", "ReactPropTypes", "VideoCallSupport", "cx", "emptyFunction", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    'use strict';
    var t = m.createClass({
        displayName: "MercuryLogMessage",
        propTypes: {
            message: n.instanceOf(j).isRequired,
            onImageLoad: n.func,
            onVideoCallLinkClick: n.func
        },
        getDefaultProps: function() {
            return {
                onImageLoad: q
            };
        },
        getInitialState: function() {
            return {
                messageText: null
            };
        },
        componentDidMount: function() {
            this.componentWillReceiveProps(this.props);
        },
        componentWillReceiveProps: function(u) {
            k.renderText(u.message, function(v) {
                this.setState({
                    messageText: v
                });
            }.bind(this));
        },
        shouldComponentUpdate: function(u, v) {
            return this.state.messageText != v.messageText;
        },
        componentDidUpdate: function() {
            var u = this.refs.attachment.getDOMNode();
            k.renderAttachmentLegacy(u, this.props.message);
            g.scry(u, 'img').forEach(function(v) {
                var w = h.listen(v, 'load', function() {
                    this.props.onImageLoad(v);
                    w.remove();
                }.bind(this));
            }.bind(this));
        },
        render: function() {
            return (m.createElement("div", m.__spread({}, this.props, {
                className: s(this.props.className, "_5ye6"),
                title: r(new Date(this.props.message.timestamp), 'g:ia')
            }), k.renderIcon(this.props.message), m.createElement("div", {
                className: "_5ye7"
            }, this.state.messageText, this.renderVideoCallLink()), m.createElement("div", {
                className: "_5ye8",
                ref: "attachment"
            })));
        },
        renderVideoCallLink: function() {
            if (this.props.message.log_message_type !== l.VIDEO_CALL ||!this.props.onVideoCallLinkClick ||!o.isVideoCallSupported())
                return null;
            return (m.createElement(i, {
                message: this.props.message,
                onClick: this.props.onVideoCallLinkClick
            }));
        }
    });
    e.exports = t;
}, null);
__d("ChatConversation.react", ["ChatDateBreak.react", "ChatMessage.react", "ImmutableObject", "MercuryActionTypeConstants", "MercuryLogMessage.react", "React", "cx", "invariant", "OrionNUXRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    'use strict';
    var o = b('OrionNUXRenderer').module, p = 1000 * 60 * 60, q = l.createClass({
        displayName: "ChatConversation",
        propTypes: {
            maxBubbleWidth: l.PropTypes.number.isRequired,
            messages: l.PropTypes.arrayOf(l.PropTypes.instanceOf(i)).isRequired,
            onCallLinkClick: l.PropTypes.func,
            onImageLoad: l.PropTypes.func,
            onStickerClick: l.PropTypes.func
        },
        componentWillReceiveProps: function(r) {
            n(r.maxBubbleWidth === this.props.maxBubbleWidth);
        },
        render: function() {
            var r = this.props.messages, s = [];
            for (var t = 0; t < r.length; t++) {
                var u = r[t], v = (t > 0) ? r[t - 1]: null;
                if (u.is_cleared)
                    continue;
                if (!v || v.is_cleared || u.timestamp - v.timestamp > p)
                    s.push(l.createElement(g, {
                        date: new Date(u.timestamp),
                        key: 'db:' + u.message_id
                    }));
                if (u.action_type == j.LOG_MESSAGE) {
                    s.push(l.createElement(k, {
                        className: "_5w0o",
                        key: u.message_id,
                        message: u,
                        onImageLoad: this.props.onImageLoad,
                        onCallLinkClick: this.props.onCallLinkClick
                    }));
                } else {
                    s.push(l.createElement(h, {
                        key: u.message_id,
                        message: u,
                        maxBubbleWidth: this.props.maxBubbleWidth,
                        onImageLoad: this.props.onImageLoad,
                        onStickerClick: this.props.onStickerClick
                    }));
                    if (o && o.isValidNUXMessage(u))
                        s.push(l.createElement(o, {
                            key: 'onr_c:' + u.message_id,
                            message: u,
                            onImageLoad: this.props.onImageLoad,
                            type: "chat"
                        }));
                }
            }
            return l.createElement("div", null, s);
        }
    });
    e.exports = q;
}, null);
__d("MercuryTypingReceiver", ["Arbiter", "ChannelConstants", "MercuryActionTypeConstants", "MercuryIDs", "MercuryPayloadSource", "MercuryViewer", "TypingStates", "mixInEventEmitter", "setTimeoutAcrossTransitions", "MercuryServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = b('MercuryServerRequests').get(), q, r = {}, s = 30000, t = {};
    n(t, {
        'state-changed': true
    });
    function u(aa) {
        var ba = r[aa] || {}, ca = Object.keys(ba);
        ca.sort(function(da, ea) {
            return ba[da] - ba[ea];
        });
        return ca;
    }
    function v() {
        q = null;
        var aa = Date.now(), ba = {}, ca = false;
        for (var da in r) {
            var ea = false;
            for (var fa in r[da] || {})
                if (r[da][fa] < aa - s) {
                    delete r[da][fa];
                    ea = true;
                } else 
                    ca = true;
            if (ea)
                ba[da] = u(da);
        }
        for (var ga in ba) {
            x(ba);
            break;
        }
        if (ca)
            q = o(v, 3000);
    }
    function w(aa, ba) {
        if (aa in r)
            if (ba in r[aa]) {
                delete r[aa][ba];
                y(aa);
            }
    }
    function x(aa) {
        t.releaseHeldEventType('state-changed');
        t.emitAndHold('state-changed', aa);
    }
    function y(aa) {
        var ba = {};
        ba[aa] = u(aa);
        x(ba);
    }
    function z(aa) {
        if (aa.thread_fbid)
            return p.getClientThreadIDNow(aa.thread_fbid);
        if (aa.type === 'typ')
            return j.getThreadIDFromUserID(aa.from);
        return null;
    }
    g.subscribe([h.getArbiterType('typ'), h.getArbiterType('ttyp')], function(aa, ba) {
        var ca = ba.obj, da = z(ca);
        if (da) {
            var ea = j.getParticipantIDFromUserID(ca.from);
            if (ca.st == m.TYPING) {
                r[da] = r[da] || {};
                var fa = r[da][ea];
                r[da][ea] = Date.now();
                if (!q)
                    q = o(v, 3000);
                !fa && y(da);
            } else if (ca.st == m.INACTIVE)
                w(da, ea);
        }
    });
    p.subscribe('update-typing-state', function(aa, ba) {
        var ca = ba.payload_source;
        if (ca != k.CLIENT_CHANNEL_MESSAGE)
            return;
        var da = ba.actions;
        if (!da ||!da.length)
            return;
        var ea = i.USER_GENERATED_MESSAGE;
        da.forEach(function(fa) {
            if (fa.action_type == ea && fa.author != l.getID())
                w(fa.thread_id, fa.author);
        });
    });
    e.exports = t;
}, null);
__d("ChatTypingIndicators.react", ["ChatAuthorPhotoBlock.react", "DOM", "MercuryIDs", "MercuryParticipants", "ReactPropTypes", "React", "SubscriptionsHandler", "Tooltip", "MercuryTypingReceiver", "arraySort", "createObjectFrom", "cx", "emptyFunction", "fbt", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = b('MercuryThreadInformer').get(), v = l.createClass({
        displayName: "ChatTypingIndicators",
        propTypes: {
            indicatorsWillShow: k.func,
            indicatorsDidShow: k.func,
            threadID: k.string.isRequired
        },
        getDefaultProps: function() {
            return {
                indicatorsWillShow: s,
                indicatorsDidShow: s
            };
        },
        getInitialState: function() {
            return {
                typingUserIDs: []
            };
        },
        componentDidMount: function() {
            this._subscriptions = new m();
            this._subscriptions.addSubscriptions(o.addRetroactiveListener('state-changed', this.typingStateChanged), u.subscribe('messages-received', this.messagesReceived));
        },
        componentWillReceiveProps: function(w) {
            if (w.threadID != this.props.threadID)
                this.setState({
                    typingUserIDs: []
                });
        },
        componentWillUpdate: function(w, x) {
            if (x.typingUserIDs.length > 0)
                this.props.indicatorsWillShow();
        },
        componentDidUpdate: function() {
            if (this.state.typingUserIDs.length > 0)
                this.props.indicatorsDidShow();
            j.getMulti(this.state.typingUserIDs, function(w) {
                if (this.isMounted())
                    this.state.typingUserIDs.forEach(function(x) {
                        var y = w[x];
                        n.set(this.refs[x].getDOMNode(), this.renderTooltip(y.short_name), 'above', 'left');
                    }.bind(this));
            }.bind(this));
        },
        componentWillUnmount: function() {
            this._subscriptions.release();
        },
        render: function() {
            var w = i.isMultichat(this.props.threadID);
            return (l.createElement("div", {
                className: "_2fsr"
            }, this.state.typingUserIDs.map(function(x) {
                return l.createElement(g, {
                    authorID: x,
                    className: (("_gfq") + (w ? ' ' + "_52fu" : '')),
                    hideName: !w,
                    key: x
                }, l.createElement("div", {
                    className: "_52ft"
                }, l.createElement("div", {
                    className: "_gfp",
                    ref: x
                })));
            })));
        },
        renderTooltip: function(w) {
            var x = h.create('span');
            l.render(l.createElement("span", null, t._("{name} is typing...", [t.param("name", w)])), x);
            return x;
        },
        typingStateChanged: function(w) {
            if (this.props.threadID in w)
                this.setState({
                    typingUserIDs: p(w[this.props.threadID])
                });
        },
        messagesReceived: function(w, x) {
            if (this.props.threadID in x) {
                var y = x[this.props.threadID], z = q(y.map(function(aa) {
                    return aa.author;
                }));
                this.setState({
                    typingUserIDs: p(this.state.typingUserIDs.filter(function(aa) {
                        return !z[aa];
                    }))
                });
            }
        }
    });
    e.exports = v;
}, null);
__d("MercuryLastMessageIndicator.react", ["DOM", "MercuryIndicatorController", "MercuryParticipants", "ReactPropTypes", "React", "Tooltip", "cx", "emptyFunction", "joinClasses", "startsWith"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = k.createClass({
        displayName: "MercuryLastMessageIndicator",
        propTypes: {
            hideTyping: j.bool,
            indicatorWillShow: j.func,
            indicatorDidShow: j.func,
            lastMessage: j.object,
            threadID: j.string.isRequired
        },
        getDefaultProps: function() {
            return {
                indicatorWillShow: n,
                indicatorDidShow: n
            };
        },
        getInitialState: function() {
            return {
                data: {}
            };
        },
        componentDidMount: function() {
            this._setup(this.props);
        },
        componentWillReceiveProps: function(r) {
            if (r.threadID != this.props.threadID) {
                this._destroy();
                this._setup(r);
            } else if (r.lastMessage != this.props.lastMessage)
                this._controller.setLastMessage(r.lastMessage);
        },
        componentWillUpdate: function(r, s) {
            if (this.isVisible(r, s))
                this.props.indicatorWillShow();
        },
        componentDidUpdate: function() {
            if (!this.isVisible())
                return;
            this.setText();
            this.setTooltip();
            this.props.indicatorDidShow();
        },
        componentWillUnmount: function() {
            this._destroy();
        },
        render: function() {
            return (k.createElement("div", {
                className: this.getRootClass()
            }, k.createElement("div", {
                className: "_510h"
            }), k.createElement("span", {
                className: "_510f",
                ref: "text"
            }, " ")));
        },
        getRootClass: function() {
            var r = (("_510g") + (this.state.data.self_authored ? ' ' + "_510e" : '')), s = this.state.data.activity, t = null;
            if (p(s, 'seen')) {
                t = 'seen';
            } else if (s == 'typing') {
                t = this.props.hideTyping ? null : s;
            } else 
                t = s;
            return o(r, t, this.props.className);
        },
        isVisible: function(r, s) {
            r = r || this.props;
            s = s || this.state;
            return (s.data && s.data.activity != 'none'&&!(r.hideTyping && s.data.activity == 'typing'));
        },
        setText: function() {
            if (this.state.data.text)
                g.setContent(this.refs.text.getDOMNode(), this.state.data.text);
        },
        setTooltip: function() {
            if (this.state.data.activity == 'seen-by' && this.state.data.tooltip)
                i.getMulti(this.state.data.seenBy, function(r) {
                    var s = g.create('div', null, this.state.data.seenBy.map(function(t) {
                        return g.create('div', null, r[t].name);
                    }));
                    l.set(g.find(this.getDOMNode(), 'span.more'), s, 'above', 'center');
                }.bind(this));
        },
        _setup: function(r) {
            this._controller = new h(r.threadID);
            this._subscription = this._controller.subscribe('state-changed', function(s, t) {
                return this.setState({
                    data: t
                });
            }.bind(this));
            r.lastMessage && this._controller.setLastMessage(r.lastMessage);
        },
        _destroy: function() {
            this._subscription.unsubscribe();
            this._controller.destroy();
        },
        setLastMessage: function(r) {
            this.setProps({
                lastMessage: r
            });
        }
    });
    e.exports = q;
}, null);
__d("MercuryTypingAnimation.react", ["React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = g.createClass({
        displayName: "MercuryTypingAnimation",
        propTypes: {
            color: g.PropTypes.oneOf(['light', 'dark'])
        },
        getDefaultProps: function() {
            return {
                color: 'dark'
            };
        },
        render: function() {
            var k = (("_4a0v") + (this.props.color === 'light' ? ' ' + "_4a0w" : '') + (this.props.color === 'dark' ? ' ' + "_4a0x" : ''));
            return (g.createElement("div", {
                className: i(this.props.className, k)
            }, g.createElement("div", {
                className: "_4b0g"
            }, g.createElement("div", {
                className: "_4a0y"
            }), g.createElement("div", {
                className: "_4a0y"
            }), g.createElement("div", {
                className: "_4a0y"
            }))));
        }
    });
    e.exports = j;
}, null);
__d("MercuryTypingIndicator", ["Animation", "ChatConfig", "CSS", "DOM", "MercuryTypingAnimation.react", "MercuryTypingReceiver", "MercuryViewer", "MercuryParticipants", "React", "Style", "ChatTabTemplates", "Tooltip", "copyProperties", "csx", "cx", "tx", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = b('MercuryThreadInformer').get(), x = [];
    w.subscribe('messages-received', function(aa, ba) {
        x.forEach(function(ca) {
            var da = ba[ca._threadID];
            da && ca.receivedMessages(da);
        });
    });
    l.addRetroactiveListener('state-changed', function(aa) {
        x.forEach(function(ba) {
            var ca = aa[ba._threadID];
            ca && ba._handleStateChanged(ca);
        });
    });
    function y(aa) {
        var ba = q[':fb:chat:conversation:message-group'].build(), ca = q[':fb:mercury:typing-indicator:typing'].build();
        i.addClass(ba.getRoot(), "_50kd");
        var da = ba.getNode('profileLink');
        r.set(da, aa.name, 'left');
        da.href = aa.href;
        ba.setNodeContent('profileName', aa.name);
        ba.setNodeProperty('profilePhoto', 'src', aa.image_src);
        var ea = v._("{name} is typing...", {
            name: aa.short_name
        });
        r.set(ca.getRoot(), ea, 'above');
        j.appendContent(ba.getNode('messages'), ca.getRoot());
        return ba;
    }
    function z(aa, ba, ca) {
        this._animations = {};
        this._activeUsers = {};
        this._typingIndicator = ba;
        this._messagesView = ca;
        this._threadID = aa;
        this._subscription = l.addRetroactiveListener('state-changed', function(da) {
            var ea = da[this._threadID];
            ea && this._handleStateChanged(ea);
        }.bind(this));
        x.push(this);
    }
    s(z.prototype, {
        destroy: function() {
            Object.keys(this._activeUsers).forEach(this._removeUserBubble.bind(this));
            this._controller.destroy();
            x.remove(this);
        },
        receivedMessages: function(aa) {
            aa.forEach(function(ba) {
                if (!m.isViewer(ba.author))
                    this._removeUserBubble(ba.author);
            }.bind(this));
        },
        _handleStateChanged: function(aa) {
            for (var ba in this._activeUsers)
                if (aa.indexOf(ba)===-1) {
                    this._slideOutUserBubble(ba);
                    delete this._activeUsers[ba];
                }
            if (aa.length)
                n.getMulti(aa, function(ca) {
                    var da = this._messagesView.isScrolledToBottom(), ea = {};
                    for (var fa in ca) {
                        var ga = this._activeUsers[fa];
                        ea[fa] = ga || y(ca[fa]).getRoot();
                        if (!ga) {
                            j.appendContent(this._typingIndicator, ea[fa]);
                            if (h.get('chat_thread_typing_indicator_animated')) {
                                var ha = j.scry(this._typingIndicator, "._510u");
                                for (var ia = 0, ja = ha.length; ia < ja; ia++)
                                    o.render(o.createElement(k, {
                                        className: "_3e2s"
                                    }), ha[ia]);
                            }
                        }
                    }
                    var ka = Object.keys(ea).length > 0;
                    da && this._messagesView.scrollToBottom(ka);
                    this._activeUsers = ea;
                }.bind(this));
        },
        _removeUserBubble: function(aa, ba) {
            var ca = this._getCurrentAnimation(aa, ba);
            if (ca) {
                ca.animation.stop();
                j.remove(ca.elem);
                delete this._animations[aa];
            }
            if (aa in this._activeUsers) {
                j.remove(this._activeUsers[aa]);
                delete this._activeUsers[aa];
            }
            if (ba && h.get('chat_thread_typing_indicator_animated')) {
                var da = j.scry(ba, "._510u");
                for (var ea = 0, fa = da.length; ea < fa; ea++)
                    o.unmountComponentAtNode(da[ea]);
            }
            ba && j.remove(ba);
        },
        _slideOutUserBubble: function(aa) {
            var ba = this._activeUsers[aa];
            if (this._getCurrentAnimation(aa, ba)) {
                return;
            } else if (ba) {
                p.set(ba, 'overflow', 'hidden');
                var ca = (new g(ba)).from('opacity', 1).from('height', ba.offsetHeight).to('height', 0).to('opacity', 0).ease(g.ease.end).duration(250).ondone(this._removeUserBubble.bind(this, aa, ba)).go();
                this._animations[aa] = {
                    animation: ca,
                    elem: ba
                };
            }
        },
        _getCurrentAnimation: function(aa, ba) {
            if (this._animations[aa] && (!ba || this._animations[aa].elem === ba))
                return this._animations[aa];
        }
    });
    e.exports = z;
}, null);
__d("MercuryMessageList", ["ImmutableObject", "LogHistory", "OrderedMap", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k = h.getInstance('mercury_message_list');
    function l(q) {
        this.$MercuryMessageList0 = n(q ? m(q) : []);
    }
    l.prototype.append = function(q) {
        this.$MercuryMessageList0 = this.$MercuryMessageList0.merge(n(m(q)));
        p('append', q);
    };
    l.prototype.prepend = function(q) {
        this.$MercuryMessageList0 = n(m(q)).merge(this.$MercuryMessageList0);
        p('prepend', q);
    };
    l.prototype.update = function(q) {
        var r = q.filter(function(s) {
            return this.contains(s);
        }.bind(this));
        if (r.length === 0)
            return;
        this.$MercuryMessageList0 = this.$MercuryMessageList0.merge(n(m(r)));
        p('update', q);
    };
    l.prototype.reorder = function(q) {
        this.$MercuryMessageList0 = n(q.map(function(r) {
            var s = this.$MercuryMessageList0.get(r.message_id);
            if (!s || s.timestamp != r.timestamp || s.is_cleared != r.is_cleared)
                return new g(r);
            return s;
        }.bind(this)));
        p('reorder', q);
    };
    l.prototype.hasReachedClearedMessages = function() {
        var q = this.messageAt(0);
        return !!(q && q.is_cleared);
    };
    l.prototype.messageAt = function(q) {
        var r = this.$MercuryMessageList0.keyAtIndex(q);
        return r ? this.$MercuryMessageList0.get(r) : undefined;
    };
    l.prototype.contains = function(q) {
        return this.$MercuryMessageList0.indexOfKey(o(q)) !== undefined;
    };
    l.prototype.toArray = function() {
        return this.$MercuryMessageList0.toArray();
    };
    l.prototype.toOrderedMap = function() {
        return this.$MercuryMessageList0;
    };
    function m(q) {
        return q.map(function(r) {
            return new g(r);
        });
    }
    function n(q) {
        return i.fromArray(q, o);
    }
    function o(q) {
        return q.message_id;
    }
    function p(event, q) {
        j(function() {
            k.debug(event, {
                messageIDs: q.map(function(r) {
                    return r.message_id;
                })
            });
        }, 0);
    }
    e.exports = l;
}, null);
__d("MercuryMessageStore", ["MercuryAPIArgsSource", "LogHistory", "MercuryViewer", "MercuryMessageList", "SubscriptionsHandler", "MercuryThreadlistConstants", "copyProperties", "merge", "mixInEventEmitter", "setTimeoutAcrossTransitions", "MercuryMessages", "MercuryThreadInformer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    'use strict';
    var q = b('MercuryMessages').get(), r = b('MercuryThreadInformer').get(), s = b('MercuryThreads').get(), t = h.getInstance('mercury_message_store');
    function u(w) {
        this.$MercuryMessageStore0 = w;
        this.$MercuryMessageStore1 = new j();
        this.$MercuryMessageStore2 = 1;
        this.$MercuryMessageStore3 = null;
        this.$MercuryMessageStore4 = 0;
        this.$MercuryMessageStore5 = new k();
        this.$MercuryMessageStore5.addSubscriptions(r.subscribe('messages-received', function(x, y) {
            return this.$MercuryMessageStore7(y);
        }.bind(this)), r.subscribe('messages-updated', function(x, y) {
            return y[this.$MercuryMessageStore0] && this.$MercuryMessageStore8(y[this.$MercuryMessageStore0]);
        }.bind(this)), r.subscribe('messages-reordered', function(x, y) {
            return y[this.$MercuryMessageStore0] && this.$MercuryMessageStore9();
        }.bind(this)));
        t.debug('constructed', {
            threadID: this.$MercuryMessageStore0
        });
        this.$MercuryMessageStorea();
    }
    u.prototype.setNewThreadID = function(w) {
        this.$MercuryMessageStoreb = w;
    };
    u.prototype.destroy = function() {
        this.$MercuryMessageStore5 && this.$MercuryMessageStore5.release();
        t.debug('destroyed', {
            threadID: this.$MercuryMessageStore0
        });
    };
    u.prototype.subscribe = function(w) {
        return this.addRetroactiveListener('updated', w);
    };
    u.prototype.fetchMoreMessages = function() {
        if (q.hasLoadedExactlyNMessages(this.$MercuryMessageStore0, this.$MercuryMessageStore4) && q.hasLoadedAllMessages(this.$MercuryMessageStore0))
            return false;
        if (s.isNewEmptyLocalThread(this.$MercuryMessageStore0))
            return false;
        if (this.$MercuryMessageStore1.hasReachedClearedMessages())
            return false;
        return this.$MercuryMessageStorea();
    };
    u.prototype.$MercuryMessageStorea = function() {
        var w = this.$MercuryMessageStore4 + l.RECENT_MESSAGES_LIMIT * this.$MercuryMessageStore2;
        t.debug('fetching', {
            threadID: this.$MercuryMessageStore0,
            limit: w
        });
        q.getThreadMessagesRange(this.$MercuryMessageStore0, 0, w, this.$MercuryMessageStorec.bind(this), null, g.MERCURY);
        if (this.$MercuryMessageStore2 < 10)
            this.$MercuryMessageStore2 += 1;
        if (q.hasLoadedNMessages(this.$MercuryMessageStore0, w)) {
            this.$MercuryMessageStore9();
            return false;
        }
        return true;
    };
    u.prototype.$MercuryMessageStorec = function(w) {
        if (w && w.length) {
            this.$MercuryMessageStore3 = w[0].timestamp;
            this.$MercuryMessageStore4 = w.length;
            t.debug('fetched', {
                threadID: this.$MercuryMessageStore0,
                earliestMessageTimestamp: this.$MercuryMessageStore3,
                count: this.$MercuryMessageStore4
            });
        }
    };
    u.prototype.$MercuryMessageStore7 = function(w) {
        var x = [], y = w[this.$MercuryMessageStore0];
        if (y && y.length)
            x = x.concat(y);
        if (this.$MercuryMessageStoreb) {
            var z = w[this.$MercuryMessageStoreb];
            if (z && z.length) {
                x = x.concat(z);
                this.$MercuryMessageStoreb = null;
            }
        }
        if (x.length) {
            this.$MercuryMessageStore1.append(x);
            this.$MercuryMessageStore4 += x.length;
            var aa = x.every(function(ba) {
                return ba.author != i.getID();
            });
            this.$MercuryMessageStored(u.MESSAGES_RECEIVED, {
                allFromOthers: aa
            });
        }
    };
    u.prototype.$MercuryMessageStore8 = function(w) {
        this.$MercuryMessageStore1.update(q.getMessagesFromIDs(Object.keys(w)));
        this.$MercuryMessageStoree();
        this.$MercuryMessageStored(u.MESSAGES_CHANGED);
    };
    u.prototype.$MercuryMessageStore9 = function() {
        if (!this.$MercuryMessageStore3)
            return;
        this.$MercuryMessageStore1.reorder(q.getThreadMessagesSinceTimestamp(this.$MercuryMessageStore0, this.$MercuryMessageStore3));
        this.$MercuryMessageStoree();
        this.$MercuryMessageStored(u.MESSAGES_REORDERED);
    };
    u.prototype.$MercuryMessageStored = function(w, x) {
        var y = this.$MercuryMessageStore1.toArray();
        this.releaseHeldEventType('updated');
        this.emitAndHold('updated', n({
            messages: y,
            eventType: w
        }, x));
        v(this.$MercuryMessageStore0, w, y);
    };
    u.prototype.$MercuryMessageStoree = function() {
        var w = this.$MercuryMessageStore1.messageAt(0);
        if (w)
            this.$MercuryMessageStore3 = w.timestamp;
    };
    function v(w, x, y) {
        p(function() {
            t.debug('update:' + x, {
                threadID: w,
                messageIDs: y.map(function(z) {
                    return z.message_id;
                })
            });
        }, 0);
    }
    m(u, {
        MESSAGES_FETCHED: 'fetched',
        MESSAGES_CHANGED: 'changed',
        MESSAGES_RECEIVED: 'received',
        MESSAGES_REORDERED: 'reordered'
    });
    o(u, {
        updated: true
    });
    e.exports = u;
}, null);
__d("ChatTabMessagesView", ["Animation", "Arbiter", "ArbiterMixin", "BanzaiLogger", "ChatConfig", "ChatConversation.react", "ChatTypingIndicators.react", "ChatWelcomeMessage", "CSS", "DOM", "Event", "MercuryLastMessageIndicator.react", "LiveTimer", "MercuryTypingIndicator", "MercuryViewer", "MercuryConfig", "MercuryMessageStore", "React", "ServerTime", "StickerActions", "StickerState", "StickerStoreController", "Style", "SubscriptionsHandler", "UserAgent_DEPRECATED", "arrayContains", "copyProperties", "getElementPosition", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia) {
    'use strict';
    var ja = 70, ka = null, la = 20;
    function ma(oa) {
        if (ka === null) {
            var pa = oa.childNodes[0];
            ca.set(oa, 'overflow', 'scroll');
            ka = pa.clientWidth - ja;
            ca.set(oa, 'overflow', '');
        }
        return ka;
    }
    function na(oa, pa, qa, ra, sa, ta, ua, va) {
        this.loadingIcon = sa;
        this.threadID = oa;
        this.sheetController = pa;
        this.scrollContainer = qa;
        this.conversationElem = ra;
        this.tabView = va;
        s.restart(y.get() / 1000);
        this._loadingMoreMessages = false;
        function wa() {
            na.inform('interaction-with-tab', oa);
        }
        this._subscriptions = new da();
        this._subscriptions.addSubscriptions(h.subscribe('overflow-applied-to-body', this.scrollToBottom.bind(this)), q.listen(this.scrollContainer, 'mousedown', wa));
        if (ea.firefox()) {
            var xa = ('WheelEvent' in window) ? 'wheel': 'DOMMouseScroll';
            this.scrollContainer.addEventListener(xa, wa, false);
        } else 
            this._subscriptions.addSubscriptions(q.listen(this.scrollContainer, 'mousewheel', wa));
        this._subscriptions.addSubscriptions(q.listen(this.scrollContainer, 'scroll', ia(this.scrolling, 50, this)));
        if (k.get('chat_react')) {
            var ya;
            x.render(x.createElement(m, {
                threadID: this.threadID,
                indicatorsWillShow: function() {
                    return ya = this.isScrolledToBottom();
                }.bind(this),
                indicatorsDidShow: function() {
                    return ya && this.scrollToBottom(true);
                }.bind(this)
            }), ua);
        } else 
            this.typingIndicator = new t(this.threadID, ua, this);
        var za;
        this.lastMessageIndicatorNode = ta;
        this.lastMessageIndicator = x.render(x.createElement(r, {
            threadID: this.threadID,
            hideTyping: true,
            indicatorWillShow: function() {
                return za = this.isScrolledToBottom();
            }.bind(this),
            indicatorDidShow: function() {
                return za && this.scrollToBottom(true);
            }.bind(this)
        }), this.lastMessageIndicatorNode);
        this.initializeConversation();
    }
    ga(na, i);
    ga(na.prototype, {
        initializeConversation: function() {
            this._store = new w(this.threadID);
            this._conversation = x.render(x.createElement(l, {
                maxBubbleWidth: ma(this.scrollContainer),
                messages: [],
                onImageLoad: function(oa) {
                    var pa = this.scrollContainer, qa = pa.scrollTop + pa.clientHeight;
                    if (qa + oa.offsetHeight >= pa.scrollHeight)
                        this.scrollToBottom();
                }.bind(this),
                onStickerClick: this._onStickerClick.bind(this),
                onCallLinkClick: function(oa, pa, qa) {
                    na.inform('video-call-clicked', {
                        userID: oa,
                        threadID: pa,
                        clickSource: qa
                    });
                }
            }), this.conversationElem);
            this._subscriptions.addSubscriptions(this._store.subscribe(function(oa) {
                if (oa.eventType == w.MESSAGES_RECEIVED && oa.allFromOthers&&!this.isScrolledToBottom()) {
                    this.sheetController.openNewMessagesSheet();
                    this._newMessagesSheetOpened = true;
                }
                if (oa.eventType == w.MESSAGES_REORDERED) {
                    this._loadingMoreMessages = false;
                    o.hide(this.loadingIcon);
                }
                var pa = this.isScrolledToBottom(), qa = this._getLoadingHeight(), ra = this.scrollContainer.scrollHeight, sa = this.scrollContainer.scrollTop, ta = oa.messages, ua = n.getWelcomeMessage(this.threadID);
                if (ua)
                    ta.push(ua);
                this._conversation.setProps({
                    messages: ta
                }, function() {
                    if (pa || this._shouldScrollToBottom) {
                        this.scrollToBottom();
                        this.setShouldScrollToBottom(false);
                    } else if (oa.eventType == w.MESSAGES_REORDERED)
                        this.scrollToPosition(this.scrollContainer.scrollHeight - ra - qa + sa);
                }.bind(this));
                this.lastMessageIndicator.setProps({
                    lastMessage: ta.length > 0 ? ta[ta.length - 1]: null
                });
                if (oa.eventType == w.MESSAGES_RECEIVED && this._shouldShowStickerReplyNUX(ta) && this.tabView && this.tabView.isFocused())
                    this.tabView.showStickerReplyNUX();
                if (v.WebStickerOptimisticRender && oa.eventType == w.MESSAGES_CHANGED)
                    this._checkToAnimateSticker();
            }.bind(this)));
        },
        setShouldScrollToBottom: function(oa) {
            this._shouldScrollToBottom = oa;
        },
        scrolling: function() {
            this._checkToAnimateSticker();
            if (this.isScrolledNearTop()&&!this._loadingMoreMessages&&!this.isScrolledToBottom()&&!this.tabView._isDragDropActive)
                if (this._store.fetchMoreMessages()) {
                    o.show(this.loadingIcon);
                    this._loadingMoreMessages = true;
                }
            if (!this._newMessagesSheetOpened)
                return;
            if (this.isScrolledToBottom()) {
                this.sheetController.closeNewMessagesSheet();
                this._newMessagesSheetOpened = false;
            }
        },
        getScrollTop: function() {
            return this.scrollContainer && this.scrollContainer.scrollTop;
        },
        destroy: function() {
            p.scry(this.conversationElem, '.stickerContainer').forEach(function(oa) {
                return x.unmountComponentAtNode(oa);
            });
            x.unmountComponentAtNode(this.conversationElem);
            this._subscriptions && this._subscriptions.release();
            x.unmountComponentAtNode(this.lastMessageIndicatorNode);
            delete this.lastMessageIndicator;
            this._store && this._store.destroy();
            this.destroyed = true;
        },
        _getLoadingHeight: function() {
            return this.loadingHeight || this.loadingIcon.clientHeight;
        },
        _shouldShowStickerReplyNUX: function(oa) {
            if (!aa.shouldShowStickerReplyNUX() ||!oa.length)
                return false;
            var pa = oa[oa.length - 1];
            if (pa.author === u.getID())
                return false;
            if (pa.has_attachment)
                return pa.attachments.some(function(qa) {
                    return qa.attach_type === 'sticker';
                });
            return false;
        },
        isScrolledToBottom: function(oa) {
            var pa = this.scrollContainer;
            oa = oa || la;
            return pa.scrollTop + pa.clientHeight >= pa.scrollHeight - oa;
        },
        isScrolledNearTop: function() {
            return this.scrollContainer.scrollTop < this.scrollContainer.clientHeight;
        },
        scrollToBottom: function(oa) {
            this.scrollToPosition(this.scrollContainer.scrollHeight, oa);
        },
        scrollToPosition: function(oa, pa) {
            this._scrollTopAnimation && this._scrollTopAnimation.stop();
            if (pa === true) {
                this._scrollTopAnimation = (new g(this.scrollContainer)).to('scrollTop', oa).ease(g.ease.end).duration(400).go();
            } else 
                this.scrollContainer.scrollTop = oa;
        },
        _onStickerClick: function(oa, pa) {
            if (!oa)
                return;
            j.log('StickersLoggerConfig', {
                event: 'click_sticker',
                packid: oa,
                stickerid: pa
            });
            var qa = this.tabView;
            aa.onTrayDataReady(function() {
                if (fa(aa.getPackIDsInTray(), oa)) {
                    var ra = aa.getPack(oa);
                    if (ra && ra.isPromoted)
                        z.addPack(oa);
                    qa.setStickersFlyoutPackID(oa);
                } else 
                    ba.showStore(oa);
            });
        },
        _checkToAnimateSticker: function() {
            var oa = ha(this.scrollContainer);
            h.inform('chatScrolled/' + this.threadID, {
                scrollTop: this.scrollContainer.scrollTop,
                top: oa.y,
                viewHeight: oa.height
            });
        },
        setNewThreadID: function(oa) {
            this._store.setNewThreadID(oa);
        }
    });
    e.exports = na;
}, null);
__d("ChatTabTypeaheadRenderer", ["MercuryConstants", "DOM", "CompactTypeaheadRenderer", "MercuryThreadMetadataRawRenderer", "TypeaheadFacepile"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(n, o) {
        switch (n.type) {
        case g.MercuryTypeaheadConstants.USER_TYPE:
        case g.MercuryTypeaheadConstants.PAGE_TYPE:
        case g.MercuryTypeaheadConstants.FRIEND_TYPE:
        case g.MercuryTypeaheadConstants.NON_FRIEND_TYPE:
        case g.MercuryTypeaheadConstants.FB4C_TYPE:
            return i(n, o);
        case g.MercuryTypeaheadConstants.THREAD_TYPE:
            return m(n, o);
        default:
            return h.create('div');
        }
    }
    function m(n, o) {
        var p = [], q = n.mercury_thread, r = n.participants_to_render.map(function(u) {
            return u.big_image_src || u.image_src;
        });
        if (r) {
            if (r instanceof Array) {
                r = k.render(r);
            } else 
                r = h.create('img', {
                    alt: '',
                    src: r
                });
            p.push(r);
        }
        var s = q.name, t = j.renderRawParticipantList(q.thread_id, n.participants_to_render, q.participants.length, {
            names_renderer: j.renderShortNames
        });
        p.push(h.create('span', {
            className: 'timestamp'
        }, q.timestamp_relative));
        p.push(h.create('span', {
            className: 'text'
        }, s));
        p.push(h.create('span', {
            className: 'subtext'
        }, t));
        return h.create('li', {
            className: 'node'
        }, p);
    }
    l.className = 'compact';
    e.exports = l;
}, null);
__d("MercuryTypeahead", ["Event", "ArbiterMixin", "DOM", "DOMDimensions", "Input", "Keys", "MercuryTypeaheadTemplates", "Tokenizer", "Typeahead", "TypeaheadCore", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = function(t, u) {
        this._domElement = null;
        this._typeahead = null;
        this._tokenizer = null;
        this._placeholder = '';
        this._exclusions = [];
        this._viewNodeOrID = null;
        this._viewOptions = {
            renderer: 'compact',
            autoSelect: true
        };
        this._tokenizerBehaviors = [];
        this._heightPrev = null;
        this._dataSource = t;
        this._view = u;
    };
    q(s.prototype, h);
    q(s.prototype, {
        setPlaceholder: function(t) {
            this._placeholder = t;
            return this;
        },
        setExcludedParticipantsFromThreadMeta: function(t) {
            if (!t)
                return;
            if (!t.former_participants) {
                this.setExcludedParticipants(t.participants);
                return;
            }
            var u = t.former_participants.filter(function(v) {
                return v.is_friend === false;
            }).map(function(v) {
                return v.id;
            });
            this.setExcludedParticipants(u.concat(t.participants));
        },
        setExcludedParticipants: function(t) {
            this._exclusions = [];
            t.forEach(function(u) {
                var v = u.indexOf(':');
                if (u.substr(0, v) == 'fbid')
                    this._exclusions.push(u.substr(v + 1));
            }.bind(this));
            return this;
        },
        setViewNodeID: function(t) {
            this._viewNodeOrID = t;
        },
        setViewNode: function(t) {
            this._viewNodeOrID = t;
        },
        setFullWidthView: function(t) {
            var u = i.create('div', {
                className: "_4ck uiTypeaheadView"
            });
            i.setContent(t, u);
            this.setViewNode(u);
        },
        setViewOption: function(t, u) {
            this._viewOptions[t] = u;
        },
        addTokenizerBehavior: function(t) {
            this._tokenizerBehaviors.push(t);
        },
        build: function(t) {
            if (this._domElement)
                return;
            var u = m[':fb:mercury:tokenizer'].build(), v = m[':fb:mercury:typeahead'].build();
            this._domElement = u.getRoot();
            i.appendContent(this._domElement, v.getRoot());
            var w = v.getNode('textfield');
            k.setPlaceholder(w, this._placeholder);
            w.setAttribute('data-placeholder', this._placeholder);
            this._input = w;
            var x = {
                node_id: this._viewNodeOrID,
                ctor: this._view,
                options: this._viewOptions
            }, y = {
                ctor: p,
                options: {
                    setValueOnSelect: true
                }
            };
            this._typeahead = new o(this._dataSource, x, y, v.getRoot());
            this._typeahead.init();
            var z = {
                inline: true,
                behaviors: this._tokenizerBehaviors
            };
            this._tokenizer = new n(this._domElement, this._typeahead);
            this._tokenizer.init(u.getNode('tokenarea'), 'participants', [], z);
            this._tokenizer.subscribe(['addToken', 'removeToken', 'removeAllTokens'], this._tokensChanged.bind(this));
            this._tokenizer.subscribe('resize', function() {
                this.inform('resize');
            }.bind(this));
            g.listen(w, 'focus', function() {
                this._resetDataSource();
                this._typeahead.init();
            }.bind(this));
            g.listen(this._domElement, 'click', this.focus.bind(this));
            g.listen(w, 'keydown', this.keydown.bind(this));
            this._heightPrev = j.getElementDimensions(this._domElement).height;
        },
        getElement: function() {
            return this._domElement;
        },
        getSelectedParticipantIDs: function() {
            var t = [];
            if (this._tokenizer)(this._tokenizer.getTokenValues() || []).forEach(function(u) {
                t.push('fbid:' + u);
            });
            return t;
        },
        getTokens: function() {
            var t = [];
            if (this._tokenizer)
                t = this._tokenizer.getTokens();
            return t;
        },
        getTokenizer: function() {
            return this._tokenizer;
        },
        keydown: function(event) {
            if (this._tokenizer.inline && event.keyCode == l.ESC) {
                if (k.isEmpty(this._input)) {
                    var t = this._tokenizer.getLastToken();
                    if (t && t.isRemovable())
                        this._tokenizer.removeToken(t);
                } else 
                    this._typeahead.getCore().reset();
                return false;
            }
            if (k.isEmpty(this._input) && this._tokenizer.inline && event.keyCode === l.RETURN) {
                event.preventDefault();
                return this.inform('tokens-return');
            }
        },
        reset: function() {
            this._tokenizer && this._tokenizer.removeAllTokens();
            this._typeahead && this._typeahead.getCore().reset();
        },
        focus: function() {
            this._tokenizer && this._tokenizer.focusInput();
        },
        getTypeahead: function() {
            return this._typeahead;
        },
        _resetDataSource: function() {
            this._dataSource.setExclusions(this._exclusions);
        },
        _tokensChanged: function() {
            this.inform('tokens-changed');
        }
    });
    e.exports = s;
}, null);
__d("ChatAddFriendsTabSheetRawRenderer", ["ChatTabTypeaheadRenderer", "ContextualTypeaheadView", "DOM", "Event", "MercuryConfig", "MercuryDataSourceWrapper", "MercuryTypeahead", "ChatTabTemplates", "fbt", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = {
        render: function(r, s, t, u, v, w) {
            var x = w ? n[':fb:mercury:chat:tab-sheet:add-friends-empty-tab'].build(): n[':fb:mercury:chat:tab-sheet:add-friends'].build(), y = {};
            if (k.MercuryDataSourceProcessor) {
                y = w ? l.chat_typeahead_source : l.chat_add_people_source;
                y.setShowThreads(w);
            } else if (k.GroupThreadNewMessageGK && w) {
                y = l.chat_tab_composer_source;
                y.setShowThreads(w);
            } else if (w) {
                y = l.source;
            } else 
                y = l.add_people_source;
            var z = new m(y, h);
            z.setViewOption('renderer', g);
            z.setExcludedParticipantsFromThreadMeta(u);
            if (!w)
                z.setPlaceholder("Add friends to this chat");
            z.build();
            i.replace(x.getNode('participantsTypeahead'), z.getElement());
            i.setContent(t, x.getRoot());
            z.getTokenizer().adjustWidth();
            var aa = x.getNode('participantsTypeahead').getAttribute('data-labelid'), ba = i.scry(z.getElement(), 'input[type="text"]')[0];
            if (ba)
                if (aa) {
                    ba.setAttribute('aria-labelledby', aa);
                } else 
                    ba.setAttribute('aria-label', "To");
            z.focus();
            if (!w) {
                var ca = function() {
                    var da = z.getSelectedParticipantIDs();
                    if (da.length)
                        v(da);
                    s.close(r);
                };
                j.listen(x.getNode('doneButton'), 'click', ca);
                z.subscribe('tokens-return', function() {
                    if (z.getTokens().length)
                        ca();
                });
            }
            return z;
        }
    };
    e.exports = q;
}, null);
__d("MultiChatController", ["AsyncSignal", "ChatOpenTab", "copyProperties", "Form", "MercuryIDs", "MercuryLocalIDs", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = b('MercuryServerRequests').get(), n = b('MercuryThreads').get();
    function o() {}
    i(o, {
        subscribe: function(p, q) {
            p.subscribe('confirm', function() {
                this.createGroupThreadFromChooserDialog(p, q);
            }.bind(this));
        },
        createGroupThreadFromChooserDialog: function(p, q) {
            var r = j.serialize(p.getRoot()), s = JSON.parse(r.profileChooserItems), t = [];
            for (var u in s)
                if (s[u])
                    t.push(u);
            var v = o.createThreadForFBIDs(t);
            m.subscribe('update-thread-ids', function(w, x) {
                for (var y in x)
                    if (x[y] == v)
                        new g('/ajax/groups/chat/log', {
                            group_id: q,
                            message_id: y
                        }).send();
            });
            p.hide();
        },
        createThreadForTokens: function(p) {
            if (!p.length)
                return;
            var q = p.length === 1 ? k.getThreadIDFromUserID(p[0].split(':')[1]): l.generateThreadID();
            n.createNewLocalThread(q, p);
            h.openThread(q, 'MultiChatController');
        },
        createThreadForFBIDs: function(p) {
            var q = [];
            for (var r = 0; r < p.length; r++)
                q.push("fbid:" + p[r]);
            return o.createThreadForTokens(q);
        }
    });
    e.exports = o;
}, null);
__d("ChatAddFriendsTabSheet", ["Arbiter", "ArbiterMixin", "ChatAddFriendsTabSheetRawRenderer", "ChatOpenTab", "MercuryConfig", "MercuryConstants", "MercuryLogMessageType", "MercurySourceType", "MultiChatController", "Style", "copyProperties", "MercuryMessages", "MercuryThreadActions", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = b('MercuryMessages').get(), s = b('MercuryThreadActions').get(), t = b('MercuryThreads').get();
    function u(y, z, aa) {
        this._threadID = y;
        this._rootElement = z;
        this._sheetView = aa;
        this._typeahead = null;
    }
    q(u.prototype, h, {
        render: function() {
            t.getThreadMeta(this._threadID, function(y) {
                var z = y.is_canonical_user ? v: w, aa = t.isNewEmptyLocalThread(this._threadID);
                this._typeahead = i.render(this, this._sheetView, this._rootElement, y, z.bind(null, y), aa);
                this._typeahead.subscribe('tokens-changed', function() {
                    if (k.GroupThreadNewMessageGK) {
                        if (aa)
                            x(this, this._typeahead, this._threadID);
                    } else 
                        this.inform('chat/tokens-changed', {
                            token_count: this._typeahead.getTokens().length
                        });
                }.bind(this));
                this._typeahead.subscribe('resize', function() {
                    this._sheetView.resize();
                }.bind(this));
            }.bind(this));
        },
        getParticipants: function() {
            if (!this._typeahead)
                return null;
            return this._typeahead.getSelectedParticipantIDs();
        },
        isPermanent: function() {
            return true;
        },
        isSheetWithInput: function() {
            return true;
        },
        getType: function() {
            return 'add_friends_type';
        },
        open: function() {
            this._sheetView.open(this);
        },
        close: function() {
            this._sheetView.close(this);
        },
        getHeight: function() {
            return p.get(this._rootElement, 'height');
        }
    });
    function v(y, z) {
        var aa = y.participants;
        o.createThreadForTokens(aa.concat(z));
    }
    function w(y, z) {
        var aa = y.thread_id;
        if (t.isEmptyLocalThread(aa)) {
            s.addParticipants(aa, z);
        } else 
            r.sendMessage(r.constructLogMessageObject(n.CHAT_WEB, aa, m.SUBSCRIBE, {
                added_participants: z
            }));
        j.openThread(aa, 'ChatAddFriendsTabSheet');
    }
    function x(y, z, aa) {
        var ba = z.getTypeahead().getData(), ca = z.getTokens();
        ba.setShowThreads(ca.length === 0);
        var da = ca.length == 1 && ca[0].getInfo().render_type === l.MercuryTypeaheadConstants.THREAD_TYPE;
        if (da) {
            var ea = ca[0].getInfo().mercury_thread;
            if (ea)
                j.openThread(ea.thread_fbid, 'openGroupChat', '');
            g.inform('chat/close-tab', aa, 'open_group_chat');
        } else 
            y.inform('chat/tokens-changed', {
                token_count: z.getTokens().length
            });
    }
    e.exports = u;
}, null);
__d("ChatNameConversationTabSheetRawRenderer", ["DOM", "Event", "Input", "Keys", "ChatTabTemplates", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = {
        render: function(n, o, p, q, r, s) {
            var t = k[':fb:mercury:chat:tab-sheet:name-conversation'].build(), u = t.getNode('nameInput'), v = t.getNode('doneButton'), w = "Done", x = "Hide", y = q.name;
            if (y) {
                i.setValue(u, y);
            } else 
                g.setContent(v, x);
            var z = function() {
                var aa = i.getValue(u);
                if (aa)
                    r(aa);
                s();
                o.close(n);
            };
            h.listen(u, 'input', function() {
                g.setContent(v, i.getValue(u).length === 0 ? x : w);
            });
            h.listen(v, 'click', z);
            h.listen(u, 'keyup', function(aa) {
                if (aa.keyCode === j.RETURN) {
                    z();
                    return false;
                }
            });
            g.setContent(p, t.getRoot());
            !n.isAutomatic() && u.focus();
        }
    };
    e.exports = m;
}, null);
__d("ChatNameConversationTabSheet", ["AsyncRequest", "ChatNameConversationTabSheetRawRenderer", "MercuryAPIArgsSource", "MercuryLogMessageType", "MercurySourceType", "MercuryMessages", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = b('MercuryMessages').get(), m = b('MercuryServerRequests').get(), n = b('MercuryThreads').get(), o = '/ajax/chat/multichat/name_conversation/dismiss.php', p = {};
    function q(r, s, t) {
        "use strict";
        this.$ChatNameConversationTabSheet0 = r;
        this.$ChatNameConversationTabSheet1 = s;
        this.$ChatNameConversationTabSheet2 = t;
        this.$ChatNameConversationTabSheet3 = false;
    }
    q.prototype.render = function() {
        "use strict";
        n.getThreadMeta(this.$ChatNameConversationTabSheet0, function(r) {
            h.render(this, this.$ChatNameConversationTabSheet2, this.$ChatNameConversationTabSheet1, r, this.$ChatNameConversationTabSheet4.bind(null, r), this.$ChatNameConversationTabSheet5.bind(this, r));
            this.$ChatNameConversationTabSheet2.resize();
        }.bind(this));
    };
    q.prototype.isPermanent = function() {
        "use strict";
        return true;
    };
    q.prototype.isSheetWithInput = function() {
        "use strict";
        return true;
    };
    q.prototype.getType = function() {
        "use strict";
        return 'name_conversation_type';
    };
    q.prototype.open = function(r) {
        "use strict";
        this.$ChatNameConversationTabSheet3 = r;
        if (!(this.$ChatNameConversationTabSheet3 && this.$ChatNameConversationTabSheet6()))
            this.$ChatNameConversationTabSheet2.open(this);
    };
    q.prototype.close = function() {
        "use strict";
        this.$ChatNameConversationTabSheet2.close(this);
    };
    q.prototype.isAutomatic = function() {
        "use strict";
        return this.$ChatNameConversationTabSheet3;
    };
    q.prototype.$ChatNameConversationTabSheet6 = function() {
        "use strict";
        return !!p[this.$ChatNameConversationTabSheet0];
    };
    q.prototype.$ChatNameConversationTabSheet7 = function() {
        "use strict";
        p[this.$ChatNameConversationTabSheet0] = true;
    };
    q.prototype.$ChatNameConversationTabSheet5 = function(r) {
        "use strict";
        if (!r.name_conversation_sheet_dismissed ||!this.$ChatNameConversationTabSheet6()) {
            this.$ChatNameConversationTabSheet7();
            m.getServerThreadID(r.thread_id, function(s) {
                new g(o).setData({
                    thread_id: s
                }).send();
            });
        }
    };
    q.prototype.$ChatNameConversationTabSheet4 = function(r, s) {
        "use strict";
        var t = r.name;
        if ((s || t) && (s != t))
            l.sendMessage(l.constructLogMessageObject(k.CHAT_WEB, r.thread_id, j.THREAD_NAME, {
                name: s
            }), null, i.CHAT);
    };
    e.exports = q;
}, null);
__d("ChatNewMessagesTabSheet", ["Event", "ArbiterMixin", "DOM", "ChatTabTemplates", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m, n, o) {
        this._threadID = m;
        this._rootElement = n;
        this._sheetView = o;
    }
    k(l.prototype, h, {
        render: function() {
            var m = j[':fb:mercury:chat:tab-sheet:clickable-message-icon-sheet'].build();
            i.setContent(m.getNode('text'), i.tx._("Scroll down to see new messages."));
            i.setContent(this._rootElement, m.getRoot());
            g.listen(m.getRoot(), 'click', function() {
                this.inform('clicked', this._threadID);
            }.bind(this));
        },
        isPermanent: function() {
            return true;
        },
        isSheetWithInput: function() {
            return true;
        },
        getType: function() {
            return 'new_messages_type';
        },
        open: function() {
            this._sheetView.open(this);
        },
        close: function() {
            this._sheetView.close(this);
        }
    });
    e.exports = l;
}, null);
__d("ChatNoRecipientsTabSheet", ["DOM", "MercuryViewer", "ChatTabTemplates", "copyProperties", "fbt", "MercuryThreads", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = b('MercuryThreads').get(), m = b('MercuryThreadInformer').get();
    function n(o, p, q) {
        this._threadID = o;
        this._rootElement = p;
        this._sheetView = q;
        m.subscribe('threads-updated', this._handleThreadsUpdated.bind(this));
    }
    j(n.prototype, {
        render: function() {
            var o = i[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();
            g.setContent(o.getNode('text'), "Everyone has left the conversation.");
            g.setContent(this._rootElement, o.getRoot());
        },
        isPermanent: function() {
            return true;
        },
        getType: function() {
            return 'no_recipients_type';
        },
        _handleThreadsUpdated: function() {
            l.getThreadMeta(this._threadID, function(o) {
                var p = h.getID(), q = o.participants.filter(function(r) {
                    return r != p;
                });
                if (q.length < 1&&!l.isNewEmptyLocalThread(this._threadID)) {
                    this._sheetView.open(this);
                } else 
                    this._sheetView.close(this);
            }.bind(this));
        }
    });
    e.exports = n;
}, null);
__d("ChatOfflineTabSheet", ["ChatPrivacyActionController", "ChatVisibility", "CSS", "DOM", "Event", "JSLogger", "MercuryIDs", "MercuryParticipants", "ChatTabTemplates", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    function r(s, t, u) {
        this._rootElement = t;
        this._sheetView = u;
        this._logger = l.create('blackbird');
        this._canonicalUser = m.getUserIDFromThreadID(s);
        if (this._canonicalUser)
            this._privacyActionController = new g(this._canonicalUser, this._handlePrivacyChange.bind(this));
    }
    p(r.prototype, {
        render: function() {
            if (!this._canonicalUser) {
                this._logger.error('offline_sheet_open_with_non_friend');
                return;
            }
            var s = o[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build(), t = 'fbid:' + this._canonicalUser;
            n.get(t, function(u) {
                var v = 'fbChatGoOnlineLink', w = j.tx._("turn on chat"), x = j.create('a', {
                    href: '#',
                    className: v
                }, w), y = j.tx._("To chat with {name} and other friends, {link}.", {
                    name: u.short_name,
                    link: x
                });
                j.setContent(s.getNode('text'), y);
                i.addClass(s.getRoot(), "_1sk1");
                j.setContent(this._rootElement, s.getRoot());
                k.listen(this._rootElement, 'click', function(event) {
                    if (i.hasClass(event.getTarget(), v)) {
                        if (h.isOnline())
                            this._logger.error('tab_sheet_already_online');
                        this._privacyActionController.togglePrivacy();
                        this._logger.log('tab_sheet_go_online', {
                            tab_id: this._canonicalUser
                        });
                        return false;
                    }
                }.bind(this));
                this._sheetView.resize();
            }.bind(this));
        },
        _handlePrivacyChange: function(s) {
            if (!this._canonicalUser)
                this._logger.error('user_blocked_sheet_privacy_changed_non_friend');
            switch (s) {
            case g.OFFLINE:
                this._sheetView.open(this);
                break;
            case g.NORMAL:
            case g.BLOCKED:
                this._sheetView.close(this);
                break;
            }
        },
        isPermanent: function() {
            return true;
        },
        getType: function() {
            return 'offline_type';
        },
        destroy: function() {
            this._privacyActionController && this._privacyActionController.destroy();
        }
    });
    e.exports = r;
}, null);
__d("MercuryReadOnlyReason", ["React", "fbt"], function(a, b, c, d, e, f, g, h) {
    var i = {
        getReason: function(j) {
            if (j.has_email_participant) {
                return (h._("Sorry, this conversation isn't active anymore because messages can no longer be sent to email addresses. Messages sent to facebook.com email addresses will now be forwarded to primary email addresses, so you can continue this conversation over email. {Learn more}.", [h.param("Learn more", g.createElement("a", {
                    href: "/help/224049364288051"
                }, "Learn more"))]));
            } else 
                return ("You cannot reply to this conversation.");
        }
    };
    e.exports = i;
}, null);
__d("ChatReadOnlyTabSheet", ["React", "MercuryReadOnlyReason", "cx", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i) {
    var j = b('MercuryThreads').get();
    function k(l, m, n) {
        "use strict";
        this.$ChatReadOnlyTabSheet0 = l;
        this.$ChatReadOnlyTabSheet1 = m;
        this.$ChatReadOnlyTabSheet2 = n;
    }
    k.prototype.render = function() {
        "use strict";
        var l = h.getReason(j.getThreadMetaNow(this.$ChatReadOnlyTabSheet0));
        g.render(g.createElement("div", {
            className: "_87-"
        }, l), this.$ChatReadOnlyTabSheet1);
    };
    k.prototype.isPermanent = function() {
        "use strict";
        return false;
    };
    k.prototype.getType = function() {
        "use strict";
        return 'chat-thread-is-read-only';
    };
    k.prototype.open = function() {
        "use strict";
        this.$ChatReadOnlyTabSheet2.open(this);
    };
    k.prototype.close = function() {
        "use strict";
        this.$ChatReadOnlyTabSheet2.open(this);
    };
    e.exports = k;
}, null);
__d("ChatThreadIsMutedTabSheet", ["Event", "ArbiterMixin", "DOM", "ChatTabTemplates", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m, n, o) {
        this._threadID = m;
        this._rootElement = n;
        this._sheetView = o;
    }
    k(l.prototype, h, {
        render: function() {
            var m = j[':fb:mercury:chat:tab-sheet:message-mute-sheet'].build();
            i.setContent(m.getNode('text'), i.tx._("This conversation is muted. Chat tabs will not pop up for it and push notifications are off."));
            i.setContent(this._rootElement, m.getRoot());
            g.listen(m.getNode('unmuteButton'), 'click', function() {
                this.inform('clicked', this._threadID);
            }.bind(this));
        },
        isPermanent: function() {
            return false;
        },
        getType: function() {
            return 'chat-thread-is-muted';
        },
        open: function() {
            this._sheetView.open(this);
        },
        close: function() {
            this._sheetView.close(this);
        }
    });
    e.exports = l;
}, null);
__d("ChatEmployeeAwaySheet", ["ArbiterMixin", "DOM", "mixin", "ChatTabTemplates"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i(g);
    for (var l in k)
        if (k.hasOwnProperty(l))
            n[l] = k[l];
    var m = k === null ? null: k.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = k;
    function n(o, p, q) {
        "use strict";
        this.$ChatEmployeeAwaySheet0 = o;
        this.$ChatEmployeeAwaySheet1 = p;
        this.$ChatEmployeeAwaySheet2 = q;
    }
    n.prototype.render = function() {
        "use strict";
        var o = j[':fb:mercury:employee-away-sheet'].build();
        h.setContent(this.$ChatEmployeeAwaySheet1, o.getRoot());
    };
    n.prototype.isPermanent = function() {
        "use strict";
        return true;
    };
    n.prototype.getType = function() {
        "use strict";
        return 'employee-away';
    };
    n.prototype.open = function() {
        "use strict";
        this.$ChatEmployeeAwaySheet2.open(this);
    };
    n.prototype.close = function() {
        "use strict";
        this.$ChatEmployeeAwaySheet2.close(this);
    };
    e.exports = n;
}, null);
__d("ChatUserBlockedTabSheet", ["CSS", "ChatPrivacyActionController", "DOM", "Event", "GenderConst", "JSLogger", "MercuryIDs", "MercuryParticipants", "ChatTabTemplates", "copyProperties", "cx", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s(t, u, v) {
        this._rootElement = u;
        this._sheetView = v;
        this._logger = l.create('blackbird');
        this._canonicalUser = m.getUserIDFromThreadID(t);
        if (this._canonicalUser)
            this._privacyActionController = new h(this._canonicalUser, this._handlePrivacyChange.bind(this));
    }
    p(s.prototype, {
        render: function() {
            if (!this._canonicalUser) {
                this._logger.error('user_blocked_sheet_open_with_non_friend');
                return;
            }
            var t = o[':fb:mercury:chat:tab-sheet:user-blocked'].build(), u = 'fbid:' + this._canonicalUser;
            n.get(u, function(v) {
                var w = null;
                switch (v.gender) {
                case k.FEMALE_SINGULAR:
                case k.FEMALE_SINGULAR_GUESS:
                    w = r._("You turned off chat for {name} but you can still send her a message. ", {
                        name: v.short_name
                    });
                    break;
                case k.MALE_SINGULAR:
                case k.MALE_SINGULAR_GUESS:
                    w = r._("You turned off chat for {name} but you can still send him a message. ", {
                        name: v.short_name
                    });
                    break;
                default:
                    w = r._("You turned off chat for {name} but you can still send them a message. ", {
                        name: v.short_name
                    });
                }
                i.setContent(t.getNode('text'), w);
                var x = r._("Turn on chat for {name}?", {
                    name: v.short_name
                });
                i.setContent(t.getNode('actionLink'), x);
                g.addClass(t.getRoot(), "_1sk0");
                i.setContent(this._rootElement, t.getRoot());
                j.listen(t.getNode('actionLink'), 'click', this._privacyActionController.togglePrivacy.bind(this._privacyActionController));
                this._sheetView.resize();
            }.bind(this));
        },
        _handlePrivacyChange: function(t) {
            if (!this._canonicalUser)
                this._logger.error('user_blocked_sheet_privacy_changed_non_friend');
            if (t == h.BLOCKED) {
                var u = 'fbid:' + this._canonicalUser;
                n.get(u, function(v) {
                    if (v.is_friend) {
                        this._sheetView.open(this);
                    } else 
                        this._sheetView.close(this);
                }.bind(this));
                return;
            }
            this._sheetView.close(this);
        },
        isPermanent: function() {
            return true;
        },
        getType: function() {
            return 'user_blocked_type';
        },
        destroy: function() {
            this._privacyActionController && this._privacyActionController.destroy();
        }
    });
    e.exports = s;
}, null);
__d("MercurySheetPolicy", [], function(a, b, c, d, e, f) {
    var g = {
        canReplaceOpenSheet: function(h, i) {
            if (h.isSheetWithInput && h.isSheetWithInput())
                return i.getType() != h.getType() && i.isSheetWithInput && i.isSheetWithInput();
            if (h.getType() == i.getType())
                return false;
            if (h.isPermanent()&&!i.isPermanent())
                return false;
            return true;
        }
    };
    e.exports = g;
}, null);
__d("MercurySheetView", ["Animation", "ArbiterMixin", "MercurySheetPolicy", "CSS", "DOM", "Style", "MercurySheetTemplates", "Vector", "copyProperties", "cx", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = 5000, s = function(t, u, v) {
        this._threadID = t;
        this._rootElement = u;
        this._tabMainElement = v;
        this._openSheet = null;
    };
    o(s.prototype, h, {
        destroy: function() {
            k.empty(this._rootElement);
        },
        _openCommon: function(t, u) {
            if (this._openSheet&&!i.canReplaceOpenSheet(this._openSheet, t)) {
                if (t.couldNotReplace)
                    t.couldNotReplace();
                return;
            }
            this.clear(function() {
                this._openSheet = t;
                var v = m[':fb:mercury:tab-sheet:loading'].build().getRoot();
                k.setContent(this._rootElement, v);
                j.show(v);
                j.show(this._rootElement);
                t.render();
                if (u) {
                    j.addClass(this._tabMainElement, 'sheetSlide');
                    j.addClass(this._tabMainElement, "_1sk4");
                    var w = n.getElementDimensions(this._rootElement).y;
                    l.set(this._rootElement, 'bottom', w + 'px');
                    this.resize();
                    this._animation = new g(this._rootElement).to('bottom', 0).duration(150).ease(g.ease.both).ondone(function() {
                        j.removeClass(this._tabMainElement, 'sheetSlide');
                        j.removeClass(this._tabMainElement, "_1sk4");
                        this.resize();
                    }.bind(this)).go();
                } else 
                    this.resize();
                if (!t.isPermanent()) {
                    var x = r;
                    if (t.getCloseTimeout)
                        x = t.getCloseTimeout();
                    var y = this.getAutoCloseCallback(t);
                    this._sheetCloseHandler = q(this.close.bind(this, t, y), x);
                    if (t.timeoutCanBeReset)
                        t.setResetTimeoutCallback(this.resetTimeout.bind(this));
                }
            }.bind(this));
        },
        getAutoCloseCallback: function(t) {
            if (!t.autoCloseCallback)
                return null;
            return t.autoCloseCallback.bind(t);
        },
        resetTimeout: function(t, u) {
            clearTimeout(this._sheetCloseHandler);
            var v = this.getAutoCloseCallback(t);
            this._sheetCloseHandler = q(this.close.bind(this, t, v), u);
        },
        set: function(t) {
            return this._openCommon(t, false);
        },
        open: function(t) {
            return this._openCommon(t, true);
        },
        close: function(t, u) {
            if (this._openSheet != t)
                return;
            if (!this._openSheet) {
                u && u();
                return;
            }
            if (this._animation)
                this._animation.stop();
            if (this._sheetCloseHandler) {
                clearTimeout(this._sheetCloseHandler);
                this._sheetCloseHandler = null;
            }
            j.addClass(this._tabMainElement, 'sheetSlide');
            j.addClass(this._tabMainElement, "_1sk4");
            var v = n.getElementDimensions(this._rootElement).y;
            this.resize();
            this._animation = new g(this._rootElement).to('bottom', v + 'px').duration(100).ease(g.ease.begin).ondone(function() {
                k.empty(this._rootElement);
                j.hide(this._rootElement);
                j.removeClass(this._tabMainElement, 'sheetSlide');
                j.removeClass(this._tabMainElement, "_1sk4");
                this._openSheet = null;
                this.resize();
                u && u();
            }.bind(this)).go();
        },
        clear: function(t) {
            this.close(this._openSheet, t);
        },
        resize: function() {
            this.inform('resize');
        }
    });
    e.exports = s;
}, null);
__d("ChatTabSheetController", ["ChatAddFriendsTabSheet", "ChatNameConversationTabSheet", "ChatNewMessagesTabSheet", "ChatNoRecipientsTabSheet", "ChatOfflineTabSheet", "ChatUploadWarningTabSheet", "ChatReadOnlyTabSheet", "ChatThreadIsMutedTabSheet", "ChatEmployeeAwaySheet", "ChatUserBlockedTabSheet", "MercuryIDs", "MercurySheetView", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = function(u, v, w) {
        this._sheetView = new r(u, v, w);
        this._addFriendsTabSheet = new g(u, v, this._sheetView);
        this._nameConversationTabSheet = new h(u, v, this._sheetView);
        this._userBlockedTabSheet = new p(u, v, this._sheetView);
        this._offlineTabSheet = new k(u, v, this._sheetView);
        this._newMessagesTabSheet = new i(u, v, this._sheetView);
        this._uploadWarningTabSheet = new l(u, v, this._sheetView);
        this._threadIsMutedTabSheet = new n(u, v, this._sheetView);
        this._employeeAwaySheet = new o(u, v, this._sheetView);
        this._readOnlyTabSheet = new m(u, v, this._sheetView);
        if (!q.getUserIDFromThreadID(u))
            this._noRecipientsTabSheet = new j(u, v, this._sheetView);
    };
    s(t.prototype, {
        openAddFriendsSheet: function() {
            this._addFriendsTabSheet.open();
        },
        getAddFriendsTabSheet: function() {
            return this._addFriendsTabSheet;
        },
        getAddFriendsParticipants: function() {
            var u = this._addFriendsTabSheet.getParticipants();
            this._addFriendsTabSheet.close();
            return u;
        },
        openNameConversationSheet: function(u) {
            this._nameConversationTabSheet.open(u);
        },
        openReadOnlySheet: function() {
            this._readOnlyTabSheet.open();
        },
        openNewMessagesSheet: function() {
            this._newMessagesTabSheet.open();
        },
        openUploadWarningTabSheet: function() {
            this._uploadWarningTabSheet.open();
        },
        openThreadIsMutedTabSheet: function() {
            this._threadIsMutedTabSheet.open();
        },
        openEmployeeAwaySheet: function() {
            this._employeeAwaySheet.open();
        },
        closeAutomaticNameConversationSheet: function() {
            if (this._nameConversationTabSheet.isAutomatic())
                this._nameConversationTabSheet.close();
        },
        closeThreadIsMutedTabSheet: function() {
            this._threadIsMutedTabSheet.close();
        },
        closeNewMessagesSheet: function() {
            this._newMessagesTabSheet.close();
        },
        closeUploadWarningTabSheet: function() {
            this._uploadWarningTabSheet.close();
        },
        onClickNewMessagesSheet: function(u) {
            this._newMessageClickSub = this._newMessagesTabSheet.subscribe('clicked', u);
        },
        onClickThreadIsMutedSheet: function(u) {
            this._threadIsMutedClickSub = this._threadIsMutedTabSheet.subscribe('clicked', u);
        },
        onResize: function(u) {
            this._sheetView.subscribe('resize', u);
        },
        onTokensChanged: function(u) {
            this._addFriendsTabSheet.subscribe('chat/tokens-changed', u);
        },
        destroy: function() {
            this._sheetView && this._sheetView.destroy();
            this._offlineTabSheet && this._offlineTabSheet.destroy();
            this._userBlockedTabSheet && this._userBlockedTabSheet.destroy();
            this._newMessageClickSub && this._newMessageClickSub.unsubscribe();
            this._threadIsMutedClickSub && this._threadIsMutedClickSub.unsubscribe();
        }
    });
    e.exports = t;
}, null);
__d("ChatTitleLink.react", ["Link.react", "MercuryThreadTitle.react", "React", "TrackingNodes", "cx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = i.createClass({
        displayName: "ChatTitleLink",
        propTypes: {
            href: i.PropTypes.string,
            isNewThread: i.PropTypes.bool,
            thread: i.PropTypes.object,
            viewer: i.PropTypes.string
        },
        getDefaultProps: function() {
            return {
                href: null
            };
        },
        getTitle: function() {
            return this.refs.threadTitle.getTitle();
        },
        render: function() {
            if (!this.props.thread)
                return null;
            return (i.createElement(g, {
                "aria-level": "3",
                className: (("titlebarText") + (this.props.href === null ? ' ' + "noLink" : '')),
                "data-ft": j.getTrackingInfo(j.types.TITLE),
                "data-hover": "tooltip",
                href: this.props.href
            }, i.createElement(h, {
                ref: "threadTitle",
                isNewThread: this.props.isNewThread,
                thread: this.props.thread,
                useAndSeparator: true,
                useShortName: !this.props.thread.is_canonical,
                viewer: this.props.viewer
            })));
        }
    });
    e.exports = l;
}, null);
__d("ChatVideoCallButton.react", ["Link.react", "ReactComponentWithPureRenderMixin", "React", "TrackingNodes", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = i.createClass({
        displayName: "ChatVideoCallButton",
        mixins: [h],
        propTypes: {
            onClick: i.PropTypes.func,
            onKeyUp: i.PropTypes.func,
            shown: i.PropTypes.bool,
            tooltipLabel: i.PropTypes.string
        },
        getDefaultProps: function() {
            return {
                tooltipLabel: ("Start a video call")
            };
        },
        render: function() {
            var n = j.getTrackingInfo(j.types.VIDEOCHAT), o = JSON.stringify({
                videochat: 'call_clicked_bhat_tab'
            });
            return (i.createElement(g, {
                "aria-label": this.props.tooltipLabel,
                className: (("videoicon") + (' ' + "button") + (!this.props.shown ? ' ' + "hidden_elem" : '')),
                "data-ft": n,
                "data-gt": o,
                "data-hover": "tooltip",
                "data-tooltip-position": "above",
                onClick: this.props.onClick,
                onKeyUp: this.props.onKeyUp
            }));
        }
    });
    e.exports = m;
}, null);
__d("EmoticonUtils", ["EmoticonsList", "Parent", "endsWith", "startsWith"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = 'emoticon_', l = g.symbols, m = {
        getEmoteFromTarget: function(n) {
            var o = h.byClass(n, 'emoticon');
            if (!o)
                return null;
            var p = null;
            o.className.split(' ').forEach(function(q) {
                if (j(q, k))
                    p = q.substring(k.length);
            });
            return l[p] || null;
        },
        insertEmoticon: function(n, o, p) {
            var q = o.substring(0, p.start), r = o.substring(p.end);
            if (p.start > 0&&!i(q, ' '))
                n = ' ' + n;
            if (!j(r, ' '))
                n += ' ';
            var s = q + n + r;
            p.start += n.length;
            p.end = p.start;
            return {
                result: s,
                start: p.start,
                end: p.end
            };
        }
    };
    e.exports = m;
}, null);
__d("SelectionPosition", ["Event", "InputSelection", "SubscriptionsHandler", "merge"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this.$SelectionPosition0 = l;
        this.$SelectionPosition1 = {
            start: 0,
            end: 0
        };
        this.$SelectionPosition2 = new i();
        this.$SelectionPosition3 = false;
        this.updatePos();
        this.enable();
    }
    k.prototype.getPos = function() {
        "use strict";
        return j(this.$SelectionPosition1);
    };
    k.prototype.setPos = function(l, m) {
        "use strict";
        this.$SelectionPosition1 = {
            start: l,
            end: m
        };
        this.restore();
    };
    k.prototype.updatePos = function() {
        "use strict";
        this.$SelectionPosition1 = h.get(this.$SelectionPosition0);
    };
    k.prototype.restore = function() {
        "use strict";
        h.set(this.$SelectionPosition0, this.$SelectionPosition1.start, this.$SelectionPosition1.end);
    };
    k.prototype.enable = function() {
        "use strict";
        if (!this.$SelectionPosition3) {
            this.$SelectionPosition2.addSubscriptions(g.listen(this.$SelectionPosition0, 'keyup', this.updatePos.bind(this)), g.listen(this.$SelectionPosition0, 'click', this.updatePos.bind(this)));
            this.$SelectionPosition3 = true;
        }
    };
    k.prototype.disable = function() {
        "use strict";
        if (this.$SelectionPosition3) {
            this.$SelectionPosition2.release();
            this.$SelectionPosition3 = false;
        }
    };
    e.exports = k;
}, null);
__d("StickerSearchNUX.react", ["React", "ReactLayeredComponentMixin", "StickerServerRequests", "XUIAmbientNUX.react", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.createClass({
        displayName: "StickerSearchNUX",
        mixins: [h],
        getInitialState: function() {
            return {
                nuxShown: true
            };
        },
        componentDidMount: function() {
            i.markSeenSearchTooltipNUX();
        },
        hideNUX: function() {
            this.setState({
                nuxShown: false
            });
        },
        onCloseButtonClicked: function() {
            this.hideNUX();
            this.props.showIndicatorFunc();
        },
        renderLayers: function() {
            return {
                stickerSearchNUX: g.createElement(j, {
                    ref: "NUX",
                    contextRef: "container",
                    shown: this.state.nuxShown,
                    position: "above",
                    width: "auto",
                    onCloseButtonClick: this.onCloseButtonClicked
                }, "Now you can search for stickers!")
            };
        },
        render: function() {
            return (g.createElement("span", {
                ref: "container"
            }));
        }
    });
    e.exports = l;
}, null);
__d("XStickerReplyNUXControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/stickers\/tooltip\/", {});
}, null);
__d("MercurySeenByAll", ["CSS", "DataStore", "MercuryDelayedRoger", "DOM", "MercuryIDs", "MercuryViewer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = b('MercuryThreads').get(), n = {}, o = {
        updateOnSeenChange: function(q, r, s) {
            n[q.tagName] = true;
            h.set(q, 'thread-id', r.thread_id);
            g.addClass(q, 'seenByListener');
            p(q, r, s);
        }
    };
    function p(q, r, s) {
        var t = null;
        if (s) {
            t = k.getParticipantIDFromUserID(s);
        } else 
            t = l.getID();
        var u = r.participants.filter(function(w) {
            return w !== t;
        }), v = r.participants.length > 0 && r.participants[0] === t;
        g.conditionClass(q, 'repliedLast', v);
        g.conditionClass(q, 'seenByAll', v && i.getSeenBy(r.thread_id).length === u.length);
    }
    i.subscribe('state-changed', function(q, r) {
        for (var s in n) {
            var t = j.scry(document.body, s + '.seenByListener');
            for (var u = 0; u < t.length; u++) {
                var v = t[u], w = h.get(v, 'thread-id');
                if (r[w])
                    m.getThreadMeta(w, function(x) {
                        p(v, x);
                    });
            }
        }
    });
    e.exports = o;
}, null);
__d("MercuryThreadMetadataRenderer", ["CSS", "DOM", "Emoji", "HTML", "JSLogger", "MercuryAttachmentType", "MercuryIDs", "MercuryMessageSourceTags", "MercurySingletonMixin", "MercuryThreadImage.react", "MercuryThreadMetadataRawRenderer", "MercuryThreadTitle.react", "MercuryParticipants", "React", "MercurySeenByAll", "MercuryServerRequests", "Style", "MercuryThreads", "Tooltip", "URI", "WebMessengerThreadPermalinks", "arrayContains", "createArrayFrom", "copyProperties", "cx", "formatDate", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga) {
    var ha = k.create('wm_timestamp');
    function ia(na) {
        this._fbid = na;
        this._serverRequests = v.getForFBID(na);
        this._threads = x.getForFBID(na);
    }
    da(ia, o);
    da(ia.prototype, {
        renderTimestamp: function(na, oa, pa, qa) {
            if (qa) {
                if (!oa) {
                    ha.warn('no_title');
                    oa = (new Date(qa)).toLocaleDateString();
                }
                na.setAttribute('title', oa);
                na.setAttribute('data-utime', qa / 1000);
                if (!pa) {
                    ha.warn('no_display');
                    pa = fa(new Date(qa), 'g:ia');
                }
                h.setContent(na, pa);
                g.show(na);
            }
        },
        renderMessageSourceTags: function(na, oa, pa, qa) {
            var ra = '', sa = '', ta = '';
            if (ba(pa, n.MESSENGER)) {
                ra = "Sent from Messenger";
                sa = new z('/mobile/messenger');
                ta = "_9g";
            } else if (ba(pa, n.MOBILE)) {
                ra = "Sent from Mobile";
                sa = new z('/mobile/');
                ta = "_9j";
            } else if (ba(pa, n.CHAT)) {
                ra = "Sent from chat";
                ta = "_9h";
            } else if (ba(pa, n.EMAIL)) {
                if (qa) {
                    ra = ga._("Sent from {email}", {
                        email: qa
                    });
                } else 
                    ra = "Sent from email";
                ta = "_9i";
            }
            if (ta) {
                y.set(na, ra);
                g.addClass(oa, ta);
                if (sa) {
                    na.setAttribute('href', sa);
                } else 
                    na.removeAttribute('href');
            } else 
                g.hide(na);
        },
        renderMessageLocation: function(na, oa, pa) {
            var qa = z('/ajax/messaging/hovercard/map.php').setQueryData(pa);
            na.setAttribute('data-hovercard', qa);
            g.removeClass(na, "_b9");
            g.show(oa);
        },
        renderSpoofWarning: function(na, oa, pa) {
            if (oa) {
                g.addClass(na, "_sa");
                y.set(na, ga._("Unable to confirm {name_or_email} as the sender.", {
                    name_or_email: pa.name
                }));
            }
        },
        renderChatSpoofWarning: function(na, oa, pa) {
            if (oa)
                h.appendContent(na, ga._("Unable to confirm {name_or_email} as the sender.", {
                    name_or_email: pa.name
                }));
        },
        renderCoreThreadlist: function(na, oa, pa, qa, ra) {
            qa = qa || {};
            this.renderThreadImage(na, oa.getNode('image'));
            var sa = oa.getNode('accessibleName'), ta = [oa.getNode('name')];
            if (sa)
                ta.push(sa);
            ma(this, na, ta, qa);
            if (na.folder && ra)
                la(oa.getNode('folderBadge'), na.folder);
            var ua = oa.getNode('timestamp');
            this.renderTimestamp(ua, na.timestamp_absolute, na.timestamp_relative, na.timestamp);
            this.renderSnippet(na, oa.getNode('snippet'));
            ka(oa, na);
            pa(oa, na);
        },
        renderAndSeparatedParticipantList: function(na, oa, pa) {
            pa = pa || {};
            pa.last_separator_uses_and = true;
            this._threads.getThreadMeta(na, function(qa) {
                ma(this, qa, oa, pa);
            }.bind(this));
        },
        renderSnippet: function(na, oa) {
            var pa = false, qa = h.create('span');
            g.addClass(qa, 'MercuryRepliedIndicator');
            h.appendContent(oa, qa);
            u.updateOnSeenChange(qa, na, this._fbid);
            var ra = na.snippet;
            if (ra) {
                if (na.snippet_has_attachment)
                    h.appendContent(oa, h.create('span', {
                        className: 'MercuryAttachmentIndicator'
                    }));
                if (na.is_forwarded_snippet)
                    h.appendContent(oa, h.create('strong', {
                        className: "_55q_"
                    }, "Forwarded Message:"));
                if (ra.substr(0, 4) == '?OTR') {
                    ra = "[encrypted message]";
                } else 
                    ra = ra.replace(/\r\n|[\r\n]/g, " ");
                ra = j(i.htmlEmojiAndEmote(ra));
            } else {
                if (na.is_forwarded_snippet)
                    h.appendContent(oa, h.create('strong', {
                        className: "_55q_"
                    }, "Forwarded Message"));
                if (na.snippet_has_attachment && na.snippet_attachments && na.snippet_attachments.length) {
                    pa = true;
                    ra = h.create('span');
                    d(['MercuryAttachmentSnippet.react'], function(ua) {
                        t.render(t.createElement(ua, {
                            thread: na,
                            viewer: this._fbid
                        }), ra);
                    }.bind(this));
                }
            }
            var sa = na.participants.length;
            if (na.is_subscribed)
                sa--;
            var ta = na.snippet_sender;
            if (!pa && ta && m.getParticipantIDFromUserID(this._fbid) != ta && sa > 1) {
                s.get(ta, function(ua) {
                    if (ua.short_name) {
                        h.appendContent(oa, ga._("{name}: {conversation_snippet}", {
                            name: ua.short_name,
                            conversation_snippet: ra
                        }));
                    } else 
                        h.appendContent(oa, ra);
                });
            } else 
                h.appendContent(oa, ra);
        },
        renderWebMessengerLink: function(na, oa, pa, qa) {
            aa.getThreadURI(na, function(ra) {
                oa.setAttribute('href', ra);
                pa && pa();
            }, qa);
        },
        renderThreadImage: function(na, oa) {
            t.render(t.createElement(p, {
                thread: na,
                viewer: this._fbid
            }), oa);
        },
        renderParticipantList: function(na, oa, pa, qa) {
            return q.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(na), oa, pa, qa);
        },
        renderThreadNameAndParticipantList: function(na, oa, pa, qa) {
            var ra = q.renderRawParticipantList(this._serverRequests.getServerThreadIDNow(na), oa, pa, qa), sa = this._threads.getThreadMetaNow(na);
            if (!sa.name)
                return ra;
            return ga._("{conversation_name} [with {participant_list}]", {
                conversation_name: sa.name,
                participant_list: ra
            });
        },
        renderParticipantCount: function(na, oa) {
            return q.renderRawParticipantCount(oa);
        }
    });
    function ja(na) {
        if (!na.snippet_attachments)
            return [];
        return na.snippet_attachments.filter(function(oa) {
            return oa.attach_type === l.PHOTO;
        });
    }
    function ka(na, oa) {
        var pa = ja(oa);
        if (pa.length === 0)
            return;
        var qa = pa[0].thumbnail_url;
        if (!qa)
            return;
        var ra = (pa.length == 1) ? 'snippet-thumbnail-single': 'snippet-thumbnail-multiple', sa = na.getNode(ra);
        if (!sa)
            return;
        var ta = h.find(sa, 'i');
        w.set(ta, 'background-image', 'url(' + qa + ')');
        g.show(sa);
    }
    function la(na, oa) {
        ca(na).forEach(function(pa) {
            h.setContent(pa, oa);
        });
    }
    function ma(na, oa, pa, qa) {
        pa = ca(pa);
        var ra = na._fbid;
        if (oa.name) {
            pa.forEach(function(ta) {
                t.render(t.createElement(r, {
                    thread: oa,
                    viewer: ra,
                    showUnreadCount: !!qa.show_unread_count
                }), ta);
            });
            return;
        }
        var sa = oa.participants;
        if (oa.participants.length > 1)
            sa = oa.participants.filter(function(ta) {
                return ta != m.getParticipantIDFromUserID(ra);
            });
        s.getMulti(sa, function(ta) {
            q.renderParticipantListWithNoThreadName(na._serverRequests.getServerThreadIDNow(oa.thread_id), oa, sa, ta, pa, qa);
        });
    }
    e.exports = ia;
}, null);
__d("ChatTabView", ["Arbiter", "ArbiterMixin", "AsyncDialog", "AsyncRequest", "AsyncSignal", "AvailableListConstants", "BanzaiODS", "ChatAddToThreadButton.react", "ChatArchiveWarning.react", "ChatBehavior", "ChatCloseButton.react", "ChatConfig", "ChatContextualDialogController", "ChatEmployeeAwayWarning", "ChatOpenTab", "ChatPhotoUploader.react", "ChatPrivacyActionController", "ChatQuietLinks", "ChatShareLinkUploader", "MercurySharePreview.react", "ChatStickerButton.react", "ChatStickerTriggerController", "ChatTabMenu.react", "ChatTabMessagesView", "ChatTabSheetController", "ChatTitleLink.react", "ChatVisibility", "ChatVideoCallButton.react", "MercuryConstants", "ContentRollFlyout.react", "CurrentUser", "CSS", "CurrentLocale", "Dialog", "Dock", "DOM", "DOMEvent", "DOMQuery", "DragDropTarget", "EmoticonsList", "EmoticonUtils", "Event", "Focus", "ImmutableObject", "Input", "Keys", "Locale", "LogHistory", "MercuryConfig", "MercuryIDs", "MercuryFileUploader", "MercuryLogMessageType", "MercuryParticipants", "MercurySourceType", "MercuryThreadMetadataRawRenderer", "MercuryThreadMuter", "MercuryTypingAnimation.react", "MercuryTypingReceiver", "MercuryViewer", "NubController", "Parent", "PhotosUploadWaterfall", "PresencePrivacy", "PresenceStatus", "React", "Run", "SelectionPosition", "StickerActions", "StickerConfig", "StickerConstants", "StickersFlyout.react", "StickerState", "StickerSearchNUX.react", "Style", "SubscriptionsHandler", "SyntheticMouseEvent", "ChatTabTemplates", "TextAreaControl", "Toggler", "Tooltip", "TypingDetectorController", "URLScraper", "URI", "UserAgent_DEPRECATED", "VideoCallCore", "WaterfallIDGenerator", "WebMessengerThreadPermalinks", "XStickerReplyNUXControllerURIBuilder", "copyProperties", "cx", "csx", "fbt", "getActiveElement", "isEmpty", "setIntervalAcrossTransitions", "tx", "ChatReactInput", "OrionTrigger", "MercuryMessages", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreadMetadataRenderer", "MercuryThreadActions", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc) {
    "use strict";
    var yc = b('ChatReactInput').module, zc = b('OrionTrigger').module, ad = b('MercuryMessages').get(), bd = b('MercuryServerRequests').get(), cd = b('MercuryThreadInformer').get(), dd = b('MercuryThreadMetadataRenderer').get(), ed = b('MercuryThreadActions').get(), fd = b('MercuryThreads').get(), gd = /^\s*$/, hd = {}, id = null, jd, kd = 10, ld = bb.getInstance('chat_tab_view');
    function md(he, ie) {
        var je = pa.create('div');
        ie = ie && ie.filter(function(me) {
            return me != mb.getID();
        });
        if (vc(ie))
            return hc.remove(he);
        var ke = ie.length, le = ke - kd;
        if (le > 1)
            ie = ie.slice(0, kd);
        gb.getMulti(ie, function(me) {
            for (var ne in me) {
                var oe = me[ne], pe = ec[':fb:mercury:chat:multichat-tooltip-item'].build();
                pa.setContent(pe.getNode('name'), oe.name);
                var qe = db.getUserIDFromParticipantID(ne), re = qe && rb.get(qe) == l.ACTIVE;
                la.conditionShow(pe.getNode('icon'), re);
                la.conditionClass(pe.getNode('name'), 'tooltipItemWithIcon', re);
                pa.appendContent(je, pe.getRoot());
            }
            if (le > 1) {
                var se = tc._("and {number of hidden chat participants} more.", [tc.param("number of hidden chat participants", le)]);
                pa.appendContent(je, pa.create('div', {}, se));
            }
            hc.set(he, je, 'above');
        });
    }
    var nd = {}, od = null, pd = false;
    function qd(he, ie, je) {
        if (je) {
            nd[he] = ie;
            if (!od)
                od = wc(rd, 600);
        } else {
            la.removeClass(ie, 'highlightTitle');
            delete nd[he];
        }
    }
    function rd() {
        for (var he in nd) {
            var ie = nd[he];
            if (ie.parentNode) {
                la.conditionClass(ie, 'highlightTitle', pd);
            } else 
                delete nd[he];
        }
        pd=!pd;
        if (!Object.keys(nd).length) {
            clearInterval(od);
            od = null;
        }
    }
    function sd(he) {
        var ie = db.tokenize(he);
        switch (ie.type) {
        case 'user':
            return ec[':fb:mercury:chat:user-tab'].build();
        }
        return ec[':fb:mercury:chat:multichat-tab'].build();
    }
    function td(he) {
        var ie = he._getInputValue(), je = he._fileUploader.getAttachments();
        if (zd(he))
            vd(he, ie, je, function(ke) {
                var le = he._fileUploader.getImageFiles();
                if (le.length > 0) {
                    ke.image_ids = le;
                    ke.has_attachment = true;
                }
                var me = he._fileUploader.getVideoFiles();
                if (me.length > 0) {
                    ke.video_ids = me;
                    ke.has_attachment = true;
                }
                var ne = he._fileUploader.getAudioFiles();
                if (ne.length > 0) {
                    ke.audio_ids = ne;
                    ke.has_attachment = true;
                }
                var oe = he._fileUploader.getFiles();
                if (oe.length > 0) {
                    ke.file_ids = oe;
                    ke.has_attachment = true;
                }
                ad.sendMessage(ke);
                he._fileUploader.removeAttachments();
                he._shareLinkUploader && he._shareLinkUploader.clear();
                if (he._sharePreview)
                    he._sharePreview.setProps({
                        shareID: null,
                        uri: null
                    });
                    if (!r.get('chat_react_input'))
                        he._getNode('input').value = '';
                        he._typingDetector && he._typingDetector.resetState();
                        he._messagesView && he._messagesView.setShouldScrollToBottom(true);
                    });
    }
    function ud(he, ie) {
        if (ie === 0)
            return;
        ce(he, pb.POST_PUBLISHED, {
            count: ie
        });
        he._waterfallID = nc.generate();
    }
    function vd(he, ie, je, ke) {
        fd.getThreadMeta(he._threadID, function(le) {
            var me = ad.constructUserGeneratedMessageObject(ie, hb.CHAT_WEB, he._threadID);
            if (je.length > 0) {
                me.has_attachment = true;
                me.raw_attachments = je;
            }
            if (he._shareLinkUploader) {
                var ne = he._shareLinkUploader.getAttachData();
                if (ne) {
                    me.has_attachment = true;
                    me.content_attachment = ne;
                }
            }
            if (he._sharePreview) {
                var oe = he._sharePreview.getShareID();
                if (oe) {
                    me.has_attachment = true;
                    me.shareable_attachment = oe;
                }
            }
            if (fd.isNewEmptyLocalThread(he._threadID)) {
                var pe = he._sheetController.getAddFriendsParticipants();
                if (pe === null || pe.length === 0)
                    return;
                pe = pe.filter(function(re) {
                    return re != mb.getID();
                });
                if (pe.length === 0) {
                    me.thread_id = db.getThreadIDFromUserID(ka.getID());
                } else if (pe.length === 1) {
                    me.thread_id = db.getThreadIDFromParticipantID(pe[0]);
                } else 
                    ed.addParticipants(he._threadID, pe);
            }
            if (fd.isEmptyLocalThread(he._threadID)) {
                me.message_id = db.tokenize(he._threadID).value;
                var qe = fd.getThreadMetaNow(le.thread_id);
                me.specific_to_list = Array.from(qe.participants);
            }
            if (typeof me != 'undefined')
                me.signatureID = he._signatureID;
            me.ui_push_phase = ia.UIPushPhase;
            ke(me);
            if (he._threadID !== me.thread_id&&!he._photoUploader.isUploading()) {
                de.inform('closed-tab', he._threadID);
                u.openThread(me.thread_id, 'ChatTabView');
            }
        });
    }
    function wd(he) {
        he._blocked = true;
        he._sheetController.openUploadWarningTabSheet();
    }
    function xd(he) {
        return (he._fileUploader.isUploading() || he._photoUploader.isUploading() || (he._sharePreview && he._sharePreview.isLoading()));
    }
    function yd(he) {
        return (he._fileUploader.isUploading() || (he._sharePreview && he._sharePreview.isLoading()));
    }
    function zd(he) {
        var ie = he._getInputValue();
        if (!gd.test(ie))
            return true;
        if (he._fileUploader.getAttachments().length > 0 || he._fileUploader.getImageFiles().length > 0 || he._fileUploader.getVideoFiles().length > 0 || he._fileUploader.getAudioFiles().length > 0 || he._fileUploader.getFiles().length > 0)
            return true;
        if (he._shareLinkUploader && he._shareLinkUploader.getAttachData())
            return true;
        if (he._sharePreview && he._sharePreview.getShareID())
            return true;
        return false;
    }
    function ae(he) {
        if (he._blocked) {
            if (yd(he))
                return;
            he._blocked = false;
            td(he);
            he._sheetController.closeUploadWarningTabSheet();
        }
    }
    function be(he) {
        he._nubController.flyoutContentChanged();
        var ie = he._getNode('attachmentShelf');
        ie.scrollTop = ie.scrollHeight;
    }
    function ce(he, ie, je) {
        pb.sendSignal(qc({
            qn: he._waterfallID,
            step: ie,
            uploader: pb.APP_CHAT
        }, je || {}));
    }
    function de(he, ie, je, ke, le) {
        if (ie)
            bd.ensureThreadIsFetched(ie);
        this._threadID = he;
        this._signatureID = je;
        this._eventListeners = [];
        this._isDragDropActive = false;
        this._tabTemplate = sd(he);
        this._tabElem = this._tabTemplate.getRoot();
        if (le) {
            this.insertBefore(le);
        } else 
            this.appendTo(ke);
        this._titlebar = this._getNode('nubFlyoutTitlebar');
        this._iconsContainerNode = this._getNode('iconsContainer');
        this._inputContainerNode = this._getNode('inputContainer');
        this._waterfallID = nc.generate();
        this._subscriptionsHandler = new cc();
        this._initializeAutoSendPhotoUploader();
        this._stickersFlyoutShown = false;
        var me = ra.scry(this._tabElem, "._1ia");
        if (me && me.length > 0) {
            this._dropTarget = new sa(me[0]);
            this._dropTarget.setOnFilesDropCallback(this._filesDropped.bind(this));
            this._dropTarget.setOnURLDropCallback(this._linkDropped.bind(this));
            this._dropTarget.enable();
        }
        this._sheetController = new ea(this._threadID, this._getNode('sheet'), this._tabElem);
        if (r.get('chat_react_option_menu')) {
            this._initializeReactMenu(this._getNode('fileAttachmentShelf'));
        } else {
            this._fileUploader = new eb(this._getNode('fileAttachmentShelf'), this._tabTemplate.getNode('attachButtonForm'), this._tabTemplate.getNode('fileInput'), this._tabTemplate.getNode('attachID'));
            this._initializeUploader(this._fileUploader);
        }
        this._initializeArchiveWarning();
        this._initializeAddToThreadButton();
        this._initializeVideoCallButton();
        this._initializeCloseButton();
        this._initializeTitle();
        this._sheetController.onClickNewMessagesSheet(function() {
            this._messagesView && this._messagesView.scrollToBottom();
            this.focus();
            de.inform('read', this._threadID);
        }.bind(this));
        this._sheetController.onClickThreadIsMutedSheet(function() {
            ed.unmute(this._threadID);
            this.focus();
        }.bind(this));
        this._nubController = new nb().init(this._tabElem);
        this._sheetController.onResize(this._nubController.flyoutContentChanged.bind(this._nubController));
        this._sheetController.onTokensChanged(function(se, te) {
            fd.getThreadMeta(this._threadID, function(ue) {
                this._updateControls(ue, te.token_count);
            }.bind(this));
        }.bind(this));
        if (id === null)
            id=!r.get('seen_autosend_photo_nux');
        this._messagesView = null;
        if (r.get('chat_react_option_menu')) {
            oc.getThreadURI(he, function(se) {
                return this._setTitleHref(se);
            }.bind(this));
        } else {
            var ne = this._getNode('conversationLink');
            la.hide(ne);
            dd.renderWebMessengerLink(he, ne, function() {
                la.show(ne);
                this._setTitleHref(ne.href);
            }.bind(this));
        }
        if (!db.getUserIDFromThreadID(this._threadID))
            this._titlebarTooltipAnchor = this._getNode('titlebarText');
        var oe = this._getCanonicalUserID();
        if (this._getCanonicalUserID()) {
            gb.get(db.getParticipantIDFromUserID(oe), function(se) {
                if (se.href)
                    this._setTitleHref(se.href);
            }.bind(this));
        } else if (r.get('chat_react_option_menu') && this._reactChatTabMenu.getURL()) {
            this._setTitleHref(this._reactChatTabMenu.getURL());
        } else if (ne && ne.href)
            this._setTitleHref(ne.href);
        this._nubController.subscribe('resize', function() {
            this._resizeInputContainer();
        }.bind(this));
        this._setNameConversationLink();
        this._listen('closeButton', 'click', this._closeClicked);
        this._listen('dockButton', 'click', this._nubClicked);
        this._listen('dockButton', 'keydown', this._dockKeyDown);
        this._listen('nubFlyoutTitlebar', 'click', this._titleClicked);
        this._listen('chatConv', 'click', this._chatConvClicked);
        this._listen('inputContainer', 'click', this._inputContainerClicked);
        this._listen('addFriendLink', 'click', this._addFriendLinkClicked, true);
        this._listen('nameConversationLink', 'click', this._nameConversationLinkClicked, true);
        this._listen('clearWindowLink', 'click', this._clearHistory, true);
        this._listen('unsubscribeLink', 'click', this._unsubscribeLinkClicked, true);
        this._listen('reportSpamLink', 'click', this._reportSpamClicked, true);
        this._listen('createGroupLink', 'click', this._createGroupClicked, true);
        this._listen('enableDesktopNotif', 'click', this._enableDesktopNotif, true);
        this._listen('muteThreadLink', 'click', jb.showMuteChangeDialog.bind(null, this._threadID), true);
        this._listen('unmuteThreadLink', 'click', function() {
            ed.unmute(this._threadID);
            gc.hide();
        }.bind(this), true);
        this._listen('switchToWorkUserLink', 'click', this._switchToWorkUserClicked, true);
        this._listen('sheet', 'keydown', function(event) {
            if (!event.getModifiers().any && event.keyCode === za.TAB) {
                this._focusInput();
                event.kill();
            }
        }.bind(this));
        this._stickersFlyoutToggler = this._getNode('emoticons');
        if (wb.WebStickerTrigger)
            this._stickerTriggerController = new ba(this._getNode('stickersTriggerFlyoutContainer'), this._getNode('emoticonIndicator'), this._stickersFlyoutToggler, this._stickerSelected.bind(this), this._searchStickers.bind(this));
        this._initializeInput();
        if (zb.shouldShowStickerSearchNUXIndicator()) {
            this._addStickerSearchNUXIndicator();
            this._listen('emoticons', 'click', function() {
                if (zb.shouldShowStickerSearchNUXIndicator()) {
                    vb.selectPack(xb.SEARCH_PACK_ID);
                    zb.clearShowStickerSearchNUXIndicator();
                }
                g.inform('stickerSearchNUXIndicator/hide');
            }, true);
            g.subscribeOnce('stickerSearchNUXIndicator/hide', function() {
                this._clearStickerSearchNUXIndicator();
                this._clearStickerSearchNUXTooltip();
            }.bind(this));
            de.subscribe('lower-activated', function(se, te) {
                if (te === this._threadID && zb.shouldShowStickerSearchNUXIndicator()) {
                    this._clearStickerSearchNUXTooltip();
                    this._addStickerSearchNUXIndicator();
                }
            }.bind(this));
        }
        if (r.get('chat_react_sticker_button')) {
            this._stickerButton = sb.render(sb.createElement(aa, {
                onFlyoutShown: this._onFlyoutShown.bind(this),
                onFlyoutHidden: this._onFlyoutHidden.bind(this),
                onStickerSelect: this._stickerSelected.bind(this),
                onEmoticonSelect: this._emoticonSelected.bind(this)
            }), this._getNode('stickerButtonContainer'));
            m.bumpEntityKey('chat.web', 'sticker_button.mounting_attempted');
        } else {
            var pe = this._getNode('stickers');
            if (pe)
                this._stickersFlyout = sb.render(sb.createElement(yb, {
                    onStickerSelect: function(se) {
                        this._stickerSelected(se);
                    }.bind(this),
                    onShown: this._onFlyoutShown.bind(this),
                    onHidden: this._onFlyoutHidden.bind(this),
                    onEmoticonSelect: this._emoticonSelected.bind(this),
                    onEscKeyDown: this._hideStickersFlyoutIfShown.bind(this)
                }), pe);
            this._eventListeners.push(zb.addListener(zb.PACK_SELECTED, function(se) {
                if (this._stickersFlyout && this._stickersFlyout.isMounted())
                    this._stickersFlyout.setProps({
                        packID: se
                    });
            }.bind(this)));
        }
        if (zc) {
            this._orionTriggerContainer = this._getNode('orionTriggerContainer');
            this._orionTrigger = sb.render(sb.createElement(zc, {
                onTrigger: this._orionTriggered.bind(this)
            }), this._orionTriggerContainer);
        }
        var qe = this._getNode('contentRoll');
        if (qe)
            sb.render(sb.createElement(ja, {
                onSelection: function(se) {
                    if (this._shareLinkUploader)
                        this._shareLinkUploader.loadShare(se.url, {
                            content_roll_entry: se
                        });
                        this.focus();
                    }.bind(this),
                    userID: ka.getID()
                }), qe);
        this._privacyLink = this._getNode('privacyLink');
        if (this._privacyLink) {
            this._privacyActionController = new w(oe, this._updatePrivacyLink.bind(this));
            this._eventListeners.push(va.listen(this._privacyLink, 'click', this._privacyActionController.togglePrivacy.bind(this._privacyActionController)));
        }
        fd.getThreadMeta(this._threadID, function(se) {
            this._setUpMutingSettings(se);
        }.bind(this));
        x.removeEmptyHrefs(this._tabElem);
        hd[he] = this;
        this.updateAvailableStatus();
        this.updateTab();
        this._setCloseTooltip(false);
        var re = {
            threadID: he,
            userID: oe,
            signatureID: this._signatureID
        };
        new k('/ajax/chat/opentab_tracking.php', re).send();
        tb.onBeforeUnload(function() {
            if (this._hasUnfinishedPost())
                return "You haven't sent your message yet. Do you want to leave without sending?";
            if (ad.getNumberLocalMessages(this._threadID))
                return "Your message is still being sent. Are you sure you want to leave?";
            return null;
        }.bind(this), false);
        tb.onUnload(function() {
            ee(this);
        }.bind(this));
    }
    function ee(he) {
        if (he._photoUploader.isUploading())
            ce(he, pb.CANCEL_DURING_UPLOAD);
    }
    function fe() {
        for (var he in hd) {
            hd[he].updateAvailableStatus();
            hd[he].updateMultichatTooltip();
        }
    }
    g.subscribe(['buddylist/availability-changed'], fe);
    qb.subscribe(['privacy-changed', 'privacy-availability-changed'], fe);
    p.subscribe(p.ON_CHANGED, function() {
        for (var he in hd)
            fd.getThreadMeta(he, function(ie) {
                hd[he]._updateUnreadCount(ie);
            });
    });
    lb.addRetroactiveListener('state-changed', function(he) {
        for (var ie in he) {
            var je = he[ie] && he[ie].length, ke = hd[ie];
            ke && ke.showTypingIndicator(je);
        }
    });
    cd.subscribe('threads-updated', function(he, ie) {
        for (var je in hd) {
            var ke = hd[je];
            ie[je] && ke.updateTab();
            if (ke._newThreadIDFromPhotoUpload&&!ke._photoUploader.isUploading() && ie[ke._newThreadIDFromPhotoUpload]) {
                de.inform('closed-tab', ke._threadID);
                u.openThread(ke._newThreadIDFromPhotoUpload, 'ChatTabView');
                ke._newThreadIDFromPhotoUpload = null;
            }
        }
    });
    cd.subscribe('threads-deleted', function(he, ie) {
        for (var je in hd)
            ie[je] && de.inform('thread-deleted', je);
    });
    qc(de, h, {
        get: function(he) {
            return hd[he];
        }
    });
    qc(de.prototype, {
        getThreadID: function() {
            return this._threadID;
        },
        showAddFriend: function() {
            setTimeout((function() {
                this._sheetController.openAddFriendsSheet();
            }).bind(this), 0);
        },
        showNameConversation: function(he) {
            setTimeout((function() {
                this._sheetController.openNameConversationSheet(he);
            }).bind(this), 0);
        },
        hideAutomaticNameConversation: function() {
            setTimeout((function() {
                this._sheetController.closeAutomaticNameConversationSheet();
            }).bind(this), 0);
        },
        isVisible: function() {
            return la.shown(this._tabElem);
        },
        setVisibleState: function(he, ie) {
            var je = la.shown(this._tabElem), ke = la.hasClass(this._tabElem, 'opened');
            la.conditionShow(this._tabElem, he);
            la.conditionClass(this._tabElem, 'opened', ie);
            if (!(je && ke) && he && ie) {
                if (!this._messagesView)
                    this._messagesView = new da(this._threadID, this._sheetController, this._getNode('chatConv'), this._getNode('conversation'), this._getNode('loadingIndicator'), this._getNode('lastMessageIndicator'), this._getNode('typingIndicator'), this);
                this._nubController.flyoutContentChanged();
                this._messagesView.scrollToBottom();
            }
            if (je && ke&&!(he && ie))
                this._contextualDialogController && this._contextualDialogController.tabNotActive();
        },
        focus: function() {
            if (la.hasClass(this._tabElem, 'opened')) {
                this._focusInput();
            } else 
                this._getNode('dockButton').focus();
        },
        isFocused: function() {
            var he = uc();
            return ob.byClass(he, "_50mz") === this._tabElem;
        },
        hasEmptyInput: function() {
            var he;
            if (r.get('chat_react_input')) {
                if (!this._chatInput ||!this._chatInput.isMounted())
                    return false;
                he = this._chatInput.getValue();
            } else 
                he = this._getNode('input').value;
            return gd.test(he);
        },
        getInputElem: function() {
            if (r.get('chat_react_input')) {
                if (!this._chatInput ||!this._chatInput.isMounted())
                    return null;
                return this._chatInput.getDOMNode();
            } else 
                return this._getNode('input');
        },
        setStickersFlyoutPackID: function(he) {
            if (this._stickerButton) {
                this._setPackIDReact(he);
            } else 
                this._setPackIDLegacy(he);
        },
        loadShareFromParams: function(he, ie) {
            this._shareLinkUploader && this._shareLinkUploader.loadShareFromParams(he, ie);
            if (this._sharePreview)
                this._sharePreview.setProps({
                    share: {
                        params: ie,
                        type: he
                    },
                    uri: null
                });
        },
        _linkDropped: function(he) {
            this._shareLinkUploader && this._shareLinkUploader.loadShare(he);
            if (this._sharePreview)
                this._sharePreview.setProps({
                    shareID: null,
                    uri: he
                });
        },
        _filesDropped: function(he) {
            if (this._fileUploader)
                this._fileUploader.addDroppedFiles(he);
        },
        showStickerSearchNUXTooltip: function() {
            if (jd)
                return;
            jd = true;
            this._clearStickerSearchNUXIndicator();
            this._stickerSearchNUXTooltip = sb.render(sb.createElement(ac, {
                showIndicatorFunc: this._addStickerSearchNUXIndicator.bind(this)
            }), this._getNode('tooltipNUXContainer'));
        },
        _setPackIDLegacy: function(he) {
            var ie = this._stickersFlyout;
            if (!this._stickersFlyoutToggler ||!ie ||!ie.isMounted())
                return;
            vb.selectPack(he);
            this._toggleStickersFlyoutShownLegacy(true);
        },
        _setPackIDReact: function(he) {
            if (!this._stickerButton.isMounted())
                return;
            vb.selectPack(he);
            this._toggleStickersFlyoutShownReact(true);
        },
        _toggleStickersFlyoutShownReact: function(he) {
            this._stickerButton.showFlyout();
            this._stickersFlyoutShown = he;
        },
        _toggleStickersFlyoutShownLegacy: function(he) {
            if (he) {
                gc.show(this._stickersFlyoutToggler);
            } else 
                gc.hide(this._stickersFlyoutToggler);
            this._stickersFlyoutShown = he;
        },
        _hideStickersFlyoutIfShown: function() {
            if (this._stickersFlyoutToggler && this._stickersFlyout && this._stickersFlyoutShown)
                this._toggleStickersFlyoutShownLegacy(false);
        },
        showStickerReplyNUX: function() {
            if (jd)
                return;
            var he = this._getNode('stickerButtonContainer') || this._getNode('emoticons');
            new j(new pc().getURI()).setRelativeTo(he).setData({
                thread_id: this._threadID
            }).setHandler(function(ie) {
                zb.clearShowStickerReplyNUX();
            }).send();
        },
        insertBefore: function(he) {
            pa.insertBefore(he._tabElem, this._tabElem);
        },
        appendTo: function(he) {
            pa.appendContent(he, this._tabElem);
        },
        nextTabIs: function(he) {
            var ie = he && he._tabElem;
            return this._tabElem.nextSibling == ie;
        },
        getScrollTop: function() {
            return pa.find(this._tabElem, '.fbNubFlyoutBody.scrollable').scrollTop;
        },
        setScrollTop: function(he) {
            pa.find(this._tabElem, '.fbNubFlyoutBody.scrollable').scrollTop = he;
        },
        _unmountComponentAtNodeSafe: function(he) {
            var ie = this._getNode(he);
            ie && sb.unmountComponentAtNode(ie);
        },
        destroy: function() {
            this._selectionPosition && this._selectionPosition.disable();
            while (this._eventListeners.length)
                this._eventListeners.pop().remove();
            if (this._dropTarget)
                this._dropTarget.disable();
            this._messagesView && this._messagesView.destroy();
            this._sheetController && this._sheetController.destroy();
            if (r.get('chat_react_option_menu')) {
                sb.unmountComponentAtNode(this._getNode('menuContainer'));
            } else 
                this._fileUploader && this._fileUploader.destroy();
            if (r.get('chat_react_header')) {
                sb.unmountComponentAtNode(this._getNode('addToThreadContainer'));
                this._unmountComponentAtNodeSafe('archiveContainer');
                this._unmountComponentAtNodeSafe('videoCallButtonContainer');
                sb.unmountComponentAtNode(this._getNode('closeButtonContainer'));
                sb.unmountComponentAtNode(this._getNode('titleContainer'));
            }
            if (r.get('chat_react_share_uploader') && this._sharePreview && this._sharePreview.isMounted()) {
                sb.unmountComponentAtNode(this._sharePreview.getDOMNode());
            } else 
                this._shareLinkUploader && this._shareLinkUploader.clear();
            sb.unmountComponentAtNode(this._getNode('photoUploaderContainer'));
            if (r.get('chat_react_sticker_button')) {
                sb.unmountComponentAtNode(this._getNode('stickerButtonContainer'));
            } else 
                sb.unmountComponentAtNode(this._getNode('stickers'));
            if (wb.WebStickerTrigger)
                this._stickerTriggerController.destroy();
            this._subscriptionsHandler && this._subscriptionsHandler.release();
            this._contextualDialogController && this._contextualDialogController.destroy();
            this._privacyActionController && this._privacyActionController.destroy();
            if (r.get('chat_react_input')) {
                sb.unmountComponentAtNode(this._getNode('inputContainer'));
            } else 
                ya.reset(this._getNode('input'));
            pa.remove(this._tabElem);
            delete hd[this._threadID];
            oa.unregisterNubController(this._nubController);
        },
        updateAvailableStatus: function() {
            fd.getThreadMeta(this._threadID, function(he) {
                var ie = l.OFFLINE, je = false, ke = this._getCanonicalUserID();
                if (ke) {
                    ie = rb.get(ke);
                    je = mc.availableForCall(ke);
                } else {
                    var le = he.participants.map(function(ne) {
                        return db.getUserIDFromParticipantID(ne);
                    });
                    ie = rb.getGroup(le);
                }
                if (!ga.isOnline())
                    ie = l.OFFLINE;
                if (ke)
                    this._updateCallLink(ie);
                la.conditionClass(this._tabElem, "_5238", ie === l.ACTIVE);
                la.conditionClass(this._tabElem, "_4hwz", je);
                la.conditionClass(this._tabElem, "_5239", ie === l.MOBILE);
                var me = this._getNode('presenceIndicator');
                switch (ie) {
                case l.ACTIVE:
                    me.setAttribute('alt', "Online");
                    break;
                case l.MOBILE:
                    me.setAttribute('alt', "Mobile");
                    break;
                default:
                    me.removeAttribute('alt');
                    break;
                }
            }.bind(this));
        },
        updateTab: function() {
            this._setNameConversationLink();
            fd.getThreadMeta(this._threadID, function(he) {
                var ie = [this._getNode('name')];
                if (!r.get('chat_react_header')) {
                    ie.push(this._getNode('titlebarText'));
                } else if (this._title.isMounted())
                    this._title.setProps({
                        thread: he
                    }, function() {
                        this._getNode('chatWrapper').setAttribute('aria-label', this._title.getTitle());
                    }.bind(this));
                dd.renderAndSeparatedParticipantList(this._threadID, ie, {
                    names_renderer: ib.renderShortNames,
                    check_length: true
                });
                this._updateControls(he);
                this._updateMutingSettings(he);
                this._updateUnreadCount(he);
                this.updateMultichatTooltip();
                this._updateArchiveWarning(he);
                this._updateEmployeeAwayWarning(he);
                this._updateNewThread(he);
                this._updateNameConversationSheet(he);
                this._updateReadOnlySheet(he);
                this._updateSwitchToWork(he);
            }.bind(this));
        },
        _setNameConversationLink: function() {
            var he = this._getNode('nameConversationLink');
            if (he)
                fd.isEmptyLocalThread(this._threadID) ? la.hide(he) : la.show(he);
        },
        _updateNameConversationSheet: function(he) {
            if (fd.canReply(he.thread_id)&&!he.name&&!he.is_canonical&&!he.name_conversation_sheet_dismissed&&!he.has_email_participant&&!he.read_only&&!fd.isEmptyLocalThread(he.thread_id)) {
                this.showNameConversation(true);
            } else 
                this.hideAutomaticNameConversation();
        },
        _updateReadOnlySheet: function(he) {
            var ie = fd.canReply(he.thread_id), je = fd.isEmptyLocalThread(he.thread_id);
            if (!ie&&!je)
                this._sheetController.openReadOnlySheet();
        },
        updateSignatureID: function(he) {
            this._signatureID = he;
        },
        _showPhotoNUXIfNecessary: function() {
            if (id) {
                id = false;
                new j('/ajax/chat/photo_nux.php').setRelativeTo(this._getNode('photoUploaderContainer')).setData({
                    threadID: this._threadID
                }).send();
                return true;
            }
        },
        _setUpMutingSettings: function(he) {
            var ie = jb.isThreadMuted(he);
            if (ie)
                this._sheetController.openThreadIsMutedTabSheet();
            this._updateActionMenu(ie);
        },
        _updateMutingSettings: function(he) {
            var ie = jb.isThreadMuted(he), je;
            if (r.get('chat_react_option_menu')) {
                je = this._reactChatTabMenu.props.isMuted;
            } else 
                je = la.shown(this._getNode('unmuteThreadLink').parentNode);
            if (ie&&!je) {
                this._sheetController.openThreadIsMutedTabSheet();
            } else if (!ie && je)
                this._sheetController.closeThreadIsMutedTabSheet();
            this._updateActionMenu(ie);
        },
        _updateActionMenu: function(he) {
            if (r.get('chat_react_option_menu')) {
                this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
                    isMuted: he
                });
            } else {
                la.conditionShow(this._getNode('muteThreadLink').parentNode, !he);
                la.conditionShow(this._getNode('unmuteThreadLink').parentNode, he);
            }
        },
        _updateArchiveWarning: function(he) {
            var ie = false;
            gb.get(mb.getID(), function(je) {
                ie = je.employee;
                if (ie)
                    gb.getMulti(he.participants, this._showArchiveWarningIfAllParticipantsAreEmployees.bind(this));
            }.bind(this));
        },
        _updateEmployeeAwayWarning: function(he) {
            t.updateEmployeeAwayWarning(he, function() {
                this._sheetController.openEmployeeAwaySheet();
            }.bind(this), function() {});
        },
        _updateSwitchToWork: function(he) {
            var ie = false;
            gb.get(mb.getID(), function(je) {
                ie = je.employee;
                if (ie)
                    gb.getMulti(he.participants, this._showSwitchToWorkIfAllParticipantsAreEmployees.bind(this));
            }.bind(this));
        },
        _updateControls: function(he, ie) {
            var je = false;
            if (he && he.thread_id) {
                var ke = db.tokenize(he.thread_id);
                if (ke.type === 'user') {
                    var le = ke.value;
                    je=!bd.isUser(le);
                }
            }
            var me = fd.canReply(he.thread_id) && (!vc(he.participants)||!!ie);
            la.conditionShow(this._inputContainerNode, me);
            la.conditionShow(this._iconsContainerNode, me);
            if (!r.get('chat_react_option_menu')) {
                la.conditionShow(this._getNode('dropdown'), me);
            } else if (this._reactChatTabMenu.isMounted()) {
                this._reactChatTabMenu.setProps({
                    isEmptyChat: fd.isNewEmptyLocalThread(he.thread_id),
                    show: me
                });
                if (je)
                    this._reactChatTabMenu.setProps({
                        showAddFriend: null
                    });
            }
            var ne = me&&!je;
            if (r.get('chat_react_header')) {
                this._addToThreadButton.isMounted() && this._addToThreadButton.setProps({
                    shown: ne
                });
            } else 
                la.conditionShow(this._getNode('addToThreadLink'), ne);
            this._resizeInputContainer();
            this._updateOrionTrigger(me);
        },
        _updateOrionTrigger: function(he) {
            if (this._orionTrigger && he) {
                var ie = this.getParticipantIDForOrionNUX();
                la.conditionShow(this._orionTriggerContainer, ie);
                if (ie) {
                    gb.get(ie, function(je) {
                        je = xa.set(je, {
                            userId: db.getUserIDFromParticipantID(ie)
                        });
                        this._orionTrigger.setProps({
                            receiver: je,
                            disabled: !je.orion_eligible
                        });
                        if (je.orion_eligible && this.isOrionNUXEligible())
                            this.showOrionNUXTooltip();
                    }.bind(this));
                } else 
                    this._orionTrigger.setProps({
                        receiver: {}
                    });
            }
        },
        getParticipantIDForOrionNUX: function() {
            var he = this._sheetController.getAddFriendsTabSheet(), ie = he.getParticipants(), je = this._getCanonicalUserID(), ke = null;
            if (je) {
                ke = db.getParticipantIDFromUserID(je);
            } else if (ie && ie.length === 1)
                ke = ie[0];
            return ke;
        },
        showOrionNUXTooltip: function() {
            if (this._orionTrigger && cb.ShowOrionNUXTooltip)
                this._orionTrigger.setShouldShowNUXTooltip();
        },
        isOrionNUXEligible: function() {
            var he = this.getParticipantIDForOrionNUX();
            return he && this.isVisible() && la.hasClass(this._tabElem, 'opened');
        },
        _resizeInputContainer: function() {
            var he = this._tabElem.clientWidth, ie = 2, je = he - (this._inputContainerNode.clientWidth + ie), ke = ab.isRTL() ? 'left': 'right';
            bc.set(this._iconsContainerNode, ke, je + 'px');
            if (!r.get('chat_react_input'))
                fc.getInstance(this._getNode('input')).update();
        },
        _updateNewThread: function(he) {
            if (fd.isNewEmptyLocalThread(he.thread_id))
                this.showAddFriend();
        },
        _isEmployeesOnly: function(he) {
            for (var ie in he)
                if (!he[ie].employee)
                    return false;
            return true;
        },
        _showArchiveWarningIfAllParticipantsAreEmployees: function(he) {
            var ie = this._isEmployeesOnly(he), je = r.get('chat_react_header'), ke = je ? this._getNode('archiveContainer'): this._getNode('titanArchiveWarning');
            if (ke) {
                if (this._titlebarTooltipAnchor)
                    la.conditionClass(this._titlebarTooltipAnchor, 'narrowTitleBar', ie);
                if (je) {
                    this._archiveWarning.isMounted() && this._archiveWarning.setProps({
                        shown: ie
                    });
                } else 
                    la.conditionShow(ke, ie);
            }
        },
        _showSwitchToWorkIfAllParticipantsAreEmployees: function(he) {
            var ie = this._isEmployeesOnly(he);
            if (!r.get('chat_react_option_menu')) {
                var je = this._getNode('switchToWorkUserLink');
                if (je)
                    la.conditionShow(je, ie);
            } else if (this._reactChatTabMenu.isMounted())
                this._reactChatTabMenu.setProps({
                    hasSwitchToWork: ie
                });
        },
        updateMultichatTooltip: function() {
            fd.getThreadMeta(this._threadID, function(he) {
                if (!he.is_canonical) {
                    var ie;
                    if (r.get('chat_react_header')) {
                        ie = this._title.getDOMNode();
                    } else 
                        ie = this._titlebarTooltipAnchor;
                    md(ie, he.participants);
                }
            }.bind(this));
        },
        _getNode: function(he) {
            return this._tabTemplate.getNode(he);
        },
        _getCanonicalUserID: function() {
            return db.getUserIDFromThreadID(this._threadID);
        },
        _listen: function(he, event, ie, je) {
            var ke = this._getNode(he);
            if (ke) {
                this._eventListeners.push(va.listen(ke, event, ie.bind(this)));
            } else if (!je)
                throw new Error('Could not find node "' + he + '"');
        },
        _closePreClicked: function(he) {
            this._closeMouseDown = true;
        },
        _closeClicked: function(he) {
            ee(this);
            de.inform('closed-tab', this._threadID);
            if (he instanceof dc) {
                he.stopPropagation();
                return;
            }
            he.kill();
        },
        _closeEnter: function(he) {
            if (he.keyCode === za.RETURN)
                this._closeClicked(he);
        },
        _nubClicked: function(he) {
            if (!this._isDragDropActive) {
                he.kill();
                return de.inform('nub-activated', this._threadID);
            }
        },
        _dockKeyDown: function(event) {
            if (event.keyCode === za.RETURN || event.keyCode === za.SPACE) {
                de.inform('nub-activated', this._threadID);
                event.kill();
            } else 
                this._handleHotkeyPressed(event);
        },
        _handleHotkeyPressed: function(event) {
            if (event.keyCode === za.ESC) {
                this._handleEscape();
                if (r.get('chat_react_input'))
                    event = new qa(event);
                event.kill();
            } else if (event.keyCode === za.TAB)
                this._handleTabPressed(event);
        },
        _handleTabPressed: function(event) {
            if (!event.ctrlKey) {
                var he = de.inform('tab-pressed', {
                    id: this._threadID,
                    shiftPressed: event.shiftKey
                });
                if (r.get('chat_react_input'))
                    event = new qa(event);
                !he && event.kill();
                return true;
            }
        },
        _handleEscape: function() {
            if (this._stickersFlyoutShown) {
                this._stickerButton ? this._toggleStickersFlyoutShownReact(false) : this._toggleStickersFlyoutShownLegacy(false);
                return;
            }
            ee(this);
            if (this.hasEmptyInput()) {
                de.inform('esc-pressed', this._threadID);
            } else {
                var he = "Are you sure you want to close this chat window?", ie = "You haven't sent your message.", je = new na().setTitle(he).setBody(ie).setButtons([na.CLOSE, na.CANCEL]).setHandler(de.inform.bind(de, 'esc-pressed', this._threadID, null)).setModal(true).show(), ke = je.getButtonElement('yes');
                ke && wa.set(ke);
            }
        },
        _titleClicked: function(event) {
            var he = event.getTarget();
            if (!ob.byClass(he, 'titlebarText')&&!ob.byClass(he, 'uiSelector')&&!ob.byClass(he, 'addToThread')&&!ob.byClass(he, 'optionMenu')&&!ob.byClass(he, 'videoicon')&&!ob.byClass(he, 'close')&&!this._isDragDropActive) {
                de.inform('lower-activated', this._threadID);
                event.kill();
            }
        },
        _callEnter: function(he) {
            if (he.keyCode === za.RETURN)
                this._callClicked(he);
        },
        _callClicked: function(he) {
            if (he.target)
                he.target.blur();
            var ie = this._getCanonicalUserID();
            if (mc.availableForCall(ie)) {
                var je = 'chat_tab_icon';
                if (he.target && la.hasClass(he.target, 'video_call_tour'))
                    je = 'chat_tab_icon_tour';
                de.inform('video-call-clicked', {
                    threadID: this._threadID,
                    userID: ie,
                    clickSource: je
                });
            }
            if (r.get('chat_react_header')) {
                he.stopPropagation();
            } else 
                return false;
        },
        _addFriendLinkClicked: function() {
            this.showAddFriend();
        },
        _nameConversationLinkClicked: function() {
            this.showNameConversation();
        },
        _showParticipantsClicked: function() {
            bd.getServerThreadID(this._threadID, function(he) {
                i.send(new j(kc('/ajax/browser/dialog/multichat_members/').addQueryData({
                    id: he
                })));
            });
        },
        _clearHistory: function() {
            var he = fd.getThreadMetaNow(this._threadID);
            if (he) {
                var ie = this._getCanonicalUserID();
                bd.clearChat(this._threadID, ie, he.timestamp);
            }
        },
        _unsubscribeLinkClicked: function() {
            var he = [];
            he.push({
                name: 'unsubscribe',
                label: "Leave Conversation",
                handler: this._unsubscribeToThread.bind(this)
            });
            he.push(na.CANCEL);
            new na().setTitle("Leave Conversation?").setBody("You will stop receiving messages from this conversation and people will see that you left.").setButtons(he).show();
        },
        _switchToWorkUserClicked: function() {
            var he = [];
            he.push({
                name: 'move',
                label: "Move Conversation",
                handler: this._switchToWork.bind(this)
            });
            he.push(na.CANCEL);
            new na().setTitle("Move Conversation to Work Account?").setBody("Do you want to move this conversation so that it shows in your work account instead?").setButtons(he).show();
        },
        _getUserParticipants: function(he) {
            var ie = [];
            he.forEach(function(je) {
                var ke = db.getUserIDFromParticipantID(je);
                ke && ie.push(ke);
            });
            return ie;
        },
        _createGroupClicked: function() {
            fd.getThreadMeta(this._threadID, function(he) {
                if (!he.is_canonical) {
                    var ie = kc('/ajax/groups/create_get.php').addQueryData({
                        ref: 'web_messenger_dock',
                        parent_id: '0'
                    }), je = this._getUserParticipants(he.participants);
                    ie.addQueryData({
                        members: je
                    });
                    if (he.name)
                        ie.addQueryData({
                            name: he.name
                        });
                    i.send(new j(ie));
                }
            }.bind(this));
        },
        _enableDesktopNotif: function() {
            Notification.requestPermission();
        },
        _reportSpamClicked: function() {
            var he = this._getCanonicalUserID(), ie = kc('/ajax/chat/report.php').addQueryData({
                id: he
            }).addQueryData({
                src: 'top_report_link'
            });
            i.send(new j(ie));
        },
        _inputPasted: function(event) {
            if (lc.chrome()) {
                var he = event.clipboardData || event.originalEvent.clipboardData;
                if (!he ||!he.items || he.items.length < 1)
                    return;
                var ie = he.items[0].type;
                if (ie !== 'image/png')
                    return;
                if (he.items[0].getAsFile) {
                    var je = he.items[0].getAsFile();
                    this._photoUploader.uploadFile(je);
                }
            }
        },
        _focusInput: function() {
            if (r.get('chat_react_input')) {
                this._chatInput && this._chatInput.isMounted() && this._chatInput.focus();
            } else 
                this._getNode('input').focus();
        },
        _focusTab: function() {
            la.addClass(this._tabElem, 'focusedTab');
            this.tryMarkAsRead();
            this._contextualDialogController && this._contextualDialogController.tabFocused();
            if (!jd && this._showPhotoNUXIfNecessary())
                g.subscribe(['ChatNUX/show', 'ChatNUX/hide'], function(event) {
                    jd = event === 'ChatNUX/show';
                });
            this._closeMouseDown = false;
            this._setCloseTooltip(true);
            de.inform('focus-tab', this._threadID);
        },
        _blurTab: function() {
            la.removeClass(this._tabElem, 'focusedTab');
            !this._closeMouseDown && this._setCloseTooltip(false);
        },
        _setCloseTooltip: function(he) {
            if (r.get('chat_react_header')) {
                this._closeButton.isMounted() && this._closeButton.setProps({
                    active: he
                });
                return;
            }
            var ie = this._getNode('titlebarCloseButton'), je = he ? "Press Esc to close": "Close tab";
            hc.set(ie, je, 'above');
        },
        _inputKeyDown: function(event) {
            this.tryMarkAsRead();
            if (event.keyCode === za.RETURN&&!event.shiftKey) {
                if (yd(this)) {
                    wd(this);
                    event.kill && event.kill();
                    return;
                }
                td(this);
                if (wb.WebStickerTrigger)
                    this._stickerTriggerController.activateAfterparty();
                event.kill && event.kill();
                return;
            }
            if (event.keyCode === za.DOWN && event.shiftKey && this.hasEmptyInput()) {
                de.inform('lower-activated', this._threadID);
                event.kill && event.kill();
                return;
            }
            this._handleHotkeyPressed(event);
        },
        _initializeInput: function() {
            if (!r.get('chat_react_input')) {
                var he = this._inputContainerNode.clientHeight;
                fc.getInstance(this._getNode('input')).subscribe('resize', function() {
                    var ie = this._inputContainerNode.clientHeight;
                    if (ie != he)
                        this._nubController.flyoutContentChanged();
                    he = ie;
                }.bind(this));
                this._listen('input', 'focus', this._focusTab);
                this._listen('input', 'blur', this._blurTab);
                this._listen('input', 'paste', this._inputPasted);
                if (lc.firefox() && ma.get() == 'ko_KR') {
                    this._listen('input', 'keyup', this._inputKeyDown);
                } else 
                    this._listen('input', 'keydown', this._inputKeyDown);
                this._initializeThingsWithInputFn(this._tabTemplate.getNode('input'));
            } else {
                this._chatInput = sb.render(sb.createElement(yc, {
                    initializeThingsWithInputFn: this._initializeThingsWithInputFn.bind(this),
                    inputChanged: function(ie) {
                        if (wb.WebStickerTrigger)
                            this._stickerTriggerController.updateInput(ie);
                    }.bind(this),
                    inputKeyDown: this._inputKeyDown.bind(this),
                    onBlur: this._blurTab.bind(this),
                    onEscape: this._handleEscape.bind(this),
                    onFocus: this._focusTab.bind(this),
                    onTab: this._handleTabPressed.bind(this),
                    openFlyoutFn: this._toggleStickersFlyoutShownLegacy.bind(this, true),
                    stickersFlyoutToggler: this._stickersFlyoutToggler,
                    searchTriggeredWord: function() {
                        this._toggleStickersFlyoutShownLegacy(true);
                        this._searchStickers(this._stickerTriggerController.getTriggeredWord());
                    }.bind(this),
                    resizeFn: this._nubController.flyoutContentChanged.bind(this._nubController),
                    uploadPhotoFn: this._photoUploader.uploadFile
                }), this._getNode('chatInputContainer'));
                if (wb.WebStickerTrigger)
                    this._stickerTriggerController.setInput(this._chatInput);
            }
        },
        _initializeSharePreview: function(he, ie) {
            this._sharePreview = sb.render(sb.createElement(z, {
                className: "_4hom",
                imageSize: {
                    width: 68,
                    height: 68
                },
                onClose: this._focusInput.bind(this),
                onUpdate: function() {
                    be(this);
                    ae(this);
                }.bind(this)
            }), this._getNode('shareAttachmentShelf'));
            va.listen(he, 'keyup', function() {
                var je = ie ? ie(): he.value;
                !je.length && this._urlScraper.reset();
            }.bind(this));
            this._urlScraper = new jc(he, ie);
            this._urlScraper.subscribe('match', function(je, ke) {
                this._sharePreview.setProps({
                    shareID: null,
                    uri: (ke && ke.url)
                });
            }.bind(this));
        },
        _initializeThingsWithInputFn: function(he, ie) {
            if (r.get('chat_react_share_uploader')) {
                this._initializeSharePreview(he, ie);
            } else {
                this._shareLinkUploader = new y(this._getNode('shareAttachmentShelf'), he, this.focus.bind(this), ie);
                this._initializeUploader(this._shareLinkUploader);
            }
            fd.getThreadMeta(this._threadID, function(je) {
                bd.getServerThreadID(this._threadID, function(ke) {
                    this._typingDetector = new ic(this._getCanonicalUserID(), he, 'mercury-chat', null, ke, ie);
                }.bind(this));
            }.bind(this));
        },
        _getInputValue: function() {
            if (r.get('chat_react_input')) {
                if (!this._chatInput ||!this._chatInput.isMounted())
                    return '';
                return this._chatInput.getValue() || '';
            } else 
                return this._tabTemplate.getNode('input').value || '';
        },
        _hasUnfinishedPost: function() {
            return zd(this) || xd(this);
        },
        tryMarkAsRead: function() {
            if (!this._messagesView || this._messagesView.isScrolledToBottom()) {
                de.inform('read', this._threadID);
                return true;
            }
            return false;
        },
        _chatConvClicked: function(he) {
            this.tryMarkAsRead();
            if (ob.byTag(he.getTarget(), 'a') || pa.getSelection())
                return;
            this.focus();
        },
        _inputContainerClicked: function(he) {
            this.tryMarkAsRead();
            this.focus();
        },
        showTypingIndicator: function(he) {
            if (r.get('chat_closed_tab_typing_indicator_animated')) {
                var ie = pa.find(this._tabElem, "._54m9");
                if (he) {
                    this._animatedTypingIndicator = sb.render(sb.createElement(kb, null), ie);
                    this._updateAnimatedIndicatorColor();
                    la.addClass(this._tabElem, "_54m8");
                    la.show(ie);
                } else {
                    la.removeClass(this._tabElem, "_54m8");
                    la.hide(ie);
                    sb.unmountComponentAtNode(ie);
                    this._animatedTypingIndicator = null;
                }
            } else 
                la.conditionClass(this._tabElem, 'typing', he);
        },
        _updateAnimatedIndicatorColor: function() {
            if (this._animatedTypingIndicator) {
                var he = la.hasClass(this._tabElem, 'highlightTab') ? 'light': 'dark';
                this._animatedTypingIndicator.setProps({
                    color: he
                });
            }
        },
        _updateUnreadCount: function(he) {
            var ie = he.unread_count;
            if (typeof ie != 'undefined') {
                var je=!!ie && (!p.showsTabUnreadUI || p.showsTabUnreadUI()), ke = this._getNode('numMessages');
                la.conditionShow(ke, je);
                la.conditionClass(this._tabElem, 'highlightTab', je);
                this._updateAnimatedIndicatorColor();
                qd(this._threadID, this._tabElem, je);
                pa.setContent(ke, ie);
            }
        },
        _updateCallLink: function(he) {
            var ie = this._getCanonicalUserID();
            if (ie === ka.getID()) {
                this._hideVideoCallouts();
                if (r.get('chat_react_header')) {
                    this._videoCallButton.isMounted() && this._videoCallButton.setProps({
                        shown: false
                    });
                } else 
                    la.hide(this._getNode('videoCallLink'));
                return;
            }
            if (ga.isOnline()) {
                var je = 'fbid:' + ie;
                gb.get(je, function(ke) {
                    var le = null;
                    if (mc.availableForCall(ie)) {
                        le = xc._("Start a video call with {firstname}", {
                            firstname: ke.short_name
                        });
                    } else {
                        le = xc._("{firstname} is currently unavailable for video calling", {
                            firstname: ke.short_name
                        });
                        this._hideVideoCallouts();
                    }
                    this._setVideoCallTooltip(le);
                }.bind(this));
            } else {
                this._setVideoCallTooltip("You must be online to make a call.");
                this._hideVideoCallouts();
            }
        },
        _setVideoCallTooltip: function(he) {
            if (r.get('chat_react_header')) {
                this._videoCallButton.isMounted() && this._videoCallButton.setProps({
                    tooltipLabel: he
                });
            } else 
                hc.set(this._getNode('videoCallLink'), he);
        },
        _hideVideoCallouts: function() {
            this._contextualDialogController.hideVideoCallouts();
        },
        _updatePrivacyLink: function(he) {
            var ie;
            if (he == w.OFFLINE) {
                ie = "Go online";
                if (r.get('chat_react_option_menu')) {
                    this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
                        privacyText: ie
                    });
                } else 
                    pa.setContent(this._privacyLink, ie);
                return;
            }
            var je = this._getCanonicalUserID();
            if (!je)
                return;
            var ke = 'fbid:' + je;
            gb.get(ke, function(le) {
                if (he == w.BLOCKED) {
                    ie = xc._("Turn On Chat for {name}", {
                        name: le.short_name
                    });
                } else 
                    ie = xc._("Turn Off Chat for {name}", {
                        name: le.short_name
                    });
                if (r.get('chat_react_option_menu')) {
                    this._reactChatTabMenu.isMounted() && this._reactChatTabMenu.setProps({
                        privacyText: ie
                    });
                } else 
                    pa.setContent(this._privacyLink, ie);
            }.bind(this));
        },
        _unsubscribeToThread: function() {
            if (!fd.isEmptyLocalThread(this._threadID)) {
                var he = ad.constructLogMessageObject(hb.CHAT_WEB, this._threadID, fb.UNSUBSCRIBE, {
                    removed_participants: [mb.getID()]
                });
                ad.sendMessage(he);
            }
            de.inform('unsubscribed', this._threadID);
            return true;
        },
        _switchToWork: function() {
            if (!fd.isEmptyLocalThread(this._threadID)) {
                var he = ad.constructLogMessageObject(hb.CHAT_WEB, this._threadID, fb.SWITCH_TO_WORK, {
                    removed_participants: [mb.getID()]
                });
                ad.sendMessage(he);
            }
            de.inform('unsubscribed', this._threadID);
            return true;
        },
        _initializeUploader: function(he) {
            this._subscriptionsHandler.addSubscriptions(he.subscribe(['all-uploads-completed', 'upload-canceled'], function() {
                ae(this);
            }.bind(this)), he.subscribe('dom-updated', function() {
                be(this);
            }.bind(this)), he.subscribe('submit', function() {
                this._focusInput();
            }.bind(this)));
        },
        _initializeReactMenu: function(he) {
            var ie = this._getNode('menuContainer'), je = db.isMultichat(this._threadID), ke = fd.isNewEmptyLocalThread(this._threadID), le = this._sheetController.openAddFriendsSheet.bind(this._sheetController);
            if (ie)
                this._reactChatTabMenu = sb.render(sb.createElement(ca, {
                    onFileUploaderMounted: this.setFileUploader.bind(this),
                    updatePrivacyLinkFunc: this._updatePrivacyLink.bind(this),
                    nameConversationFunc: this._nameConversationLinkClicked.bind(this),
                    showParticipantsFunc: this._showParticipantsClicked.bind(this),
                    leaveConversationFunc: this._unsubscribeLinkClicked.bind(this),
                    clearHistoryFunc: this._clearHistory.bind(this),
                    reportSpamFunc: this._reportSpamClicked.bind(this),
                    createGroupFunc: this._createGroupClicked.bind(this),
                    switchToWorkFunc: this._switchToWorkUserClicked.bind(this),
                    isMultichat: je,
                    isEmptyChat: ke,
                    showAddFriend: le,
                    threadID: this._threadID,
                    attachmentsShelf: he,
                    onUploadFinished: ae.bind(this, this),
                    onUpdateAttachmentsShelf: be.bind(this, this),
                    onSubmit: this._focusInput.bind(this),
                    enableDesktopNotif: function() {
                        this._enableDesktopNotif();
                    }.bind(this)
                }), ie);
        },
        _initializeArchiveWarning: function() {
            if (r.get('chat_react_header'))
                this._archiveWarning = sb.render(sb.createElement(o, {
                    isFBAtWork: r.IsWorkUser,
                    shown: true
                }), this._getNode('archiveContainer'));
        },
        _initializeAddToThreadButton: function() {
            if (r.get('chat_react_header')) {
                this._addToThreadButton = sb.render(sb.createElement(n, {
                    onClick: this._addFriendLinkClicked.bind(this),
                    shown: true
                }), this._getNode('addToThreadContainer'));
            } else 
                this._listen('addToThreadLink', 'click', this._addFriendLinkClicked, true);
        },
        _initializeVideoCallButton: function() {
            if (!db.getUserIDFromThreadID(this._threadID))
                return;
            var he = null;
            if (r.get('chat_react_header')) {
                this._videoCallButton = sb.render(sb.createElement(ha, {
                    shown: true,
                    onClick: this._callClicked.bind(this),
                    onKeyUp: this._callEnter.bind(this)
                }), this._getNode('videoCallButtonContainer'));
                he = this._videoCallButton.getDOMNode();
            } else {
                he = this._getNode('videoCallLink');
                this._listen('videoCallLink', 'click', this._callClicked, true);
                this._listen('videoCallLink', 'keyup', this._callEnter, true);
            }
            this._contextualDialogController = new s(this._threadID, he);
        },
        _initializeCloseButton: function() {
            if (r.get('chat_react_header')) {
                this._closeButton = sb.render(sb.createElement(q, {
                    onClick: this._closeClicked.bind(this),
                    onKeyUp: this._closeEnter.bind(this),
                    onMouseDown: this._closePreClicked.bind(this)
                }), this._getNode('closeButtonContainer'));
            } else {
                this._listen('titlebarCloseButton', 'click', this._closeClicked);
                this._listen('titlebarCloseButton', 'keyup', this._closeEnter);
                this._listen('titlebarCloseButton', 'mousedown', this._closePreClicked);
            }
        },
        _initializeTitle: function() {
            if (r.get('chat_react_header')) {
                var he = fd.getThreadMetaNow(this._threadID);
                this._title = sb.render(sb.createElement(fa, {
                    isNewThread: fd.isNewEmptyLocalThread(this._threadID),
                    thread: he,
                    viewer: ka.getID()
                }), this._getNode('titleContainer'));
            }
        },
        setFileUploader: function(he) {
            this._fileUploader = he;
        },
        _initializeAutoSendPhotoUploader: function() {
            this._photoUploader = sb.render(sb.createElement(v, {
                onSubmit: this._handlePUSubmit.bind(this),
                onAllUploadsComplete: this._handlePUAllUploadsCompleted.bind(this),
                onLastUploadFail: this._handlePULastUploadFailed.bind(this),
                onLastUploadCancel: this._handlePULastUploadCanceled.bind(this)
            }), this._getNode('photoUploaderContainer'));
        },
        _handlePUSubmit: function(he, ie) {
            ce(this, pb.UPLOAD_START, ie);
            vd(this, '', [], function(je) {
                if (this._threadID !== je.thread_id) {
                    this._newThreadIDFromPhotoUpload = je.thread_id;
                    if (this._messagesView)
                        this._messagesView.setNewThreadID(je.thread_id);
                }
                je.content_attachment = null;
                ad.sendPendingUploadStartedMessage(je, ie.upload_id, ie);
            }.bind(this));
            ge('submit', ie);
            this._focusInput();
        },
        _handlePULastUploadFailed: function(he, ie) {
            ce(this, pb.CLIENT_ERROR, ie);
            ge('failed', ie);
            ad.cancelPendingUploadStartedMessage(ie.upload_id, ie);
            var je = "Photo Upload Failed", ke = "Please try again. Make sure you are uploading a valid photo.";
            new na().setTitle(je).setBody(ke).setButtons(na.OK).show();
        },
        _handlePULastUploadCanceled: function(he, ie) {
            ce(this, pb.CANCEL_DURING_UPLOAD, ie);
            ge('canceled', ie);
            ad.cancelPendingUploadStartedMessage(ie.upload_id, ie);
        },
        _handlePUAllUploadsCompleted: function(he, ie) {
            ce(this, pb.ALL_UPLOADS_DONE, ie);
            ge('completed', ie);
            ad.confirmPendingUploadStartedMessage(ie.upload_id, ie);
            var je = ie.image_ids.length || ie.attachments.length;
            ud(this, je);
        },
        _stickerSelected: function(he) {
            vd(this, '', [], function(ie) {
                ie.has_attachment = true;
                ie.sticker_id = he;
                ad.sendMessage(ie);
                this.focus();
            }.bind(this));
            this._messagesView && this._messagesView.scrollToBottom();
        },
        _emoticonSelected: function(he) {
            var ie = ta.symbols[he];
            if (!ie)
                return;
            if (r.get('chat_react_input')) {
                this._chatInput.insertEmoticon(ie);
                return;
            }
            this._selectionPosition = this._selectionPosition || new ub(this._getNode('input'));
            var je = fc.getInstance(this._getNode('input')), ke = je.getValue(), le = ua.insertEmoticon(ie, ke, this._selectionPosition.getPos());
            je.setValue(le.result);
            this._selectionPosition.setPos(le.start, le.end);
        },
        _clearStickerSearchNUXIndicator: function() {
            la.removeClass(this._getNode('emoticonIndicator'), 'nux');
        },
        _orionTriggered: function() {
            vd(this, '', [], function(he) {
                this.focus();
            }.bind(this));
            this._messagesView && this._messagesView.scrollToBottom();
        },
        _addStickerSearchNUXIndicator: function() {
            la.addClass(this._getNode('emoticonIndicator'), 'nux');
            jd = false;
        },
        _clearStickerSearchNUXTooltip: function() {
            this._stickerSearchNUXTooltip && this._stickerSearchNUXTooltip.hideNUX();
        },
        _onFlyoutShown: function(he) {
            if (r.get('chat_react_sticker_button')) {
                var ie = this._stickersFlyout.props.packID;
                if (ie !== xb.SEARCH_PACK_ID)
                    this.focus();
            }
            if (wb.WebStickerTrigger) {
                this._stickerTriggerController.onFlyoutShown(he);
            } else 
                he();
            this._stickersFlyoutShown = true;
        },
        _searchStickers: function(he, ie) {
            this._stickersFlyout.isMounted() && this._stickersFlyout.setProps({
                packID: xb.SEARCH_PACK_ID,
                trigger: he
            }, ie);
        },
        _onFlyoutHidden: function() {
            this._stickersFlyoutShown = false;
            this.focus();
        },
        _setTitleHref: function(he) {
            if (r.get('chat_react_header')) {
                this._title.isMounted() && this._title.setProps({
                    href: he
                });
            } else {
                var ie = this._getNode('titlebarText');
                ie.setAttribute('href', he);
                ie.removeAttribute('rel');
                la.removeClass(ie, 'noLink');
            }
        }
    });
    function ge(he, ie) {
        ld.debug('photo_uploader:' + he, Object.assign({}, ie));
    }
    e.exports = de;
}, null);
__d("MercuryNotificationRenderer", ["MercuryAssert", "MercuryParticipants", "MercuryViewer", "tx", "MercuryMessages", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = b('MercuryMessages').get(), l = b('MercuryThreads').get();
    function m(n, o) {
        g.isThreadID(n);
        l.getThreadMeta(n, function(p) {
            k.getThreadMessagesRange(n, 0, 1, function(q) {
                var r = q.length && q[q.length - 1];
                if (r && r.author != i.getID()) {
                    h.get(r.author, function(s) {
                        if (p.name) {
                            o(j._("{senderName} messaged {groupName}", {
                                senderName: s.short_name,
                                groupName: p.name
                            }));
                        } else 
                            o(j._("{name} messaged you", {
                                name: s.short_name
                            }));
                    });
                } else 
                    o("New message!");
            });
        });
    }
    e.exports = {
        renderDocumentTitle: m
    };
}, null);
__d("ChatTitleBarBlinker", ["ChatActivity", "DocumentTitle", "JSLogger", "MercuryNotificationRenderer", "PresenceState", "MercuryThreadInformer", "MercuryTimestampTracker"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = b('MercuryThreadInformer').get(), m = b('MercuryTimestampTracker').get(), n = i.create('chat_title'), o = null, p = 0, q = false;
    function r() {
        if (o) {
            o.stop();
            o = null;
            return true;
        }
        return false;
    }
    function s(x) {
        var y = x || m.getLastUserMessageTimestamp();
        if (p <= y) {
            p = y;
            if (r() || q)
                k.doSync();
        }
    }
    var t = {
        blink: function(x, y) {
            if (!o && p < y)
                j.renderDocumentTitle(x, function(z) {
                    if (!o)
                        o = h.blink(z);
                    });
        },
        stopBlinking: function() {
            s();
        },
        blinkingElsewhere: function() {
            q = true;
        }
    };
    function u(x) {
        var y = k.verifyNumber(x.sb2);
        if (!y || y <= p)
            return null;
        return y;
    }
    function v(x) {
        var y = x && u(x);
        if (y) {
            p = y;
            n.debug('load', p);
            r();
            q = false;
        }
    }
    function w(x) {
        var y = u(x);
        if (!y) {
            n.debug('store', p);
            x.sb2 = p;
            q = false;
        }
        return x;
    }
    k.registerStateStorer(w);
    k.registerStateLoader(v);
    l.subscribe('thread-read-changed', function(x, y) {
        var z = m.getLastUserMessageTimestamp(), aa = 0;
        for (var ba in y)
            if (y[ba].mark_as_read && y[ba].timestamp >= z && y[ba].timestamp > aa)
                aa = y[ba].timestamp;
        aa && s(aa);
    });
    g.subscribe('activity', function() {
        s();
    });
    (function() {
        var x = k.getInitial();
        if (x)
            p = u(x) || 0;
    })();
    e.exports = t;
}, null);
__d("ChatNewMessageHandler", ["ArbiterMixin", "ChatActivity", "ChatMentionsNotifications", "ChatTabModel", "ChatTabView", "JSLogger", "MercuryAssert", "MercuryBrowserAlerts", "UserActivity", "MercuryConfig", "MercuryThreadlistConstants", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = l.create('chat_new_message'), t = {
        _raiseNewMessageTab: function(u, v) {
            var w = j.getTab(u), x = false;
            if (w) {
                x = w.raised;
            } else 
                x = true;
            t.inform('chat/new-message-from-server', {
                thread_id: u
            });
            v.to_new_tab=!w;
            v.to_raised_tab=!!x;
        },
        _notify: function(u, v, w) {
            if (p.DesktopNotificationsGK)
                i.notifyIfMessageToMe(v);
            var x = k.get(u);
            w.view_is_visible = x && x.isVisible();
            w.view_is_focused = x && x.isFocused();
            if (!w.view_is_visible)
                s.log('message_to_hidden');
            w.is_active = h.isActive();
            n.messageReceived(v);
        },
        newMessage: function(u, v, w) {
            m.isThreadID(u);
            var x = {
                thread_id: u,
                message_id: v.message_id
            };
            this._raiseNewMessageTab(u, x);
            this._notify(u, v, x);
            s.log('message', x);
        }
    };
    r(t, g);
    n.subscribe('before-alert', function(u, event) {
        var v = event.threadID, w = k.get(v), x = j.getTab(v), y = q.MESSAGE_NOTICE_INACTIVITY_THRESHOLD;
        if (x && x.raised && w && w.isVisible() && w.isFocused() && o.isActive(y)) {
            w.tryMarkAsRead();
            event.cancelAlert();
        }
    });
    e.exports = t;
}, null);
__d("ChatTabLRUManager", ["ChatTabView", "ChatTabModel", "MercuryThreads"], function(a, b, c, d, e, f, g, h) {
    var i = b('MercuryThreads').get(), j = {
        getLRUVisibleTab: function(k) {
            if (k.hasRoomForRaisedTab())
                return undefined;
            var l = Object.keys(k.getTabsToShow() || {}), m = 1 * 60, n = null, o = Infinity;
            for (var p = 0; p < l.length; p++) {
                var q = l[p], r = i.getThreadMetaNow(q);
                if (h.isTabPromoted(q))
                    continue;
                if (!g.get(q).hasEmptyInput() ||!r)
                    continue;
                var s = (h.getServerTime() - r.timestamp) / 1000;
                if (!r.timestamp || (r.timestamp && r.timestamp < o && s > m)) {
                    n = r.thread_id;
                    o = r.timestamp;
                }
            }
            return n;
        }
    };
    e.exports = j;
}, null);
__d("ChatTabPolicy", ["ChatBehavior", "JSLogger", "MercuryActionTypeConstants", "MercuryLogMessageType", "MercuryAssert", "MercuryIDs", "MercuryParticipantTypes", "MercurySourceType", "MercuryThreadMode", "MercuryThreadMuter", "MercuryViewer", "MessagingTag", "PresencePrivacy", "ShortProfiles", "MercuryUnseenState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = b('MercuryUnseenState').get(), v = h.create('tab_policy');
    function w(x, y) {
        u.markThreadSeen(x, y);
    }
    e.exports = {
        messageIsAllowed: function(x, y, z) {
            var aa = x.thread_id, ba = y.message_id;
            k.isThreadID(aa);
            k.isParticipantID(y.author);
            var ca;
            if (p.isThreadMuted(x)) {
                ca = {
                    thread_id: aa,
                    message_id: ba,
                    mute_settings: x.mute_settings
                };
                v.log('message_thread_muted', ca);
                return;
            }
            if (x.mode == o.OBJECT_ORIGINATED) {
                ca = {
                    thread_id: aa,
                    message_id: ba,
                    mode: x.mode
                };
                v.log('message_object_originated', ca);
                return;
            }
            if (y.source == n.EMAIL || y.source == n.TITAN_EMAIL_REPLY) {
                ca = {
                    thread_id: aa,
                    message_id: ba,
                    source: y.source
                };
                v.log('message_source_not_allowed', ca);
                return;
            }
            var da = l.getUserIDFromParticipantID(y.author);
            if (!da) {
                v.log('message_bad_author', {
                    thread_id: aa,
                    message_id: ba,
                    user: da
                });
                return;
            }
            if (y.action_type != i.USER_GENERATED_MESSAGE&&!this._messageIsNewlyCreatedGroup(y, x)) {
                ca = {
                    thread_id: aa,
                    message_id: ba,
                    type: y.action_type
                };
                v.log('message_non_user_generated', ca);
                return;
            }
            if (x.is_canonical_user&&!g.notifiesUserMessages()) {
                v.log('message_jabber', {
                    thread_id: aa,
                    message_id: ba
                });
                w(aa, true);
                return;
            }
            if (x.is_canonical&&!x.canonical_fbid) {
                v.log('message_canonical_contact', {
                    thread_id: aa,
                    message_id: ba
                });
                return;
            }
            if (x.folder != r.INBOX) {
                v.log('message_folder', {
                    thread_id: aa,
                    message_id: ba,
                    folder: x.folder
                });
                return;
            }
            var ea = l.getUserIDFromParticipantID(q.getID());
            t.getMulti([da, ea], function(fa) {
                if (!s.allows(da)) {
                    v.log('message_privacy', {
                        thread_id: aa,
                        message_id: ba,
                        user: da
                    });
                    return;
                }
                var ga = fa[da].employee && fa[ea].employee;
                if (!ga && fa[da].type !== m.FRIEND) {
                    v.log('message_non_friend', {
                        thread_id: aa,
                        message_id: ba,
                        user: da
                    });
                    return;
                }
                z();
            });
        },
        _messageIsNewlyCreatedGroup: function(x, y) {
            return x.action_type === i.LOG_MESSAGE && x.log_message_type === j.THREAD_NAME && y.message_count === 1;
        }
    };
}, null);
__d("ChatTabViewSelector", ["Event", "Arbiter", "CSS", "DataStore", "DOM", "MenuDeprecated", "NubController", "ChatTabTemplates", "Toggler", "copyProperties", "MercuryThreadInformer", "MercuryThreads", "MercuryThreadMetadataRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = b('MercuryThreadInformer').get(), r = b('MercuryThreads').get(), s = b('MercuryThreadMetadataRenderer').get();
    function t(u) {
        var v = n[':fb:chat:tab:selector'].build(), w = v.getRoot(), x = v.getNode('menu'), y = k.find(x, '.uiMenuInner'), z = {}, aa = new m().init(w);
        i.hide(w);
        k.insertBefore(u, w);
        function ba(ea) {
            var fa = 0;
            for (var ga in z) {
                var ha = z[ga], ia = r.getThreadMetaNow(ga), ja = ha.getNode('unreadCount'), ka = (ia && ia.unread_count) || 0;
                fa += ka;
                if (ka > 9)
                    ka = '+';
                i.conditionClass(ja, 'invisible_elem', !ka);
                k.setContent(ja, ka);
            }
            var la = v.getNode('numMessages');
            i.conditionShow(la, fa);
            k.setContent(la, fa);
        }
        this.setTabData = function(ea) {
            z = {};
            if (ea.length < 1) {
                i.hide(w);
                return;
            }
            i.show(w);
            k.empty(y);
            ea.forEach(function(fa) {
                var ga = n[':fb:chat:tab:selector:item'].build();
                z[fa.id] = ga;
                var ha = ga.getNode('content');
                s.renderAndSeparatedParticipantList(fa.id, ha);
                k.prependContent(y, ga.getRoot());
                j.set(ga.getRoot(), 'threadID', fa.id);
                var ia = ga.getNode('closeButton');
                g.listen(ia, 'click', function(event) {
                    t.inform('selector/close-tab', fa.id);
                    event.kill();
                });
            });
            aa.flyoutContentChanged();
            k.setContent(v.getNode('numTabs'), ea.length);
            ba();
        };
        function ca(event, ea) {
            if (ea.menu != x)
                return;
            var fa = j.get(ea.item, 'threadID');
            t.inform('selected', fa);
            o.hide(w);
        }
        function da(event, ea) {
            l.register(x);
        }
        l.subscribe('select', ca.bind(this));
        o.listen('show', w, function() {
            h.inform('layer_shown', {
                type: 'ChatTabSelector'
            });
            da();
        });
        o.listen('hide', w, function() {
            h.inform('layer_hidden', {
                type: 'ChatTabSelector'
            });
        });
        q.subscribe('threads-updated', ba);
    }
    p(t, new h());
    e.exports = t;
}, null);
__d("ChatTabController", ["Arbiter", "ChatActivity", "ChatConfig", "ChatNewMessageHandler", "ChatTabLRUManager", "ChatTabMessagesView", "ChatTabModel", "ChatTabPolicy", "ChatTabView", "ChatTabViewSelector", "JSLogger", "MercuryConfig", "MercuryIDs", "MercuryParticipants", "MercuryViewer", "StickerState", "Style", "UserAgent_DEPRECATED", "VideoCallCore", "ChatTabPresence", "ChatTypeaheadBehavior", "MercuryThreadInformer", "MercuryThreadActions", "MercuryThreads", "MercuryUnseenState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    b('ChatTabPresence');
    b('ChatTypeaheadBehavior');
    var z = b('MercuryThreadInformer').get(), aa = b('MercuryThreadActions').get(), ba = b('MercuryThreads').get(), ca = b('MercuryUnseenState').get(), da = i.get('tab_auto_close_timeout') || 7200000, ea = q.create('tab_controller');
    function fa(ta) {
        aa.markRead(ta);
        ga(ta);
    }
    function ga(ta) {
        ca.markThreadSeen(ta);
    }
    function ha(ta, ua, va) {
        var wa = m.get().tabs;
        ta += ua ? 1 : - 1;
        while (ta >= 0 && ta < wa.length) {
            var xa = wa[ta], ya = o.get(xa.id);
            if (ya && ya.isVisible() && (!va || xa.raised)) {
                ya.focus();
                return true;
            }
            ta += ua ? 1 : - 1;
        }
        return false;
    }
    function ia(ta, ua) {
        var va = ua && ua.getRightmostHiddenTab();
        if (va === ta)
            return null;
        return va;
    }
    function ja() {
        return Math.floor(Math.random() * 2147483648).toString(16);
    }
    function ka(ta, ua, va, wa) {
        m.raiseTab(ta, true, va);
        var xa = ua && ua.getLeftmostVisibleTab(), ya = ua && ua.getTabsToShow();
        if (ya&&!ya[ta] && xa) {
            m.promoteThreadInPlaceOfThread(ta, xa, ia(ta, ua), true);
        } else 
            m.setPromotedTab(ta);
        g.inform('chat/open-tab', ta);
        var za = o.get(ta);
        za && za.focus();
    }
    function la(ta, ua, va) {
        var wa = va.forceDrop();
        if (!m.getTab(ta))
            m.raiseTab(ta, false);
        if (wa)
            return;
        var xa = ua && k.getLRUVisibleTab(ua), ya = ua && ua.getTabsToShow();
        if (ya&&!ya[ta] && xa)
            m.promoteThreadInPlaceOfThread(ta, xa, ia(ta, ua));
    }
    function ma(ta, ua) {
        var va = m.indexOf(ta);
        m.closeTab(ta, ua);
        return va;
    }
    function na(ta, ua) {
        j.subscribe('chat/new-message-from-server', function(db, eb) {
            la(eb.thread_id, ta, ua);
        });
        p.subscribe('selected', function(db, eb) {
            ka(eb, ta);
        });
        g.subscribe('chat/tabs-order-changed', function(db, eb) {
            m.changeShowingTabs(eb);
        });
        g.subscribe('page_transition', function(db, eb) {
            m.closeFragileTabs();
        });
        g.subscribe('chat/close-all-tabs', function() {
            m.closeAllTabs();
        });
        g.subscribe('chat-visibility/go-offline', function() {
            m.closeAllTabs();
        });
        g.subscribe('chat/close-tab', function(db, eb, fb) {
            m.closeTab(eb, fb);
        });
        o.subscribe('read', function(event, db) {
            fa(db);
        });
        h.subscribe('idle', function(db, eb) {
            if (eb > da) {
                var fb = m.get().tabs;
                fb.forEach(function(gb) {
                    var hb = gb.id;
                    ba.getThreadMeta(hb, function(ib) {
                        if (!ib.unread_count) {
                            ea.log('autoclose_idle_seen', {
                                thread_id: hb,
                                idleness: eb
                            });
                            m.closeTab(hb, 'autoclose_idle_seen');
                        }
                    });
                });
            }
        });
        o.subscribe('nub-activated', function(db, eb) {
            ka(eb, ta);
        });
        o.subscribe('lower-activated', function(db, eb) {
            m.lowerTab(eb);
            var fb = o.get(eb);
            fb && fb.focus();
        });
        o.subscribe('focus-tab', function(db, eb) {
            var fb = m.getTab(eb);
            if (fb && fb.raised)
                ka(eb, ta, fb.signatureID, true);
        });
        function va(db, eb) {
            y.showOutgoingCallDialog(eb.userID, eb.clickSource);
        }
        o.subscribe('video-call-clicked', va);
        l.subscribe('video-call-clicked', va);
        l.subscribe('interaction-with-tab', function(db, eb) {
            var fb = m.getTab(eb);
            fb && fb.raised && ga(eb);
        });
        o.subscribe('closed-tab', function(db, eb) {
            ea.log('close_view', {
                thread_id: eb
            });
            ma(eb, 'close_view');
            return false;
        });
        o.subscribe('thread-deleted', function(db, eb) {
            ea.log('close_thread_deleted', {
                thread_id: eb
            });
            ma(eb, 'close_thread_deleted');
            return false;
        });
        o.subscribe('unsubscribed', function(db, eb) {
            ea.log('close_view_unsubscribed', {
                thread_id: eb
            });
            ma(eb, 'close_view_unsubscribed');
            return false;
        });
        o.subscribe('esc-pressed', function(db, eb) {
            ea.log('close_esc', {
                thread_id: eb
            });
            var fb = ma(eb, 'close_esc');
            setTimeout(function() {
                ha(fb - 1, true, true) || ha(fb, false, true);
            }, 0);
        });
        p.subscribe('selector/close-tab', function(db, eb) {
            ea.log('close_chat_from_selector', {
                thread_id: eb
            });
            ma(eb, 'close_chat_from_selector');
        });
        z.subscribe('messages-received', function(db, eb) {
            for (var fb in eb) {
                var gb = eb[fb];
                for (var hb = 0; hb < gb.length; hb++) {
                    var ib = gb[hb];
                    if (ib.author != u.getID()) {
                        if (!ib.is_unread) {
                            ea.log('message_already_read', {
                                action_id: ib.action_id,
                                thread_id: ib.thread_id
                            });
                            continue;
                        }
                        ba.getThreadMeta(fb, function(jb) {
                            n.messageIsAllowed(jb, ib, function() {
                                j.newMessage(fb, ib, ta);
                            });
                        });
                    }
                }
            }
        });
        z.subscribe('thread-read-changed', function(db, eb) {
            for (var fb in eb)
                if (!eb[fb].mark_as_read) {
                    ea.log('autoclose_marked_unread', {
                        thread_id: fb
                    });
                    m.closeTab(fb, 'autoclose_marked_unread');
                }
        });
        o.subscribe('tab-pressed', function(db, eb) {
            return !ha(m.indexOf(eb.id), eb.shiftPressed);
        });
        g.subscribe(q.DUMP_EVENT, function(db, eb) {
            eb.chat_controller = {
                auto_close_timeout: da
            };
        });
        this.openTab = function(db, eb) {
            ka(db, eb, ja());
        };
        var wa, xa, ya = [], za = [], ab = [], bb;
        if (v.shouldShowStickerSearchNUXTooltip()) {
            wa = ta.getRightmostRaisedTab();
            if (wa) {
                bb = o.get(wa);
                bb.showStickerSearchNUXTooltip();
            } else 
                g.subscribeOnce('chat/open-tab', function(db, eb) {
                    bb = o.get(eb);
                    bb.showStickerSearchNUXTooltip();
                });
        } else if (r.ShowOrionNUXTooltip) {
            ya = ta.getRaisedVisibleTabs();
            for (var cb = 0; cb < ya.length; cb++) {
                xa = o.get(ya[cb]);
                if (xa.isOrionNUXEligible())
                    za.push(xa);
            }
            if (za.length) {
                ab = za.map(function(db) {
                    return db.getParticipantIDForOrionNUX();
                });
                t.getMulti(ab, function(db) {
                    for (var eb in db)
                        if (db[eb].orion_eligible) {
                            bb = za.filter(function(fb) {
                                return fb._getCanonicalUserID() === s.getUserIDFromParticipantID(db[eb].id);
                            })[0];
                            break;
                        }
                    if (bb)
                        bb.showOrionNUXTooltip();
                });
            }
        }
    }
    if (x.firefox()) {
        var oa = function() {
            return w.get(document.body, 'overflowX') + ' ' + w.get(document.body, 'overflowY');
        }, pa = oa(), qa = function() {
            var ta = oa();
            if (ta !== pa) {
                pa = ta;
                g.inform('overflow-applied-to-body');
            }
        };
        if ('MutationObserver' in window) {
            var ra = new MutationObserver(qa), sa = {
                attributes: true,
                attributeFilter: ['class', 'style']
            };
            ra.observe(document.documentElement, sa);
        } else 
            document.documentElement.addEventListener('DOMAttrModified', function(event) {
                if (event.getTarget() === document.documentElement && (event.attrName === 'class' || event.attrName === 'style'))
                    qa();
                }, false);
    }
    e.exports = na;
}, null);
__d("ChatTabViewCoordinator", ["Arbiter", "BanzaiODS", "Bootloader", "ChatTabModel", "ChatTabView", "ChatTabViewSelector", "CSS", "JSLogger", "Style", "Rect", "VideoCallSupport", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = n.create('chat_tab_coordinator'), t, u;
    function v(w, x) {
        var y = new l(w), z = {}, aa = {}, ba = false;
        function ca() {
            var oa = j.get(), pa = {};
            oa.tabs.forEach(function(ra) {
                pa[ra.id] = 1;
            });
            s.log('process_tab_changed', {
                model_tabs: Object.keys(pa),
                view_tabs: Object.keys(z)
            });
            for (var qa in z)
                if (!pa[qa]) {
                    s.log('remove_tab', {
                        tab_id: qa
                    });
                    z[qa].destroy();
                    delete (z[qa]);
                }
            da(oa);
            ma(oa);
            if (oa.tabNeedsFocus&&!oa.tabNeedsFocus.isFocused())
                oa.tabNeedsFocus.focus();
        }
        function da(oa) {
            var pa = null;
            oa.tabs.forEach(function(qa) {
                var ra = qa.id, sa = false;
                if (!z[ra]) {
                    s.log('add_tab', {
                        tab_id: ra
                    });
                    z[ra] = new k(ra, qa.server_id, qa.signatureID, w, pa);
                    sa = true;
                } else 
                    z[ra].updateSignatureID(qa.signatureID);
                if (z[ra].isFocused())
                    oa.tabNeedsFocus = z[ra];
                if (!sa&&!z[ra].nextTabIs(pa)) {
                    var ta = z[ra].getScrollTop();
                    if (pa) {
                        z[ra].insertBefore(pa);
                    } else 
                        z[ra].appendTo(w);
                    if (ta)
                        z[ra].setScrollTop(ta);
                }
                pa = z[ra];
            });
        }
        function ea() {
            var oa = x.getShowingTabsOrder();
            if (!oa ||!oa.length)
                return;
            var pa = z[oa[0].id]._tabElem, qa = z[oa[oa.length - 1].id]._tabElem, ra = parseInt(o.get(qa, 'margin-left'), 10) || 0, sa = p.getElementBounds(qa).l - 2 * ra;
            sa = sa > 0 ? sa : 0;
            t && t.setBoundingBox(new p(0, p.getElementBounds(pa).r, 0, sa));
        }
        function fa(oa, pa) {
            var qa = false;
            pa.forEach(function(ta) {
                if (ta.raised) {
                    if (aa[ta.id]) {
                        qa = true;
                        delete aa[ta.id];
                    }
                } else if (!aa[ta.id]) {
                    qa = true;
                    aa[ta.id] = true;
                }
            });
            if (qa)
                return true;
            if (!t)
                return true;
            var ra = ga() || [];
            if (ra.length !== oa.length)
                return true;
            for (var sa = 0; sa < oa.length; sa++)
                if (ra[sa] !== oa[sa].id)
                    return true;
            return false;
        }
        function ga() {
            var oa = t && t.getOrder();
            oa && oa.reverse();
            return oa;
        }
        function ha() {
            var oa = ga();
            if (oa) {
                h.bumpEntityKey('chat.web', 'tab.drag_order_changed');
                g.inform('chat/tabs-order-changed', oa);
            }
        }
        function ia(oa, pa, qa) {
            if (z[qa]._scrollTop != null)
                z[qa].setScrollTop(z[qa]._scrollTop);
        }
        function ja(oa, pa) {
            u = pa;
            z[pa]._isDragDropActive = true;
            z[pa]._scrollTop = z[pa].getScrollTop();
            o.set(z[pa]._tabElem, 'z-index', 1);
            ea();
            h.bumpEntityKey('chat.web', 'tab.drag_started');
        }
        function ka(oa) {
            o.set(z[oa]._tabElem, 'z-index', '');
            if (z[oa]._scrollTop != null)
                z[oa].setScrollTop(z[oa]._scrollTop);
            z[oa]._scrollTop = null;
            u = null;
            setTimeout(function() {
                z[oa]._isDragDropActive = false;
            }, 0);
        }
        function la(oa) {
            i.loadModules(["SortableGroup"], function(pa) {
                var qa = x.getShowingTabsOrder(), ra = fa(qa, oa);
                if (qa.length <= 1) {
                    t && t.removeAllSortables();
                    return;
                }
                if (ra) {
                    if (t) {
                        t.removeAllSortables();
                    } else 
                        t = new pa().setBeforeGrabCallback(ja).setDragOverCallback(ia).setDropCallback(ka).setOrderChangeHandler(ha).setUseScroller(false).setDragOverHorizontally();
                    for (var sa = 0; sa < qa.length; sa++) {
                        var ta = qa[sa];
                        t.addSortable(ta.id, z[ta.id]._tabElem, aa[ta.id] ? null : z[ta.id]._titlebar);
                    }
                }
            });
        }
        function ma(oa) {
            var pa = x.getTabsToShow(oa), qa = [], ra = false;
            oa.tabs.forEach(function(sa) {
                if (!pa[sa.id]) {
                    z[sa.id].setVisibleState(false, sa.raised);
                    qa.push(sa);
                }
            });
            oa.tabs.forEach(function(sa) {
                if (pa[sa.id]) {
                    z[sa.id].setVisibleState(true, sa.raised);
                    ra|=sa.raised;
                }
            });
            y.setTabData(qa);
            na(ra);
            la(oa.tabs);
        }
        function na(oa) {
            if (!oa && ba) {
                g.inform('layer_hidden', {
                    type: 'ChatTab'
                });
                ba = false;
            } else if (oa&&!ba) {
                g.inform('layer_shown', {
                    type: 'ChatTab'
                });
                ba = true;
            }
        }
        if (q.isVideoCallSupported())
            m.addClass(w, 'videoCallEnabled');
        x.subscribe('tabs-changed', ca);
        ca();
    }
    r(v.prototype, {
        forceDrop: function() {
            if (t && u) {
                t.forceDrop(u);
                u = null;
                return true;
            }
            return false;
        }
    });
    e.exports = v;
}, null);
__d("MercuryStateCheck", ["Arbiter", "ChannelConstants", "MercuryFolders", "MessagingTag", "URI", "copyProperties", "MercuryServerRequests"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = b('MercuryServerRequests').get(), n = l(new g(), {
        initialize: function() {
            g.subscribe(h.ON_INVALID_HISTORY, o);
            d(['ChannelConnection'], function(p) {
                p.subscribe(p.CONNECTED, function(q, r) {
                    if (!r.init)
                        o();
                });
            });
        }
    });
    function o() {
        var p;
        if (k.getRequestURI().getPath().search(/messages/)!==-1) {
            p = i.getSupportedFolders();
        } else 
            p = [j.INBOX];
        m.fetchMissedMessages(p);
    }
    n.initialize();
    e.exports = n;
}, null);
__d("ChatApp", ["CSS", "JSLogger"], function(a, b, c, d, e, f, g, h) {
    var i = {
        init: function(j, k, l) {
            if (this._isInitialized) {
                h.create('chat_app').error('repeated_init');
                return;
            }
            this._rootElem = j;
            d(['TabsViewport', 'ChatTabController', 'ChatTabViewCoordinator', 'MercuryServerRequests', 'MercuryChannelHandler', 'MercuryStateCheck'], function(m, n, o, p, q, r) {
                q = q.get();
                q.turnOn();
                p.get().handleUpdate(l);
                this.tabsViewport = new m(k);
                this.tabViewCoordinator = new o(k, this.tabsViewport);
                this.tabController = new n(this.tabsViewport, this.tabViewCoordinator);
                this._isInitialized = this._isLoaded = true;
            }.bind(this));
        },
        isInitialized: function() {
            return !!this._isInitialized;
        },
        isHidden: function() {
            return !this._isInitialized || this._isHidden;
        },
        hide: function() {
            if (this.isHidden())
                return;
            g.hide(this._rootElem);
            this._isHidden = true;
        },
        unhide: function() {
            if (this._isInitialized) {
                if (this._isHidden) {
                    g.show(this._rootElem);
                    this.tabsViewport.checkWidth();
                    d(['Dock'], function(j) {
                        j.resizeAllFlyouts();
                    });
                    this._isHidden = false;
                }
            } else if (!this._isLoaded) {
                d(['UIPagelet'], function(j) {
                    j.loadFromEndpoint('ChatTabsPagelet', 'ChatTabsPagelet');
                    j.loadFromEndpoint('BuddylistPagelet', 'BuddylistPagelet');
                });
                this._isLoaded = true;
            }
        }
    };
    e.exports = i;
}, null);
__d("legacy:CompactTypeaheadRenderer", ["CompactTypeaheadRenderer"], function(a, b, c, d) {
    if (!a.TypeaheadRenderers)
        a.TypeaheadRenderers = {};
    a.TypeaheadRenderers.compact = b('CompactTypeaheadRenderer');
}, 3);
