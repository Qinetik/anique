import {Row} from "@qinetik/anique";
import {Chip} from "@qinetik/anique/chip";

export default function ChipColorVariationsExample() {
    return (
        <Row gap={"1em"}>
            <Chip variation={"bg"}>Bg Chip</Chip>
            <Chip variation={"primary"}>Primary Chip</Chip>
            <Chip variation={"accent"}>Accent Chip</Chip>
        </Row>
    )
}