(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{728:function(e,t,r){Promise.resolve().then(r.t.bind(r,8822,23)),Promise.resolve().then(r.t.bind(r,3385,23)),Promise.resolve().then(r.bind(r,4512))},4512:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(2265),o=r(7330),i=r(4033);t.default=e=>{let{children:t}=e,r=(0,i.useRouter)(),[u,c]=(0,s.useState)(null),[l,f]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{(async()=>{let{data:{session:e},error:t}=await o.Z.auth.getSession();t?(console.error("Error checking user:",t),f(!1)):e&&e.user?(console.log("User found: ",e.user),c(e.user)):r.push("/login"),f(!1)})()},[]),l)?null:u?(0,n.jsx)(n.Fragment,{children:t}):null}},7330:function(e,t,r){"use strict";let n=(0,r(577).eI)("https://xzfcosekgkctmoepyywr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmNvc2VrZ2tjdG1vZXB5eXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NTgxNzQsImV4cCI6MjAxOTEzNDE3NH0.AaCFGzi3mM2lMo090_JiqLJjmL2nS2-v9XqVmegVTqA");t.Z=n},3385:function(){},8822:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,r){"use strict";var n=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,f=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:f,props:o,_owner:u.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[577,2971,4938,1744],function(){return e(e.s=728)}),_N_E=e.O()}]);