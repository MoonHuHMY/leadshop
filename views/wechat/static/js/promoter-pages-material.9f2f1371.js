(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-pages-material"],{"26bc":function(e,t,n){var a=n("763a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("b41b").default;r("6db275f0",a,!0,{sourceMap:!1,shadowMode:!1})},3329:function(e,t,n){"use strict";n.r(t);var a=n("abf3"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"34c7":function(e,t,n){var a=n("7888"),r=n("a24a");e.exports=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return a(t.call(e))}},"41f3":function(e,t,n){"use strict";var a=n("26bc"),r=n.n(a);r.a},"465b":function(e,t,n){"use strict";n("63e6");var a=n("f339"),r=n("9975"),i=n("faf6"),o=n("ac7a"),s=n("0b63"),c=n("e3be"),h=n("5428"),u=n("1e2a"),l=n("8469"),f=n("24df"),d=n("8e59"),p=n("6379"),v=n("7888"),m=n("9e79"),g=n("f39b"),b=n("df88"),w=n("c722"),y=n("34c7"),k=n("a24a"),x=n("8ba6"),_=r("fetch"),L=r("Request"),C=L&&L.prototype,R=r("Headers"),U=x("iterator"),S="URLSearchParams",I=S+"Iterator",A=u.set,B=u.getterFor(S),q=u.getterFor(I),E=/\+/g,P=Array(4),T=function(e){return P[e-1]||(P[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},F=function(e){try{return decodeURIComponent(e)}catch(t){return e}},j=function(e){var t=e.replace(E," "),n=4;try{return decodeURIComponent(t)}catch(a){while(n)t=t.replace(T(n--),F);return t}},O=/[!'()~]|%20/g,$={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},z=function(e){return $[e]},N=function(e){return encodeURIComponent(e).replace(O,z)},M=function(e,t){if(t){var n,a,r=t.split("&"),i=0;while(i<r.length)n=r[i++],n.length&&(a=n.split("="),e.push({key:j(a.shift()),value:j(a.join("="))}))}},J=function(e){this.entries.length=0,M(this.entries,e)},D=function(e,t){if(e<t)throw TypeError("Not enough arguments")},V=h((function(e,t){A(this,{type:I,iterator:y(B(e).entries),kind:t})}),"Iterator",(function(){var e=q(this),t=e.kind,n=e.iterator.next(),a=n.value;return n.done||(n.value="keys"===t?a.key:"values"===t?a.value:[a.key,a.value]),n})),Y=function(){l(this,Y,S);var e,t,n,a,r,i,o,s,c,h=arguments.length>0?arguments[0]:void 0,u=this,d=[];if(A(u,{type:S,entries:d,updateURL:function(){},updateSearchParams:J}),void 0!==h)if(m(h))if(e=k(h),"function"===typeof e){t=e.call(h),n=t.next;while(!(a=n.call(t)).done){if(r=y(v(a.value)),i=r.next,(o=i.call(r)).done||(s=i.call(r)).done||!i.call(r).done)throw TypeError("Expected sequence with length 2");d.push({key:g(o.value),value:g(s.value)})}}else for(c in h)f(h,c)&&d.push({key:c,value:g(h[c])});else M(d,"string"===typeof h?"?"===h.charAt(0)?h.slice(1):h:g(h))},G=Y.prototype;if(s(G,{append:function(e,t){D(arguments.length,2);var n=B(this);n.entries.push({key:g(e),value:g(t)}),n.updateURL()},delete:function(e){D(arguments.length,1);var t=B(this),n=t.entries,a=g(e),r=0;while(r<n.length)n[r].key===a?n.splice(r,1):r++;t.updateURL()},get:function(e){D(arguments.length,1);for(var t=B(this).entries,n=g(e),a=0;a<t.length;a++)if(t[a].key===n)return t[a].value;return null},getAll:function(e){D(arguments.length,1);for(var t=B(this).entries,n=g(e),a=[],r=0;r<t.length;r++)t[r].key===n&&a.push(t[r].value);return a},has:function(e){D(arguments.length,1);var t=B(this).entries,n=g(e),a=0;while(a<t.length)if(t[a++].key===n)return!0;return!1},set:function(e,t){D(arguments.length,1);for(var n,a=B(this),r=a.entries,i=!1,o=g(e),s=g(t),c=0;c<r.length;c++)n=r[c],n.key===o&&(i?r.splice(c--,1):(i=!0,n.value=s));i||r.push({key:o,value:s}),a.updateURL()},sort:function(){var e,t,n,a=B(this),r=a.entries,i=r.slice();for(r.length=0,n=0;n<i.length;n++){for(e=i[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}a.updateURL()},forEach:function(e){var t,n=B(this).entries,a=d(e,arguments.length>1?arguments[1]:void 0,3),r=0;while(r<n.length)t=n[r++],a(t.value,t.key,this)},keys:function(){return new V(this,"keys")},values:function(){return new V(this,"values")},entries:function(){return new V(this,"entries")}},{enumerable:!0}),o(G,U,G.entries),o(G,"toString",(function(){var e,t=B(this).entries,n=[],a=0;while(a<t.length)e=t[a++],n.push(N(e.key)+"="+N(e.value));return n.join("&")}),{enumerable:!0}),c(Y,S),a({global:!0,forced:!i},{URLSearchParams:Y}),!i&&"function"==typeof R){var Q=function(e){if(m(e)){var t,n=e.body;if(p(n)===S)return t=e.headers?new R(e.headers):new R,t.has("content-type")||t.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),b(e,{body:w(0,String(n)),headers:w(0,t)})}return e};if("function"==typeof _&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return _(e,arguments.length>1?Q(arguments[1]):{})}}),"function"==typeof L){var W=function(e){return l(this,W,"Request"),new L(e,arguments.length>1?Q(arguments[1]):{})};C.constructor=W,W.prototype=C,a({global:!0,forced:!0},{Request:W})}}e.exports={URLSearchParams:Y,getState:B}},"763a":function(e,t,n){var a=n("a1a8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.font-family-sc[data-v-11edef8c], .he-search .he-button[data-v-11edef8c], .he-switch .flex-sub[data-v-11edef8c], .he-item .content[data-v-11edef8c], .he-item .content .cu-btn[data-v-11edef8c], .he-item .he-footer .he-jump[data-v-11edef8c], .he-item .he-footer .he-share--count[data-v-11edef8c], .he-item .he-footer .he-btn[data-v-11edef8c]{font-family:PingFang SC}.font-family-din[data-v-11edef8c]{font-family:DIN}.he-card[data-v-11edef8c]{background-color:#fff;padding:%?32?%;border-radius:%?16?%;margin-bottom:%?16?%}.iconbtn_arrow[data-v-11edef8c]{font-size:%?18?%;color:#bebebe}[data-v-11edef8c] .input-placeholder{font-family:PingFang SC;font-size:%?26?%;font-weight:500;color:#999}.he-sticky[data-v-11edef8c]{position:-webkit-sticky;position:sticky;top:0;z-index:10}.he-search[data-v-11edef8c]{width:%?750?%;height:%?112?%;padding:%?24?% %?32?%;position:relative;margin-bottom:0}.he-search .he-input[data-v-11edef8c]{width:%?686?%;height:%?64?%;background:#f7f7f7;border-radius:%?32?%;padding-left:%?32?%}.he-search .he-button[data-v-11edef8c]{position:absolute;top:50%;width:%?686?%;background:transparent;left:%?64?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:10;font-size:%?28?%;padding:0;font-weight:500;color:#999}.he-search .he-button .iconsearchbar_search[data-v-11edef8c]{font-size:%?28?%;margin-right:%?16?%}.he-switch[data-v-11edef8c]{padding:0 %?32?%;height:%?114?%;text-align:center;position:relative;background:#f5f5f5}.he-switch .he-line[data-v-11edef8c]{width:%?52?%;height:%?4?%;position:absolute;bottom:%?24?%}[data-theme="red_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#e60b30!important}[data-theme="purple_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#8f2df3!important}[data-theme="blue_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#33a7ff!important}[data-theme="green_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#1fc551!important}[data-theme="orange_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#ff7f00!important}[data-theme="golden_theme"] .he-switch .he-line[data-v-11edef8c]{background-color:#caa45a!important}[data-theme="red_theme"] .he-switch .active[data-v-11edef8c]{color:#e60b30!important}[data-theme="purple_theme"] .he-switch .active[data-v-11edef8c]{color:#8f2df3!important}[data-theme="blue_theme"] .he-switch .active[data-v-11edef8c]{color:#33a7ff!important}[data-theme="green_theme"] .he-switch .active[data-v-11edef8c]{color:#1fc551!important}[data-theme="orange_theme"] .he-switch .active[data-v-11edef8c]{color:#ff7f00!important}[data-theme="golden_theme"] .he-switch .active[data-v-11edef8c]{color:#caa45a!important}.he-switch .flex-sub[data-v-11edef8c]{font-size:%?28?%;font-weight:500;line-height:%?114?%;-webkit-transition-delay:.1s;transition-delay:.1s}.he-list[data-v-11edef8c]{width:%?750?%;background:#fff;border-radius:%?16?% %?16?% 0 0;padding:0 %?32?% 0 %?32?%;overflow:hidden;min-height:calc(100vh - %?226?%)}.he-item[data-v-11edef8c]{border-bottom:%?1?% solid #e5e5e5;padding:%?45?% 0 %?24?% 0}.he-item .content[data-v-11edef8c]{font-size:%?30?%;font-weight:500;color:#222;line-height:%?40?%;margin-bottom:%?24?%;word-break:break-all;position:relative}.he-item .content .block[data-v-11edef8c]{position:absolute;bottom:0;right:0;background-color:#fff}.he-item .content .cu-btn[data-v-11edef8c]{height:auto;padding:0;font-weight:500;font-size:%?30?%;color:#3273ea;line-height:%?40?%;background-color:#fff}.he-item .content .unfold[data-v-11edef8c]{display:inline-block}.he-item .he-images[data-v-11edef8c]{margin:%?24?% 0 %?8?% 0}.he-item .he-images .he-img[data-v-11edef8c]{margin-bottom:%?16?%}.he-item .he-images .he-img[data-v-11edef8c]:not(:nth-child(3n)){margin-right:%?16?%}.he-item .he-video[data-v-11edef8c]{margin:0 0 %?24?% 0}.he-item .he-footer[data-v-11edef8c]{height:%?80?%}.he-item .he-footer .he-jump[data-v-11edef8c]{padding:0;font-size:%?28?%;font-weight:500;color:#3273ea;background-color:initial;margin-right:%?24?%}.he-item .he-footer .he-share--count[data-v-11edef8c]{font-size:%?28?%;font-weight:500;color:#ccc}.he-item .he-footer .he-btn[data-v-11edef8c]{font-size:%?24?%;font-weight:500;border:%?1?% solid transparent;background:#fff;border-radius:%?28?%;padding:0 %?24?%;height:%?56?%;line-height:%?54?%}[data-theme="red_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#e60b30!important}[data-theme="purple_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#8f2df3!important}[data-theme="blue_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#33a7ff!important}[data-theme="green_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#1fc551!important}[data-theme="orange_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#ff7f00!important}[data-theme="golden_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{color:#caa45a!important}[data-theme="red_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#e60b30!important}[data-theme="purple_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#8f2df3!important}[data-theme="blue_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#33a7ff!important}[data-theme="green_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#1fc551!important}[data-theme="orange_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#ff7f00!important}[data-theme="golden_theme"] .he-item .he-footer .he-btn[data-v-11edef8c]{border-color:#caa45a!important}.he-item .he-footer .he-btn[data-v-11edef8c]:nth-child(2){margin-left:%?16?%}',""]),e.exports=t},"9dd2":function(e,t,n){"use strict";n("5006");var a,r=n("f339"),i=n("e1df"),o=n("faf6"),s=n("46c4"),c=n("0d12"),h=n("ac7a"),u=n("8469"),l=n("24df"),f=n("3ec7"),d=n("0e31"),p=n("2962").codeAt,v=n("cdbe"),m=n("f39b"),g=n("e3be"),b=n("465b"),w=n("1e2a"),y=s.URL,k=b.URLSearchParams,x=b.getState,_=w.set,L=w.getterFor("URL"),C=Math.floor,R=Math.pow,U="Invalid authority",S="Invalid scheme",I="Invalid host",A="Invalid port",B=/[A-Za-z]/,q=/[\d+-.A-Za-z]/,E=/\d/,P=/^0x/i,T=/^[0-7]+$/,F=/^\d+$/,j=/^[\dA-Fa-f]+$/,O=/[\0\t\n\r #%/:<>?@[\\\]^|]/,$=/[\0\t\n\r #/:<>?@[\\\]^|]/,z=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,N=/[\t\n\r]/g,M=function(e,t){var n,a,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return I;if(n=D(t.slice(1,-1)),!n)return I;e.host=n}else if(X(e)){if(t=v(t),O.test(t))return I;if(n=J(t),null===n)return I;e.host=n}else{if($.test(t))return I;for(n="",a=d(t),r=0;r<a.length;r++)n+=H(a[r],G);e.host=n}},J=function(e){var t,n,a,r,i,o,s,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),t=c.length,t>4)return e;for(n=[],a=0;a<t;a++){if(r=c[a],""==r)return e;if(i=10,r.length>1&&"0"==r.charAt(0)&&(i=P.test(r)?16:8,r=r.slice(8==i?1:2)),""===r)o=0;else{if(!(10==i?F:8==i?T:j).test(r))return e;o=parseInt(r,i)}n.push(o)}for(a=0;a<t;a++)if(o=n[a],a==t-1){if(o>=R(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),a=0;a<n.length;a++)s+=n[a]*R(256,3-a);return s},D=function(e){var t,n,a,r,i,o,s,c=[0,0,0,0,0,0,0,0],h=0,u=null,l=0,f=function(){return e.charAt(l)};if(":"==f()){if(":"!=e.charAt(1))return;l+=2,h++,u=h}while(f()){if(8==h)return;if(":"!=f()){t=n=0;while(n<4&&j.test(f()))t=16*t+parseInt(f(),16),l++,n++;if("."==f()){if(0==n)return;if(l-=n,h>6)return;a=0;while(f()){if(r=null,a>0){if(!("."==f()&&a<4))return;l++}if(!E.test(f()))return;while(E.test(f())){if(i=parseInt(f(),10),null===r)r=i;else{if(0==r)return;r=10*r+i}if(r>255)return;l++}c[h]=256*c[h]+r,a++,2!=a&&4!=a||h++}if(4!=a)return;break}if(":"==f()){if(l++,!f())return}else if(f())return;c[h++]=t}else{if(null!==u)return;l++,h++,u=h}}if(null!==u){o=h-u,h=7;while(0!=h&&o>0)s=c[h],c[h--]=c[u+o-1],c[u+--o]=s}else if(8!=h)return;return c},V=function(e){for(var t=null,n=1,a=null,r=0,i=0;i<8;i++)0!==e[i]?(r>n&&(t=a,n=r),a=null,r=0):(null===a&&(a=i),++r);return r>n&&(t=a,n=r),t},Y=function(e){var t,n,a,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=C(e/256);return t.join(".")}if("object"==typeof e){for(t="",a=V(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),a===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},G={},Q=f({},G,{" ":1,'"':1,"<":1,">":1,"`":1}),W=f({},Q,{"#":1,"?":1,"{":1,"}":1}),Z=f({},W,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),H=function(e,t){var n=p(e,0);return n>32&&n<127&&!l(t,e)?e:encodeURIComponent(e)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},X=function(e){return l(K,e.scheme)},ee=function(e){return""!=e.username||""!=e.password},te=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},ne=function(e,t){var n;return 2==e.length&&B.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ae=function(e){var t;return e.length>1&&ne(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},re=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&ne(t[0],!0)||t.pop()},ie=function(e){return"."===e||"%2e"===e.toLowerCase()},oe=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},se={},ce={},he={},ue={},le={},fe={},de={},pe={},ve={},me={},ge={},be={},we={},ye={},ke={},xe={},_e={},Le={},Ce={},Re={},Ue={},Se=function(e,t,n,r){var i,o,s,c,h=n||se,u=0,f="",p=!1,v=!1,m=!1;n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(z,"")),t=t.replace(N,""),i=d(t);while(u<=i.length){switch(o=i[u],h){case se:if(!o||!B.test(o)){if(n)return S;h=he;continue}f+=o.toLowerCase(),h=ce;break;case ce:if(o&&(q.test(o)||"+"==o||"-"==o||"."==o))f+=o.toLowerCase();else{if(":"!=o){if(n)return S;f="",h=he,u=0;continue}if(n&&(X(e)!=l(K,f)||"file"==f&&(ee(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(X(e)&&K[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?h=ye:X(e)&&r&&r.scheme==e.scheme?h=ue:X(e)?h=pe:"/"==i[u+1]?(h=le,u++):(e.cannotBeABaseURL=!0,e.path.push(""),h=Ce)}break;case he:if(!r||r.cannotBeABaseURL&&"#"!=o)return S;if(r.cannotBeABaseURL&&"#"==o){e.scheme=r.scheme,e.path=r.path.slice(),e.query=r.query,e.fragment="",e.cannotBeABaseURL=!0,h=Ue;break}h="file"==r.scheme?ye:fe;continue;case ue:if("/"!=o||"/"!=i[u+1]){h=fe;continue}h=ve,u++;break;case le:if("/"==o){h=me;break}h=Le;continue;case fe:if(e.scheme=r.scheme,o==a)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query;else if("/"==o||"\\"==o&&X(e))h=de;else if("?"==o)e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query="",h=Re;else{if("#"!=o){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.path.pop(),h=Le;continue}e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,e.path=r.path.slice(),e.query=r.query,e.fragment="",h=Ue}break;case de:if(!X(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=r.username,e.password=r.password,e.host=r.host,e.port=r.port,h=Le;continue}h=me}else h=ve;break;case pe:if(h=ve,"/"!=o||"/"!=f.charAt(u+1))continue;u++;break;case ve:if("/"!=o&&"\\"!=o){h=me;continue}break;case me:if("@"==o){p&&(f="%40"+f),p=!0,s=d(f);for(var g=0;g<s.length;g++){var b=s[g];if(":"!=b||m){var w=H(b,Z);m?e.password+=w:e.username+=w}else m=!0}f=""}else if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&X(e)){if(p&&""==f)return U;u-=d(f).length+1,f="",h=ge}else f+=o;break;case ge:case be:if(n&&"file"==e.scheme){h=xe;continue}if(":"!=o||v){if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&X(e)){if(X(e)&&""==f)return I;if(n&&""==f&&(ee(e)||null!==e.port))return;if(c=M(e,f),c)return c;if(f="",h=_e,n)return;continue}"["==o?v=!0:"]"==o&&(v=!1),f+=o}else{if(""==f)return I;if(c=M(e,f),c)return c;if(f="",h=we,n==be)return}break;case we:if(!E.test(o)){if(o==a||"/"==o||"?"==o||"#"==o||"\\"==o&&X(e)||n){if(""!=f){var y=parseInt(f,10);if(y>65535)return A;e.port=X(e)&&y===K[e.scheme]?null:y,f=""}if(n)return;h=_e;continue}return A}f+=o;break;case ye:if(e.scheme="file","/"==o||"\\"==o)h=ke;else{if(!r||"file"!=r.scheme){h=Le;continue}if(o==a)e.host=r.host,e.path=r.path.slice(),e.query=r.query;else if("?"==o)e.host=r.host,e.path=r.path.slice(),e.query="",h=Re;else{if("#"!=o){ae(i.slice(u).join(""))||(e.host=r.host,e.path=r.path.slice(),re(e)),h=Le;continue}e.host=r.host,e.path=r.path.slice(),e.query=r.query,e.fragment="",h=Ue}}break;case ke:if("/"==o||"\\"==o){h=xe;break}r&&"file"==r.scheme&&!ae(i.slice(u).join(""))&&(ne(r.path[0],!0)?e.path.push(r.path[0]):e.host=r.host),h=Le;continue;case xe:if(o==a||"/"==o||"\\"==o||"?"==o||"#"==o){if(!n&&ne(f))h=Le;else if(""==f){if(e.host="",n)return;h=_e}else{if(c=M(e,f),c)return c;if("localhost"==e.host&&(e.host=""),n)return;f="",h=_e}continue}f+=o;break;case _e:if(X(e)){if(h=Le,"/"!=o&&"\\"!=o)continue}else if(n||"?"!=o)if(n||"#"!=o){if(o!=a&&(h=Le,"/"!=o))continue}else e.fragment="",h=Ue;else e.query="",h=Re;break;case Le:if(o==a||"/"==o||"\\"==o&&X(e)||!n&&("?"==o||"#"==o)){if(oe(f)?(re(e),"/"==o||"\\"==o&&X(e)||e.path.push("")):ie(f)?"/"==o||"\\"==o&&X(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&ne(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(o==a||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",h=Re):"#"==o&&(e.fragment="",h=Ue)}else f+=H(o,W);break;case Ce:"?"==o?(e.query="",h=Re):"#"==o?(e.fragment="",h=Ue):o!=a&&(e.path[0]+=H(o,G));break;case Re:n||"#"!=o?o!=a&&("'"==o&&X(e)?e.query+="%27":e.query+="#"==o?"%23":H(o,G)):(e.fragment="",h=Ue);break;case Ue:o!=a&&(e.fragment+=H(o,Q));break}u++}},Ie=function(e){var t,n,a=u(this,Ie,"URL"),r=arguments.length>1?arguments[1]:void 0,o=m(e),s=_(a,{type:"URL"});if(void 0!==r)if(r instanceof Ie)t=L(r);else if(n=Se(t={},m(r)),n)throw TypeError(n);if(n=Se(s,o,null,t),n)throw TypeError(n);var c=s.searchParams=new k,h=x(c);h.updateSearchParams(s.query),h.updateURL=function(){s.query=String(c)||null},i||(a.href=Be.call(a),a.origin=qe.call(a),a.protocol=Ee.call(a),a.username=Pe.call(a),a.password=Te.call(a),a.host=Fe.call(a),a.hostname=je.call(a),a.port=Oe.call(a),a.pathname=$e.call(a),a.search=ze.call(a),a.searchParams=Ne.call(a),a.hash=Me.call(a))},Ae=Ie.prototype,Be=function(){var e=L(this),t=e.scheme,n=e.username,a=e.password,r=e.host,i=e.port,o=e.path,s=e.query,c=e.fragment,h=t+":";return null!==r?(h+="//",ee(e)&&(h+=n+(a?":"+a:"")+"@"),h+=Y(r),null!==i&&(h+=":"+i)):"file"==t&&(h+="//"),h+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(h+="?"+s),null!==c&&(h+="#"+c),h},qe=function(){var e=L(this),t=e.scheme,n=e.port;if("blob"==t)try{return new Ie(t.path[0]).origin}catch(a){return"null"}return"file"!=t&&X(e)?t+"://"+Y(e.host)+(null!==n?":"+n:""):"null"},Ee=function(){return L(this).scheme+":"},Pe=function(){return L(this).username},Te=function(){return L(this).password},Fe=function(){var e=L(this),t=e.host,n=e.port;return null===t?"":null===n?Y(t):Y(t)+":"+n},je=function(){var e=L(this).host;return null===e?"":Y(e)},Oe=function(){var e=L(this).port;return null===e?"":String(e)},$e=function(){var e=L(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},ze=function(){var e=L(this).query;return e?"?"+e:""},Ne=function(){return L(this).searchParams},Me=function(){var e=L(this).fragment;return e?"#"+e:""},Je=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&c(Ae,{href:Je(Be,(function(e){var t=L(this),n=m(e),a=Se(t,n);if(a)throw TypeError(a);x(t.searchParams).updateSearchParams(t.query)})),origin:Je(qe),protocol:Je(Ee,(function(e){var t=L(this);Se(t,m(e)+":",se)})),username:Je(Pe,(function(e){var t=L(this),n=d(m(e));if(!te(t)){t.username="";for(var a=0;a<n.length;a++)t.username+=H(n[a],Z)}})),password:Je(Te,(function(e){var t=L(this),n=d(m(e));if(!te(t)){t.password="";for(var a=0;a<n.length;a++)t.password+=H(n[a],Z)}})),host:Je(Fe,(function(e){var t=L(this);t.cannotBeABaseURL||Se(t,m(e),ge)})),hostname:Je(je,(function(e){var t=L(this);t.cannotBeABaseURL||Se(t,m(e),be)})),port:Je(Oe,(function(e){var t=L(this);te(t)||(e=m(e),""==e?t.port=null:Se(t,e,we))})),pathname:Je($e,(function(e){var t=L(this);t.cannotBeABaseURL||(t.path=[],Se(t,m(e),_e))})),search:Je(ze,(function(e){var t=L(this);e=m(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Se(t,e,Re)),x(t.searchParams).updateSearchParams(t.query)})),searchParams:Je(Ne),hash:Je(Me,(function(e){var t=L(this);e=m(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Se(t,e,Ue)):t.fragment=null}))}),h(Ae,"toJSON",(function(){return Be.call(this)}),{enumerable:!0}),h(Ae,"toString",(function(){return Be.call(this)}),{enumerable:!0}),y){var De=y.createObjectURL,Ve=y.revokeObjectURL;De&&h(Ie,"createObjectURL",(function(e){return De.apply(y,arguments)})),Ve&&h(Ie,"revokeObjectURL",(function(e){return Ve.apply(y,arguments)}))}g(Ie,"URL"),r({global:!0,forced:!o,sham:!i},{URL:Ie})},abf3:function(e,t,n){"use strict";var a=n("3476").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("b5aa"),n("1e72"),n("f667"),n("7e8e"),n("da02"),n("5006"),n("cd46"),n("9dd2"),n("8a61");var r=a(n("9d6b")),i=a(n("aa66")),o=a(n("4d92")),s=a(n("dc87d")),c=a(n("4376")),h=n("45b6"),u=a(n("fe9c")),l={name:"material",components:{heNoContentYet:i.default,heLoadMore:o.default,heSaveLoading:s.default,listVideo:c.default,heFloatWindow:u.default},data:function(){return{content:"",scrollBarLeft:0,showInput:!1,barFirstTimeMove:!0,tabQueryInfo:[{left:uni.upx2px(32)},{left:uni.upx2px(260)},{left:uni.upx2px(488)}],currentIndex:0,tabWidth:0,list:[],loadStatus:"loadmore",isNothing:!1,loading:!1,page:{},loadingText:"",videoCurrent:null}},computed:{tabBarStyle:function(e){var t=e.barFirstTimeMove,n=e.scrollBarLeft;return{transform:"translate(".concat(n,"px, -100%)"),"transition-duration":"".concat(t?0:"0.5s")}}},onLoad:function(){this.init()},methods:{init:function(){var e=this;this.scrollByIndex(),this.getList().then((function(){e.isNothing=0===e.list.length}))},getList:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.promotermaterial)(e.page.current,e.currentIndex,e.content);case 3:return n=t.sent,a=n.data,r=n.pagination,a.forEach((function(e){var t=4*uni.upx2px(686);t-uni.upx2px(30)*e.content.length<0&&(e.too_long=!0,e.unfold=!1)})),e.page=r,e.list=e.list.concat(a),r.current===r.pageCount&&(e.loadStatus="nomore"),t.abrupt("return",!0);case 12:t.prev=12,t.t0=t["catch"](0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()},expandCollapse:function(e){e.unfold=!e.unfold},blurInput:function(){var e=this;this.list=[],this.$h.test.isEmpty(this.content)&&(this.showInput=!1),this.page.current=1,this.getList().then((function(){e.isNothing=0===e.list.length}))},openInput:function(){this.showInput=!this.showInput,this.list=[]},clickTab:function(e){var t=this;this.currentIndex=e,this.page.current=1,this.scrollByIndex(),this.list=[],this.getList().then((function(){t.isNothing=0===t.list.length}))},scrollByIndex:function(){var e=this,t=this.tabQueryInfo[this.currentIndex];if(t){var n=t.left+uni.upx2px(228)/2;this.scrollBarLeft=n-uni.upx2px(228)/4,!0===this.barFirstTimeMove&&setTimeout((function(){e.barFirstTimeMove=!1}),100)}},routerCreateDynamic:function(e){(0,h.promotermaterialShare)(e.id).then((function(){e.share_count++})),uni.navigateTo({url:"/promoter/pages/create-dynamic?data="+JSON.stringify(e)})},hairpin:function(e){var t=this;(0,h.promotermaterialShare)(e.id).then((function(){e.share_count++})),1===e.type?(this.loadingText="正在保存图片…",t.loading=!0,t.saveFile(e.pic_list),t.uniCopy({content:e.content,success:function(){}})):2===e.type&&(this.loadingText="正在保存视频…",fetch(e.video_list.url).then((function(e){return e.blob()})).then((function(e){var t=document.createElement("a");document.body.appendChild(t),t.style.display="none";var n=window.URL.createObjectURL(e);t.href=n,t.download="语音音频.mp3",t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(n)})),t.uniCopy({content:e.content,success:function(){}}))},saveFile:function(e){var t=this,n=JSON.parse(JSON.stringify(e)),a=n.splice(0,1)[0];wx.downloadFile({url:a,success:function(e){wx.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){n.length>0?t.saveFile(n):(t.loading=!1,uni.showToast({title:"文案已复制， 图片已保存",icon:"none",duration:2e3}))},fail:function(){}})}})},saveVideoFile:function(e){var t=this;uni.downloadFile({url:e.video_list.url,success:function(n){uni.saveVideoToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.loading=!1,t.uniCopy({content:e.content,success:function(){uni.showToast({title:"文案已复制， 视频已保存",icon:"none",duration:2e3})}})}})},fail:function(){}})},routerGoods:function(e){uni.navigateTo({url:"/pages/goods/detail?id=".concat(e)})}},onReachBottom:function(){var e=this;this.page.pageCount>this.page.current?(this.page.current++,this.loadStatus="loading",this.getList().then((function(){e.loadStatus="loadmore"}))):this.loadStatus="nomore"}};t.default=l},b6a9:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"he-page-content",attrs:{"data-theme":e.theme}},[n("v-uni-view",{staticClass:"he-sticky"},[n("v-uni-view",{staticClass:"he-search he-card"},[n("v-uni-input",{staticClass:"he-input",attrs:{type:"text",focus:e.showInput},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blurInput.apply(void 0,arguments)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e.showInput?e._e():n("v-uni-button",{staticClass:"cu-btn he-button flex align-center justify-start",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openInput.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont iconsearchbar_search"}),n("v-uni-text",[e._v("输入商品名称/素材文案搜索")])],1)],1),n("v-uni-view",{staticClass:"he-switch flex"},[n("v-uni-view",{staticClass:"flex-sub",class:{active:0===e.currentIndex},attrs:{id:"he-switch--0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickTab(0)}}},[e._v("全部")]),n("v-uni-view",{staticClass:"flex-sub",class:{active:1===e.currentIndex},attrs:{id:"he-switch--1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickTab(1)}}},[e._v("图片")]),n("v-uni-view",{staticClass:"flex-sub",class:{active:2===e.currentIndex},attrs:{id:"he-switch--2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickTab(2)}}},[e._v("视频")]),n("v-uni-view",{staticClass:"he-line",style:[e.tabBarStyle]})],1)],1),n("v-uni-view",{staticClass:"he-list"},[e._l(e.list,(function(t,a){return n("v-uni-view",{key:a,staticClass:"he-item"},[n("v-uni-view",{class:[{"he-line-4":!t.unfold},"content"]},[e._v(e._s(t.content)),t.too_long?[t.unfold?e._e():n("v-uni-view",{staticClass:"block"},[e._v("..."),n("v-uni-button",{staticClass:"cu-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.expandCollapse(t)}}},[e._v("展开")])],1),n("v-uni-button",{staticClass:"cu-btn unfold",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.expandCollapse(t)}}},[e._v("收起")])]:e._e()],2),1===t.type?n("v-uni-view",{staticClass:"he-images flex flex-wrap"},e._l(t.pic_list,(function(e,a){return n("he-image",{key:a,staticClass:"he-img",attrs:{"image-style":{borderRadius:"8rpx"},width:218,height:218,src:e,list:t.pic_list}})})),1):2===t.type?n("v-uni-view",{staticClass:"he-video"},[n("listVideo",{attrs:{index:t.id,src:t.video_list.url,poster:t.video_cover},model:{value:e.videoCurrent,callback:function(t){e.videoCurrent=t},expression:"videoCurrent"}})],1):e._e(),n("v-uni-view",{staticClass:"flex he-footer align-center justify-between"},[n("v-uni-view",[t.goods_id?n("v-uni-button",{staticClass:"cu-btn he-jump",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.routerGoods(t.goods_id)}}},[e._v("查看商品")]):e._e(),n("v-uni-text",{staticClass:"he-share--count"},[e._v("分享"+e._s(t.share_count))])],1),n("v-uni-view",[n("v-uni-button",{staticClass:"cu-btn he-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.hairpin(t)}}},[e._v("一键发圈")]),n("v-uni-button",{staticClass:"cu-btn he-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.routerCreateDynamic(t)}}},[e._v("发动态")])],1)],1)],1)})),e.list.length>0?n("he-load-more",{attrs:{"margin-top":39,"margin-bottom":39,status:e.loadStatus}}):e._e(),n("v-uni-view",{staticClass:"safe-area-inset-bottom"})],2),e.isNothing?n("he-no-content-yet",{attrs:{text:"暂无相关素材"}}):e._e(),n("he-save-loading",{attrs:{title:e.loadingText},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),n("he-float-window",{attrs:{"pages-url":"promoter"}})],1)},i=[]},cdbe:function(e,t,n){"use strict";var a=2147483647,r=36,i=1,o=26,s=38,c=700,h=72,u=128,l="-",f=/[^\0-\u007E]/,d=/[.\u3002\uFF0E\uFF61]/g,p="Overflow: input needs wider integers to process",v=r-i,m=Math.floor,g=String.fromCharCode,b=function(e){var t=[],n=0,a=e.length;while(n<a){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&r)<<10)+(1023&i)+65536):(t.push(r),n--)}else t.push(r)}return t},w=function(e){return e+22+75*(e<26)},y=function(e,t,n){var a=0;for(e=n?m(e/c):e>>1,e+=m(e/t);e>v*o>>1;a+=r)e=m(e/v);return m(a+(v+1)*e/(e+s))},k=function(e){var t=[];e=b(e);var n,s,c=e.length,f=u,d=0,v=h;for(n=0;n<e.length;n++)s=e[n],s<128&&t.push(g(s));var k=t.length,x=k;k&&t.push(l);while(x<c){var _=a;for(n=0;n<e.length;n++)s=e[n],s>=f&&s<_&&(_=s);var L=x+1;if(_-f>m((a-d)/L))throw RangeError(p);for(d+=(_-f)*L,f=_,n=0;n<e.length;n++){if(s=e[n],s<f&&++d>a)throw RangeError(p);if(s==f){for(var C=d,R=r;;R+=r){var U=R<=v?i:R>=v+o?o:R-v;if(C<U)break;var S=C-U,I=r-U;t.push(g(w(U+S%I))),C=m(S/I)}t.push(g(w(C))),v=y(d,L,x==k),d=0,++x}}++d,++f}return t.join("")};e.exports=function(e){var t,n,a=[],r=e.toLowerCase().replace(d,".").split(".");for(t=0;t<r.length;t++)n=r[t],a.push(f.test(n)?"xn--"+k(n):n);return a.join(".")}},d103:function(e,t,n){"use strict";n.r(t);var a=n("b6a9"),r=n("3329");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("41f3");var o,s=n("522a"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"11edef8c",null,!1,a["a"],o);t["default"]=c.exports},faf6:function(e,t,n){var a=n("7924"),r=n("8ba6"),i=n("548d"),o=r("iterator");e.exports=!a((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,a){t["delete"]("b"),n+=a+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))}}]);