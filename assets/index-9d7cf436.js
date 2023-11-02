import{s as o}from"./index-94caafb4.js";import{A as e}from"./Theme-c9d85115.js";const i=o("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${e.colors.primary100};
    }

    &:active {
        background: ${e.colors.primary200};
    }
`,t=o(i,{shouldForwardProp:r=>r!="size"})`
    width: ${r=>3+(r.size||0)}em;
    height: ${r=>3+(r.size||0)}em;
    border-radius: 50%;
`,d=o(i,{shouldForwardProp:r=>r!="size"})`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${r=>r.size||0}em ${r=>1+(r.size||0)*.5}em;
    width: max-content;
    height: ${r=>3+(r.size||0)*.25}em;
    border-radius: 99em;
`;export{d as E,t as F};
