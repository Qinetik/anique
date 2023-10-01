import{s as r,A as c}from"./Theme.6779d63b.js";import{g as o,t as a}from"./web.ab821142.js";import{R as h}from"./index.a758e2ee.js";import{g,C as s}from"./ColorScheme.24fa71bf.js";import{a as t,d as i}from"./solid.bd741e67.js";const l=r("div")`

    width: ${e=>2+.5*(e.size||0)}rem;
    height: ${e=>2+.5*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${c.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${c.colors.primary};
    }

    &:active {
        background: ${c.colors.primary100};
    }

`,u=a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">');function d(){return o(u)}const p=a('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 60 60"><path id="theme-light-dark" d="M18.272,3a18.556,18.556,0,0,0,.089,31.716A16.081,16.081,0,0,1,2,18.856,16.069,16.069,0,0,1,18.272,3M52.5,7.323l4.231,4.123L10.669,56.338,6.438,52.215,52.5,7.323M34.219,14.329,29.84,11.648l-4.26,2.883,1.243-4.9L22.71,6.573l5.178-.346L29.6,1.47l1.982,4.7,5.118.086L32.71,9.514l1.509,4.815M24.456,24.738l-3.432-2.1L17.71,24.882l1.006-3.806-3.225-2.393,4.024-.259L20.846,14.7l1.509,3.662,4.024.086-3.107,2.508,1.183,3.777M52.3,36.155A16.069,16.069,0,0,1,36.024,52.013a16.519,16.519,0,0,1-9.645-3.085L49.13,26.756a15.555,15.555,0,0,1,3.166,9.4M39.278,55.127l8.2-3.316-.71,9.659-7.485-6.343m12.811-7.785,3.4-7.987L62,46.679l-9.911.663m3.4-14.3-3.373-8.015L62,25.718l-6.509,7.323M24.574,51.811l8.2,3.316-7.485,6.314Z" transform="translate(-2 -1.47)">'),f=()=>o(p);function w(){return t(l,{onClick:()=>{const e=g(),m=document.documentElement.className;let n;m==s.Light?n=s.Dark:n=s.Light,n==e?localStorage.removeItem("theme-key"):localStorage.setItem("theme-key",n),document.documentElement.className=n},get children(){return t(f,{})}})}const v=r("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,x=r("div")`
  margin-right: 1rem;
`,k=r("h3")`
  flex : 1;
`,b=r("div")`

`;function M(e){return t(v,{get children(){return[i(()=>i(()=>e.navIcon!=null)()?t(x,{get children(){return e.navIcon}}):null),t(k,{get children(){return e.title}}),i(()=>i(()=>e.actions!=null)()?t(b,{get children(){return e.actions}}):null)]}})}const $=a('<svg width="24" height="24" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f">'),A=a('<svg width="24" height="24" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff">');function B(){return o($)}function y(){return o(A)}function H(e){return t(M,{get navIcon(){return t(l,{onClick:()=>{},get children(){return t(d,{})}})},get title(){return e.title||"Anique"},get actions(){return t(h,{gap:"1em",get children(){return[t(l,{as:"a",target:"_blank",href:"https://github.com/qinetik/anique",class:"display-in-dark",get children(){return t(y,{})}}),t(l,{as:"a",target:"_blank",href:"https://github.com/qinetik/anique",class:"display-in-light",get children(){return t(B,{})}}),t(w,{})]}})}})}export{H as WebAppBar};
