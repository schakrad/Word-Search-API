parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"agGE":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"Hc8y":[function(require,module,exports) {
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};
},{}],"HAnN":[function(require,module,exports) {
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};
},{}],"kpD3":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"hhHb":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r=/%[sdj%]/g;exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,u=o.length,s=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=u)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),c=o[n];n<u;c=o[++n])h(c)||!S(c)?s+=" "+c:s+=" "+i(c);return s},exports.deprecate=function(t,r){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return exports.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var n,o={};function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(t)?r.showHidden=t:t&&exports._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),p(r,e,r.depth)}function u(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function s(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,t,r){if(e.customInspect&&t&&P(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return v(n)||(n=p(e,n,r)),n}var o=l(e,t);if(o)return o;var i=Object.keys(t),u=c(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(t)),E(t)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(t);if(0===i.length){if(P(t)){var s=t.name?": "+t.name:"";return e.stylize("[Function"+s+"]","special")}if(w(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(z(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return f(t)}var b,h="",m=!1,x=["{","}"];(d(t)&&(m=!0,x=["[","]"]),P(t))&&(h=" [Function"+(t.name?": "+t.name:"")+"]");return w(t)&&(h=" "+RegExp.prototype.toString.call(t)),z(t)&&(h=" "+Date.prototype.toUTCString.call(t)),E(t)&&(h=" "+f(t)),0!==i.length||m&&0!=t.length?r<0?w(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),b=m?a(e,t,r,u,i):i.map(function(n){return y(e,t,r,u,n,m)}),e.seen.pop(),g(b,h,x)):x[0]+h+x[1]}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return x(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,r,n,o){for(var i=[],u=0,s=t.length;u<s;++u)A(t,String(u))?i.push(y(e,t,r,n,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(y(e,t,r,n,o,!0))}),i}function y(e,t,r,n,o,i){var u,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=h(r)?p(e,c.value,null):p(e,c.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return s;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function g(e,t,r){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function d(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function h(e){return null===e}function m(e){return null==e}function x(e){return"number"==typeof e}function v(e){return"string"==typeof e}function O(e){return"symbol"==typeof e}function j(e){return void 0===e}function w(e){return S(e)&&"[object RegExp]"===T(e)}function S(e){return"object"==typeof e&&null!==e}function z(e){return S(e)&&"[object Date]"===T(e)}function E(e){return S(e)&&("[object Error]"===T(e)||e instanceof Error)}function P(e){return"function"==typeof e}function D(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function N(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(t){if(j(n)&&(n=""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(n)){var r=e.pid;o[t]=function(){var e=exports.format.apply(exports,arguments);console.error("%s %d: %s",t,r,e)}}else o[t]=function(){};return o[t]},exports.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=d,exports.isBoolean=b,exports.isNull=h,exports.isNullOrUndefined=m,exports.isNumber=x,exports.isString=v,exports.isSymbol=O,exports.isUndefined=j,exports.isRegExp=w,exports.isObject=S,exports.isDate=z,exports.isError=E,exports.isFunction=P,exports.isPrimitive=D,exports.isBuffer=require("./support/isBuffer");var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[N(e.getHours()),N(e.getMinutes()),N(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}exports.log=function(){console.log("%s - %s",k(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,t){if(!t||!S(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var J="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}function H(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function n(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};r.apply(this,t).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(R,t,u)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(r)),Object.defineProperties(n,t(r)),n}exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(J&&e[J]){var r;if("function"!=typeof(r=e[J]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(u){r(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),J&&Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,t(e))},exports.promisify.custom=J,exports.callbackify=H;
},{"./support/isBuffer":"Hc8y","inherits":"HAnN","process":"kpD3"}],"o5v0":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"T55o":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
var e=arguments[3],t=require("process"),r=/%[sdj%]/g;exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,s=o.length,u=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),c=o[n];n<s;c=o[++n])h(c)||!z(c)?u+=" "+c:u+=" "+i(c);return u},exports.deprecate=function(r,n){if(j(e.process))return function(){return exports.deprecate(r,n).apply(this,arguments)};if(!0===t.noDeprecation)return r;var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var n,o={};function i(e,t){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),x(t)?r.showHidden=t:t&&exports._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),p(r,e,r.depth)}function s(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function u(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,t,r){if(e.customInspect&&t&&D(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return v(n)||(n=p(e,n,r)),n}var o=l(e,t);if(o)return o;var i=Object.keys(t),s=c(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(t)),E(t)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return a(t);if(0===i.length){if(D(t)){var u=t.name?": "+t.name:"";return e.stylize("[Function"+u+"]","special")}if(O(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(w(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return a(t)}var x,h="",b=!1,m=["{","}"];(d(t)&&(b=!0,m=["[","]"]),D(t))&&(h=" [Function"+(t.name?": "+t.name:"")+"]");return O(t)&&(h=" "+RegExp.prototype.toString.call(t)),w(t)&&(h=" "+Date.prototype.toUTCString.call(t)),E(t)&&(h=" "+a(t)),0!==i.length||b&&0!=t.length?r<0?O(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),x=b?f(e,t,r,s,i):i.map(function(n){return g(e,t,r,s,n,b)}),e.seen.pop(),y(x,h,m)):m[0]+h+m[1]}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return m(t)?e.stylize(""+t,"number"):x(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,r,n,o){for(var i=[],s=0,u=t.length;s<u;++s)$(t,String(s))?i.push(g(e,t,r,n,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(e,t,r,n,o,!0))}),i}function g(e,t,r,n,o,i){var s,u,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),$(n,o)||(s="["+o+"]"),u||(e.seen.indexOf(c.value)<0?(u=h(r)?p(e,c.value,null):p(e,c.value,r-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n")):u=e.stylize("[Circular]","special")),j(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function y(e,t,r){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function d(e){return Array.isArray(e)}function x(e){return"boolean"==typeof e}function h(e){return null===e}function b(e){return null==e}function m(e){return"number"==typeof e}function v(e){return"string"==typeof e}function S(e){return"symbol"==typeof e}function j(e){return void 0===e}function O(e){return z(e)&&"[object RegExp]"===A(e)}function z(e){return"object"==typeof e&&null!==e}function w(e){return z(e)&&"[object Date]"===A(e)}function E(e){return z(e)&&("[object Error]"===A(e)||e instanceof Error)}function D(e){return"function"==typeof e}function N(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function A(e){return Object.prototype.toString.call(e)}function J(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(e){if(j(n)&&(n=""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(n)){var r=t.pid;o[e]=function(){var t=exports.format.apply(exports,arguments);console.error("%s %d: %s",e,r,t)}}else o[e]=function(){};return o[e]},exports.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=d,exports.isBoolean=x,exports.isNull=h,exports.isNullOrUndefined=b,exports.isNumber=m,exports.isString=v,exports.isSymbol=S,exports.isUndefined=j,exports.isRegExp=O,exports.isObject=z,exports.isDate=w,exports.isError=E,exports.isFunction=D,exports.isPrimitive=N,exports.isBuffer=require("./support/isBuffer");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function H(){var e=new Date,t=[J(e.getHours()),J(e.getMinutes()),J(e.getSeconds())].join(":");return[e.getDate(),R[e.getMonth()],t].join(" ")}function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}exports.log=function(){console.log("%s - %s",H(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,t){if(!t||!z(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};
},{"./support/isBuffer":"Hc8y","inherits":"HAnN","process":"kpD3"}],"ujkD":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],e=require("object-assign");function r(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function n(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=require("util/"),o=Object.prototype.hasOwnProperty,u=Array.prototype.slice,a="foo"===function(){}.name;function c(t){return Object.prototype.toString.call(t)}function f(e){return!n(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var s=module.exports=q,l=/\s*function\s+([^\(\s]*)\s*/;function p(t){if(i.isFunction(t)){if(a)return t.name;var e=t.toString().match(l);return e&&e[1]}}function g(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function E(t){if(a||!i.isFunction(t))return i.inspect(t);var e=p(t);return"[Function"+(e?": "+e:"")+"]"}function h(t){return g(E(t.actual),128)+" "+t.operator+" "+g(E(t.expected),128)}function y(t,e,r,n,i){throw new s.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function q(t,e){t||y(t,!0,e,"==",s.ok)}function d(t,e,o,u){if(t===e)return!0;if(n(t)&&n(e))return 0===r(t,e);if(i.isDate(t)&&i.isDate(e))return t.getTime()===e.getTime();if(i.isRegExp(t)&&i.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(f(t)&&f(e)&&c(t)===c(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(n(t)!==n(e))return!1;var a=(u=u||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===u.expected.indexOf(e)||(u.actual.push(t),u.expected.push(e),b(t,e,o,u))}return o?t===e:t==e}function m(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function b(t,e,r,n){if(null==t||null==e)return!1;if(i.isPrimitive(t)||i.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=m(t),a=m(e);if(o&&!a||!o&&a)return!1;if(o)return d(t=u.call(t),e=u.call(e),r);var c,f,s=A(t),l=A(e);if(s.length!==l.length)return!1;for(s.sort(),l.sort(),f=s.length-1;f>=0;f--)if(s[f]!==l[f])return!1;for(f=s.length-1;f>=0;f--)if(!d(t[c=s[f]],e[c],r,n))return!1;return!0}function v(t,e,r){d(t,e,!0)&&y(t,e,r,"notDeepStrictEqual",v)}function x(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(r){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function S(t){var e;try{t()}catch(r){e=r}return e}function w(t,e,r,n){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),o=S(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!o&&y(o,r,"Missing expected exception"+n);var u="string"==typeof n,a=!t&&o&&!r;if((!t&&i.isError(o)&&u&&x(o,r)||a)&&y(o,r,"Got unwanted exception"+n),t&&o&&r&&!x(o,r)||!t&&o)throw o}function O(t,e){t||y(t,!0,e,"==",O)}s.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=h(this),this.generatedMessage=!0);var e=t.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=p(e),o=n.indexOf("\n"+i);if(o>=0){var u=n.indexOf("\n",o+1);n=n.substring(u+1)}this.stack=n}}},i.inherits(s.AssertionError,Error),s.fail=y,s.ok=q,s.equal=function(t,e,r){t!=e&&y(t,e,r,"==",s.equal)},s.notEqual=function(t,e,r){t==e&&y(t,e,r,"!=",s.notEqual)},s.deepEqual=function(t,e,r){d(t,e,!1)||y(t,e,r,"deepEqual",s.deepEqual)},s.deepStrictEqual=function(t,e,r){d(t,e,!0)||y(t,e,r,"deepStrictEqual",s.deepStrictEqual)},s.notDeepEqual=function(t,e,r){d(t,e,!1)&&y(t,e,r,"notDeepEqual",s.notDeepEqual)},s.notDeepStrictEqual=v,s.strictEqual=function(t,e,r){t!==e&&y(t,e,r,"===",s.strictEqual)},s.notStrictEqual=function(t,e,r){t===e&&y(t,e,r,"!==",s.notStrictEqual)},s.throws=function(t,e,r){w(!0,t,e,r)},s.doesNotThrow=function(t,e,r){w(!1,t,e,r)},s.ifError=function(t){if(t)throw t},s.strict=e(O,s,{equal:s.strictEqual,deepEqual:s.deepStrictEqual,notEqual:s.notStrictEqual,notDeepEqual:s.notDeepStrictEqual}),s.strict.strict=s.strict;var A=Object.keys||function(t){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};
},{"object-assign":"o5v0","util/":"T55o"}],"nnvw":[function(require,module,exports) {
var global = arguments[3];
var n=arguments[3],o=require("util"),r=require("assert");function e(){return(new Date).getTime()}var t,a=Array.prototype.slice,i={};t=void 0!==n&&n.console?n.console:"undefined"!=typeof window&&window.console?window.console:{};for(var l=[[p,"log"],[w,"info"],[d,"warn"],[m,"error"],[g,"time"],[v,"timeEnd"],[y,"trace"],[h,"dir"],[E,"assert"]],c=0;c<l.length;c++){var u=l[c],f=u[0],s=u[1];t[s]||(t[s]=f)}function p(){}function w(){t.log.apply(t,arguments)}function d(){t.log.apply(t,arguments)}function m(){t.warn.apply(t,arguments)}function g(n){i[n]=e()}function v(n){var o=i[n];if(!o)throw new Error("No such label: "+n);delete i[n];var r=e()-o;t.log(n+": "+r+"ms")}function y(){var n=new Error;n.name="Trace",n.message=o.format.apply(null,arguments),t.error(n.stack)}function h(n){t.log(o.inspect(n)+"\n")}function E(n){if(!n){var e=a.call(arguments,1);r.ok(!1,o.format.apply(null,e))}}module.exports=t;
},{"util":"hhHb","assert":"ujkD"}],"mwQg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grid=void 0;var e=d(require("@babel/runtime/helpers/classCallCheck")),t=d(require("@babel/runtime/helpers/createClass")),r=require("console");function d(e){return e&&e.__esModule?e:{default:e}}var a=function(){function r(){(0,e.default)(this,r),this.wordSelectMode=!1,this.selectedItems=[],this.firstSelectedItem=null,this.gridArea=null,this.words=null,this.foundWords=[]}return(0,t.default)(r,[{key:"getCellsInRange",value:function(e,t){var r=[];if(e.x>t.x||e.y>t.y){var d=[e,t];t=d[0],e=d[1]}if(e.y===t.y)for(var a=e.x;a<=t.x;a++)r.push(this.gridArea.querySelector('td[data-x="'.concat(a,'"][data-y="').concat(t.y,'"]')));else if(e.x===t.x)for(var s=e.y;s<=t.y;s++)r.push(this.gridArea.querySelector('td[data-x="'.concat(t.x,'"][data-y="').concat(s,'"]')));else if(t.y-e.y==t.x-e.x)for(var n=t.y-e.y,i=0;i<=n;i++)r.push(this.gridArea.querySelector('td[data-x="'.concat(e.x+i,'"][data-y="').concat(e.y+i,'"]')));return r}},{key:"renderGrid",value:function(e,t){var r=this,d=document.getElementsByClassName("grid-area")[0];d.lastChild&&d.removeChild(d.lastChild),this.gridArea=d;for(var a=document.createElement("table"),s=document.createElement("tbody"),n=0,i=0;i<e;i++){for(var o=document.createElement("tr"),l=0;l<e;l++){var c=t[n++],u=document.createElement("td"),f=document.createTextNode(c);u.appendChild(f),u.setAttribute("data-x",i),u.setAttribute("data-y",l),u.setAttribute("data-letter",c),o.appendChild(u)}s.appendChild(o)}a.appendChild(s),d.appendChild(a),d.addEventListener("mousedown",function(e){r.wordSelectMode=!0;var t=e.target,d=+t.getAttribute("data-x"),a=+t.getAttribute("data-y");t.getAttribute("data-letter");r.firstSelectedItem={x:d,y:a}}),d.addEventListener("mousemove",function(e){if(r.wordSelectMode){var t=e.target,d=+t.getAttribute("data-x"),a=+t.getAttribute("data-y");t.getAttribute("data-letter");r.selectedItems.forEach(function(e){return e.classList.remove("selected")}),r.selectedItems=r.getCellsInRange(r.firstSelectedItem,{x:d,y:a}),r.selectedItems.forEach(function(e){return e.classList.add("selected")})}}),d.addEventListener("mouseup",function(e){r.wordSelectMode=!1;var t=r.selectedItems.reduce(function(e,t){return e+t.getAttribute("data-letter")},""),d=t.split("").reverse().join("");-1!==r.words.indexOf(t)?r.foundWords.push(t):-1!==r.words.indexOf(d)?r.foundWords.push(d):r.selectedItems.forEach(function(e){return e.classList.remove("selected")}),console.log(r.foundWords),r.selectedItems=[]})}}]),r}();exports.Grid=a;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","console":"nnvw"}],"QvaY":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/regenerator")),r=t(require("@babel/runtime/helpers/asyncToGenerator"));function t(e){return e&&e.__esModule?e:{default:e}}var n=require("./grid"),u=n.Grid,a=document.querySelector(".submit-word");function d(e,r){return c.apply(this,arguments)}function c(){return(c=(0,r.default)(e.default.mark(function r(t,n){var u,a;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/wordgrid?gridSize=".concat(t,"&word=").concat(n));case 2:return u=e.sent,e.next=5,u.text();case 5:return a=e.sent,e.abrupt("return",a.split(" "));case 7:case"end":return e.stop()}},r)}))).apply(this,arguments)}a.addEventListener("click",(0,r.default)(e.default.mark(function r(){var t,n,a,c,o,i;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u,n=document.querySelector("#grid-size").value,a=document.querySelector("#add-word").value,e.next=5,d(n,a);case 5:c=e.sent,t.words=a.split(","),t.renderGrid(n,c),o=document.createTextNode(t.words),(i=document.querySelector(".word-list")).lastChild&&i.removeChild(i.lastChild),i.appendChild(o);case 12:case"end":return e.stop()}},r)})));
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","./grid":"mwQg"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.bc20770a.js.map