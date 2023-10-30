import {Accordion} from "@qinetik/anique/accordion";
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
}