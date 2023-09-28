import {mountedStyles} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export const ScrollbarStyles = mountedStyles`

    :root::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${Anique.colors.bg200};
        border-radius: 10px;
        
    }
    
    :root::-webkit-scrollbar {
        width: 6px;
        background-color: ${Anique.colors.bg200};
    }
    
    :root::-webkit-scrollbar-thumb {
        background-color: ${Anique.colors.bg400};
        border-radius: 10px;
    }

`