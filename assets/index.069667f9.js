import{s as t,A as r}from"./index.3b4915b3.js";import{c as i,m as o,b as n,s as c}from"./solid.a8f4da40.js";const a=t("div")`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;t("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;t("p")`

`;t("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;const l=t("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,s=t("div")`
  margin-right: 1rem;
`,d=t("h3")`
  flex : 1;
`,h=t("div")`

`;function u(e){return i(l,o(()=>c(e,["navIcon","title","actions"])[1],{get children(){return[n(()=>n(()=>e.navIcon!=null)()?i(s,{get children(){return e.navIcon}}):i(a,{width:"0.75em"})),i(d,{get children(){return e.title}}),n(()=>n(()=>e.actions!=null)()?i(h,{get children(){return e.actions}}):null)]}}))}const p=t("div")`

    width: ${e=>2+1*(e.size||0)}rem;
    height: ${e=>2+1*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${r.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${r.colors.bg300};
    }

    &:active {
        background: ${r.colors.bg400};
    }

`;export{u as A,p as I,a as S};
