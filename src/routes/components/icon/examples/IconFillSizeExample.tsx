import {Icon} from "@qinetik/anique/icon";
import {Anique, Row} from "@qinetik/anique";
import Menu from "../../../../solid/icons/Menu";

export default function IconFillSizeExample() {
    return (
        <Row>
            <Icon
                fill={Anique.colors.success}
                size={2}
            >
                <Menu/>
            </Icon>
            <Icon
                fill={Anique.colors.error}
                size={2}
            >
                <Menu/>
            </Icon>
        </Row>
    )
}