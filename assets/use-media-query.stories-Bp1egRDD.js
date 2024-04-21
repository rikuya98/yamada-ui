import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as f}from"./index-CBqU2yxZ.js";import{u as D}from"./environment-provider-d2aKwQWw.js";import{U as g,q as E}from"./factory-HTeyK_fA.js";import{T as h}from"./text-sgxCCRlS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CaxTiwrP.js";import"./theme-provider-DvYDGHdP.js";const w=(t,{ssr:c=!0,fallback:m}={})=>{const{getWindow:p}=D(),d=E(t)?t:[t];let l=E(m)?m:[m];l=l.filter(r=>r!=null);const[Q,x]=f.useState(()=>d.map((r,a)=>({media:r,matches:c?!!l[a]:p().matchMedia(r).matches})));return f.useEffect(()=>{const r=p();x(d.map(e=>({media:e,matches:r.matchMedia(e).matches})));const a=d.map(e=>r.matchMedia(e)),o=e=>{x(y=>y.slice().map(u=>u.media===e.media?{...u,matches:e.matches}:u))};return a.forEach(e=>{g(e.addListener)?e.addListener(o):e.addEventListener("change",o)}),()=>{a.forEach(e=>{g(e.removeListener)?e.removeListener(o):e.removeEventListener("change",o)})}},[p]),Q.map(r=>r.matches)},W={title:"Hooks / useMediaQuery"},n=()=>{const[t]=w("(min-width: 1280px)");return s.jsx(h,{children:t?"larger than 1280px":"smaller than 1280px"})},i=()=>{const[t,c]=w(["(min-width: 1280px)","(prefers-color-scheme: dark)"]);return s.jsxs(s.Fragment,{children:[s.jsx(h,{children:t?"larger than 1280px":"smaller than 1280px"}),s.jsx(h,{children:c?"color mode is dark":"color mode is light"})]})};var L,M,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [flg] = useMediaQuery("(min-width: 1280px)");
  return <Text>{flg ? "larger than 1280px" : "smaller than 1280px"}</Text>;
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,j,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isLarge, isDark] = useMediaQuery(["(min-width: 1280px)", "(prefers-color-scheme: dark)"]);
  return <>
      <Text>{isLarge ? "larger than 1280px" : "smaller than 1280px"}</Text>
      <Text>{isDark ? "color mode is dark" : "color mode is light"}</Text>
    </>;
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const z=["basic","useMulti"];export{z as __namedExportsOrder,n as basic,W as default,i as useMulti};