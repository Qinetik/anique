import{b as o,c as t}from"./entry-client-3af6d313.js";import{L as a}from"./index-51d3af24.js";import"./index-f7946e34.js";import"./index-94caafb4.js";import"./UL-e6a4a899.js";import"./index-7355db2b.js";import"./Theme-c9d85115.js";import"./index-f6f07d1f.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
import {LabeledRadio} from "@qinetik/anique/radio";

export default function DisabledRadioExample() {
    const [isChecked, setIsChecked] = createSignal(true)
    return (
        <LabeledRadio
            isChecked={isChecked}
            onChange={setIsChecked}
            label={"Disabled Radio"}
            disabled={true}
            description={"You must not be able to check me"}
        />
    )
}`;export{n as default};
