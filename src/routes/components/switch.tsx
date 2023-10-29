import {Card, Column, Headline} from "@qinetik/anique";
import {ToggleSwitch} from "@qinetik/anique/toggleswitch";
import {createSignal} from "solid-js";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function SwitchPage() {
    const [isChecked, setIsChecked] = createSignal(false)
    return (
        <DocContainer>
            <Column gap={"1em"}>
                <Headline>ToggleSwitch</Headline>
                <Card>
                    <ToggleSwitch
                        checked={isChecked()}
                        onChange={(e) => {
                            setIsChecked(e.currentTarget.checked)
                        }}
                    />
                </Card>
                <h2>Disabled</h2>
                <Card>
                    <ToggleSwitch
                        disabled
                        checked={isChecked()}
                    />
                </Card>
            </Column>
        </DocContainer>
    )
}