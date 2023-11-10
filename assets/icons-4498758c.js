import{b as d,n as $,c as t,g,S as v,f as w,a as _,i as I,F as k,t as h}from"./entry-client-fa648c77.js";import{s as f}from"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import{a as T}from"./index-a21d93e6.js";import{C as q}from"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import{H as E}from"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import{R as D}from"./index-5056258d.js";import"./index-519a8c4a.js";import{S as z}from"./index-87410e23.js";import"./index-2434b60c.js";import{B as F}from"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{D as R}from"./DocContainer-de2b6cce.js";import{D as x}from"./DisplayCode-52ee7ce6.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";import"./Menu-abd2039e.js";import"./LightDarkIcon-e977e7ca.js";import"./createGlobalStyle-758c7b5a.js";const B=h("<small>"),H=h("<p>Anique has a library for icons called mdi, You can install it using"),L=h("<h2>Search <!$><!/> icons"),M=f("div")`
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
