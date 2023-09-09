import {styled} from "@qinetik/emotion";

export const Text = styled("span")`
    font-family: ${p => p.theme.font.secondary};
    color : ${p => p.theme.colors.onBg}
`