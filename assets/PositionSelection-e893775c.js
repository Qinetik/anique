import{c as i,F as m,g as p,w as s,i as a,t as c}from"./entry-client-e7f04580.js";import"./UnstyledLink-3a662916.js";import{P as t}from"./index-6e8c2b16.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import{N as u}from"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./index-744ba056.js";import"./index-eb07a99c.js";const C=c("<option>");function g(e){switch(e){case t.TopLeft:return"TopLeft";case t.TopCenter:return"TopCenter";case t.TopRight:return"TopRight";case t.CenterLeft:return"CenterLeft";case t.Center:return"Center";case t.CenterRight:return"CenterRight";case t.BottomLeft:return"BottomLeft";case t.BottomCenter:return"BottomCenter";case t.BottomRight:return"BottomRight"}}function z(e){const n=[t.TopLeft,t.TopCenter,t.TopRight,t.CenterLeft,t.Center,t.CenterRight,t.BottomLeft,t.BottomCenter,t.BottomRight];return i(u,{get value(){return e.activePosition()},onChange:r=>e.setActivePosition(parseInt(r.target.value)),get children(){return i(m,{each:n,children:r=>(()=>{const o=p(C);return s(o,"value",r),a(o,()=>g(r)),o})()})}})}export{z as P};
