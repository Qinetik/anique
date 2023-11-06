import{c as e,g as c,t as d}from"./entry-client-b1cdb755.js";import{S as I,D as u,a as m}from"./index-b9566db1.js";import{s as w}from"./index-123f5b0d.js";import{A as s}from"./Theme-c9d85115.js";import{g as l}from"./_commonjsHelpers-de833af9.js";import{r as h}from"./web-0a439558.js";import{B as D}from"./BadgeIcon-3005168e.js";var t=h;const f=({color:r="currentColor",size:n=24,children:p,...a})=>t.createComponent(t.Dynamic,t.mergeProps({component:"svg"},a,{width:n,height:n,fill:r,viewBox:"0 0 24 24",get children(){return t.createComponent(t.Dynamic,{component:"path",d:"M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z"})}}));var v=f;const H=l(v);var i=h;const g=({color:r="currentColor",size:n=24,children:p,...a})=>i.createComponent(i.Dynamic,i.mergeProps({component:"svg"},a,{width:n,height:n,fill:r,viewBox:"0 0 24 24",get children(){return i.createComponent(i.Dynamic,{component:"path",d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"})}}));var k=g;const V=l(k),C=d("<span>Archive"),q=d("<span>Deleted"),A=w(I)`
    border: 1px solid ${s.colors.bg200};
    border-radius: ${s.border.smRadius};
`,o=u.withComponent("a");function y(){return e(A,{get children(){return[e(o,{href:"#",children:"Home"}),e(m,{title:"Input"}),e(o,{href:"#",children:"Services"}),e(o,{href:"#",children:"Contact"}),e(m,{title:"With Icons"}),e(o,{id:"archive",href:"#archive",get children(){return[e(H,{}),c(C)]}}),e(o,{id:"deleted",href:"#deleted",get children(){return[e(V,{}),(()=>{const r=c(q);return r.style.setProperty("flex","1"),r})(),e(D,{})]}})]}})}y.code=`import {DrawerItem, DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
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
}`;export{y as default};
