(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users-userLabel"],{"0035":function(t,e,n){},4629:function(t,e,n){"use strict";n("0035")},"7b4d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"le-matter le-user-label"},[n("div",{staticClass:"le-head flex"},[n("div",{staticClass:" le-card  flex align-center",class:1===t.keyword.type?"active":"",on:{click:function(e){return t.setType(1)}}},[n("he-icon",{staticClass:"le-head-icon",attrs:{size:"48px",type:"le-icon-shoudongbiaoqian"}}),t._m(0)],1),n("div",{staticClass:" le-card flex align-center",class:2===t.keyword.type?"active":"",on:{click:function(e){return t.setType(2)}}},[n("he-icon",{staticClass:"le-head-icon",attrs:{size:"48px",type:"le-icon-zidongbiaoqian"}}),t._m(1)],1)]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bodyLoading,expression:"bodyLoading"}],staticClass:"le-body le-card"},[n("el-input",{staticClass:"le-input-search",attrs:{placeholder:"请输入标签名搜索",clearable:""},on:{clear:function(e){return t.getList(1)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.keyword.name,callback:function(e){t.$set(t.keyword,"name",e)},expression:"keyword.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1),n("el-button",{staticClass:"le-add-button",attrs:{type:"primary"},on:{click:t.routerGo}},[t._v("新建标签")]),n("el-table",{staticClass:"le-table",attrs:{data:t.list,height:660,"header-cell-class-name":"le-table-header-cell","default-sort":{prop:"created_time",order:"descending"},"row-class-name":"le-table-row"},on:{"sort-change":t.sortlist}},[n("el-table-column",{attrs:{label:"标签名",prop:"name"}}),n("el-table-column",{attrs:{sortable:"custom",label:"用户数",prop:"users_number"}}),2===t.keyword.type?n("el-table-column",{attrs:{label:"打标条件",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"le-table-row-type"},[t._v(t._s(1===e.row.conditions_status?"满足所有条件":"满足任一条件"))]),n("div",{staticClass:"le-table-row-conditions"},[t._v(t._s(t._f("conditions")(e.row.conditions_setting)))])]}}],null,!1,2309682700)}):t._e(),n("el-table-column",{attrs:{sortable:"custom",label:"创建时间",prop:"created_time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("timeFormat")(e.row.created_time,"yyyy-mm-dd hh:MM:ss"))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"le-table-edit flex align-center"},[n("span",{staticClass:"le-button-text",on:{click:function(n){return t.routerGo(e.row)}}},[t._v("编辑")]),n("span",{staticClass:"le-line-text"}),n("span",{staticClass:"le-button-text",on:{click:function(n){return t.delLabel(e.row)}}},[t._v("删除")])])]}}])})],1),n("div",{staticClass:"le-body-footer flex justify-end"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper","current-page":t.pagination.current,"page-count":t.pagination.count},on:{"current-change":t.getList}})],1)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-sub"},[n("div",{staticClass:"le-head-title"},[t._v("手动标签")]),n("div",{staticClass:"le-head-desc"},[t._v("需手动给用户添加的标签")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-sub"},[n("div",{staticClass:"le-head-title"},[t._v("自动标签")]),n("div",{staticClass:"le-head-desc"},[t._v("满足条件的用户，被自动加上标签")])])}],i=(n("2769"),n("ecf1"),n("f49b"),n("aa00"),{name:"userLabel",data:function(){return{list:[],bodyLoading:!1,pagination:{current:1,count:1},keyword:{sort:{created_time:"DESC"},type:1,name:""}}},methods:{getList:function(t){var e=this;e.bodyLoading=!0,this.$heshop.search("post",{include:"label"},this.keyword).page(t,10).then((function(t){var n=t.data,a=t.headers;e.list=n,e.pagination={current:+a["x-pagination-current-page"],count:+a["x-pagination-page-count"]},e.bodyLoading=!1})).catch((function(t){console.error(t)}))},sortlist:function(t){this.keyword.sort={},this.keyword.sort[t.prop]="ascending"===t.order?"ASC":"descending"===t.order?"DESC":null,this.getList(this.pagination.current)},setType:function(t){this.list=[],this.keyword.type=t,this.getList(1)},routerGo:function(t){var e={type:this.keyword.type};t.id&&(e.id=t.id),this.$router.push({path:"/users/editLabel",query:e})},delLabel:function(t){var e=this;this.$confirm("彻底删除后标签无法恢复，确定删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.$heshop.userlabel("delete",t.id).then((function(){e.getList(e.pagination.current)}))})).catch((function(){}))}},filters:{conditions:function(t){var e="";for(var n in t)t[n].checked&&("shopping_time"===n&&(e+="指定消费时间/"),"shopping_number"===n&&(e+="指定消费次数/"),"shopping_amount"===n&&(e+="指定消费金额/"),"shopping_goods"===n&&(e+="购买指定商品/"),"shopping_group"===n&&(e+="购买指定分类/"));return e.slice(0,e.length-1)}},mounted:function(){this.keyword.type=this.$route.query.type?parseInt(this.$route.query.type):1,this.getList(1)}}),o=i,r=(n("4629"),n("4ac2")),l=Object(r["a"])(o,a,s,!1,null,"b7442fba",null);e["default"]=l.exports}}]);
//# sourceMappingURL=users-userLabel.5cbaf065.js.map