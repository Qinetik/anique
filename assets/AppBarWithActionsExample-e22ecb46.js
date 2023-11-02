import{A as r}from"./index-b09005ba.js";import{M as t}from"./Menu-03833eb2.js";import{I as o}from"./index-74c14fc3.js";import{R as e}from"./index-fc4b21a7.js";import{c as n}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./UL-596ed081.js";import"./Theme-c9d85115.js";function i(){return n(r,{title:"Demo",navIcon:()=>n(o,{get children(){return n(t,{})}}),get actions(){return n(e,{get children(){return[n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}}),n(o,{get children(){return n(t,{})}})]}})}})}i.code=`import {AppBar} from "@qinetik/anique/appbar";
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
