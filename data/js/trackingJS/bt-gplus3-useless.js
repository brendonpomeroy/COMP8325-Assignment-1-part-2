(function(){var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var g=encodeURIComponent,h=window,k=decodeURIComponent,n="shift",p="replace",q="split",t="push",u="test",w="length",x="join";var D=h,E=document,aa=D.location,ba=function(){},ca=/\[native code\]/,F=function(a,b,c){return a[b]=a[b]||c},da=function(a){for(var b=0;b<this[w];b++)if(this[b]===a)return b;return-1},ea=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[w];d++){var e=a[d];e!=c&&b[t](e);c=e}return b},H=function(){var a;if((a=Object.create)&&ca[u](a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},I=F(D,"gapi",{});var J;J=F(D,"___jsl",H());F(J,"I",0);F(J,"hel",10);var K=function(){var a=aa.href,b;if(J.dpo)b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=k(a[2])}catch(e){}}return b},fa=function(a){var b=F(J,"PQ",[]);J.PQ=[];var c=b[w];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},L=function(a){return F(F(J,"H",H()),a,H())};var M=F(J,"perf",H()),N=F(M,"g",H()),ga=F(M,"i",H());F(M,"r",[]);H();H();var P=function(a,b,c){var d=M.r;"function"===typeof d?d(a,b,c):d[t]([a,b,c])},R=function(a,b,c){b&&0<b[w]&&(b=Q(b),c&&0<c[w]&&(b+="___"+Q(c)),28<b[w]&&(b=b.substr(0,28)+(b[w]-28)),c=b,b=F(ga,"_p",H()),F(b,c,H())[a]=(new Date).getTime(),P(a,"_p",c))},Q=function(a){return a[x]("__")[p](/\./g,"_")[p](/\-/g,"_")[p](/\,/g,"_")};var S=H(),T=[],U=function(a){throw Error("Bad hint"+(a?": "+a:""));};T[t](["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=F(J,b,[]).concat(c):F(J,b,c)}if(b=a.u)a=F(J,"us",[]),a[t](b),(b=/^https:(.*)$/.exec(b))&&a[t]("http:"+b[1])}]);var ha=/^(\/[a-zA-Z0-9_\-]+)+$/,ia=/^[a-zA-Z0-9\-_\.,!]+$/,ja=/^gapi\.loaded_[0-9]+$/,ka=/^[a-zA-Z0-9,._-]+$/,oa=function(a,b,c,d){var e=a[q](";"),f=e[n](),m=S[f],l=null;m?l=m(e,b,c,d):U("no hint processor for: "+f);l||U("failed to generate load url");b=l;c=b.match(la);(d=b.match(ma))&&1===d[w]&&na[u](b)&&c&&1===c[w]||U("failed sanity: "+a);return l},qa=function(a,b,c,d){a=pa(a);ja[u](c)||U("invalid_callback");b=V(b);d=d&&d[w]?V(d):null;var e=function(a){return g(a)[p](/%2C/g,",")};return[g(a.e)[p](/%2C/g,
",")[p](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.b?"/rs="+e(a.b):"",a.c?"/zcms="+e(a.c):"","/cb=",e(c)][x]("")},pa=function(a){"/"!==a.charAt(0)&&U("relative path");for(var b=a.substring(1)[q]("/"),c=[];b[w];){a=b[n]();if(!a[w]||0==a.indexOf("."))U("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c[t](a)}a={};for(var d=0,e=b[w];d<e;++d){var f=b[d][q]("="),m=k(f[0]),l=k(f[1]);2==f[w]&&m&&l&&(a[m]=a[m]||l)}b="/"+
c[x]("/");ha[u](b)||U("invalid_prefix");c=W(a,"k",!0);d=W(a,"am");e=W(a,"rs");a=W(a,"zcms");return{e:b,version:c,a:d,b:e,c:a}},V=function(a){for(var b=[],c=0,d=a[w];c<d;++c){var e=a[c][p](/\./g,"_")[p](/-/g,"_");ka[u](e)&&b[t](e)}return b[x](",")},W=function(a,b,c){a=a[b];!a&&c&&U("missing: "+b);if(a){if(ia[u](a))return a;U("invalid: "+b)}return null},na=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ma=/\/cb=/g,la=/\/\//g,ra=/^\/[a-z_]+\//,sa=function(){var a=K();if(!a)throw Error("Bad hint");
return a};S.m=function(a,b,c,d){(a=a[0])||U("missing_hint");return"https://apis.google.com"+qa(a,b,c,d)};var X=decodeURI("%73cript"),Y=function(a,b){for(var c=[],d=0;d<a[w];++d){var e=a[d];e&&0>da.call(b,e)&&c[t](e)}return c},ta=function(a){"loading"!=E.readyState?Z(a):E.write("<"+X+' src="'+encodeURI(a)+'"></'+X+">")},Z=function(a){ua(a)},ua=function(a){var b=E.createElement(X);b.setAttribute("src",a);b.async="true";(a=E.getElementsByTagName(X)[0])?a.parentNode.insertBefore(b,a):(E.head||E.body||E.documentElement).appendChild(b)},va=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<T[w];d++){var e=T[d][0],
f=T[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}},xa=function(a,b){wa(function(){var c;c=b===K()?F(I,"_",H()):H();c=F(L(b),"_",c);a(c)})},za=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);va(a,c);var d=a?a[q](":"):[],e=c.h||sa(),f=F(J,"ah",H());if(f["::"]&&d[w]){for(var m=[],l=null;l=d[n]();){var r=l[q]("."),r=f[l]||f[r[1]&&"ns:"+r[0]||""]||e,y=m[w]&&m[m[w]-1]||null,B=y;y&&y.hint==r||(B={hint:r,d:[]},m[t](B));B.d[t](l)}var C=m[w];if(1<C){var G=c.callback;G&&
(c.callback=function(){0==--C&&G()})}for(;d=m[n]();)ya(d.d,c,d.hint)}else ya(d||[],c,e)},ya=function(a,b,c){a=ea(a)||[];var d=b.callback,e=b.config,f=b.timeout,m=b.ontimeout,l=null,r=!1;if(f&&!m||!f&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var y=F(L(c),"r",[]).sort(),B=F(L(c),"L",[]).sort(),C=[].concat(y),G=function(a,b){if(r)return 0;D.clearTimeout(l);B[t].apply(B,v);var d=((I||{}).config||{}).update;d?d(e):e&&F(J,"cu",[])[t](e);if(b){R("me0",a,C);try{xa(b,
c)}finally{R("me1",a,C)}}return 1};0<f&&(l=D.setTimeout(function(){r=!0;m()},f));var v=Y(a,B);if(v[w]){var v=Y(a,y),z=F(J,"CP",[]),A=z[w];z[A]=function(a){if(!a)return 0;R("ml1",v,C);var b=function(b){z[A]=null;G(v,a)&&fa(function(){d&&d();b()})},c=function(){var a=z[A+1];a&&a()};0<A&&z[A-1]?z[A]=function(){b(c)}:b(c)};if(v[w]){var O="loaded_"+J.I++;I[O]=function(a){z[A](a);I[O]=null};a=oa(c,v,"gapi."+O,y);y[t].apply(y,v);R("ml0",v,C);b.sync||D.___gapisync?ta(a):Z(a,b,O)}else z[A](ba)}else G(v)&&
d&&d()};var wa=function(a){if(J.hee&&0<J.hel)try{return a()}catch(b){J.hel--,za("debug_error",function(){try{h.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};I.load=function(a,b){return wa(function(){return za(a,b)})};var Aa=/^(\/\* JS \*\/ ){0,1}gapi.loaded_\d+\(/,Ba=function(a,b,c,d){(d=d.before_eval_cb)&&d();D.execScript?D.execScript(b,"JavaScript"):c?a.eval(b):(a=a.document,c=a.createElement("script"),c.defer=!1,c.appendChild(a.createTextNode(b)),a.body.appendChild(c),a.body.removeChild(c))},Ca=function(a,b,c,d){var e=D.XMLHttpRequest;a=a[p](/^https?:\/\/[^\/]+\//,"/");if(!ra[u](a))throw"Bad URL "+a;var f=new e;f.open("GET",a,!0);f.onreadystatechange=function(){if(4===f.readyState)if(200===f.status){var e=
f.responseText,l=b.src_cb;l&&l();var r=!1;h.GAPI_EVAL&&(e+="\n//@ sourceURL="+encodeURI(a),r=!0);l=function(){if(Aa[u](e))Ba(D,e,r,b);else I[c](function(){Ba(this,e,r,b)})};d?d(l):l()}else throw"Error requesting "+a+": "+f.statusText+"\nCurrent location: "+location.href;};f.send(null)};var Da="mousemove mouseover mousedown click touchstart keydown focus resize".split(" "),Ea=["onmouseover","onmousedown","onkeydown","onfocusin"],Fa=function(){if(F(J,"LI",!1))return!0;J.LI=!0;return!1},Ga=0,Ha=function(){J.LE=!0;for(var a=J.LQ,b=0;a&&b<a[w];b++)(0,a[b])();J.LQ=null},Ia=function(){function a(a){for(var d=0;d<Da[w];d++)D[a+"EventListener"](Da[d],b,!0)}if(!Fa()){var b=function(b){"resize"==b.type&&2>++Ga||(a("remove"),Ha())};a("add")}},Ja=function(){function a(a){for(var d=0;d<Ea[w];d++)E[a+
"Event"](Ea[d],b)}if(!Fa()){var b=function(b){if(!("resize"==b.type&&2>++Ga)){a("detach");var d=E.createEventObject(b);Ha();d.srcElement.fireEvent("on"+d.type,d);b.cancelBubble=!0;b.stopPropagation&&b.stopPropagation()}};a("attach")}},Z=function(a,b,c){var d=!0;D.XMLHttpRequest&&!/\/widget\//[u](a)&&D.JSON?D.addEventListener?Ia():E.attachEvent&&E.createEventObject?Ja():d=!1:d=!1;d?Ca(a,b,c,function(a){J.LE?a():F(J,"LQ",[])[t](a)}):ua(a)};N.bs0=h.gapi._bs||(new Date).getTime();P("bs0");N.bs1=(new Date).getTime();P("bs1");delete h.gapi._bs;})();
gapi.load("",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"llang":"en","client":{"headers":{"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"],"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-role","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"]},"rms":"migrated","cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":true,"disableRealtimeCallback":false,"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"photocomments":{"url":":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"playreview":{"url":"https://play.google.com/store/ereview?usegapi\u003d1"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"youtube":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"reportabuse":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"shortlists":{"url":""},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},":source:":"3p","blogger":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1"},":im_socialhost:":"https://plus.googleapis.com","ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","forceIm":false,"reportExceptionRate":0.05,"rethrowException":false},"enableContextualSignin":false,"enableSigninTooltip":false,"deviceType":"desktop","inline":{"css":1},"lexps":[100,97,79,109,45,17,117,115,81,127,123,122,61,30],"include_granted_scopes":true,"oauth-flow":{"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe"},"report":{"apiRate":{"gapi\\.signin\\..*":0.05},"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"]},"csi":{"rate":0.01},"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.0F4EJxk-R8Q.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAGLTcCPY9Y8IgFSKBPyOxaI2jCzg0nH-9g","u":"https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi\u003d1\u0026size\u003dmedium\u0026origin\u003dhttp://www.backpackinglight.com\u0026url\u003dhttp://backpackinglight.com/\u0026gsrc\u003d3p\u0026ic\u003d1\u0026jsh\u003dm;/_/scs/apps-static/_/js/k%3Doz.gapi.en.0F4EJxk-R8Q.O/m%3D__features__/am%3DAQ/rt%3Dj/d%3D1/t%3Dzcms/rs%3DAGLTcCPY9Y8IgFSKBPyOxaI2jCzg0nH-9g","hee":true,"fp":"9fbc452c4cc74130ee7b9673f35437adcc5529da","dpo":false},"fp":"9fbc452c4cc74130ee7b9673f35437adcc5529da","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin","share"]}});var s = 'GAPI_INTERACTIVE'; window[s] = 'loading'; var c = 0; function cb() {if (++c == 2) {window[s] = 'interactive'; gapi.inline.ping('widget-interactive-' + window.name);}}gapi.load('googleapis.client,iframes-styles-bubble-internal,gapi.iframes.style.common,gapi.iframes.iframer', {'callback': function() {cb();var sw = window['__sw']; if (sw) {sw();}var sz = __sp(); if (sz) {iframes.ready(sz, {'canAutoClose': function() {var f = window['__CAN_AUTOCLOSE_BUBBLE']; return f ? f() : true;}, 'showSharebox': function() {var f = window['__SHOW_SHAREBOX']; return f ? f() : false;}});}}, 'src_cb': cb, 'before_eval_cb': function() {gapi.inline.tick('wje0', new Date().getTime());}});gapi.load('p1b,p1p', {'h': 'm;\/_\/scs\/apps-static\/_\/js\/k\x3doz.plusone.en.4G3vR3bZaXE.O\/m\x3dp1b,p1p\/rt\x3dj\/d\x3d1\/t\x3dzcms\/rs\x3dAGLTcCMNbtLvfKXkIk4lWBmNlTCHE1WPvA','callback': function() {cb();gapi.inline.tick('wje1', new Date().getTime());}, 'src_cb': cb});})(); gapi_sendRenderStart();