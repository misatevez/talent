(()=>{var e={};e.id=1082,e.ids=[1082],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},96478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=a(50482),s=a(69108),l=a(62563),i=a.n(l),o=a(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);a.d(t,n);let d=["",{children:["dashboard",{children:["evaluaciones",{children:["temas",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,14915)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/temas/[slug]/page.js"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/temas/[slug]/page.js"],m="/dashboard/evaluaciones/temas/[slug]/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/evaluaciones/temas/[slug]/page",pathname:"/dashboard/evaluaciones/temas/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},41466:(e,t,a)=>{Promise.resolve().then(a.bind(a,44202))},44202:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var r=a(95344),s=a(3729),l=a(22254),i=a(91525),o=a(16802),n=a(20586),d=a(8164),c=a(82549);function m({id_tema:e}){let t=(0,l.useRouter)(),[a,m]=(0,s.useState)({nombre:"",descripcion:"",nivel:"",clase:""}),[u,p]=(0,s.useState)({visible:!1,titulo:"",mensaje:""});(0,s.useEffect)(()=>{(async()=>{if(e){let{data:t,error:a}=await i.Z.from("temas").select("*").eq("id_tema",e).single();a?console.error("Error fetching evaluation details: ",a):m({...t})}})()},[e]);let x=e=>{let{name:t,value:a}=e.target;m(e=>({...e,[t]:a}))},f=async t=>{t.preventDefault();let{error:r}=await i.Z.from("temas").update(a).eq("id_tema",e);r?p({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar m\xe1s tarde: "+r.message}):p({visible:!0,titulo:"\xc9xito",mensaje:"Tema actualizado correctamente"})},h=async r=>{r.preventDefault();let{error:s}=await i.Z.from("temas").update(a).eq("id_tema",e);s?p({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar m\xe1s tarde: "+s.message}):(p({visible:!1}),t.push(`/dashboard/evaluaciones/preguntas/crearpregunta/${e}`))};return(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"p-4 mx-auto w-full max-w-3xl",children:r.jsx("form",{onSubmit:f,className:"rounded-lg shadow-lg",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-inner m-auto text-start",children:[r.jsx("h1",{className:"text-3xl font-bold text-center mt-4  text-gray-800",children:"Editar tema"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 mt-6",children:[r.jsx("div",{className:"flex flex-col m-2",children:(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block font-semibold",htmlFor:"group-name",children:"Nombre Tema:"}),r.jsx(o.I,{name:"nombre",value:a.nombre,onChange:x,id:"group-name",placeholder:"Microsoft Excel 365"})]})}),(0,r.jsxs)("div",{className:"flex flex-col m-2",children:[r.jsx("label",{className:"font-semibold",htmlFor:"nivel",children:"Nivel de Profundidad"}),(0,r.jsxs)(c.Select,{onValueChange:e=>handleSelectChange(e,"nivel"),value:a.nivel,children:[r.jsx(c.SelectTrigger,{id:"group-type",children:r.jsx(c.SelectValue,{placeholder:"Seleccione uno"})}),r.jsx(c.SelectContent,{position:"popper",children:[{valor:"Basico",nombre:"1. B\xe1sico"},{valor:"Medio",nombre:"2. Medio"},{valor:"Intermedio",nombre:"3. Intermedio"},{valor:"Avanzado",nombre:"4. Avanzado"},{valor:"Experto",nombre:"5. Experto"},{valor:"Instructor",nombre:"6. Instructor"}].map((e,t)=>r.jsx(c.SelectItem,{value:e.valor,children:e.nombre},t))})]})]}),(0,r.jsxs)("div",{className:"flex flex-col m-2",children:[r.jsx("label",{className:"font-semibold",htmlFor:"clase",children:"Objetivo Asociado"}),(0,r.jsxs)(c.Select,{onValueChange:e=>handleSelectChange(e,"clase"),value:a.clase,children:[r.jsx(c.SelectTrigger,{id:"group-type",children:r.jsx(c.SelectValue,{placeholder:"Seleccione uno"})}),r.jsx(c.SelectContent,{position:"popper",children:[{valor:"Actitud",nombre:"Actitud"},{valor:"Aptitud",nombre:"Aptitud"},{valor:"Conocimiento",nombre:"Conocimiento"},{valor:"Competencia",nombre:"Competencia"},{valor:"Especifica-Desempe\xf1o",nombre:"Especifica-Desempe\xf1o"},{valor:"Habilidad",nombre:"Habilidad"},{valor:"Tecnico",nombre:"Tecnico"},{valor:"Psicometrico",nombre:"Psicometrico"}].map((e,t)=>r.jsx(c.SelectItem,{value:e.valor,children:e.nombre},t))})]})]})]}),(0,r.jsxs)("div",{className:"m-2",children:[r.jsx("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-description",children:"Descripci\xf3n Tema:"}),r.jsx("textarea",{name:"descripcion",value:a.descripcion,onChange:x,className:"resize-none border rounded-md w-full p-2",id:"group-description",placeholder:"Microsoft Excel, forma parte de la suite de Microsoft Office, es una aplicaci\xf3n que permite realizar hojas de c\xe1lculo, que est\xe1 organizada por filas y columnas, y que se utiliza para capturar, calcular y analizar datos num\xe9ricos.",rows:"4"})]}),(0,r.jsxs)("div",{className:"flex justify-around mt-4",children:[r.jsx(n.z,{type:"button",className:"bg-green-500 text-white",variant:"default",onClick:h,children:"Asignar Preguntas"}),r.jsx(n.z,{type:"submit",className:"bg-blue-500 text-white",variant:"default",children:"Guardar cambios"}),r.jsx(n.z,{type:"button",className:"bg-red-500 text-white",variant:"default",onClick:()=>t.back(),children:"Volver"})]})]})})}),u.visible&&r.jsx(d.U,{titulo:u.titulo,mensaje:u.mensaje,visible:u.visible,onClose:()=>{p(e=>({...e,visible:!1}))}})]})}},8164:(e,t,a)=>{"use strict";a.d(t,{U:()=>w});var r=a(95344),s=a(88410),l=a(3729),i=a(65651),o=a(98462),n=a(2256),d=a(16069),c=a(62409);let m="Avatar",[u,p]=(0,o.b)(m),[x,f]=u(m),h=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,...r}=e,[s,o]=(0,l.useState)("idle");return(0,l.createElement)(x,{scope:a,imageLoadingStatus:s,onImageLoadingStatusChange:o},(0,l.createElement)(c.WV.span,(0,i.Z)({},r,{ref:t})))}),g=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,src:r,onLoadingStatusChange:s=()=>{},...o}=e,m=f("AvatarImage",a),u=function(e){let[t,a]=(0,l.useState)("idle");return(0,d.b)(()=>{if(!e){a("error");return}let t=!0,r=new window.Image,s=e=>()=>{t&&a(e)};return a("loading"),r.onload=s("loaded"),r.onerror=s("error"),r.src=e,()=>{t=!1}},[e]),t}(r),p=(0,n.W)(e=>{s(e),m.onImageLoadingStatusChange(e)});return(0,d.b)(()=>{"idle"!==u&&p(u)},[u,p]),"loaded"===u?(0,l.createElement)(c.WV.img,(0,i.Z)({},o,{ref:t,src:r})):null}),v=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:a,delayMs:r,...s}=e,o=f("AvatarFallback",a),[n,d]=(0,l.useState)(void 0===r);return(0,l.useEffect)(()=>{if(void 0!==r){let e=window.setTimeout(()=>d(!0),r);return()=>window.clearTimeout(e)}},[r]),n&&"loaded"!==o.imageLoadingStatus?(0,l.createElement)(c.WV.span,(0,i.Z)({},s,{ref:t})):null});var b=a(74456);let j=l.forwardRef(({className:e,...t},a)=>r.jsx(h,{ref:a,className:(0,b.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));function w({titulo:e,mensaje:t,visible:a,onClose:l}){return a?r.jsx("aside",{className:"fixed right-0 top-0 m-4 max-w-sm",children:(0,r.jsxs)(s.Zb,{className:"bg-white shadow-lg overflow-hidden",children:[r.jsx(s.Ol,{className:"p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[r.jsx(s.ll,{className:"text-lg font-bold",children:"Notificacion"}),r.jsx(N,{className:"w-4 h-4 cursor-pointer",onClick:l})]})}),(0,r.jsxs)(s.aY,{className:"p-4",children:[r.jsx("div",{className:"mb-4",children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[r.jsx(j,{className:"w-10 h-10",src:"/placeholder.svg?height=40&width=40"}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"font-bold",children:e}),r.jsx("p",{className:"text-sm text-gray-500",children:t})]})]})}),r.jsx("div",{className:"flex justify-start",children:r.jsx(y,{className:"w-4 h-4 cursor-pointer",onClick:l})})]})]})},"1"):null}function N(e){return(0,r.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),r.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]})}function y(e){return(0,r.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r.jsx("polyline",{points:"16 17 21 12 16 7"}),r.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})}j.displayName=h.displayName,l.forwardRef(({className:e,...t},a)=>r.jsx(g,{ref:a,className:(0,b.cn)("aspect-square h-full w-full",e),...t})).displayName=g.displayName,l.forwardRef(({className:e,...t},a)=>r.jsx(v,{ref:a,className:(0,b.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t})).displayName=v.displayName},88410:(e,t,a)=>{"use strict";a.d(t,{Ol:()=>o,Zb:()=>i,aY:()=>d,ll:()=>n});var r=a(95344),s=a(3729),l=a(74456);let i=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));i.displayName="Card";let o=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...t}));o.displayName="CardHeader";let n=s.forwardRef(({className:e,...t},a)=>r.jsx("h3",{ref:a,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));n.displayName="CardTitle",s.forwardRef(({className:e,...t},a)=>r.jsx("p",{ref:a,className:(0,l.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let d=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,l.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent",s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,l.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},82549:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Select:()=>c,SelectContent:()=>h,SelectGroup:()=>m,SelectItem:()=>v,SelectLabel:()=>g,SelectScrollDownButton:()=>f,SelectScrollUpButton:()=>x,SelectSeparator:()=>b,SelectTrigger:()=>p,SelectValue:()=>u});var r=a(95344),s=a(3729),l=a(1146),i=a(25390),o=a(12704),n=a(62312),d=a(74456);let c=l.fC,m=l.ZA,u=l.B4,p=s.forwardRef(({className:e,children:t,...a},s)=>(0,r.jsxs)(l.xz,{ref:s,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...a,children:[t,r.jsx(l.JO,{asChild:!0,children:r.jsx(i.Z,{className:"h-4 w-4 opacity-50"})})]}));p.displayName=l.xz.displayName;let x=s.forwardRef(({className:e,...t},a)=>r.jsx(l.u_,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(o.Z,{className:"h-4 w-4"})}));x.displayName=l.u_.displayName;let f=s.forwardRef(({className:e,...t},a)=>r.jsx(l.$G,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(i.Z,{className:"h-4 w-4"})}));f.displayName=l.$G.displayName;let h=s.forwardRef(({className:e,children:t,position:a="popper",...s},i)=>r.jsx(l.h_,{children:(0,r.jsxs)(l.VY,{ref:i,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===a&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:a,...s,children:[r.jsx(x,{}),r.jsx(l.l_,{className:(0,d.cn)("p-1","popper"===a&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),r.jsx(f,{})]})}));h.displayName=l.VY.displayName;let g=s.forwardRef(({className:e,...t},a)=>r.jsx(l.__,{ref:a,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));g.displayName=l.__.displayName;let v=s.forwardRef(({className:e,children:t,...a},s)=>(0,r.jsxs)(l.ck,{ref:s,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white",e),...a,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(l.wU,{children:r.jsx(n.Z,{className:"h-4 w-4"})})}),r.jsx(l.eT,{children:t})]}));v.displayName=l.ck.displayName;let b=s.forwardRef(({className:e,...t},a)=>r.jsx(l.Z0,{ref:a,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));b.displayName=l.Z0.displayName},14915:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(25036);let s=(0,a(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/evaluaciones/temas/editar-tema.jsx`),{__esModule:l,$$typeof:i}=s,o=s.default;function n({params:e}){let t=e.slug;return r.jsx(o,{id_tema:t})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[1638,2572,4959,783,5590,8830,570],()=>a(96478));module.exports=r})();