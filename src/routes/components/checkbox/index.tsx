import {Column} from "@qinetik/anique/column";
import {BasicCheckboxExample} from "./examples/BasicCheckboxExample";
import {SizeVariationsExample} from "./examples/SizeVariationsExample";
import {DisabledCheckboxExample} from "./examples/DisabledCheckboxExample";
import {CheckboxWithLabelDescription} from "./examples/CheckboxWithLabelDescription";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";

export default function CheckboxPage() {
    return (
        <DocContainer>
            <Column>
                <h2>Basic Checkbox</h2>
                <ComponentExample component={BasicCheckboxExample}/>
                <h2>Size Variations</h2>
                <ComponentExample component={SizeVariationsExample}/>
                <h2>Checkbox with Label & Description</h2>
                <ComponentExample component={CheckboxWithLabelDescription}/>
                <h2>Disabled Checkbox</h2>
                <ComponentExample component={DisabledCheckboxExample}/>
            </Column>
        </DocContainer>
    )
}