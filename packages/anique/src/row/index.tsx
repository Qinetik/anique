import {styled} from "@qinetik/emotion";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export interface RowProps {
    alignment?: "start" | "center" | "end"
    gap?: string
}

export const Row: StyledOtherComponent<RowProps, JSX.IntrinsicElements["div"]> = styled("div")<RowProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${p => p.alignment != null ? ("align-items:" + p.alignment + ";") : ""}
    ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
`