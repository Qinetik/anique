import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicTabsExample from "./examples/BasicTabsExample";
import TabIconsExample from "./examples/TabIconsExample";

export default function TabPage() {
    return (
        <DocContainer>
            <Column gap={"0.5em"}>
                <Headline>Tabs</Headline>
                <ComponentExample component={BasicTabsExample}/>
                <ComponentExample component={TabIconsExample}/>
            </Column>
        </DocContainer>
    )
}