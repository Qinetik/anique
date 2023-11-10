import {ClickableCard, Column, IconButton, Row} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {MoreVertIcon} from "@qinetik/anique-icons";
import PinIcon from "@qinetik/mdi/PinIcon";
import ArchiveAddIcon from "@qinetik/mdi/ArchiveAddIcon";
import LabelOutlineIcon from "@qinetik/mdi/LabelOutlineIcon";
import ShareOutlineIcon from "@qinetik/mdi/ShareOutlineIcon";
import DeleteOutlineIcon from "@qinetik/mdi/DeleteOutlineIcon";

export default function CardActionsDropdownExample() {

    const [open, setOpen] = createSignal(false)

    type ElementEvent = MouseEvent & { currentTarget: HTMLDivElement, target: Element }

    function onClickDePropagation(onClick: (e: ElementEvent) => void) {
        return (e: ElementEvent) => {
            e.stopImmediatePropagation()
            onClick(e)
        }
    }

    return (
        <ClickableCard onClick={() => alert("You clicked on the card")}>
            <Column gap={"0.5em"}>
                <Row style={{width: "100%"}}>
                    <h3 style={{margin: 0, flex: 1}}>Card Title</h3>
                    open dropdown -&gt;
                    <div style={{position: 'relative'}}>
                        <IconButton onClick={onClickDePropagation(() => setOpen(true))}>
                            <MoreVertIcon/>
                        </IconButton>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                            style={{right: 0}}
                        >
                            <MenuItem onClick={onClickDePropagation(() => setOpen(false))}>Hello World</MenuItem>
                            <MenuItem onClick={onClickDePropagation(() => {
                            })}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                </Row>
                <p style={{margin: 0}}>
                    Here's an example of dropdown inside a clickable card, Clicking on dropdown menu items
                    doesn't trigger the card click
                </p>
                <Row style={{width: "100%"}}>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <ShareOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <div style={{flex: 1}}/>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <ArchiveAddIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <LabelOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <PinIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => setOpen(true))}>
                        <MoreVertIcon/>
                    </IconButton>
                </Row>
            </Column>
        </ClickableCard>
    )
}