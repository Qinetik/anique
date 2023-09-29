import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";

export default function RowPage() {
    return (
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
        </Column>
    )
}