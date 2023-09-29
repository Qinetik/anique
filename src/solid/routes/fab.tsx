import {Card} from "@qinetik/anique/card";
import {ExtendedFab, Fab} from "@qinetik/anique/fab";
import Menu from "../icons/Menu";
import {Icon} from "@qinetik/anique/icon";
import {Text} from "@qinetik/anique/text";
import {Column} from "@qinetik/anique/column";

export default function FabPage() {
    return (
        <Column>
            <h1>Fab</h1>
            <Card>
                <Fab>
                    <Icon>
                        <Menu/>
                    </Icon>
                </Fab>
            </Card>
            <h1>Extended Fab</h1>
            <Card>
                <ExtendedFab>
                    <Icon>
                        <Menu/>
                    </Icon>
                    <Text>
                        Extended Me
                    </Text>
                </ExtendedFab>
            </Card>
        </Column>
    )
}