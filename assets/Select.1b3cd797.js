import{g as m,i as M,t as g,d as oe,a as W,r as le}from"./web.ab821142.js";import{H as ie,C as G}from"./index.d848d6b7.js";import{m as N,c as v,b as $,o as O,d as R,e as se,g as ce,f as ue,s as pe,a as r,S as F,F as q,h as de,u as me,i as ge}from"./solid.bd741e67.js";import{s as k,A as b}from"./Theme.6779d63b.js";import{B as he}from"./index.d2289b6b.js";import{R as fe}from"./index.a758e2ee.js";const be=e=>{const t=N({multiple:!1,disabled:!1,optionToValue:s=>s,isOptionDisabled:s=>!1},e),n=s=>{if(t.multiple&&Array.isArray(s))return s;if(!t.multiple&&!Array.isArray(s))return s!==null?[s]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[o,a]=v(t.initialValue!==void 0?n(t.initialValue):[]),i=()=>t.multiple?o():o()[0]||null,c=s=>a(n(s)),p=()=>a([]),l=()=>!!(t.multiple?i().length:i());$(O(o,()=>t.onChange?.(i()),{defer:!0}));const[u,d]=v(""),f=()=>d(""),I=()=>!!u().length;$(O(u,s=>t.onInput?.(s),{defer:!0})),$(O(u,s=>{s&&!w()&&y(!0)},{defer:!0}));const x=typeof t.options=="function"?R(()=>t.options(u()),t.options(u())):()=>t.options,z=()=>x().length,S=s=>{if(t.isOptionDisabled(s))return;const _=t.optionToValue(s);t.multiple?c([...o(),_]):(c(_),E(!1)),y(!1)},[J,E]=v(!1),[w,y]=v(!1),B=()=>y(!w()),[T,H]=v(-1),V=()=>x()[T()],Q=s=>s===V(),L=s=>{z()||H(-1);const _=z()-1,ae=s==="next"?1:-1;let P=T()+ae;P>_&&(P=0),P<0&&(P=_),H(P)},X=()=>L("previous"),j=()=>L("next");$(O(x,s=>{w()&&H(Math.min(0,s.length-1))},{defer:!0})),$(O(()=>t.disabled,s=>{s&&w()&&y(!1)})),$(O(w,s=>{s?(T()===-1&&j(),E(!0)):(T()>-1&&H(-1),d(""))},{defer:!0})),$(O(T,s=>{s>-1&&!w()&&y(!0)},{defer:!0}));const Y=()=>E(!0),Z=()=>{E(!1),y(!1)},ee=s=>s.preventDefault(),te=s=>{!t.disabled&&!I()&&B()},ne=s=>{d(s.target.value)},re=s=>{switch(s.key){case"ArrowDown":j();break;case"ArrowUp":X();break;case"Enter":if(w()&&V()){S(V());break}return;case"Escape":if(w()){y(!1);break}return;case"Delete":case"Backspace":if(u())return;if(t.multiple){const _=i();c([..._.slice(0,-1)])}else p();break;case" ":if(u())return;w()?V()&&S(V()):y(!0);break;case"Tab":if(V()&&w()){S(V());break}return;default:return}s.preventDefault(),s.stopPropagation()};return{options:x,value:i,setValue:c,hasValue:l,clearValue:p,inputValue:u,setInputValue:d,hasInputValue:I,clearInputValue:f,isOpen:w,setIsOpen:y,toggleOpen:B,isActive:J,setIsActive:E,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:S,isOptionFocused:Q,isOptionDisabled:t.isOptionDisabled,onFocusIn:Y,onFocusOut:Z,onMouseDown:ee,onClick:te,onInput:ne,onKeyDown:re}},xe=g("<mark>"),A={NO_MATCH:0,MATCH:1,WORD_START:2,START:3},we=(e,t)=>{let n=A.NO_MATCH,o=[];if(e.length<=t.length){const a=Array.from(e.toLocaleLowerCase()),i=Array.from(t.toLocaleLowerCase());let c=A.START;e:for(let p=0,l=0;p<a.length;p++){for(;l<i.length;)if(i[l]===a[p]){o[l]=!0,c===A.MATCH&&i[l-1]===" "&&i[l]!==" "&&(c=A.WORD_START),n+=c,c++,l++;continue e}else c=A.MATCH,l++;n=A.NO_MATCH,o.length=0}}return{target:t,score:n,matches:o}},ve=(e,t=n=>(()=>{const o=m(xe);return M(o,n),o})())=>{const n=e.target,o=e.matches,a="\0",i=[];let c=!1;for(let p=0;p<n.length;p++){const l=n[p],u=o[p];!c&&u?(i.push(a),c=!0):c&&!u&&(i.push(a),c=!1),i.push(l)}return c&&(i.push(a),c=!1),R(()=>i.join("").split(a).map((p,l)=>l%2?t(p):p))},ke=(e,t,n)=>{const o=[];for(let a=0;a<t.length;a++){const i=t[a],c=n?i[n]:i,p=we(e,c);p.score&&o.push({...p,item:i,index:a})}return o.sort((a,i)=>{let c=i.score-a.score;return c===0&&(c=a.index-i.index),c}),o},ye=g("<mark>"),C=(e,t)=>{const n=Object.assign({filterable:!0,disable:()=>!1},t||{}),o=l=>n?.key!==void 0?l[n.key]:l;return{options:l=>{let d=(typeof e=="function"?e(l):e).map(f=>({label:o(f),value:f,disabled:n.disable(f)}));if(n.filterable&&l&&(d=ke(l,d,"label").map(f=>({...f.item,label:ve(f)}))),n.createable!==void 0){const f=l.trim(),I=d.some(x=>$e(l,o(x.value)));if(f&&!I){let x;typeof n.createable=="function"?x=n.createable(f):x=n.key?{[n.key]:f}:f;const z={label:["Create ",(()=>{const S=m(ye);return M(S,()=>o(x)),S})()],value:x,disabled:!1};d=[...d,z]}}return d},optionToValue:l=>l.value,isOptionDisabled:l=>l.disabled,format:(l,u)=>u==="option"?l.label:o(l)}},$e=(e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})===0,Oe=(e,t=250)=>{const[n,o]=v(""),a=Ce(e,t),[i]=se(n,a,{initialValue:[]});return{get options(){return i()},get loading(){return i.loading},onInput:o,readonly:!1}},Ce=(e,t)=>{let n=null,o,a;const i=()=>new Promise(l=>o=setTimeout(l,t)),c=(...l)=>(a=l,n||(n=i().then(()=>(n=null,e(...a))),n)),p=()=>{clearTimeout(o),n=null};return ce()&&ue(p),Object.assign(c,{clear:p})},U=de(),D=()=>{const e=me(U);if(!e)throw new Error("No SelectContext found in ancestry.");return e},h=e=>{const[t,n]=pe(N({format:(a,i)=>a,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),o=be(t);return $(O(()=>n.initialValue,a=>a!==void 0&&o.setValue(a))),r(U.Provider,{value:o,get children(){return r(Ve,{get class(){return n.class},get children(){return[r(Ie,{get id(){return n.id},get name(){return n.name},get format(){return n.format},get placeholder(){return n.placeholder},get autofocus(){return n.autofocus},get readonly(){return n.readonly}}),r(He,{get loading(){return n.loading},get loadingPlaceholder(){return n.loadingPlaceholder},get emptyPlaceholder(){return n.emptyPlaceholder},get format(){return n.format}})]}})}})},Se=k("div")`
    position: relative;
    background-color : ${b.colors.bg200};
    border-radius : ${b.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`,Ve=e=>{const t=D();return r(Se,{get class(){return`solid-select-container${e.class!==void 0?" "+e.class:""}`},get"data-disabled"(){return t.disabled},get onFocusIn(){return t.onFocusIn},get onFocusOut(){return t.onFocusOut},onMouseDown:n=>{t.onMouseDown(n),n.currentTarget.getElementsByTagName("input")[0].focus()},get children(){return e.children}})},_e=k("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${b.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${b.colors.bg200};
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
        border-color: ${b.colors.onBg500};
        background-color: ${b.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${b.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`,Ie=e=>{const t=D(),n=o=>{const a=t.value();t.setValue([...a.slice(0,o),...a.slice(o+1)])};return r(_e,{class:"solid-select-control",get"data-multiple"(){return t.multiple},get"data-has-value"(){return t.hasValue()},get"data-disabled"(){return t.disabled},get onClick(){return t.onClick},get children(){return[r(F,{get when(){return R(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return r(De,{get children(){return e.placeholder}})}}),r(F,{get when(){return R(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return r(Te,{get children(){return e.format(t.value(),"value")}})}}),r(F,{get when(){return t.hasValue()&&t.multiple},get children(){return r(q,{get each(){return t.value()},children:(o,a)=>r(Me,{onRemove:()=>n(a()),get children(){return e.format(o,"value")}})})}}),r(Ne,{get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get readonly(){return e.readonly}})]}})},Ae=k("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`,De=e=>r(Ae,{class:"solid-select-placeholder",get children(){return e.children}}),Ee=k("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`,Te=e=>r(Ee,{class:"solid-select-single-value",get children(){return e.children}}),Pe=k("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${b.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`,Fe=k("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`,Me=e=>(D(),r(Pe,{class:"solid-select-multi-value",get children(){return[R(()=>e.children),r(Fe,{type:"button",class:"solid-select-multi-value-remove",onClick:t=>{t.stopPropagation(),e.onRemove()},children:"⨯"})]}})),Re=k("input")`
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
`,Ne=e=>{const t=D();return r(Re,{get id(){return e.id},get name(){return e.name},get"data-multiple"(){return t.multiple},get"data-is-active"(){return t.isActive()},type:"text",tabIndex:0,class:"solid-select-input",autocomplete:"off",autocapitalize:"none",get autofocus(){return e.autofocus},get readonly(){return e.readonly},get disabled(){return t.disabled},size:1,get value(){return t.inputValue()},get onInput(){return t.onInput},onKeyDown:n=>{t.onKeyDown(n),n.defaultPrevented||n.key==="Escape"&&(n.preventDefault(),n.stopPropagation(),n.target.blur())},onMouseDown:n=>{n.stopPropagation()}})},ze=k("div")`
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
`,K=k("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`,He=e=>{const t=D();return r(F,{get when(){return t.isOpen()},get children(){return r(ze,{class:"solid-select-list",get children(){return r(F,{get when(){return!e.loading},get fallback(){return r(K,{class:"solid-select-list-placeholder",get children(){return e.loadingPlaceholder}})},get children(){return r(q,{get each(){return t.options()},get fallback(){return r(K,{class:"solid-select-list-placeholder",get children(){return e.emptyPlaceholder}})},children:n=>r(Be,{option:n,get children(){return e.format(n,"option")}})})}})}})}})},qe=k("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${b.colors.bg200};
    border-radius : ${b.border.smRadius};
    color : ${b.colors.onBg200};

    &:hover {
        background-color: ${b.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${b.colors.bg400};
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

`,Be=e=>{const t=D();return r(qe,{ref:o=>{$(()=>{t.isOptionFocused(e.option)&&o.scrollIntoView({block:"nearest"})})},get"data-disabled"(){return t.isOptionDisabled(e.option)},get"data-focused"(){return t.isOptionFocused(e.option)},onClick:()=>t.pickOption(e.option),class:"solid-select-option",get children(){return e.children}})},Le=g('<div class="flex flex-1 flex-col max-w-100 gap-3"><!#><!/><div class="text-sm">Current value: <!#><!/>'),je=g('<button class="primary-button">Reset'),We=g('<span class="text-sm uppercase">'),Ke=g("<span>Quick pick:"),Ge=g("<h1>Examples"),Ue=g("<h2>Static"),Je=g("<h2>Disabled"),Qe=g("<h2>Reactive"),Xe=g("<h2>Format"),Ye=g("<h2>Reset"),Ze=g("<h2>Async"),et=g("<h2>Filterable"),tt=g("<h2>Filterable (Objects)"),nt=g("<h2>Creatable"),rt=g("<h2>Creatable (Objects)"),at=g("<h2>Multiple"),ot=g("<h2>Multiple Filterable"),lt=g("<h2>Multiple Creatable"),it=g("<h2>Disabled Options"),st=g("<h2>Grouping"),ct=g("<h2>Auto Scroll"),ut=g("<h2>Kitchen Sink"),pt=()=>{const e={fruit:["apple","banana","pear","pineapple","kiwi"],starwars:["jedi","sith","stormtrooper","luke","leia"]},[t,n]=v("fruit");return r(h,{get options(){return e[t()]},onChange:()=>n(t()==="fruit"?"starwars":"fruit")})},dt=()=>{const e=[{name:"apple",label:"🍏 Apple"},{name:"banana",label:"🍌 Banana"},{name:"pear",label:"🍐 Pear"},{name:"pineapple",label:"🍍 Pineappe"},{name:"kiwi",label:"🥝 Kiwi"}],t=(a,i)=>i==="option"?a.label:a.name,[n,o]=v(null);return(()=>{const a=m(Le),i=a.firstChild,[c,p]=W(i.nextSibling),l=c.nextSibling,u=l.firstChild,d=u.nextSibling,[f,I]=W(d.nextSibling);return M(a,r(h,{options:e,format:t,onChange:o}),c,p),M(l,()=>JSON.stringify(n()),f,I),a})()},mt=()=>{const[e,t]=v(null,{equals:!1});return[r(h,{get initialValue(){return e()},options:["apple","banana","pear","pineapple","kiwi"]}),(()=>{const n=m(je);return n.$$click=()=>t(null),le(),n})()]},gt=async e=>await new Promise(t=>{setTimeout(()=>t(["apple","banana","pear","pineapple","kiwi"].filter(n=>n.startsWith(e))),2e3)}),ht=()=>{const e=Oe(gt);return r(h,e)},ft=()=>{const e=C(["apple","banana","pear","pineapple","kiwi"]);return r(h,e)},bt=()=>{const e=C([{name:"apple"},{name:"banana"},{name:"pear"},{name:"pineapple"},{name:"kiwi"}],{key:"name"});return r(h,e)},xt=()=>{const e=C(["apple","banana","pear","pineapple","kiwi"],{createable:!0});return r(h,e)},wt=()=>{const e=C([{name:"apple"},{name:"banana"},{name:"pear"},{name:"pineapple"},{name:"kiwi"}],{key:"name",createable:!0});return r(h,e)},vt=()=>r(h,{multiple:!0,options:["apple","banana","pear","pineapple","kiwi"]}),kt=()=>{const e=C(["apple","banana","pear","pineapple","kiwi"]);return r(h,N({multiple:!0},e))},yt=()=>{const e=C(["apple","banana","pear","pineapple","kiwi"],{createable:!0});return r(h,N({multiple:!0},e))},$t=()=>r(h,{options:["apple","banana","pear","pineapple","kiwi"],isOptionDisabled:e=>e==="pear"}),Ot=e=>{const t=e.reduce((a,i)=>(a.push(...i.options.map(c=>({...c,group:i.name}))),a),[]),n=C(t,{key:"name"}),o=n.options;return n.options=a=>{const c=o(a).reduce((l,u)=>{const d=u.value.group;return l.has(d)||l.set(d,[]),l.get(d).push(u),l},new Map),p=[];for(const[l,u]of c.entries())p.push({label:(()=>{const d=m(We);return M(d,l),d})(),value:l,disabled:!0}),p.push(...u);return p},n},Ct=()=>{const e=Ot([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return r(h,e)},St=()=>r(h,{get options(){return[...Array(50).keys()]}}),Vt=()=>{const e=u=>({id:ge(),name:u}),t=[e("apple"),e("banana"),e("pear"),e("pineapple"),e("kiwi")],n=[t[2]],[o,a]=v(t),[i,c]=v(n),p=u=>{c(u);const d=u[u.length-1];d&&!o().includes(d)&&a([...o(),d])},l=C(o,{key:"name",disable:u=>i().includes(u),filterable:!0,createable:e});return r(G,{gap:"0.5em",get children(){return[r(h,N({multiple:!0,get initialValue(){return i()},onChange:p},l)),r(fe,{gap:"0.5em",get children(){return[m(Ke),r(q,{get each(){return o().filter(u=>!i().includes(u)).slice(0,3)},children:u=>r(he,{onClick:()=>c([...i(),u]),get children(){return u.name}})})]}})]}})};function Pt(){return r(G,{get children(){return[r(ie,{children:"Select"}),m(Ge),m(Ue),r(h,{options:["apple","banana","pear","pineapple","kiwi"]}),m(Je),r(h,{disabled:!0,options:["apple","banana","pear","pineapple","kiwi"]}),m(Qe),r(pt,{}),m(Xe),r(dt,{}),m(Ye),r(mt,{}),m(Ze),r(ht,{}),m(et),r(ft,{}),m(tt),r(bt,{}),m(nt),r(xt,{}),m(rt),r(wt,{}),m(at),r(vt,{}),m(ot),r(kt,{}),m(lt),r(yt,{}),m(it),r($t,{}),m(st),r(Ct,{}),m(ct),r(St,{}),m(ut),r(Vt,{})]}})}oe(["click"]);export{Pt as default};
