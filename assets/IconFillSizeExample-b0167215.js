import{I as r}from"./index-c5bef6b0.js";import"./index-94caafb4.js";import{A as i}from"./Theme-c9d85115.js";import"./index-bab6a310.js";import{c as o}from"./entry-client-3af6d313.js";import"./index-cfa94871.js";import"./index-1830aefe.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import{R as t}from"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import{M as n}from"./Menu-0cea71b1.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";function e(){return o(t,{get children(){return[o(r,{get fill(){return i.colors.success},size:2,get children(){return o(n,{})}}),o(r,{get fill(){return i.colors.error},size:2,get children(){return o(n,{})}})]}})}e.code=`import {Icon} from "@qinetik/anique/icon";
import {Anique, Row} from "@qinetik/anique";
import Menu from "../../../../solid/icons/Menu";

export default function IconFillSizeExample() {
    return (
        <Row>
            <Icon
                fill={Anique.colors.success}
                size={2}
            >
                <Menu/>
            </Icon>
            <Icon
                fill={Anique.colors.error}
                size={2}
            >
                <Menu/>
            </Icon>
        </Row>
    )
}`;export{e as default};
