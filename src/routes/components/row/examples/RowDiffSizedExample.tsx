import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function RowDiffSizedExample() {
    return (
        <Row gap={"1em"}>
            <Button size={0}>First</Button>
            <Button size={1}>Second</Button>
            <Button size={2}>Third</Button>
            <Button size={3}>Fourth</Button>
            <Button size={4}>Fifth</Button>
        </Row>
    )
}