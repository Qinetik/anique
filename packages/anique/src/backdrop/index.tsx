import {styled} from "@qinetik/emotion";
import {Accessor} from "solid-js";
import {Anique} from "../theme/Theme";

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

  &:after {
    content: "";
    background: ${Anique.colors.bg};
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

`

export function BackdropRoot(props: Omit<BackdropProps, "onClickOutside">) {
    return (
        <BackdropContainer
            style={{display: props.isVisible() ? "block" : "none"}}
            class={props.class}
            children={props.children}
        />
    )
}

function onBackdropClick(props: Pick<BackdropProps, "onClickOutside">): (e: MouseEvent & { currentTarget: HTMLElement, target: Element }) => void {
    return (e) => {
        if (e.currentTarget === e.target || !e.currentTarget.contains(e.target)) {
            props.onClickOutside()
        }
    }
}

const CenteredContent = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function BackdropCenteredContent(props: Omit<BackdropProps, "isVisible"> & { direction: "row" | "column" }) {
    return (
        <CenteredContent
            class={props.class}
            children={props.children}
            onClick={onBackdropClick(props)}
            style={{"flex-direction": props.direction}}
        />
    )
}

export function Backdrop(props: BackdropProps) {
    return (
        <BackdropRoot {...props}>
            <BackdropCenteredContent
                children={props.children}
                direction={"column"}
                onClickOutside={props.onClickOutside}
            />
        </BackdropRoot>
    )
}