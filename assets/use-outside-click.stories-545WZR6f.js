import{j as r,F as p}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-BBG7Pe00.js";import{r as s}from"./index-IybTgENJ.js";import{C as l}from"./center-fIPi_wKl.js";import{B as u}from"./button-IfON6BpW.js";import"./factory-ilkGXtBr.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-jT9FMMYK.js";import"./index-dKw0visz.js";import"./motion-RGBG165B.js";import"./motion-HpRHdgWC.js";import"./loading-lL0YWT3j.js";import"./index-U5zsdkbG.js";import"./theme-provider-xH9zRqO9.js";import"./index-quyfJ-i_.js";import"./index-Kgfi2DNL.js";import"./icon-tcOP_kzz.js";import"./use-component-style-Ji6G5y4B.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return <>
      {isOpen ? <Center ref={ref} h="10" px="4" bg="danger" color="white" rounded="md">
          Hey, Click anywhere outside of me to close.
        </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>}
    </>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const v=["basic"];export{v as __namedExportsOrder,e as basic,_ as default};