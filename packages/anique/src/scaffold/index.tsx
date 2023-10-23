import {styled} from "@qinetik/emotion";
import {Accessor, JSX, ParentProps, Show} from "solid-js";
import {Anique, Breakpoint} from "../theme";
import {Backdrop} from "../backdrop";

const Root = styled("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`

const Sidebar = styled("div")<{ drawerWidth: string, topBarHeight: string }>`
    width: ${p => p.drawerWidth};
    height: calc(100% - ${p => p.topBarHeight});
    //background: skyblue;
    box-sizing: border-box;
    position: relative;
    z-index: 998;

    display: none;

    ${Anique.breakpoints.up("md")} {
        display: block;
    }

`

const SidebarContent = styled("div")<{ drawerWidth: string, topBarHeight: string }>`
    width: ${p => p.drawerWidth};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    height: calc(100% - ${p => p.topBarHeight});
    position: fixed;
    top: ${p => p.topBarHeight};
    bottom: 0;
    //background: red;
`

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const TopBar = styled("div")<{
    topBarHeight: string
}>`
    left: 0;
    top: 0;
    right: 0;
    //background: blue;
    height: ${p => p.topBarHeight};
    z-index: 999;
`

const ContentWrapper = styled("div")<{ topBarHeight: string }>`
    flex: 1;
    //background: grey;
    overflow-y: auto;
    margin-top: ${p => p.topBarHeight};
    position: relative;
`

const MobileSidebar = styled("div")<{ hideAboveBreakpoint?: string }>`
    position: absolute;
    top: 0;
    bottom: 0;
    ${p => p.hideAboveBreakpoint != null && p.hideAboveBreakpoint + `{
     display: none;
  }`}
`

export interface ScaffoldProps {

    topBar?: () => JSX.Element
    topBarHeight?: string

    drawerContent?: () => JSX.Element
    drawerWidth?: string
    oppositeDrawerContent?: () => JSX.Element
    oppositeDrawerWidth?: string
    mobileDrawerContent?: () => JSX.Element

    showMountedDrawer?: boolean
    showMobileDrawer?: Accessor<boolean>
    onDismissMobileDrawer?: () => void
    hideMobileDrawerAbove?: Breakpoint

}

export function Scaffold(props: ParentProps<ScaffoldProps>) {

    const mobileDrawerContent = props.mobileDrawerContent || (props.drawerContent || props.oppositeDrawerContent)
    const isMobileOpposite = props.mobileDrawerContent == null && props.drawerContent == null && props.oppositeDrawerContent != null

    const drawerWidth = props.drawerWidth || "280px"
    const oppositeDrawerWidth = props.oppositeDrawerWidth || "280px"

    const topBarHeight = props.topBar != null ? (props.topBarHeight || "56px") : "0px"

    return (
        <Root>
            <Show when={props.drawerContent != null && (props.showMountedDrawer == null || props.showMountedDrawer)}>
                <Sidebar drawerWidth={drawerWidth} topBarHeight={topBarHeight}>
                    <SidebarContent drawerWidth={drawerWidth} topBarHeight={topBarHeight} style={{left: 0}}>
                        {props.drawerContent!!()}
                    </SidebarContent>
                </Sidebar>
            </Show>
            <Wrapper>
                <Show when={props.topBar != null}>
                    <TopBar style={{position: "fixed"}} topBarHeight={topBarHeight}>
                        {props.topBar!!()}
                    </TopBar>
                </Show>
                <ContentWrapper topBarHeight={topBarHeight}>
                    {props.children}
                </ContentWrapper>
            </Wrapper>
            <Show when={props.oppositeDrawerContent != null}>
                <Sidebar drawerWidth={oppositeDrawerWidth} topBarHeight={topBarHeight}>
                    <SidebarContent drawerWidth={oppositeDrawerWidth} topBarHeight={topBarHeight} style={{right: 0}}>
                        {props.oppositeDrawerContent!!()}
                    </SidebarContent>
                </Sidebar>
            </Show>
            <Show
                when={mobileDrawerContent != null && props.showMobileDrawer != null && props.onDismissMobileDrawer != null}>
                <Backdrop
                    isVisible={props.showMobileDrawer!!}
                    onClickOutside={props.onDismissMobileDrawer!!}
                    relative
                >
                    <MobileSidebar
                        hideAboveBreakpoint={props.hideMobileDrawerAbove != null ? Anique.breakpoints.up(props.hideMobileDrawerAbove) : undefined}
                        style={isMobileOpposite ? ({right: 0}) : ({left: 0})}
                    >
                        <SidebarContent
                            drawerWidth={drawerWidth}
                            topBarHeight={topBarHeight}
                            style={{
                                background : Anique.colors.bg100,
                                "border-top-right-radius" : Anique.border.mdRadius,
                                "border-bottom-right-radius" : Anique.border.mdRadius,
                                ...(isMobileOpposite ? ({right: 0}) : ({left: 0}))
                            }}
                        >
                            {mobileDrawerContent!!()}
                        </SidebarContent>
                    </MobileSidebar>
                </Backdrop>
            </Show>
        </Root>
    )
}