import {styled} from "@qinetik/emotion";
import {Anique, BgColors, BrandColors, ResultColors} from "../theme";

export interface ChipProps {
    background ?: keyof BgColors | keyof ResultColors | keyof BrandColors
}

export const Chip = styled("div")<ChipProps>`
    display: inline-block;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${Anique.colors.onBg100};
    border-radius: ${Anique.border.mdRadius};
    background : ${pg=> Anique.colors[pg.background || "bg100"]};
`