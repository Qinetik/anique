import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function RowPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Row</Headline>
                <h1>Equal Sized Items</h1>
                <Card>
                    <Row gap={"1em"}>
                        <Button>First</Button>
                        <Button>Second</Button>
                        <Button>Third</Button>
                        <Button>Fourth</Button>
                        <Button>Fifth</Button>
                    </Row>
                </Card>
                <h1>Different Sized Items</h1>
                <Card>
                    <Row gap={"1em"}>
                        <Button size={0}>First</Button>
                        <Button size={1}>Second</Button>
                        <Button size={2}>Third</Button>
                        <Button size={3}>Fourth</Button>
                        <Button size={4}>Fifth</Button>
                    </Row>
                </Card>
                <h1>Wrap</h1>
                <Card style={{ width : "240px"}}>
                    <Row style={{ width : "100%" }} gap={"0.2em"} wrap>
                        <Button>Item #1</Button>
                        <Button>Item #2</Button>
                        <Button>Item #3</Button>
                        <Button>Item #4</Button>
                        <Button>Item #5</Button>
                    </Row>
                </Card>
            </Column>
        </DocContainer>
    )
}