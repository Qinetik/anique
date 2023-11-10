import{b as i,c as e}from"./entry-client-f8a4ae77.js";import{L as o,a}from"./index-790f0904.js";import{R as s}from"./index-57c7de99.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./UnstyledLink-d0c164d4.js";import"./index-85412099.js";import"./index-459eedf5.js";function t(){const[n,r]=i(!1);return e(a,{get children(){return e(s,{gap:"2em",get children(){return[e(o,{isChecked:n,onChange:r,label:"Terms & Services"}),e(o,{isChecked:n,onChange:r,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}})}t.code=`import {createSignal} from "solid-js";
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
}`;export{t as default};
