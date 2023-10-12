import {styled} from "@qinetik/emotion";
import {Accessor, JSX, ParentProps, splitProps} from "solid-js";
import {Anique} from "../theme/Theme";

type BackdropVisibilityProp = {
    isVisible: Accessor<boolean>
}

type BackdropRootProps = ParentProps<BackdropVisibilityProp> & JSX.HTMLAttributes<HTMLDivElement>

type BackdropOutsideClickProp = {
    onClickOutside: () => void
}

export type BackdropContentPositionProps = {

    relative ?: true

    flex ?: "row" | "column"

}

export type BackdropProps = ParentProps<BackdropVisibilityProp & BackdropOutsideClickProp & BackdropContentPositionProps>

type BackdropContentProps = ParentProps<BackdropOutsideClickProp> & BackdropContentPositionProps

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

export function BackdropRoot(props: BackdropRootProps) {
    return (
        <BackdropContainer
            style={{display: props.isVisible() ? "block" : "none"}}
            children={props.children}
            {...splitProps(props, ["isVisible", "children"])[1]}
        />
    )
}

export function onBackdropClick(props: BackdropOutsideClickProp): (e: MouseEvent & { currentTarget: HTMLElement, target: Element }) => void {
    return (e) => {
        if (e.currentTarget === e.target || !e.currentTarget.contains(e.target)) {
            props.onClickOutside()
        }
    }
}

export function BackdropContent(props: BackdropContentProps) {

    const positionProp : JSX.CSSProperties = (props.flex != null) ? ({
        display : "flex",
        "flex-direction": (props.flex),
        "justify-content" : "center",
        "align-items" : "center"
    }) : (props.relative ? ({
        position : "relative"
    }) : ({}))

    return (
        <div
            children={props.children}
            onClick={onBackdropClick(props)}
            style={{
                width : "100%",
                height : "100%",
                ...positionProp
            }}
        />
    )
}

export function Backdrop(props: BackdropProps & BackdropContentPositionProps) {
    return (
        <BackdropRoot {...props}>
            <BackdropContent
                children={props.children}
                onClickOutside={props.onClickOutside}
                flex={props.flex || (props.relative ? undefined : "column")}
                relative={props.relative}
            />
        </BackdropRoot>
    )
}