import{b as i,c as e,g as p,a as S,i as l,S as D,f as g,t as c}from"./entry-client-efb8f723.js";import{s as y}from"./index-e694302e.js";import{A as R}from"./Theme-c9d85115.js";import{M as T}from"./index-149a8a7e.js";import"./index-299bfccf.js";import{A as v}from"./index-b09005ba.js";import{L as b,f as L,M as _,S as H}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import{D as a,S as O}from"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import{I as d}from"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as F}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import{A as W}from"./AniqueThemes-a3fe4429.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{M as E}from"./Menu-03833eb2.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";import"./createGlobalStyle-ed258bb1.js";const N=c("<div>This is my footer"),P=c("<div><!$><!/><!$><!/>"),V=c("<div>");y(d)`
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
