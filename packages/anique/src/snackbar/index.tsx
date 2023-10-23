import {Accessor, createSignal, For, JSX, Setter, Signal} from "solid-js";
import {styled} from "@qinetik/emotion";
import {generateSmallUUID, Position, relativePositionStyle} from "../utils";
import {Alert, AlertType} from "../alert";

export type Snackbar = {
    id : string
    // ms number
    expirationTime : number
    element: () => JSX.Element
}

const SnackbarRoot = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position : fixed;
    
`

export function SnackbarHost(props: {
    isVisible: () => boolean
    snackbars: Snackbar[]
    position: Accessor<Position>
}) {
    const offset = () => props.position() == Position.Center ? "0" : "1em"
    return (
        <SnackbarRoot style={{...relativePositionStyle(props.position(), offset(), offset())}}>
            <For each={props.snackbars}>{snackbar => snackbar.element()}</For>
        </SnackbarRoot>
    )
}

export interface Snackbars {

    snackbars : Accessor<Snackbar[]>

    setSnackbars : Setter<Snackbar[]>

    show : (snackbar : Snackbar) => void;

    showElement : (element : () => JSX.Element, timeout ?: number) => void;

    showAlert : (text : string, type ?: AlertType, timeout ?: number) => void

}

export function createSnackbars(initial : Snackbar[] = []) : Snackbars {

    const signal = createSignal<Snackbar[]>(initial)

    function createSnackbar(snackbar : Snackbar) {
        signal[1]((snackbars) => ([...snackbars, snackbar]))
        setTimeout(() => {
            signal[1]((snackbars) => snackbars.filter(s => s.id !== snackbar.id))
        }, snackbar.expirationTime)
    }

    function showElement(element : () => JSX.Element, timeout ?: number) {
        createSnackbar({
            id : generateSmallUUID(),
            expirationTime : timeout || 3000,
            element : element
        })
    }

    return {

        snackbars : signal[0],

        setSnackbars : signal[1],

        show : createSnackbar,

        showElement : showElement,

        showAlert : (text, type, timeout) => {
            showElement(() => (<Alert type={type || AlertType.Info}>{text}</Alert>), timeout)
        }

    }
}