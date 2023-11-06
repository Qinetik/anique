import {styled} from "@qinetik/emotion";
import {Anique} from "../theme";
import {JSX} from "solid-js";

const MenuItemRoot = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} class={"anique-menu-item" + (props.class ? " " + props.class : "")}/>
)

export const MenuItem = styled(MenuItemRoot)`

    padding: 0.75em 1em;
    background: ${Anique.colors.bg200};

    cursor: pointer;
    user-select: none;

    transition: background 0.2s ease-in;

    &:hover {
        background: ${Anique.colors.bg300};
    }

    &:active {
        background: ${Anique.colors.bg500};
    }

    &:first-of-type {
        border-top-left-radius: ${Anique.border.smRadius};
        border-top-right-radius: ${Anique.border.smRadius};
    }

    &:last-of-type {
        border-bottom-left-radius: ${Anique.border.smRadius};
        border-bottom-right-radius: ${Anique.border.smRadius};
    }

`