import{c as r,g as t,i as n,t as m}from"./entry-client-2ac2a0bd.js";import{S as s,D as a,a as c}from"./index-11ae770f.js";import{s as d}from"./index-6df8a466.js";import{A as i}from"./Theme-c9d85115.js";const o=m("<a href=#>"),l=d(s)`
    border: 1px solid ${i.colors.bg200};
    border-radius: ${i.border.smRadius};

    & a {
        text-decoration: none;
    }
`;function u(){return r(l,{get children(){return[(()=>{const e=t(o);return n(e,r(a,{children:"Home"})),e})(),r(c,{title:"Input"}),(()=>{const e=t(o);return n(e,r(a,{children:"Services"})),e})(),(()=>{const e=t(o);return n(e,r(a,{children:"Contact"})),e})()]}})}u.code=`import {DrawerItem, DrawerSectionItem, StaticDrawer} from "@qinetik/anique/drawer";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme/Theme";

const StyledDrawer = styled(StaticDrawer)\`
    border: 1px solid \${Anique.colors.bg200};
    border-radius: \${Anique.border.smRadius};

    & a {
        text-decoration: none;
    }
\`

export default function BasicDrawerExample() {
    return (
        <StyledDrawer>
            <a href={"#"}>
                <DrawerItem>Home</DrawerItem>
            </a>
            <DrawerSectionItem title={"Input"}/>
            <a href="#">
                <DrawerItem>
                    Services
                </DrawerItem>
            </a>
            <a href={"#"}>
                <DrawerItem>
                    Contact
                </DrawerItem>
            </a>
        </StyledDrawer>
    )
}`;export{u as default};
