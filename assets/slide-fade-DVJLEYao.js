import{j as l}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-cFajppJS.js";import{A as R}from"./index-_tcQm2Fk.js";import{M as S}from"./motion-BMD8dy6a.js";import{f as _}from"./forward-ref-DuAegr0M.js";import{a as h}from"./factory-jQ8alorc.js";import{t,a as v}from"./utils-E22qp_mS.js";const N={initial:({offsetX:x,offsetY:e,transition:f,transitionEnd:m,delay:c,duration:s,initial:o})=>({opacity:0,x,y:e,transition:t(f==null?void 0:f.exit)(c,s),transitionEnd:m==null?void 0:m.exit,...o}),enter:({transition:x,transitionEnd:e,delay:f,duration:m,enter:c}={})=>({opacity:1,x:0,y:0,transition:v(x==null?void 0:x.enter)(f,m),transitionEnd:e==null?void 0:e.enter,...c}),exit:({offsetX:x,offsetY:e,reverse:f,transition:m,transitionEnd:c,delay:s,duration:o,exit:r}={})=>({opacity:0,transition:t(m==null?void 0:m.exit)(s,o),...f?{x,y:e,transitionEnd:c==null?void 0:c.exit}:{transitionEnd:{x,y:e,...c==null?void 0:c.exit}},...r})},V={initial:"exit",animate:"enter",exit:"exit",variants:N},B=_(({unmountOnExit:x,isOpen:e,offsetX:f=0,offsetY:m=8,reverse:c=!0,transition:s,transitionEnd:o,delay:r,duration:y,className:u,...j},w)=>{const A=e||x?"enter":"exit",F=p(f),M=p(m),a={offsetX:F,offsetY:M,reverse:c,transition:s,transitionEnd:o,delay:r,duration:y};e=x?e&&x:!0;const P={w:"100%"};return l.jsx(R,{custom:a,children:e?l.jsx(S,{ref:w,className:h("ui-slide-fade",u),custom:a,...V,animate:A,__css:P,...j}):null})});export{B as S,V as s};