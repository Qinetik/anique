import{A as o}from"./index-c7e055fe.js";import{M as t}from"./Menu-b86ecec2.js";import{I as r}from"./index-87c6ec70.js";import{c as n}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./index-57c7de99.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
import Menu from "../../../../solid/icons/Menu";
import {IconButton} from "@qinetik/anique/icon-button";

export default function AppBarWithIconButtonExample() {
    return (
        <AppBar
            title={"Demo"}
            navIcon={() => (
                <IconButton>
                    <Menu/>
                </IconButton>
            )}
        />
    )
}`;export{p as default};
