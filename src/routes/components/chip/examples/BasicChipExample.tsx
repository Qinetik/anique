import {Chip} from "@qinetik/anique/chip";
import {Row} from "@qinetik/anique";

export default function BasicChipExample() {
    return (
        <Row gap={"1em"}>
            <Chip>My First Chip</Chip>
            <Chip>My Second Chip</Chip>
            <Chip>My Third Chip</Chip>
            <Chip>My Fourth Chip</Chip>
            <Chip>My Fifth Chip</Chip>
        </Row>
    )
}