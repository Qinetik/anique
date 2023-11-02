import{b as r,c as e}from"./entry-client-3af6d313.js";import{R as a}from"./index-f7946e34.js";import{L as o}from"./index-51d3af24.js";import"./index-94caafb4.js";import"./UL-e6a4a899.js";import"./index-7355db2b.js";import"./Theme-c9d85115.js";import"./index-f6f07d1f.js";function s(){const[i,n]=r(!1);return e(a,{gap:"1em",get children(){return[e(o,{isChecked:i,onChange:n,label:"Terms & Services"}),e(o,{isChecked:i,onChange:n,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}s.code=`import {createSignal} from "solid-js";
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
