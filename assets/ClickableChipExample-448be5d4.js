import{c as i,g as t,t as r}from"./entry-client-e7f04580.js";import{a as n}from"./index-7a72bcca.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import{v as p}from"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import{I as e}from"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as o}from"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const a=r("<span>My First Chip"),m=r("<span>My Second Chip"),l=r("<span>My Third Chip"),c=r("<span>My Last Chip");function C(){return i(o,{gap:"1em",get children(){return[i(n,{get children(){return t(a)}}),i(n,{variation:"primary",get children(){return t(m)}}),i(n,{variation:"accent",get children(){return t(l)}}),i(n,{get children(){return[i(e,{size:-.5,get children(){return i(p,{})}}),t(c),i(e,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return i(p,{})}})]}})]}})}C.code=`import {ClickableChip} from "@qinetik/anique/chip";
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
