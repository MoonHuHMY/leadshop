(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-order"],{"0e28":function(e,t,n){"use strict";n.d(t,"q",(function(){return s})),n.d(t,"t",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"L",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"z",(function(){return p})),n.d(t,"x",(function(){return h})),n.d(t,"u",(function(){return g})),n.d(t,"y",(function(){return v})),n.d(t,"c",(function(){return b})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return _})),n.d(t,"D",(function(){return y})),n.d(t,"d",(function(){return P})),n.d(t,"i",(function(){return k})),n.d(t,"C",(function(){return O})),n.d(t,"B",(function(){return I})),n.d(t,"E",(function(){return N})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return A})),n.d(t,"A",(function(){return G})),n.d(t,"h",(function(){return x})),n.d(t,"F",(function(){return C})),n.d(t,"l",(function(){return $})),n.d(t,"n",(function(){return E})),n.d(t,"I",(function(){return j})),n.d(t,"m",(function(){return L})),n.d(t,"H",(function(){return z})),n.d(t,"J",(function(){return X})),n.d(t,"p",(function(){return S})),n.d(t,"b",(function(){return U})),n.d(t,"K",(function(){return q})),n.d(t,"G",(function(){return D})),n.d(t,"s",(function(){return J})),n.d(t,"g",(function(){return Q})),n.d(t,"o",(function(){return R})),n.d(t,"r",(function(){return H}));n("2769"),n("ecf1"),n("f49b"),n("b1fa");var o=n("430a"),r=(n("6afd"),n("2070"),n("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function a(e){Object.keys(e.headers).forEach((function(t){e.headers[t.toUpperCase()]=e.headers[t],delete e.headers[t]}));var t={current:1,pageCount:1,totalCount:1};r.forEach((function(t){Object.keys(e.headers).map((function(n){t===n&&(e.headers[n]=parseInt(e.headers[n]))}))})),t.current=e.headers["X-PAGINATION-CURRENT-PAGE"],t.pageCount=e.headers["X-PAGINATION-PAGE-COUNT"],t.totalCount=e.headers["X-PAGINATION-TOTAL-COUNT"],e.pagination=t}n("7c98");var i=o["default"].prototype.$heshop,c=o["default"].prototype.$message.error;function s(e){var t=e.tabKey,n=void 0===t?"all":t,o=e.page,r=void 0===o?1:o,s=e.search,u=void 0===s?"":s,l=e.sort,d=void 0===l?{}:l,f=e.time_start,m=void 0===f?0:f,p=e.time_end,h=void 0===p?0:p,g=e.cost_status,v=void 0===g?null:g,b=e.is_promoter,w=void 0===b?null:b,_=e.group,y=void 0===_?[]:_,P=e.price_start,k=void 0===P?"":P,O=e.price_end,I=void 0===O?"":O;return new Promise((function(e){i.search("post",{include:"goods"},{keyword:{tab_key:n,search:u,sort:d,time_start:m,time_end:h,is_promoter:w,cost_status:v,group:y,price_start:k,price_end:I}}).page(r,10).then((function(t){a(t);var n=t.data,o=t.pagination;e({data:n,pagination:o})})).catch((function(e){c(e.data.message)}))}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(r,a){i.promotergoods("put",{type:e,id:t,tab_key:n},{is_promoter:o}).then(r).catch(a)}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.promoter("post",e).then(t).catch((function(e){c(e.data.message),n(e)}))}))}function d(e){return new Promise((function(t,n){i.promoter("get",{behavior:"add_search",search:e}).then((function(e){t(e)})).catch((function(e){c(e.data.message),n(e)}))}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keyword:"",begin_time:null,end_time:null,type:null,level:null};return new Promise((function(n){i.finance("get",t).page(e,10).then((function(e){a(e);var t=e.data,o=e.pagination;n({data:t,pagination:o})})).catch((function(e){c(e.data.message)}))}))}function m(e,t,n){return e=parseInt(e),new Promise((function(o,r){i.finance("put",e,{status:t,content:n}).then(o).catch((function(e){r(e)}))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.search("post",{include:"promoterorder"},t).page(e,10).then((function(e){a(e);var t=e.data,o=e.pagination;n({data:t,pagination:o})})).catch((function(e){c(e.data.message)}))}))}function h(){return new Promise((function(e){i.promoterlevel("get").then(e).catch((function(e){c(e.data.message)}))}))}function g(e){return e=parseInt(e),new Promise((function(t){console.log("删除分销等级"),i.promoterlevel("delete",e).then(t).catch((function(e){c(e.data.message)}))}))}function v(){return new Promise((function(e){i.promoterlevel("get",{behavior:"option"}).then(e).catch((function(e){c(e.data.message)}))}))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.promoterlevel("post",e).then(t).catch((function(e){c(e.data.message),n(e)}))}))}function w(e){return e=parseInt(e),new Promise((function(t){i.promoterlevel("get",e).then(t).catch((function(e){c(e.data.message)}))}))}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=parseInt(e),new Promise((function(n,o){i.promoterlevel("put",e,t).then(n).catch((function(e){c(e.data.message),o(e)}))}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return new Promise((function(n){i.promotermaterial("get",t).page(e,10).then((function(e){a(e);var t=e.data,o=e.pagination;n({data:t,pagination:o})})).catch((function(e){c(e.data.message)}))}))}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t){i.promotermaterial("post",e).then(t).catch((function(e){c(e.data.message)}))}))}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promotermaterial("put",e,t).then(n).catch((function(e){c(e.data.message)}))}))}function O(e){return new Promise((function(t){i.promotermaterial("get",e).then(t).catch((function(e){c(e.data.message)}))}))}function I(e){return new Promise((function(t){i.promotermaterial("delete",e).then(t).catch((function(e){c(e.data.message)}))}))}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promoterzone("get",t).page(e,10).then((function(e){a(e);var t=e.data,o=e.pagination;n({data:t,pagination:o})})).catch((function(e){c(e.data.message)}))}))}function T(e){return new Promise((function(t){i.promoterzone("post",e).then(t).catch((function(e){c(e.data.message)}))}))}function A(e){return new Promise((function(t){i.promoterzone("delete",e).then(t).catch((function(e){c(e.data.message)}))}))}function G(e){return e=parseInt(e),new Promise((function(t){i.promoterzone("get",e).then((function(e){console.log(e),t(e)})).catch((function(e){c(e.data.message)}))}))}function x(e,t){return e=parseInt(e),new Promise((function(n,o){i.promoterzone("put",e,t).then(n).catch((function(e){o(e),c(e.data.message)}))}))}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"commission_setting",content:e}).then(t).catch((function(e){n(e)}))}))}function $(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"commission_setting"}).then(e).catch((function(e){c(e.data.message),t()}))}))}function E(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_setting"}).then(e).catch((function(e){c(e.data.message),t()}))}))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_setting",content:e}).then(t).catch((function(e){n(e)}))}))}function L(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_rank"}).then(e).catch((function(e){c(e.data.message),t()}))}))}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_rank",content:e}).then(t).catch((function(e){n(e)}))}))}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_recruit_make",content:e}).then(t).catch((function(e){n(e)}))}))}function S(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(t){e(t.content)})).catch((function(e){c(e.data.message),t()}))}))}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){i.promoter("put",{id:e,behavior:t},n).then(o).catch((function(e){c(e.data.message),r()}))}))}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uid:"",mobile:""};return new Promise((function(t,n){i.promoter("get",{behavior:"transfer_search",from_uid:e.uid,mobile:e.mobile}).then(t).catch((function(e){c(e.data.message),n(e)}))}))}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_page_setting",content:e}).then(t).catch((function(e){c(e.data.message),n(e)}))}))}function J(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_page_setting"}).then((function(t){e(t.content)})).catch((function(e){c(e.data.message),t(e)}))}))}function Q(e,t){return new Promise((function(n,o){i.promoter("put",parseInt(e),{level:t}).then(n).catch((function(e){c(e.data.message),o(e)}))}))}function R(e){return new Promise((function(t,n){i.qrcode("post",e).then(t).catch((function(e){c(e.data.message),n(e)}))}))}function H(){return new Promise((function(e,t){i.group("get",{include:"goods"}).then((function(t){e(t)})).catch((function(e){c(e.data.message),t(e)}))}))}},"5ecf":function(e,t,n){"use strict";n("7856")},7856:function(e,t,n){},8236:function(e,t,n){"use strict";n("2769"),n("0756"),n("6afd"),n("2070");t["a"]={data:function(){},methods:{replaceQuery:function(){var e=Object.assign({},this.$route.query,this.form);this.$router.replace({query:e})},getQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],t=this.$route.query;return Object.keys(t).forEach((function(n){for(var o=0;o<e.length;o++)e[o]===n&&(isNaN(t[n])?t[n]=1:t[n]=parseInt(t[n]))})),Object.assign(this.form,t)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},9463:function(e,t,n){"use strict";n.r(t);var o,r,a=n("4c02"),i=n.n(a),c=(n("aa00"),n("2769"),n("ecf1"),n("eb62"),n("3f7e"),n("f5bd"),n("8236")),s=n("0e28"),u={search_key:"order_sn",search:"",source:"",status:null,orderTime:[],page:1},l={mixins:[c["a"]],data:function(){return{form:this.$_.cloneDeep(u),list:[],pagination:{pageCount:1}}},methods:{filter:function(){this.replaceQuery(),this.promoterOrderList()},empty:function(){this.emptyStatus(),this.form=this.$_.cloneDeep(u),this.promoterOrderList()},switchPage:function(e){this.form.page=e,this.replaceQuery(),this.promoterOrderList()},promoterOrderList:function(){var e,t=this,n=JSON.parse(JSON.stringify(this.form));(null===(e=n.orderTime)||void 0===e?void 0:e.length)>0?(n.time_start=n.orderTime[0]+"",n.time_start=n.time_start.slice(0,n.time_start.length-3),n.time_end=n.orderTime[1]+"",n.time_end=n.time_end.slice(0,n.time_end.length-3)):(n.time_start=null,n.time_end=null),delete n.orderTime,Object(s["z"])(this.form.page,{keyword:n}).then((function(e){var n=e.data,o=e.pagination;t.list=n,t.pagination=o}))}},mounted:function(){this.form=this.getQuery(),this.promoterOrderList()},render:function(){var e=this,t=arguments[0],n=this,o=[{label:"订单号",value:"order_sn"},{label:"商品名称",value:"goods_name"},{label:"买家昵称",value:"buyer_nickname"},{label:"买家手机号",value:"buyer_mobile"},{label:"收货人姓名",value:"consignee_name"},{label:"收货人手机号",value:"consignee_mobile"},{label:"商品货号",value:"goods_sn"}],r=[{label:"全部",value:""},{label:"微信小程序",value:"weapp"},{label:"公众号",value:"wechat"}],a=[{label:"全部",value:null},{label:"待结算",value:"0"},{label:"已结算",value:"1"}];return t("div",{class:"le-main"},[t("el-form",{class:"le-card",attrs:{"label-width":"112px",inline:!0}},[t("el-form-item",{attrs:{label:"订单搜索"},class:"le-order--search"},[t("el-input",i()([{attrs:{placeholder:"请输入内容"}},{nativeOn:{keyup:function(e){"Enter"===e.key&&n.promoterOrderList()}}},{attrs:{clearable:!0},on:{clear:function(){n.promoterOrderList()}},model:{value:n.form.search,callback:function(t){e.$set(n.form,"search",t)}}}]),[t("el-select",{slot:"prepend",attrs:{placeholder:"请选择"},model:{value:n.form.search_key,callback:function(t){e.$set(n.form,"search_key",t)}}},[o.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])])]),t("el-form-item",{attrs:{label:"订单来源"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.source,callback:function(t){e.$set(n.form,"source",t)}}},[r.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])]),t("el-form-item",{attrs:{label:"佣金状态"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.status,callback:function(t){e.$set(n.form,"status",t)}}},[a.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])]),t("el-form-item",{attrs:{label:"下单时间"}},[t("el-date-picker",{attrs:{size:"small",type:"datetimerange","value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:n.form.orderTime,callback:function(t){e.$set(n.form,"orderTime",t)}}})]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary"},on:{click:n.filter}},["筛选"]),t("el-button",{on:{click:n.empty}},["清空"])])]),t("div",{class:"le-card"},[t("div",{class:"le-table--wrapper"},[t("table",{class:"le-table"},[t("thead",{class:"le-table--head"},[t("tr",[t("td",["商品描述"]),t("td",["单价/数量"]),t("td",["买家/收货人"]),t("td",["商品实付金额"]),t("td",["商品利润"]),t("td",["佣金状态"]),t("td",["佣金金额"])])]),t("tbody",{class:"le-table--body"},[function(){return n.list.length>0?n.list.map((function(n){return[[t("tr",{class:"le-body--empty"},[t("td",{attrs:{colSpan:"7"}})])],[t("tr",{class:"le-order--head"},[t("td",{attrs:{colSpan:"7"}},[t("span",{class:"le-order--time"},[e.$moment(new Date(1e3*n.created_time)).format("Y-MM-DD HH:mm:ss")]),t("span",{class:"le-order--text"},["订单号："]),t("span",{class:"le-order--number"},[n.order_sn]),function(){if("weapp"===n.order.source){var e="小程序",o="le-icon-xiaochengxu";return[[t("span",{class:"le-icon le-platform--icon "+o})],[t("span",{class:"le-order--text"},[e])]]}if("wechat"===n.order.source){var r="公众号",a="le-icon-wehcat";return[[t("span",{class:"le-icon le-platform--icon "+a})],[t("span",{class:"le-order--text"},[r])]]}}()])])],[t("tr",{class:"le-order--info"},[t("td",{class:"flex"},[t("el-image",{class:"le-order--image",attrs:{src:n.orderGoods.goods_image}}),t("div",{class:"le-order--content flex-sub"},[t("div",{class:"flex "},[t("div",{class:"le-goods--name"},[n.orderGoods.goods_name])]),t("div",{class:"le-goods--attr"},[n.orderGoods.goods_param])])]),t("td",[t("div",{class:"le-goods--number"},["¥",n.orderGoods.goods_price,t("br"),"X",n.orderGoods.goods_number])]),t("td",{class:"le-contact-person"},[t("div",{class:"le-buyer"},[n.user.nickname]),t("div",{class:"le-receiver"},[n.buyer.name,t("br"),n.buyer.mobile])]),t("td",{class:"le-amount-paid"},["¥",n.total_amount]),t("td",{class:"le-amount-paid"},["¥",n.profits_amount]),t("td",{class:"le-order--status"},[function(){var e="",o="";return 1===n.status?(e="success",o="已结算"):0===n.status?(e="warning",o="待结算"):-1===n.status&&(o="已失效"),t("el-tag",{attrs:{effect:"plain",size:"medium",type:e}},[o])}()]),t("td",{class:"le-level"},[t("div",["一级佣金：￥",n.commission.first.commission,"    分销员：",n.commission.first.user]),function(){if(n.commission.second)return t("div",["二级佣金：￥",n.commission.second.commission,"    分销员：",n.commission.second.user])}(),function(){if(n.commission.third)return t("div",["三级佣金：￥",n.commission.third.commission,"    分销员：",n.commission.third.user])}()])])]]})):t("tr",{class:"le-empty"},[t("td",{attrs:{colSpan:"7"}},["暂无数据"])])}()])])]),t("div",{class:"flex le-pagination justify-end"},[t("el-pagination",{attrs:{background:!0,"current-page":n.form.page,layout:"prev, pager, next, jumper","page-count":n.pagination.pageCount},on:{"current-change":n.switchPage}})])])])}},d=l,f=(n("5ecf"),n("4ac2")),m=Object(f["a"])(d,o,r,!1,null,"e63b5fe8",null);t["default"]=m.exports}}]);