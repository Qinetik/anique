import {css, styled} from "@qinetik/emotion";
import {JSX, splitProps} from "solid-js";
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

const TabRoot = css`

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    cursor: pointer;

    transition: border-bottom 0.3s ease, color 0.3s ease;

    &:hover, &.selected {
        border-bottom: 3px solid ${Anique.colors.primary};
        color: ${Anique.colors.primary};
    }

`

export function Tab(props: TabProps & JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...splitProps(props, ["isSelected"])[1]}
            class={TabRoot() + (props.isSelected ? " selected" : "") + (props.class ? " " + props.class : "")}
        />
    )
}