import{b as i,c as e}from"./entry-client-b1cdb755.js";import{L as t,a as o}from"./index-072e3436.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-fe3b8c3b.js";import"./UnstyledLink-f3bad3fa.js";import"./index-0be5e0ec.js";import"./index-6bcccf20.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
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
