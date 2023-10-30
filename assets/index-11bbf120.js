import{c as o,g as e,t}from"./entry-client-2fda6d46.js";import{D as n}from"./DocContainer-0b194602.js";import{A as r,a as s}from"./index-50dde1b3.js";import"./index-880dcc90.js";import"./index-8c496293.js";import"./index-7a43a4af.js";import{C as a}from"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-d65ca23f.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./Theme-c9d85115.js";import"./index-bb5a5d3d.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import{D as i}from"./DisplayCode-7a66622d.js";import"./Menu-f2088714.js";import"./AniqueThemes-083b991a.js";import"./createGlobalStyle-954222f7.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),d=t("<h1>Styling"),h=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),f=t("<h3>Global Styles"),S=t("<h3>Animation"),v=t("<h3>A note for Astro"),A=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),C=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function Z(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
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
