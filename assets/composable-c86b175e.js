import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import{c as t,f as i,u as l,d as u}from"./entry-client-efb8f723.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as s}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{D as C}from"./DocContainer-721e1c05.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";import"./Menu-03833eb2.js";import"./AniqueThemes-a3fe4429.js";import"./createGlobalStyle-ed258bb1.js";function g(r,h){let m=u();const a=o=>{let n=l(m);return h({...o,...n})},d=o=>{const n={};return t(m.Provider,{value:n,get children(){return[i(()=>o.children),t(a,o)]}})};let p={};for(const o in r)p[o]=n=>{const c=l(m);if(c==null)throw new Error(`${o} Component must be wrapped in its Root Component`);return c[r[o]]=()=>n.children,null};return{Root:d,...p}}function f(r){return t(s,{get children(){return["Something : ",i(()=>r.something),"Nice : ",i(()=>r.nice),"Children : ",i(()=>r.children)]}})}const e=g({Something:"something",Children:"children"},f);function V(){return t(C,{get children(){return[t(e.Root,{nice:"First",get children(){return[t(e.Something,{children:"Something1"}),t(e.Children,{children:"Children1"})]}}),t(e.Root,{nice:"Second",get children(){return[t(e.Something,{children:"Something2"}),t(e.Children,{children:"Children2"})]}})]}})}export{V as default};
