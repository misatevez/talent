(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3991],{6617:function(e,r,t){Promise.resolve().then(t.bind(t,7283))},7283:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var s=t(7437),n=t(2265),i=t(7330),o=t(4033),a=t(3284),l=t(8156);function d(e){let{params:r}=e,[t,d]=(0,n.useState)(null),[c,u]=(0,n.useState)(!0);(0,o.useRouter)();let{slug:f}=r,[m,p]=(0,n.useState)({visible:!1,titulo:"",mensaje:""});(0,n.useEffect)(()=>{(async()=>{if(f){u(!0);let{data:e,error:r}=await i.Z.from("grupotipo").select("*").eq("id_grupotipo",f).single();r?console.error("Error fetching user details: ",r):d(e),u(!1)}})()},[f]);let x=async e=>{e.preventDefault(),u(!0);let{error:r}=await i.Z.from("grupotipo").update(t).eq("id_grupotipo",f);r?p({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+r.message}):p({visible:!0,titulo:"\xc9xito",mensaje:"Los datos del tipo de grupo han sido actualizados"}),u(!1)};return c?(0,s.jsx)("div",{children:"Loading..."}):t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{titulo:"Editar tipo de grupo corporativo",formState:t,handleInputChange:e=>{let{name:r,value:t}=e.target;d(e=>({...e,[r]:t}))},handleSubmit:x}),m.visible&&(0,s.jsx)(l.U,{titulo:m.titulo,mensaje:m.mensaje,visible:m.visible,onClose:()=>{p(e=>({...e,visible:!1}))}})]}):(0,s.jsx)("div",{children:"No user details found or there was an error fetching them."})}},3284:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var s=t(7437);t(2265);var n=t(1262),i=t(7445);function o(e){let{formState:r,handleInputChange:t,handleSubmit:o,titulo:a}=e;return(0,s.jsxs)("form",{onSubmit:o,className:"bg-white p-4 rounded-md shadow-md mt-4",children:[(0,s.jsx)("h2",{className:"text-lg font-bold text-[#2c5282] mb-4",children:a}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4"}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-name",children:"Nombre de tipo de Grupo Corporativo:"}),(0,s.jsx)(n.I,{name:"nombre",value:r.nombre,onChange:t,id:"group-name",placeholder:"Especial"})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-description",children:"Descripci\xf3n tipo:"}),(0,s.jsx)("textarea",{name:"descripcion",value:r.descripcion,onChange:t,className:"resize-none border rounded-md w-full p-2",id:"group-description",placeholder:"El tipo de grupo corporativo...",rows:"4"})]}),(0,s.jsx)("div",{className:"flex justify-end mt-4",children:(0,s.jsx)(i.z,{ype:"submit",children:"Guardar"})})]})}},8156:function(e,r,t){"use strict";t.d(r,{U:function(){return d}});var s=t(7437),n=t(8398),i=t(2265),o=t(6694),a=t(8243);let l=i.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(o.fC,{ref:r,className:(0,a.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...n})});function d(e){let{titulo:r,mensaje:t,visible:i,onClose:o}=e;return i?(0,s.jsx)("aside",{className:"fixed right-0 top-0 m-4 max-w-sm",children:(0,s.jsxs)(n.Zb,{className:"bg-white shadow-lg overflow-hidden",children:[(0,s.jsx)(n.Ol,{className:"p-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(n.ll,{className:"text-lg font-bold",children:"Notificacion"}),(0,s.jsx)(c,{className:"w-4 h-4 cursor-pointer",onClick:o})]})}),(0,s.jsxs)(n.aY,{className:"p-4",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(l,{className:"w-10 h-10",src:"/placeholder.svg?height=40&width=40"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:r}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:t})]})]})}),(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)(u,{className:"w-4 h-4 cursor-pointer",onClick:o})})]})]})},"1"):null}function c(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),(0,s.jsx)("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]})}function u(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,s.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,s.jsx)("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})}l.displayName=o.fC.displayName,i.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(o.Ee,{ref:r,className:(0,a.cn)("aspect-square h-full w-full",t),...n})}).displayName=o.Ee.displayName,i.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(o.NY,{ref:r,className:(0,a.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...n})}).displayName=o.NY.displayName},7445:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var s=t(7437),n=t(2265),i=t(7256),o=t(6061),a=t(8243);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:o,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,s.jsx)(u,{className:(0,a.cn)(l({variant:n,size:o,className:t})),ref:r,...c})});d.displayName="Button"},8398:function(e,r,t){"use strict";t.d(r,{Ol:function(){return a},Zb:function(){return o},aY:function(){return d},ll:function(){return l}});var s=t(7437),n=t(2265),i=t(8243);let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});o.displayName="Card";let a=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...n})});a.displayName="CardHeader";let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});l.displayName="CardTitle",n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...n})}).displayName="CardDescription";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...n})});d.displayName="CardContent",n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...n})}).displayName="CardFooter"},1262:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var s=t(7437),n=t(2265),i=t(8243);let o=n.forwardRef((e,r)=>{let{className:t,type:n,...o}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},7330:function(e,r,t){"use strict";let s=(0,t(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");r.Z=s},8243:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var s=t(7042),n=t(4769);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,s.W)(r))}},4033:function(e,r,t){e.exports=t(5313)}},function(e){e.O(0,[7895,577,7145,2971,4938,1744],function(){return e(e.s=6617)}),_N_E=e.O()}]);