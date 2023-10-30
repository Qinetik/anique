import{b as o,c as t}from"./entry-client-a96cbc4d.js";import{L as a}from"./index-69f01235.js";import"./index-b49aba21.js";import"./index-755bc77f.js";import"./UL-412bb8d8.js";import"./index-ffe50960.js";import"./Theme-c9d85115.js";import"./index-df837084.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
