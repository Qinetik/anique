import{b as g,n as w,c as t,g as f,S as $,f as _,a as v,i as S,F as T,t as h}from"./entry-client-2ac2a0bd.js";import{s as I}from"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{a as D}from"./index-1f767762.js";import"./index-2e914305.js";import{C as E}from"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import{H as k}from"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import{R as q}from"./index-a7d06282.js";import"./index-7eaad697.js";import{S as z}from"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import{B as F}from"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import{D as L}from"./DocContainer-097753bf.js";import{D as x}from"./DisplayCode-31cb14c9.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";import"./Menu-28504fdf.js";import"./AniqueThemes-9b9ac866.js";import"./createGlobalStyle-25c4266a.js";const M=h("<small>"),N=h("<p>Anique has a library for icons called mdi, You can install it using"),O=h("<h2>Search <!$><!/> icons"),R=I("div")`
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
