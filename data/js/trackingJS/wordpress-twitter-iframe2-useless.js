!function(){function provide(t,n){n(function(n){modules[t]=n})}function using(){for(var t,n=Array.prototype.slice.call(arguments,0,-1),e=0,r=[],i=arguments[arguments.length-1];t=n[e];e++){if(!modules[t])throw"[TWITTER] Module dependency missing: "+t;r.push(modules[t])}i&&i.apply(window,r)}var modules={};provide("i18n/languages",function(t){t(["hi","zh-cn","fr","zh-tw","msa","fil","fi","sv","pl","ja","ko","de","it","pt","es","ru","id","tr","da","no","nl","hu","fa","ar","ur","he","th"])}),provide("util/util",function(t){function n(t){return t&&String(t).toLowerCase().indexOf("[native code]")>-1}function e(t){return p(arguments,function(n){i(n,function(n,e){t[n]=e})}),t}function r(t){return i(t,function(n,e){c(e)&&(r(e),s(e)&&delete t[n]),(void 0===e||null===e||""===e)&&delete t[n]}),t}function i(t,n){for(var e in t)(!t.hasOwnProperty||t.hasOwnProperty(e))&&n(e,t[e]);return t}function o(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function u(t,n){return t==o(n)}function a(t,n,e){return e=e||[],function(){var r=m(arguments,function(t){return t});return t.apply(n,e.concat(r))}}function c(t){return t===Object(t)}function s(t){if(!c(t))return!1;if(Object.keys)return!Object.keys(t).length;for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}function f(t,n){window.setTimeout(function(){t.call(n||null)},0)}function l(t){return Array.prototype.slice.call(t)}var d=function(){var t=Array.prototype.indexOf;return n(t)?function(n,e){return n?t.apply(n,[e]):-1}:function(t,n){if(!t)return-1;for(var e=0,r=t.length;r>e;e++)if(n==t[e])return e;return-1}}(),p=function(){var t=Array.prototype.forEach;return n(t)?function(n,e){n&&e&&t.apply(n,[e])}:function(t,n){if(t&&n)for(var e=0,r=t.length;r>e;e++)n(t[e],e)}}(),h=function(){var t=Array.prototype.filter;return n(t)?function(n,e){return n?e?t.apply(n,[e]):n:null}:function(t,n){if(!t)return null;if(!n)return t;for(var e=[],r=0,i=t.length;i>r;r++)n(t[r])&&e.push(t[r]);return e}}(),m=function(){var t=Array.prototype.map;return n(t)?function(n,e){return n?e?t.apply(n,[e]):n:null}:function(t,n){if(!t)return null;if(!n)return t;for(var e=[],r=0,i=t.length;i>r;r++)e.push(n(t[r]));return e}}(),w=function(){var t=Array.prototype.reduce;return n(t)?function(n,e,r){return n?e?t.apply(n,[e,r]):r:null}:function(t,n,e){if(!t)return null;if(!n)return e;for(var r=e,i=0,o=t.length;o>i;i++)r=n(r,t[i],i,t);return r}}(),g=function(){var t=String.prototype.trim;return n(t)?function(n){return n&&t.apply(n)}:function(t){return t&&t.replace(/(^\s+|\s+$)/g,"")}}(),v=n(Object.create)?Object.create:function(t){function n(){}return n.prototype=t,new n};t({aug:e,async:f,compact:r,forIn:i,forEach:p,filter:h,map:m,reduce:w,trim:g,indexOf:d,isNative:n,isObject:c,isEmptyObject:s,createObject:v,bind:a,toType:o,isType:u,toRealArray:l})}),provide("util/typevalidator",function(t){using("util/util",function(n){function e(t){return void 0!==t&&null!==t&&""!==t}function r(t){return o(t)&&t%1===0}function i(t){return o(t)&&!r(t)}function o(t){return e(t)&&!isNaN(t)}function u(t){return e(t)&&"array"==n.toType(t)}function a(t){if(!e(t))return!1;switch(t){case"on":case"ON":case"true":case"TRUE":return!0;case"off":case"OFF":case"false":case"FALSE":return!1;default:return!!t}}function c(t){return o(t)?t:void 0}function s(t){return i(t)?t:void 0}function f(t){return r(t)?t:void 0}t({hasValue:e,isInt:r,isFloat:i,isNumber:o,isArray:u,asInt:f,asFloat:s,asNumber:c,asBoolean:a})})}),provide("tfw/util/globals",function(t){using("util/typevalidator",function(n){function e(){var t,n,e=document.getElementsByTagName("meta"),r=0;for(o={};t=e[r];r++)/^twitter:/.test(t.name)&&(n=t.name.replace(/^twitter:/,""),o[n]=t.content)}function r(t){return o[t]}function i(t){return n.asBoolean(t)&&(o.dnt=!0),n.asBoolean(o.dnt)}var o;e(),t({init:e,val:r,dnt:i})})}),provide("util/logger",function(t){using("util/util",function(n){function e(){c("info",n.toRealArray(arguments))}function r(){c("warn",n.toRealArray(arguments))}function i(){c("error",n.toRealArray(arguments))}function o(t){l&&(f[t]=a())}function u(t){var n;l&&(f[t]?(n=a(),e("_twitter",t,n-f[t])):i("timeEnd() called before time() for id: ",t))}function a(){return window.performance&&+window.performance.now()||+new Date}function c(t,n){if(window[s]&&window[s][t])switch(n.length){case 1:window[s][t](n[0]);break;case 2:window[s][t](n[0],n[1]);break;case 3:window[s][t](n[0],n[1],n[2]);break;case 4:window[s][t](n[0],n[1],n[2],n[3]);break;case 5:window[s][t](n[0],n[1],n[2],n[3],n[4]);break;default:0!==n.length&&window[s].warn&&window[s].warn("too many params passed to logger."+t)}}var s=["con","sole"].join(""),f={},l=!!~location.href.indexOf("tw_debug=true");t({info:e,warn:r,error:i,time:o,timeEnd:u})})}),provide("util/domready",function(t){function n(){o=1;for(var t=0,n=u.length;n>t;t++)u[t]()}var e,r,i,o=0,u=[],a=!1,c=document.createElement("a"),s="DOMContentLoaded",f="addEventListener",l="onreadystatechange";/^loade|c/.test(document.readyState)&&(o=1),document[f]&&document[f](s,r=function(){document.removeEventListener(s,r,a),n()},a),c.doScroll&&document.attachEvent(l,e=function(){/^c/.test(document.readyState)&&(document.detachEvent(l,e),n())}),i=c.doScroll?function(t){window.self!=window.top?o?t():u.push(t):!function(){try{c.doScroll("left")}catch(n){return setTimeout(function(){i(t)},50)}t()}()}:function(t){o?t():u.push(t)},t(i)}),provide("util/env",function(t){using("util/domready","util/typevalidator","util/logger","tfw/util/globals",function(n,e,r,i){function o(t){return t=t||window,t.devicePixelRatio?t.devicePixelRatio>=1.5:t.matchMedia?t.matchMedia("only screen and (min-resolution: 144dpi)").matches:!1}function u(t){return t=t||v,/(Trident|MSIE \d)/.test(t)}function a(t){return t=t||v,/MSIE 6/.test(t)}function c(t){return t=t||v,/MSIE 7/.test(t)}function s(t){return t=t||v,/MSIE 8/.test(t)}function f(t){return t=t||v,/MSIE 9/.test(t)}function l(t){return t=t||v,/(iPad|iPhone|iPod)/.test(t)}function d(t){return t=t||v,/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)}function p(){return y}function h(t,n){return t=t||window,n=n||v,t.postMessage&&!(u(n)&&t.opener)}function m(t){t=t||navigator;try{return!!t.plugins["Shockwave Flash"]||!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(n){return!1}}function w(t,n,e){return t=t||window,n=n||navigator,e=e||v,"ontouchstart"in t||/Opera Mini/.test(e)||n.msMaxTouchPoints>0}function g(){var t=document.body.style;return void 0!==t.transition||void 0!==t.webkitTransition||void 0!==t.mozTransition||void 0!==t.oTransition||void 0!==t.msTransition}var v=window.navigator.userAgent,y=!1,b=!1,_="twitter-csp-test";window.twttr=window.twttr||{},twttr.verifyCSP=function(t){var n=document.getElementById(_);b=!0,y=!!t,n&&n.parentNode.removeChild(n)},n(function(){var t;return a()||c()?y=!1:e.asBoolean(i.val("widgets:csp"))?y=!0:(t=document.createElement("script"),t.id=_,t.text="twttr.verifyCSP(false);",document.body.appendChild(t),void window.setTimeout(function(){b||(r.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'),r.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))},5e3))}),t({retina:o,anyIE:u,ie6:a,ie7:c,ie8:s,ie9:f,ios:l,android:d,cspEnabled:p,flashEnabled:m,canPostMessage:h,touch:w,cssTransitions:g})})}),provide("util/querystring",function(t){function n(t){return encodeURIComponent(t).replace(/\+/g,"%2B").replace(/'/g,"%27")}function e(t){return decodeURIComponent(t)}function r(t){var e,r=[];for(e in t)null!==t[e]&&"undefined"!=typeof t[e]&&r.push(n(e)+"="+n(t[e]));return r.sort().join("&")}function i(t){var n,r,i,o,u={};if(t)for(n=t.split("&"),o=0;i=n[o];o++)r=i.split("="),2==r.length&&(u[e(r[0])]=e(r[1]));return u}function o(t,n){var e=r(n);return e.length>0?t.indexOf("?")>=0?t+"&"+r(n):t+"?"+r(n):t}function u(t){var n=t&&t.split("?");return 2==n.length?i(n[1]):{}}t({url:o,decodeURL:u,decode:i,encode:r,encodePart:n,decodePart:e})}),provide("util/params",function(t){using("util/querystring",function(n){var e,r,i;e=function(t){var e=t.search.substr(1);return n.decode(e)},r=function(t){var e=t.href,r=e.indexOf("#"),i=0>r?"":e.substring(r+1);return n.decode(i)},i=function(t){var n,i={},o=e(t),u=r(t);for(n in o)o.hasOwnProperty(n)&&(i[n]=o[n]);for(n in u)u.hasOwnProperty(n)&&(i[n]=u[n]);return i},t({combined:i,fromQuery:e,fromFragment:r})})}),provide("tfw/util/env",function(t){using("util/params",function(n){function e(){var t=36e5,e=n.combined(document.location)._;return void 0!==r?r:(r=!1,e&&/^\d+$/.test(e)&&(r=+new Date-parseInt(e)<t),r)}var r;t({isDynamicWidget:e})})}),provide("util/widgetrpc",function(t){using("tfw/util/env","util/env",function(n,e){function r(){if(o)return o;if(n.isDynamicWidget()){var t,r=0,i=parent.frames.length;try{if(o=parent.frames[c])return o}catch(u){}if(e.anyIE())for(;i>r;r++)try{if(t=parent.frames[r],t&&"function"==typeof t.openIntent)return o=t}catch(u){}}}function i(){var t,e,o,a,c,d,p={};if("function"===(typeof arguments[0]).toLowerCase()?p.success=arguments[0]:p=arguments[0],t=p.success||function(){},e=p.timeout||function(){},o=p.nohub||function(){},a=p.complete||function(){},c=void 0!==p.attempt?p.attempt:l,!n.isDynamicWidget()||u)return o(),a(),!1;d=r(),c--;try{if(d&&d.trigger)return t(d),void a()}catch(h){}return 0>=c?(u=!0,e(),void a()):+new Date-s>f*l?(u=!0,void o()):void window.setTimeout(function(){i({success:t,timeout:e,nohub:o,attempt:c,complete:a})},f)}var o,u,a="twttrHubFrameSecure",c="http:"==document.location.protocol?"twttrHubFrame":a,s=+new Date,f=100,l=20;t({withHub:i,contextualHubId:c,secureHubId:a})})}),provide("xd/json2",function(exports){function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var n=meta[t];return"string"==typeof n?n:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,n){var e,r,i,o,u,a=gap,c=n[t];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(t)),"function"==typeof rep&&(c=rep.call(n,t,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,e=0;o>e;e+=1)u[e]=str(e,c)||"null";return i=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+a+"]":"["+u.join(",")+"]",gap=a,i}if(rep&&"object"==typeof rep)for(o=rep.length,e=0;o>e;e+=1)r=rep[e],"string"==typeof r&&(i=str(r,c),i&&u.push(quote(r)+(gap?": ":":")+i));else for(r in c)Object.hasOwnProperty.call(c,r)&&(i=str(r,c),i&&u.push(quote(r)+(gap?": ":":")+i));return i=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+a+"}":"{"+u.join(",")+"}",gap=a,i}}window.JSON||(window.JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,n,e){var r;if(gap="",indent="","number"==typeof e)for(r=0;e>r;r+=1)indent+=" ";else"string"==typeof e&&(indent=e);if(rep=n,n&&"function"!=typeof n&&("object"!=typeof n||"number"!=typeof n.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,n){var e,r,i=t[n];if(i&&"object"==typeof i)for(e in i)Object.hasOwnProperty.call(i,e)&&(r=walk(i,e),void 0!==r?i[e]=r:delete i[e]);return reviver.call(t,n,i)}var j;if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}),exports(JSON)}),provide("util/iframe",function(t){using("util/util",function(n){t(function(t,e,r){var i;if(r=r||document,t=t||{},e=e||{},t.name){try{i=r.createElement('<iframe name="'+t.name+'"></iframe>')}catch(o){i=r.createElement("iframe"),i.name=t.name}delete t.name}else i=r.createElement("iframe");return t.id&&(i.id=t.id,delete t.id),i.allowtransparency="true",i.scrolling="no",i.setAttribute("frameBorder",0),i.setAttribute("allowTransparency",!0),n.forIn(t,function(t,n){i.setAttribute(t,n)}),n.forIn(e,function(t,n){i.style[t]=n}),i})})}),provide("util/tld",function(t){function n(t){return t in i?i[t]:i[t]=r.test(t)}function e(){return n(document.location.host)}var r=/^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,i={};t({isUrlSensitive:n,isHostPageSensitive:e})}),provide("util/promise",function(t){using("util/util",function(n){var e=function(t){try{var n=t.then;if("function"==typeof n)return!0}catch(e){}return!1},r=function(t){Error.call(this,t)};r.prototype=n.createObject(Error.prototype);var i=function(){var t=[];return t.pump=function(e){n.async(function(){for(var n=t.length,r=0;n>r;)r++,t.shift()(e)})},t},o=function(t,r,i,o,u,a){var c=!1,s=this,f=function(t){n.async(function(){a("fulfilled"),o(t),r.pump(t)})},l=function(t){n.async(function(){a("rejected"),u(t),i.pump(t)})},d=function(t){return e(t)?void t.then(d,l):void f(t)},p=function(t){return function(n){c||(c=!0,t(n))}};this.resolve=p(d,"resolve"),this.fulfill=p(f,"fulfill"),this.reject=p(l,"reject"),this.cancel=function(){s.reject(new Error("Cancel"))},this.timeout=function(){s.reject(new Error("Timeout"))},a("pending")},u=function(t){var n,e,r=new i,u=new i,a="pending";this._addAcceptCallback=function(t){r.push(t),"fulfilled"==a&&r.pump(n)},this._addRejectCallback=function(t){u.push(t),"rejected"==a&&u.pump(e)};var c=new o(this,r,u,function(t){n=t},function(t){e=t},function(t){a=t});try{t&&t(c)}catch(s){c.reject(s)}},a=function(t){return"function"==typeof t},c=function(t,e,r){return a(t)?function(){try{var n=t.apply(null,arguments);e.resolve(n)}catch(r){e.reject(r)}}:n.bind(e[r],e)},s=function(t,n,e){return a(t)&&e._addAcceptCallback(t),a(n)&&e._addRejectCallback(n),e};n.aug(u.prototype,{then:function(t,n){var e=this;return new u(function(r){s(c(t,r,"resolve"),c(n,r,"reject"),e)})},"catch":function(t){var n=this;return new u(function(e){s(null,c(t,e,"reject"),n)})}}),u.isThenable=e;var f=function(t){return n.map(t,u.resolve)};u.any=function(){var t=f(arguments);return new u(function(e){if(t.length){var r=!1,i=function(t){r||(r=!0,e.resolve(t))},o=function(t){r||(r=!0,e.reject(t))};n.forEach(t,function(t){t.then(i,o)})}else e.reject("No futures passed to Promise.any()")})},u.every=function(){var t=f(arguments);return new u(function(e){if(t.length){var r=new Array(t.length),i=0,o=function(n,o){i++,r[n]=o,i==t.length&&e.resolve(r)};n.forEach(t,function(t,r){t.then(n.bind(o,null,[r]),e.reject)})}else e.reject("No futures passed to Promise.every()")})},u.some=function(){var t=f(arguments);return new u(function(e){if(t.length){var r=0,i=function(){r++,r==t.length&&e.reject()};n.forEach(t,function(t){t.then(e.resolve,i)})}else e.reject("No futures passed to Promise.some()")})},u.fulfill=function(t){return new u(function(n){n.fulfill(t)})},u.resolve=function(t){return new u(function(n){n.resolve(t)})},u.reject=function(t){return new u(function(n){n.reject(t)})},t(u)})}),provide("util/donottrack",function(t){using("util/tld","tfw/util/globals",function(n,e){t(function(t,r){var i=/https?:\/\/([^\/]+).*/i;return t=t||document.referrer,t=i.test(t)&&RegExp.$1,r=r||document.location.host,e.dnt()?!0:n.isUrlSensitive(r)?!0:t&&n.isUrlSensitive(t)?!0:document.navigator?1==document.navigator.doNotTrack:navigator?1==navigator.doNotTrack||1==navigator.msDoNotTrack:!1})})}),provide("sandbox/baseframe",function(t){using("util/domready","util/env","util/iframe","util/promise","util/util",function(n,e,r,i,o){function u(t,n,e,u){var a;this.readyPromise=new i(o.bind(function(t){this.resolver=t},this)),this.attrs=t||{},this.styles=n||{},this.appender=e||function(t){document.body.appendChild(t)},this.layout=u||function(t){return new i(function(n){return n.fulfill(t())})},this.frame=a=r(this.attrs,this.styles),a.onreadystatechange=a.onload=this.getCallback(this.onLoad),this.layout(o.bind(function(){this.appender(a)},this))}var a=0;window.twttr=window.twttr||{},window.twttr.sandbox=window.twttr.sandbox||{},u.prototype.getCallback=function(t){var n=this,e=!1;return function(){e||(e=!0,t.call(n))}},u.prototype.registerCallback=function(t){var n="cb"+a++;return window.twttr.sandbox[n]=t,n},u.prototype.onLoad=function(){try{this.document=this.frame.contentWindow.document}catch(t){return void this.setDocDomain()}this.writeStandardsDoc(),this.resolver.fulfill(this)},u.prototype.ready=function(){return this.readyPromise},u.prototype.setDocDomain=function(){var t=r(this.attrs,this.styles),n=this.registerCallback(this.getCallback(this.onLoad));t.src=["javascript:",'document.write("");',"try { window.parent.document; }","catch (e) {",'document.domain="'+document.domain+'";',"}",'window.parent.twttr.sandbox["'+n+'"]();'].join(""),this.layout(o.bind(function(){this.frame.parentNode.removeChild(this.frame),this.frame=null,this.appender?this.appender(t):document.body.appendChild(t),this.frame=t},this))},u.prototype.writeStandardsDoc=function(){if(e.anyIE()&&!e.cspEnabled()){var t=["<!DOCTYPE html>","<html>","<head>","<scr","ipt>","try { window.parent.document; }",'catch (e) {document.domain="'+document.domain+'";}',"</scr","ipt>","</head>","<body></body>","</html>"].join("");this.document.write(t),this.document.close()}},t(u)})}),provide("sandbox/minimal",function(t){using("sandbox/baseframe","util/env","util/promise","util/util",function(n,e,r,i){function o(t,n){t&&(this._frame=t,this._win=t.contentWindow,this._doc=this._win.document,this._body=this._doc.body,this._head=this._body.parentNode.children[0],this.layout=n)}i.aug(o.prototype,{createElement:function(t){return this._doc.createElement(t)},createDocumentFragment:function(){return this._doc.createDocumentFragment()},appendChild:function(t){return this.layout(i.bind(function(){return this._body.appendChild(t)},this))},setBaseTarget:function(t){var n=this._doc.createElement("base");return n.target=t,this.layout(i.bind(function(){return this._head.appendChild(n)},this))},setTitle:function(t){t&&(this._frame.title=t)},element:function(){return this._frame},document:function(){return this._doc}}),o.createSandbox=function(t,e,r,i){var u=new n(t,e,r,i);return u.ready().then(function(t){return new o(t.frame,t.layout)})},t(o)})}),provide("dom/delegate",function(t){using("util/util",function(n){function e(t){var n=t.getAttribute("data-twitter-event-id");return n?n:(t.setAttribute("data-twitter-event-id",++w),w)}function r(t,n,e){var r=0,i=t&&t.length||0;for(r=0;i>r;r++)t[r].call(n,e)}function i(t,n,e){for(var o=e||t.target||t.srcElement,u=o.className.split(" "),a=0,c=u.length;c>a;a++)r(n["."+u[a]],o,t);r(n[o.tagName],o,t),t.cease||o!==this&&i.call(this,t,n,o.parentElement||o.parentNode)}function o(t,n,e,r){function o(r){i.call(t,r,e[n])}function a(){i.call(t,t.ownerDocument.parentWindow.event,e[n])}return t.addEventListener?(u(t,o,n,r),void t.addEventListener(n,o,!1)):void(t.attachEvent&&(u(t,a,n,r),t.attachEvent("on"+n,a)))}function u(t,n,e,r){t.id&&(g[t.id]=g[t.id]||[],g[t.id].push({el:t,listener:n,type:e,rootId:r}))}function a(t){var e=g[t];e&&(n.forEach(e,function(t){c(t.el,t.type,t.listener),delete m[t.rootId]}),delete g[t])}function c(t,n,e){t&&t.removeEventListener&&t.removeEventListener(n,e),t&&t.detachEvent&&t.detachEvent(n,e)}function s(t,n,r,i){var u=e(t);m[u]=m[u]||{},m[u][n]||(m[u][n]={},o(t,n,m[u],u)),m[u][n][r]=m[u][n][r]||[],m[u][n][r].push(i)}function f(t,n,e){t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,function(){e(window.event)})}function l(t,n,r){var o=e(n),u=m[o]&&m[o];i.call(n,{target:r},u[t])}function d(t){return h(t),p(t),!1}function p(t){t&&t.preventDefault?t.preventDefault():t.returnValue=!1}function h(t){t&&(t.cease=!0)&&t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var m={},w=-1,g={};t({stop:d,stopPropagation:h,preventDefault:p,delegate:s,on:f,simulate:l,removeDelegatesForWidget:a,off:c})})}),provide("dom/cookie",function(t){using("util/util",function(n){t(function(t,e,r){var i,o,u,a,c=n.aug({},r);return arguments.length>1&&"[object Object]"!==String(e)?((null===e||void 0===e)&&(c.expires=-1),"number"==typeof c.expires&&(i=c.expires,o=new Date((new Date).getTime()+60*i*1e3),c.expires=o),e=String(e),document.cookie=[encodeURIComponent(t),"=",c.raw?e:encodeURIComponent(e),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")):(c=e||{},a=c.raw?function(t){return t}:decodeURIComponent,(u=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie))?a(u[1]):null)})})}),provide("tfw/util/tracking",function(t){var n="314706e39761e9004a732263e2090ba0ac326993:1416344954";using("dom/cookie","dom/delegate","sandbox/minimal","util/donottrack","util/promise","util/querystring","util/tld","tfw/util/env","util/iframe","util/util","xd/json2",function(e,r,i,o,u,a,c,s,f,l){function d(){return F?U:(i.createSandbox({id:"rufous-sandbox"},{display:"none"}).then(l.bind(function(t){P=t,A=T(),M=I(),R.fulfill([A,M])},this)),F=!0,U)}function p(t,n,e,r){return h(t,n,e,r,2)}function h(t,n,e,r,i){var o=!l.isObject(t),u=n?!l.isObject(n):!1;o||u||v(S(t),O(n,e,r,i),!0)}function m(t,n,e,r,i){var o=w(t.target||t.srcElement);o.action=i||"click",h(o,n,e,r)}function w(t,n){var e;return n=n||{},t&&1===t.nodeType?((e=t.getAttribute("data-scribe"))&&l.forEach(e.split(" "),function(t){var e=l.trim(t).split(":"),r=e[0],i=e[1];r&&i&&!n[r]&&(n[r]=i)}),w(t.parentNode,n)):n}function g(t,n,e){var r,i;e&&l.isObject(t)&&l.isObject(n)&&(r=l.aug({},n,{event_namespace:t}),i={l:L(r)},r.dnt&&(i.dnt=1),N(a.url(e,i)))}function v(t,n,e){var r,i,o,u;l.isObject(t)&&l.isObject(n)&&(e?g(t,n,B):(o=l.aug({},n,{event_namespace:t}),r=A.firstChild,r.value=+(+r.value||o.dnt||0),u=L(o),i=P.createElement("input"),i.type="hidden",i.name="l",i.value=u,A.appendChild(i)))}function y(t,n,e,r){var i=!l.isObject(t),o=n?!l.isObject(n):!1;i||o||U.then(function(){v(S(t),O(n,e,r))})}function b(t){x("tweet",t)}function _(t){x("timeline",t)}function x(t,n){c.isHostPageSensitive()||J[t]||(J[t]=!0,g(S({page:t,action:"impression"}),k(n),H))}function E(){return U.then(function(){if(A.children.length<=2)return u.reject();var t=u.every(P.appendChild(A),P.appendChild(M)).then(function(t){var n=t[0],e=t[1];return r.on(e,"load",function(){j(n,e)(),twttr.events.trigger("logFlushed")}),n.submit(),t});return A=T(),M=I(),t})}function j(t,n){return function(){var e=t.parentNode;e&&(e.removeChild(t),e.removeChild(n))}}function S(t){return l.aug({client:"tfw"},t||{})}function O(t,e,r,i){var u=t&&t.widget_origin||document.referrer;return t=C("tfw_client_event",t,r||o(u)),t.client_version=n,t.format_version=void 0!==i?i:1,e||(t.widget_origin=u),t}function k(t){return C("syndicated_impression",{},t)}function C(t,n,e){return n=n||{},l.aug(n,{_category_:t,triggered_on:n.triggered_on||+new Date,dnt:!!e})}function T(){var t=P.createElement("form"),n=P.createElement("input"),e=P.createElement("input");return D++,t.action=B,t.method="POST",t.target="rufous-frame-"+D,t.id="rufous-form-"+D,n.type="hidden",n.name="dnt",n.value=0,e.type="hidden",e.name="tfw_redirect",e.value=q,t.appendChild(n),t.appendChild(e),t}function I(){var t="rufous-frame-"+D;return f({id:t,name:t,width:0,height:0,border:0},{display:"none"},P.document())}function N(t){var n=new Image;n.src=t}function L(t){var n,e=Array.prototype.toJSON;return delete Array.prototype.toJSON,n=JSON.stringify(t),e&&(Array.prototype.toJSON=e),n}var A,M,P,R,D=0,F=!1,U=new u(function(t){R=t}),J={},B="https://syndication.twitter.com/i/jot",H="https://syndication.twitter.com/i/jot/syndication",q="https://platform.twitter.com/jot.html";twttr.widgets&&twttr.widgets.endpoints&&(B=twttr.widgets.endpoints.rufous||B,H=twttr.widgets.endpoints.rufous||H,q=twttr.widgets.endpoints.rufousRedirect||q),t({enqueue:y,flush:E,initPostLogging:d,scribeInteraction:m,extractTermsFromDOM:w,addPixel:h,addPixel2:p,scribeTweetAudienceImpression:b,scribeTimelineAudienceImpression:_})})}),provide("tfw/util/session",function(t){using("dom/cookie","util/querystring",function(n,e){function r(t){var e=n("secure_session"),r=document.location;return"true"==e||"default"==e?t?"https:"===r.protocol:!0:n("auth_token_session")?!0:!1}function i(t){var n=document.location,e=twttr.config&&twttr.config.secureHost?twttr.config.secureHost:n.host;return r()&&"https:"!==n.protocol?(window.onload=function(){document.location.replace("https://"+e+n.pathname+n.search+n.hash+"&original_redirect_referrer="+t)},!0):void 0}function o(){var t,r,i=n("twid");return i&&(t=i.split("|")[0])?(r=e.decode(t),r.c?r.c:r.u):void 0}t({isLoggedIn:r,forwardSSL:i,getUserId:o})})}),provide("util/events",function(t){using("util/util",function(n){var e={bind:function(t,n){return this._handlers=this._handlers||{},this._handlers[t]=this._handlers[t]||[],this._handlers[t].push(n)},unbind:function(t,e){if(this._handlers[t])if(e){var r=n.indexOf(this._handlers[t],e);r>=0&&this._handlers[t].splice(r,1)}else this._handlers[t]=[]},trigger:function(t,e){var r=this._handlers&&this._handlers[t];e=e||{},e.type=t,n.forEach(r,function(t){n.async(n.bind(t,this,[e]))})}};t({Emitter:e})})}),provide("xd/jsonrpc",function(t){using("util/util","util/events","xd/json2",function(n,e){function r(t){return(JSON.parse||JSON.decode)(t)}function i(t){this.con=t}function o(){this.id=o.id++}n.aug(i.prototype,{expose:function(t){this.con.bind("message",this._handleRequest(t))},call:function(t){var n,e=this;return this._requests||(this._requests={},this.con.bind("message",function(t){var n;try{t=r(t)}catch(i){return}t.callback&&"number"==typeof t.id&&(n=e._requests[t.id])&&(t.error?n.trigger("error",t):n.trigger("success",t),delete e._requests[t.id])})),n=new o,this._requests[n.id]=n,n.send(this.con,t,Array.prototype.slice.call(arguments,1))},_handleRequest:function(t){var n=this;return function(e){var i,o;try{e=r(e)}catch(u){return}e.callback||"number"==typeof e.id&&"function"==typeof t[e.method]&&(o=n._responseCallbacks(e.id),i=t[e.method].apply(t,e.params.concat(o)),"undefined"!=typeof i&&o[0](i))}},_responseCallbacks:function(t){var n=this.con;return[function(e){n.send(JSON.stringify({id:t,result:e,callback:!0}))},function e(r){n.send(JSON.stringify({id:t,error:e,callback:r}))}]}}),o.id=0,n.aug(o.prototype,e.Emitter,{send:function(t,n,e){return t.send(JSON.stringify({id:this.id,method:n,params:e})),this},success:function(t){return this.bind("success",t),this},error:function(t){return this.bind("error",t),this}}),t(function(t){return new i(t)})})}),provide("xd/flash",function(t){function n(t,n){var e=n||Math.floor(100*Math.random()),r=['<object id="xdflashshim'+e+'" name="xdflashshim'+e+'"','type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"','width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">','<param name="movie" value="'+t+"&debug="+window.__XDDEBUG__+'">','<param name="wmode" value="window">','<param name="allowscriptaccess" value="always">',"</object>"].join(" ");return r}t({object:n})}),provide("xd/base",function(t){using("util/util","util/events",function(n,e){function r(){}n.aug(r.prototype,e.Emitter,{transportMethod:"",init:function(){},send:function(t){var n;this._ready?this._performSend(t):n=this.bind("ready",function(){this.unbind("ready",n),this._performSend(t)})},ready:function(){this.trigger("ready",this),this._ready=!0},isReady:function(){return!!this._ready},receive:function(t){this.trigger("message",t)}}),t({Connection:r})})}),provide("xd/parent",function(t){using("xd/base","util/util","util/env",function(n,e,r){function i(t){var n=[];return e.forIn(t,function(t,e){n.push(t+"="+e)}),n.join(",")}function o(){}function u(t){this.transportMethod="PostMessage",this.options=t,this._createChild()}function a(t){this.transportMethod="Flash",this.options=t,this.token=Math.random().toString(16).substring(2),this._setup()}function c(t){this.transportMethod="Fallback",this.options=t,this._createChild()}var s,f="__ready__",l=0;o.prototype=new n.Connection,e.aug(o.prototype,{_createChild:function(){this.options.window?this._createWindow():this._createIframe()},_createIframe:function(){function t(){u.child=n.contentWindow,u._ready||u.init()}var n,r,i,o,u=this,a={allowTransparency:!0,frameBorder:"0",scrolling:"no",tabIndex:"0",name:this._name()},c=e.aug(e.aug({},a),this.options.iframe),f=!1;window.postMessage?(s||(s=document.createElement("iframe")),n=s.cloneNode(!1)):n=document.createElement('<iframe name="'+c.name+'">'),n.id=c.name,e.forIn(c,function(t,e){"style"!=t&&n.setAttribute(t,e)}),o=n.getAttribute("style"),o&&"undefined"!=typeof o.cssText?o.cssText=c.style:n.style.cssText=c.style,n.addEventListener?n.addEventListener("load",t,!1):n.attachEvent("onload",function(){f||(f=!0,t())}),n.src=this._source(),(r=this.options.appendTo)?r.appendChild(n):(i=this.options.replace)?(r=i.parentNode,r&&r.replaceChild(n,i)):document.body.insertBefore(n,document.body.firstChild)},_createWindow:function(){var t,n={width:550,height:450,personalbar:"0",toolbar:"0",scrollbars:"1",resizable:"1"},r=e.aug(e.aug({},n),this.options.window),o=screen.width,u=screen.height,a=this._name();r.left=r.left||Math.round(o/2-r.width/2),r.top=r.top||Math.round(u/2-r.height/2),u<r.height&&(r.top=0,r.height=u),t=window.open(this._source(),a,i(r)),t&&t.focus(),this.child=t,this.init()},_source:function(){return this.options.src},_name:function(){var t="_xd_"+l++;return window.parent&&window.parent!=window&&window.name&&(t=window.name+t),t}}),u.prototype=new o,e.aug(u.prototype,{init:function(){function t(t){t.source===n.child&&(n._ready||t.data!==f?n.receive(t.data):n.ready())}var n=this;window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent("onmessage",t)},_performSend:function(t){this.child.postMessage(t,this.options.src)}}),a.prototype=new o,e.aug(a.prototype,{_setup:function(){var t=this;using("xd/flash",function(n){window["__xdcb"+t.token]={receive:function(n){t._ready||n!==f?t.receive(n):t.ready()},loaded:function(){}};var e=document.createElement("div");e.innerHTML=n.object("https://platform.twitter.com/xd/ft.swf?&token="+t.token+"&parent=true&callback=__xdcb"+t.token+"&xdomain="+t._host(),t.token),document.body.insertBefore(e,document.body.firstChild),t.proxy=e.firstChild,t._createChild()})},init:function(){},_performSend:function(t){this.proxy.send(t)},_host:function(){return this.options.src.replace(/https?:\/\//,"").split(/(:|\/)/)[0]},_source:function(){return this.options.src+(this.options.src.match(/\?/)?"&":"?")+"xd_token="+window.escape(this.token)}}),c.prototype=new o,e.aug(c.prototype,{init:function(){},_performSend:function(){}}),t({connect:function(t){return!r.canPostMessage()||r.anyIE()&&t.window?r.anyIE()&&r.flashEnabled()?new a(t):new c(t):new u(t)}})})}),provide("util/cookiesupport",function(t){using("dom/cookie",function(n){t(function(t){var e="util_cookie_detect";return n(e,"set",{path:"/",expires:1,domain:t}),"set"!==n(e)?!1:(n(e,"",{path:"/",expires:-1,domain:t}),!0)})})}),provide("util/format",function(t){var n={en:function(t,n){var e,r,i=parseInt(t,10),o=new RegExp("^\\"+n(","));return isNaN(i)?"":0>i?"0":1e4>i?i.toString().split("").reverse().join("").replace(/(\d{3})/g,"$1"+n(",")).split("").reverse().join("").replace(o,""):1e5>i?(e=(Math.floor(i/100)/10).toString(),e.replace(/\./,n("."))+n("K")):1e6>i?(e=Math.floor(i/1e3).toString(),e+n("K")):1e7>i?(r=(Math.floor(i/1e5)/10).toString(),-1!=r.indexOf(".")?r.replace(/\./,n("."))+n("M"):r+n(".")+"0"+n("M")):n("10M+")},ja:function(t,n){var e,r=t,i=new RegExp("^"+n(","));return r=parseInt(r,10),isNaN(r)?"":1e4>r?r.toString().split("").reverse().join("").replace(/(\d{3})/g,"$1"+n(",")).split("").reverse().join("").replace(i,""):1e6>r?(e=(Math.floor(r/1e3)/10).toString(),e.replace(/\./,n("."))+" 万"):1e7>r?(e=Math.floor(r/1e4).toString(),e+" 万"):"1,000 万以上"}};t({number:function(t,e,r){return e||(e=function(t){return t}),r&&n[r]?n[r](t,e):n.en(t,e)}})}),using("util/querystring","util/params","util/util","util/format","dom/cookie","util/cookiesupport","xd/parent","xd/jsonrpc","tfw/util/session","tfw/util/tracking","util/widgetrpc","util/env","i18n/languages",function(t,n,e,r,i,o,u,a,c,s,f,l,d){function p(t){if(t&&/^[\w_]{1,20}$/.test(t))return t;throw new Error("Invalid screen name")}function h(t,n){t.className+=" "+n}function m(t){return t&&"false"===t.toLowerCase()}function w(t){return t&&"true"===t.toLowerCase()}function g(t){return tn.getElementById(t)}function v(t){return t=t||window.event,t&&t.preventDefault?t.preventDefault():t.returnValue=!1,t&&t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,!1}function y(t){var n=R&&R.name?R.name+" (@"+en+")":"@"+en;return A?void(F.title=_("View your profile on Twitter")):t?(h(D,"following"),void(F.title=_("You are following %{name} on Twitter",{name:n}))):(D.className=D.className.replace(/ ?following/,""),void(F.title=_("Follow %{name} on Twitter",{name:n})))}function b(){return/following/.test(D.className)}function x(t,n){return n=n||{width:550,height:500},u.connect({window:n,src:t})}function E(t){return{screen_name:en,original_referer:z,region:t,partner:cn,tw_p:$}}function j(){var n=x(twttr.config.followURL+"?"+t.encode(E()),{height:520,width:550});k(n,V)}function S(n){var e=x(twttr.config.userIntentURL+"?"+t.encode(E(n)));k(e,n)}function O(n){var e=x(twttr.config.mentionIntentURL+"?"+t.encode(E(n)));k(e,n)}function k(t,n){a(t).expose({trigger:function(t,e){"follow"===t?y(!0):"unfollow"===t&&y(!1),f.withHub(function(r){e.region||(e.region=n),r.trigger(t,e,K.id)})}})}function C(){var n="@"+en;s.addPixel({page:"button",section:"follow",action:"impression"},{language:K.lang,message:[K.size,on?"withcount":"nocount"].join(":")+":",widget_origin:z},!1,sn),tn.title=_("Twitter Follow Button"),U.innerHTML=rn?_("Follow %{screen_name}",{screen_name:"<b>"+n+"</b>"}):_("Follow"),rn&&D.offsetWidth<U.offsetWidth-10&&(rn=!1,U.innerHTML=_("Follow")),y(!1),H.label=_("%{name} on Twitter",{name:n}),B.label=_("Follow"),q.label=_("Tweet to %{name}",{name:n}),F.href=twttr.config.followURL+"?"+t.encode(E(Y)),J.href=twttr.config.userIntentURL+"?"+t.encode(E(G)),h(D,"ready"),h(D.parentNode,an),on||h(D,"ncount"),un&&h(D,un)}function T(){function n(n,e){return s.scribeInteraction(n,{},!1,sn),f.withHub(function(t){t.trigger("click",{region:e},K.id)}),!(n.altKey||n.shiftKey||n.metaKey)||n.shiftKey&&n.metaKey?(l.ios()||l.android()||L?window.open(twttr.config.twitterHost+"/"+en+"?"+t.encode(E())):A||b()||n&&n.metaKey&&n.shiftKey?S(e):j(),v(n)):void 0}function e(t,n){return s.scribeInteraction(t,{},!1,sn),f.withHub(function(t){t.trigger("click",{region:n},K.id)}),t.altKey||t.shiftKey||t.metaKey?void 0:(S(n),v(t))}F.onclick=function(t){return n(t||window.event,b()?X:V)},B.onclick=function(t){return n(t||window.event,Q)},J.onclick=function(t){return e(t||window.event,Z)},H.onclick=function(t){return e(t||window.event,Q)},q.onclick=function(){return O(Q)}}function I(){var n,e;c.isLoggedIn()?e=t.url(twttr.config.followersInfoURL,{screen_names:en,requester_id:c.getUserId(),lang:an,callback:"twttr.setFollowersCountAndFollowing"}):on&&(e=t.url(twttr.config.cdnFollowersInfoURL,{screen_names:en,lang:an,callback:"twttr.setFollowersCountAndFollowing"})),e&&(n=tn.createElement("script"),n.src=e,D.appendChild(n))}var N,L,A,M,P,R,D,F,U,J,B,H,q,W=document.location,K=n.combined(W),z=K.original_redirect_referrer||document.referrer,$="followbutton",V="follow",Y="follow_link",X="following",Z="count",G="count_link",Q="context_menu",tn=document,nn="true"==K.preview?!0:!1,en=p(K.screen_name),rn=!m(K.show_screen_name),on=!m(K.show_count),un=~e.indexOf(["left","right"],K.align)?K.align:null,an=K.lang&&K.lang.toLowerCase(),cn=K.partner,sn=w(K.dnt);window.twttr=window.twttr||{},c.forwardSSL(z)||(twttr.config=e.aug({cdnFollowersInfoURL:"https://cdn.syndication.twimg.com/widgets/followbutton/info.json",followersInfoURL:"https://syndication.twitter.com/widgets/followbutton/info.json",userIntentURL:"https://twitter.com/intent/user",followURL:"https://twitter.com/intent/follow",mentionIntentURL:"https://twitter.com/intent/tweet",twitterHost:"https://twitter.com"},twttr.config||{}),D=tn.body,F=g("follow-button"),U=g("l"),J=g("count"),B=g("m-follow"),H=g("m-profile"),q=g("m-tweet"),twttr.lang=an=an&&~e.indexOf(d,an)?an:"en",D.parentNode.lang=an,P=_("ltr"),h(D,P),"l"==K.size&&h(tn.documentElement,"xl"),twttr.setFollowersCountAndFollowing=function(t){if(t.error)return void y(!1);if(t.length){R=t[0];var n=r.number(R.followers_count,_,an),e=_("%{followers_count} followers",{followers_count:n});J.innerHTML=e,h(D,"hcount count-ready"),N=R["protected"],L=R.age_gated,M=R.id,M!==c.getUserId()||nn||(A=!0,y(!1)),y(R.following)}},C(),T(),I())})}();;