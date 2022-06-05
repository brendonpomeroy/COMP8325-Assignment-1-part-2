/*!CK:4166256623!*/
/*1408933134,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["yZtxG"]);
}

__d("RequiredFormListener", ["Event", "Input"], function(a, b, c, d, e, f, g, h) {
    g.listen(document.documentElement, 'submit', function(i) {
        var j = i.getTarget().getElementsByTagName('*');
        for (var k = 0; k < j.length; k++)
            if (j[k].getAttribute('required') && h.isEmpty(j[k])) {
                j[k].focus();
                return false;
            }
    }, g.Priority.URGENT);
}, null);
__d("LayerHideOnSuccess", ["copyProperties"], function(a, b, c, d, e, f, g) {
    function h(i) {
        "use strict";
        this._layer = i;
    }
    h.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe('success', this._layer.hide.bind(this._layer));
    };
    h.prototype.disable = function() {
        "use strict";
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    g(h.prototype, {
        _subscription: null
    });
    e.exports = h;
}, null);
__d("Overlay", ["CSS", "DataStore", "DOM", "Layer", "LayerButtons", "LayerDestroyOnHide", "LayerFadeOnHide", "LayerFadeOnShow", "LayerFormHooks", "LayerHideOnBlur", "LayerHideOnEscape", "LayerHideOnSuccess", "LayerHideOnTransition", "LayerMouseHooks", "LayerTabIsolation", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    for (var w in j)
        if (j.hasOwnProperty(w))
            y[w] = j[w];
    var x = j === null ? null: j.prototype;
    y.prototype = Object.create(x);
    y.prototype.constructor = y;
    y.__superConstructor__ = j;
    function y(z, aa) {
        "use strict";
        z = v({
            buildWrapper: true
        }, z || {});
        this._shouldBuildWrapper = z.buildWrapper;
        j.call(this, z, aa);
    }
    y.prototype._configure = function(z, aa) {
        "use strict";
        x._configure.call(this, z, aa);
        var ba = this.getRoot();
        this._overlay = i.scry(ba, 'div.uiOverlay')[0] || ba;
        g.hide(ba);
        i.appendContent(this.getInsertParent(), ba);
        h.set(this._overlay, 'overlay', this);
        var ca = h.get(this._overlay, 'width');
        ca && this.setWidth(ca);
        if (this.setFixed)
            this.setFixed(h.get(this._overlay, 'fixed') == 'true');
        if (h.get(this._overlay, 'fadeonshow') != 'false')
            this.enableBehavior(n);
        if (h.get(this._overlay, 'fadeonhide') != 'false')
            this.enableBehavior(m);
        if (h.get(this._overlay, 'hideonsuccess') != 'false')
            this.enableBehavior(r);
        if (h.get(this._overlay, 'hideonblur') == 'true')
            this.enableBehavior(p);
        if (h.get(this._overlay, 'destroyonhide') != 'false')
            this.enableBehavior(l);
        return this;
    };
    y.prototype._getDefaultBehaviors = function() {
        "use strict";
        return x._getDefaultBehaviors.call(this).concat([k, o, t, q, s, u]);
    };
    y.prototype.initWithoutBuildingWrapper = function() {
        "use strict";
        this._shouldBuildWrapper = false;
        return this.init.apply(this, arguments);
    };
    y.prototype._buildWrapper = function(z, aa) {
        "use strict";
        aa = x._buildWrapper.call(this, z, aa);
        if (!this._shouldBuildWrapper) {
            this._contentRoot = aa;
            return aa;
        }
        this._contentRoot = i.create('div', {
            className: 'uiOverlayContent'
        }, aa);
        return i.create('div', {
            className: 'uiOverlay'
        }, this._contentRoot);
    };
    y.prototype.getContentRoot = function() {
        "use strict";
        return this._contentRoot;
    };
    y.prototype.destroy = function() {
        "use strict";
        h.remove(this.getRoot(), 'overlay');
        x.destroy.call(this);
    };
    e.exports = y;
}, null);
__d("ContextualDialogFooterLink", ["CSS", "DOM", "Event", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this._layer = l;
    }
    k.prototype.enable = function() {
        "use strict";
        var l = this._layer.getRoot(), m = h.scry(l, '.uiContextualDialogFooterLink')[0], n = 'uiContextualDialogHoverFooterArrow';
        this._subscriptions = [i.listen(m, 'mouseenter', g.addClass.bind(null, l, n)), i.listen(m, 'mouseleave', g.removeClass.bind(null, l, n))];
    };
    k.prototype.disable = function() {
        "use strict";
        this._subscriptions.forEach(function(l) {
            l.remove();
        });
        this._subscriptions = null;
    };
    j(k.prototype, {
        _subscriptions: null
    });
    e.exports = k;
}, null);
__d("LegacyContextualDialog", ["Arbiter", "ArbiterMixin", "ARIA", "Bootloader", "ContextualDialogFooterLink", "ContextualThing", "CSS", "DataStore", "DOM", "Event", "LayerAutoFocus", "LayerRefocusOnHide", "Locale", "Overlay", "Parent", "Style", "Vector", "$", "copyProperties", "getOverlayZIndex", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
    for (var ba in t)
        if (t.hasOwnProperty(ba))
            da[ba] = t[ba];
    var ca = t === null ? null: t.prototype;
    da.prototype = Object.create(ca);
    da.prototype.constructor = da;
    da.__superConstructor__ = t;
    function da() {
        "use strict";
        if (t !== null)
            t.apply(this, arguments);
    }
    da.prototype._configure = function(ea, fa) {
        "use strict";
        ca._configure.call(this, ea, fa);
        var ga = this.getRoot(), ha = n.get.bind(null, ga);
        this.setAlignH(ha('alignh', 'left'));
        this.setOffsetX(ha('offsetx', 0));
        this.setOffsetY(ha('offsety', 0));
        this.setPosition(ha('position', 'above'));
        this._hasFooter = ha('hasfooter', false);
        if (this._hasFooter) {
            var ia = o.scry(ga, '.uiContextualDialogFooterLink')[0];
            ia && this.enableBehavior(k);
        }
        this.enableBehaviors(this._getDefaultBehaviors());
        this._setContextSubscription = this.subscribe('beforeshow', function() {
            this.unsubscribe(this._setContextSubscription);
            this._setContextSubscription = null;
            var ka = ha('context');
            if (ka) {
                this.setContext(x(ka));
            } else {
                ka = ha('contextselector');
                if (ka)
                    this.setContext(o.find(document, ka));
            }
        }.bind(this));
        this._content = o.scry(ga, '.uiContextualDialogContent')[0];
        if (this._content) {
            this._content.setAttribute('role', 'dialog');
            var ja = o.scry(this._content, '.legacyContextualDialogTitle')[0];
            if (ja)
                this._content.setAttribute('aria-labelledby', o.getID(ja));
        }
        this._showSubscription = this.subscribe('show', function() {
            var ka = aa(this.updatePosition, this);
            this._resizeListener = p.listen(window, 'resize', ka);
            this._reflowSubscription = g.subscribe('reflow', ka);
            this._setupScrollListener(this._scrollParent);
            l.register(ga, this.context);
            g.inform('layer_shown', {
                type: 'ContextualDialog'
            });
        }.bind(this));
        this._hideSubscription = this.subscribe('hide', function() {
            this._teardownResizeAndReflowListeners();
            this._teardownScrollListener();
            g.inform('layer_hidden', {
                type: 'ContextualDialog'
            });
        }.bind(this));
        return this;
    };
    da.prototype._getDefaultBehaviors = function() {
        "use strict";
        return ca._getDefaultBehaviors.call(this).concat([q, r]);
    };
    da.prototype._buildWrapper = function(ea, fa) {
        "use strict";
        var ga = ca._buildWrapper.call(this, ea, fa);
        if (!this._shouldBuildWrapper)
            return ga;
        m.addClass(ga, 'uiContextualDialog');
        return o.create('div', {
            className: 'uiContextualDialogPositioner'
        }, ga);
    };
    da.prototype.setWidth = function(ea) {
        "use strict";
        this._width = Math.floor(ea);
        return this;
    };
    da.prototype.setFixed = function(ea) {
        "use strict";
        ea=!!ea;
        m.conditionClass(this.getRoot(), 'uiContextualDialogFixed', ea);
        this._fixed = ea;
        return this;
    };
    da.prototype.setAlignH = function(ea) {
        "use strict";
        this.alignH = ea;
        this._updateAlignmentClass();
        this._shown && this.updatePosition();
        this.position && this._updateArrow();
        return this;
    };
    da.prototype.getContent = function() {
        "use strict";
        return this._content;
    };
    da.prototype.getContext = function() {
        "use strict";
        return this.context;
    };
    da.prototype.setContext = function(ea) {
        "use strict";
        if (this._setContextSubscription) {
            this.unsubscribe(this._setContextSubscription);
            this._setContextSubscription = null;
        }
        ea = x(ea);
        if (this.context && this.context != ea)
            n.remove(this.context, 'LegacyContextualDialog');
        this.context = ea;
        i.setPopup(this.getCausalElement(), this.getRoot());
        var fa = u.byClass(ea, 'fbPhotoSnowlift');
        this.setInsertParent(fa || document.body);
        if (this._scrollListener && this._scrollParent !== fa) {
            this._teardownScrollListener();
            this._setupScrollListener(fa);
        }
        this._scrollParent = fa;
        var ga = z(ea, this._insertParent);
        v.set(this.getRoot(), 'z-index', ga > 200 ? ga : '');
        n.set(this.context, 'LegacyContextualDialog', this);
        return this;
    };
    da.prototype.getCausalElement = function() {
        "use strict";
        return ca.getCausalElement.call(this) || this.context;
    };
    da.prototype.listen = function(ea, fa) {
        "use strict";
        return p.listen(this.getRoot(), ea, fa);
    };
    da.prototype.setOffsetX = function(ea) {
        "use strict";
        this.offsetX = parseInt(ea, 10) || 0;
        this._shown && this.updatePosition();
        return this;
    };
    da.prototype.setOffsetY = function(ea) {
        "use strict";
        this.offsetY = parseInt(ea, 10) || 0;
        this._shown && this.updatePosition();
        return this;
    };
    da.prototype.setPosition = function(ea) {
        "use strict";
        this.position = ea;
        for (var fa in da.POSITION_TO_CLASS)
            m.conditionClass(this.getRoot(), da.POSITION_TO_CLASS[fa], ea == fa);
        this._updateAlignmentClass();
        this._shown && this.updatePosition();
        this._updateArrow();
        return this;
    };
    da.prototype.updatePosition = function() {
        "use strict";
        if (!this.context)
            return false;
        if (this._width)
            v.set(this._overlay, 'width', this._width + 'px');
        var ea = this._fixed ? 'viewport': 'document', fa = w.getElementPosition(this.context, ea), ga = this._scrollParent;
        if (ga)
            fa = fa.sub(w.getElementPosition(ga, 'document')).add(ga.scrollLeft, ga.scrollTop);
        var ha = w.getElementDimensions(this.context), ia = this.position == 'above' || this.position == 'below', ja = s.isRTL();
        if ((this.position == 'right' || (ia && this.alignH == 'right')) != ja)
            fa = fa.add(ha.x, 0);
        if (this.position == 'below')
            fa = fa.add(0, ha.y);
        var ka = new w(0, 0);
        if (ia && this.alignH == 'center') {
            ka = ka.add((ha.x - this._width) / 2, 0);
        } else {
            var la = ia ? ha.x: ha.y, ma = 2 * da.ARROW_INSET;
            if (la < ma) {
                var na = la / 2 - da.ARROW_INSET;
                if (ia && (this.alignH == 'right' != ja))
                    na =- na;
                ka = ka.add(ia ? na : 0, ia ? 0 : na);
            }
        }
        ka = ka.add(this.offsetX, this.offsetY);
        if (ja)
            ka = ka.mul( - 1, 1);
        fa = fa.add(ka);
        if (this._fixed)
            fa = new w(fa.x, fa.y, 'document');
        fa.setElementPosition(this.getRoot());
        this._adjustVerticalPosition();
        this._adjustHorizontalPosition();
        return true;
    };
    da.prototype.scrollTo = function() {
        "use strict";
        if (this.context)
            j.loadModules(["DOMScroll"], function(ea) {
                ea.scrollTo(this.context, true, true);
            }.bind(this));
    };
    da.prototype.destroy = function() {
        "use strict";
        this.unsubscribe(this._showSubscription);
        this.unsubscribe(this._hideSubscription);
        if (this._setContextSubscription) {
            this.unsubscribe(this._setContextSubscription);
            this._setContextSubscription = null;
        }
        this._teardownScrollListener();
        this._teardownResizeAndReflowListeners();
        this.context && n.remove(this.context, 'LegacyContextualDialog');
        ca.destroy.call(this);
    };
    da.prototype._adjustVerticalPosition = function() {
        "use strict";
        if (this.position != 'left' && this.position != 'right') {
            v.set(this._overlay, 'top', '');
            return;
        }
        var ea = this.getRoot(), fa = w.getElementPosition(ea, 'viewport').y, ga = w.getElementDimensions(this._overlay).y, ha = w.getViewportDimensions().y, ia = Math.min(Math.max(fa, da.MIN_TOP_GAP), da.TOP_MARGIN), ja = Math.min(Math.max(0, fa + ga + da.BOTTOM_MARGIN - ha), Math.max( - ia, fa - ia), ga - 2 * da.ARROW_INSET);
        v.set(this._overlay, 'top', ( - 1 * ja) + 'px');
        v.set(this._arrow, 'top', da.ARROW_OFFSET + 'px');
        v.set(this._arrow, 'marginTop', ja + 'px');
    };
    da.prototype._adjustHorizontalPosition = function() {
        "use strict";
        if ((this.position != 'above' && this.position != 'below') || this.alignH != 'left') {
            v.set(this._overlay, 'left', '');
            v.set(this._overlay, 'right', '');
            return;
        }
        var ea = this.getRoot(), fa = w.getElementPosition(ea, 'viewport').x, ga = w.getElementDimensions(this._overlay).x, ha = w.getViewportDimensions().x, ia = s.isRTL(), ja;
        if (!ia) {
            ja = fa + ga + da.RIGHT_MARGIN - ha;
        } else 
            ja = da.LEFT_MARGIN + ga - fa;
        ja = Math.min(Math.max(0, ja), ga - 2 * da.ARROW_INSET);
        v.set(this._overlay, ia ? 'right' : 'left', - 1 * ja + 'px');
        v.set(this._arrow, ia ? 'right' : 'left', da.ARROW_OFFSET + 'px');
        v.set(this._arrow, ia ? 'marginRight' : 'marginLeft', ja + 'px');
    };
    da.prototype._updateArrow = function() {
        "use strict";
        var ea = 0;
        if (this.position == 'above' || this.position == 'below')
            switch (this.alignH) {
            case 'center':
                ea = 50;
                break;
            case 'right':
                ea = 100;
                break;
            }
        this._renderArrow(da.POSITION_TO_ARROW[this.position], ea);
    };
    da.prototype._renderArrow = function(ea, fa) {
        "use strict";
        for (var ga in da.ARROW_CLASS)
            m.conditionClass(this._overlay, da.ARROW_CLASS[ga], ea == ga);
        m.conditionClass(this._overlay, 'uiContextualDialogWithFooterArrowBottom', ea == 'bottom' && this._hasFooter);
        if (ea == 'none')
            return;
        if (!this._arrow) {
            this._arrow = o.create('i', {
                className: 'uiContextualDialogArrow'
            });
            o.appendContent(this._overlay, this._arrow);
        }
        v.set(this._arrow, 'top', '');
        v.set(this._arrow, 'left', '');
        v.set(this._arrow, 'right', '');
        v.set(this._arrow, 'margin', '');
        var ha = ea == 'top' || ea == 'bottom', ia = ha ? (s.isRTL() ? 'right' : 'left'): 'top';
        fa = fa || 0;
        v.set(this._arrow, ia, fa + '%');
        var ja = da.ARROW_LENGTH + da.ARROW_OFFSET * 2, ka =- (ja * fa / 100 - da.ARROW_OFFSET);
        v.set(this._arrow, 'margin-' + ia, ka + 'px');
    };
    da.prototype._updateAlignmentClass = function() {
        "use strict";
        m.conditionClass(this.getRoot(), da.RIGHT_ALIGNED_CLASS, (this.position == 'above' || this.position == 'below') && this.alignH == 'right');
    };
    da.prototype._setupScrollListener = function(ea) {
        "use strict";
        this._scrollListener = p.listen(ea || window, 'scroll', aa(this._adjustVerticalPosition, this));
    };
    da.prototype._teardownScrollListener = function() {
        "use strict";
        if (this._scrollListener) {
            this._scrollListener.remove();
            this._scrollListener = null;
        }
    };
    da.prototype._teardownResizeAndReflowListeners = function() {
        "use strict";
        if (this._resizeListener) {
            this._resizeListener.remove();
            this._resizeListener = null;
        }
        if (this._reflowSubscription) {
            this._reflowSubscription.unsubscribe();
            this._reflowSubscription = null;
        }
    };
    da.getInstance = function(ea) {
        "use strict";
        var fa = n.get(ea, 'LegacyContextualDialog');
        if (!fa) {
            var ga = u.byClass(ea, 'uiOverlay');
            if (ga)
                fa = n.get(ga, 'overlay');
        }
        return fa;
    };
    y(da, h, {
        ARROW_OFFSET: 15,
        ARROW_LENGTH: 16,
        ARROW_INSET: 22,
        TOP_MARGIN: 50,
        BOTTOM_MARGIN: 30,
        LEFT_MARGIN: 15,
        RIGHT_MARGIN: 30,
        MIN_TOP_GAP: 5,
        POSITION_TO_CLASS: {
            above: 'uiContextualDialogAbove',
            below: 'uiContextualDialogBelow',
            left: 'uiContextualDialogLeft',
            right: 'uiContextualDialogRight'
        },
        RIGHT_ALIGNED_CLASS: 'uiContextualDialogRightAligned',
        ARROW_CLASS: {
            bottom: 'uiContextualDialogArrowBottom',
            top: 'uiContextualDialogArrowTop',
            right: 'uiContextualDialogArrowRight',
            left: 'uiContextualDialogArrowLeft'
        },
        POSITION_TO_ARROW: {
            above: 'bottom',
            below: 'top',
            left: 'right',
            right: 'left'
        }
    });
    y(da.prototype, {
        _scrollListener: null,
        _scrollParent: null,
        _width: null,
        _fixed: false,
        _hasFooter: false,
        _showSubscription: null,
        _hideSubscription: null,
        _setContextSubscription: null,
        _resizeListener: null,
        _reflowSubscription: null
    });
    e.exports = da;
}, null);
