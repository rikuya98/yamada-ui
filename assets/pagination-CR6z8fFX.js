import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as y}from"./index-cFajppJS.js";import{r as g}from"./index-CBqU2yxZ.js";import{b as P}from"./icon-D5spqBhV.js";import{u as F}from"./index-C44IEXoh.js";import{c as V,u as N,a as z,K as D,h as I,o as W}from"./factory-jQ8alorc.js";import{u as J,R as K}from"./use-ripple-VGToOyRZ.js";import{f as O}from"./forward-ref-DuAegr0M.js";import{u as $}from"./use-component-style-DOSk5UmJ.js";import{o as q}from"./theme-provider-C1GLE5Ir.js";const H=t=>s.jsx(P,{viewBox:"0 0 16 16",...t,children:s.jsx("path",{fill:"currentColor",d:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})}),Q=t=>s.jsx(P,{viewBox:"0 0 16 16",...t,children:s.jsx("path",{fill:"currentColor",d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"})}),U=t=>s.jsx(P,{viewBox:"0 0 16 16",...t,children:s.jsx("path",{fill:"currentColor",d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"})}),X=t=>s.jsx(P,{viewBox:"0 0 16 16",...t,children:s.jsx("path",{fill:"currentColor",d:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"})}),Y=t=>s.jsx(P,{viewBox:"0 0 16 16",...t,children:s.jsx("path",{fill:"currentColor",d:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"})}),[n1,s1]=V({strict:!1,name:"PaginationContext"}),x=(t,p)=>Array.from({length:p-t+1},(n,l)=>l+t),e1=({page:t,defaultPage:p=1,total:n,siblings:l=1,boundaries:f=1,isDisabled:a=!1,...c})=>{const r=y(l),o=y(f),[d,e]=F({value:t,defaultValue:p,onChange:c.onChange}),j=g.useCallback(()=>e(1),[e]),h=g.useCallback(()=>e(n),[e,n]),u=g.useCallback(()=>e(i=>i===1?i:i-1),[e]),b=g.useCallback(()=>e(i=>i===n?i:i+1),[e,n]),v=g.useCallback(i=>e(i),[e]),w=g.useMemo(()=>{if(r*2+3+o*2>=n)return x(1,n);const k=Math.max(d-r,o),C=Math.min(d+r,n-o),_=k>o+2,m=C<n-(o+1);if(!_&&m){const M=r*2+o+2;return[...x(1,M),"dots",...x(n-(o-1),n)]}if(_&&!m){const M=o+1+2*r;return[...x(1,o),"dots",...x(n-M,n)]}return[...x(1,o),"dots",...x(k,C),"dots",...x(n-o+1,n)]},[o,r,d,n]);return{currentPage:d,total:n,isDisabled:a,onFirst:j,onLast:h,onPrev:u,onNext:b,onChange:v,range:w}},t1={dots:s.jsx(H,{}),next:s.jsx(Y,{}),prev:s.jsx(X,{}),first:s.jsx(Q,{}),last:s.jsx(U,{})},o1=({className:t,isActive:p,page:n,isDisabled:l,disableRipple:f,children:a,...c})=>{const r=s1(),{onPointerDown:o,...d}=J({...c,isDisabled:f||l});a??(a=t1[n]??n);const e={position:"relative",overflow:"hidden",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",...r.item,...r[n]};return s.jsxs(N.button,{className:z("ui-pagination__item",t),type:"button",tabIndex:n!=="dots"?0:-1,disabled:l,"data-selected":D(p),"data-disabled":D(l),__css:e,...c,onPointerDown:o,children:[a,s.jsx(K,{isDisabled:f||l,...d})]})},p1=O((t,p)=>{const[n,l]=$("Pagination",t),{className:f,component:a=o1,itemProps:c,withControls:r=!0,withEdges:o=!1,innerProps:d,controlProps:e,controlPrevProps:j,controlNextProps:h,edgeProps:u,edgeFirstProps:b,edgeLastProps:v,...w}=q(l),i=y(r),k=y(o),{currentPage:C,total:_,isDisabled:m,onFirst:M,onLast:G,onPrev:R,onNext:A,onChange:S,range:B}=e1(w),E=g.useMemo(()=>B.map((L,T)=>s.jsx(a,{page:L,isActive:C===L,isDisabled:m,"aria-label":L==="dots"?"Jump to omitted pages":`Go to page ${L}`,...c,onClick:I(c==null?void 0:c.onClick,L!=="dots"?()=>S(L):void 0)},T)),[a,C,m,S,B,c]),Z={display:"flex",alignItems:"center",...n.container};return s.jsx(n1,{value:n,children:s.jsxs(N.div,{ref:p,className:z("ui-pagination",f),role:"navigation",__css:Z,...W(w,["page","defaultPage","total","siblings","boundaries","isDisabled","onChange"]),"data-disabled":D(m),children:[k?s.jsx(a,{page:"first","aria-label":"Go to first page",className:"ui-pagination__item--first",isDisabled:m||C===1,...u,...b,onClick:I(u==null?void 0:u.onClick,b==null?void 0:b.onClick,M)}):null,i?s.jsx(a,{page:"prev","aria-label":"Go to previous page",className:"ui-pagination__item--prev",isDisabled:m||C===1,...e,...j,onClick:I(e==null?void 0:e.onClick,j==null?void 0:j.onClick,R)}):null,s.jsx(N.div,{className:"ui-pagination-inner",__css:{display:"flex",justifyContent:"center",alignItems:"center",...n.inner},...d,children:E}),i?s.jsx(a,{page:"next","aria-label":"Go to next page",className:"ui-pagination__item--next",isDisabled:m||C===_,...e,...h,onClick:I(e==null?void 0:e.onClick,h==null?void 0:h.onClick,A)}):null,k?s.jsx(a,{page:"last","aria-label":"Go to last page",className:"ui-pagination__item--last",isDisabled:m||C===_,...u,...v,onClick:I(u==null?void 0:u.onClick,v==null?void 0:v.onClick,G)}):null]})})});export{p1 as P};