import{g as C,a as o,i as l,c as n,t as E}from"./entry-client-43dc9895.js";import{s as a,k as G}from"./index-984971c2.js";import{c as T}from"./css-c936b45f.js";import{c as N}from"./createGlobalStyle-7321c738.js";const H=E("<main><div>Shit works</div><!$><!/><!$><!/><div class=global-para><p>Global Styles are working if this is red</p></div><h2>Css is working, if color is blue, Component Selector working if background green</h2><!$><!/><!$><!/><!$><!/>"),K=T`
    color: blue;
`,c=a("h3")`

    color: yellow;

    &:hover {
        color: red;
    }

`,d=a(c)`

    color: pink;

    &:hover {
        color: blue;
    }

`,M=d.withComponent("em"),g=G`
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
        animation: ${g} 1s ease-in;
        animation-iteration-count: infinite;
    }

`;function B(){return(()=>{const e=C(H),$=e.firstChild,b=$.nextSibling,[i,m]=o(b.nextSibling),h=i.nextSibling,[t,p]=o(h.nextSibling),S=t.nextSibling,_=S.nextSibling,f=_.nextSibling,[r,x]=o(f.nextSibling),u=r.nextSibling,[s,k]=o(u.nextSibling),y=s.nextSibling,[w,v]=o(y.nextSibling);return l(e,n(g,{}),i,m),l(e,n(W,{}),t,p),l(e,n(c,{children:"This should be yellow for styled, on hover red"}),r,x),l(e,n(d,{children:"This should be pink for extended styled, on hover blue"}),s,k),l(e,n(M,{children:"This should be italic pink for withComponent to work"}),w,v),e})()}export{B as default};
