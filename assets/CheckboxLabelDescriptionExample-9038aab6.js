import{b as i,c as e}from"./entry-client-c6070623.js";import{L as o,C as s}from"./index-eeee74a7.js";import{R as t}from"./index-0ebd6ae5.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./UnstyledLink-0663e860.js";import"./index-2a05b8f3.js";import"./index-c98928aa.js";function a(){const[n,r]=i(!1);return e(s,{get children(){return e(t,{gap:"2em",get children(){return[e(o,{isChecked:n,onChange:r,label:"Terms & Services"}),e(o,{isChecked:n,onChange:r,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}})}a.code=`import {createSignal} from "solid-js";
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
