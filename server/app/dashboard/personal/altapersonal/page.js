(()=>{var e={};e.id=3660,e.ids=[3660],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},92883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>u});var a=r(50482),s=r(69108),o=r(62563),n=r.n(o),i=r(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["dashboard",{children:["personal",{children:["altapersonal",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,60661)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/personal/altapersonal/page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/personal/altapersonal/page.js"],c="/dashboard/personal/altapersonal/page",d={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/personal/altapersonal/page",pathname:"/dashboard/personal/altapersonal",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},22135:(e,t,r)=>{Promise.resolve().then(r.bind(r,36917))},36917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RegistroInterno:()=>l});var a=r(95344);r(20783),r(51762),r(20586),r(16802),r(39159);var s=r(3729),o=r(91525),n=r(94488),i=r(8164);function l(){let[e,t]=(0,s.useState)({password:"",id_entidad_empresa:"",tipo_usuario:"",correo_electronico:"",codigo_plaza_vacante:"",profesion_ocupacion:"",codigo_perfil_puesto:"",anos_experiencia:"",direccion_calle_avenida:"",direccion_colonia:"",direccion_zona:"",direccion_departamento:"",direccion_municipio:"",primer_nombre:"",segundo_nombre:"",apellido_materno:"",apellido_paterno:"",fecha_nacimiento:"",numero_dpi:"",numero_afiliacion_igss:"",numero_nit:"",lugar_nacimiento:"",pais_origen:"",estado_civil:"",genero_sexo:"",numero_pasaporte:"",telefono_casa:"",telefono_particular:"",telefono_movil_cel:""}),[r,l]=(0,s.useState)({visible:!1,titulo:"",mensaje:""}),u=async t=>{t.preventDefault(),console.log(e);let{data:r,error:a}=await o.Z.from("usuarios").insert([e]);o.Z.auth.signUp({email:e.correo_electronico,password:e.password}),a?l({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+a.message}):l({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su usuario"})};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.Z,{titulo:"Alta de usuarios",formState:e,handleInputChange:e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},handleSubmit:u}),r.visible&&a.jsx(i.U,{titulo:r.titulo,mensaje:r.mensaje,visible:r.visible,onClose:()=>{l(e=>({...e,visible:!1}))}})]})}},60661:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(25036),s=r(79075);function o(){return a.jsx(s.l,{})}},79075:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var a=r(86843);let s=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/personal/registro-interno.jsx`),{__esModule:o,$$typeof:n}=s;s.default;let i=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/personal/registro-interno.jsx#RegistroInterno`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,2572,4959,783,5590,8830,570,8939],()=>r(92883));module.exports=a})();