import {createGlobalStyle, css, keyframes, styled} from "@qinetik/emotion";

const CssStyles = css`
    color: blue;
`

const StyledEle = styled("h3")`

    color: yellow;

    &:hover {
        color: red;
    }

`

const StyledExtended = styled(StyledEle)`

    color: pink;

    &:hover {
        color: blue;
    }

`

const WithComponent = StyledExtended.withComponent("em")

const Keyframes = keyframes`
    0% {
        margin-left: 0;
    }
    50% {
        margin-left: 100px;
    }
    100% {
        margin-left: 0;
    }
`

const GlobalStyles = createGlobalStyle`

    .global-para {
        color: red;
    }

    ${CssStyles} {
        background: green;
        animation: ${Keyframes} 1s ease-in;
        animation-iteration-count: infinite;
    }

`


export default function Home() {
    return (
        <main>
            <div>Shit works</div>
            <Keyframes/>
            <GlobalStyles/>
            <div class={"global-para"}>
                <p>Global Styles are working if this is red</p>
            </div>
            <h2>Css is working, if color is blue, Component Selector working if background
                green</h2>
            <StyledEle>This should be yellow for styled, on hover red</StyledEle>
            <StyledExtended>This should be pink for extended styled, on hover blue</StyledExtended>
            <WithComponent>This should be italic pink for withComponent to work</WithComponent>
        </main>
    )
}
