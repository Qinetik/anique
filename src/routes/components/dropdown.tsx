import {Button, Column, Headline} from "@qinetik/anique";
import {createSignal, Show} from "solid-js";
import {DropdownMenu, HoverableDropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function DropdownPage() {

    const [open, setOpen] = createSignal(false)

    const Items = () => {
        return <>
            <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>First Item</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Second Item</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Third Item</MenuItem>
        </>
    }

    return (
        <DocContainer>
            <Column>
                <Headline>Dropdown Menu </Headline>
                <Column gap={"1em"}>
                    <HoverableDropdownMenu
                        exposed={() => <Button>Hoverable Dropdown</Button>}
                    >
                        <Items/>
                    </HoverableDropdownMenu>
                    <div>
                        <Button onClick={() => setOpen((o) => !o)}>Clickable Dropdown</Button>
                        <Show when={open()}>
                            <DropdownMenu>
                                <Items/>
                            </DropdownMenu>
                        </Show>
                    </div>
                </Column>
            </Column>
        </DocContainer>
    )
}