import {styled} from "@qinetik/emotion";
import {Accessor, splitProps} from "solid-js";
import {Backdrop} from "../backdrop";
import {Text} from "../text";
import {Portal} from "solid-js/web";
import {Anique} from "../theme/Theme";

export const StaticDrawer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 280px;
  box-sizing: border-box;
  padding: 1.5em;
`

export interface DrawerItemProps {
    isActive ?: boolean
}

export const DrawerItem = styled("div")<DrawerItemProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 0.5em 0.6em 1em;
  border-radius: 999px;
  cursor: pointer;
  font-family:${Anique.font.secondary};
  color : ${Anique.colors.onBg};
  ${p => p.isActive && "background : " + Anique.colors.bg200 + ";"}
    
  &:hover {
    background: ${Anique.colors.primary};
  }
`

const StyledSectionText = styled("span")`
  box-sizing: border-box;
  display:inline-block;
  padding: 0.6em 0.5em 0.6em 1em;
  margin : 1em 0 0.25em 0;
  font-family : ${Anique.font.primary};
`

export const DrawerSectionItem = styled((props: { title: string }) => {
    const split = splitProps(props, ["title"])
    return (
        <StyledSectionText color={"onBg100"} as={"h4"} children={props.title} {...split[1]}/>
    )
})`
`