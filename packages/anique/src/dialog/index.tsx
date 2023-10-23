import {Portal} from "solid-js/web";
import {Backdrop, BackdropContentPositionProps} from "../backdrop";
import {Accessor, JSXElement, Show} from "solid-js";
import {Column} from "../column";
import {styled} from "@qinetik/emotion";
import {Row} from "../row";
import {IconButton} from "../icon-button";
import {ChevronUp, CloseIcon} from "@qinetik/anique-icons";
import {Anique} from "../theme";

export interface DialogProps extends BackdropContentPositionProps {
    children?: any
    isVisible?: Accessor<boolean>
    onCloseRequest: () => void
}

export function Dialog(props: DialogProps) {
    return (
        <Portal>
            <Backdrop
                isVisible={props.isVisible || (() => true)}
                onClickOutside={props.onCloseRequest}
                children={props.children}
                flex={props.flex}
                relative={props.relative}
            />
        </Portal>
    )
}

export interface AlertDialogProps extends Omit<DialogProps, "children"> {

    // preferably a string or a fragment with icon and string title
    title?: JSXElement

    // show close icon in the top right corner
    closeIcon?: boolean

    // message or content of the dialog
    content?: JSXElement

    // actions / buttons displayed in bottom right, encapsulate it in a fragment like <>{BUTTONS}</>
    actions?: JSXElement

}

const AlertContentContainer = styled(Column)`
    background : ${Anique.colors.bg200};
    padding : 1em;
    border-radius : ${Anique.border.lgRadius};
`

export function AlertDialog(props: AlertDialogProps) {
    return (
        <Dialog
            isVisible={props.isVisible}
            onCloseRequest={props.onCloseRequest}
        >
            <AlertContentContainer gap={"1em"}>
                <Show when={props.title != null}>
                    <Row gap={"0.5em"} style={{ width : "100%" }}>
                        <Show when={props.title != null}>
                            <Show when={typeof props.title === "string"}>
                                <h3 style={{ flex : 1, margin : 0 }}>{props.title}</h3>
                            </Show>
                            <Show when={typeof props.title !== "string"}>
                                {props.title}
                            </Show>
                        </Show>
                        <Show when={props.closeIcon == null ? true : props.closeIcon}>
                            <IconButton style={{ "margin-left" : "auto" }} onClick={props.onCloseRequest} size={0.5}>
                                <CloseIcon />
                            </IconButton>
                        </Show>
                    </Row>
                </Show>
                <div>
                    {props.content}
                </div>
                <Show when={props.actions != null}>
                    <Row gap="0.5em" style={{ "align-self" : "flex-end" }}>
                        {props.actions}
                    </Row>
                </Show>
            </AlertContentContainer>
        </Dialog>
    )
}