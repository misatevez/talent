exports.id=3650,exports.ids=[3650],exports.modules={36885:(e,t,r)=>{Promise.resolve().then(r.bind(r,49776)),Promise.resolve().then(r.bind(r,82549))},49776:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(95344),l=r(3729),n=r(82549),o=r(91525);function s({onGrupoTipoChange:e,selectedTipoId:t}){let[r,s]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(async()=>{let{data:e,error:t}=await o.Z.from("grupotipo").select("id_grupotipo, nombre");t?console.error("Error al obtener los tipos de grupos corporativos: ",t):s(e)})()},[]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Grupo Tipo Corporativo:"}),(0,a.jsxs)(n.Select,{onValueChange:e,value:t?.toString(),children:[a.jsx(n.SelectTrigger,{id:"group-type",children:a.jsx(n.SelectValue,{placeholder:"Seleccione uno"})}),a.jsx(n.SelectContent,{position:"popper",children:r.map((e,t)=>a.jsx(n.SelectItem,{value:e.id_grupotipo.toString(),children:e.nombre},t))})]})]})}},82549:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Select:()=>d,SelectContent:()=>g,SelectGroup:()=>u,SelectItem:()=>b,SelectLabel:()=>h,SelectScrollDownButton:()=>x,SelectScrollUpButton:()=>p,SelectSeparator:()=>y,SelectTrigger:()=>f,SelectValue:()=>m});var a=r(95344),l=r(3729),n=r(1146),o=r(25390),s=r(12704),i=r(62312),c=r(74456);let d=n.fC,u=n.ZA,m=n.B4,f=l.forwardRef(({className:e,children:t,...r},l)=>(0,a.jsxs)(n.xz,{ref:l,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[t,a.jsx(n.JO,{asChild:!0,children:a.jsx(o.Z,{className:"h-4 w-4 opacity-50"})})]}));f.displayName=n.xz.displayName;let p=l.forwardRef(({className:e,...t},r)=>a.jsx(n.u_,{ref:r,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(s.Z,{className:"h-4 w-4"})}));p.displayName=n.u_.displayName;let x=l.forwardRef(({className:e,...t},r)=>a.jsx(n.$G,{ref:r,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(o.Z,{className:"h-4 w-4"})}));x.displayName=n.$G.displayName;let g=l.forwardRef(({className:e,children:t,position:r="popper",...l},o)=>a.jsx(n.h_,{children:(0,a.jsxs)(n.VY,{ref:o,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...l,children:[a.jsx(p,{}),a.jsx(n.l_,{className:(0,c.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),a.jsx(x,{})]})}));g.displayName=n.VY.displayName;let h=l.forwardRef(({className:e,...t},r)=>a.jsx(n.__,{ref:r,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));h.displayName=n.__.displayName;let b=l.forwardRef(({className:e,children:t,...r},l)=>(0,a.jsxs)(n.ck,{ref:l,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white",e),...r,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(n.wU,{children:a.jsx(i.Z,{className:"h-4 w-4"})})}),a.jsx(n.eT,{children:t})]}));b.displayName=n.ck.displayName;let y=l.forwardRef(({className:e,...t},r)=>a.jsx(n.Z0,{ref:r,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));y.displayName=n.Z0.displayName},58808:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});let a=(0,r(86843).createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/entidades/gruposcorporativos/lista-tipodeGC.jsx`),{__esModule:l,$$typeof:n}=a,o=a.default},10077:(e,t,r)=>{"use strict";r.d(t,{z:()=>f});var a=r(25036),l=r(40002);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let o=(0,l.forwardRef)((e,t)=>{let{children:r,...a}=e,o=l.Children.toArray(r),i=o.find(c);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(s,n({},a,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(s,n({},a,{ref:t}),r)});o.displayName="Slot";let s=(0,l.forwardRef)((e,t)=>{let{children:r,...a}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let a in t){let l=e[a],n=t[a];/^on[A-Z]/.test(a)?l&&n?r[a]=(...e)=>{n(...e),l(...e)}:l&&(r[a]=l):"style"===a?r[a]={...l,...n}:"className"===a&&(r[a]=[l,n].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,r.ref):r.ref}):l.Children.count(r)>1?l.Children.only(null):null});s.displayName="SlotClone";let i=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function c(e){return(0,l.isValidElement)(e)&&e.type===i}var d=r(94467),u=r(78596);let m=(0,d.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=l.forwardRef(({className:e,variant:t,size:r,asChild:l=!1,...n},s)=>{let i=l?o:"button";return a.jsx(i,{className:(0,u.cn)(m({variant:t,size:r,className:e})),ref:s,...n})});f.displayName="Button"},58562:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var a=r(25036),l=r(40002),n=r(78596);let o=l.forwardRef(({className:e,type:t,...r},l)=>a.jsx("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:l,...r}));o.displayName="Input"},53233:(e,t,r)=>{"use strict";r.d(t,{Bw:()=>u,DI:()=>i,Ph:()=>s,Ql:()=>m,i4:()=>d,ki:()=>c});var a=r(86843);let l=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx`),{__esModule:n,$$typeof:o}=l;l.default;let s=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#Select`),i=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectGroup`),c=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectValue`),d=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectTrigger`),u=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectContent`);(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectLabel`);let m=(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectItem`);(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectSeparator`),(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectScrollUpButton`),(0,a.createProxy)(String.raw`/home/runner/work/xtratalent/xtratalent/src/components/ui/select.jsx#SelectScrollDownButton`)},92123:(e,t,r)=>{"use strict";r.d(t,{RM:()=>i,SC:()=>c,iA:()=>o,pj:()=>u,ss:()=>d,xD:()=>s});var a=r(25036),l=r(40002),n=r(78596);let o=l.forwardRef(({className:e,...t},r)=>a.jsx("div",{className:"relative w-full overflow-auto",children:a.jsx("table",{ref:r,className:(0,n.cn)("w-full caption-bottom text-sm",e),...t})}));o.displayName="Table";let s=l.forwardRef(({className:e,...t},r)=>a.jsx("thead",{ref:r,className:(0,n.cn)("[&_tr]:border-b",e),...t}));s.displayName="TableHeader";let i=l.forwardRef(({className:e,...t},r)=>a.jsx("tbody",{ref:r,className:(0,n.cn)("[&_tr:last-child]:border-0",e),...t}));i.displayName="TableBody",l.forwardRef(({className:e,...t},r)=>a.jsx("tfoot",{ref:r,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let c=l.forwardRef(({className:e,...t},r)=>a.jsx("tr",{ref:r,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));c.displayName="TableRow";let d=l.forwardRef(({className:e,...t},r)=>a.jsx("th",{ref:r,className:(0,n.cn)("h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));d.displayName="TableHead";let u=l.forwardRef(({className:e,...t},r)=>a.jsx("td",{ref:r,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));u.displayName="TableCell",l.forwardRef(({className:e,...t},r)=>a.jsx("caption",{ref:r,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},78596:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(70990),l=r(81774);function n(...e){return(0,l.m6)((0,a.W)(e))}},94467:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});var a=r(70990);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=a.W,o=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:s}=t,i=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],a=null==s?void 0:s[e];if(null===t)return null;let n=l(t)||l(a);return o[e][n]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return n(e,i,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:a,...l}=t;return Object.entries(l).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};