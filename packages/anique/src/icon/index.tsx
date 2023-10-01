import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export interface IconProps {
    size ?: Size
}

export const Icon: StyledOtherComponent<IconProps, JSX.IntrinsicElements["div"]> = styled("div")<IconProps>`
    fill: ${Anique.colors.onBg};
    width: ${p => 0.5 + ((p.size || 1))}rem;
    height: ${p => 0.5 + ((p.size || 1))}rem;
`