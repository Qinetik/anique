import {Portal} from "solid-js/web";
import {Backdrop, BackdropContentPositionProps} from "../backdrop";

export interface DialogProps extends BackdropContentPositionProps {
    children?: any
    onCloseRequest: () => void
}

export function Dialog(props: DialogProps) {
    return (
        <Portal>
            <Backdrop
                isVisible={() => true}
                onClickOutside={props.onCloseRequest}
                children={props.children}
                flex={props.flex}
                relative={props.relative}
             />
        </Portal>
    )
}