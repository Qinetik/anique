import{s as i}from"./index-1349e2ee.js";import{A as o}from"./Theme-c9d85115.js";const t=i("div",{shouldForwardProp:e=>!["size","disableAutoFill"].includes(e)})`

    width: ${e=>2.5+(e.size||0)}em;
    height: ${e=>2.5+(e.size||0)}em;
    border-radius: 50%;

    padding : 0.5em;
    box-sizing : border-box;
    
    ${e=>e.disableAutoFill?"":`fill:${o.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}em;
        height: ${e=>1.5+(e.size||0)*.3}em;
    }

    &:hover {
        background: ${o.colors.bg300};
    }

    &:active {
        background: ${o.colors.bg400};
    }

`;export{t as I};
