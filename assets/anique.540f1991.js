import{a as f,m as h,g as z,s as r,A as o}from"./Theme.0d521bda.js";import{R as C}from"./index.47f2dfdf.js";import{g as a,i as g,t as l}from"./web.a1c2ce68.js";import{c as n,b as u,s as $,m as x,a as B}from"./solid.21af8d85.js";import"./index.d505cdbd.js";import"./index.0b3b4179.js";import"./index.6da48306.js";import"./index.bbf1184f.js";import{C as M}from"./index.4d07b058.js";import"./select.28ec84ea.js";import"./index.c3b60e77.js";const S=l("<style>");function H(...e){const t=f(e),s=h(t.styles),c=z(s,!0),i=()=>(()=>{const p=a(S);return g(p,()=>`@keyframes ${c}{${t.styles}}`),p})();return i.animationName=c,i}const L=l("<style>");function w(...e){const t=f(e);return h(t.styles),()=>(()=>{const s=a(L);return g(s,()=>t.styles),s})()}const y=r("div")`
    fill: ${e=>e.fill||o.colors.onBg};
    width: ${e=>.5+(e.size||1)}rem;
    height: ${e=>.5+(e.size||1)}rem;
`,A=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">'),R=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">'),I=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">'),E=l('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">');function b(){return a(A)}function V(){return a(R)}function _(){return a(I)}function N(){return a(E)}let d=function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e}({});function m(e){return o.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}const F=r("div")`
    padding: 1em;
    background: ${e=>o.colors[e.type||"success"]};
    border-radius: ${o.border.mdRadius};
    color: ${e=>m(e.type)};

    & * {
        color: ${e=>m(e.type)};
        fill: ${e=>m(e.type)};
    }
`;function O(e){switch(e){case d.Info:return _;case d.Warning:return b;case d.Error:return b}return V}function ie(e){const t=O(e.type);return n(F,{get type(){return e.type},get children(){return n(C,{gap:"1em",get children(){return[n(y,{get children(){return n(t,{})}}),u(()=>e.children)]}})}})}r("div")`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;r("p")`

`;r("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;const W=r("span")`
  font-family: ${o.font.secondary};
  color: ${e=>o.colors[e.color||"onBg"]};
`;r(W)`
  font-size: 0.8rem;
`;r("input")`
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?e.size*.3:0)}em;
    height: ${e=>1.15+(e.size?e.size*.3:0)}em;
    border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: ${e=>.65+(e.size||0)*.2}em;
        height: ${e=>.65+(e.size||0)*.2}em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 80ms transform ease-in-out;
        box-shadow: inset 1em 1em ${o.colors.onBg300};
        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.05em) solid ${o.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border: 0.15em solid ${o.colors.bg500};
        color: ${o.colors.bg200};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;r("div")`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 280px;
  box-sizing: border-box;
  padding: 1.5em;
`;r("div")`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 0.5em 0.6em 1em;
  border-radius: 999px;
  cursor: pointer;
  font-family:${o.font.secondary};
  color : ${o.colors.onBg};
  ${e=>e.isActive&&"background : "+o.colors.bg200+";"}
    
  &:hover {
    background: ${o.colors.primary};
  }
`;const Z=r("span")`
  box-sizing: border-box;
  display:inline-block;
  padding: 0.6em 0.5em 0.6em 1em;
  margin : 1em 0 0.25em 0;
  font-family : ${o.font.primary};
`;r(e=>{const t=$(e,["title"]);return n(Z,x({color:"onBg100",as:"h4",get children(){return e.title}},()=>t[1]))})`
`;w`
    :root * {
        font-family : ${o.font.secondary};
    }
    a {
        color : #0060FE;
    }
    a:hover {
        color : #266bd9;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family : ${o.font.primary};
    }
    p {
        line-height : 1.75rem;
        letter-spacing : 0.05rem;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background : ${o.colors.onBg500};
        color : ${o.colors.bg100};
        border-radius : ${o.border.smRadius};
        padding : 1px 3px;
    }
`;const P=l("<div>"),U=r("div")`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;
    
    background: ${o.colors.bg200};
    padding: 1.25em;
    gap : 0.5em;
    box-sizing: border-box;
    border-radius: ${o.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }
    
    & .icon {
        transition : rotate 500ms;
    }
    
    &.expanded .icon {
        rotate : 180deg;
    }
    
`,Y=r("div")`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    align-items:center;
    
    & > :first-of-type {
          flex : 1;
    }
    
`,j=r("div")`
  overflow: hidden;
`;function se(e){let t=e.expanded,s=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const i=B(e.defaultExpanded??!0);t=i[0],s=i[1]}const c=()=>e.class?e.class+(t()?" expanded":""):t()?"expanded":void 0;return n(U,x(()=>$(e,["title","children","class"])[1],{get class(){return c()},get children(){return[n(Y,{onClick:()=>s(!t()),get children(){return[(()=>{const i=a(P);return g(i,()=>e.title),i})(),u(()=>u(()=>!!(e.showIcon??!0))()&&n(y,{class:"icon",get children(){return n(N,{})}}))]}}),n(j,{get children(){return e.children}})]}}))}const v=r("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${o.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${o.colors.primary100};
    }

    &:active {
        background: ${o.colors.primary200};
    }
`;r(v)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;r(v)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`;const q=r("select")`
    border: none;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding: 0.2em 0.8em 0.2em 0.2em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
    
    &:disabled {
        cursor: not-allowed;
        background-color: ${o.colors.onBg400};
        background-image: linear-gradient(to top, ${o.colors.onBg300}, ${o.colors.onBg400} 33%);
        color : ${o.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${o.colors.bg100};
    }
    
`;r(q)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${o.border.smRadius};
`;r("input")`

    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?e.size*.3:0)}em;
    height: ${e=>1.15+(e.size?e.size*.3:0)}em;
    border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;


    &::before {
        content: "";
        width: ${e=>.65+(e.size||0)*.2}em;
        height: ${e=>.65+(e.size||0)*.2}em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${o.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${o.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${o.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;r("div")`
    display: inline-block;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${o.colors.onBg100};
    border-radius: ${o.border.mdRadius};
    background : ${e=>o.colors[e.background||"bg100"]};
`;w`

    :root::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${o.colors.bg200};
        border-radius: 10px;
        
    }
    
    :root::-webkit-scrollbar {
        width: 6px;
        background-color: ${o.colors.bg200};
    }
    
    :root::-webkit-scrollbar-thumb {
        background-color: ${o.colors.bg400};
        border-radius: 10px;
    }

`;const T=H`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;r("svg")`
    animation: ${T.animationName} 1s linear infinite;
`;const k=r("input")`
    width: 12em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    border: 2px solid ${o.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:focus {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 2px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background-color: #eee;
        cursor: not-allowed;
    }
`;r(k)`
    line-height: 1;
    height: 2rem;
`;r(M)`

    border: 2px solid ${o.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:has(input:focus) {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 2px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    padding: 0.25em 0.5em;
    position: relative;
`;r("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.5em;
    font-family: ${o.font.secondary};
`;r("span")`
    color : ${o.colors.onBg200};
    font-size : 0.8rem;
    margin-left : 0.25em;
`;r(k.withComponent("textarea"))`
    resize: vertical;
    height: 6rem;
`;export{se as A,ie as a};
