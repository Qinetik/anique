import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export const Slider = styled("input")`
    
    -webkit-appearance: none !important;
    height: 2px;
    background: ${Anique.colors.bg500};
    border: none;
    outline: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: 18px;
        height: 18px;
        background: ${Anique.colors.primary};
        border-radius: 50%;
        cursor: pointer;
    }

    &::-webkit-slider-thumb:hover {
        background: ${Anique.colors.primary200};
    }
`