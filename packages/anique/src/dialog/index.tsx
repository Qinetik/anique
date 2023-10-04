import {Portal} from "solid-js/web";
import {Backdrop} from "../backdrop";
import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export interface DialogProps {
    children?: any
    onCloseRequest: () => void
}

const DialogContent = styled("div")`
    border-radius: 1em;
    background: ${Anique.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position : absolute;
`

export function Dialog(props: DialogProps) {
    return (
        <Portal>
            <Backdrop
                isVisible={() => true}
                onClickOutside={props.onCloseRequest}
            >
                <DialogContent>
                    {props.children}
                </DialogContent>
            </Backdrop>
        </Portal>
    )
}