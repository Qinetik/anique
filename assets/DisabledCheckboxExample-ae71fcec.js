import{b as i,c as e}from"./entry-client-fa648c77.js";import{L as t,C as o}from"./index-a21d93e6.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-5056258d.js";import"./UnstyledLink-08d09b7e.js";import"./index-2434b60c.js";import"./index-eba976b2.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
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
