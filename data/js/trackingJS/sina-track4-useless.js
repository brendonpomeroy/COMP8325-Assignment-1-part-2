
            var sSrc=location.search.split("?")[1],aSw=("undefined"==typeof sSrc?"":sSrc).toLowerCase().split("&"),i=0,oSw={},tmp,udp={},_f=Math.floor(999*Math.random()),requrl="http://log.mmstat.com/t.gif",cc,ls,loop=6,looptime=500,hourms=36e5;window.onload=function(){function t(t,u,e){var n=udp.udSet(t,u,e),d=udp.lsSet(t,u,e),o=udp.gsSet(t,u,e);return n||d||o}function u(t){var u=udp.lsGet(t);return o(u)||(u=udp.udGet(t),o(u)||(u=udp.gsGet(t))),o(u)?u:!1}function e(t){return"undefined"!=typeof udp.udObj&&(udp.udObj.removeAttribute(t),udp.udObj.save(udp.udPath)),"undefined"!=typeof udp.lsObj&&udp.lsObj.removeItem(t),"undefined"!=typeof udp.gsObj&&delete udp.gsObj[location.hostname][t],!0}function n(t,u){return(new Date).getTime()+(null===u?1:u)*hourms}function d(t,u){var n=parseInt(u,10),d=(new Date).getTime();return u?!/\d+/.test(u)||d>n?(e(t),void 0):n:void 0}function o(t){return(t||"").length>23||/\d+/.test(t||"")}function r(t){for(var u=document.cookie.split("; "),e=0,n="";e<u.length;e++)if(n=u[e].split("="),n[0]===t)return o(n[1])?n[1]:!1}function c(t){udp.log("create acookie start");var u=new Image;u.id=(1e3*Math.random()).toString()+(new Date).getTime().toString(),window[u.id]=u,u.src=t,udp.log("create "+t)}for(oSw.ls=!0,oSw.ud=!0,oSw.gs=!0;i<aSw.length;i++)tmp=aSw[i].split("="),oSw[tmp[0]]="1"==tmp[1]?!0:!1;udp.debug=0,udp.log=function(t,u,e){udp.debug&&(e||(e="JS"),u||(u="info"),t="["+(new Date).getTime()+"] ::: "+t,window.console&&console.log&&console.log(t),udp.logger&&(udp.logger.innerHTML+=t+"<br/>"))};var p=location.pathname.split("/");p[p.length-1]="",udp.path=p.join("/"),window.attachEvent&&!window.opera&&oSw.ud&&(udp.ud=!0,udp.udObj=document.getElementById("ieudp"),udp.udObj.addBehavior("#default#userData"),udp.udPath=encodeURIComponent(udp.path));try{oSw.ls=window.localStorage}catch(a){oSw.ls=!1}if(udp.lsObj=oSw.ls?window.localStorage:!1,udp.gsObj=oSw.gs?window.globalStorage:!1,udp.udSet=function(t,u,e){if(udp.ud){var d=n(u,e);try{udp.udObj.load(udp.udPath),udp.udObj.setAttribute(t,d),udp.udObj.save(udp.udPath)}catch(o){return!1}return!0}},udp.udGet=function(t){if(udp.ud){try{udp.udObj.load(udp.udPath)}catch(u){return}return d(t,udp.udObj.getAttribute(t))}return!1},udp.lsSet=function(t,u,e){if(udp.lsObj){var d=n(u,e);try{udp.lsObj.setItem(t,d)}catch(o){return!1}return!0}return!1},udp.lsGet=function(t){if(udp.lsObj)try{return d(t,udp.lsObj.getItem(t))}catch(u){return}},udp.gsSet=function(t,u,e){if(udp.gsObj){var d=n(u,e);try{udp.gsObj[location.hostname][t]=d}catch(o){return!1}return!0}return!1},udp.gsGet=function(t){if(udp.gsObj)try{return d(t,upp.gsObj[t])}catch(u){return}return!1},cc=r("cna"),cui=r("cnaui"),ls=u("cna"),lui=u("cnaui"),!cc||!ls){cc&&(requrl=requrl+"?cna="+cc+"&cache="+_f,cui&&(requrl=requrl+"&cnaui="+cui)),c(requrl),tmp=1;var l=setInterval(function(){udp.log("start loop :"+tmp),cc=r("cna"),cui=r("cnaui"),tmp+=1,(tmp==loop||cc)&&(clearInterval(l),t("cna",cc,null),t("cnaui",cui,null),udp.log("loop endl ,set ls = "+cc),udp.log("loop endl ,set lui = "+cui))},looptime);udp.debug&&setTimeout(function(){udp.log("cna="+r("cna")),udp.log("cnaui="+r("cnaui"))},2e3)}};
        