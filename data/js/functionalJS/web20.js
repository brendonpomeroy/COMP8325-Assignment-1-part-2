ISQ.Html=initializeNS("ISQ.Html");ISQ.Html._=function(d,a){if(!d){return null}var b=null;if(typeof(d)==="string"){if(ISQ.Http.browser.app==="ie"){if(!ISQ.Html.IE_idMap){ISQ.Html.IE_idMap=new Array();if(typeof(ISQ.Console)!=="undefined"&&typeof(sessionGC)==="function"){sessionGC().add(ISQ.Html.IE_idMap);ISQ.Html.IE_idMap.dispose=function(){ISQ.Html.IE_idMap=new Array()}}}if(!a){b=ISQ.Html.IE_idMap[d];if(ISQ.Http.browser.isIE&&b){var c=b;do{c=c.parentNode}while(c!==null&&c!==document);if(c===null){b=null}}}if(!b||a===true){b=document.getElementById(d);if(b){ISQ.Html.IE_idMap[d]=b}}}else{b=document.getElementById(d)}}else{if(typeof(d)==="object"&&typeof(d.parentNode)!=="undefined"&&typeof(d.nodeName)!=="undefined"){b=d}}return b};if(typeof(window._)!=="function"){window._=ISQ.Html._}ISQ.Html.pageDirection=function(){if(!ISQ.Html._pageDirection){ISQ.Html._pageDirection=document.body.getAttribute("dir");if(!ISQ.Html._pageDirection){ISQ.Html._pageDirection=ISQ.CSS.getValue(document.body,"direction")}if(!ISQ.Html._pageDirection){ISQ.Html._pageDirection="ltr"}}return ISQ.Html._pageDirection};ISQ.Html.position_new=function(a,c){if(c){return ISQ.Html.position(a,c)}if(typeof(a.getBoundingClientRect)=="undefined"||!a.getBoundingClientRect){return ISQ.Html.position(a,c)}var b=a.getBoundingClientRect();b.x=b.left;b.y=b.top;return b};ISQ.Html.position=function(b,g,d){var f={x:-1,y:-1};b=ISQ.Html._(b);if(b===null){return f}var e=ISQ.Html._(g)||document.body;f.x=0;f.y=0;var a=b;while(a!==null&&a!==e&&a!==document.body&&a.nodeName!=="HTML"){f.x+=a.offsetLeft;f.x-=a.scrollLeft;var c=parseInt(ISQ.CSS.getElementStyle(a,"margin-left"));f.x-=isNaN(c)?0:c;f.y+=a.offsetTop;f.y-=a.scrollTop;a=a.offsetParent}if(e!==document.body&&(a===document.body||a===null)){f.x=-1;f.y=-1}b=null;g=null;return f};ISQ.Html.setMinHeight=function(a,b){a=ISQ.Html._(a);if(a===null){return}if(a.offsetHeight<b){a.style.height=b+"px"}};ISQ.Html.actualHeight=function(d){var c=$(d);var e=c.height();var b=c.css("border-top");if(b){e+=parseInt(b)}var a=c.css("border-bottom");
if(a){e+=parseInt(a)}var g=c.css("padding-top");if(g){e+=parseInt(g)}var f=c.css("padding-bottom");if(f){e+=parseInt(f)}return e};ISQ.Html.screenSize=function(){return ISQ.Html.pageSize(true)};ISQ.Html.scrollBarWidth=function(){return 17};ISQ.Html.scrollBarWidth_afterCheck=function(){var a=ISQ.Html.screenSize();if(document.body.scrollHeight===a.h){return 0}return ISQ.Html.scrollBarWidth()};ISQ.Html.pageSize=function(b,a){var c={w:0,h:0};var d={};if(self.innerHeight){d.w=self.innerWidth;d.h=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){d.w=document.documentElement.clientWidth;d.h=document.documentElement.clientHeight}else{if(document.body){d.w=document.body.clientWidth;d.h=document.body.clientHeight}}}var f=ISQ.Html.getScroll("width");var e=ISQ.Html.getScroll("height");if(b||d.w>f){c.w=d.w}else{c.w=f}if((b&&(!ISQ.Http.browser.isIPad||window.top!==window))||d.h>e){c.h=d.h}else{c.h=e}if(e>d.h){if(ISQ.CSS.getElementStyle(document.body,"overflow")==="hidden"){return c}if(ISQ.CSS.getElementStyle(document.body,"overflow-y")==="hidden"){return c}if(ISQ.Http.browser.app!=="ie"||ISQ.Http.browser.isIE10||ISQ.Http.browser.isIE9||ISQ.Http.browser.isIE11){if(!a){c.w-=ISQ.Html.scrollBarWidth()}}else{if(a){c.w+=ISQ.Html.scrollBarWidth()}}}return c};ISQ.Html.getScroll=function(c){c=c||"top";var a=0;var b=0;if(c==="top"){if(ISQ.Http.browser.app!=="ie"||ISQ.Http.browser.isIE10||ISQ.Http.browser.isIE11){b=window.pageYOffset}if(ISQ.Http.browser.app!=="ie"){b=ISQ.Html.returnMaxScroll(b,window.scrollY)}b=ISQ.Html.returnMaxScroll(b,document.body.scrollTop);b=ISQ.Html.returnMaxScroll(b,document.documentElement.scrollTop);b=ISQ.Html.returnMaxScroll(b,document.body.parentNode.scrollTop)}else{if(c==="left"){if(ISQ.Http.browser.app!=="ie"||ISQ.Http.browser.isIE10||ISQ.Http.browser.isIE11){b=window.pageXOffset}if(ISQ.Http.browser.app!=="ie"){b=ISQ.Html.returnMaxScroll(b,window.scrollX)}b=ISQ.Html.returnMaxScroll(b,document.body.scrollLeft);b=ISQ.Html.returnMaxScroll(b,document.documentElement.scrollLeft);
b=ISQ.Html.returnMaxScroll(b,document.body.parentNode.scrollLeft)}else{if(c==="height"){switch(ISQ.Http.browser.app){case"chrome":case"ff":case"opera":case"safari":if(window.top===window){b=document.documentElement.scrollHeight}else{b=document.body.scrollHeight}break;default:b=ISQ.Html.returnMaxScroll(b,document.body.scrollHeight);b=ISQ.Html.returnMaxScroll(b,document.documentElement.scrollHeight);b=ISQ.Html.returnMaxScroll(b,document.body.parentNode.scrollHeight);break}}else{if(c==="width"){b=ISQ.Html.returnMaxScroll(b,document.body.scrollWidth);b=ISQ.Html.returnMaxScroll(b,document.documentElement.scrollWidth);b=ISQ.Html.returnMaxScroll(b,document.body.parentNode.scrollWidth)}}}}return b};ISQ.Html.returnMaxScroll=function(a,b){if(a>b){return a}return b};ISQ.Html.getEventTarget=function(a){return window.event?window.event.srcElement:a?a.target:null};ISQ.Html.getDomEvent=function(a){if(ISQ.Base.isDerivedOf(a,ISQ.Html.DomEvent)){return a}return new ISQ.Html.DomEvent(a)};ISQ.Html.DomEvent=ISQ.Base.extend({name:"ISQ.Html.DomEvent"});ISQ.Html.DomEvent.prototype.ctor=function(a){this.domEvent=window.event||a;this.target=ISQ.Html.getEventTarget(a)};ISQ.Html.DomEvent.prototype.dtor=function(){delete target;delete domEvent};ISQ.Html.DomEvent.prototype.cancel=function(){if(this.domEvent.stopPropagation){this.domEvent.stopPropagation()}if(this.domEvent.cancelBubble!=null){this.domEvent.cancelBubble=true}};ISQ.Html.DomEvent.prototype.target=null;ISQ.Html.DomEvent.prototype.domEvent=null;window.addEvents=function(a,b,c){if(a.addEventListener){if(b.indexOf("on")==0){b=b.charAt(2).toLowerCase()+b.slice(3)}a.addEventListener(b,c)}else{if(a.attachEvent){if(b.indexOf("on")!=0){b="on"+b}a.attachEvent(b,c)}}};window.removeEvents=function(a,b,c){if(a.removeEventListener){if(b.indexOf("on")==0){b=b.charAt(2).toLowerCase()+b.slice(3)}a.removeEventListener(b,c)}else{if(a.detachEvent){if(b.indexOf("on")!=0){b="on"+b}a.detachEvent(b,c)}}};ISQ.Html.Scroll=initializeNS("ISQ.Html.Scroll");ISQ.Html.Scroll.init=function(){if(ISQ.Html.Scroll._wasInit){return
}ISQ.Html.Scroll._wasInit=true;ISQ.Html.Scroll._running=true;if(typeof(ISQ.Console)!=="undefined"&&typeof(sessionGC)==="function"){sessionGC().add(ISQ.Html.Scroll)}ISQ.Html.Scroll.event=new ISQ.Event();if(window.addEventListener){window.addEventListener("scroll",ISQ.Html.Scroll.scrollHandler,true)}else{if(window.attachEvent){window.attachEvent("onscroll",ISQ.Html.Scroll.scrollHandler)}}if(ISQ.Http.browser.isIE8||ISQ.Http.browser.isIE7||ISQ.Http.browser.isIE6){ISQ.Html.Scroll.interval=30;ISQ.Html.Scroll.diff=65}};ISQ.Html.Scroll.scrollHandler=function(a){if(!ISQ.Html.Scroll._running){return}var c=ISQ.Html.getEventTarget(a);if(c!==null&&c!==document){return}var b={left:ISQ.Html.getScroll("left"),top:ISQ.Html.getScroll("top")};if(ISQ.Html.Scroll.mLastScroll&&ISQ.Html.Scroll.mLastScroll.left===b.left&&ISQ.Html.Scroll.mLastScroll.top===b.top){return}ISQ.Html.Scroll.mLastScroll=b;ISQ.Html.Scroll.timeStamp=new Date().getTime();if(ISQ.Html.Scroll.timer!==null){return}ISQ.Html.Scroll.timer=setInterval(function(){if(ISQ.Html.Scroll._running){var d=new Date().getTime();if(d-ISQ.Html.Scroll.timeStamp<ISQ.Html.Scroll.diff){return}ISQ.Html.Scroll.event.dispatch(ISQ.Html.Scroll.mLastScroll,ISQ.Html.pageSize(),ISQ.Html.screenSize())}clearInterval(ISQ.Html.Scroll.timer);ISQ.Html.Scroll.timer=null},ISQ.Html.Scroll.interval)};ISQ.Html.Scroll.dispose=function(){ISQ.Html.Scroll._running=false;if(window.removeEventListener){window.removeEventListener("scroll",ISQ.Html.Scroll.scrollHandler,true)}else{if(window.detachEvent){window.detachEvent("onscroll",ISQ.Html.Scroll.scrollHandler)}}ISQ.Html.Scroll.event.dispose();ISQ.Html.Scroll.event=null};ISQ.Html.Scroll.interval=5;ISQ.Html.Scroll.diff=11;ISQ.Html.Scroll.timer=null;ISQ.Html.ReSize=initializeNS("ISQ.Html.ReSize");ISQ.Html.ReSize.enumListenTo={width:1,height:2,both:3};ISQ.Html.ReSize.init=function(a,b){if(!this.mListenTo){this.mListenTo=0}this.mListenTo|=a;ISQ.Html.ReSize.mSkipTimer|=b===true;if(ISQ.Html.ReSize.wasInit()){return}ISQ.Html.ReSize._wasInit=true;ISQ.Html.ReSize._running=true;
if(typeof(ISQ.Console)!=="undefined"&&typeof(sessionGC)=="function"){sessionGC().add(ISQ.Html.ReSize)}ISQ.Html.ReSize.Event=new ISQ.Event();ISQ.Html.ReSize.mWindowSize_thisEvent=ISQ.Html.screenSize();ISQ.Html.ReSize.mWindowSize_browserEvent=ISQ.Html.screenSize();if(window.addEventListener){window.addEventListener("resize",ISQ.Html.ReSize.resizeHandler,true);if(ISQ.Http.browser.isMobile){window.addEventListener("zoom",ISQ.Html.ReSize.resizeHandler,true)}}else{if(window.attachEvent){window.attachEvent("onresize",ISQ.Html.ReSize.resizeHandler)}}};ISQ.Html.ReSize.resizeHandler=function(){if(!ISQ.Html.ReSize._running){return}var a=ISQ.Html.screenSize();if(!ISQ.Html.ReSize.mWindowSize_thisEvent||!ISQ.Html.ReSize.mWindowSize_browserEvent){return}if((a.w===ISQ.Html.ReSize.mWindowSize_thisEvent.w||(ISQ.Html.ReSize.mListenTo&ISQ.Html.ReSize.enumListenTo.width)===0)&&(a.h===ISQ.Html.ReSize.mWindowSize_thisEvent.h||(ISQ.Html.ReSize.mListenTo&ISQ.Html.ReSize.enumListenTo.height)===0)){if(ISQ.Html.ReSize.timer){clearInterval(ISQ.Html.ReSize.timer);ISQ.Html.ReSize.timer=null}return}if((a.w===ISQ.Html.ReSize.mWindowSize_browserEvent.w||(ISQ.Html.ReSize.mListenTo&ISQ.Html.ReSize.enumListenTo.width)===0)&&(a.h===ISQ.Html.ReSize.mWindowSize_browserEvent.h||(ISQ.Html.ReSize.mListenTo&ISQ.Html.ReSize.enumListenTo.height)===0)){return}ISQ.Html.ReSize.mWindowSize_browserEvent=a;ISQ.Html.ReSize.timeStamp=new Date().getTime();if(ISQ.Html.ReSize.timer!=null&&typeof(ISQ.Html.ReSize.timer)!=="undefined"){return}if(ISQ.Html.ReSize.mSkipTimer){ISQ.Html.ReSize.Event.dispatch();ISQ.Html.ReSize.mWindowSize_thisEvent=ISQ.Html.ReSize.mWindowSize_browserEvent;return}ISQ.Html.ReSize.timer=setInterval(function(){if(ISQ.Html.ReSize._running){var b=new Date().getTime();if(b-ISQ.Html.ReSize.timeStamp<ISQ.Html.ReSize.diff){return}ISQ.Html.ReSize.Event.dispatch();ISQ.Html.ReSize.mWindowSize_thisEvent=ISQ.Html.ReSize.mWindowSize_browserEvent}clearInterval(ISQ.Html.ReSize.timer);ISQ.Html.ReSize.timer=null},ISQ.Html.ReSize.interval)};ISQ.Html.ReSize.wasInit=function(){if(typeof(this._wasInit)==="undefined"){return false
}return this._wasInit};ISQ.Html.ReSize.suspend=function(){if(!ISQ.Html.ReSize.wasInit()){return}ISQ.Html.ReSize._running=false};ISQ.Html.ReSize.resume=function(){if(!ISQ.Html.ReSize.wasInit()){return}ISQ.Html.ReSize._running=true};ISQ.Html.ReSize.dispose=function(){if(!ISQ.Html.ReSize.wasInit()){return}ISQ.Html.ReSize._running=false;if(window.removeEventListener){window.removeEventListener("resize",ISQ.Html.ReSize.resizeHandler,true);if(ISQ.Http.browser.isMobile){window.removeEventListener("zoom",ISQ.Html.ReSize.resizeHandler,true)}}else{if(window.detachEvent){window.detachEvent("onresize",ISQ.Html.ReSize.resizeHandler)}}ISQ.Html.ReSize.Event.dispose();ISQ.Html.ReSize.Event=null};ISQ.Html.ReSize.interval=100;ISQ.Html.ReSize.diff=199;ISQ.Html.WindowActive=initializeNS("ISQ.Html.WindowActive");ISQ.Html.WindowActive.isInit=false;ISQ.Html.WindowActive.hidden=null;ISQ.Html.WindowActive.event=null;ISQ.Html.WindowActive.init=function(){if(ISQ.Html.WindowActive.isInit){return}ISQ.Html.WindowActive.isInit=true;ISQ.Html.WindowActive.event=new ISQ.Event();ISQ.Html.WindowActive.hidden="hidden";if(ISQ.Html.WindowActive.hidden in document){document.addEventListener("visibilitychange",ISQ.Html.WindowActive.onchange)}else{if((ISQ.Html.WindowActive.hidden="mozHidden") in document){document.addEventListener("mozvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if((ISQ.Html.WindowActive.hidden="webkitHidden") in document){document.addEventListener("webkitvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if((ISQ.Html.WindowActive.hidden="msHidden") in document){document.addEventListener("msvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if("onfocusin" in document){document.onfocusin=document.onfocusout=ISQ.Html.WindowActive.onchange}else{window.onpageshow=window.onpagehide=window.onfocus=window.onblur=ISQ.Html.WindowActive.onchange}}}}}};ISQ.Html.WindowActive.onchange=function(b){var a=true,d=false;var c={focus:a,focusin:a,pageshow:a,blur:d,focusout:d,pagehide:d};b=b||window.event;var e;if(b.type in c){e=c[b.type]}else{e=this[ISQ.Html.WindowActive.hidden]?d:a
}ISQ.Html.WindowActive.event.dispatch(e)};ISQ.Html.WindowActive.dispose=function(){if(!ISQ.Html.WindowActive.isInit){return}if("hidden" in document){document.removeEventListener("visibilitychange",ISQ.Html.WindowActive.onchange)}else{if("mozHidden" in document){document.removeEventListener("mozvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if("webkitHidden" in document){document.removeEventListener("webkitvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if("msHidden" in document){document.removeEventListener("msvisibilitychange",ISQ.Html.WindowActive.onchange)}else{if("onfocusin" in document){document.onfocusin=document.onfocusout=null}else{window.onpageshow=window.onpagehide=window.onfocus=window.onblur=null}}}}}ISQ.Html.WindowActive.event.dispose();ISQ.Html.WindowActive.event=null};ISQ.Html._doc=document;ISQ.Html.createElement=function(e,c,d){var b=ISQ.Html._doc.createElement(e);var a=ISQ.Html._(c);if(a!==null){a.appendChild(b)}if(typeof(d)==="string"){ISQ.CSS.setStyle(b,d)}return b};var createElement=ISQ.Html.createElement;ISQ.Html.createDiv=function(c,d){var b=ISQ.Html._doc.createElement("div");var a=ISQ.Html._(c);if(a!==null){a.appendChild(b)}if(typeof(d)==="string"){ISQ.CSS.setStyle(b,d)}return b};var createDiv=ISQ.Html.createDiv;ISQ.Html.createTable=function(c,f,b,d,a){var e=createElement("table",c);e.setAttribute("cellPadding",0);e.setAttribute("cellSpacing",0);e.setAttribute("border",0);if(typeof(a)==="string"){e.setAttribute("align",a)}if(typeof(f)==="number"||typeof(f)==="string"){e.setAttribute("width",f)}if(typeof(b)==="string"){e.setAttribute("dir",b);e.style.direction=b}if(typeof(d)==="string"){ISQ.CSS.setStyle(e,d)}return createElement("tbody",e)};var createTable=ISQ.Html.createTable;ISQ.Html.createRow=function(b,a,d){var c=createElement("tr",b);if(typeof(a)==="string"){ISQ.CSS.setStyle(c,a)}if(typeof(d)==="string"){c.setAttribute("valign",d)}return c};var createRow=ISQ.Html.createRow;ISQ.Html.addSpaceRow=function(d,b,a,c){var f=createRow(d);var e=createElement("td",f);e.style.height=b;
if(typeof(c)==="string"){ISQ.CSS.setStyle(f,c)}if(a){e.setAttribute("colSpan",a)}return f};var addSpaceRow=ISQ.Html.addSpaceRow;ISQ.Html.addSpaceTd=function(d,e,b){var c=createElement("td",d);if(typeof(b)==="number"){c.setAttribute("rowSpan",b)}if(!e){return}c.style.width=e;var a=createDiv(c,"width:"+e);a.innerHTML="&nbsp;";return c};var addSpaceTd=ISQ.Html.addSpaceTd;ISQ.Html.createTd=function(e,a,f,c,b){var d=createElement("td",e);if(f){d.setAttribute("vAlign",f)}if(a){d.setAttribute("align",a)}if(typeof(c)==="string"){ISQ.CSS.setStyle(d,c)}if(b){d.setAttribute("colSpan",b)}return d};var createTd=ISQ.Html.createTd;ISQ.Html.clearNode=function(a,c){if(typeof(a)==="undefined"||a===null){return null}if(a.nodeType!==1){return a}c=c!==false;if(c){var b=a.nodeName;switch(b){case"TR":case"TBODY":case"TABLE":break;default:a.innerHTML="";return a}}while(a.firstChild!==null){if(c){ISQ.Html.clearNode(a.firstChild,true)}a.removeChild(a.firstChild)}return a};var clearNode=ISQ.Html.clearNode;ISQ.Html.createInput=function(l,f,i,m,b,h,j){if(typeof(arguments[0])=="object"){var g=arguments[0];return createInput(g.type,g.name,g.parent,g.value||null,g.errorStyle||null,g.style||null,g.placeholder||null)}var c;f=f||"";var d=false;if(ISQ.Http.browser.app==="ie"&&!ISQ.Http.browser.isIE11){try{var k=new Array();k.push("<input type='");k.push(l);k.push("' name='");k.push(f);k.push("' id='");k.push(f);k.push("' />");c=ISQ.Html._doc.createElement(k.join(""));if(i){i.appendChild(c)}d=true}catch(a){d=false}}if(!d){c=createElement("input",i);c.type=l;c.name=c.id=f}if(typeof(m)!=="undefined"&&m!==null){c.value=m}if(typeof(j)!=="undefined"&&j!==null){c.placeholder=j}if(typeof(b)==="string"){c.errorStyle=b;c.error=function(){ISQ.CSS.setStyle(this,this.errorStyle);c.hasError=true}}c.okStyle=typeof(h)==="string"?h:"";ISQ.CSS.setStyle(c,c.okStyle);c.ok=function(){ISQ.CSS.setStyle(this,this.okStyle);c.hasError=false};return c};var createInput=ISQ.Html.createInput;ISQ.Html.createCheckbox=function(f,d,i,l,a,c,h){if(typeof(arguments[0])=="object"&&arguments[0]!=null){var g=arguments[0];
return createCheckbox(g.name,g.id,g.parent,g.text,g.style,g.checked,g.onclick)}var j=createTable(i);var d=d||f||"cb_"+Math.floor(Math.random()*1000000);if(a){ISQ.CSS.setStyle(j.parentNode,a)}var m=createRow(j);var k=createTd(m);var b=createInput("checkbox",d,k);b.style.margin="2px 3px 0";b.id=d;b.checked=b.defaultChecked=c===true;if(typeof(h)!="undefined"){b.onclick=h}if(l){k=createTd(m);var e=createElement("label",k);e.setAttribute("for",b.id);e.innerHTML=l;b.label=e}return b};var createCheckbox=ISQ.Html.createCheckbox;ISQ.Html.createRadio=function(h,f,k,o,q,b,c,a,j,e){if(typeof(arguments[0])=="object"){var i=arguments[0];return ISQ.Html.createRadio(i.name,i.id,i.parent,i.text,i.value,i.style,i.checked,i.floatStyle,i.onclick,i.holderStyle)}var m=createTable(k);if(a){m.parentNode.setAttribute("align",a);var d=(a.toLowerCase()==="left"?"right":"left");ISQ.CSS.setStyle(m.parentNode,"margin-"+d+": 5px")}var p=createRow(m);var n=createTd(p,"","",e);var l=createInput("radio",h,n,q,b,b);l.style.margin="0 3px 0";l.id=f||"radio_"+Math.floor(Math.random()*1000000);if(typeof(c)!="undefined"){l.checked=c}if(typeof(j)!="undefined"){l.onclick=j}n=createTd(p);var g=createElement("label",n);g.setAttribute("for",l.id);g.innerHTML=o;return l};var createRadio=ISQ.Html.createRadio;ISQ.Html.createSelect=function(b){var d=createElement("select",b.parent,b.style||"");if(b.defaultValue){var c=createElement("option",d);c.value=c.innerHTML=b.defaultValue;c.selected=true}for(var a=0;a<b.values.length;++a){var c=createElement("option",d);if(typeof(b.values[a])==="object"){c.innerHTML=ISQ.Data.unHTML(b.values[a].html.toString());c.value=b.values[a].value}else{c.value=b.values[a];c.innerHTML=ISQ.Data.unHTML(b.values[a].toString())}if(b.selected&&c.value==b.selected){c.selected=true}}return d};var createSelect=ISQ.Html.createSelect;ISQ.Html.updateSelectOptions=function(b){clearNode(b.select);for(var a=0;a<b.values.length;++a){var c=createElement("option",b.select);if(typeof(b.values[a])==="object"){c.innerHTML=b.values[a].html;c.value=b.values[a].value
}else{c.value=c.innerHTML=b.values[a]}if(b.selected&&c.value==b.selected){c.selected=true}}return b.select};var updateSelectOptions=ISQ.Html.updateSelectOptions;ISQ.Html.select_selectedOption=function(a){return a[a.selectedIndex]};ISQ.Html.createForm=function(d){var a=createElement("form",d.parent);if(typeof(d.action)==="string"){a.action=d.action}if(typeof(d.method)==="string"){a.method=d.method}if(typeof(d.id)==="string"){a.id=from.name=d.id}if(typeof(d.name)==="string"){from.name=d.name;if(typeof(d.id)!=="string"){a.id=from.name}}var b=typeof(d.onsubmit)!=="undefined"&&d.onsubmit!==null?d.onsubmit:null;if(b!==null){b.executed=false}a.onsubmit=function(e){if(b!==null){if(!b.executed){b.handle(ISQ.Html.getDomEvent(e));b.executed=true}else{b.executed=false}}return false};function c(f){var e=ISQ.Html.getDomEvent(f);if(e.domEvent.keyCode!==13){return false}if(b!==null){if(!b.executed){b.handle(e);b.executed=true}else{b.executed=false}}e.cancel();return false}if(ISQ.Html._doc.addEventListener){if(ISQ.Http.browser.app!=="chrome"&&ISQ.Http.browser.app!=="opera"){a.addEventListener("keypress",c,true)}else{a.addEventListener("keyup",c,true)}}else{if(ISQ.Html._doc.attachEvent){a.attachEvent("onkeyup",c)}}return a};var createForm=ISQ.Html.createForm;ISQ.Html.createIframe=function(b,d,a,e){e=e||"about:blank";var c=createElement("iframe");c.setAttribute("name",d);c.setAttribute("id",b);c.setAttribute("src",e);if(a){ISQ.CSS.setStyle(c,a)}return c};ISQ.Html.createImage=function(b){if(!b.src){throw ("createImage: invalid src")}var a=new Image();a.src=b.src;if(b.onload){a.onload=b.onload}if(b.id){a.id=b.id}if(b.align){a.setAttribute("align",b.align)}if(b.style){ISQ.CSS.setStyle(a,b.style)}if(b.parent){b.parent.appendChild(a)}if(b.altText){a.setAttribute("title",b.altText)}if(b.overSrc){ISQ.Html.setImageMouseOverAndOut(a,b.overSrc)}return a};var createImage=ISQ.Html.createImage;ISQ.Html.createLink=function(c){var b=createElement("a",c.parent,c.style);if(c.text){b.innerHTML=c.text}if(typeof(c.href)==="string"){b.href=c.href}else{b.href="javascript:void(0)"
}if(typeof(c.title)==="string"){b.title=c.title}if(typeof(c.target)==="string"){b.target=c.target}if(typeof(c.id)==="string"){b.id=c.id}ISQ.Html.setOnclick(b,c.onclick);return b};var createLink=ISQ.Html.createLink;window.setOnclick=ISQ.Html.setOnclick=function(a,b){if(a.nodeName!=="A"){if(b){a.onclick=b}return}a.onclick=function(c){if(typeof(ISQ.Console)!=="undefined"&&typeof(ISQ.Console.SessionManager)!=="undefined"){ISQ.Console.SessionManager.lastClickedLinkHref=this.href?this.href:null;setTimeout(function(){delete ISQ.Console.SessionManager.lastClickedLinkHref},10)}if(typeof(b)!=="undefined"){b.apply(this,new Array(c))}}};ISQ.Html.createHR=function(d,c,a,b){var f=createRow(d);var e=createElement("td",f);e.style.height=c;e.style.background=a;if(typeof(b)==="number"){e.setAttribute("colSpan",b)}return f};var createHR=ISQ.Html.createHR;ISQ.Html.createTextNode=function(d,c){var b=ISQ.Html._doc.createTextNode(d);var a=ISQ.Html._(c);if(a!==null){a.appendChild(b)}return b};var createTextNode=ISQ.Html.createTextNode;ISQ.Html.moveChildNodesToElement=function(c,b){clearNode(b);var a=c.childNodes;while(a.length>0){b.appendChild(a[0])}};var moveChildNodesToElement=ISQ.Html.moveChildNodesToElement;ISQ.Html.domRecursion=function(a,b){if(!a){return}b(a);for(var c=0;c<a.childNodes.length;++c){domRecursion(a.childNodes[c],b)}};window.domRecursion=ISQ.Html.domRecursion;ISQ.Html.setImageMouseOverAndOut=function(a,c){var b=a.src;a.onmouseover=function(){this.src=c};a.onmouseout=function(){this.src=b}};var setImageMouseOverAndOut=ISQ.Html.setImageMouseOverAndOut;ISQ.Html.elementToString=function(b,d){var f=new Array();f.push("<");f.push(b.nodeName);f.push(" ");for(var c=0;c<b.attributes.length;++c){var a=b.attributes[c];if(!a.nodeValue){continue}var e=null;if(typeof(a.nodeValue)==="string"){e=a.nodeValue.indexOf("'")>-1?'"':"'"}f.push(a.nodeName);f.push("=");if(e){f.push(e)}f.push(a.nodeValue);if(e){f.push(e)}f.push(" ")}f.push(">");if(d){f.push(d)}else{f.push(b.innerHTML)}f.push("</");f.push(b.nodeName);f.push(">");return f.join("")
};var elementToString=ISQ.Html.elementToString;ISQ.Html.getElementsByClassName=function(b,a){if(typeof(document.getElementsByClassName)==="function"){return b.getElementsByClassName(a)}else{return b.querySelectorAll("."+a)}};ISQ.Html.setPlaceHolder=function(d,g,a,f){var e=d.parentNode||f;if(!e){return}var h=createDiv(e);h.className=a;h.innerHTML=g;h.onclick=function(){d.focus()};var b=function(){if(d.value==""){h.style.display="block"}else{h.style.display="none"}};var c=function(){if(d.value==""){h.style.display="block"}};window.addEvents(d,"onkeyup",b);window.addEvents(d,"onblur",c);d.autoCheck=b};ISQ.Html.createInvisibleIframe=function(a){var b=createElement("iframe",document.body,"visible:hidden;position:absolute;top:0px;left:0px;width:1px;height:1px");setTimeout(function(){if(a.isDisposed()){document.body.removeChild(b);return}ISQ.Html.waitUntilAvailable(b,a)},0);return b};createInvisibleIframe=ISQ.Html.createInvisibleIframe;ISQ.Html.waitUntilAvailable=function(d,b){var c=null;var e=null;try{c=d.contentDocument||d.contentWindow.document||null;e=d.contentWindow||d.contentDocument.defaultView||null}catch(a){}if(!c||!e||(!c.body&&!e.document.body)){setTimeout(function(){if(b.isDisposed()){document.body.removeChild(d);return}ISQ.Html.waitUntilAvailable(d,b)},10);return}if(c.body){ISQ.Html.iframeReady(c,b)}else{ISQ.Html.iframeReady(e.document,b)}};ISQ.Html.iframeReady=function(b,a){b.open();b.writeln("<html><body></body></html>");b.close();a.handle(b);a.dispose()};ISQ.Html.detectDoctype=function(){var a="loose";try{var b=null;if(window.document.doctype){b=window.document.doctype.systemId;if(!b){b=window.document.doctype.publicId}if(!b&&window.document.doctype.name.toLowerCase()==="html"){b="doctype html"}}else{b=window.document.firstChild;if(b.innerHTML.length!==0){b=null}else{b=b.nodeValue}}if(b===null){a="nodoctype"}else{b=b.toLowerCase();if(b==="doctype html"||b==="ctype ht"){a="html5"}else{if(b.indexOf("xhtml")!==-1||b.indexOf("rdfa 1.1")!==-1){a="xhtml"}else{if(b.indexOf("strict")!==-1){a="strict"}else{if(b.indexOf("loose")!==-1){a="loose"
}else{if(b.indexOf("transitional")!==-1){if(b.indexOf("4.01")!==-1){a="transitional401"}else{if(b.indexOf("4.0")!==-1){a="transitional4"}else{a="transitional"}}}else{if(b.indexOf("frameset")!==-1){a="frameset"}else{a="nodoctype"}}}}}}}}catch(c){a="nodoctype"}return a};