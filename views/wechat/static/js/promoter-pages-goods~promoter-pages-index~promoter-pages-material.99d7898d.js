(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-pages-goods~promoter-pages-index~promoter-pages-material"],{"0be5":function(t,e,n){var a=n("a1a8");e=a(!1),e.push([t.i,".he-toast[data-v-b939559a]{position:fixed;top:0;left:0;right:0;bottom:0}.he-toast__box[data-v-b939559a]{width:%?256?%;height:%?256?%;background-color:rgba(0,0,0,.5);border-radius:%?16?%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0}.he-drawer-content-visible.he-toast__box[data-v-b939559a]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%);opacity:1}.he-drawer-content-visible[data-v-b939559a]{-webkit-transform:translateZ(0) translate(-50%,-50%)!important;transform:translateZ(0) translate(-50%,-50%)!important}",""]),t.exports=e},1122:function(t,e,n){"use strict";n.r(e);var a=n("6302"),i=n("6d8b");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("c425");var r,s=n("522a"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"9e3efe20",null,!1,a["a"],r);e["default"]=u.exports},"25e4":function(t,e,n){var a=n("783a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("b41b").default;i("52c3bf9e",a,!0,{sourceMap:!1,shadowMode:!1})},"2ad5":function(t,e,n){"use strict";var a=n("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("7ab1")),o={name:"he-save-loading",components:{heToast:i.default},props:{value:{type:Boolean,default:!0},title:{type:String,default:"图片上传中..."}},computed:{loading:{get:function(t){var e=t.value;return e},set:function(t){this.$emit("input",t)}}}};e.default=o},"3c47":function(t,e,n){"use strict";n.r(e);var a=n("2ad5"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"3e90":function(t,e,n){var a=n("a5b4c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("b41b").default;i("794dedb4",a,!0,{sourceMap:!1,shadowMode:!1})},"3ee3":function(t,e,n){var a=n("0be5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("b41b").default;i("ca64cf06",a,!0,{sourceMap:!1,shadowMode:!1})},"55a2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e1d4");var a={name:"he-open-launch-weapp",props:{digital:{type:[Array,Object,Number],default:function(){return{}}},username:{type:String,default:""},path:{type:String,default:""}},computed:{appid:function(t){var e=t.username;return e},url:function(t){var e=t.path;return e}},data:function(){return{subscribeId:this.$h.guid()+"_subscribe"}},mounted:function(){var t=this,e=document.getElementById(t.subscribeId);e.addEventListener("ready",(function(){t.$emit("open-subscribe-success",t.digital)})),e.addEventListener("launch",(function(){t.$emit("open-subscribe-success",t.digital)})),e.addEventListener("error",(function(){t.$emit("open-subscribe-success",t.digital)}))}};e.default=a},6302:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"he-open-launch-weapp"},[t._t("default"),n("wx-open-launch-weapp",{staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"},attrs:{username:t.appid,path:t.url,id:t.subscribeId}},[n("script",{attrs:{type:"text/wxtag-template"}},[t._v('<style scoped>\n        .btn {\n          width: 100%;\n          height: 500px;\n        }\n      </style>\n      <div class="btn"></div>')])])],2)},o=[]},"68b7":function(t,e,n){var a=n("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-float[data-v-3507a0af]{position:fixed;z-index:1000;right:%?24?%}.he-float .open-close[data-v-3507a0af]{width:%?88?%;height:%?88?%}.he-float uni-image[data-v-3507a0af]{width:%?88?%;height:%?88?%;display:block}.he-float .row-link[data-v-3507a0af]{margin-bottom:%?16?%}.he-float .box[data-v-3507a0af]{width:%?424?%;height:%?362?%;background:rgba(0,0,0,.6);border-radius:%?40?%;margin-bottom:%?17?%;padding:%?32?% %?37?%}.he-float .box .item[data-v-3507a0af]{width:%?96?%;position:relative}.he-float .box .item .name[data-v-3507a0af]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;margin-top:%?15?%}.he-float .box .item[data-v-3507a0af]:not(:nth-child(3n)){margin-right:%?32?%}.button[data-v-3507a0af]{background:transparent;padding:0;margin-left:0;border:none;outline:none;line-height:0;position:absolute;width:100%;height:100%}.he-share[data-v-3507a0af]{width:%?88?%;height:%?88?%;border-radius:50%;z-index:100}',""]),t.exports=e},"6d8b":function(t,e,n){"use strict";n.r(e);var a=n("55a2"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"783a":function(t,e,n){var a=n("a1a8");e=a(!1),e.push([t.i,".he-open-launch-weapp[data-v-9e3efe20]{position:relative;overflow:hidden}",""]),t.exports=e},"7ab1":function(t,e,n){"use strict";n.r(e);var a=n("eb59"),i=n("99a3");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a12e");var r,s=n("522a"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"b939559a",null,!1,a["a"],r);e["default"]=u.exports},"7c76":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e1d4");var a={name:"he-toast",props:{zIndex:{type:[Number,String],default:""},popup:{type:Boolean,default:!0},duration:{type:[String,Number],default:250},value:{type:Boolean,default:!1}},data:function(){return{visibleSync:!1,showDrawer:!1,closeFromInner:!1}},mounted:function(){this.value&&this.open()},methods:{close:function(){this.closeFromInner=!0,this.change("showDrawer","visibleSync",!1)},open:function(){this.change("visibleSync","showDrawer",!0)},change:function(t,e,n){var a=this;1==this.popup&&this.$emit("input",n),this[t]=n,this.timer=n?setTimeout((function(){a[e]=n,a.$emit(n?"open":"close")}),50):setTimeout((function(){a[e]=n,a.$emit(n?"open":"close")}),this.duration)}},computed:{style:function(){var t={};return t.zIndex=this.uZindex,t},uZindex:function(){return this.zIndex?this.zIndex:this.$zIndex.popup}},watch:{value:function(t){t?this.open():this.closeFromInner||this.close(),this.closeFromInner=!1}}};e.default=a},"943e":function(t,e,n){"use strict";n.r(e);var a=n("dc06"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"99a3":function(t,e,n){"use strict";n.r(e);var a=n("7c76"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a12e:function(t,e,n){"use strict";var a=n("3ee3"),i=n.n(a);i.a},a5b4c:function(t,e,n){var a=n("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-loading[data-v-3745c31e]{width:100%;height:100%;font-size:%?28?%;font-weight:500;color:#fff;text-align:center}.he-loading__image[data-v-3745c31e]{width:%?96?%;height:%?96?%;margin-top:%?52?%;margin-bottom:%?40?%}',""]),t.exports=e},aa36:function(t,e,n){"use strict";var a=n("3e90"),i=n.n(a);i.a},b12c:function(t,e,n){"use strict";var a=n("e450"),i=n("a3e7").findIndex,o=n("3286"),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(r)},b3ff:function(t,e,n){"use strict";var a=n("c10f"),i=n.n(a);i.a},c10f:function(t,e,n){var a=n("68b7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("b41b").default;i("0a236a6c",a,!0,{sourceMap:!1,shadowMode:!1})},c425:function(t,e,n){"use strict";var a=n("25e4"),i=n.n(a);i.a},dc06:function(t,e,n){"use strict";var a=n("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("1c03"));n("e1d4"),n("b12c"),n("0d84"),n("6afd");var o=a(n("1122")),r=n("7736"),s={props:{pagesUrl:{type:String,default:""},bottom:{type:Number,default:0}},components:{heOpenLaunchWeapp:o.default},data:function(){return{showModal:!1,list:[],isOpen:!1}},computed:(0,i.default)((0,i.default)({},(0,r.mapGetters)("setting",{floatWindow:"getFloatWindow"})),{},{bottomStyle:function(){var t={bottom:this.bottom+148+"rpx"};return t}}),mounted:function(){var t=this,e=this.floatWindow.pages.findIndex((function(e){return e===t.pagesUrl})),n="";n="wechat";var a=this.floatWindow.channel.findIndex((function(t){return t===n}));this.showModal=e>-1&&0!==this.floatWindow.status&&a>-1,1===this.floatWindow.status?this.floatWindow.button.forEach((function(e){"index"===e&&"index"!==t.pagesUrl?t.list.push({img:t.floatWindow.buttonIcon.index,link:{extend:!1,index:0,path:"/pages/index/index"},name:"首页"}):"cart"===e?t.list.push({img:t.floatWindow.buttonIcon.cart,link:{extend:!1,index:4,path:"/pages/cart/index"},name:"购物车"}):"tell"===e?t.list.push({img:t.floatWindow.buttonIcon.tell,link:{value:"tell"},name:"联系客服"}):"personalCenter"===e?t.list.push({img:t.floatWindow.buttonIcon.personalCenter,link:{extend:!1,index:5,path:"/pages/user/index"},name:"个人中心"}):"toTop"===e?t.list.push({img:t.floatWindow.buttonIcon.toTop,link:{value:"toTop"},name:"返回顶部"}):"backPage"===e&&"index"!==t.pagesUrl&&t.list.push({img:t.floatWindow.buttonIcon.backPage,link:{value:"backPage"},name:"返回上页"})})):2===this.floatWindow.status&&(this.list=this.floatWindow.customize),this.list.length<3&&(this.isOpen=!0)},methods:{handleCheck:function(t){"backPage"===t.value?getCurrentPages().length>1&&(wx.pageScrollTo({scrollTop:0,duration:500}),uni.navigateBack({delta:1})):"toTop"===t.value?wx.pageScrollTo({scrollTop:0}):"tell"===t.value?uni.makePhoneCall({phoneNumber:this.storeSetting.contact.phone.value}):this.$h.MPageNavigate(t)},setOpen:function(){this.isOpen=!this.isOpen}}};e.default=s},dc87:function(t,e,n){"use strict";n.r(e);var a=n("e8af"),i=n("3c47");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("aa36");var r,s=n("522a"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3745c31e",null,!1,a["a"],r);e["default"]=u.exports},e8af:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("he-toast",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-uni-view",{staticClass:"he-loading flex flex-direction align-center"},[n("v-uni-image",{staticClass:"he-loading__image",attrs:{src:t.ipAddress+"/upload-loading.gif"}}),n("v-uni-text",[t._v(t._s(t.title))])],1)],1)},o=[]},eb59:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visibleSync?n("v-uni-view",{staticClass:"he-toast",style:[t.style],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"he-toast__box",class:t.showDrawer?"he-drawer-content-visible":""},[t._t("default")],2)],1):t._e()},o=[]},f0bc:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showModal?n("v-uni-view",{staticClass:"he-float flex flex-direction align-end",style:[t.bottomStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[t.isOpen&&t.list.length>=4?n("v-uni-view",{staticClass:"box flex flex-wrap"},[t._l(t.list,(function(e,a){return[11===e.index?n("he-open-launch-weapp",{key:a,attrs:{username:e.link.param.wechat.appId,path:e.link.param.wechat.path}},[n("v-uni-view",{key:a,staticClass:"item flex flex-direction align-center"},[n("v-uni-image",{attrs:{src:e.img}}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1)],1):(e.link.value,n("v-uni-view",{key:a,staticClass:"item flex flex-direction align-center",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.handleCheck(e.link)}}},[n("v-uni-image",{attrs:{src:e.img}}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1))]}))],2):t._e(),t.isOpen&&t.list.length<4?t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"row-link",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.handleCheck(e.link)}}},[n("v-uni-image",{attrs:{src:e.img}})],1)})):t._e(),t.list.length>=3?n("v-uni-view",{staticClass:"open-close"},[n("v-uni-image",{attrs:{src:t.isOpen?t.floatWindow.stowedState:t.floatWindow.expandedState},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setOpen()}}})],1):t._e()],2):t._e()},o=[]},fe9c:function(t,e,n){"use strict";n.r(e);var a=n("f0bc"),i=n("943e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b3ff");var r,s=n("522a"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3507a0af",null,!1,a["a"],r);e["default"]=u.exports}}]);