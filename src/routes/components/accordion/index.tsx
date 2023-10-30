import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicAccordionExample from "./examples/BasicAccordionExample";
import {Column, Headline} from "@qinetik/anique";
import ControlledAccordionExample from "./examples/ControlledAccordionExample";

export default function AccordionPage() {

    return (
        <DocContainer>
            <Column gap={"1em"}>
                <Headline>Accordion</Headline>
                <ComponentExample component={BasicAccordionExample} hasBackground={false}/>
                <h2 style={{margin: 0}}>Controlled</h2>
                <ComponentExample component={ControlledAccordionExample} hasBackground={false}/>
            </Column>
        </DocContainer>
    )
}