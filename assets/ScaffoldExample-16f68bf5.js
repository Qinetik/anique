import{b as i,c as e,g as d,a as D,i as l,S as b,f as C,t as h}from"./entry-client-c6070623.js";import{s as q}from"./index-108c4257.js";import{A}from"./Theme-c9d85115.js";import{M as y}from"./index-923cd83d.js";import"./index-ebb683f1.js";import{A as R}from"./index-222b9f4a.js";import{c as _,M as H,S as O}from"./index-22b1ace7.js";import"./index-66667bdf.js";import{L as g}from"./index-eeee74a7.js";import"./index-c98928aa.js";import{D as a,S as E}from"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import{I as m}from"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import{R as N}from"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import{A as F,C as c,s as W,L as P}from"./LightDarkIcon-b0e03a7d.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import{M as V}from"./Menu-802480fc.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";import"./createGlobalStyle-5fc4339d.js";const j=h("<div>This is my footer"),z=h("<div><!$><!/><!$><!/>"),G=h("<div>");q(m)`
    ${A.breakpoints.up("md")} {
        display: none;
    }
`;function J(){return(()=>{const o=d(j);return o.style.setProperty("width","100%"),o.style.setProperty("height","200px"),o})()}function K(){const[o,t]=i(!1);let r=[];for(let n=1;n<=500;n++)r=[...r,`Content ${n}`];const[I,U]=i(!0),[u,k]=i(!0),[f,M]=i(!0),[L,w]=i(!1);return[e(F,{}),e(O,{get topBar(){return I()?()=>e(R,{navIcon:()=>e(m,{onClick:()=>t(n=>!n),get children(){return e(V,{})}}),title:"Scaffold Demo",get actions(){return e(N,{gap:"0.5em",get children(){return[e(g,{label:"Left Sidebar",isChecked:u,onChange:n=>k(n)}),e(g,{label:"Right Sidebar",isChecked:f,onChange:n=>M(n)}),e(Q,{}),(()=>{const n=d(z),s=n.firstChild,[S,x]=D(s.nextSibling),B=S.nextSibling,[T,v]=D(B.nextSibling);return n.style.setProperty("position","relative"),l(n,e(m,{onClick:()=>w($=>!$),get children(){return e(y,{})}}),S,x),l(n,e(b,{get when(){return L()},get children(){return e(_,{style:{right:"0"},onCloseRequest:()=>w(!1),get children(){return e(H,{children:"Demo Dropdown"})}})}}),T,v),n})()]}})}}):void 0},get drawerContent(){return u()?()=>e(p,{mobile:!1}):void 0},drawerWidth:"300px",oppositeDrawerWidth:"300px",get oppositeDrawerContent(){return f()?()=>e(p,{mobile:!1}):void 0},showMobileDrawer:o,mobileDrawerContent:()=>e(p,{mobile:!0}),onDismissMobileDrawer:()=>t(!1),get children(){return[C(()=>r.map(n=>(()=>{const s=d(G);return l(s,n),s})())),e(J,{})]}})]}function p(o){let t=[];for(let r=1;r<=25;r++)t=[...t,`Content ${r}`];return e(E,{get children(){return[e(a,{isActive:!0,children:"The Chosen One"}),e(b,{get when(){return o.mobile},get children(){return[e(a,{children:"Second Something"}),e(a,{children:"Third Something"}),e(a,{children:"Fourth Something"})]}}),C(()=>t.map(r=>e(a,{children:r})))]}})}function Q(){return e(m,{onClick:()=>{const o=document.documentElement.className;let t;o==c.Light?t=c.Dark:t=c.Light,document.documentElement.className=t,W(t)},get children(){return e(P,{})}})}K.code=`import {styled} from "@qinetik/emotion";
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
