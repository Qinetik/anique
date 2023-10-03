import{s as r,A as n}from"./Theme.0d521bda.js";import{c as t,m as o,b as i,s as a}from"./solid.21af8d85.js";const c=r("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,s=r("div")`
  margin-right: 1rem;
`,l=r("h3")`
  flex : 1;
`,d=r("div")`

`;function g(e){return t(c,o(()=>a(e,["navIcon","title","actions"])[1],{get children(){return[i(()=>i(()=>e.navIcon!=null)()?t(s,{get children(){return e.navIcon}}):null),t(l,{get children(){return e.title}}),i(()=>i(()=>e.actions!=null)()?t(d,{get children(){return e.actions}}):null)]}}))}const h=r("div")`

    width: ${e=>2+.5*(e.size||0)}rem;
    height: ${e=>2+.5*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${n.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${n.colors.primary};
    }

    &:active {
        background: ${n.colors.primary100};
    }

`;export{g as A,h as I};
