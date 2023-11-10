import{c as o,g as e,t}from"./entry-client-fa648c77.js";import{D as n}from"./DocContainer-de2b6cce.js";import{A as r,a as s}from"./index-a3de9b85.js";import"./index-738815bd.js";import"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import{C as a}from"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-906196f8.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./Theme-c9d85115.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{D as i}from"./DisplayCode-52ee7ce6.js";import"./Menu-abd2039e.js";import"./LightDarkIcon-e977e7ca.js";import"./createGlobalStyle-758c7b5a.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),h=t("<h1>Styling"),d=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),S=t("<h3>Global Styles"),f=t("<h3>Animation"),v=t("<h3>Hydration Error"),C=t("<span>Hydration error can occur if you use component like this"),k=t("<span>To fix this you must invoke it as a function"),A=t("<h3>A note for Astro"),q=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),w=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function ne(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
// Use it in your Head or Body
<AniqueThemeAutoSetup />
`}),e(p),"Anique at the moment provides two themes, Dark & Light, Any theme you want to use in Anique you must include in your Page.",o(i,{value:`import {AniqueThemeLight, AniqueThemeDark} from "@qinetik/anique"

// Themes will be applied to .light or .dark class name containers
<AniqueThemeLight containerCssSelector={".light"} />
<AniqueThemeDark containerCssSelector={".dark"} />

// Apply color scheme like with this
// This will change scrollbars on the page to have dark / light theme as well
const ColorSchemeStyles = css\`
    :root.dark {
        color-scheme: dark;
    }
    
    :root.light {
        color-scheme: light;
    }
\`

// You should use .light or .dark class name on html element like this
<html class={"light"}>
<head>
    <ColorSchemeStyles />
`}),e(u),e(c),o(i,{value:`document.documentElement.className = 'light' // or dark
saveThemeIntoLocalStorage('light') // imported from @qinetik/anique/theme, uses key 'anique-theme-key'
`}),e(h),"You'll find that Anique is very simple to use with CSS in JS Here's a very simple code snippet to create a `div` with styling",o(i,{value:`import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique";

const MyContainer = styled("div")\`
    border-radius : 6px;
    padding : 1rem;
    background : \${Anique.colors.bg200};
\`

const Extended = styled(MyContainer)\`
    padding : 1em;
\`

// as prop is not supported, use withComponent
const Different = MyContainer.withComponent("div")

// Let's use our created div
export function Use() {
    return (
        <MyContainer>
            Hello Mate! I am the container
        </MyContainer>
    )
}`}),o(r,{get type(){return s.Info},children:"CSS in JS supports Server Side Rendering with solid-start"}),e(d),e(y),"Let's go over more ways to use Anique's CSS in JS library",e(g),o(i,{value:`import {css} from "@qinetik/emotion";

const CssStyles = css\`
    color: blue;
\`

// To use context theme inside css, You must make it a function
const InvokeMeTwice = (theme) => css\`
    color: blue;
\`

// Let's use our created div
export function Use() {
    return (
        <div class={CssStyles()}>
            Hello Mate! I am the container
        </div>
    )
}`}),"You must invoke CssStyles inside the component because its a hook",e(S),"Only createGlobalStyle supports CssStyles & Keyframes selectors",o(i,{value:`const GlobalStyles = createGlobalStyle\`
.global-para {
    color: red;
}

\${CssStyles} {
    background: green;
    animation: \${Keyframes} 1s ease-in;
    animation-iteration-count: infinite;
}\``}),e(f),"Here we will create a keyframes animation, which gets assigned a name when you create it",o(i,{value:`import {keyframes,styled} from "@qinetik/emotion";

const SpinnerAnimation = keyframes\`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}\`

// Mount the component once / twice, Only first instance counts
<SpinnerAnimation />
`}),e(v),e(C),o(i,{value:`const MyComp = <StyledCompo />
return (
   <div>
     {MyComp}
   </div>
)
`}),e(k),o(i,{value:`const MyComp = () => <StyledCompo />
return (
   <div>
     <MyComp />
   </div>
)
`}),e(A),e(q),e(w)]}})}})}export{ne as default};
