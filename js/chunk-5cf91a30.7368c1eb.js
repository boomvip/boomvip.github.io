(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cf91a30"],{"62b0":function(t,n,s){},b7e3:function(t,n,s){"use strict";s.r(n);var e={data:function(){return{list:[],offset:0,size:10,isNextPage:!1}},created:function(){this.getData()},methods:{getData:function(){var s=this;this.$tronWeb.event({contractAddress:this.$contracts.Swap.address,method:"Log_Swaped",fingerprint:this.offset,size:this.size}).then(function(t){t[t.length-1].fingerprint?s.isNextPage=!1:s.isNextPage=!0;for(var n=0;n<t.length;n++)window.tronWeb.address.fromHex(t[n].result.owner)==s.$address&&s.list.unshift({inAmount:t[n].result.inAmount.fromSun(),outAmount:t[n].result.outAmount.fromSun(),time:s.$toTime(t[n].result.time,"Y-M-D H:i")})})}}},s=(s("febc"),s("2877")),e=Object(s.a)(e,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"swapRecord"},[e("div",{staticClass:"title"},[s._v(s._s(s.$t("dui-huan-ji-lu")))]),e("div",{staticClass:"content"},[e("div",[e("span",[s._v(s._s(s.$t("shi-jian-zhuang-tai")))]),e("span",[s._v(s._s(s.$t("dui-huan-shu-liang")))])]),s._l(s.list,function(t,n){return e("div",{key:n},[e("div",[e("span",[s._v("兑换成功")]),e("span",[s._v(s._s(t.time))])]),e("div",[e("span",[s._v("-"+s._s(t.inAmount)+" TRX")]),e("span",[s._v("+"+s._s(t.outAmount)+" BOOM")])])])})],2),e("div",{staticClass:"Pagination"},[e("button",{attrs:{disabled:0===s.offset},on:{click:function(t){s.offset--,s.getData()}}},[e("van-icon",{attrs:{name:"arrow-left"}})],1),e("span",[s._v(s._s(s.offset)+" - "+s._s((s.offset+1)*s.size))]),e("button",{attrs:{disabled:s.isNextPage},on:{click:function(t){s.offset++,s.getData()}}},[e("van-icon",{attrs:{name:"arrow"}})],1)])])},[],!1,null,"4598fb3a",null);n.default=e.exports},febc:function(t,n,s){"use strict";s("62b0")}}]);