import {styled} from "@qinetik/emotion";

export const H1 = styled("h1")`
    color: red;
`

export const H2 = styled("h2", {
    shouldForwardProp: (propName) => propName != "color"
})<{ color: string }>`
    color: ${p => p.color};
`