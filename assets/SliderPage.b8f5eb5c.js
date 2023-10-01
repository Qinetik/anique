import{g as l,t as m}from"./web.129196f5.js";import{H as d,C as n}from"./index.60b103fc.js";import{C as a}from"./index.be13f6a6.js";import{s as c,A as o}from"./Theme.ad91f57f.js";import{S as i}from"./Size.fe6876e6.js";import{R as p}from"./index.8faf4249.js";import{c as z,f as e}from"./solid.22849591.js";const h=c("input")`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${t=>6+(t.size||0)*3}px;
    background: ${o.colors.primary};
    border: none;
    outline: none;
    margin-top: ${t=>6+(t.size||0)*.01}px;
    margin-bottom: ${t=>6+(t.size||0)*.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${t=>16+(t.size||0)*3}px;
        height: ${t=>16+(t.size||0)*3}px;
        background: ${o.colors.onBg};
        border-radius: 50%;
        border : ${t=>4+(t.size||0)}px solid ${o.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${o.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${o.colors.onBg400};
        border-color : ${o.colors.primary};
    }
    
`,b=m("<h1>Size Variations");function y(){const[t,s]=z(0),r=u=>e(h,{type:"range",get value(){return t()},onInput:g=>s(parseInt(g.target.value)),get size(){return u.size}});return e(n,{get children(){return[e(d,{children:"Slider"}),e(n,{gap:"2em",get children(){return[e(a,{get children(){return e(p,{get children(){return[e(n,{get children(){return[e(r,{get size(){return i.Small}}),e(r,{get size(){return i.Small}}),e(r,{get size(){return i.Small}})]}}),e(n,{get children(){return[e(r,{get size(){return i.Medium}}),e(r,{get size(){return i.Medium}}),e(r,{get size(){return i.Medium}})]}}),e(n,{get children(){return[e(r,{get size(){return i.Large}}),e(r,{get size(){return i.Large}}),e(r,{get size(){return i.Large}})]}})]}})}}),l(b),e(a,{get children(){return e(n,{get children(){return[e(r,{get size(){return i.Small}}),e(r,{get size(){return i.Medium}}),e(r,{get size(){return i.Large}}),e(r,{size:3}),e(r,{size:4}),e(r,{size:5})]}})}})]}})]}})}export{y as SliderPage};
