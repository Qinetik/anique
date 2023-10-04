import {styled, useTheme} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";
import {JSX} from "solid-js";

const ButtonBase = styled("button")<{
    size ?: Size
}>`

    box-sizing: border-box;
    padding: ${p=> 0.8 + (p.size ? (p.size * 0.25) : 0)}em ${p=> 0.8 + (p.size ? (p.size * 0.5) : 0)}em;
    background: ${Anique.colors.primary};
    border-radius: 8px;
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:hover {
        background: ${Anique.colors.primary100};
    }

    &:active {
        background: ${Anique.colors.primary200};
    }

`

export const Button = ButtonBase