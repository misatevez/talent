(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1368],{8406:function(e,t,i){Promise.resolve().then(i.bind(i,762))},762:function(e,t,i){"use strict";i.r(t),i.d(t,{NuevaEntidadEmpresa:function(){return u}});var n=i(7437),s=i(7330),a=i(2265),l=i(8156),r=i(4410);function u(){let[e,t]=(0,a.useState)({nombre:"",descripcion:"",id_subtipo_entidad:""}),[i,u]=(0,a.useState)({visible:!1,titulo:"",mensaje:""}),o=async t=>{t.preventDefault(),console.log(e);let{data:i,error:n}=await s.Z.from("entidad_empresa").insert([e]);n?u({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+n.message}):u({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su subtipo de entidad"})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:" p-4 mx-auto w-full max-w-2xl mt-4",children:(0,n.jsx)(r.Z,{titulo:"Crear Entidad Empresa",formState:e,handleInputChange:e=>{let{name:i,value:n}=e.target;t(e=>({...e,[i]:n}))},handleSubmit:o})}),i.visible&&(0,n.jsx)(l.U,{titulo:i.titulo,mensaje:i.mensaje,visible:i.visible,onClose:()=>{u(e=>({...e,visible:!1}))}})]})}}},function(e){e.O(0,[7895,4799,577,4997,7962,2971,4938,1744],function(){return e(e.s=8406)}),_N_E=e.O()}]);