import {Card, Column, Headline} from "@qinetik/anique";
import {ClickableCard} from "@qinetik/anique/card";

import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import CardExamples from "./examples/CardExamples";
import CardActionsDropdownExample from "./examples/CardActionsDropdownExample";

export default function CardPage() {
    return (
        <DocContainer>
            <Column gap={"0.5em"}>
                <Headline>Card</Headline>
                <ComponentExample component={CardExamples} cardStyles={{ padding : 0}} hasBackground={false} />
                <ComponentExample component={CardActionsDropdownExample} cardStyles={{ padding : 0}} hasBackground={false}/>
            </Column>
        </DocContainer>
    )
}