import{a as $,m as B,s as o,A as t,R as S}from"./index.a97c299c.js";import{g as l,i as u,t as d,d as R,e as L,s as M,b as H}from"./web.8723317b.js";import{c as s,f as p,m as g,s as b,d as E,a as w,F as A}from"./solid.1407e386.js";import"./index.02309b8a.js";import"./select.a2e4049b.js";import"./index.3180e705.js";import{C as T}from"./index.76c28dc9.js";const V=d("<style>");function I(...e){const r=$(e),i="k"+B(r.styles),n=()=>(()=>{const c=l(V);return u(c,()=>`@keyframes ${i}{${r.styles}}`),c})();return n.animationName=i,n}const N=d("<style>");function y(...e){const r=$(e);return()=>(()=>{const a=l(N);return u(a,()=>r.styles),a})()}const v=o("div")`
    fill: ${e=>e.fill||t.colors.onBg};
    width: ${e=>.5+(e.size||1)}rem;
    height: ${e=>.5+(e.size||1)}rem;
`,_=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">');function x(){return l(_)}const F=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">');function O(){return l(F)}const W=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">');function Y(){return l(W)}const Z=d('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">');function j(){return l(Z)}let m=function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e}({});function h(e){return t.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}const U=o("div")`
    padding: 1em;
    background: ${e=>t.colors[e.type||"success"]};
    border-radius: ${t.border.mdRadius};
    color: ${e=>h(e.type)};

    & * {
        color: ${e=>h(e.type)};
        fill: ${e=>h(e.type)};
    }
`;function X(e){switch(e){case m.Info:return Y;case m.Warning:return x;case m.Error:return x}return O}function q(e){const r=X(e.type);return s(U,{get type(){return e.type},get children(){return s(S,{gap:"1em",get children(){return[s(v,{get children(){return s(r,{})}}),p(()=>e.children)]}})}})}const D=d("<div>"),G=o("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    background: ${t.colors.bg};
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

`;function J(e){return s(G,g({get style(){return{display:e.isVisible()?"block":"none"}},get children(){return e.children}},()=>b(e,["isVisible","children"])[1]))}function K(e){return r=>{(r.currentTarget===r.target||!r.currentTarget.contains(r.target))&&e.onClickOutside()}}function Q(e){const r=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};return(()=>{const a=l(D);return L(a,"click",K(e),!0),u(a,()=>e.children),E(i=>M(a,{width:"100%",height:"100%",...r},i)),H(),a})()}function be(e){return s(J,g(e,{get children(){return s(Q,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}R(["click"]);o("div")`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;o("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;o("p")`

`;o("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;var k=(e=>(e[e.TopLeft=0]="TopLeft",e[e.TopCenter=1]="TopCenter",e[e.TopRight=2]="TopRight",e[e.CenterLeft=3]="CenterLeft",e[e.Center=4]="Center",e[e.CenterRight=5]="CenterRight",e[e.BottomLeft=6]="BottomLeft",e[e.BottomCenter=7]="BottomCenter",e[e.BottomRight=8]="BottomRight",e))(k||{});function P(e,r,a){const i=r||"0",n=a||"0";switch(e){case 0:return{left:i,top:n};case 1:return{top:n,left:i=="0"?"50%":`calc(50% + ${i})`,transform:"translateX(-50%)"};case 2:return{top:n,right:i};case 3:return{top:n=="0"?"50%":`calc(50% + ${n})`,left:i,transform:"translateY(-50%)"};case 4:return{top:n=="0"?"50%":`calc(50% + ${n})`,left:i=="0"?"50%":`calc(50% + ${i})`,transform:"translate(-50%, -50%)"};case 5:return{top:n=="0"?"50%":`calc(50% + ${n})`,right:i,transform:"translateY(-50%)"};case 6:return{bottom:n,left:i};case 7:return{left:i=="0"?"50%":`calc(50% + ${i})`,bottom:n,transform:"translateX(-50%)"};case 8:return{right:i,bottom:n}}}function ee(){let e=Math.random()*46656|0,r=Math.random()*46656|0;return e=("000"+e.toString(36)).slice(-3),r=("000"+r.toString(36)).slice(-3),e+r}const te=o("span")`
  font-family: ${t.font.secondary};
  color: ${e=>t.colors[e.color||"onBg"]};
`;o(te)`
  font-size: 0.8rem;
`;o("input")`
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
    border: ${e=>.15+(e.size||0)*.05}em solid ${t.colors.primary};
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
        box-shadow: inset 1em 1em ${t.colors.onBg300};
        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.05em) solid ${t.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border: 0.15em solid ${t.colors.bg500};
        color: ${t.colors.bg200};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;o("div")`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 280px;
  box-sizing: border-box;
  padding: 1.5em;
`;o("div")`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 0.5em 0.6em 1em;
  border-radius: 999px;
  cursor: pointer;
  font-family:${t.font.secondary};
  color : ${t.colors.onBg};
  ${e=>e.isActive&&"background : "+t.colors.bg200+";"}
    
  &:hover {
    background: ${t.colors.primary};
  }
`;const re=o("span")`
  box-sizing: border-box;
  display:inline-block;
  padding: 0.6em 0.5em 0.6em 1em;
  margin : 1em 0 0.25em 0;
  font-family : ${t.font.primary};
`;o(e=>{const r=b(e,["title"]);return s(re,g({color:"onBg100",as:"h4",get children(){return e.title}},()=>r[1]))})`
`;y`
    :root * {
        font-family : ${t.font.secondary};
    }
    a {
        color : #0060FE;
    }
    a:hover {
        color : #266bd9;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family : ${t.font.primary};
    }
    p {
        line-height : 1.75rem;
        letter-spacing : 0.05rem;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background : ${t.colors.onBg500};
        color : ${t.colors.bg100};
        border-radius : ${t.border.smRadius};
        padding : 1px 3px;
    }
`;const oe=d("<div>"),ne=o("div")`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;
    
    background: ${t.colors.bg200};
    padding: 1.25em;
    gap : 0.5em;
    box-sizing: border-box;
    border-radius: ${t.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }
    
    & .icon {
        transition : rotate 500ms;
    }
    
    &.expanded .icon {
        rotate : 180deg;
    }
    
`,ie=o("div")`
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
    
`,ae=o("div")`
  overflow: hidden;
`;function xe(e){let r=e.expanded,a=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const n=w(e.defaultExpanded??!0);r=n[0],a=n[1]}const i=()=>e.class?e.class+(r()?" expanded":""):r()?"expanded":void 0;return s(ne,g(()=>b(e,["title","children","class"])[1],{get class(){return i()},get children(){return[s(ie,{onClick:()=>a(!r()),get children(){return[(()=>{const n=l(oe);return u(n,()=>e.title),n})(),p(()=>p(()=>!!(e.showIcon??!0))()&&s(v,{class:"icon",get children(){return s(j,{})}}))]}}),s(ae,{get children(){return e.children}})]}}))}const C=o("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${t.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${t.colors.primary100};
    }

    &:active {
        background: ${t.colors.primary200};
    }
`;o(C)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;o(C)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`;const se=o("select")`
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
        background-color: ${t.colors.onBg400};
        background-image: linear-gradient(to top, ${t.colors.onBg300}, ${t.colors.onBg400} 33%);
        color : ${t.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${t.colors.bg100};
    }
    
`,$e=o(se)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${t.border.smRadius};
`;o("input")`

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
    border: ${e=>.15+(e.size||0)*.05}em solid ${t.colors.primary};
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
        background-color: ${t.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${t.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${t.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;o("div")`
    display: inline-block;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${t.colors.onBg100};
    border-radius: ${t.border.mdRadius};
    background : ${e=>t.colors[e.background||"bg100"]};
`;y`

    :root::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${t.colors.bg200};
        border-radius: 10px;
        
    }
    
    :root::-webkit-scrollbar {
        width: 6px;
        background-color: ${t.colors.bg200};
    }
    
    :root::-webkit-scrollbar-thumb {
        background-color: ${t.colors.bg400};
        border-radius: 10px;
    }

`;const ce=I`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;o("svg")`
    animation: ${ce.animationName} 1s linear infinite;
`;const z=o("input")`
    width: 12em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    border: 2px solid ${t.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:focus {
        border-color: ${t.colors.primary};
        box-shadow: 0 0 0 2px ${t.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background-color: #eee;
        cursor: not-allowed;
    }
`,we=o(z)`
    line-height: 1;
    height: 2rem;
`;o(T)`

    border: 2px solid ${t.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:has(input:focus) {
        border-color: ${t.colors.primary};
        box-shadow: 0 0 0 2px ${t.colors.primary100};
        outline: 3px solid transparent;
    }

    padding: 0.25em 0.5em;
    position: relative;
`;o("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.5em;
    font-family: ${t.font.secondary};
`;o("span")`
    color : ${t.colors.onBg200};
    font-size : 0.8rem;
    margin-left : 0.25em;
`;o(z.withComponent("textarea"))`
    resize: vertical;
    height: 6rem;
`;const le=o("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position : fixed;
    
`;function ye(e){const r=()=>e.position()==k.Center?"0":"1em";return s(le,{get style(){return{...P(e.position(),r(),r())}},get children(){return s(A,{get each(){return e.snackbars},children:a=>a.element()})}})}function ve(e=[]){const r=w(e);function a(n){r[1](c=>[...c,n]),setTimeout(()=>{r[1](c=>c.filter(f=>f.id!==n.id))},n.expirationTime)}function i(n,c){a({id:ee(),expirationTime:c||3e3,element:n})}return{snackbars:r[0],setSnackbars:r[1],show:a,showElement:i,showAlert:(n,c,f)=>{i(()=>s(q,{get type(){return c||m.Info},children:n}),f)}}}export{xe as A,we as B,$e as N,k as P,ye as S,q as a,m as b,ve as c,be as d,P as r};
