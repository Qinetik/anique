import{c as r,m as g,k,l as ke,o as X,n as b,g as x,j as F,r as M,t as w,P as Y,S as c,i as D,d as ee,u as T,p as te,b as V,a as ye,f as O,e as ne,q as $e,v,F as re,s as De}from"./entry-client-fa648c77.js";import{s}from"./index-5be97176.js";import{I as Ce}from"./index-906196f8.js";import{A as i}from"./Theme-c9d85115.js";import{u as Ve,v as Oe}from"./index-a3de9b85.js";import{c as W}from"./css-6ecff688.js";import{C as oe}from"./index-eba976b2.js";import{A as B}from"./index-eaf0e709.js";import{R as Z}from"./index-5056258d.js";import{I as Be}from"./index-a4a13cad.js";const Pe=w("<div>"),Se=s("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    &:after {
        content: "";
        background: ${i.colors.bg};
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

`;function ie(e,t){return t==null?e:typeof e>"u"?t()?"display:block;":"display:none;":typeof e=="string"?(t()?"display:block;":"display:none;")+e:{display:t()?"block":"none",...e}}function Re(e){return r(Se,g({get style(){return ie(e.style,e.isVisible)}},()=>k(e,["isVisible","style"])[1]))}function G(e){return e.currentTarget===e.target||!e.currentTarget.contains(e.target)}function Ee(e){let t=!1;return{onMouseDown:n=>{t=G(n)},onMouseUp:n=>{const o=G(n);t&&o&&(n.stopImmediatePropagation(),e()),t=!1}}}function le(e,t){const n=()=>e()&&e().ownerDocument||document;function o(l){const d=e(),u=n();if(d){let m;l.composedPath?m=l.composedPath().indexOf(d)>-1:m=!u.documentElement.contains(l.target)||d.contains(l.target),m||t(l)}}return[o,n]}function Me(e,t,n){{const[o,l]=le(e,t);ke(()=>{l().addEventListener(n||"click",o)}),X(()=>{l().removeEventListener(n||"click",o)})}}function Ie(e,t,n,o){{const[l,d]=le(e,t);b(()=>{n()?d().addEventListener(o||"click",l):d().removeEventListener(o||"click",l)})}}function Ae(e,t,n,o){n?Ie(e,t,n,o):Me(e,t,o)}function _e(e){const t=e.flex!=null?{display:"flex","flex-direction":e.flex,"justify-content":"center","align-items":"center"}:e.relative?{position:"relative"}:{};return(()=>{const n=x(Pe);return F(n,g(()=>Ee(e.onClickOutside),{get children(){return e.children},get style(){return{width:"100%",height:"100%",...t}}}),!1,!1),M(),n})()}function ae(e){return r(Re,g(()=>k(e,["children","onClickOutside","flex","relative"])[1],{get children(){return r(_e,{get children(){return e.children},get onClickOutside(){return e.onClickOutside},get flex(){return e.flex||(e.relative?void 0:"column")},get relative(){return e.relative}})}}))}const Fe=w("<h3>"),He=w("<div>"),ze={children:()=>[],onBorn:()=>0,onDied:()=>0},q=ee(ze);function se(e,t,n){let o=[];const l={id:t,children:()=>o,onBorn:u=>{o=[...o,u],n&&console.log("[DialogDebugEvent:ChildBorn] TotalChildren",o.length)},onDied:u=>{o=o.filter(m=>m!==u),n&&console.log("[DialogDebugEvent:ChildDied] TotalChildren",o.length)}};let d=T(q);return b(()=>{e==null||e()?(d.onBorn(l),n&&console.log("[DialogDebugEvent:NotifiedParent] Born (Effect:Visibility)")):(d.onDied(l),n&&console.log("[DialogDebugEvent:NotifiedParent] Died (Effect:Visibility)"))}),X(()=>{d.onDied(l),n&&console.log("[DialogDebugEvent:NotifiedParent] Died (Cleanup)")}),l}function Te(e){const t=se(e.isVisible,e.id,e.debugLog);return r(Y,{get children(){return r(q.Provider,{value:t,get children(){return r(ae,{get isVisible(){return e.isVisible},onClickOutside:()=>{t.children().length==0?e.onCloseRequest(t):e.debugLog&&console.log("[DialogDebugEvent:ClickedOutside] Avoided Dismiss")},get children(){return e.children},get flex(){return e.flex},get relative(){return e.relative}})}})}})}const We=s(oe)`
    background: ${i.colors.bg200};
    padding: 1em;
    border-radius: ${i.border.lgRadius};
`;function qe(e){const t=T(q);return r(Be,{style:{"margin-left":"auto"},onClick:()=>e.onCloseRequest(t),size:.5,get children(){return r(Ve,{})}})}function zt(e){return r(Te,{get isVisible(){return e.isVisible},get onCloseRequest(){return e.onCloseRequest},get children(){return r(We,{gap:"1em",get children(){return[r(c,{get when(){return e.title!=null},get children(){return r(Z,{gap:"0.5em",style:{width:"100%"},get children(){return[r(c,{get when(){return e.title!=null},get children(){return[r(c,{get when(){return typeof e.title=="string"},get children(){const t=x(Fe);return t.style.setProperty("flex","1"),t.style.setProperty("margin","0"),D(t,()=>e.title),t}}),r(c,{get when(){return typeof e.title!="string"},get children(){return e.title}})]}}),r(c,{get when(){return e.closeIcon==null?!0:e.closeIcon},get children(){return r(qe,{get onCloseRequest(){return e.onCloseRequest}})}})]}})}}),(()=>{const t=x(He);return D(t,()=>e.content),t})(),r(c,{get when(){return e.actions!=null},get children(){return r(Z,{gap:"0.5em",style:{"align-self":"flex-end"},get children(){return e.actions}})}})]}})}})}const Ne=w("<div><div><div></div><!$><!/></div><div>"),Le=w("<div class=exposed>"),je=w("<div class=content>"),Ke=W`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;

    background: ${i.colors.bg200};
    padding: 1.25em;
    gap: 0.5em;
    box-sizing: border-box;
    border-radius: ${i.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

    & .icon {
        transition: rotate 500ms;
    }

    &.expanded .icon {
        rotate: 180deg;
    }

`,Ue=W`
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
`;function Tt(e){let t=e.expanded,n=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const o=V(e.defaultExpanded??!0);t=o[0],n=o[1]}return(()=>{const o=x(Ne),l=o.firstChild,d=l.firstChild,u=d.nextSibling,[m,H]=ye(u.nextSibling),h=l.nextSibling;return F(o,g(()=>k(e,["title","children","class","defaultExpanded"])[1],{get class(){return Ke()+(t()?" expanded":"")+(e.class?" "+e.class:"")}}),!1,!0),l.$$click=()=>n(!t()),D(d,()=>e.title),D(l,(()=>{const C=O(()=>!!(e.showIcon??!0));return()=>C()&&r(Ce,{class:"icon",get children(){return r(Oe,{})}})})(),m,H),h.style.setProperty("overflow","hidden"),D(h,()=>e.children),ne(()=>$e(l,Ue())),M(),o})()}const Ze=s("div",{shouldForwardProp:e=>e!="timeMillis"})`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows ${e=>e.timeMillis||500}ms;

    box-sizing: border-box;
    border-radius: ${i.border.smRadius};

    & .content {
        overflow: hidden;
    }

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

`;function Wt(e){return r(Ze,g(()=>k(e,["exposed","children"])[1],{get children(){return[(()=>{const t=x(Le);return D(t,()=>e.exposed),t})(),(()=>{const t=x(je);return D(t,()=>e.children),t})()]}}))}te(["click"]);const Ge=s("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${i.colors.onBg100};
    border-radius: ${i.border.mdRadius};
    background: ${e=>i.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`,qt=s(Ge)`

    cursor: pointer;

    &:hover {
        background: ${e=>i.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>i.colors[(e.variation||"bg")+"400"]};
    }

`,Nt=s("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${i.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${i.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${i.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${i.colors.onBg500};
    }

`,Je=e=>{const t=g({multiple:!1,disabled:!1,optionToValue:a=>a,isOptionDisabled:a=>!1},e),n=a=>{if(t.multiple&&Array.isArray(a))return a;if(!t.multiple&&!Array.isArray(a))return a!==null?[a]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[o,l]=V(t.initialValue!==void 0?n(t.initialValue):[]),d=()=>t.multiple?o():o()[0]||null,u=a=>l(n(a)),m=()=>l([]),H=()=>!!(t.multiple?d().length:d());b(v(o,()=>t.onChange?.(d()),{defer:!0}));const[h,C]=V(""),ce=()=>C(""),N=()=>!!h().length;b(v(h,a=>t.onInput?.(a),{defer:!0})),b(v(h,a=>{a&&!f()&&p(!0)},{defer:!0}));const I=typeof t.options=="function"?O(()=>t.options(h()),t.options(h())):()=>t.options,L=()=>I().length,A=a=>{if(t.isOptionDisabled(a))return;const $=t.optionToValue(a);t.multiple?u([...o(),$]):(u($),S(!1)),p(!1)},[ue,S]=V(!1),[f,p]=V(!1),j=()=>p(!f()),[R,_]=V(-1),y=()=>I()[R()],ge=a=>a===y(),K=a=>{L()||_(-1);const $=L()-1,ve=a==="next"?1:-1;let E=R()+ve;E>$&&(E=0),E<0&&(E=$),_(E)},he=()=>K("previous"),U=()=>K("next");b(v(I,a=>{f()&&_(Math.min(0,a.length-1))},{defer:!0})),b(v(()=>t.disabled,a=>{a&&f()&&p(!1)})),b(v(f,a=>{a?(R()===-1&&U(),S(!0)):(R()>-1&&_(-1),C(""))},{defer:!0})),b(v(R,a=>{a>-1&&!f()&&p(!0)},{defer:!0}));const fe=()=>S(!0),be=()=>{S(!1),p(!1)},me=a=>a.preventDefault(),pe=a=>{!t.disabled&&!N()&&j()},xe=a=>{C(a.target.value)},we=a=>{switch(a.key){case"ArrowDown":U();break;case"ArrowUp":he();break;case"Enter":if(f()&&y()){A(y());break}return;case"Escape":if(f()){p(!1);break}return;case"Delete":case"Backspace":if(h())return;if(t.multiple){const $=d();u([...$.slice(0,-1)])}else m();break;case" ":if(h())return;f()?y()&&A(y()):p(!0);break;case"Tab":if(y()&&f()){A(y());break}return;default:return}a.preventDefault(),a.stopPropagation()};return{options:I,value:d,setValue:u,hasValue:H,clearValue:m,inputValue:h,setInputValue:C,hasInputValue:N,clearInputValue:ce,isOpen:f,setIsOpen:p,toggleOpen:j,isActive:ue,setIsActive:S,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:A,isOptionFocused:ge,isOptionDisabled:t.isOptionDisabled,onFocusIn:fe,onFocusOut:be,onMouseDown:me,onClick:pe,onInput:xe,onKeyDown:we}},de=ee(),P=()=>{const e=T(de);if(!e)throw new Error("No SelectContext found in ancestry.");return e},Lt=e=>{const[t,n]=k(g({format:(l,d)=>l,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),o=Je(t);return b(v(()=>n.initialValue,l=>l!==void 0&&o.setValue(l))),r(de.Provider,{value:o,get children(){return r(Xe,{get class(){return n.class},get children(){return[r(et,{get id(){return n.id},get name(){return n.name},get format(){return n.format},get placeholder(){return n.placeholder},get autofocus(){return n.autofocus},get readonly(){return n.readonly}}),r(ut,{get loading(){return n.loading},get loadingPlaceholder(){return n.loadingPlaceholder},get emptyPlaceholder(){return n.emptyPlaceholder},get format(){return n.format}})]}})}})},Qe=s("div")`
    position: relative;
    background-color : ${i.colors.bg200};
    border-radius : ${i.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,Xe=e=>{const t=P();return r(Qe,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:n=>{t.onMouseDown(n),n.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},Ye=s("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${i.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${i.colors.bg200};
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
        border-color: ${i.colors.onBg500};
        background-color: ${i.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${i.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,et=e=>{const t=P(),n=o=>{const l=t.value();t.setValue([...l.slice(0,o),...l.slice(o+1)])};return r(Ye,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[r(c,{get when(){return O(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return r(nt,{get children(){return e.placeholder}})}}),r(c,{get when(){return O(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return r(ot,{get children(){return e.format(t.value(),"value")}})}}),r(c,{get when(){return t.hasValue()&&t.multiple},get children(){return r(re,{get each(){return t.value()},children:(o,l)=>r(at,{onRemove:()=>n(l()),get children(){return e.format(o,"value")}})})}}),r(dt,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},tt=s("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,nt=e=>r(tt,{class:"solid-select-placeholder",get children(){return e.children}}),rt=s("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,ot=e=>r(rt,{class:"solid-select-single-value",get children(){return e.children}}),it=s("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${i.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,lt=s("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,at=e=>(P(),r(it,{class:"solid-select-multi-value",get children(){return[O(()=>e.children),r(lt,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),st=s("input")`
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
`,dt=e=>{const t=P();return r(st,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:n=>{t.onKeyDown(n),n.defaultPrevented||n.key==="Escape"&&(n.preventDefault(),n.stopPropagation(),n.target.blur())},onMouseDown:n=>{n.stopPropagation()}})},ct=s("div")`
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
`,J=s("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,ut=e=>{const t=P();return r(c,{get when(){return t.isOpen()},get children(){return r(ct,{class:"solid-select-list",get children(){return r(c,{get when(){return!e.loading},get fallback(){return r(J,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return r(re,{get each(){return t.options()},get fallback(){return r(J,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:n=>r(ht,{option:n,get children(){return e.format(n,"option")}})})}})}})}})},gt=s("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${i.colors.bg200};
    border-radius : ${i.border.smRadius};
    color : ${i.colors.onBg200};

    &:hover {
        background-color: ${i.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${i.colors.bg400};
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

`,ht=e=>{const t=P();return r(gt,{ref:o=>{b(()=>{t.isOptionFocused(e.option)&&o.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},ft=s("div")`

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

`,bt=s("div")`
  width: 100%;
`,mt=s("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;function jt(e){return r(ft,g(()=>k(e,["exposed","children"])[1],{get children(){return[r(bt,{get children(){return e.exposed()}}),r(mt,{get children(){return e.children}})]}}))}const pt=w("<div>"),xt=e=>(()=>{const t=x(pt);return F(t,g(e,{get class(){return"anique-menu-item"+(e.class?" "+e.class:"")}}),!1,!1),M(),t})(),Kt=s(xt)`

    padding: 0.75em 1em;
    background: ${i.colors.bg200};

    cursor: pointer;
    user-select: none;

    transition: background 0.2s ease-in;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap : 0.5em;

    &:hover {
        background: ${i.colors.bg300};
    }

    &:active {
        background: ${i.colors.bg500};
    }

    &:first-of-type {
        border-top-left-radius: ${i.border.smRadius};
        border-top-right-radius: ${i.border.smRadius};
    }

    &:last-of-type {
        border-bottom-left-radius: ${i.border.smRadius};
        border-bottom-right-radius: ${i.border.smRadius};
    }

`,wt=w("<div>"),vt=s(oe)`
    align-items: unset;
    position: absolute;
    width: max-content;
    z-index: ${B.DropdownMenu};
`;function Ut(e){let t;return Ae(()=>t,n=>{e.onCloseRequest(),n.stopImmediatePropagation()},e.isVisible),se(e.isVisible,void 0,!1),[r(vt,g(()=>k(e,["onCloseRequest","isVisible"])[1],{ref(n){const o=t;typeof o=="function"?o(n):t=n},get style(){return ie(e.style,e.isVisible)},get children(){return e.children}})),r(Y,{get children(){const n=x(wt);return n.$$click=o=>{o.stopImmediatePropagation(),e.onCloseRequest()},ne(o=>De(n,{width:"100%",height:"100%",position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":B.DropdownBackdrop,...e.isVisible?{display:e.isVisible()?"block":"none"}:{}},o)),M(),n}})]}te(["click"]);const kt=s("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`,Q=s("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: ${B.FixedSidebar};

    display: none;

    ${i.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`,z=s("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
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
`,yt=s("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`,$t=s("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    position : fixed;
    z-index: ${B.FixedTopBar};
    //background: blue;
`,Dt=s("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`,Ct=s("div",{shouldForwardProp:e=>e!="hideAboveBreakpoint"})`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;function Zt(e){const t=e.mobileDrawerContent||e.drawerContent||e.oppositeDrawerContent,n=e.mobileDrawerContent==null&&e.drawerContent==null&&e.oppositeDrawerContent!=null,o=e.drawerWidth||"280px",l=e.oppositeDrawerWidth||"280px",d=e.topBar!=null?e.topBarHeight||"56px":"0px";return r(kt,g(()=>e.containerProps||{},{get children(){return[r(c,{get when(){return e.drawerContent!=null&&(e.showMountedDrawer==null||e.showMountedDrawer)},get children(){return r(Q,{drawerWidth:o,topBarHeight:d,get children(){return r(z,{drawerWidth:o,topBarHeight:d,style:{left:0},get children(){return e.drawerContent()}})}})}}),r(yt,{get children(){return[r(c,{get when(){return e.topBar!=null},get children(){return r($t,{topBarHeight:d,get children(){return e.topBar()}})}}),r(Dt,{topBarHeight:d,get children(){return e.children}})]}}),r(c,{get when(){return e.oppositeDrawerContent!=null},get children(){return r(Q,{drawerWidth:l,topBarHeight:d,get children(){return r(z,{drawerWidth:l,topBarHeight:d,style:{right:0},get children(){return e.oppositeDrawerContent()}})}})}}),r(c,{get when(){return t!=null&&e.showMobileDrawer!=null&&e.onDismissMobileDrawer!=null},get children(){return r(ae,{get isVisible(){return e.showMobileDrawer},get onClickOutside(){return e.onDismissMobileDrawer},get style(){return{"z-index":B.MobileDrawer}},relative:!0,get children(){return r(Ct,{get hideAboveBreakpoint(){return O(()=>e.hideMobileDrawerAbove!=null)()?i.breakpoints.up(e.hideMobileDrawerAbove):void 0},style:n?{right:0}:{left:0},get children(){return r(z,{drawerWidth:o,topBarHeight:d,get style(){return{background:i.colors.bg100,"border-top-right-radius":i.border.mdRadius,"border-bottom-right-radius":i.border.mdRadius,...n?{right:0}:{left:0}}},get children(){return t()}})}})}})}})]}}))}const Vt=w("<div>"),Ot=s("div")`
    display: flex;
    flex-direction: row;
    background: ${i.colors.bg200};
    border-radius: ${i.border.smRadius};
`,Gt=Ot,Bt=W`

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    cursor: pointer;

    transition: border-bottom 0.3s ease, color 0.3s ease;

    &:hover, &.selected {
        border-bottom: 3px solid ${i.colors.primary};
        color: ${i.colors.primary};
    }

`;function Jt(e){return(()=>{const t=x(Vt);return F(t,g(()=>k(e,["isSelected"])[1],{get class(){return Bt()+(e.isSelected?" selected":"")+(e.class?" "+e.class:"")}}),!1,!1),M(),t})()}export{Tt as A,Ge as C,Te as D,Wt as E,jt as H,Kt as M,Zt as S,Gt as T,qt as a,zt as b,Ut as c,Nt as d,Lt as e,Jt as f};
