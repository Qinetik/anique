import{b as g,l as w,c as t,g as f,S as $,f as _,a as v,i as S,F as T,t as h}from"./entry-client-3af6d313.js";import{s as I}from"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{a as D}from"./index-1830aefe.js";import"./index-6d8184a4.js";import{C as E}from"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import{H as k}from"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import{R as q}from"./index-f7946e34.js";import"./index-68b47e9b.js";import{S as z}from"./index-7ed7999b.js";import"./index-7355db2b.js";import{B as F}from"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import{D as L}from"./DocContainer-7741f713.js";import{D as x}from"./DisplayCode-4104d5fd.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";import"./Menu-0cea71b1.js";import"./AniqueThemes-a471672f.js";import"./createGlobalStyle-ac00ca6c.js";const M=h("<small>"),N=h("<p>Anique has a library for icons called mdi, You can install it using"),O=h("<h2>Search <!$><!/> icons"),R=I("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    box-sizing: border-box;
    padding: 1em 0;
`,A=I(D)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
`,B=I("img")`
    width: 2.5rem;
    height: 2.5rem;

    .dark & {
        filter: invert();
    }

`;function H(s){const c=s.icon.substring(0,s.icon.lastIndexOf("Icon")).replace(/[A-Z]/g,(r,o)=>(o>0?"-":"")+r.toLowerCase());let n;return t(A,{ref(r){const o=n;typeof o=="function"?o(r):n=r},get children(){return[t(B,{loading:"lazy",src:`https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/${c}.svg`,alt:c,onError:()=>{n&&(n.style.display="none")}}),(()=>{const r=f(M);return S(r,()=>s.icon),r})()]}})}let l=[];function Se(){const[s,c]=g(""),[n,r]=g([]),[o,y]=g(null);w(()=>{fetch("/anique/api/icons").then(e=>e.text()).then(e=>{const i="|||IconsStart|||";l=e.substring(e.indexOf(i)+i.length,e.lastIndexOf("|||IconsEnd|||")).split(","),r(l)}).catch(e=>y(e))});let p=!0;function C(e){e===""&&r(l);let i=[],d=e.toLowerCase();for(let a=0;a<l.length;a++)if(p){let m=l[a];m.toLowerCase().includes(d)&&i.push(m)}else return;r(i)}let u;function b(e){p=!1,u&&clearTimeout(u),u=setTimeout(()=>{p=!0,C(e)},100)}return t(L,{get children(){return t(E,{gap:"0.5em",get children(){return[t(k,{children:"Icons"}),f(N),t(q,{gap:"0.75em",get children(){return[t(x,{value:"npm i @qinetik/mdi"}),t(x,{value:"yarn add @qinetik/mdi"})]}}),t($,{get when(){return _(()=>n().length==0)()&&o()==null},get children(){return t(z,{})}}),(()=>{const e=f(O),i=e.firstChild,d=i.nextSibling,[a,m]=v(d.nextSibling);return a.nextSibling,e.style.setProperty("margin","0"),S(e,()=>n().length,a,m),e})(),t(F,{style:{width:"100%"},get value(){return s()},onInput:e=>{c(e.currentTarget.value),b(e.currentTarget.value)},placeholder:"Search..."}),t(R,{get children(){return t(T,{get each(){return n()},children:e=>t(H,{icon:e})})}})]}})}})}export{Se as default};
