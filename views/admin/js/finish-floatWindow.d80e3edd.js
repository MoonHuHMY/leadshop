(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["finish-floatWindow"],{1607:function(t,e,l){"use strict";l("65a7")},2813:function(t,e,l){t.exports=l.p+"img/icon-phone-header.6803d30e.png"},"65a7":function(t,e,l){},8366:function(t,e,l){"use strict";l.r(e);l("eb62"),l("f5bd"),l("c5d1"),l("2769"),l("ecf1");var a,o,s=l("3335"),c=l.n(s),n=l("00ee"),i="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-open.png",r="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-toTop.png",u="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-backPage.png",d="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-personal-center.png",m="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-index.png",f="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-cart.png",p="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-tell.png",b="https://qmxq.oss-cn-hangzhou.aliyuncs.com/float-close.png",h={name:"float-window",components:{vuedraggable:c.a,hyperlinkSelect:n["a"]},data:function(){return{form:{status:0,stowedState:"",expandedState:"",button:[],buttonIcon:{index:"",cart:"",tell:"",personalCenter:"",toTop:"",backPage:""},pages:[],channel:[],customize:[]}}},render:function(){var t=this,e=arguments[0];return e("div",[e("div",{class:"le-main flex"},[e("div",{class:"le-card"},[e("div",{class:"content"},[e("img",{attrs:{src:l("2813"),width:"340",height:"88",alt:""}}),e("div",{class:"float-btn flex flex-direction align-end"},[function(){return 1===t.form.status&&t.form.button.length<4?e("div",{class:"flex flex-direction"},[t.form.button.map((function(l,a){return e("img",{key:a,class:"button",attrs:{src:t.form.buttonIcon[l],alt:""}})}))]):1===t.form.status&&t.form.button.length>=4?e("div",{class:"box flex flex-wrap"},[t.form.button.map((function(l,a){return e("div",{class:"btn"},[e("img",{class:"button",attrs:{src:t.form.buttonIcon[l],alt:""}}),e("span",[function(){switch(l){case"index":return"首页";case"cart":return"购物车";case"tell":return"联系客服";case"personalCenter":return"个人中心";case"toTop":return"返回顶部";case"backPage":return"返回上页"}}()])])}))]):2===t.form.status&&t.form.customize.length<4?t.form.customize.map((function(t,l){return e("img",{attrs:{src:t.img,alt:"",width:"39",height:"39"},style:"margin-bottom: 8px",key:l})})):2===t.form.status&&t.form.customize.length>=4?e("div",{class:"box flex flex-wrap"},[t.form.customize.map((function(t,l){return e("div",{class:"btn flex align-center flex-direction",key:l},[e("img",{class:"button",attrs:{src:t.img,alt:""}}),e("span",[t.name])])}))]):void 0}(),function(){if(1===t.form.status&&t.form.button.length>=3||2===t.form.status&&t.form.customize.length>=3)return e("div",[e("img",{attrs:{src:t.form.stowedState},class:"close"})])}()])])]),e("div",{class:"le-card flex-sub"},[e("div",{class:"le-title"},["启用设置"]),e("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)}}},[e("el-radio",{attrs:{label:1}},["启用普通模式"]),e("el-radio",{attrs:{label:2}},["启用自定义模式"]),e("el-radio",{attrs:{label:0}},["不启用悬浮窗"])]),function(){if(0!==t.form.status)return e("div",[e("div",{class:"le-line"}),e("div",{class:"le-title"},["内容设置"]),e("div",{class:"item"},[e("span",{class:"le-prompt-text"},["图标尺寸建议88px*88px"]),e("el-button",{class:"reset-btn",attrs:{type:"text"},on:{click:function(){t.form.expandedState=i,t.form.stowedState=b,t.form.buttonIcon.toTop=r,t.form.buttonIcon.backPage=u,t.form.buttonIcon.personalCenter=d,t.form.buttonIcon.index=m,t.form.buttonIcon.cart=f,t.form.buttonIcon.tell=p}}},["恢复默认"])]),e("div",{class:"flex item"},[e("div",{class:"le-label"},["收起展开"]),e("div",[e("div",{class:"flex"},[e("div",{class:"open-close"},[e("div",{class:"upload-image"},[e("pictureDialog",{attrs:{limit:1},scopedSlots:{upload:function(){return e("div",{style:"width: 60px;height: 60px"})},preview:function(t){return e("div",{class:"upload-image-preview"},[e("el-image",{style:"width: 60px;height: 60px",attrs:{src:t.url,fit:"cover"}}),e("div",{class:"replace"},[e("span",["替换"])])])}},model:{value:t.form.stowedState,callback:function(e){t.$set(t.form,"stowedState",e)}}})]),e("div",{class:"le-prompt-text"},["收起状态"])]),e("div",{class:"open-close"},[e("div",{class:"upload-image"},[e("pictureDialog",{attrs:{limit:1},scopedSlots:{upload:function(){return e("div",{style:"width: 60px;height: 60px"})},preview:function(t){return e("div",{class:"upload-image-preview"},[e("el-image",{style:"width: 60px;height: 60px",attrs:{src:t.url,fit:"cover"}}),e("div",{class:"replace"},[e("span",["替换"])])])}},model:{value:t.form.expandedState,callback:function(e){t.$set(t.form,"expandedState",e)}}})]),e("div",{class:"le-prompt-text"},["展开状态"])])]),e("div",{class:"le-prompt-text"},["包含3个及以上悬浮按钮时，启用收起展开"])])]),e("div",{class:"flex item button"},[e("div",{class:"le-label"},["悬浮按钮"]),function(){return 1===t.form.status?e("div",[e("el-checkbox-group",{model:{value:t.form.button,callback:function(e){t.$set(t.form,"button",e)}}},[e("el-checkbox",{attrs:{label:"index"}},["首页"]),e("el-checkbox",{attrs:{label:"cart"}},["购物车"]),e("el-checkbox",{attrs:{label:"tell"}},["联系客服"]),e("el-checkbox",{attrs:{label:"personalCenter"}},["个人中心"]),e("el-checkbox",{attrs:{label:"toTop"}},["返回顶部"]),e("el-checkbox",{attrs:{label:"backPage"}},["返回上页"])]),e(c.a,{class:"flex",model:{value:t.form.button,callback:function(e){t.$set(t.form,"button",e)}}},[t.form.button.map((function(l,a){return e("div",{class:"open-close",key:a},[e("div",{class:"upload-image"},[e("pictureDialog",{attrs:{limit:1},scopedSlots:{upload:function(){return e("div",{style:"width: 60px;height: 60px"})},preview:function(t){return e("div",{class:"upload-image-preview"},[e("el-image",{style:"width: 60px;height: 60px",attrs:{src:t.url,fit:"cover"}}),e("div",{class:"replace"},[e("span",["替换"])])])}},model:{value:t.form.buttonIcon[l],callback:function(e){t.$set(t.form.buttonIcon,l,e)}}})]),e("div",{class:"le-prompt-text"},[function(){switch(l){case"index":return"首页";case"cart":return"购物车";case"tell":return"联系客服";case"personalCenter":return"个人中心";case"toTop":return"返回顶部";case"backPage":return"返回上页"}}()])])}))])]):e("div",{class:"flex flex-direction align-start"},[e(c.a,{model:{value:t.form.customize,callback:function(e){t.$set(t.form,"customize",e)}}},[t.form.customize.map((function(l,a){return e("div",{class:"customize-box",key:a},[e("span",{class:"le-icon le-icon-cha2",on:{click:function(){t.$delete(t.form.customize,a)}}}),e("div",{class:"head"},[e("span",{class:"le-icon le-icon-tuoye"}),e("span",["按钮",a+1])]),e("div",{class:"body flex"},[e("div",{class:"upload"},[e("pictureDialog",{attrs:{limit:1},scopedSlots:{upload:function(){return e("div",{class:"upload-upload flex flex-direction align-center justify-center"},[e("div",[e("div",{class:"le-icon le-icon-add"})]),e("div",{class:"text"},["添加图片"])])},preview:function(t){return e("div",{class:"upload-image-preview"},[e("el-image",{style:"width: 80px;height: 80px",attrs:{src:t.url,fit:"cover"}}),e("div",{class:"replace"},[e("span",["替换"])])])}},model:{value:l.img,callback:function(e){t.$set(l,"img",e)}}})]),e("div",{class:"flex-sub flex flex-direction justify-around"},[e("div",{class:"flex align-center"},[e("div",{class:"label"},["名称"]),e("el-input",{attrs:{maxlength:"4","show-word-limit":!0},model:{value:l.name,callback:function(e){t.$set(l,"name",e)}}})]),e("div",{class:"flex align-center"},[e("div",{class:"label"},["链接"]),e(n["a"],{class:"hyperlinkSelect",model:{value:l.link,callback:function(e){t.$set(l,"link",e)}}},["请选择跳转链接"])])])])])}))]),e("el-button",{class:"add-btn",attrs:{disabled:t.form.customize.length>=6&&"disabled",plain:!0},on:{click:function(){t.form.customize.push({img:"",link:{},name:""})}}},["添加悬浮按钮"]),e("div",{class:"le-prompt-text"},["最多添加6个悬浮按钮"])])}()]),e("div",{class:"le-line"}),e("div",[e("div",{class:"le-title"},["应用设置"]),e("div",{class:"flex item"},[e("div",{class:"le-label"},["页面选择"]),e("el-checkbox-group",{model:{value:t.form.pages,callback:function(e){t.$set(t.form,"pages",e)}}},[e("el-checkbox",{attrs:{label:"index"}},["首页"]),e("el-checkbox",{attrs:{label:"page"}},["微页面"]),e("el-checkbox",{attrs:{label:"goods-list"}},["商品列表"]),e("el-checkbox",{attrs:{label:"goods-detail"}},["商品详情"]),e("el-checkbox",{attrs:{label:"submit"}},["结算页面"]),e("el-checkbox",{attrs:{label:"order-list"}},["订单列表"]),e("el-checkbox",{attrs:{label:"after-order"}},["售后记录"]),e("el-checkbox",{attrs:{label:"order-detail"}},["订单详情"]),e("el-checkbox",{attrs:{label:"after-detail"}},["售后详情"]),e("el-checkbox",{attrs:{label:"promoter"}},["分销商中心"])])]),e("div",{class:"flex item"},[e("div",{class:"le-label"},["渠道选择"]),e("el-checkbox-group",{model:{value:t.form.channel,callback:function(e){t.$set(t.form,"channel",e)}}},[e("el-checkbox",{attrs:{label:"applet"}},["小程序商城"]),e("el-checkbox",{attrs:{label:"wechat"}},["公众号商城"])])])])])}()])]),e("div",{class:"le-cardpin"},[e("el-button",{attrs:{type:"primary"},on:{click:this.submit}},["保存"])])])},mounted:function(){this.loadData()},methods:{submit:function(){var t=this;this.$heshop.setting("post",{keyword:"float_window",content:this.form}).then((function(){t.$message({message:"保存成功",type:"success"})})).catch((function(){t.$message.error("加载配置信息失败，请检查网络")}))},loadData:function(){var t=this;this.$heshop.search("post",{include:"setting"},{keyword:"float_window"}).then((function(e){e?t.form=e.content:(t.form.expandedState=i,t.form.stowedState=b,t.form.buttonIcon.toTop=r,t.form.buttonIcon.backPage=u,t.form.buttonIcon.personalCenter=d,t.form.buttonIcon.index=m,t.form.buttonIcon.cart=f,t.form.buttonIcon.tell=p)}))}}},x=h,v=(l("1607"),l("4ac2")),g=Object(v["a"])(x,a,o,!1,null,"7a96c612",null);e["default"]=g.exports}}]);