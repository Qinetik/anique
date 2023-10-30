import {ToggleSwitch} from "@qinetik/anique/toggleswitch";
import {createSignal} from "solid-js";

export default function BasicSwitchExample(){
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <ToggleSwitch
            checked={isChecked()}
            onChange={(e) => {
                setIsChecked(e.currentTarget.checked)
            }}
        />
    )
}