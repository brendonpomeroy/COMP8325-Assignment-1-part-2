(function(){var d=function(a,b,c){return a.call.apply(a.bind,arguments)},e=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,p);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},f=function(a,b,c){f=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:e;return f.apply(null,arguments)},g=Date.now||function(){return+new Date};var h=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var k=document,l=window;var q=function(a,b,c,p){this.h=!1;this.g=-1;this.j=a;this.k=b;this.i=p;c&&m()&&n(this,2);a=f(this.m,this);h(k,"visibilitychange",a);h(k,"mozvisibilitychange",a);h(k,"msvisibilitychange",a);h(k,"webkitvisibilitychange",a);a=f(this.l,this);h(l,"click",a)};q.prototype.m=function(){if(m())this.h&&(this.g=g(),n(this,0));else{if(-1!=this.g){var a=g()-this.g;this.g=-1;n(this,1,a)}this.i&&n(this,3)}};q.prototype.l=function(){this.h=!0;var a=f(this.n,this);l.setTimeout(a,5E3)};q.prototype.n=function(){this.h=!1};var n=function(a,b,c){a=["//pagead2.googlesyndication.com/pagead/gen_204?id=wfocus","&gqid="+a.j,"&qqid="+a.k].join("");0==b&&(a+="&return=0");1==b&&(a+="&return=1&timeDelta="+c);2==b&&(a+="&bgload=1");3==b&&(a+="&fg=1");b=a;l.google_image_requests||(l.google_image_requests=[]);c=l.document.createElement("img");c.src=b;l.google_image_requests.push(c)},m=function(){return"undefined"!==typeof k.hidden?k.hidden:"undefined"!==typeof k.mozHidden?k.mozHidden:"undefined"!==typeof k.msHidden?k.msHidden:"undefined"!==typeof k.webkitHidden?k.webkitHidden:!1};var r=function(a,b,c){return a?new q(a.getEscapedGwsQueryId(),a.getEscapedQemQueryId(),b,c):null},t=["wfocusinit"],u=this;t[0]in u||!u.execScript||u.execScript("var "+t[0]);for(var v;t.length&&(v=t.shift());){var w;if(w=!t.length)w=void 0!==r;w?u[v]=r:u=u[v]?u[v]:u[v]={}};})();wfocusinit(adSlot,false,false);