import {styled} from "@qinetik/emotion";
import {Size} from "../theme/Size";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export const Headline: StyledOtherComponent<{ size?: Size }, JSX.IntrinsicElements["h1"]> = styled("h1")<{
    size ?: Size
}>`
    font-weight: 100;
    font-size : ${p => 3 + (p.size ? p.size : 0)}rem;
`