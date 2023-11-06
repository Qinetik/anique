import{A as o}from"./index-9819aab5.js";import{M as t}from"./Menu-12197ead.js";import{I as r}from"./index-70c7726a.js";import{c as n}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./UnstyledLink-f3bad3fa.js";import"./index-fe3b8c3b.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
