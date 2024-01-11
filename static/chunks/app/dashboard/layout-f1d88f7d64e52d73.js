(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{1278:function(e,t,r){Promise.resolve().then(r.bind(r,9132)),Promise.resolve().then(r.bind(r,4512))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let n=r(1024),s=r(8630),a=r(6184),o=r(1749),i=n._(r(536)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=o.Image},4512:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(2265),a=r(7330),o=r(4033);t.default=e=>{let{children:t}=e,r=(0,o.useRouter)(),[i,l]=(0,s.useState)(null),[d,c]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{(async()=>{let{data:{session:e},error:t}=await a.Z.auth.getSession();t?(console.error("Error checking user:",t),c(!1)):e&&e.user?(console.log("User found: ",e.user),l(e.user)):r.push("/login"),c(!1)})()},[]),d)?null:i?(0,n.jsx)(n.Fragment,{children:t}):null}},9132:function(e,t,r){"use strict";r.r(t),r.d(t,{Dashboard:function(){return f}});var n=r(7437),s=r(1396),a=r.n(s),o=r(232),i=r(7445);r(1262),r(4670);var l=r(4033),d=r(6691),c=r.n(d),u=r(7330);function f(e){let{children:t}=e,r=(0,l.useRouter)(),s=async()=>{let{error:e}=await u.Z.auth.signOut();e?console.log("Error logging out:",e.message):r.push("/")};return(0,n.jsxs)("div",{className:"flex flex-col w-full min-h-screen",children:[(0,n.jsxs)("aside",{className:"w-64 h-full bg-white dark:bg-gray-700 border-r fixed top-0 left-0 overflow-auto",children:[(0,n.jsx)("div",{className:"flex items-center justify-center h-16 mt-3",children:(0,n.jsx)(c(),{className:"w-40",width:300,height:300,alt:"Picture of the author",src:"https://i.ibb.co/FHFCs6b/2-LOGO-XTRAT-2023-V13.png"})}),(0,n.jsxs)("nav",{className:"flex flex-col p-4",children:[(0,n.jsxs)(a(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/seguridad",children:[(0,n.jsx)(m,{className:"w-6 h-6"}),"Seguridad y acceso"]}),(0,n.jsxs)(a(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/entidades",children:[(0,n.jsx)(p,{className:"w-6 h-6"}),"Estructura Organizacional (Entidades)"]}),(0,n.jsxs)(a(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/personal",children:[(0,n.jsx)(g,{className:"w-6 h-6"}),"Administraci\xf3n de Personal"]}),(0,n.jsxs)(a(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/evaluaciones",children:[(0,n.jsx)(h,{className:"w-6 h-6"}),"Administraci\xf3n Evaluaciones"]}),(0,n.jsxs)(a(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard",children:[(0,n.jsx)(x,{className:"w-6 h-6"}),"M\xe9tricas (Dashboard)"]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col w-full min-h-screen pl-64",children:[(0,n.jsx)("header",{className:"flex items-center h-16 px-4 border-b shrink-0 md:px-6",children:(0,n.jsxs)("div",{className:"flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4",children:[(0,n.jsx)("form",{className:"flex-1 ml-auto sm:flex-initial",children:(0,n.jsx)("div",{className:"relative"})}),(0,n.jsx)(i.z,{className:"rounded-full",size:"icon",variant:"ghost",children:(0,n.jsxs)(o.DropdownMenu,{children:[(0,n.jsx)(o.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(g,{className:"rounded-full h-8 w-8 border"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle user menu"})]})}),(0,n.jsxs)(o.DropdownMenuContent,{children:[(0,n.jsx)(o.DropdownMenuItem,{onClick:()=>r.push("/dashboard/perfil"),children:"Perfil"}),(0,n.jsx)(o.DropdownMenuItem,{onClick:()=>s(),children:"Logout"})]})]})})]})}),t]})]},"1")}function m(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),(0,n.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function p(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}),(0,n.jsx)("rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}),(0,n.jsx)("line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}),(0,n.jsx)("line",{x1:"6",x2:"6.01",y1:"18",y2:"18"})]})}function h(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),(0,n.jsx)("path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}),(0,n.jsx)("path",{d:"M12 17h.01"})]})}function x(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function g(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),(0,n.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}},7445:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),s=r(2265),a=r(7256),o=r(6061),i=r(8243);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...c})});d.displayName="Button"},4670:function(e,t,r){"use strict";r.r(t),r.d(t,{Checkbox:function(){return C}});var n=r(7437),s=r(2265),a=r(3428),o=r(2210),i=r(6989),l=r(5744),d=r(3763),c=r(5184),u=r(4977),f=r(5606),m=r(9381);let p="Checkbox",[h,x]=(0,i.b)(p),[g,b]=h(p),v=(0,s.forwardRef)((e,t)=>{let{__scopeCheckbox:r,name:n,checked:i,defaultChecked:c,required:u,disabled:f,value:p="on",onCheckedChange:h,...x}=e,[b,v]=(0,s.useState)(null),w=(0,o.e)(t,e=>v(e)),N=(0,s.useRef)(!1),M=!b||!!b.closest("form"),[C=!1,D]=(0,d.T)({prop:i,defaultProp:c,onChange:h}),I=(0,s.useRef)(C);return(0,s.useEffect)(()=>{let e=null==b?void 0:b.form;if(e){let t=()=>D(I.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,D]),(0,s.createElement)(g,{scope:r,state:C,disabled:f},(0,s.createElement)(m.WV.button,(0,a.Z)({type:"button",role:"checkbox","aria-checked":j(C)?"mixed":C,"aria-required":u,"data-state":k(C),"data-disabled":f?"":void 0,disabled:f,value:p},x,{ref:w,onKeyDown:(0,l.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.M)(e.onClick,e=>{D(e=>!!j(e)||!e),M&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())})})),M&&(0,s.createElement)(y,{control:b,bubbles:!N.current,name:n,value:p,checked:C,required:u,disabled:f,style:{transform:"translateX(-100%)"}}))}),w=(0,s.forwardRef)((e,t)=>{let{__scopeCheckbox:r,forceMount:n,...o}=e,i=b("CheckboxIndicator",r);return(0,s.createElement)(f.z,{present:n||j(i.state)||!0===i.state},(0,s.createElement)(m.WV.span,(0,a.Z)({"data-state":k(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),y=e=>{let{control:t,checked:r,bubbles:n=!0,...o}=e,i=(0,s.useRef)(null),l=(0,c.D)(r),d=(0,u.t)(t);return(0,s.useEffect)(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let s=new Event("click",{bubbles:n});e.indeterminate=j(r),t.call(e,!j(r)&&r),e.dispatchEvent(s)}},[l,r,n]),(0,s.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!j(r)&&r},o,{tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(e){return"indeterminate"===e}function k(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var N=r(2442),M=r(8243);let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(v,{ref:t,className:(0,M.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,n.jsx)(w,{className:(0,M.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(N.Z,{className:"h-4 w-4"})})})});C.displayName=v.displayName},232:function(e,t,r){"use strict";r.r(t),r.d(t,{DropdownMenu:function(){return c},DropdownMenuCheckboxItem:function(){return w},DropdownMenuContent:function(){return b},DropdownMenuGroup:function(){return f},DropdownMenuItem:function(){return v},DropdownMenuLabel:function(){return j},DropdownMenuPortal:function(){return m},DropdownMenuRadioGroup:function(){return h},DropdownMenuRadioItem:function(){return y},DropdownMenuSeparator:function(){return k},DropdownMenuShortcut:function(){return N},DropdownMenuSub:function(){return p},DropdownMenuSubContent:function(){return g},DropdownMenuSubTrigger:function(){return x},DropdownMenuTrigger:function(){return u}});var n=r(7437),s=r(2265),a=r(8883),o=r(7158),i=r(2442),l=r(6369),d=r(8243);let c=a.fC,u=a.xz,f=a.ZA,m=a.Uv,p=a.Tr,h=a.Ee,x=s.forwardRef((e,t)=>{let{className:r,inset:s,children:i,...l}=e;return(0,n.jsxs)(a.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",r),...l,children:[i,(0,n.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})});x.displayName=a.fF.displayName;let g=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})});g.displayName=a.tu.displayName;let b=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...o}=e;return(0,n.jsx)(a.Uv,{children:(0,n.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})})});b.displayName=a.VY.displayName;let v=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",r),...o})});v.displayName=a.ck.displayName;let w=s.forwardRef((e,t)=>{let{className:r,children:s,checked:o,...l}=e;return(0,n.jsxs)(a.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:o,...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})});w.displayName=a.oC.displayName;let y=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,n.jsxs)(a.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),s]})});y.displayName=a.Rk.displayName;let j=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...o})});j.displayName=a.__.displayName;let k=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});k.displayName=a.Z0.displayName;let N=e=>{let{className:t,...r}=e;return(0,n.jsx)("span",{className:(0,d.cn)("ml-auto text-xs tracking-widest opacity-60",t),...r})};N.displayName="DropdownMenuShortcut"},1262:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(7437),s=r(2265),a=r(8243);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},7330:function(e,t,r){"use strict";let n=(0,r(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");t.Z=n},8243:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(7042),s=r(4769);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},6691:function(e,t,r){e.exports=r(7447)},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)},5184:function(e,t,r){"use strict";r.d(t,{D:function(){return s}});var n=r(2265);function s(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},6061:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(7042);let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=n.W,o=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],n=null==i?void 0:i[e];if(null===t)return null;let a=s(t)||s(n);return o[e][a]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return a(e,l,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...d}[t]):({...i,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[7895,4799,577,8434,3380,1749,2971,4938,1744],function(){return e(e.s=1278)}),_N_E=e.O()}]);