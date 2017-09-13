(function(){
	var cs_url=window.cs_url,uid=window.cs_U,cs_S=window.cs_S,cs_d=window.cs_d,cs_dt=window.cs_dt,cs_pidx1=window.cs_pidx1,cs_user=window.cs_user,cs_url1=window.cs_url1,cs_delay=window.cs_delay;
	var cs_exp=new Date();cs_exp.setTime(86400000*(Math.floor((cs_exp.getTime()-cs_exp.getTimezoneOffset()*60000)/86400000)+1)+cs_exp.getTimezoneOffset()*60000);
	var cs_exp1=new Date();cs_exp1.setTime(cs_exp1.getTime() + 172800*1000);
	function SCK(sName, sValue, oExpires, sPath){document.cookie=sName+"="+escape(sValue)+";expires="+oExpires.toUTCString()+";path="+sPath}
	SCK('37cs_pidx',cs_pidx1,cs_exp,'/');SCK('37cs_user',cs_user,cs_exp1,'/');
	var cs_kd = null,cs_kd_num=0,cs_kd_limit=1;
	
	var ua=navigator.userAgent;
	var browser={
		ie:/msie/i.test(ua),
		ie6:/msie 6/i.test(ua),
		ie7:/msie 7/i.test(ua),
		ie8:/msie 8/i.test(ua),
		ie9:/msie 9/i.test(ua),
		360:/360se/i.test(ua),
		sogou:/;?se.+?MetaSr/i.test(ua),
		maxthon:/Maxthon/i.test(ua),
		tt:/TencentTraveler/i.test(ua),
		ff:/firefox/i.test(ua),
		webkit:/AppleWebKit/i.test(ua),
		opera:/Opera/i.test(ua),
		qqbrowser:/QQBrowser/i.test(ua),
		theworld:/Theworld/i.test(ua)};
	function event(e,event,func,act){if(browser.ie)e[act===undefined?'attachEvent':'detachEvent']('on'+event,func);else e[act===undefined?'addEventListener':'removeEventListener'](event,func,false)}
	function updatecs(){
		try{
			var pen_exp=new Date();
			if (cs_dt==0||(cs_dt==1&&cs_pidx1==0)){pen_exp.setTime(pen_exp.getTime()+(uid==9249?1000*cs_d:60000*cs_d));SCK('37cs_pennding'+uid,'true',pen_exp,'/');SCK('CS_pending'+uid,'true',pen_exp,'/')}
			pen_exp.setTime(pen_exp.getTime()+172800*1000);SCK('37cs_show',cs_S,pen_exp,'/');
		}catch(q){}
	}
	function pop(url,param){
		if(!document.body){
			return setTimeout(function(){pop(url,param)},13)
		}
		try{
			if(browser['webkit']&&browser['maxthon']){
				if(!func(url)){a_pop(url)}
			}else if(browser['tt']){
				if(!a_pop(url)){object_pop(url)}
			}else if(browser['sogou']){
				if(!func(url)){a_pop(url)}
			}else if(browser['webkit']&&browser['qqbrowser']){
				if(!func(url)){click_pop(url)}
				//click_pop(url)
			}else if(browser['webkit']||browser['opera']){
				a_pop(url)
			}else if(browser['theworld']&&browser.ie6){
				if(!object_pop2(url)){a_pop(url)}
			}else if(browser['theworld']&&browser.ie8){
				if(!func(url)){try{object_pop(url)}catch(e){click_pop(url)}}
			}else if(browser.ie6){
				if(!func(url)){object_pop2(url)}
			}else if(browser.ie8||browser.ie9){
				if(!func(url)){try{object_pop(url)}catch(e){a_pop(url)}}
			}else if(browser['ie']){
				if(!func(url)){try{object_pop(url)}catch(e){click_pop(url)}}
			}else if(browser['ff']){
				if(!func(url)){click_pop(url)}
			}else{
				if(!func(url)){click_pop(url)}
			}
			updatecs()
		}catch(e){
			if(browser.ie7||browser.ie8||browser.ie9||browser['qqbrowser']){click_pop(url)}else{a_pop(url)}
			updatecs()
		}
	}
	function object_pop(url,param){var object=document.createElement('object');object.setAttribute('classid','CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6');object.style.cssText='position:absolute;left:1px;top:1px;width:1px;height:1px;';append(object);object.launchURL(url)}
	function object_pop2(url,param){
		var object2=document.createElement('object');object2.setAttribute('classid','clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A');object2.style.cssText='position:absolute;left:1px;top:1px;width:1px;height:1px;';
		append(object2);for(var i in object2){try{(function(o){})(object2[i])}catch(e){}}
		setTimeout(function(){object2.DOM.Script.open(url,'_blank','')},500)
	}
	function append(e){for(var t in{body:1}){var ele=document.getElementsByTagName(t);for(var i=0;i<ele.length;i++){ele[i].insertBefore(e,ele[i].firstChild);return}}}
	function click_pop(url,param){event(document,'mouseup',function(e){e=e||window.event;e.cancelBubble=true;event(document,'mouseup',arguments.callee,true);func(url,param)})}
	function a_pop(url){
		var a=document.createElement("a");a.href=url;a.target="_blank";
		var div=document.createElement('div');div.style.backgroundColor='#fff';a.appendChild(div);append(a);
		var as=a.style;as.position="absolute";as.zIndex='2147483647';as.display="block";as.top="0px";as.left="0px";as.cursor='default';as.opacity="0";as.filter="alpha(opacity:0)";
		var m=setInterval(function(){
			a.style.zIndex='2147483647';
			var d=(document.compatMode.toLowerCase()=='css1compat')?document.documentElement:document.body;
			a.style.top=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+'px';
			div.style.width=Math.min(d.clientWidth,d.scrollWidth)+'px';div.style.height=d.clientHeight+'px';			
			if(browser['ie']){try{var divs=document.body.childNodes;for(var i=0;i<divs.length;i++){if(!divs[i]['style']){continue}var _i=parseInt(divs[i].style.zIndex);if(_i&&divs[i]!=a&&_i==2147483647){divs[i].style.zIndex=_i-1}}a.style.zIndex='2147483647'}catch(e){}}
		},120);
		a.onclick=function(e){e=e||window.event;e.cancelBubble=true;setTimeout(function(){a.parentNode.removeChild(a)},200);clearInterval(m);cs_kd_num += 1;};
		event(a,'mouseup',function(e){e=e||window.event;e.cancelBubble=true});
	}
	function func(url,param){var f=window[String.fromCharCode(111,112,101,110)];var w=f(url,'_blank','left=0,top=0,toolbar=yes,location=yes,'+'status=yes,menubar=yes,scrollbars=yes,'+'resizable=yes,width='+screen.width+',height='+screen.height);return w}
	function GetRequest(url) {
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(url.indexOf("?")+1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	} 
	function kdopen(e){
		var currKey=0,e=e||event;
		currKey=e.keyCode||e.which||e.charCode;
		if(cs_kd_num<cs_kd_limit){
			var d = document;
			var f = d.forms["cs_kd_form"];
			try {
				f.submit();
			} catch(e) {
				d.getElementById("cs_kd_submit").click();
			}
			uinitkd();
		}	
	}
	function initkd(){
		if(!browser['webkit'])	return false;
		try {
			var args = GetRequest(cs_url);
			var div_attrs={'id' : 'cs_kd_div','style' :  'display:none;'};
			var div_p = creEle('div',div_attrs);  
			var form_attrs={'id' : 'cs_kd_form','method':'get','target' :  '_blank','action':cs_url};
			var form_p = creEle('form',form_attrs);  
			var input_attrs={'id' : 'cs_kd_submit','type':'submit','style' :  'display:none;'};
			var input_p = creEle('input',input_attrs);  
			addChild(form_p,input_p);
			for(var i in args) {
				input_attrs={'name' : i,'type':'hidden',value:args[i]};
				input_p = creEle('input',input_attrs);  
				addChild(form_p,input_p);
			}
			addChild(div_p,form_p);
			show(div_p);
			
            if (typeof document.onkeydown == "object"){ 
				document.onkeydown = kdopen;
            }else if (typeof document.onkeydown == "function") {
                if (document.onkeydown.toString().indexOf('cs_kd_form') < 0) {
                    cs_kd = document.onkeydown;
                    document.onkeydown = kdopen;
                }
            }
        } catch(q) {}
	}
	function uinitkd(){
		cs_kd_num += 1;
		if (typeof cs_kd == "function") document.onkeydown = cs_kd;
	}
	function show(e,p){
		var bd = document.getElementsByTagName('body')[0];
		if(p!=null && p=='start')
			bd.insertBefore(e, bd.firstChild);
		else
			bd.appendChild(e);
	}
	
	function creEle(stype,atts){
			var ele = null;
			if(typeof(stype)=='undefined' || stype=='') stype='div';
			try{ele = document.createElement(stype);
				if(typeof(atts) != 'undefined' && atts!=null && typeof(atts)=='object'){
					for(var attr in atts){
						if(attr=='class'){
							ele.setAttribute('className',atts[attr]);
							ele.setAttribute('class',atts[attr]);
						}else if(attr=='style'){
							ele.style.cssText=ele.style.cssText+atts[attr];
						}else{
							ele.setAttribute(attr,atts[attr]);
						}
					}
				}
			}
			catch(e){
				alert(e.name + ':' + e.message);
			}
			return ele;
	}
	function addChild(pe,ce){pe.appendChild(ce);}
	
	setTimeout(function(){initkd()},150);
	setTimeout(function(){pop(cs_url,{a:1,b:2})},cs_delay);
	event(window,'beforeunload',function(){})
})();
