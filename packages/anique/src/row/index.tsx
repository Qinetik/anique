import {styled} from "@qinetik/emotion";

export interface RowProps {
    alignment?: "start" | "center" | "end"
    gap?: string
    wrap ?: true
}

export const Row = styled("div", {
    shouldForwardProp : (prop) => prop != "gap" && prop != "wrap" && prop != "alignment"
})<RowProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${p => p.alignment != null ? ("align-items:" + p.alignment + ";") : ""}
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
    ${p => p.wrap ? "flex-wrap : wrap;" : null}
`