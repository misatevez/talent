(()=>{var e={};e.id=9554,e.ids=[9554],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},45684:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>l,routeModule:()=>m,tree:()=>c});var a=r(50482),s=r(69108),n=r(62563),i=r.n(n),o=r(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let c=["",{children:["dashboard",{children:["entidades",{children:["entidadempresa",{children:["subentidades",{children:["area-direcciones",{children:["departamentos",{children:["creardepartamento",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4153)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/area-direcciones/departamentos/creardepartamento/page.js"]}]},{}]},{}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/entidades/entidadempresa/subentidades/area-direcciones/departamentos/creardepartamento/page.js"],p="/dashboard/entidades/entidadempresa/subentidades/area-direcciones/departamentos/creardepartamento/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/entidades/entidadempresa/subentidades/area-direcciones/departamentos/creardepartamento/page",pathname:"/dashboard/entidades/entidadempresa/subentidades/area-direcciones/departamentos/creardepartamento",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},86828:(e,t,r)=>{Promise.resolve().then(r.bind(r,311))},311:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NuevoDepartamento:()=>d});var a=r(95344),s=r(91525),n=r(3729),i=r(8164),o=r(76052);function d(){let[e,t]=(0,n.useState)({nombre:"",descripcion:"",id_direcciones:""}),[r,d]=(0,n.useState)({visible:!1,titulo:"",mensaje:""}),c=async t=>{t.preventDefault(),console.log(e);let{data:r,error:a}=await s.Z.from("departamentos").insert([e]);a?d({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+a.message}):d({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su departamento"})};return(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:" p-4 mx-auto w-full max-w-2xl mt-4",children:a.jsx(o.Z,{titulo:"Crear Departamento",formState:e,handleInputChange:e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},handleSubmit:c})}),r.visible&&a.jsx(i.U,{titulo:r.titulo,mensaje:r.mensaje,visible:r.visible,onClose:()=>{d(e=>({...e,visible:!1}))}})]})}},76052:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(95344);r(3729);var s=r(16802),n=r(20586),i=r(57631);function o({formState:e,handleInputChange:t,handleSubmit:r,titulo:o}){return a.jsx("form",{onSubmit:r,children:(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md shadow-md mt-4",children:[a.jsx("h2",{className:"text-lg font-bold text-[#2c5282] mb-4",children:o}),a.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.jsx("div",{children:a.jsx(i.Z,{selectedTipoId:e.id_direcciones,onGrupoTipoChange:e=>{t({target:{name:"id_direcciones",value:e}})}})})}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-name",children:"Nombre Departamento:"}),a.jsx(s.I,{name:"nombre",value:e.nombre,onChange:t,id:"group-name",placeholder:"Especial"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-description",children:"Descripci\xf3n Departamento:"}),a.jsx("textarea",{name:"descripcion",value:e.descripcion,onChange:t,className:"resize-none border rounded-md w-full p-2",id:"group-description",placeholder:"El departamento...",rows:"4"})]}),a.jsx("div",{className:"flex justify-end mt-4",children:a.jsx(n.z,{children:"Guardar"})})]})})}},4153:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(25036),s=r(86843);let n=(0,s.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/entidades/entidadempresa/subentidades/areas-direcciones/departamento/crear-departamentos.jsx`),{__esModule:i,$$typeof:o}=n;n.default;let d=(0,s.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/entidades/entidadempresa/subentidades/areas-direcciones/departamento/crear-departamentos.jsx#NuevoDepartamento`);function c(){return a.jsx(d,{})}}};var t=require("../../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,2572,4959,783,5590,8830,570,2604],()=>r(45684));module.exports=a})();