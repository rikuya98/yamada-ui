import{j as d}from"./jsx-runtime-CKrituN3.js";import{j as p,q as t}from"./factory-jQ8alorc.js";import{B as u}from"./box-DTX5RwVd.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const w={title:"System / Styles / Color Mode"},o=()=>{const{colorMode:e}=p();return d.jsxs(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),m=t("blackAlpha.800","whiteAlpha.800"),h=t("whiteAlpha.800","blackAlpha.800");return d.jsxs(u,{bg:m,p:"md",rounded:"md",color:h,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var a,l,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} p="md" rounded="md" color={["whiteAlpha.800", "blackAlpha.800"]} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const C=["basic","useHook"];export{C as __namedExportsOrder,o as basic,w as default,r as useHook};