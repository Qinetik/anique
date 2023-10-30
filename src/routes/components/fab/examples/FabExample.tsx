import {Fab} from "@qinetik/anique/fab";
import {Size} from "@qinetik/anique/theme";
import {Icon} from "@qinetik/anique/icon";
import {Row} from "@qinetik/anique/row";
import Menu from "../../../../solid/icons/Menu";

export default function FabExample() {
    return (
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
    )
}