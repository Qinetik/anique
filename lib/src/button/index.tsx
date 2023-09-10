import {styled, useTheme} from "@qinetik/emotion";

const ButtonBase = styled("button")`

    box-sizing: border-box;
    padding: 0.8em 1em;
    background: ${p => p.theme.colors.bg400};
    border-radius: 8px;
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:hover {
        background: ${p => p.theme.colors.bg500};
    }

    &:active {
        background: ${p => p.theme.colors.bg400};
    }

`

export const Button = ButtonBase