"use strict";(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[548],{1175:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),o=t(3366),r=t(7294),i=(t(5697),t(6010)),l=t(6888),s=t(4112),c=t(3935);let u=!0,d=!1,m=null;const p={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function b(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function f(){u=!1}function v(){"hidden"===this.visibilityState&&d&&(u=!0)}function h(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch(e){}return u||function(e){const{type:n,tagName:t}=e;return!("INPUT"!==t||!p[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}function y(){d=!0,window.clearTimeout(m),m=window.setTimeout((()=>{d=!1}),100)}function g(){return{isFocusVisible:h,onBlurVisible:y,ref:r.useCallback((e=>{const n=c.findDOMNode(e);var t;null!=n&&((t=n.ownerDocument).addEventListener("keydown",b,!0),t.addEventListener("mousedown",f,!0),t.addEventListener("pointerdown",f,!0),t.addEventListener("touchstart",f,!0),t.addEventListener("visibilitychange",v,!0))}),[])}}var E=t(368),k=t(797);const Z=r.forwardRef((function(e,n){const{classes:t,className:s,color:c="primary",component:u="a",onBlur:d,onFocus:m,TypographyClasses:p,underline:b="hover",variant:f="inherit"}=e,v=(0,o.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisible:h,onBlurVisible:y,ref:Z}=g(),[w,C]=r.useState(!1),N=(0,E.Z)(n,Z);return r.createElement(k.Z,(0,a.Z)({className:(0,i.Z)(t.root,t[`underline${(0,l.Z)(b)}`],s,w&&t.focusVisible,"button"===u&&t.button),classes:p,color:c,component:u,onBlur:e=>{w&&(y(),C(!1)),d&&d(e)},onFocus:e=>{h(e)&&C(!0),m&&m(e)},ref:N,variant:f},v))})),w=(0,s.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(Z)},1548:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(7294),o=t(2779),r=t(797),i=t(1175),l=t(3190);const s=function({...e}){const n=(0,l.Z)(),t=e=>e.preventDefault();return a.createElement(o.Z,{container:!0,justify:"space-between",alignContent:"flex-start",className:n.topic_grid},a.createElement(o.Z,{item:!0,lg:6,md:12,className:n.topick_heading},a.createElement(r.Z,{variant:"h3"},e.ProjectName),a.createElement(r.Z,{variant:"h4"},"Collaboration Team:"),e.Collaboration&&e.Collaboration.map((e=>a.createElement(r.Z,{variant:"body2",style:{fontSize:"12px",color:"#426164"}},e))),e.Links&&e.Links.map((({href:e,linkTag:o})=>a.createElement(i.Z,{href:e,className:n.onlineLink,style:{bottom:"0px"},onClick:e=>t},a.createElement(r.Z,{variant:"h5",className:n.link_ToExternals},o))))),a.createElement(o.Z,{item:!0,lg:6,md:12,className:n.topic_pragraph},a.createElement(r.Z,{variant:"body1"},e.description)))}}}]);