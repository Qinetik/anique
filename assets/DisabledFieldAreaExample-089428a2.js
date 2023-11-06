import{B as r,T as n}from"./index-c19d27c0.js";import{C as t}from"./index-0715b131.js";import{c as e}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-4d1252b9.js";function o(){return e(t,{gap:"0.5em",get children(){return[e(r,{placeholder:"Username",value:"Something i wrote here",disabled:!0}),e(n,{placeholder:"Note here",disabled:!0,children:"Something I wrote here"})]}})}o.code=`import {BaseTextField, TextArea} from "@qinetik/anique/textfield";
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
