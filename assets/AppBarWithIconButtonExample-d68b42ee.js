import{A as o}from"./index-5cdee6ed.js";import{M as t}from"./Menu-28504fdf.js";import{I as r}from"./index-b9c452d6.js";import{c as n}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./UL-ae71d882.js";import"./index-a7d06282.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
