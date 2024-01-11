exports.id=570,exports.ids=[570],exports.modules={81760:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},87092:(e,t,r)=>{Promise.resolve().then(r.bind(r,10447))},55169:(e,t,r)=>{Promise.resolve().then(r.bind(r,67903)),Promise.resolve().then(r.bind(r,10447))},10447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(95344),a=r(3729),n=r(91525),o=r(22254);let i=({children:e})=>{let t=(0,o.useRouter)(),[r,i]=(0,a.useState)(null),[d,l]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{(async()=>{let{data:{session:e},error:r}=await n.Z.auth.getSession();r?(console.error("Error checking user:",r),l(!1)):e&&e.user?(console.log("User found: ",e.user),i(e.user)):t.push("/login"),l(!1)})()},[]),d)?null:r?s.jsx(s.Fragment,{children:e}):null}},67903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Dashboard:()=>m});var s=r(95344),a=r(20783),n=r.n(a),o=r(51762),i=r(20586);r(16802),r(39159);var d=r(22254),l=r(41223),c=r.n(l),u=r(91525);function m({children:e}){let t=(0,d.useRouter)(),r=async()=>{let{error:e}=await u.Z.auth.signOut();e?console.log("Error logging out:",e.message):t.push("/")};return(0,s.jsxs)("div",{className:"flex flex-col w-full min-h-screen",children:[(0,s.jsxs)("aside",{className:"w-64 h-full bg-white dark:bg-gray-700 border-r fixed top-0 left-0 overflow-auto",children:[s.jsx("div",{className:"flex items-center justify-center h-16 mt-3",children:s.jsx(c(),{className:"w-40",width:300,height:300,alt:"Picture of the author",src:"https://i.ibb.co/FHFCs6b/2-LOGO-XTRAT-2023-V13.png"})}),(0,s.jsxs)("nav",{className:"flex flex-col p-4",children:[(0,s.jsxs)(n(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/seguridad",children:[s.jsx(f,{className:"w-6 h-6"}),"Seguridad y acceso"]}),(0,s.jsxs)(n(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/entidades",children:[s.jsx(x,{className:"w-6 h-6"}),"Estructura Organizacional (Entidades)"]}),(0,s.jsxs)(n(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/personal",children:[s.jsx(g,{className:"w-6 h-6"}),"Administraci\xf3n de Personal"]}),(0,s.jsxs)(n(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard/evaluaciones",children:[s.jsx(h,{className:"w-6 h-6"}),"Administraci\xf3n Evaluaciones"]}),(0,s.jsxs)(n(),{className:"flex items-center gap-2 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200",href:"/dashboard",children:[s.jsx(p,{className:"w-6 h-6"}),"M\xe9tricas (Dashboard)"]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full min-h-screen pl-64",children:[s.jsx("header",{className:"flex items-center h-16 px-4 border-b shrink-0 md:px-6",children:(0,s.jsxs)("div",{className:"flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4",children:[s.jsx("form",{className:"flex-1 ml-auto sm:flex-initial",children:s.jsx("div",{className:"relative"})}),s.jsx(i.z,{className:"rounded-full",size:"icon",variant:"ghost",children:(0,s.jsxs)(o.DropdownMenu,{children:[s.jsx(o.DropdownMenuTrigger,{asChild:!0,children:(0,s.jsxs)("div",{children:[s.jsx(g,{className:"rounded-full h-8 w-8 border"}),s.jsx("span",{className:"sr-only",children:"Toggle user menu"})]})}),(0,s.jsxs)(o.DropdownMenuContent,{children:[s.jsx(o.DropdownMenuItem,{onClick:()=>t.push("/dashboard/perfil"),children:"Perfil"}),s.jsx(o.DropdownMenuItem,{onClick:()=>r(),children:"Logout"})]})]})})]})}),e]})]},"1")}function f(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),s.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function x(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}),s.jsx("rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}),s.jsx("line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}),s.jsx("line",{x1:"6",x2:"6.01",y1:"18",y2:"18"})]})}function h(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),s.jsx("path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}),s.jsx("path",{d:"M12 17h.01"})]})}function p(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function g(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}},20586:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var s=r(95344),a=r(3729),n=r(32751),o=r(49247),i=r(74456);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},l)=>{let c=a?n.g7:"button";return s.jsx(c,{className:(0,i.cn)(d({variant:t,size:r,className:e})),ref:l,...o})});l.displayName="Button"},39159:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Checkbox:()=>d});var s=r(95344),a=r(3729),n=r(85684),o=r(62312),i=r(74456);let d=a.forwardRef(({className:e,...t},r)=>s.jsx(n.fC,{ref:r,className:(0,i.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:s.jsx(n.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:s.jsx(o.Z,{className:"h-4 w-4"})})}));d.displayName=n.fC.displayName},51762:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DropdownMenu:()=>c,DropdownMenuCheckboxItem:()=>v,DropdownMenuContent:()=>b,DropdownMenuGroup:()=>m,DropdownMenuItem:()=>w,DropdownMenuLabel:()=>j,DropdownMenuPortal:()=>f,DropdownMenuRadioGroup:()=>h,DropdownMenuRadioItem:()=>y,DropdownMenuSeparator:()=>N,DropdownMenuShortcut:()=>k,DropdownMenuSub:()=>x,DropdownMenuSubContent:()=>g,DropdownMenuSubTrigger:()=>p,DropdownMenuTrigger:()=>u});var s=r(95344),a=r(3729),n=r(30233),o=r(97751),i=r(62312),d=r(82958),l=r(74456);let c=n.fC,u=n.xz,m=n.ZA,f=n.Uv,x=n.Tr,h=n.Ee,p=a.forwardRef(({className:e,inset:t,children:r,...a},i)=>(0,s.jsxs)(n.fF,{ref:i,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...a,children:[r,s.jsx(o.Z,{className:"ml-auto h-4 w-4"})]}));p.displayName=n.fF.displayName;let g=a.forwardRef(({className:e,...t},r)=>s.jsx(n.tu,{ref:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));g.displayName=n.tu.displayName;let b=a.forwardRef(({className:e,sideOffset:t=4,...r},a)=>s.jsx(n.Uv,{children:s.jsx(n.VY,{ref:a,sideOffset:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));b.displayName=n.VY.displayName;let w=a.forwardRef(({className:e,inset:t,...r},a)=>s.jsx(n.ck,{ref:a,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...r}));w.displayName=n.ck.displayName;let v=a.forwardRef(({className:e,children:t,checked:r,...a},o)=>(0,s.jsxs)(n.oC,{ref:o,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:r,...a,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(n.wU,{children:s.jsx(i.Z,{className:"h-4 w-4"})})}),t]}));v.displayName=n.oC.displayName;let y=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(n.Rk,{ref:a,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(n.wU,{children:s.jsx(d.Z,{className:"h-2 w-2 fill-current"})})}),t]}));y.displayName=n.Rk.displayName;let j=a.forwardRef(({className:e,inset:t,...r},a)=>s.jsx(n.__,{ref:a,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...r}));j.displayName=n.__.displayName;let N=a.forwardRef(({className:e,...t},r)=>s.jsx(n.Z0,{ref:r,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));N.displayName=n.Z0.displayName;let k=({className:e,...t})=>s.jsx("span",{className:(0,l.cn)("ml-auto text-xs tracking-widest opacity-60",e),...t});k.displayName="DropdownMenuShortcut"},16802:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var s=r(95344),a=r(3729),n=r(74456);let o=a.forwardRef(({className:e,type:t,...r},a)=>s.jsx("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...r}));o.displayName="Input"},91525:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(48451).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA")},74456:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(56815),a=r(79377);function n(...e){return(0,a.m6)((0,s.W)(e))}},12696:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(25036),a=r(25854),n=r(86843);let o=(0,n.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/dashboard/dashboard.jsx`),{__esModule:i,$$typeof:d}=o;o.default;let l=(0,n.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/dashboard/dashboard.jsx#Dashboard`);function c({children:e}){return s.jsx(a.ZP,{children:s.jsx(l,{children:e})})}},51965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>o});var s=r(25036),a=r(11541),n=r.n(a);r(5023),r(25854);let o={title:"Xtra Talent",description:"Xtra Talent is a platform for discovering and showcasing talent."};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:e})})}},25854:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});let s=(0,r(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ProtectedRoute.js`),{__esModule:a,$$typeof:n}=s,o=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};