import{b as r,c as e}from"./entry-client-fa648c77.js";import{R as a}from"./index-5056258d.js";import{L as o}from"./index-cf2526ba.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./index-2434b60c.js";import"./Theme-c9d85115.js";import"./index-eba976b2.js";function s(){const[i,n]=r(!1);return e(a,{gap:"1em",get children(){return[e(o,{isChecked:i,onChange:n,label:"Terms & Services"}),e(o,{isChecked:i,onChange:n,label:"Terms & Services",description:"I agree to terms & services of this company"})]}})}s.code=`import {createSignal} from "solid-js";
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
