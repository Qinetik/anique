import{b as i,c as e}from"./entry-client-23914c21.js";import{L as t,a as o}from"./index-70649c9c.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-4d1252b9.js";import"./UnstyledLink-395be662.js";import"./index-e59065e4.js";import"./index-0715b131.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
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
