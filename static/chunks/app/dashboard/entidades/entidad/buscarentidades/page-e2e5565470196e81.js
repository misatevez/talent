(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3804,3648],{3288:function(e,t,r){Promise.resolve().then(r.bind(r,6914)),Promise.resolve().then(r.bind(r,3063))},6914:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),a=r(2265),s=r(3063),o=r(7330);function l(e){let{onGrupoTipoChange:t,selectedTipoId:r}=e,[l,i]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{let{data:e,error:t}=await o.Z.from("grupotipo").select("id_grupotipo, nombre");t?console.error("Error al obtener los tipos de grupos corporativos: ",t):i(e)})()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{className:"block text-sm font-medium mb-1",htmlFor:"group-type",children:"Grupo Tipo Corporativo:"}),(0,n.jsxs)(s.Select,{onValueChange:t,value:null==r?void 0:r.toString(),children:[(0,n.jsx)(s.SelectTrigger,{id:"group-type",children:(0,n.jsx)(s.SelectValue,{placeholder:"Seleccione uno"})}),(0,n.jsx)(s.SelectContent,{position:"popper",children:l.map((e,t)=>(0,n.jsx)(s.SelectItem,{value:e.id_grupotipo.toString(),children:e.nombre},t))})]})]})}},3063:function(e,t,r){"use strict";r.r(t),r.d(t,{Select:function(){return d},SelectContent:function(){return x},SelectGroup:function(){return u},SelectItem:function(){return y},SelectLabel:function(){return g},SelectScrollDownButton:function(){return h},SelectScrollUpButton:function(){return m},SelectSeparator:function(){return N},SelectTrigger:function(){return p},SelectValue:function(){return f}});var n=r(7437),a=r(2265),s=r(9530),o=r(3523),l=r(9224),i=r(2442),c=r(8243);let d=s.fC,u=s.ZA,f=s.B4,p=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(s.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...l,children:[a,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(o.Z,{className:"h-4 w-4 opacity-50"})})]})});p.displayName=s.xz.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})});m.displayName=s.u_.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})});h.displayName=s.$G.displayName;let x=a.forwardRef((e,t)=>{let{className:r,children:a,position:o="popper",...l}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsxs)(s.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===o&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:o,...l,children:[(0,n.jsx)(m,{}),(0,n.jsx)(s.l_,{className:(0,c.cn)("p-1","popper"===o&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(h,{})]})})});x.displayName=s.VY.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});g.displayName=s.__.displayName;let y=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(s.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:a})]})});y.displayName=s.ck.displayName;let N=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});N.displayName=s.Z0.displayName},7330:function(e,t,r){"use strict";let n=(0,r(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");t.Z=n},8243:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),a=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[7895,4799,577,4997,2971,4938,1744],function(){return e(e.s=3288)}),_N_E=e.O()}]);