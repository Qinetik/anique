import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import CardExamples from "./examples/CardExamples";

export default function CardPage() {
    return (
        <DocContainer>
            <Column gap={"0.5em"}>
                <Headline>Card</Headline>
                <ComponentExample component={CardExamples} cardStyles={{padding: 0}} hasBackground={false}/>
            </Column>
        </DocContainer>
    )
}