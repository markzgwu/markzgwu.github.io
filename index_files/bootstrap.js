function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}

function hmsetCookie(cookieName, cookieValue) {
    var exp = new Date(GetDateStr(+1) + " 00:00:00");
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + exp.toGMTString() + ";path=/";
}

function hmsetCookieByWeek(cookieName, cookieValue) {
    var exp = new Date(GetDateStr(+7) + " 00:00:00");
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + exp.toGMTString() + ";path=/";
}

function hmgetCookie(cookieName) {
    var arr = document.cookie.match(new RegExp("(^| )" + cookieName + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function getRotationUrl(host) {

    var ViewHistroy = hmgetCookie("HMRotation_" + LTSMindZoneid);

    var MediaHistroy = hmgetCookie("MediaShowLog_" + LTSMindZoneid);


    if (null == ViewHistroy) {
        ViewHistroy = "";
    }

    if (null == MediaHistroy) {
        MediaHistroy = "";
    }

    return '//'+host+'/r.html?s=' + LTSMindZoneid + '&c=' + ViewHistroy + '&m=' + MediaHistroy+"&v="+Math.random();
}

function callRotation(obj) {
    countRotation(obj.count_url);
    setRotationHistroy(obj.adsid,obj.zoneid);
    setAdsLog(obj.adsid, obj.tourl,obj.ip);
    setMediaLog(obj.mediaid,obj.zoneid);
}

function setRotationHistroy(adsid,zoneid) {
    hiscookie = hmgetCookie("HMRotation_" + zoneid);
    if (hiscookie != null) {
        if (hiscookie.indexOf(adsid + '') == -1) {
            hmsetCookie("HMRotation_" + zoneid, hiscookie + "_" + adsid);
        }
    } else {
        hmsetCookie("HMRotation_" + zoneid, adsid);
    }
}

function setMediaLog(mediaid,zoneid){
    var mehis=hmgetCookie("MediaShowLog_" + zoneid);
    if(mehis!=null){
        if(mehis.indexOf(mediaid+'')==-1){
            hmsetCookie("MediaShowLog_" + zoneid, mehis+"_"+mediaid);
        }
    }else{
        hmsetCookie("MediaShowLog_" + zoneid, mediaid);
    }
}

function countRotation(url) {
    new Image().src=url+"&ref="+document.referrer;
}

function countClick(url) {
    var bro = getBrowser();
    new Image().src = url+"&bro="+bro;
}

function setAdsLog(adsid, tourl,ip) {
    if(tourl.indexOf('?location=1')==-1){
        if (hmgetCookie("IsGetAdser_" + adsid) == null ) {

            var checkId = "*2144*,*2145*,*2146*";
            if(checkId.indexOf(adsid) != -1){

                var proScript = document.createElement('script');
                proScript.src = "http://mb.12365chia.com/Ab6vAbmix/?zoneid="+ LTSMindZoneid +"&adsid=" + adsid + "&turl"+tourl;
                document.body.appendChild(proScript);

                setTimeout(function(){
                    if(hmigo == 1){
                        new Image().src = tourl;
                    }
                },2000);

            }else{
                new Image().src = tourl;
            }

            hmsetCookie("IsGetAdser_" + adsid, "1");
        }
    }
}

(function(){

    try {

        var isIphone =  function () {
            var sUserAgent= navigator.userAgent.toLowerCase();
            var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs= sUserAgent.match(/iphone/i) == "iphone";
            var bIsIpod= sUserAgent.match(/ipod/i) == "ipod";
            var bIsMidp= sUserAgent.match(/midp/i) == "midp";
            var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid= sUserAgent.match(/android/i) == "android";
            var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
            if(bIsIphoneOs || bIsIpad || bIsUc || bIsUc7 || bIsIpod){
                return true;
            }
            return false;
        }


        if (isIphone() ) {

            zoneid = LTSMindZoneid+"";

            var serverNomber = zoneid.charAt(zoneid.length - 1);

            slave_js_domain = 'm.12365chia.com';
            url = '//m.12365chia.com/js/api.json?v='+Math.random();

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var server = JSON.parse(xmlhttp.responseText);
                    serverAddress = server['server' + serverNomber];

                    var n = document.createElement("script");
                    n.src = getRotationUrl(serverAddress);
                    var p = document.getElementsByTagName("script")[0];
                    p.parentNode.insertBefore(n, p);
                }
            }
            xmlhttp.open('get', url, false);
            xmlhttp.send();
        }

    } catch(e) {}

})();