import{b as o,c as t}from"./entry-client-2ac2a0bd.js";import{L as a}from"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-6df8a466.js";import"./UL-ae71d882.js";import"./index-0f5f71d8.js";import"./Theme-c9d85115.js";import"./index-756d1732.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
