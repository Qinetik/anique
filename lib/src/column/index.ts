import {styled} from "@qinetik/emotion";

export interface ColumnProps {
    gap?: string
}

export const Column = styled("div")<ColumnProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
`

export const Col = Column