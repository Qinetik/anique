import{s as n,A as o}from"./Theme.ee8a9c76.js";import{g as a,t as c}from"./web.024bccdc.js";import{R as g}from"./index.91a1f0ae.js";import{g as u,C as l}from"./ColorScheme.24fa71bf.js";import{S as h}from"./Size.fe6876e6.js";import{c as t,b as i}from"./solid.2f8a4028.js";const s=n("div")`

    width: ${e=>2+.5*(e.size||0)}rem;
    height: ${e=>2+.5*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${o.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${o.colors.primary};
    }

    &:active {
        background: ${o.colors.primary100};
    }

`,d=c('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">');function p(){return a(d)}const f=c('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path id="theme-light-dark" d="M18.272,3a18.556,18.556,0,0,0,.089,31.716A16.081,16.081,0,0,1,2,18.856,16.069,16.069,0,0,1,18.272,3M52.5,7.323l4.231,4.123L10.669,56.338,6.438,52.215,52.5,7.323M34.219,14.329,29.84,11.648l-4.26,2.883,1.243-4.9L22.71,6.573l5.178-.346L29.6,1.47l1.982,4.7,5.118.086L32.71,9.514l1.509,4.815M24.456,24.738l-3.432-2.1L17.71,24.882l1.006-3.806-3.225-2.393,4.024-.259L20.846,14.7l1.509,3.662,4.024.086-3.107,2.508,1.183,3.777M52.3,36.155A16.069,16.069,0,0,1,36.024,52.013a16.519,16.519,0,0,1-9.645-3.085L49.13,26.756a15.555,15.555,0,0,1,3.166,9.4M39.278,55.127l8.2-3.316-.71,9.659-7.485-6.343m12.811-7.785,3.4-7.987L62,46.679l-9.911.663m3.4-14.3-3.373-8.015L62,25.718l-6.509,7.323M24.574,51.811l8.2,3.316-7.485,6.314Z" transform="translate(-2 -1.47)">'),v=()=>a(f);function w(){return t(s,{onClick:()=>{const e=u(),m=document.documentElement.className;let r;m==l.Light?r=l.Dark:r=l.Light,r==e?localStorage.removeItem("theme-key"):localStorage.setItem("theme-key",r),document.documentElement.className=r},get size(){return h.Medium},get children(){return t(v,{})}})}const x=n("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,A=n("div")`
  margin-right: 1rem;
`,M=n("h3")`
  flex : 1;
`,L=n("div")`

`;function $(e){return t(x,{get children(){return[i(()=>i(()=>e.navIcon!=null)()?t(A,{get children(){return e.navIcon}}):null),t(M,{get children(){return e.title}}),i(()=>i(()=>e.actions!=null)()?t(L,{get children(){return e.actions}}):null)]}})}function z(e){return t($,{get navIcon(){return t(s,{onClick:()=>{},get children(){return t(p,{})}})},get title(){return e.title||"Anique"},get actions(){return t(g,{get children(){return t(w,{})}})}})}export{z as WebAppBar};
