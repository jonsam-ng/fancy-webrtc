(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{434:function(n,t,e){var o=e(3),c=e(435);o({global:!0,forced:parseInt!=c},{parseInt:c})},435:function(n,t,e){var o=e(1),c=e(4),r=e(5),i=e(13),a=e(167).trim,u=e(168),s=o.parseInt,l=o.Symbol,f=l&&l.iterator,p=/^[+-]?0x/i,v=r(p.exec),d=8!==s(u+"08")||22!==s(u+"0x16")||f&&!c((function(){s(Object(f))}));n.exports=d?function(n,t){var e=a(i(n));return s(e,t>>>0||(v(p,e)?16:10))}:s},474:function(n,t,e){},530:function(n,t,e){"use strict";e(474)},567:function(n,t,e){"use strict";e.r(t);e(434);var o={name:"FontResizer",methods:{change:function(n){var t,e=document.querySelector("html"),o=parseInt(null===(t=getComputedStyle(e))||void 0===t?void 0:t.fontSize);e.style.fontSize=o+n+"px"}}},c=(e(530),e(19)),r=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("i",{on:{click:function(t){return n.change(-1)}}},[n._v("➖")]),e("i",{on:{click:function(t){return n.change(1)}}},[n._v("➕")])])}),[],!1,null,"0269680a",null);t.default=r.exports}}]);