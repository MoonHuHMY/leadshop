(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-service-publish"],{b1ca:function(e,t,i){},d815:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"service",attrs:{rules:e.rules,model:e.form,"label-width":"176px"}},[i("div",{staticClass:"le-header"},[i("span",{staticClass:"le-before",on:{click:function(t){return e.router("/goods/service")}}},[e._v("商品服务")]),i("i",{staticClass:"el-breadcrumb__separator el-icon-arrow-right"}),i("span",{staticClass:"le-now"},[e._v(e._s(e.form.id?"编辑商品服务":"添加商品服务"))])]),i("div",{staticClass:"le-body flex"},[i("div",{staticClass:"le-form"},[i("el-form-item",{attrs:{label:"服务名称",prop:"title"}},[i("el-input",{attrs:{maxlength:"10","show-word-limit":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{staticClass:"he-textarea",attrs:{label:"服务详情",prop:"content"}},[i("el-input",{attrs:{type:"textarea",rows:"13",maxlength:"160","show-word-limit":""},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),i("el-form-item",{attrs:{label:"排序",prop:"sort"}},[i("el-input",{model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}}),i("p",{staticClass:"he-tips"},[e._v("数字越大，越靠前，不填写则默认为1")])],1)],1),i("div",{staticClass:"he-servicePreview"},[i("div",{staticClass:"he-servicePreview__back"}),i("div",{staticClass:"he-servicePreview__black"}),i("div",{staticClass:"he-servicePreview__services el-row--flex is-justify-space-between is-align-middle",class:e.active?"he-servicePreview__active":"",on:{click:function(t){return e.setActive(!1)}}},[i("div",{staticClass:"el-row--flex is-justify-space-between is-align-middle"},e._l(e.list.slice(0,3),(function(t){return i("div",{key:t.id,staticClass:"el-row--flex  is-align-middle"},[i("he-icon",{attrs:{type:"le-icon-shangpinfuwu",color:"red",size:"10px"}}),i("div",{staticStyle:{"margin-right":"5px"}},[e._v(e._s(t.title))])],1)})),0),i("div",{staticClass:"arrow el-icon-arrow-right"})]),e.active?e._e():i("div",{staticClass:"he-servicePreview__content"},[i("div",{staticClass:"he-servicePreview__title"},[e._v("商品服务")]),i("div",{staticClass:"he-servicePreview__close el-icon-close",on:{click:function(t){return e.setActive(!0)}}}),i("div",{staticClass:"he-scrollbar"},e._l(e.list,(function(t){return i("div",{key:t.id,staticClass:"he-item"},[i("div",{staticClass:"he-item__header el-row--flex is-align-middle"},[i("div",{staticClass:"he-item__header-icon"}),i("div",{staticClass:"he-item__header-title"},[e._v(e._s(t.title))])]),i("div",{staticClass:"he-item__body"},[e._v(" "+e._s(t.content)+" ")])])})),0)])])]),i("div",{staticClass:"le-cardpin"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.put("service")}}},[e._v("保存")])],1)])},a=[],r={name:"servicePublish",data:function(){return{rules:{title:[{required:!0,message:"请输入服务名称",trigger:"blur"}]},form:{title:"",content:"",sort:1,id:null},active:!0,list:[]}},mounted:function(){var e=this.$getQueryVariable("id");e&&this.getDetail(e)},methods:{router:function(e){this.$router.push({path:e})},setActive:function(e){this.active=e},put:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var i="",s="";t.form.id?(i="put",s="编辑服务成功"):(i="post",s="添加服务成功"),t.$heshop.service(i,t.form).then((function(){t.$message({message:s,type:"success"}),t.$router.back()})).catch((function(e){e.data[0]?t.$message.error(e.data[0].message):t.$message.error(e.data.message)}))}}))},getDetail:function(e){var t=this;this.$heshop.service("get",parseInt(e)).then((function(e){t.form=e})).catch((function(e){t.$message.error(e.data.message)}))},getList:function(){var e=this;this.loading=!0,this.$heshop.service("get").then((function(t){var i=t.data;e.list=i,e.loading=!1})).catch((function(){e.loading=!1,e.$message.error("获取失败")}))}}},l=r,c=(i("e919"),i("5d22")),o=Object(c["a"])(l,s,a,!1,null,"1f9605c1",null);t["default"]=o.exports},e919:function(e,t,i){"use strict";i("b1ca")}}]);
//# sourceMappingURL=goods-service-publish.7ca91830.js.map