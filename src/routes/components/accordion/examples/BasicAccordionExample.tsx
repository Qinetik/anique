import {Alert, Column} from "@qinetik/anique";
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
}