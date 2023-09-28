import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {ExtendedFab, Fab} from "@qinetik/anique/fab";
import Menu from "../icons/Menu";
import {Icon} from "@qinetik/anique/icon";
import {Text} from "@qinetik/anique/text";
import {Column} from "@qinetik/anique/column";

export default function FabPage() {
    return (
        <Column>
            <H1>Fab</H1>
            <Card>
                <Fab>
                    <Icon>
                        <Menu/>
                    </Icon>
                </Fab>
            </Card>
            <H1>Extended Fab</H1>
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