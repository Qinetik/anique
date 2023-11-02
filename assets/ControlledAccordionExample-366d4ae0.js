import{A as r}from"./index-14c4e9b6.js";import{A as e}from"./index-149a8a7e.js";import"./index-b09005ba.js";import"./index-01de8884.js";import{C as i}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-299bfccf.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import{b as m,c as t}from"./entry-client-efb8f723.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./Theme-c9d85115.js";import"./index-e694302e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";function l(){const[n,o]=m(!0);return t(r,{title:"Checkout my length",style:{gap:"1em"},expanded:n,setExpanded:o,get children(){return t(i,{gap:"1em",get children(){return[t(e,{children:"Wise men say"}),t(e,{children:"Only fools rush in"}),t(e,{children:"But I can't help"}),t(e,{children:"Falling in love with you"})]}})}})}l.code=`import {Accordion} from "@qinetik/anique/accordion";
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
