import {styled} from "@qinetik/emotion";
import {Anique} from "../theme";
import {JSX} from "solid-js";

interface ToggleSwitchProps extends JSX.InputHTMLAttributes<HTMLInputElement> {

}

const SwitchRoot = styled("label")`

    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;


    /* Hide default HTML checkbox */

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${Anique.colors.bg300};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: ${Anique.colors.onBg};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & input:checked + .slider {
        background-color: ${Anique.colors.primary};
    }

    & input:focus + .slider {
        box-shadow: 0 0 1px ${Anique.colors.primary};
    }

    & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    & .slider.round {
        border-radius: 34px;
    }

    & .slider.round:before {
        border-radius: 50%;
    }
`


export function ToggleSwitch(props: ToggleSwitchProps) {
    return (
        <SwitchRoot class="switch">
            <input type="checkbox" {...props}/>
            <span class="slider round"></span>
        </SwitchRoot>
    )
}