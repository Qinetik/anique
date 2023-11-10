import{A as r}from"./index-c7e055fe.js";import{M as t}from"./Menu-b86ecec2.js";import{I as o}from"./index-87c6ec70.js";import{R as e}from"./index-57c7de99.js";import{c as n}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./UnstyledLink-d0c164d4.js";import"./Theme-c9d85115.js";function i(){return n(r,{title:"Demo",navIcon:()=>n(o,{get children(){return n(t,{})}}),get actions(){return n(e,{get children(){return[n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}})]}})}})}i.code=`import {AppBar} from "@qinetik/anique/appbar";
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
