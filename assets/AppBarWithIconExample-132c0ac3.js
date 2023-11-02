import{A as o}from"./index-cfa94871.js";import{I as r}from"./index-c5bef6b0.js";import{M as t}from"./Menu-0cea71b1.js";import{c as n}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./UL-e6a4a899.js";import"./index-f7946e34.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
