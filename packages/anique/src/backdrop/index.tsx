import {styled} from "@qinetik/emotion";
import {Accessor, createEffect, JSX, onCleanup, onMount, ParentProps, splitProps} from "solid-js";
import {Anique} from "../theme/Theme";
import {isServer} from "solid-js/web";

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
        onMouseDown: (e: ElementEvent) => {
            isDownOutside = isEventOutside(e)
        },
        onMouseUp: (e: ElementEvent) => {
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

type ClickOutsideEventType = 'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'

function createClickOutside(
    ref: () => HTMLElement | undefined,
    onClickAway: (event: MouseEvent | PointerEvent | TouchEvent) => void,
): [(event: MouseEvent | PointerEvent | TouchEvent) => void, () => Document] {

    const getDoc = () => (ref() && ref()!.ownerDocument) || document

    function onEvent(event: MouseEvent | PointerEvent | TouchEvent) {
        const nodeRef = ref()
        const doc = getDoc()
        if (nodeRef) {
            let insideDOM;
            if (event.composedPath) {
                insideDOM = event.composedPath().indexOf(nodeRef) > -1;
            } else {
                insideDOM =
                    !doc.documentElement.contains(
                        // @ts-expect-error returns `false` as intended when not dispatched from a Node
                        event.target,
                    ) ||
                    nodeRef.contains(
                        // @ts-expect-error returns `false` as intended when not dispatched from a Node
                        event.target,
                    );
            }

            if (!insideDOM) {
                onClickAway(event);
            }
        }
    }

    return [onEvent, getDoc]

}

function useClickOutsideLifecycle(
    ref: () => HTMLElement | undefined,
    onClickAway: (event: MouseEvent | PointerEvent | TouchEvent) => void,
    eventType ?: ClickOutsideEventType
) {
    if (!isServer) {
        const [clickOutside, getDoc] = createClickOutside(ref, onClickAway)
        onMount(() => {
            getDoc().addEventListener(eventType || "click", clickOutside)
        })
        onCleanup(() => {
            getDoc().removeEventListener(eventType || "click", clickOutside)
        })
    }
}

function useClickOutsideEffect(
    ref: () => HTMLElement | undefined,
    onClickAway: (event: MouseEvent | PointerEvent | TouchEvent) => void,
    apply: Accessor<boolean>,
    eventType ?: ClickOutsideEventType
) {
    if (!isServer) {
        const [clickOutside, getDoc] = createClickOutside(ref, onClickAway)
        createEffect(() => {
            if (apply()) {
                getDoc().addEventListener(eventType || "click", clickOutside)
            } else {
                getDoc().removeEventListener(eventType || "click", clickOutside)
            }
        })
    }
}

export function useClickOutside(
    ref: () => HTMLElement | undefined,
    onClickAway: (event: MouseEvent | PointerEvent | TouchEvent) => void,
    apply: Accessor<boolean> | undefined,
    eventType ?: ClickOutsideEventType
) {
    if (apply) {
        useClickOutsideEffect(ref, onClickAway, apply, eventType)
    } else {
        useClickOutsideLifecycle(ref, onClickAway, eventType)
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