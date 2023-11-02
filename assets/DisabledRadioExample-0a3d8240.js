import{b as o,c as t}from"./entry-client-efb8f723.js";import{L as a}from"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-e694302e.js";import"./UL-596ed081.js";import"./index-058de43f.js";import"./Theme-c9d85115.js";import"./index-d49a5ec8.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
