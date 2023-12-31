import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";

const ButtonBase = styled("button", {
    shouldForwardProp: (prop) => prop != "size"
})<{
    size?: Size
}>`

    box-sizing: border-box;
    padding: ${p => 0.8 + (p.size ? (p.size * 0.25) : 0)}em ${p => 0.8 + (p.size ? (p.size * 0.5) : 0)}em;
    background: ${Anique.colors.primary};
    border-radius: ${Anique.border.lgRadius};
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:disabled {
        background: ${Anique.colors.bg500};
        cursor: default;
    }

    &:hover:not(&:disabled) {
        background: ${Anique.colors.primary100};
    }

    &:active:not(&:disabled) {
        background: ${Anique.colors.primary200};
    }

`

export const Button = ButtonBase