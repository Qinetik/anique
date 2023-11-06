import{b as g,l as w,c as t,g as f,S as $,f as _,a as v,i as S,F as T,t as h}from"./entry-client-e7f04580.js";import{s as I}from"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-7a72bcca.js";import"./index-ce1ffc42.js";import{C as D}from"./index-4460cad9.js";import{C as E}from"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import{H as k}from"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as q}from"./index-f5b55317.js";import"./index-395e79e9.js";import{S as z}from"./index-8515abcf.js";import"./index-1a03f1e0.js";import{B as F}from"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import{D as L}from"./DocContainer-7be6c4d6.js";import{D as x}from"./DisplayCode-428ca051.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";import"./Menu-55b10e18.js";import"./LightDarkIcon-b8f946db.js";import"./createGlobalStyle-51c6cfe9.js";const M=h("<small>"),N=h("<p>Anique has a library for icons called mdi, You can install it using"),O=h("<h2>Search <!$><!/> icons"),R=I("div")`
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

`;function H(s){const c=s.icon.substring(0,s.icon.lastIndexOf("Icon")).replace(/[A-Z]/g,(r,o)=>(o>0?"-":"")+r.toLowerCase());let n;return t(A,{ref(r){const o=n;typeof o=="function"?o(r):n=r},get children(){return[t(B,{loading:"lazy",src:`https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/${c}.svg`,alt:c,onError:()=>{n&&(n.style.display="none")}}),(()=>{const r=f(M);return S(r,()=>s.icon),r})()]}})}let l=[];function ye(){const[s,c]=g(""),[n,r]=g([]),[o,y]=g(null);w(()=>{fetch("/anique/api/icons").then(e=>e.text()).then(e=>{const i="|||IconsStart|||";l=e.substring(e.indexOf(i)+i.length,e.lastIndexOf("|||IconsEnd|||")).split(","),r(l)}).catch(e=>y(e))});let p=!0;function C(e){e===""&&r(l);let i=[],d=e.toLowerCase();for(let a=0;a<l.length;a++)if(p){let m=l[a];m.toLowerCase().includes(d)&&i.push(m)}else return;r(i)}let u;function b(e){p=!1,u&&clearTimeout(u),u=setTimeout(()=>{p=!0,C(e)},100)}return t(L,{get children(){return t(E,{gap:"0.5em",get children(){return[t(k,{children:"Icons"}),f(N),t(q,{gap:"0.75em",get children(){return[t(x,{value:"npm i @qinetik/mdi"}),t(x,{value:"yarn add @qinetik/mdi"})]}}),t($,{get when(){return _(()=>n().length==0)()&&o()==null},get children(){return t(z,{})}}),(()=>{const e=f(O),i=e.firstChild,d=i.nextSibling,[a,m]=v(d.nextSibling);return a.nextSibling,e.style.setProperty("margin","0"),S(e,()=>n().length,a,m),e})(),t(F,{style:{width:"100%"},get value(){return s()},onInput:e=>{c(e.currentTarget.value),b(e.currentTarget.value)},placeholder:"Search..."}),t(R,{get children(){return t(T,{get each(){return n()},children:e=>t(H,{icon:e})})}})]}})}})}export{ye as default};
