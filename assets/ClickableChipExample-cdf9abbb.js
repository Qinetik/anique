import{c as i,g as t,t as r}from"./entry-client-3af6d313.js";import{d as n}from"./index-1830aefe.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import{v as p}from"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import"./index-6d8184a4.js";import"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import{I as e}from"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import{R as o}from"./index-f7946e34.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const a=r("<span>My First Chip"),m=r("<span>My Second Chip"),l=r("<span>My Third Chip"),c=r("<span>My Last Chip");function C(){return i(o,{gap:"1em",get children(){return[i(n,{get children(){return t(a)}}),i(n,{variation:"primary",get children(){return t(m)}}),i(n,{variation:"accent",get children(){return t(l)}}),i(n,{get children(){return[i(e,{size:-.5,get children(){return i(p,{})}}),t(c),i(e,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return i(p,{})}})]}})]}})}C.code=`import {ClickableChip} from "@qinetik/anique/chip";
import {IconButton, Row} from "@qinetik/anique";
import {ChevronUp} from "@qinetik/anique-icons";

export default function ClickableChipExample() {
    return (
        <Row gap={"1em"}>
            <ClickableChip>
                <span>My First Chip</span>
            </ClickableChip>
            <ClickableChip variation={"primary"}>
                <span>My Second Chip</span>
            </ClickableChip>
            <ClickableChip variation={"accent"}>
                <span>My Third Chip</span>
            </ClickableChip>
            <ClickableChip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </ClickableChip>
        </Row>
    )
}`;export{C as default};
