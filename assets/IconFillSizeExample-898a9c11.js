import{I as r}from"./index-0f3f083d.js";import"./index-755bc77f.js";import{A as i}from"./Theme-c9d85115.js";import"./index-9b146908.js";import{c as o}from"./entry-client-a96cbc4d.js";import"./index-41256d2f.js";import"./index-b3c017de.js";import"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import{R as t}from"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import{M as n}from"./Menu-7421c823.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";function e(){return o(t,{get children(){return[o(r,{get fill(){return i.colors.success},size:2,get children(){return o(n,{})}}),o(r,{get fill(){return i.colors.error},size:2,get children(){return o(n,{})}})]}})}e.code=`import {Icon} from "@qinetik/anique/icon";
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
