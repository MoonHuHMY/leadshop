(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-index~promoter/promoter-index-detail"],{"0d9f":function(e,t,n){"use strict";n("bd8e")},8121:function(e,t,n){"use strict";var i,o,a=n("4c02"),r=n.n(a),l=n("46d3"),s=(n("eb62"),n("f5bd"),n("0e28")),c={name:"agree-refuse-apply",data:function(){return{note:""}},props:{value:{type:Boolean,default:!1},info:{type:[Object]},type:{type:String}},computed:{showDialog:{get:function(e){var t=e.value;return t},set:function(e){this.$emit("input",e)}},applyContent:function(e){var t=e.info;return t.apply_content||[]}},render:function(){var e=this,t=arguments[0],n=this;return t("el-dialog",r()([{class:"le-form",attrs:{visible:n.showDialog,title:"申请分销商",width:"576px"}},{on:Object(l["a"])({},"update:visible",(function(e){n.showDialog=e}))}]),[t("el-form",{attrs:{"label-width":"136px"}},[t("el-form-item",{attrs:{label:"用户"}},[t("span",{class:[n.info.type?"weapp"===n.info.type?"le-icon-xiaochengxu":"le-icon-wehcat":"weapp"===n.info.user.type?"le-icon-xiaochengxu":"le-icon-wehcat","le-icon"]}),n.info.nickname]),n.applyContent.map((function(e,n){return t("el-form-item",{attrs:{label:e.name},key:n},[t("span",{class:"apply-value"},[e.value])])})),function(){if("refuse"===n.type)return t("el-form-item",{attrs:{label:"拒绝理由"}},[t("el-input",{attrs:{type:"textarea",rows:"10",placeholder:"请输入拒绝理由",resize:"none",maxlength:"200","show-word-limit":!0},class:"le-input--280",model:{value:n.note,callback:function(t){e.$set(n,"note",t)}}})])}()]),t("div",{slot:"footer"},[t("el-button",{on:{click:function(){return n.showDialog=!1}}},["取消"]),t("el-button",{attrs:{type:"primary"},on:{click:n.submit}},["refuse"===n.type?"拒绝":"pass"===n.type?"通过审核":""])])])},methods:{submit:function(){var e=this,t="",n={},i=null;"refuse"===this.type?(t="拒绝分销商申请成功",n.note=this.note,i=3):"pass"===this.type&&(t="通过分销商申请成功",i=2),Object(s["b"])(this.info.UID,this.type,n).then((function(n){e.showDialog=!1,e.$message.success(t),e.info.status=i,2==i&&("undefined"!=typeof e.info.realname?e.info.realname=n.apply_content[0].value:"undefined"!=typeof e.info.user&&"undefined"!=typeof e.info.user.realname&&(e.info.user.realname=n.apply_content[0].value),e.info.invite_nickname=n.invite_nickname),e.info.join_time=(new Date).getTime()/1e3,e.$emit("update:info",e.info)}))}}},u=c,f=(n("0d9f"),n("4ac2")),m=Object(f["a"])(u,i,o,!1,null,"5d1d1210",null);t["a"]=m.exports},8572:function(e,t,n){"use strict";var i,o,a=n("99a5"),r=n("4c02"),l=n.n(r),s=n("46d3"),c=(n("6a61"),n("eb62"),n("3f7e"),n("b1fa"),n("c5ce"),n("0e28")),u={name:"clear-out",data:function(){return{form:{radio:0,transfer_id:""},list:[],loading:!1,showItem:null}},props:{value:{type:Boolean,default:!1},info:{type:[Object]}},computed:{showDialog:{get:function(e){var t=e.value;return t},set:function(e){this.$emit("input",e)}}},render:function(){var e=this,t=arguments[0],n=this;return t("el-dialog",l()([{attrs:{visible:n.showDialog,title:"清退分销商",width:"512px"}},{on:Object(s["a"])({},"update:visible",(function(e){n.showDialog=e}))}]),[t("div",{class:"le-hint"},["清退分销商后，此分销商与所有下线的上下级关系将被解除"]),t("el-form",{attrs:{"label-width":"129px"},class:"le-form"},[t("el-form-item",{attrs:{label:"清退后的关系处理"}},[t("el-radio-group",{model:{value:n.form.radio,callback:function(t){e.$set(n.form,"radio",t)}}},[t("div",{class:"radio-item"},[t("el-radio",{attrs:{label:0}},["自由绑定分销商"]),t("div",{class:"le-prompt-text"},["      选择后，下线用户将重新自由绑定分销商"])]),t("div",{class:"radio-item"},[t("el-radio",{attrs:{label:1}},["转移给指定分销商"]),t("div",{class:"le-prompt-text"},["      选择后，下线分销商和下线用户将转移给新的分销商"]),t("el-select",{attrs:{loading:n.loading,filterable:!0,remote:!0,placeholder:"请输入新分销商的手机号搜索",disabled:1!==n.form.radio,"remote-method":n.remoteMethod},on:{change:n.selectMobile},model:{value:n.form.select,callback:function(t){e.$set(n.form,"select",t)}}},[n.list.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.mobile,value:e}})}))])])]),function(){if(n.showItem)return t("div",{class:"show--item"},[n.showItem.show_value])}()])]),t("div",{slot:"footer"},[t("el-button",{on:{click:function(){return n.showDialog=!1}}},["取消"]),t("el-button",{attrs:{type:"primary"},on:{click:n.submit}},["确定"])])])},methods:{remoteMethod:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""===e){n.next=7;break}return t.loading=!0,n.next=4,Object(c["K"])({uid:t.info.UID,mobile:e});case 4:i=n.sent,t.list=i.filter((function(t){return t.mobile=t.mobile.toString(),t.mobile.indexOf(e)>-1})),t.loading=!1;case 7:case"end":return n.stop()}}),n)})))()},selectMobile:function(e){this.showItem=e,this.form.transfer_id=e.UID},submit:function(){var e=this;if(1===this.form.radio){if(!this.form.transfer_id)return void this.$message.error("请输入新分销商的手机号搜索")}else this.form.transfer_id=null;Object(c["b"])(this.info.UID,"repel",this.form).then((function(t){var n;e.$emit("confirm",{transferName:null===(n=e.showItem)||void 0===n?void 0:n.realname}),e.info.status=4,e.info.transfer_id=t.transfer_id,e.info.repel_time=(new Date).getTime()/1e3,e.showDialog=!1,e.$message.success("清退分销商成功")}))}}},f=u,m=(n("9723"),n("4ac2")),p=Object(m["a"])(f,i,o,!1,null,"181858c4",null);t["a"]=p.exports},9723:function(e,t,n){"use strict";n("b5cb")},b5cb:function(e,t,n){},bd8e:function(e,t,n){}}]);