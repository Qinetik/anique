import {Card} from "@qinetik/anique/card";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function HeadlinePage() {
    return (
        <DocContainer>
            <Column>
                <h1>Headlines</h1>
                <h2>Small Headline</h2>
                <Card>
                    <Headline size={Size.Small}>My Small Headline</Headline>
                </Card>
                <h2>Medium Headline</h2>
                <Card>
                    <Headline size={Size.Medium}>My Medium Headline</Headline>
                </Card>
                <h3>Large Headline</h3>
                <Card>
                    <Headline size={Size.Large}>My Large Headline</Headline>
                </Card>
            </Column>
        </DocContainer>
    )
}