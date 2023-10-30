import{A as o}from"./index-41256d2f.js";import{M as t}from"./Menu-7421c823.js";import{I as r}from"./index-1573e59b.js";import{c as n}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./UL-412bb8d8.js";import"./index-b49aba21.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
