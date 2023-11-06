import{c as o,g as e,t}from"./entry-client-e7f04580.js";import{D as n}from"./DocContainer-7be6c4d6.js";import{A as r,a as s}from"./index-505673d9.js";import"./index-c9b3d057.js";import"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import{C as a}from"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-99f4859e.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./Theme-c9d85115.js";import"./index-326c8233.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import{D as i}from"./DisplayCode-428ca051.js";import"./Menu-55b10e18.js";import"./LightDarkIcon-b8f946db.js";import"./createGlobalStyle-51c6cfe9.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),h=t("<h1>Styling"),d=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),S=t("<h3>Global Styles"),f=t("<h3>Animation"),v=t("<h3>Hydration Error"),C=t("<span>Hydration error can occur if you use component like this"),k=t("<span>To fix this you must invoke it as a function"),A=t("<h3>A note for Astro"),q=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),w=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function ie(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
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
`}),e(A),e(q),e(w)]}})}})}export{ie as default};
