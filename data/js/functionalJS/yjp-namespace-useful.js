<!--
  var ver="ga4";
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}}YAHOO.namespace=function(){var a=arguments,b=null,d,e,c;for(d=0;d<a.length;d=d+1){c=(""+a[d]).split(".");b=YAHOO;for(e=(c[0]=="YAHOO")?1:0;e<c.length;e=e+1){b[c[e]]=b[c[e]]||{};b=b[c[e]]}}return b};YAHOO.log=function(b,a,c){var d=YAHOO.widget.Logger;if(d&&d.log){return d.log(b,a,c)}else{return false}};YAHOO.register=function(d,i,a){var e=YAHOO.env.modules,c,f,g,h,b;if(!e[d]){e[d]={versions:[],builds:[]}}c=e[d];f=a.version;g=a.build;h=YAHOO.env.listeners;c.name=d;c.version=f;c.build=g;c.versions.push(f);c.builds.push(g);c.mainClass=i;for(b=0;b<h.length;b=b+1){h[b](c)}if(i){i.VERSION=f;i.BUILD=g}else{YAHOO.log("mainClass is undefined for module "+d,"warn")}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null};YAHOO.env.ua=function(){var e=function(i){var h=0;return parseFloat(i.replace(/\./g,function(){return(h++==1)?"":"."}))},b=navigator,c={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:b.cajaVersion,secure:false,os:null},f=navigator&&navigator.userAgent,d=window&&window.location,g=d&&d.href,a;c.secure=g&&(g.toLowerCase().indexOf("https")===0);if(f){if((/windows|win32/i).test(f)){c.os="windows"}else{if((/macintosh/i).test(f)){c.os="macintosh"}}if((/KHTML/).test(f)){c.webkit=1}a=f.match(/AppleWebKit\/([^\s]*)/);if(a&&a[1]){c.webkit=e(a[1]);if(/ Mobile\//.test(f)){c.mobile="Apple"}else{a=f.match(/NokiaN[^\/]*/);if(a){c.mobile=a[0]}}a=f.match(/AdobeAIR\/([^\s]*)/);if(a){c.air=a[0]}}if(!c.webkit){a=f.match(/Opera[\s\/]([^\s]*)/);if(a&&a[1]){c.opera=e(a[1]);a=f.match(/Opera Mini[^;]*/);if(a){c.mobile=a[0]}}else{a=f.match(/MSIE\s([^;]*)/);if(a&&a[1]){c.ie=e(a[1])}else{a=f.match(/Gecko\/([^\s]*)/);if(a){c.gecko=1;a=f.match(/rv:([^\s\)]*)/);if(a&&a[1]){c.gecko=e(a[1])}}}}}}return c}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var d=YAHOO_config.listener,a=YAHOO.env.listeners,b=true,c;if(d){for(c=0;c<a.length;c++){if(a[c]==d){b=false;break}}if(b){a.push(d)}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var h=YAHOO.lang,a=Object.prototype,b="[object Array]",g="[object Function]",c="[object Object]",e=[],d=["toString","valueOf"],f={isArray:function(i){return a.toString.apply(i)===b},isBoolean:function(i){return typeof i==="boolean"},isFunction:function(i){return(typeof i==="function")||a.toString.apply(i)===g},isNull:function(i){return i===null},isNumber:function(i){return typeof i==="number"&&isFinite(i)},isObject:function(i){return(i&&(typeof i==="object"||h.isFunction(i)))||false},isString:function(i){return typeof i==="string"},isUndefined:function(i){return typeof i==="undefined"},_IEEnumFix:(YAHOO.env.ua.ie)?function(j,k){var l,m,i;for(l=0;l<d.length;l=l+1){m=d[l];i=k[m];if(h.isFunction(i)&&i!=a[m]){j[m]=i}}}:function(){},extend:function(i,m,j){if(!m||!i){throw new Error("extend failed, please check that all dependencies are included.")}var k=function(){},l;k.prototype=m.prototype;i.prototype=new k();i.prototype.constructor=i;i.superclass=m.prototype;if(m.prototype.constructor==a.constructor){m.prototype.constructor=m}if(j){for(l in j){if(h.hasOwnProperty(j,l)){i.prototype[l]=j[l]}}h._IEEnumFix(i.prototype,j)}},augmentObject:function(n,i){if(!i||!n){throw new Error("Absorb failed, verify dependencies.")}var l=arguments,j,m,k=l[2];if(k&&k!==true){for(j=2;j<l.length;j=j+1){n[l[j]]=i[l[j]]}}else{for(m in i){if(k||!(m in n)){n[m]=i[m]}}h._IEEnumFix(n,i)}},augmentProto:function(i,j){if(!j||!i){throw new Error("Augment failed, verify dependencies.")}var l=[i.prototype,j.prototype],k;for(k=2;k<arguments.length;k=k+1){l.push(arguments[k])}h.augmentObject.apply(this,l)},dump:function(q,l){var o,m,j=[],i="{...}",p="f(){...}",k=", ",n=" => ";if(!h.isObject(q)){return q+""}else{if(q instanceof Date||("nodeType" in q&&"tagName" in q)){return q}else{if(h.isFunction(q)){return p}}}l=(h.isNumber(l))?l:3;if(h.isArray(q)){j.push("[");for(o=0,m=q.length;o<m;o=o+1){if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}if(j.length>1){j.pop()}j.push("]")}else{j.push("{");for(o in q){if(h.hasOwnProperty(q,o)){j.push(o+n);if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}}if(j.length>1){j.pop()}j.push("}")}return j.join("")},substitute:function(i,x,p){var t,u,v,m,l,j,n=[],w,s="dump",o=" ",y="{",k="}",q,r;for(;;){t=i.lastIndexOf(y);if(t<0){break}u=i.indexOf(k,t);if(t+1>=u){break}w=i.substring(t+1,u);m=w;j=null;v=m.indexOf(o);if(v>-1){j=m.substring(v+1);m=m.substring(0,v)}l=x[m];if(p){l=p(m,l,j)}if(h.isObject(l)){if(h.isArray(l)){l=h.dump(l,parseInt(j,10))}else{j=j||"";q=j.indexOf(s);if(q>-1){j=j.substring(4)}r=l.toString();if(r===c||q>-1){l=h.dump(l,parseInt(j,10))}else{l=r}}}else{if(!h.isString(l)&&!h.isNumber(l)){l="~-"+n.length+"-~";n[n.length]=w}}i=i.substring(0,t)+l+i.substring(u+1)}for(t=n.length-1;t>=0;t=t-1){i=i.replace(new RegExp("~-"+t+"-~"),"{"+n[t]+"}","g")}return i},trim:function(j){try{return j.replace(/^\s+|\s+$/g,"")}catch(i){return j}},merge:function(){var i={},k=arguments,l=k.length,j;for(j=0;j<l;j=j+1){h.augmentObject(i,k[j],true)}return i},later:function(j,p,i,n,m){j=j||0;p=p||{};var o=i,k=n,l,q;if(h.isString(i)){o=p[i]}if(!o){throw new TypeError("method undefined")}if(k&&!h.isArray(k)){k=[n]}l=function(){o.apply(p,k||e)};q=(m)?setInterval(l,j):setTimeout(l,j);return{interval:m,cancel:function(){if(this.interval){clearInterval(q)}else{clearTimeout(q)}}}},isValue:function(i){return(h.isObject(i)||h.isString(i)||h.isNumber(i)||h.isBoolean(i))}};h.hasOwnProperty=(a.hasOwnProperty)?function(j,i){return j&&j.hasOwnProperty(i)}:function(j,i){return !h.isUndefined(j[i])&&j.constructor.prototype[i]!==j[i]};f.augmentObject(h,f,true);YAHOO.util.Lang=h;h.augment=h.augmentProto;YAHOO.augment=h.augmentProto;YAHOO.extend=h.extend})();YAHOO.register("yahoo",YAHOO,{version:"2.8.2int",build:"5"});if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}}if(typeof YAHOO.JP=="undefined"||!YAHOO.JP){YAHOO.JP={}}YAHOO.JP.pcore={};(function(){YAHOO.JP.pcore.y64=new d;YAHOO.JP.pcore.rdsig=new c;function d(){var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._";function a(e){var j=f.length;var l;var k=0;while(k<=j){if(e==f.charAt(k++)){break}if(k==65){throw"This character is undefined"}}l=k-1;return l}function b(i){var l=[];if(i==null){return l}for(var e=0;e<i.length;e++){var k=i.charCodeAt(e);if(55296<=k&&k<=56319){throw"This character code is not supported"}if(56320<=k&&k<=57343){throw"This character code is not supported"}if(k<=127){l.push(k)}else{if(k<=2047){l.push(((k>>6)&31)|192);l.push((k&63)|128)}else{if(k<=65535){l.push(((k>>12)&15)|224);l.push(((k>>6)&63)|128);l.push((k&63)|128)}else{throw"This character code is not supported"}}}}return l}return{yax_to_y64:function(i){try{var w=b(i)}catch(x){var u=new Error();u.message=x;throw u}var e=w.length;var v="";var q,r,s;var t=0;while(t<e){q=w[t++];if(t==e){v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|0);v+="--";break}r=w[t++];if(t==e){v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|(r>>4));v+=f.charAt(((r<<2)&60)|0);v+="-";break}s=w[t++];v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|(r>>4));v+=f.charAt(((r<<2)&60)|(s>>6));v+=f.charAt(s&63)}return v},yax_from_y64:function(i){i.replace(/./g,"+");i.replace(/_/g,"/");var e=i.length;var w="";var q,r,s,t;var u=0;try{if((e%4)!==0){throw"Illegal string to decode from y64"}while(u<e){q=a(i.charAt(u++));if(q=="-"){throw"Illegal string to decode"}r=a(i.charAt(u++));if(r=="-"){throw"Illegal string to decode"}if(i.charAt(u)=="-"){w+=String.fromCharCode((q<<2)|(r>>4));break}else{s=a(i.charAt(u++))}if(i.charAt(u)=="-"){w+=String.fromCharCode((q<<2)|(r>>4));w+=String.fromCharCode(((r<<4)&255)|(s>>2));break}else{t=a(i.charAt(u++))}w+=String.fromCharCode((q<<2)|(r>>4));w+=String.fromCharCode(((r<<4)&255)|(s>>2));w+=String.fromCharCode((s<<6)&255|t)}}catch(x){var v=new Error();v.message=x;throw v}return w}}}function c(){var a="http://rdsig.yahoo.co.jp";function b(m,o){if(!m.match(/^https?:\/\/.+$/)){throw"url malformed"}if(typeof o!=="undefined"){if(o.charAt(0)!=="/"){o="/"+o}if(o.charAt(o.length-1)==="/"){o=o.substr(0,o.length-1)}}else{o=""}var p;var e=new d();try{p=e.yax_to_y64(m)}catch(l){throw l}var n=a+o+"/RV=1/RU="+p;return n}return{gen_redirect_v1:function(g,h){return b(g,h)}}}}());function err(f,e,h){var g=new Image;g.src="http://b.www.yahoo.co.jp/p.gif?ver="+ver+"&error="+escape(f)+","+escape(e)+","+escape(h);return true}window.onerror=err;String.prototype.rot13=function(){return this.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode((a<="Z"?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})};YAHOO.namespace("Fp");YAHOO.namespace("Fd");YAHOO.Fp.beacon=function(a,e,b){var c="http://b.www.yahoo.co.jp/p.gif?t="+new Date().getTime()+"&"+a;YAHOO.Fp.throwbeacon(c,e,b)};YAHOO.Fp.rdbeacon=function(a,b,f,c){var e=YAHOO.JP.pcore.rdsig.gen_redirect_v1(encodeURI("http://k.yimg.jp/images/clear.gif?t="+new Date().getTime()),"/toppage/"+a+"/"+b);YAHOO.Fp.throwbeacon(e,f,c)};YAHOO.Fp.throwbeacon=function(e,f,c){var b=new Image(),a=function(){if(b){b=null;f()}};if(typeof f=="function"){b.onload=b.onerror=b.onabort=a;if(typeof c=="number"){setTimeout(a,c)}}b.src=e;setTimeout(function(){b=null},10000)};YAHOO.Fd.stripChunk=function(a){var b=a.lastIndexOf("!--");if(b<0){return a}return a.substring(0,(b-1))};var d=document;var $=function(a){return(typeof(a)=="string")?d.getElementById(a):false};
//-->