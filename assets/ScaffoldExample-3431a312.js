import{b as i,c as e,g as p,a as w,i as l,S as b,f as D,t as c}from"./entry-client-2ac2a0bd.js";import{s as q}from"./index-6df8a466.js";import{A as T}from"./Theme-c9d85115.js";import{M as v}from"./index-049cff28.js";import"./index-9f77492a.js";import{A as L}from"./index-5cdee6ed.js";import{L as S,f as R,M as _,S as H}from"./index-1f767762.js";import"./index-2e914305.js";import"./index-756d1732.js";import{D as a,S as O}from"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import{I as d}from"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import{R as F}from"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import{A as W}from"./AniqueThemes-9b9ac866.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import{M as E}from"./Menu-28504fdf.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";import"./createGlobalStyle-25c4266a.js";const N=c("<div>This is my footer"),P=c("<div><!$><!/><!$><!/>"),V=c("<div>");q(d)`
    ${T.breakpoints.up("md")} {
        display: none;
    }
`;function j(){return(()=>{const r=p(N);return r.style.setProperty("width","100%"),r.style.setProperty("height","200px"),r})()}function z(){const[r,o]=i(!1);let t=[];for(let n=1;n<=500;n++)t=[...t,`Content ${n}`];const[g,G]=i(!0),[h,C]=i(!0),[u,I]=i(!0),[M,k]=i(!1);return[e(W,{}),e(H,{get topBar(){return g()?()=>e(L,{navIcon:()=>e(d,{onClick:()=>o(n=>!n),get children(){return e(E,{})}}),title:"Scaffold Demo",get actions(){return e(F,{gap:"0.5em",get children(){return[e(S,{label:"Left Sidebar",isChecked:h,onChange:n=>C(n)}),e(S,{label:"Right Sidebar",isChecked:u,onChange:n=>I(n)}),(()=>{const n=p(P),s=n.firstChild,[f,B]=w(s.nextSibling),x=f.nextSibling,[$,A]=w(x.nextSibling);return n.style.setProperty("position","relative"),l(n,e(d,{onClick:()=>k(y=>!y),get children(){return e(v,{})}}),f,B),l(n,e(b,{get when(){return M()},get children(){return e(R,{style:{right:"0"},get children(){return e(_,{children:"Demo Dropdown"})}})}}),$,A),n})()]}})}}):void 0},get drawerContent(){return h()?()=>e(m,{mobile:!1}):void 0},drawerWidth:"300px",oppositeDrawerWidth:"300px",get oppositeDrawerContent(){return u()?()=>e(m,{mobile:!1}):void 0},showMobileDrawer:r,mobileDrawerContent:()=>e(m,{mobile:!0}),onDismissMobileDrawer:()=>o(!1),get children(){return[D(()=>t.map(n=>(()=>{const s=p(V);return l(s,n),s})())),e(j,{})]}})]}function m(r){let o=[];for(let t=1;t<=25;t++)o=[...o,`Content ${t}`];return e(O,{get children(){return[e(a,{isActive:!0,children:"The Chosen One"}),e(b,{get when(){return r.mobile},get children(){return[e(a,{children:"Second Something"}),e(a,{children:"Third Something"}),e(a,{children:"Fourth Something"})]}}),D(()=>o.map(t=>e(a,{children:t})))]}})}z.code=`import {styled} from "@qinetik/emotion";
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
                                        <DropdownMenu style={{right: "0"}}>
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
