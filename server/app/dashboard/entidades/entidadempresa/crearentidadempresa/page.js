(()=>{var e={};e.id=1368,e.ids=[1368],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},78111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,originalPathname:()=>p,pages:()=>l,routeModule:()=>m,tree:()=>u});var a=r(50482),s=r(69108),n=r(62563),i=r.n(n),o=r(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let u=["",{children:["dashboard",{children:["entidades",{children:["entidadempresa",{children:["crearentidadempresa",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,81566)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/crearentidadempresa/page.js"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/crearentidadempresa/page.js"],p="/dashboard/entidades/entidadempresa/crearentidadempresa/page",c={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/entidades/entidadempresa/crearentidadempresa/page",pathname:"/dashboard/entidades/entidadempresa/crearentidadempresa",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},21269:(e,t,r)=>{Promise.resolve().then(r.bind(r,83731))},83731:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NuevaEntidadEmpresa:()=>d});var a=r(95344),s=r(91525),n=r(3729),i=r(8164),o=r(28622);function d(){let[e,t]=(0,n.useState)({nombre:"",descripcion:"",id_subtipo_entidad:""}),[r,d]=(0,n.useState)({visible:!1,titulo:"",mensaje:""}),u=async t=>{t.preventDefault(),console.log(e);let{data:r,error:a}=await s.Z.from("entidad_empresa").insert([e]);a?d({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+a.message}):d({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su subtipo de entidad"})};return(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:" p-4 mx-auto w-full max-w-2xl mt-4",children:a.jsx(o.Z,{titulo:"Crear Entidad Empresa",formState:e,handleInputChange:e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},handleSubmit:u})}),r.visible&&a.jsx(i.U,{titulo:r.titulo,mensaje:r.mensaje,visible:r.visible,onClose:()=>{d(e=>({...e,visible:!1}))}})]})}},81566:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(25036),s=r(86843);let n=(0,s.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/entidades/entidadempresa/nueva-entidad-empresa.jsx`),{__esModule:i,$$typeof:o}=n;n.default;let d=(0,s.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/entidades/entidadempresa/nueva-entidad-empresa.jsx#NuevaEntidadEmpresa`);function u(){return a.jsx(d,{})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,2572,4959,783,5590,8830,570,8584],()=>r(78111));module.exports=a})();