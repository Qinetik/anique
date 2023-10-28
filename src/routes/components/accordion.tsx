import {Alert, Column, Headline} from "@qinetik/anique";
import {Accordion} from "@qinetik/anique/accordion";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function AccordionPage() {
    return (
        <DocContainer>
            <Column gap={"1em"}>
                <Headline>Accordion</Headline>
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
                <Accordion
                    title={"Checkout my length"}
                    style={{gap: "1em"}}
                >
                    <Column gap={"1em"}>
                        <Alert>Wise men say</Alert>
                        <Alert>Only fools rush in</Alert>
                        <Alert>But I can't help</Alert>
                        <Alert>Falling in love with you</Alert>
                    </Column>
                </Accordion>
            </Column>
        </DocContainer>
    )
}