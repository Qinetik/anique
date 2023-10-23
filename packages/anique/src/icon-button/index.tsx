import {styled} from "@qinetik/emotion";
import {Size} from "../theme/Size";
import {Anique} from "../theme/Theme";

interface IconButtonProps {
    children?: any
    disableAutoFill?: boolean
    size?: Size | number
}

export const IconButton = styled("div")<IconButtonProps>`

    width: ${p => 2 + 1 * (p.size || 0)}rem;
    height: ${p => 2 + 1 * (p.size || 0)}rem;
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
        background: ${Anique.colors.bg300};
    }

    &:active {
        background: ${Anique.colors.bg400};
    }

`