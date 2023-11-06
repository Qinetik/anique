import{l as p,c as t,f as s,g as u,t as f}from"./entry-client-e7f04580.js";import{A as n,c as i,D as g}from"./Theme-c9d85115.js";import"./index-326c8233.js";import{c}from"./createGlobalStyle-51c6cfe9.js";var S=(e=>(e.Dark="dark",e.Light="light",e))(S||{});const m=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function y(e){const o=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>{o.matches?e("dark"):e("light")};return o.addEventListener("change",r),()=>o.removeEventListener("change",r)}const l={primary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',secondary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'},b={smRadius:"0.25em",mdRadius:"0.5em",lgRadius:"0.75em"},d={timing:{ease:"cubic-bezier(0.25, 0.1, 0.25, 1)",slider:"cubic-bezier(0.05, 0.95, 0.35, 1.05)",slideStop:"cubic-bezier(0.05, 0.05, 0, 1)",timingThrottle:"cubic-bezier(0.95, 0, 0.95, 0.25)"}},k={border:b,font:l,breakpoints:new g,animation:d,colors:{success:"#145222",onSuccess:"#adebbb",warning:"#624904",onWarning:"#fbe29d",error:"#640202",onError:"#fdb4b4",info:"#133353",onInfo:"#99c9ff",primary:"#119c8c",primary100:"#14b8a5",primary200:"#17d3bd",primary300:"#23e7d0",primary400:"#3fe9d5",primary500:"#5aeddc",accent:"rgb(59,130,246)",accent100:"rgb(89,150,247)",accent200:"rgb(119,168,249)",accent300:"rgb(148,187,250)",accent400:"rgb(177,206,251)",accent500:"rgb(206,224,253)",bg:"#121212",bg100:"#1e1e1e",bg200:"#2c2c2c",bg300:"#3a3a3a",bg400:"#464646",bg500:"#525252",onBg:"rgb(255,255,255)",onBg100:"rgb(237,237,237)",onBg200:"rgb(219,219,219)",onBg300:"rgb(201,201,201)",onBg400:"rgb(184,184,184)",onBg500:"rgb(166,166,166)",backdrop:"rgba(15, 23, 42, 1)"}},B={font:l,border:b,breakpoints:new g,animation:d,colors:{success:"#84e19a",onSuccess:"#0a2911",warning:"#f9d36c",onWarning:"#312402",error:"#fc6969",onError:"#4b0202",info:"#82b3e3",onInfo:"#001833",primary:"rgb(23,207,185)",primary100:"rgb(18,161,144)",primary200:"rgb(15,138,123)",primary300:"rgb(13,115,103)",primary400:"rgb(10,92,82)",primary500:"rgb(8,69,62)",accent:"rgb(59,130,246)",accent100:"rgb(26,110,244)",accent200:"rgb(11,92,224)",accent300:"rgb(9,78,190)",accent400:"rgb(7,64,156)",accent500:"rgb(6,50,122)",bg:"rgb(246,246,247)",bg100:"rgb(225,225,229)",bg200:"rgb(204,204,209)",bg300:"rgb(182,182,190)",bg400:"rgb(160,160,171)",bg500:"rgb(139,139,152)",onBg:"rgb(0,0,0)",onBg100:"rgb(23,23,23)",onBg200:"rgb(46,46,46)",onBg300:"rgb(69,69,69)",onBg400:"rgb(92,92,92)",onBg500:"rgb(115,115,115)",backdrop:"rgba(0, 0, 0, 0.5)"}},C=c`
    :root * {
        font-family: ${n.font.secondary};
    }

    a {
        color: #0060FE;
    }

    a:hover {
        color: #266bd9;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${n.font.primary};
    }

    p {
        line-height: 1.75rem;
        letter-spacing: 0.05rem;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background: ${n.colors.onBg500};
        color: ${n.colors.bg100};
        border-radius: ${n.border.smRadius};
        padding: 1px 3px;
    }
`;function L(e){const o=s(()=>i(k)),r=c`${e.containerCssSelector} {
        ${o()}
    }`;return t(r,{})}function w(e){const o=s(()=>i(B)),r=c`${e.containerCssSelector} {
        ${o()}
    }`;return t(r,{})}const a="anique-theme-key";function v(e,o,r){(o==null||o)&&e==m()?localStorage.removeItem(r||a):localStorage.setItem(r||a,e)}function $(e){p(()=>{const r=localStorage.getItem(e.localStorageKey||a);r==null?(document.documentElement.className=m(),(e.trackSystemTheme==null||e.trackSystemTheme)&&y(h=>{document.documentElement.className=h})):document.documentElement.className=r});const o=c`
        :root.dark {
            color-scheme: dark;
        }

        :root.light {
            color-scheme: light;
        }
    `;return[t(w,{containerCssSelector:".light"}),t(L,{containerCssSelector:".dark"}),t(C,{}),t(o,{})]}const A=f('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 60 60"><path id=theme-light-dark d=M18.272,3a18.556,18.556,0,0,0,.089,31.716A16.081,16.081,0,0,1,2,18.856,16.069,16.069,0,0,1,18.272,3M52.5,7.323l4.231,4.123L10.669,56.338,6.438,52.215,52.5,7.323M34.219,14.329,29.84,11.648l-4.26,2.883,1.243-4.9L22.71,6.573l5.178-.346L29.6,1.47l1.982,4.7,5.118.086L32.71,9.514l1.509,4.815M24.456,24.738l-3.432-2.1L17.71,24.882l1.006-3.806-3.225-2.393,4.024-.259L20.846,14.7l1.509,3.662,4.024.086-3.107,2.508,1.183,3.777M52.3,36.155A16.069,16.069,0,0,1,36.024,52.013a16.519,16.519,0,0,1-9.645-3.085L49.13,26.756a15.555,15.555,0,0,1,3.166,9.4M39.278,55.127l8.2-3.316-.71,9.659-7.485-6.343m12.811-7.785,3.4-7.987L62,46.679l-9.911.663m3.4-14.3-3.373-8.015L62,25.718l-6.509,7.323M24.574,51.811l8.2,3.316-7.485,6.314Z transform="translate(-2 -1.47)">'),j=()=>u(A);export{$ as A,S as C,j as L,v as s};
