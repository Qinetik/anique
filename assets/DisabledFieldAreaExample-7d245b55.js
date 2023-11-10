import{B as r,T as n}from"./index-cbf5d0c2.js";import{C as t}from"./index-459eedf5.js";import{c as e}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-57c7de99.js";function o(){return e(t,{gap:"0.5em",get children(){return[e(r,{placeholder:"Username",value:"Something i wrote here",disabled:!0}),e(n,{placeholder:"Note here",disabled:!0,children:"Something I wrote here"})]}})}o.code=`import {BaseTextField, TextArea} from "@qinetik/anique/textfield";
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
