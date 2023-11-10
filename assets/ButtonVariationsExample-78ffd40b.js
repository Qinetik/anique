import{B as e}from"./index-ebcf5fc7.js";import{R as o}from"./index-5056258d.js";import{S as n}from"./Size-fe6876e6.js";import"./Theme-c9d85115.js";import{c as t}from"./entry-client-fa648c77.js";import"./index-5be97176.js";function i(){return t(o,{gap:"1em",get children(){return[t(e,{get size(){return n.Small},children:"Small Button"}),t(e,{get size(){return n.Medium},children:"Medium Button"}),t(e,{get size(){return n.Large},children:"Large Button"})]}})}i.code=`import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";
import {Size} from "@qinetik/anique/theme";

export default function ButtonVariationsExample() {
    return (
        <Row gap={"1em"}>
            <Button size={Size.Small}>Small Button</Button>
            <Button size={Size.Medium}>Medium Button</Button>
            <Button size={Size.Large}>Large Button</Button>
        </Row>
    )
}`;export{i as default};
