(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-groupTemplate"],{"16ae":function(e,t,n){"use strict";n("a1ce")},"79ea":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"le-matter"},[n("el-button",{directives:[{name:"popup",rawName:"v-popup.groupTemplate",modifiers:{groupTemplate:!0}}],attrs:{type:"primary",module:"goods",title:"新增规格模板",width:"788",action:"getGroup"}},[e._v("新增规格模板 ")]),n("el-form",{staticClass:"le-card le-search",attrs:{"label-width":"96px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"规格搜索"}},[n("el-input",{attrs:{placeholder:"输入规格名称搜索",clearable:""},on:{clear:function(t){return e.getList(1)}},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(1)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("el-button",{staticClass:"le-search-btn",attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("筛选 ")]),n("el-button",{on:{click:e.empty}},[e._v("清空")])],1),n("div",{staticClass:"le-card le-list"},[n("div",{staticClass:"le-operating"},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("当页全选 ")]),n("el-button",{attrs:{disabled:0===e.checkList.length},on:{click:e.delAll}},[e._v("删除 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"templateTable",staticClass:"le-table",attrs:{data:e.list,"row-key":e.rowKey,"row-class-name":"le-table-row"},on:{"selection-change":e.selectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"规格名",prop:"param_name","min-width":"260px"}}),n("el-table-column",{attrs:{label:"规格值","min-width":"746px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.param_data.join("; "))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"210px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"le-table-edit flex align-center"},[n("span",{directives:[{name:"popup",rawName:"v-popup.groupTemplate",value:{item:t.row,index:t.$index},expression:"{ item: scope.row, index: scope.$index }",modifiers:{groupTemplate:!0}}],staticClass:"le-button-text",attrs:{module:"goods",id:"group_template_"+t.row.id,title:"编译规格模板",width:"788"}},[e._v("编辑")]),n("span",{staticClass:"le-line-text"}),n("span",{staticClass:"le-button-text",on:{click:function(n){return e.delItem(t.row.id,t.$index)}}},[e._v("删除")])])]}}])})],1),n("div",{staticClass:"le-operating flex justify-between"},[n("div",{},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("当页全选 ")]),n("el-button",{attrs:{disabled:0===e.checkList.length},on:{click:e.delAll}},[e._v("删除 ")])],1),n("el-pagination",{attrs:{disabled:e.loading,"current-page":e.pagination.current,"page-count":e.pagination.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":e.getList}})],1)],1)],1)},a=[],l=(n("f5bd"),n("6afd"),n("eb62"),{data:function(){return{loading:!1,name:"",pagination:{current:1,count:1},list:[],checkList:[],checkAll:!1,isIndeterminate:!1}},methods:{rowKey:function(e){return e.id},getList:function(e){var t=this;this.loading=!0,this.$heshop.goodstemplate("get",{name:this.name}).page(e,15).then((function(e){console.log(e);var n=e.headers,i=e.data;t.pagination={current:+n["x-pagination-current-page"],count:+n["x-pagination-page-count"]},t.list=i,t.loading=!1})).catch((function(e){t.$message.error(e.data.message),t.loading=!1}))},getGroup:function(){this.getList(this.pagination.current)},handleCheckAllChange:function(){var e=this;this.isIndeterminate=!1,this.checkList=this.list,this.list.forEach((function(t){e.$refs.templateTable.toggleRowSelection(t,e.checkAll)}))},selectionChange:function(e){this.checkList=e,this.isIndeterminate=this.checkList.length>0&&this.checkList.length<this.list.length,this.checkList.length===this.list.length&&(this.checkAll=!0),0===this.checkList.length&&(this.checkAll=!1)},empty:function(){this.name="",this.getList(1)},delItem:function(e,t){var n=this;this.$confirm("是否确认删除此条规格模板？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){n.$heshop.goodstemplate("delete",e).then((function(){if(n.$delete(n.list,t),n.pagination.current>1&&0===n.list.length){var e=n.pagination.current-1;n.getList(e)}else n.pagination.current>=1&&0!==n.list.length&&1!==n.pagination.count&&n.getList(n.pagination.current);n.$message.success("删除成功")})).catch((function(e){n.$message.error(e.data.message)}))})).catch((function(){}))},delAll:function(){var e=this,t=this.checkList.map((function(e){return e.id}));this.$confirm("是否确认删除选中规格模板？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.$heshop.goodstemplate("delete",t).then((function(){var n=e.list.length-t.length;if(e.pagination.current>1&&0===n){var i=e.pagination.current-1;e.getList(i)}else e.pagination.current>=1&&0!==n&&1!==e.pagination.count&&e.getList(e.pagination.current);e.$message.success("删除成功"),e.checkList=[]})).catch((function(t){e.$message.error(t.data.message)}))})).catch((function(){}))}},mounted:function(){this.getList(1)}}),s=l,c=(n("16ae"),n("4ac2")),o=Object(c["a"])(s,i,a,!1,null,"c15bbe82",null);t["default"]=o.exports},a1ce:function(e,t,n){}}]);