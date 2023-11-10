import{C as o}from"./index-459eedf5.js";import{B as n}from"./index-950dbaca.js";import{c as t}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";function r(){return t(o,{style:{height:"160px"},gap:"0.5em 0.75em",wrap:!0,get children(){return[t(n,{children:"First"}),t(n,{children:"Second"}),t(n,{children:"Third"}),t(n,{children:"Fourth"}),t(n,{children:"Fifth"})]}})}r.code=`import {Column} from "@qinetik/anique/column";
import {Button} from "@qinetik/anique/button";

export default function ColWrapExample() {
    return (
        <Column style={{height: "160px"}} gap={"0.5em 0.75em"} wrap>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
            <Button>Fourth</Button>
            <Button>Fifth</Button>
        </Column>
    )
}`;export{r as default};
