import{A as r}from"./index-222b9f4a.js";import{M as t}from"./Menu-802480fc.js";import{I as o}from"./index-6856f9e6.js";import{R as e}from"./index-0ebd6ae5.js";import{c as n}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./UnstyledLink-0663e860.js";import"./Theme-c9d85115.js";function i(){return n(r,{title:"Demo",navIcon:()=>n(o,{get children(){return n(t,{})}}),get actions(){return n(e,{get children(){return[n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}})]}})}})}i.code=`import {AppBar} from "@qinetik/anique/appbar";
import Menu from "../../../../solid/icons/Menu";
import {IconButton} from "@qinetik/anique/icon-button";
import {Row} from "@qinetik/anique/row";

export default function AppBarWithActionsExample() {
    return (
        <AppBar
            title={"Demo"}
            navIcon={() => (
                <IconButton>
                    <Menu/>
                </IconButton>
            )}
            actions={(
                <Row>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                </Row>
            )}
        />
    )
}`;export{i as default};
