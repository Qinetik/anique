import {styled} from "@qinetik/emotion";

export const Card = styled("div")`
    border-radius: ${p => p.theme.border.mdRadius};
    background: ${p => p.theme.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`