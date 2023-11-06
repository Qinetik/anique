import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import{c as o}from"./entry-client-23914c21.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{A as i}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import{C as t}from"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";function n(){return o(t,{gap:"1em",get children(){return[o(i,{title:"Click me to open",defaultExpanded:!1,children:"Hi this is the internal content of this accordion"}),o(i,{title:"I am already open",children:"Hello guy ?"})]}})}n.code=`import {Alert, Column} from "@qinetik/anique";
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
