(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9541],{3403:function(e,t,r){Promise.resolve().then(r.bind(r,3469))},3469:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),l=r(7415),a=r(7445),i=r(2265),o=r(7330);function s(){let[e,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async()=>{let{data:e,error:r}=await o.Z.from("categorias").select("*");t(e)})()},[]),(0,n.jsx)("div",{className:"p-4 mx-auto w-full max-w-2xl mt-4",children:(0,n.jsx)("div",{className:"rounded-lg shadow-lg",children:(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-inner m-auto text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-center mt-4  text-gray-800",children:"Catalogo Familia de Evaluaciones"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 mt-6",children:(0,n.jsx)("div",{children:(0,n.jsxs)(l.iA,{children:[(0,n.jsx)(l.xD,{children:(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.ss,{className:"w-[300px]",children:"Nombre Familia"}),(0,n.jsx)(l.ss,{className:"w-[200px]",children:"Fecha creaci\xf3n"})]})}),(0,n.jsx)(l.RM,{children:null==e?void 0:e.map((e,t)=>(0,n.jsxs)(l.SC,{children:[(0,n.jsx)(l.pj,{children:e.nombre}),(0,n.jsx)(l.pj,{children:function(e){let t=new Date(e),r=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getFullYear();return"".concat(r,"/").concat(n,"/").concat(l)}(e.fecha_creado)})]},t))})]})})}),(0,n.jsx)("div",{className:"flex justify-around mt-4",children:(0,n.jsx)(a.z,{children:"Generar PDF"})})]})})})}},7445:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(7437),l=r(2265),a=r(7256),i=r(6061),o=r(8243);let s=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,t)=>{let{className:r,variant:l,size:i,asChild:c=!1,...u}=e,d=c?a.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(s({variant:l,size:i,className:r})),ref:t,...u})});c.displayName="Button"},7415:function(e,t,r){"use strict";r.d(t,{RM:function(){return s},SC:function(){return c},iA:function(){return i},pj:function(){return d},ss:function(){return u},xD:function(){return o}});var n=r(7437),l=r(2265),a=r(8243);let i=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",r),...l})})});i.displayName="Table";let o=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("thead",{ref:t,className:(0,a.cn)("[&_tr]:border-b",r),...l})});o.displayName="TableHeader";let s=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",r),...l})});s.displayName="TableBody",l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...l})}).displayName="TableFooter";let c=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("tr",{ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...l})});c.displayName="TableRow";let u=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("th",{ref:t,className:(0,a.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...l})});u.displayName="TableHead";let d=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("td",{ref:t,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...l})});d.displayName="TableCell",l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("caption",{ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",r),...l})}).displayName="TableCaption"},7330:function(e,t,r){"use strict";let n=(0,r(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");t.Z=n},8243:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(7042),l=r(4769);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},3428:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},2210:function(e,t,r){"use strict";r.d(t,{F:function(){return l},e:function(){return a}});var n=r(2265);function l(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return(0,n.useCallback)(l(...e),e)}},7256:function(e,t,r){"use strict";r.d(t,{g7:function(){return i}});var n=r(3428),l=r(2265),a=r(2210);let i=(0,l.forwardRef)((e,t)=>{let{children:r,...a}=e,i=l.Children.toArray(r),s=i.find(c);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(o,(0,n.Z)({},a,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(o,(0,n.Z)({},a,{ref:t}),r)});i.displayName="Slot";let o=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],a=t[n];/^on[A-Z]/.test(n)?l&&a?r[n]=(...e)=>{a(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...a}:"className"===n&&(r[n]=[l,a].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,a.F)(t,r.ref):r.ref}):l.Children.count(r)>1?l.Children.only(null):null});o.displayName="SlotClone";let s=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function c(e){return(0,l.isValidElement)(e)&&e.type===s}},6061:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(7042);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=n.W,i=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==o?void 0:o[e];if(null===t)return null;let a=l(t)||l(n);return i[e][a]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return a(e,s,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...l}=t;return Object.entries(l).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...c}[t]):({...o,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[7895,577,2971,4938,1744],function(){return e(e.s=3403)}),_N_E=e.O()}]);