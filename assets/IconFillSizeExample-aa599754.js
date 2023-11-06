import{I as n}from"./index-99f4859e.js";import"./index-326c8233.js";import{A as o}from"./Theme-c9d85115.js";import"./index-505673d9.js";import{c as r}from"./entry-client-e7f04580.js";import"./index-c9b3d057.js";import"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as e}from"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import{M as i}from"./Menu-55b10e18.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";function t(){return r(e,{get children(){return[r(n,{get fill(){return o.colors.success},size:0,get children(){return r(i,{})}}),r(n,{get fill(){return o.colors.error},size:1,get children(){return r(i,{})}}),r(n,{get fill(){return o.colors.warning},size:2,get children(){return r(i,{})}})]}})}t.code=`import {Icon} from "@qinetik/anique/icon";
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
