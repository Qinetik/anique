import{R as o}from"./index-f5b55317.js";import{B as n}from"./index-ce1ffc42.js";import{c as t}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";function r(){return t(o,{gap:"1em",get children(){return[t(n,{children:"First"}),t(n,{children:"Second"}),t(n,{children:"Third"}),t(n,{children:"Fourth"}),t(n,{children:"Fifth"})]}})}r.code=`import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function RowSameSizedExample() {
    return (
        <Row gap={"1em"}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
            <Button>Fourth</Button>
            <Button>Fifth</Button>
        </Row>
    )
}`;export{r as default};
