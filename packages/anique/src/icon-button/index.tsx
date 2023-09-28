import {styled} from "@qinetik/emotion";
import {rgbColorWithOpacity} from "../utils/color-utils";
import {Size} from "../theme/Size";
import {Anique} from "../theme/Theme";

interface IconButtonProps {
    children?: any
    disableAutoFill?: boolean
    onClick?: () => void
    size?: Size
}

const IconButtonContainer = styled("div")<IconButtonProps>`

    width: ${p => 2 + 0.5 * (p.size || 0)}rem;
    height: ${p => 2 + 0.5 * (p.size || 0)}rem;
    border-radius: 50%;

    ${p => p.disableAutoFill ? "" : `fill:${Anique.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        background: ${Anique.colors.onBg500};
    }

    &:active {
        background: ${Anique.colors.onBg400};
    }

`

export function IconButton(props: IconButtonProps) {
    return (
        <IconButtonContainer
            children={props.children}
            size={props.size}
            onClick={props.onClick}
        />
    )
}