(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe186db"],{"8c71":function(e,t,a){"use strict";a("ab48")},ab48:function(e,t,a){},bd6b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task-content"},[a("div",{staticClass:"__search"},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formValue,rules:e.rules,"label-width":"100px"}},[a("div",[a("el-form-item",{attrs:{label:"用户搜索"}},[a("el-input",{attrs:{placeholder:"输入用户昵称/用户ID搜索",clearable:""},on:{clear:e.onSubmit},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.formValue.search,callback:function(t){e.$set(e.formValue,"search",t)},expression:"formValue.search"}})],1),a("el-form-item",{attrs:{label:"积分收支",prop:"score_start"}},[a("el-input",{attrs:{placeholder:"积分的最低值"},model:{value:e.formValue.score_start,callback:function(t){e.$set(e.formValue,"score_start",t)},expression:"formValue.score_start"}}),a("span",{staticStyle:{display:"inline-block",width:"47px",height:"32px","line-height":"32px","text-align":"center"}},[e._v("至")]),a("el-form-item",{staticStyle:{display:"inline-block","margin-bottom":"0"},attrs:{prop:"score_end"}},[a("el-input",{attrs:{placeholder:"积分的最高值"},on:{change:e.handleChange},model:{value:e.formValue.score_end,callback:function(t){e.$set(e.formValue,"score_end",t)},expression:"formValue.score_end"}})],1)],1)],1),a("div",[a("el-form-item",{attrs:{label:"变动时间"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.formValue.date,callback:function(t){e.$set(e.formValue,"date",t)},expression:"formValue.date"}})],1)],1),a("div",{staticStyle:{"padding-left":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"0"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("筛选")]),a("el-button",{on:{click:e.onEmpty}},[e._v("清空")])],1)],1)])],1),a("div",{staticClass:"__content",staticStyle:{"padding-top":"24px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{prop:"start_time",order:"descending"}},on:{"sort-change":e.handleSortMethod}},[a("el-table-column",{attrs:{prop:"UID",label:"用户","min-width":"312"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"__content_cover"},["weapp"==t.row.oauth.type?a("i",{staticClass:"le-icon le-icon-xiaochengxu",staticStyle:{color:"#623CEB"}}):a("i",{staticClass:"le-icon le-icon-weixin2",staticStyle:{color:"#3BB430"}}),a("div",{staticClass:"__content_title"},[a("h3",{staticClass:"task_tab_tl"},[e._v(e._s(t.row.user.nickname))]),a("p",[e._v("ID:"+e._s(t.row.UID))])])])]}}])}),a("el-table-column",{attrs:{prop:"number",label:"积分收支","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return["add"==t.row.type?a("p",{staticClass:"task_tab_tl",staticStyle:{color:"#53C41A"}},[e._v("+"+e._s(t.row.number))]):a("p",{staticClass:"task_tab_tl",staticStyle:{color:"#F5212D"}},[e._v(e._s(t.row.number))])]}}])}),a("el-table-column",{attrs:{prop:"order_id",label:"订单号","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.order_sn?a("he-link",{attrs:{href:"order/orderDetail",query:{order_sn:t.row.order_sn}}},[a("p",{staticClass:"task_tab_tl",staticStyle:{color:"#623CEB","font-weight":"400"}},[e._v(e._s(t.row.order_sn||"-"))])]):a("p",{staticClass:"task_tab_tl",staticStyle:{color:"#623CEB","font-weight":"400"}},[e._v("-")])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"收支说明","min-width":"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",{staticClass:"task_tab_tl"},[e._v(e._s(t.row.remark))])]}}])}),a("el-table-column",{attrs:{prop:"start_time",label:"变动时间",sortable:"custom","min-width":"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",{staticClass:"task_tab_tl"},[e._v(e._s(e._f("dateFormat")(t.row.start_time)))])]}}])})],1),a("div",{staticClass:"__paging"},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-count":e.page.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1)])},o=[],n=a("dc45"),s=(a("e186"),a("e1d4"),a("aa00"),a("f49b"),a("caaf")),i=a.n(s),l={data:function(){var e=this,t=function(t,a,r){var o=Number(e.formValue.score_start),n=e.formValue.score_end?Number(e.formValue.score_end):"";if(o){if(o%1!==0)return void r(new Error("积分必须是整数"));if(console.log("score_end === 0",n,0===n),(n||0===n)&&o>n)return void r(new Error("最低值需小于或等于最高值"))}r()};return{page:{size:20,current:1},tableData:[],formValue:{search:"",score_start:"",score_end:"",date:[]},rules:{score_start:[{validator:t,trigger:"blur"}]}}},filters:{dateFormat:function(e){return void 0===e?"":i()(1e3*e).format("YYYY-MM-DD HH:mm:ss")},capitalize:function(e){return e.length>=32?e.slice(0,29)+"...":e}},computed:{},created:function(){},watch:{},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleLogLoad();case 1:case"end":return t.stop()}}),t)})))()},methods:{handleChange:function(){this.$refs.ruleForm.validate((function(e){console.log("执行的",e)}))},handleSortMethod:function(e){"ascending"==e.order&&(this.formValue["sort"]={"s.start_time":"ASC"}),"descending"==e.order&&(this.formValue["sort"]={"s.start_time":"DESC"}),null==e.order&&(this.formValue["sort"]={}),this.handleLogLoad()},onEmpty:function(){this.formValue={search:"",score_start:"",score_end:"",date:[]},this.$refs.ruleForm.resetFields(),this.handleLogLoad()},isInteger:function(e){return e%1===0},handleLogLoad:function(){var e=this,t=JSON.parse(JSON.stringify(this.formValue));if(this.isInteger(t.score_start))if(this.isInteger(t.score_end)){var a=this.page;this.$heshop.plugin("get",{include:"task",model:"user",keyword:JSON.stringify(t)}).page(a.current,a.size).then((function(t){if(t&&t.headers){var a=t.data,r=t.headers;e.page={current:+r["x-pagination-current-page"],count:+r["x-pagination-page-count"],size:+r["x-pagination-per-page"],total:+r["x-pagination-total-count"]},e.tableData=a}})).catch((function(t){console.log("err",t),e.$message.error("加载配置信息失败，请检查网络")}))}else this.$message.error("积分必须是整数");else this.$message.error("积分必须是整数")},onSubmit:function(){this.handleLogLoad()},sizeChange:function(e){this.page.size=e,this.handleLogLoad(),this.$emit("request",{page:this.page,sort:this.order})},currentChange:function(e){this.page.current=e,this.handleLogLoad(),this.$emit("request",{page:this.page,sort:this.order})}}},c=l,u=(a("8c71"),a("5d22")),d=Object(u["a"])(c,r,o,!1,null,"25134787",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7fe186db.3babeb88.js.map