import{s as r}from"./index-6df8a466.js";import{A as o}from"./Theme-c9d85115.js";import{c as i,m as t,f as n,k as s}from"./entry-client-2ac2a0bd.js";import{R as l}from"./index-a7d06282.js";import{C as d}from"./index-756d1732.js";const a=r("input")`

    width: 14em;
    min-height: 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 2px solid ${o.colors.bg200};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${o.colors.bg100};

    &:focus {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 2px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background: ${o.colors.bg300};
        color: ${o.colors.bg500};
    }

`,h=a,c=r(d)`

    width: 14em;
    border: 2px solid ${o.colors.bg100};
    box-sizing: border-box;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${o.colors.bg100};

    padding: 0.25em 0.5em;
    position: relative;

    &:has(input:focus) {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 1px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    &.disabled {
        background: ${o.colors.bg500};
    }

    &.disabled .label {
        color: ${o.colors.onBg500};
    }

`,b=r("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-family: ${o.font.secondary};
    min-width: 10em;
    flex: 1;
    box-sizing: border-box;
`,m=r("span")`
    color: ${o.colors.onBg200};
    font-size: 0.8rem;
    margin-left: 0.25em;
`;function $(e){return i(c,t(()=>e.containerProps||{},{get class(){return e.disabled?e.class?"disabled "+e.class:"disabled":e.class},get children(){return[n(()=>n(()=>!!e.label)()&&i(m,{class:"label",get children(){return e.label}})),i(l,{style:{width:"100%","align-items":"center"},get children(){return[n(()=>e.leadingIcon),i(b,t(()=>s(e,["leadingIcon","trailingIcon","label"])[1])),n(()=>e.trailingIcon)]}})]}}))}const w=r(a.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`;export{h as B,w as T,$ as a};
