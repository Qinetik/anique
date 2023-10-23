import{a as S,m as E,s as n,A as t,R as p}from"./index.80a75d89.js";import{g as c,i as w,t as d,s as h,b as m,d as _,e as W,P as O}from"./web.f2b87fa1.js";import{c as o,m as g,b,s as f,e as N,S as u,a as A,F as Z}from"./solid.21af8d85.js";import{S as B,I as F}from"./index.06614562.js";import"./select.3f0f1825.js";import"./index.88ef6e93.js";import{C as y}from"./index.c487e321.js";const q=d("<style>");function X(...e){const r=S(e),s="k"+E(r.styles),i=()=>(()=>{const a=c(q);return w(a,()=>`@keyframes ${s}{${r.styles}}`),a})();return i.animationName=s,i}const j=d("<style>");function U(...e){const r=S(e);return()=>(()=>{const l=c(j);return w(l,()=>r.styles),l})()}const H=n("div")`
    fill: ${e=>e.fill||t.colors.onBg};
    width: ${e=>1.5+(e.size||0)}rem;
    height: ${e=>1.5+(e.size||0)}rem;

    & > svg {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }
`,Y=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">');function z(e){return(()=>{const r=c(Y);return h(r,e,!0,!0),m(),r})()}const G=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">');function J(e){return(()=>{const r=c(G);return h(r,e,!0,!0),m(),r})()}const K=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">');function Q(e){return(()=>{const r=c(K);return h(r,e,!0,!0),m(),r})()}const P=d('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">');function ee(e){return(()=>{const r=c(P);return h(r,e,!0,!0),m(),r})()}d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z">');const te=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">'),re=e=>(()=>{const r=c(te);return h(r,e,!0,!0),m(),r})(),oe=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z">');function je(e){return(()=>{const r=c(oe);return h(r,e,!0,!0),m(),r})()}d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z">');let x=function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e}({});function k(e){return t.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}const ne=n("div")`
    padding: 1em;
    background: ${e=>t.colors[e.type||"success"]};
    border-radius: ${t.border.mdRadius};
    color: ${e=>k(e.type)};

    & * {
        color: ${e=>k(e.type)};
        fill: ${e=>k(e.type)};
    }
`;function ie(e){switch(e){case x.Info:return Q;case x.Warning:return z;case x.Error:return z}return J}function se(e){const r=ie(e.type);return o(ne,g({get type(){return e.type}},()=>f(e,["type","children"])[1],{get children(){return o(p,{gap:"1em",get children(){return[o(H,{get children(){return o(r,{})}}),b(()=>e.children)]}})}}))}var D=(e=>(e[e.TopLeft=0]="TopLeft",e[e.TopCenter=1]="TopCenter",e[e.TopRight=2]="TopRight",e[e.CenterLeft=3]="CenterLeft",e[e.Center=4]="Center",e[e.CenterRight=5]="CenterRight",e[e.BottomLeft=6]="BottomLeft",e[e.BottomCenter=7]="BottomCenter",e[e.BottomRight=8]="BottomRight",e))(D||{});function le(e,r,l){const s=r||"0",i=l||"0";switch(e){case 0:return{left:s,top:i};case 1:return{top:i,left:s=="0"?"50%":`calc(50% + ${s})`,transform:"translateX(-50%)"};case 2:return{top:i,right:s};case 3:return{top:i=="0"?"50%":`calc(50% + ${i})`,left:s,transform:"translateY(-50%)"};case 4:return{top:i=="0"?"50%":`calc(50% + ${i})`,left:s=="0"?"50%":`calc(50% + ${s})`,transform:"translate(-50%, -50%)"};case 5:return{top:i=="0"?"50%":`calc(50% + ${i})`,right:s,transform:"translateY(-50%)"};case 6:return{bottom:i,left:s};case 7:return{left:s=="0"?"50%":`calc(50% + ${s})`,bottom:i,transform:"translateX(-50%)"};case 8:return{right:s,bottom:i}}}function ae(){let e=Math.random()*46656|0,r=Math.random()*46656|0;return e=("000"+e.toString(36)).slice(-3),r=("000"+r.toString(36)).slice(-3),e+r}const de=d("<div>"),ce=n("div")`

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

`;function ue(e){return o(ce,g({get style(){return b(()=>e.isVisible==null)()?e.style:b(()=>typeof e.style>"u")()?e.isVisible()?"display:block;":"display:none;":b(()=>typeof e.style=="string")()?(e.isVisible()?"display:block;":"display:none;")+e.style:{display:e.isVisible()?"block":"none",...e.style}}},()=>f(e,["isVisible","style"])[1]))}function L(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function ge(e){const r=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};let l=!1;return(()=>{const s=c(de);return s.$$mouseup=i=>{const a=L(i);l&&a&&e.onClickOutside(),l=!1},s.$$mousedown=i=>{l=L(i)},w(s,()=>e.children),N(i=>W(s,{width:"100%",height:"100%",...r},i)),m(),s})()}function T(e){return o(ue,g(()=>f(e,["children","onClickOutside","flex","relative"])[1],{get children(){return o(ge,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}_(["mousedown","mouseup"]);const $=n("span")`
  font-family: ${t.font.secondary};
  color: ${e=>t.colors[e.color||"onBg"]};
`;n($)`
  font-size: 0.8rem;
`;const M=n("input")`
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

`;function Ue(e){const r={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?l=>e.onChange(l.currentTarget.checked):void 0};return e.description==null?o(p,{alignment:"center",get children(){return[o(M,g({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},r)),o(B,{width:"0.5em"}),o($,{get children(){return e.label}})]}}):o(p,{alignment:"center",get children(){return[o(M,g({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},r)),o(B,{width:"0.5em"}),o(y,{get children(){return[o($,{get children(){return e.label}}),o($,{color:"onBg300",get children(){return e.description}})]}})]}})}U`
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
`;const me=d("<h3>"),be=d("<div>");function he(e){return o(O,{get children(){return o(T,{get isVisible(){return e.isVisible},get onClickOutside(){return e.onCloseRequest},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}const fe=n(y)`
    background : ${t.colors.bg200};
    padding : 1em;
    border-radius : ${t.border.lgRadius};
`;function Ye(e){return o(he,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return o(fe,{gap:"1em",get children(){return[o(u,{get when(){return e.title!=null},get children(){return o(p,{gap:"0.5em",style:{width:"100%"},get children(){return[o(u,{get when(){return e.title!=null},get children(){return[o(u,{get when(){return typeof e.title=="string"},get children(){const r=c(me);return r.style.setProperty("flex","1"),r.style.setProperty("margin","0"),w(r,()=>e.title),r}}),o(u,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),o(u,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return o(F,{style:{"margin-left":"auto"},get onClick(){return e.onCloseRequest},size:.5,get children(){return o(re,{})}})}})]}})}}),(()=>{const r=c(be);return w(r,()=>e.content),r})(),o(u,{get when(){return e.actions!=null},get children(){return o(p,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const Ge=n("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 280px;
    box-sizing: border-box;
    padding: 1.5em;
`,Je=n("div")`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${t.font.secondary};
    color: ${t.colors.onBg};

    ${e=>e.isActive&&"background : "+t.colors.bg200+";"}
    &:hover {
        background: ${t.colors.primary};
    }
`,we=n("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 1em 0 0.25em 0;
    font-family: ${t.font.primary};
`;n(e=>o(we,g({color:"onBg100",get children(){return e.title}},()=>f(e,["title"])[1])))`
`;const pe=d("<div>"),xe=n("div")`

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
    
`,$e=n("div")`
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
    
`,ye=n("div")`
  overflow: hidden;
`;function Ke(e){let r=e.expanded,l=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const i=A(e.defaultExpanded??!0);r=i[0],l=i[1]}const s=()=>e.class?e.class+(r()?" expanded":""):r()?"expanded":void 0;return o(xe,g(()=>f(e,["title","children","class"])[1],{get class(){return s()},get children(){return[o($e,{onClick:()=>l(!r()),get children(){return[(()=>{const i=c(pe);return w(i,()=>e.title),i})(),b(()=>b(()=>!!(e.showIcon??!0))()&&o(H,{class:"icon",get children(){return o(ee,{})}}))]}}),o(ye,{get children(){return e.children}})]}}))}const V=n("div")`
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
`;n(V)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;n(V)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`;const ve=n("select")`
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
    
`,Qe=n(ve)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${t.border.smRadius};
`;n("input")`

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

`;const ke=n("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${t.colors.onBg100};
    border-radius: ${t.border.mdRadius};
    background: ${e=>t.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`;n(ke)`

    cursor: pointer;

    &:hover {
        background: ${e=>t.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>t.colors[(e.variation||"bg")+"400"]};
    }

`;n("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${t.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${t.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${t.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${t.colors.onBg500};
    }
    
`;const Ce=X`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;n("svg")`
    animation: ${Ce.animationName} 1s linear infinite;
`;const I=n("input")`

    width: 14em;
    min-height: 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 2px solid ${t.colors.bg200};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${t.colors.bg100};

    &:focus {
        border-color: ${t.colors.primary};
        box-shadow: 0 0 0 2px ${t.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background: ${t.colors.bg300};
        color: ${t.colors.bg500};
    }

`,Pe=I;n(y)`

    width: 14em;
    border: 2px solid ${t.colors.bg100};
    box-sizing: border-box;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${t.colors.bg100};

    padding: 0.25em 0.5em;
    position: relative;

    &:has(input:focus) {
        border-color: ${t.colors.primary};
        box-shadow: 0 0 0 1px ${t.colors.primary100};
        outline: 3px solid transparent;
    }

    &.disabled {
        background: ${t.colors.bg500};
    }

    &.disabled .label {
        color: ${t.colors.onBg500};
    }

`;n("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-family: ${t.font.secondary};
    min-width: 10em;
    flex: 1;
    box-sizing: border-box;
`;n("span")`
    color: ${t.colors.onBg200};
    font-size: 0.8rem;
    margin-left: 0.25em;
`;n(I.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`;const Be=n("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position : fixed;
    
`;function et(e){const r=()=>e.position()==D.Center?"0":"1em";return o(Be,{get style(){return{...le(e.position(),r(),r())}},get children(){return o(Z,{get each(){return e.snackbars},children:l=>l.element()})}})}function tt(e=[]){const r=A(e);function l(i){r[1](a=>[...a,i]),setTimeout(()=>{r[1](a=>a.filter(v=>v.id!==i.id))},i.expirationTime)}function s(i,a){l({id:ae(),expirationTime:a||3e3,element:i})}return{snackbars:r[0],setSnackbars:r[1],show:l,showElement:s,showAlert:(i,a,v)=>{s(()=>o(se,{get type(){return a||x.Info},children:i}),v)}}}const ze=n("div")`

  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;

  &:hover *:last-of-type:not(style) {
    display: block;
  }

  & > *:last-of-type:not(style) {
    display: none;
  }

`,Le=n("div")`
  width: 100%;
`,Me=n("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function rt(e){return o(ze,g(()=>f(e,["exposed","children"])[1],{get children(){return[o(Le,{get children(){return e.exposed()}}),o(Me,{get children(){return e.children}})]}}))}const ot=n("div")`

  padding: 0.75em 1em;
  background: ${t.colors.bg200};

  cursor: pointer;
  user-select: none;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${t.colors.bg300};
  }

  &:active {
    background: ${t.colors.bg500};
  }

  &:first-of-type {
    border-top-left-radius: ${t.border.smRadius};
    border-top-right-radius: ${t.border.smRadius};
  }

  &:last-of-type {
    border-bottom-left-radius: ${t.border.smRadius};
    border-bottom-right-radius: ${t.border.smRadius};
  }

`,nt=n(y)`
    align-items: unset;
    position: absolute;
    width: max-content;
`,Re=n("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,R=n("div")`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: 998;

    display: none;

    ${t.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`,C=n("div")`
    width: ${e=>e.drawerWidth};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    height: calc(100% - ${e=>e.topBarHeight});
    position: fixed;
    top: ${e=>e.topBarHeight};
    bottom: 0;
    //background: red;
`,Se=n("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,Ae=n("div")`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    z-index: 999;
    //background: blue;
`,He=n("div")`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,De=n("div")`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function it(e){const r=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,l=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,s=e.drawerWidth||"280px",i=e.oppositeDrawerWidth||"280px",a=e.topBar!=null?e.topBarHeight||"56px":"0px";return o(Re,{get children(){return[o(u,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return o(R,{drawerWidth:s,topBarHeight:a,get children(){return o(C,{drawerWidth:s,topBarHeight:a,style:{left:0},get children(){return e.drawerContent()}})}})}}),o(Se,{get children(){return[o(u,{get when(){return e.topBar!=null},get children(){return o(Ae,{style:{position:"fixed"},topBarHeight:a,get children(){return e.topBar()}})}}),o(He,{topBarHeight:a,get children(){return e.children}})]}}),o(u,{get when(){return e.oppositeDrawerContent!=null},get children(){return o(R,{drawerWidth:i,topBarHeight:a,get children(){return o(C,{drawerWidth:i,topBarHeight:a,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),o(u,{get when(){return r!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return o(T,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},style:{"z-index":999},relative:!0,get children(){return o(De,{get hideAboveBreakpoint(){return b(()=>e.hideMobileDrawerAbove!=null)()?t.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:l?{right:0}:{left:0},get children(){return o(C,{drawerWidth:s,topBarHeight:a,get style(){return{background:t.colors.bg100,"border-top-right-radius":t.border.mdRadius,"border-bottom-right-radius":t.border.mdRadius,...l?{right:0}:{left:0}}},get children(){return r()}})}})}})}})]}})}const Te=n("div")`
    display: flex;
    flex-direction: row;
    background: ${t.colors.bg200};
    border-radius: ${t.border.smRadius};
`,st=Te,Ve=n("div")`

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
    padding: 0.75em 2em;
    cursor: pointer;

    transition: border-bottom 0.3s ease, color 0.3s ease;

    &:hover, &.selected {
        border-bottom: 3px solid ${t.colors.primary};
        color: ${t.colors.primary};
    }

`;function lt(e){return o(Ve,g({get class(){return e.isSelected?"selected":void 0},get children(){return e.children}},()=>f(e,["isSelected","children"])[1]))}n("table")`

    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 400px;
    border-radius : ${t.border.mdRadius};
    overflow : hidden;

    & thead tr {
        background-color: ${t.colors.primary};
        text-align: left;
    }

    & th, & td {
        padding: 12px 15px;
    }

    & tbody tr {
        border-bottom: 1px solid ${t.colors.bg100};
    }

    & tbody tr:nth-of-type(even) {
        background-color: ${t.colors.bg200};
    }

    & tbody tr:last-of-type {
        border-bottom: 2px solid ${t.colors.primary};
    }

    & tbody tr.active {
        font-weight: bold;
        color: ${t.colors.primary};
    }
    
`;const Ie=d('<input type="checkbox">'),Ee=d('<span class="slider round">'),_e=n("label")`

    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;


    /* Hide default HTML checkbox */

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${t.colors.bg300};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: ${t.colors.onBg};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & input:checked + .slider {
        background-color: ${t.colors.primary};
    }

    & input:focus + .slider {
        box-shadow: 0 0 1px ${t.colors.primary};
    }

    & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    & .slider.round {
        border-radius: 34px;
    }

    & .slider.round:before {
        border-radius: 50%;
    }
`;function at(e){return o(_e,{class:"switch",get children(){return[(()=>{const r=c(Ie);return h(r,e,!1,!1),m(),r})(),c(Ee)]}})}export{Ke as A,Pe as B,nt as D,rt as H,H as I,Ue as L,ot as M,Qe as N,D as P,et as S,at as T,se as a,x as b,tt as c,je as d,it as e,Je as f,Ge as g,Ye as h,he as i,le as j,st as k,lt as l,z as r};
