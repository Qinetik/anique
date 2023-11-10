import{A as r}from"./index-fb0f364b.js";import{A as e}from"./index-a3de9b85.js";import"./index-738815bd.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import{C as i}from"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-906196f8.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import{b as m,c as t}from"./entry-client-fa648c77.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./Theme-c9d85115.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";function p(){const[n,o]=m(!0);return t(r,{title:"Checkout my length",style:{gap:"1em"},expanded:n,setExpanded:o,get children(){return t(i,{gap:"1em",get children(){return[t(e,{children:"Wise men say"}),t(e,{children:"Only fools rush in"}),t(e,{children:"But I can't help"}),t(e,{children:"Falling in love with you"})]}})}})}p.code=`import {Accordion} from "@qinetik/anique/accordion";
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
