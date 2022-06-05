/*!CK:4108922453!*/
/*1415600700,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Z059x"]);
}

__d("AccessibleLayer", ["DOM", "Event", "Focus", "tx"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this._layer = l;
    }
    k.prototype.enable = function() {
        "use strict";
        this._afterShowSubscription = this._layer.subscribe('aftershow', this._onAfterShow.bind(this));
    };
    k.prototype.disable = function() {
        "use strict";
        this._listener && this._listener.remove();
        this._afterShowSubscription.unsubscribe();
        this._listener = this._afterShowSubscription = null;
    };
    k.prototype._closeListener = function(event) {
        "use strict";
        var l = this._layer.getCausalElement();
        if (l)
            if (l.tabIndex==-1) {
                l.tabIndex = 0;
                i.setWithoutOutline(l);
            } else 
                i.set(l);
        this._layer.hide();
    };
    k.prototype._onAfterShow = function() {
        "use strict";
        var l = this._layer.getContentRoot();
        if (g.scry(l, '.layer_close_elem')[0])
            return;
        var m = g.create('a', {
            className: 'accessible_elem layer_close_elem',
            href: '#'
        }, ["Close popup and return"]);
        g.appendContent(l, m);
        this._listener = h.listen(m, 'click', this._closeListener.bind(this));
    };
    e.exports = k;
}, null);
__d("ContextualDialogArrow", ["CSS", "DOM", "JSXDOM", "Locale", "Style", "Vector", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = {
        bottom: "_53ik",
        top: "_53il",
        right: "_53im",
        left: "_53in"
    }, p = {
        above: 'bottom',
        below: 'top',
        left: 'right',
        right: 'left'
    };
    function q(r) {
        "use strict";
        this._layer = r;
    }
    q.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe(['adjust', 'reposition'], this._handle.bind(this));
        g.addClass(this._layer.getContentRoot(), "_5v-0");
    };
    q.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
        g.removeClass(this._layer.getContentRoot(), "_5v-0");
    };
    q.prototype._handle = function(r, s) {
        "use strict";
        if (r === 'adjust') {
            this._repositionArrow(s);
        } else 
            this._repositionRoot(s);
    };
    q.prototype._repositionRoot = function(r) {
        "use strict";
        var s = r.getAlignment();
        if (s == 'center')
            return;
        var t = this._layer.getRoot(), u = this._layer.getContext(), v = r.isVertical(), w = this._layer.getArrowDimensions(), x = w.offset, y = w.length, z = l.getElementDimensions(u), aa = v ? z.x: z.y;
        if (aa >= y + (x * 2))
            return;
        var ba = (y / 2) + x, ca = aa / 2, da = parseInt(ba - ca, 10);
        if (v) {
            if (s == 'left') {
                var ea = parseInt(k.get(t, 'left'), 10);
                k.set(t, 'left', (ea - da) + 'px');
            } else {
                var fa = parseInt(k.get(t, 'right'), 10);
                k.set(t, 'right', (fa - da) + 'px');
            }
        } else {
            var ga = parseInt(k.get(t, 'top'), 10);
            k.set(t, 'top', (ga - da) + 'px');
        }
    };
    q.prototype._repositionArrow = function(r) {
        "use strict";
        var s = this._layer.getContentRoot(), t = r.getPosition(), u = p[t];
        for (var v in o)
            g.conditionClass(s, o[v], u === v);
        if (t == 'none')
            return;
        if (!this._arrow)
            this._arrow = i.i({
                className: "_53io"
            });
        if (!h.contains(s, this._arrow))
            h.appendContent(s, this._arrow);
        k.set(this._arrow, 'top', '');
        k.set(this._arrow, 'left', '');
        k.set(this._arrow, 'right', '');
        k.set(this._arrow, 'margin', '');
        var w = q.getOffsetPercent(r), x = q.getOffset(r, w, this._layer), y = q.getOffsetSide(r);
        k.set(this._arrow, y, w + '%');
        k.set(this._arrow, 'margin-' + y, x + 'px');
    };
    q.getOffsetPercent = function(r) {
        "use strict";
        var s = r.getAlignment(), t = r.getPosition();
        if (t == 'above' || t == 'below')
            if (s == 'center') {
                return 50;
            } else if (s == 'right')
                return 100;
        return 0;
    };
    q.getOffsetSide = function(r) {
        "use strict";
        var s = r.isVertical();
        return s ? (j.isRTL() ? 'right' : 'left') : 'top';
    };
    q.getOffset = function(r, s, t) {
        "use strict";
        var u = t.getArrowDimensions(), v = u.offset, w = u.length, x = r.getAlignment(), y = (x == 'center') ? 0: v;
        y += w * s / 100;
        if (x != 'left')
            y*=-1;
        return y;
    };
    m(q.prototype, {
        _subscription: null,
        _arrow: null
    });
    e.exports = q;
}, null);
__d("ContextualDialogDefaultTheme", ["cx"], function(a, b, c, d, e, f, g) {
    var h = {
        wrapperClassName: "_53ip",
        arrowDimensions: {
            offset: 15,
            length: 16
        }
    };
    e.exports = h;
}, null);
__d("ContextualDialogKeepInViewport", ["ContextualLayerDimensions", "Event", "Style", "Vector", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        "use strict";
        this._layer = m;
        this._listeners = [];
        this._subscription = null;
        this._minimumTop = null;
    }
    l.prototype.enable = function() {
        "use strict";
        var m = this._layer.getArrowDimensions();
        this._arrowOffset = m.offset;
        var n = m.length;
        this._arrowBuffer = this._arrowOffset + n;
        this._subscription = this._layer.subscribe(['show', 'hide', 'reposition'], function(o, p) {
            if (this._layer.isFixed())
                return;
            if (o == 'reposition') {
                this._calculateMinimumTop(p);
            } else if (o == 'show') {
                this._attachScroll();
                this._adjustForScroll();
            } else 
                this._detachScroll();
        }.bind(this));
        if (this._layer.isShown())
            this._attachScroll();
    };
    l.prototype.disable = function() {
        "use strict";
        if (this._layer.isShown())
            this._detachScroll();
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    l.prototype._attachScroll = function() {
        "use strict";
        var m = k(this._adjustForScroll.bind(this)), n = this._layer.getContextScrollParent() || window;
        this._listeners = [h.listen(n, 'scroll', m), h.listen(window, 'resize', m)];
    };
    l.prototype._detachScroll = function() {
        "use strict";
        while (this._listeners.length)
            this._listeners.pop().remove();
        this._listeners = [];
    };
    l.prototype._getContentHeight = function() {
        "use strict";
        if (!this._layer._contentWrapper)
            return 0;
        return j.getElementDimensions(this._layer._contentWrapper).y;
    };
    l.prototype._getContextY = function() {
        "use strict";
        return j.getElementPosition(this._layer.getContext()).y;
    };
    l.prototype._calculateMinimumTop = function(m) {
        "use strict";
        if (m.isVertical())
            return;
        this._minimumTop = (this._getContextY() - (this._getContentHeight() - this._arrowBuffer) + m.getOffsetY());
    };
    l.prototype._adjustForScroll = function() {
        "use strict";
        var m = this._layer._getOrientation();
        if (m.isVertical())
            return;
        var n = g.getViewportRect(this._layer), o = n.b - this._minimumTop;
        if (o < 0)
            return;
        var p = this._getContentHeight(), q = p - (this._arrowBuffer + this._arrowOffset), r = Math.max(0, Math.min(q, q - (o - p)));
        i.set(this._layer.getContent(), 'top', - r + 'px');
    };
    e.exports = l;
}, null);
__d("ContextualDialogFitInViewport_PUSHSAFE", ["Style", "Vector"], function(a, b, c, d, e, f, g, h) {
    var i = 50, j = 10;
    function k(l) {
        "use strict";
        this._layer = l;
        this._contentHeight = null;
        this._contextY = null;
    }
    k.prototype.enable = function() {
        "use strict";
        var l = this._layer.getArrowDimensions();
        this._arrowOffset = l.offset;
        var m = l.length;
        this._arrowBuffer = this._arrowOffset + m;
        this._subscription = this._layer.subscribe(['reposition'], function(n, o) {
            if (!this._layer.isFixed() || o.isVertical())
                return;
            this._adjustPosition();
        }.bind(this));
    };
    k.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    k.prototype._getContentHeight = function() {
        "use strict";
        return h.getElementDimensions(this._layer._contentWrapper).y;
    };
    k.prototype._getContextY = function() {
        "use strict";
        return h.getElementPosition(this._layer.getContext(), 'viewport').y;
    };
    k.prototype._adjustPosition = function() {
        "use strict";
        var l = this._getContextY(), m = this._getContentHeight();
        if (l === this._contextY && m === this._contentHeight)
            return;
        this._contextY = l;
        this._contentHeight = m;
        var n = h.getViewportDimensions().y, o = Math.min(Math.max(0, l + m + j - n), Math.max(0, l - i), m - this._arrowOffset - this._arrowBuffer);
        g.set(this._layer.getContent(), 'top', - o + 'px');
    };
    e.exports = k;
}, null);
__d("LayerMouseHooks", ["Arbiter", "ContextualThing", "Event", "Layer", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = new g();
    function m(n) {
        "use strict";
        this._layer = n;
        this._subscriptions = [];
        this._currentlyActive = false;
    }
    m.prototype.enable = function() {
        "use strict";
        this._subscriptions = [l.subscribe('mouseenter', this._handleActive.bind(this)), l.subscribe('mouseleave', this._handleInactive.bind(this)), this._layer.subscribe('hide', function() {
            this._currentlyActive = false;
        }.bind(this))];
    };
    m.prototype.disable = function() {
        "use strict";
        while (this._subscriptions.length)
            this._subscriptions.pop().unsubscribe();
        this._subscriptions = [];
        this._currentlyActive = false;
    };
    m.prototype._handleActive = function(n, o) {
        "use strict";
        if (!this._currentlyActive && this._isNodeWithinStack(o)) {
            this._layer.inform('mouseenter');
            this._currentlyActive = true;
        }
    };
    m.prototype._handleInactive = function(n, o) {
        "use strict";
        if (this._currentlyActive)
            if (!o ||!this._isNodeWithinStack(o)) {
                this._layer.inform('mouseleave');
                this._currentlyActive = false;
            }
    };
    m.prototype._isNodeWithinStack = function(n) {
        "use strict";
        return h.containsIncludingLayers(this._layer.getContentRoot(), n);
    };
    j.subscribe('show', function(n, o) {
        var p = o.getContentRoot(), q = [i.listen(p, 'mouseenter', function() {
            l.inform('mouseenter', p);
        }), i.listen(p, 'mouseleave', function(s) {
            l.inform('mouseleave', s.getRelatedTarget());
        })], r = o.subscribe('hide', function() {
            while (q.length)
                q.pop().remove();
            r.unsubscribe();
            q = r = null;
        });
    });
    e.exports = m;
}, null);
__d("ContextualDialog", ["AccessibleLayer", "ContextualDialogArrow", "ContextualDialogDefaultTheme", "ContextualDialogKeepInViewport", "ContextualDialogFitInViewport_PUSHSAFE", "ContextualLayer", "CSS", "DOM", "Event", "JSXDOM", "LayerButtons", "LayerFormHooks", "LayerRefocusOnHide", "LayerHideOnTransition", "LayerMouseHooks", "Style", "copyProperties", "csx", "cx", "invariant", "removeFromArray", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba) {
    var ca = 0, da = 300;
    for (var ea in l)
        if (l.hasOwnProperty(ea))
            ga[ea] = l[ea];
    var fa = l === null ? null: l.prototype;
    ga.prototype = Object.create(fa);
    ga.prototype.constructor = ga;
    ga.__superConstructor__ = l;
    function ga(ha, ia) {
        "use strict";
        fa.constructor.call(this, ha, ia);
        this._footer = null;
    }
    ga.prototype._configure = function(ha, ia) {
        "use strict";
        w(ha, ha.theme || i);
        var ja = ha.arrowBehavior || h;
        ha.addedBehaviors = ha.addedBehaviors || [];
        ha.addedBehaviors.push(ja);
        fa._configure.call(this, ha, ia);
        this._footer = n.scry(ia, "div._572u")[0];
        if (this._footer)
            if (this._footer.children.length === 1 && this._footer.children[0].nodeName === 'DIV' && this._footer.children[0].children.length === 0) {
                this._footer.parentNode.removeChild(this._footer);
            } else 
                m.addClass(this.getContentRoot(), "_kc");
        if (ha.hoverContext)
            this._registerHoverHandlers(ha.hoverContext, ha.hoverShowDelay, ha.hoverHideDelay);
    };
    ga.prototype._registerHoverHandlers = function(ha, ia, ja) {
        "use strict";
        if (ia == null)
            ia = ca;
        if (ja == null)
            ja = da;
        var ka, la, ma = function(event) {
            clearTimeout(la);
            ka = setTimeout(ba(this.show, this), ia);
        }.bind(this), na = function(event) {
            if (this._isHoverLocked())
                return;
            clearTimeout(ka);
            la = setTimeout(this.hide.bind(this), ja);
        }.bind(this), oa = o.listen(ha, 'mouseenter', ma), pa = o.listen(ha, 'mouseleave', na), qa = this.subscribe('mouseenter', ma), ra = this.subscribe('mouseleave', na);
        this.subscribe('destroy', function() {
            clearTimeout(la);
            oa.remove();
            pa.remove();
            qa.unsubscribe();
            ra.unsubscribe();
        });
    };
    ga.prototype._getDefaultBehaviors = function() {
        "use strict";
        var ha = fa._getDefaultBehaviors.call(this);
        aa(ha, t);
        return ha.concat([g, s, j, k, q, r, u]);
    };
    ga.prototype._buildWrapper = function(ha, ia) {
        "use strict";
        this._innerWrapper = p.div(null, ia);
        var ja = fa._buildWrapper.call(this, ha, this._innerWrapper);
        m.addClass(ja, ha.wrapperClassName);
        this.replaceEntireLayerContents(ia);
        z(this.getContent() === ia);
        this.setWidth(ha.width);
        return ja;
    };
    ga.prototype.getContentRoot = function() {
        "use strict";
        z(!!this._innerWrapper);
        return this._innerWrapper;
    };
    ga.prototype.setContent = function(ha) {
        "use strict";
        z(false);
    };
    ga.prototype.replaceEntireLayerContents = function(ha) {
        "use strict";
        this._content = null;
        n.empty(this.getContentRoot());
        this.setInnerContent(ha);
    };
    ga.prototype.setInnerContent = function(ha) {
        "use strict";
        m.addClass(ha, "_53ij");
        if (this.getContent()) {
            n.replace(this.getContent(), ha);
        } else 
            n.appendContent(this.getContentRoot(), ha);
        this._content = ha;
        this.isShown() && this.updatePosition();
    };
    ga.prototype.setWidth = function(ha) {
        "use strict";
        v.set(this.getContentRoot(), 'width', ha ? Math.floor(ha) + 'px' : '');
        return this;
    };
    ga.prototype.getFooter = function() {
        "use strict";
        return this._footer;
    };
    ga.prototype.lockHover = function() {
        "use strict";
        this._hoverLocked = true;
        return this;
    };
    ga.prototype.unlockHover = function() {
        "use strict";
        this._hoverLocked = false;
        return this;
    };
    ga.prototype._isHoverLocked = function() {
        "use strict";
        return !!this._hoverLocked;
    };
    ga.setContext = function(ha, ia) {
        "use strict";
        ha.setContext(ia);
    };
    e.exports = ga;
}, null);
__d("ReactAbstractContextualDialog", ["ContextualDialog", "ContextualDialogArrow", "LayerAutoFocus", "LayerRefocusOnHide", "ReactPropTypes", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        createSpec: function(n) {
            return {
                displayName: n.displayName,
                propTypes: {
                    position: k.oneOf(['above', 'below', 'left', 'right']),
                    alignment: k.oneOf(['left', 'center', 'right']),
                    offsetX: k.number,
                    offsetY: k.number,
                    width: k.number,
                    autoFocus: k.bool,
                    focusContextOnHide: k.bool,
                    arrowBehavior: k.func,
                    behaviors: k.object,
                    shown: k.bool,
                    contextRef: k.string,
                    hoverContext: k.object,
                    hoverShowDelay: k.number,
                    hoverHideDelay: k.number,
                    hasActionableContext: k.bool
                },
                immutableProps: {
                    modal: null
                },
                createLayer: function(o) {
                    var p = this.props.context || this.getNodeForOwnerRef(this.props.contextRef), q = l({
                        context: p,
                        hoverContext: this.props.hoverContext,
                        hoverShowDelay: this.props.hoverShowDelay,
                        hoverHideDelay: this.props.hoverHideDelay,
                        position: this.props.position,
                        alignment: this.props.alignment,
                        offsetX: this.props.offsetX,
                        offsetY: this.props.offsetY,
                        width: this.props.width,
                        shouldSetARIAProperties: !this.props.hasActionableContext,
                        arrowBehavior: this.props.arrowBehavior || h,
                        addedBehaviors: this.enumerateBehaviors(this.props.behaviors)
                    }, n || {}), r = new g(q, o);
                    if (this.props.contextBounds)
                        r.setContextWithBounds(p, this.props.contextBounds);
                    if (this.props.autoFocus !== false)
                        r.enableBehavior(i);
                    if (this.props.focusContextOnHide === false)
                        r.disableBehavior(j);
                    r.conditionShow(this.props.shown);
                    return r;
                },
                receiveProps: function(o) {
                    this.updateBehaviors(o.behaviors);
                    var p = o.context || this.getNodeForOwnerRef(o.contextRef);
                    if (p)
                        if (o.contextBounds) {
                            this.layer.setContextWithBounds(p, o.contextBounds);
                        } else 
                            this.layer.setContext(p);
                    this.layer.setPosition(o.position).setAlignment(o.alignment).setOffsetX(o.offsetX).setOffsetY(o.offsetY).setWidth(o.width).conditionShow(o.shown);
                }
            };
        }
    };
    e.exports = m;
}, null);
__d("curry", ["bind"], function(a, b, c, d, e, f, g) {
    var h = g(null, g, null);
    e.exports = h;
}, null);
__d("ParameterizedPopover", ["Arbiter", "ArbiterMixin", "CSS", "DataStore", "Event", "Focus", "Keys", "KeyStatus", "LayerHideOnEscape", "Toggler", "copyProperties", "curry", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    p.subscribe(['show', 'hide'], function(x, y) {
        var z = j.get(y.getActive(), 'Popover');
        if (z)
            if (x === 'show') {
                z.showLayer();
            } else 
                z.hideLayer();
    });
    var t = s(h);
    for (var u in t)
        if (t.hasOwnProperty(u))
            w[u] = t[u];
    var v = t === null ? null: t.prototype;
    w.prototype = Object.create(v);
    w.prototype.constructor = w;
    w.__superConstructor__ = t;
    function w(x, y, z, aa) {
        "use strict";
        this._root = x;
        this._triggerElem = y;
        this._behaviors = z;
        this._config = aa || {};
        this._disabled=!!this._config.disabled;
        this._listeners = [];
        if (!this._disabled && (y.nodeName !== 'A' || y.rel !== 'toggle'))
            this._setupClickListener();
        this._setupKeyListener();
        y.setAttribute('role', 'button');
        j.set(x, 'Popover', this);
        if (p.getActive() === x)
            this.showLayer();
    }
    w.prototype.ensureInit = function() {
        "use strict";
        if (!this._layer)
            this._init();
    };
    w.prototype.showLayer = function() {
        "use strict";
        this.ensureInit();
        this._layer.show();
        p.show(this._root);
        i.addClass(this._root, 'selected');
        this.inform('show');
        this._triggerElem.setAttribute('aria-expanded', 'true');
    };
    w.prototype.getContentRoot = function() {
        "use strict";
        return this._root;
    };
    w.prototype.getLayer = function() {
        "use strict";
        return this._layer;
    };
    w.prototype.hideLayer = function() {
        "use strict";
        this._layer.hide();
        this._triggerElem.setAttribute('aria-expanded', 'false');
    };
    w.prototype.isShown = function() {
        "use strict";
        return this._layer && this._layer.isShown();
    };
    w.prototype.setLayerContent = function(x) {
        "use strict";
        this.ensureInit();
        if (this._layer.setContent)
            this._layer.setContent(x);
    };
    w.prototype._init = function() {
        "use strict";
        var x = this._config.layer;
        x.enableBehaviors([o]);
        p.createInstance(x.getRoot()).setSticky(false);
        x.subscribe('hide', this._onLayerHide.bind(this));
        this._behaviors && x.enableBehaviors(this._behaviors);
        this._layer = x;
        this.inform('init', null, g.BEHAVIOR_PERSISTENT);
    };
    w.prototype._onLayerHide = function() {
        "use strict";
        p.hide(this._root);
        i.removeClass(this._root, 'selected');
        this.inform('hide');
        if (n.getKeyDownCode() === m.ESC)
            l.set(this._triggerElem);
    };
    w.prototype.enable = function() {
        "use strict";
        if (!this._disabled)
            return;
        this._setupClickListener();
        this._setupKeyListener();
        this._disabled = false;
    };
    w.prototype.disable = function() {
        "use strict";
        if (this._disabled)
            return;
        if (this.isShown())
            this.hideLayer();
        while (this._listeners.length)
            this._listeners.pop().remove();
        if (this._triggerElem.getAttribute('rel') === 'toggle')
            this._triggerElem.removeAttribute('rel');
        this._disabled = true;
    };
    w.prototype._setupClickListener = function() {
        "use strict";
        this._listeners.push(k.listen(this._triggerElem, 'click', r(p.bootstrap, this._triggerElem)));
    };
    w.prototype._setupKeyListener = function() {
        "use strict";
        this._listeners.push(k.listen(this._triggerElem, 'keydown', this._handleKeyEvent.bind(this)));
    };
    w.prototype._handleKeyEvent = function(event) {
        "use strict";
        if (event.getModifiers().any)
            return;
        var x = k.getKeyCode(event);
        switch (x) {
        case m.SPACE:
        case m.DOWN:
        case m.UP:
            if (x === m.SPACE ||!this.isShown())
                p.bootstrap(this._triggerElem);
            break;
        default:
            return;
        }
        event.prevent();
    };
    w.prototype.destroy = function() {
        "use strict";
        j.remove(this._root, 'Popover');
    };
    q(w.prototype, {
        _layer: null
    });
    e.exports = w;
}, null);
__d("Popover", ["ContextualLayer", "ContextualLayerHideOnScroll", "DOM", "ParameterizedPopover"], function(a, b, c, d, e, f, g, h, i, j) {
    for (var k in j)
        if (j.hasOwnProperty(k))
            m[k] = j[k];
    var l = j === null ? null: j.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = j;
    function m() {
        "use strict";
        if (j !== null)
            j.apply(this, arguments);
    }
    m.prototype._init = function() {
        "use strict";
        var n = new g({
            context: this._triggerElem,
            position: 'below',
            arrowDimensions: {
                offset: 12,
                length: 16
            }
        }, i.create('div'));
        n.enableBehaviors([h]);
        this._config.layer = n;
        if (this._config.alignh)
            n.setAlignment(this._config.alignh);
        if (this._config.layer_content)
            n.setContent(this._config.layer_content);
        if (this._config.position)
            n.setPosition(this._config.position);
        l._init.call(this);
    };
    e.exports = m;
}, null);
__d("PopoverMenu", ["Arbiter", "ArbiterMixin", "ARIA", "BehaviorsMixin", "Event", "Focus", "Keys", "KeyStatus", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = p(h, j);
    for (var r in q)
        if (q.hasOwnProperty(r))
            t[r] = q[r];
    var s = q === null ? null: q.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = q;
    function t(u, v, w, x) {
        "use strict";
        this._popover = u;
        this._triggerElem = v;
        this._initialMenu = w;
        u.subscribe('init', this._onLayerInit.bind(this));
        u.subscribe('show', this._onPopoverShow.bind(this));
        u.subscribe('hide', this._onPopoverHide.bind(this));
        k.listen(this._triggerElem, 'keydown', this._handleKeyEventOnTrigger.bind(this));
        x && this.enableBehaviors(x);
    }
    t.prototype.getContentRoot = function() {
        "use strict";
        return this._popover.getContentRoot();
    };
    t.prototype.setMenu = function(u) {
        "use strict";
        this._menu = u;
        var v = u.getRoot();
        this._popover.setLayerContent(v);
        u.subscribe('done', this._onMenuDone.bind(this));
        if (this._popoverShown)
            this._menu.onShow();
        i.owns(this._triggerElem, v);
        this.inform('setMenu', null, g.BEHAVIOR_PERSISTENT);
    };
    t.prototype.getPopover = function() {
        "use strict";
        return this._popover;
    };
    t.prototype.getTriggerElem = function() {
        "use strict";
        return this._triggerElem;
    };
    t.prototype.getInitialMenu = function() {
        "use strict";
        return this._initialMenu;
    };
    t.prototype.getMenu = function() {
        "use strict";
        return this._menu;
    };
    t.prototype._onLayerInit = function() {
        "use strict";
        this.setMenu(this._initialMenu);
        this._popover.getLayer().subscribe('key', this._handleKeyEvent.bind(this));
    };
    t.prototype._onPopoverShow = function() {
        "use strict";
        if (this._menu)
            this._menu.onShow();
        this._popoverShown = true;
    };
    t.prototype._onPopoverHide = function() {
        "use strict";
        if (this._menu)
            this._menu.onHide();
        this._popoverShown = false;
    };
    t.prototype._handleKeyEvent = function(u, v) {
        "use strict";
        var w = k.getKeyCode(v);
        if (w === m.TAB) {
            this._popover.hideLayer();
            l.set(this._triggerElem);
            return;
        }
        if (v.getModifiers().any)
            return;
        switch (w) {
        case m.RETURN:
            return;
        default:
            if (this._menu.handleKeydown(w, v) === false) {
                this._menu.blur();
                this._menu.handleKeydown(w, v);
            }
            break;
        }
        v.prevent();
    };
    t.prototype._handleKeyEventOnTrigger = function(u) {
        "use strict";
        var v = k.getKeyCode(u), w = String.fromCharCode(v).toLowerCase();
        if (/^\w$/.test(w)) {
            this._popover.showLayer();
            this._menu.blur();
            if (this._menu.handleKeydown(v, u) === false) {
                this._popover.hideLayer();
                l.set(this._triggerElem);
            }
        }
    };
    t.prototype._onMenuDone = function(u) {
        "use strict";
        setTimeout(this._popover.hideLayer.bind(this._popover), 0);
        if (n.isKeyDown())
            l.set(this._triggerElem);
    };
    t.prototype.enable = function() {
        "use strict";
        this._popover.enable();
    };
    t.prototype.disable = function() {
        "use strict";
        this._popover.disable();
    };
    o(t.prototype, {
        _popoverShown: false
    });
    e.exports = t;
}, null);
__d("PopoverMenu.react", ["CSS", "InlineBlock.react", "Popover", "PopoverMenu", "React", "SubscriptionsHandler", "cx", "joinClasses", "areEqual", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = k.createClass({
        displayName: "ReactPopoverMenu",
        statics: {
            getFirstChild: function(r) {
                var s = r.children;
                return Array.isArray(s) ? s[0] : s;
            },
            getButtonSize: function(r) {
                var s = q.getFirstChild(r);
                return s && s.type.getButtonSize(s.props);
            }
        },
        propTypes: {
            alignh: k.PropTypes.oneOf(['left', 'center', 'right']),
            alignv: k.PropTypes.oneOf(['baseline', 'bottom', 'middle', 'top']),
            position: k.PropTypes.oneOf(['above', 'below', 'left', 'right']),
            layerBehaviors: k.PropTypes.array,
            menu: k.PropTypes.object,
            disabled: k.PropTypes.bool,
            open: k.PropTypes.bool
        },
        getDefaultProps: function() {
            return {
                alignv: 'middle'
            };
        },
        _menuSubscriptions: null,
        componentDidMount: function() {
            var r = this.refs.root.getDOMNode(), s = r.firstChild;
            g.addClass(s, "_p");
            this._popover = new i(r, s, this.props.layerBehaviors, {
                alignh: this.props.alignh,
                position: this.props.position,
                disabled: this.props.disabled
            });
            this._popoverMenu = new j(this._popover, s, this._createMenu(this.props.menu), this.props.behaviors);
        },
        componentDidUpdate: function(r) {
            if (!o(r.menu, this.props.menu))
                p(this._recreateMenu);
            if (this.props.alignh !== r.alignh)
                this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);
            if (this.props.disabled !== r.disabled)
                if (this.props.disabled) {
                    this._popoverMenu.disable();
                } else 
                    this._popoverMenu.enable();
        },
        _recreateMenu: function() {
            if (this._menuSubscriptions) {
                this._menuSubscriptions.release();
                this._menuSubscriptions = null;
            }
            this._unmountCurrentMenuItems();
            this._popoverMenu.setMenu(this._createMenu(this.props.menu));
        },
        render: function() {
            var r = q.getFirstChild(this.props);
            r.props.className = n(r.props.className || '', "_p");
            return (k.createElement(h, k.__spread({}, this.props, {
                className: n(this.props.className, "uiPopover"),
                ref: "root",
                disabled: null
            }), this.props.children));
        },
        componentWillUnmount: function() {
            this.hidePopover();
            if (this._menuSubscriptions) {
                this._menuSubscriptions.release();
                this._menuSubscriptions = null;
            }
        },
        _createMenu: function(r) {
            var s = r.props, t = new r.type(s);
            this._menuSubscriptions = new l();
            if (s.onItemClick)
                this._menuSubscriptions.addSubscriptions(t.subscribe('itemclick', s.onItemClick));
            if (s.onItemFocus)
                this._menuSubscriptions.addSubscriptions(t.subscribe('focus', s.onItemFocus));
            if (s.onItemBlur)
                this._menuSubscriptions.addSubscriptions(t.subscribe('blur', s.onItemBlur));
            if (s.onChange)
                this._menuSubscriptions.addSubscriptions(t.subscribe('change', s.onChange));
            if (this.props.onShow)
                this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show', this.props.onShow));
            if (this.props.onHide)
                this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide', this.props.onHide));
            return t;
        },
        getMenu: function() {
            return this._popoverMenu.getMenu();
        },
        showPopover: function(r) {
            this._popover.showLayer();
            if (r) {
                var s = this._popoverMenu.getMenu();
                s.blur();
                s.focusAnItem(r);
            }
        },
        hidePopover: function() {
            var r = this._popover;
            if (r.isShown())
                r.hideLayer();
        },
        getFocusedItem: function() {
            var r = this._popoverMenu.getMenu();
            return r.getFocusedItem();
        },
        _unmountCurrentMenuItems: function() {
            var r = this.getMenu();
            r && r.forEachItem(function(s) {
                var t = s.getRoot().firstElementChild;
                t && k.unmountComponentAtNode(t);
            });
        }
    });
    e.exports = q;
}, null);
__d("PopoverMenuInterface", ["ArbiterMixin", "copyProperties", "emptyFunction", "mixin"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = j(g);
    for (var l in k)
        if (k.hasOwnProperty(l))
            n[l] = k[l];
    var m = k === null ? null: k.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = k;
    function n() {
        "use strict";
    }
    n.prototype.done = function() {
        "use strict";
        this.inform('done');
    };
    h(n.prototype, {
        getRoot: i,
        onShow: i,
        onHide: i,
        focusAnItem: i.thatReturnsFalse,
        blur: i,
        handleKeydown: i.thatReturnsFalse
    });
    e.exports = n;
}, null);
__d("SimpleDrag", ["Event", "ArbiterMixin", "UserAgent_DEPRECATED", "Vector", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n) {
        this.minDragDistance = 0;
        g.listen(n, 'mousedown', this._start.bind(this));
    }
    k(m.prototype, h, {
        setMinDragDistance: function(n) {
            this.minDragDistance = n;
        },
        _start: function(event) {
            var n = false, o = true, p = null;
            if (this.inform('mousedown', event))
                o = false;
            if (this.minDragDistance) {
                p = j.getEventPosition(event);
            } else {
                n = true;
                var q = this.inform('start', event);
                if (q === true) {
                    o = false;
                } else if (q === false) {
                    n = false;
                    return;
                }
            }
            var r = i.ie() < 9 ? document.documentElement: window, s = g.listen(r, {
                selectstart: o ? g.prevent: l,
                mousemove: function(event) {
                    if (!n) {
                        var t = j.getEventPosition(event);
                        if (p.distanceTo(t) < this.minDragDistance)
                            return;
                        n = true;
                        if (this.inform('start', event) === false) {
                            n = false;
                            return;
                        }
                    }
                    this.inform('update', event);
                }.bind(this),
                mouseup: function(event) {
                    for (var t in s)
                        s[t].remove();
                    if (n) {
                        this.inform('end', event);
                    } else 
                        this.inform('click', event);
                }.bind(this)
            });
            o && event.prevent();
        }
    });
    e.exports = m;
}, null);
__d("ScrollableArea", ["Animation", "ArbiterMixin", "BrowserSupport", "CSS", "DataStore", "DOM", "Event", "Parent", "Run", "SimpleDrag", "Style", "UserAgent_DEPRECATED", "Vector", "throttle", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = 12, w = u(h);
    for (var x in w)
        if (w.hasOwnProperty(x))
            z[x] = w[x];
    var y = w === null ? null: w.prototype;
    z.prototype = Object.create(y);
    z.prototype.constructor = z;
    z.__superConstructor__ = w;
    function z(aa, ba) {
        "use strict";
        if (!aa)
            return;
        ba = ba || {};
        this._elem = aa;
        this._wrap = l.find(aa, 'div.uiScrollableAreaWrap');
        this._body = l.find(this._wrap, 'div.uiScrollableAreaBody');
        this._content = l.find(this._body, 'div.uiScrollableAreaContent');
        this._track = l.find(aa, 'div.uiScrollableAreaTrack');
        this._gripper = l.find(this._track, 'div.uiScrollableAreaGripper');
        this._options = ba;
        this._throttledComputeHeights = t.withBlocking(this._computeHeights, 250, this);
        this.throttledAdjustGripper = t.withBlocking(this.adjustGripper, 250, this);
        this._throttledShowGripperAndShadows = t.withBlocking(this._showGripperAndShadows, 250, this);
        this._throttledRespondMouseMove = t(this._respondMouseMove, 250, this);
        setTimeout(this.adjustGripper.bind(this), 0);
        this._listeners = [m.listen(this._wrap, 'scroll', this._handleScroll.bind(this)), m.listen(aa, 'mousemove', this._handleMouseMove.bind(this)), m.listen(this._track, 'click', this._handleClickOnTrack.bind(this))];
        if (i.hasPointerEvents())
            this._listeners.push(m.listen(aa, 'mousedown', this._handleClickOnTrack.bind(this)));
        if (ba.fade !== false) {
            this._listeners.push(m.listen(aa, 'mouseenter', this._handleMouseEnter.bind(this)), m.listen(aa, 'mouseleave', this._handleMouseLeave.bind(this)), m.listen(aa, 'focusin', this.showScrollbar.bind(this, false)), m.listen(aa, 'focusout', this.hideScrollbar.bind(this)));
        } else if (i.hasPointerEvents())
            this._listeners.push(m.listen(aa, 'mouseleave', j.removeClass.bind(null, aa, 'uiScrollableAreaTrackOver')));
        if (r.webkit() || r.chrome()) {
            this._listeners.push(m.listen(aa, 'mousedown', function() {
                var ca = m.listen(window, 'mouseup', function() {
                    if (aa.scrollLeft)
                        aa.scrollLeft = 0;
                    ca.remove();
                });
            }));
        } else if (r.firefox())
            this._wrap.addEventListener('DOMMouseScroll', function(event) {
                event.axis === event.HORIZONTAL_AXIS && event.preventDefault();
            }, false);
        this.initDrag();
        k.set(this._elem, 'ScrollableArea', this);
        if (!ba.persistent)
            o.onLeave(this.destroy.bind(this));
        if (ba.shadow !== false)
            j.addClass(this._elem, 'uiScrollableAreaWithShadow');
    }
    z.prototype.getElement = function() {
        "use strict";
        return this._elem;
    };
    z.prototype.initDrag = function() {
        "use strict";
        var aa = i.hasPointerEvents(), ba = new p(aa ? this._elem : this._gripper);
        ba.subscribe('start', function(ca, event) {
            if (!((event.which && event.which === 1) || (event.button && event.button === 1)))
                return;
            var da = s.getEventPosition(event, 'viewport');
            if (aa) {
                var ea = this._gripper.getBoundingClientRect();
                if (da.x < ea.left || da.x > ea.right || da.y < ea.top || da.y > ea.bottom)
                    return false;
            }
            this.inform('grip_start');
            var fa = da.y, ga = this._gripper.offsetTop;
            j.addClass(this._elem, 'uiScrollableAreaDragging');
            var ha = ba.subscribe('update', function(ja, event) {
                var ka = s.getEventPosition(event, 'viewport').y - fa;
                this._throttledComputeHeights();
                var la = this._contentHeight - this._containerHeight, ma = ga + ka, na = this._trackHeight - this._gripperHeight;
                ma = Math.max(Math.min(ma, na), 0);
                var oa = ma / na * la;
                this._wrap.scrollTop = oa;
            }.bind(this)), ia = ba.subscribe('end', function() {
                ba.unsubscribe(ha);
                ba.unsubscribe(ia);
                j.removeClass(this._elem, 'uiScrollableAreaDragging');
                this.inform('grip_end');
            }.bind(this));
        }.bind(this));
    };
    z.prototype.adjustGripper = function() {
        "use strict";
        if (this._needsGripper()) {
            q.set(this._gripper, 'height', this._gripperHeight + 'px');
            this._slideGripper();
        }
        this._throttledShowGripperAndShadows();
        return this;
    };
    z.prototype._computeHeights = function() {
        "use strict";
        this._containerHeight = this._elem.clientHeight;
        this._contentHeight = this._content.offsetHeight;
        this._trackHeight = this._track.offsetHeight;
        this._gripperHeight = Math.max(this._containerHeight / this._contentHeight * this._trackHeight, v);
    };
    z.prototype._needsGripper = function() {
        "use strict";
        this._throttledComputeHeights();
        return this._gripperHeight < this._trackHeight;
    };
    z.prototype._slideGripper = function() {
        "use strict";
        var aa = this._wrap.scrollTop / (this._contentHeight - this._containerHeight) * (this._trackHeight - this._gripperHeight);
        q.set(this._gripper, 'top', aa + 'px');
    };
    z.prototype._showGripperAndShadows = function() {
        "use strict";
        j.conditionShow(this._gripper, this._needsGripper());
        j.conditionClass(this._elem, 'contentBefore', this._wrap.scrollTop > 0);
        j.conditionClass(this._elem, 'contentAfter', !this.isScrolledToBottom());
    };
    z.prototype.destroy = function() {
        "use strict";
        this._listeners.forEach(function(aa) {
            aa.remove();
        });
        this._listeners.length = 0;
    };
    z.prototype._handleClickOnTrack = function(event) {
        "use strict";
        var aa = s.getEventPosition(event, 'viewport'), ba = this._gripper.getBoundingClientRect();
        if (aa.x < ba.right && aa.x > ba.left) {
            if (aa.y < ba.top) {
                this.setScrollTop(this.getScrollTop() - this._elem.clientHeight);
            } else if (aa.y > ba.bottom)
                this.setScrollTop(this.getScrollTop() + this._elem.clientHeight);
            event.prevent();
        }
    };
    z.prototype._handleMouseMove = function(event) {
        "use strict";
        var aa = this._options.fade !== false;
        if (i.hasPointerEvents() || aa) {
            this._mousePos = s.getEventPosition(event);
            this._throttledRespondMouseMove();
        }
    };
    z.prototype._respondMouseMove = function() {
        "use strict";
        if (!this._mouseOver)
            return;
        var aa = this._options.fade !== false, ba = this._mousePos, ca = s.getElementPosition(this._track).x, da = s.getElementDimensions(this._track).x, ea = Math.abs(ca + da / 2 - ba.x);
        j.conditionClass(this._elem, 'uiScrollableAreaTrackOver', i.hasPointerEvents() && ea <= 10);
        if (aa)
            if (ea < 25) {
                this.showScrollbar(false);
            } else if (!this._options.no_fade_on_hover)
                this.hideScrollbar();
    };
    z.prototype._handleScroll = function(event) {
        "use strict";
        if (this._needsGripper())
            this._slideGripper();
        this.throttledAdjustGripper();
        if (this._options.fade !== false)
            this.showScrollbar();
        this.inform('scroll');
    };
    z.prototype._handleMouseLeave = function() {
        "use strict";
        this._mouseOver = false;
        this.hideScrollbar();
    };
    z.prototype._handleMouseEnter = function() {
        "use strict";
        this._mouseOver = true;
        this.showScrollbar();
    };
    z.prototype.hideScrollbar = function(aa) {
        "use strict";
        if (!this._scrollbarVisible)
            return this;
        this._scrollbarVisible = false;
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        if (aa) {
            q.set(this._track, 'opacity', 0);
            j.addClass.bind(null, this._track, 'invisible_elem');
        } else 
            this._hideTimeout = setTimeout(function() {
                if (this._hideAnimation) {
                    this._hideAnimation.stop();
                    this._hideAnimation = null;
                }
                this._hideAnimation = (new g(this._track)).from('opacity', 1).to('opacity', 0).duration(250).ondone(j.addClass.bind(null, this._track, 'invisible_elem')).go();
            }.bind(this), 750);
        return this;
    };
    z.prototype.resize = function() {
        "use strict";
        if (this._body.style.width)
            this._body.style.width = '';
        var aa = this._wrap.offsetWidth - this._wrap.clientWidth;
        if (aa > 0)
            q.set(this._body, 'margin-right', ( - aa) + 'px');
        return this;
    };
    z.prototype.showScrollbar = function(aa) {
        "use strict";
        this.throttledAdjustGripper();
        if (this._scrollbarVisible)
            return this;
        this._scrollbarVisible = true;
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        if (this._hideAnimation) {
            this._hideAnimation.stop();
            this._hideAnimation = null;
        }
        q.set(this._track, 'opacity', 1);
        j.removeClass(this._track, 'invisible_elem');
        if ((aa !== false)&&!this._options.no_fade_on_hover)
            this.hideScrollbar();
        return this;
    };
    z.prototype.distanceToBottom = function() {
        "use strict";
        this._computeHeights();
        return this._contentHeight - (this._wrap.scrollTop + this._containerHeight);
    };
    z.prototype.isScrolledToBottom = function() {
        "use strict";
        return this.distanceToBottom() <= 0;
    };
    z.prototype.isScrolledToTop = function() {
        "use strict";
        return this._wrap.scrollTop === 0;
    };
    z.prototype.scrollToBottom = function(aa, ba) {
        "use strict";
        this.setScrollTop(this._wrap.scrollHeight, aa, ba);
    };
    z.prototype.scrollToTop = function(aa) {
        "use strict";
        this.setScrollTop(0, aa);
    };
    z.prototype.scrollIntoView = function(aa, ba) {
        "use strict";
        var ca = this._wrap.clientHeight, da = aa.offsetHeight, ea = this._wrap.scrollTop, fa = ea + ca, ga = aa.offsetTop, ha = ga + da;
        if (ga < ea || ca < da) {
            this.setScrollTop(ga, ba);
        } else if (ha > fa)
            this.setScrollTop(ea + (ha - fa), ba);
    };
    z.prototype.scrollElemToTop = function(aa, ba, ca) {
        "use strict";
        this.setScrollTop(aa.offsetTop, ba, {
            callback: ca
        });
    };
    z.prototype.poke = function() {
        "use strict";
        var aa = this._wrap.scrollTop;
        this._wrap.scrollTop += 1;
        this._wrap.scrollTop -= 1;
        this._wrap.scrollTop = aa;
        return this.showScrollbar(false);
    };
    z.prototype.getClientHeight = function() {
        "use strict";
        return this._wrap.clientHeight;
    };
    z.prototype.getScrollTop = function() {
        "use strict";
        return this._wrap.scrollTop;
    };
    z.prototype.getScrollHeight = function() {
        "use strict";
        return this._wrap.scrollHeight;
    };
    z.prototype.setScrollTop = function(aa, ba, ca) {
        "use strict";
        ca = ca || {};
        if (ba !== false) {
            if (this._scrollTopAnimation)
                this._scrollTopAnimation.stop();
            var da = ca.duration || 250, ea = ca.ease || g.ease.end;
            this._scrollTopAnimation = (new g(this._wrap)).to('scrollTop', aa).ease(ea).duration(da).ondone(ca.callback).go();
        } else {
            this._wrap.scrollTop = aa;
            ca.callback && ca.callback();
        }
    };
    z.renderDOM = function() {
        "use strict";
        var aa = l.create('div', {
            className: 'uiScrollableAreaContent'
        }), ba = l.create('div', {
            className: 'uiScrollableAreaBody'
        }, aa), ca = l.create('div', {
            className: 'uiScrollableAreaWrap scrollable'
        }, ba), da = l.create('div', {
            className: 'uiScrollableArea native'
        }, ca);
        return {
            root: da,
            wrap: ca,
            body: ba,
            content: aa
        };
    };
    z.fromNative = function(aa, ba) {
        "use strict";
        if (!j.hasClass(aa, 'uiScrollableArea') ||!j.hasClass(aa, 'native'))
            return;
        ba = ba || {};
        j.removeClass(aa, 'native');
        var ca = l.create('div', {
            className: 'uiScrollableAreaTrack'
        }, l.create('div', {
            className: 'uiScrollableAreaGripper'
        }));
        if (ba.fade !== false) {
            j.addClass(aa, 'fade');
            j.addClass(ca, 'invisible_elem');
        } else 
            j.addClass(aa, 'nofade');
        l.appendContent(aa, ca);
        var da = new z(aa, ba);
        da.resize();
        return da;
    };
    z.getInstance = function(aa) {
        "use strict";
        var ba = n.byClass(aa, 'uiScrollableArea');
        return ba ? k.get(ba, 'ScrollableArea') : null;
    };
    z.poke = function(aa) {
        "use strict";
        var ba = z.getInstance(aa);
        ba && ba.poke();
    };
    e.exports = z;
}, null);
__d("Menu", ["BehaviorsMixin", "CSS", "DataStore", "DOM", "Event", "Keys", "KeyStatus", "Parent", "PopoverMenuInterface", "ScrollableArea", "Style", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    for (var t in o)
        if (o.hasOwnProperty(t))
            v[t] = o[t];
    var u = o === null ? null: o.prototype;
    v.prototype = Object.create(u);
    v.prototype.constructor = v;
    v.__superConstructor__ = o;
    function v(w, x) {
        "use strict";
        o.call(this);
        this._items = [];
        for (var y = 0; y < w.length; y++) {
            var z = w[y], aa;
            if (z.ctor) {
                aa = new z.ctor(z);
            } else 
                aa = new z.type(z.props);
            this._items[y] = aa;
        }
        this._config = x || {};
        this._theme = x.theme || {};
    }
    v.prototype.addItem = function(w) {
        "use strict";
        this._addItem(w);
    };
    v.prototype.addItemBefore = function(w, x) {
        "use strict";
        this._addItem(w, x, false);
    };
    v.prototype.addItemAfter = function(w, x) {
        "use strict";
        this._addItem(w, x, true);
    };
    v.prototype._addItem = function(w, x, y) {
        "use strict";
        var z = this._items.indexOf(w);
        if (z >= 0) {
            var aa = y?-1 : 1;
            if (this._items[z + aa] == x)
                return;
            this._items.splice(z, 1);
        }
        if (x) {
            z = this._items.indexOf(x);
            if (z < 0)
                throw new Error('reference item must already be in the menu');
            if (y)
                z++;
            this._items.splice(z, 0, w);
        } else 
            this._items.push(w);
        if (this._root)
            this._insertItem(w, x, y);
    };
    v.prototype.removeItem = function(w) {
        "use strict";
        var x = this._items.indexOf(w);
        if (x < 0)
            return;
        this._items.splice(x, 1);
        this._root && j.remove(w.getRoot());
    };
    v.prototype.forEachItem = function(w) {
        "use strict";
        this._items.forEach(w);
    };
    v.prototype.getFocusedItem = function() {
        "use strict";
        return this._focused;
    };
    v.prototype.getItemAt = function(w) {
        "use strict";
        return this._items[w] || null;
    };
    v.prototype.getRoot = function() {
        "use strict";
        if (!this._root)
            this._render();
        return this._root;
    };
    v.prototype.onShow = function() {
        "use strict";
        if (this._config.maxheight)
            if (!this._scrollableArea) {
                this._scrollableArea = p.fromNative(this._scrollableElems.root, {
                    fade: true
                });
            } else 
                this._scrollableArea.resize();
        if (m.isKeyDown())
            this.focusAnItem();
        this.inform('show');
    };
    v.prototype.onHide = function() {
        "use strict";
        this.blur();
    };
    v.prototype.focusAnItem = function(w) {
        "use strict";
        return this._attemptFocus(w || 0, 1);
    };
    v.prototype.blur = function() {
        "use strict";
        if (this._focused) {
            var w = this._focused;
            this._focused.blur();
            this._focused = null;
            this.inform('blur', {
                item: w
            });
        }
    };
    v.prototype.handleKeydown = function(w, x) {
        "use strict";
        var y = this._items.indexOf(this._focused);
        switch (w) {
        case l.UP:
        case l.DOWN:
            var z = w === l.UP, aa = z?-1 : 1, ba = z ? this._items.length - 1 : 0, ca = z ? 0 : this._items.length - 1;
            if (y===-1) {
                return this._attemptFocus(ba, aa);
            } else if (y !== ca)
                return this._attemptFocus(y + aa, aa);
            break;
        case l.SPACE:
            if (this._items.indexOf(this._focused)!==-1) {
                this._handleItemClick(this._focused, x);
                return true;
            }
            return false;
        default:
            var da = String.fromCharCode(w).toLowerCase(), ea;
            for (var fa = y + 1; fa < this._items.length; fa++) {
                ea = this._items[fa].getAccessKey();
                if (ea && ea.charAt(0).toLowerCase() === da)
                    if (this._focusItem(this._items[fa]))
                        return true;
            }
            return false;
        }
    };
    v.prototype._render = function() {
        "use strict";
        this._ul = j.create('ul', {
            className: "_54nf"
        });
        this._ul.setAttribute('role', 'menu');
        this._items.forEach(function(y) {
            this._insertItem(y, null);
        }.bind(this));
        k.listen(this._ul, 'click', this._handleClick.bind(this));
        k.listen(this._ul, 'mouseover', this._handleMouseOver.bind(this));
        k.listen(this._ul, 'mouseout', this._handleMouseOut.bind(this));
        var w = this._ul;
        if (this._config.maxheight) {
            this._scrollableElems = p.renderDOM();
            j.setContent(this._scrollableElems.content, this._ul);
            w = this._scrollableElems.root;
            q.set(this._scrollableElems.wrap, 'max-height', this._config.maxheight + 'px');
        }
        var x = "_54nq" + (this._config.className ? ' ' + this._config.className : '') + (this._theme.className ? ' ' + this._theme.className : '');
        this._root = j.create('div', {
            className: x
        }, j.create('div', {
            className: "_54ng"
        }, w));
        this._config.id && this._root.setAttribute('id', this._config.id);
        if (this._config.behaviors)
            this.enableBehaviors(this._config.behaviors);
        this.inform('rendered', this._root);
    };
    v.prototype._needsDefaultBehavior = function(w) {
        "use strict";
        if (w.isDefaultRequested && w.isDefaultRequested()) {
            var x = n.byTag(w.getTarget(), 'a'), y = x && x.getAttribute('href');
            return y && y[0] !== '#';
        }
        return false;
    };
    v.prototype._handleClick = function(w) {
        "use strict";
        if (!this._needsDefaultBehavior(w)) {
            var x = this._getItemInstance(w.getTarget());
            if (x)
                return this._handleItemClick(x, w);
        }
    };
    v.prototype._handleItemClick = function(w, x) {
        "use strict";
        this.inform('itemclick', {
            item: w,
            event: x
        });
        if (w.hasAction())
            this.done();
        return w.handleClick();
    };
    v.prototype._handleMouseOver = function(w) {
        "use strict";
        var x = this._getItemInstance(w.getTarget());
        x && this._focusItem(x, true);
    };
    v.prototype._handleMouseOut = function(w) {
        "use strict";
        var x = this._getItemInstance(w.getTarget());
        if (x && this._focused === x)
            this.blur();
    };
    v.prototype._insertItem = function(w, x, y) {
        "use strict";
        var z = w.getRoot();
        h.addClass(z, '__MenuItem');
        i.set(z, 'MenuItem', w);
        if (x) {
            var aa = y ? j.insertAfter: j.insertBefore;
            aa(x.getRoot(), z);
        } else 
            j.appendContent(this._ul, z);
    };
    v.prototype._attemptFocus = function(w, x) {
        "use strict";
        var y = this.getItemAt(w);
        if (y)
            if (this._focusItem(y)) {
                return true;
            } else 
                return this._attemptFocus(w + x, x);
        return false;
    };
    v.prototype._focusItem = function(w, x) {
        "use strict";
        if (w.focus(x) !== false) {
            if (this._focused !== w) {
                this.blur();
                this._focused = w;
                this.inform('focus', {
                    item: w,
                    from_mouse_over: x
                });
            }
            return true;
        }
        return false;
    };
    v.prototype._getItemInstance = function(w) {
        "use strict";
        var x = n.byClass(w, '__MenuItem');
        return x ? i.get(x, 'MenuItem') : null;
    };
    v.prototype.destroy = function() {
        "use strict";
        this._items.forEach(function(w) {
            var x = w.getRoot();
            i.remove(x, 'MenuItem');
            w.destroy();
        });
        this.destroyBehaviors();
    };
    r(v.prototype, g, {
        _focused: null,
        _root: null
    });
    e.exports = v;
}, null);
__d("MenuItemInterface", ["copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h) {
    function i() {
        "use strict";
    }
    i.prototype.getRoot = function() {
        "use strict";
        if (!this._root)
            this._root = this.render();
        return this._root;
    };
    g(i.prototype, {
        _root: null,
        render: h,
        getAccessKey: h,
        hasAction: h.thatReturnsFalse,
        focus: h.thatReturnsFalse,
        blur: h.thatReturnsFalse,
        onShow: h.thatReturnsFalse,
        handleClick: h.thatReturnsFalse,
        destruct: h
    });
    e.exports = i;
}, null);
__d("MenuItemBase", ["DOM", "HTML", "MenuItemInterface", "cx", "mergeInto"], function(a, b, c, d, e, f, g, h, i, j, k) {
    for (var l in i)
        if (i.hasOwnProperty(l))
            n[l] = i[l];
    var m = i === null ? null: i.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = i;
    function n(o) {
        "use strict";
        i.call(this);
        this._data = o;
    }
    n.prototype.render = function() {
        "use strict";
        var o = "_54ni";
        if (this._data.className)
            o += ' ' + this._data.className;
        var p = {
            className: o,
            role: 'presentation'
        };
        k(p, this.__getAttributesFromData());
        return g.create('li', p, this._renderItemContent());
    };
    n.prototype._renderItemContent = function() {
        "use strict";
        return h(this._data.markup).getNodes();
    };
    n.prototype.__getAttributesFromData = function() {
        "use strict";
        var o = {};
        for (var p in this._data)
            if (p.indexOf('data-') === 0 || p.indexOf('aria-') === 0)
                o[p] = this._data[p];
        return o;
    };
    e.exports = n;
}, null);
__d("MenuItem", ["CSS", "DOM", "MenuItemBase", "React", "cloneWithProps", "copyProperties", "cx", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = ['href', 'rel', 'ajaxify', 'target', 'accesskey'];
    function p(u, v) {
        var w = {};
        o.forEach(function(x) {
            if (v[x])
                w[x] = v[x];
        });
        h.setAttributes(u, w);
    }
    function q(u) {
        o.forEach(function(v) {
            u.removeAttribute(v);
        });
    }
    for (var r in i)
        if (i.hasOwnProperty(r))
            t[r] = i[r];
    var s = i === null ? null: i.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = i;
    function t(u) {
        "use strict";
        i.call(this, u);
        this._disabled=!!this._data.disabled;
        this._onclickHandler = this._data.onclick;
    }
    t.prototype.getValue = function() {
        "use strict";
        return this._data.value;
    };
    t.prototype.getLabel = function() {
        "use strict";
        return this._data.label;
    };
    t.prototype.getAccessKey = function() {
        "use strict";
        return this._data.label && this._data.label.charAt(0);
    };
    t.prototype.focus = function(u) {
        "use strict";
        if (this.isDisabled() ||!this._root.offsetParent)
            return false;
        g.addClass(this._root, "_54ne");
        g.addClass(this._root, 'selected');
        u || this._anchor.focus();
    };
    t.prototype.blur = function() {
        "use strict";
        g.removeClass(this._root, "_54ne");
        g.removeClass(this._root, 'selected');
    };
    t.prototype.handleClick = function() {
        "use strict";
        if (this.isDisabled())
            return false;
        if (typeof this._onclickHandler === 'function')
            return this._onclickHandler();
        return true;
    };
    t.prototype.setOnClickHandler = function(u) {
        "use strict";
        this._onclickHandler = u;
    };
    t.prototype._renderItemContent = function() {
        "use strict";
        this._anchor = h.create('a', {
            className: (("_54nc") + (this._data.icon ? ' ' + "_54nu" : ''))
        });
        if (this._data.children) {
            var u = null;
            if (this._data.icon)
                u = k(this._data.icon, {
                    className: 'mrs'
                });
            j.render(j.createElement("span", null, u, j.createElement("span", {
                className: "_54nh"
            }, this._data.children)), this._anchor);
            this._data.label = this._anchor.innerText || this._anchor.textContent;
        } else {
            var v = h.create('span', null, h.create('span', {
                className: "_54nh"
            }, this._data.markup || this._data.label));
            if (this._data.icon)
                h.prependContent(v, this._data.icon);
            h.setContent(this._anchor, v);
        }
        if (!this._data.href)
            this._data.href = '#';
        if (!this.isDisabled())
            p(this._anchor, this._data);
        h.setAttributes(this._anchor, this.__getAttributesFromData());
        this._anchor.setAttribute('role', 'menuitem');
        var w = this._data.title;
        w && this._anchor.setAttribute('title', w);
        return this._anchor;
    };
    t.prototype.isDisabled = function() {
        "use strict";
        return this._disabled;
    };
    t.prototype.enable = function() {
        "use strict";
        p(this._anchor, this._data);
        g.removeClass(this._root, "_5arm");
        this._disabled = false;
    };
    t.prototype.disable = function() {
        "use strict";
        q(this._anchor);
        g.addClass(this._root, "_5arm");
        this._disabled = true;
    };
    t.prototype.render = function() {
        "use strict";
        var u = s.render.call(this);
        if (this._data.disabled)
            g.addClass(u, "_5arm");
        return u;
    };
    t.prototype.destroy = function() {
        "use strict";
        if (this._anchor)
            j.unmountComponentAtNode(this._anchor);
    };
    l(t.prototype, {
        hasAction: n.thatReturnsTrue
    });
    e.exports = t;
}, null);
__d("MenuSelectableItem", ["CSS", "MenuItem", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
    for (var k in h)
        if (h.hasOwnProperty(k))
            m[k] = h[k];
    var l = h === null ? null: h.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = h;
    function m(n) {
        "use strict";
        h.call(this, n);
        this._selected=!!this._data.selected;
    }
    m.prototype.getLabel = function() {
        "use strict";
        return this._data.label;
    };
    m.prototype.getIcon = function() {
        "use strict";
        return this._data.icon;
    };
    m.prototype.isSelected = function() {
        "use strict";
        return this._selected;
    };
    m.prototype.select = function() {
        "use strict";
        if (this.isDisabled())
            return false;
        g.addClass(this._root, "_54nd");
        this._anchor.setAttribute('aria-selected', 'true');
        this._selected = true;
    };
    m.prototype.deselect = function() {
        "use strict";
        g.removeClass(this._root, "_54nd");
        this._anchor.setAttribute('aria-selected', 'false');
        this._selected = false;
    };
    m.prototype.render = function() {
        "use strict";
        var n = l.render.call(this);
        if (this._data.selected) {
            g.addClass(n, "_54nd");
            this._anchor.setAttribute('aria-selected', 'true');
        }
        return n;
    };
    i(m.prototype, {
        _selected: false
    });
    e.exports = m;
}, null);
__d("MenuTheme", ["cx"], function(a, b, c, d, e, f, g) {
    e.exports = {
        className: "_569t"
    };
}, null);
__d("SelectableMenuUtils", [], function(a, b, c, d, e, f) {
    var g = {
        doesItemSupportSelect: function(i) {
            return h(i);
        },
        isSelected: function(i) {
            return h(i) && i.isSelected();
        }
    };
    function h(i) {
        return i.select && i.deselect && i.isSelected;
    }
    e.exports = g;
}, null);
__d("SelectableMenu", ["Menu", "arrayContains", "createArrayFrom", "SelectableMenuUtils"], function(a, b, c, d, e, f, g, h, i, j) {
    for (var k in g)
        if (g.hasOwnProperty(k))
            m[k] = g[k];
    var l = g === null ? null: g.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = g;
    function m() {
        "use strict";
        if (g !== null)
            g.apply(this, arguments);
    }
    m.prototype.focusAnItem = function() {
        "use strict";
        for (var n = 0; n < this._items.length; n++)
            if (j.isSelected(this._items[n]))
                if (this._focusItem(this._items[n]) !== false)
                    return true;
        return l.focusAnItem.call(this);
    };
    m.prototype.setValue = function(n) {
        "use strict";
        if (!this._root)
            this._render();
        var o = i(n);
        this._items.forEach(function(p) {
            if (j.doesItemSupportSelect(p))
                if (h(o, p.getValue())) {
                    p.select();
                } else if (j.isSelected(p))
                    p.deselect();
        });
        this.inform('change', this.getSelection());
    };
    m.prototype._handleItemClick = function(n, o) {
        "use strict";
        if (!j.doesItemSupportSelect(n))
            return l._handleItemClick.call(this, n, o);
        var p = this.inform('itemclick', {
            item: n,
            event: o
        });
        if (p)
            return;
        if (this._config.multiple) {
            var q = j.isSelected(n) ? n.deselect(): n.select();
            if (q !== false)
                this.inform('change', this.getSelection());
        } else {
            if (!j.isSelected(n))
                if (n.select() !== false) {
                    this._items.forEach(function(r) {
                        if (j.isSelected(r) && r !== n)
                            r.deselect();
                        });
                        this.inform('change', this.getSelection());
                }
            this.done();
        }
        return n.handleClick();
    };
    m.prototype.getSelection = function() {
        "use strict";
        var n = [];
        this._items.forEach(function(o) {
            if (j.isSelected(o))
                n.push({
                    label: o.getLabel(),
                    value: o.getValue(),
                    item: o
                });
        });
        if (!this._config.multiple)
            n = n[0];
        return n;
    };
    e.exports = m;
}, null);
__d("ReactMenu", ["Menu", "MenuItem", "MenuSelectableItem", "MenuTheme", "ReactChildren", "SelectableMenu", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    function o(w) {
        var x = [];
        k.forEach(w, function(y) {
            if (y)
                x.push(y);
        });
        return x;
    }
    function p(w) {
        w.isReactLegacyFactory = {};
        w.type = w;
    }
    for (var q in g)
        if (g.hasOwnProperty(q))
            s[q] = g[q];
    var r = g === null ? null: g.prototype;
    s.prototype = Object.create(r);
    s.prototype.constructor = s;
    s.__superConstructor__ = g;
    function s(w, x) {
        "use strict";
        var y = Object.assign({
            theme: j,
            maxheight: w ? w.maxheight: null,
            className: w ? w.className: null
        }, x);
        g.call(this, o(w.children), y);
    }
    p(s);
    for (var t in l)
        if (l.hasOwnProperty(t))
            v[t] = l[t];
    var u = l === null ? null: l.prototype;
    v.prototype = Object.create(u);
    v.prototype.constructor = v;
    v.__superConstructor__ = l;
    function v(w, x) {
        "use strict";
        var y = Object.assign({
            className: n("_57di", w ? w.className : null),
            theme: j,
            multiple: w && w.multiple,
            maxheight: w ? w.maxheight: null
        }, x);
        l.call(this, o(w.children), y);
    }
    p(v);
    s.SelectableMenu = v;
    p(h);
    s.Item = h;
    p(i);
    s.SelectableItem = i;
    e.exports = s;
}, null);
__d("XUIButton.react", ["AbstractButton.react", "ReactPropTypes", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = 'medium', m = i.createClass({
        displayName: "XUIButton",
        statics: {
            getButtonSize: function(n) {
                return n.size || l;
            }
        },
        propTypes: {
            use: h.oneOf(['default', 'special', 'confirm']),
            size: h.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']),
            borderShade: h.oneOf(['light', 'dark']),
            suppressed: h.bool
        },
        getDefaultProps: function() {
            return {
                use: 'default',
                size: l,
                borderShade: 'light',
                suppressed: false
            };
        },
        render: function() {
            var n = this.props.use, o = m.getButtonSize(this.props), p = this.props.borderShade, q = this.props.suppressed, r = (("_4jy0") + (o === 'small' ? ' ' + "_517i" : '') + (o === 'medium' ? ' ' + "_4jy3" : '') + (o === 'large' ? ' ' + "_4jy4" : '') + (o === 'xlarge' ? ' ' + "_4jy5" : '') + (o === 'xxlarge' ? ' ' + "_4jy6" : '') + (n === 'default' ? ' ' + "_517h" : '') + (n === 'confirm' ? ' ' + "_4jy1" : '') + (n === 'special' ? ' ' + "_4jy2" : '') + (p === 'light' ? ' ' + "_51sy" : '') + (p === 'dark' ? ' ' + "_9c6" : '') + (q ? ' ' + "_59pe" : '') + (n === 'confirm' || n === 'special' ? ' ' + "selected" : ''));
            return (i.createElement(g, i.__spread({}, this.props, {
                className: k(this.props.className, r)
            })));
        }
    });
    e.exports = m;
}, null);
__d("HasLayerContextMixin", [], function(a, b, c, d, e, f) {
    var g = {
        getContextNode: function() {
            var h = this.props.context;
            if (this.props.contextRef) {
                var i = this.getSiblingByRef(this.props.contextRef);
                h = i && i.getDOMNode();
            }
            return h;
        }
    };
    e.exports = g;
}, null);
__d("ContextualDialogXUITheme", ["cx"], function(a, b, c, d, e, f, g) {
    var h = {
        wrapperClassName: "_53ii",
        arrowDimensions: {
            offset: 12,
            length: 16
        }
    };
    e.exports = h;
}, null);
__d("ReactLayer", ["React", "ReactBrowserEventEmitter", "SubscriptionsHandler", "emptyFunction", "getObjectValues", "invariant", "merge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    var n = {
        componentDidMount: function() {
            this._layerContainer = document.createElement('div');
            this._renderContentIntoContainer();
            this.layer = this.createLayer(this._layerContainer);
            l(this.layer);
            this.layerSubscriptions = new i();
            this.layerSubscribe('show', function() {
                this.props.onToggle && this.props.onToggle(true);
            }.bind(this));
            this.layerSubscribe('hide', function() {
                this.props.onToggle && this.props.onToggle(false);
            }.bind(this));
            this.layerSubscribe('blur', function() {
                this.props.onBlur && this.props.onBlur();
            }.bind(this));
        },
        componentDidUpdate: function() {
            this._renderContentIntoContainer();
            this.receiveProps(this.props);
        },
        componentWillUnmount: function() {
            g.unmountComponentAtNode(this._layerContainer);
            this.layer.destroy();
            this.layer = null;
            this._layerContainer = null;
            this.layerSubscriptions.release();
            this.layerSubscriptions = null;
        },
        _renderContentIntoContainer: function() {
            g.render(g.createElement("div", null, this.props.children), this._layerContainer);
        },
        render: function() {
            return null;
        },
        enumerateBehaviors: function(p) {
            p = this.getEffectiveBehaviors(p);
            return k(p).filter(j.thatReturnsArgument);
        },
        updateBehaviors: function(p) {
            var q = this.getEffectiveBehaviors(this.props.behaviors), r = this.getEffectiveBehaviors(p), s;
            for (s in q)
                if (!r[s])
                    this.layer.disableBehavior(q[s]);
            for (s in r) {
                var t = q[s], u = r[s];
                if (t && u) {
                    l(t === u);
                    continue;
                }
                t && this.layer.disableBehavior(t);
                u && this.layer.enableBehavior(u);
            }
        },
        getEffectiveBehaviors: function(p) {
            if (!this.getDefaultEnabledBehaviors)
                return p || {};
            return m(this.getDefaultEnabledBehaviors(), p);
        },
        layerSubscribe: function(p, q) {
            var r = this.layer, s = r.subscribe || r.addListener;
            this.layerSubscriptions.addSubscriptions(s.call(r, p, function(t, u) {
                h.isEnabled() && q(t, u);
            }));
        },
        getNodeForOwnerRef: function(p) {
            var q = this.getSiblingByRef(p);
            return q && q.getDOMNode();
        }
    }, o = {
        createClass: function(p) {
            return g.createClass({
                mixins: [n, p]
            });
        }
    };
    e.exports = o;
}, null);
__d("XUIContextualDialogBody.react", ["React"], function(a, b, c, d, e, f, g) {
    var h = g.createClass({
        displayName: "XUIContextualDialogBody",
        render: function() {
            return g.createElement("div", null, this.props.children);
        }
    });
    e.exports = h;
}, null);
__d("XUIOverlayFooter.react", ["React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "XUIOverlayFooter",
        render: function() {
            return (g.createElement("div", g.__spread({}, this.props, {
                className: i(this.props.className, "_5lnf uiOverlayFooter")
            }), this.props.children));
        }
    });
    e.exports = j;
}, null);
__d("XUIContextualDialogFooter.react", ["React", "XUIOverlayFooter.react", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "XUIContextualDialogFooter",
        render: function() {
            return (g.createElement(h, {
                className: "_572u"
            }, this.props.children));
        }
    });
    e.exports = j;
}, null);
__d("XUIContextualDialogTitle.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "XUIContextualDialogTitle",
        propTypes: {
            use: g.PropTypes.oneOf(['primary', 'secondary'])
        },
        getDefaultProps: function() {
            return {
                use: 'primary'
            };
        },
        render: function() {
            var j = this.props.use, k = (("_47lu") + (j === 'primary' ? ' ' + "_47lv" : '') + (j === 'secondary' ? ' ' + "_47mc" : ''));
            return (g.createElement("h3", {
                className: k
            }, this.props.children));
        }
    });
    e.exports = i;
}, null);
__d("XUIContextualDialog.react", ["HasLayerContextMixin", "ContextualDialogXUITheme", "React", "ReactAbstractContextualDialog", "ReactLayer", "XUIContextualDialogBody.react", "XUIContextualDialogFooter.react", "XUIContextualDialogTitle.react", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = i.PropTypes, q = k.createClass(j.createSpec({
        displayName: 'ReactXUIContextualDialog',
        theme: h
    })), r = i.createClass({
        displayName: "XUIContextualDialog",
        mixins: [g],
        propTypes: {
            position: p.oneOf(['above', 'below', 'left', 'right']),
            alignment: p.oneOf(['left', 'center', 'right']),
            offsetX: p.number,
            offsetY: p.number,
            width: p.number,
            autoFocus: p.bool,
            arrowBehavior: p.func,
            behaviors: p.object,
            shown: p.bool,
            context: p.object,
            contextRef: p.string,
            hoverContext: p.object,
            hoverShowDelay: p.number,
            hoverHideDelay: p.number,
            hasActionableContext: p.bool
        },
        getDefaultProps: function() {
            return {
                hasActionableContext: false
            };
        },
        _getDialogBody: function() {
            return this._getChildOfType(l.type);
        },
        _getDialogTitle: function() {
            return this._getChildOfType(n.type);
        },
        _getDialogFooter: function() {
            return this._getChildOfType(m.type);
        },
        _getChildOfType: function(s) {
            var t = null;
            i.Children.forEach(this.props.children, function(u) {
                if (!t && u.type === s)
                    t = u;
            });
            return t;
        },
        render: function() {
            var s = this.props.children, t = this._getDialogBody();
            if (t)
                s = i.createElement("div", {
                    className: "_53iv"
                }, this._getDialogTitle(), t);
            return (i.createElement(q, i.__spread({}, this.props, {
                ref: "dialog",
                context: this.getContextNode()
            }), s, t ? this._getDialogFooter() : null));
        }
    });
    r.WIDTH = {
        NORMAL: 312,
        WIDE: 400
    };
    e.exports = r;
}, null);
__d("XUIDialogBody.react", ["React", "cx", "joinClasses", "XUIText.react"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = g.createClass({
        displayName: "XUIDialogBody",
        propTypes: {
            useCustomPadding: g.PropTypes.bool
        },
        render: function() {
            var l = (("_4-i2") + (!this.props.useCustomPadding ? ' ' + "_57_a" : ''));
            return (g.createElement(j, g.__spread({}, this.props, {
                className: i(this.props.className, l),
                display: "block",
                size: "medium"
            }), this.props.children));
        }
    });
    e.exports = k;
}, null);
__d("ReactXUIMenu", ["ReactMenu", "XUIMenuTheme", "XUIMenuWithSquareCorner"], function(a, b, c, d, e, f, g, h, i) {
    function j(r) {
        r.isReactLegacyFactory = {};
        r.type = r;
    }
    for (var k in g)
        if (g.hasOwnProperty(k))
            m[k] = g[k];
    var l = g === null ? null: g.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = g;
    function m(r) {
        "use strict";
        var s = {
            theme: h
        };
        if (!r || r.withsquarecorner !== false)
            s.behaviors = [i];
        g.call(this, r, s);
    }
    j(m);
    var n = g.SelectableMenu;
    for (var o in n)
        if (n.hasOwnProperty(o))
            q[o] = n[o];
    var p = n === null ? null: n.prototype;
    q.prototype = Object.create(p);
    q.prototype.constructor = q;
    q.__superConstructor__ = n;
    function q(r) {
        "use strict";
        var s = {
            theme: h
        };
        if (!r || r.withsquarecorner !== false)
            s.behaviors = [i];
        n.call(this, r, s);
    }
    j(q);
    m.SelectableMenu = q;
    m.Item = g.Item;
    m.SelectableItem = g.SelectableItem;
    e.exports = m;
}, null);
__d("coalesce", [], function(a, b, c, d, e, f) {
    function g() {
        for (var h = 0; h < arguments.length; ++h)
            if (arguments[h] != null)
                return arguments[h];
        return null;
    }
    e.exports = g;
}, null);
__d("AttachmentRelatedShareConstants", [], function(a, b, c, d, e, f) {
    var g = {
        ARTICLE_CLICK: 'article_click',
        VIDEO_CLICK: 'video_click',
        FBVIDEO_CLICK: 'fbvideo_click',
        GAME_CLICK: 'game_click',
        EVENT_DELAY: 1000,
        HIDE_DELAY: 100,
        PHOTO_CLICK: 'photo_click'
    };
    e.exports = g;
}, null);
__d("FeedBlacklistButton", ["Arbiter", "Event"], function(a, b, c, d, e, f, g, h) {
    var i = {
        BLACKLIST: 'feed_blacklist',
        UNBLACKLIST: 'feed_unblacklist',
        init: function(j, k, l, m) {
            h.listen(k, 'click', function() {
                var n = {
                    profile_id: m
                };
                g.inform(i.BLACKLIST, n);
                g.inform('UnfollowingUser', n);
            });
            h.listen(l, 'click', function() {
                var n = {
                    profile_id: m
                };
                g.inform(i.UNBLACKLIST, n);
                g.inform('FollowingUser', n);
            });
            g.subscribe(i.BLACKLIST, function(n, o) {
                if (m == o.profile_id)
                    j.swap();
            });
            g.subscribe(i.UNBLACKLIST, function(n, o) {
                if (m == o.profile_id)
                    j.unswap();
            });
        }
    };
    e.exports = a.FeedBlacklistButton || i;
}, null);
__d("XPubcontentChainedSuggestionsControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/chained_suggestions\/", {
        pageid: {
            type: "String"
        },
        profileid: {
            type: "Int"
        },
        eh: {
            type: "Bool"
        },
        friendid: {
            type: "Int"
        }
    });
}, null);
__d("SubscribeButton", ["Arbiter", "AsyncRequest", "Button", "CSS", "Event", "Tooltip", "XPubcontentChainedSuggestionsControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = {
        SUBSCRIBED: 'FollowingUser',
        UNSUBSCRIBED: 'UnfollowingUser',
        _enable: function(o) {
            i.setEnabled(o, true);
            l.remove(o);
        },
        _disable: function(o, p) {
            i.setEnabled(o, false);
            if (p)
                l.set(o, p);
        },
        init: function(o, p, q, r, s, t, u, v, w) {
            v = (typeof v !== 'undefined') ? v : false;
            var x = (typeof w !== 'undefined');
            if (x&&!u&&!v)
                n._disable(p, w);
            k.listen(p, 'click', function() {
                g.inform(n.SUBSCRIBED, {
                    profile_id: r,
                    suppress: true
                });
            });
            g.subscribe(n.SUBSCRIBED, function(y, z) {
                if (r == z.profile_id) {
                    if (!s)
                        q.suppressNextMouseEnter && q.suppressNextMouseEnter();
                    if (x) {
                        if (typeof z.connected !== 'undefined')
                            u = z.connected;
                        if (u || v)
                            n._enable(p);
                    }
                    o.swap();
                    if (t === true) {
                        var aa = (new m()).setBool('eh', true).setInt('profileid', r).getURI();
                        new h().setURI(aa).send();
                    }
                }
            });
            g.subscribe(n.UNSUBSCRIBED, function(y, z) {
                if (r == z.profile_id) {
                    o.unswap();
                    q.hideFlyout && q.hideFlyout();
                    if (x) {
                        if (typeof z.connected !== 'undefined')
                            u = z.connected;
                        if (!u&&!v)
                            n._disable(p, w);
                    }
                    g.inform('SubMenu/Reset');
                }
            });
        },
        initSubscribe: function(o, p) {
            k.listen(o, 'click', function() {
                setTimeout(g.inform.bind(g, n.SUBSCRIBED, {
                    profile_id: p
                }), 0);
            });
        },
        initUnsubscribe: function(o, p) {
            k.listen(o, 'click', function() {
                setTimeout(g.inform.bind(g, n.UNSUBSCRIBED, {
                    profile_id: p
                }), 0);
            });
        },
        initSubscribeMenuItem: function(o, p, q) {
            j.hide(p);
            this._initMenuItem(o, p, q);
        },
        initUnsubscribeMenuItem: function(o, p, q) {
            j.hide(o);
            this._initMenuItem(o, p, q);
        },
        _initMenuItem: function(o, p, q) {
            this.initSubscribe(o, q);
            this.initUnsubscribe(p, q);
            g.subscribe(n.SUBSCRIBED, function(r, s) {
                j.hide(o);
                j.show(p);
            });
            g.subscribe(n.UNSUBSCRIBED, function(r, s) {
                j.hide(p);
                j.show(o);
            });
        }
    };
    e.exports = n;
}, null);
__d("DialogHideOnSuccess", ["CSS", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._layer = k;
    }
    j.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe('success', this._handle.bind(this));
    };
    j.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    j.prototype._handle = function(k, event) {
        "use strict";
        if (g.hasClass(event.getTarget(), "_s"))
            this._layer.hide();
    };
    h(j.prototype, {
        _subscription: null
    });
    e.exports = j;
}, null);
__d("Tour", ["Arbiter", "LayerDestroyOnHide", "LayerHideOnEscape", "NavigationMessage", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l() {
        "use strict";
        if (l._instance)
            l._instance.setTourComplete();
        l._instance = this;
    }
    l.prototype.init = function() {
        "use strict";
        this._pageLeaveToken = g.subscribe('onload/exit', this.handleLeavePage.bind(this));
        this._navigationBeginToken = g.subscribe(j.NAVIGATION_BEGIN, this.handleTransition.bind(this));
        this.steps = {};
        return this;
    };
    l.prototype.registerStep = function(m, n) {
        "use strict";
        m.disableBehavior(h);
        m.disableBehavior(i);
        this.steps[n] = m;
        m.subscribe('show', function() {
            m.inform('tour-dialog-show', m);
        });
        if (!this.getTourStarted())
            this.setTourStart();
    };
    l.prototype._unsubscribeSubscriptions = function() {
        "use strict";
        this._navigationBeginToken.unsubscribe();
        this._pageLeaveToken.unsubscribe();
    };
    l.prototype.handleLeavePage = function() {
        "use strict";
        this._unsubscribeSubscriptions();
    };
    l.prototype.handleTransition = function() {
        "use strict";
        this._unsubscribeSubscriptions();
    };
    l.prototype.handleTourStart = function() {
        "use strict";
    };
    l.prototype.handleTourStop = function() {
        "use strict";
    };
    l.prototype.handleTourComplete = function() {
        "use strict";
    };
    l.prototype.showStep = function(m) {
        "use strict";
        var n = this.steps[m];
        if (!(this.openDialog == n))
            this.hideOpenDialog();
        if (!n)
            return;
        this.openDialog = n;
        n.show();
    };
    l.prototype.hideOpenDialog = function() {
        "use strict";
        if (this.openDialog) {
            this.openDialog.hide();
            this.openDialog = null;
        }
    };
    l.prototype.getTourStarted = function() {
        "use strict";
        return this.tourStarted;
    };
    l.prototype.setTourStart = function() {
        "use strict";
        this.tourStarted = true;
        this.handleTourStart();
    };
    l.prototype.setTourStop = function() {
        "use strict";
        this.tourStarted = false;
        this.hideOpenDialog();
        this.handleTourStop();
    };
    l.prototype.setTourComplete = function() {
        "use strict";
        if (this.tourComplete)
            return;
        this.setTourStop();
        this.tourComplete = true;
        this.handleTourComplete();
    };
    l.prototype.hideStep = function(m) {
        "use strict";
        var n = this.steps[m];
        n && n.hide();
    };
    l.getInstance = function() {
        "use strict";
        return l._instance || (l._instance = new l());
    };
    k(l.prototype, {
        tourStarted: false,
        tourComplete: false,
        _navigationBeginToken: null,
        _pageLeaveToken: null,
        steps: {},
        openDialog: null
    });
    e.exports = l;
}, null);
__d("PageFanning", ["Animation", "AsyncRequest", "CSS", "DOM", "Parent", "URI", "$", "collectDataAttributes", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = {
        setFanStatus: function(r, s, t, u, v, w, x) {
            var y = {
                ft: {}
            };
            if (r)
                y = {
                    ft: n(r, ['ft']).ft
                };
            v = v || function(ba) {
                var ca = ba.getPayload();
                if (!ca ||!r)
                    return;
                if (ca.reload) {
                    p.reloadOnFanStatusChanged();
                } else 
                    q(r, ca);
            };
            var z = {
                fbpage_id: s,
                add: t,
                reload: u
            };
            if (x != null)
                o(z, x);
            o(z, y);
            var aa = new h().setURI('/ajax/pages/fan_status.php').setData(z).setNectarModuleDataSafe(r).setHandler(v);
            if (w)
                aa.setErrorHandler(w);
            aa.send();
            return false;
        },
        reloadOnFanStatusChanged: function() {
            var r = l.getRequestURI();
            window.location.href = r;
        },
        toggleLikeOnFanStatusChanged: function(r, s) {
            var t = m('liked_pages_like_action_' + r), u = m('liked_pages_undo_action_' + r);
            i.conditionClass(t, 'hidden_elem', s);
            i.conditionClass(u, 'hidden_elem', !s);
        }
    };
    function q(r, s) {
        var t = s.feedback;
        if (!t)
            return;
        if (k.byClass(r, 'fbTimelineEscapeSectionItem'))
            r = k.byClass(r, 'fan_status_inactive') || r;
        var u = j.create('span', {
            className: 'fan_status_inactive'
        }, t);
        r.parentNode.replaceChild(u, r);
        var v = function() {
            if (s.can_repeat_action)
                u.parentNode.replaceChild(r, u);
        };
        new g(u).duration(3000).checkpoint().to('backgroundColor', '#FFFFFF').duration(1000).ondone(v).go();
    }
    e.exports = p;
}, null);
__d("XPagesLikeCountControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pages\/x\/updateLikeCountDomString\/", {
        page_id: {
            type: "Int",
            required: true
        },
        like_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d("PageLikeButton", ["Arbiter", "AsyncRequest", "AsyncResponse", "Event", "PageFanning", "SubscribeButton", "FeedBlacklistButton", "Tour", "URI", "XPagesLikeCountControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = {
        LIKED: 'liked',
        UNLIKED: 'unliked',
        LIKED_SUCCESS: 'liked_success',
        SPM_CALLOUT: 'spm_callout',
        init: function(t, u, v, w, x, y, z, aa, ba, ca, da) {
            g.subscribe(q.LIKED, function(ea, fa) {
                if (w === fa.profile_id) {
                    t.swap();
                    if (!ba)
                        v.suppressNextMouseEnter && v.suppressNextMouseEnter();
                }
            });
            g.subscribe(q.UNLIKED, function(ea, fa) {
                if (w === fa.profile_id) {
                    t.unswap();
                    v.hideFlyout && v.hideFlyout();
                }
            });
            if (da)
                g.subscribe(q.SPM_CALLOUT, function(ea, fa) {
                    if (w === fa.profile_id) {
                        da.show();
                        g._releaseAllEvents(q.SPM_CALLOUT);
                    }
                });
            if (aa)
                g.subscribe(q.LIKED_SUCCESS, function(ea, fa) {
                    var ga = o.getRequestURI().getQueryData().app_data;
                    if (fa.profile_id === w)
                        new h().setURI('/ajax/pages/fetch_app_column.php').setData({
                            profile_id: w,
                            tab_key: aa,
                            app_data: ga
                        }).send();
                    });
            j.listen(u, 'click', function(event) {
                var ea = t.getCurrentButton();
                s(w, x, y, z, ea, event);
            }.bind(this));
        },
        initCallout: function(t, u) {
            var v = document.getElementById('pageActionLikeCalloutButton');
            j.listen(v, 'click', s.bind(null, t, u, null, null, null));
        },
        initUnlike: function(t, u, v) {
            j.listen(t, 'click', function(event) {
                r(event.getTarget(), u, false, function(w) {
                    g.inform(q.LIKED, {
                        profile_id: u
                    });
                    i.defaultErrorHandler(w);
                }, v);
                q.informUnlike(u);
            });
        },
        informLike: function(t, u, v) {
            var w = {
                profile_id: t,
                target: u,
                origin: v
            };
            g.inform(q.LIKED, w);
            w.connected = true;
            g.inform(l.SUBSCRIBED, w);
            g.inform(m.UNBLACKLIST, w);
        },
        informLikeSuccess: function(t) {
            var u = {
                profile_id: t
            };
            g.inform(q.LIKED_SUCCESS, u);
            g.inform(q.SPM_CALLOUT, u);
        },
        informUnlike: function(t) {
            var u = {
                profile_id: t
            };
            setTimeout(g.inform.bind(g, q.UNLIKED, u), 0);
            u.connected = false;
            setTimeout(g.inform.bind(g, l.UNSUBSCRIBED, u), 0);
            g.inform(m.BLACKLIST, u);
        },
        updateLikeCount: function(t, u) {
            g.subscribe(q.LIKED_SUCCESS, function(v, w) {
                var x = w.profile_id;
                if (u == x) {
                    var y = new p().setInt('page_id', u).setString('like_id', t).getURI();
                    new h().setURI(y).send();
                }
            });
        }
    };
    function r(t, u, v, w, x, y, z) {
        n.getInstance().hideStep('low_page_likes');
        k.setFanStatus(t, u, v, false, function() {
            q.informLikeSuccess(u);
        }, w, {
            fan_origin: x,
            fan_source: y,
            cat: z
        });
    }
    function s(t, u, v, w, x, event) {
        r(event.getTarget(), t, true, function(y) {
            g.inform(q.UNLIKED, {
                profile_id: t
            });
            i.defaultErrorHandler(y);
        }, u, v, w);
        q.informLike(t, x, u);
    }
    e.exports = q;
    a.PageLikeButton = q;
}, null);
__d("SwapButton", ["DOM", "Event", "Focus", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(m, n, o) {
        g.insertAfter(n, m);
        g.remove(n);
        o && i.setWithoutOutline(m);
    }
    function l(m, n, o) {
        "use strict";
        this._swapperButton = m;
        this._swappeeButton = n;
        h.listen(m, 'click', k.bind(null, n, m, true));
        if (o)
            h.listen(n, 'click', k.bind(null, m, n, true));
    }
    l.prototype.swap = function(m) {
        "use strict";
        if (this._swapperButton.parentNode)
            k(this._swappeeButton, this._swapperButton, m);
    };
    l.prototype.unswap = function(m) {
        "use strict";
        if (!this._swapperButton.parentNode)
            k(this._swapperButton, this._swappeeButton, m);
    };
    l.prototype.toggle = function(m) {
        "use strict";
        if (this._swapperButton.parentNode) {
            this.swap(m);
        } else 
            this.unswap(m);
    };
    l.prototype.getCurrentButton = function() {
        "use strict";
        return this._swapperButton.parentNode ? this._swapperButton : this._swappeeButton;
    };
    j(l.prototype, {
        _swapperButton: null,
        _swappeeButton: null
    });
    e.exports = l;
}, null);
__d("ContextualLayerUpdateOnScroll", ["Event", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._layer = j;
    }
    i.prototype.enable = function() {
        "use strict";
        this._subscriptions = [this._layer.subscribe('show', this._attachScrollListener.bind(this)), this._layer.subscribe('hide', this._removeScrollListener.bind(this))];
    };
    i.prototype.disable = function() {
        "use strict";
        while (this._subscriptions.length)
            this._subscriptions.pop().unsubscribe();
    };
    i.prototype._attachScrollListener = function() {
        "use strict";
        if (this._listener)
            return;
        var j = this._layer.getContextScrollParent();
        this._listener = g.listen(j, 'scroll', this._layer.updatePosition.bind(this._layer));
    };
    i.prototype._removeScrollListener = function() {
        "use strict";
        this._listener && this._listener.remove();
        this._listener = null;
    };
    h(i.prototype, {
        _subscriptions: []
    });
    e.exports = i;
}, null);
__d("LayerFadeOnHide", ["Animation", "Layer", "Style", "UserAgent_DEPRECATED", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        "use strict";
        this._layer = m;
    }
    l.prototype.enable = function() {
        "use strict";
        if (j.ie() < 9)
            return;
        this._subscription = this._layer.subscribe('starthide', this._handleStartHide.bind(this));
    };
    l.prototype.disable = function() {
        "use strict";
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    l.prototype._handleStartHide = function() {
        "use strict";
        var m = true, n = h.subscribe('show', function() {
            n.unsubscribe();
            m = false;
        });
        setTimeout((function() {
            n.unsubscribe();
            n = null;
            var o = function() {
                this._layer.finishHide();
            }.bind(this);
            if (m) {
                this._animate(o);
            } else 
                o();
        }).bind(this), 0);
        return false;
    };
    l.prototype._animate = function(m) {
        "use strict";
        var n = this._layer.getRoot();
        new g(n).from('opacity', 1).to('opacity', 0).duration(150).ondone(function() {
            i.set(n, 'opacity', '');
            m();
        }).go();
    };
    k(l.prototype, {
        _subscription: null
    });
    e.exports = l;
}, null);
