import {createSignal} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {LabeledRadio} from "@qinetik/anique/radio";

export function DisabledRadioExample() {
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