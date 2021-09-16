(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins/practical/live/addLiveGood"],{"4e4f":function(e,r,o){},7397:function(e,r,o){"use strict";o("4e4f")},a0ce:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",staticClass:"le-main le-card",attrs:{rules:e.rules,model:e.form,"label-width":"217px"}},[o("el-form-item",{staticClass:"le-search--id",attrs:{label:"选择商品",prop:"goods"}},[o("el-button",{attrs:{plain:"",disabled:Object.keys(e.form.goods).length>0},on:{click:e.getGoodDetail}},[e._v("选择商品")]),o("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},on:{confirm:e.confirmGoods},model:{value:e.form.goods,callback:function(r){e.$set(e.form,"goods",r)},expression:"form.goods"}}),Object.keys(e.form.goods).length>0?o("div",{staticClass:"flex le-goods"},[o("el-image",{staticClass:"le-goods--image",attrs:{src:e.form.goods.slideshow[0]}}),o("div",{staticClass:"le-goods--name flex-sub"},[e._v(" "+e._s(e.form.goods.name)+" ")]),e.disabledEdit?e._e():o("el-button",{attrs:{type:"text"},on:{click:function(r){e.form.goods={}}}},[e._v("移除")])],1):e._e()],1),o("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[o("el-input",{attrs:{disabled:e.disabledEdit,maxlength:"14","show-word-limit":"",placeholder:"请输入商品名称"},model:{value:e.form.goods_name,callback:function(r){e.$set(e.form,"goods_name",r)},expression:"form.goods_name"}})],1),o("el-form-item",{attrs:{label:"商品封面",prop:"pic_url"}},[o("div",{staticClass:"select-cover__120",class:[e.disabledEdit?"le-still":""]},[o("pictureDialog",{attrs:{disabled:e.disabledEdit,limit:1},scopedSlots:e._u([{key:"preview",fn:function(r){return o("div",{staticClass:"select-cover__120-edit"},[o("el-image",{attrs:{src:r.url,fit:"cover"}}),e.disabledEdit?e._e():o("div",{staticClass:"select-cover__120-tips"},[o("span",[e._v("替换")]),e._v(" | "),o("span",{on:{click:function(r){return r.stopPropagation(),function(r){return e.form.pic_url=""}.apply(null,arguments)}}},[e._v("删除")])])],1)}}]),model:{value:e.form.pic_url,callback:function(r){e.$set(e.form,"pic_url",r)},expression:"form.pic_url"}},[o("div",{staticClass:"select-cover__120-add",attrs:{slot:"upload"},slot:"upload"},[o("i",{staticClass:"le-icon le-icon-add select-cover__120-icon"}),o("span",{staticClass:"select-cover__120-text"},[e._v("添加图片")])])])],1),o("div",{staticClass:"le-prompt-text"},[e._v("建议尺寸：300像素 * 300像素，图片大小不得超过1M")])]),o("el-form-item",{attrs:{label:"商品价格",prop:"price_type"}},[o("el-radio-group",{on:{change:e.priceTypeChange},model:{value:e.form.price_type,callback:function(r){e.$set(e.form,"price_type",r)},expression:"form.price_type"}},[o("el-radio",{attrs:{label:1}},[e._v("一口价")]),o("el-radio",{attrs:{label:2}},[e._v("价格区间")]),o("el-radio",{attrs:{label:3}},[e._v("折扣价")])],1),1===e.form.price_type?o("div",[o("el-input",{on:{input:function(r){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(r){e.$set(e.form,"price",r)},expression:"form.price"}},[o("template",{slot:"append"},[e._v("元")])],2)],1):2===e.form.price_type?o("div",{staticClass:"le-small-input"},[o("el-input",{on:{input:function(r){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(r){e.$set(e.form,"price",r)},expression:"form.price"}},[o("template",{slot:"append"},[e._v("元")])],2),o("span",[e._v("至")]),o("el-input",{on:{input:function(r){return e.formatNum(e.form.price2,"price2")}},model:{value:e.form.price2,callback:function(r){e.$set(e.form,"price2",r)},expression:"form.price2"}},[o("template",{slot:"append"},[e._v("元")])],2)],1):3===e.form.price_type?o("div",{staticClass:"le-small-input"},[o("span",[e._v("原价")]),o("el-input",{on:{input:function(r){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(r){e.$set(e.form,"price",r)},expression:"form.price"}},[o("template",{slot:"append"},[e._v("元")])],2),o("span",[e._v("现价")]),o("el-input",{on:{input:function(r){return e.formatNum(e.form.price2,"price2")}},model:{value:e.form.price2,callback:function(r){e.$set(e.form,"price2",r)},expression:"form.price2"}},[o("template",{slot:"append"},[e._v("元")])],2)],1):e._e()],1)],1),o("div",{staticClass:"le-cardpin"},[o("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v("保存")])],1)],1)},i=[],s=o("99a5"),a=(o("6a61"),o("2070"),o("f5bd"),o("b1fa"),o("c5ce"),o("2769"),o("0756"),o("8b43")),l={components:{goodsSelect:a["a"]},data:function(){var e=this,r=function(e,r,o){isNaN(r)&&o("请输入正整数"),o()},o=function(r,o,t){1===o?e.form.price||t("请输入商品价格"):2===o?(e.form.price&&e.form.price2||t("请输入商品价格"),e.form.price>e.form.price2&&t("请正确书写价格区间")):3===o&&(e.form.price&&e.form.price2||t("请输入商品价格")),t()},t=function(e,r,o){r.length>14&&o("商品名称最大为14字符"),o()},i=function(e,r,o){r&&0!==Object.keys(r).length||o("请选择商品"),o()};return{is_show:null,form:{my_goods_id:null,goods_name:"",pic_url:"",price_type:1,price:"",price2:"",page_url:"",goods:{}},rules:{my_goods_id:[{validator:r,trigger:"blur"}],price_type:[{required:!0,message:"请输入商品价格",trigger:"blur"},{validator:o,trigger:"blur"}],pic_url:[{required:!0,message:"请添加商品封面",trigger:"blur"}],goods_name:[{required:!0,message:"请添加商品名称",trigger:"blur"},{validator:t,trigger:"blur"}],goods:[{required:!0,validator:i,trigger:"blur"}]},loading:!1}},computed:{disabledEdit:function(){return this.$route.query.status&&"2"===this.$route.query.status}},created:function(){},watch:{},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var o,t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o=e.$route.query.goodsId,o&&(t=JSON.parse(localStorage.getItem("editLiveGood")),e.form=t,t.is_show||(e.is_show=!0),e.form={my_goods_id:null,goods_name:t.name,pic_url:t.cover_img_base64,price_type:t.price_type,price:t.price,price2:t.price2,page_url:t.new_url,goods_id:t.goods_id,goods:t.goods?t.goods:{}});case 2:case"end":return r.stop()}}),r)})))()},methods:{priceTypeChange:function(){this.form.price="",this.form.price2="",this.$refs["form"].clearValidate("price_type")},getGoodDetail:function(){this.$refs.goodsSelect.handleClick()},submit:function(){var e=this;this.$refs["form"].clearValidate(),this.$refs["form"].validate((function(r){if(r){e.loading=!0;var o=JSON.parse(JSON.stringify(e.form));o.page_url=o.goods.id,delete o.my_goods_id,delete o.goods,e.$heshop.livegoods("post",o).then((function(){e.loading=!1,e.$router.back()})).catch((function(r){e.loading=!1,e.$message.error(r.data.message)}))}}))},formatNum:function(e,r){var o=e.toString();o=o.replace(/。/g,"."),o=o.replace(/[^\d.]/g,""),o=o.replace(/^\./g,""),o=o.replace(/\.{2,}/g,""),o=o.replace(".","$#$").replace(/\./g,"").replace("$#$","."),o=o.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),this.form[r]=o},confirmGoods:function(e){this.form.goods_name=e.name}}},c=l,n=(o("7397"),o("4ac2")),p=Object(n["a"])(c,t,i,!1,null,"33165aa4",null);r["default"]=p.exports}}]);