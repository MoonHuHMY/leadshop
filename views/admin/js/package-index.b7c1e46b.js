(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-index"],{"070e":function(t,e,a){},1502:function(t,e,a){},"3bd6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"mobile",staticClass:"package",attrs:{id:"min-page",draggable:!1,"data-index":-2},on:{dragover:[function(e){return t.allowDrop(e)},function(t){t.preventDefault()}],drop:t.drop}},[t._l(t.pages,(function(e,n){return a("div",{key:n+1,attrs:{role:"widgetgroup"}},[t.dragActive(n,"top")?a("Covermask"):t._e(),"search"===e.name?a("Search",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"title"===e.name?a("Title",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"navigation"===e.name?a("navigation",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"video"===e.name?a("Video",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"banner"===e.name?a("Banner",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"goods"===e.name?a("Goods",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"blank"===e.name?a("Blank",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"separate"===e.name?a("Separate",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"tabs"===e.name?a("Tabs",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"wechat"===e.name?a("Wechat",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"notice"===e.name?a("Notice",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"rubik"===e.name?a("Rubik",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),"coupon"===e.name?a("Coupon",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),t.$manifest("task","status")?["task"===e.name?a("Task",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e()]:t._e(),"wechatLive"===e.name?a("WechatLive",{attrs:{facade:e.facade,content:e.content,index:n}}):t._e(),t.dragActive(n,"down")?a("Covermask"):t._e()],2)})),a("div",{staticClass:"package-empty",attrs:{"data-index":-2}},[t.dragActive(-2,"down")?a("Covermask",{attrs:{"data-index":-2}}):t._e()],1)],2)},i=[],o=(a("ac1f"),a("841c"),a("188b")),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"covermask",attrs:{"data-type":"forbid"}},[a("span",[t._v("释放鼠标将组建添加到此处")])])}],r={computed:{coms:function(){return this.$store.state.finish.coms}}},d=r,f=(a("8fd3"),a("2877")),u=Object(f["a"])(d,s,c,!1,null,"2fd8b5e5",null),g=u.exports,h={components:{Title:o["a"].title.widget,Video:o["a"].video.widget,Separate:o["a"].separate.widget,Blank:o["a"].blank.widget,Banner:o["a"].banner.widget,Search:o["a"].search.widget,Goods:o["a"].goods.widget,Navigation:o["a"].navigation.widget,Rubik:o["a"].rubik.widget,Tabs:o["a"].tabs.widget,Notice:o["a"].notice.widget,Wechat:o["a"].wechat.widget,Coupon:o["a"].coupon.widget,Task:o["a"].task.widget,WechatLive:o["a"].wechatLive.widget,Covermask:g},data:function(){return{is_empty:!1}},computed:{dragIndex:{get:function(){return this.$store.state.finish.dragIndex},set:function(t){this.$store.commit("finish/setDragIndex",t)}},position:{get:function(){return this.$store.state.finish.position},set:function(t){this.$store.commit("finish/setDragPosition",t)}},select:function(){return this.$store.state.finish.index},pages:{get:function(){return this.$store.state.finish.pages},set:function(t){this.$store.commit("finish/setPagesData",t)}},coms:function(){return this.$store.state.finish.coms}},mounted:function(){this.loadPageInfo()},methods:{loadPageInfo:function(){var t=this,e=this.$route.query.id;this.$heshop.pages("get",parseInt(e)).then((function(e){t.pages=JSON.parse(e.content),t.$store.commit("finish/setPageInfo",e)})).catch((function(t){console.error("错误信息",t)}))},dragActive:function(t,e){return!(this.dragIndex!==t||this.position!=e||!this.coms)},allowDrop:function(t){var e=parseInt(t.target.dataset.index);if((e||0===e)&&(this.dragIndex=e,"dragover"===t.type&&t.target.dataset&&"widget"===t.target.dataset.type)){var a=parseFloat(t.offsetY),n=parseFloat(t.target.clientHeight/4);this.position=a<n?"top":"down"}-2==e&&(this.dragIndex=e,this.position="down"),t.preventDefault()},drop:function(){this.$store.dispatch("finish/pushPagesComs")},draggableStart:function(){this.$store.commit("finish/setLock",!0)},draggableEnd:function(){this.$store.commit("finish/setLock",!1)}}},p=h,m=(a("7093"),Object(f["a"])(p,n,i,!1,null,"a74e79ee",null));e["default"]=m.exports},7093:function(t,e,a){"use strict";a("070e")},"8fd3":function(t,e,a){"use strict";a("1502")}}]);