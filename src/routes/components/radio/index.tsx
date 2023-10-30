import {Column} from "@qinetik/anique/column";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicRadioExample from "./examples/BasicRadioExample";
import SizeVariationsExample from "./examples/SizeVariationsExample";
import RadioLabelDescriptionExample from "./examples/RadioLabelDescriptionExample";
import DisabledRadioExample from "./examples/DisabledRadioExample";

export default function RadioPage() {
    return (
        <DocContainer>
            <Column>
                <h1>Basic Radio</h1>
                <ComponentExample component={BasicRadioExample}/>
                <h1>Size Variations</h1>
                <ComponentExample component={SizeVariationsExample}/>
                <h1>Radio with Label & Description</h1>
                <ComponentExample component={RadioLabelDescriptionExample}/>
                <h1>Disabled Radio</h1>
                <ComponentExample component={DisabledRadioExample}/>
            </Column>
        </DocContainer>
    )
}