(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4339508"],{"1fdc":function(t,e,n){},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),a=n("06cf").f,o=n("50c4"),r=n("5a34"),s=n("1d80"),c=n("ab13"),d=n("c430"),u="".startsWith,l=Math.min,f=c("startsWith"),h=!d&&!f&&!!function(){var t=a(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!h&&!f},{startsWith:function(t){var e=String(s(this));r(t);var n=o(l(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return u?u.call(e,i,n):e.slice(n,n+i.length)===i}})},"3bd6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"mobile",staticClass:"package",attrs:{id:"min-page",draggable:!1,"data-index":-2},on:{dragover:[function(e){return t.allowDrop(e)},function(t){t.preventDefault()}],drop:t.drop}},[t._l(t.pages,(function(e,i){return n("div",{key:i+1,attrs:{role:"widgetgroup"}},[t.dragActive(i,"top")?n("Covermask"):t._e(),"search"==e.name?n("Search",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"title"==e.name?n("Title",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"navigation"==e.name?n("navigation",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"video"==e.name?n("Video",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"banner"==e.name?n("Banner",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"goods"==e.name?n("Goods",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"blank"==e.name?n("Blank",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"separate"==e.name?n("Separate",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"tabs"==e.name?n("Tabs",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"wechat"==e.name?n("Wechat",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"notice"==e.name?n("Notice",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),"rubik"==e.name?n("Rubik",{attrs:{facade:e.facade,content:e.content,index:i}}):t._e(),t.dragActive(i,"down")?n("Covermask"):t._e()],1)})),n("div",{staticClass:"package-empty",attrs:{"data-index":-2}},[t.dragActive(-2,"down")?n("Covermask",{attrs:{"data-index":-2}}):t._e()],1)],2)},a=[],o=(n("841c"),n("ac1f"),n("188b"));function r(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)if(n.push(r.value),e&&n.length===e)break}catch(c){a=!0,o=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(a)throw o}}return n}}var c=n("06c5");function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return r(t)||s(t,e)||Object(c["a"])(t,e)||d()}var l=n("5530"),f=n("2909"),h=(n("d81d"),n("4de4"),n("caad"),n("99af"),n("13d5"),n("b64b"),n("2ca0"),n("a434"),n("aa47")),g=n("8e52");function p(t,e,n){return void 0===n||(t=t||{},t[e]=n),t}function m(t,e){return t.map((function(t){return t.elm})).indexOf(e)}function v(t,e,n,i){if(!t)return[];var a=t.map((function(t){return t.elm})),o=e.length-i,r=Object(f["a"])(e).map((function(t,e){return e>=o?a.length:a.indexOf(t)}));return n?r.filter((function(t){return-1!==t})):r}function b(t,e){var n=this;this.$nextTick((function(){return n.$emit(t.toLowerCase(),Object(l["a"])({},e))}))}function x(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),b.call(e,t,n)}}function w(t){return["transition-group","TransitionGroup"].includes(t)}function O(t){if(!t||1!==t.length)return!1;var e=u(t,1),n=e[0].componentOptions;return!!n&&w(n.tag)}function y(t,e,n){return t[n]||(e[n]?e[n]():void 0)}function $(t,e,n){var i=0,a=0,o=y(e,n,"header");o&&(i=o.length,t=t?[].concat(Object(f["a"])(o),Object(f["a"])(t)):Object(f["a"])(o));var r=y(e,n,"footer");return r&&(a=r.length,t=t?[].concat(Object(f["a"])(t),Object(f["a"])(r)):Object(f["a"])(r)),{children:t,headerOffset:i,footerOffset:a}}function _(t,e){var n=null,i=function(t,e){n=p(n,t,e)},a=Object.keys(t).filter((function(t){return"id"===t||t.startsWith("data-")})).reduce((function(e,n){return e[n]=t[n],e}),{});if(i("attrs",a),!e)return n;var o=e.on,r=e.props,s=e.attrs;return i("on",o),i("props",r),Object.assign(n.attrs,s),n}var C=["Start","Add","Remove","Update","End"],I=["Choose","Unchoose","Sort","Filter","Clone"],j=["Move"].concat(C,I).map((function(t){return"on"+t})),k=null,S={options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},tag:{type:String,default:null},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},D={name:"draggable",inheritAttrs:!1,props:S,data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1}},render:function(t){var e=this.$slots.default;this.transitionMode=O(e);var n=$(e,this.$slots,this.$scopedSlots),i=n.children,a=n.headerOffset,o=n.footerOffset;this.headerOffset=a,this.footerOffset=o;var r=_(this.$attrs,this.componentData);return t(this.getTag(),r,i)},created:function(){null!==this.list&&null!==this.value&&g["b"].error("Value and list props are mutually exclusive! Please set one or another."),"div"!==this.element&&g["b"].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"),void 0!==this.options&&g["b"].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props")},mounted:function(){var t=this;if(this.noneFunctionalComponentMode=this.getTag().toLowerCase()!==this.$el.nodeName.toLowerCase()&&!this.getIsFunctional(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));var e={};C.forEach((function(n){e["on"+n]=x.call(t,n)})),I.forEach((function(n){e["on"+n]=b.bind(t,n)}));var n=Object.keys(this.$attrs).reduce((function(e,n){return e[Object(g["a"])(n)]=t.$attrs[n],e}),{}),i=Object.assign({},this.options,n,e,{onMove:function(e,n){return t.onDragMove(e,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new h["default"](this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){void 0!==this._sortable&&this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){this.updateOptions(t)},deep:!0},$attrs:{handler:function(t){this.updateOptions(t)},deep:!0},realList:function(){this.computeIndexes()}},methods:{getIsFunctional:function(){var t=this._vnode.fnOptions;return t&&t.functional},getTag:function(){return this.tag||this.element},updateOptions:function(t){for(var e in t){var n=Object(g["a"])(e);-1===j.indexOf(n)&&this._sortable.option(n,t[e])}},getChildrenNodes:function(){if(this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick((function(){t.visibleIndexes=v(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode,t.footerOffset)}))},getUnderlyingVm:function(t){var e=m(this.getChildrenNodes()||[],t);if(-1===e)return null;var n=this.realList[e];return{index:e,element:n}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&w(e.$options._componentTag)?e.$parent:!("realList"in e)&&1===e.$children.length&&"realList"in e.$children[0]?e.$children[0]:e},emitChanges:function(t){var e=this;this.$nextTick((function(){e.$emit("change",t)}))},alterList:function(t){if(this.list)t(this.list);else{var e=Object(f["a"])(this.value);t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,Object(f["a"])(t))};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var a=i.realList,o={list:a,component:i};if(e!==n&&a&&i.getUnderlyingVm){var r=i.getUnderlyingVm(n);if(r)return Object.assign(r,o)}return o},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){var e=this.getChildrenNodes();e[t].data=null;var n=this.getComponent();n.children=[],n.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),k=t.item},onDragAdd:function(t){var e=t.item._underlying_vm_;if(void 0!==e){Object(g["d"])(t.item);var n=this.getVmIndex(t.newIndex);this.spliceList(n,0,e),this.computeIndexes();var i={element:e,newIndex:n};this.emitChanges({added:i})}},onDragRemove:function(t){if(Object(g["c"])(this.rootContainer,t.item,t.oldIndex),"clone"!==t.pullMode){var e=this.context.index;this.spliceList(e,1);var n={element:this.context.element,oldIndex:e};this.resetTransitionData(e),this.emitChanges({removed:n})}else Object(g["d"])(t.clone)},onDragUpdate:function(t){Object(g["d"])(t.item),Object(g["c"])(t.from,t.item,t.oldIndex);var e=this.context.index,n=this.getVmIndex(t.newIndex);this.updatePosition(e,n);var i={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:i})},updateProperty:function(t,e){t.hasOwnProperty(e)&&(t[e]+=this.headerOffset)},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=Object(f["a"])(e.to.children).filter((function(t){return"none"!==t.style["display"]})),i=n.indexOf(e.related),a=t.component.getVmIndex(i),o=-1!==n.indexOf(k);return o||!e.willInsertAfter?a:a+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),a=this.context,o=this.computeFutureIndex(i,t);Object.assign(a,{futureIndex:o});var r=Object.assign({},t,{relatedContext:i,draggedContext:a});return n(r,e)},onDragEnd:function(){this.computeIndexes(),k=null}}};"undefined"!==typeof window&&"Vue"in window&&window.Vue.component("draggable",D);var L=D,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"covermask",attrs:{"data-type":"forbid"}},[n("span",[t._v("释放鼠标将组建添加到此处")])])}],E={computed:{coms:function(){return this.$store.state.finish.coms}},methods:{}},F=E,V=(n("f4fd"),n("2877")),P=Object(V["a"])(F,M,T,!1,null,"0195e64d",null),A=P.exports,U={components:{Title:o["a"].title.widget,Video:o["a"].video.widget,Separate:o["a"].separate.widget,Blank:o["a"].blank.widget,Banner:o["a"].banner.widget,Search:o["a"].search.widget,Goods:o["a"].goods.widget,Navigation:o["a"].navigation.widget,Rubik:o["a"].rubik.widget,Tabs:o["a"].tabs.widget,Notice:o["a"].notice.widget,Wechat:o["a"].wechat.widget,vuedraggable:L,Covermask:A},data:function(){return{is_empty:!1}},watch:{coms:function(t){},pages:{deep:!0,handler:function(t,e){}}},computed:{dragIndex:{get:function(){return this.$store.state.finish.dragIndex},set:function(t){this.$store.commit("finish/setDragIndex",t)}},position:{get:function(){return this.$store.state.finish.position},set:function(t){this.$store.commit("finish/setDragPosition",t)}},select:function(){return this.$store.state.finish.index},pages:{get:function(){return this.$store.state.finish.pages},set:function(t){this.$store.commit("finish/setPagesData",t)}},coms:function(){return this.$store.state.finish.coms}},mounted:function(){this.loadPageInfo()},methods:{loadPageInfo:function(){var t=this,e=this.$route.query.id;this.$heshop.pages("get",parseInt(e)).then((function(e){t.pages=JSON.parse(e.content),t.$store.commit("finish/setPageInfo",e)})).catch((function(t){console.error("错误信息",t)}))},dragActive:function(t,e){return!(this.dragIndex!==t||this.position!=e||!this.coms)},allowDrop:function(t){var e=parseInt(t.target.dataset.index);if((e||0===e)&&(this.dragIndex=e,"dragover"==t.type&&t.target.dataset&&"widget"==t.target.dataset.type)){var n=parseFloat(t.offsetY),i=parseFloat(t.target.clientHeight/4);this.position=n<i?"top":"down"}-2==e&&(this.dragIndex=e,this.position="down"),t.preventDefault()},drop:function(t){this.$store.dispatch("finish/pushPagesComs")},draggableStart:function(){this.$store.commit("finish/setLock",!0)},draggableEnd:function(){this.$store.commit("finish/setLock",!1)}}},N=U,W=(n("3d39"),Object(V["a"])(N,i,a,!1,null,"534a3640",null));e["default"]=W.exports},"3d39":function(t,e,n){"use strict";n("1fdc")},"8e52":function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c}));n("5319"),n("ac1f");function i(){return"undefined"!==typeof window?window.console:t.console}var a=i();function o(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var r=/-(\w)/g,s=o((function(t){return t.replace(r,(function(t,e){return e?e.toUpperCase():""}))}));function c(t){null!==t.parentElement&&t.parentElement.removeChild(t)}function d(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}}).call(this,n("c8ba"))},eaa3:function(t,e,n){},f4fd:function(t,e,n){"use strict";n("eaa3")}}]);