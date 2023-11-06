import{C as o}from"./index-6bcccf20.js";import{B as n}from"./index-69b2c138.js";import{c as t}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";function r(){return t(o,{gap:"1em",get children(){return[t(n,{children:"First"}),t(n,{children:"Second"}),t(n,{children:"Third"}),t(n,{children:"Fourth"}),t(n,{children:"Fifth"})]}})}r.code=`import {Column} from "@qinetik/anique/column";
import {Button} from "@qinetik/anique/button";

export default function ColSameSizedExample(){
    return (
        <Column gap={"1em"}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
            <Button>Fourth</Button>
            <Button>Fifth</Button>
        </Column>
    )
}`;export{r as default};
