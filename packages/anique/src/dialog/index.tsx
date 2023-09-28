import {Portal} from "solid-js/web";
import {Backdrop} from "../backdrop";
import {styled} from "@qinetik/emotion";
import {Centered} from "../utils/centered";
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
`

export function Dialog(props: DialogProps) {
    return (
        <Portal>
            <Backdrop
                isVisible={() => true}
                onClickOutside={props.onCloseRequest}
            >
                <Centered>
                    <DialogContent>
                        {props.children}
                    </DialogContent>
                </Centered>
            </Backdrop>
        </Portal>
    )
}