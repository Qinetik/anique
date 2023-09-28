import {styled} from "@qinetik/emotion";
import {Accessor} from "solid-js";
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
    background: ${Anique.colors.bg200};
    box-sizing: border-box;
    padding: 1.5em;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 1em;
    overflow-y: scroll;
`

export const DrawerItem = styled("div")`
    width: 100%;
    box-sizing: border-box;
    padding: 0.8em 1em;
    background: ${Anique.colors.bg400};
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: ${Anique.colors.bg500};
    }
`

const DrawerSectionContainer = styled("div")<{ indent?: boolean }>`
    box-sizing: border-box;
    ${p => (p.indent == null || p.indent == true) ? ("padding: 0 0 0 1em;") : ""}
    display: flex;
    flex-direction: column;
    gap: inherit;
`

export function DrawerSectionItem(props: { title: string, indent?: boolean, children?: any }) {
    return (
        <>
            <Text color={"onBg500"}>{props.title}</Text>
            <DrawerSectionContainer indent={props.indent}>
                {props.children}
            </DrawerSectionContainer>
        </>
    )
}