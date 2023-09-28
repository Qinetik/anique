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
  height: 100vh;
  box-sizing: border-box;
  padding: 1.5em;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 1em;
`

export const DrawerItem = styled("div")`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 0.5em 0.6em 1em;
  border-radius: 999px;
  cursor: pointer;
  font-family:${Anique.font.secondary};

  &:hover {
    background: ${Anique.colors.bg300};
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