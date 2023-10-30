import{b as o,c as t}from"./entry-client-2fda6d46.js";import{L as a}from"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-bb5a5d3d.js";import"./UL-a265d12a.js";import"./index-31fb525c.js";import"./Theme-c9d85115.js";import"./index-e7aa7392.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
