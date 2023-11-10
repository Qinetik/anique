import {createSignal} from "solid-js";
import {AlertDialog, Button, DropdownMenu, MenuItem} from "@qinetik/anique";

export default function DropdownDialogExample() {
    const [dialogOpen, setDialogOpen] = createSignal(false)
    const [open, setOpen] = createSignal(false);
    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <AlertDialog
                title={"Dialog Title"}
                isVisible={dialogOpen}
                onCloseRequest={() => setDialogOpen(false)}
                content={
                    <div style={{position: 'relative'}}>
                        <Button onClick={() => setOpen(true)}>Open Menu</Button>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                        >
                            <MenuItem onClick={() => setOpen(false)}>Hello World</MenuItem>
                            <MenuItem onClick={() => {}}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                }
            />
        </>
    )
}