(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1215a2d3"],{"02ac":function(t,e,s){"use strict";var a=s("702e"),i=s("37b3"),r=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,[{key:"isFloat",value:function(t){var e=String(t).indexOf(".")+1;String(t).length;return e>0}},{key:"isIntNum",value:function(t){return!(t<0)||(0===t||"0"===t||0===t||"0.00"===t)}},{key:"isNumber",value:function(t){if(0===t||"0"===t||0===t||"0.00"===t)return!0;var e=/^\d+(\.\d+)?$/,s=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!e.test(t)&&!s.test(t))}},{key:"isPrice",value:function(t){if(0===t||"0"===t||0===t||"0.00"===t)return!0;var e=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;return!!e.test(t)}},{key:"isEmpty",value:function(t){return("undefined"==typeof t||null==t||""==t)&&0!==t}},{key:"isLimit",value:function(t,e){return t>e}}]),t}();e["a"]=new r},2813:function(t,e,s){t.exports=s.p+"img/icon-phone-header.6803d30e.png"},"6f51":function(t,e,s){},"86e2":function(t,e,s){"use strict";s("9b7e")},"9b7e":function(t,e,s){},d6c8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-edit"},[s("div",{staticClass:"task-edit__phone"},[s("div",{staticClass:"task-edit__phone_window"},[t._m(0),s("div",{staticClass:"body"},[s("el-image",{staticStyle:{width:"340px",height:"340px"},attrs:{src:t.covers[0],fit:"fit"}}),s("div",{staticClass:"goods-info"},[s("div",{staticClass:"goods-price"},[s("span",{staticStyle:{"font-size":"22px","font-family":"DINPro","font-weight":"bold",color:"#E60B30"}},[t._v(t._s(t.goodsData.task.task_number))]),s("span",{staticStyle:{"font-size":"11px","font-family":"DINPro","font-weight":"800",color:"#E60B30"}},[t._v(" 积分")]),s("span",{staticStyle:{"font-size":"12px","font-family":"DINPro","font-weight":"bold",color:"#E60B30"}},[t._v(" + ")]),s("span",{staticStyle:{"font-size":"14px","font-weight":"bold",color:"#E60B30"}},[t._v(" ¥")]),s("span",{staticStyle:{"font-size":"22px","font-family":"DINPro","font-weight":"bold",color:"#E60B30"}},[t._v(t._s(t.goodsData.task.task_price))]),s("span",{staticStyle:{"font-size":"11px","font-weight":"500",color:"#999999","text-decoration":"line-through","padding-left":"5px"}},[t._v(t._s(t.goodsData.line_price))])]),s("div",{staticClass:"goods-sales"},[t._v("已销0件")]),t._m(1),s("div",{staticClass:"goods-title"},[t._v(" "+t._s(t.goodsData.name)+" ")])]),t._m(2)],1)])]),s("div",{staticClass:"task-edit__lists task-setting"},[s("el-form",{ref:"form",staticStyle:{width:"100%"},attrs:{model:t.form,"label-width":"100px"}},[s("el-card",{staticClass:"__card"},[s("div",{staticClass:"__card_clearfix",attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("基础信息")])]),s("div",{staticClass:"__card_body",staticStyle:{width:"100%","padding-left":"90px"}},[s("el-form-item",{attrs:{label:"上架状态"}},[s("el-radio-group",{model:{value:t.goodsData.task.goods_is_sale,callback:function(e){t.$set(t.goodsData.task,"goods_is_sale",e)},expression:"goodsData.task.goods_is_sale"}},[s("el-radio",{attrs:{label:1}},[t._v("立即上架")]),s("el-radio",{attrs:{label:0}},[t._v("暂不上架")])],1)],1),s("el-form-item",{attrs:{label:"商品名称"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.goodsData.name,callback:function(e){t.$set(t.goodsData,"name",e)},expression:"goodsData.name"}})],1),s("el-form-item",{attrs:{label:"商品轮播图"}},t._l(t.covers,(function(t,e){return s("div",{key:e,staticClass:"__card_body_img"},[s("img",{attrs:{src:t,alt:""}})])})),0)],1)]),s("el-card",{staticClass:"__card"},[s("div",{staticClass:"__card_clearfix",attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("积分设置")])]),t.goodsData&&1==t.goodsData.param_type&&t.goodsData.task?s("div",{staticClass:"__card_body",staticStyle:{width:"100%","padding-left":"90px"}},[s("el-form-item",{attrs:{label:"可兑换数量","label-width":"120px"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("可兑换数量")]),s("el-input",{attrs:{blur:"(e)=>{ \n                      if(e.target.value =='') $message.error('可兑换数量不能为空') \n                      if(e.target.value>9999999) $message.error(' 可兑换数量不能大于9999999') \n                  }"},model:{value:t.goodsData.task.task_stock,callback:function(e){t.$set(t.goodsData.task,"task_stock",e)},expression:"goodsData.task.task_stock"}},[s("template",{slot:"append"},[t._v("件")])],2)],1),s("el-form-item",{attrs:{label:"积分价格","label-width":"120px"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("积分价格")]),s("el-input",{staticStyle:{width:"140px"},model:{value:t.goodsData.task.task_number,callback:function(e){t.$set(t.goodsData.task,"task_number",e)},expression:"goodsData.task.task_number"}},[s("template",{slot:"append"},[t._v("积分")])],2),t._v(" + "),s("el-input",{staticStyle:{width:"140px"},attrs:{blur:"(e)=>{ \n                      if(e.target.value =='') $message.error('积分价格不能为空') \n                      if(!isPriceNumber(e.target.value)) $message.error('积分价格格式不对') \n                      if(e.target.value>9999999) $message.error(' 积分价格不能大于9999999') \n                  }"},model:{value:t.goodsData.task.task_price,callback:function(e){t.$set(t.goodsData.task,"task_price",e)},expression:"goodsData.task.task_price"}},[s("template",{slot:"append"},[t._v("元")])],2)],1),s("el-form-item",{attrs:{label:"兑换限制","label-width":"120px"}},[s("el-input",{model:{value:t.goodsData.task.task_limit,callback:function(e){t.$set(t.goodsData.task,"task_limit",e)},expression:"goodsData.task.task_limit"}},[s("template",{slot:"append"},[t._v("件/人")])],2)],1)],1):t._e(),t.goodsData&&2==t.goodsData.param_type&&t.goodsData.task?s("div",{staticClass:"__card_body",staticStyle:{width:"971px","padding-top":"0"}},[s("TaskSpecstable",{ref:"specstable",attrs:{goods:t.goodsData}})],1):t._e()])],1),s("div",{staticClass:"task-card-footer"},[s("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("保存")])],1)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("img",{staticClass:"header-bg",attrs:{src:s("2813")}}),a("h3",[t._v("商品详情")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-share"},[s("i",{staticClass:"le-icon le-icon-fenxiang"}),s("p",[t._v("分享")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-pay"},[s("img",{staticClass:"header-bg",attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/task/task-foot-bg.png"}})])}],r=(s("b1fa"),s("aa00"),s("d8d0")),o=s("02ac"),l={components:{TaskSpecstable:r["a"]},data:function(){return{goodsData:{name:"",slideshow:"",param_type:1,line_price:0,task:{task_number:0,task_price:0,goods_is_sale:0}},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},computed:{covers:function(){if(this.goodsData.slideshow){var t=this.goodsData.slideshow;if("[object Array]"===Object.prototype.toString.call(t))return t[0];if("[object String]"===Object.prototype.toString.call(t))try{return JSON.parse(t)}catch(e){return[this.ipAddress+"/le-default-goods-bg.png"]}}return[this.ipAddress+"/le-default-goods-bg.png"]}},filters:{capitalize:function(t){return t.length>=42?t.slice(0,39)+"...":t}},mounted:function(){this.$route.query.id?this.handleLoadData(this.$route.query.id):this.$message.error("商品找不到或不存在")},methods:{isPriceNumber:function(t){if("0"==t||"0."==t||"0.0"==t||"0.00"==t)return t="0",!0;var e=t.indexOf("0"),s=t.length;if(0==e&&s>1){var a=/^[0]{1}[.]{1}[0-9]{1,2}$/;return!!a.test(t)}a=/^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;return!!a.test(t)},handleSubmit:function(t){var e=this,s=this.goodsData,a=!0;if(2==s.param_type){var i=this.handleAffirm();if(i){for(var r in i){var l=JSON.parse(JSON.stringify(i[r]));if(o["a"].isEmpty(l.task_stock))return this.$message.error("可兑换数量不能为空"),a=!1,!1;if(o["a"].isEmpty(l.task_number))return this.$message.error("积分值不能为空"),a=!1,!1;if(o["a"].isEmpty(l.task_price))return this.$message.error("积分价格不能为空"),a=!1,!1;if(o["a"].isFloat(l.task_stock))return this.$message.error("可兑换数量填写错误"),a=!1,!1;if(o["a"].isFloat(l.task_number))return this.$message.error("积分值填写错误"),a=!1,!1;if(o["a"].isFloat(l.task_limit))return this.$message.error("兑换限制填写错误"),a=!1,!1;if(!o["a"].isNumber(l.task_stock))return this.$message.error("可兑换数量必须是数字"),a=!1,!1;if(!o["a"].isNumber(l.task_number))return this.$message.error("积分值必须是数字"),a=!1,!1;if(!o["a"].isNumber(l.task_price))return this.$message.error("积分价格必须是数字"),a=!1,!1;if(!o["a"].isNumber(l.task_limit)&&!o["a"].isEmpty(l.task_limit))return this.$message.error("兑换限制必须是数字"),a=!1,!1;if(!o["a"].isIntNum(l.task_stock))return this.$message.error("可兑换数量不能为负数"),a=!1,!1;if(!o["a"].isIntNum(l.task_number))return this.$message.error("积分值不能为负数"),a=!1,!1;if(!o["a"].isIntNum(l.task_price))return this.$message.error("积分价格不能为负数"),a=!1,!1;if(!o["a"].isIntNum(l.task_limit)&&!o["a"].isEmpty(l.task_limit))return this.$message.error("兑换限制不能为负数"),a=!1,!1;if(o["a"].isLimit(l.task_stock,9999999))return this.$message.error("可兑换数量不能大于9999999"),a=!1,!1;if(o["a"].isLimit(l.task_number,9999999))return this.$message.error("积分值不能大于9999999"),a=!1,!1;if(o["a"].isLimit(l.task_price,9999999))return this.$message.error("积分价格不能大于9999999"),a=!1,!1;if(o["a"].isLimit(l.task_limit,9999999)&&!o["a"].isEmpty(l.task_limit))return this.$message.error("兑换限制不能大于9999999"),a=!1,!1;if(!o["a"].isPrice(l.task_price))return this.$message.error("积分价格格式不正确"),a=!1,!1;if(console.log("task_limit",parseInt(l.task_limit)),console.log("task_stock",parseInt(l.task_stock)),console.log("task_limit>task_stock",l.task_limit),parseInt(l.task_stock),parseInt(l.task_limit)>parseInt(l.task_stock)&&parseInt(l.task_limit)>0)return this.$message.error("兑换限制不能大于可兑换数量"),a=!1,!1}s.param=i}else a=!1}else{var n=JSON.parse(JSON.stringify(s.task));if(console.log("单规格验证数据中"),o["a"].isEmpty(n.task_stock))return this.$message.error("可兑换数量不能为空"),a=!1,!1;if(o["a"].isEmpty(n.task_number))return this.$message.error("积分值不能为空"),a=!1,!1;if(o["a"].isEmpty(n.task_price))return this.$message.error("积分价格不能为空"),a=!1,!1;if(o["a"].isFloat(n.task_stock))return this.$message.error("可兑换数量填写错误"),a=!1,!1;if(o["a"].isFloat(n.task_number))return this.$message.error("积分值填写错误"),a=!1,!1;if(o["a"].isFloat(n.task_limit))return this.$message.error("兑换限制填写错误"),a=!1,!1;if(!o["a"].isNumber(n.task_stock))return this.$message.error("可兑换数量必须是数字"),a=!1,!1;if(!o["a"].isNumber(n.task_number))return this.$message.error("积分值必须是数字"),a=!1,!1;if(!o["a"].isNumber(n.task_price))return this.$message.error("积分价格必须是数字"),a=!1,!1;if(!o["a"].isNumber(n.task_limit)&&!o["a"].isEmpty(n.task_limit))return this.$message.error("兑换限制必须是数字"),a=!1,!1;if(!o["a"].isIntNum(n.task_stock))return this.$message.error("可兑换数量不能为负数"),a=!1,!1;if(!o["a"].isIntNum(n.task_number))return this.$message.error("积分值不能为负数"),a=!1,!1;if(!o["a"].isIntNum(n.task_price))return this.$message.error("积分价格不能为负数"),a=!1,!1;if(!o["a"].isIntNum(n.task_limit)&&!o["a"].isEmpty(n.task_limit))return this.$message.error("兑换限制不能为负数"),a=!1,!1;if(o["a"].isLimit(n.task_stock,9999999))return this.$message.error("可兑换数量不能大于9999999"),a=!1,!1;if(o["a"].isLimit(n.task_number,9999999))return this.$message.error("积分值不能大于9999999"),a=!1,!1;if(o["a"].isLimit(n.task_price,9999999))return this.$message.error("积分价格不能大于9999999"),a=!1,!1;if(o["a"].isLimit(n.task_limit,9999999)&&!o["a"].isEmpty(n.task_limit))return this.$message.error("兑换限制不能大于9999999"),a=!1,!1;if(!o["a"].isPrice(n.task_price))return this.$message.error("积分价格格式不正确"),a=!1,!1;if(console.log("task_limit",parseInt(n.task_limit)),console.log("task_stock",parseInt(n.task_stock)),console.log("task_limit>task_stock",n.task_limit),parseInt(n.task_stock),parseInt(n.task_limit)>parseInt(n.task_stock)&&parseInt(n.task_limit)>0)return this.$message.error("兑换限制不能大于可兑换数量"),a=!1,!1}var c={goods_is_sale:s.task.goods_is_sale,goods_list:[s]};a&&this.$heshop.plugin("post",{include:"task",model:"goods"},c).then((function(t){e.$message({message:"保存成功",type:"success"})})).catch((function(t){console.log("err",t),e.$message.error("保存失败，请检查规格参数是否设置正确")}))},isInteger:function(t){return t%1===0},handleAffirm:function(){var t=this.$refs["specstable"].tableData;if(t){for(var e in t){var s=t[e];if(s.task_number<0||null==s.task_number)return this.$message.error("兑换积分不能为空，不能为负数"),!1;if(s.task_price<0||null==s.task_price)return this.$message.error("兑换价格不能为空"),!1;if(s.task_stock<0||null==s.task_stock)return this.$message.error("可兑换数量不能为空"),!1;if(!this.isInteger(s.task_limit))return this.$message.error("兑换限制必须为整数"),!1;if(!this.isInteger(s.task_number))return this.$message.error("积分值必须为整数"),!1;if(!this.isInteger(s.task_stock))return this.$message.error("可兑换数量必须为整数"),!1;if(s.task_limit>s.task_stock)return this.$message.error("兑换限制不能大于可兑换数量"),!1}return t}return this.$message.error("请先设置规格数据"),!1},handleLoadData:function(t){var e=this;this.$heshop.plugin("get",{id:t,include:"task",model:"goods"}).then((function(t){e.goodsData=t})).catch((function(t){e.$message.error("获取失败，请检查网络")}))}}},n=l,c=(s("ecab"),s("5d22")),u=Object(c["a"])(n,a,i,!1,null,"218d081b",null);e["default"]=u.exports},d8d0:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task__specs"},[t.tableData.length?s("u-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"plTable",staticClass:"task-specs",attrs:{"show-body-overflow":!1,data:t.tableData,height:t.height,"fixed-columns-roll":"","use-virtual":"",showHeaderOverflow:"title","row-height":t.rowHeight,border:!1,"row-key":"id"},on:{"cell-click":t.dataCleansing,"selection-change":t.handleSelectionChange,select:t.selectRow,"select-all":t.selectAll}},[s("u-table-column",{attrs:{type:"selection",width:"34"}}),s("u-table-column",{attrs:{width:"282",keys:"index",label:t.labelName},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"__specs_title"},[s("p",[t._v(t._s(e.row.param_value.replace(/_/,"/")))])])]}}],null,!1,2725384797)}),s("u-table-column",{attrs:{width:"170","column-key":"id"},scopedSlots:t._u([{key:"header",fn:function(e){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("可兑换数量 "),s("el-tooltip",{staticClass:"item",attrs:{content:"可兑换数量与商城商品库存互相独立，互不影响",placement:"top","popper-class":"task-tooltip"}},[s("i",{staticClass:"le-icon le-icon-zhushi1",staticStyle:{position:"relative",top:"-1px","font-size":"13px",color:"#BBBFC8","vertical-align":"middle"}})])]}},{key:"default",fn:function(e){return[s("el-input",{attrs:{blur:"(e)=>{\n                 if(e.target.value=='') $message.error('可兑换数量不能为空')\n                 if(!isInteger(e.target.value)) $message.error('可兑换数量必须为整数')\n                 if(e.target.value>9999999) $message.error('兑换数量不能大于9999999') }"},model:{value:e.row.task_stock,callback:function(s){t.$set(e.row,"task_stock",s)},expression:"scope.row.task_stock"}},[s("template",{slot:"append"},[t._v("件")])],2)]}}],null,!1,3141790980)}),s("u-table-column",{attrs:{width:"310"},scopedSlots:t._u([{key:"header",fn:function(e){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[t._v("*")]),t._v("积分价格 ")]}},{key:"default",fn:function(e){return[s("el-input",{attrs:{blur:"(e)=>{\n                    if(e.target.value=='') $message.error('积分价格不能为空')\n                    if(!isInteger(e.target.value)) $message.error('积分价格必须为整数')\n                    if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                }"},model:{value:e.row.task_number,callback:function(s){t.$set(e.row,"task_number",s)},expression:"scope.row.task_number"}},[s("template",{slot:"append"},[t._v("积分")])],2),s("span",{staticStyle:{display:"inline-block",width:"24px",height:"32px","line-height":"32px","text-align":"center"}},[t._v("+")]),s("el-input",{attrs:{blur:"(e)=>{\n                    if(e.target.value=='') $message.error('积分价格不能为空')\n                    if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                }"},model:{value:e.row.task_price,callback:function(s){t.$set(e.row,"task_price",s)},expression:"scope.row.task_price"}},[s("template",{slot:"append"},[t._v("元")])],2)]}}],null,!1,2925286641)}),s("u-table-column",{attrs:{width:"160"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v(" 兑换限制 ")]}},{key:"default",fn:function(e){return[s("el-input",{attrs:{blur:"(e)=>{\n                    if(e.target.value>9999999) $message.error('兑换限制不能大于9999999')\n                    if(!isInteger(e.target.value)) $message.error('兑换限制必须为整数')\n                    if(e.target.value>scope.row.task_stock) $message.error('兑换限制不能大于可兑换数量')\n                }"},model:{value:e.row.task_limit,callback:function(s){t.$set(e.row,"task_limit",s)},expression:"scope.row.task_limit"}},[s("template",{slot:"append"},[t._v("件/人")])],2)]}}],null,!1,2699424455)})],1):t._e(),s("div",{staticClass:"task__specs_tools"},[s("el-checkbox",{attrs:{indeterminate:t.indeterminate},on:{change:t.handleCheckAllChange,"select-all":t.selectAll},model:{value:t.allCheck,callback:function(e){t.allCheck=e},expression:"allCheck"}},[t._v("批量设置")]),t.selectData.length?s("div",{staticStyle:{display:"inline-block"}},[s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:t.tools[0].visible,callback:function(e){t.$set(t.tools[0],"visible",e)},expression:"tools[0].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:t.tools[0].value,callback:function(e){t.$set(t.tools[0],"value",e)},expression:"tools[0].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.tools[0].visible=!1}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAffirm(0)}}},[t._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("可兑换数量")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:t.tools[1].visible,callback:function(e){t.$set(t.tools[1],"visible",e)},expression:"tools[1].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:t.tools[1].value,callback:function(e){t.$set(t.tools[1],"value",e)},expression:"tools[1].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.tools[1].visible=!1}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAffirm(1)}}},[t._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("积分数")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:t.tools[2].visible,callback:function(e){t.$set(t.tools[2],"visible",e)},expression:"tools[2].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:t.tools[2].value,callback:function(e){t.$set(t.tools[2],"value",e)},expression:"tools[2].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.tools[2].visible=!1}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAffirm(2)}}},[t._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("现金价格")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:t.tools[3].visible,callback:function(e){t.$set(t.tools[3],"visible",e)},expression:"tools[3].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:t.tools[3].value,callback:function(e){t.$set(t.tools[3],"value",e)},expression:"tools[3].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.tools[3].visible=!1}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAffirm(3)}}},[t._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("兑换限制")])],1)],1):t._e()],1)],1)},i=[],r=(s("e1d4"),s("aa00"),s("f5bd"),{components:{},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},goods:{type:[String,Number,Boolean,Object,Array]}},data:function(){return{labelName:"规格",loading:!1,indeterminate:!1,selectData:[],dialogVisible:!0,allCheck:!1,searchValue:"",tools:[{value:"",visible:!1},{value:"",visible:!1},{value:"",visible:!1},{value:"",visible:!1}],tableData:[],height:0,rowHeight:55}},filters:{capitalize:function(t){return t.length>=42?t.slice(0,39)+"...":t}},watch:{goods:function(t){console.log("监听ID比哪壶",t)}},mounted:function(){this.height=400,this.tableData=[],this.loading=!0,this.loadGoodsData(this.goods.id)},methods:{handleCheckAllChange:function(){this.$refs.plTable.toggleAllSelection()},handleSelectionChange:function(t){this.selectData=t,this.allCheck=this.selectData.length===this.tableData.length,this.indeterminate=this.selectData.length>0&&this.selectData.length<this.tableData.length},selectAll:function(t){t.length>0?(this.allCheck=!0,this.indeterminate=!1):this.allCheck=!1},selectRow:function(){this.allCheck&&(this.allCheck=!1)},handleAffirm:function(t){this.tools[t].visible=!1;var e=this.tools[t].value;if(e>=0)for(var s in this.tableData)switch(t){case 0:if(!this.isInteger(e))return void this.$message.error("可兑换数量必须为整数");this.tableData[s]["task_stock"]=e;break;case 1:if(!this.isInteger(e))return void this.$message.error("兑换积分必须为整数");this.tableData[s]["task_number"]=e;break;case 2:this.tableData[s]["task_price"]=e;break;case 3:if(!this.isInteger(e))return void this.$message.error("兑换限制必须为整数");this.tableData[s]["task_limit"]=e;break}else this.$message.error("批量修改的值不能为空或格式错误");this.tools[t].value=""},isInteger:function(t){return t%1===0},setHei:function(t){this.height=t},scrollBottom:function(){this.$refs.plTable.scrollBottom()},pagingScrollTopLeft:function(t){this.$refs.plTable.pagingScrollTopLeft(t,0)},loadGoodsData:function(t){var e=this;this.$heshop.goods("get",t).then((function(t){if(e.labelName="规格名称",t.param.param_data)for(var s in e.labelName="",t.param.param_data){var a=t.param.param_data[s];a.name&&(""==e.labelName?e.labelName=a.name:e.labelName+="/"+a.name)}e.$nextTick((function(){e.tableData=t.param.goods_data,e.loading=!1,setTimeout((function(){var t=document.getElementsByClassName("umy-table-beyond");for(var e in t){var s=t[e];s.removeAttribute&&s.removeAttribute("title")}}),1e3)}))})).catch((function(t){e.loading=!1}))},dataCleansing:function(){setTimeout((function(){var t=document.getElementsByClassName("umy-table-beyond");for(var e in t){var s=t[e];s.removeAttribute&&s.removeAttribute("title")}}),1e3)}}}),o=r,l=(s("86e2"),s("5d22")),n=Object(l["a"])(o,a,i,!1,null,"3d838ec8",null);e["a"]=n.exports},ecab:function(t,e,s){"use strict";s("6f51")}}]);
//# sourceMappingURL=chunk-1215a2d3.5b1d548a.js.map