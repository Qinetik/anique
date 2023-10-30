import{s as l}from"./index-bb5a5d3d.js";import{A as n}from"./Theme-c9d85115.js";import{R as A}from"./index-7a2b10b5.js";import{S as j}from"./UL-a265d12a.js";import{l as J,c as r,m as h,k as y,f,g as D,i as w,e as Q,s as be,r as X,t as V,P as me,S as c,b as C,a as fe,j as pe,n as we,p as m,q as p,F as Z,d as xe,u as ve}from"./entry-client-2fda6d46.js";import{T as E}from"./index-31fb525c.js";import{C as T}from"./index-e7aa7392.js";import{I as ye}from"./index-a88f9566.js";import{u as ke,v as $e}from"./index-50dde1b3.js";import{I as Ce}from"./index-d65ca23f.js";import{c as ee}from"./css-a2b805a8.js";const De=V("<div>"),Ve=l("div")`

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

`;function Se(e){return r(Ve,h({get style(){return f(()=>e.isVisible==null)()?e.style:f(()=>typeof e.style>"u")()?e.isVisible()?"display:block;":"display:none;":f(()=>typeof e.style=="string")()?(e.isVisible()?"display:block;":"display:none;")+e.style:{display:e.isVisible()?"block":"none",...e.style}}},()=>y(e,["isVisible","style"])[1]))}function K(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function Be(e){const t=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};let o=!1;return(()=>{const a=D(De);return a.$$mouseup=s=>{const d=K(s);o&&d&&e.onClickOutside(),o=!1},a.$$mousedown=s=>{o=K(s)},w(a,()=>e.children),Q(s=>be(a,{width:"100%",height:"100%",...t},s)),X(),a})()}function te(e){return r(Se,h(()=>y(e,["children","onClickOutside","flex","relative"])[1],{get children(){return r(Be,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}J(["mousedown","mouseup"]);const Oe=l("div")`
    border-radius: ${n.border.mdRadius};
    background: ${n.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`,Vt=l(Oe)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${n.colors.bg300};
    }
    
    &:active {
        background: ${n.colors.bg400};
    }

`,U=l("input",{shouldForwardProp:e=>e!="size"})`
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

`;function St(e){const t={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?o=>e.onChange(o.currentTarget.checked):void 0};return e.description==null?r(A,{alignment:"center",get children(){return[r(U,h({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(j,{width:"0.5em"}),r(E,{get children(){return e.label}})]}}):r(A,{alignment:"center",get children(){return[r(U,h({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},t)),r(j,{width:"0.5em"}),r(T,{get children(){return[r(E,{get children(){return e.label}}),r(E,{color:"onBg300",get children(){return e.description}})]}})]}})}const Pe=V("<h3>"),Re=V("<div>");function Ie(e){return r(me,{get children(){return r(te,{get isVisible(){return e.isVisible},get onClickOutside(){return e.onCloseRequest},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}const ze=l(T)`
    background : ${n.colors.bg200};
    padding : 1em;
    border-radius : ${n.border.lgRadius};
`;function Bt(e){return r(Ie,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return r(ze,{gap:"1em",get children(){return[r(c,{get when(){return e.title!=null},get children(){return r(A,{gap:"0.5em",style:{width:"100%"},get children(){return[r(c,{get when(){return e.title!=null},get children(){return[r(c,{get when(){return typeof e.title=="string"},get children(){const t=D(Pe);return t.style.setProperty("flex","1"),t.style.setProperty("margin","0"),w(t,()=>e.title),t}}),r(c,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),r(c,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return r(ye,{style:{"margin-left":"auto"},get onClick(){return e.onCloseRequest},size:.5,get children(){return r(ke,{})}})}})]}})}}),(()=>{const t=D(Re);return w(t,()=>e.content),t})(),r(c,{get when(){return e.actions!=null},get children(){return r(A,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const Me=V("<div><div><div></div><!$><!/></div><div>"),Ae=V("<div class=exposed>"),He=V("<div class=content>"),Ee=ee`

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

`,Fe=ee`
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
`;function Ot(e){let t=e.expanded,o=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const a=C(e.defaultExpanded??!0);t=a[0],o=a[1]}return(()=>{const a=D(Me),s=a.firstChild,d=s.firstChild,k=d.nextSibling,[R,H]=fe(k.nextSibling),u=s.nextSibling;return pe(a,h(()=>y(e,["title","children","class","defaultExpanded"])[1],{get class(){return Ee()+(t()?" expanded":"")+(e.class?" "+e.class:"")}}),!1,!0),s.$$click=()=>o(!t()),w(d,()=>e.title),w(s,(()=>{const $=f(()=>!!(e.showIcon??!0));return()=>$()&&r(Ce,{class:"icon",get children(){return r($e,{})}})})(),R,H),u.style.setProperty("overflow","hidden"),w(u,()=>e.children),Q(()=>we(s,Fe())),X(),a})()}const Te=l("div",{shouldForwardProp:e=>e!="timeMillis"})`

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

`;function Pt(e){return r(Te,h(()=>y(e,["exposed","children"])[1],{get children(){return[(()=>{const t=D(Ae);return w(t,()=>e.exposed),t})(),(()=>{const t=D(He);return w(t,()=>e.children),t})()]}}))}J(["click"]);const _e=l("div")`
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
`,Rt=l(_e)`

    cursor: pointer;

    &:hover {
        background: ${e=>n.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>n.colors[(e.variation||"bg")+"400"]};
    }

`,It=l("div")`

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

`,We=e=>{const t=h({multiple:!1,disabled:!1,optionToValue:i=>i,isOptionDisabled:i=>!1},e),o=i=>{if(t.multiple&&Array.isArray(i))return i;if(!t.multiple&&!Array.isArray(i))return i!==null?[i]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[a,s]=C(t.initialValue!==void 0?o(t.initialValue):[]),d=()=>t.multiple?a():a()[0]||null,k=i=>s(o(i)),R=()=>s([]),H=()=>!!(t.multiple?d().length:d());m(p(a,()=>t.onChange?.(d()),{defer:!0}));const[u,$]=C(""),ne=()=>$(""),_=()=>!!u().length;m(p(u,i=>t.onInput?.(i),{defer:!0})),m(p(u,i=>{i&&!g()&&b(!0)},{defer:!0}));const I=typeof t.options=="function"?f(()=>t.options(u()),t.options(u())):()=>t.options,W=()=>I().length,z=i=>{if(t.isOptionDisabled(i))return;const v=t.optionToValue(i);t.multiple?k([...a(),v]):(k(v),B(!1)),b(!1)},[oe,B]=C(!1),[g,b]=C(!1),q=()=>b(!g()),[O,M]=C(-1),x=()=>I()[O()],ie=i=>i===x(),N=i=>{W()||M(-1);const v=W()-1,he=i==="next"?1:-1;let P=O()+he;P>v&&(P=0),P<0&&(P=v),M(P)},le=()=>N("previous"),L=()=>N("next");m(p(I,i=>{g()&&M(Math.min(0,i.length-1))},{defer:!0})),m(p(()=>t.disabled,i=>{i&&g()&&b(!1)})),m(p(g,i=>{i?(O()===-1&&L(),B(!0)):(O()>-1&&M(-1),$(""))},{defer:!0})),m(p(O,i=>{i>-1&&!g()&&b(!0)},{defer:!0}));const ae=()=>B(!0),se=()=>{B(!1),b(!1)},de=i=>i.preventDefault(),ce=i=>{!t.disabled&&!_()&&q()},ue=i=>{$(i.target.value)},ge=i=>{switch(i.key){case"ArrowDown":L();break;case"ArrowUp":le();break;case"Enter":if(g()&&x()){z(x());break}return;case"Escape":if(g()){b(!1);break}return;case"Delete":case"Backspace":if(u())return;if(t.multiple){const v=d();k([...v.slice(0,-1)])}else R();break;case" ":if(u())return;g()?x()&&z(x()):b(!0);break;case"Tab":if(x()&&g()){z(x());break}return;default:return}i.preventDefault(),i.stopPropagation()};return{options:I,value:d,setValue:k,hasValue:H,clearValue:R,inputValue:u,setInputValue:$,hasInputValue:_,clearInputValue:ne,isOpen:g,setIsOpen:b,toggleOpen:q,isActive:oe,setIsActive:B,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:z,isOptionFocused:ie,isOptionDisabled:t.isOptionDisabled,onFocusIn:ae,onFocusOut:se,onMouseDown:de,onClick:ce,onInput:ue,onKeyDown:ge}},re=xe(),S=()=>{const e=ve(re);if(!e)throw new Error("No SelectContext found in ancestry.");return e},zt=e=>{const[t,o]=y(h({format:(s,d)=>s,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),a=We(t);return m(p(()=>o.initialValue,s=>s!==void 0&&a.setValue(s))),r(re.Provider,{value:a,get children(){return r(Ne,{get class(){return o.class},get children(){return[r(je,{get id(){return o.id},get name(){return o.name},get format(){return o.format},get placeholder(){return o.placeholder},get autofocus(){return o.autofocus},get readonly(){return o.readonly}}),r(rt,{get loading(){return o.loading},get loadingPlaceholder(){return o.loadingPlaceholder},get emptyPlaceholder(){return o.emptyPlaceholder},get format(){return o.format}})]}})}})},qe=l("div")`
    position: relative;
    background-color : ${n.colors.bg200};
    border-radius : ${n.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,Ne=e=>{const t=S();return r(qe,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:o=>{t.onMouseDown(o),o.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},Le=l("div")`

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

`,je=e=>{const t=S(),o=a=>{const s=t.value();t.setValue([...s.slice(0,a),...s.slice(a+1)])};return r(Le,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[r(c,{get when(){return f(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return r(Ue,{get children(){return e.placeholder}})}}),r(c,{get when(){return f(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return r(Ge,{get children(){return e.format(t.value(),"value")}})}}),r(c,{get when(){return t.hasValue()&&t.multiple},get children(){return r(Z,{get each(){return t.value()},children:(a,s)=>r(Xe,{onRemove:()=>o(s()),get children(){return e.format(a,"value")}})})}}),r(et,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},Ke=l("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,Ue=e=>r(Ke,{class:"solid-select-placeholder",get children(){return e.children}}),Ye=l("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,Ge=e=>r(Ye,{class:"solid-select-single-value",get children(){return e.children}}),Je=l("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${n.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,Qe=l("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,Xe=e=>(S(),r(Je,{class:"solid-select-multi-value",get children(){return[f(()=>e.children),r(Qe,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),Ze=l("input")`
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
`,et=e=>{const t=S();return r(Ze,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:o=>{t.onKeyDown(o),o.defaultPrevented||o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),o.target.blur())},onMouseDown:o=>{o.stopPropagation()}})},tt=l("div")`
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
`,Y=l("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,rt=e=>{const t=S();return r(c,{get when(){return t.isOpen()},get children(){return r(tt,{class:"solid-select-list",get children(){return r(c,{get when(){return!e.loading},get fallback(){return r(Y,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return r(Z,{get each(){return t.options()},get fallback(){return r(Y,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:o=>r(ot,{option:o,get children(){return e.format(o,"option")}})})}})}})}})},nt=l("div")`

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

`,ot=e=>{const t=S();return r(nt,{ref:a=>{m(()=>{t.isOptionFocused(e.option)&&a.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},it=l("div")`

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

`,lt=l("div")`
  width: 100%;
`,at=l("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function Mt(e){return r(it,h(()=>y(e,["exposed","children"])[1],{get children(){return[r(lt,{get children(){return e.exposed()}}),r(at,{get children(){return e.children}})]}}))}const At=l("div")`

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

`,Ht=l(T)`
    align-items: unset;
    position: absolute;
    width: max-content;
`,st=l("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,G=l("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
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

`,F=l("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
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
`,dt=l("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,ct=l("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    z-index: 999;
    //background: blue;
`,ut=l("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,gt=l("div",{shouldForwardProp:e=>e!="hideAboveBreakpoint"})`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function Et(e){const t=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,o=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,a=e.drawerWidth||"280px",s=e.oppositeDrawerWidth||"280px",d=e.topBar!=null?e.topBarHeight||"56px":"0px";return r(st,{get children(){return[r(c,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return r(G,{drawerWidth:a,topBarHeight:d,get children(){return r(F,{drawerWidth:a,topBarHeight:d,style:{left:0},get children(){return e.drawerContent()}})}})}}),r(dt,{get children(){return[r(c,{get when(){return e.topBar!=null},get children(){return r(ct,{style:{position:"fixed"},topBarHeight:d,get children(){return e.topBar()}})}}),r(ut,{topBarHeight:d,get children(){return e.children}})]}}),r(c,{get when(){return e.oppositeDrawerContent!=null},get children(){return r(G,{drawerWidth:s,topBarHeight:d,get children(){return r(F,{drawerWidth:s,topBarHeight:d,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),r(c,{get when(){return t!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return r(te,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},style:{"z-index":999},relative:!0,get children(){return r(gt,{get hideAboveBreakpoint(){return f(()=>e.hideMobileDrawerAbove!=null)()?n.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:o?{right:0}:{left:0},get children(){return r(F,{drawerWidth:a,topBarHeight:d,get style(){return{background:n.colors.bg100,"border-top-right-radius":n.border.mdRadius,"border-bottom-right-radius":n.border.mdRadius,...o?{right:0}:{left:0}}},get children(){return t()}})}})}})}})]}})}const ht=l("div")`
    display: flex;
    flex-direction: row;
    background: ${n.colors.bg200};
    border-radius: ${n.border.smRadius};
`,Ft=ht,bt=l("div")`

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

`;function Tt(e){return r(bt,h({get class(){return e.isSelected?"selected":void 0},get children(){return e.children}},()=>y(e,["isSelected","children"])[1]))}export{Ot as A,Oe as C,Ie as D,Pt as E,Mt as H,St as L,At as M,Et as S,Ft as T,Vt as a,U as b,_e as c,Rt as d,Bt as e,Ht as f,It as g,zt as h,Tt as i};
