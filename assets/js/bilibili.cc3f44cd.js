(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={bilibili:0},a={bilibili:0},c=[];function u(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-2130e50c":"6227dd76","chunk-2d0b611d":"5655d68b","chunk-73cbb308":"1abf4d61"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2130e50c":1,"chunk-73cbb308":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-2130e50c":"cb3055e3","chunk-2d0b611d":"31d6cfe0","chunk-73cbb308":"0c04a142"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([2,"chunk-vendors"]),n()})({2:function(e,t,n){e.exports=n("2bd1")},"2bd1":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["gb"])("data-v-ff6c0cb2"),a=o((function(e,t,n,o,a,c){var u=Object(r["N"])("router-view");return Object(r["E"])(),Object(r["i"])(u)})),c={name:"App",data:function(){return{active:0}}};c.render=a,c.__scopeId="data-v-ff6c0cb2";var u=c,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s=[{path:"/bilibili",name:"Bilibili",component:function(){return n.e("chunk-2d0b611d").then(n.bind(null,"1c1f"))},children:[{path:"main-page",name:"MainPage",component:function(){return n.e("chunk-2130e50c").then(n.bind(null,"36c2"))}},{path:"user-info",name:"UserInfo",component:function(){return n.e("chunk-73cbb308").then(n.bind(null,"39b3"))}}]}],l=Object(i["a"])({history:Object(i["b"])("/"),routes:s}),f=l,d=n("b970"),b=(n("157a"),n("bc3a")),p=n.n(b),h=n("5502"),m=Object(h["a"])({state:{user:{username:"Howlyao",img:"/1.jpg",level:"lv2",bCoins:0,mCoins:9,isVip:!0,trend:1,subscribe:19,fan:0}},getters:{getUser:function(e){return e.user}},mutations:{},actions:{},modules:{}}),v=Object(r["h"])(u);p.a.defaults.baseURL="/api",v.config.globalProperties.$axios=p.a,v.use(f).use(d["a"]).use(m).mount("#app")}});
//# sourceMappingURL=bilibili.cc3f44cd.js.map