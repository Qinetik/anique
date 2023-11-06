import {DocContainer} from "../../components/common/layout/DocContainer";
import {Alert, AlertType, Column} from "@qinetik/anique";
import {DisplayCode} from "../../components/common/code/DisplayCode";
import {AniqueStyledEngineContext} from "@qinetik/emotion/engine";

export default function ThemingPage() {


    return (
        <DocContainer>
            <Column gap={"1em"}>

                <h1>Theming</h1>

                <span>You can avoid all theming by using this component
                preferably in <code>Head</code> component or maybe in Body</span>

                <DisplayCode
                    value={
                        `import {AniqueThemeAutoSetup} from '@qinetik/anique/theme'
                        
// Use it in your Head or Body
<AniqueThemeAutoSetup />
`
                    }/>

                <h3>Manual Theming</h3>

                Anique at the moment provides two themes, Dark & Light, Any theme you want to use in Anique
                you must include in your Page.

                <DisplayCode
                    value={
                        `import {AniqueThemeLight, AniqueThemeDark} from "@qinetik/anique"

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
`
                    }/>

                <h3>Changing Theme</h3>

                <span>When user wants to update the theme, You should just update the class of the <code>html</code> element</span>

                <DisplayCode value={`document.documentElement.className = 'light' // or dark
saveThemeIntoLocalStorage('light') // imported from @qinetik/anique/theme, uses key 'anique-theme-key'
`}/>

                <h1>Styling</h1>

                You'll find that Anique is very simple to use with CSS in JS

                Here's a very simple code snippet to create a `div` with styling

                <DisplayCode
                    value={`import {styled} from "@qinetik/emotion";
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
}`}
                />

                <Alert type={AlertType.Info}>CSS in JS supports Server Side Rendering with solid-start</Alert>

                <span>
                    This was a very basic example ofcourse. All the theme styling is done using <code>Anique</code> object
                which uses css variables under the hood.
                </span>

                <span>
                    Anique also has the ability to get theme from context, You just need to provide the theme via <code>ThemeProvider</code> which is also available in <code>@qinetik/emotion</code> package
                </span>

                Let's go over more ways to use Anique's CSS in JS library

                <h3>CSS</h3>

                <DisplayCode
                    value={`import {css} from "@qinetik/emotion";

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
}`}
                />

                You must invoke CssStyles inside the component because its a hook

                <h3>Global Styles</h3>

                Only createGlobalStyle supports CssStyles & Keyframes selectors

                <DisplayCode value={
                    `const GlobalStyles = createGlobalStyle\`
.global-para {
    color: red;
}

\${CssStyles} {
    background: green;
    animation: \${Keyframes} 1s ease-in;
    animation-iteration-count: infinite;
}\``

                } />

                <h3>Animation</h3>

                Here we will create a keyframes animation, which gets assigned a name when you create it

                <DisplayCode
                    value={`import {keyframes,styled} from "@qinetik/emotion";

const SpinnerAnimation = keyframes\`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}\`

// Mount the component once / twice, Only first instance counts
<SpinnerAnimation />
`
                    }
                />

                <h3>Hydration Error</h3>

                <span>
                    Hydration error can occur if you use component like this
                </span>

                <DisplayCode value={`const MyComp = <StyledCompo />
return (
   <div>
     {MyComp}
   </div>
)
`} />

                <span>
                    To fix this you must invoke it as a function
                </span>

                <DisplayCode value={`const MyComp = () => <StyledCompo />
return (
   <div>
     <MyComp />
   </div>
)
`} />


                <h3>A note for Astro</h3>

                <span>
                    Astro with CSS in JS library does not support SSR, This will be done in future,
                If you want to develop with Astro
                </span>

                <span>
                    You must either not use SSR or override StyledEngineContext
                    Configuration <code>AniqueStyledEngineContext</code>, And use injectionStrategy of Sibling for it to work
                </span>

            </Column>
        </DocContainer>
    )

}