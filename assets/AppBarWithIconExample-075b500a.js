import{A as o}from"./index-222b9f4a.js";import{I as r}from"./index-ebb683f1.js";import{M as t}from"./Menu-802480fc.js";import{c as n}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./UnstyledLink-0663e860.js";import"./index-0ebd6ae5.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
