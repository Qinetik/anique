import {mountedStyles, styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export const ScrollbarArea = styled("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${Anique.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${Anique.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${Anique.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${Anique.colors.onBg500};
    }
    
`