import{b as o,c as t}from"./entry-client-f8a4ae77.js";import{L as a}from"./index-02608a48.js";import"./index-57c7de99.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./index-85412099.js";import"./Theme-c9d85115.js";import"./index-459eedf5.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
