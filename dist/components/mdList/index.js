/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)})({0:function(t,e,n){t.exports=n(88)},1:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),r){var s=c.computed||(c.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:o,exports:i,options:c}}},2:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},3:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},4:function(t,e,n){var r=n(23)("wks"),o=n(20),i=n(3).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},5:function(t,e,n){t.exports=!n(12)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},6:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},7:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},8:function(t,e,n){var r=n(13),o=n(31),i=n(30),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},9:function(t,e,n){var r=n(8),o=n(16);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},10:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},11:function(t,e,n){var r=n(36),o=n(15);t.exports=function(t){return r(o(t))}},12:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},13:function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},15:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},16:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},17:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},18:function(t,e,n){var r=n(3),o=n(6),i=n(28),u=n(9),c="prototype",s=function(t,e,n){var a,f,l,d=t&s.F,p=t&s.G,m=t&s.S,h=t&s.P,v=t&s.B,x=t&s.W,y=p?o:o[e]||(o[e]={}),O=y[c],g=p?r:m?r[e]:(r[e]||{})[c];p&&(n=e);for(a in n)f=!d&&g&&void 0!==g[a],f&&a in y||(l=f?g[a]:n[a],y[a]=p&&"function"!=typeof g[a]?n[a]:v&&f?i(l,r):x&&g[a]==l?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e})(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[a]=l,t&s.R&&O&&!O[a]&&u(O,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},19:function(t,e,n){var r=n(23)("keys"),o=n(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},20:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},21:function(t,e,n){var r=n(32),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},22:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},23:function(t,e,n){var r=n(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e){t.exports={}},26:function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},27:function(t,e,n){var r=n(10),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},28:function(t,e,n){var r=n(34);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},29:function(t,e,n){var r=n(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},30:function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},31:function(t,e,n){t.exports=!n(5)&&!n(12)((function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a}))},32:function(t,e,n){var r=n(7),o=n(11),i=n(35)(!1),u=n(19)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},33:function(t,e,n){var r=n(8).f,o=n(7),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},34:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},35:function(t,e,n){var r=n(11),o=n(29),i=n(37);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if(c=s[f++],c!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},36:function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},37:function(t,e,n){var r=n(17),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},38:function(t,e){t.exports=!0},41:function(t,e,n){"use strict";var r=n(38),o=n(18),i=n(43),u=n(9),c=n(7),s=n(25),a=n(49),f=n(33),l=n(51),d=n(4)("iterator"),p=!([].keys&&"next"in[].keys()),m="@@iterator",h="keys",v="values",x=function(){return this};t.exports=function(t,e,n,y,O,g,_){a(n,e,y);var b,E,M,w=function(t){if(!p&&t in P)return P[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",C=O==v,T=!1,P=t.prototype,j=P[d]||P[m]||O&&P[O],R=j||w(O),N=O?C?w("entries"):R:void 0,$="Array"==e?P.entries||j:j;if($&&(M=l($.call(new t)),M!==Object.prototype&&(f(M,A,!0),r||c(M,d)||u(M,d,x))),C&&j&&j.name!==v&&(T=!0,R=function(){return j.call(this)}),r&&!_||!p&&!T&&P[d]||u(P,d,R),s[e]=R,s[A]=x,O)if(b={values:C?R:w(v),keys:g?R:w(h),entries:N},_)for(E in b)E in P||i(P,E,b[E]);else o(o.P+o.F*(p||T),e,b);return b}},42:function(t,e,n){var r=n(13),o=n(50),i=n(22),u=n(19)("IE_PROTO"),c=function(){},s="prototype",a=function(){var t,e=n(27)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(48).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[s][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},43:function(t,e,n){t.exports=n(9)},44:function(t,e,n){"use strict";var r=n(53)(!0);n(41)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},46:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(55),i=r(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},48:function(t,e,n){t.exports=n(3).document&&document.documentElement},49:function(t,e,n){"use strict";var r=n(42),o=n(16),i=n(33),u={};n(9)(u,n(4)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},50:function(t,e,n){var r=n(8),o=n(13),i=n(21);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},51:function(t,e,n){var r=n(7),o=n(26),i=n(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},53:function(t,e,n){var r=n(17),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},55:function(t,e,n){t.exports={default:n(56),__esModule:!0}},56:function(t,e,n){n(44),n(66),t.exports=n(6).Array.from},57:function(t,e,n){var r=n(24),o=n(4)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},58:function(t,e,n){"use strict";var r=n(8),o=n(16);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},59:function(t,e,n){var r=n(25),o=n(4)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},60:function(t,e,n){var r=n(13);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},61:function(t,e,n){var r=n(4)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},65:function(t,e,n){var r=n(57),o=n(4)("iterator"),i=n(25);t.exports=n(6).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},66:function(t,e,n){"use strict";var r=n(28),o=n(18),i=n(26),u=n(60),c=n(59),s=n(29),a=n(58),f=n(65);o(o.S+o.F*!n(61)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,d=i(t),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,x=0,y=f(d);if(v&&(h=r(h,m>2?arguments[2]:void 0,2)),void 0==y||p==Array&&c(y))for(e=s(d.length),n=new p(e);e>x;x++)a(n,x,v?h(d[x],x):d[x]);else for(l=y.call(d),n=new p;!(o=l.next()).done;x++)a(n,x,v?u(l,h,[o.value,x],!0):o.value);return n.length=x,n}})},88:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-list",t.extend(u.default)),t.component("md-list-item",t.extend(s.default)),t.component("md-list-expand",t.extend(f.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(287),u=r(i),c=n(289),s=r(c),a=n(288),f=r(a),l=n(238),d=r(l);t.exports=e.default},138:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=r(o);e.default={mixins:[i.default],props:{allowMultipleExpanded:{type:Boolean,default:!1},leftExpandIndicator:{type:Boolean,default:!1}}},t.exports=e.default},139:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{height:0,contentObserver:null,transitionOff:!0}},computed:{classes:function(){return{"md-transition-off":this.transitionOff}},styles:function(){return{"margin-bottom":this.height}}},methods:{calculatePadding:function(){var t=this;window.requestAnimationFrame((function(){t.height=-t.$el.offsetHeight-48+"px",window.setTimeout((function(){t.transitionOff=!1}))}))},recalculateAfterChange:function(){this.transitionOff=!0,this.calculatePadding()},observeChildChanges:function(){this.contentObserver=new MutationObserver(this.recalculateAfterChange),this.contentObserver.observe(this.$refs.expand,{childList:!0,characterData:!0,subtree:!0})}},mounted:function(){this.calculatePadding(),this.observeChildChanges(),window.addEventListener("resize",this.recalculateAfterChange)},beforeDestroy:function(){this.contentObserver&&this.contentObserver.disconnect(),window.removeEventListener("resize",this.recalculateAfterChange)}},t.exports=e.default},140:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(46),i=r(o);e.default={props:{href:String,target:String,disabled:Boolean},render:function(t){var e=this,n="md-button md-list-item-container",r="md-list-item-holder",o=this.$slots.default,u=o[0].componentOptions,c=void 0,s=void 0,a={staticClass:"md-list-item",on:{click:function(t){e.$emit("click",t)}}},f=function(e){return t("div",{staticClass:r},e)},l=function(){return t("md-ink-ripple")},d=function(){return o[0].data.staticClass=n+" "+r,t("li",a,[].concat((0,i.default)(o),[l()]))},p=function(){o.some((function(t,e){if(t.componentOptions&&"md-list-expand"===t.componentOptions.tag)return c=t,s=e,!0}))},m=function(){return t("md-icon",{staticClass:"md-list-expand-indicator"},"keyboard_arrow_down")},h=function(t){t.$children.some((function(t){t.$el.classList.contains("md-list-expand")&&t.calculatePadding()}))},v=function(t){var e=void 0;t.$parent.$children.some((function(n){if(t.$el===n.$el||!t.$parent.allowMultipleExpanded){var r=n.$el.classList;if(r.contains("md-list-item-expand")&&r.contains("md-active"))return e=n,r.remove("md-active"),h(n),!0}})),e&&t.$el===e.$el||t.$el.classList.add("md-active")},x=function(){return o.splice(s,1),e.$parent.leftExpandIndicator?o.unshift(m()):o.push(m()),t("button",{staticClass:n,on:{click:function(){v(e),e.$emit("click")}}},[f(o),l()])},y=function(){return a.staticClass+=" md-list-item-expand",t("li",a,[x(),c])};if(u&&"router-link"===u.tag)return d();if(p(),c)return y();var O=t("md-button",{staticClass:n,attrs:{target:this.target,href:this.href,disabled:this.disabled}},[f(o)]);return this.target&&(O.data.attrs.rel="noopener"),t("li",a,[O])}},t.exports=e.default},204:function(t,e){},238:function(t,e){t.exports=".THEME_NAME.md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-list.md-transparent{background-color:transparent;color:inherit}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container>.md-icon{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container>.md-icon{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container{background-color:BACKGROUND-COLOR}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus{background-color:rgba(153,153,153,0.2)}\n"},287:function(t,e,n){n(204);var r=n(1)(n(138),n(343),null,null);t.exports=r.exports},288:function(t,e,n){var r=n(1)(n(139),n(378),null,null);t.exports=r.exports},289:function(t,e,n){var r=n(1)(n(140),null,null,null);t.exports=r.exports},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"md-list",class:[t.themeClass]},[t._t("default")],2)},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"expand",staticClass:"md-list-expand",class:t.classes,style:t.styles},[t._t("default")],2)},staticRenderFns:[]}}})}));