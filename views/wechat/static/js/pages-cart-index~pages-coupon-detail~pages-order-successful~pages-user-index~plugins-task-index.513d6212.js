(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-index~pages-coupon-detail~pages-order-successful~pages-user-index~plugins-task-index"],{"08bc":function(t,e,i){"use strict";i.r(e);var a=i("ca9b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0b62":function(t,e,i){var a=i("1fd6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("5c0d").default;n("3110007a",a,!0,{sourceMap:!1,shadowMode:!1})},"1e0d":function(t,e,i){"use strict";i.r(e);var a=i("591a"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"1fd6":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,".he-products-featured[data-v-0eb4bb80]{width:%?750?%;overflow:hidden}.he-top[data-v-0eb4bb80]{margin-top:%?43?%;border-radius:%?16?% %?16?% 0 0}.iconproductrecommendation_line[data-v-0eb4bb80]{font-size:%?68?%;color:#a2a2a2}.he-icon-right[data-v-0eb4bb80]{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.he-text[data-v-0eb4bb80]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;margin:0 %?21?%}",""]),t.exports=e},"39f6":function(t,e,i){var a=i("abd6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("5c0d").default;n("534ae0c1",a,!0,{sourceMap:!1,shadowMode:!1})},"591a":function(t,e,i){"use strict";var a=i("99ca").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("b5aa");var n=a(i("e9ff"));i("4cfc"),i("275f"),i("2c7c"),i("5c5d");var o=a(i("a5b4")),s=a(i("fcfe")),r={name:"list-B",components:{heCart:o.default,heImage:s.default},props:{list:{type:Array,default:[]},is_task:{type:[Boolean,Number],default:0},sort:{type:String,default:"ascending"}},data:function(){return{leftList:[],rightList:[],tempList:[],isShopping:!1,goods:{},select:{},isRightLeft:!0}},computed:{copyFlowList:function(){return this.cloneData(this.list)}},mounted:function(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},methods:{cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.tempList.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$hGetRect("#u-left-column");case 4:return e.sent,e.next=7,t.$hGetRect("#u-right-column");case 7:if(e.sent,i=t.tempList[0],i){e.next=11;break}return e.abrupt("return");case 11:if(t.isRightLeft?(t.leftList.push(i),t.isRightLeft=!1):(t.rightList.push(i),t.isRightLeft=!0),t.tempList.splice(0,1),!t.tempList.length){e.next=16;break}return e.next=16,t.splitData();case 16:case"end":return e.stop()}}),e)})))()},navigateTo:function(t){this.$emit("navigateTo",t)},shopping:function(t){this.select={};var e=this;this.$heshop.goods("get",t.id,{type:"param"}).then((function(i){e.goods=Object.assign(t,i),e.isShopping=!0})).catch((function(t){e.$toError(t)}))}},watch:{copyFlowList:function(t,e){var i=Array.isArray(e)&&e.length>0?e.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(i))),this.splitData()}}};e.default=r},"5a27":function(t,e,i){"use strict";var a=i("0b62"),n=i.n(a);n.a},"5c49":function(t,e,i){"use strict";var a=i("39f6"),n=i.n(a);n.a},9760:function(t,e,i){"use strict";i.r(e);var a=i("d7d9"),n=i("08bc");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5a27");var s,r=i("5d80"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0eb4bb80",null,!1,a["a"],s);e["default"]=c.exports},a0c3:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"list-B flex justify-between",attrs:{"data-theme":t.theme}},[i("v-uni-view",{staticClass:"he-column",attrs:{id:"u-left-column"}},t._l(t.leftList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"he-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo(e)}}},[i("he-image",{attrs:{height:347,width:347,src:e.slideshow[0]}}),i("v-uni-view",{staticClass:"he-item__name he-line-2"},[t._v(t._s(e.name))]),t.is_task?t._e():i("v-uni-view",{staticClass:"he-item__footer flex justify-between align-center"},[i("v-uni-text",{staticClass:"he-item__price"},[t._v(t._s(e.price))]),i("v-uni-view",{staticClass:"he-cart",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.shopping(e)}}},[i("v-uni-text",{staticClass:"iconfont iconbtn_addtocart"})],1)],1),t.is_task?i("v-uni-view",{staticClass:"__goods-info"},[i("v-uni-view",{staticClass:"__goods-info-price"},[i("v-uni-view",{staticClass:"iconfont iconjifen"}),i("v-uni-view",{staticClass:"__goods-info-number",style:{color:t.themeColor}},[t._v(t._s(e.task.task_number)+"+")]),i("v-uni-view",{staticClass:"__goods-info-money",style:{color:t.themeColor}},[t._v("¥"+t._s(e.task.task_price))])],1),i("v-uni-view",{staticClass:"__goods-info-button",style:{backgroundColor:t.themeColor},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.shopping(e)}}},[t._v("兑换")])],1):t._e()],1)})),1),i("v-uni-view",{staticClass:"he-column",attrs:{id:"u-right-column"}},t._l(t.rightList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"he-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo(e)}}},[i("he-image",{attrs:{height:347,width:347,src:e.slideshow[0]}}),i("v-uni-view",{staticClass:"he-item__name he-line-2"},[t._v(t._s(e.name))]),t.is_task?t._e():i("v-uni-view",{staticClass:"he-item__footer flex justify-between align-center"},[i("v-uni-text",{staticClass:"he-item__price"},[t._v(t._s(e.price))]),i("v-uni-view",{staticClass:"he-cart",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.shopping(e)}}},[i("v-uni-text",{staticClass:"iconfont iconbtn_addtocart"})],1)],1),t.is_task?i("v-uni-view",{staticClass:"__goods-info"},[i("v-uni-view",{staticClass:"__goods-info-price"},[i("v-uni-view",{staticClass:"iconfont iconjifen"}),i("v-uni-view",{staticClass:"__goods-info-number",style:{color:t.themeColor}},[t._v(t._s(e.task.task_number)+"+")]),i("v-uni-view",{staticClass:"__goods-info-money",style:{color:t.themeColor}},[t._v("¥"+t._s(e.task.task_price))])],1),i("v-uni-view",{staticClass:"__goods-info-button",style:{backgroundColor:t.themeColor},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.shopping(e)}}},[t._v("兑换")])],1):t._e()],1)})),1)],1),i("he-cart",{attrs:{show:t.isShopping,is_task:t.is_task,"shopping-type":t.is_task?"buy":"cart",goods:t.goods},on:{"update:show":function(e){arguments[0]=e=t.$handleEvent(e),t.isShopping=e}}})],1)},o=[]},abd6:function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.list-B[data-v-2d95ce8a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding:%?17?% %?20?% 0 %?20?%}.he-column[data-v-2d95ce8a]{width:%?347?%;height:auto}.he-item[data-v-2d95ce8a]{width:%?347?%;background:#fff;box-shadow:0 0 %?10?% 0 rgba(0,0,0,.05);border-radius:%?16?%;overflow:hidden;margin-bottom:%?13?%;position:relative}.he-item__name[data-v-2d95ce8a]{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#353535;line-height:1.3;padding:%?19?% %?26?% 0 %?26?%;margin-bottom:%?8?%}.he-cart[data-v-2d95ce8a]{width:%?80?%;height:%?80?%;position:absolute;bottom:0;right:0}.iconbtn_addtocart[data-v-2d95ce8a]{font-size:%?36?%;position:absolute;bottom:%?15?%;right:%?24?%}[data-theme="red_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#e60b30!important}[data-theme="purple_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#8f2df3!important}[data-theme="blue_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#33a7ff!important}[data-theme="green_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#1fc551!important}[data-theme="orange_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#ff7f00!important}[data-theme="golden_theme"] .iconbtn_addtocart[data-v-2d95ce8a]{color:#caa45a!important}.he-item__footer[data-v-2d95ce8a]{padding:0 %?18?% 0 %?26?%;margin-bottom:%?12?%}.he-item__price[data-v-2d95ce8a]{font-size:%?32?%;font-family:PingFang SC;font-weight:400;line-height:1.8}[data-theme="red_theme"] .he-item__price[data-v-2d95ce8a]{color:#e60b30!important}[data-theme="purple_theme"] .he-item__price[data-v-2d95ce8a]{color:#8f2df3!important}[data-theme="blue_theme"] .he-item__price[data-v-2d95ce8a]{color:#33a7ff!important}[data-theme="green_theme"] .he-item__price[data-v-2d95ce8a]{color:#1fc551!important}[data-theme="orange_theme"] .he-item__price[data-v-2d95ce8a]{color:#ff7f00!important}[data-theme="golden_theme"] .he-item__price[data-v-2d95ce8a]{color:#caa45a!important}.he-item__price[data-v-2d95ce8a]:before{content:"￥";font-size:%?24?%}.he-img__box[data-v-2d95ce8a]{width:%?347?%;height:%?347?%;position:relative;background:#ecedf1}.iconimago_defaultproduct[data-v-2d95ce8a]{width:%?120?%;height:%?120?%;font-size:%?120?%;position:absolute;top:50%;left:50%;color:#dfe0e6;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.__goods-info .__goods-info-title[data-v-2d95ce8a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;line-height:%?36?%;padding:%?19?% %?26?%}.__goods-info .__goods-info-price[data-v-2d95ce8a]{margin-left:%?24?%;width:100%;height:%?32?%;text-align:left}.__goods-info .__goods-info-price .iconfont[data-v-2d95ce8a]{display:inline-block;color:#fbad15;font-size:%?24?%;width:%?24?%;height:%?24?%}.__goods-info .__goods-info-price .__goods-info-number[data-v-2d95ce8a]{display:inline-block;font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#e60b30;line-height:%?32?%;padding-left:%?8?%}.__goods-info .__goods-info-price .__goods-info-money[data-v-2d95ce8a]{display:inline-block;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#e60b30}.__goods-info .__goods-info-button[data-v-2d95ce8a]{width:%?300?%;height:%?56?%;background:#e60b30;border-radius:%?28?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;text-align:center;line-height:%?56?%;margin:%?20?% auto}',""]),t.exports=e},ca9b:function(t,e,i){"use strict";var a=i("99ca").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("06c4"));i("4cfc");var o=a(i("fe27")),s=i("7736"),r={name:"he-products-featured",components:{listB:o.default},props:{is_task:{type:[Boolean,Number],default:0}},data:function(){return{taskList:[]}},computed:(0,n.default)({},(0,s.mapGetters)({list:"goods/shareGoods"})),methods:(0,n.default)((0,n.default)({},(0,s.mapActions)({shareGoods:"goods/shareGoods"})),{},{navigateTo:function(t){uni.navigateTo({url:"/pages/goods/detail?id="+t.id+"&is_task="+this.is_task})}}),mounted:function(){var t=this;this.is_task?this.$heshop.goods("get",{behavior:"recommend",is_task:this.is_task}).then((function(e){t.taskList=e})).catch((function(){})):this.shareGoods()}};e.default=r},d7d9:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"he-products-featured",attrs:{id:"products-featured"}},[i("v-uni-view",{staticClass:"he-top flex justify-center align-center"},[i("v-uni-text",{staticClass:"iconfont iconproductrecommendation_line"}),t.is_task?i("v-uni-view",{staticClass:"he-text"},[t._v("积分商品")]):i("v-uni-view",{staticClass:"he-text"},[t._v("为你推荐")]),i("v-uni-text",{staticClass:"iconfont iconproductrecommendation_line he-icon-right"})],1),t.is_task?[t.taskList.length?i("list-b",{attrs:{is_task:t.is_task,list:t.taskList},on:{navigateTo:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo.apply(void 0,arguments)}}}):t._e()]:t._e(),t.is_task?t._e():[t.list.length?i("list-b",{attrs:{list:t.list},on:{navigateTo:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo.apply(void 0,arguments)}}}):t._e()]],2)},o=[]},fe27:function(t,e,i){"use strict";i.r(e);var a=i("a0c3"),n=i("1e0d");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5c49");var s,r=i("5d80"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2d95ce8a",null,!1,a["a"],s);e["default"]=c.exports}}]);