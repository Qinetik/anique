import{b as d,n as $,c as t,g,S as v,f as w,a as _,i as I,F as k,t as h}from"./entry-client-c6070623.js";import{s as f}from"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import"./index-22b1ace7.js";import"./index-66667bdf.js";import{a as T}from"./index-eeee74a7.js";import{C as q}from"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import{H as E}from"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import{R as D}from"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import{S as z}from"./index-0b681d21.js";import"./index-2a05b8f3.js";import{B as F}from"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import{D as R}from"./DocContainer-f585f3cc.js";import{D as x}from"./DisplayCode-f1406b41.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";import"./Menu-802480fc.js";import"./LightDarkIcon-b0e03a7d.js";import"./createGlobalStyle-5fc4339d.js";const B=h("<small>"),H=h("<p>Anique has a library for icons called mdi, You can install it using"),L=h("<h2>Search <!$><!/> icons"),M=f("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    box-sizing: border-box;
    padding: 1em 0;
`,N=f(T)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
`,O=f("img")`
    width: 2.5rem;
    height: 2.5rem;

    .dark & {
        filter: invert();
    }

`;function P(o){return t(N,{get children(){return[t(O,{loading:"lazy",get src(){return`https://qinetik.github.io/mdi-svg/svg/${o.icon}.svg`}}),(()=>{const a=g(B);return I(a,()=>o.icon),a})()]}})}let n=[];function ye(){const[o,a]=d(""),[l,c]=d([]),[S,C]=d(null);$(()=>{fetch("/anique/api/icons").then(e=>e.text()).then(e=>{const r="|||IconsStart|||";n=e.substring(e.indexOf(r)+r.length,e.lastIndexOf("|||IconsEnd|||")).split(","),c(n)}).catch(e=>C(e))});let m=!0;function y(e){e===""&&c(n);let r=[],u=e.toLowerCase();for(let i=0;i<n.length;i++)if(m){let s=n[i];s.toLowerCase().includes(u)&&r.push(s)}else return;c(r)}let p;function b(e){m=!1,p&&clearTimeout(p),p=setTimeout(()=>{m=!0,y(e)},100)}return t(R,{get children(){return t(q,{gap:"0.5em",get children(){return[t(E,{children:"Icons"}),g(H),t(D,{gap:"0.75em",get children(){return[t(x,{value:"npm i @qinetik/mdi"}),t(x,{value:"yarn add @qinetik/mdi"})]}}),t(v,{get when(){return w(()=>l().length==0)()&&S()==null},get children(){return t(z,{})}}),(()=>{const e=g(L),r=e.firstChild,u=r.nextSibling,[i,s]=_(u.nextSibling);return i.nextSibling,e.style.setProperty("margin","0"),I(e,()=>l().length,i,s),e})(),t(F,{style:{width:"100%"},get value(){return o()},onInput:e=>{a(e.currentTarget.value),b(e.currentTarget.value)},placeholder:"Search..."}),t(M,{get children(){return t(k,{get each(){return l()},children:e=>t(P,{icon:e})})}})]}})}})}export{ye as default};
