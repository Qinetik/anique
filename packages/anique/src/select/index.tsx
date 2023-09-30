import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

const SelectBase = styled("select")`
    border: none;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding: 0.2em 0.8em 0.2em 0.2em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
    
    &:disabled {
        cursor: not-allowed;
        background-color: ${Anique.colors.onBg400};
        background-image: linear-gradient(to top, ${Anique.colors.onBg300}, ${Anique.colors.onBg400} 33%);
        color : ${Anique.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${Anique.colors.bg100};
    }
    
`

export const Select = styled(SelectBase)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${Anique.border.smRadius};
`