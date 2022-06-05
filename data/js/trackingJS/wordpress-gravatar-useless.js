if ("undefined" == typeof(console)) {
    console = {
        log: function(b) {},
        debug: function(b) {}
    }
}
var Gravatar = {
    profile_stack: {},
    profile_map: {},
    overTimeout: false,
    outTimeout: false,
    stopOver: false,
    active_grav: false,
    active_hash: false,
    active_id: false,
    active_grav_clone: false,
    profile_cb: null,
    stats_queue: [],
    throbber: null,
    has_bg: false,
    disabled: false,
    url_prefix: "http://en",
    disable: function() {
        Gravatar.disabled = true;
        Gravatar.hide_card();
        var b = new Date(2100, 1, 1, 1, 1, 1);
        Gravatar.stat("disable");
        if ( - 1 == window.location.host.search(/wordpress.com/i)) {
            document.cookie = "nohovercard=1; expires=" + b.toUTCString() + ";"
        } else {
            document.cookie = "nohovercard=1; expires=" + b.toUTCString() + "; domain=.wordpress.com; path=/"
        }
    },
    mouseOut: function(b) {
        b.stopImmediatePropagation();
        Gravatar.stopOver = true;
        Gravatar.outTimeout = setTimeout(function() {
            Gravatar.hide_card()
        }, 300)
    },
    init: function(d, f) {
        var b = document.cookie.split(";"), e, g;
        for (e = 0; e < b.length; e++) {
            g = b[e];
            while (" " == g.charAt(0)) {
                g = g.substring(1, g.length)
            }
            if (0 == g.indexOf("nohovercard=1")) {
                return 
            }
        }
        if ("https:" == window.location.protocol) {
            this.url_prefix = "https://secure"
        }
        this.attach_profiles(d, f);
        this.add_card_css();
        jQuery("body").on("mouseenter.gravatar mouseleave.gravatar", "img.grav-hashed", function(c) {
            if (Gravatar.disabled) {
                return 
            }
            c.preventDefault();
            c.stopPropagation();
            if ("mouseleave" == c.type || "mouseout" == c.type) {
                return Gravatar.mouseOut.call(this, c)
            }
            Gravatar.stopOver = false;
            Gravatar.active_id = jQuery(this).attr("id");
            Gravatar.active_hash = Gravatar.active_id.split("-")[1];
            Gravatar.untilt_gravatar();
            clearTimeout(Gravatar.overTimeout);
            if (false === Gravatar.profile_map["g" + Gravatar.active_hash]) {
                return 
            }
            Gravatar.stat("hover");
            clearTimeout(Gravatar.outTimeout);
            Gravatar.tilt_gravatar();
            Gravatar.fetch_profile_by_hash(Gravatar.active_hash, Gravatar.active_id);
            Gravatar.overTimeout = setTimeout(function() {
                Gravatar.show_card()
            }, 600)
        });
        jQuery("body").on("mouseenter.gravatar mouseleave.gravatar", "div.gcard, img.grav-clone", function(c) {
            if (Gravatar.disabled) {
                return 
            }
            c.preventDefault();
            c.stopPropagation();
            if (c.type == "mouseenter" || c.type == "mouseover") {
                Gravatar.stopOver = false;
                clearTimeout(Gravatar.outTimeout)
            } else {
                Gravatar.mouseOut.call(this, c)
            }
        });
        jQuery(window).bind("scroll", function() {
            if (!Gravatar.active_hash.length) {
                return 
            }
            Gravatar.hide_card()
        })
    },
    attach_profiles: function(b, c) {
        setInterval(Gravatar.send_stats, 3000);
        b = "undefined" == typeof(b) ? "body" : b;
        if (c && "string" == typeof(c)) {
            jQuery(c).addClass("no-grav")
        }
        jQuery(b + ' img[src*="gravatar.com/avatar"]').not(".no-grav, .no-grav img").each(function() {
            hash = Gravatar.extract_hash(this);
            uniq = 0;
            if (jQuery("#grav-" + hash + "-" + uniq).length) {
                while (jQuery("#grav-" + hash + "-" + uniq).length) {
                    uniq++
                }
            }
            var d = jQuery(this).attr("id", "grav-" + hash + "-" + uniq).attr("title", "").removeAttr("title");
            if (d.parent("a").size()) {
                d.parent("a").attr("title", "").removeAttr("title")
            }
            d.addClass("grav-hashed");
            if (d.parents("#comments, .comments, #commentlist, .commentlist, .grav-hijack").size() ||!d.parents("a:first").size()) {
                d.addClass("grav-hijack")
            }
        })
    },
    show_card: function() {
        if (Gravatar.stopOver) {
            return 
        }
        dom_id = this.profile_map["g" + Gravatar.active_hash];
        jQuery(".gcard").hide();
        if ("fetching" == this.profile_stack["g" + Gravatar.active_hash]) {
            Gravatar.show_throbber();
            this.listen(Gravatar.active_hash, "show_card");
            Gravatar.stat("wait");
            return 
        }
        if ("undefined" == typeof(this.profile_stack["g" + Gravatar.active_hash])) {
            Gravatar.show_throbber();
            this.listen(Gravatar.active_hash, "show_card");
            this.fetch_profile_by_hash(Gravatar.active_hash, dom_id);
            return 
        }
        Gravatar.stat("show");
        Gravatar.hide_throbber();
        if (!jQuery("#profile-" + this.active_hash).length) {
            this.build_card(this.active_hash, this.profile_stack["g" + this.active_hash])
        }
        this.render_card(this.active_grav, "profile-" + this.active_hash)
    },
    hide_card: function() {
        clearTimeout(Gravatar.overTimeout);
        this.untilt_gravatar();
        jQuery("div.gcard").filter("#profile-" + this.active_hash).fadeOut(120, function() {
            jQuery("img.grav-large").stop().remove()
        }).end().not("#profile-" + this.active_hash).hide()
    },
    render_card: function(b, f) {
        var h = jQuery("#" + f).stop();
        var o = b;
        var t = o.offset();
        if (null != t) {
            var n = o.width();
            var d = o.height();
            var j = 5 + (n * 0.4);
            var p = h.width();
            var r = h.height();
            if (p == jQuery(window).width()) {
                p = 400;
                r = 200
            }
            var e = t.left - 17;
            var q = t.top - 7;
            var c = "pos-right";
            if (t.left + n + j + p > jQuery(window).width() + jQuery(window).scrollLeft()) {
                e = t.left - p + n + 17;
                c = "pos-left"
            }
            var k = d * 0.25;
            jQuery("#" + f).removeClass("pos-right pos-left").addClass(c).css({
                top: (q - k) + "px",
                left: e + "px"
            });
            var g = (d / 2);
            if (g > r) {
                g = r / 2
            }
            if (g > (r / 2) - 6) {
                g = (r / 2) - 6
            }
            if (g > 53) {
                g = 53
            }
            if (this.has_bg) {
                g = g - 8
            }
            if (g < 0) {
                g = 0
            }
            var m = {
                height: ((d * 2) + k) + "px"
            };
            if ("pos-right" == c) {
                m.right = "auto";
                m.left = "-7px";
                m["background-position"] = "0px " + g + "px"
            } else {
                m.right = "-10px";
                m.left = "auto";
                m["background-position"] = "0px " + g + "px"
            }
            jQuery("#" + f + " .grav-cardarrow").css(m)
        }
        h.stop().css({
            opacity: 0
        }).show().animate({
            opacity: 1
        }, 150, "linear", function() {
            jQuery(this).css({
                opacity: "auto"
            });
            jQuery(this).stop()
        })
    },
    build_card: function(f, c) {
        Object.size = function(q) {
            var p = 0, o;
            for (o in q) {
                if (q.hasOwnProperty(o)) {
                    p++
                }
            }
            return p
        };
        GProfile.init(c);
        var g = GProfile.get("urls");
        var n = GProfile.get("photos");
        var h = GProfile.get("accounts");
        var d = 100;
        if (Object.size(g) > 3) {
            d += 90
        } else {
            d += 10 + (20 * Object.size(g))
        }
        if (Object.size(h) > 0) {
            d += 30
        }
        var k = GProfile.get("aboutMe");
        k = k.replace(/<[^>]+>/ig, "");
        k = k.toString().substr(0, d);
        if (d == k.length) {
            k += '<a href="' + GProfile.get("profileUrl") + '" target="_blank">&#8230;</a>'
        }
        var m = "grav-inner";
        if (Gravatar.my_hash && f == Gravatar.my_hash) {
            m += " grav-is-user";
            if (!k.length) {
                k = "<p>Want a better profile? <a class='grav-edit-profile' href='http://gravatar.com/profiles/edit/?noclose' target='_blank'>Click here</a>.</p>"
            }
        }
        if (k.length) {
            m += " gcard-about"
        }
        name = GProfile.get("displayName");
        if (!name.length) {
            name = GProfile.get("preferredUsername")
        }
        var b = '<div id="profile-' + f + '" class="gcard grofile"> 						<div class="grav-inner"> 							<div class="grav-grav"> 								<a href="' + GProfile.get("profileUrl") + '" target="_blank"> 									<img src="' + GProfile.get("thumbnailUrl") + '?s=100&r=pg&d=mm" width="100" height="100" /> 								</a> 							</div> 							<div class="grav-info"> 								<h4><a href="' + GProfile.get("profileUrl") + '" target="_blank">' + name + '</a></h4> 								<p class="grav-loc">' + GProfile.get("currentLocation") + '</p> 								<p class="grav-about">' + k + '</p> 								<div class="grav-view-complete-button"> 									<a href="' + GProfile.get("profileUrl") + '" target="_blank" class="grav-view-complete">View Complete Profile</a> 								</div> 								<p class="grav-disable"><a href="#" onclick="Gravatar.disable(); return false">Turn off hovercards</a></p> 							</div> 							<div style="clear:both"></div> 						</div> 						<div class="grav-cardarrow"></div> 						<div class="grav-tag"><a href="http://gravatar.com/" title="Powered by Gravatar.com" target="_blank">&nbsp;</a></div> 					</div>';
        jQuery("body").append(jQuery(b));
        jQuery("#profile-" + f + " .grav-inner").addClass(m);
        this.has_bg = false;
        var e = GProfile.get("profileBackground");
        if (Object.size(e)) {
            this.has_bg = true;
            var j = {
                padding: "8px 0"
            };
            if (e.color) {
                j["background-color"] = e.color
            }
            if (e.url) {
                j["background-image"] = "url(" + e.url + ")"
            }
            if (e.position) {
                j["background-position"] = e.position
            }
            if (e.repeat) {
                j["background-repeat"] = e.repeat
            }
            jQuery("#profile-" + f).css(j);
            jQuery("#profile-" + f + " .grav-tag").css("top", "8px")
        }
        if (!jQuery("#profile-" + f + " .gcard-links").length&&!jQuery("#profile-" + f + " .gcard-services").length) {
            jQuery("#profile-" + f + " .grav-rightcol").css({
                width: "auto"
            })
        }
        if (!jQuery("#profile-" + f + " .gcard-about").length) {
            jQuery("#profile-" + f + " .grav-leftcol").css({
                width: "auto"
            })
        }
        if (jQuery.isFunction(Gravatar.profile_cb)) {
            Gravatar.loaded_js(f, "profile-" + f)
        }
        jQuery("#profile-" + f + " a.grav-extra-comments").click(function(o) {
            return Gravatar.stat("click_comment", o)
        });
        jQuery("#profile-" + f + " a.grav-extra-likes").click(function(o) {
            return Gravatar.stat("click_like", o)
        });
        jQuery("#profile-" + f + " .grav-links a").click(function(o) {
            return Gravatar.stat("click_link", o)
        });
        jQuery("#profile-" + f + " .grav-services a").click(function(o) {
            return Gravatar.stat("click_service", o)
        });
        jQuery("#profile-" + f + " h4 a, #profile-" + f + " .grav-view-complete, #profile-" + f + " .grav-grav a").click(function(o) {
            return Gravatar.stat("to_profile", o)
        });
        jQuery("#profile-" + f + " .grav-tag a").click(function(o) {
            if (3 == o.which || 2 == o.button || o.altKey || o.metaKey || o.ctrlKey) {
                o.preventDefault();
                o.stopImmediatePropagation();
                Gravatar.stat("egg");
                return Gravatar.whee()
            }
            return Gravatar.stat("to_gravatar", o)
        }).bind("contextmenu", function(o) {
            o.preventDefault();
            o.stopImmediatePropagation();
            Gravatar.stat("egg");
            return Gravatar.whee()
        });
        jQuery("#profile-" + f + " a.grav-edit-profile").click(function(o) {
            return Gravatar.stat("click_edit_profile", o)
        })
    },
    tilt_gravatar: function() {
        this.active_grav = jQuery("img#" + this.active_id);
        if (jQuery("img#grav-clone-" + this.active_hash).length) {
            return 
        }
        this.active_grav_clone = this.active_grav.clone().attr("id", "grav-clone-" + this.active_hash).addClass("grav-clone");
        var f = this.active_grav.offset().top + parseInt(this.active_grav.css("padding-top"), 10), e = this.active_grav.offset().left + parseInt(this.active_grav.css("padding-left"), 10);
        var d = {
            "-webkit-box-shadow": "0 0 4px rgba(0,0,0,.4)",
            "-moz-box-shadow": "0 0 4px rgba(0,0,0,.4)",
            "box-shadow": "0 0 4px rgba(0,0,0,.4)",
            "border-width": "2px 2px " + (this.active_grav.height() / 5) + "px 2px",
            "border-color": "#fff",
            "border-style": "solid",
            padding: "0px",
            margin: "-2px 0 0 -2px"
        };
        if (this.active_grav.hasClass("grav-hijack")) {
            var b = '<a href="http://gravatar.com/' + this.active_hash + '" class="grav-clone-a" target="_blank"></a>'
        } else {
            var b = this.active_grav.parents("a:first").clone(true).empty()
        }
        var c = this.active_grav_clone.css(d).wrap(b).parent().css({
            position: "absolute",
            top: f + "px",
            left: e + "px",
            "z-index": 15,
            border: "none",
            "text-decoration": "none"
        });
        jQuery("body").append(c);
        this.active_grav_clone.removeClass("grav-hashed")
    },
    untilt_gravatar: function() {
        jQuery("img.grav-clone, a.grav-clone-a").remove();
        Gravatar.hide_throbber()
    },
    show_throbber: function() {
        if (!Gravatar.throbber) {
            Gravatar.throbber = jQuery('<div id="grav-throbber" style="position: absolute; z-index: 16"><img src="' + this.url_prefix + '.gravatar.com/images/throbber.gif" alt="." width="15" height="15" /></div>')
        }
        jQuery("body").append(Gravatar.throbber);
        var b = jQuery("#" + Gravatar.active_id).offset();
        Gravatar.throbber.css({
            top: b.top + 2 + "px",
            left: b.left + 1 + "px"
        })
    },
    hide_throbber: function() {
        if (!Gravatar.throbber) {
            return 
        }
        Gravatar.throbber.remove()
    },
    fetch_profile_by_email: function(b) {
        return this.fetch_profile_by_hash(this.md5(b.toString().toLowerCase()))
    },
    fetch_profile_by_hash: function(c, b) {
        this.profile_map["g" + c] = b;
        if (this.profile_stack["g" + c] && "object" == typeof(this.profile_stack["g" + c])) {
            return this.profile_stack["g" + c]
        }
        this.profile_stack["g" + c] = "fetching";
        Gravatar.stat("fetch");
        this.load_js(this.url_prefix + ".gravatar.com/" + c + ".json?callback=Gravatar.fetch_profile_callback", function() {
            Gravatar.fetch_profile_error(c, b)
        })
    },
    fetch_profile_callback: function(b) {
        if (!b || "object" != typeof(b)) {
            return 
        }
        this.profile_stack["g" + b.entry[0].hash] = b;
        this.notify(b.entry[0].hash)
    },
    fetch_profile_error: function(d, c) {
        Gravatar.stat("profile_404");
        Gravatar.profile_map["g" + d] = false;
        var b = jQuery("#" + c);
        if (b.parent('a[href="http://gravatar.com/' + d + '"]').size()) {
            b.unwrap()
        }
        if (c == Gravatar.active_id) {
            Gravatar.hide_card()
        }
    },
    listen: function(b, c) {
        if (!this.notify_stack) {
            this.notify_stack = {}
        }
        b = "g" + b;
        if (!this.notify_stack[b]) {
            this.notify_stack[b] = []
        }
        for (a = 0; a < this.notify_stack[b].length; a++) {
            if (c == this.notify_stack[b][a]) {
                return 
            }
        }
        this.notify_stack[b][this.notify_stack[b].length] = c
    },
    notify: function(b) {
        if (!this.notify_stack) {
            this.notify_stack = {}
        }
        b = "g" + b;
        if (!this.notify_stack[b]) {
            this.notify_stack[b] = []
        }
        for (a = 0; a < this.notify_stack[b].length; a++) {
            if (false == this.notify_stack[b][a] || "undefined" == typeof(this.notify_stack[b][a])) {
                continue
            }
            Gravatar[this.notify_stack[b][a]](b.substr(1));
            this.notify_stack[b][a] = false
        }
    },
    extract_hash: function(b) {
        hash = /gravatar.com\/avatar\/([0-9a-f]{32})/.exec(jQuery(b).attr("src"));
        if (null != hash && "object" == typeof(hash) && 2 == hash.length) {
            hash = hash[1]
        } else {
            hash = /gravatar_id\=([0-9a-f]{32})/.exec(jQuery(b).attr("src"));
            if (null !== hash && "object" == typeof(hash) && 2 == hash.length) {
                hash = hash[1]
            } else {
                return false
            }
        }
        return hash
    },
    load_js: function(d, b) {
        if (!this.loaded_scripts) {
            this.loaded_scripts = []
        }
        if (this.loaded_scripts[d]) {
            return 
        }
        this.loaded_scripts[d] = true;
        var c = document.createElement("script");
        c.src = d;
        c.type = "text/javascript";
        if (jQuery.isFunction(b)) {
            c.onerror = b
        }
        document.getElementsByTagName("head")[0].appendChild(c)
    },
    loaded_js: function(c, b) {
        Gravatar.profile_cb(c, b)
    },
    add_card_css: function() {
        if (jQuery("#gravatar-card-css").length) {
            return 
        }
        var f = jQuery('script[src*="/js/gprofiles."]').attr("src") || false, d, b = false;
        if (f) {
            d = f.replace(/\/js\/gprofiles(?:\.dev)?\.js.*$/, "");
            b = f.split("?")[1] || false
        } else {
            d = "//s.gravatar.com"
        }
        if (!b) {
            var c = new Date(), e = new Date(c.getFullYear(), 0, 1), b = Math.ceil((((c - e) / 86400000) + e.getDay() + 1) / 7), b = "ver=" + c.getFullYear().toString() + b.toString()
        }
        d = d.replace(/^(https?\:)?\/\//, "");
        d = window.location.protocol + "//" + d;
        new_css = "<link rel='stylesheet' type='text/css' id='gravatar-card-css' href='" + d + "/css/hovercard.css?" + b + "' />";
        if (!jQuery("#gravatar-card-services-css").length) {
            new_css += "<link rel='stylesheet' type='text/css' id='gravatar-card-services-css' href='" + d + "/css/services.css?" + b + "' />"
        }
        jQuery("head").append(new_css)
    },
    md5: function(b) {
        return hex_md5(b)
    },
    autofill: function(b, c) {
        if (!b.length||-1 == b.indexOf("@")) {
            return 
        }
        this.autofill_map = c;
        hash = this.md5(b.toString().toLowerCase());
        if ("undefined" == typeof(this.profile_stack["g" + hash])) {
            this.listen(hash, "autofill_data");
            this.fetch_profile_by_hash(hash)
        } else {
            this.autofill_data(hash)
        }
    },
    autofill_data: function(c) {
        GProfile.init(this.profile_stack["g" + c]);
        for (var b in this.autofill_map) {
            switch (b) {
            case"url":
                link = GProfile.get("urls");
                url = ("undefined" != typeof link[0] ? link[0]["value"] : GProfile.get("profileUrl"));
                jQuery("#" + this.autofill_map[b]).val(url);
                break;
            case"urls":
                links = GProfile.get("urls");
                links_str = "";
                for (l = 0; l < links.length; l++) {
                    links_str += links[l]["value"] + "\n"
                }
                jQuery("#" + this.autofill_map[b]).val(links_str);
                break;
            default:
                parts = b.split(/\./);
                if (parts[1]) {
                    val = GProfile.get(b);
                    switch (parts[0]) {
                    case"ims":
                    case"phoneNumbers":
                        val = val.value;
                        break;
                    case"emails":
                        val = val[0].value;
                    case"accounts":
                        val = val.url;
                        break
                    }
                    jQuery("#" + this.autofill_map[b]).val(val)
                } else {
                    jQuery("#" + this.autofill_map[b]).val(GProfile.get(b))
                }
            }
        }
    },
    whee: function() {
        if (Gravatar.whee.didWhee) {
            return 
        }
        Gravatar.whee.didWhee = true;
        if (document.styleSheets[0].addRule) {
            document.styleSheets[0].addRule(".grav-tag a", "background-position: 22px 100% !important")
        } else {
            jQuery(".grav-tag a").css("background-position", "22px 100%")
        }
        jQuery('img[src*="gravatar.com/"]').addClass("grav-whee").css({
            "-webkit-box-shadow": "1px 1px 3px #aaa",
            "-moz-box-shadow": "1px 1px 3px #aaa",
            "box-shadow": "1px 1px 3px #aaa",
            border: "2px white solid"
        });
        var b = 0;
        setInterval(function() {
            jQuery(".grav-whee").css({
                "-webkit-transform": "rotate(-" + b + "deg) scale(1.3)",
                "-moz-transform": "rotate(-" + b + "deg) scale(1.3)",
                transform: "rotate(-" + b + "deg) scale(1.3)"
            });
            b++;
            if (360 == b) {
                b = 0
            }
        }, 6);
        return false
    },
    stat: function(c, d) {
        Gravatar.stats_queue.push(c);
        if (d) {
            var b = d.metaKey || "_blank" == jQuery(d.currentTarget).attr("target");
            Gravatar.send_stats(function() {
                if (b) {
                    return 
                }
                document.location = d.currentTarget.href
            });
            return b
        }
        if (Gravatar.stats_queue.length > 10) {
            Gravatar.send_stats()
        }
    },
    send_stats: function(b) {
        if (!document.images) {
            return 
        }
        var f = Gravatar.stats_queue;
        if (!f.length) {
            return 
        }
        var e = new Date();
        Gravatar.stats_queue = [];
        url_prefix = "http://stats";
        if ("https:" == window.location.protocol) {
            url_prefix = "https://ssl-stats"
        }
        var d = url_prefix + ".wordpress.com/g.gif?v=wpcom2&x_grav-hover=" + f.join(",") + "&rand=" + Math.random().toString() + "-" + e.getTime();
        var c = new Image(1, 1);
        if (jQuery.isFunction(b)) {
            c.onload = b
        }
        c.src = d
    }
};
var GProfile = {
    data: {},
    init: function(b) {
        if ("fetching" == b) {
            return false
        }
        if ("undefined" == typeof(b.entry[0])) {
            return false
        }
        GProfile.data = b.entry[0]
    },
    get: function(b) {
        if ( - 1 != b.indexOf(".")) {
            parts = b.split(/\./);
            if (GProfile.data[parts[0]]) {
                if (GProfile.data[parts[0]][parts[1]]) {
                    return GProfile.data[parts[0]][parts[1]]
                }
                for (i = 0, s = GProfile.data[parts[0]].length; i < s; i++) {
                    if (GProfile.data[parts[0]][i].type && parts[1] == GProfile.data[parts[0]][i].type || GProfile.data[parts[0]][i].shortname && parts[1] == GProfile.data[parts[0]][i].shortname || GProfile.data[parts[0]][i].primary && parts[1] == "primary") {
                        return GProfile.data[parts[0]][i]
                    }
                }
            }
            return ""
        }
        if (GProfile.data[b]) {
            return GProfile.data[b]
        }
        if ("url" == b) {
            if (GProfile.data.urls.length) {
                return GProfile.data.urls[0].value
            }
        }
        return ""
    }
};
var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function hex_md5(b) {
    return binl2hex(core_md5(str2binl(b), b.length * chrsz))
}
function b64_md5(b) {
    return binl2b64(core_md5(str2binl(b), b.length * chrsz))
}
function str_md5(b) {
    return binl2str(core_md5(str2binl(b), b.length * chrsz))
}
function hex_hmac_md5(d, c) {
    return binl2hex(core_hmac_md5(d, c))
}
function b64_hmac_md5(d, c) {
    return binl2b64(core_hmac_md5(d, c))
}
function str_hmac_md5(d, c) {
    return binl2str(core_hmac_md5(d, c))
}
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}
function core_md5(w, q) {
    w[q>>5]|=128<<((q)%32);
    w[(((q + 64)>>>9)<<4) + 14] = q;
    var v = 1732584193;
    var u =- 271733879;
    var t =- 1732584194;
    var r = 271733878;
    for (var m = 0; m < w.length; m += 16) {
        var p = v;
        var o = u;
        var n = t;
        var k = r;
        v = md5_ff(v, u, t, r, w[m + 0], 7, - 680876936);
        r = md5_ff(r, v, u, t, w[m + 1], 12, - 389564586);
        t = md5_ff(t, r, v, u, w[m + 2], 17, 606105819);
        u = md5_ff(u, t, r, v, w[m + 3], 22, - 1044525330);
        v = md5_ff(v, u, t, r, w[m + 4], 7, - 176418897);
        r = md5_ff(r, v, u, t, w[m + 5], 12, 1200080426);
        t = md5_ff(t, r, v, u, w[m + 6], 17, - 1473231341);
        u = md5_ff(u, t, r, v, w[m + 7], 22, - 45705983);
        v = md5_ff(v, u, t, r, w[m + 8], 7, 1770035416);
        r = md5_ff(r, v, u, t, w[m + 9], 12, - 1958414417);
        t = md5_ff(t, r, v, u, w[m + 10], 17, - 42063);
        u = md5_ff(u, t, r, v, w[m + 11], 22, - 1990404162);
        v = md5_ff(v, u, t, r, w[m + 12], 7, 1804603682);
        r = md5_ff(r, v, u, t, w[m + 13], 12, - 40341101);
        t = md5_ff(t, r, v, u, w[m + 14], 17, - 1502002290);
        u = md5_ff(u, t, r, v, w[m + 15], 22, 1236535329);
        v = md5_gg(v, u, t, r, w[m + 1], 5, - 165796510);
        r = md5_gg(r, v, u, t, w[m + 6], 9, - 1069501632);
        t = md5_gg(t, r, v, u, w[m + 11], 14, 643717713);
        u = md5_gg(u, t, r, v, w[m + 0], 20, - 373897302);
        v = md5_gg(v, u, t, r, w[m + 5], 5, - 701558691);
        r = md5_gg(r, v, u, t, w[m + 10], 9, 38016083);
        t = md5_gg(t, r, v, u, w[m + 15], 14, - 660478335);
        u = md5_gg(u, t, r, v, w[m + 4], 20, - 405537848);
        v = md5_gg(v, u, t, r, w[m + 9], 5, 568446438);
        r = md5_gg(r, v, u, t, w[m + 14], 9, - 1019803690);
        t = md5_gg(t, r, v, u, w[m + 3], 14, - 187363961);
        u = md5_gg(u, t, r, v, w[m + 8], 20, 1163531501);
        v = md5_gg(v, u, t, r, w[m + 13], 5, - 1444681467);
        r = md5_gg(r, v, u, t, w[m + 2], 9, - 51403784);
        t = md5_gg(t, r, v, u, w[m + 7], 14, 1735328473);
        u = md5_gg(u, t, r, v, w[m + 12], 20, - 1926607734);
        v = md5_hh(v, u, t, r, w[m + 5], 4, - 378558);
        r = md5_hh(r, v, u, t, w[m + 8], 11, - 2022574463);
        t = md5_hh(t, r, v, u, w[m + 11], 16, 1839030562);
        u = md5_hh(u, t, r, v, w[m + 14], 23, - 35309556);
        v = md5_hh(v, u, t, r, w[m + 1], 4, - 1530992060);
        r = md5_hh(r, v, u, t, w[m + 4], 11, 1272893353);
        t = md5_hh(t, r, v, u, w[m + 7], 16, - 155497632);
        u = md5_hh(u, t, r, v, w[m + 10], 23, - 1094730640);
        v = md5_hh(v, u, t, r, w[m + 13], 4, 681279174);
        r = md5_hh(r, v, u, t, w[m + 0], 11, - 358537222);
        t = md5_hh(t, r, v, u, w[m + 3], 16, - 722521979);
        u = md5_hh(u, t, r, v, w[m + 6], 23, 76029189);
        v = md5_hh(v, u, t, r, w[m + 9], 4, - 640364487);
        r = md5_hh(r, v, u, t, w[m + 12], 11, - 421815835);
        t = md5_hh(t, r, v, u, w[m + 15], 16, 530742520);
        u = md5_hh(u, t, r, v, w[m + 2], 23, - 995338651);
        v = md5_ii(v, u, t, r, w[m + 0], 6, - 198630844);
        r = md5_ii(r, v, u, t, w[m + 7], 10, 1126891415);
        t = md5_ii(t, r, v, u, w[m + 14], 15, - 1416354905);
        u = md5_ii(u, t, r, v, w[m + 5], 21, - 57434055);
        v = md5_ii(v, u, t, r, w[m + 12], 6, 1700485571);
        r = md5_ii(r, v, u, t, w[m + 3], 10, - 1894986606);
        t = md5_ii(t, r, v, u, w[m + 10], 15, - 1051523);
        u = md5_ii(u, t, r, v, w[m + 1], 21, - 2054922799);
        v = md5_ii(v, u, t, r, w[m + 8], 6, 1873313359);
        r = md5_ii(r, v, u, t, w[m + 15], 10, - 30611744);
        t = md5_ii(t, r, v, u, w[m + 6], 15, - 1560198380);
        u = md5_ii(u, t, r, v, w[m + 13], 21, 1309151649);
        v = md5_ii(v, u, t, r, w[m + 4], 6, - 145523070);
        r = md5_ii(r, v, u, t, w[m + 11], 10, - 1120210379);
        t = md5_ii(t, r, v, u, w[m + 2], 15, 718787259);
        u = md5_ii(u, t, r, v, w[m + 9], 21, - 343485551);
        v = safe_add(v, p);
        u = safe_add(u, o);
        t = safe_add(t, n);
        r = safe_add(r, k)
    }
    return Array(v, u, t, r)
}
function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}
function md5_ff(g, f, m, k, e, j, h) {
    return md5_cmn((f & m) | ((~f) & k), g, f, e, j, h)
}
function md5_gg(g, f, m, k, e, j, h) {
    return md5_cmn((f & k) | (m & (~k)), g, f, e, j, h)
}
function md5_hh(g, f, m, k, e, j, h) {
    return md5_cmn(f^m^k, g, f, e, j, h)
}
function md5_ii(g, f, m, k, e, j, h) {
    return md5_cmn(m^(f | (~k)), g, f, e, j, h)
}
function core_hmac_md5(g, f) {
    var n = str2binl(g);
    if (n.length > 16) {
        n = core_md5(n, g.length * chrsz)
    }
    var m = Array(16), j = Array(16);
    for (var h = 0; h < 16; h++) {
        m[h] = n[h]^909522486;
        j[h] = n[h]^1549556828
    }
    var k = core_md5(m.concat(str2binl(f)), 512 + f.length * chrsz);
    return core_md5(j.concat(k), 512 + 128)
}
function safe_add(d, f) {
    var e = (d & 65535) + (f & 65535);
    var c = (d>>16) + (f>>16) + (e>>16);
    return (c<<16) | (e & 65535)
}
function bit_rol(d, c) {
    return (d<<c) | (d>>>(32 - c))
}
function str2binl(e) {
    var d = Array();
    var g = (1<<chrsz) - 1;
    for (var f = 0; f < e.length * chrsz; f += chrsz) {
        d[f>>5]|=(e.charCodeAt(f / chrsz) & g)<<(f%32)
    }
    return d
}
function binl2str(e) {
    var d = "";
    var g = (1<<chrsz) - 1;
    for (var f = 0; f < e.length * 32; f += chrsz) {
        d += String.fromCharCode((e[f>>5]>>>(f%32)) & g)
    }
    return d
}
function binl2hex(e) {
    var d = hexcase ? "0123456789ABCDEF": "0123456789abcdef";
    var g = "";
    for (var f = 0; f < e.length * 4; f++) {
        g += d.charAt((e[f>>2]>>((f%4) * 8 + 4)) & 15) + d.charAt((e[f>>2]>>((f%4) * 8)) & 15)
    }
    return g
}
function binl2b64(f) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var m = "";
    for (var h = 0; h < f.length * 4; h += 3) {
        var k = (((f[h>>2]>>8 * (h%4)) & 255)<<16) | (((f[h + 1>>2]>>8 * ((h + 1)%4)) & 255)<<8) | ((f[h + 2>>2]>>8 * ((h + 2)%4)) & 255);
        for (var g = 0; g < 4; g++) {
            if (h * 8 + g * 6 > f.length * 32) {
                m += b64pad
            } else {
                m += e.charAt((k>>6 * (3 - g)) & 63)
            }
        }
    }
    return m
};

