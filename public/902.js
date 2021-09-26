"use strict";(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[902],{2779:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(3366),a=n(7462),r=n(7294),o=(n(5697),n(6010)),s=n(4112);const l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e,t=1){const n=parseFloat(e);return`${n/t}${String(e).replace(String(n),"")||"px"}`}const m=r.forwardRef((function(e,t){const{alignContent:n="stretch",alignItems:s="stretch",classes:l,className:c,component:d="div",container:m=!1,direction:h="row",item:u=!1,justify:g,justifyContent:p="flex-start",lg:f=!1,md:x=!1,sm:y=!1,spacing:b=0,wrap:w="wrap",xl:v=!1,xs:E=!1,zeroMinWidth:Z=!1}=e,C=(0,i.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=(0,o.Z)(l.root,c,m&&[l.container,0!==b&&l[`spacing-xs-${String(b)}`]],u&&l.item,Z&&l.zeroMinWidth,"row"!==h&&l[`direction-xs-${String(h)}`],"wrap"!==w&&l[`wrap-xs-${String(w)}`],"stretch"!==s&&l[`align-items-xs-${String(s)}`],"stretch"!==n&&l[`align-content-xs-${String(n)}`],"flex-start"!==(g||p)&&l[`justify-content-xs-${String(g||p)}`],!1!==E&&l[`grid-xs-${String(E)}`],!1!==y&&l[`grid-sm-${String(y)}`],!1!==x&&l[`grid-md-${String(x)}`],!1!==f&&l[`grid-lg-${String(f)}`],!1!==v&&l[`grid-xl-${String(v)}`]);return r.createElement(d,(0,a.Z)({className:T,ref:t},C))})),h=(0,s.Z)((e=>(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){const n={};return l.forEach((t=>{const i=e.spacing(t);0!==i&&(n[`spacing-xs-${t}`]={margin:`-${d(i,2)}`,width:`calc(100% + ${d(i)})`,"& > $item":{padding:d(i,2)}})})),n}(e),e.breakpoints.keys.reduce(((t,n)=>(function(e,t,n){const i={};c.forEach((e=>{const t=`grid-${n}-${e}`;if(!0===e)return void(i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"});if("auto"===e)return void(i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"});const a=Math.round(e/12*1e8)/1e6+"%";i[t]={flexBasis:a,flexGrow:0,maxWidth:a}})),"xs"===n?(0,a.Z)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t)),{}))),{name:"MuiGrid"})(m)},1175:(e,t,n)=>{n.d(t,{Z:()=>Z});var i=n(7462),a=n(3366),r=n(7294),o=(n(5697),n(6010)),s=n(6888),l=n(4112),c=n(3935);let d=!0,m=!1,h=null;const u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function g(e){e.metaKey||e.altKey||e.ctrlKey||(d=!0)}function p(){d=!1}function f(){"hidden"===this.visibilityState&&m&&(d=!0)}function x(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return d||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!u[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function y(){m=!0,window.clearTimeout(h),h=window.setTimeout((()=>{m=!1}),100)}function b(){return{isFocusVisible:x,onBlurVisible:y,ref:r.useCallback((e=>{const t=c.findDOMNode(e);var n;null!=t&&((n=t.ownerDocument).addEventListener("keydown",g,!0),n.addEventListener("mousedown",p,!0),n.addEventListener("pointerdown",p,!0),n.addEventListener("touchstart",p,!0),n.addEventListener("visibilitychange",f,!0))}),[])}}var w=n(368),v=n(797);const E=r.forwardRef((function(e,t){const{classes:n,className:l,color:c="primary",component:d="a",onBlur:m,onFocus:h,TypographyClasses:u,underline:g="hover",variant:p="inherit"}=e,f=(0,a.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisible:x,onBlurVisible:y,ref:E}=b(),[Z,C]=r.useState(!1),T=(0,w.Z)(t,E);return r.createElement(v.Z,(0,i.Z)({className:(0,o.Z)(n.root,n[`underline${(0,s.Z)(g)}`],l,Z&&n.focusVisible,"button"===d&&n.button),classes:u,color:c,component:d,onBlur:e=>{Z&&(y(),C(!1)),m&&m(e)},onFocus:e=>{x(e)&&C(!0),h&&h(e)},ref:T,variant:p},f))})),Z=(0,l.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(E)},902:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(7294),a=n(3190),r=n(2779),o=n(797),s=n(1175),l=n(2575),c=n(9704);const d=i.lazy((()=>n.e(406).then(n.bind(n,1548)))),m=i.lazy((()=>n.e(82).then(n.bind(n,82)))),h=function(){const e=(0,a.Z)(),t=(0,l.Z)("(max-width:1280px)"),{screenAction:{gridRowToReverce:n,gridRowToColumn:h}}=(0,c.v9)((e=>e));console.log(t);const u={ProjectName:"User Experience Case Studies. Environmental Conservation.",Collaboration:["User Journey Map & Documentation: Mohammad Amin Mohammadi","User Testings & Video: Brendan O'Reilly","Synthesizing Activity Design: Elliott Magrath"],Links:[{href:"images/Pages/UX/Visual-Report.pdf",linkTag:"Link to full report"}],description:"Technology has played a significant role in increasing the world population dramatically. Consequently it has increased the level of the complexity of problems. However, user research methods developed around design frameworks can be a powerful tool to face these complex wicked problems. since the day I was introduced to the digital world, I have always been looking and thinking beyond the applications and platforms I have used. The temptation to find reliable solutions to build a better future for both humanity and the environment we live at."};return i.createElement("div",{className:e.root},i.createElement(r.Z,{container:!0,justifyContent:"flex-start",alignContent:"flex-start",className:e.topic_grid},i.createElement(d,u),i.createElement(r.Z,{item:!0,xs:12},i.createElement(m,{embedID:"AikAa-n8vq8"})),i.createElement(r.Z,{item:!0,container:!0,direction:"row",spacing:4,justifyContent:"flex-start",alignContent:"flex-start",sm:12,md:6},i.createElement(r.Z,{item:!0,xs:12,style:{height:"200px"}},i.createElement(o.Z,{variant:"h5"},"Knowledge to conserve"),i.createElement(o.Z,{variant:"h3"},"Environment and Biodiversity")),i.createElement(r.Z,{item:!0,xs:12},i.createElement(o.Z,{variant:"body1"},"Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we’ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices."))),i.createElement(r.Z,{item:!0,container:!0,direction:"row",spacing:4,justifyContent:"flex-start",alignContent:"flex-start",sm:12,md:6},i.createElement(r.Z,{item:!0,xs:12,style:{height:"200px"}},i.createElement(o.Z,{variant:"h5"},"What is the strategy?"),i.createElement(o.Z,{variant:"h3"},"Our Design Solution")),i.createElement(r.Z,{item:!0,xs:12},i.createElement(o.Z,{variant:"body1"},"We named our design solution Atmoscube. Atmoscube is a cube roughly 450mm in width, height and depth. Within this hologram cube we are propose a city build game. The top of the product houses a touch and distance sensitive interface that along with AI voice operated system will be the way in which the user engages with the product. Within the product will be a small AR city projected from the base, this AR city will be built and managed by the user."))),i.createElement(r.Z,{item:!0,xs:12},i.createElement("img",{src:"images/Pages/UX/Render.png",alt:"content"})),i.createElement(r.Z,{item:!0,container:!0,direction:"row",spacing:4,justifyContent:"flex-start",alignContent:"flex-start"},i.createElement(r.Z,{item:!0,lg:6,md:12},i.createElement(o.Z,{variant:"h5"},"Trial and Error"),i.createElement(o.Z,{variant:"h3"},"Design Process")),i.createElement(r.Z,{item:!0,xs:12,style:{height:"200ox"}},i.createElement(o.Z,{variant:"body1"},"The design process was guided by the aim of empowering people through education in an effort to aid against biodiversity loss and animal extinction."),i.createElement("br",null),i.createElement(o.Z,{variant:"body1"},"Stage one of the design process involved conducting research with finding key insights regarding the problem space in mind."),i.createElement("br",null),i.createElement(o.Z,{variant:"body1"},"Stage two of the process involved studying the research gathered, finding explicit and intrinsic insights into solutions for the problem space."),i.createElement("br",null),i.createElement(o.Z,{variant:"body1"},"Stage Three involved each design member submitting two idea and subsequent storyboards that aided the problem space and successfully met design criteria."),i.createElement("br",null),i.createElement(o.Z,{variant:"body1"},"Stage Four involved each design team members idea being inputted into a design matrix created to highlight the best design and what was most suited to the tasks needs."))),i.createElement(r.Z,{item:!0,xs:12},i.createElement("img",{src:"images/Pages/UX/Render-2.png",alt:"content"})),i.createElement(r.Z,{item:!0,container:!0,spacing:4,direction:"row",justifyContent:"center",alignItems:"center",className:e.inner_GridContainer},i.createElement(r.Z,{item:!0,lg:6,md:12},"To use the Atmoscube the user must connect it to its home and vehicles IoT (Internet of things), the data received from the users amenities will be the core of the users experience within atmoscube, the electricity, water and Co2 used by the user within their real daily lives will have a direct effect to their experience within the product. An example of this is smog within the user’s city from high Co2 emissions or Electricity use in real life."),i.createElement(r.Z,{item:!0,lg:6,md:12},i.createElement("img",{src:"images/Pages/UX/Render-3.png",alt:"content"})),i.createElement(r.Z,{item:!0,container:!0,spacing:4,direction:t?"column-reverse":"row",justifyContent:"center",alignItems:"center",className:e.inner_GridContainer},i.createElement(r.Z,{item:!0,lg:6,md:12},i.createElement("img",{src:"images/Pages/UX/Render-4.png",alt:"content"})),i.createElement(r.Z,{item:!0,lg:6,md:12},"To accompany these mechanics is the systems AI, with the gathered data from the users IoT the AI will learn the user’s habits, lifestyle and how they could lower their impact on the environment. These improvements will be set to the user as challenges, these challenges were designed with gamification in mind, engaging the user and investing them in the experience as a whole."))),i.createElement(r.Z,{item:!0,container:!0,spacing:4,xs:12,style:{paddingTop:"160px"}},i.createElement(r.Z,{item:!0,lg:6,md:12},i.createElement(o.Z,{variant:"h5"},"Design Communicatin Tool"),i.createElement(o.Z,{variant:"h3"},"User Journy Map")),i.createElement(r.Z,{item:!0,xs:12,style:{paddingTop:"12px"}},i.createElement(s.Z,{href:"images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",className:e.onlineLink,style:{bottom:"0px"},onClick:e=>preventDefault},i.createElement("img",{src:"images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",alt:"content"}))))))}}}]);