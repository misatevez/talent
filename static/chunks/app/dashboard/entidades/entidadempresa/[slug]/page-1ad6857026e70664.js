(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1321],{8008:function(e,t,i){Promise.resolve().then(i.bind(i,6007))},6007:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var s=i(7437),n=i(2265),a=i(7330),r=i(4033),l=i(8156),o=i(4410);function u(e){let{params:t}=e,[i,u]=(0,n.useState)(null),[d,c]=(0,n.useState)(!0);(0,r.useRouter)();let{slug:f}=t,[m,h]=(0,n.useState)({visible:!1,titulo:"",mensaje:""});(0,n.useEffect)(()=>{(async()=>{if(f){c(!0);let{data:e,error:t}=await a.Z.from("entidad_empresa").select("*").eq("id_entidad_empresa",f).single();t?console.error("Error fetching user details: ",t):u(e),c(!1)}})()},[f]);let p=async e=>{e.preventDefault(),c(!0);let{error:t}=await a.Z.from("entidad_empresa").update(i).eq("id_entidad_empresa",f);t?h({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+t.message}):h({visible:!0,titulo:"\xc9xito",mensaje:"Los datos del grupo han sido actualizados"}),c(!1)};return d?(0,s.jsx)("div",{children:"Loading..."}):i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{titulo:"Editar Entidad Empresa",formState:i,handleInputChange:e=>{let{name:t,value:i}=e.target;u(e=>({...e,[t]:i}))},handleSubmit:p}),m.visible&&(0,s.jsx)(l.U,{titulo:m.titulo,mensaje:m.mensaje,visible:m.visible,onClose:()=>{h(e=>({...e,visible:!1}))}})]}):(0,s.jsx)("div",{children:"No user details found or there was an error fetching them."})}},4033:function(e,t,i){e.exports=i(5313)}},function(e){e.O(0,[7895,4799,577,4997,7962,2971,4938,1744],function(){return e(e.s=8008)}),_N_E=e.O()}]);