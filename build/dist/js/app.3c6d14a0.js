(function(e){function t(t){for(var r,i,c=t[0],a=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"155a":function(e,t,n){},"36d9":function(e,t,n){},3795:function(e,t,n){"use strict";var r=n("36d9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-header",{attrs:{height:"70px"}},[r("div",[r("img",{attrs:{src:n("cf05"),width:"30px",height:"30px"}}),r("div",[r("h1",[e._v("Lanhu Agent")]),r("span",[e._v("右侧开启同步实现多设备登录")])])]),r("el-button",{attrs:{icon:"el-icon-s-tools",size:"mini",type:"info",circle:""},on:{click:function(t){e.show=!e.show}}}),r("el-switch",{model:{value:e.sync,callback:function(t){e.sync=t},expression:"sync"}})],1),r("transition",{attrs:{name:"slide-fade"}},[e.show?r("div",{staticClass:"setting"},[r("el-form",{staticClass:"setting__content",attrs:{"label-width":"100px"}},[r("el-form-item",{attrs:{label:"服务器地址"}},[r("el-input",{model:{value:e.server,callback:function(t){e.server=t},expression:"server"}})],1)],1)],1):e._e()]),r("el-main",[r("el-scrollbar",{attrs:{"wrap-class":"list",native:!1}},e._l(e.users,(function(t){return r("user-info",{key:t.email,attrs:{info:t,current:t.email===e.current},on:{check:e.onCheck}})})),1)],1)],1)},s=[],i=(n("07ac"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-info",class:{"is-current":e.current}},[n("el-badge",{attrs:{value:e.info.online||0,type:"success"}},[n("el-avatar",{attrs:{size:50,src:e.info.avatar}},[e._v(" "+e._s(e.info.name)+" ")])],1),n("div",{staticClass:"middle"},[n("span",[e._v(e._s(e.info.name))]),n("span",[e._v(e._s(e.info.email||"/"))])]),e.current?n("span",{staticStyle:{"font-size":"14px",color:"#409eff"}},[e._v("当前用户")]):n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",size:"small",circle:""},on:{click:function(t){return e.$emit("check",e.info.email)}}})],1)}),c=[],a={name:"user-info",props:{info:Object,current:Boolean}},l=a,u=(n("3795"),n("2877")),f=Object(u["a"])(l,i,c,!1,null,null,null),p=f.exports,d=window.chrome&&window.chrome.extension?window.chrome.extension.getBackgroundPage():null,h={name:"app",components:{UserInfo:p},data:function(){return{sync:!0,users:[],current:"",server:"",show:!1}},watch:{sync:function(e){d&&d.toggle(e)},server:function(e){d&&d.changeServer(e)}},created:function(){this.refresh()},methods:{refresh:function(){if(d){var e=d.getBgData(),t=e.data,n=e.config;console.log({data:t,config:n}),t&&n&&(this.users=Object.values(t.user),this.sync=n.enabled,this.current=n.user,this.server=n.server)}},onCheck:function(e){this.current=e,d&&d.setUser(e)}}},v=h,m=(n("5c0b"),Object(u["a"])(v,o,s,!1,null,null,null)),b=m.exports,g=n("5c96"),y=n.n(g);n("0fae");r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("155a"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.33f8923d.png"}});
//# sourceMappingURL=app.3c6d14a0.js.map