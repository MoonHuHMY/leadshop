(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbb60faa"],{"0b00":function(t,a,s){},"0b5a6":function(t,a,s){t.exports=s.p+"img/task-user-bg.76ee851f.png"},"12d8":function(t,a,s){"use strict";s("afe4")},"27a8":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"task-setting"},[s("div",{staticClass:"task-setting_left"},[s("div",{staticClass:"__phone"},[s("div",{staticClass:"__phone_window"},[t._m(0),s("taskPhone",{attrs:{task:t.task}})],1)])]),s("div",{staticClass:"task-setting_right"},[s("el-form",{ref:"dynamicValidateForm",attrs:{model:t.form}},[s("el-card",{staticClass:"__card"},[s("div",{staticClass:"__card_clearfix",attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("基础信息")])]),s("div",{staticClass:"__card_body",staticStyle:{"padding-left":"64px"}},[s("el-form-item",{attrs:{label:"优惠叠加"}},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.coupon_stacking,callback:function(a){t.$set(t.form,"coupon_stacking",a)},expression:"form.coupon_stacking"}},[t._v("优惠券")]),s("p",[t._v("勾选则表明积分商城商品可叠加优惠券使用")])],1),s("el-form-item",{attrs:{label:"积分退还"}},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.integral_return,callback:function(a){t.$set(t.form,"integral_return",a)},expression:"form.integral_return"}},[t._v("退款订单退还积分")]),s("p",[t._v("勾选则表明购买的积分商城商品退款成功后，被使用的积分退还给买家")])],1),s("el-form-item",{attrs:{label:"积分清零"}},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.integral_reset,callback:function(a){t.$set(t.form,"integral_reset",a)},expression:"form.integral_reset"}},[t._v("积分清零")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每年"}},[s("el-date-picker",{staticStyle:{width:"200px"},attrs:{"popper-class":"task-date",format:"MM-dd",type:"date",placeholder:"选择日期时间"},model:{value:t.form.change_time.start,callback:function(a){t.$set(t.form.change_time,"start",a)},expression:"form.change_time.start"}}),s("span",[t._v(" 清零当年 ")]),s("el-date-picker",{staticStyle:{width:"200px"},attrs:{"popper-class":"task-date",format:"MM-dd",type:"date",placeholder:"选择日期时间"},model:{value:t.form.change_time.end,callback:function(a){t.$set(t.form.change_time,"end",a)},expression:"form.change_time.end"}}),s("span",[t._v(" 前累积的积分 ")]),s("p",{staticStyle:{"padding-left":"40px"}},[t._v("示例：每年12月31日清零当年6月30日前累积的积分")])],1),s("el-form-item",{attrs:{label:"清零前"}},[s("el-input",{staticStyle:{width:"130px"},model:{value:t.form.reset_remind,callback:function(a){t.$set(t.form,"reset_remind",a)},expression:"form.reset_remind"}},[s("template",{slot:"append"},[t._v("天")])],2),s("span",[t._v(" 提醒用户")])],1),s("el-form-item",{attrs:{label:"定时任务"}},[s("el-input",{staticStyle:{width:"290px"},attrs:{disabled:!0},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}}),s("span",{staticStyle:{color:"#623ceb",cursor:"pointer"},on:{click:function(a){return t.copy(t.url)}}},[t._v(" 复制链接")]),s("p",{staticStyle:{"padding-left":"70px"}},[t._v(" 请将定时任务链接，配置到服务器。"),s("a",{staticStyle:{color:"#623ceb"},attrs:{target:"_blank",href:"https://www.leadshop.vip/thread/235"}},[t._v("查看配置教程")])])],1)],1)],1)]),s("el-card",{staticClass:"__card"},[s("div",{staticClass:"__card_clearfix",attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("积分任务")])]),s("div",{staticClass:"__card_body"},[s("div",{staticClass:"__card_body_item"},[s("h3",[t._v("购买任务")]),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[0].status,callback:function(a){t.$set(t.task[0],"status",a)},expression:"task[0].status"}},[t._v("购买商品")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"消费"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("消费")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[0].status},model:{value:t.task[0].total,callback:function(a){t.$set(t.task[0],"total",a)},expression:"task[0].total"}},[s("template",{slot:"append"},[t._v("元")])],2),t._v(" 获 "),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[0].status,id:"v1"},model:{value:t.task[0].acquire,callback:function(a){t.$set(t.task[0],"acquire",a)},expression:"task[0].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1),s("el-form-item",{attrs:{label:"每日最多送"}},[s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[0].status,id:"v2"},model:{value:t.task[0].maximum,callback:function(a){t.$set(t.task[0],"maximum",a)},expression:"task[0].maximum"}},[s("template",{slot:"append"},[t._v("次")])],2),s("span",[t._v("积分")])],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[1].status,callback:function(a){t.$set(t.task[1],"status",a)},expression:"task[1].status"}},[t._v("完成下单")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每下"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每下")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[1].status,id:"v3"},model:{value:t.task[1].total,callback:function(a){t.$set(t.task[1],"total",a)},expression:"task[1].total"}},[s("template",{slot:"append"},[t._v("笔")])],2),s("span",[t._v("订单,获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[1].status,id:"v4"},model:{value:t.task[1].acquire,callback:function(a){t.$set(t.task[1],"acquire",a)},expression:"task[1].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1),s("el-form-item",{attrs:{label:"每日最多送"}},[s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[1].status,id:"v5"},model:{value:t.task[1].maximum,callback:function(a){t.$set(t.task[1],"maximum",a)},expression:"task[1].maximum"}},[s("template",{slot:"append"},[t._v("次")])],2),s("span",[t._v("积分")])],1)],1)],1),s("div",{staticClass:"__card_body_item"},[s("h3",[t._v("活跃任务")]),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[2].status,callback:function(a){t.$set(t.task[2],"status",a)},expression:"task[2].status"}},[t._v("签到")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每日签到，获"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每日签到，获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[2].status,id:"v6"},model:{value:t.task[2].acquire,callback:function(a){t.$set(t.task[2],"acquire",a)},expression:"task[2].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[3].status,callback:function(a){t.$set(t.task[3],"status",a)},expression:"task[3].status"}},[t._v("连续签到")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"连续签到"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("连续签到")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[3].status,id:"v7"},model:{value:t.task[3].total,callback:function(a){t.$set(t.task[3],"total",a)},expression:"task[3].total"}},[s("template",{slot:"append"},[t._v("天")])],2),t._v(" 获 "),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[3].status,id:"v8"},model:{value:t.task[3].acquire,callback:function(a){t.$set(t.task[3],"acquire",a)},expression:"task[3].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[4].status,callback:function(a){t.$set(t.task[4],"status",a)},expression:"task[4].status"}},[t._v("分享转发")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每日分享转发"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每日分享转发")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[4].status,id:"v9"},model:{value:t.task[4].total,callback:function(a){t.$set(t.task[4],"total",a)},expression:"task[4].total"}},[s("template",{slot:"append"},[t._v("次")])],2),s("span",[t._v("及以上，获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[4].status,id:"v10"},model:{value:t.task[4].acquire,callback:function(a){t.$set(t.task[4],"acquire",a)},expression:"task[4].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[5].status,callback:function(a){t.$set(t.task[5],"status",a)},expression:"task[5].status"}},[t._v("浏览商品")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每日浏览商品"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每日浏览商品")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[5].status,id:"v11"},model:{value:t.task[5].total,callback:function(a){t.$set(t.task[5],"total",a)},expression:"task[5].total"}},[s("template",{slot:"append"},[t._v("件")])],2),s("span",[t._v("及以上，获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[5].status,id:"v12"},model:{value:t.task[5].acquire,callback:function(a){t.$set(t.task[5],"acquire",a)},expression:"task[5].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[6].status,callback:function(a){t.$set(t.task[6],"status",a)},expression:"task[6].status"}},[t._v("邀请好友")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"每邀请好友"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每邀请好友")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[6].status,id:"v13"},model:{value:t.task[6].total,callback:function(a){t.$set(t.task[6],"total",a)},expression:"task[6].total"}},[s("template",{slot:"append"},[t._v("人")])],2),t._v(" 获 "),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[6].status,id:"v14"},model:{value:t.task[6].acquire,callback:function(a){t.$set(t.task[6],"acquire",a)},expression:"task[6].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1),s("el-form-item",{attrs:{label:"每人每日最高获"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("每人每日最高获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[6].status,id:"v15"},model:{value:t.task[6].maximum,callback:function(a){t.$set(t.task[6],"maximum",a)},expression:"task[6].maximum"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1)],1),s("div",{staticClass:"__card_body_item"},[s("h3",[t._v("基础任务")]),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[7].status,callback:function(a){t.$set(t.task[7],"status",a)},expression:"task[7].status"}},[t._v("完善个人信息")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"选择信息"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("选择信息")]),s("el-checkbox-group",{attrs:{disabled:!t.task[7].status},model:{value:t.task[7].extend,callback:function(a){t.$set(t.task[7],"extend",a)},expression:"task[7].extend"}},t._l(t.bindingextend,(function(a,e){return s("el-checkbox",{key:e,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1),s("el-form-item",{attrs:{label:"完善后，获"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("完善后，获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[7].status,id:"v16"},model:{value:t.task[7].acquire,callback:function(a){t.$set(t.task[7],"acquire",a)},expression:"task[7].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1),s("el-form-item",{staticClass:"__card_body_item_status"},[s("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.task[8].status,callback:function(a){t.$set(t.task[8],"status",a)},expression:"task[8].status"}},[t._v("绑定手机号")])],1),s("div",{staticStyle:{"padding-left":"86px"}},[s("el-form-item",{attrs:{label:"绑定后，获"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("绑定后，获")]),s("el-input",{staticClass:"__card_input",attrs:{disabled:!t.task[8].status,id:"v17"},model:{value:t.task[8].acquire,callback:function(a){t.$set(t.task[8],"acquire",a)},expression:"task[8].acquire"}},[s("template",{slot:"append"},[t._v("积分")])],2)],1)],1)],1)])]),s("el-card",{staticClass:"__card"},[s("div",{staticClass:"__card_clearfix",attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("积分规则")])]),s("div",{staticClass:"__card_body"},[s("el-form-item",{attrs:{label:"积分规则",prop:"integral_rules"}},[s("div",{staticClass:"__card_body_textarea"},[s("el-input",{attrs:{type:"textarea",rows:"20"},model:{value:t.form.integral_rules,callback:function(a){t.$set(t.form,"integral_rules",a)},expression:"form.integral_rules"}})],1)])],1)]),s("div",{staticClass:"task-card-footer"},[s("el-button",[t._v("取消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("保存")])],1)],1)],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("img",{staticClass:"header-bg",attrs:{src:s("2813")}}),e("h3",[t._v("我的积分")])])}],r=s("dc45"),l=(s("b1fa"),s("c5ce"),s("2769"),s("1130"),s("0756"),s("e757"),s("e186"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"task-uni"},[t._m(0),s("div",{staticClass:"task-main"},[t.signin&&t.signin.status?s("div",{staticClass:"task-panel"},[s("div",{staticClass:"task-panel__title"},[t._v(" "+t._s(t.sprintf(t.signin.remark,t.signin.acquire))+" "),t.sustain&&t.sustain.status?s("span",[t._v(" , "+t._s(t.sprintf(t.sustain.remark,t.sustain.total,t.sustain.maximum))+" ")]):t._e()]),t.sustain&&t.sustain.status?s("div",{staticClass:"task-panel__title"},[t._v("已连续签到1天")]):t._e(),s("div",{staticClass:"task-panel__lists"},[t._m(1),t._m(2),t._m(3),s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral.png"}}),s("span",{staticClass:"__tips"},[t._v(" "+t._s(t.signin.acquire))])]),s("div",{staticClass:"__date"},[t._v("1.4")])]),s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral.png"}}),s("span",{staticClass:"__tips"},[t._v(" "+t._s(t.signin.acquire))])]),s("div",{staticClass:"__date"},[t._v("1.5")])]),s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral.png"}}),s("span",{staticClass:"__tips"},[t._v(" "+t._s(t.signin.acquire))])]),s("div",{staticClass:"__date"},[t._v("1.6")])]),s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral.png"}}),s("span",{staticClass:"__tips"},[t._v(" "+t._s(t.signin.acquire))])]),s("div",{staticClass:"__date"},[t._v("1.7")])])]),s("div",{staticClass:"task-panel__button"},[t._v("签到领积分")])]):t._e(),t.noTask?s("div",{staticClass:"task-body"},t._l(t.taskList,(function(a,e){return a.display?s("div",{key:e,staticClass:"task-card"},[s("div",{staticClass:"task-card__header"},[t._v(t._s(a.title))]),s("div",{staticClass:"task-card__lists"},[t._l(a.data,(function(a,e){return[a.status?s("div",{staticClass:"__item"},[s("img",{staticClass:"__icon",attrs:{src:a.icon}}),s("div",{staticClass:"__info"},[s("div",{staticClass:"__title"},[t._v(t._s(a.name))]),2==a.type?s("div",{staticClass:"__tips"},[t._v(t._s(t.sprintf(a.remark,a.acquire)))]):s("div",{staticClass:"__tips"},[t._v(t._s(t.sprintf(a.remark,a.total,a.acquire)))]),s("div",{staticClass:"__btn"},[t._v("去完成")])])]):t._e()]}))],2)]):t._e()})),0):t._e(),t.noTask?t._e():s("div",{staticClass:"he-no-content-yet card"},[s("img",{staticClass:"he-empty__image",attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task-score-empty.png"}}),s("div",[t._v("暂无相关积分任务")])])])])}),n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"task-background"},[e("img",{attrs:{src:s("0b5a6")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg active"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral_s.png"}}),s("span",{staticClass:"__tips"},[t._v("已签")])]),s("div",{staticClass:"__date"},[t._v("1.1")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral_w.png"}}),s("span",{staticClass:"__tips"},[t._v("漏签")])]),s("div",{staticClass:"__date"},[t._v("1.2")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"task-panel__item"},[s("div",{staticClass:"__bg active"},[s("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task_integral_s.png"}}),s("span",{staticClass:"__tips"},[t._v("已签")])]),s("div",{staticClass:"__date"},[t._v("1.3")])])}],o={components:{},props:{task:{type:[Array]}},data:function(){return{noTask:!0,signin:{},sustain:{},taskList:{}}},computed:{},created:function(){},watch:{task:{deep:!0,handler:function(t,a){this.handleUpdate()}}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.handleUpdate();case 1:case"end":return a.stop()}}),a)})))()},methods:{handleUpdate:function(){var t=this.task,a={buy:{title:"购买任务",data:[]},active:{title:"活跃任务",data:[]},base:{title:"基础任务",data:[]}},s={};for(var e in t){var i=t[e];"signin"==i.keyword&&(this.signin=i),"sustain"==i.keyword&&(this.sustain=i),s[i.keyword]=i}a={buy:{title:"购买任务",display:s["goods"].status||s["order"].status,data:[s["goods"],s["order"]]},active:{title:"活跃任务",display:s["share"].status||s["browse"].status||s["invite"].status,data:[s["share"],s["browse"],s["invite"]]},base:{title:"基础任务",display:s["perfect"].status||s["binding"].status,data:[s["perfect"],s["binding"]]}},this.noTask=a["buy"].display||a["active"].display||a["base"].display||this.signin.status,console.log("  this.noTask",this.noTask),this.taskList=a},sprintf:function(){var t,a,s=arguments,e=s[0]||"";for(t=1,a=s.length;t<a;t++)e=e.replace(/%s/,s[t]);return e}}},c=o,u=(s("d45e"),s("5d22")),d=Object(u["a"])(c,l,n,!1,null,"209afbcf",null),m=d.exports,_={components:{taskPhone:m},data:function(){return{is_verify:!0,url:"",bindingextend:[{value:"avatar",label:"头像"},{value:"realname",label:"姓名"},{value:"gender",label:"性别"},{value:"birthday",label:"生日"},{value:"area",label:"地区"},{value:"wechat",label:"微信号"}],task:[{name:"购买商品",type:1,keyword:"goods",total:3,acquire:6,maximum:30,status:0,url:"plugins/task/mall",extend:[],prompt:"",remark:"消费%s元，获得%s积分"},{name:"完成下单",type:1,keyword:"order",total:3,acquire:6,maximum:30,status:0,url:"",extend:[],prompt:"",remark:"每下%s笔订单，获得%s积分"},{name:"每日签到",type:1,keyword:"signin",total:1,acquire:10,maximum:10,status:0,url:"plugins/task/index",extend:[],prompt:"",remark:"每日签到，获得%s积分"},{name:"连续签到",type:1,keyword:"sustain",total:7,acquire:100,maximum:100,status:0,url:"plugins/task/index",extend:[],prompt:"",remark:"连续签到%s天，获得额外%s积分"},{name:"分享转发",type:1,keyword:"share",total:3,acquire:6,maximum:6,status:0,url:"pages/index/index",extend:[],prompt:"在分享转发%s次，即可获得积分",remark:"每日分享转发%s次及以上，获得%s积分"},{name:"浏览商品",type:1,keyword:"browse",total:3,acquire:6,maximum:6,status:0,url:"pages/goods/list",extend:[],prompt:"在浏览%s件商品，即可获得积分",remark:"每日浏览商品%s件及以上，获得%s积分"},{name:"邀请好友",type:1,keyword:"invite",total:3,acquire:6,maximum:30,status:0,url:"pages/index/index",extend:[],prompt:"在邀请%s人，即可获得积分",remark:"每邀请好友%s人，获得%s积分"},{name:"完善信息",type:2,keyword:"perfect",total:1,acquire:20,maximum:20,status:0,url:"pages/user/index",extend:[],prompt:"",remark:"完善个人信息，获得%s积分"},{name:"绑定手机",type:2,keyword:"binding",total:1,acquire:20,maximum:20,status:0,url:"pages/user/index",extend:["phone"],prompt:"",remark:"绑定手机号，获得%s积分"}],form:{coupon_stacking:!1,integral_return:!1,integral_reset:!1,change_time:{start:"",end:""},reset_remind:15,integral_rules:"积分商品暂时只支持兑换商城商品 \n积分任务 \n1. 购买商品：消费X元，获X积分消费的金额，即订单的实付款，其中也包括运费金额；购买的商品申请退款成功，不扣减积分；  \n2. 完成下单：下单指对订单付款，每下X笔订单，获X积分付款的订单，申请退款成功，不扣减积分；  \n3. 分享转发：生成分享海报/发送给好友/分享到朋友圈均为分享转发操作  \n4. 浏览商品：打开商品详情页同一件商品浏览多次，统计为1次； \n5. 邀请好友：好友通过分享的海报、链接、微信卡片、朋友圈进入到商城；  \n6. 完善个人信息：填写完要求的所有信息已完善过信息；  \n7. 绑定手机号：绑定手机号不支持解绑，只支持换手机号绑定； \n8. 签到：签到打卡"}}},computed:{},created:function(){},watch:{},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.handleLoaddata();case 1:case"end":return a.stop()}}),a)})))()},methods:{blurVerify:function(t){var a=window.event;t(a)},isInteger:function(t){return t%1===0},messageerror:function(t){this.is_verify=!1,this.$message.error(t)},handleLoaddata:function(){var t=this;this.$heshop.plugin("get",{include:"task",model:"base"}).then((function(a){if(t.form=a.form,t.url=a.url,t.form){var s={start:t.form.change_time.start?new Date(t.form.change_time.start):new Date,end:t.form.change_time.end?new Date(t.form.change_time.end):new Date};t.form.change_time=s}a.task.length&&(t.task=a.task)})).catch((function(a){t.messageerror("加载配置信息失败，请检查网络")}))},handleSubmit:function(){var t=this;if(this.form.reset_remind<=0)this.messageerror("清零前提醒必须大于0天");else if(this.isInteger(this.form.reset_remind)){var a=!0;for(var s in this.task){var e=this.task[s];if(e.status){if(e.total<0)return this.messageerror("不能设置为负数"),void(a=!1);if(e.acquire<0)return this.messageerror("不能设置为负数"),void(a=!1);if(e.maximum<0)return this.messageerror("不能设置为负数"),void(a=!1);if(s<1){if(""==e.total||null==e.total)return this.messageerror("消费金额不能为空"),void(a=!1);if(!this.isfloat(e.total))return this.messageerror("消费金额格式不正确"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("积分必须为整数"),void(a=!1);if(!this.isInteger(e.maximum))return this.messageerror("次数必须为整数"),void(a=!1);if(e.maximum>999999999999999)return this.messageerror("每日最多送积分值操作最大长度"),void(a=!1)}if(1==s){if(console.log("item",e.total),""==e.total||null==e.total)return this.messageerror("消费金额不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("下单数量必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("积分必须为整数"),void(a=!1);if(!this.isInteger(e.maximum))return this.messageerror("次数必须为整数"),void(a=!1);if(e.maximum>999999999999999)return this.messageerror("每日最多送积分值操作最大长度"),void(a=!1)}if(2==s){if(""==e.total||null==e.total)return this.messageerror("消费金额不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("下单数量必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("积分不能为空"),void(a=!1)}if(3==s){if(""==e.total||null==e.total)return this.messageerror("连续签到天数不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("连续签到天数必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("连续签到获得积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("连续签到获得积分必须为整数"),void(a=!1)}if(4==s){if(""==e.total||null==e.total)return this.messageerror("分享转发次数不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("分享转发次数必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("分享转发获得积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("分享转发获得积分必须为整数"),void(a=!1)}if(5==s){if(""==e.total||null==e.total)return this.messageerror("浏览商品次数不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("浏览商品次数必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("浏览商品获得积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("浏览商品获得积分必须为整数"),void(a=!1)}if(5==s){if(""==e.total||null==e.total)return this.messageerror("浏览商品次数不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("浏览商品次数必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("浏览商品获得积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("浏览商品获得积分必须为整数"),void(a=!1)}if(6==s){if(""==e.total||null==e.total)return this.messageerror("邀请好友人数不能为空"),void(a=!1);if(!this.isInteger(e.total))return this.messageerror("邀请好友人数必须为整数"),void(a=!1);if(""==e.acquire|null==e.acquire)return this.messageerror("邀请好友获积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("邀请好友获积分必须为整数"),void(a=!1);if(""==e.maximum||null==e.maximum)return this.messageerror("邀请好友获最高或积分不能为空"),void(a=!1);if(!this.isInteger(e.maximum))return this.messageerror("邀请好友获最高或积分必须为整数"),void(a=!1);if(e.acquire>e.maximum)return this.messageerror("邀请好友每日的积分限制数，必须大于单次获取的积分数"),void(a=!1);if(e.maximum<1)return this.messageerror("每日最多送积分不能为0"),void(a=!1);if(e.maximum>999999999999999)return this.messageerror("每日最多送积分值操作最大长度"),void(a=!1)}if(7==s){if(""==e.acquire|null==e.acquire)return this.messageerror("完善个人信息获积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("完善个人信息获积分必须为整数"),void(a=!1)}if(8==s){if(""==e.acquire|null==e.acquire)return this.messageerror("绑定手机获积分不能为空"),void(a=!1);if(!this.isInteger(e.acquire))return this.messageerror("绑定手机获积分必须为整数"),void(a=!1)}}}if(0==a)return!1;if(this.form&&this.form.integral_reset){var i={start:this.dateFormat("YYYY-mm-dd HH:MM",this.form.change_time.start),end:this.dateFormat("YYYY-mm-dd HH:MM",this.form.change_time.end)};this.form.change_time=i}this.$heshop.plugin("post",{include:"task",model:"base"},{form:this.form,task:this.task}).then((function(a){localStorage.removeItem("ndfWxbOhLIIHVZeR"),t.$message({message:"保存成功",type:"success"}),t.handleLoaddata()})).catch((function(a){t.messageerror("保存失败，请检查网络")}))}else this.messageerror("清零前提醒必须为整数")},dateFormat:function(t,a){if(!a)return"";try{var s,e={"Y+":a.getFullYear().toString(),"m+":(a.getMonth()+1).toString(),"d+":a.getDate().toString(),"H+":a.getHours().toString(),"M+":a.getMinutes().toString(),"S+":a.getSeconds().toString()};for(var i in e)s=new RegExp("("+i+")").exec(t),s&&(t=t.replace(s[1],1==s[1].length?e[i]:e[i].padStart(s[1].length,"0")));return t}catch(r){return this.messageerror("时间格式错误"),""}},copy:function(t){var a=document.createElement("div");a.innerText=t,a.style.position="absolute",a.style.top="0px",a.style.right="-9999px",document.body.appendChild(a);var s=document.createRange();s.selectNode(a),window.getSelection().removeAllRanges(),window.getSelection().addRange(s);var e=document.execCommand("copy");a.parentNode.removeChild(a);try{var i=e?"successful":"failed";console.log("Copy command was : "+i)}catch(r){console.log("Oops , unable to copy!")}this.$message.success("复制成功")},isfloat:function(t){if(!t)return!1;var a=/^\d+(\.\d+)?$/;if(!a.test(t))return!1;try{if(parseFloat(t)!=t)return!1}catch(s){return!1}return!0}}},p=_,v=(s("12d8"),Object(u["a"])(p,e,i,!1,null,"3cf51da4",null));a["default"]=v.exports},2813:function(t,a,s){t.exports=s.p+"img/icon-phone-header.6803d30e.png"},afe4:function(t,a,s){},d45e:function(t,a,s){"use strict";s("0b00")}}]);
//# sourceMappingURL=chunk-dbb60faa.99caf995.js.map