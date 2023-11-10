import{b as o,c as t}from"./entry-client-c6070623.js";import{L as a}from"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-108c4257.js";import"./UnstyledLink-0663e860.js";import"./index-2a05b8f3.js";import"./Theme-c9d85115.js";import"./index-c98928aa.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
