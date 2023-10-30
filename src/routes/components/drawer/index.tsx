import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicDrawerExample from "./examples/BasicDrawerExample";

export default function DrawerPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Drawer</Headline>
                <h1>StaticDrawer</h1>
                <ComponentExample component={BasicDrawerExample}/>
            </Column>
        </DocContainer>
    )
}