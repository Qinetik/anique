import{C as n}from"./index-7c3e3388.js";import{A as t,a as r}from"./index-505673d9.js";import{c as e}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-99f4859e.js";import"./css-9de456a1.js";function i(){return e(n,{gap:"2em",get children(){return[e(t,{get type(){return r.Info},children:"This is an info alert - check it out!"}),e(t,{get type(){return r.Warning},children:"This is a warning alert - check it out!"}),e(t,{get type(){return r.Error},children:"This is an error alert - check it out!"}),e(t,{get type(){return r.Success},children:"This is a success alert - check it out!"}),e(t,{get type(){return r.Success},children:"This is the default success alert - check it out!"})]}})}i.code=`import {Column} from "@qinetik/anique/column";
import {Alert, AlertType} from "@qinetik/anique/alert";

export default function AlertExamples() {
    return (
        <Column gap={"2em"}>
            <Alert type={AlertType.Info}>
                This is an info alert - check it out!
            </Alert>
            <Alert type={AlertType.Warning}>
                This is a warning alert - check it out!
            </Alert>
            <Alert type={AlertType.Error}>
                This is an error alert - check it out!
            </Alert>
            <Alert type={AlertType.Success}>
                This is a success alert - check it out!
            </Alert>
            <Alert type={AlertType.Success}>
                This is the default success alert - check it out!
            </Alert>
        </Column>
    )
}`;export{i as default};
