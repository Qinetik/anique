import {Column, Headline} from "@qinetik/anique";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicTabsExample from "./examples/BasicTabsExample";

export default function TabPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Tabs</Headline>
                <ComponentExample component={BasicTabsExample}/>
            </Column>
        </DocContainer>
    )
}