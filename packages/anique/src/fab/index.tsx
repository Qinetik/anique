import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";

export interface FabProps {
    size ?: Size
}

const FabBase = styled("div")<FabProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Anique.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${Anique.colors.primary100};
    }

    &:active {
        background: ${Anique.colors.primary200};
    }
`

export const Fab = styled(FabBase)<FabProps>`
    width: ${p=> 3 + (p.size || 0)}em;
    height: ${p=> 3 + (p.size || 0)}em;
    border-radius: 50%;
`

export const ExtendedFab = styled(FabBase)<FabProps>`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${p=> (p.size || 0)}em ${p=> 1 + ((p.size || 0) * 0.5)}em;
    width: max-content;
    height: ${p=> 3 + (p.size || 0) * 0.25}em;
    border-radius: 99em;
`