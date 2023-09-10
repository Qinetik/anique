import {styled, useTheme} from "@qinetik/emotion";
import {createRipple, createThemedRipple} from "../ripple";
import {rgbColorWithOpacity} from "../utils/color-utils";

interface IconButtonProps {
    children?: any
    disableAutoFill?: boolean
    onClick?: () => void
}

const IconButtonContainer = styled("div")<IconButtonProps>`

    width: 2rem;
    height: 2rem;
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

`

export function IconButton(props: IconButtonProps) {
    const theme = useTheme()
    return (
        <IconButtonContainer
            children={props.children}
            onClick={(e) => {
                createThemedRipple(theme.colors.onBg, e)
                props.onClick != null ? props.onClick() : null
            }}
        />
    )
}