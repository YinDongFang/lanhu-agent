(function(e){function n(n){for(var r,s,c=n[0],a=n[1],u=n[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},i=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=a;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"155a":function(e,n,t){},"36d9":function(e,n,t){},3795:function(e,n,t){"use strict";var r=t("36d9"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("el-container",{attrs:{id:"app"}},[r("el-header",{attrs:{height:"70px"}},[r("div",[r("img",{attrs:{src:t("cf05"),width:"30px",height:"30px"}}),r("div",[r("h1",[e._v("Lanhu Agent")]),r("span",[e._v("右侧开启同步实现多设备登录")])])]),r("el-button",{attrs:{icon:"el-icon-s-tools",size:"mini",type:"info",circle:""},on:{click:function(n){e.show=!e.show}}}),r("el-switch",{model:{value:e.sync,callback:function(n){e.sync=n},expression:"sync"}})],1),r("transition",{attrs:{name:"slide-fade"}},[e.show?r("div",{staticClass:"setting"},[r("el-form",{staticClass:"setting__content",attrs:{"label-width":"100px"}},[r("el-form-item",{attrs:{label:"服务器地址"}},[r("el-input",{model:{value:e.server,callback:function(n){e.server=n},expression:"server"}})],1)],1)],1):e._e()]),r("el-main",e._l(e.users,(function(n){return r("user-info",{key:n.email,attrs:{info:n,current:n.email===e.current},on:{check:e.onCheck}})})),1)],1)},i=[],s=(t("07ac"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"user-info",class:{"is-current":e.current}},[t("el-badge",{attrs:{value:e.info.online||0,type:"success"}},[t("el-avatar",{attrs:{size:50,src:e.info.avatar}},[e._v(" "+e._s(e.info.name)+" ")])],1),t("div",{staticClass:"middle"},[t("span",[e._v(e._s(e.info.name))]),t("span",[e._v(e._s(e.info.email||"/"))])]),e.current?t("span",{staticStyle:{"font-size":"14px",color:"#409eff"}},[e._v("当前用户")]):t("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",size:"small",circle:""},on:{click:function(n){return e.$emit("check",e.info.email)}}})],1)}),c=[],a={name:"user-info",props:{info:Object,current:Boolean}},u=a,l=(t("3795"),t("2877")),f=Object(l["a"])(u,s,c,!1,null,null,null),p=f.exports,d=window.chrome&&window.chrome.extension?window.chrome.extension.getBackgroundPage():null,h={name:"app",components:{UserInfo:p},data:function(){return{sync:!0,users:[],current:"",server:"",show:!1}},watch:{sync:function(e){d&&d.toggle(e)},server:function(e){d&&d.changeServer(e)}},created:function(){this.refresh()},methods:{refresh:function(){if(d){var e=d.getBgData(),n=e.data,t=e.config;console.log({data:n,config:t}),n&&t&&(this.users=Object.values(n.user),this.sync=t.enabled,this.current=t.user,this.server=t.server)}},onCheck:function(e){this.current=e,d&&d.setUser(e)}}},v=h,m=(t("5c0b"),Object(l["a"])(v,o,i,!1,null,null,null)),b=m.exports,g=t("5c96"),y=t.n(g);t("0fae");r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("155a"),o=t.n(r);o.a},cf05:function(e,n,t){e.exports=t.p+"img/logo.33f8923d.png"}});
//# sourceMappingURL=app.bebd065a.js.map