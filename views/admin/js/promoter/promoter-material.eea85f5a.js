(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-material"],{"0559":function(e,t,a){},"2f1b":function(e,t,a){"use strict";a.r(t);var l,n,o=a("4c02"),r=a.n(o),i=(a("2e9c"),a("5d63"),a("e939"),a("0e28")),s=a("8236"),c={name:"material",data:function(){return{form:{type:"",name:"",created_time:[],page:1},list:[],page:{count:1}}},mixins:[s["a"]],mounted:function(){this.materialList()},methods:{filter:function(){this.materialList()},empty:function(){this.form={type:"",name:"",created_time:[],page:1},this.filter()},materialList:function(){var e=this,t=this.$_.cloneDeep(this.form);t.created_time.length?(t.begin_time=t.created_time[0]/1e3,t.end_time=t.created_time[1]/1e3):(t.begin_time=0,t.end_time=0),delete t.created_time,Object(i["D"])(t.page,t).then((function(t){var a=t.data,l=t.pagination;e.page.count=l.pageCount,e.form.page=l.current,e.list=a}))},switchPage:function(e){this.form.page=e,this.materialList()},deleteDynamic:function(e,t){var a=this;this.$confirm("是否确认删除此素材？").then((function(){Object(i["B"])(e.id).then((function(){a.$delete(a.list,t),a.$message.success("删除成功")}))})).catch((function(){}))},createDynamic:function(){this.$router.push({path:"/promoter/material-edit"})},editDynamic:function(e){this.$router.push({path:"/promoter/material-edit",query:{id:e.id}})}},render:function(){var e=this,t=arguments[0],a=[{label:"全部",value:""},{label:"图片",value:"1"},{label:"视频",value:"2"}],l=this;return t("div",{class:"le-main"},[t("el-button",{attrs:{type:"primary"},on:{click:l.createDynamic}},["添加素材"]),t("el-form",r()([{},{props:{model:l.form}},{class:"le-card",attrs:{inline:!0,"label-width":"110px"}}]),[t("el-form-item",{attrs:{label:"素材名称搜索"}},[t("el-input",r()([{attrs:{value:l.form.name},on:{input:function(e){l.form.name=e}}},{nativeOn:{keyup:function(e){"Enter"===e.key&&l.materialList()}}},{attrs:{clearable:!0,placeholder:"输入素材名称搜索"},on:{clear:function(){l.materialList()}},model:{value:l.form.name,callback:function(t){e.$set(l.form,"name",t)}}}]))]),t("el-form-item",{attrs:{label:"素材类型"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:l.form.type,callback:function(t){e.$set(l.form,"type",t)}}},[a.map((function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})}))])]),t("el-form-item",{attrs:{label:"创建时间"}},[t("el-date-picker",{attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:l.form.created_time,callback:function(t){e.$set(l.form,"created_time",t)}}})]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary"},on:{click:l.filter}},["筛选"]),t("el-button",{on:{click:l.empty}},["清空"])])]),t("div",{class:"le-card le-table"},[t("el-table",r()([{attrs:{"row-class-name":"le-table-row"}},{props:{data:l.list}}]),[t("el-table-column",{attrs:{label:"素材名称",prop:"name"}}),t("el-table-column",{attrs:{label:"素材文案","min-width":"260",prop:"content"},scopedSlots:{default:function(e){return t("el-popover",{attrs:{placement:"top-start",width:"400",trigger:"hover",content:e.row.content}},[t("div",{class:"he-line-2",slot:"reference"},[e.row.content])])}}}),t("el-table-column",{attrs:{label:"素材类型",prop:"type","min-width":"104"},scopedSlots:{default:function(e){return 1===e.row.type?"图片":2===e.row.type?"视频":void 0}}}),t("el-table-column",{attrs:{label:"关联商品",width:"260"},scopedSlots:{default:function(e){return l.$_.isEmpty(e.row.goods)?"— —":t("div",{class:"flex"},[t("el-image",{class:"le-goods-image",attrs:{lazy:!0,src:e.row.goods.slideshow[0]}}),t("div",{class:"flex-sub le-goods-info"},[t("div",{class:"le-goods-name he-line-2"},[e.row.goods.name]),t("div",{class:"le-goods-parameter"},[function(){if(e.row.goods_sn)return[["货号:".concat(e.row.goods_sn)],[t("br")]]}(),"ID:",e.row.goods.id])])])}}}),t("el-table-column",{attrs:{label:"分享次数",prop:"share_count"}}),t("el-table-column",{attrs:{label:"创建时间",width:"200"},scopedSlots:{default:function(e){return l.$moment(new Date(1e3*e.row.created_time)).format("Y-MM-DD HH:mm:ss")}}}),t("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:{default:function(e){return t("div",{class:"le-table-operate flex align-center"},[t("el-button",{attrs:{type:"text"},on:{click:l.editDynamic.bind(l,e.row)}},["编辑"]),t("span",{class:"le-line"}),t("el-button",{attrs:{type:"text"},on:{click:l.deleteDynamic.bind(l,e.row,e.$index)}},["删除"])])}}})]),t("div",{class:"flex le-pagination justify-end"},[t("el-pagination",{attrs:{background:!0,"current-page":l.form.page,layout:"prev, pager, next, jumper","page-count":l.page.count},on:{"current-change":l.switchPage}})])])])}},m=c,u=(a("75b4"),a("cba8")),d=Object(u["a"])(m,l,n,!1,null,"604c7458",null);t["default"]=d.exports},"75b4":function(e,t,a){"use strict";a("0559")}}]);