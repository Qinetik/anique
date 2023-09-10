import {styled, useTheme} from "@qinetik/emotion";
import {createThemedRipple} from "../ripple";
import {rgbColorWithOpacity} from "../utils/color-utils";

export enum IconButtonSize {
    Small = 2,
    Medium = 2.5,
    Large = 3
}

interface IconButtonProps {
    children?: any
    disableAutoFill?: boolean
    onClick?: () => void
    size ?: IconButtonSize
}

const IconButtonContainer = styled("div")<IconButtonProps>`

    width: ${p => p.size || 2}rem;
    height: ${p => p.size || 2}rem;
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