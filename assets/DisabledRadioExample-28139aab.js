import{b as o,c as t}from"./entry-client-23914c21.js";import{L as a}from"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-6427a2f6.js";import"./UnstyledLink-395be662.js";import"./index-e59065e4.js";import"./Theme-c9d85115.js";import"./index-0715b131.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
