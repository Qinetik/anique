import{b as g,l as w,c as t,g as f,S as $,f as _,a as v,i as S,F as T,t as h}from"./entry-client-efb8f723.js";import{s as I}from"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{a as D}from"./index-14c4e9b6.js";import"./index-01de8884.js";import{C as E}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import{H as k}from"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as q}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import{S as z}from"./index-18364d7e.js";import"./index-058de43f.js";import{B as F}from"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{D as L}from"./DocContainer-721e1c05.js";import{D as x}from"./DisplayCode-a1beda96.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";import"./Menu-03833eb2.js";import"./AniqueThemes-a3fe4429.js";import"./createGlobalStyle-ed258bb1.js";const M=h("<small>"),N=h("<p>Anique has a library for icons called mdi, You can install it using"),O=h("<h2>Search <!$><!/> icons"),R=I("div")`
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
