import {styled} from "@qinetik/emotion";
import {JSX, ParentProps, splitProps} from "solid-js";
import {Anique} from "../theme";

// export interface TabRowProps {
//
// }

const TabRowRoot = styled('div')`
    display: flex;
    flex-direction: row;
    background: ${Anique.colors.bg200};
    border-radius: ${Anique.border.smRadius};
`

export const TabRow = TabRowRoot

export interface TabProps extends JSX.HTMLAttributes<HTMLDivElement> {
    isSelected?: boolean
}

const TabRoot = styled("div")`

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
    padding: 0.75em 2em;
    cursor: pointer;

    transition: border-bottom 0.3s ease, color 0.3s ease;

    &:hover, &.selected {
        border-bottom: 3px solid ${Anique.colors.primary};
        color: ${Anique.colors.primary};
    }

`

export function Tab(props: ParentProps<TabProps>) {
    return (
        <TabRoot
            class={props.isSelected ? "selected" : undefined}
            children={props.children}
            {...splitProps(props, ["isSelected", "children"])[1]}
        />
    )
}