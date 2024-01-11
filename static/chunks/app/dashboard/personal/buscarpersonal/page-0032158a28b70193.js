(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4387],{2975:function(e,r,s){Promise.resolve().then(s.bind(s,1657))},8156:function(e,r,s){"use strict";s.d(r,{U:function(){return c}});var t=s(7437),n=s(8398),a=s(2265),i=s(6694),l=s(8243);let o=a.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)(i.fC,{ref:r,className:(0,l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",s),...n})});function c(e){let{titulo:r,mensaje:s,visible:a,onClose:i}=e;return a?(0,t.jsx)("aside",{className:"fixed right-0 top-0 m-4 max-w-sm",children:(0,t.jsxs)(n.Zb,{className:"bg-white shadow-lg overflow-hidden",children:[(0,t.jsx)(n.Ol,{className:"p-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(n.ll,{className:"text-lg font-bold",children:"Notificacion"}),(0,t.jsx)(d,{className:"w-4 h-4 cursor-pointer",onClick:i})]})}),(0,t.jsxs)(n.aY,{className:"p-4",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(o,{className:"w-10 h-10",src:"/placeholder.svg?height=40&width=40"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-bold",children:r}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:s})]})]})}),(0,t.jsx)("div",{className:"flex justify-start",children:(0,t.jsx)(u,{className:"w-4 h-4 cursor-pointer",onClick:i})})]})]})},"1"):null}function d(e){return(0,t.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),(0,t.jsx)("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]})}function u(e){return(0,t.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,t.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,t.jsx)("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})}o.displayName=i.fC.displayName,a.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)(i.Ee,{ref:r,className:(0,l.cn)("aspect-square h-full w-full",s),...n})}).displayName=i.Ee.displayName,a.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)(i.NY,{ref:r,className:(0,l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",s),...n})}).displayName=i.NY.displayName},1657:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return u}});var t=s(7437),n=s(2265),a=s(7330),i=s(1262),l=s(7445),o=s(7415),c=s(4033),d=s(8156);function u(){let e=(0,c.useRouter)(),[r,s]=(0,n.useState)([]),[u,f]=(0,n.useState)(""),[m,x]=(0,n.useState)(null),[h,p]=(0,n.useState)(!0),[b,j]=(0,n.useState)({visible:!1,titulo:"",mensaje:""});(0,n.useEffect)(()=>{!async function(){let{data:e,error:r}=await a.Z.from("usuarios").select("*");r?console.log(r):(s(e),p(!1))}()},[]);let N=e=>{x(m===e?null:e)},g=async()=>{if(!m)return;p(!0);let{error:e}=await a.Z.from("usuarios").delete().eq("usuario_id",m);e?(console.error("Error deleting user: ",e),j({visible:!0,titulo:"Error",mensaje:"Vuelva a intentar mas tarde: "+e.message})):(s(e=>e.filter(e=>e.usuario_id!==m)),x(null),j({visible:!0,titulo:"\xc9xito",mensaje:"Se ha eliminado el usuario"})),p(!1)};if(h)return(0,t.jsx)("div",{children:"Loading..."});let w=r.filter(e=>{var r,s,t;return(null===(r=e.primer_nombre)||void 0===r?void 0:r.toLowerCase().includes(u))||(null===(s=e.apellido_paterno)||void 0===s?void 0:s.toLowerCase().includes(u))||(null===(t=e.correo_electronico)||void 0===t?void 0:t.toLowerCase().includes(u))});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"bg-white p-4 m-4 rounded-lg shadow-lg",children:[(0,t.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Buscar usuario"})}),(0,t.jsxs)("div",{className:"flex w-full max-w-full items-center space-x-2 mb-10",children:[(0,t.jsx)(i.I,{placeholder:"Search",type:"text",onChange:e=>{f(e.target.value.toLowerCase())}}),(0,t.jsx)(l.z,{type:"submit",children:"Buscar"})]}),(0,t.jsxs)(o.iA,{children:[(0,t.jsx)(o.xD,{children:(0,t.jsxs)(o.SC,{children:[(0,t.jsx)(o.ss,{className:"w-[50px]",children:"C\xf3digo"}),(0,t.jsx)(o.ss,{className:"w-[150px]",children:"Nombre"}),(0,t.jsx)(o.ss,{className:"w-[200px]",children:"Nombre Perfil"}),(0,t.jsx)(o.ss,{className:"w-[250px]",children:"Email"}),(0,t.jsx)(o.ss,{className:"w-[150px]",children:"Fecha Registro"}),(0,t.jsx)(o.ss,{className:"w-[100px]",children:"Seleccionar"})]})}),(0,t.jsx)(o.RM,{children:w.map((e,r)=>(0,t.jsxs)(o.SC,{children:[(0,t.jsx)(o.pj,{children:e.usuario_id}),(0,t.jsxs)(o.pj,{children:[e.primer_nombre," ",e.apellido_paterno]}),(0,t.jsx)(o.pj,{children:e.tipo_usuario}),(0,t.jsx)(o.pj,{children:e.correo_electronico}),(0,t.jsx)(o.pj,{children:e.fecha_creado}),(0,t.jsx)(o.pj,{children:(0,t.jsx)("input",{type:"checkbox",checked:m===e.usuario_id,onChange:()=>N(e.usuario_id),className:"accent-blue-500 h-5 w-5"})})]},r))})]}),(0,t.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,t.jsx)(l.z,{className:"bg-blue-500 text-white ".concat(m?"":"opacity-50 cursor-not-allowed"),disabled:!m,onClick:()=>e.push("/dashboard/personal/".concat(m)),children:"Modificar usuario"}),(0,t.jsx)(l.z,{className:"bg-red-500 text-white ".concat(m?"":"opacity-50 cursor-not-allowed"),disabled:!m,onClick:g,children:"Eliminar usuario"})]})]}),b.visible&&(0,t.jsx)(d.U,{titulo:b.titulo,mensaje:b.mensaje,visible:b.visible,onClose:()=>{j(e=>({...e,visible:!1}))}})]})}},7445:function(e,r,s){"use strict";s.d(r,{z:function(){return c}});var t=s(7437),n=s(2265),a=s(7256),i=s(6061),l=s(8243);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,r)=>{let{className:s,variant:n,size:i,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,t.jsx)(u,{className:(0,l.cn)(o({variant:n,size:i,className:s})),ref:r,...d})});c.displayName="Button"},8398:function(e,r,s){"use strict";s.d(r,{Ol:function(){return l},Zb:function(){return i},aY:function(){return c},ll:function(){return o}});var t=s(7437),n=s(2265),a=s(8243);let i=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...n})});i.displayName="Card";let l=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",s),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",s),...n})});o.displayName="CardTitle",n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",s),...n})}).displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",s),...n})});c.displayName="CardContent",n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",s),...n})}).displayName="CardFooter"},1262:function(e,r,s){"use strict";s.d(r,{I:function(){return i}});var t=s(7437),n=s(2265),a=s(8243);let i=n.forwardRef((e,r)=>{let{className:s,type:n,...i}=e;return(0,t.jsx)("input",{type:n,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:r,...i})});i.displayName="Input"},7415:function(e,r,s){"use strict";s.d(r,{RM:function(){return o},SC:function(){return c},iA:function(){return i},pj:function(){return u},ss:function(){return d},xD:function(){return l}});var t=s(7437),n=s(2265),a=s(8243);let i=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("div",{className:"relative w-full overflow-auto",children:(0,t.jsx)("table",{ref:r,className:(0,a.cn)("w-full caption-bottom text-sm",s),...n})})});i.displayName="Table";let l=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("thead",{ref:r,className:(0,a.cn)("[&_tr]:border-b",s),...n})});l.displayName="TableHeader";let o=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("tbody",{ref:r,className:(0,a.cn)("[&_tr:last-child]:border-0",s),...n})});o.displayName="TableBody",n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("tfoot",{ref:r,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...n})}).displayName="TableFooter";let c=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("tr",{ref:r,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...n})});c.displayName="TableRow";let d=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("th",{ref:r,className:(0,a.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...n})});d.displayName="TableHead";let u=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("td",{ref:r,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...n})});u.displayName="TableCell",n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,t.jsx)("caption",{ref:r,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",s),...n})}).displayName="TableCaption"},7330:function(e,r,s){"use strict";let t=(0,s(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");r.Z=t},8243:function(e,r,s){"use strict";s.d(r,{cn:function(){return a}});var t=s(7042),n=s(4769);function a(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,n.m6)((0,t.W)(r))}}},function(e){e.O(0,[7895,577,7359,2971,4938,1744],function(){return e(e.s=2975)}),_N_E=e.O()}]);