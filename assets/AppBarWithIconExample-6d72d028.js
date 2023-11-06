import{A as o}from"./index-55909f5f.js";import{I as r}from"./index-d1661098.js";import{M as t}from"./Menu-4100dfe3.js";import{c as n}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./UnstyledLink-395be662.js";import"./index-4d1252b9.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
