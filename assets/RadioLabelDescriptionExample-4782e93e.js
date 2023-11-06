import{b as r,c as e}from"./entry-client-b1cdb755.js";import{R as a}from"./index-fe3b8c3b.js";import{L as o}from"./index-f7f81b39.js";import"./index-123f5b0d.js";import"./UnstyledLink-f3bad3fa.js";import"./index-0be5e0ec.js";import"./Theme-c9d85115.js";import"./index-6bcccf20.js";function s(){const[i,n]=r(!1);return e(a,{gap:"1em",get children(){return[e(o,{isChecked:i,onChange:n,label:"Terms & Services"}),e(o,{isChecked:i,onChange:n,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}s.code=`import {createSignal} from "solid-js";
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
