(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4812],{4812:function(e,t,n){"use strict";n.r(t),n.d(t,{RegistroInterno:function(){return d}});var o=n(7437);n(1396),n(232),n(7445),n(1262),n(4670);var r=n(2265),a=n(7330),s=n(6827),i=n(8156);function d(){let[e,t]=(0,r.useState)({password:"",id_entidad_empresa:"",tipo_usuario:"",correo_electronico:"",codigo_plaza_vacante:"",profesion_ocupacion:"",codigo_perfil_puesto:"",anos_experiencia:"",direccion_calle_avenida:"",direccion_colonia:"",direccion_zona:"",direccion_departamento:"",direccion_municipio:"",primer_nombre:"",segundo_nombre:"",apellido_materno:"",apellido_paterno:"",fecha_nacimiento:"",numero_dpi:"",numero_afiliacion_igss:"",numero_nit:"",lugar_nacimiento:"",pais_origen:"",estado_civil:"",genero_sexo:"",numero_pasaporte:"",telefono_casa:"",telefono_particular:"",telefono_movil_cel:""}),[n,d]=(0,r.useState)({visible:!1,titulo:"",mensaje:""}),l=async t=>{t.preventDefault(),console.log(e);let{data:n,error:o}=await a.Z.from("usuarios").insert([e]);a.Z.auth.signUp({email:e.correo_electronico,password:e.password}),o?d({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+o.message}):d({visible:!0,titulo:"\xc9xito",mensaje:"Se ha creado su usuario"})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{titulo:"Alta de usuarios",formState:e,handleInputChange:e=>{let{name:n,value:o}=e.target;t(e=>({...e,[n]:o}))},handleSubmit:l}),n.visible&&(0,o.jsx)(i.U,{titulo:n.titulo,mensaje:n.mensaje,visible:n.visible,onClose:()=>{d(e=>({...e,visible:!1}))}})]})}},4670:function(e,t,n){"use strict";n.r(t),n.d(t,{Checkbox:function(){return C}});var o=n(7437),r=n(2265),a=n(3428),s=n(2210),i=n(6989),d=n(5744),l=n(3763),c=n(5184),u=n(4977),f=n(5606),p=n(9381);let m="Checkbox",[b,h]=(0,i.b)(m),[x,w]=b(m),g=(0,r.forwardRef)((e,t)=>{let{__scopeCheckbox:n,name:o,checked:i,defaultChecked:c,required:u,disabled:f,value:m="on",onCheckedChange:b,...h}=e,[w,g]=(0,r.useState)(null),v=(0,s.e)(t,e=>g(e)),k=(0,r.useRef)(!1),j=!w||!!w.closest("form"),[C=!1,D]=(0,l.T)({prop:i,defaultProp:c,onChange:b}),E=(0,r.useRef)(C);return(0,r.useEffect)(()=>{let e=null==w?void 0:w.form;if(e){let t=()=>D(E.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[w,D]),(0,r.createElement)(x,{scope:n,state:C,disabled:f},(0,r.createElement)(p.WV.button,(0,a.Z)({type:"button",role:"checkbox","aria-checked":_(C)?"mixed":C,"aria-required":u,"data-state":N(C),"data-disabled":f?"":void 0,disabled:f,value:m},h,{ref:v,onKeyDown:(0,d.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,d.M)(e.onClick,e=>{D(e=>!!_(e)||!e),j&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),j&&(0,r.createElement)(y,{control:w,bubbles:!k.current,name:o,value:m,checked:C,required:u,disabled:f,style:{transform:"translateX(-100%)"}}))}),v=(0,r.forwardRef)((e,t)=>{let{__scopeCheckbox:n,forceMount:o,...s}=e,i=w("CheckboxIndicator",n);return(0,r.createElement)(f.z,{present:o||_(i.state)||!0===i.state},(0,r.createElement)(p.WV.span,(0,a.Z)({"data-state":N(i.state),"data-disabled":i.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),y=e=>{let{control:t,checked:n,bubbles:o=!0,...s}=e,i=(0,r.useRef)(null),d=(0,c.D)(n),l=(0,u.t)(t);return(0,r.useEffect)(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==n&&t){let r=new Event("click",{bubbles:o});e.indeterminate=_(n),t.call(e,!_(n)&&n),e.dispatchEvent(r)}},[d,n,o]),(0,r.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!_(n)&&n},s,{tabIndex:-1,ref:i,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return"indeterminate"===e}function N(e){return _(e)?"indeterminate":e?"checked":"unchecked"}var k=n(2442),j=n(8243);let C=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(g,{ref:t,className:(0,j.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",n),...r,children:(0,o.jsx)(v,{className:(0,j.cn)("flex items-center justify-center text-current"),children:(0,o.jsx)(k.Z,{className:"h-4 w-4"})})})});C.displayName=g.displayName},232:function(e,t,n){"use strict";n.r(t),n.d(t,{DropdownMenu:function(){return c},DropdownMenuCheckboxItem:function(){return v},DropdownMenuContent:function(){return w},DropdownMenuGroup:function(){return f},DropdownMenuItem:function(){return g},DropdownMenuLabel:function(){return _},DropdownMenuPortal:function(){return p},DropdownMenuRadioGroup:function(){return b},DropdownMenuRadioItem:function(){return y},DropdownMenuSeparator:function(){return N},DropdownMenuShortcut:function(){return k},DropdownMenuSub:function(){return m},DropdownMenuSubContent:function(){return x},DropdownMenuSubTrigger:function(){return h},DropdownMenuTrigger:function(){return u}});var o=n(7437),r=n(2265),a=n(8883),s=n(7158),i=n(2442),d=n(6369),l=n(8243);let c=a.fC,u=a.xz,f=a.ZA,p=a.Uv,m=a.Tr,b=a.Ee,h=r.forwardRef((e,t)=>{let{className:n,inset:r,children:i,...d}=e;return(0,o.jsxs)(a.fF,{ref:t,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",n),...d,children:[i,(0,o.jsx)(s.Z,{className:"ml-auto h-4 w-4"})]})});h.displayName=a.fF.displayName;let x=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(a.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})});x.displayName=a.tu.displayName;let w=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...s}=e;return(0,o.jsx)(a.Uv,{children:(0,o.jsx)(a.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})})});w.displayName=a.VY.displayName;let g=r.forwardRef((e,t)=>{let{className:n,inset:r,...s}=e;return(0,o.jsx)(a.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",n),...s})});g.displayName=a.ck.displayName;let v=r.forwardRef((e,t)=>{let{className:n,children:r,checked:s,...d}=e;return(0,o.jsxs)(a.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:s,...d,children:[(0,o.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,o.jsx)(a.wU,{children:(0,o.jsx)(i.Z,{className:"h-4 w-4"})})}),r]})});v.displayName=a.oC.displayName;let y=r.forwardRef((e,t)=>{let{className:n,children:r,...s}=e;return(0,o.jsxs)(a.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...s,children:[(0,o.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,o.jsx)(a.wU,{children:(0,o.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),r]})});y.displayName=a.Rk.displayName;let _=r.forwardRef((e,t)=>{let{className:n,inset:r,...s}=e;return(0,o.jsx)(a.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",n),...s})});_.displayName=a.__.displayName;let N=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(a.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...r})});N.displayName=a.Z0.displayName;let k=e=>{let{className:t,...n}=e;return(0,o.jsx)("span",{className:(0,l.cn)("ml-auto text-xs tracking-widest opacity-60",t),...n})};k.displayName="DropdownMenuShortcut"},1396:function(e,t,n){e.exports=n(5250)}}]);