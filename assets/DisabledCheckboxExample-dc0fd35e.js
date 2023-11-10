import{b as i,c as e}from"./entry-client-c6070623.js";import{L as t,C as o}from"./index-eeee74a7.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-0ebd6ae5.js";import"./UnstyledLink-0663e860.js";import"./index-2a05b8f3.js";import"./index-c98928aa.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
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
