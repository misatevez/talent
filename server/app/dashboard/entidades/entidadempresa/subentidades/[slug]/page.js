(()=>{var e={};e.id=9149,e.ids=[9149],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},30046:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>u});var s=r(50482),a=r(69108),i=r(62563),n=r.n(i),o=r(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let u=["",{children:["dashboard",{children:["entidades",{children:["entidadempresa",{children:["subentidades",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,32581)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/[slug]/page.js"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/[slug]/page.js"],p="/dashboard/entidades/entidadempresa/subentidades/[slug]/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/entidades/entidadempresa/subentidades/[slug]/page",pathname:"/dashboard/entidades/entidadempresa/subentidades/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},98604:(e,t,r)=>{Promise.resolve().then(r.bind(r,70023))},70023:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344),a=r(3729),i=r(91525),n=r(22254),o=r(8164),d=r(24480);function u({params:e}){let[t,r]=(0,a.useState)(null),[u,l]=(0,a.useState)(!0);(0,n.useRouter)();let{slug:p}=e,[c,x]=(0,a.useState)({visible:!1,titulo:"",mensaje:""});(0,a.useEffect)(()=>{(async()=>{if(p){l(!0);let{data:e,error:t}=await i.Z.from("sub_entidad").select("*").eq("id_sub_entidad",p).single();t?console.error("Error fetching user details: ",t):r(e),l(!1)}})()},[p]);let m=async e=>{e.preventDefault(),l(!0);let{error:r}=await i.Z.from("sub_entidad").update(t).eq("id_sub_entidad",p);r?x({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):x({visible:!0,titulo:"\xc9xito",mensaje:"Los datos del grupo han sido actualizados"}),l(!1)};return u?s.jsx("div",{children:"Loading..."}):t?(0,s.jsxs)(s.Fragment,{children:[s.jsx(d.Z,{titulo:"Editar Subentidad",formState:t,handleInputChange:e=>{let{name:t,value:s}=e.target;r(e=>({...e,[t]:s}))},handleSubmit:m}),c.visible&&s.jsx(o.U,{titulo:c.titulo,mensaje:c.mensaje,visible:c.visible,onClose:()=>{x(e=>({...e,visible:!1}))}})]}):s.jsx("div",{children:"No user details found or there was an error fetching them."})}},32581:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/[slug]/page.js`),{__esModule:a,$$typeof:i}=s,n=s.default}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,2572,4959,783,5590,8830,570,1833],()=>r(30046));module.exports=s})();