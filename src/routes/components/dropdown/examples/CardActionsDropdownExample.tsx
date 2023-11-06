import {ClickableCard, IconButton, Row} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {MoreVertIcon} from "@qinetik/anique-icons";

export default function CardActionsDropdownExample() {
    const [open, setOpen] = createSignal(false)
    return (
        <div>

            <ClickableCard onClick={() => alert("You clicked on the card")}>
                <Row>
                    <h3 style={{margin: 0, flex: 1}}>Card Title</h3>
                    <div style={{position: 'relative'}}>
                        <IconButton onClick={(e) => {
                            setOpen(true)
                            e.stopImmediatePropagation()
                        }}>
                            <MoreVertIcon/>
                        </IconButton>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                            style={{right: 0}}
                        >
                            <MenuItem onClick={(e) => {
                                setOpen(false)
                                e.stopImmediatePropagation()
                            }}>Hello World</MenuItem>
                            <MenuItem onClick={(e) => e.stopImmediatePropagation()}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                </Row>
                <p style={{margin: 0}}>
                    This dropdown in development mode can sometimes start to trigger the Card click event instead of
                    onCloseRequest, Its not a bug in our library, This means that everytime you change the code, Vite
                    performs hmr which doesn't work, so You must refresh the page for it to work
                </p>
            </ClickableCard>
        </div>
    )
}