import {Card, Column, Headline, Row} from "@qinetik/anique";
import {Chip} from "@qinetik/anique/chip";

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
                    <Chip background={"bg400"}>My First Chip</Chip>
                    <Chip background={"primary"}>My Second Chip</Chip>
                    <Chip background={"accent"}>My Third Chip</Chip>
                    <Chip background={"success"}>My Fourth Chip</Chip>
                    <Chip background={"warning"}>My Fifth Chip</Chip>
                </Row>
            </Card>
        </Column>
    )
}