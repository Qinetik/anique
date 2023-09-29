import {Card} from "@qinetik/anique/card";
import {Radio, LabeledRadio} from "@qinetik/anique/radio";
import {createSignal} from "solid-js";
import {Column} from "@qinetik/anique/column";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme/Size";

function BasicRadioExample() {
    return (
        <Card>
            <Radio
                type={"radio"}
            />
        </Card>
    )
}

function SizeVariationsExample() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row alignment={"center"} gap={"1em"}>
                <LabeledRadio
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a small checkbox"}
                    size={Size.Small}
                />
                <LabeledRadio
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a medium checkbox"}
                    size={Size.Medium}
                />
                <LabeledRadio
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"This is a large checkbox"}
                    size={Size.Large}
                />
            </Row>
        </Card>
    )
}

function RadioWithLabelAndDescription() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <Card>
            <Row gap={"2em"}>
                <LabeledRadio
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                />
                <LabeledRadio
                    isChecked={isChecked}
                    onChange={setIsChecked}
                    label={"Terms & Services"}
                    description={"I agree to terms & services of this company"}
                />
            </Row>
        </Card>
    )
}

function DisabledRadioExample() {
    const [isChecked, setIsChecked] = createSignal(true)
    return (
        <Card>
            <LabeledRadio
                isChecked={isChecked}
                onChange={setIsChecked}
                label={"Disabled Radio"}
                disabled={true}
                description={"You must not be able to check me"}
            />
        </Card>
    )
}

export default function RadioPage() {

    return (
        <Column>
            <h1>Basic Radio</h1>
            <BasicRadioExample/>
            <h1>Size Variations</h1>
            <SizeVariationsExample />
            <h1>Radio with Label & Description</h1>
            <RadioWithLabelAndDescription/>
            <h1>Disabled Radio</h1>
            <DisabledRadioExample />
        </Column>
    )
}