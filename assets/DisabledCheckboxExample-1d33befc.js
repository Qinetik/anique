import{b as i,c as e}from"./entry-client-e7f04580.js";import{L as t,a as o}from"./index-4460cad9.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-f5b55317.js";import"./UnstyledLink-3a662916.js";import"./index-1a03f1e0.js";import"./index-7c3e3388.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {LabeledCheckbox} from "@qinetik/anique/checkbox";

export default function DisabledCheckboxExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledCheckbox
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
                disabled={true}
                description={"I agree to terms & services of this company"}
            />
        </Card>
    )
}`;export{a as default};
