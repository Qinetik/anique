import{b as r,c as e}from"./entry-client-2ac2a0bd.js";import{R as a}from"./index-a7d06282.js";import{L as o}from"./index-5b9b80c5.js";import"./index-6df8a466.js";import"./UL-ae71d882.js";import"./index-0f5f71d8.js";import"./Theme-c9d85115.js";import"./index-756d1732.js";function s(){const[i,n]=r(!1);return e(a,{gap:"1em",get children(){return[e(o,{isChecked:i,onChange:n,label:"Terms & Services"}),e(o,{isChecked:i,onChange:n,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}s.code=`import {createSignal} from "solid-js";
import {Row} from "@qinetik/anique/row";
import {LabeledRadio} from "@qinetik/anique/radio";

export default function RadioLabelDescriptionExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Row gap={"1em"}>
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
            />
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
                description={"I agree to terms & services of this company"}
            />
        </Row>
    )
}`;export{s as default};
