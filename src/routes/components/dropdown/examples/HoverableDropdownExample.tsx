import {HoverableDropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {Button} from "@qinetik/anique";

export default function HoverableDropdownExample() {
    return (
        <HoverableDropdownMenu
            exposed={() => <Button>Hoverable Dropdown</Button>}
        >
            <MenuItem>Hello World</MenuItem>
            <MenuItem>First Item</MenuItem>
            <MenuItem>Second Item</MenuItem>
            <MenuItem>Third Item</MenuItem>
        </HoverableDropdownMenu>
    )
}