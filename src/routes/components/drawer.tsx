import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Card} from "@qinetik/anique/card";
import {DrawerItem, DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme/Theme";
import {DocContainer} from "../../components/common/layout/DocContainer";

const StyledDrawer = styled(StaticDrawer)`
    border : 1px solid ${Anique.colors.bg200};
    border-radius : ${Anique.border.smRadius};
    & a {
        text-decoration: none;
    }
`

export default function DrawerPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Drawer</Headline>
                <h1>StaticDrawer</h1>

                <StyledDrawer>
                    <a href={"#"}>
                        <DrawerItem>Home</DrawerItem>
                    </a>
                    <DrawerSectionItem title={"Input"}/>
                    <a href="#">
                        <DrawerItem>
                            Services
                        </DrawerItem>
                    </a>
                    <a href={"#"}>
                        <DrawerItem>
                            Contact
                        </DrawerItem>
                    </a>
                </StyledDrawer>
            </Column>
        </DocContainer>
    )
}