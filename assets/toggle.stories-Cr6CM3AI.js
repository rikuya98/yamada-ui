import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as o,r as a,s as P,t as N}from"./fontawesome-icon-qLXu_gHn.js";import{r as u}from"./index-CBqU2yxZ.js";import{u as xe}from"./index-DEC9cry9.js";import{k as Ge,p as G,q as he,e as ze,u as je,c as ve,x as W,h as Me}from"./factory-C06z1xU-.js";import{f as pe}from"./forward-ref-DuAegr0M.js";import{u as Oe,R as We}from"./use-ripple-CjJeY8ag.js";import{a as Fe}from"./use-component-style-CZ1o4dYw.js";import{o as Pe}from"./theme-provider-CvYGGDsf.js";import{W as F}from"./flex-CHxlxuCK.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-CyBNnypl.js";import"./index-wE-5yW0t.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CogyOzDV.js";const[_e,Ae]=Ge({strict:!1,name:"ToggleGroupContext"}),_=pe(({value:n,defaultValue:t,onChange:d,className:s,size:S,variant:i,direction:I,isDisabled:x,isReadOnly:g,...z},M)=>{const[b,h]=xe({value:n,defaultValue:t,onChange:d}),j=u.useRef(!G(b)),m=u.useCallback(c=>{G(c)||h(r=>he(r)?r.includes(c)?r.filter(T=>T!==c):[...r,c]:c===r?void 0:c)},[h]),O={display:"inline-flex",gap:"0.5rem",flexDirection:I},f=u.useMemo(()=>({value:b,size:S,variant:i,isDisabled:x,isReadOnly:g,isControlled:j.current,onChange:m}),[b,S,i,x,g,m]);return ze(()=>{G(b)||(j.current=!0)},[n]),e.jsx(_e,{value:f,children:e.jsx(je.div,{ref:M,role:"group",className:ve("ui-toggle-group",s),__css:O,...z})})});_.displayName="ToggleGroup";const l=pe((n,t)=>{const{value:d,onChange:s,isControlled:S,...i}=Ae()??{},[I,x]=Fe("Toggle",{...i,...n}),{value:g,className:z,icon:M,isSelected:b,defaultIsSelected:h=!1,onChange:j,isRounded:m,isActive:O,isDisabled:f=i==null?void 0:i.isDisabled,isReadOnly:c=i==null?void 0:i.isReadOnly,disableRipple:r,children:A,...T}=Pe(x),[Be,ye]=xe({value:b,defaultValue:h,onChange:j});S&&G(g)&&console.warn("Toggle: value is required. Please set the value.");const Ce=he(d)?d.includes(g??""):g===d,E=S?Ce:Be,{onPointerDown:we,...ke}=Oe({...T,isDisabled:r||f}),Re=()=>{ye(De=>!De),s==null||s(g)},Ve=u.useMemo(()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"fallback(2, 0.5rem)",appearance:"none",userSelect:"none",position:"relative",verticalAlign:"middle",overflow:"hidden",outline:"none",pointerEvents:c?"none":"auto",...I,...m?{borderRadius:"fallback(full, 9999px)"}:{}}),[m,I,c]);return e.jsxs(je.button,{ref:t,type:"button",tabIndex:c?-1:0,disabled:f,"data-active":W(O),"data-selected":W(E),"data-readonly":W(c),"aria-pressed":E,className:ve("ui-toggle",z),__css:Ve,...T,onClick:Me(T.onClick,Re),onPointerDown:we,children:[A||M,e.jsx(We,{isDisabled:r||f,...ke})]})});l.displayName="Toggle";const nl={title:"Components / Forms / Toggle",component:l},v=()=>e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold"}),p=()=>e.jsxs(l,{px:"4",children:[e.jsx(o,{icon:P}),"Italic"]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",size:"xs"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",size:"sm"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"warning",size:"md"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"danger",size:"lg"})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline"}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",variant:"unstyled"})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs(F,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})})]}),e.jsxs(F,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})})]}),e.jsxs(F,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{icon:a})})]})]}),w=()=>e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",defaultIsSelected:!0,isRounded:!0}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isDisabled:!0}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isDisabled:!0}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isDisabled:!0})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isReadOnly:!0}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isReadOnly:!0}),e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isReadOnly:!0})]}),V=()=>{const[n,t]=u.useState(!1);return e.jsx(l,{icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold",isSelected:n,onChange:t})},D=()=>{const[n,t]=u.useState(void 0),[d,s]=u.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(_,{value:n,onChange:t,children:[e.jsx(l,{value:"bold",icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold"}),e.jsx(l,{value:"italic",icon:e.jsx(o,{icon:P}),"aria-label":"Toggle italic"}),e.jsx(l,{value:"underline",icon:e.jsx(o,{icon:N}),"aria-label":"Toggle underline"})]}),e.jsxs(_,{value:d,onChange:s,children:[e.jsx(l,{value:"bold",icon:e.jsx(o,{icon:a}),"aria-label":"Toggle bold"}),e.jsx(l,{value:"italic",icon:e.jsx(o,{icon:P}),"aria-label":"Toggle italic"}),e.jsx(l,{value:"underline",icon:e.jsx(o,{icon:N}),"aria-label":"Toggle underline"})]})]})};var U,q,H;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" />;
}`,...(H=(q=v.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,L;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <Icon icon={faItalic} />
      Italic
    </Toggle>;
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" size="xs" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" size="sm" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="warning" size="md" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="danger" size="lg" />
    </>;
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="unstyled" />
    </>;
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,oe,ae;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle defaultIsSelected colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="solid" colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="outline" colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>
    </>;
}`,...(ae=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ce,ie,ne;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" defaultIsSelected isRounded />;
}`,...(ne=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var re,te,de;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isDisabled />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isDisabled />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" defaultIsSelected isDisabled />
    </>;
}`,...(de=(te=k.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var se,ge,ue;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isReadOnly />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isReadOnly />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" defaultIsSelected isReadOnly />
    </>;
}`,...(ue=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,Se,me;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" isSelected={isSelected} onChange={setIsSelected} />;
}`,...(me=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:me.source}}};var fe,Te,Ie;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle value="bold" icon={<Icon icon={faBold} />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Icon icon={faItalic} />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Icon icon={faUnderline} />} aria-label="Toggle underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle value="bold" icon={<Icon icon={faBold} />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Icon icon={faItalic} />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Icon icon={faUnderline} />} aria-label="Toggle underline" />
      </ToggleGroup>
    </>;
}`,...(Ie=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};const rl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{rl as __namedExportsOrder,v as basic,V as customControl,nl as default,k as isDisabled,R as isReadonly,w as isRounded,D as useGroup,C as withColorScheme,B as withSize,p as withText,y as withVariant};