import{b as i,c as e,g as p,a as S,i as l,S as D,f as g,t as c}from"./entry-client-3af6d313.js";import{s as y}from"./index-94caafb4.js";import{A as R}from"./Theme-c9d85115.js";import{M as T}from"./index-bab6a310.js";import"./index-c5bef6b0.js";import{A as v}from"./index-cfa94871.js";import{L as b,f as L,M as _,S as H}from"./index-1830aefe.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import{D as a,S as O}from"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import{I as d}from"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import{R as F}from"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import{A as W}from"./AniqueThemes-a471672f.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import{M as E}from"./Menu-0cea71b1.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";import"./createGlobalStyle-ac00ca6c.js";const N=c("<div>This is my footer"),P=c("<div><!$><!/><!$><!/>"),V=c("<div>");y(d)`
    ${R.breakpoints.up("md")} {
        display: none;
    }
`;function j(){return(()=>{const r=p(N);return r.style.setProperty("width","100%"),r.style.setProperty("height","200px"),r})()}function z(){const[r,o]=i(!1);let t=[];for(let n=1;n<=500;n++)t=[...t,`Content ${n}`];const[C,G]=i(!0),[h,I]=i(!0),[u,M]=i(!0),[k,f]=i(!1);return[e(W,{}),e(H,{get topBar(){return C()?()=>e(v,{navIcon:()=>e(d,{onClick:()=>o(n=>!n),get children(){return e(E,{})}}),title:"Scaffold Demo",get actions(){return e(F,{gap:"0.5em",get children(){return[e(b,{label:"Left Sidebar",isChecked:h,onChange:n=>I(n)}),e(b,{label:"Right Sidebar",isChecked:u,onChange:n=>M(n)}),(()=>{const n=p(P),s=n.firstChild,[w,B]=S(s.nextSibling),x=w.nextSibling,[$,q]=S(x.nextSibling);return n.style.setProperty("position","relative"),l(n,e(d,{onClick:()=>f(A=>!A),get children(){return e(T,{})}}),w,B),l(n,e(D,{get when(){return k()},get children(){return e(L,{style:{right:"0"},onCloseRequest:()=>f(!1),get children(){return e(_,{children:"Demo Dropdown"})}})}}),$,q),n})()]}})}}):void 0},get drawerContent(){return h()?()=>e(m,{mobile:!1}):void 0},drawerWidth:"300px",oppositeDrawerWidth:"300px",get oppositeDrawerContent(){return u()?()=>e(m,{mobile:!1}):void 0},showMobileDrawer:r,mobileDrawerContent:()=>e(m,{mobile:!0}),onDismissMobileDrawer:()=>o(!1),get children(){return[g(()=>t.map(n=>(()=>{const s=p(V);return l(s,n),s})())),e(j,{})]}})]}function m(r){let o=[];for(let t=1;t<=25;t++)o=[...o,`Content ${t}`];return e(O,{get children(){return[e(a,{isActive:!0,children:"The Chosen One"}),e(D,{get when(){return r.mobile},get children(){return[e(a,{children:"Second Something"}),e(a,{children:"Third Something"}),e(a,{children:"Fourth Something"})]}}),g(()=>o.map(t=>e(a,{children:t})))]}})}z.code=`import {styled} from "@qinetik/emotion";
import {createSignal, Show} from "solid-js";
import {Anique, AppBar, DrawerItem, IconButton, LabeledCheckbox, MenuItem, Row, StaticDrawer} from "@qinetik/anique";
import {Scaffold} from "@qinetik/anique/scaffold";
import {MoreVertIcon} from "@qinetik/anique-icons";
import {DropdownMenu} from "@qinetik/anique/dropdown";
import {AniqueThemeAutoSetup} from "@qinetik/anique/theme";
import Menu from "../../../../solid/icons/Menu";

const MobileIconButton = styled(IconButton)\`
    \${Anique.breakpoints.up("md")} {
        display: none;
    }
\`

function DemoFooter() {
    return (
        <div style={{width: "100%", height: "200px"}}>
            This is my footer
        </div>
    )
}

export default function ScaffoldExample() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = createSignal(false)
    let content: string[] = []
    for (let i = 1; i <= 500; i++) {
        content = [...content, \`Content \${i}\`]
    }

    const [hasTopBar, setHasTopBar] = createSignal(true)
    const [hasLeftSidebar, setHasLeftSidebar] = createSignal(true)
    const [hasRightSidebar, setHasRightSidebar] = createSignal(true)
    const [dropdown, setDropdown] = createSignal(false)

    return (
        <>
            <AniqueThemeAutoSetup/>
            <Scaffold
                topBar={hasTopBar() ? (() => (
                    <AppBar
                        navIcon={() => (
                            <IconButton onClick={() => setMobileDrawerOpen((e) => !e)}>
                                <Menu/>
                            </IconButton>
                        )}
                        title={"Scaffold Demo"}
                        actions={
                            <Row gap={"0.5em"}>
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
                                <div style={{position: "relative"}}>
                                    <IconButton onClick={() => setDropdown((e) => !e)}>
                                        <MoreVertIcon/>
                                    </IconButton>
                                    <Show when={dropdown()}>
                                        <DropdownMenu style={{right: "0"}} onCloseRequest={() => setDropdown(false)}>
                                            <MenuItem>Demo Dropdown</MenuItem>
                                        </DropdownMenu>
                                    </Show>
                                </div>
                            </Row>
                        }
                    />
                )) : undefined}
                drawerContent={hasLeftSidebar() ? () => <DemoStaticDrawer mobile={false}/> : undefined}
                drawerWidth={"300px"}
                oppositeDrawerWidth={"300px"}
                oppositeDrawerContent={hasRightSidebar() ? () => <DemoStaticDrawer mobile={false}/> : undefined}
                showMobileDrawer={mobileDrawerOpen}
                mobileDrawerContent={() => <DemoStaticDrawer mobile={true}/>}
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
        </>
    )
}

function DemoStaticDrawer(props: { mobile: boolean }) {
    let content: string[] = []
    for (let i = 1; i <= 25; i++) {
        content = [...content, \`Content \${i}\`]
    }
    return (
        <StaticDrawer>
            <DrawerItem isActive={true}>
                The Chosen One
            </DrawerItem>
            <Show when={props.mobile}>
                <DrawerItem>
                    Second Something
                </DrawerItem>
                <DrawerItem>
                    Third Something
                </DrawerItem>
                <DrawerItem>
                    Fourth Something
                </DrawerItem>
            </Show>
            {content.map(e => <DrawerItem>{e}</DrawerItem>)}
        </StaticDrawer>
    )
}`;export{z as default};
