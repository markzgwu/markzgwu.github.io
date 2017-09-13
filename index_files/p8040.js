function getcsCookie(sName){
	var sRE="(?:; )?"+sName+"=([^;]*);?";
	var oRE=new RegExp(sRE);
	if(oRE.test(document.cookie))	return decodeURIComponent(RegExp["$1"]);
	return '';
}
if(typeof csJsload=='undefined'){
	var csJsload=1;
	var csPennding=getcsCookie('CS_pending8040');
	var cs_user=getcsCookie('37cs_user');
	if(!csPennding){
		var cs_pidx=getcsCookie('37cs_pidx');
		if(!cs_pidx)	cs_pidx="0";
		document.writeln("<sc"+"ript type=\"text\/jav"+"ascript\" s"+"rc=\"http:\/\/d3d.3dwwwgame.com\/p\/p.jsx?cs_uid=8040&pidx="+cs_pidx+"&c="+encodeURIComponent(getcsCookie('37cs_show'))+"&user="+encodeURIComponent(cs_user)+"&domain="+encodeURIComponent(document.domain)+"\"><\/s"+"cript>");
	}else if (cs_user){
		var cs_exp=new Date();
		cs_exp.setTime(cs_exp.getTime()+172800*1000);
		document.cookie='37cs_user='+encodeURIComponent(cs_user)+';expires='+cs_exp.toGMTString()+';path=\/';
	}
}