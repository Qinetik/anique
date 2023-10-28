import {Card, Column, Headline} from "@qinetik/anique";
import {ToggleSwitch} from "@qinetik/anique/toggleswitch";
import {createSignal} from "solid-js";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function SwitchPage() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <DocContainer>
            <Column>
                <Headline>ToggleSwitch</Headline>
                <Card>
                    <ToggleSwitch
                        checked={true}
                        onChange={(e) => {
                            setIsChecked(e.currentTarget.checked)
                        }}
                    />
                </Card>
            </Column>
        </DocContainer>
    )
}