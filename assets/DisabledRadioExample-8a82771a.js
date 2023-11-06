import{b as o,c as t}from"./entry-client-b1cdb755.js";import{L as a}from"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-123f5b0d.js";import"./UnstyledLink-f3bad3fa.js";import"./index-0be5e0ec.js";import"./Theme-c9d85115.js";import"./index-6bcccf20.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
