
try {
 var dt=new Date(),t=0,d=document,l;
 dt.setFullYear(dt.getFullYear()+1);
 d.cookie='ads3PTest=yes; path=/; expires='+dt.toGMTString();
 if (d.cookie.indexOf('ads3PTest=')!=-1){
  t=1;
  d.cookie='ads3PTest=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 }
 if (!t) { 
  l=localStorage.getItem('adsGUID');
  if (!l){
   var l='xxx-xx-4'.replace(/[xy]/g, function(c){
	var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
	return v.toString(16);
   });
   localStorage.setItem('adsGUID',l);
  }
  var x=("guid="+l).toString();
  window.top.postMessage(x, "*");
 }
}
catch (e) {}
