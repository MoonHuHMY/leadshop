(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b32af0"],{"1d81":function(e,t,s){},"4a39":function(e,t,s){"use strict";s.r(t);var o,a,n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-main"},[s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"le-card",attrs:{"label-width":"200px"}},[s("div",{staticClass:"le-card--header flex align-center"},[s("span",{staticClass:"le-sign"}),s("span",[e._v("直播商品")])]),s("el-form-item",{attrs:{label:"直播间信息"}},[s("div",{staticClass:"le-goods flex"},[s("img",{attrs:{src:e.form.feeds_img_base64,alt:"",width:"64px",height:"64px"}}),s("div",{staticClass:"le-goods--info flex-sub"},[s("div",{staticClass:"le-goods--name"},[e._v(e._s(e.form.name))]),s("div",{staticClass:"le-goods-assist"},[e._v(" 房间号："+e._s(e.form.room_id)),s("br"),e._v(" 主播："+e._s(e.form.anchor_name)+" ")])])])]),s("el-form-item",{attrs:{label:"添加商品"}},[s("el-button",{staticClass:"le-selectProduct--btn",attrs:{type:"primary",plain:""},on:{click:e.getGoods}},[e._v("选择商品")]),s("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},model:{value:e.goods,callback:function(t){e.goods=t},expression:"goods"}}),s("el-table",{staticClass:"le-table",attrs:{data:e.goods,"max-height":"368px","row-class-name":"le-table-row"}},[s("el-table-column",{attrs:{label:"商品"},scopedSlots:e._u([{key:"default",fn:function(t){return s("div",{staticClass:"flex align-center"},[s("el-image",{staticClass:"le-image",attrs:{src:t.row.cover_img_base64}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",[e._v(" "+e._s(t.row.name)+" ")])],1)}}])}),s("el-table-column",{attrs:{label:"操作",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.removeGood(t.$index)}}},[e._v("移除")])]}}])})],1)],1)],1),s("div",{staticClass:"le-cardpin"},[s("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v("保存")])],1)],1)},i=[],l=(s("f5bd"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"goods-selet",style:[e.goodsStyle]},[s("popup",{ref:"popup",attrs:{type:"checkbox",limit:e.number},on:{confirm:e.handleConfirm},model:{value:e.selectData,callback:function(t){e.selectData=t},expression:"selectData"}},[e.$slots.default?e._e():s("el-button",{attrs:{disabled:e.selectData.length>=e.number}},[e._v("选择商品")])],1),e.isTips?s("span",{staticClass:"goods-selet-tips"},[e._v("最多添加"+e._s(e.number)+"件商品")]):e._e(),s("ul",{staticClass:"goods-selet-list"},[s("draggable",{attrs:{chosenClass:"chosen",forceFallback:"true",animation:"1000"},on:{start:e.onStart,end:e.onEnd},model:{value:e.selectData,callback:function(t){e.selectData=t},expression:"selectData"}},[s("transition-group",e._l(e.selectData,(function(t,o){return s("li",{key:"aa_"+o,staticClass:"goods-selet-item"},[s("div",{staticClass:"goods-item-image"},[s("div",{staticClass:"goods-item-cover",style:{"background-image":"url("+e.getGoodsCover(t.slideshow)+")"}})]),s("div",{staticClass:"goods-selet-item__close",on:{click:function(t){return e.handleClose(o)}}},[s("i",{staticClass:"le-icon le-icon-cha2"})])])})),0)],1)],1)],1)}),r=[],c=s("dc45"),d=(s("e186"),s("e1d4"),s("a5c9"),s("23db"),s("b1fa"),s("4c02")),u=s.n(d),f=s("7e2d"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"goods-selet__table"},["radio"==e.self.type?s("el-radio-group",{on:{change:e.handleChange},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[s("el-table",{ref:"multipleTable",attrs:{data:e.goodsData}},[s("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(t){return[s("span",{staticStyle:{"padding-left":"30px"}},[e._v("商品")])]}},{key:"default",fn:function(t){return[s("div",{staticClass:"goods-selet__table-item"},[s("div",{staticClass:"goods-selet__table-radio"},[s("el-radio",{attrs:{label:t.row.id}},[s("span")])],1),s("div",{staticClass:"goods-selet__table-cover"},[s("Picture",{attrs:{src:e.getGoodsCover(t.row.slideshow)}})],1),s("div",{staticClass:"goods-selet__table-detail"},[e._v(" "+e._s(t.row.name)+e._s(t.row.id)+" ")])])]}}],null,!1,2610205282)}),s("el-table-column",{attrs:{label:"商品价格",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" ￥"+e._s(t.row.price)+" ")]}}],null,!1,1546378517)}),s("el-table-column",{attrs:{prop:"stocks",label:"库存",width:"160"}})],1)],1):e._e(),"checkbox"==e.self.type?s("el-table",{ref:"multipleTable",attrs:{data:e.goodsData,"tooltip-effect":"dark","row-key":"goods_id"},on:{"selection-change":e.handleChange}},[s("el-table-column",{attrs:{type:"selection",width:"40","reserve-selection":!0,selectable:e.selectEnable}}),s("el-table-column",{attrs:{label:"商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"goods-selet__table-item"},[s("div",{staticClass:"goods-selet__table-cover"},[s("Picture",{attrs:{src:e.getGoodsCover(t.row.cover_img_base64)}})],1),s("div",{staticClass:"goods-selet__table-detail"},[e._v(" "+e._s(t.row.name)+" ")])])]}}],null,!1,1390174113)}),s("el-table-column",{attrs:{label:"商品价格",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" ￥"+e._s(t.row.price)+" ")]}}],null,!1,1546378517)})],1):e._e(),s("div",{staticClass:"goods-selet__goodspage"},[s("el-pagination",{attrs:{layout:"prev, pager, next,jumper",background:"","page-size":e.pageInfo.size,"current-page":e.pageInfo.current,total:e.pageInfo.total},on:{"current-change":e.handleSizeChange}})],1)],1)},h=[],m=(s("eb62"),s("1fc5")),p=s("7736"),b=Object(p["a"])("liveGoods"),_=b.mapState,v=b.mapActions,y={components:{Picture:m["a"]},inject:["self"],data:function(){return{select:0}},props:{limit:{type:Number,default:1}},computed:Object(f["a"])({},_(["goodsData","pageInfo"])),mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleSizeChange(1);case 1:case"end":return t.stop()}}),t)})))()},methods:Object(f["a"])(Object(f["a"])({},v(["handleGoods"])),{},{handleChange:function(e){if("radio"==this.self.type)for(var t in this.goodsData){var s=this.goodsData[t];if(s.goods_id==e){this.self.selectData=JSON.parse(JSON.stringify(s));break}}"checkbox"==this.self.type&&(this.self.value.length+e.length>this.self.limit?this.$message({message:"选多选"+this.self.limit+"件商品",type:"warning"}):this.self.selectData=e)},querySearch:function(e,t){this.$heshop.livegoods("GET",{status:2,limit:20,page:1}).then((function(e){var s=[];e.list.map((function(e){s.push({value:e.name})})),t(s)})).catch((function(e){console.error("错误提示",e)}))},createFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},handleSearch:function(){var e=this;this.handleGoods({current:1,keyword:{search:this.keyword}}).then((function(t){e.toggleSelection(t)}))},toggleSelection:function(e){},selectEnable:function(e,t){return!this.self.value||!this.self.value.some((function(t){return t.goods_id==e.goods_id}))},getRowKeys:function(e){return e.id},handleSizeChange:function(e){var t=this;this.handleGoods({current:e,keyword:{}}).then((function(e){t.toggleSelection(e)}))},getGoodsCover:function(e){return e||"http://qmxq.oss-cn-hangzhou.aliyuncs.com/le-default-goods-bg.png"}})},C=y,w=(s("9cec"),s("5d22")),k=Object(w["a"])(C,g,h,!1,null,"5e30089e",null),S=k.exports,x=Object(p["a"])("liveGoods"),O=x.mapActions,D={components:{Table:S},provide:function(){return{self:this}},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},data:{type:[String,Number,Boolean,Object,Array],default:""},select:{type:Boolean,default:!1},type:{type:String,default:"radio"},limit:{type:Number,default:1}},data:function(){return{selectData:null,dialogVisible:!1}},computed:{},created:function(){},watch:{},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"checkbox"==e.type?e.selectData=[]:e.selectData={};case 1:case"end":return t.stop()}}),t)})))()},methods:Object(f["a"])(Object(f["a"])({},O(["handleGoods"])),{},{handleClick:function(){this.value.length>=this.limit||(this.dialogVisible=!0)},handleClose:function(){this.dialogVisible=!1},handleConfirm:function(){this.$emit("input",this.selectData),this.$emit("confirm",this.selectData),this.dialogVisible=!1}}),render:function(e){var t=this.dialogVisible,s=this.handleClick,o=this.handleClose,a=this.handleConfirm,n=this.$slots.trigger||this.$slots.default,i={on:{click:s}},l={props:{visible:t,title:"选择商品","before-close":o,width:"880px","destroy-on-close":!0,"append-to-body":!0}};return e("div",{class:"goods-dialog"},[e("div",u()([{class:"goods-dialog-title"},i]),[n]),e("el-dialog",u()([{},l]),[e(S),e("template",{slot:"footer"},[e("el-button",{on:{click:o}},["取 消"]),e("el-button",{attrs:{type:"primary"},on:{click:a}},["确 定"])])])])}},j=D,$=(s("bda8"),Object(w["a"])(j,o,a,!1,null,"42bcb513",null)),G=$.exports,N=s("3335"),J=s.n(N),E={components:{popup:G,draggable:J.a},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},limit:{type:Number,default:50},number:{type:Number,default:50},selectStyle:{type:Object,default:function(){return{}}},type:{type:String,default:"checkbox"},isTips:{type:Boolean,default:function(){return!0}}},data:function(){return{drag:!1,is_drag:!1}},computed:{groupNmae:function(){return"goods"+Date.parse(new Date)},selectData:{get:function(){return this.value},set:function(e){if(this.drag)this.$emit("input",e),this.$emit("change",e),this.is_drag=!1;else{var t=JSON.parse(JSON.stringify(e));t=this.value.concat(t),this.$emit("input",t)}}},goodsStyle:function(){var e={};return Object.assign(this.selectStyle,e)}},created:function(){},watch:{},mounted:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{handleConfirm:function(e){this.$emit("confirm",e)},handleClose:function(e){this.selectData.splice(e,1),this.$emit("remove",this.selectData)},getGoodsCover:function(e){return e&&"[object Array]"==Object.prototype.toString.call(e)?e[0]:e},open:function(){this.$refs.popup.handleClick()},onStart:function(){this.is_drag=!0,this.drag=!0},onEnd:function(){this.drag=!1}}},R=E,z=(s("9f83"),Object(w["a"])(R,l,r,!1,null,"ea0f611c",null)),A=z.exports,I={name:"addGood",components:{goodsSelect:A},data:function(){return{form:{feeds_img_base64:"",goods:[]},goods:[],old_goods_list:[],loading:!1}},mounted:function(){var e=localStorage.getItem("addGoods");e&&(e=JSON.parse(e),this.form.feeds_img_base64=e.feeds_img_base64,this.form.anchor_name=e.anchor_name,this.form.room_id=e.room_id,this.form.name=e.name,this.goods=e.goods,this.old_goods_list=JSON.parse(JSON.stringify(e.goods)))},methods:{getGoods:function(){this.$refs.goodsSelect.open()},removeGood:function(e){this.$delete(this.goods,e)},submit:function(){var e=this;0!==this.goods.length?(this.loading=!0,this.$heshop.live("post",{behavior:"add"},{room_id:this.form.room_id,goods_list:this.goods,old_goods_list:this.old_goods_list}).then((function(){e.loading=!1,e.$router.back(),localStorage.removeItem("addGoods")})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))):this.$message.error("商品不能为空")}}},T=I,B=(s("8308"),Object(w["a"])(T,n,i,!1,null,"39999d94",null));t["default"]=B.exports},"81ce":function(e,t,s){},8308:function(e,t,s){"use strict";s("1d81")},"9cec":function(e,t,s){"use strict";s("fcef")},"9f83":function(e,t,s){"use strict";s("81ce")},bda8:function(e,t,s){"use strict";s("dbec0")},dbec0:function(e,t,s){},fcef:function(e,t,s){}}]);
//# sourceMappingURL=chunk-61b32af0.0359fc5d.js.map