import {Column} from "@qinetik/anique/column";
import {Card} from "@qinetik/anique/card";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme/Size";
import Menu from "../icons/Menu";
import {IconButton} from "@qinetik/anique/icon-button";

export default function IconButtonPage() {
    return (
        <Column>
            <h1>IconButton</h1>
            <Card>
                <Row gap={"2em"}>
                    <IconButton size={Size.Small}>
                        <Menu/>
                    </IconButton>
                    <IconButton size={Size.Medium}>
                        <Menu/>
                    </IconButton>
                    <IconButton size={Size.Large}>
                        <Menu/>
                    </IconButton>
                </Row>
            </Card>
        </Column>
    )
}