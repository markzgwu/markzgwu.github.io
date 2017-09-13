function set_FT_Cookie(sName, sValue, oExpires, sPath, sDomain) {
    document.cookie=sName+"="+escape(sValue)+";expires="+oExpires.toGMTString()+";path="+sPath;
}
function update_FT_(){
	if (_jv_FT_dt==0 || (_jv_FT_dt==1 && _jv_FT_pidx1==0)){
		var pen_exp=new Date();
		pen_exp.setTime(pen_exp.getTime() + 60000*_jv_FT_d);
		set_FT_Cookie('_c_FT_poped','true',pen_exp,'/');
	}
}

var _v_FT_exp=new Date();
_v_FT_exp.setTime(86400000*(Math.floor((_v_FT_exp.getTime()-_v_FT_exp.getTimezoneOffset()*60000)/86400000)+1)+_v_FT_exp.getTimezoneOffset()*60000);
set_FT_Cookie('_c_FT_idx',_jv_FT_pidx1,_v_FT_exp,'/');

var _v_FT_exp1=new Date();
_v_FT_exp1.setTime(_v_FT_exp1.getTime() + 172800*1000);
set_FT_Cookie('_c_FT_user',_jv_FT_user,_v_FT_exp1,'/');

function _ftp(url) {
    var obj = new Object;
    obj.isop = 0;
    obj.w = window;
    obj.d = document;
    obj.width = screen.width;
    obj.height = screen.height;
    obj.userAgent = navigator.userAgent.toLowerCase();
    obj.url = url;
    obj.openstr = 'width=' + obj.width + ',height=' + obj.height + ',toolbar=1,location=1,titlebar=1,menubar=1,scrollbars=1,resizable=1,directories=1,status=1';
    obj.browser = {
        version: (obj.userAgent.match(/(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
        safari: /webkit/.test(obj.userAgent),
        opera: /opera/.test(obj.userAgent),
        ie: /msie/.test(obj.userAgent) && !/opera/.test(obj.userAgent),
        max: /maxthon/.test(obj.userAgent),
        se360: /360/.test(obj.userAgent),
        tw: /theworld/.test(obj.userAgent),
        tt: /tencenttraveler/.test(obj.userAgent),
        ttqq: /qqbrowser/.test(obj.userAgent),
        sg: /se /.test(obj.userAgent),
        ff: /mozilla/.test(obj.userAgent) && !/(compatible|webkit)/.test(obj.userAgent)
    };
    obj.open = function() {
        if (obj.browser.ie) {
            if (!document.getElementById("_FT_launchURL_"))
                document.write("<object id='_FT_launchURL_' width=0 height=0 classid='CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6'></object>");
            if (!document.getElementById("_FT_DOMScript_"))
                document.write("<object id='_FT_DOMScript_'  style='position:absolute;left:1px;top:1px;width:1px;height:1px;' classid='clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A'></object>");
        }
        if (!obj.browser.ie && !obj.browser.ff) {
            obj.c();
        } else {
            try {
                obj.o1 = window.open(obj.url, "_blank", obj.openstr + ',left=0,top=0');
            } catch (err) {
                obj.o1 = '';
            }
            if (obj.o1) {
                obj.w.focus();
                obj.isop = 1;
		update_FT_();
            } else {
                if (obj.browser.ie) {
                    try {
                        if (obj.browser.sg) {
                            obj.dsp();
                        }
                        else if (obj.browser.ttqq || obj.browser.max || obj.browser.se360 || obj.browser.tw || obj.browser.tt || obj.brower.webkit || obj.browser.version == "7.0" || obj.browser.version == "8.0" || obj.browser.version == "9.0") {
                            setTimeout(obj.lop, 200);
                        } else {
                            obj.iev6 = true;
                            obj.dsp();
                        }

                    } catch (err) {
                        obj.c();
                    }

                } else {
                    obj.c();
                }
            }
        }
        setTimeout(obj.nt, 400);

        // obj.lap(); 
        if (!obj.isop) obj.ab = setInterval(obj.c, 1000);

    };
    obj.nt = function() {
        if (obj.isop == 0) {
            if (obj.iev6) obj.dsp();
            else obj.lop();
        }
    }
    obj.dsp = function() {
        if (obj.isop) return null;
        try {
            setTimeout(function() { document.getElementById("_FT_DOMScript_").DOM.Script.open(obj.url, '_blank', obj.openstr); obj.w.focus(); obj.isop = 1; update_FT_(); }, 200);
        } catch (err) { }
    }
    obj.lop = function() {
        if (obj.isop) return null;
        try {
            document.getElementById("_FT_launchURL_").launchURL(obj.url);
            obj.isop = 1;
	    update_FT_();
        } catch (err) {
            obj.isop = 0;
        }
    }
    obj.lap = function() {
        if (obj.browser.ie && obj.isop == 0) {
            if (window.attachEvent) {
                window.attachEvent("onload", function() {
                    obj.lop();
                })
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", function() {
                        obj.lop();
                    }, true)
                } else {
                    window.onload = function() {
                        obj.lop();
                    }
                }
            }
        }

    }
    obj.c = function() {
        if (obj.isop) {
            clearInterval(obj.ab);
            obj.d.onclick = null;
            return null;
        }
        obj.d.onclick = function() {
            obj.o2 = window.open(obj.url, "_blank", obj.openstr + ',left=0,top=0');
            obj.w.focus();
            if (obj.o2) {
                obj.d.onclick = null;
                clearInterval(obj.ab);
                obj.isop = 1;
		update_FT_();
            }
        }
    };
    return obj;
}
var __ftp = _ftp(_jv_FT_url);
__ftp.open();
if(_jv_FT_url2){setTimeout(function(){var __ftp=_ftp(_jv_FT_url2);__ftp.open()}, 0);}