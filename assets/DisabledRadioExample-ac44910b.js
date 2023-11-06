import{b as o,c as t}from"./entry-client-e7f04580.js";import{L as a}from"./index-4b92b0d7.js";import"./index-f5b55317.js";import"./index-326c8233.js";import"./UnstyledLink-3a662916.js";import"./index-1a03f1e0.js";import"./Theme-c9d85115.js";import"./index-7c3e3388.js";function n(){const[e,i]=o(!0);return t(a,{isChecked:e,onChange:i,label:"Disabled Radio",disabled:!0,description:"You must not be able to check me"})}n.code=`import {createSignal} from "solid-js";
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
