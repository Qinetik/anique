import {Column, Headline} from "@qinetik/anique";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicSwitchExample from "./examples/BasicSwitchExample";
import DisabledSwitchExample from "./examples/DisabledSwitchExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function SwitchPage() {
    return (
        <DocContainer>
            <Column gap={"1em"}>
                <Headline>ToggleSwitch</Headline>
                <ComponentExample component={BasicSwitchExample}/>
                <h2>Disabled</h2>
                <ComponentExample component={DisabledSwitchExample}/>
            </Column>
        </DocContainer>
    )
}