import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import{c as o}from"./entry-client-f8a4ae77.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{A as i}from"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import{C as t}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";function n(){return o(t,{gap:"1em",get children(){return[o(i,{title:"Click me to open",defaultExpanded:!1,children:"Hi this is the internal content of this accordion"}),o(i,{title:"I am already open",children:"Hello guy ?"})]}})}n.code=`import {Alert, Column} from "@qinetik/anique";
import {Accordion} from "@qinetik/anique/accordion";
import {createSignal} from "solid-js";

export default function BasicAccordionExample() {
    return (
        <Column gap={"1em"}>
            <Accordion
                title={"Click me to open"}
                defaultExpanded={false}
            >
                Hi this is the internal content of this accordion
            </Accordion>
            <Accordion
                title={"I am already open"}
            >
                Hello guy ?
            </Accordion>
        </Column>
    )
}`;export{n as default};
