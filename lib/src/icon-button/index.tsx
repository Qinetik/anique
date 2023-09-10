import {styled} from "@qinetik/emotion";
import {rgbColorWithOpacity} from "../utils/color-utils";
import {Size} from "../theme/Size";

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

    ${p => p.disableAutoFill ? "" : `fill:${p.theme.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        background: ${p => rgbColorWithOpacity(p.theme.colors.onBg, 0.2)};
    }

    &:active {
        background: ${p => rgbColorWithOpacity(p.theme.colors.onBg, 0.4)};
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