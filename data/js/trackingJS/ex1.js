(function(w, d) {
    var o = {
        i: "mm_15890324_2192376_9164558",
        callback: "",
        userid: "",
        o: "",
        f: "",
        n: "",
        sd: "toruk.tanx.com"
    }, p = {
        c: 'gbk',
        s: 'http://cdn.tanx.com/t/tanxssp.js'
    };
    if (w.tanxssp_show) {
        w.tanxssp_show(o);
        return;
    }
    w.tanx_ssp_onload = w.tanx_ssp_onload || [];
    tanx_ssp_onload.push(o);
    if (d.getElementById('tanx-a-' + (o.i || ''))) {
        var s = d.createElement("script"), h = d.getElementsByTagName("head")[0];
        s.charset = p.c;
        s.async = true;
        s.src = p.s;
        h.insertBefore(s, h.firstChild);
    } else {
        d.write('<script charset="' + p.c + '" src="' + p.s + '"></script>');
    }
})(window, document)
