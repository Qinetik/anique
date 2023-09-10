import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Checkbox, LabeledCheckbox} from "@qinetik/anique/checkbox";
import {createSignal} from "solid-js";

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
        <PageContainer>
            <H1>Basic Checkbox</H1>
            <BasicCheckboxExample />
            <H1>Checkbox with Label</H1>
            <CheckboxWithLabel />
            <H1>Checkbox with Label & Description</H1>
            <CheckboxWithLabelDescription />
        </PageContainer>
    )
}