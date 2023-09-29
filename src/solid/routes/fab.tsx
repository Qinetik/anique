import {Card} from "@qinetik/anique/card";
import {ExtendedFab, Fab} from "@qinetik/anique/fab";
import Menu from "../icons/Menu";
import {Icon} from "@qinetik/anique/icon";
import {Text} from "@qinetik/anique/text";
import {Column} from "@qinetik/anique/column";
import {Size} from "@qinetik/anique/theme/Size";
import {Row} from "@qinetik/anique/row";

export default function FabPage() {
    return (
        <Column>
            <h1>Fab</h1>
            <Card>
                <Row gap={"2em"}>
                    <Fab size={Size.Small}>
                        <Icon>
                            <Menu/>
                        </Icon>
                    </Fab>
                    <Fab size={Size.Medium}>
                        <Icon>
                            <Menu/>
                        </Icon>
                    </Fab>
                    <Fab size={Size.Large}>
                        <Icon>
                            <Menu/>
                        </Icon>
                    </Fab>
                </Row>
            </Card>
            <h1>Extended Fab</h1>
            <Card>
                <Row gap={"2em"}>
                    <ExtendedFab size={Size.Small}>
                        <Icon>
                            <Menu/>
                        </Icon>
                        <Text>
                            Extended Me
                        </Text>
                    </ExtendedFab>
                    <ExtendedFab size={Size.Medium}>
                        <Icon>
                            <Menu/>
                        </Icon>
                        <Text>
                            Extended Me
                        </Text>
                    </ExtendedFab>
                    <ExtendedFab size={Size.Large}>
                        <Icon>
                            <Menu/>
                        </Icon>
                        <Text>
                            Extended Me
                        </Text>
                    </ExtendedFab>
                </Row>
            </Card>
        </Column>
    )
}