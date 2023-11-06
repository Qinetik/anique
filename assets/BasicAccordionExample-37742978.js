import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{c as o}from"./entry-client-b1cdb755.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import{A as i}from"./index-8f15c368.js";import"./index-69b2c138.js";import"./index-072e3436.js";import{C as t}from"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";function n(){return o(t,{gap:"1em",get children(){return[o(i,{title:"Click me to open",defaultExpanded:!1,children:"Hi this is the internal content of this accordion"}),o(i,{title:"I am already open",children:"Hello guy ?"})]}})}n.code=`import {Alert, Column} from "@qinetik/anique";
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
