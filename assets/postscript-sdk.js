!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=63)}({12:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u}));var n=r(9),o=r.n(n),c=function(){return document.currentScript||(t=document.getElementsByTagName("script"))[t.length-1];var t},u=function(t,e){try{var r=e.replace(/[\\[]/,"\\[").replace(/[\]]/,"\\]"),n=new RegExp("[\\?&]".concat(r,"=([^&#]*)")).exec("".concat(t)),c=o()(n,2)[1];return null===c?"":decodeURIComponent(c.replace(/\+/g," "))}catch(t){return null}}},19:function(t,e,r){var n=r(20);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},20:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},23:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},24:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,c=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,c=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}},25:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},63:function(t,e,r){"use strict";r.r(e);var n=r(12);!function(){var t=Object(n.a)(),e="?".concat(t.src.replace(/^[^\\?]+\??/,"")),r=Object(n.b)(e,"shopId"),o="".concat("https://sdk.postscript.io","/sdk.bundle.js?shopId=").concat(r);if(document.getElementById("ps-sdk-loader"))return null;var c=document.createElement("script");c.type="text/javascript",c.id="ps-sdk-loader",c.src=o,document.getElementsByTagName("head")[0].appendChild(c)}()},9:function(t,e,r){var n=r(23),o=r(24),c=r(19),u=r(25);t.exports=function(t,e){return n(t)||o(t,e)||c(t,e)||u()}}});
//# sourceMappingURL=sdk-script-loader.bundle.js.map