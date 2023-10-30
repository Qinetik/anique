import {IconButton, Row} from "@qinetik/anique";
import {Chip} from "@qinetik/anique/chip";
import {ChevronUp} from "@qinetik/anique-icons";

export default function ChipWithIconsExample() {
    return (
        <Row gap={"1em"}>
            <Chip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My First Chip</span>
            </Chip>
            <Chip>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </Chip>
            <Chip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </Chip>
        </Row>
    )
}