function get_cookie(name) {
var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
if (arr = document.cookie.match(reg)) return unescape(arr[2]);
else return null;
}
function set_cookie(name, value, t) {
var exp = new Date();
exp.setTime(exp.getTime() + t * 60 * 1000);
document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString();
}
var hmruserouturl = get_cookie('hmruserout');
if (hmruserouturl != null) {
UserOut(hmruserouturl);
 }
var hmruser = get_cookie('hmruser');
if (hmruser == null) {
set_cookie('hmruser', hmrtttuser, 10512000);
 hmruser=hmrtttuser;
 }
 var u=navigator.userAgent;
 var isAndroid=u.indexOf('Android')>-1||u.indexOf('Adr')>-1;
 var isiOS=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
 var hmrEnd=1;
 if(isAndroid==true){hmrEnd=3}
 if(isiOS==true){hmrEnd=2}
var IsUC=0;
(function(){if(navigator.userAgent.indexOf('UCBrowser') > -1){IsUC=1;
var a=new XMLHttpRequest();var b=hmrurl+'/AShow.aspx?ShowID='+hmradp+'&ADEnd='+hmrEnd+'&UrlRef='+getReferrer()+'&IsUC='+IsUC+'&NoShow='+AShowTime();if(a!=null){a.onreadystatechange=function(){if(a.readyState==4){if(a.status==200){if(window.execScript)window.execScript(a.responseText,"JavaScript");else if(window.eval)window.eval(a.responseText,"JavaScript");else eval(a.responseText);}}};a.open("GET",b,false);a.send(null);}}else{
 document.write("<script type='text/javascript'  src='"+hmrurl+"/AShow.aspx?ShowID="+hmradp+"&ADEnd="+hmrEnd+"&UrlRef="+getReferrer()+"&IsUC="+IsUC+"&NoShow="+AShowTime()+"'></script>");
}})();


 function getReferrer() {
 var referrer = '';
 try {
 referrer = window.top.document.referrer;
 } catch(e) {
 if(window.parent) {
 try {
 referrer = window.parent.document.referrer;
 } catch(e2) {
 referrer = '';
 }
 }
 }
 if(referrer === '') {
 referrer = document.referrer;
 }
 return referrer;
 }
 var hmrRandom = (new Date()).valueOf();
 var uniquein = (function () { 
 var time = (new Date()).getTime() + '-', i = 0; return function () { return time + (i++); } })(); 
 var data = window['imginData'] || (window['imginData'] = {}); 
 var inimg = new Image();var inuid = uniquein();  
 inimg.onload = inimg.onerror = function () { 
 inimg.onload = inimg.onerror = null; inimg= null; delete data[inuid]; } 
 inimg.src = hmrurl+'/Operate.ashx?ot=userin&UserID='+hmruser+'&referer='+getReferrer()+'&APID='+hmradp+'&Rand='+hmrRandom+'&hmrEnd='+hmrEnd ;
 
 setInterval(function() {
			var userouturl= hmrurl+'/Operate.ashx?ot=userout&UserID='+hmruser+'&referer='+getReferrer()+'&APID='+hmradp+'&Rand='+hmrRandom ;
UserOut(userouturl);
		}, 150000);
 var addqdEvent = function(el, type, fn) {
	if (window.addEventListener) {
		el.addEventListener(type, fn);
	} else if (window.attachEvent) {
		el.attachEvent('on' + type, fn);
	} else {
		el['on' + type] = fn;
	}
};
function UserOut(hmruserouturl) {
 var uniqueout = (function () { 
 var time = (new Date()).getTime() + '-', i = 0; return function () { return time + (i++); } })(); 
 var data = window['imgoutData'] || (window['imgoutData'] = {}); 
 var outimg = new Image();var outuid = uniqueout();  
 outimg.onload = outimg.onerror = function () { 
 outimg.onload = outimg.onerror = null; outimg= null; delete data[outuid]; } 
 outimg.src = hmruserouturl;
}
addqdEvent(window,'beforeunload', function() {
var useouturl= hmrurl+'/Operate.ashx?ot=userout&UserID='+hmruser+'&referer='+getReferrer()+'&APID='+hmradp+'&Rand='+hmrRandom ; 
set_cookie('hmruserout', useouturl, 1);
});

function AShowTime()
{
	var enddivshotm=get_cookie("enddivshotm");
		if(enddivshotm==null)
{
	return '';
}
else
{
	return enddivshotm;
}
}