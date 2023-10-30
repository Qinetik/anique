import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme";

export default function ButtonVariationsExample() {
    return (
        <Row gap={"1em"}>
            <Button size={Size.Small}>Small Button</Button>
            <Button size={Size.Medium}>Medium Button</Button>
            <Button size={Size.Large}>Large Button</Button>
        </Row>
    )
}