import{A as r}from"./index-55909f5f.js";import{M as t}from"./Menu-4100dfe3.js";import{I as o}from"./index-1cfc4eeb.js";import{R as e}from"./index-4d1252b9.js";import{c as n}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./UnstyledLink-395be662.js";import"./Theme-c9d85115.js";function i(){return n(r,{title:"Demo",navIcon:()=>n(o,{get children(){return n(t,{})}}),get actions(){return n(e,{get children(){return[n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}})]}})}})}i.code=`import {AppBar} from "@qinetik/anique/appbar";
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
