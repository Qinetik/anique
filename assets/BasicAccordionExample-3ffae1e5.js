import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import{c as o}from"./entry-client-efb8f723.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{A as i}from"./index-14c4e9b6.js";import"./index-01de8884.js";import{C as t}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";function n(){return o(t,{gap:"1em",get children(){return[o(i,{title:"Click me to open",defaultExpanded:!1,children:"Hi this is the internal content of this accordion"}),o(i,{title:"I am already open",children:"Hello guy ?"})]}})}n.code=`import {Alert, Column} from "@qinetik/anique";
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
