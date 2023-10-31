import{F as e}from"./index-7069a893.js";import{S as r}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{c as n}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import{I as i}from"./index-9f77492a.js";import{R as o}from"./index-a7d06282.js";import{M as t}from"./Menu-28504fdf.js";function m(){return n(o,{gap:"2em",get children(){return[n(e,{get size(){return r.Small},get children(){return n(i,{get children(){return n(t,{})}})}}),n(e,{get size(){return r.Medium},get children(){return n(i,{get children(){return n(t,{})}})}}),n(e,{get size(){return r.Large},get children(){return n(i,{get children(){return n(t,{})}})}})]}})}m.code=`import {Fab} from "@qinetik/anique/fab";
import {Size} from "@qinetik/anique/theme";
import {Icon} from "@qinetik/anique/icon";
import {Row} from "@qinetik/anique/row";
import Menu from "../../../../solid/icons/Menu";

export default function FabExample() {
    return (
        <Row gap={"2em"}>
            <Fab size={Size.Small}>
                <Icon>
                    <Menu/>
                </Icon>
            </Fab>
            <Fab size={Size.Medium}>
                <Icon>
                    <Menu/>
                </Icon>
            </Fab>
            <Fab size={Size.Large}>
                <Icon>
                    <Menu/>
                </Icon>
            </Fab>
        </Row>
    )
}`;export{m as default};
