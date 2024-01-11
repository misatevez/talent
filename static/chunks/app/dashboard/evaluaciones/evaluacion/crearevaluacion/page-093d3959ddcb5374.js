(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{7630:function(e,a,s){Promise.resolve().then(s.bind(s,2848))},9429:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var i=s(7437),l=s(2265),r=s(3063),t=s(7330);function n(e){let{onGrupoTipoChange:a,selectedTipoId:s,selectedCategoryId:n}=e,[o,c]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(async()=>{if(!n){c([]);return}let{data:e,error:a}=await t.Z.from("sub_categorias").select("id_subcategorias, nombre").eq("id_categoria",n);a?console.error("Error al obtener los tipos de subentidad ",a):c(e)})()},[n]),(0,i.jsx)("div",{className:"flex justify-between items-start",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-4 text-gray-700",children:"Listas de sub-familias disponibles"}),(0,i.jsxs)(r.Select,{onValueChange:a,value:s,children:[(0,i.jsx)(r.SelectTrigger,{id:"group-type",children:(0,i.jsx)(r.SelectValue,{placeholder:"Seleccione uno"})}),(0,i.jsx)(r.SelectContent,{position:"popper",children:o.map(e=>(0,i.jsx)(r.SelectItem,{value:e.id_subcategorias.toString(),children:e.nombre},e.id_subcategorias))})]},n||"default-key")]})})}},2848:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return b}});var i=s(7437),l=s(7445);s(7415);var r=s(3063);s(1262);var t=s(2265),n=s(6392),o=s(9429),c=s(4033);function d(e){let{formState:a,handleInputChange:s,handleSubmit:t,handleSubmit2:d,titulo:m,handleSelectChange:u}=e,b=(0,c.useRouter)();return(0,i.jsx)("form",{onSubmit:t,children:(0,i.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg mx-auto my-4 text-left",children:[(0,i.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,i.jsx)("h1",{className:"text-2xl font-bold text-gray-700",children:m})}),(0,i.jsx)("div",{className:"grid grid-cols-1 gap-4 mb-4",children:(0,i.jsxs)("div",{className:"grid col-span-full",children:[(0,i.jsx)("label",{className:"font-semibold ",htmlFor:"nombre",children:"Nombre Evaluacion"}),(0,i.jsx)("input",{name:"nombre",value:a.nombre,onChange:s,className:"border p-2",id:"nombre",placeholder:"Microsoft Excel 365",type:"text"})]})}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[(0,i.jsx)(n.Z,{selectedTipoId:a.id_categoria,onGrupoTipoChange:e=>{s({target:{name:"id_categoria",value:e}})}}),(0,i.jsxs)("div",{className:"grid place-items-center m-2",children:[(0,i.jsx)("label",{children:(0,i.jsx)("span",{className:"font-semibold  text-gray-700",children:"\xbfLa familia no esta creada?"})}),(0,i.jsx)("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>b.push("/dashboard/evaluaciones/categorias/crearcategoria"),children:"Crear familia"})]})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"grid grid-cols-1 text-center ",children:[(0,i.jsx)(o.Z,{selectedCategoryId:a.id_categoria,selectedTipoId:a.id_subcategoria,onGrupoTipoChange:e=>{s({target:{name:"id_subcategoria",value:e}})}}),(0,i.jsxs)("div",{className:"grid place-items-center m-2",children:[(0,i.jsx)("label",{children:(0,i.jsx)("span",{className:"font-semibold  text-gray-700",children:"\xbfLa sub-familia no esta creada?"})}),(0,i.jsx)("button",{className:"bg-blue-500 text-white p-2 w-1/2 rounded-md ",variant:"default",onClick:()=>b.push("/dashboard/evaluaciones/categorias/subcategorias/crearsubcategorias"),children:"Crear sub-familia"})]})]})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"nivel",children:"Nivel de Profundidad"}),(0,i.jsxs)(r.Select,{onValueChange:e=>u(e,"nivel"),value:a.nivel,children:[(0,i.jsx)(r.SelectTrigger,{id:"group-type",children:(0,i.jsx)(r.SelectValue,{placeholder:"Seleccione uno"})}),(0,i.jsx)(r.SelectContent,{position:"popper",children:[{valor:"Basico",nombre:"1. B\xe1sico"},{valor:"Medio",nombre:"2. Medio"},{valor:"Intermedio",nombre:"3. Intermedio"},{valor:"Avanzado",nombre:"4. Avanzado"},{valor:"Experto",nombre:"5. Experto"},{valor:"Instructor",nombre:"6. Instructor"}].map((e,a)=>(0,i.jsx)(r.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),(0,i.jsx)("div",{className:"flex justify-center items-center",children:"ESPACIO PARA EXPLICACION"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"clase",children:"Clase-Tipo Objetivo Asociado"}),(0,i.jsxs)(r.Select,{onValueChange:e=>u(e,"clase"),value:a.clase,children:[(0,i.jsx)(r.SelectTrigger,{id:"group-type",children:(0,i.jsx)(r.SelectValue,{placeholder:"Seleccione uno"})}),(0,i.jsx)(r.SelectContent,{position:"popper",children:[{valor:"Actitud",nombre:"Actitud"},{valor:"Aptitud",nombre:"Aptitud"},{valor:"Conocimiento",nombre:"Conocimiento"},{valor:"Competencia",nombre:"Competencia"},{valor:"Especifica-Desempe\xf1o",nombre:"Especifica-Desempe\xf1o"},{valor:"Habilidad",nombre:"Habilidad"},{valor:"Tecnico",nombre:"Tecnico"},{valor:"Psicometrico",nombre:"Psicometrico"}].map((e,a)=>(0,i.jsx)(r.SelectItem,{value:e.valor,children:e.nombre},a))})]})]}),(0,i.jsx)("div",{className:"flex  justify-center items-center",children:"ESPACIO PARA EXPLICACION"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 col-span-full gap-4 mb-4 ",children:[(0,i.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"duracion",children:"Duracion (Minutos)"}),(0,i.jsx)("input",{name:"duracion",value:a.duracion,onChange:s,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"checkbox",name:"limite_tiempo",checked:!!a.limite_tiempo,onChange:s,className:"mr-2",id:"limite_tiempo"}),(0,i.jsx)("label",{className:"font-semibold",htmlFor:"limite_tiempo",children:"Limite de tiempo"})]})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"duracion",children:"Calificacion (Minima Req)"}),(0,i.jsx)("input",{name:"calificacion",value:a.calificacion,onChange:s,className:"border p-2",id:"duracion",placeholder:"80",type:"number"})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("input",{type:"checkbox",name:"activa",checked:!!a.activa,onChange:s,className:"mr-2",id:"activa"}),(0,i.jsx)("label",{className:"font-semibold",htmlFor:"activa",children:"Evaluacion Activa"})]})]})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"descripcion",children:"Descripci\xf3n:"}),(0,i.jsx)("textarea",{name:"descripcion",value:a.descripcion,onChange:s,className:"w-full border p-2",id:"descripcion",placeholder:"Esta evaluaci\xf3n es ideal para medir el conocimiento de Excel 365 a los candidatos que requieren conocer, administrar y aplicar herramientas de apoyo y auxiliares para distintos procesos y funciones administrativas y operativas con el prop\xf3sito de medir desempe\xf1o \xf3ptimo de sus actividades responsabilidades.",rows:"3"})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Instrucciones:"}),(0,i.jsx)("textarea",{name:"instrucciones",value:a.instrucciones,onChange:s,className:"w-full border p-2",id:"instrucciones",placeholder:"Lea y eval\xfae detenidamente cada una de las siguientes preguntas y responda sobre las opciones de respuesta, de acuerdo a su forma de pensar, actuar en base a su conocimiento y/o experiencia.",rows:"3"})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{className:"font-semibold",htmlFor:"instrucciones",children:"Areas a Evaluar:"}),(0,i.jsx)("textarea",{name:"areas",value:a.areas,onChange:s,className:"w-full border p-2",id:"instrucciones",placeholder:"Dominio de calculos y formulas",rows:"3"})]}),(0,i.jsxs)("div",{className:"flex justify-around ",children:[(0,i.jsx)(l.z,{onClick:d,className:"bg-blue-500 text-white",variant:"default",disabled:!a.activa,children:"Asignar temas"}),(0,i.jsx)(l.z,{type:"submit",className:"bg-blue-500 text-white",variant:"default",children:"Guardar"})]})]})})}var m=s(8156),u=s(7330);function b(){let e=(0,c.useRouter)(),[a,s]=(0,t.useState)({nombre:"",descripcion:"",id_categoria:"",id_subcategoria:"",nivel:"",clase:"",duracion:"",limite_tiempo:null,calificacion:"",activa:null,instrucciones:"",areas:""}),[l,r]=(0,t.useState)({visible:!1,titulo:"",mensaje:""}),n=async e=>{e.preventDefault(),console.log(a);let{data:s,error:i}=await u.Z.from("evaluaciones").upsert([a]);i?r({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+i.message}):r({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su evaluacion"})},o=async s=>{s.preventDefault();let{data:i,error:l}=await u.Z.from("evaluaciones").upsert([a]).select();if(l?r({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+l.message}):r({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su evaluacion"}),i&&i.length>0){let a=i[0].id_evaluacion;e.push("/dashboard/evaluaciones/temas/asignartema/".concat(a))}else console.error("No se retornaron datos de la inserci\xf3n")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:" p-4 mx-auto w-full max-w-5xl mt-4 ",children:(0,i.jsx)(d,{titulo:"Crear Evaluacion",formState:a,handleInputChange:e=>{let a=e.target,i="checkbox"===a.type?a.checked:a.value,l=a.name;s(e=>({...e,[l]:i}))},handleSubmit:n,handleSubmit2:o,handleSelectChange:(e,a)=>{s(s=>({...s,[a]:e}))}})}),l.visible&&(0,i.jsx)(m.U,{titulo:l.titulo,mensaje:l.mensaje,visible:l.visible,onClose:()=>{r(e=>({...e,visible:!1}))}})]})}},7415:function(e,a,s){"use strict";s.d(a,{RM:function(){return o},SC:function(){return c},iA:function(){return t},pj:function(){return m},ss:function(){return d},xD:function(){return n}});var i=s(7437),l=s(2265),r=s(8243);let t=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("div",{className:"relative w-full overflow-auto",children:(0,i.jsx)("table",{ref:a,className:(0,r.cn)("w-full caption-bottom text-sm",s),...l})})});t.displayName="Table";let n=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("thead",{ref:a,className:(0,r.cn)("[&_tr]:border-b",s),...l})});n.displayName="TableHeader";let o=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("tbody",{ref:a,className:(0,r.cn)("[&_tr:last-child]:border-0",s),...l})});o.displayName="TableBody",l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("tfoot",{ref:a,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...l})}).displayName="TableFooter";let c=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("tr",{ref:a,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...l})});c.displayName="TableRow";let d=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("th",{ref:a,className:(0,r.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...l})});d.displayName="TableHead";let m=l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("td",{ref:a,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...l})});m.displayName="TableCell",l.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,i.jsx)("caption",{ref:a,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",s),...l})}).displayName="TableCaption"}},function(e){e.O(0,[7895,4799,577,4997,3542,2971,4938,1744],function(){return e(e.s=7630)}),_N_E=e.O()}]);