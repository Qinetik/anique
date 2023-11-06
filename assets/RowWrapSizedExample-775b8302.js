import{R as e}from"./index-fe3b8c3b.js";import{B as n}from"./index-69b2c138.js";import{c as t}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";function o(){return t(e,{style:{width:"320px"},gap:"0.2em",wrap:!0,get children(){return[t(n,{children:"Item #1"}),t(n,{children:"Item #2"}),t(n,{children:"Item #3"}),t(n,{children:"Item #4"}),t(n,{children:"Item #5"})]}})}o.code=`import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function RowWrapSizedExample() {
    return (
        <Row style={{ width : "320px" }} gap={"0.2em"} wrap>
            <Button>Item #1</Button>
            <Button>Item #2</Button>
            <Button>Item #3</Button>
            <Button>Item #4</Button>
            <Button>Item #5</Button>
        </Row>
    )
}`;export{o as default};
