import {PageContainer} from "../components/PageContainer";
import {H2} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Checkbox, LabeledCheckbox} from "@qinetik/anique/checkbox";
import {createSignal} from "solid-js";
import {Size} from "@qinetik/anique/theme/Size";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";

function BasicCheckboxExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Checkbox
                isChecked={isChecked}
                onChange={setIsChecked}
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

function CheckboxWithLabel() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledCheckbox
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
            />
        </Card>
    )
}

function CheckboxWithLabelDescription() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledCheckbox
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
                description={"I agree to terms & services of this company"}
            />
        </Card>
    )
}

export default function CheckboxPage() {

    return (
        <Column>
            <H2>Basic Checkbox</H2>
            <BasicCheckboxExample/>
            <H2>Size Variations</H2>
            <SizeVariationsExample/>
            <H2>Checkbox with Label</H2>
            <CheckboxWithLabel/>
            <H2>Checkbox with Label & Description</H2>
            <CheckboxWithLabelDescription/>
        </Column>
    )
}