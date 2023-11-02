import{A as o}from"./index-cfa94871.js";import{M as t}from"./Menu-0cea71b1.js";import{I as r}from"./index-98966c2c.js";import{c as n}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./UL-e6a4a899.js";import"./index-f7946e34.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
