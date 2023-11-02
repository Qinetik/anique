import{A as o}from"./index-b09005ba.js";import{M as t}from"./Menu-03833eb2.js";import{I as r}from"./index-74c14fc3.js";import{c as n}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./UL-596ed081.js";import"./index-fc4b21a7.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
