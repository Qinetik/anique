import{I as e}from"./index-70c7726a.js";import{S as t}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{c as n}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import{R as r}from"./index-fe3b8c3b.js";import{M as o}from"./Menu-12197ead.js";function i(){return n(r,{gap:"2em",get children(){return[n(e,{get size(){return t.Small},get children(){return n(o,{})}}),n(e,{get size(){return t.Medium},get children(){return n(o,{})}}),n(e,{get size(){return t.Large},get children(){return n(o,{})}})]}})}i.code=`import {IconButton} from "@qinetik/anique/icon-button";
import {Size} from "@qinetik/anique/theme";
import {Row} from "@qinetik/anique/row";
import Menu from "../../../../solid/icons/Menu";

export default function BasicIconButtonExample() {
    return (
        <Row gap={"2em"}>
            <IconButton size={Size.Small}>
                <Menu/>
            </IconButton>
            <IconButton size={Size.Medium}>
                <Menu/>
            </IconButton>
            <IconButton size={Size.Large}>
                <Menu/>
            </IconButton>
        </Row>
    )
}`;export{i as default};
