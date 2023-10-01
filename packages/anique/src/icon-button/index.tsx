import {styled} from "@qinetik/emotion";
import {Size} from "../theme/Size";
import {Anique} from "../theme/Theme";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

interface IconButtonProps {
    children?: any
    disableAutoFill?: boolean
    size?: Size
}

export const IconButton: StyledOtherComponent<IconButtonProps, JSX.IntrinsicElements["div"]> = styled("div")<IconButtonProps>`

    width: ${p => 2 + 0.5 * (p.size || 0)}rem;
    height: ${p => 2 + 0.5 * (p.size || 0)}rem;
    border-radius: 50%;

    ${p => p.disableAutoFill ? "" : `fill:${Anique.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${p => 1.5 + (p.size || 0) * 0.3}rem;
        height: ${p => 1.5 + (p.size || 0) * 0.3}rem;
    }

    &:hover {
        background: ${Anique.colors.primary};
    }

    &:active {
        background: ${Anique.colors.primary100};
    }

`