"use strict";exports.id=548,exports.ids=[548],exports.modules={1175:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7462),a=n(3366),r=n(7294),i=(n(5697),n(6010)),l=n(6888),s=n(4112),c=n(3935);let u=!0,d=!1,m=null;const p={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function b(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function f(){u=!1}function v(){"hidden"===this.visibilityState&&d&&(u=!0)}function h(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return u||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!p[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function y(){d=!0,window.clearTimeout(m),m=window.setTimeout((()=>{d=!1}),100)}function E(){return{isFocusVisible:h,onBlurVisible:y,ref:r.useCallback((e=>{const t=c.findDOMNode(e);var n;null!=t&&((n=t.ownerDocument).addEventListener("keydown",b,!0),n.addEventListener("mousedown",f,!0),n.addEventListener("pointerdown",f,!0),n.addEventListener("touchstart",f,!0),n.addEventListener("visibilitychange",v,!0))}),[])}}var g=n(368),Z=n(797);const k=r.forwardRef((function(e,t){const{classes:n,className:s,color:c="primary",component:u="a",onBlur:d,onFocus:m,TypographyClasses:p,underline:b="hover",variant:f="inherit"}=e,v=(0,a.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisible:h,onBlurVisible:y,ref:k}=E(),[w,N]=r.useState(!1),x=(0,g.Z)(t,k);return r.createElement(Z.Z,(0,o.Z)({className:(0,i.Z)(n.root,n[`underline${(0,l.Z)(b)}`],s,w&&n.focusVisible,"button"===u&&n.button),classes:p,color:c,component:u,onBlur:e=>{w&&(y(),N(!1)),d&&d(e)},onFocus:e=>{h(e)&&N(!0),m&&m(e)},ref:x,variant:f},v))})),w=(0,s.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(k)},1548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(7294),a=n(2779),r=n(797),i=n(1175),l=n(3190);const s=function({...e}){const t=(0,l.Z)(),n=e=>e.preventDefault();return o.createElement(a.Z,{container:!0,justify:"space-between",alignContent:"flex-start",className:t.topic_grid},o.createElement(a.Z,{item:!0,lg:6,md:12,className:t.topick_heading},o.createElement(r.Z,{variant:"h3"},e.ProjectName),o.createElement(r.Z,{variant:"h4"},"Collaboration Team:"),e.Collaboration&&e.Collaboration.map((e=>o.createElement(r.Z,{variant:"body2",style:{fontSize:"12px",color:"#426164"}},e))),e.Links&&e.Links.map((({href:e,linkTag:a})=>o.createElement(i.Z,{href:e,className:t.onlineLink,style:{bottom:"0px"},onClick:e=>n},o.createElement(r.Z,{variant:"h5",className:t.link_ToExternals},a))))),o.createElement(a.Z,{item:!0,lg:6,md:12,className:t.topic_pragraph},o.createElement(r.Z,{variant:"body1"},e.description)))}}};