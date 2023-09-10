import {styled} from "@qinetik/emotion";

export interface RowProps {
    alignment?: "start" | "center" | "end"
    gap ?: string
}

export const Row = styled("div")<RowProps>`
    display: flex;
    flex-direction: row;
    ${p => p.alignment != null ? ("align-items:" + p.alignment + ";") : ""}
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
`