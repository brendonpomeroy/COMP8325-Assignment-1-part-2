(function() { var b=window,f="chrome",g="tick",k="jstiming";(function(){function d(a){this.t={};this.tick=function(a,d,c){var e=void 0!=c?c:(new Date).getTime();this.t[a]=[e,d];if(void 0==c)try{b.console.timeStamp("CSI/"+a)}catch(h){}};this[g]("start",null,a)}var a;b.performance&&(a=b.performance.timing);var n=a?new d(a.responseStart):new d;b.jstiming={Timer:d,load:n};if(a){var c=a.navigationStart,h=a.responseStart;0<c&&h>=c&&(b[k].srt=h-c)}if(a){var e=b[k].load;0<c&&h>=c&&(e[g]("_wtsrt",void 0,c),e[g]("wtsrt_","_wtsrt",h),e[g]("tbsd_","wtsrt_"))}try{a=null,
b[f]&&b[f].csi&&(a=Math.floor(b[f].csi().pageT),e&&0<c&&(e[g]("_tbnd",void 0,b[f].csi().startE),e[g]("tbnd_","_tbnd",c))),null==a&&b.gtbExternal&&(a=b.gtbExternal.pageT()),null==a&&b.external&&(a=b.external.pageT,e&&0<c&&(e[g]("_tbnd",void 0,b.external.startE),e[g]("tbnd_","_tbnd",c))),a&&(b[k].pt=a)}catch(p){}})();b.tickAboveFold=function(d){var a=0;if(d.offsetParent){do a+=d.offsetTop;while(d=d.offsetParent)}d=a;750>=d&&b[k].load[g]("aft")};var l=!1;function m(){l||(l=!0,b[k].load[g]("firstScrollTime"))}b.addEventListener?b.addEventListener("scroll",m,!1):b.attachEvent("onscroll",m);
 })();