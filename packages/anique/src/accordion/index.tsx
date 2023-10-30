import {css, styled} from "@qinetik/emotion";
import {Accessor, createSignal, JSX, JSXElement, ParentProps, Setter, splitProps} from "solid-js";
import {Icon} from "../icon";
import {Anique} from "../theme";
import {ChevronUp} from "@qinetik/anique-icons";

export interface AccordionProps extends JSX.HTMLAttributes<HTMLDivElement> {
    title: any
    children?: any
    expanded?: Accessor<boolean>
    setExpanded?: Setter<boolean>
    defaultExpanded?: boolean
    showIcon?: boolean
}

const AccordionRoot = css`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;

    background: ${Anique.colors.bg200};
    padding: 1.25em;
    gap: 0.5em;
    box-sizing: border-box;
    border-radius: ${Anique.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

    & .icon {
        transition: rotate 500ms;
    }

    &.expanded .icon {
        rotate: 180deg;
    }

`

const AccordionTitle = css`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > :first-of-type {
        flex: 1;
    }
`

export function Accordion(props: AccordionProps) {

    // @ts-ignore
    let expanded: Accessor<boolean> = props.expanded
    // @ts-ignore
    let setExpanded: Setter<boolean> = props.setExpanded

    if (props.expanded == null || props.setExpanded == null) {
        const signal = createSignal<boolean>(props.defaultExpanded ?? true)
        expanded = signal[0]
        setExpanded = signal[1]
    }

    return (
        <div
            {...splitProps(props, ["title", "children", "class", "defaultExpanded"])[1]}
            class={AccordionRoot() + (expanded() ? " expanded" : "") + (props.class ? " " + props.class : "")}
        >
            <div
                onClick={() => setExpanded(!expanded())}
                class={AccordionTitle()}
            >
                <div>{props.title}</div>
                {(props.showIcon ?? true) && <Icon class={"icon"}><ChevronUp/></Icon>}
            </div>
            <div style={{overflow: "hidden"}}>{props.children}</div>
        </div>
    )
}

interface ExpandableProps {
    timeMillis?: number
}

export const ExpandableRoot = styled("div", {
    shouldForwardProp: (prop) => prop != "timeMillis"
})<ExpandableProps>`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows ${p => p.timeMillis || 500}ms;

    box-sizing: border-box;
    border-radius: ${Anique.border.smRadius};

    & .content {
        overflow: hidden;
    }

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

`

export function Expandable(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement> & ExpandableProps & {
    exposed?: JSXElement
}>) {
    return (
        <ExpandableRoot {...splitProps(props, ["exposed", "children"])[1]}>
            <div class={"exposed"}>{props.exposed}</div>
            <div class="content">{props.children}</div>
        </ExpandableRoot>
    )
}