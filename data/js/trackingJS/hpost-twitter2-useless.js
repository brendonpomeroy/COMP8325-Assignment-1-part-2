!function t(e,n,r){function i(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(t){function e(t){if(t&&/^[\w_]{1,20}$/.test(t))return t;throw new Error("Invalid screen name")}function n(t,e){t.className+=" "+e}function r(t){return t&&"false"===t.toLowerCase()}function i(t){return t&&"true"===t.toLowerCase()}function o(t){return Q.getElementById(t)}function u(t){return t=t||window.event,t&&t.preventDefault?t.preventDefault():t.returnValue=!1,t&&t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,!1}function a(t){var e=j&&j.name?j.name+" (@"+ee+")":"@"+ee;return b?void(O.title=_("View your profile on Twitter")):t?(n(S,"following"),void(O.title=_("You are following %{name} on Twitter",{name:e}))):(S.className=S.className.replace(/ ?following/,""),void(O.title=_("Follow %{name} on Twitter",{name:e})))}function c(){return/following/.test(S.className)}function s(t,e){return e=e||{width:550,height:500},D.connect({window:e,src:t})}function l(t){return{screen_name:ee,original_referer:K,region:t,partner:ue,tw_p:z}}function f(){var t=s(twttr.config.followURL+"?"+L.encode(l()),{height:520,width:550});h(t,$)}function d(t){var e=s(twttr.config.userIntentURL+"?"+L.encode(l(t)));h(e,t)}function p(t){var e=s(twttr.config.mentionIntentURL+"?"+L.encode(l(t)));h(e,t)}function h(t,e){R(t).expose({trigger:function(t,n){"follow"===t?a(!0):"unfollow"===t&&a(!1),q.withHub(function(r){n.region||(n.region=e),r.trigger(t,n,W.id)})}})}function m(){var t="@"+ee;F.addPixel({page:"button",section:"follow",action:"impression"},{language:W.lang,message:[W.size,re?"withcount":"nocount"].join(":")+":",widget_origin:K},!1,ae),Q.title=_("Twitter Follow Button"),C.innerHTML=ne?_("Follow %{screen_name}",{screen_name:"<b>"+t+"</b>"}):_("Follow"),ne&&S.offsetWidth<C.offsetWidth-10&&(ne=!1,C.innerHTML=_("Follow")),a(!1),T.label=_("%{name} on Twitter",{name:t}),I.label=_("Follow"),N.label=_("Tweet to %{name}",{name:t}),O.href=twttr.config.followURL+"?"+L.encode(l(V)),k.href=twttr.config.userIntentURL+"?"+L.encode(l(Z)),n(S,"ready"),n(S.parentNode,oe),re||n(S,"ncount"),ie&&n(S,ie)}function w(){function t(t,e){return F.scribeInteraction(t,{},!1,ae),q.withHub(function(t){t.trigger("click",{region:e},W.id)}),!(t.altKey||t.shiftKey||t.metaKey)||t.shiftKey&&t.metaKey?(J.ios()||J.android()||y?window.open(twttr.config.twitterHost+"/"+ee+"?"+L.encode(l())):b||c()||t&&t.metaKey&&t.shiftKey?d(e):f(),u(t)):void 0}function e(t,e){return F.scribeInteraction(t,{},!1,ae),q.withHub(function(t){t.trigger("click",{region:e},W.id)}),t.altKey||t.shiftKey||t.metaKey?void 0:(d(e),u(t))}O.onclick=function(e){return t(e||window.event,c()?Y:$)},I.onclick=function(e){return t(e||window.event,G)},k.onclick=function(t){return e(t||window.event,X)},T.onclick=function(t){return e(t||window.event,G)},N.onclick=function(){return p(G)}}function g(){var t,e;U.isLoggedIn()?e=L.url(twttr.config.followersInfoURL,{screen_names:ee,requester_id:U.getUserId(),lang:oe,callback:"twttr.setFollowersCountAndFollowing"}):re&&(e=L.url(twttr.config.cdnFollowersInfoURL,{screen_names:ee,lang:oe,callback:"twttr.setFollowersCountAndFollowing"})),e&&(t=Q.createElement("script"),t.src=e,S.appendChild(t))}var v,y,b,x,E,j,S,O,C,k,I,T,N,L=t("util/querystring"),M=t("util/params"),A=t("util/util"),P=t("util/format"),D=t("xd/parent"),R=t("xd/jsonrpc"),U=t("tfw/util/session"),F=t("tfw/util/tracking"),q=t("util/widgetrpc"),J=t("util/env"),B=t("i18n/languages"),H=document.location,W=M.combined(H),K=W.original_redirect_referrer||document.referrer,z="followbutton",$="follow",V="follow_link",Y="following",X="count",Z="count_link",G="context_menu",Q=document,te="true"==W.preview?!0:!1,ee=e(W.screen_name),ne=!r(W.show_screen_name),re=!r(W.show_count),ie=~A.indexOf(["left","right"],W.align)?W.align:null,oe=W.lang&&W.lang.toLowerCase(),ue=W.partner,ae=i(W.dnt);window.twttr=window.twttr||{},U.forwardSSL(K)||(twttr.config=A.aug({cdnFollowersInfoURL:"https://cdn.syndication.twimg.com/widgets/followbutton/info.json",followersInfoURL:"https://syndication.twitter.com/widgets/followbutton/info.json",userIntentURL:"https://twitter.com/intent/user",followURL:"https://twitter.com/intent/follow",mentionIntentURL:"https://twitter.com/intent/tweet",twitterHost:"https://twitter.com"},twttr.config||{}),S=Q.body,O=o("follow-button"),C=o("l"),k=o("count"),I=o("m-follow"),T=o("m-profile"),N=o("m-tweet"),twttr.lang=oe=oe&&~A.indexOf(B,oe)?oe:"en",S.parentNode.lang=oe,E=_("ltr"),n(S,E),"l"==W.size&&n(Q.documentElement,"xl"),twttr.setFollowersCountAndFollowing=function(t){if(t.error)return void a(!1);if(t.length){j=t[0];var e=P.number(j.followers_count,_,oe),r=_("%{followers_count} followers",{followers_count:e});k.innerHTML=r,n(S,"hcount count-ready"),v=j["protected"],y=j.age_gated,x=j.id,x!==U.getUserId()||te||(b=!0,a(!1)),a(j.following)}},m(),w(),g())},{"i18n/languages":4,"tfw/util/session":9,"tfw/util/tracking":10,"util/env":13,"util/format":15,"util/params":18,"util/querystring":20,"util/util":23,"util/widgetrpc":24,"xd/jsonrpc":28,"xd/parent":29}],2:[function(t,e){var n=t("util/util");e.exports=function(t,e,r){var i,o,u,a,c=n.aug({},r);return arguments.length>1&&"[object Object]"!==String(e)?((null===e||void 0===e)&&(c.expires=-1),"number"==typeof c.expires&&(i=c.expires,o=new Date((new Date).getTime()+60*i*1e3),c.expires=o),e=String(e),document.cookie=[encodeURIComponent(t),"=",c.raw?e:encodeURIComponent(e),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")):(c=e||{},a=c.raw?function(t){return t}:decodeURIComponent,(u=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie))?a(u[1]):null)}},{"util/util":23}],3:[function(t,e){function n(t){var e=t.getAttribute("data-twitter-event-id");return e?e:(t.setAttribute("data-twitter-event-id",++g),g)}function r(t,e,n){var r=0,i=t&&t.length||0;for(r=0;i>r;r++)t[r].call(e,n)}function i(t,e,n){for(var o=n||t.target||t.srcElement,u=o.className.split(" "),a=0,c=u.length;c>a;a++)r(e["."+u[a]],o,t);r(e[o.tagName],o,t),t.cease||o!==this&&i.call(this,t,e,o.parentElement||o.parentNode)}function o(t,e,n,r){function o(r){i.call(t,r,n[e])}function a(){i.call(t,t.ownerDocument.parentWindow.event,n[e])}return t.addEventListener?(u(t,o,e,r),void t.addEventListener(e,o,!1)):void(t.attachEvent&&(u(t,a,e,r),t.attachEvent("on"+e,a)))}function u(t,e,n,r){t.id&&(v[t.id]=v[t.id]||[],v[t.id].push({el:t,listener:e,type:n,rootId:r}))}function a(t){var e=v[t];e&&(m.forEach(e,function(t){c(t.el,t.type,t.listener),delete w[t.rootId]}),delete v[t])}function c(t,e,n){t&&t.removeEventListener&&t.removeEventListener(e,n),t&&t.detachEvent&&t.detachEvent(e,n)}function s(t,e,r,i){var u=n(t);w[u]=w[u]||{},w[u][e]||(w[u][e]={},o(t,e,w[u],u)),w[u][e][r]=w[u][e][r]||[],w[u][e][r].push(i)}function l(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,function(){n(window.event)})}function f(t,e,r){var o=n(e),u=w[o]&&w[o];i.call(e,{target:r},u[t])}function d(t){return h(t),p(t),!1}function p(t){t&&t.preventDefault?t.preventDefault():t.returnValue=!1}function h(t){t&&(t.cease=!0)&&t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var m=t("util/util"),w={},g=-1,v={};e.exports={stop:d,stopPropagation:h,preventDefault:p,delegate:s,on:l,simulate:f,removeDelegatesForWidget:a,off:c}},{"util/util":23}],4:[function(t,e){e.exports=["hi","zh-cn","fr","zh-tw","msa","fil","fi","sv","pl","ja","ko","de","it","pt","es","ru","id","tr","da","no","nl","hu","fa","ar","ur","he","th","cs","uk","vi","ro","bn"]},{}],5:[function(t,e){function n(t,e,n,r){var a;this.readyPromise=new o(u.bind(function(t){this.resolver=t},this)),this.attrs=t||{},this.styles=e||{},this.appender=n||function(t){document.body.appendChild(t)},this.layout=r||function(t){return new o(function(e){return e.fulfill(t())})},this.frame=a=i(this.attrs,this.styles),a.onreadystatechange=a.onload=this.getCallback(this.onLoad),this.layout(u.bind(function(){this.appender(a)},this))}var r=t("util/env"),i=t("util/iframe"),o=t("util/promise"),u=t("util/util"),a=0;window.twttr=window.twttr||{},window.twttr.sandbox=window.twttr.sandbox||{},n.prototype.getCallback=function(t){var e=this,n=!1;return function(){n||(n=!0,t.call(e))}},n.prototype.registerCallback=function(t){var e="cb"+a++;return window.twttr.sandbox[e]=t,e},n.prototype.onLoad=function(){try{this.document=this.frame.contentWindow.document}catch(t){return void this.setDocDomain()}this.writeStandardsDoc(),this.resolver.fulfill(this)},n.prototype.ready=function(){return this.readyPromise},n.prototype.setDocDomain=function(){var t=i(this.attrs,this.styles),e=this.registerCallback(this.getCallback(this.onLoad));t.src=["javascript:",'document.write("");',"try { window.parent.document; }","catch (e) {",'document.domain="'+document.domain+'";',"}",'window.parent.twttr.sandbox["'+e+'"]();'].join(""),this.layout(u.bind(function(){this.frame.parentNode.removeChild(this.frame),this.frame=null,this.appender?this.appender(t):document.body.appendChild(t),this.frame=t},this))},n.prototype.writeStandardsDoc=function(){if(r.anyIE()&&!r.cspEnabled()){var t=["<!DOCTYPE html>","<html>","<head>","<scr","ipt>","try { window.parent.document; }",'catch (e) {document.domain="'+document.domain+'";}',"</scr","ipt>","</head>","<body></body>","</html>"].join("");this.document.write(t),this.document.close()}},e.exports=n},{"util/env":13,"util/iframe":16,"util/promise":19,"util/util":23}],6:[function(t,e){function n(t,e){t&&(this._frame=t,this._win=t.contentWindow,this._doc=this._win.document,this._body=this._doc.body,this._head=this._body.parentNode.children[0],this.layout=e)}var r=t("sandbox/baseframe"),i=t("util/util");i.aug(n.prototype,{createElement:function(t){return this._doc.createElement(t)},createDocumentFragment:function(){return this._doc.createDocumentFragment()},appendChild:function(t){return this.layout(i.bind(function(){return this._body.appendChild(t)},this))},setBaseTarget:function(t){var e=this._doc.createElement("base");return e.target=t,this.layout(i.bind(function(){return this._head.appendChild(e)},this))},setTitle:function(t){t&&(this._frame.title=t)},element:function(){return this._frame},document:function(){return this._doc}}),n.createSandbox=function(t,e,i,o){var u=new r(t,e,i,o);return u.ready().then(function(t){return new n(t.frame,t.layout)})},e.exports=n},{"sandbox/baseframe":5,"util/util":23}],7:[function(t,e){function n(){var t=36e5,e=i.combined(document.location)._;return void 0!==r?r:(r=!1,e&&/^\d+$/.test(e)&&(r=+new Date-parseInt(e)<t),r)}var r,i=t("util/params");e.exports={isDynamicWidget:n}},{"util/params":18}],8:[function(t,e){function n(t){var e,n,r,i=0;for(o={},t=t||document,e=t.getElementsByTagName("meta");n=e[i];i++)/^twitter:/.test(n.name)&&(r=n.name.replace(/^twitter:/,""),o[r]=n.content)}function r(t){return o[t]}function i(t){return u.asBoolean(t)&&(o.dnt=!0),u.asBoolean(o.dnt)}var o,u=t("util/typevalidator");n(),e.exports={init:n,val:r,dnt:i}},{"util/typevalidator":22}],9:[function(t,e){function n(t){var e=o("secure_session"),n=document.location;return"true"==e||"default"==e?t?"https:"===n.protocol:!0:o("auth_token_session")?!0:!1}function r(t){var e=document.location,r=twttr.config&&twttr.config.secureHost?twttr.config.secureHost:e.host;return n()&&"https:"!==e.protocol?(window.onload=function(){document.location.replace("https://"+r+e.pathname+e.search+e.hash+"&original_redirect_referrer="+t)},!0):void 0}function i(){var t,e,n=o("twid");return n&&(t=n.split("|")[0])?(e=u.decode(t),e.c?e.c:e.u):void 0}var o=t("dom/cookie"),u=t("util/querystring");e.exports={isLoggedIn:n,forwardSSL:r,getUserId:i}},{"dom/cookie":2,"util/querystring":20}],10:[function(t,e){function n(){return R?U:(j.createSandbox({id:"rufous-sandbox"},{display:"none"}).then(T.bind(function(t){M=t,N=y(),L=b(),A.fulfill([N,L])},this)),R=!0,U)}function r(t,e,n,r){return i(t,e,n,r,2)}function i(t,e,n,r,i){var o=!T.isObject(t),u=e?!T.isObject(e):!1;o||u||c(m(t),w(e,n,r,i),!0)}function o(t,e,n,r,o){var a=u(t.target||t.srcElement);a.action=o||"click",i(a,e,n,r)}function u(t,e){var n;return e=e||{},t&&1===t.nodeType?((n=t.getAttribute("data-scribe"))&&T.forEach(n.split(" "),function(t){var n=T.trim(t).split(":"),r=n[0],i=n[1];r&&i&&!e[r]&&(e[r]=i)}),u(t.parentNode,e)):e}function a(t,e,n){var r,i;n&&T.isObject(t)&&T.isObject(e)&&(r=T.aug({},e,{event_namespace:t}),i={l:x(r)},r.dnt&&(i.dnt=1),_(C.url(n,i)))}function c(t,e,n){var r,i,o,u;T.isObject(t)&&T.isObject(e)&&(n?a(t,e,q):(o=T.aug({},e,{event_namespace:t}),r=N.firstChild,r.value=+(+r.value||o.dnt||0),u=x(o),i=M.createElement("input"),i.type="hidden",i.name="l",i.value=u,N.appendChild(i)))}function s(t,e,n,r){var i=!T.isObject(t),o=e?!T.isObject(e):!1;i||o||U.then(function(){c(m(t),w(e,n,r))})}function l(t){d("tweet",t)}function f(t){d("timeline",t)}function d(t,e){k.isHostPageSensitive()||F[t]||(F[t]=!0,a(m({page:t,action:"impression"}),g(e),J))}function p(){return U.then(function(){if(N.children.length<=2)return O.reject();var t=O.every(M.appendChild(N),M.appendChild(L)).then(function(t){var e=t[0],n=t[1];return E.on(n,"load",function(){h(e,n)(),twttr.events.trigger("logFlushed")}),e.submit(),t});return N=y(),L=b(),t})}function h(t,e){return function(){var n=t.parentNode;n&&(n.removeChild(t),n.removeChild(e))}}function m(t){return T.aug({client:"tfw"},t||{})}function w(t,e,n,r){var i=t&&t.widget_origin||document.referrer;return t=v("tfw_client_event",t,n||S(i)),t.client_version=P,t.format_version=void 0!==r?r:1,e||(t.widget_origin=i),t}function g(t){return v("syndicated_impression",{},t)}function v(t,e,n){return e=e||{},T.aug(e,{_category_:t,triggered_on:e.triggered_on||+new Date,dnt:!!n})}function y(){var t=M.createElement("form"),e=M.createElement("input"),n=M.createElement("input");return D++,t.action=q,t.method="POST",t.target="rufous-frame-"+D,t.id="rufous-form-"+D,e.type="hidden",e.name="dnt",e.value=0,n.type="hidden",n.name="tfw_redirect",n.value=B,t.appendChild(e),t.appendChild(n),t}function b(){var t="rufous-frame-"+D;return I({id:t,name:t,width:0,height:0,border:0},{display:"none"},M.document())}function _(t){var e=new Image;e.src=t}function x(t){var e,n=Array.prototype.toJSON;return delete Array.prototype.toJSON,e=JSON.stringify(t),n&&(Array.prototype.toJSON=n),e}var E=t("dom/delegate"),j=t("sandbox/minimal"),S=t("util/donottrack"),O=t("util/promise"),C=t("util/querystring"),k=t("util/tld"),I=t("util/iframe"),T=t("util/util");t("xd/json2");var N,L,M,A,P="43114e5edbe3facfa16d29cc02daa347bae17500:1417650080",D=0,R=!1,U=new O(function(t){A=t}),F={},q="https://syndication.twitter.com/i/jot",J="https://syndication.twitter.com/i/jot/syndication",B="https://platform.twitter.com/jot.html";twttr.widgets&&twttr.widgets.endpoints&&(q=twttr.widgets.endpoints.rufous||q,J=twttr.widgets.endpoints.rufous||J,B=twttr.widgets.endpoints.rufousRedirect||B),e.exports={enqueue:s,flush:p,initPostLogging:n,scribeInteraction:o,extractTermsFromDOM:u,addPixel:i,addPixel2:r,scribeTweetAudienceImpression:l,scribeTimelineAudienceImpression:f,_resetAudienceImpressionTracker:function(){F={}}}},{"dom/delegate":3,"sandbox/minimal":6,"util/donottrack":12,"util/iframe":16,"util/promise":19,"util/querystring":20,"util/tld":21,"util/util":23,"xd/json2":27}],11:[function(t,e){function n(){u=1;for(var t=0,e=a.length;e>t;t++)a[t]()}var r,i,o,u=0,a=[],c=!1,s=document.createElement("a");/^loade|c/.test(document.readyState)&&(u=1),document.addEventListener&&document.addEventListener("DOMContentLoaded",i=function(){document.removeEventListener("DOMContentLoaded",i,c),n()},c),s.doScroll&&document.attachEvent("onreadystatechange",r=function(){/^c/.test(document.readyState)&&(document.detachEvent("onreadystatechange",r),n())}),o=s.doScroll?function(t){window.self!=window.top?u?t():a.push(t):!function(){try{s.doScroll("left")}catch(e){return setTimeout(function(){o(t)},50)}t()}()}:function(t){u?t():a.push(t)},e.exports=o},{}],12:[function(t,e){var n=t("util/tld"),r=t("tfw/util/globals");e.exports=function(t,e){var i=/https?:\/\/([^\/]+).*/i;return t=t||document.referrer,t=i.test(t)&&RegExp.$1,e=e||document.location.host,r.dnt()?!0:n.isUrlSensitive(e)?!0:t&&n.isUrlSensitive(t)?!0:document.navigator?1==document.navigator.doNotTrack:navigator?1==navigator.doNotTrack||1==navigator.msDoNotTrack:!1}},{"tfw/util/globals":8,"util/tld":21}],13:[function(t,e){function n(t){return t=t||window,t.devicePixelRatio?t.devicePixelRatio>=1.5:t.matchMedia?t.matchMedia("only screen and (min-resolution: 144dpi)").matches:!1}function r(t){return t=t||y,/(Trident|MSIE \d)/.test(t)}function i(t){return t=t||y,/MSIE 6/.test(t)}function o(t){return t=t||y,/MSIE 7/.test(t)}function u(t){return t=t||y,/MSIE 8/.test(t)}function a(t){return t=t||y,/MSIE 9/.test(t)}function c(t){return t=t||y,/(iPad|iPhone|iPod)/.test(t)}function s(t){return t=t||y,/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)}function l(){return b}function f(t,e){return t=t||window,e=e||y,t.postMessage&&!(r(e)&&t.opener)}function d(t){t=t||navigator;try{return!!t.plugins["Shockwave Flash"]||!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){return!1}}function p(t,e,n){return t=t||window,e=e||navigator,n=n||y,"ontouchstart"in t||/Opera Mini/.test(n)||e.msMaxTouchPoints>0}function h(){var t=document.body.style;return void 0!==t.transition||void 0!==t.webkitTransition||void 0!==t.mozTransition||void 0!==t.oTransition||void 0!==t.msTransition}var m=t("util/domready"),w=t("util/typevalidator"),g=t("util/logger"),v=t("tfw/util/globals"),y=window.navigator.userAgent,b=!1,_=!1,x="twitter-csp-test";window.twttr=window.twttr||{},twttr.verifyCSP=function(t){var e=document.getElementById(x);_=!0,b=!!t,e&&e.parentNode.removeChild(e)},m(function(){var t;return i()||o()?b=!1:w.asBoolean(v.val("widgets:csp"))?b=!0:(t=document.createElement("script"),t.id=x,t.text="twttr.verifyCSP(false);",document.body.appendChild(t),void window.setTimeout(function(){_||(g.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'),g.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))},5e3))}),e.exports={retina:n,anyIE:r,ie6:i,ie7:o,ie8:u,ie9:a,ios:c,android:s,cspEnabled:l,flashEnabled:d,canPostMessage:f,touch:p,cssTransitions:h}},{"tfw/util/globals":8,"util/domready":11,"util/logger":17,"util/typevalidator":22}],14:[function(t,e){var n=t("util/util"),r={bind:function(t,e){return this._handlers=this._handlers||{},this._handlers[t]=this._handlers[t]||[],this._handlers[t].push(e)},unbind:function(t,e){if(this._handlers[t])if(e){var r=n.indexOf(this._handlers[t],e);r>=0&&this._handlers[t].splice(r,1)}else this._handlers[t]=[]},trigger:function(t,e){var r=this._handlers&&this._handlers[t];e=e||{},e.type=t,n.forEach(r,function(t){n.async(n.bind(t,this,[e]))})}};e.exports={Emitter:r}},{"util/util":23}],15:[function(t,e){var n={en:function(t,e){var n,r,i=parseInt(t,10),o=new RegExp("^\\"+e(","));return isNaN(i)?"":0>i?"0":1e4>i?i.toString().split("").reverse().join("").replace(/(\d{3})/g,"$1"+e(",")).split("").reverse().join("").replace(o,""):1e5>i?(n=(Math.floor(i/100)/10).toString(),n.replace(/\./,e("."))+e("K")):1e6>i?(n=Math.floor(i/1e3).toString(),n+e("K")):1e7>i?(r=(Math.floor(i/1e5)/10).toString(),-1!=r.indexOf(".")?r.replace(/\./,e("."))+e("M"):r+e(".")+"0"+e("M")):e("10M+")},ja:function(t,e){var n,r=t,i=new RegExp("^"+e(","));return r=parseInt(r,10),isNaN(r)?"":1e4>r?r.toString().split("").reverse().join("").replace(/(\d{3})/g,"$1"+e(",")).split("").reverse().join("").replace(i,""):1e6>r?(n=(Math.floor(r/1e3)/10).toString(),n.replace(/\./,e("."))+" 万"):1e7>r?(n=Math.floor(r/1e4).toString(),n+" 万"):"1,000 万以上"}};e.exports={number:function(t,e,r){return e||(e=function(t){return t}),r&&n[r]?n[r](t,e):n.en(t,e)}}},{}],16:[function(t,e){var n=t("util/util");e.exports=function(t,e,r){var i;if(r=r||document,t=t||{},e=e||{},t.name){try{i=r.createElement('<iframe name="'+t.name+'"></iframe>')}catch(o){i=r.createElement("iframe"),i.name=t.name}delete t.name}else i=r.createElement("iframe");return t.id&&(i.id=t.id,delete t.id),i.allowtransparency="true",i.scrolling="no",i.setAttribute("frameBorder",0),i.setAttribute("allowTransparency",!0),n.forIn(t,function(t,e){i.setAttribute(t,e)}),n.forIn(e,function(t,e){i.style[t]=e}),i}},{"util/util":23}],17:[function(t,e){function n(){c("info",s.toRealArray(arguments))}function r(){c("warn",s.toRealArray(arguments))}function i(){c("error",s.toRealArray(arguments))}function o(t){d&&(f[t]=a())}function u(t){var e;d&&(f[t]?(e=a(),n("_twitter",t,e-f[t])):i("timeEnd() called before time() for id: ",t))}function a(){return window.performance&&+window.performance.now()||+new Date}function c(t,e){if(window[l]&&window[l][t])switch(e.length){case 1:window[l][t](e[0]);break;case 2:window[l][t](e[0],e[1]);break;case 3:window[l][t](e[0],e[1],e[2]);break;case 4:window[l][t](e[0],e[1],e[2],e[3]);break;case 5:window[l][t](e[0],e[1],e[2],e[3],e[4]);break;default:0!==e.length&&window[l].warn&&window[l].warn("too many params passed to logger."+t)}}var s=t("util/util"),l=["con","sole"].join(""),f={},d=!!~location.href.indexOf("tw_debug=true");e.exports={info:n,warn:r,error:i,time:o,timeEnd:u}},{"util/util":23}],18:[function(t,e){var n,r,i,o=t("util/querystring");n=function(t){var e=t.search.substr(1);return o.decode(e)},r=function(t){var e=t.href,n=e.indexOf("#"),r=0>n?"":e.substring(n+1);return o.decode(r)},i=function(t){var e,i={},o=n(t),u=r(t);for(e in o)o.hasOwnProperty(e)&&(i[e]=o[e]);for(e in u)u.hasOwnProperty(e)&&(i[e]=u[e]);return i},e.exports={combined:i,fromQuery:n,fromFragment:r}},{"util/querystring":20}],19:[function(t,e){var n=t("util/util"),r=function(t){try{var e=t.then;if("function"==typeof e)return!0}catch(n){}return!1},i=function(t){Error.call(this,t)};i.prototype=n.createObject(Error.prototype);var o=function(){var t=[];return t.pump=function(e){n.async(function(){for(var n=t.length,r=0;n>r;)r++,t.shift()(e)})},t},u=function(t,e,i,o,u,a){var c=!1,s=this,l=function(t){n.async(function(){a("fulfilled"),o(t),e.pump(t)})},f=function(t){n.async(function(){a("rejected"),u(t),i.pump(t)})},d=function(t){return r(t)?void t.then(d,f):void l(t)},p=function(t){return function(e){c||(c=!0,t(e))}};this.resolve=p(d,"resolve"),this.fulfill=p(l,"fulfill"),this.reject=p(f,"reject"),this.cancel=function(){s.reject(new Error("Cancel"))},this.timeout=function(){s.reject(new Error("Timeout"))},a("pending")},a=function(t){var e,n,r=new o,i=new o,a="pending";this._addAcceptCallback=function(t){r.push(t),"fulfilled"==a&&r.pump(e)},this._addRejectCallback=function(t){i.push(t),"rejected"==a&&i.pump(n)};var c=new u(this,r,i,function(t){e=t},function(t){n=t},function(t){a=t});try{t&&t(c)}catch(s){c.reject(s)}},c=function(t){return"function"==typeof t},s=function(t,e,r){return c(t)?function(){try{var n=t.apply(null,arguments);e.resolve(n)}catch(r){e.reject(r)}}:n.bind(e[r],e)},l=function(t,e,n){return c(t)&&n._addAcceptCallback(t),c(e)&&n._addRejectCallback(e),n};n.aug(a.prototype,{then:function(t,e){var n=this;return new a(function(r){l(s(t,r,"resolve"),s(e,r,"reject"),n)})},"catch":function(t){var e=this;return new a(function(n){l(null,s(t,n,"reject"),e)})}}),a.isThenable=r;var f=function(t){return n.map(t,a.resolve)};a.any=function(){var t=f(arguments);return new a(function(e){if(t.length){var r=!1,i=function(t){r||(r=!0,e.resolve(t))},o=function(t){r||(r=!0,e.reject(t))};n.forEach(t,function(t){t.then(i,o)})}else e.reject("No futures passed to Promize.any()")})},a.every=function(){var t=f(arguments);return new a(function(e){if(t.length){var r=new Array(t.length),i=0,o=function(n,o){i++,r[n]=o,i==t.length&&e.resolve(r)};n.forEach(t,function(t,r){t.then(n.bind(o,null,[r]),e.reject)})}else e.reject("No futures passed to Promize.every()")})},a.some=function(){var t=f(arguments);return new a(function(e){if(t.length){var r=0,i=function(){r++,r==t.length&&e.reject()};n.forEach(t,function(t){t.then(e.resolve,i)})}else e.reject("No futures passed to Promize.some()")})},a.fulfill=function(t){return new a(function(e){e.fulfill(t)})},a.resolve=function(t){return new a(function(e){e.resolve(t)})},a.reject=function(t){return new a(function(e){e.reject(t)})},e.exports=a},{"util/util":23}],20:[function(t,e){function n(t){return encodeURIComponent(t).replace(/\+/g,"%2B").replace(/'/g,"%27")}function r(t){return decodeURIComponent(t)}function i(t){var e,r=[];for(e in t)null!==t[e]&&"undefined"!=typeof t[e]&&r.push(n(e)+"="+n(t[e]));return r.sort().join("&")}function o(t){var e,n,i,o,u={};if(t)for(e=t.split("&"),o=0;i=e[o];o++)n=i.split("="),2==n.length&&(u[r(n[0])]=r(n[1]));return u}function u(t,e){var n=i(e);return n.length>0?t.indexOf("?")>=0?t+"&"+i(e):t+"?"+i(e):t}function a(t){var e=t&&t.split("?");return 2==e.length?o(e[1]):{}}e.exports={url:u,decodeURL:a,decode:o,encode:i,encodePart:n,decodePart:r}},{}],21:[function(t,e){function n(t){return t in o?o[t]:o[t]=i.test(t)}function r(){return n(document.location.host)}var i=/^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,o={};e.exports={isUrlSensitive:n,isHostPageSensitive:r}},{}],22:[function(t,e){function n(t){return void 0!==t&&null!==t&&""!==t}function r(t){return o(t)&&t%1===0}function i(t){return o(t)&&!r(t)}function o(t){return n(t)&&!isNaN(t)}function u(t){return n(t)&&"array"==f.toType(t)}function a(t){if(!n(t))return!1;switch(t){case"on":case"ON":case"true":case"TRUE":return!0;case"off":case"OFF":case"false":case"FALSE":return!1;default:return!!t}}function c(t){return o(t)?t:void 0}function s(t){return i(t)?t:void 0}function l(t){return r(t)?t:void 0}var f=t("util/util");e.exports={hasValue:n,isInt:r,isFloat:i,isNumber:o,isArray:u,asInt:l,asFloat:s,asNumber:c,asBoolean:a}},{"util/util":23}],23:[function(t,e){function n(t){return t&&String(t).toLowerCase().indexOf("[native code]")>-1}function r(t){return h(arguments,function(e){o(e,function(e,n){t[e]=n})}),t}function i(t){return o(t,function(e,n){s(n)&&(i(n),l(n)&&delete t[e]),(void 0===n||null===n||""===n)&&delete t[e]}),t}function o(t,e){for(var n in t)(!t.hasOwnProperty||t.hasOwnProperty(n))&&e(n,t[n]);return t}function u(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function a(t,e){return t==u(e)}function c(t,e,n){return n=n||[],function(){var r=w(arguments,function(t){return t});return t.apply(e,n.concat(r))}}function s(t){return t===Object(t)}function l(t){if(!s(t))return!1;if(Object.keys)return!Object.keys(t).length;for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function f(t,e){window.setTimeout(function(){t.call(e||null)},0)}function d(t){return Array.prototype.slice.call(t)}var p=function(){var t=Array.prototype.indexOf;return n(t)?function(e,n){return e?t.apply(e,[n]):-1}:function(t,e){if(!t)return-1;for(var n=0,r=t.length;r>n;n++)if(e==t[n])return n;return-1}}(),h=function(){var t=Array.prototype.forEach;return n(t)?function(e,n){e&&n&&t.apply(e,[n])}:function(t,e){if(t&&e)for(var n=0,r=t.length;r>n;n++)e(t[n],n)}}(),m=function(){var t=Array.prototype.filter;return n(t)?function(e,n){return e?n?t.apply(e,[n]):e:null}:function(t,e){if(!t)return null;if(!e)return t;for(var n=[],r=0,i=t.length;i>r;r++)e(t[r])&&n.push(t[r]);return n}}(),w=function(){var t=Array.prototype.map;return n(t)?function(e,n){return e?n?t.apply(e,[n]):e:null}:function(t,e){if(!t)return null;if(!e)return t;for(var n=[],r=0,i=t.length;i>r;r++)n.push(e(t[r]));return n}}(),g=function(){var t=Array.prototype.reduce;return n(t)?function(e,n,r){return e?n?t.apply(e,[n,r]):r:null}:function(t,e,n){if(!t)return null;if(!e)return n;for(var r=n,i=0,o=t.length;o>i;i++)r=e(r,t[i],i,t);return r}}(),v=function(){var t=String.prototype.trim;return n(t)?function(e){return e&&t.apply(e)}:function(t){return t&&t.replace(/(^\s+|\s+$)/g,"")}}(),y=n(Object.create)?Object.create:function(t){function e(){}return e.prototype=t,new e};e.exports={aug:r,async:f,compact:i,forIn:o,forEach:h,filter:m,map:w,reduce:g,trim:v,indexOf:p,isNative:n,isObject:s,isEmptyObject:l,createObject:y,bind:c,toType:u,isType:a,toRealArray:d}},{}],24:[function(t,e){function n(){if(i)return i;if(u.isDynamicWidget()){var t,e=0,n=parent.frames.length;try{if(i=parent.frames[s])return i}catch(r){}if(a.anyIE())for(;n>e;e++)try{if(t=parent.frames[e],t&&"function"==typeof t.openIntent)return i=t}catch(r){}}}function r(){var t,e,i,a,c,s,p={};if("function"===(typeof arguments[0]).toLowerCase()?p.success=arguments[0]:p=arguments[0],t=p.success||function(){},e=p.timeout||function(){},i=p.nohub||function(){},a=p.complete||function(){},c=void 0!==p.attempt?p.attempt:d,!u.isDynamicWidget()||o)return i(),a(),!1;s=n(),c--;try{if(s&&s.trigger)return t(s),void a()}catch(h){}return 0>=c?(o=!0,e(),void a()):+new Date-l>f*d?(o=!0,void i()):void window.setTimeout(function(){r({success:t,timeout:e,nohub:i,attempt:c,complete:a})},f)}var i,o,u=t("tfw/util/env"),a=t("util/env"),c="twttrHubFrameSecure",s="http:"==document.location.protocol?"twttrHubFrame":c,l=+new Date,f=100,d=20;e.exports={withHub:r,contextualHubId:s,secureHubId:c}},{"tfw/util/env":7,"util/env":13}],25:[function(t,e){function n(){}var r=t("util/util"),i=t("util/events");r.aug(n.prototype,i.Emitter,{transportMethod:"",init:function(){},send:function(t){var e;this._ready?this._performSend(t):e=this.bind("ready",function(){this.unbind("ready",e),this._performSend(t)})},ready:function(){this.trigger("ready",this),this._ready=!0},isReady:function(){return!!this._ready},receive:function(t){this.trigger("message",t)}}),e.exports={Connection:n}},{"util/events":14,"util/util":23}],26:[function(t,e){function n(t,e){var n=e||Math.floor(100*Math.random()),r=['<object id="xdflashshim'+n+'" name="xdflashshim'+n+'"','type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"','width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">','<param name="movie" value="'+t+"&debug="+window.__XDDEBUG__+'">','<param name="wmode" value="window">','<param name="allowscriptaccess" value="always">',"</object>"].join(" ");return r}e.exports={object:n}},{}],27:[function(require,module,exports){function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,i,o,u,a=gap,c=e[t];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(t)),"function"==typeof rep&&(c=rep.call(e,t,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,n=0;o>n;n+=1)u[n]=str(n,c)||"null";return i=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+a+"]":"["+u.join(",")+"]",gap=a,i}if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)r=rep[n],"string"==typeof r&&(i=str(r,c),i&&u.push(quote(r)+(gap?": ":":")+i));else for(r in c)Object.hasOwnProperty.call(c,r)&&(i=str(r,c),i&&u.push(quote(r)+(gap?": ":":")+i));return i=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+a+"}":"{"+u.join(",")+"}",gap=a,i}}window.JSON||(window.JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var n,r,i=t[e];if(i&&"object"==typeof i)for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),void 0!==r?i[n]=r:delete i[n]);return reviver.call(t,e,i)}var j;if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}),module.exports=JSON},{}],28:[function(t,e){function n(t){return(JSON.parse||JSON.decode)(t)}function r(t){this.con=t}function i(){this.id=i.id++}var o=t("util/util"),u=t("util/events");t("xd/json2"),o.aug(r.prototype,{expose:function(t){this.con.bind("message",this._handleRequest(t))},call:function(t){var e,r=this;return this._requests||(this._requests={},this.con.bind("message",function(t){var e;try{t=n(t)}catch(i){return}t.callback&&"number"==typeof t.id&&(e=r._requests[t.id])&&(t.error?e.trigger("error",t):e.trigger("success",t),delete r._requests[t.id])})),e=new i,this._requests[e.id]=e,e.send(this.con,t,Array.prototype.slice.call(arguments,1))},_handleRequest:function(t){var e=this;return function(r){var i,o;try{r=n(r)}catch(u){return}r.callback||"number"==typeof r.id&&"function"==typeof t[r.method]&&(o=e._responseCallbacks(r.id),i=t[r.method].apply(t,r.params.concat(o)),"undefined"!=typeof i&&o[0](i))}},_responseCallbacks:function(t){var e=this.con;return[function(n){e.send(JSON.stringify({id:t,result:n,callback:!0}))},function n(r){e.send(JSON.stringify({id:t,error:n,callback:r}))}]}}),i.id=0,o.aug(i.prototype,u.Emitter,{send:function(t,e,n){return t.send(JSON.stringify({id:this.id,method:e,params:n})),this},success:function(t){return this.bind("success",t),this},error:function(t){return this.bind("error",t),this}}),e.exports=function(t){return new r(t)}},{"util/events":14,"util/util":23,"xd/json2":27}],29:[function(t,e){function n(t){var e=[];return s.forIn(t,function(t,n){e.push(t+"="+n)}),e.join(",")}function r(){}function i(t){this.transportMethod="PostMessage",this.options=t,this._createChild()}function o(t){this.transportMethod="Flash",this.options=t,this.token=Math.random().toString(16).substring(2),this._setup()}function u(t){this.transportMethod="Fallback",this.options=t,this._createChild()}var a,c=t("xd/base"),s=t("util/util"),l=t("util/env"),f="__ready__",d=0;r.prototype=new c.Connection,s.aug(r.prototype,{_createChild:function(){this.options.window?this._createWindow():this._createIframe()},_createIframe:function(){function t(){o.child=e.contentWindow,o._ready||o.init()}var e,n,r,i,o=this,u={allowTransparency:!0,frameBorder:"0",scrolling:"no",tabIndex:"0",name:this._name()},c=s.aug(s.aug({},u),this.options.iframe),l=!1;window.postMessage?(a||(a=document.createElement("iframe")),e=a.cloneNode(!1)):e=document.createElement('<iframe name="'+c.name+'">'),e.id=c.name,s.forIn(c,function(t,n){"style"!=t&&e.setAttribute(t,n)}),i=e.getAttribute("style"),i&&"undefined"!=typeof i.cssText?i.cssText=c.style:e.style.cssText=c.style,e.addEventListener?e.addEventListener("load",t,!1):e.attachEvent("onload",function(){l||(l=!0,t())}),e.src=this._source(),(n=this.options.appendTo)?n.appendChild(e):(r=this.options.replace)?(n=r.parentNode,n&&n.replaceChild(e,r)):document.body.insertBefore(e,document.body.firstChild)},_createWindow:function(){var t,e={width:550,height:450,personalbar:"0",toolbar:"0",scrollbars:"1",resizable:"1"},r=s.aug(s.aug({},e),this.options.window),i=screen.width,o=screen.height,u=this._name();r.left=r.left||Math.round(i/2-r.width/2),r.top=r.top||Math.round(o/2-r.height/2),o<r.height&&(r.top=0,r.height=o),t=window.open(this._source(),u,n(r)),t&&t.focus(),this.child=t,this.init()},_source:function(){return this.options.src},_name:function(){var t="_xd_"+d++;return window.parent&&window.parent!=window&&window.name&&(t=window.name+t),t}}),i.prototype=new r,s.aug(i.prototype,{init:function(){function t(t){t.source===e.child&&(e._ready||t.data!==f?e.receive(t.data):e.ready())}var e=this;window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent("onmessage",t)},_performSend:function(t){this.child.postMessage(t,this.options.src)}}),o.prototype=new r,s.aug(o.prototype,{_setup:function(){var e=this,n=t("xd/flash");window["__xdcb"+e.token]={receive:function(t){e._ready||t!==f?e.receive(t):e.ready()},loaded:function(){}};var r=document.createElement("div");r.innerHTML=n.object("https://platform.twitter.com/xd/ft.swf?&token="+e.token+"&parent=true&callback=__xdcb"+e.token+"&xdomain="+e._host(),e.token),document.body.insertBefore(r,document.body.firstChild),e.proxy=r.firstChild,e._createChild()},init:function(){},_performSend:function(t){this.proxy.send(t)},_host:function(){return this.options.src.replace(/https?:\/\//,"").split(/(:|\/)/)[0]},_source:function(){return this.options.src+(this.options.src.match(/\?/)?"&":"?")+"xd_token="+window.escape(this.token)}}),u.prototype=new r,s.aug(u.prototype,{init:function(){},_performSend:function(){}}),e.exports={connect:function(t){return!l.canPostMessage()||l.anyIE()&&t.window?l.anyIE()&&l.flashEnabled()?new o(t):new u(t):new i(t)}}},{"util/env":13,"util/util":23,"xd/base":25,"xd/flash":26}]},{},[1]);;