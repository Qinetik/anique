import {Portal} from "solid-js/web";
import {Backdrop, BackdropContentPositionProps} from "../backdrop";
import {Accessor, createContext, createEffect, JSXElement, onCleanup, Show, useContext} from "solid-js";
import {Column} from "../column";
import {styled} from "@qinetik/emotion";
import {Row} from "../row";
import {IconButton} from "../icon-button";
import {CloseIcon} from "@qinetik/anique-icons";
import {Anique} from "../theme";

// The public api of dialog context type
export interface DialogContextTypePublic {

    // id of the dialog, This is given by the user
    id?: string

    // children are the direct child dialogs opened inside the current dialog
    // they must be visible and open for them to be counted
    children: () => DialogContextTypePublic[]

}

interface DialogContextType extends DialogContextTypePublic {

    // when a child dialog becomes visible, It invokes this function from parent dialog's context using its own context as parameter
    onBorn: (context: DialogContextType) => void;

    // when a child dialog becomes invisible, It invokes this function from parent dialog's context using its own context as parameter
    onDied: (context: DialogContextType) => void;

}

export interface DialogProps extends BackdropContentPositionProps {
    // children of this dialog
    children?: any
    // isVisible state or a function
    isVisible?: Accessor<boolean>
    // dialog requests you to close by setting state to false, because someone clicked outside
    onCloseRequest: (context: DialogContextTypePublic) => void
    // to use as id in context, If you want to control in parent onCloseRequest
    id?: string
    /**
     * Disable Tracking children which caused dialog to only close if all child dialogs of this dialog has closed
     * @deprecated
     */
    doNotTrackChildren?: boolean
    // enable logging of how many children dialogs and when they are born and die
    debugLog?: boolean
}

const defaultContextValue: DialogContextType = {
    children: () => [],
    onBorn: () => 0,
    onDied: () => 0
}

const DialogContext = createContext<DialogContextType>(defaultContextValue)

export function useDialogContext(isVisible?: Accessor<boolean>, id ?: string, debugLog ?: boolean) : DialogContextType {
    let contextMap: DialogContextType[] = []
    const contextValue : DialogContextType = {
        id: id,
        children: () => contextMap,
        onBorn: (childContext) => {
            contextMap = [...contextMap, childContext]
            if (debugLog) console.log("[DialogDebugEvent:ChildBorn] TotalChildren", contextMap.length)
        },
        onDied: (childContext) => {
            contextMap = contextMap.filter((e) => e !== childContext)
            if (debugLog) console.log("[DialogDebugEvent:ChildDied] TotalChildren", contextMap.length)
        }
    }
    let parentContext = useContext(DialogContext)
    createEffect(() => {
        if (isVisible == null || isVisible()) {
            parentContext.onBorn(contextValue)
            if (debugLog) console.log("[DialogDebugEvent:NotifiedParent] Born (Effect:Visibility)")
        } else {
            parentContext.onDied(contextValue)
            if (debugLog) console.log("[DialogDebugEvent:NotifiedParent] Died (Effect:Visibility)")
        }
    })
    onCleanup(() => {
        parentContext.onDied(contextValue)
        if (debugLog) console.log("[DialogDebugEvent:NotifiedParent] Died (Cleanup)")
    })
    return contextValue
}

export function Dialog(props: DialogProps) {

    const contextValue = useDialogContext(props.isVisible, props.id, props.debugLog)

    return (
        <Portal>
            <DialogContext.Provider value={contextValue}>
                <Backdrop
                    isVisible={props.isVisible}
                    onClickOutside={() => {
                        if (contextValue.children().length == 0) {
                            props.onCloseRequest(contextValue)
                        } else {
                            if (props.debugLog) console.log("[DialogDebugEvent:ClickedOutside] Avoided Dismiss")
                        }
                    }}
                    children={props.children}
                    flex={props.flex}
                    relative={props.relative}
                />
            </DialogContext.Provider>
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
    background: ${Anique.colors.bg200};
    padding: 1em;
    border-radius: ${Anique.border.lgRadius};
`

function DialogCloseButton(props: Pick<AlertDialogProps, "onCloseRequest">) {
    const context = useContext(DialogContext)
    return (
        <IconButton style={{"margin-left": "auto"}} onClick={() => props.onCloseRequest(context)} size={0.5}>
            <CloseIcon/>
        </IconButton>
    )
}

export function AlertDialog(props: AlertDialogProps) {
    return (
        <Dialog
            isVisible={props.isVisible}
            onCloseRequest={props.onCloseRequest}
        >
            <AlertContentContainer gap={"1em"}>
                <Show when={props.title != null}>
                    <Row gap={"0.5em"} style={{width: "100%"}}>
                        <Show when={props.title != null}>
                            <Show when={typeof props.title === "string"}>
                                <h3 style={{flex: 1, margin: 0}}>{props.title}</h3>
                            </Show>
                            <Show when={typeof props.title !== "string"}>
                                {props.title}
                            </Show>
                        </Show>
                        <Show when={props.closeIcon == null ? true : props.closeIcon}>
                            <DialogCloseButton onCloseRequest={props.onCloseRequest}/>
                        </Show>
                    </Row>
                </Show>
                <div>
                    {props.content}
                </div>
                <Show when={props.actions != null}>
                    <Row gap="0.5em" style={{"align-self": "flex-end"}}>
                        {props.actions}
                    </Row>
                </Show>
            </AlertContentContainer>
        </Dialog>
    )
}