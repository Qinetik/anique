import {styled} from "@qinetik/emotion";
import {JSX, ParentProps, splitProps} from "solid-js";

const HoverableDropdownMenuRoot = styled("div")`

  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;

  &:hover *:last-of-type:not(style) {
    display: block;
  }

  & > *:last-of-type:not(style) {
    display: none;
  }

`

export const HoverableMenuExposed = styled('div')`
  width: 100%;
`

export const HoverableMenuContent = styled("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`

export function HoverableDropdownMenu(
    props: JSX.HTMLAttributes<HTMLDivElement> & ParentProps<{
        exposed: () => JSX.Element
    }>
) {
    return (
        <HoverableDropdownMenuRoot {...splitProps(props, ["exposed", "children"])[1]}>
            <HoverableMenuExposed>
                {props.exposed()}
            </HoverableMenuExposed>
            <HoverableMenuContent>
                {props.children}
            </HoverableMenuContent>
        </HoverableDropdownMenuRoot>
    )
}