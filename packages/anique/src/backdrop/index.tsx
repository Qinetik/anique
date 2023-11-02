import {styled} from "@qinetik/emotion";
import {Accessor, JSX, ParentProps, splitProps} from "solid-js";
import {Anique} from "../theme/Theme";

type BackdropVisibilityProp = {
    isVisible?: Accessor<boolean>
}

type BackdropRootProps = ParentProps<BackdropVisibilityProp> & JSX.HTMLAttributes<HTMLDivElement>

type BackdropOutsideClickProp = {
    onClickOutside: () => void
}

export type BackdropContentPositionProps = {

    relative?: true

    flex?: "row" | "column"

}

export type BackdropProps = BackdropRootProps & BackdropOutsideClickProp & BackdropContentPositionProps

type BackdropContentProps = ParentProps<BackdropOutsideClickProp> & BackdropContentPositionProps

const BackdropContainer = styled("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

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

export function mergeStylesAndVisibility(style ?: JSX.CSSProperties | string, isVisible ?: Accessor<boolean>) {
    return isVisible == null ? style : (
        typeof style === "undefined" ? (
            isVisible() ? "display:block;" : "display:none;"
        ) : typeof style === "string" ? (
            (isVisible() ? "display:block;" : "display:none;") + style
        ) : (
            {
                display: isVisible() ? "block" : "none",
                ...style
            }
        )
    )
}

export function BackdropRoot(props: BackdropRootProps) {
    return (
        <BackdropContainer
            style={mergeStylesAndVisibility(props.style, props.isVisible)}
            {...splitProps(props, ["isVisible", "style"])[1]}
        />
    )
}

type ElementEvent = MouseEvent & { currentTarget: HTMLElement, target: Element }

function isEventOutside(e: ElementEvent) {
    return e.currentTarget === e.target || !e.currentTarget.contains(e.target);
}

export function onClickOutsideProp(onClickOutside: () => void) {
    let isDownOutside: boolean = false
    return {
        onMouseDown: (e : ElementEvent) => {
            isDownOutside = isEventOutside(e)
        },
        onMouseUp: (e : ElementEvent) => {
            const isUpOutside = isEventOutside(e)
            if (isDownOutside && isUpOutside) {
                e.stopImmediatePropagation()
                onClickOutside()
            }
            // if(isUpOutside && !isDownOutside) {
            // console.log("Avoided dialog on click outside because the mousedown target is not inside")
            // }
            isDownOutside = false
        }
    }
}

export function BackdropContent(props: BackdropContentProps) {

    const positionProp: JSX.CSSProperties = (props.flex != null) ? ({
        display: "flex",
        "flex-direction": (props.flex),
        "justify-content": "center",
        "align-items": "center"
    }) : (props.relative ? ({
        position: "relative"
    }) : ({}))

    return (
        <div
            {...onClickOutsideProp(props.onClickOutside)}
            children={props.children}
            style={{
                width: "100%",
                height: "100%",
                ...positionProp
            }}
        />
    )
}

export function Backdrop(props: BackdropProps & BackdropContentPositionProps) {
    return (
        <BackdropRoot {...splitProps(props, ["children", "onClickOutside", "flex", "relative"])[1]}>
            <BackdropContent
                children={props.children}
                onClickOutside={props.onClickOutside}
                flex={props.flex || (props.relative ? undefined : "column")}
                relative={props.relative}
            />
        </BackdropRoot>
    )
}