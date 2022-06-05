var rp_account_config = {
    rp_feature_set: {}
};
var RubiconAdServing = RubiconAdServing || {};
RubiconAdServing.AdSizes = {
    1: {
        dim: "468x60"
    },
    2: {
        dim: "728x90"
    },
    3: {
        dim: "234x60"
    },
    4: {
        dim: "88x31"
    },
    5: {
        dim: "120x90"
    },
    6: {
        dim: "120x60"
    },
    7: {
        dim: "125x125"
    },
    8: {
        dim: "120x600"
    },
    9: {
        dim: "160x600"
    },
    10: {
        dim: "300x600"
    },
    11: {
        dim: "180x150"
    },
    12: {
        dim: "120x240"
    },
    13: {
        dim: "200x200"
    },
    14: {
        dim: "250x250"
    },
    15: {
        dim: "300x250"
    },
    16: {
        dim: "336x280"
    },
    17: {
        dim: "240x400"
    },
    18: {
        dim: "180x150"
    },
    19: {
        dim: "300x100"
    },
    20: {
        dim: "0x0"
    },
    21: {
        dim: "0x0"
    },
    22: {
        dim: "0x0"
    },
    23: {
        dim: "120x90"
    },
    24: {
        dim: "160x90"
    },
    25: {
        dim: "180x90"
    },
    26: {
        dim: "200x90"
    },
    27: {
        dim: "468x15"
    },
    28: {
        dim: "728x15"
    },
    29: {
        dim: "300x850"
    },
    30: {
        dim: "1x1"
    },
    31: {
        dim: "980x120"
    },
    32: {
        dim: "250x360"
    },
    33: {
        dim: "180x500"
    },
    34: {
        dim: "580x400"
    },
    35: {
        dim: "980x150"
    },
    36: {
        dim: "140x350"
    },
    37: {
        dim: "468x400"
    },
    38: {
        dim: "930x180"
    },
    39: {
        dim: "750x100"
    },
    40: {
        dim: "750x200"
    },
    41: {
        dim: "750x300"
    },
    42: {
        dim: "2x4"
    },
    43: {
        dim: "320x50"
    },
    44: {
        dim: "300x50"
    },
    45: {
        dim: "480x75"
    },
    46: {
        dim: "480x60"
    },
    47: {
        dim: "240x37"
    },
    48: {
        dim: "300x300"
    },
    49: {
        dim: "336x280"
    },
    50: {
        dim: "1024x90"
    },
    51: {
        dim: "768x90"
    },
    52: {
        dim: "1004x768"
    },
    53: {
        dim: "1024x768",
        interstitial: true
    },
    54: {
        dim: "300x1050"
    },
    55: {
        dim: "970x90"
    },
    56: {
        dim: "900x250"
    },
    57: {
        dim: "970x250"
    },
    58: {
        dim: "1000x90"
    },
    59: {
        dim: "320x80"
    },
    60: {
        dim: "320x150"
    },
    61: {
        dim: "1000x1000"
    },
    62: {
        dim: "980x50"
    },
    63: {
        dim: "1000x40"
    },
    64: {
        dim: "580x500"
    },
    65: {
        dim: "640x480"
    },
    66: {
        dim: "930x600"
    },
    67: {
        dim: "320x480",
        interstitial: true
    },
    68: {
        dim: "1800x1000"
    },
    69: {
        dim: "480x400"
    },
    70: {
        dim: "1100x210"
    },
    71: {
        dim: "852x210"
    },
    72: {
        dim: "320x320"
    },
    73: {
        dim: "320x160"
    },
    74: {
        dim: "1250x240"
    },
    75: {
        dim: "1250x250"
    },
    76: {
        dim: "265x720"
    },
    77: {
        dim: "265x600"
    },
    78: {
        dim: "980x240"
    },
    79: {
        dim: "980x300"
    },
    80: {
        dim: "980x400"
    },
    81: {
        dim: "450x150"
    },
    82: {
        dim: "300x75"
    },
    83: {
        dim: "480x300"
    },
    84: {
        dim: "320x480"
    },
    85: {
        dim: "300x120"
    },
    86: {
        dim: "300x250"
    },
    87: {
        dim: "950x90"
    },
    88: {
        dim: "300x600"
    },
    89: {
        dim: "300x1200"
    },
    90: {
        dim: "548x150"
    },
    91: {
        dim: "300x250"
    },
    92: {
        dim: "728x90"
    },
    93: {
        dim: "160x600"
    },
    94: {
        dim: "970x310"
    },
    95: {
        dim: "970x100"
    },
    96: {
        dim: "970x210"
    },
    97: {
        dim: "467x120"
    },
    98: {
        dim: "1000x120"
    },
    99: {
        dim: "300x250"
    },
    100: {
        dim: "300x250"
    },
    101: {
        dim: "480x320",
        interstitial: true
    },
    102: {
        dim: "768x1024",
        interstitial: true
    },
    103: {
        dim: "480x280"
    },
    104: {
        dim: "1250x360"
    },
    105: {
        dim: "250x800"
    },
    106: {
        dim: "300x480"
    },
    107: {
        dim: "440x220"
    },
    108: {
        dim: "320x240"
    },
    109: {
        dim: "468x120"
    }
};
var RubiconAdServing = RubiconAdServing || {};
RubiconAdServing.RubiconAd = function() {
    this.config = {
        server: "revv",
        host: "optimized-by.rubiconproject.com",
        hosts: {
            revv: {
                beta: "staged-by.rubiconproject.com",
                prod: "optimized-by.rubiconproject.com"
            },
            rfm: {
                beta: "mrp.rubiconproject.com",
                prod: "mrp.rubiconproject.com"
            }
        }
    };
    this.default_context = {
        rp_env: "prod",
        rp_adtype: "js",
        rp_kw: null,
        rp_gender: null,
        rp_age: null,
        rp_age_range: null,
        rp_age_dob: null,
        rp_ethnicity: null,
        rp_xpi: null,
        rp_page: null,
        rp_geo: {},
        rp_aso: {},
        rp_feature_set: {
            visibility: true,
            expandable: true,
            local_storage: true,
            rfm_routing: false,
            tablet_mapping: false,
            first_party_data: true,
            rtp_first_look: false,
            rtp_data_collection: false
        },
        rp_dpf: false,
        rp_navigator: null
    };
    this.mergeProperties = function(l, k) {
        if (typeof(l) == "undefined" ||!l) {
            return k
        }
        var n = {};
        for (var m in k) {
            if (typeof l[m] == "undefined") {
                l[m] = k[m]
            } else {
                if (l[m] != null && typeof l[m] == "object") {
                    this.mergeProperties(l[m], k[m])
                }
            }
        }
        return l
    };
    this.init = function(l) {
        try {
            this.default_context.rp_div_id = "rp-" + new Number(Math.floor(Math.random() * 1000000)).toString(36);
            if (l) {
                this.context = this.mergeProperties(l, this.default_context)
            } else {
                this.context = this.default_context
            }
            this.browser = new e(this.context.rp_navigator || navigator);
            if (this.context.rp_zonesize) {
                var m = this.context.rp_zonesize.split("-");
                this.context.rp_zone = m[0];
                this.context.rp_size_id = m[1]
            }
            if (this.context.rp_lat&&!this.isValidLat(this.context.rp_lat)) {
                delete this.context.rp_lat
            }
            if (this.context.rp_long&&!this.isValidLong(this.context.rp_long)) {
                delete this.context.rp_long
            }
            if (this.context.rp_geo && this.context.rp_geo.latitude&&!this.isValidLat(this.context.rp_geo.latitude)) {
                delete this.context.rp_geo.latitude
            }
            if (this.context.rp_geo && this.context.rp_geo.longitude&&!this.isValidLong(this.context.rp_geo.longitude)) {
                delete this.context.rp_geo.longitude
            }
            if (rp_account_config) {
                this.context = this.mergeProperties(rp_account_config, this.context);
                if (rp_account_config.site_config) {
                    var k = rp_account_config.site_config[this.context.rp_site];
                    if (k) {
                        this.context = this.mergeProperties(k, this.context);
                        if (k.zone_config) {
                            this.context = this.mergeProperties(k.zone_config[this.context.rp_zone], this.context)
                        }
                    }
                }
                if (this.shouldSplitTablet()) {
                    if (this.context.tablet_map.site_id && this.context.tablet_map.zone_id) {
                        this.context.rp_site = this.context.tablet_map.site_id;
                        this.context.rp_zone = this.context.tablet_map.zone_id;
                        this.context.rp_zonesize = this.context.rp_zone + "-" + this.context.rp_size_id
                    }
                }
            }
            if (this.shouldRouteToRFM()) {
                this.config.server = "rfm"
            }
            if (this.context.rp_env) {
                this.config.host = this.config.hosts[this.config.server][this.context.rp_env] || this.config.hosts[this.config.server]["prod"] || this.config.host
            }
            if (this.context.rp_host) {
                this.config.host = this.context.rp_host
            }
        } catch (n) {}
    };
    this.isValidLat = function(k) {
        return (k != null) && k>=-90 && k <= 90
    };
    this.isValidLong = function(k) {
        return (k != null) && k>=-180 && k <= 180
    };
    this.shouldSplitTablet = function() {
        return (this.context.rp_feature_set.tablet_mapping && this.browser.detectiPad())
    };
    this.shouldRouteToRFM = function() {
        return (this.context.rp_feature_set.rfm_routing_always || (this.context.rp_feature_set.rfm_routing && this.browser.detectiPad() && (this.context.rp_adtype == "js")))
    };
    this.start = function() {
        var s = false;
        var x;
        var t = location.href.split(":");
        var B = t[0] == "https" ? "https://": "http://";
        var m;
        if (this.context.rp_adtype != "jsonp") {
            m = B + this.config.host + "/a/$account_id$/$site_id$/$zonesize$.$format$?";
            m += "$cb$$floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";
            m += "$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";
            m += "$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$pmp_tier$$aso$";
            m += "$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$";
            if (this.shouldRouteToRFM()) {
                m = B + this.config.host + "/ad_request?$div_id$$app_id$$pub_id$$rand_cb$";
                m += "$rfm_lat$$rfm_lng$$rfm_ad_size$"
            }
        } else {
            m = B + this.config.host + "/a/api/ads.$format$?enc=url&account_id=$account_id$&site_id=$site_id$&zone_id=$zone_id$&size_id=$size_id$";
            m += "$cb$$floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";
            m += "$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";
            m += "$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$pmp_tier$$aso$";
            m += "$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$";
            if (this.context.rp_ae_spoof) {
                m = this.context.rp_ae_spoof
            }
        }
        m += "$digitrust.id$$digitrust.preference$";
        if (this.context.rp_account && this.context.rp_site && this.context.rp_zonesize) {
            m = d("account_id", this.context.rp_account, m);
            m = d("site_id", this.context.rp_site, m);
            m = d("zonesize", this.context.rp_zonesize, m);
            m = d("zone_id", this.context.rp_zone, m);
            m = d("size_id", this.context.rp_size_id, m)
        } else {
            return 
        }
        m = d("format", (this.context.rp_adtype == "iframe" ? "html" : this.context.rp_adtype), m);
        var o = null;
        try {
            if (this.context.rp_page && this.context.rp_page.length > 0) {
                o = escape(this.context.rp_page)
            } else {
                if (i()) {
                    var E = document.referrer;
                    try {
                        if (typeof window.parent.location.href == "string" && window.parent.location.href.substr(0, 4) == "http") {
                            E = top.location.href || E
                        }
                    } catch (F) {}
                    if (E && E.length > 0) {
                        o = escape(E)
                    }
                }
            }
        } catch (F) {
            s = true
        }
        m = c("referrer", "rf", o, m);
        if (!this.context.rp_feature_set.aso_override) {
            this.context.rp_aso = {}
        }
        if (this.context.rp_feature_set.expandable&&!("exp" in this.context.rp_aso)) {
            this.context.rp_aso.exp = (this.getSupportExpandableAd() ? 1 : null)
        }
        if (this.context.rp_feature_set.visibility&&!("pos" in this.context.rp_aso)) {
            this.context.rp_aso.pos = h()
        }
        m = this.appendObject("aso", "p", this.context.rp_aso, m, "_");
        m = c("slot", "ad_slot", this.context.rp_slot, m);
        m = c("ad_id", "ad_id", this.context.rp_ad, m);
        m = c("p_screen_res", "p_screen_res", f(), m);
        m = c("cb", "cb", Math.random(), m);
        m = c("keyword", "kw", this.context.rp_kw, m);
        m = c("gender", "gender", this.context.rp_gender, m);
        m = c("age", "age", this.context.rp_age, m);
        m = c("agerange", "age_range", this.context.rp_age_range, m);
        m = c("agedob", "age_dob", this.context.rp_age_dob, m);
        m = c("ethnicity", "ethnicity", this.context.rp_ethnicity, m);
        if (this.context.rp_lat != null && this.context.rp_long != null) {
            m = c("p_lat", "p_lat", this.context.rp_lat, m);
            m = c("p_long", "p_long", this.context.rp_long, m)
        } else {
            m = c("p_lat", "p_lat", null, m);
            m = c("p_long", "p_long", null, m)
        }
        m = c("xpi", "xpi", this.context.rp_xpi, m);
        if (this.context.rp_floor) {
            var w = {
                standard: 1,
                override: 2,
                priority: 3,
                "private": 4
            };
            var z = null;
            if (this.context.rp_pmp_tier && (this.context.rp_pmp_tier in w)) {
                z = w[this.context.rp_pmp_tier]
            }
            m = c("floor", "rp_floor", this.context.rp_floor, m);
            m = c("dpf", "rp_dpf", (this.context.rp_dpf ? "1" : null), m);
            m = c("pmp_tier", "rp_pmp_tier", z, m)
        } else {
            m = c("floor", "rp_floor", null, m);
            m = c("dpf", "rp_dpf", null, m);
            m = c("pmp_tier", "rp_pmp_tier", null, m)
        }
        m = c("tracking", "tk_code", this.context.rp_tracking, m);
        m = c("user_key", "tk_user_key", this.context.rp_user_key, m);
        m = c("smart", "tk_st", (s ? "0" : "1"), m);
        m = c("smartfile", "tk_sf", (this.context.rp_smartfile ? "1" : null), m);
        if (this.context.rp_feature_set.first_party_data) {
            m = this.appendObject("tg_i", "tg_i", this.context.rp_inventory, m);
            m = this.appendObject("tg_v", "tg_v", this.context.rp_visitor, m)
        } else {
            m = this.appendObject("tg_i", "tg_i", null, m);
            m = this.appendObject("tg_v", "tg_v", null, m)
        }
        m = c("div_id", "div", this.context.rp_div_id, m, true);
        m = c("app_id", "app", this.context.rp_app_id, m);
        m = c("pub_id", "pub", this.context.rp_publisher_id, m);
        m = c("rand_cb", "id", Number(Math.random() * 100000000000000000).toString(36), m);
        m = c("rfm_lat", "lat", this.context.rp_geo.latitude, m);
        m = c("rfm_lng", "lng", this.context.rp_geo.longitude, m);
        var H;
        var p = false;
        if (RubiconAdServing.AdSizes && this.context.rp_size_id && RubiconAdServing.AdSizes[this.context.rp_size_id]) {
            H = RubiconAdServing.AdSizes[this.context.rp_size_id].dim;
            if (H == "0x0") {
                H = null
            }
            p = RubiconAdServing.AdSizes[this.context.rp_size_id].interstitial
        }
        m = c("rfm_ad_size", "sze", H, m);
        m = c("fbid", "x_fbid", this.context.rp_facebook_device_id, m);
        m = this.appendObject("p_app", "p_app", this.context.rp_app, m);
        m = this.appendObject("p_device", "p_device", this.context.rp_device, m);
        m = this.appendObject("p_geo", "p_geo", this.context.rp_geo, m);
        m = this.appendObject("p_accept", "p_accept", this.context.rp_accept, m);
        m = c("p_interstitial", "p_instl", p ? 1 : null, m);
        var v = null;
        var q = null;
        var n;
        try {
            n = typeof(DigiTrust.getIdentitySync)
        } catch (G) {
            n = false
        }
        if (this.context.rp_feature_set.digitrust && n) {
            var l = DigiTrust.getIdentitySync({
                member: "rubicon"
            });
            if (l && l.success && l.identity) {
                var L = l.identity;
                v = L.id;
                q = L.privacy.optout ? 1 : 0
            }
        }
        m = c("digitrust.id", "dt.id", v, m);
        m = c("digitrust.preference", "dt.preference", q, m);
        if (this.context.rp_feature_set.local_storage && this.browser.detectSafari()) {
            var I = [];
            data = RubiconAdServing.getStoredData();
            if (data && data.fcaps && data.fcaps.sizes) {
                var k = data.fcaps.sizes;
                for (var u in k) {
                    if (!k[u].ads) {
                        continue
                    }
                    for (var J in k[u].ads) {
                        I[I.length] = "ls_fcap." + u + "=" + J + ",0x" + k[u].ads[J].count.toString(16) + ",0x" + k[u].ads[J].first_seen.toString(16) + ",0x" + k[u].ads[J].last_seen.toString(16)
                    }
                }
            }
            if (data && data.bucket && typeof data.bucket === "object") {
                var r = data.bucket;
                for (var y in r) {
                    if (typeof r[y] !== "object") {
                        continue
                    }
                    for (var K in r[y]) {
                        I[I.length] = "ls_c." + y + "." + K + "=0x" + r[y][K].value.toString(16) + ",0x" + r[y][K].first_set.toString(16) + ",0x" + r[y][K].last_set.toString(16)
                    }
                }
            }
            m = m.replace(/\$localstorage\$/, !I.length ? "" : "&" + I.join("&"), m);
            m = c("storagetype", "rp_s", "l", m)
        } else {
            m = c("localstorage", "localstorage", null, m);
            m = c("storagetype", "rp_s", "c", m)
        }
        if (this.context.rp_adtype == "jsonp") {
            var A = this;
            window.rp_onAdResponseLoaded = function(M) {
                A.onAdResponseLoaded(M)
            }
        }
        if (this.shouldRouteToRFM()) {
            var D = ["rp_page", "rp_inventory", "rp_visitor", "rp_gender", "rp_age", "rp_age_range", "rp_age_dob", "rp_ethnicity", "rp_xpi", "rp_kw", "rp_tracking", "rp_floor", "rp_smartfile", "rp_geo"];
            for (var C = 0; C < D.length; C++) {
                if (typeof this.context[D[C]] != "undefined" && this.context[D[C]] != null) {
                    window[D[C]] = this.context[D[C]]
                }
            }
        }
        if (!this.context.rp_debug) {
            if (this.shouldRouteToRFM()) {
                x = '<div id="' + this.context.rp_div_id + '"><script type="text/javascript" src="' + m + '"><\/script></div>'
            } else {
                if (this.context.rp_adtype == "iframe") {
                    x = '<iframe frameborder="0" allowtransparency="true" hspace="0"  vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="' + this.context.rp_width + 'px" height="' + this.context.rp_height + 'px" src="' + m + '"></iframe>'
                } else {
                    x = '<script type="text/javascript" src="' + m + '"><\/script>'
                }
            }
            document.write(x)
        } else {
            document.write(m)
        }
    };
    this.dropRTPDataCollection = function(k) {
        document.write('<script type="text/javascript">');
        document.write('oz_api="valuation";');
        document.write("oz_async=true;");
        document.write("oz_cached_only=true;");
        document.write('rp_account="' + this.context.rp_account + '";');
        document.write('rp_site="' + this.context.rp_site + '";');
        document.write('rp_zonesize="' + this.context.rp_zonesize + '";');
        if (this.context.rp_slot) {
            document.write('rp_slot="' + this.context.rp_slot + '";')
        }
        document.write('oz_impression_id="' + k.impression_id + '";');
        document.write("<\/script>");
        document.write('<script type="text/javascript" src="http://tap-cdn.rubiconproject.com/partner/scripts/rubicon/dorothy.js?pc=' + this.context.rp_account + "/" + this.context.rp_site + '"><\/script>')
    };
    this.filter_script = function(k) {
        k = k.replace(/\/SCRIPT/g, '/SCR"+"IPT');
        k = k.replace(/\/script/g, '/scr"+"ipt');
        return k
    };
    this.onAdResponseLoaded = function(k) {
        try {
            if (k.ads) {
                for (var n = 0; n < k.ads.length; n++) {
                    ad = k.ads[n];
                    var m = ["script", "html"];
                    for (var l in m) {
                        var o = m[l];
                        if (ad[o] && typeof ad[o] == "string") {
                            ad[o] = decodeURIComponent(ad[o]);
                            if (typeof this["filter_" + o] == "function") {
                                ad[o] = this["filter_" + o](ad[o])
                            }
                        }
                    }
                }
            }
            if (this.context.rp_callback) {
                if (typeof this.context.rp_callback == "function") {
                    this.context.rp_callback(k)
                }
                if (typeof this.context.rp_callback == "string" && window[this.context.rp_callback] && typeof window[this.context.rp_callback] == "function") {
                    window[this.context.rp_callback](k)
                }
            }
        } catch (p) {}
        try {
            if (this.context.rp_feature_set.rtp_data_collection) {
                if (k.ads) {
                    for (var n = 0; n < k.ads.length; n++) {
                        ad = k.ads[n];
                        this.dropRTPDataCollection(ad)
                    }
                }
            }
        } catch (p) {}
    };
    var c = function(m, n, l, p, o) {
        var k = "";
        if (l !== null && typeof l != "undefined") {
            k = (o === true ? "" : "&") + n + "=" + l
        }
        return d(m, k, p)
    };
    var d = function(l, k, m) {
        if (typeof l === "string" && l !== null && l.length > 0) {
            return m.replace("$" + l + "$", k)
        } else {
            return m
        }
    };
    this.appendObject = function(m, o, p, l, r) {
        var q = "";
        if (p) {
            r = r || ".";
            var n;
            for (var k in p) {
                if (!p.hasOwnProperty(k)) {
                    continue
                }
                n = p[k];
                if (n != null && (typeof n.length == "undefined" || n.length > 0)) {
                    if (typeof n == "boolean") {
                        q += "&" + o + r + k + "=" + (n ? 1 : 0)
                    } else {
                        q += "&" + o + r + k + "=" + encodeURIComponent(n)
                    }
                }
            }
        }
        l = d(m, q, l);
        return l
    };
    this.getSupportExpandableAd = function() {
        return (!i() && this.context.rp_adtype != "iframe")
    };
    var i = function() {
        return (window != top)
    };
    var j = function() {
        var k = false;
        try {
            window.top.location.href
        } catch (l) {
            k = true
        }
        return k
    };
    var h = function() {
        var t = null;
        try {
            if (j()) {} else {
                var n = window;
                var o = b();
                var p = 90;
                var s;
                if (i()) {
                    while (window.top !== n.parent) {
                        n = n.parent;
                        try {
                            n.location.href
                        } catch (l) {
                            return t
                        }
                    }
                    s = g(n.frameElement);
                    p = n.frameElement.clientHeight / 2
                } else {
                    var r = document.documentElement;
                    while (r.childNodes.length && r.lastChild.nodeType == 1) {
                        r = r.lastChild
                    }
                    var m = document.createElement("div");
                    var k = a("rubicon_chk_position_");
                    m.setAttribute("id", k);
                    m.style.width = "0px";
                    m.style.height = "0px";
                    r.parentNode.appendChild(m);
                    s = g(m);
                    r.parentNode.removeChild(m);
                    p = p / 2
                }
                if (o.y + o.h < (p + s.y) || o.y > (p + s.y)) {
                    t = "btf"
                } else {
                    t = "atf"
                }
            }
        } catch (q) {}
        return t
    };
    var a = function(k) {
        return k + Math.floor(Math.random() * 1000000)
    };
    var b = function() {
        if (window.frameElement) {
            return {
                x: window.top.innerWidth,
                y: window.top.pageYOffset || window.top.document.body.scrollTop || window.top.document.documentElement.scrollTop,
                w: (window.top.innerWidth || window.top.documentElement.clientWidth || window.top.getElementsByTagName("body")[0].clientWidth),
                h: (window.top.innerHeight || window.top.documentElement.clientHeight || window.top.getElementsByTagName("body")[0].clientHeight)
            }
        }
        return {
            x: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            w: (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth),
            h: (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight)
        }
    };
    var f = function() {
        try {
            return window.screen.width + "x" + window.screen.height
        } catch (k) {}
    };
    var g = function(l) {
        var k = 0, m = 0;
        if (l.offsetParent) {
            do {
                k += l.offsetLeft;
                m += l.offsetTop
            }
            while (l = l.offsetParent)
            }
        return {
            x: k,
            y: m
        }
    };
    var e = function(k) {
        this.navigator = k, this.safariMatching = [{
            text: k.vendor,
            pattern: "Apple"
        }
        ], this.ipadMatching = [{
            text: k.userAgent,
            pattern: "iPad"
        }, {
            text: k.userAgent,
            pattern: "OS X"
        }
        ], this.detectSafari = function() {
            return this.matchesAny(this.safariMatching)
        }, this.detectiPad = function() {
            return this.matchesAll(this.ipadMatching)
        }, this.matchesAny = function(m) {
            for (var l = 0; l < m.length; l++) {
                var n = m[l].text;
                if (n && n.indexOf(m[l].pattern)!=-1) {
                    return true
                }
            }
            return false
        }, this.matchesAll = function(m) {
            for (var l = 0; l < m.length; l++) {
                var n = m[l].text;
                if (n && n.indexOf(m[l].pattern) < 0) {
                    return false
                }
            }
            return true
        }
    }
};
RubiconAdServing.getStoredData = function() {
    try {
        var b = localStorage.rubiconSmartTagData;
        if (b) {
            var a = JSON.parse(b);
            if (typeof a === "object") {
                return a
            }
        }
    } catch (c) {
        return {}
    }
    return {}
};
RubiconAdServing.storeData = function(a) {
    try {
        localStorage.rubiconSmartTagData = JSON.stringify(a)
    } catch (b) {}
};
RubiconAdServing.enforceFCapStructure = function(d, c, a, b) {
    if (!d.fcaps) {
        d.fcaps = {}
    }
    if (!d.fcaps.sizes) {
        d.fcaps.sizes = {}
    }
    if (!d.fcaps.sizes[c]) {
        d.fcaps.sizes[c] = {}
    }
    if (!d.fcaps.sizes[c]["ads"]) {
        d.fcaps.sizes[c]["ads"] = {}
    }
    if (!d.fcaps.sizes[c]["ads"][a]) {
        d.fcaps.sizes[c]["ads"][a] = {
            count: 0,
            ad_id: a,
            first_seen: b,
            last_seen: b
        }
    }
    return d
};
RubiconAdServing.setFCap = function(c, a, d, b) {
    var e = RubiconAdServing.getStoredData();
    e = RubiconAdServing.enforceFCapStructure(e, c, a, b);
    e.fcaps.sizes[c]["ads"][a].count = d;
    e.fcaps.sizes[c]["ads"][a].last_seen = b;
    RubiconAdServing.storeData(e)
};
RubiconAdServing.incFCap = function(c, a, d, b) {
    var e = RubiconAdServing.getStoredData();
    e = RubiconAdServing.enforceFCapStructure(e, c, a, b);
    e.fcaps.sizes[c]["ads"][a].count += d;
    e.fcaps.sizes[c]["ads"][a].last_seen = b;
    RubiconAdServing.storeData(e)
};
RubiconAdServing.decFCap = function(c, a, d, b) {
    var e = RubiconAdServing.getStoredData();
    e = RubiconAdServing.enforceFCapStructure(e, c, a, b);
    e.fcaps.sizes[c]["ads"][a].count -= d;
    e.fcaps.sizes[c]["ads"][a].last_seen = b;
    RubiconAdServing.storeData(e)
};
RubiconAdServing.delFCap = function(b, a) {
    var c = RubiconAdServing.getStoredData();
    c = RubiconAdServing.enforceFCapStructure(c, b, a, 0);
    delete c.fcaps.sizes[b]["ads"][a];
    if (JSON.stringify(c.fcaps.sizes[b]["ads"]) === "{}") {
        delete c.fcaps.sizes[b]
    }
    if (JSON.stringify(c.fcaps.sizes) === "{}") {
        delete c.fcaps.sizes
    }
    RubiconAdServing.storeData(c)
};
RubiconAdServing.enforceBucketStructure = function(d, c, b, a) {
    if (typeof d.bucket !== "object") {
        d.bucket = {}
    }
    if (typeof d.bucket[c] !== "object") {
        d.bucket[c] = {}
    }
    if (typeof d.bucket[c][b] !== "object") {
        d.bucket[c][b] = {
            first_set: a,
            value: 0
        }
    }
    return d
};
RubiconAdServing.setBucketValue = function(c, b, e, a) {
    var d = RubiconAdServing.getStoredData();
    d = RubiconAdServing.enforceBucketStructure(d, c, b, a);
    d.bucket[c][b].value = e;
    d.bucket[c][b].last_set = a;
    RubiconAdServing.storeData(d)
};
RubiconAdServing.incBucketValue = function(c, b, e, a) {
    var d = RubiconAdServing.getStoredData();
    d = RubiconAdServing.enforceBucketStructure(d, c, b, a);
    d.bucket[c][b].value += e;
    d.bucket[c][b].last_set = a;
    RubiconAdServing.storeData(d)
};
RubiconAdServing.decBucketValue = function(c, b, e, a) {
    var d = RubiconAdServing.getStoredData();
    d = RubiconAdServing.enforceBucketStructure(d, c, b, a);
    d.bucket[c][b].value -= e;
    d.bucket[c][b].last_set = a;
    RubiconAdServing.storeData(d)
};
RubiconAdServing.delBucketValue = function(b, a) {
    var c = RubiconAdServing.getStoredData();
    c = RubiconAdServing.enforceBucketStructure(c, b, a, 0);
    delete c.bucket[b][a];
    if (JSON.stringify(c.bucket[b]) === "{}") {
        delete c.bucket[b]
    }
    RubiconAdServing.storeData(c)
};
(function() {
    try {
        var a;
        var d = new RubiconAdServing.RubiconAd();
        var c = new Object();
        var g;
        g = ["rp_account", "rp_site", "rp_zonesize", "rp_ad", "rp_height", "rp_width", "rp_floor", "rp_pmp_tier", "rp_lat", "rp_long", "rp_slot"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if ((window[a] != null) && (typeof window[a] == "string" || typeof window[a] == "number")) {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        g = ["rp_adtype", "rp_page", "rp_ae_spoof", "rp_env", "rp_host", "rp_facebook_device_id", "rp_publisher_id", "rp_app_id", "rp_div_id"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if (window[a] && typeof window[a] == "string") {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        g = ["rp_gender", "rp_age", "rp_age_range", "rp_age_dob", "rp_ethnicity", "rp_xpi", "rp_kw", "rp_tracking", "rp_user_key"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if (window[a] && ((typeof window[a] == "string" && window[a].substr(0, 7) != "[INSERT") || typeof window[a] == "number")) {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        g = ["rp_debug", "rp_inventory", "rp_visitor", "rp_app", "rp_device", "rp_geo", "rp_accept", "rp_feature_set", "rp_dpf", "rp_aso", "rp_navigator"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if (window[a] && (typeof window[a] == "object" || typeof window[a] == "boolean")) {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        g = ["rp_smartfile"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if (window[a] && (typeof window[a] == "string" && window[a].substr(0, 6) != "[SMART")) {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        g = ["rp_callback"];
        for (var b = 0; b < g.length; b++) {
            a = g[b];
            if (window[a] && (typeof window[a] == "function" || typeof window[a] == "string")) {
                c[a] = window[a];
                window[a] = undefined
            }
        }
        d.init(c);
        d.start()
    } catch (f) {}
})();
