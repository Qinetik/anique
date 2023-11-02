import{s as a}from"./index-e694302e.js";import{A as o}from"./Theme-c9d85115.js";import{R as A}from"./index-fc4b21a7.js";import{S as G}from"./UL-596ed081.js";import{c as r,m as u,k as p,g as k,j as W,r as q,t as y,u as N,l as b,o as ke,P as te,S as c,i as v,d as re,n as ye,b as D,a as $e,f as V,e as Ce,p as De,q as m,F as ne}from"./entry-client-efb8f723.js";import{T as F}from"./index-058de43f.js";import{C as L}from"./index-d49a5ec8.js";import{I as Ve}from"./index-74c14fc3.js";import{u as Be,v as Se}from"./index-149a8a7e.js";import{I as Oe}from"./index-299bfccf.js";import{c as oe}from"./css-7a3f4315.js";import{A as B}from"./index-a48d6eab.js";const Pe=y("<div>"),Re=a("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    &:after {
        content: "";
        background: ${o.colors.bg};
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

`;function ie(e,t){return t==null?e:typeof e>"u"?t()?"display:block;":"display:none;":typeof e=="string"?(t()?"display:block;":"display:none;")+e:{display:t()?"block":"none",...e}}function Me(e){return r(Re,u({get style(){return ie(e.style,e.isVisible)}},()=>p(e,["isVisible","style"])[1]))}function J(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function le(e){let t=!1;return{onMouseDown:n=>{t=J(n)},onMouseUp:n=>{const l=J(n);t&&l&&(n.stopImmediatePropagation(),e()),t=!1}}}function ze(e){const t=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};return(()=>{const n=k(Pe);return W(n,u(()=>le(e.onClickOutside),{get children(){return e.children},get style(){return{width:"100%",height:"100%",...t}}}),!1,!1),q(),n})()}function ae(e){return r(Me,u(()=>p(e,["children","onClickOutside","flex","relative"])[1],{get children(){return r(ze,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}const Ie=a("div")`
    border-radius: ${o.border.mdRadius};
    background: ${o.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`,Et=a(Ie)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${o.colors.bg300};
    }
    
    &:active {
        background: ${o.colors.bg400};
    }

`,Q=a("input",{shouldForwardProp:e=>e!="size"})`
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

`;function At(e){const t={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?n=>e.onChange(n.currentTarget.checked):void 0};return e.description==null?r(A,{alignment:"center",get children(){return[r(Q,u({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(G,{width:"0.5em"}),r(F,{get children(){return e.label}})]}}):r(A,{alignment:"center",get children(){return[r(Q,u({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(G,{width:"0.5em"}),r(L,{get children(){return[r(F,{get children(){return e.label}}),r(F,{color:"onBg300",get children(){return e.description}})]}})]}})}const Ee=y("<h3>"),Ae=y("<div>"),de={children:()=>[],onBorn:()=>0,onDied:()=>0},_=re(de);function Te(e){let t;if(e.doNotTrackChildren==null||!e.doNotTrackChildren){let n=N(_),l=[];t={id:e.id,children:()=>l,onBorn:d=>{l=[...l,d],e.debugLog&&console.log("[DialogDebugEvent:ChildBorn] TotalChildren",l.length)},onDied:d=>{l=l.filter(s=>s!==d),e.debugLog&&console.log("[DialogDebugEvent:ChildDied] TotalChildren",l.length)}},b(()=>{e.isVisible==null||e.isVisible()?(n.onBorn(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Born (Effect:Visibility)")):(n.onDied(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Died (Effect:Visibility)"))},e.isVisible==null||e.isVisible()),ke(()=>{n.onDied(t),e.debugLog&&console.log("[DialogDebugEvent:NotifiedParent] Died (Cleanup)")})}else t=de;return r(te,{get children(){return r(_.Provider,{value:t,get children(){return r(ae,{get isVisible(){return e.isVisible},get onClickOutside(){return e.doNotTrackChildren?()=>e.onCloseRequest(t):()=>{t.children().length==0?e.onCloseRequest(t):e.debugLog&&console.log("[DialogDebugEvent:ClickedOutside] Avoided Dismiss")}},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}})}const Fe=a(L)`
    background: ${o.colors.bg200};
    padding: 1em;
    border-radius: ${o.border.lgRadius};
`;function He(e){const t=N(_);return r(Ve,{style:{"margin-left":"auto"},onClick:()=>e.onCloseRequest(t),size:.5,get children(){return r(Be,{})}})}function Tt(e){return r(Te,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return r(Fe,{gap:"1em",get children(){return[r(c,{get when(){return e.title!=null},get children(){return r(A,{gap:"0.5em",style:{width:"100%"},get children(){return[r(c,{get when(){return e.title!=null},get children(){return[r(c,{get when(){return typeof e.title=="string"},get children(){const t=k(Ee);return t.style.setProperty("flex","1"),t.style.setProperty("margin","0"),v(t,()=>e.title),t}}),r(c,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),r(c,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return r(He,{get onCloseRequest(){return e.onCloseRequest}})}})]}})}}),(()=>{const t=k(Ae);return v(t,()=>e.content),t})(),r(c,{get when(){return e.actions!=null},get children(){return r(A,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const _e=y("<div><div><div></div><!$><!/></div><div>"),We=y("<div class=exposed>"),qe=y("<div class=content>"),Ne=oe`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;

    background: ${o.colors.bg200};
    padding: 1.25em;
    gap: 0.5em;
    box-sizing: border-box;
    border-radius: ${o.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

    & .icon {
        transition: rotate 500ms;
    }

    &.expanded .icon {
        rotate: 180deg;
    }

`,Le=oe`
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
`;function Ft(e){let t=e.expanded,n=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const l=D(e.defaultExpanded??!0);t=l[0],n=l[1]}return(()=>{const l=k(_e),d=l.firstChild,s=d.firstChild,$=s.nextSibling,[M,T]=$e($.nextSibling),g=d.nextSibling;return W(l,u(()=>p(e,["title","children","class","defaultExpanded"])[1],{get class(){return Ne()+(t()?" expanded":"")+(e.class?" "+e.class:"")}}),!1,!0),d.$$click=()=>n(!t()),v(s,()=>e.title),v(d,(()=>{const C=V(()=>!!(e.showIcon??!0));return()=>C()&&r(Oe,{class:"icon",get children(){return r(Se,{})}})})(),M,T),g.style.setProperty("overflow","hidden"),v(g,()=>e.children),Ce(()=>De(d,Le())),q(),l})()}const je=a("div",{shouldForwardProp:e=>e!="timeMillis"})`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows ${e=>e.timeMillis||500}ms;

    box-sizing: border-box;
    border-radius: ${o.border.smRadius};

    & .content {
        overflow: hidden;
    }

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

`;function Ht(e){return r(je,u(()=>p(e,["exposed","children"])[1],{get children(){return[(()=>{const t=k(We);return v(t,()=>e.exposed),t})(),(()=>{const t=k(qe);return v(t,()=>e.children),t})()]}}))}ye(["click"]);const Ke=a("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${o.colors.onBg100};
    border-radius: ${o.border.mdRadius};
    background: ${e=>o.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`,_t=a(Ke)`

    cursor: pointer;

    &:hover {
        background: ${e=>o.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>o.colors[(e.variation||"bg")+"400"]};
    }

`,Wt=a("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${o.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${o.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${o.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${o.colors.onBg500};
    }

`,Ue=e=>{const t=u({multiple:!1,disabled:!1,optionToValue:i=>i,isOptionDisabled:i=>!1},e),n=i=>{if(t.multiple&&Array.isArray(i))return i;if(!t.multiple&&!Array.isArray(i))return i!==null?[i]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[l,d]=D(t.initialValue!==void 0?n(t.initialValue):[]),s=()=>t.multiple?l():l()[0]||null,$=i=>d(n(i)),M=()=>d([]),T=()=>!!(t.multiple?s().length:s());b(m(l,()=>t.onChange?.(s()),{defer:!0}));const[g,C]=D(""),ce=()=>C(""),j=()=>!!g().length;b(m(g,i=>t.onInput?.(i),{defer:!0})),b(m(g,i=>{i&&!h()&&f(!0)},{defer:!0}));const z=typeof t.options=="function"?V(()=>t.options(g()),t.options(g())):()=>t.options,K=()=>z().length,I=i=>{if(t.isOptionDisabled(i))return;const w=t.optionToValue(i);t.multiple?$([...l(),w]):($(w),O(!1)),f(!1)},[ue,O]=D(!1),[h,f]=D(!1),U=()=>f(!h()),[P,E]=D(-1),x=()=>z()[P()],ge=i=>i===x(),Y=i=>{K()||E(-1);const w=K()-1,ve=i==="next"?1:-1;let R=P()+ve;R>w&&(R=0),R<0&&(R=w),E(R)},he=()=>Y("previous"),Z=()=>Y("next");b(m(z,i=>{h()&&E(Math.min(0,i.length-1))},{defer:!0})),b(m(()=>t.disabled,i=>{i&&h()&&f(!1)})),b(m(h,i=>{i?(P()===-1&&Z(),O(!0)):(P()>-1&&E(-1),C(""))},{defer:!0})),b(m(P,i=>{i>-1&&!h()&&f(!0)},{defer:!0}));const be=()=>O(!0),fe=()=>{O(!1),f(!1)},me=i=>i.preventDefault(),pe=i=>{!t.disabled&&!j()&&U()},xe=i=>{C(i.target.value)},we=i=>{switch(i.key){case"ArrowDown":Z();break;case"ArrowUp":he();break;case"Enter":if(h()&&x()){I(x());break}return;case"Escape":if(h()){f(!1);break}return;case"Delete":case"Backspace":if(g())return;if(t.multiple){const w=s();$([...w.slice(0,-1)])}else M();break;case" ":if(g())return;h()?x()&&I(x()):f(!0);break;case"Tab":if(x()&&h()){I(x());break}return;default:return}i.preventDefault(),i.stopPropagation()};return{options:z,value:s,setValue:$,hasValue:T,clearValue:M,inputValue:g,setInputValue:C,hasInputValue:j,clearInputValue:ce,isOpen:h,setIsOpen:f,toggleOpen:U,isActive:ue,setIsActive:O,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:I,isOptionFocused:ge,isOptionDisabled:t.isOptionDisabled,onFocusIn:be,onFocusOut:fe,onMouseDown:me,onClick:pe,onInput:xe,onKeyDown:we}},se=re(),S=()=>{const e=N(se);if(!e)throw new Error("No SelectContext found in ancestry.");return e},qt=e=>{const[t,n]=p(u({format:(d,s)=>d,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),l=Ue(t);return b(m(()=>n.initialValue,d=>d!==void 0&&l.setValue(d))),r(se.Provider,{value:l,get children(){return r(Ze,{get class(){return n.class},get children(){return[r(Je,{get id(){return n.id},get name(){return n.name},get format(){return n.format},get placeholder(){return n.placeholder},get autofocus(){return n.autofocus},get readonly(){return n.readonly}}),r(dt,{get loading(){return n.loading},get loadingPlaceholder(){return n.loadingPlaceholder},get emptyPlaceholder(){return n.emptyPlaceholder},get format(){return n.format}})]}})}})},Ye=a("div")`
    position: relative;
    background-color : ${o.colors.bg200};
    border-radius : ${o.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,Ze=e=>{const t=S();return r(Ye,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:n=>{t.onMouseDown(n),n.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},Ge=a("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${o.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${o.colors.bg200};
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
        border-color: ${o.colors.onBg500};
        background-color: ${o.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${o.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,Je=e=>{const t=S(),n=l=>{const d=t.value();t.setValue([...d.slice(0,l),...d.slice(l+1)])};return r(Ge,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[r(c,{get when(){return V(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return r(Xe,{get children(){return e.placeholder}})}}),r(c,{get when(){return V(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return r(tt,{get children(){return e.format(t.value(),"value")}})}}),r(c,{get when(){return t.hasValue()&&t.multiple},get children(){return r(ne,{get each(){return t.value()},children:(l,d)=>r(ot,{onRemove:()=>n(d()),get children(){return e.format(l,"value")}})})}}),r(lt,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},Qe=a("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,Xe=e=>r(Qe,{class:"solid-select-placeholder",get children(){return e.children}}),et=a("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,tt=e=>r(et,{class:"solid-select-single-value",get children(){return e.children}}),rt=a("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${o.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,nt=a("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,ot=e=>(S(),r(rt,{class:"solid-select-multi-value",get children(){return[V(()=>e.children),r(nt,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),it=a("input")`
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
`,lt=e=>{const t=S();return r(it,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:n=>{t.onKeyDown(n),n.defaultPrevented||n.key==="Escape"&&(n.preventDefault(),n.stopPropagation(),n.target.blur())},onMouseDown:n=>{n.stopPropagation()}})},at=a("div")`
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
`,X=a("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,dt=e=>{const t=S();return r(c,{get when(){return t.isOpen()},get children(){return r(at,{class:"solid-select-list",get children(){return r(c,{get when(){return!e.loading},get fallback(){return r(X,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return r(ne,{get each(){return t.options()},get fallback(){return r(X,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:n=>r(ct,{option:n,get children(){return e.format(n,"option")}})})}})}})}})},st=a("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${o.colors.bg200};
    border-radius : ${o.border.smRadius};
    color : ${o.colors.onBg200};

    &:hover {
        background-color: ${o.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${o.colors.bg400};
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

`,ct=e=>{const t=S();return r(st,{ref:l=>{b(()=>{t.isOptionFocused(e.option)&&l.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},ut=a("div")`

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

`,gt=a("div")`
  width: 100%;
`,ht=a("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function Nt(e){return r(ut,u(()=>p(e,["exposed","children"])[1],{get children(){return[r(gt,{get children(){return e.exposed()}}),r(ht,{get children(){return e.children}})]}}))}const Lt=a("div")`

  padding: 0.75em 1em;
  background: ${o.colors.bg200};

  cursor: pointer;
  user-select: none;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${o.colors.bg300};
  }

  &:active {
    background: ${o.colors.bg500};
  }

  &:first-of-type {
    border-top-left-radius: ${o.border.smRadius};
    border-top-right-radius: ${o.border.smRadius};
  }

  &:last-of-type {
    border-bottom-left-radius: ${o.border.smRadius};
    border-bottom-right-radius: ${o.border.smRadius};
  }

`,bt=y("<div>"),ft=a(L)`
    align-items: unset;
    position: absolute;
    width: max-content;
    z-index : ${B.DropdownMenu};
`;function jt(e){return[r(ft,u(()=>p(e,["onCloseRequest","isVisible"])[1],{get style(){return ie(e.style,e.isVisible)},get children(){return e.children}})),r(te,{get children(){const t=k(bt);return W(t,u(()=>le(e.onCloseRequest),{get style(){return{width:"100%",height:"100%",position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":B.DropdownBackdrop,...e.isVisible?{display:e.isVisible()?"block":"none"}:{}}}}),!1,!1),q(),t}})]}const mt=a("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,ee=a("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: ${B.FixedSidebar};

    display: none;

    ${o.breakpoints.up("md")} {
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
    z-index : ${B.FixedSidebar};
    //background: red;
`,pt=a("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,xt=a("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    position : fixed;
    z-index: ${B.FixedTopBar};
    //background: blue;
`,wt=a("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,vt=a("div",{shouldForwardProp:e=>e!="hideAboveBreakpoint"})`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function Kt(e){const t=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,n=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,l=e.drawerWidth||"280px",d=e.oppositeDrawerWidth||"280px",s=e.topBar!=null?e.topBarHeight||"56px":"0px";return r(mt,{get children(){return[r(c,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return r(ee,{drawerWidth:l,topBarHeight:s,get children(){return r(H,{drawerWidth:l,topBarHeight:s,style:{left:0},get children(){return e.drawerContent()}})}})}}),r(pt,{get children(){return[r(c,{get when(){return e.topBar!=null},get children(){return r(xt,{topBarHeight:s,get children(){return e.topBar()}})}}),r(wt,{topBarHeight:s,get children(){return e.children}})]}}),r(c,{get when(){return e.oppositeDrawerContent!=null},get children(){return r(ee,{drawerWidth:d,topBarHeight:s,get children(){return r(H,{drawerWidth:d,topBarHeight:s,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),r(c,{get when(){return t!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return r(ae,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},get style(){return{"z-index":B.MobileDrawer}},relative:!0,get children(){return r(vt,{get hideAboveBreakpoint(){return V(()=>e.hideMobileDrawerAbove!=null)()?o.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:n?{right:0}:{left:0},get children(){return r(H,{drawerWidth:l,topBarHeight:s,get style(){return{background:o.colors.bg100,"border-top-right-radius":o.border.mdRadius,"border-bottom-right-radius":o.border.mdRadius,...n?{right:0}:{left:0}}},get children(){return t()}})}})}})}})]}})}const kt=a("div")`
    display: flex;
    flex-direction: row;
    background: ${o.colors.bg200};
    border-radius: ${o.border.smRadius};
`,Ut=kt,yt=a("div")`

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
        border-bottom: 3px solid ${o.colors.primary};
        color: ${o.colors.primary};
    }

`;function Yt(e){return r(yt,u({get class(){return e.isSelected?"selected":void 0},get children(){return e.children}},()=>p(e,["isSelected","children"])[1]))}export{Ft as A,Ie as C,Te as D,Ht as E,Nt as H,At as L,Lt as M,Kt as S,Ut as T,Et as a,Q as b,Ke as c,_t as d,Tt as e,jt as f,Wt as g,qt as h,Yt as i};
