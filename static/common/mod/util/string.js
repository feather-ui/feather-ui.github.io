!function(t,n){"function"==typeof define?define("/static/common/mod/util/string.js",function(t){return n(t("/static/common/mod/util/lib/crypto.js"),t("/static/common/mod/util/lib/base64.js"),t("/static/common/mod/util/object.js"))}):(t.FeatherUi=t.FeatherUi||{},t.FeatherUi.Util=t.FeatherUi.Util||{},t.FeatherUi.Util.string=n(CryptoJS,t,t.FeatherUi.Util.object))}(window,function(t,n,e){return{toPad:function(t,n,e,r){var i="";for(t=String(t),n=String(n),e-=t.length;e-->0;)i+=n;return 1==r?i+t:t+i},pad:function(t,n,e,r){return this.toPad(t,n,e,r)},nl2br:function(t){return String(t||"").replace(/[\r\n]/g,"<br />")},empty:function(t){return/^\s*$/.test(t)},reverse:function(t){return String(t).split("").reverse().join("")},md5:function(n,e){return n=t.MD5(String(n)).toString(),e?this.md5(this.reverse(n)+e):n},base64Encode:function(t){return n.btoa(t)},base64Decode:function(t){return n.atob(t)},crypto:t,toJSONString:e.toJSONString,jsonEncode:e.toJSONString,parseJSON:e.parseJSON,jsonDecode:e.parseJSON}});