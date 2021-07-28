(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ead94d"],{"07e8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"le-main"},[n("el-breadcrumb",{staticClass:"he-link-text",attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",[n("a",{attrs:{href:"#/plugins/features"}},[t._v("营销玩法")])]),n("el-breadcrumb-item",[t._v(" 优惠券管理 ")])],1),n("button",{staticClass:"he-btn he-primary-btn le-new-add",on:{click:function(e){return t.router()}}},[t._v("新建优惠券")]),n("el-form",{staticClass:"le-card",attrs:{inline:!0,"label-width":"110px",model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{staticClass:"le-search-input",attrs:{label:"优惠券名称"}},[n("el-input",{attrs:{placeholder:"输入优惠券名称搜索",clearable:""},on:{clear:function(e){return t.getList(1)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{staticClass:"le-search-date",attrs:{label:"创建时间"}},[n("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"开始时间"},model:{value:t.form.begin_time,callback:function(e){t.$set(t.form,"begin_time",e)},expression:"form.begin_time"}}),n("span",{staticClass:"le-go"},[t._v("至")]),n("el-date-picker",{attrs:{"value-format":"timestamp",type:"datetime",placeholder:"结束时间"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1),n("el-form-item",{staticClass:"le-search-select",attrs:{label:"优惠券状态"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[n("el-option",{attrs:{label:"全部",value:-1}}),n("el-option",{attrs:{label:"上架中",value:1}}),n("el-option",{attrs:{label:"下架中",value:0}}),n("el-option",{attrs:{label:"已结束",value:2}})],1)],1),n("div",{staticClass:"le-button"},[n("button",{staticClass:"he-btn he-primary-btn",on:{click:function(e){return t.getList(1)}}},[t._v("筛选")]),n("button",{staticClass:"he-btn he-clear-btn",on:{click:t.emptyForm}},[t._v("清空")])])],1),n("div",{staticClass:"le-card le-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{"row-key":t.rowKey,data:t.list,height:"688","empty-text":"暂无优惠券","default-sort":{prop:"created_time",order:"descending"},"cell-class-name":"le-table-row"},on:{"sort-change":t.sort}},[n("el-table-column",{attrs:{label:"优惠券名称",prop:"name","min-width":"200px"}}),n("el-table-column",{attrs:{label:"优惠内容",prop:"content","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===Number(e.row.min_price)?[t._v(" 无门槛使用，减"+t._s(e.row.sub_price)+" ")]:[t._v(" 满"+t._s(e.row.min_price)+"减"+t._s(e.row.sub_price)+" ")]]}}])}),n("el-table-column",{attrs:{label:"已领取/剩余",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.obtain_num)+"/"+t._s(e.row.over_num)+" ")]}}])}),n("el-table-column",{attrs:{label:"已使用",prop:"use_num",sortable:"custom",width:"200px"}}),n("el-table-column",{attrs:{label:"用券时间",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.expire_type?[t._v("领取后"+t._s(e.row.expire_day)+"天内")]:2===e.row.expire_type?[t._v(" "+t._s(t._f("timeFormat")(e.row.begin_time,"yyyy.mm.dd hh:MM:ss"))+" -"),n("br"),t._v(" "+t._s(t._f("timeFormat")(e.row.end_time,"yyyy.mm.dd hh:MM:ss"))+" ")]:t._e()]}}])}),n("el-table-column",{attrs:{label:"状态",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?n("div",{staticClass:"le-table-status le-status-success"},[t._v("上架中")]):0===e.row.status?n("div",{staticClass:"le-table-status le-status-gray"},[t._v("下架中")]):2===e.row.status?n("div",{staticClass:"le-table-status le-status-caveat"},[t._v("已结束")]):t._e()]}}])}),n("el-table-column",{attrs:{label:"创建时间",width:"200",sortable:"custom",prop:"created_time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("timeFormat")(e.row.created_time,"yyyy.mm.dd hh:MM:ss"))+" ")]}}])}),n("el-table-column",{attrs:{label:"编辑",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"le-table-edit flex align-center"},[2!==e.row.status?[n("span",{staticClass:"le-button-text",on:{click:function(n){return t.router(e.row.id)}}},[t._v("编辑")]),n("span",{staticClass:"le-line-text"})]:t._e(),1===e.row.status?[n("span",{staticClass:"le-button-text",on:{click:function(n){return t.downCoupon(e.row)}}},[t._v("下架")]),n("span",{staticClass:"le-line-text"}),n("span",{directives:[{name:"popup",rawName:"v-popup.promote",value:{data:e.row,promoteType:"coupon"},expression:"{ data: scope.row, promoteType: 'coupon' }",modifiers:{promote:!0}}],staticClass:"le-button-text",attrs:{module:"goods",title:"推广",id:e.$index+"_coupon",hide_footer:!0,type:"text",width:"791"}},[t._v("推广")]),n("span",{staticClass:"le-line-text"}),n("span",{staticClass:"le-button-text",on:{click:function(n){return t.replace(e.row)}}},[t._v("发放")])]:t._e(),0===e.row.status?[n("span",{staticClass:"le-button-text",on:{click:function(n){return t.putCoupon(e.row)}}},[t._v("上架")]),n("span",{staticClass:"le-line-text"})]:t._e(),2===e.row.status||0===e.row.status?[2===e.row.status?[n("span",{staticClass:"le-button-text",on:{click:function(n){return t.router(e.row.id,1)}}},[t._v("查看")]),n("span",{staticClass:"le-line-text"})]:t._e(),n("span",{staticClass:"le-button-text",on:{click:function(n){return t.delCoupon(e.row.id,e.$index)}}},[t._v("删除")])]:t._e()],2)]}}])})],1),n("div",{staticClass:"le-pagination flex justify-end"},[n("el-pagination",{attrs:{disabled:t.tableLoading,"current-page":t.pagination.current,"page-count":t.pagination.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":t.pageChange}})],1)],1)],1)},s=[],o=n("dc45"),r=(n("f49b"),n("e186"),{components:{},data:function(){return{form:{name:"",status:-1,begin_time:null,end_time:null,sort:4},pagination:{current:1,count:1},tableLoading:!1,list:[]}},computed:{},created:function(){},watch:{},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.$route),t.getList(t.$route.query.current?parseInt(t.$route.query.current):1);case 2:case"end":return e.stop()}}),e)})))()},methods:{rowKey:function(t){return t.id},getList:function(t){this.tableLoading=!0;var e=this,n=JSON.parse(JSON.stringify(this.form));for(var a in n)n[a]||0===n[a]?"begin_time"!==a&&"end_time"!==a||(n[a]=n[a]+"",n[a]=parseInt(n[a].substring(0,n[a].length-3))):delete n[a];this.$heshop.coupon("get",n).page(t,10).then((function(t){var n=t.headers,a=t.data;e.list=a,e.tableLoading=!1,e.pagination={current:+n["x-pagination-current-page"],count:+n["x-pagination-page-count"]}})).catch((function(t){console.error(t),e.$message.error(t.data.message),e.tableLoading=!1}))},emptyForm:function(){this.form={name:"",status:-1,begin_time:null,end_time:null,sort:4},this.getList(1)},sort:function(t){"use_num"===t.prop?"ascending"===t.order?this.form.sort=1:"descending"===t.order?this.form.sort=2:this.form.sort=4:"created_time"===t.prop&&("ascending"===t.order?this.form.sort=3:this.form.sort=4),this.getList(this.pagination.current)},router:function(t,e){var n={};t&&(n.id=t),e&&(n.examine=e),this.$router.push({path:"/features/coupon/detail",query:n})},replace:function(t){this.$router.push({path:"/features/coupon/send",query:{id:t.id}})},pageChange:function(t){this.getList(t)},delCoupon:function(t,e){var n=this;this.$confirm("是否确认删除优惠券？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){n.$heshop.coupon("delete",t).then((function(){n.$delete(n.list,e),n.$message.success("删除成功")})).catch((function(t){n.$message.error(t.data.message)}))})).catch((function(){}))},putCoupon:function(t){var e=this;this.$confirm("是否确认上架优惠券？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){console.log(t.id),e.$heshop.coupon("put",{id:t.id,behavior:"status"},{status:1}).then((function(){t.status=1,e.$message.success("上架成功")})).catch((function(t){e.$message.error(t.data.message)}))})).catch((function(){}))},downCoupon:function(t){var e=this;this.$confirm("优惠券下架后，用户不可再领取，但已领取过的用户，仍可继续使用优惠券，是否确认下架？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){console.log(t),e.$heshop.coupon("put",{id:t.id,behavior:"status"},{status:0}).then((function(){t.status=0,e.$message.success("下架成功")})).catch((function(t){e.$message.error(t.data.message)}))})).catch((function(){}))}}}),i=r,l=(n("e475"),n("5d22")),c=Object(l["a"])(i,a,s,!1,null,"50d30eaa",null);e["default"]=c.exports},e0dd:function(t,e,n){},e475:function(t,e,n){"use strict";n("e0dd")}}]);
//# sourceMappingURL=chunk-35ead94d.a69e1859.js.map