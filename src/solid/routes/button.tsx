import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Size} from "@qinetik/anique/theme/Size";
import {Row} from "@qinetik/anique/row";

export default function ButtonPage() {
    return (
        <Column>
            <Headline size={Size.Small}>Button</Headline>
            <h1>Normal Button</h1>
            <Card>
                <Button>Home</Button>
            </Card>
            <h1>Size Variations</h1>
            <Card>
                <Row gap={"1em"}>
                    <Button size={Size.Small}>Small Button</Button>
                    <Button size={Size.Medium}>Medium Button</Button>
                    <Button size={Size.Large}>Large Button</Button>
                </Row>
            </Card>
        </Column>
    )
}