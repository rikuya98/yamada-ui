const c=n=>{const t=r(n);return typeof t.PointerEvent<"u"&&n instanceof t.PointerEvent?n.pointerType==="mouse":n instanceof t.MouseEvent},i=n=>!!n.touches,g=n=>i(n)&&n.touches.length>1,r=n=>n.view??window,u=(n,t="page")=>{const o=n.touches[0]||n.changedTouches[0];return{x:o[`${t}X`],y:o[`${t}Y`]}},a=(n,t="page")=>({x:n[`${t}X`],y:n[`${t}Y`]}),d=(n,t="page")=>i(n)?u(n,t):a(n,t),E=(n,t,o,e)=>(n.addEventListener(t,o,e),()=>{n.removeEventListener(t,o,e)}),f=n=>t=>{const o=c(t);(!o||o&&t.button===0)&&n(t)},h=(n,t=!1)=>{const o=s=>n(s,{point:d(s)});return t?f(o):o},w=(n,t,o,e)=>E(n,t,h(o,t==="pointerdown"),e);export{E as a,w as b,d as g,g as i};
