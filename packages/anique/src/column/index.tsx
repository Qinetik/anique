import {styled} from "@qinetik/emotion";

export interface ColumnProps {
    gap?: string
    wrap ?: true
}

export const Column = styled("div", {
    shouldForwardProp : (prop) => prop != "gap" && prop != "wrap"
})<ColumnProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
    ${p => p.wrap ? "flex-wrap : wrap;" : null}
`

export const Col = Column