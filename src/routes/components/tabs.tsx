import {Column, Headline} from "@qinetik/anique";
import {Tab, TabRow} from "@qinetik/anique/tab";
import {createSignal, Show} from "solid-js";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function TabPage() {

    const [selected, setSelected] = createSignal(0)

    return (
        <DocContainer>
            <Column>
                <Headline>Tabs</Headline>
                <TabRow>
                    <Tab isSelected={selected() === 0} onClick={() => setSelected(0)}>First</Tab>
                    <Tab isSelected={selected() === 1} onClick={() => setSelected(1)}>Second</Tab>
                    <Tab isSelected={selected() === 2} onClick={() => setSelected(2)}>Third</Tab>
                </TabRow>
                <span>
                <Show when={selected() == 0}>
                    Content for first
                </Show>
                <Show when={selected() == 1}>
                    Content for second
                </Show>
                <Show when={selected() == 2}>
                    Content for third
                </Show>
            </span>
            </Column>
        </DocContainer>
    )
}