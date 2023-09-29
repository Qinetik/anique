import {styled} from "@qinetik/emotion";
import {Size} from "../theme/Size";

export const Headline = styled("h1")<{
    size ?: Size
}>`
    font-weight: 100;
    font-size : ${p => 3 + (p.size ? p.size : 0)}rem;
`