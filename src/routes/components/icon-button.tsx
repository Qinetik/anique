import {Column} from "@qinetik/anique/column";
import {Card} from "@qinetik/anique/card";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme/Size";

import {IconButton} from "@qinetik/anique/icon-button";
import Menu from "../../solid/icons/Menu";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function IconButtonPage() {
    return (
        <DocContainer>
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
        </DocContainer>
    )
}