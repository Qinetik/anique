import{a as r,A as t}from"./Theme.e785dc72.js";import{c as i,a as n}from"./solid.443b34c3.js";const o=r("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,a=r("div")`
  margin-right: 1rem;
`,c=r("h3")`
  flex : 1;
`,l=r("div")`

`;function m(e){return i(o,{get children(){return[n(()=>n(()=>e.navIcon!=null)()?i(a,{get children(){return e.navIcon}}):null),i(c,{get children(){return e.title}}),n(()=>n(()=>e.actions!=null)()?i(l,{get children(){return e.actions}}):null)]}})}const u=r("div")`

    width: ${e=>2+.5*(e.size||0)}rem;
    height: ${e=>2+.5*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${t.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${t.colors.primary};
    }

    &:active {
        background: ${t.colors.primary100};
    }

`;export{m as A,u as I};
