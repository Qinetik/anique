import{b as i,c as e,g as p,a as D,i as l,S as b,f as C,t as h}from"./entry-client-23914c21.js";import{s as q}from"./index-6427a2f6.js";import{A}from"./Theme-c9d85115.js";import{M as y}from"./index-096f9d8e.js";import"./index-d1661098.js";import{A as R}from"./index-55909f5f.js";import{D as _,M as H,S as O}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import{L as g}from"./index-70649c9c.js";import"./index-0715b131.js";import{D as a,S as E}from"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import{I as m}from"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import{R as N}from"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import{A as F,C as c,s as W,L as P}from"./LightDarkIcon-27cd5047.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import{M as V}from"./Menu-4100dfe3.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";import"./createGlobalStyle-f360b4d7.js";const j=h("<div>This is my footer"),z=h("<div><!$><!/><!$><!/>"),G=h("<div>");q(m)`
    ${A.breakpoints.up("md")} {
        display: none;
    }
`;function J(){return(()=>{const o=p(j);return o.style.setProperty("width","100%"),o.style.setProperty("height","200px"),o})()}function K(){const[o,t]=i(!1);let r=[];for(let n=1;n<=500;n++)r=[...r,`Content ${n}`];const[I,U]=i(!0),[u,k]=i(!0),[f,M]=i(!0),[L,w]=i(!1);return[e(F,{}),e(O,{get topBar(){return I()?()=>e(R,{navIcon:()=>e(m,{onClick:()=>t(n=>!n),get children(){return e(V,{})}}),title:"Scaffold Demo",get actions(){return e(N,{gap:"0.5em",get children(){return[e(g,{label:"Left Sidebar",isChecked:u,onChange:n=>k(n)}),e(g,{label:"Right Sidebar",isChecked:f,onChange:n=>M(n)}),e(Q,{}),(()=>{const n=p(z),s=n.firstChild,[S,x]=D(s.nextSibling),B=S.nextSibling,[T,v]=D(B.nextSibling);return n.style.setProperty("position","relative"),l(n,e(m,{onClick:()=>w($=>!$),get children(){return e(y,{})}}),S,x),l(n,e(b,{get when(){return L()},get children(){return e(_,{style:{right:"0"},onCloseRequest:()=>w(!1),get children(){return e(H,{children:"Demo Dropdown"})}})}}),T,v),n})()]}})}}):void 0},get drawerContent(){return u()?()=>e(d,{mobile:!1}):void 0},drawerWidth:"300px",oppositeDrawerWidth:"300px",get oppositeDrawerContent(){return f()?()=>e(d,{mobile:!1}):void 0},showMobileDrawer:o,mobileDrawerContent:()=>e(d,{mobile:!0}),onDismissMobileDrawer:()=>t(!1),get children(){return[C(()=>r.map(n=>(()=>{const s=p(G);return l(s,n),s})())),e(J,{})]}})]}function d(o){let t=[];for(let r=1;r<=25;r++)t=[...t,`Content ${r}`];return e(E,{get children(){return[e(a,{isActive:!0,children:"The Chosen One"}),e(b,{get when(){return o.mobile},get children(){return[e(a,{children:"Second Something"}),e(a,{children:"Third Something"}),e(a,{children:"Fourth Something"})]}}),C(()=>t.map(r=>e(a,{children:r})))]}})}function Q(){return e(m,{onClick:()=>{const o=document.documentElement.className;let t;o==c.Light?t=c.Dark:t=c.Light,document.documentElement.className=t,W(t)},get children(){return e(P,{})}})}K.code=`import {styled} from "@qinetik/emotion";
import {createSignal, Show} from "solid-js";
import {Anique, AppBar, DrawerItem, IconButton, LabeledCheckbox, MenuItem, Row, StaticDrawer} from "@qinetik/anique";
import {Scaffold} from "@qinetik/anique/scaffold";
import {MoreVertIcon} from "@qinetik/anique-icons";
import {DropdownMenu} from "@qinetik/anique/dropdown";
import {AniqueThemeAutoSetup, ColorScheme, saveThemeIntoLocalStorage} from "@qinetik/anique/theme";
import Menu from "../../../../solid/icons/Menu";
import LightDarkIcon from "../../../../solid/icons/LightDarkIcon";

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
                                <ThemeSwitcher />
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
}

function ThemeSwitcher() {
    return (
        <IconButton
            onClick={() => {
                const prev = document.documentElement.className
                let next: ColorScheme
                if (prev == ColorScheme.Light) {
                    next = ColorScheme.Dark
                } else {
                    next = ColorScheme.Light
                }
                document.documentElement.className = next
                saveThemeIntoLocalStorage(next)
            }}
        >
            <LightDarkIcon/>
        </IconButton>
    )
}`;export{K as default};
