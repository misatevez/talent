(()=>{var e={};e.id=6284,e.ids=[6284],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},37987:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var i=s(50482),r=s(69108),t=s(62563),l=s.n(t),o=s(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(a,n);let c=["",{children:["dashboard",{children:["evaluaciones",{children:["evaluacion",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,91138)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/[slug]/page.js"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/[slug]/page.js"],u="/dashboard/evaluaciones/evaluacion/[slug]/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/evaluaciones/evaluacion/[slug]/page",pathname:"/dashboard/evaluaciones/evaluacion/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},38145:(e,a,s)=>{Promise.resolve().then(s.bind(s,72302))},82159:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var i=s(95344),r=s(3729),t=s(82549),l=s(91525);function o({onGrupoTipoChange:e,selectedTipoId:a,selectedCategoryId:s}){let[o,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{if(!s){n([]);return}let{data:e,error:a}=await l.Z.from("sub_categorias").select("id_subcategorias, nombre").eq("id_categoria",s);a?console.error("Error al obtener los tipos de subentidad ",a):n(e)})()},[s]),i.jsx("div",{className:"flex justify-between items-start",children:(0,i.jsxs)("div",{className:"w-full",children:[i.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-700",children:"Listas de sub-familias disponibles"}),(0,i.jsxs)(t.Select,{onValueChange:e,value:a,children:[i.jsx(t.SelectTrigger,{id:"group-type",children:i.jsx(t.SelectValue,{placeholder:"Seleccione uno"})}),i.jsx(t.SelectContent,{position:"popper",children:o.map(e=>i.jsx(t.SelectItem,{value:e.id_subcategorias.toString(),children:e.nombre},e.id_subcategorias))})]},s||"default-key")]})})}},72302:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var i=s(95344),r=s(3729);s(16802);var t=s(20586),l=s(82549),o=s(40838),n=s(82159),c=s(22254),d=s(91525),u=s(8164);function m({id_evaluacion:e}){let a=(0,c.useRouter)();(0,r.useEffect)(()=>{(async()=>{if(e){let{data:a,error:s}=await d.Z.from("evaluaciones").select("*").eq("id_evaluacion",e).single();s?console.error("Error fetching evaluation details: ",s):m({...a})}})()},[e]);let[s,m]=(0,r.useState)({nombre:"",descripcion:"",id_categoria:"",id_subcategoria:"",nivel:"",clase:"",duracion:"",limite_tiempo:null,calificacion:"",activa:null,instrucciones:"",areas:""}),[p,x]=(0,r.useState)({visible:!1,titulo:"",mensaje:""}),h=e=>{let{name:a,value:s,type:i,checked:r}=e.target;m(e=>({...e,[a]:"checkbox"===i?r:s}))},v=(e,a)=>{m(s=>({...s,[a]:e}))},b=async a=>{a.preventDefault(),console.log(s);let{data:i,error:r}=await d.Z.from("evaluaciones").update([s]).eq("id_evaluacion",e);r?x({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):x({visible:!0,titulo:"\xc9xito",mensaje:"Se ha actualizado su evaluacion"})},g=async e=>{e.preventDefault();let{data:i,error:r}=await d.Z.from("evaluaciones").upsert([s]).select();if(r?x({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):x({visible:!0,titulo:"\xc9xito",mensaje:"Se ha actualizado su evaluacion"}),i&&i.length>0){let e=i[0].id_evaluacion;a.push(`/dashboard/evaluaciones/temas/asignartema/${e}`)}else console.error("No se retornaron datos de la inserci\xf3n")};return(0,i.jsxs)(i.Fragment,{children:[i.jsx("form",{onSubmit:b,children:(0,i.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg mx-auto my-4 text-left",children:[i.jsx("div",{className:"flex justify-between items-center mb-4",children:i.jsx("h1",{className:"text-2xl font-bold text-gray-700",children:"Editar evaluacion: "})}),i.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:(0,i.jsxs)("div",{className:"grid col-span-full",children:[i.jsx("label",{className:"font-semibold ",htmlFor:"nombre",children:"Nombre Evaluacion"}),i.jsx("input",{name:"nombre",value:s.nombre,onChange:h,className:"border p-2",id:"nombre",placeholder:"Microsoft Excel 365",type:"text"})]})}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[i.jsx(o.Z,{selectedTipoId:s.id_categoria,onGrupoTipoChange:e=>{m(a=>({...a,id_categoria:e,id_subcategoria:e?null:a.id_subcategoria}))}}),(0,i.jsxs)("div",{className:"grid place-items-center m-2",children:[i.jsx("label",{children:i.jsx("span",{className:"font-semibold  text-gray-700",children:"\xbfLa familia no esta creada?"})}),i.jsx("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>a.push("/dashboard/evaluaciones/categorias/crearcategoria"),children:"Crear familia"})]})]}),i.jsx("div",{children:(0,i.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[i.jsx(n.Z,{selectedTipoId:s.id_subcategoria.toString(),selectedCategoryId:s.id_categoria.toString(),onGrupoTipoChange:e=>{h({target:{name:"id_subcategoria",value:e}})}}),(0,i.jsxs)("div",{className:"grid place-items-center m-2",children:[i.jsx("label",{children:i.jsx("span",{className:"font-semibold  text-gray-700",children:"\xbfLa sub-familia no esta creada?"})}),i.jsx("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>a.push("/dashboard/evaluaciones/categorias/subcategorias/crearsubcategorias"),children:"Crear sub-familia"})]})]})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[i.jsx("label",{className:"font-semibold",htmlFor:"nivel",children:"Nivel de Profundidad"}),(0,i.jsxs)(l.Select,{onValueChange:e=>v(e,"nivel"),value:s.nivel,children:[i.jsx(l.SelectTrigger,{id:"group-type",children:i.jsx(l.SelectValue,{placeholder:"Seleccione uno"})}),i.jsx(l.SelectContent,{position:"popper",children:[{valor:"Basico",nombre:"1. B\xe1sico"},{valor:"Medio",nombre:"2. Medio"},{valor:"Intermedio",nombre:"3. Intermedio"},{valor:"Avanzado",nombre:"4. Avanzado"},{valor:"Experto",nombre:"5. Experto"},{valor:"Instructor",nombre:"6. Instructor"}].map((e,a)=>i.jsx(l.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),i.jsx("div",{className:"flex justify-center items-center",children:"ESPACIO PARA EXPLICACION"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[i.jsx("label",{className:"font-semibold",htmlFor:"clase",children:"Clase-Tipo Objetivo Asociado"}),(0,i.jsxs)(l.Select,{onValueChange:e=>v(e,"clase"),value:s.clase,children:[i.jsx(l.SelectTrigger,{id:"group-type",children:i.jsx(l.SelectValue,{placeholder:"Seleccione uno"})}),i.jsx(l.SelectContent,{position:"popper",children:[{valor:"Actitud",nombre:"Actitud"},{valor:"Aptitud",nombre:"Aptitud"},{valor:"Conocimiento",nombre:"Conocimiento"},{valor:"Competencia",nombre:"Competencia"},{valor:"Especifica-Desempe\xf1o",nombre:"Especifica-Desempe\xf1o"},{valor:"Habilidad",nombre:"Habilidad"},{valor:"Tecnico",nombre:"Tecnico"},{valor:"Psicometrico",nombre:"Psicometrico"}].map((e,a)=>i.jsx(l.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),i.jsx("div",{className:"flex  justify-center items-center",children:"ESPACIO PARA EXPLICACION"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 col-span-full gap-4 mb-4 ",children:[(0,i.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,i.jsxs)("div",{children:[i.jsx("label",{className:"font-semibold",htmlFor:"duracion",children:"Duracion (Minutos)"}),i.jsx("input",{name:"duracion",value:s.duracion,onChange:h,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[i.jsx("input",{type:"checkbox",name:"limite_tiempo",checked:!!s.limite_tiempo,onChange:h,className:"mr-2",id:"limite_tiempo"}),i.jsx("label",{className:"font-semibold",htmlFor:"limite_tiempo",children:"Limite de tiempo"})]})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,i.jsxs)("div",{children:[i.jsx("label",{className:"font-semibold",htmlFor:"duracion",children:"Calificacion (Minima Req)"}),i.jsx("input",{name:"calificacion",value:s.calificacion,onChange:h,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[i.jsx("input",{type:"checkbox",name:"activa",checked:!!s.activa,onChange:h,className:"mr-2",id:"activa"}),i.jsx("label",{className:"font-semibold",htmlFor:"activa",children:"Evaluacion Activa"})]})]})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[i.jsx("label",{className:"font-semibold",htmlFor:"descripcion",children:"Descripci\xf3n:"}),i.jsx("textarea",{name:"descripcion",value:s.descripcion,onChange:h,className:"w-full border p-2",id:"descripcion",placeholder:"Esta evaluaci\xf3n es ideal para medir el conocimiento de Excel 365 a los candidatos que requieren conocer, administrar y aplicar herramientas de apoyo y auxiliares para distintos procesos y funciones administrativas y operativas con el prop\xf3sito de medir desempe\xf1o \xf3ptimo de sus actividades responsabilidades.",rows:"3"})]}),(0,i.jsxs)("div",{className:"mb-4",children:[i.jsx("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Instrucciones:"}),i.jsx("textarea",{name:"instrucciones",value:s.instrucciones,onChange:h,className:"w-full border p-2",id:"instrucciones",placeholder:"Lea y eval\xfae detenidamente cada una de las siguientes preguntas y responda sobre las opciones de respuesta, de acuerdo a su forma de pensar, actuar en base a su conocimiento y/o experiencia.",rows:"3"})]}),(0,i.jsxs)("div",{className:"mb-4",children:[i.jsx("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Areas a Evaluar:"}),i.jsx("textarea",{name:"areas",value:s.areas,onChange:h,className:"w-full border p-2",id:"instrucciones",placeholder:"Dominio de calculos y formulas",rows:"3"})]}),(0,i.jsxs)("div",{className:"flex justify-around ",children:[i.jsx(t.z,{onClick:g,className:"bg-blue-500 text-white",variant:"default",disabled:!s.activa,children:"Asignar temas"}),i.jsx(t.z,{type:"submit",className:"bg-blue-500 text-white",variant:"default",children:"Guardar"})]})]})}),p.visible&&i.jsx(u.U,{titulo:p.titulo,mensaje:p.mensaje,visible:p.visible,onClose:()=>{x(e=>({...e,visible:!1}))}})]})}},91138:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n});var i=s(25036);let r=(0,s(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/evaluaciones/evaluacion/editar-evaluacion.jsx`),{__esModule:t,$$typeof:l}=r,o=r.default;function n({params:e}){let a=e.slug;return i.jsx(o,{id_evaluacion:a})}}};var a=require("../../../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),i=a.X(0,[1638,2572,4959,783,5590,8830,570,9279],()=>s(37987));module.exports=i})();