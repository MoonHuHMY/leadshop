(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-interfaceSet"],{"147b":function(e,t,a){},b00a:function(e,t,a){"use strict";a("147b")},c3d4:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-matter"},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"ruleForm",attrs:{model:e.form,"label-width":"193px",rules:e.rules,"status-icon":""}},[a("div",{staticClass:"le-card"},[a("div",{staticClass:"flex align-center"},[a("span",{staticClass:"he-title-line"}),a("span",{staticClass:"he-title"},[e._v("商品采集")])]),a("div",{staticClass:"le-line"}),a("div",{staticClass:"le-line"}),a("el-form-item",{attrs:{label:"接口来源"}},[a("span",{staticClass:"le-source"},[e._v("99api")])]),a("el-form-item",{attrs:{label:"接口购买地址"}},[a("a",{staticClass:"le-a",attrs:{target:"_blank",href:"https://www.99api.com/Login?log=5&referee=14278"}},[e._v("https://www.99api.com/Login?log=5&referee=14278")]),a("div",{staticClass:"le-prompt-text"},[e._v(" 使用此链接注册99api账号，接口将自动开通 ")])]),a("el-form-item",{attrs:{label:"99api  apikey",prop:"apikey_99"}},[a("el-input",{attrs:{placeholder:"请输入99api  apikey"},model:{value:e.form.apikey_99,callback:function(t){e.$set(e.form,"apikey_99",t)},expression:"form.apikey_99"}})],1)],1)]),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存")])],1)],1)},s=[],l=(a("a717"),a("a8d6"),{data:function(){return{form:{apikey_99:""},rules:{apikey_99:[{required:!0,message:"请填写apikey",trigger:"blur"}]},loading:!0}},methods:{save:function(){var e=this;this.loading=!0;var t=this;this.$refs["ruleForm"].validate((function(a){a?t.$heshop.setting("post",{keyword:"apikey_99",content:{apikey_99:t.form.apikey_99}}).then((function(e){console.log(e),t.loading=!1,t.$message.success("保存成功")})).catch((function(e){t.loading=!1,t.$message.error(e.data.message)})):e.loading=!1}))},getDetail:function(){var e=this;this.$heshop.search("post",{include:"setting"},{keyword:"apikey_99"}).then((function(t){e.form=t.content})),e.loading=!1}},mounted:function(){this.getDetail()}}),n=l,o=(a("b00a"),a("cba8")),r=Object(o["a"])(n,i,s,!1,null,"72aadc04",null);t["default"]=r.exports}}]);