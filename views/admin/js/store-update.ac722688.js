(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["store-update"],{"5ee5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"le-matter"},[t._m(0),e("div",{staticClass:"le-body"},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("div",{staticClass:"le-card"},[1==t.status?e("div",{staticClass:"update-info"},[e("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/install/update.gif",alt:"更新下载安装中，请稍后"}}),e("h3",[t._v(" 更新下载安装中，请稍后... ")]),e("p",[t._v("更新完成前请勿关闭窗口")])]):t._e(),2==t.status?e("div",{staticClass:"update-info"},[e("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/install/succeed.png",alt:"更新下载安装中，请稍后"}}),e("h4",[t._v(" "+t._s(t.msg||"更新完成")+" ")]),e("p",[e("router-link",{attrs:{to:"/"}},[e("el-button",{attrs:{type:"primary"}},[t._v(" 回到后台首页 ")])],1)],1)]):t._e(),3==t.status?e("div",{staticClass:"update-info"},[e("img",{attrs:{src:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/install/error.png",alt:"更新下载安装中，请稍后"}}),e("h4",[t._v(" "+t._s(t.msg||"更新遇到未知错误，请重试")+" ")]),e("p",[e("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.updateSystem(t.token)}}},[t._v("点此重试")])],1)]):t._e()])])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"le-header flex align-center"},[a("img",{staticClass:"le-header-log",attrs:{src:e("9ef1"),alt:""}}),a("div",{staticClass:"le-header-name"},[t._v("LEADSHOP一键更新")])])}],c=e("7e2d"),i=e("7736"),o=e("73ef"),l=e.n(o),u={name:"changelog",computed:Object(c["a"])({},Object(i["c"])({getStore:"setting/getStore"})),data:function(){return{status:1,msg:"",token:""}},methods:{updateSystem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.status=1;var s=this,e=window.location.origin;l()({method:"GET",url:e+"/install.php?_update=1&_token="+t}).then((function(t){console.log("response",t);var e=t.data;0===e.code?s.status=2:2===e.code?(s.status=2,s.msg=e.msg||"已是最新版本"):(s.status=3,s.msg=e.msg||"网络错误，请刷新后重试")})).catch((function(t){s.status=3,s.msg="网络错误，请刷新后重试"}))}},mounted:function(){var t=this;this.$heshop.cloud("post",{action:"update"}).then((function(s){t.token=s,t.updateSystem(s)})).catch((function(s){t.status=3,t.msg="网络错误，请刷新后重试"}))}},r=u,d=(e("764d"),e("5d22")),p=Object(d["a"])(r,a,n,!1,null,"73937308",null);s["default"]=p.exports},"764d":function(t,s,e){"use strict";e("fbce")},"9ef1":function(t,s,e){t.exports=e.p+"img/leashop.dc582fec.png"},fbce:function(t,s,e){}}]);
//# sourceMappingURL=store-update.ac722688.js.map