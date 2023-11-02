import{B as r,T as n}from"./index-e32cadde.js";import{C as t}from"./index-f6f07d1f.js";import{c as e}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-f7946e34.js";function o(){return e(t,{gap:"0.5em",get children(){return[e(r,{placeholder:"Username",value:"Something i wrote here",disabled:!0}),e(n,{placeholder:"Note here",disabled:!0,children:"Something I wrote here"})]}})}o.code=`import {BaseTextField, TextArea} from "@qinetik/anique/textfield";
import {Column} from "@qinetik/anique/column";

export default function DisabledFieldAreaExample() {
    return (
        <Column gap={"0.5em"}>
            <BaseTextField
                placeholder={"Username"}
                value={"Something i wrote here"}
                disabled
            />
            <TextArea
                placeholder={"Note here"}
                disabled
            >Something I wrote here</TextArea>
        </Column>
    )
}`;export{o as default};
