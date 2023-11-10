import{I as o}from"./index-906196f8.js";import"./index-5be97176.js";import{A as n}from"./Theme-c9d85115.js";import"./index-a3de9b85.js";import{c as r}from"./entry-client-fa648c77.js";import"./index-738815bd.js";import"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import{R as t}from"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{M as i}from"./Menu-abd2039e.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";function e(){return r(t,{get children(){return[r(o,{get fill(){return n.colors.success},size:0,get children(){return r(i,{})}}),r(o,{get fill(){return n.colors.error},size:1,get children(){return r(i,{})}}),r(o,{get fill(){return n.colors.warning},size:2,get children(){return r(i,{})}})]}})}e.code=`import {Icon} from "@qinetik/anique/icon";
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
}`;export{e as default};
