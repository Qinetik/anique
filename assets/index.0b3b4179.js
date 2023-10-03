import{s as r,A as i}from"./Theme.0d521bda.js";import{P as o}from"./web.a1c2ce68.js";import{c as e,m as c}from"./solid.21af8d85.js";const l=r("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    background: ${i.colors.bg};
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

`;function d(t){return e(l,{get style(){return{display:t.isVisible()?"block":"none"}},get class(){return t.class},get children(){return t.children}})}function s(t){return n=>{(n.currentTarget===n.target||!n.currentTarget.contains(n.target))&&t.onClickOutside()}}const u=r("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function a(t){return e(u,{get class(){return t.class},get children(){return t.children},get onClick(){return s(t)},get style(){return{"flex-direction":t.direction}}})}function g(t){return e(d,c(t,{get children(){return e(a,{get children(){return t.children},direction:"column",get onClickOutside(){return t.onClickOutside}})}}))}const b=r("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`,f=r("div")`
    border-radius: 1em;
    background: ${i.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position : absolute;
`;function k(t){return e(o,{get children(){return e(g,{isVisible:()=>!0,get onClickOutside(){return t.onCloseRequest},get children(){return e(f,{get children(){return t.children}})}})}})}export{b as C,k as D};
