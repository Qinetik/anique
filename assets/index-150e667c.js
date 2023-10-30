import{c as o,g as e,t}from"./entry-client-a96cbc4d.js";import{D as n}from"./DocContainer-547c62fd.js";import{A as r,a as s}from"./index-9b146908.js";import"./index-41256d2f.js";import"./index-b3c017de.js";import"./index-fe490c73.js";import{C as a}from"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-0f3f083d.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./Theme-c9d85115.js";import"./index-755bc77f.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import{D as i}from"./DisplayCode-77c26fe6.js";import"./Menu-7421c823.js";import"./AniqueThemes-09cba5ab.js";import"./createGlobalStyle-b681c0b4.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),d=t("<h1>Styling"),h=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),f=t("<h3>Global Styles"),S=t("<h3>Animation"),v=t("<h3>A note for Astro"),A=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),C=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function Z(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
// Use it in your Head or Body
<AniqueThemeAutoSetup />
`}),e(p),"Anique at the moment provides two themes, Dark & Light, Any theme you want to use in Anique you must include in your Page.",o(i,{value:`import {AniqueThemeLight, AniqueThemeDark} from "@qinetik/anique"

// Themes will be applied to .light or .dark class name containers
<AniqueThemeLight containerCssSelector={".light"} />
<AniqueThemeDark containerCssSelector={".dark"} />

// You should use .light or .dark class name on html element like this
<html class={"light"}>
`}),e(u),e(c),o(i,{value:"document.documentElement.className = 'light' // or dark"}),e(d),"You'll find that Anique is very simple to use with CSS in JS Here's a very simple code snippet to create a `div` with styling",o(i,{value:`import {styled} from "@qinetik/emotion";
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
}`}),o(r,{get type(){return s.Info},children:"CSS in JS supports Server Side Rendering with solid-start"}),e(h),e(y),"Let's go over more ways to use Anique's CSS in JS library",e(g),o(i,{value:`import {css} from "@qinetik/emotion";

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
}`}),"You must invoke CssStyles inside the component because its a hook",e(f),"Only createGlobalStyle supports CssStyles & Keyframes selectors",o(i,{value:`const GlobalStyles = createGlobalStyle\`
.global-para {
    color: red;
}

\${CssStyles} {
    background: green;
    animation: \${Keyframes} 1s ease-in;
    animation-iteration-count: infinite;
}\``}),e(S),"Here we will create a keyframes animation, which gets assigned a name when you create it",o(i,{value:`import {keyframes,styled} from "@qinetik/emotion";

const SpinnerAnimation = keyframes\`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}\`

// Mount the component once / twice, Only first instance counts
<SpinnerAnimation />
`}),e(v),e(A),e(C)]}})}})}export{Z as default};
