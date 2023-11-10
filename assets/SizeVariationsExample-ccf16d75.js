import{b as s,c as e}from"./entry-client-f8a4ae77.js";import{R as t}from"./index-57c7de99.js";import{L as a}from"./index-02608a48.js";import{S as o}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./index-85412099.js";import"./index-459eedf5.js";function r(){const[i,n]=s(!1);return e(t,{alignment:"center",gap:"1em",get children(){return[e(a,{isChecked:i,onChange:n,label:"This is a small checkbox",get size(){return o.Small}}),e(a,{isChecked:i,onChange:n,label:"This is a medium checkbox",get size(){return o.Medium}}),e(a,{isChecked:i,onChange:n,label:"This is a large checkbox",get size(){return o.Large}})]}})}r.code=`import {createSignal} from "solid-js";
import {Row} from "@qinetik/anique/row";
import {LabeledRadio} from "@qinetik/anique/radio";
import {Size} from "@qinetik/anique/theme";

export default function SizeVariationsExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Row alignment={"center"} gap={"1em"}>
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"This is a small checkbox"}
                size={Size.Small}
            />
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"This is a medium checkbox"}
                size={Size.Medium}
            />
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"This is a large checkbox"}
                size={Size.Large}
            />
        </Row>
    )
}`;export{r as default};
