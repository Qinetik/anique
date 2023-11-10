import{b as o,c as t}from"./entry-client-fa648c77.js";import{L as a}from"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./index-2434b60c.js";import"./Theme-c9d85115.js";import"./index-eba976b2.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
