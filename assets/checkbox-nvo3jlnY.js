import{j as c}from"./jsx-runtime-CKrituN3.js";import{t as ne}from"./index-D9LddFt1.js";import{r as o}from"./index-CBqU2yxZ.js";import{u as se}from"./index-C44IEXoh.js";import{a as Y,u as ae,g as M}from"./form-control-BmY_7nGZ.js";import{g as B,c as oe,v as ie,a as z,o as E,p as H,Y as ce,u as w,b as N,e as le,Q as A,w as W,K as P,h as x}from"./factory-jQ8alorc.js";import{A as re}from"./index-_tcQm2Fk.js";import{m as K}from"./motion-JgkBPv6g.js";import{u as ue}from"./use-component-style-DOSk5UmJ.js";import{o as de}from"./theme-provider-C1GLE5Ir.js";import{F as he}from"./flex-Dp8paah-.js";const Q=n=>n&&H(n)&&H(n.target),fe=({isNative:n,...u})=>{u.onChange=B(u.onChange);const[e,l]=se({value:u.value,defaultValue:u.defaultValue||[],onChange:u.onChange}),d=o.useCallback(s=>{const m=Q(s)?s.target.checked:!e.includes(s),i=Q(s)?s.target.value:s,a=m?[...e,i]:e.filter(y=>String(y)!==String(i));l(a)},[e,l]),g=o.useCallback((s,m=null)=>({...s,ref:m,[n?"checked":"isChecked"]:e.some(i=>String(s==null?void 0:s.value)===String(i)),onChange:d}),[d,n,e]);return{value:e,setValue:l,onChange:d,getCheckboxProps:g}},[me,ke]=oe({strict:!1,name:"CheckboxGroupContext"}),Ce=o.forwardRef(({className:n,size:u,variant:e,colorScheme:l,children:d,items:g=[],direction:s="column",gap:m,...i},a)=>{const{value:y,onChange:I}=fe(i),{isRequired:j,isReadOnly:p,isDisabled:D,isInvalid:R}=Y(i),h=ie(d);let b=[];return!h.length&&g.length&&(b=g.map(({label:k,value:r,...S},F)=>c.jsx(J,{value:r,...S,children:k},F))),c.jsx(me,{value:{size:u,variant:e,colorScheme:l,isRequired:j,isReadOnly:p,isDisabled:D,isInvalid:R,value:y,onChange:I},children:c.jsx(he,{ref:a,className:z("ui-checkbox-group",n),role:"group",direction:s,gap:m??(s==="row"?"1rem":void 0),...E(i,["value","defaultValue","onChange","isInvalid","isDisabled","isRequired","isReadOnly"]),children:d??b})})});Ce.displayName="CheckboxGroup";const xe=n=>{const{name:u,value:e,defaultIsChecked:l,tabIndex:d,required:g,disabled:s,readOnly:m,isIndeterminate:i,...a}=ae(n),y=n.id||o.useId(),[I,j]=o.useState(!1),[p,D]=o.useState(!1),[R,h]=o.useState(!1),[b,k]=o.useState(!1),r=o.useRef(null),[S,F]=o.useState(!0),[L,_]=o.useState(!!l),q=n.isChecked!==void 0,C=q?n.isChecked:L,G=B(t=>{var v;if(m||s){t.preventDefault();return}q||_(!C||i?!0:t.target.checked),(v=a.onChange)==null||v.call(a,t)},[m,s,q,C,i]),U=B(a.onBlur),V=B(a.onFocus),O=o.useCallback(({key:t})=>{t===" "&&k(!0)},[k]),T=o.useCallback(({key:t})=>{t===" "&&k(!1)},[k]);o.useEffect(()=>ne(j),[]),N(()=>{r.current&&(r.current.indeterminate=!!i)},[i]),le(()=>{s&&D(!1)},[s,D]),N(()=>{var t;(t=r.current)!=null&&t.form&&(r.current.form.onreset=()=>_(!!l))},[]),N(()=>{r.current&&r.current.checked!==C&&_(r.current.checked)},[r.current]);const Z=o.useCallback((t={},v=null)=>({...A(a,M({omit:["aria-readonly"]})),...t,ref:W(v,f=>{f&&F(f.tagName==="LABEL")}),"data-checked":P(C),onClick:x(t.onClick,()=>{var f;S||((f=r.current)==null||f.click(),requestAnimationFrame(()=>{var X;return(X=r.current)==null?void 0:X.focus()}))})}),[C,S,a]),$=o.useCallback((t={},v=null)=>({...A(a,M({omit:["aria-readonly"]})),...t,ref:v,"data-active":P(b),"data-hover":P(R),"data-checked":P(C),"data-focus":P(p),"data-focus-visible":P(p&&I),"data-indeterminate":P(i),"aria-hidden":!0,onMouseDown:x(t.onMouseDown,f=>{p&&f.preventDefault(),k(!0)}),onMouseUp:x(t.onMouseUp,()=>k(!1)),onMouseEnter:x(t.onMouseEnter,()=>h(!0)),onMouseLeave:x(t.onMouseLeave,()=>h(!1))}),[b,C,p,R,I,i,a]),ee=o.useCallback((t={},v=null)=>({...A(a,M({omit:["aria-readonly"]})),...t,ref:W(r,v),id:y,type:"checkbox",name:u,value:e,tabIndex:d,required:g,disabled:s,readOnly:m,checked:C,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:x(t.onChange,G),onBlur:x(t.onBlur,U,()=>D(!1)),onFocus:x(t.onFocus,V,()=>D(!0)),onKeyDown:x(t.onKeyDown,O),onKeyUp:x(t.onKeyUp,T)}),[a,y,u,e,d,g,s,m,C,G,U,V,O,T]),te=o.useCallback((t={},v=null)=>({...A(a,M({omit:["aria-readonly"]})),...t,ref:v,"data-checked":P(C),onMouseDown:x(t.onMouseDown,f=>{f.preventDefault(),f.stopPropagation()}),onTouchStart:x(t.onTouchStart,f=>{f.preventDefault(),f.stopPropagation()})}),[C,a]);return{isFocusVisible:I,isFocused:p,isHovered:R,isActive:b,isChecked:C,isIndeterminate:i,getContainerProps:Z,getIconProps:$,getInputProps:ee,getLabelProps:te}},J=o.forwardRef((n,u)=>{const e=ke(),l=Y(n),[d,g]=ue("Checkbox",{...e?E(e,["value"]):{},...n}),{className:s,gap:m="0.5rem",isRequired:i=(e==null?void 0:e.isRequired)??l.isRequired,isReadOnly:a=(e==null?void 0:e.isReadOnly)??l.isReadOnly,isDisabled:y=(e==null?void 0:e.isDisabled)??l.isDisabled,isInvalid:I=(e==null?void 0:e.isInvalid)??l.isInvalid,iconProps:j,inputProps:p,labelProps:D,children:R,...h}=de(g),{isChecked:b,isIndeterminate:k,getContainerProps:r,getInputProps:S,getIconProps:F,getLabelProps:L}=xe({...h,isRequired:i,isReadOnly:a,isDisabled:y,isInvalid:I,isChecked:e!=null&&e.value&&h.value?e.value.includes(h.value):h.isChecked,onChange:e!=null&&e.onChange&&h.value?ce(e.onChange,h.onChange):h.onChange}),_=o.cloneElement((j==null?void 0:j.children)??c.jsx(be,{}),{__css:{opacity:b||k?1:0,transform:b||k?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:k,isChecked:b,isRequired:i,isReadOnly:a,isDisabled:y,isInvalid:I});return c.jsxs(w.label,{className:z("ui-checkbox",s),...r(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:m,...d.container},...E(h,["id","name","value","defaultValue","defaultIsChecked","isChecked","isIndeterminate","onChange","onBlur","onFocus","tabIndex"]),children:[c.jsx(w.input,{className:"ui-checkbox__input",...S(p,u)}),c.jsx(w.span,{className:"ui-checkbox__icon",__css:{pointerEvents:a?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...d.icon},...F(E(j??{children:void 0},["children"])),children:_}),c.jsx(w.span,{className:"ui-checkbox__label",__css:{...d.label},...L(D),children:R})]})});J.displayName="Checkbox";const be=({isIndeterminate:n,isChecked:u,...e})=>{const l=E(e,["isRequired","isReadOnly","isDisabled","isInvalid"]);return c.jsx(re,{initial:!1,children:n||u?c.jsx(w.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:c.jsx(w.div,{as:K.div,variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:n?c.jsx(ge,{...l}):c.jsx(ve,{...l})})}):null})},ve=n=>c.jsx(w.svg,{as:K.svg,width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...n,children:c.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),ge=n=>c.jsx(w.svg,{as:K.svg,width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...n,children:c.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});export{J as C,Ce as a,xe as b,fe as u};