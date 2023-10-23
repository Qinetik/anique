import {styled} from "@qinetik/emotion";
import {Anique, BgColors, BrandColors, ResultColors} from "../theme";

export interface ChipProps {
    variation?: "bg" | "primary" | "accent"
    background?: keyof BgColors | keyof ResultColors | keyof BrandColors
}

export const Chip = styled("div")<ChipProps>`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${Anique.colors.onBg100};
    border-radius: ${Anique.border.mdRadius};
    background: ${pg =>
        // @ts-ignore
        Anique.colors[((pg.variation || "bg") + "100")]
    };
    user-select: none;
`

export const ClickableChip = styled(Chip)`

    cursor: pointer;

    &:hover {
        background: ${p =>
            // @ts-ignore
            Anique.colors[((p.variation || "bg") + "300")]
        };
    }

    &:active {
        background: ${p =>
            // @ts-ignore
            Anique.colors[((p.variation || "bg") + "400")]
        };
    }

`