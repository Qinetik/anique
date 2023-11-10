import{b as i,c as e}from"./entry-client-f8a4ae77.js";import{L as t,a as o}from"./index-790f0904.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-57c7de99.js";import"./UnstyledLink-d0c164d4.js";import"./index-85412099.js";import"./index-459eedf5.js";function a(){const[r,n]=i(!1);return e(o,{get children(){return e(t,{isChecked:r,onChange:n,label:"Terms & Services",disabled:!0,description:"I agree to terms & services of this company"})}})}a.code=`import {createSignal} from "solid-js";
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
