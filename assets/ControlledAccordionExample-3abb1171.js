import{A as r}from"./index-8c496293.js";import{A as e}from"./index-50dde1b3.js";import"./index-880dcc90.js";import"./index-7a43a4af.js";import{C as i}from"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-d65ca23f.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import{b as m,c as t}from"./entry-client-2fda6d46.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./Theme-c9d85115.js";import"./index-bb5a5d3d.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";function l(){const[n,o]=m(!0);return t(r,{title:"Checkout my length",style:{gap:"1em"},expanded:n,setExpanded:o,get children(){return t(i,{gap:"1em",get children(){return[t(e,{children:"Wise men say"}),t(e,{children:"Only fools rush in"}),t(e,{children:"But I can't help"}),t(e,{children:"Falling in love with you"})]}})}})}l.code=`import {Accordion} from "@qinetik/anique/accordion";
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
}`;export{l as default};
