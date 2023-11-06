import {ClickableCard, Column, IconButton, Row} from "@qinetik/anique";
import {createSignal, JSX} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {MoreVertIcon} from "@qinetik/anique-icons";
import PinIcon from "@qinetik/mdi/PinIcon";
import ArchiveAddIcon from "@qinetik/mdi/ArchiveAddIcon";
import LabelOutlineIcon from "@qinetik/mdi/LabelOutlineIcon";
import ShareOutlineIcon from "@qinetik/mdi/ShareOutlineIcon";
import DeleteOutlineIcon from "@qinetik/mdi/DeleteOutlineIcon";

export default function CardActionsDropdownExample() {

    const [open, setOpen] = createSignal(false)

    type ElementEvent = MouseEvent & { currentTarget : HTMLDivElement, target : Element }
    function onClickDePropagation(onClick : (e : ElementEvent) => void) {
        return (e : ElementEvent) => {
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
                        <IconButton onClick={(e) => {
                            setOpen(true)
                            e.stopImmediatePropagation()
                        }}>
                            <MoreVertIcon/>
                        </IconButton>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                            style={{
                                right: 0
                            }}
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
                    Vite HMR doesn't work with this dropdown in Card Actions, so you need to refresh the page after
                    making a change
                </p>
                <Row style={{width: "100%"}}>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <ShareOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <div style={{ flex : 1 }}/>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <ArchiveAddIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <LabelOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
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