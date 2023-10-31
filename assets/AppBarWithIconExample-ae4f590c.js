import{A as o}from"./index-5cdee6ed.js";import{I as r}from"./index-9f77492a.js";import{M as t}from"./Menu-28504fdf.js";import{c as n}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./UL-ae71d882.js";import"./index-a7d06282.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
