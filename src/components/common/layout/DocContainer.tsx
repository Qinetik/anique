import {DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
import {WebAppBar} from "../../../solid/components/AppBar";
import {Scaffold} from "@qinetik/anique";
import AnchorDrawerItem from "../../../solid/components/AnchorDrawerItem";
import {useLocation} from "solid-start";
import {createGlobalStyle} from "@qinetik/emotion";
import {createSignal, ParentProps} from "solid-js";
import {AniqueThemeAutoSetup} from "@qinetik/anique/theme";
import {PageGlobalStyles} from "../GlobalStyles";

const DocContainerStyles = createGlobalStyle`

    .content-container {
        display: table-cell;
        vertical-align: top;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: start;
        justify-items: start;
        align-items: center;
        flex: 1;
        box-sizing: border-box;
    }

    .container {
        padding: 0 4rem;
    }

    .bar-content-row {
        display: table;
    }

    .static-drawer {
        display: table-cell;
        vertical-align: top;
    }

    .static-drawer a {
        text-decoration: none;
    }

`

export function DocContainer(props : ParentProps) {
    const [isMobileOpen, setIsMobileOpen] = createSignal(false)
    return (
        <main>
            <PageGlobalStyles/>
            <AniqueThemeAutoSetup/>
            <DocContainerStyles/>
            <Scaffold
                topBar={() => (
                    <WebAppBar
                        onDrawerOpen={() => setIsMobileOpen(true)}
                    />
                )}
                drawerContent={() => <SideDrawer/>}
                drawerWidth={"300px"}
                showMobileDrawer={isMobileOpen}
                onDismissMobileDrawer={() => setIsMobileOpen(false)}
            >
                <div class="content-container">
                    <div class="container">
                        {props.children}
                    </div>
                </div>
            </Scaffold>
        </main>
    )
}

function SideDrawer() {

    const location = useLocation()
    const base = "/anique"
    const path = location.pathname

    return (
        <StaticDrawer
            class="static-drawer"
        >

            <AnchorDrawerItem href={base + "/"} current={path}>
                Home
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/setup"} current={path}>
                Setup
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/theming"} current={path}>
                Theming
            </AnchorDrawerItem>

            <DrawerSectionItem title={"Input"}/>
            <AnchorDrawerItem href={`${base}/components/textfield`} current={path}>
                TextField
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/fab"} current={path}>
                Floating Action Button
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/button"} current={path}>
                Button
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/snackbar"} current={path}>
                Snackbar
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/icon-button"} current={path}>
                IconButton
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/chip"} current={path}>
                Chip
            </AnchorDrawerItem>
            <AnchorDrawerItem href={`${base}/components/accordion`} current={path}>
                Accordion
            </AnchorDrawerItem>
            <AnchorDrawerItem href={`${base}/components/dropdown`} current={path}>
                Dropdown
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/switch"} current={path}>
                ToggleSwitch
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/checkbox"} current={path}>
                Checkbox
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/radio"} current={path}>
                Radio
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/slider"} current={path}>
                Slider
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/native-select"} current={path}>
                Native Select
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/select"} current={path}>
                Select
            </AnchorDrawerItem>

            <DrawerSectionItem title={"Layout"}/>
            <AnchorDrawerItem href={base + "/components/scaffold"} current={path}>
                Scaffold
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/scrollbar"} current={path}>
                Scrollbar
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/column"} current={path}>
                Column
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/row"} current={path}>
                Row
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/dialog"} current={path}>
                Dialog
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/appbar"} current={path}>
                AppBar
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/tabs"} current={path}>
                Tabs
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/drawer"} current={path}>
                Drawer
            </AnchorDrawerItem>

            <DrawerSectionItem title={"Text"}/>
            <AnchorDrawerItem href={base + "/components/text"} current={path}>
                Native Text
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/headline"} current={path}>
                Headline
            </AnchorDrawerItem>

            <DrawerSectionItem title="Data"/>
            <AnchorDrawerItem href={base + "/components/table"} current={path}>
                Table
            </AnchorDrawerItem>
            <DrawerSectionItem title="Display"/>
            <AnchorDrawerItem href={base + "/components/card"} current={path}>
                Card
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/icon"} current={path}>
                Icon
            </AnchorDrawerItem>

            <DrawerSectionItem title={"Feedback"}/>
            <AnchorDrawerItem href={base + "/components/alert"} current={path}>
                Alert
            </AnchorDrawerItem>
            <AnchorDrawerItem href={base + "/components/spinner"} current={path}>
                Spinner
            </AnchorDrawerItem>

        </StaticDrawer>

    )
}