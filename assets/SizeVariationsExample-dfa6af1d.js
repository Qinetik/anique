import{b as o,c as e}from"./entry-client-23914c21.js";import{L as a,a as s}from"./index-70649c9c.js";import{R as t}from"./index-4d1252b9.js";import{S as r}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import"./index-6427a2f6.js";import"./UnstyledLink-395be662.js";import"./index-e59065e4.js";import"./index-0715b131.js";function c(){const[i,n]=o(!1);return e(s,{get children(){return e(t,{alignment:"center",gap:"1em",get children(){return[e(a,{isChecked:i,onChange:n,label:"This is a small checkbox",get size(){return r.Small}}),e(a,{isChecked:i,onChange:n,label:"This is a medium checkbox",get size(){return r.Medium}}),e(a,{isChecked:i,onChange:n,label:"This is a large checkbox",get size(){return r.Large}})]}})}})}c.code=`import {createSignal} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {Row} from "@qinetik/anique/row";
import {LabeledCheckbox} from "@qinetik/anique/checkbox";
import {Size} from "@qinetik/anique/theme";

export default function SizeVariationsExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row alignment={"center"} gap={"1em"}>
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a small checkbox"}
                    size={Size.Small}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a medium checkbox"}
                    size={Size.Medium}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a large checkbox"}
                    size={Size.Large}
                />
            </Row>
        </Card>
    )
}`;export{c as default};
