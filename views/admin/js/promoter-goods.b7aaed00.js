(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-goods"],{"0e28":function(t,e,n){"use strict";n.d(e,"h",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"m",(function(){return g})),n.d(e,"d",(function(){return b})),n.d(e,"f",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"n",(function(){return k})),n.d(e,"p",(function(){return P})),n.d(e,"g",(function(){return N}));n("b1fa"),n("2769"),n("ecf1");var a=n("430a"),o=(n("6afd"),n("2070"),n("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function r(t){Object.keys(t.headers).forEach((function(e){t.headers[e.toUpperCase()]=t.headers[e],delete t.headers[e]}));var e={current:1,pageCount:1,totalCount:1};o.forEach((function(e){Object.keys(t.headers).map((function(n){e===n&&(t.headers[n]=parseInt(t.headers[n]))}))})),e.current=t.headers["X-PAGINATION-CURRENT-PAGE"],e.pageCount=t.headers["X-PAGINATION-PAGE-COUNT"],e.totalCount=t.headers["X-PAGINATION-TOTAL-COUNT"],t.pagination=e}var i=a["default"].prototype.$heshop,l=a["default"].prototype.$message;function s(t){var e=t.tabKey,n=void 0===e?"all":e,a=t.page,o=void 0===a?1:a;return new Promise((function(t){i.search("post",{include:"goods"},{keyword:{tab_key:n}}).page(o,10).then((function(e){r(e);var n=e.data,a=e.pagination;t({data:n,pagination:a})})).catch((function(t){l(t.data.message)}))}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){i.finance("get").page(t,10).then((function(t){r(t);var n=t.data,a=t.pagination;e({data:n,pagination:a})})).catch((function(t){l(t.data.message)}))}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.search("post",{include:"promoterorder"},e).page(t,10).then((function(t){r(t);var e=t.data,a=t.pagination;n({data:e,pagination:a})})).catch((function(t){l(t.data.message)}))}))}function f(){return new Promise((function(t){i.promoterlevel("get").then((function(e){t(e)})).catch((function(t){l(t.data.message)}))}))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){i.promotermaterial("get").page(t,10).then((function(t){r(t);var n=t.data,a=t.pagination;e({data:n,pagination:a})})).catch((function(t){l(t.data.message)}))}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e){i.promotermaterial("post",t).then((function(t){e(t)})).catch((function(t){l(t.data.message)}))}))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promoterzone("get",e).page(t,10).then((function(t){r(t);var e=t.data,a=t.pagination;n({data:e,pagination:a})})).catch((function(t){l(t.data.message)}))}))}function h(t){return new Promise((function(e){i.promoterzone("post",t).then((function(t){e(t)})).catch((function(t){l(t.data.message)}))}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"commission_setting",content:t}).then((function(t){e(t)})).catch((function(t){n(t)}))}))}function b(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"commission_setting"}).then((function(e){t(e)})).catch((function(t){l(t.data.message),e()}))}))}function v(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_setting"}).then((function(e){t(e)})).catch((function(t){l(t.data.message),e()}))}))}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_setting",content:t}).then((function(t){e(t)})).catch((function(t){n(t)}))}))}function w(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_rank"}).then((function(e){t(e)})).catch((function(t){l(t.data.message),e()}))}))}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_rank",content:t}).then((function(t){e(t)})).catch((function(t){n(t)}))}))}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_recruit_make",content:t}).then((function(t){e(t)})).catch((function(t){n(t)}))}))}function N(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(e){t(e.content)})).catch((function(t){l(t.data.message),e()}))}))}},"59cc":function(t,e,n){"use strict";n.r(e);var a,o,r,i,l=n("4c02"),s=n.n(l),c=(n("f5bd"),n("3f7e"),n("eb62"),n("0e28")),u=n("8236"),f={name:"goods-table",mixins:[u["a"]],data:function(){return{form:{page:1},list:[]}},mounted:function(){var t=this;Object(c["h"])({tabKey:this.$parent.paneName,page:1}).then((function(e){t.list=e.data}))},methods:{switchPage:function(t){this.form.page=t,this.replaceQuery()},filter:function(){}},render:function(){var t=arguments[0],e=this;return t("div",{class:"le-main"},[t("div",{class:"le-table-head"},[t("el-checkbox",["当页全选"]),t("el-checkbox",["全选所有页"]),t("el-button",["参与"]),t("el-button",["不参与"])]),t("el-table",{attrs:{data:e.list,"row-class-name":"le-table-row"},class:"le-table"},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{label:"商品描述","min-width":"274px"},scopedSlots:{default:function(e){return t("div",{class:"flex"},[t("el-image",{class:"le-goods-image",attrs:{lazy:!0,src:e.row.slideshow[0]}}),t("div",{class:"flex-sub le-goods-info"},[t("div",{class:"le-goods-name"},[e.row.name]),t("div",{class:"le-goods-parameter"},[function(){if(e.row.goods_sn)return[["货号:".concat(e.row.goods_sn)],[t("br")]]}(),"ID:",e.row.id])])])}}}),t("el-table-column",{attrs:{label:"商品价格",prop:"price"},scopedSlots:{default:function(t){return"￥".concat(t.row.price)}}}),t("el-table-column",{attrs:{label:"库存",prop:"stocks"}}),t("el-table-column",{attrs:{label:"销量",prop:"sales"}}),t("el-table-column",{attrs:{label:"创建时间",prop:"created_time"}}),t("el-table-column",{attrs:{label:"商品状态",prop:"status",width:"105px"},scopedSlots:{default:function(e){var n=e.row.is_sale,a=e.row.stocks;return 0===a?t("el-tag",{attrs:{effect:"plain",size:"medium",type:"warning"}},["售罄"]):t("el-tag",{attrs:{effect:"plain",size:"medium",type:1===n?"success":0===n?"info":""}},[1===n?"销售中":0===n?"下架中":""])}}}),t("el-table-column",{attrs:{label:"分销状态"},scopedSlots:{default:function(){}}}),t("el-table-column",{attrs:{label:"成本价状态"}}),t("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:{default:function(){return t("div",{class:"le-table-operate flex align-center"},[t("el-button",{attrs:{type:"text"}},["编辑"]),t("span",{class:"le-line"}),t("el-button",{attrs:{type:"text"}},["参与"]),t("span",{class:"le-line"}),t("el-button",{attrs:{type:"text"}},["不参与"])])}}})]),t("div",{class:"flex le-pagination justify-between"},[t("div",[t("el-button",["参与"]),t("el-button",["不参与"])]),t("el-pagination",{attrs:{background:!0,"current-page":e.form.page,layout:"prev, pager, next, jumper",total:1e3},on:{"current-change":e.switchPage}})])])}},d=f,p=(n("f66c"),n("5d22")),m=Object(p["a"])(d,a,o,!1,null,"1efe6f63",null),h=m.exports,g={components:{GoodsTable:h},mixins:[u["a"]],data:function(){return{form:{grade:1,tab_key:"all",search:1,price_start:null,price_end:null,time:[],sort:{created_time:"descending"},page:1}}},methods:{tabSwitch:function(t){var e=this.$refs[t.name].form;this.form.page=e.page,this.replaceQuery()},filter:function(){this.replaceQuery()}},render:function(){var t=this,e=arguments[0],n=this;return e("div",{class:"le-main"},[e("el-form",{class:"le-card",attrs:{inline:!0,"label-width":"112px"}},[e("el-form-item",{attrs:{label:"商品搜索"}},[e("el-input",{attrs:{placeholder:"输入商品名称/货号/ID搜索"}})]),e("el-form-item",{attrs:{label:"商品分类"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.grade,callback:function(e){t.$set(n.form,"grade",e)}}},[e("el-option",{attrs:{label:"全部",value:1}}),e("el-option",{attrs:{label:"白银",value:2}}),e("el-option",{attrs:{label:"黄金",value:3}})])]),e("el-form-item",{attrs:{label:"分销状态"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.distributionStatus,callback:function(e){t.$set(n.form,"distributionStatus",e)}}},[e("el-option",{attrs:{label:"全部",value:1}}),e("el-option",{attrs:{label:"参与",value:2}}),e("el-option",{attrs:{label:"不参与",value:3}})])]),e("el-form-item",{attrs:{label:"成本价状态"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.distributionStatus,callback:function(e){t.$set(n.form,"distributionStatus",e)}}},[e("el-option",{attrs:{label:"全部",value:1}}),e("el-option",{attrs:{label:"已设置",value:2}}),e("el-option",{attrs:{label:"未设置",value:3}})])]),e("el-form-item",{attrs:{label:"商品价格"},class:"le-price-range"},[e("el-input",{attrs:{placeholder:"最低价格"}},[e("template",{slot:"append"},["元"])]),e("span",{class:"le-range"},["至"]),e("el-input",{attrs:{placeholder:"最高价格"}},[e("template",{slot:"append"},["元"])])]),e("el-form-item",{attrs:{label:"创建时间"}},[e("el-date-picker",{attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"}})]),e("div",{class:"le-button"},[e("el-button",{attrs:{type:"primary"},on:{click:n.filter}},["筛选"]),e("el-button",["清空"])])]),e("el-tabs",s()([{class:"le-tabs",attrs:{type:"card"}},{on:{"tab-click":this.tabSwitch}},{model:{value:t.form.tab_key,callback:function(e){t.$set(t.form,"tab_key",e)}}}]),[[{name:"全部",key:"all",lazy:!1},{name:"销售中",key:"onsale",lazy:!1},{name:"下架中",key:"nosale",lazy:!1},{name:"售罄",key:"soldout",lazy:!1}].map((function(t){return e("el-tab-pane",{attrs:{lazy:t.lazy,label:t.name,name:t.key}},[e("goods-table",{ref:t.key})])}))])])}},b=g,v=(n("b4c4"),Object(p["a"])(b,r,i,!1,null,"115f5efc",null));e["default"]=v.exports},8236:function(t,e,n){"use strict";n("2769"),n("0756"),n("6afd"),n("2070");e["a"]={data:function(){},methods:{replaceQuery:function(){var t=Object.assign({},this.$route.query,this.form);this.$router.replace({query:t})},getQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],e=this.$route.query;return Object.keys(e).forEach((function(n){for(var a=0;a<t.length;a++)t[a]===n&&(isNaN(e[n])?e[n]=1:e[n]=parseInt(e[n]))})),Object.assign(this.form,e)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},a7ad:function(t,e,n){},b4c4:function(t,e,n){"use strict";n("a7ad")},b7be:function(t,e,n){},f66c:function(t,e,n){"use strict";n("b7be")}}]);
//# sourceMappingURL=promoter-goods.b7aaed00.js.map