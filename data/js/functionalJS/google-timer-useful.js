(function(){if(google.timers&&google.timers.load.t){var f=function(){google.timers.load.t&&(google.timers.load.t.ol=(new Date).getTime(),google.timers.load.t.iml=b,google.kCSI.imc=c,google.kCSI.imn=d,google.kCSI.imp=e,google.stt&&(google.kCSI.stt=google.stt),google.csiReport&&google.csiReport())},k=function(a){b=(new Date).getTime();++c;a=a||window.event;a=a.target||a.srcElement;h(a,k);},h=function(a,g){a.removeEventListener?
(a.removeEventListener("load",g,!1),a.removeEventListener("error",g,!1)):(a.detachEvent("onload",g),a.detachEvent("onerror",g))},d,c,e,b;var l=document.getElementsByTagName("img");d=l.length;for(var m=c=0,n;m<d;++m){n=l[m];var p="string"!=
typeof n.src||!n.src,q=p||n.complete;p&&n.getAttribute("data-bsrc")&&(q=!1);q?++c:n.addEventListener?(n.addEventListener("load",k,!1),n.addEventListener("error",k,!1)):(n.attachEvent("onload",k),n.attachEvent("onerror",k))}e=d-c;window.addEventListener?window.addEventListener("load",f,!1):window.attachEvent&&window.attachEvent("onload",f);google.timers.load.t.prt=b=google.time()};})();