
        function make_cookie(x_cookie) {
            var expire_seconds = 3600 * 24 * 365; // 1 year
            var name = 'yx';
            var value = x_cookie;
            var ex_date = new Date();
            var path = '/';
            // set as false for now until https everywhere
            var is_secure = false;
            // var is_secure = (location.protocol == 'https:') ? true : false;
            var domain = 'www.tumblr.com';
            ex_date.setTime(ex_date.getTime() + (expire_seconds * 1000));
            
            document.cookie = name + "=" + escape(value)
                            + ((expire_seconds == null) ? "" : ";expires=" + ex_date.toGMTString())
                            + ';path=' + path
                            + ((is_secure === false) ? '' : ';secure')
                            + ((domain === '') ? '' : ';domain=' + domain);
        }

        function get_x_cookie() {
            var yahoo_string = location.search;

            // trim off the ? (not really necessary)
            if (yahoo_string && yahoo_string[0] == '?') yahoo_string = yahoo_string.substring(1, yahoo_string.length);

            // ; is the separator as the cookie can contain &s
            // 0 = sig
            // 1 = x-cookie
            yahoo_parts = yahoo_string.split(';');
            if (yahoo_parts.length >= 2) {
                x_cookie = yahoo_parts[1];
                if (x_cookie.indexOf('x-cookie=') === 0) {
                    // x-cookie= is 9 chars
                    x_cookie = x_cookie.substring(9, x_cookie.length);
                    make_cookie(x_cookie);
                }
            }
        }

        get_x_cookie();
    