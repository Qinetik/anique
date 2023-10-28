import{c as r,g as l,i,t as o}from"./entry-client-43dc9895.js";import{D as n}from"./DocContainer-5b19c5b9.js";import{C as c,H as s,t as m}from"./index-1c89625a.js";import"./index-984971c2.js";import{c as p}from"./createGlobalStyle-7321c738.js";import"./Menu-648d47f1.js";const u=o("<p>You can use ScrollbarArea to create a beautiful looking scrollbar"),d=o("<div class=item>"),g=p`
    .area {
        height : 300px;
        overflow-y : auto;
    }
    .item {
        width : 80px;
        height : 20px;
        padding : 0.5em;
    }
`;function y(){let t=[];for(let e=0;e<25;e++)t=[...t,e];return r(n,{get children(){return[r(g,{}),r(c,{get children(){return[r(s,{children:"Scrollbar"}),l(u),r(m,{class:"area",get children(){return t.map(e=>(()=>{const a=l(d);return i(a,e),a})())}})]}})]}})}export{y as default};
