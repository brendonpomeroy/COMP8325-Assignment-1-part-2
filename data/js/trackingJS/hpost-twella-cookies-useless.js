
var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var qc='',qcSet=0,qcTac='',qcW='',kv,v1,v2,v3,vL,x='',z='',o='',t='',dr,dr1,ag=0,ha=0,g,i1,qc1,ln,le,lc,cs='',w='',ot='';
qc=readCk('atdemo');
qcTac=readCk('ATTAC');
qcW=readCk('atwd');
if (qc&&qcTac)cs='b';
else if (qc)cs='a';
else if (qcTac)cs='t';
document.cookie="tacDom=quigo"+cs+"; path=/_media/uac";
if (qcW){
 v1=d64(qcW);
 v1=v1.split(';');
 ln=v1.length;
 for (var i=0;i<ln;i++){
  kv=v1[i].split('=');
  switch (kv[0]){
   case "kvwc":
    if (kv[1]=='1')w+='80001,';
    break;
   case "kvsc":
    if (kv[1]=='32')w+='80032,';
    if (kv[1]=='34')w+='80034,';
    break;
  }
 }
 if (w)w=w.substring(0,w.length-1);
}
if (qc){
v1=d64(qc);
if (v1.indexOf('kvagsrc=1')>0)ag=1
if (v1.indexOf('kvhasrc=1')>0)ha=1
if (ag==1){
 i1=document.createElement('iframe');
 i1.id='quigo';
 if (!window.adsSaf)i1.style.display="none";
 i1.style.width='0px';
 i1.style.height='0px';
 qc1="atdemo="+qc;
 i1.src='http://js.adsonar.com/js/pass.html#'+qc1;
 document.body.appendChild(i1);
}
v1=v1.split(';');
ln=v1.length;
for (var i=0;i<ln;i++){
 kv=v1[i].split('=');
 switch (kv[0]){
  case "kvag":
   if (ag){
    dr=kv[1].split(':');
    le=dr.length;
    for (var j=0;j<le;j++){
     if (dr[j].indexOf('am')>-1){
      x=dr[j].replace(/am/,'1000');
      o+=x+',';
     }
     else if (dr[j].indexOf('af')>-1){
      x=dr[j].replace(/af/,'2000');
      o+=x+',';
     }
     else if (dr[j]=="tem")o+="20051,";
     else if (dr[j]=="tef")o+="20052,";
    }
   }
   break;
  case "kvch":
   if (ha){
    dr1=kv[1].split(':');
    lc=dr1.length;
    for (var l=0;l<lc;l++){
     if (dr1[l].indexOf('cha')>-1){
      x=dr1[l].replace(/cha/,'300');
      o+=x+',';
     }
     else if (dr1[l].indexOf('chn')>-1){
      x=dr1[l].replace(/chn/,'400');
      o+=x+',';
     }
     else if (dr1[l]=="1")o+="5001,";
     else if (dr1[l]=="2")o+="5002,";
    }
   }
   break;
  case "kvhme":
   if (ha)o+="600"+kv[1]+",";
   break;
  case "kvinc":
   if (ha)o+="700"+kv[1]+",";
   break;
  case "kvmar":
   if (ha)o+="800"+kv[1]+",";
   break;
  case "kvocc":
   if (ha){
    z=kv[1];
    z=z.replace(/occ/i,'900');
    z=z.replace(/soc/i,'900');
    o+=z+",";
   }
   break;
  case "kvug":
   if (ag)o+="1000"+kv[1]+",";
   break;
  case "kvr":
   if (ha){
    dr=kv[1].replace(/:/g,',');
    o+=dr+',';
   }
   break;
   }
  }
if (o||w){
 if (w)o=o+w
 else o=o.substr(0,o.length-1);
 g=document.createElement('img');
 g.style.width='1px';
 g.style.height='1px';
 g.src='http://segments.adap.tv/data/?p=aoldemo&type=gif&add=true&segment='+o
 document.body.appendChild(g);
}
}
if (qcTac){
 v2=d64(qcTac);
 v3=v2.split(';');
 vL=v3.length-1;
 for (i=0;i<vL;i++)t+=v3[i].split('=')[1]+',';
 t=unescape(t).replace(/:/g,",")
 t=t.substring(0,t.length-1)
 g=document.createElement('img');
 g.style.width='1px';
 g.style.height='1px';
 g.src='http://segments.adap.tv/data/?p=aoltacoda&type=gif&add=true&segment='+t
 document.body.appendChild(g);
 g1=document.createElement('img');
 g1.style.width='1px';
 g1.style.height='1px';
 g1.src='http://segments.adap.tv/data/?p=aolmp&type=gif&add=true&segment='+t
 document.body.appendChild(g1);
 g2=document.createElement('img');
 g2.style.width='1px';
 g2.style.height='1px';
 g2.src='http://segments.adap.tv/data/?p=magna&type=gif&add=true&segment='+t
 document.body.appendChild(g2)
}
if (o||t){
 if (o&&t)ot=o+','+t
 else if (o)ot=o
 else ot=t
 g=document.createElement('img');
 g.style.width='1px';
 g.style.height='1px';
 g.src='http://2a86.v.fwmrm.net/ad/u?token=e51c5a1ede72cd321589d5b1a00284ed&nw=10886&dpid=10886&gif=1&attr='+ot;
 document.body.appendChild(g);
}
function d64(v){
var o="",c1,c2,c3,e1,e2,e3,e4,i=0;
v=v.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do {
e1=k.indexOf(v.charAt(i++));
e2=k.indexOf(v.charAt(i++));
e3=k.indexOf(v.charAt(i++));
e4=k.indexOf(v.charAt(i++));
c1=(e1 << 2) | (e2 >> 4);
c2=((e2 & 15) << 4) | (e3 >> 2);
c3=((e3 & 3) << 6) | e4;
o=o+String.fromCharCode(c1);
if (e3!=64)o=o+String.fromCharCode(c2);
if (e4!=64)o=o+String.fromCharCode(c3);
} while (i < v.length);
return o;
}
function readCk(name){
 var c=document.cookie,b=c.indexOf(name+'=')
 if(b>=0){
  b=c.indexOf('=',b)+1
  if(b>0){
   var e=c.indexOf(';',b)
   if(e==-1)e=c.length
   return c.substring(b,e)
  }
 }
 return ''
}
