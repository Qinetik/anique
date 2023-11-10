import{s as r}from"./index-5be97176.js";import{c as i,m as t,k as n}from"./entry-client-fa648c77.js";import{A as o}from"./Theme-c9d85115.js";const d=r("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 280px;
    box-sizing: border-box;
    padding: 1.5em;
`,l=r("div",{shouldForwardProp:e=>e!="isActive"})`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${o.font.secondary};
    color: ${o.colors.onBg};
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 1em;
    text-decoration : none;

    ${e=>e.isActive&&"background : "+o.colors.bg200+";"}
    &:hover {
        background: ${o.colors.primary};
        color: ${o.colors.onBg};
        text-decoration : none;
    }
`,a=r("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 0.25em 0 0.25em 0;
    font-family: ${o.font.primary};
    color : ${o.colors.onBg200};
`,p=r(e=>i(a,t({get children(){return e.title}},()=>n(e,["title"])[1])))`
`;export{l as D,d as S,p as a};
