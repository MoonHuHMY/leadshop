(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-parameterTemplateEdit"],{"644c":function(e,t,a){},"70ad":function(e,t,a){"use strict";a.r(t);var r,l,i=a("4c02"),n=a.n(i),s=(a("2bd2"),a("efd4"),{name:"parameterTemplateEdit",data:function(){return{form:{title:"",content:[{name:"",value:""}]},rules:{title:[{required:!0,message:"参数模板名称不能为空"}],content:[{required:!0,validator:function(e,t,a){for(var r=0;r<t.length;r++)t[r].value&&t[r].name||a("参数内容不能为空");a()}}]},loading:!1,disabled:!1}},methods:{pushParameter:function(){this.form.content.push({name:"",value:""})},deletionParameter:function(e){this.form.content.length<=1||this.$delete(this.form.content,e)},submit:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.loading=!0;var a=void 0;a=e.form.id?"put":"post";var r=e.$heshop.utils.deepClone(e.form);e.$heshop.goodsargs(a,r).then((function(t){e.$message.success("保存成功"),e.loading=!1,e.$router.push({path:"/goods/parameterTemplate"})})).catch((function(t){t.data[0]?e.$message.error(t.data[0].message):e.$message.error(t.data.message)}))}))},getDetail:function(e){var t=this;this.$heshop.goodsargs("get",parseInt(e)).then((function(e){t.form=e,t.disabled=!1})).catch((function(e){t.$message.error(e.data.message)}))}},mounted:function(){this.$route.query.id&&(this.disabled=!0,this.getDetail(this.$route.query.id))},render:function(){var e=this,t=arguments[0],a=this;return t("div",{class:"le-main"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[t("a",{attrs:{href:"javascript:history.back()"}},["参数模板"])]),t("el-breadcrumb-item",["新增参数模板"])]),t("el-form",n()([{},{props:{model:a.form,rules:a.rules}},{class:"le-card",ref:"form",attrs:{"label-width":"164px"},directives:[{name:"loading",value:a.loading}]}]),[t("el-form-item",{attrs:{label:"参数模板名称",prop:"title"}},[t("el-input",{attrs:{maxlength:"10","show-word-limit":!0,placeholder:"请输入参数模板名称"},class:"le-input--240",model:{value:a.form.title,callback:function(t){e.$set(a.form,"title",t)}}})]),t("el-form-item",{attrs:{label:"参数内容",prop:"content"},class:"le-content"},[a.form.content.map((function(r,l,i){return t("div",{class:"le-parameter"},[t("el-form-item",{attrs:{label:"参数名","label-width":"82px"},key:l+"_name"},[t("el-input",{attrs:{maxlength:"8","show-word-limit":!0,placeholder:"请输入参数名"},class:"le-input--240",model:{value:r.name,callback:function(t){e.$set(r,"name",t)}}}),t("div",{class:"le-prompt-text"},["示例：语言种类"])]),t("el-form-item",{attrs:{label:"参数值","label-width":"82px"},key:l+"_value"},[t("el-input",{attrs:{resize:"none",rows:"5",type:"textarea",placeholder:"请输入参数值"},class:"le-input--600",model:{value:r.value,callback:function(t){e.$set(r,"value",t)}}}),t("div",{class:"le-prompt-text"},["建议参数值之间用“；”隔开，示例：汉语；英语；法语；德语"])]),function(){if(1!==i.length)return t("div",{class:"le-deletion le-icon le-icon-cha2",on:{click:a.deletionParameter.bind(a,l)}})}()])}))]),t("el-form-item",[t("el-button",{on:{click:a.pushParameter},attrs:{plain:!0}},["添加参数"])])]),t("div",{class:"le-cardpin"},[t("el-button",{attrs:{type:"primary",disabled:a.disabled,loading:a.loading&&!a.disabled},on:{click:a.submit}},["保存"])])])}}),o=s,c=(a("b1d8"),a("cba8")),d=Object(c["a"])(o,r,l,!1,null,"0a8c0cf0",null);t["default"]=d.exports},b1d8:function(e,t,a){"use strict";a("644c")}}]);