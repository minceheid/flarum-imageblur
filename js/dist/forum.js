module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["forum/components/PostsUserPage"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionsUserPage"]},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(1),c=r(2),i=r.n(c),a=r(3),f=r.n(a),s=r(4),l=r.n(s),m=r(5),p=r.n(m);o.a.initializers.add("minceheid/imageblur",(function(){[i.a,f.a,l.a,p.a].forEach((function(e){Object(u.extend)(e.prototype,"view",(function(e){if(o.a.session.user);else{var t=document.createElement("style");t.innerHTML=".flarum-img { filter: blur(5px); } .Search-input { display:none; }";var r=document.querySelector("script");r.parentNode.insertBefore(t,r)}document.querySelectorAll('div.Post-body img[title="flarum-img"]:not([class*="flarum-img"])').forEach((function(e){e.setAttribute("class","flarum-img")}))}))}))}))}]);
//# sourceMappingURL=forum.js.map