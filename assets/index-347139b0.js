import{c as o,g as e,t}from"./entry-client-2ac2a0bd.js";import{D as n}from"./DocContainer-097753bf.js";import{A as r,a as s}from"./index-049cff28.js";import"./index-5cdee6ed.js";import"./index-1f767762.js";import"./index-2e914305.js";import{C as a}from"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-9f77492a.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./Theme-c9d85115.js";import"./index-6df8a466.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import{D as i}from"./DisplayCode-31cb14c9.js";import"./Menu-28504fdf.js";import"./AniqueThemes-9b9ac866.js";import"./createGlobalStyle-25c4266a.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const m=t("<h1>Theming"),l=t("<span>You can avoid all theming by using this component preferably in <code>Head</code> component or maybe in Body"),p=t("<h3>Manual Theming"),u=t("<h3>Changing Theme"),c=t("<span>When user wants to update the theme, You should just update the class of the <code>html</code> element"),d=t("<h1>Styling"),h=t("<span>This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object which uses css variables under the hood."),y=t("<span>Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package"),g=t("<h3>CSS"),f=t("<h3>Global Styles"),S=t("<h3>Animation"),v=t("<h3>A note for Astro"),A=t("<span>Astro with CSS in JS library does not support SSR, This will be done in future, If you want to develop with Astro"),C=t("<span>You must either not use SSR or override StyledEngineContext Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work");function Z(){return o(n,{get children(){return o(a,{gap:"1em",get children(){return[e(m),e(l),o(i,{value:`import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
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
