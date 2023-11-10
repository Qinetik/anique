import{A as r}from"./index-738815bd.js";import{M as t}from"./Menu-abd2039e.js";import{I as o}from"./index-a4a13cad.js";import{R as e}from"./index-5056258d.js";import{c as n}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./UnstyledLink-08d09b7e.js";import"./Theme-c9d85115.js";function i(){return n(r,{title:"Demo",navIcon:()=>n(o,{get children(){return n(t,{})}}),get actions(){return n(e,{get children(){return[n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}})]}})}})}i.code=`import {AppBar} from "@qinetik/anique/appbar";
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
