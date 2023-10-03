import {styled} from "@qinetik/emotion";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";
import {Anique, BgColors, BrandColors, ResultColors} from "../theme";

export interface ChipProps {
    background ?: keyof BgColors | keyof ResultColors | keyof BrandColors
}

export const Chip: StyledOtherComponent<ChipProps, JSX.IntrinsicElements["div"]> = styled("div")`
    display: inline-block;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${Anique.colors.onBg100};
    border-radius: ${Anique.border.mdRadius};
    background : ${pg=> Anique.colors[pg.background || "bg100"]};
`