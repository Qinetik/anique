import {styled, useTheme} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

const ButtonBase = styled("button")`

    box-sizing: border-box;
    padding: 0.8em 1em;
    background: ${Anique.colors.bg400};
    border-radius: 8px;
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:hover {
        background: ${Anique.colors.bg500};
    }

    &:active {
        background: ${Anique.colors.bg400};
    }

`

export const Button = ButtonBase