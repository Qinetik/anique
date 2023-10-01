import {styled} from "@qinetik/emotion";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export const UL: StyledOtherComponent<object, JSX.IntrinsicElements["ul"]> = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`