import{j as t}from"./jsx-runtime-CKrituN3.js";import{u as P}from"./index-BBGn-3wb.js";import{v as b}from"./number-49BHn0Cl.js";import{c as j,u as x,a as k,o as C}from"./factory-jQ8alorc.js";import{f as w}from"./forward-ref-DuAegr0M.js";import{u as R}from"./use-component-style-DOSk5UmJ.js";import{o as T}from"./theme-provider-C1GLE5Ir.js";const[_,F]=j({name:"ProgressStylesContext",errorMessage:`useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),q=w((i,n)=>{const[o,a]=R("Progress",i),{className:r,children:e,value:s,min:m,max:c,hasStripe:u,isStripeAnimation:l,isAnimation:d,speed:f,borderRadius:g,rounded:h,...v}=T(a),p=g??h??o.track.borderRadius,y={w:"100%",overflow:"hidden",pos:"relative",...o.track};return t.jsx(_,{value:o,children:t.jsxs(x.div,{ref:n,className:k("ui-progress",r),__css:y,borderRadius:p,...C(v,["filledTrackColor"]),children:[t.jsx(S,{min:m,max:c,value:s,hasStripe:u,isStripeAnimation:l,isAnimation:d,speed:f,borderRadius:p}),e]})})}),S=({value:i=0,min:n=0,max:o=100,hasStripe:a,isStripeAnimation:r,isAnimation:e,speed:s="1.4s",...m})=>{const c=b(i,n,o),u=F(),l=P({keyframes:{"0%":{bgPosition:"1rem 0"},"100%":{bgPosition:"0 0"}},duration:typeof s=="string"?s:`${s}s`,iterationCount:"infinite",timingFunction:"linear"}),d=P({keyframes:{"0%":{left:"-40%"},"100%":{left:"100%"}},duration:typeof s=="string"?s:`${s}s`,iterationCount:"infinite",timingFunction:"ease"});r=!e&&a&&r;const f={...r?{animation:l}:{},...e?{position:"absolute",willChange:"left",minWidth:"50%",animation:d}:{}},g={w:`${c}%`,h:"100%",...u.filledTrack};return t.jsx(x.div,{css:f,__css:g,...m})};export{q as P};