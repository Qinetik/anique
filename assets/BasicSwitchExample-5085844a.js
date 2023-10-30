import{T as c}from"./index-927437be.js";import{b as r,c as i}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";function o(){const[e,t]=r(!1);return i(c,{get checked(){return e()},onChange:n=>{t(n.currentTarget.checked)}})}o.code=`import {ToggleSwitch} from "@qinetik/anique/toggleswitch";
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
}`;export{o as default};
