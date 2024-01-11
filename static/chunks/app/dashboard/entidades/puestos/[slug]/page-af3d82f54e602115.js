(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3986],{7770:function(e,t,n){Promise.resolve().then(n.bind(n,6693))},6693:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),r=n(2265),l=n(7330),i=n(4033),o=n(8156),a=n(8549);function d(e){let{params:t}=e,[n,d]=(0,r.useState)(null),[c,u]=(0,r.useState)(!0);(0,i.useRouter)();let{slug:m}=t,[p,h]=(0,r.useState)({visible:!1,titulo:"",mensaje:""});(0,r.useEffect)(()=>{(async()=>{if(m){u(!0);let{data:e,error:t}=await l.Z.from("puestos").select("*").eq("id_puestos",m).single();t?console.error("Error fetching user details: ",t):d(e),u(!1)}})()},[m]);let x=e=>{let{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))},g=async e=>{e.preventDefault(),u(!0);let{error:t}=await l.Z.from("puestos").update(n).eq("id_puestos",m);t?h({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+t.message}):h({visible:!0,titulo:"\xc9xito",mensaje:"Los datos del puesto han sido actualizados"}),u(!1)};return c?(0,s.jsx)("div",{children:"Loading..."}):n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{titulo:"Editar Puesto",formState:n,handleInputChange:x,handleInputChange2:x,handleSubmit:g}),p.visible&&(0,s.jsx)(o.U,{titulo:p.titulo,mensaje:p.mensaje,visible:p.visible,onClose:()=>{h(e=>({...e,visible:!1}))}})]}):(0,s.jsx)("div",{children:"No user details found or there was an error fetching them."})}},5528:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(7437),r=n(2265),l=n(3063),i=n(7330);function o(e){let{onGrupoTipoChange:t,selectedTipoId:n}=e,[o,a]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{let{data:e,error:t}=await i.Z.from("entidad_empresa").select("id_entidad_empresa, nombre");t?console.error("Error al obtener los tipos de subentidad ",t):a(e)})()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Entidades Empresa:"}),(0,s.jsxs)(l.Select,{onValueChange:t,value:null==n?void 0:n.toString(),children:[(0,s.jsx)(l.SelectTrigger,{id:"group-type",children:(0,s.jsx)(l.SelectValue,{placeholder:"Seleccione uno"})}),(0,s.jsx)(l.SelectContent,{position:"popper",children:o.map((e,t)=>(0,s.jsx)(l.SelectItem,{value:e.id_entidad_empresa.toString(),children:e.nombre},t))})]})]})}},8362:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(7437),r=n(2265),l=n(3063),i=n(7330);function o(e){let{onGrupoTipoChange:t,selectedTipoId:n,filter:o}=e,[a,d]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{let e=i.Z.from("sub_entidad").select("id_sub_entidad, nombre");o&&(e=e.eq("id_entidad_empresa",o));let{data:t,error:n}=await e;n?console.error("Error al obtener las subentidades",n):d(t||[])})()},[o]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Subentidad:"}),(0,s.jsxs)(l.Select,{onValueChange:t,value:null==n?void 0:n.toString(),children:[(0,s.jsx)(l.SelectTrigger,{id:"group-type",children:(0,s.jsx)(l.SelectValue,{placeholder:"Seleccione uno"})}),(0,s.jsx)(l.SelectContent,{position:"popper",children:a.map((e,t)=>(0,s.jsx)(l.SelectItem,{value:e.id_sub_entidad.toString(),children:e.nombre},t))})]})]})}},8549:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var s=n(7437),r=n(2265),l=n(1262),i=n(7445),o=n(3102),a=n(3063),d=n(7330);function c(e){let{onGrupoTipoChange:t,selectedTipoId:n,filter:l}=e,[i,o]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{if(console.log(n),l){console.log(l);let{data:e,error:t}=await d.Z.from("departamentos").select("id_departamentos, nombre").eq("id_direcciones",l);t?console.error("Error al obtener los departamentos: ",t):o(e)}else o([])})()},[l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Departamentos:"}),(0,s.jsxs)(a.Select,{onValueChange:t,value:null==n?void 0:n.toString(),children:[(0,s.jsx)(a.SelectTrigger,{id:"group-type",children:(0,s.jsx)(a.SelectValue,{placeholder:"Seleccione uno"})}),(0,s.jsx)(a.SelectContent,{position:"popper",children:i.map((e,t)=>(0,s.jsx)(a.SelectItem,{value:e.id_departamentos.toString(),children:e.nombre},t))})]})]})}var u=n(8362),m=n(5528);function p(e){let{formState:t,handleInputChange:n,handleSubmit:a,titulo:d,handleInputChange2:p,handleInputChange3:h,handleInputChange4:x}=e,[g,f]=(0,r.useState)(null),[j,b]=(0,r.useState)(null),[v,S]=(0,r.useState)(null),_=e=>{S(e)};return(0,s.jsx)("form",{onSubmit:a,children:(0,s.jsxs)("div",{className:"bg-white p-4 rounded-md shadow-md mt-4",children:[(0,s.jsx)("h2",{className:"text-lg font-bold text-[#2c5282] mb-4",children:d}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)(m.Z,{selectedTipoId:t.id_entidad_empresa,onGrupoTipoChange:e=>{n({target:{name:"id_entidad_empresa",value:e}}),f(e),b(null),S(null)}})}),(0,s.jsx)("div",{children:(0,s.jsx)(u.Z,{filter:g,selectedTipoId:t.id_sub_entidad,onGrupoTipoChange:e=>{n({target:{name:"id_sub_entidad",value:e}}),b(e),S(null)}})}),(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{filter:j,selectedTipoId:t.id_direcciones,onGrupoTipoChange:e=>{n({target:{name:"id_direcciones",value:e}}),_(e)}})}),(0,s.jsx)("div",{children:(0,s.jsx)(c,{filter:v,selectedTipoId:t.id_departamentos,onGrupoTipoChange:e=>{p({target:{name:"id_departamentos",value:e}})}})})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-name",children:"Nombre Puesto:"}),(0,s.jsx)(l.I,{name:"nombre",value:t.nombre,onChange:n,id:"group-name",placeholder:"Especial"})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-description",children:"Descripci\xf3n Puesto:"}),(0,s.jsx)("textarea",{name:"descripcion",value:t.descripcion,onChange:n,className:"resize-none border rounded-md w-full p-2",id:"group-description",placeholder:"El departamento...",rows:"4"})]}),(0,s.jsx)("div",{className:"flex justify-end mt-4",children:(0,s.jsx)(i.z,{children:"Guardar"})})]})})}},4033:function(e,t,n){e.exports=n(5313)}},function(e){e.O(0,[7895,4799,577,4997,2586,2971,4938,1744],function(){return e(e.s=7770)}),_N_E=e.O()}]);