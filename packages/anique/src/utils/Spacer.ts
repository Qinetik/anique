import {styled} from "@qinetik/emotion";

export const Spacer = styled("div")<{
    width?: string
    height?: string
}>`
    width: ${p => p.width || "100%"};
    height: ${p => p.height || "100%"};
`