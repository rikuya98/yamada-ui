import{u as y}from"./theme-provider-CvYGGDsf.js";import{n as g,o as e,p as $,q as o}from"./factory-C06z1xU-.js";const V=(s,l)=>{const{theme:i}=y(),{colorMode:r}=g();return c(s,l)(i,r)},c=(s,l)=>(i,r)=>{s==="layerStyles"&&(s="styles.layerStyles"),s==="textStyles"&&(s="styles.textStyles"),s==="transitionProperty"&&(s="transitions.property"),s==="transitionDuration"&&(s="transitions.duration"),s==="transitionEasing"&&(s="transitions.easing");let t=e(i,`${s}.${l}`);if($(t))if(t=e(i,`semantics.${s}.${l}`),o(t)?t=[e(i,`${s}.${t[0]}`)??t[0],e(i,`${s}.${t[1]}`)??t[1]]:t=e(i,`${s}.${t}`)??t,o(t)){const[n,u]=t;if(t=r==="light"?n:u,o(t)){const[a,f]=t;return r==="light"?a:f}else return t}else return t;else if(o(t)){const[n,u]=t;return r==="light"?n:u}else return t};export{V as u};