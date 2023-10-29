import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";

export interface SliderProps {
    size?: Size
}

export const Slider = styled("input", {
    shouldForwardProp : (prop) => prop != "size"
})<SliderProps>`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${p => 6 + ((p.size || 0) * 3)}px;
    background: ${Anique.colors.primary};
    border: none;
    outline: none;
    margin-top: ${p => 6 + (p.size || 0) * 0.01}px;
    margin-bottom: ${p => 6 + (p.size || 0) * 0.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${p => 16 + ((p.size || 0) * 3)}px;
        height: ${p => 16 + ((p.size || 0) * 3)}px;
        background: ${Anique.colors.onBg};
        border-radius: 50%;
        border : ${p=> 4 + ((p.size) || 0)}px solid ${Anique.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${Anique.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${Anique.colors.onBg400};
        border-color : ${Anique.colors.primary};
    }
    
`