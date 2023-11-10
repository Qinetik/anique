import{A as o}from"./index-738815bd.js";import{I as r}from"./index-906196f8.js";import{M as t}from"./Menu-abd2039e.js";import{c as n}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./index-5056258d.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
