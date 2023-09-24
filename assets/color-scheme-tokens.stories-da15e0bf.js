import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-3e6420ff.js";import{e as a}from"./extend-theme-8a277c4c.js";import{U as c}from"./ui-provider-494adcb9.js";import{B as d}from"./box-e7553e69.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-fad5103e.js";import"./environment-provider-eeae9a72.js";import"./loading-provider-f5540443.js";import"./index-065321ef.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-54b001af.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-a8f76bf0.js";import"./index-d953af92.js";import"./theme-f3d0af46.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./icon-2298db64.js";import"./index-033cf86e.js";import"./container-portal-ebea413f.js";import"./index-d3ea75b5.js";import"./notice-9f128b39.js";import"./alert-34b55442.js";import"./use-component-style-fb710021.js";import"./close-button-9cffda7a.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ['#2196F3', '#F44336']
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg='primary' p='md' rounded='md' color='white' transitionProperty='all' transitionDuration='normal'>
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const L=["useColorModeToken"];export{L as __namedExportsOrder,K as default,o as useColorModeToken};
//# sourceMappingURL=color-scheme-tokens.stories-da15e0bf.js.map