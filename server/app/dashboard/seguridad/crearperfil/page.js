(()=>{var e={};e.id=7641,e.ids=[7641],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},58884:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=t(50482),s=t(69108),l=t(62563),i=t.n(l),n=t(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(r,o);let d=["",{children:["dashboard",{children:["seguridad",{children:["crearperfil",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6146)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/seguridad/crearperfil/page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/seguridad/crearperfil/page.js"],u="/dashboard/seguridad/crearperfil/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/seguridad/crearperfil/page",pathname:"/dashboard/seguridad/crearperfil",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},75692:(e,r,t)=>{Promise.resolve().then(t.bind(t,68202))},17496:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var a=t(95344),s=t(3729),l=t(82549),i=t(91525);function n({onGrupoTipoChange:e,selectedTipoId:r}){let[t,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{let{data:e,error:r}=await i.Z.from("entidad_empresa").select("id_entidad_empresa, nombre");r?console.error("Error al obtener los tipos de subentidad ",r):n(e)})()},[]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Entidades Empresa:"}),(0,a.jsxs)(l.Select,{onValueChange:e,value:r?.toString(),children:[a.jsx(l.SelectTrigger,{id:"group-type",children:a.jsx(l.SelectValue,{placeholder:"Seleccione uno"})}),a.jsx(l.SelectContent,{position:"popper",children:t.map((e,r)=>a.jsx(l.SelectItem,{value:e.id_entidad_empresa.toString(),children:e.nombre},r))})]})]})}},8164:(e,r,t)=>{"use strict";t.d(r,{U:()=>v});var a=t(95344),s=t(88410),l=t(3729),i=t(65651),n=t(98462),o=t(2256),d=t(16069),c=t(62409);let u="Avatar",[p,m]=(0,n.b)(u),[x,f]=p(u),h=(0,l.forwardRef)((e,r)=>{let{__scopeAvatar:t,...a}=e,[s,n]=(0,l.useState)("idle");return(0,l.createElement)(x,{scope:t,imageLoadingStatus:s,onImageLoadingStatusChange:n},(0,l.createElement)(c.WV.span,(0,i.Z)({},a,{ref:r})))}),g=(0,l.forwardRef)((e,r)=>{let{__scopeAvatar:t,src:a,onLoadingStatusChange:s=()=>{},...n}=e,u=f("AvatarImage",t),p=function(e){let[r,t]=(0,l.useState)("idle");return(0,d.b)(()=>{if(!e){t("error");return}let r=!0,a=new window.Image,s=e=>()=>{r&&t(e)};return t("loading"),a.onload=s("loaded"),a.onerror=s("error"),a.src=e,()=>{r=!1}},[e]),r}(a),m=(0,o.W)(e=>{s(e),u.onImageLoadingStatusChange(e)});return(0,d.b)(()=>{"idle"!==p&&m(p)},[p,m]),"loaded"===p?(0,l.createElement)(c.WV.img,(0,i.Z)({},n,{ref:r,src:a})):null}),j=(0,l.forwardRef)((e,r)=>{let{__scopeAvatar:t,delayMs:a,...s}=e,n=f("AvatarFallback",t),[o,d]=(0,l.useState)(void 0===a);return(0,l.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>d(!0),a);return()=>window.clearTimeout(e)}},[a]),o&&"loaded"!==n.imageLoadingStatus?(0,l.createElement)(c.WV.span,(0,i.Z)({},s,{ref:r})):null});var w=t(74456);let b=l.forwardRef(({className:e,...r},t)=>a.jsx(h,{ref:t,className:(0,w.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));function v({titulo:e,mensaje:r,visible:t,onClose:l}){return t?a.jsx("aside",{className:"fixed right-0 top-0 m-4 max-w-sm",children:(0,a.jsxs)(s.Zb,{className:"bg-white shadow-lg overflow-hidden",children:[a.jsx(s.Ol,{className:"p-4",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(s.ll,{className:"text-lg font-bold",children:"Notificacion"}),a.jsx(N,{className:"w-4 h-4 cursor-pointer",onClick:l})]})}),(0,a.jsxs)(s.aY,{className:"p-4",children:[a.jsx("div",{className:"mb-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx(b,{className:"w-10 h-10",src:"/placeholder.svg?height=40&width=40"}),(0,a.jsxs)("div",{children:[a.jsx("p",{className:"font-bold",children:e}),a.jsx("p",{className:"text-sm text-gray-500",children:r})]})]})}),a.jsx("div",{className:"flex justify-start",children:a.jsx(y,{className:"w-4 h-4 cursor-pointer",onClick:l})})]})]})},"1"):null}function N(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),a.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]})}function y(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),a.jsx("polyline",{points:"16 17 21 12 16 7"}),a.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})}b.displayName=h.displayName,l.forwardRef(({className:e,...r},t)=>a.jsx(g,{ref:t,className:(0,w.cn)("aspect-square h-full w-full",e),...r})).displayName=g.displayName,l.forwardRef(({className:e,...r},t)=>a.jsx(j,{ref:t,className:(0,w.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r})).displayName=j.displayName},68202:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var a=t(95344),s=t(91525),l=t(3729),i=t(8164),n=t(16802),o=t(20586),d=t(17496),c=t(82549);function u(){let[e,r]=(0,l.useState)({nombre:"",descripcion:"",id_entidad_empresa:"",tipo_usuario:""}),[t,u]=(0,l.useState)({visible:!1,titulo:"",mensaje:""}),p=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},m=(e,t)=>{r(r=>({...r,[t]:e}))},x=async r=>{r.preventDefault(),console.log(e);let{data:t,error:a}=await s.Z.from("perfil_usuario").insert([e]);a?u({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+a.message}):u({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su perfil de entidad empresa"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("main",{className:"p-8 space-y-8 mt-8 mb-8 mx-auto max-w-7xl",children:[a.jsx("h1",{className:"text-4xl font-bold mb-6 text-center",children:"Perfiles de usuario"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[a.jsx("div",{className:"flex flex-col gap-2",children:a.jsx(d.Z,{selectedTipoId:e.id_entidad_empresa,onGrupoTipoChange:e=>{p({target:{name:"id_entidad_empresa",value:e}})}})}),(0,a.jsxs)("label",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"block text-sm font-medium mb-1",children:"Tipo de usuario:"}),(0,a.jsxs)(c.Select,{onValueChange:e=>m(e,"tipo_usuario"),value:e.tipo_usuario,children:[a.jsx(c.SelectTrigger,{id:"group-type",children:a.jsx(c.SelectValue,{placeholder:"Seleccione uno"})}),a.jsx(c.SelectContent,{position:"popper",children:[{valor:"Internal",nombre:"Internal"},{valor:"External",nombre:"External"}].map((e,r)=>a.jsx(c.SelectItem,{value:e.valor,children:e.nombre},r))})]})]})]}),a.jsx("div",{className:"grid grid-cols gap-4",children:(0,a.jsxs)("label",{className:"flex flex-col gap-2 w-full",children:[a.jsx("span",{className:"block text-sm font-medium",children:"Nombre del perfil:"}),a.jsx(n.I,{name:"nombre",value:e.nombre,onChange:p,className:"border rounded p-2 w-full",placeholder:"Ejemplo: Regional Regulator - Sedes",style:{width:"100%"},type:"text"})]})}),a.jsx("div",{className:"grid grid-cols gap-4",children:(0,a.jsxs)("label",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"block text-sm font-medium",children:"Descripcion de funciones:"}),a.jsx("textarea",{name:"descripcion",value:e.descripcion,onChange:p,className:"border rounded p-2 w-full",cols:"50",rows:"10"})]})}),a.jsx("div",{className:"flex items-center gap-2 mt-4",children:a.jsx(o.z,{onClick:x,className:"mt-4",children:"Guardar"})})]}),t.visible&&a.jsx(i.U,{titulo:t.titulo,mensaje:t.mensaje,visible:t.visible,onClose:()=>{u(e=>({...e,visible:!1}))}})]})}},88410:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>n,Zb:()=>i,aY:()=>d,ll:()=>o});var a=t(95344),s=t(3729),l=t(74456);let i=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));i.displayName="Card";let n=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...r}));n.displayName="CardHeader";let o=s.forwardRef(({className:e,...r},t)=>a.jsx("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));o.displayName="CardTitle",s.forwardRef(({className:e,...r},t)=>a.jsx("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",e),...r})).displayName="CardDescription";let d=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,l.cn)("p-6 pt-0",e),...r}));d.displayName="CardContent",s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},82549:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Select:()=>c,SelectContent:()=>h,SelectGroup:()=>u,SelectItem:()=>j,SelectLabel:()=>g,SelectScrollDownButton:()=>f,SelectScrollUpButton:()=>x,SelectSeparator:()=>w,SelectTrigger:()=>m,SelectValue:()=>p});var a=t(95344),s=t(3729),l=t(1146),i=t(25390),n=t(12704),o=t(62312),d=t(74456);let c=l.fC,u=l.ZA,p=l.B4,m=s.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(l.xz,{ref:s,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...t,children:[r,a.jsx(l.JO,{asChild:!0,children:a.jsx(i.Z,{className:"h-4 w-4 opacity-50"})})]}));m.displayName=l.xz.displayName;let x=s.forwardRef(({className:e,...r},t)=>a.jsx(l.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:a.jsx(n.Z,{className:"h-4 w-4"})}));x.displayName=l.u_.displayName;let f=s.forwardRef(({className:e,...r},t)=>a.jsx(l.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:a.jsx(i.Z,{className:"h-4 w-4"})}));f.displayName=l.$G.displayName;let h=s.forwardRef(({className:e,children:r,position:t="popper",...s},i)=>a.jsx(l.h_,{children:(0,a.jsxs)(l.VY,{ref:i,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...s,children:[a.jsx(x,{}),a.jsx(l.l_,{className:(0,d.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),a.jsx(f,{})]})}));h.displayName=l.VY.displayName;let g=s.forwardRef(({className:e,...r},t)=>a.jsx(l.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...r}));g.displayName=l.__.displayName;let j=s.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(l.ck,{ref:s,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white",e),...t,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(l.wU,{children:a.jsx(o.Z,{className:"h-4 w-4"})})}),a.jsx(l.eT,{children:r})]}));j.displayName=l.ck.displayName;let w=s.forwardRef(({className:e,...r},t)=>a.jsx(l.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...r}));w.displayName=l.Z0.displayName},6146:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var a=t(25036);let s=(0,t(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/seguridad/crear-perfil-usuario.jsx`),{__esModule:l,$$typeof:i}=s,n=s.default;function o(){return a.jsx(n,{})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[1638,2572,4959,783,5590,8830,570],()=>t(58884));module.exports=a})();