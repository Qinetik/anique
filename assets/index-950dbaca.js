import{s}from"./index-1349e2ee.js";import{A as r}from"./Theme-c9d85115.js";const e=s("button",{shouldForwardProp:o=>o!="size"})`

    box-sizing: border-box;
    padding: ${o=>.8+(o.size?o.size*.25:0)}em ${o=>.8+(o.size?o.size*.5:0)}em;
    background: ${r.colors.primary};
    border-radius: ${r.border.lgRadius};
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:disabled {
        background: ${r.colors.bg500};
        cursor: default;
    }

    &:hover:not(&:disabled) {
        background: ${r.colors.primary100};
    }

    &:active:not(&:disabled) {
        background: ${r.colors.primary200};
    }

`,a=e;export{a as B};
