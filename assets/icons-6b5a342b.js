import{b as d,n as $,c as t,g,S as v,f as w,a as _,i as I,F as k,t as h}from"./entry-client-f8a4ae77.js";import{s as f}from"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import"./index-c2ccd6b4.js";import"./index-950dbaca.js";import{C as T}from"./index-790f0904.js";import{C as q}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import{H as E}from"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import{R as D}from"./index-57c7de99.js";import"./index-64764018.js";import{S as z}from"./index-04f85821.js";import"./index-85412099.js";import{B as F}from"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import{D as R}from"./DocContainer-d0e3af14.js";import{D as x}from"./DisplayCode-ef2a5ddf.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";import"./Menu-b86ecec2.js";import"./LightDarkIcon-601c6a1c.js";import"./createGlobalStyle-c03825ae.js";const B=h("<small>"),H=h("<p>Anique has a library for icons called mdi, You can install it using"),L=h("<h2>Search <!$><!/> icons"),M=f("div")`
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

`;function P(o){return t(N,{get children(){return[t(O,{loading:"lazy",get src(){return`https://qinetik.github.io/mdi-svg/svg/${o.icon}.svg`}}),(()=>{const a=g(B);return I(a,()=>o.icon),a})()]}})}let n=[];function Ce(){const[o,a]=d(""),[l,c]=d([]),[S,C]=d(null);$(()=>{fetch("/anique/api/icons").then(e=>e.text()).then(e=>{const r="|||IconsStart|||";n=e.substring(e.indexOf(r)+r.length,e.lastIndexOf("|||IconsEnd|||")).split(","),c(n)}).catch(e=>C(e))});let m=!0;function y(e){e===""&&c(n);let r=[],u=e.toLowerCase();for(let i=0;i<n.length;i++)if(m){let s=n[i];s.toLowerCase().includes(u)&&r.push(s)}else return;c(r)}let p;function b(e){m=!1,p&&clearTimeout(p),p=setTimeout(()=>{m=!0,y(e)},100)}return t(R,{get children(){return t(q,{gap:"0.5em",get children(){return[t(E,{children:"Icons"}),g(H),t(D,{gap:"0.75em",get children(){return[t(x,{value:"npm i @qinetik/mdi"}),t(x,{value:"yarn add @qinetik/mdi"})]}}),t(v,{get when(){return w(()=>l().length==0)()&&S()==null},get children(){return t(z,{})}}),(()=>{const e=g(L),r=e.firstChild,u=r.nextSibling,[i,s]=_(u.nextSibling);return i.nextSibling,e.style.setProperty("margin","0"),I(e,()=>l().length,i,s),e})(),t(F,{style:{width:"100%"},get value(){return o()},onInput:e=>{a(e.currentTarget.value),b(e.currentTarget.value)},placeholder:"Search..."}),t(M,{get children(){return t(k,{get each(){return l()},children:e=>t(P,{icon:e})})}})]}})}})}export{Ce as default};
