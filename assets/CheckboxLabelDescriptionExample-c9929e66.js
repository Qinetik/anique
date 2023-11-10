import{b as i,c as e}from"./entry-client-fa648c77.js";import{L as o,C as s}from"./index-a21d93e6.js";import{R as t}from"./index-5056258d.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./UnstyledLink-08d09b7e.js";import"./index-2434b60c.js";import"./index-eba976b2.js";function a(){const[n,r]=i(!1);return e(s,{get children(){return e(t,{gap:"2em",get children(){return[e(o,{isChecked:n,onChange:r,label:"Terms & Services"}),e(o,{isChecked:n,onChange:r,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}})}a.code=`import {createSignal} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {Row} from "@qinetik/anique/row";
import {LabeledCheckbox} from "@qinetik/anique/checkbox";

export default function CheckboxLabelDescriptionExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row gap={"2em"}>
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                    description={"I agree to terms & services of this company"}
                />
            </Row>
        </Card>
    )
}`;export{a as default};
