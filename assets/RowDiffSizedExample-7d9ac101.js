import{R as o}from"./index-a7d06282.js";import{B as n}from"./index-2e914305.js";import{c as t}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";function i(){return t(o,{gap:"1em",get children(){return[t(n,{size:0,children:"First"}),t(n,{size:1,children:"Second"}),t(n,{size:2,children:"Third"}),t(n,{size:3,children:"Fourth"}),t(n,{size:4,children:"Fifth"})]}})}i.code=`import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function RowDiffSizedExample() {
    return (
        <Row gap={"1em"}>
            <Button size={0}>First</Button>
            <Button size={1}>Second</Button>
            <Button size={2}>Third</Button>
            <Button size={3}>Fourth</Button>
            <Button size={4}>Fifth</Button>
        </Row>
    )
}`;export{i as default};
