(()=>{var e={};e.id=599,e.ids=[599],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},29049:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(50482),t=s(69108),i=s(62563),l=s.n(i),o=s(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(a,n);let c=["",{children:["dashboard",{children:["evaluaciones",{children:["evaluacion",{children:["crearevaluacion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,69239)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/crearevaluacion/page.js"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,12696)),"/home/runner/work/xtratalent/xtratalent/src/app/dashboard/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,51965)),"/home/runner/work/xtratalent/xtratalent/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/xtratalent/xtratalent/src/app/dashboard/evaluaciones/evaluacion/crearevaluacion/page.js"],u="/dashboard/evaluaciones/evaluacion/crearevaluacion/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/dashboard/evaluaciones/evaluacion/crearevaluacion/page",pathname:"/dashboard/evaluaciones/evaluacion/crearevaluacion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4690:(e,a,s)=>{Promise.resolve().then(s.bind(s,90893))},82159:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var r=s(95344),t=s(3729),i=s(82549),l=s(91525);function o({onGrupoTipoChange:e,selectedTipoId:a,selectedCategoryId:s}){let[o,n]=(0,t.useState)([]);return(0,t.useEffect)(()=>{(async()=>{if(!s){n([]);return}let{data:e,error:a}=await l.Z.from("sub_categorias").select("id_subcategorias, nombre").eq("id_categoria",s);a?console.error("Error al obtener los tipos de subentidad ",a):n(e)})()},[s]),r.jsx("div",{className:"flex justify-between items-start",children:(0,r.jsxs)("div",{className:"w-full",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-700",children:"Listas de sub-familias disponibles"}),(0,r.jsxs)(i.Select,{onValueChange:e,value:a,children:[r.jsx(i.SelectTrigger,{id:"group-type",children:r.jsx(i.SelectValue,{placeholder:"Seleccione uno"})}),r.jsx(i.SelectContent,{position:"popper",children:o.map(e=>r.jsx(i.SelectItem,{value:e.id_subcategorias.toString(),children:e.nombre},e.id_subcategorias))})]},s||"default-key")]})})}},90893:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>p});var r=s(95344),t=s(20586);s(87013);var i=s(82549);s(16802);var l=s(3729),o=s(40838),n=s(82159),c=s(22254);function d({formState:e,handleInputChange:a,handleSubmit:s,handleSubmit2:l,titulo:d,handleSelectChange:u}){let m=(0,c.useRouter)();return r.jsx("form",{onSubmit:s,children:(0,r.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg mx-auto my-4 text-left",children:[r.jsx("div",{className:"flex justify-between items-center mb-4",children:r.jsx("h1",{className:"text-2xl font-bold text-gray-700",children:d})}),r.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:(0,r.jsxs)("div",{className:"grid col-span-full",children:[r.jsx("label",{className:"font-semibold ",htmlFor:"nombre",children:"Nombre Evaluacion"}),r.jsx("input",{name:"nombre",value:e.nombre,onChange:a,className:"border p-2",id:"nombre",placeholder:"Microsoft Excel 365",type:"text"})]})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[r.jsx(o.Z,{selectedTipoId:e.id_categoria,onGrupoTipoChange:e=>{a({target:{name:"id_categoria",value:e}})}}),(0,r.jsxs)("div",{className:"grid place-items-center m-2",children:[r.jsx("label",{children:r.jsx("span",{className:"font-semibold  text-gray-700",children:"\xbfLa familia no esta creada?"})}),r.jsx("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>m.push("/dashboard/evaluaciones/categorias/crearcategoria"),children:"Crear familia"})]})]}),r.jsx("div",{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[r.jsx(n.Z,{selectedCategoryId:e.id_categoria,selectedTipoId:e.id_subcategoria,onGrupoTipoChange:e=>{a({target:{name:"id_subcategoria",value:e}})}}),(0,r.jsxs)("div",{className:"grid place-items-center m-2",children:[r.jsx("label",{children:r.jsx("span",{className:"font-semibold  text-gray-700",children:"\xbfLa sub-familia no esta creada?"})}),r.jsx("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>m.push("/dashboard/evaluaciones/categorias/subcategorias/crearsubcategorias"),children:"Crear sub-familia"})]})]})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[r.jsx("label",{className:"font-semibold",htmlFor:"nivel",children:"Nivel de Profundidad"}),(0,r.jsxs)(i.Select,{onValueChange:e=>u(e,"nivel"),value:e.nivel,children:[r.jsx(i.SelectTrigger,{id:"group-type",children:r.jsx(i.SelectValue,{placeholder:"Seleccione uno"})}),r.jsx(i.SelectContent,{position:"popper",children:[{valor:"Basico",nombre:"1. B\xe1sico"},{valor:"Medio",nombre:"2. Medio"},{valor:"Intermedio",nombre:"3. Intermedio"},{valor:"Avanzado",nombre:"4. Avanzado"},{valor:"Experto",nombre:"5. Experto"},{valor:"Instructor",nombre:"6. Instructor"}].map((e,a)=>r.jsx(i.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),r.jsx("div",{className:"flex justify-center items-center",children:"ESPACIO PARA EXPLICACION"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[r.jsx("label",{className:"font-semibold",htmlFor:"clase",children:"Clase-Tipo Objetivo Asociado"}),(0,r.jsxs)(i.Select,{onValueChange:e=>u(e,"clase"),value:e.clase,children:[r.jsx(i.SelectTrigger,{id:"group-type",children:r.jsx(i.SelectValue,{placeholder:"Seleccione uno"})}),r.jsx(i.SelectContent,{position:"popper",children:[{valor:"Actitud",nombre:"Actitud"},{valor:"Aptitud",nombre:"Aptitud"},{valor:"Conocimiento",nombre:"Conocimiento"},{valor:"Competencia",nombre:"Competencia"},{valor:"Especifica-Desempe\xf1o",nombre:"Especifica-Desempe\xf1o"},{valor:"Habilidad",nombre:"Habilidad"},{valor:"Tecnico",nombre:"Tecnico"},{valor:"Psicometrico",nombre:"Psicometrico"}].map((e,a)=>r.jsx(i.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),r.jsx("div",{className:"flex  justify-center items-center",children:"ESPACIO PARA EXPLICACION"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 col-span-full gap-4 mb-4 ",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{className:"font-semibold",htmlFor:"duracion",children:"Duracion (Minutos)"}),r.jsx("input",{name:"duracion",value:e.duracion,onChange:a,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("input",{type:"checkbox",name:"limite_tiempo",checked:!!e.limite_tiempo,onChange:a,className:"mr-2",id:"limite_tiempo"}),r.jsx("label",{className:"font-semibold",htmlFor:"limite_tiempo",children:"Limite de tiempo"})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{className:"font-semibold",htmlFor:"duracion",children:"Calificacion (Minima Req)"}),r.jsx("input",{name:"calificacion",value:e.calificacion,onChange:a,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("input",{type:"checkbox",name:"activa",checked:!!e.activa,onChange:a,className:"mr-2",id:"activa"}),r.jsx("label",{className:"font-semibold",htmlFor:"activa",children:"Evaluacion Activa"})]})]})]})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"font-semibold",htmlFor:"descripcion",children:"Descripci\xf3n:"}),r.jsx("textarea",{name:"descripcion",value:e.descripcion,onChange:a,className:"w-full border p-2",id:"descripcion",placeholder:"Esta evaluaci\xf3n es ideal para medir el conocimiento de Excel 365 a los candidatos que requieren conocer, administrar y aplicar herramientas de apoyo y auxiliares para distintos procesos y funciones administrativas y operativas con el prop\xf3sito de medir desempe\xf1o \xf3ptimo de sus actividades responsabilidades.",rows:"3"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Instrucciones:"}),r.jsx("textarea",{name:"instrucciones",value:e.instrucciones,onChange:a,className:"w-full border p-2",id:"instrucciones",placeholder:"Lea y eval\xfae detenidamente cada una de las siguientes preguntas y responda sobre las opciones de respuesta, de acuerdo a su forma de pensar, actuar en base a su conocimiento y/o experiencia.",rows:"3"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Areas a Evaluar:"}),r.jsx("textarea",{name:"areas",value:e.areas,onChange:a,className:"w-full border p-2",id:"instrucciones",placeholder:"Dominio de calculos y formulas",rows:"3"})]}),(0,r.jsxs)("div",{className:"flex justify-around ",children:[r.jsx(t.z,{onClick:l,className:"bg-blue-500 text-white",variant:"default",disabled:!e.activa,children:"Asignar temas"}),r.jsx(t.z,{type:"submit",className:"bg-blue-500 text-white",variant:"default",children:"Guardar"})]})]})})}var u=s(8164),m=s(91525);function p(){let e=(0,c.useRouter)(),[a,s]=(0,l.useState)({nombre:"",descripcion:"",id_categoria:"",id_subcategoria:"",nivel:"",clase:"",duracion:"",limite_tiempo:null,calificacion:"",activa:null,instrucciones:"",areas:""}),[t,i]=(0,l.useState)({visible:!1,titulo:"",mensaje:""}),o=async e=>{e.preventDefault(),console.log(a);let{data:s,error:r}=await m.Z.from("evaluaciones").upsert([a]);r?i({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):i({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su evaluacion"})},n=async s=>{s.preventDefault();let{data:r,error:t}=await m.Z.from("evaluaciones").upsert([a]).select();if(t?i({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+t.message}):i({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su evaluacion"}),r&&r.length>0){let a=r[0].id_evaluacion;e.push(`/dashboard/evaluaciones/temas/asignartema/${a}`)}else console.error("No se retornaron datos de la inserci\xf3n")};return(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:" p-4 mx-auto w-full max-w-5xl mt-4 ",children:r.jsx(d,{titulo:"Crear Evaluacion",formState:a,handleInputChange:e=>{let a=e.target,r="checkbox"===a.type?a.checked:a.value,t=a.name;s(e=>({...e,[t]:r}))},handleSubmit:o,handleSubmit2:n,handleSelectChange:(e,a)=>{s(s=>({...s,[a]:e}))}})}),t.visible&&r.jsx(u.U,{titulo:t.titulo,mensaje:t.mensaje,visible:t.visible,onClose:()=>{i(e=>({...e,visible:!1}))}})]})}},87013:(e,a,s)=>{"use strict";s.d(a,{RM:()=>n,SC:()=>c,iA:()=>l,pj:()=>u,ss:()=>d,xD:()=>o});var r=s(95344),t=s(3729),i=s(74456);let l=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:s,className:(0,i.cn)("w-full caption-bottom text-sm",e),...a})}));l.displayName="Table";let o=t.forwardRef(({className:e,...a},s)=>r.jsx("thead",{ref:s,className:(0,i.cn)("[&_tr]:border-b",e),...a}));o.displayName="TableHeader";let n=t.forwardRef(({className:e,...a},s)=>r.jsx("tbody",{ref:s,className:(0,i.cn)("[&_tr:last-child]:border-0",e),...a}));n.displayName="TableBody",t.forwardRef(({className:e,...a},s)=>r.jsx("tfoot",{ref:s,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a})).displayName="TableFooter";let c=t.forwardRef(({className:e,...a},s)=>r.jsx("tr",{ref:s,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));c.displayName="TableRow";let d=t.forwardRef(({className:e,...a},s)=>r.jsx("th",{ref:s,className:(0,i.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));d.displayName="TableHead";let u=t.forwardRef(({className:e,...a},s)=>r.jsx("td",{ref:s,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));u.displayName="TableCell",t.forwardRef(({className:e,...a},s)=>r.jsx("caption",{ref:s,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},69239:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n});var r=s(25036);let t=(0,s(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/evaluaciones/evaluacion/crear-evaluacion.jsx`),{__esModule:i,$$typeof:l}=t,o=t.default;function n(){return r.jsx(o,{})}}};var a=require("../../../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[1638,2572,4959,783,5590,8830,570,9279],()=>s(29049));module.exports=r})();