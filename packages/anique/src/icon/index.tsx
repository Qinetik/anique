import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";

export interface IconProps {
    fill ?: string
    size ?: Size
}

export const Icon = styled("div")<IconProps>`
    fill: ${p=> p.fill || Anique.colors.onBg};
    width: ${p => 0.5 + ((p.size || 1))}rem;
    height: ${p => 0.5 + ((p.size || 1))}rem;
`