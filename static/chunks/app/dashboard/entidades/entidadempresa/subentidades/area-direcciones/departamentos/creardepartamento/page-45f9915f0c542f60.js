(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9554],{7897:function(e,t,n){Promise.resolve().then(n.bind(n,2124))},2124:function(e,t,n){"use strict";n.r(t),n.d(t,{NuevoDepartamento:function(){return o}});var s=n(7437),i=n(7330),a=n(2265),r=n(8156),l=n(7092);function o(){let[e,t]=(0,a.useState)({nombre:"",descripcion:"",id_direcciones:""}),[n,o]=(0,a.useState)({visible:!1,titulo:"",mensaje:""}),c=async t=>{t.preventDefault(),console.log(e);let{data:n,error:s}=await i.Z.from("departamentos").insert([e]);s?o({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+s.message}):o({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su departamento"})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:" p-4 mx-auto w-full max-w-2xl mt-4",children:(0,s.jsx)(l.Z,{titulo:"Crear Departamento",formState:e,handleInputChange:e=>{let{name:n,value:s}=e.target;t(e=>({...e,[n]:s}))},handleSubmit:c})}),n.visible&&(0,s.jsx)(r.U,{titulo:n.titulo,mensaje:n.mensaje,visible:n.visible,onClose:()=>{o(e=>({...e,visible:!1}))}})]})}},7092:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(7437);n(2265);var i=n(1262),a=n(7445),r=n(3102);function l(e){let{formState:t,handleInputChange:n,handleSubmit:l,titulo:o}=e;return(0,s.jsx)("form",{onSubmit:l,children:(0,s.jsxs)("div",{className:"bg-white p-4 rounded-md shadow-md mt-4",children:[(0,s.jsx)("h2",{className:"text-lg font-bold text-[#2c5282] mb-4",children:o}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{selectedTipoId:t.id_direcciones,onGrupoTipoChange:e=>{n({target:{name:"id_direcciones",value:e}})}})})}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-name",children:"Nombre Departamento:"}),(0,s.jsx)(i.I,{name:"nombre",value:t.nombre,onChange:n,id:"group-name",placeholder:"Especial"})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-description",children:"Descripci\xf3n Departamento:"}),(0,s.jsx)("textarea",{name:"descripcion",value:t.descripcion,onChange:n,className:"resize-none border rounded-md w-full p-2",id:"group-description",placeholder:"El departamento...",rows:"4"})]}),(0,s.jsx)("div",{className:"flex justify-end mt-4",children:(0,s.jsx)(a.z,{children:"Guardar"})})]})})}}},function(e){e.O(0,[7895,4799,577,4997,2586,2971,4938,1744],function(){return e(e.s=7897)}),_N_E=e.O()}]);