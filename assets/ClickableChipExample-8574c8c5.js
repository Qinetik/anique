import{c as i,g as t,t as r}from"./entry-client-2fda6d46.js";import{d as n}from"./index-8c496293.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import{v as p}from"./index-50dde1b3.js";import"./index-d65ca23f.js";import"./index-880dcc90.js";import"./index-7a43a4af.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import{I as e}from"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import{R as o}from"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const a=r("<span>My First Chip"),m=r("<span>My Second Chip"),l=r("<span>My Third Chip"),c=r("<span>My Last Chip");function C(){return i(o,{gap:"1em",get children(){return[i(n,{get children(){return t(a)}}),i(n,{variation:"primary",get children(){return t(m)}}),i(n,{variation:"accent",get children(){return t(l)}}),i(n,{get children(){return[i(e,{size:-.5,get children(){return i(p,{})}}),t(c),i(e,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return i(p,{})}})]}})]}})}C.code=`import {ClickableChip} from "@qinetik/anique/chip";
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
