import{A as o}from"./index-880dcc90.js";import{M as t}from"./Menu-f2088714.js";import{I as r}from"./index-a88f9566.js";import{c as n}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./UL-a265d12a.js";import"./index-7a2b10b5.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
