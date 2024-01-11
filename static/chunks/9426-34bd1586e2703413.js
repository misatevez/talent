(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9426,7145,9539,3494,1420,9405,9289,3537,1073,8407,1831,7359],{4033:function(e,t,n){e.exports=n(5313)},3428:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},6694:function(e,t,n){"use strict";n.d(t,{Ee:function(){return E},NY:function(){return b},fC:function(){return g}});var r=n(3428),l=n(2265),u=n(6989),o=n(6459),i=n(1030),a=n(9381);let c="Avatar",[s,d]=(0,u.b)(c),[f,m]=s(c),v=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:n,...u}=e,[o,i]=(0,l.useState)("idle");return(0,l.createElement)(f,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},(0,l.createElement)(a.WV.span,(0,r.Z)({},u,{ref:t})))}),p=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:n,src:u,onLoadingStatusChange:c=()=>{},...s}=e,d=m("AvatarImage",n),f=function(e){let[t,n]=(0,l.useState)("idle");return(0,i.b)(()=>{if(!e){n("error");return}let t=!0,r=new window.Image,l=e=>()=>{t&&n(e)};return n("loading"),r.onload=l("loaded"),r.onerror=l("error"),r.src=e,()=>{t=!1}},[e]),t}(u),v=(0,o.W)(e=>{c(e),d.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==f&&v(f)},[f,v]),"loaded"===f?(0,l.createElement)(a.WV.img,(0,r.Z)({},s,{ref:t,src:u})):null}),h=(0,l.forwardRef)((e,t)=>{let{__scopeAvatar:n,delayMs:u,...o}=e,i=m("AvatarFallback",n),[c,s]=(0,l.useState)(void 0===u);return(0,l.useEffect)(()=>{if(void 0!==u){let e=window.setTimeout(()=>s(!0),u);return()=>window.clearTimeout(e)}},[u]),c&&"loaded"!==i.imageLoadingStatus?(0,l.createElement)(a.WV.span,(0,r.Z)({},o,{ref:t})):null}),g=v,E=p,b=h},2210:function(e,t,n){"use strict";n.d(t,{F:function(){return l},e:function(){return u}});var r=n(2265);function l(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function u(...e){return(0,r.useCallback)(l(...e),e)}},6989:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(2265);function l(e,t=[]){let n=[],l=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let l=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:l}}),[n,l])}};return l.scopeName=e,[function(t,l){let u=(0,r.createContext)(l),o=n.length;function i(t){let{scope:n,children:l,...i}=t,a=(null==n?void 0:n[e][o])||u,c=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(a.Provider,{value:c},l)}return n=[...n,l],i.displayName=t+"Provider",[i,function(n,i){let a=(null==i?void 0:i[e][o])||u,c=(0,r.useContext)(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let l=n.reduce((t,{useScope:n,scopeName:r})=>{let l=n(e)[`__scope${r}`];return{...t,...l}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}(l,...t)]}},9381:function(e,t,n){"use strict";n.d(t,{WV:function(){return i},jH:function(){return a}});var r=n(3428),l=n(2265),u=n(4887),o=n(7256);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,l.forwardRef)((e,n)=>{let{asChild:u,...i}=e,a=u?o.g7:t;return(0,l.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,l.createElement)(a,(0,r.Z)({},i,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&(0,u.flushSync)(()=>e.dispatchEvent(t))}},7256:function(e,t,n){"use strict";n.d(t,{g7:function(){return o}});var r=n(3428),l=n(2265),u=n(2210);let o=(0,l.forwardRef)((e,t)=>{let{children:n,...u}=e,o=l.Children.toArray(n),a=o.find(c);if(a){let e=a.props.children,n=o.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(i,(0,r.Z)({},u,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,n):null)}return(0,l.createElement)(i,(0,r.Z)({},u,{ref:t}),n)});o.displayName="Slot";let i=(0,l.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let l=e[r],u=t[r];/^on[A-Z]/.test(r)?l&&u?n[r]=(...e)=>{u(...e),l(...e)}:l&&(n[r]=l):"style"===r?n[r]={...l,...u}:"className"===r&&(n[r]=[l,u].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,u.F)(t,n.ref):n.ref}):l.Children.count(n)>1?l.Children.only(null):null});i.displayName="SlotClone";let a=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function c(e){return(0,l.isValidElement)(e)&&e.type===a}},6459:function(e,t,n){"use strict";n.d(t,{W:function(){return l}});var r=n(2265);function l(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},1030:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(2265);let l=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},6061:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(7042);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,u=r.W,o=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return u(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:i}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let u=l(t)||l(r);return o[e][u]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return u(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...c}[t]):({...i,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);