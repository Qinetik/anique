import{b as d,l as $,c as t,g,S as v,f as w,a as _,i as I,F as k,t as h}from"./entry-client-23914c21.js";import{s as f}from"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import"./index-58ae8ba7.js";import"./index-99dc85aa.js";import{C as T}from"./index-70649c9c.js";import{C as q}from"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import{H as E}from"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import{R as D}from"./index-4d1252b9.js";import"./index-a2a937ad.js";import{S as z}from"./index-4b012459.js";import"./index-e59065e4.js";import{B as F}from"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{D as R}from"./DocContainer-bd3a18cf.js";import{D as x}from"./DisplayCode-7244d484.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";import"./Menu-4100dfe3.js";import"./LightDarkIcon-27cd5047.js";import"./createGlobalStyle-f360b4d7.js";const B=h("<small>"),H=h("<p>Anique has a library for icons called mdi, You can install it using"),L=h("<h2>Search <!$><!/> icons"),M=f("div")`
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
