import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function RowWrapSizedExample() {
    return (
        <Row style={{ width : "320px" }} gap={"0.2em"} wrap>
            <Button>Item #1</Button>
            <Button>Item #2</Button>
            <Button>Item #3</Button>
            <Button>Item #4</Button>
            <Button>Item #5</Button>
        </Row>
    )
}