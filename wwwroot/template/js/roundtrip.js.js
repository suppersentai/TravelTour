try {
    
    __adroll.load_adroll_tpc(__adroll.render_advertisable_cell);
}
catch(e) {}

try {
        function __adroll__(){this.version="2.0";this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[];this.cm_urls=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};this.pixelstart=this.session_time=0;this._init_floc_trial();for(var a=Array(4),c=0;c<a.length;c++)a[c]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""));this._has_global("adroll_adv_id")&&
(this.load_experiment_js(),this.init_pixchk(),this.trigger_gtm_consent_event(),this.load_pixel_assistant(),["adroll_adv_id","adroll_pix_id"].forEach(function(a){window.hasOwnProperty(a)&&("string"===typeof window[a]||window[a]instanceof String)&&(window[a]=window[a].replace(/[^A-Z0-9_]/g,""))}));this.is_under_experiment("pixel_timing")&&this._pixel_timing(!0,!0,null)};__adroll__.prototype.call_consent_check=function(){function a(){var a=["_s="+c.get_adroll_sid(),"_b=2"];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));window.adroll_fpconsent&&a.push("_afc=1");a=c._srv("/consent/check/"+c._global("adroll_adv_id")+"?"+a.join("&"));c.add_script_element(a)}var c=this;this._is_defined(window.adroll_fpconsent)?a():window.setTimeout(a,100)};
__adroll__.prototype.call_consent_write=function(a){window.adroll_fpconsent&&(a+="&_afc=1");this.add_script_element(this._srv("/consent/write?"+a))};__adroll__.prototype._consent_cookie=function(a){return a?(this.set("__adroll_consent",a,8760),a):this.get("__adroll_consent")};__adroll__.prototype.load_consent_banner=function(){window.document.getElementById("__adroll_consent_banner_el")||this.add_script_element("s.adroll.com/j/consent_tcfv2.js",{id:"__adroll_consent_banner_el"})};
__adroll__.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};__adroll__.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};__adroll__.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};__adroll__.prototype.handle_null_consent=function(a){a||(a=this.get_consent_params())&&this.call_consent_write(a)};
__adroll__.prototype.save_first_party_consent=function(a){var c=(a||{}).euconsent;if((a=(a||{}).arconsent)||c)this._consent_cookie(a),window.localStorage.setItem("__adroll_consent_data",this.jsonStringify({arconsent:a,euconsent:c}))};
__adroll__.prototype.get_first_party_consent=function(){if(this._has_global("__adroll_consent_data"))return this._global("__adroll_consent_data");var a=null;try{if(window.localStorage){var c=window.localStorage.getItem("__adroll_consent_data");c&&(a=this.jsonParse(c))}}catch(b){}if(c=this._consent_cookie())a=a||{},a.arconsent=c;this._set_global("__adroll_consent_data",a);return a};
__adroll__.prototype.trigger_gtm_consent_event=function(a){function c(a,c,b){c=isNaN(Number(c))?"c:"+c:"tcf:"+c;!0!==b&&!1!==b&&(b="unknown");a[b][c]=1}function b(a){return","+k.object_keys(a).join(",")+","}if(!window.dataLayer||"function"===typeof window.dataLayer.push)if(window.dataLayer=window.dataLayer||[],a){var e=this._global("__adroll_consent"),d=this._global("__adroll_consent_data")||{},p=d.eucookie||{},n=p.max_vendor_id||d.max_vendor_id||0,m=d.networks||[],l=p.purposes_allowed||0,h={"true":{},
"false":{},unknown:{}},g={"true":{},"false":{},unknown:{}},f={"true":{},"false":{}},k=this,q;if("boolean"===typeof e){for(q=0;q<m.length;q++)c(h,m[q],e);for(q=1;q<n;q++)c(h,q,e),c(g,q,e);for(q=1;25>q;q++)f[e][q]=1}else{for(q in e)e.hasOwnProperty(q)&&c(h,q,e[q]);for(q=1;q<=n;q++)c(g,q,(p.vendor_consent||{})[q]);for(q=0;24>q;q++)f[!!(l&1<<q)][q+1]=1}window.dataLayer.push({event:a,nextrollVendorsConsent:b(h["true"]),nextrollVendorsConsentUnknown:b(h.unknown),nextrollVendorsConsentDenied:b(h["false"]),
nextrollVendorsRawConsent:b(g["true"]),nextrollVendorsRawConsentUnknown:b(g.unknown),nextrollVendorsRawConsentDenied:b(g["false"]),nextrollPurposesConsent:b(f["true"]),nextrollPurposesConsentUnknown:null,nextrollPurposesConsentDenied:b(f["false"]),nextrollgdpr:this._global("__adroll_consent_is_gdpr"),nextrolliab:d.euconsent})}else window.dataLayer.push({event:"nextroll-ready"})};
__adroll__.prototype.set_consent=function(a,c,b,e,d,p){if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}var n="nextroll-consent";this._has_global("__adroll_consent")&&(n="nextroll-consent-modified");this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",b);this._set_global("__adroll_consent_data",p||{});e&&this._set_global("__adroll_consent_user_country",e);d&&this._set_global("__adroll_consent_adv_country",d);
b&&("adroll"===(p||{}).banner||c)&&this.load_consent_banner();null===a?this.handle_null_consent(c):(this.save_first_party_consent(p),c||this.clear_consent_params(),this._install_cmp&&this._install_cmp(),this._trigger_consent_event&&this._trigger_consent_event(),!1!==a&&!1!==(a||{}).a&&(this._log_floc_cohort(),this._log_xavier_cluster(),this.set_first_party_cookie(),this.trigger_gtm_consent_event(n),this.call_next_tpc()))};
__adroll__.prototype._load_precheck_js=function(){this.add_script_element("https://s.adroll.com/j/pre/"+window.adroll_adv_id+"/"+window.adroll_pix_id+"/fpconsent.js")};__adroll__.prototype.cookieEnabled=function(){if(this._broken)return!1;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),!0):!1};__adroll__.prototype.get=function(a){var c=window.document.cookie;if(null===c)return this._broken=!0,null;var b;0>c.indexOf(a+"=")?c=null:(a=c.indexOf(a+"=")+a.length+1,b=c.indexOf(";",a),-1===b&&(b=c.length),c=c.substring(a,b),c=""===c?null:window.unescape(c));return c};
__adroll__.prototype.set=function(a,c,b){var e;b&&"number"===typeof b?(e=new Date,e.setTime(e.getTime()+36E5*b),b=e.toGMTString(),b="; expires="+b):b="";e="; domain="+window.location.hostname;c=window.escape(c);window.document.cookie=a+"="+c+b+"; path=/"+e+"; samesite=lax"};__adroll__.prototype.del=function(a){this.set(a,"",-8760)};
__adroll__.prototype.check_cookie=function(a,c){for(var b=a.split("|"),e=b.length-1;0<=e;e--)if(b[e]){var d=b[e].split(":");c===d[0]&&(d[2]=""+(parseInt(d[2])+1),b[e]=d.join(":"))}return b.join("|")};__adroll__.prototype.handle=function(a){var c=this.get(this.__adc)||"";-1!==c.indexOf(a)?this.set(this.__adc,this.check_cookie(c,a),this.exp):(a=[c,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
__adroll__.prototype.expire_old=function(){for(var a=this.get_date(!1),c=this.get(this.__adc),c=c?c.split("|"):[""],b=[],e=c.length-1;0<=e;e--)c[e]&&""!==c[e]&&c[e].split(":")[1]>a&&b.push(c[e]);this.set(this.__adc,b.join("|"),this.exp)};__adroll__.prototype.get_date=function(a){var c=new Date;a&&c.setTime(c.getTime()+36E5*a);a=""+c.getUTCFullYear();var b=c.getUTCMonth(),b=10<=b?b:"0"+b,c=c.getUTCDate();return[a,b,10<=c?c:"0"+c].join("")};
__adroll__.prototype.set_pixel_cookie=function(a,c){this.handle(a);this.handle(c)};__adroll__.prototype.consent_allowed=function(a){var c=this._global("__adroll_consent");return"object"===typeof c?c[a]:c};__adroll__.prototype.listenToEvent=function(a,c,b){a.addEventListener?a.addEventListener(c,this.wrapException(b),!1):a.attachEvent("on"+c,this.wrapException(b))};__adroll__.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};__adroll__.prototype.runCookieMatch=function(){var a=this.cm_urls.length;if(!(0>=a))for(var c=0;c<=a;c++)this.popAndSend()};
__adroll__.prototype.popAndSend=function(){if(!(0>=this.cm_urls.length)){var a=this.cm_urls.shift(),c=new Image;c.src=a;c.setAttribute("alt","")}};__adroll__.prototype.add_param_to_url=function(a,c){var b=a.indexOf("?"),e="",d="";-1!==b?(e=a.slice(0,b+1),d="&"+a.slice(b+1)):(b=a.indexOf("#",-1===b?0:b),-1===b?e=a+"?":(e=a.slice(0,b)+"?",d=a.slice(b)));return e+c+d};__adroll__.prototype.dyno=function(a,c){if(a){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===b.HEADERS_RECEIVED&&"recordUser"!==a){var d=this.parseDynoResponseHeader(b.getAllResponseHeaders());this._queueAndCallback("dyno",[a,c,d])}}.bind(this);var e={},d;for(d in c)c.hasOwnProperty(d)&&(e[d]="object"===typeof c[d]?this.jsonStringify(c[d]):c[d]);e=this.get_segment_url(this._global("adroll_adv_id"),this._global("adroll_pix_id"),e);b.open("GET",e,!0);b.withCredentials=!0;
b.send()}};__adroll__.prototype.registerDynoCallback=function(a,c){this._registerCallback("dyno",a,c)};__adroll__.prototype.parseDynoResponseHeader=function(a){var c={};if(!a)return c;a=a.split("\n");for(var b=0,e=a.length;b<e;b++){var d=a[b],p=d.indexOf(":");if(0<p){var n=d.substring(0,p).trim().toLowerCase();this.startsWith(n,"x-")&&(c[n]=d.substring(p+1).trim())}}c&&c.hasOwnProperty("x-segment-eid")&&(window.adroll_seg_eid=c["x-segment-eid"]);return c};__adroll__.prototype.is_under_experiment=function(a){return window.adroll_exp_list&&0<=window.adroll_exp_list.indexOf(a)};__adroll__.prototype.load_experiment_js=function(){var a=window.document.getElementById("adroll_scr_exp");return a?a:this.add_script_element("https://s.adroll.com/j/exp/"+window.adroll_adv_id+"/index.js",{id:"adroll_scr_exp",onError:"window.adroll_exp_list = [];"})};__adroll__.prototype.is_experiment_js_loaded=function(){return!!window.adroll_exp_list};
__adroll__.prototype.is_test_advertisable=function(){return"ADV_EID"===this._global("adroll_adv_id")};__adroll__.prototype.if_under_experiment_js=function(a,c,b,e){var d=this;this.load_experiment_js();this.on_experiment_loaded(function(){d.is_under_experiment(a)?"function"===typeof c&&c.call(d):"function"===typeof b&&b.call(d)},e)};
__adroll__.prototype.on_experiment_loaded=function(a,c){function b(){if(d.is_experiment_js_loaded()||d.is_test_advertisable())e=!0;e?a.call(d):window.setTimeout(b,10)}var e=!1,d=this;window.setTimeout(function(){e=!0},c||500);b()};__adroll__.prototype.external_data_to_qs=function(a,c){var b=[];if(!a)return null;for(var e in a)a.hasOwnProperty(e)&&this._is_defined(a[e])&&null!==a[e]&&b.push(this.normalize_var(window.escape(""+e)+"="+window.escape(""+a[e]),!1));b=b.join("&");c&&(b=window.escape(b));return"adroll_external_data="+b};
__adroll__.prototype.get_page_properties=function(){if(this._has_global("adroll_page_properties")){var a=this._global("adroll_page_properties"),c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c}return null};
__adroll__.prototype.parse_conversion_attrs=function(a){if(!a)return null;for(var c={},b=["conv_value","conversion_value"],e=["adroll_currency","currency"],d=0;d<b.length;d++)if(a.hasOwnProperty(b[d])){c.conv_value=a[b[d]];break}for(b=0;b<e.length;b++)if(a.hasOwnProperty(e[b])){c.currency=a[e[b]];break}return 1<=Object.keys(c).length?c:null};
__adroll__.prototype.get_conversion_value=function(a){var c=this._ensure_global("adroll_currency",null),b=this._ensure_global("adroll_conversion_value",null),e=this._ensure_global("adroll_conversion_value_in_dollars",null);return(a=this.parse_conversion_attrs(a))?a:b?{conv_value:""+b,currency:c}:e?{conv_value:""+parseInt(100*e),currency:"USC"}:null};__adroll__.prototype._has_global=function(a){return this._is_defined(this._global(a))};__adroll__.prototype._global=function(a){return window[a]};__adroll__.prototype._set_global=function(a,c){window[a]=c};__adroll__.prototype._unset_global=function(a){delete window[a]};__adroll__.prototype._ensure_global=function(a,c){this._has_global(a)||this._set_global(a,c);return this._global(a)};__adroll__.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};__adroll__.prototype.jsonParse=function(a){var c=this._global("JSON");return"function"===typeof c.parse?c.parse(a):eval("("+a+")")};
__adroll__.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a&&a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(c){return d[c]||"\\u"+(c.charCodeAt(0)+65536).toString(16).substr(1)}var b=Object.prototype.toString,e=Array.isArray||function(a){return"[object Array]"===b.call(a)},d={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},p=/[\\"\u0000-\u001F\u2028\u2029]/g;return function m(d){if(null===d)return"null";
if("number"===typeof d)return isFinite(d)?d.toString():"null";if("boolean"===typeof d)return d.toString();if("object"===typeof d){if("function"===typeof d.toJSON)return m(d.toJSON());if(e(d)){for(var h="[",g=0;g<d.length;g++)h+=(g?", ":"")+m(d[g]);return h+"]"}if("[object Object]"===b.call(d)){h=[];for(g in d)d.hasOwnProperty(g)&&h.push(m(g)+": "+m(d[g]));return"{"+h.join(", ")+"}"}}return'"'+d.toString().replace(p,a)+'"'}}()};__adroll__.prototype.serialize=function(a){if(a.length){for(var c=[],b=a.length-1;0<=b;b--)c.push(a[b].join("="));return c.join("&")}return""};__adroll__.prototype.endswith=function(a,c){return-1!==a.indexOf(c,a.length-c.length)};__adroll__.prototype.buildurl=function(a,c){var b=this.serialize(c),e=a.indexOf("?");return b?e===a.length-1?a+b:-1!==e?"&"===a[a.length-1]?a+b:a+"&"+b:a+"?"+b:a};__adroll__.prototype.md5=function(){function a(a,c){var b=(a&65535)+(c&65535);return(a>>16)+(c>>16)+(b>>16)<<16|b&65535}function c(c,b,d,e,f,k){b=a(a(b,c),a(e,k));return a(b<<f|b>>>32-f,d)}function b(a,b,d,e,f,k,n){return c(b&d|~b&e,a,b,f,k,n)}function e(a,b,d,e,f,k,n){return c(b&e|d&~e,a,b,f,k,n)}function d(a,b,d,e,f,k,n){return c(d^(b|~e),a,b,f,k,n)}function p(m,l){var h=m[0],g=m[1],f=m[2],k=m[3],h=b(h,g,f,k,l[0],7,-680876936),k=b(k,h,g,f,l[1],12,-389564586),f=b(f,k,h,g,l[2],17,606105819),g=b(g,
f,k,h,l[3],22,-1044525330),h=b(h,g,f,k,l[4],7,-176418897),k=b(k,h,g,f,l[5],12,1200080426),f=b(f,k,h,g,l[6],17,-1473231341),g=b(g,f,k,h,l[7],22,-45705983),h=b(h,g,f,k,l[8],7,1770035416),k=b(k,h,g,f,l[9],12,-1958414417),f=b(f,k,h,g,l[10],17,-42063),g=b(g,f,k,h,l[11],22,-1990404162),h=b(h,g,f,k,l[12],7,1804603682),k=b(k,h,g,f,l[13],12,-40341101),f=b(f,k,h,g,l[14],17,-1502002290),g=b(g,f,k,h,l[15],22,1236535329),h=e(h,g,f,k,l[1],5,-165796510),k=e(k,h,g,f,l[6],9,-1069501632),f=e(f,k,h,g,l[11],14,643717713),
g=e(g,f,k,h,l[0],20,-373897302),h=e(h,g,f,k,l[5],5,-701558691),k=e(k,h,g,f,l[10],9,38016083),f=e(f,k,h,g,l[15],14,-660478335),g=e(g,f,k,h,l[4],20,-405537848),h=e(h,g,f,k,l[9],5,568446438),k=e(k,h,g,f,l[14],9,-1019803690),f=e(f,k,h,g,l[3],14,-187363961),g=e(g,f,k,h,l[8],20,1163531501),h=e(h,g,f,k,l[13],5,-1444681467),k=e(k,h,g,f,l[2],9,-51403784),f=e(f,k,h,g,l[7],14,1735328473),g=e(g,f,k,h,l[12],20,-1926607734),h=c(g^f^k,h,g,l[5],4,-378558),k=c(h^g^f,k,h,l[8],11,-2022574463),f=c(k^h^g,f,k,l[11],16,
1839030562),g=c(f^k^h,g,f,l[14],23,-35309556),h=c(g^f^k,h,g,l[1],4,-1530992060),k=c(h^g^f,k,h,l[4],11,1272893353),f=c(k^h^g,f,k,l[7],16,-155497632),g=c(f^k^h,g,f,l[10],23,-1094730640),h=c(g^f^k,h,g,l[13],4,681279174),k=c(h^g^f,k,h,l[0],11,-358537222),f=c(k^h^g,f,k,l[3],16,-722521979),g=c(f^k^h,g,f,l[6],23,76029189),h=c(g^f^k,h,g,l[9],4,-640364487),k=c(h^g^f,k,h,l[12],11,-421815835),f=c(k^h^g,f,k,l[15],16,530742520),g=c(f^k^h,g,f,l[2],23,-995338651),h=d(h,g,f,k,l[0],6,-198630844),k=d(k,h,g,f,l[7],
10,1126891415),f=d(f,k,h,g,l[14],15,-1416354905),g=d(g,f,k,h,l[5],21,-57434055),h=d(h,g,f,k,l[12],6,1700485571),k=d(k,h,g,f,l[3],10,-1894986606),f=d(f,k,h,g,l[10],15,-1051523),g=d(g,f,k,h,l[1],21,-2054922799),h=d(h,g,f,k,l[8],6,1873313359),k=d(k,h,g,f,l[15],10,-30611744),f=d(f,k,h,g,l[6],15,-1560198380),g=d(g,f,k,h,l[13],21,1309151649),h=d(h,g,f,k,l[4],6,-145523070),k=d(k,h,g,f,l[11],10,-1120210379),f=d(f,k,h,g,l[2],15,718787259),g=d(g,f,k,h,l[9],21,-343485551);m[0]=a(h,m[0]);m[1]=a(g,m[1]);m[2]=
a(f,m[2]);m[3]=a(k,m[3])}var n="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=b.length;d+=64){for(var e=b.substring(d-64,d),k=[],q=void 0,q=0;64>q;q+=4)k[q>>2]=e.charCodeAt(q)+(e.charCodeAt(q+1)<<8)+(e.charCodeAt(q+2)<<16)+(e.charCodeAt(q+3)<<24);p(a,k)}b=b.substring(d-64);e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<b.length;d++)e[d>>2]|=b.charCodeAt(d)<<(d%
4<<3);e[d>>2]|=128<<(d%4<<3);if(55<d)for(p(a,e),d=0;16>d;d++)e[d]=0;e[14]=8*c;p(a,e);for(b=0;b<a.length;b++){c=a;d=b;e=a[b];k="";for(q=0;4>q;q++)k+=n[e>>8*q+4&15]+n[e>>8*q&15];c[d]=k}return a.join("")}}();__adroll__.prototype._init_floc_trial=function(){var a=window.document.createElement("meta");a.httpEquiv="origin-trial";a.content="A41wt2Lsq30A9Ox/WehogvJckPI4aY9RoSxhb8FMtVnqaUle1AtI6Yf7Wk+7+Wm0AfDDOkMX+Wn6wnDpBWYgWwYAAAB8eyJvcmlnaW4iOiJodHRwczovL2Fkcm9sbC5jb206NDQzIiwiZmVhdHVyZSI6IkludGVyZXN0Q29ob3J0QVBJIiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==";this._head().appendChild(a)};
__adroll__.prototype._log_floc_cohort=function(){var a=this._global("adroll_seg_eid")||"";if("function"===typeof window.document.interestCohort){var c=this;window.document.interestCohort().then(function(b){if(b){var e=b.id;b=b.version;e&&b&&c._log_pex_event("floc",e,b,{seg:a},null)}})["catch"](function(a){c.log("floc-error:"+a)})}};
__adroll__.prototype._log_xavier_cluster=function(){function a(){window.RetrieveClusterID?window.RetrieveClusterID(function(a){d._log_pex_event("xidctx",a,"")}):window.setTimeout(function(){a()},10)}var c=this._ctx_filter();if(!window.document.getElementsByTagName("html")[0].innerHTML.match(c)){var c=this._ensure_global("adroll_adv_id",""),b=c.substr(-1),e="ABCDEFGM".split(""),d=this;"ADV_EID"!==c&&-1!==e.indexOf(b)&&(d.add_script_element("https://s.dca0.com/ctx.v1.1.min.js?1635953272"),a())}};
__adroll__.prototype._log_pex_event=function(a,c,b,e,d){a=encodeURIComponent(a);c=encodeURIComponent(c);b=encodeURIComponent(b);var p=this._ensure_global("adroll_adv_id",""),n=n?"&"+encodeURIComponent(this.jsonStringify(d)):"";d="";"object"===typeof e&&(d="&"+this.object_to_querystring(e));e=this._srv("/pex/"+p+"?ev="+a+"&es="+c+"&esv="+b+"&pv="+this.pv+d+n);"function"===typeof navigator.sendBeacon?navigator.sendBeacon(e):this.imgRequest(e)};
__adroll__.prototype._ctx_filter=function(){return new RegExp(atob("bWFnZW50bw"),"i")};
__adroll__.prototype._pixel_timing=function(a,c,b){function e(){m.session_time+=(new Date).getTime()-(b||0)}function d(a,b){var c=["f="+a];"undefined"!==typeof b&&c.push("ft="+b);c=m._srv("/onp/"+m._global("adroll_adv_id")+"/"+m._global("adroll_pix_id")+"?"+c.join("&"));"function"===typeof navigator.sendBeacon?navigator.sendBeacon(c):m.imgRequest(c)}function p(a,b){!b||!0!==window.__adroll_consent&&!0!==(window.__adroll_consent||{}).a||(e(),d(m.session_time,"preconsent"),"object"===typeof window.performance&&
d(m.pixelstart-window.performance.timing.domInteractive,"prepixel"))}function n(a){if("visible"===window.document.visibilityState||a.type in h)m._pixel_timing(!1,!1,l);else if("hidden"===window.document.visibilityState||a.type in g)!0===window.__adroll_consent||!0===(window.__adroll_consent||{}).a?(e(),d(m.session_time)):e()}var m=this,l=(new Date).getTime(),h=["focus","focusin","pageshow"],g=["blur","focusout","pagehide"];0===m.pixelstart&&(m.pixelstart=l);"function"===typeof window.__tcfapi&&!0===
c&&(c=!1,window.__tcfapi("addEventListener",2,p));!0!==window.__adroll_consent&&!0!==(window.__adroll_consent||{}).a?window.setTimeout(function(){m._pixel_timing(!0,c,l)},500):!0===a&&("hidden"in window.document?window.document.addEventListener("visibilitychange",n):"mozHidden"in window.document?window.document.addEventListener("mozvisibilitychange",n):"webkitHidden"in window.document?window.document.addEventListener("webkitvisibilitychange",n):"msHidden"in window.document?window.document.addEventListener("msvisibilitychange",
n):"onfocusin"in window.document?(window.document.addEventListener("focusin",n),window.document.addEventListener("focusout",n)):(window.document.addEventListener("pageshow",n),window.document.addEventListener("pagehide",n),window.document.addEventListener("focus",n),window.document.addEventListener("blur",n)))};__adroll__.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};__adroll__.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};__adroll__.prototype.facebook_dummy_product_enabled=function(){return!0};
__adroll__.prototype.extract_pid=function(a,c,b,e,d){a||(a={});var p=null,n=this._gurl(),p=null;if("2.0"!==this.get_version())return null;var p="productView"===c?"":c,m=null;b&&(m=b.products);m&&0!==m.length||(m=this.extract_product_from_rollcrawl_opts(a,n));(!m||0===m.length)&&b&&b.hasOwnProperty("product_id")&&b.product_id&&(m=[this.copyObj(b,["products"])]);a=[];if(m)for(n=0;n<m.length;n++){var l=m[n].product_id;null!==l&&""!==l&&"undefined"!==l&&a.push(m[n])}if(a&&0!==a.length)p={product_action:p,
product_list:a};else if(this.facebook_dummy_product_enabled()&&"facebook"===e)p=this.get_dummy_product_for_facebook(null);else return this._callUserEventEndpoint(c,b),null;d&&d(p);return p};
__adroll__.prototype.extract_product_from_rollcrawl_opts=function(a,c){function b(a){return a?(a=new RegExp(a,"gi"),!!a.exec(c)):null}var e=null,d=null,p=null;if(a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(b(a.blacklist_regexp)||!0!==b(a.regexp))return"";e=this.get_product_id_from_dom(a.regexp_group)}else if(!e){if(b(a.blacklist_regexp))return"";e=this.get_product_id_from_url(c,a.regexp,a.regexp_group)}d||!a.product_group_group||
"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?d||a.product_group_regexp&&(d=this.get_product_id_from_url(c,a.product_group_regexp,a.product_group_group)):d=this.get_product_id_from_dom(a.product_group_group);if(e){var n={},p=[];n.product_id=e;n.product_group=d;p.push(n)}return p};
__adroll__.prototype.get_pid=function(a){var c=function(b,c){this.is_product_event(b)&&this.extract_pid(a,b,c,"adroll",function(a){if(a){var p=a.product_action,n=a.product_list;if(n&&0!==n.length){a=this.copyObj(c)||{};var m=[];p&&m.push(["adroll_product_action",this.normalize_var((p+"").toLowerCase(),!0)]);n&&(m.push(["adroll_products",window.encodeURIComponent(this.jsonStringify(n))]),a.products||(a.products=n));m.push(["adroll_version",this.get_version()]);(p=this.external_data_to_qs(c,!0))&&m.push([p]);
p=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",m));m=window.document.createElement("img");m.src=p;m.height=m.width=1;m.border=0;m.setAttribute("alt","");this._head().appendChild(m);this._callUserEventEndpoint(b,a)}}}.bind(this))}.bind(this);this.registerTrackCallback(c,"productEventCallback")};
__adroll__.prototype.get_product_id_from_dom=function(a){var c=null,b;a.path&&(window.jQuery?(b=window.jQuery(a.path),b.length&&(b=b.eq(0),c="text"===a.attribute?b.text():b.attr(a.attribute))):window.Prototype&&window.$$?(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.innerText&&!window.opera?b.innerText:b.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):b.readAttribute(a.attribute))):window.YUI?(b=window.YUI().use("node"),b.one&&(b=b.one(a.path),c=null,b&&(c="text"===
a.attribute?b.get("text"):b.getAttribute(a.attribute)))):window.MooTools&&window.$$&&(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.get("text"):b.getProperty(a.attribute))));if(c&&(c=c.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(b=new RegExp(a.regular_expression,"gi"),c=b.exec(c),null!==c){a=a.regular_expression_replace;for(b=0;b<c.length;b++)a=a.replace(new RegExp("\\\\"+b,"gi"),c[b]||"");c=a}else c="";return c};
__adroll__.prototype.get_product_id_from_url=function(a,c,b){var e=null;try{e=parseInt(b)}catch(d){}return null!==e&&!isNaN(e)&&c&&(a=(new RegExp(c,"gi")).exec(a),null!==a&&e in a)?a[e]:null};__adroll__.prototype.get_segment_url=function(a,c,b){this.expire_old();var e=this.get_keywords(),d=[];try{d.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(f){}try{d.push("keyw="+window.escape(e))}catch(f){}try{var p=b.segment_name||b.adroll_segments;this.is_null_or_blank(p)||d.push("name="+window.escape(p.toLowerCase()))}catch(f){}try{var n=this.get_conversion_value(b);n.conv_value&&d.push("conv_value="+n.conv_value);n.currency&&d.push("adroll_currency="+n.currency)}catch(f){}try{var m=
b.adroll_email;if(!this.is_null_or_blank(m)){var m=m.replace(/^\s+|\s+$/g,""),l=m.toLowerCase();this.is_already_hashed(l)?d.push("hashed_email="+l):this.is_email_valid(m)?d.push("hashed_email="+this.md5(l)):(d.push("data_error=email"),d.push("data_error_message=invalid_format"))}}catch(f){}try{if(this._has_user_identifier()){var h=this._global("adroll_user_identifier"),h=h.replace(/^\s\s*/,"").replace(/\s\s*$/,"");d.push("user_identifier="+window.encodeURIComponent(h))}}catch(f){}try{var g=this.external_data_to_qs(b,
!0);g&&d.push(g)}catch(f){}d.push("adroll_version="+this.get_version());return this._srv(this.get_base_url("/segment",a,c,null,"",d))};
__adroll__.prototype.loadGlobalFunctions=function(){var a=this._global("adroll");if(a&&"object"===typeof a){var c=this;a.setProperties=function(){return c.setProperties.apply(c,arguments)};a.identify=function(){return c.identify.apply(c,arguments)};a.track=function(){return c.track.apply(c,arguments)};for(var b,e,d=0;d<a.length;d++)b=a[d][0],e=a[d][1],"setProperties"===b?this.setProperties.apply(this,e):"identify"===b?this.identify.apply(this,e):"track"===b&&this.track.apply(this,e)}};
__adroll__.prototype.get_base_url=function(a,c,b,e,d,p){var n=a.split("?");a=n[0]+"/"+c+"/"+b+(e?"/"+e:"")+(d?"/"+d:"");var m="?";n[1]&&(a+="?"+n[1],m="&");var n=m+"no-cookies=1&pv=",l="";this.cookieEnabled()?(l=window.escape(this.get_eids()),a+=m+"pv="+this.pv+"&cookie="+l):a+=n+this.pv;p&&(a+="&"+p.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){try{this.del(this.__adc)}catch(h){}if(a.length-l.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(c,b,
e,d,p)}this.log("Generated url: "+a);return a};__adroll__.prototype.add_script_element=function(a,c){var b=window.document.createElement("script"),e=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(e="");for(var d in c)c.hasOwnProperty(d)&&"src"!==d&&b.setAttribute(d,c[d]);b.type="text/javascript";b.src=e+a;this._head().appendChild(b);return b};__adroll__.prototype.get_url=function(a,c,b,e,d){var p=b?this._srv("/c"):this._srv("/r");return this.get_base_url(p,a,c,b,e,d)};
__adroll__.prototype.get_eids=function(){try{for(var a=this.get(this.__adc),c=a?a.split("|"):"",a=[],b=c.length-1;0<=b;b--)if(c[b]&&""!==c[b]){var e=c[b].split(":");a.push([e[0],e[2]].join(":"))}return a.join("|")}catch(d){return this.del(this.__adc),""}};__adroll__.prototype.sha256=function(a){function c(a,b){return a>>>b|a<<32-b}var b=window.unescape(window.encodeURIComponent(a)),e=Math.pow(2,32),d,p="",n=[],m=8*b.length,l=[],h=[];d=0;for(var g={},f=2;64>d;f++)if(!g[f]){for(a=0;313>a;a+=f)g[a]=f;l[d]=Math.pow(f,.5)*e|0;h[d++]=Math.pow(f,1/3)*e|0}for(b+="\u0080";0!==b.length%64-56;)b+="\x00";for(a=0;a<b.length;a++){d=b.charCodeAt(a);if(d>>8)return null;n[a>>2]|=d<<(3-a)%4*8}n[n.length]=m/e|0;n[n.length]=m;for(d=0;d<n.length;){b=n.slice(d,d+=16);e=
l;l=l.slice(0,8);for(a=0;64>a;a++){var g=b[a-15],f=b[a-2],m=l[0],k=l[4],g=l[7]+(c(k,6)^c(k,11)^c(k,25))+(k&l[5]^~k&l[6])+h[a]+(b[a]=16>a?b[a]:b[a-16]+(c(g,7)^c(g,18)^g>>>3)+b[a-7]+(c(f,17)^c(f,19)^f>>>10)|0),m=(c(m,2)^c(m,13)^c(m,22))+(m&l[1]^m&l[2]^l[1]&l[2]),l=[g+m|0].concat(l);l[4]=l[4]+g|0}for(a=0;8>a;a++)l[a]=l[a]+e[a]|0}for(a=0;8>a;a++)for(d=3;d+1;d--)n=l[a]>>8*d&255,p+=(16>n?0:"")+n.toString(16);return p};__adroll__.prototype.record_user=function(a){a=a||{};try{this._unset_global("adroll_page_properties")}catch(c){}Object.keys(a).length&&this._set_global("adroll_page_properties",a);this.dyno("recordUser",a)};
__adroll__.prototype.record_adroll_email=function(a){if(this._has_email()){var c=this._global("_adroll_email"),c=c.replace(/^\s+|\s+$/g,""),b,e,d=c.toLowerCase(),p=this.is_email_valid(c);this.is_already_hashed(d)?b=d:p&&(b=this.md5(d),e=this.sha256(d));c="/id/"+this._global("adroll_adv_id")+"/";b={hashed_email:b,sha256_email:e};p&&(d=d.split("@")[1],b.email_domain=d);a&&(b.idsource=a);c+=this._reg_lpq("?epq",b);this.imgRequest(this._srv(c))}};
__adroll__.prototype._send_plain_text_identifiers=function(a,c,b){if((a||c)&&b){b={idsource:b};var e="/id/"+this._global("adroll_adv_id")+"/";if(a){a=a.replace(/^\s+|\s+$/g,"").toLowerCase();var d=a.split("@")[1];b.email=a;b.hashed_email=this.md5(a);b.sha256_email=this.sha256(a);b.email_domain=d}c&&(b.user_identifier=c);e+=this._reg_lpq("?epq",b);this.imgRequest(this._srv(e))}};__adroll__.prototype._has_email=function(){return this._has_global("_adroll_email")};
__adroll__.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};__adroll__.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};__adroll__.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
__adroll__.prototype.identify=function(a,c){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,c||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var b=this.copyObj(a,["email","userId"]);b&&(b=this._srv("/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(b))),c&&(b+="&idsource="+c),this.imgRequest(b));this._queueAndCallback("identify",[a,c])};
__adroll__.prototype.setProperties=function(a){if(this._has_global("adroll_page_properties")){var c=this._global("adroll_page_properties");this._unset_global("adroll_page_properties");this.extendObj(c,a);this._set_global("adroll_page_properties",c)}else this._set_global("adroll_page_properties",a)};__adroll__.prototype.appendPageProperties=function(a){this._has_global("adroll_page_properties")&&(a=this.extendObj(this._global("adroll_page_properties"),a));return a};
__adroll__.prototype._callUserEventEndpoint=function(a,c){var b=this._srv("/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a)+"&adroll_version="+this.get_version()),e=this.copyObj(c);if(e){b+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(e));try{var d=this.get_conversion_value(e);d.conv_value&&(b+="&conv_value="+window.encodeURIComponent(d.conv_value));d.currency&&(b+="&adroll_currency="+window.encodeURIComponent(d.currency))}catch(p){}}this.imgRequest(b)};
__adroll__.prototype.track=function(a,c){this._track_pxl_assistant(a,c);a&&this._ensure_global("__adroll_consent",null)&&(c=c?this.appendPageProperties(c):this.get_page_properties(),"pageView"===a?this.dyno("fbDynoCallback",c):(this.is_product_event(a)?this.get_pid(this._global("adroll_rollcrawl_opts")):this._callUserEventEndpoint(a,c),this._queueAndCallback("track",[a,c])))};
__adroll__.prototype._reg_lpq=function(a,c){var b,e,d=[],p={},n=btoa(this.object_to_querystring(c));if(!n)return"";for(b=65;91>b;b++)d.push(String.fromCharCode(b));n=n.split("");d.push("-","_","\t");n=n.reverse();d.splice(13,0,"+","/","=");for(b=0;b<d.length-3;b++)e=d.concat(d)[b+d.length/2],p[d[b]]=e,p[d[b].toLowerCase()]=e.toLowerCase();return(d=n.map(function(a){return p[a]||a}).join("").trim())?a+"="+d:""};
__adroll__.prototype._registerCallback=function(a,c,b){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof c||-1<this.callbackNames.indexOf(b))&&(this.callbackNames.push(b),this.callbacks[a].push(c),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(b=0;b<this.callbackQueues[a].length;b++)c.apply(null,this.callbackQueues[a][b])};
__adroll__.prototype._queueAndCallback=function(a,c){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(c);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var b=0;b<this.callbacks[a].length;b++)this.callbacks[a][b].apply(null,c)};__adroll__.prototype.registerIdentifyCallback=function(a,c){this._registerCallback("identify",a,c)};
__adroll__.prototype.registerTrackCallback=function(a,c){this._registerCallback("track",a,c)};__adroll__.prototype._track_pxl_assistant=function(a,c){this._has_global("__adroll_pxl_assistant_track")||this._set_global("__adroll_pxl_assistant_track",[]);this._global("__adroll_pxl_assistant_track").push({eventName:a,eventAttrs:c});if(this._nrpa_event_handler)try{this._nrpa_event_handler({track:this._global("__adroll_pxl_assistant_track")})}catch(b){}};__adroll__.prototype._is_defined=function(a){return"undefined"===a||"null"===a?!1:"undefined"!==typeof a};__adroll__.prototype.is_null_or_blank=function(a){return null===a||!this._is_defined(a)||""===a.trim()};__adroll__.prototype.normalize_var=function(a,c){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");c&&(a=window.escape(a));return a};__adroll__.prototype.get_version=function(){return this._has_global("adroll_version")?this._global("adroll_version"):"2.0"};
__adroll__.prototype.is_product_event=function(a){return-1!==this.product_events.indexOf(a)};__adroll__.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var c=this.parseUri(a);return-1!==c.host.indexOf("www.google.")?c.queryKey.q.substring(0,this._kwl):-1!==c.host.indexOf("bing.com")?c.queryKey.q.substring(0,this._kwl):""}catch(b){return""}};
__adroll__.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var c={queryKey:{}},b=14,e="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");b--;)c[e[b]]=a[b]||"";c[e[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,e){b&&(c.queryKey[b]=e)});return c};
__adroll__.prototype.has_param_in_url=function(a,c){var b=a.split("?");return 1<b.length&&-1!==("&"+b[1]).indexOf("&"+c+"=")};__adroll__.prototype._srv=function(a){a=this._is_defined(a)?a:"";a=this.add_tpc_to_url("https://d.adroll.com"+a);this._has_global("__adroll_xid_ch")&&(a=this.add_param_to_url(a,"xid_ch="+(0!==this._global("__adroll_xid_ch")?"t":"f")));if(!this.has_param_in_url(a,"arrfrr")){var c=this._get_arrfrr();a=this.add_param_to_url(a,"arrfrr="+encodeURIComponent(c))}return this.add_consent_to_url(this.add_fpc_to_url(a))};
__adroll__.prototype._get_arrfrr=function(a){a||(a=window.location.href);var c=a.split("#");a=c.shift();var c=c.length?"#"+c.join("#"):null,b=a.split("?"),e=this;if(1<b.length){var d=b[1].replace(/([^&=]+)=([^&]+)/g,function(a,b,c){return b.match(/cc_number|credit_card|card_number|cv[cv]_code/)||e.is_luhn(unescape(c))?b+"=NR_REDACT":b+"="+c});b[1]!==d&&(a=b[0]+"?"+d)}c&&(a+=c);return a};
__adroll__.prototype.is_luhn=function(a){if("string"!==typeof a)return!1;a=a.replace(/\D/g,"");if(13>a.length||19<a.length)return!1;for(var c=0,b=!1,e,d=a.length-1;0<=d;d--)e=parseInt(a.charAt(d),10),b&&(e*=2,9<e&&(e-=9)),c+=e,b=!b;return 0===c%10};__adroll__.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};__adroll__.prototype.log=function(a){this._logs.push(a)};__adroll__.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};
__adroll__.prototype.normalize_url=function(a){return a.toLowerCase()};__adroll__.prototype.imgRequest=function(a){var c=new window.Image;c.src=this.add_tpc_to_url(a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");c.setAttribute("alt","");return this._head().appendChild(c)};
__adroll__.prototype.b64toint=function(a){function c(a,b){if(1>b)return"";if(b%2)return c(a,b-1)+a;var d=c(a,b/2);return d+d}var b="",e;a=a.replace("-","+").replace("_","/");for(var d=0;d<a.length;d++)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[d]).toString(2),b=b+c("0",6-e.length)+e;return parseInt(b,2)};__adroll__.prototype.copyObj=function(a,c){if(!a)return null;var b={},e=0,d;for(d in a)!a.hasOwnProperty(d)||c&&-1!==c.indexOf(d)||(e++,b[d]=a[d]);return e?b:null};
__adroll__.prototype.extendObj=function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a};__adroll__.prototype.startsWith=function(a,c){return a.substring(0,c.length)===c};__adroll__.prototype.convert_to_map=function(a){if(null===a)return null;var c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c};
__adroll__.prototype.object_keys=function(a){if(window.Object&&window.Object.keys)return Object.keys(a);if("object"===typeof a)return[];var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(b);return c};__adroll__.prototype.wrapException=function(a){return function(c){try{return a(c)}catch(b){}}};
__adroll__.prototype.add_tpc_to_url=function(a){var c=this._global("adroll_tpc");if(!a||!c)return a;var b=a.substr(a.indexOf("://")+3).split("/")[0];if(a.match(/[?&]adroll_tpc=/)&&"d.adroll.com"!==b)return a;0<(this._global("__adroll_xid_ch")||0)&&(c=c+"&xid_src="+(1===this._global("__adroll_xid_ch")?"cache":"srv"));return this.add_param_to_url(a,"adroll_tpc="+encodeURIComponent(c))};
__adroll__.prototype.add_fpc_to_url=function(a){var c=this.get_first_party_cookie();if(!a||!c)return a;var b=this.parseUri(a);return b.queryKey.adroll_fpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port?a:this.add_param_to_url(a,"adroll_fpc="+encodeURIComponent(c))};
__adroll__.prototype.add_consent_to_url=function(a){if(!a)return a;if(this.has_param_in_url(a,"_arc"))return a;var c=this.get_first_party_consent();if(!c||!c.arconsent)return a;var b=a.match(/^\w+:\/\/([^\/]+)/);return b&&"d.adroll.com"!==b[1]?a:this.add_param_to_url(a,"_arc="+encodeURIComponent(c.arconsent))};
__adroll__.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};__adroll__.prototype.set_tpc=function(a,c){var b=this.tpc_callback();a&&c&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(c));b&&b.call(this)};
__adroll__.prototype.tpc_callback=function(a){var c=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return a||window.adroll_xavier_called||(window.adroll_xavier_called=1,!this.call_xavier(c))?c:null};__adroll__.prototype.call_next_tpc=function(a){(a=this.tpc_callback(a))&&a.call(this)};__adroll__.prototype.extract_query_param=function(a,c){for(var b=c.split("&"),e=0;e<b.length;e++){var d=b[e].split("=");if(decodeURIComponent(d[0])===a)return decodeURIComponent(d[1])}return null};
__adroll__.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};__adroll__.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};__adroll__.prototype.get_tpc_decode_timeout=function(){return 1500};
__adroll__.prototype.call_xavier=function(a){function c(){window.RetrieveAdID&&(e=!0);if(e)if(window.RetrieveAdID){b.tpc_callback(a);var d=window.setTimeout(function(){b.set_tpc(null)},b.get_tpc_decode_timeout());window.RetrieveAdID(function(a){a&&(b._set_global("__adroll_xid_ch",1),window.clearTimeout(d),b.set_tpc("xavier",a))},function(a){b._set_global("__adroll_xid_ch",2);window.clearTimeout(d);b.set_tpc("xavier",a)})}else b._set_global("__adroll_xid_ch",0),a&&a.call(b);else window.setTimeout(function(){c()},
10)}var b=this,e=!1,d=navigator.userAgent.toLowerCase();if("US"!==this._global("__adroll_consent_user_country")||window.location.hostname.match(/(rakuten\.co\.jp|summo\.jp|goo-net\.com|dmm\.com|beforward\.jp)$/)||!(d.match(/intel mac.*? safari/)&&-1===d.indexOf("chrome")&&0<navigator.maxTouchPoints)&&(!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b/)||9>parseInt(d.substr(d.indexOf(") version/")+10),10)))return b._set_global("__adroll_xid_ch",0),!1;window.setTimeout(function(){e=!0},this.get_tpc_decode_timeout());
if(this.is_under_experiment("xid_blacklist"))return!1;this.is_under_experiment("xid_test")?this.add_script_element("https://s.dca0.com/sdk.v5.4.min.js?1621458471"):this.add_script_element("https://s.dca0.com/sdk.v5.5.min.js?1623965914");c();return!0};__adroll__.prototype._secure=function(){return!0};
__adroll__.prototype.set_first_party_cookie=function(){var a=this.get_first_party_cookie();a||(a=this.md5((new Date).getTime()+Math.round(1E11*Math.random())+window.navigator.userAgent.toLowerCase()+window.document.referrer)+"-"+(new Date).getTime());this.set("__adroll_fpc",a,8766)};
__adroll__.prototype.get_first_party_cookie=function(){try{var a=this.get("__adroll_fpc");if(a){var c=a.replace("-s2-","-").replace(/-$/,"");if("-"===c.charAt(32)&&c.substr(33).match(/\D/)&&Date.parse){var b=new Date(c.substr(33));if(b&&!isNaN(b.getTime()))return c.substr(0,33)+b.getTime()}return c}}catch(e){}return null};__adroll__.prototype.init_pixchk=function(){this.if_under_experiment_js("pixchk",function(){window.addEventListener("message",this.pixchk_handler,!1)},function(){},1E3)};
__adroll__.prototype.pixchk_handler=function(a){if(a.origin.match(/^https?:\/\/[^\/:]*\.adroll\.com\b/))try{var c=JSON.parse(a.data);"pixchk"===c.cmd&&a.source.postMessage(JSON.stringify({cmd:"pixrpl",adv_id:window.adroll_adv_id,pix_id:window.adroll_pix_id,token:c.token}),"*")}catch(b){}};
__adroll__.prototype.load_pixel_assistant=function(){if(!window.document.getElementById("adroll_nrpa_sdk")){var a=(window.location.hash||"").match("nrpa=([A-Z0-7]+)8([A-F0-9]+Z)"),c=Math.floor((new Date).getTime()/1E3)-3600;(window.sessionStorage.getItem("adroll_nrpa_sdk")||a&&a[1]===window.adroll_adv_id&&!(parseInt(a[2],16)<c))&&this.add_script_element("https://s.adroll.com/j/nrpa.js",{id:"adroll_nrpa_sdk"})}};
__adroll__.prototype.set_suspended=function(){this._set_global("__adroll_data_suspended",!0)};__adroll__.prototype.is_suspended=function(){return this._has_global("__adroll_data_suspended")};
__adroll__.prototype.object_to_querystring=function(a){var c=null;if("object"===typeof a&&("function"===typeof window.URLSearchParams&&(c=(new window.URLSearchParams(a)).toString(),"[object URLSearchParams]"===c&&(c=null)),null===c)){var c="",b;for(b in a)a.hasOwnProperty(b)&&(c=c+"&"+encodeURIComponent(b)+"="+encodeURIComponent(a[b]));c=c.substr(1)}return c};window.__adroll=window.__adroll||new __adroll__;

        (function(m){(function(c){function l(a){return null===a||void 0===a?a:!!a}function y(a,b){if(!b||!b.length)return a;for(var d={},e=0;e<b.length;e++)d[b[e]]=!!a[b[e]];return d}function k(a,b){if(!a&&0!==a)return a;for(var d={},e=0;e<b;e++)d[e+1]=!!(a&1),a>>=1;return d}function z(a){if(a&&a.length){for(var b={},d=0;d<a.length;d++)b[a[d]]=!0;return b}}if(c._has_global("__cmp")||c._has_global("__tcfapi")&&!c._has_global("_adroll_tcfapi_placeholder_installed"))c._install_cmp=function(){};else{c._cmp_calls=
[];c._set_global("__cmp",function(a,b,d){"ping"===a?d({gdprAppliesGlobally:!1,cmpLoaded:!1}):c._cmp_calls.push([a,b,d])});c._tcfapi_calls=[];c._set_global("__tcfapi",function(a,b,d,e){"ping"===a?d({gdprApplies:void 0,cmpLoaded:!1,cmpStatus:"loading",displayStatus:void 0,apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0}):c._tcfapi_calls.push([a,e,d])});var m={getVendorConsents:function(a){var b=c._global("__adroll_consent"),d=c._global("__adroll_consent_data"),
e=c._global("__adroll_consent_is_gdpr");d=d.euconsent||"";var h=c.b64toint(d.substr(22,4)),A=c.b64toint(d.substr(26,3))>>2,k={},g={},f,l=c._is_defined;if(a&&a.length)for(f=0;f<a.length;f++)g[a[f]]=l(b[a[f]])?b[a[f]]:null;else{for(f in b)b.hasOwnProperty(f)&&(g[f]=b[f]);for(f=1;f<=A;f++)g[f]=l(b[f])?b[f]:null}for(f=1;24>=f;f++)k[f]=!(isNaN(h)||!(h&1<<24-f));return[{metadata:d.substr(0,18)+d.substr(20,2),gdprApplies:!!e,hasGlobalScope:!1,purposeConsents:k,vendorConsents:g},!0]},getConsentData:function(a){if(a&&
"1.1"!==String(a))return[null,!1];a=c._global("__adroll_consent_data");var b=c._global("__adroll_consent_is_gdpr");return[{consentData:a.euconsent||"",gdprApplies:!!b,hasGlobalScope:!1},!0]},ping:function(){return[{gdprAppliesGlobally:!1,cmpLoaded:!!c._global("__adroll_consent_data").euconsent},!0]}},q=!1,g={},w=0,v={getTCData:function(a){var b=l(c._global("__adroll_consent_is_gdpr")),d=c._global("__adroll_consent_data")||{},e=d.eucookie||{},h=e.publisher_tc||{};d=d.euconsent;var g=e.cmp_id,m=e.cmp_version,
q=l(e.is_service_specific),f=l(e.use_non_standard_stacks),v=e.publisher_iso_country,w=l(e.purpose_one_treatment),B={allowedVendors:z(e.allowed_vendors),disclosedVendors:z(e.disclosed_vendors)},C={consents:k(e.purposes_allowed,24),legitimateInterests:k(e.purposes_li_transparency,24)};a={consents:y(e.vendor_consent,a),legitimateInterests:y(e.vendor_legitimate_interest,a)};var D=k(e.special_feature_opt_ins,12),E=k(h.pub_purposes_consent,24),F=k(h.pub_purposes_li_transparency,24);h={consents:k(h.custom_purposes_consent,
h.num_custom_purposes),legitimateInterests:k(h.custom_purposes_li_transparency,h.num_custom_purposes)};if((e=e.publisher_restrictions)&&"object"===typeof e){var r={};for(n in e)if(e.hasOwnProperty(n)){var p=e[n]||{},t=p.purpose_id,u=p.vendors;p=p.restriction;if(t&&u&&u.length){r[t]=r[t]||{};for(var x=0;x<u.length;x++)r[t][u[x]]=p}}var n=r}else n=void 0;return[{tcString:d,tcfPolicyVersion:2,cmpId:g,cmpVersion:m,gdprApplies:b,cmpStatus:"loaded",isServiceSpecific:q,useNonStandardStacks:f,publisherCC:v,
purposeOneTreatment:w,outOfBand:B,purpose:C,vendor:a,specialFeatureOptins:D,publisher:{consents:E,legitimateInterests:F,customPurpose:h,restrictions:n}},!0]},ping:function(){var a=c._global("__adroll_consent_data"),b=l(c._global("__adroll_consent_is_gdpr"));a=a.eucookie;return[{gdprApplies:b,cmpLoaded:!0,cmpStatus:"loaded",displayStatus:b?"visible":"disabled",apiVersion:"2.0",cmpVersion:a.cmp_version,cmpId:a.cmp_id,gvlVersion:a.vendor_list_version,tcfPolicyVersion:a.tcf_policy_version},!0]},addEventListener:function(a){var b=
++w;g[b]=a;c._dispatch_consent_event(b)},removeEventListener:function(a,b){var d=!1;b in g&&(d=!0,delete g[b]);a(d)}};c._trigger_consent_event=function(){for(var a in g)g.hasOwnProperty(a)&&c._dispatch_consent_event(a)};c._dispatch_consent_event=function(a){if(a in g){var b=g[a],d=v.getTCData(),e="tcloaded",h=c._global("__adroll_consent"),k=c._global("__adroll_consent_banner")||{};null===h||"banner"===k.state?(e="cmpuishown",q=!0):q&&(e="useractioncomplete");d&&2===d.length?(d[0].eventStatus=e,d[0].listenerId=
a,b(d[0],d[1])):b({},!1)}};c._install_cmp=function(){c._set_global("__cmp",function(a,b,c){(a=m[a])&&c.apply(null,a(b))});var a=c._cmp_calls;c._cmp_calls=[];for(var b=0;b<a.length;b++)c._global("__cmp").apply(c,a[b]);c._set_global("__tcfapi",function(a,b,c,g){b=v[a];"addEventListener"===a||"removeEventListener"===a?b.call(null,c,g):c.apply(null,b(g))});a=c._tcfapi_calls||[];c._tcfapi_calls=[];for(b=0;b<a.length;b++)c._global("__tcfapi").apply(c,a[b])}}})(m)})(window.__adroll);


    __adroll__.prototype.render_advertisable_cell = function () {

        __adroll.segment_map = JSON.parse("{\"PD3Q6G3LDNA75BLHBIEGKA\":{\"child\":\"PD3Q6G3LDNA75BLHBIEGKA\",\"type\":\"p\"}}");
        __adroll.product_events = ["productView", "addToCart", "cartView", "purchase", "productListView"];
        var scheme = (("https:" == document.location.protocol) ? "https" : "http");
        var adnxs_domain = 'secure.adnxs.com';
        var aol_domain = 'secure.leadback.advertising.com';

        if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
        var el = document.createElement("div");
        el.style["width"] = "1px";
        el.style["height"] = "1px";
        el.style["display"] = "inline";
        el.style["position"] = "absolute";

        if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','//connect.facebook.net/en_US/fbevents.js');
        }

        __adroll__._fbq_calls = [];
        function adrollFbqAsync(arguments) {
            __adroll__._fbq_calls.push(arguments);
        }

        function retryAdrollFbqApply(t) {
            setTimeout(function(){ adrollFbqApply(t * 2); }, t * 100);
        }

        function adrollFbqApply(t) {
            var calls = __adroll__._fbq_calls;
            // Sanity check: retry until at least a FB call is queued.
            if (calls.length === 0) {
                retryAdrollFbqApply(t);
                return;
            }
            if (typeof fbq != 'undefined') {
                __adroll__._fbq_calls = [];
                for (var i = 0; i < calls.length; i++) {
                    fbq.apply(null, calls[i]);
                }
                return;
            }
            retryAdrollFbqApply(t);
        }

        retryAdrollFbqApply(1);

        try {
                try {
                
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = ["/cm/index/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/n/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/onevideo/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/outbrain/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/pubmatic/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/taboola/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB","/cm/triplelift/out?advertisable=TGMBN2FUSVDN3D6E64Z6XB"].reduce(function (acc, cmURL) {
    return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
}, '');
__adroll._head().appendChild(rtb);
})();

                } catch(e) {}
                try {
                var func = function(eventName, eventAttrs, headers) {
    var fbLimitedDataUse = true;
    if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
        var segment_eids = __adroll.segment_map[headers["x-segment-eid"]].child;
        var segment_type = __adroll.segment_map[headers["x-segment-eid"]].type;
        var external_data = __adroll.convert_to_map(eventAttrs);

        var product_id_list = [];
        var product_group_list = [];

        // parsing product json from external data
        if (external_data && external_data.hasOwnProperty("products")) {
            var products = external_data["products"];
            for (var i = 0; i < products.length; i++) {
                var product_id = products[i]["product_id"];
                var product_group = products[i]["product_group"];
                if (product_id && product_id.length != 0 ) {
                    product_id_list[i] = product_id;
                    product_group_list[i] = product_group;
                }
            }
        }
        if (typeof __adroll.fb === 'undefined'){
            if (fbLimitedDataUse) {
                adrollFbqAsync(['dataProcessingOptions', ['LDU'], 0, 0]);
            }
            adrollFbqAsync(['init', '485620382153546']);

            adrollFbqAsync(['set', 'autoConfig', 'false', '485620382153546']);
            __adroll.fb=true;

            var __fbcd = {segment_eid: segment_eids};
            for (var prop in external_data){
                if (prop === "products") {
                    __fbcd['ar_product_id'] = product_id_list;
                    __fbcd['ar_product_group'] = product_group_list;
                }
                else {
                    __fbcd['ar_' + prop] = external_data[prop];
                }
            }

            adrollFbqAsync(['track', "PageView", __fbcd]);

            if (segment_type === "c") {
                var suppress_conversion = (typeof adroll_shopify_dupe_conversion == 'boolean' && adroll_shopify_dupe_conversion) ||
                                          (typeof adroll_shopify_empty_referrer == 'boolean' && adroll_shopify_empty_referrer);

                var conversion = suppress_conversion ? null : __adroll.get_conversion_value(eventAttrs);

                if (conversion !== null) {
                    var conversion_value = conversion['conv_value'];
                    var currency = conversion['currency'];
                    conversion_value = currency === 'USC' ? conversion_value / 100 : conversion_value;
                    currency = currency === 'USC' ? 'USD' : currency;

                    var fb_track_src = "https://www.facebook.com/tr/?id=485620382153546" +
                                      "&ev=Purchase" +
                                      "&cd[value]=" + conversion_value +
                                      "&cd[currency]=" + currency +
                                      "&cd[segment_eid]=" + encodeURIComponent(segment_eids);

                    if(typeof external_data == "object"){
                        for (var prop in external_data){
                            if (prop === "products") {
                                fb_track_src += "&cd[ar_product_id]=" + product_id_list + "&cd[ar_product_group]=" + product_group_list;
                            }
                            else {
                                fb_track_src += "&cd[ar_" + prop + "]=" + external_data[prop];
                            }
                        }
                    }

                    var img = document.createElement("img");
                    img.src = fb_track_src;
                    img.height = img.width = 1;
                    img.border = 0;
                    img.setAttribute("alt", "");
                    __adroll._head().appendChild(img);
                }
            }
        } else {
            var __fbcd = {event: "EventSegment", segment_eid: segment_eids};
            for (var prop in external_data){
                if (prop === "products") {
                    __fbcd['ar_product_id'] = product_id_list;
                    __fbcd['ar_product_group'] = product_group_list;
                }
                else {
                    __fbcd['ar_' + prop] = external_data[prop];
                }
            }

            adrollFbqAsync(['track', "CustomEvent", __fbcd]);
            if (segment_type === "c") {
                var suppress_conversion = (typeof adroll_shopify_dupe_conversion == 'boolean' && adroll_shopify_dupe_conversion) ||
                                          (typeof adroll_shopify_empty_referrer == 'boolean' && adroll_shopify_empty_referrer);

                var conversion = suppress_conversion ? null : __adroll.get_conversion_value(eventAttrs);

                if (conversion !== null) {
                    var conversion_value = conversion['conv_value'];
                    var currency = conversion['currency'];
                    conversion_value = currency === 'USC' ? conversion_value / 100 : conversion_value;
                    currency = currency === 'USC' ? 'USD' : currency;

                    var fb_track_src = "https://www.facebook.com/tr/?id=485620382153546" +
                                      "&ev=Purchase" +
                                      "&cd[value]=" + conversion_value +
                                      "&cd[currency]=" + currency +
                                      "&cd[segment_eid]=" + encodeURIComponent(segment_eids);

                    if(typeof external_data == "object"){
                        for (var prop in external_data){
                            if (prop === "products") {
                                fb_track_src += "&cd[ar_product_id]=" + product_id_list + "&cd[ar_product_group]=" + product_group_list;
                            } else {
                                fb_track_src += "&cd[ar_" + prop + "]=" + external_data[prop];
                            }
                        }
                    }

                    var img = document.createElement("img");
                    img.src = fb_track_src;
                    img.height = img.width = 1;
                    img.border = 0;
                    img.setAttribute("alt", "");
                    __adroll._head().appendChild(img);
                }
            }
        }
    }
}
__adroll.registerDynoCallback(func, 'fbDynoCallback');

                } catch(e) {}
        } catch(e) {}

       __adroll.loadGlobalFunctions();

               __adroll._head().appendChild(el);
        if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id);}
    };
}
catch(e) {}

try {
    
    __adroll.load_adroll_tpc(__adroll.render_advertisable_cell);
}
catch(e) {}
