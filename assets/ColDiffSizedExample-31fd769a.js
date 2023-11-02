import{C as o}from"./index-f6f07d1f.js";import{B as n}from"./index-6d8184a4.js";import{c as t}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";function i(){return t(o,{gap:"1em",get children(){return[t(n,{size:0,children:"First"}),t(n,{size:1,children:"Second"}),t(n,{size:2,children:"Third"}),t(n,{size:3,children:"Fourth"}),t(n,{size:4,children:"Fifth"})]}})}i.code=`import {Column} from "@qinetik/anique/column";
import {Button} from "@qinetik/anique/button";

export default function ColDiffSizedExample(){
    return (
        <Column gap={"1em"}>
            <Button size={0}>First</Button>
            <Button size={1}>Second</Button>
            <Button size={2}>Third</Button>
            <Button size={3}>Fourth</Button>
            <Button size={4}>Fifth</Button>
        </Column>
    )
}`;export{i as default};
