import{A as o}from"./index-c7e055fe.js";import{I as r}from"./index-e26dcbaa.js";import{M as t}from"./Menu-b86ecec2.js";import{c as n}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./index-57c7de99.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
import {Icon} from "@qinetik/anique/icon";
import Menu from "../../../../solid/icons/Menu";

export default function AppBarWithIconExample() {
    return (
        <AppBar
            title={"Demo"}
            navIcon={() => (
                <Icon>
                    <Menu/>
                </Icon>
            )}
        />
    )
}`;export{p as default};
