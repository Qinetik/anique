import{A as o}from"./index-c9b3d057.js";import{M as t}from"./Menu-55b10e18.js";import{I as r}from"./index-5e9d9ab7.js";import{c as n}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./UnstyledLink-3a662916.js";import"./index-f5b55317.js";import"./Theme-c9d85115.js";function p(){return n(o,{title:"Demo",navIcon:()=>n(r,{get children(){return n(t,{})}})})}p.code=`import {AppBar} from "@qinetik/anique/appbar";
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
