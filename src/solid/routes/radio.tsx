import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Radio, LabeledRadio} from "@qinetik/anique/radio";
import {createSignal} from "solid-js";
import {Column} from "@qinetik/anique/column";

function BasicRadioExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Radio
                isChecked={isChecked}
                onChange={setIsChecked}
            />
        </Card>
    )
}

function RadioWithLabel() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
            />
        </Card>
    )
}

function RadioWithLabelDescription() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Terms & Services"}
                description={"I agree to terms & services of this company"}
            />
        </Card>
    )
}

export default function RadioPage() {

    return (
        <PageContainer>
            <Column>
                <H1>Basic Radio</H1>
                <BasicRadioExample/>
                <H1>Radio with Label</H1>
                <RadioWithLabel/>
                <H1>Radio with Label & Description</H1>
                <RadioWithLabelDescription/>
            </Column>
        </PageContainer>
    )
}