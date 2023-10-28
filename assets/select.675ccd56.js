import{s as c,A as l}from"./index.3b4915b3.js";import{m as E,a as y,d,j as p,b as D,s as X,c as n,S as k,F as M,k as Y,l as Z}from"./solid.a8f4da40.js";const ee=c("button")`

    box-sizing: border-box;
    padding: ${t=>.8+(t.size?t.size*.25:0)}em ${t=>.8+(t.size?t.size*.5:0)}em;
    background: ${l.colors.primary};
    border-radius: ${l.border.lgRadius};
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:disabled {
        background : ${l.colors.bg500};
    }
    
    &:hover:not(&:disabled) {
        background: ${l.colors.primary100};
    }

    &:active:not(&:disabled) {
        background: ${l.colors.primary200};
    }

`,ye=ee,te=t=>{const e=E({multiple:!1,disabled:!1,optionToValue:r=>r,isOptionDisabled:r=>!1},t),o=r=>{if(e.multiple&&Array.isArray(r))return r;if(!e.multiple&&!Array.isArray(r))return r!==null?[r]:[];throw new Error(`Incompatible value type for ${e.multiple?"multple":"single"} select.`)},[i,a]=y(e.initialValue!==void 0?o(e.initialValue):[]),m=()=>e.multiple?i():i()[0]||null,V=r=>a(o(r)),$=()=>a([]),R=()=>!!(e.multiple?m().length:m());d(p(i,()=>e.onChange?.(m()),{defer:!0}));const[g,S]=y(""),L=()=>S(""),P=()=>!!g().length;d(p(g,r=>e.onInput?.(r),{defer:!0})),d(p(g,r=>{r&&!s()&&u(!0)},{defer:!0}));const O=typeof e.options=="function"?D(()=>e.options(g()),e.options(g())):()=>e.options,F=()=>O().length,I=r=>{if(e.isOptionDisabled(r))return;const h=e.optionToValue(r);e.multiple?V([...i(),h]):(V(h),v(!1)),u(!1)},[N,v]=y(!1),[s,u]=y(!1),A=()=>u(!s()),[w,C]=y(-1),f=()=>O()[w()],W=r=>r===f(),z=r=>{F()||C(-1);const h=F()-1,Q=r==="next"?1:-1;let x=w()+Q;x>h&&(x=0),x<0&&(x=h),C(x)},K=()=>z("previous"),B=()=>z("next");d(p(O,r=>{s()&&C(Math.min(0,r.length-1))},{defer:!0})),d(p(()=>e.disabled,r=>{r&&s()&&u(!1)})),d(p(s,r=>{r?(w()===-1&&B(),v(!0)):(w()>-1&&C(-1),S(""))},{defer:!0})),d(p(w,r=>{r>-1&&!s()&&u(!0)},{defer:!0}));const _=()=>v(!0),j=()=>{v(!1),u(!1)},U=r=>r.preventDefault(),G=r=>{!e.disabled&&!P()&&A()},H=r=>{S(r.target.value)},J=r=>{switch(r.key){case"ArrowDown":B();break;case"ArrowUp":K();break;case"Enter":if(s()&&f()){I(f());break}return;case"Escape":if(s()){u(!1);break}return;case"Delete":case"Backspace":if(g())return;if(e.multiple){const h=m();V([...h.slice(0,-1)])}else $();break;case" ":if(g())return;s()?f()&&I(f()):u(!0);break;case"Tab":if(f()&&s()){I(f());break}return;default:return}r.preventDefault(),r.stopPropagation()};return{options:O,value:m,setValue:V,hasValue:R,clearValue:$,inputValue:g,setInputValue:S,hasInputValue:P,clearInputValue:L,isOpen:s,setIsOpen:u,toggleOpen:A,isActive:N,setIsActive:v,get multiple(){return e.multiple},get disabled(){return e.disabled},pickOption:I,isOptionFocused:W,isOptionDisabled:e.isOptionDisabled,onFocusIn:_,onFocusOut:j,onMouseDown:U,onClick:G,onInput:H,onKeyDown:J}},q=Y(),b=()=>{const t=Z(q);if(!t)throw new Error("No SelectContext found in ancestry.");return t},ke=t=>{const[e,o]=X(E({format:(a,m)=>a,placeholder:"Select...",readonly:typeof t.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},t),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),i=te(e);return d(p(()=>o.initialValue,a=>a!==void 0&&i.setValue(a))),n(q.Provider,{value:i,get children(){return n(oe,{get class(){return o.class},get children(){return[n(le,{get id(){return o.id},get name(){return o.name},get format(){return o.format},get placeholder(){return o.placeholder},get autofocus(){return o.autofocus},get readonly(){return o.readonly}}),n(me,{get loading(){return o.loading},get loadingPlaceholder(){return o.loadingPlaceholder},get emptyPlaceholder(){return o.emptyPlaceholder},get format(){return o.format}})]}})}})},re=c("div")`
    position: relative;
    background-color : ${l.colors.bg200};
    border-radius : ${l.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,oe=t=>{const e=b();return n(re,{get class(){return`solid-select-container${t.class!==void 0?" "+t.class:""}`},get"data-disabled"(){return e.disabled},get onFocusIn(){return e.onFocusIn},get onFocusOut(){return e.onFocusOut},onMouseDown:o=>{e.onMouseDown(o),o.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return t.children}})},ne=c("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${l.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${l.colors.bg200};
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
        border-color: ${l.colors.onBg500};
        background-color: ${l.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${l.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,le=t=>{const e=b(),o=i=>{const a=e.value();e.setValue([...a.slice(0,i),...a.slice(i+1)])};return n(ne,{class:"solid-select-control",get"data-multiple"(){return e.multiple},get"data-has-value"(){return e.hasValue()},get"data-disabled"(){return e.disabled},get onClick(){return e.onClick},get children(){return[n(k,{get when(){return D(()=>!e.hasValue())()&&!e.hasInputValue()},get children(){return n(ae,{get children(){return t.placeholder}})}}),n(k,{get when(){return D(()=>!!(e.hasValue()&&!e.multiple))()&&!e.hasInputValue()},get children(){return n(ce,{get children(){return t.format(e.value(),"value")}})}}),n(k,{get when(){return e.hasValue()&&e.multiple},get children(){return n(M,{get each(){return e.value()},children:(i,a)=>n(ge,{onRemove:()=>o(a()),get children(){return t.format(i,"value")}})})}}),n(fe,{get id(){return t.id},get name(){return t.name},get autofocus(){return t.autofocus},get readonly(){return t.readonly}})]}})},ie=c("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,ae=t=>n(ie,{class:"solid-select-placeholder",get children(){return t.children}}),se=c("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,ce=t=>n(se,{class:"solid-select-single-value",get children(){return t.children}}),ue=c("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${l.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,de=c("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,ge=t=>(b(),n(ue,{class:"solid-select-multi-value",get children(){return[D(()=>t.children),n(de,{type:"button",class:"solid-select-multi-value-remove",onClick:e=>{e.stopPropagation(),t.onRemove()},children:"⨯"})]}})),pe=c("input")`
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
`,fe=t=>{const e=b();return n(pe,{get id(){return t.id},get name(){return t.name},get"data-multiple"(){return e.multiple},get"data-is-active"(){return e.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return t.autofocus},get readonly(){return t.readonly},get disabled(){return e.disabled},size:1,get value(){return e.inputValue()},get onInput(){return e.onInput},onKeyDown:o=>{e.onKeyDown(o),o.defaultPrevented||o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),o.target.blur())},onMouseDown:o=>{o.stopPropagation()}})},he=c("div")`
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
`,T=c("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,me=t=>{const e=b();return n(k,{get when(){return e.isOpen()},get children(){return n(he,{class:"solid-select-list",get children(){return n(k,{get when(){return!t.loading},get fallback(){return n(T,{class:"solid-select-list-placeholder",get children(){return t.loadingPlaceholder}})},get children(){return n(M,{get each(){return e.options()},get fallback(){return n(T,{class:"solid-select-list-placeholder",get children(){return t.emptyPlaceholder}})},children:o=>n(ve,{option:o,get children(){return t.format(o,"option")}})})}})}})}})},be=c("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${l.colors.bg200};
    border-radius : ${l.border.smRadius};
    color : ${l.colors.onBg200};

    &:hover {
        background-color: ${l.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${l.colors.bg400};
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

`,ve=t=>{const e=b();return n(be,{ref:i=>{d(()=>{e.isOptionFocused(t.option)&&i.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return e.isOptionDisabled(t.option)},get"data-focused"(){return e.isOptionFocused(t.option)},onClick:()=>e.pickOption(t.option),class:"solid-select-option",get children(){return t.children}})};export{ye as B,ke as S};
