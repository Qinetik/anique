import {styled} from "@qinetik/emotion";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export const Centered: StyledOtherComponent<object, JSX.IntrinsicElements["div"]> = styled("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`