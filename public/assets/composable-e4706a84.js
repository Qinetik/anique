import{R as u}from"./index-1c89625a.js";import{c as e,d as i,x as h,w as C}from"./entry-client-43dc9895.js";import"./index-984971c2.js";import{D as g}from"./DocContainer-5b19c5b9.js";import"./Menu-648d47f1.js";import"./createGlobalStyle-7321c738.js";function p(t,a){let c=C();const d=n=>{let r=h(c);return a({...n,...r})},s=n=>{const r={};return e(c.Provider,{value:r,get children(){return[i(()=>n.children),e(d,n)]}})};let l={};for(const n in t)l[n]=r=>{const m=h(c);if(m==null)throw new Error(`${n} Component must be wrapped in its Root Component`);return m[t[n]]=()=>r.children,null};return{Root:s,...l}}function f(t){return e(u,{get children(){return["Something : ",i(()=>t.something),"Nice : ",i(()=>t.nice),"Children : ",i(()=>t.children)]}})}const o=p({Something:"something",Children:"children"},f);function M(){return e(g,{get children(){return[e(o.Root,{nice:"First",get children(){return[e(o.Something,{children:"Something1"}),e(o.Children,{children:"Children1"})]}}),e(o.Root,{nice:"Second",get children(){return[e(o.Something,{children:"Something2"}),e(o.Children,{children:"Children2"})]}})]}})}export{M as default};
