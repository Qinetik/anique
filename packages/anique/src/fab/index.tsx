import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export interface FabProps {

}

const FabBase = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    background: ${Anique.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${Anique.colors.primary100};
    }

    &:active {
        background: ${Anique.colors.primary200};
    }
`

export const Fab = styled(FabBase)`
    width: 3em;
    border-radius: 50%;
`

export const ExtendedFab = styled(FabBase)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: 0 1em;
    width: max-content;
    border-radius: 1.5em;
`