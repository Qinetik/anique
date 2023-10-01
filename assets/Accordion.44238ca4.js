import{s as x,m as w,g as H,a as r,A as o}from"./Theme.e785dc72.js";import{R as I}from"./index.6123842c.js";import{g as a,i as f,t as l}from"./web.bb9df7e4.js";import{c as t,a as p,s as y,m as v,b as M}from"./solid.443b34c3.js";import"./index.08ebe212.js";import"./index.5457f4c0.js";import"./index.a4ea06e9.js";import"./index.be0ffe33.js";import{C as h,H as S}from"./index.f2d7ed09.js";import"./select.3cdbbdfe.js";import"./index.ce2145c7.js";const L=l("<style>");function A(...e){const n=x(e),s=w(n.styles),c=H(s,!0),i=()=>(()=>{const b=a(L);return f(b,()=>`@keyframes ${c}{${n.styles}}`),b})();return i.animationName=c,i}const R=l("<style>");function k(...e){const n=x(e);return w(n.styles),()=>(()=>{const s=a(R);return f(s,()=>n.styles),s})()}const z=r("div")`
    fill: ${o.colors.onBg};
    width: ${e=>.5+(e.size||1)}rem;
    height: ${e=>.5+(e.size||1)}rem;
`,E=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">'),V=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">'),_=l('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">');function $(){return a(E)}function N(){return a(V)}function F(){return a(_)}let m=function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e}({});function u(e){return o.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}const W=r("div")`
    padding: 1em;
    background: ${e=>o.colors[e.type||"success"]};
    border-radius: ${o.border.mdRadius};
    color: ${e=>u(e.type)};

    & * {
        color: ${e=>u(e.type)};
        fill: ${e=>u(e.type)};
    }
`;function Z(e){switch(e){case m.Info:return F;case m.Warning:return $;case m.Error:return $}return N}function d(e){const n=Z(e.type);return t(W,{get type(){return e.type},get children(){return t(I,{gap:"1em",get children(){return[t(z,{get children(){return t(n,{})}}),p(()=>e.children)]}})}})}r("div")`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;r("p")`
    
`;r("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;const O=r("span")`
  font-family: ${o.font.secondary};
  color: ${e=>o.colors[e.color||"onBg"]};
`;r(O)`
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
`;const P=r("span")`
  box-sizing: border-box;
  display:inline-block;
  padding: 0.6em 0.5em 0.6em 1em;
  margin : 1em 0 0.25em 0;
  font-family : ${o.font.primary};
`;r(e=>{const n=y(e,["title"]);return t(P,v({color:"onBg100",as:"h4",get children(){return e.title}},()=>n[1]))})`
`;k`
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
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background : ${o.colors.onBg500};
        color : ${o.colors.bg100};
        border-radius : ${o.border.smRadius};
        padding : 1px 3px;
    }
`;const U=l('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">'),Y=l("<div>"),j=r("div")`

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
    
`,q=r("div")`
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
    
`,T=r("div")`
  overflow: hidden;
`;function D(){return a(U)}function g(e){let n=e.expanded,s=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const i=M(e.defaultExpanded??!0);n=i[0],s=i[1]}const c=()=>e.class?e.class+(n()?" expanded":""):n()?"expanded":void 0;return t(j,v(()=>y(e,["title","children","class"])[1],{get class(){return c()},get children(){return[t(q,{onClick:()=>s(!n()),get children(){return[(()=>{const i=a(Y);return f(i,()=>e.title),i})(),p(()=>p(()=>!!(e.showIcon??!0))()&&t(z,{class:"icon",get children(){return t(D,{})}}))]}}),t(T,{get children(){return e.children}})]}}))}const C=r("div")`
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
`;r(C)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;r(C)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`;const G=r("select")`
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
    
`;r(G)`
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

`;k`

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

`;const J=A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;r("svg")`
  animation: ${J.animationName} 1s linear infinite;
`;const B=r("input")`
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
`;r(B)`
    line-height: 1;
    height: 2rem;
`;r(h)`

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
    color : ${o.colors.primary};
    font-size : 0.8rem;
    margin-left : 0.25em;
`;r(B.withComponent("textarea"))`
    resize: vertical;
    height: 6rem;
`;function le(){return t(h,{gap:"1em",get children(){return[t(S,{children:"Accordion"}),t(g,{title:"Click me to open",defaultExpanded:!1,children:"Hi this is the internal content of this accordion"}),t(g,{title:"I am already open",children:"Hello guy ?"}),t(g,{title:"Checkout my length",style:{gap:"1em"},get children(){return t(h,{gap:"1em",get children(){return[t(d,{children:"Wise men say"}),t(d,{children:"Only fools rush in"}),t(d,{children:"But I can't help"}),t(d,{children:"Falling in love with you"})]}})}})]}})}export{le as AccordionPage};
