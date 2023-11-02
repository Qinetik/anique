import {styled} from "@qinetik/emotion";
import {Accessor, JSX, ParentProps, Show} from "solid-js";
import {Anique, Breakpoint} from "../theme";
import {Backdrop} from "../backdrop";
import {AniqueZIndex} from "../utils/zIndexMap";

const Root = styled("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`

const Sidebar = styled("div", {
    shouldForwardProp : (prop) => prop != "drawerWidth" && prop != "topBarHeight"
})<{ drawerWidth: string, topBarHeight: string }>`
    width: ${p => p.drawerWidth};
    height: calc(100% - ${p => p.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: ${AniqueZIndex.FixedSidebar};

    display: none;

    ${Anique.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`

const SidebarContent = styled("div", {
    shouldForwardProp : (prop) => prop != "drawerWidth" && prop != "topBarHeight"
})<{ drawerWidth: string, topBarHeight: string }>`
    width: ${p => p.drawerWidth};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    height: calc(100% - ${p => p.topBarHeight});
    position: fixed;
    top: ${p => p.topBarHeight};
    bottom: 0;
    z-index : ${AniqueZIndex.FixedSidebar};
    //background: red;
`

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const TopBar = styled("div", {
    shouldForwardProp : (prop) => prop != "topBarHeight"
})<{
    topBarHeight: string
}>`
    left: 0;
    top: 0;
    right: 0;
    height: ${p => p.topBarHeight};
    position : fixed;
    z-index: ${AniqueZIndex.FixedTopBar};
    //background: blue;
`

const ContentWrapper = styled("div", {
    shouldForwardProp : (prop) => prop != "topBarHeight"
})<{ topBarHeight: string }>`
    flex: 1;
    overflow-y: auto;
    margin-top: ${p => p.topBarHeight};
    position: relative;
    //background: grey;
`

const MobileSidebar = styled("div", {
    shouldForwardProp : (prop) => prop != "hideAboveBreakpoint"
})<{ hideAboveBreakpoint?: string }>`
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
                    <TopBar topBarHeight={topBarHeight}>
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
                when={mobileDrawerContent != null && props.showMobileDrawer != null && props.onDismissMobileDrawer != null}
            >
                <Backdrop
                    isVisible={props.showMobileDrawer!!}
                    onClickOutside={props.onDismissMobileDrawer!!}
                    style={{"z-index": AniqueZIndex.MobileDrawer}}
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
                                background: Anique.colors.bg100,
                                "border-top-right-radius": Anique.border.mdRadius,
                                "border-bottom-right-radius": Anique.border.mdRadius,
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