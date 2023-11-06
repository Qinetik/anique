import {styled} from "@qinetik/emotion";
import {splitProps} from "solid-js";
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
    isActive?: boolean
}

export const DrawerItem = styled("div", {
    shouldForwardProp : (prop) => prop != "isActive"
})<DrawerItemProps>`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${Anique.font.secondary};
    color: ${Anique.colors.onBg};
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 1em;
    text-decoration : none;

    ${p => p.isActive && "background : " + Anique.colors.bg200 + ";"}
    &:hover {
        background: ${Anique.colors.primary};
        color: ${Anique.colors.onBg};
        text-decoration : none;
    }
`

const StyledSectionText = styled("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 0.25em 0 0.25em 0;
    font-family: ${Anique.font.primary};
    color : ${Anique.colors.onBg200};
`

export const DrawerSectionItem = styled((props: { title: string }) => {
    return (
        <StyledSectionText children={props.title} {...splitProps(props, ["title"])[1]}/>
    )
})`
`