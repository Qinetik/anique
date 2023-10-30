import{R as d}from"./index-b49aba21.js";import{E as n}from"./index-1fc8dcd4.js";import{S as t}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{c as e}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import{I as r}from"./index-0f3f083d.js";import{M as i}from"./Menu-7421c823.js";import{T as o}from"./index-ffe50960.js";function m(){return e(d,{gap:"2em",get children(){return[e(n,{get size(){return t.Small},get children(){return[e(r,{get children(){return e(i,{})}}),e(o,{children:"Extended Me"})]}}),e(n,{get size(){return t.Medium},get children(){return[e(r,{get children(){return e(i,{})}}),e(o,{children:"Extended Me"})]}}),e(n,{get size(){return t.Large},get children(){return[e(r,{get children(){return e(i,{})}}),e(o,{children:"Extended Me"})]}})]}})}m.code=`import {Row} from "@qinetik/anique/row";
import {ExtendedFab} from "@qinetik/anique/fab";
import {Size} from "@qinetik/anique/theme";
import {Icon} from "@qinetik/anique/icon";
import Menu from "../../../../solid/icons/Menu";
import {Text} from "@qinetik/anique/text";

export default function ExtendedFabExample() {
    return (
        <Row gap={"2em"}>
            <ExtendedFab size={Size.Small}>
                <Icon>
                    <Menu/>
                </Icon>
                <Text>
                    Extended Me
                </Text>
            </ExtendedFab>
            <ExtendedFab size={Size.Medium}>
                <Icon>
                    <Menu/>
                </Icon>
                <Text>
                    Extended Me
                </Text>
            </ExtendedFab>
            <ExtendedFab size={Size.Large}>
                <Icon>
                    <Menu/>
                </Icon>
                <Text>
                    Extended Me
                </Text>
            </ExtendedFab>
        </Row>
    )
}`;export{m as default};
