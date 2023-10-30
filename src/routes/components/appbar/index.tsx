import {Column} from "@qinetik/anique/column";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicAppBarExample from "./examples/BasicAppBarExample";
import AppBarWithIconExample from "./examples/AppBarWithIconExample";
import AppBarWithIconButtonExample from "./examples/AppBarWithIconButtonExample";
import AppBarWithActionsExample from "./examples/AppBarWithActionsExample";
import StyledAppBarExample from "./examples/StyledAppBarExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function AppBarPage() {
    return (
        <DocContainer>
            <Column style={{width: "100%"}}>
                <h2>Basic App Bar</h2>
                <ComponentExample component={BasicAppBarExample}/>
                <h2>App Bar With Icon</h2>
                <ComponentExample component={AppBarWithIconExample}/>
                <h2>App Bar With IconButton</h2>
                <ComponentExample component={AppBarWithIconButtonExample}/>
                <h2>App Bar With Actions</h2>
                <ComponentExample component={AppBarWithActionsExample}/>
                <h2>Styled App Bar</h2>
                <ComponentExample component={StyledAppBarExample}/>
            </Column>
        </DocContainer>
    )
}