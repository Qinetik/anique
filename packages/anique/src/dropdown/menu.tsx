import {styled} from "@qinetik/emotion";
import {Column} from "../column";
import {Accessor, JSX, ParentProps, splitProps} from "solid-js";
import {mergeStylesAndVisibility, useClickOutside} from "../backdrop";
import {AniqueZIndex} from "../utils/zIndexMap";
import {useDialogContext} from "../dialog";
import {Portal} from "solid-js/web";

export const DropdownMenuRoot = styled(Column)`
    align-items: unset;
    position: absolute;
    width: max-content;
    z-index: ${AniqueZIndex.DropdownMenu};
`

interface DropdownMenuProps {

    onCloseRequest: () => void;

    isVisible?: Accessor<boolean>

}

export function DropdownMenu(props: ParentProps<DropdownMenuProps> & JSX.HTMLAttributes<HTMLDivElement>) {

    let ref: HTMLDivElement | undefined

    useClickOutside(() => ref, (e) => {
        props.onCloseRequest()
        e.stopImmediatePropagation()
    }, props.isVisible)

    useDialogContext(props.isVisible, undefined, false)

    return (
        <>
            <DropdownMenuRoot
                {...splitProps(props, ["onCloseRequest", "isVisible"])[1]}
                ref={ref}
                style={mergeStylesAndVisibility(props.style, props.isVisible)}
            >
                {props.children}
            </DropdownMenuRoot>
            <Portal>
                <div
                    onClick={(e) => {
                        e.stopImmediatePropagation()
                        props.onCloseRequest()
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        "z-index": AniqueZIndex.DropdownBackdrop,
                        ...(props.isVisible ? ({display: props.isVisible() ? "block" : "none"}) : {})
                    }}
                />
            </Portal>
        </>
    )
}