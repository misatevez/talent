(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5250],{2721:function(e,r,t){Promise.resolve().then(t.bind(t,3944))},3944:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(7437),l=t(7415),a=t(7445),i=t(2265),s=t(7330);function o(){let[e,r]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async()=>{let{data:e,error:t}=await s.Z.from("sub_categorias").select("\n          *,\n          categoria: id_categoria (\n            nombre\n          )\n        ");t?console.error(t):r(e)})()},[]),(0,n.jsx)("div",{className:"p-4 mx-auto w-full max-w-2xl mt-4",children:(0,n.jsx)("div",{className:"rounded-lg shadow-lg",children:(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-inner m-auto text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-center mt-4  text-gray-800",children:"Catalogo sub-familia de Evaluaciones."}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 mt-6",children:(0,n.jsx)("div",{children:(0,n.jsxs)(l.iA,{children:[(0,n.jsx)(l.xD,{children:(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.ss,{className:"w-[300px]",children:"Nombre familia"}),(0,n.jsx)(l.ss,{className:"w-[300px]",children:"Nombre sub-familia"}),(0,n.jsx)(l.ss,{className:"w-[200px]",children:"Fecha creaci\xf3n"})]})}),(0,n.jsx)(l.RM,{children:null==e?void 0:e.map((e,r)=>(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.pj,{children:e.categoria.nombre}),(0,n.jsx)(l.pj,{children:e.nombre}),(0,n.jsx)(l.pj,{children:function(e){let r=new Date(e),t=r.getDate().toString().padStart(2,"0"),n=(r.getMonth()+1).toString().padStart(2,"0"),l=r.getFullYear();return"".concat(t,"/").concat(n,"/").concat(l)}(e.fecha_creado)})]},r))})]})})}),(0,n.jsx)("div",{className:"flex justify-around mt-4",children:(0,n.jsx)(a.z,{children:"Generar PDF"})})]})})})}},7445:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),l=t(2265),a=t(7256),i=t(6061),s=t(8243);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:i,asChild:c=!1,...u}=e,d=c?a.g7:"button";return(0,n.jsx)(d,{className:(0,s.cn)(o({variant:l,size:i,className:t})),ref:r,...u})});c.displayName="Button"},7415:function(e,r,t){"use strict";t.d(r,{RM:function(){return o},SC:function(){return c},iA:function(){return i},pj:function(){return d},ss:function(){return u},xD:function(){return s}});var n=t(7437),l=t(2265),a=t(8243);let i=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:r,className:(0,a.cn)("w-full caption-bottom text-sm",t),...l})})});i.displayName="Table";let s=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("thead",{ref:r,className:(0,a.cn)("[&_tr]:border-b",t),...l})});s.displayName="TableHeader";let o=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...l})});o.displayName="TableBody",l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...l})}).displayName="TableFooter";let c=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("tr",{ref:r,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...l})});c.displayName="TableRow";let u=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("th",{ref:r,className:(0,a.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...l})});u.displayName="TableHead";let d=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("td",{ref:r,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...l})});d.displayName="TableCell",l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("caption",{ref:r,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...l})}).displayName="TableCaption"},7330:function(e,r,t){"use strict";let n=(0,t(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");r.Z=n},8243:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(7042),l=t(4769);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.m6)((0,n.W)(r))}},3428:function(e,r,t){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},2210:function(e,r,t){"use strict";t.d(r,{F:function(){return l},e:function(){return a}});var n=t(2265);function l(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function a(...e){return(0,n.useCallback)(l(...e),e)}},7256:function(e,r,t){"use strict";t.d(r,{g7:function(){return i}});var n=t(3428),l=t(2265),a=t(2210);let i=(0,l.forwardRef)((e,r)=>{let{children:t,...a}=e,i=l.Children.toArray(t),o=i.find(c);if(o){let e=o.props.children,t=i.map(r=>r!==o?r:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(s,(0,n.Z)({},a,{ref:r}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,t):null)}return(0,l.createElement)(s,(0,n.Z)({},a,{ref:r}),t)});i.displayName="Slot";let s=(0,l.forwardRef)((e,r)=>{let{children:t,...n}=e;return(0,l.isValidElement)(t)?(0,l.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let l=e[n],a=r[n];/^on[A-Z]/.test(n)?l&&a?t[n]=(...e)=>{a(...e),l(...e)}:l&&(t[n]=l):"style"===n?t[n]={...l,...a}:"className"===n&&(t[n]=[l,a].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?(0,a.F)(r,t.ref):t.ref}):l.Children.count(t)>1?l.Children.only(null):null});s.displayName="SlotClone";let o=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function c(e){return(0,l.isValidElement)(e)&&e.type===o}},6061:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var n=t(7042);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=n.W,i=(e,r)=>t=>{var n;if((null==r?void 0:r.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:s}=r,o=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==s?void 0:s[e];if(null===r)return null;let a=l(r)||l(n);return i[e][a]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return a(e,o,null==r?void 0:null===(n=r.compoundVariants)||void 0===n?void 0:n.reduce((e,r)=>{let{class:t,className:n,...l}=r;return Object.entries(l).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...c}[r]):({...s,...c})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[7895,577,2971,4938,1744],function(){return e(e.s=2721)}),_N_E=e.O()}]);