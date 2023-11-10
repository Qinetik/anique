import{c as o,g as e,t}from"./entry-client-f8a4ae77.js";import{D as n}from"./DocContainer-d0e3af14.js";import{A as r,a as s}from"./index-9faa6ccb.js";import"./index-c7e055fe.js";import"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import{C as a}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-e26dcbaa.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./Theme-c9d85115.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import{D as i}from"./DisplayCode-ef2a5ddf.js";import"./Menu-b86ecec2.js";import"./LightDarkIcon-601c6a1c.js";import"./createGlobalStyle-c03825ae.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),h=t("<h1>Styling"),d=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),S=t("<h3>Global Styles"),f=t("<h3>Animation"),v=t("<h3>Hydration Error"),C=t("<span>Hydration error can occur if you use component like this"),k=t("<span>To fix this you must invoke it as a function"),A=t("<h3>A note for Astro"),q=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),w=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function ie(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
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
