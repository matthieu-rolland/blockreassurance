/*! For license information please see front.js.LICENSE.txt */
(()=>{var e={267:()=>{},379:(e,t,r)=>{"use strict";var n,i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function o(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var d=o(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t,r){var n=r.css,i=r.media,a=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,p=0;function h(e,t){var r,n,i;if(t.singleton){var a=p++;r=v||(v=c(t)),n=d.bind(null,r,a,!1),i=d.bind(null,r,a,!0)}else r=c(t),n=f.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=o(r[n]);a[i].references--}for(var c=s(e,t),l=0;l<r.length;l++){var u=o(r[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=c}}}}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(379),t=r.n(e),n=r(267),i=r.n(n);t()(i(),{insert:"head",singleton:!1}),i().locals,$(window).ready((function(){$(".blockreassurance_product img.svg, .blockreassurance img.svg").each((function(){var e=$(this),t=e.attr("id"),r=e.attr("class"),n=e.attr("src");$.ajax({url:n,type:"GET",success:function(i){if($.isXMLDoc(i)){var a=$(i).find("svg");a=void 0!==t?a.attr("id",t):a,(a=void 0!==r?a.attr("class",r+" replaced-svg"):a.attr("class"," replaced-svg")).removeClass("invisible"),(a=(a=a.attr("data-img-url",n)).removeAttr("xmlns:a")).find("path[fill]").attr("fill",psr_icon_color),a.find("path:not([fill])").css("fill",psr_icon_color),e.replaceWith(a)}e.removeClass("invisible")}})}))}))})()})();
//# sourceMappingURL=front.js.map