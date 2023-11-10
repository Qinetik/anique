import{A as o}from"./index-222b9f4a.js";import{M as t}from"./Menu-802480fc.js";import{I as r}from"./index-6856f9e6.js";import{c as n}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./UnstyledLink-0663e860.js";import"./index-0ebd6ae5.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
