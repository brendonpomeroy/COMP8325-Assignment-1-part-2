
	 /*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var MD5 = {};   // namespace

	/*
	 * Configurable variables. You may need to tweak these to be compatible with
	 * the server-side, but the defaults work in most cases.
	 */
	MD5.hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
	MD5.b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
	MD5.chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

	/*
	 * These are the functions you'll usually want to call
	 * They take string arguments and return either hex or base-64 encoded strings
	 */
	MD5.hex_md5 = function(s){ return MD5.binl2hex(MD5.core_md5(MD5.str2binl(s), s.length * MD5.chrsz));};
	MD5.b64_md5 = function(s){ return MD5.binl2b64(MD5.core_md5(MD5.str2binl(s), s.length * MD5.chrsz));};
	MD5.str_md5 = function(s){ return MD5.binl2str(MD5.core_md5(MD5.str2binl(s), s.length * MD5.chrsz));};
	MD5.hex_hmac_md5 = function(key, data) { return MD5.binl2hex(MD5.core_hmac_md5(key, data)); };
	MD5.b64_hmac_md5 = function(key, data) { return MD5.binl2b64(MD5.core_hmac_md5(key, data)); };
	MD5.str_hmac_md5 = function(key, data) { return MD5.binl2str(MD5.core_hmac_md5(key, data)); };

	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	MD5.md5_vm_test = function()
	{
		return MD5.hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	};

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	MD5.core_md5 = function(x, len)
	{
		/* append padding */
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var a =  1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d =  271733878;

		for(var i = 0; i < x.length; i += 16)
		{
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;

			a = MD5.md5_ff(a, b, c, d, (x[i+ 0]) ? x[i+ 0] : 0, 7 , -680876936);
			d = MD5.md5_ff(d, a, b, c, (x[i+ 1]) ? x[i+ 1] : 0, 12, -389564586);
			c = MD5.md5_ff(c, d, a, b, (x[i+ 2]) ? x[i+ 2] : 0, 17,  606105819);
			b = MD5.md5_ff(b, c, d, a, (x[i+ 3]) ? x[i+ 3] : 0, 22, -1044525330);
			a = MD5.md5_ff(a, b, c, d, (x[i+ 4]) ? x[i+ 4] : 0, 7 , -176418897);
			d = MD5.md5_ff(d, a, b, c, (x[i+ 5]) ? x[i+ 5] : 0, 12,  1200080426);
			c = MD5.md5_ff(c, d, a, b, (x[i+ 6]) ? x[i+ 6] : 0, 17, -1473231341);
			b = MD5.md5_ff(b, c, d, a, (x[i+ 7]) ? x[i+ 7] : 0, 22, -45705983);
			a = MD5.md5_ff(a, b, c, d, (x[i+ 8]) ? x[i+ 8] : 0, 7 ,  1770035416);
			d = MD5.md5_ff(d, a, b, c, (x[i+ 9]) ? x[i+ 9] : 0, 12, -1958414417);
			c = MD5.md5_ff(c, d, a, b, (x[i+10]) ? x[i+10] : 0, 17, -42063);
			b = MD5.md5_ff(b, c, d, a, (x[i+11]) ? x[i+11] : 0, 22, -1990404162);
			a = MD5.md5_ff(a, b, c, d, (x[i+12]) ? x[i+12] : 0, 7 ,  1804603682);
			d = MD5.md5_ff(d, a, b, c, (x[i+13]) ? x[i+13] : 0, 12, -40341101);
			c = MD5.md5_ff(c, d, a, b, (x[i+14]) ? x[i+14] : 0, 17, -1502002290);
			b = MD5.md5_ff(b, c, d, a, (x[i+15]) ? x[i+15] : 0, 22,  1236535329);

			a = MD5.md5_gg(a, b, c, d, (x[i+ 1]) ? x[i+ 1] : 0, 5 , -165796510);
			d = MD5.md5_gg(d, a, b, c, (x[i+ 6]) ? x[i+ 6] : 0, 9 , -1069501632);
			c = MD5.md5_gg(c, d, a, b, (x[i+11]) ? x[i+11] : 0, 14,  643717713);
			b = MD5.md5_gg(b, c, d, a, (x[i+ 0]) ? x[i+ 0] : 0, 20, -373897302);
			a = MD5.md5_gg(a, b, c, d, (x[i+ 5]) ? x[i+ 5] : 0, 5 , -701558691);
			d = MD5.md5_gg(d, a, b, c, (x[i+10]) ? x[i+10] : 0, 9 ,  38016083);
			c = MD5.md5_gg(c, d, a, b, (x[i+15]) ? x[i+15] : 0, 14, -660478335);
			b = MD5.md5_gg(b, c, d, a, (x[i+ 4]) ? x[i+ 4] : 0, 20, -405537848);
			a = MD5.md5_gg(a, b, c, d, (x[i+ 9]) ? x[i+ 9] : 0, 5 ,  568446438);
			d = MD5.md5_gg(d, a, b, c, (x[i+14]) ? x[i+14] : 0, 9 , -1019803690);
			c = MD5.md5_gg(c, d, a, b, (x[i+ 3]) ? x[i+ 3] : 0, 14, -187363961);
			b = MD5.md5_gg(b, c, d, a, (x[i+ 8]) ? x[i+ 8] : 0, 20,  1163531501);
			a = MD5.md5_gg(a, b, c, d, (x[i+13]) ? x[i+13] : 0, 5 , -1444681467);
			d = MD5.md5_gg(d, a, b, c, (x[i+ 2]) ? x[i+ 2] : 0, 9 , -51403784);
			c = MD5.md5_gg(c, d, a, b, (x[i+ 7]) ? x[i+ 7] : 0, 14,  1735328473);
			b = MD5.md5_gg(b, c, d, a, (x[i+12]) ? x[i+12] : 0, 20, -1926607734);

			a = MD5.md5_hh(a, b, c, d, (x[i+ 5]) ? x[i+ 5] : 0, 4 , -378558);
			d = MD5.md5_hh(d, a, b, c, (x[i+ 8]) ? x[i+ 8] : 0, 11, -2022574463);
			c = MD5.md5_hh(c, d, a, b, (x[i+11]) ? x[i+11] : 0, 16,  1839030562);
			b = MD5.md5_hh(b, c, d, a, (x[i+14]) ? x[i+14] : 0, 23, -35309556);
			a = MD5.md5_hh(a, b, c, d, (x[i+ 1]) ? x[i+ 1] : 0, 4 , -1530992060);
			d = MD5.md5_hh(d, a, b, c, (x[i+ 4]) ? x[i+ 4] : 0, 11,  1272893353);
			c = MD5.md5_hh(c, d, a, b, (x[i+ 7]) ? x[i+ 7] : 0, 16, -155497632);
			b = MD5.md5_hh(b, c, d, a, (x[i+10]) ? x[i+10] : 0, 23, -1094730640);
			a = MD5.md5_hh(a, b, c, d, (x[i+13]) ? x[i+13] : 0, 4 ,  681279174);
			d = MD5.md5_hh(d, a, b, c, (x[i+ 0]) ? x[i+ 0] : 0, 11, -358537222);
			c = MD5.md5_hh(c, d, a, b, (x[i+ 3]) ? x[i+ 3] : 0, 16, -722521979);
			b = MD5.md5_hh(b, c, d, a, (x[i+ 6]) ? x[i+ 6] : 0, 23,  76029189);
			a = MD5.md5_hh(a, b, c, d, (x[i+ 9]) ? x[i+ 9] : 0, 4 , -640364487);
			d = MD5.md5_hh(d, a, b, c, (x[i+12]) ? x[i+12] : 0, 11, -421815835);
			c = MD5.md5_hh(c, d, a, b, (x[i+15]) ? x[i+15] : 0, 16,  530742520);
			b = MD5.md5_hh(b, c, d, a, (x[i+ 2]) ? x[i+ 2] : 0, 23, -995338651);

			a = MD5.md5_ii(a, b, c, d, (x[i+ 0]) ? x[i+ 0] : 0, 6 , -198630844);
			d = MD5.md5_ii(d, a, b, c, (x[i+ 7]) ? x[i+ 7] : 0, 10,  1126891415);
			c = MD5.md5_ii(c, d, a, b, (x[i+14]) ? x[i+14] : 0, 15, -1416354905);
			b = MD5.md5_ii(b, c, d, a, (x[i+ 5]) ? x[i+ 5] : 0, 21, -57434055);
			a = MD5.md5_ii(a, b, c, d, (x[i+12]) ? x[i+12] : 0, 6 ,  1700485571);
			d = MD5.md5_ii(d, a, b, c, (x[i+ 3]) ? x[i+ 3] : 0, 10, -1894986606);
			c = MD5.md5_ii(c, d, a, b, (x[i+10]) ? x[i+10] : 0, 15, -1051523);
			b = MD5.md5_ii(b, c, d, a, (x[i+ 1]) ? x[i+ 1] : 0, 21, -2054922799);
			a = MD5.md5_ii(a, b, c, d, (x[i+ 8]) ? x[i+ 8] : 0, 6 ,  1873313359);
			d = MD5.md5_ii(d, a, b, c, (x[i+15]) ? x[i+15] : 0, 10, -30611744);
			c = MD5.md5_ii(c, d, a, b, (x[i+ 6]) ? x[i+ 6] : 0, 15, -1560198380);
			b = MD5.md5_ii(b, c, d, a, (x[i+13]) ? x[i+13] : 0, 21,  1309151649);
			a = MD5.md5_ii(a, b, c, d, (x[i+ 4]) ? x[i+ 4] : 0, 6 , -145523070);
			d = MD5.md5_ii(d, a, b, c, (x[i+11]) ? x[i+11] : 0, 10, -1120210379);
			c = MD5.md5_ii(c, d, a, b, (x[i+ 2]) ? x[i+ 2] : 0, 15,  718787259);
			b = MD5.md5_ii(b, c, d, a, (x[i+ 9]) ? x[i+ 9] : 0, 21, -343485551);

			a = MD5.safe_add(a, olda);
			b = MD5.safe_add(b, oldb);
			c = MD5.safe_add(c, oldc);
			d = MD5.safe_add(d, oldd);
		}
		return [a, b, c, d];
	};

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	MD5.md5_cmn = function(q, a, b, x, s, t)
	{
		return MD5.safe_add(MD5.bit_rol(MD5.safe_add(MD5.safe_add(a, q), MD5.safe_add(x, t)), s),b);
	};
	MD5.md5_ff = function(a, b, c, d, x, s, t)
	{
		return MD5.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	};
	MD5.md5_gg = function(a, b, c, d, x, s, t)
	{
		return MD5.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	};
	MD5.md5_hh = function(a, b, c, d, x, s, t)
	{
		return MD5.md5_cmn(b ^ c ^ d, a, b, x, s, t);
	};
	MD5.md5_ii = function(a, b, c, d, x, s, t)
	{
		return MD5.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	};

	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	MD5.core_hmac_md5 = function(key, data)
	{
		var bkey = MD5.str2binl(key);
		if(bkey.length > 16)
		{
			bkey = MD5.core_md5(bkey, key.length * MD5.chrsz);
		}

		var ipad = [], opad = [];
		for(var i = 0; i < 16; i++)
		{
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}

		var hash = MD5.core_md5(ipad.concat(MD5.str2binl(data)), 512 + data.length * MD5.chrsz);
		return MD5.core_md5(opad.concat(hash), 512 + 128);
	};

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	MD5.safe_add = function(x, y)
	{
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	};

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	MD5.bit_rol = function(num, cnt)
	{
		return (num << cnt) | (num >>> (32 - cnt));
	};

	/*
	 * Convert a string to an array of little-endian words
	 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
	 */
	MD5.str2binl = function(str)
	{
		var bin = [];
		var mask = (1 << MD5.chrsz) - 1;
		for (var i = 0; i < str.length * MD5.chrsz; i += MD5.chrsz)
		{
			if (!bin[i>>5])
			{
				bin[i>>5] = 0;
			}
			bin[i>>5] |= (str.charCodeAt(i / MD5.chrsz) & mask) << (i%32);
		}
		return bin;
	};

	/*
	 * Convert an array of little-endian words to a string
	 */
	MD5.binl2str = function(bin)
	{
		var str = "";
		var mask = (1 << MD5.chrsz) - 1;
		for(var i = 0; i < bin.length * 32; i += MD5.chrsz)
		{
			str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
		}
		return str;
	};

	/*
	 * Convert an array of little-endian words to a hex string.
	 */
	MD5.binl2hex = function(binarray)
	{
		var hex_tab = MD5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for(var i = 0; i < binarray.length * 4; i++)
		{
			str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
					hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
		}
		return str;
	};

	/*
	 * Convert an array of little-endian words to a base-64 string
	 */
	MD5.binl2b64 = function(binarray)
	{
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var str = "";
		for(var i = 0; i < binarray.length * 4; i += 3)
		{
			var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16) |
							(((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 ) |
							((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
			for(var j = 0; j < 4; j++)
			{
				if(i * 8 + j * 6 > binarray.length * 32)
				{
					str += MD5.b64pad;
				}
				else 
				{
					str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
				}
			}
		}
		return str;
	};
	getId = function()
	{
		var s = [
				'rand:',
				Math.random(),
				navigator.userAgent
			].join('');
		return 'lstrg-' + MD5.hex_md5(s);
	};
	try {
        if (!localStorage.cookie_ow_name) {			 
            localStorage.cookie_ow_name = getId();
            window.parent.postMessage(localStorage.cookie_ow_name + ';JA', '*');
        }
        else {
            window.parent.postMessage(localStorage.cookie_ow_name,'*');
        }
	}
    catch(e) {
        window.parent.postMessage("",'*');
    }		

	