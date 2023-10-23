import {Card, Column, Headline, IconButton, Row} from "@qinetik/anique";
import {Chip, ClickableChip} from "@qinetik/anique/chip";
import Menu from "../icons/Menu.tsx";
import {AlertIcon, ChevronUp} from "@qinetik/anique-icons";

export default function ChipPage() {
    return (
        <Column>
            <Headline>Chip</Headline>
            <Card>
                <Row gap={"1em"}>
                    <Chip>My First Chip</Chip>
                    <Chip>My Second Chip</Chip>
                    <Chip>My Third Chip</Chip>
                    <Chip>My Fourth Chip</Chip>
                    <Chip>My Fifth Chip</Chip>
                </Row>
            </Card>
            <h1>Color Variations</h1>
            <Card>
                <Row gap={"1em"}>
                    <Chip variation={"bg"}>Bg Chip</Chip>
                    <Chip variation={"primary"}>Primary Chip</Chip>
                    <Chip variation={"accent"}>Accent Chip</Chip>
                </Row>
            </Card>
            <h1>Chip with Icons</h1>
            <Card>
                <Row gap={"1em"}>
                    <Chip>
                        <IconButton size={-0.5}>
                            <ChevronUp />
                        </IconButton>
                        <span>My First Chip</span>
                    </Chip>
                    <Chip>
                        <span>My Last Chip</span>
                        <IconButton size={-0.5} style={{ transform : "rotate(180deg)" }}>
                            <ChevronUp />
                        </IconButton>
                    </Chip>
                    <Chip>
                        <IconButton size={-0.5}>
                            <ChevronUp />
                        </IconButton>
                        <span>My Last Chip</span>
                        <IconButton size={-0.5} style={{ transform : "rotate(180deg)" }}>
                            <ChevronUp />
                        </IconButton>
                    </Chip>
                </Row>
            </Card>
            <h1>Clickable Chip</h1>
            <Card>
                <Row gap={"1em"}>
                    <ClickableChip background={"primary"}>
                        <span>My First Chip</span>
                    </ClickableChip>
                    <ClickableChip variation={"primary"}>
                        <span>My First Chip</span>
                    </ClickableChip>
                    <ClickableChip variation={"accent"}>
                        <span>My First Chip</span>
                    </ClickableChip>
                    <ClickableChip>
                        <IconButton size={-0.5}>
                            <ChevronUp />
                        </IconButton>
                        <span>My Last Chip</span>
                        <IconButton size={-0.5} style={{ transform : "rotate(180deg)" }}>
                            <ChevronUp />
                        </IconButton>
                    </ClickableChip>
                </Row>
            </Card>
        </Column>
    )
}