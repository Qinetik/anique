import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";

export interface IconProps {
    fill?: string
    size?: Size
}

export const Icon = styled("div", {
    shouldForwardProp : (prop) => prop != "size" && prop != "fill"
})<IconProps>`

    fill: ${p => p.fill || Anique.colors.onBg};
    width: ${p => 1.5 + ((p.size || 0))}em;
    height: ${p => 1.5 + ((p.size || 0))}em;

    & > svg {
        width: ${p => 1.5 + (p.size || 0)}em;
        height: ${p => 1.5 + (p.size || 0)}em;
        fill: ${p => p.fill || Anique.colors.onBg};
    }
`