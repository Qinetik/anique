import {styled} from "@qinetik/emotion";
import {createSignal} from "solid-js";
import {Anique, AppBar, DrawerItem, IconButton, LabeledCheckbox, Row, StaticDrawer} from "@qinetik/anique";
import {Scaffold} from "@qinetik/anique/scaffold";
import Menu from "../../icons/Menu";

const MobileIconButton = styled(IconButton)`
  ${Anique.breakpoints.up("md")} {
    display: none;
  }
`

export default function ScaffoldTestingPage() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = createSignal(false)
    let content: string[] = []
    for (let i = 1; i <= 500; i++) {
        content = [...content, `Content ${i}`]
    }

    const [hasTopBar, setHasTopBar] = createSignal(true)
    const [hasLeftSidebar, setHasLeftSidebar] = createSignal(true)
    const [hasRightSidebar, setHasRightSidebar] = createSignal(true)

    return (
        <Scaffold
            topBar={hasTopBar() ? (() => (
                <AppBar
                    title={
                        <Row gap={"1em"}>
                            <IconButton onClick={() => setMobileDrawerOpen((e) => !e)}>
                                <Menu/>
                            </IconButton>
                            Scaffold Demo
                        </Row>
                    }
                    actions={
                        <Row gap={"0.5em"}>
                            {/*<LabeledCheckbox*/}
                            {/*    label={"App Bar"}*/}
                            {/*    isChecked={hasTopBar}*/}
                            {/*    onChange={(e) => setHasTopBar(e)}*/}
                            {/*/>*/}
                            <LabeledCheckbox
                                label={"Left Sidebar"}
                                isChecked={hasLeftSidebar}
                                onChange={(e) => setHasLeftSidebar(e)}
                            />
                            <LabeledCheckbox
                                label={"Right Sidebar"}
                                isChecked={hasRightSidebar}
                                onChange={(e) => setHasRightSidebar(e)}
                            />
                        </Row>
                    }
                />
            )) : undefined}
            drawerContent={hasLeftSidebar() ? () => <DemoStaticDrawer/> : undefined}
            drawerWidth={"300px"}
            oppositeDrawerWidth={"300px"}
            oppositeDrawerContent={hasRightSidebar() ? () => <DemoStaticDrawer/> : undefined}
            showMobileDrawer={mobileDrawerOpen}
            onDismissMobileDrawer={() => setMobileDrawerOpen(false)}
        >
            {/*{!hasTopBar() ? (*/}
            {/*    <LabeledCheckbox*/}
            {/*        label={"App Bar"}*/}
            {/*        description={"Note that Currently AppBar works best if turned off from code"}*/}
            {/*        isChecked={() => false}*/}
            {/*        onChange={(e) => setHasTopBar(e)}*/}
            {/*    />*/}
            {/*) : null}*/}
            {content.map(e => <div>{e}</div>)}
            <DemoFooter/>
        </Scaffold>
    )
}

function DemoStaticDrawer() {
    let content: string[] = []
    for (let i = 1; i <= 500; i++) {
        content = [...content, `Content ${i}`]
    }
    return (
        <StaticDrawer>
            <DrawerItem>
                First Something
            </DrawerItem>
            <DrawerItem>
                Second Something
            </DrawerItem>
            <DrawerItem>
                Third Something
            </DrawerItem>
            <DrawerItem>
                Fourth Something
            </DrawerItem>
            {/*{content.map(e => <DrawerItem>{e}</DrawerItem>)}*/}
        </StaticDrawer>
    )
}

function DemoFooter() {
    return (
        <div style={{width: "100%", height: "200px", background: "yellow"}}>
            This is my footer
        </div>
    )
}