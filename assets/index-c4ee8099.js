import{s as e}from"./index-94caafb4.js";import{c as i,m as t,k as n}from"./entry-client-3af6d313.js";import{A as r}from"./Theme-c9d85115.js";const c=e("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 280px;
    box-sizing: border-box;
    padding: 1.5em;
`,l=e("div",{shouldForwardProp:o=>o!="isActive"})`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${r.font.secondary};
    color: ${r.colors.onBg};

    ${o=>o.isActive&&"background : "+r.colors.bg200+";"}
    &:hover {
        background: ${r.colors.primary};
    }
`,s=e("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 0.25em 0 0.25em 0;
    font-family: ${r.font.primary};
    color : ${r.colors.onBg200};
`,p=e(o=>i(s,t({get children(){return o.title}},()=>n(o,["title"])[1])))`
`;export{l as D,c as S,p as a};
