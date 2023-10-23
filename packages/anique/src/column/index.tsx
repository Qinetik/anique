import {styled} from "@qinetik/emotion";

export interface ColumnProps {
    gap?: string
    children?: any
    wrap ?: true
}

export const Column = styled("div")<ColumnProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
    ${p => p.wrap ? "flex-wrap : wrap;" : null}
`

export const Col = Column