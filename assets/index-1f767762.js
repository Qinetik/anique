import{s as a}from"./index-6df8a466.js";import{A as n}from"./Theme-c9d85115.js";import{R as M}from"./index-a7d06282.js";import{S as U}from"./UL-ae71d882.js";import{l as X,c as r,m as b,k as y,f as m,g as D,i as x,e as Z,s as xe,r as ee,t as V,u as _,n as h,o as we,P as ve,S as c,d as te,b as C,a as ye,j as ke,p as $e,q as p,F as re}from"./entry-client-2ac2a0bd.js";import{T as A}from"./index-0f5f71d8.js";import{C as W}from"./index-756d1732.js";import{I as Ce}from"./index-b9c452d6.js";import{u as De,v as Ve}from"./index-049cff28.js";import{I as Be}from"./index-9f77492a.js";import{c as ne}from"./css-39caad62.js";const Se=V("<div>"),Oe=a("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index : 1000;

    &:after {
        content: "";
        background: ${n.colors.bg};
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

`;function Pe(e){return r(Oe,b({get style(){return m(()=>e.isVisible==null)()?e.style:m(()=>typeof e.style>"u")()?e.isVisible()?"display:block;":"display:none;":m(()=>typeof e.style=="string")()?(e.isVisible()?"display:block;":"display:none;")+e.style:{display:e.isVisible()?"block":"none",...e.style}}},()=>y(e,["isVisible","style"])[1]))}function Y(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function Re(e){const t=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};let o=!1;return(()=>{const i=D(Se);return i.$$mouseup=s=>{const d=Y(s);o&&d&&(s.stopImmediatePropagation(),e.onClickOutside()),o=!1},i.$$mousedown=s=>{o=Y(s)},x(i,()=>e.children),Z(s=>xe(i,{width:"100%",height:"100%",...t},s)),ee(),i})()}function oe(e){return r(Pe,b(()=>y(e,["children","onClickOutside","flex","relative"])[1],{get children(){return r(Re,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}X(["mousedown","mouseup"]);const Ie=a("div")`
    border-radius: ${n.border.mdRadius};
    background: ${n.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`,Pt=a(Ie)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${n.colors.bg300};
    }
    
    &:active {
        background: ${n.colors.bg400};
    }

`,G=a("input",{shouldForwardProp:e=>e!="size"})`
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
  border: ${e=>.15+(e.size||0)*.05}em solid ${n.colors.primary};
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
    box-shadow: inset 1em 1em ${n.colors.onBg300};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(0.5px, 0.05em) solid ${n.colors.onBg500};
    outline-offset: 0.1em;
  }

  &:disabled {
    border: 0.15em solid ${n.colors.bg500};
    color: ${n.colors.bg200};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

`;function Rt(e){const t={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?o=>e.onChange(o.currentTarget.checked):void 0};return e.description==null?r(M,{alignment:"center",get children(){return[r(G,b({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(U,{width:"0.5em"}),r(A,{get children(){return e.label}})]}}):r(M,{alignment:"center",get children(){return[r(G,b({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(U,{width:"0.5em"}),r(W,{get children(){return[r(A,{get children(){return e.label}}),r(A,{color:"onBg300",get children(){return e.description}})]}})]}})}const ze=V("<h3>"),Ee=V("<div>"),ie={children:()=>[],onBorn:()=>0,onDied:()=>0},F=te(ie);function Me(e){let t;if(e.doNotTrackChildren==null||!e.doNotTrackChildren){let o=_(F),i=[];t={id:e.id,children:()=>i,onBorn:s=>{i=[...i,s],e.debugLog&&console.log("[DialogDebugEvent:ChildBorn] TotalChildren",i.length)},onDied:s=>{i=i.filter(d=>d!==s),e.debugLog&&console.log("[DialogDebugEvent:ChildDied] TotalChildren",i.length)}},h(()=>{e.isVisible==null||e.isVisible()?(o.onBorn(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Born (Effect:Visibility)")):(o.onDied(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Died (Effect:Visibility)"))},e.isVisible==null||e.isVisible()),we(()=>{o.onDied(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Died (Cleanup)")})}else t=ie;return r(ve,{get children(){return r(F.Provider,{value:t,get children(){return r(oe,{get isVisible(){return e.isVisible},get onClickOutside(){return e.doNotTrackChildren?()=>e.onCloseRequest(t):()=>{t.children().length==0?e.onCloseRequest(t):e.debugLog&&console.log("[DialogDebugEvent:ClickedOutside] Avoided Dismiss")}},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}})}const Te=a(W)`
    background: ${n.colors.bg200};
    padding: 1em;
    border-radius: ${n.border.lgRadius};
`;function Ae(e){const t=_(F);return r(Ce,{style:{"margin-left":"auto"},onClick:()=>e.onCloseRequest(t),size:.5,get children(){return r(De,{})}})}function It(e){return r(Me,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return r(Te,{gap:"1em",get children(){return[r(c,{get when(){return e.title!=null},get children(){return r(M,{gap:"0.5em",style:{width:"100%"},get children(){return[r(c,{get when(){return e.title!=null},get children(){return[r(c,{get when(){return typeof e.title=="string"},get children(){const t=D(ze);return t.style.setProperty("flex","1"),t.style.setProperty("margin","0"),x(t,()=>e.title),t}}),r(c,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),r(c,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return r(Ae,{get onCloseRequest(){return e.onCloseRequest}})}})]}})}}),(()=>{const t=D(Ee);return x(t,()=>e.content),t})(),r(c,{get when(){return e.actions!=null},get children(){return r(M,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const He=V("<div><div><div></div><!$><!/></div><div>"),Fe=V("<div class=exposed>"),_e=V("<div class=content>"),We=ne`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;

    background: ${n.colors.bg200};
    padding: 1.25em;
    gap: 0.5em;
    box-sizing: border-box;
    border-radius: ${n.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

    & .icon {
        transition: rotate 500ms;
    }

    &.expanded .icon {
        rotate: 180deg;
    }

`,qe=ne`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > :first-of-type {
        flex: 1;
    }
`;function zt(e){let t=e.expanded,o=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const i=C(e.defaultExpanded??!0);t=i[0],o=i[1]}return(()=>{const i=D(He),s=i.firstChild,d=s.firstChild,k=d.nextSibling,[R,T]=ye(k.nextSibling),u=s.nextSibling;return ke(i,b(()=>y(e,["title","children","class","defaultExpanded"])[1],{get class(){return We()+(t()?" expanded":"")+(e.class?" "+e.class:"")}}),!1,!0),s.$$click=()=>o(!t()),x(d,()=>e.title),x(s,(()=>{const $=m(()=>!!(e.showIcon??!0));return()=>$()&&r(Be,{class:"icon",get children(){return r(Ve,{})}})})(),R,T),u.style.setProperty("overflow","hidden"),x(u,()=>e.children),Z(()=>$e(s,qe())),ee(),i})()}const Ne=a("div",{shouldForwardProp:e=>e!="timeMillis"})`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows ${e=>e.timeMillis||500}ms;

    box-sizing: border-box;
    border-radius: ${n.border.smRadius};

    & .content {
        overflow: hidden;
    }

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

`;function Et(e){return r(Ne,b(()=>y(e,["exposed","children"])[1],{get children(){return[(()=>{const t=D(Fe);return x(t,()=>e.exposed),t})(),(()=>{const t=D(_e);return x(t,()=>e.children),t})()]}}))}X(["click"]);const Le=a("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${n.colors.onBg100};
    border-radius: ${n.border.mdRadius};
    background: ${e=>n.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`,Mt=a(Le)`

    cursor: pointer;

    &:hover {
        background: ${e=>n.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>n.colors[(e.variation||"bg")+"400"]};
    }

`,Tt=a("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${n.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${n.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${n.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${n.colors.onBg500};
    }

`,je=e=>{const t=b({multiple:!1,disabled:!1,optionToValue:l=>l,isOptionDisabled:l=>!1},e),o=l=>{if(t.multiple&&Array.isArray(l))return l;if(!t.multiple&&!Array.isArray(l))return l!==null?[l]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[i,s]=C(t.initialValue!==void 0?o(t.initialValue):[]),d=()=>t.multiple?i():i()[0]||null,k=l=>s(o(l)),R=()=>s([]),T=()=>!!(t.multiple?d().length:d());h(p(i,()=>t.onChange?.(d()),{defer:!0}));const[u,$]=C(""),ae=()=>$(""),q=()=>!!u().length;h(p(u,l=>t.onInput?.(l),{defer:!0})),h(p(u,l=>{l&&!g()&&f(!0)},{defer:!0}));const I=typeof t.options=="function"?m(()=>t.options(u()),t.options(u())):()=>t.options,N=()=>I().length,z=l=>{if(t.isOptionDisabled(l))return;const v=t.optionToValue(l);t.multiple?k([...i(),v]):(k(v),S(!1)),f(!1)},[se,S]=C(!1),[g,f]=C(!1),L=()=>f(!g()),[O,E]=C(-1),w=()=>I()[O()],de=l=>l===w(),j=l=>{N()||E(-1);const v=N()-1,pe=l==="next"?1:-1;let P=O()+pe;P>v&&(P=0),P<0&&(P=v),E(P)},ce=()=>j("previous"),K=()=>j("next");h(p(I,l=>{g()&&E(Math.min(0,l.length-1))},{defer:!0})),h(p(()=>t.disabled,l=>{l&&g()&&f(!1)})),h(p(g,l=>{l?(O()===-1&&K(),S(!0)):(O()>-1&&E(-1),$(""))},{defer:!0})),h(p(O,l=>{l>-1&&!g()&&f(!0)},{defer:!0}));const ue=()=>S(!0),ge=()=>{S(!1),f(!1)},he=l=>l.preventDefault(),be=l=>{!t.disabled&&!q()&&L()},fe=l=>{$(l.target.value)},me=l=>{switch(l.key){case"ArrowDown":K();break;case"ArrowUp":ce();break;case"Enter":if(g()&&w()){z(w());break}return;case"Escape":if(g()){f(!1);break}return;case"Delete":case"Backspace":if(u())return;if(t.multiple){const v=d();k([...v.slice(0,-1)])}else R();break;case" ":if(u())return;g()?w()&&z(w()):f(!0);break;case"Tab":if(w()&&g()){z(w());break}return;default:return}l.preventDefault(),l.stopPropagation()};return{options:I,value:d,setValue:k,hasValue:T,clearValue:R,inputValue:u,setInputValue:$,hasInputValue:q,clearInputValue:ae,isOpen:g,setIsOpen:f,toggleOpen:L,isActive:se,setIsActive:S,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:z,isOptionFocused:de,isOptionDisabled:t.isOptionDisabled,onFocusIn:ue,onFocusOut:ge,onMouseDown:he,onClick:be,onInput:fe,onKeyDown:me}},le=te(),B=()=>{const e=_(le);if(!e)throw new Error("No SelectContext found in ancestry.");return e},At=e=>{const[t,o]=y(b({format:(s,d)=>s,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),i=je(t);return h(p(()=>o.initialValue,s=>s!==void 0&&i.setValue(s))),r(le.Provider,{value:i,get children(){return r(Ue,{get class(){return o.class},get children(){return[r(Ge,{get id(){return o.id},get name(){return o.name},get format(){return o.format},get placeholder(){return o.placeholder},get autofocus(){return o.autofocus},get readonly(){return o.readonly}}),r(lt,{get loading(){return o.loading},get loadingPlaceholder(){return o.loadingPlaceholder},get emptyPlaceholder(){return o.emptyPlaceholder},get format(){return o.format}})]}})}})},Ke=a("div")`
    position: relative;
    background-color : ${n.colors.bg200};
    border-radius : ${n.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,Ue=e=>{const t=B();return r(Ke,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:o=>{t.onMouseDown(o),o.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},Ye=a("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${n.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${n.colors.bg200};
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
        border-color: ${n.colors.onBg500};
        background-color: ${n.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${n.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,Ge=e=>{const t=B(),o=i=>{const s=t.value();t.setValue([...s.slice(0,i),...s.slice(i+1)])};return r(Ye,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[r(c,{get when(){return m(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return r(Qe,{get children(){return e.placeholder}})}}),r(c,{get when(){return m(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return r(Ze,{get children(){return e.format(t.value(),"value")}})}}),r(c,{get when(){return t.hasValue()&&t.multiple},get children(){return r(re,{get each(){return t.value()},children:(i,s)=>r(rt,{onRemove:()=>o(s()),get children(){return e.format(i,"value")}})})}}),r(ot,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},Je=a("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,Qe=e=>r(Je,{class:"solid-select-placeholder",get children(){return e.children}}),Xe=a("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,Ze=e=>r(Xe,{class:"solid-select-single-value",get children(){return e.children}}),et=a("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${n.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,tt=a("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,rt=e=>(B(),r(et,{class:"solid-select-multi-value",get children(){return[m(()=>e.children),r(tt,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),nt=a("input")`
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
`,ot=e=>{const t=B();return r(nt,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:o=>{t.onKeyDown(o),o.defaultPrevented||o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),o.target.blur())},onMouseDown:o=>{o.stopPropagation()}})},it=a("div")`
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
`,J=a("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,lt=e=>{const t=B();return r(c,{get when(){return t.isOpen()},get children(){return r(it,{class:"solid-select-list",get children(){return r(c,{get when(){return!e.loading},get fallback(){return r(J,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return r(re,{get each(){return t.options()},get fallback(){return r(J,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:o=>r(st,{option:o,get children(){return e.format(o,"option")}})})}})}})}})},at=a("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${n.colors.bg200};
    border-radius : ${n.border.smRadius};
    color : ${n.colors.onBg200};

    &:hover {
        background-color: ${n.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${n.colors.bg400};
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

`,st=e=>{const t=B();return r(at,{ref:i=>{h(()=>{t.isOptionFocused(e.option)&&i.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},dt=a("div")`

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

`,ct=a("div")`
  width: 100%;
`,ut=a("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function Ht(e){return r(dt,b(()=>y(e,["exposed","children"])[1],{get children(){return[r(ct,{get children(){return e.exposed()}}),r(ut,{get children(){return e.children}})]}}))}const Ft=a("div")`

  padding: 0.75em 1em;
  background: ${n.colors.bg200};

  cursor: pointer;
  user-select: none;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${n.colors.bg300};
  }

  &:active {
    background: ${n.colors.bg500};
  }

  &:first-of-type {
    border-top-left-radius: ${n.border.smRadius};
    border-top-right-radius: ${n.border.smRadius};
  }

  &:last-of-type {
    border-bottom-left-radius: ${n.border.smRadius};
    border-bottom-right-radius: ${n.border.smRadius};
  }

`,_t=a(W)`
    align-items: unset;
    position: absolute;
    width: max-content;
`,gt=a("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,Q=a("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: 998;

    display: none;

    ${n.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`,H=a("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
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
`,ht=a("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,bt=a("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    z-index: 999;
    //background: blue;
`,ft=a("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,mt=a("div",{shouldForwardProp:e=>e!="hideAboveBreakpoint"})`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function Wt(e){const t=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,o=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,i=e.drawerWidth||"280px",s=e.oppositeDrawerWidth||"280px",d=e.topBar!=null?e.topBarHeight||"56px":"0px";return r(gt,{get children(){return[r(c,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return r(Q,{drawerWidth:i,topBarHeight:d,get children(){return r(H,{drawerWidth:i,topBarHeight:d,style:{left:0},get children(){return e.drawerContent()}})}})}}),r(ht,{get children(){return[r(c,{get when(){return e.topBar!=null},get children(){return r(bt,{style:{position:"fixed"},topBarHeight:d,get children(){return e.topBar()}})}}),r(ft,{topBarHeight:d,get children(){return e.children}})]}}),r(c,{get when(){return e.oppositeDrawerContent!=null},get children(){return r(Q,{drawerWidth:s,topBarHeight:d,get children(){return r(H,{drawerWidth:s,topBarHeight:d,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),r(c,{get when(){return t!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return r(oe,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},style:{"z-index":999},relative:!0,get children(){return r(mt,{get hideAboveBreakpoint(){return m(()=>e.hideMobileDrawerAbove!=null)()?n.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:o?{right:0}:{left:0},get children(){return r(H,{drawerWidth:i,topBarHeight:d,get style(){return{background:n.colors.bg100,"border-top-right-radius":n.border.mdRadius,"border-bottom-right-radius":n.border.mdRadius,...o?{right:0}:{left:0}}},get children(){return t()}})}})}})}})]}})}const pt=a("div")`
    display: flex;
    flex-direction: row;
    background: ${n.colors.bg200};
    border-radius: ${n.border.smRadius};
`,qt=pt,xt=a("div")`

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
        border-bottom: 3px solid ${n.colors.primary};
        color: ${n.colors.primary};
    }

`;function Nt(e){return r(xt,b({get class(){return e.isSelected?"selected":void 0},get children(){return e.children}},()=>y(e,["isSelected","children"])[1]))}export{zt as A,Ie as C,Me as D,Et as E,Ht as H,Rt as L,Ft as M,Wt as S,qt as T,Pt as a,G as b,Le as c,Mt as d,It as e,_t as f,Tt as g,At as h,Nt as i};
