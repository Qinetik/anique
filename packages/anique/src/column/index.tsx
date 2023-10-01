import {styled} from "@qinetik/emotion";
import {JSX} from "solid-js";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";

export interface ColumnProps {
    gap?: string
    children ?: any
}

export const Column: StyledOtherComponent<ColumnProps, JSX.IntrinsicElements["div"]> = styled("div")<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  ${p => p.gap != null ? ("gap:" + p.gap + ";") : null}
`

export const Col = Column