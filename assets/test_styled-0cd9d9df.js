import{g as C,a as o,i as l,c as n,t as E}from"./entry-client-2fda6d46.js";import{s as a}from"./index-bb5a5d3d.js";import{c as G}from"./css-a2b805a8.js";import{k as T}from"./keyframes-489867ef.js";import{c as N}from"./createGlobalStyle-954222f7.js";const H=E("<main><div>Shit works</div><!$><!/><!$><!/><div class=global-para><p>Global Styles are working if this is red</p></div><h2>Css is working, if color is blue, Component Selector working if background green</h2><!$><!/><!$><!/><!$><!/>"),K=G`
    color: blue;
`,c=a("h3")`

    color: yellow;

    &:hover {
        color: red;
    }

`,m=a(c)`

    color: pink;

    &:hover {
        color: blue;
    }

`,M=m.withComponent("em"),d=T`
    0% {
        margin-left: 0;
    }
    50% {
        margin-left: 100px;
    }
    100% {
        margin-left: 0;
    }
`,W=N`

    .global-para {
        color: red;
    }

    ${K} {
        background: green;
        animation: ${d} 1s ease-in;
        animation-iteration-count: infinite;
    }

`;function D(){return(()=>{const e=C(H),g=e.firstChild,$=g.nextSibling,[i,b]=o($.nextSibling),h=i.nextSibling,[t,p]=o(h.nextSibling),f=t.nextSibling,S=f.nextSibling,_=S.nextSibling,[r,x]=o(_.nextSibling),u=r.nextSibling,[s,k]=o(u.nextSibling),y=s.nextSibling,[w,v]=o(y.nextSibling);return l(e,n(d,{}),i,b),l(e,n(W,{}),t,p),l(e,n(c,{children:"This should be yellow for styled, on hover red"}),r,x),l(e,n(m,{children:"This should be pink for extended styled, on hover blue"}),s,k),l(e,n(M,{children:"This should be italic pink for withComponent to work"}),w,v),e})()}export{D as default};
