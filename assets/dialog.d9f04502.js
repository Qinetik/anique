import{P as l,g as s,t as a}from"./web.129196f5.js";import{C as d}from"./index.be13f6a6.js";import{B as u}from"./index.5a6d7a6c.js";import{f as t,m as g,c as f,b as o}from"./solid.22849591.js";import{s as r,A as c}from"./Theme.ad91f57f.js";const h=r("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    background: ${c.colors.bg};
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

`;function m(e){return t(h,{get style(){return{display:e.isVisible()?"block":"none"}},get class(){return e.class},get children(){return e.children}})}function C(e){return n=>{(n.currentTarget===n.target||!n.currentTarget.contains(n.target))&&e.onClickOutside()}}const b=r("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function k(e){return t(b,{get class(){return e.class},get children(){return e.children},get onClick(){return C(e)},get style(){return{"flex-direction":e.direction}}})}function p(e){return t(m,g(e,{get children(){return t(k,{get children(){return e.children},direction:"column",get onClickOutside(){return e.onClickOutside}})}}))}const x=r("div")`
    border-radius: 1em;
    background: ${c.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position : absolute;
`;function y(e){return t(l,{get children(){return t(p,{isVisible:()=>!0,get onClickOutside(){return e.onCloseRequest},get children(){return t(x,{get children(){return e.children}})}})}})}const O=r("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`,B=a("<h1>Dialog");function w(){const[e,n]=f(!1);return[s(B),t(d,{get children(){return t(u,{onClick:i=>n(!e()),children:"Open Dialog"})}}),o((()=>{const i=o(()=>!!e());return()=>i()?t(y,{onCloseRequest:()=>n(!1),get children(){return t(O,{children:"Hello Darkness My Old Friend"})}}):null})())]}export{w as default};
