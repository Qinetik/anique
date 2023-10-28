import{t as g,g as h,p as R,r as C,c as n,m,d as u,q as w,i as T,h as ke,l as Ce,s as Be,P as ze,S as b,b as S,u as v,v as k,F as Z,w as Se,x as Ve}from"./entry-client-43dc9895.js";import{s as o,k as Re}from"./index-984971c2.js";class Me{constructor(){this.unit="px",this.step=5,this.values={xs:0,sm:600,md:900,lg:1200,xl:1536},this.up=t=>`@media (min-width:${t instanceof Number?t:this.values[t]}${this.unit})`,this.down=t=>`@media (max-width:${(t instanceof Number?t:this.values[t])-this.step/100}${this.unit})`,this.between=(t,i)=>{const l=t instanceof Number?t:this.values[t],a=i instanceof Number?i:this.values[i];return`@media (min-width:${l}${this.unit}) and (max-width:${a}${this.unit})`}}}const s={border:{smRadius:"a0",mdRadius:"a1",lgRadius:"a2"},font:{primary:"a3",secondary:"a4"},animation:{timing:{ease:"a5",slider:"a6",slideStop:"a7",timingThrottle:"a8"}},colors:{success:"a9",onSuccess:"b0",warning:"b1",onWarning:"b2",error:"b3",onError:"b4",info:"b5",onInfo:"b6",primary:"b7",primary100:"b8",primary200:"b9",primary300:"c0",primary400:"c1",primary500:"c2",accent:"c3",accent100:"c4",accent200:"c5",accent300:"c6",accent400:"c7",accent500:"c8",bg:"c9",bg100:"d0",bg200:"d1",bg300:"d2",bg400:"d3",bg500:"d4",onBg:"d5",onBg100:"d6",onBg200:"d7",onBg300:"d8",onBg400:"d9",onBg500:"e0",backdrop:"e1"}};function _(e,t,i){let l="";for(let a=0;a<e.length;a++){const d=e[a];a>0&&(l+=`
`);const f=t[d];if(f==null)throw new Error(`No CSS Variable key found for theme key ${d.toString()}`);const L=i[d];if(L==null)throw new Error(`No CSS Variable value found for theme key ${d.toString()} && mapped key ${f}`);l+=`--${f}:${L};`}return l}function er(e){const t=_(Object.keys(s.border),s.border,e.border),i=_(Object.keys(s.font),s.font,e.font),l=_(Object.keys(s.animation.timing),s.animation.timing,e.animation.timing),a=_(Object.keys(s.colors),s.colors,e.colors);return[t,i,l,a].join(`
`)}function Le(e){return{border:{smRadius:`var(--${s.border.smRadius})`,mdRadius:`var(--${s.border.mdRadius})`,lgRadius:`var(--${s.border.lgRadius})`},font:{primary:`var(--${s.font.primary})`,secondary:`var(--${s.font.secondary})`},animation:{timing:{ease:`var(--${s.animation.timing.ease})`,slider:`var(--${s.animation.timing.slider})`,timingThrottle:`var(--${s.animation.timing.timingThrottle})`,slideStop:`var(--${s.animation.timing.slideStop})`}},colors:{accent:`var(--${s.colors.accent})`,accent100:`var(--${s.colors.accent100})`,accent200:`var(--${s.colors.accent200})`,accent300:`var(--${s.colors.accent300})`,accent400:`var(--${s.colors.accent400})`,accent500:`var(--${s.colors.accent500})`,backdrop:`var(--${s.colors.backdrop})`,bg:`var(--${s.colors.bg})`,bg100:`var(--${s.colors.bg100})`,bg200:`var(--${s.colors.bg200})`,bg300:`var(--${s.colors.bg300})`,bg400:`var(--${s.colors.bg400})`,bg500:`var(--${s.colors.bg500})`,error:`var(--${s.colors.error})`,info:`var(--${s.colors.info})`,onBg:`var(--${s.colors.onBg})`,onBg100:`var(--${s.colors.onBg100})`,onBg200:`var(--${s.colors.onBg200})`,onBg300:`var(--${s.colors.onBg300})`,onBg400:`var(--${s.colors.onBg400})`,onBg500:`var(--${s.colors.onBg500})`,onError:`var(--${s.colors.onError})`,onInfo:`var(--${s.colors.onInfo})`,onSuccess:`var(--${s.colors.onSuccess})`,onWarning:`var(--${s.colors.onWarning})`,primary:`var(--${s.colors.primary})`,primary100:`var(--${s.colors.primary100})`,primary200:`var(--${s.colors.primary200})`,primary300:`var(--${s.colors.primary300})`,primary400:`var(--${s.colors.primary400})`,primary500:`var(--${s.colors.primary500})`,success:`var(--${s.colors.success})`,warning:`var(--${s.colors.warning})`},breakpoints:e}}const r=Le(new Me),V=o("span")`
  font-family: ${r.font.secondary};
  color: ${e=>r.colors[e.color||"onBg"]};
`;o(V)`
  font-size: 0.8rem;
`;const $=o("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${e=>e.alignment!=null?"align-items:"+e.alignment+";":""}
    ${e=>e.gap!=null?"gap:"+e.gap+";":null}
    ${e=>e.wrap?"flex-wrap : wrap;":null}
`,oe=o("div")`
    fill: ${e=>e.fill||r.colors.onBg};
    width: ${e=>1.5+(e.size||0)}rem;
    height: ${e=>1.5+(e.size||0)}rem;

    & > svg {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }
`,De=g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">');function J(e){return(()=>{const t=h(De);return R(t,e,!0,!0),C(),t})()}const Ie=g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">');function Ae(e){return(()=>{const t=h(Ie);return R(t,e,!0,!0),C(),t})()}const Te=g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">');function Oe(e){return(()=>{const t=h(Te);return R(t,e,!0,!0),C(),t})()}const He=g('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">');function Ee(e){return(()=>{const t=h(He);return R(t,e,!0,!0),C(),t})()}g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z">');const Fe=g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">'),We=e=>(()=>{const t=h(Fe);return R(t,e,!0,!0),C(),t})(),Ne=g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z">');function tr(e){return(()=>{const t=h(Ne);return R(t,e,!0,!0),C(),t})()}g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z">');let P=function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e}({});function q(e){return r.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}const _e=o("div")`
    padding: 1em;
    background: ${e=>r.colors[e.type||"success"]};
    border-radius: ${r.border.mdRadius};
    color: ${e=>q(e.type)};

    & * {
        color: ${e=>q(e.type)};
        fill: ${e=>q(e.type)};
    }
`;function Pe(e){switch(e){case P.Info:return Oe;case P.Warning:return J;case P.Error:return J}return Ae}function qe(e){const t=Pe(e.type);return n(_e,m({get type(){return e.type}},()=>w(e,["type","children"])[1],{get children(){return n($,{gap:"1em",get children(){return[n(oe,{get children(){return n(t,{})}}),u(()=>e.children)]}})}}))}const O=o("div")`
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

`;const rr=o("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;var ie=(e=>(e[e.TopLeft=0]="TopLeft",e[e.TopCenter=1]="TopCenter",e[e.TopRight=2]="TopRight",e[e.CenterLeft=3]="CenterLeft",e[e.Center=4]="Center",e[e.CenterRight=5]="CenterRight",e[e.BottomLeft=6]="BottomLeft",e[e.BottomCenter=7]="BottomCenter",e[e.BottomRight=8]="BottomRight",e))(ie||{});function je(e,t,i){const l=t||"0",a=i||"0";switch(e){case 0:return{left:l,top:a};case 1:return{top:a,left:l=="0"?"50%":`calc(50% + ${l})`,transform:"translateX(-50%)"};case 2:return{top:a,right:l};case 3:return{top:a=="0"?"50%":`calc(50% + ${a})`,left:l,transform:"translateY(-50%)"};case 4:return{top:a=="0"?"50%":`calc(50% + ${a})`,left:l=="0"?"50%":`calc(50% + ${l})`,transform:"translate(-50%, -50%)"};case 5:return{top:a=="0"?"50%":`calc(50% + ${a})`,right:l,transform:"translateY(-50%)"};case 6:return{bottom:a,left:l};case 7:return{left:l=="0"?"50%":`calc(50% + ${l})`,bottom:a,transform:"translateX(-50%)"};case 8:return{right:l,bottom:a}}}function Ze(){let e=Math.random()*46656|0,t=Math.random()*46656|0;return e=("000"+e.toString(36)).slice(-3),t=("000"+t.toString(36)).slice(-3),e+t}const Ue=g("<div>"),Ke=o($)`
  width : 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,Xe=o("div")`
  margin-right: 1rem;
`,Ye=o("h3")`
  flex : 1;
`;function nr(e){return n(Ke,m(()=>w(e,["navIcon","title","actions","children"])[1],{get children(){return[u(()=>u(()=>!!e.navIcon)()?n(Xe,{style:{"margin-right":"1rem"},get children(){return e.navIcon()}}):n(O,{width:"0.75em"})),n(Ye,{get children(){return e.title}}),(()=>{const t=h(Ue);return T(t,()=>e.actions),t})()]}}))}const Ge=g("<div>"),Je=o("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index : 1000;

    &:after {
        content: "";
        background: ${r.colors.bg};
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

`;function Qe(e){return n(Je,m({get style(){return u(()=>e.isVisible==null)()?e.style:u(()=>typeof e.style>"u")()?e.isVisible()?"display:block;":"display:none;":u(()=>typeof e.style=="string")()?(e.isVisible()?"display:block;":"display:none;")+e.style:{display:e.isVisible()?"block":"none",...e.style}}},()=>w(e,["isVisible","style"])[1]))}function Q(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function et(e){const t=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};let i=!1;return(()=>{const l=h(Ge);return l.$$mouseup=a=>{const d=Q(a);i&&d&&e.onClickOutside(),i=!1},l.$$mousedown=a=>{i=Q(a)},T(l,()=>e.children),Ce(a=>Be(l,{width:"100%",height:"100%",...t},a)),C(),l})()}function ae(e){return n(Qe,m(()=>w(e,["children","onClickOutside","flex","relative"])[1],{get children(){return n(et,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}ke(["mousedown","mouseup"]);const tt=o("button")`

    box-sizing: border-box;
    padding: ${e=>.8+(e.size?e.size*.25:0)}em ${e=>.8+(e.size?e.size*.5:0)}em;
    background: ${r.colors.primary};
    border-radius: ${r.border.lgRadius};
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:disabled {
        background : ${r.colors.bg500};
    }
    
    &:hover:not(&:disabled) {
        background: ${r.colors.primary100};
    }

    &:active:not(&:disabled) {
        background: ${r.colors.primary200};
    }

`,or=tt,rt=o("div")`
    border-radius: ${r.border.mdRadius};
    background: ${r.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`,ir=o(rt)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${r.colors.bg300};
    }
    
    &:active {
        background: ${r.colors.bg400};
    }

`,H=o("div")`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${e=>e.gap!=null?"gap:"+e.gap+";":null}
    ${e=>e.wrap?"flex-wrap : wrap;":null}
`,ee=o("input")`
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
  border: ${e=>.15+(e.size||0)*.05}em solid ${r.colors.primary};
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
    box-shadow: inset 1em 1em ${r.colors.onBg300};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(0.5px, 0.05em) solid ${r.colors.onBg500};
    outline-offset: 0.1em;
  }

  &:disabled {
    border: 0.15em solid ${r.colors.bg500};
    color: ${r.colors.bg200};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

`;function ar(e){const t={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?i=>e.onChange(i.currentTarget.checked):void 0};return e.description==null?n($,{alignment:"center",get children(){return[n(ee,m({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),n(O,{width:"0.5em"}),n(V,{get children(){return e.label}})]}}):n($,{alignment:"center",get children(){return[n(ee,m({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),n(O,{width:"0.5em"}),n(H,{get children(){return[n(V,{get children(){return e.label}}),n(V,{color:"onBg300",get children(){return e.description}})]}})]}})}const nt=o("div")`

    width: ${e=>2+(e.size||0)}rem;
    height: ${e=>2+(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${r.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${r.colors.bg300};
    }

    &:active {
        background: ${r.colors.bg400};
    }

`,ot=g("<h3>"),it=g("<div>");function at(e){return n(ze,{get children(){return n(ae,{get isVisible(){return e.isVisible},get onClickOutside(){return e.onCloseRequest},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}const lt=o(H)`
    background : ${r.colors.bg200};
    padding : 1em;
    border-radius : ${r.border.lgRadius};
`;function lr(e){return n(at,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return n(lt,{gap:"1em",get children(){return[n(b,{get when(){return e.title!=null},get children(){return n($,{gap:"0.5em",style:{width:"100%"},get children(){return[n(b,{get when(){return e.title!=null},get children(){return[n(b,{get when(){return typeof e.title=="string"},get children(){const t=h(ot);return t.style.setProperty("flex","1"),t.style.setProperty("margin","0"),T(t,()=>e.title),t}}),n(b,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),n(b,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return n(nt,{style:{"margin-left":"auto"},get onClick(){return e.onCloseRequest},size:.5,get children(){return n(We,{})}})}})]}})}}),(()=>{const t=h(it);return T(t,()=>e.content),t})(),n(b,{get when(){return e.actions!=null},get children(){return n($,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const sr=o("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 280px;
    box-sizing: border-box;
    padding: 1.5em;
`,cr=o("div")`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${r.font.secondary};
    color: ${r.colors.onBg};

    ${e=>e.isActive&&"background : "+r.colors.bg200+";"}
    &:hover {
        background: ${r.colors.primary};
    }
`,st=o("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 1em 0 0.25em 0;
    font-family: ${r.font.primary};
`,dr=o(e=>n(st,m({color:"onBg100",get children(){return e.title}},()=>w(e,["title"])[1])))`
`,ct=g("<div>"),dt=o("div")`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;
    
    background: ${r.colors.bg200};
    padding: 1.25em;
    gap : 0.5em;
    box-sizing: border-box;
    border-radius: ${r.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }
    
    & .icon {
        transition : rotate 500ms;
    }
    
    &.expanded .icon {
        rotate : 180deg;
    }
    
`,ut=o("div")`
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
    
`,gt=o("div")`
  overflow: hidden;
`;function ur(e){let t=e.expanded,i=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const a=S(e.defaultExpanded??!0);t=a[0],i=a[1]}const l=()=>e.class?e.class+(t()?" expanded":""):t()?"expanded":void 0;return n(dt,m(()=>w(e,["title","children","class"])[1],{get class(){return l()},get children(){return[n(ut,{onClick:()=>i(!t()),get children(){return[(()=>{const a=h(ct);return T(a,()=>e.title),a})(),u(()=>u(()=>!!(e.showIcon??!0))()&&n(oe,{class:"icon",get children(){return n(Ee,{})}}))]}}),n(gt,{get children(){return e.children}})]}}))}const le=o("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${r.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${r.colors.primary100};
    }

    &:active {
        background: ${r.colors.primary200};
    }
`,gr=o(le)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`,br=o(le)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`,mr=o("h1")`
    font-weight: 100;
    font-size : ${e=>3+(e.size?e.size:0)}rem;
`,bt=o("select")`
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
        background-color: ${r.colors.onBg400};
        background-image: linear-gradient(to top, ${r.colors.onBg300}, ${r.colors.onBg400} 33%);
        color : ${r.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${r.colors.bg100};
    }
    
`,hr=o(bt)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${r.border.smRadius};
`,te=o("input")`

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
    border: ${e=>.15+(e.size||0)*.05}em solid ${r.colors.primary};
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
        background-color: ${r.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${r.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${r.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;function fr(e){return e.description==null?n($,{alignment:"center",get children(){return[n(te,{type:"radio",get size(){return e.size},get disabled(){return e.disabled}}),n(O,{width:"0.5em"}),n(V,{get children(){return e.label}})]}}):n($,{alignment:"center",get children(){return[n(te,{type:"radio",get size(){return e.size},get disabled(){return e.disabled}}),n(O,{width:"0.5em"}),n(H,{get children(){return[n(V,{get children(){return e.label}}),n(V,{color:"onBg300",get children(){return e.description}})]}})]}})}const mt=o("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${r.colors.onBg100};
    border-radius: ${r.border.mdRadius};
    background: ${e=>r.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`,pr=o(mt)`

    cursor: pointer;

    &:hover {
        background: ${e=>r.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>r.colors[(e.variation||"bg")+"400"]};
    }

`,wr=o("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${r.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${r.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${r.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${r.colors.onBg500};
    }

`,ht=e=>{const t=m({multiple:!1,disabled:!1,optionToValue:c=>c,isOptionDisabled:c=>!1},e),i=c=>{if(t.multiple&&Array.isArray(c))return c;if(!t.multiple&&!Array.isArray(c))return c!==null?[c]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[l,a]=S(t.initialValue!==void 0?i(t.initialValue):[]),d=()=>t.multiple?l():l()[0]||null,f=c=>a(i(c)),L=()=>a([]),ue=()=>!!(t.multiple?d().length:d());v(k(l,()=>t.onChange?.(d()),{defer:!0}));const[y,E]=S(""),ge=()=>E(""),U=()=>!!y().length;v(k(y,c=>t.onInput?.(c),{defer:!0})),v(k(y,c=>{c&&!p()&&x(!0)},{defer:!0}));const F=typeof t.options=="function"?u(()=>t.options(y()),t.options(y())):()=>t.options,K=()=>F().length,W=c=>{if(t.isOptionDisabled(c))return;const z=t.optionToValue(c);t.multiple?f([...l(),z]):(f(z),D(!1)),x(!1)},[be,D]=S(!1),[p,x]=S(!1),X=()=>x(!p()),[I,N]=S(-1),B=()=>F()[I()],me=c=>c===B(),Y=c=>{K()||N(-1);const z=K()-1,ye=c==="next"?1:-1;let A=I()+ye;A>z&&(A=0),A<0&&(A=z),N(A)},he=()=>Y("previous"),G=()=>Y("next");v(k(F,c=>{p()&&N(Math.min(0,c.length-1))},{defer:!0})),v(k(()=>t.disabled,c=>{c&&p()&&x(!1)})),v(k(p,c=>{c?(I()===-1&&G(),D(!0)):(I()>-1&&N(-1),E(""))},{defer:!0})),v(k(I,c=>{c>-1&&!p()&&x(!0)},{defer:!0}));const fe=()=>D(!0),pe=()=>{D(!1),x(!1)},we=c=>c.preventDefault(),xe=c=>{!t.disabled&&!U()&&X()},ve=c=>{E(c.target.value)},$e=c=>{switch(c.key){case"ArrowDown":G();break;case"ArrowUp":he();break;case"Enter":if(p()&&B()){W(B());break}return;case"Escape":if(p()){x(!1);break}return;case"Delete":case"Backspace":if(y())return;if(t.multiple){const z=d();f([...z.slice(0,-1)])}else L();break;case" ":if(y())return;p()?B()&&W(B()):x(!0);break;case"Tab":if(B()&&p()){W(B());break}return;default:return}c.preventDefault(),c.stopPropagation()};return{options:F,value:d,setValue:f,hasValue:ue,clearValue:L,inputValue:y,setInputValue:E,hasInputValue:U,clearInputValue:ge,isOpen:p,setIsOpen:x,toggleOpen:X,isActive:be,setIsActive:D,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:W,isOptionFocused:me,isOptionDisabled:t.isOptionDisabled,onFocusIn:fe,onFocusOut:pe,onMouseDown:we,onClick:xe,onInput:ve,onKeyDown:$e}},se=Se(),M=()=>{const e=Ve(se);if(!e)throw new Error("No SelectContext found in ancestry.");return e},xr=e=>{const[t,i]=w(m({format:(a,d)=>a,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),l=ht(t);return v(k(()=>i.initialValue,a=>a!==void 0&&l.setValue(a))),n(se.Provider,{value:l,get children(){return n(pt,{get class(){return i.class},get children(){return[n(xt,{get id(){return i.id},get name(){return i.name},get format(){return i.format},get placeholder(){return i.placeholder},get autofocus(){return i.autofocus},get readonly(){return i.readonly}}),n(Mt,{get loading(){return i.loading},get loadingPlaceholder(){return i.loadingPlaceholder},get emptyPlaceholder(){return i.emptyPlaceholder},get format(){return i.format}})]}})}})},ft=o("div")`
    position: relative;
    background-color : ${r.colors.bg200};
    border-radius : ${r.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,pt=e=>{const t=M();return n(ft,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:i=>{t.onMouseDown(i),i.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},wt=o("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${r.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${r.colors.bg200};
    max-width: 25rem;
    grid-template-columns: repeat(1,minmax(0,1fr));;


    &[data-multiple="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-has-value="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-disabled="true"] {
        border-color: ${r.colors.onBg500};
        background-color: ${r.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${r.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,xt=e=>{const t=M(),i=l=>{const a=t.value();t.setValue([...a.slice(0,l),...a.slice(l+1)])};return n(wt,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[n(b,{get when(){return u(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return n($t,{get children(){return e.placeholder}})}}),n(b,{get when(){return u(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return n(kt,{get children(){return e.format(t.value(),"value")}})}}),n(b,{get when(){return t.hasValue()&&t.multiple},get children(){return n(Z,{get each(){return t.value()},children:(l,a)=>n(zt,{onRemove:()=>i(a()),get children(){return e.format(l,"value")}})})}}),n(Vt,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},vt=o("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,$t=e=>n(vt,{class:"solid-select-placeholder",get children(){return e.children}}),yt=o("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,kt=e=>n(yt,{class:"solid-select-single-value",get children(){return e.children}}),Ct=o("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${r.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,Bt=o("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,zt=e=>(M(),n(Ct,{class:"solid-select-multi-value",get children(){return[u(()=>e.children),n(Bt,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),St=o("input")`
    grid-column-start: 1;
    grid-row-start: 1;
    flex: 1;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    cursor: default;
    caret-color: transparent;

    &[data-multiple=true] {
        caret-color: currentColor;
    }

    &[data-is-active=true] {
        caret-color: currentColor;
    }
`,Vt=e=>{const t=M();return n(St,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:i=>{t.onKeyDown(i),i.defaultPrevented||i.key==="Escape"&&(i.preventDefault(),i.stopPropagation(),i.target.blur())},onMouseDown:i=>{i.stopPropagation()}})},Rt=o("div")`
    position: absolute;
    min-width: 100%;
    background: inherit;
    color: inherit;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    border-radius: 0.125rem; /* This is equivalent to rounded-sm in Windi CSS */
    margin-top: 0.25rem; /* This is equivalent to mt-1 in Windi CSS */
    padding: 0.5rem; /* This is equivalent to p-2 in Windi CSS */
    z-index: 1;
    overflow-y: auto;
    max-height: 50vh;
`,re=o("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,Mt=e=>{const t=M();return n(b,{get when(){return t.isOpen()},get children(){return n(Rt,{class:"solid-select-list",get children(){return n(b,{get when(){return!e.loading},get fallback(){return n(re,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return n(Z,{get each(){return t.options()},get fallback(){return n(re,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:i=>n(Dt,{option:i,get children(){return e.format(i,"option")}})})}})}})}})},Lt=o("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${r.colors.bg200};
    border-radius : ${r.border.smRadius};
    color : ${r.colors.onBg200};

    &:hover {
        background-color: ${r.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${r.colors.bg400};
    }

    &[data-disabled=true] {
        pointer-events: none;
        color: #999999;
    }

    & mark {
        text-decoration: underline;
        background-color: unset;
        color: unset;
    }

`,Dt=e=>{const t=M();return n(Lt,{ref:l=>{v(()=>{t.isOptionFocused(e.option)&&l.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},vr=o("input")`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${e=>6+(e.size||0)*3}px;
    background: ${r.colors.primary};
    border: none;
    outline: none;
    margin-top: ${e=>6+(e.size||0)*.01}px;
    margin-bottom: ${e=>6+(e.size||0)*.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${e=>16+(e.size||0)*3}px;
        height: ${e=>16+(e.size||0)*3}px;
        background: ${r.colors.onBg};
        border-radius: 50%;
        border : ${e=>4+(e.size||0)}px solid ${r.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${r.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${r.colors.onBg400};
        border-color : ${r.colors.primary};
    }
    
`,It=g('<svg><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></svg>',!1,!0),ce=Re`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,At=o("svg")`
    animation: ${ce.animationName} 1s linear infinite;
`,$r=e=>{const t=32+(e.size||0)*8;return[n(ce,{}),n(At,m({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-icon":"spinner",width:t,height:t,get fill(){return r.colors[e.color||"onBg"]}},()=>w(e,["color","size"])[1],{get children(){return h(It)}}))]},de=o("input")`

    width: 14em;
    min-height: 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 2px solid ${r.colors.bg200};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${r.colors.bg100};

    &:focus {
        border-color: ${r.colors.primary};
        box-shadow: 0 0 0 2px ${r.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background: ${r.colors.bg300};
        color: ${r.colors.bg500};
    }

`,yr=de,Tt=o(H)`

    width: 14em;
    border: 2px solid ${r.colors.bg100};
    box-sizing: border-box;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${r.colors.bg100};

    padding: 0.25em 0.5em;
    position: relative;

    &:has(input:focus) {
        border-color: ${r.colors.primary};
        box-shadow: 0 0 0 1px ${r.colors.primary100};
        outline: 3px solid transparent;
    }

    &.disabled {
        background: ${r.colors.bg500};
    }

    &.disabled .label {
        color: ${r.colors.onBg500};
    }

`,Ot=o("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-family: ${r.font.secondary};
    min-width: 10em;
    flex: 1;
    box-sizing: border-box;
`,Ht=o("span")`
    color: ${r.colors.onBg200};
    font-size: 0.8rem;
    margin-left: 0.25em;
`;function kr(e){return n(Tt,m(()=>e.containerProps||{},{get class(){return e.disabled?e.class?"disabled "+e.class:"disabled":e.class},get children(){return[u(()=>u(()=>!!e.label)()&&n(Ht,{class:"label",get children(){return e.label}})),n($,{style:{width:"100%","align-items":"center"},get children(){return[u(()=>e.leadingIcon),n(Ot,m(()=>w(e,["leadingIcon","trailingIcon","label"])[1])),u(()=>e.trailingIcon)]}})]}}))}const Cr=o(de.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`,Et=o("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position : fixed;
    z-index : 1001;
`;function Br(e){const t=()=>e.position()==ie.Center?"0":"1em";return n(Et,{get style(){return{...je(e.position(),t(),t())}},get children(){return n(Z,{get each(){return e.snackbars},children:i=>i.element()})}})}function zr(e=[]){const t=S(e);function i(a){t[1](d=>[...d,a]),setTimeout(()=>{t[1](d=>d.filter(f=>f.id!==a.id))},a.expirationTime)}function l(a,d){i({id:Ze(),expirationTime:d||3e3,element:a})}return{snackbars:t[0],setSnackbars:t[1],show:i,showElement:l,showAlert:(a,d,f)=>{l(()=>n(qe,{get type(){return d||P.Info},children:a}),f)}}}const Ft=o("div")`

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

`,Wt=o("div")`
  width: 100%;
`,Nt=o("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function Sr(e){return n(Ft,m(()=>w(e,["exposed","children"])[1],{get children(){return[n(Wt,{get children(){return e.exposed()}}),n(Nt,{get children(){return e.children}})]}}))}const Vr=o("div")`

  padding: 0.75em 1em;
  background: ${r.colors.bg200};

  cursor: pointer;
  user-select: none;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${r.colors.bg300};
  }

  &:active {
    background: ${r.colors.bg500};
  }

  &:first-of-type {
    border-top-left-radius: ${r.border.smRadius};
    border-top-right-radius: ${r.border.smRadius};
  }

  &:last-of-type {
    border-bottom-left-radius: ${r.border.smRadius};
    border-bottom-right-radius: ${r.border.smRadius};
  }

`,Rr=o(H)`
    align-items: unset;
    position: absolute;
    width: max-content;
`,_t=o("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,ne=o("div")`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: 998;

    display: none;

    ${r.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`,j=o("div")`
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
`,Pt=o("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,qt=o("div")`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    z-index: 999;
    //background: blue;
`,jt=o("div")`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,Zt=o("div")`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function Mr(e){const t=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,i=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,l=e.drawerWidth||"280px",a=e.oppositeDrawerWidth||"280px",d=e.topBar!=null?e.topBarHeight||"56px":"0px";return n(_t,{get children(){return[n(b,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return n(ne,{drawerWidth:l,topBarHeight:d,get children(){return n(j,{drawerWidth:l,topBarHeight:d,style:{left:0},get children(){return e.drawerContent()}})}})}}),n(Pt,{get children(){return[n(b,{get when(){return e.topBar!=null},get children(){return n(qt,{style:{position:"fixed"},topBarHeight:d,get children(){return e.topBar()}})}}),n(jt,{topBarHeight:d,get children(){return e.children}})]}}),n(b,{get when(){return e.oppositeDrawerContent!=null},get children(){return n(ne,{drawerWidth:a,topBarHeight:d,get children(){return n(j,{drawerWidth:a,topBarHeight:d,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),n(b,{get when(){return t!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return n(ae,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},style:{"z-index":999},relative:!0,get children(){return n(Zt,{get hideAboveBreakpoint(){return u(()=>e.hideMobileDrawerAbove!=null)()?r.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:i?{right:0}:{left:0},get children(){return n(j,{drawerWidth:l,topBarHeight:d,get style(){return{background:r.colors.bg100,"border-top-right-radius":r.border.mdRadius,"border-bottom-right-radius":r.border.mdRadius,...i?{right:0}:{left:0}}},get children(){return t()}})}})}})}})]}})}const Ut=o("div")`
    display: flex;
    flex-direction: row;
    background: ${r.colors.bg200};
    border-radius: ${r.border.smRadius};
`,Lr=Ut,Kt=o("div")`

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
        border-bottom: 3px solid ${r.colors.primary};
        color: ${r.colors.primary};
    }

`;function Dr(e){return n(Kt,m({get class(){return e.isSelected?"selected":void 0},get children(){return e.children}},()=>w(e,["isSelected","children"])[1]))}const Ir=o("table")`

    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 400px;
    border-radius : ${r.border.mdRadius};
    overflow : hidden;

    & thead tr {
        background-color: ${r.colors.primary};
        text-align: left;
    }

    & th, & td {
        padding: 12px 15px;
    }

    & tbody tr {
        border-bottom: 1px solid ${r.colors.bg100};
    }

    & tbody tr:nth-of-type(even) {
        background-color: ${r.colors.bg200};
    }

    & tbody tr:last-of-type {
        border-bottom: 2px solid ${r.colors.primary};
    }

    & tbody tr.active {
        font-weight: bold;
        color: ${r.colors.primary};
    }
    
`,Xt=g("<input type=checkbox>"),Yt=g('<span class="slider round">'),Gt=o("label")`

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
        background-color: ${r.colors.bg300};
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
        background-color: ${r.colors.onBg};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & input:checked + .slider {
        background-color: ${r.colors.primary};
    }

    & input:focus + .slider {
        box-shadow: 0 0 1px ${r.colors.primary};
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
`;function Ar(e){return n(Gt,{class:"switch",get children(){return[(()=>{const t=h(Xt);return R(t,e,!1,!1),C(),t})(),h(Yt)]}})}export{tr as $,ur as A,or as B,H as C,at as D,br as E,gr as F,$r as G,mr as H,oe as I,Ar as J,Ir as K,ar as L,Vr as M,hr as N,Lr as O,ie as P,Dr as Q,$ as R,sr as S,V as T,Cr as U,kr as V,Oe as W,rr as X,Mr as Y,er as Z,Me as _,qe as a,P as b,rt as c,nr as d,nt as e,r as f,ir as g,ee as h,mt as i,pr as j,lr as k,je as l,cr as m,dr as n,Sr as o,Rr as p,te as q,J as r,fr as s,wr as t,xr as u,Ee as v,vr as w,zr as x,yr as y,Br as z};
