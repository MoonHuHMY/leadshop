(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-recruit"],{"56e7":function(t,n,e){"use strict";e("c00f")},6475:function(t,n,e){"use strict";e.r(n);var i,o,r=e("4c02"),s=e.n(r),l=(e("b1fa"),e("9932")),a=e.n(l),c=e("5fd4"),d=e.n(c),p=e("0e28"),f=e("2573"),u=e("8f98"),h='\n      <img src="https://qmxq.oss-cn-hangzhou.aliyuncs.com/promoter/recruit-1.png" width="100%" style="display: block">\n      <div style="width: 100%;background-color: #3A18AB;overflow: hidden;">\n        <div style="padding: 0 16px">\n            <div style="background-color: #ffffff;border-radius: 8px;padding: 20px 20px;font-size: 13px;font-weight: 500;color: #222222;">【店铺名称】诚挚邀请你加入我们的分销员团队，无任何成本，不用您处理订单和售后，即可成为我们的分销员，你只需将高品质商品分享推荐给他人，赚取佣金。欢迎您和我们一起分享喜悦！</div>\n        </div>\n        <div style="position: relative;">\n          <img src="https://qmxq.oss-cn-hangzhou.aliyuncs.com/promoter/recruit-2.png" width="100%" alt="">\n          <span style="color: #fff;font-size: 16px;font-weight: 400;line-height: 24px;position: absolute;z-index: 10;top:34px;left: 16px">如何成为分销商</span>\n          <div style="background-color: #fff;border-radius: 8px;margin: 0 16px;padding: 20px 20px;font-size: 13px;font-weight: 500;color: #222222;">\n              √ 阅读此招募令内容，点击底部成为分销商按钮<br/>\n              √ 根据指引，完成申请流程，提交申请信息\n          </div>\n        </div>\n        <div style="position: relative;">\n            <img src="https://qmxq.oss-cn-hangzhou.aliyuncs.com/promoter/recruit-3.png" width="100%" alt="">\n            <span style="color: #fff;font-size: 16px;font-weight: 400;line-height: 24px;position: absolute;z-index: 10;top:34px;left: 16px">如何赚取佣金</span>\n            <div style="background-color: #fff;border-radius: 8px;margin: 0 16px;padding: 20px 20px;font-size: 13px;font-weight: 500;color: #222222;">\n                A. 点击商品详情页的【分享】按钮，将商品链接或商  &nbsp;&nbsp;&nbsp;&nbsp;品海报分享给好友<br/>\n                B. 其他人通过分享的链接或海报，进入到商品详情页  &nbsp;&nbsp;&nbsp;&nbsp;并购买商品<br/>\n                C. 订单过售后时间后，系统自动结算佣金\n            </div>\n          </div>\n          <div style="position: relative;">\n            <img src="https://qmxq.oss-cn-hangzhou.aliyuncs.com/promoter/recruit-4.png" width="100%" alt="">\n            <span style="color: #fff;font-size: 16px;font-weight: 400;line-height: 24px;position: absolute;z-index: 10;top:34px;left: 16px">如何提现佣金</span>\n            <div style="background-color: #fff;border-radius: 8px;margin: 0 16px;padding: 20px 20px;font-size: 13px;font-weight: 500;color: #222222;">\n                A. 进入到分销员中心，查看待提现佣金<br/>\n                B. 点击待提现佣金，进入到提现页面，根据指引，完  &nbsp;&nbsp;&nbsp;&nbsp;成提现申请<br/>\n                C. 商家收到提现申请后，将佣金打款至提现账户\n            </div>\n          </div>\n          <div style="position: relative;">\n            <img src="https://qmxq.oss-cn-hangzhou.aliyuncs.com/promoter/recruit-5.png" width="100%" alt="">\n            <span style="color: #fff;font-size: 16px;font-weight: 400;line-height: 24px;position: absolute;z-index: 10;top:34px;left: 16px">联系我们</span>\n            <div style="background-color: #fff;border-radius: 8px;margin: 0 16px;padding: 8px 20px;">\n                <div style="height: 50px;border-bottom: 1px solid #E5E5E5;line-height: 50px;">\n                   <span style="font-size: 13px;font-weight: 500;color: #222222;display: inline-block;width: 60px;margin-right: 8px">联系人</span>\n                   <span style="font-size: 13px;font-weight: 500;color: #999999;">请填写联系人姓名</span>\n                </div>\n                <div style="height: 50px;border-bottom: 1px solid #E5E5E5;line-height: 50px;">\n                   <span style="font-size: 13px;font-weight: 500;color: #222222;display: inline-block;width: 60px;margin-right: 8px">手机号</span>\n                   <span style="font-size: 13px;font-weight: 500;color: #999999;">请填写手机号</span>\n                </div>\n                <div style="height: 50px;line-height: 50px;">\n                   <span style="font-size: 13px;font-weight: 500;color: #222222;display: inline-block;width: 60px;margin-right: 8px">邮箱</span>\n                   <span style="font-size: 13px;font-weight: 500;color: #999999;">请填写邮箱</span>\n                </div>\n            </div>\n          </div>\n          <div style="background-color: #3A18AB;overflow: hidden;">\n              <div ref="button" style="background-color: #FFB43E;text-align: center;width: calc(100% - 32px);height: 40px;line-height: 40px;border-radius: 20px;border: none;cursor: pointer;color: #fff;margin: 24px 16px;">申请成为分销商</div>\n          </div>\n      </div>\n    ',g={components:{recruitmentPromotion:f["a"]},data:function(){return{form:{title:"",content:h},rules:{title:[{required:!0,message:"页面标题不能为空"}]},loading:!0,disabled:!0,editor:null,showRecruitmentPromotion:!1}},mounted:function(){var t=this,n=new d.a("#editor");n.config.height=587,n.menus.extend("alertMenuKey",u["a"]),n.config.uploadFile=function(){t.$refs.pictureDialog.handleClick()},n.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","foreColor","backColor","justify","image","undo","redo","alertMenuKey"],n.config.showFullScreen=!1,n.config.zIndex=99,n.create(),this.editor=n,this.editor.config.onchange=function(n){t.form.content=n},Object(p["p"])().then((function(n){t.form=n,t.editor.txt.html(t.form.content),t.loading=!1,t.disabled=!1}))},render:function(){var t=this,n=arguments[0],e=this;return n("div",{class:"le-main flex"},[n("div",{class:"le-mobilePreview"},[n("div",{class:"content--title"},[e.form.title]),n("img",{attrs:{height:"80px",width:"340px",src:a.a},class:"le-mobile-head"}),n("div",{class:"le-mobileContent",domProps:{innerHTML:e.form.content}})]),n("div",{class:"flex-sub"},[n("div",{class:"le-card"},[n("div",{class:"le-card-head flex align-center"},[n("span",{class:"le-card-line"}),n("span",["基础信息"])]),n("el-form",s()([{attrs:{"label-width":"133px"},class:"le-form"},{props:{model:e.form,rules:e.rules}}]),[n("el-form-item",{attrs:{label:"页面标题",prop:"title"}},[n("el-input",{attrs:{maxlength:"8","show-word-limit":!0},model:{value:e.form.title,callback:function(n){t.$set(e.form,"title",n)}}})]),n("el-form-item",{attrs:{label:"页面样式"}},[n("el-button",{attrs:{type:"text"},on:{click:e.reset}},["恢复默认"])]),n("el-form-item",{attrs:{label:"推广招募"}},[n("el-button",{attrs:{type:"text"},on:{click:function(){return e.showRecruitmentPromotion=!0}}},["推广"])])])]),n("div",{class:"le-card"},[n("div",{class:"le-card-head flex align-center"},[n("span",{class:"le-card-line"}),n("span",["页面编辑"])]),n("div",{class:"le-editor",attrs:{id:"editor"}})])]),n("div",{class:"le-cardpin"},[n("el-button",{attrs:{type:"primary",loading:e.loading&&!e.disabled,disabled:e.disabled},on:{click:e.saveRecruitMake}},["保存"])]),function(){if(e.showRecruitmentPromotion)return n(f["a"],{model:{value:e.showRecruitmentPromotion,callback:function(n){t.$set(e,"showRecruitmentPromotion",n)}}})}(),n("pictureDialog",{on:{confirm:e.confirm},ref:"pictureDialog",attrs:{limit:10,max:10}})])},methods:{confirm:function(t){for(var n=this.editor,e=0;e<t.length;e++)n.cmd.do("insertHTML",'<img style="width: 100%" src="'.concat(t[e],'"/>'))},saveRecruitMake:function(){var t=this;this.loading=!0,Object(p["J"])(this.form).then((function(){t.$message({type:"success",message:"保存成功"})})).finally((function(){t.loading=!1}))},reset:function(){var t=this;this.$confirm("确认恢复默认样式？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){t.editor.txt.html(h),t.$message({type:"success",message:"恢复默认样式成功!"})})).catch((function(){}))}}},m=g,x=(e("56e7"),e("4ac2")),b=Object(x["a"])(m,i,o,!1,null,"5d5746f1",null);n["default"]=b.exports},"8f98":function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var i=e("78e0"),o=e("b96e"),r=e("83a7"),s=e("4453"),l=e("8595"),a=e("46d3"),c=e("5fd4"),d=e.n(c),p=(d.a.$,d.a.BtnMenu),f=(d.a.DropListMenu,d.a.PanelMenu,d.a.DropList,d.a.Panel,d.a.Tooltip,function(t){Object(s["a"])(e,t);var n=Object(l["a"])(e);function e(t){var o;Object(i["a"])(this,e);var s=d.a.$('<div class="w-e-menu" data-title="Alert">\n                <div>\n                <i class="w-e-icon-image"></i>\n</div>\n            </div>');return o=n.call(this,s,t),Object(a["a"])(Object(r["a"])(o),"editor",void 0),o.editor=t,o}return Object(o["a"])(e,[{key:"clickHandler",value:function(){var t=this.editor,n=t.config,e=n.uploadFile;e&&"function"===typeof e&&e()}},{key:"tryChangeActive",value:function(){this.active()}}]),e}(p))},c00f:function(t,n,e){}}]);