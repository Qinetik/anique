import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export const Card: StyledOtherComponent<object, JSX.IntrinsicElements["div"]> = styled("div")`
    border-radius: ${Anique.border.mdRadius};
    background: ${Anique.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`