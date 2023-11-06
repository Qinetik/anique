import{C as o}from"./index-0715b131.js";import{B as n}from"./index-99dc85aa.js";import{c as t}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";function r(){return t(o,{style:{height:"160px"},gap:"0.5em 0.75em",wrap:!0,get children(){return[t(n,{children:"First"}),t(n,{children:"Second"}),t(n,{children:"Third"}),t(n,{children:"Fourth"}),t(n,{children:"Fifth"})]}})}r.code=`import {Column} from "@qinetik/anique/column";
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
