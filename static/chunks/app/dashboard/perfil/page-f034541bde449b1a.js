(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6669],{4119:function(e,s,r){Promise.resolve().then(r.bind(r,9660))},9660:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return a}});var t=r(7437),n=r(2265),i=r(7330);function a(){let[e,s]=(0,n.useState)(null),[r,a]=(0,n.useState)(null);(0,n.useEffect)(()=>{i.Z.auth.getUser().then(e=>s(e.data.user)).catch(e=>console.log(e))},[]),(0,n.useEffect)(()=>{e&&(async()=>{let{data:s,error:r}=await i.Z.from("usuarios").select("*").eq("correo_electronico",e.email).single();if(r){console.error(r);return}a(s)})()},[e]);let c=e=>e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),l=["password","fecha_creado","fecha_subido","user_id","usuario_id","id_entidad_empresa"];return(0,t.jsxs)("div",{className:"p-4 mx-auto w-full max-w-2xl mt-4",children:[(0,t.jsx)("div",{className:"px-4 sm:px-0",children:(0,t.jsx)("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:"Informaci\xf3n del Perfil"})}),(0,t.jsx)("div",{className:"mt-6 border-t border-gray-100",children:(0,t.jsx)("dl",{className:"divide-y divide-gray-100",children:r&&Object.entries(r).map(e=>{let[s,r]=e;return r&&!l.includes(s)?(0,t.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,t.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:c(s)}),(0,t.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:r})]},s):null})})})]})}},7330:function(e,s,r){"use strict";let t=(0,r(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");s.Z=t},622:function(e,s,r){"use strict";var t=r(2265),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,r){var t,i={},o=null,d=null;for(t in void 0!==r&&(o=""+r),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,t)&&!l.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:n,type:e,key:o,ref:d,props:i,_owner:c.current}}s.Fragment=i,s.jsx=o,s.jsxs=o},7437:function(e,s,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[577,2971,4938,1744],function(){return e(e.s=4119)}),_N_E=e.O()}]);