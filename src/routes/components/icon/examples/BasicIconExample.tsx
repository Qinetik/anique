import {Icon} from "@qinetik/anique/icon";
import Menu from "../../../../solid/icons/Menu";
import AddIcon from "@qinetik/mdi/AddIcon";
import {Row} from "@qinetik/anique";

export default function BasicIconExample() {
    return (
        <Row>
            <Icon>
                <Menu/>
            </Icon>
           <Icon fill={"blue"}>
               <AddIcon />
           </Icon>
        </Row>
    )
}