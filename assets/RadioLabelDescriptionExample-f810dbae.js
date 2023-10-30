import{b as r,c as e}from"./entry-client-2fda6d46.js";import{R as a}from"./index-7a2b10b5.js";import{L as o}from"./index-78db38af.js";import"./index-bb5a5d3d.js";import"./UL-a265d12a.js";import"./index-31fb525c.js";import"./Theme-c9d85115.js";import"./index-e7aa7392.js";function s(){const[i,n]=r(!1);return e(a,{gap:"1em",get children(){return[e(o,{isChecked:i,onChange:n,label:"Terms & Services"}),e(o,{isChecked:i,onChange:n,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}s.code=`import {createSignal} from "solid-js";
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
