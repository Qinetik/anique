import {Column} from "@qinetik/anique/column";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Headline} from "@qinetik/anique/headline";

export default function ColumnPage() {
    return (
        <Column>
            <Headline>Column</Headline>
            <h1>Same sized items</h1>
            <Card>
                <Column gap={"1em"}>
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                    <Button>Fourth</Button>
                    <Button>Fifth</Button>
                </Column>
            </Card>
            <h1>Different sized items</h1>
            <Card>
                <Column gap={"1em"}>
                    <Button size={0}>First</Button>
                    <Button size={1}>Second</Button>
                    <Button size={2}>Third</Button>
                    <Button size={3}>Fourth</Button>
                    <Button size={4}>Fifth</Button>
                </Column>
            </Card>
            <h1>Wrap</h1>
            <Card>
                <Column style={{ height : "160px" }} gap={"0.5em 0.75em"} wrap>
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                    <Button>Fourth</Button>
                    <Button>Fifth</Button>
                </Column>
            </Card>
        </Column>
    )
}