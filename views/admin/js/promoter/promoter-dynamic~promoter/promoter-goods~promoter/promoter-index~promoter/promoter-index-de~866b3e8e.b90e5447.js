(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-dynamic~promoter/promoter-goods~promoter/promoter-index~promoter/promoter-index-de~866b3e8e"],{8236:function(e,r,t){"use strict";t("61d9"),t("4822"),t("f667"),t("e7a8");r["a"]={data:function(){},methods:{replaceQuery:function(){var e=Object.assign({},this.$route.query,this.form);this.$router.replace({query:e})},getQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],r=this.$route.query;return Object.keys(r).forEach((function(t){for(var o=0;o<e.length;o++)e[o]===t&&(isNaN(r[t])?r[t]=1:r[t]=parseInt(r[t]))})),Object.assign(this.form,r)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}}}]);