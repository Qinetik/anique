import{T as t}from"./index-6a98188b.js";import{b as i,c as n}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";function c(){const[e,o]=i(!1);return n(t,{disabled:!0,get checked(){return e()}})}c.code=`import {ToggleSwitch} from "@qinetik/anique/toggleswitch";
import {createSignal} from "solid-js";

export default function DisabledSwitchExample(){
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <ToggleSwitch
            disabled
            checked={isChecked()}
        />
    )
}`;export{c as default};
