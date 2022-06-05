function open_menu(e) {
    $(e).siblings(".drop-choices").not(".inuse").css("top", e.offsetHeight + "px").each(function() {
        $(this).css("left", $(e).position().left + "px").css("top", $(e).height() + $(e).position().top + "px")
    }).addClass("active inuse")
}
function close_menus(e) {
    $(".drop-choices.inuse").not(".active").removeClass("inuse"), $(".drop-choices.active").removeClass("active").trigger("close_menu"), $(".flairselector").empty(), $(e.target).closest("#search").length == 0 && ($("#moresearchinfo").slideUp(), $("#searchexpando").length == 1 ? $("#searchexpando").slideUp(function() {
        $("#search_showmore").parent().show()
    }) : $("#search_showmore").parent().show())
}
function hover_open_menu(e) {}
function select_tab_menu(e, t) {
    var n = "tabbedpane-" + t, r = $(e).parent().parent().parent();
    r.find(".tabmenu li").removeClass("selected"), $(e).parent().addClass("selected"), r.find(".tabbedpane").each(function() {
        this.style.display = this.id == n ? "block" : "none"
    })
}
function update_user(e) {
    try {
        var t = $(e).find('input[name="user"]').val();
        e.action += "/" + t
    } catch (n) {}
    return !0
}
function post_user(e, t) {
    var n = $(e).find('input[name="user"]').val();
    return n == null ? post_form(e, t) : post_form(e, t + "/" + n)
}
function post_form(e, t, n, r, i) {
    try {
        return n == null && (n = function(e) {
            return reddit.status_msg.submitting
        }), $(e).find(".error").not(".status").hide(), $(e).find(".status").html(n(e)).show(), simple_post_form(e, t, {}, i)
    } catch (s) {
        return !1
    }
}
function get_form_fields(e, t, n) {
    return t = t || {}, n || (n = function(e) {
        return !0
    }), $(e).find("select, input, textarea").not(".gray, :disabled").each(function() {
        var e = $(this), r = e.attr("type");
        if (!n(this))
            return;
        if (e.data("send-checked"))
            t[e.attr("name")] = e.is(":checked");
        else if (r != "radio" && r != "checkbox" || e.is(":checked"))
            t[e.attr("name")] = e.val()
    }), t.id == null && (t.id = $(e).attr("id") ? "#" + $(e).attr("id") : ""), t
}
function form_error(e) {
    return function(t) {
        var n;
        t == "ratelimit" ? n = r._("please wait a few seconds and try again.") : n = r._("an error occurred (status: %(status)s)").format({
            status: t.status
        }), $(e).find(".status").text(n)
    }
}
function simple_post_form(e, t, n, r, i) {
    return $.request(t, get_form_fields(e, n), i, r, "json", !1, form_error(e)), !1
}
function post_pseudo_form(e, t, n) {
    var r = function(t) {
        var n = $(t).parents("form:first");
        return n.length == 0 || n.get(0) == $(e).get(0)
    };
    return $(e).find(".error").not(".status").hide(), $(e).find(".status").html(reddit.status_msg.submitting).show(), $.request(t, get_form_fields(e, {}, r), null, n, "json", !1, form_error(e)), !1
}
function post_multipart_form(e, t) {
    return $(e).find(".error").not(".status").hide(), $(e).find(".status").html(reddit.status_msg.submitting).show(), !0
}
function emptyInput(e, t) {
    !$(e).val() || $(e).val() == t ? $(e).addClass("gray").val(t).attr("rows", 3) : $(e).focus(function() {})
}
function showlang() {
    return $(".lang-popup:first").show(), !1
}
function hidecover(e) {
    return $(e).parents(".cover-overlay").hide(), !1
}
function deleteRow(e) {
    $(e).delete_table_row()
}
function change_state(e, t, n, r, i) {
    var s = $(e).parents("form").first(), o = s.find('input[name="id"]');
    return o.length ? o = o.val() : o = $(e).thing_id(), simple_post_form(s, t, {
        id: o
    }, undefined, i), n && n(s.length ? s : e, t), $.defined(r) || s.html(s.find('[name="executed"]').val()), !1
}
function alterUnreadCount(e) {
    var t = $(".message-count");
    t.length > 0 && t.text(parseInt(t.text(), 10) + e)
}
function unread_thing(e) {
    var t = $(e);
    t.hasClass("thing") || (t = t.thing()), alterUnreadCount(1), $(t).addClass("new unread")
}
function read_thing(e) {
    var t = $(e);
    t.hasClass("thing") || (t = t.thing()), $(t).hasClass("new") ? $(t).removeClass("new") : $(t).removeClass("unread"), alterUnreadCount( - 1), $.request("read_message", {
        id: $(t).thing_id()
    })
}
function save_thing(e) {
    $(e).thing().addClass("saved")
}
function unsave_thing(e) {
    $(e).thing().removeClass("saved")
}
function click_thing(e) {
    var t = $(e);
    t.hasClass("thing") || (t = t.thing()), t.hasClass("message") && t.hasClass("recipient") && (t.hasClass("unread") ? t.removeClass("unread") : t.hasClass("new") && read_thing(e))
}
function hide_thing(e) {
    var t = $(e).thing();
    if (t.is(".comment") && t.has(".child:not(:empty)").length) {
        var n = "[" + _.escape(r._("deleted")) + "]", i = t.addClass("deleted").find(".entry:first");
        i.find(".usertext").addClass("grayed").find(".md").html("<p>" + n + "</p>"), i.find(".author").replaceWith("<em>" + n + "</em>"), i.find(".userattrs, .score, .buttons").remove()
    } else 
        t.fadeOut(function() {
            $(this).toggleClass("hidden"), unexpando_child(e)
        })
}
function toggle_label(e, t, n) {
    $(e).parent().find(".option").toggle(), $(e)[0].onclick = function() {
        return toggle_label(e, n, t)
    }, t && t(e)
}
function toggle(e, t, n) {
    r.analytics.breadcrumbs.storeLastClick(e);
    var i = $(e).parent().addBack().filter(".option"), s = i.removeClass("active").siblings().addClass("active").get(0);
    return n&&!s.onclick && (s.onclick = function() {
        return toggle(s, n, t)
    }), t && t(e), !1
}
function cancelToggleForm(e, t, n, r) {
    if (n && $(e).filter("button").length) {
        var i = $(e).thing().find(n).children(":visible").filter(":first");
        toggle(i)
    }
    return $(e).thing().find(t).each(function() {
        r && r($(this)), $(this).hide().remove()
    }), !1
}
function linkstatus(e) {
    return reddit.status_msg.submitting
}
function subscribe(e) {
    return function() {
        reddit.logged && (reddit.cur_site == e && $("body").addClass("subscriber"), $.things(e).find(".entry").addClass("likes"), $.request("subscribe", {
            sr: e,
            action: "sub"
        }), r.analytics.fireUITrackingPixel("sub", e, {
            has_subd: r.config.has_subscribed
        }))
    }
}
function unsubscribe(e) {
    return function() {
        reddit.logged && (reddit.cur_site == e && $("body").removeClass("subscriber"), $.things(e).find(".entry").removeClass("likes"), $.request("subscribe", {
            sr: e,
            action: "unsub"
        }), r.analytics.fireUITrackingPixel("unsub", e))
    }
}
function friend(e, t, n) {
    return function() {
        reddit.logged && (encoded = encodeURIComponent(document.referrer), $.request("friend?note=" + encoded, {
            name: e,
            container: t,
            type: n
        }))
    }
}
function unfriend(e, t, n) {
    return function() {
        $.request("unfriend", {
            name: e,
            container: t,
            type: n
        })
    }
}
function share(e) {
    var t = $(e).thing_id();
    r.analytics.fireGAEvent("share", "shareOpen", t), $.request("new_captcha"), $(e).new_thing_child($(".sharelink:first").clone(!0).attr("id", "sharelink_" + t), !1), $.request("new_captcha")
}
function cancelShare(e) {
    var t = $(e).thing_id();
    return r.analytics.fireGAEvent("share", "shareClose", t), cancelToggleForm(e, ".sharelink", ".share-button")
}
function reject_promo(e) {
    $(e).thing().find(".rejection-form").show().find("textare").focus()
}
function cancel_reject_promo(e) {
    $(e).thing().find(".rejection-form").hide()
}
function complete_reject_promo(e) {
    $(e).thing().removeClass("accepted").addClass("rejected").find(".reject_promo").remove()
}
function helpon(e) {
    $(e).parents(".usertext-edit:first").children(".markhelp:first").show()
}
function helpoff(e) {
    $(e).parents(".usertext-edit:first").children(".markhelp:first").hide()
}
function show_all_messages(e) {
    var t = $(e).parents(".message"), n = t.find(".message"), r = t.add(n), i = [];
    return _.each(r, function(e) {
        var t = $(e), n = t.find(".expand:first"), r = t.hasClass("collapsed");
        r && (t.toggleClass("collapsed noncollapsed"), n.text("[-]"), i.push(t.thing_id()))
    }), i.length && $.request("uncollapse_message", {
        id: i.join(",")
    }), !1
}
function hide_all_messages(e) {
    var t = $(e).parents(".message"), n = t.find(".message"), r = t.add(n), i = [];
    return _.each(r, function(e) {
        var t = $(e), n = t.find(".expand:first"), r = t.hasClass("collapsed");
        r || (t.toggleClass("collapsed noncollapsed"), n.text("[+]"), i.push(t.thing_id()))
    }), i.length && $.request("collapse_message", {
        id: i.join(",")
    }), !1
}
function togglecomment(e) {
    var t = $(e).thing(), n = t.find(".expand:first"), r = t.hasClass("collapsed");
    t.toggleClass("collapsed noncollapsed"), r ? n.text("[–]") : n.text("[+]")
}
function togglemessage(e) {
    var t = $(e).thing(), n = t.find(".expand:first"), r = t.hasClass("collapsed");
    t.toggleClass("collapsed noncollapsed"), r ? (n.text("[–]"), $.request("uncollapse_message", {
        id: $(t).thing_id()
    })) : (n.text("[+]"), $.request("collapse_message", {
        id: $(t).thing_id()
    }))
}
function morechildren(e, t, n, r, i, s) {
    $(e).html(reddit.status_msg.loading).css("color", "red");
    var o = $(e).parents(".thing.morechildren:first").thing_id();
    return $.request("morechildren", {
        link_id: t,
        sort: n,
        children: r,
        depth: i,
        id: o,
        pv_hex: s
    }), !1
}
function moremessages(e) {
    return $(e).html(reddit.status_msg.loading).css("color", "red"), $.request("moremessages", {
        parent_id: $(e).thing_id()
    }), !1
}
function add_thing_to_cookie(e, t) {
    var n = $(e).thing_id();
    if (n && n.length)
        return add_thing_id_to_cookie(n, t)
}
function add_thing_id_to_cookie(e, t) {
    var n = $.cookie_read(t);
    n.data || (n.data = "");
    if (n.data.substring(0, e.length) == e)
        return;
    n.data = e + "," + n.data;
    var r = n.data.split(",");
    r.length > 5 && (r = $.uniq(r, 5), n.data = r.join(",")), $.cookie_write(n)
}
function clicked_items() {
    var e = $.cookie_read("recentclicks2");
    if (e && e.data) {
        var t = e.data.split(",");
        for (var n = t.length - 1; n >= 0; n--)(!t[n] ||!t[n].length) 
            && t.splice(n, 1);
        return t
    }
    return []
}
function clear_clicked_items() {
    var e = $.cookie_read("recentclicks2");
    e.data = "", $.cookie_write(e), $(".gadget").remove()
}
function updateEventHandlers(e) {
    e = $(e);
    var t = e.parent();
    $(e).filter(".link").find("a.title, a.comments").mousedown(function() {
        add_thing_to_cookie(this, "recentclicks2")
    }), t.filter(".organic-listing").length && (e.find(".hide-button a, .del-button a.yes, .report-button a.yes").each(function() {
        $(this).get(0).onclick = null
    }), e.find(".hide-button a").click(function() {
        var e = $(this).get(0);
        change_state(e, "hide", function() {
            r.spotlight.next()
        })
    }), e.find(".del-button a.yes").click(function() {
        var e = $(this).get(0);
        change_state(e, "del", function() {
            r.spotlight.next()
        })
    }), e.find(".report-button a.yes").click(function() {
        var e = $(this).get(0);
        change_state(e, "report", function() {
            r.spotlight.next()
        })
    }))
}
function last_click() {
    var e = r.analytics.breadcrumbs.lastClickFullname();
    e && $("body").hasClass("listing-page") && ($(".last-clicked").removeClass("last-clicked"), $(".id-" + e).last().addClass("last-clicked"))
}
function login(e) {
    return post_user(this, "login")
}
function register(e) {
    return post_user(this, "register")
}
function fetch_title() {
    var e = $("#url-field"), t = e.find(".NO_URL"), n = e.find(".title-status"), r = $("#url").val();
    if (r) {
        if ($('form#newlink textarea[name="title"]').val()&&!confirm("This will replace your existing title, proceed?"))
            return;
        n.show().text(reddit.status_msg.loading), t.hide(), $.request("fetch_title", {
            url: r
        })
    } else 
        n.hide(), t.show().text("a url is required")
}
function sr_cache() {
    return $.defined(reddit.sr_cache) || (reddit.sr_cache = new Array), reddit.sr_cache
}
function highlight_reddit(e) {
    $("#sr-drop-down").children(".sr-selected").removeClass("sr-selected"), e && $(e).addClass("sr-selected")
}
function update_dropdown(e) {
    var t = $("#sr-drop-down");
    if (!e.length) {
        t.hide();
        return 
    }
    var n = t.children(":first");
    n.removeClass("sr-selected"), t.children().remove(), $.each(e, function(r) {
        if (r > 10)
            return;
        var i = e[r], s = n.clone();
        s.text(i), t.append(s)
    });
    var r = $("#sr-autocomplete").outerHeight();
    t.css("top", r), t.show()
}
function sr_search(e) {
    e = e.toLowerCase();
    var t = sr_cache();
    t[e] ? update_dropdown(t[e]) : $.request("search_reddit_names.json", {
        query: e,
        include_over_18: r.config.over_18
    }, function(n) {
        t[e] = n.names, update_dropdown(n.names)
    })
}
function sr_name_up(e) {
    var t = $("#sr-autocomplete").val(), n = window.old_sr_name || "";
    window.old_sr_name = t, t == "" ? hide_sr_name_list() : e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 9 && (e.keyCode == 27 && reddit.orig_sr ? ($("#sr-autocomplete").val(reddit.orig_sr), hide_sr_name_list()) : t != n && (reddit.orig_sr = t, sr_search($("#sr-autocomplete").val())))
}
function sr_name_down(e) {
    var t = $("#sr-autocomplete");
    if (e.keyCode == 38 || e.keyCode == 40) {
        var n = e.keyCode == 38 && "up" || "down", r = $("#sr-drop-down .sr-selected:first"), i = $("#sr-drop-down .sr-name-row:first"), s = $("#sr-drop-down .sr-name-row:last"), o = null;
        return n == "down" ? r.length ? r.get(0) == s.get(0) ? o = null : o = r.next(":first") : o = i : r.length ? r.get(0) == i.get(0) ? o = null : o = r.prev(":first") : o = s, highlight_reddit(o), o ? t.val($.trim(o.text())) : t.val(reddit.orig_sr), !1
    }
    if (e.keyCode == 13)
        return $("#sr-autocomplete").trigger("sr-changed"), hide_sr_name_list(), t.parents("form").submit(), !1
}
function hide_sr_name_list(e) {
    $("#sr-drop-down").hide()
}
function sr_dropdown_mdown(e) {
    return reddit.sr_mouse_row = e, !1
}
function sr_dropdown_mup(e) {
    if (reddit.sr_mouse_row == e) {
        var t = $(e).text();
        $("#sr-autocomplete").val(t), $("#sr-drop-down").hide(), $("#sr-autocomplete").trigger("sr-changed")
    }
}
function set_sr_name(e) {
    var t = $(e).text();
    $("#sr-autocomplete").trigger("focus").val(t), $("#sr-autocomplete").trigger("sr-changed")
}
function select_form_tab(e, t, n) {
    var r = $(e).parent();
    r.addClass("selected").siblings().removeClass("selected");
    var i = r.parent("ul").next(".formtabs-content");
    i.find(t).show().find(":input").removeAttr("disabled").end(), i.find(n).hide().find(":input").attr("disabled", !0)
}
function expando_cache() {
    return $.defined(reddit.thing_child_cache) || (reddit.thing_child_cache = new Array), reddit.thing_child_cache
}
function expando_child(e) {
    var t = expando_cache(), n = $(e).thing(), r = n.find(".expando-button");
    r.addClass("expanded").removeClass("collapsed").get(0).onclick = function() {
        unexpando_child(e)
    };
    var i = n.find(".expando"), s = n.thing_id() + "_cache";
    return t[s] ? (i.html($.unsafe(t[s])), $(document).trigger("expando_thing", n)) : $.request("expando", {
        link_id: n.thing_id()
    }, function(e) {
        t[s] = e, i.html($.unsafe(e)), $(document).trigger("expando_thing", n)
    }, !1, "html"), i.show(), !1
}
function unexpando_child(e) {
    var t = $(e).thing(), n = t.find(".expando-button");
    n.length && (n.addClass("collapsed").removeClass("expanded").get(0).onclick = function() {
        expando_child(e)
    }), t.find(".expando").hide().empty()
}
function show_edit_usertext(e) {
    var t = e.find(".usertext-edit"), n = e.find(".usertext-body"), r = t.find("div > textarea"), i = Math.max(n.children(".md").width(), 500), s = Math.max(n.children(".md").height(), 100);
    n.hide(), t.show(), r.css("width", ""), r.css("height", "");
    if (r.get(0).scrollHeight > r.height()) {
        var o = Math.max(i - 5, r.width());
        r.width(o), t.width(o);
        var u = Math.max(s, r.height());
        r.height(u)
    }
    e.find(".cancel, .save").show().end().find(".help-toggle").show().end(), r.focus()
}
function hide_edit_usertext(e) {
    e.find(".usertext-edit").hide().end().find(".usertext-body").show().end().find(".cancel, .save").hide().end().find(".help-toggle").hide().end().find(".markhelp").hide().end()
}
function comment_reply_for_elem(e) {
    e = $(e);
    var t = e.thing(), n = e.thing_id(), r = t.find(".child .usertext:first");
    if (!r.length || r.parent().thing_id() != t.thing_id())
        r = $(".usertext.cloneable:first").clone(!0), e.new_thing_child(r), r.prop("thing_id").value = n, r.attr("id", "commentreply_" + n), r.find(".error").hide();
    return r
}
function edit_usertext(e) {
    var t = $(e).thing();
    t.find(".edit-usertext:first").parent("li").addBack().hide(), show_edit_usertext(t.find(".usertext:first"))
}
function cancel_usertext(e) {
    var t = $(e);
    t.thing().find(".edit-usertext:first").parent("li").addBack().show(), hide_edit_usertext(t.closest(".usertext"))
}
function save_usertext(e) {
    var t = $(e).thing();
    t.find(".edit-usertext:first").parent("li").addBack().show()
}
function reply(e) {
    var t = comment_reply_for_elem(e), n = t.find("textarea");
    if (window.getSelection && n.val().length == 0) {
        var r = window.getSelection(), i = $(r.focusNode).parents(".md").first(), s = $(r.anchorNode).parents(".md").first();
        if (i.length && i.is(s)) {
            var o = r.toString();
            o.length > 0 && (o = o.replace(/^/gm, "> "), n.val(o + "\n\n"), n.scrollTop(n.scrollHeight))
        }
    }
    return show_edit_usertext(t), t.show(), t.find(".cancel").get(0).onclick = function() {
        t.hide()
    }, $(e).thing().find(".showreplies:visible").click(), !1
}
function toggle_distinguish_span(e) {
    var t = $(e).parents("form")[0];
    $(t).children().toggle()
}
function set_distinguish(e, t) {
    change_state(e, "distinguish/" + t), $(e).children().toggle()
}
function populate_click_gadget() {
    if ($(".click-gadget").length) {
        var e = clicked_items();
        e && e.length && (e = $.uniq(e, 5), e.sort(), $.request("gadget/click/" + e.join(","), undefined, undefined, undefined, "json", !0))
    }
}
function clear_all_langs(e) {
    $(e).parents("td").find('input[type="checkbox"]').prop("checked", !1)
}
function check_some_langs(e) {
    $(e).parents("td").find("#some-langs").prop("checked", !0)
}
function fetch_parent(e, t, n) {
    var r = $(e).thing(), i = "";
    return $(e).css("color", "red").html(reddit.status_msg.loading), $.getJSON(t, function(t) {
        $.each(t, function() {
            this && this.data.children && $.each(this.data.children, function() {
                this.data.name == n && (i = this.data.body_html)
            })
        }), i && r.find(".md").first().before('<div class="parent rounded">' + $.unsafe(i) + "</div>"), $(e).parent("li").addBack().remove()
    }), !1
}
function big_mod_action(e, t) {
    if (!e.hasClass("pressed")) {
        e.addClass("pressed");
        var n = e.thing_id();
        d = {
            id: n
        }, e.siblings(".status-msg").hide(), t==-1 ? (d.spam=!1, $.request("remove", d, null, !0), e.siblings(".removed").show()) : t==-2 ? ($.request("remove", d, null, !0), e.siblings(".spammed").show()) : t == 1 && ($.request("approve", d, null, !0), e.siblings(".approved").show())
    }
    return e.siblings(".pretty-button").removeClass("pressed"), !1
}
function big_mod_toggle(e, t, n) {
    return e.toggleClass("pressed"), $.request(e.is(".pressed") ? t : n, {
        id: e.thing_id()
    }, null, !0), !1
}
function show_friend(e) {
    var t = '<a class="friend" title="friend" href="/prefs/friends">F</a>', n = $("div.content .author.id-" + e).addClass("friend").next(".userattrs").each(function() {
        $(this).html() ? $(this).find(".friend").length == 0 && $(this).find("a:first").debug().before(t + ",") : $(this).html(" [" + t + "]")
    })
}
function show_unfriend(e) {
    var t = $(".author.id-" + e).removeClass("friend").next(".userattrs");
    t.each(function() {
        $(this).find("a.friend").remove(), $(this).find("a").length == 0 && $(this).html("")
    })
}
function search_feedback(e, t) {
    f = $("form#search");
    var n = f.find('input[name="q"]').val(), r = f.find('input[name="sort"]').val(), i = f.find('input[name="t"]').val(), s = {
        q: n,
        sort: r,
        t: i,
        approval: t
    };
    return $.request("searchfeedback", s, null, !0), e.siblings(".pretty-button").removeClass("pressed"), e.siblings(".thanks").show(), e.addClass("pressed"), !1
}
function highlight_new_comments(e) {
    var t;
    for (t = 0; t <= 9; t++)
        items = $(".comment-period-" + t), e >= 0 && t >= e ? items.addClass("new-comment") : items.removeClass("new-comment")
}
function save_href(e) {
    return e.attr("srcurl") || e.attr("srcurl", e.attr("href")), e
}
function pure_domain(e) {
    var t = e.match(/:\/\/([^/]+)/);
    return t && (t = t[1].replace(/^www\./, "")), t
}
function parse_domain(e) {
    var t = pure_domain(e);
    if (!t) {
        var n = e.match(/\/r\/([^/]+)/);
        n && (t = "self." + n[1].toLowerCase())
    }
    return t
}(function(e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})(typeof window != "undefined" ? window : this, function(window, noGlobal) {
    function isArraylike(e) {
        var t = e.length, n = jQuery.type(e);
        return n === "function" || jQuery.isWindow(e)?!1 : e.nodeType === 1 && t?!0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }
    function winnow(e, t, n) {
        if (jQuery.isFunction(t))
            return jQuery.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return jQuery.grep(e, function(e) {
                return e === t !== n
            });
        if (typeof t == "string") {
            if (risSimple.test(t))
                return jQuery.filter(t, e, n);
            t = jQuery.filter(t, e)
        }
        return jQuery.grep(e, function(e) {
            return indexOf.call(t, e) >= 0 !== n
        })
    }
    function sibling(e, t) {
        while ((e = e[t]) && e.nodeType !== 1);
        return e
    }
    function createOptions(e) {
        var t = optionsCache[e] = {};
        return jQuery.each(e.match(rnotwhite) || [], function(e, n) {
            t[n]=!0
        }), t
    }
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready()
    }
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = jQuery.expando + Math.random()
    }
    function dataAttr(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase(), n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true"?!0 : n === "false"?!1 : n === "null" ? null : + n + "" === n?+n : rbrace.test(n) ? jQuery.parseJSON(n) : n
                } catch (i) {}
                data_user.set(e, t, n)
            } else 
                n = undefined
        }
        return n
    }
    function returnTrue() {
        return !0
    }
    function returnFalse() {
        return !1
    }
    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    function manipulationTarget(e, t) {
        return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function disableScript(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
    }
    function restoreScript(e) {
        var t = rscriptTypeMasked.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function setGlobalEval(e, t) {
        var n = 0, r = e.length;
        for (; n < r; n++)
            data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
    }
    function cloneCopyEvent(e, t) {
        var n, r, i, s, o, u, a, f;
        if (t.nodeType !== 1)
            return;
        if (data_priv.hasData(e)) {
            s = data_priv.access(e), o = data_priv.set(t, s), f = s.events;
            if (f) {
                delete o.handle, o.events = {};
                for (i in f)
                    for (n = 0, r = f[i].length; n < r; n++)
                        jQuery.event.add(t, i, f[i][n])
                    }
        }
        data_user.hasData(e) && (u = data_user.access(e), a = jQuery.extend({}, u), data_user.set(t, a))
    }
    function getAll(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*"): e.querySelectorAll ? e.querySelectorAll(t || "*"): [];
        return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
    }
    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && rcheckableType.test(e.type))
            t.checked = e.checked;
        else if (n === "input" || n === "textarea")
            t.defaultValue = e.defaultValue
    }
    function actualDisplay(e, t) {
        var n, r = jQuery(t.createElement(e)).appendTo(t.body), i = window.getDefaultComputedStyle && (n = window.getDefaultComputedStyle(r[0])) ? n.display: jQuery.css(r[0], "display");
        return r.detach(), i
    }
    function defaultDisplay(e) {
        var t = document, n = elemdisplay[e];
        if (!n) {
            n = actualDisplay(e, t);
            if (n === "none" ||!n)
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = iframe[0].contentDocument, t.write(), t.close(), n = actualDisplay(e, t), iframe.detach();
            elemdisplay[e] = n
        }
        return n
    }
    function curCSS(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || getStyles(e), n && (o = n.getPropertyValue(t) || n[t]), n && (o === ""&&!jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)), rnumnonpx.test(o) && rmargin.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o !== undefined ? o + "" : o
    }
    function addGetHookIf(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return 
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }
    function vendorPropName(e, t) {
        if (t in e)
            return t;
        var n = t[0].toUpperCase() + t.slice(1), r = t, i = cssPrefixes.length;
        while (i--) {
            t = cssPrefixes[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function setPositiveNumber(e, t, n) {
        var r = rnumsplit.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function augmentWidthOrHeight(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4: t === "width" ? 1: 0, o = 0;
        for (; s < 4; s += 2)
            n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)), r ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))) : (o += jQuery.css(e, "padding" + cssExpand[s], !0, i), n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
        return o
    }
    function getWidthOrHeight(e, t, n) {
        var r=!0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = getStyles(e), o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = curCSS(e, t, s);
            if (i < 0 || i == null)
                i = e.style[t];
            if (rnumnonpx.test(i))
                return i;
            r = o && (support.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function showHide(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            s[o] = data_priv.get(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName)))) : (i = isHidden(r), (n !== "none" ||!i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            if (!t || r.style.display === "none" || r.style.display === "")
                r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }
    function Tween(e, t, n, r, i) {
        return new Tween.prototype.init(e, t, n, r, i)
    }
    function createFxNow() {
        return setTimeout(function() {
            fxNow = undefined
        }), fxNow = jQuery.now()
    }
    function genFx(e, t) {
        var n, r = 0, i = {
            height: e
        };
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t)
            n = cssExpand[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function createTween(e, t, n) {
        var r, i = (tweeners[t] || []).concat(tweeners["*"]), s = 0, o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e))
                return r
    }
    function defaultPrefilter(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this, h = {}, p = e.style, d = e.nodeType && isHidden(e), v = data_priv.get(e, "fxshow");
        n.queue || (u = jQuery._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, c.always(function() {
            c.always(function() {
                u.unqueued--, jQuery.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], f = jQuery.css(e, "display"), l = f === "none" ? data_priv.get(e, "olddisplay") || defaultDisplay(e.nodeName) : f, l === "inline" && jQuery.css(e, "float") === "none" && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (rfxtypes.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (d ? "hide" : "show")) {
                    if (i !== "show" ||!v || v[r] === undefined)
                        continue;
                    d=!0
                }
                h[r] = v && v[r] || jQuery.style(e, r)
            } else 
                f = undefined
        }
        if (!jQuery.isEmptyObject(h)) {
            v ? "hidden"in v && (d = v.hidden) : v = data_priv.access(e, "fxshow", {}), s && (v.hidden=!d), d ? jQuery(e).show() : c.done(function() {
                jQuery(e).hide()
            }), c.done(function() {
                var t;
                data_priv.remove(e, "fxshow");
                for (t in h)
                    jQuery.style(e, t, h[t])
            });
            for (r in h)
                o = createTween(d ? v[r] : 0, r, c), r in v || (v[r] = o.start, d && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        } else (f === "none" ? defaultDisplay(e.nodeName) : f) 
            === "inline" && (p.display = f)
    }
    function propFilter(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = jQuery.camelCase(n), i = t[r], s = e[n], jQuery.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = jQuery.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s), delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n], t[n] = i)
                } else 
                    t[r] = i
        }
    }
    function Animation(e, t, n) {
        var r, i, s = 0, o = animationPrefilters.length, u = jQuery.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            if (i)
                return !1;
            var t = fxNow || createFxNow(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)
                f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({
            elem: e,
            props: jQuery.extend({}, t),
            opts: jQuery.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: fxNow || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },
            stop: function(t) {
                var n = 0, r = t ? f.tweens.length: 0;
                if (i)
                    return this;
                i=!0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }
        }), l = f.props;
        propFilter(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = animationPrefilters[s].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return jQuery.map(l, createTween, f), jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f), jQuery.fx.timer(jQuery.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function addToPrefiltersOrTransports(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(n))
                while (r = s[i++])
                    r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function inspectPrefiltersOrTransports(e, t, n, r) {
        function o(u) {
            var a;
            return i[u]=!0, jQuery.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string"&&!s&&!i[f])
                    return t.dataTypes.unshift(f), o(f), !1;
                if (s)
                    return !(a = f)
            }), a
        }
        var i = {}, s = e === transports;
        return o(t.dataTypes[0]) ||!i["*"] && o("*")
    }
    function ajaxExtend(e, t) {
        var n, r, i = jQuery.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && jQuery.extend(!0, e, r), e
    }
    function ajaxHandleResponses(e, t, n) {
        var r, i, s, o, u = e.contents, a = e.dataTypes;
        while (a[0] === "*")
            a.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    a.unshift(i);
                    break
                }
        if (a[0]in n)
            s = a[0];
        else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        if (s)
            return s !== a[0] && a.unshift(s), n[s]
    }
    function ajaxConvert(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*")
                    s = a;
                else if (a !== "*" && a !== s) {
                    o = f[a + " " + s] || f["* " + s];
                    if (!o)
                        for (i in f) {
                            u = i.split(" ");
                            if (u[1] === s) {
                                o = f[a + " " + u[0]] || f["* " + u[0]];
                                if (o) {
                                    o===!0 ? o = f[i] : f[i]!==!0 && (s = u[0], l.unshift(u[1]));
                                    break
                                }
                            }
                        }
                        if (o!==!0)
                            if (o && e["throws"])
                                t = o(t);
                            else 
                                try {
                                    t = o(t)
                                } catch (c) {
                                    return {
                                        state: "parsererror",
                                        error: o ? c: "No conversion from " + a + " to " + s
                                    }
                                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function buildParams(e, t, n, r) {
        var i;
        if (jQuery.isArray(t))
            jQuery.each(t, function(t, i) {
                n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && jQuery.type(t) === "object")
            for (i in t)
                buildParams(e + "[" + i + "]", t[i], n, r);
        else 
            r(e, t)
        }
    function getWindow(e) {
        return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }
    var arr = [], slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {}, document = window.document, version = "2.1.1", jQuery = function(e, t) {
        return new jQuery.fn.init(e, t)
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(e, t) {
        return t.toUpperCase()
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
        },
        pushStack: function(e) {
            var t = jQuery.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return jQuery.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(jQuery.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length, n =+ e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f=!1;
        typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object"&&!jQuery.isFunction(o) && (o = {}), u === a && (o = this, u--);
        for (; u < a; u++)
            if ((e = arguments[u]) != null)
                for (t in e) {
                    n = o[t], r = e[t];
                    if (o === r)
                        continue;
                        f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i=!1, s = n && jQuery.isArray(n) ? n : []) : s = n && jQuery.isPlainObject(n) ? n : {}, o[t] = jQuery.extend(f, s, r)) : r !== undefined && (o[t] = r)
                }
        return o
    }, jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return jQuery.type(e) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return e != null && e === e.window
        },
        isNumeric: function(e) {
            return !jQuery.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e)?!1 : e.constructor&&!hasOwn.call(e.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object" : typeof e
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
        },
        camelCase: function(e) {
            return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r===!1)
                            break
                    } else 
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r===!1)
                                break
                        } else if (o)
                for (; i < s; i++) {
                    r = t.call(e[i], i, e[i]);
                    if (r===!1)
                        break
                } else 
                    for (i in e) {
                        r = t.call(e[i], i, e[i]);
                        if (r===!1)
                            break
                    }
            return e
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(rtrim, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return t == null?-1 : indexOf.call(t, e, n)
        },
        merge: function(e, t) {
            var n =+ t.length, r = 0, i = e.length;
            for (; r < n; r++)
                e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length, u=!n;
            for (; s < o; s++)
                r=!t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e), u = [];
            if (o)
                for (; i < s; i++)
                    r = t(e[i], i, n), r != null && u.push(r);
            else 
                for (i in e)
                    r = t(e[i], i, n), r != null && u.push(r);
            return concat.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return typeof t == "string" && (n = e[t],
            t = e, e = n), jQuery.isFunction(e) ? (r = slice.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(slice.call(arguments)))
            }, i.guid = e.guid = e.guid || jQuery.guid++, i) : undefined
        },
        now: Date.now,
        support: support
    }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        class2type["[object " + t + "]"] = t.toLowerCase()
    });
    var Sizzle = function(e) {
        function st(e, t, r, i) {
            var s, u, f, l, c, d, g, y, S, x;
            (t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [];
            if (!e || typeof e != "string")
                return r;
            if ((l = t.nodeType) !== 1 && l !== 9)
                return [];
            if (v&&!i) {
                if (s = Z.exec(e))
                    if (f = s[1]) {
                        if (l === 9) {
                            u = t.getElementById(f);
                            if (!u ||!u.parentNode)
                                return r;
                                if (u.id === f)
                                    return r.push(u), r
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f)
                            return r.push(u), r
                    } else {
                        if (s[2])
                            return P.apply(r, t.getElementsByTagName(e)), r;
                            if ((f = s[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return P.apply(r, t.getElementsByClassName(f)), r
                    }
                if (n.qsa && (!m ||!m.test(e))) {
                    y = g = w, S = t, x = l === 9 && e;
                    if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                        d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
                        while (c--)
                            d[c] = y + mt(d[c]);
                        S = et.test(e) && dt(t.parentNode) || t, x = d.join(",")
                    }
                    if (x)
                        try {
                            return P.apply(r, S.querySelectorAll(x)), r
                    } catch (T) {} finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return a(e.replace(z, "$1"), t, r, i)
        }
        function ot() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function ut(e) {
            return e[w]=!0, e
        }
        function at(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function ft(e, t) {
            var n = e.split("|"), i = e.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function lt(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return - 1;
            return e ? 1 : - 1
        }
        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function pt(e) {
            return ut(function(t) {
                return t =+ t, ut(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i]=!(r[i] = n[i]))
                })
            })
        }
        function dt(e) {
            return e && typeof e.getElementsByTagName !== L && e
        }
        function vt() {}
        function mt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)
                r += e[t].value;
            return r
        }
        function gt(e, t, n) {
            var r = t.dir, i = n && r === "parentNode", s = x++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (t.nodeType === 1 || i)
                        return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [S, s];
                if (o) {
                    while (t = t[r])
                        if (t.nodeType === 1 || i)
                            if (e(t, n, o))
                                return !0
                } else 
                    while (t = t[r])
                        if (t.nodeType === 1 || i) {
                            a = t[w] || (t[w] = {});
                            if ((u = a[r]) && u[0] === S && u[1] === s)
                                return f[2] = u[2];
                                a[r] = f;
                                if (f[2] = e(t, n, o))
                                    return !0
                        }
            }
        }
        function yt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function bt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)
                st(e, t[r], n);
            return n
        }
        function wt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s), f && t.push(u);
            return o
        }
        function Et(e, t, n, r, i, s) {
            return r&&!r[w] && (r = Et(r)), i&&!i[w] && (i = Et(i, s)), ut(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || bt(t || "*", u.nodeType ? [u] : u, []), m = e && (s ||!t) ? wt(v, h, e, u, a): v, g = n ? i || (s ? e : d || r) ? []: o: m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l])
                            g[p[l]]=!(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? B.call(s, c) : h[l])>-1 && (s[f]=!(o[f] = c))
                        }
                } else 
                    g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : P.apply(o, g)
            })
        }
        function St(e) {
            var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1: 0, l = gt(function(e) {
                return e === t
            }, u, !0), c = gt(function(e) {
                return B.call(t, e)>-1
            }, u, !0), h = [function(e, n, r) {
                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }
            ];
            for (; a < s; a++)
                if (n = r.relative[e[a].type])
                    h = [gt(yt(h), n)];
                else {
                    n = r.filter[e[a].type].apply(null, e[a].matches);
                    if (n[w]) {
                        i=++a;
                        for (; i < s; i++)
                            if (r.relative[e[i].type])
                                break;
                                return Et(a > 1 && yt(h), a > 1 && mt(e.slice(0, a - 1).concat({
                                    value: e[a - 2].type === " " ? "*": ""
                                })).replace(z, "$1"), n, a < i && St(e.slice(a, i)), i < s && St(e = e.slice(i)), i < s && mt(e))
                            }
                            h.push(n)
                }
            return yt(h)
        }
        function xt(e, t) {
            var n = t.length > 0, i = e.length > 0, s = function(s, o, u, a, l) {
                var c, h, d, v = 0, m = "0", g = s && [], y = [], b = f, w = s || i && r.find.TAG("*", l), E = S += b == null ? 1: Math.random() || .1, x = w.length;
                l && (f = o !== p && o);
                for (; m !== x && (c = w[m]) != null; m++) {
                    if (i && c) {
                        h = 0;
                        while (d = e[h++])
                            if (d(c, o, u)) {
                                a.push(c);
                                break
                            }
                        l && (S = E)
                    }
                    n && ((c=!d && c) && v--, s && g.push(c))
                }
                v += m;
                if (n && m !== v) {
                    h = 0;
                    while (d = t[h++])
                        d(g, y, o, u);
                    if (s) {
                        if (v > 0)
                            while (m--)!g[m]&&!y[m] && (y[m] = _.call(a));
                        y = wt(y)
                    }
                    P.apply(a, y), l&&!s && y.length > 0 && v + t.length > 1 && st.uniqueSort(a)
                }
                return l && (S = E, f = b), g
            };
            return n ? ut(s) : s
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + - (new Date), E = e.document, S = 0, x = 0, T = ot(), N = ot(), C = ot(), k = function(e, t) {
            return e === t && (c=!0), 0
        }, L = typeof undefined, A = 1<<31, O = {}.hasOwnProperty, M = [], _ = M.pop, D = M.push, P = M.push, H = M.slice, B = M.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return - 1
        }, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", q = I.replace("w", "w#"), R = "\\[" + F + "*(" + I + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]", U = ":(" + I + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|" + ".*" + ")\\)|)", z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), W = new RegExp("^" + F + "*," + F + "*"), X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"), $ = new RegExp(U), J = new RegExp("^" + q + "$"), K = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + U),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + j + ")$", "i"),
            needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /[+~]/, tt = /'|\\/g, nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r>>10 | 55296, r & 1023 | 56320)
        };
        try {
            P.apply(M = H.call(E.childNodes), E.childNodes), M[E.childNodes.length].nodeType
        } catch (it) {
            P = {
                apply: M.length ? function(e, t) {
                    D.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = st.support = {}, s = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, h = st.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e: E, o = i.defaultView;
            if (i === p || i.nodeType !== 9 ||!i.documentElement)
                return p;
            p = i, d = i.documentElement, v=!s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                h()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                h()
            })), n.attributes = at(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = at(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Y.test(i.getElementsByClassName) && at(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), n.getById = at(function(e) {
                return d.appendChild(e).id = w, !i.getElementsByName ||!i.getElementsByName(w).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== L && v) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== L)
                    return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])
                        n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== L && v)
                    return t.getElementsByClassName(e)
            }, g = [], m = [];
            if (n.qsa = Y.test(i.querySelectorAll))
                at(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + j + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
                }), at(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                });
            return (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && at(function(e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", U)
            }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement: e, r = t && t.parentNode;
                return e === r||!!r && r.nodeType === 1&&!!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }, k = t ? function(e, t) {
                if (e === t)
                    return c=!0, 0;
                var r=!e.compareDocumentPosition-!t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 ||!n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === E && b(E, e)?-1 : t === i || t.ownerDocument === E && b(E, t) ? 1 : l ? B.call(l, e) - B.call(l, t) : 0 : r & 4?-1 : 1)
            } : function(e, t) {
                if (e === t)
                    return c=!0, 0;
                var n, r = 0, s = e.parentNode, o = t.parentNode, u = [e], a = [t];
                if (!s ||!o)
                    return e === i?-1 : t === i ? 1 : s?-1 : o ? 1 : l ? B.call(l, e) - B.call(l, t) : 0;
                if (s === o)
                    return lt(e, t);
                n = e;
                while (n = n.parentNode)
                    u.unshift(n);
                n = t;
                while (n = n.parentNode)
                    a.unshift(n);
                while (u[r] === a[r])
                    r++;
                return r ? lt(u[r], a[r]) : u[r] === E?-1 : a[r] === E ? 1 : 0
            }, i
        }, st.matches = function(e, t) {
            return st(e, null, null, t)
        }, st.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']");
            if (n.matchesSelector && v && (!g ||!g.test(t)) && (!m ||!m.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11)
                        return r
            } catch (i) {}
            return st(t, p, null, [e]).length > 0
        }, st.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && h(e), b(e, t)
        }, st.attr = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()], s = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v): undefined;
            return s !== undefined ? s : n.attributes ||!v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, st.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, st.uniqueSort = function(e) {
            var t, r = [], i = 0, s = 0;
            c=!n.detectDuplicates, l=!n.sortStable && e.slice(0), e.sort(k);
            if (c) {
                while (t = e[s++])
                    t === e[s] && (i = r.push(s));
                while (i--)
                    e.splice(r[i], 1)
            }
            return l = null, e
        }, i = st.getText = function(e) {
            var t, n = "", r = 0, s = e.nodeType;
            if (!s)
                while (t = e[r++])
                    n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string")
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += i(e)
            } else if (s === 3 || s === 4)
                return e.nodeValue;
            return n
        }, r = st.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || st.error(e[0]), e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] =+ (e[7] + e[8] || e[3] === "odd")) : e[3] && st.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n=!e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && T(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = st.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n)>-1 : t === "$=" ? n && i.slice( - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n)>-1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice( - 4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y=!a&&!u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                            return !1;
                                    d = v = e === "only"&&!d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild: m.lastChild];
                            if (o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c=++p && c && c[v] || (h = p = 0) || d.pop()
                                    )if (c.nodeType === 1&&++h && c === t) {
                                    l[e] = [S, p, h];
                                    break
                                }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S)
                                h = f[1];
                            else 
                                while (c=++p && c && c[v] || (h = p = 0) || d.pop()
                                    )if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)&&++h) {
                                y && ((c[w] || (c[w] = {}))[e] = [S, h]);
                                if (c === t)
                                    break
                            }
                            return h -= i, h === r || h%r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                        var r, s = i(e, t), o = s.length;
                        while (o--)
                            r = B.call(e, s[o]), e[r]=!(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ut(function(e) {
                    var t = [], n = [], r = u(e.replace(z, "$1"));
                    return r[w] ? ut(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u]=!(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: ut(function(e) {
                    return function(t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: ut(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e)>-1
                    }
                }),
                lang: ut(function(e) {
                    return J.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function(t) {
                        var n;
                        do 
                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled===!1
                },
                disabled: function(e) {
                    return e.disabled===!0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input"&&!!e.checked || t === "option"&&!!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected===!0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: pt(function() {
                    return [0]
                }),
                last: pt(function(e, t) {
                    return [t - 1]
                }),
                eq: pt(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: pt(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: pt(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: pt(function(e, t, n) {
                    var r = n < 0 ? n + t: n;
                    for (; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: pt(function(e, t, n) {
                    var r = n < 0 ? n + t: n;
                    for (; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = ct(t);
        for (t in{
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = ht(t);
        return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, o = st.tokenize = function(e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                if (!n || (i = W.exec(u)))
                    i && (u = u.slice(i[0].length) || u), a.push(s = []);
                n=!1;
                if (i = X.exec(u))
                    n = i.shift(), s.push({
                        value: n,
                        type: i[0].replace(z, " ")
                    }), u = u.slice(n.length);
                for (o in r.filter)(i = K[o].exec(u)
                    ) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                        value: n,
                        type: o,
                        matches: i
                    }), u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? st.error(e) : N(e, a).slice(0)
        }, u = st.compile = function(e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = o(e)), n = t.length;
                while (n--)
                    s = St(t[n]), s[w] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r)), s.selector = e
            }
            return s
        }, a = st.select = function(e, t, i, s) {
            var a, f, l, c, h, p = typeof e == "function" && e, d=!s && o(e = p.selector || e);
            i = i || [];
            if (d.length === 1) {
                f = d[0] = d[0].slice(0);
                if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                    t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
                    if (!t)
                        return i;
                    p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                }
                a = K.needsContext.test(e) ? 0 : f.length;
                while (a--) {
                    l = f[a];
                    if (r.relative[c = l.type])
                        break;
                    if (h = r.find[c])
                        if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && dt(t.parentNode) || t)) {
                            f.splice(a, 1), e = s.length && mt(f);
                            if (!e)
                                return P.apply(i, s), i;
                                break
                        }
                }
            }
            return (p || u(e, d))(s, t, !v, i, et.test(e) && dt(t.parentNode) || t), i
        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates=!!c, h(), n.sortDetached = at(function(e) {
            return e.compareDocumentPosition(p.createElement("div")) & 1
        }), at(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || ft("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes ||!at(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && ft("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")
                return e.defaultValue
        }), at(function(e) {
            return e.getAttribute("disabled") == null
        }) || ft(j, function(e, t, n) {
            var r;
            if (!n)
                return e[t]===!0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), st
    }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function(e) {
            return e.nodeType === 1
        }))
    }, jQuery.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if (typeof e != "string")
                return this.pushStack(jQuery(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (jQuery.contains(i[t], this))
                            return !0
                        }));
            for (t = 0; t < n; t++)
                jQuery.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? jQuery.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(winnow(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(winnow(this, e || [], !0))
        },
        is: function(e) {
            return !!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if (typeof e == "string") {
            e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? n = [null, e, null] : n = rquickExpr.exec(e);
            if (n && (n[1] ||!t)) {
                if (n[1]) {
                    t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
                    if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t))
                        for (n in t)
                            jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = document.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = document, this.selector = e, this
            }
            return !t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e)
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? typeof rootjQuery.ready != "undefined" ? rootjQuery.ready(e) : e(jQuery) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), jQuery.makeArray(e, this))
    };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.extend({
        dir: function(e, t, n) {
            var r = [], i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9)
                if (e.nodeType === 1) {
                    if (i && jQuery(e).is(n))
                        break;
                        r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }), jQuery.fn.extend({
        has: function(e) {
            var t = jQuery(e, this), n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; e < n; e++)
                    if (jQuery.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context): 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n)>-1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(e, t) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), jQuery.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return jQuery.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return jQuery.dir(e, "parentNode", n)
        },
        next: function(e) {
            return sibling(e, "nextSibling")
        },
        prev: function(e) {
            return sibling(e, "previousSibling")
        },
        nextAll: function(e) {
            return jQuery.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return jQuery.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return jQuery.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return jQuery.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return jQuery.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return jQuery.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || jQuery.merge([], e.childNodes)
        }
    }, function(e, t) {
        jQuery.fn[e] = function(n, r) {
            var i = jQuery.map(this, t, n);
            return e.slice( - 5) !== "Until" && (r = n), r && typeof r == "string" && (i = jQuery.filter(r, i)), this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i), rparentsprev.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var rnotwhite = /\S+/g, optionsCache = {};
    jQuery.Callbacks = function(e) {
        e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
        var t, n, r, i, s, o, u = [], a=!e.once && [], f = function(c) {
            t = e.memory && c, n=!0, o = i || 0, i = 0, s = u.length, r=!0;
            for (; u && o < s; o++)
                if (u[o].apply(c[0], c[1])===!1 && e.stopOnFalse) {
                    t=!1;
                    break
                }
            r=!1, u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
        }, l = {
            add: function() {
                if (u) {
                    var n = u.length;
                    (function o(t) {
                        jQuery.each(t, function(t, n) {
                            var r = jQuery.type(n);
                            r === "function" ? (!e.unique ||!l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
                        })
                    })(arguments), r ? s = u.length : t && (i = n, f(t))
                }
                return this
            },
            remove: function() {
                return u && jQuery.each(arguments, function(e, t) {
                    var n;
                    while ((n = jQuery.inArray(t, u, n))>-1)
                        u.splice(n, 1), r && (n <= s && s--, n <= o && o--)
                }), this
            },
            has: function(e) {
                return e ? jQuery.inArray(e, u)>-1 : !!u&&!!u.length
            },
            empty: function() {
                return u = [], s = 0, this
            },
            disable: function() {
                return u = a = t = undefined, this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return a = undefined, t || l.disable(), this
            },
            locked: function() {
                return !a
            },
            fireWith: function(e, t) {
                return u && (!n || a) && (t = t || [], t = [e, t.slice ? t.slice(): t], r ? a.push(t) : f(t)), this
            },
            fire: function() {
                return l.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return l
    }, jQuery.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], n = "pending", r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this
                },
                then: function() {
                    var e = arguments;
                    return jQuery.Deferred(function(n) {
                        jQuery.each(t, function(t, s) {
                            var o = jQuery.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? jQuery.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, jQuery.each(t, function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e^1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0, n = slice.call(arguments), r = n.length, i = r !== 1 || e && jQuery.isFunction(e.promise) ? r: 0, s = i === 1 ? e: jQuery.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? slice.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)
                    n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    });
    var readyList;
    jQuery.fn.ready = function(e) {
        return jQuery.ready.promise().done(e), this
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? jQuery.readyWait++ : jQuery.ready(!0)
        },
        ready: function(e) {
            if (e===!0?--jQuery.readyWait : jQuery.isReady)
                return;
            jQuery.isReady=!0;
            if (e!==!0&&--jQuery.readyWait > 0)
                return;
            readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))
        }
    }), jQuery.ready.promise = function(e) {
        return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(e)
    }, jQuery.ready.promise();
    var access = jQuery.access = function(e, t, n, r, i, s, o) {
        var u = 0, a = e.length, f = n == null;
        if (jQuery.type(n) === "object") {
            i=!0;
            for (u in n)
                jQuery.access(e, t, u, n[u], !0, s, o)
        } else if (r !== undefined) {
            i=!0, jQuery.isFunction(r) || (o=!0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                return f.call(jQuery(e), n)
            }));
            if (t)
                for (; u < a; u++)
                    t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
        }
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    };
    jQuery.acceptData = function(e) {
        return e.nodeType === 1 || e.nodeType === 9||!+e.nodeType
    }, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = {
        key: function(e) {
            if (!Data.accepts(e))
                return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = Data.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, jQuery.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), s = this.cache[i];
            if (typeof t == "string")
                s[t] = n;
            else if (jQuery.isEmptyObject(s))
                jQuery.extend(this.cache[i], t);
            else 
                for (r in t)
                    s[r] = t[r];
            return s
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && typeof t == "string" && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, s = this.key(e), o = this.cache[s];
            if (t === undefined)
                this.cache[s] = {};
            else {
                jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(rnotwhite) || [])), n = r.length;
                while (n--)
                    delete o[r[n]]
            }
        },
        hasData: function(e) {
            return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var data_priv = new Data, data_user = new Data, rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    jQuery.extend({
        hasData: function(e) {
            return data_user.hasData(e) || data_priv.hasData(e)
        },
        data: function(e, t, n) {
            return data_user.access(e, t, n)
        },
        removeData: function(e, t) {
            data_user.remove(e, t)
        },
        _data: function(e, t, n) {
            return data_priv.access(e, t, n)
        },
        _removeData: function(e, t) {
            data_priv.remove(e, t)
        }
    }), jQuery.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0], o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = data_user.get(s);
                    if (s.nodeType === 1&&!data_priv.get(s, "hasDataAttrs")) {
                        n = o.length;
                        while (n--)
                            o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = jQuery.camelCase(r.slice(5)), dataAttr(s, r, i[r])));
                        data_priv.set(s, "hasDataAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function() {
                data_user.set(this, e)
            }) : access(this, function(t) {
                var n, r = jQuery.camelCase(e);
                if (s && t === undefined) {
                    n = data_user.get(s, e);
                    if (n !== undefined)
                        return n;
                    n = data_user.get(s, r);
                    if (n !== undefined)
                        return n;
                    n = dataAttr(s, r, undefined);
                    if (n !== undefined)
                        return n;
                    return 
                }
                this.each(function() {
                    var n = data_user.get(this, r);
                    data_user.set(this, r, t), e.indexOf("-")!==-1 && n !== undefined && data_user.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                data_user.remove(this, e)
            })
        }
    }), jQuery.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = data_priv.get(e, t), n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t), r = n.length, i = n.shift(), s = jQuery._queueHooks(e, t), o = function() {
                jQuery.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return data_priv.get(e, n) || data_priv.access(e, n, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(e, [t + "queue", n])
                })
            })
        }
    }), jQuery.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = jQuery.queue(this, e, t);
                jQuery._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                jQuery.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = jQuery.Deferred(), s = this, o = this.length, u = function() {
                --r || i.resolveWith(s, [s])
            };
            typeof e != "string" && (t = e, e = undefined), e = e || "fx";
            while (o--)
                n = data_priv.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, cssExpand = ["Top", "Right", "Bottom", "Left"], isHidden = function(e, t) {
        return e = t || e, jQuery.css(e, "display") === "none" ||!jQuery.contains(e.ownerDocument, e)
    }, rcheckableType = /^(?:checkbox|radio)$/i;
    (function() {
        var e = document.createDocumentFragment(), t = e.appendChild(document.createElement("div")), n = document.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", support.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin"in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
            if (!m)
                return;
            n.handler && (s = n, n = s.handler, i = s.selector), n.guid || (n.guid = jQuery.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
            }), t = (t || "").match(rnotwhite) || [""], f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p)
                    continue;
                c = jQuery.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = jQuery.event.special[p] || {}, l = jQuery.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && jQuery.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, (!c.setup || c.setup.call(e, r, d, o)===!1) && e.addEventListener && e.addEventListener(p, o, !1)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), jQuery.event.global[p]=!0
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f,
            l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
            if (!m ||!(a = m.events))
                return;
            t = (t || "").match(rnotwhite) || [""], f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in a)
                        jQuery.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = jQuery.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                while (s--)
                    l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                o&&!h.length && ((!c.teardown || c.teardown.call(e, d, m.handle)===!1) && jQuery.removeEvent(e, p, m.handle), delete a[p])
            }
            jQuery.isEmptyObject(a) && (delete m.handle, data_priv.remove(e, "events"))
        },
        trigger: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = [n || document], h = hasOwn.call(e, "type") ? e.type: e, p = hasOwn.call(e, "namespace") ? e.namespace.split("."): [];
            s = o = n = n || document;
            if (n.nodeType === 3 || n.nodeType === 8)
                return;
            if (rfocusMorph.test(h + jQuery.event.triggered))
                return;
            h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = t == null ? [e] : jQuery.makeArray(t, [e]), l = jQuery.event.special[h] || {};
            if (!r && l.trigger && l.trigger.apply(n, t)===!1)
                return;
            if (!r&&!l.noBubble&&!jQuery.isWindow(n)) {
                u = l.delegateType || h, rfocusMorph.test(u + h) || (s = s.parentNode);
                for (; s; s = s.parentNode)
                    c.push(s), o = s;
                o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
            }
            i = 0;
            while ((s = c[i++])&&!e.isPropagationStopped())
                e.type = i > 1 ? u : l.bindType || h, f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle"), f && f.apply(s, t), f = a && s[a], f && f.apply && jQuery.acceptData(s) && (e.result = f.apply(s, t), e.result===!1 && e.preventDefault());
            return e.type = h, !r&&!e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t)===!1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h])&&!jQuery.isWindow(n) && (o = n[a], o && (n[a] = null), jQuery.event.triggered = h, n[h](), jQuery.event.triggered = undefined, o && (n[a] = o)), e.result
        },
        dispatch: function(e) {
            e = jQuery.event.fix(e);
            var t, n, r, i, s, o = [], u = slice.call(arguments), a = (data_priv.get(this, "events") || {})[e.type] || [], f = jQuery.event.special[e.type] || {};
            u[0] = e, e.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, e)===!1)
                return;
            o = jQuery.event.handlers.call(this, e, a), t = 0;
            while ((i = o[t++])&&!e.isPropagationStopped()) {
                e.currentTarget = i.elem, n = 0;
                while ((s = i.handlers[n++])&&!e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(s.namespace))
                        e.handleObj = s, e.data = s.data, r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u), r !== undefined && (e.result = r)===!1 && (e.preventDefault(), e.stopPropagation())
            }
            return f.postDispatch && f.postDispatch.call(this, e), e.result
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))
                for (; a !== this; a = a.parentNode || this)
                    if (a.disabled!==!0 || e.type !== "click") {
                        r = [];
                        for (n = 0; n < u; n++)
                            s = t[n], i = s.selector + " ", r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length), r[i] && r.push(s);
                            r.length && o.push({
                                elem: a,
                                handlers: r
                            })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || document, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[jQuery.expando])
                return e;
            var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new jQuery.Event(s), t = r.length;
            while (t--)
                n = r[t], e[n] = s[n];
            return e.target || (e.target = document), e.target.nodeType === 3 && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return jQuery.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = jQuery.extend(new jQuery.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, jQuery.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, jQuery.Event = function(e, t) {
        if (!(this instanceof jQuery.Event))
            return new jQuery.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue===!1 ? returnTrue : returnFalse) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || jQuery.now(), this[jQuery.expando]=!0
    }, jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        jQuery.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r&&!jQuery.contains(r, i))
                    e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), support.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
        };
        jQuery.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = data_priv.access(r, t);
                i || r.addEventListener(e, n, !0), data_priv.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = data_priv.access(r, t) - 1;
                i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0), data_priv.remove(r, t))
            }
        }
    }), jQuery.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                typeof t != "string" && (n = n || t, t = undefined);
                for (o in e)
                    this.on(o, t, n, e[o], i);
                return this
            }
            n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
            if (r===!1)
                r = returnFalse;
            else if (!r)
                return this;
            return i === 1 && (s = r, r = function(e) {
                return jQuery().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = jQuery.guid++)), this.each(function() {
                jQuery.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if (typeof e == "object") {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            if (t===!1 || typeof t == "function")
                n = t, t = undefined;
            return n===!1 && (n = returnFalse), this.each(function() {
                jQuery.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                jQuery.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return jQuery.event.trigger(e, t, n, !0)
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u = e.cloneNode(!0), a = jQuery.contains(e.ownerDocument, e);
            if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11)&&!jQuery.isXMLDoc(e)) {
                o = getAll(u), s = getAll(e);
                for (r = 0, i = s.length; r < i; r++)
                    fixInput(s[r], o[r])
            }
            if (t)
                if (n) {
                    s = s || getAll(e), o = o || getAll(u);
                    for (r = 0, i = s.length; r < i; r++)
                        cloneCopyEvent(s[r], o[r])
                } else 
                    cloneCopyEvent(e, u);
            return o = getAll(u, "script"), o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")), u
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l = t.createDocumentFragment(), c = [], h = 0, p = e.length;
            for (; h < p; h++) {
                i = e[h];
                if (i || i === 0)
                    if (jQuery.type(i) === "object")
                        jQuery.merge(c, i.nodeType ? [i] : i);
                    else if (!rhtml.test(i))
                        c.push(t.createTextNode(i));
                    else {
                        s = s || l.appendChild(t.createElement("div")), o = (rtagName.exec(i) || ["", ""])[1].toLowerCase(), u = wrapMap[o] || wrapMap._default, s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2], f = u[0];
                        while (f--)
                            s = s.lastChild;
                            jQuery.merge(c, s.childNodes), s = l.firstChild, s.textContent = ""
                    }
            }
            l.textContent = "", h = 0;
            while (i = c[h++]) {
                if (r && jQuery.inArray(i, r)!==-1)
                    continue;
                a = jQuery.contains(i.ownerDocument, i), s = getAll(l.appendChild(i), "script"), a && setGlobalEval(s);
                if (n) {
                    f = 0;
                    while (i = s[f++])
                        rscriptType.test(i.type || "") && n.push(i)
                    }
            }
            return l
        },
        cleanData: function(e) {
            var t, n, r, i, s = jQuery.event.special, o = 0;
            for (; (n = e[o]) !== undefined; o++) {
                if (jQuery.acceptData(n)) {
                    i = n[data_priv.expando];
                    if (i && (t = data_priv.cache[i])) {
                        if (t.events)
                            for (r in t.events)
                                s[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                        data_priv.cache[i] && delete data_priv.cache[i]
                    }
                }
                delete data_user.cache[n[data_user.expando]]
            }
        }
    }), jQuery.fn.extend({
        text: function(e) {
            return access(this, function(e) {
                return e === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9)
                        this.textContent = e
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? jQuery.filter(e, this): this, i = 0;
            for (; (n = r[i]) != null; i++)
                !t && n.nodeType === 1 && jQuery.cleanData(getAll(n)), n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++)
                e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = e == null?!1 : e, t = t == null ? e : t, this.map(function() {
                return jQuery.clone(this, e, t)
            })
        },
        html: function(e) {
            return access(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && t.nodeType === 1)
                    return t.innerHTML;
                if (typeof e == "string"&&!rnoInnerhtml.test(e)&&!wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            t = this[n] || {}, t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, jQuery.cleanData(getAll(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = concat.apply([], e);
            var n, r, i, s, o, u, a = 0, f = this.length, l = this, c = f - 1, h = e[0], p = jQuery.isFunction(h);
            if (p || f > 1 && typeof h == "string"&&!support.checkClone && rchecked.test(h))
                return this.each(function(n) {
                    var r = l.eq(n);
                    p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
                });
            if (f) {
                n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, n.childNodes.length === 1 && (n = r);
                if (r) {
                    i = jQuery.map(getAll(n, "script"), disableScript), s = i.length;
                    for (; a < f; a++)
                        o = n, a !== c && (o = jQuery.clone(o, !0, !0), s && jQuery.merge(i, getAll(o, "script"))), t.call(this[a], o, a);
                    if (s) {
                        u = i[i.length - 1].ownerDocument, jQuery.map(i, restoreScript);
                        for (a = 0; a < s; a++)
                            o = i[a], rscriptType.test(o.type || "")&&!data_priv.access(o, "globalEval") && jQuery.contains(u, o) && (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")))
                        }
                }
            }
            return this
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        jQuery.fn[e] = function(e) {
            var n, r = [], i = jQuery(e), s = i.length - 1, o = 0;
            for (; o <= s; o++)
                n = o === s ? this : this.clone(!0), jQuery(i[o])[t](n), push.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var iframe, elemdisplay = {}, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"), getStyles = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    (function() {
        function s() {
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i.innerHTML = "", n.appendChild(r);
            var s = window.getComputedStyle(i, null);
            e = s.top !== "1%", t = s.width === "4px", n.removeChild(r)
        }
        var e, t, n = document.documentElement, r = document.createElement("div"), i = document.createElement("div");
        if (!i.style)
            return;
        i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = i.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(i), window.getComputedStyle && jQuery.extend(support, {
            pixelPosition: function() {
                return s(), e
            },
            boxSizingReliable: function() {
                return t == null && s(), t
            },
            reliableMarginRight: function() {
                var e, t = i.appendChild(document.createElement("div"));
                return t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", n.appendChild(r), e=!parseFloat(window.getComputedStyle(t, null).marginRight), n.removeChild(r), e
            }
        })
    })(), jQuery.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t)
            o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t)
            e.style[s] = o[s];
        return i
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 ||!e.style)
                return;
            var i, s, o, u = jQuery.camelCase(t), a = e.style;
            t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
            if (n === undefined)
                return o && "get"in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n, s === "string" && (i = rrelNum.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)), s = "number");
            if (n == null || n !== n)
                return;
            s === "number"&&!jQuery.cssNumber[u] && (n += "px"), !support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o ||!("set"in o) || (n = o.set(e, n, r)) !== undefined)
                a[t] = n
        },
        css: function(e, t, n, r) {
            var i, s, o, u = jQuery.camelCase(t);
            return t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u], o && "get"in o && (i = o.get(e, !0, n)), i === undefined && (i = curCSS(e, t, r)), i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]), n === "" || n ? (s = parseFloat(i), n===!0 || jQuery.isNumeric(s) ? s || 0 : i) : i
        }
    }), jQuery.each(["height", "width"], function(e, t) {
        jQuery.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return rdisplayswap.test(jQuery.css(e, "display")) && e.offsetWidth === 0 ? jQuery.swap(e, cssShow, function() {
                        return getWidthOrHeight(e, t, r)
                    }) : getWidthOrHeight(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && getStyles(e);
                return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(e, t) {
        if (t)
            return jQuery.swap(e, {
                display: "inline-block"
            }, curCSS, [e, "marginRight"])
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        jQuery.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" "): [n];
                for (; r < 4; r++)
                    i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
    }), jQuery.fn.extend({
        css: function(e, t) {
            return access(this, function(e, t, n) {
                var r, i, s = {}, o = 0;
                if (jQuery.isArray(t)) {
                    r = getStyles(e), i = t.length;
                    for (; o < i; o++)
                        s[t[o]] = jQuery.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null||!!e.elem.style && e.elem.style[e.prop] != null ? (t = jQuery.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, jQuery.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
        "*": [function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = rfxnum.exec(t), s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"), o = (jQuery.cssNumber[e] || s !== "px"&&+r) && rfxnum.exec(jQuery.css(n.elem, e)), u = 1, a = 20;
            if (o && o[3] !== s) {
                s = s || o[3], i = i || [], o =+ r || 1;
                do 
                    u = u || ".5", o/=u, jQuery.style(n.elem, e, o + s);
                while (u !== (u = n.cur() / r) && u !== 1&&--a)
                }
            return i && (o = n.start =+ o||+r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : + i[2]), n
        }
        ]
    };
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(e, t) {
            jQuery.isFunction(e) ? (t = e, e = ["*"]): e = e.split(" ");
            var n,
            r = 0,
            i = e.length;
            for (;
            r < i;
            r++)n = e[r],
            tweeners[n] = tweeners[n] || [],
            tweeners[n].unshift(t)
        }, prefilter : function(e, t) {
            t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
        }
    }), jQuery.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? jQuery.extend({}, e): {
            complete: n ||!n && t || jQuery.isFunction(e) && e,
            duration: e,
            easing: n && t || t&&!jQuery.isFunction(t) && t
        };
        r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
        if (r.queue == null || r.queue===!0)
            r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            jQuery.isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
        }, r
    }, jQuery.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = jQuery.isEmptyObject(e), s = jQuery.speed(t, n, r), o = function() {
                var t = Animation(this, jQuery.extend({}, e), s);
                (i || data_priv.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue===!1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return typeof e != "string" && (n = t, t = e, e = undefined), t && e!==!1 && this.queue(e || "fx", []), this.each(function() {
                var t=!0, i = e != null && e + "queueHooks", s = jQuery.timers, o = data_priv.get(this);
                if (i)
                    o[i] && o[i].stop && r(o[i]);
                else 
                    for (i in o)
                        o[i] && o[i].stop && rrun.test(i) && r(o[i]);
                for (i = s.length; i--;)
                    s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t=!1, s.splice(i, 1));
                (t ||!n) && jQuery.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e!==!1 && (e = e || "fx"), this.each(function() {
                var t, n = data_priv.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = jQuery.timers, o = r ? r.length: 0;
                n.finish=!0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;)
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), jQuery.each(["toggle", "show", "hide"], function(e, t) {
        var n = jQuery.fn[t];
        jQuery.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
        }
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        jQuery.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), jQuery.timers = [], jQuery.fx.tick = function() {
        var e, t = 0, n = jQuery.timers;
        fxNow = jQuery.now();
        for (; t < n.length; t++)
            e = n[t], !e() && n[t] === e && n.splice(t--, 1);
        n.length || jQuery.fx.stop(), fxNow = undefined
    }, jQuery.fx.timer = function(e) {
        jQuery.timers.push(e), e() ? jQuery.fx.start() : jQuery.timers.pop()
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fn.delay = function(e, t) {
        return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var e = document.createElement("input"), t = document.createElement("select"), n = t.appendChild(document.createElement("option"));
        e.type = "checkbox", support.checkOn = e.value !== "", support.optSelected = n.selected, t.disabled=!0, support.optDisabled=!n.disabled, e = document.createElement("input"), e.value = "t", e.type = "radio", support.radioValue = e.value === "t"
    }();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(e, t) {
            return access(this, jQuery.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                jQuery.removeAttr(this, e)
            })
        }
    }), jQuery.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2)
                return;
            if (typeof e.getAttribute === strundefined)
                return jQuery.prop(e, t, n);
            if (s !== 1 ||!jQuery.isXMLDoc(e))
                t = t.toLowerCase(), r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook);
            if (n === undefined)
                return r && "get"in r && (i = r.get(e, t)) !== null ? i : (i = jQuery.find.attr(e, t), i == null ? undefined : i);
            if (n !== null)
                return r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
            jQuery.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(rnotwhite);
            if (s && e.nodeType === 1)
                while (n = s[i++])
                    r = jQuery.propFix[n] || n, jQuery.expr.match.bool.test(n) && (e[r]=!1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), boolHook = {
        set: function(e, t, n) {
            return t===!1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = attrHandle[t] || jQuery.find.attr;
        attrHandle[t] = function(e, t, r) {
            var i, s;
            return r || (s = attrHandle[t], attrHandle[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, attrHandle[t] = s), i
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(e, t) {
            return access(this, jQuery.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[jQuery.propFix[e] || e]
            })
        }
    }), jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2)
                return;
            return s = o !== 1 ||!jQuery.isXMLDoc(e), s && (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : - 1
                }
            }
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))
                return this.each(function(t) {
                    jQuery(this).addClass(e.call(this, t, this.className))
                });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = jQuery.trim(r), n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = arguments.length === 0 || typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))
                return this.each(function(t) {
                    jQuery(this).removeClass(e.call(this, t, this.className))
                });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        o = e ? jQuery.trim(r) : "", n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function(n) {
                jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0, i = jQuery(this), s = e.match(rnotwhite) || [];
                    while (t = s[r++])
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === strundefined || n === "boolean")
                    this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || e===!1 ? "" : data_priv.get(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i)
                    return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()], t && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n);
                return 
            }
            return r = jQuery.isFunction(e), this.each(function(n) {
                var i;
                if (this.nodeType !== 1)
                    return;
                r ? i = e.call(this, n, jQuery(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function(e) {
                    return e == null ? "" : e + ""
                })), t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!t ||!("set"in t) || t.set(this, i, "value") === undefined)
                    this.value = i
            })
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = jQuery.find.attr(e, "value");
                    return t != null ? t : jQuery.trim(jQuery.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null: [], u = s ? i + 1: r.length, a = i < 0 ? u: s ? i: 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (support.optDisabled?!n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled ||!jQuery.nodeName(n.parentNode, "optgroup"))
                            ) {
                            t = jQuery(n).val();
                            if (s)
                                return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options, s = jQuery.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = jQuery.inArray(r.value, s) >= 0)
                            n=!0
                    }
                    return n || (e.selectedIndex =- 1), s
                }
            }
        }
    }), jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(e, t) {
                if (jQuery.isArray(t))
                    return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        jQuery.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), jQuery.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nonce = jQuery.now(), rquery = /\?/;
    jQuery.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, jQuery.parseXML = function(e) {
        var t, n;
        if (!e || typeof e != "string")
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = undefined
        }
        return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e), t
    };
    var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(e, t) {
            function S(e, t, s, u) {
                var f, m, g, b, E, S = t;
                if (y === 2)
                    return;
                y = 2, o && clearTimeout(o), n = undefined, i = u || "", w.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, s && (b = ajaxHandleResponses(l, w, s)), b = ajaxConvert(l, b, w, f);
                if (f)
                    l.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (jQuery.lastModified[r] = E), E = w.getResponseHeader("etag"), E && (jQuery.etag[r] = E)), e === 204 || l.type === "HEAD" ? S = "nocontent" : e === 304 ? S = "notmodified" : (S = b.state, m = b.data, g = b.error, f=!g);
                else {
                    g = S;
                    if (e ||!S)
                        S = "error", e < 0 && (e = 0)
                }
                w.status = e, w.statusText = (t || S) + "", f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]), w.statusCode(v), v = undefined, a && h.trigger
                (f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m: g]), d.fireWith(c, [w, S]), a && (h.trigger("ajaxComplete", [w, l]), --jQuery.active || jQuery.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (t = e, e = undefined), t = t || {};
            var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({}, t), c = l.context || l, h = l.context && (c.nodeType || c.jquery) ? jQuery(c): jQuery.event, p = jQuery.Deferred(), d = jQuery.Callbacks("once memory"), v = l.statusCode || {}, m = {}, g = {}, y = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (y === 2) {
                        if (!s) {
                            s = {};
                            while (t = rheaders.exec(i))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() {
                    return y === 2 ? i : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return y || (e = g[n] = g[n] || e, m[e] = t), this
                },
                overrideMimeType: function(e) {
                    return y || (l.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (y < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else 
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t), S(0, t), this
                }
            };
            p.promise(w).complete = d.add, w.success = w.done, w.error = w.fail, l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""], l.crossDomain == null && (u = rurl.exec(l.url.toLowerCase()), l.crossDomain=!(!u || u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)), inspectPrefiltersOrTransports(prefilters, l, t, w);
            if (y === 2)
                return w;
            a = l.global, a && jQuery.active++===0 && jQuery.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent=!rnoContent.test(l.type), r = l.url, l.hasContent || (l.data && (r = l.url += (rquery.test(r) ? "&" : "?") + l.data, delete l.data), l.cache===!1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++)), l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])), (l.data && l.hasContent && l.contentType!==!1 || t.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
            for (f in l.headers)
                w.setRequestHeader(f, l.headers[f]);
            if (!l.beforeSend || l.beforeSend.call(c, w, l)!==!1 && y !== 2) {
                b = "abort";
                for (f in{
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[f](l[f]);
                n = inspectPrefiltersOrTransports(transports, l, t, w);
                if (!n)
                    S( - 1, "No Transport");
                else {
                    w.readyState = 1, a && h.trigger("ajaxSend", [w, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        y = 1, n.send(m, S)
                    } catch (E) {
                        if (!(y < 2))
                            throw E;
                        S( - 1, E)
                    }
                }
                return w
            }
            return w.abort()
        },
        getJSON: function(e, t, n) {
            return jQuery.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return jQuery.get(e, undefined, t, "script")
        }
    }), jQuery.each(["get", "post"], function(e, t) {
        jQuery[t] = function(e, n, r, i) {
            return jQuery.isFunction(n) && (i = i || r, r = n, n = undefined), jQuery.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        jQuery.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), jQuery._evalUrl = function(e) {
        return jQuery.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, jQuery.fn.extend({
        wrapAll: function(e) {
            var t;
            return jQuery.isFunction(e) ? this.each(function(t) {
                jQuery(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return jQuery.isFunction(e) ? this.each(function(t) {
                jQuery(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = jQuery(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = jQuery.isFunction(e);
            return this.each(function(n) {
                jQuery(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }
    }), jQuery.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, jQuery.expr.filters.visible = function(e) {
        return !jQuery.expr.filters.hidden(e)
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = jQuery.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(e) || e.jquery&&!jQuery.isPlainObject(e))
            jQuery.each(e, function() {
                i(this.name, this.value)
            });
        else 
            for (n in e)
                buildParams(n, e[n], t, i);
        return r.join("&").replace(r20, "+")
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = jQuery.prop(this, "elements");
                return e ? jQuery.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name&&!jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(e) && (this.checked ||!rcheckableType.test(e))
            }).map(function(e, t) {
                var n = jQuery(this).val();
                return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    }), jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    window.ActiveXObject && jQuery(window).on("unload", function() {
        for (var e in xhrCallbacks)
            xhrCallbacks[e]()
    }), support.cors=!!xhrSupported && "withCredentials"in xhrSupported, support.ajax = xhrSupported=!!xhrSupported, jQuery.ajaxTransport(function(e) {
        var t;
        if (support.cors || xhrSupported&&!e.crossDomain)
            return {
                send: function(n, r) {
                    var i, s = e.xhr(), o=++xhrId;
                    s.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (i in e.xhrFields)
                            s[i] = e.xhrFields[i];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain&&!n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n)
                                s.setRequestHeader(i, n[i]);
                                t = function(e) {
                                    return function() {
                                        t && (delete xhrCallbacks[o], t = s.onload = s.onerror = null, e === "abort" ? s.abort() : e === "error" ? r(s.status, s.statusText) : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? {
                                            text: s.responseText
                                        } : undefined, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = t(), s.onerror = t("error"), t = xhrCallbacks[o] = t("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (u) {
                                    if (t)
                                        throw u
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return jQuery.globalEval(e), e
            }
        }
    }), jQuery.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache=!1), e.crossDomain && (e.type = "GET")
    }), jQuery.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = jQuery("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i(e.type === "error" ? 404 : 200, e.type)
                    }), document.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[e]=!0, e
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, s, o = e.jsonp!==!1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string"&&!(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
        if (o || e.dataTypes[0] === "jsonp")
            return r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp!==!1 && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || jQuery.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", i = window[r], window[r] = function() {
                s = arguments
            }, n.always(function() {
                window[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, oldCallbacks.push(r)), s && jQuery.isFunction(i) && i(s[0]), s = i = undefined
            }), "script"
    }), jQuery.parseHTML = function(e, t, n) {
        if (!e || typeof e != "string")
            return null;
        typeof t == "boolean" && (n = t, t=!1), t = t || document;
        var r = rsingleTag.exec(e), i=!n && [];
        return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes))
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(e, t, n) {
        if (typeof e != "string" && _load)
            return _load.apply(this, arguments);
        var r, i, s, o = this, u = e.indexOf(" ");
        return u >= 0 && (r = jQuery.trim(e.slice(u)), e = e.slice(0, u)), jQuery.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"), o.length > 0 && jQuery.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, s || [e.responseText, t, e])
        }), this
    }, jQuery.expr.filters.animated = function(e) {
        return jQuery.grep(jQuery.timers, function(t) {
            return e === t.elem
        }).length
    };
    var docElem = window.document.documentElement;
    jQuery.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = jQuery.css(e, "position"), c = jQuery(e), h = {};
            l === "static" && (e.style.position = "relative"), u = c.offset(), s = jQuery.css(e, "top"), a = jQuery.css(e, "left"), f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto")>-1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), jQuery.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using"in t ? t.using.call(e, h) : c.css(h)
        }
    }, jQuery.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === undefined ? this : this.each(function(t) {
                    jQuery.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, s = r && r.ownerDocument;
            if (!s)
                return;
            return t = s.documentElement, jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()), n = getWindow(s), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (!this[0])
                return;
            var e, t, n = this[0], r = {
                top: 0,
                left: 0
            };
            return jQuery.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), jQuery.nodeName(e[0], "html") || (r = e.offset()), r.top += jQuery.css(e[0], "borderTopWidth", !0), r.left += jQuery.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - r.top - jQuery.css(n, "marginTop", !0),
                left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || docElem;
                while (e&&!jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || docElem
            })
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function(r) {
            return access(this, function(e, r, i) {
                var s = getWindow(e);
                if (i === undefined)
                    return s ? s[t] : e[r];
                s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), jQuery.each(["top", "left"], function(e, t) {
        jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function(e, n) {
            if (n)
                return n = curCSS(e, t), rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
        })
    }), jQuery.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        jQuery.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            jQuery.fn[r] = function(r, i) {
                var s = arguments.length && (n || typeof r != "boolean"), o = n || (r===!0 || i===!0 ? "margin" : "border");
                return access(this, function(t, n, r) {
                    var i;
                    return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    }), jQuery.fn.size = function() {
        return this.length
    }, jQuery.fn.andSelf = jQuery.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return jQuery
    });
    var _jQuery = window.jQuery, _$ = window.$;
    return jQuery.noConflict = function(e) {
        return window.$ === jQuery && (window.$ = _$), e && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
    }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
}), function(e, t) {
    typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : e.returnExports = t()
}(this, function() {
    function h() {}
    function J(e) {
        return e =+ e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e!==-1 / 0 && (e = (e > 0||-1) * Math.floor(Math.abs(e))), e
    }
    function K(e) {
        var t = typeof e;
        return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string"
    }
    function Q(e) {
        var t, n, r;
        if (K(e))
            return e;
        n = e.valueOf;
        if (a(n)) {
            t = n.call(e);
            if (K(t))
                return t
        }
        r = e.toString;
        if (a(r)) {
            t = r.call(e);
            if (K(t))
                return t
        }
        throw new TypeError
    }
    var e = Function.prototype.call, t = Array.prototype, n = Object.prototype, r = t.slice, i = Array.prototype.splice, s = Array.prototype.push, o = Array.prototype.unshift, u = n.toString, a = function(e) {
        return n.toString.call(e) === "[object Function]"
    }, f = function(e) {
        return n.toString.call(e) === "[object RegExp]"
    }, l = function(t) {
        return u.call(t) === "[object Array]"
    }, c = function(t) {
        var n = u.call(t), r = n === "[object Arguments]";
        return r || (r=!l(n) && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && a(t.callee)), r
    };
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (!a(n))
            throw new TypeError("Function.prototype.bind called on incompatible " + n);
        var i = r.call(arguments, 1), s = function() {
            if (this instanceof l) {
                var e = n.apply(this, i.concat(r.call(arguments)));
                return Object(e) === e ? e : this
            }
            return n.apply(t, i.concat(r.call(arguments)))
        }, o = Math.max(0, n.length - i.length), u = [];
        for (var f = 0; f < o; f++)
            u.push("$" + f);
        var l = Function("binder", "return function (" + u.join(",") + "){return binder.apply(this,arguments)}")(s);
        return n.prototype && (h.prototype = n.prototype, l.prototype = new h, h.prototype = null), l
    });
    var p = e.bind(n.hasOwnProperty), d, v, m, g, y;
    if (y = p(n, "__defineGetter__"))
        d = e.bind(n.__defineGetter__), v = e.bind(n.__defineSetter__), m = e.bind(n.__lookupGetter__), g = e.bind(n.__lookupSetter__);
    var b = function() {
        var e = {};
        return Array.prototype.splice.call(e, 0, 0, 1), e.length === 1
    }(), w = [1].splice(0).length === 0, E = function() {
        var e = [1, 2], t = e.splice();
        return e.length === 2 && l(t) && t.length === 0
    }();
    E && (Array.prototype.splice = function(t, n) {
        return arguments.length === 0 ? [] : i.apply(this, arguments)
    });
    if (!w ||!b)
        Array.prototype.splice = function(t, n) {
            if (arguments.length === 0)
                return [];
                var s = arguments;
                return this.length = Math.max(J(this.length), 0), arguments.length > 0 && typeof n != "number" && (s = r.call(arguments), s.length < 2 ? s.push(J(n)) : s[1] = J(n)), i.apply(this, s)
            };
    [].unshift(0) !== 1 && (Array.prototype.unshift = function() {
        return o.apply(this, arguments), this.length
    }), Array.isArray || (Array.isArray = l);
    var S = Object("a"), x = S[0] !== "a" ||!(0 in S), T = function(t) {
        var n=!0, r=!0;
        return t && (t.call("foo", function(e, t, r) {
            typeof r != "object" && (n=!1)
        }), t.call([1], function() {
            "use strict";
            r = typeof this == "string"
        }, "x")), !!t && n && r
    };
    if (!Array.prototype.forEach ||!T(Array.prototype.forEach))
        Array.prototype.forEach = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = arguments[1], s =- 1, o = r.length>>>0;
            if (!a(t))
                throw new TypeError;
                while (++s < o)
                    s in r && t.call(i, r[s], s, n)
                };
    if (!Array.prototype.map ||!T(Array.prototype.map))
        Array.prototype.map = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0, s = Array(i), o = arguments[1];
            if (!a(t))
                throw new TypeError(t + " is not a function");
                for (var f = 0; f < i; f++)
                    f in r && (s[f] = t.call(o, r[f], f, n));
                    return s
                };
    if (!Array.prototype.filter ||!T(Array.prototype.filter))
        Array.prototype.filter = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0, s = [], o, f = arguments[1];
            if (!a(t))
                throw new TypeError(t + " is not a function");
                for (var l = 0; l < i; l++)
                    l in r && (o = r[l], t.call(f, o, l, n) && s.push(o));
                    return s
                };
    if (!Array.prototype.every ||!T(Array.prototype.every))
        Array.prototype.every = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0, s = arguments[1];
            if (!a(t))
                throw new TypeError(t + " is not a function");
                for (var o = 0; o < i; o++)
                    if (o in r&&!t.call(s, r[o], o, n))
                        return !1;
                        return !0
                    };
    if (!Array.prototype.some ||!T(Array.prototype.some))
        Array.prototype.some = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0, s = arguments[1];
            if (!a(t))
                throw new TypeError(t + " is not a function");
                for (var o = 0; o < i; o++)
                    if (o in r && t.call(s, r[o], o, n))
                        return !0;
                        return !1
                    };
    var N=!1;
    Array.prototype.reduce && (N = typeof Array.prototype.reduce.call("es5", function(e, t, n, r) {
        return r
    }) == "object");
    if (!Array.prototype.reduce ||!N)
        Array.prototype.reduce = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0;
            if (!a(t))
                throw new TypeError(t + " is not a function");
                if (!i && arguments.length === 1)
                    throw new TypeError("reduce of empty array with no initial value");
                    var s = 0, o;
                    if (arguments.length >= 2)
                        o = arguments[1];
                    else 
                        do {
                            if (s in r) {
                                o = r[s++];
                                break
                            }
                            if (++s >= i)
                                throw new TypeError("reduce of empty array with no initial value")
                        }
                        while (!0);
                        for (; s < i; s++)
                            s in r && (o = t.call(void 0, o, r[s], s, n));
                            return o
                        };
    var C=!1;
    Array.prototype.reduceRight && (C = typeof Array.prototype.reduceRight.call("es5", function(e, t, n, r) {
        return r
    }) == "object");
    if (!Array.prototype.reduceRight ||!C)
        Array.prototype.reduceRight = function(t) {
            var n = G(this), r = x && u.call(this) === "[object String]" ? this.split(""): n, i = r.length>>>0;
            if (!a(t))
                throw new TypeError(t + " is not a function");
                if (!i && arguments.length === 1)
                    throw new TypeError("reduceRight of empty array with no initial value");
                    var s, o = i - 1;
                    if (arguments.length >= 2)
                        s = arguments[1];
                    else 
                        do {
                            if (o in r) {
                                s = r[o--];
                                break
                            }
                            if (--o < 0)
                                throw new TypeError("reduceRight of empty array with no initial value")
                        }
                        while (!0);
                        if (o < 0)
                            return s;
                            do 
                                o in r && (s = t.call(void 0, s, r[o], o, n));
                                while (o--);
                                return s
                            };
    if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2)!==-1)
        Array.prototype.indexOf = function(t) {
            var n = x && u.call(this) === "[object String]" ? this.split(""): G(this), r = n.length>>>0;
            if (!r)
                return - 1;
                var i = 0;
                arguments.length > 1 && (i = J(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);
                for (; i < r; i++)
                    if (i in n && n[i] === t)
                        return i;
                        return - 1
                    };
    if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, - 3)!==-1)
        Array.prototype.lastIndexOf = function(t) {
            var n = x && u.call(this) === "[object String]" ? this.split(""): G(this), r = n.length>>>0;
            if (!r)
                return - 1;
                var i = r - 1;
                arguments.length > 1 && (i = Math.min(i, J(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);
                for (; i >= 0; i--)
                    if (i in n && t === n[i])
                        return i;
                        return - 1
                    };
    var k = Object.keys && function() {
        return Object.keys(arguments).length === 2
    }(1, 2);
    if (!Object.keys) {
        var L=!{
            toString: null
        }.propertyIsEnumerable("toString"), A = function() {}.propertyIsEnumerable("prototype"), O = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], M = O.length;
        Object.keys = function(t) {
            var n = a(t), r = c(t), i = t !== null && typeof t == "object", s = i && u.call(t) === "[object String]";
            if (!i&&!n&&!r)
                throw new TypeError("Object.keys called on a non-object");
            var o = [], f = A && n;
            if (s || r)
                for (var l = 0; l < t.length; ++l)
                    o.push(String(l));
            else 
                for (var h in t)(!f || h !== "prototype") 
                    && p(t, h) && o.push(String(h));
            if (L) {
                var d = t.constructor, v = d && d.prototype === t;
                for (var m = 0; m < M; m++) {
                    var g = O[m];
                    (!v || g !== "constructor") && p(t, g) && o.push(g)
                }
            }
            return o
        }
    } else if (!k) {
        var _ = Object.keys;
        Object.keys = function(t) {
            return c(t) ? _(Array.prototype.slice.call(t)) : _(t)
        }
    }
    var D =- 621987552e5, P = "-000001";
    if (!Date.prototype.toISOString || (new Date(D)).toISOString().indexOf(P)===-1)
        Date.prototype.toISOString = function() {
            var t, n, r, i, s;
            if (!isFinite(this))
                throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                i = this.getUTCFullYear(), s = this.getUTCMonth(), i += Math.floor(s / 12), s = (s%12 + 12)%12, t = [s + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], i = (i < 0 ? "-" : i > 9999 ? "+" : "") + ("00000" + Math.abs(i)).slice(0 <= i && i <= 9999?-4 : - 6), n = t.length;
                while (n--)
                    r = t[n], r < 10 && (t[n] = "0" + r);
                    return i + "-" + t.slice(0, 2).join("-") + "T" + t.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice( - 3) + "Z"
                };
    var H=!1;
    try {
        H = Date.prototype.toJSON && (new Date(NaN)).toJSON() === null && (new Date(D)).toJSON().indexOf(P)!==-1 && Date.prototype.toJSON.call({
            toISOString: function() {
                return !0
            }
        })
    } catch (B) {}
    H || (Date.prototype.toJSON = function(t) {
        var n = Object(this), r = Q(n), i;
        if (typeof r == "number"&&!isFinite(r))
            return null;
        i = n.toISOString;
        if (typeof i != "function")
            throw new TypeError("toISOString property is not callable");
        return i.call(n)
    });
    var j = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15, F=!isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")), I = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (!Date.parse || I || F ||!j)
        Date = function(e) {
            function t(n, r, i, s, o, u, a) {
                var f = arguments.length;
                if (this instanceof e) {
                    var l = f === 1 && String(n) === n ? new e(t.parse(n)): f >= 7 ? new e(n, r, i, s, o, u, a): f >= 6 ? new e(n, r, i, s, o, u): f >= 5 ? new e(n, r, i, s, o): f >= 4 ? new e(n, r, i, s): f >= 3 ? new e(n, r, i): f >= 2 ? new e(n, r): f >= 1 ? new e(n): new e;
                    return l.constructor = t, l
                }
                return e.apply(this, arguments)
            }
            function i(e, t) {
                var n = t > 1 ? 1: 0;
                return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
            }
            function s(t) {
                return Number(new e(1970, 0, 1, 0, 0, 0, t))
            }
            var n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            for (var o in e)
                t[o] = e[o];
                return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(r) {
                    var o = n.exec(r);
                    if (o) {
                        var u = Number(o[1]), a = Number(o[2] || 1) - 1, f = Number(o[3] || 1) - 1, l = Number(o[4] || 0), c = Number(o[5] || 0), h = Number(o[6] || 0), p = Math.floor(Number(o[7] || 0) * 1e3), d = Boolean(o[4]&&!o[8]), v = o[9] === "-" ? 1: - 1, m = Number(o[10] || 0), g = Number(o[11] || 0), y;
                        if (l < (c > 0 || h > 0 || p > 0 ? 24 : 25) && c < 60 && h < 60 && p < 1e3 && a>-1 && a < 12 && m < 24 && g < 60 && f>-1 && f < i(u, a + 1) - i(u, a)) {
                            y = ((i(u, a) + f) * 24 + l + m * v) * 60, y = ((y + c + g * v) * 60 + h) * 1e3 + p, d && (y = s(y));
                            if ( - 864e13 <= y && y <= 864e13)
                                return y
                        }
                        return NaN
                    }
                    return e.parse.apply(this, arguments)
                }, t
            }(Date);
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), (!Number.prototype.toFixed || 8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) === "0" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128") && function() {
        function i(r, i) {
            var s =- 1;
            while (++s < t)
                i += r * n[s], n[s] = i%e, i = Math.floor(i / e)
        }
        function s(r) {
            var i = t, s = 0;
            while (--i >= 0)
                s += n[i], n[i] = Math.floor(s / r), s = s%r * e
        }
        function o() {
            var e = t, r = "";
            while (--e >= 0)
                if (r !== "" || e === 0 || n[e] !== 0) {
                    var i = String(n[e]);
                    r === "" ? r = i : r += "0000000".slice(0, 7 - i.length) + i
                }
            return r
        }
        function u(e, t, n) {
            return t === 0 ? n : t%2 === 1 ? u(e, t - 1, n * e) : u(e * e, t / 2, n)
        }
        function a(e) {
            var t = 0;
            while (e >= 4096)
                t += 12, e/=4096;
            while (e >= 2)
                t += 1, e/=2;
            return t
        }
        var e, t, n, r;
        e = 1e7, t = 6, n = [0, 0, 0, 0, 0, 0], Number.prototype.toFixed = function(t) {
            var n, r, f, l, c, h, p, d;
            n = Number(t), n = n !== n ? 0 : Math.floor(n);
            if (n < 0 || n > 20)
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            r = Number(this);
            if (r !== r)
                return "NaN";
            if (r<=-1e21 || r >= 1e21)
                return String(r);
            f = "", r < 0 && (f = "-", r =- r), l = "0";
            if (r > 1e-21) {
                c = a(r * u(2, 69, 1)) - 69, h = c < 0 ? r * u(2, - c, 1) : r / u(2, c, 1), h*=4503599627370496, c = 52 - c;
                if (c > 0) {
                    i(0, h), p = n;
                    while (p >= 7)
                        i(1e7, 0), p -= 7;
                    i(u(10, p, 1), 0), p = c - 1;
                    while (p >= 23)
                        s(1<<23), p -= 23;
                    s(1<<p), i(1, 1), s(2), l = o()
                } else 
                    i(0, h), i(1<<-c, 0), l = o() + "0.00000000000000000000".slice(2, 2 + n)
            }
            return n > 0 ? (d = l.length, d <= n ? l = f + "0.0000000000000000000".slice(0, n - d + 2) + l : l = f + l.slice(0, d - n) + "." + l.slice(d - n)) : l = f + l, l
        }
    }();
    var q = String.prototype.split;
    "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, - 1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
        var e = /()??/.exec("")[1] === void 0;
        String.prototype.split = function(t, n) {
            var r = this;
            if (t === void 0 && n === 0)
                return [];
            if (u.call(t) !== "[object RegExp]")
                return q.call(this, t, n);
            var i = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""), o = 0, a, f, l, c;
            t = new RegExp(t.source, s + "g"), r += "", e || (a = new RegExp("^" + t.source + "$(?!\\s)", s)), n = n === void 0?-1>>>0 : Y(n);
            while (f = t.exec(r)) {
                l = f.index + f[0].length;
                if (l > o) {
                    i.push(r.slice(o, f.index)), !e && f.length > 1 && f[0].replace(a, function() {
                        for (var e = 1; e < arguments.length - 2; e++)
                            arguments[e] === void 0 && (f[e] = void 0)
                    }), f.length > 1 && f.index < r.length && Array.prototype.push.apply(i, f.slice(1)), c = f[0].length, o = l;
                    if (i.length >= n)
                        break
                }
                t.lastIndex === f.index && t.lastIndex++
            }
            return o === r.length ? (c ||!t.test("")) && i.push("") : i.push(r.slice(o)), i.length > n ? i.slice(0, n) : i
        }
    }() : "0".split(void 0, 0).length && (String.prototype.split = function(t, n) {
        return t === void 0 && n === 0 ? [] : q.call(this, t, n)
    });
    var R = String.prototype.replace, U = function() {
        var e = [];
        return "x".replace(/x(.)?/g, function(t, n) {
            e.push(n)
        }), e.length === 1 && typeof e[0] == "undefined"
    }();
    U || (String.prototype.replace = function(t, n) {
        var r = a(n), i = f(t) && /\)[*?]/.test(t.source);
        if (!r ||!i)
            return R.call(this, t, n);
        var s = function(e) {
            var r = arguments.length, i = t.lastIndex;
            t.lastIndex = 0;
            var s = t.exec(e);
            return t.lastIndex = i, s.push(arguments[r - 2], arguments[r - 1]), n.apply(this, s)
        };
        return R.call(this, t, s)
    });
    if ("".substr && "0b".substr( - 1) !== "b") {
        var z = String.prototype.substr;
        String.prototype.substr = function(t, n) {
            return z.call(this, t < 0 ? (t = this.length + t) < 0 ? 0 : t : t, n)
        }
    }
    var W = "	\n\f\r   ᠎             　\u2028\u2029﻿", X = "​";
    if (!String.prototype.trim || W.trim() ||!X.trim()) {
        W = "[" + W + "]";
        var V = new RegExp("^" + W + W + "*"), $ = new RegExp(W + W + "*$");
        String.prototype.trim = function() {
            if (this === void 0 || this === null)
                throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(V, "").replace($, "")
        }
    }
    if (parseInt(W + "08") !== 8 || parseInt(W + "0x16") !== 22)
        parseInt = function(e) {
            var t = /^0[xX]/;
            return function(r, i) {
                return r = String(r).trim(), Number(i) || (i = t.test(r) ? 16 : 10), e(r, i)
            }
        }(parseInt);
    var G = function(e) {
        if (e == null)
            throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }, Y = function(t) {
        return t>>>0
    }
}), window.Modernizr = function(e, t, n) {
    function x(e) {
        f.cssText = e
    }
    function T(e, t) {
        return x(prefixes.join(e + ";") + (t || ""))
    }
    function N(e, t) {
        return typeof e === t
    }
    function C(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function k(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!C(i, "-") && f[i] !== n)
                return t == "pfx" ? i : !0
        }
        return !1
    }
    function L(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== n)
                return r===!1 ? e[i] : N(s, "function") ? s.bind(r || t) : s
        }
        return !1
    }
    function A(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + p.join(r + " ") + r).split(" ");
        return N(t, "string") || N(t, "undefined") ? k(i, t) : (i = (e + " " + d.join(r + " ") + r).split(" "), L(i, t, n))
    }
    var r = "2.8.3", i = {}, s=!0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l, c = {}.toString, h = "Webkit Moz O ms", p = h.split(" "), d = h.toLowerCase().split(" "), v = {}, m = {}, g = {}, y = [], b = y.slice, w, E = {}.hasOwnProperty, S;
    !N(E, "undefined")&&!N(E.call, "undefined") ? S = function(e, t) {
        return E.call(e, t)
    } : S = function(e, t) {
        return t in e && N(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (typeof n != "function")
            throw new TypeError;
        var r = b.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var e = function() {};
                e.prototype = n.prototype;
                var s = new e, o = n.apply(s, r.concat(b.call(arguments)));
                return Object(o) === o ? o : s
            }
            return n.apply(t, r.concat(b.call(arguments)))
        };
        return i
    }), v.cssanimations = function() {
        return A("animationName")
    }, v.csstransforms = function() {
        return !!A("transform")
    };
    for (var O in v)
        S(v, O) && (w = O.toLowerCase(), i[w] = v[O](), y.push((i[w] ? "" : "no-") + w));
    return i.addTest = function(e, t) {
        if (typeof e == "object")
            for (var r in e)
                S(e, r) && i.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (i[e] !== n)
                return i;
            t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
        }
        return i
    }, x(""), a = l = null, i._version = r, i._domPrefixes = d, i._cssomPrefixes = p, i.testProp = function(e) {
        return k([e])
    }, i.testAllProps = A, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + y.join(" ") : ""), i
}(this, this.document);
var JSON;
JSON || (JSON = {}), function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, r, i, s, o = gap, u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case"string":
            return quote(a);
        case"number":
            return isFinite(a) ? String(a) : "null";
        case"boolean":
        case"null":
            return String(a);
        case"object":
            if (!a)
                return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1)
                    u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1)
                    typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else 
                    for (r in a)
                        Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1)
                indent += " ";
        else 
            typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")
            return str("", {
                "": e
            });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
        if (e instanceof x)
            return e;
        if (!(this instanceof x))
            return new x(e);
        this._wrapped = e
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null)
            return;
        if (c && e.forEach === c)
            e.forEach(t, r);
        else if (e.length ===+ e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n)
                    return 
        } else 
            for (var o in e)
                if (x.has(e, o) && t.call(r, e[o], o, e) === n)
                    return 
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p)
            return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i=!0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d)
            return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s!==+s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i=!0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s))
                return r = e, !0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    },
    x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i=!0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o)))
                return n
        }), !!i)
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i=!1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o)))
                return n
        }), !!i)
    };
    x.contains = x.include = function(e, t) {
        return e == null?!1 : y && e.indexOf === y ? e.indexOf(t)!=-1 : C(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2), r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.where = function(e, t, n) {
        return x.isEmpty(t) ? n ? null : [] : x[n ? "find": "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n])
                    return !1;
            return !0
        })
    }, x.findWhere = function(e, t) {
        return x.where(e, t, !0)
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
            return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e))
            return - Infinity;
        var r = {
            computed: - Infinity,
            value: - Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s): e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
            return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e))
            return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s): e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0)
                    return 1;
                if (n < r || r === void 0)
                    return - 1
            }
            return e.index < t.index?-1 : 1
        }), "value")
    };
    var L = function(e, t, n, r) {
        var i = {}, s = k(t || x.identity);
        return T(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function(e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t), s = 0, o = e.length;
        while (s < o) {
            var u = s + o>>>1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length ===+ e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return e == null ? 0 : e.length ===+ e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return e == null ? void 0 : t != null&&!n ? u.call(e, 0, t) : e[0]
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return e == null ? void 0 : t != null&&!n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var A = function(e, t, n) {
        return T(e, function(e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function(e, t) {
        return A(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t=!1);
        var i = n ? x.map(e, n, r): e, s = [], o = [];
        return T(i, function(n, r) {
            if (t?!r || o[o.length - 1] !== n : !x.contains(o, n)
                )o.push(n), s.push(e[r])
        }), s
    }, x.union = function() {
        return x.uniq(a.apply(r, arguments))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }, x.zip = function() {
        var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = new Array(t);
        for (var r = 0; r < t; r++)
            n[r] = x.pluck(e, "" + r);
        return n
    }, x.object = function(e, t) {
        if (e == null)
            return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (e == null)
            return - 1;
        var r = 0, i = e.length;
        if (n) {
            if (typeof n != "number")
                return r = x.sortedIndex(e, t), e[r] === t ? r : - 1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y)
            return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t)
                return r;
        return - 1
    }, x.lastIndexOf = function(e, t, n) {
        if (e == null)
            return - 1;
        var r = n != null;
        if (b && e.lastIndexOf === b)
            return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n: e.length;
        while (i--)
            if (e[i] === t)
                return i;
        return - 1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r)
            s[i++] = e, e += n;
        return s
    }, x.bind = function(e, t) {
        if (e.bind === S && S)
            return S.apply(e, u.call(arguments, 1));
        var n = u.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return t.length === 0 && (t = x.functions(e)), T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity), function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t) {
        var n, r, i, s, o = 0, u = function() {
            o = new Date, i = null, s = e.apply(n, r)
        };
        return function() {
            var a = new Date, f = t - (a - o);
            return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
        }
    }, x.debounce = function(e, t, n) {
        var r, i;
        return function() {
            var s = this, o = arguments, u = function() {
                r = null, n || (i = e.apply(s, o))
            }, a = n&&!r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, x.once = function(e) {
        var t=!1, n;
        return function() {
            return t ? n : (t=!0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--)
                t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return e <= 0 ? t() : function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }, x.keys = E || function(e) {
        if (e !== Object(e))
            throw new TypeError("Invalid object");
        var t = [];
        for (var n in e)
            x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function(e) {
        var t = [];
        for (var n in e)
            x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function(e) {
        var t = [];
        for (var n in e)
            x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function(e) {
        var t = {};
        for (var n in e)
            x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e)
            x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e)
            x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] == null && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var O = function(e, t, n, r) {
        if (e === t)
            return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null)
            return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t))
            return !1;
        switch (i) {
        case"[object String]":
            return e == String(t);
        case"[object Number]":
            return e!=+e ? t!=+t : e == 0 ? 1 / e == 1 / t : e ==+ t;
        case"[object Date]":
        case"[object Boolean]":
            return + e ==+ t;
        case"[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object")
            return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e)
                return r[s] == t;
        n.push(e), r.push(t);
        var o = 0, u=!0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u)
                while (o--)
                    if (!(u = O(e[o], t[o], n, r)))
                        break
        } else {
            var a = e.constructor, l = t.constructor;
            if (a !== l&&!(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l))
                return !1;
            for (var c in e)
                if (x.has(e, c)) {
                    o++;
                    if (!(u = x.has(t, c) && O(e[c], t[c], n, r)))
                        break
                }
            if (u) {
                for (c in t)
                    if (x.has(t, c)&&!(o--))
                        break;
                u=!o
            }
        }
        return n.pop(), r.pop(), u
    };
    x.isEqual = function(e, t) {
        return O(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (e == null)
            return !0;
        if (x.isArray(e) || x.isString(e))
            return e.length === 0;
        for (var t in e)
            if (x.has(e, t))
                return !1;
        return !0
    }, x.isElement = function(e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function(e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e&&!!x.has(e, "callee")
    }), typeof /./ != "function" && (x.isFunction = function(e) {
        return typeof e == "function"
    }), x.isFinite = function(e) {
        return isFinite(e)&&!isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e!=+e
    }, x.isBoolean = function(e) {
        return e===!0 || e===!1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function(e) {
        return e === null
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        var r = Array(e);
        for (var i = 0; i < e; i++)
            r[i] = t.call(n, i);
        return r
    }, x.random = function(e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = x.invert(M.escape);
    var _ = {
        escape: new RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return t == null ? "" : ("" + t).replace(_[e], function(t) {
                return M[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (e == null)
            return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), j.call(this, n.apply(x, e))
            }
        })
    };
    var D = 0;
    x.uniqueId = function(e) {
        var t=++D + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/, H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"), s = 0, o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(B, function(e) {
                return "\\" + H[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t)
            return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var j = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], j.call(this, n)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return j.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain=!0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), function() {
    function u() {
        try {
            return r in t && t[r]
        } catch (e) {
            return !1
        }
    }
    function a() {
        try {
            return i in t && t[i] && t[i][t.location.hostname]
        } catch (e) {
            return !1
        }
    }
    var e = {}, t = window, n = t.document, r = "localStorage", i = "globalStorage", s = "__storejs__", o;
    e.disabled=!1, e.set = function(e, t) {}, e.get = function(e) {}, e.remove = function(e) {}, e.clear = function() {}, e.transact = function(t, n, r) {
        var i = e.get(t);
        r == null && (r = n, n = null), typeof i == "undefined" && (i = n || {}), r(i), e.set(t, i)
    }, e.getAll = function() {}, e.serialize = function(e) {
        return JSON.stringify(e)
    }, e.deserialize = function(e) {
        return typeof e != "string" ? undefined : JSON.parse(e)
    };
    if (u())
        o = t[r], e.set = function(t, n) {
            if (n === undefined)
                return e.remove(t);
                o.setItem(t, e.serialize(n))
            }, e.get = function(t) {
                return e.deserialize(o.getItem(t))
            }, e.remove = function(e) {
                o.removeItem(e)
            }, e.clear = function() {
                o.clear()
            }, e.getAll = function() {
                var t = {};
                for (var n = 0; n < o.length; ++n) {
                    var r = o.key(n);
                    t[r] = e.get(r)
                }
                return t
            };
        else if (a())
        o = t[i][t.location.hostname], e.set = function(t, n) {
            if (n === undefined)
                return e.remove(t);
                o[t] = e.serialize(n)
            }, e.get = function(t) {
                return e.deserialize(o[t] && o[t].value)
            }, e.remove = function(e) {
                delete o[e]
            }, e.clear = function() {
                for (var e in o)
                    delete o[e]
                }, e.getAll = function() {
                    var t = {};
                    for (var n = 0; n < o.length; ++n) {
                        var r = o.key(n);
                        t[r] = e.get(r)
                    }
                    return t
                };
        else if (n.documentElement.addBehavior) {
        var f, l;
        try {
            l = new ActiveXObject("htmlfile"), l.open(), l.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'), l.close(), f = l.w.frames[0].document, o = f.createElement("div")
        } catch (c) {
            o = n.createElement("div"), f = n.body
        }
        function h(t) {
            return function() {
                var n = Array.prototype.slice.call(arguments, 0);
                n.unshift(o), f.appendChild(o), o.addBehavior("#default#userData"), o.load(r);
                var i = t.apply(e, n);
                return f.removeChild(o), i
            }
        }
        function p(e) {
            return "_" + e
        }
        e.set = h(function(t, n, i) {
            n = p(n);
            if (i === undefined)
                return e.remove(n);
            t.setAttribute(n, e.serialize(i)), t.save(r)
        }), e.get = h(function(t, n) {
            return n = p(n), e.deserialize(t.getAttribute(n))
        }), e.remove = h(function(e, t) {
            t = p(t), e.removeAttribute(t), e.save(r)
        }), e.clear = h(function(e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(r);
            for (var n = 0, i; i = t[n]; n++)
                e.removeAttribute(i.name);
            e.save(r)
        }), e.getAll = h(function(t) {
            var n = t.XMLDocument.documentElement.attributes;
            t.load(r);
            var i = {};
            for (var s = 0, o; o = n[s]; ++s)
                i[o] = e.get(o);
            return i
        })
    }
    try {
        e.set(s, s), e.get(s) != s && (e.disabled=!0), e.remove(s)
    } catch (c) {
        e.disabled=!0
    }
    typeof module != "undefined" && typeof module != "function" ? module.exports = e : typeof define == "function" && define.amd ? define(e) : this.store = e
}(), function(e, t) {
    var n = function(e) {
        this.defaults = {
            locale_data: {
                messages: {
                    "": {
                        domain: "messages",
                        lang: "en",
                        plural_forms: "(n != 1);"
                    }
                }
            },
            domain: "messages"
        }, this.options = _.extend({}, this.defaults, e), this.textdomain(this.options.domain);
        if (e.domain&&!this.options.locale_data[this.options.domain])
            throw new Error("Text domain set to non-existent domain: `" + e.domain + "`")
    };
    n.context_delimiter = String.fromCharCode(4);
    var r = _.memoize(function(e) {
        function t(e, t) {
            var n = e(t);
            return n===!0 ? 1 : n ? n : 0
        }
        var e = e || "(n != 1)";
        return _.partial(t, new Function("n", "return " + e))
    });
    _.extend(n.prototype, {
        textdomain: function(e) {
            if (!e)
                return this._textdomain;
            this._textdomain = e
        },
        gettext: function(e) {
            return this.dcnpgettext.call(this, t, t, e)
        },
        dgettext: function(e, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        dcgettext: function(e, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        ngettext: function(e, n, r) {
            return this.dcnpgettext.call(this, t, t, e, n, r)
        },
        dngettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        dcngettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        pgettext: function(e, n) {
            return this.dcnpgettext.call(this, t, e, n)
        },
        dpgettext: function(e, t, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        dcpgettext: function(e, t, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        npgettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, t, e, n, r, i)
        },
        dnpgettext: function(e, t, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        dcnpgettext: function(e, t, i, s, o) {
            s = s || i, e = e || this._textdomain, o = typeof o == "undefined" ? 1 : o;
            var u;
            if (!this.options)
                return u = new n, u.dcnpgettext.call(u, undefined, undefined, i, s, o);
            if (!this.options.locale_data)
                throw new Error("No locale data provided.");
            if (!this.options.locale_data[e])
                throw new Error("Domain `" + e + "` was not found.");
            if (!this.options.locale_data[e][""])
                throw new Error("No locale meta information provided.");
            if (!i)
                throw new Error("No translation key found.");
            if (typeof o != "number") {
                o = parseInt(o, 10);
                if (isNaN(o))
                    throw new Error("The number that was passed in is not a number.")
            }
            var a = t ? t + n.context_delimiter + i: i, f = this.options.locale_data, l = f[e], c = l[""].plural_forms, h = r(c)(o) + 1, p, d;
            if (!l)
                throw new Error("No domain named `" + e + "` could be found.");
            return p = l[a], !p || h >= p.length ? (this.options.missing_key_callback && this.options.missing_key_callback(a), d = [null, i, s], d[r()(o) + 1]) : (d = p[h], d ? d : (d = [null, i, s], d[r()(o) + 1]))
        }
    }), e.Jed = n
}(this), + function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (e.style[n] !== undefined)
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n=!1, r = this;
        e(this).one("bsTransitionEnd", function() {
            n=!0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t();
        if (!e.support.transition)
            return;
        e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        }
    })
}(jQuery), + function(e) {
    "use strict";
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.tooltip"), s = typeof n == "object" && n;
            if (!i && n == "destroy")
                return;
            i || r.data("bs.tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.VERSION = "3.2.0", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, t.prototype.init = function(t, n, r) {
        this.enabled=!0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        var i = this.options.trigger.split(" ");
        for (var s = i.length; s--;) {
            var o = i[s];
            if (o == "click")
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if (o != "manual") {
                var u = o == "hover" ? "mouseenter": "focusin", a = o == "hover" ? "mouseleave": "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
        if (n && n.$tip && n.$tip.is(":visible")) {
            n.hoverState = "in";
            return 
        }
        n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in";
        if (!n.options.delay ||!n.options.delay.show)
            return n.show();
        n.timeout = setTimeout(function() {
            n.hoverState == "in" && n.show()
        }, n.options.delay.show)
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
        n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out";
        if (!n.options.delay ||!n.options.delay.hide)
            return n.hide();
        n.timeout = setTimeout(function() {
            n.hoverState == "out" && n.hide()
        }, n.options.delay.hide)
    }, t.prototype.show = function() {
        var n = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() ||!r)
                return;
            var i = this, s = this.tip(), o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var u = typeof this.options.placement == "function" ? this.options.placement.call(this, s[0], this.$element[0]): this.options.placement, a = /\s?auto?\s?/i, f = a.test(u);
            f && (u = u.replace(a, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(u).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var l = this.getPosition(), c = s[0].offsetWidth, h = s[0].offsetHeight;
            if (f) {
                var p = u, d = this.options.container ? e(this.options.container): this.$element.parent(), v = this.getPosition(d);
                u = u == "bottom" && l.top + l.height + h - v.scroll > v.height ? "top" : u == "top" && l.top - v.scroll - h < v.top ? "bottom" : u == "right" && l.right + c > v.width ? "left" : u == "left" && l.left - c < v.left ? "right" : u, s.removeClass(p).addClass(u)
            }
            var m = this.getCalculatedOffset(u, l, c, h);
            this.applyPlacement(m, u);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var r = this.tip(), i = r[0].offsetWidth, s = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top = t.top + o, t.left = t.left + u, e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), r.addClass("in");
        var a = r[0].offsetWidth, f = r[0].offsetHeight;
        n == "top" && f != s && (t.top = t.top + s - f);
        var l = this.getViewportAdjustedDelta(n, t, a, f);
        l.left ? t.left += l.left : t.top += l.top;
        var c = /top|bottom/.test(n), h = c ? l.left * 2 - i + a: l.top * 2 - s + f, p = c ? "offsetWidth": "offsetHeight";
        r.offset(t), this.replaceArrow(h, r[0][p], c)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, t.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html": "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function(n) {
        function o() {
            r.hoverState != "in" && i.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n()
        }
        var r = this, i = this.tip(), s = e.Event("hide.bs." + this.type);
        this.$element.trigger(s);
        if (s.isDefaultPrevented())
            return;
        return i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0], r = n.tagName == "BODY", i = n.getBoundingClientRect();
        i.width == null && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var s = r ? {
            top: 0,
            left: 0
        }
        : t.offset(), o = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
        }, u = r ? {
            width: e(window).width(),
            height: e(window).height()
        }
        : null;
        return e.extend({}, i, o, u, s)
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return e == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : e == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : e == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var s = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll, a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s, l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.width && (i.left = o.left + o.width - l)
        }
        return i
    }, t.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
    }, t.prototype.getUID = function(e) {
        do 
            e+=~~(Math.random() * 1e6);
        while (document.getElementById(e));
        return e
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.enable = function() {
        this.enabled=!0
    }, t.prototype.disable = function() {
        this.enabled=!1
    }, t.prototype.toggleEnabled = function() {
        this.enabled=!this.enabled
    }, t.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = n, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r, this
    }
}(jQuery), function(e) {
    var t = e.fn.tooltip.Constructor.prototype, n = t.getCalculatedOffset;
    t.getCalculatedOffset = function(e, t, r, i) {
        var s;
        return e !== "top-right" ? n.apply(this, arguments) : (s = {
            top: t.top - i - 10,
            left: t.left + t.width - r
        }, this.$element.outerWidth() <= 18 && (s.left += 4), s)
    }, t.replaceArrow = function(e, t, n) {
        var r = 1 - e / t;
        r !== 1 && this.arrow().css(n ? "left" : "top", 50 * r + "%"), this.arrow().css(n ? "top" : "left", "")
    }
}(window.jQuery), r = window.r || {}, r.setup = function(e) {
    r.config = e, reddit = e, r.logging.init(), r.config.currentOrigin = location.protocol + "//" + location.host, r.analytics.breadcrumbs.init()
}, r.ajax = function(e) {
    var t = e.url;
    if (e.type == "GET" && _.isEmpty(e.data)) {
        var n = r.preload.read(t);
        if (n != null) {
            e.dataFilter && (n = e.dataFilter(n, "json")), e.success(n);
            var i = new jQuery.Deferred;
            return i.resolve(n), i
        }
    }
    var s = t && (t[0] == "/" || t.lastIndexOf(r.config.currentOrigin, 0) == 0);
    return s && (e.headers || (e.headers = {}), e.headers["X-Modhash"] = r.config.modhash), $.ajax(e)
}, r.sync = function(e, t, n) {
    var i = n.dataFilter;
    return n.dataFilter = function(e, t) {
        var n;
        return t === "json" ? n = r.utils.unescapeJson(e) : n = e, i ? i(n) : n
    }, r.backboneSync.call(Backbone, e, t, n)
}, store.safeGet = function(e, t) {
    if (store.disabled)
        return t;
    try {
        return store.get(e)
    } catch (n) {
        return r.sendError('Unable to read storage key "%(key)s" (%(err)s)'.format({
            key: e,
            err: n
        })), t
    }
}, store.safeSet = function(e, t) {
    if (store.disabled)
        return !1;
    try {
        return store.set(e, t), !0
    } catch (n) {
        return r.warn('Unable to set storage key "%(key)s" (%(err)s)'.format({
            key: e,
            err: n
        })), !1
    }
}, r.setupBackbone = function() {
    Backbone.emulateJSON=!0, Backbone.ajax = r.ajax, r.backboneSync || (r.backboneSync = Backbone.sync, Backbone.sync = r.sync)
}, $(function() {
    try {
        r.setupBackbone(), r.login.ui.init(), r.analytics.init(), r.ui.init(), r.interestbar.init(), r.visited.init(), r.apps.init(), r.wiki.init(), r.gold.init(), r.multi.init(), r.recommend.init(), r.saved.init(), r.messages.init(), r.resAdvisory.init(), r.filter.init()
    } catch (e) {
        r.sendError("Error during base.js init", e)
    }
}), r.preload = {
    timestamp: new Date,
    maxAge: 3e5,
    data: {},
    isExpired: function() {
        return new Date - this.timestamp > this.maxAge
    },
    set: function(e) {
        _.extend(this.data, e)
    },
    read: function(e) {
        var t = this.data[e];
        if (e[0] == "#")
            return t;
        if (this.isExpired())
            return;
        return t
    }
}, r.logging = {}, r.logging.pageAgeLimit = 300, r.logging.sendThrottle = 8, r.logging.exceptionMessageTemplate = _.template('Client Error: "<%= errorType %>" thrown at L<%= line %>:<%= character %> in <%= file %> Message: "<%= message %>"'), r.logging.defaultExceptionValues = {
    message: "UNKNOWN MESSAGE",
    file: "UNKNOWN FILE",
    line: "?",
    character: "?",
    errorType: "UNKNOWN ERROR TYPE"
}, r.logging.sendException = function(e) {
    if (!e)
        throw "No exception object was passed in.";
    _.defaults(e, r.logging.defaultExceptionValues);
    var t = r.logging.exceptionMessageTemplate(e);
    r.logging.sendError(t, {
        tag: "unknown"
    })
}, r.logging.init = function() {
    _.each(["debug", "log", "warn", "error"], function(e) {
        r[e] = (e != "debug" || r.config.debug) && window.console && console[e] ? _.bind(console[e], console) : function() {}
    }), r.sendError = r.logging.sendError
}, r.logging.serverLogger = {
    logCount: 0,
    _queuedLogs: [],
    queueLog: function(e) {
        if (!r.config)
            return;
        r.warn || (r.warn = function() {});
        if (this.logCount >= 3) {
            r.warn("Not sending debug log; already sent", this.logCount);
            return 
        }
        var t = new Date / 1e3 - r.config.server_time;
        if (Math.abs(t) > r.logging.pageAgeLimit) {
            r.warn("Not sending debug log; page too old:", t);
            return 
        }
        if (!r.config.send_logs) {
            r.warn("Server-side debug logging disabled");
            return 
        }
        e.url = window.location.toString(), this._queuedLogs.push(e), this.logCount++, _.defer(_.bind(function() {
            this._sendLogs()
        }, this))
    },
    _sendLogs: _.throttle(function() {
        var e = this._queuedLogs.length;
        r.ajax({
            type: "POST",
            url: "/web/log/error.json",
            data: {
                logs: JSON.stringify(this._queuedLogs)
            },
            headers: {
                "X-Loggit": !0
            },
            success: function() {
                r.log("Sent", e, "debug logs to server")
            },
            error: function(e, t, n) {
                r.warn("Error sending debug logs to server:", t, ";", n)
            }
        }), this._queuedLogs = []
    }, r.logging.sendThrottle * 1e3)
}, r.logging.sendError = function() {
    var e = _.toArray(arguments), t = _.last(e), n = {};
    _.isObject(t) && (n = t, e.pop());
    var i = _.defaults({
        msg: e.join(" ")
    }, n);
    r.error && r.error.apply(r, arguments), r.logging.serverLogger.queueLog(i)
}, !function(e, t, n, r) {
    "use strict";
    var i = e.onerror;
    e.onerror = function(t, r, s, o, u) {
        var a = /^(chrome:\/\/|file:\/\/)/i, f = /((^Script error\.$)|(atomicFindClose))/i;
        if (a.test(r) || f.test(t))
            return;
        var l = {
            message: t,
            file: r,
            line: s,
            character: o,
            errorType: u
        };
        n.logging.sendException(l), i && i.apply(e, arguments)
    }
}(this, jQuery, r, _), !function(e, t) {
    function n(e) {
        t.sendError(e, {
            tag: "jquery-migrate-bad-html"
        })
    }
    var r = e.fn.init, i = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, s, o) {
        var u;
        if (t && typeof t == "string"&&!e.isPlainObject(s) && (u = i.exec(e.trim(t))) && u[0]) {
            t.charAt(0) !== "<" && n('$(html) HTML strings must start with "<" character'), u[3] && n("$(html) HTML text after last tag is ignored"), u[0].charAt(0) === "#" && n('HTML string cannot start with a "#" character'), s && s.context && (s = s.context);
            if (e.parseHTML)
                return r.call(this, e.parseHTML(t, s, !0), s, o)
        }
        return r.apply(this, arguments)
    }, e.fn.init.prototype = e.fn
}(jQuery, r), r.ui = {}, r.ui.Base = function(e) {
    this.$el = $(e)
}, r.ui.collapsibleSideBox = function(e) {
    var t = $("#" + e);
    return new r.ui.Collapse(t.find(".title"), t.find(".content"), e)
}, r.ui.Collapse = function(e, t, n) {
    r.ui.Base.call(this, e), this.target = t, this.key = "ui.collapse." + n, this.isCollapsed = store.safeGet(this.key) == 1, this.$el.click($.proxy(this, "toggle", null, !1)), this.toggle(this.isCollapsed, !0)
}, r.ui.Collapse.prototype = {
    animDuration: 200,
    toggle: function(e, t) {
        e == null && (e=!this.isCollapsed);
        var n = t ? 0: this.animDuration;
        e ? $(this.target).slideUp(n) : $(this.target).slideDown(n), this.isCollapsed = e, store.safeSet(this.key, e), this.update()
    },
    update: function() {
        this.$el.find(".collapse-button").text(this.isCollapsed ? "+" : "-")
    }
}, r.ui.Summarize = function(e, t) {
    r.ui.Base.call(this, e), this.maxCount = t, this._updateItems(), this.$hiddenItems.length > 0 && (this.$toggleButton = $('<button class="expand-summary">').click($.proxy(this, "_toggle")), this.$el.after(this.$toggleButton), this._summarize())
}, r.ui.Summarize.prototype = {
    _updateItems: function() {
        var e = this.$el.children(".important"), t = this.$el.children(":not(.important)"), n = this.maxCount ? Math.max(0, this.maxCount - e.length): 0, r = t.slice(0, n - 1);
        this.$summaryItems = e.add(r), this.$hiddenItems = t.slice(n)
    },
    _summarize: function() {
        this.$el.addClass("summarized"), this.$hiddenItems.hide(), this.$toggleButton.html(r._("&hellip; and %(count)s more &rArr;").format({
            count: this.$hiddenItems.length
        }))
    },
    _expand: function() {
        this.$el.removeClass("summarized"), this.$hiddenItems.show(), this.$toggleButton.html(r._("&lArr; less"))
    },
    _toggle: function(e) {
        this.$el.hasClass("summarized") ? this._expand() : this._summarize(), e.preventDefault()
    }
}, r.ui.setSavedFullname = function(e) {
    var t = $(".id-" + e).find(".save-button a").first();
    t.text(r._("unsave")), t.thing().addClass("saved")
}, r.i18n = {
    jed: new Jed({
        locale_data: {
            messages: {
                "": {
                    domain: "messages",
                    lang: "en"
                }
            }
        }
    }),
    setPluralForms: function(e) {
        this.jed.options.locale_data.messages[""].plural_forms = e
    },
    addMessages: function(e) {
        _.extend(this.jed.options.locale_data.messages, e)
    }
}, r._ = _.bind(r.i18n.jed.gettext, r.i18n.jed), r.P_ = _.bind(r.i18n.jed.ngettext, r.i18n.jed), r.N_ = _.identity, r.NP_ = function(e, t) {
    return [e, t]
}, r.utils = {
    clamp: function(e, t, n) {
        return Math.max(t, Math.min(n, e))
    },
    staticURL: function(e) {
        return r.config.static_root + "/" + e
    },
    s3HTTPS: function(e) {
        return location.protocol == "https:" ? e.replace("http://", "https://s3.amazonaws.com/") : e
    },
    joinURLs: function() {
        return _.map(arguments, function(e, t) {
            return t > 0 && e && e[0] != "/" && (e = "/" + e), e
        }).join("")
    },
    tup: function(e) {
        return _.isArray(e) || (e = [
        e]), e
    },
    structuredMap: function(e, t) {
        if (_.isArray(e))
            return _.map(e, function(e) {
                return r.utils.structuredMap(e, t)
            });
        if (_.isObject(e)) {
            var n = {};
            return _.each(e, function(e, i) {
                n[t(i, "key")] = r.utils.structuredMap(e, t)
            }), n
        }
        return t(e, "value")
    },
    unescapeJson: function(e) {
        return r.utils.structuredMap(e, function(e) {
            return _.isString(e) ? _.unescape(e) : e
        })
    },
    querySelectorFromEl: function(e, t) {
        return $(e).parents().addBack().filter(t || "*").map(function(e, t) {
            var n = [], r = $(t), i = r.data("fullname"), s = r.attr("id"), o = r.attr("class");
            return n.push(t.nodeName.toLowerCase()), i ? n.push('[data-fullname="' + i + '"]') : s ? n.push("#" + s) : o && n.push("." + _.compact(o.split(/\s+/)).join(".")), n.join("")
        }).toArray().join(" ")
    },
    serializeForm: function(e) {
        var t = {};
        return $.each(e.serializeArray(), function(e, n) {
            t[n.name] = n.value
        }), t
    },
    _pyStrFormatRe: /%\((\w+)\)s/g,
    pyStrFormat: function(e, t) {
        return e.replace(this._pyStrFormatRe, function(e, n) {
            if (n in t)
                return t[n];
            throw "missing format parameter"
        })
    },
    _mdLinkRe: /\[(.*?)\]\((.*?)\)/g,
    formatMarkdownLinks: function(e) {
        return _.escape(e).replace(this._mdLinkRe, function(e, t, n) {
            return '<a href="' + n + '">' + t + "</a>"
        })
    },
    prettyNumber: function(e) {
        var t = parseInt(e);
        return t ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e
    },
    LRUCache: function(e) {
        var t = e > 0 ? e: 16, n = [], r = {}, i = function(e) {
            s(e), n.push(e), n.length > t && delete r[n.shift()]
        }, s = function(e) {
            var t = _.indexOf(n, e);
            t >= 0 && n.splice(t, 1)
        };
        this.remove = function(e) {
            s(e), delete r[e]
        }, this.set = function(e, t) {
            _.isUndefined(t) ? this.remove(e) : (r[e] = t, i(e))
        }, this.get = function(e) {
            var t = r[e];
            return _.isUndefined(t) || i(e), t
        }, this.ajax = function(e, t) {
            var n = this.get(e);
            return _.isUndefined(n) ? $.ajax(t).done(_.bind(this.set, this, e)) : (new $.Deferred).resolve(n)
        }
    },
    parseError: function(e) {
        var t = e[0], n = e[1], r = e[2];
        return {
            name: t,
            message: n,
            field: r
        }
    }
}, String.prototype.format = function(e) {
    return r.utils.pyStrFormat(this, e)
}, r.analytics = {
    init: function() {
        $(document).delegate(".organic-listing .promotedlink.promoted", "onshow", _.bind(function(e) {
            this.fireTrackingPixel(e.target)
        }, this)), $(".promotedlink.promoted:visible").trigger("onshow"), $("form.gold-checkout").one("submit", this.fireGoldCheckout)
    },
    fireGAEvent: function(e, t, n, r, i) {
        n = n || "", r = r || 0, i=!!i, window._gaq && _gaq.push(["_trackEvent", e, t, n, r, i])
    },
    fireTrackingPixel: function(e) {
        var t = $(e), n = $("body").hasClass("comments-page");
        if (t.data("trackerFired") || n)
            return;
        var r = new Image, i = t.data("impPixel");
        i && (r.src = i);
        var s = new Image, o = t.data("adserverImpPixel"), u = t.data("adserverClickUrl");
        o && (s.src = o), t.data("trackerFired", !0)
    },
    fireUITrackingPixel: function(e, t, n) {
        var i = new Image;
        i.src = r.config.uitracker_url + "?" + $.param(_.extend({
            act: e,
            sr: t,
            r: Math.round(Math.random() * 2147483647)
        }, r.analytics.breadcrumbs.toParams(), n))
    },
    fireGoldCheckout: function(e) {
        var t = $(this), n = t.data("vendor");
        t.parent().addClass("working");
        if (!window._gaq)
            return;
        _gaq.push(["_trackPageview", "/gold/external/" + n]), _gaq.push(function() {
            setTimeout(function() {
                t.submit()
            }, 500)
        }), _gat && _gat._getTracker && e.preventDefault()
    }
}, r.analytics.breadcrumbs = {
    selector: ".thing, .side, .sr-list, .srdrop, .tagline, .md, .organic-listing, .gadget, .sr-interest-bar, .trending-subreddits, a, button, input",
    maxLength: 3,
    sendLength: 2,
    init: function() {
        this.hasSessionStorage = this._checkSessionStorage(), this.data = this._load();
        var e = this.data[0] && this.data[0]["url"] == window.location;
        e || this._storeBreadcrumb(), $(document).delegate("a, button", "click", $.proxy(function(e) {
            this.storeLastClick($(e.target))
        }, this))
    },
    _checkSessionStorage: function() {
        try {
            return sessionStorage.setItem("__test__", "test"), sessionStorage.removeItem("__test__"), !0
        } catch (e) {
            return !1
        }
    },
    _load: function() {
        if (!this.hasSessionStorage)
            return [{
                stored: !1
            }
            ];
        var e;
        try {
            e = JSON.parse(sessionStorage.breadcrumbs)
        } catch (t) {
            e = []
        }
        return _.isArray(e) || (e = []), e
    },
    store: function() {
        this.hasSessionStorage && (sessionStorage.breadcrumbs = JSON.stringify(this.data))
    },
    _storeBreadcrumb: function() {
        var e = {
            url: location.toString()
        };
        if ("referrer"in document) {
            var t=!document.referrer.match("^" + r.config.currentOrigin), n = this.data[0] && document.referrer != this.data[0]["url"];
            if (t || n)
                e.ref = document.referrer
        }
        this.data.unshift(e), this.data = this.data.slice(0, this.maxLength), this.store()
    },
    storeLastClick: function(e) {
        try {
            this.data[0].click = r.utils.querySelectorFromEl(e, this.selector), this.store()
        } catch (t) {}
    },
    lastClickFullname: function() {
        var e = _.find(this.data, function(e) {
            return e.click
        });
        if (e) {
            var t = e.click.match(/.*data-fullname="(\w+)"/);
            return t && t[1]
        }
    },
    toParams: function() {
        params = [];
        for (var e = 0; e < this.sendLength; e++)
            _.each(this.data[e], function(t, n) {
                params["c" + e + "_" + n] = t
            });
        return params
    }
}, function(e) {
    function n(e) {
        return t[e]?!1 : (t[e]=!0, !0)
    }
    function r(e) {
        delete t[e]
    }
    function i(t) {
        return function(t) {
            if (t.jquery) {
                var n = {};
                n[0] = jQuery, e.map(t.jquery, function(t) {
                    var r = t[0], i = t[1], s = t[2], o = t[3];
                    if (typeof o == "string")
                        o = e.unsafe(o);
                    else 
                        for (var u = 0; o.length && u < o.length; u++)
                            o[u] = e.unsafe(o[u]);
                    s == "call" ? n[i] = n[r].apply(n[r]._obj, o) : s == "attr" ? (n[i] = n[r][o], n[i] ? n[i]._obj = n[r] : e.debug("unrecognized")) : s == "refresh" ? e.refresh() : e.debug("unrecognized")
                })
            }
        }
    }
    e.log = function(e) {
        window.console ? window.console.debug ? window.console.debug(e) : window.console.log && window.console.log(e) : alert(e)
    }, e.debug = function(t) {
        if (e.with_default(reddit.debug, !1))
            return e.log(t)
    }, e.fn.debug = function() {
        return e.debug(e(this)), e(this)
    }, e.redirect = function(e) {
        window.location = e
    }, e.fn.redirect = function(t) {
        e(this).filter("form").find(".status").show().html("redirecting...");
        var n = e(this).attr("target");
        if (n == "_top") {
            var r = window;
            while (r != r.parent)
                r = r.parent;
            r.location = t
        } else 
            e.redirect(t);
        return e(this)
    }, e.refresh = function() {
        window.location.reload(!0)
    }, e.defined = function(e) {
        return typeof e != "undefined"
    }, e.with_default = function(t, n) {
        return e.defined(t) ? t : n
    }, e.websafe = function(e) {
        return typeof e == "string" && (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/>/g, "&gt;").replace(/</g, "&lt;")), e || ""
    }, e.unsafe = function(e) {
        return typeof e == "string" && (e = e.replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")), e || ""
    }, e.uniq = function(e, t) {
        var n = [], r = {}, i = t ? t: e.length;
        for (var s = 0; s < e.length && n.length < i; s++)
            r[e[s]] || (r[e[s]]=!0, n.push(e[s]));
        return n
    }, function(t, n) {
        e.fn.show = function(n, r) {
            return e(this).trigger("onshow"), t.call(this, n, r)
        }, e.fn.hide = function(t, r) {
            return e(this).trigger("onhide"), n.call(this, t, r)
        }
    }(e.fn.show, e.fn.hide);
    var t = {};
    e.handleResponse = i;
    var s = "/api/";
    e.request = function(t, o, u, a, f, l, c) {
        var h = t, p = u;
        if (rate_limit(t)) {
            c && c("ratelimit");
            return 
        }
        if (window != window.top&&!reddit.external_frame)
            return;
        var d=!e.with_default(a, !1) || n(h);
        o = e.with_default(o, {}), u = e.with_default(u, i(h)), f = e.with_default(f, "json"), typeof u != "function" && (u = i(h));
        var p = function(e) {
            return r(h), u(e)
        };
        errorhandler_in = e.with_default(c, function() {}), c = function(e) {
            return r(h), errorhandler_in(e)
        }, l = e.with_default(l, !1), reddit.post_site && (o.r = reddit.post_site), reddit.logged && (o.uh = reddit.modhash), o.renderstyle = reddit.renderstyle, d && (t = s + t, e.ajax({
            type: l ? "GET": "POST",
            url: t,
            data: o,
            success: p,
            error: c,
            dataType: f
        }))
    };
    var o = "up", u = "upmod", a = "down", f = "downmod";
    rate_limit = function() {
        var e = 333, t = {
            vote: 333,
            comment: 333,
            ignore: 0,
            ban: 0,
            unban: 0,
            assignad: 0
        }, n = {}, r = Date;
        return function(s) {
            var o = new r, u = s in t ? t[s]: e, a = n[s], f = a && o - a < u;
            return n[s] = o, f
        }
    }(), e.fn.vote = function(t, n, r, i) {
        if (reddit.logged && e(this).hasClass("arrow")) {
            var s = e(this).hasClass(o) ? 1: e(this).hasClass(a)?-1 : 0, l = e(this).all_things_by_id(), c = l.children().not(".child").find(".arrow"), h = s == 1 ? o : u, p = s == 1 ? u : o;
            c.filter("." + h).removeClass(h).addClass(p);
            var d = s==-1 ? a: f, v = s==-1 ? f: a;
            c.filter("." + d).removeClass(d).addClass(v);
            if (reddit.logged) {
                l.each(function() {
                    var t = e(this).find(".entry:first, .midcol:first");
                    s > 0 ? t.addClass("likes").removeClass("dislikes unvoted") : s < 0 ? t.addClass("dislikes").removeClass("likes unvoted") : t.addClass("unvoted").removeClass("likes dislikes")
                });
                if (!e.defined(i)) {
                    var m = l.filter(":first").thing_id();
                    t += r ? "" : "-" + m, e.request("vote", {
                        id: m,
                        dir: s,
                        vh: t
                    })
                }
            }
            n && n(l, s)
        }
    }, e.fn.show_unvotable_message = function() {
        e(this).thing().find(".entry:first .unvotable-message").css("display", "inline-block")
    }, e.fn.thing = function() {
        return this.parents(".thing:first")
    }, e.fn.all_things_by_id = function() {
        return this.thing().add(e.things(this.thing_id()))
    }, e.fn.thing_id = function(t) {
        t = e.with_default(t, "thing");
        var n = this.hasClass("thing") ? this: this.thing();
        t != "thing" && (n = n.find("." + t + ":first"));
        if (n.length) {
            var r = e.grep(n.get(0).className.match(/\S+/g), function(e) {
                return e.match(/^id-/)
            });
            return r.length ? r[0].slice(3, r[0].length) : ""
        }
        return ""
    }, e.things = function() {
        var t = e.map(arguments, function(e) {
            return ".thing.id-" + e
        }).join(", ");
        return e(t)
    }, e.fn.same_author = function() {
        var t = e(this).thing_id("author"), n = [];
        return e(".author.id-" + t).each(function() {
            n.push(".thing.id-" + e(this).thing_id())
        }), e(n.join(", "))
    }, e.fn.things = function() {
        var t = e.map(arguments, function(e) {
            return ".thing.id-" + e
        }).join(", ");
        return this.find(t)
    }, e.listing = function(t) {
        t = t || "";
        var n = "siteTable";
        if (t.slice(0, 1) == "#" || t.slice(0, 1) == ".")
            t = t.slice(1, t.length);
        var r = t;
        t.slice(0, n.length) != n ? r = n + (t ? "_" + t : "") : t = t.slice(n.length + 1, t.length);
        var i = e("#" + r).filter(":first");
        return i.length == 0 && (i = e.things(t).find(".child").append(document.createElement("div")).children(":last").addClass("sitetable").attr("id", r)), i
    };
    var l = function() {};
    e.fn.set_thing_init = function(t) {
        l = t, e(this).find(".thing:not(.stub)").each(function() {
            t(this)
        })
    }, e.fn.new_thing_child = function(t, n) {
        var r = this.thing_id(), i = n ? e.listing(r): this.thing().find(".child:first"), s;
        return typeof t == "string" ? s = i.prepend(t).children(":first") : s = t.hide().prependTo(i).show().find('input[name="parent"]').val(r).end(), s.randomize_ids()
    }, e.fn.randomize_ids = function() {
        var t = (Math.random() + "").split(".")[1];
        return e(this).find("*[id]").each(function() {
            e(this).attr("id", e(this).attr("id") + t)
        }).end().find("label").each(function() {
            e(this).attr("for", e(this).attr("for") + t)
        }), e(this)
    }, e.fn.replace_things = function(t, n, r, i) {
        var s = this, o = e.map(t, function(t) {
            var o = t.data, u = e(s).things(o.id);
            i && (u = u.filter(".stub"));
            if (u.length == 0) {
                var a = e.things(o.parent);
                a.length && (u = e("<div></div>"), a.find(".child:first").append(u))
            }
            u.after(e.unsafe(o.content));
            var f = u.next();
            return n && (f.show().children(".midcol, .entry").hide().end().children(".child:first").html(u.children(".child:first").remove().html()).end(), r && (u.hide(), f.children(".midcol, .entry").show()), f.find(".rank:first").html(u.find(".rank:first").html())), r ? (u.hide(), n ? f.children(".midcol, .entry").show() : f.show(), u.remove()) : (f.hide(), u.remove()), l(f), e(document).trigger("new_thing", f), f
        });
        return e(document).trigger("new_things_inserted"), o
    }, e.insert_things = function(t, n) {
        var r = e.map(t, function(t) {
            var r = t.data, i = e.listing(r.parent);
            return n ? i = i.append(e.unsafe(r.content)).children(".thing:last") : i = i.prepend(e.unsafe(r.content)).children(".thing:first"), l(i.hide().show()), e(document).trigger("new_thing", i), i
        });
        return e(document).trigger("new_things_inserted"), r
    }, e.fn.delete_table_row = function(t) {
        var n = this.parents("tr:first").get(0), r = this.parents("table").get(0);
        n ? e(n).fadeOut(function() {
            r.deleteRow(n.rowIndex), t && t()
        }) : t && t()
    }, e.fn.insert_table_rows = function(t, n) {
        var r = this.is("table") ? this.filter("table"): this.parents("table:first");
        return e.map(r.get(), function(r) {
            e.map(t, function(t) {
                var i = n;
                i < 0 && (i = Math.max(r.rows.length + i + 1, 0)), i = Math.min(i, r.rows.length);
                var s = e(r.insertRow(i)), o = e(e.parseHTML(e.unsafe(t)));
                o.hide(), s.replaceWith(o), o.trigger("insert-row"), o.css("display", "table-row"), o.fadeIn()
            })
        }), this
    }, e.fn.captcha = function(e) {
        var t = this.find(".capimage");
        return e && t.attr("src", "/captcha/" + e + ".png").parents("form").find('input[name="iden"]').val(e), t
    }, e.fn.insertAtCursor = function(t) {
        return e(this).filter("textarea").each(function() {
            var n = e(this).get(0), r = n.scrollTop;
            if (document.selection) {
                n.focus();
                var i = document.selection.createRange();
                i.text = t
            } else if (n.selectionStart) {
                var s = n.selectionStart;
                n.value = n.value.substring(0, n.selectionStart) + t + n.value.substring(n.selectionEnd, n.value.length), s += t.length, n.setSelectionRange(s, s)
            } else 
                n.value += t;
            n.scrollHeight && (n.scrollTop = r), e(this).focus()
        }).end()
    }, e.fn.select_line = function(t) {
        return e(this).filter("textarea").each(function() {
            var n = "\n", r = 1, i = 0, s=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
            s && (n = "\r", r = 0, i = 1);
            var o = e(this).val().split(n);
            for (var u = 0; u < t - 1; u++)
                i += o[u].length + r;
            var a = i;
            t <= o.length && (a += o[t - 1].length + r), e(this).focus();
            if (this.createTextRange) {
                var f = this.createTextRange();
                f.move("character", i);
                var l = this.createTextRange();
                l.move("character", a), f.setEndPoint("StartToEnd", l), f.select()
            } else 
                this.selectionStart && this.setSelectionRange(i, a);
            if (this.scrollHeight) {
                var c = this.scrollHeight / o.length;
                this.scrollTop = (t - 2) * c
            }
        })
    }, e.apply_stylesheet = function(t) {
        var n = e("head").children("link[title], style[title]").filter(":first").attr("title") || "preferred stylesheet";
        if (document.styleSheets[0].cssText) {
            var r = document.styleSheets;
            for (var i = 0; i < r.length; i++)
                if (r[i].title == n) {
                    r[i].cssText = t;
                    break
                }
        } else {
            e("head").children('*[title="' + n + '"]').remove(), document.body.offsetHeight;
            var s = e('<style type="text/css" media="screen"></style>').attr("title", n).text(t).appendTo("head")
        }
    }, e.rehighlight_new_comments = function() {
        checked = e(".comment-visits-box input:checked");
        if (checked.length > 0) {
            var t = checked[0].value;
            highlight_new_comments(t)
        }
    };
    var c;
    e.default_cookie_domain = function(e) {
        e && (c = e)
    };
    var h;
    e.default_cookie_security = function(e) {
        h = e
    };
    var p = "_";
    e.cookie_name_prefix = function(e) {
        e && (p = e + "_")
    }, e.cookie_write = function(t) {
        if (t.name) {
            var n = {};
            n.expires = t.expires, n.domain = t.domain || c, n.path = t.path || "/", n.secure = t.secure || h;
            var r = p + t.name, i = t.data;
            i === null || i == "" ? i = null : typeof i != "string" && (i = JSON.stringify(i)), e.cookie(r, i, n)
        }
    }, e.cookie_read = function(t, n) {
        var r = (n || p) + t, i = e.cookie(r);
        try {
            i = JSON.parse(i)
        } catch (s) {}
        return {
            name: t,
            data: i
        }
    }
}(jQuery), function(e) {
    "use strict";
    function f(e) {
        var t = e.offset();
        return e.outerWidth() + (t ? t.left : 0)
    }
    function l() {
        var e = a;
        return arguments.length && (e = _.pick(e, _.toArray(arguments))), _.values(e).concat(u).join(" ")
    }
    function c(e) {
        return !!e.data("bs.tooltip")
    }
    var t = '<div class="c-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', n = "c-form-group", r = "c-form-control", i = "." + r, s = "c-form-control-feedback-error", o = "." + s, u = "c-has-feedback", a = {
        loading: "c-has-throbber",
        success: "c-has-success",
        error: "c-has-error"
    }, h = function(e, t) {
        this.initialize(e, t)
    };
    _.extend(h.prototype, {
        _currentState: null,
        initialize: function(t, r) {
            return this.$el = e(t).closest("." + n), this
        },
        getCurrentState: function() {
            return this._currentState
        },
        set: function(e) {
            return this._currentState !== e && (this.clear(), this._currentState = e, this.$el.addClass(l(e))), e === "error" && this.showError.apply(this, _.toArray(arguments).slice(1)), this
        },
        showError: function(n) {
            var r = this.$el.find(i), s = this.$el.find(o);
            if (n) {
                if (n === s.attr("data-original-title"))
                    return;
                s.attr("title", n);
                if (c(s)) {
                    s.tooltip("fixTitle"), r.is(":focus") && s.tooltip("show");
                    return 
                }
            }
            s.tooltip({
                template: t,
                placement: "right",
                trigger: "manual"
            });
            if (r.is(":focus") || r.parents("form").find('[type="submit"]:focus').length) {
                s.tooltip("show");
                var u = e("body"), a = s.data("bs.tooltip"), l = a.$tip;
                u.length && f(u) < f(l) && (a.options.placement = "top-right", s.tooltip("show"))
            }
            r.on("focus.c.stateify", function() {
                r.parents("form").find(o).not(s).tooltip("hide");
                var e = s.data("bs.tooltip");
                e && e.tip().off("bsTransitionEnd"), s.tooltip("show")
            }).on("blur.c.stateify", function() {
                s.tooltip("hide")
            }), s.on("mouseenter.c.stateify", function() {
                r.is(":focus") || s.tooltip("show")
            }).on("mouseleave.c.stateify", function() {
                r.is(":focus") || s.tooltip("hide")
            })
        },
        clear: function() {
            var e = this.$el.find(o), t = this.$el.find(i);
            return e.tooltip("destroy").removeAttr("data-original-title").off("mouseenter.c.stateify mouseleave.c.stateify"), t.off("focus.c.stateify blur.c.stateify"), this.$el.removeClass(l()), this._currentState = null, this
        }
    }), e.fn.stateify = function(t) {
        var n = _.toArray(arguments).slice(1);
        if (t && /^get/.test(t)) {
            var r = this.data("c.stateify");
            return r && r[t].apply(r, n)
        }
        return this.each(function() {
            var r = e(this), i = r.data("c.stateify"), s = typeof t == "object" && t;
            i || (i = new h(this, s), r.data("c.stateify", i)), typeof t == "string" && i[t].apply(i, n)
        })
    }
}(window.jQuery), function(e) {
    "use strict";
    function n(n) {
        var r = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var i = e(this), s = i.data("c.validator"), o = typeof n == "object" && n;
            s || (s = new t(this, o), i.data("c.validator", s)), typeof n == "string" && s[n].apply(s, r)
        })
    }
    var t = function(e, t) {
        this.initialize(e, t)
    };
    t.DEFAULTS = {
        delay: 600,
        loadingTimeout: 250
    }, _.extend(t.prototype, {
        _loadingTimeout: !1,
        initialize: function(n, r) {
            var i = this.$el = e(n), s = i.data("validate-on") || "keyup change blur";
            return this.options = e.extend({}, t.DEFAULTS, r), i.on(s, _.debounce(e.proxy(this._validate, this), this.options.delay)), i.trigger("initialize.validator"), this
        },
        _validate: function(t) {
            if (t.keyCode === 9 || t.keyCode === 13)
                return;
            if (t.type === "blur" && t.relatedTarget && e(t.relatedTarget).is("[type=submit]"))
                return;
            var n = this, r = this.$el, i = r.data("validate-min"), s = r.val();
            if (t.type === "keyup" && s.length < i) {
                delete this._keyupValue, r.trigger("cleared.validator");
                return 
            }
            if (/change|blur/.test(t.type) && this._keyupValue === s)
                return;
            if (/^\s*$/.test(s)) {
                r.trigger("cleared.validator");
                return 
            }
            var o = r.parents("form"), u = r.data("validate-url"), a = (r.data("validate-with") || "").split(/,s*/), f = {};
            f[r.attr("name")] = s, t.type === "keyup" && (this._keyupValue = s), _.each(a, function(e) {
                f[e] = o.find('[name="' + e + '"]').val()
            }), this._loadingTimeout = setTimeout(function() {
                r.trigger("loading.validator")
            }, this.options.loadingTimeout), this.xhr && this.xhr.readyState !== 4 && this.xhr.abort(), this.xhr = e.ajax({
                type: "POST",
                url: u,
                data: f,
                dataType: "json",
                success: function(e, t, n) {
                    var i = e && e.json;
                    i && i.errors && i.errors.length ? r.trigger("invalid.validator", i) : r.trigger("valid.validator")
                },
                error: function(e) {
                    if (e.status === 0)
                        return;
                    if (e.status === 409) {
                        r.trigger("cleared.validator");
                        return 
                    }
                    r.trigger("valid.validator")
                },
                complete: function() {
                    clearTimeout(n._loadingTimeout), r.trigger("loaded.validator")
                }
            })
        }
    }), e.fn.validator = n, e.fn.validator.Constructor = t
}(window.jQuery);
var toolbar_p = function(e, t) {
    this.toggle_linktitle = function(e) {
        return $(".title, .submit, .url, .linkicon").toggle(), $(e).is(".pushed-button") ? $(e).parents(".middle-side").removeClass("clickable") : ($(e).parents(".middle-side").addClass("clickable"), $(".url").children("form").children("input").focus().select()), this.toggle_pushed(e)
    }, this.toggle_pushed = function(e) {
        return e = $(e), e.is(".pushed-button") ? e.removeClass("pushed-button").addClass("popped-button") : e.removeClass("popped-button").addClass("pushed-button"), !1
    }, this.push_button = function(e) {
        $(e).removeClass("popped-button").addClass("pushed-button")
    }, this.pop_button = function(e) {
        $(e).removeClass("pushed-button").addClass("popped-button")
    }, this.serendipity = function() {
        return this.push_button(".serendipity"), !0
    }, this.show_panel = function() {
        $("body", parent.inner_toolbar.document).addClass("expanded")
    }, this.hide_panel = function() {
        $("body", parent.inner_toolbar.document).removeClass("expanded")
    }, this.resize_toolbar = function() {
        var e = $("body").height();
        parent.document.body.rows = e + "px, 100%"
    }, this.login_msg = function() {
        return $(".toolbar-status-bar").show(), $(".login-arrow").show(), this.resize_toolbar(), !1
    }, this.top_window = function() {
        var e = window;
        while (e != e.parent)
            e = e.parent;
        return e.parent
    };
    var n = null;
    this.panel_loadurl = function(e) {
        try {
            var t = window.parent.inner_toolbar.reddit_panel.location;
            return t == e?!1 : (n != null && (this.pop_button(n), n = null), !0)
        } catch (r) {
            return !0
        }
    };
    var r = 0;
    this.comments_pushed = function(e) {
        r=!r, r ? (this.push_button(e), this.show_panel()) : (this.pop_button(e), this.hide_panel())
    }, this.gourl = function(e, t) {
        var n = $(e).find('input[type="text"]').val(), r = t + escape(n);
        return this.top_window().location.href = r, !1
    }, this.pref_commentspanel_hide = function() {
        $.request("tb_commentspanel_hide")
    }, this.pref_commentspanel_show = function() {
        $.request("tb_commentspanel_show")
    }
};
$(function() {
    function e() {
        return toggle(this)
    }
    $("body").click(close_menus), $("body").set_thing_init(updateEventHandlers), "placeholder"in document.createElement("input") || $("textarea[placeholder], input[placeholder]").addClass("gray").each(function() {
        var e = $(this), t = e.attr("placeholder");
        e.val() == "" && e.val(t)
    }), $("textarea.gray, input.gray").focus(function() {
        $(this).attr("rows", 7).filter(".gray").removeClass("gray").val("")
    }), reddit.logged && $.cookie_name_prefix(reddit.logged), $.default_cookie_domain(reddit.cur_domain.split(":")[0]), $.default_cookie_security(reddit.https_forced), last_click(), $(window).on("pageshow", function() {
        last_click()
    }), $('#search input[name="q"]').focus(function() {
        $("#searchexpando").slideDown()
    }), $("#search_showmore").click(function(e) {
        $("#search_showmore").parent().hide(), $("#moresearchinfo").slideDown(), e.preventDefault()
    }), $("#moresearchinfo").prepend('<a href="#" id="search_hidemore">[-]</a>'), $("#search_hidemore").click(function(e) {
        $("#search_showmore").parent().show(), $("#moresearchinfo").slideUp(), e.preventDefault()
    }), $("#shortlink-text").click(function() {
        $(this).select()
    }), $("body").delegate(".ajax-yn-button", "submit", function() {
        var e = $(this).find('input[name="_op"]').val();
        return post_form(this, e), !1
    }).delegate(".ajax-yn-button .togglebutton", "click", e).delegate(".ajax-yn-button .no", "click", e).delegate(".ajax-yn-button .yes", "click", function() {
        $(this).closest("form").submit()
    })
}), r.spotlight = {}, r.spotlight.init = function() {
    var e = $(".organic-listing");
    if (!e.length)
        return;
    $(".organic-listing .arrow.prev").on("click", $.proxy(this, "prev")), $(".organic-listing .arrow.next").on("click", $.proxy(this, "next"));
    var t, n = r.analytics.breadcrumbs.lastClickFullname(), i = $(n ? ".id-" + n : null);
    i.length && e.has(i).length ? (r.debug("restoring spotlight selection to last click"), t = {
        fullname: n
    }) : t = this.chooseRandom(), this.lineup = _.chain(this.lineup).reject(function(e) {
        return _.isEqual(t, e)
    }).shuffle().unshift(t).value(), this.lineup.pos = 0, r.spotlight._advance(0)
}, r.spotlight.setup = function(e, t, n, r) {
    this.organics = [], this.lineup = [], _.each(e, function(e) {
        this.organics.push(e), this.lineup.push({
            fullname: e
        })
    }, this), t && this.lineup.push(".interestbar"), this.interest_prob = t, this.show_promo = n, this.srnames = r, this.init()
}, r.spotlight.requestPromo = function() {
    return $.ajax({
        type: "POST",
        url: "/api/request_promo",
        timeout: 1e3,
        data: {
            srnames: this.srnames,
            r: r.config.post_site
        }
    }).pipe(function(e) {
        return e ? ($item = $(e), $item.hide().appendTo($(".organic-listing")), $item) : !1
    })
}, r.spotlight.chooseRandom = function() {
    var e = $(".organic-listing");
    if (this.show_promo)
        return this.requestPromo();
    if (Math.random() < this.interest_prob)
        return ".interestbar";
    var t = this.organics[Math.floor(Math.random() * this.organics.length)];
    return {
        fullname: t
    }
}, r.spotlight._materialize = function(e) {
    if (!e || e instanceof $ || e.promise)
        return e;
    var t = $(".organic-listing"), n;
    _.isString(e) ? n = e : e.campaign ? n = '[data-cid="' + e.campaign + '"]' : n = '[data-fullname="' + e.fullname + '"]';
    var i = t.find(n);
    if (i.length)
        return i;
    r.error("unable to locate spotlight item", n, e)
}, r.spotlight._advancePos = function(e) {
    return (this.lineup.pos + e + this.lineup.length)%this.lineup.length
}, r.spotlight._materializePos = function(e) {
    return this.lineup[e] = this._materialize(this.lineup[e])
}, r.spotlight._advance = function(e) {
    var t = $(".organic-listing"), n = t.find(".nextprev"), r = t.find(".thing:visible"), i = this._advancePos(e), s = this._materializePos(i), o = setTimeout(function() {
        n.toggleClass("working", s.state && s.state() == "pending")
    }, 200);
    this.lineup.pos = i;
    var u = $.when(s);
    u.always(_.bind(function(s) {
        clearTimeout(o);
        if (this.lineup.pos != i)
            return;
        if (u.state() == "rejected" ||!s) {
            if (this.lineup.length > 1) {
                this._advance(e || 1);
                return 
            }
            t.hide();
            return 
        }
        n.removeClass("working"), t.removeClass("loading"), t.css("background-color", s.css("background-color")), r.hide(), s.show(), this.help(s), this.lineup.pos != 0 && (this._materializePos(this._advancePos(1)), this._materializePos(this._advancePos( - 1)))
    }, this))
}, r.spotlight.next = $.proxy(r.spotlight, "_advance", 1), r.spotlight.prev = $.proxy(r.spotlight, "_advance", - 1), r.spotlight.help = function(e) {
    var t = $("#spotlight-help");
    if (!t.length)
        return;
    $(function() {
        t.data("HelpBubble").hide(function() {
            t.find(".help-section").hide(), e.hasClass("promoted") ? t.find(".help-promoted").show() : e.hasClass("interestbar") ? t.find(".help-interestbar").show() : t.find(".help-organic").show()
        })
    })
}, r.adzerk = {
    origin: location.protocol == "https:" ? "https://static.adzerk.net": "http://static.adzerk.net",
    createSponsorshipAdFrame: function() {
        var e = $("<iframe>").attr({
            id: "ad_sponsorship",
            src: r.adzerk.origin + "/reddit/ads-load.html?bust2",
            frameBorder: 0,
            scrolling: "no"
        });
        $(".side .sponsorshipbox").empty().append(e)
    }
}, $(window).on("message", function(e) {
    e = e.originalEvent;
    if (e.origin != r.adzerk.origin)
        return;
    msg = e.data.split(":"), msg[0] == "ados.createAdFrame" && r.adzerk.createSponsorshipAdFrame()
});
r.i18n.addMessages({
    "an error occurred (status: %(status)s)": [null, "an error occurred (status: %(status)s)"],
    "please wait a few seconds and try again.": [null, "please wait a few seconds and try again."],
    "deleted": [null, "deleted"]
});
