import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import{c as t,f as i,u as l,d as u}from"./entry-client-e7f04580.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as s}from"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import{D as C}from"./DocContainer-7be6c4d6.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";import"./Menu-55b10e18.js";import"./LightDarkIcon-b8f946db.js";import"./createGlobalStyle-51c6cfe9.js";function g(r,h){let m=u();const a=o=>{let n=l(m);return h({...o,...n})},d=o=>{const n={};return t(m.Provider,{value:n,get children(){return[i(()=>o.children),t(a,o)]}})};let p={};for(const o in r)p[o]=n=>{const c=l(m);if(c==null)throw new Error(`${o} Component must be wrapped in its Root Component`);return c[r[o]]=()=>n.children,null};return{Root:d,...p}}function f(r){return t(s,{get children(){return["Something : ",i(()=>r.something),"Nice : ",i(()=>r.nice),"Children : ",i(()=>r.children)]}})}const e=g({Something:"something",Children:"children"},f);function W(){return t(C,{get children(){return[t(e.Root,{nice:"First",get children(){return[t(e.Something,{children:"Something1"}),t(e.Children,{children:"Children1"})]}}),t(e.Root,{nice:"Second",get children(){return[t(e.Something,{children:"Something2"}),t(e.Children,{children:"Children2"})]}})]}})}export{W as default};
