import {styled} from "@qinetik/emotion";
import {Accessor, createSignal, JSX, Setter, splitProps} from "solid-js";
import {Icon} from "../icon";
import {Anique} from "../theme";

export interface AccordionProps extends JSX.HTMLAttributes<HTMLDivElement> {
    title: any
    children?: any
    expanded?: Accessor<boolean>
    setExpanded?: Setter<boolean>
    defaultExpanded?: boolean
    showIcon ?: boolean
}

const AccordionRoot = styled("div")`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;
    
    background: ${Anique.colors.bg200};
    padding: 1.25em;
    gap : 0.5em;
    box-sizing: border-box;
    border-radius: ${Anique.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }
    
    & .icon {
        transition : rotate 500ms;
    }
    
    &.expanded .icon {
        rotate : 180deg;
    }
    
`

const AccordionTitle = styled("div")`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    align-items:center;
    
    & > :first-of-type {
          flex : 1;
    }
    
`

const AccordionContent = styled("div")`
  overflow: hidden;
`

// TODO put this component in anique-icons package
function ChevronUpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
    )
}

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

    const gtClassName = () => (props.class ? (props.class + (expanded() ? " expanded" : "")) : (expanded() ? "expanded" : undefined))

    return (
        <AccordionRoot
            {...splitProps(props, ["title", "children", "class"])[1]}
            class={gtClassName()}
        >
            <AccordionTitle
                onClick={() => setExpanded(!expanded())}
            >
                <div>{props.title}</div>
                {(props.showIcon ?? true) && <Icon class={"icon"}><ChevronUpIcon /></Icon>}
            </AccordionTitle>
            <AccordionContent>{props.children}</AccordionContent>
        </AccordionRoot>
    )
}