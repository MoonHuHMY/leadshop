(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-apply-detail~pages-order-evaluation~pages-order-fill-return-information~promoter-pages-c~8dff42af"],{"0be5":function(t,e,n){var i=n("a1a8");e=i(!1),e.push([t.i,".he-toast[data-v-b939559a]{position:fixed;top:0;left:0;right:0;bottom:0}.he-toast__box[data-v-b939559a]{width:%?256?%;height:%?256?%;background-color:rgba(0,0,0,.5);border-radius:%?16?%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0}.he-drawer-content-visible.he-toast__box[data-v-b939559a]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%);opacity:1}.he-drawer-content-visible[data-v-b939559a]{-webkit-transform:translateZ(0) translate(-50%,-50%)!important;transform:translateZ(0) translate(-50%,-50%)!important}",""]),t.exports=e},"328e":function(t,e,n){"use strict";var i=n("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("b5aa");var a=i(n("99a5"));n("e1d4"),n("b1fa"),n("eb62"),n("2769"),n("0756"),n("7953f"),n("23db");var o=i(n("7ab1")),r={name:"he-upload-image",components:{heToast:o.default},props:{multiple:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"},maxCount:{type:[String,Number],default:9},sourceType:{type:Array,default:function(){return["album","camera"]}},autoUpload:{type:Boolean,default:!0},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},beforeUpload:{type:Function,default:null},previewFullImage:{type:Boolean,default:!0},sizeType:{type:Array,default:function(){return["original","compressed"]}},name:{type:String,default:"file"},formData:{type:Object,default:function(){return{}}},header:{type:Object,default:function(){return{}}},index:{type:[Number,String],default:""},maxSize:{type:[String,Number],default:function(){return 2097152}}},data:function(){return{lists:[],uploading:!1,loading:!1}},methods:{selectFile:function(){var t=this,e=(this.name,this.maxCount),n=this.multiple,i=this.maxSize,a=this.sizeType,o=this.lists,r=(this.camera,this.compressed,this.maxDuration,this.sourceType),s=null,u=e-o.length;s=new Promise((function(t,e){uni.chooseImage({count:n?u>9?9:u:1,sourceType:r,sizeType:a,success:t,fail:e})})),s.then((function(a){var r=t.lists.length;a.tempFiles.map((function(a,r){if(t.checkFileExt(a)&&(n||!(r>=1)))if(a.size>i&&i>0)t.$h.toast("超出允许的文件大小");else{if(e<=o.length)return void t.$h.toast("超出最大允许的文件个数");o.push({url:a.path,progress:0,error:!1,file:a})}})),t.$emit("on-choose-complete",t.lists,t.index),t.autoUpload&&(t.loading=!0,t.uploadFile(r))})).catch((function(t){}))},uploadFile:function(){var t=arguments,e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:0,a=e,!e.uploading){n.next=4;break}return n.abrupt("return");case 4:if(!(i>=e.lists.length)){n.next=8;break}return e.loading=!1,e.$emit("on-uploaded",e.lists,e.index),n.abrupt("return");case 8:e.lists[i].error=!1,e.uploading=!0,e.$h.srcToBase64(e.lists[i].url).then((function(t){a.$heshop.upload(t).then((function(t){a.uploading=!1,a.lists[i].response=t,a.$emit("on-success",t,i,a.lists,a.index),a.uploadFile(i+1)})).catch((function(t){a.uploading=!1,a.loading=!1,a.uploadError(i,t)}))}));case 11:case"end":return n.stop()}}),n)})))()},uploadError:function(t,e){this.lists[t].progress=0,this.lists[t].error=!0,this.lists[t].response=null,this.$h.toast(e.data.message),this.$emit("on-error",e,t,this.lists,this.index)},checkFileExt:function(t){var e=!1,n="",i=/.+\./;return n=t.name.replace(i,"").toLowerCase(),e=this.limitType.some((function(t){return t.toLowerCase()===n})),e||this.$h.toast("不允许选择".concat(n,"格式的文件")),e},deleteItem:function(t){this.lists.splice(t,1),this.$emit("on-remove",t,this.lists,this.index),this.$h.toast("移除成功")},doPreviewImage:function(t){if(this.previewFullImage){var e=this.lists.map((function(t){return t.url||t.path}));this.$utils.doPreviewImage(t,e)}}}};e.default=r},"382c":function(t,e,n){"use strict";n.r(e);var i=n("91c8"),a=n("5b3d");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8b2e");var r,s=n("522a"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"09143b98",null,!1,i["a"],r);e["default"]=u.exports},"3ee3":function(t,e,n){var i=n("0be5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("b41b").default;a("ca64cf06",i,!0,{sourceMap:!1,shadowMode:!1})},"5b3d":function(t,e,n){"use strict";n.r(e);var i=n("328e"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"5ccb":function(t,e,n){var i=n("68a92");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("b41b").default;a("4e318a1b",i,!0,{sourceMap:!1,shadowMode:!1})},"68a92":function(t,e,n){var i=n("a1a8");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-list-item[data-v-09143b98]{width:%?150?%;height:%?150?%;margin:0 %?20?% %?20?% 0;background:#f4f5f6;position:relative;border-radius:%?8?%}.he-add-text[data-v-09143b98]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#666;margin-top:%?5?%}.iconevaluate_uploadpictures[data-v-09143b98]{color:#666;width:%?48?%;height:%?48?%;font-size:%?48?%;margin-bottom:%?5?%}.he-delete-icon[data-v-09143b98]{position:absolute;top:0;right:0;z-index:10;width:%?60?%;height:%?60?%;padding:%?16?%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);font-size:%?28?%;color:#f5212d}.he-preview-image[data-v-09143b98]{width:100%;height:100%;border-radius:%?8?%;display:block}.he-loading[data-v-09143b98]{width:100%;height:100%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#fff;text-align:center}.he-loading__image[data-v-09143b98]{width:%?96?%;height:%?96?%;margin-top:%?52?%;margin-bottom:%?40?%}',""]),t.exports=e},"7953f":function(t,e,n){"use strict";var i=n("e450"),a=n("a3e7").some,o=n("104f"),r=o("some");i({target:"Array",proto:!0,forced:!r},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"7ab1":function(t,e,n){"use strict";n.r(e);var i=n("eb59"),a=n("99a3");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a12e");var r,s=n("522a"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b939559a",null,!1,i["a"],r);e["default"]=u.exports},"7c76":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e1d4");var i={name:"he-toast",props:{zIndex:{type:[Number,String],default:""},popup:{type:Boolean,default:!0},duration:{type:[String,Number],default:250},value:{type:Boolean,default:!1}},data:function(){return{visibleSync:!1,showDrawer:!1,closeFromInner:!1}},mounted:function(){this.value&&this.open()},methods:{close:function(){this.closeFromInner=!0,this.change("showDrawer","visibleSync",!1)},open:function(){this.change("visibleSync","showDrawer",!0)},change:function(t,e,n){var i=this;1==this.popup&&this.$emit("input",n),this[t]=n,this.timer=n?setTimeout((function(){i[e]=n,i.$emit(n?"open":"close")}),50):setTimeout((function(){i[e]=n,i.$emit(n?"open":"close")}),this.duration)}},computed:{style:function(){var t={};return t.zIndex=this.uZindex,t},uZindex:function(){return this.zIndex?this.zIndex:this.$zIndex.popup}},watch:{value:function(t){t?this.open():this.closeFromInner||this.close(),this.closeFromInner=!1}}};e.default=i},"8b2e":function(t,e,n){"use strict";var i=n("5ccb"),a=n.n(i);a.a},"91c8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"he-up-load-image flex flex-wrap"},[t._l(t.lists,(function(e,i){return n("v-uni-view",{key:i,staticClass:"he-list-item"},[n("v-uni-view",{staticClass:"he-delete-icon iconfont iconevaluate_uploadpictures_deleto",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteItem(i)}}}),n("v-uni-image",{staticClass:"he-preview-image",attrs:{mode:t.imageMode,src:e.url||e.path},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.doPreviewImage(e.url||e.path,i)}}})],1)})),t.maxCount>t.lists.length?n("v-uni-button",{staticClass:"cu-btn he-list-item lex flex-direction ustify-center align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont iconevaluate_uploadpictures"}),n("v-uni-view",{staticClass:"he-add-text"},[t._v("添加图片")])],1):t._e(),n("he-toast",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-uni-view",{staticClass:"he-loading flex flex-direction align-center"},[n("v-uni-image",{staticClass:"he-loading__image",attrs:{src:t.ipAddress+"/upload-loading.gif"}}),n("v-uni-text",[t._v("图片上传中...")])],1)],1)],2)},o=[]},"99a3":function(t,e,n){"use strict";n.r(e);var i=n("7c76"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a12e:function(t,e,n){"use strict";var i=n("3ee3"),a=n.n(i);a.a},eb59:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visibleSync?n("v-uni-view",{staticClass:"he-toast",style:[t.style],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"he-toast__box",class:t.showDrawer?"he-drawer-content-visible":""},[t._t("default")],2)],1):t._e()},o=[]},eb62:function(t,e,n){"use strict";var i=n("e450"),a=n("a3e7").map,o=n("529c"),r=o("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);