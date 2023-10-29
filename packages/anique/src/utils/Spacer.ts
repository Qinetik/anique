import {styled} from "@qinetik/emotion";

export const Spacer = styled("div", {
    shouldForwardProp : (prop) => prop != "width" && prop != "height"
})<{
    width?: string
    height?: string
}>`
    width: ${p => p.width || "100%"};
    height: ${p => p.height || "100%"};
`