(()=>{var e={};e.id=3947,e.ids=[3947],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},95101:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>l,routeModule:()=>x,tree:()=>u});var s=r(50482),a=r(69108),i=r(62563),n=r.n(i),o=r(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let u=["",{children:["dashboard",{children:["entidades",{children:["entidadempresa",{children:["subentidades",{children:["area-direcciones",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,63539)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]/page.js"]}]},{}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]/page.js"],c="/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]/page",pathname:"/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5425:(e,t,r)=>{Promise.resolve().then(r.bind(r,10676))},10676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344),a=r(3729),i=r(91525),n=r(22254),o=r(8164),d=r(63546);function u({params:e}){let[t,r]=(0,a.useState)(null),[u,l]=(0,a.useState)(!0);(0,n.useRouter)();let{slug:c}=e,[p,x]=(0,a.useState)({visible:!1,titulo:"",mensaje:""});(0,a.useEffect)(()=>{(async()=>{if(c){l(!0);let{data:e,error:t}=await i.Z.from("direcciones").select("*").eq("id_direcciones",c).single();t?console.error("Error fetching user details: ",t):r(e),l(!1)}})()},[c]);let m=async e=>{e.preventDefault(),l(!0);let{error:r}=await i.Z.from("direcciones").update(t).eq("id_direcciones",c);r?x({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):x({visible:!0,titulo:"\xc9xito",mensaje:"Los datos del grupo han sido actualizados"}),l(!1)};return u?s.jsx("div",{children:"Loading..."}):t?(0,s.jsxs)(s.Fragment,{children:[s.jsx(d.Z,{titulo:"Editar Direccion",formState:t,handleInputChange:e=>{let{name:t,value:s}=e.target;r(e=>({...e,[t]:s}))},handleSubmit:m}),p.visible&&s.jsx(o.U,{titulo:p.titulo,mensaje:p.mensaje,visible:p.visible,onClose:()=>{x(e=>({...e,visible:!1}))}})]}):s.jsx("div",{children:"No user details found or there was an error fetching them."})}},63539:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/area-direcciones/[slug]/page.js`),{__esModule:a,$$typeof:i}=s,n=s.default}};var t=require("../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,2572,4959,783,5590,8830,570,7695],()=>r(95101));module.exports=s})();