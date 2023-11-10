import{s as a}from"./index-108c4257.js";import{A as t}from"./Theme-c9d85115.js";import{c as n,m as c,F as i}from"./entry-client-c6070623.js";import{R as l}from"./index-0ebd6ae5.js";const s=a.a`

    width: 2.75em;
    height: 2.75em;
    background: ${t.colors.bg100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    color: ${t.colors.onBg};
    text-decoration: none;

    &:hover, &.current {
        background: ${t.colors.bg300};
        color: ${t.colors.onBg};
    }

    &.current {
        background: ${t.colors.primary};
    }

`,g=a(l)`
    flex-wrap: wrap;
    gap: 0.5em;
`;function u(r){return n(i,{get each(){return Array.from(Array(Math.ceil(r.total/(r.perPage||1))).keys(),e=>e+1)},get children(){return r.children}})}function f(r){return r.total<1||(r.perPage||1)<1?null:n(g,{get children(){return n(u,{get perPage(){return r.perPage},get total(){return r.total},children:e=>{const o=r.linkProps?r.linkProps(e):{};return n(s,c(o,{get class(){return(o.class?o.class+" ":"")+(r.current==e?"current":"")},children:e}))}})}})}export{f as P};
