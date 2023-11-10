import{c as i,g as t,t as r}from"./entry-client-f8a4ae77.js";import{a as n}from"./index-c2ccd6b4.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import{v as p}from"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import{I as e}from"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import{R as o}from"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const a=r("<span>My First Chip"),m=r("<span>My Second Chip"),l=r("<span>My Third Chip"),c=r("<span>My Last Chip");function C(){return i(o,{gap:"1em",get children(){return[i(n,{get children(){return t(a)}}),i(n,{variation:"primary",get children(){return t(m)}}),i(n,{variation:"accent",get children(){return t(l)}}),i(n,{get children(){return[i(e,{size:-.5,get children(){return i(p,{})}}),t(c),i(e,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return i(p,{})}})]}})]}})}C.code=`import {ClickableChip} from "@qinetik/anique/chip";
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
