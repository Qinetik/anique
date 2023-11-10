import{c as e,m as d,D as i,g as a,t as s}from"./entry-client-c6070623.js";import{S as h,D as p,a as c}from"./index-6082ff86.js";import{s as I}from"./index-108c4257.js";import{A as m}from"./Theme-c9d85115.js";import{B as u}from"./BadgeIcon-ce72a83d.js";const w=({color:r="currentColor",size:n=24,children:l,...o})=>e(i,d({component:"svg"},o,{width:n,height:n,fill:r,viewBox:"0 0 24 24",get children(){return e(i,{component:"path",d:"M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z"})}})),D=({color:r="currentColor",size:n=24,children:l,...o})=>e(i,d({component:"svg"},o,{width:n,height:n,fill:r,viewBox:"0 0 24 24",get children(){return e(i,{component:"path",d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"})}})),f=s("<span>Archive"),H=s("<span>Deleted"),k=I(h)`
    border: 1px solid ${m.colors.bg200};
    border-radius: ${m.border.smRadius};
`,t=p.withComponent("a");function V(){return e(k,{get children(){return[e(t,{href:"#",children:"Home"}),e(c,{title:"Input"}),e(t,{href:"#",children:"Services"}),e(t,{href:"#",children:"Contact"}),e(c,{title:"With Icons"}),e(t,{id:"archive",href:"#archive",get children(){return[e(w,{}),a(f)]}}),e(t,{id:"deleted",href:"#deleted",get children(){return[e(D,{}),(()=>{const r=a(H);return r.style.setProperty("flex","1"),r})(),e(u,{})]}})]}})}V.code=`import {DrawerItem, DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme/Theme";
import ArchiveOutlineIcon from "@qinetik/mdi/ArchiveOutlineIcon";
import MoreIcon from "@qinetik/mdi/MoreIcon";
import {IconButton} from "@qinetik/anique";
import {MoreVertIcon} from "@qinetik/anique-icons";
import TrashCanIcon from "@qinetik/mdi/TrashCanIcon";
import BadgeIcon from "@qinetik/mdi/BadgeIcon";

const StyledDrawer = styled(StaticDrawer)\`
    border: 1px solid \${Anique.colors.bg200};
    border-radius: \${Anique.border.smRadius};
\`

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
}`;export{V as default};
