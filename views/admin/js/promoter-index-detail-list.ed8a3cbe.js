(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-index-detail-list"],{"0c76":function(e,t,a){"use strict";a.r(t);var r,i,l=a("4c02"),s=a.n(l),n=(a("2769"),a("ecf1"),a("eb62"),a("3f7e"),a("8236")),o={mixins:[n["a"]],data:function(){return{list:[],type:"一级下线",children:{},user:{},form:{page:1,search:"",type:0},page:{size:20}}},render:function(){var e=this,t=arguments[0],a=this,r=[{label:"全部",value:0},{label:"分销商",value:1},{label:"普通下线",value:2}];return t("div",[t("el-breadcrumb",[t("el-breadcrumb-item",[t("a",{on:{click:this.routerBack.bind(this,-2)}},["分销列表"])]),t("el-breadcrumb-item",[t("a",{on:{click:this.routerBack.bind(this,-1)}},["分销商详情"])]),t("el-breadcrumb-item",["下线列表"])]),t("div",{class:"le-card le-card-margin le-userinfo-box flex align-center"},[t("div",{class:"le-userinfo flex align-center"},[t("el-avatar",{attrs:{size:48,error:function(){return!0}}},[t("img",{attrs:{src:this.user.avatar}})]),t("span",{class:"le-username"},[this.user.nickname])]),t("span",{class:"le-title"},[this.type]),t("span",{class:"le-number"},[this.children.promoter+this.children.ordinary])]),t("el-form",s()([{class:"le-card le-card-margin"},{props:{model:a.form}},{attrs:{inline:!0,"label-width":"112px"}}]),[t("el-form-item",{attrs:{label:"下线搜索"}},[t("el-input",{attrs:{placeholder:"输入昵称搜索"},model:{value:a.form.search,callback:function(t){e.$set(a.form,"search",t)}}})]),t("el-form-item",{attrs:{label:"下线类型"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.form.type,callback:function(t){e.$set(a.form,"type",t)}}},[r.map((function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})}))])]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary"},on:{click:this.filter}},["筛选"]),t("el-button",{on:{click:this.empty}},["清空"])])]),t("div",{class:"le-card le-card-margin le-table"},[t("el-table",s()([{},{props:{data:this.list}},{attrs:{"row-class-name":"le-table-row"}}]),[t("el-table-column",{attrs:{label:"用户","min-width":"260px"},scopedSlots:{default:function(e){return t("div",{class:"flex align-center"},[t("el-avatar",{attrs:{size:40,error:function(){return!0}}},[t("img",{attrs:{src:e.row.avatar}})]),t("i",{class:"le-icon le-userplatform-icon le-icon-".concat("weapp"===e.row.type?"xiaochengxu":"wehcat")}),t("span",[e.row.nickname])])}}}),t("el-table-column",{attrs:{label:"下级类型"},scopedSlots:{default:function(e){return e.row.status&&2==e.row.status?"分销商":"普通下线"}}}),t("el-table-column",{attrs:{label:"分销商等级"},scopedSlots:{default:function(e){return e.row.level_name?e.row.level_name:"--"}}}),t("el-table-column",{attrs:{label:"分销商品金额(元)"},scopedSlots:{default:function(e){return e.row.sales_amount}}}),t("el-table-column",{attrs:{label:"贡献佣金金额(元)"},scopedSlots:{default:function(e){return e.row.commission}}}),t("el-table-column",{attrs:{label:"成为下线时间"},scopedSlots:{default:function(t){return t.row.bind_time?e.$moment(new Date(1e3*t.row.bind_time)).format("Y-MM-DD HH:mm:ss"):"--"}}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:{default:function(r){if(r.row.id!=e.user.UID)return t("el-button",{class:"le-table-button",attrs:{type:"text"},on:{click:a.dissolveRelationship}},["解除关系"])}}})]),t("div",{class:"flex le-pagination justify-end"},[t("el-pagination",{attrs:{background:!0,"current-page":this.form.page,layout:"prev, pager, next, jumper","page-count":this.page.count},on:{"current-change":this.switchPage}})])])])},mounted:function(){var e=this.$route.params;"{}"===JSON.stringify(e)?e=JSON.parse(localStorage.getItem("promoter_children")):localStorage.setItem("promoter_children",JSON.stringify(e)),this.type=1==e.type?"一级下线":2==e.type?"二级下线":"三级下线",this.children=1==e.type?e.detail.children.first:2==e.type?e.detail.children.second:e.detail.children.third,e.detail.user["UID"]=e.detail.UID,this.user=e.detail.user,this.getList()},methods:{routerBack:function(e){this.$router.go(e)},filter:function(){this.replaceQuery(),this.getList()},empty:function(){this.form={search:"",type:0,page:1},this.filter()},switchPage:function(e){this.form.page=e,this.replaceQuery(),this.getList()},dissolveRelationship:function(){},getList:function(){var e=this;this.$heshop.promoter("post",{behavior:"children_list"},{parent:this.children.parent,UID:this.user.UID,nickname:this.form.search,type:this.form.type}).page(this.form.page,this.page.size).then((function(t){var a=t.data,r=t.headers;e.list=a,e.form.page=+r["x-pagination-current-page"],e.page={count:+r["x-pagination-page-count"],size:+r["x-pagination-per-page"],total:+r["x-pagination-total-count"]}})).catch((function(t){e.$message.error(t.data.message)}))}}},c=o,u=(a("81f4"),a("5d22")),p=Object(u["a"])(c,r,i,!1,null,"34fa3ca2",null);t["default"]=p.exports},"10c1":function(e,t,a){},"81f4":function(e,t,a){"use strict";a("10c1")},8236:function(e,t,a){"use strict";a("2769"),a("0756"),a("6afd"),a("2070");t["a"]={data:function(){},methods:{replaceQuery:function(){var e=Object.assign({},this.$route.query,this.form);this.$router.replace({query:e})},getQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],t=this.$route.query;return Object.keys(t).forEach((function(a){for(var r=0;r<e.length;r++)e[r]===a&&(isNaN(t[a])?t[a]=1:t[a]=parseInt(t[a]))})),Object.assign(this.form,t)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}}}]);
//# sourceMappingURL=promoter-index-detail-list.ed8a3cbe.js.map