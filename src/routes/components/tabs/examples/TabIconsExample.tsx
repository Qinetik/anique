import {Column} from "@qinetik/anique";
import {Tab, TabRow} from "@qinetik/anique/tab";
import {createSignal, Show} from "solid-js";
import JellyfishIcon from "@qinetik/mdi/JellyfishIcon";
import SnakeIcon from "@qinetik/mdi/SnakeIcon";
import CatIcon from "@qinetik/mdi/CatIcon";
import {UnstyledLink} from "@qinetik/anique/utils";

export default function TabIconsExample() {

    const [selected, setSelected] = createSignal(0)

    return (
        <Column>
            <TabRow>
                <Tab isSelected={selected() === 0} onClick={() => setSelected(0)}>
                    <CatIcon/>
                    <span>Cats</span>
                </Tab>
                <UnstyledLink href={"#"}>
                    <Tab
                        isSelected={selected() === 1}
                        onClick={() => setSelected(1)}
                    >
                        <SnakeIcon/>
                        <span>Snakes</span>
                    </Tab>
                </UnstyledLink>
                <Tab isSelected={selected() === 2} onClick={() => setSelected(2)}>
                    <JellyfishIcon/>
                    <span>Jellyfish</span>
                </Tab>
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
    )
}