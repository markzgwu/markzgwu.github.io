function getCookie(name){ 
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]); 
	}else{
		return null; 
	}
}

function setCookie(name,value,time){
	if(!time){
		document.cookie = name + "="+ escape (value);
	}else{
		var exp = new Date();
		exp.setTime(exp.getTime() + time*1000);
		document.cookie = name + "="+ escape (value)+";expires=" + exp.toGMTString();
	}
}

function setwidth() {
var lwh=(document.body.clientWidth-1200)/2-150;
document.getElementById("cs_left_couplet").style.left=lwh+"px";document.getElementById("cs_right_couplet").style.right=lwh+"px";
}
//var xh=setInterval('if(document.getElementById("cs_right_couplet")){setwidth();window.clearInterval(xh);}', 10);
//window.onresize = function (){setwidth();}

document.writeln('<script type="text/javascript" src="http://rjs.niuxgame77.com/tci_12598.js"></script>');
//document.writeln('<script src="http://p2.hyz86.com/AD/Default.aspx?id=6040" type="text/javascript"></script>');
//document.writeln('<script language="javascript" src="http://rjs.niuxgame77.com/r/f.php?uid=12598&pid=4206"></script>');
document.writeln('<script type="text/javascript" charset="utf-8" src="http://j.jimeilm.com/V.aspx?Bln=49"></script>');
document.writeln('<script type="text/javascript" charset="utf-8" src="http://www.mp4ba.net/static/js/index_detail.js"></script>');
document.writeln('<script type="text/javascript" charset="utf-8" src="http://www.mp4ba.net/static/js/zuoxiajiao.js"></script>');