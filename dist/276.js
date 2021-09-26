"use strict";exports.id=276,exports.ids=[276],exports.modules={7276:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var r=e(7294),i=e(3838),o=e(2575),u=e(9704),s=e(7175);const a=(0,e(4883).Z)((t=>({root:{width:"100%",height:"100%",position:"relative","&> *":{[t.breakpoints.up("md")]:{padding:t.spacing(6)},position:"absolute",top:"0",left:"0"}}}))),l=function(){const{dataStore:{annualrain:t,slums:n,population:l,months:c,mapJSON:f,refresh:h}}=(0,u.v9)((t=>t)),p=a(),d=(0,u.I0)(),_=(0,r.useRef)(null),m=(0,r.useRef)(null),[y,v]=(0,r.useState)(!1),g=(0,o.Z)("(max-width:600px)"),[w,A]=(0,r.useState)({desktop:{map:"-1 0 25 25",UI:"-140 0 1000 1000"},mobile:{map:"1.3 0 20 20",UI:"-45 0 800 800"}}),[x,b]=(0,r.useState)(null),[Z,S]=(0,r.useState)(null);return(0,r.useEffect)((()=>{"empty"===t.state&&d((0,s.bd)()),"empty"===n.state&&d((0,s.WZ)()),"empty"===l.state&&d((0,s.FX)()),"empty"===c.state&&d((0,s.bh)()),"empty"===f.state&&d((0,s.n)()),"rejected"===t.state&&h&&d((0,s.bd)()),"rejected"===n.state&&h&&d((0,s.WZ)()),"rejected"===l.state&&h&&d((0,s.FX)()),"rejected"===c.state&&h&&d((0,s.bh)()),"rejected"===f.state&&h&&d((0,s.n)())}),[h,t.state,n.state,l.state,c.state,f.state,d]),(0,r.useEffect)((()=>{"fulfilled"===t.state&&"fulfilled"===n.state&&"fulfilled"===l.state&&"fulfilled"===c.state&&"fulfilled"===f.state&&v(!0)}),[t.state,n.state,l.state,c.state,f.state]),(0,r.useEffect)((()=>{!x&&y&&b((0,i.Z)(_.current)),t.data.length>0&&x&&Promise.all([e.e(322),e.e(851)]).then(e.bind(e,9192)).then((({default:e})=>{e(x,_,t,n,l,c,f.data)})),!Z&&y&&S((0,i.Z)(m.current)),f.data&&Z&&Promise.all([e.e(322),e.e(107)]).then(e.bind(e,5305)).then((({default:t})=>{t(Z,f.data)}))}),[x,y,t,n,l,c,f,Z]),r.createElement("div",{className:p.root},r.createElement("svg",{ref:m,viewBox:g?w.mobile.map:w.desktop.map}),r.createElement("svg",{ref:_,viewBox:g?w.mobile.UI:w.desktop.UI}))}},9898:(t,n,e)=>{function r(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}e.d(n,{Z:()=>r})},4708:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(1663),i=e(1226);function o(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===i.P&&n.documentElement.namespaceURI===i.P?n.createElement(t):n.createElementNS(e,t)}}function u(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function s(t){var n=(0,r.Z)(t);return(n.local?u:o)(n)}},4421:(t,n,e)=>{function r(t){return function(){return this.matches(t)}}function i(t){return function(n){return n.matches(t)}}e.d(n,{Z:()=>r,P:()=>i})},1663:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(1226);function i(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),r.Z.hasOwnProperty(n)?{space:r.Z[n],local:t}:t}},1226:(t,n,e)=>{e.d(n,{P:()=>r,Z:()=>i});var r="http://www.w3.org/1999/xhtml";const i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}},3838:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(6740);function i(t){return"string"==typeof t?new r.Y1([[document.querySelector(t)]],[document.documentElement]):new r.Y1([[t]],r.Jz)}},6740:(t,n,e)=>{e.d(n,{Y1:()=>ot,ZP:()=>st,Jz:()=>it});var r=e(3010),i=e(9898),o=e(9701),u=e(4421),s=Array.prototype.find;function a(){return this.firstElementChild}var l=Array.prototype.filter;function c(){return Array.from(this.children)}function f(t){return new Array(t.length)}function h(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function p(t){return function(){return t}}function d(t,n,e,r,i,o){for(var u,s=0,a=n.length,l=o.length;s<l;++s)(u=n[s])?(u.__data__=o[s],r[s]=u):e[s]=new h(t,o[s]);for(;s<a;++s)(u=n[s])&&(i[s]=u)}function _(t,n,e,r,i,o,u){var s,a,l,c=new Map,f=n.length,p=o.length,d=new Array(f);for(s=0;s<f;++s)(a=n[s])&&(d[s]=l=u.call(a,a.__data__,s,n)+"",c.has(l)?i[s]=a:c.set(l,a));for(s=0;s<p;++s)l=u.call(t,o[s],s,o)+"",(a=c.get(l))?(r[s]=a,a.__data__=o[s],c.delete(l)):e[s]=new h(t,o[s]);for(s=0;s<f;++s)(a=n[s])&&c.get(d[s])===a&&(i[s]=a)}function m(t){return t.__data__}function y(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function v(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}h.prototype={constructor:h,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var g=e(1663);function w(t){return function(){this.removeAttribute(t)}}function A(t){return function(){this.removeAttributeNS(t.space,t.local)}}function x(t,n){return function(){this.setAttribute(t,n)}}function b(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Z(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function S(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var E=e(2627);function N(t){return function(){delete this[t]}}function P(t,n){return function(){this[t]=n}}function C(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function B(t){return t.trim().split(/^|\s+/)}function L(t){return t.classList||new j(t)}function j(t){this._node=t,this._names=B(t.getAttribute("class")||"")}function I(t,n){for(var e=L(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function U(t,n){for(var e=L(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function q(t){return function(){I(this,t)}}function D(t){return function(){U(this,t)}}function M(t,n){return function(){(n.apply(this,arguments)?I:U)(this,t)}}function O(){this.textContent=""}function k(t){return function(){this.textContent=t}}function R(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function H(){this.innerHTML=""}function T(t){return function(){this.innerHTML=t}}function V(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function z(){this.nextSibling&&this.parentNode.appendChild(this)}function J(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}j.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var X=e(4708);function Y(){return null}function F(){var t=this.parentNode;t&&t.removeChild(this)}function W(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function G(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function K(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function Q(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function $(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var u=0,s=i.length;u<s;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}var tt=e(9920);function nt(t,n,e){var r=(0,tt.Z)(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function et(t,n){return function(){return nt(this,t,n)}}function rt(t,n){return function(){return nt(this,t,n.apply(this,arguments))}}var it=[null];function ot(t,n){this._groups=t,this._parents=n}function ut(){return new ot([[document.documentElement]],it)}ot.prototype=ut.prototype={constructor:ot,select:function(t){"function"!=typeof t&&(t=(0,r.Z)(t));for(var n=this._groups,e=n.length,i=new Array(e),o=0;o<e;++o)for(var u,s,a=n[o],l=a.length,c=i[o]=new Array(l),f=0;f<l;++f)(u=a[f])&&(s=t.call(u,u.__data__,f,a))&&("__data__"in u&&(s.__data__=u.__data__),c[f]=s);return new ot(i,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){return(0,i.Z)(t.apply(this,arguments))}}(t):(0,o.Z)(t);for(var n=this._groups,e=n.length,r=[],u=[],s=0;s<e;++s)for(var a,l=n[s],c=l.length,f=0;f<c;++f)(a=l[f])&&(r.push(t.call(a,a.__data__,f,l)),u.push(a));return new ot(r,u)},selectChild:function(t){return this.select(null==t?a:function(t){return function(){return s.call(this.children,t)}}("function"==typeof t?t:(0,u.P)(t)))},selectChildren:function(t){return this.selectAll(null==t?c:function(t){return function(){return l.call(this.children,t)}}("function"==typeof t?t:(0,u.P)(t)))},filter:function(t){"function"!=typeof t&&(t=(0,u.Z)(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,s=n[i],a=s.length,l=r[i]=[],c=0;c<a;++c)(o=s[c])&&t.call(o,o.__data__,c,s)&&l.push(o);return new ot(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,m);var e=n?_:d,r=this._parents,i=this._groups;"function"!=typeof t&&(t=p(t));for(var o=i.length,u=new Array(o),s=new Array(o),a=new Array(o),l=0;l<o;++l){var c=r[l],f=i[l],h=f.length,v=y(t.call(c,c&&c.__data__,l,r)),g=v.length,w=s[l]=new Array(g),A=u[l]=new Array(g),x=a[l]=new Array(h);e(c,f,w,A,x,v,n);for(var b,Z,S=0,E=0;S<g;++S)if(b=w[S]){for(S>=E&&(E=S+1);!(Z=A[E])&&++E<g;);b._next=Z||null}}return(u=new ot(u,r))._enter=s,u._exit=a,u},enter:function(){return new ot(this._enter||this._groups.map(f),this._parents)},exit:function(){return new ot(this._exit||this._groups.map(f),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),s=new Array(i),a=0;a<u;++a)for(var l,c=e[a],f=r[a],h=c.length,p=s[a]=new Array(h),d=0;d<h;++d)(l=c[d]||f[d])&&(p[d]=l);for(;a<i;++a)s[a]=e[a];return new ot(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=v);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,s=e[o],a=s.length,l=i[o]=new Array(a),c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(n)}return new ot(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,s=o.length;u<s;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=(0,g.Z)(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?A:w:"function"==typeof n?e.local?S:Z:e.local?b:x)(e,n))},style:E.Z,property:function(t,n){return arguments.length>1?this.each((null==n?N:"function"==typeof n?C:P)(t,n)):this.node()[t]},classed:function(t,n){var e=B(t+"");if(arguments.length<2){for(var r=L(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?M:n?q:D)(e,n))},text:function(t){return arguments.length?this.each(null==t?O:("function"==typeof t?R:k)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?H:("function"==typeof t?V:T)(t)):this.node().innerHTML},raise:function(){return this.each(z)},lower:function(){return this.each(J)},append:function(t){var n="function"==typeof t?t:(0,X.Z)(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:(0,X.Z)(t),i=null==n?Y:"function"==typeof n?n:(0,r.Z)(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(F)},clone:function(t){return this.select(t?G:W)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=K(t+""),u=o.length;if(!(arguments.length<2)){for(s=n?$:Q,r=0;r<u;++r)this.each(s(o[r],n,e));return this}var s=this.node().__on;if(s)for(var a,l=0,c=s.length;l<c;++l)for(r=0,a=s[l];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?rt:et)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}};const st=ut},2627:(t,n,e)=>{e.d(n,{Z:()=>s,S:()=>a});var r=e(9920);function i(t){return function(){this.style.removeProperty(t)}}function o(t,n,e){return function(){this.style.setProperty(t,n,e)}}function u(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function s(t,n,e){return arguments.length>1?this.each((null==n?i:"function"==typeof n?u:o)(t,n,null==e?"":e)):a(this.node(),t)}function a(t,n){return t.style.getPropertyValue(n)||(0,r.Z)(t).getComputedStyle(t,null).getPropertyValue(n)}},3010:(t,n,e)=>{function r(){}function i(t){return null==t?r:function(){return this.querySelector(t)}}e.d(n,{Z:()=>i})},9701:(t,n,e)=>{function r(){return[]}function i(t){return null==t?r:function(){return this.querySelectorAll(t)}}e.d(n,{Z:()=>i})},9920:(t,n,e)=>{function r(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}e.d(n,{Z:()=>r})}};