import {createSignal} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {LabeledCheckbox} from "@qinetik/anique/checkbox";

export function DisabledCheckboxExample() {
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