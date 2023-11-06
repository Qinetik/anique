import{c as n,m as o,g as i,k as s,t as a}from"./entry-client-e7f04580.js";import{s as m}from"./index-326c8233.js";import{A as l}from"./Theme-c9d85115.js";import{k as g}from"./keyframes-f88073d5.js";const p=a('<svg><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></svg>',!1,!0),r=g`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,c=m("svg")`
    animation: ${r.animationName} 1s linear infinite;
`,w=t=>{const e=32+(t.size||0)*8;return[n(r,{}),n(c,o({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-icon":"spinner",width:e,height:e,get fill(){return l.colors[t.color||"onBg"]}},()=>s(t,["color","size"])[1],{get children(){return i(p)}}))]};export{w as S};
