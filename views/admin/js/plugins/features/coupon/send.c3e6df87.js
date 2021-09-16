(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins/features/coupon/send"],{"2ce7":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"le-matter"},[l("el-breadcrumb",{staticClass:"he-link-text",attrs:{"separator-class":"el-icon-arrow-right"}},[l("el-breadcrumb-item",[l("he-link",{attrs:{href:"plugins/features"}},[e._v("营销玩法")])],1),l("el-breadcrumb-item",{staticClass:"he-link"},[l("he-link",{attrs:{href:"features/coupon/index"}},[e._v("优惠券管理")])],1),l("el-breadcrumb-item",[e._v(" 发放优惠券")])],1),l("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",staticClass:"le-send",attrs:{"label-width":"193px",rules:e.rules,model:e.form}},[l("div",{staticClass:"le-card"},[l("div",{staticClass:"le-card-header flex align-center"},[l("span"),l("span",[e._v("基本信息")])]),l("div",{staticClass:"le-card-body"},[l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("优惠券名称")]),l("span",{staticClass:"le-form-item__text"},[e._v(e._s(e.detail.name))])]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("剩余发放总量")]),l("span",{staticClass:"le-form-item__text"},[e._v(e._s(e.detail.over_num)+"张")])]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("用券时间")]),1===e.detail.expire_type?l("span",{staticClass:"le-form-item__text"},[e._v("领券当日起"+e._s(e.detail.expire_day)+"天可用")]):2===e.detail.expire_type?l("span",{staticClass:"le-form-item__text"},[e._v(e._s(e._f("timeFormat")(e.detail.begin_time,"yyyy-mm-dd hh:MM:ss"))+"~"+e._s(e._f("timeFormat")(e.detail.end_time,"yyyy-mm-dd hh:MM:ss")))]):e._e()]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("门槛金额")]),l("span",{staticClass:"le-form-item__text"},[e._v(e._s(0===e.detail.min_price||null===e.detail.min_price?"无门槛":e.detail.min_price+"元"))])]),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("优惠金额")]),l("span",{staticClass:"le-form-item__text"},[e._v(e._s(e.detail.sub_price)+"元")])])],1)]),l("div",{staticClass:"le-card"},[l("div",{staticClass:"le-card-header flex align-center"},[l("span"),l("span",[e._v("发放优惠券")])]),l("div",{staticClass:"le-card-body"},[l("el-form-item",{attrs:{prop:"coupon_list[0].num"}},[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("每人发放")]),l("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:6},nativeOn:{input:function(t){return e.formatNum.apply(null,arguments)}},model:{value:e.form.coupon_list[0].num,callback:function(t){e.$set(e.form.coupon_list[0],"num",e._n(t))},expression:"form.coupon_list[0].num"}},[l("template",{slot:"append"},[e._v("张")])],2)],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("指定用户发放")]),l("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseUser",value:{item:e.form.user_list},expression:"{ item: form.user_list }",modifiers:{chooseUser:!0}}],staticClass:"le-btn",attrs:{width:"577",title:"选择用户",module:"users",action:"chooseUser"}},[e._v("选择用户 ")]),e.form.user_list.length?l("el-table",{staticClass:"le-users-table",attrs:{data:e.form.user_list,"max-height":"368px","row-class-name":"le-table-row"}},[l("el-table-column",{attrs:{label:"用户ID",width:"120",prop:"id"}}),l("el-table-column",{attrs:{label:"用户昵称",prop:"nickname"},scopedSlots:e._u([{key:"default",fn:function(t){return["weapp"===t.row.oauth.type?l("he-icon",{attrs:{size:"18px",type:"le-icon-xiaochengxu"}}):"wechat"===t.row.oauth.type?l("he-icon",{attrs:{size:"18px",type:"le-icon-wehcat"}}):e._e(),e._v(" "+e._s(t.row.nickname)+" ")]}}],null,!1,685763140)}),l("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticClass:"le-button-text",on:{click:function(l){return e.form.user_list.splice(t.$index,1)}}},[e._v("移除")])]}}],null,!1,3081881386)})],1):e._e()],1),l("el-form-item",[l("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("指定用户标签发放")]),l("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseLabel",value:{label:e.form.label_list},expression:"{ label: form.label_list }",modifiers:{chooseLabel:!0}}],staticClass:"le-btn",attrs:{action:"setLabel",module:"users",title:"选择用户标签",width:"704"}},[e._v("选择用户标签 ")]),l("div",{staticClass:"le-user-label flex flex-wrap"},e._l(e.form.label_list,(function(t,s){return l("div",{key:s,staticClass:"le-tag"},[l("span",[e._v(e._s(t.name))]),l("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(l){return l.stopPropagation(),e.delLabel(t,s)}}})])})),0)],1)],1)])]),e.disable?e._e():l("div",{staticClass:"le-cardpin"},[l("el-button",{attrs:{type:"primary",disabled:e.loading,loading:e.loading},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1)},a=[],i=(l("2769"),l("0756"),l("eb62"),l("8639"),{name:"send",data:function(){return{loading:!0,disable:!1,form:{num:1,user_list:[],label_list:[],coupon_list:[{num:1,id:parseInt(this.$route.query.id)}]},detail:{name:"优惠券名称",over_num:1,begin_time:null,give_limit:null,sub_price:0},rules:{"coupon_list[0].num":[{required:!0,message:"请输入每人发放张数",trigger:"blur"}]}}},methods:{router:function(e){this.$router.replace({path:e})},chooseUser:function(e){this.form.user_list=e.item},setLabel:function(e){this.form.label_list=e.label},delLabel:function(e,t){this.$delete(this.form.label_list,t)},submit:function(){var e=this,t=this;t.loading=!0,t.$refs["form"].validate((function(l){if(l){var s=JSON.parse(JSON.stringify(t.form));s.label_list=s.label_list.map((function(e){return e.id})),s.user_list=s.user_list.map((function(e){return e.id})),t.$heshop.coupon("post",{behavior:"send"},s).then((function(e){setTimeout((function(){t.detail.over_num=t.detail.over_num-e[0].length,t.$message.success("发放成功"),t.loading=!1}),3e3)})).catch((function(e){if(t.loading=!1,403===e.status){var l=t.$createElement,s=e.data.message.split("---------"),a="";a=s.length>1?s[1]:s[0],t.$confirm("提示",{confirmButtonText:"我知道了",showCancelButton:!1,message:l("div",null,[l("p",{class:"le-text-algin le-confirm-line"},[l("span",{class:"el-icon-warning le-warning-icon"}),l("span",{class:"le-confirm-title"},"发放失败")]),l("p",{class:"le-text-algin le-confirm-tip"},a)])})}else t.$message.error(e.data.message)}))}else e.loading=!1}))},getDetail:function(){var e=this;this.$heshop.coupon("get",parseInt(this.$route.query.id)).then((function(t){e.loading=!1,0===t.status?(e.disable=!0,e.$message.error("优惠券已下架")):2===t.status&&(e.disable=!0,e.$message.error("优惠券已失效")),e.detail=t})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},formatNum:function(e){e.target.value=e.target.value.replace(/[^\d.]/g,""),e.target.value=e.target.value.replace(/^0[^\.]+/g,"0")}},mounted:function(){this.getDetail()}}),n=i,r=(l("9e33"),l("4ac2")),o=Object(r["a"])(n,s,a,!1,null,"7c42aa86",null);t["default"]=o.exports},9854:function(e,t,l){},"9e33":function(e,t,l){"use strict";l("9854")}}]);