import{b as i,c as e}from"./entry-client-23914c21.js";import{L as o,a}from"./index-70649c9c.js";import{R as s}from"./index-4d1252b9.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./UnstyledLink-395be662.js";import"./index-e59065e4.js";import"./index-0715b131.js";function t(){const[n,r]=i(!1);return e(a,{get children(){return e(s,{gap:"2em",get children(){return[e(o,{isChecked:n,onChange:r,label:"Terms & Services"}),e(o,{isChecked:n,onChange:r,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}})}t.code=`import {createSignal} from "solid-js";
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
