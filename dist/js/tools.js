"use strict";function getNewArr1(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),e}function getNewArr2(t){t.sort(function(t,e){return t-e});for(var e=0;e<=t.length-1-1;e++)t[e]===t[e+1]&&(t.splice(e+1,1),e--)}function getNewArr3(t){for(var e=0;e<=t.length-1-1;e++)for(var n=e+1;n<=t.length-1;n++)t[e]===t[n]&&(t.splice(n,1),n--)}function getNewArr4(t){var e={},n=[];for(var r in t.forEach(function(t){e[t]="随便"}),e)n.push(r);return n}function setColor(){return"rgb(".concat(parseInt(256*Math.random()),",").concat(parseInt(256*Math.random()),",").concat(parseInt(256*Math.random()),")")}function myDelCls(t,e){t.className=t.className.replace(e,"")}function getVC(t){for(var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=1;r<=t;r++){var o=e[parseInt(Math.random()*e.length)];-1===n.indexOf(o)?n+=o:r--}return n}function getCountDown(t){var e=new Date(t),n=new Date,r=parseInt((e.getTime()-n.getTime())/1e3),o=parseInt(r/86400);o=o<10?"0"+o:o;var a=parseInt(r%86400/3600);a=a<10?"0"+a:a;var c=parseInt(r%3600/60),s=r%60;return{day:o,hour:a,minute:c=c<10?"0"+c:c,second:s=s<10?"0"+s:s}}function myDelClass(t,e){t.className=t.className.replace(e,"")}function myGetStyle(t,e){return window.getComputedStyle?window.getComputedStyle(t)[e]:t.currentStyle[e]}function getUrlVal(){var t=window.decodeURI(window.location.search).substr(1),n={};return t.split("&").forEach(function(t){var e=t.split("=");n[e[0]]=e[1]}),n}function move(o,a){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},s=0,t=function(n){s++,"opacity"===n&&(a[n]*=100);var r=setInterval(function(){var t="opacity"===n?100*myGetStyle(o,n):parseInt(myGetStyle(o,n)),e=(a[n]-t)/10;t+=e=0<e?Math.ceil(e):Math.floor(e),o.style[n]="opacity"===n?t/100:t+"px",t===a[n]&&(clearInterval(r),0===--s&&c())},20)};for(var e in a)t(e)}function pAjax(t,o,a,c){return new Promise(function(e,n){var r=new XMLHttpRequest;"get"===o?(r.open("get","".concat(t,"?").concat(a)),r.send()):"post"===o&&(r.open("post",t),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(a)),r.onload=function(){var t="";t="json"===c?JSON.parse(r.response):r.response,200<=r.status&r.status<=299?e(t):n(t)}})}