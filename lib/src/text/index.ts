import {styled} from "@qinetik/emotion";
import {OnBgColors} from "../theme/Colors";

export const Text = styled("span")<{
    color?: keyof OnBgColors
}>`
    font-family: ${p => p.theme.font.secondary};
    color: ${p => p.theme.colors[p.color || "onBg"]};
`

export const Label = styled(Text)`
    font-size: 0.8rem;
`