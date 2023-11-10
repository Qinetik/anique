import{A as r}from"./index-22b1ace7.js";import{A as e}from"./index-923cd83d.js";import"./index-222b9f4a.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import{C as i}from"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-ebb683f1.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import{b as m,c as t}from"./entry-client-c6070623.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./Theme-c9d85115.js";import"./index-108c4257.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";function p(){const[n,o]=m(!0);return t(r,{title:"Checkout my length",style:{gap:"1em"},expanded:n,setExpanded:o,get children(){return t(i,{gap:"1em",get children(){return[t(e,{children:"Wise men say"}),t(e,{children:"Only fools rush in"}),t(e,{children:"But I can't help"}),t(e,{children:"Falling in love with you"})]}})}})}p.code=`import {Accordion} from "@qinetik/anique/accordion";
import {Alert, Column} from "@qinetik/anique";
import {createSignal} from "solid-js";

export default function ControlledAccordionExample() {
    const [open, setOpen] = createSignal(true)
    return (
        <Accordion
            title={"Checkout my length"}
            style={{gap: "1em"}}
            expanded={open}
            setExpanded={setOpen}
        >
            <Column gap={"1em"}>
                <Alert>Wise men say</Alert>
                <Alert>Only fools rush in</Alert>
                <Alert>But I can't help</Alert>
                <Alert>Falling in love with you</Alert>
            </Column>
        </Accordion>
    )
}`;export{p as default};
