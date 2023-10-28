import {Card, Column, Headline} from "@qinetik/anique";
import {ClickableCard} from "@qinetik/anique/card";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function CardPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Card</Headline>
                <p>You have seen this component so much on this website already</p>
                <h1>Basic Card</h1>
                <Card>
                    Here's my basic card, It gets nothing but children
                </Card>
                <h1>Clickable Card</h1>
                <ClickableCard>
                    This makes the card clickable
                </ClickableCard>
            </Column>
        </DocContainer>
    )
}