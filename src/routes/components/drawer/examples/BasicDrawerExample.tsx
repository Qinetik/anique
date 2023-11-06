import {DrawerItem, DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme/Theme";
import ArchiveOutlineIcon from "@qinetik/mdi/ArchiveOutlineIcon";
import MoreIcon from "@qinetik/mdi/MoreIcon";
import {IconButton} from "@qinetik/anique";
import {MoreVertIcon} from "@qinetik/anique-icons";
import TrashCanIcon from "@qinetik/mdi/TrashCanIcon";
import BadgeIcon from "@qinetik/mdi/BadgeIcon";

const StyledDrawer = styled(StaticDrawer)`
    border: 1px solid ${Anique.colors.bg200};
    border-radius: ${Anique.border.smRadius};
`

const LinkDrawerItem = DrawerItem.withComponent('a')

export default function BasicDrawerExample() {
    return (
        <StyledDrawer>
            <LinkDrawerItem href={"#"}>Home</LinkDrawerItem>
            <DrawerSectionItem title={"Input"}/>
            <LinkDrawerItem href={"#"}>
                Services
            </LinkDrawerItem>
            <LinkDrawerItem href={"#"}>
                Contact
            </LinkDrawerItem>
            <DrawerSectionItem title={"With Icons"} />
            <LinkDrawerItem id={"archive"} href={"#archive"}>
                <ArchiveOutlineIcon />
                <span>Archive</span>
            </LinkDrawerItem>
            <LinkDrawerItem id={"deleted"} href={"#deleted"}>
                <TrashCanIcon />
                <span style={{ flex : 1 }}>Deleted</span>
                <BadgeIcon />
            </LinkDrawerItem>
        </StyledDrawer>
    )
}