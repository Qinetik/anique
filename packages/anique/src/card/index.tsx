import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export const Card = styled("div")`
    border-radius: ${Anique.border.mdRadius};
    background: ${Anique.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`

export const ClickableCard = styled(Card)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${Anique.colors.bg300};
    }
    
    &:active {
        background: ${Anique.colors.bg400};
    }

`