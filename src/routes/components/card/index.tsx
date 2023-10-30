import {Card, Column, Headline} from "@qinetik/anique";
import {ClickableCard} from "@qinetik/anique/card";

import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import CardExamples from "./examples/CardExamples";

export default function CardPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Card</Headline>
                <ComponentExample component={CardExamples} hasBackground={false} />
            </Column>
        </DocContainer>
    )
}