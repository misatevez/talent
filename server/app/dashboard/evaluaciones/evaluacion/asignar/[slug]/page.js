(()=>{var e={};e.id=145,e.ids=[145],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},86383:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(50482),t=s(69108),l=s(62563),i=s.n(l),n=s(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(a,o);let c=["",{children:["dashboard",{children:["evaluaciones",{children:["evaluacion",{children:["asignar",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,87526)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/asignar/[slug]/page.js"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/asignar/[slug]/page.js"],u="/dashboard/evaluaciones/evaluacion/asignar/[slug]/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/dashboard/evaluaciones/evaluacion/asignar/[slug]/page",pathname:"/dashboard/evaluaciones/evaluacion/asignar/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},40099:(e,a,s)=>{Promise.resolve().then(s.bind(s,87719))},87719:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>u});var r=s(95344),t=s(3729),l=s(91525),i=s(16802),n=s(20586),o=s(87013),c=s(22254),d=s(8164);function u({id_evaluacion:e}){(0,c.useRouter)();let[a,s]=(0,t.useState)([]),[u,m]=(0,t.useState)([]),[x,p]=(0,t.useState)(""),[f,h]=(0,t.useState)(null),[g,j]=(0,t.useState)(!0),[v,w]=(0,t.useState)({visible:!1,titulo:"",mensaje:""});(0,t.useEffect)(()=>{(async function(){let{data:e,error:a}=await l.Z.from("usuarios").select("*");a?console.log(a):(s(e),j(!1))})()},[]),(0,t.useEffect)(()=>{(async function(){let{data:a,error:s}=await l.Z.from("evaluaciones").select("*").eq("id_evaluacion",e).single();s?console.log(s):(console.log("Evaluacion",a),m(a),j(!1))})()},[]);let b=e=>{h(f===e?null:e)},N=async(e,a)=>{let{data:s,error:r}=await l.Z.from("usuarios_evaluaciones").insert([{usuarios_id:e,id_evaluacion:a}]);r?w({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):w({visible:!0,titulo:"\xc9xito",mensaje:"Se ha asignado su evaluacion"})};if(g)return r.jsx("div",{children:"Loading..."});let y=a.filter(e=>e.primer_nombre?.toLowerCase().includes(x)||e.apellido_paterno?.toLowerCase().includes(x)||e.correo_electronico?.toLowerCase().includes(x));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bg-white p-4 m-4 rounded-lg shadow-lg",children:[r.jsx("div",{className:"flex justify-between items-center mb-4",children:(0,r.jsxs)("h1",{className:"text-2xl font-bold",children:["Asignar evaluacion: ",u.nombre," "]})}),(0,r.jsxs)("div",{className:"flex w-full max-w-full items-center space-x-2 mb-10",children:[r.jsx(i.I,{placeholder:"Search",type:"text",onChange:e=>{p(e.target.value.toLowerCase())}}),r.jsx(n.z,{type:"submit",children:"Buscar"})]}),(0,r.jsxs)(o.iA,{children:[r.jsx(o.xD,{children:(0,r.jsxs)(o.SC,{children:[r.jsx(o.ss,{className:"w-[150px]",children:"Nombre"}),r.jsx(o.ss,{className:"w-[200px]",children:"Perfil"}),r.jsx(o.ss,{className:"w-[250px]",children:"Email"}),r.jsx(o.ss,{className:"w-[100px]",children:"Seleccionar"})]})}),r.jsx(o.RM,{children:y.map((e,a)=>(0,r.jsxs)(o.SC,{children:[(0,r.jsxs)(o.pj,{children:[e.primer_nombre," ",e.apellido_paterno]}),r.jsx(o.pj,{children:e.tipo_usuario}),r.jsx(o.pj,{children:e.correo_electronico}),r.jsx(o.pj,{children:r.jsx("input",{type:"checkbox",checked:f===e.usuario_id,onChange:()=>b(e.usuario_id),className:"accent-blue-500 h-5 w-5"})})]},a))})]}),r.jsx("div",{className:"flex justify-between mt-4",children:r.jsx(n.z,{className:`bg-blue-500 text-white ${f?"":"opacity-50 cursor-not-allowed"}`,disabled:!f,onClick:()=>N(f,e),children:"Asignar"})})]}),v.visible&&r.jsx(d.U,{titulo:v.titulo,mensaje:v.mensaje,visible:v.visible,onClose:()=>{w(e=>({...e,visible:!1}))}})]})}},8164:(e,a,s)=>{"use strict";s.d(a,{U:()=>b});var r=s(95344),t=s(88410),l=s(3729),i=s(65651),n=s(98462),o=s(2256),c=s(16069),d=s(62409);let u="Avatar",[m,x]=(0,n.b)(u),[p,f]=m(u),h=(0,l.forwardRef)((e,a)=>{let{__scopeAvatar:s,...r}=e,[t,n]=(0,l.useState)("idle");return(0,l.createElement)(p,{scope:s,imageLoadingStatus:t,onImageLoadingStatusChange:n},(0,l.createElement)(d.WV.span,(0,i.Z)({},r,{ref:a})))}),g=(0,l.forwardRef)((e,a)=>{let{__scopeAvatar:s,src:r,onLoadingStatusChange:t=()=>{},...n}=e,u=f("AvatarImage",s),m=function(e){let[a,s]=(0,l.useState)("idle");return(0,c.b)(()=>{if(!e){s("error");return}let a=!0,r=new window.Image,t=e=>()=>{a&&s(e)};return s("loading"),r.onload=t("loaded"),r.onerror=t("error"),r.src=e,()=>{a=!1}},[e]),a}(r),x=(0,o.W)(e=>{t(e),u.onImageLoadingStatusChange(e)});return(0,c.b)(()=>{"idle"!==m&&x(m)},[m,x]),"loaded"===m?(0,l.createElement)(d.WV.img,(0,i.Z)({},n,{ref:a,src:r})):null}),j=(0,l.forwardRef)((e,a)=>{let{__scopeAvatar:s,delayMs:r,...t}=e,n=f("AvatarFallback",s),[o,c]=(0,l.useState)(void 0===r);return(0,l.useEffect)(()=>{if(void 0!==r){let e=window.setTimeout(()=>c(!0),r);return()=>window.clearTimeout(e)}},[r]),o&&"loaded"!==n.imageLoadingStatus?(0,l.createElement)(d.WV.span,(0,i.Z)({},t,{ref:a})):null});var v=s(74456);let w=l.forwardRef(({className:e,...a},s)=>r.jsx(h,{ref:s,className:(0,v.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...a}));function b({titulo:e,mensaje:a,visible:s,onClose:l}){return s?r.jsx("aside",{className:"fixed right-0 top-0 m-4 max-w-sm",children:(0,r.jsxs)(t.Zb,{className:"bg-white shadow-lg overflow-hidden",children:[r.jsx(t.Ol,{className:"p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[r.jsx(t.ll,{className:"text-lg font-bold",children:"Notificacion"}),r.jsx(N,{className:"w-4 h-4 cursor-pointer",onClick:l})]})}),(0,r.jsxs)(t.aY,{className:"p-4",children:[r.jsx("div",{className:"mb-4",children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[r.jsx(w,{className:"w-10 h-10",src:"/placeholder.svg?height=40&width=40"}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"font-bold",children:e}),r.jsx("p",{className:"text-sm text-gray-500",children:a})]})]})}),r.jsx("div",{className:"flex justify-start",children:r.jsx(y,{className:"w-4 h-4 cursor-pointer",onClick:l})})]})]})},"1"):null}function N(e){return(0,r.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),r.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]})}function y(e){return(0,r.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r.jsx("polyline",{points:"16 17 21 12 16 7"}),r.jsx("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})}w.displayName=h.displayName,l.forwardRef(({className:e,...a},s)=>r.jsx(g,{ref:s,className:(0,v.cn)("aspect-square h-full w-full",e),...a})).displayName=g.displayName,l.forwardRef(({className:e,...a},s)=>r.jsx(j,{ref:s,className:(0,v.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...a})).displayName=j.displayName},88410:(e,a,s)=>{"use strict";s.d(a,{Ol:()=>n,Zb:()=>i,aY:()=>c,ll:()=>o});var r=s(95344),t=s(3729),l=s(74456);let i=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...a}));i.displayName="Card";let n=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...a}));n.displayName="CardHeader";let o=t.forwardRef(({className:e,...a},s)=>r.jsx("h3",{ref:s,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...a}));o.displayName="CardTitle",t.forwardRef(({className:e,...a},s)=>r.jsx("p",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...a})).displayName="CardDescription";let c=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("p-6 pt-0",e),...a}));c.displayName="CardContent",t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",e),...a})).displayName="CardFooter"},87013:(e,a,s)=>{"use strict";s.d(a,{RM:()=>o,SC:()=>c,iA:()=>i,pj:()=>u,ss:()=>d,xD:()=>n});var r=s(95344),t=s(3729),l=s(74456);let i=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:s,className:(0,l.cn)("w-full caption-bottom text-sm",e),...a})}));i.displayName="Table";let n=t.forwardRef(({className:e,...a},s)=>r.jsx("thead",{ref:s,className:(0,l.cn)("[&_tr]:border-b",e),...a}));n.displayName="TableHeader";let o=t.forwardRef(({className:e,...a},s)=>r.jsx("tbody",{ref:s,className:(0,l.cn)("[&_tr:last-child]:border-0",e),...a}));o.displayName="TableBody",t.forwardRef(({className:e,...a},s)=>r.jsx("tfoot",{ref:s,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a})).displayName="TableFooter";let c=t.forwardRef(({className:e,...a},s)=>r.jsx("tr",{ref:s,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));c.displayName="TableRow";let d=t.forwardRef(({className:e,...a},s)=>r.jsx("th",{ref:s,className:(0,l.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));d.displayName="TableHead";let u=t.forwardRef(({className:e,...a},s)=>r.jsx("td",{ref:s,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));u.displayName="TableCell",t.forwardRef(({className:e,...a},s)=>r.jsx("caption",{ref:s,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},87526:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>o});var r=s(25036);let t=(0,s(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/evaluaciones/evaluacion/asignar-evaluacion.jsx`),{__esModule:l,$$typeof:i}=t,n=t.default;function o({params:e}){let a=e.slug;return r.jsx(n,{id_evaluacion:a})}}};var a=require("../../../../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[1638,2572,4959,783,5590,570],()=>s(86383));module.exports=r})();