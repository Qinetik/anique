import{I as n}from"./index-b3b79d55.js";import"./index-123f5b0d.js";import{A as o}from"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{c as r}from"./entry-client-b1cdb755.js";import"./index-9819aab5.js";import"./index-8f15c368.js";import"./index-69b2c138.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import{R as e}from"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import{M as i}from"./Menu-12197ead.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";function t(){return r(e,{get children(){return[r(n,{get fill(){return o.colors.success},size:0,get children(){return r(i,{})}}),r(n,{get fill(){return o.colors.error},size:1,get children(){return r(i,{})}}),r(n,{get fill(){return o.colors.warning},size:2,get children(){return r(i,{})}})]}})}t.code=`import {Icon} from "@qinetik/anique/icon";
import {Anique, Row} from "@qinetik/anique";
import Menu from "../../../../solid/icons/Menu";

export default function IconFillSizeExample() {
    return (
        <Row>
            <Icon
                fill={Anique.colors.success}
                size={0}
            >
                <Menu/>
            </Icon>
            <Icon
                fill={Anique.colors.error}
                size={1}
            >
                <Menu/>
            </Icon>
            <Icon
                fill={Anique.colors.warning}
                size={2}
            >
                <Menu/>
            </Icon>
        </Row>
    )
}`;export{t as default};
