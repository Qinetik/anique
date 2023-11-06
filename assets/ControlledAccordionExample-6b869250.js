import{A as r}from"./index-8f15c368.js";import{A as e}from"./index-8e5bd437.js";import"./index-9819aab5.js";import"./index-69b2c138.js";import"./index-072e3436.js";import{C as i}from"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-b3b79d55.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-fe3b8c3b.js";import{b as m,c as t}from"./entry-client-b1cdb755.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./Theme-c9d85115.js";import"./index-123f5b0d.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";function p(){const[n,o]=m(!0);return t(r,{title:"Checkout my length",style:{gap:"1em"},expanded:n,setExpanded:o,get children(){return t(i,{gap:"1em",get children(){return[t(e,{children:"Wise men say"}),t(e,{children:"Only fools rush in"}),t(e,{children:"But I can't help"}),t(e,{children:"Falling in love with you"})]}})}})}p.code=`import {Accordion} from "@qinetik/anique/accordion";
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
