import{g,t as m}from"./web.ab821142.js";import{H as d,C as i}from"./index.d848d6b7.js";import{C as a}from"./index.bd2e46ff.js";import{s as c,A as o}from"./Theme.6779d63b.js";import{R as p}from"./index.a758e2ee.js";import{c as h,a as e}from"./solid.bd741e67.js";const z=c("input")`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${r=>6+(r.size||0)*3}px;
    background: ${o.colors.primary};
    border: none;
    outline: none;
    margin-top: ${r=>6+(r.size||0)*.01}px;
    margin-bottom: ${r=>6+(r.size||0)*.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${r=>16+(r.size||0)*3}px;
        height: ${r=>16+(r.size||0)*3}px;
        background: ${o.colors.onBg};
        border-radius: 50%;
        border : ${r=>4+(r.size||0)}px solid ${o.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${o.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${o.colors.onBg400};
        border-color : ${o.colors.primary};
    }
    
`;var n=(r=>(r[r.Small=0]="Small",r[r.Medium=1]="Medium",r[r.Large=2]="Large",r))(n||{});const b=m("<h1>Size Variations");function v(){const[r,s]=h(0),t=u=>e(z,{type:"range",get value(){return r()},onInput:l=>s(parseInt(l.target.value)),get size(){return u.size}});return e(i,{get children(){return[e(d,{children:"Slider"}),e(i,{gap:"2em",get children(){return[e(a,{get children(){return e(p,{get children(){return[e(i,{get children(){return[e(t,{get size(){return n.Small}}),e(t,{get size(){return n.Small}}),e(t,{get size(){return n.Small}})]}}),e(i,{get children(){return[e(t,{get size(){return n.Medium}}),e(t,{get size(){return n.Medium}}),e(t,{get size(){return n.Medium}})]}}),e(i,{get children(){return[e(t,{get size(){return n.Large}}),e(t,{get size(){return n.Large}}),e(t,{get size(){return n.Large}})]}})]}})}}),g(b),e(a,{get children(){return e(i,{get children(){return[e(t,{get size(){return n.Small}}),e(t,{get size(){return n.Medium}}),e(t,{get size(){return n.Large}}),e(t,{size:3}),e(t,{size:4}),e(t,{size:5})]}})}})]}})]}})}export{v as SliderPage};
