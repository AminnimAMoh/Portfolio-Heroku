(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[459],{8245:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7462),o=n(3366),i=n(7294),a=(n(5697),n(3935)),s=n(660),l=n(368),c=n(4142),u=n(9172),d=n(1753);function p(e,t){const n=function(e,t){const n=t.getBoundingClientRect();let r;if(t.fakeTransform)r=t.fakeTransform;else{const e=window.getComputedStyle(t);r=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let o=0,i=0;if(r&&"none"!==r&&"string"==typeof r){const e=r.split("(")[1].split(")")[0].split(",");o=parseInt(e[4],10),i=parseInt(e[5],10)}return"left"===e?`translateX(${window.innerWidth}px) translateX(${o-n.left}px)`:"right"===e?`translateX(-${n.left+n.width-o}px)`:"up"===e?`translateY(${window.innerHeight}px) translateY(${i-n.top}px)`:`translateY(-${n.top+n.height-i}px)`}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}const m={enter:u.x9.enteringScreen,exit:u.x9.leavingScreen},f=i.forwardRef((function(e,t){const{children:n,direction:u="down",in:f,onEnter:h,onEntered:g,onEntering:y,onExit:E,onExited:v,onExiting:b,style:w,timeout:x=m,TransitionComponent:Z=s.ZP}=e,C=(0,o.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=(0,c.Z)(),T=i.useRef(null),L=i.useCallback((e=>{T.current=a.findDOMNode(e)}),[]),R=(0,l.Z)(n.ref,L),M=(0,l.Z)(R,t),O=e=>t=>{e&&(void 0===t?e(T.current):e(T.current,t))},S=O(((e,t)=>{p(u,e),(0,d.n)(e),h&&h(e,t)})),z=O(((e,t)=>{const n=(0,d.C)({timeout:x,style:w},{mode:"enter"});e.style.webkitTransition=k.transitions.create("-webkit-transform",(0,r.Z)({},n,{easing:k.transitions.easing.easeOut})),e.style.transition=k.transitions.create("transform",(0,r.Z)({},n,{easing:k.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",y&&y(e,t)})),B=O(g),N=O(b),$=O((e=>{const t=(0,d.C)({timeout:x,style:w},{mode:"exit"});e.style.webkitTransition=k.transitions.create("-webkit-transform",(0,r.Z)({},t,{easing:k.transitions.easing.sharp})),e.style.transition=k.transitions.create("transform",(0,r.Z)({},t,{easing:k.transitions.easing.sharp})),p(u,e),E&&E(e)})),P=O((e=>{e.style.webkitTransition="",e.style.transition="",v&&v(e)})),D=i.useCallback((()=>{T.current&&p(u,T.current)}),[u]);return i.useEffect((()=>{if(f||"down"===u||"right"===u)return;const e=function(e,t=166){let n;function r(...r){const o=this;clearTimeout(n),n=setTimeout((()=>{e.apply(o,r)}),t)}return r.clear=()=>{clearTimeout(n)},r}((()=>{T.current&&p(u,T.current)}));return window.addEventListener("resize",e),()=>{e.clear(),window.removeEventListener("resize",e)}}),[u,f]),i.useEffect((()=>{f||D()}),[f,D]),i.createElement(Z,(0,r.Z)({nodeRef:T,onEnter:S,onEntered:B,onEntering:z,onExit:$,onExited:P,onExiting:N,appear:!0,in:f,timeout:x},C),((e,t)=>i.cloneElement(n,(0,r.Z)({ref:M,style:(0,r.Z)({visibility:"exited"!==e||f?void 0:"hidden"},w,n.props.style)},t))))}))},3637:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(3366),o=n(7462),i=n(7294),a=(n(5697),n(6010)),s=n(4112),l=n(9172),c=n(3935);function u(e){return e&&e.ownerDocument||document}var d=n(368);const p="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function m(e){const t=i.useRef(e);return p((()=>{t.current=e})),i.useCallback(((...e)=>(0,t.current)(...e)),[])}function f(e){return e.substring(2).toLowerCase()}const h=function(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,s=i.useRef(!1),l=i.useRef(null),p=i.useRef(!1),h=i.useRef(!1);i.useEffect((()=>(setTimeout((()=>{p.current=!0}),0),()=>{p.current=!1})),[]);const g=i.useCallback((e=>{l.current=c.findDOMNode(e)}),[]),y=(0,d.Z)(t.ref,g),E=m((e=>{const t=h.current;if(h.current=!1,!p.current||!l.current||function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))return;if(s.current)return void(s.current=!1);let r;r=e.composedPath?e.composedPath().indexOf(l.current)>-1:!u(l.current).documentElement.contains(e.target)||l.current.contains(e.target),r||!n&&t||o(e)})),v=e=>n=>{h.current=!0;const r=t.props[e];r&&r(n)},b={ref:y};return!1!==a&&(b[a]=v(a)),i.useEffect((()=>{if(!1!==a){const e=f(a),t=u(l.current),n=()=>{s.current=!0};return t.addEventListener(e,E),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,E),t.removeEventListener("touchmove",n)}}}),[E,a]),!1!==r&&(b[r]=v(r)),i.useEffect((()=>{if(!1!==r){const e=f(r),t=u(l.current);return t.addEventListener(e,E),()=>{t.removeEventListener(e,E)}}}),[E,r]),i.createElement(i.Fragment,null,i.cloneElement(t,b))};var g=n(6888);function y(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}var E=n(660),v=n(4142),b=n(1753);function w(e){return`scale(${e}, ${e**2})`}const x={entering:{opacity:1,transform:w(1)},entered:{opacity:1,transform:"none"}},Z=i.forwardRef((function(e,t){const{children:n,disableStrictModeCompat:a=!1,in:s,onEnter:l,onEntered:c,onEntering:u,onExit:p,onExited:m,onExiting:f,style:h,timeout:g="auto",TransitionComponent:y=E.ZP}=e,Z=(0,r.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=i.useRef(),k=i.useRef(),T=(0,v.Z)(),L=T.unstable_strictMode&&!a,R=i.useRef(null),M=(0,d.Z)(n.ref,t),O=(0,d.Z)(L?R:void 0,M),S=e=>(t,n)=>{if(e){const[r,o]=L?[R.current,t]:[t,n];void 0===o?e(r):e(r,o)}},z=S(u),B=S(((e,t)=>{(0,b.n)(e);const{duration:n,delay:r}=(0,b.C)({style:h,timeout:g},{mode:"enter"});let o;"auto"===g?(o=T.transitions.getAutoHeightDuration(e.clientHeight),k.current=o):o=n,e.style.transition=[T.transitions.create("opacity",{duration:o,delay:r}),T.transitions.create("transform",{duration:.666*o,delay:r})].join(","),l&&l(e,t)})),N=S(c),$=S(f),P=S((e=>{const{duration:t,delay:n}=(0,b.C)({style:h,timeout:g},{mode:"exit"});let r;"auto"===g?(r=T.transitions.getAutoHeightDuration(e.clientHeight),k.current=r):r=t,e.style.transition=[T.transitions.create("opacity",{duration:r,delay:n}),T.transitions.create("transform",{duration:.666*r,delay:n||.333*r})].join(","),e.style.opacity="0",e.style.transform=w(.75),p&&p(e)})),D=S(m);return i.useEffect((()=>()=>{clearTimeout(C.current)}),[]),i.createElement(y,(0,o.Z)({appear:!0,in:s,nodeRef:L?R:void 0,onEnter:B,onEntered:N,onEntering:z,onExit:P,onExited:D,onExiting:$,addEndListener:(e,t)=>{const n=L?e:t;"auto"===g&&(C.current=setTimeout(n,k.current||0))},timeout:"auto"===g?null:g},Z),((e,t)=>i.cloneElement(n,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:w(.75),visibility:"exited"!==e||s?void 0:"hidden"},x[e],h,n.props.style),ref:O},t))))}));Z.muiSupportAuto=!0;const C=Z,k=i.forwardRef((function(e,t){const{classes:n,className:s,component:l="div",square:c=!1,elevation:u=1,variant:d="elevation"}=e,p=(0,r.Z)(e,["classes","className","component","square","elevation","variant"]);return i.createElement(l,(0,o.Z)({className:(0,a.Z)(n.root,s,"outlined"===d?n.outlined:n[`elevation${u}`],!c&&n.rounded),ref:t},p))})),T=(0,s.Z)((e=>{const t={};return e.shadows.forEach(((e,n)=>{t[`elevation${n}`]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:`1px solid ${e.palette.divider}`}},t)}),{name:"MuiPaper"})(k);var L=n(2391);const R=i.forwardRef((function(e,t){const{action:n,classes:s,className:l,message:c,role:u="alert"}=e,d=(0,r.Z)(e,["action","classes","className","message","role"]);return i.createElement(T,(0,o.Z)({role:u,square:!0,elevation:6,className:(0,a.Z)(s.root,l),ref:t},d),i.createElement("div",{className:s.message},c),n?i.createElement("div",{className:s.action},n):null)})),M=(0,s.Z)((e=>{const t="light"===e.palette.type?.8:.98,n=(0,L._4)(e.palette.background.default,t);return{root:(0,o.Z)({},e.typography.body2,{color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(R),O=i.forwardRef((function(e,t){const{action:n,anchorOrigin:{vertical:s,horizontal:c}={vertical:"bottom",horizontal:"center"},autoHideDuration:u=null,children:d,classes:p,className:f,ClickAwayListenerProps:E,ContentProps:v,disableWindowBlurListener:b=!1,message:w,onClose:x,onEnter:Z,onEntered:k,onEntering:T,onExit:L,onExited:R,onExiting:O,onMouseEnter:S,onMouseLeave:z,open:B,resumeHideDuration:N,TransitionComponent:$=C,transitionDuration:P={enter:l.x9.enteringScreen,exit:l.x9.leavingScreen},TransitionProps:D}=e,A=(0,r.Z)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),H=i.useRef(),[W,I]=i.useState(!0),j=m(((...e)=>{x&&x(...e)})),X=m((e=>{x&&null!=e&&(clearTimeout(H.current),H.current=setTimeout((()=>{j(null,"timeout")}),e))}));i.useEffect((()=>(B&&X(u),()=>{clearTimeout(H.current)})),[B,u,X]);const Y=()=>{clearTimeout(H.current)},_=i.useCallback((()=>{null!=u&&X(null!=N?N:.5*u)}),[u,N,X]);return i.useEffect((()=>{if(!b&&B)return window.addEventListener("focus",_),window.addEventListener("blur",Y),()=>{window.removeEventListener("focus",_),window.removeEventListener("blur",Y)}}),[b,_,B]),!B&&W?null:i.createElement(h,(0,o.Z)({onClickAway:e=>{x&&x(e,"clickaway")}},E),i.createElement("div",(0,o.Z)({className:(0,a.Z)(p.root,p[`anchorOrigin${(0,g.Z)(s)}${(0,g.Z)(c)}`],f),onMouseEnter:e=>{S&&S(e),Y()},onMouseLeave:e=>{z&&z(e),_()},ref:t},A),i.createElement($,(0,o.Z)({appear:!0,in:B,onEnter:y((()=>{I(!1)}),Z),onEntered:k,onEntering:T,onExit:L,onExited:y((()=>{I(!0)}),R),onExiting:O,timeout:P,direction:"top"===s?"down":"up"},D),d||i.createElement(M,(0,o.Z)({message:w,action:n},v)))))})),S=(0,s.Z)((e=>{const t={top:8},n={bottom:8},r={justifyContent:"flex-end"},i={justifyContent:"flex-start"},a={top:24},s={bottom:24},l={right:24},c={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:(0,o.Z)({},t,{[e.breakpoints.up("sm")]:(0,o.Z)({},a,u)}),anchorOriginBottomCenter:(0,o.Z)({},n,{[e.breakpoints.up("sm")]:(0,o.Z)({},s,u)}),anchorOriginTopRight:(0,o.Z)({},t,r,{[e.breakpoints.up("sm")]:(0,o.Z)({left:"auto"},a,l)}),anchorOriginBottomRight:(0,o.Z)({},n,r,{[e.breakpoints.up("sm")]:(0,o.Z)({left:"auto"},s,l)}),anchorOriginTopLeft:(0,o.Z)({},t,i,{[e.breakpoints.up("sm")]:(0,o.Z)({right:"auto"},a,c)}),anchorOriginBottomLeft:(0,o.Z)({},n,i,{[e.breakpoints.up("sm")]:(0,o.Z)({right:"auto"},s,c)})}}),{flip:!1,name:"MuiSnackbar"})(O)},797:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(7462),o=n(3366),i=n(7294),a=(n(5697),n(6010)),s=n(4112),l=n(6888);const c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,t){const{align:n="inherit",classes:s,className:u,color:d="initial",component:p,display:m="initial",gutterBottom:f=!1,noWrap:h=!1,paragraph:g=!1,variant:y="body1",variantMapping:E=c}=e,v=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),b=p||(g?"p":E[y]||c[y])||"span";return i.createElement(b,(0,r.Z)({className:(0,a.Z)(s.root,u,"inherit"!==y&&s[y],"initial"!==d&&s[`color${(0,l.Z)(d)}`],h&&s.noWrap,f&&s.gutterBottom,g&&s.paragraph,"inherit"!==n&&s[`align${(0,l.Z)(n)}`],"initial"!==m&&s[`display${(0,l.Z)(m)}`]),ref:t},v))})),d=(0,s.Z)((e=>({root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}})),{name:"MuiTypography"})(u)},2575:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7462),o=n(7294),i=n(5959),a=n(3869);function s(e,t={}){const n=(0,i.Z)(),s=(0,a.Z)({theme:n,name:"MuiUseMediaQuery",props:{}});let l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");const c="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:u=!1,matchMedia:d=(c?window.matchMedia:null),noSsr:p=!1,ssrMatchMedia:m=null}=(0,r.Z)({},s,t),[f,h]=o.useState((()=>p&&c?d(l).matches:m?m(l).matches:u));return o.useEffect((()=>{let e=!0;if(!c)return;const t=d(l),n=()=>{e&&h(t.matches)};return n(),t.addListener(n),()=>{e=!1,t.removeListener(n)}}),[l,d,c]),f}},296:e=>{function t(e,t,n){var r,o,i,a,s;function l(){var c=Date.now()-a;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(s=e.apply(i,o),i=o=null))}null==t&&(t=100);var c=function(){i=this,o=arguments,a=Date.now();var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(s=e.apply(i,o),i=o=null),s};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(s=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t},3460:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),o=n(296);function i(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[n,r,o].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...i(e.parentElement)]}const a=["x","y","top","bottom","left","right","width","height"],s=function({debounce:e,scroll:t,polyfill:n}={debounce:0,scroll:!1}){const s=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[l,c]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),u=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:l}),d=e?"number"==typeof e?e:e.scroll:null,p=e?"number"==typeof e?e:e.resize:null,m=(0,r.useRef)(!1);(0,r.useEffect)((()=>(m.current=!0,()=>{m.current=!1})));const[f,h,g]=(0,r.useMemo)((()=>{const e=()=>{if(!u.current.element)return;const{left:e,top:t,width:n,height:r,bottom:o,right:i,x:s,y:l}=u.current.element.getBoundingClientRect(),d={left:e,top:t,width:n,height:r,bottom:o,right:i,x:s,y:l};var p,f;Object.freeze(d),m.current&&(p=u.current.lastBounds,f=d,!a.every((e=>p[e]===f[e])))&&c(u.current.lastBounds=d)};return[e,p?(0,o.debounce)(e,p):e,d?(0,o.debounce)(e,d):e]}),[c,d,p]);function y(){u.current.scrollContainers&&(u.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",g,!0))),u.current.scrollContainers=null),u.current.resizeObserver&&(u.current.resizeObserver.disconnect(),u.current.resizeObserver=null)}function E(){u.current.element&&(u.current.resizeObserver=new s(g),u.current.resizeObserver.observe(u.current.element),t&&u.current.scrollContainers&&u.current.scrollContainers.forEach((e=>e.addEventListener("scroll",g,{capture:!0,passive:!0}))))}var v,b,w;return v=g,b=Boolean(t),(0,r.useEffect)((()=>{if(b){const e=v;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[v,b]),w=h,(0,r.useEffect)((()=>{const e=w;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[w]),(0,r.useEffect)((()=>{y(),E()}),[t,g,h]),(0,r.useEffect)((()=>y),[]),[e=>{e&&e!==u.current.element&&(y(),u.current.element=e,u.current.scrollContainers=i(e),E())},l,f]}}}]);