import{b as g,l as w,c as t,g as f,S as $,f as _,a as v,i as S,F as T,t as h}from"./entry-client-b1cdb755.js";import{s as I}from"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import"./index-8f15c368.js";import"./index-69b2c138.js";import{C as D}from"./index-072e3436.js";import{C as E}from"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import{H as k}from"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import{R as q}from"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import{S as z}from"./index-15598541.js";import"./index-0be5e0ec.js";import{B as F}from"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import{D as L}from"./DocContainer-5033652d.js";import{D as x}from"./DisplayCode-e05df904.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";import"./Menu-12197ead.js";import"./LightDarkIcon-2c9fa160.js";import"./createGlobalStyle-f9f30a86.js";import"./_commonjsHelpers-de833af9.js";const M=h("<small>"),N=h("<p>Anique has a library for icons called mdi, You can install it using"),O=h("<h2>Search <!$><!/> icons"),R=I("div")`
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

`;function H(s){const c=s.icon.substring(0,s.icon.lastIndexOf("Icon")).replace(/[A-Z]/g,(r,o)=>(o>0?"-":"")+r.toLowerCase());let n;return t(A,{ref(r){const o=n;typeof o=="function"?o(r):n=r},get children(){return[t(B,{loading:"lazy",src:`https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/${c}.svg`,alt:c,onError:()=>{n&&(n.style.display="none")}}),(()=>{const r=f(M);return S(r,()=>s.icon),r})()]}})}let l=[];function Ce(){const[s,c]=g(""),[n,r]=g([]),[o,y]=g(null);w(()=>{fetch("/anique/api/icons").then(e=>e.text()).then(e=>{const i="|||IconsStart|||";l=e.substring(e.indexOf(i)+i.length,e.lastIndexOf("|||IconsEnd|||")).split(","),r(l)}).catch(e=>y(e))});let p=!0;function C(e){e===""&&r(l);let i=[],d=e.toLowerCase();for(let a=0;a<l.length;a++)if(p){let m=l[a];m.toLowerCase().includes(d)&&i.push(m)}else return;r(i)}let u;function b(e){p=!1,u&&clearTimeout(u),u=setTimeout(()=>{p=!0,C(e)},100)}return t(L,{get children(){return t(E,{gap:"0.5em",get children(){return[t(k,{children:"Icons"}),f(N),t(q,{gap:"0.75em",get children(){return[t(x,{value:"npm i @qinetik/mdi"}),t(x,{value:"yarn add @qinetik/mdi"})]}}),t($,{get when(){return _(()=>n().length==0)()&&o()==null},get children(){return t(z,{})}}),(()=>{const e=f(O),i=e.firstChild,d=i.nextSibling,[a,m]=v(d.nextSibling);return a.nextSibling,e.style.setProperty("margin","0"),S(e,()=>n().length,a,m),e})(),t(F,{style:{width:"100%"},get value(){return s()},onInput:e=>{c(e.currentTarget.value),b(e.currentTarget.value)},placeholder:"Search..."}),t(R,{get children(){return t(T,{get each(){return n()},children:e=>t(H,{icon:e})})}})]}})}})}export{Ce as default};
