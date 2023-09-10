import {styled} from "@qinetik/emotion";
import {Accessor} from "solid-js";

export interface BackdropProps {
    class?: string
    isVisible: Accessor<boolean>
    onClickOutside: () => void
    children?: any
}

const BackdropContainer = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
`

const ContentContainer = styled("div")`
    position: relative;
    width: 100%;
    height: 100%;
`

export function Backdrop(props: BackdropProps) {
    return (
        <BackdropContainer
            style={{display: props.isVisible() ? "block" : "none"}}
            class={props.class}
            onClick={(e) => {
                if (e.target === e.currentTarget || e.target === e.currentTarget.firstElementChild) {
                    props.onClickOutside()
                }
            }}>
            {props.children}
        </BackdropContainer>
    )
}