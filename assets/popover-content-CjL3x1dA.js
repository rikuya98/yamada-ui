import{r as n}from"./index-CBqU2yxZ.js";import{j as b}from"./jsx-runtime-CKrituN3.js";import{b as ce}from"./index-BBR8_Uz5.js";import{u as ue,a as ae}from"./index-BRIizmwy.js";import{u as le,a as fe,b as me}from"./index-AbGqtBFc.js";import{u as pe,p as de}from"./index-NNY8n33j.js";import{k as ve,a as Y,h as i,C as ge,a3 as N,S as k,c as $,s as Pe,w as he,B as Ce,u as W,a5 as ye}from"./factory-HTeyK_fA.js";import{a as be}from"./use-component-style-CaxTiwrP.js";import{o as Be}from"./theme-provider-DvYDGHdP.js";import{m as Re}from"./motion-JgkBPv6g.js";import{s as I}from"./slide-fade-Dwa26ik0.js";import{s as xe}from"./scale-fade-DPj_1rnM.js";import{C as Oe}from"./close-button-CsU1qDnP.js";import{f as ee}from"./forward-ref-DuAegr0M.js";const Ye=[...de,"isOpen","defaultIsOpen","onOpen","onClose","initialFocusRef","restoreFocus","autoFocus","closeOnBlur","closeOnEsc","closeOnButton","trigger","openDelay","closeDelay","isLazy","lazyBehavior","animation","duration"],[Te,H]=ve({strict:!1,name:"PopoverContext"}),Ne=m=>{const[c,t]=be("Popover",m),{children:v,initialFocusRef:g,restoreFocus:P=!0,autoFocus:R=!0,closeOnBlur:a=!0,closeOnEsc:D=!0,closeOnButton:j=!0,trigger:p="click",openDelay:x=200,closeDelay:B=200,isLazy:S,lazyBehavior:V="unmount",animation:K="scale",duration:M,relatedRef:h,...d}=Be(t),{isOpen:o,onOpen:O,onClose:s,onToggle:A}=ue(t),T=n.useRef(null),C=n.useRef(null),l=n.useRef(null),{present:_,onAnimationComplete:L}=ce({isOpen:o,ref:l}),f=n.useRef(void 0),X=n.useRef(void 0),F=n.useRef(!1),U=n.useRef(!1);o&&(U.current=!0);const{referenceRef:z,getPopperProps:oe,forceUpdate:q,transformOrigin:G}=pe({...d,enabled:o});n.useEffect(()=>()=>{f.current&&clearTimeout(f.current),X.current&&clearTimeout(X.current)},[]),le({enabled:o,ref:C}),fe(l,{focusRef:C,visible:o,shouldFocus:P&&p==="click"}),me(l,{focusRef:g,visible:o,shouldFocus:R&&p==="click"});const J=ae({wasSelected:U.current,enabled:S,mode:V,isSelected:_}),te=n.useCallback((e={},w=null)=>{const r={...e,style:{...e.style,transformOrigin:G},ref:Y(l,w),children:J?e.children:null,tabIndex:-1,onKeyDown:i(e.onKeyDown,u=>{D&&u.key==="Escape"&&s()}),onBlur:i(e.onBlur,u=>{const y=N(u),E=k(l.current,y),re=k(C.current,y),ie=h!=null&&h.current?k(h.current,y):!1;o&&a&&(!E&&!re&&!ie)&&s()})};return p==="hover"&&(r.onMouseEnter=i(e.onMouseEnter,()=>{F.current=!0}),r.onMouseLeave=i(e.onMouseLeave,u=>{u.nativeEvent.relatedTarget!==null&&(F.current=!1,a&&setTimeout(s,B))})),r},[B,a,D,o,s,J,G,p,h]),Q=n.useCallback(e=>{T.current==null&&z(e)},[z]),ne=n.useCallback((e={},w=null)=>{const r={...e,ref:Y(C,w,Q)};return p==="click"&&(r.onClick=i(e.onClick,A),r.onBlur=i(e.onBlur,u=>{const y=N(u),E=!k(l.current,y);o&&a&&E&&s()})),p==="hover"&&(r.onFocus=i(e.onFocus,()=>{f.current===void 0&&O()}),r.onBlur=i(e.onBlur,u=>{const y=N(u),E=!k(l.current,y);o&&a&&E&&s()}),r.onKeyDown=i(e.onKeyDown,u=>{u.key==="Escape"&&s()}),r.onMouseEnter=i(e.onMouseEnter,()=>{F.current=!0,f.current=window.setTimeout(O,x)}),r.onMouseLeave=i(e.onMouseLeave,()=>{F.current=!1,f.current&&(clearTimeout(f.current),f.current=void 0),X.current=window.setTimeout(()=>{F.current||s()},B)})),r},[B,a,o,Q,s,O,A,x,p]),se=n.useCallback((e={},w=null)=>({...e,ref:Y(w,T,z)}),[T,z]);return b.jsx(Te,{value:{isOpen:o,onClose:s,closeOnButton:j,onAnimationComplete:L,forceUpdate:q,getTriggerProps:ne,getAnchorProps:se,getPopperProps:oe,getPopoverProps:te,animation:K,duration:M,styles:c},children:ge(v,{isOpen:o,onClose:s,forceUpdate:q})})},He=({children:m})=>{const c=n.Children.only(m),{getTriggerProps:t}=H();return n.cloneElement(c,t(c.props,c.ref))},Z=ee(({onClick:m,...c},t)=>{const{styles:v,onClose:g}=H(),P={position:"absolute",...v.closeButton};return b.jsx(Oe,{ref:t,className:$("ui-popover__close-button"),__css:P,onClick:i(m,R=>{R.stopPropagation(),g==null||g()}),size:"sm",...c})}),Fe=(m="scale",c)=>{const t={reverse:!0,duration:c,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(m){case"scale":return{...xe,custom:{...t,scale:.95}};case"top":return{...I,custom:{...t,offsetX:0,offsetY:-16}};case"right":return{...I,custom:{...t,offsetX:16,offsetY:0}};case"left":return{...I,custom:{...t,offsetX:-16,offsetY:0}};case"bottom":return{...I,custom:{...t,offsetX:0,offsetY:16}}}},Ue=ee(({as:m="section",className:c,children:t,w:v,width:g,minW:P,minWidth:R,zIndex:a,__css:D,...j},p)=>{var C,l,_,L,f;const{isOpen:x,closeOnButton:B,getPopperProps:S,getPopoverProps:V,onAnimationComplete:K,animation:M,duration:h,styles:d}=H(),o=Pe(t),[O,...s]=he(o,Z),A=()=>b.jsxs(b.Fragment,{children:[O??(B?b.jsx(Z,{}):null),s]}),T={position:"relative",w:"100%",display:"flex",flexDirection:"column",outline:0,...Ce(D??d.container,["zIndex"])};return v=v??g??((C=d.container)==null?void 0:C.w)??((l=d.container)==null?void 0:l.width),P=P??R??((_=d.container)==null?void 0:_.minW)??((L=d.container)==null?void 0:L.minWidth),a=a??((f=d.container)==null?void 0:f.zIndex),b.jsx(W.div,{...S({style:{visibility:x?"visible":"hidden"}}),className:"ui-popover",w:v,minW:P,zIndex:a,children:b.jsx(W.section,{as:Re[m],className:$("ui-popover__content",c),...M!=="none"?Fe(M,h):{},...V({...j,children:A()},p),initial:"exit",animate:x?"enter":"exit",exit:"exit",onAnimationComplete:ye(K,j.onAnimationComplete),__css:T})})});export{Ne as P,He as a,Ue as b,Z as c,Ye as p,H as u};