import{C as o}from"./index-e7aa7392.js";import{B as n}from"./index-7a43a4af.js";import{c as t}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";function i(){return t(o,{gap:"1em",get children(){return[t(n,{size:0,children:"First"}),t(n,{size:1,children:"Second"}),t(n,{size:2,children:"Third"}),t(n,{size:3,children:"Fourth"}),t(n,{size:4,children:"Fifth"})]}})}i.code=`import {Column} from "@qinetik/anique/column";
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
