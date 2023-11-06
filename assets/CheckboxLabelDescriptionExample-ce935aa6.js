import{b as i,c as e}from"./entry-client-b1cdb755.js";import{L as o,a}from"./index-072e3436.js";import{R as s}from"./index-fe3b8c3b.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./UnstyledLink-f3bad3fa.js";import"./index-0be5e0ec.js";import"./index-6bcccf20.js";function t(){const[n,r]=i(!1);return e(a,{get children(){return e(s,{gap:"2em",get children(){return[e(o,{isChecked:n,onChange:r,label:"Terms & Services"}),e(o,{isChecked:n,onChange:r,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}})}t.code=`import {createSignal} from "solid-js";
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
