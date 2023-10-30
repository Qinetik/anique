import {Button} from "@qinetik/anique";
import {createSignal, Show} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";

export default function DropdownExample() {
    const [open, setOpen] = createSignal(false)
    return (
        <div>
            <Button onClick={() => setOpen((o) => !o)}>Clickable Dropdown</Button>
            <Show when={open()}>
                <DropdownMenu>
                    <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>First Item</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>Second Item</MenuItem>
                    <MenuItem onClick={() => setOpen(false)}>Third Item</MenuItem>
                </DropdownMenu>
            </Show>
        </div>
    )
}