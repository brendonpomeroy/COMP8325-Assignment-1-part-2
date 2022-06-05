//tealium universal tag - utag.259 ut4.0.201411071927, Copyright 2014 Tealium.com Inc. All Rights Reserved.
var $CVO = window.$CVO || [];
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1
        };
        u.attr = {};
        u.clientid = 'godaddy';
        u.event_type = "";
        u.event_id = "";
        u.event_value = "";
        u.base_url = '//d1ivexoxmp59q7.cloudfront.net/' + u.clientid + '/live.js';
        u.map = {
            "convertro_type": "event_type",
            "customer_city": "city",
            "customer_state": "state",
            "customer_zip": "zip",
            "customer_country": "country",
            "order_total_usd": "event_value",
            "dom.referrer": "domain"
        };
        u.extend = [function(a, b, c, d, e, f, g) {
            d = b['first_order'];
            if (typeof d == 'undefined')
                return;
            c = [{
                'true': 'sale.new'
            }, {
                'false': 'sale.repeat'
            }
            ];
            var m = false;
            for (e = 0; e < c.length; e++) {
                for (f in c[e]) {
                    if (d == f) {
                        b['convertro_type'] = c[e][f];
                        m = true
                    };
                };
                if (m)
                    break
            };
            if (!m)
                b['convertro_type'] = 'sale.repeat';
        }
        ];
        u.send = function(a, b, c, d, e, f) {
            if (u.ev[a] || typeof u.ev.all != 'undefined') {
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false)
                            return 
                    } catch (e) {}
                };
                for (d in utag.loader.GV(u.map)) {
                    if (typeof b[d] != "undefined" && b[d] != "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (e[f] == "event_type" || e[f] == "event_id" || e[f] == "event_value") {
                                u[e[f]] = b[d];
                            } else {
                                u.attr[e[f]] = b[d];
                            }
                        }
                    }
                }
                if (u.event_type == "") {
                    u.event_type = b._ctype
                };
                if (u.event_id == "") {
                    u.event_id = b._corder
                };
                if (u.event_value == "") {
                    u.event_value = b._csubtotal
                };
                if (u.attr.id || b._ccustid) {
                    u.attr.id = (u.attr.id ? u.attr.id : b._ccustid);
                    u.attr.city = (u.attr.city ? u.attr.city : b._ccity);
                    u.attr.state = (u.attr.state ? u.attr.state : b._cstate);
                    u.attr.zip = (u.attr.zip ? u.attr.zip : b._czip);
                    u.attr.country = (u.attr.country ? u.attr.country : b._ccountry);
                    $CVO.push(['trackUser', u.attr]);
                }
                var t = u.event_type.split(',');
                var v = u.event_value.split(',');
                if (u.event_id) {
                    for (d = 0; d < t.length; d++) {
                        var value = ((typeof v[d] != "undefined") ? v[d] : u.event_value);
                        $CVO.push(['trackEvent', {
                            type: ((t[d]) ? t[d] : "sale"),
                            id: u.event_id,
                            amount: ((value) ? value : '0')
                        }
                        ]);
                    }
                } else if (u.event_type) {
                    for (d = 0; d < t.length; d++) {
                        $CVO.push(['trackEvent', {
                            type: t[d]
                        }
                        ]);
                    }
                }
                u.s = document.getElementsByTagName("script")[0];
                u.scr = document.createElement("script");
                u.scr.type = "text/javascript";
                u.scr.src = u.base_url;
                u.s.parentNode.insertBefore(u.scr, u.s);
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('259', 'godaddy.godaddy');
} catch (e) {}

