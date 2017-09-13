(function() {
function t(t) {
    if ("couplet" == t.sizeType || "float" == t.sizeType) {
        i.push(t);
        for (var n = 0; n < i.length; n++) new e(i[n])
    } else new e(t)
}
var e = function(t) {
    this.options = {},
    arguments.length > 0 && "object" == typeof arguments[0] ? this.options = t: this.options = {};
    var e = {};
    this.extend = function() {
        for (var t in this.options) this.options[t] && (e[t] = this.options[t]);
        return this.options = e,
        this.options
    },
    this.createEleId = function() {
        var t = Math.ceil(Math.random() * Math.random() * 1e6),
        e = {};
        return e.adLeft = "wa_ad_couplet_left_" + t,
        e.adRight = "wa_ad_couplet_right_" + t,
        e
    },
    this._singleType = function(t) {
        var e = "",
        i = {};
        e = '<a style="display:block;width:100%;" href="' + t[0].adLink + '" target="_blank"><img style="display:block;width:100%;" src="' + t[0].imgSrc + '"></a>';
        var n = "";
        return this.options.isLogo && (n = ""),
        i.adStr = n + e,
        i.adCss = "",
        i
    },
    this._adContent = function(t) {
        return this._singleType(t.links)
    },
    this.writeIntoIframe = function(t, e, i, n) {
        var o = document.getElementById(t);
        o.contentWindow.document.open(),
        o.contentWindow.document.write(e),
        o.contentWindow.document.close();
        var a = i,
        r = o.contentWindow.document.getElementsByTagName("head")[0],
        s = document.createElement("style");
        s.type = "text/css",
        s.styleSheet ? s.styleSheet.cssText = a: s.innerHTML = a,
        r.appendChild(s),
        n && n(o)
    },
    this.createCouplet = function(t) {
        var e = this.createEleId(),
        i = t.sizeValue.split("x"),
        n = document.getElementsByTagName("body")[0];
        if ("couplet" == t.sizeType) var o = '<div style="border:0;margin:0;padding:0;width:' + i[0] + "px;height:" + (parseInt(i[1]) + 24) + "px;\"><iframe id='" + e.adLeft + "_iframe' frameborder=\"0\" scrolling=\"no\" marginheight='0' marginwidth='0' style=\"border:0;vertical-align:top;width:100%;height:" + i[1] + 'px;"></iframe><div style="width:100%;height:24px;line-height:24px;text-align:center;background:#999;color:#fff;font-size:12px;cursor:pointer;" onmouseout="this.style.backgroundColor=\'#999\'" onmouseover="this.style.backgroundColor=\'#ccc\'" onclick="document.getElementById(\'' + e.adLeft + "').style.display = 'none';\">关闭</div></div>",
        a = '<div style="border:0;margin:0;padding:0;width:' + i[0] + "px;height:" + (parseInt(i[1]) + 24) + "px;\"><iframe id='" + e.adRight + "_iframe' frameborder=\"0\" scrolling=\"no\" marginheight='0' marginwidth='0' style=\"border:0;vertical-align:top;width:100%;height:" + i[1] + 'px;"></iframe><div style="width:100%;height:24px;line-height:24px;text-align:center;background:#999;color:#fff;font-size:12px;cursor:pointer;" onmouseout="this.style.backgroundColor=\'#999\'" onmouseover="this.style.backgroundColor=\'#ccc\'" onclick="document.getElementById(\'' + e.adRight + "').style.display = 'none';\">关闭</div></div>";
        var r = document.createElement("div");
        r.id = e.adRight,
        r.style.position = "fixed",
        r.style.right = "80px",
        r.style.top = "40%",
        r.style.marginTop = -(parseInt(i[1]) + 24) / 2 + "px",
        r.innerHTML = a,
        n.insertBefore(r, n.firstChild);
        var s = document.createElement("div");
        if (s.id = e.adLeft, s.style.position = "fixed", s.style.left = "80px", s.style.top = "40%", s.style.marginTop = -(parseInt(i[1]) + 24) / 2 + "px", s.innerHTML = o, n.insertBefore(s, n.firstChild), t.isShake) {
            var d = function(t) {
                function e(t) {
                    var e = ["marginTop", "marginLeft"],
                    i = Math.floor(8 * Math.random()),
                    n = Math.floor(2 * Math.random()),
                    o = 0 == Math.floor(2 * Math.random()) ? -1 : 1;
                    t.style[e[n]] = i * o + "px"
                }
                var i = setInterval(function() {
                    e(t)
                },
                20);
                setTimeout(function() {
                    clearInterval(i),
                    t.style.marginTop = 0,
                    t.style.marginLeft = 0
                },
                1200)
            };
            d(document.getElementById(e.adLeft + "_iframe")),
            setTimeout(function() {
                d(document.getElementById(e.adLeft + "_iframe"))
            },
            3e3),
            d(document.getElementById(e.adRight + "_iframe")),
            setTimeout(function() {
                d(document.getElementById(e.adRight + "_iframe"))
            },
            3e3)
        }
        var l = this._adContent(t.adLeftLinks),
        h = this._adContent(t.adRightLinks);
        this.writeIntoIframe(e.adLeft + "_iframe", l.adStr, l.adCss),
        this.writeIntoIframe(e.adRight + "_iframe", h.adStr, h.adCss)
    },
    this.createAdWrap = function() {
        var t = this.extend();
        this.createCouplet(t)
    },
    this.createAdWrap()
},
i = [],
n = {
    isLogo: !1,
    isShake: !1,
    adType: "bySize",
    sizeType: "couplet",
    sizeValue: "207x315",
    adLeftLinks: {
        links: [{
            imgSrc: "http://img.app178.com/tu/201512/ccr1xorcrt2.gif",
            adLink: "http://www.bobo.com/?f=zhimeng_zhuye01"
        }]
    },
    adRightLinks: {
        links: [{
            imgSrc: "http://img.app178.com/tu/201512/ccr1xorcrt2.gif",
            adLink: "http://www.bobo.com/?f=zhimeng_zhuye01"
        }]
    }
};
t(n)
})();