import {styled} from "@qinetik/emotion";

export interface FabProps {

}

const FabBase = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    background: ${p => p.theme.colors.bg300};
    cursor: pointer;

    &:hover {
        background: ${p => p.theme.colors.bg400};
    }

    &:active {
        background: ${p => p.theme.colors.bg500};
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