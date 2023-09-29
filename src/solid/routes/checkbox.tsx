import {Card} from "@qinetik/anique/card";
import {Checkbox, LabeledCheckbox} from "@qinetik/anique/checkbox";
import {createSignal} from "solid-js";
import {Size} from "@qinetik/anique/theme/Size";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";

function BasicCheckboxExample() {
    return (
        <Card>
            <Checkbox
                type={"checkbox"}
            />
        </Card>
    )
}

function SizeVariationsExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row alignment={"center"} gap={"1em"}>
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a small checkbox"}
                    size={Size.Small}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a medium checkbox"}
                    size={Size.Medium}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a large checkbox"}
                    size={Size.Large}
                />
            </Row>
        </Card>
    )
}

function DisabledCheckboxExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledCheckbox
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
                disabled={true}
                description={"I agree to terms & services of this company"}
            />
        </Card>
    )
}

function CheckboxWithLabelDescription() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row gap={"2em"}>
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                />
                <LabeledCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                    description={"I agree to terms & services of this company"}
                />
            </Row>
        </Card>
    )
}

export default function CheckboxPage() {

    return (
        <Column>
            <h2>Basic Checkbox</h2>
            <BasicCheckboxExample/>
            <h2>Size Variations</h2>
            <SizeVariationsExample/>
            <h2>Checkbox with Label & Description</h2>
            <CheckboxWithLabelDescription/>
            <h2>Disabled Checkbox</h2>
            <DisabledCheckboxExample />
        </Column>
    )
}