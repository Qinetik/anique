import{s as i}from"./index-bb5a5d3d.js";import{A as o}from"./Theme-c9d85115.js";const t=i("div",{shouldForwardProp:e=>!["size","disableAutoFill"].includes(e)})`

    width: ${e=>2+(e.size||0)}rem;
    height: ${e=>2+(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${o.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${o.colors.bg300};
    }

    &:active {
        background: ${o.colors.bg400};
    }

`;export{t as I};
