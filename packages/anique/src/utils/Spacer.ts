import {styled} from "@qinetik/emotion";
import {JSX} from "solid-js";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";

export const Spacer: StyledOtherComponent<{ width?: string; height?: string }, JSX.IntrinsicElements["div"]> = styled("div")<{
    width?: string
    height?: string
}>`
    width: ${p => p.width || "100%"};
    height: ${p => p.height || "100%"};
`