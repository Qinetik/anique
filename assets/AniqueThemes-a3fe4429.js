import{l,c as n,f as c}from"./entry-client-efb8f723.js";import{A as t,c as i,D as s}from"./Theme-c9d85115.js";import"./index-e694302e.js";import{c as a}from"./createGlobalStyle-ed258bb1.js";var d=(e=>(e.Dark="dark",e.Light="light",e))(d||{});const p=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function h(e){const r=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>{r.matches?e("dark"):e("light")};return r.addEventListener("change",o),()=>r.removeEventListener("change",o)}const g={primary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',secondary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'},m={smRadius:"0.25em",mdRadius:"0.5em",lgRadius:"0.75em"},b={timing:{ease:"cubic-bezier(0.25, 0.1, 0.25, 1)",slider:"cubic-bezier(0.05, 0.95, 0.35, 1.05)",slideStop:"cubic-bezier(0.05, 0.05, 0, 1)",timingThrottle:"cubic-bezier(0.95, 0, 0.95, 0.25)"}},u={border:m,font:g,breakpoints:new s,animation:b,colors:{success:"#145222",onSuccess:"#adebbb",warning:"#624904",onWarning:"#fbe29d",error:"#640202",onError:"#fdb4b4",info:"#133353",onInfo:"#99c9ff",primary:"#119c8c",primary100:"#14b8a5",primary200:"#17d3bd",primary300:"#23e7d0",primary400:"#3fe9d5",primary500:"#5aeddc",accent:"rgb(59,130,246)",accent100:"rgb(89,150,247)",accent200:"rgb(119,168,249)",accent300:"rgb(148,187,250)",accent400:"rgb(177,206,251)",accent500:"rgb(206,224,253)",bg:"#121212",bg100:"#1e1e1e",bg200:"#2c2c2c",bg300:"#3a3a3a",bg400:"#464646",bg500:"#525252",onBg:"rgb(255,255,255)",onBg100:"rgb(237,237,237)",onBg200:"rgb(219,219,219)",onBg300:"rgb(201,201,201)",onBg400:"rgb(184,184,184)",onBg500:"rgb(166,166,166)",backdrop:"rgba(15, 23, 42, 1)"}},f={font:g,border:m,breakpoints:new s,animation:b,colors:{success:"#84e19a",onSuccess:"#0a2911",warning:"#f9d36c",onWarning:"#312402",error:"#fc6969",onError:"#4b0202",info:"#82b3e3",onInfo:"#001833",primary:"rgb(23,207,185)",primary100:"rgb(18,161,144)",primary200:"rgb(15,138,123)",primary300:"rgb(13,115,103)",primary400:"rgb(10,92,82)",primary500:"rgb(8,69,62)",accent:"rgb(59,130,246)",accent100:"rgb(26,110,244)",accent200:"rgb(11,92,224)",accent300:"rgb(9,78,190)",accent400:"rgb(7,64,156)",accent500:"rgb(6,50,122)",bg:"rgb(246,246,247)",bg100:"rgb(225,225,229)",bg200:"rgb(204,204,209)",bg300:"rgb(182,182,190)",bg400:"rgb(160,160,171)",bg500:"rgb(139,139,152)",onBg:"rgb(0,0,0)",onBg100:"rgb(23,23,23)",onBg200:"rgb(46,46,46)",onBg300:"rgb(69,69,69)",onBg400:"rgb(92,92,92)",onBg500:"rgb(115,115,115)",backdrop:"rgba(0, 0, 0, 0.5)"}},S=a`
    :root * {
        font-family: ${t.font.secondary};
    }

    a {
        color: #0060FE;
    }

    a:hover {
        color: #266bd9;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${t.font.primary};
    }

    p {
        line-height: 1.75rem;
        letter-spacing: 0.05rem;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background: ${t.colors.onBg500};
        color: ${t.colors.bg100};
        border-radius: ${t.border.smRadius};
        padding: 1px 3px;
    }
`;function y(e){const r=c(()=>i(u)),o=a`${e.containerCssSelector} {
        ${r()}
    }`;return n(o,{})}function k(e){const r=c(()=>i(f)),o=a`${e.containerCssSelector} {
        ${r()}
    }`;return n(o,{})}function w(){l(()=>{const r=localStorage.getItem("anique-theme-key");r==null?(document.documentElement.className=p(),h(o=>{document.documentElement.className=o})):document.documentElement.className=r});const e=a`
        :root.dark {
            color-scheme: dark;
        }

        :root.light {
            color-scheme: light;
        }
    `;return[n(k,{containerCssSelector:".light"}),n(y,{containerCssSelector:".dark"}),n(S,{}),n(e,{})]}export{w as A,d as C,p as g};
