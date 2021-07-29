(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setup-smsRemind"],{"0d60":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],staticClass:"le-matter",attrs:{"label-width":"160px",model:e.form,"label-suffix":"10"},nativeOn:{submit:function(e){e.preventDefault()}}},[l("div",{staticClass:"le-card le-switch"},[l("el-form-item",{attrs:{"label-width":"80px"}},[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("短信通知")]),l("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),l("div",{staticClass:"le-card"},[l("div",{staticClass:"le-card-header flex align-center"},[l("span"),l("span",[e._v("基本设置")])]),l("div",{staticClass:"le-card-body"},[l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("短信平台")]),e._v(" 阿里云 ")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("access_key_id")]),l("el-input",{attrs:{placeholder:"请输入access_key_id"},model:{value:e.form.access_key_id,callback:function(t){e.$set(e.form,"access_key_id",t)},expression:"form.access_key_id"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("access_key_secret")]),l("el-input",{attrs:{placeholder:"请输入access_key_secret"},model:{value:e.form.access_key_secret,callback:function(t){e.$set(e.form,"access_key_secret",t)},expression:"form.access_key_secret"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板签名")]),l("el-input",{attrs:{placeholder:"请输入模板签名",maxlength:"10","show-word-limit":""},model:{value:e.form.template_name,callback:function(t){e.$set(e.form,"template_name",t)},expression:"form.template_name"}})],1)],1)]),l("div",{staticClass:"le-card"},[l("div",{staticClass:"le-card-header flex align-center"},[l("span"),l("span",[e._v("提醒商家")])]),l("div",{staticClass:"le-card-body"},[l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("接收手机号")]),l("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),l("div",{staticClass:"le-form-item__tips"},[e._v("多个手机号请用英文逗号隔开")])],1),l("div",{staticClass:"le-card-title"},[e._v("买家申请售后提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_refund.template_id,callback:function(t){e.$set(e.form.order_refund,"template_id",t)},expression:"form.order_refund.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_refund},on:{click:function(t){return e.testSend("order_refund")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：有买家申请售后，请登录商城后台查看。")])],1),l("div",{staticClass:"le-card-title"},[e._v("买家支付订单提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_pay_business.template_id,callback:function(t){e.$set(e.form.order_pay_business,"template_id",t)},expression:"form.order_pay_business.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_pay_business},on:{click:function(t){return e.testSend("order_pay_business")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：商城来新订单了，订单号尾号${code}，请登录商城后台查看。")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量"},model:{value:e.form.order_pay_business.code,callback:function(t){e.$set(e.form.order_pay_business,"code",t)},expression:"form.order_pay_business.code"}})],1)],1)]),l("div",{staticClass:"le-card le-card__last"},[l("div",{staticClass:"le-card-header flex align-center"},[l("span"),l("span",[e._v("提醒买家")])]),l("div",{staticClass:"le-card-body"},[l("div",{staticClass:"le-card-title"},[e._v("绑定手机号")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.captcha.template_id,callback:function(t){e.$set(e.form.captcha,"template_id",t)},expression:"form.captcha.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.captcha},on:{click:function(t){return e.testSend("captcha")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您的验证码${code}，该验证码5分钟内有效，请勿泄漏于他人！")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${code}"},model:{value:e.form.captcha.code,callback:function(t){e.$set(e.form.captcha,"code",t)},expression:"form.captcha.code"}})],1),l("div",{staticClass:"le-card-title"},[e._v("付款成功提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_pay.template_id,callback:function(t){e.$set(e.form.order_pay,"template_id",t)},expression:"form.order_pay.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_pay},on:{click:function(t){return e.testSend("order_pay")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：亲爱的会员，您在${name}的订单提交成功。我们会尽快发货，记得关注我们的商城喔～感谢您的支持！")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.order_pay.name,callback:function(t){e.$set(e.form.order_pay,"name",t)},expression:"form.order_pay.name"}})],1),l("div",{staticClass:"le-card-title"},[e._v("订单发货提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_send.template_id,callback:function(t){e.$set(e.form.order_send,"template_id",t)},expression:"form.order_send.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_send},on:{click:function(t){return e.testSend("order_send")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：亲爱的用户，您的尾号为${name}的订单已经发出，请注意查收。")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.order_send.code,callback:function(t){e.$set(e.form.order_send,"code",t)},expression:"form.order_send.code"}})],1),l("div",{staticClass:"le-card-title"},[e._v("商家审核售后提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_verify.template_id,callback:function(t){e.$set(e.form.order_verify,"template_id",t)},expression:"form.order_verify.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_verify},on:{click:function(t){return e.testSend("order_verify")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您申请的售后请求已被${name}，请前往查看。")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.order_verify.status,callback:function(t){e.$set(e.form.order_verify,"status",t)},expression:"form.order_verify.status"}})],1),l("div",{staticClass:"le-card-title"},[e._v("退款成功提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.order_refund_success.template_id,callback:function(t){e.$set(e.form.order_refund_success,"template_id",t)},expression:"form.order_refund_success.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.order_refund_success},on:{click:function(t){return e.testSend("order_refund_success")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您的尾号为${name}的订单，商家已退款")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.order_refund_success.code,callback:function(t){e.$set(e.form.order_refund_success,"code",t)},expression:"form.order_refund_success.code"}})],1),[l("div",{staticClass:"le-card-title"},[e._v("积分变动提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.score_changes.template_id,callback:function(t){e.$set(e.form.score_changes,"template_id",t)},expression:"form.score_changes.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.score_changes},on:{click:function(t){return e.testSend("score_changes")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您的积分${name1}了${name2}，剩余${name3}")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name1}"},model:{value:e.form.score_changes.name1,callback:function(t){e.$set(e.form.score_changes,"name1",t)},expression:"form.score_changes.name1"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name2}"},model:{value:e.form.score_changes.name2,callback:function(t){e.$set(e.form.score_changes,"name2",t)},expression:"form.score_changes.name2"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name3}"},model:{value:e.form.score_changes.name3,callback:function(t){e.$set(e.form.score_changes,"name3",t)},expression:"form.score_changes.name3"}})],1)],[l("div",{staticClass:"le-card-title"},[e._v("积分到期提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.score_due.template_id,callback:function(t){e.$set(e.form.score_due,"template_id",t)},expression:"form.score_due.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.score_due},on:{click:function(t){return e.testSend("score_due")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您在X年X月X日前获得的${code}积分即将到期，请及时使用")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${date}"},model:{value:e.form.score_due.date,callback:function(t){e.$set(e.form.score_due,"date",t)},expression:"form.score_due.date"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${code}"},model:{value:e.form.score_due.code,callback:function(t){e.$set(e.form.score_due,"code",t)},expression:"form.score_due.code"}})],1)],l("div",{staticClass:"le-card-title"},[e._v("分销商审核结果提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.promoter_verify.template_id,callback:function(t){e.$set(e.form.promoter_verify,"template_id",t)},expression:"form.promoter_verify.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.promoter_verify},on:{click:function(t){return e.testSend("promoter_verify")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您好，您申请的分销商身份审核${results}")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${results}"},model:{value:e.form.promoter_verify.result,callback:function(t){e.$set(e.form.promoter_verify,"result",t)},expression:"form.promoter_verify.result"}})],1),l("div",{staticClass:"le-card-title"},[e._v("提现申请审核结果提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.promoter_withdrawal.template_id,callback:function(t){e.$set(e.form.promoter_withdrawal,"template_id",t)},expression:"form.promoter_withdrawal.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.promoter_withdrawal},on:{click:function(t){return e.testSend("promoter_withdrawal")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您好，您申请的提现审核结果为${results}")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${results}"},model:{value:e.form.promoter_withdrawal.result,callback:function(t){e.$set(e.form.promoter_withdrawal,"result",t)},expression:"form.promoter_withdrawal.result"}})],1),l("div",{staticClass:"le-card-title"},[e._v("等级变化提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.level_change.template_id,callback:function(t){e.$set(e.form.level_change,"template_id",t)},expression:"form.level_change.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.level_change},on:{click:function(t){return e.testSend("level_change")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您好，您的分销等级${results}为${name}")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${status}"},model:{value:e.form.level_change.status,callback:function(t){e.$set(e.form.level_change,"status",t)},expression:"form.level_change.status"}})],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.level_change.name,callback:function(t){e.$set(e.form.level_change,"name",t)},expression:"form.level_change.name"}})],1),l("div",{staticClass:"le-card-title"},[e._v("分销商身份被清退提醒")]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板ID")]),l("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:e.form.clear_identity.template_id,callback:function(t){e.$set(e.form.clear_identity,"template_id",t)},expression:"form.clear_identity.template_id"}}),l("el-button",{staticClass:"le-test-btn",attrs:{loading:e.clear_identity},on:{click:function(t){return e.testSend("clear_identity")}}},[e._v("测试发送")]),l("div",{staticClass:"le-form-item__tips"},[e._v("示例：您好，您的${name}身份已被清退")])],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("模板变量")]),l("el-input",{attrs:{placeholder:"请输入模板变量${name}"},model:{value:e.form.clear_identity.name,callback:function(t){e.$set(e.form.clear_identity,"name",t)},expression:"form.clear_identity.name"}})],1)],2)]),l("div",{staticClass:"le-cardpin"},[l("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.submit}},[e._v("保存")])],1)])},s=[],r=l("7e2d"),o=(l("2621"),l("2769"),l("8639"),{name:"smsRemind",data:function(){return{loading:!1,form:{platform:"aliyun",mobile_list:[],access_key_id:"",access_key_secret:"",template_name:"",order_refund:{template_id:""},order_refund_success:{template_id:"",name:""},order_pay:{template_id:"",name:""},order_send:{template_id:"",code:""},order_verify:{template_id:"",status:""},captcha:{template_id:"",code:""},order_pay_business:{template_id:"",code:""},score_changes:{template_id:"",name1:"",name2:"",name3:""},score_due:{template_id:"",code:"",date:""},promoter_verify:{template_id:"",result:""},promoter_withdrawal:{template_id:"",result:""},level_change:{template_id:"",status:"",name:""},clear_identity:{template_id:"",name:""}},order_refund:!1,order_pay_business:!1,captcha:!1,order_pay:!1,order_send:!1,order_verify:!1,order_refund_success:!1,score_changes:!1,score_due:!1,promoter_verify:!1,promoter_withdrawal:!1,level_change:!1,clear_identity:!1}},computed:{mobile:{get:function(){return this.form.mobile_list.join()},set:function(e){this.form.mobile_list=e.split(",")}}},methods:{submit:function(){this.loading=!0;var e=this;this.$heshop.sms("post",this.form).then((function(){e.loading=!1,e.$message.success("保存成功")})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},obtain:function(){this.loading=!0;var e=this;this.$heshop.sms("get").then((function(t){e.form=Object.assign(e.form,Object(r["a"])({},t.detail)),e.loading=!1})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},testSend:function(e){this[e]=!0;var t=this;this.$heshop.sms("post",{behavior:"test_sms"},{type:e,mobile:this.form.mobile_list}).then((function(l){l?t.$message.success("发送成功"):t.$message.error("发送失败, "),t[e]=!1})).catch((function(l){console.log(l),t[e]=!1,403===l.status&&t.$message.error(l.data.message)}))}},mounted:function(){this.obtain()}}),i=o,c=(l("cb02"),l("5d22")),n=Object(c["a"])(i,a,s,!1,null,"6fbf039e",null);t["default"]=n.exports},"9fae":function(e,t,l){},cb02:function(e,t,l){"use strict";l("9fae")}}]);
//# sourceMappingURL=setup-smsRemind.143d3996.js.map